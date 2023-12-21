<template>
   <q-page-container style="padding-top: 0px">
  <q-page style="padding-top: 100px" class="q-pa-sm">
    <subHeaderForAdmin/>
    <q-card flat bordered class="bg-white">
      <q-table
        title="Medical Loan List"
        :data="medical_loanlist_rows"
        :columns="medical_loanlist_columns"
        :pagination.sync="pagination"
        style="font-family: verdana"
        separator="cell"
        wrap-cells
      >
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
            :data="medical_loanlist_rows"
            :fields="json_fields"
            :header="headerValue"
            worksheet="Medical Loan Details"
            :name="`${excel_date}_MedicalLoanListDetails.xls`"
          >
            <q-icon color="primary" name="mdi-file-excel" size="22px" />
            <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
              >Download Excel
            </q-tooltip>
          </download-excel>
        </template>
      </q-table>
    </q-card>
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
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      filter: "",
      selected: [],
      mode: "list",
      //   SELECT sno, patient_name, hospital_name, email_id, country_code, mobile_number, patient_location, salarized, medical_loanfor, message,date_format(created_datetime,'%d-%m-%Y' ' ' '%H:%i:%s') as created_datetime  FROM mh_medical_loan_details WHERE 1
      json_fields: {
        Sno: "sno",
        "Patient Name": "patient_name",
        "Hospital Name": "hospital_name",
        "Email ID": "email_id",
        "Country Code": "country_code",
        "Mobile Number": "mobile_number",
        "Patient Location": "patient_location",
        Salaried: "salarized",
        "Medical Loan For": "medical_loanfor",
        Message: "message",
        "Date and Time": "created_datetime",
      },
      headerValue: "Medical Loan Details",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
    };
  },
  computed: {
    ...mapState({
      medical_loanlist_columns: (state) =>
        state.adminDashboard.medical_loanlist_columns,
    }),
    ...mapGetters("adminDashboard", ["medical_loanlist_rows"]),
  },
  mounted() {
    this.$store.dispatch("adminDashboard/getMedicalLoanListDetails");
  },
  methods: {},
};
</script>
