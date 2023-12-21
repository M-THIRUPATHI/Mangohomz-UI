<template>
  <q-page-container style="padding-top: 0px">
  <q-page style="padding-top: 100px" class="q-pa-sm">
    <subHeaderForAdmin />
    <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card flat bordered class="bg-white">
          <q-table
            title="Genie Patient Details"
            :data="mhgenie_patient_details_rows"
            :columns="mhgenie_patient_details_column"
            :pagination.sync="pagination"
            style="font-family: verdana"
            separator="cell"
            wrap-cells
          >
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="positive"
                  icon="las la-eye"
                  size="sm"
                  @click="viewItem(props.row)"
                >
                  <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                </q-btn>
              </q-td>
            </template>
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
                <q-tooltip :difiltersable="$q.platform.is.mobile" v-close-popup
                  >{{
                    props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
                  }}
                </q-tooltip>
              </q-btn>
              <download-excel
                :data="mhgenie_patient_details_rows"
                :fields="json_fields"
                :header="headerValue"
                worksheet="MhGenie Patient Details"
                :name="`${excel_date}_mhgeniepatientDetails.xls`"
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
    </q-card>
    <q-dialog
      v-model="details"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout class="bg-white">
        <q-bar class="bg-primary text-white">
          <q-icon name="feed" />
          <div class="text-h6">
            MhGenie Patient Details:{{ editedItem.patient_id }}
          </div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="q-pa-xs">
          <q-form>
            <div>
              <q-card class="bg-blue-grey-1 text-black" style="width: 100%">
                <q-card-section class="text-white">
                  <div class="row">
                    <div class="col-6 q-mt-lg">
                      <q-item>
                        <q-item-section class="text-primary text-h6" avatar>
                          Patient Name:
                        </q-item-section>
                        <q-item-section class="text-dark text-h6">{{
                          editedItem.patient_name
                        }}</q-item-section>
                      </q-item>
                    </div>
                    <div class="col-6 q-mt-lg">
                      <q-item>
                        <q-item-section class="text-primary text-h6" avatar>
                          Email ID:
                        </q-item-section>
                        <q-item-section class="text-dark text-h6">{{
                          editedItem.email_id
                        }}</q-item-section>
                      </q-item>
                    </div>
                    <div class="col-6 q-mt-lg">
                      <q-item>
                        <q-item-section class="text-primary text-h6" avatar>
                          Phone Number:
                        </q-item-section>
                        <q-item-section class="text-dark text-h6">{{
                          editedItem.phone_number
                        }}</q-item-section>
                      </q-item>
                    </div>
                    <div class="col-6 q-mt-lg">
                      <q-item>
                        <q-item-section class="text-primary text-h6" avatar>
                          Patient Location :
                        </q-item-section>
                        <q-item-section class="text-dark text-h6">{{
                          editedItem.patient_location
                        }}</q-item-section>
                      </q-item>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 q-mt-lg">
                      <q-item>
                        <q-item-section class="text-primary text-h6" avatar>
                          Problem Type:
                        </q-item-section>
                        <q-item-section class="text-dark text-h6">{{
                          editedItem.problem
                        }}</q-item-section>
                      </q-item>
                    </div>
                    <div class="col-6 q-mt-lg">
                      <q-item>
                        <q-item-section class="text-primary text-h6" avatar>
                          Problem Description:
                        </q-item-section>
                        <q-item-section class="text-dark text-h6">{{
                          editedItem.pr_description
                        }}</q-item-section>
                      </q-item>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-form>
        </q-card-section>
      </q-layout>
    </q-dialog>
  </q-page>
</q-page-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      details: false,
      maximizedToggle: true,
      editedItem: "",
      filter: "",
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      headerValue: "MH GENIE PATIENT DETAILS",
      mode: "list",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        SNo: "s_no",
        "User ID": "user_id",
        "Patient ID": "patient_id",
        "Patient Name": "patient_name",
        "Email ID": "email_id",
        "Phone Number": "phone_number",
        "Patient Location": "patient_location",
        "Problem Type": "problem",
        "Problem Description": "pr_description",
        "Date And Time": "created_datetime",
      },
    };
  },
  mounted() {
    this.$store.dispatch("adminDashboard/getmhgeniepatientDetailsforadmin");
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      ...mapGetters("adminDashboard", ["mhgenie_patient_details_rows"]),
      mhgenie_patient_details_column: (state) =>
        state.adminDashboard.mhgenie_patient_details_column,
    }),
  },
  methods: {
    ...mapActions("adminDashboard", ["getmhgeniepatientDetailsforadmin"]),

    viewItem(item) {
      this.editedItem = Object.assign({}, item);
      this.getmhgeniepatientDetailsforadmin(this.editedItem);
      this.details = true;
    },
  },
};
</script>

