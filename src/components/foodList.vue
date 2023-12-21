<template>
  <q-page-container class="bg-indigo-1 ">
    <headerTag />

    <q-page style="padding-top: 60px" class="q-pa-md ">
      <div class=" justify-center">
        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card flat :class="class_val" class="cursor-pointer">
            <q-card-section>
              <div class="text-h6 text-bold q-pa-sm">Food</div>

              <div class="row ">
                <div class="col-8  q-pa-sm ">
                  <div class="col-12 q-gutter-sm">
                    <q-card style="border-radius: 30px" bordered flat>
                      <q-card-section horizontal>
                        <q-card-section class="col-3 flex flex-center">
                          <q-img
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                            :ratio="1 / 1"
                            style="height: 120px; "
                          />
                        </q-card-section>
                        <q-card-section class="q-pa-md col-6">
                          <div
                            class="absolute-top-right "
                            style="padding-top:5px;"
                          >
                            <q-icon
                              ><q-img
                                src="~assets/logos/MHmini_logo_128x128.png"
                              ></q-img></q-icon
                            ><q-chip color="secondary" dark dense size="sm"
                              >4/5 good</q-chip
                            >
                            <div>
                              <q-rating
                                size="1em"
                                :max="5"
                                color="secondary"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="text-h5 " style="padding-top:15px;">
                            Breakfast
                          </div>
                          <div class=" text-black">
                            This is dummy text <br />
                            This is dummy text
                          </div>
                        </q-card-section>
                        <q-card-section class="col-3 flex  bg-grey-11 ">
                          <div class="q-pa-md absolute-bottom-right ">
                            <div
                              class="row justify-end"
                              style="font-size:22px;font-weight: 900;"
                            >
                              ₹176
                            </div>
                            <span
                              class="row justify-end"
                              style="font-size:10px;"
                              >+ ₹345 Taxs & Fee</span
                            >
                            <span
                              class="row justify-end"
                              style="font-size:10px;"
                              >Per Day</span
                            >
                            <span
                              class="text-primary justify-end "
                              style="font-size:10px;"
                            >
                              Login & Unlock a secret deal
                            </span>
                          </div>
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                    <q-card style="border-radius: 30px" bordered flat>
                      <q-card-section horizontal>
                        <q-card-section class="col-3 flex flex-center">
                          <q-img
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                            :ratio="1 / 1"
                            style="height: 120px; "
                          />
                        </q-card-section>
                        <q-card-section class="q-pa-md col-6">
                          <div
                            class="absolute-top-right "
                            style="padding-top:5px;"
                          >
                            <q-icon
                              ><q-img
                                src="~assets/logos/MHmini_logo_128x128.png"
                              ></q-img></q-icon
                            ><q-chip color="secondary" dark dense size="sm"
                              >4/5 good</q-chip
                            >
                            <div>
                              <q-rating
                                size="1em"
                                :max="5"
                                color="secondary"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="text-h5 " style="padding-top:15px;">
                            Lunch
                          </div>
                          <div class=" text-black">
                            This is dummy text <br />
                            This is dummy text
                          </div>
                        </q-card-section>
                        <q-card-section class="col-3 flex  bg-grey-11 ">
                          <div class="q-pa-md absolute-bottom-right ">
                            <div
                              class="row justify-end"
                              style="font-size:22px;font-weight: 900;"
                            >
                              ₹287
                            </div>
                            <span
                              class="row justify-end"
                              style="font-size:10px;"
                              >+ ₹345 Taxs & Fee</span
                            >
                            <span
                              class="row justify-end"
                              style="font-size:10px;"
                              >Per Day</span
                            >
                            <span
                              class="text-primary justify-end "
                              style="font-size:10px;"
                            >
                              Login & Unlock a secret deal
                            </span>
                          </div>
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                    <q-card style="border-radius: 30px;" bordered flat>
                      <q-card-section horizontal>
                        <q-card-section class="col-3 flex flex-center">
                          <q-img
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                            :ratio="1 / 1"
                            style="height: 120px; "
                          />
                        </q-card-section>
                        <q-card-section class="q-pa-md col-6">
                          <div
                            class="absolute-top-right "
                            style="padding-top:5px;"
                          >
                            <q-icon
                              ><q-img
                                src="~assets/logos/MHmini_logo_128x128.png"
                              ></q-img></q-icon
                            ><q-chip color="secondary" dark dense size="sm"
                              >4/5 good</q-chip
                            >
                            <div>
                              <q-rating
                                size="1em"
                                :max="5"
                                color="secondary"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="text-h5 " style="padding-top:15px;">
                            Dinner
                          </div>
                          <div class=" text-black">
                            This is dummy text <br />
                            This is dummy text
                          </div>
                        </q-card-section>
                        <q-card-section class="col-3 flex  bg-grey-11 ">
                          <div class="q-pa-md absolute-bottom-right ">
                            <div
                              class="row justify-end"
                              style="font-size:22px;font-weight: 900;"
                            >
                              ₹487
                            </div>
                            <span
                              class="row justify-end"
                              style="font-size:10px;"
                              >+ ₹345 Taxs & Fee</span
                            >
                            <span
                              class="row justify-end"
                              style="font-size:10px;"
                              >Per Day</span
                            >
                            <span
                              class="text-primary justify-end "
                              style="font-size:10px;"
                            >
                              Login & Unlock a secret deal
                            </span>
                          </div>
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>

                <div class="col-4">
                  <q-card style="border-radius: 30px">
                    <q-card-section>
                      <div style="font-size:16px;font-weight: 900;">
                        Dinner
                        <span class="row" style="font-size:10px;">Per Day</span>
                        <span class="row" style="font-size:10px;"
                          >For 2 persons</span
                        >
                      </div>
                      <div
                        class="row justify-end"
                        style="font-size:22px;font-weight: 900;"
                      >
                        ₹487
                      </div>
                      <span class="row justify-end" style="font-size:10px;"
                        >+ ₹345 Taxs & Fee</span
                      >
                      <span class="row justify-end" style="font-size:10px;"
                        >Per Day</span
                      >
                    </q-card-section>
                    <q-separator></q-separator>
                    <div class="row justify-end q-pa-sm">
                      <q-btn
                        size="sm"
                        rounded
                        color="primary"
                        class="text-weight-bold"
                        to="/cartDetails"
                        >Book Now</q-btn
                      >
                    </div>
                    <q-separator></q-separator>
                    <q-card-section>
                      <div class=" row ">
                        <div
                          class="col-8 text-primary"
                          style="font-size:16px;font-weight: 900;"
                        >
                          What guests said
                        </div>
                        <div class="col-4">
                          <q-icon
                            ><q-img
                              src="~assets/logos/MHmini_logo_128x128.png"
                            ></q-img></q-icon
                          ><q-chip color="secondary" dark dense size="sm"
                            >7/7 good</q-chip
                          >
                        </div>
                        <div class="col-12 text-caption text-black">
                          347 reviews<br />
                          Clean Room | Clean Property | Near Hospital
                        </div>
                      </div>
                    </q-card-section>
                    <q-separator>
                      <!-- <div class=" text-overline">All Reviews</div> -->
                    </q-separator>
                    <q-item clickable v-ripple to="/equipmentList">
                      <q-item-section avatar>
                        <q-icon
                          color="secondary"
                          name="mdi-wheelchair-accessibility"
                        />
                      </q-item-section>

                      <q-item-section
                        class="text-caption text-bold text-primary"
                        >Need medicine supply or equipment for the
                        patient?</q-item-section
                      >
                    </q-item>
                    <q-separator />
                    <span
                      class=" q-pa-sm justify-center text-grey text-overline"
                    >
                      All Reviews
                    </span>
                    <q-separator></q-separator>
                    <div class="q-pa-sm">
                      <q-list>
                        <q-item clickable v-ripple>
                          <q-item-section
                            class="text-caption text-bold text-grey"
                            >Xoxoxo xoox xox xo xoxoxo xoxoxo xoox xox xo xoxoxo
                            xoxoxo xoox xox xo</q-item-section
                          >
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section
                            class="text-caption text-bold text-grey"
                            >Xoxoxo xoox xox xo xoxoxo xoxoxo xoox xox xo xoxoxo
                            xoxoxo xoox xox xo</q-item-section
                          >
                        </q-item>
                      </q-list>
                    </div>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
    <footer-tag />
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-space></q-space>
        <search-header-comp />
        <q-space />
      </q-toolbar>
    </q-page-sticky>
    <!-- <search-header-comp /> -->
  </q-page-container>
</template>
<script>
import headerTag from "./header.vue";
import footerTag from "./footer.vue";
import searchHeaderComp from "../components/searchHeaderComp.vue";
export default {
  components: {
    headerTag,
    footerTag,
    searchHeaderComp
  },
  data() {
    return {
      class_val: "shadow-1 hotel-details-card-1"
    };
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
