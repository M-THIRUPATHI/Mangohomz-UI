<template>
  <div>
    <q-page-container style="padding-top: 0px">
      <q-page style="padding-top: 120px" class="q-pa-md">
        <subHeaderForAdmin />
        <!-- <q-card style="margin-top: 30px">
          <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
            <p
              class="q-pa-xs text-left text-bold"
              style="text-align: justify; font-size: 20px; font-family: verdana"
            >
              Booking Report:
            </p>

            <q-btn
              push
              label="Accommodation"
              icon="mdi-domain"
              @click="
                accomodationAllBooking(), selectbtn('accomodationAllBooking')
              "
              :class="{ selected: isSelected('accomodationAllBooking') }"
              v-if="!isAccommodationDataEmpty"
              style="padding-top: 0px"
            />
            <q-btn
            push
            label="Food"
            icon="mdi-food-fork-drink"
            @click="
              FoodAllBooking(),
                selectbtn('FoodAllBooking')
            "
            :class="{ selected: isSelected('FoodAllBooking') }"
          />
            <q-btn
              push
              label="Travel"
              icon="mdi-car"
              @click="TravelAllBooking(), selectbtn('TravelAllBooking')"
              v-if="!isTravelDataEmpty"
              :class="{ selected: isSelected('TravelAllBooking') }"
            />
            <q-btn
            push
            label="Medical"
            icon="mdi-medical-bag"
            @click="
              MedicalAllBooking(),
                selectbtn('MedicalAllBooking')
            "
            :class="{ selected: isSelected('MedicalAllBooking') }"
          />
          </div>
        </q-card> -->

        <div
          class="q-pa-md AccomBkgDetails"
          style="padding-top: 20px"
          ref="accdata"
          v-if="accdata == true"
        >
          <!-- Chip Code Start -->
          <div class="col-12" style="margin-right: 400px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-width: 94vw;
              "
              class="q-pa-sm AccomBkgDetails"
             >
              <p
                class="text-right text-bold"
                style="
                  text-align: justify;
                  font-size: 20px;
                  font-family: verdana;
                "
              >
                Accommodation Booking Report:
              </p>
              <div
                class="AccomBkgDetails"
                style="display: flex; align-items: center; margin-right: 0px"
              >
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
            </div>
          </div>
          <!-- Chip Code End -->
          <div v-if="!isDateRangeActive">
            <q-table
              style="font-family: verdana"
              :data="booking_displayAll_rows"
              :columns="admin_bookings_columns"
              dense
              :filter="filter"
              :rows-per-page-options="[100, 200, 300, 0]"
              separator="cell"
              row-key="sno"
              :grid="mode === 'grid'"
              color="green"
              wrap-cells
              :hide-header="mode === 'grid'"
            >
              <template v-slot:body-cell-check_in="props">
                <q-td :props="props">
                  {{ moment(props.row.check_in).format("Do MMM YYYY") }}
                </q-td>
              </template>

              <template v-slot:top-right="props">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    margin-right: 300px;
                    margin-top: 15px;
                  "
                  class="AccomBkgDetails"
                >
                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-right: 500px;
                      margin-top: -10px;
                    "
                  >
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      style="width: 250px"
                      option-value="txn_id"
                      option-label="sub_property_name"
                      :options="propertiesArr"
                      v-model="booksetformdata.property_name"
                      label="Select property"
                      label-color="black"
                      class="col-4 q-mr-sm"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-account-multiple"
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
                      v-model="booksetformdata.fromDate"
                      style="
                        width: 70%;
                        font-size: 12px;
                        margin-top: 20px;
                        margin-right: 10px;
                      "
                      :rules="[required('Date')]"
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
                              v-model="booksetformdata.fromDate"
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
                      v-model="booksetformdata.toDate"
                      style="width: 70%; font-size: 12px; margin-top: 20px"
                      :rules="[required('Date')]"
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
                              v-model="booksetformdata.toDate"
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
                      @click="loadDatewiseAccBookingTable()"
                      style="margin-right: 10px"
                      color="primary"
                      label="Submit"
                      class="q-ml-md"
                      no-caps
                    />
                  </div>

                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: -10px;
                      margin-right: -300px;
                    "
                  >
                    <div
                      class="AccomBkgTbl"
                      style="
                        display: flex;
                        align-items: center;
                        margin-top: -20px;
                        margin-left: -300px;
                      "
                    >
                      <q-input
                        outlined
                        dense
                        debounce="300"
                        v-model="filter"
                        placeholder="Search"
                        style="width: 280px; margin-top: 20px"
                      >
                        <template v-slot:append>
                          <q-icon name="search" />
                        </template>
                      </q-input>

                      <div
                        class="AccomBkgTbl"
                        style="
                          display: flex;
                          align-items: center;
                          margin-top: 10px;
                        "
                      >
                        <q-btn
                          dense
                          flat
                          icon="mdi-folder-refresh-outline"
                          v-close-popup
                          @click="reloadPage"
                        >
                          <q-tooltip class="bg-white text-primary"
                            >Refresh</q-tooltip
                          >
                        </q-btn>

                        <q-btn
                          flat
                          round
                          dense
                          :icon="
                            props.inFullscreen
                              ? 'fullscreen_exit'
                              : 'fullscreen'
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
                          <q-tooltip
                            :disable="$q.platform.is.mobile"
                            v-close-popup
                            >{{ mode === "grid" ? "List" : "Grid" }}
                          </q-tooltip>
                        </q-btn>
                        <download-excel
                          v-if="booking_displayAll_rows.length != 0"
                          :data="booking_displayAll_rows"
                          :fields="json_fields"
                          :header="headerValue"
                          worksheet="Booking Details"
                          :name="`${excel_date}_Booking Details .xls`"
                        >
                          <q-icon
                            color="primary"
                            name="mdi-file-excel"
                            size="22px"
                          />
                          <q-tooltip
                            :disable="$q.platform.is.mobile"
                            v-close-popup
                            >Download Excel
                          </q-tooltip>
                        </download-excel>
                        <div>
                          <download-excel
                            v-if="booking_displayAll_rows.length != 0"
                            :data="booking_displayAll_rows"
                            :fields="json_fields_financial"
                            :header="headerValue"
                            worksheet="Financial Booking Report"
                            :name="`${excel_date}_Financial Booking Report.xls`"
                          >
                            <q-icon
                              color="secondary"
                              style="cursor: pointer"
                              name="mdi-file-excel"
                              size="22px"
                            />

                            <q-tooltip
                              :disable="$q.platform.is.mobile"
                              v-close-popup
                              >Financial Report
                            </q-tooltip>
                          </download-excel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    icon="las la-eye"
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
                    {{ totalroomNights_count }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ total_guest }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ mh_commission111 }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ partner_share111 }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ total_booking_amount }}
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
          <!--Datewise Acc Booking Table Start-->
          <div v-else>
            <q-table
              style="font-family: verdana"
              :data="datewise_booking_rows"
              :columns="datewise_booking_columns"
              dense
              :filter="filter"
              :rows-per-page-options="[100, 200, 300, 0]"
              separator="cell"
              row-key="sno"
              :grid="mode === 'grid'"
              color="green"
              wrap-cells
              :hide-header="mode === 'grid'"
            >
              <template v-slot:body-cell-check_in="props">
                <q-td :props="props">
                  {{ moment(props.row.check_in).format("Do MMM YYYY") }}
                </q-td>
              </template>

              <template v-slot:top-right="props">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    margin-right: 300px;
                    margin-top: 15px;
                  "
                  class="AccomBkgDetails"
                >
                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-right: 500px;
                      margin-top: -10px;
                    "
                  >
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      style="width: 250px"
                      option-value="txn_id"
                      option-label="sub_property_name"
                      :options="propertiesArr"
                      v-model="booksetformdata.property_name"
                      label="Select property"
                      label-color="black"
                      class="col-4 q-mr-sm"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-account-multiple"
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
                      v-model="booksetformdata.fromDate"
                      style="
                        width: 70%;
                        font-size: 12px;
                        margin-top: 20px;
                        margin-right: 10px;
                      "
                      :rules="[required('Date')]"
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
                              :options="optionsFn"
                              v-model="booksetformdata.fromDate"
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
                      v-model="booksetformdata.toDate"
                      style="width: 70%; font-size: 12px; margin-top: 20px"
                      :rules="[required('Date')]"
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
                              v-model="booksetformdata.toDate"
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
                      @click="loadDatewiseAccBookingTable()"
                      color="primary"
                      label="Submit"
                      class="q-ml-md"
                      no-caps
                    />
                  </div>
                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: -10px;
                      margin-right: -300px;
                    "
                  ></div>
                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-left: -300px;
                    "
                  ></div>
                </div>
                <div
                  class="AccomBkgTbl"
                  style="display: flex; align-items: center; margin-top: -10px"
                >
                  <q-input
                    outlined
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                    style="width: 280px; margin-top: 20px"
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
                  v-if="datewise_booking_rows.length != 0"
                  :data="datewise_booking_rows"
                  :fields="json_fields"
                  :header="headerValue"
                  worksheet="Booking Details"
                  :name="`${excel_date}_Booking Details .xls`"
                >
                  <q-icon color="primary" name="mdi-file-excel" size="22px" />
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                    >Download Excel
                  </q-tooltip>
                </download-excel>

                <download-excel
                  v-if="datewise_booking_rows.length != 0"
                  :data="datewise_booking_rows"
                  :fields="json_fields_financial"
                  :header="headerValue"
                  worksheet="Financial Booking Report"
                  :name="`${excel_date}_Financial Booking Report.xls`"
                >
                  <q-icon
                    color="secondary"
                    style="cursor: pointer"
                    name="mdi-file-excel"
                    size="22px"
                  />

                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                    >Financial Report
                  </q-tooltip>
                </download-excel>
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
                    {{ datewise_total_nights }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ datewise_total_rooms }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ datewise_totalroomNights_count }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ datewise_total_guest }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ datewise_total_booking_amount }}
                  </q-td>

                  <q-td style="text-align: center">
                    {{ mh_commission }}
                  </q-td>
                  <q-td style="text-align: center">
                    {{ partner_share }}
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
          <!--Datewise Acc Booking Table End-->
        </div>

        <!-- Add Travel Booking Admin Start-->
        <div
          class="q-pa-md"
          style="padding-top: 20px"
          ref="traveldata"
          v-if="traveldata == true"
        >
          <!-- Chip Code Start -->
          <div class="col-12" style="margin-right: 400px">
            <div class="q-pa-md">
              <q-chip
                square
                clickable
                @click="getClickableTravelBooking('ALL')"
              >
                <q-avatar color="primary" text-color="white">{{
                  this.admin_Travelbooking_status_count.length == 0
                    ? "0"
                    : parseInt(
                        this.admin_Travelbooking_status_count[0].bcount
                      ) +
                      parseInt(
                        this.admin_Travelbooking_status_count[0].cancelcount
                      )
                }}</q-avatar>
                All
              </q-chip>
              <q-chip
                square
                clickable
                @click="
                  getadminTravelBookingStatusCount('Booked');
                  getClickableTravelBooking('Booked');
                "
              >
                <q-avatar color="secondary" text-color="white">{{
                  this.admin_Travelbooking_status_count.length == 0
                    ? "0"
                    : this.admin_Travelbooking_status_count[0].bcount
                }}</q-avatar>
                Booked
              </q-chip>

              <q-chip
                square
                clickable
                @click="
                  getadminTravelBookingStatusCount('Cancelled'),
                    getClickableTravelBooking('Cancelled')
                "
              >
                <q-avatar color="red" text-color="white">{{
                  this.admin_Travelbooking_status_count.length == 0
                    ? "0"
                    : this.admin_Travelbooking_status_count[0].cancelcount
                }}</q-avatar>
                Cancelled
              </q-chip>
            </div>
          </div>
          <!-- Chip Code End -->
          <q-table
            style="font-family: verdana"
            :title="title1"
            :data="Travelbooking_displayAll_rows"
            :columns="admin_Travelbookings_columns"
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
                v-if="Travelbooking_displayAll_rows.length != 0"
                :data="Travelbooking_displayAll_rows"
                :fields="json_fields"
                :header="headerValue"
                worksheet="Travel Booking Details"
                :name="`${excel_date}_TravelBooking Details .xls`"
              >
                <q-icon color="primary" name="mdi-file-excel" size="22px" />
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                  >Download Excel
                </q-tooltip>
              </download-excel>
            </template>
            <template v-slot:body-cell-check_out="props">
              <q-td :props="props">
                {{ moment(props.row.check_out).format("Do MMM YYYY") }}
              </q-td>
            </template>
            <!-- <template v-slot:body-cell-actions="props">
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
          </template> -->
            <!-- <template v-slot:bottom-row>
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
          </template> -->
          </q-table>
        </div>
        <!-- Add Travel Booking Admin End-->

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
                <div style="font-family: verdana">Booking Details</div>
                <q-space />

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
                    Booking Details
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
                    Communication
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
                          User Mobile Number
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.phone_no }}
                          <br />
                          <q-btn
                            class="text-bold"
                            label="Send SMS To User"
                            color="indigo-9"
                            size="sm"
                            :disabled="isCheckInOver"
                            no-caps
                            @click="sendSMSToUser()"
                          />
                        </div>
                        <q-separator />
                        <div
                          class="col-5 text-left text-black"
                          style="font-family: verdana; font-size: 12px"
                        >
                          User Emails Id
                        </div>
                        <div
                          class="col-7 text-left text-grey"
                          style="font-family: verdana; font-size: 12px"
                        >
                          : {{ bookingItem.email_id }}
                          <br />
                          <q-btn
                            class="text-bold"
                            label="Send Email To User"
                            color="indigo-9"
                            size="sm"
                            no-caps
                            @click="sendEmailToUser()"
                          />
                        </div>
                        <q-separator />
                        <!-- <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        User Alternate Emails Id
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ bookingItem.alternate_email_id }}
                        <br />
                        <q-btn
                          class="text-bold"
                          label="Send Alternate Email To User"
                          color="indigo-9"
                          size="sm"
                          no-caps
                          @click="sendEmailToUser()"
                        />
                      </div>
                      <q-separator /> -->

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
                          <q-btn
                            class="text-bold"
                            label="Send SMS To Partner"
                            color="indigo-9"
                            size="sm"
                            no-caps
                            :disabled="isCheckInOver"
                            @click="sendSMSToPartner()"
                          />
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
                          <q-btn
                            class="text-bold"
                            label="Send Email To Partner"
                            color="indigo-9"
                            size="sm"
                            no-caps
                            @click="sendEmailToPartner()"
                          />
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
                    icon="mdi-account-multiple-plus"
                    name="guest"
                    label="Guest Details"
                  />
                  <q-tab
                    class="secondary"
                    icon="mdi-food-fork-drink"
                    name="food"
                    label="Food Booking"
                  />
                  <q-tab
                    class="secondary"
                    icon="mdi-car"
                    name="travel"
                    label="Travel Booking"
                  />
                  <q-tab
                    class="secondary"
                    icon="mdi-medical-bag"
                    name="equipment"
                    label="Equipment Booking"
                  />
                </q-tabs>
                <q-separator />
                <q-tab-panels v-model="tab" animated>
                  <q-tab-panel name="guest">
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
                          Guest Details
                        </q-bar>
                        <q-table
                          style="font-family: verdana"
                          :data="bookingItem.guestData"
                          :columns="guest_book_columns"
                          dense
                          separator="cell"
                          row-key="sno"
                          hide-bottom
                          hide-pagination
                        >
                        </q-table>
                      </q-card>
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="food">
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
                            name="mdi-food-fork-drink"
                            color="black"
                            size="1.5em"
                            style="padding-right: 10px"
                          />
                          Food Details
                        </q-bar>
                        <q-table
                          style="font-family: verdana"
                          :data="bookingItem.food_details"
                          :columns="guest_food_book_columns"
                          :rows-per-page-options="[50, 100, 200, 0]"
                          dense
                          separator="cell"
                          row-key="sno"
                          hide-bottom
                          hide-pagination
                        >
                          <template v-slot:body-cell-actions="props">
                            <q-td :props="props">
                              <q-btn
                                color="primary"
                                @click="viewFoodItemData(props.row)"
                                icon="las la-eye"
                                size="sm"
                                ><q-tooltip :disable="$q.platform.is.mobile"
                                  >View</q-tooltip
                                ></q-btn
                              >
                            </q-td>
                          </template>
                        </q-table>
                      </q-card>
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="equipment">
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
                            name="mdi-medical-bag"
                            color="black"
                            size="1.5em"
                            style="padding-right: 10px"
                          />
                          Equipment Details
                        </q-bar>
                        <q-table
                          style="font-family: verdana"
                          :data="bookingItem.medical_details"
                          :columns="guest_equipment_book_columns"
                          dense
                          separator="cell"
                          row-key="sno"
                          hide-bottom
                          hide-pagination
                        >
                          <template v-slot:body-cell-actions="props">
                            <q-td :props="props">
                              <q-btn
                                color="primary"
                                @click="viewMedicalItemData(props.row)"
                                icon="las la-eye"
                                size="sm"
                                ><q-tooltip :disable="$q.platform.is.mobile"
                                  >View</q-tooltip
                                ></q-btn
                              >
                            </q-td>
                          </template>
                        </q-table>
                      </q-card>
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="travel">
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
                            name="mdi-car"
                            color="black"
                            size="1.5em"
                            style="padding-right: 10px"
                          />
                          Travel Details
                        </q-bar>
                        <q-table
                          style="font-family: verdana"
                          :data="bookingItem.travel_details"
                          :columns="guest_travel_book_columns"
                          dense
                          separator="cell"
                          row-key="sno"
                          hide-bottom
                          hide-pagination
                        >
                          <template v-slot:body-cell-actions="props">
                            <q-td :props="props">
                              <q-btn
                                color="primary"
                                @click="viewTravelItemData(props.row)"
                                icon="las la-eye"
                                size="sm"
                                ><q-tooltip :disable="$q.platform.is.mobile"
                                  >View</q-tooltip
                                ></q-btn
                              >
                            </q-td>
                          </template>
                        </q-table>
                      </q-card>
                    </div>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card>
            </div>
          </q-layout>
        </q-dialog>

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
                <div style="font-family: verdana">Food Booking Details</div>
                <q-space />

                <q-btn
                  dense
                  flat
                  icon="close"
                  @click="closeFoodBookingDialog()"
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
                          <!-- <div
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
                          </div> -->
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
                  style="
                    max-height: 20vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
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
                          showDocument(
                            props.row.food_image[0].food_image,
                            'Food Image',
                            'food'
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
                  Equipment Booking Details
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
                              moment(
                                medicalBookingItem.eqp_booking_date
                              ).format("Do MMM YYYY")
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
                  style="
                    max-height: 20vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
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
                <div style="font-family: verdana">Travel Booking Details</div>
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
                  style="
                    max-height: 20vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
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
    </q-page-container>
    <!-- <q-page-sticky position="top" expand class="bg-secondary text-white">
      <q-toolbar class="bg-secondary text-white rounded-borders">

        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          Booking Details
        </q-toolbar-title>
        <div
          class="q-ma-xs q-pa-xs"
          style="text-align: justify; font-size: 15px; font-family: verdana"
        >
          <b> {{ userDetails.user_name }} ,{{ userDetails.zone }}</b>
        </div>
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
      ...validations,
      booksetformdata: {
        fromDate: null,
        toDate: null,
        property_name: null,
      },
      optionsFn(d) {
        return d <= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
      accdata: true,
      traveldata: false,
      isDateRangeActive: false,
      datewiseacctabledata: false,
      selectedbtn: "accomodationAllBooking",
      tab: "guest",
      moment: moment,
      dialogTitle: "",
      // checkinDateTime: new Date(this.bookingItem.check_in),
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
      title: "Accommodation Booking Details",
      title1: "Travel Booking Details",
      mode: "list",

      addDataDialog: false,
      statesList: [],
      propertyDetails: {
        account_id: "",
        partner_id: "",
      },
      headerValue: "Booking Details",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),

      json_fields_financial: {
        "Sr.no": "index",
        "Booked Date": "booked_date",
        "Booking Order ID": "booking_order_id",
        "Partner Id": "partner_id",
        "Account Id": "account_id",
        "Property GST": "property_gst",
        "Guest Name": "guestName",
        "Partner Name": "property_name",
        "Gst Percentage": "gst_percentage",
        "Gst Amount": "gst_amount",
        TDS: "tds",
        TCS: "gstTcs",
        "MH Commission": "mh_commission",
        "MH Commission GST": "eighteenpercentage",
        "Agent Commission": "agentFeePercentage",
        "Partner Share": "partner_share",
        "Property Address": "address",
        "Rozarpay Payment ID": "rz_payment_id",
      },

      json_fields: {
        "Sr.no": "index",
        "Booking Order ID": "booking_order_id",
        "Booking Id": "booking_id",
        "Booking Status": "booking_status",
        "Guest Name": "guestName",
        City: "city",
        "Near Hospital": "near_hospital_name",
        "Partner Id": "partner_id",
        "Account Id": "account_id",
        "Hotel Name": "property_name",
        "Property State": "property_state_name",
        "Property City Name": "property_city_name",
        "Property GST": "property_gst",
        "Property Address": "address",
        Facilities: "facilities",
        "Property Emails": "property_email",
        "Property Phone No": "property_phone",

        "Hotel Txn Id": "hotel_txn_id",
        "Booked Date": "booked_date",
        "Check In": "formattedcheck_in",
        "Check Out": "formattedcheck_out",
        "Alternate No": "alternate_no",

        "Country Name": "country_name",
        "Email Id": "email_id",
        "Phone No": "phone_no",
        "Primary No": "primary_no",
        Pincode: "pincode",
        Nights: "no_of_days",
        Rooms: "room_booked_count",
        Guests: "guest_count",

        "Base Price": "base_price",

        "Cgst Amount": "cgst_amount",
        "Cgst Percentage": "cgst_percentage",

        Discount: "discount",
        "Discount Price": "discount_price",

        "Gst Amount": "gst_amount",
        "Gst Percentage": "gst_percentage",
        "Guest Count": "guest_count",

        "Mh Offer Name": "mh_offer_name",
        "Mh Offer Price": "mh_offer_price",

        "No of days": "no_of_days",

        "Partner Offer": "partner_offer",
        "Partner Offer Percentage": "partner_offer_percentage",
        "Partner Offer Percentage": "partner_offer_percentage",

        "Price After Discount": "price_after_discount",

        "Invoice Number": "invoice_number",
        "RozarPay Order Id": "rz_order_id",
        "RozarPay Payment Id": "rz_payment_id",
        "Room Price": "room_price",
        "MH Commission": "mh_commission",
        "Partner Share": "partner_share",
        "Total Amount": "total_price",
      },
      pagination1: {
        rowsPerPage: 50,
      },
    };
  },

  computed: {
    optionsFn2(d) {
      let fromDate = date.formatDate(
        this.booksetformdata.fromDate,
        "YYYY/MM/DD"
      );
      let today = date.formatDate(new Date(), "YYYY/MM/DD");

      return (d) => d >= fromDate && d <= today;
    },

    isAccommodationDataEmpty() {
      return this.booking_displayAll_rows.length === 0;
    },
    isTravelDataEmpty() {
      return this.Travelbooking_displayAll_rows.length === 0;
    },
    // isFoodDataEmpty() {
    //   return this.food_Cancellation_rows.length === 0;
    // },
    // isMedicalDataEmpty() {
    //   return this.medical_Cancellation_rows.length === 0;
    // },
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
      total_nights() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.roomNights_count),
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

      isCheckInOver() {
        const bookingItem = this.bookingItem;
        if (!bookingItem || !bookingItem.check_in) {
          return false;
        }

        const currentDate = new Date();
        const currentTimestamp = currentDate.getTime();
        const istOffset = 330 * 60 * 1000;
        const istTimestamp = currentTimestamp + istOffset;
        const istDate = new Date(istTimestamp);

        const day = istDate.getDate();
        const month = istDate.getMonth() + 1;
        const year = istDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        const checkinDateStr = bookingItem.check_in;
        const checkinDate = new Date(checkinDateStr);
        const checkinTimestamp = checkinDate.getTime();

        return checkinTimestamp < istTimestamp;
      },

      total_booking_amount() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.total_price),
          0
        );
      },
      partner_share111() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.partner_share),
          0
        );
      },
      mh_commission111() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.mh_commission),
          0
        );
      },
      totalroomNights_count() {
        return this.booking_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.roomNights_count),
          0
        );
      },
      datewise_total_nights() {
        return this.datewise_booking_rows.reduce(
          (total, row) => total + parseInt(row.no_of_days),
          0
        );
      },
      datewise_total_rooms() {
        return this.datewise_booking_rows.reduce(
          (total, row) => total + parseInt(row.room_booked_count),
          0
        );
      },
      datewise_totalroomNights_count() {
        return this.datewise_booking_rows.reduce(
          (total, row) => total + parseInt(row.roomNights_count),
          0
        );
      },
      datewise_total_guest() {
        return this.datewise_booking_rows.reduce(
          (total, row) => total + parseInt(row.guest_count),
          0
        );
      },
      datewise_total_booking_amount() {
        return this.datewise_booking_rows.reduce(
          (total, row) => total + parseInt(row.total_price),
          0
        );
      },

      mh_commission() {
        return this.datewise_booking_rows.reduce(
          (total, row) => total + parseInt(row.mh_commission),
          0
        );
      },
      partner_share() {
        return this.datewise_booking_rows.reduce(
          (total, row) => total + parseInt(row.partner_share),
          0
        );
      },

      property: (state) => state.dropdown.property_arr,
      admin_bookings_columns: (state) => state.booking.admin_bookings_columns,
      admin_Travelbookings_columns: (state) =>
        state.booking.admin_Travelbookings_columns,
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
      admin_Travelbooking_status_count: (state) =>
        state.adminDashboard.admin_Travelbooking_status_count,
      Travelbooking_displayAll_rows: (state) =>
        state.adminDashboard.Travelbooking_displayAll_rows,
      datewise_booking_rows: (state) =>
        state.adminDashboard.datewise_booking_rows,
      datewise_booking_columns: (state) =>
        state.adminDashboard.datewise_booking_columns,

      // financial_report_booking_rows: (state) =>
      // state.adminDashboard.financial_report_booking_rows,
      propertiesArr: (state) => state.dropdown.properties_arr_details_booking,
      admin_bookings_rows: (state) => state.booking.admin_bookings_rows,
    }),
    //...mapGetters("booking", ["booking_displayAll_rows"]),
    ...mapGetters("adminDashboard", ["admin_booking_status_count"]),
    ...mapGetters("adminDashboard", ["admin_Travelbooking_status_count"]),
    ...mapGetters("adminDashboard", ["booking_displayAll_rows"]),
    ...mapGetters("adminDashboard", ["Travelbooking_displayAll_rows"]),
    ...mapGetters("adminDashboard", ["datewise_booking_rows"]),
    // ...mapGetters("adminDashboard", ["financial_report_booking_rows"]),
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
    this.booksetformdata.fromDate = formattedFromDate;
    this.booksetformdata.toDate = formattedToDate;
    this.$store.dispatch("dropdown/loadPropertiesforadmin");
    this.$store.dispatch("booking/guestBookingDataForAdminLogin");
    this.$store.dispatch("adminDashboard/getadminBookingStatusCount");
    this.$store.dispatch("adminDashboard/getadminTravelBookingStatusCount");
    this.$store.dispatch("adminDashboard/getBookingAllDisplayForAdmin");
    this.$store.dispatch("adminDashboard/getTravelBookingAllDisplayForAdmin");
  },
  meta() {
    return {
      title: this.title,
      title1: this.title1,
    };
  },
  methods: {
    ...mapActions("adminDashboard", ["getadminBookingStatusCount"]),
    ...mapActions("adminDashboard", ["getadminTravelBookingStatusCount"]),
    ...mapActions("adminDashboard", ["getBookingAllDisplayForAdmin"]),
    ...mapActions("adminDashboard", ["getTravelBookingAllDisplayForAdmin"]),
    ...mapActions("adminDashboard", ["sendSMSToUserRoutes"]),
    ...mapActions("adminDashboard", ["sendSMSToPartnerRoutes"]),
    ...mapActions("adminDashboard", ["sendEmailToUserRoutes"]),
    ...mapActions("adminDashboard", ["sendEmailToPartnerRoutes"]),
    ...mapActions("adminDashboard", ["getDateWiseBookingTableForAdmin"]),
    ...mapActions("adminDashboard", ["getFinancialBookingTableForAdmin"]),

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
          console.log("url",this.url,file)
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
      console.log(this.bookingItem.food_details)

      this.bookingDataDialog = true;
    },
    selectbtn(btn) {
      this.selectedbtn = btn;
    },

    accomodationAllBooking() {
      this.accdata = true;
      this.traveldata = false;
      // this.fooddata = false;
      // this.medicaldata = false;
    },

    // FoodAllBooking() {
    //   this.accdata = false;
    //   this.traveldata = false;
    //   this.fooddata = true;
    //   this.medicaldata = false;
    // },
    TravelAllBooking() {
      this.accdata = false;
      this.traveldata = true;
      // this.fooddata = false;
      // this.medicaldata = false;
    },
    formatDateIn(date) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
      const year = date.getFullYear();
      return `${year}/${month}/${day}`;
    },
    // MedicalAllBooking() {
    //   this.accdata = false;
    //   this.traveldata = false;
    //   this.fooddata = false;
    //   this.medicaldata = true;
    // },
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
      this.tab = "guest";
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
    getClickableTravelBooking(item) {
      this.getTravelBookingAllDisplayForAdmin(item);
      this.Travelbooking_count_status = true;
    },
    getClickableAllBooking(item) {
      this.getBookingAllDisplayForAdmin(item);
      this.booking_count_status = true;
      this.isDateRangeActive = false;
    },
    sendSMSToUser() {
      let item = this.bookingItem;
      this.sendSMSToUserRoutes(item);
    },

    sendSMSToPartner() {
      let item = this.bookingItem;
      this.sendSMSToPartnerRoutes(item);
    },
    sendEmailToUser() {
      let item = this.bookingItem;
      this.sendEmailToUserRoutes(item);
    },
    sendEmailToPartner() {
      let item = this.bookingItem;
      this.sendEmailToPartnerRoutes(item);
    },
    closeDialog() {
      this.$refs.qDateProxyFromDate.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxyToDate.hide();
    },
    async loadDatewiseAccBookingTable() {
      this.isDateRangeActive = true;
      this.datewiseacctabledata = true;
      const payload = {
        fromDate: this.booksetformdata.fromDate,
        toDate: this.booksetformdata.toDate,
        property_name: this.booksetformdata.property_name,
      };
      this.$store.dispatch(
        "adminDashboard/getDateWiseBookingTableForAdmin",
        payload
      );
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },

    exportTable1111() {
      const content = [
        this.datewise_booking_columns.map((col) => wrapCsvValue(col.label)),
      ]
        .concat(
          this.datewise_booking_rows.map((row) =>
            this.datewise_booking_columns
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

    exportTable() {
      const content = [
        this.admin_bookings_columns.map((col) => wrapCsvValue(col.label)),
      ]
        .concat(
          this.booking_displayAll_rows.map((row) =>
            this.admin_bookings_columns
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

@media only screen and (min-width: 1920px) {
  .AccomBkgDetails {
    margin-left: 80px;
  }
  .AccomBkgTbl {
    margin-left: 77px;
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
