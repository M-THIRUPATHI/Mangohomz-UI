<template>
    <div>
      <q-page style="padding-top: 100px" class="q-pa-md">
      <headerTag />
      <router-view></router-view>

      </q-page>
      <footer-tag />
    </div>
  </template>
  <script>
  import { mapGetters, mapActions } from "vuex";
  import headerTag from "../components/loginheader.vue";
  import footerTag from "../components/footer.vue";

  export default {
    components: {
      headerTag,
      footerTag
    },
    setup() {
      return {
        drawer: false,
        drawerRight: true
      };
    },
    computed: {
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];

        return user;
      },
      ...mapGetters("account", ["partner_rows"]),
      userMenus() {
        let userMenus = JSON.parse(localStorage.getItem("usermenus")) || [];

        return userMenus;
      }
    },
    mounted() {
      this.$store.dispatch("account/getPartnerMenus");
    },
    methods: {
      ...mapActions("account", ["logout"]),
      handleLogout() {
        this.logout();
      }
    }
  };
  </script>
