<template>
  <q-page-container>
    <q-page class=" flex justify-center bg-accent" style="padding-top:50px;">
      <q-card class="customer_signup-form q-pa-xl">
        
        <div class="text-h5 text-bold q-pa-md q-gutter-xs">Customer Registration</div>

        <q-card-section class="q-pa-xs">
          <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset" ref="customerForm">
            <q-input
              outlined
              dense
              v-model="customerForm.first_name"
              label="First Name"
              lazy-rules
              :rules="[
                  val => (val && val.length > 0) || 'Please Enter First Name'
                ]"
            />
            <q-input
              outlined
              dense
              v-model="customerForm.last_name"
              label="Last Name"
              lazy-rules
              :rules="[
                  val => (val && val.length > 0) || 'Please Enter Last Name'
                ]"
            />
            <q-input
              outlined
              dense
              v-model="customerForm.mobile_no"
              label="Mobile No"
              lazy-rules
              :rules="[required('Mobile No'), number()]"
            />
            <q-input
              outlined
              dense
              v-model="customerForm.email_id"
              label="Email ID"
              lazy-rules
              :rules="[
                  val => (val && val.length > 0) || 'Please Enter Email ID',isValidEmail
                ]"
            />
            
           
          </q-form>
          <small>
                  I agree to MangoHomz's <a href="#">User Agreement</a> and
                  <a href="#">T&Cs</a>
                </small>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Register"
            dense
            color="primary"
            @click="onSubmit"
          />
          <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              to="/userTypeReg"
            />
        </q-card-actions>
        

      </q-card>
    </q-page>
  </q-page-container>
</template>

<script>
import { QSpinnerFacebook } from "quasar";
import {mapActions} from "vuex"
import validations from "../../helpers/validations"
const signForm = () => {
  return{
    first_name: "",
    last_name: "",
    mobile_no: "",
    email_id: ""
  }
}
export default {
  name: "loginPage",
  data() {
    return {
      ...validations,
      title: "Customer Sign UP",
      customerForm:{
        first_name:"",
        last_name:"",
        mobile_no:"",
        email_id:"",
      },
      usertype: "",
      options: ["Admin", "Customer", "Patner"],
      link: ""
    };
  },
  meta() {
    return {
      title: this.title
    };
  },
  computed: {
    linkTo() {
      let link =
        this.usertype.toLowerCase() == "admin"
          ? "/admin" //condtion 1
          : this.usertype.toLowerCase() == "patner"
          ? "/patner" //condition 2
          : "/customer"; //default condition
      return link;
    }
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    ...mapActions("account",["customerRegistration"]),
    onSubmit() {
      this.$refs.customerForm.validate().then(success => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true
            })
            .onOk(() => {
              this.customerRegistration(this.customerForm);
              this.addDataDialog = false;
              this.customerForm = signForm();
              this.$refs.customerForm.resetValidation();

            })
            .onCancel(() => {
              this.addDataDialog = true;
            });
        }
      });
    },
    onReset(){
      this.$refs.customerForm.resetValidation();
    },

    // loginNotify() {
    //   this.$q.notify({
    //     message: "Login Successful"
    //   });
    // },
    showLoading() {
      // console.log(this.usertype.toLowerCase() == "admin");
      // console.log(this.usertype.toLowerCase() == "patner");
      // console.log(this.usertype.toLowerCase());
      if (this.usertype) {
        this.$q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: "yellow",
          spinnerSize: 140,
          backgroundColor: "purple",
          message: "Some important process is in progress. Hang on...",
          messageColor: "black"
        });
        // hiding in 3s
        this.timer = setTimeout(() => {
          this.$q.loading.hide();
          this.timer = void 0;
        }, 3000);
      } else {
        this.$q.notify({
          message: "Please Select Login Type"
        });
      }
    },
    beforeDestroy() {
      if (this.timer !== void 0) {
        clearTimeout(this.timer);
        this.$q.loading.hide();
      }
    }
  },
  mounted() {}
};
</script>
