<template>
  <q-card-section>
    <q-card-section class="q-pa-md">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        :autoplay="autoplay"
        ref="carousel"
        infinite
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        ></q-carousel-slide>
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        ></q-carousel-slide>
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        ></q-carousel-slide>

        <template v-slot:control>
          <q-carousel-control
            position="top-right"
            :offset="[18, 18]"
            class="text-white rounded-borders"
            style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
          >
          </q-carousel-control>

          <q-carousel-control
            position="bottom-left"
            :offset="[18, 18]"
            class="q-gutter-xs"
          >
            <div class="text-subtitle1 text-weight-bold">
              Mangohomz Solves #1 Gap in Medical Tourism, Making a Safe,
              Hygienic & Patient Friendly Accommodation Available Near Hospital
            </div>
            <q-card>
              <q-card-section>
                <div class="row wrap q-col-gutter-xs">
                  <div class="col-12">
                    <q-select
                      :dense="dense"
                      v-model="text"
                      label="Search City or Hospital"
                      outlined
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <q-input
                      :dense="dense"
                      outlined
                      v-model="text"
                      label="Check In"
                    >
                      <template v-slot:prepend>
                        <q-icon name="event" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6     ">
                    <q-input
                      :dense="dense"
                      outlined
                      v-model="text"
                      label="Check Out"
                    >
                      <template v-slot:prepend>
                        <q-icon name="event" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <q-select
                      outlined
                      :dense="dense"
                      v-model="model"
                      :options="options"
                      label="Adults"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6     q-gutter-xs">
                    <q-select
                      outlined
                      :dense="dense"
                      v-model="model"
                      :options="options"
                      label="Children"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-card-actions>
                <q-btn
                  color="red"
                  class="full-width"
                  label="Search Now"
                  n
                ></q-btn>
              </q-card-actions>
            </q-card>
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-card-section>

    <q-card-section>
      <div class="row   flex flex-center ">
        <div class="pla1 p-home container">
          <!-- TITLE & DESCRIPTION -->
          <div class="spe-title spe-title-1">
            <div class="text-h5 text-center">
              8 Reasons to choose MangoHomz during your Medical Travel
            </div>
          </div>

          <q-list class="row">
            <div class="col-12 col-sm-6">
              <q-item>
                <q-item-section avatar top>
                  <q-icon name="room" color="black" size="34px" />
                </q-item-section>

                <q-item-section top>
                  <q-item-label>
                    <span class="text-weight-medium"
                      >Near to Your hospital</span
                    >
                    <!-- <span class="text-grey-8"> - GitHub repository</span> -->
                  </q-item-label>
                  <q-item-label caption>
                    Mangohomz are carefully selected and is near hospital.
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar top>
                  <q-icon name="bed" color="black" size="34px" />
                </q-item-section>

                <q-item-section top>
                  <q-item-label>
                    <span class="text-weight-medium"
                      >Patient Friendly Rooms</span
                    >
                  </q-item-label>
                  <q-item-label caption>
                    MangoHomz Rooms are upgraded with Thermo Flask,
                    Anti-Skidding toilet, Grab Bar to prevent fall, alarm etc
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar top>
                  <q-icon name="support_agent" color="black" size="34px" />
                </q-item-section>

                <q-item-section top>
                  <q-item-label>
                    <span class="text-weight-medium"
                      >Round the clock Support</span
                    >
                  </q-item-label>
                  <q-item-label caption>
                    MangoHomz is dedicated to your requirement & are available
                    24/7
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar top>
                  <q-icon name="medical_services" color="black" size="34px" />
                </q-item-section>

                <q-item-section top>
                  <q-item-label>
                    <span class="text-weight-medium"
                      >Standard Home Medical Amenities</span
                    >
                  </q-item-label>
                  <q-item-label caption>
                    All MangoHomz facilities are equipped with home medical
                    equipment (Wheel Chair, Stretcher, Vapour Inhaler & standard
                    medical devices BP Monitor, Glucometer, Oxygen Saturation
                    Monitor) etc
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-12 col-sm-6">
              <q-item>
                <q-item-section avatar top>
                  <q-icon
                    name="mdi-account-tie-voice"
                    color="black"
                    size="34px"
                  />
                </q-item-section>

                <q-item-section top>
                  <q-item-label>
                    <span class="text-weight-medium">Dedicated Attendant</span>
                  </q-item-label>
                  <q-item-label caption>
                    Dedicated Attendant in all MangoHomz
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar top>
                  <q-icon name="food_bank" color="black" size="34px" />
                </q-item-section>

                <q-item-section top>
                  <q-item-label>
                    <span class="text-weight-medium"
                      >Hygienic Catering facility</span
                    >
                  </q-item-label>
                  <q-item-label caption>
                    Mangohomz provides hygienic and fresh food as per order
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar top>
                  <q-icon name="price_check" color="black" size="34px" />
                </q-item-section>

                <q-item-section top>
                  <q-item-label>
                    <span class="text-weight-medium">Affordable Stay</span>
                  </q-item-label>
                  <q-item-label caption>
                    We understand your priority during medical tour so MangoHomz
                    stays are affordable
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar top>
                  <q-icon name="forum" color="black" size="34px" />
                </q-item-section>

                <q-item-section top>
                  <q-item-label>
                    <span class="text-weight-medium">Mangohomz Support</span>
                  </q-item-label>
                  <q-item-label caption>
                    a. Each property and photos are verified by MangoHomz
                    <br />
                    b. Independent User reviews<br />
                    c. Secure payment gateway<br />
                    d. Easy refund during cancellation<br />
                    e. Loyalty Coupons
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <h4 v-for="item in users" :key="item.id">
        {{ item.first_name }}
      </h4>
    </q-card-section>
    <q-card-section>
      <div class="rows ">
        <div class="container" id="inner-page-title">
          <div class="text-center">
            <h5>Testimonials</h5>
            <div class="title-line">
              <div class="tl-1"></div>
              <div class="tl-2"></div>
              <div class="tl-3"></div>
            </div>
            <p>
              <font class="text-red text-weight-bold"> Mangohomz</font> is
              designed to assist the medical traveler and provide
              <font class="text-red text-weight-bold">
                maximum support to them in their difficult times.</font
              >
            </p>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card-section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "websiteBody",
  data() {
    return {
      text: "",
      model: "",
      slide: 1,
      autoplay: true,
      dense: true,
      slide2: "first",
      searchCheckin: "",
      name: "",
      email: "",
      message: "",
      selected_tab: "t_0",
      date: "2019/02/01",
      options: ["1", "2", "3", "4", "5", ""]
    };
  },
  created() {
    // this.loadData();
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    // loadData() {
    //   this.$api
    //     .get("/userAccount")
    //     .then(response => {
    //       this.data = response.data;
    //     })
    //     .catch(() => {
    //       this.$q.notify({
    //         color: "negative",
    //         position: "top",
    //         message: "Loading failed",
    //         icon: "report_problem"
    //       });
    //     });
    // }
  }
};
</script>
