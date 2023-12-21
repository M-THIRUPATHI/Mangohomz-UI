<template>
  <q-page-container class="bg-indigo-1">
    <headerTag />
    <q-page style="padding-top: 40px" class="q-pa-md">
      <div class="justify-center">
        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card flat :class="class_val" class="cursor-pointer grad">
            <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
              <q-breadcrumbs
                separator="/"
                class="text-primary"
                active-color="primary"
              >
                <q-breadcrumbs-el label="Home" icon="home" to="/" />
                <q-breadcrumbs-el
                  label="Hotels List"
                  icon="apartment"
                  to="/bookingProcess"
                />
                <q-breadcrumbs-el
                  label="Hotel Information"
                  icon="hotel"
                  @click="confirm = true"
                />
                <q-breadcrumbs-el
                  label="Cart Details"
                  icon="mdi-cart"
                  @click="confirm = true"
                />
                <q-breadcrumbs-el
                  label="Confirm Booking"
                  icon="mdi-account-multiple"
                  to="/confirmBooking"
                />
              </q-breadcrumbs>
              <q-space />
              <q-btn
                size="sm"
                outline
                rounded
                color="primary"
                class="text-weight-bold q-ml-xl"
                @click="confirm = true"
                >BACK
              </q-btn>
            </q-toolbar>
            <div
              class="text-bold text-primary text-center"
              style="font-family: verdana; font-size: 20px; padding-top: 10px"
            >
              GUEST DETAILS
            </div>
            <div class="row items-start q-gutter-xs">
              <div
                class="q-pl-md justify-start text-bold"
                style="font-family: verdana; font-size: 15px"
              >
                Total Guest :- {{ this.total_guest_count }}
              </div>
              <q-space />
              <div
                class="q-pr-md justify-end text-bold"
                style="font-family: verdana; font-size: 15px"
              >
                No.of Guest Added :- {{ this.guestTypeData.length }}
              </div>
            </div>
            <q-card-section>
              <div
                class="justify-start text-bold"
                style="font-family: verdana; font-size: 15px"
              >
                Primary Guest Details
              </div>
              <div
                ref="guestPrimaryDetails"
                class="row items-start q-gutter-md"
              >
                <q-input
                  dense
                  filled
                  square
                  standout
                  v-model="guestFormDetails.guest_address"
                  label="Address Details *"
                  hide-bottom-space
                  style="width: 300px"
                  :rules="[required('Address')]"
                  label-color="black"
                  autogrow
                >
                </q-input>
                <q-input
                  dense
                  filled
                  square
                  standout
                  v-model="guestFormDetails.email_id"
                  label="Email Id *"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('Email'), email()]"
                  label-color="black"
                  hint="Your booking Vocher will be sent to this email"
                >
                </q-input>
                <q-input
                  dense
                  filled
                  square
                  standout
                  v-model="guestFormDetails.mobile_no"
                  label="Mobile Number *"
                  hide-bottom-space
                  style="width: 200px"
                  :rules="[required('Phone no'), phone()]"
                  label-color="black"
                >
                </q-input>
                <q-select
                  v-model="guestFormDetails.nationality"
                  style="width: 140px"
                  :options="['Indian', 'Foreigner']"
                  filled
                  square
                  dense
                  label="Nationality *"
                  lazy-rules
                  hide-bottom-space
                  @input="getCountryCode(guestFormDetails.nationality)"
                ></q-select>
                <q-select
                  v-if="guestFormDetails.nationality == 'Foreigner'"
                  v-model="guestFormDetails.country_name"
                  style="width: 200px"
                  :options="countriesArr"
                  filled
                  option-value="code"
                  option-label="name"
                  square
                  dense
                  label="Country *"
                  lazy-rules
                  hide-bottom-space
                  return-object
                  @input="getCountryCode(guestFormDetails.country_name)"
                ></q-select>
                <q-input
                  v-if="guestFormDetails.nationality == 'Foreigner'"
                  v-model="guestFormDetails.passport_number"
                  hide-bottom-space
                  style="width: 200px"
                  dense
                  filled
                  square
                  lazy-rules
                  label="Passport Number"
                >
                </q-input>
              </div>
            </q-card-section>
            <q-form ref="guestForm" class="q-gutter-xs">
              <q-card-section>
                <div
                  class="justify-start text-bold"
                  style="font-family: verdana; font-size: 15px"
                >
                  Guest Details
                </div>
                <div
                  class="row items-start q-gutter-xs"
                  style="padding-top: 5px"
                >
                  <q-input
                    dense
                    filled
                    square
                    standout
                    v-model="guestFormDetails.first_name"
                    label="First Name *"
                    hide-bottom-space
                    style="width: 200px"
                    label-color="black"
                  >
                  </q-input>
                  <q-input
                    v-model="guestFormDetails.last_name"
                    style="width: 200px"
                    filled
                    square
                    hide-bottom-space
                    dense
                    lazy-rules
                    label="Last Name *"
                  >
                  </q-input>
                  <q-select
                    v-model="guestFormDetails.guest_type"
                    style="width: 140px"
                    :options="['Adult', 'Children', 'Infant']"
                    filled
                    square
                    dense
                    label="Guest Type *"
                    lazy-rules
                    hide-bottom-space
                  >
                  </q-select>
                  <q-select
                    v-model="guestFormDetails.gender"
                    style="width: 120px"
                    :options="['Male', 'Female']"
                    filled
                    square
                    dense
                    label="Gender *"
                    lazy-rules
                    hide-bottom-space
                  >
                  </q-select>

                  <q-btn
                    @click="addGuestData"
                    dense
                    :disable="isGuestBtnDisabled"
                    v-model="btn"
                    label="Add"
                    color="secondary"
                    class="text-bold"
                  />
                </div>

                <div v-if="this.guestTypeData.length > 0">
                  <div class="row q-pa-xs q-gutter-xs"></div>
                  <q-table
                    :data="guestTypeData"
                    :columns="guestColumns"
                    dense
                    :rows-per-page-options="[10]"
                    separator="cell"
                  >
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn
                          color="red"
                          @click="deleteItem(props.row)"
                          size="xs"
                          icon="delete"
                          round
                          dense
                          class="text-weight-bold"
                          no-caps
                          ><q-tooltip :disable="$q.platform.is.mobile"
                            >Delete</q-tooltip
                          ></q-btn
                        >
                      </q-td>
                    </template>
                  </q-table>
                </div>

                <div class="q-pa-md row justify-center q-gutter-md">
                  <q-btn
                    dense
                    label="Preview"
                    color="secondary"
                    class="text-bold justify-center"
                    @click="openPreviewDialog(guestTypeData)"
                  />
                  <!-- <q-btn
                    dense
                    label="Proceed to Pay"
                    color="primary"
                    class="text-bold justify-center"
                    @click="submitBookingData()"
                  /> -->
                </div>
              </q-card-section>
            </q-form>
          </q-card>
        </div>
      </div>

      <q-dialog
        v-model="previewDialogBox"
        :maximized="maximizedToggle"
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <div class="justify-center q-pa-md" style="padding-top: 10px">
          <div class="q-pa-md row justify-center q-gutter-md">
            <q-card flat :class="class_val" class="cursor-pointer">
              <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
                <div
                  class="text-bold text-black text-left"
                  style="font-family: verdana; font-size: 15px"
                >
                  BOOKING DETAILS
                </div>
                <q-space />
                <q-btn
                  flat
                  icon="mdi-arrow-down-drop-circle-outline"
                  @click="previewDialogBox = false"
                >
                  <q-tooltip>close</q-tooltip>
                </q-btn>
              </q-toolbar>
              <q-separator />

              <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 5px">
                <div
                  class="col-lg-3 col-md-3 col-sm-12 col-xs-12"
                  style="padding-top: 30px"
                >
                  <q-card class="q-ma-xs text-black">
                    <q-card-section class="q-pa-none">
                      <div class="col-12" style="width: 100%; height: 100%">
                        <q-img
                          :src="this.hotel_image_1"
                          style="width: 100%; height: 100%"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs">
                    <div class="absolute-top-left" style="padding-top: 10px">
                      <q-rating
                        v-model="rating"
                        size="1em"
                        :max="5"
                        color="secondary"
                        readonly
                      />
                      <q-chip color="secondary" square dark dense
                        >{{ this.rating }}/5 good</q-chip
                      >
                    </div>
                  </q-card>

                  <div
                    class="text-bold"
                    style="
                      padding-top: 50px;
                      font-family: verdana;
                      font-size: 12px;
                    "
                  >
                    {{ this.$store.state.booking.selected_property_name }}
                  </div>

                  <div
                    style="
                      padding-top: 1px;
                      font-family: verdana;
                      font-size: 10px;
                    "
                  >
                    <q-icon name="las la-map-marker" size="16px" />{{
                      this.searchItem.city.city_name
                    }},{{ this.searchItem.hospital.near_hospital_name }}
                  </div>
                  <div
                    class="q-pa-md row items-start bg-blue-1"
                    style="padding-top: 10px"
                  >
                    <div class="col-4 text-left">
                      <div style="font-family: verdana; font-size: 10px">
                        Check-In
                      </div>
                      <div
                        class="text-bold"
                        style="font-family: verdana; font-size: 10px"
                      >
                        {{
                          moment(this.searchItem.checkIn).format(
                            "dddd, DD MMM YYYY"
                          )
                        }}
                      </div>
                      <div style="font-family: verdana; font-size: 10px">
                        {{ moment(this.searchItem.checkIn).format("h:mm a") }}
                      </div>
                    </div>
                    <q-space />
                    <div class="col-4 text-left">
                      <div style="font-family: verdana; font-size: 10px">
                        Check-Out
                      </div>
                      <div
                        class="text-bold"
                        style="font-family: verdana; font-size: 10px"
                      >
                        {{
                          moment(this.searchItem.checkOut).format(
                            "dddd, DD MMM YYYY"
                          )
                        }}
                      </div>
                      <div style="font-family: verdana; font-size: 10px">
                        {{ moment(this.searchItem.checkOut).format("h:mm a") }}
                      </div>
                    </div>
                    <q-space />
                    <div class="col-4 text-left">
                      <div style="font-family: verdana; font-size: 10px">
                        Guests
                      </div>
                      <div
                        class="text-bold"
                        style="font-family: verdana; font-size: 10px"
                      >
                        {{ this.total_guest_count }}
                        Guests |
                        {{ this.$store.state.booking.selected_room_type }}
                      </div>
                      <div style="font-family: verdana; font-size: 10px">
                        {{ this.days }} Nights
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div
                    class="text-bold text-black text-center"
                    style="font-family: verdana; font-size: 12px"
                  >
                    Guest Details
                  </div>
                  <q-separator />
                  <q-markup-table style="padding-right: 1px">
                    <q-table
                      dense
                      :data="guestTypeData"
                      :columns="previewColumns"
                      separator="cell"
                      hide-bottom
                      hide-pagination
                    >
                    </q-table>
                  </q-markup-table>
                  <div
                    class="q-pa-md row items-start"
                    style="padding-top: 10px"
                  >
                    <div
                      class="col-4 text-left text-bold"
                      style="font-family: verdana; font-size: 10px"
                    >
                      Address :
                    </div>
                    <div
                      class="col-8 text-left"
                      style="font-family: verdana; font-size: 10px"
                    >
                      {{ this.guestFormDetails.guest_address }}
                    </div>
                  </div>
                  <div class="q-pa-md row items-start" style="padding-top: 1px">
                    <div
                      class="col-4 text-left
                      text-bold"
                      style="font-family: verdana; font-size: 10px"
                    >
                      Email Id :
                    </div>
                    <div
                      class="col-8 text-left"
                      style="font-family: verdana; font-size: 10px"
                    >
                      {{ this.guestFormDetails.email_id }}
                    </div>
                  </div>
                  <div class="q-pa-md row items-start" style="padding-top: 1px">
                    <div
                      class="col-4 text-left text-bold"
                      style="font-family: verdana; font-size: 10px"
                    >
                      Mobile No :
                    </div>
                    <div
                      class="col-8 text-left"
                      style="font-family: verdana; font-size: 10px"
                    >
                      {{ this.guestFormDetails.mobile_no }}
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
            <q-card :class="class_val" class="cursor-pointer">
              <div
                class="row item-start q-col-gutter-sm q-py-sm"
                style="padding-top: 0px"
              >
                  <!-- PRICE DETAILS -->
                <div
                  class="col-lg-4 col-md-4 col-sm-12 col-xs-12"
                  style="padding-right: 5px"
                >
                  <q-toolbar
                    class="my-breadcrumbs row bg-white rounded-borders"
                  >
                    <div
                      class="text-bold text-black text-left"
                      style="font-family: verdana; font-size: 10px"
                    >
                      PRICE DETAILS
                    </div>
                    <q-space />
                    <q-btn
                      flat
                      icon="mdi-arrow-down-drop-circle-outline"
                      @click="previewDialogBox = false"
                    >
                      <q-tooltip>close</q-tooltip>
                    </q-btn>
                  </q-toolbar>
                  <q-separator />

                   <div
                    class="q-pa-md row items-start" style="height:0vh">
                      <div class="col-8 text-left text-bold" style="font-family: verdana; font-size: 9px">
                        Room Charges (1 room * {{this.days}} nights)
                      </div>
                      <div  class="col-3 text-right text-secondary" style="font-family: verdana; font-size: 10px">
                       Rs {{parseFloat(this.cart_total).toFixed(2)}}
                      </div>
                  </div>
                   <div
                    class="q-pa-md row items-start"  style="height:0vh">
                      <div class="col-8 text-left text-bold" style="font-family: verdana; font-size: 9px">
                        Discount
                      </div>
                      <div  class="col-3 text-right text-red" style="font-family: verdana; font-size: 10px">
                       -Rs {{parseFloat(this.discount_amount).toFixed(2)}}
                      </div>
                  </div>
                  <div
                    class="q-pa-md row items-start bg-blue-1"   style="height:0vh">
                      <div class="col-8 text-left text-bold" style="font-family: verdana; font-size: 9px">
                        Base Price
                      </div>
                      <div  class="col-3 text-right text-black" style="font-family: verdana; font-size: 10px">
                       Rs {{parseFloat(parseInt(this.cart_total)-parseInt(this.discount_amount)).toFixed(2)}}
                      </div>
                  </div>
                   <div
                    class="q-pa-md row items-start" style="height:0vh">
                      <div class="col-8 text-left text-bold" style="font-family: verdana; font-size: 9px">
                        - Offers
                      </div>
                  </div>
                   <div
                    class="q-pa-md row items-start"  style="height:0vh">
                      <div class="col-8 text-left text-bold text-secondary" style="font-family: verdana; font-size: 9px">
                        STAYWELLGETWELL
                      </div>
                      <div  class="col-3 text-right text-red" style="font-family: verdana; font-size: 10px">
                       -Rs {{parseFloat(this.offer_1).toFixed(2)}}
                      </div>
                  </div>
                  <div
                    class="q-pa-md row items-start"  style="height:0vh">
                      <div class="col-8 text-left text-bold text-secondary" style="font-family: verdana; font-size: 9px">
                        Gocash +
                      </div>
                      <div  class="col-3 text-right text-red" style="font-family: verdana; font-size: 10px">
                       -Rs {{parseFloat(this.offer_2).toFixed(2)}}
                      </div>
                  </div>
                  <div
                    class="q-pa-md row items-start bg-blue-1"   style="height:0vh">
                      <div class="col-8 text-left text-bold" style="font-family: verdana; font-size: 9px">
                        Price after discount
                      </div>
                      <div  class="col-3 text-right text-black" style="font-family: verdana; font-size: 10px">
                       Rs {{parseFloat(parseInt(this.cart_total)-parseInt(this.discount_amount)-parseInt(this.offer_1)-parseInt(this.offer_2)).toFixed(2)}}
                      </div>
                  </div>

                   <div
                    class="q-pa-md row items-start" style="height:0vh">
                      <div class="col-8 text-left text-bold" style="font-family: verdana; font-size: 9px">
                        + Taxes & Fees
                      </div>
                  </div>
                   <div
                    class="q-pa-md row items-start"  style="height:0vh">
                      <div class="col-8 text-left text-bold" style="font-family: verdana; font-size: 9px">
                        GST on base price
                      </div>
                      <div  class="col-3 text-right text-secondary" style="font-family: verdana; font-size: 10px">
                       Rs {{parseFloat(this.gst_total).toFixed(2)}}
                      </div>
                  </div>
                  <div
                    class="q-pa-md row items-start"  style="height:0vh">
                      <div class="col-8 text-left text-bold" style="font-family: verdana; font-size: 9px">
                       Service Fee
                      </div>
                      <div  class="col-3 text-right text-secondary" style="font-family: verdana; font-size: 10px">
                       Rs {{parseFloat(this.service_fee).toFixed(2)}}
                      </div>
                  </div>
                  <div
                    class="q-pa-md row items-start bg-blue-1"   style="height:0vh">
                      <div class="col-8 text-left text-bold text-black" style="font-family: verdana; font-size: 9px">
                       PAYABLE NOW
                      </div>
                      <div  class="col-3 text-right text-bold text-black" style="font-family: verdana; font-size: 10px">
                       Rs {{parseFloat(parseInt(this.cart_total)-parseInt(this.discount_amount)-parseInt(this.offer_1)-parseInt(this.offer_2)+parseInt(this.gst_total)+parseInt(this.service_fee)).toFixed(2)}}
                      </div>
                  </div>
                  <div  class="q-pa-md col-12" style="font-family: verdana; font-size: 10px">EMI Start at 4500/month</div>


                </div>

                 <!-- MANGOHOMZ OFFERS -->
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-toolbar
                    class="my-breadcrumbs row bg-white rounded-borders"
                  >
                    <div
                      class="text-bold text-black text-left"
                      style="font-family: verdana; font-size: 10px"
                    >
                      MANGOHOMZ OFFERS
                    </div>
                    <q-space />
                    <q-btn
                      flat
                      icon="mdi-arrow-down-drop-circle-outline"
                      @click="previewDialogBox = false"
                    >
                      <q-tooltip>close</q-tooltip>
                    </q-btn>
                  </q-toolbar>
                  <q-separator />

                  <div class="q-pa-md row items-start q-gutter-md">
                    <q-card
                      dense
                      v-for="item in mangohomzOffers_arr"
                      :key="item.sno"
                      class="col-12 cursor-pointer bg-blue-1"
                    >
                      <q-card-section vertical>
                        <q-card-section>
                          <div class="absolute-top-left">
                            <div
                              class="text-bold text-left"
                              style="font-family: verdana; font-size: 10px"
                            >
                              <q-icon
                                icon-left
                                color="primary"
                                name="mdi-check-circle"
                                size="16px"
                              />
                              {{ item.offer_name }}
                            </div>
                            <div
                              class="text-grey text-left"
                              style="font-family: verdana; font-size: 10px"
                            >
                              {{ item.offer_description }}
                            </div>
                          </div>
                          <div
                            class="absolute-top-right"
                            style="font-family: verdana; font-size: 12px"
                          >
                            -Rs {{ item.offer_price }}
                          </div>
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                    <q-separator />
                  </div>
                  <q-separator />
                </div>

                <!-- PROCEED TO PAY -->
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-toolbar
                    class="my-breadcrumbs row bg-white rounded-borders"
                  >
                    <div
                      class="text-bold text-black text-left"
                      style="font-family: verdana; font-size: 10px"
                    ></div>
                  </q-toolbar>
                  <q-card-section>
                    <div
                      class="justify-start text-bold"
                      style="
                        font-family: verdana;
                        font-size: 12px;
                        padding-bottom: 10px;
                      "
                    >
                      Mobile Number
                    </div>
                    <div
                      ref="guestPrimaryDetails"
                      class="row items-start q-gutter-md"
                      style="padding-bottom: 10px"
                    >
                      <q-input
                        dense
                        filled
                        square
                        v-model="guestFormDetails.selected_country"
                        readonly
                        hide-bottom-space
                        style="width: 80px"
                        label-color="grey"
                      >
                      </q-input>
                      <q-input
                        dense
                        filled
                        square
                        standout
                        v-model="guestFormDetails.mobile_no"
                        label="Mobile Number *"
                        hide-bottom-space
                        style="width: 170px"
                        :rules="[required('Phone no'), phone()]"
                        label-color="black"
                      >
                      </q-input>
                    </div>
                    <q-separator />
                    <div
                      class="row items-start q-gutter-md"
                      style="padding-top: 10px"
                    >
                      <q-checkbox
                        v-model="right"
                        dense
                        class="text-bold"
                        label="Enter GST Details (Optional)"
                      />

                    </div>
                    <div
                      class="col-12 justify-center"
                      style="padding-top: 20px"
                    >
                      <q-btn
                        square
                        dense
                        style="
                          width: 100%;
                          font-family: verdana;
                          font-size: 12px;
                        "
                        color="secondary"
                        class="text-bold"
                        label="PROCEED TO PAYMENT"
                        @click="submitBookingData()"
                      />
                      <p
                        style="
                          width: 100%;
                          font-family: verdana;
                          font-size: 9px;
                          padding-top: 5px;
                        "
                      >
                        By Proceeding I agree to Mangohomz Privacy Policy,User
                        Agreement & Terms of Services
                      </p>
                    </div>
                  </q-card-section>
                </div>

              </div>
            </q-card>
          </div>
        </div>

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
        <search-header-comp />
        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page-container>
</template>
<script>
import headerTag from "./header.vue";
import footerTag from "./footer.vue";
import searchHeaderComp from "../components/searchHeaderComp.vue";
import { mapState, mapActions } from "vuex";
import validations from "../helpers/validations";
import moment from "moment";

export default {
  components: {
    headerTag,
    footerTag,
    searchHeaderComp,
  },

  data() {
    return {
      ...validations,
      moment: moment,
      right: false,
      class_val: "shadow-1 hotel-details-card-1",
      btn: "",
      text: "",
      discount_amount: "1000",
      offer_1: "999",
      offer_2: "399",
      gst_total: "1400",
      service_fee: "999",
      previewDialogBox: false,
      maximizedToggle: true,
      selected_property_name: "",
      selected_property_min_price: "",
      hotel_image_1: "",
      description: "",
      room_total: "",
      cart_total: "",
      days: 0,
      rating: 4.5,
      searchItem: {
        city: "",
        hospital: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        adult_count: 0,
        child_count: 0,
        infant_count: 0,
      },
      confirm: false,
      countriesArr: [
        { name: "Afghanistan", code: "AF" },
        { name: "Åland Islands", code: "AX" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "American Samoa", code: "AS" },
        { name: "AndorrA", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Anguilla", code: "AI" },
        { name: "Antarctica", code: "AQ" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Aruba", code: "AW" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Azerbaijan", code: "AZ" },
        { name: "Bahamas", code: "BS" },
        { name: "Bahrain", code: "BH" },
        { name: "Bangladesh", code: "BD" },
        { name: "Barbados", code: "BB" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Belize", code: "BZ" },
        { name: "Benin", code: "BJ" },
        { name: "Bermuda", code: "BM" },
        { name: "Bhutan", code: "BT" },
        { name: "Bolivia", code: "BO" },
        { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Botswana", code: "BW" },
        { name: "Bouvet Island", code: "BV" },
        { name: "Brazil", code: "BR" },
        { name: "British Indian Ocean Territory", code: "IO" },
        { name: "Brunei Darussalam", code: "BN" },
        { name: "Bulgaria", code: "BG" },
        { name: "Burkina Faso", code: "BF" },
        { name: "Burundi", code: "BI" },
        { name: "Cambodia", code: "KH" },
        { name: "Cameroon", code: "CM" },
        { name: "Canada", code: "CA" },
        { name: "Cape Verde", code: "CV" },
        { name: "Cayman Islands", code: "KY" },
        { name: "Central African Republic", code: "CF" },
        { name: "Chad", code: "TD" },
        { name: "Chile", code: "CL" },
        { name: "China", code: "CN" },
        { name: "Christmas Island", code: "CX" },
        { name: "Cocos (Keeling) Islands", code: "CC" },
        { name: "Colombia", code: "CO" },
        { name: "Comoros", code: "KM" },
        { name: "Congo", code: "CG" },
        { name: "Congo, The Democratic Republic of the", code: "CD" },
        { name: "Cook Islands", code: "CK" },
        { name: "Costa Rica", code: "CR" },
        { name: "Cote D'Ivoire", code: "CI" },
        { name: "Croatia", code: "HR" },
        { name: "Cuba", code: "CU" },
        { name: "Cyprus", code: "CY" },
        { name: "Czech Republic", code: "CZ" },
        { name: "Denmark", code: "DK" },
        { name: "Djibouti", code: "DJ" },
        { name: "Dominica", code: "DM" },
        { name: "Dominican Republic", code: "DO" },
        { name: "Ecuador", code: "EC" },
        { name: "Egypt", code: "EG" },
        { name: "El Salvador", code: "SV" },
        { name: "Equatorial Guinea", code: "GQ" },
        { name: "Eritrea", code: "ER" },
        { name: "Estonia", code: "EE" },
        { name: "Ethiopia", code: "ET" },
        { name: "Falkland Islands (Malvinas)", code: "FK" },
        { name: "Faroe Islands", code: "FO" },
        { name: "Fiji", code: "FJ" },
        { name: "Finland", code: "FI" },
        { name: "France", code: "FR" },
        { name: "French Guiana", code: "GF" },
        { name: "French Polynesia", code: "PF" },
        { name: "French Southern Territories", code: "TF" },
        { name: "Gabon", code: "GA" },
        { name: "Gambia", code: "GM" },
        { name: "Georgia", code: "GE" },
        { name: "Germany", code: "DE" },
        { name: "Ghana", code: "GH" },
        { name: "Gibraltar", code: "GI" },
        { name: "Greece", code: "GR" },
        { name: "Greenland", code: "GL" },
        { name: "Grenada", code: "GD" },
        { name: "Guadeloupe", code: "GP" },
        { name: "Guam", code: "GU" },
        { name: "Guatemala", code: "GT" },
        { name: "Guernsey", code: "GG" },
        { name: "Guinea", code: "GN" },
        { name: "Guinea-Bissau", code: "GW" },
        { name: "Guyana", code: "GY" },
        { name: "Haiti", code: "HT" },
        { name: "Heard Island and Mcdonald Islands", code: "HM" },
        { name: "Holy See (Vatican City State)", code: "VA" },
        { name: "Honduras", code: "HN" },
        { name: "Hong Kong", code: "HK" },
        { name: "Hungary", code: "HU" },
        { name: "Iceland", code: "IS" },
        { name: "India", code: "IN" },
        { name: "Indonesia", code: "ID" },
        { name: "Iran, Islamic Republic Of", code: "IR" },
        { name: "Iraq", code: "IQ" },
        { name: "Ireland", code: "IE" },
        { name: "Isle of Man", code: "IM" },
        { name: "Israel", code: "IL" },
        { name: "Italy", code: "IT" },
        { name: "Jamaica", code: "JM" },
        { name: "Japan", code: "JP" },
        { name: "Jersey", code: "JE" },
        { name: "Jordan", code: "JO" },
        { name: "Kazakhstan", code: "KZ" },
        { name: "Kenya", code: "KE" },
        { name: "Kiribati", code: "KI" },
        { name: "Korea, Democratic People'S Republic of", code: "KP" },
        { name: "Korea, Republic of", code: "KR" },
        { name: "Kuwait", code: "KW" },
        { name: "Kyrgyzstan", code: "KG" },
        { name: "Lao People'S Democratic Republic", code: "LA" },
        { name: "Latvia", code: "LV" },
        { name: "Lebanon", code: "LB" },
        { name: "Lesotho", code: "LS" },
        { name: "Liberia", code: "LR" },
        { name: "Libyan Arab Jamahiriya", code: "LY" },
        { name: "Liechtenstein", code: "LI" },
        { name: "Lithuania", code: "LT" },
        { name: "Luxembourg", code: "LU" },
        { name: "Macao", code: "MO" },
        { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
        { name: "Madagascar", code: "MG" },
        { name: "Malawi", code: "MW" },
        { name: "Malaysia", code: "MY" },
        { name: "Maldives", code: "MV" },
        { name: "Mali", code: "ML" },
        { name: "Malta", code: "MT" },
        { name: "Marshall Islands", code: "MH" },
        { name: "Martinique", code: "MQ" },
        { name: "Mauritania", code: "MR" },
        { name: "Mauritius", code: "MU" },
        { name: "Mayotte", code: "YT" },
        { name: "Mexico", code: "MX" },
        { name: "Micronesia, Federated States of", code: "FM" },
        { name: "Moldova, Republic of", code: "MD" },
        { name: "Monaco", code: "MC" },
        { name: "Mongolia", code: "MN" },
        { name: "Montserrat", code: "MS" },
        { name: "Morocco", code: "MA" },
        { name: "Mozambique", code: "MZ" },
        { name: "Myanmar", code: "MM" },
        { name: "Namibia", code: "NA" },
        { name: "Nauru", code: "NR" },
        { name: "Nepal", code: "NP" },
        { name: "Netherlands", code: "NL" },
        { name: "Netherlands Antilles", code: "AN" },
        { name: "New Caledonia", code: "NC" },
        { name: "New Zealand", code: "NZ" },
        { name: "Nicaragua", code: "NI" },
        { name: "Niger", code: "NE" },
        { name: "Nigeria", code: "NG" },
        { name: "Niue", code: "NU" },
        { name: "Norfolk Island", code: "NF" },
        { name: "Northern Mariana Islands", code: "MP" },
        { name: "Norway", code: "NO" },
        { name: "Oman", code: "OM" },
        { name: "Pakistan", code: "PK" },
        { name: "Palau", code: "PW" },
        { name: "Palestinian Territory, Occupied", code: "PS" },
        { name: "Panama", code: "PA" },
        { name: "Papua New Guinea", code: "PG" },
        { name: "Paraguay", code: "PY" },
        { name: "Peru", code: "PE" },
        { name: "Philippines", code: "PH" },
        { name: "Pitcairn", code: "PN" },
        { name: "Poland", code: "PL" },
        { name: "Portugal", code: "PT" },
        { name: "Puerto Rico", code: "PR" },
        { name: "Qatar", code: "QA" },
        { name: "Reunion", code: "RE" },
        { name: "Romania", code: "RO" },
        { name: "Russian Federation", code: "RU" },
        { name: "RWANDA", code: "RW" },
        { name: "Saint Helena", code: "SH" },
        { name: "Saint Kitts and Nevis", code: "KN" },
        { name: "Saint Lucia", code: "LC" },
        { name: "Saint Pierre and Miquelon", code: "PM" },
        { name: "Saint Vincent and the Grenadines", code: "VC" },
        { name: "Samoa", code: "WS" },
        { name: "San Marino", code: "SM" },
        { name: "Sao Tome and Principe", code: "ST" },
        { name: "Saudi Arabia", code: "SA" },
        { name: "Senegal", code: "SN" },
        { name: "Serbia and Montenegro", code: "CS" },
        { name: "Seychelles", code: "SC" },
        { name: "Sierra Leone", code: "SL" },
        { name: "Singapore", code: "SG" },
        { name: "Slovakia", code: "SK" },
        { name: "Slovenia", code: "SI" },
        { name: "Solomon Islands", code: "SB" },
        { name: "Somalia", code: "SO" },
        { name: "South Africa", code: "ZA" },
        { name: "South Georgia and the South Sandwich Islands", code: "GS" },
        { name: "Spain", code: "ES" },
        { name: "Sri Lanka", code: "LK" },
        { name: "Sudan", code: "SD" },
        { name: "Suriname", code: "SR" },
        { name: "Svalbard and Jan Mayen", code: "SJ" },
        { name: "Swaziland", code: "SZ" },
        { name: "Sweden", code: "SE" },
        { name: "Switzerland", code: "CH" },
        { name: "Syrian Arab Republic", code: "SY" },
        { name: "Taiwan, Province of China", code: "TW" },
        { name: "Tajikistan", code: "TJ" },
        { name: "Tanzania, United Republic of", code: "TZ" },
        { name: "Thailand", code: "TH" },
        { name: "Timor-Leste", code: "TL" },
        { name: "Togo", code: "TG" },
        { name: "Tokelau", code: "TK" },
        { name: "Tonga", code: "TO" },
        { name: "Trinidad and Tobago", code: "TT" },
        { name: "Tunisia", code: "TN" },
        { name: "Turkey", code: "TR" },
        { name: "Turkmenistan", code: "TM" },
        { name: "Turks and Caicos Islands", code: "TC" },
        { name: "Tuvalu", code: "TV" },
        { name: "Uganda", code: "UG" },
        { name: "Ukraine", code: "UA" },
        { name: "United Arab Emirates", code: "AE" },
        { name: "United Kingdom", code: "GB" },
        { name: "United States", code: "US" },
        { name: "United States Minor Outlying Islands", code: "UM" },
        { name: "Uruguay", code: "UY" },
        { name: "Uzbekistan", code: "UZ" },
        { name: "Vanuatu", code: "VU" },
        { name: "Venezuela", code: "VE" },
        { name: "Viet Nam", code: "VN" },
        { name: "Virgin Islands, British", code: "VG" },
        { name: "Virgin Islands, U.S.", code: "VI" },
        { name: "Wallis and Futuna", code: "WF" },
        { name: "Western Sahara", code: "EH" },
        { name: "Yemen", code: "YE" },
        { name: "Zambia", code: "ZM" },
        { name: "Zimbabwe", code: "ZW" },
      ],
      country_codes: [
        {
          code: "+7 840",
          name: "Abkhazia",
        },
        {
          code: "+93",
          name: "Afghanistan",
        },
        {
          code: "+355",
          name: "Albania",
        },
        {
          code: "+213",
          name: "Algeria",
        },
        {
          code: "+1 684",
          name: "American Samoa",
        },
        {
          code: "+376",
          name: "Andorra",
        },
        {
          code: "+244",
          name: "Angola",
        },
        {
          code: "+1 264",
          name: "Anguilla",
        },
        {
          code: "+1 268",
          name: "Antigua and Barbuda",
        },
        {
          code: "+54",
          name: "Argentina",
        },
        {
          code: "+374",
          name: "Armenia",
        },
        {
          code: "+297",
          name: "Aruba",
        },
        {
          code: "+247",
          name: "Ascension",
        },
        {
          code: "+61",
          name: "Australia",
        },
        {
          code: "+672",
          name: "Australian External Territories",
        },
        {
          code: "+43",
          name: "Austria",
        },
        {
          code: "+994",
          name: "Azerbaijan",
        },
        {
          code: "+1 242",
          name: "Bahamas",
        },
        {
          code: "+973",
          name: "Bahrain",
        },
        {
          code: "+880",
          name: "Bangladesh",
        },
        {
          code: "+1 246",
          name: "Barbados",
        },
        {
          code: "+1 268",
          name: "Barbuda",
        },
        {
          code: "+375",
          name: "Belarus",
        },
        {
          code: "+32",
          name: "Belgium",
        },
        {
          code: "+501",
          name: "Belize",
        },
        {
          code: "+229",
          name: "Benin",
        },
        {
          code: "+1 441",
          name: "Bermuda",
        },
        {
          code: "+975",
          name: "Bhutan",
        },
        {
          code: "+591",
          name: "Bolivia",
        },
        {
          code: "+387",
          name: "Bosnia and Herzegovina",
        },
        {
          code: "+267",
          name: "Botswana",
        },
        {
          code: "+55",
          name: "Brazil",
        },
        {
          code: "+246",
          name: "British Indian Ocean Territory",
        },
        {
          code: "+1 284",
          name: "British Virgin Islands",
        },
        {
          code: "+673",
          name: "Brunei",
        },
        {
          code: "+359",
          name: "Bulgaria",
        },
        {
          code: "+226",
          name: "Burkina Faso",
        },
        {
          code: "+257",
          name: "Burundi",
        },
        {
          code: "+855",
          name: "Cambodia",
        },
        {
          code: "+237",
          name: "Cameroon",
        },
        {
          code: "+1",
          name: "Canada",
        },
        {
          code: "+238",
          name: "Cape Verde",
        },
        {
          code: "+ 345",
          name: "Cayman Islands",
        },
        {
          code: "+236",
          name: "Central African Republic",
        },
        {
          code: "+235",
          name: "Chad",
        },
        {
          code: "+56",
          name: "Chile",
        },
        {
          code: "+86",
          name: "China",
        },
        {
          code: "+61",
          name: "Christmas Island",
        },
        {
          code: "+61",
          name: "Cocos-Keeling Islands",
        },
        {
          code: "+57",
          name: "Colombia",
        },
        {
          code: "+269",
          name: "Comoros",
        },
        {
          code: "+242",
          name: "Congo",
        },
        {
          code: "+243",
          name: "Congo, Dem. Rep. of (Zaire)",
        },
        {
          code: "+682",
          name: "Cook Islands",
        },
        {
          code: "+506",
          name: "Costa Rica",
        },
        {
          code: "+385",
          name: "Croatia",
        },
        {
          code: "+53",
          name: "Cuba",
        },
        {
          code: "+599",
          name: "Curacao",
        },
        {
          code: "+537",
          name: "Cyprus",
        },
        {
          code: "+420",
          name: "Czech Republic",
        },
        {
          code: "+45",
          name: "Denmark",
        },
        {
          code: "+246",
          name: "Diego Garcia",
        },
        {
          code: "+253",
          name: "Djibouti",
        },
        {
          code: "+1 767",
          name: "Dominica",
        },
        {
          code: "+1 809",
          name: "Dominican Republic",
        },
        {
          code: "+670",
          name: "East Timor",
        },
        {
          code: "+56",
          name: "Easter Island",
        },
        {
          code: "+593",
          name: "Ecuador",
        },
        {
          code: "+20",
          name: "Egypt",
        },
        {
          code: "+503",
          name: "El Salvador",
        },
        {
          code: "+240",
          name: "Equatorial Guinea",
        },
        {
          code: "+291",
          name: "Eritrea",
        },
        {
          code: "+372",
          name: "Estonia",
        },
        {
          code: "+251",
          name: "Ethiopia",
        },
        {
          code: "+500",
          name: "Falkland Islands",
        },
        {
          code: "+298",
          name: "Faroe Islands",
        },
        {
          code: "+679",
          name: "Fiji",
        },
        {
          code: "+358",
          name: "Finland",
        },
        {
          code: "+33",
          name: "France",
        },
        {
          code: "+596",
          name: "French Antilles",
        },
        {
          code: "+594",
          name: "French Guiana",
        },
        {
          code: "+689",
          name: "French Polynesia",
        },
        {
          code: "+241",
          name: "Gabon",
        },
        {
          code: "+220",
          name: "Gambia",
        },
        {
          code: "+995",
          name: "Georgia",
        },
        {
          code: "+49",
          name: "Germany",
        },
        {
          code: "+233",
          name: "Ghana",
        },
        {
          code: "+350",
          name: "Gibraltar",
        },
        {
          code: "+30",
          name: "Greece",
        },
        {
          code: "+299",
          name: "Greenland",
        },
        {
          code: "+1 473",
          name: "Grenada",
        },
        {
          code: "+590",
          name: "Guadeloupe",
        },
        {
          code: "+1 671",
          name: "Guam",
        },
        {
          code: "+502",
          name: "Guatemala",
        },
        {
          code: "+224",
          name: "Guinea",
        },
        {
          code: "+245",
          name: "Guinea-Bissau",
        },
        {
          code: "+595",
          name: "Guyana",
        },
        {
          code: "+509",
          name: "Haiti",
        },
        {
          code: "+504",
          name: "Honduras",
        },
        {
          code: "+852",
          name: "Hong Kong SAR China",
        },
        {
          code: "+36",
          name: "Hungary",
        },
        {
          code: "+354",
          name: "Iceland",
        },
        {
          code: "+91",
          name: "India",
        },
        {
          code: "+62",
          name: "Indonesia",
        },
        {
          code: "+98",
          name: "Iran",
        },
        {
          code: "+964",
          name: "Iraq",
        },
        {
          code: "+353",
          name: "Ireland",
        },
        {
          code: "+972",
          name: "Israel",
        },
        {
          code: "+39",
          name: "Italy",
        },
        {
          code: "+225",
          name: "Ivory Coast",
        },
        {
          code: "+1 876",
          name: "Jamaica",
        },
        {
          code: "+81",
          name: "Japan",
        },
        {
          code: "+962",
          name: "Jordan",
        },
        {
          code: "+7 7",
          name: "Kazakhstan",
        },
        {
          code: "+254",
          name: "Kenya",
        },
        {
          code: "+686",
          name: "Kiribati",
        },
        {
          code: "+965",
          name: "Kuwait",
        },
        {
          code: "+996",
          name: "Kyrgyzstan",
        },
        {
          code: "+856",
          name: "Laos",
        },
        {
          code: "+371",
          name: "Latvia",
        },
        {
          code: "+961",
          name: "Lebanon",
        },
        {
          code: "+266",
          name: "Lesotho",
        },
        {
          code: "+231",
          name: "Liberia",
        },
        {
          code: "+218",
          name: "Libya",
        },
        {
          code: "+423",
          name: "Liechtenstein",
        },
        {
          code: "+370",
          name: "Lithuania",
        },
        {
          code: "+352",
          name: "Luxembourg",
        },
        {
          code: "+853",
          name: "Macau SAR China",
        },
        {
          code: "+389",
          name: "Macedonia",
        },
        {
          code: "+261",
          name: "Madagascar",
        },
        {
          code: "+265",
          name: "Malawi",
        },
        {
          code: "+60",
          name: "Malaysia",
        },
        {
          code: "+960",
          name: "Maldives",
        },
        {
          code: "+223",
          name: "Mali",
        },
        {
          code: "+356",
          name: "Malta",
        },
        {
          code: "+692",
          name: "Marshall Islands",
        },
        {
          code: "+596",
          name: "Martinique",
        },
        {
          code: "+222",
          name: "Mauritania",
        },
        {
          code: "+230",
          name: "Mauritius",
        },
        {
          code: "+262",
          name: "Mayotte",
        },
        {
          code: "+52",
          name: "Mexico",
        },
        {
          code: "+691",
          name: "Micronesia",
        },
        {
          code: "+1 808",
          name: "Midway Island",
        },
        {
          code: "+373",
          name: "Moldova",
        },
        {
          code: "+377",
          name: "Monaco",
        },
        {
          code: "+976",
          name: "Mongolia",
        },
        {
          code: "+382",
          name: "Montenegro",
        },
        {
          code: "+1664",
          name: "Montserrat",
        },
        {
          code: "+212",
          name: "Morocco",
        },
        {
          code: "+95",
          name: "Myanmar",
        },
        {
          code: "+264",
          name: "Namibia",
        },
        {
          code: "+674",
          name: "Nauru",
        },
        {
          code: "+977",
          name: "Nepal",
        },
        {
          code: "+31",
          name: "Netherlands",
        },
        {
          code: "+599",
          name: "Netherlands Antilles",
        },
        {
          code: "+1 869",
          name: "Nevis",
        },
        {
          code: "+687",
          name: "New Caledonia",
        },
        {
          code: "+64",
          name: "New Zealand",
        },
        {
          code: "+505",
          name: "Nicaragua",
        },
        {
          code: "+227",
          name: "Niger",
        },
        {
          code: "+234",
          name: "Nigeria",
        },
        {
          code: "+683",
          name: "Niue",
        },
        {
          code: "+672",
          name: "Norfolk Island",
        },
        {
          code: "+850",
          name: "North Korea",
        },
        {
          code: "+1 670",
          name: "Northern Mariana Islands",
        },
        {
          code: "+47",
          name: "Norway",
        },
        {
          code: "+968",
          name: "Oman",
        },
        {
          code: "+92",
          name: "Pakistan",
        },
        {
          code: "+680",
          name: "Palau",
        },
        {
          code: "+970",
          name: "Palestinian Territory",
        },
        {
          code: "+507",
          name: "Panama",
        },
        {
          code: "+675",
          name: "Papua New Guinea",
        },
        {
          code: "+595",
          name: "Paraguay",
        },
        {
          code: "+51",
          name: "Peru",
        },
        {
          code: "+63",
          name: "Philippines",
        },
        {
          code: "+48",
          name: "Poland",
        },
        {
          code: "+351",
          name: "Portugal",
        },
        {
          code: "+1 787",
          name: "Puerto Rico",
        },
        {
          code: "+974",
          name: "Qatar",
        },
        {
          code: "+262",
          name: "Reunion",
        },
        {
          code: "+40",
          name: "Romania",
        },
        {
          code: "+7",
          name: "Russia",
        },
        {
          code: "+250",
          name: "Rwanda",
        },
        {
          code: "+685",
          name: "Samoa",
        },
        {
          code: "+378",
          name: "San Marino",
        },
        {
          code: "+966",
          name: "Saudi Arabia",
        },
        {
          code: "+221",
          name: "Senegal",
        },
        {
          code: "+381",
          name: "Serbia",
        },
        {
          code: "+248",
          name: "Seychelles",
        },
        {
          code: "+232",
          name: "Sierra Leone",
        },
        {
          code: "+65",
          name: "Singapore",
        },
        {
          code: "+421",
          name: "Slovakia",
        },
        {
          code: "+386",
          name: "Slovenia",
        },
        {
          code: "+677",
          name: "Solomon Islands",
        },
        {
          code: "+27",
          name: "South Africa",
        },
        {
          code: "+500",
          name: "South Georgia and the South Sandwich Islands",
        },
        {
          code: "+82",
          name: "South Korea",
        },
        {
          code: "+34",
          name: "Spain",
        },
        {
          code: "+94",
          name: "Sri Lanka",
        },
        {
          code: "+249",
          name: "Sudan",
        },
        {
          code: "+597",
          name: "Suriname",
        },
        {
          code: "+268",
          name: "Swaziland",
        },
        {
          code: "+46",
          name: "Sweden",
        },
        {
          code: "+41",
          name: "Switzerland",
        },
        {
          code: "+963",
          name: "Syria",
        },
        {
          code: "+886",
          name: "Taiwan",
        },
        {
          code: "+992",
          name: "Tajikistan",
        },
        {
          code: "+255",
          name: "Tanzania",
        },
        {
          code: "+66",
          name: "Thailand",
        },
        {
          code: "+670",
          name: "Timor Leste",
        },
        {
          code: "+228",
          name: "Togo",
        },
        {
          code: "+690",
          name: "Tokelau",
        },
        {
          code: "+676",
          name: "Tonga",
        },
        {
          code: "+1 868",
          name: "Trinidad and Tobago",
        },
        {
          code: "+216",
          name: "Tunisia",
        },
        {
          code: "+90",
          name: "Turkey",
        },
        {
          code: "+993",
          name: "Turkmenistan",
        },
        {
          code: "+1 649",
          name: "Turks and Caicos Islands",
        },
        {
          code: "+688",
          name: "Tuvalu",
        },
        {
          code: "+1 340",
          name: "U.S. Virgin Islands",
        },
        {
          code: "+256",
          name: "Uganda",
        },
        {
          code: "+380",
          name: "Ukraine",
        },
        {
          code: "+971",
          name: "United Arab Emirates",
        },
        {
          code: "+44",
          name: "United Kingdom",
        },
        {
          code: "+1",
          name: "United States",
        },
        {
          code: "+598",
          name: "Uruguay",
        },
        {
          code: "+998",
          name: "Uzbekistan",
        },
        {
          code: "+678",
          name: "Vanuatu",
        },
        {
          code: "+58",
          name: "Venezuela",
        },
        {
          code: "+84",
          name: "Vietnam",
        },
        {
          code: "+1 808",
          name: "Wake Island",
        },
        {
          code: "+681",
          name: "Wallis and Futuna",
        },
        {
          code: "+967",
          name: "Yemen",
        },
        {
          code: "+260",
          name: "Zambia",
        },
        {
          code: "+255",
          name: "Zanzibar",
        },
        {
          code: "+263",
          name: "Zimbabwe",
        },
      ],

      guestFormDetails: {
        first_name: "",
        last_name: "",
        guest_type: "",
        gender: "",
        nationality: "",
        country_name: "",
        passport_number: "",
        guest_address: "",
        email_id: "",
        mobile_no: "",
        guestDataObj: {},
        selected_country: "",
        selected_mobile_no: "",
      },
      guestTypeData: [],
      previewColumns: [
        {
          name: "first_name",
          label: "First Name",
          align: "center",
          field: "first_name",
          style: "width:100px",
          headerClasses: "bg-blue-1 text-black text-bold",
        },
        {
          name: "last_name",
          label: "Last Name",
          headerClasses: "bg-blue-1 text-black text-bold",
          field: "last_name",
          style: "width:100px",
          align: "center",
        },
        // {
        //   name: "guest_type",
        //   label: "Guest Type",
        //   headerClasses: "bg-grey text-black text-bold",
        //   field: "guest_type",
        //   style: "width:50px",
        //   align: "center",
        // },
      ],
      guestColumns: [
        {
          name: "first_name",
          label: "First Name",
          align: "center",
          field: "first_name",
          style: "width:150px",
          headerClasses: "bg-primary text-white",
        },
        {
          name: "last_name",
          label: "Last Name",
          headerClasses: "bg-primary text-white",
          field: "last_name",
          style: "width:150px",
          align: "center",
        },
        {
          name: "guest_type",
          label: "Guest Type",
          headerClasses: "bg-primary text-white",
          field: "guest_type",
          style: "width:100px",
          align: "center",
        },
        {
          name: "gender",
          label: "Gender",
          headerClasses: "bg-primary text-white",
          field: "gender",
          style: "width:150px",
          align: "center",
        },
        {
          name: "nationality",
          label: "Nationality",
          headerClasses: "bg-primary text-white",
          field: "nationality",
          style: "width:150px",
          align: "center",
        },
        {
          name: "country_name",
          label: "Country",
          headerClasses: "bg-primary text-white",
          field: "country_name",
          style: "width:150px",
          align: "center",
        },
        {
          name: "passport_number",
          label: "Passport",
          headerClasses: "bg-primary text-white",
          field: "passport_number",
          style: "width:150px",
          align: "center",
        },
        {
          name: "actions",
          label: "Actions",
          field: "actions",
          headerClasses: "bg-primary text-white",
          align: "center",
        },
      ],
      total_guest_count: 0,
      guestName: "",
      guestAddress: "",
      guestEmailId: "",
      guestMobile: "",
    };
  },

  created() {
    // this.total_guest_count =
    //   parseInt(this.$store.state.account.adult_count) +
    //   parseInt(this.$store.state.account.child_count) +
    //   parseInt(this.$store.state.account.infant_count);
    this.hotelDetails = [];
    this.hotelDetails.push(this.$route.params.hotelInfo);
  },
  mounted() {
    let hotelSerachDetails =(JSON.parse(this.$route.params.searchInfo));
    // let hotelSerachDetails =
    //   JSON.parse(localStorage.getItem("searchItem")) || [];
    this.searchItem = {
      city: hotelSerachDetails.city,
      hospital: hotelSerachDetails.hospital,
      guests: hotelSerachDetails.guest,
      adult_count: hotelSerachDetails.adult_count,
      child_count: hotelSerachDetails.child_count,
      checkIn: hotelSerachDetails.dateModel.from,
      checkOut: hotelSerachDetails.dateModel.to,
    };
    this.days = this.noOfDays(
      this.searchItem.checkIn,
      this.searchItem.checkOut
    );
    this.$store.dispatch(`booking/loadHotels`, this.searchItem);
    this.selected_property_name =
      this.$store.state.booking.selected_property_name;
    this.selected_property_min_price =
      this.$store.state.booking.selected_property_min_price;
    this.hotel_image_1 = this.$store.state.booking.hotel_image_1;
    this.description = this.$store.state.booking.description;
    this.cart_total = this.selected_property_min_price * this.days;
    this.total_guest_count =
      this.searchItem.adult_count + this.searchItem.child_count;
    this.$store.dispatch("booking/getMangohomzOfferData");
  },
  computed: {
    ...mapState({
      hotel_list: (state) => state.booking.hotelDetails,
      hotelInfo_arr: (state) => state.booking.hotelInfo_arr,
      mangohomzOffers_arr: (state) => state.booking.mangohomzOffers_arr,
      // hospitals_list: state => state.dropdown.hospital_arr,
    }),

    isGuestBtnDisabled() {
      let disabled = false;
      if (this.guestTypeData.length === this.total_guest_count) {
        disabled = true;
      }
      return disabled;
    },
  },

  methods: {
    ...mapActions("booking", ["saveBookingData"]),

    getCountryCode(val) {
      if (val == "Indian") {
        this.guestFormDetails.selected_country = `+${91} IND`;
      } else {
        for (const element of this.country_codes) {
          if ((element.name = val.name)) {
            this.guestFormDetails.selected_country = `${element.code} ${val.code}`;
          }
        }
      }

    },

    openPreviewDialog(item) {
      //  if (this.guestTypeData.length > 0) {

      this.previewDialogBox = true;
      // this.guestName = item[0].guest_name;
      this.guestAddress = item[0].guest_address;
      this.guestEmailId = item[0].guest_email;
      this.guestMobile = item[0].guest_phone;
      // } else {
      //   this.$q.notify({
      //     color: "negative",
      //     message: "Please Add Guest Details"
      //   });
      // }
    },
    submitBookingData() {
      if (this.guestTypeData.length > 0) {
        this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Pay ?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {
            for (let i = 0; i < this.guestTypeData.length; i++) {
              this.guestTypeData[i].check_in = this.searchItem.checkIn;
              this.guestTypeData[i].check_out = this.searchItem.checkOut;
              this.guestTypeData[i].total_price = this.cart_total;
              this.guestTypeData[i].city_id = this.searchItem.city.city_id;
              this.guestTypeData[i].city_name = this.searchItem.city.city_name;
              this.guestTypeData[i].near_hospital_id =
                this.searchItem.hospital.near_hospital_id;
              this.guestTypeData[i].near_hospital_name =
                this.searchItem.hospital.near_hospital_name;
              this.guestTypeData[i].selected_property_name =
                this.$store.state.booking.selected_property_name;
              this.guestTypeData[i].selected_property_type =
                this.$store.state.booking.selected_property_type;
              this.guestTypeData[i].selected_room_type =
                this.$store.state.booking.selected_room_type;
              this.guestTypeData[i].account_id =
                this.$store.state.booking.account_id;
              this.guestTypeData[i].partner_id =
                this.$store.state.booking.partner_id;
              this.guestTypeData[i].partner_sub_id =
                this.$store.state.booking.partner_sub_id;
              this.guestTypeData[i].Property_id =
                this.$store.state.booking.Property_id;
              this.guestTypeData[i].room_txn_id =
                this.$store.state.booking.room_txn_id;
            }
            this.guestFormDetails.guestDataObj = this.guestTypeData;

             this.saveBookingData(this.guestFormDetails);
             this.$router.replace("/");

          })
          .onCancel(() => {});
      }
    },
    addGuestData() {
      this.$refs.guestForm.validate().then((valid) => {
        if (!valid) {
          this.$q.notify({
            color: "negative",
            message: "Please Fill Remaining Details Properly",
          });
        } else {
          if (
            this.guestFormDetails.first_name.length > 0 &&
            this.guestFormDetails.last_name.length > 0 &&
            this.guestFormDetails.gender.length > 0 &&
            this.guestFormDetails.guest_type.length > 0 &&
            this.guestFormDetails.nationality.length > 0
          ) {
            if (this.guestFormDetails.guest_type == "Adult") {
              if (this.$store.state.account.adult_count == 0) {
                this.$q.notify({
                  type: "negative",
                  message: "Please Check Adult Details or Count of Adult",
                });
              } else {
                this.saveGuestData();
                this.$store.state.account.adult_count =
                  parseInt(this.$store.state.account.adult_count) - 1;
              }
            }
            if (this.guestFormDetails.guest_type == "Children") {
              if (this.$store.state.account.child_count == 0) {
                this.$q.notify({
                  type: "negative",
                  message: "Please Check Children Details or Count of Children",
                });
              } else {
                this.saveGuestData();
                this.$store.state.account.child_count =
                  parseInt(this.$store.state.account.child_count) - 1;
              }
            }
            if (this.guestFormDetails.guest_type == "Infant") {
              if (this.$store.state.account.infant_count == 0) {
                this.$q.notify({
                  type: "negative",
                  message: "Please Check Infant Details or Count of Infants",
                });
              } else {
                this.saveGuestData();
                this.$store.state.account.infant_count =
                  parseInt(this.$store.state.account.infant_count) - 1;
              }
            }
          } else {
            this.$q.notify({
              type: "negative",
              message: "Please Enter Details Properly",
            });
          }
        }
      });
    },
    noOfDays(date1, date2) {
      date1 = date1.split("/");
      date2 = date2.split("/");
      date1 = new Date(date1[0], date1[1], date1[2]);
      date2 = new Date(date2[0], date2[1], date2[2]);
      var date1_unixtime = parseInt(date1.getTime() / 1000);
      var date2_unixtime = parseInt(date2.getTime() / 1000);
      var timeDifference = date2_unixtime - date1_unixtime;
      var timeDifferenceInHours = timeDifference / 60 / 60;
      var timeDifferenceInDays = timeDifferenceInHours / 24;
      return timeDifferenceInDays;
    },
    saveGuestData() {
      var guestObj = {
        // guest_name: this.guestFormDetails.guest_name,

        first_name: this.guestFormDetails.first_name,
        last_name: this.guestFormDetails.last_name,
        guest_type: this.guestFormDetails.guest_type,
        gender: this.guestFormDetails.gender,
        nationality: this.guestFormDetails.nationality,
        country_name:
          this.guestFormDetails.country_name == ""
            ? "India"
            : this.guestFormDetails.country_name.name,
        passport_number:
          this.guestFormDetails.passport_number == ""
            ? "-"
            : this.guestFormDetails.passport_number,
      };
      this.guestTypeData.push(guestObj);
      this.guestFormDetails.first_name = "";
      this.guestFormDetails.last_name = "";
      this.guestFormDetails.guest_type = "";
      this.guestFormDetails.gender = "";
      // this.guestFormDetails.nationality = "";
      // this.guestFormDetails.country_name = "";
      // this.guestFormDetails.passport_number = "";
    },

    backTo() {
      this.$router.push("/");
      this.confirm = false;
    },
    deleteItem(item) {
      const index = this.guestTypeData.indexOf(item);
      this.guestTypeData.splice(index, 1);
      this.$q.notify("Guest Details deleted!");
      if (item.guest_type == "Adult") {
        this.$store.state.account.adult_count =
          parseInt(this.$store.state.account.adult_count) + 1;
      }
      if (item.guest_type == "Children") {
        this.$store.state.account.child_count =
          parseInt(this.$store.state.account.child_count) + 1;
      }
      if (item.guest_type == "Infant") {
        this.$store.state.account.infant_count =
          parseInt(this.$store.state.account.infant_count) + 1;
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  .grad
  background-image: linear-gradient(to bottom, green 20%, blue 10%)
</style>
