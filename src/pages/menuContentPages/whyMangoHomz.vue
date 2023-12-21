<template>
  <q-page-container style="padding: 15px !important">
    <!-- English Code -->
    <!-- Mobile version code -->
    <q-page
      class="text-justify bg-accent lt-sm" style="z-index: -1;"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">WHY MANGOHOMZ?</p>
        </div>
      </div>
      <div class="row justify-center" style="margin-top: -30px;">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >8 Reasons to choose MangoHomz during your Medical Travel:</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%;margin-top: -50px;">
          <q-list>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
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
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">Patient-friendly rooms</span
                    ><br />Every guest is greeted with a thoughtfully designed
                    Welcome Kit for their use.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top
                >                <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">Dedicated attendant</span
                    ><br />Every MangoHomz property is manned by a dedicated,
                    well-trained attendant to cater to all possible needs of the
                    patient.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold"> Affordable stay</span
                    ><br />Doctors’ fees and hospital bills are too high.
                    Thankfully, your stay during your medical trip won’t be. We
                    go out of our way to make MangoHomz stays not just
                    comfortable but also delightfully affordable.
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">Hygienic catering facility</span
                    ><br />At MangoHomz, we have tied-up with various ‘Food
                    Partners’ to deliver fresh veg./non-veg. food for our guests
                    – patients as well as their companions. We give you the
                    option of ordering à la carte – meals, snacks or juices; or
                    opt for our complete day plan subscription.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >Standard Home Medical Amenities</span
                    ><br />Home Medical Equipment like Wheel Chair, Stretcher &
                    standard medical devices including BP Monitor, Oxygen
                    Saturation Monitor, etc can be made available upon request.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> Round-the-clock support</span
                    ><br />At MangoHomz we are dedicated to catering to your
                    every requirement, and are available for the same 24x7x365.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">MangoHomz Support</span>
                  </p>
                  <ol type="a">
                    <li>
                      <span class="text-bold">Verified Properties:</span> Every
                      aspect of every property that comes for listing with
                      MangoHomz is verified by a dedicated team, with relevant
                      photographs.
                    </li>
                    <li>
                      <span class="text-bold">Secure payment gateway:</span>
                      MangoHomz online payment gateway uses the highest security
                      assurance.
                    </li>
                    <li>
                      <span class="text-bold"
                        >Easy rescheduling, easy refund during
                        cancellation:</span
                      >
                      Want to reschedule or cancel your booking with us? No
                      worries. Our easy rescheduling and refund policies and
                      procedures are designed to make your life easy.
                    </li>
                    <li>
                      <span class="text-bold">Independent User Reviews:</span>
                      We urge you to read the independent, uninfluenced reviews
                      and ratings posted by our genuine users before booking a
                      MangoHomz property.
                    </li>
                    <li>
                      <span class="text-bold">Loyalty coupons:</span> Our
                      Loyalty Coupons make MangoHomz stays rewarding in more
                      ways than one!
                    </li>
                  </ol></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
    <!--  Website version code -->
    <q-page
      class="text-justify bg-accent gt-xs" style="z-index: -1;"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">WHY MANGOHOMZ?</p>
        </div>
      </div>
      <div class="row justify-center" style="margin-top: -30px;">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >8 Reasons to choose MangoHomz during your Medical Travel:</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 q-pa-md" style="max-width: 100%;margin-top: -50px;">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">Near your hospital:</span><br />With
                    our meticulously planned, fast-growing pan-India network,
                    you are sure to find a MangoHomz accommodation near the
                    hospital of your choice.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">Patient-friendly rooms</span
                    ><br />Every guest is greeted with a thoughtfully designed
                    Welcome Kit for their use.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">Dedicated attendant</span
                    ><br />Every MangoHomz property is manned by a dedicated,
                    well-trained attendant to cater to all possible needs of the
                    patient.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> Affordable stay</span
                    ><br />Doctors’ fees and hospital bills are too high.
                    Thankfully, your stay during your medical trip won’t be. We
                    go out of our way to make MangoHomz stays not just
                    comfortable but also delightfully affordable.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">Hygienic catering facility</span
                    ><br />At MangoHomz, we have tied-up with various ‘Food
                    Partners’ to deliver fresh veg./non-veg. food for our guests
                    – patients as well as their companions. We give you the
                    option of ordering à la carte – meals, snacks or juices; or
                    opt for our complete day plan subscription.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-6 q-pa-md" style="max-width: 100%;margin-top: -50px;">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >Standard Home Medical Amenities</span
                    ><br />Home Medical Equipment like Wheel Chair, Stretcher &
                    standard medical devices including BP Monitor, Oxygen
                    Saturation Monitor, etc can be made available upon request.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> Round-the-clock support</span
                    ><br />At MangoHomz we are dedicated to catering to your
                    every requirement, and are available for the same 24x7x365.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">MangoHomz Support</span>
                  </p>
                  <ol type="a">
                    <li>
                      <span class="text-bold">Verified Properties:</span> Every
                      aspect of every property that comes for listing with
                      MangoHomz is verified by a dedicated team, with relevant
                      photographs.
                    </li>
                    <li>
                      <span class="text-bold">Secure payment gateway:</span>
                      MangoHomz online payment gateway uses the highest security
                      assurance.
                    </li>
                    <li>
                      <span class="text-bold"
                        >Easy rescheduling, easy refund during
                        cancellation:</span
                      >
                      Want to reschedule or cancel your booking with us? No
                      worries. Our easy rescheduling and refund policies and
                      procedures are designed to make your life easy.
                    </li>
                    <li>
                      <span class="text-bold">Independent User Reviews:</span>
                      We urge you to read the independent, uninfluenced reviews
                      and ratings posted by our genuine users before booking a
                      MangoHomz property.
                    </li>
                    <li>
                      <span class="text-bold">Loyalty coupons:</span> Our
                      Loyalty Coupons make MangoHomz stays rewarding in more
                      ways than one!
                    </li>
                  </ol></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>

    <!-- Hindi Code -->
    <!-- Mobile version code -->
    <q-page
      class="text-justify bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">MangoHomz ही क्यों ?</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >वो 8 कारण जिनके लिए आप अपनी मेडिकल ट्रिप के लिए MangoHomz को ही
              चुनेंगे :</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar side top>
                              <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <q-item-section
                    ><p>
                      <span class="text-bold"
                      >आपके चुने हुए अस्पताल के पास रहने की जगह :</span
                      ><br />हमने अपनी टेक्नोलॉजी को इतनी सूक्ष्मता और ध्यान से प्लान किया है कि हमारे भारत भर में तेजी से बढ़ते नेटवर्क के साथ, आपको अपने पसंद के अस्पताल के पास MangoHomz रेसीडेंस मिलना पक्का है.
                    </p></q-item-section
                  >
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">रोगी के अनुकूल कमरे :</span
                    ><br />हमारे हर MangoHomz रेसीडेंस में हर अतिथि का स्वागत उनके उपयोग के लिए सोच-समझकर तैयार किए गए वेलकम किट से किया जाता है.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top
                > <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                    >डेडिकेटेड और प्रक्षिक्षित अटेन्डेन्ट :</span
                    ><br />रोगी की सभी संभावित जरूरतों को पूरा करने के लिए प्रत्येक MangoHomz प्रॉपर्टी को एक डेडिकेटेड और अच्छी तरह से प्रशिक्षित अटेन्डेन्ट द्वारा संचालित किया  जाता है.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">किफ़ायती स्टे :</span><br />
                    शुक्र है, आपकी मेडिकल ट्रिप के दौरान आपका स्टे आपकी जेब पर भारी नहीं होगा। हम MangoHomz में आपके रहने को न केवल आरामदायक बल्कि सुखद रूप से किफायती बनाने के लिए हर संभव कोशिश करते हैं.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">स्वादिष्ट और पौष्टिक भोजन :</span
                    ><br />
                    MangoHomz में, हम अपने सभी गेस्ट की जरुरत के अनुसार स्वादिष्ट और पौष्टिक भोजन की व्यवस्था करते हैं. इसके लिए हमने देश के कुछ प्रतिष्ठित 'फूड पार्टनर्स' के साथ करार किया है. हम अपने गेस्ट्स को वेज / नॉन-वेज भोजन, नाश्ता या जूस आर्डर करने का विकल्प देते हैं. आप भोजन अपनी मर्जी के जब चाहे तब अला-कार्ट में आर्डर कर सकते है या आप चाहे तो हमारे पूरे दिन के भोजन का किफायती प्लान भी सब्सक्राइब कर सकते हैं.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                    >स्टैण्डर्ड घरेलू चिकित्सा सुविधाएं :</span
                    ><br />
                    घरेलू मेडिकल इक्विपमेंट जैसे व्हील चेयर, स्ट्रेचर, बीपी मॉनिटर, ऑक्सीमीटर आदि स्टैण्डर्ड मेडिकल इक्विपमेंट रिक्वेस्ट पर उपलब्ध कराए जा सकते हैं.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> चौबीस घंटे सेवा और समर्पण :</span
                    ><br />
                    MangoHomz में हम आपकी हर आवश्यकता को पूरा करने के लिए पूरी तरह समर्पित हैं, हम और हमारे सहयोगी 24x7x365 के आपकी किसी भी जरुरत के लिए उपलब्ध हैं.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">MangoHomz सपोर्ट </span>
                  </p>
                  <ol type="a">
                    <li>
                      <span class="text-bold">पूर्णतः सत्यापित प्रॉपर्टी:</span>
                      मैंगोहोम्ज़ के साथ लिस्टिंग के लिए आने वाली प्रत्येक प्रॉपर्टी के हर पहलू को एक अनुभवी और प्रशिक्षित टीम द्वारा तस्वीरों के साथ सत्यापित किया जाता है.
                    </li>
                    <li>
                      <span class="text-bold">सुरक्षित पेमेंट गेटवे:</span>
                      MangoHomz का ऑनलाइन पेमेंट गेटवे हाई लेवल की सुरक्षा का उपयोग करता है.
                    </li>
                    <li>
                      <span class="text-bold"
                      >आसान रीशेड्यूलिंग और कैंसेलशन के दौरान आसान धनवापसी:</span
                      >
                      हमारे साथ अपनी बुकिंग को रीशेड्यूल या रद्द करना चाहते हैं? तो चिंता न करें। हमारी आसान रीशेड्यूलिंग और रिफंड पॉलिसी और प्रक्रियाएं आपके जीवन को आसान बनाने के लिए डिज़ाइन की गई हैं.
                    </li>
                    <li>
                      <span class="text-bold">वास्तविक गेस्ट रीवियुज़:</span>
                      हम आपसे MangoHomz प्रॉपर्टी बुक करने से पहले हमारे सभी वास्तविक गेस्ट द्वारा पोस्ट की गई स्वतंत्र, अप्रभावित रीवियुज़ और रेटिंग को पढ़ने का आग्रह करते हैं.
                    </li>
                    <li>
                      <span class="text-bold">लॉयल्टी कूपन:</span>
                      हमारे लॉयल्टी कूपन आपके प्रत्येक MangoHomz स्टे को एक से अधिक तरीकों से पुरस्कृत करते हैं.
                    </li>
                  </ol></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
    <!--  Website version code -->
    <q-page
      class="text-justify bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">MangoHomz ही क्यों ?</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >वो 8 कारण जिनके लिए आप अपनी मेडिकल ट्रिप के लिए MangoHomz को ही
              चुनेंगे :</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                    >आपके चुने हुए अस्पताल के पास रहने की जगह :</span
                    ><br />
                    हमने अपनी टेक्नोलॉजी को इतनी सूक्ष्मता और ध्यान से प्लान किया है कि हमारे भारत भर में तेजी से बढ़ते नेटवर्क के साथ, आपको अपने पसंद के अस्पताल के पास MangoHomz रेसीडेंस मिलना पक्का है.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">रोगी के अनुकूल कमरे :</span
                    ><br />
                    हमारे हर MangoHomz रेसीडेंस में हर अतिथि का स्वागत उनके उपयोग के लिए सोच-समझकर तैयार किए गए वेलकम किट से किया जाता है.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >डेडिकेटेड और प्रक्षिक्षित अटेन्डेन्ट :</span
                    ><br />
                    रोगी की सभी संभावित जरूरतों को पूरा करने के लिए प्रत्येक MangoHomz प्रॉपर्टी को एक डेडिकेटेड और अच्छी तरह से प्रशिक्षित अटेन्डेन्ट द्वारा संचालित किया  जाता है.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">किफ़ायती स्टे :</span><br />
                    शुक्र है, आपकी मेडिकल ट्रिप के दौरान आपका स्टे आपकी जेब पर भारी नहीं होगा। हम MangoHomz में आपके रहने को न केवल आरामदायक बल्कि सुखद रूप से किफायती बनाने के लिए हर संभव कोशिश करते हैं.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">स्वादिष्ट और पौष्टिक भोजन :</span
                    ><br />
                    MangoHomz में, हम अपने सभी गेस्ट की जरुरत के अनुसार स्वादिष्ट और पौष्टिक भोजन की व्यवस्था करते हैं. इसके लिए हमने देश के कुछ प्रतिष्ठित 'फूड पार्टनर्स' के साथ करार किया है. हम अपने गेस्ट्स को वेज / नॉन-वेज भोजन, नाश्ता या जूस आर्डर करने का विकल्प देते हैं. आप भोजन अपनी मर्जी के जब चाहे तब अला-कार्ट में आर्डर कर सकते है या आप चाहे तो हमारे पूरे दिन के भोजन का किफायती प्लान भी सब्सक्राइब कर सकते हैं.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                    >स्टैण्डर्ड घरेलू चिकित्सा सुविधाएं :</span
                    ><br />
                    घरेलू मेडिकल इक्विपमेंट जैसे व्हील चेयर, स्ट्रेचर, बीपी मॉनिटर, ऑक्सीमीटर आदि स्टैण्डर्ड मेडिकल इक्विपमेंट रिक्वेस्ट पर उपलब्ध कराए जा सकते हैं.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> चौबीस घंटे सेवा और समर्पण :</span
                    ><br/>MangoHomz में हम आपकी हर आवश्यकता को पूरा करने के लिए पूरी तरह समर्पित हैं, हम और हमारे सहयोगी 24x7x365 के आपकी किसी भी जरुरत के लिए उपलब्ध हैं.
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">MangoHomz सपोर्ट</span>
                  </p>
                  <ol type="a">
                    <li>
                      <span class="text-bold">पूर्णतः सत्यापित प्रॉपर्टी:</span>
                      मैंगोहोम्ज़ के साथ लिस्टिंग के लिए आने वाली प्रत्येक प्रॉपर्टी के हर पहलू को एक अनुभवी और प्रशिक्षित टीम द्वारा तस्वीरों के साथ सत्यापित किया जाता है.
                    </li>
                    <li>
                      <span class="text-bold">सुरक्षित पेमेंट गेटवे:</span>
                      MangoHomz का ऑनलाइन पेमेंट गेटवे हाई लेवल की सुरक्षा का उपयोग करता है.
                    </li>
                    <li>
                      <span class="text-bold"
                      >आसान रीशेड्यूलिंग और कैंसेलशन के दौरान आसान धनवापसी:</span
                      >
                      हमारे साथ अपनी बुकिंग को रीशेड्यूल या रद्द करना चाहते हैं? तो चिंता न करें। हमारी आसान रीशेड्यूलिंग और रिफंड पॉलिसी और प्रक्रियाएं आपके जीवन को आसान बनाने के लिए डिज़ाइन की गई हैं.
                    </li>
                    <li>
                      <span class="text-bold">वास्तविक गेस्ट रीवियुज़:</span>
                      हम आपसे MangoHomz प्रॉपर्टी बुक करने से पहले हमारे सभी वास्तविक गेस्ट द्वारा पोस्ट की गई स्वतंत्र, अप्रभावित रीवियुज़ और रेटिंग को पढ़ने का आग्रह करते हैं.
                    </li>
                    <li>
                      <span class="text-bold">लॉयल्टी कूपन:</span>
                      हमारे लॉयल्टी हमारे लॉयल्टी कूपन आपके प्रत्येक MangoHomz स्टे को एक से अधिक तरीकों से पुरस्कृत करते हैं.
                    </li>
                  </ol></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
    <!-- ASSAMESE Code -->
    <!-- Mobile version code -->
    <q-page
      class="text-justify bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">মেংগ’হ’মচেই কিয়?</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >৮টা কাৰণ যাৰ বাবে আপুনি মেংগ’হ’মচক আপোনাৰ চিকিৎসাযাত্ৰাৰ লগৰী
              কৰিব:</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <q-item-section>
                    <p>
                      <span class="text-bold">চিকিৎসালয়ৰ নিকটবৰ্তী:</span
                      ><br />আমি সুক্ষ্মভাৱে কৰা পৰকল্পনাৰ দ্বাৰা পেন-ইণ্ডিয়া
                      নেটৱৰ্কৰ সহযোগত আপুনি সহজেই বিচাৰি উলিয়াব পাৰিব আপোনাৰ
                      পছন্দৰ চিকিৎসালয়ৰ ওচৰতে থকা মেংগ’হ’মচ আৱাসস্থান।
                    </p>
                  </q-item-section>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">ৰোগী-অনুকুল কোঠা:</span><br />আমি
                    আমাৰ প্ৰতিজন আলহীকে দিওঁ আমাৰ সুক্ষ্ম নিৰিক্ষণেৰে নিৰ্মিত
                    ৰোগীৰ ব্যৱহাৰযোগ্য এক বিশেষ ৱেলকাম কিট্।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top
                > <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">সু-প্ৰশিক্ষিত পৰিচাৰক:</span
                    ><br />প্ৰ্ৰতিটো মেংগ’হ’মচ আৱাসতে ৰোগীৰ সমস্ত চাহিদাৰ বাবে
                    পাব সু-প্ৰশিক্ষিত পৰিচাৰক।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">বহনযোগ্য মুল্যৰ আৱাস:</span
                    ><br />সাধাৰনতে, ডাক্তৰৰ ফিছ্ ‌আৰু মেডিকেল বিলত বহুত খৰচ হয়,
                    সৌভাগ্যক্ৰমে আপুনি থকা আৱাসটোৰ ক্ষেত্ৰত তেনে নহয়। মেংগ’হ’মচত
                    আপুনি থকা দিনকেইটা যাতে আৰামৰ আৰু বহনযোগ্য হয়, সেয়ে আমাৰ
                    প্ৰয়াস।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">স্বাস্থ্যসন্মত খাদ্যৰ যোগান:</span
                    ><br />মেংগ’হ’মচত আমি আমাৰ ‘আলহী’ তথা সংগীৰ বাবে বঢ়িয়া
                    নিৰামিষ/আমিষ খাদ্য যোগান দিব পৰাকৈ বিভিন্ন ফুড্‌-পাৰ্টনাৰৰ
                    স’তে চুক্তিবদ্ধ হৈছো। আপোনাৰ বাবে থাকিব- ‘এ-লা-কাৰ্টে’
                    অপচন্‌ য’ত আপুনি বাছি ল’ব পাৰিব- মিল,স্নেক্চ বা জুচ্‌ নতুবা
                    আপোনাৰ গোটেই দিনৰ প্লেন্‌-চাব্সক্ৰিপচন্‌।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold"
                      >ষ্টেণ্ডাৰ্ড-হ’ম মেডিকেল সুবিধা:</span
                    ><br />ঘৰুৱা চিকিৎসা-সৰঞ্জাম যেনে হুইল-চেয়াৰ, স্ট্ৰেচাৰ,
                    বি.পি.মনিটৰ, অক্সিজেন-চেছুৰেছন্‌ মনিটৰ আদি ষ্টেণ্ডাৰ্ড
                    মেডিকেল ডিভাইচ্‌ অনুৰোধৰ ভিত্তিত উপলব্ধ কৰোৱা হয়।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">ৰাউণ্ড-দা-ক্লক্‌ সমৰ্থন:</span
                    ><br />মেংগ’হ’মচত আমি আপোনাৰ প্ৰতিটো প্ৰয়োজনীয়তা পূৰণৰ বাবেই
                    চুক্তিবদ্ধ আৰু তাৰ বাবে আমি আপোনাৰ কাষত ২৪x৭x৩৬৫ সময়েই
                    উপলব্ধ।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">মেংগ’হ’মচ চাপোৰ্ট:</span>
                  </p>
                  <ol type="a">
                    <li>
                      <span class="text-bold">ভেৰিফাইড তথ্য:</span> আমাৰ
                      নিৰ্দিষ্ট টিমে মেংগ’হ’মচৰ তালিকাত থকা প্ৰতিটো সম্পত্তিৰেই
                      ভালদৰে ফটোগ্ৰাফসহ ভেৰিফিকেচন কৰে।
                    </li>
                    <li>
                      <span class="text-bold">সুৰক্ষিত পেমেন্ট গেটৱে:</span>
                      মেংগ’হ’মচৰ অনলাইন্ পেমেন্ট গেটৱেত হাই-চিকিউৰিটি এচিউৰ্‌
                      কৰা হয়।
                    </li>
                    <li>
                      <span class="text-bold"
                        >সহজ ৰিছিডিউলিং আৰু বুকিং কেন‌চেলেচনৰ:</span
                      >
                       ক্ষেত্ৰত ৰিফান্ডৰ প্ৰতিও আমি লক্ষ্য ৰাখো যাতে আপুনি নিশ্চিন্ত হ’ব পাৰে।.
                    </li>
                    <li>
                      <span class="text-bold">স্বাধীন ব্যৱহাৰকাৰীৰ ৰিভিউ:</span>
                      আমি মেংগ’হ’মচৰ যেইকোনো আৱাস বুকিংৰ আগতে আমাৰ ব্যৱহাৰকাৰীৰ
                      স্বাধীনচিতীয়া ৰিভিউ তথা ৰেটিং চাবলৈ আপোনাক অনুৰোধ জনাওঁ।
                    </li>
                    <li>
                      <span class="text-bold">লয়েলিটী কুপন:</span>আমাৰ লয়েলিটী
                      কুপনে আপোনাৰ মেংগ’হ’মচত থকা সময়খিনিত উপলব্ধ কৰোৱাই আৰু
                      নানান সুবিধা।
                    </li>
                  </ol>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
    <!--  Website version code -->
    <q-page
      class="text-justify bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">মেংগ’হ’মচেই কিয়?</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >৮টা কাৰণ যাৰ বাবে আপুনি মেংগ’হ’মচক আপোনাৰ চিকিৎসাযাত্ৰাৰ লগৰী
              কৰিব:</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">চিকিৎসালয়ৰ নিকটবৰ্তী:</span
                    ><br />আমি সুক্ষ্মভাৱে কৰা পৰকল্পনাৰ দ্বাৰা পেন-ইণ্ডিয়া
                    নেটৱৰ্কৰ সহযোগত আপুনি সহজেই বিচাৰি উলিয়াব পাৰিব আপোনাৰ
                    পছন্দৰ চিকিৎসালয়ৰ ওচৰতে থকা মেংগ’হ’মচ আৱাসস্থান।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">ৰোগী-অনুকুল কোঠা:</span><br />আমি
                    আমাৰ প্ৰতিজন আলহীকে দিওঁ আমাৰ সুক্ষ্ম নিৰিক্ষণেৰে নিৰ্মিত
                    ৰোগীৰ ব্যৱহাৰযোগ্য এক বিশেষ ৱেলকাম কিট্।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">সু-প্ৰশিক্ষিত পৰিচাৰক:</span
                    ><br />প্ৰ্ৰতিটো মেংগ’হ’মচ আৱাসতে ৰোগীৰ সমস্ত চাহিদাৰ বাবে
                    পাব সু-প্ৰশিক্ষিত পৰিচাৰক।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">বহনযোগ্য মুল্যৰ আৱাস:</span
                    ><br />সাধাৰনতে, ডাক্তৰৰ ফিছ্ ‌আৰু মেডিকেল বিলত বহুত খৰচ হয়,
                    সৌভাগ্যক্ৰমে আপুনি থকা আৱাসটোৰ ক্ষেত্ৰত তেনে নহয়। মেংগ’হ’মচত
                    আপুনি থকা দিনকেইটা যাতে আৰামৰ আৰু বহনযোগ্য হয়, সেয়ে আমাৰ
                    প্ৰয়াস।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">স্বাস্থ্যসন্মত খাদ্যৰ যোগান:</span
                    ><br />মেংগ’হ’মচত আমি আমাৰ ‘আলহী’ তথা সংগীৰ বাবে বঢ়িয়া
                    নিৰামিষ/আমিষ খাদ্য যোগান দিব পৰাকৈ বিভিন্ন ফুড্‌-পাৰ্টনাৰৰ
                    স’তে চুক্তিবদ্ধ হৈছো। আপোনাৰ বাবে থাকিব- ‘এ-লা-কাৰ্টে’
                    অপচন্‌ য’ত আপুনি বাছি ল’ব পাৰিব- মিল,স্নেক্চ বা জুচ্‌ নতুবা
                    আপোনাৰ গোটেই দিনৰ প্লেন্‌-চাব্সক্ৰিপচন্‌।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold"
                      >ষ্টেণ্ডাৰ্ড-হ’ম মেডিকেল সুবিধা:</span
                    ><br />ঘৰুৱা চিকিৎসা-সৰঞ্জাম যেনে হুইল-চেয়াৰ, স্ট্ৰেচাৰ,
                    বি.পি.মনিটৰ, অক্সিজেন-চেছুৰেছন্‌ মনিটৰ আদি ষ্টেণ্ডাৰ্ড
                    মেডিকেল ডিভাইচ্‌ অনুৰোধৰ ভিত্তিত উপলব্ধ কৰোৱা হয়।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">ৰাউণ্ড-দা-ক্লক্‌ সমৰ্থন:</span
                    ><br />মেংগ’হ’মচত আমি আপোনাৰ প্ৰতিটো প্ৰয়োজনীয়তা পূৰণৰ বাবেই
                    চুক্তিবদ্ধ আৰু তাৰ বাবে আমি আপোনাৰ কাষত ২৪x৭x৩৬৫ সময়েই
                    উপলব্ধ।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold">মেংগ’হ’মচ চাপোৰ্ট:</span>
                  </p>
                  <ol type="a">
                    <li>
                      <span class="text-bold">ভেৰিফাইড তথ্য:</span> আমাৰ
                      নিৰ্দিষ্ট টিমে মেংগ’হ’মচৰ তালিকাত থকা প্ৰতিটো সম্পত্তিৰেই
                      ভালদৰে ফটোগ্ৰাফসহ ভেৰিফিকেচন কৰে।
                    </li>
                    <li>
                      <span class="text-bold">সুৰক্ষিত পেমেন্ট গেটৱে:</span>
                      মেংগ’হ’মচৰ অনলাইন্ পেমেন্ট গেটৱেত হাই-চিকিউৰিটি এচিউৰ্‌
                      কৰা হয়।
                    </li>
                    <li>
                      <span class="text-bold"
                        >সহজ ৰিছিডিউলিং আৰু বুকিং কেন‌চেলেচনৰ:</span
                      >
                       ক্ষেত্ৰত ৰিফান্ডৰ প্ৰতিও আমি লক্ষ্য ৰাখো যাতে আপুনি নিশ্চিন্ত হ’ব পাৰে।.
                    </li>
                    <li>
                      <span class="text-bold">স্বাধীন ব্যৱহাৰকাৰীৰ ৰিভিউ:</span>
                      আমি মেংগ’হ’মচৰ যেইকোনো আৱাস বুকিংৰ আগতে আমাৰ ব্যৱহাৰকাৰীৰ
                      স্বাধীনচিতীয়া ৰিভিউ তথা ৰেটিং চাবলৈ আপোনাক অনুৰোধ জনাওঁ।
                    </li>
                    <li>
                      <span class="text-bold">লয়েলিটী কুপন:</span>আমাৰ লয়েলিটী
                      কুপনে আপোনাৰ মেংগ’হ’মচত থকা সময়খিনিত উপলব্ধ কৰোৱাই আৰু
                      নানান সুবিধা।
                    </li>
                  </ol>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
    <!-- Bengali Code -->
    <!-- Mobile version code -->
    <q-page
      class="text-justify bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">ম্যাঙ্গো হোমzই কেন?</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >চিকিৎসা প্রবাসে,৮ টি কারণে ম্যাঙ্গো হোমz এর সাথে:</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <q-item-section
                    ><p>
                      <span class="text-bold">আপনার হাস্পাতালের কাছেই :</span
                      ><br />আপনার সব দিক ভেবেই ম্যাঙ্গো হোমZ পরিকল্পনা করে, তার
                      সঙ্গে যোগ করুন আমাদের দ্রুত বেড়ে চলা ভারতজোড়া যোগাযোগ
                      ব্যাবস্থা, সব মিলিয়ে আপনার পছন্দের হাস্পাতালের কাছেই আপনার
                      থাকার জায়গা সম্পূর্ণ নিশ্চিত।
                    </p></q-item-section
                  >
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">অসুস্থ-অতিথির মনোমত ঘর :</span
                    ><br />Eপ্রত্যেক প্রিয় অতিথির বরণডালা, আলাদা করে তার জন্যে
                    ভেবে, কেবল তার ব্যাবহারযোগ্য সামগ্রীতে সুনির্বাচিত।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top
                ><q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">উৎসর্গীকৃত পরিচারক:</span
                    ><br />ম্যাঙ্গো হোমZ এর প্রতিটি সেবায়েত শুধু সেবার কাজে
                    সমর্পিতই নয়, অসুস্থ অতিথির সমস্ত রকমের প্রয়োজনে সাহায্যের
                    জন্য সুশিক্ষিত।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-icon class="mh-cost-icon" size="64px" />
              </q-item-section> <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold"> অল্প খরচে থাকার ব্যাবস্থা</span
                    ><br />ডাক্তার আর হাস্পাতালের খরচ তো সত্যিই বেশী, তবে খুশীর
                    খবর আপনার চিকিৎসার জন্যে শহরের বাইরে যাওয়া-আসা ,থাকা-খাওয়ার
                    খরচ এখন থেকে আর বেশী নয়। আমরা সাধ্যের বাইরে গিয়েও চেষ্টা করি
                    যাতে ম্যাঙ্গো হোমZ এর থাকাটা শুধু আরামের নয়,খরচও যাতে অল্পই
                    হয়, আপনি সত্যিই যাতে খুশী হন।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">স্বাস্থ্যকর খাবারের সুবিধে</span
                    ><br />ম্যাঙ্গো হোমZ এ আমরা বিভিন্ন ‘খাবার পরিবেশক’
                    সহযোগীদের সাথে গরম আর টাটকা, আমিষ বা নিরামিষ খাবার সরবরাহ
                    করি-শুধু রুগিকে নয়, সঙ্গীদেরও।আপনারা নিজেদের পছন্দমতো, দুপুর
                    বা রাতের খাবার, টুকিটাকি বা ঘোল/শরবৎ চাইতে পারেন; অথবা আরো
                    সহজ আমাদের সারা দিনের খাবারের পরিকল্পনার গ্রাহক হতে পারেন।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >আপনার বাড়িতে ব্যাবহারের সাধারণ চিকিৎসার সরঞ্জাম </span
                    ><br />হুইল চেয়ার, স্ট্রেচার বা সাধারণ চিকিৎসা যন্ত্র যেমন
                    রক্ত চাপ মাপার যন্ত্র, অক্সিজেন স্যাচুরেশন মাপার যন্ত্র –
                    চাইলে, এসব আমরা সরবরাহ করি।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> সবসময়ের সহযোগিতা</span
                    ><br />ম্যাঙ্গো হোমZ এ আমরা ২৪x৭x৩৬৫ দিন, আপনার সব রকমের
                    দরকারে, সাহায্যের জন্য তৈরি।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >ম্যাঙ্গো হোমZ আপনার সহযোগীতায়
                    </span>
                  </p>
                  <ol type="a">
                    <li>
                      <span class="text-bold"
                        >অ। পুঙ্খানুপুঙ্খ পরখ করা সব সম্পত্তি:</span
                      >
                      ম্যাঙ্গো হোমZ যখন কোন সম্পত্তি নিজের বলে ঘোষণা করে,তার
                      মানে এই কাজের জন্য আমাদের বিশেষ নির্বাচিত দল তার প্রতিটি
                      খুঁটিনাটি জিনিষ পরখ করে নিয়েছে,প্রমাণ হিসেবে ছবিও তোলা
                      হয়েছে। photographs.
                    </li>
                    <li>
                      <span class="text-bold">আ। নিরাপদ পেমেন্ট গেটওয়ে:</span>
                      ম্যাঙ্গো হোমZ এর অনলাইন পেমেন্ট গেটওয়ে সেরা নিরাপত্তার
                      আশ্বাস।
                    </li>
                    <li>
                      <span class="text-bold"
                        >ই। পরিকল্পনা বদলানোও সহজ, বাতিল করলেও সহজে টাকা
                        ফেরত:</span
                      >
                      আপনার বুকিং বদলাতে বা বাতিল করতে চান? চিন্তার কিচ্ছু
                      নেই।আমাদের সহজে পরিকল্পনা বদলানো আর টাকা ফেরত দেবার নীতি
                      এখন এসব কাজ খুব সহজ করে দিয়েছে।
                    </li>
                    <li>
                      <span class="text-bold"
                        >ঈ। যারা এই পরিষেবা ব্যাবহার করেছেন, তাদের স্বাধীন
                        মতামত:</span
                      >
                      ম্যাঙ্গো হোমZ এর বুকিং করার আগে, যারা এই পরিষেবা ব্যাবহার
                      করেছেন তাদের স্বাধীন,প্রভাবহীন মতামত ও তাদের ভাল-মন্দ
                      তাদের নিজস্ব মতামত অনুযায়ী, তাদের রেটিং যাচাই করে নিন।
                    </li>
                    <li>
                      <span class="text-bold">এ। বিশ্বস্ততা কুপন:</span> Our
                      আমাদের ‘বিশ্বস্ততা কুপন’ আপনার ম্যাঙ্গো হোমZ-এ থাকার
                      অভিজ্ঞতাকে বহুগুণে সমৃদ্ধ করবে।
                    </li>
                  </ol></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
    <!--  Website version code -->
    <q-page
      class="text-justify bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">ম্যাঙ্গো হোমzই কেন?</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >চিকিৎসা প্রবাসে,৮ টি কারণে ম্যাঙ্গো হোমz এর সাথে:</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">আপনার হাস্পাতালের কাছেই :</span
                    ><br />আপনার সব দিক ভেবেই ম্যাঙ্গো হোমZ পরিকল্পনা করে, তার
                    সঙ্গে যোগ করুন আমাদের দ্রুত বেড়ে চলা ভারতজোড়া যোগাযোগ
                    ব্যাবস্থা, সব মিলিয়ে আপনার পছন্দের হাস্পাতালের কাছেই আপনার
                    থাকার জায়গা সম্পূর্ণ নিশ্চিত।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">অসুস্থ-অতিথির মনোমত ঘর :</span
                    ><br />প্রত্যেক প্রিয় অতিথির বরণডালা, আলাদা করে তার জন্যে
                    ভেবে, কেবল তার ব্যাবহারযোগ্য সামগ্রীতে সুনির্বাচিত।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">উৎসর্গীকৃত পরিচারক:</span
                    ><br />ম্যাঙ্গো হোমZ এর প্রতিটি সেবায়েত শুধু সেবার কাজে
                    সমর্পিতই নয়, অসুস্থ অতিথির সমস্ত রকমের প্রয়োজনে সাহায্যের
                    জন্য সুশিক্ষিত।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> অল্প খরচে থাকার ব্যাবস্থা</span
                    ><br />ডাক্তার আর হাস্পাতালের খরচ তো সত্যিই বেশী, তবে খুশীর
                    খবর আপনার চিকিৎসার জন্যে শহরের বাইরে যাওয়া-আসা ,থাকা-খাওয়ার
                    খরচ এখন থেকে আর বেশী নয়। আমরা সাধ্যের বাইরে গিয়েও চেষ্টা করি
                    যাতে ম্যাঙ্গো হোমZ এর থাকাটা শুধু আরামের নয়,খরচও যাতে অল্পই
                    হয়, আপনি সত্যিই যাতে খুশী হন।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">স্বাস্থ্যকর খাবারের সুবিধে</span
                    ><br />ম্যাঙ্গো হোমZ এ আমরা বিভিন্ন ‘খাবার পরিবেশক’
                    সহযোগীদের সাথে গরম আর টাটকা, আমিষ বা নিরামিষ খাবার সরবরাহ
                    করি-শুধু রুগিকে নয়, সঙ্গীদেরও।আপনারা নিজেদের পছন্দমতো, দুপুর
                    বা রাতের খাবার, টুকিটাকি বা ঘোল/শরবৎ চাইতে পারেন; অথবা আরো
                    সহজ আমাদের সারা দিনের খাবারের পরিকল্পনার গ্রাহক হতে পারেন।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >আপনার বাড়িতে ব্যাবহারের সাধারণ চিকিৎসার সরঞ্জাম </span
                    ><br />হুইল চেয়ার, স্ট্রেচার বা সাধারণ চিকিৎসা যন্ত্র যেমন
                    রক্ত চাপ মাপার যন্ত্র, অক্সিজেন স্যাচুরেশন মাপার যন্ত্র –
                    চাইলে, এসব আমরা সরবরাহ করি।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">সবসময়ের সহযোগিতা</span
                    ><br />Aম্যাঙ্গো হোমZ এ আমরা ২৪x৭x৩৬৫ দিন, আপনার সব রকমের
                    দরকারে, সাহায্যের জন্য তৈরি।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >ম্যাঙ্গো হোমZ আপনার সহযোগীতায়
                    </span>
                  </p>
                  <ol type="a">
                    <li>
                      <span class="text-bold"
                        >অ। পুঙ্খানুপুঙ্খ পরখ করা সব সম্পত্তি:</span
                      >
                      ম্যাঙ্গো হোমZ যখন কোন সম্পত্তি নিজের বলে ঘোষণা করে,তার
                      মানে এই কাজের জন্য আমাদের বিশেষ নির্বাচিত দল তার প্রতিটি
                      খুঁটিনাটি জিনিষ পরখ করে নিয়েছে,প্রমাণ হিসেবে ছবিও তোলা
                      হয়েছে।
                    </li>
                    <li>
                      <span class="text-bold">আ। নিরাপদ পেমেন্ট গেটওয়ে:</span>
                      ম্যাঙ্গো হোমZ এর অনলাইন পেমেন্ট গেটওয়ে সেরা নিরাপত্তার
                      আশ্বাস।
                    </li>
                    <li>
                      <span class="text-bold"
                        >ই। পরিকল্পনা বদলানোও সহজ, বাতিল করলেও সহজে টাকা
                        ফেরত:</span
                      >
                      আপনার বুকিং বদলাতে বা বাতিল করতে চান? চিন্তার কিচ্ছু
                      নেই।আমাদের সহজে পরিকল্পনা বদলানো আর টাকা ফেরত দেবার নীতি
                      এখন এসব কাজ খুব সহজ করে দিয়েছে।
                    </li>
                    <li>
                      <span class="text-bold"
                        >ঈ। যারা এই পরিষেবা ব্যাবহার করেছেন, তাদের স্বাধীন
                        মতামত:</span
                      >
                      ম্যাঙ্গো হোমZ এর বুকিং করার আগে, যারা এই পরিষেবা ব্যাবহার
                      করেছেন তাদের স্বাধীন,প্রভাবহীন মতামত ও তাদের ভাল-মন্দ
                      তাদের নিজস্ব মতামত অনুযায়ী, তাদের রেটিং যাচাই করে নিন।
                    </li>
                    <li>
                      <span class="text-bold">এ। বিশ্বস্ততা কুপন:</span> Our
                      আমাদের ‘বিশ্বস্ততা কুপন’ আপনার ম্যাঙ্গো হোমZ-এ থাকার
                      অভিজ্ঞতাকে বহুগুণে সমৃদ্ধ করবে।
                    </li>
                  </ol></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>


        <!-- English Code -->
    <!-- Mobile version code -->
    <q-page
      class="text-justify bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">MANGOHOMZ କାହିଁକି?</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >ଆପଣଙ୍କର ମେଡିକାଲ୍ ଭ୍ରମଣ ସମୟରେ MangoHomz ବାଛିବାର 8 ଟି କାରଣ:</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <q-item-section
                    ><p>
                      <span class="text-bold">ଏହା ଆପଣଙ୍କ ଡାକ୍ତରଖାନା ନିକଟରେ :</span
                      ><br />ଆମେ ଯୋଜନାବଦ୍ଧ ଭାବରେ ଦୃତଗତିରେ ସର୍ବଭାରତୀୟ ସ୍ତରରେ MangoHomz ର ନେଟୱାର୍କ କରିଛୁ । ଆପଣ MangoHomz ଜରିଆରେ ନିଜ ପସନ୍ଦର ଡାକ୍ତରଖାନା ନିକଟରେ ଚିକିତ୍ସାକାଳୀନ ରହଣୀ ପାଇଁ ଏକ ଘର ସୁଲଭ ମୂଲ୍ୟରେ ପାଇ ପାରିବେ ।
                    </p></q-item-section
                  >
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">ରୋଗୀ ଅନୁକୂଳ ଘର:</span
                    ><br />ପ୍ରତ୍ୟେକ ରୋଗୀଙ୍କୁ ସେମାନଙ୍କୁ ଚିକିତ୍ସାକାଳୀନ ଯାତ୍ରା ସମୟରେ ବ୍ୟବହାର ପାଇଁ ଏକ ସ୍ୱତନ୍ତ୍ର ମେଡିକାଲ କିଟ୍ ସହିତ MangoHomz ଘରେ ସ୍ୱାଗତ କରାଯାଇଥାଏ  |
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top
                > <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">ତାଲିମ୍‌ପ୍ରାପ୍ତ ସହାୟକ :</span
                    ><br />ପ୍ରତ୍ୟେକ ରୋଗୀଙ୍କର ସମସ୍ତ ଆବଶ୍ୟକତାକୁ ପୂରଣ କରିବା ପାଇଁ ଆମେ ତାଲିମପ୍ରାପ୍ତ ସହାୟକ ଯୋଗାଇ ଦେଇଥାଉ ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p>
                    <span class="text-bold"> ସୁଲଭ ରହଣୀ :</span
                    ><br />ଡାକ୍ତରଙ୍କ ଫିସ୍ ଏବଂ ହସ୍‌ପିଟାଲ ବିଲ୍ ବହୁତ ଅଧିକ । ଖୁସୀର କଥା ଆପଣଙ୍କର ଡାକ୍ତରୀ ଯାତ୍ରା ସମୟରେ ଆପଣଙ୍କ ରହଣୀ ହେବ ସୁଲଭ । MangoHomz କେବଳ ଆରାମଦାୟକ ନୁହେଁ ବରଂ ଆନନ୍ଦଦାୟକ ରହଣୀ ସୁଲଭ ମୂଲ୍ୟରେ ପ୍ରଦାନ କରିଥାଏ ।
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">ପୌଷ୍ଟିକ ଖାଦ୍ୟର ସୁବିଧା: </span
                    ><br />ରୋଗୀ ଉପଯୋଗୀ ପୌଷ୍ଟିକ ଖାଦ୍ୟ ପ୍ରଦାନ କରୁଥିବା ଫୁଡ୍ ପାର୍ଟନରମାନଙ୍କ ସହିତ MangoHomz ଜଡ଼ିତ ଯେଉଁମାନେ କି ରୋଗୀ ଏବଂ ତାଙ୍କ ସାଥୀମାନଙ୍କୁ ପୁରା ଦିନର ଖାଦ୍ୟ ପୌଷ୍ଟିକ ଭାବେ ଯୋଗାଇ ଦେଇ ଥାଆନ୍ତି ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="64px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >ଷ୍ଟାଣ୍ଡାର୍ଡ ହୋମ ମେଡିକାଲ ଉପକରଣ ସୁବିଧା :</span
                    ><br />MangoHomz ହୋମ ମେଡିକାଲ ଯନ୍ତ୍ରପାତି ପାର୍ଟନର ସହିତ ଜଡ଼ିତ ଯାହା ଫଳରେ ଆପଣ ହୁଇଲ୍ ଚେୟାର, ଷ୍ଟ୍ରେଚର, ବି.ପି. ମନିଟର, ଅକ୍ସିଜେନ ସାଚ୍ୟୁରେସନ ମନିଟର ଇତ୍ୟାଦି ଆପଣଙ୍କ ଦରକାର ମୁତାବକ ବୁକ୍ କରିପାରିବେ ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> ଚବିଶ୍ ଘଣ୍ଟା ସହାୟତା :</span
                    ><br />MangoHomz ରହଣୀ ସମୟରେ ଆମେ ଆପଣଙ୍କର ପ୍ରତ୍ୟେକ ଆବଶ୍ୟକତାକୁ ପୂରଣ କରିବା ପାଇଁ ସବୁବେଳେ ତତ୍ପର ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar side top>
                <q-img src="~assets/logos/mangohomz_support.webp" width="64px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">MangoHomz ସହାୟତା :</span>
                  </p>
                  <ol type="୧">
                    <li>
                      <span class="text-bold">MangoHomz ଦ୍ୱାରା ଯାଞ୍ଚ ହେଉଥିବା ଘର :</span> ଆମେ MangoHomz ସହିତ ତାଲିକାଭୁକ୍ତ ହେବା ପାଇଁ ଆସୁଥିବା ପ୍ରତ୍ୟେକ ଘରକୁ ପ୍ରତ୍ୟେକ ଦିଗରୁ ଯାଞ୍ଚ କରିଥାଉ ।
                    </li>
                    <li>
                      <span class="text-bold">ସୁରକ୍ଷିତ ପେମେଣ୍ଟ ଗେଟ୍‌ୱେ :</span>
                      MangoHomz ସମ୍ପୂର୍ଣ୍ଣ ସୁରକ୍ଷିତ ଅନଲାଇନ୍ ପେମେଣ୍ଟ ଗେଟ୍‌ୱେ ସିଷ୍ଟମ୍ ବ୍ୟବହାର କରିଥାଏ ।
                    </li>
                    <li>
                      <span class="text-bold"
                        >ଯାତ୍ରା ବାତିଲ ଏବଂ ପୁନଃ ନିର୍ଦ୍ଧାରଣ :</span
                      >
                      ଆପଣ କଣ ଆପଣଙ୍କର ଯାତ୍ରା ବାତିଲ କିମ୍ବା ପୁନଃ ନିର୍ଦ୍ଧାରଣ କରିବାକୁ ଚାହୁଁଛନ୍ତି କି? ଚିନ୍ତା କରିବାର ଆବଶ୍ୟକତା ନାହିଁ । ଏହା MangoHomz ରେ ବହୁତ ସରଳ ।
                    </li>
                    <li>
                      <span class="text-bold">ଉପଭୋକ୍ତାମାନଙ୍କ ନିରପେକ୍ଷ ସମୀକ୍ଷା :</span>
                      MangoHomz ର ସମସ୍ତ ଘର ପୂର୍ବ ଉପଭୋକ୍ତାମାନେ ନିରପେକ୍ଷ ଟିପ୍‌ପଣୀ ଦେଇଥାନ୍ତି ଯାହା ଦ୍ୱାରା ଆପଣଙ୍କ ଘର ବିଷୟରେ ସଠିକ୍ ଖବର ପାଇପାରିବେ ।
                    </li>
                    <li>
                      <span class="text-bold">ଲୟାଲଟି କୁପନ : </span> Our
                      MangoHomz ରେ ରହି ଲୟାଲଟି କୁପନ ପାଆନ୍ତୁ ଯାହା ଆପଣଙ୍କୁ ବିଭିନ୍ନ ଉପାୟରେ ସହାୟକ ହେବ ।
                    </li>
                  </ol></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
    <!--  Website version code -->
    <q-page
      class="text-justify bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="row mh-page-heading justify-center">
        <div class="col-10">
          <p class="text-h5 text-primary text-bold">MANGOHOMZ କାହିଁକି?</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p q-pb-lg">
            <span class="text-bold"
              >ଆପଣଙ୍କର ମେଡିକାଲ୍ ଭ୍ରମଣ ସମୟରେ MangoHomz ବାଛିବାର 8 ଟି କାରଣ:</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/near_hospital.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">ଏହା ଆପଣଙ୍କ ଡାକ୍ତରଖାନା ନିକଟରେ :</span><br />ଆମେ ଯୋଜନାବଦ୍ଧ ଭାବରେ ଦୃତଗତିରେ ସର୍ବଭାରତୀୟ ସ୍ତରରେ MangoHomz ର ନେଟୱାର୍କ କରିଛୁ । ଆପଣ MangoHomz ଜରିଆରେ ନିଜ ପସନ୍ଦର ଡାକ୍ତରଖାନା ନିକଟରେ ଚିକିତ୍ସାକାଳୀନ ରହଣୀ ପାଇଁ ଏକ ଘର ସୁଲଭ ମୂଲ୍ୟରେ ପାଇ ପାରିବେ ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/patient_friendly_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">ରୋଗୀ ଅନୁକୂଳ ଘର:</span
                    ><br />ପ୍ରତ୍ୟେକ ରୋଗୀଙ୍କୁ ସେମାନଙ୍କୁ ଚିକିତ୍ସାକାଳୀନ ଯାତ୍ରା ସମୟରେ ବ୍ୟବହାର ପାଇଁ ଏକ ସ୍ୱତନ୍ତ୍ର ମେଡିକାଲ କିଟ୍ ସହିତ MangoHomz ଘରେ ସ୍ୱାଗତ କରାଯାଇଥାଏ  |
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/attendant.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">ତାଲିମ୍‌ପ୍ରାପ୍ତ ସହାୟକ :</span
                    ><br />ପ୍ରତ୍ୟେକ ରୋଗୀଙ୍କର ସମସ୍ତ ଆବଶ୍ୟକତାକୁ ପୂରଣ କରିବା ପାଇଁ ଆମେ ତାଲିମପ୍ରାପ୍ତ ସହାୟକ ଯୋଗାଇ ଦେଇଥାଉ ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/affordable_stay.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> ସୁଲଭ ରହଣୀ :</span
                    ><br />ଡାକ୍ତରଙ୍କ ଫିସ୍ ଏବଂ ହସ୍‌ପିଟାଲ ବିଲ୍ ବହୁତ ଅଧିକ । ଖୁସୀର କଥା ଆପଣଙ୍କର ଡାକ୍ତରୀ ଯାତ୍ରା ସମୟରେ ଆପଣଙ୍କ ରହଣୀ ହେବ ସୁଲଭ । MangoHomz କେବଳ ଆରାମଦାୟକ ନୁହେଁ ବରଂ ଆନନ୍ଦଦାୟକ ରହଣୀ ସୁଲଭ ମୂଲ୍ୟରେ ପ୍ରଦାନ କରିଥାଏ ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/hygine_food.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">ପୌଷ୍ଟିକ ଖାଦ୍ୟର ସୁବିଧା: </span
                    ><br />ରୋଗୀ ଉପଯୋଗୀ ପୌଷ୍ଟିକ ଖାଦ୍ୟ ପ୍ରଦାନ କରୁଥିବା ଫୁଡ୍ ପାର୍ଟନରମାନଙ୍କ ସହିତ MangoHomz ଜଡ଼ିତ ଯେଉଁମାନେ କି ରୋଗୀ ଏବଂ ତାଙ୍କ ସାଥୀମାନଙ୍କୁ ପୁରା ଦିନର ଖାଦ୍ୟ ପୌଷ୍ଟିକ ଭାବେ ଯୋଗାଇ ଦେଇ ଥାଆନ୍ତି ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/standard_home_medical_amenities.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"
                      >ଷ୍ଟାଣ୍ଡାର୍ଡ ହୋମ ମେଡିକାଲ ଉପକରଣ ସୁବିଧା :</span
                    ><br />MangoHomz ହୋମ ମେଡିକାଲ ଯନ୍ତ୍ରପାତି ପାର୍ଟନର ସହିତ ଜଡ଼ିତ ଯାହା ଫଳରେ ଆପଣ ହୁଇଲ୍ ଚେୟାର, ଷ୍ଟ୍ରେଚର, ବି.ପି. ମନିଟର, ଅକ୍ସିଜେନ ସାଚ୍ୟୁରେସନ ମନିଟର ଇତ୍ୟାଦି ଆପଣଙ୍କ ଦରକାର ମୁତାବକ ବୁକ୍ କରିପାରିବେ ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/round_the_clock_support.webp" width="84px"  />
              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold"> ଚବିଶ୍ ଘଣ୍ଟା ସହାୟତା :</span
                    ><br />MangoHomz ରହଣୀ ସମୟରେ ଆମେ ଆପଣଙ୍କର ପ୍ରତ୍ୟେକ ଆବଶ୍ୟକତାକୁ ପୂରଣ କରିବା ପାଇଁ ସବୁବେଳେ ତତ୍ପର ।
                  </p></q-item-section
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-img src="~assets/logos/mangohomz_support.webp" width="84px"  />

              </q-item-section>
              <q-item-section>
                <q-item-section
                  ><p>
                    <span class="text-bold">MangoHomz ସହାୟତା :</span>
                  </p>
                  <ol type="୧">
                    <li>
                      <span class="text-bold">MangoHomz ଦ୍ୱାରା ଯାଞ୍ଚ ହେଉଥିବା ଘର :</span> ଆମେ MangoHomz ସହିତ ତାଲିକାଭୁକ୍ତ ହେବା ପାଇଁ ଆସୁଥିବା ପ୍ରତ୍ୟେକ ଘରକୁ ପ୍ରତ୍ୟେକ ଦିଗରୁ ଯାଞ୍ଚ କରିଥାଉ ।
                    </li>
                    <li>
                      <span class="text-bold">ସୁରକ୍ଷିତ ପେମେଣ୍ଟ ଗେଟ୍‌ୱେ :</span>
                      MangoHomz ସମ୍ପୂର୍ଣ୍ଣ ସୁରକ୍ଷିତ ଅନଲାଇନ୍ ପେମେଣ୍ଟ ଗେଟ୍‌ୱେ ସିଷ୍ଟମ୍ ବ୍ୟବହାର କରିଥାଏ ।
                    </li>
                    <li>
                      <span class="text-bold"
                        >ଯାତ୍ରା ବାତିଲ ଏବଂ ପୁନଃ ନିର୍ଦ୍ଧାରଣ :</span
                      >
                      ଆପଣ କଣ ଆପଣଙ୍କର ଯାତ୍ରା ବାତିଲ କିମ୍ବା ପୁନଃ ନିର୍ଦ୍ଧାରଣ କରିବାକୁ ଚାହୁଁଛନ୍ତି କି? ଚିନ୍ତା କରିବାର ଆବଶ୍ୟକତା ନାହିଁ । ଏହା MangoHomz ରେ ବହୁତ ସରଳ ।
                    </li>
                    <li>
                      <span class="text-bold">ଉପଭୋକ୍ତାମାନଙ୍କ ନିରପେକ୍ଷ ସମୀକ୍ଷା :</span>
                      MangoHomz ର ସମସ୍ତ ଘର ପୂର୍ବ ଉପଭୋକ୍ତାମାନେ ନିରପେକ୍ଷ ଟିପ୍‌ପଣୀ ଦେଇଥାନ୍ତି ଯାହା ଦ୍ୱାରା ଆପଣଙ୍କ ଘର ବିଷୟରେ ସଠିକ୍ ଖବର ପାଇପାରିବେ ।
                    </li>
                    <li>
                      <span class="text-bold">ଲୟାଲଟି କୁପନ : </span>MangoHomz ରେ ରହି ଲୟାଲଟି କୁପନ ପାଆନ୍ତୁ ଯାହା ଆପଣଙ୍କୁ ବିଭିନ୍ନ ଉପାୟରେ ସହାୟକ ହେବ ।
                    </li>
                  </ol></q-item-section
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>





  </q-page-container>
</template>
<script>
export default {
  name: "why-mango-homz",
  data() {
    return {
      title: "Why MangoHomz",
    };
  },
};
</script>
