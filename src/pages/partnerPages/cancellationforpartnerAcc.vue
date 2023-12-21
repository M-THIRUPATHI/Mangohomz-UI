<template>
  <div>
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
        <q-table
          :data="partnerAcc_Cancellation_rows"
          :columns="partnerAcc_Cancellation_columns"
          :pagination.sync="pagination"
          style="font-family: verdana"
          separator="cell"
          wrap-cells
          :title="title"
          dense
          row-key="sno"
          :grid="mode === 'grid'"
          color="green"
          :hide-header="mode === 'grid'"
        >
          <!-- <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn
                color="primary"
                @click="viewDataItem(props.row)"
                icon="las la-eye"
                size="sm"
                ><q-tooltip :disable="$q.platform.is.mobile"
                  >View</q-tooltip
                ></q-btn
              >
            </q-td>
          </template> -->
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
              <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
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
          </template>
        </q-table>
      </div>
    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          Accommodation Cancellations
        </q-toolbar-title>
        <b> User Name: {{ userDetails.user_name }}</b>
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      moment: moment,
      url: "",
      visible: false,
      showPanDoc: false,
      small: false,
      columns: "",
      data: [],
      title: "Accommodation Cancellation Details of Customer",
      mode: "list",
      filter: "",
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      }
    };
  },

  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      partnerAcc_Cancellation_columns: state =>
        state.cancelled.partnerAcc_Cancellation_columns
    }),
    ...mapGetters("cancelled", ["partnerAcc_Cancellation_rows"])
  },
  mounted() {
    this.$store.dispatch("cancelled/getPartnerAccCancellation");
  },
  meta() {
    return {
      title: this.title
    };
  },
  methods: {
    ...mapActions("cancelled", ["getPartnerAccCancellation"])
  }
};
</script>
