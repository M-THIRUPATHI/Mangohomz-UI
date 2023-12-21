<template>
  <div>
    <div>
      <!-- <div class="row items-center scrollBarUpDesktop" style="
    margin-left: -16px;
    margin-right: -16px;">
      <q-btn
        dense
        flat
        round
        icon="arrow_back"
        class="cursor-pointer"
        @click="scrollRight"
        style="color:black"
      />
      <div class="overflow-hidden sliderComponent" style="width: 94%;height: 80px;">
        <div
          class="row no-wrap display:flex;justify-content:center;"
          ref="imagesContainer"
          style="transition: transform 0.3s; transform: translateX(0);"
        >
          <div class="col-2" style="width: 300px; height: 70px;margin-top:6px;">
            <img src="~assets/PFS.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2"  style="width: 300px; height: 70px;margin-top:6px;margin-left:-10px">
            <img src="~assets/DIA.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2"  style="width: 300px; height: 70px;margin-top:6px;margin-left:-10px">
            <img src="~assets/TF.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2"  style="width: 300px; height: 70px;margin-top:6px;margin-left:-10px">
            <img src="~assets/HF.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2"  style="width: 300px; height: 70px;margin-top:6px;margin-left:-10px">
            <img src="~assets/ML.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2" style="width: 300px; height: 70px;margin-top:6px;margin-left:-10px">
            <img src="~assets/ME.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
        </div>
      </div>
      <q-btn
        dense
        flat
        round
        icon="arrow_forward"
        class="cursor-pointer"
        @click="scrollLeft"
        style="color:black"
      />
    </div> -->
      <!-- <div class="row items-center q-mb-sm scrollBarUpMobile flex-center">
      <q-btn
        dense
        flat
        round
        icon="arrow_back"
        class="cursor-pointer"
        @click="scrollLeftMobile"
      />
      <div class="overflow-hidden" style="width: 260px; height: 70px;">
        <div
          class="row no-wrap"
          ref="imagesContainerMobile"
          :style="`transition: transform 0.3s; transform: translateX(${translateX}px);`"
        >
          <div class="col-2"  :style="{
    width: '300px',
    height: '70px',
    marginTop: '6px',
    display: currentIndex !== 0 ? 'none' : 'block'
  }">
            <img v-if="currentIndex === 0" src="~assets/PFS.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2" :style="{
    width: '300px',
    height: '70px',
    marginTop: '6px',
    display: currentIndex !== 1 ? 'none' : 'block'
  }">
            <img v-if="currentIndex === 1" src="~assets/DIA.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2" :style="{
    width: '300px',
    height: '70px',
    marginTop: '6px',
    display: currentIndex !== 2 ? 'none' : 'block'
  }">
            <img v-if="currentIndex === 2" src="~assets/TF.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div :style="{
    width: '300px',
    height: '70px',
    marginTop: '6px',
    display: currentIndex !== 3 ? 'none' : 'block'
  }">
            <img v-if="currentIndex === 3" src="~assets/HF.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2" :style="{
    width: '300px',
    height: '70px',
    marginTop: '6px',
    display: currentIndex !== 4 ? 'none' : 'block'
  }">
            <img v-if="currentIndex === 4" src="~assets/ML.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
          <div class="col-2" :style="{
    width: '300px',
    height: '70px',
    marginTop: '6px',
    display: currentIndex !== 5? 'none' : 'block'
  }">
            <img v-if="currentIndex === 5" src="~assets/ME.webp" alt="Image" style="width: 100%; height: 100%;" />
          </div>
        </div>
      </div>
      <q-btn
        dense
        flat
        round
        icon="arrow_forward"
        class="cursor-pointer"
        @click="scrollRightMobile"
      />
    </div> -->
    </div>

    <div class="row justify-center">
      <booking-form-comp class="col-sm-12 gt-xs" />

      <div class="col-12 gt-xs">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          arrows
          control-color="orange"

          infinite
          :autoplay="autoplay"
        >
          <q-carousel-slide
            :name="1"
            class="mh-home-page-top-image uncropped-image"
          />
          <q-carousel-slide
            :name="2"
            class="mh-home-page-top-image2 uncropped-image"
          />

          <q-carousel-slide
            :name="3"
            class="mh-home-page-top-image3 uncropped-image"
          />
          <!-- <q-carousel-slide
            :name="4"
            class="mh-home-page-top-image4 uncropped-image"
          /> -->
        </q-carousel>
      </div>
      <div class="flex flex-center coupleCardsHome">
        <div class="displayImgs">
          <q-img
            contain
            @click="openGenieHome"
            src="~assets/Care Genie.webp"
            class="extServ cursor-pointer ImageAdjest"
            style="width: 720px; height: 100px"
          />
        </div>
        <div class="displayImgs">
          <q-img
            contain
            @click="openPartnerCheckDialog"
            src="~assets/Partner with MH.webp"
            class="extServ cursor-pointer ImageAdjest"
            style="width: 720px; height: 100px; margin-left: 0px"
          />
        </div>
      </div>
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
      <div class="informsLap flex space-between">
        <div class="displayImgs cursor-pointer">
          <q-img
            @click="handleCustomEvent(`${redcliffpath}`)"
            src="~assets/advertisements-home/Diagnostic.webp"
            style="width: 500px; height: 200px"
            class="InformsLapRes"
            contain
          />
        </div>
        <div class="displayImgs cursor-pointer">
          <q-img
            @click="openArthilabsDialog"
            src="~assets/advertisements-home/Scanning.webp"
            style="width: 500px; height: 200px"
            class="InformsLapRes"
            contain
          />
        </div>
        <div class="displayImgs cursor-pointer">
          <q-img
            @click="medicalloanDialog = true"
            src="~assets/advertisements-home/Medical Loans.webp"
            style="width: 500px; height: 200px"
            class="InformsLapRes"
            contain
          />
        </div>
      </div>
      <br />
      <div class="lt-sm col-12">
        <div>
          <q-carousel
            animated
            v-model="slide"
            control-color="orange"
            arrows

            infinite
            :autoplay="autoplay"
          >
            <q-carousel-slide :name="1" class="mh-mobile-home-page-top-image" />
            <q-carousel-slide
              :name="2"
              class="mh-mobile-home-page-top-image2"
            />
            <q-carousel-slide
              :name="3"
              class="mh-mobile-home-page-top-image3"
            />
            <q-carousel-slide
              :name="4"
              class="mh-mobile-home-page-top-image4"
            />
          </q-carousel>
        </div>

        <div>
          <q-card-section>
            <booking-form-comp class="col-sm-12" style="margin-top: 25px" />
          </q-card-section>
          <!-- <div class="col-12 lt-xs redclif" style="width: 260px; height: 75px">
          <img
            style="
              width: 370px;
              margin-top: 5px;
              cursor: pointer;
              z-index: 5 !important;

            "
            @click="handleCustomEvent(`${redcliffpath}`)"
            src="~assets/web_site/Aston 2 (1).webp"
          />
        </div> -->
          <div class="flex flex-center" style="margin-top: -50px">
            <div class="displayImgs">
              <q-img
                contain
                @click="openGenieHome"
                src="~assets/Care Genie Mob.webp"
                class="extServ cursor-pointer"
                style="
                  width: 380px;
                  height: 100px;
                  padding: 17%;
                  margin-top: 40px;
                "
              />
            </div>
            <div class="displayImgs">
              <q-img
                contain
                @click="openPartnerCheckDialog"
                src="~assets/Partner with MH - Mob.webp"
                class="extServ cursor-pointer"
                style="
                  width: 380px;
                  height: 100px;
                  margin-left: 0px;
                  margin-top: -30px;
                "
              />
            </div>
          </div>
          <div
            class="informs q-mt-xsm flex flex-center"
            style="margin-top: -10px"
          >
            <div class="displayImgs cursor-pointer">
              <q-img
                @click="handleCustomEvent(`${redcliffpath}`)"
                src="~assets/advertisements-home/Diagnostic.webp"
                style="width: 380px; margin-top: 10px; height: 125px"
                class="cursor-pointer"
              />
            </div>
            <div class="displayImgs cursor-pointer">
              <q-img
                @click="openArthilabsDialog"
                src="~assets/advertisements-home/Scanning.webp"
                style="width: 380px; margin-top: 10px; height: 125px"
                class="cursor-pointer"
              />
            </div>
            <div class="displayImgs cursor-pointer">
              <q-img
                @click="openmedicalloanDialog"
                src="~assets/advertisements-home/Medical Loans.webp"
                style="width: 380px; margin-top: 10px; height: 125px"
              />
            </div>
          </div>
          <br />
          <!-- <q-btn
        class="lt-xs text-bold"
        no-caps
        size="16px"
        color="indigo-9"
        style="margin-top: 30px;margin-left: 90px;"
        label="AARTHI SCANS & LABS"
        @click="openArthilabsDialog"
      >
        <q-tooltip>Arthi Labs</q-tooltip>
      </q-btn> -->
          <!-- <q-btn
              class="lt-xs justify-center text-bold"
              no-caps
              style="margin-left:60px;margin-top: 20px;"
              size="16px"
              color="indigo-9"
              icon="mdi-medical-bag"
              label="Looking For Health Support"
              @click="helthsupportOpenInNewTab()"
            >
              <q-tooltip>Looking For Health Support</q-tooltip>
            </q-btn> -->
          <!-- <div
            class="text-white bg-secondary text-center text-subtitle1 text-bold mh-blog"
            style="
              z-index: 5;
              margin-left: 20%;
              margin-right: 20%;
              border-radius: 5px;
            "
            @click="goToUrl(`https://mangohomz.com/mhblog/`)"
          >
            MangoHomz Blog
          </div> -->
        </div>
      </div>

      <!--Medical Loan Dialog Box Start-->
      <q-dialog v-model="medicalloanDialog" no-backdrop-dismiss>
        <q-card>
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0; position: sticky; z-index: 100"
          >
            <q-icon name="mdi-currency-inr" size="md" class="q-mr-sm" />
            <q-toolbar-title style="text-align: center">
              Medical Loan Requisition Form
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closemedicalloanDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>
          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <div
              style="
                font-size: medium;
                text-align-last: center;
                margin-bottom: 36px;
                margin-top: inherit;
              "
              class="text-red col-12 q-mx-xs"
            >
              <b>
                Only Indian Citizens Are Eligible To Apply For A Medical Loan
              </b>
            </div>
            <q-form class="q-gutter-md" ref="medloanFormdata">
              <q-input
                dense
                rounded
                v-model="medicalloandata.patientName"
                hide-bottom-space
                outlined
                label="Patient Name*"
                label-color="black"
                :rules="[required('Patient Name*')]"
              >
              </q-input>
              <q-input
                dense
                rounded
                v-model="medicalloandata.hospitalName"
                outlined
                hide-bottom-space
                label="Hospital Name*"
                label-color="black"
                :rules="[required('Hospital Name*')]"
              >
              </q-input>
              <q-input
                dense
                rounded
                hide-bottom-space
                v-model="medicalloandata.email"
                outlined
                label="Email*"
                label-color="black"
                :rules="[required('Email'), email()]"
              >
              </q-input>
              <q-input
                dense
                rounded
                v-model="medicalloandata.mobileNumber"
                outlined
                hide-bottom-space
                label="Mobile Number*"
                prefix="+91"
                mask="##########"
                label-color="black"
                :rules="[required('Phone no'), validateMobileNumberLoan]"
              >
              </q-input>
              <q-input
                dense
                hide-bottom-space
                rounded
                v-model="medicalloandata.patientLocation"
                outlined
                label="Patient Location*"
                label-color="black"
                :rules="[required('Patient Location*')]"
              >
              </q-input>
              <div
                class="q-mt-md q-gutter-md"
                style="
                  display: flex;
                  inline-size: max-content;
                  margin-top: inherit;
                  align-items: center;
                "
              >
                <span class="q-mt-md" style="flex: 1"
                  >Are you a salaried person?</span
                >
                <div>
                  <q-radio
                    v-model="medicalloandata.salarized"
                    val="yes"
                    label="Yes"
                  ></q-radio>
                  <q-radio
                    v-model="medicalloandata.salarized"
                    val="no"
                    label="No"
                  ></q-radio>
                </div>
              </div>
              <div
                v-if="!medicalloandata.salarized && salarizedError"
                class="text-negative q-mt-sm"
              >
                Please select whether you are a salaried person or not.
              </div>
              <div style="margin-left: 30px; margin-top: 3px">
                <b class="q-mt-md text-bold">Medical Loan is for</b>
                <div>
                  <q-checkbox
                    v-model="medicalloandata.options"
                    val="accommodation"
                    label="Accommodation"
                  ></q-checkbox>
                  <q-checkbox
                    v-model="medicalloandata.options"
                    val="hospitalExpenses"
                    label="Hospital Expenses"
                  ></q-checkbox>
                  <q-checkbox
                    v-model="medicalloandata.options"
                    val="diagnosticExpenses"
                    label="Diagnostic Expenses"
                  ></q-checkbox>
                </div>
              </div>
              <div
                v-if="medicalloandata.options.length === 0 && optionsError"
                class="text-negative q-mt-sm"
              >
                Please select at least one medical loan option.
              </div>
              <q-input
                :rows="3"
                dense
                v-model="medicalloandata.message"
                outlined
                label="Message"
                type="textarea"
                label-color="black"
                :rules="[required('Message*')]"
              >
              </q-input>
              <div
                style="margin-top: inherit"
                class="text-primary col-12 q-mx-xs"
              >
                <p style="width: 100%; font-family: verdana; font-size: 12px">
                  * Mangohomz executive will call you soon.
                </p>
              </div>
              <div style="text-align: -webkit-center">
                <q-btn
                  dark
                  rounded
                  dense
                  color="indigo-9"
                  @click="onMedLoanFormSubmit()"
                  label="Submit"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!--Medical Loan Dialog Box End-->

      <!-- AArthi Scan Lab Start-->
      <q-dialog v-model="arthilabsviewpage" no-backdrop-dismiss>
        <q-card style="width: 600px; height: 550px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0"
          >
            <q-toolbar-title style="text-align: center">
              <template v-slot:prepend>
                <q-icon name="inbox" />
              </template>
              AARTHI SCANS & LABS BOOKING FORM
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closeArthilabsDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>
          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form class="q-gutter-md" ref="arthilabsviewpage">
              <div style="display: flex; align-items: flex-end">
                <q-input
                  dense
                  outlined
                  v-model="arthilabs.test_date"
                  label="Book appoinment date*"
                  label-color="black"
                  clear-icon="close"
                  minimal
                  @click="$refs.qDateProxy.show()"
                  style="width: 260px"
                  :rules="[required('appoinment date')]"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="arthilabs.test_date"
                          minimal
                          mask="DD/MM/YYYY"
                          @input="closeDialog"
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
                  style="width: 270px; margin-left: 10px"
                  outlined
                  label="Book appoinment time*"
                  dense
                  v-model="arthilabs.test_time"
                  @click="$refs.qOpeningTime.show()"
                  :rules="[required('appoinment time')]"
                >
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qOpeningTime"
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time v-model="arthilabs.test_time" mask="hh:mm A">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <q-input
                dense
                outlined
                v-model="arthilabs.first_name"
                autofocus
                @keyup.enter="prompt = false"
                label="Full Name *"
                hide-bottom-space
                label-color="black"
                :rules="[required('full name')]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="indigo-9" />
                </template>
              </q-input>
              <div style="display: flex; align-items: flex-end">
                <q-input
                  style="width: 260px"
                  dense
                  outlined
                  v-model="arthilabs.mobile_no"
                  label-color="black"
                  @keyup.enter="prompt = false"
                  label="Mobile No *"
                  lazy-rules
                  mask="##########"
                  hide-bottom-space
                  :rules="[required('full name')]"
                >
                </q-input>
                <q-input
                  style="width: 270px; margin-left: 10px"
                  dense
                  outlined
                  v-model="arthilabs.email_id"
                  label-color="black"
                  @keyup.enter="prompt = false"
                  hide-bottom-space
                  label="Email-ID *"
                  :rules="[required('email'), email()]"
                  ><template v-slot:prepend>
                    <q-icon name="email" color="indigo-9" />
                  </template>
                </q-input>
              </div>
              <div style="display: flex; align-items: flex-end">
                <q-input
                  v-model="arthilabs.age"
                  type="number"
                  label="Age *"
                  dense
                  outlined
                  :min="1"
                  :max="110"
                  style="width: 170px; height: 40px; border: 1px"
                  :rules="[required('age'),ageRange]"
                ></q-input>
                <q-select
                  dense
                  outlined
                  v-model="arthilabs.gender"
                  input-debounce="0"
                  :options="gendertype"
                  label="Gender*"
                  :rules="[required('gender')]"
                  style="width: 170px; height: 40px; margin-left: 10px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
                <q-input
                  style="width: 170px; height: 40px; margin-left: 10px"
                  dense
                  outlined
                  v-model="arthilabs.alternate_mobile_no"
                  label-color="black"
                  :rules="number"
                  @keyup.enter="prompt = false"
                  label="Alternate Mobile No"
                  lazy-rules
                  mask="##########"
                  hide-bottom-space
                >
                </q-input>
              </div>
              <div style="display: flex; align-items: flex-end">
                <q-select
                  style="width: 260px"
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="cities"
                  :rules="[required('city')]"
                  option-value="city"
                  option-label="city"
                  fill-input
                  options-dense
                  lazy-rules
                  hide-bottom-space
                  input-debounce="0"
                  v-model="arthilabs.city"
                  return-object
                  @input="
                    loadAllArthilabCenters(arthilabs.city);
                    emptyCenters();
                  "
                  label-color="black"
                  label="City *"
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
                  style="width: 270px; margin-left: 10px"
                  dense
                  outlined
                  use-input
                  hide-selected
                  :rules="[required('center name')]"
                  :options="centernames"
                  option-value="center_name"
                  option-label="center_name"
                  fill-input
                  options-dense
                  lazy-rules
                  hide-bottom-space
                  input-debounce="0"
                  v-model="arthilabs.centers"
                  return-object
                  @input="
                    loadAllArthilabtesttype(arthilabs.centers);
                    loadAllArthilabaddress(arthilabs.centers);

                    emptytesttype();
                    emptyaddress();
                  "
                  label-color="black"
                  label="Center Name *"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
              <q-input
                dense
                outlined
                use-input
                hide-selected
                v-if="arthilabs.centers && arthilabs.centers.center_address"
                :rules="[required('center address')]"
                :value="arthilabs.centers.center_address"
                readonly
                label-color="black"
                label="Center Address *"
              >
                <template v-slot:prepend>
                  <q-icon name="location_on" />
                </template>
              </q-input>
              <!-- <q-input
                dense
                outlined
                use-input
                hide-selected
                :options="address"
                option-value="center_address"
                option-label="center_address"
                fill-input
                options-dense
                lazy-rules
                hide-bottom-space
                input-debounce="0"
                v-model="arthilabs.address"
                return-object

                label-color="black"
                label="Center Address *"
              >
              <template v-slot:prepend>
              <q-icon name="location_on" />
             </template>
              </q-input> -->
              <!-- <q-input
              type="text"
              option-value="center_address"
              option-label="center_address"
              v-model="arthilabs.address"

              /> -->

              <q-select
                name="test_type"
                clearable
                dense
                outlined
                use-input
                hide-selected
                :options="testtype"
                :rules="[required('test type')]"
                option-value="test_type"
                option-label="test_type"
                fill-input
                options-dense
                lazy-rules
                hide-bottom-space
                input-debounce="0"
                v-model="arthilabs.testtype"
                return-object
                :value="arthilabs.testtype"
                @input="
                  loadAllArthilabtestname(arthilabs.testtype);

                  emptytestname();
                "
                label-color="black"
                label="Test Type *"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <!-- <q-select
  dense
  outlined
  use-input
  :options="testnameArray"
  option-value="test_name"
  option-label="fulltestname"
  input-debounce="0"
  v-model="arthilabs.testname"
  label-color="black"
  label="Test Name *"
  multiple
  emit-value
  map-options
>
  <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
    <q-item v-bind="itemProps">
      <q-item-section>
        <q-item-label>{{ opt.fulltestname }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-checkbox :model-value="selected" :value="selected" @update:model-value="toggleOption(opt)"/>
      </q-item-section>
    </q-item>
  </template>
  <template v-slot:no-option>
    <q-item>
      <q-item-section class="text-grey">
        No results
      </q-item-section>
    </q-item>
  </template>
</q-select> -->
              <q-form ref="testnameForm">
                <div style="display: flex; align-items: flex-end">
                  <q-select
                    dense
                    outlined
                    use-input
                    :options="testnameArray"
                    option-value="test_name"
                    :rules="[required('test name')]"
                    option-label="fulltestname"
                    input-debounce="0"
                    v-model="arthilabs.testname"
                    label-color="black"
                    label="Test Name *"
                    style="width: 480px; height: 40px; margin-bottom: 10px"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          This test is not avaliable in the center
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>

                  <q-card-actions align="center" class="text-primary">
                    <q-btn
                      @click="addtestnames"
                      class="text-weight-bolder"
                      label="ADD"
                      color="indigo-9"
                      size="md"
                      style="height: 40px"
                    />
                  </q-card-actions>
                </div>
              </q-form>
              <q-table
                style="font-family: verdana"
                dense
                separator="cell"
                wrap-cells
                v-if="showTable"
                :data="testNameArrayData"
                :columns="testnamecolumn"
                :rows-per-page-options="[]"
                row-key="sno"
                no-data-label="No test names added"
              >
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn
                      @click="deleteRow(props.row.index)"
                      color="negative"
                      dense
                      flat
                      round
                      icon="delete"
                      class="q-ml-xs"
                    />
                  </q-td>
                </template>
                <template v-slot:bottom-row>
                  <q-td
                    colspan="3"
                    style="text-align: right; font-weight: bold"
                  >
                    Total
                  </q-td>
                  <q-td colspan="1" style="text-align: center">
                    {{ rate }}
                  </q-td>
                </template>
              </q-table>
              <!-- <q-table
  v-if="showTable"
  :data="testNameArrayData"
  :columns="testnamecolumn"
  row-key="sno"
  no-data-label="No test names added"
>

</q-table> -->
              <!-- <template v-if="addtestnames">
  <table style="  border-collapse: collapse;
">
    <thead>
      <tr>
        <th>Test Type</th>
        <th>Test Name</th>
        <th>Price</th>
        <th >Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ arthilabs.testname.test_type }}</td>
        <td>{{ arthilabs.testname.test_name }}</td>
        <td>{{ arthilabs.testname.price }}</td>
        <td><q-btn @click="deleteRow">
          del
        </q-btn></td>
      </tr>
    </tbody>
  </table>
</template> -->

              <q-card-actions align="center" class="text-primary">
                <!-- <q-btn flat label="Cancel" v-close-popup /> -->
                <q-btn
                  class="text-weight-bolder"
                  @click="onArthilabsSubmit()"
                  label="Book Now"
                  color="indigo-9"
                />
              </q-card-actions>

              <!-- <q-select
              dense
              outlined
              use-input
              hide-selected
              :options="centernames"

              option-value="city_id"
              option-label="city"
              fill-input
              options
              lazy-rules
              hide-bottom-space
              input-debounce="0"
              v-model="arthilabs.centers"

              label-color="black"
              label="Center Names *"
              :rules="[required('City')]"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select> -->
              <!-- <q-input
                      dense
                      rounded
                      v-model="reach_us.patientName"
                      hide-bottom-space
                      outlined
                      label="City*"
                      label-color="black"
                      :rules="[required('City*')]"
                    >
                    </q-input> -->
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!--AArthi Scan Labs End-->
      <!-- <q-btn
          class="gt-xs text-bold"
          no-caps
          size="16px"
          color="indigo-9"
          style="margin-top: 15px;margin-left: 20px;"
          icon="mdi-medical-bag"
          label="Looking For Health Support"
          @click="helthsupportOpenInNewTab()"
        >
          <q-tooltip>Looking For Health Support</q-tooltip>
        </q-btn> -->
    </div>
    <!-- English Code -->
    <!-- Mobile version code -->

    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img style="cursor: pointer" src="~assets/logos/Aston 1.webp"></q-img>
      </a> -->

      <!-- <q-carousel
        animated
        v-model="slide1"
        arrows
        control-color="orange"
        height="130px"
        infinite
      >
        <q-carousel-slide
          :name="2"
          style="cursor: pointer; z-index: 111; padding: 10px"
          @click="handleCustomEvent(`${redcliffpath}`)"
          clickable
          img-src="~assets/logos/Aston 2.webp"
        />

        <q-carousel-slide :name="1" img-src="~assets/logos/Aston 1.webp" />
      </q-carousel> -->

      <!-- <q-img

             src="~assets/logos/Aston 1.jpg"
           ></q-img>
           <br/> <q-img

             src="~assets/logos/Aston 2.jpg"
           ></q-img> -->
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: fixed;
              right: -48px;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <q-dialog v-model="reachusDialog" no-backdrop-dismiss>
          <q-card style="width: 450px">
            <q-toolbar
              class="bg-primary text-white text-align rounded-borders"
              style="top: 0; position: sticky; z-index: 100"
            >
              <q-toolbar-title style="text-align: center">
                Enquiry Form
              </q-toolbar-title>
              <q-btn
                dark
                padding="none"
                class="justify-end"
                style="margin: -10px"
                icon="close"
                color="primary"
                @click="closePartnerDialog"
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </q-toolbar>
            <q-card-section class="q-pt-none" style="margin-top: 30px">
              <q-form class="q-gutter-md" ref="reachusForm">
                <q-input
                  dense
                  rounded
                  v-model="reach_us.patientName"
                  hide-bottom-space
                  outlined
                  label="Patient Name*"
                  label-color="black"
                  :rules="[required('Patient Name*')]"
                >
                </q-input>
                <q-input
                  dense
                  rounded
                  v-model="reach_us.hospitalName"
                  outlined
                  hide-bottom-space
                  label="Hospital Name*"
                  label-color="black"
                  :rules="[required('Hospital Name*')]"
                >
                </q-input>
                <q-input
                  dense
                  rounded
                  hide-bottom-space
                  v-model="reach_us.contactEmail"
                  outlined
                  label="Contact Email"
                  label-color="black"
                  :rules="[required('Email'), email()]"
                >
                </q-input>
                <q-input
                  dense
                  rounded
                  v-model="reach_us.mobileNumber"
                  outlined
                  hide-bottom-space
                  label="Mobile Number*"
                  mask="##########"
                  label-color="black"
                  :rules="[required('Phone no'), validateMobileNumber]"
                >
                  <template v-slot:prepend>
                    <q-select
                      v-model="reach_us.country_code"
                      :options="countryCodes"
                      option-value="value"
                      option-label="label"
                      dense
                      style="min-width: 60px; margin-left: -11px"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                  </template>
                </q-input>
                <q-input
                  dense
                  hide-bottom-space
                  rounded
                  v-model="reach_us.patientLocation"
                  outlined
                  label="Patient Location*"
                  label-color="black"
                  :rules="[required('Patient Location*')]"
                >
                </q-input>
                <q-input
                  dense
                  hide-bottom-space
                  rounded
                  v-model="reach_us.message"
                  outlined
                  label="Message"
                  label-color="black"
                  :rules="[required('Message*')]"
                >
                </q-input>
                <q-card-actions
                  align="right"
                  class="text-primary q-mx-md q-my-0"
                >
                  <div class="col-12 q-mx-xs">
                    <p
                      style="width: 100%; font-family: verdana; font-size: 12px"
                    >
                      * Mangohomz executive will call you soon.
                    </p>
                  </div>
                  <div style="padding-right: 150px">
                    <q-btn
                      dark
                      rounded
                      dense
                      color="indigo-9"
                      @click="onreachusSubmit()"
                      label="Submit"
                    />
                  </div>
                </q-card-actions>
              </q-form>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="registrationThanksDialog" no-backdrop-dismiss>
          <q-card style="min-width: 350px">
            <q-btn
              dark
              size="sm"
              class="justify-end lt-sm"
              style="margin-left: 300px"
              icon="close"
              color="primary"
              @click="closeThanksDialog()"
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
              @click="closeThanksDialog()"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>

            <q-toolbar class="bg-white text-primary rounded-borders">
              <q-toolbar-title class="text-subtitle1 text-weight-bold">
                <q-img src="~assets/web_site/Landing page top.jpg"></q-img>
              </q-toolbar-title>
            </q-toolbar>
            <div class="footer-head text-center" style="font-family: verdana">
              Thanks for connecting with us.
            </div>
            <div class="footer-head text-center" style="font-family: verdana">
              Mangohomz executive will call you soon.
            </div>
            <div class="footer-head text-center" style="font-family: verdana">
              For more details, please reach out to us at:
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
      </div>
      <!-- <div class="q-pa-xs">
        <div class="row">
          <div
            class="col-1"
            style="text-align: center; padding-right: 50px"
          ></div>

      <why-mango-homz />
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div>
            <div
              class="q-pa-sm q-gutter-sm fixed-center"
              style="padding-left: 350px"
            >
              <q-btn
                class="reachus"
                no-caps
                label="Enquiry"
                style="
                  width: 80px;
                  height: 40px;
                  transform: rotate(90deg);
                  background-color: #fa6862;
                  color: white;
                  position: fixed;
                  right: -48px;
                  top: 55%;
                  font-size: 16px;
                "
                @click="reachusDialog = true"
              ></q-btn>
            </div>
            <q-dialog v-model="reachusDialog" no-backdrop-dismiss>
              <q-card style="width: 450px">
                <q-toolbar
                  class="bg-primary text-white text-align rounded-borders"
                  style="top: 0; position: sticky; z-index: 100"
                >
                  <q-toolbar-title style="text-align: center">
                    Enquiry Form
                  </q-toolbar-title>
                  <q-btn
                    dark
                    padding="none"
                    class="justify-end"
                    style="margin: -10px"
                    icon="close"
                    color="primary"
                    @click="closePartnerDialog"
                  >
                    <q-tooltip>close</q-tooltip>
                  </q-btn>
                </q-toolbar>
                <q-card-section class="q-pt-none" style="margin-top: 30px">
                  <q-form class="q-gutter-md" ref="reachusForm">
                    <q-input
                      dense
                      rounded
                      v-model="reach_us.patientName"
                      hide-bottom-space
                      outlined
                      label="Patient Name*"
                      label-color="black"
                      :rules="[required('Patient Name*')]"
                    >
                    </q-input>
                    <q-input
                      dense
                      rounded
                      v-model="reach_us.hospitalName"
                      outlined
                      hide-bottom-space
                      label="Hospital Name*"
                      label-color="black"
                      :rules="[required('Hospital Name*')]"
                    >
                    </q-input>
                    <q-input
                      dense
                      rounded
                      hide-bottom-space
                      v-model="reach_us.contactEmail"
                      outlined
                      label="Contact Email"
                      label-color="black"
                      :rules="[required('Email'), email()]"
                    >
                    </q-input>
                    <q-input
                      dense
                      rounded
                      v-model="reach_us.mobileNumber"
                      outlined
                      hide-bottom-space
                      label="Mobile Number*"
                      mask="##########"
                      label-color="black"
                      :rules="[required('Phone no'), validateMobileNumber]"
                    >
                      <template v-slot:prepend>
                        <q-select
                          v-model="reach_us.country_code"
                          :options="countryCodes"
                          option-value="value"
                          option-label="label"
                          dense
                          style="min-width: 60px; margin-left: -11px"
                        >
                          <template v-slot:no-option>
                            <q-item>
                              <q-item-section class="text-grey">
                                No results
                              </q-item-section>
                            </q-item>
                          </template>
                        </q-select>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      hide-bottom-space
                      rounded
                      v-model="reach_us.patientLocation"
                      outlined
                      label="Patient Location*"
                      label-color="black"
                      :rules="[required('Patient Location*')]"
                    >
                    </q-input>
                    <q-input
                      dense
                      hide-bottom-space
                      rounded
                      v-model="reach_us.message"
                      outlined
                      label="Message"
                      label-color="black"
                      :rules="[required('Message*')]"
                    >
                    </q-input>
                    <q-card-actions
                      align="right"
                      class="text-primary q-mx-md q-my-0"
                    >
                      <div class="col-12 q-mx-xs">
                        <p
                          style="
                            width: 100%;
                            font-family: verdana;
                            font-size: 12px;
                          "
                        >
                          * Mangohomz executive will call you soon.
                        </p>
                      </div>
                      <div style="padding-right: 150px">
                        <q-btn
                          dark
                          rounded
                          dense
                          color="indigo-9"
                          @click="onreachusSubmit()"
                          label="Submit"
                        />
                      </div>
                    </q-card-actions>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-dialog>

            <q-dialog v-model="registrationThanksDialog" no-backdrop-dismiss>
              <q-card style="min-width: 350px">
                <q-btn
                  dark
                  size="sm"
                  class="justify-end lt-sm"
                  style="margin-left: 300px"
                  icon="close"
                  color="primary"
                  @click="closeThanksDialog()"
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
                  @click="closeThanksDialog()"
                >
                  <q-tooltip>close</q-tooltip>
                </q-btn>

                <q-toolbar class="bg-white text-primary rounded-borders">
                  <q-toolbar-title class="text-subtitle1 text-weight-bold">
                    <q-img src="~assets/web_site/Landing page top.jpg"></q-img>
                  </q-toolbar-title>
                </q-toolbar>
                <div
                  class="footer-head text-center"
                  style="font-family: verdana"
                >
                  Thanks for connecting with us.
                </div>
                <div
                  class="footer-head text-center"
                  style="font-family: verdana"
                >
                  Mangohomz executive will call you soon.
                </div>
                <div
                  class="footer-head text-center"
                  style="font-family: verdana"
                >
                  For more details, please reach out to us at:
                </div>
                <div
                  class="footer-head text-center"
                  style="font-family: verdana"
                >
                  care@mangohomz.com
                </div>
                <div
                  class="footer-head text-center"
                  style="font-family: verdana"
                >
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
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
      <br>
          </div>
        </div>
      </div> -->
    </div>

    <!-- WEBSITE ENGLISH -->
    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img
          style="cursor: pointer"
          src="~assets/logos/Lower Band 2.webp"
        ></q-img>
      </a> -->

      <!-- <q-carousel
        swipeable
        animated
        v-model="slide1"
        control-color="orange"
        height="160px"
        arrows
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide style="cursor: pointer; z-Index:1111;" @click="handleCustomEvent(`${redcliffpath}`)" clickable  :name="2" img-src="~assets/logos/Lower Band 2.webp" />

        <q-carousel-slide
          :name="1"
          style="cursor: pointer; z-Index:1111;"
          @click="handleCustomEvent(`${redcliffpath}`)"
          img-src="~assets/logos/Lower Band.webp"
          clickable
        />
      </q-carousel> -->
      <testimonials />
      <div class="q-pa-md">
        <div class="row">
          <!-- <div class="col-1" style="text-align: center"></div> -->
          <!-- <connectWithusForm /> -->

          <why-mango-homz />
        </div>
        <div class="col-10">
          <!-- <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div> -->
          <div
            class="q-pa-sm q-gutter-sm fixed-center"
            style="padding-left: 350px"
          >
            <q-btn
              class="reachus"
              no-caps
              label="Enquiry"
              style="
                width: 80px;
                height: 40px;
                transform: rotate(90deg);
                background-color: #fa6862;
                color: white;
                position: absolute;
                right: -173%;
                top: 55%;
                font-size: 16px;
              "
              @click="reachusDialog = true"
            ></q-btn>
          </div>
          <q-dialog
            v-model="reachusDialog"
            no-backdrop-dismiss
            content-class="bg-transparent"
          >
            <q-card style="width: 450px">
              <q-toolbar
                class="bg-primary text-white text-align rounded-borders"
                style="top: 0; position: sticky; z-index: 100"
              >
                <q-toolbar-title style="text-align: center">
                  Enquiry Form
                </q-toolbar-title>
                <q-btn
                  dark
                  padding="none"
                  class="justify-end"
                  style="margin: -10px"
                  icon="close"
                  color="primary"
                  @click="closePartnerDialog"
                >
                  <q-tooltip>close</q-tooltip>
                </q-btn>
              </q-toolbar>
              <q-card-section class="q-pt-none" style="margin-top: 30px">
                <q-form class="q-gutter-md" ref="reachusForm">
                  <q-input
                    dense
                    rounded
                    v-model="reach_us.patientName"
                    hide-bottom-space
                    outlined
                    label="Patient Name*"
                    label-color="black"
                    :rules="[required('Patient Name*')]"
                  >
                  </q-input>
                  <q-input
                    dense
                    rounded
                    v-model="reach_us.hospitalName"
                    outlined
                    hide-bottom-space
                    label="Hospital Name*"
                    label-color="black"
                    :rules="[required('Hospital Name*')]"
                  >
                  </q-input>
                  <q-input
                    dense
                    rounded
                    hide-bottom-space
                    v-model="reach_us.contactEmail"
                    outlined
                    label="Contact Email"
                    label-color="black"
                    :rules="[required('Email'), email()]"
                  >
                  </q-input>
                  <q-input
                    dense
                    rounded
                    v-model="reach_us.mobileNumber"
                    outlined
                    hide-bottom-space
                    label="Mobile Number*"
                    mask="##########"
                    label-color="black"
                    :rules="[required('Phone no'), validateMobileNumber]"
                  >
                    <template v-slot:prepend>
                      <q-select
                        v-model="reach_us.country_code"
                        :options="countryCodes"
                        option-value="value"
                        option-label="label"
                        dense
                        style="min-width: 60px; margin-left: -11px"
                      >
                        <template v-slot:no-option>
                          <q-item>
                            <q-item-section class="text-grey">
                              No results
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                    </template>
                  </q-input>
                  <q-input
                    dense
                    hide-bottom-space
                    rounded
                    v-model="reach_us.patientLocation"
                    outlined
                    label="Patient Location*"
                    label-color="black"
                    :rules="[required('Patient Location*')]"
                  >
                  </q-input>
                  <q-input
                    dense
                    hide-bottom-space
                    rounded
                    v-model="reach_us.message"
                    outlined
                    label="Message"
                    label-color="black"
                    :rules="[required('Message*')]"
                  >
                  </q-input>
                  <q-card-actions
                    align="right"
                    class="text-primary q-mx-md q-my-0"
                  >
                    <div class="col-12 q-mx-xs">
                      <p
                        style="
                          width: 100%;
                          font-family: verdana;
                          font-size: 12px;
                        "
                      >
                        * Mangohomz executive will call you soon.
                      </p>
                    </div>
                    <div style="padding-right: 150px">
                      <q-btn
                        dark
                        rounded
                        dense
                        color="indigo-9"
                        @click="onreachusSubmit()"
                        label="Submit"
                      />
                    </div>
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>

          <q-dialog v-model="registrationThanksDialog" no-backdrop-dismiss>
            <q-card style="min-width: 350px">
              <q-btn
                dark
                size="sm"
                class="justify-end lt-sm"
                style="margin-left: 300px"
                icon="close"
                color="primary"
                @click="closeThanksDialog()"
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
                @click="closeThanksDialog()"
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>

              <q-toolbar class="bg-white text-primary rounded-borders">
                <q-toolbar-title class="text-subtitle1 text-weight-bold">
                  <q-img src="~assets/web_site/Landing page top.jpg"></q-img>
                </q-toolbar-title>
              </q-toolbar>
              <div class="footer-head text-center" style="font-family: verdana">
                Thanks for connecting with us.
              </div>
              <div class="footer-head text-center" style="font-family: verdana">
                Mangohomz executive will call you soon.
              </div>
              <div class="footer-head text-center" style="font-family: verdana">
                For more details, please reach out to us at:
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
        </div>
      </div>
    </div>

    <!-- Hindi Code -->
    <!-- Mobile version code -->

    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <br />
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: fixed;
              right: -48px;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <!-- <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div> -->
        <!-- <div class="row text-justify"> -->
        <!-- <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div> -->
        <!-- <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p> -->
        <!-- </div> -->
        <!-- </div> -->
      </div>
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img style="cursor: pointer" src="~assets/logos/Aston 1.webp"></q-img>
      </a> -->
      <!-- <q-carousel
        animated
        v-model="slide1"
        arrows
        control-color="orange"
        height="130px"
        infinite
      >
        <q-carousel-slide
          :name="2"
          style="cursor: pointer; z-index: 1111"
          @click="handleCustomEvent(`${redcliffpath}`)"
          img-src="~assets/logos/Aston 2.webp"
        />

        <q-carousel-slide :name="1" img-src="~assets/logos/Aston 1.webp" />
      </q-carousel> -->
      <!-- <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              आपकी मेडिकल ट्रिप को घर जैसा आरामदायक बनाने के लिए चुनें -
              MangoHomz.
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- WEBSITE HINGI -->

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img
          style="cursor: pointer"
          src="~assets/logos/Lower Band 2.webp"
        ></q-img>
      </a> -->
      <!--
      <q-carousel
        swipeable
        animated
        v-model="slide1"
        control-color="orange"
        height="160px"
        arrows
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide :name="2" img-src="~assets/logos/Lower Band 2.webp" />

        <q-carousel-slide
          :name="1"
          style="cursor: pointer; z-Index:1111;"
          @click="handleCustomEvent(`${redcliffpath}`)"
          img-src="~assets/logos/Lower Band.webp"
        />
      </q-carousel> -->
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <!-- <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div> -->
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: absolute;
              right: -173%;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <!-- <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div> -->
      </div>
      <!-- <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              आपकी मेडिकल ट्रिप को घर जैसा आरामदायक बनाने के लिए चुनें -
              MangoHomz.
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- ASSAMESE CODE -->

    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img style="cursor: pointer" src="~assets/logos/Aston 1.webp"></q-img>
      </a> -->
      <!-- <q-carousel
        animated
        v-model="slide1"
        arrows
        control-color="orange"
        height="130px"
        infinite
      >
        <q-carousel-slide
          :name="2"
          style="cursor: pointer; z-index: 1111"
          @click="handleCustomEvent(`${redcliffpath}`)"
          img-src="~assets/logos/Aston 2.webp"
        />

        <q-carousel-slide :name="1" img-src="~assets/logos/Aston 1.webp" />
      </q-carousel> -->
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <div class="text-h5 text-bold mh-page-heading">
          Feel at Home during Medical Travel with MangoHomz.
        </div>
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: fixed;
              right: -48px;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <!-- <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div> -->
      </div>
      <!-- <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              মেংগ’হ’মচে‌ দিয়ে আপোনাৰ চিকিৎসা যাত্ৰাত ঘৰৰ দৰে অনুভৱ
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img
          style="cursor: pointer"
          src="~assets/logos/Lower Band 2.webp"
        ></q-img>
      </a> -->

      <!-- <q-carousel
        swipeable
        animated
        v-model="slide1"
        control-color="orange"
        height="160px"
        arrows
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide :name="2" img-src="~assets/logos/Lower Band 2.webp" />

        <q-carousel-slide :name="1" img-src="~assets/logos/Lower Band.webp" />
      </q-carousel> -->
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <!-- <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div> -->
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: absolute;
              right: -173%;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <!-- <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div> -->
      </div>
      <!-- <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              মেংগ’হ’মচে‌ দিয়ে আপোনাৰ চিকিৎসা যাত্ৰাত ঘৰৰ দৰে অনুভৱ
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Bengali Code -->
    <!-- Mobile version code -->

    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img style="cursor: pointer" src="~assets/logos/Aston 1.webp"></q-img>
      </a> -->
      <!-- <q-carousel
        animated
        v-model="slide1"
        arrows
        control-color="orange"
        height="130px"
        infinite
      >
        <q-carousel-slide
          :name="2"
          style="cursor: pointer; z-index: 1111"
          @click="handleCustomEvent(`${redcliffpath}`)"
          img-src="~assets/logos/Aston 2.webp"
        />

        <q-carousel-slide :name="1" img-src="~assets/logos/Aston 1.webp" />
      </q-carousel> -->
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <div class="text-h5 text-bold mh-page-heading">
          Feel at Home during Medical Travel with MangoHomz.
        </div>
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: fixed;
              right: -48px;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <!-- <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div> -->
      </div>
      <!-- <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              চিকিৎসার জন্য বাইরের যে কোন শহর, ম্যাঙ্গো হোমZ এর সাথে এখন নিজের
              ঘর-দোর ।।
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- WEBSITE ENGLISH -->

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img
          style="cursor: pointer"
          src="~assets/logos/Lower Band 2.webp"
        ></q-img>
      </a> -->

      <!-- <q-carousel
        swipeable
        animated
        v-model="slide1"
        control-color="orange"
        height="160px"
        arrows
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide :name="2" img-src="~assets/logos/Lower Band 2.webp" />

        <q-carousel-slide
          :name="1"
          style="cursor: pointer; z-Index:1111;"
          @click="handleCustomEvent(`${redcliffpath}`)"
          img-src="~assets/logos/Lower Band.webp"
        />
      </q-carousel> -->
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <!-- <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div> -->
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: absolute;
              right: -173%;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <!-- <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div> -->
      </div>
      <!-- <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              চিকিৎসার জন্য বাইরের যে কোন শহর, ম্যাঙ্গো হোমZ এর সাথে এখন নিজের
              ঘর-দোর ।।
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Oriya Code -->
    <!-- Mobile version code -->

    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img style="cursor: pointer" src="~assets/logos/Aston 1.webp"></q-img>
      </a> -->
      <!-- <q-carousel
        animated
        v-model="slide1"
        arrows
        control-color="orange"
        height="130px"
        infinite
      >
        <q-carousel-slide
          :name="2"
          style="cursor: pointer; z-index: 1111"
          @click="handleCustomEvent(`${redcliffpath}`)"
          img-src="~assets/logos/Aston 2.webp"
        />

        <q-carousel-slide :name="1" img-src="~assets/logos/Aston 1.webp" />
      </q-carousel> -->
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <!-- <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div> -->
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: fixed;
              right: -48px;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <!-- <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div> -->
      </div>
      <!-- <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              MangoHomz ସହିତ ମେଡିକାଲ ଭ୍ରମଣ ସମୟରେ ଘରେ ରହିବାର ଅନୂଭୁତି ପାଆନ୍ତୁ ।
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- WEBSITE ENGLISH -->

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <br />
      <!-- <a href="#" @click="handleCustomEvent(`${redcliffpath}`)">
        <q-img
          style="cursor: pointer"
          src="~assets/logos/Lower Band 2.webp"
        ></q-img>
      </a> -->

      <!-- <q-carousel
        swipeable
        animated
        v-model="slide1"
        control-color="orange"
        height="160px"
        arrows
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide :name="2" img-src="~assets/logos/Lower Band 2.webp" />

        <q-carousel-slide
          :name="1"
          style="cursor: pointer; z-Index:1111;"
          @click="handleCustomEvent(`${redcliffpath}`)"
          img-src="~assets/logos/Lower Band.webp"
        />
      </q-carousel> -->
      <testimonials />
      <why-mango-homz />
      <div class="col-10">
        <!-- <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div> -->
        <div
          class="q-pa-sm q-gutter-sm fixed-center"
          style="padding-left: 350px"
        >
          <q-btn
            class="reachus"
            no-caps
            label="Enquiry"
            style="
              width: 80px;
              height: 40px;
              transform: rotate(90deg);
              background-color: #fa6862;
              color: white;
              position: absolute;
              right: -173%;
              top: 55%;
              font-size: 16px;
            "
            @click="reachusDialog = true"
          ></q-btn>
        </div>
        <!-- <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div> -->
      </div>
      <!-- <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              MangoHomz ସହିତ ମେଡିକାଲ ଭ୍ରମଣ ସମୟରେ ଘରେ ରହିବାର ଅନୂଭୁତି ପାଆନ୍ତୁ ।
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 320px) {
  .mh-blog {
    margin-top: 14px !important;
    margin-bottom: 4px;
    border-radius: 1px;
  }

  .redclif img {
    width: 286px !important;
    height: 109px;
  }

  .reachus {
    width: 100px;
    height: 40px;
    transform: rotate(90deg);
    color: white;
    position: fixed;
    right: -22px !important;
    top: 55%;
  }
}

@media (min-width: 1440px) and (max-width: 1535px) {
  .reachus {
    width: 100px;
    height: 40px;
    transform: rotate(90deg);
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 235% !important;
    top: 55% !important;
  }
}

@media screen and (max-width: 480px) {
  .redclif img {
    width: 368px !important;
    height: 122px;
  }

  .mh-blog {
    margin-top: 29px !important;
    margin-bottom: 4px;
    border-radius: 1px;
  }

  .reachus {
    width: 100px;
    height: 40px;
    transform: rotate(90deg);
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: -52px !important;
    top: 55% !important;
  }
}

.q-img__image absolute-full {
  background-size: contain !important;
}

.message-input {
  border: 2px solid black;
  border-radius: 5px;
}
</style>
<script>
import testimonials from "..//..//components/testimonials.vue";
import bookingFormComp from "../../components/bookingFormComp.vue";
import whyMangoHomz from "../menuContentPages/whyMangoHomz.vue";
import validations from "../../helpers/validations";
import { scroll } from "quasar";
// import connectWithusForm from "../../components/connectWithusForm.vue"
import { mapState, mapActions } from "vuex";
import filepath from "src/helpers/filepath";
const { getScrollTarget, setScrollPosition } = scroll;
export default {
  name: "home",
  components: {
    bookingFormComp,
    whyMangoHomz,
    testimonials,
    // connectWithusForm,
  },
  data() {
    return {
      checkPartnerDialog: false,
      showTable: false,
      currentIndex: 0,
      translateX: 0,
      testNameArrayData: [],
      testnamecolumn: [
        {
          name: "sno",
          label: "Sno",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "sno",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          headerClasses: "bg-indigo-10 text-white",
          name: "test_type",
          label: "Test Type",

          field: "test_type",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "test_name",
          headerClasses: "bg-indigo-10 text-white",
          label: "Test Name",
          align: "center",
          field: "test_name",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "price",
          headerClasses: "bg-indigo-10 text-white",
          label: "Price",
          align: "center",
          field: "price",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "actions",
          headerClasses: "bg-indigo-10 text-white",
          label: "",
          field: "actions",
          align: "center",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],
      countryCodes: [
        { name: "Afghanistan", label: "+93 AF" },
        { name: "Albania", label: "+355 AL" },
        { name: "Algeria", label: "+213 DZ" },
        { name: "American Samoa", label: "+1684 AS" },
        { name: "AndorrA", label: "+376 AD" },
        { name: "Angola", label: "+244 AO" },
        { name: "Anguilla", label: "+1264 AI" },
        { name: "Antigua and Barbuda", label: "+1268 AG" },
        { name: "Argentina", label: "+54 AR" },
        { name: "Armenia", label: "+374 AM" },
        { name: "Aruba", label: "+297 AW" },
        { name: "Australia", label: "+61 AU" },
        { name: "Austria", label: "+43 AT" },
        { name: "Azerbaijan", label: "+994 AZ" },
        { name: "Bahamas", label: "+1242 BS" },
        { name: "Bahrain", label: "+973 BH" },
        { name: "Bangladesh", label: "+880 BD" },
        { name: "Barbados", label: "+1246 BB" },
        { name: "Belarus", label: "+375 BY" },
        { name: "Belgium", label: "+32 BE" },
        { name: "Belize", label: "+501 BZ" },
        { name: "Benin", label: "+229 BJ" },
        { name: "Bermuda", label: "+1441 BM" },
        { name: "Bhutan", label: "+975 BT" },
        { name: "Bolivia", label: "+591 BO" },
        { name: "Bosnia and Herzegovina", label: "+387 BA" },
        { name: "Botswana", label: "+267 BW" },
        { name: "Brazil", label: "+55 BR" },
        { name: "British Indian Ocean Territory", label: "+246 IO" },
        { name: "Bulgaria", label: "+359 BG" },
        { name: "Burkina Faso", label: "+226 BF" },
        { name: "Burundi", label: "+257 BI" },
        { name: "Cambodia", label: "+855 KH" },
        { name: "Cameroon", label: "+237 CM" },
        { name: "Canada", label: "+1 CA" },
        { name: "Cape Verde", label: "+238 CV" },
        { name: "Cayman Islands", label: "+345 KY" },
        { name: "Central African Republic", label: "+236 CF" },
        { name: "Chad", label: "+235 TD" },
        { name: "Chile", label: "+56 CL" },
        { name: "China", label: "+86 CN" },
        { name: "Christmas Island", label: "+61 CX" },
        { name: "Cocos (Keeling) Islands", label: "+61 CC" },
        { name: "Colombia", label: "+57 CO" },
        { name: "Comoros", label: "+269 KM" },
        { name: "Congo", label: "+242 CG" },
        { name: "Congo, The Democratic Republic of the", label: "+243 CD" },
        { name: "Cook Islands", label: "+682 CK" },
        { name: "Costa Rica", label: "+506 CR" },
        { name: "Croatia", label: "+385 HR" },
        { name: "Cuba", label: "+53 CU" },
        { name: "Cyprus", label: "+537 CY" },
        { name: "Czech Republic", label: "+420 CZ" },
        { name: "Denmark", label: "+45 DK" },
        { name: "Djibouti", label: "+253 DJ" },
        { name: "Dominica", label: "+1767 DM" },
        { name: "Dominican Republic", label: "+1809 DO" },
        { name: "Ecuador", label: "+593 EC" },
        { name: "Egypt", label: "+20 EG" },
        { name: "El Salvador", label: "+503 SV" },
        { name: "Equatorial Guinea", label: "+240 GQ" },
        { name: "Eritrea", label: "+291 ER" },
        { name: "Estonia", label: "+372 EE" },
        { name: "Ethiopia", label: "+251 ET" },
        { name: "Falkland Islands (Malvinas)", label: "+500 FK" },
        { name: "Faroe Islands", label: "+298 FO" },
        { name: "Fiji", label: "+679 FJ" },
        { name: "Finland", label: "+358 FI" },
        { name: "France", label: "+33 FR" },
        { name: "French Guiana", label: "+594 GF" },
        { name: "French Polynesia", label: "+689 PF" },
        { name: "Gabon", label: "+241 GA" },
        { name: "Gambia", label: "+220 GM" },
        { name: "Georgia", label: "+995 GE" },
        { name: "Germany", label: "+49 DE" },
        { name: "Ghana", label: "+233 GH" },
        { name: "Gibraltar", label: "+350 GI" },
        { name: "Greece", label: "+30 GR" },
        { name: "Greenland", label: "+299 GL" },
        { name: "Grenada", label: "+1473 GD" },
        { name: "Guadeloupe", label: "+590 GP" },
        { name: "Guam", label: "+1671 GU" },
        { name: "Guatemala", label: "+502 GT" },
        { name: "Guinea", label: "+224 GN" },
        { name: "Guinea-Bissau", label: "+245 GW" },
        { name: "Guyana", label: "+595 GY" },
        { name: "Haiti", label: "+509 HT" },
        { name: "Honduras", label: "+504 HN" },
        { name: "Hong Kong", label: "+852 HK" },
        { name: "Hungary", label: "+36 HU" },
        { name: "Iceland", label: "+354 IS" },
        { name: "India", label: "+91 IND" },
        { name: "Indonesia", label: "+62 ID" },
        { name: "Iran, Islamic Republic Of", label: "+98 IR" },
        { name: "Iraq", label: "+964 IQ" },
        { name: "Ireland", label: "+353 IE" },
        { name: "Israel", label: "+972 IL" },
        { name: "Italy", label: "+39 IT" },
        { name: "Jamaica", label: "+1876 JM" },
        { name: "Japan", label: "+81 JP" },
        { name: "Jordan", label: "+962 JO" },
        { name: "Kazakhstan", label: "+77 KZ" },
        { name: "Kenya", label: "+254 KE" },
        { name: "Kiribati", label: "+686 KI" },
        { name: "Kuwait", label: "+965 KW" },
        { name: "Kyrgyzstan", label: "+996 KG" },
        { name: "Lao People'S Democratic Republic", label: "+856 LA" },
        { name: "Latvia", label: "+371 LV" },
        { name: "Lebanon", label: "+961 LB" },
        { name: "Lesotho", label: "+266 LS" },
        { name: "Liberia", label: "+231 LR" },
        { name: "Libyan Arab Jamahiriya", label: "+218 LY" },
        { name: "Liechtenstein", label: "+423 LI" },
        { name: "Lithuania", label: "+370 LT" },
        { name: "Luxembourg", label: "+352 LU" },
        { name: "Macao", label: "+853 MO" },
        {
          name: "Macedonia, The Former Yugoslav Republic of",
          label: "+389 MK",
        },
        { name: "Madagascar", label: "+261 MG" },
        { name: "Malawi", label: "+265 MW" },
        { name: "Malaysia", label: "+60 MY" },
        { name: "Maldives", label: "+960 MV" },
        { name: "Mali", label: "+223 ML" },
        { name: "Malta", label: "+356 MT" },
        { name: "Marshall Islands", label: "+692 MH" },
        { name: "Martinique", label: "+596 MQ" },
        { name: "Mauritania", label: "+222 MR" },
        { name: "Mauritius", label: "+230 MU" },
        { name: "Mayotte", label: "+262 YT" },
        { name: "Mexico", label: "+52 MX" },
        { name: "Micronesia, Federated States of", label: "+691 FM" },
        { name: "Moldova, Republic of", label: "+373 MD" },
        { name: "Monaco", label: "+377 MC" },
        { name: "Mongolia", label: "+976 MN" },
        { name: "Montserrat", label: "+1664 MS" },
        { name: "Morocco", label: "+212 MA" },
        { name: "Myanmar", label: "+95 MM" },
        { name: "Namibia", label: "+264 NA" },
        { name: "Nauru", label: "+674 NR" },
        { name: "Nepal", label: "+977 NP" },
        { name: "Netherlands", label: "+31 NL" },
        { name: "Netherlands Antilles", label: "+599 AN" },
        { name: "New Caledonia", label: "+687 NC" },
        { name: "New Zealand", label: "+64 NZ" },
        { name: "Nicaragua", label: "+505 NI" },
        { name: "Niger", label: "+227 NE" },
        { name: "Nigeria", label: "+234 NG" },
        { name: "Niue", label: "+683 NU" },
        { name: "Norfolk Island", label: "+672 NF" },
        { name: "Northern Mariana Islands", label: "+1670 MP" },
        { name: "Norway", label: "+47 NO" },
        { name: "Oman", label: "+968 OM" },
        { name: "Pakistan", label: "+92 PK" },
        { name: "Palau", label: "+680 PW" },
        { name: "Palestinian Territory, Occupied", label: "+970 PS" },
        { name: "Panama", label: "+507 PA" },
        { name: "Papua New Guinea", label: "+675 PG" },
        { name: "Paraguay", label: "+595 PY" },
        { name: "Peru", label: "+51 PE" },
        { name: "Philippines", label: "+63 PH" },
        { name: "Poland", label: "+48 PL" },
        { name: "Portugal", label: "+351 PT" },
        { name: "Puerto Rico", label: "+1787 PR" },
        { name: "Qatar", label: "+974 QA" },
        { name: "Reunion", label: "+262 RE" },
        { name: "Romania", label: "+40 RO" },
        { name: "Russian Federation", label: "+7 RU" },
        { name: "RWANDA", label: "+250 RW" },
        { name: "Samoa", label: "+685 WS" },
        { name: "San Marino", label: "+378 SM" },
        { name: "Saudi Arabia", label: "+966 SA" },
        { name: "Senegal", label: "+221 SN" },
        { name: "Serbia and Montenegro", label: "+381 CS" },
        { name: "Seychelles", label: "+248 SC" },
        { name: "Sierra Leone", label: "+232 SL" },
        { name: "Singapore", label: "+65 SG" },
        { name: "Slovakia", label: "+421 SK" },
        { name: "Slovenia", label: "+386 SI" },
        { name: "Solomon Islands", label: "+677 SB" },
        { name: "South Africa", label: "+27 ZA" },
        {
          name: "South Georgia and the South Sandwich Islands",
          label: "+500 GS",
        },
        { name: "Spain", label: "+34 ES" },
        { name: "Sri Lanka", label: "+94 LK" },
        { name: "Sudan", label: "+249 SD" },
        { name: "Suriname", label: "+597 SR" },
        { name: "Swaziland", label: "+268 SZ" },
        { name: "Sweden", label: "+46 SE" },
        { name: "Switzerland", label: "+41 CH" },
        { name: "Syrian Arab Republic", label: "+963 SY" },
        { name: "Taiwan, Province of China", label: "+886 TW" },
        { name: "Tajikistan", label: "+992 TJ" },
        { name: "Tanzania, United Republic of", label: "+255 TZ" },
        { name: "Thailand", label: "+66 TH" },
        { name: "Timor-Leste", label: "+670 TL" },
        { name: "Togo", label: "+228 TG" },
        { name: "Tokelau", label: "+690 TK" },
        { name: "Tonga", label: "+676 TO" },
        { name: "Trinidad and Tobago", label: "+1868 TT" },
        { name: "Tunisia", label: "+216 TN" },
        { name: "Turkey", label: "+90 TR" },
        { name: "Turkmenistan", label: "+993 TM" },
        { name: "Turks and Caicos Islands", label: "+1649 TC" },
        { name: "Tuvalu", label: "+688 TV" },
        { name: "Uganda", label: "+256 UG" },
        { name: "Ukraine", label: "+380 UA" },
        { name: "United Arab Emirates", label: "+971 AE" },
        { name: "United Kingdom", label: "+44 GB" },
        { name: "United States", label: "+1 US" },
        { name: "Uruguay", label: "+598 UY" },
        { name: "Uzbekistan", label: "+998 UZ" },
        { name: "Vanuatu", label: "+678 VU" },
        { name: "Venezuela", label: "+58 VE" },
        { name: "Viet Nam", label: "+84 VN" },
        { name: "Virgin Islands, British", label: "+1284 VG" },
        { name: "Virgin Islands, U.S.", label: "+1340 VI" },
        { name: "Wallis and Futuna", label: "+681 WF" },
        { name: "Yemen", label: "+967 YE" },
        { name: "Zambia", label: "+260 ZM" },
        { name: "Zimbabwe", label: "+263 ZW" },
      ],
      redcliffpath: filepath.redcliffurl,
      title: "Mangohomz – Book a Patient-friendly room near the hospital",
      slide: 1,
      slide1: 2,
      autoplay: true,
      activelangstatus: true,
      reachusDialog: false,
      medicalloanDialog: false,
      arthilabsviewpage: false,
      registrationThanksDialog: false,
      gendertype: ["Male", "Female"],
      tableData: [],
      ...validations,

      reach_us: {
        patientName: "",
        hospitalName: "",
        contactEmail: "",
        country_code: "+91 IND",
        mobileNumber: "",
        patientLocation: "",
        message: "",
      },
      medicalloandata: {
        patientName: "",
        hospitalName: "",
        email: "",
        country_code: "+91",
        mobileNumber: "",
        patientLocation: "",
        message: "",
        options: [],
        salarized: "",
      },
      salarizedError: false,
      optionsError: false,
      centers: [],

      arthilabs: {
        city: "",
        centers: "",
        mobile_no: "",
        first_name: "",
        age: "",
        email_id: "",
        gender: "",
        testtype: "",
        testname: "",
        address: "",
        alternate_mobile_no: "",
        test_date: "",
        test_time: "",
        testNameArrayDataObj: {},
      },
      lft_home_content_english: [
        {
          content:
            "At MangoHomz, we strongly believe in the ancient Indian philosophy which says that Everybody should be healthy and happy. Nobody should have any sorrow. We fill the major gap in Medical Tourism in India by offering patient-friendly accommodation near the hospital of one’s choice.",
        },
        {
          content:
            "Complex medical treatments and procedures like cancer treatment,  cardiology treatment, advanced dental treatment, fertility treatment  and orthopaedic or cosmetic surgeries – require a high level of expertise and state-of-the-art healthcare facilities, which may not be available in your hometown.",
        },
        {
          content:
            "To get access to the best doctors, world-class hospitals and the latest medical technologies, one may have to travel to another city, state or country. Thankfully, we Indians need not go too far. In the last few decades, India has emerged as a global hub for medical tourism. Credit goes to cities like Chennai,Delhi, Mumbai,Banglore, Hyderabad, Kolkata and Vellore, among others, that have become healthcare hubs. All medical hubs are having world-class multi-speciality and super-speciality hospitals boasting of the latest medical technologies and some of the best cardiologists, orthopaedic surgeons, eye surgeons, cancer specialists.",
        },
      ],
      rgt_home_content_english: [
        {
          content:
            "However, medical travel may also pose a few challenges for patients  and their companions, especially in a multi-lingual nation like India, where even basic communication could be a major challenge. Besides, there are other things to take care of – like finding patient-friendly, budget-friendly accommodation close to the hospital or clinic, ensuring smooth airport/station transfers, availability of medicines 24x7, getting palatable food, hiring an attendant etc.",
        },
        {
          content:
            " This is where we, at MangoHomz, come into picture. MangoHomz is an Artificial Intelligence-enabled medical travel technology company that aims to provide patient-friendly and budget-friendly accommodations to patients and their companions. Besides, we also offer a slew of value-added services  including transport, food, medicines, medical equipment and trained attendants to make our guests’ medical stay as comfortable and peaceful as possible. We do all this and more, so that you can focus on your health and your loved ones  during the medical tour.",
        },
      ],
      lft_home_content_hindi: [
        {
          content:
            "MangoHomz में, हम भारत में बरसों से चली आ रही उस फिलॉसोफी पर दृढ़ता से विश्वास करते हैं, जो कहती है कि सभी को स्वस्थ और खुश रहना चाहिए और किसी को कोई दुख नहीं होना चाहिए.. MangoHomz में, हम भारत में मेडिकल टूरिज्म में नंबर एक समस्या का समाधान, रोगी को उसकी पसंद के अस्पताल के पास अनुकूल आवास प्रदान करके करते हैं ।",
        },
        {
          content:
            "ऐसा देखा गया है की कुछ जटिल मेडिकल समस्याओं जैसे की कैंसर ट्रीटमेंट, हार्ट सम्बंधित ट्रीटमेंट, एडवांस डेंटल ट्रीटमेंट, प्रजनन संबधी समस्या,  हड्डी रोग / आर्थोपेडिक या कॉस्मेटिक सर्जरी इत्यादि के लिए उच्च स्तर की विशेषज्ञता और अत्याधुनिक स्वास्थ्य सुविधाओं की आवश्यकता होती है, जो आपके शहर में सामान्य रूप से उपलब्ध नहीं हो पाती हैं। इसी कारण से हम में से लगभग सभी को कभी न कभी सर्वोत्तम चिकित्सकों, विश्व स्तरीय अस्पतालों और एडवांस चिकित्सा तकनीकों का लाभ उठाने के लिए, दूसरे शहर, राज्य या देश की यात्रा करनी पड़ती है ।",
        },
        {
          content:
            "हम भारतीयों को इसके लिए ज्यादा दूर जाने की जरूरत नहीं है, क्योंकि पिछले कुछ दशकों में, भारत मेडिकल टूरिज्म के लिए एक वैश्विक केंद्र के रूप में उभरा है। इसका श्रेय चेन्नई, मुंबई, हैदराबाद, कोलकाता और वेल्लोर जैसे शहरों को जाता है, जो स्वास्थ्य सेवा में सिर्फ भारत में ही नहीं बल्कि पुरे विश्व में मेडिकल सुविधा के कुछ बेहतरीन केंद्रों में से एक बन गए हैं। इन सभी मेडिकल हब्स में कुछ ऐसे विश्वस्तरीय मल्टी-स्पेशियलिटी और सुपर-स्पेशियलिटी अस्पताल हैं जो नवीनतम और एडवांस चिकित्सा तकनीकों से लैस तो हैं ही साथ ही उनके साथ कुछ बेहतरीन और नामी कार्डियोलॉजिस्ट, ऑर्थोपेडिक सर्जन, नेत्र सर्जन, दन्त विशेषज्ञ, कैंसर विशेषज्ञ आदि भी जुड़े हुए है ।",
        },
      ],
      rgt_home_content_hindi: [
        {
          content:
            "भारत जैसे एक बड़े और बहुभाषीय देश में जहाँ कुछेक किलोमीटर पर ही भाषा, खान-पान और संस्कृति से सम्बंधित बदलाव देखने को मिलते है, उच्चस्तरीय मेडिकल सुविधा पाने की यात्रा रोगी एवं उनके परिवार अथवा सहयोगियों के लिए किसी चुनौती से कम नहीं है। भाषा, खान-पान एवं संपर्क सम्बन्धी बेसिक दिक्कतों के अलावा आम इंसान को अजनबी शहर में कुछ और असुविधाओं से भी दो-चार होना पड़ता है जैसे, अस्पताल या क्लिनिक के पास रोगी की आवश्यकताओं और बजट के अनुकूल एक सर्वसुविधायुक्त रहने की जगह ढूंढना, एयरपोर्ट अथवा रेलवे स्टेशन से आने-जाने के लिए एक सुरक्षित वाहन की व्यवस्था करना, 24x7 दवाओं की उपलब्धता निश्चित करना, स्वादिष्ट एवं पौष्टिक भोजन की व्यवस्था करना, रोगी की आवश्यकतानुसार एक उपयुक्त नर्स या कम्पाउण्डर को किराए पर लेना आदि ।",
        },
        {
          content:
            "यही कुछ एक समस्याएं है जिनको आसान करने के लिए हम आपके लिए ले कर आये हैं - MangoHomz। MangoHomz एक मेडिकल टूरिज्म के लिए बनायी गयी टेक्नोलॉजी कंपनी है जिसकी आर्टिफिशल इंटेलिजेंस से युक्त टेक्नोलॉजी का उद्देश्य रोगियों और उनके सहयोगियों को रोगी की सुविधा और बजट के अनुकूल आवास प्रदान करना है। इसके अलावा, हम अपने मेहमानों के मेडिकल स्टे को यथासंभव आरामदायक और शांतिपूर्ण बनाने के लिए ट्रांसपोर्ट, भोजन, दवाएं, मेडिकल उपकरण और प्रशिक्षित नर्स सहित कई अन्य सेवाएं भी देते हैं। हम यह सब इसलिए करते हैं ताकि आप मेडिकल टूर के दौरान बाकि सब चिंताओ को MangoHomz पर छोड़, अपने स्वास्थ्य पर और अपने प्रियजनों के जल्द से जल्द ठीक होने पर ध्यान दे सकें ।",
        },
      ],
      lft_home_content_assamese: [
        {
          content:
            "মেংগ’হ’মচত আমি দৃঢ় বিশ্বাসী সেই পুৰণি ভাৰতীয় দৰ্শনত যি কয় যে সকলো সুস্থ আৰু সুখী হোৱা উচিত আৰু কাৰো কোনো দুখ চিন্তা থাকিব নালাগে। আমি ভাৰতৰ চিকিৎসা পৰ্যটনৰ ক্ষেত্ৰখনত বৃহৎ খালীঠাই পুৰণ কৰাৰ প্ৰয়াস কৰিছো, য’ত আমি আগবঢ়াইছো আপোনাৰ পছন্দৰ চিকিৎসালয়ৰ কাষতেই ৰোগী অনুকুল আৱাসস্থান।",
        },
        {
          content:
            "যটিল ৰোগৰ চিকিৎসা আৰু পদ্ধতিবোৰত যেনে কেন্সাৰ, হৃদৰোগ, দাঁতৰ অত্যাধুনিক চিকিৎসা, প্ৰজনন চিকিৎসা, অৰ্থোপেডিকচ্‌ বা কচ্‌মেটিক চাৰ্জাৰি আদিত উচ্চস্তৰীয় বিশেষজ্ঞতা ও অত্যাধুনিক স্বাস্থ্য যত্নৰ প্ৰয়োজন হয়, যি আপোনাৰ নিজা চহৰত উপলব্ধ ন’হবও পাৰে।",
        },
        {
          content:
            "সেয়ে প্ৰসিদ্ধ ডাক্তৰ, সৰ্বশ্ৰেষ্ঠ চিকিৎসালয় বা অত্যাধুনিক পদ্ধতি বিচাৰি ৰোগী তথা পৰিয়ালবৰ্গয়ে নানা চহৰ, ৰাজ্য বা দেশো ঘুৰি ফুৰিবলগীয়াত পৰে। সৌভাগ্যক্ৰমে আমি ভাৰতীয়বোৰে তেনে কৰিব নালাগে কাৰণ আজি কেইবা দশকৰপৰা আমাৰ ভাৰতবৰ্ষ চিকিৎসা পৰ্যটনক্ষেত্ৰত বিশ্বব্যাপী কেন্দ্ৰস্থল হৈ পৰিছে যাৰ সম্পূৰ্ণ ভাৰ কান্ধপাতি লৈছে চেন্নাই,মুম্বাই,হায়দৰাবাদ,ক’লকাতা,ভেল্লৰ আদি চহৰে, যি হৈ পৰিছে বৰ্ত্তমান স্বাস্থ্যৰক্ষাৰ কেন্দ্ৰস্থ্ল। চিকিৎসা কেন্দ্ৰস্থলবোৰত থাকে সৰ্বশ্ৰেষ্ঠ মাল্‌ঢি-স্পেচিয়েলিটি আৰু চুপাৰ-স্পেচিয়েলিটি হস্পিতেল য’ত সহজতেই পাব পাৰি সুদক্ষ হৃদৰোগ বিশেষজ্ঞ, অৰ্থোপেডিক চাৰ্জন,আই চাৰ্জন নতুবা কেন্সাৰ স্পচিয়েলিষ্ট ইত্যাদি।",
        },
      ],
      rgt_home_content_assamese: [
        {
          content:
            "তথাপিও, চিকিৎসা যাত্ৰাত ৰোগী তথা সংগী বহুধৰনৰ অসুবিধাৰো সন্মুখীন হ’বলগীয়া হয় যিহেতু ভাৰতবৰ্ষ এখন বহুভাষিক ৰাষ্ট্ৰ আৰু ভাষাৰ মৌলিক যোগাযোগৰ ক্ষেত্ৰতো ই ডাঙৰ হেঙাৰৰূপে ঠিয় দিব পাৰে। তাৰ উপৰিও ৰোগীয়ে নানা ধৰনৰ সমস্যাৰ সন্মুখীন হ’বলগীয়া হয়- যেনে এক আৱাসস্থান, যি হয় ৰোগী অনুকুল, বাজেট অনুকুল, চিকিৎসালয়ৰ নিকটবৰ্তী, এয়াৰপৰ্ট বা ৰেলষ্টেচনলৈ যাতায়াতৰ সুবিধা থকা, সকলো সময়তে ঔষধ উপলব্ধ থকা ইত্যাদি।",
        },
        {
          content:
            "তেতিয়াই আবিৰ্ভাব হয় মেংগ’হ’মচৰ। মেংগ’হ’মচ হৈছে আৰ্টিফিচিয়েল ইন্টেলিন্সেৰে সমৃদ্ধ চিকিৎসাযাত্ৰা পদ্ধতিৰ বাবে প্ৰস্তুত এক কোম্পানি যি ৰোগী তথা সংগীৰ বাবে আগবঢ়ায় এক ৰোগী অনুকুল আৰু বাজেট অনুকুল আৱাসস্থান।ইয়াৰ উপৰিও আমি আপোনালৈ আগবঢ়াওঁ কিছু ভেলু-এডেড্‌ চাৰ্ভিছ যেনে যাতায়াত, খাদ্য, ঔষধ, চিকিৎসা-সৰঞ্জাম আৰু নিবেদিত পৰিচাৰক/পৰিচাৰিকা আদি। আমি এই সকলো সেৱা আগবঢ়াওঁ যাতে আমাৰ ‘আলহী’ৰ চিকিৎসাযাত্ৰাত তেওঁ নিশ্চিন্তহৈ নিজৰ স্বাস্থ্য তথা প্ৰিয়জনৰ ওপৰত গুৰুত্ব দিব পাৰে।",
        },
      ],
      lft_home_content_bengali: [
        {
          content:
            "ম্যাঙ্গো হোমস বিশ্বাস করে প্রাচীন ভারতিয় দর্শনের মতাদর্শে - সবার স্বাস্থ, সবার খুশী। রোগীদের পছন্দ অনুযায়ী হাসপাতালের কাছে থাকার জায়গার আমরা সুবন্দোবস্তো করে দি – চিকিৎসা সফরের সঙ্গে এই পরিষেবা কিন্তু, ভারতবর্ষে প্রায় অনুপস্থিত। চিকিৎসার জন্যে আপনার নিজের রাজ্যের বাইরে বা বিদেশে, যেখানে আপনার প্রয়োজন সেখানেই আমরা থাকার জায়গার সুবন্দোবস্তো করে দেব।",
        },
        {
          content:
            "জটিল চিকিৎসা ব্যাবস্থা বা পদ্ধতি,যেমন ক্যান্সারের চিকিৎসা,উন্নত মানের দন্ত-চিকিৎসা, হৃদযন্ত্র-চিকিৎসা,বন্ধ্যাত্বের চিকিৎসা, কসমেটিক সার্জারি ইত্যাদির জন্য প্রয়োজন বিশেষ ধরণের চিকিৎসা পদ্ধতি বা স্বাস্থ পরিষেবা যেটা সহজে আপনার গ্রামে বা শহরে নাও পাওয়া যেতে পারে,আমরা এ সমস্ত ক্ষেত্রে চিকিৎসা সফর এবং থাকার সুবন্দোবস্তো দুটোই করে দি। ",
        },
        {
          content:
            " আপনি হয়ত সেরা ডাক্তার, বিশ্ব-মানের হাসপাতাল আর একদম আধুনিক কারিগরি চিকিৎসার জন্যে অন্য কোন শহর, রাজ্য বা দেশে যাবার কথা ভাবছেন - সৌভাগ্যবশতঃ আমাদের, ভারতীয়দের, দেশের বাইরে  আজ আর তত যাবার দরকার পরে না। চিকিৎসার জন্যে, ভারতবর্ষেই আজ গত কয়েক দশক ধরে, সারা বিশ্ব থেকে লোক আসছে। ভারতের অনেকগুলো শহর, বিশেষ করে চেন্নাই, মুম্বাই, হায়দ্রাবাদ,কলকাতা আর ভেলোর তো চিকিৎসার জন্য পৃথিবীর মানচিত্রে জায়গা করে নিয়েছে। এই সব শহরে মালটি-স্পেশালিটি আর সুপার-স্পেশালিটি সবরকমের হাস্পাতাল আছে, যেখানে পৃথিবীর সেরা হৃদরোগ- বিশেষজ্ঞ, অর্থপেডিক সার্জন, চক্ষু বিশেষজ্ঞ, ক্যান্সার-স্পেশালিস্ট ইত্যাদি, আপনার জন্য সবসময় উপস্থিত।",
        },
      ],
      rgt_home_content_bengali: [
        {
          content:
            "ভারতের মত দেশে,যেখানে বিভিন্ন রাজ্যের লোক বিভিন্ন ভাষায় কথা বলে সেখানে রোগী ও তার সঙ্গীদের কাছে ভাষা একটা বড়সড় সমস্যা হয়ে দাঁড়াতে পারে।তাছাড়াও রুগীর মনমত, বাজেট অনুযায়ী, হাস্পাতালের কাছাকাছি থাকার জায়গা, এয়ারপোর্ট বা স্টেশন থেকে বাড়ি পর্যন্ত পৌঁছোন, দিনে কিম্বা রাতে সর্বক্ষণ ওষুধের সুবিধে, পছন্দসই খাবার, রুগির সহায়ক সারাক্ষণের কেউ,এসব তো আছেই।",
        },
        {
          content:
            "ম্যাঙ্গো হোমz, বিশেষ ‘এ আই’ প্রযুক্তিযুক্ত একটি টেকনিক্যাল সংস্থা,মূলত চিকিৎসা সফরের জন্য। রুগীর মনমত, বাজেট অনুযায়ী, হাস্পাতালের কাছাকাছি থাকার জায়গা যোগাড়ের ব্যাবস্থা করাই এই সংস্থার মুল কাজ। এরই সঙ্গে ওতোপ্রতঃভাবে যুক্ত, আমরা একগুচ্ছ উচ্চমানের পরিষেবা, যেমন পরিবহন, খাবার, ওষুধ, চিকিৎসার সরঞ্জাম, সব সময়ের সব রকমের সাহায্যের জন্য পারদর্শী-লোক ইত্যাদি তৈরি রাখি, যাতে চিকিৎসার জন্যে আমাদের অতিথির এই পরবাস,শান্তি আর আরামের হয়। আমাদের উদ্দেশ্য, আমরা এ সব কিছুর খেয়াল রাখব, আর আপনি সারাক্ষণ আপনার প্রিয়জনের যত্নেই সময় দেবেন : এই সেবাই আমাদের মূল লক্ষ। ",
        },
      ],

      lft_home_content_Oriya: [
        {
          content:
            "MangoHomz ରେ ଆମେ ପ୍ରାଚୀନ ଭାରତୀୟ ଦର୍ଶନ ଉପରେ ଦୃଢ ବିଶ୍ୱାସ କରୁ । ଯେଉଁଥିରେ କୁହାଯାଉଛି ଯେ “ସମସ୍ତେ ସୁସ୍ଥ ଏବଂ ସୁଖୀ ରହିବା ଉଚିତ । କାହାର ଦୁଃଖ ରହିବା ଠିକ୍ ନୁହେଁ ” । ଆମେ ଜଣଙ୍କର ନିଜ ପସନ୍ଦ ଡ଼ାକ୍ତରଖାନା ନିକଟରେ ରୋଗୀ ଅନୂକୁଳ ଆବାସ ଯୋଗାଇ ଦେଉଥାଉ ଯାହାକୁ ଚିକିତ୍ସା ହେବାକୁ ଯାଉଥିବା ରୋଗୀମାନଙ୍କର ଏକ ବଡ଼ ସମସ୍ୟା ଅଟେ । ",
        },
        {
          content:
            "କର୍କଟ ଚିକିତ୍ସା ହୃଦ୍‌ରୋଗ ଚିକିତ୍ସା, ଉନ୍ନତ ଦନ୍ତ ଚିକିତ୍ସା,  ପ୍ରଜନନ ଚିକିତ୍ସା ଏବଂ ଅର୍ଥୋପେଡ଼ିକ୍ କିମ୍ବା କସମେଟିକ୍ ସର୍ଜରୀ ଭଳି ଜଟିଳ ଚିକିତ୍ସା, ଏବଂ ଚିକିତ୍ସା ପ୍ରଣାଳୀ ଇତ୍ୟାଦି ଏକ ଉଚ୍ଚ ସ୍ତରୀୟ ଅଭିଜ୍ଞ ଏବଂ ଅତ୍ୟାଧୁନିକ ସ୍ୱାସ୍ଥ୍ୟସେବା ବ୍ୟବସ୍ଥା ଆବଶ୍ୟକ କରେ ଯାହା ହୁଏତ ଅପଣଙ୍କ ସହରରେ ଉପଲବ୍ଧ ହୋଇ ନ ପାରେ ।",
        },
        {
          content:
            "ଭଲ ଡାକ୍ତର, ବିଶ୍ୱସ୍ତରୀୟ ଡ଼ାକ୍ତରଖାନା ଏବଂ ଅତ୍ୟାଧୁନିକ ଚିକିତ୍ସାରେ ସୁବିଧା ପାଇବାକୁ ହେଲେ ଜଣେ ଅନ୍ୟ ସହର, ରାଜ୍ୟ କିମ୍ବା ଦେଶକୁ ଯାତ୍ରା କରିବାକୁ ପଡ଼ିପାରେ । ଖୁସୀର କଥା ଆମେ ଭାରତୀୟମାନଙ୍କୁ ଅଧିକ ଦୂରକୁ ଯିବାର ଆବଶ୍ୟକତା ନାହିଁ । ଗତ କିଛି ଦଶନ୍ଧି ମଧ୍ୟରେ ଭାରତ ଡ଼ାକ୍ତରୀ ପର୍ଯ୍ୟଟନ ପାଇଁ ଏକ ବିଶ୍ୱସ୍ତରୀୟ କେନ୍ଦ୍ର ଭାବରେ ପରିଗଣିତ ହୋଇଛି । ଚେନାଇ, ମୁମ୍ବାଇ, ହାଇଦ୍ରାବାଦ, କୋଲକାତା ଏବଂ ଭେଲୋର ଭଳି ସହର ଉଚ୍ଚସ୍ତରୀୟ ସ୍ୱାସ୍ଥ୍ୟସେବା କେନ୍ଦ୍ରରେ ପରିଣତ ହୋଇଛି । ସମସ୍ତ ମେଡ଼ିକାଲ ବିଶ୍ୱସ୍ତରୀୟ ମଲ୍ଟିସ୍ପେସିଆଲିଟି ଏବଂ ସୁପର ସ୍ପେସିଆଲିଟି ହସ୍‌ପିଟାଲ୍ ଗୁଡ଼ିକରେ ଅତ୍ୟାଧୁନିକ ଚିକିତ୍ସା ବହୁ ଅଭିଜ୍ଞ ହୃଦ୍‌ରୋଗ ବିଶେଷଜ୍ଞ, ଆର୍ଥୋପେଡ଼ିକ୍ ସର୍ଜନ, ଚକ୍ଷୁ ସର୍ଜନ, କର୍କଟ ବିଶେଷଜ୍ଞ ମାନେ କାର୍ଯ୍ୟ କରୁଛନ୍ତି ।",
        },
      ],
      rgt_home_content_Oriya: [
        {
          content:
            "ଚିକିତ୍ସା ପାଇଁ ବାହାରକୁ ଯାଉଥିବା ରୋଗୀ ଓ ସେମାନଙ୍କର ପରିଜନମାନେ ବହୁତ ଅସୁବିଧାର ସମ୍ମୁଖୀନ ହୁଅନ୍ତି । ଯେପରିକି ଡ଼ାକ୍ତରଖାନା ନିକଟରେ ରୋଗୀ ଅନୂକୁଳ ଏବଂ କମ୍ ବଜେଟରେ ରହିବାର ଘର, ବିମାନବନ୍ଦର କିମ୍ବା ଷ୍ଟେସନ୍‌ରୁ ସ୍ଥାନାନ୍ତର, ଚବିଶ୍ ଘଣ୍ଟା ଔଷଧ ଓ ମେଡ଼ିକାଲ ସାମଗ୍ରୀର ଉପଲବ୍ଧତା, ସୁଷମଖାଦ୍ୟ ଓ ଜଣେ ସହାୟକ ପାଇବା  ଇତ୍ୟାଦି ବହୁତ ସମସ୍ୟା ସୃଷ୍ଟି କରିଥାଏ । ଭାରତ ପରି ବହୁଭାଷୀ ଦେଶରେ ସାଧାରଣ ଯେଗାଯୋଗ ମଧ୍ୟ ପ୍ରମୁଖ ଅସୁବିଧା ସୃଷ୍ଟି କରିଥାଏ ।",
        },
        {
          content:
            "MangoHomz ହେଉଛି ଏକ ଆର୍ଟିଫିସିଆଲ ଇନ୍‌ଟେଲିଜେନ୍ସ ସମ୍ପନ୍ନ କମ୍ପାନୀ ଯାହା ଏହି ସବୁ ଅସୁବିଧାକୁ ସୂଚାରୁ ରୂପେ ସମ୍ପାଦନ କରିବା ପାଇଁ ରୋଗୀ ଏବଂ ସେମାନଙ୍କ ସହଯୋଗୀମାନଙ୍କୁ ରୋଗୀ ଅନୂକୁଳ ଏବଂ ତାଲିମ୍‌ପ୍ରାପ୍ତ ସହାୟତା ଯୋଗାଇ ଦେଇଥାଏ । ଏହାଦ୍ୱାରା ରୋଗୀର ଚିକିତ୍ସା ସମୟକୁ ଆରାମଦାୟକ ଏବଂ ଶାନ୍ତିପୂର୍ଣ୍ଣ କରିଥାଏ । MangoHomz ଆପଣଙ୍କର ଅନ୍ୟାନ୍ୟ କାର୍ଯ୍ୟ କରିବାର ଦାୟିତ୍ୱ ମଧ୍ୟ ନେଇଥାଏ । ଏହାଫଳରେ ଆପଣ ଓ ଆପଣଙ୍କର ପ୍ରିୟଜନମାନେ କେବଳ ଚିକିତ୍ସା ଉପରେ ଧ୍ୟାନ ଦେଇପାରିବେ ।",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      rate() {
        return this.testNameArrayData.reduce(
          (total, row) => total + parseInt(row.price),
          0
        );
      },
      cities: (state) => state.dropdown.city_arr_arthilabs,
      centernames: (state) => state.dropdown.centernames_arr_arthilabs,
      testtype: (state) => state.dropdown.testtype_arr_arthilabs,
      testnameArray: (state) => state.dropdown.testname_arr_arthilabs,
      address: (state) => state.dropdown.address_arr_arthilabs,
    }),
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllCitiesarthilabs");
    // this.$store.dispatch("dropdown/loadAllCeentersarthilabs");
  },

  meta() {
    return {
      title: this.title,
    };
  },
  methods: {
    NotifyCommingSoon() {
      this.$q.notify({
        message: "coming soon ...",
        position: "top",
        color: "green",
        timeout: 2000,
      });
    },
    openGenieHome() {
      // this.$router.push("/mhGenieHome");
      // window.open(this.$router.push("/mhGenieHome"));
      const routeURL = this.$router.resolve("/mhGenieHome").href;
      window.open(routeURL, "_blank");
    },
    handleScroll() {
      this.$router.replace("/home");
      setTimeout(() => {
        const ele = document.getElementById("partnerRegPage");
        const target = getScrollTarget(ele);
        //const offset = ele.offsetTop - ele.scrollHeight + 1450;
        const offset = ele.offsetTop;
        const duration = 1000;
        setScrollPosition(target, offset, duration);
      }, 1000);
    },
    openPartnerCheckDialog() {
      // this.checkPartnerDialog = true;
      this.$router.push("/partnerwithus");
    },
    openPartnerRegDialog() {
      this.checkPartnerDialog = false;
      this.handleScroll();
    },
    closePartnerWithus() {
      this.checkPartnerDialog = false;
    },
    scrollRightMobile() {
      const container = this.$refs.imagesContainer;
      const containerWidth = container.clientWidth;
      const scrollAmount = 100; // Adjust the scroll amount as needed

      this.currentIndex = (this.currentIndex + 1) % 6; // Increment the currentIndex by 1 and wrap it back to 0 after 6

      this.translateX = -containerWidth;
    },
    scrollLeftMobile() {
      const container = this.$refs.imagesContainer;
      const containerWidth = container.clientWidth;
      const scrollAmount = 100; // Adjust the scroll amount as needed
      // console.log(this.currentIndex);

      this.currentIndex -= 1; // Decrement the currentIndex by 1

      if (this.currentIndex < 0) {
        this.currentIndex = 0; // Reset the index to 0 if it becomes negative
      }

      this.translateX = containerWidth;
    },
    scrollLeft() {
      const container = this.$refs.imagesContainer;
      const containerWidth = container.clientWidth;
      const scrollAmount = 300; // Adjust the scroll amount based on image width
      container.style.transform = `translateX(-${scrollAmount}px)`;
    },
    scrollRight() {
      const container = this.$refs.imagesContainer;
      container.style.transform = "translateX(0)";
    },
    deleteRow(index) {
      this.testNameArrayData.splice(index, 1);
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    addtestnames() {
      this.$refs.testnameForm.validate().then((valid) => {
        if (!valid) {
          this.$q.notify({
            position: "top",
            color: "negative",
            message: "Please Fill the Testnames",
          });
        } else {
          var testnameobj = {
            sno: this.testNameArrayData.length + 1,
            test_type: this.arthilabs.testname.test_type,
            test_name: this.arthilabs.testname.test_name,
            price: this.arthilabs.testname.price,
          };
          this.testNameArrayData.push(testnameobj);
          // console.log("testnameobj", this.testNameArrayData);

          this.showTable = true;
        }
      });
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
    validateMobileNumberLoan(value) {
      if (/^0/.test(value)) {
        return "The first digit of your mobile number cannot be 0.";
      } else if (/^\d{10}$/.test(value)) {
        return true;
      } else {
        return "Mobile number should be exactly 10 digits long.";
      }
    },
    ageRange(val) {
      if (val >= 1 && val <= 110) {
        return true;
      }
      return "Age must be between 1 and 110";
    },
    loadAllArthilabtestname() {
      const payload = {
        // city:this.arthilabs.city,
        center_name: this.arthilabs.centers,
        test_type: this.arthilabs.testtype,
      };
      // console.log("sendpayload",payload)
      this.$store.dispatch("dropdown/loadAllArthilabtestname", payload);
      // console.log(`Test Type: ${arthilabs.testtype}`);
      // // console.log(`City: ${city}`);

      // console.log(`Centers: ${arthilabs.centers}`);
    },
    goToUrl(url) {
      window.open(url);
    },
    ...mapActions("account", [
      "reachwithusSaving",
      "registrationThanksDialogOpen",
    ]),
    ...mapActions("dropdown", ["loadAllArthilabCenters"]),
    ...mapActions("dropdown", ["loadAllArthilabtesttype"]),
    ...mapActions("booking", ["arthilabsdetaisSaving"]),
    //   ...mapActions("dropdown", ["loadAllArthilabtestname"]),
    ...mapActions("dropdown", ["loadAllArthilabaddress"]),
    ...mapActions("account", ["medicalLoanDetailsSaving"]),

    closePartnerDialog() {
      this.reachusDialog = false;
      this.resetFiles();
    },
    emptyCenters() {
      this.arthilabs.centers = "";
    },
    emptytesttype() {
      this.arthilabs.testtype = "";
    },
    emptyaddress() {
      this.arthilabs.address = "";
    },

    emptytestname() {
      this.arthilabs.testname = "";
    },
    closeArthilabsDialog() {
      this.arthilabsviewpage = false;
      this.resetFiles();
    },
    openArthilabsDialog() {
      this.arthilabsviewpage = true;
    },
    resetFiles() {},
    registrationThanksDialogOpen() {
      this.registrationThanksDialog = true;
    },
    closeThanksDialog() {
      this.registrationThanksDialog = false;
    },
    handleCustomEvent(url) {
      window.open(url);
    },
    helthsupportOpenInNewTab() {
      const routeData = this.$router.resolve({ path: "/healthSupport" });
      window.open(routeData.href, "_blank");
    },
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    onreachusSubmit() {
      this.$refs.reachusForm.validate().then((success) => {
        if (success) {
          if (this.reach_us.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                // console.log("this.reach_us", this.reach_us);

                const formData = new FormData();

                formData.append("reach_us", JSON.stringify(this.reach_us));
                this.reachwithusSaving({
                  formData,
                  dialogOpen: this.registrationThanksDialogOpen,
                });

                this.reachusDialog = false;
                this.reach_us.patientName = "";
                this.reach_us.hospitalName = "";
                this.reach_us.contactEmail = "";
                this.reach_us.mobileNumber = "";
                this.reach_us.patientLocation = "";
                this.reach_us.message = "";

                // this.getPropertyDetails(this.editedItem);
              })
              .onCancel(() => {
                this.reachusDialog = true;
              });
          }
        }
      });
    },
    onArthilabsSubmit() {
      this.$refs.arthilabsviewpage.validate().then((success) => {
        if (success) {
          this.$refs.testnameForm.validate().then((success) => {
            if (success) {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  const arthiFormsavingdetails = {
                    test_date: this.arthilabs.test_date,
                    test_time: this.arthilabs.test_time,
                    first_name: this.arthilabs.first_name,
                    mobile_no: this.arthilabs.mobile_no,
                    email_id: this.arthilabs.email_id,
                    age: this.arthilabs.age,
                    gender: this.arthilabs.gender,
                    alternate_mobile_no: this.arthilabs.alternate_mobile_no,
                    city: this.arthilabs.city.city,
                    center_name: this.arthilabs.centers.center_name,
                    center_address: this.arthilabs.centers.center_address,
                    test_type: this.arthilabs.testname.test_type,
                    rate: this.rate,
                    testNameArrayDataObj: this.testNameArrayData,
                  };

                  // Call the store method and pass the form data
                  this.$store.dispatch("booking/arthilabsdetaisSaving", {
                    arthiFormsavingdetails,
                    arthilabsviewpage: this.arthilabsviewpage,
                    testnameForm: this.testnameForm,
                    testNameArrayData: this.testNameArrayData,
                  });

                  // Reset the form fields
                  this.arthilabsviewpage = false;
                  this.arthilabs.city = "";
                  this.arthilabs.centers = "";
                  this.arthilabs.mobile_no = "";
                  this.arthilabs.first_name = "";
                  this.arthilabs.age = "";
                  this.arthilabs.gender = "";
                  this.arthilabs.email_id = "";
                  this.arthilabs.testtype = "";
                  this.arthilabs.testname = "";
                  this.arthilabs.address = "";
                  this.arthilabs.alternate_mobile_no = "";
                  this.arthilabs.test_date = "";
                  this.arthilabs.test_time = "";
                  this.testNameArrayData = [];
                })
                .onCancel(() => {
                  this.arthilabsviewpage = true;
                });
            }
          });
        }
      });
    },
    openmedicalloanDialog() {
      this.medicalloanDialog = true;
    },
    refreshloandata() {
      this.medicalloandata.patientName = "";
      this.medicalloandata.hospitalName = "";
      this.medicalloandata.email = "";
      this.medicalloandata.mobileNumber = "";
      this.medicalloandata.patientLocation = "";
      this.medicalloandata.message = "";
      this.medicalloandata.options = [];
      this.medicalloandata.salarized = "";
    },
    closemedicalloanDialog() {
      this.medicalloanDialog = false;
      this.medicalloandata.patientName = "";
      this.medicalloandata.hospitalName = "";
      this.medicalloandata.email = "";
      this.medicalloandata.mobileNumber = "";
      this.medicalloandata.patientLocation = "";
      this.medicalloandata.message = "";
      this.medicalloandata.options = [];
      this.medicalloandata.salarized = "";
    },
    // onMedLoanFormSubmit() {
    //   this.$refs.medloanFormdata.validate().then((success) => {
    //     if (success) {
    //       this.salarizedError = false;
    //       this.optionsError = false;

    //       if (!this.medicalloandata.salarized) {
    //         this.salarizedError = true;
    //         return;
    //       }
    //       if (this.medicalloandata.options.length === 0) {
    //         this.optionsError = true;
    //         return;
    //       }
    //       this.$q
    //         .dialog({
    //           title: "Confirm",
    //           message: "Do you want to Submit data ?",
    //           cancel: true,
    //           persistent: true,
    //         })
    //         .onOk(() => {
    //           // console.log("front end data at submit",this.medicalloandata);
    //           this.medicalLoanDetailsSaving(this.medicalloandata);
    //           this.registrationThanksDialog = true;
    //           this.medicalloanDialog = false;

    //         })
    //         .onCancel(() => {

    //         });
    //     }
    //   });
    // },
    onMedLoanFormSubmit() {
      this.$refs.medloanFormdata.validate().then((success) => {
        if (success) {
          this.salarizedError = false;
          this.optionsError = false;

          if (!this.medicalloandata.salarized) {
            this.salarizedError = true;
            return;
          }
          if (this.medicalloandata.options.length === 0) {
            this.optionsError = true;
            return;
          }
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.medicalLoanDetailsSaving(this.medicalloandata);
              this.registrationThanksDialog = true;
              // Update dialog status here to close the dialog
              this.medicalloanDialog = false;

              // Show a confirmation dialog if needed

              // Reset form data after a delay, so the confirmation dialog can be seen
              setTimeout(() => {
                this.refreshloandata();
              }, 1500);
            })
            .onCancel(() => {
              // Handle cancel action here if needed
            });
        }
      });
    },
  },
};
</script>
<style>
@supports (-webkit-overflow-scrolling: touch) {
}

.table-bordered {
  border: 1px solid #ddd;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #ddd;
  padding: 8px;
}

@media (max-width: 767px) {
  .informsLap {
    display: none;
  }

  .scrollBarUpDesktop {
    display: none;
  }

  .coupleCardsHome {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .scrollBarUpMobile {
    display: none;
  }
}

@media screen and (min-width: 1920px) {
  .reachus {
    width: 80px;
    height: 40px;
    transform: rotate(90deg);
    background-color: rgb(250, 104, 98);
    color: white;
    position: absolute;
    right: -223% !important;
    top: 55%;
    font-size: 16px;
  }

}

@media (max-height: 714px) {
  .ImageAdjest {
    margin-top: -14px;
  }
}

@media (max-width: 1440px) {
  .InformsLapRes {
    width: 464px !important;
  }
}

@media (max-width: 1536px) {
  .InformsLapRes {
    width: 463px !important;
  }
}

@media (min-width: 1280px) and (max-width: 1440px) {
  .InformsLapRes {
    width: 416px !important;
    margin-top: 15px;
    margin-bottom: -28px;
  }

  .ImageAdjest {
    width: 624px !important;
    height: 100px !important;
    margin-bottom: -41px;
  }
}
</style>
