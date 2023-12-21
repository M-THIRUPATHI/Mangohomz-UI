<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 120px">

      <subHeaderForAdmin />




      <!--BOOKING ALL MODULE START-->
      <div
        style="
          display: flex;
          justify-content: inherit;
          background-color: #2d4591;
          color: white;
          font-size: 17px;
          font-weight: bold;
          margin-top: 10px;
        "
      >
        <span style="margin-left: 15px">Active Bookings</span>
      </div>
      <template v-if="live_bookingdata_all_rows.length > 0">
        <q-table
          dense
          style="
            font-family: verdana;
            height: fit-content;
            border: 1px solid #000;
            margin: 10px;
          "
          :title="title3"
          :data="live_bookingdata_all_rows"
          :columns="live_bookings_columns"
          :filter="filter"
          :wrap-cells="true"
          :selected.sync="selected"
          separator="cell"
          :grid="mode === 'grid'"
          hide-bottom
          :rows-per-page-options="[live_bookingdata_all_rows.length]"
          :rows-per-page="live_bookingdata_all_rows.length"
        >
        </q-table>
      </template>
      <template v-else>
        <p>No records found.</p>
      </template>

      <!--Upcoming Booking Details Start-->

      <div
        style="
          display: flex;
          justify-content: inherit;
          background-color: #2d4591;
          color: white;
          font-size: 17px;
          font-weight: bold;
          margin-top: 10px;
        "
      >
        <span style="margin-left: 15px">UpComing Bookings</span>
      </div>
      <template v-if="upcoming_bookingdata_all_rows.length > 0">
        <q-table
          dense
          style="
            font-family: verdana;
            height: fit-content;
            border: 1px solid #000;
            margin: 10px;
          "
          :data="upcoming_bookingdata_all_rows"
          :columns="upcoming_bookings_columns"
          :filter="filter"
          :wrap-cells="true"
          :selected.sync="selected"
          separator="cell"
          :grid="mode === 'grid'"
          hide-bottom
          :rows-per-page-options="[upcoming_bookingdata_all_rows.length]"
          :rows-per-page="upcoming_bookingdata_all_rows.length"
        >
        </q-table>
      </template>
      <template v-else>
        <p>No records found.</p>
      </template>

      <!--Upcoming Booking Details End-->

      <div
        class="AccomBkgDetails"
        style="display: flex; justify-content: center; align-items: center"
      >
        <!--Accommodation Booking Details Start-->
        <div
          class="AccomBkgTbl"
          style="
            background-color: #2d4591;
            width: 600px;
            height: fit-content;
            margin: 10px;
          "
        >
          <q-item-label
            style="
              text-align: center;
              color: white;
              font-size: 20px;
              padding: 10px;
            "
          >
            Accommodation Booking Details
          </q-item-label>
          <!--mh_bookings_table-->
          <div
            style="display: flex; justify-content: space-between; padding: 10px"
          >
            <div
              v-for="item in booking_all_rows"
              :key="item.s_no"
              style="
                background-color: white;
                width: 600px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{ item.length }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Bookings
              </q-item-label>
            </div>
            &ensp;
            <div
              v-for="item in booking_all_rows"
              :key="item.guest_count"
              style="
                background-color: white;
                width: 600px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  item.reduce(
                    (acc, item) => acc + parseInt(item.guest_count),
                    0
                  )
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Occupants</q-item-label
              >
            </div>
            &ensp;
            <div
              v-for="item in booking_all_rows"
              :key="item.room_booked_count"
              style="
                background-color: white;
                width: 600px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  item.reduce(
                    (acc, item) => acc + parseInt(item.room_booked_count),
                    0
                  )
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Rooms</q-item-label
              >
            </div>
            &ensp;
            <div
              v-for="item in booking_all_rows"
              :key="item.no_of_days"
              style="
                background-color: white;
                width: 600px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  item.reduce(
                    (acc, item) =>
                      acc +
                      parseInt(item.no_of_days) *
                        parseInt(item.room_booked_count),
                    0
                  )
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Nights
              </q-item-label>
            </div>
            &ensp;
            <div
              v-for="item in booking_all_rows"
              :key="item.total_price"
              style="
                background-color: white;
                width: 800px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >₹{{
                  item.reduce(
                    (acc, item) => acc + parseInt(item.total_price),
                    0
                  )
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Booking Value
              </q-item-label>
            </div>
          </div>
        </div>
        <!--Accommodation Booking Details End-->
        <!--Accommodation Booking for month wise Start-->
        <q-table
          dense
          style="
            font-family: verdana;
            height: fit-content;
            border: 1px solid #000;
            margin: 10px;
          "
          :title="title"
          :data="monthwise_accbooking_rows"
          :columns="monthwise_accbooking_columns"
          :filter="filter"
          :selected.sync="selected"
          separator="cell"
          :grid="mode === 'grid'"
          hide-bottom
          :rows-per-page-options="[monthwise_accbooking_rows.length]"
          :rows-per-page="monthwise_accbooking_rows.length"
        >
          <template v-slot:bottom-row>
            <q-tr>
              <q-td colspan="1" style="text-align: center">
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

              <q-td style="text-align: center">
                <strong
                  >₹{{ parseInt(avg_booking_amount / total_bookings) }}</strong
                >
              </q-td>

              <q-td style="text-align: center">
                <strong
                  >₹{{ parseInt(avg_booking_amount / total_nights) }}</strong
                >
              </q-td>
            </q-tr>
          </template>
        </q-table>
        <!--Accommodation Booking for month wise End-->
      </div>
<div class="flex flex-center">
        <q-table
          dense
          style="
            font-family: verdana;
            height: fit-content;
            border: 1px solid #000;
            margin: 10px;
          "
          :title="hspHubWiseBooking"
          :data="hospital_hub_wise_bookings_rows"
          :columns="hospital_hub_wise_bookings_colums"
          :filter="filter"
          :selected.sync="selected"
          separator="cell"
          :grid="mode === 'grid'"
          hide-bottom
          :wrap-cells="true"

        >
          <template v-slot:bottom-row>
            <q-tr>
              <q-td colspan="3" style="text-align: center">
                <strong>Total</strong>
              </q-td>
              <q-td style="text-align: center">
                <strong>{{ totalHspWiseBookings }}</strong>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <!--BOOKING ALL MODULE END-->

      <!--CANCELLATIONS ALL MODULE START-->
      <div
        style="
          display: flex;
          justify-content: inherit;
          background-color: #2d4591;
          color: white;
          font-size: 17px;
          font-weight: bold;
          margin-top: 10px;
        "
      >
        <span style="margin-left: 15px">Cancellations</span>
      </div>
      <div
        class="CancelDetails"
        style="display: flex; justify-content: center; align-items: center"
      >
        <!--Accommodation Cancellation Start-->
        <div
          style="
            background-color: #2d4591;

            height: fit-content;
            margin: 10px;
          "
        >
          <q-item-label
            style="
              text-align: center;
              color: white;
              font-size: 20px;
              padding: 10px;
            "
          >
            Accommodation Cancellation Details
          </q-item-label>
          <!--mh_accommodation_cancellation_table-->
          <div
            style="display: flex; justify-content: space-between; padding: 10px"
          >
            <div
              v-for="item in accommodation_cancellation_rows"
              :key="item.s_no"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{ item.length }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Cancellation</q-item-label
              >
            </div>
            &ensp;
            <div
              v-for="item in accommodation_cancellation_rows"
              :key="item.no_of_days"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  item.reduce(
                    (acc, item) =>
                      acc +
                      parseInt(item.no_of_days) *
                        parseInt(item.room_booked_count),
                    0
                  )
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Nights
              </q-item-label>
            </div>
            &ensp;
            <div
              v-for="item in accommodation_cancellation_rows"
              :key="item.total_price"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >₹{{
                  item.reduce(
                    (acc, item) => acc + parseInt(item.total_price),
                    0
                  )
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Booking Value
              </q-item-label>
            </div>
            &ensp;
            <div
              v-for="item in accommodation_cancellation_rows"
              :key="item.refundAmount"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >₹{{
                  item.reduce(
                    (acc, item) => acc + parseInt(item.refundAmount),
                    0
                  )
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Refund Value</q-item-label
              >
            </div>
          </div>
        </div>
        <!--Accommodation Cancellation End-->
        <!--Accommodation Cancellation for month wise Start-->
        <q-table
          dense
          style="
            font-family: verdana;
            height: fit-content;
            border: 1px solid #000;
            margin: 15px;
          "
          :title="title2"
          :data="monthwise_accCancellation_rows"
          :columns="monthwise_accCancellation_columns"
          :filter="filter"
          :selected.sync="selected"
          separator="cell"
          :grid="mode === 'grid'"
          hide-bottom
        >
          <template v-slot:bottom-row>
            <q-tr>
              <q-td colspan="1" style="text-align: center"
                ><strong>Total</strong>
              </q-td>
              <q-td style="text-align: center">
                <strong>{{ total_cancellations }}</strong>
              </q-td>
              <q-td style="text-align: center">
                <strong>{{ total_cancellation_nights }}</strong>
              </q-td>
              <q-td style="text-align: center">
                <strong>{{ total_cancellation_occupants }}</strong>
              </q-td>
              <q-td style="text-align: center">
                <strong>{{ total_cancellation_rooms }}</strong>
              </q-td>
              <q-td style="text-align: center">
                <strong>₹{{ total_cancellation_amount }}</strong>
              </q-td>
              <q-td style="text-align: center">
                <strong>₹{{ total_Cancelrefund_amount }}</strong>
              </q-td>
            </q-tr>
          </template>
        </q-table>
        <!--Accommodation Cancellation for month wise End-->
      </div>
      <!--CANCELLATIONS ALL MODULE END-->

      <!--PARTNER & AGENT ALL MODULE START-->
      <div
        style="
          display: flex;
          justify-content: inherit;
          background-color: #2d4591;
          color: white;
          font-size: 17px;
          font-weight: bold;
          margin-top: 10px;
        "
      >
        <span style="margin-left: 15px">Partner & Agent</span>
      </div>
      <div
        class="PartnerAgent"
        style="
          font: -webkit-control;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        "
      >
        <!--partner Details Start-->
        <div
          style="background-color: #2d4591; height: fit-content; margin: 10px"
        >
          <q-item-label
            style="
              text-align: center;
              color: white;
              font-size: 20px;
              padding: 10px;
            "
          >
            Partner Details
          </q-item-label>

          <div class="PartnerAgentContent" style="display: flex; padding: 10px">
            <!--partner_registration-->
            <div
              v-if="partner_registration_displayAll_rows.length > 0"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  partner_registration_displayAll_rows[0].PartnerEOIs
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Partner EOIs</q-item-label
              >
            </div>
            <!--mh_property_master-->
            &ensp;
            <div
              v-if="property_master_displayAll_rows.length > 0"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  property_master_displayAll_rows[0].RegisteredPartners
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Registered Partners
              </q-item-label>
            </div>
            &ensp;
            <div
              v-if="property_master_displayAll_rows.length > 0"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  property_master_displayAll_rows[0].AdminApproved
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Admin Approved</q-item-label
              >
            </div>
          </div>
        </div>
        <!--partner Details End-->

        <!--Agent Details Start-->
        <div
          style="
            background-color: #2d4591;

            height: fit-content;
            margin: 10px;
          "
        >
          <q-item-label
            style="
              text-align: center;
              color: white;
              font-size: 20px;
              padding: 10px;
            "
          >
            Agent Details
          </q-item-label>
          <!--mh_agent_master-->
          <div
            class="AgentDetails"
            style="display: flex; justify-content: space-between; padding: 10px"
          >
            <!--agent_registration-->
            <div
              v-if="agent_registration_displayAll_rows.length > 0"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  agent_registration_displayAll_rows[0].AgentEOIs
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Agent EOIs</q-item-label
              >
            </div>
            &ensp;
            <div
              v-if="agent_master_displayAll_rows.length > 0"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  agent_master_displayAll_rows[0].RegisteredAgents
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Registered Agents
              </q-item-label>
            </div>
            &ensp;
            <div
              v-if="agent_master_displayAll_rows.length > 0"
              style="
                background-color: white;
                width: 200px;
                height: 80px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <q-item-label
                style="text-align: center; font-size: 18px"
                class="text-bold"
                >{{
                  agent_master_displayAll_rows[0].AdminApproved
                }}</q-item-label
              >
              <q-item-label style="text-align: center; font-size: 14px"
                >Admin Approved</q-item-label
              >
            </div>
          </div>
        </div>
        <!--Agent Details End-->
      </div>
      <!--PARTNER & AGENT ALL MODULE END-->

      <!--INVENTORY ALL MODULE START-->
      <!-- <div
        style="
          display: flex;
          justify-content: inherit;
          background-color: #2d4591;
          color: white;
          font-size: 17px;
          font-weight: bold;
          margin-top: 10px;
        "
      >
        <span style="margin-left: 15px">Inventory</span>
      </div>
      <div
        style="
          font: -webkit-control;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        "
      >

        <q-table
          dense
          style="
            font-family: verdana;
            height: fit-content;
            border: 1px solid #000;
            margin: 10px;
          "
          title="Typewise Inventory"
          :data="property_room_displayAll_rows"
          :columns="property_room_displayAll_columns"
          :filter="filter"
          :selected.sync="selected"
          separator="cell"
          :grid="mode === 'grid'"
          hide-bottom
          :rows-per-page-options="[property_room_displayAll_rows.length]"
          :rows-per-page="property_room_displayAll_rows.length"
        >
          <template v-slot:bottom-row>
            <q-tr>
              <q-td colspan="1" style="text-align: center"
                ><strong>Total</strong>
              </q-td>
              <q-td style="text-align: center">
                <strong>{{ Total_typewiseCount }}</strong>
              </q-td>
            </q-tr>
          </template>
        </q-table>

      </div> -->
      <!--INVENTORY ALL MODULE END-->

      <!--Travel Booking Details Start-->
      <!-- <div style="
                  background-color: #2d4591;
                  width: 400px;
                  height: fit-content;
                  margin: 10px;
                ">
        <q-item-label style="
                    text-align: center;
                    color: white;
                    font-size: 20px;
                    padding: 10px;
                  ">
          Travel Booking Details
        </q-item-label>

        <div style="display: flex; justify-content: space-between; padding: 10px">
          <div v-for="item in Travelbooking_all_rows" :key="item.sno" style="
                      background-color: white;
                      width: 400px;
                      height: 80px;
                      border-radius: 10px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    ">
            <q-item-label style="text-align: center; font-size: 18px">{{
              item.length
            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px">Bookings
            </q-item-label>
          </div>
          &ensp;
           <div

            style="
              background-color: white;
              width: 400px;
              height: 80px;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            "
          >
            <q-item-label style="text-align: center; font-size: 18px">{{

            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px"
              >Occupants</q-item-label
            >
          </div>
          &ensp;
          <div

            style="
              background-color: white;
              width: 400px;
              height: 80px;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            "
          >
            <q-item-label style="text-align: center; font-size: 18px">{{

            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px"
              >Rooms</q-item-label
            >
          </div>
          &ensp;
          <div

            style="
              background-color: white;
              width: 400px;
              height: 80px;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            "
          >
            <q-item-label style="text-align: center; font-size: 18px">{{

            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px"
              >Nights
            </q-item-label>
          </div>
          &ensp;
          <div v-for="item in Travelbooking_all_rows" :key="item.payable_amount" style="
                      background-color: white;
                      width: 500px;
                      height: 80px;
                      border-radius: 10px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    ">
            <q-item-label style="text-align: center; font-size: 18px">₹{{
              item.reduce((acc, item) => acc + parseInt(item.payable_amount), 0)
            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px">Booking Value
            </q-item-label>
          </div>
        </div>
      </div> -->
      <!--Travel Booking Details End-->

      <!--Travel Cancellation Start-->
      <!-- <div style="
                  background-color: #2d4591;

                  height: fit-content;
                  margin: 10px;
                ">
        <q-item-label style="
                    text-align: center;
                    color: white;
                    font-size: 20px;
                    padding: 10px;
                  ">
          Travel Cancellation Details
        </q-item-label>
        mh_accommodation_cancellation_table
        <div style="display: flex; justify-content: space-between; padding: 10px">
          <div v-for="item in Travel_cancellation_rows" :key="item.s_no" style="
                      background-color: white;
                      width: 100px;
                      height: 80px;
                      border-radius: 10px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    ">
            <q-item-label style="text-align: center; font-size: 18px">{{
              item.length
            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px">No. of Cancellation</q-item-label>
          </div>
           &ensp;
          <div v-for="item in accommodation_cancellation_rows" :key="item.no_of_days" style="
                    background-color: white;
                    width: 100px;
                    height: 80px;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  ">
            <q-item-label style="text-align: center; font-size: 18px">{{
              item.reduce((acc, item) => acc + parseInt(item.no_of_days), 0)
            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px">Nights
            </q-item-label>
          </div>
          &ensp;
          <div v-for="item in Travel_cancellation_rows" :key="item.payable_amount" style="
                      background-color: white;
                      width: 100px;
                      height: 80px;
                      border-radius: 10px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    ">
            <q-item-label style="text-align: center; font-size: 18px">₹{{
              item.reduce((acc, item) => acc + parseInt(item.payable_amount), 0)
            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px">Booking Value
            </q-item-label>
          </div>
          &ensp;
          <div v-for="item in Travel_cancellation_rows" :key="item.travelrefundamount" style="
                      background-color: white;
                      width: 100px;
                      height: 80px;
                      border-radius: 10px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    ">
            <q-item-label style="text-align: center; font-size: 18px">₹{{
              item.reduce((acc, item) => acc + parseInt(item.travelrefundamount), 0)
            }}</q-item-label>
            <q-item-label style="text-align: center; font-size: 14px">Refund Value</q-item-label>
          </div>
        </div>
      </div> -->
      <!--Travel Cancellation End-->
    </q-page>
  </q-page-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      title: "Month Wise Accommodation Booking Details",
      title2: "Month Wise Accommodation Cancellation Details",
      title3: "Active Bookings Details",
hspHubWiseBooking: "Hospital Hub wise Bookings",
      // title4: "Upcoming Bookings Details",

      filter: "",
      selected: [],
      mode: "list",
    };
  },

  mounted() {
    this.$store.dispatch("adminDashboard/getPartnerRegistartionAllForAdmin");
    this.$store.dispatch("adminDashboard/getAgentRegistartionAllForAdmin");
    this.$store.dispatch("adminDashboard/getpropertyDetailsAllForAdmin");
    this.$store.dispatch("adminDashboard/getpropertyroomtableAllForAdmin");
    this.$store.dispatch("adminDashboard/getpropertypartnerAllForAdmin");
    this.$store.dispatch("adminDashboard/getagentmasterAllForAdmin");
    this.$store.dispatch("adminDashboard/getBookingAllForAdmin");
    this.$store.dispatch("adminDashboard/getBookingAllLiveForAdmin");
    this.$store.dispatch("adminDashboard/getBookingAllUpcomingForAdmin");

    this.$store.dispatch("adminDashboard/getAccommodationCancellationForAdmin");
    this.$store.dispatch("adminDashboard/getMonthwiseAccBookings");
    this.$store.dispatch("adminDashboard/getMonthwiseAccCancellations");
this.$store.dispatch(
      "adminDashboard/getHospitalWiseBookingDetailsForAdmin"
    );
    // this.$store.dispatch("adminDashboard/getTravelBookingForAdmin");
    // this.$store.dispatch("adminDashboard/getTravelCancellationForAdmin");
  },
  computed: {
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];
      return user;
    },
    ...mapState({
totalHspWiseBookings() {
        return this.hospital_hub_wise_bookings_rows.reduce(
          (total, row) => total + row.cnt,
          0
        );
      },
      total_booking_amount() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.booking_amount),
          0
        );
      },
      avg_booking_amount() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.booking_amount),
          0
        );
      },

      avg_booking_nightvalue() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.booking_amount),
          0
        );
      },

      total_bookings() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.total_bookings),
          0
        );
      },
      total_nights() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.total_nights),
          0
        );
      },
      total_guests() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.total_guests),
          0
        );
      },
      total_rooms() {
        return this.monthwise_accbooking_rows.reduce(
          (total, row) => total + parseInt(row.total_rooms),
          0
        );
      },
      total_cancellations() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.total_cancellations),
          0
        );
      },
      Total_typewiseCount() {
        return this.property_room_displayAll_rows.reduce(
          (total, row) => total + parseInt(row.cnt),
          0
        );
      },
      total_cancellation_nights() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.total_nights),
          0
        );
      },
      total_cancellation_amount() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.total_booking_amount),
          0
        );
      },
      total_cancellation_occupants() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.occupants),
          0
        );
      },
      total_cancellation_rooms() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.rooms),
          0
        );
      },
      total_Cancelrefund_amount() {
        return this.monthwise_accCancellation_rows.reduce(
          (total, row) => total + parseInt(row.total_refund_amount),
          0
        );
      },
      ...mapGetters("adminDashboard", ["property_master_displayAll_rows"]),
      ...mapGetters("adminDashboard", ["partner_registration_displayAll_rows"]),
      ...mapGetters("adminDashboard", ["agent_master_displayAll_rows"]),
      ...mapGetters("adminDashboard", ["agent_registration_displayAll_rows"]),
      ...mapGetters("adminDashboard", ["property_detailsAll_rows"]),
      ...mapGetters("adminDashboard", ["property_room_displayAll_rows"]),
      ...mapGetters("adminDashboard", ["booking_all_rows"]),
      ...mapGetters("adminDashboard", ["Travelbooking_all_rows"]),
      ...mapGetters("adminDashboard", ["live_bookingdata_all_rows"]),
      ...mapGetters("adminDashboard", ["upcoming_bookingdata_all_rows"]),

      ...mapGetters("adminDashboard", ["accommodation_cancellation_rows"]),
      ...mapGetters("adminDashboard", ["Travel_cancellation_rows"]),
      ...mapGetters("adminDashboard", ["monthwise_accbooking_rows"]),
      ...mapGetters("adminDashboard", ["monthwise_accCancellation_rows"]),
      ...mapGetters("adminDashboard", ["hospital_hub_wise_bookings_rows"]),
      hospital_hub_wise_bookings_colums: (state) =>
        state.adminDashboard.hospital_hub_wise_bookings_colums,
      monthwise_accbooking_columns: (state) =>
        state.adminDashboard.monthwise_accbooking_columns,
      live_bookings_columns: (state) =>
        state.adminDashboard.live_bookings_columns,
      upcoming_bookings_columns: (state) =>
        state.adminDashboard.upcoming_bookings_columns,

      property_room_displayAll_columns: (state) =>
        state.adminDashboard.property_room_displayAll_columns,
      monthwise_accCancellation_columns: (state) =>
        state.adminDashboard.monthwise_accCancellation_columns,
    }),
  },
  methods: {
    ...mapActions("account", ["getMonthwiseAccBookings"]),
    ...mapActions("account", ["getMonthwiseAccCancellations"]),
  },
};
</script>
<style scoped>
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
