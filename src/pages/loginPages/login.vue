<template>
  <q-page-container>
    <q-page class=" flex justify-center bg-accent" style="padding-top:100px;">
      <q-card class="login-form q-pa-xl">
        <q-card-section class="q-pa-xs justify-center">
          <router-link to="/">
            <q-img
              clickable
              class="bg-white"
              style="height: 50px;width:280px;"
              src="~assets/logos/MHlogo.png"
            />
          </router-link>
        </q-card-section>
        <q-card-section class="q-pa-xs">
          <q-form class="q-gutter-md">
            <q-select
              v-model="usertype"
              :options="options"
              label="Login As"
              outlined 
              dense
            />
            <q-input
              outlined
              dense
              v-model="username"
              label="Username"
              lazy-rules
            />
            <q-input
              type="password"
              outlined
              dense
              v-model="password"
              label="Password"
              lazy-rules
            />
          </q-form>
        </q-card-section>

        <q-card-actions align="around">
          <q-btn
            label="Sign Up"
            to="/userTypeReg"
            dense
            flat
            type="button"
            color="primary"
            @click="showLoading"
          />

          <q-btn
            label="Login"
            :to="linkTo"
            dense
            type="button"
            color="primary"
            @click="showLoading"
          />
        </q-card-actions>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<script>
import { QSpinnerFacebook } from "quasar";
export default {
  name: "loginPage",
  data() {
    return {
      title: "Login",
      username: "admin",
      password: "Admin@CRM",
      usertype: "",
      patner_type: "",
      options: ["Admin", "Customer"],
      patner_options: [
        "Property Patner",
        "Transport Patner",
        "Food Patner",
        "Equipment Patner",
        "Hospital Asset Patner",
        "Agent Patner"
      ],
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
    loginNotify() {
      this.$q.notify({
        message: "Login Successful"
      });
    },
    showLoading() {
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
