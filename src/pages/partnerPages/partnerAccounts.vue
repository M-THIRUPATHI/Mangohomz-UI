<template>
  <q-page style="padding-top: 90px" class="q-pa-sm">
      <div class="row q-col-gutter-sm q-px-sm q-pb-md " style="padding-top: 0px;" >
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white">
       <div class="q-pa-xs row justify-center q-gutter-md">
        <div class="row col-12">
          <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
            <b> Name: {{ userDetails.name }}</b>
            <br>
            <b>Email: {{ userDetails.email }}</b>
            </div>
            <q-space/>
            <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 25px;font-family: verdana;">
          <p style="text-align: justify"><b>Welcome {{ userDetails.name }} </b></p>
          </div>
          <q-space/>

            <div class="q-ma-xs  q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
          <b> User Name: {{ userDetails.user_name }}</b>
            <br>
           <b>City: {{ userDetails.zone }}</b>
            </div>
          </div>
        </div>
      </div>
          </div>
      <q-card style="width: 100%;" class="q-px-sm">
        <q-card-section>
          <div class="text-h6"></div>
        </q-card-section>

        <q-tabs
      v-model="tab"
      inline-label
      class="bg-primary text-white shadow-2"
    >
    <q-tab name="home" icon="mdi-home" label="Home" />
      <q-tab name="revenue" icon="mdi-file-outline" label="Revenue Summary" />
      <q-tab name="offers" icon="mdi-sale" label="Activate Offers" />
      <!-- <q-tab name="Roomdetails" icon="movie" label="Update Room Details" /> -->
      <q-tab name="History" icon="mdi-history" label="History" />
      <q-tab name="Tax" icon="slow_motion_video" label="Tax Deduction Details" />
      <q-tab name="GST" icon="mdi-cash" label="GST Details" />
    </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="home">
            <q-card-section class="q-pa-xs">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-markup-table class="q-ma-xs">
              <span class="q-focus-helper"></span>
              <q-card-section horizontal class="row q-col-gutter-sm q-py-sm q-pa-md"  style="width: 100%; margin: auto">
                <div
                  class="col-12 q-ml-xs text-left"
                  style=" padding-top: 5px"
                >
                  <!-- <div
                    class="row justify-center text-bold"
                    style="border:1px solid lightgrey"
                  >
                   HOME PAGE OF ACCOMMODATION PARTNER
                  </div> -->
                  <div class="row" style="border:0.5px solid lightgrey">
                    <div class="col-2 text-bold bg-primary text-white" style="padding-left:5px">
                      Room Types
                    </div>
                    <div
                      class="col-2 text-bold bg-primary text-white"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Occupied
                    </div>
                    <div
                      class="col-2 text-bold bg-primary text-white"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Vacant
                    </div>
                    <div
                      class="col-6 text-center bg-primary text-white justify-center text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Revenue Generated
                    </div>
                  </div>

                  <div class="row" style="border:0.5px solid lightgrey">
                    <div
                      class="col-2 text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Standard
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      3
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      2
                    </div>
                    <div
                      class="col-2 text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Current Pay Cycle
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                    2
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                    5000
                    </div>
                  </div>
                  <div class="row" style="border:0.5px solid lightgrey">
                    <div
                      class="col-2 text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Supreme
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      4
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      1
                    </div>
                    <div
                      class="col-2 text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      MTD
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                    2
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                     1500
                    </div>
                  </div>

                  <div class="row" style="border:0.5px solid lightgrey">
                    <div
                      class="col-2 text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Total
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      7
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                     3
                    </div>
                    <div
                      class="col-2 text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Prev Month
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                     3
                    </div>
                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                   6000
                    </div>
                  </div>

                  <div class="row" style="border:0.5px solid lightgrey">
                    <div
                      class="col-2 text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Last Payment Details
                    </div>
                    <div
                      class="col-2 text-bold text-primary text-center"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                     10000
                    </div>
                    <div
                      class="col-2 text-bold"
                      style="solid silver; padding-left:5px"
                    >
                    </div>
                    <div
                      class="col-2 text-bold"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                      Date of Payment
                    </div>

                    <div
                      class="col-2 text-bold text-primary"
                      style="border-left:0.5px solid silver; padding-left:5px"
                    >
                   11/09/22
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-markup-table>
          </div>
            </q-card-section>

          </q-tab-panel>
          <q-tab-panel name="revenue">
            <q-card-section class="q-pa-xs">
              <div class="q-pa-md" style="padding-top: 20px">
      <q-table
        style="font-family: verdana"
        :title="title"
        :data="revenue_bookings_rows"
        :columns="revenue_bookings_columns"
        :pagination.sync="pagination1"
        dense
        separator="cell"
        row-key="sno"
        :grid="mode === 'grid'"
        color="green"
        :hide-header="mode === 'grid'"
      >
      </q-table>
    </div>
            </q-card-section>
          </q-tab-panel>
          <q-tab-panel name="offers">
            <q-card-section class="q-pa-xs">
             <div class="text-bold text-secondary text-h2">Offers screen comes here</div>
            </q-card-section>
          </q-tab-panel>
          <q-tab-panel name="History">
            <q-card-section class="q-pa-xs">
              <div class="text-bold text-secondary text-h2">History screen comes here</div>
            </q-card-section>
          </q-tab-panel>
          <q-tab-panel name="Tax">
            <q-card-section class="q-pa-xs">
              <div class="text-bold text-secondary text-h2">Tax Deduction screen comes here</div>
            </q-card-section>
          </q-tab-panel>
          <q-tab-panel name="GST">
            <q-card-section class="q-pa-xs">
              <div class="q-pa-md" style="padding-top: 20px">
      <q-table
        style="font-family: verdana"
        :title="title1"
        :data="revenue_bookings_rows"
        :columns="revenue_accounts_bookings_columns"
        :pagination.sync="pagination1"
        dense
        separator="cell"
        row-key="sno"
        :grid="mode === 'grid'"
        color="green"
        :hide-header="mode === 'grid'"
      >
      </q-table>
    </div>
            </q-card-section>
          </q-tab-panel>
        </q-tab-panels>
        <q-card-section class="q-pt-none"> </q-card-section>
      </q-card>

  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";
import { date } from "quasar";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";

export default {
  data() {
    return {
      tab: "home",
      pagination1: {
      rowsPerPage: 14,
    },
    filter: "",
    mode: "list",
    title: "Revenue Details :",
    title1:"GST Details :",
      };
  },
  computed: {

      ...mapState({
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];
      return user;
    },
    property: (state) => state.dropdown.property_arr,
    revenue_bookings_columns: (state) =>
      state.booking.revenue_bookings_columns,
      revenue_accounts_bookings_columns: (state) =>state.booking.revenue_accounts_bookings_columns,
    guest_book_columns: (state) => state.booking.guest_book_columns,
  }),

  ...mapGetters("booking", ["revenue_bookings_rows"]),
},
  created() {
    if (this.userDetails.sub_role == "partner_acc") {
      this.$store.dispatch("partners/getPropertyRegistrationMaster");
    this.$store.dispatch("partners/loadFoodPartnerNames");
    this.$store.dispatch("partners/loadTravelpartnerNames");
    this.$store.dispatch("partners/loadEquipmentpartnerNames");
      // this.$store.dispatch("partners/getHotelsData");
      this.$store.dispatch("partners/getHotelsNames");
    } else if (this.userDetails.sub_role == "partner_food") {
      this.$store.dispatch("partners/loadFoodPartnerNames");
    } else if (this.userDetails.sub_role == "partner_vehicle") {
      this.$store.dispatch("partners/loadTravelpartnerNames");
    } else if (this.userDetails.sub_role == "partner_medical") {
      this.$store.dispatch("partners/loadEquipmentpartnerNames");
    }
  },
  mounted() {
      this.$store.dispatch("booking/revenueBookingData");
  },
  methods: {
      ...mapActions("booking", ["getBookingDetails"]),
  },
};
</script>
