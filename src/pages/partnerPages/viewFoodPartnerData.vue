<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 120px">
      <subHeaderForAdmin />

      <div style="margin: auto width:100vw">
        <q-table
          title="Food Partner Visit Details"
          :data="food_visit_data"
          :columns="food_visit_columns"
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
          <template v-slot:body-cell-visit_status="props">
            <q-td :props="props">
              <q-chip
                :class="
                  props.row.visit_status === 'PENDING'
                    ? 'background2 text-center'
                    : 'background1 text-center'
                "
                :text-color="
                  props.row.visit_status === 'PENDING' ? 'black' : 'white'
                "
                :text-align="
                  props.row.visit_status === 'PENDING' ? 'center' : 'center'
                "
                dense
                style="font-weight: bold"
              >
                {{ props.row.visit_status }}
              </q-chip>
            </q-td>
          </template>

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
              :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="props.toggleFullscreen"
              v-if="mode === 'list'"
            >
              <q-tooltip :difiltersable="$q.platform.is.mobile" v-close-popup
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
              v-if="food_visit_data.length != 0"
              :data="food_visit_data"
              :header="headerValue"
              worksheet="Food Visit Data Report"
              :name="`${excel_date}_food_visits.xls`"
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
                class="q-ml-sm"
                color="primary"
                @click="editFoodVisitData(props.row)"
                style="border-radius: 12px; font-weight: bold"
                size="sm"
                ><q-tooltip :disable="$q.platform.is.mobile">Update</q-tooltip
                >update
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>

      <q-dialog
        v-model="foodVisitDataDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpr fff" container class="bg-white">
          <q-header class="bg-primary q-mb-5">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div style="font-family: verdana">Update Food Visit Details</div>
              <q-space />

              <q-btn dense flat icon="close" @click="closeEditFoodDialog()">
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <q-space />
          <q-space />

          <q-form
            class="AccomBkgDetails"
            ref="FoodFormBasic"
            style="margin-top: 60px"
          >
            <p style="color: red; margin-left: 24px; font-size: 18px">
              * Last Updated at {{ Updated_dateTime }}
            </p>
            <div class="row" id="justify-sides">
              <q-input
                class="row col-3 q-mt-sm q-mr-sm background-color-field"
                dense
                outlined
                label="Restaurant Name *"
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.restaurantName"

              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm "
                dense
                outlined
                label="Restaurant Address *"
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.address"
              >
              </q-input>
              <q-input
              class="row col-3 q-mt-sm q-mr-sm background-color-field"
              dense
              outlined
              label="Pincode"
              hide-bottom-space
              style="width: 360px"
              label-color="black"
              v-model="updateFoodPartnerVisitDetails.pincode"
              :rules="pincoderules"
            >
            </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm"
                dense
                outlined
                label="Restaurant Ph Number "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.phoneNumber"
                :rules="phoneinputRules"
              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm background-color-field"
                dense
                outlined
                label="Restaurant Email Id "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.emailId"
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
                v-model="updateFoodPartnerVisitDetails.nearHospital"
                :options="hospitalOptions"
              >
              </q-select>
              <q-input
                v-if="
                  updateFoodPartnerVisitDetails.nearHospital
                    .near_hospital_name == 'Others'
                "
                class="row col-3 q-mt-sm q-mr-sm"
                dense
                outlined
                label="Other Hospital Name *"
                hide-bottom-space
                style="width: 360px; display: block"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.otherHospital"
              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm background-color-field"
                dense
                outlined
                label="Owner Name "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.ownerName"
              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm"
                dense
                outlined
                label="Owner Mail Id "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.ownerMail"
                :rules="emailRules"
              >
              </q-input>

              <q-input
                class="row col-3 q-mt-sm q-mr-sm background-color-field"
                dense
                outlined
                label="Owner Phone Number "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.ownerPhone"
                :rules="phoneinputRules"
              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm"
                dense
                outlined
                label="Manager Name "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.managerName"
              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm background-color-field"
                dense
                outlined
                label="Manager Mail Id "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.managerMail"
                :rules="emailRules"
              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm"
                dense
                outlined
                label="Manager Phone Number "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.managerPhone"
                :rules="phoneinputRules"
              >
              </q-input>
            </div>
          </q-form>

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-bar
              flat
              class="ma-02 text-bold"
              style="max-height: 20vh; margin-top: 15px"
              ><q-icon name="" color="black" size="1.5em" />Rate Card
            </q-bar>
          </div>
          <q-form class="AccomBkgDetails" ref="FoodFormBasic">
            <div class="row" id="justify-sides">
              <q-input
                class="row col-3 q-mt-sm q-mr-sm background-color-field"
                dense
                outlined
                label="Item 1 "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.item1"
           
              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm"
                dense
                outlined
                label="Item 2 "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.item2"
              
              >
              </q-input>
              <q-input
                class="row col-3 q-mt-sm q-mr-sm background-color-field"
                dense
                outlined
                label="Item 3 "
                hide-bottom-space
                style="width: 360px"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.item3"
             
              >
              </q-input>
            </div>
          </q-form>

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-bar
              flat
              class="ma-02 text-bold"
              style="max-height: 20vh; margin-top: 15px"
              ><q-icon name="" color="black" size="1.5em" />Documents
            </q-bar>
          </div>

          <!--BOOKING ALL MODULE START-->
          <q-card-actions>
            <div class="row items-start q-gutter-md" id="justify-sides">
              <q-file
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
                hint="Pan Card of Restaurant / Cloud Kitchen * "
                :rules="[(val) => val || 'Please select file']"
                :filter="checkFileSize"
                @rejected="onRejected"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" color="white" />
                </template>
              </q-file>

              <q-btn
                color="teal"
                size="sm"
                icon="mdi-eye"
                :disabled="!this.updateFoodPartnerVisitDetails.pan_card_upt"
                @click="
                  showDocument(
                    updateFoodPartnerVisitDetails.pan_card_upt,
                    'Pan Card Image'
                  )
                "
              >
                <q-tooltip :disable="$q.platform.is.mobile"
                  >Pan Card Image</q-tooltip
                >
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

              <q-btn
                color="teal"
                size="sm"
                icon="mdi-eye"
                :disabled="!this.updateFoodPartnerVisitDetails.gst_upt"
                @click="
                  showDocument(
                    updateFoodPartnerVisitDetails.gst_upt,
                    'Pan Card Image'
                  )
                "
              >
                <q-tooltip :disable="$q.platform.is.mobile"
                  >GST Image</q-tooltip
                >
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

              <q-btn
                color="teal"
                size="sm"
                icon="mdi-eye"
                :disabled="!this.updateFoodPartnerVisitDetails.cancel_cheque_upt"
                @click="
                  showDocument(
                    updateFoodPartnerVisitDetails.cancel_cheque_upt,
                    'Cancel Cheque'
                  )
                "
              >
                <q-tooltip :disable="$q.platform.is.mobile"
                  >Cancel Cheque Image</q-tooltip
                >
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
                v-model="certificateFSSAI"
                type="file"
                accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                @update:model-value="
                  (val) => {
                    files = val;
                  }
                "
                hint="FSSAI Certificate *"
                :rules="[(val) => val || 'Please select file']"
                :filter="checkFileSize"
                @rejected="onRejected"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" color="white" />
                </template>
              </q-file>
              <q-btn
                color="teal"
                size="sm"
                icon="mdi-eye"
                :disabled="!this.updateFoodPartnerVisitDetails.fssai_upt"
                @click="
                  showDocument(
                    updateFoodPartnerVisitDetails.fssai_upt,
                    'FSSAI Certificate'
                  )
                "
              >
                <q-tooltip :disable="$q.platform.is.mobile"
                  >FSSAI Certificate Image</q-tooltip
                >
              </q-btn>
            </div>
          </q-card-actions>

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-bar
              flat
              class="ma-02 text-bold"
              style="max-height: 20vh; margin-top: 15px"
              ><q-icon name="" color="black" size="1.5em" />Discussion Brief
            </q-bar>
          </div>
          <q-form class="AccomBkgDetails" ref="FoodFormBasic">
            <div class="row" id="justify-sides">
              <q-input
                class="row col-12 q-mt-sm q-mr-sm"
                dense
                outlined
                label="Discussion Brief "
                hide-bottom-space
                style="width: 90%"
                label-color="black"
                type="textarea"
                v-model="updateFoodPartnerVisitDetails.discussionBrief"
              >
              </q-input>
            </div>
            <div class="row" id="justify-sides">
              <q-input
                :rules="percentageRules"
                class="row col-12 q-mt-sm q-mr-sm background-color-field"
                dense
                outlined
                label="MH Share Revenue (%) *"
                hide-bottom-space
                style="width: 90%"
                label-color="black"
                v-model="updateFoodPartnerVisitDetails.MHShareRevenue"
              ></q-input>
            </div>
          </q-form>

          <div class="row q-pa-md justify-end">
            <q-btn color="secondary" label="Update" @click="onClickUpdate">
            </q-btn>
            <q-btn
              style="margin-left: 5px"
              color="primary"
              label="Verify"
              @click="onClickVerify"
            >
            </q-btn>
          </div>
        </q-layout>
        <q-dialog
          v-model="small"
          transition-show="slide-up"
          transition-hide="slide-down"
          :maximized="maximizedToggle"
          persistent
        >
          <q-layout view="Lhh lpR fff" container class="bg-white">
            <q-header class="bg-primary">
              <q-bar class="bg-primary text-white" style="height: 60px">
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
                <iframe
                  :src="url"
                  class="wrapper"
                  width="100%"
                  height="600px"
                  frameborder="1"
                ></iframe>
              </div>
            </q-card>
          </q-layout>
        </q-dialog>
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
  export default {
    components: {
    subHeaderForAdmin
  },
    data() {
      return {
        foodVisitDataDialog: false,
        showPanDoc: false,
        small: false,
        url:"",
        dialogTitle: "",


        maximizedToggle: true,
        pdated_dateTime: "",
        Updated_dateTime: "",
        yesOrNoArr: ["Yes", "No"],
        mode: "list",
        filter: "",
        selected: [],

        uploadPanCard: [],
        uploadGst: [],
        uploadCancelCheque: [],
        certificateFSSAI: [],


        pagination: {
          rowsPerPage: 50,
          inputValue: "",
        },


      updateFoodPartnerVisitDetails: {
        restaurantName: "",
        address: "",
        pincode: "",
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
        item1: "",
        item2: "",
        item3: "",
        discussionBrief: "",
        MHShareRevenue: "",
        pan_card_upt: "",
        gst_upt: "",
        cancel_cheque_upt: "",
        fssai_upt: "",

      },


        phoneinputRules: [
          (v) => !!v || "Value is required",
          (v) => /^[0-9]{10}$/.test(v) || "Enter a Valid Phone Number",
        ],
        pincoderules: [
        (v) => !v || /^[0-9]{6}$/.test(v) || "Enter a Valid Pincode",

      ],
        numberInputRules: [
          (v) => !!v || "Enter digits",
          (v) => /^[1-9]\d*$/.test(v) || "Enter a number greater than 0",
        ],
        emailRules: [
          (v) => !!v || "Email is required",
          (v) => /.+@.+\..+/.test(v) || "Email must be valid",
        ],
        percentageRules: [
          (v) => !v || /^[1-9]{2}$/.test(v) || "Enter MH Share Percentage",
      ],
        headerValue: "Food Visit  Details",
        excel_date: moment(new Date()).format("DD/MM/YYYY"),
      };


    },

    mounted() {
      this.$store.dispatch(
      "dropdown/loadNearHospitalNames",
      this.userDetails.zone
    );
      this.$store.dispatch("partners/loadFoodPartnerData",this.userDetails.zone);
    },
    computed: {

      showVerifyButton(){
   if (
        this.updateFoodPartnerVisitDetails.restaurantName != ""
        && this.updateFoodPartnerVisitDetails.address != ""
        && this.updateFoodPartnerVisitDetails.pincode != ""

        && this.updateFoodPartnerVisitDetails.phoneNumber != ""
        && this.updateFoodPartnerVisitDetails.emailId != ""
        && this.updateFoodPartnerVisitDetails.nearHospital != ""

        && this.updateFoodPartnerVisitDetails.ownerName != ""
        && this.updateFoodPartnerVisitDetails.ownerMail != ""
        && this.updateFoodPartnerVisitDetails.ownerPhone != ""
        && this.updateFoodPartnerVisitDetails.managerName != ""
        && this.updateFoodPartnerVisitDetails.managerMail != ""
        && this.updateFoodPartnerVisitDetails.managerPhone!= ""
        && this.updateFoodPartnerVisitDetails.item1 != ""
        && this.updateFoodPartnerVisitDetails.item2 != ""
        && this.updateFoodPartnerVisitDetails.item3 != ""

        && this.updateFoodPartnerVisitDetails.pan_card_upt != ""
        && this.updateFoodPartnerVisitDetails.gst_upt != ""
        && this.updateFoodPartnerVisitDetails.cancel_cheque_upt != ""
        && this.updateFoodPartnerVisitDetails.fssai_upt != ""
        && this.updateFoodPartnerVisitDetails.discussionBrief != ""
        && this.updateFoodPartnerVisitDetails.MHShareRevenue != ""
   ){
    return true
   }
   return false

  },



      ...mapState({
        userDetails() {
          let user = JSON.parse(localStorage.getItem("user")) || [];
          // console.log(user);
          return user;
        },
        hospitalOptions() {
          const otherOption = {
            near_hospital_name: "Others",
          };

          return [...this.nearHospital_Arr, otherOption];
        },

        nearHospital_Arr: (state) => state.dropdown.nearHospital,

        food_visit_columns: (state) => state.partners.food_visit_columns,
      }),
      ...mapGetters("partners", ["food_visit_data"]),



      formattedAccommodationData() {
        // Add a 's_no' property to each item in food_visit_data
        //console.log(this.food_visit_data)
        return this.food_visit_data.map((item, index) => {
          return {
            ...item,
            s_no: index + 1 // Serial number starts from 1
          };

        });
      },


    },

    methods: {
      ...mapActions("partners", ["loadFoodPartnerData"]),
      ...mapActions("dropdown", ["loadNearHospitalNames"]),
      ...mapActions("partners", ["updateFoodPartnerVisitDetailsSaving"]),
      ...mapActions("partners",["verifyFormDataSaving"]),



      checkFileSize(files) {
        return files.filter((file) => file.size < 10048576);
      },

      onRejected() {
        this.$q.notify({
          type: "negative",
          message: `File Size should be less than (or) equals to 10 MB`,
        });
      },


      editFoodVisitData(item) {
        // console.log("itemdetailsss",item)


        let dateObject = new Date(item.updated_date_time);

        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';


        let formattedDate = `${dateObject.getDate()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getFullYear()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;

        this.Updated_dateTime = formattedDate;

        this.updateFoodPartnerVisitDetails.s_no = item.s_no;

        this.updateFoodPartnerVisitDetails.restaurantName = item.restaurant_name;
        this.updateFoodPartnerVisitDetails.address = item.address;
        this.updateFoodPartnerVisitDetails.pincode = item.pincode;

        this.updateFoodPartnerVisitDetails.phoneNumber = item.phone_number;
        this.updateFoodPartnerVisitDetails.emailId = item.email_id;
        this.updateFoodPartnerVisitDetails.nearHospital = item.near_hospital_name;
        this.updateFoodPartnerVisitDetails.otherHospital = item.other_hospital_name;
        this.updateFoodPartnerVisitDetails.ownerName = item.owner_name;
        this.updateFoodPartnerVisitDetails.ownerMail = item.owner_mail;
        this.updateFoodPartnerVisitDetails.ownerPhone = item.owner_phone_number;
        this.updateFoodPartnerVisitDetails.managerName = item.manager_name;
        this.updateFoodPartnerVisitDetails.managerMail = item.manager_mail;
        this.updateFoodPartnerVisitDetails.managerPhone = item.manager_phone_number;
        this.updateFoodPartnerVisitDetails.item1 = item.item1;
        this.updateFoodPartnerVisitDetails.item2 = item.item2;
        this.updateFoodPartnerVisitDetails.item3 = item.item3;
        this.updateFoodPartnerVisitDetails.discussionBrief = item.discussion_brief;
        this.updateFoodPartnerVisitDetails.MHShareRevenue = item.mh_share_revenue;

        //this.updateFoodPartnerVisitDetails.pan_card_upt = item.pan_card;

        if (item.pan_card != ""){
        this.updateFoodPartnerVisitDetails.pan_card_upt = item.pan_card;
      } else {
        this.updateFoodPartnerVisitDetails.pan_card_upt = "";
        
      }

      if (item.gst != ""){
        this.updateFoodPartnerVisitDetails.gst_upt = item.gst;
      } else {
        this.updateFoodPartnerVisitDetails.gst_upt = "";
        
      }

     
      if (item.cancel_cheque != ""){
        this.updateFoodPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
      } else {
        this.updateFoodPartnerVisitDetails.cancel_cheque_upt = "";
        
      }

      if (item.fssai_certificate != ""){
        this.updateFoodPartnerVisitDetails.fssai_upt = item.fssai_certificate;
      } else {
        this.updateFoodPartnerVisitDetails.fssai_upt = "";
      }


   
       
// console.log(this.updateFoodPartnerVisitDetails)

        this.uploadPanCard = item.pan_card ? new File([item.pan_card], item.pan_card) : null;
      this.uploadGst = item.gst ? new File([item.gst], item.gst) : null;
      this.uploadCancelCheque = item.cancel_cheque ? new File([item.cancel_cheque], item.cancel_cheque) : null;
      this.certificateFSSAI=item.fssai_certificate ? new File([item.fssai_certificate],item.fssai_certificate):null;

       

        this.foodVisitDataDialog = true;
      },
      closeEditFoodDialog() {
        this.foodVisitDataDialog = false;
      },

      onClickUpdate() {
      this.$refs.FoodFormBasic.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              // console.log('ravi', this.updateFoodPartnerVisitDetails)
              const formData = new FormData();

              //console.log(this.updateAccomadationPartnerVisitDetails.s_no);
              //formData.append("s_no", this.updateAccomadationPartnerVisitDetails.s_no);

              formData.append("update_pan_card", this.uploadPanCard);
              formData.append("update_gst", this.uploadGst);
              formData.append("update_cancel_cheque", this.uploadCancelCheque);
              formData.append("update_fssai_certificate", this.certificateFSSAI);



              formData.append(
                "update_food_details",
                JSON.stringify(this.updateFoodPartnerVisitDetails)
              );

              this.updateFoodPartnerVisitDetailsSaving(formData);
              // console.log("11update", this.updateFoodPartnerVisitDetails);
              // console.log(this.updateFoodPartnerVisitDetails.s_no)

              this.foodVisitDataDialog = false;

            })
            .onCancel(() => {
              // this.resetFiles();
              this.foodVisitDataDialog = true;
            });
        }
      });
    },

    onClickVerify(){


      if (
        this.updateFoodPartnerVisitDetails.restaurantName != ""
        && this.updateFoodPartnerVisitDetails.address != ""
        && this.updateFoodPartnerVisitDetails.pincode != ""

        && this.updateFoodPartnerVisitDetails.phoneNumber != ""
        && this.updateFoodPartnerVisitDetails.emailId != ""
        && this.updateFoodPartnerVisitDetails.nearHospital != ""

        && this.updateFoodPartnerVisitDetails.ownerName != ""
        && this.updateFoodPartnerVisitDetails.ownerMail != ""
        && this.updateFoodPartnerVisitDetails.ownerPhone != ""
        && this.updateFoodPartnerVisitDetails.managerName != ""
        && this.updateFoodPartnerVisitDetails.managerMail != ""
        && this.updateFoodPartnerVisitDetails.managerPhone!= ""
        && this.updateFoodPartnerVisitDetails.item1 != ""
        && this.updateFoodPartnerVisitDetails.item2 != ""
        && this.updateFoodPartnerVisitDetails.item3 != ""

        && this.updateFoodPartnerVisitDetails.pan_card_upt != ""
        && this.updateFoodPartnerVisitDetails.gst_upt != ""
        && this.updateFoodPartnerVisitDetails.cancel_cheque_upt != ""
        && this.updateFoodPartnerVisitDetails.fssai_upt != ""
        && this.updateFoodPartnerVisitDetails.discussionBrief != ""
        && this.updateFoodPartnerVisitDetails.MHShareRevenue != ""
   ){
    this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to verify data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {

// console.log(this.updateFoodPartnerVisitDetails)
this.verifyFormDataSaving(this.updateFoodPartnerVisitDetails)
              this.foodVisitDataDialog = false;

            })
            .onCancel(() => {
              // this.resetFiles();
              this.foodVisitDataDialog = true;
            });
   }
  else{
    this.$q.notify({
                  color: "negative",
                  position: "top",
                  message: `Please Fill All the Details...`,
                });
  }

},

showDocument(file, dialogName) {
      // console.log(file, dialogName)
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

.background1 {
  background-color: green;
  width: 90px;
  border-radius: 12px;
  padding-left: 22px;
  font-weight: bolder;
}

.background2 {
  background-color: orange;
  width: 90px;
  border-radius: 12px;
  padding-left: 14px;
  font-weight: bolder;
}

.background-color-field {
  background-color: #eeeeff;
}
</style>
