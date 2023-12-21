<template>
  <q-page-container class="bg-indigo-1">
    <headerTag />
    <!--Website Start code-->

    <q-page class="gt-xs">
      <div class="justify-center grad">
        <div style="margin-top: -12px" class="row justify-center">
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
                  :to="{
                    name: 'Serach Hotel List',
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
                  }"
                />
                <q-breadcrumbs-el
                  label="Hotel Information"
                  icon="hotel"
                  class="text-bold text-h6"
                  to="/:city/:hospital/:property"
                />
              </q-breadcrumbs>
              <q-space />
            </q-toolbar>
            <!-- {{ this.hotelInfo_arr.data }} -->
            <q-card-section v-for="item in hotelInfo_arr" :key="item.txn_id">
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
                        {{ item.near_hospital_name }}</strong
                      >
                    </span>
                    <q-icon color="secondary" name="mdi-map-marker" size="xs" />
                    <span style="font-size: 15px">
                      <strong> {{ item.city_name }}, India </strong></span
                    >
                  </div>
                </div>
                <div class="rig">
                  <img
                    style="width: 185px; cursor: pointer"
                    @click="handleCustomEvent(`${redcliffpath}`)"
                    src="../assets/logos/MH OFFER 2.webp"
                  />
                </div>
              </div>
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
                          {{ item.near_hospital_name }} is
                          {{ item.kilo_meter }} KM from
                          {{ item.sub_property_name }}
                        </span>
                        <span class="row" style="font-size: 11px">
                          Check-in :
                          {{ moment(item.today).format("dddd, DD MMM YYYY") }}
                          ({{
                            moment(item.checkIn_time, "HH:mm").format(
                              "HH:mm a"
                            )
                          }})
                        </span>
                        <span class="row" style="font-size: 11px"
                          >Check-out :
                          {{ moment(item.nextDay).format("dddd, DD MMM YYYY") }}
                          ({{
                            moment(item.checkOut_time, "HH:mm").format(
                              "HH:mm a"
                            )
                          }})
                        </span>
                        <span class="row" style="font-size: 11px">
                          Guests : {{ item.adult_count }} Adults &
                          {{ item.child_count }} Kids
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
                                  item.adult_count >= 4
                                    ? 2 * item.price
                                    : item.price
                                }}
                              </s></b
                            ></span
                          >
                          <span style="font-size: 8px; font-weight: 900">
                            <br />
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
                              item.adult_count >= 4
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
                          </span>
                        </div>
                      </div>
                      <span class="row justify-end" style="font-size: 10px"
                        >+ ₹{{
                          parseInt(
                            ((item.adult_count >= 4
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
                          item.adult_count >= 4
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
                          {{ item.property_description }}
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
      </div>
      <most-recent-search-vue style="margin: 10px" />
    </q-page>
    <!--Website End Code-->

    <!--Mobile View Code-->
    <q-page class="lt-sm">
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
                  icon="apartment"
                  label="Hotel List"
                  :to="{
                    name: 'Serach Hotel List',
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
                  }"
                >
                  <q-tooltip> Hotel List </q-tooltip></q-breadcrumbs-el
                >
                <q-breadcrumbs-el icon="hotel" to="/:city/:hospital/:property"
                  ><q-tooltip> Hotel Information </q-tooltip></q-breadcrumbs-el
                >
              </q-breadcrumbs>
              <q-space />
            </q-toolbar>
            <q-card-section v-for="item in hotelInfo_arr" :key="item.txn_id">
              <div class="text-h6 q-pa-sm">
                <strong class="q-mr-sm"
                  >{{ item.sub_property_name }} ({{
                    item.property_name
                  }})</strong
                >
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
                    {{ item.near_hospital_name }}</strong
                  >
                </span>
                <q-icon color="secondary" name="mdi-map-marker" size="xs" />
                <span style="font-size: 15px">
                  <strong> {{ item.city_name }}, India </strong></span
                >
              </div>
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
                </div>
                <div class="col-12">
                  <q-card style="border-radius: 30px">
                    <q-card-section>
                      <div style="font-size: 16px; font-weight: 900">
                        {{ item.room_category }} ( {{ item.room_type }})
                        <span
                          class="row"
                          style="font-size: 12px; margin: 5px 0px"
                        >
                          {{ item.near_hospital_name }} is
                          {{ item.kilo_meter }} KM from
                          {{ item.sub_property_name }}
                        </span>
                        <span class="row" style="font-size: 11px">
                          Check-in :
                          {{ moment(item.today).format("dddd, DD MMM YYYY") }}
                          ({{
                            moment(item.checkIn_time, "HH:mm").format(
                              "HH:mm a"
                            )
                          }})
                        </span>
                        <span class="row" style="font-size: 11px"
                          >Check-out :
                          {{ moment(item.nextDay).format("dddd, DD MMM YYYY") }}
                          ({{
                            moment(item.checkOut_time, "HH:mm").format(
                              "HH:mm a"
                            )
                          }})
                        </span>
                        <span class="row" style="font-size: 11px">
                          Guests : {{ item.adult_count }} Adults &
                          {{ item.child_count }} Kids
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
                                  item.adult_count >= 4
                                    ? 2 * item.price
                                    : item.price
                                }}
                              </s></b
                            ></span
                          >
                          <span style="font-size: 8px; font-weight: 900">
                            <br />
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
                              item.adult_count >= 4
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
                          </span>
                        </div>
                      </div>
                      <span class="row justify-end" style="font-size: 10px"
                        >+ ₹{{
                          parseInt(
                            ((item.adult_count >= 4
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
                          item.adult_count >= 4
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
                          {{ item.property_description }}
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
      <most-recent-search-vue style="margin: 10px" />
    </q-page>
    <!--Mobile View End-->

    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-space></q-space>
        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page-container>
</template>
<script>
import headerTag from "../components/header.vue";
import validations from "../helpers/validations";
import { mapState, mapActions } from "vuex";
import filepaths from "../helpers/filepath.js";
import moment from "moment";
import { api } from "boot/axios";
import mostRecentSearchVue from "../pages/menuContentPages/mostRecentSearch.vue";

export default {
  name: "seohotelDetails",
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
              next.value = "";
            }
          }
        });
      },
    },
  },
  components: {
    headerTag,
    mostRecentSearchVue,
  },
  data() {
    return {
      redcliffpath: filepaths.redcliffurl,
      ...validations,
      moment: moment,
      thumbnail: false,
      confirm: false,
      no_of_avail_rooms: "",
      slide: 1,
      class_val: "shadow-1 hotel-details-card-1",
      hotelImgpath: "",
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
    // this.propDetails = [];
    // this.propDetails.push(JSON.parse(this.$route.params.hotelInfo));
    // // console.log("this.propDetails",this.propDetails)
    this.hotelImgpath = filepaths.mhapFilePath;
  },
  computed: {
    ...mapState({
      hotelInfo_arr: (state) => state.booking.mrs_hotel_info,
      user_otp_arr: (state) => state.account.user_otp_arr,
      hotelDetails: (state) => state.booking.hotelDetails,
      mangohomzOffers_arr: (state) => state.booking.mangohomzOffers_arr,
      allStatesArr: (state) => state.dropdown.all_states_arr,
      // mrs_hotel_info: (state) => state.mostrecentsearch.mrs_hotel_info,
      // mrs_hotel_info: (state) => state.booking.mrs_hotel_info,
    }),
    win_width() {
      return this.$q.screen.width - 59;
    },

    win_height() {
      return this.$q.screen.height - 0;
    },
  },
  allHotelDetails: {},
  async mounted() {
    let city_seo_name = this.$route.params.city;
    let hospital_seo_name = this.$route.params.hospital;
    let subproperty_seo_name = this.$route.params.property;
    // console.log(city_seo_name,hospital_seo_name,subproperty_seo_name);
    try {
      const data = await this.someFunction(
        city_seo_name,
        hospital_seo_name,
        subproperty_seo_name
      );

      this.PropertyInfoData = data;
      // console.log("some", this.PropertyInfoData);
    } catch (error) {
      // Handle error if needed
    }
    this.searchItem = {
      city_seo_name: city_seo_name,
      hospital_seo_name: hospital_seo_name,
      subproperty_seo_name: subproperty_seo_name,
      city: {
        city_name: this.PropertyInfoData.data?.[0].city_name,
        city_id: this.PropertyInfoData.data?.[0].city_id,
      },
      hospital: {
        near_hospital_name: this.PropertyInfoData.data?.[0].near_hospital_name,
        latitude: this.PropertyInfoData.data?.[0].latitude,
        longitude: this.PropertyInfoData.data?.[0].longitude,
      },
      guests: this.PropertyInfoData.data?.[0].guest,
      adult_count: this.PropertyInfoData.data?.[0].adult_count,
      child_count: this.PropertyInfoData.data?.[0].child_count,
      checkIn: this.PropertyInfoData.data?.[0].today,
      checkOut: this.PropertyInfoData.data?.[0].nextDay,
    };
    // console.log("search item", this.searchItem);
    // console.log("HotelInfoArray", this.hotelDetails);

    // Dispatch actions after the data is available
    // this.$store.dispatch(`mostRecentSearch/loadCityWisehotelinfoForSeo`, this.searchItem);
    // this.$store.dispatch(`booking/loadHotelInfo`, this.propDetails);
    this.$store.dispatch(`booking/loadPropertyInfo`, this.searchItem);
    this.$store.dispatch("booking/getMangohomzOfferData");
    this.$store.dispatch("dropdown/loadAllStates");
    this.$store.dispatch(`dropdown/loadAllHospitals`, this.searchItem.city);
  },

  methods: {
    ...mapActions("booking", ["createUserDetails"]),
    ...mapActions("account", ["createUserLoginAcc"]),
    ...mapActions("account", ["checkOtp"]),
    ...mapActions("account", ["updateOtp"]),

    async fetchData(city_seo_name, hospital_seo_name, subproperty_seo_name) {
      // console.log(city_seo_name, hospital_seo_name, subproperty_seo_name);
      try {
        const response = await api.get(
          `/mostRecentSearch/loadCityWisehotelinfoForSeo/${city_seo_name}/${hospital_seo_name}/${subproperty_seo_name}`
        );
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async someFunction(cityName, hospitalName, propertyName) {
      try {
        const response = await this.fetchData(
          cityName,
          hospitalName,
          propertyName
        );
        //  console.log("console", response);
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

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
      //    console.log("sasa",item,this.hotelInfo_arr.data)
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
    moveToCart(items) {
      const item = items.filter(
        (x) => x.price == this.allHotelDetails.price
      )[0];
      //  console.log("movetocart",item);
      this.roomDetails = Object.assign({}, item);
      this.roomDetails.city_id = this.hotelInfo_arr.city_id;
      this.roomDetails.city_name = this.hotelInfo_arr.city_name;
      this.roomDetails.state_id = this.hotelInfo_arr.state_id;
      // this.roomDetails.country ="India";
      this.roomDetails.state_name = this.hotelInfo_arr.state_name;
      this.roomDetails.checkIn_time = this.hotelInfo_arr.checkIn_time;
      this.roomDetails.checkOut_time = this.hotelInfo_arr.checkOut_time;
      this.roomDetails.property_email = this.hotelInfo_arr.property_email;
      this.roomDetails.property_phone = this.hotelInfo_arr.property_phone;
      this.roomDetails.property_alternate_email =
        this.hotelInfo_arr.property_alternate_email;

      //  console.log("room",this.roomDetails);
      // console.log("search for next", this.searchItem);
      this.$router.push({
        name: "Booking Room Data",
        // params: { bookingRoomInfo: this.roomDetails },
        params: {
          bookingRoomInfo: JSON.stringify({
            partner_id: item.partner_id,
            partner_sub_id: item.partner_sub_id,
            txn_id: item.txn_id,
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

    saveUserRegDetails() {
      if (
        this.signupUserData.fullName != "" &&
        this.signupUserData.mobileNumber != "" &&
        this.signupUserData.emailId != "" &&
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
