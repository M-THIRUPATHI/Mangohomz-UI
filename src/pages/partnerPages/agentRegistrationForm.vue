<template>
  <q-card style="min-width: 350px">
    <q-toolbar class="bg-white text-primary rounded-borders">
      <q-icon>
        <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
      </q-icon>
      <q-toolbar-title class="text-subtitle1 text-weight-bold">
        Become A Booking Agent
      </q-toolbar-title>
    </q-toolbar>
    <q-card-section class="q-pt-none">
      <q-form class="q-gutter-md" ref="agentForm">
        <div class="q-pa-md row q-gutter-md">
          <q-input
            dense
            class="col-6"
            outlined
            v-model="agentForm.first_name"
            autofocus
            @keyup.enter="prompt = false"
            label="Full Name*"
            :rules="[required('Name')]"
            hide-bottom-space
          >
            <template v-slot:prepend>
              <q-icon name="person" color="secondary" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            v-model="agentForm.mobile_no"
            @keyup.enter="prompt = false"
            label="Mobile No*"
            lazy-rules
            class="col-6"
            mask="##########"
            hide-bottom-space
            :rules="[required('Phone no'), phone()]"
            ><template v-slot:prepend>
              <q-icon name="phone" color="secondary" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            v-model="agentForm.whatsapp_no"
            @keyup.enter="prompt = false"
            label="WhatsApp N0 *"
            lazy-rules
            class="col-6"
            mask="##########"
            hide-bottom-space
            :rules="[required('Phone no'), phone()]"
            ><template v-slot:prepend>
              <q-icon name="phone" color="secondary" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            v-model="agentForm.email_id"
            @keyup.enter="prompt = false"
            hide-bottom-space
            label="Email-ID*"
            class="col-6"
            :rules="[required('Email'), email()]"
            ><template v-slot:prepend>
              <q-icon name="email" color="secondary" />
            </template>
          </q-input>
          <q-input
            dense
            class="col-6"
            outlined
            v-model="agentForm.address"
            autofocus
            @keyup.enter="prompt = false"
            label="Address*"
            :rules="[required('Name')]"
            hide-bottom-space
          >
            <template v-slot:prepend>
              <q-icon name="person" color="secondary" />
            </template>
          </q-input>
          <q-select
            dense
            outlined
            use-input
            hide-selected
            :options="cityOptions"
            @filter="filterFnCities"
            option-value="city"
            option-label="city"
            fill-input
            hide-bottom-space
            options-dense
            class="col-6"
            input-debounce="0"
            v-model="agentForm.city"
            label="City *"
            :rules="[required('City')]"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-input
            dense
            outlined
            lazy-rules
            mask="######"
            class="col-6"
            v-model="agentForm.pin_code"
            label="Pincode *"
            label-color="black"
            :rules="[required('Pincode'), pinNumber()]"
            ><template v-slot:prepend>
              <q-icon name="mdi-map-marker" color="secondary" /> </template
          ></q-input>
          <q-select
            dense
            options-dense
            outlined
            use-input
            hide-selected
            hide-bottom-space
            fill-input
            class="col-6"
            :options="bankDetails"
            v-model="agentForm.bankDetails"
            @keyup.enter="prompt = false"
            label="Bank Details  *"
            :rules="[required('Bank Details')]"
          >
            <template v-slot:prepend> </template>
          </q-select>

          <q-input
            dense
            class="col-6"
            outlined
            v-model="agentForm.upi_id"
            autofocus
            v-if="agentForm.bankDetails == 'UPI'"
            @keyup.enter="prompt = false"
            label="UPI Id*"
            :rules="[required('UPI Id')]"
            hide-bottom-space
          >
            <template v-slot:prepend> </template>
          </q-input>

          <q-input
            dense
            outlined
            v-model="agentForm.bankAccountNo"
            label="Bank A/C No"
            label-color="black"
            class="col-3"
            v-if="agentForm.bankDetails == 'Bank Details'"
            :rules="[required('Bank A/C no'), number()]"
          />
          <q-input
            dense
            outlined
            v-model="agentForm.bankName"
            label="Bank Name"
            class="col-3"
            label-color="black"
            v-if="agentForm.bankDetails == 'Bank Details'"
            :rules="[required('Bank Name')]"
          />
          <q-input
            dense
            outlined
            v-model="agentForm.branchName"
            label="Branch Name"
            class="col-3"
            label-color="black"
            v-if="agentForm.bankDetails == 'Bank Details'"
            :rules="[required('Branch')]"
          />
          <q-input
            dense
            outlined
            class="col-3"
            v-model="agentForm.ifsc"
            v-if="agentForm.bankDetails == 'Bank Details'"
            label="IFSC Code"
            label-color="black"
            :rules="[required('IFSC code')]"
          />

          <q-file
            color="lime-11"
            bg-color="teal"
            style="width: 250px"
            class="hint-bold col-3"
            dense
            filled
            clearable
            v-if="agentForm.bankDetails == 'Bank Details'"
            v-model="cancelled_cheque"

            type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="
              (val) => {
                files = val;
              }
            "
            hint="Cancelled Cheque"
            :filter="checkFileSize"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

          <q-select
            dense
            options-dense
            outlined
            use-input
            hide-selected
            hide-bottom-space
            fill-input
            class="col-6"
            :options="govtNo"
            v-model="agentForm.govtno"
            @keyup.enter="prompt = false"
            label="Government Authorized Number  *"
            :rules="[required('Govt Number')]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-home-city" color="secondary" />
            </template>
          </q-select>
          <q-input
            dense
            outlined
            class="col-6"
            v-model="agentForm.govtcardno"
            v-if="agentForm.govtno == 'Pan Card'"
            label="Enter Pan Card Number*"
            hide-bottom-space
            mask="AAAAA####A"
            :rules="[required('Pan Card Number'), panNumber()]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-home-city" color="secondary" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            class="col-6"
            v-model="agentForm.govtcardno"
            v-if="agentForm.govtno == 'Passport*'"
            label="Enter Passport Number"
            hide-bottom-space
            :rules="[required('Passport Number')]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-home-city" color="secondary" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            class="col-6"
            v-model="agentForm.govtcardno"
            v-if="agentForm.govtno == 'Driving Licience'"
            label="Enter Driving Licience Number*"
            hide-bottom-space
            :rules="[required('Driving Licience Number')]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-home-city" color="secondary" />
            </template>
          </q-input>
          <q-input
            dense
            outlined
            v-model="agentForm.nearest_hospital"
            @keyup.enter="prompt = false"
            label="Referal Name"
            class="col-6"
            hide-bottom-space
            :rules="[required('Nearest Hospital')]"
            ><template v-slot:prepend>
              <q-icon name="mdi-hospital-marker" color="secondary" />
            </template>
          </q-input>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions align="right" class="text-primary">
      <!-- <q-btn flat label="Cancel" v-close-popup /> -->
      <q-btn
        push
        class="text-weight-bolder"
        label="Register"
        color="secondary"
        @click="onAgentSignUpSubmit"
      />
    </q-card-actions>
  </q-card>
</template>
  <script>
import { mapState, mapActions } from "vuex";
import validations from "../../helpers/validations";
import { api } from "boot/axios";

const signMaster = () => {
  return {
    first_name: "",
    last_name: "",
    mobile_no: "",
    email_id: "",
    city: "",
    nearest_hospital: "",
    partnerType: "",
    cancelled_cheque: [],
  };
};
export default {
  name: "partner-with-us",
  data() {
    return {
      showOncheckComp: false,
      city_name_loading: false,
      showUserNameTickmark: false,
      showUserNameDupTickmark: false,
      model: "",
      becomePartnerDialog: false,
      becomeAgentDialog: false,
      partnerSignInForm: false,
      partnerTerms_Conditions: false,
      ...validations,
      title: "Partner With Us",
      terms_conditions: false,
      tab: "one",
      cityOptions: [],
      patnerForm: {
        first_name: "",
        last_name: "",
        mobile_no: "",
        email_id: "",
        city: "",
        nearest_hospital: "",
        partnerType: "",
        others: "",
      },
      partnerSignin: {
        username: "",
        password: "",
        role: "partner",
      },
      partnerTypes: [
        "Accommodation Partner",
        "Food Partner",
        "Travel Partner",
        "Medical Equipment Partner",
        "Others",
      ],
      cancelled_cheque: [],
      bankDetails: ["UPI", "Bank Details"],
      govtNo: ["Pan Card", "Passport", "Driving Licience"],
      agentForm: {
        first_name: "",
        mobile_no: "",
        whatsapp_no: "",
        email_id: "",
        address: "",
        city: "",
        pin_code: "",
        upi_id: "",
        bankAccountNo: "",
        bankName: "",
        ifsc: "",
        branchName: "",
        govtno: "",
        govtcardno: "",
        nearest_hospital: "",
        partnerType: "Booking Agent",
      },
      //Come, join hands with MangoHomz to join the fast-growing Indian Medical Tourism Industry
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.account.user,
      cities: (state) => state.master.cities,
    }),
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];
      return user;
    },
  },
  mounted() {
    this.$store.dispatch("account/getPartnerMenus");
    this.$store.dispatch("dropdown/loadAllCities");
    this.$store.dispatch("master/loadCities");
  },
  methods: {
    ...mapActions("account", ["partnerLogin", "logout", "login"]),
    ...mapActions("account", ["partnerRegistration"]),
    ...mapActions("account", ["agentRegistration"]),

    onPartnerSignUpSubmit() {
      this.$refs.patnerForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              if (this.patnerForm.partnerType == "Others") {
                this.patnerForm.partnerType = this.patnerForm.others;
              }
              this.partnerRegistration(this.patnerForm);
              this.$refs.patnerForm.reset();
              this.becomePartnerDialog = false;
            })
            .onCancel(() => {
              this.becomePartnerDialog = true;
            });
        }
      });
    },
    onAgentSignUpSubmit() {
      this.$refs.agentForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.agentRegistration(this.agentForm);
              this.$refs.agentForm.reset();
              this.becomeAgentDialog = false;
            })
            .onCancel(() => {
              this.becomeAgentDialog = true;
            });
        }
      });
    },
    logInPartner() {
      this.$refs.patnerSignInForm.validate().then((success) => {
        if (success) {
          this.partnerLogin(this.partnerSignin);
        }
      });
    },
    onReset() {
      this.$refs.customerLoginForm.reset();
    },
    onReset1() {
      this.$refs.partnerLoginForm.reset();
    },
    openPartnerTerms_conditions() {
      this.partnerTerms_Conditions = true;
    },
    onPartnerSignUpReset() {
      this.$refs.patnerForm.reset();
    },

    filterFnCities(val, update) {
      if (val === "") {
        update(() => {
          this.cityOptions = this.cities;
        });
        return this.cityOptions;
      }
      update(() => {
        const needle = this.cities.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.cityOptions = needle;
        return this.cityOptions;
      });
    },

    resetFiles() {
      this.cancelled_cheque = [];
    },

    checkCityName() {
      this.showOncheckComp = true;
      this.city_name_loading = true;
      // console.log("this.patnerForm.city", this.patnerForm.city);
      // console.log("this.patnerForm.city[0]", this.patnerForm.city[0]);
      setTimeout(() => {
        api
          .get("userAccount/getCityName/" + this.patnerForm.city)
          .then((response) => {
            // console.log(response.data);
            this.showOncheckComp = false;
            this.city_name_loading = false;
            if (response.data[0].c == 0) {
              this.$q.notify({
                color: "positive",
                message: "No Duplicates Found!",
              });
              this.showUserNameTickmark = true;
              this.showUserNameDupTickmark = false;
            } else {
              this.$q.notify({
                color: "negative",
                message: "User Name Already exists!",
              });
              this.regDetails.user_name = "";
              this.showUserNameTickmark = false;
              this.showUserNameDupTickmark = true;
            }
          });
      }, 1000);
    },
  },
};
</script>
  <style>
.addBoldStyle:nth-child(4),
.addBoldStyle:nth-child(6),
.addBoldStyle:nth-child(8),
.addBoldStyle:nth-child(10),
.addBoldStyle:nth-child(12) {
  font-weight: bold;
}
</style>
