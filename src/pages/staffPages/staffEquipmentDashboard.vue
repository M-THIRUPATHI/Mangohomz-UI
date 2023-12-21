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
        style="background: linear-gradient(to bottom right, green 40%, #cce9d8)"
      >
        <q-toolbar-title
          class="text-white"
          style="font-family: verdana; font-size: 15px"
          >Medical List</q-toolbar-title
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
              :options="equipmentPartnerArr"
              option-value="equipment_id"
              option-label="agent_name"
              v-model="equipmentDetails.partner_name"
              label="Partner Name *"
              label-color="black"
              style="width: 250px; padding-bottom: 32px"
              @input="
              loadEquipmentSubpartnerNames(
                  equipmentDetails.partner_name
                );
                emptyequipmentsubPartnerNames();
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
              :options="equipmentsubPartnerArr"
              option-value="equipment_sub_id"
              option-label="equipment_sub_name"
              v-model="equipmentDetails.sub_partner_name"
              label="SubPartner Name *"
              label-color="black"
              style="width: 250px; padding-bottom: 32px"
              @input="loadEquipmentDetails(equipmentDetails.sub_partner_name)"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-account" color="secondary" />
              </template>
            </q-select>
          </div>
          <div class="q-pa-md text-h6 text-white" style="padding-top: 35px">
            <q-table
              :data="equipment_item_rows"
              v-show="this.equipmentDetails.sub_partner_name != ''"
              :columns="medical_columns"
              dense
              separator="cell"
              :pagination.sync="pagination"
              :grid="mode === 'grid'"
              :filter="filter"
              :selected.sync="selected"
              color="green"
              hide-bottom
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
                    v-model="EquipmentStatuschip"
                    @click="equipmentstatus(props.row)"
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
      confirm: false,

      equipmentDetails: {
        sub_partner_name: "",
        partner_name: "",
      },
      EquipmentStatuschip: true,
      medical_columns: [
        {
          name: "Sno",
          align: "center",
          label: "Sno",
          field: "index",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Item Name",
          align: "left",
          label: "Item Name",
          field: "item_name",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Price",
          align: "left",
          label: "Price",
          field: "price",
          headerClasses: "bg-indigo-10 text-white",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Units",
          align: "left",
          label: "Units",
          field: "units",
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
      user: (state) => state.account.user,
      equipmentPartnerArr: (state) =>
        state.dashboard.equipment_partner_names_arr,
      equipmentsubPartnerArr: (state) =>
        state.dashboard.sub_equipment_partner_names_arr,
      equipment_item_rows: (state) => state.partners.equipment_item_rows,
    }),
    ...mapGetters("dashboard", ["equipment_item_rows"]),
  },
  created() {
    this.$store.dispatch("dashboard/loadEquipmentpartnerNames");
  },
  mounted() {},
  methods: {
    ...mapActions("dashboard", ["loadEquipmentSubpartnerNames"]),
    ...mapActions("dashboard", ["getMedicalEqpdata"]),
    ...mapActions("dashboard", ["loadEquipmentStatus"]),
    ...mapActions("dashboard", ["ledgerEquipmentDetails"]),

    loadEquipmentDetails(item) {
      this.equipmentItemRows = Object.assign({}, item);

      this.getMedicalEqpdata(item);
    },
    emptyequipmentsubPartnerNames() {
      this.equipmentDetails.sub_partner_name = [];
    },
    equipmentstatus(item) {
      this.equipmentStatusObj = Object.assign({}, item);
      this.equipmentStatusObj.status = item.status == "no" ? true : false;
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Change the Status ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.loadEquipmentStatus(this.equipmentStatusObj);
          this.ledgerEquipmentDetails(this.equipmentStatusObj);
        })
        .onCancel(() => {});
    },
  },
};
</script>