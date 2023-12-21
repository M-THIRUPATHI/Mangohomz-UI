<template>
    <q-header class="q-py-sm bg-white">
    <q-toolbar class="bg-white text-black">
      <router-link to="/">
        <q-img
          clickable
          class="bg-white gt-xs"
          style="height: 50px; width: 280px;background-size:contain;"

          src="~assets/logos/logo-main.png"
        />
        <q-img
          clickable
          class="bg-white lt-sm"
          style="height: 50px; width: 280px;background-size:contain;"

          src="~assets/logos/logo-main.png"
        />
      </router-link>
      <q-space />

    </q-toolbar>
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
                    src="~assets/logos/Asset1.png"
                    style="width: 50px; height: 50px; max-width: 50px"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-section>
                    <p class="text-h4 text-primary">Support</p>
                  </q-item-section>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col-10">
            <p class="text-black text-bold">
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
                  <q-item-section class="text-black text-bold"> Call Helpline: 8929982655 </q-item-section>
                </q-item-section>
              </q-item>
              <q-item
                clickable
                @click="
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
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
                  <q-item-section class="text-black text-bold"> WhatsApp: </q-item-section>
                </q-item-section>
              </q-item>
              <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
                <q-item-section avatar>
                  <q-icon name="fab fa-telegram" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section class="text-black text-bold"> Telegram: </q-item-section>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="far fa-envelope" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section class="text-black text-bold"> Email: care@mangohomz.com </q-item-section>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
       <div
        class="bg-accent gt-xs"
        v-show="this.$store.state.account.language == 'English' ? true : false"
        style="max-height: 550px; min-height: 510px"
      >
        <div class="q-pa-md">
          <div class="row mh-page-heading">
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-img
                    src="~assets/logos/Asset1.png"
                    style="width: 50px; height: 50px; max-width: 50px"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-section>
                    <p class="text-h4 text-primary">Support</p>
                  </q-item-section>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col-10">
            <p class="text-black text-bold">
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
                  <q-item-section class="text-black text-bold"> Call Helpline: 8929982655 </q-item-section>
                </q-item-section>
              </q-item>
              <q-item
                clickable
                @click="
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
                "
              >
                <q-item-section avatar>
                  <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section class="text-black text-bold"> WhatsApp: </q-item-section>
                </q-item-section>
              </q-item>
              <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
                <q-item-section avatar>
                  <q-icon name="fab fa-telegram" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section class="text-black text-bold"> Telegram: </q-item-section>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="far fa-envelope" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section class="text-black text-bold"> Email: care@mangohomz.com </q-item-section>
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
                    src="~assets/logos/Asset1.png"
                    style="width: 50px; height: 50px; max-width: 50px"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-section>
                    <p class="text-h4 text-primary">संपर्क करें:</p>
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
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
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
                  <q-item-section> व्हाट्सएप: </q-item-section>
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
        style="max-height: 550px; min-height: 510px"
      >
        <div class="q-pa-md">
          <div class="row mh-page-heading">
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-img
                    src="~assets/logos/Asset1.png"
                    style="width: 50px; height: 50px; max-width: 50px"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-section>
                    <p class="text-h4 text-primary">संपर्क करें:</p>
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
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
                "
              >
                <q-item-section avatar>
                  <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section> व्हाट्सएप: </q-item-section>
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
                    src="~assets/logos/Asset1.png"
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
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
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
                  <q-item-section> হোৱাটচ্‌এপ্‌: </q-item-section>
                </q-item-section>
              </q-item>
              <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
                <q-item-section avatar>
                  <q-icon name="fab fa-telegram" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section> টেলিগ্ৰাম: </q-item-section>
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
        style="max-height: 550px; min-height: 510px"
      >
        <div class="q-pa-md">
          <div class="row mh-page-heading">
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-img
                    src="~assets/logos/Asset1.png"
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
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
                "
              >
                <q-item-section avatar>
                  <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section> হোৱাটচ্‌এপ্‌: </q-item-section>
                </q-item-section>
              </q-item>
              <q-item clickable @click="goToUrl(`https://t.me/MangoHomzBot`)">
                <q-item-section avatar>
                  <q-icon name="fab fa-telegram" color="primary" size="34px" />
                </q-item-section>
                <q-item-section>
                  <q-item-section> টেলিগ্ৰাম: </q-item-section>
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
                    src="~assets/logos/Asset1.png"
                    style="width: 50px; height: 50px; max-width: 50px"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-section>
                    <p class="text-h4 text-primary">যোগাযোগ করুন :</p>
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
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
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
        style="max-height: 550px; min-height: 510px"
      >
        <div class="q-pa-md">
          <div class="row mh-page-heading">
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-img
                    src="~assets/logos/Asset1.png"
                    style="width: 50px; height: 50px; max-width: 50px"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-section>
                    <p class="text-h4 text-primary">যোগাযোগ করুন :</p>
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
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
                "
              >
                <q-item-section avatar>
                  <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
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
                    src="~assets/logos/Asset1.png"
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
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
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
        style="max-height: 550px; min-height: 510px"
      >
        <div class="q-pa-md">
          <div class="row mh-page-heading">
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-img
                    src="~assets/logos/Asset1.png"
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
                  goToUrl(`https://api.whatsapp.com/message/HD437SPUZBPKA1`)
                "
              >
                <q-item-section avatar>
                  <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
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

      <q-card-section class="text-white bg-primary">
    <!-- English Code -->
    <div
      class="row lt-sm"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="col-12">
        <div class="footer-head text-center" style="font-family: verdana">
          Follow Us On
        </div>
        <div>
          <div class="row q-pa-xs mh-align-center">
            <div class="col-3">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="footer-head" style="font-family: verdana">Contact US</div>
        <div style="font-family: verdana">WhatsApp Number: 8929982655</div>
      </div>
      <div class="col-12">
        <div class="footer-head" style="font-family: verdana">
          E-Mail: care@MangoHomz.com
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="row">
          <q-btn
            flat
            class="text-left"
            no-caps
            @click="staffLoginDialog = true"
            style="font-family: verdana"
            >Staff Login</q-btn
          >
        </div>
        <div class="row">
          <q-btn
            flat
            class="text-left"
            no-caps
            @click="adminLoginDialog = true"
            style="font-family: verdana"
            >Admin Login</q-btn
          >
        </div>
        <div class="row">
          <q-btn
            flat
            class="text-left"
            no-caps
            @click="cityLoginDialog = true"
            style="font-family: verdana"
            >City Login</q-btn
          >
        </div>
      </div>
      <div class="col-12">
        <div class="footer-head" style="font-family: verdana">
          Business Hours
        </div>
        <div style="font-family: verdana">
          Monday – Saturday<br />
          10AM – 6 PM
        </div>
      </div>
    </div>
    <div
      class="row gt-xs"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="col-12 col-md-3">
        <div class="footer-head text-center" style="font-family: verdana">
          Follow Us On
        </div>
        <div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md mh-align-left">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" @click="userAgreementDialog = true" href="#">
            Terms & Conditions</span
          >
        </div>
        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" @click="privacyPolicyDialog = true" href="#"
            >Privacy Policy
          </span>
        </div>
        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" @click="refundDialog = true" href="#"
            >Refund/Cancellation Policy</span
          >
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head" style="font-family: verdana">Contact US</div>
        <div style="font-family: verdana">WhatsApp Number:<br />8929982655</div>
        <div style="font-family: verdana">E-Mail:<br />care@MangoHomz.com</div>
      </div>

      <!-- <div class="col-12 col-md-2">
        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" role="link" @click="supportOpenInNewTab()">
            Support Us</span
          >
        </div>
      </div> -->
      <!-- <div class="col-12 col-md-2">
        <div class="row">
          <q-btn
            flat
            class="text-left"
            no-caps
            @click="staffLoginDialog = true"
            style="font-family: verdana"
            >Staff Login</q-btn
          >
        </div>
        <div class="row">
          <q-btn
            flat
            class="text-left"
            no-caps
            @click="adminLoginDialog = true"
            style="font-family: verdana"
            >Admin Login</q-btn
          >
        </div>
        <div class="row">
          <q-btn
            flat
            class="text-left"
            no-caps
            @click="cityLoginDialog = true"
            style="font-family: verdana"
            >City Login</q-btn
          >
        </div>
      </div> -->
      <div class="col-12 col-md-2">
        <div class="footer-head" style="font-family: verdana">
          Business Hours
        </div>
        <div style="font-family: verdana">
          Monday – Saturday<br />
          10AM – 6 PM
        </div>
      </div>
    </div>

    <!-- Hindi Code -->

    <div
      class="row lt-sm"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="col-12">
        <div class="footer-head text-center">अनुसरण करना</div>
        <div>
          <div class="row q-pa-xs mh-align-center">
            <div class="col-3">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="footer-head">संपर्क करें:</div>
        <div>व्हाट्सएप: 8929982655</div>
      </div>
      <div class="col-12">
        <div class="footer-head">ईमेल: care@MangoHomz.com</div>
      </div>
      <div class="col-12">
        <div class="footer-head">व्यवस्थापक लॉगिन</div>
        <div>
          सोमवार – शनिवार<br />
          10AM – 6 PM
        </div>
      </div>
    </div>

    <div
      class="row gt-xs"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="col-12 col-md-3">
        <div class="footer-head text-center">अनुसरण करना</div>
        <div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="footer-head">संपर्क करें:</div>
        <div>व्हाट्सएप:<br />8929982655</div>
      </div>
      <div class="col-12 col-md-3">
        <div class="footer-head">ईमेल:</div>
        <div>care@MangoHomz.com</div>
        <div class="col-12 col-md-2" v-if="user == null">
          <div class="row">
            <q-btn
              flat
              class="text-left"
              no-caps
              @click="staffLoginDialog = true"
              >कर्मचारी लॉगिन</q-btn
            >
          </div>
          <div class="row">
            <q-btn
              flat
              class="text-left"
              no-caps
              @click="adminLoginDialog = true"
              >व्यवस्थापक लॉगिन</q-btn
            >
          </div>
          <div class="row">
            <q-btn
              flat
              class="text-left"
              no-caps
              @click="cityLoginDialog = true"
              >City Login</q-btn
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="footer-head">काम करने के घंटे</div>
        <div>
          सोमवार – शनिवार<br />
          10AM – 6 PM
        </div>
      </div>
    </div>

    <!-- Assam Code -->

    <div
      class="row lt-sm"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="col-12">
        <div class="footer-head text-center">Follow Us On</div>
        <div>
          <div class="row q-pa-xs mh-align-center">
            <div class="col-3">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="footer-head">Contact US</div>
        <div>WhatsApp Number: 8929982655</div>
      </div>
      <div class="col-12">
        <div class="footer-head">E-Mail: care@MangoHomz.com</div>
      </div>
      <div class="col-12">
        <div class="footer-head">Business Hours</div>
        <div>
          Monday – Saturday<br />
          10AM – 6 PM
        </div>
      </div>
    </div>
    <div
      class="row gt-xs"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="col-12 col-md-3">
        <div class="footer-head text-center">Follow Us On</div>
        <div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">Contact US</div>
        <div>WhatsApp Number:<br />8929982655</div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">E-Mail</div>
        <div>care@MangoHomz.com</div>
      </div>
      <div class="col-12 col-md-2">
        <div class="row">
          <q-btn flat class="text-left" no-caps @click="staffLoginDialog = true"
            >Staff Login</q-btn
          >
        </div>
        <div class="row">
          <q-btn flat class="text-left" no-caps @click="adminLoginDialog = true"
            >Admin Login</q-btn
          >
        </div>
        <div class="row">
          <q-btn flat class="text-left" no-caps @click="cityLoginDialog = true"
            >City Login</q-btn
          >
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">Business Hours</div>
        <div>
          Monday – Saturday<br />
          10AM – 6 PM
        </div>
      </div>
    </div>
    <!-- Bengali Code -->
    <div
      class="row lt-sm"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="col-12">
        <div class="footer-head text-center">Follow Us On</div>
        <div>
          <div class="row q-pa-xs mh-align-center">
            <div class="col-3">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="footer-head">যোগাযোগ করুন :</div>
        <div>WhatsApp Number: 8929982655</div>
      </div>
      <div class="col-12">
        <div class="footer-head">E-Mail: care@MangoHomz.com</div>
      </div>
      <div class="col-12">
        <div class="footer-head">Business Hours</div>
        <div>
          Monday – Saturday<br />
          10AM – 6 PM
        </div>
      </div>
    </div>
    <div
      class="row gt-xs"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="col-12 col-md-3">
        <div class="footer-head text-center">Follow Us On</div>
        <div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">যোগাযোগ করুন :</div>
        <div>WhatsApp Number:<br />8929982655</div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">E-Mail</div>
        <div>care@MangoHomz.com</div>
      </div>
      <div class="col-12 col-md-2">
        <div class="row">
          <q-btn flat class="text-left" no-caps @click="staffLoginDialog = true"
            >Staff Login</q-btn
          >
        </div>
        <div class="row">
          <q-btn flat class="text-left" no-caps @click="adminLoginDialog = true"
            >Admin Login</q-btn
          >
        </div>
        <div class="row">
          <q-btn flat class="text-left" no-caps @click="cityLoginDialog = true"
            >City Login</q-btn
          >
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">Business Hours</div>
        <div>
          Monday – Saturday<br />
          10AM – 6 PM
        </div>
      </div>
    </div>

    <!-- Orissa Code -->
    <div
      class="row lt-sm"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="col-12">
        <div class="footer-head text-center">Follow Us On</div>
        <div>
          <div class="row q-pa-xs mh-align-center">
            <div class="col-3">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="footer-head">যোগাযোগ করুন :</div>
        <div>WhatsApp Number: 8929982655</div>
      </div>
      <div class="col-12">
        <div class="footer-head">E-Mail: care@MangoHomz.com</div>
      </div>
      <div class="col-12">
        <div class="footer-head">Business Hours</div>
        <div>
          Monday – Saturday<br />
          10AM – 6 PM
        </div>
      </div>
    </div>
    <div
      class="row gt-xs"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="col-12 col-md-3">
        <div class="footer-head text-center">Follow Us On</div>
        <div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-youtube" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 q-pa-md mh-align-right">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                ><q-icon name="fab fa-instagram" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-md-6 q-pa-md">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-twitter" color="white" size="34px"
              /></q-btn>
            </div>

            <div class="col-3">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-linkedin" color="white" size="34px"
              /></q-btn>
            </div>
            <div class="col-3">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
              >
                <q-icon name="fab fa-quora" color="white" size="34px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">যোগাযোগ করুন :</div>
        <div>WhatsApp Number:<br />8929982655</div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">E-Mail</div>
        <div>care@MangoHomz.com</div>
      </div>
      <div class="col-12 col-md-2">
        <div class="footer-head">Business Hours</div>
        <div>
          Monday – Saturday<br />
          10AM – 6 PM
        </div>
      </div>
    </div>

    <q-dialog v-model="userAgreementDialog" no-backdrop-dismiss>
      <q-card style="min-width: 350px">
        <q-toolbar
          class="bg-primary text-white q-my-md shadow-2"
          style="top: 0; position: sticky; z-index: 100"
        >
          <div
            class="col-11 text-h6 text-bold text-center"
            style="
              font-family: verdana;
              font-size: 16px;
              text-decoration: underline;
            "
          >
            Terms & Conditions
          </div>
          <q-space />

          <q-btn
            dark
            padding="none"
            class="justify-end"
            icon="close"
            color="primary"
            @click="closeTermConditionDialog"
          >
            <q-tooltip>close</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section>
          <div style="font-family: verdana; font-size: 12px">
            <strong>MANGOHOMZ (MH)</strong> coordinates medical trips around the
            world and is bridging the gap between patient and the hospital, it
            provides patient friendly accommodation, food facility, travel
            facility near medical hubs to medical travelers.
            <strong>MANGOHOMZ (MH)</strong> is not a medical professional and
            does not have any hired medical professionals working for their
            company to provide medical advice or make any medical
            recommendations, before or during medical trip. All information
            provided by <strong>MANGOHOMZ (MH)</strong>
            and its staff is strictly for informative and educational guidance
            and should not be interpreted as medical advice.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            By using
            <a
              class="text-bold text-primary"
              href="https://mangohomz.com"
              target="_blank"
              >www.MangoHomz.com</a
            >
            – <strong>MANGOHOMZ (MH)</strong> Online Website for Medical
            Tourism, you hereby agree to be bound by all the terms and
            conditions contained in this User Agreement ("Agreement").
            <a
              class="text-bold text-primary"
              href="https://mangohomz.com"
              target="_blank"
              >www.MangoHomz.com</a
            >
            – <strong>MANGOHOMZ (MH)</strong> reserves the right at its
            discretion to change the Terms of this Agreement and will provide
            notice of any such changes by online posting. Your continued use of
            <a
              class="text-bold text-primary"
              href="https://mangohomz.com"
              target="_blank"
              >www.MangoHomz.com</a
            >
            – <strong>MANGOHOMZ (MH)</strong> Online Web site after the posting
            of any notice of change in terms shall constitute your agreement to
            be bound by any such changes
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            This User Agreement along with Terms Of Service (collectively, the
            "User Agreement") forms the terms and conditions for the use of
            services and products of MangoHomz(MH)
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Any person ("User") who inquiries about or purchases any products or
            services of <strong>MANGOHOMZ (MH)</strong> through its websites,
            mobile applications, sales persons, offices, call centers, branch
            offices, franchisees, agents etc. (all the aforesaid platforms
            collectively referred to as "Sales Channels") agree to be governed
            by this User Agreement. The websites and the mobile applications of
            <strong>MANGOHOMZ (MH)</strong> are collectively referred to as
            'Website’ shall include channel Partners viz Accommodation Partner,
            Booking Agent Partner, Food Partner, Medicine & Medical Equipment
            Partner, Travel Partner
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Both User and <strong>MANGOHOMZ (MH)</strong> are individually
            referred to as 'Party' and collectively referred to as 'Parties' to
            the User Agreement.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Terms of Service" available on <strong>MANGOHOMZ (MH)</strong>'s
            website details out terms & conditions applicable on various
            services or products facilitated by <strong>MANGOHOMZ (MH)</strong>.
            The User should refer to the relevant Terms of Service applicable
            for the given product or service as booked by the User. Such Terms
            of Service are binding on the User
          </div>

          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            ELIGIBILITY TO USE
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User must be atleast 18 years or above age and is legally
            authorized to enter into an agreement so as become a User and use
            the services of <strong>MANGOHOMZ (MH)</strong>.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong>, reserve the right to terminate
            membership and/or block access to the Website if it is discovered
            that a minor or a person incompetent to contract according to the
            law or any information pertaining to age entered at the time of
            creation of account is false.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Before using the Website, approaching any Sales Channels or
            procuring the services of <strong>MANGOHOMZ (MH)</strong>, the Users
            shall compulsorily read and understand this User Agreement, and
            shall be deemed to have accepted this User Agreement as a binding
            document that governs User's dealings and transactions with
            <strong>MANGOHOMZ (MH)</strong>. If the User does not agree with any
            part of this Agreement, then the User must not avail
            <strong>MANGOHOMZ (MH)</strong>'s services and must not access or
            approach the Sales Channels of <strong>MANGOHOMZ (MH)</strong>
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            All rights and liabilities of the User and
            <strong>MANGOHOMZ (MH)</strong> with respect to any services or
            product facilitated by <strong>MANGOHOMZ (MH)</strong>
            shall be restricted to the scope of this User Agreement.
          </div>

          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            CONTENT
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            All content provided through various Sales Channels, including but
            not limited to audio, images, software, text, icons and such similar
            content ("Content"), are registered by
            <strong>MANGOHOMZ (MH)</strong> and protected under applicable
            intellectual property laws. User cannot use this Content for any
            other purpose, except as specified herein.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            User agrees to follow all instructions provided by
            <strong>MANGOHOMZ (MH)</strong>
            which will prescribe the way such User may use the Content.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            There are a number of proprietary logos, service marks and
            trademarks displayed on the Website and through other Sales Channels
            of <strong>MANGOHOMZ (MH)</strong>, as may be applicable.
            <strong>MANGOHOMZ (MH)</strong>
            does not grant the User a license, right or authority to utilize
            such proprietary logos, service marks, or trademarks in any manner.
            Any unauthorized use of the Content, will be in violation of the
            applicable law.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> respects the intellectual property
            rights of others. If you notice any act of infringement on the
            Website, you may inform <strong>MANGOHOMZ (MH)</strong>, at
            <a
              class="text-bold text-primary"
              href="https://www.mangohomz.com/#/"
              target="_blank"
              >www.MangoHomz.com
            </a>
            Website. The Website is meant to be used by bonafide User(s) for a
            lawful use
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            User shall not distribute exchange, modify, sell or transmit
            anything from the Website, including but not limited to any text,
            images, audio and video, for any business, commercial or public
            purpose.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User Agreement grants a limited, non-exclusive, non-transferable
            right to use this Website as expressly permitted in this User
            Agreement. The User agrees not to interrupt or attempt to interrupt
            the operation of the Website in any manner whatsoever.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Access to certain features of the Website may only be available to
            registered User(s). The process of registration may require the User
            to answer certain questions or provide certain information that may
            or may not be personal in nature. Some such fields may be mandatory
            or optional. User represents and warrants that all information
            supplied to <strong>MANGOHOMZ (MH)</strong> is true and accurate.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User/Participant/Patient or his/her family
            members/relatives/escorts/friends making the booking on behalf of
            the Participant/Patient shall read carefully the terms and
            conditions mentioned herein before filling and signing the
            registration form. The User/Participant/Patient (and his/her family
            members/relatives /escorts/ friends making the booking on behalf of
            the Participant/Patient) shall sign this document. The signing of
            the terms & conditions document by the User/Participant/Patient (and
            his/her family members/relatives/escorts/friends making the booking
            on behalf of the Participant/Patient) shall mean acceptance in
            totality of the terms and conditions contained herein by the
            Participant/Patient (and his/her family
            members/relatives/escorts/friends making the booking on behalf of
            the Participant/Patient). The signed terms & conditions documents
            with payment receipt shall be binding on the Participant/Patient
            (and his/her family members/ relatives/escorts/friends making the
            booking on behalf of the User/Participant/ Patient) and shall
            constitute a contract between MANGOHOMZ and the
            User/Participant/Patient (and his/her
            family/members/relatives/escorts/friends making the booking on
            behalf of the Participant / Patient) on the Participant / Patient
            (and his / her family members / relatives / escorts / friends making
            the booking on behalf of the Participant / Patient) signing the
            terms and conditions document and making payment towards the
            Package.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> does not control or operate any
            services of any Channel partner, neither does it operate or control
            any facility or service provided by the Channel partner mentioned in
            the Medical Treatment Package. MANGOHOMZ takes care in selecting all
            the ingredients required by Medical Traveler and has no control
            whatsoever in running the Channel partner. MANGOHOMZ cannot be made
            liable / responsible for any delay, default, failure, improper
            services / deficiency in services provided by the Channel partner
            and / or for any injury, sickness, accident, discomfort, death, loss
            or damage of any kind whatsoever which may arise due to any act of
            negligence, deficiency or default in services, of the management or
            employees of the Channel partner.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> reserves the right, in its sole
            discretion, to terminate the access to the Website and the services
            offered on the same or any portion thereof at any time, without
            notice, for general maintenance or any other reason whatsoever.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> will always make its best endeavours
            to ensure that the content on its websites or other sales channels
            are free of any virus or such other malwares. However, any data or
            information downloaded or otherwise obtained through the use of the
            Website or any other Sales Channel is done entirely at the User's
            own discretion and risk and they will be solely responsible for any
            damage to their computer systems or loss of data that may result
            from the download of such data or information.
          </div>

          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            TERMS OF SERVICE
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> Platform provides the user with:
          </div>

          <div
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 10px;
              padding-left: 20px;
            "
          >
            a. Accommodation partner
          </div>
          <div
            style="font-family: verdana; font-size: 12px; padding-left: 20px"
          >
            b. Travel partner
          </div>
          <div
            style="font-family: verdana; font-size: 12px; padding-left: 20px"
          >
            c. Food partner
          </div>
          <div
            style="font-family: verdana; font-size: 12px; padding-left: 20px"
          >
            d. Booking Agent Partner
          </div>
          <div
            style="font-family: verdana; font-size: 12px; padding-left: 20px"
          >
            e. Medicine & Medical Equipment Partner
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            A. <strong>MANGOHOMZ (MH)</strong> Platform is primarily responsible
            for providing a comfortable room stay, travel facility to medical
            hub and other connected facility for ensuring the acceptability of
            the services as promised by <strong>MANGOHOMZ (MH)</strong> to its
            customers on behalf of its partner.
            <strong>MANGOHOMZ (MH)</strong> has right to direct the
            Accommodation owner to provide the room stay services along with
            other adequate facility as promised for, to
            <strong>MANGOHOMZ (MH)</strong>’s medical travelers.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            B. <strong>MANGOHOMZ (MH)</strong> understands the needs and
            requirements of Medical Traveler and accordingly offers stay and
            other connected facilities of Medical Traveler near
            hospital/Treating Institution through its platform to service its
            medical travelers.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            C <strong>MANGOHOMZ (MH)</strong> markets the room stays, providing
            its medical travelers with the room booking voucher that entitles
            them to avail Hotel stay service in
            <strong>MANGOHOMZ (MH)</strong> branded rooms provided by our
            Channel partners as per terms agreed with
            <strong>MANGOHOMZ (MH)</strong>.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            D. In case medical travelers are not able to select the facilities
            from our website, they can call our customer support desk and our
            team will help you find a suitable accommodation/facility within
            preferred budget and amenities near the Medical hub
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            E. If any check-in is denied for a confirmed booking, MANGOHOMZ MH
            shall ensure that User is provided with an alternate accommodation
            of comparable standards. In an event, where the alternate
            accommodation could not be provided, MANGOHOMZ MH shall arrange for
            the refund (as per <strong>MANGOHOMZ (MH)</strong>)
            <a
              class="text-bold text-primary"
              @click="refundDialog = true"
              href="#"
              >refund Policy</a
            >
            of any pre-booking amount collected from the User
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            F. MANGOHOMZ MH also promises its Users of a comfortable travel,
            room stay, requisite medical equipment and support at all its
            MANGOHOMZ MH branded channels.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            G. For any default in service user can reach out to us by:
          </div>

          <div
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 10px;
              padding-left: 20px;
            "
          >
            a. Writing to us on the MANGOHIMZ (MH) support page
          </div>
          <div
            style="font-family: verdana; font-size: 12px; padding-left: 20px"
          >
            b. Calling us on our 24X7 guest support helpline
          </div>
          <div
            style="font-family: verdana; font-size: 12px; padding-left: 20px"
          >
            Our guest support team will ensure the best and resolve your
            concern.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            H. MANGOHIMZ MH stays involved with the Users right from the time
            when booking is made through MANGOHIMZ MH platform and throughout
            the hotel stays, ensuring that the User gets a comfortable room stay
            experience.
          </div>

          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            LIMITED LIABILITY OF MANGOHOMZ
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Unless <strong>MANGOHOMZ (MH)</strong> explicitly acts as a reseller
            in certain scenarios, <strong>MANGOHOMZ (MH)</strong> always acts as
            a facilitator by connecting the User with the respective service
            providers (Property Partner - Food Partner -Medical Equipment
            Partner- Travel Partner providing vehicle as and when required)–
            Booking Agent partner
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong>'s liability is limited to providing
            the User with a confirmed booking as selected by the User.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Any issues or concerns faced by the User at the time of availing any
            such services shall be the sole responsibility of the Service
            Provider. <strong>MANGOHOMZ (MH)</strong> liability shall be limited
            to the arrangement of service, liability with respect to quality of
            services shall lie with the accommodation partner. Any acts,
            omissions, errors, representations, warranties, breaches or
            negligence on part of any Service Provider shall be his
            responsibility
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Unless explicitly committed by <strong>MANGOHOMZ (MH)</strong> as a
            part of any product or service:
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> assumes no liability for the
            standard of services as provided by the respective Service
            Providers.
          </div>

          <div
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 10px;
              padding-left: 20px;
            "
          >
            • <strong>MANGOHOMZ (MH)</strong> provides no guarantee with regard
            to their quality or fitness as represented.
          </div>

          <div
            style="font-family: verdana; font-size: 12px; padding-left: 20px"
          >
            • <strong>MANGOHOMZ (MH)</strong> doesn't guarantee the availability
            of any services as listed by a Service Provider.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            By making a booking, User understands
            <strong>MANGOHOMZ (MH)</strong> merely provides a technology
            platform for booking of services and products and the ultimate
            liability rests on the respective Service Provider and not
            <strong>MANGOHOMZ (MH)</strong>. Thus the ultimate contract of
            service is between User and Service Provider.
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            User further understands that the information displayed on the
            Website with respect to any service is displayed as furnished by the
            Service Provider. <strong>MANGOHOMZ (MH)</strong>, therefore cannot
            be held liable in case if the information provided by the Service
            Provider is found to be inaccurate, inadequate or obsolete or in
            contravention of any laws, rules, regulations or directions in
            force.
          </div>

          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            USERS RESPONSIBILITY
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Users are advised to check the description of the services and
            products carefully before making a booking. User(s) agree to be
            bound by all the conditions as contained in booking confirmation or
            as laid out in the confirmed booking voucher. These conditions are
            also to be read in consonance with the User Agreement.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            If a User intends to make a booking on behalf of another person, it
            shall be the responsibility of the User to inform such person about
            the terms of this Agreement, including all rules and restrictions
            applicable there to.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User undertakes to abide by all procedures and guidelines, as
            modified from time to time, in connection with the use of the
            services available through <strong>MANGOHOMZ (MH)</strong>. The User
            further undertakes to comply with all applicable laws, regulations,
            orders, directions etc. issued by either the Central Government,
            State Government, District Authorities or any other statutory body
            empowered to do so w.r.t use of services or for each transaction.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The services are provided on an "as is" and "as available" basis.
            <strong>MANGOHOMZ (MH)</strong> may change the features or
            functionality of the services being provided at any time, in its
            sole discretion, without any prior notice.
            <strong>MANGOHOMZ (MH)</strong> expressly disclaims all warranties
            of any kind, whether express or implied, including, but not limited
            to the implied warranties of merchantability, reasonably fit for all
            purposes. No advice or information, whether oral or written, which
            the User obtains from <strong>MANGOHOMZ (MH)</strong> or through the
            services opted shall create any warranty not expressly made herein
            or in the terms and conditions of the services.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            User also authorizes <strong>MANGOHOMZ (MH)</strong>'s
            representative to contact such user over phone, message and email.
            This consent shall supersede any preferences set by such User
            through national customer preference register (NCPR) or any other
            similar preferences.
          </div>
          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            FEES AND PAYMENT
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> further reserves the right to alter
            any and all fees from time to time. Any such additional fees,
            including fee towards any modifications there of, will be displayed
            to the User before confirming the booking or collecting the payment
            from such User.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            In cases of short charging of the booking amount, taxes, statutory
            fee, convenience fee etc., owing to any technical error or other
            reason, <strong>MANGOHOMZ (MH)</strong> shall reserve the right to
            deduct, charge or claim the balance amount from the User and the
            User shall pay such balance amount to
            <strong>MANGOHOMZ (MH)</strong>. In cases where the short charge is
            claimed prior to the utilization of the booking,
            <strong>MANGOHOMZ (MH)</strong> will be at liberty to cancel such
            bookings if the amount is not paid before the utilization date.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Any increase in the price charged by
            <strong>MANGOHOMZ (MH)</strong> on account of change in rate of
            taxes or imposition of new taxes, levies by Government shall have to
            be borne by the User. Such imposition of taxes, levies may be
            without prior notice and could also be retrospective but will always
            be as per applicable law.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            In the rare circumstance of a booking not getting confirmed for any
            reason whatsoever, <strong>MANGOHOMZ (MH)</strong> will process the
            refund of the booking amount paid by the User and intimate the User
            about the same. <strong>MANGOHOMZ (MH)</strong> is not under any
            obligation to provide an alternate booking in lieu of or to
            compensate or replace the unconfirmed booking. All subsequent
            bookings will be treated as new transactions. Any applicable refund
            will be processed as per the defined policies of the service
            provider and <strong>MANGOHOMZ (MH)</strong> as the case may be. (<a
              class="text-bold text-primary"
              @click="refundDialog = true"
              href="#"
              >Refund Policy</a
            >)
          </div>

          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User shall be completely responsible for all charges, fees,
            duties, taxes, and assessments arising out of the use of the
            service, as per the applicable laws
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User agrees and understands that all payments shall only be made
            to bank accounts of <strong>MANGOHOMZ (MH)</strong>.
            <strong>MANGOHOMZ (MH)</strong> or its agents, representatives or
            employees shall never ask a customer to transfer money to any
            private account or to an account not held in the name of
            <strong>MANGOHOMZ (MH)</strong>. The User agrees that if that user
            transfers any amount against any booking or transaction to any bank
            account that is not legitimately held by
            <strong>MANGOHOMZ (MH)</strong> or to any personal account of any
            person, <strong>MANGOHOMZ (MH)</strong> shall not be held liable for
            the same. User shall not hold any right to recover from
            <strong>MANGOHOMZ (MH)</strong> any amount which is transferred by
            the User to any third party.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User will not share his personal sensitive information like
            credit/debit card number, CVV, OTP, card expiry date, user IDs,
            passwords etc. with any person including the agents, employees or
            representatives of <strong>MANGOHOMZ (MH)</strong>. The User shall
            immediately inform <strong>MANGOHOMZ (MH)</strong> if such details
            are demanded by any of its agents' employees or representatives.
            <strong>MANGOHOMZ (MH)</strong> shall not be liable for any loss
            that the User incurs for sharing the aforesaid details.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Refunds, if any, on cancelled bookings will always be processed to
            the respective account or the banking instrument (Credit Card,
            <strong>MANGOHOMZ (MH)</strong> wallet etc) from which payment was
            made for that booking
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Booking(s) made by the User through
            <strong>MANGOHOMZ (MH)</strong> are subject to the applicable
            <a
              class="text-bold text-primary"
              @click="cancellationDialog = true"
              href="#"
              >Cancellation</a
            >
            &
            <a
              class="text-bold text-primary"
              @click="refundDialog = true"
              href="#"
              >refund policy </a
            >.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> provides various modes of making
            payments on the Website for transacting, like UPI, Credit/Debit
            Cards of various banks, Net Banking facility of all major banks,
            <strong>MANGOHOMZ (MH)</strong> and third-party Wallets, Gift Cards,
            EMI and more.
          </div>
          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            OBLIGATION TO OBTAIN VISA
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            International bookings can be made through
            <strong>MANGOHOMZ (MH)</strong> irrespective of VISA. Arrangement of
            VISA in any case is not the responsibility of
            <strong>MANGOHOMZ (MH)</strong>. OK TO BOARD permission are to be
            obtained by the User as per the requirement of their travel bookings
            and the requirements of the countries the User intends to visit or
            transit through.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> is not responsible for any issues,
            including inability to travel, arising out of visa requirements and
            is also not liable to refund any amount to the User for being unable
            to utilize the booking due to absence or denial of visa, Refund, if
            any, will be as per the applicable terms of booking and
            <a
              class="text-bold text-primary"
              @click="cancellationDialog = true"
              href="#"
              >Cancellation</a
            >
            &
            <a
              class="text-bold text-primary"
              @click="refundDialog = true"
              href="#"
              >refund policy</a
            >
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Force Majure:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            There can be exceptional circumstances where
            <strong>MANGOHOMZ (MH)</strong> and / or the Service Providers may
            be unable to honor the confirmed bookings due to various reasons
            like act of God, labor unrest, insolvency, a pandemic, an epidemic,
            business exigencies, government decisions, terrorist activity, any
            operational and technical issues, route and flight cancellations
            etc. or any other reason beyond the control of
            <strong>MANGOHOMZ (MH)</strong> . If
            <strong>MANGOHOMZ (MH)</strong> has advance knowledge of any such
            situations where dishonor of bookings may happen, it will make its
            best efforts to provide similar alternative to the User or refund
            the booking amount after deducting applicable service charges, if
            supported and refunded by that respective service operators. The
            User agrees that <strong>MANGOHOMZ (MH)</strong> being merely a
            facilitator of the services and products booked cannot be held
            responsible for any such Force Majeure circumstance. There can’t be
            any direct interaction between service providers and user MH will be
            the only point of interaction for users
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User agrees that in the event of non-confirmation of booking due
            to any technical reasons (like network downtime, disconnection with
            third party platforms such as payment gateways, banks etc.) or any
            other similar failures, <strong>MANGOHOMZ (MH)</strong> ’s
            obligation shall be limited to refunding the booking amount, if any,
            received from the customer. Such refund shall completely discharge
            <strong>MANGOHOMZ (MH)</strong> from all liabilities with respect to
            that transaction. Additional liabilities, if any, shall be borne by
            the User.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            In no event shall <strong>MANGOHOMZ (MH)</strong> and be liable for
            any direct, indirect, punitive, incidental, special or consequential
            damages, and any other damages like damages for loss of use, data or
            profits, arising out of or in any way connected with the use or
            performance of the Website or any other Sales Channel.
          </div>
          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            RIGHT TO REFUSE
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> at its sole discretion reserves the
            right to not accept any booking without assigning any reason
            thereof.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> will not provide any service or
            share confirmed booking details till such time the complete
            consideration is received from the User.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            In addition to other remedies and recourse available to
            <strong>MANGOHOMZ (MH)</strong> under this User Agreement or under
            applicable law, <strong>MANGOHOMZ (MH)</strong> may limit the User's
            activity, warn other users of the User's actions, immediately
            suspend or terminate the User's registration, or refuse to provide
            the User with access to the Website if:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User is in breach of this User Agreement; or
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            • <strong>MANGOHOMZ (MH)</strong>is unable to verify or authenticate
            any information provided by the User; or
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> believes that the User's actions may
            infringe on any third-party rights or breach any applicable law or
            otherwise result in any liability for the User, other users of
            <strong>MANGOHOMZ (MH)</strong> , or
            <strong>MANGOHOMZ (MH)</strong> itself.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Once a User has been suspended or terminated, such User shall not
            register or attempt to register with
            <strong>MANGOHOMZ (MH)</strong> with different credentials, or use
            the Website in any manner whatsoever until such User is reinstated
            by <strong>MANGOHOMZ (MH)</strong>.
            <strong>MANGOHOMZ (MH)</strong> may at any time in its sole
            discretion reinstate suspended users.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            If a User breaches this User Agreement,
            <strong>MANGOHOMZ (MH)</strong> reserves the right to recover any
            amounts due to be paid by the User to
            <strong>MANGOHOMZ (MH)</strong>, and to take appropriate legal
            action as it deems necessary.
          </div>
          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            RIGHT TO REFUSAL BY END SERVICE PROVIDER
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            User agrees that the end service provider may refuse to provide the
            service(s), agreed to be provided to the User, for any booking made
            through <strong>MANGOHOMZ (MH)</strong> with/without assigning any
            reasons or owing to reasons including but not limited to behavioral
            issues, public safety, health hazards, infectious diseases,
            government orders/notification etc. In such scenarios of refusal,
            the liability that may ensue shall solely vest with the end service
            provider as it is outside the purview of
            <strong>MANGOHOMZ (MH)</strong> and the User agrees that any claim,
            refund or damages against such refusal shall be as per
            <strong>MANGOHOMZ (MH) </strong>
            <a
              class="text-bold text-primary"
              @click="refundDialog = true"
              href="#"
              >refund policy</a
            >.
          </div>
          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            RIGHT TO CANCEL
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User expressly undertakes to provide
            <strong>MANGOHOMZ (MH)</strong> with correct and valid information
            while making use of the Website under this User Agreement, and not
            to make any misrepresentation of facts. Any default on part of the
            User would disentitle the User from availing the services from
            <strong>MANGOHOMZ (MH)</strong> .
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            In case <strong>MANGOHOMZ (MH)</strong> discovers or has reasons to
            believe at any time during or after receiving a request for services
            from the User that the request for services is either unauthorized
            or the information provided by the User or any of the travelers is
            not correct or that any fact has been misrepresented by that User,
            <strong>MANGOHOMZ (MH)</strong> shall be entitled to appropriate
            legal remedies against the User, including cancellation of the
            bookings, without any prior intimation to the User. In such an
            event, <strong>MANGOHOMZ (MH)</strong> shall not be responsible or
            liable for any loss or damage that may be caused to the User or any
            other person in the booking, as a consequence of such cancellation
            of booking or services.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            If any judicial, quasi-judicial, investigation agency, government
            authority approaches <strong>MANGOHOMZ (MH)</strong> to cancel any
            booking, <strong>MANGOHOMZ (MH)</strong> will cancel the same
            without approaching the concerned User whose booking has been
            cancelled.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User shall not hold
            <strong>MANGOHOMZ (MH)</strong> responsible for any loss or damage
            arising out of measures taken by <strong>MANGOHOMZ (MH)</strong> for
            safeguarding its own interest and that of its genuine customers.
            This would also include <strong>MANGOHOMZ (MH)</strong> denying or
            cancelling any bookings on account of suspected fraud transactions.
          </div>
          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            INDEMNIFICATION
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User agrees to indemnify, defend and hold harmless
            <strong>MANGOHOMZ (MH)</strong> , its affiliates and their
            respective officers, directors, lawful successors and assigns from
            and against any and all losses, liabilities, claims, damages, costs
            and expenses (including legal fees and disbursements in connection
            therewith and interest chargeable thereon) asserted against or
            incurred by such indemnified persons, that arise out of, result
            from, or may be payable by virtue of, any breach of any
            representation or warranty provided by the User, or non-performance
            of any covenant by the stay User.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            The User shall be solely liable for any breach of any country
            specific rules and regulations or general code of conduct and
            MANGOHOMZ (MH) cannot be held responsible for the same.
          </div>
          <div
            class="text-bold text-left"
            style="font-family: verdana; font-size: 15px; padding-top: 20px"
          >
            MISCLLEANEOUS
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            SEVERABILITY: If any provision of this User Agreement is determined
            to be invalid or unenforceable in whole or in part, such invalidity
            or unenforceability shall attach only to such provision or part of
            such provision and the remaining part of such provision and all
            other provisions of this User Agreement shall continue to be in full
            force and effect.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            JURISDICTION: This Agreement is subject to interpretation as per the
            laws of India, and the parties shall refer any unresolved disputes
            to the exclusive jurisdiction of courts situated in MH
            administrative areas as Bengaluru, Delhi and Mumbai.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            AMENDMENT TO THE USER AGREEMENT:
            <strong>MANGOHOMZ (MH)</strong> reserves the right to change the
            User Agreement from time to time. The User is responsible for
            regularly reviewing the User Agreement.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            CONFIDENTIALITY: Any information which is specifically mentioned by
            MANGOHOMZ as confidential shall be maintained confidentially by the
            User and shall not be disclosed unless as required by law or to
            serve the purpose of this User Agreement and the obligations of both
            the parties herein.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            FEEDBACK FROM CUSTOMER: <strong>MANGOHOMZ (MH)</strong> would like
            to know the feedback of the Users for improving its services. The
            User hereby authorizes MANGOHOMZ to contact the User for their
            feedback on various services offered by MANGOHOMZ. Such feedback may
            be collected through emails, telephone calls, SMS or any other
            medium from time to time. In case the User chooses not to be
            contacted, such User shall write to MANGOHOMZ for specific exclusion
            at
            <a
              class="text-bold text-primary"
              @click="privacyPolicyDialog()"
              href="#"
              >privacy@MANGOHOMZ.com</a
            >
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            PRIVACY POLICY: User shall also refer to MANGOHOMZ's
            <a
              class="text-bold text-primary"
              @click="privacyPolicyDialog = true"
              href="#"
              >Privacy policy</a
            >
            available on MANGOHOMZ's website which governs use of the Websites.
            By using the Website, User agrees to the terms of the Privacy Policy
            and accordingly consents to the use of the User’s personal
            information by MANGOHOMZ and its affiliates in accordance with the
            terms of the Privacy policy.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            GRIEVANCE REDRESSAL: MANGOHOMZ strongly believes in resolving the
            issues raised by the User(s). In the event if user feels that it’s
            concern has not been resolved to it’s satisfaction, User may contact
            our
            <a class="text-bold" href="#" @click="openGrievanceDialog()"
              >grievance officer</a
            >
            who shall Endeavour to redress the concern within 30 working days
            from the date of escalation. To reach the Grievance Officer please
            use this
            <a
              class="text-bold text-primary"
              href="https://mangohomz.com"
              target="_blank"
              >www.MangoHomz.com</a
            >

            to submit the details. User(s) are advised to escalate to the
            grievance officer only when they have already raised their complaint
            which has not been resolved to their satisfaction, or their concern
            has not been resolved within 30 working days from the date of ticket
            generation. User(s) will be required to share their booking
            reference number and the ticket ID generated for their complaint,
            for any escalations to the Grievance Officer through this
            <a
              class="text-bold text-primary"
              href="https://mangohomz.com"
              target="_blank"
              >www.MangoHomz.com</a
            >
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="privacyPolicyDialog" no-backdrop-dismiss>
      <q-card style="min-width: 350px">
        <q-toolbar
          class="bg-primary text-white q-my-md shadow-2"
          style="top: 0; position: sticky; z-index: 100"
        >
          <div
            class="col-11 text-h6 text-bold text-center"
            style="
              font-family: verdana;
              font-size: 16px;
              text-decoration: underline;
            "
          >
            Privacy Policy
          </div>
          <q-space />

          <q-btn
            dark
            padding="none"
            class="justify-end"
            icon="close"
            color="primary"
            @click="closePrivacyPolicyDialog"
          >
            <q-tooltip>close</q-tooltip>
          </q-btn>
        </q-toolbar>

        <q-card-section>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> is committed to protecting your
            information. This privacy notice provides details about the
            information collected about you, how is it used and how it is
            protected. It also explains your rights and how to contact us if you
            have questions about how the information provided by you is used.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Scope of our privacy notice
          </div>
          <div style="font-family: verdana; font-size: 12px">
            This notice applies to anyone who interacts with us in relation to
            our products and services (“you”, “your”), via any channel (e.g.
            app, website, email, phone, walk-ins to MangoHomz accommodations,
            booking an MangoHomz accommodation etc.). We may give you additional
            privacy notices if required for specific interactions.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            If you book a stay / services through us at one of our partners’
            guest houses, hotels, other lodgings, transport or any other
            service, that partner will use your personal data as shown in their
            privacy notice.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Ways in which we obtain personal information
          </div>
          <div style="font-family: verdana; font-size: 12px">
            We obtain personal information from you and from hospitals and from
            others who book accommodation or any other service for you. Where
            you provide us with information about other individuals (e.g. the
            names of others who you will stay at the accommodation you book),
            you must ensure that the privacy policy is seen by them and they are
            comfortable with you doing this.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Categories of personal information
          </div>
          <div style="font-family: verdana; font-size: 12px">
            We process two categories of personal information about you and/or,
            where applicable, others whom you have booked accommodation or any
            other service for, namely:
          </div>
          <div style="font-family: verdana; font-size: 12px">
            <ul>
              <li>
                Standard personal information (e.g. information we use to
                contact you, identify you or manage our relationship with you);
                and
              </li>
              <li>
                Special categories of information (e.g. your preference of food
                in general, medical condition and its requirements, specific
                schedules etc).
              </li>
            </ul>
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Purposes and lawful grounds of our processing personal information
          </div>
          <div style="font-family: verdana; font-size: 12px">
            We process your personal information for the purposes set out in
            this notice, based on the legal grounds. Different legal grounds
            apply depending on what category of personal information we process.
            Standard personal information is normally processed by us on the
            basis that it is necessary for the performance of a contract, our or
            a third parties’ legitimate interests or law. Further information
            about this and special category processing grounds is set out below.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Legitimate interests
          </div>
          <div style="font-family: verdana; font-size: 12px">
            We process your personal information for a number of legitimate
            interests, including providing you with services, administering our
            relationship with you, for marketing and service/product improvement
            purposes and in order to exercise our rights or handle claims. More
            detailed information about our legitimate interests is set out
            below.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Marketing and Preferences
          </div>
          <div style="font-family: verdana; font-size: 12px">
            We use your personal information to send you marketing by post,
            telephone, social media platforms, email, SMS, application
            notifications and silent notifications to track installation status
            of the application. We may also use your personal information to
            carry out online paid marketing activities in the nature of
            retargeting.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            We also use technology to help us understand your personal
            preferences and interests so that we can send recommendations and
            marketing communications that are likely to be of more interest to
            you. Using technology in this way is sometimes known as profiling.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            If you wish to unsubscribe from emails sent by us, you can do so at
            any time by clicking on the "unsubscribe" link that appears in all
            emails and by adjusting the settings on your device to turn off
            notifications from our app. Otherwise, you can always contact us at
            dataprotection@Mangohomz.com to update your contact preferences. You
            may also object to profiling relating to direct marketing by
            contacting us at dataprotection @Mangohomz.com.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Registration on the Website:
          </div>
          <div style="font-family: verdana; font-size: 12px">
            Information which you provide while subscribing to or registering on
            the Website, including but not limited to information about your
            personal identity such as name, gender, marital status, religion,
            age, profile picture etc., your contact details such as your email
            address, postal addresses, frequent flyer number, telephone (mobile
            or otherwise) and/or fax numbers. The information may also include
            information such as your banking details (including credit/debit
            card) and any other information relating to your income and/or
            lifestyle; billing information payment history etc. (as shared by
            you).
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Other information:
          </div>
          <div style="font-family: verdana; font-size: 12px">
            <ul>
              <li>
                Transactional history (other than banking details) about your
                e-commerce activities, buying behavior.
              </li>
              <li>
                Your usernames, passwords, email addresses and other
                security-related information used by you in relation to our
                Services.
              </li>
              <li>
                Data either created by you or by a third party and which you
                wish to store on our servers such as image files, documents etc.
              </li>
              <li>
                Data available in public domain or received from any third party
                including social media channels, including but not limited to
                personal or non-personal information from your linked social
                media channels (like name, email address, friend list, profile
                pictures or any other information that is permitted to be
                received as per your account settings) as a part of your account
                information.
              </li>
              <li>
                Information pertaining any other traveler(s) for who you make a
                booking through your registered MANGOHOMZ account. In such case,
                you must confirm and represent that each of the other
                traveler(s) for whom a booking has been made, has agreed to have
                the information shared by you disclosed to us and further be
                shared by us with the concerned service provider(s).
              </li>
              <li>
                If you request MANGOHOMZ to provide visa related services, then
                copies of your passport, bank statements, originals of the
                filled in application forms, photographs, and any other
                information which may be required by the respective embassy to
                process your visa application.
              </li>
              <li>
                For international bookings, Users, in compliance with the
                Liberalized Remittance Scheme(LRS) of RBI or any other law may
                be required to provide details such as their PAN information or
                passport details number or any such information required by
                Service Provider. Such information shall be strictly used as per
                the aforesaid requirements only. In case a User does not wish to
                provide this information, MANGOHOMZ may not be able to process
                the booking. MANGOHOMZ will never share User’s PAN details
                without their prior consent unless otherwise such action is
                required by any law enforcement authority for investigation, by
                court order or in reference to any legal process.
              </li>
              <li>
                In case you opt for contactless check-in at Hotels, then copies
                of your government identification like Aadhar, driving license,
                election card etc., Self-declaration and any other information
                like date of birth, destination/origin of travel and place of
                residence that may be required by the concerned Hotel to honor
                your hotel booking.
              </li>
              <li>
                For international bookings, Users, in compliance with the
                Liberalized Remittance Scheme (LRS) of RBI or any other law may
                be required to provide details such as their PAN information or
                passport details number or any such information required by
                Service Provider.
              </li>
              <li>
                In case you opt for contactless check-in at Hotels, then copies
                of your government identification like Aadhar, driving license,
                election card etc., Self-declaration and any other information
                like date of birth, destination/origin of travel and place of
                residence that may be required by the concerned Hotel to honor
                your hotel booking.
              </li>
            </ul>
          </div>
          <div style="font-family: verdana; font-size: 12px">
            Such information shall be strictly used for the aforesaid specified
            & lawful purpose only. User further understands that MANGOHOMZ may
            share this information with the end service provider or any other
            third party for provision and facilitation of the desired booking.
            MANGOHOMZ will always redact all/any sensitive & confidential
            information contained in the vaccination certificate, passbook, bank
            statement or any other identity card submitted for the purpose of
            availing a service, promotional offer or booking a product on the
            Website. In case a User does not wish to provide this information or
            opts for deletion of the information already provided, MANGOHOMZ may
            not be able to process the desired booking request. MANGOHOMZ will
            never share any of the above information collected including PAN
            card details, Passport details, Aadhar Card details without their
            prior consent unless otherwise such action is required by any law
            enforcement authority for investigation, by court order or in
            reference to any legal process.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Analytics and Advertising Services Provided by Others
          </div>
          <div style="font-family: verdana; font-size: 12px">
            Third parties provide us with audience measurement and analytics
            services that analyze your online interactions (both with the
            MangoHomz(MH) and other websites), serve you with tailored marketing
            and report on the performance of that marketing. We also use Google
            Place API to make suggestions based on your location or search
            strings.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            MangoHomz is using Google Place API for place prediction. Please
            refer to their privacy policy
            <a
              class="text-bold text-primary"
              href="http://www.google.com/privacy.html"
              target="_blank"
              >http://www.google.com/privacy.html</a
            >.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Sharing your information
          </div>
          <div style="font-family: verdana; font-size: 12px">
            We share your information within MangoHomz Group and with others who
            help us provide services to you (e.g. your accommodation provider).
            We also share your information in accordance with the law.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            For more information on who we share your information with, (please
            expand this section naming the groups you will share)We share your
            information for the purposes set out in this privacy policy, with
            the following categories of recipients:
          </div>
          <div style="font-family: verdana; font-size: 12px">
            <ul>
              <li>Other members of the Mangohomz;</li>
              <li>
                With accommodation managers to enable them to provide the
                services you request, e.g. we share your name and expected
                check-in time;
              </li>
              <li>
                Third party suppliers who help deliver products or services on
                our behalf, or who have partnered with Mangohomz in connection
                with services or a relevant promotional offering, as well as
                other apps or websites that integrate with our API or Services,
                or those with an API or Service with which we integrate;
              </li>
              <li>Your contact if you use a referral feature;</li>
              <li>
                The general public, if you submit content in a public forum,
                such as blog comments, social media posts, or other features of
                our services that are obviously viewable by the general public.
                For example, you may choose to use social sharing features and
                related tools which let you share your Mangohomz experience with
                other apps, sites, or media, and vice versa. Your use of these
                features enables the sharing of information with your friends or
                the public, depending on your social sharing service settings.
                Please refer to the privacy policies of those social sharing
                services for more information about how they handle the data you
                provide to or share through them;
              </li>
              <li>
                Third parties where we have a duty to or are permitted to
                disclose your personal information by law (e.g. law enforcement
                officials, government authorities);
              </li>
              <li>
                With the police in the exercise of their functions or with
                others as required by a court order;
              </li>
              <li>
                Third parties in connection with any merger, sale of company
                assets, consolidation or restructuring, financing, or
                acquisition of all or a portion of the Mangohomz Group’s
                business, in which case personal data held by it about its
                customers or visitors to the website may be one of the
                transferred assets.
              </li>
            </ul>
          </div>
          <div style="font-family: verdana; font-size: 12px">
            Where we share your personal information, appropriate protections
            will be in place to protect your personal information as required by
            data protection laws.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Transfers outside of your country
          </div>
          <div style="font-family: verdana; font-size: 12px">
            MangoHomz uses global information systems. As a result, MangoHomz
            transfers your personal information to a country outside of your
            country, for the purposes set out in this policy.
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            MangoHomz takes steps to ensure that when your personal information
            is transferred internationally, it is subject to appropriate
            safeguards in accordance with data protection laws. Often, these
            safeguards include contractual safeguards. More information about
            these safeguards (including copies, where relevant) can be obtained
            by contacting [dataprotection@Mangohomz.com].
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Retention period
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            We retain your personal information in accordance with MangoHomz’s
            records retention policies. However, there may be circumstances that
            mean we must retain your personal information for longer (e.g. if
            you make a claim in relation to a booking).
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Your rights
          </div>
          <div style="font-family: verdana; font-size: 12px">
            Data protection laws provides individuals with rights in relation to
            the information that MangoHomz holds about them on some computer and
            paper records. These include rights to access, correct, delete,
            restrict the use of, object to the use of, port to another person,
            and withdraw consent to the use of, your information. Exceptions may
            apply to these rights.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
              padding-top: 10px;
            "
          >
            Data protection contacts
          </div>
          <div style="font-family: verdana; font-size: 12px">
            If you have any questions, comments, complaints or suggestions in
            relation to this notice, or any other concerns about the way in
            which we process information about you, please contact our Privacy
            Team at
            <a
              class="text-bold text-primary"
              href="dataprotection@mangohomz.com."
              target="_blank"
              >dataprotection@mangohomz.com.</a
            >
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            If you are not satisfied with the response from our Privacy Team,
            you can contact our Data Protection Officer at [<a
              class="text-bold text-primary"
              href="dataprotection@mangohomz.com."
              target="_blank"
              >dataprotection@mangohomz.com.</a
            >].You also have a right to make a complaint to your local privacy
            supervisory authority.
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="refundDialog" no-backdrop-dismiss>
      <q-card style="min-width: 350px">
        <q-toolbar
          class="bg-primary text-white q-my-md shadow-2"
          style="top: 0; position: sticky; z-index: 100"
        >
          <div
            class="col-11 text-h6 text-bold text-center"
            style="
              font-family: verdana;
              font-size: 16px;
              text-decoration: underline;
            "
          >
            MH Refund Policy
          </div>
          <q-space />

          <q-btn
            dark
            padding="none"
            class="justify-end"
            icon="close"
            color="primary"
            @click="closeRefundDialog"
          >
            <q-tooltip>close</q-tooltip>
          </q-btn>
        </q-toolbar>

        <q-card-section>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Refund Type:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            Any applicable Refund of any kind can be in MH wallet for future use
            or User may opt for refund to the account/Card from where the
            payment has been processed.
          </div>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Refund Time limit:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            User will get the refund on or within 7 days of the cancellation or
            any refund // in case of any further delay MH will notify the user.
          </div>
        </q-card-section>

        <q-card-section class="row col-12">
          <div
            class="col-11 text-h6 text-bold text-center text-primary"
            style="
              font-family: verdana;
              font-size: 16px;
              text-decoration: underline;
            "
          >
            Cancellation Policy
          </div>
        </q-card-section>
        <q-card-section>
          <div
            class="text-bold text-left"
            style="
              font-family: verdana;
              font-size: 12px;
              padding-top: 0px;
              text-decoration: underline;
            "
          >
            Accommodation:
          </div>
          <div style="font-family: verdana; font-size: 12px; padding-top: 10px">
            <strong>MANGOHOMZ (MH)</strong> strict cancellation policy allows MH
            Guest to receive a full refund if they cancel Accommodation booking
            at least 7 days before check-in date. Any cancellation thereafter
            till check in the guest will be entitled to only 60% refund. Once
            checked in there is no cancellation.
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-card-section>

    </div>
</q-header>

  </template>
  <script>
  export default {
    name: "support",
    data() {
      return {
        title: "Support ",
      userAgreementDialog: false,
      privacyPolicyDialog: false,
      refundDialog: false,

      };
    },
    methods: {
      goToUrl(url) {
        window.open(url);
      },
      closeTermConditionDialog() {
      this.userAgreementDialog = false;
    },
    closePrivacyPolicyDialog() {
      this.privacyPolicyDialog = false;
    },
    closeRefundDialog() {
      this.refundDialog = false;
    },
    },
  };
  </script>
