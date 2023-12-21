<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 120px">
      <subHeaderForAdmin />
    
      <div style="margin: auto width:100vw">
     
     <q-table
       title="Travel Partner Visit Details"
       :data="travel_visit_data"
       :columns="travel_visit_columns"
       :rows-per-page-options="[100, 200, 300, 0]"
       dense
       separator="cell"
       :pagination.sync="pagination"
       :grid="mode === 'grid'"
       :filter="filter"
       :selected.sync="selected"
       color="green"
       class="q-mt-md"
     >
     <template v-slot:body-cell-s_no="props">
       {{ props.index + 1 }}
     </template>


     <template v-slot:top-right="props">
           <q-input
             outlined
             dense
             debounce="300"
             v-model="filter"
             placeholder="Search"
             style="width: 250px"
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
             v-if="travel_visit_data.length != 0"
             :data="travel_visit_data" 
             :header="headerValue"
             worksheet="Travel Visit Data Report"
             :name="`${excel_date}_travel_visits.xls`"
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


         <template v-slot:body-cell-actions="props">
         <q-td :props="props">
           <q-btn
           style="border-radius: 12px; font-weight: bolder;"
             class="q-ml-sm"
             color="primary"
             size="sm"
             @click="editTravelVisitData(props.row)"
  
             ><q-tooltip :disable="$q.platform.is.mobile">Update</q-tooltip
             >Update
           </q-btn>
         </q-td>
       </template>
       <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'"
                              :text-color="props.row.visit_status === 'PENDING' ? 'black' : 'white'"
                              :text-align="props.row.visit_status === 'PENDING' ? 'center' : 'center'" dense
                              style="font-weight: bold;">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                              {{ props.row.visit_status.toUpperCase() }}


                          </q-chip> -->
                      </q-td>
                  </template>


     </q-table>
   </div>
  
   <q-dialog
        v-model="travelVisitDataDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
      <q-layout view="Lhh lpr fff" container class="bg-white">
      <q-header class="bg-primary q-mb-5">
        <q-bar class="bg-primary text-white">
          <q-icon name="feed"></q-icon>
          <div style="font-family: verdana">Update Travel Visit Details</div>
          <q-space />

          <q-btn dense flat icon="close" @click="closeEditTravelDialog()">
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
      </q-header>
      <q-space />
      <q-space />
      <!-- <q-toolbar class="bg-primary text-white rounded-borders q-mt-md q-mb-md"> -->
      <!-- <q-btn flat round dense icon="mdi-account" /> -->
      <!-- <q-toolbar-title
        class="text-subtitle1 text-weight-bold"
        style="font-size: 18px; margin-top: 20px;"

      >
       Update Accommodation Partner Basic Details
      </q-toolbar-title> -->
      <!-- <div class="row q-pa-md justify-end">
        <q-btn color="secondary" label="View" @click="onClickView"> </q-btn>
      </div> -->
    <!-- </q-toolbar> -->
   
    <q-form class="AccomBkgDetails" ref="TravelFormBasic" style="margin-top: 60px;">
      <p style="color:red; margin-left: 24px; font-size: 18px;">* Last Updated at {{ Updated_dateTime }}</p>
      <div class="row" id="justify-sides">
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background"
          dense
          outlined
          label="Travel Agency Name *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.travelAgencyName"
          :rules = "[required('Adddress')]"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm "
          dense
          outlined
          label="Address *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.address"
          :rules = "[required('Adddress')]"

        >
      </q-input>

      <q-input
          class="row col-3 q-mt-sm q-mr-sm background"
          dense
          outlined
          label="Pin Code"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.pincode"
          :rules="pincodeinputRules"  
        >
        </q-input>
        
       
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Whatsapp Number *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.phoneNumber"
          :rules="phoneinputRules"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background"
          dense
          outlined
          label="Email Id *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.emailId"
          :rules="emailRules"

        >
        </q-input>
        <q-select
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Near Hospital *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          option-label="near_hospital_name"
          option-value="near_hospital_name"
          v-model="updateTravelPartnerVisitDetails.nearHospital"
          :options="hospitalOptions"
          :rules = "[required('Adddress')]"
        >
        </q-select>
        <q-input
          v-if="updateTravelPartnerVisitDetails.nearHospital.near_hospital_name == 'Others'"
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Other Hospital Name *"
          hide-bottom-space
          style="width: 360px; display: block"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.otherHospital"

        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background"
          dense
          outlined
          label="Owner Name *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.ownerName"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Owner Mail Id *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.ownerMail"
          :rules="emailRules"
        >
        </q-input>
        <!-- <q-select
      class="row col-3 q-mt-sm q-mr-sm"
      dense
      options-dense
      outlined
      use-input
      hide-selected
      style="width: 300px"
      fill-input
      :options="stateOptions"
      @filter="filterFnStates"
      option-label="state_name"
      option-value="state_id"
      v-model="hospitalDetails.state"
      @input="
        loadAllCities(hospitalDetails.state);
        emptyCities();
      "
      label="Select State*"
      label-color="black"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
    <q-select
      dense
      options-dense
      outlined
      use-input
      hide-selected
      style="width: 300px"
      fill-input
      :options="cityOptions"
      @filter="filterFnCities"
      option-label="city"
      option-value="city_id"
      v-model="hospitalDetails.city"
      label="Select City*"
      label-color="black"
      class="row col-3 q-mt-sm q-mr-sm"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select> -->
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background"
          dense
          outlined
          label="Owner Phone Number *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.ownerPhone"
          :rules="phoneinputRules"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Manager Name *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.managerName"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background"
          dense
          outlined
          label="Manager Mail Id *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.managerMail"
          :rules="emailRules"

        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Manager Phone Number *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.managerPhone"
          :rules="phoneinputRules"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background"
          dense
          outlined
          label="Total Number of vehicles *"
          hide-bottom-space
          fill-input
          style="width: 360px"
          label-color="black"
          option-label="city"
          v-model="updateTravelPartnerVisitDetails.totalVehicles"
          
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="5 Seaters *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.fiveSeaters"
         
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background"
          dense
          outlined
          label="7 Seaters *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateTravelPartnerVisitDetails.sevenSeaters"
          
        >
        </q-input>
      </div>

    </q-form>





    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;"
        ><q-icon
          name=""
          color="black"
          size="1.5em"
        />Documents
      </q-bar>
    </div>

    <!--BOOKING ALL MODULE START-->
    <q-card-actions>
      <div class="row  items-start q-gutter-md" id="justify-sides">
        <!-- <q-file
          color="lime-11"
          bg-color="teal"
          style="width: 240px"
          class="hint-bold"
          dense
          filled
          clearable
          v-model="uploadPanCard"
          type="file"
          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
          hide-bottom-space
          @update:model-value="
            (val) => {
              files = val;
            }
          "
          hint="Pan Card of Travel Agency * "
          :rules="[(val) => val || 'Please select file']"
          :filter="checkFileSize"
          @rejected="onRejected"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" color="white" />
          </template>
        </q-file>
        <q-btn color="teal" size="sm" icon="mdi-eye" @click="
              showDocument(
                updateTravelPartnerVisitDetails.pan_card_upt,
                'Pan Card Image'
              )
              ">
              <q-tooltip :disable="$q.platform.is.mobile">Pan Card Image</q-tooltip>
            </q-btn> -->

            <q-file color="lime-11" bg-color="teal" style="width: 240px"  class="hint-bold" dense filled clearable
              v-model="uploadPanCard"  type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              hide-bottom-space @update:model-value="(val) => {
                files = val;
              }
                " hint="Upload Pan Card " :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
              @rejected="onRejected">
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file>
            <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateTravelPartnerVisitDetails.pan_card_upt"  @click="
              showDocument(
                updateTravelPartnerVisitDetails.pan_card_upt,
                'Pan Card Image'
              )
              ">
              <q-tooltip :disable="$q.platform.is.mobile">Pan Card Image</q-tooltip>
            </q-btn>

        <q-file
          color="lime-11"
          bg-color="teal"
          style="width: 240px"
          class="hint-bold"
          dense
          filled
          clearable
          hide-bottom-space

          v-model="uploadGst"
          type="file"
          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
          @update:model-value="
            (val) => {
              files = val;
            }
          "
          hint="Upload GST *"
          :rules="[(val) => val || 'Please select file']"
          :filter="checkFileSize"
          @rejected="onRejected"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" color="white" />
          </template>
        </q-file>
        <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateTravelPartnerVisitDetails.gst_upt" @click="
              showDocument(
                updateTravelPartnerVisitDetails.gst_upt,
                'Gst Image'
              )
              ">
              <q-tooltip :disable="$q.platform.is.mobile">GST Image</q-tooltip>
            </q-btn>

        
        <q-file
          color="lime-11"
          bg-color="teal"
          style="width: 240px"
          class="hint-bold"
          dense
          filled
          clearable
          hide-bottom-space
          v-model="uploadCancelCheque"

          type="file"
          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
          @update:model-value="
            (val) => {
              files = val;
            }
          "
          hint="Cancel Cheque *"
          :rules="[(val) => val || 'Please select file']"
          :filter="checkFileSize"
          @rejected="onRejected"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" color="white" />
          </template>
        </q-file>
        <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateTravelPartnerVisitDetails.cancel_cheque_upt"  @click="
              showDocument(
                updateTravelPartnerVisitDetails.cancel_cheque_upt,
                'Cancel Cheque Image'
              )
              ">
              <q-tooltip :disable="$q.platform.is.mobile">Cancel Cheque Image</q-tooltip>
            </q-btn>

      </div>
    </q-card-actions>
    <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down" :maximized="maximizedToggle"
        persistent>
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white" style="height: 60px;">
              <q-icon name="feed" />
              <div class="text-h6">
                {{ dialogTitle }}
              </div>
              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <q-card v-show="showPanDoc" style="height: 600px">
            <div class="q-pt-xl row items-start q-gutter-md">
              <iframe :src="url" class="wrapper" width="100%" height="600px" frameborder="1"></iframe>
            </div>
          </q-card>
        </q-layout>
      </q-dialog>

    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;"
        ><q-icon
          name=""
          color="black"
          size="1.5em"
        />Discussion Brief
      </q-bar>
    </div>
    <q-form class="AccomBkgDetails" ref="TravelFormBasic">
      <div class="row" id="justify-sides">
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Discussion Brief "
          hide-bottom-space
          style="width: 90vw"
          label-color="black"
          type="textarea"
          v-model="updateTravelPartnerVisitDetails.discussionBrief"
        >
        </q-input>
        <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="MH Share Revenue ( % )" hide-bottom-space
              style="width: 90vw" label-color="black" v-model="updateTravelPartnerVisitDetails.shareRevenue"
              :rules="numberInputRules">
            </q-input>
      </div>

    </q-form>

   
    <div class="row q-pa-md justify-end" style="margin-bottom: 20vw;">
      <q-btn style="margin: 5px; font-weight: bold" color="secondary" label="Update" @click="onClickUpdate"> </q-btn>
      <q-btn style="margin: 5px; font-weight: bold;" color="primary"  label="Verify" @click="onClickVerifyForm"> </q-btn>

    </div>
    </q-layout>
      
  </q-dialog>

    </q-page>
  </q-page-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import moment from "moment";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
import { th } from "date-fns/locale";
export default {
  components: {
    subHeaderForAdmin
  },
  data() {
    return {
      ...validations,
      travelVisitDataDialog: false,
      visible: false,
      showPanDoc: false,
       small: false,
      maximizedToggle: true,
      dialogTitle:"",
      url:"",
      Updated_dateTime: "",
      yesOrNoArr: ["Yes", "No"],
      mode: "list",
      filter: "",
      selected: [],

      uploadPanCard: [],
      uploadGst: [],
      uploadCancelCheque: [],
     
     
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },

      updateTravelPartnerVisitDetails: {
        field_visit_id:"",
        s_no:"",
        travelAgencyName: "",
        address: "",
        phoneNumber: "",
        emailId: "",
        nearHospital: "",
        otherHospital: "",
        ownerName: "",
        ownerMail: "",
        ownerPhone: "",
        managerName: "",
        managerMail: "",
        managerPhone: "",
        totalVehicles: "",
        fiveSeaters: "",
        sevenSeaters: "",
        discussionBrief: "",
        pan_card_upt: "",
        gst_upt: "",
        cancel_cheque_upt: "",
        shareRevenue: "",

    },
      

      phoneinputRules: [
      (v) => !v || /^[0-9]{10}$/.test(v) || "Enter a Valid Phone Number",
      ],
      numberInputRules: [
        //  (v) => !!v || "Enter digits",
        (v) => !v || /^[1-9]{2}$/.test(v) || "Enter a number between 11 to 100",
       
      ],
      pincodeinputRules: [
      (v) => !v || /^[0-9]{6}$/.test(v) || "Enter a 6-digit PIN code",
    ],
      emailRules: [
        //  (v) => !!v || "Email is required",
         (v) => !v || /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      headerValue: "Travel Visit  Details",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
    };

   
  },

  mounted() { 
    this.$store.dispatch(
    "dropdown/loadNearHospitalNames",
    this.userDetails.zone
  );
    this.$store.dispatch("partners/loadTravelPartnerData",this.userDetails.zone);
  },
  computed: {

    shouldVerify() {
      if (this.updateTravelPartnerVisitDetails.nearHospital!=""
      && this.updateTravelPartnerVisitDetails.name!=""
       && this.updateTravelPartnerVisitDetails.phoneNumber!=""
       && this.updateTravelPartnerVisitDetails.emailId!=""
       && this.updateTravelPartnerVisitDetails.address!=""
       &&this.updateTravelPartnerVisitDetails.pincode != ""
       && this.updateTravelPartnerVisitDetails.ownerName!=""
       && this.updateTravelPartnerVisitDetails.ownerMail!=""
       && this.updateTravelPartnerVisitDetails.ownerPhone!=""
       && this.updateTravelPartnerVisitDetails.managerMail!=""
       && this.updateTravelPartnerVisitDetails.managerName!=""
       && this.updateTravelPartnerVisitDetails.managerPhone!=""
       && this.updateTravelPartnerVisitDetails.totalVehicles!=""
       && this.updateTravelPartnerVisitDetails.fiveSeaters!=""
       && this.updateTravelPartnerVisitDetails.sevenSeaters!=""
      && this.updateTravelPartnerVisitDetails.discussionBrief != ""
       &&this.updateTravelPartnerVisitDetails.shareRevenue != ""
    
      
      ){
        return true
      }
      return false
    },


    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        // console.log("sai",user);
        return user;
      },
      hospitalOptions() {
        const otherOption = {
          near_hospital_name: "Others",
        };

        return [...this.nearHospital_Arr, otherOption];
      },
      
      nearHospital_Arr: (state) => state.dropdown.nearHospital,
    
      travel_visit_columns: (state) => state.partners.travel_visit_columns,
    }),
    ...mapGetters("partners", ["travel_visit_data"]),

    

    formattedAccommodationData() {
      // Add a 's_no' property to each item in travel_visit_data
      //console.log(this.travel_visit_data)
      return this.travel_visit_data.map((item, index) => {
        return {
          ...item,
          s_no: index + 1 // Serial number starts from 1
        };
        
      });   
    },

    
  },

  methods: {
    ...mapActions("dropdown", ["loadNearHospitalNames"]),
    ...mapActions("partners", ["loadTravelPartnerData"]),
    ...mapActions("partners", ["updateTravelPartnerVisitDetailsSaving"]),
    ...mapActions("partners",["VerifyTravelPartnerVisitDetailsSaving"]),


    checkFileSize(files) {
      return files.filter((file) => file.size < 10048576);
    },

    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 10 MB`,
      });
    },

    

    editTravelVisitData(item) {
        console.log("edit",item)
       
      let dateObject = new Date(item.updated_date_time);

    let hours = dateObject.getHours() % 12 || 12;
    let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';


    let formattedDate = `${dateObject.getDate()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getFullYear()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;

    this.Updated_dateTime = formattedDate;

      this.updateTravelPartnerVisitDetails.s_no = item.s_no;
      this.updateTravelPartnerVisitDetails.field_visit_id = item.field_visit_id;
      this.updateTravelPartnerVisitDetails.travelAgencyName = item.travel_agency_name;
      this.updateTravelPartnerVisitDetails.address = item.address;
      this.updateTravelPartnerVisitDetails.pincode = item.pin_code
      this.updateTravelPartnerVisitDetails.phoneNumber = item.phone_number;
      this.updateTravelPartnerVisitDetails.emailId = item.email_id;
      this.updateTravelPartnerVisitDetails.nearHospital = item.near_hospital_name;
      this.updateTravelPartnerVisitDetails.otherHospital = item.other_hospital_name;
      this.updateTravelPartnerVisitDetails.ownerName = item.owner_name;
      this.updateTravelPartnerVisitDetails.ownerMail = item.owner_mail;
      this.updateTravelPartnerVisitDetails.ownerPhone = item.owner_phone_number;
      this.updateTravelPartnerVisitDetails.managerName = item.manager_name;
      this.updateTravelPartnerVisitDetails.managerMail = item.manager_mail;
      this.updateTravelPartnerVisitDetails.managerPhone = item.manager_phone_number;
      this.updateTravelPartnerVisitDetails.totalVehicles = item.total_vehicles;
      this.updateTravelPartnerVisitDetails.fiveSeaters = item.five_seaters;
      this.updateTravelPartnerVisitDetails.sevenSeaters = item.seven_seaters;
      this.updateTravelPartnerVisitDetails.discussionBrief = item.discussion_brief;
      // this.updateTravelPartnerVisitDetails.pan_card_upt = item.pan_card;
      // this.updateTravelPartnerVisitDetails.gst_upt = item.gst;
      // this.updateTravelPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
       this.updateTravelPartnerVisitDetails.shareRevenue = item.mh_share_revenue;


      if (item.pan_card_upt != ""){
        this.updateTravelPartnerVisitDetails.pan_card_upt = item.pan_card;
      }
      else {
        this.updateTravelPartnerVisitDetails.pan_card_upt = false;
      }

      if (item.gst_upt != ""){
        this.updateTravelPartnerVisitDetails.gst_upt = item.gst;
      }
      else {
        this.updateTravelPartnerVisitDetails.gst_upt = false;
      }

      if (item.cancel_cheque_upt != ""){
        this.updateTravelPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
      }
      else {
        this.updateTravelPartnerVisitDetails.cancel_cheque_upt = false;
      }

      
      this.uploadPanCard = item.pan_card ? new File([item.pan_card],item.pan_card) : null ;
      this.uploadGst = item.gst ? new File([item.gst], item.gst) : null;
      this.uploadCancelCheque = item.cancel_cheque ? new File([item.cancel_cheque], item.cancel_cheque) : null;
     
      
      this.travelVisitDataDialog = true;
     
    },
    closeEditTravelDialog() {
      this.travelVisitDataDialog = false;
    },

    onClickVerifyForm() {
      this.$refs.TravelFormBasic.validate().then((success) => {
        if (this.updateTravelPartnerVisitDetails.nearHospital!=""
      && this.updateTravelPartnerVisitDetails.name!=""
       && this.updateTravelPartnerVisitDetails.phoneNumber!=""
       && this.updateTravelPartnerVisitDetails.emailId!=""
       && this.updateTravelPartnerVisitDetails.address!=""
       && this.updateTravelPartnerVisitDetails.pincode != ""
       && this.updateTravelPartnerVisitDetails.ownerName!=""
       && this.updateTravelPartnerVisitDetails.ownerMail!=""
       && this.updateTravelPartnerVisitDetails.ownerPhone!=""
       && this.updateTravelPartnerVisitDetails.managerMail!=""
       && this.updateTravelPartnerVisitDetails.managerName!=""
       && this.updateTravelPartnerVisitDetails.managerPhone!=""
       && this.updateTravelPartnerVisitDetails.totalVehicles!=""
       && this.updateTravelPartnerVisitDetails.fiveSeaters!=""
       && this.updateTravelPartnerVisitDetails.sevenSeaters!=""
      && this.updateTravelPartnerVisitDetails.discussionBrief != ""
       &&this.updateTravelPartnerVisitDetails.shareRevenue != ""
       &&this.updateTravelPartnerVisitDetails.pan_card_upt != ""
        &&this.updateTravelPartnerVisitDetails.gst_upt != ""
       &&this.updateTravelPartnerVisitDetails.cancel_cheque_upt != ""



    ) {
      this.$q.dialog({
                title: "Confirm",
                message: "Do you want to Verify data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.VerifyTravelPartnerVisitDetailsSaving(this.updateTravelPartnerVisitDetails);
                this.travelVisitDataDialog = false;
              })
              .onCancel(() => {
                // this.resetFiles();
                this.travelVisitDataDialog = true;
              })
    }
    else {
             this.$q.notify({
                color: "negative",
                position: "top",
                message: `Please Fill All the Details...`,
              });
           
    }
    });

    },

    onClickUpdate() {
    this.$refs.TravelFormBasic.validate().then((success) => {
      if (success) {
        this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Update data ?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {

            // console.log('ravi', this.updateTravelPartnerVisitDetails)
            const formData = new FormData();

            //console.log(this.updateAccomadationPartnerVisitDetails.s_no);
            //formData.append("s_no", this.updateAccomadationPartnerVisitDetails.s_no);

            formData.append("update_pan_card", this.uploadPanCard);
            formData.append("update_gst", this.uploadGst);
            formData.append("update_cancel_cheque", this.uploadCancelCheque);
            
            
            formData.append(
              "update_travel_details",
              JSON.stringify(this.updateTravelPartnerVisitDetails)
            );

            this.updateTravelPartnerVisitDetailsSaving(formData);
            //  console.log("11update", formData);
            this.travelVisitDataDialog = false;


          })
          .onCancel(() => {
            // this.resetFiles();
            this.editDataDialog = true;
          });
      }
    });
  },

  showDocument(file, dialogName) {
    //console.log(file, dialogName)
    this.visible = true;
    setTimeout(() => {
      this.showPanDoc = true;
      this.dialogTitle = `${dialogName}: ${file}`;
      this.url = filepaths.mhVisitFilePath + file;
      this.visible = false;
    }, 2000);
    this.small = true;
  }


  },

};
</script>

<style scoped>


.background2 {
  background-color: orange;
  width: 90px;
  border-radius: 12px;
  padding-left: 16px;
  font-weight: bolder;
}
.background {
background-color: #eeeeff;
}

.background3 {
  background-color: green;
  color: white;
  width: 90px;
  border-radius: 12px;
  padding-left: 24px;
  font-weight: bolder;

}

@media (max-width: 767px) {
  #justify-sides {
    justify-content: center;
  }
}

@media (min-width: 767px) {
  #justify-sides {
    justify-content: start;
  }
}
</style>
