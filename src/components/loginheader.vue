<template>
  <q-header class="q-py-sm bg-white">
    <q-toolbar class="bg-white text-black">
      <router-link to="#">
        <div class="mh-logo">
          <img
            src="~assets/logos/logo-main.png"
            style="
              height: 35px;
              width: 180px;
              background-size: contain !important;
              margin-top: 20px;
            "
            alt=""
          />
        </div>
      </router-link>
      <q-space />

      <q-btn color="secondary" outline round color:grey icon="apps">
        <q-menu>
          <q-card>
            <q-list
              dense
              style="min-width: 200px"
              v-for="item in partner_rows"
              :key="item.link"
            >
              <q-item clickable v-close-popup :to="item.link">
                <q-item-section side>
                  <q-icon color="primary" :name="item.icon" />
                </q-item-section>
                <q-item-section class="text-weight-bold">{{
                  item.title
                }}</q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-menu>
      </q-btn>

      &emsp;
      <q-btn
        color="secondary"
        round
        color:grey
        icon="mdi-logout"
        @click="onLogoutSubmit"
      >
        <!-- <q-menu>
          <div class="row no-wrap q-pa-md"> -->
        <!-- <div class="column">
              <div class="text-subtitle1 q-mb-md">{{ user.name }}</div> -->
        <!-- <q-toggle v-model="mobileData" label="Use Mobile Data" />
              <q-toggle v-model="bluetooth" label="Bluetooth" /> -->
        <!-- </div> -->

        <!-- <q-separator vertical inset class="q-mx-lg" /> -->

        <!-- <div class="column items-center">
              <q-avatar color="primary" text-color="white">P</q-avatar>

              <div class="text-subtitle1 text-bold q-mt-md q-mb-xs">
                {{ user.user_name }}
              </div>
              <div class="text-subtitle1 text-bold q-mt-md q-mb-xs">
                Zone: {{ user.zone }}
              </div>
              <q-btn
                color="secondary"
                label="Logout"
                class="text-bold"
                push
                size="sm"
                v-close-popup
                to="/"
              />
            </div>
          </div>
        </q-menu> -->
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import validations from "../helpers/validations";
const customerForm = () => {
  return {
    role: "customer",
    username: "",
    password: ""
  };
};
const partnerForm = () => {
  return {
    role: "partner",
    username: "",
    password: ""
  };
};

export default {
  name: "headerTag",
  data() {
    return {
      user: {},
      mobileData: true,
      bluetooth: false,
      ...validations,
      customerLoginForm: {
        role: "customer",
        username: "",
        password: ""
      },
      staffLoginForm: {
        role: "staff",
        username: "",
        password: "",
        food_partner: "",
        transport_partner: "",
        equipment_partner: "",
        property_partner: "",
        agent_partner: ""
      },
      partnerLoginForm: {
        role: "partner",
        username: "",
        password: "",
        partner_menu1: "",
        partner_menu2: "",
        partner_menu3: "",
        partner_menu4: "",
        partner_menu5: ""
      },

      bar2: false,
      // title:"MangoHomz",
      tab: "one",
      link: "/coustomerLogin",
      loginItems: [
        { name: "Admin", link: "login", icon_name: "mdi-account" },
        { name: "Customer", link: "login", icon_name: "mdi-account" },
        { name: "Patner", link: "patnerLogin", icon_name: "mdi-account" }
      ],
      menuItems: [
        { name: "Home", link: "/", icon_name: "home" },
        { name: "Why Mango Homz", link: "whyMangoHomz", icon_name: "home" },
        { name: "Rooms", link: "rooms", icon_name: "fas fa-procedures" },
        { name: "Food", link: "food", icon_name: "fas fa-utensils" },
        { name: "Travel", link: "travel", icon_name: "fas fa-car" },
        {
          name: "Medical Equipment",
          link: "medicalEquipment",
          icon_name: "fas fa-wheelchair"
        },
        {
          name: "Our Covid Protocols",
          link: "coronaProtocol",
          icon_name: "fas fa-head-side-mask"
        },
        {
          name: "Partner with us",
          link: "partner",
          icon_name: "fas fa-handshake"
        },

        { name: "FAQs", link: "faqs", icon_name: "far fa-question-circle" },

        { name: "Contact us", link: "contactUs", icon_name: "fas fa-phone-alt" }
      ],
        partnerItems: [
        { name: "Home", link: "/", icon_name: "home" },
        {
          name: "Partner with us",
          link: "partner",
          icon_name: "fas fa-handshake",
        },

        { name: "FAQs", link: "faqs", icon_name: "far fa-question-circle" },

        {
          name: "Contact us",
          link: "contactUs",
          icon_name: "fas fa-phone-alt",
        },
      ],
    };
  },
  // meta(){
  //   return{
  //   title:this.title
  //   };
  // },
  created() {},
  computed: {
    ...mapGetters("account", ["partner_rows"]),


    // ...mapState({
    //   user: state => state.account.user
    // })
  },
  mounted() {
    this.$store.dispatch("account/getPartnerMenus");
    // this.userDetails;
    this.user = JSON.parse(localStorage.getItem("user")) || [];
  },
  methods: {
    ...mapActions("account", ["staffLogin", "logout", "login"]),
    ...mapActions("account", ["partnerLogin", "logout", "login"]),
    // onSubmit() {
    //    if (!this.$refs.customerLoginForm.validate()) return;

    //   this.login(this.customerLoginForm);
    // },
    userDetails() {
      this.user = JSON.parse(localStorage.getItem("user")) || [];
    },
    onSubmit() {
      this.$refs.customerLoginForm.validate().then(success => {
        if (success) {
          this.login(this.customerLoginForm);
          setTimeout(() => {
            this.customerLoginForm = customerForm();
          }, 3000);
        }
      });
    },

    onSubmit1() {
      this.$refs.staffLoginForm.validate().then(success => {
        if (success) {
          this.staffLogin(this.staffLoginForm);
          setTimeout(() => {
            this.staffLoginForm = partnerForm();
          }, 3000);
        }
      });
    },

    onReset() {
      this.$refs.customerLoginForm.resetValidation();
    },
    onReset1() {
      this.$refs.staffLoginForm.resetValidation();
    },
    loginNotify() {
      this.$q.notify({
        message: "Login Successful"
      });
    },
    onLogoutSubmit() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Logout ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.$router.replace("/");
        })
        .onCancel(() => {});
    }
  }
};
</script>
<style scoped>
@media only screen and (min-width: 961px) {
  .mh-logo img {
    height: 46px !important;
    width: auto !important;
    background-size: contain !important;
    margin-top: 20px;
  }
}

</style>
