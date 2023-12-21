<template>
  <!--Mobile View Start-->
  <q-page-container class="bg-indigo-9" style="padding-top: 0px">
    <div class="row q-pa-xs lt-sm">
      <q-expansion-item
        v-if="isModifySearchVisible"
        class="text-white text-bold shadow-1 overflow-hidden"
        style="border-radius: 30px"
        label="MODIFY SEARCH"
        icon="search"
        header-class="bg-secondary text-white"
        expand-icon-class="text-white"
        v-model="isModifySearchExpanded"
      >
        <q-card class="rounded-borders" bordered style="width: 100%">
          <div
            class="text-white bg-primary text-center text-subtitle1 text-bold"
          >
            Book Now!
          </div>
          <q-select
            :options="cities"
            option-value="city_id"
            option-label="city_name"
            dense
            bg-color="white"
            v-model="searchItem.city"
            color="black"
            return-object
            standout="bg-secondary text-black"
            class="col-12 text-black"
            label-color="black text-weight-bold"
            @input="
              loadAllHospitals(searchItem.city);
              emptyHospitals();
              selectCities(searchItem.city);
            "
          >
          </q-select>
          <q-select
            :options="hospital"
            option-value="near_hospital_id"
            option-label="near_hospital_name"
            options-dense
            bg-color="white"
            dense
            color="black"
            standout="bg-secondary  text-black"
            class="col-12 text-black"
            v-model="searchItem.hospital.near_hospital_name"
            input-class="text-left"
            label="Near Hospital"
            label-color="black text-weight-bold"
            @click="selectHospitals(searchItem.hospital)"
          >
          </q-select>

          <div class="row q-pa-sm q-gutter-xs">
            <q-input
              nput
              v-model="defaultItem.dateModel.from"
              dense
              :label="
                this.$store.state.account.language == 'English'
                  ? 'Check-In'
                  : 'Check-In'
              "
              label-color="black"
              class="col-12"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="defaultItem.dateModel.from"
                      minimal
                      @input="closeDialog"
                      mask="YYYY/MM/DD"
                      :options="optionsFn"
                      @click="fromDateSelected"
                    >
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input
              v-model="defaultItem.dateModel.to"
              dense
              :label="
                this.$store.state.account.language == 'English'
                  ? 'Check-Out'
                  : 'Check-Out'
              "
              label-color="black"
              class="col-12"
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
                      v-model="defaultItem.dateModel.to"
                      minimal
                      @input="closeDialog"
                      mask="YYYY/MM/DD"
                      :options="optionsFn2"
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
              class="col-12 text-bold"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              dense
              color="primary"
              v-show="
                this.$store.state.account.language == 'English' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <q-btn
              class="col-12 text-bold"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              dense
              color="primary"
              v-show="
                this.$store.state.account.language == 'Hindi' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <q-btn
              class="col-12 text-bold"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              dense
              color="primary"
              v-show="
                this.$store.state.account.language == 'Assamese' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <q-btn
              class="col-12 text-bold"
              no-caps
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              dense
              color="primary"
              v-show="
                this.$store.state.account.language == 'Bengali' ? true : false
              "
              @click="show_guest_cards = !show_guest_cards"
            >
              Guests : {{ totalguests }}
            </q-btn>
            <div class="col" v-show="show_guest_cards">
              <div class="col q-pa-sm q-gutter-sm">
                <q-list
                  style="max-width: 1024px"
                  class="rounded-borders bg-white"
                >
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Adults</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <span class="text-black">Age 13 or above</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="defaultItem.adult_count <= 0 ? true : false"
                          icon="mdi-minus-circle-outline"
                          @click="--defaultItem.adult_count"
                        />
                        <q-btn
                          class="text-bold"
                          size="12px"
                          flat
                          dense
                          round
                          :label="defaultItem.adult_count"
                          v-model="defaultItem.adult_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="defaultItem.adult_count >= 8 ? true : false"
                          icon="mdi-plus-circle-outline"
                          @click="defaultItem.adult_count++"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Children</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <span class="text-black">Age 2 - 12</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="defaultItem.child_count <= 0 ? true : false"
                          icon="mdi-minus-circle-outline"
                          @click="--defaultItem.child_count"
                        />
                        <q-btn
                          class="text-bold"
                          size="12px"
                          flat
                          dense
                          round
                          :label="defaultItem.child_count"
                          v-model="defaultItem.child_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="defaultItem.child_count >= 4 ? true : false"
                          icon="mdi-plus-circle-outline"
                          @click="defaultItem.child_count++"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label lines="1" class="text-bold"
                        >Infants</q-item-label
                      >
                      <q-item-label caption lines="2">
                        <span class="text-black"> under-2</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="
                            defaultItem.infant_count <= 0 ? true : false
                          "
                          icon="mdi-minus-circle-outline"
                          @click="--defaultItem.infant_count"
                        />
                        <q-btn
                          class="text-bold"
                          size="12px"
                          flat
                          dense
                          round
                          :label="defaultItem.infant_count"
                          v-model="defaultItem.infant_count"
                        />
                        <q-btn
                          size="12px"
                          flat
                          dense
                          round
                          :disable="
                            defaultItem.infant_count >= 4 ? true : false
                          "
                          icon="mdi-plus-circle-outline"
                          @click="defaultItem.infant_count++"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>

            <q-btn
              dense
              no-caps
              icon-right="search"
              class="bg-green text-white text-bold col-12"
              @click="onSearchButtonClick"
              label="Search"
            />
          </div>
        </q-card>
      </q-expansion-item>

      <!-- <q-btn-dropdown dropdown-icon="change_history"  class="text-white text-bold"  style="margin: 10px;" color="secondary" rounded  label="Modify Search" aria-label="Mangohomz Booking Search Button" direction="down" icon="search"  @click="show_search_edit = !show_search_edit" > </q-btn-dropdown> -->
    </div>

    <!--Mobile View End-->

    <!--Website view Start-->
    <div class="row gt-xs" style="padding-top: 0px">
      <q-select
        style="width: 150px"
        :options="cities"
        option-value="city_id"
        option-label="city_name"
        dense
        bg-color="white"
        v-model="searchItem.city"
        color="black"
        return-object
        standout="bg-secondary text-black"
        class="q-ml-md text-black city-menu"
        label-color="black text-weight-bold"
        @input="
          loadAllHospitals(searchItem.city);
          emptyHospitals();
          selectCities(searchItem.city);
        "
      >
      </q-select>
      <q-select
        style="width: 300px"
        :options="hospital"
        option-value="near_hospital_id"
        option-label="near_hospital_name"
        options-dense
        bg-color="white"
        dense
        color="black"
        standout="bg-secondary  text-black"
        class="q-ml-md text-black"
        v-model="searchItem.hospital.near_hospital_name"
        input-class="text-left"
        label="Near Hospital"
        label-color="black text-weight-bold"
        @click="selectHospitals(searchItem.near_hospital_name)"
      >
      </q-select>

      <q-input
        style="width: 100px"
        standout="bg-secondary  text-black"
        bg-color="white"
        class="q-ml-md text-black cursor-pointer"
        dense
        v-model="searchItem.checkIn"
        label="Check-in"
        label-color="black text-weight-bold"
      >
        <q-popup-edit v-model="popup1" :cover="false" :offset="[0, 10]">
          <div class="text-bold text-overwrite">Check-in</div>

          <q-date
            flat
            minimal
            v-model="searchItem.checkIn"
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
      </q-input>

      <q-input
        style="width: 100px"
        bg-color="white"
        color="blue"
        standout="bg-secondary  text-blue"
        class="q-ml-md text-blue cursor-pointer"
        dense
        v-model="searchItem.checkOut"
        label="Check-out"
        label-color="black text-bold"
      >
        <q-popup-edit
          v-model="popup2"
          :cover="false"
          :offset="[0, 10]"
          v-slot="scope"
        >
          <div class="text-bold text-overwrite">Check-out</div>

          <q-date
            minimal
            v-model="searchItem.checkOut"
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
      </q-input>

      <q-btn
        style="width: 90px"
        color="white"
        class="q-ml-md text-black cursor-pointer"
        dense
        @input="search"
        v-model="searchItem.guests"
        label="Guests"
        no-caps
      >
        <span class="text-caption">: {{ searchItem.guests }}</span>
        <q-popup-proxy>
          <q-banner>
            <q-list style="max-width: 250px" class="rounded-borders bg-white">
              <q-item>
                <q-item-section>
                  <q-item-label lines="1" class="text-bold"
                    >Adults</q-item-label
                  >
                  <q-item-label caption lines="2">
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
                      :disable="searchItem.adult_count <= 0 ? true : false"
                      icon="mdi-minus-circle-outline"
                      @click="--searchItem.adult_count, --searchItem.guests"
                    />
                    <q-btn
                      class="gt-xs text-bold"
                      size="16px"
                      flat
                      dense
                      round
                      :label="searchItem.adult_count"
                      v-model="searchItem.adult_count"
                    />
                    <q-btn
                      size="12px"
                      flat
                      dense
                      round
                      :disable="searchItem.adult_count >= 8 ? true : false"
                      icon="mdi-plus-circle-outline"
                      @click="searchItem.adult_count++, searchItem.guests++"
                    />
                  </div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label lines="1" class="text-bold"
                    >Children</q-item-label
                  >
                  <q-item-label caption lines="2">
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
                      :disable="searchItem.child_count <= 0 ? true : false"
                      icon="mdi-minus-circle-outline"
                      @click="--searchItem.child_count, --searchItem.guests"
                    />
                    <q-btn
                      class="gt-xs text-bold"
                      size="16px"
                      flat
                      dense
                      round
                      :label="searchItem.child_count"
                      v-model="searchItem.child_count"
                    />
                    <q-btn
                      size="12px"
                      flat
                      dense
                      round
                      :disable="searchItem.child_count >= 4 ? true : false"
                      icon="mdi-plus-circle-outline"
                      @click="searchItem.child_count++, searchItem.guests++"
                    />
                  </div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label lines="1" class="text-bold"
                    >Infants</q-item-label
                  >
                  <q-item-label caption lines="2">
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
                      :disable="searchItem.infant_count <= 0 ? true : false"
                      icon="mdi-minus-circle-outline"
                      @click="--searchItem.infant_count"
                    />
                    <q-btn
                      class="gt-xs text-bold"
                      size="16px"
                      flat
                      dense
                      round
                      :label="searchItem.infant_count"
                      v-model="searchItem.infant_count"
                    />
                    <q-btn
                      size="12px"
                      flat
                      dense
                      round
                      :disable="searchItem.infant_count >= 4 ? true : false"
                      icon="mdi-plus-circle-outline"
                      @click="searchItem.infant_count++"
                    />
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-banner>
        </q-popup-proxy>
      </q-btn>
      <q-btn
      class="text-white bg-green" style="margin-left: 15px" aria-label="Mangohomz Booking Search Button" flat icon="search"
        @click="loadSearchResults"
      />
    </div>
    <!--Website View End-->
  </q-page-container>
</template>
  <style>
</style>
  <script>
import { mapActions, mapState, mapGetters } from "vuex";
import { date } from "quasar";
import { api } from "boot/axios";

let date3 = new Date();
let date4 = date3.setDate(date3.getDate() + 1);
let selectedDate1 = "";
export default {
  name: "searchHeaderCompForSeo",
  data() {
    return {
      popup1: "popup1",
      popup2: "popup2",
      hospitalDetails: null,
      search: "",
      show_guest_cards: false,
      show_search_edit: false,
      showModifySearch: true,
      isModifySearchVisible: false,
      isModifySearchExpanded: false,
      modifySearch: null,
      defaultItem: {
        city: "",
        hospital: "",
        dateModel: {
          from: date.formatDate(new Date(), "YYYY/MM/DD"),
          to: date.formatDate(date4, "YYYY/MM/DD"),
        },
        guest: "",
        adult_count: 2,
        child_count: 0,
        infant_count: 0,
      },
      searchItem: {
        city: "",
        hospital: "",
        checkIn: "",
        checkOut: "",
        guests: 2,
        adult_count: 2,
        child_count: 0,
        infant_count: 0,
        dateModel: {
          from: "",
          to: "",
        },
        guest: 2,
      },
      text: "",
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
    };
  },
  computed: {
    ...mapState({
      cities: (state) => state.dropdown.city_arr,
      hospital: (state) => state.dropdown.hospital_arr,
      citywise_seo_array: (state) => state.mostrecentsearch.citywise_seo_array,
    }),

    // ...mapGetters("mostrecentsearch", ["citywise_seo_array"]),
    totalguests() {
      // this.defaultItem.guest = this.defaultItem.adult_count + this.defaultItem.child_count;
      return this.defaultItem.adult_count + this.defaultItem.child_count;
    },
    optionsFn2(d) {
      let fromDate = date.formatDate(this.searchItem.checkIn, "YYYY/MM/DD");
      return (d) => d >= fromDate;
    },
  },

  async mounted() {
    this.isModifySearchVisible = true;

    let city_seo_name = this.$route.params.city;

    let hospital_seo_name = this.$route.params.hospital;
    // this.loadhospitalwithAllDeails = {
    //   city_seo_name: city,
    //   hospital_seo_name: hospitalName,

    // };
    // console.log("this.loadhospitalwithAllDeails",this.loadhospitalwithAllDeails)
    // let hospitalDetails ={}
    try {
      const data = await this.someFunction(city_seo_name, hospital_seo_name);
      this.hospitalDetails = data;
     // console.log("Assigned data:", this.hospitalDetails);
    } catch (error) {
      // Handle error if needed
    }
    // this.someFunction().then(res=>this.hospitalDetails=res)
    //console.log("this.hospital destails", this.hospitalDetails);
    // api
    //     .get(`/mostRecentSearch/loadCityWiseForSeo/${city_seo_name}/${hospital_seo_name}`)
    //     .then(response => {
    //       this.hospitalDetails =response.data,
    //       console.log("loadCityWiseForSeo",response.data)
   // console.log("console", this.someFunction());

    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    //    console.log("console",this.hospitalDetails);
    // this.$store.dispatch(`mostrecentsearch/loadCityWiseForSeo`,this.loadhospitalwithAllDeails);
    // let hotelSerachDetails =(JSON.parse(this.$route.params.searchInfo));
    // console.log("hotelSerachDetails",hotelSerachDetails);
    // let hotelSerachDetails = JSON.parse(localStorage.getItem("searchItem")) || [];
    this.searchItem = {
      city: {
        city_name: this.hospitalDetails.data?.[0].city,
        city_id: this.hospitalDetails.data?.[0].city_id,
      },
      hospital: {
        near_hospital_name: this.hospitalDetails.data?.[0].near_hospital_name,
        latitude: this.hospitalDetails.data?.[0].latitude,
        longitude: this.hospitalDetails.data?.[0].longitude,
        youtube_link:this.hospitalDetails.data[0].youtube_link,
        map_link:this.hospitalDetails.data[0].map_link,
      },
      guests: this.hospitalDetails.guest,
      adult_count: this.hospitalDetails.adult_count,
      child_count: this.hospitalDetails.child_count,
      checkIn: this.hospitalDetails.today,
      checkOut: this.hospitalDetails.nextDay,
    };
   // console.log("mostserachInfo", this.searchItem);

    // this.searchItem = {
    //   city: hotelSerachDetails.city,
    //   hospital: hotelSerachDetails.hospital,
    //   guests: hotelSerachDetails.guest,
    //   adult_count: hotelSerachDetails.adult_count,
    //   child_count: hotelSerachDetails.child_count,
    //   // checkIn: hotelSerachDetails.checkIn,
    //   // checkOut: hotelSerachDetails.checkOut,
    //   checkIn: hotelSerachDetails.dateModel.from,
    //   checkOut: hotelSerachDetails.dateModel.to,
    // };
    this.$store.dispatch(`booking/loadHotels`, this.searchItem);
    this.$store.dispatch("dropdown/loadAllCities");
  },
  methods: {
    ...mapActions("booking", ["loadHotels"]),
    ...mapActions("dropdown", ["loadAllHospitals"]),
    ...mapActions("booking", ["setSearchDetailsObj"]),

    selectHospitals(item) {
      this.$store.state.account.hospital = item.hospital_name;
    },

    async fetchData(city_seo_name, hospital_seo_name) {
      try {
        const response = await api.get(
          `/mostRecentSearch/loadCityWiseForSeo/${city_seo_name}/${hospital_seo_name}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async someFunction(cityName, hospitalName) {
      try {
        const response = await this.fetchData(cityName, hospitalName);
        // console.log("console", response);
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    selectCities(item) {
      this.$store.state.account.city = item.city_name;
    },

    goToNext() {
      if (this.searchItem.city) {
        this.searchItem.guests =
          this.searchItem.adult_count + this.searchItem.child_count;
        if (this.searchItem.checkIn === this.searchItem.checkOut) {
          this.$q.notify({
            message: "Please select a different date range.",
            icon: "announcement",
            position: "top",
            color: "purple",
            actions: [
              {
                label: "Dismiss",
                color: "yellow",
                handler: () => {
                  /* ... */
                },
              },
            ],
          });
        } else {
          this.searchItem.dateModel = {
            from: this.searchItem.checkIn,
            to: this.searchItem.checkOut,
          };

          // this.searchItem.dateModel.to = this.searchItem.checkOut;
          this.searchItem.guest = this.searchItem.guests;

          if (this.searchItem.guests > 0) {
            this.setSearchDetailsObj(this.searchItem);
            // console.log("default", this.searchItem);
            this.$router.push({
              name: "Serach Hotel List",
              params: { searchInfo: JSON.stringify(this.searchItem) },
            });
            // this.$router.push("/bookingProcess",{ params:  JSON.stringify(this.searchItem)});
            // this.$router.push("/bookingProcess");
          } else {
            this.$q.notify({
              message: "Please add guests",
              icon: "announcement",
              position: "top",
              color: "purple",
              actions: [
                {
                  label: "Dismiss",
                  color: "yellow",
                  handler: () => {
                    /* ... */
                  },
                },
              ],
            });
          }
        }
      } else {
        this.$q.notify({
          message: "Please Fill all Details.",
          icon: "announcement",
          position: "top",
          color: "purple",
          actions: [
            {
              label: "Dismiss",
              color: "yellow",

              handler: () => {
                /* ... */
              },
            },
          ],
        });
      }
    },
    onSearchButtonClick() {
      if (this.isModifySearchExpanded) {
        this.isModifySearchExpanded = false;
      }
      this.loadSearchResults();
    },

    loadSearchResults() {
      this.goToNext();
      this.loadHotels(this.searchItem);
    },
    fromDateSelected() {
      this.searchItem.checkOut = this.searchItem.checkIn;
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    emptyHospitals() {
      this.searchItem.hospital = "";
    },
  },
};
</script>
