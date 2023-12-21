<template>
  <div>
    <headerTag />
    <q-page-container>
       <q-page>
        <mostRecentSearchResults />

      </q-page>
    </q-page-container>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-space></q-space>
        <searchHeaderCompForSeo />
        <q-space />
      </q-toolbar>
    </q-page-sticky>
    <q-page-sticky position="bottom-right" :offset="[0,0]">
        <!-- <div class="q-pa-md q-gutter-sm">
          <q-btn
            round
            color="secondary"
            icon="mdi-whatsapp"
            type="a"
            href="https://api.whatsapp.com/send?phone=918929982655"
            target="_blank"
            ><q-tooltip class="bg-green">
              Whatsapp
            </q-tooltip>
          </q-btn>
        </div> -->
      </q-page-sticky>
    <footer-tag />
  </div>
</template>
<script>
import headerTag from "../../components/header.vue";
import footerTag from "../../components/footer.vue";
import searchHeaderCompForSeo from "../../components/searchHeaderCompForSeo.vue";
import mostRecentSearchResults from "../../pages/menuContentPages/mostRecentSearchResultList.vue";

export default {
  components: {
    headerTag,
    footerTag,
    searchHeaderCompForSeo,
    mostRecentSearchResults
  },
  data() {
    return {};
  }
};
</script>
