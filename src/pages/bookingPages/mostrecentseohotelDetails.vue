<template>
    <div>
      <headerTag />
      <q-page-container>
         <q-page>
        <seohotelDetails />
  
        </q-page>
      </q-page-container>
      <q-page-sticky position="top" expand class="bg-primary text-white">
        <q-toolbar class="bg-primary text-white rounded-borders">
          <q-space></q-space>
          <searchHeaderCompForSeo/>
          <q-space />
        </q-toolbar>
      </q-page-sticky>
      <q-page-sticky position="bottom-right" :offset="[0,0]">
        </q-page-sticky>
      <footer-tag />
    </div>
  </template>
  <script>
  import headerTag from "../../components/header.vue";
  import footerTag from "../../components/footer.vue";
  import searchHeaderCompForSeo from "../../components/searchHeaderCompForSeo.vue";
  import seohotelDetails from "../../components/seohotelDetails.vue";
  
  export default {
    components: {
      headerTag,
      footerTag,
      searchHeaderCompForSeo,
      seohotelDetails,
    },
    data() {
      return {};
    }
  };
  </script>
  