<template>
  <q-page-container class="bg-indigo-1 ">
    <headerTag />

    <q-page style="padding-top: 60px" class="q-pa-md">
      <div class="justify-center grad">
        <div class="q-pa-md row justify-center q-gutter-md">
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
              @click="getCancelPrintDetails = true"
              >Print
            </q-btn>
          </q-toolbar>
          <div class="row">
            <!-- <div class="q-pa-md">
              <div class="text-bold text-h5">
                Cancel Booking -
                {{ this.propBookedGuestNo[0].property_name }}
              </div>
              <div class="text-bold text-h5">
                Booking ID No -
                {{ this.mh_acc_data[0].booking_order_id }}
              </div>
              <div class="text-bold text-h5 q-mt-lg">
                  <img
                    src="../assets/logos/mh-logo.png"
                    width="200px"
                    height="35px"
                  />
                </div>
            </div> -->
            <div class="q-pa-md">
              <div class="text-bold" style="font-size:18px;">
                Dear Customer,
              </div>
              <p style="text-align: justify">
                Thank You, Your Cancellation With {{ this.individual_travel_cancel_data[0].transport_sub_name }} Successfully Done.
                <b>
                  <!-- {{ this.propBookedGuestNo[0].property_name }}
                       (Near
                    {{ this.propBookedGuestNo[0].near_hospital_name }}) --> </b
                >Please Find below The Refunds Amount Details
              </p>
            </div>
          </div>
        </div>
        <div
          class="row justify-center q-px-xl"
          style="font-family: verdana;
                  box-sizing: border-box;background-color: white;
                "
        >
          <div
            class="row col-12 justify-center q-px-sm"
            style="font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top:5px;background-color: white
                "
          >
            <div class="row justify-left col-12 q-mb-md q-pa-sm">
              <div class="row col-6 items-start">
                <p
                  class="col-6 items-start text-bold q-mt-sm q-mb-xs"
                  style="font-size: 20px;font-family: verdana"
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
                  style="font-size: 15px;font-family: verdana"
                >
                  <b
                    >MANGOHOMZ ID :
                    {{ this.individual_travel_cancel_data[0].booking_order_id }}
                  </b>
                </p>
                <p
                  class="col-6 text-right text-bold q-mt-xs q-mb-xs"
                  style="font-size: 15px;font-family: verdana"
                >
                  PNR :0085007877
                </p>
                <p
                  class="col-6 text-right q-mt-xs q-mb-xs"
                  style="font-size: 15px;font-family: verdana"
                >
                  Travel Cancel on
                  {{ this.individual_travel_cancel_data[0].inserted_date }}
                </p>
              </div>
            </div>

            <div
              class="row col-12 bg-white justify-center q-px-sm"
              style="font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top:5px
                "
            >
              <div>
                <q-card-section>

                  <!-- Travel Refund  Details Start -->
                  <div
                    class="row justify-left col-9 q-mb-md"

                  >
                    <p
                      class="row col-12 text-bold q-mt-sm q-mb-xs"
                      style="font-size: 15px;font-family: verdana;"
                    >
                      <b>Travel Refund Details</b>
                    </p>

                    <div
                      class="row col-12 q-mt-sm"
                      style="border: 1px solid silver; "
                    >
                      <div style="display:flex;width:100%">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            <b> Price Details</b>
                          </div>
                        </div>
                        <div
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          <b> Amount (₹) </b>
                        </div>
                      </div>
                      <div
                        style="display:flex;width:100%; border-top:1px solid silver"
                      >
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            Travel charges
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                        >
                          Rs.
                          {{ this.individual_travel_cancel_data[0].travel_charges }}
                        </div>
                      </div>
                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px
                      "
                          >
                            MH offer (APPLY COUPEN)
                            {{ this.individual_travel_cancel_data[0].mh_offer_coupon }}

                            :
                          </div>
                        </div>

                        <div
                          class="text-subtitle"
                          style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                        >
                          (-) Rs.
                          {{ this.individual_travel_cancel_data[0].mh_offer_price }}
                        </div>
                      </div>
                      <!-- <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px
                      "
                          >
                            Discount Price 15% :
                            {{ this.individual_travel_cancel_data[0].mh_offer_name }}
                          </div>
                        </div>

                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          (-) Rs.
                          {{ this.individual_travel_cancel_data[0].mh_offer_price }}
                        </div>
                      </div>
                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            Price After Discount:
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          Rs.
                          {{ this.individual_travel_cancel_data[0].price_after_discount }}
                        </div>
                      </div> -->
                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            CGST Amount (9%)
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          <strong>
                            Rs.
                            {{ this.individual_travel_cancel_data[0].cgst_amount }}
                            /-
                          </strong>
                        </div>
                      </div>
                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            SGST Amount (9%)
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          <strong>
                            Rs.
                            {{ this.individual_travel_cancel_data[0].sgst_amount }}
                            /-
                          </strong>
                        </div>
                      </div>
                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            Total Price
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          <strong>
                            Rs.
                            {{ this.individual_travel_cancel_data[0].payable_amount }}
                            /-
                          </strong>
                        </div>
                      </div>

                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            Cancellation Charges (%)
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          <strong>
                            :
                            {{
                              this.individual_travel_cancel_data[0]
                                .cancellation_percentage
                            }}
                          </strong>
                        </div>
                      </div>

                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            Cancellation Amount
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          <strong>
                            Rs.
                            {{
                              this.individual_travel_cancel_data[0].cancellationtravel
                            }}
                            /-
                          </strong>
                        </div>
                      </div>

                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            Refund Amount
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          <strong>
                            Rs.
                            {{
                              this.individual_travel_cancel_data[0].travelrefundamount
                            }}
                            /-
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Travel Refund Details End -->

                  <div
                    class="row justify-left col-9 q-mb-md"
                    style="padding-top:20px;"
                  >
                    <div
                      class="row col-12 q-mt-sm "
                      style="border: 1px solid silver;"
                    >
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px"
                      >
                        <b>Payment Refunds Details</b>
                      </p>

                      <p
                        style="font-size: 12px;font-family: verdana;padding-left:20px"
                      >
                        • The Amount Will be Created To The Linked Account Within 5 To 7 Bank Working Days.
                      </p>


                    </div>
                  </div>

                  <div
                    class="row justify-left col-9 q-mb-md"
                    style="padding-top:20px;"
                  >
                    <div
                      class="row col-12 q-mt-sm "
                      style="border: 1px solid silver;"
                    >
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px"
                      >
                        <b>MangoHomz Support</b>
                      </p>
                      <div
                        style="display:flex;width:100%;text-align:center;padding-bottom:10px;"
                      >
                        <div
                          class="text-center"
                          style="text-align:center;padding-top:10px;width:10%;padding-left:10px;"
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
                          style="padding-left:20px;width:65%"
                        >
                          <div class="col-5">
                            <div
                              style="padding-left:50px;color:#1e398e;text-align:center;"
                            >
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
                        <div
                          class="text-center"
                          style="padding-right:40px;width:25%;"
                        >
                          <div class="col-12">
                            <div style="color:#1e398e">
                              <u>Business Hours</u>
                            </div>
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
                  <div
                    class="row justify-left col-9 q-mb-md"
                    style="padding-top:20px;"
                  >
                    <div
                      class="row col-12 q-mt-sm "
                      style="border: 1px solid silver;"
                    >
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px"
                      >
                        <b>Other Information</b>
                      </p>
                      <p
                        style="font-size: 12px;font-family: verdana;padding-left:20px"
                      >
                        <b>Safety and Hygiene</b>
                      </p>
                      <p
                        style="font-size: 12px;font-family: verdana;padding-left:20px"
                      >
                        • Quarantine protocols are being followed as per local
                        government authorities Guests from containment zones are
                        not allowed
                      </p>
                      <p
                        style="font-size: 12px;font-family: verdana;padding-left:20px"
                      >
                        • Shared resources in common areas are properly
                        sanitized Property staff is trained on hygiene
                        guidelines
                      </p>
                      <p
                        style="font-size: 12px;font-family: verdana;padding-left:20px"
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
          </div>
        </div>
      </div>

      <q-dialog
        v-model="getCancelPrintDetails"
        persistent
        class="my_card"
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="justify-center" style="padding-bottom:20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />
            <q-btn
              print="'#createPdf'"
              label="Print"
              v-print="getCancelPrintDetails"
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
              style="font-family: verdana;
                  box-sizing: border-box;background-color: white;
                "
            >
              <div
                class="row col-12 justify-center q-px-sm"
                style="font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top:5px;background-color: white
                "
              >
                <div class="row justify-left col-12 q-mb-md q-pa-sm">
                  <div class="row col-6 items-start">
                    <p
                      class="col-6 items-start text-bold q-mt-sm q-mb-xs"
                      style="font-size: 20px;font-family: verdana"
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
                  style="font-size: 15px;font-family: verdana"
                >
                  <b
                    >MANGOHOMZ ID :
                    {{ this.individual_travel_cancel_data[0].booking_order_id }}
                  </b>
                </p>
                <p
                  class="col-6 text-right text-bold q-mt-xs q-mb-xs"
                  style="font-size: 15px;font-family: verdana"
                >
                  PNR :0085007877
                </p>
                <p
                  class="col-6 text-right q-mt-xs q-mb-xs"
                  style="font-size: 15px;font-family: verdana"
                >
                  Travel Cancel on
                  {{ this.individual_travel_cancel_data[0].inserted_date }}
                </p>
              </div>
                </div>
                <div
                  class="row col-12  justify-center"
                  style="font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-bottom: 5px;
                  background-color:green;

                "
                >
                  <div class="col-12 row" style="display:flex">
                    <div
                      class="col-2"
                      style="width:60px; border-radius: 50%; background-color: #e4fae9;padding: 15px;margin:15px 10px 20px 40px;color:green"
                    >
                      <q-icon
                        size="40px"
                        name="mdi-domain"
                        color="green"
                        style="color:green"
                      />
                    </div>
                    <div class="col-10 " style="color:white">
                      <p style="margin-top: 30px;">
                        Thank You,
                      </p>
                      <p>
                        <b
                          >Your Cancellation at
                          {{ this.individual_travel_cancel_data[0].transport_sub_name }}
                          is confirmed.</b
                        >  Please Find below The Refunds Amount Details
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <div
                class="row col-12 bg-white justify-center q-px-sm"
                style="font-family: verdana;
                  border-right: 2px solid lightgrey;
                  box-sizing: border-box;
                  border-left: 2px solid lightgrey;
                  border-top: 2px solid lightgrey;
                  border-bottom: 2px solid lightgrey;
                  margin-top:5px
                "
              >
                <div>
                  <q-card-section>

                    <!-- Travel Refund  Details Start -->
                    <div class="row justify-left col-9 q-mb-md">
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;"
                      >
                        <b>Travel Refund Details</b>
                      </p>

                      <div
                        class="row col-12 q-mt-sm"
                        style="border: 1px solid silver; "
                      >
                        <div style="display:flex;width:100%">
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                            >
                              <b> Price Details</b>
                            </div>
                          </div>
                          <div
                            style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                          >
                            <b> Amount (₹) </b>
                          </div>
                        </div>
                        <div
                          style="display:flex;width:100%; border-top:1px solid silver"
                        >
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                            >
                              Travel charges
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            Rs.
                            {{ this.individual_travel_cancel_data[0].travel_charges }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px
                      "
                            >
                              MH offer (APPLY COUPEN)
                              {{
                                this.individual_travel_cancel_data[0].mh_offer_coupon
                              }}

                              :
                            </div>
                          </div>

                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            (-) Rs.
                            {{ this.individual_travel_cancel_data[0].mh_offer_price }}
                          </div>
                        </div>
                        <!-- <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px
                      "
                          >
                            Discount Price 15% :
                            {{ this.individual_travel_cancel_data[0].mh_offer_name }}
                          </div>
                        </div>

                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          (-) Rs.
                          {{ this.individual_travel_cancel_data[0].mh_offer_price }}
                        </div>
                      </div>
                      <div style="display:flex;width:100%;">
                        <div style="width:60%">
                          <div
                            class="text-subtitle"
                            style="
                        font-size: 12px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                          >
                            Price After Discount:
                          </div>
                        </div>
                        <div
                          class="text-subtitle"
                          style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                        >
                          Rs.
                          {{ this.individual_travel_cancel_data[0].price_after_discount }}
                        </div>
                      </div> -->
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                            >
                              CGST Amount (9%)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                          >
                            <strong>
                              Rs.
                              {{ this.individual_travel_cancel_data[0].cgst_amount }}
                              /-
                            </strong>
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                            >
                              SGST Amount (9%)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                          >
                            <strong>
                              Rs.
                              {{ this.individual_travel_cancel_data[0].sgst_amount }}
                              /-
                            </strong>
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                            >
                              Total Price
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                          >
                            <strong>
                              Rs.
                              {{
                                this.individual_travel_cancel_data[0].payable_amount
                              }}
                              /-
                            </strong>
                          </div>
                        </div>

                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                            >
                              Cancellation Charges (%)
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                          >
                            <strong>
                              :
                              {{
                                this.individual_travel_cancel_data[0]
                                  .cancellation_percentage
                              }}
                            </strong>
                          </div>
                        </div>

                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                            >
                              Cancellation Amount
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                          >
                            <strong>
                              Rs.
                              {{
                                this.individual_travel_cancel_data[0]
                                  .cancellationtravel
                              }}
                              /-
                            </strong>
                          </div>
                        </div>

                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div
                              class="text-subtitle"
                              style="
                        font-size: 15px;
                        padding-left: 10px;
                        padding-top:5px;
                      "
                            >
                              Refund Amount
                            </div>
                          </div>
                          <div
                            class="text-subtitle"
                            style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                          >
                            <strong>
                              Rs.
                              {{
                                this.individual_travel_cancel_data[0]
                                  .travelrefundamount
                              }}
                              /-
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Travel Refund Details End -->
                    <div
                    class="row justify-left col-9 q-mb-md"
                    style="padding-top:20px;"
                  >
                    <div
                      class="row col-12 q-mt-sm "
                      style="border: 1px solid silver;"
                    >
                      <p
                        class="row col-12 text-bold q-mt-sm q-mb-xs"
                        style="font-size: 15px;font-family: verdana;padding-left:10px"
                      >
                        <b>Payment Refunds Details</b>
                      </p>

                      <p
                        style="font-size: 12px;font-family: verdana;padding-left:20px"
                      >
                        • The Amount Will be Created To The Linked Account Within 5 To 7 Bank Working Days.
                      </p>


                    </div>
                  </div>

                    <div
                      class="row justify-left col-9 q-mb-md"
                      style="padding-top:20px;"
                    >
                      <div
                        class="row col-12 q-mt-sm "
                        style="border: 1px solid silver;"
                      >
                        <p
                          class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="font-size: 15px;font-family: verdana;padding-left:10px"
                        >
                          <b>MangoHomz Support</b>
                        </p>
                        <div
                          style="display:flex;width:100%;text-align:center;padding-bottom:10px;"
                        >
                          <div
                            class="text-center"
                            style="text-align:center;padding-top:10px;width:10%;padding-left:10px;"
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
                            style="padding-left:20px;width:65%"
                          >
                            <div class="col-5">
                              <div
                                style="padding-left:50px;color:#1e398e;text-align:center;"
                              >
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
                          <div
                            class="text-center"
                            style="padding-right:40px;width:25%;"
                          >
                            <div class="col-12">
                              <div style="color:#1e398e">
                                <u>Business Hours</u>
                              </div>
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
                  </q-card-section>
                </div>
              </div>
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
    <footer-tag />

    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-space></q-space>

        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page-container>
</template>
<script>
import headerTag from "./header.vue";
import footerTag from "./footer.vue";
import { mapState, mapActions } from "vuex";
import moment from "moment";
import VueHtmlToPaper from "vue-html-to-paper";
//import { api } from "boot/axios";

directives: {
  print;
  VueHtmlToPaper;
}
export default {
  components: {
    headerTag,
    footerTag
  },
  data() {
    return {
      maximizedToggle: true,
      title1: "Travel Cancel Invoice Details",
      confirm: false,
      // GuestDetails: {
      //   guest_name: ""
      // },
      moment: moment,
      getCancelPrintDetails: false,
      class_val: "shadow-1 hotel-details-card-1"
    };
  },
  created() {
    this.propTravelBookedGuestNo = "";
    // this.propCancelGuestNo = this.$route.params.guestCancelID;
      this.propTravelBookedGuestNo = this.$route.params.travelCanceldata;

   // console.log("this",  this.$route.params.travelCanceldata);

  },
  computed: {
    ...mapState({
     // mh_acc_data: state => state.cancelled.mh_acc_data,
    //   acc_guest_cancel_data: state => state.cancelled.acc_guest_cancel_data,
      individual_travel_cancel_data: state => state.cancelled.individual_travel_cancel_data,

    }),
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    }
    // priceinwords() {
    //   let priceinwords = this.inWords(this.propBookedGuestNo[0].total_price)
    //   return priceinwords;
    // },
  },
  mounted() {

    // this.$store.dispatch(`cancelled/getIndividualTravelCancelId`, "2147483647");
    this.$store.dispatch(`cancelled/getIndividualTravelCancelId`);


  },
  methods: {

   // ...mapActions("cancelled", ["getIndividualTravelCancelId"]),

    backTo() {
      this.$router.push("/");
      this.confirm = false;
    },
    // cancellAmount() {
    //   let cancellAmount = Math.round(
    //     parseFloat(this.mh_acc_data[0].total_price).toFixed(2) -
    //       (parseFloat(this.mh_acc_data[0].total_price).toFixed(2) * 60) / 100
    //   );
    //   return cancellAmount;
    // },
    // payableAmount() {
    //   let payAmount = Math.round(
    //     (parseFloat(this.mh_acc_data[0].total_price).toFixed(2) * 60) / 100
    //   );
    //   return payAmount;
    // },
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
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
