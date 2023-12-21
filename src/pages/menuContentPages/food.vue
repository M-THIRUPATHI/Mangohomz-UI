<template>
  <div>

    <!-- English Code -->
    <!-- Mobile version code -->

    <div
      class="lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="row">
        <div class="lt-sm col-12 mh-mobile-food-page-top-image"></div>
        <div class="gt-xs col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              Eat well. Get well.
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_english"
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
        <div class="col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              Eat well. Get well.
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_english"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_english"
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
        <div class="lt-sm col-12 mh-mobile-food-page-top-image"></div>
        <div class="gt-xs col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              अच्छा खाओ । स्वस्थ हो जाओ ।
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_hindi"
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
        <div class="col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              अच्छा खाओ । स्वस्थ हो जाओ ।
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_hindi"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_hindi"
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
        <div class="lt-sm col-12 mh-mobile-food-page-top-image"></div>
        <div class="gt-xs col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ভাল খাওক, ভালে থাকক
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_assamese"
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
        <div class="col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ভাল খাওক, ভালে থাকক
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_assamese"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_assamese"
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
        <div class="lt-sm col-12 mh-mobile-food-page-top-image"></div>
        <div class="gt-xs col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ভাল খান। সুস্থ থাকুন।
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_bengali"
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
        <div class="col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ভাল খান। সুস্থ থাকুন।
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_bengali"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_bengali"
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
        <div class="lt-sm col-12 mh-mobile-food-page-top-image"></div>
        <div class="gt-xs col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-xs">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ଭଲ ଖାଆନ୍ତୁ ସୁସ୍ଥ ରହନ୍ତୁ :
            </div>
            <div class="row text-justify">
              <div class="col-12 q-pa-xs text-justify">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-12 q-pa-xs">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_Oriya"
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
        <div class="col-12 mh-food-page-top-image"></div>
      </div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <div class="text-h5 justify-center text-bold mh-page-heading">
              ଭଲ ଖାଆନ୍ତୁ ସୁସ୍ଥ ରହନ୍ତୁ :
            </div>
            <div class="row text-justify">
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in lft_food_content_Oriya"
                  :key="item.name"
                >
                  {{ item.content }}
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-10 q-px-md">
                <p
                  class="mh-p"
                  v-for="item in rgt_food_content_Oriya"
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
  name: "food",

  data() {
    return {
      title: "Food",
      lft_food_content_english: [
        {
          content:
            "At MangoHomz, we understand the need for good quality, nutritious food and diet for our discerning guests, who may be missing their homes as well as homemade food.",
        },
      ],
      rgt_food_content_english: [
        {
          content:
            " At MangoHomz, we have tied-up with various ‘Food Partners’ to deliver deliciously nutritious food for each of our guests – patients as well as their companions. The aim is to deliver the right food in the right quantity and at the right time! We ensure that freshly prepared food with hygienic packing is delivered to the patients, enabling them to take all their medicines on time.",
        },
      ],
      lft_food_content_hindi: [
        {
          content:
          "MangoHomz में, हम अपने मेहमानों के लिए अच्छी क्वालिटी वाले पौष्टिक भोजन और आहार की जरुरत को समझते हैं, जो उनको अपने घर से दूर घर जैसे खाने का स्वाद देता है।",
        },
      ],
      rgt_food_content_hindi: [
        {
          content:
            " MangoHomz में, हमने अपने प्रत्येक अतिथि - रोगियों के साथ-साथ उनके साथियों के लिए स्वादिष्ट पौष्टिक भोजन देने के लिए विभिन् 'फूड पार्टनर्स' के साथ करार किया है। हमारा उद्देश्य सही मात्र में और सही समय पर सही भोजन पहुंचाना है! हम यह सुनिश्चित करत हैं कि हाइजीनिक पैकिंग के साथ ताजा तैयार भोजन समय पर मरीजों क दिया जाए, जिससे वे अपनी सभी दवाएं समय पर ले सकें।",
        },
      ],
      lft_food_content_assamese: [
        {
          content:
            "মেংগ’হ’মচ নজৰ ৰাখো আমাৰ আলহীৰ স্বাস্থ্যকৰী গুণ সমৃদ্ধ সুষম আহাৰৰ ওপৰতো, যাৰ নিশ্চয়তে মনত পৰিছে ঘৰ তথা ঘৰুৱা খাদ্যলৈ।",
        },
      ],
      rgt_food_content_assamese: [
        {
          content:
            "সেয়ে আমি টাই-আপ্‌ কৰিছো বিভিন্ন ফুড্‌-পাৰ্টনাৰৰ সৈতে যাতে আমাৰ আলহী ও সংগীৰ বাবে সুষম খাদ্যৰ যোগান ধৰিব পাৰি। আমাৰ ফালৰ পৰা চেষ্টা অব্যাহত থাকে যাতে তাজা আৰু পৰিস্কাৰ খাদ্যৰ পেকেট দৰৱ সময়ত খাব পৰাকৈ যোগান ধৰিব পৰা যায়।",
        },
      ],
      lft_food_content_bengali: [
        {
          content:
            "ম্যাঙ্গোহোমZ-এ আমরা উৎকৃষ্ট, পুষ্টিকর আর প্রয়োজন অনুযায়ী খাবারের দায়িত্ব নি, চেষ্টা করি প্রতিটি বিশিষ্ট অতিথির নিজের বাড়ি ও বাড়ির খাবারের অভাব বোধ পূর্ণ করার। আমরা আমাদের অতিথিদের –যার চিকিৎসা হচ্ছে এবং তার সাথে যারা আছেন,প্রত্যেককেই চমৎকার স্বাদের",
        },
      ],
      rgt_food_content_bengali: [
        {
          content:
            " পুষ্টিকর খাবার পৌঁছে দেবার জন্য বিভিন্ন ‘খাবার সরবরাহের সহযোগী’দের অংশীদার করেছি।লক্ষ একটাই, সঠিক সময়ে, সঠিক পরিমাণে, নির্বাচিত খাবারটা পৌঁছে দেওয়া। টাটকা খাবার, স্বাস্থ্যকর মোড়কে, চিকিৎসাধীন অতিথির কাছে সময়মত পৌঁছনর পুরো দায়িত্ব আমরা নি, যাতে সঠিক সময়ে তার ওষুধপত্র নেবার কোন অসুবিধে না হয়।",
        },
      ],
      lft_food_content_Oriya: [
        {
          content:
            "ଆମେ ଆପଣଙ୍କ ପାଇଁ ଉଚ୍ଚମାନର ପୌଷ୍ଟିକ ଖାଦ୍ୟ ବ୍ୟବସ୍ଥାକୁ ପ୍ରାଧାନ୍ୟ ଦେଉ । ଆପଣ ବାହାରେ ରହି ମଧ୍ୟ ଘରୋଇ ପୌଷ୍ଟିକ ଖାଦ୍ୟ ଖାଇପାରିବେ",
        },
      ],
      rgt_food_content_Oriya: [
        {
          content:
            "MangoHomz ରେ ଆମର ପ୍ରତ୍ୟେକ ଅତିଥି – ରୋଗୀ ଏବଂ ସେମାନଙ୍କ ସାଥୀମାନଙ୍କ ପାଇଁ ସୁସ୍ୱାଦୁ ପୌଷ୍ଟିକ ଖାଦ୍ୟ ଯୋଗାଇବା ପାଇଁ ବିଭିନ ଫୁଡ ପାର୍ଟନରଙ୍କ ସହିତ ଯୋଡି ହୋଇଛୁ । ଲକ୍ଷ୍ୟ ହେଉଛି ସଠିକ୍ ପରିମାଣରେ ଏବଂ ସଠିକ୍ ସମୟରେ ଖାଦ୍ୟ ଯୋଗାଇବା ଏବଂ ଆମେ ସୁନିଶ୍ଚିତ କରୁଯେ ସୁସ୍ଥ ପ୍ୟାକିଂ ସହିତ ସଦ୍ୟ ପ୍ରସ୍ତୁତ ଖାଦ୍ୟ ରୋଗୀ ଏବଂ ତାଙ୍କର ସାଥୀମାନଙ୍କ ପାଇଁ MangoHomz ରେ ସୁବନ୍ଦୋବସ୍ତ କରାଯାଏ ।",
        },
      ],
    };
  },
};
</script>
