<template>
  <div Header="container">
      <Header />
      <q-card style="min-width: 350px;margin-top:88px;">
        <q-toolbar
          class="bg-primary text-white q-my-md shadow-2"
          style="top: 0; position: sticky; z-index: 100"
        >
          <div
            class="col-11 text-white text-h6 text-bold text-center text-primary"
            style="
              font-family: verdana;
              font-size: 22px;

            "
          >
            Cancellation & Refunds Policy
          </div>
          <!-- <div>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              icon="close"
              color="primary"
              @click="closeCancellationDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </div> -->
        </q-toolbar>

        <q-card-section>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Accommodation:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> strict Accommodation cancellation
            policy allows MangoHomz Guests, to receive a full refund, Only if
            the cancellation of Accommodation booking happens 3 days before the
            check-in date. And any cancellation happens between 3 days and 24hrs
            before check-in the guest will be entitled to get only 60% refund
            And if the Cancellation happens within in 24hrs till check-in time
            then Guests will get 25% refund after all necessary tax deductions
            applicable. Once checked in there is no cancellation.
          </div>
        </q-card-section>

        <q-card-section>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Transportation:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> strict Transportation cancellation
            policy allows MangoHomz Guests, to receive a full refund, Only if
            the cancellation Transportation booking happens 3 days before the
            service book-in date. And any cancellation happens between 3 days
            and 24hrs before Service Book-in the guest will be entitled to get
            only 60% refund And if the Cancellation happens within in 24hrs till
            service Book-in time then Guests will get 25% refund after all
            necessary tax deductions applicable. Once service utilised there is
            no cancellation.
          </div>
        </q-card-section>
        <q-card-section>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Medical Equipment:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> strict Medical Equipment
            cancellation policy allows MangoHomz Guests, to receive a full
            refund, Only if the cancellation of Accommodation booking happens 3
            days before the service book-in date. And any cancellation happens
            between 3 days and 24hrs before service book-in the guest will be
            entitled to get only 60% refund And if the Cancellation happens
            within in 24hrs till service book-in time then Guests will get 25%
            refund after all necessary tax deductions applicable. Once service
            utilised there is no cancellation.
          </div>
        </q-card-section>
        <q-card-section>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Food:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> User can book food 60 Minute before
            but subject to availability. Cancellation is not applicable on the
            same.
          </div>
        </q-card-section>

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
