<template>
  <q-page-container style="padding-top: 0px;">
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs" style="padding-top: 80px">
      <div class="col-12">
        <subHeaderForAdmin />
        <q-card flat bordered class="bg-white">
        <q-table
        dense
            style="font-family: verdana"
            :title="title"
            :data="aarthilabs_data_rows"
            :columns="aarthilabs_data_columns"
            :filter="filter"
            :selected.sync="selected"
            separator="cell"
            :pagination.sync="pagination"
            :hide-header="mode === 'grid'"
            :grid="mode === 'grid'">
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="positive"
                  @click="editItem(props.row)"
                  label="View"
                  class="text-bold"
                  size="sm"
                >
                  <q-tooltip :disable="$q.platform.is.mobile"
                    >View</q-tooltip
                  >
                </q-btn>
              </q-td>
            </template>





            <template v-slot:top-right="props">
                  <q-input
                    outlined
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                    style="width: 400px"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>

                  <q-btn
                    flat
                    round
                    dense
                    :icon="
                      props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                    "
                    @click="props.toggleFullscreen"
                    v-if="mode === 'list'"
                  >
                    <q-tooltip
                      :difiltersable="$q.platform.is.mobile"
                      v-close-popup
                      >{{
                        props.inFullscreen
                          ? "Exit Fullscreen"
                          : "Toggle Fullscreen"
                      }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    flat
                    round
                    dense
                    :icon="mode === 'grid' ? 'list' : 'grid_on'"
                    @click="
                      mode = mode === 'grid' ? 'list' : 'grid';
                      separator = mode === 'grid' ? 'none' : 'horizontal';
                    "
                    v-if="!props.inFullscreen"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                      >{{ mode === "grid" ? "List" : "Grid" }}
                    </q-tooltip>
                  </q-btn>
                  <download-excel
                    v-if="aarthilabs_data_rows.length != 0"
                    :data="aarthilabs_data_rows"
                    :fields="json_fields"
                    :header="headerValue"
                    worksheet="Aarthi Booking Report"
                    :name="`${excel_date}_Aarthi Booking.xls`"
                  >
                    <q-icon color="primary" name="mdi-file-excel" size="22px" />
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                      >Download Excel
                    </q-tooltip>
                  </download-excel>
                  <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->
                </template>

        </q-table>

        </q-card>
        <q-dialog
          v-model="aarthidetails"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-layout class="bg-white">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed" />
              <div class="text-h6">
                Aarthi Labs booking details:{{ editedItem.customer_name }}
              </div>
              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card-section class="q-pa-xs" >
              <q-form ref="aarthi labs form">
                <div  >
                  <q-card class="bg-blue-grey-1 text-black" style="width: 100%">
                    <q-card-section class="text-white">
                      <div class="q-gutter-xs row">
                        <q-icon
                          name="manage_accounts"
                          color="primary"
                          size="2em"
                        />
                        <div class="text-h6 text-black text-italic">
                          Aarthi Scan Booking  Details
                        </div>
                      </div>

                      <div class="row">
                        <!-- <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Aarthi Scan Booking ID :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mh_aarthi_booking_id
                            }}</q-item-section>
                          </q-item>
                        </div> -->

                        <div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" style="border: 2px solid #ccc; border-radius: 4px; width:450px">
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;">Aarthi Scan Booking ID:</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{ editedItem.mh_aarthi_booking_id }}</span>
      <span class="copy-icon" @click.stop.prevent="copyTestingCode"  style="font-size: 24px; line-height: 24px;">&#128203;</span>
    </div>
  </div>
</div>
<div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" style="border: 2px solid #ccc; border-radius: 4px; width:350px">
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;">Customer Name :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{ editedItem.customer_name }}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodename" >&#128203;</span>
    </div>
  </div>
</div>
<div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" >
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;"> Mobile Number :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{  editedItem.mobile_number }}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodenumber" >&#128203;</span>
    </div>
  </div>
</div>

       <div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" >
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;"> Email ID :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{  editedItem.email_id }}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodeemail" >&#128203;</span>
       </div>
       </div>
       </div>
       <div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" >
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;"> Age :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{  editedItem.customer_age }}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodeage" >&#128203;</span>
       </div>
       </div>
       </div>
       <div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" >
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;">  Gender :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{  editedItem.gender }}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodegender" >&#128203;</span>
       </div>
       </div>
       </div>
       <div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" >
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;">  City :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{  editedItem.city_name }}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodecity" >&#128203;</span>
       </div>
       </div>
       </div>
       <div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" >
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;">   Center Name :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{  editedItem.aarthi_center_name}}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodecentername" >&#128203;</span>
       </div>
       </div>
       </div>
       <div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" >
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;">Appointment Date :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{editedItem.test_date}}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodetestdate" >&#128203;</span>
       </div>
       </div>
       </div>
       <div class="col-6 q-mt-lg">
  <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" >
    <div style="display: flex; align-items: center;">
      <span class="title text-primary text-h6" style="margin-right: 10px;">Appointment Time :</span>
      <span class="text-dark text-h6" style="margin-right: 10px;">{{editedItem.testdetails && editedItem.testdetails[0] && editedItem.testdetails[0].test_time}}</span>
      <span style="font-size: 24px; line-height: 24px;" class="copy-icon" @click.stop.prevent="copyTestingCodetesttime" >&#128203;</span>
       </div>
       </div>
       </div>



                        <!-- <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Customer Name :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.customer_name
                            }}</q-item-section>
                          </q-item>
                        </div> -->
                        <!-- <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Mobile Number :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mobile_number
                            }}</q-item-section>
                          </q-item>
                        </div> -->
                        <!-- <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Email Id :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.email_id
                            }}</q-item-section>
                          </q-item>
                        </div>
                      </div> -->

                      <!-- <div class="row">
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Age :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.customer_age
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Gender :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.gender
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              City :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.city_name
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Center Name :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.aarthi_center_name
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Appointment Date :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.test_date
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Appointment Time :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6"> {{ editedItem.testdetails && editedItem.testdetails[0] && editedItem.testdetails[0].test_time }}</q-item-section>
                          </q-item>
                        </div>



                      </div> -->
                      </div>
                      <table style="font-family: verdana; font-size: 15px; width: 100%;">
  <thead>
    <tr>
      <th style="text-align: center; background-color: #3f51b5; color: white; font-weight: bold;border: 1px solid black;">Sno</th>
      <th style="text-align: left; background-color: #3f51b5; color: white; font-weight: bold;border: 1px solid black;">Test Type</th>
      <th style="text-align: center; background-color: #3f51b5; color: white; font-weight: bold;border: 1px solid black;">Test Name</th>
      <th style="text-align: center; background-color: #3f51b5; color: white; font-weight: bold; border: 1px solid black;">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in editedItem.testdetails" :key="index">
      <td style="text-align: center; color: black;border: 1px solid black;">{{ item.sno }}</td>
      <td style="text-align: left; color: black;border: 1px solid black;">{{ item.test_type }}</td>
      <td style="text-align: center; color: black;border: 1px solid black;">{{ item.test_name }}</td>
      <td style="text-align: center; color: black;border: 1px solid black;">{{ item.price }}</td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: right; font-weight: bold; color: black;">Total</td>
      <td style="text-align: center; color: black;">{{ rate }}</td>
    </tr>
  </tbody>
</table>

                    </q-card-section>
                  </q-card>
                  <!-- <div class="q-pa-md" style="font-family: verdana; font-size: 15px">
                 <q-card class="text-black">
                 <q-tabs   v-model="tab"
                dense
                active-color="primary"
                indicator-color="primary"
                align="left"
                inline-label
                switch-indicator
                >
                <q-tab
                  class="secondary"
                  icon="mdi-account-multiple-plus"
                  name="test"
                  label="Test Details"
                />
                 </q-tabs>
                 <q-separator />
                 <q-tab-panels v-model="tab" animated >
                 <q-tab-panel name="test">
                  <div class="q-pa-md" style="padding-top: 10px">
                   <q-card class="text-black">
                   <q-bar
                   flat
                   class="ma-02 text-bold"
                   style="
                   max-height: 20vh;
                  font-family: verdana;
                  font-size: 15px;
                  "
                   >
                   <q-icon
                          name="mdi-account-multiple-plus"
                          color="black"
                          size="1.5em"
                          style="padding-right: 10px"
                        />
                     Test Details
                   </q-bar>
                   <q-table
                style="font-family: verdana"
                dense
                separator="cell"
                :data="editedItem.testdetails"
                :columns="testnamecolumn"
                :rows-per-page-options="[]"
                row-key="sno"

              >
              <template v-slot:bottom-row>
                  <q-td  colspan="3" style="text-align: right;font-weight: bold;"> Total </q-td>
                  <q-td colspan="1" style="text-align: center">
                    {{ rate }}
                  </q-td>
                </template>
              </q-table>
                   </q-card>
                  </div>

                 </q-tab-panel>
                 </q-tab-panels>
                 </q-card>
                 </div> -->
                </div>
              </q-form>


            </q-card-section>
          </q-layout>
        </q-dialog>
      </div>

    </div>
  </q-page>
</q-page-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import moment from "moment";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      tab: "test",
      testdetails: [],


      headerValue: "Aarthi Booking Report",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),

      json_fields: {
        "Sno": "sno",
        " City": "city_name",
        "Aarthi Booking Id": "mh_aarthi_booking_id",

        "Aarthi Center Name": "aarthi_center_name",
        "Mobile Number": "mobile_number",
        "Alternate Mobile Number": "secondary_mobile_no",
        "Customer Name": "customer_name",
        "Customer Age": "customer_age",
        "Customer Gender": "gender",
        "Emails Id": "email_id",
        "Number Of Test": "no_of_tests",
        "Total Price": "total_price",
        "Booked Date": "booked_date",
        "Test Date": "test_date",
        "Status": "status",
      },
      testnamecolumn: [
        {
          name: "sno",
          label: "Sno",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "sno",
          headerStyle: {
        fontWeight: "bold"
      }
        },
        {
          align: "left",
          headerClasses: "bg-indigo-10 text-white",
          name: "test_type",
          label: "Test Type",

          field: "test_type",
          headerStyle: {
        fontWeight: "bold"
      }
        },
        {
          name: "test_name",
          headerClasses: "bg-indigo-10 text-white",
          label: "Test Name",
          align: "center",
          field: "test_name",
          headerStyle: {
        fontWeight: "bold"
      }
        },
        {
          name: "price",
          headerClasses: "bg-indigo-10 text-white",
          label: "Price",
          align: "center",
          field: "price",
          headerStyle: {
        fontWeight: "bold"
      }
        },
      ],
      title: "Aarthi Labs Booking details",
      filter: "",
      selected: [],
      editedItem: "",
      aarthidetails: false,
      maximizedToggle: true,
      mode: "list",
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
    };
  },
  mounted(){
    this.$store.dispatch("booking/getAarthilabDetails");
  },
  computed:{
    ...mapState({

      rate() {
  if (this.editedItem.testdetails && this.editedItem.testdetails.length > 0) {
    return this.editedItem.testdetails.reduce(
      (total, row) => total + parseInt(row.price),
      0
    );
  } else {
    return 0;
  }
},

      ...mapGetters("booking", ["aarthilabs_data_rows"]),
      aarthilabs_data_columns: (state) => state.booking.aarthilabs_data_columns,
      aarthilabs_data_rows: (state) => state.booking.aarthilabs_data_rows,
    }),
  },
  methods:{
    ...mapActions("booking", ["getAarthilabDetails"]),


    copyTestingCode() {
      const textToCopy = this.editedItem.mh_aarthi_booking_id;
      navigator.clipboard.writeText(textToCopy);
    },

    copyTestingCodename() {
      const textToCopyname = this.editedItem.customer_name;
      navigator.clipboard.writeText(textToCopyname);
    },
    copyTestingCodenumber(){
      const textToCopyname = this.editedItem.mobile_number;
      navigator.clipboard.writeText(textToCopyname);

    },
    copyTestingCodeemail(){
      const textToCopyemail = this.editedItem.email_id;
      navigator.clipboard.writeText(textToCopyemail);
    },
    copyTestingCodeage(){
      const textToCopyage = this.editedItem.customer_age;
      navigator.clipboard.writeText(textToCopyage);
    },
    copyTestingCodegender(){
      const textToCopygender = this.editedItem.gender;
      navigator.clipboard.writeText(textToCopygender);
    },
    copyTestingCodecity(){
      const textToCopycity = this.editedItem.city_name;
      navigator.clipboard.writeText(textToCopycity);
    },
    copyTestingCodecentername(){
      const textToCopycentername = this.editedItem.aarthi_center_name;
      navigator.clipboard.writeText(textToCopycentername);
    },
    copyTestingCodetestdate(){
      const textToCopytestdate = this.editedItem.test_date;
      navigator.clipboard.writeText(textToCopytestdate);
    },
    copyTestingCodetesttime(){
      const textToCopytestime = this.editedItem.testdetails &&this.editedItem.testdetails[0] && this.editedItem.testdetails[0].test_time;
      navigator.clipboard.writeText(textToCopytestime);
    },
editItem(item) {

this.editedItem = Object.assign({}, item);
this.getAarthilabDetails(this.editedItem);
this.aarthidetails = true;


},


  }

};
</script>
