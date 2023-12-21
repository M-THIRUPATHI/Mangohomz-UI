<template>
  <div>
    <div class="q-px-lg lt-sm" style="margin-top: -28% ;width:100%;z-index:2;">
      <div>
        <q-card class="rounded-borders" flat>
          <div class="row q-pa-sm q-gutter-xs">
            <q-select
              filled
              v-model="defaultItem.city"
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="cities"
              option-value="city_id"
              option-label="city_name"
              return-object
              @input="loadAllHospitals(defaultItem.city); emptyHospitals()"
              hint="Basic autocomplete"
              style="width: 250px; padding-bottom: 32px"
              emit-value
              map-options
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-select
              filled
              v-model="defaultItem.hospital"
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="hospital"
              hint="Basic autocomplete"
              style="width: 250px; padding-bottom: 32px"
              emit-value
              map-options
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <!-- <q-select
              label="City/Hospital"
              :options="options"
              v-model="defaultItem.cityw"
              label-color="black"
              option-value="hospital_id"
              option-label="hospital"
              options-dense
              outlined
              fill-input
              reactive-rules
              dense
              clearable
              class="col-12"
              style="width:300px"
              use-input
              input-debounce="0"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results {{ options.length }}
                  </q-item-section>
                </q-item>
              </template>
            </q-select> -->
            <q-input
              class="col-6"
              outlined
              v-model="defaultItem.date"
              dense
              mask="date"
              label="Check-in"
              label-color="black"
              style="width:130px"
              @click="$refs.qDateProxy.show()"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="defaultItem.date"
                      minimal
                      :options="optionsFn"
                      @input="closeDialog"
                    >
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input
              class="col-6"
              outlined
              v-model="defaultItem.date1"
              dense
              mask="date"
              label="Check-out"
              label-color="black"
              style="width:130px"
              @click="$refs.qDateProxy.show()"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="defaultItem.date1"
                      minimal
                      :options="date => date >= defaultItem.date"
                      @input="closeDialog"
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-btn
              no-caps
              class="text-bold"
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              dense
              size="sm"
              style="width:100px"
              color="primary"
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests
              <br />
              Adults: {{ totalguests }}
            </q-btn>

            <q-btn
              dense
              class=" bg-primary text-white text-capitalize"
              to="/searchList"
              ><q-icon name="search"
            /></q-btn>
          </div>
        </q-card>
      </div>

      <div class="row " v-show="show_guest_cards">
        <div class="col-12 q-pa-sm q-gutter-sm  col-sm-12 col-md-12 col-lg-12 ">
          <q-list style="max-width: 800px" class="rounded-borders bg-white">
            <q-item>
              <q-item-section>
                <q-item-label lines="1" class="text-bold">Adults</q-item-label>
                <q-item-label caption lines="2">
                  <!-- <span class="text-weight-bold">John</span> -->
                  <span class="text-black">Age 13 or above</span>
                </q-item-label>
              </q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :disable="adult_count <= 0 ? true : false"
                    icon="mdi-minus-circle-outline"
                    @click="--adult_count"
                  />
                  <q-btn
                    class="gt-xs text-bold"
                    size="16px"
                    flat
                    dense
                    round
                    :label="adult_count"
                    v-model="adult_count"
                  />
                  <q-btn
                    size="12px"
                    flat
                    dense
                    round
                    :disable="adult_count >= 4 ? true : false"
                    icon="mdi-plus-circle-outline"
                    @click="adult_count++"
                  />
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label lines="1" class="text-bold">Children</q-item-label>
                <q-item-label caption lines="2">
                  <!-- <span class="text-weight-bold">John</span> -->
                  <span class="text-black">Age 2 - 12</span>
                </q-item-label>
              </q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :disable="child_count <= 0 ? true : false"
                    icon="mdi-minus-circle-outline"
                    @click="--child_count"
                  />
                  <q-btn
                    class="gt-xs text-bold"
                    size="16px"
                    flat
                    dense
                    round
                    :label="child_count"
                    v-model="child_count"
                  />
                  <q-btn
                    size="12px"
                    flat
                    dense
                    round
                    :disable="child_count >= 4 ? true : false"
                    icon="mdi-plus-circle-outline"
                    @click="child_count++"
                  />
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label lines="1" class="text-bold">Infants</q-item-label>
                <q-item-label caption lines="2">
                  <!-- <span class="text-weight-bold">John</span> -->
                  <span class="text-black"> under-2</span>
                </q-item-label>
              </q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :disable="infant_count <= 0 ? true : false"
                    icon="mdi-minus-circle-outline"
                    @click="--infant_count"
                  />
                  <q-btn
                    class="gt-xs text-bold"
                    size="16px"
                    flat
                    dense
                    round
                    :label="infant_count"
                    v-model="infant_count"
                  />
                  <q-btn
                    size="12px"
                    flat
                    dense
                    round
                    :disable="infant_count >= 4 ? true : false"
                    icon="mdi-plus-circle-outline"
                    @click="infant_count++"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <div
      class="q-px-lg gt-sm "
      style="float:right;margin-top: -28% ;width:70%;z-index:2;"
    >
      <div>
        <q-card class="rounded-borders" flat>
          <div class="row q-pa-sm q-gutter-xs">
            <div class="col-sm-12 col-md-2 gt-xs ">
              <!-- <cool-select v-model="selected" :items="cities" /> -->
              <q-select
                dense
                stack-label
                label-slot
                label-color="black"
                :options="cities"
                v-model="defaultItem.city"
                options-dense
                lazy-rules
                option-value="city_id"
                option-label="city_name"
                return-object
                @input="loadHospitals(defaultItem.city);emptyHospitals()"
                options-selected-class="text-secondary"
              >
                <template v-slot:label>
                  <span class="text-weight-bold text-h6">City</span>
                </template>
                <!-- <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps" clickable @click="">
                     <q-item-section avatar>
                      <q-icon name="fas fa-city" size="xs" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{ scope.opt.city }}</q-item-label>
                      <q-item-label caption>
                        coming soon
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </template> -->
              </q-select>
            </div>
            <div class="col-md-5 gt-xs ">
              <q-select
                dense
                stack-label
                label-slot
                label-color="black"
                :options="hospital"
                v-model="defaultItem.hospital"
                option-value="near_hospital_id"
                option-label="near_hospital_name"
                options-dense
                lazy-rules
                use-input
              >
                <template v-slot:label>
                  <span class="text-weight-bold text-h6">Near Hospital</span>
                </template>
              </q-select>
            </div>
            <div class="col gt-xs cursor-pointer">
              <span class="text-subtitle2 text-weight-bold col">Check-In</span>
              <br />
              <span>{{ dateModel.from }}</span>

              <q-popup-edit v-model="popup2" :cover="false" :offset="[0, 10]">
                <q-date
                  minimal
                  v-model="dateModel.from"
                  mask="YYYY/MM/DD"
                  :options="optionsFn"
                  @click="fromDateSelected"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Ok"
                      dense
                      outlined
                      color="primary"
                      flat
                      @click="fromDateSelected"
                    />
                  </div>
                </q-date>
              </q-popup-edit>
            </div>
            <div class="col gt-xs cursor-pointer">
              <span class="text-subtitle2 text-weight-bold col">Check-Out </span
              ><br />
              <span> {{ dateModel.to }}</span>

              <q-popup-edit
                v-model="popup2"
                :cover="false"
                :offset="[0, 10]"
                v-slot="scope"
              >
                <q-date
                  minimal
                  v-model="dateModel.to"
                  mask="YYYY/MM/DD"
                  :options="optionsFn2"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Ok"
                      dense
                      outlined
                      color="primary"
                      flat
                      @click="scope.set"
                    />
                  </div>
                </q-date>
              </q-popup-edit>
            </div>
            <q-btn
              label="Guests"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              dense
              style="width:100px"
              color="primary"
              class="text-weight-bold"
            >
              <span class="text-caption">Adults: {{ totalguests }}</span>
              <q-popup-proxy>
                <q-banner>
                  <q-list
                    style="max-width: 250px"
                    class="rounded-borders bg-white "
                  >
                    <q-item>
                      <q-item-section>
                        <q-item-label lines="1">Adults</q-item-label>
                        <q-item-label caption lines="2">
                          <!-- <span class="text-weight-bold">John</span> -->
                          <span class="text-black">Age 13 or above</span>
                        </q-item-label>
                      </q-item-section>
                      <q-item-section top side>
                        <div class="text-grey-8 q-gutter-xs">
                          <q-btn
                            class="gt-xs"
                            size="12px"
                            flat
                            dense
                            round
                            :disable="adult_count <= 0 ? true : false"
                            icon="mdi-minus-circle-outline"
                            @click="--adult_count"
                          />
                          <q-btn
                            class="gt-xs"
                            size="12px"
                            flat
                            dense
                            round
                            :label="adult_count"
                            v-model="adult_count"
                          />
                          <q-btn
                            size="12px"
                            flat
                            dense
                            round
                            :disable="adult_count >= 4 ? true : false"
                            icon="mdi-plus-circle-outline"
                            @click="adult_count++"
                          />
                        </div>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label lines="1">Children</q-item-label>
                        <q-item-label caption lines="2">
                          <!-- <span class="text-weight-bold">John</span> -->
                          <span class="text-black">Age 2 - 12</span>
                        </q-item-label>
                      </q-item-section>
                      <q-item-section top side>
                        <div class="text-grey-8 q-gutter-xs">
                          <q-btn
                            class="gt-xs"
                            size="12px"
                            flat
                            dense
                            round
                            :disable="child_count <= 0 ? true : false"
                            icon="mdi-minus-circle-outline"
                            @click="--child_count"
                          />
                          <q-btn
                            class="gt-xs"
                            size="12px"
                            flat
                            dense
                            round
                            :label="child_count"
                            v-model="child_count"
                          />
                          <q-btn
                            size="12px"
                            flat
                            dense
                            round
                            :disable="child_count >= 4 ? true : false"
                            icon="mdi-plus-circle-outline"
                            @click="child_count++"
                          />
                        </div>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label lines="1">Infants</q-item-label>
                        <q-item-label caption lines="2">
                          <!-- <span class="text-weight-bold">John</span> -->
                          <span class="text-black"> under-2</span>
                        </q-item-label>
                      </q-item-section>
                      <q-item-section top side>
                        <div class="text-grey-8 q-gutter-xs">
                          <q-btn
                            class="gt-xs"
                            size="12px"
                            flat
                            dense
                            round
                            :disable="infant_count <= 0 ? true : false"
                            icon="mdi-minus-circle-outline"
                            @click="--infant_count"
                          />
                          <q-btn
                            class="gt-xs"
                            size="12px"
                            flat
                            dense
                            round
                            :label="infant_count"
                            v-model="infant_count"
                          />
                          <q-btn
                            size="12px"
                            flat
                            dense
                            round
                            :disable="infant_count >= 4 ? true : false"
                            icon="mdi-plus-circle-outline"
                            @click="infant_count++"
                          />
                        </div>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-banner>
              </q-popup-proxy>
            </q-btn>

            <q-btn
              dense
              class=" bg-primary text-white text-capitalize"
              to="/searchList"
              ><q-icon name="search"
            /></q-btn>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { date } from "quasar";
// import { CoolSelect } from "vue-cool-select";
let date3 = new Date();
let date4 = date3.setDate(date3.getDate() + 1);
let selectedDate1 = "";
// let city_array = this.$store.state.store.dropdown.city_arr;

export default {
  name: "booking-form-comp",
  // components: { CoolSelect },

  data() {
    return {
      // options: stringOptions,
      loadingState: false,
      popup1: "popup1",
      popup2: "popup2",
      popup3: "popup3",
      date1: date.formatDate(new Date(), "DD-MM-YYYY"),
      date2: date.formatDate(date4, "DD-MM-YYYY"),
      // options: this.$store.state.dropdown.city_arr,

      // title:"MangoHomz",
      dateModel: {
        /* from: date.formatDate(new Date(), "DD-MM-YYYY"),
        to: date.formatDate(date4, "DD-MM-YYYY") */
        from: date.formatDate(new Date(), "YYYY/MM/DD"),
        to: date.formatDate(date4, "YYYY/MM/DD")
      },
      show_guest_cards: false,
      adult_count: 2,
      child_count: 0,
      infant_count: 0,
      // city_options: city_array,
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
      defaultItem: {
        city: "",
        hospital: "",
        date1: "",
        date2: "",
        guest: ""
      }
    };
  },
  //   meta(){
  // return{
  //   title:this.title
  // }
  //   },

  computed: {
    ...mapState({
      cities: state => state.dropdown.city_arr,
      // city_options: state => state.dropdown.city_arr,
      hospital: state => state.dropdown.hospital_arr
    }),
    totalguests() {
      return this.adult_count + this.child_count + this.infant_count;
    },
    optionsFn2(d) {
      let fromDate = date.formatDate(this.dateModel.from, "YYYY/MM/DD");
      return d => d >= fromDate;
    }
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllCities");
  },
  methods: {
    ...mapActions("dropdown", ["loadAllHospitals"]),
    emptyHospitals(){
      this.defaultItem.hospital = "";
    },
    fromDateSelected() {
      this.dateModel.to = this.dateModel.from;
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },

    setDate2() {
      // this.date2 = "";
      // selectedDate1 = this.date1;
    }
  }
};
</script>
<style>
.container {
  position: absolute;
}
.text-block {
  position: absolute;
  bottom: 8px;
  right: 16px;
  position: absolute;

  background-color: black;
  color: white;
}
</style>
