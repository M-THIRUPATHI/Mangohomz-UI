<template>
  <q-page-container style="padding-top: 0px">
 <q-page style="padding-top: 100px" class="q-pa-sm">
   <subHeaderForAdmin />
   <q-card
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md"

      >
        <div
          class="row q-col-gutter-sm"
          style="padding-top: 0px"

        >
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table
                style="font-family: verdana"
                :title="title3"
                :data="property_months_wise_master_reports"
                :columns="properties_months_wise_reports_columns"
                dense
                :pagination.sync="pagination"
                separator="cell"
                row-key="sno"
                :grid="mode === 'grid'"
                color="green"
                :hide-header="mode === 'grid'"
              >
                <template v-slot:bottom-row>
                  <q-tr>
                    <q-td colspan="3" style="text-align: center">
                      <strong>Total</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_bookings_mothswise }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_nights_mothswise }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_guests_mothswise }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_rooms_mothswise }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_booking_amount_mothswise }}</strong>
                    </q-td>

                    <q-td style="text-align: center">
                      <strong>{{ parseInt(total_booking_amount_mothswise/total_bookings_mothswise) }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{parseInt( total_booking_amount_mothswise/total_nights_mothswise) }}</strong>
                    </q-td>
                  </q-tr>
                </template>


                <template v-slot:top-right="props">
                  <q-input
                    outlined
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                    style="width: 400px"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>

                  <q-btn
                    flat
                    round
                    dense
                    :icon="
                      props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                    "
                    @click="props.toggleFullscreen"
                    v-if="mode === 'list'"
                  >
                    <q-tooltip
                      :difiltersable="$q.platform.is.mobile"
                      v-close-popup
                      >{{
                        props.inFullscreen
                          ? "Exit Fullscreen"
                          : "Toggle Fullscreen"
                      }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    flat
                    round
                    dense
                    :icon="mode === 'grid' ? 'list' : 'grid_on'"
                    @click="
                      mode = mode === 'grid' ? 'list' : 'grid';
                      separator = mode === 'grid' ? 'none' : 'horizontal';
                    "
                    v-if="!props.inFullscreen"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                      >{{ mode === "grid" ? "List" : "Grid" }}
                    </q-tooltip>
                  </q-btn>
                  <download-excel
                    v-if="property_months_wise_master_reports.length != 0"
                    :data="property_months_wise_master_reports"
                    :fields="json_fields"
                    :header="headerValue"
                    worksheet="Propert Months Wise Booking Report"
                    :name="`${excel_date}_Property Wise Months Booking Report.xls`"
                  >
                    <q-icon color="primary" name="mdi-file-excel" size="22px" />
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                      >Download Excel
                    </q-tooltip>
                  </download-excel>
                  <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->
                </template>
              </q-table>
            </div>
          </div>
        </div>
      </q-card>

 </q-page>
</q-page-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

export default {
 components:{
   subHeaderForAdmin
 },
 data() {
   return {
     details: false,
     maximizedToggle: true,
     editedItem: "",
     filter: "",

     pagination: {
       rowsPerPage: 300,
       inputValue: "",
     },
     title3: "Property Months Wise Booking Data",
     headerValue: "Property Months Wise Booking Report",
     mode: "list",
     excel_date: moment(new Date()).format("DD/MM/YYYY"),
     json_fields: {
       "SNo": "sno",
       "Months Name": "month_name",
       "Property Name": "property_name",
       "Total Bookings": "total_bookings",
       "Total Nights": "total_nights",
       "Total Guests": "total_guests",
       "Total Room": "total_rooms",
       "Booking Amount": "booking_amount",
       "AOV": "avg_booking_amount",
        "ARN": "avg_booking_nightvalue",

     },
   };
 },
 mounted() {
  this.$store.dispatch("centeraccounts/propertyMonthsWisereportsdetails");

 },
 computed: {
   ...mapState({
     userDetails() {
       let user = JSON.parse(localStorage.getItem("user")) || [];
       return user;
     },

     ...mapGetters("centeraccounts", ["property_months_wise_master_reports"]),
     properties_months_wise_reports_columns: (state) =>
        state.centeraccounts.properties_months_wise_reports_columns,
   }),



   total_bookings_mothswise() {
        return this.property_months_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.total_bookings),
          0
        );
      },
      total_nights_mothswise() {
        return this.property_months_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.total_nights),
          0
        );
      },
      total_guests_mothswise() {
        return this.property_months_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.total_guests),
          0
        );
      },
      total_rooms_mothswise() {
        return this.property_months_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.total_rooms),
          0
        );
      },
      total_booking_amount_mothswise() {
        return this.property_months_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.booking_amount),
          0
        );
      },
 },
 methods: {
  ...mapGetters("centeraccounts", ["property_months_wise_master_reports"]),


 },
};
</script>

