<template>
  <q-page-container style="padding-top: 0px">
  <q-page class="q-pa-sm" style="padding-top: 120px">
    <subHeaderForAdmin />
    <!--BOOKING ALL MODULE START-->
    <div
      style="
        display: flex;
        justify-content: inherit;
        background-color: #2d4591;
        color: white;
        font-size: 17px;
        font-weight: bold;
        margin-top: 10px;
      "
    >
      <span style="margin-left: 15px">Active Bookings</span>
    </div>
    <template v-if="live_bookingdata_Staff_all_rows.length > 0">
    <q-table
      dense
      style="
        font-family: verdana;
        height: fit-content;
        border: 1px solid #000;
        margin: 10px;
      "
      :title="title3"
      :data="live_bookingdata_Staff_all_rows"
      :columns="live_bookings_Staff_columns"
      :filter="filter"
      :wrap-cells="true"
      :selected.sync="selected"
      separator="cell"
      :grid="mode === 'grid'"
      hide-bottom
      :rows-per-page-options="[live_bookingdata_Staff_all_rows.length]"
      :rows-per-page="live_bookingdata_Staff_all_rows.length"
    >
    </q-table>
    </template>
    <template v-else>
      <p>No records found.</p>
    </template>





    <!--Upcoming Booking Details Start-->

    <div
      style="
        display: flex;
        justify-content: inherit;
        background-color: #2d4591;
        color: white;
        font-size: 17px;
        font-weight: bold;
        margin-top: 10px;
      "
    >
      <span style="margin-left: 15px">UpComing Bookings</span>
    </div>
    <template v-if="upcoming_bookingdata_Staff_all_rows.length > 0">
    <q-table
      dense
      style="
        font-family: verdana;
        height: fit-content;
        border: 1px solid #000;
        margin: 10px;
      "

      :data="upcoming_bookingdata_Staff_all_rows"
      :columns="upcoming_bookings_Staff_columns"
      :filter="filter"
      :wrap-cells="true"
      :selected.sync="selected"
      separator="cell"
      :grid="mode === 'grid'"
      hide-bottom
      :rows-per-page-options="[upcoming_bookingdata_Staff_all_rows.length]"
      :rows-per-page="upcoming_bookingdata_Staff_all_rows.length"
    >
    </q-table>
    </template>
    <template v-else>
      <p>No records found.</p>
    </template>

    <!--Upcoming Booking Details End-->



    <!--BOOKING ALL MODULE END-->


  </q-page>
</q-page-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      title: "Month Wise Accommodation Booking Details",
      title2: "Month Wise Accommodation Cancellation Details",
      title3: "Active Bookings Details",
      // title4: "Upcoming Bookings Details",

      filter: "",
      selected: [],
      mode: "list",
    };
  },

  mounted() {

    this.$store.dispatch("adminDashboard/getBookingAllStaffLiveForAdmin",this.userDetails);
    this.$store.dispatch("adminDashboard/getBookingAllUpcomingStaffForAdmin",this.userDetails);

    // this.$store.dispatch("adminDashboard/getTravelBookingForAdmin");
    // this.$store.dispatch("adminDashboard/getTravelCancellationForAdmin");
  },
  computed: {
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];
      return user;
    },
    ...mapState({
      total_booking_amount() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.booking_amount),
          0
        );
      },
      total_bookings() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.total_bookings),
          0
        );
      },
      total_nights() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.total_nights),
          0
        );
      },
      total_guests() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.total_guests),
          0
        );
      },
      total_rooms() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.total_rooms),
          0
        );
      },
      total_cancellations() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.total_cancellations),
          0
        );
      },
      Total_typewiseCount() {
        return this.property_room_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.cnt),
          0
        );
      },
      total_cancellation_nights() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.total_nights),
          0
        );
      },
      total_cancellation_amount() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.total_booking_amount),
          0
        );
      },
      total_cancellation_occupants() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.occupants),
          0
        );
      },
      total_cancellation_rooms() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.rooms),
          0
        );
      },
      total_Cancelrefund_amount() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.total_refund_amount),
          0
        );
      },


      ...mapGetters("adminDashboard", ["live_bookingdata_Staff_all_rows"]),
      ...mapGetters("adminDashboard", ["upcoming_bookingdata_Staff_all_rows"]),





      live_bookings_Staff_columns: (state) =>
        state.adminDashboard.live_bookings_Staff_columns,
        upcoming_bookings_Staff_columns: (state) =>
        state.adminDashboard.upcoming_bookings_Staff_columns,


    }),
  },
  methods: {
    // ...mapActions("account", ["getMonthwiseAccBookings"]),
    // ...mapActions("account", ["getMonthwiseAccCancellations"]),
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
