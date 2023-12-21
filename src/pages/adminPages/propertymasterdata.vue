<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs" style="padding-top: 80px">
      <div class="col-12">
        <subHeaderForAdmin />
        <q-card flat bordered class="bg-white">
          <q-table
            style="font-family: verdana"
            :title="title"
            :data="property_data_rows"
            :columns="property_data_columns"
            :filter="filter"
            :selected.sync="selected"
            separator="cell"
            :wrap-cells="true"
            :pagination.sync="pagination"
            :hide-header="mode === 'grid'"
            :grid="mode === 'grid'"
          >
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
                v-if="property_data_rows.length != 0"
                :data="property_data_rows"
                :fields="json_fields"
                :header="headerValue"
                worksheet="Property list"
                :name="`${excel_date}_Property list.xls`"
              >
                <q-icon color="primary" name="mdi-file-excel" size="22px" />
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                  >Download Excel
                </q-tooltip>
              </download-excel>
            </template>
          </q-table>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import moment from "moment";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      title: "Property Details",
      filter: "",
      selected: [],
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      headerValue: "Property list",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        Sno: "index",
        "Property Name": "sub_property_name",
        City: "city_name",
        Address: "address",
        Number: "property_phone",
        "Email Id": "property_email",
        "Contact Person Name": "Name_Of_Contact_Person",
        "Property GSTIN": "property_gstin",
        "Pin Code": "pin_code",
        "MH Share": "mh_service_fee",
        "Agent Share": "agent_fee_on_property",
      },

      mode: "list",
    };
  },
  mounted() {
    this.$store.dispatch("adminDashboard/getpropertymasterDetails");
  },
  computed: {
    ...mapState({
      ...mapGetters("adminDashboard", ["property_data_rows"]),
      property_data_columns: (state) =>
        state.adminDashboard.property_data_columns,
      property_data_rows: (state) => state.adminDashboard.property_data_rows,
    }),
  },
  methods: {
    ...mapActions("adminDashboard", ["getpropertymasterDetails"]),
    async reloadPage() {
      this.$router.go(0);
      // window.location.reload();
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
