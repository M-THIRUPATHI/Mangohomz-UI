<template>
  <div id="partnerRegPage">
    <!-- English Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-partner-page-top-image"></div>
      </div>
      <div class="gt-xs col-12 mh-partner-page-top-image"></div>

      <div class="q-pa-xs">
        <div class="justify-center">
          <!-- <div class="col-1" style="text-align: center"></div> -->
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              Come, join hands with MangoHomz to join the fast-growing Indian
              Medical Tourism Industry
            </div>

            <div class="row justify-center">
              <div
                class="row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
              </div>
              <div
              class="ag-reg row col-12 justify-center q-mb-sm"
                style="padding-top: 5%;"
              >
                <q-btn
                  no-caps
                  style="width:210px; height: 40px;"
                  color="primary"
                  class="text-bold q-ml-sm agent-registration"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration</q-tooltip></q-btn
                >
              </div>
            </div>
            <div class="row" >
              <div class="col-12 ">

                  <q-list style="padding: 0px;">
                    <q-item >
                      <q-item-section avatar side top>
                        <q-img
                          src="~assets/logos/Accommodation Partner.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold"
                              >MangoHomz Accommodation Partner (MHAP):</span
                            ><br />If you have a property near a medical hub or
                            facility, here’s your opportunity to turn it into a
                            MangoHomz property and benefit from the fast-growing
                            medical tourism industry.
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar side top>
                        <q-img
                          src="~assets/logos/Travel Partner.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold"
                              >MangoHomz Transport Partner (MHTP):</span
                            ><br />If you have a fleet of cars and a team of
                            well-trained drivers, you could well become our
                            Transport Partner.
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar side top>
                        <q-img
                          src="~assets/logos/Food Partner.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold">
                              MangoHomz Food Partner (MHFP):</span
                            ><br />If your kitchen is equipped to serve
                            nutritious food to our guests – patients and their
                            companions staying at MangoHomz properties then you
                            can become our partner.
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar side top>
                        <q-img
                          src="~assets/logos/standard_home_medical_amenities.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold"
                              >MangoHomz Medical Equipment Partner
                              (MHMEP):</span
                            ><br />If you own or run a pharmacy that can provide
                            medicines and medical devise 24x7, or a diagnostic
                            centre, join us as our MEP (Medical Equipment
                            Partner).
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar side top>
                        <q-img
                          src="~assets/logos/Agent.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold"
                              >MangoHomz Booking Agent (MHBA):</span
                            ><br />If you are a travel agent who keeps getting
                            enquiries for accommodation during medical tourism
                            from domestic or international tourists, you could
                            become a MangoHomz Booking partner. If you wish to
                            become a MangoHomz partner, get in touch with us
                            today.
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>


                <!-- <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p> -->
                <div class="row justify-center">
                  <div
                    class="row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                  </div>
                  <div
                  class="ag-reg row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration</q-tooltip></q-btn
                    >
                  </div>
                  <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Website version code -->

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-partner-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              Come, join hands with MangoHomz to join the fast-growing Indian
              Medical Tourism Industry
            </div>
            <div class="row justify-center">
              <div
                class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                align="center"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration </q-tooltip></q-btn
                >

                <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
              </div>
            </div>

            <div class="row text-justify" style="margin: 10px">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <div class="col-6 q-pa-md" style="max-width: 100%">
                  <q-list>
                    <q-item>
                      <q-item-section avatar>
                        <q-img
                          src="~assets/logos/Accommodation Partner.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold"
                              >MangoHomz Accommodation Partner (MHAP):</span
                            ><br />If you have a property near a medical hub or
                            facility, here’s your opportunity to turn it into a
                            MangoHomz property and benefit from the fast-growing
                            medical tourism industry.
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-img
                          src="~assets/logos/Travel Partner.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold"
                              >MangoHomz Transport Partner (MHTP):</span
                            ><br />If you have a fleet of cars and a team of
                            well-trained drivers, you could well become our
                            Transport Partner.
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-img
                          src="~assets/logos/Food Partner.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold">
                              MangoHomz Food Partner (MHFP):</span
                            ><br />If your kitchen is equipped to serve
                            nutritious food to our guests – patients and their
                            companions staying at MangoHomz properties then you
                            can become our partner.
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-img
                          src="~assets/logos/standard_home_medical_amenities.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold"
                              >MangoHomz Medical Equipment Partner
                              (MHMEP):</span
                            ><br />If you own or run a pharmacy that can provide
                            medicines and medical devise 24x7, or a diagnostic
                            centre, join us as our MEP (Medical Equipment
                            Partner).
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-img
                          src="~assets/logos/Agent.webp"
                          width="84px"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-section
                          ><p>
                            <span class="text-bold"
                              >MangoHomz Booking Agent (MHBA):</span
                            ><br />If you are a travel agent who keeps getting
                            enquiries for accommodation during medical tourism
                            from domestic or international tourists, you could
                            become a MangoHomz Booking partner. If you wish to
                            become a MangoHomz partner, get in touch with us
                            today.
                          </p></q-item-section
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
                <div class="col-6 q-pa-md" style="max-width: 100%">
                  <q-list> </q-list>
                </div>

                <!-- <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p> -->

                <!-- New Implimentation For Partner and Agent Registaration Start -->

                <div class="row justify-center">
                  <div
                    class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                    align="center"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration </q-tooltip></q-btn
                    >
                    <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
                  </div>
                </div>

                <!--New Implimentation For Partner And Agent Registaration End-->
                <!-- <div class="row justify-center">
                  <div
                    class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                    align="center"
                  >
                    <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"

                    />
                    <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"

                    />
                  </div>

                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hindi Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-partner-page-top-image"></div>
      </div>
      <div class="gt-xs col-12 mh-partner-page-top-image"></div>

      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              आइये, और तेजी से बढ़ते भारतीय मेडिकल टूरिज्म उद्योग में शामिल होने
              के लिए मैंगोहोमज़ के साथ हाथ मिलाइये !
            </div>
            <div class="row justify-center">
              <div
                class="row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
              </div>
              <div
                class="row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration</q-tooltip></q-btn
                >
              </div>
              <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
            </div>
            <div class="row text-justify" style="margin: 10px">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
                <div class="row justify-center">
                  <div
                    class="row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                  </div>
                  <div
                  class="ag-reg row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration</q-tooltip></q-btn
                    >
                  </div>
                  <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Website version code -->

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-partner-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              आइये, और तेजी से बढ़ते भारतीय मेडिकल टूरिज्म उद्योग में शामिल होने
              के लिए मैंगोहोमज़ के साथ हाथ मिलाइये !
            </div>
            <div class="row justify-center">
              <div
                class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                align="center"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration </q-tooltip></q-btn
                >
                <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
              </div>
            </div>
            <div class="row text-justify" style="margin: 10px">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
                <div class="row justify-center">
                  <div
                    class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                    align="center"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration </q-tooltip></q-btn
                    >
                    <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Assamese Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-partner-page-top-image"></div>
      </div>
      <div class="gt-xs col-12 mh-partner-page-top-image"></div>

      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              তেনেহলে আহক আৰু মেংগ’হ’মচৰ স’তে হাত মিলাই যোগ হওক ফাষ্ট-গ্ৰয়িং
              ইণ্ডিয়ান মেডিকেল টুৰিজম ইণ্ডাষ্ট্ৰিৰ স’তে।
            </div>
            <div class="row justify-center">
              <div
                class="row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
              </div>
              <div
              class="ag-reg row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration</q-tooltip></q-btn
                >
              </div>
              <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
            </div>
            <div class="row text-justify" style="margin: 10px">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
                <div class="row justify-center">
                  <div
                    class="row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                  </div>
                  <div
                  class="ag-reg row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration</q-tooltip></q-btn
                    >
                  </div>
                  <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Website version code -->

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-partner-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              তেনেহলে আহক আৰু মেংগ’হ’মচৰ স’তে হাত মিলাই যোগ হওক ফাষ্ট-গ্ৰয়িং
              ইণ্ডিয়ান মেডিকেল টুৰিজম ইণ্ডাষ্ট্ৰিৰ স’তে।
            </div>
            <div class="row justify-center">
              <div
                class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                align="center"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration </q-tooltip></q-btn
                >
                <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
              </div>
            </div>
            <div class="row text-justify" style="margin: 10px">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
                <div class="row justify-center">
                  <div
                    class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                    align="center"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration </q-tooltip></q-btn
                    >
                    <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bengali Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-partner-page-top-image"></div>
      </div>
      <div class="gt-xs col-12 mh-partner-page-top-image"></div>

      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              আসুন ম্যাঙ্গো হোমZ – এর সাথে যোগ দিন , যোগ দিন দ্রুত বেড়ে ওঠা
              নোতুন চিকিৎসা সফর শিল্পে
            </div>
            <div class="row justify-center">
              <div
                class="row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
              </div>
              <div
              class="ag-reg row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration</q-tooltip></q-btn
                >
              </div>
              <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
            </div>
            <div class="row text-justify" style="margin: 10px">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
                <div class="row justify-center">
                  <div
                    class="row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                  </div>
                  <div
                  class="ag-reg row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration</q-tooltip></q-btn
                    >
                  </div>
                  <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Website version code -->

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-partner-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              আসুন ম্যাঙ্গো হোমZ – এর সাথে যোগ দিন , যোগ দিন দ্রুত বেড়ে ওঠা
              নোতুন চিকিৎসা সফর শিল্পে
            </div>
            <div class="row justify-center">
              <div
                class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                align="center"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration </q-tooltip></q-btn
                >
                <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
              </div>
            </div>
            <div class="row text-justify" style="margin: 10px">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
                <div class="row justify-center">
                  <div
                    class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                    align="center"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration </q-tooltip></q-btn
                    >
                    <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Oriya Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-partner-page-top-image"></div>
      </div>
      <div class="gt-xs col-12 mh-partner-page-top-image"></div>

      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              ଆସନ୍ତୁ ଦୃତ ଗତିରେ ଆଗକୁ ବଡ଼ୁଥିବା ମେଡିକାଲ ଟୁରିଜିମ୍ ଇଣ୍ଡଷ୍ଟ୍ରିଜ୍‌ରେ
              ଯୋଗଦାନ କରିବା ପାଇଁ MangoHomz ସହିତ ହାତ ମିଳାନ୍ତୁ ।
            </div>
            <div class="row justify-center">
              <div
                class="row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
              </div>
              <div
              class="ag-reg row col-12 justify-center q-mb-sm"
                style="padding-top: 5%"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration</q-tooltip></q-btn
                >
              </div>
              <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
            </div>
            <div class="row text-justify" style="margin: 10px">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
                <div class="row justify-center">
                  <div
                    class="row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                  </div>
                  <div
                  class="ag-reg row col-12 justify-center q-mb-sm"
                    style="padding-top: 5%"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration</q-tooltip></q-btn
                    >
                  </div>
                  <!-- <div class="col-lg-5 col-md-5 col-sm-4 q-px-md text-primary" align='left'>
                  <q-btn
                    no-caps
                    color="indigo-9"
                    style="width:120px;height:40px"
                    dense
                    class="text-bold"
                    label="Back"
                    @click="backToHome"
                    icon="mdi-backspace-outline"
                  >
                  </q-btn>
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Website version code -->

    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-partner-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              ଆସନ୍ତୁ ଦୃତ ଗତିରେ ଆଗକୁ ବଡ଼ୁଥିବା ମେଡିକାଲ ଟୁରିଜିମ୍ ଇଣ୍ଡଷ୍ଟ୍ରିଜ୍‌ରେ
              ଯୋଗଦାନ କରିବା ପାଇଁ MangoHomz ସହିତ ହାତ ମିଳାନ୍ତୁ ।
            </div>
            <div class="row justify-center">
              <div
                class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                align="center"
              >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold"
                  label="Partner Registration"
                  @click="becomePartnerDialog = true"
                >
                  <q-tooltip>Partner Registration </q-tooltip></q-btn
                >
                <q-btn
                  no-caps
                  style="width: 200px; height: 40px"
                  color="primary"
                  class="text-bold q-ml-sm"
                  label="Agent Registration"
                  @click="becomeAgentDialog = true"
                >
                  <q-tooltip>Agent Registration </q-tooltip></q-btn
                >
                <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
              </div>
            </div>
            <div class="row text-justify" style="margin: 10px">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle"
                  v-for="item in partner_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
                <div class="row justify-center">
                  <div
                    class="row col-lg-12 col-md-12 col-sm-12 text-primary"
                    align="center"
                  >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold"
                      label="Partner Registration"
                      @click="becomePartnerDialog = true"
                    >
                      <q-tooltip>Partner Registration </q-tooltip></q-btn
                    >
                    <q-btn
                      no-caps
                      style="width: 200px; height: 40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="becomeAgentDialog = true"
                    >
                      <q-tooltip>Agent Registration </q-tooltip></q-btn
                    >
                    <!-- <q-btn
                      no-caps
                      style="width:200px;height:40px"
                      color="primary"
                      class="text-bold q-ml-sm"
                      label="Agent Registration"
                      @click="agentRegistrationOpenInNewTab()"

                    /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="partnerSignInForm">
      <q-card style="min-width: 350px">
        <q-toolbar class="bg-white text-primary rounded-borders">
          <q-toolbar-title class="text-subtitle1 text-weight-bold">
            Please Login with Your Credentials
          </q-toolbar-title>

          <q-btn
            flat
            dense
            color="primary"
            icon="close"
            @click="partnerSignInForm = false"
          >
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md" ref="patnerSignInForm">
            <q-input
              dense
              outlined
              v-model="partnerSignin.username"
              label="User Name"
              lazy-rules
              hide-bottom-space
            >
            </q-input>
            <q-input
              dense
              outlined
              v-model="partnerSignin.password"
              hide-bottom-space
              label="Pasword"
            >
            </q-input>
          </q-form>
        </q-card-section>
        <div class="row col-12 justify-center q-mb-sm">
          <q-btn
            outline
            no-caps
            class="q-mr-sm q-px-md text-bold"
            style="color: green"
            label="Sign In"
            @click="logInPartner()"
          >
          </q-btn>
        </div>
      </q-card>
    </q-dialog>
    <!-- Partner with us Dialog Box -->
    <q-dialog v-model="becomePartnerDialog" no-backdrop-dismiss>
      <q-card style="min-width: 350px">
        <q-toolbar
          class="bg-white text-primary text-align rounded-borders"
          style="top: 0; position: sticky; z-index: 100"
        >
          <q-icon
            ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
          ></q-icon>
          <q-toolbar-title class="text-subtitle1 text-weight-bold">
            Become A
            <q-icon
              style="min-width: 260px; margin-left: -20px; margin-top: 0%"
            >
              <q-img src="~assets/logos/logo.png"></q-img>
            </q-icon>
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

        <!-- <q-card-section>
          <div class="text-h6 text-bold text-primary">
            <q-icon
              ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
            ></q-icon>
            Become A Partner
          </div>
        </q-card-section> -->

        <q-card-section class="q-pt-none" style="margin-top: 30px">
          <q-form class="q-gutter-md" ref="patnerForm">
            <q-input
              dense
              outlined
              v-model="patnerForm.first_name"
              autofocus
              @keyup.enter="prompt = false"
              label="Full Name *"
              :rules="[required('Name')]"
              hide-bottom-space
              label-color="black"
            >
              <template v-slot:prepend>
                <q-icon name="person" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="patnerForm.mobile_no"
              label-color="black"
              @keyup.enter="prompt = false"
              label="Mobile No *"
              lazy-rules
              mask="##########"
              hide-bottom-space
              :rules="[required('Phone no'), validateMobileNumber]"
              >
              <template v-slot:prepend>
                <q-select
                  v-model="patnerForm.country_code"
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
              outlined
              v-model="patnerForm.whatapp_number"
              label-color="black"
              @keyup.enter="prompt = false"
              label="WhatsApp No *"
              lazy-rules
              mask="##########"
              hide-bottom-space
              :rules="[required('Phone no'), validateMobileNumber]"
              >
              <template v-slot:prepend>
                <q-select
                  v-model="patnerForm.whatsapp_countrycode"
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
              outlined
              v-model="patnerForm.email_id"
              label-color="black"
              @keyup.enter="prompt = false"
              hide-bottom-space
              label="Email-ID *"
              :rules="[required('Email'), email()]"
              ><template v-slot:prepend>
                <q-icon name="email" color="indigo-9" />
              </template>
            </q-input>

            <q-input
              dense
              outlined
              v-model="patnerForm.address"
              @keyup.enter="prompt = false"
              label="Address *"
              :rules="[required('Address')]"
              hide-bottom-space
              label-color="black"
            >
              <template v-slot:prepend> </template>
            </q-input>
            <q-select
              dense
              outlined
              use-input
              hide-selected
              :options="cityOptions"
              @filter="filterFnCities"
              option-value="city_id"
              option-label="city"
              fill-input
              options-dense
              lazy-rules
              hide-bottom-space
              input-debounce="0"
              v-model="patnerForm.city"
              label-color="black"
              label="City *"
              :rules="[required('City')]"
            >
              <!-- <template v-slot:append>
                <q-circular-progress
                  v-show="showOncheckComp"
                  v-if="city_name_loading"
                  size="24"
                  color="info"
                  indeterminate
                >

                </q-circular-progress>
              </template> -->
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>

            <q-input
              dense
              outlined
              lazy-rules
              mask="######"
              hide-bottom-space
              v-model="patnerForm.pin_code"
              label="Pincode *"
              label-color="black"
              :rules="[required('Pincode'), pinNumber()]"
            ></q-input>

            <q-input
              dense
              outlined
              v-model="patnerForm.nearest_hospital"
              @keyup.enter="prompt = false"
              label="Nearest Hospital *"
              label-color="black"
              hide-bottom-space
              :rules="[required('Nearest Hospital')]"
              ><template v-slot:prepend>
                <q-icon name="mdi-hospital-marker" color="indigo-9" />
              </template>
            </q-input>
            <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              hide-bottom-space
              fill-input
              :options="partnerTypes"
              v-model="patnerForm.partnerType"
              label-color="black"
              @keyup.enter="prompt = false"
              label="Type Of Partner *"
              :rules="[required('Partner Type')]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-select>
            <q-input
              dense
              outlined
              v-model="patnerForm.others"
              label-color="black"
              v-if="patnerForm.partnerType == 'Others'"
              label="Enter Type of Partner *"
              hide-bottom-space
              :rules="[required('Type of Partner')]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-input>
            <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              hide-bottom-space
              fill-input
              :options="govtNo"
              v-model="patnerForm.govtno"
              label-color="black"
              @keyup.enter="prompt = false"
              label="Official ID Proof  *"
              :rules="[required('Official ID Proof')]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-select>
            <q-input
              dense
              outlined
              v-model="patnerForm.govtcardno"
              label-color="black"
              v-if="patnerForm.govtno == 'Pan Card'"
              label="Enter Pan Card Number *"
              hide-bottom-space
              mask="AAAAA####A"
              :rules="[required('Pan Card Number'), panNumber()]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="patnerForm.govtcardno"
              label-color="black"
              v-if="patnerForm.govtno == 'Passport'"
              label="Enter Passport Number *"
              hide-bottom-space
              :rules="[required('Passport Number')]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="patnerForm.govtcardno"
              label-color="black"
              v-if="patnerForm.govtno == 'Driving Licience'"
              label="Enter Driving Licience Number *"
              hide-bottom-space
              :rules="[required('Driving Licience Number')]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-input>

            <!-- <q-file
              color="lime-11"
              bg-color="teal"
              class="hint-bold"
              dense
              filled
              clearable
              v-if="patnerForm.govtno == 'Pan Card'"
              v-model="pan_card_file"
              label="Upload*"
              type="file"
              accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              hint="Pan Card"
              :filter="checkFileSize"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file> -->
            <!-- <q-file
              color="lime-11"
              bg-color="teal"
              class="hint-bold"
              dense
              filled
              clearable
              v-if="patnerForm.govtno == 'Passport'"
              v-model="passport_file"
              label="Upload*"
              type="file"
              accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              hint="Passport"
              :filter="checkFileSize"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file>
            <q-file
              color="lime-11"
              bg-color="teal"
              class="hint-bold"
              dense
              filled
              clearable
              v-if="patnerForm.govtno == 'Driving Licience'"
              v-model="driving_licience_file"
              label="Upload*"
              type="file"
              accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              hint="Driving Licience"
              :filter="checkFileSize"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file> -->

            <!-- <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              hide-bottom-space
              fill-input
              label-color="black"
              class="col-6"
              :options="bankDetails"
              v-model="patnerForm.bankDetails"
              @keyup.enter="prompt = false"
              label="Bank Details  *"
              :rules="[required('Bank Details')]"
            >
              <template v-slot:prepend> </template>
            </q-select>

            <q-input
              dense
              class="col-6"
              outlined
              v-model="patnerForm.upi_id"
              label-color="black"
              autofocus
              v-if="patnerForm.bankDetails == 'UPI'"
              @keyup.enter="prompt = false"
              label="UPI Id*"
              :rules="[required('UPI Id')]"
              hide-bottom-space
            >
              <template v-slot:prepend> </template>
            </q-input>

            <q-input
              dense
              outlined
              v-model="patnerForm.bankAccountNo"
              label="Bank A/C No"
              label-color="black"
              class="col-3"
              v-if="patnerForm.bankDetails == 'Bank Details'"
              :rules="[required('Bank A/C no'), number()]"
            />
            <q-input
              dense
              outlined
              v-model="patnerForm.bankName"
              label="Bank Name"
              class="col-3"
              label-color="black"
              v-if="patnerForm.bankDetails == 'Bank Details'"
              :rules="[required('Bank Name')]"
            />
            <q-input
              dense
              outlined
              v-model="patnerForm.branchName"
              label="Branch Name"
              class="col-3"
              label-color="black"
              v-if="patnerForm.bankDetails == 'Bank Details'"
              :rules="[required('Branch')]"
            />
            <q-input
              dense
              outlined
              class="col-3"
              v-model="patnerForm.ifsc"
              v-if="patnerForm.bankDetails == 'Bank Details'"
              label="IFSC Code"
              label-color="black"
              :rules="[required('IFSC code')]"
            />

            <q-file
              color="lime-11"
              bg-color="teal"
              class="hint-bold col-3"
              dense
              filled
              clearable
              lable="Upload"
              v-if="patnerForm.bankDetails == 'Bank Details'"
              v-model="cancelled_cheque"
              type="file"
              accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              hint="Cancelled Cheque"
              :filter="checkFileSize"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file> -->
          </q-form>
        </q-card-section>
        <q-card-actions align="right" class="text-black q-mx-md q-my-0">
          <div class="col-12 q-mx-xs">
            <p style="width: 100%; font-family: verdana; font-size: 12px">
              <q-checkbox
                v-model="terms_conditions"
                dense
                size="28px"
                style="margin-bottom: 2px"
              />
              I'm Accepting to Become a Partner with MangoHomz.
            </p>
          </div>
        </q-card-actions>
        <q-card-actions align="center" class="text-primary">
          <!-- <q-btn flat label="Cancel" v-close-popup /> -->
          <q-btn
            push
            class="text-weight-bolder"
            label="Close"
            color="indigo-9"
            @click="closePartnerDialog"
          />
          <q-btn
            push
            class="text-weight-bolder"
            label="Register"
            color="indigo-9"
            :disable="this.terms_conditions == false"
            @click="onPartnerSignUpSubmit"
          />
        </q-card-actions>

        <!-- <q-card-section class="text-justify bg-green-1">
            <div>
              <h6 class="no-margin">Note:</h6>
              <ul>
                <li>
                  After Registration completed successfully, As a Partner you
                  need to upload the following documents to add your property
                  details.
                </li>
                <div>
                  <ol>
                    <li>PAN Card</li>
                    <li>Aadhar Card (optional)</li>
                    <li>GSTIN Document</li>
                    <li>Agreement Document</li>
                    <li>Undertaking Document</li>
                    <li>Indemnity Bond</li>
                    <li>Declaration Document</li>
                    <li>Indemnity Bond</li>
                    <li>Cancelled Cheque</li>
                  </ol>
                  - All the documents must be less than or equals to 1MB of
                  size.
                </div>
                <li>
                  If you are facing any problem while registration, Please
                  Contact
                  <span style="font-weight: 900">care@MangoHomz.com</span> (or)
                  <span style="font-weight: 900">8929982655</span>
                </li>
              </ul>
            </div>
          </q-card-section> -->
      </q-card>
    </q-dialog>
    <q-dialog v-model="becomeAgentDialog" no-backdrop-dismiss>
      <q-card style="min-width: 350px">
        <q-toolbar
          class="bg-white text-primary rounded-borders"
          style="top: 0; position: sticky; z-index: 100"
        >
          <q-icon>
            <q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img>
          </q-icon>
          <q-toolbar-title class="text-subtitle1 text-weight-bold">
            Become A
            <q-icon
              style="min-width: 260px; margin-left: -20px; margin-top: 0%"
            >
              <q-img src="~assets/logos/AGENT.png"></q-img
            ></q-icon>
          </q-toolbar-title>
          <q-btn
            dark
            padding="none"
            class="justify-end"
            icon="close"
            style="margin: -10px"
            color="primary"
            @click="closeAgentDialog"
          >
            <q-tooltip>close</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section class="q-pt-none" style="margin-top: 30px">
          <q-form class="q-gutter-md" ref="agentForm">
            <q-input
              dense
              outlined
              label-color="black"
              v-model="agentForm.first_name"
              autofocus
              @keyup.enter="prompt = false"
              label="Full Name *"
              :rules="[required('Name')]"
              hide-bottom-space
            >
              <template v-slot:prepend>
                <q-icon name="person" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              label-color="black"
              v-model="agentForm.mobile_no"
              @keyup.enter="prompt = false"
              label="Mobile No *"
              lazy-rules
              mask="##########"
              hide-bottom-space
              :rules="[required('Phone no'), validateMobileNumber]"
              >
              <template v-slot:prepend>
                <q-select
                  v-model="agentForm.country_code"
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
              outlined
              v-model="agentForm.whatapp_number"
              label-color="black"
              @keyup.enter="prompt = false"
              label="WhatsApp No *"
              lazy-rules
              mask="##########"
              hide-bottom-space
              :rules="[required('WhatApp No'), validateMobileNumber]"
            >
              <template v-slot:prepend>
                <q-select
                  v-model="agentForm.whatsapp_countrycode"
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
              outlined
              label-color="black"
              v-model="agentForm.email_id"
              @keyup.enter="prompt = false"
              hide-bottom-space
              label="Email-ID *"
              :rules="[required('Email'), email()]"
              ><template v-slot:prepend>
                <q-icon name="email" color="indigo-9" />
              </template>
            </q-input>

            <q-input
              dense
              outlined
              v-model="agentForm.address"
              @keyup.enter="prompt = false"
              label="Address *"
              :rules="[required('Address')]"
              hide-bottom-space
              label-color="black"
            >
              <template v-slot:prepend> </template>
            </q-input>
            <q-select
              dense
              outlined
              use-input
              hide-selected
              :options="cityOptions"
              @filter="filterFnCities"
              option-value="city"
              option-label="city"
              fill-input
              hide-bottom-space
              options-dense
              input-debounce="0"
              v-model="agentForm.city"
              label="City *"
              label-color="black"
              :rules="[required('City')]"
            >
              <template v-slot:no-option>
                <q-icon name="mdi-city" color="indigo-9" />

                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>

            <q-input
              dense
              outlined
              lazy-rules
              mask="######"
              hide-bottom-space
              v-model="agentForm.pin_code"
              label="Pincode *"
              label-color="black"
              :rules="[required('Pincode'), pinNumber()]"
            ></q-input>

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
              label-color="black"
              @keyup.enter="prompt = false"
              label="Official ID Proof  *"
              :rules="[required('Official ID Proof')]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-select>
            <q-input
              dense
              outlined
              v-model="agentForm.govtcardno"
              label-color="black"
              v-if="agentForm.govtno == 'Pan Card'"
              label="Enter Pan Card Number*"
              hide-bottom-space
              mask="AAAAA####A"
              :rules="[required('Pan Card Number'), panNumber()]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="agentForm.govtcardno"
              label-color="black"
              v-if="agentForm.govtno == 'Passport'"
              label="Enter Passport Number *"
              hide-bottom-space
              :rules="[required('Passport Number')]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="agentForm.govtcardno"
              label-color="black"
              v-if="agentForm.govtno == 'Driving Licience'"
              label="Enter Driving Licience Number *"
              hide-bottom-space
              :rules="[required('Driving Licience Number')]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-home-city" color="indigo-9" />
              </template>
            </q-input>
            <q-file
              color="lime-11"
              bg-color="teal"
              class="hint-bold"
              dense
              filled
              clearable
              v-if="agentForm.govtno == 'Pan Card'"
              v-model="pan_card_file"
              label="Upload *"
              type="file"
              accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              hint="Pan Card"
              :filter="checkFileSize"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file>
            <q-file
              color="lime-11"
              bg-color="teal"
              class="hint-bold"
              dense
              filled
              clearable
              v-if="agentForm.govtno == 'Passport'"
              v-model="passport_file"
              label="Upload *"
              type="file"
              accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              hint="Passport"
              :filter="checkFileSize"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file>
            <q-file
              color="lime-11"
              bg-color="teal"
              class="hint-bold"
              dense
              filled
              label-color="black"
              clearable
              v-if="agentForm.govtno == 'Driving Licience'"
              v-model="driving_licience_file"
              label="Upload *"
              type="file"
              accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              hint="Driving Licience"
              :filter="checkFileSize"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file>
            <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              hide-bottom-space
              fill-input
              label-color="black"
              class="col-6"
              :options="bankDetails"
              v-model="agentForm.bankDetails"
              @keyup.enter="prompt = false"
              label="Bank Details  *"
              :rules="[required('Bank Details')]"
            >
              <template v-slot:prepend> </template>
            </q-select>

            <q-input
              dense
              class="col-6"
              outlined
              v-model="agentForm.upi_id"
              label-color="black"
              v-if="agentForm.bankDetails == 'UPI'"
              @keyup.enter="prompt = false"
              label="UPI Id *"
              :rules="[required('UPI Id')]"
              hide-bottom-space
            >
              <template v-slot:prepend> </template>
            </q-input>

            <q-input
              dense
              outlined
              v-model="agentForm.bankAccountNo"
              label="Bank A/C No *"
              label-color="black"
              class="col-3"
              v-if="agentForm.bankDetails == 'Bank Details'"
              :rules="[required('Bank A/C no'), number()]"
            />
            <q-input
              dense
              outlined
              v-model="agentForm.bankName"
              label="Bank Name *"
              class="col-3"
              label-color="black"
              v-if="agentForm.bankDetails == 'Bank Details'"
              :rules="[required('Bank Name')]"
            />
            <q-input
              dense
              outlined
              v-model="agentForm.branchName"
              label="Branch Name *"
              class="col-3"
              label-color="black"
              v-if="agentForm.bankDetails == 'Bank Details'"
              :rules="[required('Branch')]"
            />
            <q-input
              dense
              outlined
              class="col-3"
              v-model="agentForm.ifsc"
              v-if="agentForm.bankDetails == 'Bank Details'"
              label="IFSC Code *"
              label-color="black"
              :rules="[required('IFSC code')]"
            />

            <q-file
              color="lime-11"
              bg-color="teal"
              class="hint-bold col-3"
              dense
              filled
              clearable
              lable="Upload *"
              v-if="agentForm.bankDetails == 'Bank Details'"
              v-model="cancelled_cheque"
              type="file"
              accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              hint="Cancelled Cheque"
              :filter="checkFileSize"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" color="white" />
              </template>
            </q-file>

            <q-input
              dense
              outlined
              v-model="agentForm.nearest_hospital"
              @keyup.enter="prompt = false"
              label="Referral Hospital Name *"
              label-color="black"
              hide-bottom-space
              :rules="[required('Referral Hospital Name')]"
              ><template v-slot:prepend>
                <q-icon name="mdi-hospital-marker" color="indigo-9" />
              </template>
            </q-input>
            <span class="text-bold" style="min-width: 50px"
              >Can add multiple hospitals with comma (,)
            </span>
          </q-form>
        </q-card-section>
        <q-card-actions align="right" class="text-black q-mx-md q-my-0">
          <div class="col-12 q-mx-xs">
            <p style="width: 100%; font-family: verdana; font-size: 12px">
              <q-checkbox
                v-model="terms_conditions"
                dense
                size="28px"
                style="margin-bottom: 2px"
              />
              I'm Accepting to Become a Partner with MangoHomz.
            </p>
          </div>
        </q-card-actions>
        <q-card-actions align="center" class="text-primary">
          <!-- <q-btn flat label="Cancel" v-close-popup /> -->
          <q-btn
            push
            class="text-weight-bolder"
            label="Close"
            color="indigo-9"
            @click="closeAgentDialog"
          />
          <q-btn
            push
            :disable="this.terms_conditions == false"
            class="text-weight-bolder"
            label="Register"
            color="indigo-9"
            @click="onAgentSignUpSubmit"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="partnerTerms_Conditions">
      <q-card style="min-width: 350px">
        <q-card-section class="row col-12">
          <q-tabs
            v-model="tab"
            inline-label
            outside-arrows
            mobile-arrows
            class="bg-primary text-white shadow-2 col-12 row"
          >
            <q-tab name="one" label="Accommodation" />
            <q-tab name="two" label="Food" />
            <q-tab name="three" label="Travel" />
            <q-tab name="four" label="Equipment" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="one">
              <div
                class="text-center"
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                ACCOMMODATION PARTNER AGREEMENT
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                This Agreement is made on the ………….day of January 2022 BETWEEN
                MANGOHOMZ Technologies Private Limited (CIN Number:
                U74994KA2020PTC131569), a Company incorporated under the
                Companies Act, 2013. The company is registered at (307-B, Wing
                No.11, 9th Cross, Srikanteshwar Nagar, Mahalakshmi Layout,
                BANGALORE Bangalore KA 560096 IN)) through Mr , Authorized
                person of the First Party which expression shall unless
                repugnant to the context or meaning thereof include its
                successors and permitted assigns and shall mean and include
                their respective legal heirs, successors, executors, attorneys,
                administrators and assigns.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                ACCOMMODATION PARTNER (NAME) R/o __________________ hereinafter
                referred as Second Party which expression shall unless repugnant
                to the context or meaning thereof include its successors and
                permitted assigns hereinafter shall mean and include their
                respective legal heirs, successors, executors, attorneys,
                administrators and assigns.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Whereas, The First party MANGOHOMZ (MH) coordinates medical
                trips around the world and is bridging the gap between patient
                and the hospital, it provides patient friendly accommodation
                near medical hubs to medical travelers.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Whereas the Second Party is owner/lessor of premises agrees to
                join MH platform will provide Trade License/Hotel
                Registration/NOC/ Fire Department. clearance/GST other statutory
                papers to the First Party in providing accommodation/assistance
                of stay to the medical travelers.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Whereas the parties wish to record in this Agreement the terms
                and conditions of the usage of the accommodation/premises of the
                Second Party by First Party.Now therefore, in light of the
                mutual promises contained herein and other good and valuable
                consideration, the receipt and sufficiency of which is hereby
                acknowledged, the Parties agree as follows:
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                1. Definitions
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.1. ACCOMMODATION PARTNER(NAME), means (details of owner and
                premises).
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.2. “Approvals” means the internal corporate approvals required
                to be obtained by the Second Party and First Party respectively,
                for arranging stay of the medical travelers.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.3. “Consideration” means payment made in lieu of the services.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.4. “Completion" means completion of the Documentation of
                making (no. of rooms) available to first party by second
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.5. "Proceedings" means any proceeding, suit or action arising
                out of or in connection with this agreement.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                2. Interpretation
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2.1. Unless other wise or unless the context other wise
                requires, in this Agreement .
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2.2. Headings are for convnience only and shall not effect
                interpretation of the Agreement.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2.3. Where a word or phrase is defined,other part of speech or
                grammatical forms of the word or phrase shall have corresponding
                meanings .
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2.4. Refrence to recitals, Clauses and Exhibits shall be
                refrence to be Recitals, Clause and Exhibits of this Agreement.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2.5. No change, alterations or modifications here to shall be
                effective unless in writing and signed by authorized
                representative of the parties here to and if required, upon
                approval by the competent authorities of each party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                3. Representations of the First Party:
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.1 The Second party hereby warrant and represent to the First
                Party as follows: The representations and Warranties in this
                Article 3 shall remain in full force and effect notwithstanding
                the actual handing over the premises for usage as and when
                booked by the First party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.2 The Second party has full right, power and authority to
                enter into execute and deliver this Agreement and to perform the
                obligations, undertaking and transactions set forth herein, and
                this agreement has been duly and validly executed and delivered
                by the Second party and constitutes its legal, valid and binding
                obligation, enforceable against it in accordance with its terms.
              </div>

              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.3. The First party has full legal right and authority to enter
                into, execute and deliver this Agreement and to perform the
                obligations, undertaking and transactions set forth herein, and
                this agreement has been duly and validly executed and delivered
                by the First party and constitutes its legal, valid and binding
                obligation, enforceable against it in accordance with its terms.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                3.4 Legal Validity
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                This Agreement constitutes valid and legally binding obligations
                of the First party enforceable in accordance with its respective
                terms. The Second party has all requisite power to permit usage
                of premises as permissible under the Indian Laws.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                3.5 Non-Conflict
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The execution, delivery and performance of this Agreement will
                not (a) Contravene any existing applicable law to which Second
                party is subject, (b) Conflict with, or result in any breach of
                any of the terms of, or constitute a default under, any
                agreement or other instrument to which Second party is party or
                is subject or by which it or any of the Assets is bound,(c)
                Contravene or conflict with any provision of constitutional
                documents or (d) Contravene, violate, or conflict with any
                licenses, approvals, or consents obtained.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                3.6. Business
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.1 The First Party will deploy trained MH attendant to take
                care of the Medical Traveler and their companions 24/7 who book
                a stay with Second Party, such attendant will be at the premises
                of the Second party 3-4 hours before the arrival of the user and
                shall be permitted to provide service to the MH guest
              </div>

              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.2 The First Party will provide Basic Home Medical Kit to the
                Second Party, who shall keep it handy at all times during the
                stay of the medical traveler/MH guest.
              </div>

              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.3 The First Party shall be permitted to install patient
                friendly material/equipments and other such facility to prevent
                patient to fall and meet similar requirements of the medical
                traveler.
              </div>

              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.4 The First Party will give access to the second party of
                Terminal of MH web and App for the Accommodation Partner to know
                the details of the business done.
              </div>

              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.5 The second party will allow access to the first party to
                review the rooms.
              </div>

              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.6 In case a medical traveler wants to check in before time
                or late check out then the First party shall pay to second party
                as per mutually agreed rate.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.7 Second party will allow first party to do branding on the
                property for increasing visibility & also will do different kind
                of promotion for making the property preferred choice for
                medical travelers.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.8. The Second party shall ensure the availability of
                information with respect to the rooms on real-time basis and
                ensure that at no point of time the room is available for
                booking with some other online travel agents but not with the
                First party (MangoHomz). The Second party shall be solely
                responsible for rates made available on MangoHomz platform owned
                & managed by First Party. First Party shall have no
                responsibility with respect to the rates provided by the Second
                party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.9. The 2nd party shall maintain rate parity, and room
                availability parity between the 1st Party (MangoHomz) and other
                travel agents, other sales channels of third parties and the 2nd
                party itself.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.6.10. Bookings of the rooms against the customer reservations
                communicated by the 1st Party will be purely at the choice of
                the customers
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                4. Consideration
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                4.1 On each & every transaction first party will keep 20% as
                platform usage fee and remit 80% to the second party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                4.2 A user of MH app makes a booking with the MH of medical
                travel a notification will be received by the second Party. The
                second party shall accordingly make arrangements.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                4.3 Second Party will receive 10% of the booking amount from
                First party/ MH on or before 72 hours of the check in date of
                the medical traveler.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                4.4 That the second party will receive the balance payment in
                its registered bank account within 7 working days of successful
                check out of the medical traveler.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                5. Cancellations
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5.1 in case of cancellation before 7 days of check in there will
                be no payment to the second party by First Party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5.2. The second Party is not permitted to cancel any of the
                bookings without 72 hours prior notice to the First Party and
                seeking approval to do so
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5.3. In case of cancellation by the user within 72 hours of
                check in, Second party will get another 5 % of the booking
                amount from the first party; this amount will be paid within
                7working days of cancellation.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5.4. During the period between the signing of this Agreement and
                the Completion of other formalities, nothing will be done in the
                conduct of the management of the affairs of ACCOMODATION
                PARTNER(NAME), which would be likely to prejudice the interests
                of Mangohomz
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                6. Indemnity
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The Accommodation partner agrees to assume liability for, and do
                hereby indemnify, protect, save and keep harmless Mangohomz and
                its successors, assigns, agents, directors, servants and
                shareholders, in particular, from and against any and all
                claims, damages, losses, liabilities, obligations, demands,
                suits, penalties, judgments or causes of action and all legal
                proceedings, whether civil or criminal, penalties, fines and
                other sanctions, and any costs and expenses in connection
                therewith including, without limitation, legal fees and expenses
                of whatever kind and nature (whether or not also indemnified
                against by any other person under any other document), which may
                result from or grow or arise in any manner out of the ownership,
                title, acceptance, non-acceptance, rejection, of the taking the
                premises by Mangohomz.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                7. Dispute Resolution
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                7.1. Governing Law.—This Agreement shall be governed by and
                construed and enforced in accordance with the laws applicable in
                India.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                7.2 Any dispute, controversy or claim arising out of or in
                relation to this agreement or the breach, termination or
                invalidity thereof, if the same cannot be settled amicably
                between the parties to this agreement, the same shall be
                referred to Arbitration and Arbitration shall be conducted as
                per the provisions of the Arbitration and Conciliation Law of
                India and the decision of the Arbitrator shall be final and
                binding arbitration.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Whenever a Party shall decide to institute arbitration
                proceedings, it shall give written notice to that effect to the
                other Party. The Parties shall attempt to resolve the dispute
                between them. If the Parties are still unable to resolve the
                dispute, the Party giving the notice may institute the
                Arbitration Proceeding in terms of the Arbitration &
                Conciliation Act - 1996 and the venue of the Arbitration shall
                be at Delhi/Bengaluru, India and that the Courts at New Delhi/
                Bengaluru, India shall have exclusive jurisdiction in all
                matters arising there under.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Pending to resolution of a dispute by arbitration, the parties
                shall, except in event of the termination continue to perform
                all their obligation under this agreement, without prejudice to
                final adjustment in accordance with the arbitration award
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                7.3 Finality of Award.—Any award shall be by majority vote and
                shall be final and binding on the Parties. Nothing contained in
                this section shall prevent either Party from seeking temporary
                restraining orders, injunctions or other temporary relief in any
                court of competent jurisdiction at Delhi only .
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                8. CONFIDENTIALTY
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Each party hereby warrants and undertakes that all information
                acquired by any Party from the other party shall be related as
                confidential by the recipient and shall not be used other than
                for the purpose of contemplated by the Agreement without the
                consent from the Party providing the information, until such
                information becomes generally available to the public.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                9. Termination
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                9.1. This Agreement may be terminated by the parties in case
                they find breaches of any of the provisions hereof or if any of
                the representations and warranties made hereunder or are found
                to be false.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                9.2 Notice.—The Party terminating this Agreement shall give a
                written termination notice of 90 (Ninety) days to the other
                Party. In the event that after the receipt of the notice the
                Party in default fails to remedy the breach to the satisfaction
                of the terminating Party, this Agreement shall terminate upon
                the expiry of the said period.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                10. Miscellaneous
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                10.1 Force Majeure.—Neither Party shall be considered in default
                or be liable to the other Party for any delay in performance or
                non-performance caused by circumstances beyond the reasonable
                control of such Party, including but not limited to acts of God,
                Govt . Acts (except as otherwise enumerated herein) explosion,
                fire, flood, war, whether declared or not, pandemic, accident,
                labour strike or sabotage.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                10.2 Except where the nature of the event shall prevent it from
                doing so, the parties suffering such force majeure event shall
                notify the other parties in writing within ten (10) days after
                the occurrence of such force majeure event and shall in every
                instance, to the extent it is capable of doing so, uses its best
                efforts to remove or remedy such cause with all reasonable
                dispatch.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                10.3 Modifications and Amendments. Modifications and amendments
                to this Agreement shall be effective only if made in writing.
                This also applies to a waiver of the written form. Evidence of
                the contents of this Agreement may only be produced in a form of
                written documents duly executed by authorized representatives of
                the Parties hereto.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                In Witness Whereof, the Parties have caused this Agreement to be
                executed on the day and year first above written.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Signed by and on behalf of First Party (MangoHomz Technologies
                Pvt. Ltd.)
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Name :__________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Designation :__________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Mobile :__________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Address :__________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Signed by Second Party (_____________)
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Name :__________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Designation :__________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Mobile :__________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Address :__________________________________
              </div>
            </q-tab-panel>
            <q-tab-panel name="two">
              <div
                class="text-center"
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                FOOD PARTNER AGREEMENT
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                This Agreement is made on the  ………….day of March 2022 BETWEEN
                MANGOHOMZ Technologies Private Limited (CIN Number:
                U74994KA2020PTC131569), a Company incorporated under the
                Companies Act, 2013 registered at (307-B, Wing No.11, 9th Cross,
                Srikanteshwar Nagar, Mahalakshmi Layout, BANGALORE Bangalore KA
                560096 IN) for one year with end date …………… through  Mr
                  ,            Director is the First Party which expression
                shall unless repugnant to the context or meaning thereof include
                its successors and permitted assigns and shall mean and include
                their respective legal heirs, successors, executors, attorneys,
                administrators and assigns.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                FOOD PARTNER(NAME/ADDRESS) R/o………hereinafter referred as Second
                Party which expression shall unless repugnant to the context or
                meaning thereof include its successors and permitted assigns
                hereinafter shall mean and include their respective legal heirs,
                successors, executors, attorneys, administrators and assigns.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Whereas The First party MANGOHOMZ (MH) coordinates medical trips
                around the world and is bridging the gap between patient and the
                hospital, it provides patient-friendly services near medical
                hubs to medical visitors.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND WHEREAS the second party is running a cloud
                kitchen/restaurant at …….. agreed to provide food to the medical
                travelers, patients other visitors and guests being user of the
                First Party platform.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND WHEREAS on the said representations of the Second Party, the
                First Party has accepted the offer of the Second Party and
                agreed to permit the Second Party to supply food on the terms
                and conditions mutually discussed, agreed upon and recorded
                hereunder:
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                NOW THIS AGREEMENT WITNESSETH AS UNDER:
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1. This Agreement shall remain effective for a mutually agreed
                period and shall terminate automatically after the expiry of
                agreed period. The term of this agreement during its tenure may
                be revised from time to time according to the necessity that may
                crop up during progress of the contract by mutual consent. If
                any of the parties wants to terminate the agreement during the
                tenure, it must give a notice of at least 15 days. This
                agreement may be renewed, if required with suitable
                modifications on mutual discussions and consent.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2. If, the Second Party fails to meet the expectation of the
                First Party or breaches the term of this Agreement, First Party
                will issue a written notification to rectify any such breaches
                of this Agreement. The 2nd party shall rectify and improve
                within fifteen (15) days of The First Party written notification
                of such breaches, The First Party shall be entitled to terminate
                the service with a 15 day notice if the 2nd party fails to
                comply to this.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3. That the First Party awards the contract to provide food to
                the medical travelers on their demand in the first party's
                designated premises. The Second Party accepts the contract to
                supply food, beverages and snacks to the medical
                travelers, guests and visitors of the First Party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                4. That the Second Party shall offer the services, in terms of
                this Agreement, and Adhere to best practices as per guideline
                laid down by First Party with best hygienic practices and should
                have the following:
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                a. Shall have FASSAI certificate for empanelment.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                b. Filtered water supply; hygienic cooking.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                c. Second Party will provide with food menu and it’s cost on the
                First Party platform for the medical traveler. Any alteration in
                food menu by the 2nd party shall be done with prior written
                consent of 1st party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                d.  Second Party to provide Food License/Municipal Trade
                License/GST License.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                e. Second Party to allow First Party supervisor/Manager to
                physically verify the kitchen / food standard and FASSAI papers
                as and when required
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5. Since we are agreeing that 2nd party shall update their menu
                on our platform the users will be allowed select from menu.
                Hence this point may not be relevant.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                6. The Second Party shall ensure not to supply stale food.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                7. The Second Party will not serve alcoholic beverages.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                8. That the Second Party shall ensure that in the event of any
                complaint about the quality of the food or snacks/beverages or
                the hygienic conditions, the Second Party shall immediately
                withdraw the stale or sub-standard quality food and supply good
                quality items as replacement immediately and the Second Party
                will be solely responsible and legally bound for such supplies.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                9. The Second Party hereby unconditionally undertakes to
                indemnify and keep indemnified the First Party, its directors,
                officers, agents, employees and authorized representatives from
                and against any taxes of whatever nature and all loss, cost,
                damages, expense and liability including attorneys fees and
                other litigation expenses which may be incurred or suffered by
                the other and which may arise out of or result from
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                a) Any breach of any of its obligations, covenants or agreement
                contained in this Agreement; and
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                b) Any and all actions, suits, proceedings, claims, judgments,
                costs, expenses, including incurred in enforcing this indemnity.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                c) That in the event of any doubt, dispute or difference arising
                between the parties in respect of or touching these presents or
                for determination of their rights, duties, obligations or
                liabilities during the continuance of this Agreement or
                thereafter, then the same shall be referred to the sole
                arbitrator to be appointed by the first party. The decision of
                the Arbitrator will be final and binding on both the parties.
                The provisions of Arbitration & Conciliation Act, 1996 or any
                statutory modification and re-enactment thereof will apply to
                such arbitration provided; however, in all matters the venue of
                arbitration proceedings will be ___ and will have the
                jurisdiction at ______ only.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                d) The second Party will submit an Indemnity Bond before
                providing food for the user of First Party platform.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                10 Payments and settlements
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The 2nd party shall be compensated on weekly basis (payout
                cycle) towards supply of foods and beverages against orders from
                users of 1st party plat form. A statement of supply shall be
                generated from 1st party platform and shared with 2nd party
                along with pay outs. Any discrepancies in the payouts shall be
                brought to the notice of 1st party by the 2nd party on or before
                next payout cycle. Applicable TDS under income Tax Act and GST
                Act shall be withheld by the 1st party from the payout to the
                2nd party. All the payouts will be made vis banking channel only
                to the registered bank account of the 2nd party, no cash payment
                will be done at any circumstances.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                11 STATUTORY COMPLIANCES
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                (a) The second party shall ensure solely that it complies with
                all the applicable laws pertaining to the present agreement,
                keep all necessary records for statutory compliance and the
                first party shall not be held responsible for the same.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                (b) The second party shall be solely responsible for compliance
                for the provisions of the Prevention of food Adulteration Act.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                (c) The Second Party should have updated Food-related approvals
                and FASSAI during the tenure of this agreement.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                IN WITNESS WHEREOF the parties hereto have signed this Agreement
                on the day, month and year first herein above written in the
                presence of:
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.FIRST PARTY
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Signature______________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2.SECOND PARTY
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Signature________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Name___________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                Witness 1
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Name___________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Signature________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                  font-weight: bold;
                "
              >
                Witness2
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Name___________________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Signature________________________________
              </div>
            </q-tab-panel>
            <q-tab-panel name="three">
              <div
                class="text-center"
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                TRAVEL PARTNER AGREEMENT
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                his Agreement is made on the  ………….day of April 2022 BETWEEN
                MANGOHOMZ Technologies Private Limited (CIN Number:
                U74994KA2020PTC131569), a Company incorporated under the
                Companies Act, 2013 registered at (307-B, Wing No.11, 9th Cross,
                Srikanteshwar Nagar, Mahalakshmi Layout, BANGALORE Bangalore KA
                560096 IN) for one year with end date ………..through  Mr
                  ,            Director is the First Party which expression
                shall unless repugnant to the context or meaning thereof include
                its successors and permitted assigns and shall mean and include
                their respective legal heirs, successors, executors, attorneys,
                administrators and assigns.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Whereas The First party MANGOHOMZ (MH) coordinates medical trips
                around the world and is bridging the gap between patient and the
                hospital, providing patient-friendly services near medical hubs
                to medical visitors.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                WHEREAS the Second Party is engaged in the business arranging
                cabs/ Vehicle/Ambulance services; has offered to host its cabs/
                Vehicle/Ambulance services on MangoHomz platform for the use by
                the users for their medical travel. The Travel Partner has
                agreed to provide point to point service i.e from
                Airport/Railway station to designated Accommodation booked by
                users on the platform of First Party .
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND WHEREAS on the said representations of the Second Party, the
                First Party has accepted the offer of the Second Party on the
                terms and conditions mutually discussed, agreed upon and
                recorded hereunder: The Second Party/Vehicle Owner hereby agrees
                to provide the services to the users of First Party as and when
                the users of platform of First Party put in a request
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The Parties agrees that this Agreement terminates upon the End
                Date specified above.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Notwithstanding anything to the contrary in this Agreement or
                any Exhibits, either Party may terminate this Agreement prior to
                the End Date with at least one (1) day notice.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                If this Agreement is terminated prior to the End Date, the
                Parties will work together to settle the accounts within 15 days
                from the date of termination of agreement.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The Second Party will allow First Party Supervisor/Manager to
                inspect the vehicle / physically verify insurance and driver
                license/Fitness certificate/pollution papers etc
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                Insurance
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The Second Party hereby warrants to First Party that Second
                Party possess car insurance that covers personal injury as well
                as the Vehicle.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                Indemnity
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Regardless of insurance coverage, second party shall fully
                indemnify the First Party for any accident, loss, damage, and
                legal actions, including reasonable fees that First Party
                suffers due to Second Party’s use of Vehicle during the term of
                this Agreement.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                Warranty
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The Second Party represents that to the best of his knowledge
                and belief that the Vehicle is in sound and safe condition and
                free of any known faults or defects that would affect its safe
                operation under normal use.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Partner will abide by the best practices set by First Party. The
                driver will behave properly with the user while commuting. The
                vehicle should be neat and clean. The drivers should have valid
                commercial license. The vehicle must have valid fitness
                certificate, pollution certificate and third party insurance.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Arbitration
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                In the event that the Parties cannot amicably resolve a dispute
                or damage claim resulting from this Agreement, the Parties agree
                to resolve any such dispute or damage claim by arbitration. The
                arbitration proceeding shall be conducted in (City), (State), in
                accordance with the rules of the Arbitration Act with one (1)
                arbitrator to be selected by mutual agreement of the Parties. If
                the Parties cannot agree on an arbitrator, then the Arbitrator
                shall be appointed as per the provisions of applicable Law.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Disputes and Governing Law.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                This Agreement is subject to interpretation as per the laws of
                India, and the parties shall refer any unresolved disputes to
                the exclusive jurisdiction of courts situated in MH
                administrative areas as Bengaluru, Delhi and Mumbai. No action,
                arising out of the transactions under this Agreement may be
                brought by either Party more than one year after the cause of
                action has accrued.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                No alteration or modification of this Agreement shall be valid
                unless made in writing and signed by an authorized Affiliate of
                each Party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The waiver by either Party of a breach of any provision of the
                Agreement shall not operate or be construed as a waiver of any
                subsequent breach and any waiver must be in writing and signed
                by an authorized Affiliate of the Parties hereto.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                If any provision of this Agreement is held to be invalid or
                unenforceable, the remaining provisions shall continue in full
                force and effect.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Any notice or other communication required or permitted
                hereunder shall be given in writing to the other Party at the
                address stated above, or at such other address as shall be given
                by either Party to the other in writing.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Any terms of this Agreement which by their nature extend beyond
                its termination remain in effect until fulfilled, and apply to
                respective successors and rightful assignees.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                IN WITNESS WHEREOF, the Parties have signed this Agreement as of
                the day and year first above written
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Any notice or other communication required or permitted
                hereunder shall be given in writing to the other Party at the
                address stated above, or at such other address as shall be given
                by either Party to the other in writing.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                First Party
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Witness 1
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Second Party
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Witness 2
              </div>
            </q-tab-panel>
            <q-tab-panel name="four">
              <div
                class="text-center"
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                MEDICAL EQUIPMENT PARTNER AGREEMENT
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                This Agreement is made on the  ………….day of March 2022 BETWEEN
                MANGOHOMZ Technologies Private Limited (CIN Number:
                U74994KA2020PTC131569), a Company incorporated under the
                Companies Act, 2013 registered at (307-B, Wing No.11, 9th Cross,
                Srikanteshwar Nagar, Mahalakshmi Layout, BANGALORE Bangalore KA
                560096 IN) for one year with end date …………… through  through
                Mr            ,            Director is the First Party which
                expression shall unless repugnant to the context or meaning
                thereof include its successors and permitted assigns and shall
                mean and include their respective legal heirs, successors,
                executors, attorneys, administrators and assigns.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                AND.,
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                ………. Is a MEDICAL EQUIPMENTS SUPPLIER, a Company incorporated
                under the Companies Act, 2013 registered at (address) through
                Mr            ,            Director is the Second Party which
                expression shall unless repugnant to the context or meaning
                thereof include its successors and permitted assigns and shall
                mean and include their respective legal heirs, successors,
                executors, attorneys, administrators and assigns WHEREAS, Second
                Party is manufacturer/supplier of Medical equipment /Dealer
                providing Medical Equipments on rent, to be used by physicians
                and other health care professionals in the treatment of
                patients;
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                WHEREAS, the First Party has agreed to list standard/home
                medical equipment on MangoHomz platform for the user to find and
                book the Medical Equipment’s supplied by Second Party during the
                travel of medical traveller, as per the term set forth herein;
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                THEREFORE, in consideration of the mutual covenants and
                conditions contained in this Agreement, First Party and Second
                Party agree as follows:
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                1.0 Use and Ownership of Equipment
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.1 Second Party agrees to provide First Party with
                standard/home medical equipment.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.2 While Booking for standard medical equipment relevant Terms
                &Conditions will be there which is enclosed as an annexure.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.3 The Second Party shall provide to first party relevant
                Dealership licenses/ Trade License/ PAN and GST Details.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.4 Second Party shall abide by the Standard Practices set by
                First Party, that is the standard home medical equipment are in
                good and working condition, timely delivery of the booked
                equipment and equipment should be passed by competent authority.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.5 First Party agrees to list the Medical Equipment during the
                term of this Agreement in a manner that is consistent with
                specifications, directions for use, operating and training
                manuals.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.6 The Equipment is, and shall always during this Agreement
                remain, the property of Second Party, the 1st party shall
                neither have nor acquire any right, title or interest therein as
                a result of this Agreement. Second Party assumes all
                responsibility and expense for shipping and insurance of the
                Equipment to and from First Party with such responsibility
                commencing when Equipment first leaves en-route to First Party,
                and expiring upon such time as the Equipment is returned to
                Second Party at a designated location. The upkeep of the
                equipment shall be the responsibility of First Party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.7 Both First Party and Second Party acknowledge and agree that
                the purpose of this Agreement is for a limited use of the
                Equipment by the user only, and not for the purpose of renting,
                leasing or purchasing the Equipment.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                1.8 The Second Party will allow First Party Supervisor/Manager
                to inspect the Equipment standard and BIS certification
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                2.0 Term and Termination
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2.1 This Agreement shall be for a term of …… commencing on the
                effective date, which term may be extended upon the mutual,
                written agreement of the parties.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                2.2 Each party shall have the right to terminate this Agreement
                at any time, upon ten (10) days written notice to the other
                party. Following such termination, 1st party shall return
                equipment to the 2nd party and collect an acknowledgement of
                such return.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                3.0 Warranty and Maintenance
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.1 Second Party hereby warrants and represents that all
                approvals, permits and licenses required by any state or local
                law, regulation or ordinance including, without limitation,
                approvals from Food and Drug Administration (FDA), for use of
                the Equipment by user of First Party. 2nd party shall ensure
                that all the approvals shall be in force during the entire
                tenure of this agreement.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                3.2 Second Party hereby warrants and represents to First Party
                that, to the best of its knowledge, it is the owner of all
                rights and title to the Equipment or that it has a valid license
                to use or distribute the Equipment in accordance with the terms
                of this Agreement.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                4.0 Use and Alterations
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                4.1 First Party shall use the Equipment in a reasonable and
                lawful manner, and shall not make any alterations, additions or
                improvement to the Equipment without the prior written consent
                of SUPPLIER.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                4.2 Any alterations, additions or improvements made to or for
                the Equipment by First Party, its employees, agents or students,
                shall belong to Second Party.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                5.0 Delivery, Inspection, Surrender
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5.1 Second Party shall deliver the Equipment viz oxygen
                cylinder, wheelchair, Tripod etc. in good working condition to
                First Party at its place of business. If installation or set-up
                of the Equipment is required before its use, the Second Party
                shall provide sufficient personnel, trained in the operation and
                use of the Equipment, to install the Equipment at First Party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5.2 Second Party shall have the right to inspect the Equipment,
                while it is installed and in service at First Party, during
                business hours upon prior notice to First Party.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5.3 At the expiration of this Agreement, second party shall
                retrieve the Equipment, at its own cost and expense, from First
                Party, who shall maintain the Equipment in as good condition as
                existed at the commencement of this Agreement, reasonable wear
                and tear expected.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                5.4 SECOND PARTY representatives shall be registered with FIRST
                PARTY’s Online Compliance Network and shall comply with all
                applicable policies and procedures concerning Second Party
                access to FIRST PARTY facilities, staff and Users.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                6.0 Loss and Damage
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                6.1 SECOND PARTY shall bear the risk of loss, theft, destruction
                or damage to the Equipment, provided that such loss results
                directly not from the actions by FIRST PARTY, its employees,
                agents and does not result from negligence, wilful misconduct by
                FIRST PARTY or its employees, agents.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                7. Indemnification
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                SECOND PARTY shall defend, indemnify and hold harmless FIRST
                PARTY, its officers, employees, and agents harmless from and
                against any and all liability, loss, expense (including
                reasonable attorneys’ fees), or claims for injury or damages
                arising out of the performance of this Agreement but only in
                proportion to and to the extent such liability, loss, expense,
                attorneys’ fees, or claims for injury or damages are caused by
                or result from negligence or will full misconduct by SECOND
                PARTY or its employees, or agents.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                7. Indemnification
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                SECOND PARTY shall defend, indemnify and hold harmless FIRST
                PARTY, its officers, employees, and agents harmless from and
                against any and all liability, loss, expense (including
                reasonable attorneys’ fees), or claims for injury or damages
                arising out of the performance of this Agreement but only in
                proportion to and to the extent such liability, loss, expense,
                attorneys’ fees, or claims for injury or damages are caused by
                or result from negligence or will full misconduct by SECOND
                PARTY or its employees, or agents.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                8. MAINTENANCE AND REPAIRS.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                First “Party is solely responsible for protecting the Equipment
                from damage (ordinary wear and tear excepted). First “Party
                shall use every reasonable precaution to prevent loss or damage
                to the Equipment and to prevent injury to persons and property
                through its use. First “Party shall not modify the Equipment.
                Upon request by First “Party, Second Party shall provide
                qualified personnel to repair, replace or adjust the Equipment
                within a reasonable time to assure its performance in accordance
                with the specifications. Where the Equipment is damaged due to
                the negligence or recklessness of the First Party, the First
                Party shall pay for all such repairs.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                9. Privacy
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                9.1 Second Party acknowledges that during the term of this
                Agreement, SECOND PARTY may have access to trade secrets,
                proprietary information, and confidential information of First
                Party. Second Party agrees to protect and preserve the
                confidential and proprietary nature of First Party’s
                confidential and/or proprietary information and shall not
                disclose such information to any other person or entity, except
                to the extent required to carry out the duties and
                responsibilities set forth in this Agreement, or as may be
                otherwise required by law. Upon the request of First Party at
                any time and upon termination of this Agreement, all copies of
                confidential and/or proprietary information shall be returned to
                First Party
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                10. payouts and settlements The 2nd party shall be compensated
                on weekly basis (payout cycle) towards the usage of its
                equipments by the 2nd party . payouts will be made to the
                registered bank account of 2nd party. Any discrepancies in the
                payouts shall be brought to the notice of 1st party on or before
                next payout cycle.
              </div>
              <div
                style="font-family: verdana; font-size: 14px; font-weight: bold"
              >
                11. SEVERABILITY.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                The invalidity or unenforceability of any provision hereof,
                whether in whole or in part, for any reason, will not affect the
                remaining provisions, and all Terms and Conditions will be
                construed in all respects as if any such invalid or
                unenforceable provision(s) were omitted. IN WITNESS WHEREOF,
                authorized representatives of the parties hereto have executed
                this Agreement on the dates indicated below.
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                FIRST PARTY By: __________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Name:______________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Date: _________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                SECOND PARTY By: ______________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Name:______________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Date: _________________________
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Witness1:
              </div>
              <div
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-top: 10px;
                  text-align: justify;
                "
              >
                Witness2:
              </div>
            </q-tab-panel>
          </q-tab-panels>
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
          Thank You for joining with us.
        </div>
        <div class="footer-head text-center" style="font-family: verdana">
          Your registration details have been sent to registered email id
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
              ><q-tooltip class="bg-info text-body2">Facebook</q-tooltip></q-btn
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

    <q-dialog v-model="agentThanksDialog" no-backdrop-dismiss>
      <q-card style="min-width: 350px">
        <q-btn
          dark
          size="sm"
          class="justify-end lt-sm"
          style="margin-left: 300px"
          icon="close"
          color="primary"
          @click="closeagentThanksDialog()"
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
          @click="closeagentThanksDialog()"
        >
          <q-tooltip>close</q-tooltip>
        </q-btn>

        <q-toolbar class="bg-white text-primary rounded-borders">
          <q-toolbar-title class="text-subtitle1 text-weight-bold">
            <q-img src="~assets/web_site/Landing page top.jpg"></q-img>
          </q-toolbar-title>
        </q-toolbar>
        <div class="footer-head text-center" style="font-family: verdana">
          Thank You for joining with us.
        </div>
        <div class="footer-head text-center" style="font-family: verdana">
          Your registration details have been sent to registered email id
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
              ><q-tooltip class="bg-info text-body2">Facebook</q-tooltip></q-btn
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
    <!-- <q-dialog v-model="registrationThanksDialog">
      <q-card style="min-width: 350px">
        <q-card-section class="row col-12">
          <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/web_site/Thanks for register copy.jpg" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <q-item-section
                    ><p>
                      <span class="text-bold">Near your hospital:</span
                      ><br />With our meticulously planned, fast-growing
                      pan-India network, you are sure to find a MangoHomz
                      accommodation near the hospital of your choice.
                    </p></q-item-section
                  >
                </q-item-section>
              </q-item-section>
            </q-item>

        </q-card-section>
      </q-card>
    </q-dialog> -->
  </div>
</template>
<style>
@media screen and (max-width:320px) {
  .ag-reg {
    padding-top: 5% !important;
    margin-left: -7px !important;
    width: 210px !important;
  }
}
@media screen and (max-width:480px) {
  .ag-reg {
    padding-top: 5% !important;
    width: 207px !important;
    margin-left: -11px !important;
  }
}

</style>
<script>
import { mapState, mapActions } from "vuex";
import validations from "../../helpers/validations";
import { api } from "boot/axios";

const signMaster = () => {
  return {
    first_name: "",
    last_name: "",
    country_code: "",
    whatsapp_countrycode: "",
    mobile_no: "",
    email_id: "",
    city: "",
    nearest_hospital: "",
    partnerType: "",
    pan_card_file: [],
    passport_file: [],
    cancelled_cheque: [],
    driving_licience_file: [],
  };
};
export default {
  name: "partner-with-us",
  data() {
    return {
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
      showOncheckComp: false,
      city_name_loading: false,
      showUserNameTickmark: false,
      showUserNameDupTickmark: false,
      model: "",
      becomePartnerDialog: false,
      registrationThanksDialog: false,
      agentThanksDialog: false,
      becomeAgentDialog: false,
      partnerSignInForm: false,
      partnerTerms_Conditions: false,
      ...validations,
      title: "Partner With Us",
      terms_conditions: false,
      tab: "one",
      cityOptions: [],
      pan_card_file: [],
      passport_file: [],
      cancelled_cheque: [],
      driving_licience_file: [],
      patnerForm: {
        first_name: "",
        last_name: "",
        mobile_no: "",
        country_code: "+91 IND",
        whatapp_number: "",
        whatsapp_countrycode: "+91 IND",
        email_id: "",
        address: "",
        city: "",
        pin_code: "",
        nearest_hospital: "",
        partnerType: "",
        // govtcardno:"",
        others: "",
        // upi_id: "",
        // bankAccountNo: "",
        // bankName: "",
        // branchName: "",
        // ifsc: "",
      },
      partnerSignin: {
        username: "",
        password: "",
        role: "partner",
      },
      partnerTypes: [
        "Accommodation Partner",
        "Food Partner",
        "Travel Partner",
        "Medical Equipment Partner",
        "Others",
      ],
      bankDetails: ["UPI", "Bank Details"],
      govtNo: ["Pan Card", "Passport", "Driving Licience"],
      agentForm: {
        first_name: "",
        mobile_no: "",
        country_code: "+91 IND",
        whatapp_number: "",
        whatsapp_countrycode: "+91 IND",
        email_id: "",
        city: "",
        address: "",
        pin_code: "",
        govtno: "",
        govtcardno: "",
        nearest_hospital: "",
        upi_id: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        partnerType: "Booking Agent",
      },
      //Come, join hands with MangoHomz to join the fast-growing Indian Medical Tourism Industry

      partner_content_english: [
        {
          content:
            "With the Indian Medical Tourism Industry consistently growing at a CAGR of 18% and projected to garner over 20% of the global medical tourism market share soon, MangoHomz is an idea whose time has come!",
        },
        {
          content:
            "As one of the early movers with ambitious plans, we, at MangoHomz are all set to make our presence felt in the Indian Medical Stays category.",
        },
        {
          content:
            "We understand that medical tourism is a team effort that requires collaborations with multiple partners specializing in providing food, transport, medicines, medical devices and more. You could become a MangoHomz partner in any of the following capacities:",
        },
        {
          content: "1. MangoHomz Accommodation Partner (MHAP):",
        },
        {
          content:
            "If you have a property near a medical hub or facility, here’s your opportunity to turn it into a MangoHomz property and benefit from the fast-growing medical tourism industry.",
        },
        {
          content: "2. MangoHomz Transport Partner (MHTP)",
        },
        {
          content:
            "If you have a fleet of cars and a team of well-trained drivers, you could well become our Transport Partner.",
        },
        {
          content: "3. MangoHomz Food Partner (MHFP)",
        },
        {
          content:
            "If your kitchen is equipped to serve nutritious food to our guests – patients and their companions staying at MangoHomz properties then you can become our partner.",
        },
        {
          content: "4. MangoHomz Medical Equipment Partner (MHMEP)",
        },
        {
          content:
            "If you own or run a pharmacy that can provide medicines and medical devise 24x7, or a diagnostic centre, join us as our MEP (Medical Equipment Partner)",
        },
        {
          content: "5. MangoHomz Booking Agent  (MHBA)",
        },
        {
          content:
            "If you are a travel agent who keeps getting enquiries for accommodation during medical tourism from domestic or international tourists, you could become a MangoHomz Booking partner.",
        },
        {
          content:
            "If you wish to become a MangoHomz partner, get in touch with us today",
        },
      ],
      partner_content_hindi: [
        {
          content:
            "भारतीय मेडिकल टूरिज्म उद्योग लगातार 18% की सीएजीआर से बढ़ रहा है और जल्द ही ये विश्व के मेडिकल टूरिज्म बाजार में 20% से ज्यादा की हिस्सेदारी हासिल कर लेगा, MangoHomz एक ऐसा विचार है जिसका समय अब आ गया है!",
        },
        {
          content:
            "कई महत्वाकांक्षी योजनाओं के साथ, हम यानि की MangoHomz, मेडिकल टूरिज्म के क्षेत्र में शुरुआती मूवर्स में से एक हैं, और हम भारत में मेडिकल स्टे के क्षेत्र में अपनी प्रभावी उपस्थिति दर्ज कराने के लिए पूरी तरह से तैयार हैं।",
        },
        {
          content:
            "हम समझते हैं कि मेडिकल टूरिज्म एक सामूहिक प्रयास है, जिसे एक समान लक्ष्य वाली टीम के साथ हासिल किया जा सकता है। अगर आप फ़ूड, ट्रेवल, मेडिसिन या मेडिकल इक्विपमेंट्स इत्यादि की सप्लाई करने में विशेषज्ञता रखते है तो आप इस बड़े अभियान में हमारी सफलता में भागीदार बन सकते हैं।",
        },
        {
          content: "1.MangoHomz Accommodation Partner (MHAP):",
        },
        {
          content:
            "यदि आपके पास भारत में किसी भी मेडिकल हब या उससे सम्बंधित किसी भी सुविधा के पास कोई प्रॉपर्टी है, तो इसे MangoHomz स्टे प्रॉपर्टी में बदलने और हमारा एकोमोडेशन पार्टनर बन कर तेजी से बढ़ते मेडिकल टूरिज्म के क्षेत्र में लाभ उठाने का भरपूर अवसर है।",
        },
        {
          content: "2.MangoHomz ट्रांसपोर्ट पार्टनर (एमएचटीपी):",
        },
        {
          content:
            "अगर आपके पास ट्रांसपोर्ट के लिए कारों का बेड़ा है और साथ ही अच्छी तरह से प्रशिक्षित ड्राइवरों की टीम है, तो आप हमारे ट्रांसपोर्ट पार्टनर बन सकते हैं।",
        },
        {
          content: "3.MangoHomz फ़ूड पार्टनर (MHFP):",
        },
        {
          content:
            "यदि आपका किचन MangoHomz प्रॉपर्टी में रहने वाले हमारे मेहमानों (मरीजों और उनके साथियों) को स्वादिष्ट और पौष्टिक भोजन परोसने के लिए तैयार है तो आप हमारे फ़ूड पार्टनर बन सकते हैं।",
        },
        {
          content: "4.MangoHomz मेडिकल इक्विपमेंट पार्टनर (एमएचएमईपी):",
        },
        {
          content:
            "यदि आप ऐसी फार्मेसी के मालिक हैं या आप कोई फार्मेसी चलाते हैं जो 24x7 दवाएं और मेडिकल इक्विपमेंट सप्लाई कर सकती है, या आप एक डायग्नोस्टिक सेंटर चलाते है, तो आप हमसे हमारे एमईपी (मेडिकल इक्विपमेंट पार्टनर) के रूप में जुड़ सकते हैं।",
        },
        {
          content: "5.MangoHomz बुकिंग एजेंट पार्टनर (एमएचबीएपी):",
        },
        {
          content:
            "यदि आप एक ट्रैवल एजेंट हैं जो घरेलू या अंतरराष्ट्रीय ट्रैवेलर्स के लिए मेडिकल ट्रिप के दौरान एक सुविधाजनक और आरामदायक आवास की व्यवस्था कर सकते हैं, तो आप मैंगोहोमज़ बुकिंग पार्टनर बन सकते हैं।",
        },
        {
          content:
            "अगर आप MangoHomz पार्टनर बनना चाहते हैं, तो आज ही हमसे संपर् करें।",
        },
      ],
      partner_content_assamese: [
        {
          content:
            "ইণ্ডিয়ান মেডিকেল টুৰিজম ইণ্ডাষ্ট্ৰিয়ে নিৰন্তৰভাৱে আগুৱাইছে য’ত চি.এ.জি.আৰ. হৈছে ১৮% যি অতি শীঘ্ৰেই চুব পাৰিব গ্লোবেল টুৰিজম মাৰ্কেট চেয়াৰৰ ২০%ৰ লক্ষস্থান।সেয়ে এতিয়া মেংগ’হ’মচৰ দৰে আইডিয়াৰ হৈছে ভাল সময়।",
        },
        {
          content:
            "উচ্চাভিলাসী পৰিকল্পনা লৈ আগৰনুৱা হিচাপে, আমি মেংগ’হ’মচে ইণ্ডিয়ান মেডিকেল স্টে বিভাগত আমাৰ উপস্থিতিৰ অনুভব দিবলৈ সাজু।",
        },
        {
          content:
            "আমি বুজোঁ যে চিকিৎসা পৰ্যটন হৈছে এক দলীয় প্ৰচেষ্টা যাৰ বাবে খাদ্য, পৰিবহন, ঔষধ, মেডিকেল ডিভাইচ আৰু বহুতো যোগান ধৰাৰ বাবে বিশেষ ধৰনৰ মাল্টিপল-পাৰ্টনাৰৰ প্ৰয়োজন। আপুনিও হ’ব পাৰে সাধ্যানুসাৰি তাৰে এজন মেংগ’হ’মচ পাৰ্টনাৰ, যেনে:",
        },
        {
          content: "১.মেংগ’হ’মচ এক’ম’ডেচন পাৰ্টনাৰ:",
        },
        {
          content:
            "যদি আপোনাৰ মেডিকেল হাবৰ ওচৰে-পাঁজৰে কোনো সম্পত্তি আছে, আপুনি সেই আৱাসক এতিয়া ৰূপান্তৰিত কৰিব পাৰে মেংগ’হ’মচ আৱাসলৈ আৰু লাভ ল’ব পাৰে ফাষ্ট-গ্ৰ’য়িং মেডিকেল টুৰিজম ইণ্ডাষ্ট্ৰিৰ।",
        },
        {
          content: "২.মেংগ’হ’মচ ট্ৰান্সপোৰ্ট পাৰ্টনাৰ:",
        },
        {
          content:
            "আপোনাৰ যদি বহুকেইখন গাড়ীৰ সৈতে প্ৰশিক্ষিত ড্ৰাইভাৰো আছে, আপুনি হৈ যাব পাৰে আমাৰ এক ট্ৰান্সপোৰ্ট পাৰ্টনাৰ।",
        },
        {
          content: "৩.মেংগ’হ’মচ ফুড্ পাৰ্টনাৰ:",
        },
        {
          content:
            "যদি আপোনাৰ পাকঘৰত মেংগ’হ’মচত থকা আলহী ও সংগীৰ বাবে সুষম আহাৰৰ জোগাৰ কৰিব পৰাকৈ সকলো সৰঞ্জাম মজুত আছে, আপুনি হৈ পৰক আমাৰ ফুড্ পাৰ্টনাৰ।",
        },
        {
          content: "৪.মেংগ’হ’মচ মেডিকেল ইকুইপমেন্ট্‌ পাৰ্টনাৰ:",
        },
        {
          content:
            "যদি আপোনাৰ নিজা বা চলাই থকা ফাৰ্মেচি আছে, যি ঔষধ বা মেডিকেল ডিভাইচ ২৪x৭ যোগান ধৰিব পাৰে বা ডায়েগন’ষ্টিক চেন্টাৰ আছে, আমাৰ মেডিকেল ইকুইপমেন্ট্‌ পাৰ্টনাৰ হৈ যাওক।",
        },
        {
          content: "৫.মেংগ’হ’মচ বুকিং এজেন্ট পাৰ্টনাৰ:",
        },
        {
          content:
            "যদি আপুনি এজন ট্ৰভেল-এজেন্ট যি চিকিৎসাযাত্ৰাত অহা ডমেষ্টিক বা ইন্টাৰনেচনেল টুৰিষ্টক পৰ্যটনৰ সময়,আৱাস জাতীয় খবৰ দিয়ে, আপুনি হৈ পৰিব পাৰে আমাৰ মেংগ’হ’মচ বুকিং এজেন্ট পাৰ্টনাৰ।",
        },
        {
          content:
            "যদিহে আপুনি মেংগ’হ’মচ পাৰ্টনাৰ হ’ব খোজে তেনেহলে আজিয়েই আমাৰ লগত যোগাযোগ কৰক।",
        },
      ],
      partner_content_bengali: [
        {
          content:
            "ভারতীয় চিকিৎসা সফর শিল্প শতকরা ১৮% হারে এখন নিয়মিতভাবে বৃদ্ধি পাচ্ছে , বিশেষজ্ঞদের মত অনুযায়ী ভারত বিশ্বের চিকিৎসা সফর বাজারের শতকরা ২০% শিগগীরই অধিকার করতে চলেছে, তাই ম্যাঙ্গো হোমZ-এর ভাবনা সময়োপযোগী। ",
        },
        {
          content:
            "ভারতীয় চিকিৎসাবাসন বিভাগে ম্যাঙ্গো হোমZ নিজের সুনির্দিষ্ট স্থান নিশ্চিত, কারণ আমরা এই বিভাগে প্রথম থেকেই কাজ করার জন্য সময়ানুগ পরিকল্পনা নিয়ে এসেছি।",
        },
        {
          content:
            "আমরা জানি চিকিৎসা সফর শিল্পের কাজ একক নয়, এটা দলগত কাজ। তাই দরকার বহু সহযোগী যারা খাবার-দাবার, পরিবহন, ওষুধপত্র, চিকিৎসার যন্ত্রপাতি ও এরকম আরো অনেক বিষয়ে বিশেষগ্য। আপনিও ম্যাঙ্গোহোমZ-এর সহযোগী হতে পারেন নিচে লেখা সব বিভাগেই: ",
        },
        {
          content:
            "১। Mango Homz Accommodation Partner (MHAP) ম্যাঙ্গোহোমZ আবাসন সহযোগী:",
        },
        {
          content:
            "যদি কোন চিকিৎসা কেন্দ্রের কাছাকাছি আপনার বাড়ি হয়, আপনি আপনার বাড়ি ম্যাঙ্গোহোমZ এর হাতে তুলে দিয়ে, দ্রুত বেড়ে ওঠা চিকিৎসা সফর শিল্পর সদব্যাবহার করুন। ",
        },
        {
          content:
            "  ২। MangoHomz Transport Partner (MHTP) ম্যাঙ্গোহোমZ পরিবহন সহযোগী : ",
        },
        {
          content:
            "আপনি কি বেশ কিছু গাড়ির মালিক? সাথে যদি শিক্ষিত সব চালক থাকে, আপনি আমাদের পরিবহণ সহযোগী হতে পারেন। ",
        },
        {
          content: "৩।MangoHomz Food Partner (MHFP) ম্যাঙ্গোহোমZ আহার সহযোগী:",
        },
        {
          content:
            "আমাদের চিকিৎসাধীন অতিথি ও তার সাথীদের স্বাস্থ্যকর খাবার পরিবেশনে আপনার রান্নাঘর যদি তৈরি থাকে, আপনিও আমাদের সহযোগী হতে পারেন।  ",
        },
        {
          content:
            "৪। MangoHomz Medical Equipment Partner (MHMEP) ম্যাঙ্গো হোমZ চিকিৎসা সরঞ্জাম  সহযোগী:",
        },
        {
          content:
            "২৪x৭ ওষুধপত্র ও চিকিৎসার প্রয়োজনীয় যন্ত্রপাতি দেবার মত ওষুধের দোকান বা চিকিৎসার জন্য প্রয়োজনীয় পরীক্ষা করার কেন্দ্র যদি আপনার নিজস্ব হয় বা আপনার অধীনে থাকে, আপনি আমাদের সাথে এমইপি (চিকিৎসা সরঞ্জাম  সহযোগী) হিসেবে যোগ দিতে পারেন।",
        },
        {
          content:
            "৫। MangoHomz Booking Agent  (MHBA) ম্যাঙ্গোহোমZ বুকিং এজেনট সহযোগী:",
        },
        {
          content:
            "আপনি কি ট্র্যাভেল এজেন্ট? চিকিৎসা সফরের জন্য আপনার ক্লায়েন্টেরা কি থাকার জায়গার কথাও জিগ্যেস করে? আপনি আমাদের সাথে বুকিং সহযোগী হিসেবে যোগ দিতে পারেন।",
        },
        {
          content: "ম্যাঙ্গোহোমZ-এর সহযোগী হতে চাইলে আজই যোগাযোগ করুন। ",
        },
      ],
      partner_content_Oriya: [
        {
          content:
            "ଭାରତୀୟ ମେଡିକାଲ ଟୁରିଜିମ୍ ଇଣ୍ଡଷ୍ଟ୍ରିଜ୍ ଅଠର ପର୍‌ସେଣ୍ଟ୍‌ଜ ହିସାବରେ ପ୍ରତିବର୍ଷ ବଡ଼ୁଛି ଏବଂ ଭାରତ ବିଶ୍ୱ ମେଡିକାଲ ଟୁରିଜିମ୍‌ରେ ଏକ ବଡ଼ କେନ୍ଦ୍ର ଭାବରେ ପ୍ରତିଷ୍ଠିତ ହୋଇଛି । ",
        },
        {
          content:
            "ଆମେ MangoHomz ରେ ସୁଷମ ଖାଦ୍ୟ, ପରିବହନ ଏବଂ ମେଡିକାଲ ଉପକରଣ ପ୍ରଦାନ କରୁଥିବା ସଂସ୍ଥାକୁ ଆମ ସହିିତ ଯୋଡ଼ି ହେବାରେ ଆହ୍ୱାନ କରୁଛୁ । ",
        },
        {
          content:
            "ଆପଣ ନିମ୍ନଲିଖିତ ଯେ କୌଣସି କ୍ଷେତ୍ରରେ ଥିଲେ, ଆପଣ MangoHomz ର ଅଂଶିଦାର ହୋଇ ପାରନ୍ତିା",
        },
        {
          content: "1. MangoHomz ଆକୋମୋଡେସନ୍ ପାର୍ଟନର (MHAP): ",
        },
        {
          content:
            "ଯଦି ଆପଣଙ୍କର ମେଡ଼ିକାଲ ନିକଟରେ ରୋଗୀ ରହଣୀ ପାଇଁ ଉପଯୁକ୍ତ ଘର ଅଛି ତାହା ହେଲେ MangoHomz ସହିତ ଯୋଗଦାନ କରିପାରିବେ ।",
        },
        {
          content: "2. MangoHomz ଟ୍ରାନ୍ସପୋର୍ଟ ପାର୍ଟନର (MHTP): ",
        },
        {
          content:
            "ଯଦି ଆପଣଙ୍କର ଏକ ଗାଡ଼ି ଅଛି ଏବଂ ଭଲ ତାଲିମ୍ ପ୍ରାପ୍ତ ଡ୍ରାଇଭରମାନଙ୍କର ଏକ ଟିମ୍ ଅଛି ତେବେ ଆପଣ ଆମର ପରିବହନ ପାର୍ଟନର ହିସାବରେ ଯୋଗଦାନ କରିପାରିବେ ।",
        },
        {
          content: "3.MangoHomz ଫୁଡ୍ ପାର୍ଟନର : (MHFP): ",
        },
        {
          content:
            "ଯଦି ଆପଣଙ୍କର କ୍ଲାଉଡ କିଚେନ୍ କିମ୍ବା ରେଷ୍ଟୁରାଣ୍ଟ ଅଛି ଏବଂ ଆମର ଅତିଥିମାନଙ୍କୁ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଯୋଗାଇ ପାରିବେ, ତେବେ ଆପଣ MangoHomz ରେ ଯୋଗଦାନ କରିପାରିବେ ।",
        },
        {
          content: "4. MangoHomz ମେଡିକାଲ ଇକ୍ୟୁପ୍‌ମେଣ୍ଟ ପାର୍ଟନର (MHMEP): ",
        },
        {
          content:
            "ଆପଣ ଯଦି ଫାର୍ମାସୀ କିମ୍ବା ମେଡ଼ିକାଲ ଉପକରଣ ବ୍ୟବସାୟ ସହିତ ଜଡ଼ିତ ତାହାହେଲେ ଆପଣ MangoHomz ସହିତ ଯୋଡ଼ି ହୋଇପାଇିବେ ।",
        },
        {
          content: "5. MangoHomz ବୁକିଂ ଏଜେଣ୍ଟ ପାର୍ଟନର (MHBAP): ",
        },
        {
          content:
            "ଯଦି ଆପଣ ଜଣେ ଟ୍ରାଭେଲ ଏଜେଣ୍ଟ ଅଟନ୍ତି, ଯିଏ ଘରୋଇ କିମ୍ବା ଆନ୍ତର୍ଜାତୀୟ ପର୍ଯ୍ୟଟକଙ୍କ ଠାରୁ ଡାକ୍ତରୀ ପର୍ଯ୍ୟଟନ ସମୟରେ ରହଣି ପାଇଁ ଅନୁସନ୍ଧାନ ଜାରି ରଖନ୍ତି, ତେବେ ଆପଣ",
        },
        {
          content:
            " MangoHomz ବୁକିଂ ପାର୍ଟନର ହୋଇପାରନ୍ତି | ଯଦି ଆପଣ ଏକ MangoHomz ଅଂଶୀଦାର ହେବାକୁ ଇଚ୍ଛା କରନ୍ତି, ତେବେ ଆଜି ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ |",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.account.user,
      cities: (state) => state.master.cities,
    }),
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];
      return user;
    },
    // filterFn:{
    //   get () {
    //       const rs = this.cities.filter((row) => row.city === this.model);
    //       return rs.length === 1 ? rs[0] : rs;
    //   },
    //   set (v) {
    //     console.log("VV", v)
    //     this.model = v.city;
    //   }
    // },
  },
  mounted() {
    this.$store.dispatch("account/getPartnerMenus");
    this.$store.dispatch("dropdown/loadAllCities");
    this.$store.dispatch("master/loadCities");
  },
  methods: {
    ...mapActions("account", ["partnerLogin", "logout", "login"]),
    ...mapActions("account", [
      "partnerRegistration",
      "registrationThanksDialogOpen",
    ]),
    ...mapActions("account", ["agentRegistration", "agentThanksDialogOpen"]),

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
              if (this.patnerForm.partnerType == "Others") {
                this.patnerForm.partnerType = this.patnerForm.others;
              }

              const formData = new FormData();
              // formData.append("cancelCheque", this.cancelled_cheque);
              formData.append("panCardFile", this.pan_card_file);
              formData.append("passportFile", this.passport_file);
              formData.append(
                "drivingLicienceFile",
                this.driving_licience_file
              );

              formData.append(
                "partnerFormDetails",
                JSON.stringify(this.patnerForm)
              );

              this.partnerRegistration({
                formData,
                dialogOpen: this.registrationThanksDialogOpen,
              });
              this.$refs.patnerForm.reset();
              this.becomePartnerDialog = false;
              this.patnerForm.first_name ="";
              this.patnerForm.mobile_no ="";
              this.patnerForm.whatapp_number ="";
              this.patnerForm.email_id ="";
              this.patnerForm.address ="";
              this.patnerForm.city ="";
              this.patnerForm.pin_code ="";
              this.patnerForm.nearest_hospital ="";
              this.patnerForm.partnerType ="";
              this.patnerForm.others ="";
              this.patnerForm.govtno ="";
              this.patnerForm.govtcardno ="";
              // this.patnerForm.govtcardno ="";



            })
            .onCancel(() => {
              this.becomePartnerDialog = true;
            });
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
              const formData = new FormData();
              formData.append("cancelCheque", this.cancelled_cheque);
              formData.append("panCardFile", this.pan_card_file);
              formData.append("passportFile", this.passport_file);
              formData.append(
                "drivingLicienceFile",
                this.driving_licience_file
              );

              formData.append(
                "agentFormDetails",
                JSON.stringify(this.agentForm)
              );
              this.agentRegistration({
                formData,
                agentdialogOpen: this.agentThanksDialogOpen,
              });
              this.$refs.agentForm.reset();
              this.becomeAgentDialog = false;
               this.agentForm.first_name ="";
              this.agentForm.mobile_no ="";
              this.agentForm.whatapp_number ="";
              this.agentForm.email_id ="";
              this.agentForm.address ="";
              this.agentForm.city ="";
              this.agentForm.pin_code ="";
              this.agentForm.govtno ="";
              this.agentForm.govtcardno ="";
              this.pan_card_file=[];
              this.passport_file=[];
              this.driving_licience_file=[];
              this.agentForm.bankDetails="";
              this.agentForm.upi_id="";
              this.agentForm.bankAccountNo="";
              this.agentForm.bankName="";
               this.agentForm.ifsc="";
              this.agentForm.branchName="";
              this.cancelled_cheque=[];


            })
            .onCancel(() => {
              this.becomeAgentDialog = true;
            });
        }
      });
    },
    logInPartner() {
      this.$refs.patnerSignInForm.validate().then((success) => {
        if (success) {
          this.partnerLogin(this.partnerSignin);
        }
      });
    },
    onReset() {
      this.$refs.customerLoginForm.reset();
    },
    onReset1() {
      this.$refs.partnerLoginForm.reset();
    },
    openPartnerTerms_conditions() {
      this.partnerTerms_Conditions = true;
    },
    onPartnerSignUpReset() {
      this.$refs.patnerForm.reset();
    },

    filterFnCities(val, update) {
      if (val === "") {
        update(() => {
          this.cityOptions = this.cities;
        });
        return this.cityOptions;
      }
      update(() => {
        const needle = this.cities.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.cityOptions = needle;
        return this.cityOptions;
      });
    },

    agentRegistrationOpenInNewTab() {
      const routeData = this.$router.resolve({ path: "/agentFormAnotherPage" });
      window.open(routeData.href, "_blank");
    },

    checkFileSize(files) {
      return files.filter((file) => file.size < 1048576);
    },
    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 1 MB`,
      });
    },
    closePartnerDialog() {
      this.becomePartnerDialog = false;
    },
    registrationThanksDialogOpen() {
      this.registrationThanksDialog = true;
    },
    agentThanksDialogOpen() {
      this.agentThanksDialog = true;
    },

    closeAgentDialog() {
      this.becomeAgentDialog = false;
    },
    closeThanksDialog() {
      this.registrationThanksDialog = false;
    },
    closeagentThanksDialog() {
      this.agentThanksDialog = false;
    },
    checkCityName() {
      this.showOncheckComp = true;
      this.city_name_loading = true;
      console.log("this.patnerForm.city", this.patnerForm.city);
      console.log("this.patnerForm.city[0]", this.patnerForm.city[0]);
      setTimeout(() => {
        api
          .get("userAccount/getCityName/" + this.patnerForm.city)
          .then((response) => {
            console.log(response.data);
            this.showOncheckComp = false;
            this.city_name_loading = false;
            if (response.data[0].c == 0) {
              this.$q.notify({
                color: "positive",
                message: "No Duplicates Found!",
              });
              this.showUserNameTickmark = true;
              this.showUserNameDupTickmark = false;
            } else {
              this.$q.notify({
                color: "negative",
                message: "User Name Already exists!",
              });
              this.regDetails.user_name = "";
              this.showUserNameTickmark = false;
              this.showUserNameDupTickmark = true;
            }
          });
      }, 1000);
    },
    // filterFn (val, update, abort) {
    //   update(() => {
    //     // const needle = val.toLowerCase()
    //     // this.options = this.cities[i].filter(v => v.toLowerCase().indexOf(needle) > -1)

    //     // if(this.options.length>0 && this.model!=''){
    //     //   this.model = this.options[0];
    //     // }
    //     options.value = filter(val, oriOptions)
    //   })
    // },
    // checkCities(city_arr, needle) {
    //   let a = 0;
    //   console.log("NNNN");
    //   console.log("needle", needle);
    //   let samVal = city_arr[a].city.toLowerCase().indexOf(needle) > -1;
    //   console.log("samVal",  samVal);
    //   if(needle.toLowerCase() == samVal) {
    //     console.log("IFFF");
    //     a++
    //   }
    // },
    // filterFn (val, update) {
    //   let city_arr = this.cities;
    //   console.log("city_arr", city_arr)

    //   if (val === '') {
    //     update(() => {
    //       this.cities = this.cities
    //     })

    //     return this.cities
    //   }

    //   update(() => {
    //       console.log("this.cities", this.cities)
    //     const needle = val.toLowerCase()
    //     // for(let i = 0; i < city_arr.length; i++) {
    //       // let arry1 = city_arr.filter(v => v[i].city.toLowerCase().indexOf(needle) > -1);
    //       // console.log("arry1", arry1);
    //       let arry1 = city_arr.filter(this.checkCities(city_arr, needle))
    //       console.log("arry1", arry1)
    //     // }
    //   })
    // },

    // filterFn (val, update) {
    //   this.citiesArr = []
    //   console.log(this.cities)
    //   if (val === '') {
    //     update(() => {
    //       this.cities = this.cities
    //     })
    //     return
    //   }
    //   update(() => {
    //       // console.log("val", val)
    //       const needle = val.toLowerCase()
    //       // console.log("needle", needle)
    //       for(let i = 0; i < this.cities.length; i++) {
    //         let inputVal = this.cities[i].city
    //         console.log("inputVal", inputVal);
    //         if(needle.length == inputVal.length) {
    //           console.log("IF 1")
    //           if(needle == inputVal.toLowerCase()) {
    //             console.log("this.cities[i]", this.cities[i])
    //             this.citiesArr.push(this.cities[i])
    //           } else {
    //           console.log("ELSE 2")
    //           }
    //         } else {
    //           if(inputVal.includes(needle) == true) {
    //             console.log("True")
    //           }
    //         }
    //       }
    //         console.log("citiesArr", this.citiesArr);

    //       this.cities = this.citiesArr;
    //       // this.cities = this.cities.city.filter(v => {
    //       //   console.log("LLLL")
    //       //   v.toLowerCase().indexOf(needle) > -1
    //       // })
    //     })
    //   // for(let i = 0; i < this.cities.length; i++) {

    //   // }

    // }
  },
};
</script>
<style>
.addBoldStyle:nth-child(4),
.addBoldStyle:nth-child(6),
.addBoldStyle:nth-child(8),
.addBoldStyle:nth-child(10),
.addBoldStyle:nth-child(12) {
  font-weight: bold;
}
</style>
