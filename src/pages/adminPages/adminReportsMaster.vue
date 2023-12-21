<template>
  <q-page-container style="padding-top: 0px">
  <q-page  style="padding-top: 120px" class="q-pa-sm">
    <subHeaderForAdmin />
    <div class="row q-col-gutter-sm q-py-sm">

      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

        <q-card>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div
              class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
              style="
                font-size: 20px;
                margin-top: 15px;
                border-bottom: 2px solid lightgrey;
              "
            >
              MIS Reports
            </div>

            <div class="col-12 row" style="display: flex;justify-content: center;">
              <div class="col-6" style="width: 500px;">
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="redirectmhbookingsPage()">
                  <a
                    class="text-bold text-primary"

                    >1.  MH Accommodation Booking Report</a
                  >
                  <p style="font-size: 12px;">All MH Booking Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px"  class="cursor-pointer" @click="reportmhaccountsPage()">
                  <a
                    class="text-bold text-primary "

                    >2.  MH Accommodation Account Report</a
                  >  <p style="font-size: 12px;">All MH Account Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="reportmhcancellationPage()">
                  <a
                    class="text-bold text-primary"

                    >3.  MH Cancellation Report</a
                  > <p style="font-size: 12px;">All MH Cancellation Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="feedbackviewPage()">
                  <a class="text-bold text-primary "
                    >4.  Feedback View</a
                  ><p style="font-size: 12px;"> MH User Feedback Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateToMedicalLoad()">
                  <a
                    class="text-bold text-primary"

                    >5. Medical Loan</a
                  ><p style="font-size: 12px;">Medical Loan Data.</p>
                </q-card>

                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateToTalkToDoctors()">
                  <a
                    class="text-bold text-primary"

                    >6. Talk To Doctor</a
                  ><p style="font-size: 12px;">MH Genie Data.</p>
                </q-card>
              </div>
              <div class="col-6" style="width: 500px;" >
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="partnerPropertyWise()">
                  <a
                    class="text-bold text-primary"

                    >7.  Property Wise Booking</a
                  ><p style="font-size: 12px;"> Property Wise Booking Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="partnerPropertyMonthsWise()">
                  <a
                    class="text-bold text-primary "

                    >8.  Property Month Wise Booking</a
                  ><p style="font-size: 12px;"> Property Month Wise Booking Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="reportreachusgetPage()">
                  <a
                    class="text-bold text-primary"

                    >9.  Reach Us Data</a
                  ><p style="font-size: 12px;"> All Enquiry Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="healthSupportGetPage()">
                  <a
                    class="text-bold text-primary "

                    >10.  Health Support Data</a
                  ><p style="font-size: 12px;"> All Health Support Data.</p>
                </q-card>


                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateToAarthiBookingData()">
                  <a
                    class="text-bold text-primary "

                    >11.  Aarthi Booking</a
                  ><p style="font-size: 12px;">Aarthi Lab Booking Data.</p>
                </q-card>


                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateToEmailSubscriberData()">
                  <a
                    class="text-bold text-primary "

                    >12. MH Email Subcribers Details</a
                  ><p style="font-size: 12px;">MH Subscriber Details</p>
                </q-card>



              </div>
            </div>
          </div>
        </q-card>
      </q-card>
      <q-card
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md"
        v-if="reportdialog == true"
      >
        <div
          class="row q-col-gutter-sm"
          style="padding-top: 0px"
          ref="reportdialog"
          v-if="reportdialog == true"
        >
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table
                style="font-family: verdana"
                :title="title"
                :data="property_master_reports"
                :columns="properties_reports_columns"
                dense
                :filter="filter"
                :pagination.sync="pagination"
                separator="cell"
                row-key="sno"
                :grid="mode === 'grid'"
                color="green"
                :hide-header="mode === 'grid'"
              >
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
                    v-if="property_master_reports.length != 0"
                    :data="property_master_reports"
                    :fields="json_fields"
                    :header="headerValue"
                    worksheet="Propert Master Details"
                    :name="`${excel_date}_Property Master.xls`"
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

      <!-- <q-card
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md"
        v-if="partnerPropertyWiseBooking == true"
      >
        <div
          class="row q-col-gutter-sm"
          style="padding-top: 0px"
          ref="partnerPropertyWiseBooking"
          v-if="partnerPropertyWiseBooking == true"
        >
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table
                style="font-family: verdana"
                :title="title1"
                :data="property_wise_master_reports"
                :columns="properties_wise_reports_columns"
                dense
                separator="cell"
                row-key="sno"
                :grid="mode === 'grid'"
                color="green"
                :hide-header="mode === 'grid'"
              >
                <template v-slot:bottom-row>
                  <q-tr>
                    <q-td colspan="2" style="text-align: center">
                      <strong>Total</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_bookings }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_nights }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_guests }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>{{ total_rooms }}</strong>
                    </q-td>
                    <q-td style="text-align: center">
                      <strong>₹{{ total_booking_amount }}</strong>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </div>
        </div>
      </q-card> -->
<!--
      <q-card
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md"
        v-if="partnerPropertyMonthsWiseBooking == true"
      >
        <div
          class="row q-col-gutter-sm"
          style="padding-top: 0px"
          ref="partnerPropertyMonthsWiseBooking"
          v-if="partnerPropertyMonthsWiseBooking == true"
        >
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table
                style="font-family: verdana"
                :title="title3"
                :data="property_months_wise_master_reports"
                :columns="properties_months_wise_reports_columns"
                dense
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
                      <strong>₹{{ total_booking_amount_mothswise }}</strong>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </div>
        </div>
      </q-card> -->

      <q-card
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md"
        v-if="masterreportdialog == true"
      >
        <div
          class="row q-col-gutter-sm"
          style="padding-top: 0px"
          ref="masterreportdialog"
          v-if="masterreportdialog == true"
        >
          <q-markup-table>
            <template>
              <thead>
                <tr>
                  <!-- <th
                    class="text-left bg-primary text-white"
                    style="border-right: 1px solid silver;padding-top:15px;font-size:15px;"
                  >
                    <b>S No.</b>
                  </th> -->
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Date Of Booking</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Booking ID</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Booking From Date</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Booking To Date</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Number Of Day Booked</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Propety ID</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Partner GST NO.</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Guest Name </b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Room Number</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Room Category</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Rate</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>MH Offer In %</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>MH Offer Amount</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>AP Offer In %</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>AP Offer Amount</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Booking Amount Before Tax</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Booking Amount After tax</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Date of Cancellation</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Cancelled before check in Date in no. of Days</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Date of Refund to Guest</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Amount Refunded to Guest</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Gross Amount payable to Partner for cancelled booking</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Date of Check In</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Date of Check Out</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Duration of Stay</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Gross Amount</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Discount-MH</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Discount-Partner</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Net Value</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Tax</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Total Bill</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>GST TCS @1%</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Gross Payable to Partners</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>MH Commission including GST</b>
                  </th>
                  <th
                    class="text-left bg-primary text-white"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    <b>Net Payable to Partner</b>
                  </th>
                </tr>
              </thead>
            </template>
            <template>
              <tbody>
                <tr v-for="item in admin_master_reports" :key="item.sno">
                  <td
                    class="text-left"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.inserted_date_time }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.booking_order_id }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_in }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_out }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.no_of_days }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "PRO1212" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "22AAAAA0000A1Z5" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.guestData[0].guest_name }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.propertyRoomDetails[0].room_numbers }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.propertyRoomDetails[0].room_category }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.room_price }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "15" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.mh_offer_price }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.discount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.discount_price }}
                  </td>

                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{
                      (item.room_price -
                        (item.discount_price + item.mh_offer_price)) *
                      item.no_of_days
                    }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{
                      (item.room_price -
                        (item.discount_price + item.mh_offer_price)) *
                      item.no_of_days *
                      (100 + taxRateCalculation)
                    }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{
                      item.cancellationData.length == 0
                        ? "NA"
                        : item.cancellationData[0].inserted_date
                    }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ numberOfDayCalculation }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{
                      item.cancellationData.length == 0
                        ? "NA"
                        : item.cancellationData[0].inserted_date
                    }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{}}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{}}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_in }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_out }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                </tr>

                <tr
                  v-for="item in admin_masterreports_travelbooking"
                  :key="item.sno"
                >
                  <!-- <td
                    class="text-right"
                    style="border-right: 1px solid silver;padding-top:15px;font-size:15px;"
                  >
                    {{ item.sno }}
                  </td> -->
                  <td
                    class="text-left"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.booked_date }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.booking_order_id }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_in }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_out }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.no_of_days }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "PRO1212" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "22AAAAA0000A1Z5" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.guestData.guest_name }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "101,102,103" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "Basic" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.travel_charges }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.mh_offer_price }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.discount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.discount_price }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.price_after_discount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.payable_amount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_in }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_out }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.no_of_days }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                </tr>

                <tr
                  v-for="item in admin_masterreports_medicalbooking"
                  :key="item.sno"
                >
                  <!-- <td
                    class="text-right"
                    style="border-right: 1px solid silver;padding-top:15px;font-size:15px;"
                  >
                    {{ item.sno }}
                  </td> -->
                  <td
                    class="text-left"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.eqp_booking_date }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.booking_order_id }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_in }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_out }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.no_of_days }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "PRO1212" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "22AAAAA0000A1Z5" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.guestData.guest_name }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "101,102,103" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "Basic" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.travel_charges }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.mh_offer_price }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.discount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.discount_price }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.price_after_discount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.payable_amount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_in }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_out }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.no_of_days }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                </tr>

                <tr
                  v-for="item in admin_masterreports_foodbooking"
                  :key="item.sno"
                >
                  <!-- <td
                    class="text-right"
                    style="border-right: 1px solid silver;padding-top:15px;font-size:15px;"
                  >
                    {{ item.sno }}
                  </td> -->
                  <td
                    class="text-left"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.food_booking_date }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.booking_order_id }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_in }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_out }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.no_of_days }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "PRO1212" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "22AAAAA0000A1Z5" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.guestData.guest_name }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "101,102,103" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "Basic" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.travel_charges }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.mh_offer_price }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.discount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.discount_price }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.price_after_discount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.payable_amount }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_in }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.check_out }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ item.no_of_days }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                  <td
                    class="text-right"
                    style="
                      border-right: 1px solid silver;
                      padding-top: 15px;
                      font-size: 15px;
                    "
                  >
                    {{ "0" }}
                  </td>
                </tr>
                <q-tr>
                  <q-td class="text-right text-bold" colspan="15"
                    ><b class="bg-primary text-white">Total Amount :</b>
                    {{ totalAmount }}
                  </q-td>
                  <q-td class="text-right text-bold" colspan="1"
                    ><b class="bg-primary text-white">Total Amount :</b>
                    {{ totalAmount1 }}
                  </q-td>
                </q-tr>
              </tbody>
            </template>
          </q-markup-table>

          <!-- <div class="col-12" padding style="padding-top: 20px">
            <q-card flat bordered class="bg-white">
              <q-table
                dense
                :data="admin_master_reports"
                :columns="admin_master_reports_columns"
                row-key="sno"
                :filter="filter"
                :selected.sync="selected"
                separator="cell"
                :pagination.sync="pagination"
                :hide-header="mode === 'grid'"
                :grid="mode === 'grid'"
              >
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

                  <q-btn flat round dense color="primary" icon="archive">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                      >CSV Export
                    </q-tooltip>
                  </q-btn>
                </template>
                <template v-slot:bottom-row>
                  <q-tr>
                    <q-td class="text-right text-bold" colspan="15"
                      >Total Amount :
                      {{ totalAmount }}
                    </q-td>
                  </q-tr>
                </template>
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <span> 0</span>
                  </q-td>
                </template>
                <template v-slot:body-cell-days="props">
                  <q-td :props="props">
                    <span> {{}}</span>
                  </q-td>
                </template>
              </q-table>
            </q-card>
          </div> -->
        </div>
      </q-card>
    </div>
    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_food'"
    ></div>

    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_vehicle'"
    ></div>

    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_medical'"
    ></div>
  </q-page>
</q-page-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";
import { date } from "quasar";
import { scroll } from "quasar";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      AccImgpath: filepaths.mhapFilePath,
      Acctravel: filepaths.mhtpFilePath,
      Accfood: filepaths.mhfpFilePath,
      Accmedical: filepaths.mhepFilePath,
      editedIndex: -1,
      url: "",
      filter: "",

      selected: [],
      pagination: {
        rowsPerPage: 500,
      },

      headerValue: "Property Master Details",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        Sno: "sno",
        "Property City": "city_name",
        "Property Name": "property_name",
        "Partner Id": "partnerid",
        "Partner Name": "partner_name",
        "Partner Phone": "partner_phone",
        "Property Address": "address",
        "Pin Code": "pin_code",
        "Property Email": "property_email",
        "Pan Card": "pan",
        GSTIN: "gstin",
        "Bank Account Number": "bankAccountNo",
        "Bank Name": "bankName",
        "Branch Name": "branchName",
        "IFSC Code": "ifsc",
      },

      // text: {
      //   room_price: [],
      //   no_of_days:[],
      //   discount_price: [],
      //   no_of_days: []
      // },
      dialogTitle: "",
      mode: "list",
      title: "Properties Master Report ",
      title1: "Property Wise Booking Report:",
      title3: "Property Months Wise Booking Data",
      masterreportdialog: false,


      reportdialog: false,

      ...validations,

      dates: {
        date_from: "",
        date_to: "",
      },
      moment: moment,
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
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
        "Nineteen ",
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
        "Ninety",
      ],
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      user: (state) => state.account.user,
      properties_reports_columns: (state) =>
        state.centeraccounts.properties_reports_columns,
      properties_wise_reports_columns: (state) =>
        state.centeraccounts.properties_wise_reports_columns,
      properties_months_wise_reports_columns: (state) =>
        state.centeraccounts.properties_months_wise_reports_columns,
      revenue_accounts_bookings_columns: (state) =>
        state.booking.revenue_accounts_bookings_columns,
      guest_book_columns: (state) => state.booking.guest_book_columns,
      master_reports_columns: (state) =>
        state.centeraccounts.master_reports_columns,
      admin_master_reports_columns: (state) =>
        state.centeraccounts.admin_master_reports_columns,
      admin_master_reports: (state) =>
        state.centeraccounts.admin_master_reports,
      admin_masterreports_travelbooking: (state) =>
        state.centeraccounts.admin_masterreports_travelbooking,
      admin_masterreports_medicalbooking: (state) =>
        state.centeraccounts.admin_masterreports_medicalbooking,
      admin_masterreports_foodbooking: (state) =>
        state.centeraccounts.admin_masterreports_foodbooking,

      totalAmount() {
        let sum = this.admin_master_reports.reduce((accum, current) => {
          return parseFloat(accum + parseFloat(current.price_after_discount));
        }, 0);
        return sum;
      },
      totalAmount1() {
        let sum = this.admin_master_reports.reduce((accum, current) => {
          return parseFloat(accum + parseFloat(current.total_price));
        }, 0);
        return sum;
      },
      total_bookings() {
        return this.property_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.total_bookings),
          0
        );
      },

      total_nights() {
        return this.property_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.total_nights),
          0
        );
      },
      total_guests() {
        return this.property_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.total_guests),
          0
        );
      },
      total_rooms() {
        return this.property_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.total_rooms),
          0
        );
      },
      total_booking_amount() {
        return this.property_wise_master_reports.reduce(
          (total, row) => total + parseInt(row.booking_amount),
          0
        );
      },

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

      // numberOfDayCalculation() {
      // let item = this.admin_master_reports;
      //         let chakeinData = "";
      //         for (let i = 0; i < item.length; i++) {
      //           chakeinData = item[i].check_in;
      //           console.log("chakeinData",chakeinData)
      // const date1 = new Date(chakeinData);
      // const date2 = new Date('2022/12/07');
      // const diffTime = Math.abs(date2 - date1);
      // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      // console.log(diffDays + " days");
      // return diffDays;
      //         }
      // // const date1 = chakeinData;
      // // return diffDays;
      // },
      numberOfDayCalculation() {
        let item = this.admin_master_reports;
        let chakeinData = "";
        let cancelDate = "";
        const loop1 = () => {
          for (let i = 0; i < item.length; i++) {
            chakeinData = item[i].check_in;
            console.log("chakeinData", chakeinData);
          }
        };
        const loop2 = () => {
          for (let i = 0; i < item.length; i++) {
            cancelDate =
              item[i].cancellationData.length == 0
                ? "NA"
                : item[i].cancellationData[0].inserted_date;
            console.log("cancelDate", cancelDate);
          }
        };
        loop1();
        loop2();
        console.log("www", chakeinData, cancelDate);
        const date1 = new Date(chakeinData);
        const date2 = new Date(canceDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays + " days");
        return diffDays;
        // const date1 = chakeinData;
        // return diffDays;
      },

      taxRateCalculation() {
        //hotelRate = this.admin_master_reports.room_price
        let taxRatePrice = 0;
        let hotelRate = this.admin_master_reports.room_price;
        if (hotelRate < 1000) {
          taxRatePrice = (hotelRate * 0) / 100;
          console.log("www1", taxRatePrice);
        } else if (1000 <= hotelRate && hotelRate < 2499) {
          taxRatePrice = (hotelRate * 12) / 100;
          console.log("www2", taxRatePrice);
        } else if (2500 <= hotelRate && hotelRate < 7499) {
          taxRatePrice = (hotelRate * 18) / 100;
          console.log("www3", taxRatePrice);
        } else if (7500 <= hotelRate) {
          taxRatePrice = (hotelRate * 28) / 100;
          console.log("www4", taxRatePrice);
        }
        return taxRatePrice;
      },
    }),
    ...mapGetters("partners", ["hotelData_rows"]),
    ...mapGetters("centeraccounts", ["property_master_reports"]),
    ...mapGetters("centeraccounts", ["property_wise_master_reports"]),
    ...mapGetters("centeraccounts", ["property_months_wise_master_reports"]),

    // ...mapGetters("centeraccounts", ["master_reports"]),
  },
  created() {
    // console.log(
    //   "sasa",
    //   this.admin_master_reports[0].cancellationData[0].inserted_date
    // );
  },
  mounted() {
    this.$store.dispatch("centeraccounts/adminreportsdetails");
    this.$store.dispatch("centeraccounts/adminreportsForTravelBooking");
    this.$store.dispatch("centeraccounts/adminreportsForMedicalBooking");
    this.$store.dispatch("centeraccounts/adminreportsForFoodBooking");
    this.$store.dispatch("centeraccounts/adminreportsForFoodBooking");
    this.$store.dispatch("centeraccounts/propertyreportsdetails");
    this.$store.dispatch("centeraccounts/propertyWisereportsdetails");

  },
  methods: {
    ...mapActions("booking", ["getBookingDetails"]),
    ...mapActions("centeraccounts", ["masterreportsdetails"]),
    ...mapActions("centeraccounts", ["adminreportsdetails"]),
    closeDialog() {
      this.$refs.qDateProxy.hide();
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
    masterreportmethod() {
      this.masterreportdialog = true;
      this.reportdialog = false;
    },

    // redirectMasterReportPage() {
    //   this.$router.push("/adminReportForAccommodation");
    // },
    redirectmhbookingsPage() {
      this.$router.push("/mhbookings");
    },
    reportmhaccountsPage() {
      this.$router.push("/mhaccounts");
    },
    reportmhcancellationPage() {
      this.$router.push("/mhcancellation");
    },
    reportreachusgetPage() {
      this.$router.push("/reachusget");
    },
    healthSupportGetPage() {
      this.$router.push("/healthSupportGet");
    },
    navigateToAarthiBookingData() {
      this.$router.push("/aarthiscanget");
    },
    navigateToEmailSubscriberData() {
      this.$router.push("/emailsubscriberget");
    },

    feedbackviewPage() {
      this.$router.push("/feedbackview");
    },
    navigateToMedicalLoad() {
      this.$router.push("/medicalloanlist");
    },
    navigateToTalkToDoctors
() {
      this.$router.push("/mhgeniemaster");
    },
    reportdialogmethod() {
      this.masterreportdialog = false;
      this.reportdialog = true;
      this.partnerPropertyWiseBooking = false;

    },

    partnerPropertyWise() {
      this.$router.push("/propertywisebooking");
    },

    partnerPropertyMonthsWise() {
      this.$router.push("/propertymonthswisebooking");


    },
  },
};
</script>
