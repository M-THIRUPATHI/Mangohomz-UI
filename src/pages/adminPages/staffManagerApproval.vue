<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs" style="padding-top:80px">
      <div class="col-12">
        <q-card flat bordered class="bg-white">
          <q-table
            dense
            style="font-family: verdana"
            :title="title"
            :data="staff_reg_rows"
            :columns="partner_reg_columns"
            row-key="staff_id"
            :filter="filter"
            :selected.sync="selected"
            separator="cell"
            :pagination.sync="pagination"
            :hide-header="mode === 'grid'"
            :grid="mode === 'grid'"
          >
            <template v-slot:top-right="props">
              <b style="margin-right: 15px;"> User Name: {{ userDetails.user_name }}</b>
              <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: 10px;
                    "
                  >
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
                style="width:400px"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
</div>
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

              <q-btn
                flat
                round
                dense
                color="primary"
                icon="archive"
                @click="exportTable"
              >
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                  >CSV Export
                </q-tooltip>
              </q-btn>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="positive"
                  @click="editItem(props.row)"
                  label="Take Action"
                  class="text-bold"
                  size="sm"
                  ><q-tooltip :disable="$q.platform.is.mobile"
                    >Take Action</q-tooltip
                  ></q-btn
                >
              </q-td>
            </template>
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <q-chip
                  :color="
                    props.row.status == 'Approved'
                      ? 'green'
                      : props.row.status == 'Pending'
                      ? 'orange'
                      : 'negative'
                  "
                  text-color="white"
                  dense
                  >{{ props.row.status }}
                </q-chip>
              </q-td>
            </template>
          </q-table>
        </q-card>

        <q-dialog
          v-model="details"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-layout view="Lhh lpR fff" container class="bg-white">
            <q-header class="bg-primary">
              <q-bar class="bg-primary text-white">
                <q-icon name="feed" />
                <div class="text-h6">
                  Staff Registration Details: {{ editedItem.first_name }}
                </div>
                <q-space />

                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>
            </q-header>

            <div class="q-pt-xl row items-start q-gutter-md">
              <q-card class="bg-blue-grey-1 text-black" style="width:100%">
                <q-card-section class="text-white">
                  <div class="q-gutter-xs row">
                    <q-icon name="manage_accounts" color="primary" size="2em" />
                    <div class="text-h6 text-black text-italic">
                      Staff Manager Details
                    </div>
                  </div>

                  <div class="row ">
                    <div class="col-3">
                      <q-item>
                        <q-item-section class="text-primary" avatar>
                          Name :
                        </q-item-section>

                        <q-item-section class="text-dark">{{
                          editedItem.first_name
                        }}</q-item-section>
                      </q-item>
                    </div>
                    <div class="col-3">
                      <q-item>
                        <q-item-section class="text-primary" avatar>
                          Mobile No :
                        </q-item-section>

                        <q-item-section class="text-dark">{{
                          editedItem.mobile_no
                        }}</q-item-section>
                      </q-item>
                    </div>
                    <div class="col-3">
                      <q-item>
                        <q-item-section class="text-primary" avatar>
                          Email ID :
                        </q-item-section>

                        <q-item-section class="text-dark">{{
                          editedItem.email_id
                        }}</q-item-section>
                      </q-item>
                    </div>
                    <div class="col-3">
                      <q-item>
                        <q-item-section class="text-primary" avatar>
                          City :
                        </q-item-section>

                        <q-item-section class="text-dark">{{
                          editedItem.city
                        }}</q-item-section>
                      </q-item>
                    </div>
                  </div>

                  <div class="row ">

                    <div class="col-3">
                      <q-item>
                        <q-item-section class="text-primary" avatar>
                          Near Hospital :
                        </q-item-section>

                        <q-item-section class="text-dark">{{
                          editedItem.near_hospital
                        }}</q-item-section>
                      </q-item>
                    </div>
                    <div class="col-3">
                      <q-item>
                        <q-item-section class="text-primary" avatar>
                          Status :
                        </q-item-section>

                        <q-item-section class="text-dark">{{
                          editedItem.status
                        }}</q-item-section>
                      </q-item>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <q-footer class="bg-white">
              <q-bar>
                <q-space />
                <q-btn
                  label="Decline"
                  color="red"
                  @click="reject"
                  v-if="editedItem.status == 'Pending'"
                />
                <q-btn
                  label="Accept"
                  color="green"
                  @click="confirm"
                  v-if="editedItem.status == 'Pending'"
                />
              </q-bar>
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
      title: "Staff Registration Approvals",
      selected: [],
      data: [],
      editedIndex: -1,
      details: false,
      editedItem: "",

      maximizedToggle: true,
      filter: "",
      mode: "list",
      url: "",
      visible: false,
      small: false,
      pagination: {
        rowsPerPage: 10
      }
    };
  },
  meta() {
    return {
      title: this.title
    };
  },
  mounted() {
   // this.$store.dispatch("account/getPartnerRegistrationData");
   this.$store.dispatch("account/getStaffRegistrationData");
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      ...mapGetters("account", ["staff_reg_rows"]),
      partner_reg_columns: state => state.account.partner_reg_columns
    })
  },
  methods: {
    ...mapActions("account", ["approveStaffRegistration"]),
    ...mapActions("account", ["rejectStaffRegistration"]),

  confirm() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to Approve For Staff Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.approveStaffRegistration(this.editedItem);
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
          message: "Do you want to Reject Staff Registration ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.rejectStaffRegistration(this.editedItem);
          this.details = false;
        })
        .onCancel(() => {
          this.details = true;
        });
    },

    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.details = true;
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
