<template>
  <q-page-container style="padding-top: 0px">
    <q-page style="padding-top: 100px">
      <subHeaderForAdmin />
      <q-card class="q-pa-md" style="margin-top: 15px">
        <b>Property Price Update</b>
        <q-card-section
          class="q-gutter-md q-pa-none"
          style="margin-top: 10px; display: flex"
        >
          <div
            class="AccomBkgDetails"
            style="display: flex; justify-content: center; align-items: center"
          >
            <div
              class="AccomBkgTbl"
              style="
                display: flex;
                align-items: center;
                margin-top: 10px;
                margin-left: 15px;
              "
            >
              <q-select
                dense
                outlined
                use-input
                hide-selected
                fill-input
                hide-bottom-space
                options-dense
                input-debounce="0"
                v-model="selectedCity"
                :options="cityOptions"
                option-value="city_id"
                option-label="city_name"
                label="Select City"
                @input="
                  loadProperties();
                  emptyproperty();
                "
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>

            <div
              class="AccomBkgTbl"
              style="
                display: flex;
                align-items: center;
                margin-top: 10px;
                margin-left: 15px;
              "
            >
              <q-select
                style="width: 230px"
                v-model="selectedProperty"
                :options="propertyOptions"
                option-value="txn_id"
                option-label="sub_property_name"
                label="Select Property"
                dense
                outlined
                use-input
                hide-selected
                fill-input
                hide-bottom-space
                options-dense
                @input="
                  loadRoomtype();
                  emptyroomtype();
                "
                input-debounce="0"
              ></q-select>
            </div>

            <div
              class="AccomBkgTbl"
              style="
                display: flex;
                align-items: center;
                margin-top: 10px;
                margin-left: 15px;
              "
            >
              <q-select
                style="width: 230px"
                v-model="selectedRoomtype"
                :options="roomtypeOptions"
                option-value="sno"
                :option-label="
                  (option) =>
                    option
                      ? `${option.room_category} - ${option.room_type}`
                      : ''
                "
                label="Select Room Type"
                dense
                outlined
                use-input
                hide-selected
                fill-input
                hide-bottom-space
                options-dense
                @input="loadroominfocatwise()"
                input-debounce="0"
              >
              </q-select>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <div
        v-if="selectedRoomtype"
        class="row"
        style="
          padding-bottom: 50px;
          margin-top: 30px;
          place-content: space-evenly;
        "
      >
        <div class="col-20">

          <b>BEFORE</b>
          <q-card
            v-for="item in roominfocatwise_arr"
            :key="item.txn_id"
            style="
              width: 330px;
              margin-bottom: 10px;
              border-radius: 30px;
              border-style: ridge;
            "
          >
            <q-card-section>
              <div class="col-4 q-pa-sm">
                <!-- <q-card class="my-card" style="border-radius: 30px">
                <q-img :src="`${hotelImgpath}${item.room_image_1}`" :ratio="16 / 9" />
              </q-card> -->
                <div class="row" style="padding-top: 10px">
                  <div class="col-6 q-pa-sm">
                    <q-card class="my-card" style="border-radius: 15px">
                      <q-img
                        :src="`${hotelImgpath}${item.room_image_2}`"
                        :ratio="1 / 1"
                      />
                    </q-card>
                  </div>
                  <div class="col-6 q-pa-sm">
                    <q-card class="my-card" style="border-radius: 15px">
                      <q-img
                        :src="`${hotelImgpath}${item.room_image_3}`"
                        :ratio="1 / 1"
                      />
                    </q-card>
                  </div>
                </div>
              </div>
              <div style="font-size: 14px; font-weight: 900">
                {{ item.room_category }} ({{ item.room_type }})
                <div style="font-size: 12px; margin: 5px 0px">
                  Hospital is 1.5 KM from {{ item.sub_property_name }}
                </div>
                <div style="font-size: 12px">Check-in: {{ checkInDate }}</div>
                <div style="font-size: 12px">Check-out: {{ checkOutDate }}</div>
                <div style="font-size: 12px">Guests: 2 Adults & 0 Kids</div>
              </div>

              <div class="row justify-end">
                <div class="row col-12 justify-end">
                  <div style="font-size: 14px; padding-left: 100px">
                    Room Price
                  </div>
                  <div
                    id="roomPrice"
                    style="font-size: 14px; font-weight: 900"
                    class="text-grey"
                  >
                    <b
                      ><s>₹{{ item.price }}</s></b
                    >
                  </div>
                </div>
                <div class="row col-12 justify-end">
                  <div style="font-size: 14px; padding-left: 100px">
                    MH Price
                  </div>
                  <div
                    id="mhPrice"
                    style="
                      font-size: 18px;
                      font-weight: 900;
                      padding-left: 10px;
                    "
                  >
                    ₹{{
                      item.adult_count >= 4
                        ? 2 *
                          (item.price -
                            parseInt(
                              item.price * (item.partner_specialOffer / 100)
                            ) -
                            parseInt(
                              (item.price * item.property_specialOffer) / 100
                            ) -
                            (item.mh_offer_status === "yes"
                              ? mangohomzOffers_arr[0].offer_price
                              : 0))
                        : item.price -
                          parseInt(
                            item.price * (item.partner_specialOffer / 100)
                          ) -
                          parseInt(
                            (item.price * item.property_specialOffer) / 100
                          ) -
                          (item.mh_offer_status === "yes"
                            ? mangohomzOffers_arr[0].offer_price
                            : 0)
                    }}
                  </div>
                </div>
              </div>
              <div class="row justify-end" style="font-size: 10px">
                + ₹{{
                  parseInt(
                    ((item.adult_count >= 4 ? 2 * item.price : item.price) *
                      item.gst_per) /
                      100
                  )
                }}
                Taxes
              </div>
              <div
                class="row text-bold justify-end"
                style="font-size: 10px; color: red"
              >
                <strong>{{
                  item.adult_count >= 4
                    ? `${item.units} For 2 Rooms`
                    : item.units
                }}</strong>
              </div>
            </q-card-section>
          </q-card>
        </div>


        <q-form ref="propertypriceformdata">
          <div
            v-for="(item, index) in roominfocatwise_arr"
            :key="item.txn_id"
            :class="[
              'row',
              'justify-center',
              { 'flex-wrap-reverse': index === 1 },
            ]"
            style="
              margin-top: 20px;
              justify-items: center;
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              align-content: stretch;
              justify-content: center;
              align-items: center;
            "
          >
            <label>Existing Room Price - ₹{{ item.price }}</label>
            <div>
              <q-input
                style="margin-top: 10px"
                outlined
                v-model="editpropertyprice.roomPrice"
                @input="updatePrice(item)"
                :rules="[required('roomPrice')]"
                label="Room Price"
              ></q-input>
            </div>
            <label>Existing EB - {{ item.property_specialOffer }}%</label>
            <!-- <label>Existing partnerSpecialOffer - {{ item.partner_specialOffer }}%</label> -->
            <div>
              <q-input
                style="margin-top: 10px"
                outlined
                v-model="editpropertyprice.earlyBirdOffer"
                :rules="[required('earlyBirdOffer'), validateEarlyBirdOffer]"
                @input="updatePrice(item)"
                label="Early Bird Offer (%)"
              ></q-input>
            </div>


            <label>Room Availability - {{ item.no_of_avail_rooms }}</label>
            <!-- <label>Existing partnerSpecialOffer - {{ item.partner_specialOffer }}%</label> -->
            <div>
              <q-input
                style="margin-top: 10px"
                outlined
                v-model="editpropertyprice.numberOfRoomAvalable"
                :rules="[required('Number Of Room Available'), number]"

                label="Room Availability"
              ></q-input>
            </div>



            <div style="margin-top: 10px">
              <q-btn
                @click="UpdatePropertyPrice()"
                label="Update"
                color="primary"
              ></q-btn>
            </div>
            <div style="margin-top: 10px">
              <q-btn
                @click="viewlog()"
                label="View Log"
                color="primary"
              ></q-btn>
            </div>
          </div>
        </q-form>
        <div class="col-20">
          <b>AFTER</b>
          <q-card
            v-for="item in roominfocatwise_arr"
            :key="item.txn_id"
            style="
              width: 370px;
              margin-bottom: 10px;
              border-radius: 30px;
              border-style: ridge;
            "
          >
            <q-card-section>
              <div class="col-4 q-pa-sm">
                <!-- <q-card class="my-card" style="border-radius: 30px">
                <q-img :src="`${hotelImgpath}${item.room_image_1}`" :ratio="16 / 9" />
              </q-card> -->
                <div class="row" style="padding-top: 10px">
                  <div class="col-6 q-pa-sm">
                    <q-card class="my-card" style="border-radius: 15px">
                      <q-img
                        :src="`${hotelImgpath}${item.room_image_2}`"
                        :ratio="1 / 1"
                      />
                    </q-card>
                  </div>
                  <div class="col-6 q-pa-sm">
                    <q-card class="my-card" style="border-radius: 15px">
                      <q-img
                        :src="`${hotelImgpath}${item.room_image_3}`"
                        :ratio="1 / 1"
                      />
                    </q-card>
                  </div>
                </div>
              </div>
              <div style="font-size: 14px; font-weight: 900">
                {{ item.room_category }} ({{ item.room_type }})
                <div style="font-size: 12px; margin: 5px 0px">
                  Hospital is 1.5 KM from {{ item.sub_property_name }}
                </div>
                <div style="font-size: 12px">Check-in: {{ checkInDate }}</div>
                <div style="font-size: 12px">Check-out:{{ checkOutDate }}</div>
                <div style="font-size: 12px">Guests: 2 Adults & 0 Kids</div>
              </div>
              <div class="row col-6 justify-start">
                <div class="row col-12 justify-start">
                  <div style="font-size: 14px; padding-left: 0px">
                    Room Price
                  </div>
                  <div
                    style="font-size: 14px; font-weight: 900"
                    class="text-grey"
                  >
                    <b
                      ><s>₹{{ item.roomPrice || 0 }}</s></b
                    >
                  </div>
                </div>
                <div class="row col-12 justify-start">
                  <div style="font-size: 14px; padding-left: 0px">MH Price</div>
                  <div
                    style="
                      font-size: 18px;
                      font-weight: 900;
                      padding-left: 10px;
                    "
                  >
                    ₹{{ parseInt(item.aftermhPrice) || 0 }}
                  </div>
                </div>
                <div class="row col-12 justify-start" style="font-size: 10px">
                  + ₹{{
                    parseInt(
                      ((item.adult_count >= 4
                        ? 2 * item.roomPrice
                        : item.roomPrice) *
                        item.gst_per) /
                        100 || 0
                    )
                  }}
                  Taxes
                </div>
              </div>
              <div
                class="row text-bold justify-start"
                style="font-size: 10px; color: red"
              >
                <strong>{{
                  item.adult_count >= 4
                    ? `${item.units} For 2 Rooms`
                    : item.units
                }}</strong>
              </div>

              <div
                class="row col-6 justify-end"
                style="margin-left: -0px; margin-top: -70px"
              >
                <div style="font-size: 14px">Total Price</div>
                <div
                  style="font-size: 18px; font-weight: 900; padding-left: 10px"
                >
                  ₹{{
                    parseInt(item.aftermhPrice || 0) +
                    parseInt(
                      ((item.adult_count >= 4
                        ? 2 * (item.roomPrice || 0)
                        : item.roomPrice || 0) *
                        item.gst_per) /
                        100
                    )
                  }}
                </div>
              </div>

              <div
                class="row col-6 justify-end"
                style="margin-left: -0px; margin-top: -0px"
              >
                <div style="font-size: 14px">MH Commission ({{ item.mh_service_fee }}%)</div>
                <div
                  style="font-size: 18px; font-weight: 900; padding-left: 10px"
                >
                  ₹{{
                    parseInt(
                      (parseInt(item.roomPrice)  * item.mh_service_fee) / 100
                    ) || 0
                  }}
                </div>
              </div>

              <div
                class="row col-6 justify-end"
                style="margin-left: -0px; margin-top: -0px"
              >
                <div style="font-size: 14px">Partner Share</div>
                <div
                  style="font-size: 18px; font-weight: 900; padding-left: 10px"
                >
                  ₹{{
                    parseInt(parseInt(item.roomPrice) -
                      parseInt(item.roomPrice * 0.01) -
                      parseInt(item.roomPrice * 0.01) -
                      parseInt((item.roomPrice * item.mh_service_fee) / 100)  -
                      parseInt((item.roomPrice * item.mh_service_fee) / 100) * 0.18)
                      + parseInt((item.roomPrice * item.gst_per) / 100)  || 0
                  }}
                </div>
              </div>

              <div
                class="row col-6 justify-end"
                style="margin-left: -0px; margin-top: -0px"
                v-if="item.agent_fee_on_property !== 0"
              >
                <div style="font-size: 14px">Agent Commission ({{ item.agent_fee_on_property }}%)</div>
                <div
                  style="font-size: 18px; font-weight: 900; padding-left: 10px"
                >
                  ₹{{
                    parseInt(item.roomPrice * item.agent_fee_on_property/100 )-
                    parseInt((item.roomPrice * item.agent_fee_on_property/100)*0.05 )|| 0
                  }}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-dialog
        v-model="showTableDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpr fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div style="font-family: verdana">Property Price Update Log</div>
              <q-space />
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 40px">
            <q-table
              dense
              style="font-family: verdana"
              :data="propertyprice_log_rows"
              :columns="propertyprice_log_columns"
              :row-key="(row) => row.id"
              :filter="filter"
              wrap-cells
              :selected.sync="selected"
              separator="cell"
              :rows-per-page-options="[ 300, 0]"
              :hide-header="mode === 'grid'"
              :grid="mode === 'grid'"
            >
              <template v-slot:top-right="props">
                <q-input
                  outlined
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                  style="width: 400px"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-btn
                  flat
                  round
                  dense
                  :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="props.toggleFullscreen"
                  v-if="mode === 'list'"
                >
                  <q-tooltip
                    :difiltersable="$q.platform.is.mobile"
                    v-close-popup
                    >{{
                      props.inFullscreen
                        ? "Exit Fullscreen"
                        : "Toggle Fullscreen"
                    }}
                  </q-tooltip>
                </q-btn>
                <download-excel
                  :data="propertyprice_log_rows"
                  :fields="json_fields"
                  :header="headerValue"
                  worksheet="Property Price Update"
                  :name="`${excel_date}_PropertyPriceUpdate.xls`"
                >
                  <q-icon color="primary" name="mdi-file-excel" size="22px" />
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                    >Download Excel
                  </q-tooltip>
                </download-excel>
              </template>
            </q-table>
          </div>
        </q-layout>
      </q-dialog>
    </q-page>
  </q-page-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import filepaths from "../../helpers/filepath";
import moment from "moment";
import validations from "../../helpers/validations";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      showTableDialog: false,
      maximizedToggle: true,
      ...validations,
      hotelImgpath: "",
      selectedCity: "",
      selectedProperty: "",
      selectedRoomtype: "",
      item: {
        txn_id: "",
        property_txn_id: "",
        partner_id: "",
        room_category: "",
        room_type: "",
        property_address: "",
        price: "",
        adult_count: "",
        partner_specialOffer: "",
        property_specialOffer: "",
        mh_offer_status: "",
        units: "",
        gst_per: "",
        room_image_1: "",
        room_image_2: "",
        room_image_3: "",
      },
      editpropertyprice: {
        txn_id: "",
        account_id: "",
        property_txn_id: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
        sub_partner_name: "",
        property_name: "",
        sub_property_name: "",
        no_of_avail_rooms: "",
        room_type: "",
        previous_price: "",
        roomPrice: "",
        units: "",
        room_category: "",
        partner_specialOffer: "",
        previous_earlybird_offer: "",
        earlyBirdOffer: "",
        gst_per: "",
        numberOfRoomAvalable:"",
changed_by_user_name:"",
        changed_by_name:""
      },
      filter: "",
      selected: [],
      mode: "list",
      json_fields: {
        Sno: "index",
        "Property Name": "property_name",
        "Sub Property Name": "sub_property_name",
        "Room Type": "room_type",
        "Previous Price": "previous_price",
        "Changed Price": "changed_price",
        units: "units",
        "Room Category": "room_category",
        "Partner SpecialOffer(%)": "partner_specialOffer",
        "Previous EB Offer(%)": "previous_earlybird_offer",
        "Changed EB Offer(%)": "changed_earlybird_offer",
        "GST(%)": "gst_per",
"Changed by username":"changed_by_user_name",
        "Changed by name":"changed_by_name",
        "Changed DateTime": "changed_date_time",
      },
      headerValue: "Partner Registration Approvals",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
    };
  },
  created() {
    this.hotelImgpath = filepaths.mhapFilePath;
const user = JSON.parse(localStorage.getItem("user")) || [];
    this.editpropertyprice.changed_by_user_name = user.user_name
    this.editpropertyprice.changed_by_name = user.name

  },
  computed: {
    ...mapState({
      cityOptions: (state) => state.dropdown.propertycity_arr,
      propertyOptions: (state) => state.dropdown.property_arr,
      roomtypeOptions: (state) => state.dropdown.propertyroomtype_arr,
      roominfocatwise_arr: (state) => state.dropdown.roominfocatwise_arr,
      propertyprice_log_columns: (state) =>
        state.adminDashboard.propertyprice_log_columns,

      ...mapGetters("adminDashboard", ["propertyprice_log_rows"]),
      ...mapGetters("dropdown", ["roominfocatwise_arr"]),


    }),
  },
  mounted() {
    this.$store.dispatch("dropdown/loadPropertyCities");
    this.displayDates();
  },
  methods: {
    ...mapActions("dropdown", ["loadProperty"]),
    ...mapActions("dropdown", ["loadpropertyroomtype"]),
    ...mapActions("dropdown", ["getcategorywiseroominfo"]),
    ...mapActions("adminDashboard", ["updatepropertypriceDetails"]),
    ...mapActions("adminDashboard", ["getpropertypricelogdetails"]),

    loadProperties() {
      this.$store.dispatch("dropdown/loadProperty", this.selectedCity.city_id);
    },
    loadRoomtype() {
      const txn_id = this.selectedProperty.txn_id;
      const partner_id = this.selectedProperty.partner_id;
      this.$store.dispatch("dropdown/loadpropertyroomtype", {
        txn_id,
        partner_id,
      });

    },
    loadroominfocatwise() {
      this.editpropertyprice.roomPrice = "";
      this.editpropertyprice.earlyBirdOffer = "";

      const txn_id = this.selectedProperty.txn_id;
      const partner_id = this.selectedProperty.partner_id;
      const room_category = this.selectedRoomtype.room_category;
      const room_type = this.selectedRoomtype.room_type;
      const property_txn_id = this.selectedRoomtype.property_txn_id;
      this.$store.dispatch("dropdown/getcategorywiseroominfo", {
        txn_id,
        partner_id,
        room_category,
        room_type,
      });

      this.$store.dispatch("adminDashboard/getpropertypricelogdetails", {
        property_txn_id,
        partner_id,
        room_category,
        room_type,
      });
      // const existingRoomAvailability = this.roominfocatwise_arr[0] ?.no_of_avail_rooms;

      // this.editpropertyprice.numberOfRoomAvalable = existingRoomAvailability;
    },
    emptyproperty() {
      this.selectedProperty = "";

      if (this.selectedRoomtype) {
        this.selectedRoomtype = "";
      }
    },
    emptyroomtype() {
      this.selectedRoomtype = "";
    },
    viewlog() {
      this.showTableDialog = true;
    },
    updatePrice(item) {
      const roomPrice = parseFloat(this.editpropertyprice.roomPrice);
      const earlyBirdOffer = this.editpropertyprice.earlyBirdOffer
        ? parseFloat(this.editpropertyprice.earlyBirdOffer)
        : 0;

      const partnerSpecialOffer = parseFloat(item.partner_specialOffer);
      let aftermhPrice = 0;
      if (earlyBirdOffer >= 0 && earlyBirdOffer <= 100) {
        if (earlyBirdOffer !== 0) {
          const roomPriceAfterDiscounts =
            roomPrice -
            (roomPrice * partnerSpecialOffer) / 100 -
            (roomPrice * earlyBirdOffer) / 100;

          aftermhPrice =
            item.max_allow_adult >= 4
              ? 2 * roomPriceAfterDiscounts
              : roomPriceAfterDiscounts;
        } else {
          aftermhPrice = roomPrice;
        }
      }

      item.roomPrice = roomPrice.toFixed(2).replace(/\.00$/, "");
      //console.log(item.roomPrice)
      item.aftermhPrice =
        earlyBirdOffer === 100
          ? 0
          : aftermhPrice.toFixed(2).replace(/\.00$/, "");
    },

    // updatePrice(item) {
    //   console.log("item11",item)
    //   const roomPrice = parseFloat(this.editpropertyprice.roomPrice);
    //   const earlyBirdOffer = this.editpropertyprice.earlyBirdOffer
    //     ? parseFloat(this.editpropertyprice.earlyBirdOffer)
    //     : 0;
    //   const partnerSpecialOffer = parseFloat(item.partner_specialOffer);

    //   let aftermhPrice = 0;

    //   if (earlyBirdOffer >= 0 && earlyBirdOffer <= 100) {
    //     if (earlyBirdOffer !== 0) {
    //       aftermhPrice =
    //         item.adult_count >= 4
    //           ? 2 *
    //             (item.roomPrice -
    //               parseInt(item.roomPrice * (partnerSpecialOffer / 100)) -
    //               parseInt((item.roomPrice * earlyBirdOffer) / 100) -
    //               (item.mh_offer_status === "yes"
    //                 ? mangohomzOffers_arr[0].offer_price
    //                 : 0))
    //           : item.roomPrice -
    //             parseInt(item.roomPrice * (partnerSpecialOffer / 100)) -
    //             parseInt((item.roomPrice * earlyBirdOffer) / 100) -
    //             (item.mh_offer_status === "yes"
    //               ? mangohomzOffers_arr[0].offer_price
    //               : 0);
    //     } else {
    //       aftermhPrice = roomPrice;
    //     }
    //   }

    //   item.roomPrice = roomPrice.toFixed(2).replace(/\.00$/, "");
    //   item.aftermhPrice =
    //     earlyBirdOffer === 100
    //       ? 0
    //       : aftermhPrice.toFixed(2).replace(/\.00$/, "");
    // },

    validateEarlyBirdOffer(value) {
      const earlyBirdOffer = parseFloat(value);
      if (
        isNaN(earlyBirdOffer) ||
        !Number.isInteger(earlyBirdOffer) ||
        earlyBirdOffer < 0 ||
        earlyBirdOffer > 100
      ) {
        return "Early Bird Offer should be an integer between 0 and 100";
      }
      return true;
    },

    UpdatePropertyPrice() {
      this.$refs.propertypriceformdata.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.editpropertyprice.txn_id = this.selectedRoomtype.txn_id;
              this.editpropertyprice.account_id =
                this.selectedRoomtype.account_id;
              this.editpropertyprice.property_txn_id =
                this.selectedRoomtype.property_txn_id;
              this.editpropertyprice.partner_id =
                this.selectedRoomtype.partner_id;
              this.editpropertyprice.partner_name =
                this.selectedRoomtype.partner_name;
              this.editpropertyprice.partner_sub_id =
                this.selectedRoomtype.partner_sub_id;
              this.editpropertyprice.sub_partner_name =
                this.selectedRoomtype.sub_partner_name;
              this.editpropertyprice.property_name =
                this.selectedRoomtype.property_name;
              this.editpropertyprice.sub_property_name =
                this.selectedRoomtype.sub_property_name;
              this.editpropertyprice.no_of_avail_rooms =
                this.selectedRoomtype.no_of_avail_rooms;
              this.editpropertyprice.room_type =
                this.selectedRoomtype.room_type;
              this.editpropertyprice.previous_price =
                this.selectedRoomtype.price;
              this.editpropertyprice.units = this.selectedRoomtype.units;
              this.editpropertyprice.room_category =
                this.selectedRoomtype.room_category;
              this.editpropertyprice.partner_specialOffer =
                this.selectedRoomtype.partner_specialOffer;
              this.editpropertyprice.previous_earlybird_offer =
                this.selectedRoomtype.property_specialOffer;
              this.editpropertyprice.gst_per = this.selectedRoomtype.gst_per;

              this.editpropertyprice.roomPrice =
                this.editpropertyprice.roomPrice;
              this.editpropertyprice.earlyBirdOffer =
                this.editpropertyprice.earlyBirdOffer;
                this.editpropertyprice.numberOfRoomAvalable =
                this.editpropertyprice.numberOfRoomAvalable;
// console.log(this.editpropertyprice)
              this.updatepropertypriceDetails(this.editpropertyprice);
              this.emptyroomtype();
            })
            .onCancel(() => {});
        }
      });
    },

    displayDates() {
      const checkIn = new Date();
      checkIn.setHours(12, 0, 0);

      const checkOut = new Date(Date.now() + 24 * 60 * 60 * 1000);
      checkOut.setHours(12, 0, 0);

      const checkInFormatted = checkIn.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const checkOutFormatted = checkOut.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      this.checkInDate = checkInFormatted;
      this.checkOutDate = checkOutFormatted;
    },
  },
};
</script>
<style>
.selected {
  background-color: #00e1ff !important;
  color: #000000 !important;
}

@media (max-width: 767px) {
  .AccomBkgDetails {
    display: block !important;
  }

  .AccomBkgTbl {
    width: 90vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }

  .AccomBkgTbl {
    width: 90vw !important;
  }
}
</style>
