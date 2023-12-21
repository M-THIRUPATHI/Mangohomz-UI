<template>
  <q-page style="padding-top: 20px" class="q-pa-sm">
    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_acc'"
    >
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row q-col-gutter-sm" style="padding-top: 50px">
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white"
          >
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email }}</b>
                </div>
                <q-space />
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 25px;
                    font-family: verdana;
                  "
                >
                  <p style="text-align: justify"><b>Operations </b></p>
                </div>
                <q-space />

                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>Account Id: {{ userDetails.account_id }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md">
          <q-card>
            <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
              <p
                class="q-pa-xs text-left text-bold"
                style="
                  text-align: justify;
                  font-size: 20px;
                  font-family: verdana;
                "
              >
                You are Partner With:
              </p>
              <q-btn
                push
                label="Accommodation"
                icon="mdi-domain"
                @click="accomodationdetails()"
                class="bg-primary text-white"
              />
              <q-btn
                push
                label="Food"
                icon="mdi-food-fork-drink"
                class="bg-primary text-white"
                @click="accFoodDetails()"
                v-if="userDetails.foodstatus == 'Approved'"
              />
              <q-btn
                push
                label="Travel"
                icon="mdi-car"
                class="bg-primary text-white"
                @click="accTravelDetails()"
                v-if="userDetails.travelstatus == 'Approved'"
              />
              <q-btn
                push
                label="Medical"
                icon="mdi-medical-bag"
                class="bg-primary text-white"
                @click="accMedicalDetails()"
                v-if="userDetails.medicalstatus == 'Approved'"
              />
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="accdata"
          v-if="accdata == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Accommodation:
                </p>
              </div>
            </q-card>
            <div class="row q-ma-md">
              <!-- <q-select
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="partnersArr"
                option-value="partner_id"
                option-label="agent_name"
                v-model="partnerDashboardData.partner_name"
                label="Select Partner"
                label-color="black"
                class="col-3 q-mr-sm"
                @input="loadSubPartners(partnerDashboardData.partner_name)"
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select> -->
              <q-select
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                option-value="partner_sub_id"
                option-label="agent_sub_name"
                :options="subPartnersArr"
                v-model="partnerDashboardData.partner_sub_name"
                label="Select Sub Partner"
                label-color="black"
                class="col-4 q-mr-sm"
                @input="loadProperties(partnerDashboardData)"
                ><template v-slot:prepend>
                  <q-icon
                    name="mdi-account-multiple"
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
                :options="propertiesArr"
                option-value="txn_id"
                option-label="sub_property_name"
                v-model="partnerDashboardData.property_name"
                label="Select Property"
                label-color="black"
                class="col-4 q-mr-sm"
                @input="showRoomsData()"
                ><template v-slot:prepend>
                  <q-icon
                    name="mdi-home-city-outline"
                    color="secondary"
                  /> </template
              ></q-select>
              <template>
                <q-toggle
                  v-model="visibleColumns"
                  checked-icon="check"
                  color="green"
                  unchecked-icon="clear"
                  class="col-3 q-mr-sm text-bold"
                  style="padding-left: 100px"
                  label="Edit Mode"
                  val="actions"
                />
              </template>
              <!-- <q-dialog v-model="showConfirmation">
      <q-card>
        <q-card-section>
          <q-item>
            <q-item-section>
              <span class="text-h6">Confirm Update</span>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-card-section>
          <q-item>
            <q-item-section>
              <span class="text-body">Are you sure you want to update?</span>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancel" color="primary" @click="showConfirmation = false" />
          <q-btn label="Update" color="positive" @click="update" />
        </q-card-actions>
      </q-card>
    </q-dialog> -->
            </div>

            <!-- Add DAshboard Worktable Data STArt-->

            <q-markup-table
              v-show="property_operation_roomupdate_row != ''"
              style="border: 1px solid black; max-width: min-content"
            >
              <tr>
                <th
                  class="text-right bg-green text-white"
                  style="
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                >
                  <b style="margin-right: -21px">Type of Room</b>
                </th>

                <td
                  class="bg-green"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                ></td>

                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.room_category }}

                  <q-btn
                    key="actions"
                    size="sm"
                    rounded
                    color="primary"
                    class="text-weight-bold q-ml-xl"
                    @click="openupdatePriceAvailabilitiesDialog(item)"
                    style="margin: 15px"
                    no-caps
                    :disable="!visibleColumns"
                    ><q-tooltip :disable="$q.platform.is.mobile"
                      >Update</q-tooltip
                    >Edit</q-btn
                  >
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-right bg-green text-white"
                  style="
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 20px;
                  "
                >
                  <b style="margin-right: -5px">Amenities</b>
                </th>
                <td
                  class="bg-green"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                ></td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.facilities }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-center bg-green text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  rowspan="2"
                >
                  <b>Max Capacity</b>
                </th>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 15px;
                  "
                >
                  <b>Adult</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  class="text-center text-bold"
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                >
                  {{ item.max_allow_adult }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 15px;
                  "
                >
                  <b>Kid less than 12 years</b>
                </td>

                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  class="text-center text-bold"
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                >
                  {{ item.max_allow_kids }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-center bg-green text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  rowspan="4"
                >
                  <b>Room Price</b>
                </th>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>AC</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  class="text-center text-bold"
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                >
                  {{ item.withac_withoutbreakfast_price }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>NON AC</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  class="text-center text-bold"
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                >
                  {{ item.withoutac_withoutbreakfast_price }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>AC+BREAKFAST</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                >
                  {{ item.withac_withbreakfast_price }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>NON AC + BREAKFAST</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  class="text-center text-bold"
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                >
                  {{ item.withoutac_withbreakfast_price }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-center bg-green text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  rowspan="2"
                >
                  <b>Room Price Calender</b>
                </th>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Date From</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.date_from }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Date To</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.date_to }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  style="
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  class="text-right bg-green text-white"
                >
                  <b style="margin-right: 37px">GST%</b>
                </th>
                <td
                  class="text-right bg-green text-black"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                ></td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.gst_per }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-center bg-green text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  rowspan="4"
                >
                  <b>Partner Offer If any in %</b>
                </th>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>AC</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  class="text-center text-bold"
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                >
                  {{ item.offer_ac }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>NON AC</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  class="text-center text-bold"
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                >
                  {{ item.offer_nonac }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>AC+BREAKFAST</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                >
                  {{ item.offer_ac_breakfast }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>NON AC + BREAKFAST</b>
                </td>
                <td
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                  class="text-center text-bold"
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                >
                  {{ item.offer_nonac_breakfast }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-center bg-green text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  rowspan="2"
                >
                  <b>Partner Offer Calender</b>
                </th>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Date From</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.offer_date_from }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Date To</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.offer_date_to }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-center bg-green text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  rowspan="3"
                >
                  <b>If booked for longer period offer in %</b>
                </th>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>10 Days</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.tendays_offer }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>20 Days</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.twentydays_offer }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>30 Days</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.thirtydays_offer }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-center bg-green text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  rowspan="2"
                >
                  <b>Booked for longer period Calender</b>
                </th>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Offer Applicable Date</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.offerApplicableFromDate }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Date To</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    border-bottom: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.offerApplicableToDate }}
                </td>
              </tr>
              &nbsp;
              <tr>
                <th
                  class="text-center bg-green text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 20px;
                  "
                  rowspan="3"
                >
                  <b>Capacity Condition</b>
                </th>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Adult</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.maximum_capacity_adults }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Kid less than 12 years</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.maximum_capacity_kids }}
                </td>
              </tr>

              <tr>
                <td
                  class="text-center bg-primary text-white"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 12px;
                    font-size: 12px;
                  "
                >
                  <b>Rates in all category increase in %</b>
                </td>
                <td
                  v-for="item in property_operation_roomupdate_row"
                  :key="item.txn_id"
                  class="text-center text-bold"
                  style="
                    border-right: 1px solid silver;
                    border-top: 1px solid silver;
                    padding-top: 15px;
                    font-size: 15px;
                  "
                >
                  {{ item.rate_incress }}
                </td>
              </tr>
            </q-markup-table>

            <!--Dashboard Start WorkTable Table data End -->
            <!--Open Dialog For Update Price and Availabilities With Other Room Details Start-->

            <q-dialog
              v-model="updatePriceAvailabilitiesDialog"
              maximized
              persistent
            >
              <q-layout view="Lhh lpR fff" container class="bg-white">
                <q-card>
                  <q-bar class="bg-indigo-9 text-white">
                    <q-icon name="edit" />
                    <div>
                      Update Price and Availabilities With Other Room Details
                    </div>
                    <q-space />
                    <q-btn
                      round
                      color="red"
                      icon="close"
                      v-close-popup
                      size="xs"
                    >
                      <q-tooltip>Close</q-tooltip>
                    </q-btn>
                  </q-bar>

                  <div
                    class="q-pa-md"
                    style="font-family: verdana; font-size: 15px"
                  >
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
                          icon="mdi-update"
                          name="availabilitiesandprice"
                          label="Update Price And Availabilities"
                          no-caps
                        />
                        <q-tab
                          no-caps
                          class="secondary"
                          icon="mdi-update"
                          name="otherroomdeatils"
                          label="Update Other Room Details"
                        />
                      </q-tabs>
                      <q-separator />
                      <q-tab-panels v-model="tab" animated>
                        <!--Update Price and Availabilities Start-->

                        <q-tab-panel name="availabilitiesandprice">
                          <div class="q-pa-md" style="padding-top: 0px">
                            <q-form ref="updateroomdetails">
                              <div class="row q-gutter-sm">
                                <q-bar
                                  class="row col-12"
                                  style="margin-bottom: 5px"
                                >
                                  <div class="text-bold text-black">
                                    Price and Availabilities Details
                                  </div>
                                </q-bar>
                                <div
                                  class="row items-start q-gutter-md"
                                  style="justify-content: center"
                                >
                                  <div class="row col-12">
                                    <q-select
                                      options-dense
                                      outlined
                                      class="col-6"
                                      use-input
                                      hide-selected
                                      fill-input
                                      label-color="black"
                                      style="width: 100px"
                                      :rules="[required('Year')]"
                                      v-model="selectedYear"
                                      :options="yearOptions"
                                      label="Year"
                                      emit-value
                                      map-options
                                      dense
                                    ></q-select>
                                    <q-select
                                      options-dense
                                      outlined
                                      class="col-6"
                                      use-input
                                      hide-selected
                                      fill-input
                                      label-color="black"
                                      style="width: 110px"
                                      :rules="[required('Month')]"
                                      v-model="selectedMonth"
                                      :options="monthOptions"
                                      label="Month"
                                      emit-value
                                      map-options
                                      dense
                                    ></q-select>
                                  </div>
                                  <div
                                    style="
                                      margin-top: 100px;
                                      margin-left: 100px;
                                    "
                                  >
                                    <div
                                      style="
                                        padding-bottom: 8px;
                                        margin-bottom: 15px;
                                      "
                                      class="text-bold"
                                      v-for="item in [
                                        'AC :',
                                        'NonAC :',
                                        'ACwith+Breakfast :',
                                        'NONAC+Breakfast :',
                                        'Avaliability AC :',
                                        'Avaliability Non AC :',
                                        'Avaliability AC+Breakfast :',
                                        'Avaliability Non AC+Breakfast :',
                                      ]"
                                      :key="item"
                                    >
                                      {{ item }}
                                    </div>
                                  </div>
                                  <div
                                    style="justify-content: center"
                                    class="columnfordate"
                                    v-for="(date, index) in dates111111111"
                                    :key="index"
                                  >
                                    <div
                                      class="date-wrapper"
                                      style="width: 100px; text-align: center"
                                    >
                                      <div class="week text-bold">
                                        {{ moment(date).format("ddd") }}
                                      </div>
                                      <div class="date text-bold">
                                        {{ date.getDate() }}
                                      </div>
                                      <div class="month text-bold">
                                        {{ moment(date).format("MMMM") }}

                                      </div>
                                    </div>
                                    <q-input
                                      dense
                                      outlined

                                      lazy-rules
                                      style="width: 100px; margin-bottom: 8px;text-align: center;"
                                      label-color="black"
                                      hide-bottom-space
                                      v-model="
                                      propertyoperation_room_avlprice_row.ac[`p${date.getDate()}`]
                                      "

                                    >
                                    </q-input>
                                    <q-input
                                      dense
                                      outlined
                                      lazy-rules
                                      style="width: 100px; margin-bottom: 8px"
                                      label-color="black"
                                      hide-bottom-space
                                      v-model="
                                      propertyoperation_room_avlprice_row.non_ac[`p${date.getDate()}`]
                                      "

                                    >
                                    </q-input>

                                    <q-input
                                      dense
                                      outlined
                                      lazy-rules
                                      style="width: 100px; margin-bottom: 8px"
                                      label-color="black"
                                      hide-bottom-space
                                      v-model="
                                      propertyoperation_room_avlprice_row.ac_breakfast[`p${date.getDate()}`]
                                      "

                                    >
                                    </q-input>
                                    <q-input
                                      dense
                                      outlined
                                      lazy-rules
                                      style="width: 100px; margin-bottom: 8px"
                                      label-color="black"
                                      hide-bottom-space
                                      v-model="
                                      propertyoperation_room_avlprice_row.non_ac_breakfast[`p${date.getDate()}`]
                                      "

                                    >
                                    </q-input>
                                    <q-input
                                      dense
                                      outlined
                                      lazy-rules
                                      style="width: 100px; margin-bottom: 8px"
                                      label-color="black"
                                      hide-bottom-space
                                      v-model="
                                      propertyoperation_room_avlprice_row.ac[`a${date.getDate()}`]
                                      "

                                    >
                                    </q-input>
                                    <q-input
                                      dense
                                      outlined
                                      lazy-rules
                                      style="width: 100px; margin-bottom: 8px"
                                      label-color="black"
                                      hide-bottom-space
                                      v-model="
                                      propertyoperation_room_avlprice_row.non_ac[`a${date.getDate()}`]
                                      "

                                    >
                                    </q-input>
                                    <q-input
                                      dense
                                      outlined
                                      lazy-rules
                                      style="width: 100px; margin-bottom: 8px"
                                      label-color="black"
                                      hide-bottom-space
                                      v-model="
                                      propertyoperation_room_avlprice_row.ac_breakfast[`a${date.getDate()}`]
                                      "


                                    >
                                    </q-input>
                                    <q-input
                                      dense
                                      outlined
                                      lazy-rules
                                      style="width: 100px; margin-bottom: 8px"
                                      label-color="black"
                                      hide-bottom-space
                                      v-model="
                                      propertyoperation_room_avlprice_row.non_ac_breakfast[`a${date.getDate()}`]
                                      "
                                    >
                                    </q-input>

                                    <q-btn
                                      style="
                                        margin-top: 15px;
                                        margin-left: 20px;
                                      "
                                      size="sm"
                                      label="Save"
                                      color="primary"
                                      class="text-weight-bold"
                                      @click="
                                        upDateDataPriceAndAvaliability(
                                          index,
                                          date
                                        )
                                      "
                                    ></q-btn>
                                  </div>
                                  <q-btn no-caps
                                    style="position: absolute; left: 195px;cursor: pointer;background-color: #afb0b0;margin-top: 90px;"
                                    @click="previousWeek"
                                  >
                                  &laquo; Previous
                                  </q-btn>
                                  <q-btn no-caps
                                    style="position: absolute; right: 0;background-color: #04AA6D;color: white;cursor: pointer;margin-top: 90px;"
                                    @click="nextWeek"
                                  >
                                    Next &raquo;
                                  </q-btn>

                                  <q-separator />
                                </div>
                              </div>
                            </q-form>

                            <!-- <q-card-actions align="right">
                              <q-btn
                                size="sm"
                                label="Cancel"
                                color="primary"
                                class="text-weight-bold"
                                @click="closeUpdateroomDialog"
                              ></q-btn>
                              <q-btn
                                size="sm"
                                label="Submit"
                                color="primary"
                                class="text-weight-bold"
                                @click="upDateData()"
                              ></q-btn>
                            </q-card-actions> -->
                          </div>
                        </q-tab-panel>

                        <!--Update Price and Availabilities End-->

                        <q-tab-panel name="otherroomdeatils">
                          <div class="q-pa-md" style="padding-top: 10px">
                            <q-card>
                              <q-card-section>
                                <q-form ref="updateroomdetails">
                                  <div class="row q-gutter-sm">
                                    <q-bar
                                      class="row col-12"
                                      style="margin-bottom: 5px"
                                    >
                                      <div class="text-bold text-black">
                                        Basic Details
                                      </div>
                                    </q-bar>
                                    <div class="row items-start q-gutter-md">
                                      <q-select
                                        dense
                                        options-dense
                                        outlined
                                        use-input
                                        hide-selected
                                        style="width: 250px"
                                        fill-input
                                        readonly
                                        v-model="editedRoomItem.room_category"
                                        label="Room Category*"
                                        label-color="black"
                                      >
                                        <template v-slot:no-option>
                                          <q-item>
                                            <q-item-section class="text-grey">
                                              No results
                                            </q-item-section>
                                          </q-item>
                                        </template>
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-home-circle"
                                            color="secondary"
                                          />
                                        </template>
                                      </q-select>
                                      <q-select
                                        dense
                                        options-dense
                                        outlined
                                        use-input
                                        hide-selected
                                        style="width: 250px"
                                        fill-input
                                        readonly
                                        v-model="editedRoomItem.room_type"
                                        label="Type of Room *"
                                        label-color="black"
                                        :rules="[required('Type of Room')]"
                                      >
                                        <template v-slot:no-option>
                                          <q-item>
                                            <q-item-section class="text-grey">
                                              No results
                                            </q-item-section>
                                          </q-item>
                                        </template>
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-home-circle"
                                            color="secondary"
                                          />
                                        </template>
                                      </q-select>
                                      <q-select
                                        dense
                                        options-dense
                                        outlined
                                        style="width: 250px"
                                        v-model="editedRoomItem.facilities"
                                        :options="amenitiesArr"
                                        option-label="amenity_name"
                                        option-value="amenity_id"
                                        multiple
                                        aria-checked
                                        use-input
                                        fill-input
                                        @input="
                                          getOtherAmenities(
                                            editedRoomItem.facilities
                                          )
                                        "
                                        label="Room Amenities"
                                        label-color="black"
                                        :rules="[required('Facilities')]"
                                      >
                                        <template v-slot:no-option>
                                          <q-item>
                                            <q-item-section class="text-grey">
                                              No results
                                            </q-item-section>
                                          </q-item>
                                        </template>
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-home-city"
                                            color="secondary"
                                          />
                                        </template>
                                      </q-select>
                                      <q-input
                                        v-if="otheramenitiesinput == true"
                                        dense
                                        outlined
                                        v-model="editedRoomItem.other_amenities"
                                        label="Other Room Amenities"
                                        lazy-rules
                                        style="width: 190px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[required('Room Amenities')]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-home-city"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                      <q-input
                                        dense
                                        outlined
                                        label="No.of Available Rooms"
                                        v-model="
                                          editedRoomItem.no_of_avail_rooms
                                        "
                                        label-color="black"
                                        hide-bottom-space
                                        style="width: 250px"
                                        :rules="[
                                          required(
                                            'No.of Available Rooms',
                                            number()
                                          ),
                                        ]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-door"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                    </div>
                                    <q-bar
                                      class="row col-12"
                                      style="margin-bottom: 5px"
                                    >
                                      <div class="text-bold text-black">
                                        Maximum Capacity
                                      </div>
                                    </q-bar>
                                    <div class="row items-start q-gutter-md">
                                      <q-input
                                        dense
                                        outlined
                                        v-model="editedRoomItem.max_allow_adult"
                                        label="Adult Allowed"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[
                                          required('Adult Allowed'),
                                          number(),
                                        ]"
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
                                        v-model="editedRoomItem.max_allow_kids"
                                        label="kids Allowed"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[
                                          required('Adult Allowed'),
                                          number(),
                                        ]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-human-child"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                      <q-input
                                        dense
                                        outlined
                                        v-model="editedRoomItem.gst_per"
                                        label="Gst % *"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[required('GST %'), number()]"
                                      >
                                      </q-input>
                                    </div>

                                    <!-- <q-select
                          dense
                          options-dense
                          outlined
                          use-input
                          hide-selected
                          style="width: 250px"
                          fill-input
                          readonly
                          v-model="editedRoomItem.gst_per"
                          label="Gst % *"
                          label-color="black"
                          :rules="[required('Type of Room')]"
                        >
                          <template v-slot:no-option>
                            <q-item>
                              <q-item-section class="text-grey">
                                No results
                              </q-item-section>
                            </q-item>
                          </template>
                          <template v-slot:prepend>
                            <q-icon name="mdi-home-circle" color="secondary" />
                          </template>
                        </q-select> -->
                                    <q-bar
                                      class="row col-12"
                                      style="margin-bottom: 5px"
                                    >
                                      <div class="text-bold text-black">
                                        Room Price Calender
                                      </div>
                                    </q-bar>
                                    <div class="row items-start q-gutter-md">
                                      <q-input
                                        dense
                                        outlined
                                        v-model="editedRoomItem.date_from"
                                        clearable
                                        label="Date From"
                                        label-color="black"
                                        clear-icon="close"
                                        hide-bottom-space
                                        minimal
                                        @click="$refs.qDateProxy.show()"
                                        style="width: 250px"
                                      >
                                        <template v-slot:append>
                                          <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                          >
                                            <q-popup-proxy
                                              ref="qDateProxy"
                                              transition-show="scale"
                                              transition-hide="scale"
                                            >
                                              <q-date
                                                v-model="
                                                  editedRoomItem.date_from
                                                "
                                                mask="DD/MM/YYYY"
                                                @input="closeDialog"
                                              >
                                                <div
                                                  class="row items-center justify-end"
                                                >
                                                  <q-btn
                                                    v-close-popup
                                                    label="Close"
                                                    color="primary"
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
                                        v-model="editedRoomItem.date_to"
                                        label="Date To"
                                        label-color="black"
                                        clear-icon="close"
                                        minimal
                                        @click="$refs.qDateProxy1.show()"
                                        style="width: 250px"
                                      >
                                        <template v-slot:append>
                                          <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                          >
                                            <q-popup-proxy
                                              ref="qDateProxy1"
                                              minimal
                                              transition-show="scale"
                                              transition-hide="scale"
                                            >
                                              <q-date
                                                v-model="editedRoomItem.date_to"
                                                minimal
                                                mask="DD/MM/YYYY"
                                                @input="closeDialog1"
                                              >
                                                <div
                                                  class="row items-center justify-end"
                                                >
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
                                    <q-bar
                                      class="row col-12"
                                      style="margin-bottom: 5px"
                                    >
                                      <div class="text-bold text-black">
                                        Standard Offer Any In %
                                      </div>
                                    </q-bar>
                                    <div class="row items-start q-gutter-md">
                                      <q-input
                                        dense
                                        outlined
                                        v-model="editedRoomItem.offer_nonac"
                                        label="Non AC Price"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[required('Price'), number()]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-currency-inr"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                      <q-input
                                        dense
                                        outlined
                                        v-model="
                                          editedRoomItem.offer_nonac_breakfast
                                        "
                                        label="Non AC + BreakFast Price"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[required('Price'), number()]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-currency-inr"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                      <q-input
                                        dense
                                        outlined
                                        v-model="editedRoomItem.offer_ac"
                                        label="AC"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[required('Price'), number()]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-currency-inr"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                      <q-input
                                        dense
                                        outlined
                                        v-model="
                                          editedRoomItem.offer_ac_breakfast
                                        "
                                        label="AC + BreakFast"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[required('Price'), number()]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-currency-inr"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                    </div>
                                    <q-bar
                                      class="row col-12"
                                      style="margin-bottom: 5px"
                                    >
                                      <div class="text-bold text-black">
                                        Partner Calender For Offer
                                      </div>
                                    </q-bar>
                                    <div class="row items-start q-gutter-md">
                                      <q-input
                                        dense
                                        outlined
                                        v-model="editedRoomItem.offer_date_from"
                                        clearable
                                        label="Offer From Date"
                                        label-color="black"
                                        clear-icon="close"
                                        hide-bottom-space
                                        minimal
                                        @click="$refs.qDateProxy.show()"
                                        style="width: 250px"
                                      >
                                        <template v-slot:append>
                                          <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                          >
                                            <q-popup-proxy
                                              ref="qDateProxy"
                                              transition-show="scale"
                                              transition-hide="scale"
                                            >
                                              <q-date
                                                v-model="
                                                  editedRoomItem.offer_date_from
                                                "
                                                mask="DD/MM/YYYY"
                                                @input="closeDialog"
                                              >
                                                <div
                                                  class="row items-center justify-end"
                                                >
                                                  <q-btn
                                                    v-close-popup
                                                    label="Close"
                                                    color="primary"
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
                                        v-model="editedRoomItem.offer_date_to"
                                        clearable
                                        label="Offer TO Date"
                                        label-color="black"
                                        clear-icon="close"
                                        minimal
                                        @click="$refs.qDateProxy1.show()"
                                        style="width: 250px"
                                      >
                                        <template v-slot:append>
                                          <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                          >
                                            <q-popup-proxy
                                              ref="qDateProxy1"
                                              minimal
                                              transition-show="scale"
                                              transition-hide="scale"
                                            >
                                              <q-date
                                                v-model="
                                                  editedRoomItem.offer_date_to
                                                "
                                                minimal
                                                mask="DD/MM/YYYY"
                                                @input="closeDialog1"
                                              >
                                                <div
                                                  class="row items-center justify-end"
                                                >
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
                                    <q-bar
                                      class="row col-12"
                                      style="margin-bottom: 5px"
                                    >
                                      <div class="text-bold text-black">
                                        If Booked for Longer Period Offer in %
                                      </div>
                                    </q-bar>
                                    <div class="row items-start q-gutter-md">
                                      <q-input
                                        dense
                                        outlined
                                        v-model="editedRoomItem.tendays_offer"
                                        label="10 Days"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-calendar-today"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                      <q-input
                                        dense
                                        outlined
                                        v-model="
                                          editedRoomItem.twentydays_offer
                                        "
                                        label="20 Days"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-calendar-today"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                      <q-input
                                        dense
                                        outlined
                                        v-model="
                                          editedRoomItem.thirtydays_offer
                                        "
                                        label="30 Days"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-calendar-today"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                    </div>
                                    <q-bar
                                      class="row col-12"
                                      style="margin-bottom: 5px"
                                    >
                                      <div class="text-bold text-black">
                                        Rate Card Calender For Longer Period
                                      </div>
                                    </q-bar>
                                    <div class="row items-start q-gutter-md">
                                      <q-input
                                        dense
                                        outlined
                                        v-model="
                                          editedRoomItem.offerApplicableFromDate
                                        "
                                        clearable
                                        label="Offer Applicable Form Date"
                                        label-color="black"
                                        clear-icon="close"
                                        hide-bottom-space
                                        minimal
                                        @click="$refs.qDateProxy1.show()"
                                        style="width: 250px"
                                      >
                                        <template v-slot:append>
                                          <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                          >
                                            <q-popup-proxy
                                              ref="qDateProxy1"
                                              minimal
                                              transition-show="scale"
                                              transition-hide="scale"
                                            >
                                              <q-date
                                                v-model="
                                                  editedRoomItem.offerApplicableFromDate
                                                "
                                                minimal
                                                mask="DD/MM/YYYY"
                                                @input="closeDialog1"
                                              >
                                                <div
                                                  class="row items-center justify-end"
                                                >
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
                                        v-model="
                                          editedRoomItem.offerApplicableToDate
                                        "
                                        label="Offer Applicable TO Date"
                                        label-color="black"
                                        clear-icon="close"
                                        minimal
                                        @click="$refs.qDateProxy1.show()"
                                        style="width: 250px"
                                      >
                                        <template v-slot:append>
                                          <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                          >
                                            <q-popup-proxy
                                              ref="qDateProxy1"
                                              minimal
                                              transition-show="scale"
                                              transition-hide="scale"
                                            >
                                              <q-date
                                                v-model="
                                                  editedRoomItem.offerApplicableToDate
                                                "
                                                minimal
                                                mask="DD/MM/YYYY"
                                                @input="closeDialog1"
                                              >
                                                <div
                                                  class="row items-center justify-end"
                                                >
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
                                    <q-bar
                                      class="row col-12"
                                      style="margin-bottom: 5px"
                                    >
                                      <div class="text-bold text-black">
                                        Maximum Capacity Condition
                                      </div>
                                    </q-bar>
                                    <div class="row items-start q-gutter-md">
                                      <q-input
                                        dense
                                        outlined
                                        v-model="
                                          editedRoomItem.maximum_capacity_adults
                                        "
                                        label="Adult Allowed"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[
                                          required('Adult Allowed'),
                                          number(),
                                        ]"
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
                                        v-model="
                                          editedRoomItem.maximum_capacity_kids
                                        "
                                        label="kids Allowed"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[
                                          required('Adult Allowed'),
                                          number(),
                                        ]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-human-child"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                      <q-input
                                        dense
                                        outlined
                                        v-model="editedRoomItem.rate_incress"
                                        label="Rate in all category incress in %"
                                        lazy-rules
                                        style="width: 250px"
                                        label-color="black"
                                        hide-bottom-space
                                        :rules="[required('Price'), number()]"
                                      >
                                        <template v-slot:prepend>
                                          <q-icon
                                            name="mdi-currency-inr"
                                            color="secondary"
                                          /> </template
                                      ></q-input>
                                    </div>
                                  </div>
                                </q-form>
                              </q-card-section>
                              <q-card-actions align="right">
                                <q-btn
                                  size="sm"
                                  label="Cancel"
                                  color="primary"
                                  class="text-weight-bold"
                                  @click="closeUpdateroomDialog"
                                ></q-btn>
                                <q-btn
                                  size="sm"
                                  label="Submit"
                                  color="primary"
                                  class="text-weight-bold"
                                  @click="upDateData()"
                                ></q-btn>
                              </q-card-actions>
                            </q-card>
                          </div>
                        </q-tab-panel>
                      </q-tab-panels>
                    </q-card>
                  </div>
                </q-card>
              </q-layout>
            </q-dialog>

            <!--Open Dialog For Update Price and Availabilities With Other Room Details End-->

            <div
              class="row q-ma-md"
              v-show="this.partnerDashboardData.partner_name != ''"
            >
              <!-- <div
                class="col-3 text-bold"
                v-show="this.partnerDashboardData.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.partnerDashboardData.partner_name.agent_name
                }}</span>
              </div> -->
              <!-- <div
                class="col-3 text-bold"
                v-show="this.partnerDashboardData.partner_sub_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.partnerDashboardData.partner_sub_name.agent_sub_name
                }}</span>
              </div> -->
            </div>
            <div class="row q-ma-md">
              <!-- <div
                class="col-7 text-bold"
                v-show="this.partnerDashboardData.partner_sub_name != ''"
              >
                Partner Address :
                <span class="text-grey"
                  >{{ this.partnerDashboardData.partner_sub_name.building_no }},
                  {{ this.partnerDashboardData.partner_sub_name.street }},
                  {{ this.partnerDashboardData.partner_sub_name.land_mark }},
                  {{ this.partnerDashboardData.partner_sub_name.city }},
                  {{ this.partnerDashboardData.partner_sub_name.state }},
                  {{ this.partnerDashboardData.partner_sub_name.country }} -
                  {{
                    this.partnerDashboardData.partner_sub_name.pin_code
                  }}</span
                >
              </div> -->
              <!-- <div
                class="col-5 text-bold"
                v-show="this.partnerDashboardData.property_name != ''"
              >
                Property Name :
                <span class="text-grey">{{
                  this.partnerDashboardData.property_name.sub_property_name
                }}</span>
              </div> -->
            </div>
            <q-card-section class="text-h6 text-white">
              <div class="row">
                <div class="col-9">
                  <!-- <q-table
                    :data="hotelData_rows"
                    :columns="hotelData_columns"
                    :pagination.sync="pagination"
                    v-show="this.partnerDashboardData.property_name != ''"
                    dense
                    separator="cell"
                    :selected.sync="selected"
                    color="green"
                  >
                    <template v-slot:body-cell-schedule="props">
                      <q-td :props="props">
                        <q-btn
                          no-caps
                          dense
                          class="text-bold text-body2"
                          color="secondary"
                          label="Schedule"
                          outline
                          @click="openRoomScheduleDialog(props.row)"
                        >
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table> -->
                  <!-- <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th auto-width />
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="secondary"
                      round
                      dense
                      @click="props.expand = !props.expand"
                      :icon="props.expand ? 'remove' : 'add'"
                    />
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
                    <q-card-section class="q-pa-none">
                      <div class="row q-gutter-sm">
                        <div class="text-black text-left float-left">
                          This is expand slot for row above:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.room_type }}.
                        </div>
                      </div>
                      <div class="row q-gutter-sm">
                        <div class="text-black text-bold text-left">
                          Availability :-
                        </div>
                        <div class="text-black text-left">
                          From Data:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.date_from }};
                        </div>
                        <div class="text-black text-left">
                          To Date:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.date_to }}
                        </div>
                        <div class="text-black text-left">
                          <q-icon
                            name="event"
                            class="cursor-pointer"
                            size="1.5em"
                            @click="getAttrs(item)"
                          >
                            <q-popup-proxy
                              ref="qDateProxy"
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                minimal
                                range
                                @input="closeDialog"
                                mask="DD/MM/YYYY"
                              >
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </div>
                      </div>
                    </q-card-section>
                  </q-td>
                </q-tr>
              </template> -->
                </div>
                <q-card class="col-2 q-ml-sm" v-if="hotelData_rows.length > 0">
                  <q-card-section
                    class="q-pa-none text-center"
                    v-show="this.partnerDashboardData.property_name != ''"
                  >
                    <div
                      class="text-bold text-white bg-indigo-10 q-pa-xs"
                      style="font-size: 13px"
                    >
                      Property Amenities
                    </div>
                    <q-list
                      v-for="item in hotelData_rows[0].property_amenity_name"
                      :key="item.name"
                    >
                      <q-item dense>
                        <q-item-section avatar class="text-right">
                          <q-icon color="secondary" :name="item.icon" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label
                            class="text-black text-left"
                            style="font-size: 12px"
                            >{{ item.name }}
                          </q-item-label>
                        </q-item-section>
                        <!-- <q-item-section avatar>
                        <q-icon
                          color="secondary"
                          :name="mdi - check - circle"
                        />
                      </q-item-section> -->
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="accfood"
          v-if="accfood == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Food:
                </p>
              </div>
            </q-card>

            <div class="q-pa-md row q-gutter-md">
              <q-select
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="partnersArr"
                option-value="partner_id"
                option-label="agent_name"
                v-model="partnerDashboardData.partner_name"
                label="Select Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                class="col-3 q-mr-sm"
                @input="
                  loadaccfoodSubPartnerNames(partnerDashboardData.partner_name);
                  emptyPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodSubPartnerArr"
                option-value="partner_sub_id"
                option-label="agent_sub_name"
                v-model="foodDashboard.partner_sub_name"
                label="Select Sub Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadrestaurantDetails(foodDashboard.partner_sub_name)"
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="restaurantArr"
                option-value="name_of_kitchen"
                option-label="name_of_kitchen"
                v-model="foodDashboard.restaurant_name"
                label="Select Restaurant *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadFoodDetails(foodDashboard.restaurant_name)"
                ><template v-slot:prepend>
                  <q-icon
                    name="mdi-home-city-outline"
                    color="secondary"
                  /> </template
              ></q-select>
            </div>
            <div
              class="row q-ma-md"
              v-show="this.partnerDashboardData.partner_name != ''"
            >
              <div
                class="col-3 text-bold"
                v-show="this.partnerDashboardData.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.partnerDashboardData.partner_name.agent_name
                }}</span>
              </div>
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_sub_name.agent_sub_name
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-7 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Partner Address :
                <span class="text-grey"
                  >{{ this.foodDashboard.partner_sub_name.building_no }},
                  {{ this.foodDashboard.partner_sub_name.street }},
                  {{ this.foodDashboard.partner_sub_name.land_mark }},
                  {{ this.foodDashboard.partner_sub_name.city }},
                  {{ this.foodDashboard.partner_sub_name.state }},
                  {{ this.foodDashboard.partner_sub_name.country }} -
                  {{ this.foodDashboard.partner_sub_name.pin_code }}</span
                >
              </div>

              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Kitchen Name :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.name_of_kitchen
                }}</span>
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Kitchen Type :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.type_of_kitchen
                }}</span>
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Fssai No :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.fssai_no
                }}</span>
              </div>
            </div>
            <div
              class="q-pa-md text-h6 text-white"
              style="padding-top: 35px; width: 100%"
            >
              <q-table
                :data="foodDetails_rows"
                :columns="food_columns"
                :pagination.sync="pagination"
                dense
                row-key="index"
                separator="cell"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'red'
                          : 'negative'
                      "
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      dense
                      v-model="foodStatusToggle"
                      clickable
                      @click="foodCount(props.row)"
                      >{{ props.row.status }}
                    </q-chip>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="acctravel"
          v-if="acctravel == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Travel:
                </p>
              </div>
            </q-card>
            <div class="row q-ma-md">
              <div class="q-pa-md row q-gutter-md" style="height: 100px">
                <q-select
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="partnersArr"
                  option-value="partner_id"
                  option-label="agent_name"
                  v-model="partnerDashboardData.partner_name"
                  label="Select Partner *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 5px"
                  class="col-3 q-mr-sm"
                  @input="
                    loadAccTravelSubpartnerNames(
                      partnerDashboardData.partner_name
                    );
                    emptysubPartnerNames();
                  "
                  ><template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-select>
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="travelsubPartnerArr"
                  option-value="partner_sub_id"
                  option-label="agent_sub_name"
                  v-model="travelDetails.sub_partner_name"
                  label="SubPartner Name *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 5px"
                  @input="
                    getAccTransportforOperationDetails(
                      travelDetails.sub_partner_name
                    )
                  "
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-select>
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="acctransportoperation_item_rows"
                  option-value="transport_sub_id"
                  option-label="transport_company_name"
                  v-model="travelDetails.company_name"
                  label="Transport Company Name*"
                  label-color="black"
                  style="width: 250px; padding-bottom: 5px"
                  @input="loadTravelDetails(travelDetails.company_name)"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-select>
              </div>
              <div
                class="q-pa-md text-h6 text-white"
                style="padding-top: 35px; width: 100%"
              >
                <q-table
                  :data="travel_item_rows"
                  :columns="travel_columns"
                  dense
                  separator="cell"
                  row-key="index"
                  :pagination.sync="pagination"
                  :grid="mode === 'grid'"
                  :filter="filter"
                  :selected.sync="selected"
                  color="green"
                  v-show="this.travelDetails.company_name != ''"
                >
                  <template v-slot:body-cell-status="props">
                    <q-tr :props="props">
                      <q-chip
                        dense
                        :color="
                          props.row.status == 'yes'
                            ? 'green'
                            : props.row.status == 'no'
                            ? 'red'
                            : 'negative'
                        "
                        text-color="white"
                        class="text-bold q-pa-sm"
                        square
                        outline
                        v-model="TravelStatuschip"
                        @click="travelstatus(props.row)"
                        clickable
                        >{{ props.row.status }}</q-chip
                      >
                    </q-tr>
                  </template>
                </q-table>
              </div>
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="accmedical"
          v-if="accmedical == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Medical:
                </p>
              </div>
            </q-card>
            <div class="row q-ma-md">
              <div class="q-pa-md row q-gutter-md" style="height: 100px">
                <q-select
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="partnersArr"
                  option-value="partner_id"
                  option-label="agent_name"
                  v-model="partnerDashboardData.partner_name"
                  label="Select Partner *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 5px"
                  class="col-3 q-mr-sm"
                  @input="
                    loadAccEquipmentSubpartnerNames(
                      partnerDashboardData.partner_name
                    );
                    emptyequipmentsubPartnerNames();
                  "
                  ><template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-select>
                <!-- <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="equipmentPartnerArr"
                option-value="equipment_id"
                option-label="agent_name"
                v-model="equipmentDetails.partner_name"
                label="Partner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="
                  loadEquipmentSubpartnerNames(equipmentDetails.partner_name);
                  emptyequipmentsubPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select> -->
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="equipmentsubPartnerArr"
                  option-value="partner_sub_id"
                  option-label="agent_sub_name"
                  v-model="partnerDashboardData.sub_partner_name"
                  label="SubPartner Name *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 32px"
                  @input="
                    loadmedicalstoreDetails(
                      partnerDashboardData.sub_partner_name
                    )
                  "
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-select>
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="equipmentnameArr"
                  option-value="equipment_sub_id"
                  option-label="medical_store_name"
                  v-model="partnerDashboardData.equipment_name"
                  label="Select Medical Store*"
                  label-color="black"
                  style="width: 250px; padding-bottom: 32px"
                  @input="
                    loadEquipmentDetails(partnerDashboardData.equipment_name)
                  "
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-select>
              </div>
              <div
                class="row q-ma-md"
                v-show="this.partnerDashboardData.equipment_name != ''"
              >
                <div
                  class="col-3 text-bold"
                  v-show="this.partnerDashboardData.equipment_name != ''"
                >
                  Partner Name :
                  <span class="text-grey">{{
                    this.partnerDashboardData.partner_name.agent_name
                  }}</span>
                </div>
              </div>

              <div
                class="q-pa-md text-h6 text-white"
                style="padding-top: 35px; width: 100%"
              >
                <q-table
                  :data="equipment_item_rows"
                  v-show="this.partnerDashboardData.equipment_name != ''"
                  :columns="medical_columns"
                  dense
                  separator="cell"
                  :pagination.sync="pagination"
                  :grid="mode === 'grid'"
                  :filter="filter"
                  :selected.sync="selected"
                  color="green"
                >
                  <template v-slot:body-cell-status="props">
                    <q-tr :props="props">
                      <q-chip
                        dense
                        :color="
                          props.row.status == 'yes'
                            ? 'green'
                            : props.row.status == 'no'
                            ? 'red'
                            : 'negative'
                        "
                        text-color="white"
                        class="text-bold q-pa-sm"
                        square
                        outline
                        v-model="EquipmentStatuschip"
                        @click="equipmentStatusCount(props.row)"
                        clickable
                        >{{ props.row.status }}</q-chip
                      >
                    </q-tr>
                  </template>
                </q-table>
              </div>
            </div>
          </q-card>
        </div>
      </q-card>
      <!-- <q-dialog
        v-model="roomScheduleDialog"
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="FormBasic" class="q-gutter-xs">
            <q-card>
              <q-toolbar class="bg-secondary">
                <q-toolbar-title class="text-h6 text-bold text-white"
                  >Schedule Your Room Availability
                  {{
                    this.partnerDashboardData.property_name.sub_property_name
                  }}</q-toolbar-title
                >
                <q-btn
                  icon="mdi-close"
                  dense
                  flat
                  color="white"
                  @click="showDialogPopup"
                />
              </q-toolbar>
              <q-card-section class="row">
                <q-chip
                  clickable
                  color="secondary"
                  text-color="white"
                  icon="add"
                  class="text-weight-bold"
                  @click="OpenAddDialog()"
                >
                  Bulk Inventory
                </q-chip>
                <q-dialog v-model="addDataDialog" maximized persistent>
                  <q-card>
                    <q-bar class="bg-primary">
                      <div class="text-h6 text-white">{{ title }}</div>
                      <q-space />
                      <q-btn
                        dark
                        flat
                        icon="close"
                        color="white"
                        @click="closeAddPartnerDialog"
                      >
                        <q-tooltip>close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <div
                      class="row justify-content-end"
                      style="padding-left: 20px; padding-top: 20px"
                    >
                      <q-btn
                        color="primary"
                        label="Bulk Inventory"
                        style="width: 150px"
                      />
                      <q-btn
                        color="green"
                        label="Bulk Rates"
                        style="width: 150px"
                      />
                    </div>
                  </q-card>
                </q-dialog>

                <q-card
              v-if="room_availability.selected_date != ''"
              class="col-5 q-mt-lg"
            >
              <div class="row q-ma-sm">
                <q-input
                  class="col-4 q-mr-sm"
                  dense
                  outlined
                  v-model="room_availability.selected_date"
                  label="Selected Date"
                  hide-bottom-space
                  label-color="black"
                  readonly
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-calendar" color="secondary" /> </template
                ></q-input>
                <q-select
                  class="col-5 q-mr-sm"
                  v-model="room_availability.availability_count"
                  :options="room_availability_arr"
                  dense
                  outlined
                  label="Select Availability Count"
                >
                </q-select>
                <q-btn
                class="col-2 text-bold"
                color="secondary"
                label="Submit"
                @click="submitRoomAvailabilityData"
                >
                </q-btn>
              </div>
            </q-card>
              </q-card-section>
              <div class="row justify-center">
            <q-btn label="Preview" outline class="text-bold text-secondary" @click="previewSelectedDates()" />
          </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog> -->
      <!-- <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="q-mx-lg">
            <div class="text-h6 q-ml-sm">
              Your Selected dates will be deleted
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Ok" color="primary" @click="backToDashboard()" />
          </q-card-actions>
        </q-card>
      </q-dialog> -->
    </div>
    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_food'"
    >
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row q-col-gutter-sm" style="padding-top: 50px">
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white"
          >
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email }}</b>
                </div>
                <q-space />
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 25px;
                    font-family: verdana;
                  "
                >
                  <p style="text-align: justify"><b>Operations </b></p>
                </div>
                <q-space />

                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>Account Id: {{ userDetails.account_id }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
                <p
                  class="q-pa-xs text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  You are Partner With:
                </p>
                <q-btn
                  push
                  label="Accommodation"
                  icon="mdi-domain"
                  @click="foodaccomodationdetails()"
                  v-if="userDetails.accstatus == 'Approved'"
                  class="bg-primary text-white"
                />
                <q-btn
                  push
                  label="Food"
                  icon="mdi-food-fork-drink"
                  class="bg-primary text-white"
                  @click="FoodpartnerDetails()"
                />
                <q-btn
                  push
                  label="Travel"
                  icon="mdi-car"
                  class="bg-primary text-white"
                  @click="foodTravelDetails()"
                  v-if="userDetails.travelstatus == 'Approved'"
                />
                <q-btn
                  push
                  label="Medical"
                  icon="mdi-medical-bag"
                  class="bg-primary text-white"
                  @click="foodMedicalDetails()"
                  v-if="userDetails.medicalstatus == 'Approved'"
                />
              </div>
            </q-card>
          </div>
        </q-card>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="foodacc"
          v-if="foodacc == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Accommodation:
                </p>
              </div>
            </q-card>
            <div class="row q-ma-md">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodPartnerArr"
                option-value="partner_id"
                option-label="agent_name"
                v-model="foodDashboard.partner_name"
                label="Select Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadFoodSubPartnerNames(foodDashboard.partner_name)"
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                option-value="agent_sub_id"
                option-label="agent_sub_name"
                :options="foodSubPartnerArr"
                v-model="foodDashboard.partner_sub_name"
                label="Select Sub Partner"
                label-color="black"
                class="col-3 q-mr-sm"
                @input="loadFoodProperties(foodDashboard)"
                ><template v-slot:prepend>
                  <q-icon
                    name="mdi-account-multiple"
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
                :options="propertiesArr"
                option-value="txn_id"
                option-label="sub_property_name"
                v-model="foodDashboard.property_name"
                label="Select Property"
                label-color="black"
                class="col-3 q-mr-sm"
                @input="showfoodRoomsData()"
                ><template v-slot:prepend>
                  <q-icon
                    name="mdi-home-city-outline"
                    color="secondary"
                  /> </template
              ></q-select>
            </div>
            <div
              class="row q-ma-md"
              v-show="this.foodDashboard.partner_name != ''"
            >
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_name.agent_name
                }}</span>
              </div>
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_sub_name.agent_sub_name
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-7 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Partner Address :
                <span class="text-grey"
                  >{{ this.foodDashboard.partner_sub_name.building_no }},
                  {{ this.foodDashboard.partner_sub_name.street }},
                  {{ this.foodDashboard.partner_sub_name.land_mark }},
                  {{ this.foodDashboard.partner_sub_name.city }},
                  {{ this.foodDashboard.partner_sub_name.state }},
                  {{ this.foodDashboard.partner_sub_name.country }} -
                  {{ this.foodDashboard.partner_sub_name.pin_code }}</span
                >
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.property_name != ''"
              >
                Property Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_sub_name.sub_property_name
                }}</span>
              </div>
            </div>
            <q-card-section class="text-h6 text-white">
              <div class="row">
                <div class="col-9">
                  <q-table
                    :data="hotelData_rows"
                    :columns="hotelData_columns"
                    :pagination.sync="pagination"
                    v-show="this.foodDashboard.property_name != ''"
                    dense
                    separator="cell"
                    :selected.sync="selected"
                    color="green"
                  >
                    <template v-slot:body-cell-schedule="props">
                      <q-td :props="props">
                        <q-btn
                          no-caps
                          dense
                          class="text-bold text-body2"
                          color="secondary"
                          label="Schedule"
                          outline
                        >
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                </div>
                <q-card class="col-2 q-ml-sm" v-if="hotelData_rows.length > 0">
                  <q-card-section
                    class="q-pa-none text-center"
                    v-show="this.foodDashboard.property_name != ''"
                  >
                    <div
                      class="text-bold text-white bg-indigo-10 q-pa-xs"
                      style="font-size: 13px"
                    >
                      Property Amenities
                    </div>
                    <q-list
                      v-for="item in hotelData_rows[0].property_amenity_name"
                      :key="item.name"
                    >
                      <q-item dense>
                        <q-item-section avatar class="text-right">
                          <q-icon color="secondary" :name="item.icon" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label
                            class="text-black text-left"
                            style="font-size: 12px"
                            >{{ item.name }}
                          </q-item-label>
                        </q-item-section>
                        <!-- <q-item-section avatar>
                        <q-icon
                          color="secondary"
                          :name="mdi - check - circle"
                        />
                      </q-item-section> -->
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="fooddata"
          v-if="fooddata == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Food:
                </p>
              </div>
            </q-card>
            <div class="q-pa-md row q-gutter-md">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodPartnerArr"
                option-value="agent_id"
                option-label="agent_name"
                v-model="foodDashboard.partner_name"
                label="Select Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  loadFoodSubPartnerNames(foodDashboard.partner_name);
                  emptyPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodSubPartnerArr"
                option-value="agent_sub_id"
                option-label="agent_sub_name"
                v-model="foodDashboard.partner_sub_name"
                label="Select Sub Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  loadFoodrestaurantDetails(foodDashboard.partner_sub_name)
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodrestaurant_arr"
                option-value="name_of_kitchen"
                option-label="name_of_kitchen"
                v-model="foodDashboard.restaurant_name"
                label="Select Restaurant *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadFoodDetails(foodDashboard.restaurant_name)"
                ><template v-slot:prepend>
                  <q-icon
                    name="mdi-home-city-outline"
                    color="secondary"
                  /> </template
              ></q-select>
            </div>
            <div
              class="row q-ma-md"
              v-show="this.foodDashboard.partner_name != ''"
            >
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_name.agent_name
                }}</span>
              </div>
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_sub_name.agent_sub_name
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-7 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Partner Address :
                <span class="text-grey"
                  >{{ this.foodDashboard.partner_sub_name.building_no }},
                  {{ this.foodDashboard.partner_sub_name.street }},
                  {{ this.foodDashboard.partner_sub_name.land_mark }},
                  {{ this.foodDashboard.partner_sub_name.city }},
                  {{ this.foodDashboard.partner_sub_name.state }},
                  {{ this.foodDashboard.partner_sub_name.country }} -
                  {{ this.foodDashboard.partner_sub_name.pin_code }}</span
                >
              </div>

              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Kitchen Name :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.name_of_kitchen
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Kitchen Type :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.type_of_kitchen
                }}</span>
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Fssai No :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.fssai_no
                }}</span>
              </div>
            </div>
            <div
              class="q-pa-md text-h6 text-white"
              style="padding-top: 35px; width: 100%"
            >
              <q-table
                :data="foodDetails_rows"
                :columns="food_columns"
                :pagination.sync="pagination"
                dense
                row-key="index"
                separator="cell"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'red'
                          : 'negative'
                      "
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      dense
                      v-model="foodStatusToggle"
                      clickable
                      @click="foodCount(props.row)"
                      >{{ props.row.status }}
                    </q-chip>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="foodtravel"
          v-if="foodtravel == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Travel:
                </p>
              </div>
            </q-card>

            <div class="q-pa-md row q-gutter-md" style="height: 100px">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodPartnerArr"
                option-value="agent_id"
                option-label="agent_name"
                v-model="foodDashboard.partner_name"
                label="Select Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  loadFoodTravelSubpartnerNames(foodDashboard.partner_name);
                  emptysubPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodsub_travel_partner_names_arr"
                option-value="agent_sub_id"
                option-label="agent_sub_name"
                v-model="travelDetails.sub_partner_name"
                label="SubPartner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  getFoodTransportforOperationDetails(
                    travelDetails.sub_partner_name
                  )
                "
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodtransportoperation_item_rows"
                option-value="transport_sub_id"
                option-label="transport_company_name"
                v-model="travelDetails.company_name"
                label="Transport Company Name*"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadTravelDetails(travelDetails.company_name)"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
            </div>
            <div
              class="row q-ma-md"
              v-show="this.foodDashboard.partner_name != ''"
            >
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_name.agent_name
                }}</span>
              </div>
              <div
                class="col-3 text-bold"
                v-show="this.travelDetails.sub_partner_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.travelDetails.sub_partner_name.agent_sub_name
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-7 text-bold"
                v-show="this.travelDetails.sub_partner_name != ''"
              >
                Partner Address :
                <span class="text-grey">
                  {{ this.travelDetails.sub_partner_name.building_no }},
                  {{ this.travelDetails.sub_partner_name.street }},
                  {{ this.travelDetails.sub_partner_name.land_mark }},
                  {{ this.travelDetails.sub_partner_name.city }},
                  {{ this.travelDetails.sub_partner_name.state }},
                  {{ this.travelDetails.sub_partner_name.country }} -
                  {{ this.travelDetails.sub_partner_name.pin_code }}
                </span>
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.travelDetails.company_name != ''"
              >
                Transport Company Name :
                <span class="text-grey">{{
                  this.travelDetails.company_name.transport_company_name
                }}</span>
              </div>
            </div>
            <div
              class="q-pa-md text-h6 text-white"
              style="padding-top: 35px; width: 100%"
            >
              <q-table
                :data="travel_item_rows"
                :columns="travel_columns"
                dense
                separator="cell"
                row-key="index"
                :pagination.sync="pagination"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
                v-show="this.travelDetails.company_name != ''"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      dense
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'red'
                          : 'negative'
                      "
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      v-model="TravelStatuschip"
                      @click="travelstatus(props.row)"
                      clickable
                      >{{ props.row.status }}</q-chip
                    >
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="foodmedical"
          v-if="foodmedical == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Medical:
                </p>
              </div>
            </q-card>
            <div class="q-pa-md row q-gutter-md" style="height: 100px">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodPartnerArr"
                option-value="agent_id"
                option-label="agent_name"
                v-model="foodDashboard.partner_name"
                label="Select Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  loadfoodEquipmentSubpartnerNames(foodDashboard.partner_name);
                  emptyequipmentsubPartnerNames();
                "
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="equipmentsubPartnerArr"
                option-value="partner_sub_id"
                option-label="agent_sub_name"
                v-model="equipmentDetails.sub_partner_name"
                label="SubPartner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="
                  loadfoodmedicalDetails(equipmentDetails.sub_partner_name)
                "
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodequipmedicalArr"
                option-value="equipment_sub_id"
                option-label="medical_store_name"
                v-model="equipmentDetails.equipment_name"
                label="Medical Store Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="loadEquipmentDetails(equipmentDetails.equipment_name)"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
            </div>
            <div
              class="row q-ma-md"
              v-show="this.foodDashboard.partner_name != ''"
            >
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_name.agent_name
                }}</span>
              </div>
              <div
                class="col-3 text-bold"
                v-show="this.equipmentDetails.sub_partner_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.equipmentDetails.sub_partner_name.agent_sub_name
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-7 text-bold"
                v-show="this.equipmentDetails.sub_partner_name != ''"
              >
                Partner Address :
                <span class="text-grey">
                  {{ this.equipmentDetails.equipment_name.address }},
                  {{ this.equipmentDetails.equipment_name.street }},
                  {{ this.equipmentDetails.equipment_name.land_mark }},
                  {{ this.equipmentDetails.equipment_name.city_name }},
                  {{ this.equipmentDetails.equipment_name.state_name }},
                  {{ this.equipmentDetails.equipment_name.country }} -
                  {{ this.equipmentDetails.equipment_name.pin_code }}
                </span>
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.equipmentDetails.equipment_name != ''"
              >
                Medical Store Name :
                <span class="text-grey">{{
                  this.equipmentDetails.equipment_name.medical_store_name
                }}</span>
              </div>
            </div>
            <div
              class="q-pa-md text-h6 text-white"
              style="padding-top: 35px; width: 100%"
            >
              <q-table
                :data="equipment_item_rows"
                v-show="this.equipmentDetails.equipment_name != ''"
                :columns="medical_columns"
                dense
                separator="cell"
                :pagination.sync="pagination"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      dense
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'red'
                          : 'negative'
                      "
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      v-model="EquipmentStatuschip"
                      @click="equipmentStatusCount(props.row)"
                      clickable
                      >{{ props.row.status }}</q-chip
                    >
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div>
        <q-card> </q-card>
      </q-card>
    </div>

    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_vehicle'"
    >
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row q-col-gutter-sm" style="padding-top: 50px">
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white"
          >
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email }}</b>
                </div>
                <q-space />
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 25px;
                    font-family: verdana;
                  "
                >
                  <p style="text-align: justify"><b>Operations </b></p>
                </div>
                <q-space />

                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>Account Id: {{ userDetails.account_id }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
                <p
                  class="q-pa-xs text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  You are Partner With:
                </p>
                <q-btn
                  push
                  label="Accommodation"
                  icon="mdi-domain"
                  @click="travelaccomodationdetails()"
                  v-if="userDetails.accstatus == 'Approved'"
                  class="bg-primary text-white"
                />
                <q-btn
                  push
                  label="Food"
                  icon="mdi-food-fork-drink"
                  class="bg-primary text-white"
                  @click="travelfoodDetails()"
                  v-if="userDetails.foodstatus == 'Approved'"
                />
                <q-btn
                  push
                  label="Travel"
                  icon="mdi-car"
                  class="bg-primary text-white"
                  @click="travelpartnerDetails()"
                />
                <q-btn
                  push
                  label="Medical"
                  icon="mdi-medical-bag"
                  class="bg-primary text-white"
                  @click="travelMedicalDetails()"
                  v-if="userDetails.medicalstatus == 'Approved'"
                />
              </div>
            </q-card>
          </div>
        </q-card>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="travelacc"
          v-if="travelacc == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Accommodation:
                </p>
              </div>
            </q-card>
            <div class="row q-ma-md">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="travelPartnerArr"
                option-value="agent_id"
                option-label="travel_name"
                v-model="travelDetails.partner_name"
                label="Partner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="loadTravelproperties(travelDetails.partner_name)"
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <!-- <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              option-value="partner_sub_id"
              option-label="agent_sub_name"
              :options="subPartnersArr"
              v-model="partnerDashboardData.partner_sub_name"
              label="Select Sub Partner"
              label-color="black"
              class="col-3 q-mr-sm"
              @input="loadProperties(partnerDashboardData)"
              ><template v-slot:prepend>
                <q-icon
                  name="mdi-account-multiple"
                  color="secondary"
                /> </template
            ></q-select> -->
              <q-select
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="propertiesArr"
                option-value="txn_id"
                option-label="sub_property_name"
                v-model="partnerDashboardData.property_name"
                label="Select Property"
                label-color="black"
                class="col-3 q-mr-sm"
                @input="showtravelRoomsData()"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-home-city-outline" color="secondary" />
                </template>
              </q-select>
            </div>
            <q-card-section class="text-h6 text-white">
              <div class="row">
                <div class="col-9">
                  <q-table
                    :data="hotelData_rows"
                    :columns="hotelData_columns"
                    :pagination.sync="pagination"
                    v-show="this.partnerDashboardData.property_name != ''"
                    dense
                    separator="cell"
                    :selected.sync="selected"
                    color="green"
                  >
                    <template v-slot:body-cell-schedule="props">
                      <q-td :props="props">
                        <q-btn
                          no-caps
                          dense
                          class="text-bold text-body2"
                          color="secondary"
                          label="Schedule"
                          outline
                        >
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                  <!-- <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th auto-width />
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="secondary"
                      round
                      dense
                      @click="props.expand = !props.expand"
                      :icon="props.expand ? 'remove' : 'add'"
                    />
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
                    <q-card-section class="q-pa-none">
                      <div class="row q-gutter-sm">
                        <div class="text-black text-left float-left">
                          This is expand slot for row above:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.room_type }}.
                        </div>
                      </div>
                      <div class="row q-gutter-sm">
                        <div class="text-black text-bold text-left">
                          Availability :-
                        </div>
                        <div class="text-black text-left">
                          From Data:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.date_from }};
                        </div>
                        <div class="text-black text-left">
                          To Date:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.date_to }}
                        </div>
                        <div class="text-black text-left">
                          <q-icon
                            name="event"
                            class="cursor-pointer"
                            size="1.5em"
                            @click="getAttrs(item)"
                          >
                            <q-popup-proxy
                              ref="qDateProxy"
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                minimal
                                range
                                @input="closeDialog"
                                mask="DD/MM/YYYY"
                              >
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </div>
                      </div>
                    </q-card-section>
                  </q-td>
                </q-tr>
              </template> -->
                </div>
                <q-card class="col-2 q-ml-sm" v-if="hotelData_rows.length > 0">
                  <q-card-section
                    class="q-pa-none text-center"
                    v-show="this.partnerDashboardData.property_name != ''"
                  >
                    <div
                      class="text-bold text-white bg-indigo-10 q-pa-xs"
                      style="font-size: 13px"
                    >
                      Property Amenities
                    </div>
                    <q-list
                      v-for="item in hotelData_rows[0].property_amenity_name"
                      :key="item.name"
                    >
                      <q-item dense>
                        <q-item-section avatar class="text-right">
                          <q-icon color="secondary" :name="item.icon" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label
                            class="text-black text-left"
                            style="font-size: 12px"
                            >{{ item.name }}
                          </q-item-label>
                        </q-item-section>
                        <!-- <q-item-section avatar>
                        <q-icon
                          color="secondary"
                          :name="mdi - check - circle"
                        />
                      </q-item-section> -->
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="travelfood"
          v-if="travelfood == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Food:
                </p>
              </div>
            </q-card>
            <div class="q-pa-md row q-gutter-md">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="travelPartnerArr"
                option-value="agent_id"
                option-label="agent_name"
                v-model="foodDashboard.partner_name"
                label="Partner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="
                  getTravelSubPartnerNames(foodDashboard.partner_name);
                  emptyPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="travelFoodSubPartnerArr"
                option-value="agent_sub_id"
                option-label="transport_sub_name"
                v-model="foodDashboard.partner_sub_name"
                label="Select Sub Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  loadTravelrestaurantDetails(foodDashboard.partner_sub_name)
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="travelrestaurant_arr"
                option-value="name_of_kitchen"
                option-label="name_of_kitchen"
                v-model="foodDashboard.restaurant_name"
                label="Select Restaurant *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadFoodDetails(foodDashboard.restaurant_name)"
                ><template v-slot:prepend>
                  <q-icon
                    name="mdi-home-city-outline"
                    color="secondary"
                  /> </template
              ></q-select>
            </div>
            <div
              class="row q-ma-md"
              v-show="this.foodDashboard.partner_name != ''"
            >
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_name.agent_name
                }}</span>
              </div>
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_sub_name.transport_sub_name
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-7 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Partner Address :
                <span class="text-grey"
                  >{{ this.foodDashboard.partner_sub_name.building_no }},
                  {{ this.foodDashboard.partner_sub_name.street }},
                  {{ this.foodDashboard.partner_sub_name.land_mark }},
                  {{ this.foodDashboard.partner_sub_name.city }},
                  {{ this.foodDashboard.partner_sub_name.state }},
                  {{ this.foodDashboard.partner_sub_name.country }} -
                  {{ this.foodDashboard.partner_sub_name.pin_code }}</span
                >
              </div>

              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Kitchen Name :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.name_of_kitchen
                }}</span>
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Kitchen Type :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.type_of_kitchen
                }}</span>
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Fssai No :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.fssai_no
                }}</span>
              </div>
            </div>
            <div
              class="q-pa-md text-h6 text-white"
              style="padding-top: 35px; width: 100%"
            >
              <q-table
                :data="foodDetails_rows"
                :columns="food_columns"
                :pagination.sync="pagination"
                dense
                row-key="index"
                separator="cell"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'red'
                          : 'negative'
                      "
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      dense
                      v-model="foodStatusToggle"
                      clickable
                      @click="foodCount(props.row)"
                      >{{ props.row.status }}
                    </q-chip>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="traveldata"
          v-if="traveldata == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Travel:
                </p>
              </div>
            </q-card>

            <div class="q-pa-md row q-gutter-md" style="height: 100px">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="travelPartnerArr"
                option-value="agent_id"
                option-label="agent_name"
                v-model="travelDetails.agent_name"
                label="Partner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="
                  loadTravelSubpartnerNames(travelDetails.agent_name);
                  emptysubPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="travelsubPartnerArr"
                option-value="transport_sub_id"
                option-label="transport_sub_name"
                v-model="travelDetails.sub_partner_name"
                label="SubPartner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  getTransportforOperationDetails(
                    travelDetails.sub_partner_name
                  )
                "
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="transportoperation_item_rows"
                option-value="transport_sub_id"
                option-label="transport_company_name"
                v-model="travelDetails.transport_company_name"
                label="Transport Company Name*"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadTravelDetails(travelDetails.transport_company_name)"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
            </div>
            <div
              class="q-pa-md text-h6 text-white"
              style="padding-top: 35px; width: 100%"
            >
              <q-table
                :data="travel_item_rows"
                :columns="travel_columns"
                dense
                separator="cell"
                row-key="index"
                :pagination.sync="pagination"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
                v-show="this.travelDetails.company_name != ''"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      dense
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'red'
                          : 'negative'
                      "
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      v-model="TravelStatuschip"
                      @click="
                        travelstatus(props.row);
                        emptysubPartnerNames();
                      "
                      clickable
                      >{{ props.row.status }}</q-chip
                    >
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="travelmedical"
          v-if="travelmedical == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Medical:
                </p>
              </div>
            </q-card>
            <div class="q-pa-md row q-gutter-md" style="height: 100px">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="travelPartnerArr"
                option-value="agent_id"
                option-label="agent_name"
                v-model="travelDetails.partner_name"
                label="Partner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="
                  loadTravelEquipmentSubpartnerNames(
                    travelDetails.partner_name
                  );
                  emptyequipmentsubPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="equipmentsubPartnerArr"
                option-value="transport_sub_id"
                option-label="transport_sub_name"
                v-model="equipmentDetails.sub_partner_name"
                label="SubPartner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="
                  loadEquipmentmedicalDetails(equipmentDetails.sub_partner_name)
                "
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="travelequipmentArr"
                option-value="equipment_sub_id"
                option-label="medical_store_name"
                v-model="equipmentDetails.equipment_name"
                label="Medial Store Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="loadEquipmentDetails(equipmentDetails.equipment_name)"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
            </div>
            <div
              class="q-pa-md text-h6 text-white"
              style="padding-top: 35px; width: 100%"
            >
              <q-table
                :data="equipment_item_rows"
                v-show="this.equipmentDetails.equipment_name != ''"
                :columns="medical_columns"
                dense
                separator="cell"
                :pagination.sync="pagination"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      dense
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'red'
                          : 'negative'
                      "
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      v-model="EquipmentStatuschip"
                      @click="equipmentStatusCount(props.row)"
                      clickable
                      >{{ props.row.status }}</q-chip
                    >
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div>
        <q-card> </q-card>
      </q-card>
    </div>

    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_medical'"
    >
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row q-col-gutter-sm" style="padding-top: 50px">
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white"
          >
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email }}</b>
                </div>
                <q-space />
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 25px;
                    font-family: verdana;
                  "
                >
                  <p style="text-align: justify"><b>Operations </b></p>
                </div>
                <q-space />

                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>Account Id: {{ userDetails.account_id }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md">
          <q-card>
            <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
              <p
                class="q-pa-xs text-left text-bold"
                style="
                  text-align: justify;
                  font-size: 20px;
                  font-family: verdana;
                "
              >
                You are Partner With:
              </p>
              <q-btn
                push
                label="Accommodation"
                icon="mdi-domain"
                @click="medicalaccomodationdetails()"
                class="bg-primary text-white"
                v-if="userDetails.accstatus == 'Approved'"
              />
              <q-btn
                push
                label="Food"
                icon="mdi-food-fork-drink"
                class="bg-primary text-white"
                @click="medicalFoodDetails()"
                v-if="userDetails.foodstatus == 'Approved'"
              />
              <q-btn
                push
                label="Travel"
                icon="mdi-car"
                class="bg-primary text-white"
                @click="medicalTravelDetails()"
                v-if="userDetails.travelstatus == 'Approved'"
              />
              <q-btn
                push
                label="Medical"
                icon="mdi-medical-bag"
                class="bg-primary text-white"
                @click="MedicalDetails()"
              />
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="medicalacc"
          v-if="medicalacc == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Accommodation:
                </p>
              </div>
            </q-card>
            <div class="row q-ma-md">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="equipmentPartnerArr"
                option-value="equipment_id"
                option-label="agent_name"
                v-model="equipmentDetails.partner_name"
                label="Partner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="loadEquipmentProperties(equipmentDetails.partner_name)"
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <!-- <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              option-value="partner_sub_id"
              option-label="agent_sub_name"
              :options="subPartnersArr"
              v-model="partnerDashboardData.partner_sub_name"
              label="Select Sub Partner"
              label-color="black"
              class="col-3 q-mr-sm"
              @input="loadProperties(partnerDashboardData)"
              ><template v-slot:prepend>
                <q-icon
                  name="mdi-account-multiple"
                  color="secondary"
                /> </template
            ></q-select> -->
              <q-select
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="propertiesArr"
                option-value="txn_id"
                option-label="sub_property_name"
                v-model="partnerDashboardData.property_name"
                label="Select Property"
                label-color="black"
                class="col-3 q-mr-sm"
                @input="showmedicalRoomsData()"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-home-city-outline" color="secondary" />
                </template>
              </q-select>
            </div>
            <div
              class="row q-ma-md"
              v-show="this.partnerDashboardData.partner_name != ''"
            >
              <!-- <div
              class="col-3 text-bold"
              v-show="this.partnerDashboardData.partner_name != ''"
            >
              Partner ID :
              <span class="text-grey">{{
                this.partnerDashboardData.partner_name.partner_id
              }}</span>
            </div> -->
              <div
                class="col-3 text-bold"
                v-show="this.partnerDashboardData.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.partnerDashboardData.partner_name.agent_name
                }}</span>
              </div>
              <!-- <div
              class="col-3 text-bold"
              v-show="this.partnerDashboardData.partner_sub_name != ''"
            >
              Sub Partner ID :
              <span class="text-grey">{{
                this.partnerDashboardData.partner_sub_name.partner_sub_id
              }}</span>
            </div> -->
              <div
                class="col-3 text-bold"
                v-show="this.partnerDashboardData.partner_sub_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.partnerDashboardData.partner_sub_name.agent_sub_name
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-7 text-bold"
                v-show="this.partnerDashboardData.partner_sub_name != ''"
              >
                Partner Address :
                <span class="text-grey"
                  >{{ this.partnerDashboardData.partner_sub_name.building_no }},
                  {{ this.partnerDashboardData.partner_sub_name.street }},
                  {{ this.partnerDashboardData.partner_sub_name.land_mark }},
                  {{ this.partnerDashboardData.partner_sub_name.city }},
                  {{ this.partnerDashboardData.partner_sub_name.state }},
                  {{ this.partnerDashboardData.partner_sub_name.country }} -
                  {{
                    this.partnerDashboardData.partner_sub_name.pin_code
                  }}</span
                >
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.partnerDashboardData.property_name != ''"
              >
                Property Name :
                <span class="text-grey">{{
                  this.partnerDashboardData.property_name.sub_property_name
                }}</span>
              </div>
            </div>
            <q-card-section class="text-h6 text-white">
              <div class="row">
                <div class="col-9">
                  <q-table
                    :data="hotelData_rows"
                    :columns="hotelData_columns"
                    :pagination.sync="pagination"
                    v-show="this.partnerDashboardData.property_name != ''"
                    dense
                    separator="cell"
                    :selected.sync="selected"
                    color="green"
                  >
                    <template v-slot:body-cell-schedule="props">
                      <q-td :props="props">
                        <q-btn
                          no-caps
                          dense
                          class="text-bold text-body2"
                          color="secondary"
                          label="Schedule"
                          outline
                        >
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                  <!-- <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th auto-width />
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="secondary"
                      round
                      dense
                      @click="props.expand = !props.expand"
                      :icon="props.expand ? 'remove' : 'add'"
                    />
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
                    <q-card-section class="q-pa-none">
                      <div class="row q-gutter-sm">
                        <div class="text-black text-left float-left">
                          This is expand slot for row above:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.room_type }}.
                        </div>
                      </div>
                      <div class="row q-gutter-sm">
                        <div class="text-black text-bold text-left">
                          Availability :-
                        </div>
                        <div class="text-black text-left">
                          From Data:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.date_from }};
                        </div>
                        <div class="text-black text-left">
                          To Date:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.date_to }}
                        </div>
                        <div class="text-black text-left">
                          <q-icon
                            name="event"
                            class="cursor-pointer"
                            size="1.5em"
                            @click="getAttrs(item)"
                          >
                            <q-popup-proxy
                              ref="qDateProxy"
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                minimal
                                range
                                @input="closeDialog"
                                mask="DD/MM/YYYY"
                              >
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </div>
                      </div>
                    </q-card-section>
                  </q-td>
                </q-tr>
              </template> -->
                </div>
                <q-card class="col-2 q-ml-sm" v-if="hotelData_rows.length > 0">
                  <q-card-section
                    class="q-pa-none text-center"
                    v-show="this.partnerDashboardData.property_name != ''"
                  >
                    <div
                      class="text-bold text-white bg-indigo-10 q-pa-xs"
                      style="font-size: 13px"
                    >
                      Property Amenities
                    </div>
                    <q-list
                      v-for="item in hotelData_rows[0].property_amenity_name"
                      :key="item.name"
                    >
                      <q-item dense>
                        <q-item-section avatar class="text-right">
                          <q-icon color="secondary" :name="item.icon" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label
                            class="text-black text-left"
                            style="font-size: 12px"
                            >{{ item.name }}
                          </q-item-label>
                        </q-item-section>
                        <!-- <q-item-section avatar>
                        <q-icon
                          color="secondary"
                          :name="mdi - check - circle"
                        />
                      </q-item-section> -->
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="medicalfood"
          v-if="medicalfood == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Food:
                </p>
              </div>
            </q-card>

            <div class="q-pa-md row q-gutter-md">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="equipmentPartnerArr"
                option-value="equipment_id"
                option-label="agent_name"
                v-model="foodDashboard.partner_name"
                label="Partner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="
                  loadEquipmentfoodSubpartnerNames(foodDashboard.partner_name);
                  emptyPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodSubPartnerArr"
                option-value="equipment_sub_id"
                option-label="equipment_sub_name"
                v-model="foodDashboard.partner_sub_name"
                label="Select Sub Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  loadMedicalrestaurantDetails(foodDashboard.partner_sub_name)
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="medicalrestaurant_arr"
                option-value="name_of_kitchen"
                option-label="name_of_kitchen"
                v-model="foodDashboard.restaurant_name"
                label="Select Restaurant *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadFoodDetails(foodDashboard.restaurant_name)"
                ><template v-slot:prepend>
                  <q-icon
                    name="mdi-home-city-outline"
                    color="secondary"
                  /> </template
              ></q-select>
            </div>
            <div
              class="row q-ma-md"
              v-show="this.foodDashboard.partner_name != ''"
            >
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_name != ''"
              >
                Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_name.agent_name
                }}</span>
              </div>
              <div
                class="col-3 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Sub Partner Name :
                <span class="text-grey">{{
                  this.foodDashboard.partner_sub_name.equipment_sub_name
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-7 text-bold"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                Partner Address :
                <span class="text-grey"
                  >{{ this.foodDashboard.partner_sub_name.building_no }},
                  {{ this.foodDashboard.partner_sub_name.street }},
                  {{ this.foodDashboard.partner_sub_name.land_mark }},
                  {{ this.foodDashboard.partner_sub_name.city }},
                  {{ this.foodDashboard.partner_sub_name.state }},
                  {{ this.foodDashboard.partner_sub_name.country }} -
                  {{ this.foodDashboard.partner_sub_name.pin_code }}</span
                >
              </div>

              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Kitchen Name :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.name_of_kitchen
                }}</span>
              </div>
            </div>
            <div class="row q-ma-md">
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Kitchen Type :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.type_of_kitchen
                }}</span>
              </div>
              <div
                class="col-5 text-bold"
                v-show="this.foodDashboard.restaurant_name != ''"
              >
                Fssai No :
                <span class="text-grey">{{
                  this.foodDashboard.restaurant_name.fssai_no
                }}</span>
              </div>
            </div>
            <div
              class="q-pa-md text-h6 text-white"
              style="padding-top: 35px; width: 100%"
            >
              <q-table
                :data="foodDetails_rows"
                :columns="food_columns"
                :pagination.sync="pagination"
                dense
                row-key="index"
                separator="cell"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'red'
                          : 'negative'
                      "
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      dense
                      v-model="foodStatusToggle"
                      clickable
                      @click="foodCount(props.row)"
                      >{{ props.row.status }}
                    </q-chip>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="medicaltravel"
          v-if="medicaltravel == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Travel:
                </p>
              </div>
            </q-card>
            <div class="row q-ma-md">
              <div class="q-pa-md row q-gutter-md" style="height: 100px">
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="equipmentPartnerArr"
                  option-value="equipment_id"
                  option-label="agent_name"
                  v-model="equipmentDetails.partner_name"
                  label="Partner Name *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 32px"
                  @input="
                    loadEquipmentTravelSubpartnerNames(
                      equipmentDetails.partner_name
                    );
                    emptysubPartnerNames();
                  "
                  ><template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-select>
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="travelsubPartnerArr"
                  option-value="equipment_sub_id"
                  option-label="equipment_sub_name"
                  v-model="travelDetails.sub_partner_name"
                  label="SubPartner Name *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 5px"
                  @input="
                    getMedicalTransportforOperationDetails(
                      travelDetails.sub_partner_name
                    );
                    emptysubPartnerNames();
                  "
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-select>
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="medicaltransportoperation_item_rows"
                  option-value="transport_sub_id"
                  option-label="transport_company_name"
                  v-model="travelDetails.company_name"
                  label="Transport Company Name*"
                  label-color="black"
                  style="width: 250px; padding-bottom: 5px"
                  @input="
                    loadTravelDetails(travelDetails.company_name);
                    emptysubPartnerNames();
                  "
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-select>
              </div>
              <div
                class="q-pa-md text-h6 text-white"
                style="padding-top: 35px; width: 100%"
              >
                <q-table
                  :data="travel_item_rows"
                  :columns="travel_columns"
                  dense
                  separator="cell"
                  row-key="index"
                  :pagination.sync="pagination"
                  :grid="mode === 'grid'"
                  :filter="filter"
                  :selected.sync="selected"
                  color="green"
                  v-show="this.travelDetails.company_name != ''"
                >
                  <template v-slot:body-cell-status="props">
                    <q-tr :props="props">
                      <q-chip
                        dense
                        :color="
                          props.row.status == 'yes'
                            ? 'green'
                            : props.row.status == 'no'
                            ? 'red'
                            : 'negative'
                        "
                        text-color="white"
                        class="text-bold q-pa-sm"
                        square
                        outline
                        v-model="TravelStatuschip"
                        @click="
                          travelstatus(props.row);
                          emptysubPartnerNames();
                        "
                        clickable
                        >{{ props.row.status }}</q-chip
                      >
                    </q-tr>
                  </template>
                </q-table>
              </div>
            </div>
          </q-card>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          ref="medicaldata"
          v-if="medicaldata == true"
        >
          <q-card bordered class="q-ma-xs bg-white">
            <q-card>
              <div
                class="q-pa-xs q-gutter-md q-ma-xs row items-start text-primary"
              >
                <p
                  class="text-left text-bold"
                  style="
                    text-align: justify;
                    font-size: 20px;
                    font-family: verdana;
                  "
                >
                  Medical:
                </p>
              </div>
            </q-card>
            <div class="row q-ma-md">
              <div class="q-pa-md row q-gutter-md" style="height: 100px">
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="equipmentPartnerArr"
                  option-value="equipment_id"
                  option-label="agent_name"
                  v-model="equipmentDetails.partner_name"
                  label="Partner Name *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 32px"
                  @input="
                    loadEquipmentSubpartnerNames(equipmentDetails.partner_name);
                    emptyequipmentsubPartnerNames();
                  "
                  ><template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-select>
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="equipmentsubPartnerArr"
                  option-value="equipment_sub_id"
                  option-label="equipment_sub_name"
                  v-model="equipmentDetails.sub_partner_name"
                  label="SubPartner Name *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 32px"
                  @input="loadmedicalDetails(equipmentDetails.sub_partner_name)"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-select>
                <q-select
                  class="col-3 q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  :options="equipmentmedicalArr"
                  option-value="equipment_sub_id"
                  option-label="medical_store_name"
                  v-model="equipmentDetails.equipment_name"
                  label="Medical Store Name *"
                  label-color="black"
                  style="width: 250px; padding-bottom: 32px"
                  @input="loadEquipmentDetails(equipmentDetails.equipment_name)"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-select>
              </div>
              <div
                class="row q-ma-md"
                v-show="this.equipmentDetails.partner_name != ''"
              >
                <div
                  class="col-3 text-bold"
                  v-show="this.equipmentDetails.partner_name != ''"
                >
                  Partner Name :
                  <span class="text-grey">{{
                    this.equipmentDetails.partner_name.agent_name
                  }}</span>
                </div>
                <div
                  class="col-3 text-bold"
                  v-show="this.equipmentDetails.sub_partner_name != ''"
                >
                  Sub Partner Name :
                  <span class="text-grey">{{
                    this.equipmentDetails.sub_partner_name.agent_sub_name
                  }}</span>
                </div>
              </div>
              <div class="row q-ma-md">
                <div
                  class="col-7 text-bold"
                  v-show="this.equipmentDetails.sub_partner_name != ''"
                >
                  Partner Address :
                  <span class="text-grey">
                    {{ this.equipmentDetails.equipment_name.address }},
                    {{ this.equipmentDetails.equipment_name.street }},
                    {{ this.equipmentDetails.equipment_name.land_mark }},
                    {{ this.equipmentDetails.equipment_name.city_name }},
                    {{ this.equipmentDetails.equipment_name.state_name }},
                    {{ this.equipmentDetails.equipment_name.country }} -
                    {{ this.equipmentDetails.equipment_name.pin_code }}
                  </span>
                </div>
                <div
                  class="col-5 text-bold"
                  v-show="this.equipmentDetails.equipment_name != ''"
                >
                  Medical Store Name :
                  <span class="text-grey">{{
                    this.equipmentDetails.equipment_name.medical_store_name
                  }}</span>
                </div>
              </div>
              <div
                class="q-pa-md text-h6 text-white"
                style="padding-top: 35px; width: 100%"
              >
                <q-table
                  :data="equipment_item_rows"
                  v-show="this.equipmentDetails.equipment_name != ''"
                  :columns="medical_columns"
                  dense
                  separator="cell"
                  :pagination.sync="pagination"
                  :grid="mode === 'grid'"
                  :filter="filter"
                  :selected.sync="selected"
                  color="green"
                >
                  <template v-slot:body-cell-status="props">
                    <q-tr :props="props">
                      <q-chip
                        dense
                        :color="
                          props.row.status == 'yes'
                            ? 'green'
                            : props.row.status == 'no'
                            ? 'red'
                            : 'negative'
                        "
                        text-color="white"
                        class="text-bold q-pa-sm"
                        square
                        outline
                        v-model="EquipmentStatuschip"
                        @click="equipmentStatusCount(props.row)"
                        clickable
                        >{{ props.row.status }}</q-chip
                      >
                    </q-tr>
                  </template>
                </q-table>
              </div>
            </div>
          </q-card>
        </div>
      </q-card>

      <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <q-card bordered class="q-ma-xs">
            <div class="q-pa-md row q-gutter-md" style="height: 100px">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="equipmentPartnerArr"
                option-value="equipment_id"
                option-label="agent_name"
                v-model="equipmentDetails.partner_name"
                label="Partner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="
                  loadEquipmentSubpartnerNames(equipmentDetails.partner_name);
                  emptyequipmentsubPartnerNames();
                "
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="equipmentsubPartnerArr"
                option-value="equipment_sub_id"
                option-label="equipment_sub_name"
                v-model="equipmentDetails.sub_partner_name"
                label="SubPartner Name *"
                label-color="black"
                style="width: 250px; padding-bottom: 32px"
                @input="loadEquipmentDetails(equipmentDetails.sub_partner_name)"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" />
                </template>
              </q-select>
            </div>
            <div class="q-pa-md text-h6 text-white" style="padding-top: 35px">
              <q-table
                :data="equipment_item_rows"
                v-show="this.equipmentDetails.sub_partner_name != ''"
                :columns="medical_columns"
                dense
                separator="cell"
                :pagination.sync="pagination"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      dense
                      :color="props.row.status == 'yes' ? 'green' : props.row.status == 'no' ? 'red' : 'negative'"
                      text-color="white"
                      class="text-bold q-pa-sm"
                      square
                      outline
                      v-model="EquipmentStatuschip"
                       @click="equipmentStatusCount(props.row)"
                      clickable
                      >{{ props.row.status }}</q-chip
                    >
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card>
        </div> -->
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";
import { date } from "quasar";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";

export default {
  data() {
    return {
      startDate: new Date(),
      dates111111111: [],
      selectedYear: "2023",
      selectedMonth: "August",
      yearOptions: ["2023", "2024", "2025"],
      monthOptions: [
        { label: "January", value: "01" },
        { label: "February", value: "02" },
        { label: "March", value: "03" },
        { label: "April", value: "04" },
        { label: "May", value: "05" },
        { label: "June", value: "06" },
        { label: "July", value: "07" },
        { label: "August", value: "08" },
        { label: "September", value: "09" },
        { label: "October", value: "10" },
        { label: "November", value: "11" },
        { label: "December", value: "12" },
      ],
      tab: "availabilitiesandprice",
      activeTab: "otherroomdeatils",
      date: "",
      date1: "",
      longitude: "",
      AccImgpath: filepaths.mhapFilePath,
      Acctravel: filepaths.mhtpFilePath,
      Accfood: filepaths.mhfpFilePath,
      Accmedical: filepaths.mhepFilePath,
      url: "",
      dialogTitle: "",
      ...validations,
      pagination: {
        rowsPerPage: 5,
      },
      dates: {
        date_from: "",
        date_to: "",
      },
      // dayone: {
      //   date_from: "",
      //   number: "",
      //   Acbreakfast: "",
      //   nonAcbreakfast: "",
      //   Acwithoutbreakfast: "",
      //   NonAcwithoutbreakfast: "",
      // },



      form: {
        date_from: "",
        number: "",
        Acbreakfast: "",
        nonAcbreakfast: "",
        Acwithoutbreakfast: "",
        NonAcwithoutbreakfast: "",

        date_from1: "",
        date_from2: "",
        date_from3: "",
        date_from4: "",
        date_from5: "",
        date_from6: "",
        number: "",
        number1: "",
        number2: "",
        number3: "",
        number4: "",
        number5: "",
        number6: "",

        Acbreakfast1: "",
        Acbreakfast2: "",
        Acbreakfast3: "",
        Acbreakfast4: "",
        Acbreakfast5: "",
        Acbreakfast6: "",

        nonAcbreakfast1: "",
        nonAcbreakfast2: "",
        nonAcbreakfast3: "",
        nonAcbreakfast4: "",
        nonAcbreakfast5: "",
        nonAcbreakfast6: "",

        Acwithoutbreakfast1: "",
        Acwithoutbreakfast2: "",
        Acwithoutbreakfast3: "",
        Acwithoutbreakfast4: "",
        Acwithoutbreakfast5: "",
        Acwithoutbreakfast6: "",

        NonAcwithoutbreakfast1: "",
        NonAcwithoutbreakfast2: "",
        NonAcwithoutbreakfast3: "",
        NonAcwithoutbreakfast4: "",
        NonAcwithoutbreakfast5: "",
        NonAcwithoutbreakfast6: "",
      },
      dateWiseUpdate: {
        // acprice: "",
        // nonAcPrice: "",
        // AcWithBreakFastPrice: "",
        // nonAcWithBreakFastPrice: "",
        // acAvaliability: "",
        // nonAcAvaliability: "",
        // acWithBreackfastAvaliability: "",
        // nonAcWithBreackfastAvaliability: "",
      },

      propertyPartnerForm: {},
      title: "Bulk Inventory",
      moment: moment,
      dashboardTable: false,
      // showConfirmation: false,
      selected: [],
      clicked_chip: "",
      mode: "list",
      filter: "",
      addDataDialog: false,
      data: [],
      step: 1,
      details: false,
      visible: false,
      showPanDoc: false,
      maximizedToggle: true,
      otheramenitiesinput: false,
      value: false,
      roomStatusToggle: true,
      small: false,
      roomScheduleDialog: false,
      BulkinventoryDialog: false,
      accdata: true,
      acctravel: false,
      accfood: false,
      accmedical: false,
      foodacc: false,
      foodtravel: false,
      fooddata: true,
      foodmedical: false,
      travelacc: false,
      travelfood: false,
      traveldata: true,
      travelmedical: false,
      medicalacc: false,
      medicalfood: false,
      medicaldata: true,
      medicaltravel: false,
      visibleColumns: false,

      schedule_date: "",
      schedule_dates_arr: [],
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
      confirm: false,
      hotelDateRows: {
        date_from: "",
        date_to: "",
      },
      roomStatusObj: {
        account_id: "",
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
        room_txn_id: "",
        room_status: "",
      },
      partnerDashboardData: {
        partner_name: "",
        partner_sub_name: "",
        property_name: "",
        partner_address: "",
        equipment_name: "",
      },
      editedRoomItem: {
        room_category: "",
        room_type: "",
        facilities: "",
        max_allow_adult: "",
        max_allow_kids: "",
        withoutac_withoutbreakfast_price: "",
        withoutac_withbreakfast_price: "",
        acwithbreackfast_price: "",
        withac_withbreakfast_price: "",
        gst_per: "",
        date_from: "",
        date_to: "",
        noac_price_offer: "",
        nonacwithbreackfast_price_offer: "",
        ac_price_offer: "",
        acwithbreackfast_price_offer: "",
        date_from_offer: "",
        date_to_offer: "",
        tendays_price: "",
        twentydays_price: "",
        thirtydays_price: "",
        offer_applicable_date_from: "",
        offer_applicable_date_to: "",
        maximum_capacity_adults: "",
        maximum_capacity_kids: "",
        rate_incress: "",
        no_of_avail_rooms: "",
        icon_image: "",
        other_amenities: "",
      },
      facilities: {},
      room_availability: {
        selected_date: "",
        availability_count: 1,
        account_id: "",
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
        room_txn_id: "",
      },
      allSelectedDates: [],
      current_month_dates: [],
      room_availability_arr: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      // visibleColumns: [
      //   "room_category",
      //   "facilities",
      //   "max_allow_adult",
      //   "max_allow_kids",
      //   "withoutac_withoutbreakfast_price",
      //   "withoutac_withbreakfast_price",
      //   "withac_withoutbreakfast_price",
      //   "withac_withbreakfast_price",
      //   "gst_per",

      //   "date_from",
      //   "date_to",
      // ],
      booking_columns: [
        {
          align: "center",
          label: "Sno",
          field: "sno",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Types Of Room",
          field: "types_of_room",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "From INR",
          field: "from_inr",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "To INR",
          field: "to_inr",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Date From",
          field: "date_from",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Date To",
          field: "date_to",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Amenities",
          field: "amenities",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Special Offer / Day",
          field: "special_offer",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],
      foodStatusToggle: true,
      foodStatusCount: false,
      updateRoomDialogforDashboard: false,
      updatePriceAvailabilitiesDialog: false,
      foodDashboard: {
        partner_name: "",
        partner_sub_name: "",
        restaurant_name: "",
        partner_address: "",
      },
      foodRows: {
        foodPartner_sub_name: "",
        agent_sub_name: "",
        agent_sub_id: "",
        address: "",
        location: "",
        gstin: "",
        fssai_no: "",
        updated_datetime: "",
        status: "",
        txn_id: "",
      },
      food_columns: [
        {
          name: "index",
          align: "center",
          label: "Sno",
          field: "index",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "item_name",
          align: "left",
          label: "Type of Food",
          field: "item_name",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "units",
          align: "left",
          label: "Quantity",
          field: "units",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "price",
          align: "left",
          label: "Price",
          field: "price",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "status",
          align: "left",
          label: "Status",
          field: "status",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],
      TravelStatuschip: true,
      travel_columns: [
        {
          name: "Sno",
          align: "center",
          label: "Sno",
          field: "index",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "vehicle_name",
          align: "left",
          label: "Vehicle Name",
          field: "vehicle_name",
          headerClasses: "bg-primary text-white",
        },
        {
          name: "Day Price",
          align: "left",
          label: "Day Price",
          field: "day_price",
          headerClasses: "bg-primary text-white",
        },
        {
          name: "Night Price",
          align: "left",
          label: "Night price",
          field: "night_price",
          headerClasses: "bg-primary text-white",
        },
        {
          name: "No of seats",
          align: "left",
          label: "No of seats",
          field: "no_of_seaters",
          headerClasses: "bg-primary text-white",
        },

        {
          name: "units",
          align: "left",
          label: "Units",
          field: "units",
          headerClasses: "bg-primary text-white",
        },
        {
          name: "status",
          align: "left",
          label: "Status",
          field: "status",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],
      travelDetails: {
        agent_name: "",
        sub_partner_name: "",
        partner_name: "",
        transport_sub_name: "",
        company_name: "",
      },
      equipmentDetails: {
        sub_partner_name: "",
        partner_name: "",
        equipment_name: "",
      },
      EquipmentStatuschip: true,
      // dataArray: [
      //   [
      //     "room_sub_type",
      //     "p22",
      //     "a22",
      //     "p23",
      //     "a23",
      //     "p4",
      //     "a4",
      //     "p24",
      //     "a24",
      //     "p25",
      //     "a25",
      //     "p26",
      //     "a26",
      //     "p27",
      //     "a27",
      //     "p28",
      //     "a28",
      //   ],
      //   [
      //     "ac",
      //     "2201",
      //     "3",
      //     "9999",
      //     "7",
      //     "0",
      //     "0",
      //     "20200",
      //     "3",
      //     "5555",
      //     "5",
      //     "4000",
      //     "4",
      //     "0",
      //     "0",
      //     "0",
      //     "0",
      //   ],
      //   [
      //     "non_ac",
      //     "2202",
      //     "4",
      //     "8888",
      //     "7",
      //     "0",
      //     "0",
      //     "20100",
      //     "3",
      //     "5555",
      //     "5",
      //     "3500",
      //     "4",
      //     "0",
      //     "0",
      //     "0",
      //     "0",
      //   ],
      //   [
      //     "ac_breakfast",
      //     "2203",
      //     "5",
      //     "7777",
      //     "7",
      //     "0",
      //     "0",
      //     "20000",
      //     "3",
      //     "5555",
      //     "5",
      //     "5500",
      //     "4",
      //     "0",
      //     "0",
      //     "0",
      //     "0",
      //   ],
      //   [
      //     "non_ac_breakfast",
      //     "2204",
      //     "6",
      //     "8000",
      //     "7",
      //     "0",
      //     "0",
      //     "24000",
      //     "3",
      //     "5555",
      //     "5",
      //     "3800",
      //     "4",
      //     "0",
      //     "0",
      //     "0",
      //     "0",
      //   ],
      // ],
      proppertyOprationArray: [
        { name: "Type Of Room", opration_id: "1" },
        { name: "Amenities", opration_id: "2" },
        { name: "Adult", opration_id: "3" },
        { name: "Kids Less then 12 Year", opration_id: "4" },
        { name: "Non Ac", opration_id: "5" },
        { name: "Non AC+Breakfast", opration_id: "6" },
        { name: "AC", opration_id: "7" },
        { name: "AC+Breakfast", opration_id: "8" },
        { name: "GST%", opration_id: "9" },
        { name: "Date From", opration_id: "10" },
        { name: "Date To", opration_id: "11" },
        { name: "Non Ac", opration_id: "12" },
        { name: "Non AC+Breakfast", opration_id: "13" },
        { name: "AC+Breakfast", opration_id: "14" },
        { name: "Offer Date", opration_id: "15" },
        { name: "10 Days", opration_id: "16" },
        { name: "20 Days", opration_id: "17" },
        { name: "30 Days", opration_id: "18" },
        { name: "Offer Applicable Date", opration_id: "19" },
        { name: "Adult", opration_id: "20" },
        { name: "Kids Less Then 12 Year", opration_id: "21" },
        { name: "Rates in All Category Incress in %", opration_id: "22" },
      ],

      medical_columns: [
        {
          name: "Sno",
          align: "center",
          label: "Sno",
          field: "index",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Item Name",
          align: "left",
          label: "Item Name",
          field: "item_name",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Price",
          align: "left",
          label: "Price",
          field: "price",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Units",
          align: "left",
          label: "Units",
          field: "units",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "status",
          align: "left",
          label: "Status",
          field: "status",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
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
      hotelData_columns: (state) => state.partners.hotelData_columns,
      foodDetails_rows: (state) => state.partners.foodDetails_rows,
      propertyoperation_room_avlprice_row: (state) =>
        state.partners.propertyoperation_room_avlprice_row,

      partnersArr: (state) => state.dropdown.partners_arr,
      subPartnersArr: (state) => state.dropdown.sub_partners_arr,
      subFoodPartnersArr: (state) => state.dropdown.sub_food_partners_arr,
      propertiesArr: (state) => state.dropdown.properties_arr,
      foodPartnerArr: (state) => state.partners.food_partner_arr,
      foodSubPartnerArr: (state) => state.partners.food_sub_partner_arr,
      travelFoodSubPartnerArr: (state) =>
        state.partners.travel_food_sub_partner_arr,
      medicalSubPartnerArr: (state) =>
        state.partners.medical_food_sub_partner_arr,
      travelPartnerArr: (state) => state.partners.travel_partner_names_arr,
      travelsubPartnerArr: (state) =>
        state.partners.sub_travel_partner_names_arr,
      travel_item_rows: (state) => state.partners.travel_item_rows,
      equipmentPartnerArr: (state) =>
        state.partners.equipment_partner_names_arr,
      equipmentsubPartnerArr: (state) =>
        state.partners.sub_equipment_partner_names_arr,
      equipmentnameArr: (state) => state.partners.medical_store_arr,
      equipmentmedicalArr: (state) => state.partners.eqp_medical_store_arr,
      travelequipmentArr: (state) => state.partners.travel_medical_store_arr,
      foodequipmedicalArr: (state) =>
        state.partners.sub_food_equipment_medical_arr,
      equipment_item_rows: (state) => state.partners.equipment_item_rows,
      allRoom_avail_details_arr: (state) =>
        state.partners.allRoom_avail_details_arr,
      transportoperation_item_rows: (state) =>
        state.partners.transportoperation_item_rows,
      acctransportoperation_item_rows: (state) =>
        state.partners.acctransportoperation_item_rows,
      foodsub_travel_partner_names_arr: (state) =>
        state.partners.foodsub_travel_partner_names_arr,
      medicaltransportoperation_item_rows: (state) =>
        state.partners.medicaltransportoperation_item_rows,
      foodtransportoperation_item_rows: (state) =>
        state.partners.foodtransportoperation_item_rows,
      restaurantArr: (state) => state.dropdown.restaurant_arr,
      foodrestaurant_arr: (state) => state.dropdown.food_restaurant_arr,
      travelrestaurant_arr: (state) => state.dropdown.travel_restaurant_arr,
      medicalrestaurant_arr: (state) => state.dropdown.medical_restaurant_arr,
      property_operation_roomupdate_row: (state) =>
        state.dropdown.property_operation_roomupdate_row,
      amenitiesArr: (state) => state.dropdown.amenities_arr,
    }),
    ...mapGetters("partners", ["hotelData_rows"]),
    ...mapGetters("partners", ["property_operation_roomupdate_row"]),
    ...mapGetters("partners", ["foodDetails_rows"]),
    ...mapGetters("partners", ["travel_item_rows"]),
    ...mapGetters("partners", ["equipment_item_rows"]),
    // ...mapGetters("partners", ["propertyoperation_room_avlprice_row"]),
  },
  created() {
    if (this.userDetails.sub_role == "partner_acc") {
      this.$store.dispatch("partners/getPropertyRegistrationMaster");
      this.$store.dispatch("partners/loadFoodPartnerNames");
      this.$store.dispatch("partners/loadTravelpartnerNames");
      this.$store.dispatch("partners/loadEquipmentpartnerNames");
      // this.$store.dispatch("partners/getHotelsData");
      this.$store.dispatch("partners/getHotelsNames");
    } else if (this.userDetails.sub_role == "partner_food") {
      this.$store.dispatch("partners/loadFoodPartnerNames");
    } else if (this.userDetails.sub_role == "partner_vehicle") {
      this.$store.dispatch("partners/loadTravelpartnerNames");
    } else if (this.userDetails.sub_role == "partner_medical") {
      this.$store.dispatch("partners/loadEquipmentpartnerNames");
    }
  },
  mounted() {
    this.generateWeek();
    // this.parseArrayData(this.dataArray);
    this.$store.dispatch("partners/getPropertyRegistrationMaster");
    this.$store.dispatch("partners/getHotelsNames");
    this.$store.dispatch("dropdown/loadPartners");
    this.$store.dispatch("partners/loadFoodPartnerNames");
    this.$store.dispatch("partners/loadTravelpartnerNames");
    this.$store.dispatch("partners/loadEquipmentpartnerNames");
    this.$store.dispatch("partners/loadTravelSubpartnerNames");
    this.$store.dispatch("dropdown/loadSubPartners");
    this.$store.dispatch("dropdown/loadAllFacilities");
    this.$store.dispatch("partners/getupdateroomDetails");
  },
  methods: {
    ...mapActions("partners", ["getHotelInfo"]),
    ...mapActions("partners", ["getfoodHotelInfo"]),
    ...mapActions("partners", ["gettravelHotelInfo"]),
    ...mapActions("partners", ["getmedicalHotelInfo"]),
    ...mapActions("partners", ["getFoodData"]),
    ...mapActions("partners", ["getFoodDetails"]),
    ...mapActions("partners", ["loadAvailabilityDates"]),
    //  ...mapActions("dropdown", ["loadSubPartners"]),
    // ...mapActions("dropdown", ["loadfoodProperties"]),
    // ...mapActions("dropdown", ["loadfoodsubPartner"]),

    ...mapActions("dropdown", ["loadProperties"]),
    ...mapActions("dropdown", ["loadFoodProperties"]),
    ...mapActions("dropdown", ["loadTravelproperties"]),
    ...mapActions("dropdown", ["loadEquipmentProperties"]),
    ...mapActions("dropdown", ["loadrestaurantDetails"]),
    ...mapActions("dropdown", ["loadFoodrestaurantDetails"]),
    ...mapActions("dropdown", ["loadTravelrestaurantDetails"]),
    ...mapActions("dropdown", ["loadMedicalrestaurantDetails"]),
    ...mapActions("partners", ["loadFoodSubPartnerNames"]),
    ...mapActions("partners", ["getTravelSubPartnerNames"]),
    ...mapActions("partners", ["loadEquipmentfoodSubpartnerNames"]),
    ...mapActions("partners", ["loadaccfoodSubPartnerNames"]),
    ...mapActions("partners", ["loadFoodStatus"]),
    ...mapActions("partners", ["ledgerFoodDetails"]),
    ...mapActions("partners", ["loadTravelSubpartnerNames"]),
    ...mapActions("partners", ["loadAccTravelSubpartnerNames"]),
    ...mapActions("partners", ["loadEquipmentTravelSubpartnerNames"]),
    ...mapActions("partners", ["getTravelDetails"]),
    ...mapActions("partners", ["ledgertravelDetails"]),
    ...mapActions("partners", ["loadTravelStatus"]),
    ...mapActions("partners", ["loadEquipmentSubpartnerNames"]),
    ...mapActions("partners", ["loadmedicalDetails"]),
    ...mapActions("partners", ["loadAccEquipmentSubpartnerNames"]),
    ...mapActions("partners", ["loadmedicalstoreDetails"]),
    ...mapActions("partners", ["loadfoodEquipmentSubpartnerNames"]),
    ...mapActions("partners", ["loadfoodmedicalDetails"]),
    ...mapActions("partners", ["loadTravelEquipmentSubpartnerNames"]),
    ...mapActions("partners", ["loadEquipmentmedicalDetails"]),
    ...mapActions("partners", ["getMedicalEqpData"]),
    ...mapActions("partners", ["loadEquipmentStatus"]),
    ...mapActions("partners", ["ledgerEquipmentDetails"]),
    ...mapActions("partners", ["updateRoomStatus"]),
    ...mapActions("partners", ["saveRoomStatusCount"]),
    ...mapActions("partners", ["saveRoomsAvailData"]),
    ...mapActions("partners", ["getAllRoomAvailCountDates"]),
    ...mapActions("partners", ["getTransportforOperationDetails"]),
    ...mapActions("partners", ["getAccTransportforOperationDetails"]),
    ...mapActions("partners", ["loadFoodTravelSubpartnerNames"]),
    ...mapActions("partners", ["getFoodTransportforOperationDetails"]),
    ...mapActions("partners", ["getMedicalTransportforOperationDetails"]),
    ...mapActions("partners", ["formDetailsSaving"]),
    ...mapActions("dropdown", ["getPropertyForOperation"]),
    ...mapActions("partners", ["updateRoomdataSaving"]),
    ...mapActions("partners", ["getupdateroomDetails"]),
    ...mapActions("partners", ["updatePropertyoperationroomDetails"]),
    ...mapActions("partners", ["updateRoomPriceAndAvaliability"]),
    ...mapActions("partners", ["getroomsavailabilitiespricestable"]),

    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    emptyPartnerNames() {
      this.foodDashboard.partner_sub_name = [];
      this.foodDashboard.partner_address = [];
    },
    showRoomsData() {
      this.getupdateroomDetails(this.partnerDashboardData);
    },
    // confirmUpdate() {
    //   this.showConfirmation = true;
    // },
    // update() {
    //   // Update logic here
    //   this.showConfirmation = false;
    // },
    // changeRoomStatus(item) {
    //   this.roomStatusObj = Object.assign({}, item);
    //   this.roomStatusObj.room_status = this.roomStatusToggle;
    //   this.$q
    //     .dialog({
    //       title: "Are You Sure?",
    //       message: "Do you want to Change Room Status",
    //       cancel: true,
    //       persistent: true,
    //     })
    //     .onOk(() => {
    //       this.updateRoomStatus(this.roomStatusObj);
    //       this.saveRoomStatusCount(this.roomStatusObj);
    //     });
    // },
    // parseArrayData(dataArray) {
    //   const header = dataArray[0];
    //   const roomData = {};

    //   for (let i = 1; i < dataArray.length; i++) {
    //     const columns = dataArray[i];
    //     const roomType = columns[0];
    //     const roomInfo = {};

    //     for (let j = 1; j < header.length; j++) {
    //       roomInfo[header[j]] = columns[j];
    //     }

    //     roomData[roomType] = roomInfo;
    //   }
    //   console.log(`Room Type:`, roomData);
    //   return roomData;
    // },

    // Call the function and get parsed data

    // Loop through all room_sub_types and dates
    // for (const roomType in parsedData) {
    //   console.log(`Room Type: ${roomType}`);
    //   for (const date in parsedData[roomType]) {
    //     console.log(`${date}: ${parsedData[roomType][date]}`);
    //   }
    //   console.log(""); // Empty line for better readability
    // },

    generateWeek() {
      const weekDates = [];
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(this.startDate);
        currentDate.setDate(currentDate.getDate() + i);
        weekDates.push(currentDate);
      }
      this.dates111111111 = weekDates;
        console.log("week",this.dates111111111)
    },
    formatDate(date) {
      return date.toDateString();
    },
    nextWeek() {
      const nextStartDate = new Date(this.startDate);
      nextStartDate.setDate(nextStartDate.getDate() + 7);
      this.startDate = nextStartDate;
      this.generateWeek();

         let dateformat = this.dates111111111;

      let formattedDates = dateformat.map((date) => {
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      });
      let output = formattedDates.join(",");
      // console.log("propertyoperation_room_avlprice_row",this.propertyoperation_room_avlprice_row)
      this.getroomsavailabilitiespricestable(output);
    },
    generateWeek111111111() {
      const weekDates = [];
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(this.startDate);
        currentDate.setDate(currentDate.getDate() + i);
        weekDates.push(currentDate);
      }
      this.dates111111111 = weekDates;
    },

    previousWeek() {
      const currentDate = new Date();
      if (currentDate.getDate() === this.startDate.getDate()) {
        // console.log("Current date is already the start date, no need to go back further")
        return;
      }

      const previousStartDate = new Date(this.startDate);
      previousStartDate.setDate(previousStartDate.getDate() - 7);
      this.startDate = previousStartDate;
      this.generateWeek111111111();
      let dateformat = this.dates111111111;

let formattedDates = dateformat.map((date) => {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
});
let output = formattedDates.join(",");
// console.log("propertyoperation_room_avlprice_row",this.propertyoperation_room_avlprice_row)
this.getroomsavailabilitiespricestable(output);
    },

    previewSelectedDates() {},
    loadFoodDetails(item) {
      const index = this.foodDetails_rows.indexOf(item);
      this.foodRows = Object.assign({}, item);
      this.getFoodData(item);
    },
    foodCount(item) {
      this.foodStatusObj = Object.assign({}, item);
      this.foodStatusObj.status = item.status == "no" ? true : false;
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Change the Status ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.loadFoodStatus(this.foodStatusObj);
          this.ledgerFoodDetails(this.foodStatusObj);
        })
        .onCancel(() => {});
    },
    loadTravelDetails(item) {
      const index = this.travel_item_rows.indexOf(item);
      this.travelItemRows = Object.assign({}, item);
      //console.log("travelItemRows",this.travelItemRows);
      this.getTravelDetails(item);
    },
    emptysubPartnerNames() {
      this.travelDetails.sub_partner_name = [];
      this.travelDetails.company_name = [];
    },
    travelstatus(item) {
      this.travelStatusObj = Object.assign({}, item);
      this.travelStatusObj.status = item.status == "no" ? true : false;
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Change the Status ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.loadTravelStatus(this.travelStatusObj);
          this.ledgertravelDetails(this.travelStatusObj);
        })
        .onCancel(() => {});
    },
    loadEquipmentDetails(item) {
      // console.log("loadEquipmentDetails",item);
      const index = this.equipment_item_rows.indexOf(item);
      this.equipmentItemRows = Object.assign({}, item);
      // console.log("equipmentItemRows",this.equipmentItemRows)
      this.getMedicalEqpData(item);
    },
    emptyequipmentsubPartnerNames() {
      this.equipmentDetails.sub_partner_name = [];
      this.equipmentDetails.equipment_name = [];
      this.equipmentDetails.partner_address = [];
      this.partnerDashboardData.sub_partner_name = [];
      this.foodDashboard.sub_partner_name = [];
      this.foodDashboard.equipment_name = [];
      this.foodDashboard.partner_address = [];
      this.foodDashboard.property_name = [];
    },
    equipmentStatusCount(item) {
      this.equipmentStatusObj = Object.assign({}, item);
      this.equipmentStatusObj.status = item.status == "no" ? true : false;
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Change the Status ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.loadEquipmentStatus(this.equipmentStatusObj);
          this.ledgerEquipmentDetails(this.equipmentStatusObj);
        })
        .onCancel(() => {});
    },
    getDaysOfMonth(year, month) {
      this.current_month_dates = [];
      let monthDate = moment(year + "-" + month, "YYYY-MM");
      let daysInMonth = monthDate.daysInMonth();
      let arrDays = [];
      while (daysInMonth) {
        let current = moment().date(daysInMonth);
        arrDays.push(current.format("MM-DD-YYYY"));
        daysInMonth--;
      }
      let rev_arrDays = arrDays.reverse();

      let todayDate = new Date();
      let dateval = String(todayDate.getDate()).padStart(2, "0");
      let monthVal = String(todayDate.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yearVal = todayDate.getFullYear();
      todayDate = monthVal + "-" + dateval + "-" + yearVal;

      let index = rev_arrDays.indexOf(todayDate);
      let remainingDays = rev_arrDays.splice(index, rev_arrDays.length - index);
      for (let i = 0; i < remainingDays.length; i++) {
        this.current_month_dates.push({
          dates: remainingDays[i],
          countVariable: `a${dateval}`,
        });
        dateval++;
      }
    },
    openRoomScheduleDialog(item) {
      this.roomScheduleData = Object.assign({}, item);
      this.roomScheduleDialog = true;
      // this.getDaysOfMonth(2022, 7);
      // this.getAllRoomAvailCountDates(this.roomScheduleData)
    },
    openBulkInventory(item) {
      // this.roomScheduleData = Object.assign({}, item);
      this.BulkinventoryDialog = true;
      // this.getDaysOfMonth(2022, 7);
      // this.getAllRoomAvailCountDates(this.roomScheduleData)
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.partner_id = "");
      this.onclickValue = "";
      this.step = 1;
      this.addDataDialog = true;
      this.details = false;
    },
    closeRoomScheduleDialog() {
      this.allSelectedDates = [];
      this.schedule_date = "";
    },
    closeUpdateroomDialog() {
      this.updateRoomDialogforDashboard = false;
    },
    addScheduledDates(item) {
      this.room_availability.selected_date = item;
      this.room_availability.account_id = this.roomScheduleData.account_id;
      this.room_availability.partner_id = this.roomScheduleData.partner_id;
      this.room_availability.partner_sub_id =
        this.roomScheduleData.partner_sub_id;
      this.room_availability.property_txn_id =
        this.roomScheduleData.property_txn_id;
      this.room_availability.room_txn_id = this.roomScheduleData.txn_id;
    },
    submitRoomAvailabilityData() {
      this.saveRoomsAvailData(this.room_availability);
    },

    changeAvailabilityCount(item) {
      this.sample1 = Object.assign({}, item);
      for (const element of this.allSelectedDates) {
        if (element.txn_id == this.sample1.txn_id) {
        }
      }
    },
    showDialogPopup() {
      this.confirm = true;
    },
    backToDashboard() {
      this.confirm = false;
      this.closeRoomScheduleDialog();
      this.roomScheduleDialog = false;
    },
    accomodationdetails() {
      this.accdata = true;
      this.acctravel = false;
      this.accfood = false;
      this.accmedical = false;
      this.emptyValue();
    },
    accTravelDetails() {
      this.accdata = false;
      this.acctravel = true;
      this.accfood = false;
      this.accmedical = false;
      this.emptyValue();
    },
    accFoodDetails() {
      this.accdata = false;
      this.acctravel = false;
      this.accfood = true;
      this.accmedical = false;
      this.emptyValue();
    },
    accMedicalDetails() {
      this.accdata = false;
      this.acctravel = false;
      this.accfood = false;
      this.accmedical = true;
      this.emptyValue();
    },
    foodaccomodationdetails() {
      this.foodacc = true;
      this.foodtravel = false;
      this.fooddata = false;
      this.foodmedical = false;
      this.emptyValue();
    },
    foodTravelDetails() {
      this.foodacc = false;
      this.foodtravel = true;
      this.fooddata = false;
      this.foodmedical = false;
      this.emptyValue();
    },
    FoodpartnerDetails() {
      this.foodacc = false;
      this.foodtravel = false;
      this.fooddata = true;
      this.foodmedical = false;
      this.emptyValue();
    },
    foodMedicalDetails() {
      this.foodacc = false;
      this.foodtravel = false;
      this.fooddata = false;
      this.foodmedical = true;
      this.emptyValue();
    },
    travelaccomodationdetails() {
      this.travelacc = true;
      this.travelfood = false;
      this.traveldata = false;
      this.travelmedical = false;
      this.emptyValue();
    },
    travelfoodDetails() {
      this.travelacc = false;
      this.travelfood = true;
      this.traveldata = false;
      this.travelmedical = false;
      this.emptyValue();
    },
    closeAddPartnerDialog() {
      this.addDataDialog = false;
      this.resetFiles();
      this.propertyPartnerForm = propertyRegistrationMaster();
    },
    travelpartnerDetails() {
      this.travelacc = false;
      this.travelfood = false;
      this.traveldata = true;
      this.travelmedical = false;
      this.emptyValue();
    },
    travelMedicalDetails() {
      this.travelacc = false;
      this.travelfood = false;
      this.traveldata = false;
      this.travelmedical = true;
      this.emptyValue();
    },
    medicalaccomodationdetails() {
      this.medicalacc = true;
      this.medicaltravel = false;
      this.medicalfood = false;
      this.medicaldata = false;
      this.emptyValue();
    },
    medicalTravelDetails() {
      this.medicalacc = false;
      this.medicaltravel = true;
      this.medicalfood = false;
      this.medicaldata = false;
      this.emptyValue();
    },
    medicalFoodDetails() {
      this.medicalacc = false;
      this.medicaltravel = false;
      this.medicalfood = true;
      this.medicaldata = false;
      this.emptyValue();
    },
    MedicalDetails() {
      this.medicalacc = false;
      this.medicaltravel = false;
      this.medicalfood = false;
      this.medicaldata = true;
      this.emptyValue();
    },
    showfoodRoomsData() {
      // console.log("ssss",this.foodDashboard)
      this.getfoodHotelInfo(this.foodDashboard);
    },
    showtravelRoomsData() {
      this.gettravelHotelInfo(this.partnerDashboardData);
    },
    showmedicalRoomsData() {
      this.getmedicalHotelInfo(this.partnerDashboardData);
    },
    openupdatePriceAvailabilitiesDialog(item) {
      this.updatePriceAvailabilitiesDialog = true;
      this.editRoomItem(item);
    },
    editRoomItem(item) {
      console.log("item", item);

      this.activeTab = "otherroomdeatils";
      this.editedIndex = this.data.indexOf(item);
      this.editedRoomItem = Object.assign({}, item);
      //  console.log("item22", this.editedRoomItem);

      // this.editedRoomItem.other_amenities = item.other_amenities;
      this.editedRoomItem.account_id = item.account_id;
      this.editedRoomItem.txn_id = item.txn_id;
      this.editedRoomItem.sub_property_name = item.sub_property_name;
      this.editedRoomItem.partner_name = item.partner_name;
      this.editedRoomItem.sub_partner_name = item.sub_partner_name;
      this.editedRoomItem.property_name = item.property_name;

      const amenity = [];
      if (item && item.facilities && item.icon_image) {
        amenity.push({
          amenity_name: item.facilities.split(","),
          icon_image: item.icon_image.split(","),
        });
      }
      this.editedRoomItem.facilities = amenity;

      let dateformat = this.dates111111111;

      let formattedDates = dateformat.map((date) => {
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      });
      let output = formattedDates.join(",");
      // console.log("propertyoperation_room_avlprice_row",this.propertyoperation_room_avlprice_row)
      this.getroomsavailabilitiespricestable(output, item);
      // this.getupdateroomDetails(this.editedRoomItem);
    },

    closeDialog1() {
      this.$refs.qDateProxy1.hide();
    },
    getOtherAmenities(facilities) {
      for (let i = 0; i < facilities.length; i++) {
        if (facilities[i].amenity_name == "Others") {
          this.otheramenitiesinput = true;
        } else {
          this.otheramenitiesinput = false;
        }
      }
    },
    emptyValue() {
      this.partnerDashboardData.partner_name = [];
      this.partnerDashboardData.partner_sub_name = [];
      this.partnerDashboardData.property_name = [];
      this.partnerDashboardData.sub_partner_name = [];
      this.partnerDashboardData.equipment_name = [];
      this.foodDashboard.partner_name = [];
      this.foodDashboard.sub_partner_name = [];
      this.foodDashboard.equipment_name = [];
      this.foodDashboard.restaurant_name = [];
      this.foodDashboard.partner_sub_name = [];
      this.foodDashboard.property_name = [];
      this.travelDetails.partner_name = [];
      this.travelDetails.sub_partner_name = [];
      this.travelDetails.company_name = [];
      this.equipmentDetails.partner_name = [];
      this.equipmentDetails.sub_partner_name = [];
      this.equipmentDetails.equipment_name = [];
    },
    // save method for update room details//
    // upDateData() {
    //   console.log("ytytyr");
    //   this.$refs.updateroomdetails.validate().then((success) => {
    //     if (success) {
    //       if (this.editedRoomItem.partner_id != "") {
    //         this.$q
    //           .dialog({
    //             title: "Confirm",
    //             message: "Do you want to Submit data ?",
    //             cancel: true,
    //             persistent: true,
    //           })
    //           .onOk(() => {
    //             console.log("editedRoomItem", this.editedRoomItem);

    //             const formData = new FormData();

    //             formData.append(
    //               "editedRoomItem",
    //               JSON.stringify(this.editedRoomItem)
    //             );
    //             this.updateRoomdataSaving(formData);

    //             this.updateRoomDialogforDashboard = false;

    //             // this.getPropertyDetails(this.editedItem);
    //           })
    //           .onCancel(() => {
    //             this.updateRoomDialogforDashboard = true;
    //           });
    //       }
    //     }
    //   });
    // },
    upDateDataPriceAndAvaliability(index, date) {
      this.$refs.updateroomdetails.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              const selectedDate = this.dates111111111[index];
              const converteddate = selectedDate.getDate();
              const converteyesr = selectedDate.getFullYear();
              const monthIndex = selectedDate.getMonth();
              const convertedmonth = monthIndex + 1;
              const allPriceAvaDeatils = this.propertyoperation_room_avlprice_row;
              const updatedPriceAndAvaliabilityData = {
                date: converteddate,
                avaliabilityDate: "a" + converteddate,
                avaliabilityPrice: "p" + converteddate,
                year: converteyesr,
                m: convertedmonth,
                acprice: allPriceAvaDeatils.ac[`p${date.getDate()}`],
                // room_sub_type1:"ac",
                // room_sub_type2:"non_ac",
                // room_sub_type3:"ac_breakfast",
                // room_sub_type4:"non_ac_breakfast",
                room_id: this.editedRoomItem.txn_id,
                partner_id: this.editedRoomItem.account_id,
                nonAcPrice: allPriceAvaDeatils.non_ac[`p${date.getDate()}`],
                acWithBreakfastPrice:
                  allPriceAvaDeatils.ac_breakfast[`p${date.getDate()}`],
                nonAcWithBreakfastPrice:
                  allPriceAvaDeatils.non_ac_breakfast[`p${date.getDate()}`],
                acAvailability: allPriceAvaDeatils.ac[`a${date.getDate()}`],
                nonAcAvailability:
                  allPriceAvaDeatils.non_ac[`a${date.getDate()}`],
                acWithBreakfastAvailability:
                  allPriceAvaDeatils.ac_breakfast[`a${date.getDate()}`],
                nonAcWithBreakfastAvailability:
                  allPriceAvaDeatils.non_ac_breakfast[`a${date.getDate()}`],
              };

              console.log(
                "Updated data for",
                ":",
                updatedPriceAndAvaliabilityData
              );

              this.updateRoomPriceAndAvaliability(
                updatedPriceAndAvaliabilityData
              );
            })
            .onCancel(() => {
              this.resetFiles();
            });
        }
      });
    },

    upDateData() {
      this.$refs.updateroomdetails.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              // console.log("update", this.editedPropertyData);
              this.updatePropertyoperationroomDetails(this.editedRoomItem);
              this.updatePriceAvailabilitiesDialog = false;
              this.showRoomsData();
            })
            .onCancel(() => {
              this.propertyEditDialog = true;
              this.resetFiles();
            });
        }
      });
    },

    onformSubmit() {
      this.$refs.FormBasic.validate().then((success) => {
        if (success) {
          if (this.form.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                console.log("this.form", this.form);

                const formData = new FormData();

                formData.append("form_details", JSON.stringify(this.form));
                this.formDetailsSaving(formData);
                this.resetFiles();

                // this.getPropertyDetails(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.roomScheduleDialog = true;
              });
          }
        }
      });
    },
  },
};
</script>
 <style>
.columnfordate {
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
}
</style>
