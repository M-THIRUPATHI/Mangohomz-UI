<template>
  <q-page-container>
  <q-page style="padding-top: 30px" class="q-pa-sm">
    <subHeaderForAdmin />
    <div class="row q-col-gutter-sm q-py-sm">
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">


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
           Masters
            </div>

            <div class="col-12 row" style="display: flex;justify-content: center;">
              <div class="col-6" style="width: 500px;">
                <!-- <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"   @click="navigateTohospitalmasterget()">
                  <a
                    class="text-bold text-primary "

                    >1.  Hospital Master</a
                  ><p style="font-size: 12px;"> Hospital Master Data.</p>
                </q-card> -->
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="navigateTopropertymasterget()">
                  <a
                    class="text-bold text-primary"

                    >1.  Property Master</a
                  ><p style="font-size: 12px;"> Property Master Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px"  class="cursor-pointer"  @click="navigateTofacilityTypeMaster()">
                  <a
                    class="text-bold text-primary"

                    >2.  Facility Master</a
                  ><p style="font-size: 12px;"> Facility Master Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px"  class="cursor-pointer" @click="navigateTopropertyTypeMaster()">
                  <a class="text-bold text-primary"
                    >3.  Property Type Master</a
                  ><p style="font-size: 12px;">Property Type Master Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateToTravelLocationMaster()">
                  <a
                    class="text-bold text-primary"

                    >4. Travel Location Master</a
                  ><p style="font-size: 12px;">Travel Location Master Data.</p>
                </q-card>

                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateToHospitalMaster()">
                  <a
                    class="text-bold text-primary"
                    >5. Hospital Master</a
                  ><p style="font-size: 12px;">Hospital Master Details.</p>
                </q-card>

                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateToWhatsappSender()">
                  <a
                    class="text-bold text-primary"
                    >6. Whatsapp Sender</a
                  ><p style="font-size: 12px;">Whatsapp Sender Details.</p>
                </q-card>


              </div>
              <div class="col-6" style="width: 500px;">
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="navigateToroomsTypeMaster()">
                  <a
                    class="text-bold text-primary "

                    >7.  Rooms Type Master</a
                  ><p style="font-size: 12px;">Rooms Type Master Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"  @click="navigateToroomsManagement()">
                  <a
                    class="text-bold text-primary"

                    >8.  Room Management</a
                  ><p style="font-size: 12px;">Room Management Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer"   @click="navigateTomhOffers()">
                  <a
                    class="text-bold text-primary "

                    >9.  MH Offers</a
                  ><p style="font-size: 12px;">Add MH Offers Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateTopropertyofferprice()">
                  <a
                    class="text-bold text-primary"

                    >10. Room Price Update</a
                  ><p style="font-size: 12px;">Update Room Price Data.</p>
                </q-card>
                <q-card style="padding: 10px; margin: 5px" class="cursor-pointer" @click="navigateToCallBackMessages()">
                  <a
                    class="text-bold text-primary"
                    >11. Call Back Messages</a
                  ><p style="font-size: 12px;">Call Back Messages.</p>
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

    navigateTohospitalmasterget() {
      this.$router.push("/hospitalmasterget");
    },

    navigateTopropertymasterget() {
      this.$router.push("/propertymasterget");
    },
    navigateTopropertyTypeMaster() {
      this.$router.push("/propertyTypeMaster");
    },
    navigateTofacilityTypeMaster() {
      this.$router.push("/facilityTypeMaster");
    },

    navigateToroomsTypeMaster() {
      this.$router.push("/roomsTypeMaster");
    },
    navigateToTravelLocationMaster() {
      this.$router.push("/travelpointscitywisemaster");
    },




    navigateToroomsManagement() {
      this.$router.push("/roomsManagement");
    },


    navigateTomhOffers() {
      this.$router.push("/mhOffers");
    },

    navigateTopropertyofferprice() {
      this.$router.push("/propertyofferprice");
    },
    navigateToCallBackMessages() {
      this.$router.push("/CallbackmsgMaster");
    },

    navigateToHospitalMaster() {
      this.$router.push("/addhospitalmaster");
    },
    navigateToWhatsappSender(){
      this.$router.push("/adminwhatsappsender");
    }
  },
};
</script>
