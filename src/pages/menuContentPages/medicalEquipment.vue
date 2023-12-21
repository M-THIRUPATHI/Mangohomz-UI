<template>
  <div>
    <!-- English Code -->
    <!-- Mobile version code -->

    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-me-page-top-image"></div>
        <div class="gt-xs col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              Check well. Get well.
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_english"
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
        <div class="col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              Check well. Get well.
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_english"
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
        <div class="lt-sm col-12 mh-mobile-me-page-top-image"></div>
        <div class="gt-xs col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              नियमित हो जांच । स्वस्थ रहें आप ।
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_hindi"
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
        <div class="col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              नियमित हो जांच । स्वस्थ रहें आप ।
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_hindi"
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
        <div class="lt-sm col-12 mh-mobile-me-page-top-image"></div>
        <div class="gt-xs col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              ভালদৰে আহক আৰু সুস্থ হওক
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_assamese"
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
        <div class="col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
             ভালদৰে আহক আৰু সুস্থ হওক
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_assamese"
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
        <div class="lt-sm col-12 mh-mobile-me-page-top-image"></div>
        <div class="gt-xs col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              আরাম করে এসো । সুস্থভাবে যাও
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_bengali"
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
        <div class="col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
             আরাম করে এসো । সুস্থভাবে যাও
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_bengali"
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
        <div class="lt-sm col-12 mh-mobile-me-page-top-image"></div>
        <div class="gt-xs col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              ଭଲରେ ଆସନ୍ତୁ ସୁସ୍ଥ ହୋଇଯାନ୍ତୁ
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_Oriya"
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
        <div class="col-12 mh-me-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 mh-page-heading text-bold">
              ଭଲରେ ଆସନ୍ତୁ ସୁସ୍ଥ ହୋଇଯାନ୍ତୁ
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_equipment_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_equipment_content_Oriya"
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
  name: "medical-equipment",

  data() {
    return {
      title: "Medical Equipment",
      lft_equipment_content_english: [
        {
          content:
            "Home Medical Devices come in various shapes, sizes and weights. You may need extra space, money, effort and in some cases even legal clearance for air travel. So, carrying them along may not be a good idea for medical travellers. Although some airlines do allow patients to carry their medical equipment and mobility aids, it is always cumbersome for the traveller to carry it to distant locations. Be it a battery-powered wheelchair or mobility aid or apnea monitors or exterior medical devices or an oxygen cylinder, at MangoHomz, we make sure your requirement of medical equipment is taken care of during your medical trip",
        },
      ],
      rgt_equipment_content_english: [
        {
          content:
            "With MangoHomz, you don’t need to carry your heavy, odd-sized medical equipment during your medical travel. We have tied up with ‘Medical Equipment Partners’ who – upon special request placed at the time of booking – can help provide the required Home Medical equipment as per your specific requirements or doctor’s instructions at nominal charges.",
        },
        {
          content:
            "You may check the availability of various devices and can book it in advance before your travel starts.",
        },
      ],
      lft_equipment_content_hindi: [
        {
          content:
            "घरेलू 'मेडिकल इक्विपमेंट विभिन्न आकार, माप और वजन के होते हैं। इनको अपने मेडिकल ट्रेवल में साथ ले जाने के लिए आपको अतिरिक् स्थान, धन और कुछ मामलों में जैसे हवाई यात्रा के दौरान कानूनी मंजूरी की भी आवश्यकता हो सकती है। और इनको साथ ले जाने के लिए आपको कुछ विशेष प्रयास करने पड़ सकते हैं। इसलिए, उन्हें साथ ले जाना रोगियों या उनके साथियों के लिए एक अच्छा विचार नहीं हो सकता है। हालांकि कुछ एयरलाइंस रोगियों को अपने मेडिकल उपकरण और मोबिलिटी डिवाइस ले जाने की अनुमति देती हैं, लेकिन यात्री के लिए इन्हें दूर के स्थानों पर ले जाना हमेशा मुश्किल होता है। MangoHomz में, हम सुनिश्चित करते हैं कि आपके मेडिकल ट्रिप के दौरान आपकी जरुरत के सभी मेडिकल डिवाइस जैसे, बैटरी से चलने वाला व्हीलचेयर या मोबिलिटी एड या एपनिया मॉनिटर या बाहरी मेडिकल डिवाइस या ऑक्सीजन सिलेंडर, आप तक मिनटों में पहुँच जायें।",
        },
      ],
      rgt_equipment_content_hindi: [
        {
          content:
            "MangoHomz के साथ, आपको अपनी मेडिकल ट्रिप के दौरान अपने भारी और कठिन आकार के मेडिकल इक्विपमेंट ले जाने की आवश्यकता नहीं है। हमने इसके लिए 'मेडिकल इक्विपमेंट पार्टनर्स' के साथ कॉन्ट्रैक्ट किया है जो - बुकिंग के समय किए गए विशेष अनुरोध पर - आपक जरूरतों के अनुसार या आपके डॉक्टर के प्रिस्क्रिप्शन के मुताबिक घरेलू मेडिकल इक्विपमेंट आप तक पहुँचाने में मदद कर सकते हैं, व भी बहुत ही किफायती दाम पर।",
        },
        {
          content:
            " MangoHomz आपको यात्रा शुरू करने से पहले यह सुविधा देता है क आप हमारे पास अपने जरुरत के मेडिकल इक्विपमेंट्स की उपलब्धता देख लें तथा उन्हें यात्रा से पहले बुक कर लें।",
        },
      ],
      lft_equipment_content_assamese: [
        {
          content:
            "ঘৰুৱা মেডিকেল সৰঞ্জামবোৰৰ আকাৰ আৰু ওজনো বেলেগ বেলেগ হয়। আপোনাৰ অতিৰিক্ত স্থান, পইছা আনহে নালাগে  আইনী নথী-পত্ৰৰো কিছু ক্ষেত্ৰত বিমানত উঠাৰ সময়ত প্ৰয়োজন হ’ব পাৰে। সেয়ে চিকিৎসাযাত্ৰাত এইবোৰ লৈ ফুৰিবলৈ বৰ অসুবিধা হয়। তাৰোপৰি কিছুসংখ্যক এয়াৰলাইন কোম্পানিৰ পলিচীমতে এই সৰঞ্জাম লগত অনাটো মানা। দুৰনিলৈ এই সৰঞ্জামবোৰ টোপোলা বন্ধা মুঠেও সহজ নহয় লাগিলে সি বেটেৰী চালিত হুইল-চেয়াৰেই হওক বা মবিলিটী-এইড্‌ বা এপনিয়া মটৰ নতুবা বাহ্যিক মেডিকেল সৰঞ্জাম বা অক্সিজেন চিলিণ্ডাৰেই হওক। মেংগ’হ’মচত আমি আপোনাৰ চিকিৎসাযাত্ৰাত দৰকাৰ হোৱা সকলো চিকিৎসা সৰঞ্জাম উপলব্ধ কৰাওঁ।",
        },
      ],
      rgt_equipment_content_assamese: [
        {
          content:
            "মেংগ’হ’মচত আপুনি এতিয়া সেই গধুৰ, আজৱ আকাৰৰ চিকিৎসা সৰঞ্জাম কঢ়িয়াই ফুৰাৰ কোনো প্ৰয়োজন্ নাই। আমি ইতিমধ্যে টাই-আপ্ কৰিছো ‘মেডিকেল ইকুইপমেন্ট্ পাৰ্টনাৰ’ৰ সৈতে যি বুকিংৰ সময়ত কৰা বিশেষ অনুৰোধত আপোনাৰ ৰিকুৱেষ্ট অনুযায়ী নতুবা ডাক্তৰৰ পৰামৰ্শমতে কম দামতে দৰকাৰী ঘৰুৱা সৰঞ্জামসমুহ উপলব্ধ কৰোৱায়।",
        },
        {
          content:
            "আপুনি সৰঞ্জামসমুহৰ এভেইলেবিলিটী নতুবা তাৰ এডভাঞ্চ বুকিং চিকিৎসাযাত্ৰাৰ আগতেই কৰাব পাৰে।",
        },
      ],
      lft_equipment_content_bengali: [
        {
          content:
            "বাড়িতে চিকিৎসা করার যন্ত্রপাতি নানান আকারের, মাপের এবং ওজনের হতে পারে। বিমান যাত্রার জন্য আপনার বেশী যায়গা, বেশী টাকা, বিশেষ আয়োজন এবং কখনো কখনো আইনি ছাড়পত্রের প্রয়োজন হতে পারে। তাই নিজের ব্যাবহার করা যন্ত্রপাতি না নিয়ে যাওয়াই ভাল। যদিও কিছু কিছু বিমান সংস্থা, চিকিৎসাধীন যাত্রীদের নিজেদের চিকিৎসার যন্ত্র এবং সচল থাকার সাহায্যকারী যন্ত্র সঙ্গে রাখার অনুমতি দেয়, দুরপাল্লার যাত্রীদের এগুলো সঙ্গে রাখা একটু অসুবিধের হতে পারে। ব্যাটারি চালিত হুইলচেয়ার, সচল থাকার সাহায্যকারী যন্ত্র, এপ্নিয়া মনিটর, অন্য কোন চিকিৎসার যন্ত্র বা অক্সিজেন সিলিন্ডার, ম্যাঙ্গো হোমZ-এ আমরা খেয়াল রাখি আপনার চিকিৎসার সরঞ্জাম যাতে আপনার এই চিকিৎসা যাত্রায় নিরাপদ ও নিরঝঞ্জাটেই আপনার সাথে পৌঁছয়।",
        },
      ],
      rgt_equipment_content_bengali: [
        {
          content:
            "ম্যাঙ্গোহোমZ-এর চিকিৎসা সফর-এ, আপনাকে ভারি বা বেঢপ সাইজের আপনার নিজস্ব চিকিৎসার সরঞ্জাম বইতে হবে না। ",
        },
         {
          content:
            "বুকিঙ্গের সময় করা অনুরোধ অনুযায়ী, আমাদের চিকিৎসা সরঞ্জাম সরবরাহকারি সহযোগীরা- আপনার প্রয়োজনীয়, বাড়িতে ব্যাবহারযোগ্য চিকিৎসা সরঞ্জাম, সেটা আপনার নির্দিষ্ট প্রয়োজনানুগ হোক অথবা ডাক্তারের নির্দেশ অনুযায়ী, যেমন দরকার তেমন যন্ত্র, সুলভে জোগাড় করে দেবে। ",
        },
        {
          content:
            "যাত্রা শুরুর আগেই, যে যন্ত্র আপনার প্রয়োজন, সেটা পাওয়া যাচ্ছে কি না দেখে, আপনি বুক করে রাখতে পারেন।",
        },
      ],
      lft_equipment_content_Oriya: [
        {
          content:
            "ହୋମ ମେଡିକାଲ ଉପକରଣ ଗୁଡିକ ବିଭିନ୍ନ ଆକୃତି, ଆକାର ଏବଂ ଓଜନରେ ଆସେ । ଆପଣଙ୍କର ଚିକିତ୍ସା ଯାତ୍ରା ସମୟରେ ଏହିସବୁ ଉପକରଣକୁ ନବା ଆଣିବା ପାଇଁ ଆପଣଙ୍କୁ ଅନେକଗୁଡିଏ ଅସୁବିଧାରେ ସମ୍ମୁଖୀନ ହେବାକୁ ପଡ଼ିଥାଏ ଏବଂ ଏଥିପାଇଁ ଅଧିକ ଖର୍ଚ୍ଚ ମଧ୍ୟ ହୋଇଥାଏ । କିନ୍ତୁ MangoHomz ବହୁ ପାର୍ଟନରମାନଙ୍କ ସହିତ ଜଡ଼ିତ ଯେଉଁମାନେ କି ଏହିସବୁ ଉପକରଣ ଯଥା ବ୍ୟାଟେରୀ, ହୁଇଲ ଚେୟାର, ଷ୍ଟ୍ରେଚର, ଅକ୍ସିଜେନ ମନିଟର ଇତ୍ୟାଦି ଉପଲବ୍ଧ କରାଇ ଥାଆନ୍ତି । ସେଥିପାଇଁ ଯାତ୍ରା ପୂର୍ବରୁ ନିଜର ଦରକାର ମୁତାବକ ଉପକରଣ ସୁଲଭ ମୂଲ୍ୟରେ ବୁକ୍ କରନ୍ତୁ ଏବଂ ଶାନ୍ତିରେ ଯାତ୍ରା କରନ୍ତୁ ।",
        },
      ],
      rgt_equipment_content_Oriya: [
        {
          content:
            "ହୋମ ମେଡିକାଲ ଉପକରଣ ଗୁଡିକ ବିଭିନ୍ନ ଆକୃତି, ଆକାର ଏବଂ ଓଜନରେ ଆସେ । ଆପଣଙ୍କର ଚିକିତ୍ସା ଯାତ୍ରା ସମୟରେ ଏହିସବୁ ଉପକରଣକୁ ନବା ଆଣିବା ପାଇଁ ଆପଣଙ୍କୁ ଅନେକଗୁଡିଏ ଅସୁବିଧାରେ ସମ୍ମୁଖୀନ ହେବାକୁ ପଡ଼ିଥାଏ ଏବଂ ଏଥିପାଇଁ ଅଧିକ ଖର୍ଚ୍ଚ ମଧ୍ୟ ହୋଇଥାଏ । କିନ୍ତୁ MangoHomz ବହୁ ପାର୍ଟନରମାନଙ୍କ ସହିତ ଜଡ଼ିତ ଯେଉଁମାନେ କି ଏହିସବୁ ଉପକରଣ ଯଥା ବ୍ୟାଟେରୀ, ହୁଇଲ ଚେୟାର, ଷ୍ଟ୍ରେଚର, ଅକ୍ସିଜେନ ମନିଟର ଇତ୍ୟାଦି ଉପଲବ୍ଧ କରାଇ ଥାଆନ୍ତି ।",
        },
        {
          content:
            "ସେଥିପାଇଁ ଯାତ୍ରା ପୂର୍ବରୁ ନିଜର ଦରକାର ମୁତାବକ ଉପକରଣ ସୁଲଭ ମୂଲ୍ୟରେ ବୁକ୍ କରନ୍ତୁ ଏବଂ ଶାନ୍ତିରେ ଯାତ୍ରା କରନ୍ତୁ",
        },
      ],
    };
  },
};
</script>
