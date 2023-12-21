<template>
  <q-page-container class="bg-indigo-1">
    <headerTag />

    <!--Mobile View Start-->
    <q-page style="padding-top: 0px" class="q-pa-sm lt-sm">
      <div class="justify-center grad">
        <div class="q-pa-sm row justify-center q-gutter-md">
          <q-card flat :class="this.class_val" class="cursor-pointer">
            <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
              <q-space />
              <q-btn size="sm" outline rounded color="primary" class="text-weight-bold q-ml-sm" @click="confirm = true">
                Home
              </q-btn>
              <q-btn size="sm" outlined rounded color="primary" class="text-weight-bold q-ml-sm"
                @click="getPrintDetails = true">Print
              </q-btn>
            </q-toolbar>
            <div class="row">
              <div class="q-pl-md">
                <div class="text-bold text-h6">
                  Food Booking Confirmed -
                  {{ this.food_guest_booked_data[0].guest_name }}
                </div>
                <div class="text-bold text-h6">
                  Food Booking No -
                  {{ this.food_guest_booked_data[0].food_booking_orderid }}
                </div>
                <!-- <div class="text-bold text-h5 q-mt-lg">
                  <img
                    src="../assets/logos/mh-logo.png"
                    width="200px"
                    height="35px"
                  />
                </div> -->
              </div>
              <div class="q-pa-md ">
                <div class="text-bold" style="font-size:18px;">
                  Dear Customer,
                </div>
                <p style="text-align: justify">
                  We value your trust in MangoHomz and choice of us as your
                  go-to provider of medical travel. We are happy to inform you
                  that a reservation has been made for your meal from our food
                  partner Vidya. It will be brought as quickly as possible to
                  your room. Our team is working hard to make sure you have a
                  happy stay with MangoHomz while you are busy with your doctor.
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
                      <b>Food MangoHomz ID :
                        {{
                          this.food_guest_booked_data[0]
                            .food_booking_orderid
                        }}</b>
                    </p>
                    <p class="col-12 text-right text-bold q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      PNR :0085007877
                    </p>
                    <p class="col-12 text-right q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      <b>Invoice No :
                        {{
                          this.food_guest_booked_data[0].invoice_number
                        }}</b>
                    </p>
                    <p class="col-12 text-right  text-bold q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      Food booked on
                      {{
                        moment(
                          this.food_guest_booked_data[0].updated_time
                        ).format("dddd, DD MMM YYYY")
                      }}
                    </p>
                  </div>
                </div>
                <!-- <p
                      class="col-6 text-right text-bold q-mt-sm q-mb-xs "
                      style="font-size: 14px;font-family: verdana"
                    >
                      <b
                        >Service Tax No(GSTIN) :
                        {{this.food_guest_booked_data[0].gstin_no }}</b
                      >
                    </p> -->
                <div class="row col-12  justify-center bg-secondary" style="font-family: verdana;
                      border-right: 2px solid lightgrey;
                      box-sizing: border-box;
                      border-left: 2px solid lightgrey;
                      border-top: 2px solid lightgrey;
                      border-bottom: 2px solid lightgrey;
                      margin-bottom: 5px;

                    ">
                  <div class="col-12">
                    <div style="width:42px;
                          border-radius: 50%;
                          background-color: #e4fae9;
                          padding: 2px;
                          margin-left:138px;margin-top: -18px;">
                      <q-icon size="40px" name="mdi-food" color="secondary" />
                    </div>
                  </div>
                  <div class="col-12 text-white" style="margin-left: 40px;">
                    <p style="margin-top: 30px;">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b>Your booking at
                        {{
                          this.food_guest_booked_data[0]
                            .foodPartner_sub_name
                        }}
                        is confirmed.</b>
                    </p>
                  </div>
                  <div class="col-12"
                    style="border: 2px;border-radius: 10px;margin-bottom: 10px;padding: 10px; background-color: white;width: 310px;">
                    <p>
                      You have paid amount of INR
                      <b>{{
                        this.food_guest_booked_data[0].final_price_amount
                      }}</b>.
                    </p>
                    <p class="text-green text-bold">
                      Food once booked Cancellation is not applicable on the
                      same.
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
                      margin-top:5px
                    ">
                <div>
                  <q-card-section style="width: 360px;">
                    <div class="row justify-left col-12 q-mb-md">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                        <b>Food Booking Details</b>
                      </p>
                      <table style="width:100%;font-size:14px;background-color: green;color: white;" class="col-12">
                        <tr class="row col-12">
                          <td class="row col-12">
                            Booking ID :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .booking_order_id
                              }}</b>
                          </td>
                          <td class="col-12">
                            Food Booking ID :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .food_booking_orderid
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Property Name :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .hotel_property_name
                              }}</b>
                          </td>
                          <td class="col-12">
                            Date of Booking :
                            <b>
                              {{
                                moment(
                                  this.food_guest_booked_data[0]
                                    .food_booking_date
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            City :
                            <b>
                              {{
                                this.food_guest_booked_data[0].booking_city
                              }}
                            </b>
                          </td>
                          <td class="col-12">
                            Sub Partner Name :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .foodPartner_sub_name
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Mobile Number :
                            <b> {{ this.food_guest_booked_data[0].mobile_number }} </b>
                          </td>
                          <td class="col-12">
                            Time of Booking :
                            <b> {{ this.food_guest_booked_data[0].food_booking_time }} </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Reference Number :
                            <b> {{ this.food_guest_booked_data[0].food_reference_id }} </b>
                          </td>
                          <td class="col-12">
                            Food Items Count :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .total_item_qty
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-12">
                            Email ID :
                            <b>
                              {{ this.food_guest_booked_data[0].email_id }}
                            </b>
                          </td>
                          <td class="col-12">
                            Total Booked Qty :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .total_qty_booked
                              }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="table-responsive" style="overflow-x: auto;">
                      <table class="table" style="width: 100%; border-collapse: collapse; text-align: center;">
                        <thead>
                          <tr>
                            <th style="border: 1px solid silver; padding: 5px;">Sno</th>
                            <th style="border: 1px solid silver; padding: 5px;">Food Item Name</th>
                            <th style="border: 1px solid silver; padding: 5px;">Price (for 1 Qty)</th>
                            <th style="border: 1px solid silver; padding: 5px;">Quantity</th>
                            <th style="border: 1px solid silver; padding: 5px;">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item of this.food_guest_booked_data[0].foodData" :key="item.sno">
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.sno }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{
                              item.food_items_list }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price }}
                            </td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_quantity
                            }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price *
                              item.item_quantity }}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="text-align: right; border: 1px solid silver; padding: 5px;"><b>Total
                                Amount:</b></td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">
                              {{
                                food_guest_booked_data[0].foodData.reduce((total, item) => total + (item.item_price *
                                  item.item_quantity), 0)
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>



                    <div class="row justify-left col-12 q-mb-md">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                        <b>Food Price Details1</b>
                      </p>
                      <div class="row col-12 q-mt-sm" style="border: 1px solid silver; ">
                        <div style="display:flex;width:100%">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                              <b> Price Details</b>
                            </div>
                          </div>
                          <div style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            <b> Amount (₹) </b>
                          </div>
                        </div>
                        <div style="display:flex;width:100%; border-top:1px solid silver">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                              Food Charges (for
                              {{
                                this.food_guest_booked_data[0]
                                  .total_qty_booked
                              }}
                              Quantity)
                            </div>
                          </div>

                          <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                            ₹
                            {{
                              this.food_guest_booked_data[0].food_charges
                            }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px
                            ">
                              Applied MH Offer :
                              {{
                                this.food_guest_booked_data[0]
                                  .mh_offer_coupon
                              }}
                            </div>
                          </div>

                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                             ₹
                            {{
                              -this.food_guest_booked_data[0].mh_offer_price
                            }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px
                            ">
                              Restaurant Offer :
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                             ₹
                            {{
                              -this.food_guest_booked_data[0].partner_offer_price
                            }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                         ">
                              Price After Discount
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            ₹
                            {{
                              this.food_guest_booked_data[0]
                                .price_after_discount
                            }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%">
                          <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                            Taxes & Fees :-
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                              Taxes
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            ₹
                            {{ this.food_guest_booked_data[0].gst_on_base_price }}
                          </div>
                        </div>
                        <!-- <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                          font-size: 12px;
                          padding-left: 75px;
                          padding-top:5px;
                        ">
                              CGST at ({{
                                this.food_guest_booked_data[0]
                                  .cgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            Rs.
                            {{ this.food_guest_booked_data[0].cgst_amount }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                          font-size: 12px;
                          padding-left: 75px;
                          padding-top:5px;
                        ">
                              SGST at ({{
                                this.food_guest_booked_data[0]
                                  .sgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            Rs.
                            {{ this.food_guest_booked_data[0].sgst_amount }}
                          </div>
                        </div> -->
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 15px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                              Total Price
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            <strong>
                              ₹
                              {{
                                this.food_guest_booked_data[0]
                                  .final_price_amount
                              }}
                              /-
                            </strong>
                          </div>
                        </div>
                        <div style="width:100%;text-align:right">
                          <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-right: 10px;
                            padding-top:5px;
                          ">
                            <strong>Grand Total (in Words) :-
                              {{ this.finalprice }}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
                      <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                        <div class="row col-12" style="justify-content: space-between; align-items: center;">
                          <p class="text-bold q-mt-sm q-mb-xs"
                            style="font-size: 15px;font-family: verdana;padding-left:10px;">
                          <b>MangoHomz Support</b>
                          </p>
                          <div class="text-center justify-end"
                              style="text-align:center;padding-top:10px;width:10%; margin-right:40px;">
                              <img src="~assets/logos/MHmini_logo_128x128.png" alt="hii" width="40px" height="40px" />
                          </div>
                        </div>
                        <hr style="border: 0.5px solid silver; width:100%"/>
                        <div class="row col-12" style="display:flex;width:100%; padding-bottom:10px;">
                          <div class="row col-7 q-pa-sm">
                            <div style="color:#1e398e;">
                              <u>Contact US</u>
                            </div>
                            <div style="font-size:12px; padding-top:0px">
                              WhatsApp Number: 8929982655
                            </div>
                            <div style="font-size:12px; padding-top:0px">
                              E-Mail: care@MangoHomz.com
                            </div>
                          </div>
                          <div class="row col-5 q-pa-sm" style="padding-left: 30px;">
                            <div style="color:#1e398e">
                              <u>Business Hours</u>
                            </div>
                            <div style="font-size:12px; padding-top:0px">
                              Monday – Saturday
                            </div>
                            <div style="font-size:12px; padding-top:0px">
                              10AM – 6 PM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
                      <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                        <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="font-size: 15px;font-family: verdana;padding-left:10px">
                          <b>Other Information</b>
                        </p>
                        <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                          <b>Safety and Hygiene</b>
                        </p>
                        <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                          • Quarantine protocols are being followed as per local
                          government authorities Guests from containment zones
                          are not allowed
                        </p>
                        <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                          • Shared resources in common areas are properly
                          sanitized Property staff is trained on hygiene
                          guidelines
                        </p>
                        <p style="font-size: 12px;font-family: verdana;padding-left:20px">
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
                  </div>
                </q-card>
              </q-dialog>
            </div>
          </q-card>
        </div>
      </div>
      <!-- Preview Dialog Box With GST -->
      <q-dialog v-model="previewGSTDialogBox" persistent class="my_card" :maximized="maximizedToggle"
        transition-show="slide-up" transition-hide="slide-down">
        <q-card class="justify-center" style="padding-bottom:20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />

            <q-btn label="PRINT" class="positive text-white text-bold" @click="getDataWithGST" color="primary" />

            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>

          <div class="q-px-xl">
            <q-card-section class="q-px-xl ">
              <div class="row bg-white justify-center q-px-xl" style="font-family: verdana;
                      border-right: 2px solid lightgrey;
                      box-sizing: border-box;
                      border-left: 2px solid lightgrey;
                      border-top: 2px solid lightgrey;
                      border-bottom: 2px solid lightgrey;
                    ">
                <div class="row justify-left col-9 q-mb-md">
                  <div class="row col-6 items-start">
                    <p class="col-6 items-start text-bold q-mt-sm q-mb-xs" style="font-size: 20px;font-family: verdana">
                      <q-img clickable class="bg-white gt-xs" style="height: 60px; width: 280px"
                        src="~assets/logos/logo-main.png" />
                      <q-img clickable class="bg-white lt-sm" style="height: 50px; width: 180px"
                        src="~assets/logos/logo-main.png" />
                    </p>
                  </div>
                  <div class="col-6 text-right">
                    <p class="col-6 text-right text-primary text-bold q-mt-sm q-mb-xs"
                      style="font-size: 14px;font-family: verdana">
                      <b>Food Invoice Details</b>
                    </p>
                    <p class="col-6 text-right text-bold q-mt-sm q-mb-xs" style="font-size: 14px;font-family: verdana">
                      <b>Invoice No :
                        {{ this.bookingFormObj.invoice_number }}</b>
                    </p>
                    <p class="col-6 text-right text-bold q-mt-sm q-mb-xs " style="font-size: 14px;font-family: verdana">
                      <b>Service Tax No(GSTIN) :
                        {{ this.bookingFormObj.gstin_no }}</b>
                    </p>
                  </div>
                </div>
                <div class="row justify-left col-9 q-mb-md">
                  <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                    <b>Food Booking Details</b>
                  </p>
                  <table style="width:100%;font-size:12px;" class="col-9">
                    <tr class="row col-12">
                      <td class="row col-6">
                        Booking ID :
                        <b> {{ this.bookingFormObj.booking_order_id }}</b>
                      </td>
                      <td class="row col-6">
                        Food Booking ID :
                        <b> {{ this.bookingFormObj.food_booking_orderid }} </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        Property Name :
                        <b> {{ this.bookingFormObj.hotel_property_name }}</b>
                      </td>
                      <td class="col-6">
                        Date of Booking :
                        <b>
                          {{
                            moment(
                              this.bookingFormObj.food_booking_date
                            ).format("dddd, DD MMM YYYY")
                          }}
                        </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        City :
                        <b>
                          {{ this.bookingFormObj.booking_city }}
                        </b>
                      </td>
                      <td class="col-6">
                        Sub Partner Name :
                        <b> {{ this.bookingFormObj.foodPartner_sub_name }} </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        Mobile Number :
                        <b> {{ this.bookingFormObj.mobile_number }} </b>
                      </td>
                      <td class="col-6">
                        Time of Booking :
                        <b> {{ this.bookingFormObj.food_booking_time }} </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        Reference Number :
                        <b> {{ this.bookingFormObj.food_reference_id }} </b>
                      </td>
                      <td class="col-6">
                        Food Items Count :
                        <b> {{ this.bookingFormObj.total_item_qty }} </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        Email ID :
                        <b> {{ this.bookingFormObj.email_id }} </b>
                      </td>
                      <td class="col-6">
                        Total Booked Qty :
                        <b> {{ this.bookingFormObj.total_qty_booked }} </b>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="table-responsive" style="overflow-x: auto;">
                      <table class="table" style="width: 100%; border-collapse: collapse; text-align: center;">
                        <thead>
                          <tr>
                            <th style="border: 1px solid silver; padding: 5px;">Sno</th>
                            <th style="border: 1px solid silver; padding: 5px;">Food Item Name</th>
                            <th style="border: 1px solid silver; padding: 5px;">Price (for 1 Qty)</th>
                            <th style="border: 1px solid silver; padding: 5px;">Quantity</th>
                            <th style="border: 1px solid silver; padding: 5px;">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item of this.food_guest_booked_data[0].foodData" :key="item.sno">
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.sno }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{
                              item.food_items_list }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price }}
                            </td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_quantity
                            }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price *
                              item.item_quantity }}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="text-align: right; border: 1px solid silver; padding: 5px;"><b>Total
                                Amount:</b></td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">
                              {{
                                food_guest_booked_data[0].foodData.reduce((total, item) => total + (item.item_price *
                                  item.item_quantity), 0)
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                <div class="row justify-left col-9 q-mb-md">
                  <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                    <b>Food Price Details2</b>
                  </p>

                  <div class="row col-12 q-mt-sm" style="border: 1px solid silver; ">
                    <tr class="row col-12">
                      <th class="row col-8" style="padding-left:10px;">
                        <b> Price Details</b>
                      </th>
                      <th class="row col-4" style="padding-left:10px;">
                        <b> Amount (₹) </b>
                      </th>
                    </tr>
                    <div class="col-8">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                        Food Charges (for
                        {{ this.bookingFormObj.total_qty_booked }} Quantity)
                      </div>
                    </div>

                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                        ₹ {{ this.bookingFormObj.food_charges }}
                    </div>

                    <div class="col-8">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px
                          " v-if="
                            this.bookingFormObj.mh_offer_coupon != 'APPLY COUPEN'
                          ">
                        Applied MH Offer :
                        {{ this.bookingFormObj.mh_offer_coupon }}
                      </div>
                    </div>

                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.bookingFormObj.mh_offer_coupon != 'APPLY COUPEN'
                          ">
                        ₹ {{ this.bookingFormObj.mh_offer_price }}
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.bookingFormObj.mh_offer_coupon != 'APPLY COUPEN'
                          ">
                        Price After Discount
                      </div>
                    </div>
                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.bookingFormObj.mh_offer_coupon != 'APPLY COUPEN'
                          ">
                        ₹ {{ this.bookingFormObj.price_after_discount }}
                    </div>
                    <div class="col-12">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                       Taxes & Fees :-
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                      Taxes
                      </div>
                    </div>
                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                     ₹ {{this.food_guest_booked_data[0].gst_on_base_price }}
                    </div>
                   <!-- <div class="col-8">
                      <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                        SGST at ({{ this.bookingFormObj.sgst_percentage }} %)
                      </div>
                    </div>
                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                      Rs. {{ this.bookingFormObj.sgst_amount }}
                    </div>  -->
                    <div class="col-8">
                      <div class="text-subtitle" style="
                            font-size: 15px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                        Total Price
                      </div>
                    </div>
                    <div class="text-subtitle" style="
                            font-size: 15px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                      <strong>
                        ₹ {{ this.bookingFormObj.final_price_amount }} /-
                      </strong>
                    </div>
                    <div class="col-12 text-right">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-right: 10px;
                            padding-top:5px;
                          ">
                        <strong>Grand Total (in Words) :-
                          {{
                            this.foodPriceDetails.final_price_amount_in_words
                          }}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
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
              </div>
            </q-card-section>
          </div>
        </q-card>
      </q-dialog>

      <q-dialog v-model="getPrintDetails" persistent class="lt-sm" :maximized="maximizedToggle"
        transition-show="slide-up" transition-hide="slide-down">
        <q-card class="justify-center row text-bold q-mt-sm q-mb-xs" style="padding-bottom:20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />
            <q-btn print="'#createPdf'" label="Print" v-print="getPrintDetails" rounded class=" text-bold text-white"
              @click="printpart('createPdf')" />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>

          <div id="createPdf" class="body q-px-xl">
            <div class="row col-12 justify-center" style="font-family: verdana;
                      border-right: 2px solid lightgrey;
                      box-sizing: border-box;
                      border-left: 2px solid lightgrey;
                      border-top: 2px solid lightgrey;
                      border-bottom: 2px solid lightgrey;
                      margin-top:5px;background-color: white
                    ">
                   <div style="display: flex; width: 100%">
                <div style="width: 40%">
                      <p class="col-5 items-start text-bold " style="font-size: 20px;font-family: verdana">
                        <img src="~assets/logos/logo-main.png" alt="hii" width="200px" height="50px" />
                      </p>
                      <div class="col-12 text-right" style="text-align:right;margin-right:5px">
                        <p class="col-12 text-right text-bold q-mt-sm q-mb-xs"
                          style="font-size: 15px;font-family: verdana;text-align:right">
                          <b>Food MangoHomz ID :
                            {{
                              this.food_guest_booked_data[0]
                                .food_booking_orderid
                            }}</b>
                        </p>
                        <p class="col-12 text-right text-bold q-mt-xs q-mb-xs"
                          style="font-size: 15px;font-family: verdana;text-align:right">
                          PNR :0085007877
                        </p>
                        <p class="col-12 text-right q-mt-xs q-mb-xs"
                          style="font-size: 15px;font-family: verdana;text-align:right">
                          <b>Invoice No :
                            {{
                              this.food_guest_booked_data[0].invoice_number
                            }}</b>
                        </p>
                        <p class="col-12 text-right q-mt-xs q-mb-xs"
                          style="font-size: 15px;font-family: verdana;text-align:right">
                          Food booked on
                          {{
                            moment(
                              this.food_guest_booked_data[0].updated_time
                            ).format("dddd, DD MMM YYYY")
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- <p
                      class="col-6 text-right text-bold q-mt-sm q-mb-xs "
                      style="font-size: 14px;font-family: verdana"
                    >
                      <b
                        >Service Tax No(GSTIN) :
                        {{this.food_guest_booked_data[0].gstin_no }}</b
                      >
                    </p> -->
                  <div class="row col-12  justify-center" style="font-family: verdana;
                      border-right: 2px solid lightgrey;
                      box-sizing: border-box;
                      border-left: 2px solid lightgrey;
                      border-top: 2px solid lightgrey;
                      border-bottom: 2px solid lightgrey;
                      margin-bottom: 5px;
                      background-color:green;

                    ">
                    <div class="col-12 row" style="display:flex">
                      <div class="col-12"
                        style="width:60px; border-radius: 50%; background-color: #e4fae9;padding: 15px;margin:15px 10px 20px 40px;color:green">
                        <q-icon size="40px" name="mdi-food" color="green" style="color:green" />
                      </div>
                      <div class="col-12 " style="color:white">
                        <p style="margin-top: 30px;">
                          Thank you for booking with us.
                        </p>
                        <p>
                          <b>Your booking at
                            {{
                              this.food_guest_booked_data[0]
                                .foodPartner_sub_name
                            }}
                            is confirmed.</b>
                        </p>
                      </div>
                    </div>
                    <div class="col-12"
                      style="border: 2px;border-radius: 10px;margin-bottom: 10px;padding: 10px; background-color: white;">
                      <p>
                        You have paid amount of INR
                        <b>{{
                          this.food_guest_booked_data[0].final_price_amount
                        }}</b>.
                      </p>
                      <p class="text-green text-bold" style="color:green">
                        Food once booked Cancellation is not applicable on the
                        same.
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
                      margin-top:5px
                    ">
                  <div>
                    <q-card-section>
                      <div class="row justify-left col-9 q-mb-md">
                        <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                          <b>Food Booking Details</b>
                        </p>
                        <table style="width:100%;font-size:14px;background-color: green;color: white;" class="col-9">
                          <tr class="row col-12">
                            <td class="row col-6">
                              Booking ID :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .booking_order_id
                                }}</b>
                            </td>
                            <td class="col-6">
                              Food Booking ID :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .food_booking_orderid
                                }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              Property Name :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .hotel_property_name
                                }}</b>
                            </td>
                            <td class="col-6">
                              Date of Booking :
                              <b>
                                {{
                                  moment(
                                    this.food_guest_booked_data[0]
                                      .food_booking_date
                                  ).format("dddd, DD MMM YYYY")
                                }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              City :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .booking_city
                                }}
                              </b>
                            </td>
                            <td class="col-6">
                              Sub Partner Name :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .foodPartner_sub_name
                                }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              Mobile Number :
                              <b> {{ this.bookingFormObj.mobile_number }} </b>
                            </td>
                            <td class="col-6">
                              Time of Booking :
                              <b>
                                {{ this.bookingFormObj.food_booking_time }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              Reference Number :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .food_reference_id
                                }}
                              </b>
                            </td>
                            <td class="col-6">
                              Food Items Count :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .total_item_qty
                                }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              Email ID :
                              <b>
                                {{
                                  this.food_guest_booked_data[0].email_id
                                }}
                              </b>
                            </td>
                            <td class="col-6">
                              Total Booked Qty :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .total_qty_booked
                                }}
                              </b>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div class="table-responsive" style="overflow-x: auto;">
                      <table class="table" style="width: 100%; border-collapse: collapse; text-align: center;">
                        <thead>
                          <tr>
                            <th style="border: 1px solid silver; padding: 5px;">Sno</th>
                            <th style="border: 1px solid silver; padding: 5px;">Food Item Name</th>
                            <th style="border: 1px solid silver; padding: 5px;">Price (for 1 Qty)</th>
                            <th style="border: 1px solid silver; padding: 5px;">Quantity</th>
                            <th style="border: 1px solid silver; padding: 5px;">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item of this.food_guest_booked_data[0].foodData" :key="item.sno">
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.sno }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{
                              item.food_items_list }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price }}
                            </td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_quantity
                            }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price *
                              item.item_quantity }}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="text-align: right; border: 1px solid silver; padding: 5px;"><b>Total
                                Amount:</b></td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">
                              {{
                                food_guest_booked_data[0].foodData.reduce((total, item) => total + (item.item_price *
                                  item.item_quantity), 0)
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                      <div class="row justify-left col-9 q-mb-md">
                        <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                          <b>Food Price Details3</b>
                        </p>
                        <div class="row col-12 q-mt-sm" style="border: 1px solid silver; ">
                          <div style="display:flex;width:100%">
                            <div style="width:60%">
                              <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                                <b> Price Details</b>
                              </div>
                            </div>
                            <div style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                              <b> Amount (₹) </b>
                            </div>
                          </div>
                          <div style="display:flex;width:100%; border-top:1px solid silver">
                            <div style="width:60%">
                              <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                                Food Charges (for
                                {{
                                  this.food_guest_booked_data[0]
                                    .total_qty_booked
                                }}
                                Quantity)
                              </div>
                            </div>

                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                              ₹
                              {{
                                this.food_guest_booked_data[0].food_charges
                              }}
                            </div>
                          </div>
                          <div style="display:flex;width:100%;">
                            <div style="width:60%" v-if="
                              this.food_guest_booked_data[0]
                                .mh_offer_coupon != 'APPLY COUPEN'
                            ">
                              <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px
                          ">
                                Applied MH Offer :
                                {{
                                  this.food_guest_booked_data[0]
                                    .mh_offer_coupon
                                }}
                              </div>
                            </div>

                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%" v-if="
                                this.food_guest_booked_data[0]
                                  .mh_offer_coupon != 'APPLY COUPEN'
                              ">
                               ₹
                              {{
                                this.food_guest_booked_data[0]
                                  .mh_offer_price
                              }}
                            </div>
                          </div>
                          <div style="display:flex;width:100%;">
                            <div style="width:60%">
                              <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.food_guest_booked_data[0]
                              .mh_offer_coupon != 'APPLY COUPEN'
                          ">
                                Price After Discount
                              </div>
                            </div>
                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%" v-if="
                                this.food_guest_booked_data[0]
                                  .mh_offer_coupon != 'APPLY COUPEN'
                              ">
                               ₹
                              {{
                                this.food_guest_booked_data[0]
                                  .price_after_discount
                              }}
                            </div>
                          </div>
                          <div style="display:flex;width:100%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                               Taxes & Fees :-
                            </div>
                          </div>
                          <div style="display:flex;width:100%;">
                            <div style="width:60%">
                              <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                           Taxes
                              </div>
                            </div>
                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                               ₹
                              {{
                               this.food_guest_booked_data[0].gst_on_base_price
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
                                SGST at ({{
                                  this.food_guest_booked_data[0]
                                    .sgst_percentage
                                }}
                                %)
                              </div>
                            </div>
                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                              Rs.
                              {{
                                this.food_guest_booked_data[0].sgst_amount
                              }}
                            </div>
                          </div> -->
                          <div style="display:flex;width:100%;">
                            <div style="width:60%">
                              <div class="text-subtitle" style="
                            font-size: 15px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                                Total Price
                              </div>
                            </div>
                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                              <strong>
                                 ₹
                                {{
                                  this.food_guest_booked_data[0]
                                    .final_price_amount
                                }}
                                /-
                              </strong>
                            </div>
                          </div>
                          <div style="width:100%;text-align:right">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-right: 10px;
                            padding-top:5px;
                          ">
                              <strong>Grand Total (in Words) :-
                                {{ this.finalprice }}
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
                        <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                          <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                            style="font-size: 15px;font-family: verdana;padding-left:10px">
                            <b>MangoHomz Support</b>
                          </p>
                          <div style="display:flex;width:100%;text-align:center;padding-bottom:10px;">
                            <div class="text-center"
                              style="text-align:center;padding-top:10px;width:10%;padding-left:10px;">
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
                      <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
                        <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                          <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                            style="font-size: 15px;font-family: verdana;padding-left:10px">
                            <b>Other Information</b>
                          </p>
                          <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                            <b>Safety and Hygiene</b>
                          </p>
                          <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                            • Quarantine protocols are being followed as per
                            local government authorities Guests from containment
                            zones are not allowed
                          </p>
                          <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                            • Shared resources in common areas are properly
                            sanitized Property staff is trained on hygiene
                            guidelines
                          </p>
                          <p style="font-size: 12px;font-family: verdana;padding-left:20px">
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
                      <q-card style="display: flex; background-color: #e4fae9"
                        class="q-mb-sm q-ma-md col-8 justify-center">
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
                      <q-card style="display: flex; background-color: #e4fae9"
                        class="q-mb-sm q-ma-md col-8 justify-center">
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
                    </div>
                  </q-card>
            </q-dialog>
          </div>

        </q-card>
      </q-dialog>
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
                <div class="text-caption">Smooth travel facilities 24 / 7</div>
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
    <q-page style="padding-top: 0px" class="q-pa-sm gt-xs">
      <div class="justify-center grad">
        <div class="q-pa-sm row justify-center q-gutter-md">
          <q-card flat :class="this.class_val" class="cursor-pointer">
            <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
              <q-space />
              <q-btn size="sm" outline rounded color="primary" class="text-weight-bold q-ml-sm" @click="confirm = true">
                Home
              </q-btn>
              <q-btn size="sm" outlined rounded color="primary" class="text-weight-bold q-ml-sm"
                @click="getPrintDetails = true">Print
              </q-btn>
            </q-toolbar>
            <div class="row">
              <div class="q-pl-md">
                <div class="text-bold text-h5">
                  Food Booking Confirmed -
                  {{ this.food_guest_booked_data[0].guest_name }}
                </div>
                <div class="text-bold text-h5">
                  Food Booking No -
                  {{ this.food_guest_booked_data[0].food_booking_orderid }}
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
                <div class="text-bold" style="font-size:18px;">
                  Dear Customer,
                </div>
                <p style="text-align: justify">
                  We value your trust in MangoHomz and choice of us as your
                  go-to provider of medical travel. We are happy to inform you
                  that a reservation has been made for your meal from our food
                  partner Vidya. It will be brought as quickly as possible to
                  your room. Our team is working hard to make sure you have a
                  happy stay with MangoHomz while you are busy with your doctor.
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
                      <b>Food MangoHomz ID :
                        {{
                          this.food_guest_booked_data[0]
                            .food_booking_orderid
                        }}</b>
                    </p>
                    <p class="col-6 text-right text-bold q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      PNR :0085007877
                    </p>
                    <p class="col-6 text-right text-bold q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      <b>Invoice No :
                        {{
                          this.food_guest_booked_data[0].invoice_number
                        }}</b>
                    </p>
                    <p class="col-6 text-right text-bold q-mt-xs q-mb-xs" style="font-size: 15px;font-family: verdana">
                      Food booked on
                      {{
                        moment(
                          this.food_guest_booked_data[0].updated_time
                        ).format("dddd, DD MMM YYYY")
                      }}
                    </p>
                  </div>
                </div>
                <!-- <p
                      class="col-6 text-right text-bold q-mt-sm q-mb-xs "
                      style="font-size: 14px;font-family: verdana"
                    >
                      <b
                        >Service Tax No(GSTIN) :
                        {{this.food_guest_booked_data[0].gstin_no }}</b
                      >
                    </p> -->
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
                      <q-icon size="40px" name="mdi-food" color="secondary" />
                    </div>
                  </div>
                  <div class="col-10 text-white">
                    <p style="margin-top: 30px;">
                      Thank you for booking with us.
                    </p>
                    <p>
                      <b>Your booking at
                        {{
                          this.food_guest_booked_data[0]
                            .foodPartner_sub_name
                        }}
                        is confirmed.</b>
                    </p>
                  </div>
                  <div class="col-11"
                    style="border: 2px;border-radius: 10px;margin-bottom: 10px;padding: 10px; background-color: white;">
                    <p>
                      You have paid amount of INR
                      <b>{{
                        this.food_guest_booked_data[0].final_price_amount
                      }}</b>.
                    </p>
                    <p class="text-green text-bold">
                      Food once booked Cancellation is not applicable on the
                      same.
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
                      margin-top:5px
                    ">
                <div>
                  <q-card-section>
                    <div class="row justify-left col-9 q-mb-md">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                        <b>Food Booking Details</b>
                      </p>
                      <table style="width:100%;font-size:14px;background-color: green;color: white;" class="col-9">
                        <tr class="row col-12">
                          <td class="row col-6">
                            Booking ID :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .booking_order_id
                              }}</b>
                          </td>
                          <td class="col-6">
                            Food Booking ID :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .food_booking_orderid
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Property Name :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .hotel_property_name
                              }}</b>
                          </td>
                          <td class="col-6">
                            Date of Booking :
                            <b>
                              {{
                                moment(
                                  this.food_guest_booked_data[0]
                                    .food_booking_date
                                ).format("dddd, DD MMM YYYY")
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            City :
                            <b>
                              {{
                                this.food_guest_booked_data[0].booking_city
                              }}
                            </b>
                          </td>
                          <td class="col-6">
                            Sub Partner Name :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .foodPartner_sub_name
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Mobile Number :
                            <b> {{ this.food_guest_booked_data[0].mobile_number }} </b>
                          </td>
                          <td class="col-6">
                            Time of Booking :
                            <b> {{ this.food_guest_booked_data[0].food_booking_time }} </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Reference Number :
                            <b> {{ this.food_guest_booked_data[0].food_reference_id }} </b>
                          </td>
                          <td class="col-6">
                            Food Items Count :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .total_item_qty
                              }}
                            </b>
                          </td>
                        </tr>
                        <tr class="row col-12">
                          <td class="col-6">
                            Email ID :
                            <b>
                              {{ this.food_guest_booked_data[0].email_id }}
                            </b>
                          </td>
                          <td class="col-6">
                            Total Booked Qty :
                            <b>
                              {{
                                this.food_guest_booked_data[0]
                                  .total_qty_booked
                              }}
                            </b>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="table-responsive" style="overflow-x: auto;">
                      <table class="table" style="width: 100%; border-collapse: collapse; text-align: center;">
                        <thead>
                          <tr>
                            <th style="border: 1px solid silver; padding: 5px;">Sno</th>
                            <th style="border: 1px solid silver; padding: 5px;">Food Item Name</th>
                            <th style="border: 1px solid silver; padding: 5px;">Price (for 1 Qty)</th>
                            <th style="border: 1px solid silver; padding: 5px;">Quantity</th>
                            <th style="border: 1px solid silver; padding: 5px;">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item of this.food_guest_booked_data[0].foodData" :key="item.sno">
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.sno }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{
                              item.food_items_list }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price }}
                            </td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_quantity
                            }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price *
                              item.item_quantity }}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="text-align: right; border: 1px solid silver; padding: 5px;"><b>Total
                                Amount:</b></td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">
                              {{
                                food_guest_booked_data[0].foodData.reduce((total, item) => total + (item.item_price *
                                  item.item_quantity), 0)
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="row justify-left col-9 q-mb-md">
                      <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                        <b>Food Price Details</b>
                      </p>
                      <div class="row col-12 q-mt-sm" style="border: 1px solid silver; ">
                        <div style="display:flex;width:100%">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                              <b> Price Details</b>
                            </div>
                          </div>
                          <div style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            <b> Amount (₹) </b>
                          </div>
                        </div>
                        <div style="display:flex;width:100%; border-top:1px solid silver">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                              Food Charges (for
                              {{
                                this.food_guest_booked_data[0]
                                  .total_qty_booked
                              }}
                              Quantity)
                            </div>
                          </div>

                          <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                           ₹
                            {{
                              this.food_guest_booked_data[0].food_charges
                            }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%" v-if="
                            this.food_guest_booked_data[0]
                              .mh_offer_coupon != 'APPLY COUPEN'
                          ">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px
                          ">
                              Applied MH Offer :
                              {{
                                this.food_guest_booked_data[0]
                                  .mh_offer_coupon
                              }}
                            </div>
                          </div>

                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                            v-if="
                              this.food_guest_booked_data[0]
                                .mh_offer_coupon != 'APPLY COUPEN'
                            ">
                           ₹
                            {{
                              -this.food_guest_booked_data[0].mh_offer_price
                            }}
                          </div>
                        </div>

                        <div style="display:flex;width:100%;">
                          <div style="width:60%" >
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px
                          ">
                              Restaurant Offer
                            </div>
                          </div>

                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                           >
                           ₹
                            {{
                              -this.food_guest_booked_data[0].partner_offer_price
                            }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.food_guest_booked_data[0]
                              .mh_offer_coupon != 'APPLY COUPEN'
                          ">
                              Price After Discount
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%"
                            v-if="
                              this.food_guest_booked_data[0]
                                .mh_offer_coupon != 'APPLY COUPEN'
                            ">
                           ₹
                            {{
                              this.food_guest_booked_data[0]
                                .price_after_discount
                            }}
                          </div>
                        </div>
                        <div style="display:flex;width:100%">
                          <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                            Taxes & Fees :-
                          </div>
                        </div>
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                               Taxes
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            ₹
                            {{  this.food_guest_booked_data[0].gst_on_base_price }}
                          </div>
                        </div>
                        <!-- <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                              SGST at ({{
                                this.food_guest_booked_data[0]
                                  .sgst_percentage
                              }}
                              %)
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            Rs.
                            {{ this.food_guest_booked_data[0].sgst_amount }}
                          </div>
                        </div> -->
                        <div style="display:flex;width:100%;">
                          <div style="width:60%">
                            <div class="text-subtitle" style="
                            font-size: 15px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                              Total Price
                            </div>
                          </div>
                          <div class="text-subtitle" style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                            <strong>
                               ₹
                              {{
                                this.food_guest_booked_data[0]
                                  .final_price_amount
                              }}
                              /-
                            </strong>
                          </div>
                        </div>
                        <div style="width:100%;text-align:right">
                          <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-right: 10px;
                            padding-top:5px;
                          ">
                            <strong>Grand Total (in Words) :-
                              {{ this.finalprice }}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
                      <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                        <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="font-size: 15px;font-family: verdana;padding-left:10px">
                          <b>MangoHomz Support</b>
                        </p>
                        <div style="display:flex;width:100%;text-align:center;padding-bottom:10px;">
                          <div class="text-center"
                            style="text-align:center;padding-top:10px;width:10%;padding-left:10px;">
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
                    <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
                      <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                        <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                          style="font-size: 15px;font-family: verdana;padding-left:10px">
                          <b>Other Information</b>
                        </p>
                        <p class="row col-12"  style="font-size: 12px;font-family: verdana;padding-left:20px">
                          <b>Safety and Hygiene</b>
                        </p>
                        <p style="font-size: 12px;font-family: verdana;padding-left:20px; padding-top:0px;">
                          • Quarantine protocols are being followed as per local
                          government authorities Guests from containment zones
                          are not allowed
                        </p>
                        <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                          • Shared resources in common areas are properly
                          sanitized Property staff is trained on hygiene
                          guidelines
                        </p>
                        <p style="font-size: 12px;font-family: verdana;padding-left:20px">
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
                  </div>
                </q-card>
              </q-dialog>
            </div>
          </q-card>
        </div>
      </div>
      <!-- Preview Dialog Box With GST -->
      <q-dialog v-model="previewGSTDialogBox" persistent class="my_card" :maximized="maximizedToggle"
        transition-show="slide-up" transition-hide="slide-down">
        <q-card class="justify-center" style="padding-bottom:20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />

            <q-btn label="PRINT" class="positive text-white text-bold" @click="getDataWithGST" color="primary" />

            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>

          <div class="q-px-xl">
            <q-card-section class="q-px-xl ">
              <div class="row bg-white justify-center q-px-xl" style="font-family: verdana;
                      border-right: 2px solid lightgrey;
                      box-sizing: border-box;
                      border-left: 2px solid lightgrey;
                      border-top: 2px solid lightgrey;
                      border-bottom: 2px solid lightgrey;
                    ">
                <div class="row justify-left col-9 q-mb-md">
                  <div class="row col-6 items-start">
                    <p class="col-6 items-start text-bold q-mt-sm q-mb-xs" style="font-size: 20px;font-family: verdana">
                      <q-img clickable class="bg-white gt-xs" style="height: 60px; width: 280px"
                        src="~assets/logos/logo-main.png" />
                      <q-img clickable class="bg-white lt-sm" style="height: 50px; width: 180px"
                        src="~assets/logos/logo-main.png" />
                    </p>
                  </div>
                  <div class="col-6 text-right">
                    <p class="col-6 text-right text-primary text-bold q-mt-sm q-mb-xs"
                      style="font-size: 14px;font-family: verdana">
                      <b>Food Invoice Details</b>
                    </p>
                    <p class="col-6 text-right text-bold q-mt-sm q-mb-xs" style="font-size: 14px;font-family: verdana">
                      <b>Invoice No :
                        {{ this.bookingFormObj.invoice_number }}</b>
                    </p>
                    <p class="col-6 text-right text-bold q-mt-sm q-mb-xs " style="font-size: 14px;font-family: verdana">
                      <b>Service Tax No(GSTIN) :
                        {{ this.bookingFormObj.gstin_no }}</b>
                    </p>
                  </div>
                </div>
                <div class="row justify-left col-9 q-mb-md">
                  <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                    <b>Food Booking Details</b>
                  </p>
                  <table style="width:100%;font-size:12px;" class="col-9">
                    <tr class="row col-12">
                      <td class="row col-6">
                        Booking ID :
                        <b> {{ this.bookingFormObj.booking_order_id }}</b>
                      </td>
                      <td class="row col-6">
                        Food Booking ID :
                        <b> {{ this.bookingFormObj.food_booking_orderid }} </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        Property Name :
                        <b> {{ this.bookingFormObj.hotel_property_name }}</b>
                      </td>
                      <td class="col-6">
                        Date of Booking :
                        <b>
                          {{
                            moment(
                              this.bookingFormObj.food_booking_date
                            ).format("dddd, DD MMM YYYY")
                          }}
                        </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        City :
                        <b>
                          {{ this.bookingFormObj.booking_city }}
                        </b>
                      </td>
                      <td class="col-6">
                        Sub Partner Name :
                        <b> {{ this.bookingFormObj.foodPartner_sub_name }} </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        Mobile Number :
                        <b> {{ this.bookingFormObj.mobile_number }} </b>
                      </td>
                      <td class="col-6">
                        Time of Booking :
                        <b> {{ this.bookingFormObj.food_booking_time }} </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        Reference Number :
                        <b> {{ this.bookingFormObj.food_reference_id }} </b>
                      </td>
                      <td class="col-6">
                        Food Items Count :
                        <b> {{ this.bookingFormObj.total_item_qty }} </b>
                      </td>
                    </tr>
                    <tr class="row col-12">
                      <td class="col-6">
                        Email ID :
                        <b> {{ this.bookingFormObj.email_id }} </b>
                      </td>
                      <td class="col-6">
                        Total Booked Qty :
                        <b> {{ this.bookingFormObj.total_qty_booked }} </b>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="table-responsive" style="overflow-x: auto;">
                      <table class="table" style="width: 100%; border-collapse: collapse; text-align: center;">
                        <thead>
                          <tr>
                            <th style="border: 1px solid silver; padding: 5px;">Sno</th>
                            <th style="border: 1px solid silver; padding: 5px;">Food Item Name</th>
                            <th style="border: 1px solid silver; padding: 5px;">Price (for 1 Qty)</th>
                            <th style="border: 1px solid silver; padding: 5px;">Quantity</th>
                            <th style="border: 1px solid silver; padding: 5px;">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item of this.food_guest_booked_data[0].foodData" :key="item.sno">
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.sno }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{
                              item.food_items_list }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price }}
                            </td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_quantity
                            }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price *
                              item.item_quantity }}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="text-align: right; border: 1px solid silver; padding: 5px;"><b>Total
                                Amount:</b></td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">
                              {{
                                food_guest_booked_data[0].foodData.reduce((total, item) => total + (item.item_price *
                                  item.item_quantity), 0)
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                <div class="row justify-left col-9 q-mb-md">
                  <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                    <b>Food Price Details</b>
                  </p>

                  <div class="row col-12 q-mt-sm" style="border: 1px solid silver; ">
                    <tr class="row col-12">
                      <th class="row col-8" style="padding-left:10px;">
                        <b> Price Details</b>
                      </th>
                      <th class="row col-4" style="padding-left:10px;">
                        <b> Amount (₹) </b>
                      </th>
                    </tr>
                    <div class="col-8">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                        Food Charges (for
                        {{ this.bookingFormObj.total_qty_booked }} Quantity)
                      </div>
                    </div>

                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                      ₹ {{ this.bookingFormObj.food_charges }}
                    </div>

                    <div class="col-8">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px
                          " v-if="
                            this.bookingFormObj.mh_offer_coupon != 'APPLY COUPEN'
                          ">
                        Applied MH Offer :
                        {{ this.bookingFormObj.mh_offer_coupon }}
                      </div>
                    </div>

                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.bookingFormObj.mh_offer_coupon != 'APPLY COUPEN'
                          ">
                       ₹ {{ this.bookingFormObj.mh_offer_price }}
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.bookingFormObj.mh_offer_coupon != 'APPLY COUPEN'
                          ">
                        Price After Discount
                      </div>
                    </div>
                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.bookingFormObj.mh_offer_coupon != 'APPLY COUPEN'
                          ">
                      ₹ {{ this.bookingFormObj.price_after_discount }}
                    </div>
                    <div class="col-12">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                        Taxes & Fees :-
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                        Taxes
                      </div>
                    </div>
                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                       ₹
                            {{ this.food_guest_booked_data[0].gst_on_base_price }}
                    </div>
                    <!-- <div class="col-8">
                      <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                        SGST at ({{ this.bookingFormObj.sgst_percentage }} %)
                      </div>
                    </div>
                    <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                      Rs. {{ this.bookingFormObj.sgst_amount }}
                    </div> -->
                    <div class="col-8">
                      <div class="text-subtitle" style="
                            font-size: 15px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                        Total Price
                      </div>
                    </div>
                    <div class="text-subtitle" style="
                            font-size: 15px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                      <strong>
                        ₹ {{ this.bookingFormObj.final_price_amount }} /-
                      </strong>
                    </div>
                    <div class="col-12 text-right">
                      <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-right: 10px;
                            padding-top:5px;
                          ">
                        <strong>Grand Total (in Words) :-
                          {{
                            this.foodPriceDetails.final_price_amount_in_words
                          }}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
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
              </div>
            </q-card-section>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="getPrintDetails" persistent class="gt-xs" :maximized="maximizedToggle"
        transition-show="slide-up" transition-hide="slide-down">
        <q-card class="justify-center" style="padding-bottom:20px">
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title1 }}</div>
            <q-space />
            <q-btn print="'#createPdf'" label="Print" v-print="printObjWithoutGST" rounded class="positive text-bold  text-white"
              @click="printpart('createPdf')" />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>

          <div id="createPdf" class="body q-px-xl">
            <q-card-section class="q-px-xl ">
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
                    <div class="row col-5 items-start">
                      <p class="col-5 items-start text-bold q-mt-sm q-mb-xs" style="font-size: 20px;font-family: verdana">
                        <img src="~assets/logos/logo-main.png" alt="hii" width="200px" height="50px" />
                      </p>
                      <div class="col-7 text-right" style="text-align:right;margin-right:5px">
                        <p class="col-7 text-right text-bold q-mt-sm q-mb-xs"
                          style="font-size: 15px;font-family: verdana;text-align:right">
                          <b>Food MangoHomz ID :
                            {{
                              this.food_guest_booked_data[0]
                                .food_booking_orderid
                            }}</b>
                        </p>
                        <p class="col-7 text-right text-bold q-mt-xs q-mb-xs"
                          style="font-size: 15px;font-family: verdana;text-align:right">
                          PNR :0085007877
                        </p>
                        <p class="col-7 text-right q-mt-xs q-mb-xs"
                          style="font-size: 15px;font-family: verdana;text-align:right">
                          <b>Invoice No :
                            {{
                              this.food_guest_booked_data[0].invoice_number
                            }}</b>
                        </p>
                        <p class="col-7 text-right q-mt-xs q-mb-xs"
                          style="font-size: 15px;font-family: verdana;text-align:right">
                          Food booked on
                          {{
                            moment(
                              this.food_guest_booked_data[0].updated_time
                            ).format("dddd, DD MMM YYYY")
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- <p
                      class="col-6 text-right text-bold q-mt-sm q-mb-xs "
                      style="font-size: 14px;font-family: verdana"
                    >
                      <b
                        >Service Tax No(GSTIN) :
                        {{this.food_guest_booked_data[0].gstin_no }}</b
                      >
                    </p> -->
                  <div class="row col-12  justify-center" style="font-family: verdana;
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
                        <q-icon size="40px" name="mdi-food" color="green" style="color:green" />
                      </div>
                      <div class="col-10 " style="color:white">
                        <p style="margin-top: 30px;">
                          Thank you for booking with us.
                        </p>
                        <p>
                          <b>Your booking at
                            {{
                              this.food_guest_booked_data[0]
                                .foodPartner_sub_name
                            }}
                            is confirmed.</b>
                        </p>
                      </div>
                    </div>
                    <div class="col-11"
                      style="border: 2px;border-radius: 10px;margin-bottom: 10px;padding: 10px; background-color: white;">
                      <p>
                        You have paid amount of INR
                        <b>{{
                          this.food_guest_booked_data[0].final_price_amount
                        }}</b>.
                      </p>
                      <p class="text-green text-bold" style="color:green">
                        Food once booked Cancellation is not applicable on the
                        same.
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
                      margin-top:5px
                    ">
                  <div>
                    <q-card-section>
                      <div class="row justify-left col-9 q-mb-md">
                        <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                          <b>Food Booking Details</b>
                        </p>
                        <table style="width:100%;font-size:14px;background-color: green;color: white;" class="col-9">
                          <tr class="row col-12">
                            <td class="row col-6">
                              Booking ID :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .booking_order_id
                                }}</b>
                            </td>
                            <td class="col-6">
                              Food Booking ID :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .food_booking_orderid
                                }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              Property Name :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .hotel_property_name
                                }}</b>
                            </td>
                            <td class="col-6">
                              Date of Booking :
                              <b>
                                {{
                                  moment(
                                    this.food_guest_booked_data[0]
                                      .food_booking_date
                                  ).format("dddd, DD MMM YYYY")
                                }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              City :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .booking_city
                                }}
                              </b>
                            </td>
                            <td class="col-6">
                              Sub Partner Name :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .foodPartner_sub_name
                                }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              Mobile Number :
                              <b>{{ this.food_guest_booked_data[0].mobile_number }} </b>
                            </td>
                            <td class="col-6">
                              Time of Booking :
                              <b>
                                {{ this.food_guest_booked_data[0].food_booking_time }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              Reference Number :
                              <b>
                                {{
                                  this.food_guest_booked_data[0].food_reference_id
                                }}
                              </b>
                            </td>
                            <td class="col-6">
                              Food Items Count :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .total_item_qty
                                }}
                              </b>
                            </td>
                          </tr>
                          <tr class="row col-12">
                            <td class="col-6">
                              Email ID :
                              <b>
                                {{
                                  this.food_guest_booked_data[0].email_id
                                }}
                              </b>
                            </td>
                            <td class="col-6">
                              Total Booked Qty :
                              <b>
                                {{
                                  this.food_guest_booked_data[0]
                                    .total_qty_booked
                                }}
                              </b>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div class="table-responsive" style="overflow-x: auto;">
                      <table class="table" style="width: 100%; border-collapse: collapse; text-align: center;">
                        <thead>
                          <tr>
                            <th style="border: 1px solid silver; padding: 5px;">Sno</th>
                            <th style="border: 1px solid silver; padding: 5px;">Food Item Name</th>
                            <th style="border: 1px solid silver; padding: 5px;">Price (for 1 Qty)</th>
                            <th style="border: 1px solid silver; padding: 5px;">Quantity</th>
                            <th style="border: 1px solid silver; padding: 5px;">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item of this.food_guest_booked_data[0].foodData" :key="item.sno">
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.sno }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{
                              item.food_items_list }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price }}
                            </td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_quantity
                            }}</td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">{{ item.item_price *
                              item.item_quantity }}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="text-align: right; border: 1px solid silver; padding: 5px;"><b>Total
                                Amount:</b></td>
                            <td style="text-align: center; border: 1px solid silver; padding: 5px;">
                              {{
                                food_guest_booked_data[0].foodData.reduce((total, item) => total + (item.item_price *
                                  item.item_quantity), 0)
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                      <div class="row justify-left col-9 q-mb-md">
                        <p class="row col-12 text-bold q-mt-sm q-mb-xs" style="font-size: 15px;font-family: verdana;">
                          <b>Food Price Details</b>
                        </p>
                        <div class="row col-12 q-mt-sm" style="border: 1px solid silver; ">
                          <div style="display:flex;width:100%">
                            <div style="width:60%">
                              <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                                <b> Price Details</b>
                              </div>
                            </div>
                            <div style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                              <b> Amount (₹) </b>
                            </div>
                          </div>
                          <div style="display:flex;width:100%; border-top:1px solid silver">
                            <div style="width:60%">
                              <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                                Food Charges (for
                                {{
                                  this.food_guest_booked_data[0]
                                    .total_qty_booked
                                }}
                                Quantity)
                              </div>
                            </div>

                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                             ₹
                              {{
                                this.food_guest_booked_data[0].food_charges
                              }}
                            </div>
                          </div>
                          <div style="display:flex;width:100%;">
                            <div style="width:60%" v-if="
                              this.food_guest_booked_data[0]
                                .mh_offer_coupon != 'APPLY COUPEN'
                            ">
                              <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px
                          ">
                                Applied MH Offer :
                                {{
                                  this.food_guest_booked_data[0]
                                    .mh_offer_coupon
                                }}
                              </div>
                            </div>

                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%" v-if="
                                this.food_guest_booked_data[0]
                                  .mh_offer_coupon != 'APPLY COUPEN'
                              ">
                             ₹
                              {{
                                this.food_guest_booked_data[0]
                                  .mh_offer_price
                              }}
                            </div>
                          </div>
                          <div style="display:flex;width:100%;">
                            <div style="width:60%">
                              <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          " v-if="
                            this.food_guest_booked_data[0]
                              .mh_offer_coupon != 'APPLY COUPEN'
                          ">
                                Price After Discount
                              </div>
                            </div>
                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%" v-if="
                                this.food_guest_booked_data[0]
                                  .mh_offer_coupon != 'APPLY COUPEN'
                              ">
                              ₹
                              {{
                                this.food_guest_booked_data[0]
                                  .price_after_discount
                              }}
                            </div>
                          </div>
                          <div style="display:flex;width:100%">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                               Taxes & Fees :-
                            </div>
                          </div>
                          <div style="display:flex;width:100%;">
                            <div style="width:60%">
                              <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                              Taxes
                              </div>
                            </div>
                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                              ₹
                            {{ this.food_guest_booked_data[0].gst_on_base_price }}
                            </div>
                          </div>
                          <!-- <div style="display:flex;width:100%;">
                            <div style="width:60%">
                              <div class="text-subtitle " style="
                            font-size: 12px;
                            padding-left: 75px;
                            padding-top:5px;
                          ">
                                SGST at ({{
                                  this.food_guest_booked_data[0]
                                    .sgst_percentage
                                }}
                                %)
                              </div>
                            </div>
                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                              Rs.
                              {{
                                this.food_guest_booked_data[0].sgst_amount
                              }}
                            </div>
                          </div> -->
                          <div style="display:flex;width:100%;">
                            <div style="width:60%">
                              <div class="text-subtitle" style="
                            font-size: 15px;
                            padding-left: 10px;
                            padding-top:5px;
                          ">
                                Total Price
                              </div>
                            </div>
                            <div class="text-subtitle"
                              style="font-size: 12px;padding-left: 10px;padding-top:5px;width:40%">
                              <strong>
                                ₹
                                {{
                                  this.food_guest_booked_data[0]
                                    .final_price_amount
                                }}
                                /-
                              </strong>
                            </div>
                          </div>
                          <div style="width:100%;text-align:right">
                            <div class="text-subtitle" style="
                            font-size: 12px;
                            padding-right: 10px;
                            padding-top:5px;
                          ">
                              <strong>Grand Total (in Words) :-
                                {{ this.finalprice }}
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
                        <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                          <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                            style="font-size: 15px;font-family: verdana;padding-left:10px">
                            <b>MangoHomz Support</b>
                          </p>
                          <div style="display:flex;width:100%;text-align:center;padding-bottom:10px;">
                            <div class="text-center"
                              style="text-align:center;padding-top:10px;width:10%;padding-left:10px;">
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
                      <div class="row justify-left col-9 q-mb-md" style="padding-top:20px;">
                        <div class="row col-12 q-mt-sm " style="border: 1px solid silver;">
                          <p class="row col-12 text-bold q-mt-sm q-mb-xs"
                            style="font-size: 15px;font-family: verdana;padding-left:10px">
                            <b>Other Information</b>
                          </p>
                          <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                            <b>Safety and Hygiene</b>
                          </p>
                          <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                            • Quarantine protocols are being followed as per
                            local government authorities Guests from containment
                            zones are not allowed
                          </p>
                          <p style="font-size: 12px;font-family: verdana;padding-left:20px">
                            • Shared resources in common areas are properly
                            sanitized Property staff is trained on hygiene
                            guidelines
                          </p>
                          <p style="font-size: 12px;font-family: verdana;padding-left:20px">
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
                      <q-card style="display: flex; background-color: #e4fae9"
                        class="q-mb-sm q-ma-md col-8 justify-center">
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
                      <q-card style="display: flex; background-color: #e4fae9"
                        class="q-mb-sm q-ma-md col-8 justify-center">
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
                    </div>
                  </q-card>
                </q-dialog>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </q-dialog>
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
                <div class="text-caption">Smooth travel facilities 24 / 7</div>
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
    footerTag
    // searchHeaderComp
  },

  data() {
    return {
      autoplay: true,
      moment: moment,
      class_val: "shadow-1 hotel-details-card-1",
      previewGSTDialogBox: false,
      previewDialogBox: false,
      maximizedToggle: true,
      moreservices: false,
      getPrintDetails: false,
      confirm: false,
      bookingFormObj: {},
      foodPriceDetails: {
        food_charges_in_words: "",
        mh_offer_price_in_words: "",
        price_after_discount_in_words: "",
        gst_percentage_in_words: "",
        gst_on_base_price_in_words: "",
        final_price_amount_in_words: ""
      },
      printGSTDialogBox: false,
      printDialogBox: false,
      food_booking_orderid: "",
      title1: "Food Invoice Details",
      printObjWithoutGST: {
        previewDialogBox: true,
        id: "createPdf"
      },
      printObjWithGST: {
        previewGSTDialogBox: true,
        id: "createPdf"
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
    this.propFoodBookedGuestNo = "";
    this.propFoodBookedGuestNo = this.$route.params.foodGuestNumber;
  },
  computed: {
    ...mapState({
      food_guest_booked_data: state => state.booking.food_guest_booked_data,
      // food_cnfrm_booking_data: state => state.booking.food_cnfrm_booking_data,

    }),

    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
    finalprice() {
      let finalprice = this.inWords(
        this.food_guest_booked_data[0].final_price_amount
      );

      return  finalprice;
    }
  },
  mounted() {
    this.$store.dispatch(
      `booking/getFoodBookingId`,
      this.propFoodBookedGuestNo
    );
  },

  methods: {
    ...mapActions("booking", ["getBookingIdDetails"]),
    // ...mapActions("booking", ["getMHBookingData"]),
    ...mapActions("booking", ["getMedicalBookingData"]),
    // addFood() {
    //   // let food = this.propFoodBookedGuestNo.data[0].booking_order_id;
    //   // this.getMHBookingData(food);
    // },
    addTravel() {
      // let travel = this.propFoodBookedGuestNo.data[0].booking_order_id;
      // this.getBookingIdDetails(travel);
      const guestNo = this.food_guest_booked_data[0].booking_order_id;

      this.$router.push({
        name: "Guest Number",
        params: { GuestNo: guestNo }
      });
    },
    addMedical() {
      // let medical = this.propFoodBookedGuestNo.data[0].booking_order_id;
      // this.getMedicalBookingData(medical);
      const equipmentNo = this.food_guest_booked_data[0].booking_order_id;

      this.$router.push({
        name: "Equipment Number",
        params: { EquipmentNo: equipmentNo }
      });
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
    getDataWithGST() {
      this.printGSTDialogBox = true;
    },
    getDataWithoutGST() {
      this.printDialogBox = true;
    },

    async printpart() {
      await this.$htmlToPaper("createPdf");

      this.createPdf = options();
    },
    getCustomerFoodBkngDetails(payload) {
      api
        .get(`/booking/getCustomerFoodBookingDetails/${payload}`)
        .then(response => {
          if (response.data.length > 0 && response.data[0].gstin_no != "") {
            this.previewGSTDialogBox = true;
            this.bookingFormObj.gstin_no = response.data[0].gstin_no;
            this.bookingFormObj = response.data[0];
            this.foodPriceDetails.food_charges_in_words = this.inWords(
              response.data[0].food_charges
            );
            this.foodPriceDetails.mh_offer_price_in_words = this.inWords(
              response.data[0].mh_offer_price
            );
            this.foodPriceDetails.price_after_discount_in_words = this.inWords(
              response.data[0].price_after_discount
            );
            this.foodPriceDetails.gst_percentage_in_words = this.inWords(
              response.data[0].gst_percentage
            );
            this.foodPriceDetails.gst_on_base_price_in_words = this.inWords(
              response.data[0].gst_on_base_price
            );
            this.foodPriceDetails.final_price_amount_in_words = this.inWords(
              response.data[0].final_price_amount
            );
          } else if (
            response.data.length > 0 &&
            response.data[0].gstin_no == ""
          ) {
            this.previewDialogBox = true;
            this.bookingFormObj = response.data[0];
            this.foodPriceDetails.final_price_amount_in_words = this.inWords(
              response.data[0].final_price_amount
            );
          } else {
            this.$q.notify({
              message: "MH Food Booking Id has not found",
              color: "negative",
              icon: "warning"
            });
          }
        })
        .catch(error => {
          console.log(error);
          this.$q.notify({
            message: "MH Food Booking Id has not found",
            color: "negative",
            icon: "warning"
          });
        });
    },
    backTo() {
      this.$router.push("/");
      this.confirm = false;
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
  @page
    size: landscape
    size: 5.5in 8.5in
td
  text-align: left
  border-bottom: 2px solid silver
  border-right: 2px solid silver
  padding-left: 10px
th
  border-bottom: 2px solid silver
table
  border: 1px solid silver
  border-bottom: none
  border-right: none
  border-collapse: collapse
</style>
