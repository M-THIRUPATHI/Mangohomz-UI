<template>
  <q-page-container class="bg-indigo-1">
    <headerTag />
    <!--Mobile View Start-->
    <q-page style="padding-top: 60px" class="q-pa-sm lt-sm">
      <div class="justify-center grad">
        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card flat :class="this.class_val" class="cursor-pointer">
            <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
              <q-space />
              <q-btn
                size="sm"
                outline
                rounded
                color="primary"
                class="text-weight-bold q-ml-xl"
                @click="confirm = true"
              >
                Home
              </q-btn>
              <q-btn
                size="sm"
                outlined
                rounded
                color="primary"
                class="text-weight-bold q-ml-xl"
                @click="getPrintDetails = true"
                >Print
              </q-btn>
            </q-toolbar>
            <div class="row">
              <div class="q-pa-md">
                <div class="text-bold text-h5">
                  Booking Confirmed -
                  {{ this.propBookedGuestNo[0].property_name }}
                </div>
                <div class="text-bold text-h5">
                  Booking ID No -
                  {{ this.propBookedGuestNo[0].booking_order_id }}
                </div>
                <!-- <div class="text-bold text-h5 q-mt-lg">
                  <img
                    src="../assets/logos/mh-logo.png"
                    width="200px"
                    height="35px"
                  />
                </div> -->
              </div>
              <div class="q-pa-md">
                <div class="text-bold" style="font-size: 18px">
                  Dear Customer,
                </div>
                <p style="text-align: justify">
                  We're glad you've placed your trust in MangoHomz and have
                  chosen us as your preferred Medical trip partner. We are
                  pleased to confirm that
                  <b
                    >{{ this.propBookedGuestNo[0].property_name }} (Near
                    {{ this.propBookedGuestNo[0].near_hospital_name }}) </b
                  >has been reserved under your name. While you're busy
                  preparing for your trip, our teams are constantly working
                  towards providing patient-friendly stay for you.
                </p>
              </div>
            </div>
            <div
              class="row justify-center q-px-sm"
              style="
                font-family: verdana;
                box-sizing: border-box;
                background-color: white;
              "
            >
              <div
                class="row col-12 justify-center q-px-sm"
                style="
                  font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top: 5px;
                  background-color: white;
                "
              >
                <div class="row justify-left col-12 q-mb-md q-pa-sm">
                  <div class="row col-12 items-start">
                    <p
                      class="col-12 items-start text-bold q-mt-sm q-mb-xs"
                      style="font-size: 20px; font-family: verdana"
                    >
                      <img
                        src="~assets/logos/logo-main.png"
                        alt="hii"
                        width="200px"
                        height="50px"
                      />
                    </p>
                  </div>
                  <div class="col-12 text-right">
                    <p
                      class="col-12 text-right text-bold q-mt-sm q-mb-xs"
                      style="font-size: 15px; font-family: verdana"
                    >
                      <b
                        >MANGOHOMZ ID :{{
                          this.propBookedGuestNo[0].booking_order_id
                        }}</b
                      >
                    </p>
                    <p
                      class="col-12 text-right text-bold q-mt-xs q-mb-xs"
                      style="font-size: 15px; font-family: verdana"
                    >
                      PNR :0085007877
                    </p>
                    <p
                      class="col-12 text-right q-mt-xs q-mb-xs"
                      style="font-size: 15px; font-family: verdana"
                    >
                      Hotel booked on {{     moment(
                                  this.propBookedGuestNo[0].inserted_date_time1
                                ).format('DD-MM-YYYY hh:mm A') }}
                      <!-- {{ this.propBookedGuestNo[0].inserted_date_time1 }} -->

                    </p>
                  </div>
                </div>
                <div
                  class="row col-12 justify-center bg-secondary"
                  style="
                    font-family: verdana;
                    border-right: 2px solid lightgrey;
                    box-sizing: border-box;
                    border-left: 2px solid lightgrey;
                    border-top: 2px solid lightgrey;
                    border-bottom: 2px solid lightgrey;
                    margin-bottom: 5px;
                  "
                >
                  <div class="col-12">
                    <div
                      style="
                        width: 70px;
                        border-radius: 50%;
                        background-color: #e4fae9;
                        padding: 15px;
                        margin-top: 15px;
                        margin-left: 60px;
                      "
                    >
                      <q-icon size="40px" name="mdi-domain" color="secondary" />
                    </div>
                  </div>
                  <div class="col-12 text-white">
                    <p style="margin-top: 30px">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b
                        >Your booking at
                        {{ this.propBookedGuestNo[0].property_name }} is
                        confirmed.</b
                      >
                    </p>
                  </div>
                  <div
                    class="col-12"
                    style="
                      border: 2px;
                      border-radius: 10px;
                      margin-bottom: 10px;
                      padding: 10px;
                      background-color: white;
                    "
                  >
                    <p>
                      Your booking at
                      <b>{{ this.propBookedGuestNo[0].property_name }}</b> from
                      <b
                        >{{
                          moment(this.propBookedGuestNo[0].check_in).format(
                            "dddd, DD MMM YYYY"
                          )
                        }}
                        to
                        {{
                          moment(this.propBookedGuestNo[0].check_out).format(
                            "dddd, DD MMM YYYY"
                          )
                        }} </b
                      >from
                      <b>{{ this.propBookedGuestNo[0].guest_count }}</b>
                      guest(s) Is confirmed. You have reserved  {{ this.propBookedGuestNo[0].room_booked_count }} {{  this.propBookedGuestNo[0].room_booked_count == 1 ? "Room" : "Rooms" }} for
                      <b>{{ this.propBookedGuestNo[0].no_of_days }}</b> night(s)
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{ this.propBookedGuestNo[0].total_price }}</b
                      >.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100%
                      refunds) at least 7 days before check-in date. Any
                      cancellation there after the guest will be entitled to
                      only 60% refund till Check-in.
                    </p>
                    <p align="center">
                      <q-btn
                        label="Manage your Additional booking online"
                        style="
                          background-color: lightblue;
                          color: darkblue;
                          font-weight: bold;
                        "
                        outlined
                        @click="morebookings"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="row col-12 bg-white justify-center q-px-sm"
                style="
                  font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top: 5px;
                "
              >
                <div>
                  <q-card-section>
                    <div class="row justify-left col-12 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Booking Details</b>
                      </p>
                      <table
                        style="
                          width: 100%;
                          font-size: 14px;
                          background-color: green;
                          color: white;
                        "
                        class="col-12"
                      >
                        <tr class="row col-12">
                          <td class="row col-12">
                            Booking ID :
                            <b>
                              {{
                                this.propBookedGuestNo[0].booking_order_id
                              }}</b
                            >
                          </td>
                          <td class="col-12">
                            Booked Date :
                            <b>
                              {{     moment(
                                  this.propBookedGuestNo[0].inserted_date_time1
                                ).format('DD-MM-YYYY hh:mm A') }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="row col-12">
                            Customer Name :
                            <b>
                              {{
                                this.propBookedGuestNo[0].GuestDetails[0]
                                  .guest_name
                              }}</b
                            >
                          </td>
                          <td
                            class="col-12"
                            v-if="this.propBookedGuestNo[0].gstin_no != ''"
                          >
                            Customer GSTIN/State :
                            <b>
                              {{ this.propBookedGuestNo[0].gstin_no }} /
                              {{ this.propBookedGuestNo[0].gststate[0].state }}
                            </b>
                          </td>
                          <td
                            class="col-12"
                            v-if="this.propBookedGuestNo[0].gstin_no == ''"
                          >
                            Customer State :
                            <b>
                              {{ this.propBookedGuestNo[0].state }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Near Hospital Name :
                            <b>
                              {{ this.propBookedGuestNo[0].near_hospital_name }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Property Name :
                            <b>
                              {{ this.propBookedGuestNo[0].property_name }}</b
                            >
                          </td>
                          <td class="col-12">
                            Property Type :
                            <b>
                              {{ this.propBookedGuestNo[0].property_type }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Property Address:
                            <b>
                              {{ this.propBookedGuestNo[0].address }}
                            </b>
                          </td>
                          <td class="col-12">
                            Room Type:
                            <b>
                              {{ this.propBookedGuestNo[0].room_type }}
                            </b>
                          </td>
                          <!-- <td class="col-6">
                                  State :
                                  <b>
                                    {{
                                      this.propBookedGuestNo[0]
                                        .property_state_name
                                    }}
                                  </b>
                                </td> -->
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Check In :
                            <b>
                              {{
                                moment(
                                  this.propBookedGuestNo[0].check_in
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                          <td class="col-12">
                            Check Out :
                            <b>
                              {{
                                moment(
                                  this.propBookedGuestNo[0].check_out
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Check In Time:
                            <b>
                              {{ this.propBookedGuestNo[0].checkIn_time }}
                            </b>
                          </td>
                          <td class="col-12">
                            Check Out Time:
                            <b>
                              {{ this.propBookedGuestNo[0].checkOut_time }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Primary No :
                            <b>
                              {{ this.propBookedGuestNo[0].primary_no }}
                            </b>
                          </td>
                          <td class="col-12">
                            Alternate Number :
                            <b>
                              {{ this.propBookedGuestNo[0].alternate_no }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Room Amenities :
                            <b>
                              {{ this.propBookedGuestNo[0].facilities }}
                            </b>
                          </td>
                          <td class="col-6">
                            Room Booked :
                            <b>
                              {{ this.propBookedGuestNo[0].room_booked_count }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="row col-12" style="padding-bottom: 20px">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Booking Guest Details</b>
                      </p>

                      <q-markup-table class="row col-12">
                        <div
                          class="row col-12"
                          style="
                            display: flex;
                            width: 100%;
                            text-align: center;
                            border-top: 1px solid silver;
                          "
                        >
                          <div
                            class="col-12 text-left"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              border-left: 1px solid silver;
                              width: 10%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            <b>Sno</b>
                          </div>
                          <div
                            class="col-12 text-right"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              padding-left: 10px;
                              width: 90%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            <b>Guest Name</b>
                          </div>
                        </div>
                        <div
                          v-for="item in this.propBookedGuestNo[0].GuestDetails"
                          :key="item.index"
                          class="row col-12"
                          style="display: flex; width: 100%; text-align: center"
                        >
                          <div
                            class="col-12 text-left"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              border-left: 1px solid silver;
                              padding-top: 5px;
                              width: 10%;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.sno }}
                          </div>
                          <div
                            class="col-12 text-right"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              /* border-right: 1px solid silver; */
                              padding-left: 10px;
                              width: 30%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.guest_gender }}
                          </div>
                          <div
                            class="col-12 text-right"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              padding-left: 10px;
                              width: 60%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.guest_name }}
                          </div>
                        </div>
                      </q-markup-table>
                    </div>
                    <div class="row justify-left col-12 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Price Details</b>
                      </p>

                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              <b> Price Details</b>
                            </div>
                          </div>
                          <div
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            <b> Amount (₹) </b>
                          </div>
                        </div>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            border-top: 1px solid silver;
                          "
                        >
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Room Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            ₹{{ this.propBookedGuestNo[0].room_price }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Partner Offer
                              <!-- (
                              {{
                                this.propBookedGuestNo[0]
                                  .partner_offer_percentage
                              }}% )  -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].partner_offer }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Base Price
                              <!-- (
                              {{
                                this.propBookedGuestNo[0]
                                  .partner_offer_percentage
                              }}% )  -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].base_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Early Bird Offer
                              <!-- (
                              {{ this.propBookedGuestNo[0].discount }}% ) -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].discount_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            style="width: 60%"
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Applied MH Offer :
                              {{ this.propBookedGuestNo[0].mh_offer_name }}
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].mh_offer_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                              v-if="
                                this.propBookedGuestNo[0].mh_offer_name != ''
                              "
                            >
                              Price After Discount
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            ₹{{
                              this.propBookedGuestNo[0].price_after_discount
                            }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Taxes
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            ₹{{ this.propBookedGuestNo[0].gst_amount }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle text-bold"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Convenience Fee
                            </div>
                          </div>
                          <div
                            class="text-subtitle text-bold"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            ₹{{ "0" }}
                          </div>
                        </div>
                        <!-- <div style="display: flex; width: 100%">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            Add GST at ({{
                              this.propBookedGuestNo[0].gst_percentage
                            }}%) :-
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              "
                            >
                              CGST at ({{
                                this.propBookedGuestNo[0].cgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                           ₹{{ this.propBookedGuestNo[0].cgst_amount }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              "
                            >
                              SGST at ({{
                                this.propBookedGuestNo[0].sgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                           ₹{{ this.propBookedGuestNo[0].sgst_amount }}
                          </div>
                        </div> -->
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 15px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Total Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            <strong>
                              ₹{{ this.propBookedGuestNo[0].total_price }}
                              /-
                            </strong>
                          </div>
                        </div>
                        <div style="width: 100%; text-align: right">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-right: 10px;
                              padding-top: 5px;
                            "
                          >
                            <strong
                              >Grand Total (in Words) :-
                              {{ this.priceinwords }}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row justify-left col-12 q-mb-md"
                      style="padding-top: 20px"
                    >
                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <p
                          class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="
                            font-size: 15px;
                            font-family: verdana;
                            padding-left: 10px;
                          "
                        >
                          <b>MangoHomz Support</b>
                        </p>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            text-align: center;
                            padding-bottom: 10px;
                          "
                        >
                          <div
                            class="text-center"
                            style="
                              text-align: center;
                              padding-top: 10px;
                              width: 10%;
                              padding-left: 10px;
                            "
                          >
                            <img
                              src="~assets/logos/MHmini_logo_128x128.png"
                              alt="hii"
                              width="50px"
                              height="50px"
                            />
                          </div>
                          <div
                            class="text-center"
                            style="padding-left: 20px; width: 65%"
                          >
                            <div class="col-12">
                              <div
                                style="
                                  padding-left: 50px;
                                  color: #1e398e;
                                  text-align: center;
                                "
                              >
                                <u>Contact US</u>
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                WhatsApp Number: 8929982655
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                E-Mail: care@MangoHomz.com
                              </div>
                            </div>
                          </div>
                          <div
                            class="text-center"
                            style="padding-right: 40px; width: 25%"
                          >
                            <div class="col-12">
                              <div style="color: #1e398e">
                                <u>Business Hours</u>
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                Monday – Saturday
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                10AM – 6 PM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row justify-left col-12 q-mb-md"
                      style="padding-top: 20px"
                    >
                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <p
                          class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="
                            font-size: 15px;
                            font-family: verdana;
                            padding-left: 10px;
                          "
                        >
                          <b>Other Information</b>
                        </p>
                        <p
                          style="
                            font-size: 12px;
                            font-family: verdana;
                            padding-left: 20px;
                          "
                        >
                          <b>Safety and Hygiene</b>
                        </p>
                        <p
                          style="
                            font-size: 12px;
                            font-family: verdana;
                            padding-left: 20px;
                          "
                        >
                          • Quarantine protocols are being followed as per local
                          government authorities Guests from containment zones
                          are not allowed
                        </p>
                        <p
                          style="
                            font-size: 12px;
                            font-family: verdana;
                            padding-left: 20px;
                          "
                        >
                          • Shared resources in common areas are properly
                          sanitized Property staff is trained on hygiene
                          guidelines
                        </p>
                        <p
                          style="
                            font-size: 12px;
                            font-family: verdana;
                            padding-left: 20px;
                          "
                        >
                          • Only those guests with safe status on Aarogya Setu
                          app are allowed Hand sanitizer is provided in guest
                          accommodation and common areas
                        </p>
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </div>
              <q-dialog v-model="moreservices">
                <q-card style="min-width: 200px">
                  <q-card-section class="row col-12">
                    <div class="col-12 text-h6 text-bold text-primary">
                      <q-icon>
                        <q-img
                          src="~assets/logos/MHmini_logo_128x128.png"
                        ></q-img>
                      </q-icon>
                      Book More MANGOHOMZ Services
                    </div>
                    <div>
                      <q-btn
                        dark
                        flat
                        padding="none"
                        class="justify-end"
                        icon="close"
                        v-close-popup
                      >
                        <q-tooltip>close</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator />
                  <div class="row col-12 justify-center q-ma-md">
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-12 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          TRAVEL
                        </div>
                        <div class="text-caption">
                          Smooth travel facilities 24 / 7
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addTravel"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-12 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          MEDICAL EQUIPMENT
                        </div>
                        <div class="text-caption">
                          Book Medical Equipment during Medical Trip
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addMedical"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-12 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          FOOD
                        </div>
                        <div class="text-caption">Nutritious Hygenic Food</div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addFood"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                  </div>
                </q-card>
              </q-dialog>
            </div>
          </q-card>
        </div>
      </div>
      <q-dialog
        v-model="getPrintDetails"
        persistent
        class="my_card"
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="justify-center" style="padding-bottom: 20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />
            <q-btn
              print="'#createPdf'"
              label="Print"
              v-print="getPrintDetails"
              rounded
              class="positive text-bold text-white"
              @click="printpart('createPdf')"
            />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <div id="createPdf" class="body q-px-xl">
            <!-- <div id="createPdf" class="body q-px-xl"> -->
            <div
              class="row justify-center q-px-xl"
              style="
                font-family: verdana;
                box-sizing: border-box;
                background-color: white;
              "
            >
              <div
                class="row col-12 justify-center q-px-sm"
                style="
                  font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top: 5px;
                  background-color: white;
                "
              >
                <div style="display: flex; width: 100%">
                  <div style="width: 40%">
                    <p
                      class="col-5 text-bold"
                      style="font-size: 20px; font-family: verdana"
                    >
                      <img
                        src="~assets/logos/logo-main.png"
                        alt="hii"
                        width="200px"
                        height="50px"
                      />
                    </p>
                  </div>
                  <div style="width: 60%; text-align: right">
                    <p
                      class="col-12 text-right text-bold"
                      style="font-size: 15px; font-family: verdana"
                    >
                      <b
                        >MANGOHOMZ ID :{{
                          this.propBookedGuestNo[0].booking_order_id
                        }}</b
                      >
                    </p>
                    <p
                      class="col-12 text-right text-bold"
                      style="font-size: 15px; font-family: verdana"
                    >
                      PNR :0085007877
                    </p>
                    <p
                      class="col-12 text-right"
                      style="font-size: 15px; font-family: verdana"
                    >
                      Accommodation Hotel booked on
                      {{     moment(
                                  this.propBookedGuestNo[0].inserted_date_time1
                                ).format('DD-MM-YYYY hh:mm A') }}
                    </p>
                  </div>
                </div>

                <div
                  class="col-12 row"
                  style="
                    border: 2px;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    padding: 10px;
                    background-color: white;
                  "
                >
                  <p style="margin-top: 30px">
                    Thank you for booking with us.
                    <b
                      >Your booking at
                      {{ this.propBookedGuestNo[0].property_name }} is
                      confirmed.</b
                    >
                  </p>

                  <p>
                    Your booking at
                    <b>{{ this.propBookedGuestNo[0].property_name }}</b> from
                    <b
                      >{{
                        moment(this.propBookedGuestNo[0].check_in).format(
                          "dddd, DD MMM YYYY"
                        )
                      }}
                      to
                      {{
                        moment(this.propBookedGuestNo[0].check_out).format(
                          "dddd, DD MMM YYYY"
                        )
                      }} </b
                    >from
                    <b>{{ this.propBookedGuestNo[0].guest_count }}</b> guest(s)
                    Is confirmed. You have reserved  {{ this.propBookedGuestNo[0].room_booked_count }} {{  this.propBookedGuestNo[0].room_booked_count == 1 ? "Room" : "Rooms" }} for
                    <b>{{ this.propBookedGuestNo[0].no_of_days }}</b> night(s)
                  </p>
                  <p>
                    You have paid amount of INR
                    <b>{{ this.propBookedGuestNo[0].total_price }}</b
                    >.
                  </p>
                  <p class="text-green text-bold">
                    You booking is under Free Cancellation policy (100% refunds) at least 3 days before check-in date. Any cancellation there after the guest will be entitled to only 60% refund till Check-in after all necessary tax deductions applicable. Once checked in there is no cancellation.
                  </p>
                  <!-- <p align="center">
                      <q-btn label="Manage your booking online"
                        style="background-color:lightblue;color:darkblue;font-weight: bold;" outlined
                        @click="morebookings" />
                    </p> -->
                </div>
              </div>
              <div
                class="row col-12 bg-white justify-center q-px-sm"
                style="
                  font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top: 5px;
                "
              >
                <div>
                  <q-card-section>
                    <div class="row justify-left col-12 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Booking Details</b>
                      </p>
                      <table
                        style="width: 100%; font-size: 12px; color: black"
                        class="col-12"
                      >
                        <tr class="row col-12">
                          <td class="row col-12">
                            Booking ID :
                            <b>
                              {{
                                this.propBookedGuestNo[0].booking_order_id
                              }}</b
                            >
                          </td>
                          <td class="col-12">
                            Booked Date :
                            <b>
                              {{     moment(
                                  this.propBookedGuestNo[0].inserted_date_time1
                                ).format('DD-MM-YYYY hh:mm A') }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="row col-12">
                            Customer Name :
                            <b>
                              {{
                                this.propBookedGuestNo[0].GuestDetails[0]
                                  .guest_name
                              }}</b
                            >
                          </td>
                          <td
                            class="col-12"
                            v-if="this.propBookedGuestNo[0].gstin_no != ''"
                          >
                            Customer GSTIN/State :
                            <b>
                              {{ this.propBookedGuestNo[0].gstin_no }} /
                              {{ this.propBookedGuestNo[0].state }}
                            </b>
                          </td>
                          <td
                            class="col-12"
                            v-if="this.propBookedGuestNo[0].gstin_no == ''"
                          >
                            Customer GSTIN/State :
                            <b>
                              {{ this.propBookedGuestNo[0].state }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Near Hospital Name :
                            <b>
                              {{ this.propBookedGuestNo[0].near_hospital_name }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Property Name :
                            <b>
                              {{ this.propBookedGuestNo[0].property_name }}</b
                            >
                          </td>
                          <td class="col-12">
                            Property Type :
                            <b>
                              {{ this.propBookedGuestNo[0].property_type }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Property Address:
                            <b>
                              {{ this.propBookedGuestNo[0].address }}
                            </b>
                          </td>
                          <td class="col-12">
                            Room Type:
                            <b>
                              {{ this.propBookedGuestNo[0].room_type }}
                            </b>
                          </td>
                          <!-- <td class="col-12">
                                  State :
                                  <b>
                                    {{
                                      this.propBookedGuestNo[0]
                                        .property_state_name
                                    }}
                                  </b>
                                </td> -->
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Check In :
                            <b>
                              {{
                                moment(
                                  this.propBookedGuestNo[0].check_in
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                          <td class="col-12">
                            Check Out :
                            <b>
                              {{
                                moment(
                                  this.propBookedGuestNo[0].check_out
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Check In Time:
                            <b>
                              {{ this.propBookedGuestNo[0].checkIn_time }}
                            </b>
                          </td>
                          <td class="col-12">
                            Check Out Time:
                            <b>
                              {{ this.propBookedGuestNo[0].checkOut_time }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Primary No :
                            <b>
                              {{ this.propBookedGuestNo[0].primary_no }}
                            </b>
                          </td>
                          <td class="col-12">
                            Alternate Number :
                            <b>
                              {{ this.propBookedGuestNo[0].alternate_no }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Room Amenities :
                            <b>
                              {{ this.propBookedGuestNo[0].facilities }}
                            </b>
                          </td>
                          <td class="col-6">
                            Room Booked :
                            <b>
                              {{ this.propBookedGuestNo[0].room_booked_count }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="row col-12" style="padding-bottom: 20px">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Booking Guest Details</b>
                      </p>

                      <q-markup-table class="row col-12">
                        <div
                          class="row col-12"
                          style="
                            display: flex;
                            width: 100%;
                            text-align: center;
                            border-top: 1px solid silver;
                          "
                        >
                          <div
                            class="col-12 text-left"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              border-left: 1px solid silver;
                              width: 10%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            <b>Sno</b>
                          </div>
                          <div
                            class="col-12 text-center"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              padding-left: 10px;
                              width: 90%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            <b>Guest Name</b>
                          </div>
                        </div>
                        <div
                          v-for="item in this.propBookedGuestNo[0].GuestDetails"
                          :key="item.index"
                          class="row col-12"
                          style="display: flex; width: 100%; text-align: center"
                        >
                          <div
                            class="col-12 text-left"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              border-left: 1px solid silver;
                              padding-top: 5px;
                              width: 10%;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.sno }}
                          </div>
                          <!-- <div class="col-3 text-right" style="
                          text-align: center;
                          border-bottom: 1px solid silver;
                          /* border-right: 1px solid silver; */
                          padding-left: 10px;
                          width:30%;
                          padding-top: 5px;
                          padding-bottom: 5px;
                        ">
                          </div> -->
                          <div
                            class="col-12 text-center"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              padding-left: 10px;
                              width: 90%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.guest_gender }}
                            {{ item.guest_name }}
                          </div>
                        </div>
                      </q-markup-table>
                    </div>
                    <div class="row justify-left col-12 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Price Details</b>
                      </p>

                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              <b> Price Details</b>
                            </div>
                          </div>
                          <div
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            <b> Amount (₹) </b>
                          </div>
                        </div>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            border-top: 1px solid silver;
                          "
                        >
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Room Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            ₹{{ this.propBookedGuestNo[0].room_price }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Partner Offer
                              <!-- {{
                                this.propBookedGuestNo[0]
                                  .partner_offer_percentage
                              }}% ) : -->:
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].partner_offer }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Base Price
                              <!-- (
                              {{
                                this.propBookedGuestNo[0]
                                  .partner_offer_percentage
                              }}% )  -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].base_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Early Bird Offer
                              <!-- (
                              {{ this.propBookedGuestNo[0].discount }}% )  -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].discount_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            style="width: 60%"
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Applied MH Offer :
                              {{ this.propBookedGuestNo[0].mh_offer_name }}
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].mh_offer_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                              v-if="
                                this.propBookedGuestNo[0].mh_offer_name != ''
                              "
                            >
                              Price After Discount
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            ₹{{
                              this.propBookedGuestNo[0].price_after_discount
                            }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Taxes
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            ₹{{ this.propBookedGuestNo[0].gst_amount }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle text-bold"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Convenience Fee
                            </div>
                          </div>
                          <div
                            class="text-subtitle text-bold"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            ₹{{ "0" }}
                          </div>
                        </div>
                        <!-- <div style="display: flex; width: 100%">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            Add GST at ({{
                              this.propBookedGuestNo[0].gst_percentage
                            }}%) :-
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              "
                            >
                              CGST at ({{
                                this.propBookedGuestNo[0].cgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            Rs.
                            {{ this.propBookedGuestNo[0].cgst_amount }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              "
                            >
                              SGST at ({{
                                this.propBookedGuestNo[0].sgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                           ₹{{ this.propBookedGuestNo[0].sgst_amount }}
                          </div>
                        </div> -->
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 15px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Total Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            <strong>
                              ₹{{ this.propBookedGuestNo[0].total_price }}
                              /-
                            </strong>
                          </div>
                        </div>
                        <div style="width: 100%; text-align: right">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-right: 10px;
                              padding-top: 5px;
                            "
                          >
                            <strong
                              >Grand Total (in Words) :-
                              {{ this.priceinwords }}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row justify-left col-12 q-mb-md"
                      style="padding-top: 20px"
                    >
                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <p
                          class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="
                            font-size: 15px;
                            font-family: verdana;
                            padding-left: 10px;
                          "
                        >
                          <img
                            src="~assets/logos/MHmini_logo_128x128.png"
                            alt="hii"
                            width="30px"
                            height="20px"
                          />
                          <b style="padding-left: 10px"> MangoHomz Support</b>
                        </p>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            text-align: left;
                            padding-bottom: 10px;
                          "
                        >
                          <div
                            class="text-left"
                            style="padding-left: 20px; width: 65%"
                          >
                            <div class="col-12">
                              <div
                                style="
                                  padding-left: 50px;
                                  color: #1e398e;
                                  text-align: left;
                                "
                              >
                                <u>Contact US</u>
                              </div>
                              <div style="text-align: left; padding-top: 5px">
                                WhatsApp Number: 8929982655
                              </div>
                              <div style="text-align: left; padding-top: 5px">
                                E-Mail: care@MangoHomz.com
                              </div>
                            </div>
                          </div>
                          <div
                            class="text-center"
                            style="padding-right: 40px; width: 25%"
                          >
                            <div class="col-12">
                              <div style="color: #1e398e">
                                <u>Business Hours</u>
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                Monday – Saturday
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                10AM – 6 PM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </div>
              <q-dialog v-model="moreservices">
                <q-card style="min-width: 200px">
                  <q-card-section class="row col-12">
                    <div class="col-12 text-h6 text-bold text-primary">
                      <q-icon>
                        <q-img
                          src="~assets/logos/MHmini_logo_128x128.png"
                        ></q-img>
                      </q-icon>
                      Book More MANGOHOMZ Services
                    </div>
                    <div>
                      <q-btn
                        dark
                        flat
                        padding="none"
                        class="justify-end"
                        icon="close"
                        v-close-popup
                      >
                        <q-tooltip>close</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator />
                  <div class="row col-12 justify-center q-ma-md">
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-12 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          TRAVEL
                        </div>
                        <div class="text-caption">
                          Smooth travel facilities 24 / 7
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addTravel"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-12 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          MEDICAL EQUIPMENT
                        </div>
                        <div class="text-caption">
                          Book Medical Equipment during Medical Trip
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addMedical"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-12 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          FOOD
                        </div>
                        <div class="text-caption">Nutritious Hygenic Food</div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addFood"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                  </div>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="q-mx-lg">
            <div class="text-h6 q-ml-sm">You'll redirected to Home page</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Ok" color="primary" @click="backTo()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
    <!--Mobile View End-->
    <!--Website View Start-->

    <q-page style="padding-top: 60px" class="q-pa-md gt-xs">
      <div class="justify-center grad">
        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card flat :class="this.class_val" class="cursor-pointer">
            <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
              <q-space />
              <q-btn
                size="sm"
                outline
                rounded
                color="primary"
                class="text-weight-bold q-ml-xl"
                @click="confirm = true"
              >
                Home
              </q-btn>
              <q-btn
                size="sm"
                outlined
                rounded
                color="primary"
                class="text-weight-bold q-ml-xl"
                @click="getPrintDetails = true"
                >Print
              </q-btn>
            </q-toolbar>
            <div class="row">
              <div class="q-pa-md">
                <div class="text-bold text-h5">
                  Booking Confirmed -
                  {{ this.propBookedGuestNo[0].property_name }}
                </div>
                <div class="text-bold text-h5">
                  Booking ID No -
                  {{ this.propBookedGuestNo[0].booking_order_id }}
                </div>
                <!-- <div class="text-bold text-h5 q-mt-lg">
                  <img
                    src="../assets/logos/mh-logo.png"
                    width="200px"
                    height="35px"
                  />
                </div> -->
              </div>
              <div class="q-pa-md">
                <div class="text-bold" style="font-size: 18px">
                  Dear Customer,
                </div>
                <p style="text-align: justify">
                  We're glad you've placed your trust in MangoHomz and have
                  chosen us as your preferred Medical trip partner. We are
                  pleased to confirm that
                  <b
                    >{{ this.propBookedGuestNo[0].property_name }} (Near
                    {{ this.propBookedGuestNo[0].near_hospital_name }}) </b
                  >has been reserved under your name. While you're busy
                  preparing for your trip, our teams are constantly working
                  towards providing patient-friendly stay for you.
                </p>
              </div>
            </div>
            <div
              class="row justify-center q-px-xl"
              style="
                font-family: verdana;
                box-sizing: border-box;
                background-color: white;
              "
            >
              <div
                class="row col-12 justify-center q-px-sm"
                style="
                  font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top: 5px;
                  background-color: white;
                "
              >
                <div class="row justify-left col-12 q-mb-md q-pa-sm">
                  <div class="row col-6 items-start">
                    <p
                      class="col-6 items-start text-bold q-mt-sm q-mb-xs"
                      style="font-size: 20px; font-family: verdana"
                    >
                      <img
                        src="~assets/logos/logo-main.png"
                        alt="hii"
                        width="200px"
                        height="50px"
                      />
                    </p>
                  </div>
                  <div class="col-6 text-right">
                    <p
                      class="col-6 text-right text-bold q-mt-sm q-mb-xs"
                      style="font-size: 15px; font-family: verdana"
                    >
                      <b
                        >MANGOHOMZ ID :{{
                          this.propBookedGuestNo[0].booking_order_id
                        }}</b
                      >
                    </p>
                    <p
                      class="col-6 text-right text-bold q-mt-xs q-mb-xs"
                      style="font-size: 15px; font-family: verdana"
                    >
                      PNR :0085007877
                    </p>
                    <p
                      class="col-6 text-right q-mt-xs q-mb-xs"
                      style="font-size: 15px; font-family: verdana"
                    >
                      Hotel booked on
                      {{     moment(
                                  this.propBookedGuestNo[0].inserted_date_time1
                                ).format('DD-MM-YYYY hh:mm A') }}
                    </p>
                  </div>
                </div>
                <div
                  class="row col-12 justify-center bg-secondary"
                  style="
                    font-family: verdana;
                    border-right: 2px solid lightgrey;
                    box-sizing: border-box;
                    border-left: 2px solid lightgrey;
                    border-top: 2px solid lightgrey;
                    border-bottom: 2px solid lightgrey;
                    margin-bottom: 5px;
                  "
                >
                  <div class="col-2">
                    <div
                      style="
                        width: 70px;
                        border-radius: 50%;
                        background-color: #e4fae9;
                        padding: 15px;
                        margin-top: 15px;
                        margin-left: 60px;
                      "
                    >
                      <q-icon size="40px" name="mdi-domain" color="secondary" />
                    </div>
                  </div>
                  <div class="col-10 text-white">
                    <p style="margin-top: 30px">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b
                        >Your booking at
                        {{ this.propBookedGuestNo[0].property_name }} is
                        confirmed.</b
                      >
                    </p>
                  </div>
                  <div
                    class="col-11"
                    style="
                      border: 2px;
                      border-radius: 10px;
                      margin-bottom: 10px;
                      padding: 10px;
                      background-color: white;
                    "
                  >
                    <p>
                      Your booking at
                      <b>{{ this.propBookedGuestNo[0].property_name }}</b> from
                      <b
                        >{{
                          moment(this.propBookedGuestNo[0].check_in).format(
                            "dddd, DD MMM YYYY"
                          )
                        }}
                        to
                        {{
                          moment(this.propBookedGuestNo[0].check_out).format(
                            "dddd, DD MMM YYYY"
                          )
                        }} </b
                      >from
                      <b>{{ this.propBookedGuestNo[0].guest_count }}</b>
                      guest(s) Is confirmed. You have reserved  {{ this.propBookedGuestNo[0].room_booked_count }} {{  this.propBookedGuestNo[0].room_booked_count == 1 ? "Room" : "Rooms" }} for
                      <b>{{ this.propBookedGuestNo[0].no_of_days }}</b> night(s)
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{ this.propBookedGuestNo[0].total_price }}</b
                      >.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100%
                      refunds) at least 7 days before check-in date. Any
                      cancellation there after the guest will be entitled to
                      only 60% refund till Check-in.
                    </p>
                    <p align="center">
                      <q-btn
                        label="Manage your Additional booking online"
                        style="
                          background-color: lightblue;
                          color: darkblue;
                          font-weight: bold;
                        "
                        outlined
                        @click="morebookings"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="row col-12 bg-white justify-center q-px-sm"
                style="
                  font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top: 5px;
                "
              >
                <div>
                  <q-card-section>
                    <div class="row justify-left col-9 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Booking Details</b>
                      </p>
                      <table
                        style="
                          width: 100%;
                          font-size: 14px;
                          background-color: green;
                          color: white;
                        "
                        class="col-9"
                      >
                        <tr class="row col-12">
                          <td class="row col-6">
                            Booking ID :
                            <b>
                              {{
                                this.propBookedGuestNo[0].booking_order_id
                              }}</b
                            >
                          </td>
                          <td class="col-6">
                            Booked Date :
                            <b>
                              {{     moment(
                                  this.propBookedGuestNo[0].inserted_date_time1
                                ).format('DD-MM-YYYY hh:mm A') }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="row col-6">
                            Customer Name :
                            <b>
                              {{
                                this.propBookedGuestNo[0].GuestDetails[0]
                                  .guest_name
                              }}</b
                            >
                          </td>
                          <td
                            class="col-6"
                            v-if="this.propBookedGuestNo[0].gstin_no != ''"
                          >
                            Customer GSTIN/State :
                            <b>
                              {{ this.propBookedGuestNo[0].gstin_no }} /
                              {{ this.propBookedGuestNo[0].gststate[0].state }}
                            </b>
                          </td>
                          <td
                            class="col-6"
                            v-if="this.propBookedGuestNo[0].gstin_no == ''"
                          >
                            Customer State :
                            <b>
                              {{ this.propBookedGuestNo[0].state }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Near Hospital Name :
                            <b>
                              {{ this.propBookedGuestNo[0].near_hospital_name }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Property Name :
                            <b>
                              {{ this.propBookedGuestNo[0].property_name }}</b
                            >
                          </td>
                          <td class="col-6">
                            Property Type :
                            <b>
                              {{ this.propBookedGuestNo[0].property_type }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Property Address:
                            <b>
                              {{ this.propBookedGuestNo[0].address }}
                            </b>
                          </td>
                          <td class="col-6">
                            Room Type:
                            <b>
                              {{ this.propBookedGuestNo[0].room_type }}
                            </b>
                          </td>
                          <!-- <td class="col-6">
                                  State :
                                  <b>
                                    {{
                                      this.propBookedGuestNo[0]
                                        .property_state_name
                                    }}
                                  </b>
                                </td> -->
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Check In :
                            <b>
                              {{
                                moment(
                                  this.propBookedGuestNo[0].check_in
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                          <td class="col-6">
                            Check Out :
                            <b>
                              {{
                                moment(
                                  this.propBookedGuestNo[0].check_out
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Check In Time:
                            <b>
                              {{ this.propBookedGuestNo[0].checkIn_time }}
                            </b>
                          </td>
                          <td class="col-6">
                            Check Out Time:
                            <b>
                              {{ this.propBookedGuestNo[0].checkOut_time }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Primary No :
                            <b>
                              {{ this.propBookedGuestNo[0].primary_no }}
                            </b>
                          </td>
                          <td class="col-6">
                            Alternate Number :
                            <b>
                              {{ this.propBookedGuestNo[0].alternate_no }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Room Amenities :
                            <b>
                              {{ this.propBookedGuestNo[0].facilities }}
                            </b>
                          </td>
                          <td class="col-6">
                            Room Booked :
                            <b>
                              {{ this.propBookedGuestNo[0].room_booked_count }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="row col-9" style="padding-bottom: 20px">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Booking Guest Details</b>
                      </p>

                      <q-markup-table class="row col-12">
                        <div
                          class="row col-12"
                          style="
                            display: flex;
                            width: 100%;
                            text-align: center;
                            border-top: 1px solid silver;
                          "
                        >
                          <div
                            class="col-2 text-left"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              border-left: 1px solid silver;
                              width: 10%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            <b>Sno</b>
                          </div>
                          <div
                            class="col-10 text-right"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              padding-left: 10px;
                              width: 90%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            <b>Guest Name</b>
                          </div>
                        </div>
                        <div
                          v-for="item in this.propBookedGuestNo[0].GuestDetails"
                          :key="item.index"
                          class="row col-12"
                          style="display: flex; width: 100%; text-align: center"
                        >
                          <div
                            class="col-2 text-left"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              border-left: 1px solid silver;
                              padding-top: 5px;
                              width: 10%;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.sno }}
                          </div>
                          <div
                            class="col-3 text-right"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              /* border-right: 1px solid silver; */
                              padding-left: 10px;
                              width: 30%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.guest_gender }}
                          </div>
                          <div
                            class="col-7 text-right"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              padding-left: 10px;
                              width: 60%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.guest_name }}
                          </div>
                        </div>
                      </q-markup-table>
                    </div>
                    <div class="row justify-left col-9 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Price Details</b>
                      </p>

                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              <b> Price Details</b>
                            </div>
                          </div>
                          <div
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            <b> Amount (₹) </b>
                          </div>
                        </div>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            border-top: 1px solid silver;
                          "
                        >
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Room Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            ₹{{ this.propBookedGuestNo[0].room_price }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Partner Offer
                              <!-- (
                              {{
                                this.propBookedGuestNo[0]
                                  .partner_offer_percentage
                              }}% )  -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].partner_offer }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Base Price
                              <!-- (
                              {{
                                this.propBookedGuestNo[0]
                                  .partner_offer_percentage
                              }}% )  -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].base_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Early Bird Offer
                              <!-- (
                              {{ this.propBookedGuestNo[0].discount }}% ) -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].discount_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            style="width: 60%"
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Applied MH Offer :
                              {{ this.propBookedGuestNo[0].mh_offer_name }}
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].mh_offer_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                              v-if="
                                this.propBookedGuestNo[0].mh_offer_name != ''
                              "
                            >
                              Price After Discount
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            ₹{{
                              this.propBookedGuestNo[0].price_after_discount
                            }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Taxes
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            ₹{{ this.propBookedGuestNo[0].gst_amount }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle text-bold"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Convenience Fee
                            </div>
                          </div>
                          <div
                            class="text-subtitle text-bold"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            ₹{{ "0" }}
                          </div>
                        </div>
                        <!-- <div style="display: flex; width: 100%">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            Add GST at ({{
                              this.propBookedGuestNo[0].gst_percentage
                            }}%) :-
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              "
                            >
                              CGST at ({{
                                this.propBookedGuestNo[0].cgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                           ₹{{ this.propBookedGuestNo[0].cgst_amount }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              "
                            >
                              SGST at ({{
                                this.propBookedGuestNo[0].sgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                           ₹{{ this.propBookedGuestNo[0].sgst_amount }}
                          </div>
                        </div> -->
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 15px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Total Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            <strong>
                              ₹{{ this.propBookedGuestNo[0].total_price }}
                              /-
                            </strong>
                          </div>
                        </div>
                        <div style="width: 100%; text-align: right">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-right: 10px;
                              padding-top: 5px;
                            "
                          >
                            <strong
                              >Grand Total (in Words) :-
                              {{ this.priceinwords }}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row justify-left col-9 q-mb-md"
                      style="padding-top: 20px"
                    >
                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <p
                          class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="
                            font-size: 15px;
                            font-family: verdana;
                            padding-left: 10px;
                          "
                        >
                          <b>MangoHomz Support</b>
                        </p>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            text-align: center;
                            padding-bottom: 10px;
                          "
                        >
                          <div
                            class="text-center"
                            style="
                              text-align: center;
                              padding-top: 10px;
                              width: 10%;
                              padding-left: 10px;
                            "
                          >
                            <img
                              src="~assets/logos/MHmini_logo_128x128.png"
                              alt="hii"
                              width="50px"
                              height="50px"
                            />
                          </div>
                          <div
                            class="text-center"
                            style="padding-left: 20px; width: 65%"
                          >
                            <div class="col-5">
                              <div
                                style="
                                  padding-left: 50px;
                                  color: #1e398e;
                                  text-align: center;
                                "
                              >
                                <u>Contact US</u>
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                WhatsApp Number: 8929982655
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                E-Mail: care@MangoHomz.com
                              </div>
                            </div>
                          </div>
                          <div
                            class="text-center"
                            style="padding-right: 40px; width: 25%"
                          >
                            <div class="col-12">
                              <div style="color: #1e398e">
                                <u>Business Hours</u>
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                Monday – Saturday
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                10AM – 6 PM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row justify-left col-9 q-mb-md"
                      style="padding-top: 20px"
                    >
                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <p
                          class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="
                            font-size: 15px;
                            font-family: verdana;
                            padding-left: 10px;
                          "
                        >
                          <b>Other Information</b>
                        </p>
                        <p
                          style="
                            font-size: 12px;
                            font-family: verdana;
                            padding-left: 20px;
                          "
                        >
                          <b>Safety and Hygiene</b>
                        </p>
                        <p
                          style="
                            font-size: 12px;
                            font-family: verdana;
                            padding-left: 20px;
                          "
                        >
                          • Quarantine protocols are being followed as per local
                          government authorities Guests from containment zones
                          are not allowed
                        </p>
                        <p
                          style="
                            font-size: 12px;
                            font-family: verdana;
                            padding-left: 20px;
                          "
                        >
                          • Shared resources in common areas are properly
                          sanitized Property staff is trained on hygiene
                          guidelines
                        </p>
                        <p
                          style="
                            font-size: 12px;
                            font-family: verdana;
                            padding-left: 20px;
                          "
                        >
                          • Only those guests with safe status on Aarogya Setu
                          app are allowed Hand sanitizer is provided in guest
                          accommodation and common areas
                        </p>
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </div>
              <q-dialog v-model="moreservices">
                <q-card style="min-width: 200px">
                  <q-card-section class="row col-12">
                    <div class="col-11 text-h6 text-bold text-primary">
                      <q-icon>
                        <q-img
                          src="~assets/logos/MHmini_logo_128x128.png"
                        ></q-img>
                      </q-icon>
                      Book More MANGOHOMZ Services
                    </div>
                    <div>
                      <q-btn
                        dark
                        flat
                        padding="none"
                        class="justify-end"
                        icon="close"
                        v-close-popup
                      >
                        <q-tooltip>close</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator />
                  <div class="row col-12 justify-center q-ma-md">
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-8 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          TRAVEL
                        </div>
                        <div class="text-caption">
                          Smooth travel facilities 24 / 7
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addTravel"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-8 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          MEDICAL EQUIPMENT
                        </div>
                        <div class="text-caption">
                          Book Medical Equipment during Medical Trip
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addMedical"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-8 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          FOOD
                        </div>
                        <div class="text-caption">Nutritious Hygenic Food</div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addFood"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                  </div>
                </q-card>
              </q-dialog>
            </div>
          </q-card>
        </div>
      </div>
      <q-dialog
        v-model="getPrintDetails"
        persistent
        class="my_card"
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="justify-center" style="padding-bottom: 20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />
            <q-btn
              print="'#createPdf'"
              label="Print"
              v-print="getPrintDetails"
              rounded
              class="positive text-bold text-white"
              @click="printpart('createPdf')"
            />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <div id="createPdf" class="body q-px-xl">
            <!-- <div id="createPdf" class="body q-px-xl"> -->
            <div
              class="row justify-center q-px-xl"
              style="
                font-family: verdana;
                box-sizing: border-box;
                background-color: white;
              "
            >
              <div
                class="row col-12 justify-center q-px-sm"
                style="
                  font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top: 5px;
                  background-color: white;
                "
              >
                <div style="display: flex; width: 100%">
                  <div style="width: 40%">
                    <p
                      class="col-5 text-bold"
                      style="font-size: 20px; font-family: verdana"
                    >
                      <img
                        src="~assets/logos/logo-main.png"
                        alt="hii"
                        width="200px"
                        height="50px"
                      />
                    </p>
                  </div>
                  <div style="width: 60%; text-align: right">
                    <p
                      class="col-6 text-right text-bold"
                      style="font-size: 15px; font-family: verdana"
                    >
                      <b
                        >MANGOHOMZ ID :{{
                          this.propBookedGuestNo[0].booking_order_id
                        }}</b
                      >
                    </p>
                    <p
                      class="col-6 text-right text-bold"
                      style="font-size: 15px; font-family: verdana"
                    >
                      PNR :0085007877
                    </p>
                    <p
                      class="col-6 text-right"
                      style="font-size: 15px; font-family: verdana"
                    >
                      Accommodation Hotel booked on
                      {{     moment(
                                  this.propBookedGuestNo[0].inserted_date_time1
                                ).format('DD-MM-YYYY hh:mm A') }}
                    </p>
                  </div>
                </div>

                <div
                  class="col-12 row"
                  style="
                    border: 2px;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    padding: 10px;
                    background-color: white;
                  "
                >
                  <p style="margin-top: 30px">
                    Thank you for booking with us.
                    <b
                      >Your booking at
                      {{ this.propBookedGuestNo[0].property_name }} is
                      confirmed.</b
                    >
                  </p>

                  <p>
                    Your booking at
                    <b>{{ this.propBookedGuestNo[0].property_name }}</b> from
                    <b
                      >{{
                        moment(this.propBookedGuestNo[0].check_in).format(
                          "dddd, DD MMM YYYY"
                        )
                      }}
                      to
                      {{
                        moment(this.propBookedGuestNo[0].check_out).format(
                          "dddd, DD MMM YYYY"
                        )
                      }} </b
                    >from
                    <b>{{ this.propBookedGuestNo[0].guest_count }}</b> guest(s)
                    Is confirmed. You have reserved {{ this.propBookedGuestNo[0].room_booked_count }} room(s) for
                    <b>{{ this.propBookedGuestNo[0].no_of_days }}</b> night(s)
                  </p>
                  <p>
                    You have paid amount of INR
                    <b>{{ this.propBookedGuestNo[0].total_price }}</b
                    >.
                  </p>
                  <p class="text-green text-bold">
                    You booking is under Free Cancellation policy (100% refunds) at least 3 days before check-in date. Any cancellation there after the guest will be entitled to only 60% refund till Check-in after all necessary tax deductions applicable. Once checked in there is no cancellation.
                  </p>
                  <!-- <p align="center">
                      <q-btn label="Manage your booking online"
                        style="background-color:lightblue;color:darkblue;font-weight: bold;" outlined
                        @click="morebookings" />
                    </p> -->
                </div>
              </div>
              <div
                class="row col-12 bg-white justify-center q-px-sm"
                style="
                  font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top: 5px;
                "
              >
                <div>
                  <q-card-section>
                    <div class="row justify-left col-9 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Booking Details</b>
                      </p>
                      <table
                        style="width: 100%; font-size: 12px; color: black"
                        class="col-9"
                      >
                        <tr class="row col-12">
                          <td class="row col-6">
                            Booking ID :
                            <b>
                              {{
                                this.propBookedGuestNo[0].booking_order_id
                              }}</b
                            >
                          </td>
                          <td class="col-6">
                            Booked Date :
                            <b>
                              {{     moment(
                                  this.propBookedGuestNo[0].inserted_date_time1
                                ).format('DD-MM-YYYY hh:mm A') }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="row col-6">
                            Customer Name :
                            <b>
                              {{
                                this.propBookedGuestNo[0].GuestDetails[0]
                                  .guest_name
                              }}</b
                            >
                          </td>
                          <td
                            class="col-6"
                            v-if="this.propBookedGuestNo[0].gstin_no != ''"
                          >
                            Customer GSTIN/State :
                            <b>
                              {{ this.propBookedGuestNo[0].gstin_no }} /
                              {{ this.propBookedGuestNo[0].state }}
                            </b>
                          </td>
                          <td
                            class="col-6"
                            v-if="this.propBookedGuestNo[0].gstin_no == ''"
                          >
                            Customer GSTIN/State :
                            <b>
                              {{ this.propBookedGuestNo[0].state }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Near Hospital Name :
                            <b>
                              {{ this.propBookedGuestNo[0].near_hospital_name }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Property Name :
                            <b>
                              {{ this.propBookedGuestNo[0].property_name }}</b
                            >
                          </td>
                          <td class="col-6">
                            Property Type :
                            <b>
                              {{ this.propBookedGuestNo[0].property_type }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Property Address:
                            <b>
                              {{ this.propBookedGuestNo[0].address }}
                            </b>
                          </td>
                          <td class="col-6">
                            Room Type:
                            <b>
                              {{ this.propBookedGuestNo[0].room_type }}
                            </b>
                          </td>
                          <!-- <td class="col-6">
                                  State :
                                  <b>
                                    {{
                                      this.propBookedGuestNo[0]
                                        .property_state_name
                                    }}
                                  </b>
                                </td> -->
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Check In :
                            <b>
                              {{
                                moment(
                                  this.propBookedGuestNo[0].check_in
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                          <td class="col-6">
                            Check Out :
                            <b>
                              {{
                                moment(
                                  this.propBookedGuestNo[0].check_out
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Check In Time:
                            <b>
                              {{ this.propBookedGuestNo[0].checkIn_time }}
                            </b>
                          </td>
                          <td class="col-6">
                            Check Out Time:
                            <b>
                              {{ this.propBookedGuestNo[0].checkOut_time }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Primary No :
                            <b>
                              {{ this.propBookedGuestNo[0].primary_no }}
                            </b>
                          </td>
                          <td class="col-6">
                            Alternate Number :
                            <b>
                              {{ this.propBookedGuestNo[0].alternate_no }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Room Amenities :
                            <b>
                              {{ this.propBookedGuestNo[0].facilities }}
                            </b>
                          </td>
                          <td class="col-6">
                            Room Booked :
                            <b>
                              {{ this.propBookedGuestNo[0].room_booked_count }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="row col-9" style="padding-bottom: 20px">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Booking Guest Details</b>
                      </p>

                      <q-markup-table class="row col-12">
                        <div
                          class="row col-12"
                          style="
                            display: flex;
                            width: 100%;
                            text-align: center;
                            border-top: 1px solid silver;
                          "
                        >
                          <div
                            class="col-2 text-left"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              border-left: 1px solid silver;
                              width: 10%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            <b>Sno</b>
                          </div>
                          <div
                            class="col-10 text-center"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              padding-left: 10px;
                              width: 90%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            <b>Guest Name</b>
                          </div>
                        </div>
                        <div
                          v-for="item in this.propBookedGuestNo[0].GuestDetails"
                          :key="item.index"
                          class="row col-12"
                          style="display: flex; width: 100%; text-align: center"
                        >
                          <div
                            class="col-2 text-left"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              border-left: 1px solid silver;
                              padding-top: 5px;
                              width: 10%;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.sno }}
                          </div>
                          <!-- <div class="col-3 text-right" style="
                          text-align: center;
                          border-bottom: 1px solid silver;
                          /* border-right: 1px solid silver; */
                          padding-left: 10px;
                          width:30%;
                          padding-top: 5px;
                          padding-bottom: 5px;
                        ">
                          </div> -->
                          <div
                            class="col-10 text-center"
                            style="
                              text-align: center;
                              border-bottom: 1px solid silver;
                              border-right: 1px solid silver;
                              padding-left: 10px;
                              width: 90%;
                              padding-top: 5px;
                              padding-bottom: 5px;
                            "
                          >
                            {{ item.guest_gender }}
                            {{ item.guest_name }}
                          </div>
                        </div>
                      </q-markup-table>
                    </div>
                    <div class="row justify-left col-9 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Accommodation Price Details</b>
                      </p>

                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              <b> Price Details</b>
                            </div>
                          </div>
                          <div
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            <b> Amount (₹) </b>
                          </div>
                        </div>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            border-top: 1px solid silver;
                          "
                        >
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Room Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            ₹{{ this.propBookedGuestNo[0].room_price }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Partner Offer
                              <!-- {{
                                this.propBookedGuestNo[0]
                                  .partner_offer_percentage
                              }}% ) : -->:
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].partner_offer }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Base Price
                              <!-- (
                              {{
                                this.propBookedGuestNo[0]
                                  .partner_offer_percentage
                              }}% )  -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].base_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Early Bird Offer
                              <!-- (
                              {{ this.propBookedGuestNo[0].discount }}% )  -->
                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].discount_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            style="width: 60%"
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Applied MH Offer :
                              {{ this.propBookedGuestNo[0].mh_offer_name }}
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            (-) ₹{{ this.propBookedGuestNo[0].mh_offer_price }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                              v-if="
                                this.propBookedGuestNo[0].mh_offer_name != ''
                              "
                            >
                              Price After Discount
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                            v-if="this.propBookedGuestNo[0].mh_offer_name != ''"
                          >
                            ₹{{
                              this.propBookedGuestNo[0].price_after_discount
                            }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Taxes
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            ₹{{ this.propBookedGuestNo[0].gst_amount }}
                          </div>
                        </div>

                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle text-bold"
                              style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Convenience Fee
                            </div>
                          </div>
                          <div
                            class="text-subtitle text-bold"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            ₹{{ "0" }}
                          </div>
                        </div>
                        <!-- <div style="display: flex; width: 100%">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            Add GST at ({{
                              this.propBookedGuestNo[0].gst_percentage
                            }}%) :-
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              "
                            >
                              CGST at ({{
                                this.propBookedGuestNo[0].cgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            Rs.
                            {{ this.propBookedGuestNo[0].cgst_amount }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              "
                            >
                              SGST at ({{
                                this.propBookedGuestNo[0].sgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                           ₹{{ this.propBookedGuestNo[0].sgst_amount }}
                          </div>
                        </div> -->
                        <div style="display: flex; width: 100%">
                          <div style="width: 60%">
                            <div
                              class="text-subtitle"
                              style="
                                font-size: 15px;
                                padding-left: 10px;
                                padding-top: 5px;
                              "
                            >
                              Total Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                              width: 40%;
                            "
                          >
                            <strong>
                              ₹{{ this.propBookedGuestNo[0].total_price }}
                              /-
                            </strong>
                          </div>
                        </div>
                        <div style="width: 100%; text-align: right">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-right: 10px;
                              padding-top: 5px;
                            "
                          >
                            <strong
                              >Grand Total (in Words) :-
                              {{ this.priceinwords }}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row justify-left col-9 q-mb-md"
                      style="padding-top: 20px"
                    >
                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver"
                      >
                        <p
                          class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="
                            font-size: 15px;
                            font-family: verdana;
                            padding-left: 10px;
                          "
                        >
                          <img
                            src="~assets/logos/MHmini_logo_128x128.png"
                            alt="hii"
                            width="30px"
                            height="20px"
                          />
                          <b style="padding-left: 10px"> MangoHomz Support</b>
                        </p>
                        <div
                          style="
                            display: flex;
                            width: 100%;
                            text-align: left;
                            padding-bottom: 10px;
                          "
                        >
                          <div
                            class="text-left"
                            style="padding-left: 20px; width: 65%"
                          >
                            <div class="col-5">
                              <div
                                style="
                                  padding-left: 50px;
                                  color: #1e398e;
                                  text-align: left;
                                "
                              >
                                <u>Contact US</u>
                              </div>
                              <div style="text-align: left; padding-top: 5px">
                                WhatsApp Number: 8929982655
                              </div>
                              <div style="text-align: left; padding-top: 5px">
                                E-Mail: care@MangoHomz.com
                              </div>
                            </div>
                          </div>
                          <div
                            class="text-center"
                            style="padding-right: 40px; width: 25%"
                          >
                            <div class="col-12">
                              <div style="color: #1e398e">
                                <u>Business Hours</u>
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                Monday – Saturday
                              </div>
                              <div style="text-align: center; padding-top: 5px">
                                10AM – 6 PM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </div>
              <q-dialog v-model="moreservices">
                <q-card style="min-width: 200px">
                  <q-card-section class="row col-12">
                    <div class="col-11 text-h6 text-bold text-primary">
                      <q-icon>
                        <q-img
                          src="~assets/logos/MHmini_logo_128x128.png"
                        ></q-img>
                      </q-icon>
                      Book More MANGOHOMZ Services
                    </div>
                    <div>
                      <q-btn
                        dark
                        flat
                        padding="none"
                        class="justify-end"
                        icon="close"
                        v-close-popup
                      >
                        <q-tooltip>close</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator />
                  <div class="row col-12 justify-center q-ma-md">
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-8 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          TRAVEL
                        </div>
                        <div class="text-caption">
                          Smooth travel facilities 24 / 7
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addTravel"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-8 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          MEDICAL EQUIPMENT
                        </div>
                        <div class="text-caption">
                          Book Medical Equipment during Medical Trip
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addMedical"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                    <q-card
                      style="display: flex; background-color: #e4fae9"
                      class="q-mb-sm q-ma-md col-8 justify-center"
                    >
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          FOOD
                        </div>
                        <div class="text-caption">Nutritious Hygenic Food</div>
                      </q-card-section>
                      <div>
                        <q-btn
                          label="BOOK"
                          @click="addFood"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                        />
                      </div>
                    </q-card>
                  </div>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="q-mx-lg">
            <div class="text-h6 q-ml-sm">You'll redirected to Home page</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Ok" color="primary" @click="backTo()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
    <!--Website View End-->
    <footer-tag />

    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-space></q-space>
        <search-header-comp />
        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page-container>
</template>
<script>
import headerTag from "../components/header.vue";
import footerTag from "../components/footer.vue";
import { mapState, mapActions } from "vuex";
import moment from "moment";
import VueHtmlToPaper from "vue-html-to-paper";

// import { api } from "boot/axios";

directives: {
  print;
  VueHtmlToPaper;
}
export default {
  components: {
    headerTag,
    footerTag,
    // searchHeaderComp
  },
  data() {
    return {
      autoplay: true,
      confirm: false,
      moment: moment,
      class_val: "shadow-1 hotel-details-card-1",
      maximizedToggle: true,
      getPrintDetails: false,
      moreservices: false,
      title1: "Accommodation Invoice Details",
      AccomodationPriceDetails: {
        final_price_amount_in_words: "",
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
  created() {
    this.propBookedGuestNo = "";
    this.propBookedGuestNo = this.$route.params.guestNumber;
    // console.log(" this.propBookedGuestNo", this.propBookedGuestNo);
  },
  computed: {
    ...mapState({
      hotelInfo_arr: (state) => state.booking.hotelInfo_arr,
      // acc_guest_booked_data: state => state.booking.acc_guest_booked_data
    }),
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
    priceinwords() {
      let priceinwords = this.inWords(this.propBookedGuestNo[0].total_price);
      return priceinwords;
    },
  },
  mounted() {
    this.$store.dispatch(`booking/getBookingId`, this.propBookedGuestNo);
  },
  methods: {
    ...mapActions("booking", ["getBookingIdDetails"]),
    ...mapActions("booking", ["getMHBookingData"]),
    ...mapActions("booking", ["getMedicalBookingData"]),
    addFood() {
      let food = this.propBookedGuestNo[0].booking_order_id;
      this.getMHBookingData(food);
    },
    addTravel() {
      let travel = this.propBookedGuestNo[0].booking_order_id;
      this.getBookingIdDetails(travel);
    },
    addMedical() {
      let medical = this.propBookedGuestNo[0].booking_order_id;
      this.getMedicalBookingData(medical);
    },
    backTo() {
      this.$router.push("/");
      this.confirm = false;
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
    morebookings() {
      this.moreservices = true;
    },
    async printpart() {
      await this.$htmlToPaper("createPdf");

      this.createPdf = options();
    },
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
.my-breadcrumbs
  width: 100%
  max-width: 1000px
.grad
  background-image: linear-gradient(to bottom, green 20%, #2907a2 10%)
</style>
