<template>
  <q-page class="q-pa-sm" style="padding-top: 120px">
    <subHeaderForAdmin />
    <q-toolbar class="bg-primary text-white rounded-borders q-mt-md q-mb-md">
      <!-- <q-btn flat round dense icon="mdi-account" /> -->
      <q-toolbar-title class="text-subtitle1 text-weight-bold">
        Hospital Master
      </q-toolbar-title>
      <div
        class="q-ma-xs q-pa-xs"
        style="text-align: justify; font-size: 15px; font-family: verdana"
      >
        <b>
          <q-td>
            <q-btn
              color="green"
              @click="viewDataItem()"
              size="sm"
              class="q-col"
              style="align-self: flex-end"
              >View</q-btn
            >
          </q-td></b
        >
      </div>
    </q-toolbar>
    <q-form class="AccomBkgDetails" ref="hospitalFormBasic">
      <div class="row justify-content-center" style="justify-content: center">
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Hospital Name*"
          v-model="hospitalDetails.near_hospital_name"
          hide-bottom-space
          style="width: 250px"
          label-color="black"
          :rules="[required('Name')]"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Hospital Location*"
          v-model="hospitalDetails.locality"
          hide-bottom-space
          style="width: 250px"
          label-color="black"
          :rules="[required('Location')]"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Hospital Nick Name*"
          hide-bottom-space
          v-model="hospitalDetails.hospital_nick_name"
          style="width: 250px"
          label-color="black"
          :rules="[required('Nick Name')]"
        >
        </q-input>
        <q-select
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Type*"
          hide-bottom-space
          style="width: 250px"
          v-model="hospitalDetails.type"
          :options="type_Arr"
          label-color="black"
        >
        </q-select>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Address*"
          hide-bottom-space
          style="width: 250px"
          label-color="black"
          v-model="hospitalDetails.address"
          :rules="[required('Address')]"
          type="text"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Latitude*"
          hide-bottom-space
          v-model="hospitalDetails.latitude"
          style="width: 250px"
          label-color="black"
          :rules="latitudeRules"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Longitude*"
          hide-bottom-space
          v-model="hospitalDetails.longitude"
          style="width: 250px"
          label-color="black"
          :rules="longitudeRules"
        >
        </q-input>
        <q-select
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          options-dense
          outlined
          use-input
          hide-selected
          style="width: 250px"
          fill-input
          :options="stateOptions"
          @filter="filterFnStates"
          option-label="state_name"
          option-value="state_id"
          v-model="hospitalDetails.state"
          @input="
            loadAllCities(hospitalDetails.state);
            emptyCities();
          "
          label="Select State*"
          label-color="black"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-select
          dense
          options-dense
          outlined
          use-input
          hide-selected
          style="width: 250px"
          fill-input
          :options="cityOptions"
          @filter="filterFnCities"
          option-label="city"
          option-value="city_id"
          v-model="hospitalDetails.city"
          label="Select City*"
          label-color="black"
          class="row col-3 q-mt-sm q-mr-sm"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Pincode*"
          hide-bottom-space
          style="width: 250px"
          label-color="black"
          v-model="hospitalDetails.pin_code"
          :rules="pincodeinputRules"
          maxlength="6"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Speciality*"
          hide-bottom-space
          style="width: 250px"
          label-color="black"
          v-model="hospitalDetails.specialty"
          :rules="[required('Speciality')]"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="No of Beds*"
          hide-bottom-space
          style="width: 250px"
          label-color="black"
          v-model="hospitalDetails.no_of_bed"
          :rules="bedsinputRules"
        >
        </q-input>
        <q-select
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Rating *"
          hide-bottom-space
          style="width: 250px"
          label-color="black"
          v-model="hospitalDetails.ratings"
          :options="ratings_Arr"
        >
        </q-select>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="City Seo Name*"
          hide-bottom-space
          fill-input
          style="width: 250px"
          label-color="black"
          option-label="city"
          v-model="hospitalDetails.city.city"
          :rules="[required('City Seo Name')]"
        >
        </q-input>
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          label="Hospital Seo Name*"
          hide-bottom-space
          style="width: 250px"
          label-color="black"
          v-model="hospitalDetails.near_hospital_name"
          :rules="[required('Hospital Seo Name')]"
        >
        </q-input>
      </div>
      <div class="row q-pa-md justify-end">
        <q-btn
          color="secondary"
          label="Submit"
          @click="onHospitalDetailsSubmit"
        ></q-btn>
      </div>
    </q-form>

    <!-- //Hospital Master Data View dialog -->

    <q-dialog
      v-model="hospitalDataDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout view="Lhh lpr fff" container class="bg-white">
        <q-header class="bg-primary q-mb-5">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            <div style="font-family: verdana">Hospital Master Details</div>
            <q-space />

            <q-btn dense flat icon="close" @click="closeHospitalDialog()">
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <q-space />



        <div
          class="row justify-content-end q-pa-md q-mt-md"
          style="font-family: verdana; font-size: 15px"
        >
        <!-- <download-excel
          v-if="Hospital_Master_Details.length != 0"
          :data="Hospital_Master_Details"
          header="headerValue"
          :name="`${excel_date}_Hospital Master Details .xls`"
        >
          <q-icon color="primary" style="margin-left:90vw" name="mdi-file-excel" size="22px" />
          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
            >Download Excel
          </q-tooltip>
      </download-excel> -->
          <!-- <q-table
            class="q-mt-md"
            style="font-family: verdana"
            :title="title"
            :data="Hospital_Master_Details"
            :columns="admin_hospital_columns"
            dense
            :rows-per-page-options="[100, 200, 300, 0]"
            separator="cell"
            row-key="Sr.no"
          >
          </q-table> -->
          <div style="margin: auto width:100vw">
            <q-table
              :data="Hospital_Master_Details"
              :columns="admin_hospital_columns"
              :rows-per-page-options="[100, 200, 300, 0]"
              dense
              separator="cell"

              :grid="mode === 'grid'"
              :filter="filter"
              :selected.sync="selected"
              color="green"
              class="q-mt-md"
            >
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    class="q-ml-sm"
                    color="primary"
                    @click="editedHospitalData(props.row)"
                    size="sm"
                    ><q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip
                    >Edit
                  </q-btn>
                </q-td>
              </template>






              <template v-slot:top-right="props">
              <div
                class="AccomBkgTbl"
                style="display: flex; align-items: center; margin-top: 10px"
              >
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
              </div>
              <q-btn
                dense
                flat
                icon="mdi-folder-refresh-outline"
                v-close-popup
                @click="reloadPage"
              >
                <q-tooltip class="bg-white text-primary">Refresh</q-tooltip>
              </q-btn>

              <q-btn
                flat
                round
                dense
                :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen"
                v-if="mode === 'list'"
              >
                <q-tooltip :difiltersable="$q.platform.is.mobile" v-close-popup
                  >{{
                    props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
                  }}
                </q-tooltip>
              </q-btn>

              <q-btn
                flat
                round
                dense
                :icon="mode === 'grid' ? 'list' : 'grid_on'"
                @click="
                  mode = mode === 'grid' ? 'list' : 'grid';
                  separator = mode === 'grid' ? 'none' : 'horizontal';
                "
                v-if="!props.inFullscreen"
              >
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                  >{{ mode === "grid" ? "List" : "Grid" }}
                </q-tooltip>
              </q-btn>
              <download-excel
                v-if="Hospital_Master_Details.length != 0"
                :data="Hospital_Master_Details"
                :fields="json_fields"
                :header="headerValue"
                worksheet="Hospital list"
                :name="`${excel_date}_Hospital list.xls`"
              >
                <q-icon color="primary" name="mdi-file-excel" size="22px" />
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                  >Download Excel
                </q-tooltip>
              </download-excel>
              <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->
            </template>




            </q-table>
          </div>
        </div>
      </q-layout>
    </q-dialog>

    <!-- Hospital Master  Edit Dialog -->
    <q-dialog
      v-model="hospitalEditDataDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout view="Lhh lpr fff" container class="bg-white">
        <q-header class="bg-primary q-mb-5">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            <div style="font-family: verdana">Edit Hospital Master Details</div>
            <q-space />

            <q-btn dense flat icon="close" @click="closeEditHospitalDialog()">
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <q-space />
        <q-space />
        <q-form ref="editPropertyForm" class="q-mt-sm" style="margin-top: 10% ">
          <div style="justify-content: center" class="row justify-content-center">
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Hospital Name*"
              v-model="editHospitalMasterData.near_hospital_name"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              :rules="[required('Name')]"
              no-error-icon
            >
            </q-input>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Hospital Location*"
              v-model="editHospitalMasterData.locality"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              :rules="[required('Location')]"
            >
            </q-input>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Hospital Nick Name*"
              hide-bottom-space
              v-model="editHospitalMasterData.hospital_nick_name"
              style="width: 250px"
              label-color="black"
              :rules="[required('Nick Name')]"
            >
            </q-input>
            <q-select
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Type*"
              hide-bottom-space
              style="width: 250px"
              v-model="editHospitalMasterData.type"
              :options="type_Arr"
              label-color="black"
            >
            </q-select>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="City Seo Name*"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              v-model="editHospitalMasterData.city_seo_name"
              :rules="[required('City Seo Name')]"
            >
            </q-input>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Hospital Seo Name*"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              v-model="editHospitalMasterData.hospital_seo_name"
              :rules="[required('Hospital Seo Name')]"
            >
            </q-input>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Address*"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              v-model="editHospitalMasterData.address"
              :rules="[required('Address')]"
              type="text"
            >
            </q-input>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Latitude*"
              hide-bottom-space
              v-model="editHospitalMasterData.latitude"
              style="width: 250px"
              label-color="black"
              :rules="latitudeRules"
            >
            </q-input>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Longitude*"
              hide-bottom-space
              v-model="editHospitalMasterData.longitude"
              style="width: 250px"
              label-color="black"
              :rules="longitudeRules"
            >
            </q-input>
            <q-select
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              options-dense
              outlined
              use-input
              hide-selected
              style="width: 250px"
              fill-input
              :options="stateOptions"
              @filter="filterFnStates"
              option-label="state_name"
              option-value="state_id"
              v-model="editHospitalMasterData.state"
              @input="
                loadAllCities(editHospitalMasterData.state);
                emptyCities();
              "
              label="Select State*"
              label-color="black"
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
              dense
              options-dense
              outlined
              use-input
              hide-selected
              style="width: 250px"
              fill-input
              :options="cityOptions"
              @filter="filterFnCities"
              option-label="city"
              option-value="city_id"
              v-model="editHospitalMasterData.city"
              label="Select City*"
              label-color="black"
              class="row col-3 q-mt-sm q-mr-sm"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Pincode*"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              v-model="editHospitalMasterData.pin_code"
              :rules="pincodeinputRules"
              maxlength="6"
            >
            </q-input>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Speciality*"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              v-model="editHospitalMasterData.specialty"
              :rules="[required('Speciality')]"
            >
            </q-input>
            <q-input
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="No of Beds*"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              v-model="editHospitalMasterData.no_of_bed"
              :rules="bedsinputRules"
            >
            </q-input>
            <q-select
              class="row col-3 q-mt-sm q-mr-sm"
              dense
              outlined
              label="Rating *"
              hide-bottom-space
              style="width: 250px"
              label-color="black"
              v-model="editHospitalMasterData.ratings"
              :options="ratings_Arr"
            >
            </q-select>
          </div>
          <div class="row q-pa-md justify-end">
            <q-btn
              color="secondary"
              label="Update"
              @click="onHospitalUpdate"
            ></q-btn>
          </div>
        </q-form>
      </q-layout>
    </q-dialog>
  </q-page>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import moment from "moment";
import validations from "../../helpers/validations";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

//console.log(Hospital_master_arr)

export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      ...validations,
      hospitalDataDialog: false,
      hospitalEditDataDialog: false,
      maximizedToggle: true,
      selected: [],
      mode: "list",
      headerValue: "Hospital Master Details",
      editedIndex: 0,
      city: "",
      hospitalDetails: {
        near_hospital_name: "",
        locality: "",
        hospital_nick_name: "",
        type: "",
        city_seo_name: "",
        hospital_seo_name: "",
        address: "",
        latitude: "",
        longitude: "",
        state: "",
        city: "",
        pin_code: "",
        specialty: "",
        no_of_bed: "",
        ratings: "",
      },

      editHospitalMasterData: {
        near_hospital_id: "",
        near_hospital_name: "",
        locality: "",
        hospital_nick_name: "",
        type: "",
        city_seo_name: "",
        hospital_seo_name: "",
        address: "",
        latitude: "",
        longitude: "",
        state: "",
        city: "",
        pin_code: "",
        specialty: "",
        no_of_bed: "",
        ratings: "",
      },

      pincodeinputRules: [
        (v) => !!v || "Value is required",
        (v) => /^[0-9]{6}$/.test(v) || "Enter a 6-digit PIN code",
      ],

      bedsinputRules: [
        (v) => !!v || "Enter digits",
        (v) => /^[1-9]\d*$/.test(v) || "Enter a number greater than 0",
      ],
      latitudeRules: [
        (v) => !!v || "Latitude is required",
        (v) => (v >= -90 && v <= 90) || "Enter a valid latitude (-90 to +90)",
      ],
      longitudeRules: [
        (v) => !!v || "Longitude is required",
        (v) =>
          (v >= -180 && v <= 180) || "Enter a valid longitude (-180 to +180)",
      ],

      filter: "",
      stateOptions: [],
      cityOptions: [],
      ratings_Arr: [1, 2, 3, 4, 5],
      type_Arr: ["PVT", "GOVT", "AIDED"],
      title: "Hospital Master",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
    };
  },

  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
      Hospital_Master_Details: (state) => state.master.Hospital_Master_Details,
      admin_hospital_columns: (state) => state.master.admin_hospital_columns,
      // states: (state) => state.master.states_arr,
      // cities: (state) => state.master.city_arr,
    }),
    ...mapGetters("master", ["Hospital_Master_Details"]),
  },

  mounted() {
    this.$store.dispatch("master/loadAllStates");
    // this.$store.dispatch("master/loadHospitalData");
    // this.$store.dispatch("partners/getPropertyRegistrationBasedOnStatus");
  },

  methods: {
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("master", ["hospitalDetailsSaving"]),
    ...mapActions("master", ["loadHospitalData"]),
    ...mapActions("master", ["updateHospitalDetails"]),

    onHospitalDetailsSubmit() {
      this.$refs.hospitalFormBasic.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              //console.log("uuuuu", this.hospitalDetails);
              this.hospitalDetailsSaving(this.hospitalDetails);
              this.resetFiles();
            })
            .onCancel(() => {
              this.resetFiles();
            });
        }
      });
    },

    onHospitalUpdate() {
      this.$refs.editPropertyForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              console.log("update", this.editHospitalMasterData);
              this.updateHospitalDetails(this.editHospitalMasterData);
              // this.getPropertyDetails(this.editedItem);
              this.propertyEditDialog = false;
            })
            .onCancel(() => {
              this.propertyEditDialog = true;
              this.resetFiles();
            });
        }
      });
    },

    emptyCities() {
      this.hospitalDetails.city = "";
    },

    closeHospitalDialog() {
      this.hospitalDataDialog = false;
    },

    closeEditHospitalDialog() {
      this.hospitalEditDataDialog = false;
    },

    filterFnStates(val, update) {
      if (val === "") {
        update(() => {
          this.stateOptions = this.states;
        });
        return this.stateOptions;
      }
      update(() => {
        const needle = this.states.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.stateOptions = needle;
        return this.stateOptions;
      });
    },

    filterFnCities(val, update) {
      if (val === "") {
        update(() => {
          this.cityOptions = this.cities;
        });
        return this.cityOptions;
      }
      update(() => {
        const needle = this.cities.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.cityOptions = needle;
        return this.cityOptions;
      });
    },

    resetFiles() {
      (this.hospitalDetails.near_hospital_name = ""),
        (this.hospitalDetails.locality = ""),
        (this.hospitalDetails.hospital_nick_name = ""),
        (this.hospitalDetails.type = ""),
        (this.hospitalDetails.city_seo_name = ""),
        (this.hospitalDetails.hospital_seo_name = ""),
        (this.hospitalDetails.address = ""),
        (this.hospitalDetails.latitude = ""),
        (this.hospitalDetails.longitude = ""),
        (this.hospitalDetails.state = ""),
        (this.hospitalDetails.city = ""),
        (this.hospitalDetails.pin_code = ""),
        (this.hospitalDetails.specialty = ""),
        (this.hospitalDetails.no_of_bed = ""),
        (this.hospitalDetails.ratings = "");
    },

    viewDataItem(item) {
      // this.foodBookingItem = {};
      // this.travelBookingItem = {};
      // this.medicalBookingItem = {};
      // this.bookingIndex = this.data.indexOf(item);
      // this.bookingItem = Object.assign({}, item);

      this.hospitalDataDialog = true;
      this.loadHospitalData();
    },

    editedHospitalData(item) {
      //this.editedIndex = item.sno
      console.log("sswwww", item);
      this.editHospitalMasterData.near_hospital_id = item.near_hospital_id;
      this.editHospitalMasterData.near_hospital_name = item.near_hospital_name;
      this.editHospitalMasterData.locality = item.locality;
      this.editHospitalMasterData.hospital_nick_name = item.hospital_nick_name;
      this.editHospitalMasterData.type = item.type;
      this.editHospitalMasterData.city_seo_name = "";
      this.editHospitalMasterData.hospital_seo_name = "";
      this.editHospitalMasterData.address = item.address;
      this.editHospitalMasterData.latitude = item.latitude;
      this.editHospitalMasterData.longitude = item.longitude;
      this.editHospitalMasterData.state = item.state;
      this.editHospitalMasterData.city = item.city;
      this.editHospitalMasterData.pin_code = item.pin_code;
      this.editHospitalMasterData.specialty = item.specialty;
      this.editHospitalMasterData.no_of_bed = item.no_of_bed;
      this.editHospitalMasterData.ratings = item.ratings;

      this.hospitalEditDataDialog = true;
    },
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  .AccomBkgDetails {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  }
  .CancelDetails {
    display: block !important;
  }
  .PartnerAgent {
    display: block !important;
  }
  .AccomBkgTbl {
    width: 91vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;

  }
  .CancelDetails {
    display: block !important;
  }
  .PartnerAgent {
    display: block !important;
    justify-content: center;
  }
  .AccomBkgTbl {
    width: 91vw !important;
  }
  .AgentDetails {
    justify-content: center !important;
  }
  .PartnerAgentContent {
    justify-content: center !important;
  }
}
</style>
