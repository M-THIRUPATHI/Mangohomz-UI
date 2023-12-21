<!--Mahi code starts from here  -->

<template>
  <q-page-container style="padding-top: 0px">

    <q-page>

      <div class="row q-col-gutter-sm q-ma-xs" style="padding-top: 80px">

        <div class="col-12" v-if="!isDateRangeActive">

          <subHeaderForAdmin />
          <q-card flat bordered class="bg-white">
            <q-table

              dense
              style="font-family: verdana;"
              :title="title"
              :data="mhsubscribers_data_rows"
              :columns="mhsubscribers_data_columns"
              :filter="filter"
              :selected.sync="selected"
              separator="cell"
              :pagination.sync="pagination"
              :hide-header="mode === 'grid'"
              :grid="mode === 'grid'"
            >
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    color="positive"
                    @click="editItem(props.row)"
                    label="View"
                    class="text-bold"
                    size="sm"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                  </q-btn>
                </q-td>
              </template>

              <template v-slot:top-right="props">
                <div
                  class="AccomBkgTbl"
                  style="
                  display: flex;
                  flex-direction: column
                  align-items: center;
                  margin-right: -50px;
                  margin-top: -10px;

                "
                >

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
                      v-model="EmailScanDateSet.fromDate"
                      style="width: 70%; font-size: 12px; margin-top: 20px"
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
                              v-model="EmailScanDateSet.fromDate"
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
                </div>
                <div
                class="AccomBkgTbl"
                style="
                  display: flex;
                  align-items: center;
                  margin-top: -10px;
                  margin-right: -50px;
                "
              >
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
                      v-model="EmailScanDateSet.toDate"
                      style="width: 70%; font-size: 12px; margin-top: 20px"
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
                              v-model="EmailScanDateSet.toDate"
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
                </div>

                <div
                  class="AccomBkgTbl"
                  style="display: flex; align-items: center; margin-top: 8px;"
                >
                  <q-btn
                    @click="loadAarthiScanDetails()"
                    style="margin-right: 100px "
                    color="primary"
                    label="Submit"
                    class="q-ml-md "
                    no-caps
                  />
                </div>


<!-- do insert excel here reddy -->
          <div
         class="AccomBkgTbl d-none d-md-block"
                  style="display: flex; align-items: center; margin-top: 8px;"
          >
          <q-input
            outlined
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
            style="width: 320px"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          </div>

          <div  class="AccomBkgTbl" style="
            display: flex;
            align-items: center;
            margin-right: 15px;
          ">
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
            :data="mhsubscribers_data_rows"

            worksheet="Email Subscriber Details"
            :name="`${excel_date}_EmailSubscriberDetails.xls`"
          >
            <q-icon color="primary" name="mdi-file-excel" size="22px" />
            <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
              >Download Excel
            </q-tooltip>
          </download-excel>
          </div>
              </template>

            </q-table>
          </q-card>
          <q-dialog
            v-model="aarthidetails"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-layout class="bg-white">
              <q-bar class="bg-primary text-white">
                <q-icon name="feed" />
                <div class="text-h6">
                  Aarthi Labs booking details:{{ editedItem.customer_name }}
                </div>
                <q-space />

                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card-section class="q-pa-xs">
                <q-form ref="aarthi labs form">
                  <div>
                    <q-card
                      class="bg-blue-grey-1 text-black"
                      style="width: 100%"
                    >
                      <q-card-section class="text-white">
                        <div class="q-gutter-xs row">
                          <q-icon
                            name="manage_accounts"
                            color="primary"
                            size="2em"
                          />
                          <div class="text-h6 text-black text-italic">
                            Aarthi Scan Booking Details
                          </div>
                        </div>

                        <div class="row">
                          <!-- <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Aarthi Scan Booking ID :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mh_aarthi_booking_id
                            }}</q-item-section>
                          </q-item>
                        </div> -->

                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                              style="
                                border: 2px solid #ccc;
                                border-radius: 4px;
                                width: 450px;
                              "
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                  >Aarthi Scan Booking ID:</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.mh_aarthi_booking_id }}</span
                                >
                                <span
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCode"
                                  style="font-size: 24px; line-height: 24px"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                              style="
                                border: 2px solid #ccc;
                                border-radius: 4px;
                                width: 350px;
                              "
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                  >Customer Name :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.customer_name }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCodename"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                >
                                  Mobile Number :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.mobile_number }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCodenumber"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>

                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                >
                                  Email ID :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.email_id }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCodeemail"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                >
                                  Age :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.customer_age }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCodeage"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                >
                                  Gender :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.gender }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCodegender"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                >
                                  City :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.city_name }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCodecity"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                >
                                  Center Name :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.aarthi_center_name }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="
                                    copyTestingCodecentername
                                  "
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                  >Appointment Date :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{ editedItem.test_date }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCodetestdate"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>



                          <div class="col-6 q-mt-lg">
                            <div
                              class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px"
                            >
                              <div style="display: flex; align-items: center">
                                <span
                                  class="title text-primary text-h6"
                                  style="margin-right: 10px"
                                  >Appointment Time :</span
                                >
                                <span
                                  class="text-dark text-h6"
                                  style="margin-right: 10px"
                                  >{{
                                    editedItem.testdetails &&
                                    editedItem.testdetails[0] &&
                                    editedItem.testdetails[0].test_time
                                  }}</span
                                >
                                <span
                                  style="font-size: 24px; line-height: 24px"
                                  class="copy-icon"
                                  @click.stop.prevent="copyTestingCodetesttime"
                                  >&#128203;</span
                                >
                              </div>
                            </div>
                          </div>


                        </div>
                        <table
                          style="
                            font-family: verdana;
                            font-size: 15px;
                            width: 100%;
                          "
                        >
                          <thead>
                            <tr>
                              <th
                                style="
                                  text-align: center;
                                  background-color: #3f51b5;
                                  color: white;
                                  font-weight: bold;
                                  border: 1px solid black;
                                "
                              >
                                Sno
                              </th>
                              <th
                                style="
                                  text-align: left;
                                  background-color: #3f51b5;
                                  color: white;
                                  font-weight: bold;
                                  border: 1px solid black;
                                "
                              >
                                Test Type
                              </th>
                              <th
                                style="
                                  text-align: center;
                                  background-color: #3f51b5;
                                  color: white;
                                  font-weight: bold;
                                  border: 1px solid black;
                                "
                              >
                                Test Name
                              </th>
                              <th
                                style="
                                  text-align: center;
                                  background-color: #3f51b5;
                                  color: white;
                                  font-weight: bold;
                                  border: 1px solid black;
                                "
                              >
                                Price
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, index) in editedItem.testdetails"
                              :key="index"
                            >
                              <td
                                style="
                                  text-align: center;
                                  color: black;
                                  border: 1px solid black;
                                "
                              >
                                {{ item.sno }}
                              </td>
                              <td
                                style="
                                  text-align: left;
                                  color: black;
                                  border: 1px solid black;
                                "
                              >
                                {{ item.test_type }}
                              </td>
                              <td
                                style="
                                  text-align: center;
                                  color: black;
                                  border: 1px solid black;
                                "
                              >
                                {{ item.test_name }}
                              </td>
                              <td
                                style="
                                  text-align: center;
                                  color: black;
                                  border: 1px solid black;
                                "
                              >
                                {{ item.price }}
                              </td>
                            </tr>
                            <tr>
                              <td
                                colspan="3"
                                style="
                                  text-align: right;
                                  font-weight: bold;
                                  color: black;
                                "
                              >
                                Total
                              </td>
                              <td style="text-align: center; color: black">
                                {{ rate }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </q-card-section>
                    </q-card>

                  </div>
                </q-form>
              </q-card-section>
            </q-layout>
          </q-dialog>
        </div>
        <div class="col-12" v-else>
          <q-card flat bordered class="bg-white">
            <q-table
              dense
              style="font-family: verdana"
              :title="title"
              :data="subscriber_date_wise_data_rows"
              :columns="subscriber_date_wise_data_columns"
              :filter="filter"
              :selected.sync="selected"
              separator="cell"
              :pagination.sync="pagination"
              :hide-header="mode === 'grid'"
              :grid="mode === 'grid'"
            >
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    color="positive"
                    @click="editItem(props.row)"
                    label="View"
                    class="text-bold"
                    size="sm"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                  </q-btn>
                </q-td>
              </template>
              <template v-slot:top-right="props">
                <div
                  class="AccomBkgTbl"
                  style="
                  display: flex;
                  flex-direction: column
                  align-items: center;
                  margin-right: -50px;
                  margin-top: -10px;

                "
                >
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
                    v-model="EmailScanDateSet.fromDate"
                    style="width: 70%; font-size: 12px; margin-top: 20px"
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
                            v-model="EmailScanDateSet.fromDate"
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
                </div>
                <div
                  class="AccomBkgTbl"
                  style="
                    display: flex;
                    align-items: center;
                    margin-top: -10px;
                    margin-right: -50px;
                  "
                >
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
                    v-model="EmailScanDateSet.toDate"
                    style="width: 70%; font-size: 12px; margin-top: 20px"
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
                            v-model="EmailScanDateSet.toDate"
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
                </div>
                <div
                class="AccomBkgTbl"
                style="display: flex; align-items: center; margin-top: 8px; margin-bottom:10px"
              >
                <q-btn
                  @click="loadAarthiScanDetails()"
                  style="margin-right: 100px "
                  color="primary"
                  label="Submit"
                  class="q-ml-md "
                  no-caps
                />
              </div>

<!-- do insert excel here reddy -->
        <div
        class="AccomBkgTbl col-12 col-md-3"
        style="
          display: flex;
          align-items: center;
          margin-top: 0px;
          margin-right: 15px;
        "
        >
        <q-input
          outlined
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
          style="width: 320px"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        </div>

        <div  class="AccomBkgTbl " style="
          display: flex;
          align-items: center;
          margin-right: 15px;
        ">
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
          :data="mhsubscribers_data_rows"

          worksheet="Email Subscriber Details"
          :name="`${excel_date}_EmailSubscriberDetails.xls`"
        >
          <q-icon color="primary" name="mdi-file-excel" size="22px" />
          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
            >Download Excel
          </q-tooltip>
        </download-excel>
        </div>


              </template>
            </q-table>
          </q-card>

        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { date } from "quasar";
import moment from "moment";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

export default {
  components: {
    subHeaderForAdmin,
  },
  data() {
    return {
      tab: "test",
      testdetails: [],
      isDateRangeActive: false,
      datewiseacctabledata: false,
      EmailScanDateSet: {
        fromDate: null,
        toDate: null,
      },

       excel_date: moment(new Date()).format("YYYY/MM/DD"),
      optionsFn(d) {
        return d <= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
      closeDialog() {
        this.$refs.qDateProxyFromDate.hide();
      },
      closeDialog1() {
        this.$refs.qDateProxyToDate.hide();
      },

      toDateOptions() {
        to_date_option = new Date();
        //console.log(to_date_option)
        return to_date_option;
      },

      testnamecolumn: [
        {
          name: "sno",
          label: "Sno",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "sno",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          headerClasses: "bg-indigo-10 text-white",
          name: "test_type",
          label: "Test Type",

          field: "test_type",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "test_name",
          headerClasses: "bg-indigo-10 text-white",
          label: "Test Name",
          align: "center",
          field: "test_name",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "price",
          headerClasses: "bg-indigo-10 text-white",
          label: "Price",
          align: "center",
          field: "price",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],
      title: "MH Email Subscriber Details",
      filter: "",
      selected: [],
      editedItem: "",
      aarthidetails: false,
      maximizedToggle: true,

      mode: "list",
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
    };
  },
  mounted() {
    this.$store.dispatch("adminDashboard/getSubscriberDetails");

    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    // Function to format a date as "yyyy/mm/dd"


    this.EmailScanDateSet.fromDate = this.formatDate(thirtyDaysAgo);
    this.EmailScanDateSet.toDate = this.formatDate(today);
  },
  computed: {
    optionsFn2(d) {
      let fromDate = date.formatDate(
        this.EmailScanDateSet.fromDate,
        "YYYY/MM/DD"
      );
      let today = date.formatDate(new Date(), "YYYY/MM/DD");
      //console.log(fromDate);
      //console.log(d)
      return (d) => d >= fromDate && d <= today;
    },

    ...mapState({
      rate() {
        if (
          this.editedItem.testdetails &&
          this.editedItem.testdetails.length > 0
        ) {
          return this.editedItem.testdetails.reduce(
            (total, row) => total + parseInt(row.price),
            0
          );
        } else {
          return 0;
        }
      },

      ...mapGetters("adminDashboard", ["mhsubscribers_data_rows"]),
      ...mapGetters("adminDashboard", ["subscriber_date_wise_data_rows"]),
      mhsubscribers_data_rows: (state) => state.adminDashboard.mhsubscribers_data_rows,
      mhsubscribers_data_columns: (state) => state.adminDashboard.mhsubscribers_data_columns,
      subscriber_date_wise_data_columns: (state) =>
        state.adminDashboard.subscriber_date_wise_data_columns,
      subscriber_date_wise_data_rows: (state) =>
        state.adminDashboard.subscriber_date_wise_data_rows,
    }),
  },
  methods: {
    ...mapActions("adminDashboard", ["getSubscriberDetails"]),
    ...mapActions("adminDashboard", ["getdatewiseSubscriberDetails"]),


    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}/${month}/${day}`;
    },

    async loadAarthiScanDetails() {
      this.isDateRangeActive = true;
      this.datewiseacctabledata = true;
      const payload = {
        fromDate: this.EmailScanDateSet.fromDate,
        toDate: this.EmailScanDateSet.toDate,
      };
      this.$store.dispatch("adminDashboard/getdatewiseSubscriberDetails", payload);
    },

    fromDateSelected() {
      // console.log("sasa",this.defaultItem.dateModel.from);
      this.EmailScanDateSet.toDate = this.EmailScanDateSet.fromDate;
    },
    toDateSelected() {
      // console.log("sasa",this.defaultItem.dateModel.from);
      this.EmailScanDateSet.toDate = this.EmailScanDateSet.toDate;
    },

    copyTestingCode() {
      const textToCopy = this.editedItem.mh_aarthi_booking_id;
      navigator.clipboard.writeText(textToCopy);
    },

    copyTestingCodename() {
      const textToCopyname = this.editedItem.customer_name;
      navigator.clipboard.writeText(textToCopyname);
    },
    copyTestingCodenumber() {
      const textToCopyname = this.editedItem.mobile_number;
      navigator.clipboard.writeText(textToCopyname);
    },
    copyTestingCodeemail() {
      const textToCopyemail = this.editedItem.email_id;
      navigator.clipboard.writeText(textToCopyemail);
    },
    copyTestingCodeage() {
      const textToCopyage = this.editedItem.customer_age;
      navigator.clipboard.writeText(textToCopyage);
    },
    copyTestingCodegender() {
      const textToCopygender = this.editedItem.gender;
      navigator.clipboard.writeText(textToCopygender);
    },
    copyTestingCodecity() {
      const textToCopycity = this.editedItem.city_name;
      navigator.clipboard.writeText(textToCopycity);
    },
    copyTestingCodecentername() {
      const textToCopycentername = this.editedItem.aarthi_center_name;
      navigator.clipboard.writeText(textToCopycentername);
    },
    copyTestingCodetestdate() {
      const textToCopytestdate = this.editedItem.test_date;
      navigator.clipboard.writeText(textToCopytestdate);
    },
    copyTestingCodetesttime() {
      const textToCopytestime =
        this.editedItem.testdetails &&
        this.editedItem.testdetails[0] &&
        this.editedItem.testdetails[0].test_time;
      navigator.clipboard.writeText(textToCopytestime);
    },
    editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.getAarthilabDetails(this.editedItem);
      this.aarthidetails = true;
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

<!-- Mahi code ends here -->
