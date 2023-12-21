<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 120px">
      <subHeaderForAdmin />

      <q-toolbar class="bg-primary text-white rounded-borders q-mt-md q-mb-md">
        <!-- <q-btn flat round dense icon="mdi-account" /> -->
        <q-toolbar-title
          class="text-subtitle1 text-weight-bold"
          style="font-size: 18px"
        >

          Equipment Partner Basic Details
        </q-toolbar-title>
        <div class="row q-pa-md justify-end">
          <q-btn color="secondary" label="View" @click="onClickView" style="font-weight: bold;"> </q-btn>
        </div>
      </q-toolbar>
      <q-form class="AccomBkgDetails" ref="equipmentFormBasicMahi">
        <div class="row" id="justify-sides">
          <q-input
            class="row col-3 q-mt-sm q-mr-sm background-color-field"
            dense
            outlined
            label="Equipment Name *"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.equipmentName"
            :rules="[required('Equipment Name')]"

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
            v-model="equipmentPartnerVisitDetails.address"
            :rules="[required('Equipment Address')]"
          >
          </q-input>
          <q-input
          class="row col-3 q-mt-sm q-mr-sm background-color-field"
          dense
          outlined
          label="Equipment Pincode*"
          hide-bottom-space
          style="width: 360px"
          label-color="black"
          v-model="equipmentPartnerVisitDetails.pincode"
          :rules="pincoderules"
        >
        </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Equipment Phone Number"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.phoneNumber"
            :rules="phoneinputRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm background-color-field"
            dense
            outlined
            label="Equipment Email Id"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.emailId"
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
            v-model="equipmentPartnerVisitDetails.nearHospital"
            :options="hospitalOptions"
            :rules="[required('Near Hospital Name')]"

          >
          </q-select>
          <q-input
            v-if="
              equipmentPartnerVisitDetails.nearHospital.near_hospital_name ==
              'Others'
            "
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Other Hospital Name"
            hide-bottom-space
            style="width: 360px; display: block"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.otherHospital"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm background-color-field"
            dense
            outlined
            label="Owner Name"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.ownerName"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Owner Mail Id"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.ownerMail"
            :rules="emailRules"
          >
          </q-input>

          <q-input
            class="row col-3 q-mt-sm q-mr-sm background-color-field"
            dense
            outlined
            label="Owner Phone Number"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.ownerPhone"
            :rules="phoneinputRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Manager Name"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.managerName"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm background-color-field"
            dense
            outlined
            label="Manager Mail Id"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.managerMail"
            :rules="emailRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Manager Phone Number"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.managerPhone"
            :rules="phoneinputRules"
          >
          </q-input>
        </div>
      </q-form>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
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
            label="Wheel Chairs"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.wheelChair"
            :rules="numberInputRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Oxygen Cylinders"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.oxygenCylinder"
            :rules="numberInputRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm background-color-field"
            dense
            outlined
            label="Tripod Walking Stick"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.tripodWalkingStick"
            :rules="numberInputRules"
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
            hint="Pan Card of Equipment"
            :rules="[(val) => val || 'Please select file']"
            :filter="checkFileSize"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

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
            hint="Upload GST"
            :rules="[(val) => val || 'Please select file']"
            :filter="checkFileSize"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

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
            hint="Cancel Cheque"
            :rules="[(val) => val || 'Please select file']"
            :filter="checkFileSize"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

          <q-file
            color="lime-11"
            bg-color="teal"
            style="width: 240px"
            class="hint-bold"
            dense
            filled
            clearable
            hide-bottom-space
            v-model="wheelChairPic"
            type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
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
          <q-file
            color="lime-11"
            bg-color="teal"
            style="width: 240px"
            class="hint-bold"
            dense
            filled
            clearable
            hide-bottom-space
            v-model="oxygenCylinderPic"
            type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
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
          <q-file
            color="lime-11"
            bg-color="teal"
            style="width: 240px"
            class="hint-bold"
            dense
            filled
            clearable
            hide-bottom-space
            v-model="tripodWalkingStickPic"
            type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
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
      <q-form class="AccomBkgDetails" ref="equipmentFormBasic">
        <div class="row" id="justify-sides">
          <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Discussion Brief"
          hide-bottom-space
          style="width: 90%"
          label-color="black"
          type="textarea"
          v-model="equipmentPartnerVisitDetails.discussionBrief"
        >
        </q-input>
          <q-input
            class="col-3 q-mt-sm q-mr-sm background-color-field"
            dense
            outlined
            label="MH Share Revenue"
            style="width: 90%"
            label-color="black"
            v-model="equipmentPartnerVisitDetails.MHShareRevenue"
            :rules="percentageRules"
          >
          </q-input>
        </div>
      </q-form>

      <div class="row q-pa-md justify-end">
        <q-btn color="secondary" label="Submit" @click="onEquipmentSubmit"> </q-btn>
      </div>
    </q-page>
  </q-page-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      ...validations,
      yesOrNoArr: ["Yes", "No"],

      filter: "",
      selected: [],
      mode: "list",
      uploadPanCard: [],
      uploadGst: [],
      uploadCancelCheque: [],
      wheelChairPic: [],
      oxygenCylinderPic: [],
      tripodWalkingStickPic: [],

      equipmentPartnerVisitDetails: {
        equipmentName: "",
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
        wheelChair: "",
        oxygenCylinder: "",
        tripodWalkingStick: "",
        discussionBrief: "",
        visitStatus:"",
        MHShareRevenue:"",
      },

      phoneinputRules: [
        (v) => !v || /^[0-9]{10}$/.test(v) || "Enter a Valid Phone Number",
      ],
      percentageRules: [
          (v) => !v || /^[1-9]{2}$/.test(v) || "Enter MH Share Percentage",
      ],

      pincoderules: [
        (v) => !v || /^[0-9]{6}$/.test(v) || "Enter a 6 Digit Pin Code",

      ],
      numberInputRules: [

        (v) => !v || /^[1-9]\d*$/.test(v) || "Enter a number greater than 0",
      ],




      // addressRule: [
      //   (v) => !!v || "Enter Address Details"
      // ],


      emailRules: [
        (v) => !v ||  /.+@.+\..+/.test(v) || "Email must be valid",
      ],

    };
  },

  mounted() {
    this.$store.dispatch(
      "dropdown/loadNearHospitalNames",
      this.userDetails.zone
    );
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
    }),
  },

  methods: {
    ...mapActions("dropdown", ["loadNearHospitalNames"]),

    checkFileSize(files) {
      return files.filter((file) => file.size < 10048576);
    },

    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 10 MB`,
      });
    },

    onEquipmentSubmit() {
      this.$refs.equipmentFormBasicMahi.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              // console.log("uuuuu", this.equipmentPartnerVisitDetails);

              this.equipmentPartnerVisitDetails.employee_id = this.userDetails.account_id;
              this.equipmentPartnerVisitDetails.employee_name = this.userDetails.name;
              this.equipmentPartnerVisitDetails.employee_location = this.userDetails.zone;

              this.equipmentPartnerVisitDetails.user_id = this.userDetails.sno;
              this.equipmentPartnerVisitDetails.user_name = this.userDetails.user_name;

              this.equipmentPartnerVisitDetails.city_id = this.userDetails.city_id;

              const formData = new FormData();

              formData.append("upload_pan_card", this.uploadPanCard);
              formData.append("upload_gst", this.uploadGst);
              formData.append("upload_cancel_cheque", this.uploadCancelCheque);
              formData.append("upload_wheel_chair_pic", this.wheelChairPic);
              formData.append("upload_cylinder_pic", this.oxygenCylinderPic);
              formData.append("upload_stick_pic", this.tripodWalkingStickPic);


              formData.append(
                "equipment_visit_details",
                JSON.stringify(this.equipmentPartnerVisitDetails)
              );

              // console.log("equipment",formData);
              this.equipmentPartnerVisitDetailsSaving(formData);
              this.resetFiles();
              //this.equipmentPartnerVisitDetails.equipmentName = "";
              console.log("form",formData)
            })
            .onCancel(() => {
              this.resetFiles();
            });
        }
      });
    },

    resetFiles() {
      this.equipmentPartnerVisitDetails.equipmentName = "";
      this.equipmentPartnerVisitDetails.address = "";
      this.equipmentPartnerVisitDetails.pincode = "";
      this.equipmentPartnerVisitDetails.phoneNumber = "";
      this.equipmentPartnerVisitDetails.emailId = "";
      this.equipmentPartnerVisitDetails.nearHospital = "";
      this.equipmentPartnerVisitDetails.otherHospital = "";
      this.equipmentPartnerVisitDetails.ownerName = "";
      this.equipmentPartnerVisitDetails.ownerMail = "";
      this.equipmentPartnerVisitDetails.ownerPhone = "";
      this.equipmentPartnerVisitDetails.managerName = "";
      this.equipmentPartnerVisitDetails.managerMail = "";
      this.equipmentPartnerVisitDetails.managerPhone = "";
      this.equipmentPartnerVisitDetails.wheelChair = "";
      this.equipmentPartnerVisitDetails.oxygenCylinder = "";
      this.equipmentPartnerVisitDetails.tripodWalkingStick = "";
      this.equipmentPartnerVisitDetails.discussionBrief = "";
      this.equipmentPartnerVisitDetails.MHShareRevenue = "";



      this.uploadPanCard = [];
      this.uploadGst = [];
      this.uploadCancelCheque = [];
      this.wheelChairPic = [];
      this.oxygenCylinderPic = [];
      this.tripodWalkingStickPic = [];

    },

    onClickView() {
      this.$router.push("/viewEquipmentPartnerData");
    },
    // ...mapActions("account", ["getMonthwiseAccBookings"]),
    // ...mapActions("account", ["getMonthwiseAccCancellations"]),
    ...mapActions("partners", ["equipmentPartnerVisitDetailsSaving"]),
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

.background-color-field{
  background-color:#eeeeff;
}
</style>
