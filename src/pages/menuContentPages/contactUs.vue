<template>
  <div>
    <!-- English Code -->
    <div
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
      style="max-height: 550px; min-height: 510px"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">Contact Us</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">
            You can reach Our 24x7 Support Team in the following ways:
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> Call Helpline: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon
                  name="fab fa-whatsapp"
                  href="https://wa.me/message/HD437SPUZBPKA1"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> WhatsApp: 8929982655</q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> Telegram: </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section>  <a
              class="text-bold text-primary"
              href="mailto:care@mangohomz.com"
              target="_blank"
              >Email: care@mangohomz.com </a
            > </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
     <div
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'English' ? true : false"
      style="max-height: 550px; min-height: 405px"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">Contact Us</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">
            You can reach Our 24x7 Support Team in the following ways:
          </p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> Call Helpline: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> WhatsApp: 8929982655</q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> Telegram: </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section>  <a
              class=" text-black"
              href="mailto:care@mangohomz.com"
              target="_blank"
              >Email: care@mangohomz.com </a
            > </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <!-- Hindi Code -->

    <div
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
      style="max-height: 550px; min-height: 510px"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">संपर्क करें: 8929982655</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">
            आप हमारी 24X7 सहायता टीम तक निम्नलिखित तरीकों से पहुँच सकते हैं:
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> हेल्पलाइन नंबर: </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon
                  name="fab fa-whatsapp"
                  href="https://wa.me/message/HD437SPUZBPKA1"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> व्हाट्सएप:8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> टेलीग्राम: </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ईमेल: care@mangohomz.com </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <div
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
      style="max-height: 550px; min-height: 405px"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">संपर्क करें: </p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">
            आप हमारी 24X7 सहायता टीम तक निम्नलिखित तरीकों से पहुँच सकते हैं:
          </p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> हेल्पलाइन नंबर: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> व्हाट्सएप: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> टेलीग्राम: </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ईमेल: care@mangohomz.com </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <!-- Assamese -->

    <div
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
      style="max-height: 550px; min-height: 510px"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">যোগাযোগ কৰক:</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">আমাৰ ২৪x৭ কাষ্টমাৰ চাপৰ্ট টিমক যোগাযোগ কৰিবলৈ:</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> হেল্পলাইন নং: ৮৬১৮৯৫৯৭৯৪ </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon
                  name="fab fa-whatsapp"
                  href="https://wa.me/message/HD437SPUZBPKA1"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> হোৱাটচ্‌এপ্‌: 8929982655</q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> টেলিগ্ৰাম: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ই-মেইল: care@mangohomz.com </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <div
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
      style="max-height: 550px; min-height: 405px"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">যোগাযোগ কৰক:</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">আমাৰ ২৪x৭ কাষ্টমাৰ চাপৰ্ট টিমক যোগাযোগ কৰিবলৈ:</p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> হেল্পলাইন নং: ৮৬১৮৯৫৯৭৯৪ </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> হোৱাটচ্‌এপ্‌: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> টেলিগ্ৰাম: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ই-মেইল: care@mangohomz.com </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <!-- Bengali Code -->

    <div
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
      style="max-height: 550px; min-height: 510px"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">যোগাযোগ করুন : 8929982655</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">
           আমাদের সহায়ক দলের সাথে যোগাযোগের উপায় :
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> সহায়ক ফোন : ৮৬১৮৯৫৯৭৯৪ </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon
                  name="fab fa-whatsapp"
                  href="https://wa.me/message/HD437SPUZBPKA1"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> হোয়াটসায়াপ :  </q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> টেলিগ্র্যাম : </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ইমেল : care@mangohomz.com </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
      <div
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
      style="max-height: 550px; min-height: 405px"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">যোগাযোগ করুন :   </p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">
          আমাদের সহায়ক দলের সাথে যোগাযোগের উপায় :
          </p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> সহায়ক ফোন : ৮৬১৮৯৫৯৭৯৪ </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> হোয়াটসায়াপ : 8929982655  </q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section>  টেলিগ্র্যাম : </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ইমেল : care@mangohomz.com </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <!-- Oriya Language -->

    <div
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
      style="max-height: 550px; min-height: 510px"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ |</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">
            ଆପଣ ନିମ୍ନଲିଖିତ ଉପାୟରେ ଆମର 24x7 ସହାୟତା ଦଳରେ ପହଞ୍ଚିପାରିବେ:
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 q-pa-xs" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> ହେଲ୍ପଲାଇନକୁ କଲ୍ କରନ୍ତୁ: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon
                  name="fab fa-whatsapp"
                  href="https://wa.me/message/HD437SPUZBPKA1"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> ହ୍ଟସ୍ ଆପ୍: </q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ଟେଲିଗ୍ରାମ: </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ଇମେଲ୍: care@mangohomz.com </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
     <div
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
      style="max-height: 550px; min-height: 405px"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ |</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-10">
          <p class="mh-p">
            ଆପଣ ନିମ୍ନଲିଖିତ ଉପାୟରେ ଆମର 24x7 ସହାୟତା ଦଳରେ ପହଞ୍ଚିପାରିବେ:
          </p>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10 q-pa-md" style="max-width: 100%">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section> ହେଲ୍ପଲାଇନକୁ କଲ୍ କରନ୍ତୁ: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
            >
              <q-item-section avatar>
                <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ହ୍ଟସ୍ ଆପ୍: 8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ଟେଲିଗ୍ରାମ:8929982655 </q-item-section>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section> ଇମେଲ୍: care@mangohomz.com </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
export default {
  name: "contact-us",
  data() {
    return {
      title: "Contact us",
    };
  },
  methods: {
    goToUrl(url) {
      window.open(url);
    },
  },
};
</script>
<style>
  a {
    text-decoration: none !important;
  }
</style>
