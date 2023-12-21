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
          style="font-family: verdana; font-size: 20px;"
        >
          <q-icon name="mdi-taxi" size="2em" color="white" />Travel
          Details</q-toolbar-title
        >
      </q-toolbar>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card bordered class="q-ma-xs">
          <div class="q-pa-md row q-gutter-md" style="height: 100px">
            <q-select
              class="col-3 q-mr-sm"
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              :options="travelPartnerArr"
              option-value="agent_id"
              option-label="travel_name"
              v-model="travelDetails.partner_name"
              label="Partner Name *"
              label-color="black"
              style="width: 250px; padding-bottom: 32px"
              @input="
                loadTravelSubpartnerNames(travelDetails.partner_name);
                emptysubPartnerNames();
              "
              ><template v-slot:prepend>
                <q-icon name="mdi-account" color="secondary" /> </template
            ></q-select>
            <q-select
              class="col-3 q-mr-sm"
              dense
              options-dense
              outlined
              use-input
              hide-selected
              fill-input
              :options="travelsubPartnerArr"
              option-value="transport_sub_id"
              option-label="transport_sub_name"
              v-model="travelDetails.sub_partner_name"
              label="SubPartner Name *"
              label-color="black"
              style="width: 250px; padding-bottom: 5px"
              @input="loadTravelDetails(travelDetails.sub_partner_name)"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-account" color="secondary" />
              </template>
            </q-select>
          </div>
          <div class="q-pa-md text-h6 text-white" style="padding-top: 35px">
            <q-table
              :data="travel_item_rows"
              :columns="travel_columns"
              dense
              separator="cell"
              row-key="index"
              :pagination.sync="pagination"
              :grid="mode === 'grid'"
              :filter="filter"
              :selected.sync="selected"
              color="green"
              hide-bottom
              v-show="this.travelDetails.sub_partner_name != ''"
            >
              <template v-slot:body-cell-status="props">
                <q-tr :props="props">
                  <q-chip
                    dense
                    :color="
                      props.row.status == 'yes'
                        ? 'green'
                        : props.row.status == 'no'
                        ? 'orange'
                        : 'negative'
                    "
                    text-color="white"
                    v-model="TravelStatuschip"
                    @click="travelstatus(props.row)"
                    style="width: 30px"
                    clickable
                    >{{ props.row.status }}</q-chip
                  >
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-card>
      </div>
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
      selected: [],
      clicked_chip: "",
      mode: "list",
      filter: "",
      data: [],
      step: 1,
      details: false,
      visible: false,
      value: false,
      small: false,
      
      confirm: false,
      TravelStatuschip: true,
       travel_columns: [
        {
          name: "Sno",
          align: "center",
          label: "Sno",
          field: "index",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "vehicle_name",
          align: "left",
          label: "Vehicle Name",
          field: "vehicle_name",
          headerClasses: "bg-primary text-white"
        },
        {
          name: "Day Price",
          align: "left",
          label: "Day Price",
          field: "day_price",
          headerClasses: "bg-primary text-white"
        },
        {
          name: "Night Price",
          align: "left",
          label: "Night price",
          field: "night_price",
          headerClasses: "bg-primary text-white"
        },
        {
          name: "No of seats",
          align: "left",
          label: "No of seats",
          field: "no_of_seaters",
          headerClasses: "bg-primary text-white"
        },
    
        {
          name: "units",
          align: "left",
          label: "Units",
          field: "units",
          headerClasses: "bg-primary text-white"
        },
        {
          name: "status",
          align: "left",
          label: "Status",
          field: "status",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],
      travelDetails: {
        sub_partner_name: "",
        partner_name: "",
      },
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      user: (state) => state.account.user,
      
      travelPartnerArr: (state) => state.dashboard.travel_partner_names_arr,
      travelsubPartnerArr: (state) =>
        state.dashboard.sub_travel_partner_names_arr,
      travel_item_rows: (state) => state.dashboard.travel_item_rows,
    }),    
    ...mapGetters("dashboard", ["travel_item_rows"]),
  },
  created() {
    this.$store.dispatch("dashboard/loadTravelpartnerNames");    
  },
  mounted() {
  },
  methods: {
    ...mapActions("dashboard", ["loadTravelSubpartnerNames"]),
    ...mapActions("dashboard", ["getTravelDetails"]),
    ...mapActions("dashboard", ["ledgertravelDetails"]),
    ...mapActions("dashboard", ["loadTravelStatus"]),

    loadTravelDetails(item) {
      this.travelItemRows = Object.assign({}, item);
      this.getTravelDetails(item);
    },
    emptysubPartnerNames() {
      this.travelDetails.sub_partner_name = [];
    },
    travelstatus(item) {
      this.travelStatusObj = Object.assign({}, item);
      this.travelStatusObj.status = item.status == "no" ? true : false;
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Change the Status ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.loadTravelStatus(this.travelStatusObj);
          this.ledgertravelDetails(this.travelStatusObj);
        })
        .onCancel(() => {});
    },
  },
};
</script>