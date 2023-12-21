<template>
  <q-page-container class="bg-indigo-9" style="padding-top: 0px">
    <q-page style="padding-top: 60px" class="q-pa-md grad gt-sm">
      <div class="justify-center grad gt-sm">
        <!-- <div style="display: flex; justify-content: center">
          <q-img
            style="width: 1020px; cursor: pointer; margin-top: -10px"
            @click="handleCustomEvent(`${redcliffpath}`)"
            src="~assets/web_site/Website Aston.webp"
          ></q-img>
        </div> -->
        <div class="containerSeoWidget">
          <div class="split-container flex flex-start">
            <div class="left-container">
              <div class="titleHospital flex">
                <div class="lineLeft"></div>
                <div class="textRight">
                  <p>HOTELS NEAR</p>
                  <p style="font-weight: 600; font-size: 34px; width: 45vw">
                    {{ searchItem.hospital.near_hospital_name }}
                  </p>
                  <p>{{ searchItem.city.city_name }}</p>
                </div>
              </div>
              <div class="specsHospital" >
                <div class="flex">
                  <div class="container-specs" >
                    <div class="flex flex-center">
                      <div class="specsLeft">
                        <ul>
                          <li>Hygienic Rooms</li>
                          <li>Kitchen ready</li>
                          <li>24x7 support</li>
                        </ul>
                      </div>
                      <div class="specsRight">
                        <ul>
                          <li>Relevant Pick & Drop</li>
                          <li>Discounted Diagnostic</li>
                          <li>and many more...</li>
                        </ul>
                      </div>
                    </div>
                    <div class="distHospi">
                      <div class="TxtHospi text-center">
                        <q-icon
                          name="location_on"
                          color="red"
                          style="margin-right: 5px"
                        />500 metre from the Hospital
                      </div>
                    </div>
                  </div>
                  <div class="map-container">
                    <iframe
                      v-if="searchItem.map_link"
                      :src="searchItem.map_link"
                      class="map-widget"
                      height="174"
                      style="border:0;width:25vw"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                    <iframe
                      v-else
class="map-widget"
                      src="https://www.alternative-map-source.com"
                      width="295"
                      height="174"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-container">
              <div class="ytVideo" style="margin-right:-10px !important">
                <iframe
class="yt-widget"
                  v-if="searchItem.youtube_link"
                                    height="350"
                  :src="searchItem.youtube_link"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                >
                </iframe>
                <iframe
class="yt-widget"
                  v-else
                                    height="350"
                  src="https://www.youtube.com/embed/VSWJwJCp_tc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <!-- <SeoBookingFormCompVue /> -->
        <div
          class="q-pa-md row justify-center q-gutter-md"
          style="margin-top: -30px"
        >
          <q-card flat :class="this.class_val" class="cursor-pointer">
            <q-toolbar class="my-breadcrumbs row bg-white rounded-borders">
              <q-breadcrumbs
                separator="/"
                class="text-primary"
                active-color="primary"
              >
                <q-breadcrumbs-el
                  v-if="hotel_list != 0"
                  label="Home"
                  icon="home"
                  to="/"
                />
                <q-breadcrumbs-el
                  v-if="hotel_list != 0"
                  label="Hotels List"
                  class="text-bold text-h6"
                  icon="apartment"
                  to="/bookingProcess"
                />
                <!-- <q-breadcrumbs-el
                  v-if="hotel_list != 0"
                  label="Hotel Information"
                  icon="hotel"
                  to="/hotelName/:hotelInfo"
                /> -->
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

            <div
              class="text-weight-bold text-secondary q-pa-md"
              style="font-family: verdana; font-size: 18px"
              v-if="hotel_list != 0"
            >
              Recommended for You In
              {{ this.hotel_list[0].city_name }}
              <!-- {{ searchDetails.city.city_name }} -->
            </div>
            <div>
              <!-- Added Filter Start-->

              <strong
                v-if="hotel_list != 0"
                class="text-weight-bold text-primary q-pa-md"
                style="font-family: verdana; font-size: 18px"
              >
                Filter By :
              </strong>

              <q-chip
                v-if="hotel_list != 0"
                :class="{ selected: isSelected('distanceNear') }"
                outline
                color="primary"
                text-color="primary"
                clickable
                @click="
                  sortByDistance();
                  selectChip('distanceNear');
                "
              >
                Distance(Near to Far)
              </q-chip>
              <q-chip
                v-if="hotel_list != 0"
                :class="{ selected: isSelected('distanceFar') }"
                outline
                color="primary"
                text-color="primary"
                clickable
                @click="
                  sortByDistanceFartoNear();
                  selectChip('distanceFar');
                "
              >
                Distance(Far to Near)
              </q-chip>
              <q-chip
                :class="{ selected: isSelected('priceLow') }"
                v-if="hotel_list != 0"
                outline
                color="primary"
                text-color="primary"
                clickable
                @click="
                  sortByPrice();
                  selectChip('priceLow');
                "
              >
                Price(Low to High)
              </q-chip>
              <q-chip
                v-if="hotel_list != 0"
                :class="{ selected: isSelected('priceHigh') }"
                outline
                color="primary"
                text-color="primary"
                clickable
                @click="
                  sortByPriceHightoLow();
                  selectChip('priceHigh');
                "
              >
                Price(High to Low)
              </q-chip>
              <!-- Added Filter End-->
              <div
                class="text-caption"
                style="font-family: verdana; font-size: 11px"
                v-if="hotel_list != 0"
              >
                <q-icon color="secondary" name="mdi-hospital" size="sm" /><span>
                  <strong>
                    Near Hospital :
                    {{ this.searchItem.hospital.near_hospital_name }}
                    <!-- {{ searchDetails.hospital.near_hospital_name }} -->
                  </strong></span
                >
              </div>

              <div class="q-pa-md row items-start q-gutter-md">
                <q-img
                  v-if="hotel_list == 0"
                  src="~assets/logos/Coming Soon 2 (1).jpg"
                ></q-img>
                <q-card
                  v-for="item in hotel_list"
                  :key="item.id"
                  class="cursor-pointer col-12"
                  @click="moveToHotel(item)"
                >
                  <q-card-section horizontal class="q-pa-xs gt-sm">
                    <q-card-section class="col-3 flex flex-center">
                      <q-img
                        class="rounded-borders"
                        height="150px"
                        width="180px"
                        :src="`${hotelImgpath}${item.upload_image}`"
                      />
                    </q-card-section>
                    <q-card-section class="q-pt-xs col-6">
                      <div class="col-8">
                        <div
                          class="text-weight-bold q-mt-sm q-mb-xs text-justify"
                        >
                          {{ item.sub_property_name }}
                          <q-icon>
                            <img
                              style="width: 160px; margin-left: 184px"
                              src="~assets/logos/PF (1).webp"
                            />
                          </q-icon>
                        </div>
                        <div class="text-caption text-black text-bold">
                          <q-icon name="las la-map-marker" size="16px" />
                          <span class="background"
                            >{{ item.kilo_meter }} kms
                          </span>
                          from the hospital
                        </div>
                        <div class="text-black">
                          {{ item.address }}
                        </div>

                        <!--Property Amenities Start-->
                        <q-card-section>
                          <div class="row">
                            <div
                              class="col-12 text-primary text-bold"
                              size="sm"
                              style="margin-left: -25px"
                            >
                              Property Amenities:
                            </div>
                            <div
                              class="col-6 text-justify text-subtitle2 amenities_hori_line"
                              v-for="(item2, i) in item.amenity_name"
                              :key="item2.id"
                            >
                              <q-item dense class="cell-class">
                                <q-item-section
                                  avatar
                                  size="30"
                                  class="text-right"
                                  style="margin-right: -30px"
                                >
                                  <q-icon
                                    color="secondary"
                                    :name="item.amenity_icon[i]"
                                  />
                                </q-item-section>
                                <q-item-section style="margin-right: 18px">
                                  <q-item-label
                                    class="text-black text-bold text-left"
                                    style="font-size: 12px"
                                    >{{ item.amenity_name[i] }}</q-item-label
                                  >
                                </q-item-section>
                              </q-item>
                            </div>
                          </div>
                        </q-card-section>
                        <!--Property Amenities End-->
                        <q-chip
                          outline
                          color="primary"
                          text-color="white"
                          size="sm"
                        >
                          <strong>About Property</strong>
                        </q-chip>

                        <div
                          class="text-caption text-black text-justify text-bold q-mr-xs"
                        >
                          {{ item.property_description }}
                        </div>

                        <div class="q-gutter-md q-pt-xs text-secondary">
                          <q-icon
                            v-for="facility in item.facilities"
                            :key="facility.id"
                            :name="facility.icon"
                            size="sm"
                          >
                            <q-tooltip>{{ facility.name }}</q-tooltip>
                          </q-icon>
                        </div>
                      </div>
                      <div class="q-pa-sm absolute-top-right">
                        <q-icon
                          ><q-img
                            src="~assets/logos/MHmini_logo_128x128.png"
                          ></q-img></q-icon
                        ><q-chip color="secondary" dark dense size="sm"
                          >{{ hotel_rating }}/5 good</q-chip
                        >
                        <div>
                          <q-rating
                            v-model="item.rating"
                            size="1em"
                            :max="5"
                            color="secondary"
                            readonly
                          />
                        </div>
                      </div>
                    </q-card-section>
                    <q-card-section class="col-3 flex bg-grey-11">
                      <div class="q-pa-md absolute-top-right">
                        <div class="row justify-end">
                          <div class="row col-12">
                            <span style="font-size: 16px; padding-left: 70px"
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
                                    searchDetails.adult_count >= 4
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
                          <!-- <br> -->
                          <div class="row col-12">
                            <span style="font-size: 16px; padding-left: 70px"
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
                                searchDetails.adult_count >= 4
                                  ? 2 * item.price -
                                    parseInt(
                                      item.price *
                                        (item.partner_specialOffer / 100)
                                    ) -
                                    parseInt(
                                      (item.price *
                                        item.property_specialOffer) /
                                        100
                                    )
                                  : item.price -
                                    parseInt(
                                      item.price *
                                        (item.partner_specialOffer / 100)
                                    ) -
                                    parseInt(
                                      (item.price *
                                        item.property_specialOffer) /
                                        100
                                    )
                              }}
                              <!-- {{
                                searchDetails.adult_count >= 4
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
                                      (item.price *
                                        item.property_specialOffer) /
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
                        <span class="row justify-end" style="font-size: 10px"
                          >+ ₹{{
                            parseInt(
                              ((searchDetails.adult_count >= 4
                                ? 2 * item.price
                                : item.price) *
                                item.gst_per) /
                                100
                            )
                          }}
                          Taxes
                        </span>
                        <span class="row justify-end" style="font-size: 10px"
                          ><strong style="color: red">{{
                            searchDetails.adult_count >= 4
                              ? `${item.units} For 2 Rooms`
                              : item.units
                          }}</strong></span
                        >
                        <div class="row col-12 justify-end">
                          <span
                            class="row col-12 text-primary text-end justify-end"
                            style="font-size: 10px; text-align: end"
                          >
                            Login & Unlock a secret deal
                          </span>
                          <q-btn
                            size="sm"
                            rounded
                            color="primary"
                            class="text-weight-bold q-ml-xl"
                            >Book Now
                          </q-btn>
                        </div>
                        <div class="rig">
                          <img
                            style="width: 185px; height: 90px"
                            src="../../assets/web_site/Why MH.webp"
                          />
                        </div>
                      </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
                <q-separator />
              </div>
            </div>
          </q-card>
        </div>

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
      <testimonials />
      <most-recent-search-vue style="margin: 10px" />
    </q-page>

    <!--Mobile View Start -->
    <q-page style="padding-top: 1px" class="q-pa-md grad lt-sm">
      <div class="justify-center grad" style="margin-top: 85px">
        <div class="containerSeoWidgetMobile">
          <div class="titleHospitalMobile flex">
            <div class="lineLeft"></div>
            <div class="textRight">
              <p>HOTELS NEAR</p>
              <p style="font-weight: 600; font-size: 18px; width: 100%">
                {{ searchItem.hospital.near_hospital_name }}
              </p>
              <p>{{ searchItem.city.city_name }}</p>
            </div>
          </div>
          <div class="specsHospital">
            <div class="">
              <div class="container-specs-mobile" style="width: 97vw">
                <div>
                  <div class="specsLeftMobile">
                    <ul>
                      <li>Hygienic Rooms</li>
                      <li>Kitchen ready</li>
                      <li>24x7 support</li>
                    </ul>
                  </div>
                  <div class="specsRightMobile">
                    <ul>
                      <li>Relevant Pick & Drop</li>
                      <li>Discounted Diagnostic</li>
                      <li>and many more...</li>
                    </ul>
                  </div>
                </div>
                <div class="distHospi">
                  <div class="TxtHospi text-center">
                    <q-icon
                      name="location_on"
                      color="red"
                      style="margin-right: 5px"
                    />500 metre from the Hospital
                  </div>
                </div>
              </div>
              <div class="map-container">
                <iframe
                  v-if="searchItem.map_link"
                  :src="searchItem.map_link"
                  width="394"
                  height="174"
                  style="border: 0; width: 94vw"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
                <iframe
                  v-else
                  src="https://www.alternative-map-source.com"
                  width="300"
                  height="184"
                  style="border: 0; width: 94vw"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
              </div>
            </div>
          </div>
          <div class="right-container">
            <div class="ytVideo" style="margin-right: -10px !important">
              <iframe
                v-if="searchItem.youtube_link"
                style="width: 94vw"
                height="300"
                :src="searchItem.youtube_link"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              >
              </iframe>
              <iframe
                v-else
                style="width: 94vw"
                height="300"
                src="https://www.youtube.com/embed/VSWJwJCp_tc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              >
              </iframe>
            </div>
          </div>
        </div>
        <div
          class="row q-gutter-md"
          style="margin-right: -15px; margin-left: -32px; margin-top: -45px"
        >
          <q-card
            flat
            :class="this.class_val"
            class="cursor-pointer"
            style="padding-top: 0px; background-color: white"
          >
            <q-toolbar
              class="my-breadcrumbs row bg-white rounded-borders"
              style="padding-top: 0px"
            >
              <q-breadcrumbs
                separator="/"
                class="text-primary"
                active-color="primary"
              >
                <q-breadcrumbs-el
                  v-if="hotel_list != 0"
                  label="Home"
                  icon="home"
                  to="/"
                  ><q-tooltip> Home </q-tooltip></q-breadcrumbs-el
                >
                <q-breadcrumbs-el
                  v-if="hotel_list != 0"
                  icon="apartment"
                  label="Hotel List"
                  to="/bookingProcess"
                >
                  <q-tooltip> Hotel List </q-tooltip></q-breadcrumbs-el
                >
                <q-breadcrumbs-el
                  v-if="hotel_list != 0"
                  icon="hotel"
                  label=""
                  to="/hotelName/:hotelInfo"
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

            <div
              class="text-weight-bold text-secondary q-pa-md"
              style="
                font-family: verdana;
                font-size: 16px;
                padding-top: 0px;
                background-color: white;
              "
              v-if="hotel_list != 0"
            >
              Recommended for You In
              {{ this.hotel_list[0].city_name }}
              <!-- {{ searchDetails.city.city_name }} -->
            </div>
            <!-- Added Filter Start-->
            <div
              class="text-weight-bold text-secondary q-pa-md"
              style="
                font-family: verdana;
                font-size: 16px;
                padding-top: 0px;
                background-color: white;
              "
              v-if="hotel_list != 0"
            >
              <q-btn-dropdown
                color="secondary"
                rounded
                style="margin: 5px; padding-top: 0px; background-color: white"
                label="Filter By"
              >
                <q-list>
                  <q-item clickable v-close-popup @click="sortByDistance">
                    <q-item-section>
                      <q-item-label style="font-size: 12px"
                        >Distance(Near to Far)</q-item-label
                      >
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-close-popup
                    @click="sortByDistanceFartoNear"
                  >
                    <q-item-section>
                      <q-item-label style="font-size: 12px"
                        >Distance(Far to Near)</q-item-label
                      >
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="sortByPrice">
                    <q-item-section>
                      <q-item-label style="font-size: 13px"
                        >Price(Low to High)</q-item-label
                      >
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="sortByPriceHightoLow">
                    <q-item-section>
                      <q-item-label style="font-size: 13px"
                        >Price(High to Low)</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>

            <!-- Added Filter End-->
            <div>
              <div
                class="text-caption"
                style="
                  font-family: verdana;
                  font-size: 11px;
                  background-color: white;
                "
                v-if="hotel_list != 0"
              >
                <q-icon color="secondary" name="mdi-hospital" size="sm" /><span>
                  <strong>
                    Near Hospital :
                    {{ this.searchItem.hospital.near_hospital_name }}
                    <!-- {{ searchDetails.hospital.near_hospital_name }} -->
                  </strong></span
                >
              </div>

              <div class="q-pa-md row items-start q-gutter-md">
                <q-img
                  v-if="hotel_list == 0"
                  src="~assets/logos/Coming Soon 2 (1).jpg"
                ></q-img>
                <q-card
                  v-for="item in hotel_list"
                  :key="item.id"
                  class="cursor-pointer col-12"
                  style="margin-left: 7px"
                  @click="moveToHotel(item)"
                >
                  <!--Mobile View Statrt-->
                  <q-card-section vertical class="q-pa-xs lt-sm">
                    <q-card-section class="col-12 flex flex-center">
                      <q-img
                        class="rounded-borders"
                        height="150px"
                        width="100%"
                        :src="`${hotelImgpath}${item.upload_image}`"
                      />
                    </q-card-section>
                    <q-card-section class="q-pt-xs col-6">
                      <div class="col-8">
                        <div
                          class="text-weight-bold q-mt-sm q-mb-xs text-justify"
                        >
                          {{ item.sub_property_name }}
                          <q-icon>
                            <img
                              style="width: 150px; margin-left: 130px"
                              src="~assets/logos/PF (1).webp"
                            />
                          </q-icon>
                        </div>
                        <div class="text-caption text-black text-bold">
                          <q-icon name="las la-map-marker" size="16px" />
                          <strong>
                            <span class="background">
                              {{ item.kilo_meter }}
                            </span></strong
                          >
                          kms from the hospital
                        </div>
                        <div class="text-black">
                          {{ item.address }}
                        </div>

                        <div
                          class="col-12"
                          style="align-items: center; justify-content: center"
                        >
                          <div
                            class="col-3"
                            style="width: 5px; height: 100px; float: left"
                          >
                            <img
                              style="
                                float: left;
                                width: 140px;
                                margin-top: 18px;
                              "
                              @click="handleCustomEvent(`${redcliffpath}`)"
                              src="../../assets/logos/MH OFFER 2.webp"
                            />
                          </div>

                          <div class="q-pa-sm col-9 relative-top-right">
                            <div class="row justify-end">
                              <div class="row col-12 justify-end">
                                <span
                                  style="font-size: 16px; padding-left: 70px"
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
                                        searchDetails.adult_count >= 4
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
                                <span
                                  style="font-size: 16px; padding-left: 70px"
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
                                    searchDetails.adult_count >= 4
                                      ? 2 * item.price -
                                        parseInt(
                                          item.price *
                                            (item.partner_specialOffer / 100)
                                        ) -
                                        parseInt(
                                          (item.price *
                                            item.property_specialOffer) /
                                            100
                                        )
                                      : item.price -
                                        parseInt(
                                          item.price *
                                            (item.partner_specialOffer / 100)
                                        ) -
                                        parseInt(
                                          (item.price *
                                            item.property_specialOffer) /
                                            100
                                        )
                                  }}
                                  <!-- {{
                                    searchDetails.adult_count >= 4
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
                                          (item.price *
                                            item.property_specialOffer) /
                                            100
                                        ) -
                                        mangohomzOffers_arr[0].offer_price
                                  }} -->
                                </span>
                              </div>
                            </div>
                            <span
                              class="row justify-end"
                              style="font-size: 10px"
                              >+ ₹{{
                                parseInt(
                                  ((searchDetails.adult_count >= 4
                                    ? 2 * item.price
                                    : item.price) *
                                    item.gst_per) /
                                    100
                                )
                              }}
                              Taxes
                            </span>
                            <span
                              class="row justify-end"
                              style="font-size: 10px"
                              >{{
                                searchDetails.adult_count >= 4
                                  ? `${item.units} For 2 Rooms`
                                  : item.units
                              }}</span
                            >
                            <div class="row col-12 justify-end">
                              <span
                                class="row col-12 text-primary text-end justify-end"
                                style="font-size: 10px; text-align: end"
                              >
                                Login & Unlock a secret deal
                              </span>
                              <q-btn
                                size="sm"
                                rounded
                                color="primary"
                                class="text-weight-bold q-ml-xl"
                                >Book Now
                              </q-btn>
                            </div>

                          </div>
                        </div>

                        <!--Property Amenities Start-->
                        <q-card-section>
                          <div class="row">
                            <div class="rig ">
                          <img
                            style="margin-top: -25px;width: 185px; height: 90px;margin-left:170px"
                            src="../../assets/web_site/Why MH.webp"
                          />
                        </div>
                            <div
                              class="col-12 text-primary text-bold"
                              size="sm"
                              style="margin-left: -25px"
                            >
                              Property Amenities:


                            </div>

                            <div
                              class="col-6 text-justify text-subtitle2 amenities_hori_line"
                              v-for="(item2, i) in item.amenity_name"
                              :key="item2.id"
                              style="margin-left: -45px"
                            >
                              <q-item dense class="cell-class">
                                <q-item-section
                                  avatar
                                  size="30"
                                  class="text-right"
                                  style="margin-right: -30px"
                                >
                                  <q-icon
                                    color="secondary"
                                    :name="item.amenity_icon[i]"
                                  />
                                </q-item-section>
                                <q-item-section style="margin-right: 18px">
                                  <q-item-label
                                    class="text-black text-bold text-left"
                                    style="font-size: 12px"
                                    >{{ item.amenity_name[i] }}</q-item-label
                                  >
                                </q-item-section>
                              </q-item>
                            </div>

                          </div>
                        </q-card-section>
                        <!--Property Amenities End-->
                        <q-chip
                          outline
                          color="primary"
                          text-color="white"
                          size="sm"
                          style="margin-left: -10px"
                        >
                          <strong>About Property</strong>
                        </q-chip>
                        <div
                          class="text-caption text-black text-justify text-bold q-mr-xs"
                          style="margin-left: -10px"
                        >
                          {{ item.property_description }}
                        </div>

                        <div class="q-gutter-md q-pt-xs text-secondary">
                          <q-icon
                            v-for="facility in item.facilities"
                            :key="facility.id"
                            :name="facility.icon"
                            size="sm"
                          >
                            <q-tooltip>{{ facility.name }}</q-tooltip>
                          </q-icon>
                        </div>
                      </div>
                      <div class="q-pa-sm absolute-top-right">
                        <q-icon
                          ><q-img
                            src="~assets/logos/MHmini_logo_128x128.png"
                          ></q-img></q-icon
                        ><q-chip color="secondary" dark dense size="sm"
                          >{{ hotel_rating }}/5 good</q-chip
                        >
                        <div>
                          <q-rating
                            v-model="item.rating"
                            size="1em"
                            :max="5"
                            color="secondary"
                            readonly
                          />
                        </div>
                      </div>
                    </q-card-section>
                  </q-card-section>
                  <!--Mobile view End -->
                </q-card>
                <q-separator />
              </div>
            </div>
          </q-card>
        </div>

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
      <testimonials style="margin-top: 10px" />

      <most-recent-search-vue />
    </q-page>
    <!--Mobile View End-->
  </q-page-container>
</template>
<script>
import { log } from "console";
import { mapActions, mapState, mapGetters } from "vuex";
import filepaths from "../../helpers/filepath";
import { api } from "boot/axios";
import mostRecentSearchVue from "../menuContentPages/mostRecentSearch.vue";
import testimonials from "..//..//components/testimonials.vue";

import { stringify } from "querystring";

export default {
  components: {
    mostRecentSearchVue,
    testimonials,
  },
  name: "mostRecentSearchResults",

  data() {
    return {
      city_seo_name: "",
      hospital_seo_name: "",
      selectedChip: "distanceNear",
      hotelImgpath: filepaths.mhapFilePath,
      redcliffpath: filepaths.redcliffurl,
      slide: "style",
      lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      standard: 2,
      stars: 4,
      tab: "one",
      confirm: false,
      class_val: "shadow-1 hotel-details-card-1",
      priceRange: {
        min: null,
        max: null,
      },
      item: {
        rating: "",
      },
      searchItem: {
        city: "",
        hospital: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        adult_count: 0,
        child_count: 0,
        infant_count: 0,
        youtube_link: "",
        map_link: "",
      },
      hotelItem: {},
      hotel_rating: 4.5,
      hotelSerachDetails: "",
      hotelsListArr: [],
    };
  },
  created() {
    // console.log("sasa",this.mangohomzOffers_arr);
    // console.log("34534", this.hotel_list);
    // this.getKilometers();
  },
  mounted() {
    this.city_seo_name = this.$route.params.city;
    this.hospital_seo_name = this.$route.params.hospital;
  },
  computed: {
    isSelected() {
      return (chip) => {
        return this.selectedChip === chip;
      };
    },
    ...mapState({
      hospital: (state) => state.dropdown.hospital_arr,
      hotel_list: (state) => state.booking.hotelDetails,
      searchDetails: (state) => state.booking.searchDetails,
      mangohomzOffers_arr: (state) => state.booking.mangohomzOffers_arr,
      // citywise_seo_array: (state) => state.mostrecentsearch.citywise_seo_array,
    }),
    ...mapGetters("mostrecentsearch", ["citywise_seo_array"]),
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
  },
  async mounted() {
    // let hotelSerachDetails =(JSON.parse(this.$route.params.searchInfo));
    // console.log("hotelsearch",hotelSerachDetails,(JSON.parse(this.$route.params.searchInfo)));

    let city_seo_name = this.$route.params.city;
    let hospital_seo_name = this.$route.params.hospital;
    try {
      const data = await this.someFunction(city_seo_name, hospital_seo_name);
      this.hospitalDetails = data;
      // console.log("mostRecent1:", this.hospitalDetails);
    } catch (error) {
      // Handle error if needed
    }
    this.searchItem = {
      city: {
        city_name: this.hospitalDetails.data?.[0].city,
        city_id: this.hospitalDetails.data?.[0].city_id,
      },
      hospital: {
        near_hospital_name: this.hospitalDetails.data?.[0].near_hospital_name,
        latitude: this.hospitalDetails.data?.[0].latitude,
        longitude: this.hospitalDetails.data?.[0].longitude,
      },
      guests: this.hospitalDetails.guest,
      adult_count: this.hospitalDetails.adult_count,
      child_count: this.hospitalDetails.child_count,
      checkIn: this.hospitalDetails.today,
      checkOut: this.hospitalDetails.nextDay,
      youtube_link: this.hospitalDetails.data?.[0].youtube_link,
      map_link: this.hospitalDetails.data?.[0].map_link,
    };
    // console.log("mostserachInfo2ndpage", this.searchItem);

    this.$store.dispatch(`booking/loadHotels`, this.searchItem);
    this.$store.dispatch("booking/getMangohomzOfferData");
    this.$store.dispatch(`dropdown/loadAllHospitals`, this.searchItem.city);
  },
  methods: {
    selectChip(chip) {
      this.selectedChip = chip;
    },

    async fetchData(city_seo_name, hospital_seo_name) {
      try {
        const response = await api.get(
          `/mostRecentSearch/loadCityWiseForSeo/${city_seo_name}/${hospital_seo_name}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async someFunction(cityName, hospitalName) {
      try {
        const response = await this.fetchData(cityName, hospitalName);
        // console.log("console", response);
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    moveToHotel(item) {
      // console.log("ssss",item);
      this.hotelItem = Object.assign({}, item);
      // console.log("sss", this.searchItem);
      this.$router.push({
        name: "Hotel Information",
        params: {
          hotelInfo: JSON.stringify({
            partner_id: item.partner_id,
            partner_sub_id: item.partner_sub_id,
            txn_id: item.txn_id,
            kilo_meter: item.kilo_meter,
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
        // {partner_id:item.partner_id,partner_sub_id:item.partner_sub_id,txn_id:item.txn_id,room_image_1:item.room_image_1}
      });
    },
    applyFilters() {},
    sortByPrice() {
      this.hotel_list.sort((a, b) => a.price - b.price);
      return this.hotel_list;
    },
    sortByPriceHightoLow() {
      this.hotel_list.sort((a, b) => b.price - a.price);
      return this.hotel_list;
    },
    sortByDistance() {
      this.hotel_list.sort((a, b) => a.kilo_meter - b.kilo_meter);
      return this.hotel_list;
    },
    sortByDistanceFartoNear() {
      this.hotel_list.sort((a, b) => b.kilo_meter - a.kilo_meter);
      return this.hotel_list;
    },
    handleCustomEvent(url) {
      window.open(url);
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
  max-width: 250px
.grad
  background-image: linear-gradient(to bottom, #cccccc 15%, #cccccc 10%)
</style>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gabarito&display=swap");
.background {
  display: inline-block;
  color: maroon;
  font-family: verdana;
  font-size: 14px;
  padding: 5px;
  border-radius: 20px;
}
.grad {
  background-color: white;
}
.selected {
  background-color: #65b8db !important;
  color: #000000 !important;
}
.lineLeft {
  width: 2.5px;
  background-color: #568b9b;
  margin-left: 2vw;
  margin-right: 20px;
  border-radius: 2px;
}
.containerSeoWidget {
  font-family: "Gabarito", sans-serif;
  margin-top: -5px;
}
.container-specs-mobile ul li {
  width:100%;
  font-size:16px;
}
.containerSeoWidget p {
  margin-bottom: -5px;
  font-size: 28px;
}
.titleHospital,
.titleHospitalMobile {
  background-color: #b9f1fe;
  margin-left: -10px;
  width: 48.9vw;
  height: 11.2vw;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: 4px;
}
.titleHospitalMobile {
  width: 100%;
  height: 100%;
}
.container-specs,
.container-specs-mobile {
  background-color: #b3fdd8;
  margin-left: -10px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: 5px;
  color: #154964;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 10px;
  width: 450px;
}
.map-container {
  margin-top: 5px;
  margin-right: 5px;
}
.specsRightMobile ul li,
.specsLeftMobile ul li {
  font-weight: 700;
}
.specsLeft ul li,
.specsRight ul li {
  font-size: 18px;
}
.distHospi {
  font-size: 18px;
}
.titleHospitalMobile {
  /* width: 100%; */
  height: 100%;
  margin-top: -29px;
  width: 100vw;
  margin-left: -15px;
}
.containerSeoWidgetMobile p {
  margin-bottom: 5px;
  font-family: "Gabarito", sans-serif;
  margin-top: -5px;
}
.yt-widget {
  width: 46vw;
}
.container-specs ul li {
  font-size:18px;
}
@media only screen and (min-width: 1024px) and (max-width:1800px) {
  .yt-widget,
  .ytVideo {
    width: 48.8vw;
    height: 25.5vw;
  }
  .container-specs {
    width: 29.4vw;
  }
  .map-widget {
    width: 19.2vw !important;
  }
}
@media only screen and (min-width: 1920px) {
  .yt-widget {
    height: 20.5vw;
    width: 49vw;
}
}
</style>
