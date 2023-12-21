<template>
  <q-page style="padding-top: 0px" class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 0px">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="row text-black text-bold q-ma-xs q-pa-md text-body1">
          <div class="col-4 text-left text-black">Assistant Name</div>
          <div class="col-8 text-left text-grey">: {{ userDetails.name }}</div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="row text-black text-bold q-ma-xs q-pa-md text-body1">
          <div class="col-4 text-left text-black">Assistant Id</div>
          <div class="col-8 text-left text-grey">
            : {{ userDetails.account_id }}
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="row text-black text-bold q-ma-xs q-pa-md text-body1">
          <div class="col-4 text-left text-black">Assistant City</div>
          <div
            class="col-8 text-left text-grey"
            v-if="userDetails.sub_role == 'partner_acc'"
          >
            : {{ userDetails.zone }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'staff'"
    >
      <q-toolbar
        class="rounded-borders text-center"
        style="background:linear-gradient(to bottom right, green 40%, #CCE9D8);"
      >
        <q-toolbar-title
          class="text-white"
          style="font-family: verdana; font-size: 15px;"
          >Accommodation Partner Dashboard of Room Inventory, Rate &
          Amenities</q-toolbar-title
        >
      </q-toolbar>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card bordered class="q-ma-xs bg-white">
          <div class="row q-ma-md">
            <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              :options="partnersArr"
              option-value="partner_id"
              option-label="agent_name"
              v-model="partnerDashboardData.partner_name"
              label="Select Partner"
              label-color="black"
              class="col-3 q-mr-sm"
              @input="loadSubPartners(partnerDashboardData.partner_name)"
              ><template v-slot:prepend>
                <q-icon name="mdi-account" color="secondary" /> </template
            ></q-select>
            <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              option-value="partner_sub_id"
              option-label="agent_sub_name"
              :options="subPartnersArr"
              v-model="partnerDashboardData.partner_sub_name"
              label="Select Sub Partner"
              label-color="black"
              class="col-3 q-mr-sm"
              @input="loadProperties(partnerDashboardData)"
              ><template v-slot:prepend>
                <q-icon
                  name="mdi-account-multiple"
                  color="secondary"
                /> </template
            ></q-select>
            <q-select
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              :options="propertiesArr"
              option-value="txn_id"
              option-label="sub_property_name"
              v-model="partnerDashboardData.property_name"
              label="Select Property"
              label-color="black"
              class="col-3 q-mr-sm"
              @input="showRoomsData()"
              ><template v-slot:prepend>
                <q-icon
                  name="mdi-home-city-outline"
                  color="secondary"
                /> </template
            ></q-select>
          </div>
          <div
            class="row q-ma-md"
            v-show="this.partnerDashboardData.partner_name != ''"
          >
            <div
              class="col-3 text-bold"
              v-show="this.partnerDashboardData.partner_name != ''"
            >
              Partner ID :
              <span class="text-grey">{{
                this.partnerDashboardData.partner_name.partner_id
              }}</span>
            </div>
            <div
              class="col-3 text-bold"
              v-show="this.partnerDashboardData.partner_name != ''"
            >
              Partner Name :
              <span class="text-grey">{{
                this.partnerDashboardData.partner_name.agent_name
              }}</span>
            </div>
            <div
              class="col-3 text-bold"
              v-show="this.partnerDashboardData.partner_sub_name != ''"
            >
              Sub Partner ID :
              <span class="text-grey">{{
                this.partnerDashboardData.partner_sub_name.partner_sub_id
              }}</span>
            </div>
            <div
              class="col-3 text-bold"
              v-show="this.partnerDashboardData.partner_sub_name != ''"
            >
              Sub Partner Name :
              <span class="text-grey">{{
                this.partnerDashboardData.partner_sub_name.agent_sub_name
              }}</span>
            </div>
          </div>
          <div class="row q-ma-md">
            <div
              class="col-7 text-bold"
              v-show="this.partnerDashboardData.partner_sub_name != ''"
            >
              Partner Address :
              <span class="text-grey"
                >{{ this.partnerDashboardData.partner_sub_name.building_no }},
                {{ this.partnerDashboardData.partner_sub_name.street }},
                {{ this.partnerDashboardData.partner_sub_name.land_mark }},
                {{ this.partnerDashboardData.partner_sub_name.city }},
                {{ this.partnerDashboardData.partner_sub_name.state }},
                {{ this.partnerDashboardData.partner_sub_name.country }} -
                {{ this.partnerDashboardData.partner_sub_name.pin_code }}</span
              >
            </div>
            <div
              class="col-5 text-bold"
              v-show="this.partnerDashboardData.property_name != ''"
            >
              Property Name :
              <span class="text-grey">{{
                this.partnerDashboardData.property_name.sub_property_name
              }}</span>
            </div>
          </div>
          <q-card-section class="text-h6 text-white">
            <div class="row">
              <div class="col-9">
                <q-table
                  :data="hotelData_rows"
                  :columns="hotelData_columns"
                  :pagination.sync="pagination"
                  v-show="this.partnerDashboardData.property_name != ''"
                  dense
                  separator="cell"
                  :selected.sync="selected"
                  color="green"
                >
                  <template v-slot:body-cell-status="props">
                    <q-td :props="props">
                      <q-toggle
                        v-model="roomStatusToggle"
                        checked-icon="check"
                        color="green"
                        unchecked-icon="clear"
                        @input="changeRoomStatus(props.row)"
                      />
                    </q-td>
                  </template>
                  <template v-slot:body-cell-schedule="props">
                    <q-td :props="props">
                      <q-btn
                        no-caps
                        dense
                        class="text-bold text-body2"
                        color="secondary"
                        label="Schedule"
                        outline
                        @click="openRoomScheduleDialog(props.row)"
                      >
                      </q-btn>
                    </q-td>
                  </template>
                </q-table>
                <!-- <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th auto-width />
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="secondary"
                      round
                      dense
                      @click="props.expand = !props.expand"
                      :icon="props.expand ? 'remove' : 'add'"
                    />
                  </q-td>
                  <q-td
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.value }}
                  </q-td>
                </q-tr>
                <q-tr v-show="props.expand" :props="props">
                  <q-td colspan="100%">
                    <q-card-section class="q-pa-none">
                      <div class="row q-gutter-sm">
                        <div class="text-black text-left float-left">
                          This is expand slot for row above:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.room_type }}.
                        </div>
                      </div>
                      <div class="row q-gutter-sm">
                        <div class="text-black text-bold text-left">
                          Availability :-
                        </div>
                        <div class="text-black text-left">
                          From Data:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.date_from }};
                        </div>
                        <div class="text-black text-left">
                          To Date:
                        </div>
                        <div class="text-primary text-bold text-left">
                          {{ props.row.date_to }}
                        </div>
                        <div class="text-black text-left">
                          <q-icon
                            name="event"
                            class="cursor-pointer"
                            size="1.5em"
                            @click="getAttrs(item)"
                          >
                            <q-popup-proxy
                              ref="qDateProxy"
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                minimal
                                range
                                @input="closeDialog"
                                mask="DD/MM/YYYY"
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
                        </div>
                      </div>
                    </q-card-section>
                  </q-td>
                </q-tr>
              </template> -->
              </div>
              <q-card class="col-2 q-ml-sm" v-if="hotelData_rows.length > 0">
                <q-card-section
                  class="q-pa-none text-center"
                  v-show="this.partnerDashboardData.property_name != ''"
                >
                  <div
                    class="text-bold text-white bg-indigo-10 q-pa-xs"
                    style="font-size:13px"
                  >
                    Property Amenities
                  </div>
                  <q-list
                    v-for="item in hotelData_rows[0].property_amenity_name"
                    :key="item.name"
                  >
                    <q-item dense>
                      <q-item-section avatar class="text-right">
                        <q-icon color="secondary" :name="item.icon" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label
                          class="text-black text-left"
                          style="font-size: 12px"
                          >{{ item.name }}</q-item-label
                        >
                      </q-item-section>
                      <!-- <q-item-section avatar>
                        <q-icon
                          color="secondary"
                          :name="mdi - check - circle"
                        />
                      </q-item-section> -->
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <q-dialog
        v-model="roomScheduleDialog"
        :maximized="maximizedToggle"
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card>
          <q-toolbar class="bg-secondary">
            <q-toolbar-title class="text-h6 text-bold text-white"
              >Schedule Your Room Availability</q-toolbar-title
            >
            <q-btn
              icon="mdi-close"
              dense
              flat
              color="white"
              @click="showDialogPopup"
            />
          </q-toolbar>
          <q-card-section class="row">
            <div class="col-6">
              <div class="row">
                <q-form class="q-gutter-md row">
                  <q-date
                    v-model="schedule_date"
                    @input="addScheduledDates(schedule_date)"
                    :options="optionsFn"
                    class="col-7 q-mx-auto q-mt-xl"
                  />
                </q-form>
              </div>
            </div>
            <q-card
              v-if="room_availability.selected_date != ''"
              class="col-5 q-mt-lg"
            >
              <div class="row q-ma-sm">
                <q-input
                  class="col-4 q-mr-sm"
                  dense
                  outlined
                  v-model="room_availability.selected_date"
                  label="Selected Date"
                  hide-bottom-space
                  label-color="black"
                  readonly
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-calendar" color="secondary" /> </template
                ></q-input>
                <q-select
                  class="col-5 q-mr-sm"
                  v-model="room_availability.availability_count"
                  :options="room_availability_arr"
                  dense
                  outlined
                  label="Select Availability Count"
                >
                </q-select>
                <q-btn
                class="col-2 text-bold"
                color="secondary"
                label="Submit"
                @click="submitRoomAvailabilityData"
                >
                </q-btn>
              </div>
            </q-card>
          </q-card-section>
          <div class="row justify-center">
            <q-btn
              label="Preview"
              outline
              class="text-bold text-secondary"
              @click="previewSelectedDates()"
            />
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="q-mx-lg">
            <div class="text-h6 q-ml-sm">
              Your Selected dates will be deleted
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Ok" color="primary" @click="backToDashboard()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
// import { ref } from "vuex";
// import { qDateProxy } from "vuex";
import { date } from "quasar";
import validations from "../../helpers/validations";

export default {
  data() {
    return {
      ...validations,
      pagination: {
        rowsPerPage: 5,
      },
      dates: {
        date_from: "",
        date_to: "",
      },
      dashboardTable: false,
      selected: [],
      clicked_chip: "",
      mode: "list",
      filter: "",
      addDataDialog: false,
      data: [],
      step: 1,
      details: false,
      visible: false,
      showPanDoc: false,
      maximizedToggle: true,
      value: false,
      roomStatusToggle: true,
      small: false,
      roomScheduleDialog: false,
      schedule_date: "",
      schedule_dates_arr: [],
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
      confirm: false,
      hotelDateRows: {
        date_from: "",
        date_to: "",
      },
      roomStatusObj: {
        account_id: "",
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
        room_txn_id: "",
        room_status: "",
      },
      partnerDashboardData: {
        partner_name: "",
        partner_sub_name: "",
        property_name: "",
        partner_address: "",
      },
      room_availability: {
        selected_date: "",
        availability_count: 1,
        account_id: "",
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
        room_txn_id: "",
      },
      allSelectedDates: [],
      room_availability_arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      booking_rows: [],
      booking_columns: [
        {
          align: "center",
          label: "Sno",
          field: "sno",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Types Of Room",
          field: "types_of_room",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "From INR",
          field: "from_inr",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "To INR",
          field: "to_inr",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Date From",
          field: "date_from",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Date To",
          field: "date_to",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Amenities",
          field: "amenities",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "left",
          label: "Special Offer / Day",
          field: "special_offer",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      user: (state) => state.account.user,
      hotelData_columns: (state) => state.dashboard.hotelData_columns,
      partnersArr: (state) => state.dashboard.partners_arr,
      subPartnersArr: (state) => state.dashboard.sub_partners_arr,
      propertiesArr: (state) => state.dashboard.properties_arr,
    }),
    ...mapGetters("dashboard", ["hotelData_rows"]),
    ...mapGetters("dashboard", ["hotelNames_rows"]),

  },
  created() {
      this.$store.dispatch("dashboard/getPropertyRegistrationMaster");
      // this.$store.dispatch("dashboard/getHotelsData");
      this.$store.dispatch("dashboard/getHotelsNames");
  },
  mounted() {
    this.$store.dispatch("dashboard/loadPartners");
    this.$store.dispatch("dashboard/getPropertyRegistrationMaster");
    this.$store.dispatch("dashboard/getHotelsNames");
  },
  methods: {
    ...mapActions("dashboard", ["loadSubPartners"]),
    ...mapActions("dashboard", ["loadProperties"]),
    ...mapActions("dashboard", ["getHotelInfo"]),
    ...mapActions("dashboard", ["loadAvailabilityDates"]),
    ...mapActions("dashboard", ["updateRoomStatus"]),
    ...mapActions("dashboard", ["saveRoomStatusCount"]),
    ...mapActions("dashboard", ["saveRoomsAvailData"]),

    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    // loadHotelInfo(item) {
    //   this.hotelDateRows = Object.assign({}, item);
    //   this.hotelDateRows.date_from = item.date_from;
    //   this.hotelDateRows.date_to = item.date_to;
    //   this.getHotelInfo(item);
    // },
    showRoomsData() {
      this.getHotelInfo(this.partnerDashboardData);
    },
    changeRoomStatus(item) {
      this.roomStatusObj = Object.assign({}, item);
      this.roomStatusObj.room_status = this.roomStatusToggle;
      this.$q
        .dialog({
          title: "Are You Sure?",
          message: "Do you want to Change Room Status",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.updateRoomStatus(this.roomStatusObj);
          this.saveRoomStatusCount(this.roomStatusObj);
        });
    },

    getAttrs(item) {
      this.hotelDateRows = Object.assign({}, item);
      this.loadAvailabilityDates(item);
    },
    openRoomScheduleDialog(item) {
      this.roomScheduleData = Object.assign({}, item)
      this.roomScheduleDialog = true;
    },
    closeRoomScheduleDialog() {
      this.allSelectedDates = [];
      this.schedule_date = "";
    },
    addScheduledDates(item) {
      this.room_availability.selected_date = item;
      this.room_availability.account_id = this.roomScheduleData.account_id;
      this.room_availability.partner_id = this.roomScheduleData.partner_id;
      this.room_availability.partner_sub_id = this.roomScheduleData.partner_sub_id;
      this.room_availability.property_txn_id = this.roomScheduleData.property_txn_id;
      this.room_availability.room_txn_id = this.roomScheduleData.txn_id;
    },
    submitRoomAvailabilityData() {
      this.saveRoomsAvailData(this.room_availability)
    },

    changeAvailabilityCount(item) {
       this.sample1 = Object.assign({}, item);
    },
    showDialogPopup() {
      this.confirm = true;
    },
    backToDashboard() {
      this.confirm = false;
      this.closeRoomScheduleDialog();
      this.roomScheduleDialog = false;
    },
  },
};
</script>
