<template>
  <div>
    <!-- <q-page-container>
      <q-page class="q-pa-md q-gutter-xs"> -->
    <headerTag />
    <router-view></router-view>
    <footer-tag />
    <!-- </q-page> -->
    <!-- <q-page-scroller position="bottom">
      <q-btn fab icon="keyboard_arrow_up" color="red" />
    </q-page-scroller> -->
    <!-- </q-page-container> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import headerTag from "../components/loginheader.vue";
import footerTag from "../components/withoutLoginFooter.vue";
export default {
  components: {
    headerTag,
    footerTag
  },
  data() {
    return {
      //title:"Partner Layout",
      // drawer: false,
      // drawerRight: true
    };
  },
  // meta(){
  // return{
  //   title:this.title
  // };
  // },
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
