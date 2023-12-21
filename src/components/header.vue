<template>
  <q-header class="q-py-sm bg-white">
    <q-toolbar class="bg-white text-black">
      <router-link to="/">
        <!-- <q-img
          clickable
          aria-label="Mangohomz – Book a Patient-friendly room near the hospital"
          class="bg-white gt-xs"
          style="height: 50px; width: 280px;background-size:contain !important;"
          src="~assets/logos/logo-main.png"
        /> -->
        <div class="mh-logo">
          <img
            src="~assets/logos/logo-main.png"
            style="
              height: 35px;
              width: 180px;
              background-size: contain !important;
              margin-top: 20px;
            "
            alt=""
          />
        </div>
        <!-- <q-img
          clickable
          class="bg-white lt-sm"
          aria-label="Mangohomz – Book a Patient-friendly room near the hospital"
          style="height: 30px; width: 180px;background-size:contain !important;"
          src="~assets/logos/logo-main.png"
        /> -->
      </router-link>
      <q-space />
      <!-- <q-btn
        class="gt-xs text-bold"
        no-caps
        style="margin: 10px; margin-right: -3px;background-color:#63b272;color:white;font-weight:600"
        label="MH CARE GENIE"
        @click="helthsupportOpenInNewTab()"
      > -->
      <!-- <q-icon name="mdi-account-multiple-plus-outline" color="indigo-9" /> -->
      <!-- <q-tooltip> +91 8929982655 </q-tooltip> -->
      <!-- </q-btn> -->
      <div class="callUs">
        <q-btn
          class="gt-xs text-bold"
          no-caps
          style="
            margin: 10px 2px 10px 10px;
            background-color: rgb(101, 163, 45);
            color: white;
            font-weight: bold;
          "
          label="Call Us"
          icon="mdi-phone"
          type="a"
          aria-label="MH Phone Communication Link"
          @click="openCallUsPopUp"
        >
          <!-- <q-icon name="mdi-account-multiple-plus-outline" color="indigo-9" /> -->
          <!-- <q-tooltip> +91 8929982655 </q-tooltip> -->
        </q-btn>
        <div
          class="contactUsPopUp"
          v-if="callUsPopUp"
          style="z-index: 2; position: absolute"
        >
          <q-img
            @click="CloseCallUsPopUp"
            contain
            src="~assets/Close Button Logo P.png"
            class="cursor-pointer"
            style="
              width: 20px;
              height: 20px;
              margin-left: 98%;
              margin-top: -16px;
            "
          />
          <div class="flex" style="margin-top: -26px">
            <div class="callUsImage">
              <div>
                <q-img
                  contain
                  src="~assets/Call Button P.png"
                  style="width: 100px; height: 80px; margin-left: -10px"
                />
              </div>
            </div>
            <div class="contentUsImage q-mt-xsm q-mr-md">
              <p>
                <span class="textphNo">Call us </span><br /><span
                  class="phoneNumber"
                  ><a
                    href="tel:8929982655"
                    target="_blank"
                    class="cursor-pointer"
                    >+91 8929982655</a
                  ></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="callUs">
        <q-btn
          class="gt-xs text-bold"
          no-caps
          style="margin: 10px; margin-right: -3px"
          color="indigo-9"
          label="About Us"
          to="/about"
        />
      </div>
      &emsp;
      <!-- <div
        class="gt-xs text-weight-bold text-black q-pa-md"
        style="font-family: verdana; font-size: 16px"
      >
        <q-icon
          name="mdi-phone"
          color="black"
          style="font-family: verdana; font-size: 16px"
        />/<q-icon
          name="mdi-whatsapp"
          color="black"
          style="font-family: verdana; font-size: 16px"
        />
        +91 8929982655
        <br />
        <p
          style="font-family: verdana;text-align: end; font-size: 12px; margin-bottom: 0px"
          class="text-center"
        >
          Call Time 8 am to 8 pm
        </p>
      </div> -->

      <!--Website View  -->
      <q-btn-dropdown
        style="margin-right: 50px; width: 6%; padding-left: 8px"
        class="gt-xs text-bold"
        color="indigo-9"
        no-caps
      >
        <template v-slot:label>
          Bookings
          <q-tooltip> Bookings </q-tooltip>
        </template>
        <q-list>
          <q-btn-dropdown
            menu-anchor="bottom right"
            menu-self="top left"
            class="text-bold text-primary"
            label="Other Bookings"
            no-caps
          >
            <q-list>
              <q-item
                clickable
                dense
                v-close-popup
                @click="travelBookingsDialog = true"
              >
                <q-item-section class="text-bold text-primary">
                  <q-item-label>Travel</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                dense
                v-close-popup
                @click="medicalBookingsDialog = true"
              >
                <q-item-section class="text-bold text-primary">
                  <q-item-label>Medical</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                dense
                v-close-popup
                @click="foodBookingsDialog = true"
              >
                <q-item-section class="text-bold text-primary">
                  <q-item-label>Food</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-item
            class="q-mt-xs"
            clickable
            dense
            v-close-popup
            @click="openCancelBookingsDialog()"
          >
            <q-item-section class="text-bold text-primary">
              <q-item-label>Cancel Booking</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <!--Website View  ENd-->

      <!-- Mobile View -->

      <!-- <q-btn
        class="lt-sm text-bold"
        round
        size="14px"
        style="margin-right: -1%"
        color="secondary"
        icon="mdi-whatsapp"
        type="a"
        aria-label="MH WhatsApp Communication Link"
        href="https://api.whatsapp.com/send?phone=918929982655"
        target="_blank"
        ><q-tooltip class="bg-green"> WhatsApp </q-tooltip>
      </q-btn> -->
      <!-- <q-btn
        class="lt-sm text-bold"
        round
        size="10px"
        style="margin-right: -1%"
      > -->
      <!-- <q-img
          src="~assets/logos/Book.webp"
          style="width: 35px; height: 35px; max-width: 35px"
        /> -->
      <!-- <q-tooltip>Other Bookings </q-tooltip> -->
      <!-- <q-menu fit>
          <q-item
            menu-anchor="bottom right"
            menu-self="top left"
            class="text-bold text-primary"
            label="Other Bookings"
            no-caps
          >
            <q-list>
              <q-item
                clickable
                dense
                v-close-popup
                @click="accommodationbookingpage()"
              >
                <q-item-section class="text-bold text-primary">
                  <q-item-label>Accommodation</q-item-label>
                </q-item-section>
              </q-item>
               <q-item
                clickable
                dense
                v-close-popup
                @click="travelBookingsDialog = true"
              >
                <q-item-section class="text-bold text-primary">
                  <q-item-label>Travel</q-item-label>
                </q-item-section>
              </q-item>

               <q-item
                clickable
                dense
                v-close-popup
                @click="medicalBookingsDialog = true"
              >
                <q-item-section class="text-bold text-primary">
                  <q-item-label>Medical</q-item-label>
                </q-item-section>
              </q-item>
             <q-item
                clickable
                dense
                v-close-popup
                @click="foodBookingsDialog = true"
              >
                <q-item-section class="text-bold text-primary">
                  <q-item-label>Food</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item>
          <q-item
            class="q-mt-xs"
            clickable
            dense
            v-close-popup
            @click="openCancelBookingsDialog()"
          >
            <q-item-section class="text-bold text-primary">
              <q-item-label>Cancel booking</q-item-label>
            </q-item-section>
          </q-item>
        </q-menu>
      </q-btn> -->
      <!-- Mobile View End -->

      <q-dialog v-model="travelBookingsDialog" no-backdrop-dismiss>
        <q-card style="min-width: 200px">
          <q-card-section class="row col-12">
            <div class="col-11 text-h6 text-bold text-primary">
              <q-icon>
                <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
              </q-icon>
              Travel Booking
            </div>
            <div>
              <q-btn
                dark
                flat
                padding="none"
                class="justify-end"
                icon="close"
                @click="closeBookingsLoginDialog"
                v-close-popup
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-separator />
          <div class="row justify-center">
            <div col="5">
              <q-input
                flat
                outlined
                dense
                class="q-mb-sm q-ma-md"
                no-caps
                style="width: 250px; height: 20px"
                label="MH Booking ID"
                v-model="mh_booking_id"
              ></q-input>
            </div>
            <div col="3">
              <q-btn
                outlined
                rounded
                class="col-3 q-mb-sm q-ma-md"
                color="primary"
                @click="opentravel(mh_booking_id)"
              >
                Search</q-btn
              >
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="medicalBookingsDialog">
        <q-card style="min-width: 200px">
          <q-card-section class="row col-12">
            <div class="col-11 text-h6 text-bold text-primary">
              <q-icon>
                <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
              </q-icon>
              Medical Booking
            </div>
            <div>
              <q-btn
                dark
                flat
                padding="none"
                class="justify-end"
                icon="close"
                @click="closeBookingsLoginDialog"
                v-close-popup
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-separator />
          <div class="row justify-center">
            <div col="5">
              <q-input
                flat
                outlined
                dense
                class="q-mb-sm q-ma-md"
                no-caps
                style="width: 250px; height: 20px"
                label="MH Booking ID"
                v-model="mh_booking_id"
              ></q-input>
            </div>
            <div col="3">
              <q-btn
                outlined
                rounded
                class="col-3 q-mb-sm q-ma-md"
                color="primary"
                @click="openmedical(mh_booking_id)"
              >
                Search</q-btn
              >
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="foodBookingsDialog">
        <q-card style="min-width: 200px">
          <q-card-section class="row col-12">
            <div class="col-11 text-h6 text-bold text-primary">
              <q-icon>
                <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
              </q-icon>
              Food Booking
            </div>
            <div>
              <q-btn
                dark
                flat
                padding="none"
                class="justify-end"
                icon="close"
                @click="closeBookingsLoginDialog"
                v-close-popup
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-separator />
          <div class="row justify-center">
            <div col="5">
              <q-input
                flat
                outlined
                dense
                class="q-mb-sm q-ma-md"
                no-caps
                style="width: 250px; height: 20px"
                label="MH Booking ID"
                v-model="mh_booking_id"
              ></q-input>
            </div>
            <div col="3">
              <q-btn
                outlined
                rounded
                class="col-3 q-mb-sm q-ma-md"
                color="primary"
                @click="openfood(mh_booking_id)"
              >
                Search</q-btn
              >
            </div>
          </div>
        </q-card>
      </q-dialog>
      <!-- <q-icon
        size="md"
        no-caps
        class="lt-sm cursor-pointer mh-short-icon"
        color="secondary"
        @click="openBookingsLoginDialog()"
      >
        <q-tooltip> partner with us </q-tooltip> </q-icon
      > -->
      &emsp;
      <q-btn
        class="gt-xs text-bold macSettings"
        style="
          margin-left: -52px; /* width: 9%; */
          padding-left: 8px;
          margin-right: -3px;
        "
        no-caps
        color="indigo-9"
        :label="langLabel"
        ><q-tooltip>Language </q-tooltip>
        &emsp;
        <!-- <q-img
          src="~assets/logos/LANGUAGE ICON.png"
          style="
            width: 30px;
            height: 30px;
            max-width: 30px;
            padding-right: 10px;
          "
        /> -->
        <q-menu fit>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('English')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/english-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;English</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="selectedLanguage('Hindi')">
              <q-icon size="xs"
                ><img
                  src="~assets/logos/hindi-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Hindi</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('Assamese')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/assamese-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Assamese</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('Bengali')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/BENGALI.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Bengali</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="selectedLanguage('Oriya')">
              <q-icon size="xs"
                ><img
                  src="~assets/logos/ODIA.png"
                  style="width: 30px; height: 30px; max-width: 30px"
                />
              </q-icon>
              <q-item-section>&emsp;Oriya</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <!-- <q-btn
        class="lt-sm text-bold"
        round
        size="10px"
        style="margin-right: -1%"
        @click="openMainPage()"
      >
        <q-img
          src="~assets/logos/LANGUAGE ICON_Mobile.webp"
          style="width: 35px; height: 35px; max-width: 35px"
        /><q-tooltip>Language </q-tooltip>

        <q-menu fit>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('English')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/english-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;English</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="selectedLanguage('Hindi')">
              <q-icon size="xs"
                ><img
                  src="~assets/logos/hindi-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Hindi</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('Assamese')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/assamese-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Assamese</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('Bengali')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/BENGALI.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Bengali</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="selectedLanguage('Oriya')">
              <q-icon size="xs"
                ><img
                  src="~assets/logos/ODIA.png"
                  style="width: 30px; height: 30px; max-width: 30px"
                />
              </q-icon>
              <q-item-section>&emsp;Oriya</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn> -->
      <!-- </q-icon
      > -->
      &emsp;
      <q-btn
        class="gt-xs text-bold"
        no-caps
        style="margin-right: 0px"
        color="indigo-9"
        label="Partner With Us"
        to="/partnerwithus"
      >
        <!-- <q-icon name="mdi-account-multiple-plus-outline" color="indigo-9" /> -->
        <q-tooltip>Partner With Us</q-tooltip>
      </q-btn>
      <q-btn
        class="gt-xs text-bold"
        no-caps
        style="margin: 10px; margin-right: -3px"
        color="indigo-9"
        label="Blog"
        @click="goToUrl(`https://mangohomz.ai/blog/`)"
      >
        <!-- <q-icon name="mdi-account-multiple-plus-outline" color="indigo-9" /> -->
        <q-tooltip>MangoHomz Blog </q-tooltip>
      </q-btn>
      <!-- <q-btn
        class="gt-xs text-bold"
        style="margin-left: 0px;"
        no-caps
        color="indigo-9"
        label="Partner With Us"
        @click="openPartnerCheckDialog()"

      />
       -->
      <!-- <q-btn
        round
        size="10px"
        style="margin-right: -1%"
        class="lt-sm text-bold"
        color="primary"
        @click="openPartnerCheckDialog()"
        ><q-img
          src="~assets/logos/Partner.webp"
          style="width: 35px; height: 35px; max-width: 35px"
        />
        <q-tooltip> partner with us </q-tooltip>
      </q-btn> -->
      &emsp;
      <q-btn
        class="gt-xs text-bold"
        no-caps
        style="margin-right: 10px"
        color="indigo-9"
        label="Login"
        @click="loginClick()"
      >
        <!-- <q-icon name="mdi-account-multiple-plus-outline" color="indigo-9" /> -->
        <q-tooltip>Login </q-tooltip>
      </q-btn>

      <!--New For Menu Start-->
      <div class="MobileDropDown">
        <q-btn
          class="lt-sm"
          round
          color="primary"
          icon="mdi-phone"
          type="a"
          style="margin-right: 20px"
          aria-label="MH Phone Communication Link"
          href="tel:8929982655"
          target="_blank"
          ><q-tooltip class="bg-primary text-body2">Phone</q-tooltip></q-btn
        >

        <q-btn
          class="lt-sm text-bold"
          round
          size="16px"
          style="margin-left: -5%"
          icon="mdi-menu"
          type="a"
          aria-label="Menu"
          @click="openMenuDropdown()"
        >
          <!-- <q-tooltip class="bg-green">Menu</q-tooltip> -->
        </q-btn>
        <div class="MobileMenu" v-if="MobileMenu" @click="closeMenu">
          <div class="containerMobile">
            <ul>
              <li @click="loginClick()">Login</li>
              <li class="dividerLine"></li>
              <li @click="RedirectAboutPage()">About Us</li>
              <li class="dividerLine"></li>
              <li @click="RedirectPartnerPage()">Partner With Us</li>
              <li class="dividerLine"></li>
              <li @click="goToUrl(`https://mangohomz.ai/blog/`)">MH Blog</li>
              <li class="dividerLine"></li>
              <li @click="openBookings">Manage Booking</li>
              <li class="dividerLine"></li>
              <li @click="openLanguage">Language</li>
            </ul>
          </div>
          <q-list v-if="showBookings" menu-self=" top left">
            <q-item
              clickable
              dense
              v-close-popup
              @click="accommodationbookingpage()"
            >
              <q-item-section class="text-bold text-primary">
                <q-item-label>Accommodation</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              dense
              v-close-popup
              @click="
                travelBookingsDialog = true;
                showBookings = false;
              "
            >
              <q-item-section class="text-bold text-primary">
                <q-item-label>Travel</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              dense
              v-close-popup
              @click="
                medicalBookingsDialog = true;
                showBookings = false;
              "
            >
              <q-item-section class="text-bold text-primary">
                <q-item-label>Medical</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              dense
              v-close-popup
              @click="
                foodBookingsDialog = true;
                showBookings = false;
              "
            >
              <q-item-section class="text-bold text-primary">
                <q-item-label>Food</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              class="q-mt-xs"
              clickable
              dense
              v-close-popup
              @click="openCancelBookingsDialog()"
            >
              <q-item-section class="text-bold text-primary">
                <q-item-label>Cancel booking</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list v-if="showLanguage" style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('English')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/english-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;English</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="selectedLanguage('Hindi')">
              <q-icon size="xs"
                ><img
                  src="~assets/logos/hindi-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Hindi</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('Assamese')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/assamese-alphabet.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Assamese</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="selectedLanguage('Bengali')"
            >
              <q-icon size="xs"
                ><img
                  src="~assets/logos/BENGALI.png"
                  style="width: 30px; height: 30px; max-width: 30px"
              /></q-icon>
              <q-item-section>&emsp;Bengali</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="selectedLanguage('Oriya')">
              <q-icon size="xs"
                ><img
                  src="~assets/logos/ODIA.png"
                  style="width: 30px; height: 30px; max-width: 30px"
                />
              </q-icon>
              <q-item-section>&emsp;Oriya</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <!--New For Menu End -->

      <!-- <q-btn
        class="lt-sm text-bold"
        round
        size="10px"
        style="margin-right: -1px"
        @click="loginClick()"
      >
        <q-img
          src="~assets/logos/Login.webp"
          style="width: 35px; height: 35px; max-width: 35px"
        /><q-tooltip>Login </q-tooltip>
      </q-btn> -->
      <q-dialog v-model="bar2">
        <q-card style="width: 500px" class="q-px-sm q-pb-md">
          <q-card-section>
            <div class="text-h6"></div>
          </q-card-section>

          <q-tabs
            v-model="tab"
            class="text-grey"
            active-color="primary"
            indicator-color="secondary"
            inline-label
          >
            <q-tab label="User Login" name="one" />
            <q-tab label="Partner Login" name="two" />
            <q-tab label="Agent Login" name="three" />
          </q-tabs>

          <q-separator />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="one">
              <q-card-section class="q-pa-xs">
                <q-form
                  class="q-gutter-md"
                  @submit="onSubmit"
                  @reset="onReset"
                  ref="customerLoginForm"
                >
                  <q-input
                    outlined
                    dense
                    v-model="customerLoginForm.username"
                    label="Username"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please Enter User Name',
                    ]"
                  />
                  <q-input
                    outlined
                    dense
                    type="password"
                    v-model="customerLoginForm.password"
                    label="Password"
                    ref="newForm1"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please Enter Password',
                    ]"
                  />
                </q-form>
                <!-- <small>
                  I agree to MangoHomz's
                  <a @click="userAgreementDialog = true" href="#"
                    >User Agreement</a
                  >
                  and
                  <a @click="userAgreementDialog = true" href="#">T&Cs</a>
                </small> -->
              </q-card-section>

              <q-card-actions align="around" class="q-pa-md q-gutter-sm">
                <q-btn
                  class="full-width text-weight-bolder"
                  label="Login"
                  @click="onSubmit"
                  color="primary"
                />

                <!-- <q-btn
                  size="md"
                  no-caps
                  label="Forgot Password?"
                  dense
                  flat
                  type="button"
                  color="primary"
                /> -->
              </q-card-actions>
              <!-- <q-card-section align="center">
                <q-icon>
                  <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
                </q-icon>
                Join with MangoHomz,
                <q-btn
                  size="md"
                  no-caps
                  label="Sign Up"
                  to="/userTypeReg"
                  dense
                  flat
                  type="button"
                  color="primary"
                />
                here
              </q-card-section> -->
            </q-tab-panel>
            <q-tab-panel name="two">
              <q-card-section class="q-pa-xs">
                <q-form
                  class="q-gutter-md"
                  @submit="onSubmit1"
                  @reset="onReset1"
                  ref="partnerLoginForm"
                >
                  <q-input
                    outlined
                    dense
                    v-model="partnerLoginForm.username"
                    label="Username"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please Enter User Name',
                    ]"
                  />
                  <q-input
                    outlined
                    dense
                    type="password"
                    v-model="partnerLoginForm.password"
                    label="Password"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please Enter Password',
                    ]"
                  />
                </q-form>
              </q-card-section>

              <q-card-actions align="around" class="q-pa-md q-gutter-sm">
                <q-btn
                  push
                  label="Login"
                  @click="onSubmit1"
                  color="primary"
                  class="full-width text-weight-bolder"
                />
                <!-- <q-btn
                  size="md"
                  no-caps
                  label="Forgot Password?"
                  dense
                  flat
                  type="button"
                  color="primary"
                /> -->
              </q-card-actions>
              <!-- <q-card-section align="center">
                <q-icon>
                  <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
                </q-icon>
                Join with MangoHomz,
                <q-btn
                  size="md"
                  no-caps
                  label="Sign Up"
                  to="/userTypeReg"
                  dense
                  flat
                  type="button"
                  color="primary"
                />
                here
              </q-card-section> -->
            </q-tab-panel>
            <q-tab-panel name="three">
              <q-card-section class="q-pa-xs">
                <q-form class="q-gutter-md" ref="bookingAgentLoginForm">
                  <q-input
                    outlined
                    dense
                    v-model="bookingAgentLoginForm.username"
                    label="Username"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please Enter User Name',
                    ]"
                  />
                  <q-input
                    outlined
                    dense
                    type="password"
                    v-model="bookingAgentLoginForm.password"
                    label="Password"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please Enter Password',
                    ]"
                  />
                </q-form>
              </q-card-section>

              <q-card-actions align="around" class="q-pa-md q-gutter-sm">
                <q-btn
                  push
                  label="Login"
                  color="primary"
                  class="full-width text-weight-bolder"
                  @click="agentsubmit()"
                />
                <!-- <q-btn
                  size="md"
                  no-caps
                  label="Forgot Password?"
                  dense
                  flat
                  type="button"
                  color="primary"
                /> -->
              </q-card-actions>
              <!-- <q-card-section align="center">
                <q-icon>
                  <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
                </q-icon>
                Join with MangoHomz,
                <q-btn
                  size="md"
                  no-caps
                  label="Sign Up"
                  @click="openagentRegDialog"
                  dense
                  flat
                  type="button"
                  color="primary"
                />
                here
              </q-card-section> -->
            </q-tab-panel>
          </q-tab-panels>
          <q-card-section class="q-pt-none"> </q-card-section>
        </q-card>
      </q-dialog>
      <!-- <q-dialog v-model="checkPartnerDialog">
        <q-card style="min-width: 350px">
          <q-toolbar class="bg-white text-primary rounded-borders">
            <q-toolbar-title class="text-subtitle1 text-weight-bold">
              Are you already a
              <q-icon>
                <q-img
                  src="~assets/logos/MHmini_logo_128x128.png"
                ></q-img> </q-icon
              >Mangohomz Partner ?
            </q-toolbar-title>

            <q-btn
              flat
              dense
              color="primary"
              icon="close"
              @click="checkPartnerDialog = false"
            >
            </q-btn>
          </q-toolbar>
          <div class="row col-12 justify-center q-mb-sm">
            <q-btn
              outline
              no-caps
              style="color: green"
              class="q-mr-sm q-px-md text-bold"
              label="Yes"
              @click="openPartnerLoginDialog()"
            />
            <q-btn
              outline
              no-caps
              class="q-mr-sm q-px-md text-bold"
              style="color: green"
              label="No"
              @click="openPartnerRegDialog()"
            >
            </q-btn>
          </div>
        </q-card>
      </q-dialog> -->
      <q-dialog v-model="cancellationMassageDialog" no-backdrop-dismiss>
        <q-card style="min-width: 350px">
          <q-btn
            dark
            size="sm"
            class="justify-end lt-sm"
            style="margin-left: 300px"
            icon="close"
            color="primary"
            @click="closecancellationDialogOpen()"
          >
            <q-tooltip>close</q-tooltip>
          </q-btn>
          <q-btn
            dark
            size="sm"
            class="justify-end"
            style="margin-left: 450px"
            icon="close"
            color="primary"
            @click="closecancellationDialogOpen()"
          >
            <q-tooltip>close</q-tooltip>
          </q-btn>

          <q-toolbar class="bg-white text-primary rounded-borders">
            <q-toolbar-title class="text-subtitle1 text-weight-bold">
              <q-img src="~assets/web_site/Landing page top.jpg"></q-img>
            </q-toolbar-title>
          </q-toolbar>
          <div class="footer-head text-center" style="font-family: verdana">
            Thank you for booking with us.
          </div>
          <div class="footer-head text-center" style="font-family: verdana">
            We understand that you would like to cancel your booking,
          </div>
          <div class="footer-head text-center" style="font-family: verdana">
            however, as per our canecellation policy bookings cannot be canceled
            after check-in time.
          </div>
          <div class="footer-head text-center" style="font-family: verdana">
            This policy is in place to ensure that we can provide the best
            possible service to all of our guests .
          </div>
          <div class="footer-head text-center" style="font-family: verdana">
            care@mangohomz.com
          </div>
          <div class="footer-head text-center" style="font-family: verdana">
            WhatsApp No - 8929982655
          </div>

          <div
            class="footer-head text-center text-bold"
            style="font-family: verdana"
          >
            FOLLOW US ON
          </div>
          <div class="row justify-center">
            <div class="q-pa-md q-gutter-sm justify-center">
              <q-btn
                round
                color="black"
                icon="fab fa-facebook-square"
                href="https://www.facebook.com/mangohomzpage"
                aria-label="MH FaceBook Communication Link"
                target="_blank"
                type="a"
                ><q-tooltip class="bg-info text-body2"
                  >Facebook</q-tooltip
                ></q-btn
              >
              <q-btn
                round
                color="black"
                icon="fab fa-youtube"
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
                aria-label="MH Youtube Communication Link"
                ><q-tooltip class="bg-primary text-body2"
                  >Youtube</q-tooltip
                ></q-btn
              >
              <q-btn
                round
                color="black"
                icon="fab fa-instagram"
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                aria-label="MH Instagram Communication Link"
                ><q-tooltip class="bg-red text-body2"></q-tooltip
              ></q-btn>
            </div>
          </div>
        </q-card>
      </q-dialog>

      <!-- New Impliment Start-->
      <q-dialog v-model="checkPartnerDialog">
        <q-card style="min-width: 350px">
          <q-btn
            dark
            size="sm"
            class="justify-end"
            style="margin-left: 300px"
            icon="close"
            color="primary"
            @click="closePartnerWithus()"
          >
            <q-tooltip>close</q-tooltip>
          </q-btn>
          <div class="row col-12 q-mb-sm" style="padding-top: 3%">
            <!-- <a class="text-bold" href="#"
              >GO BACK TO WEBSITE</a
            > -->
          </div>
          <q-toolbar class="bg-white text-primary rounded-borders">
            <q-toolbar-title class="text-subtitle1 text-weight-bold">
              <q-img src="~assets/web_site/Landing page top.jpg"></q-img>
            </q-toolbar-title>
          </q-toolbar>

          <div class="row col-12 justify-center q-mb-sm">
            <q-btn
              no-caps
              style="width: 200px; height: 40px"
              color="primary"
              class="text-bold"
              label="Partner Registration"
              @click="openPartnerRegDialog()"
            />
          </div>
          <div
            class="row col-12 justify-center q-mb-sm"
            style="padding-top: 5%"
          >
            <q-btn
              no-caps
              style="width: 200px; height: 40px"
              color="primary"
              class="text-bold"
              label="Agent Registration"
              @click="openPartnerRegDialog()"
            >
            </q-btn>
          </div>

          <div
            class="row col-12 justify-center q-mb-sm"
            style="padding-top: 5%"
          >
            <!-- <a class="text-bold" href="#"
              >GO BACK TO WEBSITE</a
            > -->
          </div>
        </q-card>
      </q-dialog>
      <!-- New Impliment End-->
      <q-dialog v-model="userAgreementDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div
              class="text-h6 text-bold text-center text-primary"
              style="font-family: verdana; font-size: 18px"
            >
              User Agreement
            </div>
          </q-card-section>
          <q-card-section>
            <div style="font-family: verdana; font-size: 12px">
              <strong>MANGOHOMZ (MH)</strong> coordinates medical trips around
              the world and is bridging the gap between patient and the
              hospital, it provides patient friendly accommodation, food
              facility, travel facility near medical hubs to medical travelers.
              <strong>MANGOHOMZ (MH)</strong> is not a medical professional and
              does not have any hired medical professionals working for their
              company to provide medical advice or make any medical
              recommendations, before or during medical trip. All information
              provided by <strong>MANGOHOMZ (MH)</strong>
              and its staff is strictly for informative and educational guidance
              and should not be interpreted as medical advice
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              By using www.MangoHomz.com –
              <strong>MANGOHOMZ (MH)</strong> Online Website for Medical
              Tourism, you hereby agree to be bound by all the terms and
              conditions contained in this User Agreement ("Agreement").
              www.MangoHomz.com – <strong>MANGOHOMZ (MH)</strong> reserves the
              right at its discretion to change the Terms of this Agreement and
              will provide notice of any such changes by online posting. Your
              continued use of www.MangoHomz.com –
              <strong>MANGOHOMZ (MH)</strong> Online Web site after the posting
              of any notice of change in terms shall constitute your agreement
              to be bound by any such changes
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              This User Agreement along with Terms Of Service (collectively, the
              "User Agreement") forms the terms and conditions for the use of
              services and products of MangoHomz(MH)
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any person ("User") who inquiries about or purchases any products
              or services of <strong>MANGOHOMZ (MH)</strong> through its
              websites, mobile applications, sales persons, offices, call
              centers, branch offices, franchisees, agents etc. (all the
              aforesaid platforms collectively referred to as "Sales Channels")
              agree to be governed by this User Agreement. The websites and the
              mobile applications of <strong>MANGOHOMZ (MH)</strong> are
              collectively referred to as 'Website’ shall include channel
              Partners viz Accommodation Partner, Booking Agent Partner, Food
              Partner, Medicine & Medical Equipment Partner, Travel Partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Both User and <strong>MANGOHOMZ (MH)</strong> are individually
              referred to as 'Party' and collectively referred to as 'Parties'
              to the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Terms of Service" available on <strong>MANGOHOMZ (MH)</strong>'s
              website details out terms & conditions applicable on various
              services or products facilitated by
              <strong>MANGOHOMZ (MH)</strong>. The User should refer to the
              relevant Terms of Service applicable for the given product or
              service as booked by the User. Such Terms of Service are binding
              on the User
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              ELIGIBILITY TO USE
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User must be atleast 18 years or above age and is legally
              authorized to enter into an agreement so as become a User and use
              the services of <strong>MANGOHOMZ (MH)</strong>.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong>, reserve the right to terminate
              membership and/or block access to the Website if it is discovered
              that a minor or a person incompetent to contract according to the
              law or any information pertaining to age entered at the time of
              creation of account is false.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Before using the Website, approaching any Sales Channels or
              procuring the services of <strong>MANGOHOMZ (MH)</strong>, the
              Users shall compulsorily read and understand this User Agreement,
              and shall be deemed to have accepted this User Agreement as a
              binding document that governs User's dealings and transactions
              with <strong>MANGOHOMZ (MH)</strong>. If the User does not agree
              with any part of this Agreement, then the User must not avail
              <strong>MANGOHOMZ (MH)</strong>'s services and must not access or
              approach the Sales Channels of <strong>MANGOHOMZ (MH)</strong>
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              All rights and liabilities of the User and
              <strong>MANGOHOMZ (MH)</strong> with respect to any services or
              product facilitated by <strong>MANGOHOMZ (MH)</strong>
              shall be restricted to the scope of this User Agreement.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              CONTENT
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              All content provided through various Sales Channels, including but
              not limited to audio, images, software, text, icons and such
              similar content ("Content"), are registered by
              <strong>MANGOHOMZ (MH)</strong> and protected under applicable
              intellectual property laws. User cannot use this Content for any
              other purpose, except as specified herein.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User agrees to follow all instructions provided by
              <strong>MANGOHOMZ (MH)</strong>
              which will prescribe the way such User may use the Content.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              There are a number of proprietary logos, service marks and
              trademarks displayed on the Website and through other Sales
              Channels of <strong>MANGOHOMZ (MH)</strong>, as may be applicable.
              <strong>MANGOHOMZ (MH)</strong>
              does not grant the User a license, right or authority to utilize
              such proprietary logos, service marks, or trademarks in any
              manner. Any unauthorized use of the Content, will be in violation
              of the applicable law.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> respects the intellectual property
              rights of others. If you notice any act of infringement on the
              Website, you may inform <strong>MANGOHOMZ (MH)</strong>, at
              <a
                class="text-bold"
                href="https://www.mangohomz.com/#/"
                target="_blank"
                >www.MangoHomz.com
              </a>
              Website. The Website is meant to be used by bonafide User(s) for a
              lawful use
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User shall not distribute exchange, modify, sell or transmit
              anything from the Website, including but not limited to any text,
              images, audio and video, for any business, commercial or public
              purpose.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User Agreement grants a limited, non-exclusive,
              non-transferable right to use this Website as expressly permitted
              in this User Agreement. The User agrees not to interrupt or
              attempt to interrupt the operation of the Website in any manner
              whatsoever.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Access to certain features of the Website may only be available to
              registered User(s). The process of registration may require the
              User to answer certain questions or provide certain information
              that may or may not be personal in nature. Some such fields may be
              mandatory or optional. User represents and warrants that all
              information supplied to <strong>MANGOHOMZ (MH)</strong> is true
              and accurate.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User/Participant/Patient or his/her family
              members/relatives/escorts/friends making the booking on behalf of
              the Participant/Patient shall read carefully the terms and
              conditions mentioned herein before filling and signing the
              registration form. The User/Participant/Patient (and his/her
              family members/relatives /escorts/ friends making the booking on
              behalf of the Participant/Patient) shall sign this document. The
              signing of the terms & conditions document by the
              User/Participant/Patient (and his/her family
              members/relatives/escorts/friends making the booking on behalf of
              the Participant/Patient) shall mean acceptance in totality of the
              terms and conditions contained herein by the Participant/Patient
              (and his/her family members/relatives/escorts/friends making the
              booking on behalf of the Participant/Patient). The signed terms &
              conditions documents with payment receipt shall be binding on the
              Participant/Patient (and his/her family members/
              relatives/escorts/friends making the booking on behalf of the
              User/Participant/ Patient) and shall constitute a contract between
              MANGOHOMZ and the User/Participant/Patient (and his/her
              family/members/relatives/escorts/friends making the booking on
              behalf of the Participant / Patient) on the Participant / Patient
              (and his / her family members / relatives / escorts / friends
              making the booking on behalf of the Participant / Patient) signing
              the terms and conditions document and making payment towards the
              Package.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> does not control or operate any
              services of any Channel partner, neither does it operate or
              control any facility or service provided by the Channel partner
              mentioned in the Medical Treatment Package. MANGOHOMZ takes care
              in selecting all the ingredients required by Medical Traveler and
              has no control whatsoever in running the Channel partner.
              MANGOHOMZ cannot be made liable / responsible for any delay,
              default, failure, improper services / deficiency in services
              provided by the Channel partner and / or for any injury, sickness,
              accident, discomfort, death, loss or damage of any kind whatsoever
              which may arise due to any act of negligence, deficiency or
              default in services, of the management or employees of the Channel
              partner.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> reserves the right, in its sole
              discretion, to terminate the access to the Website and the
              services offered on the same or any portion thereof at any time,
              without notice, for general maintenance or any other reason
              whatsoever.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> will always make its best
              endeavors to ensure that the content on its websites or other
              sales channels are free of any virus or such other malwares.
              However, any data or information downloaded or otherwise obtained
              through the use of the Website or any other Sales Channel is done
              entirely at the User's own discretion and risk and they will be
              solely responsible for any damage to their computer systems or
              loss of data that may result from the download of such data or
              information.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              TERMS OF SERVICE
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> Platform provides the user with:
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              a. Accommodation partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              b. Travel partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              c. Food partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              d. Booking Agent Partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              e. Medicine & Medical Equipment Partner
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              A. <strong>MANGOHOMZ (MH)</strong> Platform is primarily
              responsible for providing a comfortable room stay, travel facility
              to medical hub and other connected facility for ensuring the
              acceptability of the services as promised by
              <strong>MANGOHOMZ (MH)</strong> to its customers on behalf of its
              partner. <strong>MANGOHOMZ (MH)</strong> has right to direct the
              Accommodation owner to provide the room stay services along with
              other adequate facility as promised for, to
              <strong>MANGOHOMZ (MH)</strong>’s medical travelers.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              B. <strong>MANGOHOMZ (MH)</strong> understands the needs and
              requirements of Medical Traveler and accordingly offers stay and
              other connected facilities of Medical Traveler near
              hospital/Treating Institution through its platform to service its
              medical travelers.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              C <strong>MANGOHOMZ (MH)</strong> markets the room stays,
              providing its medical travelers with the room booking voucher that
              entitles them to avail Hotel stay service in
              <strong>MANGOHOMZ (MH)</strong> branded rooms provided by our
              Channel partners as per terms agreed with
              <strong>MANGOHOMZ (MH)</strong>.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              D. In case medical travelers are not able to select the facilities
              from our website, they can call our customer support desk and our
              team will help you find a suitable accommodation/facility within
              preferred budget and amenities near the Medical hub
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              E. If any check-in is denied for a confirmed booking, MANGOHOMZ MH
              shall ensure that User is provided with an alternate accommodation
              of comparable standards. In an event, where the alternate
              accommodation could not be provided, MANGOHOMZ MH shall arrange
              for the refund (as per <strong>MANGOHOMZ (MH)</strong>) Refund
              Policy of any pre-booking amount collected from the User
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              F. MANGOHOMZ MH also promises its Users of a comfortable travel,
              room stay, requisite medical equipment and support at all its
              MANGOHOMZ MH branded channels.
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                font-weight: 900;
              "
            >
              G. The MANGOHOMZ MH platform will provide the User 24/7 Attendant
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
                font-weight: 900;
              "
            >
              i. Attendant with Basic Home Medical Equipment (Sugar/BP.Spo2
              monitor)
            </div>
            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-left: 20px;
                font-weight: 900;
              "
            >
              ii. Small Medical Kit upon Arrival containing, Hand Sanitizers,
              Gloves, Bandage, Band-aid, Mask, Thermometer
            </div>
            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-left: 20px;
                font-weight: 900;
              "
            >
              iii. MH tie-up with Pharma and Diagnostic establishment to provide
              USER with coupons
            </div>
            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-left: 20px;
                font-weight: 900;
              "
            >
              iv. MH tie-up with some insurance service providers for travel
              accident coverage, Lost baggage insurance to the user
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              H. For any default in service user can reach out to us by:
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              a. Writing to us on the MANGOHIMZ (MH) support page
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              b. Calling us on our 24X7 guest support helpline
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Our guest support team will ensure the best and resolve your
              concern.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              I. MANGOHIMZ MH stays involved with the Users right from the time
              when booking is made through MANGOHIMZ MH platform and throughout
              the hotel stays, ensuring that the User gets a comfortable room
              stay experience.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              LIMITED LIABILITY OF MANGOHOMZ
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Unless <strong>MANGOHOMZ (MH)</strong> explicitly acts as a
              reseller in certain scenarios,
              <strong>MANGOHOMZ (MH)</strong> always acts as a facilitator by
              connecting the User with the respective service providers
              (Property Partner - Food Partner -Medical Equipment Partner-
              Travel Partner providing vehicle as and when required)– Booking
              Agent partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong>'s liability is limited to
              providing the User with a confirmed booking as selected by the
              User
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any issues or concerns faced by the User at the time of availing
              any such services shall be the sole responsibility of the Service
              Provider. <strong>MANGOHOMZ (MH)</strong> liability shall be
              limited to the arrangement of service, liability with respect to
              quality of services shall lie with the accommodation partner. Any
              acts, omissions, errors, representations, warranties, breaches or
              negligence on part of any Service Provider shall be his
              responsibility
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Unless explicitly committed by <strong>MANGOHOMZ (MH)</strong> as
              a part of any product or service:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> assumes no liability for the
              standard of services as provided by the respective Service
              Providers.
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              • <strong>MANGOHOMZ (MH)</strong> provides no guarantee with
              regard to their quality or fitness as represented.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              • <strong>MANGOHOMZ (MH)</strong> doesn't guarantee the
              availability of any services as listed by a Service Provider.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              By making a booking, User understands
              <strong>MANGOHOMZ (MH)</strong> merely provides a technology
              platform for booking of services and products and the ultimate
              liability rests on the respective Service Provider and not
              <strong>MANGOHOMZ (MH)</strong>. Thus the ultimate contract of
              service is between User and Service Provider.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User further understands that the information displayed on the
              Website with respect to any service is displayed as furnished by
              the Service Provider. <strong>MANGOHOMZ (MH)</strong>, therefore
              cannot be held liable in case if the information provided by the
              Service Provider is found to be inaccurate, inadequate or obsolete
              or in contravention of any laws, rules, regulations or directions
              in force.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              USERS RESPONSIBILITY
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Users are advised to check the description of the services and
              products carefully before making a booking. User(s) agree to be
              bound by all the conditions as contained in booking confirmation
              or as laid out in the confirmed booking voucher. These conditions
              are also to be read in consonance with the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If a User intends to make a booking on behalf of another person,
              it shall be the responsibility of the User to inform such person
              about the terms of this Agreement, including all rules and
              restrictions applicable thereto.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User undertakes to abide by all procedures and guidelines, as
              modified from time to time, in connection with the use of the
              services available through <strong>MANGOHOMZ (MH)</strong>. The
              User further undertakes to comply with all applicable laws,
              regulations, orders, directions etc. issued by either the Central
              Government, State Government, District Authorities or any other
              statutory body empowered to do so w.r.t use of services or for
              each transaction.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The services are provided on an "as is" and "as available" basis.
              <strong>MANGOHOMZ (MH)</strong> may change the features or
              functionality of the services being provided at any time, in its
              sole discretion, without any prior notice.
              <strong>MANGOHOMZ (MH)</strong> expressly disclaims all warranties
              of any kind, whether express or implied, including, but not
              limited to the implied warranties of merchantability, reasonably
              fit for all purposes. No advice or information, whether oral or
              written, which the User obtains from
              <strong>MANGOHOMZ (MH)</strong> or through the services opted
              shall create any warranty not expressly made herein or in the
              terms and conditions of the services.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User also authorizes <strong>MANGOHOMZ (MH)</strong>'s
              representative to contact such user over phone, message and email.
              This consent shall supersede any preferences set by such User
              through national customer preference register (NCPR) or any other
              similar preferences.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              FEES AND PAYMENT
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> further reserves the right to
              alter any and all fees from time to time. Any such additional
              fees, including fee towards any modifications thereof, will be
              displayed to the User before confirming the booking or collecting
              the payment from such User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In cases of short charging of the booking amount, taxes, statutory
              fee, convenience fee etc., owing to any technical error or other
              reason, <strong>MANGOHOMZ (MH)</strong> shall reserve the right to
              deduct, charge or claim the balance amount from the User and the
              User shall pay such balance amount to
              <strong>MANGOHOMZ (MH)</strong>. In cases where the short charge
              is claimed prior to the utilization of the booking,
              <strong>MANGOHOMZ (MH)</strong> will be at liberty to cancel such
              bookings if the amount is not paid before the utilization date.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any increase in the price charged by
              <strong>MANGOHOMZ (MH)</strong> on account of change in rate of
              taxes or imposition of new taxes, levies by Government shall have
              to be borne by the User. Such imposition of taxes, levies may be
              without prior notice and could also be retrospective but will
              always be as per applicable law.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In the rare circumstance of a booking not getting confirmed for
              any reason whatsoever, <strong>MANGOHOMZ (MH)</strong> will
              process the refund of the booking amount paid by the User and
              intimate the User about the same.
              <strong>MANGOHOMZ (MH)</strong> is not under any obligation to
              provide an alternate booking in lieu of or to compensate or
              replace the unconfirmed booking. All subsequent bookings will be
              treated as new transactions. Any applicable refund will be
              processed as per the defined policies of the service provider and
              <strong>MANGOHOMZ (MH)</strong> as the case may be. (link for
              refund policy)
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User shall be completely responsible for all charges, fees,
              duties, taxes, and assessments arising out of the use of the
              service, as per the applicable laws
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees and understands that all payments shall only be
              made to bank accounts of <strong>MANGOHOMZ (MH)</strong>.
              <strong>MANGOHOMZ (MH)</strong> or its agents, representatives or
              employees shall never ask a customer to transfer money to any
              private account or to an account not held in the name of
              <strong>MANGOHOMZ (MH)</strong>. The User agrees that if that user
              transfers any amount against any booking or transaction to any
              bank account that is not legitimately held by
              <strong>MANGOHOMZ (MH)</strong> or to any personal account of any
              person, <strong>MANGOHOMZ (MH)</strong> shall not be held liable
              for the same. User shall not hold any right to recover from
              <strong>MANGOHOMZ (MH)</strong> any amount which is transferred by
              the User to any third party.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User will not share his personal sensitive information like
              credit/debit card number, CVV, OTP, card expiry date, user IDs,
              passwords etc. with any person including the agents, employees or
              representatives of <strong>MANGOHOMZ (MH)</strong>. The User shall
              immediately inform <strong>MANGOHOMZ (MH)</strong> if such details
              are demanded by any of its agents' employees or representatives.
              <strong>MANGOHOMZ (MH)</strong> shall not be liable for any loss
              that the User incurs for sharing the aforesaid details.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Refunds, if any, on cancelled bookings will always be processed to
              the respective account or the banking instrument (Credit Card,
              <strong>MANGOHOMZ (MH)</strong> wallet etc) from which payment was
              made for that booking
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Booking(s) made by the User through
              <strong>MANGOHOMZ (MH)</strong> are subject to the applicable
              cancellation as set out on the booking page or as communicated to
              the customers as per
              <a class="text-bold" @click="openCancellationDialog()" href="#"
                >Cancellation Policy</a
              >.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> provides various modes of making
              payments on the Website for transacting, like UPI, Credit/Debit
              Cards of various banks, Net Banking facility of all major banks,
              <strong>MANGOHOMZ (MH)</strong> and third-party Wallets, Gift
              Cards, EMI and more.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              OBLIGATION TO OBTAIN VISA
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              International bookings can be made through
              <strong>MANGOHOMZ (MH)</strong> irrespective of VISA. Arrangement
              of VISA in any case is not the responsibility of
              <strong>MANGOHOMZ (MH)</strong>. OK TO BOARD permission are to be
              obtained by the User as per the requirement of their travel
              bookings and the requirements of the countries the User intends to
              visit or transit through.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> is not responsible for any issues,
              including inability to travel, arising out of visa requirements
              and is also not liable to refund any amount to the User for being
              unable to utilize the booking due to absence or denial of visa,
              Refund, if any, will be as per the applicable terms of booking and
              <a class="text-bold" @click="openCancellationDialog()" href="#"
                >Cancellation Policy</a
              >.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Force Majure:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              There can be exceptional circumstances where
              <strong>MANGOHOMZ (MH)</strong> and / or the Service Providers may
              be unable to honor the confirmed bookings due to various reasons
              like act of God, labor unrest, insolvency, a pandemic, an
              epidemic, business exigencies, government decisions, terrorist
              activity, any operational and technical issues, route and flight
              cancellations etc. or any other reason beyond the control of
              <strong>MANGOHOMZ (MH)</strong> . If
              <strong>MANGOHOMZ (MH)</strong> has advance knowledge of any such
              situations where dishonor of bookings may happen, it will make its
              best efforts to provide similar alternative to the User or refund
              the booking amount after deducting applicable service charges, if
              supported and refunded by that respective service operators. The
              User agrees that <strong>MANGOHOMZ (MH)</strong> being merely a
              facilitator of the services and products booked cannot be held
              responsible for any such Force Majeure circumstance. There can’t
              be any direct interaction between service providers and user MH
              will be the only point of interaction for users
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees that in the event of non-confirmation of booking
              due to any technical reasons (like network downtime, disconnection
              with third party platforms such as payment gateways, banks etc.)
              or any other similar failures, <strong>MANGOHOMZ (MH)</strong> ’s
              obligation shall be limited to refunding the booking amount, if
              any, received from the customer. Such refund shall completely
              discharge <strong>MANGOHOMZ (MH)</strong> from all liabilities
              with respect to that transaction. Additional liabilities, if any,
              shall be borne by the User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In no event shall <strong>MANGOHOMZ (MH)</strong> and be liable
              for any direct, indirect, punitive, incidental, special or
              consequential damages, and any other damages like damages for loss
              of use, data or profits, arising out of or in any way connected
              with the use or performance of the Website or any other Sales
              Channel.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO REFUSE
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> at its sole discretion reserves
              the right to not accept any booking without assigning any reason
              thereof.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> will not provide any service or
              share confirmed booking details till such time the complete
              consideration is received from the User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In addition to other remedies and recourse available to
              <strong>MANGOHOMZ (MH)</strong> under this User Agreement or under
              applicable law, <strong>MANGOHOMZ (MH)</strong> may limit the
              User's activity, warn other users of the User's actions,
              immediately suspend or terminate the User's registration, or
              refuse to provide the User with access to the Website if:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User is in breach of this User Agreement; or
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • <strong>MANGOHOMZ (MH)</strong>is unable to verify or
              authenticate any information provided by the User; or
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> believes that the User's actions
              may infringe on any third-party rights or breach any applicable
              law or otherwise result in any liability for the User, other users
              of <strong>MANGOHOMZ (MH)</strong> , or
              <strong>MANGOHOMZ (MH)</strong> itself.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Once a User has been suspended or terminated, such User shall not
              register or attempt to register with
              <strong>MANGOHOMZ (MH)</strong> with different credentials, or use
              the Website in any manner whatsoever until such User is reinstated
              by <strong>MANGOHOMZ (MH)</strong>.
              <strong>MANGOHOMZ (MH)</strong> may at any time in its sole
              discretion reinstate suspended users.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If a User breaches this User Agreement,
              <strong>MANGOHOMZ (MH)</strong> reserves the right to recover any
              amounts due to be paid by the User to
              <strong>MANGOHOMZ (MH)</strong>, and to take appropriate legal
              action as it deems necessary.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO REFUSAL BY END SERVICE PROVIDER
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User agrees that the end service provider may refuse to provide
              the service(s), agreed to be provided to the User, for any booking
              made through <strong>MANGOHOMZ (MH)</strong> with/without
              assigning any reasons or owing to reasons including but not
              limited to behavioral issues, public safety, health hazards,
              infectious diseases, government orders/notification etc. In such
              scenarios of refusal, the liability that may ensue shall solely
              vest with the end service provider as it is outside the purview of
              <strong>MANGOHOMZ (MH)</strong> and the User agrees that any
              claim, refund or damages against such refusal shall be as per
              <strong>MANGOHOMZ (MH)</strong> refund policy.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO CANCEL
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User expressly undertakes to provide
              <strong>MANGOHOMZ (MH)</strong> with correct and valid information
              while making use of the Website under this User Agreement, and not
              to make any misrepresentation of facts. Any default on part of the
              User would disentitle the User from availing the services from
              <strong>MANGOHOMZ (MH)</strong> .
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In case <strong>MANGOHOMZ (MH)</strong> discovers or has reasons
              to believe at any time during or after receiving a request for
              services from the User that the request for services is either
              unauthorized or the information provided by the User or any of the
              travelers is not correct or that any fact has been misrepresented
              by that User, <strong>MANGOHOMZ (MH)</strong> shall be entitled to
              appropriate legal remedies against the User, including
              cancellation of the bookings, without any prior intimation to the
              User. In such an event, <strong>MANGOHOMZ (MH)</strong> shall not
              be responsible or liable for any loss or damage that may be caused
              to the User or any other person in the booking, as a consequence
              of such cancellation of booking or services.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If any judicial, quasi-judicial, investigation agency, government
              authority approaches <strong>MANGOHOMZ (MH)</strong> to cancel any
              booking, <strong>MANGOHOMZ (MH)</strong> will cancel the same
              without approaching the concerned User whose booking has been
              cancelled.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User shall not hold
              <strong>MANGOHOMZ (MH)</strong> responsible for any loss or damage
              arising out of measures taken by
              <strong>MANGOHOMZ (MH)</strong> for safeguarding its own interest
              and that of its genuine customers. This would also include
              <strong>MANGOHOMZ (MH)</strong> denying or cancelling any bookings
              on account of suspected fraud transactions.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              INDEMNIFICATION
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees to indemnify, defend and hold harmless
              <strong>MANGOHOMZ (MH)</strong> , its affiliates and their
              respective officers, directors, lawful successors and assigns from
              and against any and all losses, liabilities, claims, damages,
              costs and expenses (including legal fees and disbursements in
              connection therewith and interest chargeable thereon) asserted
              against or incurred by such indemnified persons, that arise out
              of, result from, or may be payable by virtue of, any breach of any
              representation or warranty provided by the User, or
              non-performance of any covenant by the stay User.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              MISCLLEANEOUS
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              SEVERABILITY: If any provision of this User Agreement is
              determined to be invalid or unenforceable in whole or in part,
              such invalidity or unenforceability shall attach only to such
              provision or part of such provision and the remaining part of such
              provision and all other provisions of this User Agreement shall
              continue to be in full force and effect.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              JURISDICTION: This Agreement is subject to interpretation as per
              the laws of India, and the parties shall refer any unresolved
              disputes to the exclusive jurisdiction of courts situated in MH
              administrative areas as Bengaluru, Delhi and Mumbai.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              AMENDMENT TO THE USER AGREEMENT:
              <strong>MANGOHOMZ (MH)</strong> reserves the right to change the
              User Agreement from time to time. The User is responsible for
              regularly reviewing the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              CONFIDENTIALITY: Any information which is specifically mentioned
              by MANGOHOMZ as confidential shall be maintained confidentially by
              the User and shall not be disclosed unless as required by law or
              to serve the purpose of this User Agreement and the obligations of
              both the parties herein.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              FEEDBACK FROM CUSTOMER: <strong>MANGOHOMZ (MH)</strong> would like
              to know the feedback of the Users for improving its services. The
              User hereby authorizes MANGOHOMZ to contact the User for their
              feedback on various services offered by MANGOHOMZ. Such feedback
              may be collected through emails, telephone calls, SMS or any other
              medium from time to time. In case the User chooses not to be
              contacted, such User shall write to MANGOHOMZ for specific
              exclusion at
              <a class="text-bold" @click="openPrivacyPolicyDialog()" href="#"
                >privacy@MANGOHOMZ.com</a
              >
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              PRIVACY POLICY: User shall also refer to MANGOHOMZ's
              <a class="text-bold" @click="openPrivacyPolicyDialog()" href="#"
                >Privacy Policy</a
              >available on MANGOHOMZ's website which governs use of the
              Websites. By using the Website, User agrees to the terms of the
              Privacy Policy and accordingly consents to the use of the User’s
              personal information by MANGOHOMZ and its affiliates in accordance
              with the terms of the Privacy Policy.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              GRIEVANCE REDRESSAL: MANGOHOMZ strongly believes in resolving the
              issues raised by the User(s). In the event if user feels that it’s
              concern has not been resolved to it’s satisfaction, User may
              contact our grievance officer, who shall Endeavour to redress the
              concern within 30 working days from the date of escalation. To
              reach the Grievance Officer please use this
              <a class="text-bold" href="#" @click="openGrievanceDialog()"
                >Link</a
              >
              to submit the details. User(s) are advised to escalate to the
              grievance officer only when they have already raised their
              complaint which has not been resolved to their satisfaction, or
              their concern has not been resolved within 30 working days from
              the date of ticket generation. User(s) will be required to share
              their booking reference number and the ticket ID generated for
              their complaint, for any escalations to the Grievance Officer
              through this
              <a class="text-bold" href="#" @click="openGrievanceDialog()"
                >Link</a
              >
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="cancellationDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div
              class="text-h6 text-bold text-center text-primary"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              Cancellation Policy For User
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 20px;
                text-decoration: underline;
              "
            >
              Accommodation:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> strict Accommodation cancellation
              policy allows MangoHomz Guests, to receive a full refund, Only if
              the cancellation of Accommodation booking happens 3 days before
              the check-in date. And any cancellation happens between 3 days and
              24hrs before check-in the guest will be entitled to get only 60%
              refund And if the Cancellation happens within in 24hrs till
              check-in time then Guests will get 25% refund after all necessary
              tax deductions applicable. Once checked in there is no
              cancellation.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 20px;
                text-decoration: underline;
              "
            >
              Transportation:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> strict Transportation cancellation
              policy allows MangoHomz Guests, to receive a full refund, Only if
              the cancellation Transportation booking happens 3 days before the
              service book-in date. And any cancellation happens between 3 days
              and 24hrs before Service Book-in the guest will be entitled to get
              only 60% refund And if the Cancellation happens within in 24hrs
              till service Book-in time then Guests will get 25% refund after
              all necessary tax deductions applicable. Once service utilised
              there is no cancellation.
            </div>

            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 20px;
                text-decoration: underline;
              "
            >
              Medical Equipment:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong>strict Medical Equipment
              cancellation policy allows MangoHomz Guests, to receive a full
              refund, Only if the cancellation of Accommodation booking happens
              3 days before the service book-in date. And any cancellation
              happens between 3 days and 24hrs before service book-in the guest
              will be entitled to get only 60% refund And if the Cancellation
              happens within in 24hrs till service book-in time then Guests will
              get 25% refund after all necessary tax deductions applicable. Once
              service utilised there is no cancellation.
            </div>

            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 20px;
                text-decoration: underline;
              "
            >
              Food:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> User can book food 60 minute
              before but subject to availability. Food once booked Cancellation
              is not applicable on the same.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="AccomodationcancellationDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="row">
              <div
                class="text-h6 text-bold text-center text-primary col-11"
                style="
                  font-family: verdana;
                  font-size: 16px;
                  text-decoration: underline;
                "
              >
                Cancellation Policy For User
              </div>
              <div class="col-1">
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
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              Accommodation:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> strict Accommodation cancellation
              policy allows MangoHomz Guests, to receive a full refund, Only if
              the cancellation of Accommodation booking happens 3 days before
              the check-in date. And any cancellation happens between 3 days and
              24hrs before check-in the guest will be entitled to get only 60%
              refund And if the Cancellation happens within in 24hrs till
              check-in time then Guests will get 25% refund after all necessary
              tax deductions applicable. Once checked in there is no
              cancellation.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="TravelcancellationDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="row">
              <div
                class="text-h6 text-bold text-center text-primary col-11"
                style="
                  font-family: verdana;
                  font-size: 16px;
                  text-decoration: underline;
                "
              >
                Cancellation Policy For User
              </div>
              <div class="col-1">
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
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              Transportation:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> strict Transportation cancellation
              policy allows MangoHomz Guests, to receive a full refund, Only if
              the cancellation Transportation booking happens 3 days before the
              service book-in date. And any cancellation happens between 3 days
              and 24hrs before Service Book-in the guest will be entitled to get
              only 60% refund And if the Cancellation happens within in 24hrs
              till service Book-in time then Guests will get 25% refund after
              all necessary tax deductions applicable. Once service utilised
              there is no cancellation.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="EquipmentcancellationDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="row">
              <div
                class="text-h6 text-bold text-center text-primary col-11"
                style="
                  font-family: verdana;
                  font-size: 16px;
                  text-decoration: underline;
                "
              >
                Cancellation Policy For User
              </div>
              <div class="col-1">
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
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              Medical Equipment:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong>strict Medical Equipment
              cancellation policy allows MangoHomz Guests, to receive a full
              refund, Only if the cancellation of Accommodation booking happens
              3 days before the service book-in date. And any cancellation
              happens between 3 days and 24hrs before service book-in the guest
              will be entitled to get only 60% refund And if the Cancellation
              happens within in 24hrs till service book-in time then Guests will
              get 25% refund after all necessary tax deductions applicable. Once
              service utilised there is no cancellation.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="FoodcancellationDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="row">
              <div
                class="text-h6 text-bold text-center text-primary col-11"
                style="
                  font-family: verdana;
                  font-size: 16px;
                  text-decoration: underline;
                "
              >
                Cancellation Policy For User
              </div>
              <div class="col-1">
                <q-btn dark flat class="justify-end" icon="close" v-close-popup>
                  <q-tooltip>close</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 16px;

                text-decoration: underline;
              "
            >
              Food:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> User can book food 60 Minute
              before but subject to availability. Cancellation is not applicable
              on the same.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- Cancell Booking Dialog Start -->
      <q-dialog v-model="AccomodationcancelBookingDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="row">
              <div
                class="text-h6 text-bold text-center text-primary col-11"
                style="font-family: verdana; font-size: 16px"
              >
                Would you like to Cancel the Accommodation?
                <q-card-section>
                  <!-- <div class="text-bold text-left" style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              ">
                <q-card-section>
            <div
              class="text-h6 text-bold text-center text-primary"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              Cancellation Policy For User
            </div>
          </q-card-section>
              Accommodation:
            </div> -->

                  <!-- <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
              <strong>MANGOHOMZ (MH)</strong> strict cancellation policy allows
              MH Guest to receive a full refund if they cancel Accommodation
              booking at least 7 days before check-in date. Any cancellation
              thereafter the guest will be entitled to only 60% refund.
            </div> -->
                </q-card-section>

                <div
                  style="
                    font-family: verdana;
                    font-size: 12px;
                    padding-top: 10px;
                  "
                >
                  <strong>MANGOHOMZ (MH)</strong> If You Cancel
                  Accommodation,Travel,Medical & Food Will Also Be Cancelled.
                </div>
              </div>
              <div class="col-1">
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
            </div>
          </q-card-section>
          <q-card-section>
            <div class="q-pa-md">
              <q-btn-group spread>
                <q-btn
                  label="No"
                  v-close-popup
                  class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                />

                <q-btn
                  label="Yes"
                  @click="cancelaccommodation(mh_booking_id)"
                  class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                />
              </q-btn-group>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- Cancell Booking Dialog End -->
      <q-dialog v-model="privacyPolicyDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div
              class="text-h6 text-bold text-center text-primary"
              style="font-family: verdana; font-size: 16px"
            >
              PRIVACY POLICY
            </div>
          </q-card-section>
          <q-card-section>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              MangoHomz is committed to protecting your information. This
              privacy notice provides details about the information collected
              about you, how is it used and how it is protected. It also
              explains your rights and how to contact us if you have questions
              about how the information provided by you is used.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Scope of our privacy notice
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              This notice applies to anyone who interacts with us in relation to
              our products and services (“you”, “your”), via any channel (e.g.
              app, website, email, phone, walk-ins to MangoHomz accommodations,
              booking an MangoHomz accommodation etc.). We may give you
              additional privacy notices if required for specific interactions.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you book a stay / services through us at one of our partners’
              guest houses, hotels, other lodgings, transport or any other
              service, that partner will use your personal data as shown in
              their privacy notice.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Ways in which we obtain personal information
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We obtain personal information from you and from hospitals and
              from others who book accommodation or any other service for you.
              Where you provide us with information about other individuals
              (e.g. the names of others who you will stay at the accommodation
              you book), you must ensure that the privacy policy is seen by them
              and they are comfortable with you doing this.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Categories of personal information
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We process two categories of personal information about you
              and/or, where applicable, others whom you have booked
              accommodation or any other service for, namely:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • Standard personal information (e.g. information we use to
              contact you, identify you or manage our relationship with you);
              and
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • Special categories of information (e.g. your preference of food
              in general, medical condition and its requirements, specific
              schedules etc).
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Purposes and lawful grounds of our processing personal information
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We process your personal information for the purposes set out in
              this notice, based on the legal grounds. Different legal grounds
              apply depending on what category of personal information we
              process. Standard personal information is normally processed by us
              on the basis that it is necessary for the performance of a
              contract, our or a third parties’ legitimate interests or law.
              Further information about this and special category processing
              grounds is set out below.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Legitimate interests
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We process your personal information for a number of legitimate
              interests, including providing you with services, administering
              our relationship with you, for marketing and service/product
              improvement purposes and in order to exercise our rights or handle
              claims. More detailed information about our legitimate interests
              is set out below.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Marketing and Preferences
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We use your personal information to send you marketing by post,
              telephone, social media platforms, email, SMS, application
              notifications and silent notifications to track installation
              status of the application. We may also use your personal
              information to carry out online paid marketing activities in the
              nature of retargeting.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We also use technology to help us understand your personal
              preferences and interests so that we can send recommendations and
              marketing communications that are likely to be of more interest to
              you. Using technology in this way is sometimes known as profiling.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you wish to unsubscribe from emails sent by us, you can do so
              at any time by clicking on the "unsubscribe" link that appears in
              all emails and by adjusting the settings on your device to turn
              off notifications from our app. Otherwise, you can always contact
              us at dataprotection@Mangohomz.com to update your contact
              preferences. You may also object to profiling relating to direct
              marketing by contacting us at data protection @Mangohomz.com.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Registration on the Website:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Information which you provide while subscribing to or registering
              on the Website, including but not limited to information about
              your personal identity such as name, gender, marital status,
              religion, age, profile picture etc., your contact details such as
              your email address, postal addresses, frequent flyer number,
              telephone (mobile or otherwise) and/or fax numbers. The
              information may also include information such as your banking
              details (including credit/debit card) and any other information
              relating to your income and/or lifestyle; billing information
              payment history etc. (as shared by you).
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Other information: We many also collect some other information and
              documents including but not limited to:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . Transactional history (other than banking details) about your
              e-commerce activities, buying behavior.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . Your usernames, passwords, email addresses and other
              security-related information used by you in relation to our
              Services.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . Data either created by you or by a third party and which you
              wish to store on our servers such as image files, documents etc.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . Data available in public domain or received from any third party
              including social media channels, including but not limited to
              personal or non-personal information from your linked social media
              channels (like name, email address, friend list, profile pictures
              or any other information that is permitted to be received as per
              your account settings) as a part of your account information.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . Information pertaining any other traveler(s) for who you make a
              booking through your registered MANGOHOMZ account. In such case,
              you must confirm and represent that each of the other traveler(s)
              for whom a booking has been made, has agreed to have the
              information shared by you disclosed to us and further be shared by
              us with the concerned service provider(s).
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . If you request MANGOHOMZ to provide visa related services, then
              copies of your passport, bank statements, originals of the filled
              in application forms, photographs, and any other information which
              may be required by the respective embassy to process your visa
              application.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . For international bookings, Users, in compliance with the
              Liberalized Remittance Scheme(LRS) of RBI or any other law may be
              required to provide details such as their PAN information or
              passport details number or any such information required by
              Service Provider. Such information shall be strictly used as per
              the aforesaid requirements only. In case a User does not wish to
              provide this information, MANGOHOMZ may not be able to process the
              booking. MANGOHOMZ will never share User’s PAN details without
              their prior consent unless otherwise such action is required by
              any law enforcement authority for investigation, by court order or
              in reference to any legal process.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . In case you opt for contactless check-in at Hotels, then copies
              of your government identification like Aadhar, driving license,
              election card etc., Self-declaration and any other information
              like date of birth, destination/origin of travel and place of
              residence that may be required by the concerned Hotel to honor
              your hotel booking.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . For international bookings, Users, in compliance with the
              Liberalized Remittance Scheme (LRS) of RBI or any other law may be
              required to provide details such as their PAN information or
              passport details number or any such information required by
              Service Provider.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              . In case you opt for contactless check-in at Hotels, then copies
              of your government identification like Aadhar, driving license,
              election card etc., Self-declaration and any other information
              like date of birth, destination/origin of travel and place of
              residence that may be required by the concerned Hotel to honor
              your hotel booking.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Such information shall be strictly used for the aforesaid
              specified & lawful purpose only. User further understands that
              MANGOHOMZ may share this information with the end service provider
              or any other third party for provision and facilitation of the
              desired booking. MANGOHOMZ will always redact all/any sensitive &
              confidential information contained in the vaccination certificate,
              passbook, bank statement or any other identity card submitted for
              the purpose of availing a service, promotional offer or booking a
              product on the Website. In case a User does not wish to provide
              this information or opts for deletion of the information already
              provided, MANGOHOMZ may not be able to process the desired booking
              request. MANGOHOMZ will never share any of the above information
              collected including PAN card details, Passport details, Aadhar
              Card details without their prior consent unless otherwise such
              action is required by any law enforcement authority for
              investigation, by court order or in reference to any legal
              process.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Analytics and Advertising Services Provided by Others
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Third parties provide us with audience measurement and analytics
              services that analyze your online interactions (both with the
              MangoHomz(MH) and other websites), serve you with tailored
              marketing and report on the performance of that marketing. We also
              use Google Place API to make suggestions based on your location or
              search strings.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              MangoHomz is using Google Place API for place prediction. Please
              refer to their privacy policy. http://www.google.com/privacy.html
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Sharing your information
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We share your information within MangoHomz Group and with others
              who help us provide services to you (e.g. your accommodation
              provider). We also share your information in accordance with the
              law.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              For more information on who we share your information with,
              (please expand this section naming the groups you will share)
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We share your information for the purposes set out in this privacy
              policy, with the following categories of recipients:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • Other members of the Mangohomz;
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • With accommodation managers to enable them to provide the
              services you request, e.g. we share your name and expected
              check-in time;
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • Third party suppliers who help deliver products or services on
              our behalf, or who have partnered with Mangohomz in connection
              with services or a relevant promotional offering, as well as other
              apps or websites that integrate with our API or Services, or those
              with an API or Service with which we integrate;
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • Your contact if you use a referral feature;
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • The general public, if you submit content in a public forum,
              such as blog comments, social media posts, or other features of
              our services that are obviously viewable by the general public.
              For example, you may choose to use social sharing features and
              related tools which let you share your Mangohomz experience with
              other apps, sites, or media, and vice versa. Your use of these
              features enables the sharing of information with your friends or
              the public, depending on your social sharing service settings.
              Please refer to the privacy policies of those social sharing
              services for more information about how they handle the data you
              provide to or share through them;
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • Third parties where we have a duty to or are permitted to
              disclose your personal information by law (e.g. law enforcement
              officials, government authorities);
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • With the police in the exercise of their functions or with
              others as required by a court order;
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • Third parties in connection with any merger, sale of company
              assets, consolidation or restructuring, financing, or acquisition
              of all or a portion of the Mangohomz Group’s business, in which
              case personal data held by it about its customers or visitors to
              the website may be one of the transferred assets.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Where we share your personal information, appropriate protections
              will be in place to protect your personal information as required
              by data protection laws.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Transfers outside of your country
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              MangoHomz uses global information systems. As a result, MangoHomz
              transfers your personal information to a country outside of your
              country, for the purposes set out in this policy.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              MangoHomz takes steps to ensure that when your personal
              information is transferred internationally, it is subject to
              appropriate safeguards in accordance with data protection laws.
              Often, these safeguards include contractual safeguards. More
              information about these safeguards (including copies, where
              relevant) can be obtained by contacting
              [dataprotection@Mangohomz.com].
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Retention period
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We retain your personal information in accordance with MangoHomz’s
              records retention policies. However, there may be circumstances
              that mean we must retain your personal information for longer
              (e.g. if you make a claim in relation to a booking).
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Your rights
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Data protection laws provides individuals with rights in relation
              to the information that MangoHomz holds about them on some
              computer and paper records. These include rights to access,
              correct, delete, restrict the use of, object to the use of, port
              to another person, and withdraw consent to the use of, your
              information. Exceptions may apply to these rights.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              Data protection contacts
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you have any questions, comments, complaints or suggestions in
              relation to this notice, or any other concerns about the way in
              which we process information about you, please contact our Privacy
              Team at dataprotection@mangohomz.com.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you are not satisfied with the response from our Privacy Team,
              you can contact our Data Protection Officer at
              [dataprotection@Mangohomz.com].
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              You also have a right to make a complaint to your local privacy
              supervisory authority.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="grievanceDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div
              class="text-h6 text-bold text-center text-black"
              style="
                font-family: verdana;
                font-size: 14px;
                text-decoration: underline;
              "
            >
              MANGOHOMZ (MH) GRIEVANCE REDRESSAL FORM
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form
              class="q-gutter-md"
              @submit="onGrievanceSubmit"
              @reset="onGrievanceReset"
              ref="grievanceForm"
            >
              <q-input
                dense
                outlined
                v-model="grievanceForm.name"
                autofocus
                @keyup.enter="prompt = false"
                label="Name"
                :rules="[required('Name')]"
                style="padding-bottom: 5px"
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.mobile_no"
                @keyup.enter="prompt = false"
                label="Mobile No"
                lazy-rules
                mask="##########"
                style="padding-bottom: 5px"
                :rules="[required('Phone no'), phone()]"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.email_id"
                @keyup.enter="prompt = false"
                label="Email-ID"
                style="padding-bottom: 5px"
                :rules="[required('Email'), email()]"
                ><template v-slot:prepend>
                  <q-icon name="email" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.comment"
                type="textarea"
                @keyup.enter="prompt = false"
                style="padding-bottom: 5px"
                label="Complain/Suggestion/Feedback"
                :rules="[required('Complain/Suggestion/Feedback')]"
                ><template v-slot:prepend>
                  <q-icon name="mdi-comment-quote" color="secondary" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn
              push
              outline
              class="text-weight-bolder"
              label="Submit"
              color="orange"
              @click="onGrievanceSubmit"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="bookingsLoginDialog">
        <q-card style="min-width: 200px">
          <q-card-section class="row col-12">
            <div class="col-11 text-h6 text-bold text-primary">
              <q-icon>
                <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
              </q-icon>
              Bookings View
            </div>
            <div>
              <!-- <q-btn
                dark
                flat
                padding="none"
                class="justify-end"
                icon="close"
                @click="closeBookingsLoginDialog"
                v-close-popup
              >
                <q-tooltip>close</q-tooltip>
              </q-btn> -->
            </div>
          </q-card-section>
          <q-separator />
          <div class="row justify-center">
            <div col="5">
              <q-input
                flat
                outlined
                dense
                class="q-mb-sm q-ma-md"
                no-caps
                style="width: 250px; height: 20px"
                label="MH Booking ID"
                v-model="mh_booking_id"
              ></q-input>
            </div>
            <div col="3">
              <q-btn
                outlined
                rounded
                class="col-3 q-mb-sm q-ma-md"
                color="primary"
                @click="getAllBookingData(mh_booking_id)"
                >Search</q-btn
              >
            </div>
          </div>
          <div
            class="row col-12 justify-center q-ma-md"
            v-if="mh_acc_booked_data[0]"
          >
            <q-card
              style="display: flex; background-color: #e4fae9"
              class="q-mb-sm q-ma-md col-8 justify-center"
            >
              <q-card-section class="q-mr-xl">
                <div class="text-bold text-subtitle2 text-secondary">
                  TRAVEL
                </div>
                <div class="text-caption">Smooth travel facilities 24 / 7</div>
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
                <div class="text-bold text-subtitle2 text-secondary">FOOD</div>
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
      <q-dialog v-model="CancelbookingsDialog" no-backdrop-dismiss>
        <q-card style="min-width: 700px">
          <q-card-section class="row col-12">
            <div class="col-11 text-h6 text-bold text-primary">
              <q-icon>
                <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
              </q-icon>
              Cancellation Page
            </div>
            <div>
              <q-btn
                dark
                flat
                padding="none"
                class="justify-end text-primary"
                icon="close"
                @click="closeBookingsLoginDialog"
                v-close-popup
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-separator />
          <div class="row justify-center">
            <div col="5">
              <q-input
                flat
                outlined
                dense
                class="q-mb-sm q-ma-md"
                no-caps
                style="width: 250px; height: 20px"
                label="MH Booking ID"
                v-model="mh_booking_id"
              ></q-input>
            </div>
            <div col="3">
              <q-btn
                outlined
                rounded
                class="col-3 q-mb-sm q-ma-md"
                color="primary"
                @click="getAllBookingData(mh_booking_id)"
                >Search</q-btn
              >
            </div>
          </div>
          <div
            class="row col-12 justify-center q-ma-md"
            v-if="mh_acc_booked_data[0]"
          >
            <div class="co-12 text-bold">
              <div class="col-6" style="padding-right: 190px">
                Mobile Number : {{ this.mh_acc_booked_data[0].phone_no }}
                <div class="text-bold col-6"></div>
                Booked Date : {{ this.mh_acc_booked_data[0].booked_date }}
                <div class="text-bold col-6"></div>
                Number of Night : {{ this.mh_acc_booked_data[0].no_of_days }}
              </div>
              <div
                class="text-bold col-6"
                style="padding-left: 300px; margin-top: -60px"
              >
                Checkin Date: {{ this.mh_acc_booked_data[0].check_in }}
              </div>
              <div
                class="text-bold col-6"
                style="padding-left: 300px; margin-top: -2px"
              >
                Checkin Out: {{ this.mh_acc_booked_data[0].check_out }}
                <div class="text-bold col-6"></div>
                Number of Rooms :
                {{ this.mh_acc_booked_data[0].room_booked_count }}
              </div>
            </div>

            <q-card
              style="display: flex; background-color: #e4fae9"
              class="q-mb-sm q-ma-md col-12 justify-center"
            >
              <q-card-section class="q-mr-xl">
                <div class="text-bold text-subtitle2 text-secondary">
                  <q-icon
                    name="mdi-hospital-building"
                    size="md"
                    color="secondary"
                  >
                  </q-icon>
                  ACCOMMODATION
                </div>
                <div class="text-caption">
                  <a
                    class="text-bold"
                    @click="openAccCancellationDialog()"
                    href="#"
                    >Accommodation Cancellation Policy</a
                  >
                </div>
              </q-card-section>
              <!-- <div class="q-ml-xs">
                <q-btn label="CANCEL BOOKING" @click="cancelaccommodation(mh_booking_id)"
                  class="text-bold q-mt-md q-mr-md text-white bg-secondary" />
              </div> -->
              <div class="q-ml-xs">
                <q-btn
                  label="CANCEL BOOKING"
                  @click="openAccCancelBookDialog()"
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
                  <q-icon name="mdi-car" size="md" color="secondary"> </q-icon>
                  TRAVEL
                </div>
                <div class="text-caption">
                  <a
                    class="text-bold"
                    @click="opentravelCancellationDialog()"
                    href="#"
                    >Travel Cancellation Policy</a
                  >
                </div>
              </q-card-section>
              <div class="q-ml-xl">
                <q-btn
                  label="CANCEL BOOKING"
                  @click="canceltravel(mh_booking_id)"
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
                  <q-icon name="mdi-medical-bag" size="md" color="secondary">
                  </q-icon>
                  MEDICAL EQUIPMENT
                </div>
                <div class="text-caption">
                  <a
                    class="text-bold"
                    @click="openequipCancellationDialog()"
                    href="#"
                    >Equipment Cancellation Policy</a
                  >
                </div>
              </q-card-section>
              <div class="q-ml-md">
                <q-btn
                  label="CANCEL BOOKING"
                  @click="cancelequipment(mh_booking_id)"
                  class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                />
              </div>
            </q-card>
            <q-card
              style="display: flex; background-color: #e4fae9"
              class="q-mb-sm q-ma-md col-12 justify-center"
            >
              <!-- <q-card-section class="q-mr-xl">
                <div class="text-bold text-subtitle2 text-secondary">
                  <q-icon
                    name="mdi-food-fork-drink"
                    size="md"
                    color="secondary"
                  >
                  </q-icon>
                  FOOD
                </div>
                <div class="text-caption">
                  <a
                    class="text-bold"
                    @click="openfoodCancellationDialog()"
                    href="#"
                    >Food Cancellation Policy</a
                  >
                </div>
              </q-card-section> -->
              <div class="q-ml-xl">
                <q-btn
                  label="CANCEL BOOKING"
                  @click="cancelfood(mh_booking_id)"
                  class="text-bold q-mt-md q-mr-md text-white bg-secondary"
                  v-show="hideFoodButton"
                />
              </div>
            </q-card>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="cancellationDialogequipment">
        <q-card style="min-width: 350px" v-if="mh_equipment_data[0]">
          <q-card-section>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar
                  flat
                  class="ma-02 text-bold"
                  style="
                    max-height: 20vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
                >
                  <q-icon
                    name="mdi-sale"
                    color="black"
                    size="1.2em"
                    style="padding-right: 10px"
                  />
                  Cancellation Price Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Medical charges
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.medicalBookingItem.medical_charges }}
                      </div>
                      <!-- <div class="col-5 text-left text-black" style="font-family: verdana; font-size: 12px">
                        Discount Price (%)
                      </div>
                      <q-separator />
                      <div class="col-7 text-left text-grey" style="font-family: verdana; font-size: 12px">
                        :
                      </div> -->
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        MH offer ({{ this.medicalBookingItem.mh_offer_coupon }})
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.medicalBookingItem.mh_offer_price }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        GST Amount ({{
                          this.medicalBookingItem.gst_percentage
                        }}%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      ></div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        CGST Amount ({{
                          this.medicalBookingItem.cgst_percentage
                        }}%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.medicalBookingItem.cgst_amount }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        SGST Amount ({{
                          this.medicalBookingItem.sgst_percentage
                        }}%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.medicalBookingItem.sgst_amount }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Total Price
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.medicalBookingItem.final_price_amount }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        cancellation (%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : 60
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Cancellation Charges
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.cancellationequipment }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Refund Amount
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.equipmentrefundamount }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
          <div class="q-pa-xs" align="center">
            <q-btn
              class="text-bold"
              color="secondary"
              size="sm"
              icon="mdi-eye"
              label="cancel booking"
              style="justify-self: right"
              @click="cancellequipmentdata()"
            />
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="cancellationDialogtravel">
        <q-card style="min-width: 350px" v-if="mh_travel_data[0]">
          <q-card-section>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar
                  flat
                  class="ma-02 text-bold"
                  style="
                    max-height: 40vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
                >
                  <q-icon
                    name="mdi-sale"
                    color="black"
                    size="1.2em"
                    style="padding-right: 10px"
                  />
                  Cancellation Price Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Travel charges
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :{{ this.travelBookingItem.travel_charges }}
                      </div>
                      <!-- <div class="col-5 text-left text-black" style="font-family: verdana; font-size: 12px">
                        Discount Price (%)
                      </div>
                      <q-separator />
                      <div class="col-7 text-left text-grey" style="font-family: verdana; font-size: 12px">
                        :
                      </div> -->
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        MH offer ({{ this.travelBookingItem.mh_offer_coupon }})
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.travelBookingItem.mh_offer_price }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        GST( {{ this.travelBookingItem.gst_percentage }}%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      ></div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        CGST Amount (
                        {{ this.travelBookingItem.cgst_percentage }}%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.travelBookingItem.cgst_amount }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        SGST Amount ( {{ mh_travel_data[0].sgst_percentage }}%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.travelBookingItem.sgst_amount }}
                      </div>

                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Total Price
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.travelBookingItem.payable_amount }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        cancellation (%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : 60
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Cancellation Charges
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.cancellationtravel }}
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Refund Amount
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.travelrefundamount }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
          <div class="q-pa-xs" align="center">
            <q-btn
              class="text-bold"
              color="secondary"
              size="sm"
              icon="mdi-eye"
              label="cancel booking"
              style="justify-self: right"
              @click="canceltraveldata()"
            />
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="cancellationDialogfood">
        <q-card style="min-width: 350px" v-if="mh_food_data[0]">
          <q-card-section>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar
                  flat
                  class="ma-02 text-bold"
                  style="
                    max-height: 20vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
                >
                  <q-icon
                    name="mdi-sale"
                    color="black"
                    size="1.2em"
                    style="padding-right: 10px"
                  />
                  Cancellation Price Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Food charges
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Discount Price (%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                      </div>
                      <q-separator />
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        MH offer ()
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                      </div>

                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        GST Amount (%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Total Price
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Cancellation(%)
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : 100
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Cancellation Charges
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                      </div>
                      <div
                        class="col-5 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Refund Amount
                      </div>
                      <div
                        class="col-7 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
          <div class="q-pa-xs" align="center">
            <q-btn
              class="text-bold"
              color="secondary"
              size="sm"
              icon="mdi-eye"
              label="cancel booking"
              style="justify-self: right"
              @click="cancellfooddata()"
            />
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="cancellationDialogAcc">
        <q-card style="min-width: 700px" v-if="mh_acc_data[0]">
          <q-card-section>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar
                  flat
                  class="ma-02 text-bold"
                  style="
                    max-height: 40vh;
                    font-family: verdana;
                    font-size: 15px;
                  "
                >
                  <q-icon
                    name="mdi-sale"
                    color="black"
                    size="1.2em"
                    style="padding-right: 10px"
                  />
                  Accomodation Cancellation Price Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 206px; margin-left: 40px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <!-- <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Room charges
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        :{{
                          Math.round(
                            this.AccCancel.room_price /
                              this.AccCancel.no_of_days
                          )
                        }}
                      </div> -->
                      <!-- <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        charges per ({{ this.AccCancel.no_of_days }}) Days
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.AccCancel.room_price }}
                      </div> -->
                      <q-separator />

                      <!-- <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Discount Price {{ this.AccCancel.discount }}%
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.AccCancel.discount_price }}
                      </div> -->

                      <!-- <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        MH offer ({{ this.AccCancel.mh_offer_name }})
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.AccCancel.mh_offer_price }}
                      </div> -->
                      <!-- <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        CGST Amount ({{ this.AccCancel.cgst_percentage }}%)
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.AccCancel.cgst_amount }}
                      </div> -->
                      <!-- <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        SGST Amount ({{ this.AccCancel.sgst_percentage }}%)
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.AccCancel.sgst_amount }}
                      </div> -->
                      <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Booking Price
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : ₹{{ this.AccCancel.total_price }}
                      </div>
                      <!-- <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Cancellation Charges (%)
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : {{ this.cancellPercentage }}
                      </div> -->
                      <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Cancellation Charges
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : ₹{{ this.cancellAmount }}
                      </div>
                      <div
                        class="col-7 text-left text-black"
                        style="font-family: verdana; font-size: 12px"
                      >
                        Net Refund Amount
                      </div>
                      <div
                        class="col-5 text-left text-grey"
                        style="font-family: verdana; font-size: 12px"
                      >
                        : ₹{{ this.payableAmount }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
          <div class="q-pa-xs" align="center">
            <q-btn
              class="text-bold"
              color="secondary"
              size="sm"
              icon="mdi-eye"
              label="cancel booking"
              style="justify-self: right"
              @click="cancellbooking(), redirectToCancelPage()"
            />
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="becomeAgentDialog">
        <q-card style="min-width: 350px">
          <q-toolbar class="bg-white text-primary rounded-borders">
            <q-icon>
              <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
            </q-icon>
            <q-toolbar-title class="text-subtitle1 text-weight-bold">
              Become A Booking Agent
            </q-toolbar-title>
          </q-toolbar>
          <q-card-section class="q-pt-none">
            <q-form class="q-gutter-md" ref="agentForm">
              <q-input
                dense
                outlined
                v-model="agentForm.first_name"
                autofocus
                @keyup.enter="prompt = false"
                label="Full Name"
                :rules="[required('Name')]"
                hide-bottom-space
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="agentForm.mobile_no"
                @keyup.enter="prompt = false"
                label="Mobile No"
                lazy-rules
                mask="##########"
                hide-bottom-space
                :rules="[required('Phone no'), phone()]"
                ><template v-slot:prepend>
                  <q-icon name="phone" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="agentForm.email_id"
                @keyup.enter="prompt = false"
                hide-bottom-space
                label="Email-ID"
                :rules="[required('Email'), email()]"
                ><template v-slot:prepend>
                  <q-icon name="email" color="secondary" />
                </template>
              </q-input>
              <q-select
                dense
                outlined
                use-input
                hide-selected
                :options="cities"
                option-value="city"
                option-label="city"
                fill-input
                hide-bottom-space
                options-dense
                input-debounce="0"
                v-model="agentForm.city"
                label="City *"
                :rules="[required('City')]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-select
                dense
                options-dense
                outlined
                use-input
                hide-selected
                hide-bottom-space
                fill-input
                :options="govtNo"
                v-model="agentForm.govtno"
                @keyup.enter="prompt = false"
                label="Government Authorized Number  *"
                :rules="[required('Govt Number')]"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-home-city" color="secondary" />
                </template>
              </q-select>
              <q-input
                dense
                outlined
                v-model="agentForm.govtcardno"
                v-if="agentForm.govtno == 'Pan Card'"
                label="Enter Pan Card Number"
                hide-bottom-space
                mask="AAAAA####A"
                :rules="[required('Pan Card Number'), panNumber()]"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-home-city" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="agentForm.govtcardno"
                v-if="agentForm.govtno == 'Passport'"
                label="Enter Passport Number"
                hide-bottom-space
                :rules="[required('Passport Number')]"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-home-city" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="agentForm.govtcardno"
                v-if="agentForm.govtno == 'Driving Licience'"
                label="Enter Driving Licience Number"
                hide-bottom-space
                :rules="[required('Driving Licience Number')]"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-home-city" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="agentForm.nearest_hospital"
                @keyup.enter="prompt = false"
                label="Referal Name"
                hide-bottom-space
                :rules="[required('Nearest Hospital')]"
                ><template v-slot:prepend>
                  <q-icon name="mdi-hospital-marker" color="secondary" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <!-- <q-btn flat label="Cancel" v-close-popup /> -->
            <q-btn
              push
              class="text-weight-bolder"
              label="Register"
              color="secondary"
              @click="onAgentSignUpSubmit"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-toolbar>
  </q-header>
</template>
<script>
import { QSpinnerFacebook } from "quasar";
import { scroll } from "quasar";
import { mapState, mapActions } from "vuex";
import validations from "../helpers/validations";
import { api } from "boot/axios";
import moment from "moment";

const { getScrollTarget, setScrollPosition } = scroll;
const customerForm = () => {
  return {
    role: "customer",
    username: "",
    password: "",
  };
};
const partnerForm = () => {
  return {
    role: "partner",
    username: "",
    password: "",
  };
};
const agentForm = () => {
  return {
    role: "agent",
    username: "",
    password: "",
  };
};
const signMaster = () => {
  return {
    first_name: "",
    last_name: "",
    mobile_no: "",
    email_id: "",
    city: "",
    nearest_hospital: "",
    partnerType: "",
  };
};
export default {
  name: "headerTag",
  data() {
    return {
      menuOpen: false,
      MobileMenu: false,
      onClickMenu: false,
      callUsPopUp: false,
      moment: moment,
      showBookings: false,
      showLanguage: false,
      langLabel: "Language",
      // menuIconName: "img:../../../assets/logos/english-alphabet.png",
      becomeAgentDialog: false,
      becomePartnerDialog: false,
      userAgreementDialog: false,
      cancellationDialog: false,
      AccomodationcancellationDialog: false,
      AccomodationcancelBookingDialog: false,
      TravelcancellationDialog: false,
      EquipmentcancellationDialog: false,
      FoodcancellationDialog: false,
      cancellationDialogAcc: false,
      cancellationDialogfood: false,
      cancellationDialogtravel: false,
      cancellationDialogequipment: false,
      privacyPolicyDialog: false,
      grievanceDialog: false,
      bookingsLoginDialog: false,
      CancelbookingsDialog: false,
      travelBookingsDialog: false,
      showManageBooking: false,
      medicalBookingsDialog: false,
      foodBookingsDialog: false,
      hideFoodButton: false,
      cancellationMassageDialog: false,
      mh_booking_id: "",
      ...validations,
      bookingsData: false,
      checkPartnerDialog: false,
      partnerSignin: {
        username: "",
        password: "",
        role: "partner",
      },
      Accomodationdetails: {
        booking_order_id: "",
        property_name: "",
        guest_count: "",
        no_of_days: "",
        room_price: "",
        discount: "",
        discount_price: "",
        mh_offer_price: "",
        mh_offer_name: "",
        gst_percentage: "",
        gst_amount: "",
        cgst_percentage: "",
        cgst_amount: "",
        sgst_percentage: "",
        sgst_amount: "",
        total_price: "",
      },
      bookingAgentLoginForm: {
        role: "agent",
        username: "",
        password: "",
      },
      customerLoginForm: {
        role: "customer",
        username: "",
        password: "",
      },
      partnerLoginForm: {
        role: "partner",
        username: "",
        password: "",
        food_partner: "",
        transport_partner: "",
        equipment_partner: "",
        property_partner: "",
        agent_partner: "",
      },
      patnerForm: {
        first_name: "",
        last_name: "",
        mobile_no: "",
        email_id: "",
        city: "",
        nearest_hospital: "",
        partnerType: "",
      },
      grievanceForm: {
        name: "",
        mobile_no: "",
        mail_id: "",
        comment: "",
      },
      partnerTypes: [
        "Accommodation Partners",
        "Food Partner",
        "Travel Partner",
        "Medical Equipment Partner",
        "Booking Agent Partner",
        "Others",
      ],
      agentForm: {
        first_name: "",
        mobile_no: "",
        email_id: "",
        city: "",
        govtno: "",
        govtcardno: "",
        nearest_hospital: "",
        partnerType: "Booking Agent",
      },
      govtNo: ["Pan Card", "Passport", "Driving Licience"],
      bar2: false,
      // title:"MangoHomz",
      tab: "two",
      link: "/coustomerLogin",
      loginItems: [
        { name: "Admin", link: "login", icon_name: "mdi-account" },
        { name: "Customer", link: "login", icon_name: "mdi-account" },
        { name: "Patner", link: "patnerLogin", icon_name: "mdi-account" },
      ],
      menuItems: [
        { name: "Home", link: "/", icon_name: "home" },
        { name: "Why Mango Homz", link: "whyMangoHomz", icon_name: "home" },
        { name: "Rooms", link: "rooms", icon_name: "fas fa-procedures" },
        { name: "Food", link: "food", icon_name: "fas fa-utensils" },
        { name: "Travel", link: "travel", icon_name: "fas fa-car" },
        {
          name: "Medical Equipment",
          link: "medicalEquipment",
          icon_name: "fas fa-wheelchair",
        },
        {
          name: "Our Covid Protocols",
          link: "coronaProtocol",
          icon_name: "fas fa-head-side-mask",
        },
        {
          name: "Partner with us",
          link: "partner",
          icon_name: "fas fa-handshake",
        },

        { name: "FAQs", link: "faqs", icon_name: "far fa-question-circle" },

        {
          name: "Contact us",
          link: "contactUs",
          icon_name: "fas fa-phone-alt",
        },
      ],
      //  partnerItems: [
      //   { name: "Home", link: "/", icon_name: "home" },
      //   {
      //     name: "Partner with us",
      //     link: "partner",
      //     icon_name: "fas fa-handshake",
      //   },

      //   { name: "FAQs", link: "faqs", icon_name: "far fa-question-circle" },

      //   {
      //     name: "Contact us",
      //     link: "contactUs",
      //     icon_name: "fas fa-phone-alt",
      //   },
      // ],
      AccCancel: {
        booking_order_id: "",
        property_name: "",
        property_type: "",
        room_type: "",
        phone_no: "",
        check_in: "",
        check_out: "",
        no_of_days: "",
        room_price: "",
        discount: "",
        discount_price: "",
        mh_offer_name: "",
        mh_offer_price: "",
        gst_percentage: "",
        cgst_percentage: "",
        cgst_amount: "",
        sgst_percentage: "",
        sgst_amount: "",
        total_price: "",
        booking_status: "",
        property_city_id: "",
        property_city_name: "",
        guest_name: "",
        city: "",
        gst_amount: "",
        near_hospital_name: "",
        GuestDetails: "",
        email_id: "",
        property_email: "",
      },
      travelBookingItem: {
        booking_order_id: "",
        travel_booking_orderid: "",
        travel_name: "",
        transport_sub_name: "",
        booking_origin: "",
        booking_destination: "",
        mobile_number: "",
        booked_date: "",
        booking_time: "",
        travel_charges: "",
        cgst_percentage: "",
        cgst_amount: "",
        mh_offer_coupon: "",
        mh_offer_price: "",
        gst_percentage: "",
        gst_on_base_price: "",
        payable_amount: "",
        sgst_percentage: "",
        sgst_amount: "",
        booking_status: "",
      },
      medicalBookingItem: {
        booking_order_id: "",
        medical_booking_orderid: "",
        equipment_partner_name: "",
        equipment_partner_sub_name: "",
        eqp_booking_type: "",
        mobile_number: "",
        eqp_booking_date: "",
        medical_item_count: "",
        medical_charges: "",
        mh_offer_coupon: "",
        mh_offer_price: "",
        gst_percentage: "",
        cgst_percentage: "",
        cgst_amount: "",
        sgst_percentage: "",
        sgst_amount: "",
        final_price_amount: "",
        equipment_items: "",
      },
      cancelledbooking: {
        booking_order_id: "",
        property_name: "",
        property_type: "",
        room_type: "",
        phone_no: "",
        check_in: "",
        check_out: "",
        no_of_days: "",
        room_price: "",
        discount: "",
        discount_price: "",
        mh_offer_name: "",
        mh_offer_price: "",
        gst_percentage: "",
        cgst_percentage: "",
        cgst_amount: "",
        sgst_percentage: "",
        sgst_amount: "",
        total_price: "",
        cancellation_percentage: "",
        cancellAmount: "",
        payableAmount: "",
        gst_amount: "",
        city: "",
        guest_name: "",
        property_city_id: "",
        property_city_name: "",
        near_hospital_name: "",
        GuestDetails: "",
        email_id: "",
        property_email: "",
      },
      cancelledtravelbooking: {
        booking_order_id: "",
        travel_booking_orderid: "",
        travel_name: "",
        transport_sub_name: "",
        booking_origin: "",
        booking_destination: "",
        mobile_number: "",
        booked_date: "",
        booking_time: "",
        travel_charges: "",
        mh_offer_coupon: "",
        mh_offer_price: "",
        gst_percentage: "",
        cgst_percentage: "",
        cgst_amount: "",
        sgst_percentage: "",
        sgst_amount: "",
        payable_amount: "",
        cancellation_percentage: "",
        cancellationtravel: "",
        travelrefundamount: "",
      },
      cancelledequipmentbooking: {
        booking_order_id: "",
        medical_booking_orderid: "",
        equipment_partner_name: "",
        equipment_partner_sub_name: "",
        eqp_booking_type: "",
        mobile_number: "",
        eqp_booking_date: "",
        medical_item_count: "",
        medical_charges: "",
        mh_offer_coupon: "",
        mh_offer_price: "",
        gst_percentage: "",
        cgst_percentage: "",
        cgst_amount: "",
        sgst_percentage: "",
        sgst_amount: "",
        final_price_amount: "",
        cancellation_percentage: "",
        cancellationequipment: "",
        equipmentrefundamount: "",
      },
    };
  },
  // meta(){
  //   return{
  //   title:this.title
  //   };
  // },
  created() {},
  computed: {
    ...mapState({
      user: (state) => state.account.user,
      mh_acc_booked_data: (state) => state.booking.mh_acc_booked_data,
      mh_acc_data: (state) => state.cancelled.mh_acc_data,
      mh_travel_data: (state) => state.cancelled.mh_travel_data,
      mh_equipment_data: (state) => state.cancelled.mh_equipment_data,
      mh_food_data: (state) => state.cancelled.mh_food_data,

      cities: (state) => state.master.cities,
    }),

    cancellAmount() {
      const total_price = parseFloat(this.AccCancel.total_price).toFixed(2);
      const checkin_datetime = moment(
        `${this.AccCancel.check_in} ${this.AccCancel.checkIn_time}`,
        "YYYY-MM-DD HH:mm"
      ).toDate();
      const now = new Date();
      const time_difference = checkin_datetime.getTime() - now.getTime();
      const hours_remaining = time_difference / (1000 * 60 * 60);

      let refund_percentage;
      if (hours_remaining >= 72) {
        refund_percentage = 100;
      } else if (hours_remaining >= 24) {
        refund_percentage = 60;
      } else {
        refund_percentage = 25;
      }

      const refund_amount = (total_price * refund_percentage) / 100;
      const cancellAmount = Math.round(total_price - refund_amount);

      return cancellAmount;
    },

    partnerAmountOnCancellation() {
      // console.log("this.AccCancel", this.AccCancel);

      const total_price = parseFloat(this.AccCancel.total_price).toFixed(2);

      const checkin_datetime = moment(
        `${this.AccCancel.check_in} ${this.AccCancel.checkIn_time}`,
        "YYYY-MM-DD HH:mm"
      ).toDate();
      const checkout_datetime = moment(
        `${this.AccCancel.check_out} ${this.AccCancel.checkOut_time}`,
        "YYYY-MM-DD HH:mm"
      ).toDate();
      // console.log("checkout_datetime,checkin_datetime",checkin_datetime,checkout_datetime)
      const now = new Date();
      const time_difference = checkin_datetime.getTime() - now.getTime();
      const hours_remaining = time_difference / (1000 * 60 * 60);
      // const refund_percentage = 50;

      let refundAmount = 0;
      let mangohomzrefund =0;

      if (hours_remaining <= 24 && hours_remaining > 0) {
        const days_stay = Math.ceil(
          (checkout_datetime - checkin_datetime) / (1000 * 60 * 60 * 24)
        );
        // console.log("numberofdays", days_stay);

        if (days_stay === 1) {
          let onedaysPriceCount = parseInt(
            this.AccCancel.room_price / this.AccCancel.no_of_days
          );
          let applyGSTonOnedayPrice = parseInt(
            onedaysPriceCount * (this.AccCancel.gst_percentage / 100)
          );
          let partnerAmountOncancelcantion = parseInt(
            onedaysPriceCount + applyGSTonOnedayPrice
          );
          let mangohomzgotoncancel = parseInt(
            this.cancellAmount - partnerAmountOncancelcantion
          );
          refundAmount = partnerAmountOncancelcantion;
          mangohomzrefund=mangohomzgotoncancel;

          // console.log(
          //   "allCalculationinoneplace1",
          //   onedaysPriceCount,
          //   applyGSTonOnedayPrice,
          //   partnerAmountOncancelcantion,
          //   mangohomzgotoncancel
          // );
        } else if (days_stay === 2) {
          let onedaysPriceCount = parseInt(
            this.AccCancel.room_price / this.AccCancel.no_of_days
          );
          let applyGSTonOnedayPrice = parseInt(
            onedaysPriceCount * (this.AccCancel.gst_percentage / 100)
          );
          let partnerAmountOncancelcantion = parseInt(
            onedaysPriceCount + applyGSTonOnedayPrice
          );
          let mangohomzgotoncancel = parseInt(
            this.cancellAmount - partnerAmountOncancelcantion
          );
          refundAmount = partnerAmountOncancelcantion;
          mangohomzrefund=mangohomzgotoncancel;

          // console.log(
          //   "allCalculationinoneplace2",
          //   onedaysPriceCount,
          //   applyGSTonOnedayPrice,
          //   partnerAmountOncancelcantion,
          //   mangohomzgotoncancel
          // );
        } else if (days_stay > 2) {
          refundAmount = total_price / days_stay;
        }

        // if (days_stay === 1) {
        //   refundAmount = (total_price * refund_percentage) / 100;
        // } else if (days_stay === 2) {
        //   refundAmount = (total_price * refund_percentage) / 100;
        // } else if (days_stay > 2) {
        //   refundAmount = total_price / days_stay;
        // }
      }

      const partnerAmount = Math.round(refundAmount);
      const mangohomzgotoncancel = Math.round(mangohomzrefund);


      console.log("partnerAmount", partnerAmount,mangohomzgotoncancel);
      // return partnerAmount;
      return { partnerAmount: partnerAmount, mangohomzgotoncancel: mangohomzgotoncancel };
    },

    cancellPercentage() {
      const total_price = parseFloat(this.AccCancel.total_price).toFixed(2);
      const checkin_datetime = moment(
        `${this.AccCancel.check_in} ${this.AccCancel.checkIn_time}`,
        "YYYY-MM-DD HH:mm"
      ).toDate();
      const now = new Date();
      const time_difference = checkin_datetime.getTime() - now.getTime();
      const hours_remaining = time_difference / (1000 * 60 * 60);

      let refund_percentage;

      if (hours_remaining >= 72) {
        refund_percentage = 100;
      } else if (hours_remaining >= 24) {
        refund_percentage = 60;
      } else {
        refund_percentage = 25;
      }

      const refund_amount = (total_price * refund_percentage) / 100;
      const cancellPercentage = refund_percentage;
      console.log("%", cancellPercentage);
      return cancellPercentage;
    },
    // cancellAmount() {
    //   console.log("",this.AccCancel)
    //   let cancellAmount = Math.round(
    //     parseFloat(this.AccCancel.total_price).toFixed(2) -
    //       (parseFloat(this.AccCancel.total_price).toFixed(2) * 60) / 100
    //   );
    //   return cancellAmount;
    // },
    payableAmount() {
      let payAmountwithoutgst = Math.round(
        parseFloat(this.AccCancel.total_price).toFixed(2) - this.cancellAmount
      );
      let payAmount = parseInt(payAmountwithoutgst+payAmountwithoutgst * (this.AccCancel.gst_percentage/100))
      return payAmount;
    },
    cancellationtravel() {
      let cancellationtravel = Math.round(
        parseFloat(this.travelBookingItem.payable_amount).toFixed(2) -
          (parseFloat(this.travelBookingItem.payable_amount).toFixed(2) * 60) /
            100
      );
      return cancellationtravel;
    },
    travelrefundamount() {
      let travelrefundamount = Math.round(
        (parseFloat(this.travelBookingItem.payable_amount).toFixed(2) * 60) /
          100
      );
      return travelrefundamount;
    },
    cancellationequipment() {
      let cancellationequipment = Math.round(
        parseFloat(this.medicalBookingItem.final_price_amount).toFixed(2) -
          (parseFloat(this.medicalBookingItem.final_price_amount).toFixed(2) *
            60) /
            100
      );
      return cancellationequipment;
    },
    equipmentrefundamount() {
      let equipmentrefundamount = Math.round(
        (parseFloat(this.medicalBookingItem.final_price_amount).toFixed(2) *
          60) /
          100
      );
      return equipmentrefundamount;
    },
    linkTo() {
      let link = this.partner == "Patner with us" ? "/" : "/partner"; //default condition
      return link;
    },
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];

      return user;
    },
  },
  mounted() {
    document.addEventListener("click", this.handleDocumentClick);
    //  this.$store.dispatch("account/getPartnerMenus");
    this.$store.dispatch("dropdown/loadAllCities");
    this.$store.dispatch("master/loadCities");
  },
  methods: {
    ...mapActions("booking", ["getBookingIdDetails"]),
    ...mapActions("booking", ["getMHBookingData"]),
    ...mapActions("booking", ["getMedicalBookingData"]),
    ...mapActions("booking", ["loadAllBookingDetails"]),
    ...mapActions("account", ["partnerLogin", "LOGOUT", "login"]),
    ...mapActions("account", ["agentLogin", "agentLOGOUT", "login"]),
    ...mapActions("account", ["partnerRegistration"]),
    ...mapActions("account", ["grievanceRegistration"]),
    ...mapActions("cancelled", [
      "loadAccomodationDetails",
      "cancellationDialogOpen",
    ]),
    ...mapActions("cancelled", ["loadTravelDetails"]),
    ...mapActions("cancelled", ["loadMedicalDetails"]),
    ...mapActions("cancelled", ["loadFoodDetails"]),
    ...mapActions("cancelled", ["cancellDetails"]),
    ...mapActions("cancelled", ["cancellfoodbooking"]),
    ...mapActions("cancelled", ["cancelltravelbooking"]),
    ...mapActions("cancelled", ["AccomodationStatus"]),
    ...mapActions("cancelled", ["cancellequipmentbooking"]),
    ...mapActions("cancelled", ["equipmentStatus"]),
    ...mapActions("cancelled", ["FoodStatus"]),
    ...mapActions("cancelled", ["TravelStatus"]),
    ...mapActions("account", ["agentRegistration"]),
    // onSubmit() {
    //    if (!this.$refs.customerLoginForm.validate()) return;

    //   this.login(this.customerLoginForm);
    // },

    openMenuDropdown() {
      this.MobileMenu = !this.MobileMenu;
      //console.log("1", this.MobileMenu);
    },

    closeMenu() {
      if (!this.showLanguage && !this.showBookings) {
        this.MobileMenu = false;
      }
    },

    handleDocumentClick(event) {
      // Check if the click event target is not within the menu
      //console.log(this.$el.contains(event.target))
      //console.log(this.MobileMenu)
      if (!this.$el.contains(event.target)) {
        this.closeMenu();
      }
    },

    RedirectAboutPage() {
      this.$router.push("/about");
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    RedirectPartnerPage() {
      this.$router.push("/partnerwithus");
    },
    helthsupportOpenInNewTab() {
      const routeData = this.$router.resolve({ path: "/healthSupport" });
      window.open(routeData.href, "_blank");
    },
    openCancellationDialog() {
      this.userAgreementDialog = false;
      this.cancellationDialog = true;
      this.privacyPolicyDialog = false;
      this.grievanceDialog = false;
    },
    openAccCancelBookDialog() {
      this.AccomodationcancelBookingDialog = true;
    },
    openBookings() {
      this.showBookings = !this.showBookings;
      this.showLanguage = false;
    },
    openLanguage() {
      this.showLanguage = !this.showLanguage;
      this.showBookings = false;
      //console.log(this.showLanguage)
    },
    openAccCancellationDialog() {
      this.AccomodationcancellationDialog = true;
    },
    opentravelCancellationDialog() {
      this.TravelcancellationDialog = true;
    },
    openequipCancellationDialog() {
      this.EquipmentcancellationDialog = true;
    },
    openfoodCancellationDialog() {
      this.FoodcancellationDialog = true;
    },
    openPrivacyPolicyDialog() {
      this.userAgreementDialog = false;
      this.cancellationDialog = false;
      this.privacyPolicyDialog = true;
      this.grievanceDialog = false;
    },
    openGrievanceDialog() {
      this.grievanceDialog = true;
      this.userAgreementDialog = false;
      this.cancellationDialog = false;
      this.privacyPolicyDialog = false;
    },

    handleScroll() {
      this.$router.replace("/");
      setTimeout(() => {
        const ele = document.getElementById("partnerRegPage"); // You need to get your element here
        const target = getScrollTarget(ele);
        //const offset = ele.offsetTop - ele.scrollHeight + 1450;
        const offset = ele.offsetTop;
        const duration = 1000;
        setScrollPosition(target, offset, duration);
      }, 1000);
    },

    handleScrollForAcc() {
      this.$router.replace("/");
      setTimeout(() => {
        const ele = document.getElementById("bookingformMobile"); // You need to get your element here
        const target = getScrollTarget(ele);
        //const offset = ele.offsetTop - ele.scrollHeight + 1450;
        const offset = ele.offsetTop - ele.scrollHeight + 400;
        const duration = 1000;
        setScrollPosition(target, offset, duration);
      }, 1000);
    },

    showLoading() {
      if (this.usertype) {
        this.$q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: "yellow",
          spinnerSize: 140,
          backgroundColor: "purple",
          message: "Some important process is in progress. Hang on...",
          messageColor: "black",
        });
        // hiding in 3s
        this.timer = setTimeout(() => {
          this.$q.loading.hide();
          this.timer = void 0;
        }, 3000);
      } else {
        this.$q.notify({
          message: `<strong>To become a Partner you can Register from here, Please scroll down to bottom</strong>`,
          position: "top",
          type: "positive",
          html: true,
        });
      }
    },
    onSubmit() {
      this.$refs.customerLoginForm.validate().then((success) => {
        if (success) {
          this.login(this.customerLoginForm);
          setTimeout(() => {
            this.customerLoginForm = customerForm();
          }, 3000);
        }
      });
    },

    onSubmit1() {
      this.$refs.partnerLoginForm.validate().then((success) => {
        if (success) {
          this.partnerLogin(this.partnerLoginForm);
          setTimeout(() => {
            this.partnerLoginForm = partnerForm();
          }, 3000);
        }
      });
    },
    agentsubmit() {
      this.$refs.bookingAgentLoginForm.validate().then((success) => {
        if (success) {
          this.agentLogin(this.bookingAgentLoginForm);
          setTimeout(() => {
            this.bookingAgentLoginForm = agentForm();
          }, 3000);
        }
      });
    },
    onPartnerSignUpSubmit() {
      this.$refs.patnerForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.partnerRegistration(this.patnerForm);
              this.addDataDialog = false;
              this.patnerForm = signMaster();
              this.$refs.patnerForm.reset();
            })
            .onCancel(() => {
              this.addDataDialog = true;
            });
        }
      });
    },
    onGrievanceSubmit() {
      this.$refs.grievanceForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.grievanceRegistration(this.grievanceForm);
              this.grievanceDialog = false;
              this.$refs.grievanceForm.reset();
            })
            .onCancel(() => {
              this.grievanceDialog = true;
            });
        } else {
          this.$q.notify({
            message: `Please Enter Form Properly`,
            position: "top",
            type: "negative",
          });
        }
      });
    },
    onReset() {
      this.$refs.customerLoginForm.reset();
    },
    onReset1() {
      this.$refs.partnerLoginForm.reset();
    },
    onPartnerSignUpReset() {
      this.$refs.patnerForm.reset();
    },
    onGrievanceReset() {
      this.$refs.grievanceForm.reset();
    },
    loginNotify() {
      this.$q.notify({
        message: "Login Successful",
      });
    },
    selectedLanguage(lang) {
      this.$store.state.account.language = lang;
      this.langLabel = lang;
      this.showLanguage = !this.showLanguage;
    },
    getAllBookingData(item) {
      this.$store.state.booking.mh_acc_booked_data = [];

      if (this.mh_booking_id != "") {
        this.loadAllBookingDetails(item);
        // this.resetFiles();
      } else if (this.mh_booking_id == "") {
        this.$q.notify({
          color: "negative",
          message: "Please Fill the MH Booking ID",
        });
      }
    },
    // openMainPage() {
    //   this.$router.replace("/");
    // },
    loginClick() {
      // this.$router.replace("/");
      this.bar2 = true;
    },
    openBookingsLoginDialog() {
      this.mh_booking_id = "";
      // this.$router.push("/");
      this.$store.state.booking.mh_acc_booked_data = [];
      this.bookingsLoginDialog = true;
    },
    opentravel(item) {
      this.$store.state.booking.mh_acc_booked_data = [];
      api.get(`/booking/loadAllBookingDetails/${item}`).then((response) => {
        if (response.data.data.length > 0) {
          const checkOutDate = response.data.data[0].check_out;
          const checkOutDateTime = new Date(checkOutDate);

          const currentDate = new Date();

          currentDate.setHours(0, 0, 0, 0);
          console.log("not coming", checkOutDateTime, currentDate);

          if (checkOutDateTime <= currentDate) {
            this.$q.notify({
              color: "negative",
              message: `${item} is not active. Please try with an active ID.`,
            });
            return;
          }

          this.getBookingIdDetails(item);
        } else {
          this.$q.notify({
            color: "negative",
            message: `${item} is not found. Please check the MH Booking ID.`,
          });
        }
      });
    },

    // opentravel(item) {
    //   this.$store.state.booking.mh_acc_booked_data = [];
    //   api
    //     .get(`/booking/loadAllBookingDetails/${item}`)

    //     .then((response) => {
    //       if (response.data.data.length > 0) {
    //         this.getBookingIdDetails(item);
    //         console.log("response.data.data",response.data)
    //       } else {
    //         this.$q.notify({
    //           color: "negative",
    //           message: `${item} is not found. Please Check the MH Booking ID`,
    //         });
    //       }
    //     });
    // },
    openmedical(item) {
      this.$store.state.booking.mh_acc_booked_data = [];
      api
        .get(`/booking/loadAllBookingDetails/${item}`)

        .then((response) => {
          if (response.data.data.length > 0) {
            this.getMedicalBookingData(item);
          } else {
            this.$q.notify({
              color: "negative",
              message: `${item} is not found. Please Check the MH Booking ID`,
            });
          }
        });
    },
    openfood(item) {
      this.$store.state.booking.mh_acc_booked_data = [];
      api
        .get(`/booking/loadAllBookingDetails/${item}`)

        .then((response) => {
          if (response.data.data.length > 0) {
            this.getMHBookingData(item);
          } else {
            this.$q.notify({
              color: "negative",
              message: `${item} is not found. Please Check the MH Booking ID`,
            });
          }
        });
    },
    closeBookingsLoginDialog() {
      this.bookingsLoginDialog = false;
      this.mh_booking_id = "";
    },
    openCancelBookingsDialog() {
      this.mh_booking_id = "";
      this.$store.state.booking.mh_acc_booked_data = [];
      this.CancelbookingsDialog = true;
      this.$router.push("/");
      this.showBookings = !this.showBookings;
    },

    cancelaccommodation(item) {
      const payload = {
        item,
        cancellationDialogOpen: this.cancellationDialogOpen,
        cancellationDialogAcc: false,
      };
      this.loadAccomodationDetails(payload);
      this.accitem = Object.assign({}, item);
      // console.log("sss", this.mh_acc_data[0]);
      this.AccCancel.booking_order_id = this.mh_acc_data[0].booking_order_id;
      this.AccCancel.account_id = this.mh_acc_data[0].account_id;
      this.AccCancel.hotel_txn_id = this.mh_acc_data[0].hotel_txn_id;
      this.AccCancel.property_name = this.mh_acc_data[0].property_name;
      this.AccCancel.property_type = this.mh_acc_data[0].property_type;
      this.AccCancel.room_type = this.mh_acc_data[0].room_type;
      this.AccCancel.phone_no = this.mh_acc_data[0].phone_no;
      this.AccCancel.check_in = this.mh_acc_data[0].check_in;
      this.AccCancel.check_out = this.mh_acc_data[0].check_out;
      this.AccCancel.guest_count = this.mh_acc_data[0].guest_count;
      this.AccCancel.no_of_days = this.mh_acc_data[0].no_of_days;
      this.AccCancel.room_price = this.mh_acc_data[0].room_price;
      this.AccCancel.discount = this.mh_acc_data[0].discount;
      this.AccCancel.discount_price = this.mh_acc_data[0].discount_price;
      this.AccCancel.mh_offer_name = this.mh_acc_data[0].mh_offer_name;
      this.AccCancel.mh_offer_price = this.mh_acc_data[0].mh_offer_price;
      this.AccCancel.gst_percentage = this.mh_acc_data[0].gst_percentage;
      this.AccCancel.cgst_percentage = this.mh_acc_data[0].cgst_percentage;
      this.AccCancel.cgst_amount = this.mh_acc_data[0].cgst_amount;
      this.AccCancel.sgst_percentage = this.mh_acc_data[0].sgst_percentage;
      this.AccCancel.sgst_amount = this.mh_acc_data[0].sgst_amount;
      this.AccCancel.total_price = this.mh_acc_data[0].total_price;
      this.AccCancel.state_name = this.mh_acc_data[0].state_name;
      this.AccCancel.facilities = this.mh_acc_data[0].facilities;
      this.AccCancel.room_booked_count = this.mh_acc_data[0].room_booked_count;
      this.AccCancel.guest_count = this.mh_acc_data[0].guest_count;
      this.AccCancel.booking_status = this.mh_acc_data[0].booking_status;
      this.AccCancel.property_city_id = this.mh_acc_data[0].property_city_id;
      this.AccCancel.property_city_name =
        this.mh_acc_data[0].property_city_name;
      this.AccCancel.guest_name =
        this.mh_acc_data[0].GuestDetails[0].guest_name;
      this.AccCancel.city = this.mh_acc_data[0].city;
      this.AccCancel.gst_amount = this.mh_acc_data[0].gst_amount;
      this.AccCancel.near_hospital_name =
        this.mh_acc_data[0].near_hospital_name;
      this.AccCancel.GuestDetails = this.mh_acc_data[0].GuestDetails;
      this.AccCancel.email_id = this.mh_acc_data[0].email_id;
      this.AccCancel.property_email = this.mh_acc_data[0].property_email;
      this.AccCancel.gst_status = this.mh_acc_data[0].gst_status;


      //console.log("this.mh_acc_data[0]", this.mh_acc_data[0]);

      //   console.log("this.AccCancel", this.AccCancel);

      this.cancellationDialogAcc = true;
    },
    // cancelaccommodation(item) {
    //   this.loadAccomodationDetails({
    //     item,

    //     cancellationDialogOpen: this.cancellationDialogOpen,
    //   });
    //   //  console.log("item  ascfe", item);
    //   //  this.accIndex = this.mh_acc_data.indexOf(item);
    //   this.accitem = Object.assign({}, item);
    //   console.log("", this.mh_acc_data[0]);
    //   this.AccCancel.booking_order_id = this.mh_acc_data[0].booking_order_id;
    //   this.AccCancel.property_name = this.mh_acc_data[0].property_name;
    //   this.AccCancel.property_type = this.mh_acc_data[0].property_type;
    //   this.AccCancel.room_type = this.mh_acc_data[0].room_type;
    //   this.AccCancel.phone_no = this.mh_acc_data[0].phone_no;
    //   this.AccCancel.check_in = this.mh_acc_data[0].check_in;
    //   this.AccCancel.check_out = this.mh_acc_data[0].check_out;
    //   this.AccCancel.guest_count = this.mh_acc_data[0].guest_count;
    //   this.AccCancel.no_of_days = this.mh_acc_data[0].no_of_days;
    //   this.AccCancel.room_price = this.mh_acc_data[0].room_price;
    //   this.AccCancel.discount = this.mh_acc_data[0].discount;
    //   this.AccCancel.discount_price = this.mh_acc_data[0].discount_price;
    //   this.AccCancel.mh_offer_name = this.mh_acc_data[0].mh_offer_name;
    //   this.AccCancel.mh_offer_price = this.mh_acc_data[0].mh_offer_price;
    //   this.AccCancel.gst_percentage = this.mh_acc_data[0].gst_percentage;
    //   this.AccCancel.cgst_percentage = this.mh_acc_data[0].cgst_percentage;
    //   this.AccCancel.cgst_amount = this.mh_acc_data[0].cgst_amount;
    //   this.AccCancel.sgst_percentage = this.mh_acc_data[0].sgst_percentage;
    //   this.AccCancel.sgst_amount = this.mh_acc_data[0].sgst_amount;
    //   this.AccCancel.total_price = this.mh_acc_data[0].total_price;
    //   this.AccCancel.state_name = this.mh_acc_data[0].state_name;
    //   this.AccCancel.facilities = this.mh_acc_data[0].facilities;
    //   this.AccCancel.booking_status = this.mh_acc_data[0].booking_status;
    //   //console.log("this.mh_acc_data[0]", this.mh_acc_data[0]);

    //   //   console.log("this.AccCancel", this.AccCancel);

    //   this.cancellationDialogAcc = true;
    // },
    cancellbooking() {
      this.cancelledbooking.booking_order_id = this.AccCancel.booking_order_id;
      this.cancelledbooking.account_id = this.AccCancel.account_id;
      this.cancelledbooking.hotel_txn_id = this.AccCancel.hotel_txn_id;
      this.cancelledbooking.property_name = this.AccCancel.property_name;
      this.cancelledbooking.property_type = this.AccCancel.property_type;
      this.cancelledbooking.room_type = this.AccCancel.room_type;
      this.cancelledbooking.phone_no = this.AccCancel.phone_no;
      this.cancelledbooking.check_in = this.AccCancel.check_in;
      this.cancelledbooking.check_out = this.AccCancel.check_out;
      this.cancelledbooking.guest_count = this.AccCancel.guest_count;
      this.cancelledbooking.no_of_days = this.AccCancel.no_of_days;
      this.cancelledbooking.room_price = this.AccCancel.room_price;
      this.cancelledbooking.discount = this.AccCancel.discount;
      this.cancelledbooking.discount_price = this.AccCancel.discount_price;
      this.cancelledbooking.mh_offer_name = this.AccCancel.mh_offer_name;
      this.cancelledbooking.mh_offer_price = this.AccCancel.mh_offer_price;
      this.cancelledbooking.gst_percentage = this.AccCancel.gst_percentage;
      this.cancelledbooking.cgst_percentage = this.AccCancel.cgst_percentage;
      this.cancelledbooking.cgst_amount = this.AccCancel.cgst_amount;
      this.cancelledbooking.sgst_percentage = this.AccCancel.sgst_percentage;
      this.cancelledbooking.sgst_amount = this.AccCancel.sgst_amount;
      this.cancelledbooking.total_price = this.AccCancel.total_price;
      this.cancelledbooking.state_name = this.AccCancel.state_name;
      this.cancelledbooking.facilities = this.AccCancel.facilities;
      this.cancelledbooking.room_booked_count =
        this.AccCancel.room_booked_count;
      this.cancelledbooking.guest_count = this.AccCancel.guest_count;
      this.cancelledbooking.cancellation_percentage = this.cancellPercentage;
      this.cancelledbooking.cancellAmount = this.cancellAmount;
      this.cancelledbooking.payableAmount = this.payableAmount;
      this.cancelledbooking.property_city_id = this.AccCancel.property_city_id;
      this.cancelledbooking.property_city_name =
        this.AccCancel.property_city_name;
      this.cancelledbooking.guest_name = this.AccCancel.guest_name;
      this.cancelledbooking.city = this.AccCancel.city;
      this.cancelledbooking.gst_amount = this.AccCancel.gst_amount;
      this.cancelledbooking.near_hospital_name =
        this.AccCancel.near_hospital_name;
      this.cancelledbooking.GuestDetails = this.AccCancel.GuestDetails;
      this.cancelledbooking.email_id = this.AccCancel.email_id;
      this.cancelledbooking.property_email = this.AccCancel.property_email;
      this.cancelledbooking.partner_amount_on_cancel =
        this.partnerAmountOnCancellation;
        this.cancelledbooking.gst_status=this.AccCancel.gst_status;
      this.cancelledbooking.status =
        this.mh_acc_data[0].booking_status == "Cancelled" ? true : false;
      // console.log("this.cancelledbooking", this.cancelledbooking);
      this.AccomodationStatus(this.cancelledbooking);
      this.cancellDetails(this.cancelledbooking);
      this.cancellationDialogAcc = false;
      this.AccomodationcancelBookingDialog = false;
      this.cancellref = false;
      this.guestdetails = true;
      // this.$router.push("/cancelConfirmedPage");
    },
    cancelfood(item) {
      this.loadFoodDetails(item);
      // console.log("final", this.mh_food_data[0].booking_order_id);
      this.foodBookingItem = this.mh_food_data[0].booking_order_id;
      // console.log("sasaaaa", this.foodBookingItem);
      this.cancellationDialogfood = true;
    },
    cancellfooddata() {
      // console.log("food", this.foodBookingItem);
      this.cancelledfoodbooking.food_booking_orderid =
        this.foodBookingItem.food_booking_orderid;
      this.cancelledfoodbooking.food_partner_name =
        this.foodBookingItem.food_partner_name;
      this.cancelledfoodbooking.food_partner_sub_name =
        this.foodBookingItem.food_partner_sub_name;
      this.cancelledfoodbooking.food_booking_type =
        this.foodBookingItem.food_booking_type;
      this.cancelledfoodbooking.mobile_number =
        this.foodBookingItem.mobile_number;
      this.cancelledfoodbooking.food_booking_date =
        this.foodBookingItem.food_booking_date;
      this.cancelledfoodbooking.total_quantity_booked =
        this.foodBookingItem.total_quantity_booked;
      this.cancelledfoodbooking.food_charges =
        this.foodBookingItem.food_charges;
      this.cancelledfoodbooking.discount = this.foodBookingItem.discount;
      this.cancelledfoodbooking.discount_price =
        this.foodBookingItem.discount_price;
      this.cancelledfoodbooking.mh_offer_coupon =
        this.foodBookingItem.mh_offer_coupon;
      this.cancelledfoodbooking.mh_offer_price =
        this.foodBookingItem.mh_offer_price;
      this.cancelledfoodbooking.gst_percentage =
        this.foodBookingItem.gst_percentage;
      this.cancelledfoodbooking.gst_on_base_price =
        this.foodBookingItem.gst_on_base_price;
      this.cancelledfoodbooking.final_price_amount =
        this.foodBookingItem.final_price_amount;
      this.cancelledfoodbooking.cancellation_percentage = 100;
      this.cancelledfoodbooking.cancellationFood = this.cancellationFood;
      this.cancelledfoodbooking.foodrefundamount = this.foodrefundamount;
      this.cancelledfoodbooking.status =
        this.foodBookingItem.booking_status == "Cancelled" ? true : false;
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Cancell the booking ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.FoodStatus(this.cancelledfoodbooking);
          this.cancellfoodbooking(this.cancelledfoodbooking);
          this.cancellationDialogfood = false;
        })
        .onCancel(() => {});
    },
    canceltravel(item) {
      // this.travelBookingItem = {};
      this.travelBookingItem = Object.assign({}, item);
      this.loadTravelDetails(item);
      this.travelBookingItem.booking_order_id =
        this.mh_travel_data[0].booking_order_id;
      this.travelBookingItem.travel_booking_orderid =
        this.mh_travel_data[0].travel_booking_orderid;
      this.travelBookingItem.travel_name = this.mh_travel_data[0].travel_name;
      this.travelBookingItem.transport_sub_name =
        this.mh_travel_data[0].transport_sub_name;
      this.travelBookingItem.booking_origin =
        this.mh_travel_data[0].booking_origin;
      this.travelBookingItem.booking_destination =
        this.mh_travel_data[0].booking_destination;
      this.travelBookingItem.mobile_number =
        this.mh_travel_data[0].mobile_number;
      this.travelBookingItem.booked_date = this.mh_travel_data[0].booked_date;
      this.travelBookingItem.booking_time = this.mh_travel_data[0].booking_time;
      this.travelBookingItem.travel_charges =
        this.mh_travel_data[0].travel_charges;
      this.travelBookingItem.mh_offer_coupon =
        this.mh_travel_data[0].mh_offer_coupon;
      this.travelBookingItem.mh_offer_price =
        this.mh_travel_data[0].mh_offer_price;
      this.travelBookingItem.gst_percentage =
        this.mh_travel_data[0].gst_percentage;
      this.travelBookingItem.gst_on_base_price =
        this.mh_travel_data[0].gst_on_base_price;
      this.travelBookingItem.cgst_percentage =
        this.mh_travel_data[0].cgst_percentage;
      this.travelBookingItem.cgst_amount = this.mh_travel_data[0].cgst_amount;
      this.travelBookingItem.sgst_percentage =
        this.mh_travel_data[0].sgst_percentage;
      this.travelBookingItem.sgst_amount = this.mh_travel_data[0].sgst_amount;
      this.travelBookingItem.payable_amount =
        this.mh_travel_data[0].payable_amount;
      this.travelBookingItem.booking_status =
        this.mh_travel_data[0].booking_status;
      this.cancellationDialogtravel = true;
    },
    canceltraveldata() {
      this.cancelledtravelbooking.booking_order_id =
        this.travelBookingItem.booking_order_id;
      this.cancelledtravelbooking.travel_booking_orderid =
        this.travelBookingItem.travel_booking_orderid;
      this.cancelledtravelbooking.travel_name =
        this.travelBookingItem.travel_name;
      this.cancelledtravelbooking.transport_sub_name =
        this.travelBookingItem.transport_sub_name;
      this.cancelledtravelbooking.booking_origin =
        this.travelBookingItem.booking_origin;
      this.cancelledtravelbooking.booking_destination =
        this.travelBookingItem.booking_destination;
      this.cancelledtravelbooking.mobile_number =
        this.travelBookingItem.mobile_number;
      this.cancelledtravelbooking.booking_date =
        this.travelBookingItem.booked_date;
      this.cancelledtravelbooking.booking_time =
        this.travelBookingItem.booking_time;
      this.cancelledtravelbooking.travel_charges =
        this.travelBookingItem.travel_charges;
      this.cancelledtravelbooking.mh_offer_coupon =
        this.travelBookingItem.mh_offer_coupon;
      this.cancelledtravelbooking.mh_offer_price =
        this.travelBookingItem.mh_offer_price;
      this.cancelledtravelbooking.gst_percentage =
        this.travelBookingItem.gst_percentage;
      this.cancelledtravelbooking.cgst_percentage =
        this.travelBookingItem.cgst_percentage;
      this.cancelledtravelbooking.cgst_amount =
        this.travelBookingItem.cgst_amount;
      this.cancelledtravelbooking.sgst_percentage =
        this.travelBookingItem.sgst_percentage;
      this.cancelledtravelbooking.sgst_amount =
        this.travelBookingItem.sgst_amount;
      this.cancelledtravelbooking.payable_amount =
        this.travelBookingItem.payable_amount;
      this.cancelledtravelbooking.cancellation_percentage = 60;
      this.cancelledtravelbooking.cancellationtravel = this.cancellationtravel;
      this.cancelledtravelbooking.travelrefundamount = this.travelrefundamount;
      this.cancelledtravelbooking.status =
        this.travelBookingItem.booking_status == "Cancelled" ? true : false;
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Cancell the booking ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          let guestCancelTravelData = this.cancelledtravelbooking;

          this.TravelStatus(this.cancelledtravelbooking);
          this.cancelltravelbooking(this.cancelledtravelbooking);
          this.$router.push({
            name: "Get Guest CANCEL Travel ID",
            params: { travelCanceldata: guestCancelTravelData },
          });
          this.cancellationDialogtravel = false;
        })
        .onCancel(() => {});
    },
    cancelequipment(item) {
      this.loadMedicalDetails(item);

      this.medicalBookingItem.booking_order_id =
        this.mh_equipment_data[0].booking_order_id;
      this.medicalBookingItem.medical_booking_orderid =
        this.mh_equipment_data[0].medical_booking_orderid;
      this.medicalBookingItem.eqp_booking_type =
        this.mh_equipment_data[0].eqp_booking_type;
      this.medicalBookingItem.mobile_number =
        this.mh_equipment_data[0].mobile_number;
      this.medicalBookingItem.eqp_booking_date =
        this.mh_equipment_data[0].eqp_booking_date;
      this.medicalBookingItem.medical_item_count =
        this.mh_equipment_data[0].equipment_items;
      this.medicalBookingItem.medical_charges =
        this.mh_equipment_data[0].medical_charges;
      this.medicalBookingItem.discount = this.mh_equipment_data[0].discount;
      this.medicalBookingItem.discount_price =
        this.mh_equipment_data[0].discount_price;
      this.medicalBookingItem.mh_offer_coupon =
        this.mh_equipment_data[0].mh_offer_coupon;
      this.medicalBookingItem.mh_offer_price =
        this.mh_equipment_data[0].mh_offer_price;
      this.medicalBookingItem.gst_percentage =
        this.mh_equipment_data[0].gst_percentage;
      // this.medicalBookingItem.gst_on_base_price =this.mh_equipment_data[0].gst_on_base_price;
      this.medicalBookingItem.cgst_percentage =
        this.mh_equipment_data[0].cgst_percentage;
      this.medicalBookingItem.cgst_amount =
        this.mh_equipment_data[0].cgst_amount;
      this.medicalBookingItem.sgst_percentage =
        this.mh_equipment_data[0].sgst_percentage;
      this.medicalBookingItem.sgst_amount =
        this.mh_equipment_data[0].sgst_amount;
      this.medicalBookingItem.final_price_amount =
        this.mh_equipment_data[0].final_price_amount;
      this.medicalBookingItem.equipment_items =
        this.mh_equipment_data[0].equipment_items;
      this.medicalBookingItem.equipment_partner_name =
        this.mh_equipment_data[0].equipment_name;
      this.medicalBookingItem.equipment_partner_sub_name =
        this.mh_equipment_data[0].equipment_sub_name;
      this.medicalBookingItem.booking_status =
        this.mh_equipment_data[0].booking_status;
      this.cancellationDialogequipment = true;
    },
    cancellequipmentdata() {
      this.cancelledequipmentbooking.booking_order_id =
        this.medicalBookingItem.booking_order_id;
      this.cancelledequipmentbooking.medical_booking_orderid =
        this.medicalBookingItem.medical_booking_orderid;
      this.cancelledequipmentbooking.equipment_partner_name =
        this.medicalBookingItem.equipment_partner_name;
      this.cancelledequipmentbooking.equipment_partner_sub_name =
        this.medicalBookingItem.equipment_partner_sub_name;
      this.cancelledequipmentbooking.eqp_booking_type =
        this.medicalBookingItem.eqp_booking_type;
      this.cancelledequipmentbooking.mobile_number =
        this.medicalBookingItem.mobile_number;
      this.cancelledequipmentbooking.eqp_booking_date =
        this.medicalBookingItem.eqp_booking_date;
      this.cancelledequipmentbooking.medical_item_count =
        this.medicalBookingItem.medical_item_count;
      this.cancelledequipmentbooking.medical_charges =
        this.medicalBookingItem.medical_charges;
      // this.cancelledequipmentbooking.discount = this.medicalBookingItem.discount;
      // this.cancelledequipmentbooking.discount_price = this.medicalBookingItem.discount_price;
      this.cancelledequipmentbooking.mh_offer_coupon =
        this.medicalBookingItem.mh_offer_coupon;
      this.cancelledequipmentbooking.mh_offer_price =
        this.medicalBookingItem.mh_offer_price;
      this.cancelledequipmentbooking.gst_percentage =
        this.medicalBookingItem.gst_percentage;
      // this.cancelledequipmentbooking.gst_on_base_price = this.medicalBookingItem.gst_on_base_price;
      this.cancelledequipmentbooking.cgst_percentage =
        this.medicalBookingItem.cgst_percentage;
      this.cancelledequipmentbooking.cgst_amount =
        this.medicalBookingItem.cgst_amount;
      this.cancelledequipmentbooking.sgst_percentage =
        this.medicalBookingItem.sgst_percentage;
      this.cancelledequipmentbooking.sgst_amount =
        this.medicalBookingItem.sgst_amount;
      this.cancelledequipmentbooking.final_price_amount =
        this.medicalBookingItem.final_price_amount;
      this.cancelledequipmentbooking.cancellation_percentage = 60;
      this.cancelledequipmentbooking.cancellationequipment =
        this.cancellationequipment;
      this.cancelledequipmentbooking.equipmentrefundamount =
        this.equipmentrefundamount;
      this.cancelledequipmentbooking.status =
        this.medicalBookingItem.booking_status == "Cancelled" ? true : false;
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Cancell the booking ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          let guestCancelMedicalData = this.cancelledequipmentbooking;
          this.equipmentStatus(this.cancelledequipmentbooking);
          this.cancellequipmentbooking(this.cancelledequipmentbooking);
          this.$router.push({
            name: "Get Guest CANCEL medical ID",
            params: { medicalCanceldata: guestCancelMedicalData },
          });
          this.cancellationDialogequipment = false;
        })
        .onCancel(() => {});
    },
    accommodationTravelCancel() {
      this.cancelledtravelbooking.booking_order_id =
        this.travelBookingItem.booking_order_id;
      this.cancelledtravelbooking.travel_booking_orderid =
        this.travelBookingItem.travel_booking_orderid;
      this.cancelledtravelbooking.travel_name =
        this.travelBookingItem.travel_name;
      this.cancelledtravelbooking.transport_sub_name =
        this.travelBookingItem.transport_sub_name;
      this.cancelledtravelbooking.booking_origin =
        this.travelBookingItem.booking_origin;
      this.cancelledtravelbooking.booking_destination =
        this.travelBookingItem.booking_destination;
      this.cancelledtravelbooking.mobile_number =
        this.travelBookingItem.mobile_number;
      this.cancelledtravelbooking.booking_date =
        this.travelBookingItem.booked_date;
      this.cancelledtravelbooking.booking_time =
        this.travelBookingItem.booking_time;
      this.cancelledtravelbooking.travel_charges =
        this.travelBookingItem.travel_charges;
      this.cancelledtravelbooking.mh_offer_coupon =
        this.travelBookingItem.mh_offer_coupon;
      this.cancelledtravelbooking.mh_offer_price =
        this.travelBookingItem.mh_offer_price;
      this.cancelledtravelbooking.gst_percentage =
        this.travelBookingItem.gst_percentage;
      this.cancelledtravelbooking.cgst_percentage =
        this.travelBookingItem.cgst_percentage;
      this.cancelledtravelbooking.cgst_amount =
        this.travelBookingItem.cgst_amount;
      this.cancelledtravelbooking.sgst_percentage =
        this.travelBookingItem.sgst_percentage;
      this.cancelledtravelbooking.sgst_amount =
        this.travelBookingItem.sgst_amount;
      this.cancelledtravelbooking.payable_amount =
        this.travelBookingItem.payable_amount;
      this.cancelledtravelbooking.cancellation_percentage = 60;
      this.cancelledtravelbooking.cancellationtravel = this.cancellationtravel;
      this.cancelledtravelbooking.travelrefundamount = this.travelrefundamount;
      this.cancelledtravelbooking.status =
        this.travelBookingItem.booking_status == "Cancelled" ? true : false;

      this.TravelStatus(this.cancelledtravelbooking);
      this.cancelltravelbooking(this.cancelledtravelbooking);
      this.cancellationDialogtravel = false;
    },

    accommodationEquipmentCancel() {
      this.cancelledequipmentbooking.booking_order_id =
        this.medicalBookingItem.booking_order_id;
      this.cancelledequipmentbooking.medical_booking_orderid =
        this.medicalBookingItem.medical_booking_orderid;
      this.cancelledequipmentbooking.equipment_partner_name =
        this.medicalBookingItem.equipment_partner_name;
      this.cancelledequipmentbooking.equipment_partner_sub_name =
        this.medicalBookingItem.equipment_partner_sub_name;
      this.cancelledequipmentbooking.eqp_booking_type =
        this.medicalBookingItem.eqp_booking_type;
      this.cancelledequipmentbooking.mobile_number =
        this.medicalBookingItem.mobile_number;
      this.cancelledequipmentbooking.eqp_booking_date =
        this.medicalBookingItem.eqp_booking_date;
      this.cancelledequipmentbooking.medical_item_count =
        this.medicalBookingItem.medical_item_count;
      this.cancelledequipmentbooking.medical_charges =
        this.medicalBookingItem.medical_charges;
      // this.cancelledequipmentbooking.discount = this.medicalBookingItem.discount;
      // this.cancelledequipmentbooking.discount_price = this.medicalBookingItem.discount_price;
      this.cancelledequipmentbooking.mh_offer_coupon =
        this.medicalBookingItem.mh_offer_coupon;
      this.cancelledequipmentbooking.mh_offer_price =
        this.medicalBookingItem.mh_offer_price;
      this.cancelledequipmentbooking.gst_percentage =
        this.medicalBookingItem.gst_percentage;
      // this.cancelledequipmentbooking.gst_on_base_price = this.medicalBookingItem.gst_on_base_price;
      this.cancelledequipmentbooking.cgst_percentage =
        this.medicalBookingItem.cgst_percentage;
      this.cancelledequipmentbooking.cgst_amount =
        this.medicalBookingItem.cgst_amount;
      this.cancelledequipmentbooking.sgst_percentage =
        this.medicalBookingItem.sgst_percentage;
      this.cancelledequipmentbooking.sgst_amount =
        this.medicalBookingItem.sgst_amount;
      this.cancelledequipmentbooking.final_price_amount =
        this.medicalBookingItem.final_price_amount;
      this.cancelledequipmentbooking.cancellation_percentage = 60;
      this.cancelledequipmentbooking.cancellationequipment =
        this.cancellationequipment;
      this.cancelledequipmentbooking.equipmentrefundamount =
        this.equipmentrefundamount;
      this.cancelledequipmentbooking.status =
        this.medicalBookingItem.booking_status == "Cancelled" ? true : false;

      this.equipmentStatus(this.cancelledequipmentbooking);
      this.cancellequipmentbooking(this.cancelledequipmentbooking);
      this.cancellationDialogequipment = false;
    },

    accommodationFoodCancel() {
      this.cancelledfoodbooking.food_booking_orderid =
        this.foodBookingItem.food_booking_orderid;
      this.cancelledfoodbooking.food_partner_name =
        this.foodBookingItem.food_partner_name;
      this.cancelledfoodbooking.food_partner_sub_name =
        this.foodBookingItem.food_partner_sub_name;
      this.cancelledfoodbooking.food_booking_type =
        this.foodBookingItem.food_booking_type;
      this.cancelledfoodbooking.mobile_number =
        this.foodBookingItem.mobile_number;
      this.cancelledfoodbooking.food_booking_date =
        this.foodBookingItem.food_booking_date;
      this.cancelledfoodbooking.total_quantity_booked =
        this.foodBookingItem.total_quantity_booked;
      this.cancelledfoodbooking.food_charges =
        this.foodBookingItem.food_charges;
      this.cancelledfoodbooking.discount = this.foodBookingItem.discount;
      this.cancelledfoodbooking.discount_price =
        this.foodBookingItem.discount_price;
      this.cancelledfoodbooking.mh_offer_coupon =
        this.foodBookingItem.mh_offer_coupon;
      this.cancelledfoodbooking.mh_offer_price =
        this.foodBookingItem.mh_offer_price;
      this.cancelledfoodbooking.gst_percentage =
        this.foodBookingItem.gst_percentage;
      this.cancelledfoodbooking.gst_on_base_price =
        this.foodBookingItem.gst_on_base_price;
      this.cancelledfoodbooking.final_price_amount =
        this.foodBookingItem.final_price_amount;
      this.cancelledfoodbooking.cancellation_percentage = 100;
      this.cancelledfoodbooking.cancellationFood = this.cancellationFood;
      this.cancelledfoodbooking.foodrefundamount = this.foodrefundamount;
      this.cancelledfoodbooking.status =
        this.foodBookingItem.booking_status == "Cancelled" ? true : false;

      this.FoodStatus(this.cancelledfoodbooking);
      this.cancellfoodbooking(this.cancelledfoodbooking);
      this.cancellationDialogfood = false;
    },

    accocanceltravel(item) {
      this.travelBookingItem = {};
      this.travelBookingItem = Object.assign({}, item);
      this.loadTravelDetails(item);
      this.travelBookingItem.booking_order_id =
        this.mh_travel_data[0].booking_order_id;
      this.travelBookingItem.travel_booking_orderid =
        this.mh_travel_data[0].travel_booking_orderid;
      this.travelBookingItem.travel_name = this.mh_travel_data[0].travel_name;
      this.travelBookingItem.transport_sub_name =
        this.mh_travel_data[0].transport_sub_name;
      this.travelBookingItem.booking_origin =
        this.mh_travel_data[0].booking_origin;
      this.travelBookingItem.booking_destination =
        this.mh_travel_data[0].booking_destination;
      this.travelBookingItem.mobile_number =
        this.mh_travel_data[0].mobile_number;
      this.travelBookingItem.booked_date = this.mh_travel_data[0].booked_date;
      this.travelBookingItem.booking_time = this.mh_travel_data[0].booking_time;
      this.travelBookingItem.travel_charges =
        this.mh_travel_data[0].travel_charges;
      this.travelBookingItem.mh_offer_coupon =
        this.mh_travel_data[0].mh_offer_coupon;
      this.travelBookingItem.mh_offer_price =
        this.mh_travel_data[0].mh_offer_price;
      this.travelBookingItem.gst_percentage =
        this.mh_travel_data[0].gst_percentage;
      this.travelBookingItem.gst_on_base_price =
        this.mh_travel_data[0].gst_on_base_price;
      this.travelBookingItem.cgst_percentage =
        this.mh_travel_data[0].cgst_percentage;
      this.travelBookingItem.cgst_amount = this.mh_travel_data[0].cgst_amount;
      this.travelBookingItem.sgst_percentage =
        this.mh_travel_data[0].sgst_percentage;
      this.travelBookingItem.sgst_amount = this.mh_travel_data[0].sgst_amount;
      this.travelBookingItem.payable_amount =
        this.mh_travel_data[0].payable_amount;
      this.travelBookingItem.booking_status =
        this.mh_travel_data[0].booking_status;
    },
    accocancelequipment(item) {
      this.loadMedicalDetails(item);
      this.medicalBookingItem.booking_order_id =
        this.mh_equipment_data[0].booking_order_id;
      this.medicalBookingItem.medical_booking_orderid =
        this.mh_equipment_data[0].medical_booking_orderid;
      this.medicalBookingItem.eqp_booking_type =
        this.mh_equipment_data[0].eqp_booking_type;
      this.medicalBookingItem.mobile_number =
        this.mh_equipment_data[0].mobile_number;
      this.medicalBookingItem.eqp_booking_date =
        this.mh_equipment_data[0].eqp_booking_date;
      this.medicalBookingItem.medical_item_count =
        this.mh_equipment_data[0].equipment_items;
      this.medicalBookingItem.medical_charges =
        this.mh_equipment_data[0].medical_charges;
      this.medicalBookingItem.discount = this.mh_equipment_data[0].discount;
      this.medicalBookingItem.discount_price =
        this.mh_equipment_data[0].discount_price;
      this.medicalBookingItem.mh_offer_coupon =
        this.mh_equipment_data[0].mh_offer_coupon;
      this.medicalBookingItem.mh_offer_price =
        this.mh_equipment_data[0].mh_offer_price;
      this.medicalBookingItem.gst_percentage =
        this.mh_equipment_data[0].gst_percentage;
      // this.medicalBookingItem.gst_on_base_price =this.mh_equipment_data[0].gst_on_base_price;
      this.medicalBookingItem.cgst_percentage =
        this.mh_equipment_data[0].cgst_percentage;
      this.medicalBookingItem.cgst_amount =
        this.mh_equipment_data[0].cgst_amount;
      this.medicalBookingItem.sgst_percentage =
        this.mh_equipment_data[0].sgst_percentage;
      this.medicalBookingItem.sgst_amount =
        this.mh_equipment_data[0].sgst_amount;
      this.medicalBookingItem.final_price_amount =
        this.mh_equipment_data[0].final_price_amount;
      this.medicalBookingItem.equipment_items =
        this.mh_equipment_data[0].equipment_items;
      this.medicalBookingItem.equipment_partner_name =
        this.mh_equipment_data[0].equipment_name;
      this.medicalBookingItem.equipment_partner_sub_name =
        this.mh_equipment_data[0].equipment_sub_name;
      this.medicalBookingItem.booking_status =
        this.mh_equipment_data[0].booking_status;
    },
    resetFiles() {
      this.mh_booking_id = "";
      // this.$store.state.booking.mh_acc_booked_data = [];
    },
    redirectToCancelPage() {
      this.$router.push("/cancelConfirmedPage");
    },
    redirectToTravelCancelPage() {
      this.$router.push("/cancelTravelConfirmedPage");
    },

    addFood() {
      this.$router.push("/bookingFood");
    },
    addTravel() {
      this.$router.push("/bookingTravel");
    },
    addMedical() {
      this.$router.push("/bookingEquipment");
    },
    openagentRegDialog() {
      this.bar2 = false;
      this.becomeAgentDialog = true;
    },
    onAgentSignUpSubmit() {
      this.$refs.agentForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.agentRegistration(this.agentForm);
              this.$refs.agentForm.reset();
              this.becomeAgentDialog = false;
            })
            .onCancel(() => {
              this.becomeAgentDialog = true;
            });
        }
      });
    },
    openPartnerRegDialog() {
      this.checkPartnerDialog = false;
      this.handleScroll();
    },

    accommodationbookingpage() {
      this.handleScrollForAcc();
      this.showBookings = !this.showBookings;
    },

    closePartnerWithus() {
      this.checkPartnerDialog = false;
    },
    openPartnerLoginDialog() {
      this.checkPartnerDialog = false;
      this.bar2 = true;
    },
    openPartnerCheckDialog() {
      this.checkPartnerDialog = true;
    },
    cancellationDialogOpen() {
      this.cancellationMassageDialog = true;
    },
    closecancellationDialogOpen() {
      this.cancellationMassageDialog = false;
    },
    goToUrl(url) {
      window.open(url);
    },
    openCallUsPopUp() {
      this.callUsPopUp = !this.callUsPopUp;
    },
    CloseCallUsPopUp() {
      this.callUsPopUp = false;
    },
  },
};
</script>
<style scoped>
.MobileMenu {
  position: absolute;
  right: 10px;
  background-color: white;
  border: 2px solid black;
  margin-top: 10px;
  border-radius: 5px;
}
.containerMobile ul li {
  list-style: none;
  font-size: 18px;
  text-align: left;
  margin-left: -24px;
  margin-right: 12px;
  font-weight: 600;
  padding: 0px 0px 2px 0px;
}
.containerMobile ul {
  margin-top: 4px;
  margin-bottom: 4px;
}
.dividerLine {
  background-color: black;
  margin-left: -41px !important;
  margin-right: -1px !important;
}
@media only screen and (min-width: 961px) {
  .mh-logo img {
    height: 46px !important;
    width: auto !important;
    background-size: contain !important;
    margin-top: 20px;
  }
}
.hamburger-menu {
  width: 200px; /* Adjust as needed */
}
</style>
