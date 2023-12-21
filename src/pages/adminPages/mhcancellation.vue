<template>
  <q-page style="padding-top: 120px" class="q-pa-sm">
    <subHeaderForAdmin />
    <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card>
          <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
            <p
              class="q-pa-xs text-left text-bold"
              style="text-align: justify; font-size: 20px; font-family: verdana"
            >
              Cancellation Report:
            </p>

            <q-btn
              :class="{ selected: isSelected('accomodationCancellation') }"
              push
              label="Accommodation"
              icon="mdi-domain"
              @click="
                accomodationCancellation(),
                  selectbtn('accomodationCancellation')
              "
              v-if="!isAccommodationDataEmpty"
            />
            <q-btn
              :class="{ selected: isSelected('accFoodCancellation') }"
              push
              label="Food"
              icon="mdi-food-fork-drink"
              @click="accFoodCancellation(), selectbtn('accFoodCancellation')"
              v-if="!isFoodDataEmpty"
            />
            <q-btn
              :class="{ selected: isSelected('accTravelCancellation') }"
              push
              label="Travel"
              icon="mdi-car"
              @click="
                accTravelCancellation(), selectbtn('accTravelCancellation')
              "
              v-if="!isTravelDataEmpty"
            />
            <q-btn
              :class="{ selected: isSelected('accMedicalCancellation') }"
              push
              label="Medical"
              icon="mdi-medical-bag"
              @click="
                accMedicalCancellation(), selectbtn('accMedicalCancellation')
              "
              v-if="!isMedicalDataEmpty"
            />

          </div>
        </q-card>
        <!--Acc Cancel Table-->
        <div
          style="padding-top: 10px"
          ref="accCanceldata"
          v-if="accCanceldata == true"
        >
          <q-card flat bordered class="bg-white">
            <q-table
              :data="Accommodation_Cancellation_rows"
              :columns="Accommodation_Cancellation_columns"
              :pagination.sync="pagination"
              style="font-family: verdana"
              separator="cell"
              wrap-cells
            >
            <template v-slot:top-right="props">

              <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: -10px;
                    "
                  >

                <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width:400px">

                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
                <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="props.toggleFullscreen" v-if="mode === 'list'">
                  <q-tooltip :difiltersable="$q.platform.is.mobile" v-close-popup>{{
                    props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
                  }}
                  </q-tooltip>
                </q-btn>

                <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="
                  mode = mode === 'grid' ? 'list' : 'grid';
                separator = mode === 'grid' ? 'none' : 'horizontal';
                " v-if="!props.inFullscreen">
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                  </q-tooltip>
                </q-btn>
                <download-excel v-if="Accommodation_Cancellation_rows.length != 0" :data="Accommodation_Cancellation_rows"
                  :fields="json_fields" :header="headerValue" worksheet="Booking Cancellation Data" :name="`${excel_date}_Booking cancel.xls`
                    ">
                  <q-icon color="primary" name="mdi-file-excel" size="22px" />
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                  </q-tooltip>
                </download-excel>
                <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->
              </template>
            </q-table>
          </q-card>
        </div>
        <!--Travel Cancel Table-->
        <div
          style="padding-top: 10px"
          ref="travelCanceldata"
          v-else-if="travelCanceldata"
        >
          <q-card flat bordered class="bg-white">
            <q-table
              :data="Travel_Cancellation_rows"
              :columns="Travel_Cancellation_columns"
              :pagination.sync="pagination"
              style="font-family: verdana"
              separator="cell"
              wrap-cells
            >
              <!-- <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    color="positive"
                    icon="las la-eye"
                    size="sm"
                    @click="viewItem(props.row)"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                  </q-btn>
                </q-td>
              </template> -->
            </q-table>
          </q-card>
        </div>
        <!--Food Cancel Table-->
        <div
          style="padding-top: 10px"
          ref="foodCanceldata"
          v-else-if="foodCanceldata"
        >
          <q-card flat bordered class="bg-white">
            <q-table
              :data="food_Cancellation_rows"
              :columns="food_Cancellation_columns"
              :pagination.sync="pagination"
              style="font-family: verdana"
              separator="cell"
              wrap-cells
            >
              <!-- <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    color="positive"
                    icon="las la-eye"
                    size="sm"
                    @click="viewItem(props.row)"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                  </q-btn>
                </q-td>
              </template> -->
            </q-table>
          </q-card>
        </div>
        <!--Medical Cancel Table-->
        <div
          style="padding-top: 10px"
          ref="medicalCanceldata"
          v-else-if="medicalCanceldata"
        >
          <q-card flat bordered class="bg-white">
            <q-table
              :data="medical_Cancellation_rows"
              :columns="medical_Cancellation_columns"
              :pagination.sync="pagination"
              style="font-family: verdana"
              separator="cell"
              wrap-cells
            >
              <!-- <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    color="positive"
                    icon="las la-eye"
                    size="sm"
                    @click="viewItem(props.row)"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                  </q-btn>
                </q-td>
              </template> -->
            </q-table>
          </q-card>
        </div>
      </div>
    </q-card>
    <!-- <q-dialog
          v-model="Canceldetails"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-layout class="bg-white">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed" />
              <div class="text-h6">
               Cancellation Details:{{ editedItem.user_name }}
              </div>
              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card-section class="q-pa-xs" >
              <q-form>
                <div  >
                  <q-card class="bg-blue-grey-1 text-black" style="width: 100%">
                    <q-card-section class="text-white">
                      <div class="q-gutter-xs row">
                        <q-icon
                          name="manage_accounts"
                          color="primary"
                          size="2em"
                        />
                        <div class="text-h6 text-black text-italic">
                          ReachUs Details
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Booking ID :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mh_booking_id
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              User Name:
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.user_name
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Property Name :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.property_name
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Experience Rating :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mh_experience_rating
                            }}</q-item-section>
                          </q-item>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                            Hotel Rating:
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.hotel_rating
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                             Recommended Value:
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mh_recommend_value
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Message :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.user_message
                            }}</q-item-section>
                          </q-item>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-form>
            </q-card-section>
          </q-layout>
        </q-dialog> -->
  </q-page>
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
      selectedbtn: "accomodationCancellation",
      maximizedToggle: true,
      editedItem: "",
      accCanceldata: true,
      travelCanceldata: true,
      medicalCanceldata: true,
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      headerValue:"ACCOMMODATION CANCELLATION DETAILS",
      mode: "list",
      filter: "",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {


        "SNo": "s_no",
        "Cancel Id": "booking_cancel_id",
        "MH booking ID": "booking_order_id",
        "Customer Name": "guest_name",
        "Cancel Date": "created_datetime",
        "Property Name": "property_name",
        "Property City Name": "property_city_name",
        "CheckIn": "check_in",
        "CheckOut": "check_out",
        "Number Of Day": "no_of_days",
        "Mobile Number":"phone_no",
        "Room Price": "room_price",
        "Discount Price":"discount_price",
        "Taxs":"gst_amount",
        "Booking Amount": "total_price",
        "Cancellation Amount":"cancellAmount",
        "Refunds Amount":"refundAmount",
        "Balance Payment To Partner":"partner_amount_on_cancel",


      },
    };
  },
  computed: {
    isAccommodationDataEmpty() {
      return this.Accommodation_Cancellation_rows.length === 0;
    },
    isTravelDataEmpty() {
      return this.Travel_Cancellation_rows.length === 0;
    },
    isFoodDataEmpty() {
      return this.food_Cancellation_rows.length === 0;
    },
    isMedicalDataEmpty() {
      return this.medical_Cancellation_rows.length === 0;
    },
    isSelected() {
      return (btn) => {
        return this.selectedbtn === btn;
      };
    },
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      Accommodation_Cancellation_columns: (state) =>
        state.cancelled.Accommodation_Cancellation_columns,
      Travel_Cancellation_columns: (state) =>
        state.cancelled.Travel_Cancellation_columns,
      food_Cancellation_columns: (state) =>
        state.cancelled.food_Cancellation_columns,
      medical_Cancellation_columns: (state) =>
        state.cancelled.medical_Cancellation_columns,
    }),
    ...mapGetters("cancelled", ["Accommodation_Cancellation_rows"]),
    ...mapGetters("cancelled", ["Travel_Cancellation_rows"]),
    ...mapGetters("cancelled", ["food_Cancellation_rows"]),
    ...mapGetters("cancelled", ["medical_Cancellation_rows"]),
  },
  mounted() {
    this.$store.dispatch("cancelled/getAccommodationCancellationDetails");
    this.$store.dispatch("cancelled/getTravelCancellationDetails");
    this.$store.dispatch("cancelled/getFoodCancellationDetails");
    this.$store.dispatch("cancelled/getMedicalCancellationDetails");
  },
  methods: {
    selectbtn(btn) {
      this.selectedbtn = btn;
    },
    ...mapActions("cancelled", ["getAccommodationCancellationDetails"]),
    ...mapActions("cancelled", ["getTravelCancellationDetails"]),
    ...mapActions("cancelled", ["getFoodCancellationDetails"]),
    ...mapActions("cancelled", ["getMedicalCancellationDetails"]),

    accomodationCancellation() {
      this.accCanceldata = true;
      this.travelCanceldata = false;
      this.foodCanceldata = false;
      this.medicalCanceldata = false;
    },
    accFoodCancellation() {
      this.accCanceldata = false;
      this.travelCanceldata = false;
      this.foodCanceldata = true;
      this.medicalCanceldata = false;
    },
    accTravelCancellation() {
      this.accCanceldata = false;
      this.travelCanceldata = true;
      this.foodCanceldata = false;
      this.medicalCanceldata = false;
    },
    accMedicalCancellation() {
      this.accCanceldata = false;
      this.travelCanceldata = false;
      this.foodCanceldata = false;
      this.medicalCanceldata = true;
    },
  },
};
</script>
<style>
.selected {
  background-color: #00e1ff !important;
  color: #000000 !important;
}

@media (max-width: 767px) {
  .AccomBkgDetails {
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


  .AccomBkgTbl {
    width: 91vw !important;
  }

}
</style>
