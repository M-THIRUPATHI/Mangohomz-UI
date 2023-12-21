<template>
  <div id="q-app">
    <q-layout view="lHh lpr lFf">
      <!-- <q-header elevated class="q-py-sm bg-white"> -->
      <!-- <loginheader v-if="isLoggined" />
      <headerTag v-else /> -->
      <!-- </q-header> -->
      <!-- <q-page-container> -->
      <router-view />
      <!-- </q-page-container> -->
      <!-- <FooterTag /> -->
    </q-layout>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

// import FooterTag from "./components/footer";
// import headerTag from "./components/header";
// import Header from './components/header.vue';
// import loginheader from "./components/loginheader";

export default {
  name: "App",
  components: {
    // FooterTag
    // headerTag,
    // loginheader
  },

  data() {
    return {};
  },
  created() {},
  computed: {
    isLoggined() {
      let user = JSON.parse(localStorage.getItem("user"));
      let status = user ? true : false;

      return status;
    }
  }
};
</script>
<style lang="sass">
.hint-bold
  .q-field__messages
    font-size: 15px
    font-weight: bold
    color: black
</style>
