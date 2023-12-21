<template>
  <div>
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">

        <q-table
          style="font-family: verdana"
          :title="title"
          :data="foodPartner_bkng_accounts_rows"
          :columns="food_partner_account_bkng_columns"
          :pagination.sync="pagination1"
          dense
          separator="cell"
          row-key="sno"
          :grid="mode === 'grid'"
          color="green"
          :hide-header="mode === 'grid'"
          :selected.sync="selected"
        >
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn
                color="primary"
                @click="viewDataItem(props.row)"
                icon="las la-eye"
                size="sm"
                ><q-tooltip :disable="$q.platform.is.mobile"
                  >View</q-tooltip
                ></q-btn
              >
            </q-td>
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
              :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="props.toggleFullscreen"
              v-if="mode === 'list'"
            >
              <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                >{{
                  props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
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

            <q-btn
              flat
              round
              dense
              color="primary"
              icon="archive"
              @click="exportTable"
            >
              <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                >CSV Export
              </q-tooltip>
            </q-btn>
          </template>
        </q-table>
      </div>
      <q-dialog
        v-model="bookingDataDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpr fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div style="font-family: verdana">
                Food Booking Details
              </div>
              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>

          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar
                  flat
                  class="ma-02 text-bold"
                  style="
                    max-height: 20vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
                >
                  <q-icon name="manage_accounts" color="black" size="1.5em" style="padding-right: 10px" />
                  Booking Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Booking Id
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.booking_order_id }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Property Name
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.hotel_property_name }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Hospital Name
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.near_hospital_name }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Check In
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                        {{
                          moment(bookingFoodItem.check_in).format("Do MMM YYYY")
                        }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Check Out
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                        {{
                          moment(bookingFoodItem.check_out).format(
                            "Do MMM YYYY"
                          )
                        }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Guest Count
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.guest_count }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Mobile Number
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.mobile_number }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                        v-if="bookingFoodItem.gstin_no != ''"
                      >
                        GSTIN
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                        v-if="bookingFoodItem.gstin_no != ''"
                      >
                        : {{ bookingFoodItem.gstin_no }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        No.of Days
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.no_of_days }} Days
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar
                  flat
                  class="ma-02 text-bold"
                  style="
                    max-height: 20vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
                >
                  <q-icon name="mdi-sale" color="black" size="1.2em" style="padding-right: 10px"/>
                  Price Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Food charges
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : Rs. {{ Math.round(bookingFoodItem.food_charges) }} /-
                      </div>
                      <q-separator />
                      <!-- <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Discount (%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.discount }}
                      </div>
                      <q-separator />
                         <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Discount Price
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.discount_price }}
                      </div> -->
                      <!-- <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Base Price
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.base_price }}
                      </div> -->
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                        v-if="
                          this.bookingFoodItem.mh_offer_coupon != 'APPLY COUPEN'
                        "
                      >
                        Mh Offer
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                        v-if="
                          this.bookingFoodItem.mh_offer_coupon != 'APPLY COUPEN'
                        "
                      >
                        : {{ bookingFoodItem.mh_offer_coupon }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                        v-if="
                          this.bookingFoodItem.mh_offer_coupon != 'APPLY COUPEN'
                        "
                      >
                        MH offer Price (₹)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                        v-if="
                          this.bookingFoodItem.mh_offer_coupon != 'APPLY COUPEN'
                        "
                      >
                        : {{ bookingFoodItem.mh_offer_price }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                        v-if="
                          this.bookingFoodItem.mh_offer_coupon != 'APPLY COUPEN'
                        "
                      >
                        Price After Discount
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                        v-if="
                          this.bookingFoodItem.mh_offer_coupon != 'APPLY COUPEN'
                        "
                      >
                        :  Rs. {{ bookingFoodItem.price_after_discount }} /-
                      </div>
                      <div
                        class="col-12 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        @ Add GST ({{ bookingFoodItem.gst_percentage }}%)
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        CGST Amount (at {{ bookingFoodItem.cgst_percentage }}%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :  {{ bookingFoodItem.cgst_amount }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        SGST Amount (at {{ bookingFoodItem.sgst_percentage }}%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.sgst_amount }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Total Price
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : Rs. {{ bookingFoodItem.final_price_amount }} /-
                      </div>
                      <div
                        class="col-12 text-left text-grey"
                        style="font-family: verdana; font-size: 12px;text-black;text-align:right"
                      >
                        {{ bookingFoodPrice.final_price_amount_in_words }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar
                  flat
                  class="ma-02 text-bold"
                  style="
                    max-height: 20vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
                >
                  <q-icon name="manage_accounts" color="black" size="1.5em" style="padding-right: 10px"/>
                  Food Partner Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Food Booking Id
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.food_booking_orderid }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Food partner Name
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.foodPartner_name }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Sub partner Name
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.foodPartner_sub_name }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        City
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.booking_city }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        WhatsApp Number
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.whatsapp_number }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Email ID
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.email_id }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Date of Booking
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.food_booking_date }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Type of Booking
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.food_booking_type }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Food Items Count
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.total_item_qty }}
                      </div>

                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Total Booked Qty
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingFoodItem.total_qty_booked }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <q-resize-observer />
          </div>
          <div class="row q-col-gutter-sm" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-pa-md" style="padding-top: 20px">
                <q-table
                  style="font-family: verdana"
                  title="Food Item Details"
                  :data="bookingFoodItem.foodBkngData"
                  :columns="foodItem_bkng_columns"
                  dense
                  separator="cell"
                  row-key="sno"
                  hide-bottom
                  hide-pagination
                >
                  <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                      <q-btn
                        class="text-bold"
                        color="secondary"
                        size="sm"
                        icon-right="mdi-eye"
                        @click="
                          showDocument(props.row.food_image, 'Food Image')
                        "
                      />
                    </q-td>
                  </template>
                </q-table>
              </div>
            </div>
          </div>
        </q-layout>
      </q-dialog>

      <q-dialog
        v-model="small"
        transition-show="slide-up"
        transition-hide="slide-down"
        :maximized="maximizedToggle"
        persistent
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed" />
              <div class="text-h6">
                {{ dialogTitle }}
              </div>
              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <q-card v-show="showPanDoc" style="height: 600px">
            <div class="q-pt-xl row items-start q-gutter-md">
              <iframe
                :src="url"
                class="wrapper"
                width="100%"
                height="600px"
                frameborder="0"
              ></iframe>
            </div>
          </q-card>
        </q-layout>
      </q-dialog>
    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <!-- <q-btn flat round dense icon="mdi-account" /> -->
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
         Food Partner Accounts
        </q-toolbar-title>
        <b> User Name: {{ userDetails.user_name }}</b>
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>
<script>
// import { METHODS } from 'http';
import { mapActions, mapGetters, mapState } from "vuex";
import moment from "moment";
import filepaths from "../../helpers/filepath";

export default {
  data() {
    return {
      moment: moment,
      dialogTitle: "",
      selected: [],
      url: "",
      visible: false,
      showPanDoc: false,
      small: false,
      columns: "",
      data: [],
      bookingIndex: -1,
      subPropertyView: false,
      bookingFoodItem: {},
      maximizedToggle: true,
      bookingDataDialog: false,
      bookingDialog: false,
      title: "Food Booking Details for Accounts",
      mode: "list",
      filter: "",
      addDataDialog: false,
      statesList: [],
      propertyDetails: {
        account_id: "",
        partner_id: ""
      },
      pagination1: {
        rowsPerPage: 12
      },
      bookingFoodPrice: {
        final_price_amount_in_words: ""
      },
      a: [
        "",
        "One ",
        "Two ",
        "Three ",
        "Four ",
        "Five ",
        "Six ",
        "Seven ",
        "Eight ",
        "Nine ",
        "Ten ",
        "Eleven ",
        "Twelve ",
        "Thirteen ",
        "Fourteen ",
        "Fifteen ",
        "Sixteen ",
        "Seventeen ",
        "Eighteen ",
        "Nineteen "
      ],
      b: [
        "",
        "",
        "Twenty",
        "Thirty",
        "Fourty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety"
      ]
    };
  },

  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      property: state => state.dropdown.property_arr,
      food_partner_account_bkng_columns: state => state.booking.food_partner_account_bkng_columns,
      foodItem_bkng_columns: state => state.booking.foodItem_bkng_columns
    }),

    ...mapGetters("booking", ["foodPartner_bkng_accounts_rows"])
  },
  mounted() {
    this.$store.dispatch("booking/guestFoodBookingAccountData");
  },
  meta() {
    return {
      title: this.title
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },

    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhfpFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },
    // ...mapActions("booking", ["getBookingDetails"]),

    viewDataItem(item) {
      this.foodIndex = this.data.indexOf(item);
      this.bookingFoodItem = Object.assign({}, item);
      this.bookingDataDialog = true;
      this.bookingFoodPrice.final_price_amount_in_words = this.inWords(
        item.final_price_amount
      );
    },
    inWords(num) {
      if ((num = num.toString()).length > 9) return "overflow";
      let n = ("000000000" + num)
        .substr(-9)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return;
      var str = "";
      str +=
        n[1] != 0
          ? (this.a[Number(n[1])] || this.b[n[1][0]] + " " + this.a[n[1][1]]) +
            "Crore "
          : "";
      str +=
        n[2] != 0
          ? (this.a[Number(n[2])] || this.b[n[2][0]] + " " + this.a[n[2][1]]) +
            "Lakh "
          : "";
      str +=
        n[3] != 0
          ? (this.a[Number(n[3])] || this.b[n[3][0]] + " " + this.a[n[3][1]]) +
            "Thousand "
          : "";
      str +=
        n[4] != 0
          ? (this.a[Number(n[4])] || this.b[n[4][0]] + " " + this.a[n[4][1]]) +
            "Hundred "
          : "";
      str +=
        n[5] != 0
          ? (str != "" ? "and " : "") +
            (this.a[Number(n[5])] || this.b[n[5][0]] + " " + this.a[n[5][1]]) +
            "Only "
          : "";
      return str;
    },
    exportTable() {
      // naive encoding to csv format
      const content = [
        this.food_partner_account_bkng_columns.map(col => wrapCsvValue(col.label))
      ]
        .concat(
          this.foodPartner_bkng_accounts_rows.map(row =>
            this.food_partner_account_bkng_columns
              .map(col =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("users-export.csv", content, "text/csv");

      if (status !== true) {
        $q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
      }
    }
  }
};
</script>
