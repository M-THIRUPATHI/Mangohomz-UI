<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 120px">
      <subHeaderForAdmin />

      <div style="margin: auto width:100vw">

     <q-table
       title="Equipment Partner Visit Details"
       :data="equipment_visit_data"
       :columns="equipment_visit_columns"
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
             v-if="equipment_visit_data.length != 0"
             :data="equipment_visit_data"
             :header="headerValue"
             worksheet="Equipment Visit Data Report"
             :name="`${excel_date}_equipment_visits.xls`"
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
           style="font-weight: bold;"
             class="q-ml-sm"
             color="primary"
             @click="editEquipmentVisitData(props.row)"
             size="sm"
             ><q-tooltip :disable="$q.platform.is.mobile">Update</q-tooltip
             >Update
           </q-btn>
         </q-td>
       </template>


     </q-table>
   </div>

   <q-dialog
        v-model="equipmentVisitDataDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
      <q-layout view="Lhh lpr fff" container class="bg-white">
      <q-header class="bg-primary q-mb-5">
        <q-bar class="bg-primary text-white">
          <q-icon name="feed"></q-icon>
          <div style="font-family: verdana">Update Equipment Visit Details</div>
          <q-space />

          <q-btn dense flat icon="close" @click="closeEditEquipmentDialog()">
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
      </q-header>
      <q-space />
      <q-space />

      <q-form class="AccomBkgDetails" ref="equipmentFormBasic" style="margin-top: 60px;">
        <p style="color:red; margin-left: 24px; font-size: 18px;">* Last Updated at {{ Updated_dateTime }}</p>
      <div class="row" id="justify-sides">
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background-color-field"
          dense
          outlined
          label="Equipment Name *"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateEquipmentPartnerVisitDetails.equipmentName"
        >
        </q-input>

        <q-input
        class="row col-3 q-mt-sm q-mr-sm"
        dense
        outlined
        label="Equipment Address *"
        hide-bottom-space
        style="width: 360px"
        label-color="black"
        v-model="updateEquipmentPartnerVisitDetails.address"
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
      v-model="updateEquipmentPartnerVisitDetails.pincode"
    >
    </q-input>

        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Equipment Phone Number "
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateEquipmentPartnerVisitDetails.phoneNumber"
          :rules="phoneinputRules"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background-color-field"
          dense
          outlined
          label="Equipment Email Id "
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateEquipmentPartnerVisitDetails.emailId"
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
          v-model="updateEquipmentPartnerVisitDetails.nearHospital"
          :options="hospitalOptions"
        >
        </q-select>
        <q-input
          v-if="
            updateEquipmentPartnerVisitDetails.nearHospital.near_hospital_name ==
            'Others'
          "
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Other Hospital Name "
          hide-bottom-space
          style="width: 360px; display: block"
          label-color="black"
          v-model="updateEquipmentPartnerVisitDetails.otherHospital"
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
          v-model="updateEquipmentPartnerVisitDetails.ownerName"
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
          v-model="updateEquipmentPartnerVisitDetails.ownerMail"
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
          v-model="updateEquipmentPartnerVisitDetails.ownerPhone"
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
          v-model="updateEquipmentPartnerVisitDetails.managerName"
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
          v-model="updateEquipmentPartnerVisitDetails.managerMail"
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
          v-model="updateEquipmentPartnerVisitDetails.managerPhone"
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
    <q-form class="AccomBkgDetails" ref="equipmentFormBasic">
      <div class="row" id="justify-sides">
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background-color-field"
          dense
          outlined
          label="Wheel Chairs "
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateEquipmentPartnerVisitDetails.wheelChair"

        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Oxygen Cylinders "
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateEquipmentPartnerVisitDetails.oxygenCylinder"

        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm background-color-field"
          dense
          outlined
          label="Tripod Walking Stick "
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="updateEquipmentPartnerVisitDetails.tripodWalkingStick"

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
          hint="Pan Card of Restaurant / Cloud Kitchen "
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
              :disabled="!this.updateEquipmentPartnerVisitDetails.pan_card_upt" 
              @click="
                showDocument(
                  updateEquipmentPartnerVisitDetails.pan_card_upt,
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
            hint=" GST *"
            :rules="[(val) => val || 'Please select file']"
            :filter="checkFileSize"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateEquipmentPartnerVisitDetails.gst_upt" @click="
                showDocument(
                  updateEquipmentPartnerVisitDetails.gst_upt,
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
          hint="Cancel Cheque "
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
              :disabled="!this.updateEquipmentPartnerVisitDetails.cancel_cheque_upt" 
              @click="
                showDocument(
                  updateEquipmentPartnerVisitDetails.cancel_cheque_upt,
                  'Cancel Check Image'
                )
              "
            >
              <q-tooltip :disable="$q.platform.is.mobile"
                >Cancel Check Image</q-tooltip
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
          v-model="wheelChairPic"
          type="file"
          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
          hide-bottom-space
          @update:model-value="
            (val) => {
              files = val;
            }
          "
          hint="Wheel Chair"
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
              :disabled="!this.updateEquipmentPartnerVisitDetails.wheel_chair_upt" 
              @click="
                showDocument(
                  updateEquipmentPartnerVisitDetails.wheel_chair_upt,
                  'Wheel Chair Image'
                )
              "
            >
              <q-tooltip :disable="$q.platform.is.mobile"
                >Wheel Chair Image</q-tooltip
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
          v-model="oxygenCylinderPic"
          type="file"
          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
          hide-bottom-space
          @update:model-value="
            (val) => {
              files = val;
            }
          "
          hint="Oxygen Cylinder"
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
              :disabled="!this.updateEquipmentPartnerVisitDetails.oxygen_upt" 
              @click="
                showDocument(
                  updateEquipmentPartnerVisitDetails.oxygen_upt,
                  'Oxygen Cylinder'
                )
              "
            >
              <q-tooltip :disable="$q.platform.is.mobile"
                >Oxygen Cylinder</q-tooltip
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
          v-model="tripodWalkingStickPic"
          type="file"
          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
          hide-bottom-space
          @update:model-value="
            (val) => {
              files = val;
            }
          "
          hint="Tripod Walking Stick"
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
              :disabled="!this.updateEquipmentPartnerVisitDetails.tripod_upt" 
              @click="
                showDocument(
                  updateEquipmentPartnerVisitDetails.tripod_upt,
                  'Tripod Walking Stick'
                )
              "
            >
              <q-tooltip :disable="$q.platform.is.mobile"
                >Tripod Walking Stick</q-tooltip
              >
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
      <q-bar
        flat
        class="ma-02 text-bold"
        style="max-height: 20vh; margin-top: 15px"
        ><q-icon name="" color="black" size="1.5em" />Discussion Brief
      </q-bar>
    </div>
    <q-form class="AccomBkgDetails" ref="equipmentFormBasic">
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
            v-model="updateEquipmentPartnerVisitDetails.discussionBrief"
          >
          </q-input>
        <q-input
        class="row col-3 q-mt-sm q-mr-sm background-color-field"
        dense
        outlined
        label="MH Share Revenue"
        hide-bottom-space
        style="width: 90%"
        label-color="black"
        v-model="updateEquipmentPartnerVisitDetails.MHShareRevenue"
        :rules="percentageRules"

      >
      </q-input>

      </div>
    </q-form>


    <div class="row q-pa-md justify-end" style="margin-bottom: 25vw;">
      <q-btn style="margin: 5px; font-weight: bold;"  color="secondary" label="Update" @click="onClickUpdate"> </q-btn>
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
export default {
  components:{
  subHeaderForAdmin
},
  data() {
    return {
      equipmentVisitDataDialog: false,
      showPanDoc : false,
      maximizedToggle: true,
      small : false,
      url: "",
      dialogTitle: "",
      Updated_dateTime: "",
      yesOrNoArr: ["Yes", "No"],
      mode: "list",
      filter: "",
      selected: [],
      uploadPanCard: [],
      uploadGst: [],
      uploadCancelCheque: [],
      wheelChairPic: [],
      oxygenCylinderPic: [],
      tripodWalkingStickPic: [],

      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },


      updateEquipmentPartnerVisitDetails: {
        s_no: "",
        field_visit_id : "",
        equipmentName: "",
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
        discussionBrief: "",
        wheelChair: "",
        oxygenCylinder: "",
        tripodWalkingStick: "",
        pan_card_upt: "",
        gst_upt: "",
        cancel_cheque_upt: "",
        wheel_chair_upt: "",
        oxygen_upt: "",
        tripod_upt: "",
        MHShareRevenue: "",



    },


      phoneinputRules: [
        (v) => !!v || "Value is required",
        (v) => /^[0-9]{10}$/.test(v) || "Enter a Valid Phone Number",
      ],
      percentageRules: [
        (v) => !v || /^[1-9]{2}$/.test(v) || "Enter MH Share Percentage",
    ],
      numberInputRules: [
        (v) => !!v || "Enter digits",
        (v) => /^[1-9]\d*$/.test(v) || "Enter a number greater than 0",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      headerValue: "Equipment Visit  Details",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
    };


  },

  mounted() {
    this.$store.dispatch(
    "dropdown/loadNearHospitalNames",
    this.userDetails.zone
  );
    this.$store.dispatch("partners/loadEquipmentPartnerData",this.userDetails.zone);
  },
  computed: {


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

      equipment_visit_columns: (state) => state.partners.equipment_visit_columns,
    }),

    ...mapGetters("partners", ["equipment_visit_data"]),


    formattedAccommodationData() {
      // Add a 's_no' property to each item in equipment_visit_data
      //console.log(this.equipment_visit_data)
      return this.equipment_visit_data.map((item, index) => {
        return {
          ...item,
          s_no: index + 1 // Serial number starts from 1
        };

      });
    },


  },

  methods: {
    ...mapActions("partners", ["loadEquipmentPartnerData"]),
    ...mapActions("dropdown", ["loadNearHospitalNames"]),
    ...mapActions("partners", ["updateEquipmentPartnerVisitDetailsSaving"]),
    ...mapActions("partners",["VerifyEquipmentPartnerVisitDetailsSaving"]),


    checkFileSize(files) {
      return files.filter((file) => file.size < 10048576);
    },

    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 10 MB`,
      });
    },


    editEquipmentVisitData(item) {
      // console.log("gjfdgjdfj",item)
      // console.log(item.s_no)
      let dateObject = new Date(item.updated_date_time);

      let hours = dateObject.getHours() % 12 || 12;
      let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';


      let formattedDate = `${dateObject.getDate()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getFullYear()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;

      this.Updated_dateTime = formattedDate;


      this.updateEquipmentPartnerVisitDetails.s_no = item.s_no;
      this.updateEquipmentPartnerVisitDetails.field_visit_id = item.field_visit_id
      this.updateEquipmentPartnerVisitDetails.equipmentName = item.equipment_name;
      this.updateEquipmentPartnerVisitDetails.address = item.address;
      this.updateEquipmentPartnerVisitDetails.pincode = item.pin_code;
      this.updateEquipmentPartnerVisitDetails.phoneNumber = item.phone_number;
      this.updateEquipmentPartnerVisitDetails.emailId = item.email_id;
      this.updateEquipmentPartnerVisitDetails.nearHospital = item.near_hospital_name;
      this.updateEquipmentPartnerVisitDetails.otherHospital = item.other_hospital_name;
      this.updateEquipmentPartnerVisitDetails.ownerName = item.owner_name;
      this.updateEquipmentPartnerVisitDetails.ownerMail = item.owner_mail;
      this.updateEquipmentPartnerVisitDetails.ownerPhone = item.owner_phone_number;
      this.updateEquipmentPartnerVisitDetails.managerName = item.manager_name;
      this.updateEquipmentPartnerVisitDetails.managerMail = item.manager_mail;
      this.updateEquipmentPartnerVisitDetails.managerPhone = item.manager_phone_number;
      this.updateEquipmentPartnerVisitDetails.wheelChair = item.wheel_chairs;
      this.updateEquipmentPartnerVisitDetails.oxygenCylinder = item.oxygen_cylinders;
      this.updateEquipmentPartnerVisitDetails.tripodWalkingStick = item.tripod_walking_stick;

      this.updateEquipmentPartnerVisitDetails.MHShareRevenue = item.mh_share_revenue;
      this.updateEquipmentPartnerVisitDetails.discussionBrief = item.discussion_brief;
      
  // console.log( this.updateEquipmentPartnerVisitDetails.oxygen_upt)
    
       if (item.pan_card != ""){
          this.updateEquipmentPartnerVisitDetails.pan_card_upt = item.pan_card;
        }
        else {
          this.updateEquipmentPartnerVisitDetails.pan_card_upt = "";
        }

        if (item.gst != ""){
          this.updateEquipmentPartnerVisitDetails.gst_upt = item.gst;
        }
        else {
          this.updateEquipmentPartnerVisitDetails.gst_upt = "";
        }

        if (item.cancel_cheque != ""){
          this.updateEquipmentPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
        }
        else {
          this.updateEquipmentPartnerVisitDetails.cancel_cheque_upt = "";
        }
        if (item.wheel_chair_pic != ""){
          this.updateEquipmentPartnerVisitDetails.wheel_chair_upt = item.wheel_chair_pic;
        }
        else {
          this.updateEquipmentPartnerVisitDetails.wheel_chair_upt = "";
        }

        if (item.oxygen_cylinder_pic != ""){
          this.updateEquipmentPartnerVisitDetails.oxygen_upt = item.oxygen_cylinder_pic;
        }
        else {
          this.updateEquipmentPartnerVisitDetails.oxygen_upt = "";
        }

        if (item.tripod_walking_stick_pic != ""){
          this.updateEquipmentPartnerVisitDetails.tripod_upt = item.tripod_walking_stick_pic;
        }
        else {
          this.updateEquipmentPartnerVisitDetails.tripod_upt = "";
        }

        
        this.uploadPanCard = item.pan_card ? new File([item.pan_card],item.pan_card) : null ;
        this.uploadGst = item.gst ? new File([item.gst], item.gst) : null;
        this.uploadCancelCheque = item.cancel_cheque ? new File([item.cancel_cheque], item.cancel_cheque) : null;
        this.wheelChairPic = item.wheel_chair_pic? new File([item.wheel_chair_pic],item.wheel_chair_pic) : null ;
        this.oxygenCylinderPic = item.oxygen_cylinder_pic ? new File([item.oxygen_cylinder_pic ], item.oxygen_cylinder_pic ) : null;
        this.tripodWalkingStickPic = item.tripod_walking_stick_pic ? new File([item.tripod_walking_stick_pic ], item.tripod_walking_stick_pic ) : null;
       

      this.equipmentVisitDataDialog = true;
    },

    



    onClickVerifyForm() {
        this.$refs.equipmentFormBasic.validate().then((success) => {
          if (this.updateEquipmentPartnerVisitDetails.nearHospital!=""
        && this.updateEquipmentPartnerVisitDetails.name!=""
         && this.updateEquipmentPartnerVisitDetails.phoneNumber!=""
         && this.updateEquipmentPartnerVisitDetails.emailId!=""
         && this.updateEquipmentPartnerVisitDetails.address!=""
         && this.updateEquipmentPartnerVisitDetails.pincode != ""
         && this.updateEquipmentPartnerVisitDetails.ownerName!=""
         && this.updateEquipmentPartnerVisitDetails.ownerMail!=""
         && this.updateEquipmentPartnerVisitDetails.ownerPhone!=""
         && this.updateEquipmentPartnerVisitDetails.managerMail!=""
         && this.updateEquipmentPartnerVisitDetails.managerName!=""
         && this.updateEquipmentPartnerVisitDetails.managerPhone!=""
         && this.updateEquipmentPartnerVisitDetails.totalVehicles!=""
         && this.updateEquipmentPartnerVisitDetails.fiveSeaters!=""
         && this.updateEquipmentPartnerVisitDetails.sevenSeaters!=""
        && this.updateEquipmentPartnerVisitDetails.discussionBrief != ""
         &&this.updateEquipmentPartnerVisitDetails.shareRevenue != ""
         &&this.updateEquipmentPartnerVisitDetails.pan_card_upt != ""
          &&this.updateEquipmentPartnerVisitDetails.gst_upt != ""
         &&this.updateEquipmentPartnerVisitDetails.cancel_cheque_upt != ""
         &&this.updateEquipmentPartnerVisitDetails.wheel_chair_upt != ""
         &&this.updateEquipmentPartnerVisitDetails.oxygen_upt != ""
         &&this.updateEquipmentPartnerVisitDetails.tripod_upt != ""



      ) {
        this.$q.dialog({
                  title: "Confirm",
                  message: "Do you want to Verify data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  // console.log("updateeeeee")
                  this.VerifyEquipmentPartnerVisitDetailsSaving(this.updateEquipmentPartnerVisitDetails);
                  this.equipmentVisitDataDialog = false;
                })
                .onCancel(() => {
                  // this.resetFiles();
                  this.equipmentVisitDataDialog = true;
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
    this.$refs.equipmentFormBasic.validate().then((success) => {
      if (success) {
        this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Update data ?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {

            // console.log('ravi', this.updateEquipmentPartnerVisitDetails)
            const formData = new FormData();

            //console.log(this.updateAccomadationPartnerVisitDetails.s_no);
            //formData.append("s_no", this.updateAccomadationPartnerVisitDetails.s_no);

            formData.append("update_pan_card", this.uploadPanCard);
            formData.append("update_gst", this.uploadGst);
            formData.append("update_cancel_cheque", this.uploadCancelCheque);
            formData.append("update_wheel_pic", this.wheelChairPic);
            formData.append("update_oxygen_pic", this.oxygenCylinderPic);
            formData.append("update_tripod_pic", this.tripodWalkingStickPic);



            formData.append(
              "update_equipment_details",
              JSON.stringify(this.updateEquipmentPartnerVisitDetails)
            );
              // console.log("11update", this.updateEquipmentPartnerVisitDetails);
            this.updateEquipmentPartnerVisitDetailsSaving(formData);
            // console.log("11update", formData);
            // console.log("11update", this.updateEquipmentPartnerVisitDetails);
            this.equipmentVisitDataDialog = false


          })
          .onCancel(() => {
            this.resetFiles();
            this.editDataDialog = true;
          });
      }
    });
  },




    closeEditEquipmentDialog() {
      this.equipmentVisitDataDialog = false;
    },

    showDocument(file, dialogName) {
      //  console.log(file, dialogName)
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
.background-color-field{
  background-color:#eeeeff;
}


</style>