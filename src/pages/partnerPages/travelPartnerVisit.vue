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
          Travel Partner Basic Details
        </q-toolbar-title>
        <div class="row q-pa-md justify-end">
          <q-btn color="secondary" label="View" @click="onClickView" style="font-weight: bold;"> </q-btn>
        </div>
      </q-toolbar>
      <q-form class="AccomBkgDetails" ref="TravelFormBasic">
        <div class="row" id="justify-sides">
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Travel Agency Name * "
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.travelAgencyName"
            :rules="[required('Travel Agency Name')]"

          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm light-gray-input"
            dense
            outlined
            label="Address *"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.address"
            :rules="[required('Adddress')]"


          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="Pin Code"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.pincode"
            :rules="pincodeinputRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm light-gray-input"
            dense
            outlined
            label="WhatsApp Number"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.phoneNumber"
            :rules="phoneinputRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm "
            dense
            outlined
            label="Email Id"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.emailId"
            :rules="emailRules"

          >
          </q-input>
          <q-select
            class="row col-3 q-mt-sm q-mr-sm light-gray-input"
            dense
            outlined
            label="Near Hospital * "
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            option-label="near_hospital_name"
            option-value="near_hospital_name"
            v-model="travelPartnerVisitDetails.nearHospital"
            :options="hospitalOptions"
            :rules="[required('Near Hospital')]"

          >
          </q-select>
          <q-input
            v-if="travelPartnerVisitDetails.nearHospital.near_hospital_name == 'Others'"
            class="row col-3 q-mt-sm q-mr-sm "
            dense
            outlined
            label="Other Hospital Name"
            hide-bottom-space
            style="width: 360px; display: block"
            label-color="black"
            v-model="travelPartnerVisitDetails.otherHospital"


          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm "
            dense
            outlined
            label="Owner Name"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.ownerName"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm light-gray-input"
            dense
            outlined
            label="Owner Mail Id"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.ownerMail"
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
            class="row col-3 q-mt-sm q-mr-sm "
            dense
            outlined
            label="Owner Phone Number"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.ownerPhone"
            :rules="phoneinputRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm light-gray-input"
            dense
            outlined
            label="Manager Name"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.managerName"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm "
            dense
            outlined
            label="Manager Mail Id"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.managerMail"
            :rules="emailRules"

          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm light-gray-input"
            dense
            outlined
            label="Manager Phone Number"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.managerPhone"
            :rules="phoneinputRules"
          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm "
            dense
            outlined
            label="Total Number of vehicles"
            hide-bottom-space
            fill-input
            style="width: 360px"
            label-color="black"
            option-label="city"
            v-model="travelPartnerVisitDetails.totalVehicles"

          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm light-gray-input"
            dense
            outlined
            label="5 Seaters"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.fiveSeaters"

          >
          </q-input>
          <q-input
            class="row col-3 q-mt-sm q-mr-sm"
            dense
            outlined
            label="7 Seaters"
            hide-bottom-space
            style="width: 360px"
            label-color="black"
            v-model="travelPartnerVisitDetails.sevenSeaters"

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
          <q-card-actions>
        <div class="row items-start q-gutter-md" id="justify-sides">
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            v-model="uploadPanCard" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            hide-bottom-space @update:model-value="(val) => {
                files = val;
              }
              " hint="Upload Pan Card" :rules="[(val) => val || 'Please select file']"
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



        </div>
      </q-card-actions>




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
      <q-form class="AccomBkgDetails" ref="accomadationFormBasic">
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
            v-model="travelPartnerVisitDetails.discussionBrief"
          >
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="MH Share Revenue ( % )" hide-bottom-space
            style="width: 90vw" label-color="black" v-model="travelPartnerVisitDetails.shareRevenue"
            :rules="percentageRules">
          </q-input>

        </div>
      </q-form>


      <div class="row q-pa-md justify-end">
        <q-btn color="secondary" label="Submit" @click="onTravelSubmit">
        </q-btn>
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
      yesOrNoArr: ['Yes', 'No'],
      filter: "",
      selected: [],
      mode: "list",
      uploadPanCard: [],
      uploadGst: [],
      uploadCancelCheque: [],
      // vehicle1: [],
      // vehicle2: [],
      // vehicle3: [],
      // vehicle4: [],




      travelPartnerVisitDetails: {
        travelAgencyName: "",
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
        totalVehicles: "",
        fiveSeaters: "",
        sevenSeaters: "",
        discussionBrief: "",
        shareRevenue:"",

      },



     phoneinputRules: [
      //  (v) => !!v || "Value is required",
         (v) => !v || /^[0-9]{10}$/.test(v) || "Enter a Valid Phone Number",
      ],
      numberInputRules: [
        //  (v) => !!v || "Enter digits",
         (v) => !v || /^[1-9]\d*$/.test(v) || "Enter a number greater than 0",
      ],
      emailRules: [
          // (v) => !!v || 'Email is required',
         (v) => !v || /.+@.+\..+/.test(v) || 'Email must be valid'
      ],

       pincodeinputRules: [
        (v) => !v || /^[0-9]{6}$/.test(v) || "Enter a 6-digit PIN code",
      ],
      percentageRules: [


        (v) => !v || /^[1-9]{2}$/.test(v) || "Enter a number between 11 to 100"

      ],

    };
  },

  mounted() {

    this.$store.dispatch("dropdown/loadNearHospitalNames", this.userDetails.zone);

  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        // console.log(user)
        return user;
      },
      hospitalOptions() {
      const otherOption = {
        near_hospital_name: 'Others',
      };

      return [...this.nearHospital_Arr, otherOption];
    },


      nearHospital_Arr: (state) => state.dropdown.nearHospital,
    }),
  },

  methods: {

    ...mapActions("dropdown", ["loadNearHospitalNames"]),
    ...mapActions("partners", ["travelPartnerVisitDetailsSaving"]),

    checkFileSize(files) {
      return files.filter((file) => file.size < 10048576);
    },

    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 10 MB`,
      });
    },

    onTravelSubmit() {
      this.$refs.TravelFormBasic.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              // console.log("uuuuu", this.travelPartnerVisitDetails);
              this.travelPartnerVisitDetails.employee_id = this.userDetails.account_id;
              this.travelPartnerVisitDetails.name = this.userDetails.name;
              this.travelPartnerVisitDetails.employee_location = this.userDetails.zone;
              this.travelPartnerVisitDetails.user_id=this.userDetails.sno;
              this.travelPartnerVisitDetails.user_name = this.userDetails.user_name;
              this.travelPartnerVisitDetails.city_id = this.userDetails.city_id;
              //console.log('rk',this.travelPartnerVisitDetails)

              const formData = new FormData();

              formData.append("upload_pan_card", this.uploadPanCard);
              formData.append("upload_gst", this.uploadGst);
              formData.append("upload_cancel_cheque", this.uploadCancelCheque);


              formData.append(
                "travel_visit_details",
                JSON.stringify(this.travelPartnerVisitDetails)
              );

              //  console.log("",formData);
               this.travelPartnerVisitDetailsSaving(formData);
               this.resetFiles();


            })
            .onCancel(() => {
              // this.resetFiles();
            });
        }
      });
    },

    onClickView() {
      this.$router.push("/viewTravelPartnerData");
    },


    resetFiles() {
      this.travelPartnerVisitDetails.travelAgencyName = "";
      this.travelPartnerVisitDetails.address = "";
      this.travelPartnerVisitDetails.pincode = "";
      this.travelPartnerVisitDetails.phoneNumber = "";
      this.travelPartnerVisitDetails.emailId = "";
      this.travelPartnerVisitDetails.nearHospital = "";
      this.travelPartnerVisitDetails.otherHospital = "";
      this.travelPartnerVisitDetails.ownerName = "";
      this.travelPartnerVisitDetails.ownerMail = "";
      this.travelPartnerVisitDetails.ownerPhone = "";
      this.travelPartnerVisitDetails.managerName = "";
      this.travelPartnerVisitDetails.managerMail = "";
      this.travelPartnerVisitDetails.managerPhone = "";
      this.travelPartnerVisitDetails.totalVehicles = "";
      this.travelPartnerVisitDetails.fiveSeaters = "";
      this.travelPartnerVisitDetails.sevenSeaters = "";
      this.travelPartnerVisitDetails.shareRevenue ="";
      this.travelPartnerVisitDetails.discussionBrief="";


      this.uploadPanCard = [];
      this.uploadGst = [];
      this.uploadCancelCheque = [];
      this.certificateFSSAI = [];


    },

    // ...mapActions("account", ["getMonthwiseAccBookings"]),
    //  ...mapActions("partners", ["travelPartnerVisitDetailsSaving"]),



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

.light-gray-input {
  background-color: #eeeeff;
}

</style>
