<template>
  <div>
    <!-- English Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-rooms-page-top-image"></div>
        <div class="gt-xs col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              Stay well. Get well.
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content"
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
    <!--  Website version code -->
    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              Stay well. Get well.
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content"
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
    <!-- Hindi Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-rooms-page-top-image"></div>
        <div class="gt-xscol-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              मस्त रहो ! स्वस्थ रहो !
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content_hindi"
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
    <!--  Website version code -->
    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              मस्त रहो ! स्वस्थ रहो !
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content_hindi"
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
    <!-- Assamese Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-rooms-page-top-image"></div>
        <div class="gt-xs col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              ভালে থাকক, সুস্থ থাকক
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content_assamese"
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
    <!--  Website version code -->
    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ভালে থাকক, সুস্থ থাকক
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content_assamese"
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

    <!-- Bengali Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-rooms-page-top-image"></div>
        <div class="gt-xs col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              ভাল থাকুন। সুস্থ থাকুন।
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content_bengali"
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
    <!--  Website version code -->
    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ভাল থাকুন। সুস্থ থাকুন।
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content_bengali"
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


    <!-- English Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-rooms-page-top-image"></div>
        <div class="gt-xs col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              ଭଲରେ ରୁହନ୍ତୁ ଏବଂ ସୁସ୍ଥ ରୁହନ୍ତୁ
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content_Oriya"
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
    <!--  Website version code -->
    <div
      class="gt-xs"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="row justify-center">
        <div class="col-12 mh-rooms-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ଭଲରେ ରୁହନ୍ତୁ ଏବଂ ସୁସ୍ଥ ରୁହନ୍ତୁ
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_room_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_room_content_Oriya"
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
  name: "rooms",

  data() {
    return {
      title: "Rooms",
      lft_room_content: [
        {
          content:
            "The most important part of a medical travel plan is accommodation. Ideally, it should be located close to the hospital or clinic where patients and their companions can enjoy a comfortable and affordable stay – before, during and even after the treatment i.e. recovery and follow-up stage.",
        },
        {
          content:
            "At MangoHomz, we go the extra mile to provide patient-friendly rooms for patients and their loved ones in different medical hubs across India. Every MangoHomz property is carefully selected and adapted as per our standardised format that has been meticulously designed to ensure a comfortable, affordable and problem-free stay for both the patients and their companions.",
        },
      ],
      rgt_room_content: [
        {
          content:
            "Our promise of patient-friendly rooms reflect  our commitment of providing a stress free stay. Every MangoHomz property is manned by attendants to cater to the requirements of patients and their companions. They are equipped with basic medical device and equipment.",
        },
        {
          content:
            "The rooms undergo regular checking and monitoring in order to maintain a safe and hygienic environment for the users.",
        },
        {
          content:
            "Book a MangoHomz room today and get ready for a safe, happy and healthy stay during your medical travel.",
        },
      ],
      lft_room_content_hindi: [
        {
          content:
          "एक मेडिकल ट्रेवल योजना का सबसे महत्वपूर्ण हिस्सा आवास है। आदर्श रूप से, आपके मेडिकल ट्रेवल के दौरान रहने की व्यवस्था अस्पताल या क्लिनिक के नजदीक होना चाहिए जहां रोगी और उनके साथी - उपचार से पहले, उसके दौरान और रिकवरी या फॉलो-अप के समय भी - एक आरामदायक और किफायती स्टे का आनंद ले सकें ।",
        },
        {
          content:
          "MangoHomz में, हम पूरे भारत के विभिन्न शहरों में रोगियों और उनके प्रियजनों के लिए रोगी की ज़रूरत के अनुकूल कमरे उपलब्ध कराने का वादा करते हैं। प्रत्येक MangoHomz प्रॉपर्टी को हमारे स्टैंडर्ड्स के अनुसार सावधानीपूर्वक चुना और आपकी सभी जरुरत के हिसाब से डिज़ाइन किया गया है. जिससे आपको और आपके साथियों को रहने के लिए मिलती है एक आरामदायक, किफ़ायती और समस्या-मुक्त - घर जैसी जगह ।",
        },
      ],
      rgt_room_content_hindi: [
        {
          content:
          "रोगी के अनुकूल कमरों का हमारा वादा आपको और आपके परिवार को तनाव मुक्त करने की हमारी प्रतिबद्धता को दर्शाता है। मरीजों और उनके साथियों की सभी जरूरतों को पूरा करने के लिए प्रत्येक MangoHomz संपत्ति में बेसिक मेडिकल उपकरणों से लैस अटेंडेंट होते हैं, जिन्हे आपकी सभी समस्याओं को हल करने के लिए विशेष रूप से तैयार किया गया है ।",
        },
        {
          content:
          "उपयोगकर्ताओं के लिए एक सुरक्षित और स्वच्छ वातावरण बनाए रखने के लिए कमरों की नियमित जांच MangoHomz के अनुभवी सुपरवाइजरों द्वारा की जाती है ।",
        },
        {
          content:
          "आज ही MangoHomz रूम बुक करें और अपने मेडिकल ट्रेवल के दौरान सुरक्षित, सुखी और स्वस्थ स्टे के लिए तैयार हो जाएँ ।",
        },
      ],
      lft_room_content_assamese: [
        {
          content:
            "চিকিৎসা ভ্ৰমন পৰিকল্পনাৰ সবাটোকৈ গুৰুত্বপূৰ্ণ অংশ হৈছে বাসস্হান। আদৰ্শগতভাৱে বাসস্থানটো হস্পিতেল বা ক্লিনিকখনৰ ওচৰতে থাকিব লাগে যাতে ৰোগী বা তেওঁৰ সংগীয়ে আৰামদায়ক আৰু বহনযোগ্য মূল্যৰ থকাৰ সুবিধা পায়-চিকিৎসাৰ আগেয়ে,চলি থাকোঁতে আৰু পাছতো যেনে পুনৰোদ্ধাৰ বা ফলো-আপৰ সময়ছোৱাতো।",
        },
        {
          content:
            "মেংগ’হ’মচে আমাৰ ভাৰতজুৰি বিভিন্ন হাবত ৰোগী তথা তেওঁৰ সংগীৰ বাবে ৰোগী-অনুকুল কোঠা উপলব্ধ কৰাওঁতে বহুযোজন মাইল অতিক্ৰম কৰিছে। প্ৰতিটো মেংগ’হ’মচ আৱাসস্থান সাৱধানে বাছনি কৰা আৰু সতৰ্কতা অৱলম্বন কৰি তৈয়াৰ কৰা হয়, যাতে ৰোগী ও সংগী উভয়ে আৰামদায়ক, বহনযোগ্য আৰু সমস্যাবিহীনভাৱে থকাৰ সুবিধা পায়।",
        },
      ],
      rgt_room_content_assamese: [
        {
          content:
            "আমাৰ ৰোগী অনুকুল কক্ষৰ প্ৰতিশ্ৰুতিত নিহিত হৈ আছে আপোনাক চি্ন্তামুক্ত থকাৰ ব্যৱস্থা কৰি দিয়াৰ উদ্দেশ্য। মেংগ’হ’মচৰ আৱাসত থাকে প্ৰশিক্ষিত পৰিচাৰক যি খেয়াল ৰাখে ৰোগী ও সংগীৰ চাহিদাৰ। তাৰ ওপৰিও ইয়াত মজুত ৰখা হয় আৱশ্যকীয় মেডিকেল সৰঞ্জাম ও আহিলাসমুহ।",
        },
        {
          content:
            "এই কোঠাসমুহত নিয়মীয়া চেকিং ও মনিটৰিং কৰা হয় যাতে ৰোগীক সুৰক্ষিত আৰু পৰিস্কাৰ পৰিবেশ দিব পাৰি।",
        },
        {
          content:
            "সেয়ে, আজিয়েই মেংগ’হ’মচৰ আৱাস বুক কৰি আপোনাৰ চিকিৎসাযাত্ৰাক কৰি তোলক নিৰাপদ, সুখী ও স্বাস্থ্যকৰ।",
        },
      ],
      lft_room_content_bengali: [
        {
          content:
            "নিজের শহরের বাইরে চিকিৎসার ব্যাপারে সবচেয়ে গুরুত্বপূর্ণ হলো থাকার যায়গা।সবচেয়ে ভাল হয় থাকার যায়গা যদি হাস্পাতাল বা চিকিৎসালয়ের কাছেই হয়, থাকাটা যাতে আরামের আর কম খরচের হয়- চিকিৎসার আগে,চিকিৎসার সময় এবং চিকিৎসার পর,মানে ভাল হয়ে ওঠার সময়টুকুতেও এই থাকার জায়গাটা খুব গুরুত্বপূর্ণ ।",
        },
        {
          content:
            "ভারতের সব চিকিৎসাকেন্দ্রেই চিকিৎসাধীন অতিথি আর তার সঙ্গীদের পছন্দসই ঘর জোগাড় করার ব্যাপারে,ম্যাঙ্গো হোমZ বিশেষ চেষ্টা করে। প্রতিটি ম্যাঙ্গো হোমZ এর সম্পত্তিই সযত্নে নির্বাচিত এবং চিকিৎসাধীন অতিথি আর তার সঙ্গীরা যাতে আরামে, কোনো সমস্যায় না পড়ে, সবচেয়ে বড় কথা - অল্প খরচে থাকতে পারে, এই সব ভেবে তৈরি করা হয়।  ",
        },
      ],
      rgt_room_content_bengali: [
        {
          content:
            "অতিথির সুবিধেমত ঘর দেবার আমাদের যে প্রতিজ্ঞা, তা আসলে আপনাকে চিন্তামুক্তো রাখার আমাদের অঙ্গিকার। প্রতিটি ম্যাঙ্গোহোমZ-এর থাকার জায়গায় চিকিৎসাধীন ব্যাক্তি এবং তার সঙ্গীদের দেখা-শোনা করার জন্য পরিচারক আছে। সাধারণ চিকিৎসার যন্ত্রও প্রতিটি ঘরেই আছে। ",
        },
        {
          content:
            "সব ঘর,প্রতিদিন পরীক্ষা করা হয়, নজর রাখা হয় যাতে ঘরটা সবার জন্য স্বাস্থ্যকর এবং নিরাপদ থাকে।",
        },
        {
          content:
            "ম্যাঙ্গো হোমZ-এ আজই ঘর বুক করুণ যাতে আপনার চিকিৎসা সফর নিরাপদ,স্বাস্থ্যকর আর খুশীর অনুভূতিতে ভরে ওঠে।",
        },
      ],
      lft_room_content_Oriya: [
        {
          content:
            "ଡାକ୍ତରୀ ଚିକିତ୍ସା ପାଇଁ ବାହାରକୁ ଯାଉଥିବା ରୋଗୀଙ୍କର ସବୁଠାରୁ ବଡ଼ ସମସ୍ୟା ହେଉଛି ରହିବାର ଘର । ଏହା ଯଦି ଡାକ୍ତରଖାନା ପାଖରେ ଆରାମଦାୟକ ଏବଂ ସୁଲଭ ମୂଲ୍ୟରେ ମିଳିଥାଏ, ତାହେଲେ ଏହା ଆମର ସବୁଠାରୁ ବଡ଼ ସମସ୍ୟାକୁ ଦୂର କରିଥାଏ । ଏହିଭଳି ଘରର ସୁବିଧା ପାଇଲେ ରୋଗୀ ଖୁସୀରେ ରହିପାରିବେ, ଯାହା ଜଲ୍‌ଦି ସୁସ୍ଥ ହେବାରେ ସାହାଯ୍ୟ କରିବ|",
        },
        {
          content:
            "MangoHomz ଆପଣଙ୍କର ଚିକିତ୍ସା ଗସ୍ତ ସମୟରେ ଆପଣ ଓ ଆପଣଙ୍କର ପ୍ରିୟଜନଙ୍କ ପାଇଁ ଏକ ଆରାମଦାୟକ ଏବଂ ସମସ୍ୟାମୁକ୍ତ ରହଣୀର ବନ୍ଦୋବସ୍ତ କରିଥାଏ .",
        },
      ],
      rgt_room_content_Oriya: [
        {
          content:
            "MangoHomz ଘରେ ଥିବା ରୋଗୀ ଏବଂ ସେମାନଙ୍କର ସାଥୀମାନଙ୍କର ଦେଖାଶୁଣା କରିବା ପାଇଁ ତାଲିମ୍‌ପ୍ରାପ୍ତ MangoHomz ସହାୟକମାନେ ଚବିଶ୍ ଘଣ୍ଟା ତତ୍ପର ରହିଥାନ୍ତି । MangoHomz ବିଶ୍ୱାସ କରେ ଆନନ୍ଦଦାୟକ ସମସ୍ୟାମୁକ୍ତ ରହଣୀ ହିଁ ରୋଗୀଙ୍କୁ ଜଲଦି ସୁସ୍ଥ କରିଥାଏ ।",
        },
        {
          content:
            "ରୋଗୀ ଓ ତାଙ୍କର ପ୍ରିୟଜନଙ୍କ ପାଇଁ ନିରାପଦ ଏବଂ ସୁସ୍ଥ ପରିବେଶ ବଜାୟ ରଖିବା ନିମନ୍ତେ MangoHomz କୋଠରୀଗୁଡିକର ନିୟମିତ ଯାଞ୍ଚ କରିଥାଏ ।",
        },
        {
          content:
            "ଆପଣଙ୍କ ଚିକିତ୍ସାକାଳୀନ ଯାତ୍ରା ସମୟରେ MangoHomz ରେ ଜଲଦି ସୁସ୍ଥ ହୋଇଯାଆନ୍ତୁ ।",
        },
      ],
    };
  },
};
</script>
