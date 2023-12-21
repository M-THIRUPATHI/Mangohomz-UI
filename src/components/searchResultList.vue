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
        <div class="flex flex-center">
          <div class="container-left">
            <div class="right-container">
              <div class="ytVideo">
                <iframe
                  class="yt-widget"
                  v-if="this.youtube_link"
                  height="350"
                  :src="this.youtube_link"
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
          <div class="container-right">
            <div class="map-container">
              <iframe
                v-if="map_link"
                :src="map_link"
                width="394"
                class="map-widget"
                height="174"
                style="border:0;width:94vw"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
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
              {{ this.searchItem.city.city_name }}
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
                  class="col-12"
                >
                  <q-card-section horizontal class="q-pa-xs gt-sm">
                    <q-card-section class="col-3 flex flex-center">
                      <q-img
                        @click="OpenPropDialog(item)"
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
                          <strong>
                            <span class="background ">
                              {{ item.kilo_meter }}
                            </span></strong
                          >
                          kms from the hospital
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
                      <div
                        class="q-pa-sm absolute-top"
                        style="margin-left: 340px"
                      >
                        <q-btn
                          round
                          color="primary"
                          icon="mdi-phone"
                          type="a"
                          aria-label="MH Phone Communication Link"
                          href="tel:8929982655"
                          target="_blank"
                          ><q-tooltip class="bg-primary text-body2"
                            >Phone</q-tooltip
                          ></q-btn
                        >
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
                            @click="moveToHotel(item)"
                            >Book Now
                          </q-btn>
                        </div>
                        <div class="rig">
                          <img
                            style="width: 185px; height: 90px"
                            src="../assets/web_site/Why MH.webp"
                          />
                        </div>
                      </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
                <q-dialog v-model="thumbnail">
                  <q-card style="width: 600px; height: 500px">
                    <q-card-section>
                      <div class="text-h6 text-center text-bold q-pa-sm">
                        {{ this.propName }}
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
                      <q-carousel
                        arrows
                        swipeable
                        v-model="slide"
                        thumbnails
                        infinite
                      >
                        <q-carousel-slide
                          :name="1"
                          :img-src="`${hotelImgpath}${this.propImage1}`"
                        />
                        <q-carousel-slide
                          :name="2"
                          :img-src="`${hotelImgpath}${this.propImage2}`"
                        />
                        <q-carousel-slide
                          :name="3"
                          :img-src="`${hotelImgpath}${this.propImage3}`"
                        />
                        <q-carousel-slide
                          :name="4"
                          :img-src="`${hotelImgpath}${this.propImage4}`"
                        />
                      </q-carousel>
                    </q-card-section>
                  </q-card>
                </q-dialog>
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
      <most-recent-search-vue style="margin: 10px" />
    </q-page>

    <!--Mobile View Start -->
    <q-page style="padding-top: 1px" class="q-pa-md grad lt-sm">
      <div class="containerSocMobile">
        <div class="ytVideo" style="margin-top:16vw;">
          <iframe
            class="yt-widgetMobile"
            v-if="youtube_link"
            height="350"
            :src="youtube_link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
          <iframe
            class="yt-widgetMobile"
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
        <div class="map-container">
          <iframe
            v-if="map_link"
            :src="map_link"
            width="394"
            class="map-widgetMobile"
            height="174"
            style="border:0;width:94vw"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
          <iframe
            v-else
            src="https://www.alternative-map-source.com"
            width="300"
            class="map-widgetMobile"
            height="184"
            style="border:0;width:94vw"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
      <div class="justify-center grad" style="margin-top: 85px">
        <div
          class="row q-gutter-md"
          style="margin-right: -15px; margin-left: -32px; margin-top: -45px"
        >
          <q-card
            flat
            :class="this.class_val"
            class="cursor-pointer"
            style="padding-top: 0px; background-color: gray"
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
              Recommended for You In {{ this.searchItem.city.city_name }}
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
                  class="col-12"
                  style="margin-left: 7px"
                >
                  <!--Mobile View Statrt-->
                  <q-card-section vertical class="q-pa-xs lt-sm">
                    <q-card-section class="col-12 flex flex-center">
                      <q-img
                        @click="OpenPropDialog(item)"
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
                        </div>
                        <q-icon>
                          <img
                            style="width: 150px; margin-left: 130px"
                            src="~assets/logos/PF (1).webp"
                          />
                        </q-icon>
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
                              src="../assets/logos/MH OFFER 2.webp"
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
                                @click="moveToHotel(item)"
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
                                style="margin-top: -25px;width: 185px; height: 90px;margin-left:120px"
                                src="../assets/web_site/Why MH.webp"
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

                      <div
                        class="q-pa-sm absolute-top"
                        style="margin-left: 240px"
                      >
                        <q-btn
                          round
                          color="primary"
                          icon="mdi-phone"
                          type="a"
                          aria-label="MH Phone Communication Link"
                          href="tel:8929982655"
                          target="_blank"
                          ><q-tooltip class="bg-primary text-body2"
                            >Phone</q-tooltip
                          ></q-btn
                        >
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
                <q-dialog v-model="thumbnail">
                  <q-card style="width: 600px; height: 500px">
                    <q-card-section>
                      <div class="text-h6 text-center text-bold q-pa-sm">
                        {{ this.propName }}
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
                      <q-carousel
                        arrows
                        swipeable
                        v-model="slide"
                        thumbnails
                        infinite
                      >
                        <q-carousel-slide
                          :name="1"
                          :img-src="`${hotelImgpath}${this.propImage1}`"
                        />
                        <q-carousel-slide
                          :name="2"
                          :img-src="`${hotelImgpath}${this.propImage2}`"
                        />
                        <q-carousel-slide
                          :name="3"
                          :img-src="`${hotelImgpath}${this.propImage3}`"
                        />
                        <q-carousel-slide
                          :name="4"
                          :img-src="`${hotelImgpath}${this.propImage4}`"
                        />
                      </q-carousel>
                    </q-card-section>
                  </q-card>
                </q-dialog>
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
      <most-recent-search-vue />
    </q-page>
    <!--Mobile View End-->
  </q-page-container>
</template>
<script>
import { log } from "console";
import { mapActions, mapState } from "vuex";
import filepaths from "../helpers/filepath";
import { stringify } from "querystring";
import { date } from "quasar";
import mostRecentSearchVue from "../pages/menuContentPages/mostRecentSearch.vue";

export default {
  components: {
    mostRecentSearchVue
  },
  name: "searchResults",

  data() {
    return {
      thumbnail: false,
      PropImgPath: "",
      propImage1: "",
      propImage2: "",
      propImage3: "",
      propImage4: "",
      selectedChip: "distanceNear",
      hotelImgpath: filepaths.mhapFilePath,
      redcliffpath: filepaths.redcliffurl,
      slide: 1,
      lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      standard: 2,
      stars: 4,
      tab: "one",
      confirm: false,
      class_val: "shadow-1 hotel-details-card-1",
      priceRange: {
        min: null,
        max: null
      },
      item: {
        rating: ""
      },
      searchItem: {
        city: "",
        hospital: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        adult_count: 0,
        child_count: 0,
        infant_count: 0
      },
      hotelItem: {},
      hotel_rating: 4.5,
      hotelSerachDetails: "",
      hotelsListArr: [],
      map_link: "",
      youtube_link: ""
    };
  },
  created() {
    // console.log("sasa",this.mangohomzOffers_arr);
    // console.log("34534", this.hotel_list);
    // this.getKilometers();
    this.PropImgPath = filepaths.mhapFilePath;
  },
  computed: {
    isSelected() {
      return chip => {
        return this.selectedChip === chip;
      };
    },
    ...mapState({
      hospital: state => state.dropdown.hospital_arr,
      hotel_list: state => state.booking.hotelDetails,
      searchDetails: state => state.booking.searchDetails,
      mangohomzOffers_arr: state => state.booking.mangohomzOffers_arr
    }),
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    }

    //   filteredHotelList() {
    //   if (this.searchDetails.adult_count <= 2) {

    //     return this.hotel_list;
    //   } else {

    //     return this.hotel_list.filter((item) => {
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
  mounted() {
    let hotelSerachDetails = JSON.parse(this.$route.params.searchInfo);
    this.map_link = hotelSerachDetails.hospital.map_link;
    this.youtube_link = hotelSerachDetails.hospital.youtube_link;
    //  console.log("1stpages",hotelSerachDetails,(JSON.parse(this.$route.params.searchInfo)));
    // let hotelSerachDetails =JSON.parse(localStorage.getItem("searchItem")) || [];
    // (JSON.parse(this.$route.params.searchInfo));

    let currentDate = date.formatDate(new Date(), "YYYY/MM/DD");
    let nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);

    let checkInDate = hotelSerachDetails.dateModel.from;
    let checkOutDate = hotelSerachDetails.dateModel.to;
    if (checkInDate <= currentDate) {
      checkInDate = currentDate;
    }
    if (checkOutDate <= currentDate) {
      let nextDay = new Date(currentDate);
      nextDay.setDate(nextDay.getDate() + 1);
      checkOutDate = date.formatDate(nextDay, "YYYY/MM/DD");
    }

    // console.log("currentDate", currentDate, "checkin", checkInDate, "checkout", checkOutDate);

    //console.log("currentDate", currentDate, "nextDate", nextDateFormat);
    this.searchItem = {
      city: hotelSerachDetails.city,
      hospital: hotelSerachDetails.hospital,
      guests: hotelSerachDetails.guest,
      adult_count: hotelSerachDetails.adult_count,
      child_count: hotelSerachDetails.child_count,
      checkIn: checkInDate,
      checkOut: checkOutDate
    };
    // console.log("959",this.searchItem);
    this.$store.dispatch(`booking/loadHotels`, this.searchItem);
    this.$store.dispatch("booking/getMangohomzOfferData");
    this.$store.dispatch(`dropdown/loadAllHospitals`, this.searchItem.city);
  },
  methods: {
    OpenPropDialog(item) {
      // console.log("item", item);
      (this.propImage1 = item.upload_image1),
      (this.propImage2 = item.upload_image2),
      (this.propImage3 = item.upload_image3),
      (this.propImage4 = item.upload_image),
        (this.propName = item.sub_property_name),
        (this.thumbnail = true);
    },
    selectChip(chip) {
      this.selectedChip = chip;
    },
    moveToHotel(item) {
      // console.log("ssss",item);
      let hotelSerachDetails = JSON.parse(this.$route.params.searchInfo);
      let currentDate = date.formatDate(new Date(), "YYYY/MM/DD");
      let nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + 1);

      let checkInDate = hotelSerachDetails.dateModel.from;
      let checkOutDate = hotelSerachDetails.dateModel.to;
      if (checkInDate <= currentDate) {
        checkInDate = currentDate;
      }
      if (checkOutDate <= currentDate) {
        let nextDay = new Date(currentDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkOutDate = date.formatDate(nextDay, "YYYY/MM/DD");
      }
      this.searchItem = {
        city: hotelSerachDetails.city,
        hospital: hotelSerachDetails.hospital,
        guests: hotelSerachDetails.guest,
        adult_count: hotelSerachDetails.adult_count,
        child_count: hotelSerachDetails.child_count,
        checkIn: checkInDate,
        checkOut: checkOutDate
      };
      this.hotelItem = Object.assign({}, item);
      // console.log("sss",this.searchItem,item);
      this.$router.push({
        name: "Hotel Information",
        params: {
          hotelInfo: JSON.stringify({
            partner_id: item.partner_id,
            partner_sub_id: item.partner_sub_id,
            txn_id: item.txn_id,
            kilo_meter: item.kilo_meter
          }),
          searchInfo: JSON.stringify({
            ...this.searchItem,
            guest: this.searchItem.guests,
            dateModel: {
              from: this.searchItem.checkIn,
              to: this.searchItem.checkOut
            }
          })
        }
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
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
<style>
.background {
  display: inline-block;
  /* background-color: orange; */
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
.yt-widget {
  width: 45vw;
  height: 14vw;
  margin-right: 5px;
}
.map-widget {
  width: 19.5vw !important;
  height: 14vw;
  margin-left: 0vw;
}
.yt-widgetMobile {
  width: 92vw;
  height: 34vw;
}
.map-widgetMobile {
  width: 92vw !important;
  height: 34vw;
  margin-bottom: -14vw;
}
</style>
