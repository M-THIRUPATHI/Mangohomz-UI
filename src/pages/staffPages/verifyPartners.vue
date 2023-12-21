<template>
  <q-page-container>
  <q-page style="padding-top: 30px" class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm">
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <subHeaderForAdmin />

        <q-card>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div
              class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
              style="
                font-size: 20px;
                margin-top: 15px;
                border-bottom: 2px solid lightgrey;
              "
            >
            Verify Partners
            </div>

            <div class="col-12 row" style="display: flex;justify-content: center;">
              <div class="col-6" style="width: 500px;">
                <q-card style="padding: 10px; margin: 5px"  class="cursor-pointer"  @click="navigateTopartnerRegApproval()">
                  <a
                    class="text-bold text-primary"

                    >1.  MH Booking Agent Partner (MHBAP) </a>
                    <p style="font-size: 12px;"> MH Booking Agent Partner Process Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="navigateToagentRegApproval()">
                  <a
                    class="text-bold text-primary "

                    >2.  MH Accommodation Partner  (MHAP)</a
                  ><p style="font-size: 12px;"> MH Accommodation Partner Process Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="navigateTostaffManagerApproval()">
                  <a
                    class="text-bold text-primary"

                    >3.  MH Food Partner (MHFP)</a
                  ><p style="font-size: 12px;"> MH Food Partner Process Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateTocityManagerApproval()">
                  <a class="text-bold text-primary "
                    >4.  MH Travel Partner (MHTP)</a
                  ><p style="font-size: 12px;"> MH Travel Partner Process Data.</p>
                </q-card>
              </div>
              <div class="col-6" style="width: 500px;">
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="navigateTopropertyPartnerRegApproval()">
                  <a
                    class="text-bold text-primary"

                    >5.  MH Medical Equipment Partner (MHMEP)</a
                  ><p style="font-size: 12px;"> MH Medical Equipment Partner Process Data.</p>
                </q-card>

              </div>
            </div>
          </div>
        </q-card>
      </q-card>
    </div>
    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_food'"
    ></div>

    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_vehicle'"
    ></div>

    <div
      class="row q-col-gutter-sm q-py-sm"
      v-if="userDetails.sub_role == 'partner_medical'"
    ></div>
  </q-page>
  </q-page-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";
import { date } from "quasar";
import { scroll } from "quasar";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      AccImgpath: filepaths.mhapFilePath,
      Acctravel: filepaths.mhtpFilePath,
      Accfood: filepaths.mhfpFilePath,
      Accmedical: filepaths.mhepFilePath,
      editedIndex: -1,
      url: "",
      filter: "",
      selected: [],
      pagination: {
        rowsPerPage: 500,
      },
      headerValue: "Property Master Details",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),

      dialogTitle: "",
      mode: "list",

      ...validations,

      dates: {
        date_from: "",
        date_to: "",
      },
      moment: moment,
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
      a: [
        "",
        "One ",
        "Two ",
        "Three ",
        "Four ",
        "Five ",
        "Six ",
        "Seven ",
        "Eight ",
        "Nine ",
        "Ten ",
        "Eleven ",
        "Twelve ",
        "Thirteen ",
        "Fourteen ",
        "Fifteen ",
        "Sixteen ",
        "Seventeen ",
        "Eighteen ",
        "Nineteen ",
      ],
      b: [
        "",
        "",
        "Twenty",
        "Thirty",
        "Fourty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
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
      // properties_reports_columns: (state) =>
      //   state.centeraccounts.properties_reports_columns,
    }),
    // ...mapGetters("partners", ["hotelData_rows"]),
  },
  created() {},
  mounted() {
    // this.$store.dispatch("centeraccounts/adminreportsdetails");
  },
  methods: {
    // ...mapActions("booking", ["getBookingDetails"]),

    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    inWords(num) {
      if ((num = num.toString()).length > 9) return "overflow";
      let n = ("000000000" + num)
        .substr(-9)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return;
      var str = "";
      str +=
        n[1] != 0
          ? (this.a[Number(n[1])] || this.b[n[1][0]] + " " + this.a[n[1][1]]) +
            "Crore "
          : "";
      str +=
        n[2] != 0
          ? (this.a[Number(n[2])] || this.b[n[2][0]] + " " + this.a[n[2][1]]) +
            "Lakh "
          : "";
      str +=
        n[3] != 0
          ? (this.a[Number(n[3])] || this.b[n[3][0]] + " " + this.a[n[3][1]]) +
            "Thousand "
          : "";
      str +=
        n[4] != 0
          ? (this.a[Number(n[4])] || this.b[n[4][0]] + " " + this.a[n[4][1]]) +
            "Hundred "
          : "";
      str +=
        n[5] != 0
          ? (str != "" ? "and " : "") +
            (this.a[Number(n[5])] || this.b[n[5][0]] + " " + this.a[n[5][1]]) +
            "Only "
          : "";
      return str;
    },

    navigateTopartnerRegApproval() {
      this.$router.push("/agentRegistration");
    },

    navigateToagentRegApproval() {
      this.$router.push("/propertyPartnerRegistration");
    },
    navigateTocityManagerApproval() {
      this.$router.push("/transportPartnerReg");
    },
    navigateTostaffManagerApproval() {
      this.$router.push("/foodPartnerReg");
    },

    navigateTopropertyPartnerRegApproval() {
      this.$router.push("/equipmentPartnerReg");
    },
    navigateTotransportPartnerRegApproval() {
      this.$router.push("/transportPartnerRegApproval");
    },

  },
};
</script>
