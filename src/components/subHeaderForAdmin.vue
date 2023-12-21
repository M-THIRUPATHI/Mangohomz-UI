<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 0px ;min-height: 30px;">


      <div
          class="row q-col-gutter-sm"
          style="
             padding-top: 0px;
            border-top: 2px solid lightgrey;
            border-bottom: 2px solid lightgrey;
          "
        >
      <div
            class="gt-xs col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white"
          >
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    margin-top: -20px;
                    margin-right: 115px;
                    font-family: verdana;
                    padding-top: 10px;
                  "
                >
                <b>
                    {{ userDetails.name }}
                    <template v-if="userDetails.name && userDetails.user_name && userDetails.zone"> | </template>
                    {{ userDetails.user_name }} | {{ userDetails.zone }}
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div
            class="lt-sm col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white"
          >
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    margin-top: -20px;
                    margin-right: 115px;
                    font-family: verdana;
                    padding-top: 10px;
                  "
                >
                <b>
                    {{ userDetails.name }}
                    <template v-if="userDetails.name && userDetails.user_name && userDetails.zone"> | </template>
                    {{ userDetails.user_name }} | {{ userDetails.zone }}
                  </b>
                </div>
              </div>
            </div>
          </div>
          </div>
   </q-page>
  </q-page-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Month Wise Accommodation Booking Details",


      filter: "",
      selected: [],
      mode: "list",
    };
  },

  mounted() {
    // this.$store.dispatch("adminDashboard/getPartnerRegistartionAllForAdmin");

  },
  computed: {
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];
      return user;
    },
    ...mapState({
      // total_booking_amount() {
      //   return this.monthwise_accbooking_rows.reduce(
      //     (total, row) => total + parseInt(row.booking_amount),
      //     0
      //   );
      // },

      // ...mapGetters("adminDashboard", ["property_master_displayAll_rows"]),


      // monthwise_accbooking_columns: (state) =>
      //   state.adminDashboard.monthwise_accbooking_columns,

    }),
  },
  methods: {
    // ...mapActions("account", ["getMonthwiseAccBookings"]),

  },
};
</script>
<style scoped>
@media (max-width: 767px) {
  .AccomBkgDetails {
    display: block !important;
  }
  .CancelDetails {
    display: block !important;
  }
  .PartnerAgent {
    display: block !important;
  }
  .AccomBkgTbl {
    width: 91vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }
  .CancelDetails {
    display: block !important;
  }
  .PartnerAgent {
    display: block !important;
    justify-content: center;
  }
  .AccomBkgTbl {
    width: 91vw !important;
  }
  .AgentDetails {
    justify-content: center !important;
  }
  .PartnerAgentContent {
    justify-content: center !important;
  }
}
</style>
