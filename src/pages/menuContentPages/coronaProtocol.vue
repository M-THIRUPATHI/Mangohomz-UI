<template>
  <div>
    <!-- English Code -->
    <!-- Mobile version code -->
    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-cp-page-top-image"></div>
        <div class="gt-xs col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading" style="letter-spacing: 1px;">
              Coronavirus (Covid-19) Preventive Measures at MangoHomz.
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_english"
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
        <div class="col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              Coronavirus (Covid-19) Preventive Measures at MangoHomz.
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_english"
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
        <div class="lt-sm col-12 mh-mobile-cp-page-top-image"></div>
        <div class="gt-xs col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              MangoHomz में कोरोनावायरस (कोविड -19) के दौरान बरती जाने वाली
              सावधानियां ।.
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_hindi"
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
        <div class="col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              MangoHomz में कोरोनावायरस (कोविड -19) के दौरान बरती जाने वाली
              सावधानियां ।
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_hindi"
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
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-cp-page-top-image"></div>
        <div class="gt-xs col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              মেংগ’হ’মচত কভিড-১৯ প্ৰতিৰোধৰ সমলসমুহ:
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_assamese"
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
        <div class="col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              মেংগ’হ’মচত কভিড-১৯ প্ৰতিৰোধৰ সমলসমুহ:
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_assamese"
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
        <div class="lt-sm col-12 mh-mobile-cp-page-top-image"></div>
        <div class="gt-xs col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              ম্যাঙ্গো হোমZ-এ করোনাভাইরাস ( কোভীড-১৯) নিয়নত্রণ ও প্রতিষেধক
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_bengali"
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
        <div class="col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ম্যাঙ্গো হোমZ-এ করোনাভাইরাস ( কোভীড-১৯) নিয়নত্রণ ও প্রতিষেধক
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_bengali"
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
        <div class="lt-sm col-12 mh-mobile-cp-page-top-image"></div>
        <div class="gt-xs col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 text-bold mh-page-heading">
              ଆବାସରେ କରୋନା ଭାଇରସ୍ (କୋଭିଡ-୧୯) ପ୍ରତିରୋଧକ ପଦକ୍ଷେପ |
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_Oriya"
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
        <div class="col-12 mh-cp-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ଆବାସରେ କରୋନା ଭାଇରସ୍ (କୋଭିଡ-୧୯) ପ୍ରତିରୋଧକ ପଦକ୍ଷେପ |
            </div>
            <div class="row text-justify">
              <div class="col-lg-12 col-md-12 col-sm-10 q-px-md">
                <p
                  class="mh-p addBoldStyle1"
                  v-for="item in protocol_content_Oriya"
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
  name: "covid-protocols",
  data() {
    return {
      title: "Our Covid Protocols",

      protocol_content_english: [
        {
          content:
            " Every MangoHomz property welcomes with you with a host of preventive measures against the novel Coronavirus (Covid-19). Our staff has been trained to follow a stringent set of SOPs (Standard Operating Procedures) to prevent the Coronavirus.",
        },
        { content: "WAITING AREA" },
        { content: "1. Regular surface cleaning with disinfectants" },
        { content: "2. Cleaning of the door handles elevator" },
        { content: "3. Time to time cleaning of furniture" },
        { content: "ROOM" },
        {
          content:
            " Guests are greeted with a handy MangoHomz Welcome Kit, containing Hand sanitisers, tissue and disposable gloves. Besides, the rooms are sanitised before check-in and after check-out to ensure it is  safe for the next guest. The sanitisation includes the following:",
        },
        { content: "1. Regular cleaning" },
        {
          content:
            "2. Sanitisation of electronic items such as Remote Control of TV and AC",
        },
      ],

      protocol_content_hindi: [
        {
          content:
          " MangoHomz की हर प्रॉपर्टी नोवेल कोरोनावायरस (कोविड-19) के खिलाफ बरती गयी कई सावधानियों के साथ आपका स्वागत करती है। हमारे स्टाफ को कोरोना वायरस से बचाव के लिए कड़े एसओपी (स्टैंडर्ड ऑपरेटिंग प्रोसीजर) का पालन करने के लिए प्रशिक्षित किया गया है ।",
        },
        {
          content: "वेटिंग एरिया",
        },
        {
          content: "1. डिसइंफेक्टेंट्स के साथ हर कोने की नियमित सफाई.",
        },
        {
          content: "2. दरवाज़े के हैंडल और लिफ्ट की सफाई.",
        },
        {
          content: "3. समय-समय पर फर्नीचर की सफाई.",
        },
        {
          content: "रूम",
        },
        {
          content:
          "मेहमानों का स्वागत एक सुविधाजनक MangoHomz वेलकम किट से किया जात है, जिसमें हैंड सैनिटाइज़र, टिश्यू और डिस्पोजेबल दस्ताने होते हैं। इसके अलावा, चेक - इन से पहले और चेक - आउट के बाद कमरों को साफ किया  जाता है ताकि यह सुनिश्चित हो सके कि यह अगले मेहमान के लिए सुरक्षित है ।",
        },
        {
          content:
          "स्वच्छता में निम्नलिखित शामिल हैं : ",
        },
        {
          content: "1. नियमित सफाई.",
        },
        {
          content:
          "2. टीवी और एसी के रिमोट कंट्रोल जैसे इलेक्ट्रॉनिक सामानों का सैनिटाइजेशन.",
        },
      ],
      protocol_content_assamese: [
        {
          content:
            "প্ৰ্ৰতিটো মেংগ’হ’মচ আৱাসত আপোনাক কভিড-১৯ প্ৰতিৰোধৰ সমলসমুহৰ স’তে আদৰণি জনোৱা হয়। আমাৰ স্টাফক প্ৰশিক্ষিত কৰা হৈছে যাতে আপোনাৰ সুৰক্ষাৰ বাবে ষ্টেণ্ডাৰ্ড অপাৰেটিং প্ৰচিডিউৰৰ চেট্‌ মানি চলা হয়।",
        },
        { content: "অপেক্ষাৰ ঠাই:" },
        {
          content:
            "১. প্ৰত্যেকটো চাৰফেচেই প্ৰতিদিনেই ডিচইন্ফেক্টেন্টেৰে পৰিস্কাৰ কৰা হয়।",
        },
        { content: "২. দুৱাৰৰ হেণ্ডেল, এলিভেটৰ আদিও পৰিস্কাৰ কৰা হয়।" },
        { content: "৩. সময়ে-সময়ে ফাৰ্ণিচাৰসমুহো পৰিস্কাৰ কৰা হয়।" },
        { content: "কোঠা:" },
        {
          content:
            "আমাৰ আলহীক আদৰণিৰ বাবে মেংগ’হ’মচৰ তৰফৰ পৰা দিয়া হয় এটা ৱেলকাম কিট্‌ য’ত থাকে হেণ্ড-চেনিটাইজাৰ, টিছু আৰু ডিচপ’জেবল গ্ল’ভচ্‌।  আলহীৰ সুৰক্ষাৰ বাবে চেক্‌-ইন্‌ৰ আগেয়ে আৰু চেক্‌-আউটৰ পাছত প্ৰত্যেকটো কোঠাকেই চেনিটাইজ কৰা হয়, য’ত সন্নিবিষ্ট কৰা হয়:",
        },
        { content: "১.ৰেগুলাৰ ক্লিনিং।" },
        {
          content:
            "২.ইলেক্ট্ৰনিক আইটেম যেনে টি.ভি আৰু এ.চিৰ ৰিম’ট কন্ট্ৰল ইত্যাদিৰ চেনিটাইজেছন।",
        },
      ],
      protocol_content_bengali: [
        {
          content:
            "প্রত্যেক্টি ম্যাঙ্গোহোমZ-এর আবাসন করোনাভাইরাস নিয়নত্রণের জন্য একগুচ্ছ প্রতিষেধক ব্যবস্থা নিয়ে আপনাকে স্বাগত জানাবে। করোনাভাইরাস নিয়ন্ত্রনে আমাদের কর্মচারীরা সবাই বিশেষভাবে শিক্ষিত, সবাই আমাদের স্ট্যান্ডারড অপারেটিং প্রসেডিওর মেনে এখানে কাজ করে ।  ",
        },
        { content: "প্রতীক্ষালয় :" },
        { content: "১। নিয়মিত জীবানুনাশক দিয়ে সব জায়গা পরিষ্কার করা।" },
        { content: "২। লিফটের দরজার হাতল পরিষ্কার।" },
        { content: "৩। সময়মত আসবাব পরিষ্কার করা।" },
        { content: "থাকার ঘর:" },
        {
          content:
            "অতিথিদের স্বাগত জানানো হয় ম্যাঙ্গোহোমZ-এর বরণডালা দিয়ে। এটা খুব কাজের, এতে হাতের জীবাণুনাশক, টিস্যু এবং বর্জ্য দস্তানা থাকে।এছাড়াও ঘর নেওয়া এবং ছেড়ে দেওয়ার সময় জীবাণুনাশক দিয়ে পরিষ্কার করা হয় যাতে পরবর্তী আতিথি নিরাপদ থাকে।জীবাণুনাশের প্রক্রিয়াতে নিচের অংশগুলো পড়ে:",
        },
        { content: "১। নিয়মিত পরিষ্কার রাখা।" },
        {
          content:
            "২। জীবাণুনাশক দিয়ে টিভি এবং এসির রিমোট পরিষ্কার করা। ",
        },
      ],
      protocol_content_Oriya: [
        {
          content:
            "ପ୍ରତ୍ୟେକ MangoHomz ଆବାସ କରୋନା ଭାଇରସ ପ୍ରତିରୋଧକ ପ୍ରଣାଳୀ ବ୍ୟବସ୍ଥା ସହିତ ଆପଣଙ୍କୁ ସ୍ୱାଗତ କରେ । କରୋନା ଭାଇରସ୍‌କୁ ପ୍ରତିରୋଧ କରିବା ପାଇଁ ଆମର କର୍ମଚାରୀମାନଙ୍କୁ ତାଲିମ୍ ଦିଆଯାଇଛି ।",
        },
        { content: "MangoHomz ୱେଟିଙ୍ଗ୍ ଏରିୟା" },
        { content: "(କ)	ନିୟମିତ ଡିସ୍‌ଇନ୍‌ଫେକ୍‌ଟାଣ୍ଟ ଦ୍ୱାରା ଘର ପରିଷ୍କାର କରାଯାଇଥାଏ ।" },
        { content: "(ଖ)	ନିୟମିତ ଲିପ୍ଟ ହ୍ୟାଣ୍ଡେଲକୁ ପରିଷ୍କାର କରାଯାଏ ।" },
        { content: "(ଗ)	ନିୟମିତ ସୋଫା ଏବଂ ଫର୍ଣ୍ଣିଚରକୁ ପରିଷ୍କାର କରାଯାଇଥାଏ ।" },
        { content: "ରୁମ୍" },
        {
          content:
            "ଆମେ MangoHomz ରେ ଅତିଥିମାନଙ୍କୁ ହ୍ୟାଣ୍ଡ୍ ସାନିଟାଇଜର, ଗ୍ଲୋବ୍‌ସ ଇତ୍ୟାଦି ଉପହାର ଦିଆଯାଇଥାଏ । ଏହା ତାଙ୍କର ମେଡ଼ିକାଲ ରହଣୀ ସମୟରେ କାମରେ ଆସିଥାଏ । ଏହାଛଡ଼ା ଅତିଥିମାନେ ରହିବା ପୂବରୁ ଏବଂ ଛାଡ଼ିବା ପରେ ପ୍ରତେକ ରୁମ୍‌କୁ ସାନିଟାଇଜ୍ କରାଯାଏ ।",
        },
        { content: "ଆମେ MangoHomz ରେ ଅତିଥିମାନଙ୍କୁ ହ୍ୟାଣ୍ଡ୍ ସାନିଟାଇଜର, ଗ୍ଲୋବ୍‌ସ ଇତ୍ୟାଦି ଉପହାର ଦିଆଯାଇଥାଏ ।" },
        {
          content:
            "ଏହା ତାଙ୍କର ମେଡ଼ିକାଲ ରହଣୀ ସମୟରେ କାମରେ ଆସିଥାଏ । ଏହାଛଡ଼ା ଅତିଥିମାନେ ରହିବା ପୂବରୁ ଏବଂ ଛାଡ଼ିବା ପରେ ପ୍ରତେକ ରୁମ୍‌କୁ ସାନିଟାଇଜ୍ କରାଯାଏ ।",
        },
      ],
    };
  },
};
</script>
<style>
  .addBoldStyle1:nth-child(2), .addBoldStyle1:nth-child(6) {
    font-weight: bold;
  }
</style>
