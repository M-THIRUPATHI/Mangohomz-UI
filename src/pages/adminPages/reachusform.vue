<template>
  <q-page-container  style="padding-top:0px">
  <q-page>

    <div class="row q-col-gutter-sm q-ma-xs" style="padding-top: 100px">

      <div class="col-12">
        <subHeaderForAdmin />
        <q-card flat bordered class="bg-white">
          <q-table
            dense
            style="font-family: verdana"
            :title="title"
            :data="reachus_data_rows"
            :columns="reachus_data_columns"
            :filter="filter"
            :selected.sync="selected"

            separator="cell"
            :pagination.sync="pagination"
            :hide-header="mode === 'grid'"
            :grid="mode === 'grid'"
          >
            <template v-slot:top-right="props">

              <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: 10px;
                    "
                  >

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
              </div>
              <q-btn
                flat
                round
                dense
                :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen"
                v-if="mode === 'list'"
              >
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                  >{{
                    props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
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
                v-if="reachus_data_rows.length != 0"
                :data="reachus_data_rows"
                :fields="json_fields"
                :header="headerValue"
                worksheet="MH REACH US DATA (MHRU)"
                :name="`${excel_date}_Custreachusdata.xls`"
              >
                <q-icon color="primary" name="mdi-file-excel" size="22px" />
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                  >Download Excel
                </q-tooltip>
              </download-excel>
            </template>

            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="positive"
                  @click="editItem(props.row)"
                  label="Take Action"
                  class="text-bold"
                  size="sm"
                >
                  <q-tooltip :disable="$q.platform.is.mobile"
                    >Take Action</q-tooltip
                  >
                </q-btn>
              </q-td>
            </template>
          </q-table>
        </q-card>
        <!-- Add Take Action Form DEtails-->
        <q-dialog
          v-model="details"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-layout class="bg-white">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed" />
              <div class="text-h6">
                Reach Us Form Details:{{ editedItem.patient_name }}
              </div>
              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card-section class="q-pa-xs" >
              <q-form ref="verifyItem">
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
                          ReachUs Details
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Reach Us ID :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.reachus_id
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Patient Name :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.patient_name
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              hospital Name :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.hospital_name
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Contact Email :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.contact_email
                            }}</q-item-section>
                          </q-item>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Mobile Number :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mobile_number
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Patient Location :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.patient_location
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Message :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.message
                            }}</q-item-section>
                          </q-item>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="row q-pa-sm q-gutter-sm">
                  <q-input
                    outlined
                    dense
                    label="Remarks"
                    style="width: 500px"
                    lazy-rules
                    type="textarea"
                    label-color="black"
                    v-model="verifyItem.remarks"
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || 'Please enter Remarks',
                    ]"
                  >
                  </q-input>

                  <strong
                    class="text-weight-bold text-primary q-pa-md"
                    style="font-family: verdana; font-size: 18px"
                  >
                    Executive Name Action Taken By :
                  </strong>
                  <q-input
                    dense
                    outlined
                    lazy-rules
                    style="margin-top: 1.2%"
                    label-color="black"
                    hide-bottom-space
                    v-model="verifyItem.action_takenby"
                  >
                  </q-input>
                </div>
              </q-form>
                  <div class="q-pa-sm q-pl-md row justify-end">
                      <q-btn no-caps  color="secondary" @click="actionTakenBy"
                        >Submit
                      </q-btn>
                  </div>
              <div>
                <q-card flat bordered class="bg-white">
          <q-table
            dense
            style="font-family: verdana"
            :title="title1"
            :data="takeaction_data_rows"
            :columns="takeaction_data_columns"
            :filter="filter"
            :selected.sync="selected"
            separator="cell"
            :pagination.sync="pagination"
            :hide-header="mode === 'grid'"
            :grid="mode === 'grid'"
          >
          </q-table>
          </q-card>
              </div>
            </q-card-section>
          </q-layout>
        </q-dialog>
      </div>
    </div>
  </q-page>
</q-page-container>
</template>

<script>
import moment from "moment";
import { mapState, mapActions, mapGetters } from "vuex";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      title: "Reach us Form Details",
      title1: "Action Taken By Details",
      filter: "",
      selected: [],
      mode: "list",
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      verifyItem: {
        remarks: "",
        action_takenby:"",
        hospitalName: ""
      },
      details: false,
      maximizedToggle: true,
      editedItem: "",
      headerValue: "MH REACH US DATA (MHRU)",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        Sno: "sno",
        "Reachus Id": "reachus_id",
        "hospital Name": "hospital_name",
        "contact Email": "contact_email",
        "Mobile Number": "mobile_number",
        "Patient Location": "patient_location",
        Message: "message",
      },
    };
  },
  mounted() {
    this.$store.dispatch("account/getReachusFormDetails");

  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      ...mapGetters("account", ["reachus_data_rows"]),
      ...mapGetters("account", ["takeaction_data_rows"]),
      reachus_data_columns: (state) => state.account.reachus_data_columns,
      takeaction_data_columns: (state) => state.account.takeaction_data_columns,
    }),
  },
  methods: {
    ...mapActions("account", ["getReachusFormDetails"]),
    ...mapActions("account", ["getActionsDetails"]),
    ...mapActions("account", ["reachusActionTakeSaving"]),

    editItem(item) {

      this.editedItem = Object.assign({}, item);
      this.getReachusFormDetails(this.editedItem);
      this.verifyItem.hospitalName= this.editedItem.hospital_name;
      this.verifyItem.reachus_id= this.editedItem.reachus_id;
      this.details = true;
      this.getActionsDetails(this.editedItem);


    },
    actionTakenBy() {
      this.$refs.verifyItem.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
            //  console.log("uuuuu", this.verifyItem);
              const formData = new FormData();

              formData.append(
                "reachusActionTake_details",
                JSON.stringify(this.verifyItem)
              );
              this.reachusActionTakeSaving(formData);

              this.verifyItem = {};
              this.step = 1;
              this.details = false;

            })
            .onCancel(() => {
              this.verifyItem = true;
            });
        }
      });
    },
  },
};
</script>

<style>
.selected {
  background-color: #00e1ff !important;
  color: #000000 !important;
}

@media (max-width: 767px) {
  .AccomBkgDetails {
    display: block !important;
  }

  .AccomBkgTbl {
    width: 91vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }


  .AccomBkgTbl {
    width: 91vw !important;
  }

}
</style>


