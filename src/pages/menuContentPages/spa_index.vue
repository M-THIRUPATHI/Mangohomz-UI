<template>
  <q-page-container>
    <q-page class="q-pa-md text-justify">
      <headerTag />
      <home />
      <!-- <why-mango-homz /> -->
      <!-- <rooms />
      <food />
      <travel />
      <medical-equipment />
      <covid-protocals /> -->
      <!-- <partner-with-us /> -->
      <faq style="margin-top:-80px" />
      <!-- <contact-us /> -->
      <mostRecentSearch />


      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <!-- <q-fab icon="add" direction="left" color="primary"> <i class="fab fa-telegram"></i> -->
        <div class="q-pa-md q-gutter-sm">

          <!-- <q-btn
            round
            color="secondary"
            icon="mdi-whatsapp"
            type="a"
            aria-label="MH WhatsApp Communication Link"
            href="https://api.whatsapp.com/send?phone=918929982655"
            target="_blank"
            ><q-tooltip class="bg-green">
              WhatsApp
            </q-tooltip>
          </q-btn> -->
          <!-- <q-btn
            round
            color="info"
            icon="fab fa-telegram"
            type="a"
            aria-label="MH Telegram Communication Link"

            href="https://t.me/MangoHomzBot"
            target="_blank"
            ><q-tooltip class="bg-info text-body2">Telegram</q-tooltip></q-btn
          > -->
        <!-- <q-btn class="gt-xs" fab icon="keyboard_arrow_up" color="red" /> -->

          <!-- <q-btn
            round
            color="primary"
            icon="mdi-phone"
            type="a"
            aria-label="MH Phone Communication Link"
            href="tel:8929982655"
            target="_blank"
            ><q-tooltip class="bg-primary text-body2">Phone</q-tooltip></q-btn
          >
          <q-btn
            round
            color="negative"
            icon="mdi-email"
            type="a"
            aria-label="MH Email Communication Link"
            href="mailto:care@mangohomz.com"
            target="_blank"
            ><q-tooltip class="bg-red text-body2">Email</q-tooltip></q-btn
          > -->
        </div>
        <!-- </q-fab> -->
      </q-page-sticky>
    </q-page>
    <footer-tag />
  </q-page-container>
</template>
<script>

import headerTag from "../../components/header.vue";
import home from "../menuContentPages/home.vue";
// import whyMangoHomz from "../menuContentPages/whyMangoHomz.vue";
// import rooms from "../menuContentPages/rooms.vue";
// import food from "../menuContentPages/food.vue";
// import travel from "../menuContentPages/travel.vue";
// import medicalEquipment from "../menuContentPages/medicalEquipment.vue";
// import covidProtocals from "../menuContentPages/coronaProtocol.vue";
// import partnerWithUs from "../menuContentPages/partner.vue";
import faq from "../menuContentPages/faq.vue";
// import contactUs from "../menuContentPages/contactUs.vue";
import footerTag from "../../components/footer.vue";
import mostRecentSearch from "../menuContentPages/mostRecentSearch.vue";

export default {
  components: {
    headerTag,
    home,
  //  whyMangoHomz,
    // rooms,
    // food,
    // travel,
    // medicalEquipment,
    // covidProtocals,
    // partnerWithUs,
    faq,
    // contactUs,
    mostRecentSearch,
    footerTag,

  },
  data() {
    return {
      title: "Mangohomz – Book a patient-friendly room near the hospital"
    };
  },
  meta() {
    return {
      title: this.title
    };
  }
};
</script>
