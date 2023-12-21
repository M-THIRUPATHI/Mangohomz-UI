<template>
  <div>
    <q-page-container style="padding-top: 0px">
    <q-page style="padding-top: 100px" class="q-pa-md">
      <subHeaderForAdmin />
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-car" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>
        <q-btn
          dense
          style="margin-right: 10px"
          text-color="indigo-9"
          color="white"
          @click="addmoreloc"
          label="Add More Locations"
        />

      </q-toolbar>
      <div class="q-pa-md"></div>
      <q-table
        :data="travel_citywise_data_rows"
        :columns="travel_citywise_data_columns"
        :pagination.sync="pagination"
        dense
        separator="cell"
        :selected.sync="selected"
        color="green"
      >
        <!-- <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="sno" :props="props">
              {{ props.row.sno }}
            </q-td>
            <q-td key="city_name" :props="props">
              {{ props.row.city_name }}
              <q-popup-edit v-model="props.row.city_name" buttons >
                <q-input v-model="edittravellocationform.city_name" dense autofocus counter @click="onLocationupdate()" />
              </q-popup-edit>
            </q-td>
            <q-td key="point_type" :props="props">
              {{ props.row.point_type }}
              <q-popup-edit v-model="props.row.point_type" buttons >
                <q-input v-model="edittravellocationform.point_type" dense autofocus counter  @click="onLocationupdate()" />
              </q-popup-edit>
            </q-td>
            <q-td key="point_name" :props="props">
              {{ props.row.point_name }}
              <q-popup-edit v-model="props.row.point_name" buttons >
                <q-input v-model="edittravellocationform.point_name" dense autofocus counter  @click="onLocationupdate()" />
              </q-popup-edit>
            </q-td>
            <q-td key="latitude" :props="props">
              {{ props.row.latitude }}
              <q-popup-edit v-model.number="props.row.latitude" buttons >
                <q-input type="number" v-model.number="edittravellocationform.latitude" dense autofocus  @click="onLocationupdate()"></q-input>
              </q-popup-edit>
            </q-td>
            <q-td key="longitude" :props="props">
              {{ props.row.longitude }}
              <q-popup-edit v-model.number="props.row.longitude" buttons >
                <q-input type="number" v-model.number="edittravellocationform.longitude" dense autofocus  @click="onLocationupdate()"></q-input>
              </q-popup-edit>
            </q-td>
          </q-tr>
        </template> -->

        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <!-- <q-btn
              color="primary"
              @click="viewtravellocation(props.row)"
              label="View"
              size="sm"
              ><q-tooltip :disable="$q.platform.is.mobile"
                >View Details</q-tooltip
              ></q-btn
            > -->
            <q-btn
              color="green"
              @click="edittravellocation(props.row)"
              label="Edit"
              size="sm"
            >
              <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </q-page>
    </q-page-container>
    <!-- View Dialog -->
    <!-- <q-dialog
        v-model="viewDialogVisible"
        persistent
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div>
               View Travel Location
              </div>
              <q-space />
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div>
            <div>
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Basic Details
                </q-bar>
                <q-card-section class="q-pa-none">
                    <div
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
                      <div class="col-5 text-left text-black">sno</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.sno }}
                      </div>
                      <div class="col-5 text-left text-black">City Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.city_code }}
                      </div>
                      <div class="col-5 text-left text-black">City Name</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.city_name }}
                      </div>
                      <div class="col-5 text-left text-black">Point Type</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.point_type }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Point Name</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.point_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Latitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.latitude }}
                    </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Longitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.longitude }}
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <q-resize-observer />
          </div>
        </q-layout>
     </q-dialog> -->

    <!--edit Dialog-->
    <q-dialog
      v-model="editDialogVisible"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            <div>Edit Travel Location</div>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <div>
          <div>
            <q-card class="q-ma-xs text-black">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Basic Details
              </q-bar>
              <q-card-section class="q-pa-none">
                <q-form ref="editlocationform">
                  <div class="row q-ma-xs q-pa-md text-body1">
                    <div class="col-5 text-center">
                      <q-input
                        label="City Name"
                        v-model="edittravellocationform.city_name"
                        dense
                        outlined
                        class="text-center"
                        style="max-width: 300px"
                      />
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-input
                        label="Point Type"
                        v-model="edittravellocationform.point_type"
                        dense
                        outlined
                        class="text-center"
                        style="max-width: 300px"
                      />
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-input
                        label="Point Name"
                        v-model="edittravellocationform.point_name"
                        dense
                        outlined
                        class="text-center"
                        style="max-width: 300px; margin-top: 15px"
                      />
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-input
                        label="Latitude"
                        v-model="edittravellocationform.latitude"
                        dense
                        outlined
                        class="text-center"
                        style="max-width: 300px; margin-top: 15px"
                      />
                    </div>
                    <q-space />
                    <div class="col-6 text-center">
                      <q-input
                        label="Longitude"
                        v-model="edittravellocationform.longitude"
                        dense
                        outlined
                        class="text-center"
                        style="max-width: 213px; margin-top: 15px"
                      />
                    </div>
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
          <q-resize-observer />
          <div class="q-pa-md text-center">
            <q-btn color="primary" label="Update" @click="onLocationupdate" />
          </div>
        </div>
      </q-layout>
    </q-dialog>

    <!--Add More location Submit-->
    <q-dialog
      v-model="addlocationdialog"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            <div>ADD Travel Location</div>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <div>
          <div>
            <q-card class="q-ma-xs text-black">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Basic Details
              </q-bar>
              <q-card-section class="q-pa-none">
                <q-form ref="addlocationform">
                  <div class="row q-ma-xs q-pa-md text-body1">
                    <!-- <div class="col-5 text-center">
                      <q-input label="City ID" v-model="addlocationformdata.city_code" dense outlined
                        :rules="[required('City ID')]" class="text-center bold" style="max-width: 300px" type="number" />
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-input label="City Name" v-model="addlocationformdata.city_name" dense outlined
                        :rules="[required('City Name')]" class="text-center bold" style="max-width: 300px" />
                    </div> -->
                    <div class="col-5 text-center">
                      <q-select
                        dense
                        options-dense
                        outlined
                        use-input
                        hide-selected
                        fill-input
                        :options="stateOptions"
                        @filter="filterFnStates"
                        option-value="state_id"
                        option-label="state_name"
                        style="max-width: 300px"
                        v-model="addlocationformdata.state"
                        @input="
                          loadAllCities(addlocationformdata.state);
                          emptyCities();
                        "
                        label="State *"
                        hide-bottom-space
                        label-color="black"
                        :rules="[required('State')]"
                      >
                      </q-select>
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-select
                        dense
                        outlined
                        use-input
                        hide-selected
                        :options="cityOptions"
                        @filter="filterFnCities"
                        option-value="city_id"
                        option-label="city"
                        fill-input
                        options-dense
                        input-debounce="0"
                        style="max-width: 300px"
                        v-model="addlocationformdata.city_name"
                        label="City *"
                        label-color="black"
                        hide-bottom-space
                        :rules="[required('City')]"
                      >
                      </q-select>
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-input
                        dense
                        outlined
                        lazy-rules
                        mask="######"
                        v-model="addlocationformdata.pin_code"
                        label="Pincode *"
                        label-color="black"
                        hide-bottom-space
                        style="max-width: 300px; margin-top: 15px"
                        :rules="[required('Pincode'), pinNumber()]"
                      >
                      </q-input>
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-select
                        v-model="addlocationformdata.point_type"
                        label="Point Type"
                        dense
                        outlined
                        :rules="[required('Point Type')]"
                        :options="pointTypeOptions"
                        class="text-center bold"
                        style="max-width: 300px; margin-top: 15px"
                      />
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-input
                        label="Point Name"
                        v-model="addlocationformdata.point_name"
                        dense
                        outlined
                        :rules="[required('Point Name')]"
                        class="text-center bold"
                        style="max-width: 300px; margin-top: 15px"
                      />
                    </div>
                    <q-space />
                    <div class="col-5 text-center">
                      <q-input
                        label="Latitude"
                        v-model="addlocationformdata.latitude"
                        dense
                        outlined
                        :rules="[required('Latitude')]"
                        class="text-center bold"
                        style="max-width: 300px; margin-top: 15px"
                        type="number"
                      />
                    </div>
                    <q-space />
                    <div class="col-6 text-center">
                      <q-input
                        label="Longitude"
                        v-model="addlocationformdata.longitude"
                        dense
                        outlined
                        :rules="[required('Longitude')]"
                        class="text-center bold"
                        style="max-width: 213px; margin-top: 15px"
                        type="number"
                      />
                    </div>
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
          <q-resize-observer />
          <div class="q-pa-md text-center">
            <q-btn color="primary" label="Submit" @click="onLocationSubmit" />
          </div>
        </div>
      </q-layout>
    </q-dialog>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import { exportFile } from "quasar";
import { api } from "boot/axios";
import { date } from "quasar";

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      ...validations,
      dialogTitle: "",
      label2: "",
      filter: "",
      selected: [],
      url: "",
      editedIndex: -1,
      title: "Travel Location Master",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      viewDialogVisible: false,
      editDialogVisible: false,
      // maximizedToggle: true,
      addlocationdialog: false,
      editedItem: {
        sno: "",
        city_code: "",
        city_name: "",
        point_type: "",
        point_name: "",
        latitude: "",
        longitude: "",
      },
      edittravellocationform: {
        sno: "",
        city_code: "",
        city_name: "",
        point_type: "",
        point_name: "",
        latitude: "",
        longitude: "",
      },
      addlocationformdata: {
        city_code: "",
        city_name: "",
        state: "",
        pin_code: "",
        point_type: "",
        point_name: "",
        latitude: "",
        longitude: "",
      },
      pointTypeOptions: [
        "Airport",
        "Railway Station",
        "Bus Stand",
        "Metro Station",
        "Shopping Area",
        "Others",
      ],
      stateOptions: [],
      cityOptions: [],
    };
  },

  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      travel_citywise_data_columns: (state) =>
        state.adminDashboard.travel_citywise_data_columns,
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
    }),
    ...mapGetters("adminDashboard", ["travel_citywise_data_rows"]),
  },
  mounted() {
    this.$store.dispatch("master/loadAllStates");
  },
  created() {
    this.$store.dispatch("adminDashboard/getTravelCitywiselocationForAdmin");
  },
  meta() {
    return {
      title: this.title,
    };
  },
  methods: {
    ...mapActions("adminDashboard", ["getTravelCitywiselocationForAdmin"]),
    ...mapActions("adminDashboard", ["savetravellocationdetails"]),
    ...mapActions("adminDashboard", ["updatetravellocationdetails"]),
    ...mapActions("master", ["loadAllCities"]),

    viewtravellocation(item) {
      this.editedIndex = this.travel_citywise_data_rows.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.getTravelCitywiselocationForAdmin(this.editedItem);
      this.viewDialogVisible = true;
    },
    closeViewDialog() {
      this.viewDialogVisible = false;
    },
    edittravellocation(item) {
      this.editedIndex = this.travel_citywise_data_rows.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editDialogVisible = true;
      this.step = 1;
      this.edittravellocationform.city_code = item.city_code;
      this.edittravellocationform.city_name = item.city_name;
      this.edittravellocationform.point_type = item.point_type;
      this.edittravellocationform.point_name = item.point_name;
      this.edittravellocationform.latitude = item.latitude;
      this.edittravellocationform.longitude = item.longitude;
    },
    onLocationupdate() {
      this.$refs.editlocationform.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to update data?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.edittravellocationform.sno = this.editedItem.sno;
              this.updatetravellocationdetails(this.edittravellocationform);
              this.editDialogVisible = false;
            });
        }
      });
    },

    addmoreloc() {
      this.addlocationdialog = true;
    },
    resetform() {
      this.addlocationformdata.city_code = "";
      this.addlocationformdata.city_name = "";
      this.addlocationformdata.point_type = "";
      this.addlocationformdata.point_name = "";
      this.addlocationformdata.latitude = "";
      this.addlocationformdata.longitude = "";
    },
    onLocationSubmit() {
      this.$refs.addlocationform.validate().then((success) => {
        //  console.log("formdata", this.addlocationformdata);
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data?",
              cancel: true,
              persistent: true,
            })
            .onOk(async () => {
              const response = await this.savetravellocationdetails(
                this.addlocationformdata
              );
              this.addlocationdialog = false;
              this.resetform();
              this.$q.notify({
                message: "Successfully Location Added ",
                position: "top",
                type: "positive",
              });
              this.addlocationformdata.city_code = this.cityOptions.city_id;
              await this.getTravelCitywiselocationForAdmin();
            })
            .onCancel(() => {
              this.addlocationdialog = true;
            });
        } else {
          this.$q.notify({
            message: `Please Enter Form Properly`,
            position: "top",
            type: "negative",
          });
        }
      });
    },
    emptyCities() {
      this.addlocationformdata.city = "";
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
  },
};
</script>
