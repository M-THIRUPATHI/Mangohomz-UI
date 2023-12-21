<template>
    <div class="content">
        <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <br />
      <div class="q-pa-md">
        <div class="row justify-center">

          <!-- <connectWithusForm /> -->

          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.

              <!-- <div style="padding-left: 1350px;" class="fixed-center q-pa-md q-gutter-sm" :offset="[18, 18]">
                <q-btn
                  label="reach us"

                  style="width: 140px; background-color: black; color: white;"
                  @click="reachusDialog = true"
                ></q-btn>
              </div> -->
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_home_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
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
      <div class="q-pa-xs">
        <div class="row">
          <div
            class="col-1"
            style="text-align: center; padding-right: 50px"
          ></div>
        
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              Feel at Home during Medical Travel with MangoHomz.
            </div>
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
      </div>
        </div>
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
      <div class="q-pa-md">
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
      </div>
        </div>
        <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
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
      <div class="q-pa-xs">
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
      </div>
        </div>
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
      <div class="q-pa-xs">
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
      </div>
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

      <div class="q-pa-md">
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
      </div>
    </div>
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
      <div class="q-pa-xs">
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
      </div>
        </div>
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
      <div class="q-pa-md">
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
      </div>
        </div>
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
      <div class="q-pa-xs">
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
      </div>
        </div>
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
      <div class="q-pa-md">
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
      </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
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
        }
    }
}
</script>
<style>
.content {
    margin-top:30px;
}
</style>