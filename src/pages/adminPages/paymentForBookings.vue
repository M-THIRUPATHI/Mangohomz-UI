<template>
  <div>
    <q-page style="padding-top: 120px" class="q-pa-md">
      <subHeaderForAdmin/>
      <div class="q-pa-md" style="padding-top: 20px">
        <!-- Chip Code Start -->
        <!-- <div class="col-12" style="margin-right: 400px">
          <div class="q-pa-md">
            <q-chip square clickable @click="getClickableAllBooking('ALL')">
              <q-avatar color="primary" text-color="white">{{
                this.admin_booking_status_count.length == 0
                  ? "0"
                  : parseInt(this.admin_booking_status_count[0].bcount) +
                    parseInt(this.admin_booking_status_count[0].cancelcount)
              }}</q-avatar>
              All
            </q-chip>
            <q-chip
              square
              clickable
              @click="
                getadminBookingStatusCount('Booked');
                getClickableAllBooking('Booked');
              "
            >
              <q-avatar color="secondary" text-color="white">{{
                this.admin_booking_status_count.length == 0
                  ? "0"
                  : this.admin_booking_status_count[0].bcount
              }}</q-avatar>
              Booked
            </q-chip>

            <q-chip
              square
              clickable
              @click="
                getadminBookingStatusCount('Cancelled'),
                  getClickableAllBooking('Cancelled')
              "
            >
              <q-avatar color="red" text-color="white">{{
                this.admin_booking_status_count.length == 0
                  ? "0"
                  : this.admin_booking_status_count[0].cancelcount
              }}</q-avatar>
              Cancelled
            </q-chip>
          </div>
        </div> -->
        <!-- Chip Code End -->
        <q-table
          style="font-family: verdana"
          :title="title"
          :data="booking_displayAll_rows"
          :columns="admin_bookings_columns"
          dense
          :filter="filter"
          :rows-per-page-options="[100, 200, 300, 0]"
          separator="cell"
          row-key="sno"
          :grid="mode === 'grid'"
          color="green"
          :hide-header="mode === 'grid'"
        >
          <template v-slot:body-cell-check_in="props">
            <q-td :props="props">
              {{ moment(props.row.check_in).format("Do MMM YYYY") }}
            </q-td>
          </template>

          <template v-slot:top-right="props">
            <div
              class="AccomBkgTbl"
              style="display: flex; align-items: center; margin-top: 10px"
            >
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
            </div>
            <q-btn
              dense
              flat
              icon="mdi-folder-refresh-outline"
              v-close-popup
              @click="reloadPage"
            >
              <q-tooltip class="bg-white text-primary">Refresh</q-tooltip>
            </q-btn>

            <q-btn
              flat
              round
              dense
              :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="props.toggleFullscreen"
              v-if="mode === 'list'"
            >
              <q-tooltip :difiltersable="$q.platform.is.mobile" v-close-popup
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
            <download-excel
              v-if="booking_displayAll_rows.length != 0"
              :data="booking_displayAll_rows"
              :fields="json_fields"
              :header="headerValue"
              worksheet="Payments For Bookings"
              :name="`${excel_date}_Payments For Bookings .xls`"
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
          <template v-slot:body-cell-check_out="props">
            <q-td :props="props">
              {{ moment(props.row.check_out).format("Do MMM YYYY") }}
            </q-td>
          </template>
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn
                color="primary"
                @click="viewDataItem(props.row)"
                label="Payment"
                no-caps
                size="sm"
                ><q-tooltip :disable="$q.platform.is.mobile"
                  >View</q-tooltip
                ></q-btn
              >
            </q-td>
          </template>
          <!-- <template v-slot:top-right="props">
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
          </template>  -->
          <template v-slot:bottom-row>
            <q-tr>
              <q-td colspan="10" style="text-align: right"> Total </q-td>
              <q-td style="text-align: center">
                {{ total_nights }}
              </q-td>
              <q-td style="text-align: center">
                {{ total_rooms }}
              </q-td>
              <q-td style="text-align: center">
                {{ total_guest }}
              </q-td>
              <q-td style="text-align: center">
                {{ total_booking_amount }}
              </q-td>
            </q-tr>
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
              <div style="font-family: verdana">Payments For Bookings</div>
              <q-space />
              <q-chip
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                style="font-family: verdana"
                class="text-weight-bold"
                @click="OpenAddPaymentDialog()"
              >
                Add Payment Details
              </q-chip>
              <q-btn dense flat icon="close" @click="closeBookingDialog()">
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
                  <q-icon
                    name="mdi-account-box"
                    color="black"
                    size="1.5em"
                    style="padding-right: 10px"
                  />
                  Bookings Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 310px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                        Booking Date
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.booked_date }}
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
                        Room Category
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.room_category }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Total No Of Rooms
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.room_booked_count }}
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
                        Check In
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.check_in }}
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
                        : {{ bookingItem.check_out }}
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
                        No.of Nights
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.no_of_days }}
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
                  <q-icon
                    name="mdi-sale"
                    color="black"
                    size="1.2em"
                    style="padding-right: 10px"
                  />
                  Price Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 310px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                        {{ bookingItem.room_price }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Partner Offer
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.partner_offer }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Base Price
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.base_price }}
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Early Bird Offer
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
                        Price After Discount
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.price_after_discount }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Taxes
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
                  <q-icon
                    name="manage_accounts"
                    color="black"
                    size="1.5em"
                    style="padding-right: 10px"
                  />
                  Partner Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 310px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Property Mobile Number
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.property_phone }}
                        <br />
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Property Email Id
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.property_email }}
                        <br />
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Account Number:
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                        {{
                          bookingItem &&
                          bookingItem.bankDetails &&
                          bookingItem.bankDetails.bankAccountNo
                        }}
                        <br />
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Bank Name:
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                        {{
                          bookingItem &&
                          bookingItem.bankDetails &&
                          bookingItem.bankDetails.bankName
                        }}
                        <br />
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Branch Name:
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                        {{
                          bookingItem &&
                          bookingItem.bankDetails &&
                          bookingItem.bankDetails.branchName
                        }}
                        <br />
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        IFSC Code:
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                        {{
                          bookingItem &&
                          bookingItem.bankDetails &&
                          bookingItem.bankDetails.ifsc
                        }}
                        <br />
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <q-resize-observer />
          </div>

          <div class="q-pa-md" style="font-family: verdana; font-size: 15px">
            <q-card class="text-black">
              <q-tabs
                v-model="tab"
                dense
                active-color="primary"
                indicator-color="primary"
                align="left"
                inline-label
                switch-indicator
              >
                <q-tab
                  class="secondary"
                  icon="mdi-currency-inr"
                  name="partnerpay"
                  label="Partner Pay"
                />
                <q-tab
                  class="secondary"
                  icon="mdi-currency-inr"
                  name="travel"
                  label="Agent Pay"
                />
              </q-tabs>
              <q-separator />
              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="partnerpay">
                  <div class="q-pa-md" style="padding-top: 10px">
                    <q-card class="text-black">
                      <q-bar
                        flat
                        class="ma-02 text-bold"
                        style="
                          max-height: 20vh;
                          font-family: verdana;
                          font-size: 15px;
                        "
                      >
                        <q-icon
                          name="mdi-account-multiple-plus"
                          color="black"
                          size="1.5em"
                          style="padding-right: 10px"
                        />
                        Payment Details
                      </q-bar>
                      <!-- <q-table
                        style="font-family: verdana"
                        :data="bookingItem.guestData"
                        :columns="guest_book_columns"
                        dense
                        separator="cell"
                        row-key="sno"
                        hide-bottom
                        hide-pagination
                      >
                      </q-table> -->
                    </q-card>
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </q-layout>
      </q-dialog>

      <!--Payment Details Form Start-->

      <div class="q-pa-sm q-gutter-sm">
        <q-dialog v-model="paymentForBookinsDialog" persistent>
          <q-layout
            view="lhh LpR lff"
            style="height: 450px"
            container
            class="bg-white"
          >
            <q-card>
              <q-bar class="bg-green-7 text-white">
                <div>Payment For Booking</div>
                <q-space />
                <q-btn round color="red" icon="close" v-close-popup size="xs">
                  <q-tooltip>Close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card-section>
                <q-form ref="paymentform">
                  <div class="row q-gutter-sm">
                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.partner_name"
                      readonly
                      label="Property Name *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Partner Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>

                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.bankAccountNo"
                      label="Bank A/C No *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      readonly
                      :rules="[required('Bank A/C no'), number()]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-bank" color="secondary" /> </template
                    ></q-input>

                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.branchName"
                      label="Branch Name *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      readonly
                      :rules="[required('Branch Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-bank" color="secondary" /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.ifsc"
                      label="IFSC/SWIFT Code *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      readonly
                      :rules="[required('IFSC code')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-bank" color="secondary" /> </template
                    ></q-input>

                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.reference_number"
                      label="Reference Number *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Reference Number')]"
                    >
                      <!-- <template v-slot:prepend>
                        <q-icon
                          name="mdi-numbers"
                          color="secondary"
                        /> </template
                    > -->
                    </q-input>

                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.from_accounts"
                      label="From Account *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Reference Number')]"
                    >
                      <!-- <template v-slot:prepend>
                        <q-icon
                          name="mdi-numbers"
                          color="secondary"
                        /> </template
                    > -->
                    </q-input>

                    <q-select
                      dense
                      outlined
                      use-input
                      hide-selected
                      :options="typeOfPayments"
                      fill-input
                      style="width: 250px"
                      options-dense
                      input-debounce="0"
                      v-model="paymentPayForm.type_of_payment"
                      label="Type Of Payment *"
                      label-color="black"
                      :rules="[required('Type Of Payment')]"
                    >
                      <!-- <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template> -->
                    </q-select>

                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.transfer_amount"
                      label="Transfer Amounts *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Transfer Amounts '), number()]"
                    >
                    </q-input>

                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.transfer_description"
                      label="Transfer Description *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Transfer Description')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-comment"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="paymentPayForm.mode_of_communication"
                      label="Mode Of Communication *"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Mode Of Communication')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-google-circles-communities"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-form>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn
                  size="sm"
                  label="Cancel"
                  color="primary"
                  class="text-weight-bold"
                  @click="closepaymentForBookinsDialog"
                ></q-btn>
                <q-btn
                  size="sm"
                  label="Submit"
                  color="primary"
                  class="text-weight-bold"
                  @click="savePaymentPayForm()"
                ></q-btn>
              </q-card-actions>
            </q-card>
          </q-layout>
        </q-dialog>
      </div>
      <!--Payment Details Form End-->

      <q-dialog
        v-model="foodBookingDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpr fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="mdi-food-fork-drink"></q-icon>
              <div style="font-family: verdana">Food Payments For Bookings</div>
              <q-space />

              <q-btn dense flat icon="close" @click="closeFoodBookingDialog()">
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div
            class="q-pa-md"
            style="font-family: verdana; font-size: 15px; padding-top: 30px"
          >
            <div class="row q-col-gutter-sm q-py-sm">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                    <q-icon
                      name="mdi-account-box"
                      color="black"
                      size="1.5em"
                      style="padding-right: 10px"
                    />
                    Basic Details
                  </q-bar>
                  <q-card-section class="q-pa-none">
                    <div style="height: 250px">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                          : {{ foodBookingItem.food_booking_orderid }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Food Partner
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ foodBookingItem.food_partner_name }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Food Sub Partner
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ foodBookingItem.food_partner_sub_name }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Food Booking Type
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ foodBookingItem.food_booking_type }}
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
                          :
                          {{ foodBookingItem.mobile_number }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Food Booked Date
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{
                            moment(foodBookingItem.food_booking_date).format(
                              "Do MMM YYYY"
                            )
                          }}
                        </div>

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
                          :
                          {{ foodBookingItem.total_quantity_booked }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                    <q-icon
                      name="mdi-sale"
                      color="black"
                      size="1.2em"
                      style="padding-right: 10px"
                    />
                    Price Details
                  </q-bar>
                  <q-card-section class="q-pa-none">
                    <div style="height: 250px">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                          :
                          {{ Math.round(foodBookingItem.food_charges) }}
                        </div>
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
                          : {{ foodBookingItem.discount }}
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
                          : {{ foodBookingItem.discount_price }}
                        </div> -->
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
                          : {{ foodBookingItem.mh_offer_coupon }}
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
                          : {{ foodBookingItem.mh_offer_price }}
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
                          : {{ foodBookingItem.gst_percentage }}
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
                          : {{ foodBookingItem.gst_on_base_price }}
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
                          : {{ foodBookingItem.final_price_amount }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <q-resize-observer />
            </div>

            <q-card class="text-black">
              <q-bar
                flat
                class="ma-02 text-bold"
                style="max-height: 20vh; font-family: verdana; font-size: 15px"
              >
                <q-icon
                  name="mdi-food-fork-drink"
                  color="black"
                  size="1.5em"
                  style="padding-right: 10px"
                />
                Food Details
              </q-bar>
              <q-table
                style="font-family: verdana"
                :data="foodBookingItem.food_items"
                :columns="guest_food_items_book_columns"
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
                      color="primary"
                      size="sm"
                      icon-right="mdi-eye"
                      @click="
                        showDocument(props.row.food_image, 'Food Image', 'food')
                      "
                    />
                  </q-td>
                </template>
              </q-table>
            </q-card>
          </div>
        </q-layout>
      </q-dialog>

      <!-- EQUIPMENT DETAILS -->

      <q-dialog
        v-model="equipmentBookingDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpr fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="mdi-medical-bag"></q-icon>
              <div style="font-family: verdana">
                Equipment Payments For Bookings
              </div>
              <q-space />

              <q-btn
                dense
                flat
                icon="close"
                @click="closeEquipmentBookingDialog()"
              >
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div
            class="q-pa-md"
            style="font-family: verdana; font-size: 15px; padding-top: 30px"
          >
            <div class="row q-col-gutter-sm q-py-sm">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                    <q-icon
                      name="mdi-account-box"
                      color="black"
                      size="1.5em"
                      style="padding-right: 10px"
                    />
                    Basic Details
                  </q-bar>
                  <q-card-section class="q-pa-none">
                    <div style="height: 250px">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                          :
                          {{ medicalBookingItem.medical_booking_orderid }}
                        </div>
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
                          :
                          {{ medicalBookingItem.equipment_partner_name }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Sub Partner Name
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ medicalBookingItem.equipment_partner_sub_name }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Equipment Type
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ medicalBookingItem.eqp_booking_type }}
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
                          :
                          {{ medicalBookingItem.mobile_number }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Booked Date
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{
                            moment(medicalBookingItem.eqp_booking_date).format(
                              "Do MMM YYYY"
                            )
                          }}
                        </div>

                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Medical Items Count
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ medicalBookingItem.medical_item_count }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                    <q-icon
                      name="mdi-sale"
                      color="black"
                      size="1.2em"
                      style="padding-right: 10px"
                    />
                    Price Details
                  </q-bar>
                  <q-card-section class="q-pa-none">
                    <div style="height: 250px">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                      >
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Medical charges
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ Math.round(medicalBookingItem.medical_charges) }}
                        </div>
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
                        : {{ medicalBookingItem.discount }}
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
                        : {{ medicalBookingItem.discount_price }}
                      </div> -->
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
                          : {{ medicalBookingItem.mh_offer_coupon }}
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
                          : {{ medicalBookingItem.mh_offer_price }}
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
                          : {{ medicalBookingItem.gst_percentage }}
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
                          : {{ medicalBookingItem.gst_on_base_price }}
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
                          :
                          {{ medicalBookingItem.final_price_amount }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <q-resize-observer />
            </div>

            <q-card class="text-black">
              <q-bar
                flat
                class="ma-02 text-bold"
                style="max-height: 20vh; font-family: verdana; font-size: 15px"
              >
                <q-icon
                  name="mdi-medical-bag"
                  color="black"
                  size="1.5em"
                  style="padding-right: 10px"
                />
                Equipment Details
              </q-bar>
              <q-table
                style="font-family: verdana"
                :data="medicalBookingItem.equipment_items"
                :columns="guest_equipment_items_book_columns"
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
                      color="primary"
                      size="sm"
                      icon-right="mdi-eye"
                      @click="
                        showDocument(
                          props.row.equipment_image,
                          'Equipment Image',
                          'medical'
                        )
                      "
                    />
                  </q-td>
                </template>
              </q-table>
            </q-card>
          </div>
        </q-layout>
      </q-dialog>

      <!-- TRAVEL DETAILS -->

      <q-dialog
        v-model="travelBookingDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpr fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="mdi-car"></q-icon>
              <div style="font-family: verdana">
                Travel Payments For Bookings
              </div>
              <q-space />

              <q-btn
                dense
                flat
                icon="close"
                @click="closeTravelBookingDialog()"
              >
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div
            class="q-pa-md"
            style="font-family: verdana; font-size: 15px; padding-top: 30px"
          >
            <div class="row q-col-gutter-sm q-py-sm">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                    <q-icon
                      name="mdi-account-box"
                      color="black"
                      size="1.5em"
                      style="padding-right: 10px"
                    />
                    Basic Details
                  </q-bar>
                  <q-card-section class="q-pa-none">
                    <div style="height: 250px">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                      >
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Travel Booking Id
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ travelBookingItem.travel_booking_orderid }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Travel Partner
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ travelBookingItem.travel_partner_name }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Travel Sub Partner
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ travelBookingItem.travel_partner_sub_name }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Origin
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ travelBookingItem.origin }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Destination
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ travelBookingItem.destination }}
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
                          :
                          {{ travelBookingItem.mobile_number }}
                        </div>
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Book Date
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{
                            moment(travelBookingItem.booked_date).format(
                              "Do MMM YYYY"
                            )
                          }}
                        </div>

                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Book Time
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ travelBookingItem.booking_time }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                    <q-icon
                      name="mdi-sale"
                      color="black"
                      size="1.2em"
                      style="padding-right: 10px"
                    />
                    Price Details
                  </q-bar>
                  <q-card-section class="q-pa-none">
                    <div style="height: 250px">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                      >
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Travel charges
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ Math.round(travelBookingItem.travel_charges) }}
                        </div>
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
                        : {{ travelBookingItem.discount }}
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
                        : {{ travelBookingItem.discount_price }}
                      </div> -->
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
                          : {{ travelBookingItem.mh_offer_coupon }}
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
                          : {{ travelBookingItem.mh_offer_price }}
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
                          : {{ travelBookingItem.gst_percentage }}
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
                          : {{ travelBookingItem.gst_on_base_price }}
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
                          : {{ travelBookingItem.payable_amount }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <q-resize-observer />
            </div>

            <q-card class="text-black">
              <q-bar
                flat
                class="ma-02 text-bold"
                style="max-height: 20vh; font-family: verdana; font-size: 15px"
              >
                <q-icon
                  name="mdi-car"
                  color="black"
                  size="1.5em"
                  style="padding-right: 10px"
                />
                Travel Details
              </q-bar>

              <q-table
                style="font-family: verdana"
                :data="travelBookingItem.travel_items"
                :columns="guest_travel_items_book_columns"
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
                      color="primary"
                      size="sm"
                      icon-right="mdi-eye"
                      @click="
                        showDocument(
                          props.row.vehicle_image,
                          'Vehicle Image',
                          'travel'
                        )
                      "
                    />
                  </q-td>
                </template>
              </q-table>
            </q-card>
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

  </div>
</template>

<script>
// import { METHODS } from 'http';
import { mapActions, mapGetters, mapState } from "vuex";
import moment from "moment";
import filepaths from "../../helpers/filepath";
import validations from "../../helpers/validations";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      ...validations,
      tab: "partnerpay",
      moment: moment,
      dialogTitle: "",
      url: "",
      visible: false,
      showPanDoc: false,
      small: false,
      columns: "",
      filter: "",
      data: [],
      booking_count_status: false,
      bookingIndex: -1,
      subPropertyView: false,
      bookingItem: {},
      foodBookingItem: {
        food_booking_orderid: "",
        food_partner_name: "",
        food_partner_sub_name: "",
        food_booking_type: "",
        mobile_number: "",
        food_booking_date: "",
        total_quantity_booked: "",
        food_charges: "",
        discount: "",
        discount_price: "",
        mh_offer_coupon: "",
        mh_offer_price: "",
        gst_percentage: "",
        gst_on_base_price: "",
        final_price_amount: "",
        food_items: "",
      },
      travelBookingItem: {
        travel_booking_orderid: "",
        travel_partner_name: "",
        travel_partner_sub_name: "",
        destination: "",
        origin: "",
        mobile_number: "",
        booked_date: "",
        booking_time: "",
        travel_charges: "",
        discount: "",
        discount_price: "",
        mh_offer_coupon: "",
        mh_offer_price: "",
        gst_percentage: "",
        gst_on_base_price: "",
        payable_amount: "",
        travel_items: "",
      },
      medicalBookingItem: {
        medical_booking_orderid: "",
        equipment_partner_name: "",
        equipment_partner_sub_name: "",
        eqp_booking_type: "",
        mobile_number: "",
        eqp_booking_date: "",
        medical_item_count: "",
        medical_charges: "",
        discount: "",
        discount_price: "",
        mh_offer_coupon: "",
        mh_offer_price: "",
        gst_percentage: "",
        gst_on_base_price: "",
        final_price_amount: "",
        equipment_items: "",
      },
      maximizedToggle: true,
      bookingDataDialog: false,
      bookingDialog: false,
      foodBookingDialog: false,
      equipmentBookingDialog: false,
      travelBookingDialog: false,
      paymentForBookinsDialog: false,
      title: "Payments For Bookings",
      mode: "list",

      addDataDialog: false,
      statesList: [],
      propertyDetails: {
        account_id: "",
        partner_id: "",
      },

      paymentPayForm: {
        partner_name: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        reference_number: "",
        from_accounts: "",
        type_of_payment: "",
        transfer_amount: "",
        transfer_description: "",
        mode_of_communication: "",
      },
      typeOfPayments: [
        "Advance",
        "Interring Payment",
        "Full & Final Settlement",
      ],
      headerValue: "Payments For Bookings",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        "Sr.no": "index",
        "Booking Order ID": "booking_order_id",

        City: "city",
        "Near Hospital": "near_hospital_name",
        "Hotel Name": "property_name",
        "Booked Date": "booked_date",
        "Check In": "check_in",
        "Check Out": "check_out",
        Nights: "no_of_days",
        Rooms: "room_booked_count",
        Guests: "guest_count",
        "Property City ": "property_city_name",
        "Account Id": "account_id",
        "Property Address": "address",
        "Alternate No": "alternate_no",
        "Base Price": "base_price",
        "Booking Id": "booking_id",
        "Booking Status": "booking_status",
        "Cgst Amount": "cgst_amount",
        "Cgst Percentage": "cgst_percentage",
        "Country Code": "country_code",
        "Country Name": "country_name",
        Discount: "discount",
        "Discount Price": "discount_price",
        "Email Id": "email_id",
        Facilities: "facilities",
        "Gst Amount": "gst_amount",
        "Gst Percentage": "gst_percentage",
        "Guest Count": "guest_count",
        "Hotel Txn Id": "hotel_txn_id",
        "Invoice Number": "invoice_number",
        "Mh Offer Name": "mh_offer_name",
        "Mh Offer Price": "mh_offer_price",

        "No of days": "no_of_days",
        "Partner Id": "partner_id",
        "Partner Offer": "partner_offer",
        "Partner Offer Percentage": "partner_offer_percentage",
        "Partner Offer Percentage": "partner_offer_percentage",
        "Phone No": "phone_no",
        Pincode: "pincode",
        "Price After Discount": "price_after_discount",
        "Primary No": "primary_no",
        "Property City Name": "property_city_name",
        "Property Emails": "property_email",
        "Property Phone No": "property_phone",
        "Property State": "property_state_name",
        "RozarPay Order Id": "rz_order_id",
        "RozarPay Payment Id": "rz_payment_id",
        "Room Price": "room_price",
        "Total Amount": "total_price",
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
      total_nights() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.no_of_days),
          0
        );
      },
      total_guest() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.guest_count),
          0
        );
      },
      total_rooms() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.room_booked_count),
          0
        );
      },
      total_booking_amount() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.total_price),
          0
        );
      },
      property: (state) => state.dropdown.property_arr,
      admin_bookings_columns: (state) => state.booking.admin_bookings_columns,
      guest_book_columns: (state) => state.booking.guest_book_columns,
      guest_food_book_columns: (state) => state.booking.guest_food_book_columns,
      guest_equipment_book_columns: (state) =>
        state.booking.guest_equipment_book_columns,
      guest_travel_book_columns: (state) =>
        state.booking.guest_travel_book_columns,
      guest_food_items_book_columns: (state) =>
        state.booking.guest_food_items_book_columns,
      guest_equipment_items_book_columns: (state) =>
        state.booking.guest_equipment_items_book_columns,
      guest_travel_items_book_columns: (state) =>
        state.booking.guest_travel_items_book_columns,
      admin_booking_status_count: (state) =>
        state.adminDashboard.admin_booking_status_count,
      booking_displayAll_rows: (state) =>
        state.adminDashboard.booking_displayAll_rows,
    }),
    //...mapGetters("booking", ["booking_displayAll_rows"]),
    ...mapGetters("adminDashboard", ["admin_booking_status_count"]),
    ...mapGetters("adminDashboard", ["booking_displayAll_rows"]),
  },
  mounted() {
    this.$store.dispatch("booking/guestBookingDataForAdminLogin");
    this.$store.dispatch("adminDashboard/getadminBookingStatusCount");
    this.$store.dispatch("adminDashboard/getBookingAllDisplayForAdmin");
  },
  meta() {
    return {
      title: this.title,
    };
  },
  methods: {
    ...mapActions("adminDashboard", ["getadminBookingStatusCount"]),
    ...mapActions("adminDashboard", ["getBookingAllDisplayForAdmin"]),
    ...mapActions("adminDashboard", ["paymentForPartnerSaving"]),

    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    showDocument(file, dialogName, partner_type) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        if (partner_type == "property") {
          this.url = filepaths.mhapFilePath + file;
        } else if (partner_type == "food") {
          this.url = filepaths.mhfpFilePath + file;
        } else if (partner_type == "travel") {
          this.url = filepaths.mhtpFilePath + file;
        } else if (partner_type == "medical") {
          this.url = filepaths.mhepFilePath + file;
        }

        this.visible = false;
      }, 2000);
      this.small = true;
    },

    viewDataItem(item) {
      this.bookingItem = {};
      this.foodBookingItem = {};
      this.travelBookingItem = {};
      this.medicalBookingItem = {};
      this.bookingIndex = this.data.indexOf(item);
      this.bookingItem = Object.assign({}, item);

      this.bookingDataDialog = true;
    },

    viewFoodItemData(item) {
      this.foodBookingItem = {};
      this.foodBookingItem = Object.assign({}, item);

      this.foodBookingDialog = true;

      this.foodBookingItem.food_booking_orderid = item.food_booking_orderid;
      this.foodBookingItem.food_booking_type = item.food_booking_type;
      this.foodBookingItem.mobile_number = item.mobile_number;
      this.foodBookingItem.food_booking_date = item.food_booking_date;
      this.foodBookingItem.total_quantity_booked = item.food_items.length;
      this.foodBookingItem.food_charges = item.food_charges;
      this.foodBookingItem.discount = item.discount;
      this.foodBookingItem.discount_price = item.discount_price;
      this.foodBookingItem.mh_offer_coupon = item.mh_offer_coupon;
      this.foodBookingItem.mh_offer_price = item.mh_offer_price;
      this.foodBookingItem.gst_percentage = item.gst_percentage;
      this.foodBookingItem.gst_on_base_price = item.gst_on_base_price;
      this.foodBookingItem.final_price_amount = item.final_price_amount;
      this.foodBookingItem.food_items = item.food_items;
      this.foodBookingItem.food_partner_name = item.foodPartner_name;
      this.foodBookingItem.food_partner_sub_name = item.foodPartner_sub_name;

      this.bookingDataDialog = true;
    },
    viewMedicalItemData(item) {
      this.medicalBookingItem = {};
      this.medicalBookingItem = Object.assign({}, item);

      this.equipmentBookingDialog = true;

      this.medicalBookingItem.medical_booking_orderid =
        item.medical_booking_orderid;
      this.medicalBookingItem.eqp_booking_type = item.eqp_booking_type;
      this.medicalBookingItem.mobile_number = item.mobile_number;
      this.medicalBookingItem.eqp_booking_date = item.eqp_booking_date;
      this.medicalBookingItem.medical_item_count = item.equipment_items.length;
      this.medicalBookingItem.medical_charges = item.medical_charges;
      this.medicalBookingItem.discount = item.discount;
      this.medicalBookingItem.discount_price = item.discount_price;
      this.medicalBookingItem.mh_offer_coupon = item.mh_offer_coupon;
      this.medicalBookingItem.mh_offer_price = item.mh_offer_price;
      this.medicalBookingItem.gst_percentage = item.gst_percentage;
      this.medicalBookingItem.gst_on_base_price = item.gst_on_base_price;
      this.medicalBookingItem.final_price_amount = item.final_price_amount;
      this.medicalBookingItem.equipment_items = item.equipment_items;
      this.medicalBookingItem.equipment_partner_name = item.equipment_name;
      this.medicalBookingItem.equipment_partner_sub_name =
        item.equipment_sub_name;
    },
    viewTravelItemData(item) {
      this.travelBookingItem = {};
      this.travelBookingItem = Object.assign({}, item);

      this.travelBookingDialog = true;

      this.travelBookingItem.travel_booking_orderid =
        item.travel_booking_orderid;
      this.travelBookingItem.destination = item.booking_destination;
      this.travelBookingItem.origin = item.booking_origin;
      this.travelBookingItem.mobile_number = item.mobile_number;
      this.travelBookingItem.booked_date = item.booked_date;
      this.travelBookingItem.booking_time = item.booking_time;
      this.travelBookingItem.travel_charges = item.travel_charges;
      this.travelBookingItem.discount = item.discount;
      this.travelBookingItem.discount_price = item.discount_price;
      this.travelBookingItem.mh_offer_coupon = item.mh_offer_coupon;
      this.travelBookingItem.mh_offer_price = item.mh_offer_price;
      this.travelBookingItem.gst_percentage = item.gst_percentage;
      this.travelBookingItem.gst_on_base_price = item.gst_on_base_price;
      this.travelBookingItem.payable_amount = item.payable_amount;
      this.travelBookingItem.travel_items = item.travel_items;
      this.travelBookingItem.travel_partner_name = item.travel_name;
      this.travelBookingItem.travel_partner_sub_name = item.transport_sub_name;
    },

    closeBookingDialog() {
      this.bookingDataDialog = false;
      this.tab = "partnerpay";
    },
    closeFoodBookingDialog() {
      this.foodBookingDialog = false;
    },
    closeEquipmentBookingDialog() {
      this.equipmentBookingDialog = false;
    },
    closeTravelBookingDialog() {
      this.travelBookingDialog = false;
    },
    getClickableAllBooking(item) {
      this.getBookingAllDisplayForAdmin(item);
      this.booking_count_status = true;
    },
    OpenAddPaymentDialog() {
      this.paymentPayForm.partner_name = this.bookingItem.property_name;
      this.paymentPayForm.bankAccountNo =
        this.bookingItem.bankDetails.bankAccountNo;
      this.paymentPayForm.bankName = this.bookingItem.bankDetails.bankName;
      this.paymentPayForm.branchName = this.bookingItem.bankDetails.branchName;
      this.paymentPayForm.ifsc = this.bookingItem.bankDetails.ifsc;

      this.paymentForBookinsDialog = true;
    },
    closepaymentForBookinsDialog() {
      this.paymentForBookinsDialog = false;
    },

    savePaymentPayForm() {
      this.$refs.paymentform.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              console.log("uuuuu", this.paymentPayForm);
              const formData = new FormData();

              formData.append(
                "paymentPayForm_details",
                JSON.stringify(this.paymentPayForm)
              );
              this.paymentForPartnerSaving(formData);
              this.paymentForBookinsDialog = false;
              this.paymentPayForm = {};
              this.step = 1;
              //  this.details = false;
            })
            .onCancel(() => {
              this.paymentForBookinsDialog = true;
            });
        }
      });
    },

    async reloadPage() {
      this.$router.go(0);
      window.location.reload();
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
    width: 70vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }

  .AccomBkgTbl {
    width: 70vw !important;
  }
}
</style>
