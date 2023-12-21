<template>
  <div>
    <!-- style="margin-top: -28% ;width:100%;z-index:2;" -->
    <!-- Mobile View Code -->

    <div class="q-pa-xs lt-sm" id="bookingformMobile">
      <div>
        <q-card
          class="rounded-borders"
          bordered
          style="
            width: 115%;
            margin-left: -26px;
            margin-top: -20px;
            background-color: #22427d;
            padding: 10px;
          "
        >
          <!-- <div
            class="text-white bg-primary text-center text-subtitle1 text-bold"

          >
            Book Now!
          </div> -->
          <div class="row q-pa-sm q-gutter-xs">
            <div
              class="titleBookingForm text-center"
              style="width: 100% !important; margin-left: 0px !important"
            >
              <p style="font-size: 20px !important; padding: 0px !important">
                Book your <span class="hyltwd">patient-friendly</span>
                <br />hotel near the hospital
              </p>
            </div>
            <q-select
              v-model="defaultItem.city"
              input-debounce="0"
              :options="cities"
              return-object
              style="z-index: 1"
              :label="
                this.$store.state.account.language == 'English'
                  ? 'City'
                  : 'City'
              "
              option-value="city_id"
              option-label="city_name"
              @input="
                loadAllHospitals(defaultItem.city);
                emptyHospitals();
                selectCities(defaultItem.city);
              "
              options-selected-class="text-secondary"
              options-dense
              label-color="black"
              class="col-12 InputsMobileDisplay"
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
              v-model="defaultItem.hospital"
              input-debounce="0"
              :options="hospital"
              style="z-index: 1"
              :label="
                this.$store.state.account.language == 'English'
                  ? 'Near Hospital'
                  : 'Near Hospital'
              "
              option-value="near_hospital_id"
              option-label="near_hospital_name"
              options-dense
              label-color="black"
              class="col-12 InputsMobileDisplay"
              @input="selectHospitals(defaultItem.hospital)"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <div class="flex flex-center">
              <q-input
                v-model="defaultItem.dateModel.from"
                dense
                style="
                  z-index: 1;
                  width: 50%;
                  margin-right: 2px;
                  margin-left: -4px;
                "
                :label="
                  this.$store.state.account.language == 'English'
                    ? 'Check-In'
                    : 'Check-In'
                "
                label-color="black"
                class="col-12 InputsMobileDisplay"
                @click="$refs.qDateProxy.show()"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="defaultItem.dateModel.from"
                        minimal
                        style="z-index: 1"
                        @input="closeDialog"
                        mask="YYYY/MM/DD"
                        :options="optionsFn"
                        @click="fromDateSelected"
                      >
                      <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                v-model="defaultItem.dateModel.to"
                dense
                style="z-index: 1; width: 50%"
                :label="
                  this.$store.state.account.language == 'English'
                    ? 'Check-Out'
                    : 'Check-Out'
                "
                label-color="black"
                class="col-12 InputsMobileDisplay"
                @click="$refs.qDateProxy.show()"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="defaultItem.dateModel.to"
                        minimal
                        style="z-index: 1"
                        @input="closeDialog"
                        mask="YYYY/MM/DD"
                        :options="optionsFn2"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <q-btn
              class="col-12 text-bold InputsMobileDisplay"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              style="z-index: 1"
              dense
              v-show="
                this.$store.state.account.language == 'English' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <q-btn
              class="col-12 text-bold bg-white text-black InputsMobileDisplay"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              style="z-index: 1"
              dense
              color="primary"
              v-show="
                this.$store.state.account.language == 'Hindi' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <q-btn
              class="col-12 text-bold bg-white text-black InputsMobileDisplay"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              dense
              style="z-index: 1"
              color="primary"
              v-show="
                this.$store.state.account.language == 'Assamese' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <q-btn
              class="col-12 text-bold bg-white text-black InputsMobileDisplay"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              style="z-index: 1"
              dense
              color="primary"
              v-show="
                this.$store.state.account.language == 'Bengali' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <q-btn
              class="col-12 text-bold bg-white text-black InputsMobileDisplay"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              style="z-index: 1"
              dense
              color="primary"
              v-show="
                this.$store.state.account.language == 'Oriya' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <div class="col" v-show="show_guest_cards">
              <div class="col q-pa-sm q-gutter-sm">
                <q-list
                  style="max-width: 1024px"
                  class="rounded-borders bg-white"
                >
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Adults</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <!-- <span class="text-weight-bold">John</span> -->
                        <span class="text-black">Age 13 or above</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          size="12px"
                          flat
                          dense
                          style="z-index: 1"
                          round
                          :disable="defaultItem.adult_count <= 0 ? true : false"
                          icon="mdi-minus-circle-outline"
                          @click="--defaultItem.adult_count"
                        />
                        <q-btn
                          class="text-bold"
                          size="12px"
                          flat
                          dense
                          round
                          style="z-index: 1"
                          :label="defaultItem.adult_count"
                          v-model="defaultItem.adult_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          style="z-index: 1"
                          :disable="defaultItem.adult_count >= 8 ? true : false"
                          icon="mdi-plus-circle-outline"
                          @click="defaultItem.adult_count++"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Children</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <!-- <span class="text-weight-bold">John</span> -->
                        <span class="text-black">Age 2 - 12</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          style="z-index: 1"
                          :disable="defaultItem.child_count <= 0 ? true : false"
                          icon="mdi-minus-circle-outline"
                          @click="--defaultItem.child_count"
                        />
                        <q-btn
                          class="text-bold"
                          size="12px"
                          flat
                          dense
                          round
                          style="z-index: 1"
                          :label="defaultItem.child_count"
                          v-model="defaultItem.child_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          style="z-index: 1"
                          :disable="defaultItem.child_count >= 4 ? true : false"
                          icon="mdi-plus-circle-outline"
                          @click="defaultItem.child_count++"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Infants</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <!-- <span class="text-weight-bold">John</span> -->
                        <span class="text-black"> under-2</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          style="z-index: 1"
                          :disable="
                            defaultItem.infant_count <= 0 ? true : false
                          "
                          icon="mdi-minus-circle-outline"
                          @click="--defaultItem.infant_count"
                        />
                        <q-btn
                          class="text-bold"
                          size="12px"
                          flat
                          dense
                          style="z-index: 1"
                          round
                          :label="defaultItem.infant_count"
                          v-model="defaultItem.infant_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          style="z-index: 1"
                          :disable="
                            defaultItem.infant_count >= 4 ? true : false
                          "
                          icon="mdi-plus-circle-outline"
                          @click="defaultItem.infant_count++"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                  <div
                    class="IsFemale flex"
                    style="
                      justify-content: space-around;
                      margin-left: 0px !important;
                      margin-right: 0px !important;
                    "
                  >
                    <div class="text-isfemale q-mt-sm">
                      Are you a female traveller
                    </div>
                    <div class="checkboxIsFemale">
                      <q-checkbox v-model="val" color="primary" />
                    </div>
                  </div>
                </q-list>
              </div>
            </div>

            <q-btn
              dense
              caps
              style="padding: 10px"
              class="bg-green text-white text-bold col-12"
              @click="goToNext"
              label="Search"
            />
          </div>
        </q-card>
      </div>
      <!-- <div
        class="text-weight-bold text-black text-center q-pa-md"
        style="font-family: verdana; font-size: 16px"
      >
        <q-btn
          color="primary"
          icon="mdi-phone"
          @click="openCallUsPopUp"
          aria-label="MH Phone Communication Link"
          ><q-tooltip class="bg-primary text-body2">Call Us</q-tooltip>Call
          Us</q-btn
        >
        <div
          class="contactUsPopUp"
          v-if="callUsPopUp"
          style="z-index: 2; position: absolute; margin-top: 4px"
        >
          <q-img
            @click="CloseCallUsPopUp"
            contain
            src="~assets/Close Button Logo P.png"
            style="
              width: 20px;
              height: 20px;
              margin-left: 96%;
              margin-top: -28px;
            "
          />
          <div class="flex" style="margin-top: -26px">
            <div class="callUsImage">
              <div>
                <q-img
                  contain
                  src="~assets/Call Button P.png"
                  style="width: 80px; height: 80px; margin-left: -10px"
                  class="cursor-pointer"
                />
              </div>
            </div>
            <div class="contentUsImage q-mt-xsm q-mr-sm" style="width: 216px">
              <p>
                <span class="textphNo" style="font-size: 13px"
                  >Call us or give a missed call </span
                ><br /><span class="phoneNumber"
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
        <br />
        <p
          style="font-family: verdana; font-size: 12px; margin-bottom: -40px"
          class="text-center"
        >
          Call Time 8 am to 8 pm
        </p>
      </div> -->
      <!-- <div class="informs q-mt-xl flex flex-center">
              <div class="displayImgs" @click="openRedClif">
                <q-img
                src="~assets/advertisements-home/Diagnostic.webp"
                style="width:300px;height:125px"
                />
              </div>
              <div class="displayImgs">
                <q-img
                src="~assets/advertisements-home/Scanning.webp"
                style="width:300px;height:125px"
                />
              </div>
              <div class="displayImgs">
                <q-img
                src="~assets/advertisements-home/Medical Loans.webp"
                style="width:300px;height:125px"
                />
              </div>
      </div> -->
    </div>

    <!-- Website View Code -->
    <!-- style="float:right;margin-top:-28.25%;margin-right:-1%;width:70%;z-index:2;" -->
    <!-- style="float: right;margin-right: -1%;width: 65%;z-index: 2;margin-top: -36%;" -->

    <div
      class="q-px-lg gt-xs q-mb-sm"
      style="float: right; width: 100%; z-index: 2"
    >
      <div class="titleBookingForm">
        <p>
          Book your <span class="hyltwd">patient-friendly</span> hotel near the
          hospital
        </p>
      </div>
      <div class="bookingform">
        <div class="bookingFormIn" style="width: 80%">
          <div class="col-sm-12 InputsBooking col-md-2 gt-xs cityBookingForm">
            <q-select
              stack-label
              label-slot
              :label="
                this.$store.state.account.language == 'English'
                  ? 'City'
                  : 'City'
              "
              label-color="black"
              :options="cities"
              v-model="defaultItem.city"
              return-object
              options-dense
              lazy-rules
              option-value="city_id"
              option-label="city_name"
              @input="
                loadAllHospitals(defaultItem.city);
                emptyHospitals();
                selectCities(defaultItem.city);
              "
              options-selected-class="text-secondary"
            >
              <template v-slot:label>
                <span class="text-weight-bold text-h6" v-show="true">City</span>
                <span class="text-weight-bold text-h6" v-show="false">शहर</span>
              </template>
            </q-select>
          </div>
          <div
            class="col-md-5 gt-xs InputsBooking"
            style="
              margin-left: 10px !important;
              width: 400px;
              border-right: 2px solid rgb(40, 53, 147);
              margin-top: 0px;
              margin-bottom: 0px;
            "
          >
            <q-select
              stack-label
              label-slot
              :label="
                this.$store.state.account.language == 'English'
                  ? 'Near Hospital'
                  : 'Near Hospital'
              "
              label-color="black"
              :options="hospital"
              v-model="defaultItem.hospital"
              option-value="near_hospital_id"
              option-label="near_hospital_name"
              options-dense
              lazy-rules
              style="height: 58px"
              @input="selectHospitals(defaultItem.hospital)"
            >
              <template v-slot:label>
                <span class="text-weight-bold text-h6" v-show="true"
                  >Near Hospital</span
                >

                <span class="text-weight-bold text-h6" v-show="false"
                  >अस्पताल के पास</span
                >
              </template>
            </q-select>
          </div>
          <div
            class="cursor-pointer InputsBooking"
            style="
              width: 140px;
              margin-left: 10px !important;
              border-right: 2px solid rgb(40, 53, 147);
              margin-top: 0px;
              margin-bottom: 0px;
            "
          >
            <div class="flex" style="margin-left: 4px; margin-top: 3px">
              <div class="left-container">
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'English'
                      ? true
                      : false
                  "
                  >Check-In
                </span>
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'Hindi' ? true : false
                  "
                  >Check-In
                </span>
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'Assamese'
                      ? true
                      : false
                  "
                  >Check-In
                </span>
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'Bengali'
                      ? true
                      : false
                  "
                  >Check-In
                </span>
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'Oriya' ? true : false
                  "
                  >Check-In
                </span>
                <br />
                <span>{{ defaultItem.dateModel.from }}</span>
              </div>
              <div class="right-container q-ml-sm calender">
                <q-avatar square class="calandarBForm">
                  <img
                    src="~assets/calendar.png"
                    style="width: 25px; height: 25px"
                  />
                </q-avatar>
              </div>
            </div>

            <q-popup-edit v-model="popup2" :cover="false" :offset="[0, 10]">
              <div class="text-bold text-overwrite">Check-In</div>
              <q-date
                subtitle="Check-In"
                flat
                minimal
                v-model="defaultItem.dateModel.from"
                :options="optionsFn"
                @click="fromDateSelected"
              >
                <div class="row items-center justify-end">
                  <q-btn
                    v-close-popup
                    label="Ok"
                    dense
                    outlined
                    color="primary"
                    flat
                    @click="fromDateSelected"
                  />
                </div>
              </q-date>
            </q-popup-edit>
          </div>
          <div
            class="cursor-pointer InputsBooking"
            style="
              width: 147px;
              margin-left: 10px !important;
              border-right: 2px solid rgb(40, 53, 147);
              margin-top: 0px;
              margin-bottom: 0px;
            "
          >
            <div class="flex" style="margin-left: 4px; margin-top: 3px">
              <div class="left-container">
                <span
                  class="text-subtitle2 text-weight-bold col"
                  style="margin-top: -3px"
                  v-show="
                    this.$store.state.account.language == 'English'
                      ? true
                      : false
                  "
                  >Check-Out
                </span>
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'Hindi' ? true : false
                  "
                  >Check-Out
                </span>
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'Assamese'
                      ? true
                      : false
                  "
                  >Check-Out
                </span>
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'Bengali'
                      ? true
                      : false
                  "
                  >Check-Out
                </span>
                <span
                  class="text-subtitle2 text-weight-bold col"
                  v-show="
                    this.$store.state.account.language == 'Oriya' ? true : false
                  "
                  >Check-Out
                </span>
                <br />
                <span> {{ defaultItem.dateModel.to }}</span>
              </div>
              <div class="right-container q-ml-sm">
                <q-avatar square class="calandarBForm">
                  <img
                    src="~assets/calendar.png"
                    style="width: 25px; height: 25px"
                  />
                </q-avatar>
              </div>
            </div>
            <q-popup-edit
              v-model="popup2"
              :cover="false"
              :offset="[0, 10]"
              v-slot="scope"
              flat
            >
              <div class="text-bold text-overwrite">Check-Out</div>

              <q-date
                flat
                minimal
                v-model="defaultItem.dateModel.to"
                mask="YYYY/MM/DD"
                :options="optionsFn2"
              >
                <div class="row items-center justify-end">
                  <q-btn
                    v-close-popup
                    label="Ok"
                    dense
                    outlined
                    color="primary"
                    flat
                    @click="scope.set"
                  />
                </div>
              </q-date>
            </q-popup-edit>
          </div>
          <q-btn
            :label="
              this.$store.state.account.language == 'English'
                ? 'Guests'
                : 'Guests'
            "
            no-caps
            v-model="defaultItem.guest"
            label-color="black"
            outlined
            dense
            color="primary"
            style="
              margin-bottom: 5px;
              width: 100px;
              background-color: white !important ;
              margin-right: 12px !important;
            "
            class="text-weight-bold InputsBooking text-black"
          >
            <span
              class="text-caption text-bold text-black"
              v-show="
                this.$store.state.account.language == 'English' ? true : false
              "
              >Adults: {{ totalguests }}
            </span>
            <span
              class="text-caption text-bold"
              v-show="
                this.$store.state.account.language == 'Hindi' ? true : false
              "
              >Adults: {{ totalguests }}
            </span>
            <span
              class="text-caption text-bold"
              v-show="
                this.$store.state.account.language == 'Assamese' ? true : false
              "
              >Adults: {{ totalguests }}
            </span>
            <span
              class="text-caption text-bold"
              v-show="
                this.$store.state.account.language == 'Bengali' ? true : false
              "
              >Adults: {{ totalguests }}
            </span>
            <span
              class="text-caption text-bold"
              v-show="
                this.$store.state.account.language == 'Oriya' ? true : false
              "
              >Adults: {{ totalguests }}
            </span>
            <!-- <span class="text-caption">Adults: {{ totalguests }}</span> -->
            <q-popup-proxy>
              <q-banner>
                <q-list
                  style="max-width: 250px"
                  class="rounded-borders bg-white"
                >
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Adults</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <!-- <span class="text-weight-bold">John</span> -->
                        <span class="text-black">Age 13 or above</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          class="gt-xs"
                          size="12px"
                          flat
                          dense
                          round
                          :disable="defaultItem.adult_count <= 0 ? true : false"
                          icon="mdi-minus-circle-outline"
                          @click="
                            --defaultItem.adult_count;
                            adultCount();
                          "
                        />
                        <q-btn
                          class="gt-xs text-bold"
                          size="16px"
                          flat
                          dense
                          round
                          :label="defaultItem.adult_count"
                          v-model="defaultItem.adult_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="defaultItem.adult_count >= 8 ? true : false"
                          icon="mdi-plus-circle-outline"
                          @click="
                            defaultItem.adult_count++;
                            adultCount();
                          "
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Children</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <!-- <span class="text-weight-bold">John</span> -->
                        <span class="text-black">Age 2 - 12</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          class="gt-xs"
                          size="12px"
                          flat
                          dense
                          round
                          :disable="defaultItem.child_count <= 0 ? true : false"
                          icon="mdi-minus-circle-outline"
                          @click="
                            --defaultItem.child_count;
                            childCount();
                          "
                        />
                        <q-btn
                          class="gt-xs text-bold"
                          size="16px"
                          flat
                          dense
                          round
                          :label="defaultItem.child_count"
                          v-model="defaultItem.child_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="defaultItem.child_count >= 4 ? true : false"
                          icon="mdi-plus-circle-outline"
                          @click="
                            defaultItem.child_count++;
                            childCount();
                          "
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Infants</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <!-- <span class="text-weight-bold">John</span> -->
                        <span class="text-black"> under-2</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          class="gt-xs"
                          size="12px"
                          flat
                          dense
                          round
                          :disable="
                            defaultItem.infant_count <= 0 ? true : false
                          "
                          icon="mdi-minus-circle-outline"
                          @click="
                            --defaultItem.infant_count;
                            infantCount();
                          "
                        />
                        <q-btn
                          class="gt-xs text-bold"
                          size="16px"
                          flat
                          dense
                          round
                          :label="defaultItem.infant_count"
                          v-model="defaultItem.infant_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="
                            defaultItem.infant_count >= 4 ? true : false
                          "
                          icon="mdi-plus-circle-outline"
                          @click="
                            defaultItem.infant_count++;
                            infantCount();
                          "
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
                <div
                  class="IsFemale flex"
                  style="justify-content: space-around"
                >
                  <div class="text-isfemale q-mt-sm">
                    Are you a female traveller
                  </div>
                  <div class="checkboxIsFemale">
                    <q-checkbox v-model="val" color="primary" />
                  </div>
                </div>
              </q-banner>
            </q-popup-proxy>
          </q-btn>
          <q-btn
            dense
            class="bg-primary text-white text-capitalize searchBtn"
            style="margin-right: 2px; margin-bottom: 5px"
            @click="goToNext"
            >SEARCH</q-btn
          >
          <!-- <q-card class="rounded-borders" flat> -->
          <!-- <div class="row q-pa-sm q-gutter-xs" style="border:2px solid #283593;padding: 0px;margin-left:0px;"> -->
          <!-- <div class="col-sm-12 col-md-2 gt-xs" style="margin-left: 10px !important;border-right: 2px solid rgb(40, 53, 147);margin-top: 0px;margin-bottom: 0px;">
              <q-select
                stack-label
                label-slot
                :label="
                  this.$store.state.account.language == 'English'
                    ? 'City'
                    : 'City'
                "
                label-color="black"
                :options="cities"
                v-model="defaultItem.city"
                return-object
                options-dense
                lazy-rules
                option-value="city_id"
                option-label="city_name"
                @input="
                  loadAllHospitals(defaultItem.city);
                  emptyHospitals();
                  selectCities(defaultItem.city);
                "
                options-selected-class="text-secondary"
              >
                <template v-slot:label>
                  <span class="text-weight-bold text-h6" v-show="true"
                    >City</span
                  >
                  <span class="text-weight-bold text-h6" v-show="false"
                    >शहर</span
                  >
                </template>
              </q-select>
            </div> -->
          <!-- <div class="col-md-5 gt-xs" style="margin-left: 10px !important;border-right: 2px solid rgb(40, 53, 147);margin-top: 0px;margin-bottom: 0px;">
              <q-select
                stack-label
                label-slot
                :label="
                  this.$store.state.account.language == 'English'
                    ? 'Near Hospital'
                    : 'Near Hospital'
                "
                label-color="black"
                :options="hospital"
                v-model="defaultItem.hospital"
                option-value="near_hospital_id"
                option-label="near_hospital_name"
                options-dense
                lazy-rules
                @input="selectHospitals(defaultItem.hospital)"
              >
                <template v-slot:label>
                  <span class="text-weight-bold text-h6" v-show="true"
                    >Near Hospital</span
                  >
                  <span class="text-weight-bold text-h6" v-show="false"
                    >अस्पताल के पास</span
                  >
                </template>
              </q-select>
            </div> -->
          <!-- <div class="col gt-xs cursor-pointer"  style="margin-left: 10px !important;border-right: 2px solid rgb(40, 53, 147);margin-top: 0px;margin-bottom: 0px;">
              <span
                class="text-subtitle2 text-weight-bold col"
                v-show="
                  this.$store.state.account.language == 'English' ? true : false
                "
                >Check-In
              </span>
              <span
                class="text-subtitle2 text-weight-bold col"
                v-show="
                  this.$store.state.account.language == 'Hindi' ? true : false
                "
                >Check-In
              </span>
              <span
                class="text-subtitle2 text-weight-bold col"
                v-show="
                  this.$store.state.account.language == 'Assamese'
                    ? true
                    : false
                "
                >Check-In
              </span>
              <span
                class="text-subtitle2 text-weight-bold col"
                v-show="
                  this.$store.state.account.language == 'Bengali' ? true : false
                "
                >Check-In
              </span>
              <br />
              <span>{{ defaultItem.dateModel.from }}</span>

              <q-popup-edit v-model="popup2" :cover="false" :offset="[0, 10]">
                <div class="text-bold text-overwrite">Check-In</div>
                <q-date
                  subtitle="Check-In"
                  flat
                  minimal
                  v-model="defaultItem.dateModel.from"
                  :options="optionsFn"
                  @click="fromDateSelected"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Ok"
                      dense
                      outlined
                      color="primary"
                      flat
                      @click="fromDateSelected"
                    />
                  </div>
                </q-date>
              </q-popup-edit>
            </div> -->
          <!-- <div class="col gt-xs cursor-pointer"  style="margin-left: 10px !important;border-right: 2px solid rgb(40, 53, 147);margin-top: 0px;margin-bottom: 0px;">
              <span
                class="text-subtitle2 text-weight-bold col"
                v-show="
                  this.$store.state.account.language == 'English' ? true : false
                "
                >Check-Out
              </span>
              <span
                class="text-subtitle2 text-weight-bold col"
                v-show="
                  this.$store.state.account.language == 'Hindi' ? true : false
                "
                >Check-Out
              </span>
              <span
                class="text-subtitle2 text-weight-bold col"
                v-show="
                  this.$store.state.account.language == 'Assamese'
                    ? true
                    : false
                "
                >Check-Out
              </span>
              <span
                class="text-subtitle2 text-weight-bold col"
                v-show="
                  this.$store.state.account.language == 'Bengali' ? true : false
                "
                >Check-Out
              </span>
              <br />
              <span> {{ defaultItem.dateModel.to }}</span>

              <q-popup-edit
                v-model="popup2"
                :cover="false"
                :offset="[0, 10]"
                v-slot="scope"
                flat
              >
                <div class="text-bold text-overwrite">Check-Out</div>

                <q-date
                  flat
                  minimal
                  v-model="defaultItem.dateModel.to"
                  mask="YYYY/MM/DD"
                  :options="optionsFn2"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Ok"
                      dense
                      outlined
                      color="primary"
                      flat
                      @click="scope.set"
                    />
          </div>
                </q-date>
              </q-popup-edit>
            </div> -->
        </div>
        <!-- </q-card> -->
      </div>
    </div>
    <!-- <q-img
          src="~assets/Below search engine.webp"
          style="width:300px;height:40px;margin-top:-4px;border-radius:5px;"
          class="rounded"
    /> -->
  </div>
  <!-- </div> -->
</template>
<script>
import { mapState, mapActions } from "vuex";
import { date } from "quasar";

// import { CoolSelect } from "vue-cool-select";
let date3 = new Date();
let date4 = date3.setDate(date3.getDate() + 1);
let selectedDate1 = "";
// let city_array = this.$store.state.store.dropdown.city_arr;

export default {
  name: "booking-form-comp",
  // components: { CoolSelect },

  data() {
    return {
      // options: stringOptions,
      //eng: this.$store.state.account.language == "English" ? true : false,
      //hindi: this.$store.state.account.language == "Hindi" ? true : false,
      loadingState: false,
      val: false,
      callUsPopUp: false,
      arthilabsviewpage: false,
      popup1: "popup1",
      popup2: "popup2",
      popup3: "popup3",
      date1: date.formatDate(new Date(), "YYYY/MM/DD"),
      date2: date.formatDate(date4, "YYYY/MM/DD"),
      // options: this.$store.state.dropdown.city_arr,

      // title:"MangoHomz",
      dateModel: {
        from: date.formatDate(new Date(), "YYYY/MM/DD"),
        to: date.formatDate(date4, "YYYY/MM/DD"),
      },
      show_guest_cards: false,

      // city_options: city_array,
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },

      defaultItem: {
        city: "",
        hospital: "",
        dateModel: {
          from: date.formatDate(new Date(), "YYYY/MM/DD"),
          to: date.formatDate(date4, "YYYY/MM/DD"),
        },
        guest: "",
        adult_count: 2,
        child_count: 0,
        infant_count: 0,
      },
    };
  },
  //   meta(){
  // return{
  //   title:this.title
  // }
  //   },

  computed: {
    ...mapState({
      cities: (state) => state.dropdown.city_arr,
      // city_options: state => state.dropdown.city_arr,
      hospital: (state) => state.dropdown.hospital_arr,
    }),
    totalguests() {
      // this.defaultItem.guest = this.defaultItem.adult_count + this.defaultItem.child_count;
      return this.defaultItem.adult_count + this.defaultItem.child_count;
    },
    optionsFn2(d) {
      let fromDate = date.formatDate(
        this.defaultItem.dateModel.from,
        "YYYY/MM/DD"
      );
      return (d) => d >= fromDate;
    },
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllCities");
  },
  methods: {
    ...mapActions("dropdown", ["loadAllHospitals"]),
    ...mapActions("booking", ["setSearchDetailsObj"]),
    openRedClif() {
      window.open(
        "https://iframepartner.redcliffelabs.com/?pid=3p_5vVMtSYLzvr9oTNLs4&code=MH20"
      );
    },
    openArthilabsDialog() {
      this.arthilabsviewpage = true;
    },
    goToNext() {
      if (this.defaultItem.city && this.defaultItem.hospital) {
        this.defaultItem.guest =
          this.defaultItem.adult_count + this.defaultItem.child_count;
        if (this.defaultItem.dateModel.from === this.defaultItem.dateModel.to) {
          this.$q.notify({
            message: "Please select a different date range.",
            icon: "announcement",
            position: "top",
            color: "purple",
            actions: [
              {
                label: "Dismiss",
                color: "yellow",
                handler: () => {
                  /* ... */
                },
              },
            ],
          });
        } else {
          if (this.defaultItem.guest > 0) {
            this.setSearchDetailsObj(this.defaultItem);
            // console.log("this.defaultItem",this.defaultItem)

            let currentDate = date.formatDate(new Date(), "YYYY/MM/DD");
            let nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + 1);

            let checkInDate = this.defaultItem.dateModel.from;
            let checkOutDate = this.defaultItem.dateModel.to;
            if (checkInDate <= currentDate) {
              checkInDate = currentDate;
            }
            if (checkOutDate <= currentDate) {
              let nextDay = new Date(currentDate);
              nextDay.setDate(nextDay.getDate() + 1);
              checkOutDate = date.formatDate(nextDay, "YYYY/MM/DD");
            }

            this.searchparams = {
              city: this.defaultItem.city,
              hospital: {
                near_hospital_name:
                  this.defaultItem.hospital.near_hospital_name,
                latitude: this.defaultItem.hospital.latitude,
                longitude: this.defaultItem.hospital.longitude,
map_link:this.defaultItem.hospital.map_link,
            youtube_link:this.defaultItem.hospital.youtube_link
              },

              //  hospital: this.defaultItem.hospital,
              guest: this.defaultItem.guest,
              adult_count: this.defaultItem.adult_count,
              child_count: this.defaultItem.child_count,
              dateModel: {
                from: checkInDate,
                to: checkOutDate,
              },
            };

            this.$router.push({
              name: "Serach Hotel List",
              params: { searchInfo: JSON.stringify(this.searchparams) },
            });
            // this.$router.push("/bookingProcess");
          } else {
            this.$q.notify({
              message: "Please add guests",
              icon: "announcement",
              position: "top",
              color: "purple",
              actions: [
                {
                  label: "Dismiss",
                  color: "yellow",
                  handler: () => {
                    /* ... */
                  },
                },
              ],
            });
          }
        }
      } else {
        this.$q.notify({
          message: "Please Fill all Details.",
          icon: "announcement",
          position: "top",
          color: "purple",
          actions: [
            {
              label: "Dismiss",
              color: "yellow",

              handler: () => {
                /* ... */
              },
            },
          ],
        });
      }
    },

    selectHospitals(item) {
      this.$store.state.account.hospital = item.near_hospital_name;
    },

    selectCities(item) {
      this.$store.state.account.city = item.city_name;
    },

    // goToNext() {
    //   if (this.defaultItem.city && this.defaultItem.hospital) {
    //     this.defaultItem.guest =
    //       this.defaultItem.adult_count + this.defaultItem.child_count;
    //     if (this.defaultItem.guest > 0) {
    //       this.setSearchDetailsObj(this.defaultItem);
    //       this.$router.push("/bookingProcess");
    //     } else {
    //       this.$q.notify({
    //         message: "Please add guests",
    //         icon: "announcement",
    //         position: "top",
    //         color: "purple",
    //         actions: [
    //           {
    //             label: "Dismiss",
    //             color: "yellow",

    //             handler: () => {
    //               /* ... */
    //             }
    //           }
    //         ]
    //       });
    //     }
    //   } else {
    //     this.$q.notify({
    //       message: "Please Fill all Details.",
    //       icon: "announcement",
    //       position: "top",
    //       color: "purple",
    //       actions: [
    //         {
    //           label: "Dismiss",
    //           color: "yellow",

    //           handler: () => {
    //             /* ... */
    //           }
    //         }
    //       ]
    //     });
    //   }
    // },
    emptyHospitals() {
      this.defaultItem.hospital = "";
    },
    // filterFn(val, update, abort) {
    //   setTimeout(() => {
    //     update(() => {
    //       const needle = val.toLowerCase();
    //       this.options = stringOptions.filter(
    //         v => v.hospital_name.toLowerCase().indexOf(needle) > -1
    //       );
    //       console.log(JSON.stringify(this.options));
    //     });
    //   }, 1500);
    // },
    fromDateSelected() {
      // console.log("sasa",this.defaultItem.dateModel.from);
      this.defaultItem.dateModel.to = this.defaultItem.dateModel.from;
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    adultCount() {
      this.$store.state.account.adult_count = this.defaultItem.adult_count;
      // console.log("Adult :",this.$store.state.account.adult_count);
    },
    childCount() {
      this.$store.state.account.child_count = this.defaultItem.child_count;
      //  console.log("Child :",this.$store.state.account.child_count);
    },
    infantCount() {
      this.$store.state.account.infant_count = this.defaultItem.infant_count;
      //  console.log("Infant :",this.$store.state.account.infant_count);
    },

    setDate2() {
      // this.date2 = "";
      // console.log(`option:${JSON.stringify(this.options)}`);
      // selectedDate1 = this.date1;
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
<style>
@import url("https://fonts.googleapis.com/css2?family=Alkatra&display=swap");
.container {
  position: absolute;
}
.text-block {
  position: absolute;
  bottom: 8px;
  right: 16px;
  position: absolute;

  background-color: black;
  color: white;
}

.bookingform {
  display: flex;
  justify-content: center;
}
.bookingFormIn {
  background-color: #22427d;
  margin-bottom: -2%;
  z-index: 2;
  display: flex;
  border-bottom-left-radius: 5px;
  padding: 0px;
  border-bottom-right-radius: 5px;
  padding-bottom: 12px;
}
.InputsBooking {
  background-color: white;
  padding: 5px;
  margin: 10px !important;
  border-radius: 5px;
  margin-right: 0px !important;
  height: 60px;
}
.titleBookingForm {
  display: flex;
  justify-content: center;
  background: #22427d;
  width: 80%;
  margin-left: 10%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.titleBookingForm p {
  color: white;
  margin-bottom: 0px;
  font-family: "MHBookingFormFont";
  font-size: 32px;
  padding: 10px;
}
.searchBtn {
  background-color: #64a22d !important;
  color: white !important;
  font-weight: bold !important;
  width: 100px;
  height: 58px;
  margin-top: 10px;
}
.InputsMobileDisplay {
  background-color: white;
  margin: 5px 0px 5px 0px;
  height: 60px !important;
  padding: 4px;
  border-radius: 5px;
  z-index: auto !important;
}
.IsFemale {
  background-color: white;
  justify-content: space-around;
  margin-left: -17px;
  margin-right: -16px;
  margin-bottom: -8px;
  font-weight: 800;
  color: black;
}
.cityBookingForm {
  margin-left: 39px !important;
  width: 150px;
  border-right: 2px solid rgb(40, 45, 147);
  margin-top: 0px;
  margin-bottom: 0px;
}
@media screen and (min-width: 1920px) {
  .bookingformIn {
    padding: 0%;
  }
  .cityBookingForm {
    margin-left: 200px !important;
  }
}
@media (max-width: 1440px) {
  .bookingFormIn {
    width: 85% !important;
  }
  /* .calandarBForm img {
    width:18px !important;
    height:18px !important;
  } */
  .titleBookingForm {
    display: flex;
    justify-content: center;
    background: #22427d;
    width: 85%;
    margin-left: 7.5% !important;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .ImageAdjest {
    width: 680px !important;
    height: 100px !important;
    margin-bottom: -10px;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .bookingFormIn {
    width: 96.9% !important;
  }
  .titleBookingForm {
    margin-left: 1.6% !important;
    width: 96.8%;
  }
}
.hyltwd {
  font-family: "Alkatra", cursive;
  color: rgb(199, 247, 131);
}
</style>
