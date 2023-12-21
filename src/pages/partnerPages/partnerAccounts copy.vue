<template>
  <div>
    <q-page style="padding-top: 100px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
        <q-table
          style="font-family: verdana"
          :title="title"
          :data="partner_bookings_account_rows"
          :columns="partner_accounts_bookings_columns"
          :pagination.sync="pagination1"
          dense
          separator="cell"
          row-key="sno"
          :grid="mode === 'grid'"
          color="green"
          :hide-header="mode === 'grid'"
          :selected.sync="selected"
        >
      <!-- <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.partner_accounts_bookings_columns"
            :key="col.property_name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
      </template> -->

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
                Accommodation Booking Details
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
                  <q-icon name="manage_accounts" color="black" size="1.5em" style="padding-right: 10px"/>
                  Booking Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
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
                        : {{ bookingItem.booking_order_id }}
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
                        : {{ bookingItem.property_name }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Property Type
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.property_type }}
                      </div>
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
                        {{ moment(bookingItem.check_in).format("Do MMM YYYY") }}
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
                          moment(bookingItem.check_out).format("Do MMM YYYY")
                        }}
                      </div>
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
                        : {{ bookingItem.guest_count }}
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
                        : {{ bookingItem.phone_no }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Room Type
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.room_type }}
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
                        : {{ bookingItem.no_of_days }} Days
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
                  <div style="height: 250px">
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
                        Room charges
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                        {{
                          Math.round(
                            bookingItem.room_price / bookingItem.no_of_days
                          )
                        }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        charges per {{ bookingItem.no_of_days }} Days
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.room_price }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Discount (%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.discount }}
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
                        : {{ bookingItem.discount_price }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Mh Offer
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.mh_offer_name }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        MH offer Price
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.mh_offer_price }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        GST (%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.gst_percentage }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        GST Amount
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.gst_amount }}
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
                        : {{ bookingItem.total_price }}
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
                  Partner Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
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
                        Partner Name
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.partner_name }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        Sub Partner Name
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        : {{ bookingItem.sub_partner_name }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        Property Type
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        :
                        <q-btn
                          class="text-bold"
                          label="view"
                          color="secondary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocument(
                              bookingItem.hotel_image,
                              'Property Image3'
                            )
                          "
                        />
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        Check In
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        :
                        <q-btn
                          class="text-bold"
                          label="view"
                          color="secondary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocument(
                              bookingItem.room_image1,
                              'Property Image3'
                            )
                          "
                        />
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        Check Out
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        :
                        <q-btn
                          class="text-bold"
                          label="view"
                          color="secondary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocument(
                              bookingItem.room_image2,
                              'Property Image3'
                            )
                          "
                        />
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        Guest Count
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="
                          font-family: verdana;
                          font-size: 12px;
                          padding-top: 10px;
                        "
                      >
                        :
                        <q-btn
                          class="text-bold"
                          label="view"
                          color="secondary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocument(
                              bookingItem.room_image3,
                              'Property Image3'
                            )
                          "
                        />
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <q-resize-observer />
            
          </div>
          <div class="row q-col-gutter-sm" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table
                style="font-family: verdana"
                title="Guest Details"
                :data="bookingItem.guestData"
                :columns="guest_book_columns"
                dense
                separator="cell"
                row-key="sno"
                hide-bottom
                hide-pagination
              >
              </q-table>
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
         Accommodation Partner Bookings
        </q-toolbar-title>
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
      url: "",
      visible: false,
      showPanDoc: false,
      small: false,
      columns: "",
      data: [],
      bookingIndex: -1,
      subPropertyView: false,
      bookingItem: {},
      maximizedToggle: true,
      bookingDataDialog: false,
      bookingDialog: false,
      title: "Accommodation Booking Details for Customer",
      mode: "list",
      filter: "",
      addDataDialog: false,
      statesList: [],
      propertyDetails: {
        account_id: "",
        partner_id: "",
      },
      pagination1: {
        rowsPerPage: 14,
      },
    };
  },

  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      property: (state) => state.dropdown.property_arr,
      partner_accounts_bookings_columns: (state) =>
        state.booking.partner_accounts_bookings_columns,
      guest_book_columns: (state) => state.booking.guest_book_columns,
    }),

    ...mapGetters("booking", ["partner_bookings_account_rows"]),
  },
  mounted() {
    this.$store.dispatch("booking/guestBookingAccountData");
  },
  meta() {
    return {
      title: this.title,
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhapFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },
    ...mapActions("booking", ["getBookingDetails"]),
    // ...mapActions("booking", ["guestBookingData"]),

    viewDataItem(item) {
      this.bookingIndex = this.data.indexOf(item);
      this.bookingItem = Object.assign({}, item);
      // console.log("JJKK", this.bookingItem);
      this.bookingDataDialog = true;
    },

    openBookingDialog() {
      this.propertyDetails.partner_id = this.bookingItem.partner_id;
      this.propertyDetails.account_id = this.bookingItem.account_id;
      this.bookingDialog = true;
    },
  },
};
</script>
