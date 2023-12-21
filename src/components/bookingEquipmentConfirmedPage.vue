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
              <q-btn size="sm" outline rounded color="primary" class="text-weight-bold q-ml-xl" @click="confirm = true">
                Home
              </q-btn>
              <q-btn size="sm" outlined rounded color="primary" class="text-weight-bold q-ml-xl"
                @click="getMedicalPrintDetails = true">Print
              </q-btn>
            </q-toolbar>
            <div class="row">
              <div class="q-pa-md">
                <div class="text-bold col-5 text-h5">
                  Booking Confirmed -
                  {{ eqp_guest_booked_data[0].equipment_sub_name }}
                </div>
                <div class="text-bold text-h5">
                  Equipment Booking No -
                  {{ eqp_guest_booked_data[0].medical_booking_orderid }}
                </div>
              </div>
              <div class="q-pa-md">
                <div class="text-bold">Dear Customer,</div>
                <p style="text-align: justify">
                  We value your trust in MangoHomz and choice of us as your go-to provider of medical travel. We are
                  pleased to confirm that your required medical equipment's from our equipment partner Apollo has been
                  booked. The same will delivered to you at the Accommodation on the booked date. Our team is working hard
                  to make sure you have a happy stay with MangoHomz while you are busy with your doctor.
                </p>
                <div>
                  <div style="text-align: justify">
                    Thank you.
                  </div>
                  <div style="text-align: justify">
                    Team MangoHomz
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-center" style="font-family: verdana;
                            box-sizing: border-box;background-color: white;
                            padding-bottom: 50px;display: contents;
                          ">
              <div class="row col-12 justify-center q-px-sm" style="font-family: verdana;
                            border-right: 2px solid lightgrey;
                            box-sizing: border-box;
                            border-left: 2px solid lightgrey;
                            border-top: 2px solid lightgrey;
                            border-bottom: 2px solid lightgrey;
                            margin-top:5px;background-color: white
                          ">
                <div class="row justify-left col-12 q-mb-md q-pa-sm">
                  <div class="row col-12 items-start">
                    <p class="col-12 items-start text-bold q-mt-sm q-mb-xs" style="font-size: 20px;font-family: verdana">
                      <img src="~assets/logos/logo-main.png" alt="hii" width="200px" height="50px" />
                    </p>
                  </div>
                  <div class="col-12 text-right">
                    <p class="col-12 text-right text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana">
                      <b>MANGOHOMZ Equipment ID :{{
                        eqp_guest_booked_data[0].medical_booking_orderid
                      }}</b>
                    </p>
                    <p class="col-12 text-right text-bold q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      PNR :0085007877
                    </p>
                    <p class="col-12 text-right q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      Medical Equipment Booked on
                      {{ eqp_guest_booked_data[0].updated_time }}
                    </p>
                  </div>
                </div>
                <div class="row col-12  justify-center bg-secondary" style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-bottom: 5px;

                      ">
                  <div class="col-12">
                    <div
                      style="width:42px; border-radius: 50%; background-color: #e4fae9;padding: 2px;margin-top: -18px;margin-left:138px;">
                      <q-icon size="40px" name="mdi-hospital" color="secondary" />
                    </div>
                  </div>
                  <div class="col-12 text-white" style="margin-left: 40px;">
                    <p style="margin-top: 30px;">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b>Your booking at
                        {{ eqp_guest_booked_data[0].equipment_sub_name }},
                        {{ eqp_guest_booked_data[0].booking_city }} is
                        confirmed.</b>
                    </p>
                  </div>
                  <div class="col-12"
                    style="border: 2px;border-radius: 10px;margin-bottom: 10px;padding: 10px; background-color: white;width: 310px;">
                    <p>
                      Your booking at
                      <b>{{
                        eqp_guest_booked_data[0].equipment_sub_name
                      }}</b>
                      on
                      <b>{{
                        moment(
                          eqp_guest_booked_data[0].eqp_booking_date
                        ).format("dddd, DD MMM YYYY")
                      }}
                      </b>
                      Is confirmed. You have reserved for
                      <b>{{ eqp_guest_booked_data[0].days_booked_for }}</b>
                      night(s)
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{
                        eqp_guest_booked_data[0].final_price_amount
                      }}</b>.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100%
                      refunds) at least 7 days before check-in date. Any
                      cancellation there after the guest will be entitled to
                      only 60% refund till Check-in.
                    </p>
                    <p align="center">
                      <q-btn label="Manage your Additional booking online"
                        style="background-color:lightblue;color:darkblue;font-weight: bold;" outlined
                        @click="morebookings" />
                    </p>
                  </div>
                </div>
              </div>
              <div class="row col-12 bg-white justify-center q-px-sm" style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-top:5px;
                      ">
                <q-card-section style="width: 360px;">

                  <div class="row justify-left col-12 q-mb-md">
                    <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                      <b>Medical Booking Details</b>
                    </p>
                  </div>

                  <table style="width:100%;font-size:14px;background-color: green;color: white;" class="col-12">
                    <tr class="row col-12">
                      <td class="row col-12">
                        Booking ID No:
                        <b>
                          {{
                            eqp_guest_booked_data[0].booking_order_id
                          }}</b>
                      </td>
                      <td class="col-12">
                        Booked Date :
                        <b>
                          {{ eqp_guest_booked_data[0].updated_time }}
                        </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="row col-12">
                        MH Equipment Booking ID :
                        <b>
                          {{
                            eqp_guest_booked_data[0].medical_booking_orderid
                          }}
                        </b>
                      </td>
                      <!-- <td
                            class="col-12"
                            v-if="eqp_guest_booked_data[0].gstin_no != ''"
                          >
                            Customer GSTIN/State :
                            <b>
                              {{ eqp_guest_booked_data[0].gstin_no }} /
                              {{ eqp_guest_booked_data[0].booking_city }}
                            </b>
                          </td> -->
                    </tr>
                    <tr class="row col-12">
                      <td class="col-12">
                        Property Name :
                        <b>
                          {{
                            eqp_guest_booked_data[0]
                              .hotel_property_name
                          }}
                        </b>
                      </td>
                      <td class="col-12">
                        Date of Booking :
                        <b>
                          {{
                            moment(
                              this.eqp_guest_booked_data[0].eqp_booking_date
                            ).format("dddd, DD MMM YYYY")
                          }}</b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-12">
                        City :
                        <b>
                          {{ eqp_guest_booked_data[0].booking_city }}
                        </b>
                      </td>
                      <!-- <td class="col-12">
                            State:
                            <b>
                              {{
                                  eqp_guest_booked_data[0]
                                    .property_city_name
                              }}
                            </b>
                          </td> -->
                    </tr>

                    <tr class="row col-12">
                      <td class="col-12">
                        Primary No :
                        <b>
                          {{ eqp_guest_booked_data[0].mobile_number }}
                        </b>
                      </td>
                      <!-- <td class="col-12">
                            Alternate Number :
                            <b>
                              {{ eqp_guest_booked_data[0].whatsapp_number }}
                            </b>
                          </td> -->
                    </tr>
                    <tr class="row col-12">
                      <td class="col-12">
                        Email ID :
                        <b>
                          {{ eqp_guest_booked_data[0].email_id }}
                        </b>
                      </td>
                      <td class="col-12">
                        Total Quantity Booked :
                        <b>
                          {{ eqp_guest_booked_data[0].total_qty_booked }} for ({{ eqp_guest_booked_data[0].total_item_qty
                          }}
                          items)
                        </b>
                      </td>
                    </tr>
                  </table>


                  <div class="row col-12" style="padding-bottom: 20px">
                    <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px; font-family: verdana">
                      <b>Medical Booking Item Details</b>
                    </p>

                    <q-markup-table class="row col-12">
                      <div class="row col-12"
                        style="display:flex;width:100%;text-align:center;border-top: 1px solid silver;">
                        <div class="col-1 text-left"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;border-left: 1px solid silver;width:10%;padding-top:5px;padding-bottom:5px;">
                          <b>Sno</b>
                        </div>
                        <div class="col-4 text-right"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;padding-left: 10px;width:30%;padding-top:5px;padding-bottom:5px;">
                          <b>Medical Item Name</b>
                        </div>
                        <div class="col-3  text-right"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;padding-left: 10px;width:20%;padding-top:5px;padding-bottom:5px;">
                          <b>Price (for 1 Qty)</b>
                        </div>
                        <div class="col-2 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          <b>Quantity</b>
                        </div>
                        <div class="col-2 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          <b>Total Amount (₹)</b>
                        </div>
                      </div>
                      <div v-for="item in eqp_guest_booked_data[0].medicalBkngData" :key="item.index" class="row col-12"
                        style="display: flex; width: 100%; text-align: center">
                        <div class="col-1 text-left" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                border-left: 1px solid silver;
                                width: 10%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.index }}
                        </div>
                        <div class="col-4 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 30%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_name }}
                        </div>
                        <div class="col-3 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_price }}
                        </div>
                        <div class="col-2 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_quantity }}
                        </div>
                        <div class="col-2 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_price * item.item_quantity }}
                        </div>
                      </div>
                    </q-markup-table>
                  </div>
                  <div class="row justify-left col-12 q-mb-md">
                    <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px; font-family: verdana">
                      <b>Medical Price Details</b>
                    </p>

                    <div class="row col-12 q-mt-sm" style="border: 3px solid silver;place-content: space-around;">
                      <tr class="row col-12">
                        <th class="row col-8" style="padding-left: 10px">
                          <b> Price Details </b>
                        </th>
                        <th class="row col-4" style="padding-left: 10px">
                          <b> Amount (₹) </b>
                        </th>
                      </tr>
                      <div class="col-8">
                        <div class="text-subtitle" style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              ">
                          medical Charges (for
                          {{ eqp_guest_booked_data[0].total_qty_booked }} Quantity)
                        </div>
                      </div>

                      <div class="text-subtitle" style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            ">
                        ₹ {{ eqp_guest_booked_data[0].medical_charges }}
                      </div>

                      <div class="col-8">
                        <div class="text-subtitle" style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              " v-if="
                                eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPEN'
                              ">
                          Applied MH Offer :
                          {{ eqp_guest_booked_data[0].mh_offer_coupon }}
                        </div>
                      </div>

                      <div class="text-subtitle" style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            " v-if="
                              eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPEN'
                            ">
                        ₹ {{ eqp_guest_booked_data[0].mh_offer_price }}
                      </div>
                      <div class="col-8">
                        <div class="text-subtitle" style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              " v-if="
                                eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPEN'
                              ">
                          Price After Discount
                        </div>
                      </div>
                      <div class="text-subtitle" style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            " v-if="
                              eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPEN'
                            ">
                        ₹ {{ eqp_guest_booked_data[0].price_after_discount }}
                      </div>
                      <div class="col-12">
                        <div class="text-subtitle" style="
                                font-size: 12px;
                                padding-left: 10px;
                                padding-top: 5px;
                              ">
                          + Taxes & Fees -
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="text-subtitle" style="
                                font-size: 12px;
                                padding-left: 75px;
                                padding-top: 5px;
                              ">
                          Taxes
                        </div>
                      </div>
                      <div class="text-subtitle" style="
                              font-size: 12px;
                              padding-left: 10px;
                              padding-top: 5px;
                            ">
                        ₹ {{ eqp_guest_booked_data[0].gst_on_base_price }}
                      </div>
                      <!-- <div class="col-8">
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          padding-left: 75px;
                          padding-top: 5px;
                        "
                      >
                        SGST at ({{ eqp_guest_booked_data[0].sgst_percentage }} %)
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
                      Rs. {{ eqp_guest_booked_data[0].sgst_amount }}
                    </div> -->
                      <div class="col-8">
                        <div class="text-subtitle" style="
                                font-size: 15px;
                                padding-left: 10px;
                                padding-top: 5px;
                              ">
                          Total Price
                        </div>
                      </div>
                      <div class="text-subtitle" style="
                              font-size: 15px;
                              padding-left: 10px;
                              padding-top: 5px;
                            ">
                        <strong>
                          ₹ {{ eqp_guest_booked_data[0].final_price_amount }} /-
                        </strong>
                      </div>
                      <div class="col-12 text-right">
                        <div class="text-subtitle" style="
                                font-size: 12px;
                                padding-right: 10px;
                                padding-top: 5px;
                              ">
                          <strong>Grand Total (in Words) :-
                            {{
                              this.finalprice
                            }}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-left col-12 q-mb-md" style="padding-top:20px;">
                    <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px">
                        <b>MangoHomz Support</b>
                      </p>
                      <div style="display:flex;width:100%;text-align:center;padding-bottom:10px;">
                        <div class="text-center" style="text-align:center;padding-top:10px;width:10%;padding-left:10px;">
                          <img src="~assets/logos/MHmini_logo_128x128.png" alt="hii" width="50px" height="50px" />
                        </div>
                        <div class="text-center" style="padding-left:20px;width:65%">
                          <div class="col-5">
                            <div style="padding-left:50px;color:#1e398e;text-align:center;">
                              <u>Contact US</u>
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              WhatsApp Number: 8929982655
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              E-Mail: care@MangoHomz.com
                            </div>
                          </div>
                        </div>
                        <div class="text-center" style="padding-right:40px;width:25%;">
                          <div class="col-12">
                            <div style="color:#1e398e"><u>Business Hours</u></div>
                            <div style="text-align:center;padding-top:5px">
                              Monday – Saturday
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              10AM – 6 PM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-left col-12 q-mb-md" style="padding-top:20px;">
                    <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px">
                        <b>Other Information</b>
                      </p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;"><b>Safety and
                          Hygiene</b></p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px">• Quarantine protocols are
                        being followed as per local government authorities Guests from containment zones are not
                        allowed</p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px">• Shared resources in common
                        areas are properly sanitized Property staff is trained on hygiene guidelines</p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px"> • Only those guests with safe
                        status on Aarogya Setu app are allowed Hand sanitizer is provided in guest accommodation and
                        common areas
                      </p>

                    </div>
                  </div>
                </q-card-section>
              </div>
              <q-dialog v-model="moreservices">
                <q-card style="min-width: 200px">
                  <q-card-section class="row col-12">
                    <div class="col-11 text-h6 text-bold text-primary">
                      <q-icon>
                        <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
                      </q-icon>
                      Book More MANGOHOMZ Services
                    </div>
                    <div>
                      <q-btn dark flat padding="none" class="justify-end" icon="close" v-close-popup>
                        <q-tooltip>close</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator />
                  <div class="row col-12 justify-center q-ma-md">
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          TRAVEL
                        </div>
                        <div class="text-caption">
                          Smooth travel facilities 24 / 7
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addTravel"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                      </div>
                    </q-card>
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          MEDICAL EQUIPMENT
                        </div>
                        <div class="text-caption">
                          Book Medical Equipment during Medical Trip
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addMedical"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                      </div>
                    </q-card>
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          FOOD
                        </div>
                        <div class="text-caption">Nutritious Hygenic Food</div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addFood" class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                      </div>
                    </q-card>
                  </div>
                </q-card>
              </q-dialog>
            </div>
          </q-card>
        </div>
      </div>

      <!--Print mobile view-->
      <q-dialog v-model="getMedicalPrintDetails" persistent class="lt-sm" :maximized="maximizedToggle"
        transition-show="slide-up" transition-hide="slide-down">
        <q-card class="justify-center" style="padding-bottom:20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />
            <q-btn print="'#createPdf'" label="Print" rounded class="positive text-bold text-white"
              @click="printpart('createPdf')" />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <div id="createPdf" class="body q-px-xl">
            <div class="row col-12 justify-center " style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-top:5px;background-color: white
                      ">
              <div style="display: flex; width: 100%">
                <div style="width: 40%">
                  <p class="col-5 text-bold " style="font-size: 20px;font-family: verdana">
                    <img src="~assets/logos/logo-main.png" alt="hii" width="200px" height="50px" />
                  </p>
                </div>
                <div style="width: 60%; text-align: right; margin-top: 55px;">
                  <p class="col-12 text-right text-bold" style="font-size: 15px; font-family: verdana;">
                    <b>MANGOHOMZ Equipment ID :{{
                      eqp_guest_booked_data[0].medical_booking_orderid
                    }}</b>
                  </p>
                  <p class="col-12 text-right text-bold" style="font-size: 15px;font-family: verdana;text-align:right">
                    PNR :0085007877
                  </p>
                  <p class="col-12 text-right q-mt-xs q-mb-xs"
                    style="font-size: 15px;font-family: verdana;text-align:right">
                    Medical Equipment Booked On
                    {{ eqp_guest_booked_data[0].updated_time }}
                  </p>
                </div>
              </div>
              <div class="row col-12  justify-center " style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-bottom: 5px;
                        background-color:green;

                      ">
                <div class="col-12 row" style="display:flex">
                  <div style="    width: 79px;
                            border-radius: 49%;
                            background-color: rgb(228, 250, 233);
                            padding: 20px;
                            margin-top: 20px;
                            margin-left: 45px;">

                    <q-icon size="40px" name="mdi-hospital" color="green" style="color:green" />
                  </div>
                  <div class="col-12 " style="color:white">
                    <p style="margin-top: 30px;">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b>Your booking at
                        {{ eqp_guest_booked_data[0].equipment_sub_name }},
                        {{ eqp_guest_booked_data[0].booking_city }} is
                        confirmed.</b>
                    </p>
                  </div>
                </div>
                <div class="col-12"
                  style="border: 2px;border-radius: 10px;margin-bottom: 10px;padding: 10px; background-color: white;">
                  <p>
                    Your booking at
                    <b>{{
                      eqp_guest_booked_data[0].equipment_sub_name
                    }}</b>
                    on
                    <b>{{
                      moment(
                        eqp_guest_booked_data[0].eqp_booking_date
                      ).format("dddd, DD MMM YYYY")
                    }}
                    </b>
                    Is confirmed. You have reserved for
                    <b>{{ eqp_guest_booked_data[0].days_booked_for }}</b>
                    night(s)
                  </p>
                  <p>
                    You have paid amount of INR
                    <b>{{
                      eqp_guest_booked_data[0].final_price_amount
                    }}</b>.
                  </p>
                  <p class="text-green text-bold">
                    You booking is under Free Cancellation policy (100%
                    refunds) at least 7 days before check-in date. Any
                    cancellation there after the guest will be entitled to
                    only 60% refund till Check-in.
                  </p>

                </div>
              </div>
            </div>
            <div class="row col-12 bg-white justify-center q-px-sm" style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-top:5px;
                      ">
              <q-card-section>
                <div class="row justify-left col-12 q-mb-md">
                  <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                    <b>Medical Booking Details</b>
                  </p>
                  <table style="width:100%;font-size:14px;background-color: green;color: white;" class="col-12">
                    <tr class="row col-12">
                      <td class="row col-12">
                        Booking ID No:
                        <b>
                          {{
                            eqp_guest_booked_data[0].booking_order_id
                          }}</b>
                      </td>
                      <td class="col-12">
                        Booked Date :
                        <b>
                          {{ eqp_guest_booked_data[0].updated_time }}
                        </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="row col-12">
                        MH Equipment Booking ID :
                        <b>
                          {{
                            eqp_guest_booked_data[0].medical_booking_orderid
                          }}
                        </b>
                      </td>
                      <!-- <td class="col-6" v-if="eqp_guest_booked_data[0].gstin_no != ''">
                          Customer GSTIN/State :
                          <b>
                            {{ eqp_guest_booked_data[0].gstin_no }} /
                            {{ eqp_guest_booked_data[0].booking_city }}
                          </b>
                        </td> -->
                    </tr>
                    <tr class="row col-12">
                      <td class="col-12">
                        Property Name :
                        <b>
                          {{
                            eqp_guest_booked_data[0]
                              .hotel_property_name
                          }}
                        </b>
                      </td>
                      <td class="col-12">
                        Date of Booking :
                        <b>
                          {{
                            moment(
                              this.eqp_guest_booked_data[0].eqp_booking_date
                            ).format("dddd, DD MMM YYYY")
                          }}</b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-12">
                        City :
                        <b>
                          {{ eqp_guest_booked_data[0].booking_city }}
                        </b>
                      </td>
                      <!-- <td class="col-6">
                          State:
                          <b>
                            {{
                              eqp_guest_booked_data[0]
                                .property_city_name
                            }}
                          </b>
                        </td> -->
                    </tr>

                    <tr class="row col-12">
                      <td class="col-12">
                        Primary No :
                        <b>
                          {{ eqp_guest_booked_data[0].mobile_number }}
                        </b>
                      </td>
                      <!-- <td class="col-6">
                          Alternate Number :
                          <b>
                            {{ eqp_guest_booked_data[0].whatsapp_number }}
                          </b>
                        </td> -->
                    </tr>
                    <tr class="row col-12">
                      <td class="col-12">
                        Email ID :
                        <b>
                          {{ eqp_guest_booked_data[0].email_id }}
                        </b>
                      </td>
                      <td class="col-12">
                        Total Quantity Booked :
                        <b>
                          {{ eqp_guest_booked_data[0].total_qty_booked }} for
                          ({{ eqp_guest_booked_data[0].total_item_qty }} items)
                        </b>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="row col-12" style="padding-bottom: 20px">
                  <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px; font-family: verdana">
                    <b>Medical Booking Item Details</b>
                  </p>

                  <q-markup-table class="row col-12">
                    <div class="row col-12"
                      style="display:flex;width:100%;text-align:center;border-top: 1px solid silver;">
                      <div class="col-12 text-left"
                        style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;border-left: 1px solid silver;width:10%;padding-top:5px;padding-bottom:5px;">
                        <b>Sno</b>
                      </div>
                      <div class="col-12 text-right"
                        style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;padding-left: 10px;width:30%;padding-top:5px;padding-bottom:5px;">
                        <b>Medical Item Name</b>
                      </div>
                      <div class="col-12  text-right"
                        style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;padding-left: 10px;width:20%;padding-top:5px;padding-bottom:5px;">
                        <b>Price (for 1 Qty)</b>
                      </div>
                      <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                        <b>Quantity</b>
                      </div>
                      <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                        <b>Total Amount (₹)</b>
                      </div>
                    </div>
                    <div v-for="item in eqp_guest_booked_data[0].medicalBkngData" :key="item.index" class="row col-12"
                      style="display: flex; width: 100%; text-align: center">
                      <div class="col-1 text-left" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                border-left: 1px solid silver;
                                width: 10%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                        {{ item.index }}
                      </div>
                      <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 30%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                        {{ item.item_name }}
                      </div>
                      <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                        {{ item.item_price }}
                      </div>
                      <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                        {{ item.item_quantity }}
                      </div>
                      <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                        {{ item.item_price * item.item_quantity }}
                      </div>
                    </div>
                  </q-markup-table>
                </div>
                <div class="row justify-left col-12 q-mb-md">
                  <div class="row col-12 q-mt-sm" style="border: 3px solid silver">
                    <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px; font-family: verdana">
                      <b>Medical Price Details</b>
                    </p>
                    <table class="row col-12">
                      <tr>
                        <th style="padding-left: 10px"><b>Price Details</b></th>
                        <th style="padding-left: 10px"><b>Amount (₹)</b></th>
                      </tr>
                      <tr>
                        <td style="padding-left: 10px">Medical Charges (for {{ eqp_guest_booked_data[0].total_qty_booked
                        }} Quantity)</td>
                        <td style="padding-left: 10px">₹ {{ eqp_guest_booked_data[0].medical_charges }}</td>
                      </tr>
                      <tr v-if="eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPEN'">
                        <td style="padding-left: 10px">Applied MH Offer: {{ eqp_guest_booked_data[0].mh_offer_coupon }}
                        </td>
                        <td style="padding-left: 10px">₹ {{ eqp_guest_booked_data[0].mh_offer_price }}</td>
                      </tr>
                      <tr v-if="eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPEN'">
                        <td style="padding-left: 10px">Price After Discount</td>
                        <td style="padding-left: 10px">₹ {{ eqp_guest_booked_data[0].price_after_discount }}</td>
                      </tr>
                      <tr>
                        <td style="padding-left: 10px">+ Taxes & Fees -</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style="padding-left: 75px">Taxes</td>
                        <td style="padding-left: 10px">₹ {{ eqp_guest_booked_data[0].gst_on_base_price }}</td>
                      </tr>
                      <!-- Uncomment the following code if required -->
                      <!--
      <tr>
        <td style="padding-left: 75px">SGST at ({{ eqp_guest_booked_data[0].sgst_percentage }} %)</td>
        <td style="padding-left: 10px">Rs. {{ eqp_guest_booked_data[0].sgst_amount }}</td>
      </tr>
      -->
                      <tr>
                        <td style="padding-left: 10px">Total Price</td>
                        <td style="padding-left: 10px"><strong>₹ {{ eqp_guest_booked_data[0].final_price_amount }}
                            /-</strong></td>
                      </tr>
                    </table>
                    <div class="col-12 text-right">
                      <div class="text-subtitle" style="font-size: 12px; padding-right: 10px; padding-top: 5px;">
                        <strong>Grand Total (in Words) - {{ this.finalprice }}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row justify-left col-12 q-mb-md" style="padding-top:20px;">
                  <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                    <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                      style="font-size: 15px;font-family: verdana;padding-left:10px">
                      <b>MangoHomz Support</b>
                    </p>
                    <div style="display:flex;width:100%;text-align:center;padding-bottom:10px;">
                      <div class="text-center" style="text-align:center;padding-top:10px;width:10%;padding-left:10px;">
                        <img src="~assets/logos/MHmini_logo_128x128.png" alt="hii" width="50px" height="50px" />
                      </div>
                      <div class="text-center" style="padding-left:20px;width:65%">
                        <div class="col-5">
                          <div style="padding-left:50px;color:#1e398e;text-align:center;">
                            <u>Contact US</u>
                          </div>
                          <div style="text-align:center;padding-top:5px">
                            WhatsApp Number: 8929982655
                          </div>
                          <div style="text-align:center;padding-top:5px">
                            E-Mail: care@MangoHomz.com
                          </div>
                        </div>
                      </div>
                      <div class="text-center" style="padding-right:40px;width:25%;">
                        <div class="col-12">
                          <div style="color:#1e398e"><u>Business Hours</u></div>
                          <div style="text-align:center;padding-top:5px">
                            Monday – Saturday
                          </div>
                          <div style="text-align:center;padding-top:5px">
                            10AM – 6 PM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-left col-12 q-mb-md" style="padding-top:20px;">
                  <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                    <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                      style="font-size: 15px;font-family: verdana;padding-left:10px">
                      <b>Other Information</b>
                    </p>
                    <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;"><b>Safety and
                        Hygiene</b></p>
                    <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;">• Quarantine protocols
                      are
                      being followed as per local government authorities Guests from containment zones are not
                      allowed</p>
                    <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;">• Shared resources in
                      common
                      areas are properly sanitized Property staff is trained on hygiene guidelines</p>
                    <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;"> • Only those guests
                      with safe
                      status on Aarogya Setu app are allowed Hand sanitizer is provided in guest accommodation and
                      common areas
                    </p>

                  </div>
                </div>
              </q-card-section>
            </div>
            <q-dialog v-model="moreservices">
              <q-card style="min-width: 200px">
                <q-card-section class="row col-12">
                  <div class="col-11 text-h6 text-bold text-primary">
                    <q-icon>
                      <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
                    </q-icon>
                    Book More MANGOHOMZ Services
                  </div>
                  <div>
                    <q-btn dark flat padding="none" class="justify-end" icon="close" v-close-popup>
                      <q-tooltip>close</q-tooltip>
                    </q-btn>
                  </div>
                </q-card-section>
                <q-separator />
                <div class="row col-12 justify-center q-ma-md">
                  <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                    <q-card-section class="q-mr-xl">
                      <div class="text-bold text-subtitle2 text-secondary">
                        TRAVEL
                      </div>
                      <div class="text-caption">
                        Smooth travel facilities 24 / 7
                      </div>
                    </q-card-section>
                    <div>
                      <q-btn label="BOOK" @click="addTravel" class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                    </div>
                  </q-card>
                  <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                    <q-card-section class="q-mr-xl">
                      <div class="text-bold text-subtitle2 text-secondary">
                        MEDICAL EQUIPMENT
                      </div>
                      <div class="text-caption">
                        Book Medical Equipment during Medical Trip
                      </div>
                    </q-card-section>
                    <div>
                      <q-btn label="BOOK" @click="addMedical" class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                    </div>
                  </q-card>
                  <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                    <q-card-section class="q-mr-xl">
                      <div class="text-bold text-subtitle2 text-secondary">
                        FOOD
                      </div>
                      <div class="text-caption">Nutritious Hygenic Food</div>
                    </q-card-section>
                    <div>
                      <q-btn label="BOOK" @click="addFood" class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                    </div>
                  </q-card>
                </div>
              </q-card>
            </q-dialog>
          </div>
        </q-card>
      </q-dialog>
    </q-page>
    <!--Mobile View End-->

    <!--Website View Start-->
    <q-page style="padding-top: 60px" class="q-pa-md gt-sm">
      <div class="justify-center grad">
        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card flat :class="this.class_val" class="cursor-pointer">
            <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
              <q-space />
              <q-btn size="sm" outline rounded color="primary" class="text-weight-bold q-ml-xl" @click="confirm = true">
                Home
              </q-btn>
              <q-btn size="sm" outlined rounded color="primary" class="text-weight-bold q-ml-xl"
                @click="getMedicalPrintDetails = true">Print
              </q-btn>
            </q-toolbar>
            <div class="row">
              <div class="q-pa-md">
                <div class="text-bold col-5 text-h5">
                  Booking Confirmed -
                  {{ eqp_guest_booked_data[0].equipment_sub_name }}
                </div>
                <div class="text-bold text-h5">
                  Equipment Booking No -
                  {{ eqp_guest_booked_data[0].medical_booking_orderid }}
                </div>
              </div>
              <div class="q-pa-md">
                <div class="text-bold">Dear Customer,</div>
                <p style="text-align: justify">
                  We value your trust in MangoHomz and choice of us as your go-to provider of medical travel. We are
                  pleased to confirm that your required medical equipment's from our equipment partner Apollo has been
                  booked. The same will delivered to you at the Accommodation on the booked date. Our team is working hard
                  to make sure you have a happy stay with MangoHomz while you are busy with your doctor.
                </p>
                <div>
                  <div style="text-align: justify">
                    Thank you.
                  </div>
                  <div style="text-align: justify">
                    Team MangoHomz
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-center q-px-xl" style="font-family: verdana;
                        box-sizing: border-box;background-color: white;
                      ">
              <div class="row col-12 justify-center q-px-sm" style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-top:5px;background-color: white
                      ">
                <div class="row justify-left col-12 q-mb-md q-pa-sm">
                  <div class="row col-6 items-start">
                    <p class="col-6 items-start text-bold q-mt-sm q-mb-xs" style="font-size: 20px;font-family: verdana">
                      <img src="~assets/logos/logo-main.png" alt="hii" width="200px" height="50px" />
                    </p>
                  </div>
                  <div class="col-6 text-right">
                    <p class="col-6 text-right text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana">
                      <b>MANGOHOMZ Equipment ID :{{
                        eqp_guest_booked_data[0].medical_booking_orderid
                      }}</b>
                    </p>
                    <p class="col-6 text-right text-bold q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      PNR :0085007877
                    </p>
                    <p class="col-6 text-right q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      Medical Equipment Booked on
                      {{ eqp_guest_booked_data[0].updated_time }}
                    </p>
                  </div>
                </div>
                <div class="row col-12  justify-center bg-secondary" style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-bottom: 5px;

                      ">
                  <div class="col-2">
                    <div
                      style="width:70px; border-radius: 50%; background-color: #e4fae9;padding: 15px;margin-top: 15px;margin-left:60px;">
                      <q-icon size="40px" name="mdi-domain" color="secondary" />
                    </div>
                  </div>
                  <div class="col-10 text-white">
                    <p style="margin-top: 30px;">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b>Your booking at
                        {{ eqp_guest_booked_data[0].equipment_sub_name }},
                        {{ eqp_guest_booked_data[0].booking_city }} is
                        confirmed.</b>
                    </p>
                  </div>
                  <div class="col-11"
                    style="border: 2px;border-radius: 10px;margin-bottom: 10px;padding: 10px; background-color: white;">
                    <p>
                      Your booking at
                      <b>{{
                        eqp_guest_booked_data[0].equipment_sub_name
                      }}</b>
                      on
                      <b>{{
                        moment(
                          eqp_guest_booked_data[0].eqp_booking_date
                        ).format("dddd, DD MMM YYYY")
                      }}
                      </b>
                      Is confirmed. You have reserved for
                      <b>{{ eqp_guest_booked_data[0].days_booked_for }}</b>
                      night(s)
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{
                        eqp_guest_booked_data[0].final_price_amount
                      }}</b>.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100%
                      refunds) at least 7 days before check-in date. Any
                      cancellation there after the guest will be entitled to
                      only 60% refund till Check-in.
                    </p>
                    <p align="center">
                      <q-btn label="Manage your Additional booking online"
                        style="background-color:lightblue;color:darkblue;font-weight: bold;" outlined
                        @click="morebookings" />
                    </p>
                  </div>
                </div>
              </div>
              <div class="row col-12 bg-white justify-center q-px-sm" style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-top:5px;
                      ">
                <q-card-section class="row col-12" style="padding:15px;">
                  <div class="row justify-left col-12">
                    <div class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 18px;font-family: verdana;">
                      <b>Medical Booking Details</b>
                    </div>
                    <table style="width:100%;font-size:15px;background-color: green;color: white;" class="col-12">
                      <tr class="row col-12">
                        <td class="row col-6">
                          Booking ID No:
                          <b>
                            {{
                              eqp_guest_booked_data[0].booking_order_id
                            }}</b>
                        </td>
                        <td class="col-6">
                          Booked Date :
                          <b>
                            {{ eqp_guest_booked_data[0].updated_time }}
                          </b>
                        </td>
                      </tr>
                      <tr class="row col-12">
                        <td class="row col-6">
                          MH Equipment Booking ID :
                          <b>
                            {{
                              eqp_guest_booked_data[0].medical_booking_orderid
                            }}
                          </b>
                        </td>
                        <td class="col-6" v-if="eqp_guest_booked_data[0].gstin_no != ''">
                          Customer GSTIN/State :
                          <b>
                            {{ eqp_guest_booked_data[0].gstin_no }} /
                            {{ eqp_guest_booked_data[0].booking_city }}
                          </b>
                        </td>
                      </tr>
                      <tr class="row col-12">
                        <td class="col-6">
                          Property Name :
                          <b>
                            {{
                              eqp_guest_booked_data[0]
                                .hotel_property_name
                            }}
                          </b>
                        </td>
                        <td class="col-6">
                          Date of Booking :
                          <b>
                            {{
                              moment(
                                this.eqp_guest_booked_data[0].eqp_booking_date
                              ).format("dddd, DD MMM YYYY")
                            }}</b>
                        </td>
                      </tr>
                      <tr class="row col-12">
                        <td class="col-6">
                          City :
                          <b>
                            {{ eqp_guest_booked_data[0].booking_city }}
                          </b>
                        </td>
                        <td class="col-6">
                          State:
                          <b>
                            {{
                              eqp_guest_booked_data[0]
                                .property_city_name
                            }}
                          </b>
                        </td>
                      </tr>

                      <tr class="row col-12">
                        <td class="col-6">
                          Primary No :
                          <b>
                            {{ eqp_guest_booked_data[0].mobile_number }}
                          </b>
                        </td>
                        <td class="col-6">
                          Alternate Number :
                          <b>
                            {{ eqp_guest_booked_data[0].whatsapp_number }}
                          </b>
                        </td>
                      </tr>
                      <tr class="row col-12">
                        <td class="col-6">
                          Email ID :
                          <b>
                            {{ eqp_guest_booked_data[0].email_id }}
                          </b>
                        </td>
                        <td class="col-6">
                          Total Quantity Booked :
                          <b>
                            {{ eqp_guest_booked_data[0].total_qty_booked }} for
                            ({{ eqp_guest_booked_data[0].total_item_qty }} items)
                          </b>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="row col-12" style="padding-bottom: 20px">
                    <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px; font-family: verdana">
                      <b>Medical Booking Item Details</b>
                    </p>

                    <q-markup-table class="row col-12">
                      <div class="row col-12"
                        style="display:flex;width:100%;text-align:center;border-top: 1px solid silver;">
                        <div class="col-1 text-left"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;border-left: 1px solid silver;width:10%;padding-top:5px;padding-bottom:5px;">
                          <b>Sno</b>
                        </div>
                        <div class="col-4 text-right"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;padding-left: 10px;width:30%;padding-top:5px;padding-bottom:5px;">
                          <b>Medical Item Name</b>
                        </div>
                        <div class="col-3  text-right"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;padding-left: 10px;width:20%;padding-top:5px;padding-bottom:5px;">
                          <b>Price (for 1 Qty)</b>
                        </div>
                        <div class="col-2 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          <b>Quantity</b>
                        </div>
                        <div class="col-2 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          <b>Total Amount (₹)</b>
                        </div>
                      </div>
                      <div v-for="item in eqp_guest_booked_data[0].medicalBkngData" :key="item.index" class="row col-12"
                        style="display: flex; width: 100%; text-align: center">
                        <div class="col-1 text-left" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                border-left: 1px solid silver;
                                width: 10%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.index }}
                        </div>
                        <div class="col-4 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 30%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_name }}
                        </div>
                        <div class="col-3 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_price }}
                        </div>
                        <div class="col-2 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_quantity }}
                        </div>
                        <div class="col-2 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_price * item.item_quantity }}
                        </div>
                      </div>
                    </q-markup-table>
                  </div>
                  <div class="row justify-left col-12 q-mb-md">
  <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px; font-family: verdana">
    <b>Medical Price Details</b>
  </p>

  <div class="row col-12 q-mt-sm" style="border: 3px solid silver;place-content: space-around;">
    <table class="table">
      <thead>
        <tr>
          <th>
            <b>Price Details</b>
          </th>
          <th>
            <b>Amount (₹)</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="text-subtitle">
              medical Charges (for {{ eqp_guest_booked_data[0].total_qty_booked }} Quantity)
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right">
              ₹ {{ eqp_guest_booked_data[0].medical_charges }}
            </div>
          </td>
        </tr>
        <tr v-if="eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPON'">
          <td>
            <div class="text-subtitle">
              Applied MH Offer: {{ eqp_guest_booked_data[0].mh_offer_coupon }}
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right">
              ₹ {{ eqp_guest_booked_data[0].mh_offer_price }}
            </div>
          </td>
        </tr>
        <tr v-if="eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPON'">
          <td>
            <div class="text-subtitle">
              Price After Discount
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right">
              ₹ {{ eqp_guest_booked_data[0].price_after_discount }}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="text-subtitle">
              + Taxes & Fees -
            </div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="text-subtitle" style="padding-left: 20px">
              Taxes
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right">
              ₹ {{ eqp_guest_booked_data[0].gst_on_base_price }}
            </div>
          </td>
        </tr>
        <!-- <tr>
          <td>
            <div class="text-subtitle" style="padding-left: 20px">
              SGST at ({{ eqp_guest_booked_data[0].sgst_percentage }} %)
            </div>
          </td>
          <td>
            <div class="text-subtitle">
              Rs. {{ eqp_guest_booked_data[0].sgst_amount }}
            </div>
          </td>
        </tr> -->
        <tr>
          <td>
            <div class="text-subtitle" style="font-size: 15px;">
              Total Price
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right; font-size: 15px;">
              <strong>₹ {{ eqp_guest_booked_data[0].final_price_amount }} /-</strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="col-12 text-right">
      <div class="text-subtitle" style="font-size: 12px; padding-right: 10px; padding-top: 5px;">
        <strong>Grand Total (in Words): {{ this.finalprice }}</strong>
      </div>
    </div>
  </div>
</div>


                  <div class="row justify-left col-12 q-mb-md" style="padding-top:20px;">
                    <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px">
                        <b>MangoHomz Support</b>
                      </p>
                      <div style="display:flex;width:100%;text-align:center;padding-bottom:10px;">
                        <div class="text-center" style="text-align:center;padding-top:10px;width:10%;padding-left:10px;">
                          <img src="~assets/logos/MHmini_logo_128x128.png" alt="hii" width="50px" height="50px" />
                        </div>
                        <div class="text-center" style="padding-left:20px;width:65%">
                          <div class="col-5">
                            <div style="padding-left:50px;color:#1e398e;text-align:center;">
                              <u>Contact US</u>
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              WhatsApp Number: 8929982655
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              E-Mail: care@MangoHomz.com
                            </div>
                          </div>
                        </div>
                        <div class="text-center" style="padding-right:40px;width:25%;">
                          <div class="col-12">
                            <div style="color:#1e398e"><u>Business Hours</u></div>
                            <div style="text-align:center;padding-top:5px">
                              Monday – Saturday
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              10AM – 6 PM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-left col-12 q-mb-md" style="padding-top:20px;">
                    <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px">
                        <b>Other Information</b>
                      </p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;"><b>Safety and
                          Hygiene</b></p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px">• Quarantine protocols are
                        being followed as per local government authorities Guests from containment zones are not
                        allowed</p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px">• Shared resources in common
                        areas are properly sanitized Property staff is trained on hygiene guidelines</p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px"> • Only those guests with safe
                        status on Aarogya Setu app are allowed Hand sanitizer is provided in guest accommodation and
                        common areas
                      </p>

                    </div>
                  </div>
                </q-card-section>
              </div>
              <q-dialog v-model="moreservices">
                <q-card style="min-width: 200px">
                  <q-card-section class="row col-12">
                    <div class="col-11 text-h6 text-bold text-primary">
                      <q-icon>
                        <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
                      </q-icon>
                      Book More MANGOHOMZ Services
                    </div>
                    <div>
                      <q-btn dark flat padding="none" class="justify-end" icon="close" v-close-popup>
                        <q-tooltip>close</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator />
                  <div class="row col-12 justify-center q-ma-md">
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          TRAVEL
                        </div>
                        <div class="text-caption">
                          Smooth travel facilities 24 / 7
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addTravel"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                      </div>
                    </q-card>
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          MEDICAL EQUIPMENT
                        </div>
                        <div class="text-caption">
                          Book Medical Equipment during Medical Trip
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addMedical"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                      </div>
                    </q-card>
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          FOOD
                        </div>
                        <div class="text-caption">Nutritious Hygenic Food</div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addFood" class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                      </div>
                    </q-card>
                  </div>
                </q-card>
              </q-dialog>
            </div>
          </q-card>
        </div>
      </div>

      <!--Print website view-->
      <q-dialog v-model="getMedicalPrintDetails" persistent class="gt-xs" :maximized="maximizedToggle"
        transition-show="slide-up" transition-hide="slide-down">
        <q-card class="justify-center" style="padding-bottom:20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />
            <q-btn print="'#createPdf'" label="Print" rounded class="positive text-bold text-white"
              @click="printpart('createPdf')" />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <div id="createPdf" class="body q-px-xl ">
            <div class="row justify-center q-px-xl" style="font-family: verdana;
                        box-sizing: border-box;background-color: white;
                      ">
              <div class="row col-12 justify-center q-px-sm" style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-top:5px;background-color: white
                      ">
                <div class="row justify-left col-12 q-mb-md q-pa-sm">
                  <div class="row col-6 items-start">
                    <p class="col-6 items-start text-bold q-mt-sm q-mb-xs" style="font-size: 20px;font-family: verdana">
                      <img src="~assets/logos/logo-main.png" alt="hii" width="200px" height="50px" />
                    </p>
                  </div>
                  <div class="col-6 " style="text-align:right">
                    <p class="col-6 text-right text-bold q-mt-sm q-mb-xs"
                      style="font-size: 15px;font-family: verdana;text-align:right">
                      <b>MANGOHOMZ Equipment ID :{{
                        eqp_guest_booked_data[0].medical_booking_orderid
                      }}</b>
                    </p>
                    <p class="col-6 text-right text-bold q-mt-xs q-mb-xs"
                      style="font-size: 15px;font-family: verdana;text-align:right">
                      PNR :0085007877
                    </p>
                    <p class="col-6 text-right q-mt-xs q-mb-xs"
                      style="font-size: 15px;font-family: verdana;text-align:right">
                      Medical Equipment Booked On
                      {{ eqp_guest_booked_data[0].updated_time }}
                    </p>
                  </div>
                </div>
                <div class="row col-12  justify-center " style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-bottom: 5px;
                        background-color:green;

                      ">
                  <div class="col-12 row" style="display:flex">
                    <div class="col-2"
                      style="width:60px; border-radius: 50%; background-color: #e4fae9;padding: 15px;margin:15px 10px 20px 40px;color:green">

                      <q-icon size="40px" name="mdi-domain" color="green" style="color:green" />
                    </div>
                    <div class="col-10 " style="color:white">
                      <p style="margin-top: 30px;">
                        Thank you for booking with us.
                      </p>
                      <p>
                        <b>Your booking at
                          {{ eqp_guest_booked_data[0].equipment_sub_name }},
                          {{ eqp_guest_booked_data[0].booking_city }} is
                          confirmed.</b>
                      </p>
                    </div>
                  </div>
                  <div class="col-11"
                    style="border: 2px;border-radius: 10px;margin-bottom: 10px;padding: 10px; background-color: white;">
                    <p>
                      Your booking at
                      <b>{{
                        eqp_guest_booked_data[0].equipment_sub_name
                      }}</b>
                      on
                      <b>{{
                        moment(
                          eqp_guest_booked_data[0].eqp_booking_date
                        ).format("dddd, DD MMM YYYY")
                      }}
                      </b>
                      Is confirmed. You have reserved for
                      <b>{{ eqp_guest_booked_data[0].days_booked_for }}</b>
                      night(s)
                    </p>
                    <p>
                      You have paid amount of INR
                      <b>{{
                        eqp_guest_booked_data[0].final_price_amount
                      }}</b>.
                    </p>
                    <p class="text-green text-bold">
                      You booking is under Free Cancellation policy (100%
                      refunds) at least 7 days before check-in date. Any
                      cancellation there after the guest will be entitled to
                      only 60% refund till Check-in.
                    </p>

                  </div>
                </div>
              </div>
              <div class="row col-12 bg-white justify-center q-px-sm" style="font-family: verdana;
                        border-right: 2px solid lightgrey;
                        box-sizing: border-box;
                        border-left: 2px solid lightgrey;
                        border-top: 2px solid lightgrey;
                        border-bottom: 2px solid lightgrey;
                        margin-top:5px;
                      ">
                <q-card-section class="row col-12" style="padding:15px;">
                  <div class="row justify-left col-12">
                    <div class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 18px;font-family: verdana;">
                      <b>Medical Booking Details</b>
                    </div>
                    <table style="width:100%;font-size:15px;background-color: green;color: white;" class="col-12">
                      <tr class="row col-12">
                        <td class="row col-6">
                          Booking ID No:
                          <b>
                            {{
                              eqp_guest_booked_data[0].booking_order_id
                            }}</b>
                        </td>
                        <td class="col-6">
                          Booked Date :
                          <b>
                            {{ eqp_guest_booked_data[0].updated_time }}
                          </b>
                        </td>
                      </tr>
                      <tr class="row col-12">
                        <td class="row col-6">
                          MH Equipment Booking ID :
                          <b>
                            {{
                              eqp_guest_booked_data[0].medical_booking_orderid
                            }}
                          </b>
                        </td>
                        <!-- <td class="col-6" v-if="eqp_guest_booked_data[0].gstin_no != ''">
                          Customer GSTIN/State :
                          <b>
                            {{ eqp_guest_booked_data[0].gstin_no }} /
                            {{ eqp_guest_booked_data[0].booking_city }}
                          </b>
                        </td> -->
                      </tr>
                      <tr class="row col-12">
                        <td class="col-6">
                          Property Name :
                          <b>
                            {{
                              eqp_guest_booked_data[0]
                                .hotel_property_name
                            }}
                          </b>
                        </td>
                        <td class="col-6">
                          Date of Booking :
                          <b>
                            {{
                              moment(
                                this.eqp_guest_booked_data[0].eqp_booking_date
                              ).format("dddd, DD MMM YYYY")
                            }}</b>
                        </td>
                      </tr>
                      <tr class="row col-12">
                        <td class="col-6">
                          City :
                          <b>
                            {{ eqp_guest_booked_data[0].booking_city }}
                          </b>
                        </td>
                        <!-- <td class="col-6">
                          State:
                          <b>
                            {{
                              eqp_guest_booked_data[0]
                                .property_city_name
                            }}
                          </b>
                        </td> -->
                      </tr>

                      <tr class="row col-12">
                        <td class="col-6">
                          Primary No :
                          <b>
                            {{ eqp_guest_booked_data[0].mobile_number }}
                          </b>
                        </td>
                        <!-- <td class="col-6">
                          Alternate Number :
                          <b>
                            {{ eqp_guest_booked_data[0].whatsapp_number }}
                          </b>
                        </td> -->
                      </tr>
                      <tr class="row col-12">
                        <td class="col-6">
                          Email ID :
                          <b>
                            {{ eqp_guest_booked_data[0].email_id }}
                          </b>
                        </td>
                        <td class="col-6">
                          Total Quantity Booked :
                          <b>
                            {{ eqp_guest_booked_data[0].total_qty_booked }} for
                            ({{ eqp_guest_booked_data[0].total_item_qty }} items)
                          </b>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="row col-12" style="padding-bottom: 20px">
                    <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px; font-family: verdana">
                      <b>Medical Booking Item Details</b>
                    </p>

                    <q-markup-table class="row col-12">
                      <div class="row col-12"
                        style="display:flex;width:100%;text-align:center;border-top: 1px solid silver;">
                        <div class="col-12 text-left"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;border-left: 1px solid silver;width:10%;padding-top:5px;padding-bottom:5px;">
                          <b>Sno</b>
                        </div>
                        <div class="col-12 text-right"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;padding-left: 10px;width:30%;padding-top:5px;padding-bottom:5px;">
                          <b>Medical Item Name</b>
                        </div>
                        <div class="col-12  text-right"
                          style="text-align: center;border-bottom: 1px solid silver;border-right: 1px solid silver;padding-left: 10px;width:20%;padding-top:5px;padding-bottom:5px;">
                          <b>Price (for 1 Qty)</b>
                        </div>
                        <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          <b>Quantity</b>
                        </div>
                        <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          <b>Total Amount (₹)</b>
                        </div>
                      </div>
                      <div v-for="item in eqp_guest_booked_data[0].medicalBkngData" :key="item.index" class="row col-12"
                        style="display: flex; width: 100%; text-align: center">
                        <div class="col-1 text-left" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                border-left: 1px solid silver;
                                width: 10%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.index }}
                        </div>
                        <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 30%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_name }}
                        </div>
                        <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_price }}
                        </div>
                        <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_quantity }}
                        </div>
                        <div class="col-12 text-right" style="
                                text-align: center;
                                border-bottom: 1px solid silver;
                                border-right: 1px solid silver;
                                padding-left: 10px;
                                width: 20%;
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                          {{ item.item_price * item.item_quantity }}
                        </div>
                      </div>
                    </q-markup-table>
                  </div>

                  <div class="row justify-left col-12 q-mb-md">
  <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px; font-family: verdana">
    <b>Medical Price Details</b>
  </p>

  <div class="row col-12 q-mt-sm" style="border: 3px solid silver;place-content: space-around;">
    <table class="table">
      <thead>
        <tr>
          <th>
            <b>Price Details</b>
          </th>
          <th>
            <b>Amount (₹)</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="text-subtitle">
              medical Charges (for {{ eqp_guest_booked_data[0].total_qty_booked }} Quantity)
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right">
              ₹ {{ eqp_guest_booked_data[0].medical_charges }}
            </div>
          </td>
        </tr>
        <tr v-if="eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPON'">
          <td>
            <div class="text-subtitle">
              Applied MH Offer: {{ eqp_guest_booked_data[0].mh_offer_coupon }}
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right">
              ₹ {{ eqp_guest_booked_data[0].mh_offer_price }}
            </div>
          </td>
        </tr>
        <tr v-if="eqp_guest_booked_data[0].mh_offer_coupon != 'APPLY COUPON'">
          <td>
            <div class="text-subtitle">
              Price After Discount
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right">
              ₹ {{ eqp_guest_booked_data[0].price_after_discount }}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="text-subtitle">
              + Taxes & Fees -
            </div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="text-subtitle" style="padding-left: 20px">
              Taxes
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right">
              ₹ {{ eqp_guest_booked_data[0].gst_on_base_price }}
            </div>
          </td>
        </tr>
        <!-- <tr>
          <td>
            <div class="text-subtitle" style="padding-left: 20px">
              SGST at ({{ eqp_guest_booked_data[0].sgst_percentage }} %)
            </div>
          </td>
          <td>
            <div class="text-subtitle">
              Rs. {{ eqp_guest_booked_data[0].sgst_amount }}
            </div>
          </td>
        </tr> -->
        <tr>
          <td>
            <div class="text-subtitle" style="font-size: 15px;">
              Total Price
            </div>
          </td>
          <td>
            <div class="text-subtitle" style="float: right; font-size: 15px;">
              <strong>₹ {{ eqp_guest_booked_data[0].final_price_amount }} /-</strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="col-12 text-right">
      <div class="text-subtitle" style="font-size: 12px; padding-right: 10px; padding-top: 5px;">
        <strong>Grand Total (in Words): {{ this.finalprice }}</strong>
      </div>
    </div>
  </div>
</div>



                  <div class="row justify-left col-12 q-mb-md" style="padding-top:20px;">
                    <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px">
                        <b>MangoHomz Support</b>
                      </p>
                      <div style="display:flex;width:100%;text-align:center;padding-bottom:10px;">
                        <div class="text-center" style="text-align:center;padding-top:10px;width:10%;padding-left:10px;">
                          <img src="~assets/logos/MHmini_logo_128x128.png" alt="hii" width="50px" height="50px" />
                        </div>
                        <div class="text-center" style="padding-left:20px;width:65%">
                          <div class="col-5">
                            <div style="padding-left:50px;color:#1e398e;text-align:center;">
                              <u>Contact US</u>
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              WhatsApp Number: 8929982655
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              E-Mail: care@MangoHomz.com
                            </div>
                          </div>
                        </div>
                        <div class="text-center" style="padding-right:40px;width:25%;">
                          <div class="col-12">
                            <div style="color:#1e398e"><u>Business Hours</u></div>
                            <div style="text-align:center;padding-top:5px">
                              Monday – Saturday
                            </div>
                            <div style="text-align:center;padding-top:5px">
                              10AM – 6 PM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-left col-12 q-mb-md" style="padding-top:20px;">
                    <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px">
                        <b>Other Information</b>
                      </p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;"><b>Safety and
                          Hygiene</b></p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;">• Quarantine protocols
                        are
                        being followed as per local government authorities Guests from containment zones are not
                        allowed</p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;">• Shared resources in
                        common
                        areas are properly sanitized Property staff is trained on hygiene guidelines</p>
                      <p style="font-size: 12px;font-family: verdana;padding-left:20px;width:100%;"> • Only those guests
                        with safe
                        status on Aarogya Setu app are allowed Hand sanitizer is provided in guest accommodation and
                        common areas
                      </p>

                    </div>
                  </div>
                </q-card-section>
              </div>
              <q-dialog v-model="moreservices">
                <q-card style="min-width: 200px">
                  <q-card-section class="row col-12">
                    <div class="col-11 text-h6 text-bold text-primary">
                      <q-icon>
                        <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
                      </q-icon>
                      Book More MANGOHOMZ Services
                    </div>
                    <div>
                      <q-btn dark flat padding="none" class="justify-end" icon="close" v-close-popup>
                        <q-tooltip>close</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-separator />
                  <div class="row col-12 justify-center q-ma-md">
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          TRAVEL
                        </div>
                        <div class="text-caption">
                          Smooth travel facilities 24 / 7
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addTravel"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                      </div>
                    </q-card>
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          MEDICAL EQUIPMENT
                        </div>
                        <div class="text-caption">
                          Book Medical Equipment during Medical Trip
                        </div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addMedical"
                          class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
                      </div>
                    </q-card>
                    <q-card style="display: flex; background-color: #e4fae9" class="q-mb-sm q-ma-md col-8 justify-center">
                      <q-card-section class="q-mr-xl">
                        <div class="text-bold text-subtitle2 text-secondary">
                          FOOD
                        </div>
                        <div class="text-caption">Nutritious Hygenic Food</div>
                      </q-card-section>
                      <div>
                        <q-btn label="BOOK" @click="addFood" class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
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
import { mapState } from "vuex";
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
    footerTag
    // searchHeaderComp
  },

  data() {
    return {

      printLoading: true,
      printObj: {
        id: "printMe",
        preview: true,
        previewTitle: 'print Title',
        // url: 'http://localhost:8080/',
        popTitle: 'good print',
        // extraCss: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
        // extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback(vue) {
          vue.printLoading = true
          //   console.log('before opening')
        },
        openCallback(vue) {
          vue.printLoading = false
          //  console.log('Printing was performed')
        },
        closeCallback(vue) {
          //  console.log('closed print tool')
        }
      },
      autoplay: true,
      moment: moment,
      class_val: "shadow-1 hotel-details-card-1",
      maximizedToggle: true,

      medicalPriceDetails: {
        final_price_amount_in_words: ""
      },
      moreservices: false,
      getMedicalPrintDetails: false,

      medical_booking_orderid: "",
      title1: "Equipment Invoice Details",

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
        "Nineteen "
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
        "Ninety"
      ]
    };
  },
  created() {
    this.propMedicalBookedGuestNo = "";
    this.propMedicalBookedGuestNo = this.$route.params.equipmentGuestNumber;
  },
  computed: {
    ...mapState({
      eqp_guest_booked_data: state => state.booking.eqp_guest_booked_data
      // mh_print_data: state => state.booking.mh_print_data
    }),
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
    finalprice() {
      let finalprice = this.inWords(this.eqp_guest_booked_data[0].final_price_amount);
      return finalprice;
    },
  },
  mounted() {
    this.$store.dispatch(
      `booking/getMedicalBookingId`,
      this.propMedicalBookedGuestNo
    );
  },

  methods: {
    addFood() {
      this.$router.push("/bookingFood");
    },
    addTravel() {
      this.$router.push("/bookingTravel");
    },
    addMedical() {
      this.$router.push("/bookingEquipment");
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
    async printpart() {
      await this.$htmlToPaper("createPdf");

      this.createPdf = options();
    },
    morebookings() {
      this.moreservices = true;
    },
  }
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
    @media print
</style>
