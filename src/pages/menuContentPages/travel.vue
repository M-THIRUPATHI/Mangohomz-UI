<template>
  <div>
    <!-- English Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-travel-page-top-image"></div>
        <div class="gt-xs col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              Travel well. Get well.
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in travel_content_english"
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
        <div class="col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              Travel well. Get well.
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in travel_content_english"
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
        <div class="lt-sm col-12 mh-mobile-travel-page-top-image"></div>
        <div class="gt-xs col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              सुखद यात्रा। स्वस्थ यात्रा।
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in travel_content_hindi"
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
        <div class="col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              सुखद यात्रा। स्वस्थ यात्रा।
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in travel_content_hindi"
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
        <div class="lt-sm col-12 mh-mobile-travel-page-top-image"></div>
        <div class="gt-xs col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              ভাল যাত্ৰা কৰক আৰু সুস্থ থাকক
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in travel_content_assamese"
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
        <div class="col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ভাল যাত্ৰা কৰক আৰু সুস্থ থাকক
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in travel_content_assamese"
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
        <div class="lt-sm col-12 mh-mobile-travel-page-top-image"></div>
        <div class="gt-xs col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              শুভ যাত্রা । ভাল থাকুন ।
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in travel_content_bengali"
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
        <div class="col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              শুভ যাত্রা । ভাল থাকুন ।
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in travel_content_bengali"
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

    <!-- Oriya Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-travel-page-top-image"></div>
        <div class="gt-xs col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              ଭଲ ଭାବରେ ଯାତ୍ରା କରନ୍ତୁ ସୁସ୍ଥ ହୋଇଯାଆନ୍ତୁ :
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in travel_content_Oriya"
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
        <div class="col-12 mh-travel-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ଭଲ ଭାବରେ ଯାତ୍ରା କରନ୍ତୁ ସୁସ୍ଥ ହୋଇଯାଆନ୍ତୁ :
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in travel_content_Oriya"
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
  name: "tarvel",
  components: {},
  data() {
    return {
      title: "Travel",
      // Travel well. Get well.
      // सुखद यात्रा। स्वस्थ यात्रा।
      travel_content_english: [
        {
          content:
            "At MangoHomz, we have handpicked our ‘Transport Partners’ who offer well-maintained vehicles and certified drivers to ensure smooth, problem-free transport from airports, railway/bus stations to the MangoHomz property or hospital.",
        },
        {
          content:
            "If Pre-booked get ready to be greeted and picked up by a well-trained, well-behaved driver the moment you step out of the airport or railway/bus station. Once you meet the MangoHomz certified driver, get ready for a smooth ride to the MangoHomz property or hospital, as per your schedule.",
        },
        {
          content:
            "We also provide vehicles for Non-Emergency Patient Transport (NEPT) for patients who require clinical monitoring or supervision during transport, but not a time-critical ambulance response.",
        },
        {
          content:
            "Upon special request made at the time of booking a room, we will definitely strive to arrange for vehicles in special cases for patients having an illness or disability that makes it impractical to use any other form of transport; for example, severe immobility or disorientation.",
        },
        {
          content:
            "MangoHomz regularly monitors its transport service providers – to ensure that their fleet of cars is in good enough shape to provide safe, hassle-free rides to the patients and their companions at a reasonable cost.",
        },
      ],
      travel_content_hindi: [
        {
          content:
            "MangoHomz में, हमने देश भर से कुछ ऐसे प्रतिष्ठित 'ट्रांसपोर् पार्टनर्स' को चुना है, जो हवाई अड्डों, रेलवे/बस स्टेशनों स MangoHomz प्रॉपर्टी या अस्पताल तक आसान, समस्या-मुक्त ट्रेवल सुनिश्चित करने के लिए आपकी जरुरत के हिसाब से आरामदायक वाहनों और प्रक्षिक्षित ड्राइवरों की व्यवस्था करते हैं।",
        },
        {
          content:
            "आपके हवाई अड्डे या रेलवे / बस स्टेशन से बाहर कदम रखते ही आपक द्वारा प्री-बुक्ड - अच्छी तरह से प्रशिक्षित, अच्छे व्यवहार वाल ड्राइवर आपके स्वागत के लिए तैयार रहते हैं, जो की आपके शेड्यूल क अनुसार आपको आपकी बुक की हुयी MangoHomz प्रॉपर्टी या अस्पताल तक आराम से और सुरक्षित ढंग से पहुंचाते हैं।",
        },
        {
          content:
            "हम उन रोगियों के लिए गैर-आपातकालीन रोगी परिवहन (एनईपीटी) के लिए वाहन भी प्रदान करते हैं, जिन्हें परिवहन के दौरान क्लीनिकल निगरानी या सुपरविज़न की जरुरत होती है। हम अभी टाइम क्रिटिकल एम्बुलेंस रिस्पांस सेवा नहीं देते हैं।",
        },
        {
          content:
            "लेकिन कमरा बुक करते समय आपके विशेष अनुरोध पर, हम निश्चित रूप स ऐसे रोगियों के लिए, जो किसी बीमारी या विकलांगता से ग्रस्त हैं और जिनके लिए ट्रेवल के दौरान किसी और ट्रांसपोर्ट के साधन का इस्तेमाल संभव न हो, उनकी विशेष जरुरतों के हिसाब से वाहन का इंतेज़ाम करते है। ये ऐसे मरीज़ों के लिए बहुत उपयोगी व्यवस्था है, जो की चलने-फिरने मे असमर्थ हैं।",
        },
        {
          content:
            "MangoHomz नियमित रूप से अपने ट्रेवल पार्टनर्स और उनके वाहनों क जाँच करता रहता है - यह सुनिश्चित करने के लिए कि उनके वाहन रोगियो और उनके साथियों को उचित कीमत पर सुरक्षित, परेशानी मुक्त ट्रेवल देने में समर्थ है की नहीं।",
        },
      ],
      travel_content_assamese: [
        {
          content:
            "মেংগ’হ’মচে সহযোগ কৰিছে বিভিন্ন ‘ট্ৰেন্সপোৰ্ট পাৰ্টনাৰ’ৰ স’তেও যি এয়াৰপৰ্ট, ৰেল-বাচ ষ্টেচনৰ পৰা মেংগ’হ’মচৰ আৱাসলৈ তথা হস্পিতেললৈ মসৃন, সমস্যাবিহীন পৰিবহন নিশ্চিত কৰাৰ বাবে সুৰক্ষিত যানবাহন ও প্ৰতা্য়িত চালক উপলব্ধ কৰায়।",
        },
        {
          content:
            "যদি প্ৰি-বুকিং আছে, তেনেহলে আপুনি ৰেল ষ্টেচন বা এয়াৰপৰ্টৰ মুখতেই এজন প্ৰশিক্ষিত ও বিনয়ী চালকৰ পৰা সম্ভাষণ পাবলৈ সাজু হৈ থাকক। আপুনি এবাৰ মেংগ’হ’মচ প্ৰত্যায়িত চালকক দেখা কৰি সময়সুচী অনুযায়ী মেংগ’হ’মচৰ আৱাস তথা হস্পিতেললৈ মসৃন যাত্ৰাৰ বাবে প্ৰস্তুত হওক।",
        },
        {
          content:
            "আমি যাতায়াতৰ সময়ছোৱাত ক্লিনিকেল মনিটৰিং ও চুপাৰভিজন দৰকাৰ হোৱা ৰোগীৰ বাবে নন্-ইমাৰজেঞ্চী-পেচেন্ট-ট্ৰান্সপোৰ্টৰো যোগান ধৰো, যদিও টাইম ক্ৰীটিকেল এম্বুলেন্সসেৱা আমাৰ নাই।",
        },
        {
          content:
            "বুকিং বিশেষ অনুৰোধৰ ভিত্তিত আমি অৱশ্যেই অসুস্থ বা বিশেষ প্ৰতিবন্ধকতা থকা ৰোগীৰ বাবে বিশেষ ধৰনৰ পৰিবহনৰ ব্যৱস্থা আমাৰ ট্ৰেভেলিং পাৰ্টনাৰৰ তাত মজুত আছেনে নাই তাত নজৰ ৰাখো, যাতে আমাৰ আলহী ও সংগীয়ে বিশেষ অসুবিধা বা কষ্ট নোপোৱাকৈ সুলভ মূল্যতেই যাত্ৰা কৰিব পাৰে।",
        },
        {
          content:
            "মেংগ’হ’মচে মনিটৰ কৰে যাতে সহযোগ কৰা বিভিন্ন ট্ৰেন্সপোৰ্ট পাৰ্টনাৰে সদায়ে সঠিক ধৰনৰ বা আকাৰৰ যাতায়াতহে উপলব্ধ কৰায় যাতে ৰোগী ও সংগীক সুৰক্ষিত আৰু অসুবিধাবিহীন যাত্ৰা সুলভ মূল্যতেই কৰাব পাৰি।",
        },
      ],
      travel_content_bengali: [
        {
          content:
            "ম্যাঙ্গোহোমZ-এ আমরা নিজেরা দেখে আমাদের সহযোগী পরিবহণ সংস্থা নির্বাচন করেছি। যারা সযত্নে রাখা গাড়ি, পরীক্ষিত চালক দিয়ে আপনাকে এয়ারপোর্ট, রেল বা বাস স্টেশন থেকে ম্যাঙ্গোহোমZ-এর নিজস্ব সম্পত্তি বা হাসপাতালে, একেবারে নিরাপদে পৌঁছে দেবে। ",
        },
        {
          content:
            "আগে থেকে বুক করা থাকলে, তৈরি থাকুন এয়ারপোর্ট,রেল বা বাস স্টেশন থেকে বেরনোর পরই নম্র,মার্জিত চালক আপনাকে সসন্মানে নিয়ে বসাবে আমাদের গাড়িতে।ম্যাঙ্গো হোমZ-এর প্রমাণপত্র হাতে চালকের সাথে দেখা হওয়ার পরই তৈরি থাকুন আপনার পরিকল্পনা অনুযায়ী ম্যাঙ্গোহোমZ-এর থাকার যায়গা বা হাসপাতালে, আরামে, গাড়িতে পৌঁছনর জন্যে। ",
        },
        {
          content:
            "নন-ইমারজেন্সি চিকিৎসাধীন ব্যাক্তির জন্য বিশেষ গাড়ির বন্দোবস্ত থাকে আমাদের, যাতে আপনার স্বাস্থের উন্নতি–অবনতি মেশিনের সাহায্যে নজর রাখা যায়। কিন্তু জটিল অবস্থায় প্রয়োজনীয় এম্বুলেন্সের দায়িত্ব আমাদের আওতার বাইরে।",
        },
        {
          content:
            "ঘর বুক করার সময় যদি আমাদের জানানো হয় যে অতিথির হাঁটা-চলার ক্ষমতা নেই বা পরিষ্কার ভাবে ভাবতে অসুবিধে হচ্ছে, সেক্ষেত্রে যেহেতু সাধারণ যানবাহন কাজে আসবে না, আমরা চেষ্টা করি বিশেষ গাড়ির বন্দোবস্ত করার যাতে আমাদের অতিথির কোন অসুবিধে না হয়। ",
        },
        {
          content:
            "ম্যাঙ্গোহোমZ-এ আমরা নিয়মিত আমাদের সহযোগী পরিবহন সংস্থার সঙ্গে যোগাযোগ রাখি-খেয়াল রাখি যাতে আমাদের যানবাহন সবদিক থেকে তৈরী থাকে, নিরাপদ ও নিরঝঞ্ঝাটে আমাদের অতিথি ও তার সঙ্গের মানুষজনকে নির্দিষ্ট জায়গায় পৌঁছতে পারে।অবশ্যই সঠিক খরচে। ",
        },
      ],
      travel_content_Oriya:[
        {
          content:
            "MangoHomz ରେ ଆମେ ଆମର ଟ୍ରାନ୍‌ସପୋର୍ଟ ପାର୍ଟନରମାନଙ୍କୁ ବହୁତ ଯତ୍ନ ସହକାରେ ବାଛିଥାଉ, ଯେଉଁମାନେ ବିମାନବନ୍ଦର, ରେଳ, ବସ ଷ୍ଟେସନରୁ MangoHomz ଘର କିମ୍ବା ଡାକ୍ତରଖାନାକୁ ଯିବା ପାଇଁ ଗାଡିର ସୁବନ୍ଦୋବସ୍ତ କରିଥାନ୍ତି । ",
        },
        {
          content:
            "ଯଦି ଆପଣ MangoHomz ଟ୍ରାନ୍‌ସପୋର୍ଟରେ ଗାଡି ବୁକ୍ କରିଛନ୍ତି ତାହାହେଲେ ଆପଣ ନିଶ୍ଚିତରେ MangoHomz ଘରେ ପହଞ୍ଚିପାରିବେ । ଆମେ କେବଳ ଅଣଜରୁରୀକାଳୀନ ରୋଗୀ ପରିବହନ ଯାନ ଯୋଗାଇ ଦେଇଥାଉ । ",
        },
        {
          content:
            "ଯେଉଁମାନେ ପରିବହନ ସମୟରେ କ୍ଲିନିକାଲ ମନିଟରିଂ କିମ୍ବା ତଦାରଖ ଆବଶ୍ୟକତା କରନ୍ତି ସେମାନଙ୍କ ପାଇଁ ମଧ୍ୟ ଆମ୍ଭେ ପରିବହନ ବ୍ୟବସ୍ଥା କରିଥାଉ ।",
        },
        {
          content:
            "MangoHomz ରେ ରୁମ୍ ଟିଏ ବୁକିଂ କରିବା ସମୟରେ କରାଯାଉଥିବା ବିଶେଷ ଅନୁରୋଧ ଥିଲେ, ଆମେ ନିଶ୍ଚିତ ଭାବରେ ଅକ୍ଷମତା ଥିବା ରୋଗୀଙ୍କ ପାଇଁ ଯାନବାହାନର ବ୍ୟବସ୍ଥା କରିବାକୁ ଚେଷ୍ଟା କରିବୁ ।",
        },
        {
          content:
            "MangoHomz ନିୟମିତ ଭାବରେ ଏହାର ପରିବହନ ସେବା ପ୍ରଦାନକାରୀଙ୍କ ଉପରେ ନଜର ରଖେ । ରୋଗୀ ଏବଂ ସେମାନଙ୍କ ସାଥୀଙ୍କୁ ନିରାପଦ, ଅସୁବିଧା ମୁକ୍ତ ଯାତ୍ରା ଯୋଗାଇବା ପାଇଁ ସେମାନଙ୍କ ଯାନଗୁଡିକ ଭଲ ସ୍ଥିତିରେ ଅଛି କି ନାହିଁ ନିଶ୍ଚିତ କରିଥାଏ ।",
        },
      ],
    };
  },
};
</script>
