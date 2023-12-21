<template>
  <q-page-container class="bg-indigo-1">
    <headerTag />
    <!--Website Start code-->

    <q-page style="padding-top: 60px" class="q-pa-md gt-xs">
      <div class="justify-center grad">
        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card flat :class="this.class_val" class="cursor-pointer">
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
                  @click="backpageForHotellist"
                />
                <q-breadcrumbs-el
                  label="Hotel Information"
                  icon="hotel"
                  class="text-bold text-h6"
                  to="/hotelName/:hotelInfo"
                />
              </q-breadcrumbs>
              <q-space />
              <!-- <q-btn
                size="sm"
                outline
                rounded
                color="primary"
                class="text-weight-bold q-ml-xl"
                @click="confirm = true"
                >BACK
              </q-btn> -->
            </q-toolbar>
            <q-card-section v-for="item in hotelInfo_arr" :key="item.txn_id">
              <!-- <div class="col-3" style="width: 5px; height: 20px; float: right;z-index: -1">
                <img
                  style="
                  float: right;
                    width: 850px;
                    padding-left: 700px;

                    cursor: pointer;
                    z-index: -1;
                  "
                  @click="handleCustomEvent(`${redcliffpath}`)"
                  src="../assets/logos/MH OFFER 2.webp"
                />
              </div>
              <div class="text-h6 q-pa-sm">
                <strong class="q-mr-sm"
                  >{{ item.sub_property_name }} ({{
                    item.property_name
                  }})</strong
                >
              </div>
              <div class="text-black" style="margin-left: 10px">
                {{ item.address[0].address }}
              </div>
              <div class="q-pa-sm">
                <q-icon color="secondary" name="mdi-hospital" size="sm" />
                <span style="font-size: 15px">
                  <strong>
                    Near Hospital :
                    {{ searchItem.hospital.near_hospital_name }}</strong
                  >
                </span>
                <q-icon color="secondary" name="mdi-map-marker" size="xs" />
                <span style="font-size: 15px">
                  <strong>
                    {{ searchItem.city.city_name }}, India
                  </strong></span
                >
              </div> -->
              <!-- redclif image is solved here is the code below -->

              <div style="display: flex; justify-content: space-between">
                <div class="left">
                  <div
                    class="text-h6 q-pa-sm"
                    style="user-select: none; cursor: auto"
                  >
                    <strong class="q-mr-sm"
                      >{{ item.sub_property_name }} ({{
                        item.property_name
                      }})</strong
                    >
                    <q-icon>
                            <img
                              style="width: 150px; margin-left: 130px"
                              src="~assets/logos/PF (1).webp"
                            />
                          </q-icon>
                  </div>
                  <div class="text-black" style="margin-left: 10px">
                    {{ item.address[0].address }}
                  </div>
                  <div class="q-pa-sm">
                    <q-icon color="secondary" name="mdi-hospital" size="sm" />
                    <span style="font-size: 15px">
                      <strong>
                        Near Hospital :
                        {{ searchItem.hospital.near_hospital_name }}</strong
                      >
                    </span>
                    <q-icon color="secondary" name="mdi-map-marker" size="xs" />
                    <span style="font-size: 15px">
                      <strong>
                        {{ searchItem.city.city_name }}, India
                      </strong></span
                    >
                  </div>
                </div>
                <div >
                  <img
                    style="width: 185px; cursor: pointer"
                    @click="handleCustomEvent(`${redcliffpath}`)"
                    src="../assets/logos/MH OFFER 2.webp"
                  />
                </div>
              </div>

              <!-- From line 42 to 81 -->
              <!-- <div class="q-pa-sm">
                <q-icon
                  color="secondary"
                  name="mdi-office-building"
                  size="sm"
                />
                <span style="font-size: 15px">
                  <strong> {{ searchItem.hospital.address }}</strong>
                </span>
              </div> -->

              <div class="text-caption q-ml-sm" style="font-size: 11px"></div>
              <div class="row">
                <div class="col-4 q-pa-sm">
                  <q-card class="my-card" style="border-radius: 30px">
                    <q-img
                      :src="`${hotelImgpath}${item.upload_image}`"
                      :ratio="16 / 9"
                      style="height: 280px"
                      @click="openDialog(item)"
                    />
                  </q-card>
                </div>
                <div class="col-4 q-pa-sm">
                  <q-card class="my-card" style="border-radius: 30px">
                    <q-img
                      :src="`${hotelImgpath}${item.room_image_1}`"
                      :ratio="16 / 9"
                      @click="openDialog1(item)"
                    />
                  </q-card>
                  <div class="row" style="padding-top: 10px">
                    <div class="col-6 q-pa-sm">
                      <q-card class="my-card" style="border-radius: 15px">
                        <q-img
                          :src="`${hotelImgpath}${item.room_image_2}`"
                          :ratio="1 / 1"
                          @click="openDialog2(item)"
                        />
                      </q-card>
                    </div>
                    <div class="col-6 q-pa-sm">
                      <q-card class="my-card" style="border-radius: 15px">
                        <q-img
                          :src="`${hotelImgpath}${item.room_image_3}`"
                          :ratio="1 / 1"
                          @click="openDialog3(item)"
                        />
                      </q-card>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <q-card style="border-radius: 30px">
                    <q-card-section>
                      <div style="font-size: 16px; font-weight: 900">
                        {{ item.room_category }} ( {{ item.room_type }})
                        <span
                          class="row"
                          style="font-size: 12px; margin: 5px 0px"
                        >
                          {{ searchItem.hospital.near_hospital_name }} is
                          {{ propDetails[0].kilo_meter }} KM from
                          {{ item.getPropertydata.sub_property_name }}
                        </span>
                        <span class="row" style="font-size: 11px">
                          Check-in :
                          {{
                            moment(searchItem.checkIn).format(
                              "dddd, DD MMM YYYY"
                            )
                          }}
                          ({{
                            moment(
                              item.getPropertydata.checkIn_time,
                              "HH:mm"
                            ).format("HH:mm a")
                          }})
                        </span>
                        <span class="row" style="font-size: 11px"
                          >Check-out :
                          {{
                            moment(searchItem.checkOut).format(
                              "dddd, DD MMM YYYY"
                            )
                          }}
                          ({{
                            moment(
                              item.getPropertydata.checkOut_time,
                              "HH:mm"
                            ).format("HH:mm a")
                          }})
                        </span>
                        <span class="row" style="font-size: 11px">
                          Guests : {{ searchItem.adult_count }} Adults &
                          {{ searchItem.child_count }} Kids
                        </span>
                      </div>

                      <div class="row justify-end">
                        <div class="row col-12 justify-end">
                          <span style="font-size: 16px; padding-left: 100px"
                            >Room Price</span
                          >
                          &nbsp;
                          <span
                            style="font-size: 16px; font-weight: 900"
                            class="text-grey"
                          >
                            <b
                              ><s
                                >₹{{
                                  searchItem.adult_count >= 4
                                    ? 2 * item.price
                                    : item.price
                                }}
                              </s></b
                            ></span
                          >
                          <span style="font-size: 8px; font-weight: 900">
                            <br />
                            <!-- Partner Offer% {{ item.partner_specialOffer }}
                    Partner Offer Amount  {{ parseInt(item.price *(item.partner_specialOffer/100)) }}
                    Base Price {{ item.price - parseInt(item.price *(item.partner_specialOffer/100)) }}
                    Early Bird Offer%  {{ item.property_specialOffer }}
                    Early Bird Offer Amount {{ parseInt(item.price*item.property_specialOffer/100) }}
                    MH Offer {{ mangohomzOffers_arr[0].offer_price }}
                    GST% {{ item.gst_per }}
                    GST Amount {{ parseInt(item.price*item.gst_per/100) }} -->
                          </span>
                        </div>
                        <div class="row col-12 justify-end">
                          <span style="font-size: 16px; padding-left: 100px"
                            >MH Price</span
                          >
                          &nbsp;
                          <span
                            style="
                              font-size: 22px;
                              font-weight: 900;
                              padding-left: 10px;
                            "
                          >
                            ₹{{
                              searchItem.adult_count >= 4
                                ? 2 * item.price -
                                  parseInt(
                                    item.price *
                                      (item.partner_specialOffer / 100)
                                  ) -
                                  parseInt(
                                    (item.price * item.property_specialOffer) /
                                      100
                                  )
                                : item.price -
                                  parseInt(
                                    item.price *
                                      (item.partner_specialOffer / 100)
                                  ) -
                                  parseInt(
                                    (item.price * item.property_specialOffer) /
                                      100
                                  )
                            }}
                            <!-- {{
                              searchItem.adult_count >= 4
                                ? 2 *
                                  (item.price -
                                    parseInt(
                                      item.price *
                                        (item.partner_specialOffer / 100)
                                    ) -
                                    parseInt(
                                      (item.price *
                                        item.property_specialOffer) /
                                        100
                                    ) -
                                    mangohomzOffers_arr[0].offer_price)
                                : item.price -
                                  parseInt(
                                    item.price *
                                      (item.partner_specialOffer / 100)
                                  ) -
                                  parseInt(
                                    (item.price * item.property_specialOffer) /
                                      100
                                  ) -
                                  mangohomzOffers_arr[0].offer_price
                            }} -->

                            <!-- {{parseInt(parseInt(item.price  + parseInt(item.price*(item.gst_per/100)))) -
parseInt(parseInt(mangohomzOffers_arr[0].offer_price  + parseInt(item.price /(item.property_specialOffer*100))))
}} -->

                            <!-- {{
gstOnPrice
}} -->
                          </span>
                        </div>
                      </div>

                      <!-- <div
                        class="row justify-end"
                        style="font-size: 22px; font-weight: 900"
                      >
                        ₹{{ item.price }}
                      </div> -->
                      <span class="row justify-end" style="font-size: 10px"
                        >+ ₹{{
                          parseInt(
                            ((searchItem.adult_count >= 4
                              ? 2 * item.price
                              : item.price) *
                              item.gst_per) /
                              100
                          )
                        }}
                        Taxes
                      </span>
                      <span
                        class="row text-bold justify-end"
                        style="font-size: 10px"
                        ><strong style="color: red">{{
                          searchItem.adult_count >= 4
                            ? `${item.units} For 2 Rooms`
                            : item.units
                        }}</strong></span
                      >

                      <div>
                        <span
                          class="text-bold"
                          style="margin-right: 90px"
                          v-if="item.no_of_avail_rooms == 0"
                          >For Booking Please Contact 8929982655</span
                        >
                      </div>
                    </q-card-section>

                    <q-separator></q-separator>
                    <div class="row justify-end q-pa-sm">
                      <q-btn
                        size="sm"
                        rounded
                        :color="
                          item.no_of_avail_rooms == 0 ? 'negative' : 'primary'
                        "
                        class="text-weight-bold"
                        :disabled="item.no_of_avail_rooms == 0"
                        @click="openUserRegDialog(item)"
                      >
                        {{
                          item.no_of_avail_rooms == 0 ? "Sold Out" : "Book Now"
                        }}
                      </q-btn>
                    </div>
                    <div class="rig">
                          <img
                            style="width: 185px; height: 90px;margin-left:120px"
                            src="../assets/web_site/Why MH.webp"
                          />
                        </div>
                    <q-separator></q-separator>
                    <q-card-section>
                      <div class="row">

                        <div
                          class="col-12 text-primary"
                          style="font-size: 16px; font-weight: 900"
                        >
                          Amenities:
                        </div>
                        <div
                          class="col-6 text-justify text-subtitle2 amenities_hori_line"
                          v-for="(item2, i) in item.facilities"
                          :key="item2.id"
                        >
                          <q-item dense class="cell-class">
                            <q-item-section avatar class="text-right">
                              <q-icon
                                color="secondary"
                                :name="item.icon_image[i]"
                              />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label
                                class="text-black text-bold text-left"
                                style="font-size: 12px"
                                >{{ item.facilities[i] }}</q-item-label
                              >
                            </q-item-section>
                          </q-item>
                        </div>
                      </div>
                      <!-- <div class="row">
                       <div
                          class="col-12 text-primary"
                          style="font-size: 16px; font-weight: 900"
                        >
                          Others:
                       </div>
                        <div class="col-6 text-justify text-subtitle2 "
                        >
                         <q-item dense class="cell-class ">
                             <q-item-section>
                              <q-item-label
                                class="text-black text-bold text-left"
                                style="font-size:12px;"
                                >{{ item.other_amenities }}</q-item-label
                              >
                            </q-item-section>
                         </q-item>
                        </div>
                        </div> -->
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <div class="row">
                <div class="col-8 q-mt-md">
                  <q-card style="border-radius: 30px">
                    <q-card-section>
                      <div class="row">
                        <div
                          class="col-12 text-primary"
                          style="font-size: 16px; font-weight: 900"
                        >
                          Property Description:
                        </div>
                        <div class="col-12 text-justify text-subtitle2">
                          {{ item.getPropertydata.property_description }}
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-3 q-ml-md q-mt-md" style="width: 300px">
                  <q-card style="border-radius: 30px">
                    <q-card-section>
                      <div class="row">
                        <div
                          class="col-8 text-primary"
                          style="font-size: 16px; font-weight: 900"
                        >
                          What guests said
                        </div>
                        <div class="col-4">
                          <q-icon
                            ><q-img
                              src="~assets/logos/MHmini_logo_128x128.png"
                            ></q-img
                          ></q-icon>
                          <q-chip color="secondary" dark dense size="sm"
                            >{{ rating }} / 5</q-chip
                          >
                          <q-rating
                            v-model="rating"
                            size="1em"
                            :max="5"
                            color="secondary"
                            readonly
                          />
                        </div>
                        <!-- <div class="col-12 text-caption text-black">
                          347 reviews<br />
                          Clean Room | Clean Property | Near Hospital
                        </div> -->
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <q-dialog v-model="thumbnail">
          <q-card style="width: 600px; height: 500px">
            <q-card-section>
              <div class="text-h6 text-center text-bold q-pa-sm">
                {{ this.sub_property_name }}
              </div>
              <!-- FOR WINDOWS  -->
              <!-- <q-carousel arrows swipeable v-model="slide" thumbnails infinite>
                <q-carousel-slide
                  :name="1"
                  :img-src="`mh/mh_documents/property_partner_documents/${this.hotel_image1}`"
                />
                <q-carousel-slide
                  :name="2"
                  :img-src="`mh/mh_documents/property_partner_documents/${this.room_image1}`"
                />
                <q-carousel-slide
                  :name="3"
                  :img-src="`mh/mh_documents/property_partner_documents/${this.room_image2}`"
                />
                <q-carousel-slide
                  :name="4"
                  :img-src="`mh/mh_documents/property_partner_documents/${this.room_image3}`"
                />
              </q-carousel> -->
              <!-- FOR SERVER UPLOADING -->
              <q-carousel arrows swipeable v-model="slide" thumbnails infinite>
                <q-carousel-slide
                  :name="1"
                  :img-src="`${hotelImgpath}${this.hotel_image1}`"
                />
                <q-carousel-slide
                  :name="2"
                  :img-src="`${hotelImgpath}${this.room_image1}`"
                />
                <q-carousel-slide
                  :name="3"
                  :img-src="`${hotelImgpath}${this.room_image2}`"
                />
                <q-carousel-slide
                  :name="4"
                  :img-src="`${hotelImgpath}${this.room_image3}`"
                />
              </q-carousel>
            </q-card-section>
          </q-card>
        </q-dialog>
        <q-dialog v-model="userRegDialog" no-backdrop-dismiss>
          <q-layout view="Lhh lpR fff" container class="bg-white">
            <q-page-container>
              <q-page padding>
                <div class="gt-xs">
                  <q-btn
                    dark
                    padding="none"
                    style="margin-left: 490px"
                    icon="close"
                    color="primary"
                    @click="closeRegDialog"
                  >
                    <q-tooltip>close</q-tooltip>
                  </q-btn>
                </div>
                <div class="lt-sm">
                  <q-btn
                    dark
                    padding="none"
                    style="margin-left: 290px"
                    icon="close"
                    color="primary"
                    @click="closeRegDialog"
                  >
                    <q-tooltip>close</q-tooltip>
                  </q-btn>
                </div>

                <div style="text-align: center">
                  Want to Save more?
                  <span class="text-indigo-9 text-bold">Please Register</span>
                </div>
                <div style="text-align: center">
                  <q-btn
                    class="text-bold"
                    size="15px"
                    color="indigo-9"
                    role="link"
                    @click="moveToCart(hotelInfo_arr)"
                    style="
                      margin-top: 20px;
                      width: 30%;
                      border-radius: 10px;
                      border: none;
                      box-shadow: none;
                      text-transform: none;
                    "
                    label="Book Anyway"
                  >
                    <q-tooltip>Book Anyway</q-tooltip>
                  </q-btn>
                  <q-space />
                  <div
                    style="
                      display: flex;
                      justify-content: space-around;
                      margin-top: 10px;
                    "
                  >
                    <q-btn
                      :class="{ selected: isSelected('signup') }"
                      style="
                        margin-top: 20px;
                        width: 20%;
                        border-radius: 10px;
                        border: 1px solid #65b8db;
                        box-shadow: none;
                        text-transform: none;
                      "
                      v-model="tab"
                      value="signup"
                      dense
                      class="text-indigo-9 text-bold"
                      active-class="bg-white text-indigo-9"
                      label="Signup"
                      @click.native="
                        tab = 'signup';
                        selectbtn('signup');
                      "
                    />
                    <q-btn
                      :class="{ selected: isSelected('login') }"
                      style="
                        margin-top: 20px;
                        width: 20%;
                        border-radius: 10px;
                        border: 1px solid #65b8db;
                        box-shadow: none;
                        text-transform: none;
                      "
                      v-model="tab"
                      value="login"
                      dense
                      class="text-indigo-9 text-bold"
                      active-class="bg-white text-indigo-9"
                      label="Login"
                      @click.native="
                        tab = 'login';
                        selectbtn('login');
                      "
                    />
                  </div>
                </div>

                <q-card bordered style="margin-top: 20px" class="q-mt-xs">
                  <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="login">
                      <div class="row col-12 justify-center">
                        <q-input
                          class="q-mr-sm col-9"
                          dense
                          outlined
                          rounded
                          label="Enter Mobile Number *"
                          hide-bottom-space
                          style="width: 250px"
                          label-color="black"
                          mask="##########"
                          v-model="loginUserData.phone"
                          @input="checkPhoneValidity"
                          :rules="[required('Mobile No'), validateMobileNumber]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-phone"
                              color="indigo-9"
                            /> </template
                        ></q-input>
                      </div>
                      <div class="row col-12 justify-center">
                        <q-btn
                          class="text-white text-bold bg-indigo-9 q-mr-sm"
                          label="Login"
                          @click="loginUserAcc"
                          :disabled="!isValidPhone"
                          style="
                            margin-top: 10px;
                            width: 20%;
                            border-radius: 10px;
                            border: none;
                            box-shadow: none;
                            text-transform: none;
                          "
                        />
                      </div>
                      <q-dialog v-model="otpDialog" persistent>
                        <q-card>
                          <q-card-section
                            class="row items-center"
                            align="center"
                          >
                            <div class="row col-12">
                              <div class="text-body text-bold q-mb-sm">
                                Please Enter One Time Password(OTP)
                              </div>
                              <div class="row col-12">
                                <q-input
                                  outlined
                                  v-model="otpInput.one"
                                  autofocus
                                  class="q-mr-sm"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  ref="otpOne"
                                  @input.native="
                                    moveToNextField($event, 'otpTwo')
                                  "
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.two"
                                  class="q-mr-sm"
                                  :autofocus="this.otpInput.one != ''"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  ref="otpTwo"
                                  @input.native="
                                    moveToNextField($event, 'otpThree')
                                  "
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.three"
                                  class="q-mr-sm"
                                  label=""
                                  style="width: 45px; font-size: 25px"
                                  ref="otpThree"
                                  mask="#"
                                  @input.native="
                                    moveToNextField($event, 'otpFour')
                                  "
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.four"
                                  class="q-mr-sm"
                                  label=""
                                  style="width: 45px; font-size: 25px"
                                  ref="otpFour"
                                  mask="#"
                                  @input.native="
                                    moveToNextField($event, 'otpFive')
                                  "
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.five"
                                  class="q-mr-sm"
                                  label=""
                                  style="width: 45px; font-size: 25px"
                                  ref="otpFive"
                                  mask="#"
                                  @input.native="
                                    moveToNextField($event, 'otpSix')
                                  "
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.six"
                                  class="q-mr-sm"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  ref="otpSix"
                                />
                              </div>
                            </div>
                          </q-card-section>

                          <q-card-actions class="row col-12" align="right">
                            <q-btn
                              flat
                              label="Cancel"
                              color="primary"
                              v-close-popup
                            />
                            <q-btn
                              flat
                              label="Confirm"
                              color="primary"
                              @click="confirmOtp()"
                            />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                      <!-- <q-dialog v-model="otpDialog" persistent>
                        <q-card>
                          <q-card-section
                            class="row items-center"
                            align="center"
                          >
                            <div class="row col-12">
                              <div class="text-body text-bold q-mb-sm">
                                Please Enter One Time Password(OTP)
                              </div>
                              <div class="row col-12">
                                <q-input
                                  outlined
                                  v-model="otpInput.one"
                                  autofocus
                                  class="q-mr-sm"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  v-shift-focus
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.two"
                                  class="q-mr-sm"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  v-shift-focus
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.three"
                                  class="q-mr-sm"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  v-shift-focus
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.four"
                                  class="q-mr-sm"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  v-shift-focus
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.five"
                                  class="q-mr-sm"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  v-shift-focus
                                />
                                <q-input
                                  outlined
                                  v-model="otpInput.six"
                                  class="q-mr-sm"
                                  label=""
                                  mask="#"
                                  style="width: 45px; font-size: 25px"
                                  v-shift-focus
                                />
                              </div>
                            </div>
                          </q-card-section>

                          <q-card-actions class="row col-12" align="right">
                            <q-btn
                              flat
                              label="Cancel"
                              color="primary"
                              v-close-popup
                            />
                            <q-btn
                              flat
                              label="Confirm"
                              color="primary"
                              @click="confirmOtp()"
                            />
                          </q-card-actions>
                        </q-card>
                      </q-dialog> -->
                    </q-tab-panel>
                    <q-tab-panel name="signup">
                      <q-form
                        ref="userSignup"
                        class="row col-12 justify-center"
                      >
                        <q-input
                          class="q-mr-sm q-mb-xs"
                          dense
                          outlined
                          rounded
                          label="Full Name *"
                          hide-bottom-space
                          style="width: 200px"
                          label-color="black"
                          v-model="signupUserData.fullName"
                          :rules="[required('Name')]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-account"
                              color="indigo-9"
                            /> </template
                        ></q-input>
                        <q-input
                          class="q-mr-sm q-mb-xs"
                          dense
                          outlined
                          rounded
                          label="Mobile Number *"
                          mask="##########"
                          hide-bottom-space
                          style="width: 200px"
                          label-color="black"
                          v-model="signupUserData.mobileNumber"
                          :rules="[required('Phone no'), validateMobileNumber]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-phone"
                              color="indigo-9"
                            /> </template
                        ></q-input>
                        <q-input
                          class="q-mr-sm q-mb-xs"
                          dense
                          outlined
                          rounded
                          label="Email Id *"
                          hide-bottom-space
                          style="width: 200px"
                          label-color="black"
                          v-model="signupUserData.emailId"
                          :rules="[required('Email'), email()]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-email"
                              color="indigo-9"
                            /> </template
                        ></q-input>
                        <q-select
                          v-model="signupUserData.country"
                          class="q-mr-sm q-mb-xs"
                          rounded
                          outlined
                          @filter="filterFnCountry"
                          :options="countryOptions"
                          fill-input
                          use-input
                          @input="checkstate()"
                          hide-selected
                          option-value="name"
                          option-label="name"
                          label="Country *"
                          :rules="[required('Country')]"
                          label-color="black"
                          dense
                          style="width: 200px"
                          lazy-rules
                          hide-bottom-space
                        >
                          <template v-slot:prepend>
                            <q-icon name="mdi-map-marker" color="indigo-9" />
                          </template>
                        </q-select>
                        <q-select
                          ref="indiastate"
                          v-if="indiastate == true"
                          dense
                          rounded
                          outlined
                          use-input
                          fill-input
                          hide-selected
                          :options="stateOptions"
                          @filter="filterFnStates"
                          options-dense
                          option-label="state_name"
                          option-value="state_id"
                          label="State *"
                          v-model="signupUserData.state"
                          hide-bottom-space
                          class="q-mr-sm q-mb-xs"
                          label-color="black"
                          style="width: 200px"
                          :rules="[required('State')]"
                          ><template v-slot:prepend>
                            <q-icon name="mdi-map-marker" color="indigo-9" />
                          </template>
                        </q-select>
                        <q-input
                          ref="otherstate"
                          v-if="otherstate == true"
                          class="q-mr-sm q-mb-xs"
                          dense
                          outlined
                          rounded
                          hide-bottom-space
                          style="width: 200px"
                          v-model="signupUserData.state1"
                          label="State *"
                          label-color="black"
                          :rules="[required('State')]"
                          ><template v-slot:prepend>
                            <q-icon
                              name="mdi-map-marker"
                              color="indigo-9"
                            /> </template
                        ></q-input>

                        <q-input
                          class="q-mr-sm q-mb-xs"
                          dense
                          outlined
                          rounded
                          hide-bottom-space
                          style="width: 200px"
                          v-model="signupUserData.city"
                          label="City *"
                          label-color="black"
                          :rules="[required('City')]"
                          ><template v-slot:prepend>
                            <q-icon
                              name="mdi-home-city"
                              color="indigo-9"
                            /> </template
                        ></q-input>

                        <q-input
                          class="q-mr-sm q-mb-xs"
                          dense
                          outlined
                          rounded
                          label="Pin Code *"
                          hide-bottom-space
                          style="width: 200px"
                          label-color="black"
                          v-model="signupUserData.pincode"
                          :rules="[required('Pincode')]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-map-marker"
                              color="indigo-9"
                            /> </template
                        ></q-input>
                        <div class="row col-12 q-mt-md">
                          <span class="text-bold"
                            >In Which Cities Mangohomz Services you want?</span
                          >
                          <div class="q-pa-md text-black">
                            <div class="q-gutter-sm">
                              <q-checkbox
                                color="indigo-9"
                                v-model="signupUserData.upcomingCities"
                                val="delhi"
                                label="Delhi"
                              />
                              <q-checkbox
                                color="indigo-9"
                                v-model="signupUserData.upcomingCities"
                                val="hyderabad"
                                label="Hyderabad"
                              />
                              <q-checkbox
                                color="indigo-9"
                                v-model="signupUserData.upcomingCities"
                                val="chennai"
                                label="Chennai"
                              />
                              <q-checkbox
                                color="indigo-9"
                                v-model="signupUserData.upcomingCities"
                                val="kolkata"
                                label="Kolkata"
                              />
                              <q-checkbox
                                color="indigo-9"
                                v-model="signupUserData.upcomingCities"
                                val="banglore"
                                label="Banglore"
                              />
                              <q-checkbox
                                color="indigo-9"
                                v-model="signupUserData.upcomingCities"
                                val="Vellore"
                                label="Vellore"
                              />
                              <q-checkbox
                                color="indigo-9"
                                v-model="signupUserData.upcomingCities"
                                val="mumbai"
                                label="Mumbai"
                              />
                              <q-checkbox
                                color="indigo-9"
                                v-model="upcomingCities"
                                label="Others"
                              />
                              <div>
                                <q-input
                                  class="q-mr-sm q-mb-sm"
                                  dense
                                  label="Enter City "
                                  hide-bottom-space
                                  style="width: 250px"
                                  label-color="black"
                                  v-if="this.upcomingCities == true"
                                >
                                  <template v-slot:prepend>
                                    <q-icon
                                      name="mdi-city"
                                      color="indigo-9"
                                    /> </template
                                ></q-input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </q-form>
                      <div class="justify-center row q-pa-sm">
                        <q-btn
                          class="items-cente"
                          label="Signup"
                          color="primary"
                          style="
                            width: 100px;
                            text-transform: none;
                            font-weight: bold;
                            font-size: 15px;
                            border-radius: 10%;
                          "
                          @click="saveUserRegDetails()"
                        >
                        </q-btn>
                      </div>

                      <div
                        class="col-12 lt-sm"
                        style="width: 260px; height: 75px; float: left"
                      >
                        <img
                          style="float: left; width: 240px; cursor: pointer"
                          @click="handleCustomEvent(`${redcliffpath}`)"
                          src="../assets/web_site/Aston 2 (1).webp"
                        />
                      </div>
                      <div
                        class="col-12 gt-xs"
                        style="display: flex; justify-content: center"
                      >
                        <q-img
                          style="width: 1010px; cursor: pointer"
                          @click="handleCustomEvent(`${redcliffpath}`)"
                          src="~assets/web_site/Aston 2 (1).webp"
                        ></q-img>
                      </div>
                    </q-tab-panel>
                  </q-tab-panels>
                </q-card>
              </q-page>
            </q-page-container>
          </q-layout>
        </q-dialog>
        <!-- <q-dialog v-model="signupotpDialog" persistent>
          <q-card>
            <q-card-section class="row items-center" align="center">
              <div class="row col-12">
                <div class="text-body text-bold q-mb-sm">
                  Please Enter One Time Password(OTP)
                </div>
                <div class="row col-12">
                  <q-input
                    outlined
                    v-model="otpInput.one"
                    autofocus
                    class="q-mr-sm"
                    label=""
                    mask="#"
                    style="width: 45px; font-size: 25px"
                    ref="otpOne"
                    @input.native="moveToNextField($event, 'otpTwo')"
                  />
                  <q-input
                    outlined
                    v-model="otpInput.two"
                    class="q-mr-sm"
                    label=""
                    mask="#"
                    style="width: 45px; font-size: 25px"
                    ref="otpTwo"
                    @input.native="moveToNextField($event, 'otpThree')"
                  />
                  <q-input
                    outlined
                    v-model="otpInput.three"
                    class="q-mr-sm"
                    label=""
                    style="width: 45px; font-size: 25px"
                    ref="otpThree"
                    mask="#"
                    @input.native="moveToNextField($event, 'otpFour')"
                  />
                  <q-input
                    outlined
                    v-model="otpInput.four"
                    class="q-mr-sm"
                    label=""
                    style="width: 45px; font-size: 25px"
                    ref="otpFour"
                    mask="#"
                    @input.native="moveToNextField($event, 'otpFive')"
                  />
                  <q-input
                    outlined
                    v-model="otpInput.five"
                    class="q-mr-sm"
                    label=""
                    style="width: 45px; font-size: 25px"
                    ref="otpFive"
                    mask="#"
                    @input.native="moveToNextField($event, 'otpSix')"
                  />
                  <q-input
                    outlined
                    v-model="otpInput.six"
                    class="q-mr-sm"
                    label=""
                    mask="#"
                    style="width: 45px; font-size: 25px"
                    ref="otpSix"
                  />
                </div>
              </div>
            </q-card-section>

            <q-card-actions class="row col-12" align="right">
              <q-btn flat label="Cancel" color="primary" v-close-popup />
              <q-btn
                flat
                label="Confirm"
                color="primary"
                @click="signupconfirmOtp()"
              />
            </q-card-actions>
          </q-card>
        </q-dialog> -->
        <!-- <q-dialog v-model="userRegDialog" no-backdrop-dismiss>
          <q-layout view="Lhh lpR fff" container class="bg-white">
            <q-page-container>
              <q-page padding>
                <div class="gt-xs">
                  <q-btn
                    dark
                    padding="none"
                    style="margin-left: 490px"
                    icon="close"
                    color="primary"
                    @click="closeRegDialog"
                  >
                    <q-tooltip>close</q-tooltip>
                  </q-btn>
                </div>
                <div class="lt-sm">
                  <q-btn
                    dark
                    padding="none"
                    style="margin-left: 290px"
                    icon="close"
                    color="primary"
                    @click="closeRegDialog"
                  >
                    <q-tooltip>close</q-tooltip>
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <div class="q-gutter-y-md">
                    <div class="">
                      Want to Save more?
                      <span class="text-indigo-9 text-bold"
                        >Please Register</span
                      >
                      or
                      <q-btn>
                        <span
                          @click="moveToCart(hotelInfo_arr)"
                          class="text-green text-bold"
                          style="cursor: pointer"
                          >Continue Booking anyway?</span
                        ></q-btn
                      >
                    </div>
                    <q-card class="q-mt-xs">
                      <q-tabs
                        v-model="tab"
                        dense
                        class="text-white text-bold bg-indigo-9"
                        active-color="white"
                        indicator-color="white"
                        align="justify"
                        narrow-indicator
                      >
                        <q-tab name="login" label="Login" />
                        <q-tab name="signup" label="Signup" />
                      </q-tabs>
                      <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="login">
                          <div class="row col-12 justify-center">
                            <q-input
                              class="q-mr-sm q-mb-sm col-9"
                              dense
                              outlined
                              rounded
                              label="Enter Mobile Number *"
                              hide-bottom-space
                              style="width: 250px"
                              label-color="black"
                              mask="##########"
                              v-model="loginUserData.phone"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-phone"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-btn
                              rounded
                              color="indigo-9"
                              label="Log in"
                              @click="loginUserAcc"
                              class="col-3"
                            />
                          </div>
                          <q-dialog v-model="otpDialog" persistent>
                            <q-card>
                              <q-card-section
                                class="row items-center"
                                align="center"
                              >
                                <div class="row col-12">
                                  <div class="text-body text-bold q-mb-sm">
                                    Please Enter One Time Password(OTP)
                                  </div>
                                  <div class="row col-12">
                                    <q-input
                                      outlined
                                      v-model="otpInput.one"
                                      autofocus
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.two"
                                      class="q-mr-sm"
                                      :autofocus="this.otpInput.one != ''"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.three"
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.four"
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.five"
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.six"
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                  </div>
                                </div>
                              </q-card-section>

                              <q-card-actions class="row col-12" align="right">
                                <q-btn
                                  flat
                                  label="Cancel"
                                  color="primary"
                                  v-close-popup
                                />
                                <q-btn
                                  flat
                                  label="Confirm"
                                  color="primary"
                                  @click="confirmOtp()"
                                />
                              </q-card-actions>
                            </q-card>
                          </q-dialog>
                        </q-tab-panel>
                        <q-tab-panel name="signup">
                          <q-form
                            ref="userSignup"
                            class="row col-12 justify-center"
                          >
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Full Name *"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.fullName"
                              :rules="[required('Name')]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-account"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Mobile Number *"
                              mask="##########"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.mobileNumber"
                              :rules="[required('Phone no'), phone()]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-phone"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Email Id *"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.emailId"
                              :rules="[required('Email'), email()]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-email"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Alternate Number"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              mask="##########"
                              v-model="signupUserData.alternateNumber"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-phone"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Address *"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.address"
                              :rules="[required('address')]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-office-building"
                                  color="indigo-9"
                                /> </template
                            ></q-input>

                            <q-select
                              v-model="signupUserData.country"
                              class="q-mr-sm q-mb-xs"
                              rounded
                              outlined
                              @filter="filterFnCountry"
                              :options="countryOptions"
                              fill-input
                              use-input
                              @input="checkstate()"
                              hide-selected
                              option-value="name"
                              option-label="name"
                              label="Country *"
                              :rules="[required('Country')]"
                              label-color="black"
                              dense
                              style="width: 200px"
                              lazy-rules
                              hide-bottom-space
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                />
                              </template>
                            </q-select>
                            <q-select
                              ref="indiastate"
                              v-if="indiastate == true"
                              dense
                              rounded
                              outlined
                              use-input
                              fill-input
                              hide-selected
                              :options="stateOptions"
                              @filter="filterFnStates"
                              options-dense
                              option-label="state_name"
                              option-value="state_id"
                              label="State *"
                              v-model="signupUserData.state"
                              hide-bottom-space
                              class="q-mr-sm q-mb-xs"
                              label-color="black"
                              style="width: 200px"
                              :rules="[required('State')]"
                              ><template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                />
                              </template>
                            </q-select>
                            <q-input
                              ref="otherstate"
                              v-if="otherstate == true"
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              hide-bottom-space
                              style="width: 200px"
                              v-model="signupUserData.state1"
                              label="State *"
                              label-color="black"
                              :rules="[required('State')]"
                              ><template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="State *"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.state"
                              :rules="[required('State')]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                /> </template
                            ></q-input>

                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Pin Code *"
                              mask="######"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.pincode"
                              :rules="[required('Pincode'), pinNumber()]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <div class="row col-12 q-mt-md">
                              <span class="text-bold"
                                >In Which Cities Mangohomz Services you
                                want?</span
                              >
                              <div class="q-pa-md text-black">
                                <div class="q-gutter-sm">
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="delhi"
                                    label="Delhi"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="hyderabad"
                                    label="Hyderabad"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="chennai"
                                    label="Chennai"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="kolkata"
                                    label="Kolkata"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="banglore"
                                    label="Banglore"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="Vellore"
                                    label="Vellore"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="mumbai"
                                    label="Mumbai"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="upcomingCities"
                                    label="Others"
                                  />
                                  <div>
                                    <q-input
                                      class="q-mr-sm q-mb-sm"
                                      dense
                                      label="Enter City "
                                      hide-bottom-space
                                      style="width: 250px"
                                      label-color="black"
                                      v-if="this.upcomingCities == true"
                                    >
                                      <template v-slot:prepend>
                                        <q-icon
                                          name="mdi-city"
                                          color="indigo-9"
                                        /> </template
                                    ></q-input>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </q-form>
                          <div class="justify-center row q-pa-sm">
                            <q-btn
                              class="items-center text-weight-bold"
                              label="Sign up"
                              size="sm"
                              rounded
                              color="primary"
                              style="
                                width: 300px;
                                font-weight: 700;
                                font-size: 15px;
                              "
                              @click="saveUserRegDetails()"
                            >
                            </q-btn>
                          </div>
                        </q-tab-panel>
                      </q-tab-panels>
                    </q-card>
                  </div>
                </div>
              </q-page>
            </q-page-container>
          </q-layout>
        </q-dialog> -->
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
      </div>
      <most-recent-search-vue style="margin:10px;" />
    </q-page>
    <!--Website End Code-->

    <!--Mobile View Code-->
    <q-page
      style="margin-top: 80px; padding: 0px; padding-top: 1px"
      class="q-pa-sm lt-sm"
    >
      <div class="justify-center grad">
        <div
          class="q-pa-sm row justify-center q-gutter-md"
          style="padding: 0px; margin-top: -45px"
        >
          <q-card flat :class="this.class_val" class="cursor-pointer">
            <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
              <q-breadcrumbs
                separator="/"
                class="text-primary"
                active-color="primary"
              >
                <q-breadcrumbs-el icon="home" label="Home" to="/"
                  ><q-tooltip> Home </q-tooltip></q-breadcrumbs-el
                >
                <q-breadcrumbs-el
                  label="Hotels List"
                  icon="apartment"
                  @click="backpageForHotellist"
                >
                  <q-tooltip> Hotel List </q-tooltip></q-breadcrumbs-el
                >
                <q-breadcrumbs-el icon="hotel" to="/hotelName/:hotelInfo"
                  ><q-tooltip> Hotel Information </q-tooltip></q-breadcrumbs-el
                >
              </q-breadcrumbs>
              <q-space />
              <!-- <q-btn
                size="sm"
                outline
                rounded
                color="primary"
                class="text-weight-bold q-ml-xl"
                @click="confirm = true"
                >BACK
              </q-btn> -->
            </q-toolbar>
            <q-card-section v-for="item in hotelInfo_arr" :key="item.txn_id">
              <div class="text-h6 q-pa-sm">
                <strong class="q-mr-sm"
                  >{{ item.sub_property_name }} ({{
                    item.property_name
                  }})</strong
                >
                <br>
                <q-icon>
                            <img
                              style="width: 160px; margin-left: 140px"
                              src="~assets/logos/PF (1).webp"
                            />
                          </q-icon>
              </div>
              <div class="text-black" style="margin-left: 10px">
                {{ item.address[0].address }}
              </div>
              <div class="q-pa-sm">
                <q-icon color="secondary" name="mdi-hospital" size="sm" />
                <span style="font-size: 15px">
                  <strong>
                    Near Hospital :
                    {{ searchItem.hospital.near_hospital_name }}</strong
                  >
                </span>
                <q-icon color="secondary" name="mdi-map-marker" size="xs" />
                <span style="font-size: 15px">
                  <strong>
                    {{ searchItem.city.city_name }}, India
                  </strong></span
                >
              </div>
              <!-- <div class="q-pa-sm">
                <q-icon
                  color="secondary"
                  name="mdi-office-building"
                  size="sm"
                />
                <span style="font-size: 15px">
                  <strong> {{ searchItem.hospital.address }}</strong>
                </span>
              </div> -->

              <div class="text-caption q-ml-sm" style="font-size: 11px"></div>
              <div class="row">
                <div class="col-12 q-pa-sm">
                  <!--Server Image Showing Start-->
                  <q-carousel
                    animated
                    v-model="slide"
                    arrows
                    style="height: 150px"
                    infinite
                  >
                    <q-carousel-slide
                      :name="1"
                      :img-src="`${hotelImgpath}${item.upload_image}`"
                    />
                    <q-carousel-slide
                      :name="2"
                      :img-src="`${hotelImgpath}${item.room_image_1}`"
                    />
                    <q-carousel-slide
                      :name="3"
                      :img-src="`${hotelImgpath}${item.room_image_2}`"
                    />
                    <q-carousel-slide
                      :name="4"
                      :img-src="`${hotelImgpath}${item.room_image_3}`"
                    />
                  </q-carousel>
                  <!--Server Image Showing End-->
                  <!--Window Image Showing start-->
                  <!-- <q-carousel
                    animated
                    v-model="slide"
                    arrows
                    style="height: 150px"
                    infinite
                  >
                    <q-carousel-slide
                      :name="1"
                      :img-src="`mh/mh_documents/property_partner_documents/${propDetails[0].upload_image}`"
                    />
                    <q-carousel-slide
                      :name="2"
                      :img-src="`mh/mh_documents/property_partner_documents/${item.room_image_1}`"
                    />
                    <q-carousel-slide
                      :name="3"
                      :img-src="`mh/mh_documents/property_partner_documents/${item.room_image_2}`"
                    />
                    <q-carousel-slide
                      :name="4"
                      :img-src="`mh/mh_documents/property_partner_documents/${item.room_image_3}`"
                    />
                  </q-carousel> -->
                  <!--Window Image Showing End-->
                </div>
                <!-- <div class="col-12 q-pa-sm">
                  <q-card class="my-card" style="border-radius: 30px">
                    <q-img
                      :src="`${hotelImgpath}${propDetails[0].upload_image}`"
                      :ratio="16 / 9"
                      style="height: 280px"
                      @click="openDialog(item)"
                    />
                  </q-card>
                </div> -->
                <!-- <div class="col-12 q-pa-sm">
                  <q-card class="my-card" style="border-radius: 30px">
                    <q-img
                      :src="`${hotelImgpath}${item.room_image_1}`"
                      :ratio="16 / 9"
                      @click="openDialog1(item)"
                    />
                  </q-card>
                  <div class="row" style="padding-top: 10px">
                    <div class="col-12 q-pa-sm">
                      <q-card class="my-card" style="border-radius: 15px">
                        <q-img
                          :src="`${hotelImgpath}${item.room_image_2}`"
                          :ratio="1 / 1"
                          @click="openDialog2(item)"
                        />
                      </q-card>
                    </div>
                    <div class="col-12 q-pa-sm">
                      <q-card class="my-card" style="border-radius: 15px">
                        <q-img
                          :src="`${hotelImgpath}${item.room_image_3}`"
                          :ratio="1 / 1"
                          @click="openDialog3(item)"
                        />
                      </q-card>
                    </div>
                  </div>
                </div> -->
                <div class="col-12">
                  <q-card style="border-radius: 30px">
                    <q-card-section>
                      <div style="font-size: 16px; font-weight: 900">
                        {{ item.room_category }} ( {{ item.room_type }})
                        <span
                          class="row"
                          style="font-size: 12px; margin: 5px 0px"
                        >
                          {{ searchItem.hospital.near_hospital_name }} is
                          {{ propDetails[0].kilo_meter }} KM from
                          {{ item.getPropertydata.sub_property_name }}
                        </span>
                        <span class="row" style="font-size: 11px">
                          Check-in :
                          {{
                            moment(searchItem.checkIn).format(
                              "dddd, DD MMM YYYY"
                            )
                          }}
                          ({{
                            moment(
                              item.getPropertydata.checkIn_time,
                              "HH:mm"
                            ).format("HH:mm a")
                          }})
                        </span>
                        <span class="row" style="font-size: 11px"
                          >Check-out :
                          {{
                            moment(searchItem.checkOut).format(
                              "dddd, DD MMM YYYY"
                            )
                          }}
                          ({{
                            moment(
                              item.getPropertydata.checkOut_time,
                              "HH:mm"
                            ).format("HH:mm a")
                          }})
                        </span>
                        <span class="row" style="font-size: 11px">
                          Guests : {{ searchItem.adult_count }} Adults &
                          {{ searchItem.child_count }} Kids
                        </span>
                      </div>
                      <div
                        class="col-3"
                        style="
                          width: 5px;
                          height: 100px;
                          float: left;
                          z-index: 1px;
                        "
                      >
                        <img
                          style="float: left; width: 140px; cursor: pointer"
                          @click="handleCustomEvent(`${redcliffpath}`)"
                          src="../assets/logos/MH OFFER 2.webp"
                        />
                      </div>

                      <div class="row justify-end">
                        <div class="row col-12 justify-end">
                          <span style="font-size: 16px; padding-left: 100px"
                            >Room Price</span
                          >
                          &nbsp;
                          <span
                            style="font-size: 16px; font-weight: 900"
                            class="text-grey"
                          >
                            <b
                              ><s
                                >₹{{
                                  searchItem.adult_count >= 4
                                    ? 2 * item.price
                                    : item.price
                                }}
                              </s></b
                            ></span
                          >
                          <span style="font-size: 8px; font-weight: 900">
                            <br />
                            <!-- Partner Offer% {{ item.partner_specialOffer }}
                    Partner Offer Amount  {{ parseInt(item.price *(item.partner_specialOffer/100)) }}
                    Base Price {{ item.price - parseInt(item.price *(item.partner_specialOffer/100)) }}
                    Early Bird Offer%  {{ item.property_specialOffer }}
                    Early Bird Offer Amount {{ parseInt(item.price*item.property_specialOffer/100) }}
                    MH Offer {{ mangohomzOffers_arr[0].offer_price }}
                    GST% {{ item.gst_per }}
                    GST Amount {{ parseInt(item.price*item.gst_per/100) }} -->
                          </span>
                        </div>
                        <div class="row col-12 justify-end">
                          <span style="font-size: 16px; padding-left: 100px"
                            >MH Price</span
                          >
                          &nbsp;
                          <span
                            style="
                              font-size: 22px;
                              font-weight: 900;
                              padding-left: 10px;
                            "
                          >
                            ₹{{
                              searchItem.adult_count >= 4
                                ? 2 * item.price -
                                  parseInt(
                                    item.price *
                                      (item.partner_specialOffer / 100)
                                  ) -
                                  parseInt(
                                    (item.price * item.property_specialOffer) /
                                      100
                                  )
                                : item.price -
                                  parseInt(
                                    item.price *
                                      (item.partner_specialOffer / 100)
                                  ) -
                                  parseInt(
                                    (item.price * item.property_specialOffer) /
                                      100
                                  )
                            }}
                            <!-- {{
                              searchItem.adult_count >= 4
                                ? 2 *
                                  (item.price -
                                    parseInt(
                                      item.price *
                                        (item.partner_specialOffer / 100)
                                    ) -
                                    parseInt(
                                      (item.price *
                                        item.property_specialOffer) /
                                        100
                                    ) -
                                    mangohomzOffers_arr[0].offer_price)
                                : item.price -
                                  parseInt(
                                    item.price *
                                      (item.partner_specialOffer / 100)
                                  ) -
                                  parseInt(
                                    (item.price * item.property_specialOffer) /
                                      100
                                  ) -
                                  mangohomzOffers_arr[0].offer_price
                            }} -->

                            <!-- {{parseInt(parseInt(item.price  + parseInt(item.price*(item.gst_per/100)))) -
parseInt(parseInt(mangohomzOffers_arr[0].offer_price  + parseInt(item.price /(item.property_specialOffer*100))))
}} -->

                            <!-- {{
gstOnPrice
}} -->
                          </span>
                        </div>
                      </div>

                      <!-- <div
                        class="row justify-end"
                        style="font-size: 22px; font-weight: 900"
                      >
                        ₹{{ item.price }}
                      </div> -->
                      <span class="row justify-end" style="font-size: 10px"
                        >+ ₹{{
                          parseInt(
                            ((searchItem.adult_count >= 4
                              ? 2 * item.price
                              : item.price) *
                              item.gst_per) /
                              100
                          )
                        }}
                        Taxes
                      </span>
                      <span
                        class="row text-bold justify-end"
                        style="font-size: 10px"
                        ><strong style="color: red">{{
                          searchItem.adult_count >= 4
                            ? `${item.units} For 2 Rooms`
                            : item.units
                        }}</strong></span
                      >
                    </q-card-section>
                    <q-separator></q-separator>
                    <div class="row justify-end q-pa-sm">
                      <q-btn
                        size="sm"
                        rounded
                        :color="
                          item.no_of_avail_rooms == 0 ? 'negative' : 'primary'
                        "
                        class="text-weight-bold"
                        :disabled="item.no_of_avail_rooms == 0"
                        @click="openUserRegDialog(item)"
                      >
                        {{
                          item.no_of_avail_rooms == 0 ? "Sold Out" : "Book Now"
                        }}
                      </q-btn>
                      <!-- <q-btn
                        size="sm"
                        rounded
                        color="primary"
                        class="text-weight-bold"
                        @click="openUserRegDialog(item)"
                        >Book Now
                      </q-btn> -->
                    </div>
                    <q-separator></q-separator>
                    <q-card-section>
                      <div class="row">
                        <div class="rig ">
                          <img
                            style="margin-top: -20px;width: 185px; height: 90px;margin-left:170px"
                            src="../assets/web_site/Why MH.webp"
                          />
                        </div>
                        <div
                          class="col-12 text-primary"
                          style="font-size: 16px; font-weight: 900"
                        >
                          Amenities:
                        </div>
                        <div
                          class="col-6 text-justify text-subtitle2 amenities_hori_line"
                          v-for="(item2, i) in item.facilities"
                          :key="item2.id"
                        >
                          <q-item dense class="cell-class">
                            <q-item-section avatar class="text-right">
                              <q-icon
                                color="secondary"
                                :name="item.icon_image[i]"
                              />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label
                                class="text-black text-bold text-left"
                                style="font-size: 12px"
                                >{{ item.facilities[i] }}</q-item-label
                              >
                            </q-item-section>
                          </q-item>
                        </div>
                      </div>
                      <!-- <div class="row">
                       <div
                          class="col-12 text-primary"
                          style="font-size: 16px; font-weight: 900"
                        >
                          Others:
                       </div>
                        <div class="col-6 text-justify text-subtitle2 "
                        >
                         <q-item dense class="cell-class ">
                             <q-item-section>
                              <q-item-label
                                class="text-black text-bold text-left"
                                style="font-size:12px;"
                                >{{ item.other_amenities }}</q-item-label
                              >
                            </q-item-section>
                         </q-item>
                        </div>
                        </div> -->
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <div class="row">
                <div class="col-12 q-mt-md">
                  <q-card style="border-radius: 30px">
                    <q-card-section>
                      <div class="row">
                        <div
                          class="col-12 text-primary"
                          style="font-size: 16px; font-weight: 900"
                        >
                          Property Description:
                        </div>
                        <div class="col-12 text-justify text-subtitle2">
                          {{ item.getPropertydata.property_description }}
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-12 q-mt-md">
                  <q-card style="border-radius: 30px">
                    <q-card-section>
                      <div class="row">
                        <div
                          class="col-8 text-primary"
                          style="font-size: 16px; font-weight: 900"
                        >
                          What guests said
                        </div>
                        <div class="col-4">
                          <q-icon
                            ><q-img
                              src="~assets/logos/MHmini_logo_128x128.png"
                            ></q-img
                          ></q-icon>
                          <q-chip color="secondary" dark dense size="sm"
                            >{{ rating }} / 5</q-chip
                          >
                          <q-rating
                            v-model="rating"
                            size="1em"
                            :max="5"
                            color="secondary"
                            readonly
                          />
                        </div>
                        <!-- <div class="col-12 text-caption text-black">
                          347 reviews<br />
                          Clean Room | Clean Property | Near Hospital
                        </div> -->
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <q-dialog v-model="thumbnail">
          <q-card style="width: 600px; height: 500px">
            <q-card-section>
              <div class="text-h6 text-center text-bold q-pa-sm">
                {{ this.sub_property_name }}
              </div>
              <!-- FOR WINDOWS  -->
              <!-- <q-carousel arrows swipeable v-model="slide" thumbnails infinite>
                <q-carousel-slide
                  :name="1"
                  :img-src="`mh/mh_documents/property_partner_documents/${this.hotel_image1}`"
                />
                <q-carousel-slide
                  :name="2"
                  :img-src="`mh/mh_documents/property_partner_documents/${this.room_image1}`"
                />
                <q-carousel-slide
                  :name="3"
                  :img-src="`mh/mh_documents/property_partner_documents/${this.room_image2}`"
                />
                <q-carousel-slide
                  :name="4"
                  :img-src="`mh/mh_documents/property_partner_documents/${this.room_image3}`"
                />
              </q-carousel> -->
              <!-- FOR SERVER UPLOADING -->
              <q-carousel arrows swipeable v-model="slide" thumbnails infinite>
                <q-carousel-slide
                  :name="1"
                  :img-src="`${hotelImgpath}${this.hotel_image1}`"
                />
                <q-carousel-slide
                  :name="2"
                  :img-src="`${hotelImgpath}${this.room_image1}`"
                />
                <q-carousel-slide
                  :name="3"
                  :img-src="`${hotelImgpath}${this.room_image2}`"
                />
                <q-carousel-slide
                  :name="4"
                  :img-src="`${hotelImgpath}${this.room_image3}`"
                />
              </q-carousel>
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- <q-dialog v-model="userRegDialog" no-backdrop-dismiss>
          <q-layout view="Lhh lpR fff" container class="bg-white">
            <q-page-container>
              <q-page padding>
                <div class="gt-xs">
                  <q-btn
                    dark
                    padding="none"
                    style="margin-left: 490px"
                    icon="close"
                    color="primary"
                    @click="closeRegDialog"
                  >
                    <q-tooltip>close</q-tooltip>
                  </q-btn>
                </div>
                <div class="lt-sm">
                  <q-btn
                    dark
                    padding="none"
                    style="margin-left: 290px"
                    icon="close"
                    color="primary"
                    @click="closeRegDialog"
                  >
                    <q-tooltip>close</q-tooltip>
                  </q-btn>
                </div>
                <div class="q-pa-md">
                  <div class="q-gutter-y-md">
                    <div class="">
                      Want to Save more?
                      <span class="text-indigo-9 text-bold"
                        >Please Register</span
                      >
                      or

                      <span
                        @click="moveToCart(hotelInfo_arr)"
                        class="text-green text-bold"
                        style="cursor: pointer"
                        >Continue Booking anyway?</span
                      >
                    </div>
                    <q-card class="q-mt-xs">
                      <q-tabs
                        v-model="tab"
                        dense
                        class="text-white text-bold bg-indigo-9"
                        active-color="white"
                        indicator-color="white"
                        align="justify"
                        narrow-indicator
                      >
                        <q-tab name="login" label="Login" />
                        <q-tab name="signup" label="Signup" />
                      </q-tabs>
                      <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="login">
                          <div class="row col-12 justify-center">
                            <q-input
                              class="q-mr-sm q-mb-sm col-9"
                              dense
                              outlined
                              rounded
                              label="Enter Mobile Number *"
                              hide-bottom-space
                              style="width: 250px"
                              label-color="black"
                              mask="##########"
                              v-model="loginUserData.phone"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-phone"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-btn
                              rounded
                              color="indigo-9"
                              label="Log in"
                              @click="loginUserAcc"
                              class="col-3"
                            />
                          </div>
                          <q-dialog v-model="otpDialog" persistent>
                            <q-card>
                              <q-card-section
                                class="row items-center"
                                align="center"
                              >
                                <div class="row col-12">
                                  <div class="text-body text-bold q-mb-sm">
                                    Please Enter One Time Password(OTP)
                                  </div>
                                  <div class="row col-12">
                                    <q-input
                                      outlined
                                      v-model="otpInput.one"
                                      autofocus
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.two"
                                      class="q-mr-sm"
                                      :autofocus="this.otpInput.one != ''"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.three"
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.four"
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.five"
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                    <q-input
                                      outlined
                                      v-model="otpInput.six"
                                      class="q-mr-sm"
                                      label=""
                                      mask="#"
                                      style="width: 45px; font-size: 25px"
                                    />
                                  </div>
                                </div>
                              </q-card-section>

                              <q-card-actions class="row col-12" align="right">
                                <q-btn
                                  flat
                                  label="Cancel"
                                  color="primary"
                                  v-close-popup
                                />
                                <q-btn
                                  flat
                                  label="Confirm"
                                  color="primary"
                                  @click="confirmOtp()"
                                />
                              </q-card-actions>
                            </q-card>
                          </q-dialog>
                        </q-tab-panel>
                        <q-tab-panel name="signup">
                          <q-form
                            ref="userSignup"
                            class="row col-12 justify-center"
                          >
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Full Name *"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.fullName"
                              :rules="[required('Name')]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-account"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Mobile Number *"
                              mask="##########"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.mobileNumber"
                              :rules="[required('Phone no'), phone()]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-phone"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Email Id *"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.emailId"
                              :rules="[required('Email'), email()]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-email"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Alternate Number"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              mask="##########"
                              v-model="signupUserData.alternateNumber"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-phone"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Address *"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.address"
                              :rules="[required('address')]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-office-building"
                                  color="indigo-9"
                                /> </template
                            ></q-input>

                            <q-select
                              v-model="signupUserData.country"
                              class="q-mr-sm q-mb-xs"
                              rounded
                              outlined
                              @filter="filterFnCountry"
                              :options="countryOptions"
                              fill-input
                              use-input
                              @input="checkstate()"
                              hide-selected
                              option-value="name"
                              option-label="name"
                              label="Country *"
                              :rules="[required('Country')]"
                              label-color="black"
                              dense
                              style="width: 200px"
                              lazy-rules
                              hide-bottom-space
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                />
                              </template>
                            </q-select>
                            <q-select
                              ref="indiastate"
                              v-if="indiastate == true"
                              dense
                              rounded
                              outlined
                              use-input
                              fill-input
                              hide-selected
                              :options="stateOptions"
                              @filter="filterFnStates"
                              options-dense
                              option-label="state_name"
                              option-value="state_id"
                              label="State *"
                              v-model="signupUserData.state"
                              hide-bottom-space
                              class="q-mr-sm q-mb-xs"
                              label-color="black"
                              style="width: 200px"
                              :rules="[required('State')]"
                              ><template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                />
                              </template>
                            </q-select>
                            <q-input
                              ref="otherstate"
                              v-if="otherstate == true"
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              hide-bottom-space
                              style="width: 200px"
                              v-model="signupUserData.state1"
                              label="State *"
                              label-color="black"
                              :rules="[required('State')]"
                              ><template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="State *"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.state"
                              :rules="[required('State')]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                /> </template
                            ></q-input>

                            <q-input
                              class="q-mr-sm q-mb-xs"
                              dense
                              outlined
                              rounded
                              label="Pin Code *"
                              mask="######"
                              hide-bottom-space
                              style="width: 200px"
                              label-color="black"
                              v-model="signupUserData.pincode"
                              :rules="[required('Pincode'), pinNumber()]"
                            >
                              <template v-slot:prepend>
                                <q-icon
                                  name="mdi-map-marker"
                                  color="indigo-9"
                                /> </template
                            ></q-input>
                            <div class="row col-12 q-mt-md">
                              <span class="text-bold"
                                >In Which Cities Mangohomz Services you
                                want?</span
                              >
                              <div class="q-pa-md text-black">
                                <div class="q-gutter-sm">
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="delhi"
                                    label="Delhi"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="hyderabad"
                                    label="Hyderabad"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="chennai"
                                    label="Chennai"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="kolkata"
                                    label="Kolkata"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="banglore"
                                    label="Banglore"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="Vellore"
                                    label="Vellore"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="signupUserData.upcomingCities"
                                    val="mumbai"
                                    label="Mumbai"
                                  />
                                  <q-checkbox
                                    color="indigo-9"
                                    v-model="upcomingCities"
                                    label="Others"
                                  />
                                  <div>
                                    <q-input
                                      class="q-mr-sm q-mb-sm"
                                      dense
                                      label="Enter City "
                                      hide-bottom-space
                                      style="width: 250px"
                                      label-color="black"
                                      v-if="this.upcomingCities == true"
                                    >
                                      <template v-slot:prepend>
                                        <q-icon
                                          name="mdi-city"
                                          color="indigo-9"
                                        /> </template
                                    ></q-input>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </q-form>
                          <div class="justify-center row q-pa-sm">
                            <q-btn
                              class="items-center text-weight-bold"
                              label="Sign up"
                              size="sm"
                              rounded
                              color="primary"
                              style="
                                width: 300px;
                                font-weight: 700;
                                font-size: 15px;
                              "
                              @click="saveUserRegDetails()"
                            >
                            </q-btn>
                          </div>

                          <div
                            class="col-12 lt-sm"
                            style="width: 260px; height: 75px; float: left"
                          >
                            <img
                              style="float: left; width: 240px; cursor: pointer"
                              @click="handleCustomEvent(`${redcliffpath}`)"
                              src="../assets/web_site/Aston 2 (1).webp"
                            />
                          </div>
                          <div
                            class="col-12 gt-xs"
                            style="display: flex; justify-content: center"
                          >
                            <q-img
                              style="width: 1010px; cursor: pointer"
                              @click="handleCustomEvent(`${redcliffpath}`)"
                              src="~assets/web_site/Aston 2 (1).webp"
                            ></q-img>
                          </div>
                        </q-tab-panel>
                      </q-tab-panels>
                    </q-card>
                  </div>
                </div>
              </q-page>
            </q-page-container>
          </q-layout>
        </q-dialog> -->
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
      </div>
      <most-recent-search-vue  />
    </q-page>
    <!--Mobile View End-->

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
import validations from "../helpers/validations";
import searchHeaderComp from "../components/searchHeaderComp.vue";
import { mapState, mapActions } from "vuex";
import filepaths from "../helpers/filepath.js";
import moment from "moment";
import mostRecentSearchVue from "../pages/menuContentPages/mostRecentSearch.vue"

export default {
  directives: {
    "shift-focus": {
      inserted: function (el) {
        el.addEventListener("keydown", function (e) {
          if (e.key >= 0 && e.key <= 9) {
            e.preventDefault();
            el.value = e.key;
            var next = el.nextElementSibling;
            if (next) {
              next.focus();
              next.value = ""; // Clear the value of the next input field
            }
          }
        });
      },
    },
  },
  components: {
    headerTag,
    footerTag,
    searchHeaderComp,
    mostRecentSearchVue,
  },
  data() {
    return {
      selectedbtn: "signup",
      isValidPhone: false,
      redcliffpath: filepaths.redcliffurl,
      ...validations,
      autoplay: true,
      thumbnail: false,
      moment: moment,
      userRegDialog: false,
      upcomingCities: false,
      no_of_avail_rooms: "",
      slide: 1,
      class_val: "shadow-1 hotel-details-card-1",
      hotelImgpath: "",
      tab: "signup",
      confirm: false,
      otpDialog: false,
      signupotpDialog: false,
      othercity: false,
      otherstate: false,
      indiastate: false,
      indiacity: false,
      countryOptions: [],
      stateOptions: [],
      countriesArr: [
        { name: "Afghanistan", code: "+93 AF" },
        { name: "Albania", code: "+355 AL" },
        { name: "Algeria", code: "+213 DZ" },
        { name: "American Samoa", code: "+1 684 AS" },
        { name: "AndorrA", code: "+376 AD" },
        { name: "Angola", code: "+244 AO" },
        { name: "Anguilla", code: "+1 264 AI" },
        { name: "Antigua and Barbuda", code: "+1 268 AG" },
        { name: "Argentina", code: "+54 AR" },
        { name: "Armenia", code: "+374 AM" },
        { name: "Aruba", code: "+297 AW" },
        { name: "Australia", code: "+61 AU" },
        { name: "Austria", code: "+43 AT" },
        { name: "Azerbaijan", code: "+994 AZ" },
        { name: "Bahamas", code: "+1 242 BS" },
        { name: "Bahrain", code: "+973 BH" },
        { name: "Bangladesh", code: "+880 BD" },
        { name: "Barbados", code: "+1 246 BB" },
        { name: "Belarus", code: "+375 BY" },
        { name: "Belgium", code: "+32 BE" },
        { name: "Belize", code: "+501 BZ" },
        { name: "Benin", code: "+229 BJ" },
        { name: "Bermuda", code: "+1 441 BM" },
        { name: "Bhutan", code: "+975 BT" },
        { name: "Bolivia", code: "+591 BO" },
        { name: "Bosnia and Herzegovina", code: "+387 BA" },
        { name: "Botswana", code: "+267 BW" },
        { name: "Brazil", code: "+55 BR" },
        { name: "British Indian Ocean Territory", code: "+246 IO" },
        { name: "Bulgaria", code: "+359 BG" },
        { name: "Burkina Faso", code: "+226 BF" },
        { name: "Burundi", code: "+257 BI" },
        { name: "Cambodia", code: "+855 KH" },
        { name: "Cameroon", code: "+237 CM" },
        { name: "Canada", code: "+1 CA" },
        { name: "Cape Verde", code: "+238 CV" },
        { name: "Cayman Islands", code: "+345 KY" },
        { name: "Central African Republic", code: "+236 CF" },
        { name: "Chad", code: "+235 TD" },
        { name: "Chile", code: "+56 CL" },
        { name: "China", code: "+86 CN" },
        { name: "Christmas Island", code: "+61 CX" },
        { name: "Cocos (Keeling) Islands", code: "+61 CC" },
        { name: "Colombia", code: "+57 CO" },
        { name: "Comoros", code: "+269 KM" },
        { name: "Congo", code: "+242 CG" },
        { name: "Congo, The Democratic Republic of the", code: "+243 CD" },
        { name: "Cook Islands", code: "+682 CK" },
        { name: "Costa Rica", code: "+506 CR" },
        { name: "Croatia", code: "+385 HR" },
        { name: "Cuba", code: "+53 CU" },
        { name: "Cyprus", code: "+537 CY" },
        { name: "Czech Republic", code: "+420 CZ" },
        { name: "Denmark", code: "+45 DK" },
        { name: "Djibouti", code: "+253 DJ" },
        { name: "Dominica", code: "+1 767 DM" },
        { name: "Dominican Republic", code: "+1 809 DO" },
        { name: "Ecuador", code: "+593 EC" },
        { name: "Egypt", code: "+20 EG" },
        { name: "El Salvador", code: "+503 SV" },
        { name: "Equatorial Guinea", code: "+240 GQ" },
        { name: "Eritrea", code: "+291 ER" },
        { name: "Estonia", code: "+372 EE" },
        { name: "Ethiopia", code: "+251 ET" },
        { name: "Falkland Islands (Malvinas)", code: "+500 FK" },
        { name: "Faroe Islands", code: "+298 FO" },
        { name: "Fiji", code: "+679 FJ" },
        { name: "Finland", code: "+358 FI" },
        { name: "France", code: "+33 FR" },
        { name: "French Guiana", code: "+594 GF" },
        { name: "French Polynesia", code: "+689 PF" },
        { name: "Gabon", code: "+241 GA" },
        { name: "Gambia", code: "+220 GM" },
        { name: "Georgia", code: "+995 GE" },
        { name: "Germany", code: "+49 DE" },
        { name: "Ghana", code: "+233 GH" },
        { name: "Gibraltar", code: "+350 GI" },
        { name: "Greece", code: "+30 GR" },
        { name: "Greenland", code: "+299 GL" },
        { name: "Grenada", code: "+1 473 GD" },
        { name: "Guadeloupe", code: "+590 GP" },
        { name: "Guam", code: "+1 671 GU" },
        { name: "Guatemala", code: "+502 GT" },
        { name: "Guinea", code: "+224 GN" },
        { name: "Guinea-Bissau", code: "+245 GW" },
        { name: "Guyana", code: "+595 GY" },
        { name: "Haiti", code: "+509 HT" },
        { name: "Honduras", code: "+504 HN" },
        { name: "Hong Kong", code: "+852 HK" },
        { name: "Hungary", code: "+36 HU" },
        { name: "Iceland", code: "+354 IS" },
        { name: "India", code: "+91 IND" },
        { name: "Indonesia", code: "+62 ID" },
        { name: "Iran, Islamic Republic Of", code: "+98 IR" },
        { name: "Iraq", code: "+964 IQ" },
        { name: "Ireland", code: "+353 IE" },
        { name: "Israel", code: "+972 IL" },
        { name: "Italy", code: "+39 IT" },
        { name: "Jamaica", code: "+1 876 JM" },
        { name: "Japan", code: "+81 JP" },
        { name: "Jordan", code: "+962 JO" },
        { name: "Kazakhstan", code: "+7 7 KZ" },
        { name: "Kenya", code: "+254 KE" },
        { name: "Kiribati", code: "+686 KI" },
        { name: "Kuwait", code: "+965 KW" },
        { name: "Kyrgyzstan", code: "+996 KG" },
        { name: "Lao People'S Democratic Republic", code: "+856 LA" },
        { name: "Latvia", code: "+371 LV" },
        { name: "Lebanon", code: "+961 LB" },
        { name: "Lesotho", code: "+266 LS" },
        { name: "Liberia", code: "+231 LR" },
        { name: "Libyan Arab Jamahiriya", code: "+218 LY" },
        { name: "Liechtenstein", code: "+423 LI" },
        { name: "Lithuania", code: "+370 LT" },
        { name: "Luxembourg", code: "+352 LU" },
        { name: "Macao", code: "+853 MO" },
        { name: "Macedonia, The Former Yugoslav Republic of", code: "+389 MK" },
        { name: "Madagascar", code: "+261 MG" },
        { name: "Malawi", code: "+265 MW" },
        { name: "Malaysia", code: "+60 MY" },
        { name: "Maldives", code: "+960 MV" },
        { name: "Mali", code: "+223 ML" },
        { name: "Malta", code: "+356 MT" },
        { name: "Marshall Islands", code: "+692 MH" },
        { name: "Martinique", code: "+596 MQ" },
        { name: "Mauritania", code: "+222 MR" },
        { name: "Mauritius", code: "+230 MU" },
        { name: "Mayotte", code: "+262 YT" },
        { name: "Mexico", code: "+52 MX" },
        { name: "Micronesia, Federated States of", code: "+691 FM" },
        { name: "Moldova, Republic of", code: "+373 MD" },
        { name: "Monaco", code: "+377 MC" },
        { name: "Mongolia", code: "+976 MN" },
        { name: "Montserrat", code: "+1664 MS" },
        { name: "Morocco", code: "+212 MA" },
        { name: "Myanmar", code: "+95 MM" },
        { name: "Namibia", code: "+264 NA" },
        { name: "Nauru", code: "+674 NR" },
        { name: "Nepal", code: "+977 NP" },
        { name: "Netherlands", code: "+31 NL" },
        { name: "Netherlands Antilles", code: "+599 AN" },
        { name: "New Caledonia", code: "+687 NC" },
        { name: "New Zealand", code: "+64 NZ" },
        { name: "Nicaragua", code: "+505 NI" },
        { name: "Niger", code: "+227 NE" },
        { name: "Nigeria", code: "+234 NG" },
        { name: "Niue", code: "+683 NU" },
        { name: "Norfolk Island", code: "+672 NF" },
        { name: "Northern Mariana Islands", code: "+1 670 MP" },
        { name: "Norway", code: "+47 NO" },
        { name: "Oman", code: "+968 OM" },
        { name: "Pakistan", code: "+92 PK" },
        { name: "Palau", code: "+680 PW" },
        { name: "Palestinian Territory, Occupied", code: "+970 PS" },
        { name: "Panama", code: "+507 PA" },
        { name: "Papua New Guinea", code: "+675 PG" },
        { name: "Paraguay", code: "+595 PY" },
        { name: "Peru", code: "+51 PE" },
        { name: "Philippines", code: "+63 PH" },
        { name: "Poland", code: "+48 PL" },
        { name: "Portugal", code: "+351 PT" },
        { name: "Puerto Rico", code: "+1 787 PR" },
        { name: "Qatar", code: "+974 QA" },
        { name: "Reunion", code: "+262 RE" },
        { name: "Romania", code: "+40 RO" },
        { name: "Russian Federation", code: "+7 RU" },
        { name: "RWANDA", code: "+250 RW" },
        { name: "Samoa", code: "+685 WS" },
        { name: "San Marino", code: "+378 SM" },
        { name: "Saudi Arabia", code: "+966 SA" },
        { name: "Senegal", code: "+221 SN" },
        { name: "Serbia and Montenegro", code: "+381 CS" },
        { name: "Seychelles", code: "+248 SC" },
        { name: "Sierra Leone", code: "+232 SL" },
        { name: "Singapore", code: "+65 SG" },
        { name: "Slovakia", code: "+421 SK" },
        { name: "Slovenia", code: "+386 SI" },
        { name: "Solomon Islands", code: "+677 SB" },
        { name: "South Africa", code: "+27 ZA" },
        {
          name: "South Georgia and the South Sandwich Islands",
          code: "+500 GS",
        },
        { name: "Spain", code: "+34 ES" },
        { name: "Sri Lanka", code: "+94 LK" },
        { name: "Sudan", code: "+249 SD" },
        { name: "Suriname", code: "+597 SR" },
        { name: "Swaziland", code: "+268 SZ" },
        { name: "Sweden", code: "+46 SE" },
        { name: "Switzerland", code: "+41 CH" },
        { name: "Syrian Arab Republic", code: "+963 SY" },
        { name: "Taiwan, Province of China", code: "+886 TW" },
        { name: "Tajikistan", code: "+992 TJ" },
        { name: "Tanzania, United Republic of", code: "+255 TZ" },
        { name: "Thailand", code: "+66 TH" },
        { name: "Timor-Leste", code: "+670 TL" },
        { name: "Togo", code: "+228 TG" },
        { name: "Tokelau", code: "+690 TK" },
        { name: "Tonga", code: "+676 TO" },
        { name: "Trinidad and Tobago", code: "+1 868 TT" },
        { name: "Tunisia", code: "+216 TN" },
        { name: "Turkey", code: "+90 TR" },
        { name: "Turkmenistan", code: "+993 TM" },
        { name: "Turks and Caicos Islands", code: "+1 649 TC" },
        { name: "Tuvalu", code: "+688 TV" },
        { name: "Uganda", code: "+256 UG" },
        { name: "Ukraine", code: "+380 UA" },
        { name: "United Arab Emirates", code: "+971 AE" },
        { name: "United Kingdom", code: "+44 GB" },
        { name: "United States", code: "+1 US" },
        { name: "Uruguay", code: "+598 UY" },
        { name: "Uzbekistan", code: "+998 UZ" },
        { name: "Vanuatu", code: "+678 VU" },
        { name: "Venezuela", code: "+58 VE" },
        { name: "Viet Nam", code: "+84 VN" },
        { name: "Virgin Islands, British", code: "+1 284 VG" },
        { name: "Virgin Islands, U.S.", code: "+1 340 VI" },
        { name: "Wallis and Futuna", code: "+681 WF" },
        { name: "Yemen", code: "+967 YE" },
        { name: "Zambia", code: "+260 ZM" },
        { name: "Zimbabwe", code: "+263 ZW" },
      ],
      otpInput: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
      },
      loginUserData: {
        phone: "",
        user_type: "user",
      },
      signupUserData: {
        fullName: "",
        mobileNumber: "",
        emailId: "",
        alternateNumber: "",
        address: "",
        city: "",
        state: "",
        state1: "",
        country: "",
        pincode: "",
        upcomingCities: [],

        // {
        //   delhi: null,
        //   hyderabad: null,
        //   chennai: null,
        //   kolkata: null,
        //   banglore: null,
        //   Vellore: null,
        //   mumbai: null,
        //   others: null,
        // }
      },
      days: 0,
      hotel_image1: "",
      room_image1: "",
      room_image2: "",
      room_image3: "",
      sub_property_name: "",
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
    };
  },
  created() {
    this.propDetails = [];
    this.propDetails.push(JSON.parse(this.$route.params.hotelInfo));
    // console.log("this.propDetails", this.propDetails);
    this.hotelImgpath = filepaths.mhapFilePath;
  },
  computed: {
    isSelected() {
      return (btn) => {
        return this.selectedbtn === btn;
      };
    },
    ...mapState({
      // hospitals_list: state => state.dropdown.hospital_arr,
      hotelInfo_arr: (state) => state.booking.hotelInfo_arr,
      user_otp_arr: (state) => state.account.user_otp_arr,
      hotelDetails: (state) => state.booking.hotelDetails,
      mangohomzOffers_arr: (state) => state.booking.mangohomzOffers_arr,
      allStatesArr: (state) => state.dropdown.all_states_arr,
    }),
    win_width() {
      return this.$q.screen.width - 59;
    },

    win_height() {
      return this.$q.screen.height - 0;
    },
    searchInfo() {
      return this.$route.params.searchInfo;
    },

    //   filteredHotelList() {
    //   if (this.searchItem.adult_count <= 2) {

    //     return this.hotelInfo_arr;
    //   } else {

    //     return this.hotelInfo_arr.filter((item) => {
    //       if (
    //         item.room_type_priority === "Triple Share" ||
    //         item.room_type_priority === "Four Share" ||
    //         item.room_type_priority === "Family Room 5 Share"
    //       ) {
    //         return true;
    //       }
    //       return false;
    //     });
    //   }
    // },
  },
  allHotelDetails: {},
  mounted() {
    let hotelSerachDetails = JSON.parse(this.$route.params.searchInfo);
  //  console.log("this.$route.params.searchItem",this.$route.params.searchInfo)
    // let hotelSerachDetails =
    //   JSON.parse(localStorage.getItem("searchItem")) || [];
    this.searchItem = {
      city: hotelSerachDetails.city,
      hospital: hotelSerachDetails.hospital,
      guests: hotelSerachDetails.guest,
      adult_count: hotelSerachDetails.adult_count,
      child_count: hotelSerachDetails.child_count,
      // dateModel: { from: hotelSerachDetails.checkIn,
      // to: hotelSerachDetails.checkOut,}
      checkIn: hotelSerachDetails.checkIn,
      checkOut: hotelSerachDetails.checkOut,
    };
    // this.total_guests_count = this.searchItem.adult_count + this.searchItem.child_count;
    this.days = this.noOfDays(
      this.searchItem.checkIn,
      this.searchItem.checkOut
    );

    this.$store.dispatch(`booking/loadHotels`, this.searchItem);
    this.$store.dispatch(`booking/loadHotelInfo`, this.propDetails);
    this.$store.dispatch("booking/getMangohomzOfferData");
    this.$store.dispatch("dropdown/loadAllStates");
  },
  methods: {
    ...mapActions("booking", ["createUserDetails"]),
    ...mapActions("account", ["createUserLoginAcc"]),
    ...mapActions("account", ["checkOtp"]),
    ...mapActions("account", ["updateOtp"]),

    moveToHotel() {
      this.$router.push("/hotelName");
    },
    selectbtn(btn) {
      this.selectedbtn = btn;
    },
    openDialog(item) {
      //console.log("item",item);
      (this.hotel_image1 = item.upload_image),
        (this.room_image1 = item.room_image_1),
        (this.room_image2 = item.room_image_2),
        (this.room_image3 = item.room_image_3),
        (this.sub_property_name = item.sub_property_name),
        (this.thumbnail = true);
    },
    moveToNextField(event, nextFieldRef) {
      if (event.target.value && this.$refs[nextFieldRef]) {
        this.$refs[nextFieldRef].$el.querySelector("input").focus();
      }
    },
    checkPhoneValidity() {
      // Check if phone number is valid and update `isValidPhone`
      this.isValidPhone = this.loginUserData.phone.length === 10;
    },
    validateMobileNumber(value) {
      if (/^0/.test(value)) {
        return "The first digit of your mobile number cannot be 0.";
      } else if (/^\d{10}$/.test(value)) {
        return true;
      } else {
        return "Mobile number should be exactly 10 digits long.";
      }
    },
    openDialog1(item) {
      (this.hotel_image1 = item.room_image_1),
        (this.room_image1 = item.upload_image),
        (this.room_image2 = item.room_image_2),
        (this.room_image3 = item.room_image_3),
        (this.sub_property_name = item.sub_property_name),
        (this.thumbnail = true);
    },
    openDialog2(item) {
      (this.hotel_image1 = item.room_image_2),
        (this.room_image1 = item.upload_image),
        (this.room_image2 = item.room_image_1),
        (this.room_image3 = item.room_image_3),
        (this.sub_property_name = item.sub_property_name),
        (this.thumbnail = true);
    },
    openDialog3(item) {
      (this.hotel_image1 = item.room_image_3),
        (this.room_image1 = item.upload_image),
        (this.room_image2 = item.room_image_2),
        (this.room_image3 = item.room_image_1),
        (this.sub_property_name = item.sub_property_name),
        (this.thumbnail = true);
    },

    // movedtoCartArray() {
    // let movedtoCartData ="";
    // for(let i = 0; i < this.hotelInfo_arr.length; i++) {
    //       let inputVal = this.hotelInfo_arr[i]
    //      console.log("inputVal", inputVal);

    // }
    // },
    //   movedtoCartArray(hotelInfo_arr) {
    // for (let i = 0; i < hotelInfo_arr.length; i++) {
    //   let inputVal = this.hotelInfo_arr[i];
    // }
    // },

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

    openUserRegDialog(item) {
      //  console.log("sasa",item,this.hotelInfo_arr)
      this.allHotelDetails = item;
      this.moveToCart(this.hotelInfo_arr);

      //  this.hotelInfo_arr.filter((x)=>x.price===item.price )
      // this.resetDialog();
      // this.userRegDialog = true;

      // let cartData = this.data.indexOf(item);
    },
    loginUserAcc() {
      this.resetOtp();
      this.createUserLoginAcc(this.loginUserData);
      this.otpDialog = true;
    },
    confirmOtp() {
      let userOtp = parseInt(
        this.otpInput.one +
          this.otpInput.two +
          this.otpInput.three +
          this.otpInput.four +
          this.otpInput.five +
          this.otpInput.six
      );
      if (userOtp == this.user_otp_arr[0].otp) {
        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        var time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        var dateTime = date + " " + time;
        let otp_verified_time = dateTime;
        this.updateOtp(this.user_otp_arr[0]);
        this.otpDialog = false;
        // this.moveToCart=true;
        this.moveToCart(this.hotelInfo_arr);
      } else {
        this.$store.dispatch(
          `alerts_loaders/showAlert`,
          {
            msg: "Wrong OTP entered. Please try again.",
            type: "negative",
          },
          { root: true }
        );
      }
    },
    resetOtp() {
      this.otpInput.one = "";
      this.otpInput.two = "";
      this.otpInput.three = "";
      this.otpInput.four = "";
      this.otpInput.five = "";
      this.otpInput.six = "";
    },
    //   moveToCart(items) {
    //   console.log("this.hotelInfo_arr",this.hotelInfo_arr);
    // },
    //   moveToCart(selectedItem) {
    //   console.log("this.hotelInfo_arr", this.hotelInfo_arr);

    //   let item = this.hotelInfo_arr.find((x) => x.price === selectedItem.price);
    // console.log("sss",item);
    //   if (item) {
    //     this.roomDetails = {
    //       ...item,
    //       city_id: this.propDetails[0].city_id,
    //       city_name: this.propDetails[0].city_name,
    //       state_id: this.propDetails[0].state_id,
    //       state_name: this.propDetails[0].state_name,
    //       checkIn_time: this.propDetails[0].checkIn_time,
    //       checkOut_time: this.propDetails[0].checkOut_time,
    //       property_email: this.propDetails[0].property_email,
    //       property_phone: this.propDetails[0].property_phone
    //     };

    //     this.$router.push({
    //       name: "Booking Room Data",
    //       params: { bookingRoomInfo: this.roomDetails },
    //     });
    //   }
    // },
    backpageForHotellist() {
      // console.log("this", this.searchItem);
      this.$router.push({
        name: "Serach Hotel List",
        params: {
          searchInfo: JSON.stringify({
            ...this.searchItem,
            guest: this.searchItem.guests,
            dateModel: {
              from: this.searchItem.checkIn,
              to: this.searchItem.checkOut,
            },
          }),
        },
      });
    },

    moveToCart(items) {
      const item = items.filter(
        (x) => x.price == this.allHotelDetails.price
      )[0];
      //  console.log("movetocart",item);
      this.roomDetails = Object.assign({}, item);
      this.roomDetails.city_id = this.hotelInfo_arr[0].getPropertydata.city_id;
      this.roomDetails.city_name =
        this.hotelInfo_arr[0].getPropertydata.city_name;
      this.roomDetails.state_id =
        this.hotelInfo_arr[0].getPropertydata.state_id;
      // this.roomDetails.country ="India";
      this.roomDetails.state_name =
        this.hotelInfo_arr[0].getPropertydata.state_name;
      this.roomDetails.checkIn_time =
        this.hotelInfo_arr[0].getPropertydata.checkIn_time;
      this.roomDetails.checkOut_time =
        this.hotelInfo_arr[0].getPropertydata.checkOut_time;
      this.roomDetails.property_email =
        this.hotelInfo_arr[0].getPropertydata.property_email;
      this.roomDetails.property_phone =
        this.hotelInfo_arr[0].getPropertydata.property_phone;
      this.roomDetails.property_alternate_email =
        this.hotelInfo_arr[0].getPropertydata.property_alternate_email;

      // console.log("room", item);
      this.$router.push({
        name: "Booking Room Data",
        // params: { bookingRoomInfo: this.roomDetails },
        params: {
          bookingRoomInfo: JSON.stringify({
            partner_id: item.partner_id,
            partner_sub_id: item.partner_sub_id,
            txn_id: item.txn_id,
            single_txn: this.propDetails[0].txn_id,
          }),
          searchInfo: JSON.stringify({
            ...this.searchItem,
            guest: this.searchItem.guests,
            dateModel: {
              from: this.searchItem.checkIn,
              to: this.searchItem.checkOut,
            },
          }),
        },
      });
    },

    filterFnCountry(val, update) {
      if (val === "") {
        update(() => {
          this.countryOptions = this.countriesArr;
        });
        return this.countryOptions;
      }
      update(() => {
        const needle = this.countriesArr.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.countryOptions = needle;
        return this.countryOptions;
      });
    },
    filterFnStates(val, update) {
      // console.log("sss",this.allStatesArr)

      if (val === "") {
        update(() => {
          this.stateOptions = this.allStatesArr;
        });
        return this.stateOptions;
      }
      update(() => {
        const needle = this.allStatesArr.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.stateOptions = needle;
        return this.stateOptions;
      });
    },

    closeRegDialog() {
      this.userRegDialog = false;
    },
    checkstate() {
      // console.log("check",this.signupUserData)
      if (this.signupUserData.country.name == "India") {
        this.indiastate = true;
        this.indiacity = true;
        this.otherstate = false;
        this.othercity = false;
      } else {
        this.emptyotherstate();
        this.otherstate = true;
        this.othercity = true;
        this.indiastate = false;
        this.indiacity = false;
      }
    },

    emptyotherstate() {
      this.signupUserData.city = [];
      this.signupUserData.state = [];
    },

    // saveUserRegDetails() {
    //   if (
    //     this.signupUserData.fullName != "" &&
    //     this.signupUserData.mobileNumber != "" &&
    //     this.signupUserData.emailId != "" &&
    //    // this.signupUserData.alternateNumber != "" &&
    //     //this.signupUserData.address != "" &&
    //    //  this.signupUserData.state != "" &&
    //     // this.signupUserData.state1 != "" &&
    //     this.signupUserData.country != "" &&
    //     this.signupUserData.pincode != ""
    //   ) {
    //      this.createUserDetails(this.signupUserData).then((response) => {
    //       if (response.message1) {
    //         this.$store.dispatch(
    //           "alerts_loaders/showAlert",
    //           { msg: response.message1, type: "negative" },
    //           { root: true }
    //         );
    //       } else {
    //         this.createUserLoginAcc({
    //           phone: this.signupUserData.mobileNumber,
    //         });
    //         this.resetOtp();
    //         this.signupotpDialog = true;
    //         this.$store.dispatch(
    //           "alerts_loaders/showAlert",
    //           { msg: response.message, type: "positive" },
    //           { root: true }
    //         );
    //       }
    //     });
    //   } else {
    //     this.$q.notify({
    //       message: "Please Fill the Form Properly",
    //       color: "negative",
    //       icon: "warning",
    //       position: "top",
    //     });
    //   }
    // },
    saveUserRegDetails() {
      if (
        this.signupUserData.fullName != "" &&
        this.signupUserData.mobileNumber != "" &&
        this.signupUserData.emailId != "" &&
        // this.signupUserData.alternateNumber != "" &&
        //this.signupUserData.address != "" &&
        //  this.signupUserData.state != "" &&
        // this.signupUserData.state1 != "" &&
        this.signupUserData.country != "" &&
        this.signupUserData.pincode != ""
      ) {
        this.createUserDetails(this.signupUserData);
        this.userRegDialog = false;
        this.moveToCart(this.hotelInfo_arr);
      } else {
        this.$q.notify({
          message: "Please Fill the Form Properly",
          color: "negative",
          icon: "warning",
          position: "top",
        });
      }
    },
    // signupconfirmOtp() {
    //   let userOtp = parseInt(
    //     this.otpInput.one +
    //       this.otpInput.two +
    //       this.otpInput.three +
    //       this.otpInput.four +
    //       this.otpInput.five +
    //       this.otpInput.six
    //   );

    //   if (userOtp == this.user_otp_arr[0].otp) {
    //     var today = new Date();
    //     var date =
    //       today.getFullYear() +
    //       "-" +
    //       (today.getMonth() + 1) +
    //       "-" +
    //       today.getDate();
    //     var time =
    //       today.getHours() +
    //       ":" +
    //       today.getMinutes() +
    //       ":" +
    //       today.getSeconds();
    //     var dateTime = date + " " + time;
    //     let otp_verified_time = dateTime;
    //     this.updateOtp(this.user_otp_arr[0]);
    //     this.signupotpDialog = false;
    //     this.moveToCart(this.hotelInfo_arr);
    //   } else {
    //     this.$store.dispatch(
    //       `alerts_loaders/showAlert`,
    //       {
    //         msg: "Wrong OTP entered. Please try again.",
    //         type: "negative",
    //       },
    //       { root: true }
    //     );
    //   }
    // },
    resetDialog() {
      this.signupUserData.fullName = "";
      this.signupUserData.mobileNumber = "";
      this.signupUserData.emailId = "";
      this.signupUserData.alternateNumber = "";
      this.signupUserData.address = "";
      this.signupUserData.state = "";
      this.signupUserData.country = "";
      this.signupUserData.pincode = "";
      this.signupUserData.upcomingCities.delhi = false;
      this.signupUserData.upcomingCities.hyderabad = false;
      this.signupUserData.upcomingCities.chennai = false;
      this.signupUserData.upcomingCities.kolkata = false;
      this.signupUserData.upcomingCities.banglore = false;
      this.signupUserData.upcomingCities.Vellore = false;
      this.signupUserData.upcomingCities.mumbai = false;
      this.signupUserData.upcomingCities.others = false;
    },
    backTo() {
      this.$router.push("/");
      this.confirm = false;
    },
    handleCustomEvent(url) {
      window.open(url);
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
    background-image: linear-gradient(to bottom, #cccccc 15%, #cccccc 10%)
.amenities_hori_line:nth-child(even)
  border-right: 1px solid silver
</style>
<style>
.selected {
  background-color: #65b8db !important;
  color: #000000 !important;
}
</style>
