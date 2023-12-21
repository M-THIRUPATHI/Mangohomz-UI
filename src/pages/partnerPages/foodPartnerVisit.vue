<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 120px">
      <subHeaderForAdmin />

      <q-toolbar class="bg-primary text-white rounded-borders q-mt-md q-mb-md">
        <!-- <q-btn flat round dense icon="mdi-account" /> -->
        <q-toolbar-title class="text-subtitle1 text-weight-bold" style="font-size: 18px">
          Food Partner Basic Details
        </q-toolbar-title>
        <div class="row q-pa-md justify-end">
          <q-btn color="secondary" label="View" @click="onClickView" style="font-weight:bold;"> </q-btn>
        </div>
      </q-toolbar>
      <q-form class="AccomBkgDetails" ref="foodFormBasicMahi">

        <div class="row" id="justify-sides">
          <q-input class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="Restaurant Name *" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.restaurantName" :rules="[required('Restaurant Name')]"
            >
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm " dense outlined label="Restaurant Address *" hide-bottom-space
            style="width: 360px;" label-color="black" v-model="foodPartnerVisitDetails.address" :rules="[required('Restaurant Address')]"
            >

          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="Pincode" hide-bottom-space
          style="width: 360px;" label-color="black" v-model="foodPartnerVisitDetails.pincode" :rules="pincoderules" ></q-input>

          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Restaurant Phone Number" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.phoneNumber"
            :rules="phoneinputRules">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="Restaurant Email Id" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.emailId" :rules="emailRules">
          </q-input>
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Near Hospital *" hide-bottom-space
            style="width: 360px" label-color="black" option-label="near_hospital_name" option-value="near_hospital_name"
            v-model="foodPartnerVisitDetails.nearHospital" :options="hospitalOptions" :rules="[required('Enter Near Hospital Name')]">
          </q-select>
          <q-input v-if="foodPartnerVisitDetails.nearHospital.near_hospital_name ==
            'Others'
            " class="row col-3 q-mt-sm q-mr-sm " dense outlined label="Other Hospital Name" hide-bottom-space
            style="width: 360px; display: block" label-color="black" v-model="foodPartnerVisitDetails.otherHospital">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="Owner Name" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.ownerName">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm " dense outlined label="Owner Mail Id" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.ownerMail" :rules="emailRules">
          </q-input>

          <q-input class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="Owner Phone Number" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.ownerPhone"
            :rules="phoneinputRules">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm " dense outlined label="Manager Name" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.managerName">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="Manager Mail Id" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.managerMail" :rules="emailRules">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm " dense outlined label="Manager Phone Number" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.managerPhone"
            :rules="phoneinputRules">
          </q-input>
        </div>
      </q-form>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
            size="1.5em" />Rate Card
        </q-bar>
      </div>
      <q-form class="AccomBkgDetails" ref="foodFormBasic">


        <div class="row" id="justify-sides">
          <q-input class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="Item 1" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.item1" >
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Item 2" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.item2">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="Item 3" hide-bottom-space
            style="width: 360px" label-color="black" v-model="foodPartnerVisitDetails.item3">
          </q-input>
        </div>
      </q-form>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
            size="1.5em" />Documents
        </q-bar>
      </div>

      <!--BOOKING ALL MODULE START-->
      <q-card-actions>
        <div class="row items-start q-gutter-md" id="justify-sides">
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            v-model="uploadPanCard" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            hide-bottom-space @update:model-value="(val) => {
                files = val;
              }
              " hint="Pan Card of Restaurant / Cloud Kitchen " :rules="[(val) => val || 'Please select file']"
            :filter="checkFileSize" @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="uploadGst" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
                files = val;
              }
              " hint="Upload GST" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="uploadCancelCheque" type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
                files = val;
              }
              " hint="Cancel Cheque" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="certificateFSSAI" type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
                files = val;
              }
              " hint="FSSAI Certificate" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

        </div>
      </q-card-actions>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
            size="1.5em" />Discussion Brief
        </q-bar>
      </div>
      <q-form class="AccomBkgDetails" ref="foodFormBasic">
        <div class="row" id="justify-sides">
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Discussion Brief"
            hide-bottom-space
            style="width: 90vw"
            label-color="black"
            type="textarea"
            v-model="foodPartnerVisitDetails.discussionBrief"
          >
          </q-input>
        </div>

        <div class="row" id="justify-sides">

      <q-input  class="row col-3 q-mt-sm q-mr-sm background-color-field" dense outlined label="MH Share Revenue (%) *" hide-bottom-space
         label-color="black" style="width:92%" v-model="foodPartnerVisitDetails.MHShareRevenue" :rules="percentageRules"></q-input>
      </div>
      </q-form>

      <div class="row q-pa-md justify-end">
        <q-btn color="secondary" label="Submit"  @click="onFoodSubmit"> </q-btn>
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
  components: {
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
      certificateFSSAI: [],


      foodPartnerVisitDetails: {
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

//       num20to100: [
//   (v) => !!v || "Enter a number",
// ],
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
    ...mapActions("partners", ["foodPartnerVisitDetailsSaving"]),

    checkFileSize(files) {
      return files.filter((file) => file.size < 10048576);
    },

    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 10 MB`,
      });
    },






    onFoodSubmit() {
      this.$refs.foodFormBasicMahi.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              console.log("uuuuu", this.foodPartnerVisitDetails);
              this.foodPartnerVisitDetails.employee_id = this.userDetails.account_id;
              this.foodPartnerVisitDetails.name = this.userDetails.name;
              this.foodPartnerVisitDetails.employee_location = this.userDetails.zone;
              this.foodPartnerVisitDetails.user_id = this.userDetails.sno;
              this.foodPartnerVisitDetails.user_name = this.userDetails.user_name;

              this.foodPartnerVisitDetails.city_id = this.userDetails.city_id;




              const formData = new FormData();

              formData.append("upload_pan_card", this.uploadPanCard);
              formData.append("upload_gst", this.uploadGst);
              formData.append("upload_cancel_cheque", this.uploadCancelCheque);
              formData.append("upload_fssai_certificate", this.certificateFSSAI);


              formData.append(
                "food_visit_details",
                JSON.stringify(this.foodPartnerVisitDetails)
              );

              //console.log(formData);
              this.foodPartnerVisitDetailsSaving(formData);
              this.resetFiles();


            })
            .onCancel(() => {
              this.resetFiles();
            });
        }
      });
    },


    resetFiles() {
      this.foodPartnerVisitDetails.restaurantName = "";
      this.foodPartnerVisitDetails.address = "";
      this.foodPartnerVisitDetails.pincode = "";
      this.foodPartnerVisitDetails.phoneNumber = "";
      this.foodPartnerVisitDetails.emailId = "";
      this.foodPartnerVisitDetails.nearHospital = "";
      this.foodPartnerVisitDetails.otherHospital = "";
      this.foodPartnerVisitDetails.ownerName = "";
      this.foodPartnerVisitDetails.ownerMail = "";
      this.foodPartnerVisitDetails.ownerPhone = "";
      this.foodPartnerVisitDetails.managerName = "";
      this.foodPartnerVisitDetails.managerMail = "";
      this.foodPartnerVisitDetails.managerPhone = "";
      this.foodPartnerVisitDetails.item1 = "";
      this.foodPartnerVisitDetails.item2 = "";
      this.foodPartnerVisitDetails.item3 = "";
      this.foodPartnerVisitDetails.discussionBrief="";
      this.foodPartnerVisitDetails.MHShareRevenue="";

      this.uploadPanCard = [];
      this.uploadGst = [];
      this.uploadCancelCheque = [];
      this.certificateFSSAI = [];


    },

    onClickView() {
      this.$router.push("/viewFoodPartnerData");
    },
    // ...mapActions("account", ["getMonthwiseAccBookings"]),
    // ...mapActions("partners", ["foodPartnerVisitDetailsSaving"]),

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



