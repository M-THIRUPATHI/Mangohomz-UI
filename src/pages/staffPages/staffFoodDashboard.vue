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
          >Food Partner Dashboard of Food, Rate & Items in Different
          Thali</q-toolbar-title
        >
      </q-toolbar>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card bordered class="q-ma-xs">
          <div class="row q-ma-md">
            <div class="q-pa-md row q-gutter-md">
              <q-select
                class="col-3 q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                fill-input
                :options="foodPartnerArr"
                option-value="agent_id"
                option-label="agent_name"
                v-model="foodDashboard.partner_name"
                label="Select Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="
                  loadFoodSubPartnerNames(foodDashboard.partner_name);
                  emptyPartnerNames();
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
                :options="foodSubPartnerArr"
                option-value="agent_sub_id"
                option-label="foodPartner_sub_name"
                v-model="foodDashboard.partner_sub_name"
                label="Select Sub Partner *"
                label-color="black"
                style="width: 250px; padding-bottom: 5px"
                @input="loadFoodDetails(foodDashboard.partner_sub_name)"
                ><template v-slot:prepend>
                  <q-icon name="mdi-account" color="secondary" /> </template
              ></q-select>
            </div>
            <div
              class="text-h6 q-pa-none"
              style="height: 100px"
              v-show="this.foodDashboard.partner_sub_name != ''"
            >
              <div style="height: 15px">
                <div
                  class="
                  row 
                  text-black text-bold 
                  q-ma-xs q-pa-md 
                  text-body1
                  "
                >
                  <div class="col-2 text-black text-bold float-left text-left">
                    Name
                  </div>
                  <div class="col-4 text-grey text-bold float-left text-left">
                    : {{ foodRows.foodPartner_sub_name }}
                  </div>
                  <div class="col-2 text-black text-bold float-right text-left">
                    Date
                  </div>
                  <div class="col-4 text-grey text-bold float-right text-left">
                    : {{ foodRows.updated_datetime }}
                  </div>
                  <br />
                  <div class="col-2 text-black text-bold float-left text-left">
                    MH Code
                  </div>
                  <div class="col-4 text-grey text-bold float-left text-left">
                    : {{ foodRows.agent_sub_id }}
                  </div>
                  <div class="col-2 text-black text-bold float-right text-left">
                    GSTIN
                  </div>
                  <div class="col-4 text-grey text-bold float-right text-left">
                    : {{ foodRows.gstin }}
                  </div>
                  <br />
                  <div class="col-2 text-black text-bold float-left text-left">
                    Location
                  </div>
                  <div class="col-4 text-grey text-bold float-left text-left">
                    : {{ foodRows.address }}
                  </div>
                  <div class="col-2 text-black text-bold float-right text-left">
                    FSSAI No.
                  </div>
                  <div class="col-4 text-grey text-bold float-right text-left">
                    : {{ foodRows.fssai_no }}
                  </div>
                </div>
              </div>
            </div>
            <div class="q-pa-md text-h6 text-white" style="padding-top: 35px;width:100%;">
              <q-table
                :data="foodDetails_rows"
                :columns="food_columns"
                :pagination.sync="pagination"
                dense
                row-key="index"
                separator="cell"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
                v-show="this.foodDashboard.partner_sub_name != ''"
              >
                <template v-slot:body-cell-status="props">
                  <q-tr :props="props">
                    <q-chip
                      :color="
                        props.row.status == 'yes'
                          ? 'green'
                          : props.row.status == 'no'
                          ? 'orange'
                          : 'negative'
                      "
                      text-color="white"
                      dense
                      v-model="foodStatusToggle"
                      style="width:30px;"
                      clickable
                      @click="foodCount(props.row)"
                      >{{ props.row.status }}
                    </q-chip>
                  </q-tr>
                </template>                
              </q-table>
            </div>
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
      showPanDoc: false,
      maximizedToggle: true,
      value: false,     
      small: false,   
      foodStatusToggle: true,
      foodStatusCount: false,
      foodDashboard: {
        partner_name: "",
        partner_sub_name: "",
      },
      foodRows: {
        foodPartner_sub_name: "",
        agent_sub_name: "",
        agent_sub_id: "",
        address: "",
        location: "",
        gstin: "",
        fssai_no: "",
        updated_datetime: "",
        status: "",
        txn_id: "",
      },
      food_columns: [
        {
          name: "index",
          align: "center",
          label: "Sno",
          field: "index",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "item_name",
          align: "left",
          label: "Type of Food",
          field: "item_name",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "units",
          align: "left",
          label: "Quantity",
          field: "units",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "price",
          align: "left",
          label: "From INR",
          field: "price",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "status",
          align: "left",
          label: "Status",
          field: "status",
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
      user: state => state.account.user,
      foodDetails_rows: state => state.dashboard.foodDetails_rows,
      foodPartnerArr: state => state.dashboard.food_partner_arr,
      foodSubPartnerArr: state => state.dashboard.food_sub_partner_arr
    }),
    ...mapGetters("dashboard", ["foodDetails_rows"]),
  },
  created() {
    this.$store.dispatch("dashboard/loadFoodPartnerNames");
  },
  mounted() {
    this.$store.dispatch("dashboard/loadFoodPartnerNames");
  },
  methods: {
    ...mapActions("dashboard", ["getFoodData"]),
    ...mapActions("dashboard", ["loadFoodSubPartnerNames"]),
    ...mapActions("dashboard", ["loadFoodStatus"]),
    ...mapActions("dashboard", ["ledgerFoodDetails"]),

    loadFoodDetails(item) {
      const index = this.foodDetails_rows.indexOf(item);
      this.foodRows = Object.assign({}, item);
      this.getFoodData(item);
    },
    emptyPartnerNames() {
      this.foodDashboard.partner_sub_name = [];
    },

    foodCount(item) {
      this.foodStatusObj = Object.assign({}, item);
      this.foodStatusObj.status = item.status == "no" ? true : false;
          // console.log("this.foodStatusObj", this.foodStatusObj);
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Change the Status ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.loadFoodStatus(this.foodStatusObj);
          this.ledgerFoodDetails(this.foodStatusObj);
        })
        .onCancel(() => {});
    }
  }
};
</script>