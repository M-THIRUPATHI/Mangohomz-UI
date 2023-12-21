<template>
  <q-page-container class="bg-indigo-1">
    <headerTag />
    <!--Mobile View Start-->
    <q-page class="q-pa-sm lt-sm">
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
                  {{ this.propTravelBookedGuestNo[0].travel_name }}
                </div>
                <div class="text-bold text-h5">
                  Travel Booking No -
                  {{ this.propTravelBookedGuestNo[0].travel_booking_orderid }}
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
                <div class="text-bold">Dear Customer,</div>
                <p style="text-align: justify">
                  We appreciate your confidence in MangoHomz and selecting us as
                  your go-to travel companion for medical trips. We are pleased
                  to confirm that Vehicle from
                  <b
                    >{{ this.propTravelBookedGuestNo[0].travel_name }} (from
                    {{ this.propTravelBookedGuestNo[0].booking_origin }} to
                    {{ this.propTravelBookedGuestNo[0].booking_destination }})
                  </b>
                  has been booked under your name. Three hours prior to the
                  scheduled pickup, you will receive the vehicle information and
                  driver contact details. Our employees are working nonstop to
                  make sure you have patient-friendly travel while you're busy
                  packing for your trip.
                </p>
                <div>
                  <div style="text-align: justify">Thank you.</div>

                  <div style="text-align: justify">Team MangoHomz</div>
                </div>
              </div>
            </div>
            <div
              class="row justify-center"
              style="
                font-family: verdana;
                box-sizing: border-box;
                background-color: white;
                padding-bottom: 50px;
                display: contents;
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
                        >MANGOHOMZ Travel ID :{{
                          this.propTravelBookedGuestNo[0].travel_booking_orderid
                        }}</b
                      >
                    </p>
                    <p
                      class="col-12 text-right text-bold q-mt-xs q-mb-xs"
                      style="font-size: 15px; font-family: verdana"
                    >
                      PNR :0085007877
                    </p>
                    <!-- <p class="col-6 text-right q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      Travel booked on {{ this.travel_guest_booked_data[0].updated_date_time }}
                    </p> -->
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
                        width: 42px;
                        border-radius: 50%;
                        background-color: rgb(228, 250, 233);
                        padding: 2px;
                        margin-top: 15px;
                        margin-left: 138px;
                        margin-top: -18px;
                      "
                    >
                      <q-icon size="40px" name="mdi-car" color="secondary" />
                    </div>
                  </div>
                  <div class="col-12 text-white" style="margin-left: 40px">
                    <p style="margin-top: 30px">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b
                        >Your booking at
                        {{ this.propTravelBookedGuestNo[0].transport_sub_name }}
                        is confirmed.</b
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
                      width: 310px;
                    "
                  >
                    <p>
                      Your booking at
                      <b>{{
                        this.propTravelBookedGuestNo[0].transport_sub_name
                      }}</b>
                      on
                      <b>
                        {{
                          moment(
                            this.propTravelBookedGuestNo[0].booked_date
                          ).format("dddd, DD MMM YYYY")
                        }}
                      </b>
                      Is confirmed. You have reserved for <b> </b> from
                      <b>{{
                        this.propTravelBookedGuestNo[0].booking_origin
                      }}</b>
                      to
                      <b>
                        {{
                          this.propTravelBookedGuestNo[0].booking_destination
                        }}
                      </b>
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{ this.propTravelBookedGuestNo[0].payable_amount }}</b
                      >.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100%
                      refunds) at at least 3 days before the booked date. Any
                      cancellation thereafter the guest will be entitled to get
                      only 60% refund of the booked amount.
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
                  <q-card-section style="width: 360px">
                    <div class="row justify-left col-12 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Travel Booking Details</b>
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
                          <td class="col-12">
                            Travel Booking ID :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .travel_booking_orderid
                              }}
                            </b>
                          </td>
                          <td class="col-12">
                            Booked Date :
                            <b>
                              {{
                                moment(
                                  this.propTravelBookedGuestNo[0]
                                    .updated_datetime
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <!-- <td class="row col-6">
                            Customer Name :
                            <b>
                              {{
                                  this.propTravelBookedGuestNo[0].GuestDetails[0].guest_name
                              }}
                            </b>
                          </td> -->
                          <!-- <td class="col-6" v-if="
                          this.propTravelBookedGuestNo[0].gst_number != ''">
                            Customer GSTIN/State :
                            <b>
                           {{this.propTravelBookedGuestNo[0].gst_number }} / {{this.propTravelBookedGuestNo[0].gststate[0].state }}
                            </b>
                          </td> -->
                          <!-- <td class="col-6" v-if="this.propTravelBookedGuestNo[0].gstin_no == ''">
                            Customer State :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].state }}
                            </b>
                          </td> -->
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Travel Name :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].travel_name }}
                            </b>
                          </td>
                          <td class="col-12">
                            Date of Booking :
                            <b>
                              {{
                                moment(
                                  this.propTravelBookedGuestNo[0].booked_date
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Property Address:
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .property_city_name
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Mobile Number :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0].mobile_number
                              }}
                            </b>
                          </td>
                          <td class="col-12">
                            Booking Origin :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0].booking_origin
                              }}
                            </b>
                          </td>
                          <td class="col-12">
                            Booking Destination :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .booking_destination
                              }}
                            </b>
                          </td>
                          <td class="col-12">
                            Email ID :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].email_id }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="row justify-left col-12 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Travel Price Details</b>
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
                              Travel Charges (from
                              {{
                                this.propTravelBookedGuestNo[0].booking_origin
                              }}
                              to
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .booking_destination
                              }})
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
                            ₹{{
                              this.propTravelBookedGuestNo[0].travel_charges
                            }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            style="width: 60%"
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
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
                              {{
                                this.propTravelBookedGuestNo[0].mh_offer_coupon
                              }}
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
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
                          >
                            ₹{{
                              this.propTravelBookedGuestNo[0].mh_offer_price
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
                              v-if="
                                this.propTravelBookedGuestNo[0]
                                  .mh_offer_coupon != ''
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
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
                          >
                            ₹{{
                              this.propTravelBookedGuestNo[0]
                                .price_after_discount
                            }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            + Taxes & Fees -
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
                            ₹{{
                              this.propTravelBookedGuestNo[0].gst_on_base_price
                            }}
                          </div>
                        </div>
                        <!-- <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                        font-size: 12px;
                        padding-left: 75px;
                        padding-top:5px;
                      ">
                       SGST at ({{this.propTravelBookedGuestNo[0].sgst_percentage }} %)
                      </div>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;width:40%
                      "
                    >
                      Rs. {{this.propTravelBookedGuestNo[0].sgst_amount }}
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
                              ₹{{
                                this.propTravelBookedGuestNo[0].payable_amount
                              }}
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
                              {{ this.payable_amount }}
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

      <!--Return Home Dialog-->
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
      <!--print dialog -->
      <q-dialog
        v-model="getPrintDetails"
        persistent
        class="lt-sm"
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
      <q-card
          class="justify-center row text-bold q-mt-sm q-mb-xs"
          style="padding-bottom: 20px"
        >
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
                  <div style="width: 60%; text-align: right; margin-top: 55px">
                    <p
                      class="col-12 text-right text-bold"
                      style="font-size: 15px; font-family: verdana"
                    >
                      <b
                        >MANGOHOMZ Travel ID :{{
                          this.propTravelBookedGuestNo[0].travel_booking_orderid
                        }}</b
                      >
                    </p>
                    <p
                      class="col-12 text-right text-bold"
                      style="font-size: 15px; font-family: verdana"
                    >
                      PNR :0085007877
                    </p>
                    <!-- <p class="col-6 text-right q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      Travel booked on {{ this.travel_guest_booked_data[0].updated_date_time }}
                    </p> -->
                  </div>
                </div>
                <div
                  class="row col-12 justify-center"
                  style="
                    font-family: verdana;
                    border-right: 2px solid lightgrey;
                    box-sizing: border-box;
                    border-left: 2px solid lightgrey;
                    border-top: 2px solid lightgrey;
                    border-bottom: 2px solid lightgrey;
                    margin-bottom: 5px;
                    background-color: green;
                  "
                >
                  <div class="col-12 row" style="display: flex">
                    <div
                      style="
                        width: 79px;
                        border-radius: 49%;
                        background-color: rgb(228, 250, 233);
                        padding: 20px;
                        margin-top: 20px;
                        margin-left: 45px;
                      "
                    >
                      <q-icon size="40px" name="mdi-car" color="secondary" />
                    </div>
                    <div class="col-12" style="color: white; margin-left: 10px">
                      <p style="margin-top: 30px">
                        Thank you for booking with us.
                      </p>
                      <p>
                        <b
                          >Your booking at
                          {{ this.propTravelBookedGuestNo[0].transport_sub_name }}
                          is confirmed.</b
                        >
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-12"
                    style="
                      margin-top: 10px;
                      border: 2px;
                      border-radius: 10px;
                      margin-bottom: 10px;
                      padding: 10px;
                      background-color: white;
                    "
                  >
                    <p>
                      Your booking at
                      <b>{{
                        this.propTravelBookedGuestNo[0].transport_sub_name
                      }}</b>
                      on
                      <b>
                        {{
                          moment(
                            this.propTravelBookedGuestNo[0].booked_date
                          ).format("dddd, DD MMM YYYY")
                        }}
                      </b>
                      Is confirmed. You have reserved for <b> </b> from
                      <b>{{ this.propTravelBookedGuestNo[0].booking_origin }}</b>
                      to
                      <b>
                        {{ this.propTravelBookedGuestNo[0].booking_destination }}
                      </b>
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{ this.propTravelBookedGuestNo[0].payable_amount }}</b
                      >.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100% refunds)
                    at at least 3 days before the booked date. Any cancellation
                    thereafter the guest will be entitled to get only 60% refund
                    of the booked amount.
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
                        <b>Travel Booking Details</b>
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
                            Travel Booking ID :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .travel_booking_orderid
                              }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booked Date :
                            <b>
                              {{
                              moment(
                                this.propTravelBookedGuestNo[0].updated_datetime
                              ).format("dddd, DD MMM YYYY")
                            }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <!-- <td class="row col-6">
                            Customer Name :
                            <b>
                              {{
                                  this.propTravelBookedGuestNo[0].GuestDetails[0].guest_name
                              }}
                            </b>
                          </td> -->
                          <!-- <td class="col-6" v-if="
                          this.propTravelBookedGuestNo[0].gst_number != ''">
                            Customer GSTIN/State :
                            <b>
                           {{this.propTravelBookedGuestNo[0].gst_number }} / {{this.propTravelBookedGuestNo[0].gststate[0].state }}
                            </b>
                          </td> -->
                          <!-- <td class="col-6" v-if="this.propTravelBookedGuestNo[0].gstin_no == ''">
                            Customer State :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].state }}
                            </b>
                          </td> -->
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Travel Name :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].travel_name }}
                            </b>
                          </td>
                          <td class="col-6">
                            Date of Booking :
                            <b>
                              {{
                                moment(
                                  this.propTravelBookedGuestNo[0].booked_date
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Property Address:
                            <b>
                              {{
                              this.propTravelBookedGuestNo[0].property_city_name
                            }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Mobile Number :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].mobile_number }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booking Origin :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].booking_origin }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Email ID :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].email_id }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booking Destination :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .booking_destination
                              }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="row justify-left col-9 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Travel Price Details</b>
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
                              Travel Charges (from
                              {{ this.propTravelBookedGuestNo[0].booking_origin }}
                              to
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .booking_destination
                              }})
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
                          ₹{{ this.propTravelBookedGuestNo[0].travel_charges }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            style="width: 60%"
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
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
                              {{
                                this.propTravelBookedGuestNo[0].mh_offer_coupon
                              }}
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
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
                          >
                          ₹{{ this.propTravelBookedGuestNo[0].mh_offer_price }}
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
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
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
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
                          >
                          ₹{{
                            this.propTravelBookedGuestNo[0].price_after_discount
                          }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            + Taxes & Fees -
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
                            ₹{{ this.propTravelBookedGuestNo[0].cgst_amount }}
                          </div>
                        </div>
                        <!-- <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                        font-size: 12px;
                        padding-left: 75px;
                        padding-top:5px;
                      ">
                       SGST at ({{this.propTravelBookedGuestNo[0].sgst_percentage }} %)
                      </div>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;width:40%
                      "
                    >
                      Rs. {{this.propTravelBookedGuestNo[0].sgst_amount }}
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
                              ₹{{
                                this.propTravelBookedGuestNo[0].payable_amount
                              }}
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
                              {{ this.payable_amount }}
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
                          government authorities Guests from containment zones are
                        not allowed
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
                        • Only those guests with safe status on Aarogya Setu app
                        are allowed Hand sanitizer is provided in guest
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
          </div>
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
                  {{ this.propTravelBookedGuestNo[0].travel_name }}
                </div>
                <div class="text-bold text-h5">
                  Travel Booking No -
                  {{ this.propTravelBookedGuestNo[0].travel_booking_orderid }}
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
                <div class="text-bold">Dear Customer,</div>
                <p style="text-align: justify">
                  We appreciate your confidence in MangoHomz and selecting us as
                  your go-to travel companion for medical trips. We are pleased
                  to confirm that Vehicle from
                  <b
                    >{{ this.propTravelBookedGuestNo[0].travel_name }} (from
                    {{ this.propTravelBookedGuestNo[0].booking_origin }} to
                    {{ this.propTravelBookedGuestNo[0].booking_destination }})
                  </b>
                  has been booked under your name. Three hours prior to the
                  scheduled pickup, you will receive the vehicle information and
                  driver contact details. Our employees are working nonstop to
                  make sure you have patient-friendly travel while you're busy
                  packing for your trip.
                </p>
                <div>
                  <div style="text-align: justify">Thank you.</div>

                  <div style="text-align: justify">Team MangoHomz</div>
                </div>
              </div>
            </div>
            <div
              class="row justify-center q-px-xl"
              style="
                font-family: verdana;
                box-sizing: border-box;
                background-color: white;
                padding-bottom: 50px;
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
                    class="col-6 text-right text-bold"
                      style="
                        font-size: 15px;
                        font-family: verdana;
                        margin-top: 55px;
                        "
                    >
                      <b
                        >MANGOHOMZ Travel ID :{{
                          this.propTravelBookedGuestNo[0].travel_booking_orderid
                        }}</b
                      >
                    </p>
                    <p
                      class="col-6 text-right text-bold q-mt-xs q-mb-xs"
                      style="font-size: 15px; font-family: verdana"
                    >
                      PNR :0085007877
                    </p>
                    <!-- <p class="col-6 text-right q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      Travel booked on {{ this.travel_guest_booked_data[0].updated_date_time }}
                    </p> -->
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
                      <q-icon size="40px" name="mdi-car" color="secondary" />
                    </div>
                  </div>
                  <div class="col-10 text-white">
                    <p style="margin-top: 30px">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b
                        >Your booking at
                        {{ this.propTravelBookedGuestNo[0].transport_sub_name }}
                        is confirmed.</b
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
                      <b>{{
                        this.propTravelBookedGuestNo[0].transport_sub_name
                      }}</b>
                      on
                      <b>
                        {{
                          moment(
                            this.propTravelBookedGuestNo[0].booked_date
                          ).format("dddd, DD MMM YYYY")
                        }}
                      </b>
                      Is confirmed. You have reserved for <b> </b> from
                      <b>{{
                        this.propTravelBookedGuestNo[0].booking_origin
                      }}</b>
                      to
                      <b>
                        {{
                          this.propTravelBookedGuestNo[0].booking_destination
                        }}
                      </b>
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{ this.propTravelBookedGuestNo[0].payable_amount }}</b
                      >.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100%
                      refunds) at at least 3 days before the booked date. Any
                      cancellation thereafter the guest will be entitled to get
                      only 60% refund of the booked amount.
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
                        <b>Travel Booking Details</b>
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
                            Travel Booking ID :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .travel_booking_orderid
                              }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booked Date :
                            <b>
                              {{
                                moment(
                                  this.propTravelBookedGuestNo[0]
                                    .updated_datetime
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <!-- <td class="row col-6">
                            Customer Name :
                            <b>
                              {{
                                  this.propTravelBookedGuestNo[0].GuestDetails[0].guest_name
                              }}
                            </b>
                          </td> -->
                          <!-- <td class="col-6" v-if="
                          this.propTravelBookedGuestNo[0].gst_number != ''">
                            Customer GSTIN/State :
                            <b>
                           {{this.propTravelBookedGuestNo[0].gst_number }} / {{this.propTravelBookedGuestNo[0].gststate[0].state }}
                            </b>
                          </td> -->
                          <!-- <td class="col-6" v-if="this.propTravelBookedGuestNo[0].gstin_no == ''">
                            Customer State :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].state }}
                            </b>
                          </td> -->
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Travel Name :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].travel_name }}
                            </b>
                          </td>
                          <td class="col-6">
                            Date of Booking :
                            <b>
                              {{
                                moment(
                                  this.propTravelBookedGuestNo[0].booked_date
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Property Address:
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .property_city_name
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Mobile Number :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0].mobile_number
                              }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booking Origin :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0].booking_origin
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Email ID :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].email_id }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booking Destination :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .booking_destination
                              }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="row justify-left col-9 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Travel Price Details</b>
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
                              Travel Charges (from
                              {{
                                this.propTravelBookedGuestNo[0].booking_origin
                              }}
                              to
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .booking_destination
                              }})
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
                            ₹{{
                              this.propTravelBookedGuestNo[0].travel_charges
                            }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            style="width: 60%"
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
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
                              {{
                                this.propTravelBookedGuestNo[0].mh_offer_coupon
                              }}
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
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
                          >
                            ₹{{
                              this.propTravelBookedGuestNo[0].mh_offer_price
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
                              v-if="
                                this.propTravelBookedGuestNo[0]
                                  .mh_offer_coupon != ''
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
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
                          >
                            ₹{{
                              this.propTravelBookedGuestNo[0]
                                .price_after_discount
                            }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            + Taxes & Fees -
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
                            ₹{{
                              this.propTravelBookedGuestNo[0].gst_on_base_price
                            }}
                          </div>
                        </div>
                        <!-- <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                        font-size: 12px;
                        padding-left: 75px;
                        padding-top:5px;
                      ">
                       SGST at ({{this.propTravelBookedGuestNo[0].sgst_percentage }} %)
                      </div>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;width:40%
                      "
                    >
                      Rs. {{this.propTravelBookedGuestNo[0].sgst_amount }}
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
                              ₹{{
                                this.propTravelBookedGuestNo[0].payable_amount
                              }}
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
                              {{ this.payable_amount }}
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

      <!--Return Home Dialog-->
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
      <!--print dialog -->
      <q-dialog
        v-model="getPrintDetails"
        persistent
        class="gt-xs"
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

          <div id="createPdf" class="body">
            <div
              class="row justify-center"
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
                  <div style="width: 60%; text-align: right; margin-top: 50px">
                    <p
                      class="col-6 text-right text-bold"
                      style="font-size: 15px; font-family: verdana"
                    >
                      <b
                        >MANGOHOMZ Travel ID :{{
                          this.propTravelBookedGuestNo[0].travel_booking_orderid
                        }}</b
                      >
                    </p>
                    <p
                      class="col-6 text-right text-bold"
                      style="font-size: 15px; font-family: verdana"
                    >
                      PNR :0085007877
                    </p>
                    <!-- <p class="col-6 text-right q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      Travel booked on {{ this.travel_guest_booked_data[0].updated_date_time }}
                    </p> -->
                  </div>
                </div>
                <div
                  class="row col-12 justify-center"
                  style="
                    font-family: verdana;
                    border-right: 2px solid lightgrey;
                    box-sizing: border-box;
                    border-left: 2px solid lightgrey;
                    border-top: 2px solid lightgrey;
                    border-bottom: 2px solid lightgrey;
                    margin-bottom: 5px;
                    background-color: green;
                  "
                >
                  <div class="col-12 row" style="display: flex">
                    <div
                      style="
                        width: 79px;
                        border-radius: 49%;
                        background-color: rgb(228, 250, 233);
                        padding: 20px;
                        margin-top: 20px;
                        margin-left: 45px;
                      "
                    >
                      <q-icon size="40px" name="mdi-car" color="secondary" />
                    </div>
                    <div class="col-10" style="color: white; margin-left: 10px">
                      <p style="margin-top: 30px">
                        Thank you for booking with us.
                      </p>
                      <p>
                        <b
                          >Your booking at
                          {{
                            this.propTravelBookedGuestNo[0].transport_sub_name
                          }}
                          is confirmed.</b
                        >
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-11"
                    style="
                      margin-top: 10px;
                      border: 2px;
                      border-radius: 10px;
                      margin-bottom: 10px;
                      padding: 10px;
                      background-color: white;
                    "
                  >
                    <p>
                      Your booking at
                      <b>{{
                        this.propTravelBookedGuestNo[0].transport_sub_name
                      }}</b>
                      on
                      <b>
                        {{
                          moment(
                            this.propTravelBookedGuestNo[0].booked_date
                          ).format("dddd, DD MMM YYYY")
                        }}
                      </b>
                      Is confirmed. You have reserved for <b> </b> from
                      <b>{{
                        this.propTravelBookedGuestNo[0].booking_origin
                      }}</b>
                      to
                      <b>
                        {{
                          this.propTravelBookedGuestNo[0].booking_destination
                        }}
                      </b>
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{ this.propTravelBookedGuestNo[0].payable_amount }}</b
                      >.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100%
                      refunds) at at least 3 days before the booked date. Any
                      cancellation thereafter the guest will be entitled to get
                      only 60% refund of the booked amount.
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
                        <b>Travel Booking Details</b>
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
                            Travel Booking ID :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .travel_booking_orderid
                              }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booked Date :
                            <b>
                              {{
                                moment(
                                  this.propTravelBookedGuestNo[0]
                                    .updated_datetime
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <!-- <td class="row col-6">
                            Customer Name :
                            <b>
                              {{
                                  this.propTravelBookedGuestNo[0].GuestDetails[0].guest_name
                              }}
                            </b>
                          </td> -->
                          <!-- <td class="col-6" v-if="
                          this.propTravelBookedGuestNo[0].gst_number != ''">
                            Customer GSTIN/State :
                            <b>
                           {{this.propTravelBookedGuestNo[0].gst_number }} / {{this.propTravelBookedGuestNo[0].gststate[0].state }}
                            </b>
                          </td> -->
                          <!-- <td class="col-6" v-if="this.propTravelBookedGuestNo[0].gstin_no == ''">
                            Customer State :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].state }}
                            </b>
                          </td> -->
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Travel Name :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].travel_name }}
                            </b>
                          </td>
                          <td class="col-6">
                            Date of Booking :
                            <b>
                              {{
                                moment(
                                  this.propTravelBookedGuestNo[0].booked_date
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Property Address:
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .property_city_name
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Mobile Number :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0].mobile_number
                              }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booking Origin :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0].booking_origin
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Email ID :
                            <b>
                              {{ this.propTravelBookedGuestNo[0].email_id }}
                            </b>
                          </td>
                          <td class="col-6">
                            Booking Destination :
                            <b>
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .booking_destination
                              }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="row justify-left col-9 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px; font-family: verdana"
                      >
                        <b>Travel Price Details</b>
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
                              Travel Charges (from
                              {{
                                this.propTravelBookedGuestNo[0].booking_origin
                              }}
                              to
                              {{
                                this.propTravelBookedGuestNo[0]
                                  .booking_destination
                              }})
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
                            ₹{{
                              this.propTravelBookedGuestNo[0].travel_charges
                            }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            style="width: 60%"
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
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
                              {{
                                this.propTravelBookedGuestNo[0].mh_offer_coupon
                              }}
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
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
                          >
                            ₹{{
                              this.propTravelBookedGuestNo[0].mh_offer_price
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
                              v-if="
                                this.propTravelBookedGuestNo[0]
                                  .mh_offer_coupon != ''
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
                            v-if="
                              this.propTravelBookedGuestNo[0].mh_offer_coupon !=
                              ''
                            "
                          >
                            ₹{{
                              this.propTravelBookedGuestNo[0]
                                .price_after_discount
                            }}
                          </div>
                        </div>
                        <div style="display: flex; width: 100%">
                          <div
                            class="text-subtitle"
                            style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            "
                          >
                            + Taxes & Fees -
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
                            ₹{{ this.propTravelBookedGuestNo[0].cgst_amount }}
                          </div>
                        </div>
                        <!-- <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                        font-size: 12px;
                        padding-left: 75px;
                        padding-top:5px;
                      ">
                       SGST at ({{this.propTravelBookedGuestNo[0].sgst_percentage }} %)
                      </div>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;width:40%
                      "
                    >
                      Rs. {{this.propTravelBookedGuestNo[0].sgst_amount }}
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
                              ₹{{
                                this.propTravelBookedGuestNo[0].payable_amount
                              }}
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
                              {{ this.payable_amount }}
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
          </div>
        </q-card>
      </q-dialog>
    </q-page>
    <!--Website View End-->
    <footer-tag />
  </q-page-container>
</template>
<script>
import headerTag from "../components/header.vue";
import footerTag from "../components/footer.vue";
import { mapState, mapActions } from "vuex";
import { api } from "boot/axios";
import moment from "moment";
import print from "vue3-print-nb";
import VueHtmlToPaper from "vue-html-to-paper";

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
      confirm: false,
      autoplay: true,
      moment: moment,
      class_val: "shadow-1 hotel-details-card-1",
      bookingFormObj: [],
      previewGSTDialogBox: false,
      previewDialogBox: false,
      maximizedToggle: true,
      printDialogBox: false,
      printGSTDialogBox: false,
      moreservices: false,
      getPrintDetails: false,
      title1: "Travel Invoice Details",
      travelPriceDetails: {
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
    this.propTravelBookedGuestNo = "";
    this.propTravelBookedGuestNo = this.$route.params.travelGuestNumber;
  },
  computed: {
    ...mapState({
      travel_guest_booked_data: (state) =>
        state.booking.travel_guest_booked_data,
    }),
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
    payable_amount() {
      let finalprice = this.inWords(
        this.propTravelBookedGuestNo[0].payable_amount
      );
      return finalprice;
    },
  },
  mounted() {
    this.$store.dispatch(
      `booking/getTravelBookingId`,
      this.propTravelBookedGuestNo
    );
  },
  methods: {
    ...mapActions("booking", ["getBookingIdDetails"]),
    ...mapActions("booking", ["getMHBookingData"]),
    ...mapActions("booking", ["getMedicalBookingData"]),
    addFood() {
      let food = this.propTravelBookedGuestNo[0].booking_order_id;
      this.getMHBookingData(food);
    },
    addTravel() {
      let travel = this.propTravelBookedGuestNo[0].booking_order_id;
      this.getBookingIdDetails(travel);
    },
    addMedical() {
      let medical = this.propTravelBookedGuestNo[0].booking_order_id;
      this.getMedicalBookingData(medical);
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
    getDataWithoutGST() {
      this.printDialogBox = true;
    },
    getDataWithGST() {
      this.printGSTDialogBox = true;
    },
    async printpart() {
      await this.$htmlToPaper("createPdf");

      this.createPdf = options();
    },
    getCustomerTravelBkngDetails(payload) {
      api
        .get(`/booking/getCustomerTravelBookingDetails/${payload}`)
        .then((response) => {
          if (
            response.data.data.length > 0 &&
            response.data.data[0].gst_number != ""
          ) {
            this.previewGSTDialogBox = true;
            this.bookingFormObj = response.data.data[0];
            this.travelPriceDetails.final_price_amount_in_words = this.inWords(
              response.data.data[0].payable_amount
            );
          } else if (
            response.data.data.length > 0 &&
            response.data.data[0].gst_number == ""
          ) {
            this.previewDialogBox = true;
            this.bookingFormObj = response.data.data[0];
            this.travelPriceDetails.final_price_amount_in_words = this.inWords(
              response.data.data[0].payable_amount
            );
          } else {
            this.$q.notify({
              message: "MH Travel Booking Id has not found",
              color: "negative",
              icon: "warning",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$q.notify({
            message: "MH Travel Booking Id has not found",
            color: "negative",
            icon: "warning",
          });
        });
    },
    backTo() {
      this.$router.push("/");
      this.confirm = false;
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
