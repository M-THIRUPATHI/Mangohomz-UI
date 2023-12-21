<template>
  <div>
    <q-page-container style="padding-top: 0px">
      <q-page style="padding-top: 120px" class="q-pa-md">
        <subHeaderForAdmin />
        <div class="q-pa-md" style="padding-top: 0px">
          <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
            <p
              class="q-pa-xs text-left text-bold"
              style="text-align: justify; font-size: 20px; font-family: verdana"
            >
              Accounts Report:
            </p>
            <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              style="margin-right: 20px; width: 250px"
              option-value="property_city_id"
              option-label="property_city_name"
              :options="propertcityOptions"
              v-model="partnerDashboardData.property_city_name"
              label="Select City"
              label-color="black"
              class="col-4 q-mr-sm"
              @input="
                      loadAllPropertBasedOnCities(partnerDashboardData.property_city_name);partnerDashboardData.property_name = '';
                      handleCitySelect();

                    "
              ><template v-slot:prepend>
                <q-icon
                  name="mdi-city"
                  color="secondary"
                /> </template
            ></q-select>
            <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              style="margin-right: 20px; width: 250px"
              option-value="hotel_txn_id"
              option-label="property_name"
              :options="propertyselectOptions"
              v-model="partnerDashboardData.property_name"
              label="Select Property"
              label-color="black"
              class="col-4 q-mr-sm"

              ><template v-slot:prepend>
                <q-icon
                  name="mdi-home"
                  color="secondary"
                /> </template
            ></q-select>

            <q-input
              dense
              outlined
              debounce="300"
              label="From Date"
              ref="checkFromDate"
              label-color="black"
              clear-icon="close"
              minimal
              @click="$refs.qDateProxyFromDate.show()"
              v-model="accountsDataDateSet.fromDate"
              style="
                width: 175px;
                font-size: 12px;
                margin-top: 15px;
                margin-right: 10px;
              "
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxyFromDate"
                    minimal
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      @input="closeDialog()"
                      minimal
                      mask="YYYY/MM/DD"
                      v-model="accountsDataDateSet.fromDate"
                      :options="optionsFn"
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          minimal
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input
              dense
              outlined
              debounce="300"
              label="To Date"
              ref="checkToDate"
              label-color="black"
              clear-icon="close"
              minimal
              @click="$refs.qDateProxyToDate.show()"
              v-model="accountsDataDateSet.toDate"
              style="
                width: 175px;
                font-size: 12px;
                margin-top: 15px;
                margin-right: 10px;
              "
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxyToDate"
                    minimal
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      @input="closeDialog1()"
                      minimal
                      mask="YYYY/MM/DD"
                      v-model="accountsDataDateSet.toDate"
                      :options="optionsFn2"
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          minimal
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-btn
              style="margin-right: 10px"
              @click="ShowDateWiseAccountsDetails()"
              color="primary"
              label="Submit"
              class="q-ml-md"
              no-caps
            />
          </div>

          <div v-if="!isDateRangeActive">
            <q-table
              style="font-family: verdana"
              :data="center_accounts_bookings_rows"
              :columns="center_accounts_bookings_columns"
              :pagination.sync="pagination1"
              dense
              v-if="center_accounts_bookings_rows.length > 0"
              :filter="filter"
              separator="cell"
              row-key="sno"
              :grid="mode === 'grid'"
              color="green"
              :hide-header="mode === 'grid'"
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

              <template v-slot:bottom-row>
                <q-tr>
                  <q-td colspan="10" style="text-align: right"> Total </q-td>
                  <q-td style="text-align: center">
                    {{ rate }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ MHOfferingper }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ MHOfferAmount }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ ApOfferinPer }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ ApOfferAmount }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ BookingAmountBeforeTax }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ tax }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ BookingAmountAftertax }}
                  </q-td>
                  <td style="text-align: center"></td>
                  <td style="text-align: center"></td>
                  <td style="text-align: center"></td>
                  <q-td style="text-align: center">
                    {{ AmountRefundedtoGuest }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ GrossAmountpayabletoPartnerForCancelledBooking }}
                  </q-td>
                  <td style="text-align: center"></td>
                  <td style="text-align: center"></td>
                  <q-td style="text-align: center">
                    {{ durationOfStay }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ grossAmount }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ discountMh }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ discountPartner }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ netValue }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ tax }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ totalBill }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ TDSAtOnePer }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ GSTtcsAtOnePer }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ GrosspayableToPartners }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ MHCommissionTwentyPerIncludingGST }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ NetPayableToPartner }}
                  </q-td>
                  <!-- <q-td style="text-align: center">
                {{ NetagentCommission }}
              </q-td>
              <q-td style="text-align: center">
                {{ NetFinalIncome }}
              </q-td> -->
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
                  :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="props.toggleFullscreen"
                  v-if="mode === 'list'"
                >
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
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
                  v-if="center_accounts_bookings_rows.length != 0"
                  :data="center_accounts_bookings_rows"
                  :fields="json_fields"
                  :header="headerValue"
                  worksheet="Account Report"
                  :name="`${excel_date}_Account Report .xls`"
                >
                  <q-icon color="primary" name="mdi-file-excel" size="22px" />
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                    >Download Excel
                  </q-tooltip>
                </download-excel>
                <!-- <q-btn
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
              </q-btn> -->
              </template>
            </q-table>
          </div>
          <div class="q-pa-md" style="padding-top: 35px" v-else>
            <q-table
              style="font-family: verdana; padding-top: 5px"

              :data="center_date_wise_accounts_bookings_rows"
              :columns="center_date_wise_accounts_bookings_columns"
              :pagination.sync="pagination1"
              dense
              separator="cell"
              :filter="filter"
              row-key="sno"
              :grid="mode === 'grid'"
              color="green"
              :hide-header="mode === 'grid'"
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

              <template v-slot:bottom-row>
                <q-tr>
                  <q-td colspan="12" style="text-align: right"> Total </q-td>
                  <q-td style="text-align: center">
                    {{ rateondatewise }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ MHOfferingper }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ MHOfferAmount }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ ApOfferinPer }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ ApOfferAmount }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ BookingAmountBeforeTax }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ tax }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ BookingAmountAftertax }}
                  </q-td>
                  <td style="text-align: center"></td>
                  <td style="text-align: center"></td>
                  <td style="text-align: center"></td>
                  <q-td style="text-align: center">
                    {{ AmountRefundedtoGuest }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ GrossAmountpayabletoPartnerForCancelledBooking }}
                  </q-td>
                  <td style="text-align: center"></td>
                  <td style="text-align: center"></td>
                  <q-td style="text-align: center">
                    {{ durationOfStay }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ grossAmount }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ discountMh }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ discountPartner }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ netValue }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ tax }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ totalBill }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ TDSAtOnePer }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ GSTtcsAtOnePer }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ GrosspayableToPartners }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ MHCommissionTwentyPerIncludingGST }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ NetPayableToPartner }}
                  </q-td>
                  <!-- <q-td style="text-align: center">
                {{ NetagentCommission }}
              </q-td>
              <q-td style="text-align: center">
                {{ NetFinalIncome }}
              </q-td> -->
                </q-tr>
              </template>
              <template v-slot:top-right="props">
                <q-input
                  outlined
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                  style="width: 300px"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <div
                  class="AccomBkgTbl"
                  style="display: flex; align-items: center; margin-top: 10px"
                >
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
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
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
                  v-if="center_date_wise_accounts_bookings_rows.length != 0"
                  :data="center_date_wise_accounts_bookings_rows"
                  :fields="json_fields"
                  :header="headerValue"
                  worksheet="Account Report"
                  :name="`${excel_date}_Account Report .xls`"
                >
                  <q-icon color="primary" name="mdi-file-excel" size="22px" />
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                    >Download Excel
                  </q-tooltip>
                </download-excel>
                  <!-- <q-btn
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
                  </q-btn> -->
                </div>
              </template>
            </q-table>
          </div>
        </div>

        <!--Account Dialog Start-->
        <q-dialog
          v-model="accountbookingDataDialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-layout view="Lhh lpr fff" container class="bg-white">
            <q-header class="bg-primary">
              <q-bar class="bg-primary text-white">
                <q-icon name="feed"></q-icon>
                <div style="font-family: verdana">Account Booking Details</div>
                <q-space />

                <q-btn
                  dense
                  flat
                  icon="close"
                  @click="closeAcoountBookingDialog()"
                >
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>
            </q-header>

            <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card class="q-ma-xs text-black accd">
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
                    Booking Details
                  </q-bar>
                  <q-card-section class="q-pa-none">
                    <div style="height: 340px">
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
                          Guest Name
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.guest_name }}
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
                          class="col-5 text-left text-black borderless"
                          style="font-family: verdana; font-size: 12px"
                        >
                          No.of Nights
                        </div>
                        <div
                          class="col-7 text-left text-grey borderless"
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
                <q-card class="q-ma-xs text-black accd">
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
                    <div style="height: 340px">
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
                        MH Discount
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.discount_price }}
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
                        Partner Offer
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.partner_offer }}
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
                          Customer Paid Price
                        </div>
                        <div
                          class="col-7 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.total_price }}
                        </div>

                        <div
                          class="col-5 text-left text-black borderless"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Booking Status
                        </div>
                        <div
                          class="col-7 text-left text-bold borderless"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.booking_status }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-card class="q-ma-xs text-black accd">
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
                    Sharing Details
                  </q-bar>
                  <q-card-section class="q-pa-none">
                    <div style="height: 340px">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                      >
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Partner Id
                        </div>
                        <div
                          class="col-5 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          :
                          {{ bookingItem.account_id }}
                        </div>
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Partner GST No
                        </div>
                        <div
                          class="col-5 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.property_gstin }}
                        </div>
                        <q-separator />
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Total Bill
                        </div>
                        <div
                          class="col-5 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.total_price }}
                        </div>
                        <q-separator />

                        <div class="row text-black text-bold text-body1"  v-if="bookingItem.booking_status === 'Booked'">
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          TDS@1%
                        </div>
                        <div
                          class="col-5 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.tdsValue }}
                        </div>
                        <q-separator />
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          GST TCS @1%
                        </div>
                        <div
                          class="col-5 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.tdsValue }}
                        </div>
                        <q-separator />
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Gross payable to partner
                        </div>
                        <div
                          class="col-5 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.grossPayable }}
                        </div>
                        <q-separator />
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          MH Share({{ bookingItem.mh_service_fee[0].mh_service_fee }}%)
                        </div>
                        <div
                          class="col-5 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.mhCommission }}
                        </div>
                        <q-separator />
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                         GST On MH Share(18%)
                        </div>
                        <div
                          class="col-5 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{  bookingItem.mhCommissionpercen  }}
                        </div>
                        <q-separator />
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                         Gross MH Share
                        </div>
                        <div
                          class="col-5 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{  bookingItem.mhCommissionRounded  }}
                        </div>
                        <q-separator />
                        <div
                          class="col-7 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          Net Payable to Partner
                        </div>
                        <div
                          class="col-5 text-left text-bold"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.totalPayableToPartner }}
                        </div>
                        </div>
                        <div class="row text-black text-bold text-body1" v-if="bookingItem.booking_status === 'Cancelled'">
                          <div
                            class="col-7 text-left text-black accdTxt"
                            style="font-family: verdana; font-size: 12px"
                          >
                            Date of cancellation
                          </div>
                          <div
                            class="col-5 text-left text-grey"
                            style="font-family: verdana; font-size: 12px"
                          >
                            :
                            {{ bookingItem.dateOfCancellationData }}
                          </div>
                          <div
                            class="col-7 text-left text-black"
                            style="font-family: verdana; font-size: 12px"
                          >
                            Cancelled before check in date in no.of days
                          </div>
                          <div
                            class="col-5 text-left text-grey"
                            style="font-family: verdana; font-size: 12px"
                          >
                            : {{ bookingItem.daysDifference }}
                          </div>
                          <q-separator />
                          <div
                            class="col-7 text-left text-black"
                            style="font-family: verdana; font-size: 12px"
                          >
                            Date of Refund to Guest
                          </div>
                          <div
                            class="col-5 text-left text-grey"
                            style="font-family: verdana; font-size: 12px"
                          >
                            : {{ bookingItem.dateOfCancellationData }}
                          </div>
                          <q-separator />

                          <div
                            class="col-7 text-left text-black"
                            style="font-family: verdana; font-size: 12px"
                          >
                            Amount Refunded to Guest
                          </div>
                          <div
                            class="col-5 text-left text-grey"
                            style="font-family: verdana; font-size: 12px"
                          >
                            : {{ bookingItem.cancelledAmountData }}
                          </div>
                          <q-separator />

                          <div
                            class="col-7 text-left text-black"
                            style="font-family: verdana; font-size: 12px"
                          >
                            Gross Amount payable to Partner for cancelled
                            booking
                          </div>
                          <div
                            class="col-5 text-left text-grey"
                            style="font-family: verdana; font-size: 12px"
                          >
                            : {{ bookingItem.partnerAmountonCancel }}
                          </div>
                          <q-separator />

                          <div
                            class="col-7 text-left text-black"
                            style="font-family: verdana; font-size: 12px"
                          >
                            MH Share On Cancellation
                          </div>
                          <div
                            class="col-5 text-left text-grey"
                            style="font-family: verdana; font-size: 12px"
                          >
                            : {{ bookingItem.mhAmountonCancel }}
                          </div>
                          <q-separator />
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>




              <q-resize-observer />
            </div>
          </q-layout>
        </q-dialog>
        <!--Account Dialog End-->
      </q-page>
    </q-page-container>
    <!-- <q-page-sticky position="top" expand class="bg-secondary text-white">
      <q-toolbar class="bg-secondary text-white rounded-borders">

        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          Booking Accounts Table
        </q-toolbar-title>

      </q-toolbar>
    </q-page-sticky> -->
  </div>
</template>
   <script>
// import { METHODS } from 'http';
import { mapActions, mapGetters, mapState } from "vuex";
import moment from "moment";
import filepaths from "../../helpers/filepath";
import validations from "../../helpers/validations";
import { exportFile } from "quasar";
import { api } from "boot/axios";
import { date } from "quasar";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
export default {
  components: {
    subHeaderForAdmin,
  },
  data() {
    return {
      moment: moment,
      dialogTitle: "",
      url: "",
      visible: false,
      showPanDoc: false,
      isDateRangeActive: false,
      datewiseacctabledata: false,
      small: false,
      columns: "",
      data: [],
      bookingIndex: -1,
      subPropertyView: false,
      bookingItem: {},
      maximizedToggle: true,
      accountbookingDataDialog: false,
      bookingDialog: false,
      title: "Accounts Report",
      headerValue: "Account Report",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),

      json_fields: {
        "Sr.no": "index",
        "Property Name": "property_name",
        "Booked Date": "booked_date",
        "Booking Order ID": "booking_order_id",
        "Check-In Date": "check_in",
        "Check-Out Date": "check_out",
        "Booked Days": "no_of_days",
        "Property ID": "account_id",
        "Partner GST No": "gst_status",
        "Guest Name": "guest_name",
        "Room Category": "room_type",
        "Rate": "room_price",
        "MH Offering%": "discount",
        "MH Offer Amount": "discount_price",
        "Ap Offer in %": "partner_offer_percentage",
        "Ap Offer Amount": "partner_offer",
        "Booking Amount Before Tax": "price_after_discount",
        "Tax": "gst_amount",
        "Booking Amount After tax": "total_price",
        "Date of cancellation": "dateOfCancellationData",
        "Cancelled before check in date in no.of days": "daysDifference",
        "Date of Refund to Guest": "dateOfCancellationData",
        "Amount Refunded to Guest": "cancelledAmountData",
        "Gross Amount payable to Partner for cancelled booking":
          "partnerRefund",
        "Check in Date": "check_in",
        "Check Out Date": "check_out",
        "Duration Of stay": "durationOfStay",
        "Gross Amount": "room_price",
        "EB Offer": "discount_price",
        "Discount MH": "mh_offer_price",
        "Discount Partner": "partner_offer",
        "Net Value": "netValue",
        "GST Tax": "gst_amount",
        "Total Bill": "total_price",
        "TDS@1%": "tdsValue",
        "GST TCS @1%": "gstTds",
        "Gross payable to partners": "grossPayable",
        "MH Commission in % including GST": "mhCommissionRounded",
        "Net Payable to Partner": "totalPayableToPartner",
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      statesList: [],
      propertyDetails: {
        account_id: "",
        partner_id: "",
      },
      partnerDashboardData: {
        partner_name: "",
        // partner_sub_name: "",
        property_name: "",
        partner_address: "",
        sub_property_name: "",
        property_city_name:"",
      },
      pagination1: {
        rowsPerPage: 14,
      },

      accountsDataDateSet: {
        fromDate: null,
        toDate: null,
      },


      optionsFn(d) {
        return d <= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
    };
  },

  created() {
    //console.log("fgffh",this.propertiesArr);
  },
  computed: {
    optionsFn2(d) {
      let fromDate = date.formatDate(
        this.accountsDataDateSet.fromDate,
        "YYYY/MM/DD"
      );
      let today = date.formatDate(new Date(), "YYYY/MM/DD");

      return (d) => d >= fromDate && d <= today;
    },

    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },

      propertcityOptions() {
        const otherOption = {
          property_city_name: "ALL",
          property_city_id: "ALL",

        };

        return [...this.loadcityfromBooking, otherOption];
      },

      propertyselectOptions() {
        const otherOption = {
          property_name: "ALL",
          // property_city_id:"ALL"


        };

        return [...this.propertiesArr, otherOption];
      },



      rateondatewise() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.room_price),
          0
        );
      },
      MHOfferingper() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.discount),
          0
        );
      },
      MHOfferAmount() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.discount_price),
          0
        );
      },
      ApOfferinPer() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.partner_offer_percentage),
          0
        );
      },

      ApOfferAmount() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.partner_offer),
          0
        );
      },
      BookingAmountBeforeTax() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.price_after_discount),
          0
        );
      },
      tax() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.gst_amount),
          0
        );
      },
      BookingAmountAftertax() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.total_price),
          0
        );
      },
      AmountRefundedtoGuest() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.cancelledAmountData),
          0
        );
      },

      GrossAmountpayabletoPartnerForCancelledBooking() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.partnerAmountonCancel),
          0
        );
      },

      durationOfStay() {
        return this.center_date_wise_accounts_bookings_rows.reduce(
          (total, row) => total + parseInt(row.daysDifference),
          0
        );
      },

      grossAmount() {
        return this.center_accounts_bookings_rows.reduce((total, row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const roomPrice = parseFloat(row.room_price);
            if (!isNaN(roomPrice)) {
              return total + roomPrice;
            }
          }
          return total;
        }, 0);
      },

      discountMh() {
        return this.center_accounts_bookings_rows.reduce((total, row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const discountPrice = parseFloat(row.partner_offer);
            if (!isNaN(discountPrice)) {
              return total + discountPrice;
            }
          }
          return total;
        }, 0);
      },

      discountPartner() {
        return this.center_accounts_bookings_rows.reduce((total, row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const partnerOffer = parseFloat(row.partner_offer);
            if (!isNaN(partnerOffer)) {
              return total + partnerOffer;
            }
          }
          return total;
        }, 0);
      },

      netValue() {
        return this.center_accounts_bookings_rows.reduce((total, row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = parseFloat(row.room_price) || 0;
            const discountMH = parseFloat(row.discount_price) || 0;
            const discountPartner = parseFloat(row.partner_offer) || 0;

            const netAmount = grossAmount - discountMH - discountPartner;
            return total + netAmount;
          }
          return total;
        }, 0);
      },

      tax() {
        return this.center_accounts_bookings_rows.reduce((total, row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = parseFloat(row.room_price) || 0;
            const discountMH = parseFloat(row.discount_price) || 0;
            const discountPartner = parseFloat(row.partner_offer) || 0;
            const netValue = grossAmount - discountMH - discountPartner;

            if (!isNaN(netValue)) {
              const taxValue = parseFloat(row.gst_amount) || 0;
              return total + taxValue;
            }
          }
          return total;
        }, 0);
      },

      totalBill() {
        return this.center_accounts_bookings_rows.reduce((total, row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = row.room_price || 0;
            const discountMH = row.discount_price || 0;
            const discountPartner = row.partner_offer || 0;
            const netValue = grossAmount - discountMH - discountPartner;

            if (netValue !== "") {
              const tax = row.gst_amount || 0;
              const totalBill = netValue + tax;
              return total + totalBill;
            }
          }

          return total;
        }, 0);
      },

      TDSAtOnePer() {
        let totalTDS = 0;
        this.center_accounts_bookings_rows.forEach((row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = parseFloat(row.room_price) || 0;
            const discountPartner = parseFloat(row.discount_price) || 0;

            const tds = (grossAmount - discountPartner) * 0.01;
            totalTDS += tds;
          }
        });

        return totalTDS.toFixed(0);
      },
      GSTtcsAtOnePer() {
        let totalGSTTCS = 0;
        this.center_accounts_bookings_rows.forEach((row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = parseFloat(row.room_price) || 0;
            const discountPartner = parseFloat(row.discount_price) || 0;

            const gstTcs = (grossAmount - discountPartner) * 0.01;
            totalGSTTCS += gstTcs;
          }
        });

        return totalGSTTCS.toFixed(0);
      },

      GrosspayableToPartners() {
        let totalGrossPayable = 0;
        this.center_accounts_bookings_rows.forEach((row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = parseFloat(row.room_price) || 0;
            const discountPartner = parseFloat(row.discount_price) || 0;
            const tax = parseFloat(row.gst_amount) || 0;
            const tds = (grossAmount - discountPartner) * 0.01;
            const gstTcs = (grossAmount - discountPartner) * 0.01;

            const grossPayable =
              grossAmount - discountPartner + tax - tds - gstTcs;
            totalGrossPayable += grossPayable;
          }
        });

        return totalGrossPayable.toFixed(0);
      },
      MHCommissionTwentyPerIncludingGST() {
        let totalMHCommission = 0;
        this.center_accounts_bookings_rows.forEach((row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = parseInt(row.room_price) || 0;
            const discountPartner = parseInt(row.discount_price) || 0;
            if (
              row.mh_service_fee &&
              row.mh_service_fee.length > 0 &&
              row.mh_service_fee[0].mh_service_fee
            ) {
              const mhServiceFeePercentage =
                parseInt(row.mh_service_fee[0].mh_service_fee) / 100;
              const gstPercentage = row.gst_percentage || 0;
              const mhCommission =
                (grossAmount - discountPartner) *
                mhServiceFeePercentage *
                (gstPercentage / 100);
              totalMHCommission += parseInt(mhCommission);
            }
          }
        });

        return totalMHCommission.toFixed(0);
      },

      NetPayableToPartner() {
        let totalNetPayable = 0;
        this.center_accounts_bookings_rows.forEach((row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = row.room_price || 0;
            const discountPartner = row.discount_price || 0;
            const tax = row.gst_amount || 0;
            const tds = (grossAmount - discountPartner) * 0.01;
            const gstTcs = (grossAmount - discountPartner) * 0.01;

            const grossPayable =
              grossAmount - discountPartner + tax - tds - gstTcs;
            if (
              row.mh_service_fee &&
              row.mh_service_fee.length > 0 &&
              row.mh_service_fee[0].mh_service_fee
            ) {
              const mhServiceFeePercentage =
                row.mh_service_fee[0].mh_service_fee / 100;
              const gstPercentage = row.gst_percentage || 0;
              const mhCommission =
                (grossAmount - discountPartner) *
                mhServiceFeePercentage *
                (gstPercentage / 100);
              const netPayable = grossPayable - mhCommission;
              totalNetPayable += parseInt(netPayable);
            }
          }
        });

        return totalNetPayable.toFixed(0);
      },

      NetagentCommission() {
        let totalNetPayableAgent = 0;
        this.center_accounts_bookings_rows.forEach((row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = row.room_price || 0;
            const discountPartner = row.discount_price || 0;
            const diffbetweengrossamountanddiscount =
              grossAmount - discountPartner;

            if (
              row.agent_commission &&
              row.agent_commission.length > 0 &&
              row.agent_commission[0].agent_commission
            ) {
              const mhServiceFeePercentage =
                row.agent_commission[0].agent_commission / 100;

              const netPayableagent =
                diffbetweengrossamountanddiscount * mhServiceFeePercentage;
              totalNetPayableAgent += parseInt(netPayableagent);
            }
          }
        });

        return totalNetPayableAgent.toFixed(0);
      },

      NetFinalIncome() {
        let totalNetFinalIncome = 0;
        this.center_accounts_bookings_rows.forEach((row) => {
          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = row.room_price || 0;
            const discountPartner = row.discount_price || 0;
            const tax = row.gst_amount || 0;
            const tds = (grossAmount - discountPartner) * 0.01;
            const gstTcs = (grossAmount - discountPartner) * 0.01;
            const diffbetweengrossamountanddiscount =
              grossAmount - discountPartner;

            const grossPayable =
              grossAmount - discountPartner + tax - tds - gstTcs;

            if (
              row.mh_service_fee &&
              row.mh_service_fee.length > 0 &&
              row.mh_service_fee[0].mh_service_fee
            ) {
              const mhServiceFeePercentage =
                row.mh_service_fee[0].mh_service_fee / 100;

              const gstPercentage = row.gst_percentage || 0;

              const mhCommission =
                (grossAmount - discountPartner) *
                mhServiceFeePercentage *
                (gstPercentage / 100);
              const netFinalPayable = grossPayable - mhCommission;
              if (
                row.agent_commission &&
                row.agent_commission.length > 0 &&
                row.agent_commission[0].agent_commission
              ) {
                const mhServiceFeePercentage =
                  row.agent_commission[0].agent_commission / 100;

                const netPayableagent =
                  diffbetweengrossamountanddiscount * mhServiceFeePercentage;

                const netMHIncome = netFinalPayable - netPayableagent;
                totalNetFinalIncome += netMHIncome;
              }
            }
          }
        });

        return totalNetFinalIncome.toFixed(0);
      },

      // property: (state) => state.dropdown.property_arr,
      propertiesArr: (state) => state.centeraccounts.property_arr_baseded_on_city,
      center_accounts_bookings_columns: (state) =>
        state.centeraccounts.center_accounts_bookings_columns,
      guest_book_columns: (state) => state.booking.guest_book_columns,
      center_accounts_bookings_rows: (state) =>
        state.centeraccounts.center_accounts_bookings_rows,
      center_date_wise_accounts_bookings_rows: (state) =>
        state.centeraccounts.center_date_wise_accounts_bookings_rows,
      center_date_wise_accounts_bookings_columns: (state) =>
        state.centeraccounts.center_date_wise_accounts_bookings_columns,
        loadcityfromBooking: (state) => state.centeraccounts.loadcity_from_booking,
    }),

    ...mapGetters("centeraccounts", ["center_accounts_bookings_rows"]),


    ...mapGetters("centeraccounts", [
      "center_date_wise_accounts_bookings_rows",
    ]),
  },
  mounted() {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    // Format the default values as "yyyy-MM-dd" for date inputs
    const formattedFromDate = this.formatDateIn(thirtyDaysAgo);
    const formattedToDate = this.formatDateIn(today);

    // console.log("From Date:", formattedFromDate);
    // console.log("To Date:", formattedToDate);
    this.accountsDataDateSet.fromDate = formattedFromDate;
    this.accountsDataDateSet.toDate = formattedToDate;

    this.$store.dispatch(`centeraccounts/bookingDataForAccounts`);
    this.$store.dispatch("dropdown/loadPropertiesforadmin");
    this.$store.dispatch("centeraccounts/loadBookingAllCity");


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

    closeDialog() {
      this.$refs.qDateProxyFromDate.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxyToDate.hide();
    },


    handleCitySelect() {

    if (this.partnerDashboardData.property_city_name.property_city_name === 'ALL') {
      this.partnerDashboardData.property_name = 'ALL';
    }
  },
    formatDateIn(date) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
      const year = date.getFullYear();
      return `${year}/${month}/${day}`;
    },

    onClickDateSubmit() {
      //console.log(this.accountsDataDateSet.fromDate,this.accountsDataDateSet.toDate)
      console.log;
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
    ...mapActions("dropdown", ["loadProperties"]),
    ...mapActions("centeraccounts", ["bookingDataForAccounts"]),
    ...mapActions("centeraccounts", ["getDateWiseAccountsDatails"]),
    ...mapActions("centeraccounts", ["loadAllPropertBasedOnCities"]),

    // ...mapActions("booking", ["guestBookingData"]),

    viewDataItem(item) {
      this.bookingIndex = this.data.indexOf(item);
      this.bookingItem = Object.assign({}, item);
      // console.log("JJKK", this.bookingItem);
      this.accountbookingDataDialog = true;
    },
    closeAcoountBookingDialog() {
      this.accountbookingDataDialog = false;
    },

    async ShowDateWiseAccountsDetails() {
      this.isDateRangeActive = true;
      this.datewiseacctabledata = true;
      const payload = {
        fromDate: this.accountsDataDateSet.fromDate,
        toDate: this.accountsDataDateSet.toDate,
        txn_id: this.partnerDashboardData.property_name.hotel_txn_id,
        property_city_name: this.partnerDashboardData.property_city_name,
      };
      this.$store.dispatch(
        "centeraccounts/getDateWiseAccountsDatails",
        payload
      );
    },

    showAccountBookingData() {
      let item = this.partnerDashboardData.property_name.hotel_txn_id;
      this.bookingDataForAccounts(item);
      //console.log("this.partnerDashboardData",this.partnerDashboardData.property_name.txn_id);
    },
    openBookingDialog() {
      this.propertyDetails.partner_id = this.bookingItem.partner_id;
      this.propertyDetails.account_id = this.bookingItem.account_id;
      this.bookingDialog = true;
    },


    emptyPProperty() {
      this.partnerDashboardData.property_city_name = "";
    },
    exportTable() {
      const content = [
        this.center_accounts_bookings_columns.map((col) =>
          wrapCsvValue(col.label)
        ),
      ]
        .concat(
          this.center_accounts_bookings_rows.map((row) =>
            this.center_accounts_bookings_columns
              .map((col) =>
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
          icon: "warning",
        });
      }
    },
  },
};
</script>
<style>
.accd div {
  border-bottom: 1px solid gray;
}
.accdTxt {
  width: 1000px;
}
.borderless {
  border: none !important;
}
</style>
