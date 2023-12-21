<template>
  <div Header="container">
    <Header />
    <div class="bg-accent lt-sm" style="min-width: 350px; margin-top: 88px">
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
                  <p class="text-h4 text-primary">Customer Support</p>
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
            <q-item
              clickable
              type="a"
              aria-label="MH Call Communication Link"
              @click="goToUrl(`tel:8929982655`)"
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section class="text-black text-bold"
                  >Call Helpline: 8929982655
                </q-item-section>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              type="a"
              aria-label="MH WhatsApp Communication Link"
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section class="text-black text-bold">
                  WhatsApp:8929982655
                </q-item-section>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              type="a"
              aria-label="MH Telegram Communication Link"
              @click="goToUrl(`https://t.me/MangoHomzBot`)"
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section class="text-black text-bold">
                  Telegram:MangoHomzBot
                </q-item-section>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              type="a"
              aria-label="MH Email Communication Link"
              @click="goToUrl(`mailto:care@mangohomz.com`)"
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section class="text-black text-bold">
                  Email: care@mangohomz.com
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <div class="bg-accent gt-xs" style="min-width: 350px; margin-top: 88px">
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
                  <p class="text-h4 text-primary">Customer Support</p>
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
            <q-item
              clickable
              type="a"
              aria-label="MH Call Communication Link"
              @click="goToUrl(`tel:8929982655`)"
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon
                  name="fas fa-phone-square-alt"
                  color="primary"
                  size="34px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section class="text-black text-bold"
                  >Call Helpline: 8929982655
                </q-item-section>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              type="a"
              aria-label="MH WhatsApp Communication Link"
              @click="
                goToUrl(`https://api.whatsapp.com/send?phone=918929982655`)
              "
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon name="fab fa-whatsapp" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section class="text-black text-bold">
                  WhatsApp:8929982655
                </q-item-section>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              type="a"
              aria-label="MH Telegram Communication Link"
              @click="goToUrl(`https://t.me/MangoHomzBot`)"
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon name="fab fa-telegram" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section class="text-black text-bold">
                  Telegram:MangoHomzBot
                </q-item-section>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              type="a"
              aria-label="MH Email Communication Link"
              @click="goToUrl(`mailto:care@mangohomz.com`)"
              target="_blank"
            >
              <q-item-section avatar>
                <q-icon name="far fa-envelope" color="primary" size="34px" />
              </q-item-section>
              <q-item-section>
                <q-item-section class="text-black text-bold">
                  Email: care@mangohomz.com
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <mostRecentSearchVue />
    <FooterTag />
  </div>
</template>
<script>
import Header from "src/components/header.vue";
// import partnerWithUs from "./menuContentPages/partner.vue";
import FooterTag from "../../components/footer.vue";
import mostRecentSearchVue from "../menuContentPages/mostRecentSearch.vue";

export default {
  components: {
    // partnerWithUs,
    Header,
    mostRecentSearchVue,
    FooterTag,
  },

  methods: {
    goToUrl(url) {
      window.open(url);
    },
  },
};
</script>
