<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs" style="padding-top:80px">
      <div class="col-12">
        <div class="q-pa-md">
        <q-chip square clickable @click="getClickableAllPArtner('ALL')">
          <q-avatar color="primary" text-color="white">{{
            this.partner_Approval_status_count.length == 0
              ? "0"
              : parseInt(
                  this.partner_Approval_status_count[0].pcount
                ) +
                parseInt(
                  this.partner_Approval_status_count[0].acount
                ) +
                parseInt(
                  this.partner_Approval_status_count[0].rcount
                )
          }}</q-avatar>
          All
        </q-chip>
        <q-chip
          square
          clickable
          @click="getpartnerRegistrationStatusCount('Approved');getClickableAllPArtner('Approved')"
        >
          <q-avatar color="secondary" text-color="white">{{
            this.partner_Approval_status_count.length == 0
              ? "0"
              : this.partner_Approval_status_count[0].acount
          }}</q-avatar>
          Approved
        </q-chip>

        <q-chip
          square
          clickable
          @click="getpartnerRegistrationStatusCount('Rejected');getClickableAllPArtner('Rejected')"
        >
          <q-avatar color="red" text-color="white">{{
            this.partner_Approval_status_count.length == 0
              ? "0"
              : this.partner_Approval_status_count[0].rcount
          }}</q-avatar>
          Rejected
        </q-chip>
        <q-chip
          square
          clickable
          @click="getpartnerRegistrationStatusCount('Pending');getClickableAllPArtner('Pending')"
        >
          <q-avatar color="orange" text-color="white">{{
            this.partner_Approval_status_count.length == 0
              ? "0"
              : this.partner_Approval_status_count[0].pcount
          }}</q-avatar>
          Pending
        </q-chip>
        <b style="float:right"> User Name: {{ userDetails.user_name }}</b>
      </div>

      </div>
    </div>
        <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-12">
        <q-card flat bordered class="bg-white">
          <q-table dense style="font-family: verdana" :title="title" :data="partner_approval_displayAll_rows" v-if="this.partner_count_status!= false"
            :columns="partner_reg_columns" row-key="partner_id" :filter="filter" :selected.sync="selected"
            separator="cell" :rows-per-page-options="[25,50,75,100,0]"
 :hide-header="mode === 'grid'" :grid="mode === 'grid'">
            <template v-slot:top-right="props" >
              <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: 10px;
                    "
                  >
              <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width:400px">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              </div>

              <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen" v-if="mode === 'list'">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{
                    props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
                }}
                </q-tooltip>
              </q-btn>

              <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="
                mode = mode === 'grid' ? 'list' : 'grid';
              separator = mode === 'grid' ? 'none' : 'horizontal';
              " v-if="!props.inFullscreen">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                </q-tooltip>
              </q-btn>

<!--
              <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->




            </template>

<template v-slot:body-cell-actions="props">
  <q-td :props="props">
    <q-btn color="positive" @click="editItem(props.row)" label="Take Action" class="text-bold" size="sm">
      <q-tooltip :disable="$q.platform.is.mobile">Take Action</q-tooltip>
    </q-btn>
  </q-td>
</template>
<template v-slot:body-cell-status="props">
  <q-td :props="props">
    <q-chip :color="
      props.row.status == 'Approved'
        ? 'green'
        : props.row.status == 'Pending'
          ? 'orange'
          : 'negative'
    " text-color="white" dense>{{ props.row.status }}
    </q-chip>
  </q-td>
</template>
</q-table>

<q-table dense style="font-family: verdana" :title="title" :data="partner_reg_rows" v-if="this.partner_count_status != true"
:columns="partner_reg_columns" row-key="partner_id" :filter="filter" :selected.sync="selected"
separator="cell" :rows-per-page-options="[25,50,75,100,0]"
:hide-header="mode === 'grid'" :grid="mode === 'grid'">
<template v-slot:top-right="props" style="margin-top: 10px;">

  <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: 10px;
                    "
                  >
  <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width:400px">
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
  </div>
  <q-btn dense flat icon="mdi-folder-refresh-outline" v-close-popup  @click="reloadPage">
                  <q-tooltip class="bg-white text-primary">Refresh</q-tooltip>
                </q-btn>

  <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
    @click="props.toggleFullscreen" v-if="mode === 'list'">
    <q-tooltip :difiltersable="$q.platform.is.mobile" v-close-popup>{{
        props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
    }}
    </q-tooltip>
  </q-btn>

  <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="
    mode = mode === 'grid' ? 'list' : 'grid';
  separator = mode === 'grid' ? 'none' : 'horizontal';
  " v-if="!props.inFullscreen">
    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
    </q-tooltip>
  </q-btn>
  <download-excel
        v-if="partner_reg_rows.length != 0"
        :data="partner_reg_rows"
     :fields="json_fields"
        :header="headerValue"
        worksheet="Partner Registration Approvals"
        :name="
          `${excel_date}_PartnerApprovals.xls`
        "
      >
        <q-icon color="primary" name="mdi-file-excel" size="22px" />
        <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
          >Download Excel
        </q-tooltip>
      </download-excel>
              <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn color="positive" @click="editItem(props.row)" label="Take Action" class="text-bold" size="sm">
                  <q-tooltip :disable="$q.platform.is.mobile">Take Action</q-tooltip>
                </q-btn>
              </q-td>
            </template>
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <q-chip :color="
                  props.row.status == 'Approved'
                    ? 'green'
                    : props.row.status == 'Pending'
                      ? 'orange'
                      : 'negative'
                " text-color="white" dense>{{ props.row.status }}
                </q-chip>
              </q-td>
            </template>
          </q-table>
        </q-card>

        <q-dialog v-model="details" persistent :maximized="maximizedToggle" transition-show="slide-up"
          transition-hide="slide-down">
          <q-layout view="Lhh lpR fff" container class="bg-white">
            <q-header class="bg-primary">
              <q-bar class="bg-primary text-white">
                <q-icon name="feed" />
                <div class="text-h6">
                  Partner Registration Details: {{ editedItem.first_name }}
                </div>
                <q-space />

                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>
            </q-header>
            <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px;padding-left: 400px;">

<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
  <q-card class="q-ma-xs " style="height: 450px;width:600px">
    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
      ><q-icon name="mdi-home-circle" color="black" size="1.5em" />
      Partner Details
    </q-bar>
    <q-card-section class=" q-pa-none" >
      <div >
        <div
          class="
            row
            text-black text-bold
            q-ma-xs q-pa-md
            text-body1
          "
        >
          <div class="col-5 text-left">Name</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.first_name }}
          </div>
          <q-separator />
          <div class="col-5 text-left">Mobile No</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.mobile_no}}
          </div>
          <q-separator />
          <div class="col-5 text-left">WhatsApp No</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.whatapp_number }}
          </div>
          <q-separator />
          <div class="col-5 text-left">Email ID </div>
          <div class="col-7 text-left text-grey">
            : {{editedItem.email_id}}
          </div>
          <q-separator />
          <div class="col-5 text-left">Address</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.address }}
          </div>
          <q-separator />
          <div class="col-5 text-left">City</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.city }}
          </div>
          <q-separator />
          <div class="col-5 text-left">Pincode</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.pin_code }}
          </div>
          <q-separator />
          <div class="col-5 text-left">Near Hospital</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.nearest_hospital}}
          </div>
          <q-separator />
          <div class="col-5 text-left">Partner Type</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.partner_type}}
          </div>
          <q-separator />
          <div class="col-5 text-left">Official Id Proof</div>
          <div class="col-7 text-left text-grey">
            : {{ editedItem.govtno}}
          </div>
          <q-separator />
        </div>
      </div>
    </q-card-section>
  </q-card>
</div>


<q-resize-observer />
</div>
            <q-footer class="bg-white">
              <!-- <q-bar>
                <q-space />
                <q-btn
                  label="Decline"
                  color="red"
                  @click="reject"
                />
                <q-btn
                  label="Accept"
                  color="green"
                  @click="confirm"
                  v-if="editedItem.status == 'Pending'"
                />
              </q-bar> -->
              <div class="row col-12">
                <q-bar v-if="(editedItem.partner_type=='Accommodation Partner') || (editedItem.accstatus == 'Approved')">
                  <div class="text-bold ">Accommodation: </div>
                  <q-space />
                  <q-btn label="Decline" color="red" @click="reject" v-if="(editedItem.accstatus == 'Pending') && (editedItem.partner_type=='Accommodation Partner')" />
                  <q-btn label="Accept" color="green" @click="confirm" v-if="(editedItem.accstatus == 'Pending') && (editedItem.partner_type=='Accommodation Partner')" />
                  <div class="text-bold text-secondary " v-if="editedItem.accstatus == 'Approved'">Approved</div>
                </q-bar>
                <q-space />
                <q-bar v-if="(editedItem.partner_type=='Food Partner') || (editedItem.foodstatus == 'Approved')">
                  <div class="text-bold ">Food: </div>
                  <q-space />
                  <q-btn label="Decline" color="red" @click="rejectfood" v-if="(editedItem.foodstatus == 'Pending') && (editedItem.partner_type=='Food Partner') " />
                  <q-btn label="Accept" color="green" @click="confirmfood" v-if="(editedItem.foodstatus == 'Pending') && (editedItem.partner_type=='Food Partner') " />
                  <div class="text-bold text-secondary " v-if="editedItem.foodstatus == 'Approved'">Approved</div>
                </q-bar>

                <q-space />
                <q-bar v-if="(editedItem.partner_type=='Travel Partner') || (editedItem.travelstatus == 'Approved')">
                  <div class="text-bold ">Travel: </div>
                  <q-space />
                  <q-btn label="Decline" color="red" @click="rejecttravel"
                    v-if="(editedItem.travelstatus == 'Pending') && (editedItem.partner_type=='Travel Partner')" />
                  <q-btn label="Accept" color="green" @click="confirmtravel"
                  v-if="(editedItem.travelstatus == 'Pending') && (editedItem.partner_type=='Travel Partner')" />
                  <div class="text-bold text-secondary " v-if="editedItem.travelstatus == 'Approved'">Approved</div>
                </q-bar>

                <q-space />
                <q-bar v-if="(editedItem.partner_type=='Medical Partner') || (editedItem.medicalstatus == 'Approved') ">
                  <div class="text-bold ">Medical: </div>
                  <q-space />
                  <q-btn label="Decline" color="red" @click="rejectmedical"
                    v-if="(editedItem.medicalstatus == 'Pending') && (editedItem.partner_type=='Medical Partner')" />
                  <q-btn label="Accept" color="green" @click="confirmmedical"
                  v-if="(editedItem.medicalstatus == 'Pending') && (editedItem.partner_type=='Medical Partner')" />
                  <div class="text-bold text-secondary " v-if="editedItem.medicalstatus == 'Approved'">Approved</div>
                </q-bar>
                <q-space />
              </div>
            </q-footer>
          </q-layout>
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>
<script>
import { exportFile } from "quasar";
import { mapState, mapActions, mapGetters } from "vuex";
import moment from "moment";
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}

export default {
  data() {
    return {
      title: "Partner Registration Approvals",
      selected: [],
      partner_count_status: false,
      data: [],
      editedIndex: -1,
      details: false,
      editedItem: {
        city: "",
      },
       maximizedToggle: true,
      filter: "",
      mode: "list",
      url: "",
      visible: false,
      small: false,
      pagination: {
        rowsPerPage: 25,

      },
      headerValue:"Partner Registration Approvals",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        "Sno": "index",
       "Status": "status",
        "City": "city",
        "Nearest Hospital": "nearest_hospital",
        "Partner Id": "partner_id",
        "Type Of Partner": "partner_type",
        "Partner Name": "first_name",
        "Mobile": "mobile_no",
        "Email ID": "email_id",
        "Application Date ": "created_datetime",
      },
    };
  },
  meta() {
    return {
      title: this.title
    };
  },
  mounted() {
this.$store.dispatch("account/getpartnerRegistrationStatusCount");
    this.$store.dispatch("account/getPartnerRegistrationData");
    this.$store.dispatch("account/getPartnerAllDisplayForAdmin");
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      ...mapGetters("account", ["partner_Approval_status_count"]),
      ...mapGetters("account", ["partner_approval_displayAll_rows"]),
      ...mapGetters("account", ["partner_reg_rows"]),
      partner_reg_columns: state => state.account.partner_reg_columns,
      partner_Approval_status_count: state => state.account.partner_Approval_status_count,
      partner_approval_displayAll_rows:state=>state.account.partner_approval_displayAll_rows,
    })
  },
  methods: {
    ...mapActions("account", ["getPartnerRegistrationData"]),
    ...mapActions("account", ["getPartnerAllDisplayForAdmin"]),

    ...mapActions("account", ["getpartnerRegistrationStatusCount"]),
    ...mapActions("account", ["approvePartner"]),
    ...mapActions("account", ["rejectPartner"]),
    ...mapActions("account", ["approvePartnerfood"]),
    ...mapActions("account", ["rejectPartnerfood"]),
    ...mapActions("account", ["approvePartnertravel"]),
    ...mapActions("account", ["rejectPartnertravel"]),
    ...mapActions("account", ["approvePartnermedical"]),
    ...mapActions("account", ["rejectPartnermedical"]),

    confirm() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Approve For Partner Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.approvePartner(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },
    reject() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Partner Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.rejectPartner(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },
    confirmfood() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Approve For Partner Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.approvePartnerfood(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },
    rejectfood() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Partner Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.rejectPartnerfood(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },
    confirmtravel() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Approve For Partner Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.approvePartnertravel(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },
    rejecttravel() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Partner Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.rejectPartnertravel(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },
    confirmmedical() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Approve For Partner Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.approvePartnermedical(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },
    rejectmedical() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Partner Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.rejectPartnermedical(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },
    editItem(item) {
    //  console.log(item)
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.details = true;
    },
    getClickableAllPArtner(item){
      this.getPartnerAllDisplayForAdmin(item);
      this.partner_count_status = true;
    },
    async reloadPage() {
      this.$router.go(0);
      // window.location.reload();
    },
    exportTable() {
      // naive encoding to csv format
      const content = [this.partner_reg_columns.map(col => wrapCsvValue(col.label))]
        .concat(
          data.map(row =>
            this.partner_reg_columns
              .map(col =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("users-export.csv", content, "text/csv");

      if (status !== true) {
        $q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
      }
    }
  }
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
    width: 91vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }


  .AccomBkgTbl {
    width: 91vw !important;
  }

}
</style>
