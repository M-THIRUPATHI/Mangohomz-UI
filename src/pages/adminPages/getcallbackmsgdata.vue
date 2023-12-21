<template>
  <q-page-container style="padding-top: 0px">
    <q-page>
      <div class="row q-col-gutter-sm q-ma-xs" style="padding-top: 100px">

        <div class="col-12" v-if="!isDateRangeActive">
          <subHeaderForAdmin />
          <q-card flat bordered class="bg-white">
            <q-table
              dense
              style="font-family: verdana"
              :title="title"
              :wrap-cells="true"
              :data="call_back_data_rows"
              :columns="call_back_data_column"
              :filter="filter"
              :selected.sync="selected"
              separator="cell"
              :pagination.sync="pagination"
              :hide-header="mode === 'grid'"
              :grid="mode === 'grid'"
            >
              <template v-slot:top-right="props">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    margin-right: 180px;
                    margin-top: 15px;
                    margin-left: 5px;
                  "
                  class="AccomBkgDetails"
                >
                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-right: -50px;
                      margin-top: -10px;
                    "
                  >
                    <q-input
                      dense
                      outlined
                      debounce="300"
                      label="From Date"
                      ref="checkFromDate"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxyFromDate.show()"
                      v-model="getCallBackDateSet.fromDate"
                      style="width: 70%; font-size: 12px; margin-top: 20px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxyFromDate"
                            minimal
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              @input="closeDialog()"
                              minimal
                              mask="YYYY/MM/DD"
                              v-model="getCallBackDateSet.fromDate"
                              :options="optionsFn"
                              @click="fromDateSelected"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  minimal
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: -10px;
                      margin-right: -50px;
                    "
                  >
                    <q-input
                      dense
                      outlined
                      debounce="300"
                      label="To Date"
                      ref="checkToDate"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxyToDate.show()"
                      v-model="getCallBackDateSet.toDate"
                      style="width: 70%; font-size: 12px; margin-top: 20px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxyToDate"
                            minimal
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              @input="closeDialog1()"
                              minimal
                              mask="YYYY/MM/DD"
                              v-model="getCallBackDateSet.toDate"
                              :options="optionsFn2"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  minimal
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                  <div
                    class="AccomBkgTbl"
                    style="display: flex; align-items: center; margin-top: 10px;"
                  >
                    <q-btn
                      @click="getCallBackMessagesData()"
                      style="margin-right: 10px"
                      color="primary"
                      label="Submit"
                      class="q-ml-md"
                      no-caps
                    />
                  </div>
                </div>

                <!-- <div
                class="AccomBkgTbl"
                style="display: flex; align-items: center; margin-top: 10px; margin-left:5px;"
              >
                <q-btn
                  no-caps
                  style="
                    position: absolute;
                    margin-left: -100px;
                    cursor: pointer;
                    background-color: #afb0b0;
                  "
                  @click="gotoPreviousPage"
                >
                  &laquo; Back
                </q-btn>
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
              </div> -->

                <div
                  class="AccomBkgTbl"
                  style="
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                    margin-left: 5px;
                  "
                >
                <q-btn
                  no-caps
                  style="
                    position: absolute;
                    margin-left: -100px;
                    cursor: pointer;
                    background-color: #afb0b0;
                  "
                  @click="gotoPreviousPage()"
                >
                  &laquo; Back
                </q-btn>
                  <q-input
                    outlined
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                    style="width: 275px"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>

                <div
                  class="AccomBkgTbl"
                  style="
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                    margin-left: 5px;
                  "
                >
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
                    :icon="
                      props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                    "
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
                    v-if="call_back_data_rows.length != 0"
                    :data="call_back_data_rows"
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
                </div>


                <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->
              </template>
            </q-table>
          </q-card>
        </div>
        <div class="col-12" v-else>
          <q-card flat bordered class="bg-white">
            <q-table
              dense
              style="font-family: verdana"
              :title="title"
              :wrap-cells="true"
              :data="call_back_datewise_data_rows"
              :columns="call_back_datewise_data_column"
              :filter="filter"
              :selected.sync="selected"
              separator="cell"
              :pagination.sync="pagination"
              :hide-header="mode === 'grid'"
              :grid="mode === 'grid'"
            >
              <template v-slot:top-right="props">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    margin-right: 180px;
                    margin-top: 15px;
                    margin-left: 5px;
                  "
                  class="AccomBkgDetails"
                >
                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-right: -50px;
                      margin-top: -10px;
                    "
                  >
                    <q-input
                      dense
                      outlined
                      debounce="300"
                      label="From Date"
                      ref="checkFromDate"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxyFromDate.show()"
                      v-model="getCallBackDateSet.fromDate"
                      style="width: 70%; font-size: 12px; margin-top: 20px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxyFromDate"
                            minimal
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              @input="closeDialog()"
                              minimal
                              mask="YYYY/MM/DD"
                              v-model="getCallBackDateSet.fromDate"
                              :options="optionsFn"
                              @click="fromDateSelected"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  minimal
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: -10px;
                      margin-right: -50px;
                    "
                  >
                    <q-input
                      dense
                      outlined
                      debounce="300"
                      label="To Date"
                      ref="checkToDate"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxyToDate.show()"
                      v-model="getCallBackDateSet.toDate"
                      style="width: 70%; font-size: 12px; margin-top: 20px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxyToDate"
                            minimal
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              @input="closeDialog1()"
                              minimal
                              mask="YYYY/MM/DD"
                              v-model="getCallBackDateSet.toDate"
                              :options="optionsFn2"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  minimal
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                  <div
                    class="AccomBkgTbl"
                    style="display: flex; align-items: center; margin-top: 10px"
                  >
                    <q-btn
                      @click="getCallBackMessagesData()"
                      style="margin-right: 10px"
                      color="primary"
                      label="Submit"
                      class="q-ml-md"
                      no-caps
                    />
                  </div>
                </div>

                <div
                  class="AccomBkgTbl"
                  style="
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                    margin-left: 5px;
                  "
                >
                <q-btn
                  no-caps
                  style="
                    position: absolute;
                    margin-left: -100px;
                    cursor: pointer;
                    background-color: #afb0b0;
                  "
                  @click="gotoPreviousPage()"
                >
                  &laquo; Back
                </q-btn>

                  <q-input
                    outlined
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                    style="width: 275px"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
                <div
                  class="AccomBkgTbl"
                  style="
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                    margin-left: 5px;
                  "
                >
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
                    :icon="
                      props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                    "
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

                    :data="call_back_datewise_data_rows"
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
                </div>

                <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->
              </template>
            </q-table>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import moment from "moment";
import { date } from "quasar";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      title: "Call Back Message Details",
      filter: "",
      selected: [],
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      isDateRangeActive: false,
      datewiseacctabledata: false,
      getCallBackDateSet: {
        fromDate: null,
        toDate: null,
      },
      optionsFn(d) {
        return d <= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
      closeDialog() {
        this.$refs.qDateProxyFromDate.hide();
      },
      closeDialog1() {
        this.$refs.qDateProxyToDate.hide();
      },
      toDateOptions() {
        to_date_option = new Date();
        //console.log(to_date_option)
        return to_date_option;
      },
      gotoPreviousPage(){
      this.$router.push('/CallbackmsgMaster');
    },
      headerValue: "Call Back Message list",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        Sno: "index",
        "Mobile Number": "mobile_number",
        "Call Date": "date_call",
        "Customer Name": "customer_name	",
        "Hospital Name": "hospital_name",
        "Hospital Location": "hospital_location",
        "Customer City": "customer_city	",
      },
      mode: "list",
    };
  },
  mounted() {
    this.$store.dispatch("adminDashboard/getAllCallBackmsgData");
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    // Format the default values as "yyyy-MM-dd" for date inputs
    this.getCallBackDateSet.fromDate = thirtyDaysAgo.toISOString().slice(0, 10);
    this.getCallBackDateSet.toDate = today.toISOString().slice(0, 10);
    //console.log(this.aarthiScanDateSet.fromDate,this.aarthiScanDateSet.toDate)




  },
  computed: {
    optionsFn2(d) {
      let fromDate = date.formatDate(
        this.getCallBackDateSet.fromDate,
        "YYYY/MM/DD"
      );
      let today = date.formatDate(new Date(), "YYYY/MM/DD");
      //console.log(fromDate);
      //console.log(d)
      return (d) => d >= fromDate && d <= today;
    },

    ...mapState({
      ...mapGetters("adminDashboard", ["call_back_data_rows"]),
      ...mapGetters("adminDashboard", ["call_back_datewise_data_rows"]),
      call_back_data_column: (state) =>
        state.adminDashboard.call_back_data_column,
      call_back_datewise_data_column: (state) =>
        state.adminDashboard.call_back_datewise_data_column,
      call_back_data_rows: (state) => state.adminDashboard.call_back_data_rows,
      call_back_datewise_data_rows: (state) =>
        state.adminDashboard.call_back_datewise_data_rows,
    }),
  },
  methods: {
    ...mapActions("adminDashboard", ["getAllCallBackmsgData"]),
    ...mapActions("adminDashboard", ["getDateWiseAllCallBackMsgData"]),
    async reloadPage() {
      this.$router.go(0);
      // window.location.reload();
    },
    async getCallBackMessagesData() {
      this.isDateRangeActive = true;
      this.datewiseacctabledata = true;
      const payload = {
        fromDate: this.getCallBackDateSet.fromDate,
        toDate: this.getCallBackDateSet.toDate,
      };
      this.$store.dispatch(
        "adminDashboard/getDateWiseAllCallBackMsgData",
        payload
      );
    },

    fromDateSelected() {
      // console.log("sasa",this.defaultItem.dateModel.from);
      this.getCallBackDateSet.toDate = this.getCallBackDateSet.fromDate;
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
    width: 80vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }

  .AccomBkgTbl {
    width: 80vw !important;
  }
}
</style>
