<template>
    <div>
      <q-page >
      <!-- <router-view></router-view> -->
      <home />
      </q-page>
    </div>
  </template>
  <script>
  import { mapGetters, mapActions } from "vuex";
  import home from "../menuContentPages/home.vue";
  export default {
    components: {
      home,
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
  