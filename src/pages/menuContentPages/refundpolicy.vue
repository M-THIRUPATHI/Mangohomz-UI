<template>
  <div Header="container">
      <Header />


      <q-card style="min-width: 350px;margin-top:88px;">
        <q-toolbar
          class="bg-primary text-white q-my-md shadow-2"
          style="top: 0; position: sticky; z-index: 100"
        >
          <div
            class="col-11 text-h6 text-bold text-center"
            style="
              font-family: verdana;
              font-size: 22px;

            "
          >
           Refund Policy
          </div>
          <q-space />

          <!-- <q-btn
            dark
            padding="none"
            class="justify-end"
            icon="close"
            color="primary"
            @click="closeRefundDialog"
          >
            <q-tooltip>close</q-tooltip>
          </q-btn> -->
        </q-toolbar>

        <q-card-section>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;

            "
          >
            Refund Type:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Refunds, if any, on cancelled bookings will always be processed to
            the respective account or the banking instrument (Credit Card, Debit
            Card,Netbanking,UPI etc) from which payment was made for that
            booking.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;

            "
          >
            Refund Time limit:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            User will get the refund on or within 7-8 bank working days of the
            cancellation. In case of any further delay MangoHomz will notify the
            user.
          </div>
        </q-card-section>
      </q-card>
      <mostRecentSearchVue />
      <FooterTag />
  </div>
</template>
<script>
import Header from 'src/components/header.vue';
// import partnerWithUs from "./menuContentPages/partner.vue";
import FooterTag from "../../components/footer.vue"
import mostRecentSearchVue from "../menuContentPages/mostRecentSearch.vue"

export default {

  components:{
      // partnerWithUs,
      Header,
      mostRecentSearchVue,
      FooterTag
  }
}
</script>
