<template>
  <div>
    <q-page style="padding-top: 150px" class="q-pa-md">
      <q-table
      style="font-family: verdana"
        :data="food_partner_admin_rows"
        :columns="food_partner_admin_columns"
        :pagination.sync="pagination"
        dense
        :selected.sync="selected"
        :grid="mode === 'grid'"
        :filter="filter"
        color="green"
        separator="cell"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              color="indigo"
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
                <q-chip :color="
                  props.row.status == 'Verified'
                    ? 'primary'
                    : props.row.status == 'Pending'
                      ? 'orange'
                      : props.row.status == 'Approved'
                      ? 'secondary'
                      : props.row.status == 'Rejected'
                      ? 'red'
                      : 'negative'

                " text-color="white" dense>{{ props.row.status }}
                </q-chip>
              </q-td>
            </template>
            <template v-slot:top-right="props">
              <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: 10px;
                    "
                  >
<q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width:400px" >
  <template v-slot:append>
    <q-icon name="search" />
  </template>
</q-input>
</div>
<q-btn dense flat
icon="mdi-folder-refresh-outline"
v-close-popup
@click="reloadPage">

<q-tooltip class="bg-white
text-primary">Refresh</q-tooltip>
</q-btn>
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


<download-excel
      v-if="food_partner_admin_rows.length != 0"
      :data="food_partner_admin_rows"
   :fields="json_fields"
      :header="headerValue"
      worksheet="MH Food verified Partners (MHFP)"
      :name="
        `${excel_date}_foodverifiedpartners.xls`
      "
    >
      <q-icon color="primary" name="mdi-file-excel" size="22px" />
      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
        >Download Excel
      </q-tooltip>
    </download-excel>

</template>
      </q-table>
      <q-dialog v-model="approvedPartnersDialog" maximized persistent>
        <q-card>
          <q-toolbar class="bg-primary  dense">
            <q-toolbar-title class="text-h6 text-bold text-white">{{title3}}</q-toolbar-title>
            <q-btn
              icon="mdi-close"
              dense
              flat
              color="white"
              @click="approvedPartnersDialog=false"
            />
          </q-toolbar>
          <div class="q-pa-md">
        <q-chip square clickable
        @click="getClickableFoodRegMaster('ALL')">
          <q-avatar color="primary" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : parseInt(
                  this.food_partner_registration_status_count[0].pcount
                ) +
                parseInt(
                  this.food_partner_registration_status_count[0].acount
                ) +
                parseInt(this.food_partner_registration_status_count[0].rcount)+
                parseInt(
                  this.food_partner_registration_status_count[0].vcount
                )
          }}</q-avatar>
          All
        </q-chip>
        <q-chip
          square
          clickable
          @click="getFoodRegistrationStatusCount('Approved');getClickableFoodRegMaster('Approved')"
        >
          <q-avatar color="secondary" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : this.food_partner_registration_status_count[0].acount
          }}</q-avatar>
          Approved
        </q-chip>
        <q-chip
          square
          clickable
          @click="getFoodRegistrationStatusCount('Verified');getClickableFoodRegMaster('Verified')"
        >
          <q-avatar color="primary" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : this.food_partner_registration_status_count[0].vcount
          }}</q-avatar>
          Verified
        </q-chip>
        <q-chip
          square
          clickable
          @click="getFoodRegistrationStatusCount('Rejected');getClickableFoodRegMaster('Rejected')"
        >
          <q-avatar color="red" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : this.food_partner_registration_status_count[0].rcount
          }}</q-avatar>
          Rejected
        </q-chip>
        <q-chip
          square
          clickable
          @click="getFoodRegistrationStatusCount('Pending');getClickableFoodRegMaster('Pending')"
        >
          <q-avatar color="orange" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : this.food_partner_registration_status_count[0].pcount
          }}</q-avatar>
          Pending
        </q-chip>
      </div>
          <q-table
          :data="approved_food_partners_rows"
          :columns="approved_food_partners_columns"
          :pagination.sync="pagination"
          dense
          row-key="partner_sub_id"
          separator="cell"
          :grid="mode === 'grid'"
          :filter="filter"
          :selected.sync="selected"
          color="green"
          >
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="indigo"
                  @click="editItem(props.row)"
                  label="Take Action"
                  class="text-bold"
                  size="sm"
                  ><q-tooltip :disable="$q.platform.is.mobile"
                    >Take Action</q-tooltip
                  >
                </q-btn>
              </q-td>
            </template>
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <q-chip :color="
                  props.row.status == 'Verified'
                    ? 'primary'
                    : props.row.status == 'Pending'
                      ? 'orange'
                      : props.row.status == 'Approved'
                      ? 'secondary'
                      : props.row.status == 'Rejected'
                      ? 'red'
                      : 'negative'

                " text-color="white" dense>{{ props.row.status }}
                </q-chip>
              </q-td>
            </template>
          </q-table>
        </q-card>

      </q-dialog>

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
              <q-icon name="feed"></q-icon>
              <div class="text-h6">
                View of Food Partner Registration Details:
                {{ editedItem.agent_name }}
              </div>
              <q-space />
              <!-- <q-chip
                clickable
                dense
                color="secondary"
                text-color="white"
                icon="add"
                @click="openPropertyDialog()"
                class="text-weight-bold"
              >
                Add Food Details
              </q-chip> -->
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Basic Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
                      <div class="col-3 text-left text-black">Lead Partner</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-3 text-left text-black">Sub Partner</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.agent_sub_name }}
                      </div>
                      <div class="col-3 text-left text-black">Lead Id</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.agent_id }}
                      </div>
                      <div class="col-3 text-left text-black">Sub Id</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.agent_sub_id }}
                      </div>
                      <div class="col-3 text-left text-black">Phone</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <div class="col-3 text-left text-black">Whatsapp</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.fax }}
                      </div>
                      <div class="col-3 text-left text-black">Email</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.email_id }}
                      </div>
                      <div class="col-3 text-left text-black">Description</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.description }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                  Address Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
                      <div class="col-3 text-left">House No</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.building_no }}
                      </div>
                      <div class="col-3 text-left">Street</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.street }}
                      </div>
                      <div class="col-3 text-left">Landmark</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.land_mark }}
                      </div>
                      <div class="col-3 text-left">City</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.city }}
                      </div>
                      <div class="col-3 text-left">State</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.state }}
                      </div>
                      <div class="col-3 text-left">Country</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.country }}
                      </div>
                      <div class="col-3 text-left">Pincode</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.pin_code }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Bank Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div style="height: 250px">
                      <div
                        class="
                          row
                          text-black text-bold
                          q-ma-xs q-pa-md
                          text-body1
                        "
                      >
                        <div class="col-3 text-left">Account No</div>
                        <div class="col-9 text-left text-grey">
                          : {{ editedItem.bankAccountNo }}
                        </div>
                        <div class="col-3 text-left">Bank Name</div>
                        <div class="col-9 text-left text-grey">
                          : {{ editedItem.bankName }}
                        </div>
                        <div class="col-3 text-left">Branch</div>
                        <div class="col-9 text-left text-grey">
                          : {{ editedItem.branchName }}
                        </div>
                        <div class="col-3 text-left">IFSC Code</div>
                        <div class="col-9 text-left text-grey">
                          : {{ editedItem.ifsc }}
                        </div>
                        <div class="col-3 text-left text-black">Aadhaar</div>
                        <div class="col-9 text-left text-grey">
                          : {{ editedItem.aadhar }}
                        </div>
                        <div class="col-3 text-left text-black">Pan Card</div>
                        <div class="col-9 text-left text-grey">
                          : {{ editedItem.pan }}
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <q-resize-observer />
          </div>
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon
                    name="mdi-file-document"
                    color="black"
                    size="1.5em"
                  />Documents
                </q-bar>
                <tbody>
                  <div class="row">
                    <div class="col-12 col-sm-4">
                      <tr>
                        <td class="text-left">PAN Card</td>
                        <!-- <td class="text-left">{{ editedItem.pan_card_file }}</td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(editedItem.pan_card_file, 'Pancard')
                            "
                          />
                        </td>
                        <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:-25px; width:120px;"
                             :disabled="!this.editedItem.pan_card_file"
                              @click="downloadDocument(editedItem.pan_card_file, 'pancard')"
                              icon="mdi-download" />
                        </td>
                      </tr>
                    </div>

                    <div class="col-12 col-sm-4">
                      <tr>
                        <td class="text-left">AADHAAR</td>
                        <!-- <td class="text-left">{{ editedItem.addhaar_no }}</td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(editedItem.addhaar_no, 'Addhaar No')
                            "
                          />
                        </td>
                        <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:-25px; width:120px;"
                             :disabled="!this.editedItem.addhaar_no"
                              @click="downloadDocument(editedItem.addhaar_no, 'adhaarcard')"
                              icon="mdi-download" />
                        </td>
                      </tr>
                    </div>

                    <div class="col-12 col-sm-4">
                      <tr>
                        <td class="text-left">GSTIN</td>
                        <!-- <td class="text-left">{{ editedItem.gst_tin_loc }}</td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(editedItem.gst_tin_loc, 'Gst Tin')
                            "
                          />
                        </td>
                        <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:-25px; width:120px;"
                             :disabled="!this.editedItem.gst_tin_loc"
                              @click="downloadDocument(editedItem.gst_tin_loc, 'GSTIN')"
                              icon="mdi-download" />
                        </td>
                      </tr>
                    </div>
                    <!--
                    <div class="col-3">
                      <tr>
                        <td class="text-left">Food Partner Photo</td>
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.partner_pic_loc,
                                'Partner Photo'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div> -->
                  </div>
                  <div class="row">
                    <div class="col-12 col-sm-4">
                      <tr>
                        <td class="text-left">Undertaking</td>
                        <!-- <td class="text-left">
                      {{ editedItem.mb_certificate_loc }}
                    </td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.mb_certificate_loc,
                                'Undertaking'
                              )
                            "
                          />
                        </td>
                        <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:-25px; width:120px;"
                             :disabled="!this.editedItem.mb_certificate_loc"
                              @click="downloadDocument(editedItem.mb_certificate_loc, 'Undertaking')"
                              icon="mdi-download" />
                        </td>
                      </tr>
                    </div>

                    <div class="col-12 col-sm-4">
                      <tr>
                        <td class="text-left">Indemnity Bond</td>
                        <!-- <td class="text-left">
                      {{ editedItem.food_safety_certificate }}
                    </td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.food_safety_certificate,
                                'Indemnity Bond'
                              )
                            "
                          />
                        </td>
                        <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:-25px; width:120px;"
                             :disabled="!this.editedItem.food_safety_certificate"
                              @click="downloadDocument(editedItem.food_safety_certificate, 'Indemnity Bond')"
                              icon="mdi-download" />
                        </td>
                      </tr>
                    </div>

                    <div class="col-12 col-sm-4">
                      <tr>
                        <td class="text-left">Declaration</td>
                        <!-- <td class="text-left">
                      {{ editedItem.food_tax_loc }}
                    </td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.food_tax,
                                'Declaration'
                              )
                            "
                          />
                        </td>
                        <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:-25px; width:120px;"
                             :disabled="!this.editedItem.food_tax"
                              @click="downloadDocument(editedItem.food_tax, 'Declaration')"
                              icon="mdi-download" />
                        </td>
                      </tr>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-sm-4">
                      <tr>
                        <td class="text-left">Agreement Document</td>
                        <!-- <td class="text-left">
                      {{ editedItem.mh_agreement_loc }}
                    </td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="showDocument(editedItem.mh_agreement_loc,'Agreement Document')"
                          />
                        </td>
                        <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:-25px; width:120px;"
                             :disabled="!this.editedItem.mh_agreement_loc"
                              @click="downloadDocument(editedItem.mh_agreement_loc, 'Agreement Document')"
                              icon="mdi-download" />
                        </td>
                      </tr>
                    </div>
                    <div class="col-12 col-sm-4">
                      <tr>
                        <td class="text-left">Cancelled Cheque</td>
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.file_upload5,
                                'Cancelled Cheque'
                              )
                            "
                          />
                        </td>
                        <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:-25px; width:120px;"
                             :disabled="!this.editedItem.file_upload5"
                              @click="downloadDocument(editedItem.file_upload5, 'cancelled cheque')"
                              icon="mdi-download" />
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
              </q-markup-table>
            </div>
            <q-separator />
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="this.editedItem.status != 'Verified'">
            <q-markup-table class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-home-city" color="black" size="1.5em" />
                Restaurant Details
              </q-bar>
              <div
                class="row q-col-gutter-sm q-py-sm q-pa-md"
                style="padding-top: 0px"
              />
              <div
                class="row q-col-gutter-sm q-py-sm q-pa-md"
                style="padding-top: 0px"
              />
              <div style="width: 95%; margin: auto">
                <q-table
                  :data="food_restaurant_data_rows_admin"
                  :columns="food_restaurant_data_columns"
                  :pagination.sync="pagination"
                  dense
                  separator="cell"
                  :grid="mode === 'grid'"
                  :filter="filter"
                  :selected.sync="selected"
                  color="green"
                >
                  <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                      <q-btn
                        color="secondary"
                        @click="showFoodRestaurantData(props.row)"
                        icon="las la-eye"
                        size="sm"
                      >
                        <q-tooltip :disable="$q.platform.is.mobile"
                          >View</q-tooltip
                        >
                      </q-btn>
                      <!-- <q-btn
                        class="q-ml-xs"
                        color="secondary"
                        @click="editFoodRestaurantData(props.row)"
                        icon="mdi-pencil"
                        size="sm"
                      >
                        <q-tooltip :disable="$q.platform.is.mobile"
                          >Edit</q-tooltip
                        >
                      </q-btn> -->
                    </q-td>
                  </template>
                  <template v-slot:body-cell-partner_status="props">
                    <q-td :props="props">
                      <q-chip :color="
                        props.row.partner_status == 'verified'
                          ? 'primary'
                          : props.row.partner_status == 'pending'
                            ? 'orange'
                            : props.row.partner_status == 'approved'
                            ? 'secondary'
                            : props.row.partner_status == 'rejected'
                            ? 'red'
                            : 'negative'

                      " text-color="white" dense>{{ props.row.partner_status.charAt(0).toUpperCase() + props.row.partner_status.slice(1).toLowerCase() }}
                      </q-chip>
                    </q-td>
                  </template>
                </q-table>
                <div
                  class="row q-col-gutter-sm q-py-sm q-pa-md"
                  style="padding-top: 0px"
                />
                <div
                  class="row q-col-gutter-sm q-py-sm q-pa-md"
                  style="padding-top: 0px"
                />
              </div>
            </q-markup-table>
             </div>
            <q-card-section class="q-pa-sm" v-if="this.editedItem.status !== 'Approved' && this.editedItem.status !== 'Rejected'">
            <q-form>
              <div class="row q-pa-sm q-gutter-sm">
                <q-input
                  outlined
                  dense
                  label="Remarks"
                  lazy-rules
                  type="textarea"
                  label-color="black"
                  v-model="verifyItem.remarks"
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Please enter Remarks',
                  ]"
                  style="width:94vw"
                >
                </q-input>
              </div>
            </q-form>
          </q-card-section>
          <q-toolbar v-if="this.editedItem.status !== 'Approved' && this.editedItem.status !== 'Rejected'">
                <q-toolbar-title >
                  <div class="q-pa-sm row justify-end">
                    <div class="cursor-pointer non-selectable">
                      <q-btn class="q-mr-sm" no-caps color="secondary" @click="onApprove">Approve
                      </q-btn>
                    </div>
                    <div class="cursor-pointer non-selectable">
                      <q-btn color="negative" no-caps @click="onReject">Reject</q-btn>
                    </div>
                  </div>
                </q-toolbar-title>
              </q-toolbar>
                <!-- EDIT RESTAURANT DETAILS -->


      <!-- GET RESTAURANT DETAILS -->


            <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>

              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Food Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="foodDetails_rows"
                    :columns="foodDetails_columns"
                    :pagination.sync="pagination"
                    dense
                    separator="cell"
                    :grid="mode === 'grid'"
                    :filter="filter"
                    :selected.sync="selected"
                    color="green"
                  >
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn
                          class="text-bold"
                          color="primary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocument(props.row.food_image, 'Food Image')
                          "
                        />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-action="props">
                      <q-td :props="props">
                        <q-btn
                          color="green"
                          @click="editFoodItem(props.row)"
                          label="Edit"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >Edit</q-tooltip
                          >
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                </div>
              </q-card>
            </div> -->
          </div>
          <q-dialog
        v-model="foodRestaurantDataDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div class="text-h6">
                View of Resturant Details:
                {{ foodRestaurantEditedItem.name_of_kitchen }}
              </div>
              <q-space />
              <!-- <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="openPropertyDialog()"
              >
                Add Menu
              </q-chip> -->
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Basic Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-5 text-left text-black">Lead Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.food_partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.food_partner_sub_name }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">Kitchen Type</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.type_of_kitchen }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Name Of Kitchen
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.name_of_kitchen }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.restaurant_phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.restaurant_email }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                  Address Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-5 text-left">House No</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.building_no }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Street</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.street }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Landmark</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.land_mark }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Country</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.country }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">State</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.state_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">City</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.city_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Pincode</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.pin_code }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Latitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.restaurant_latitude }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Longitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.restaurant_longitude }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-file" color="black" size="1.5em" />
                  Documents
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="row text-black text-bold q-mt-md q-pa-sm text-body1"
                    >
                      <tbody>
                        <tr>
                          <td class="text-left" width="150px">
                            Restaurant Image1
                          </td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocument(
                                  foodRestaurantEditedItem.upload_image,
                                  'restaurant Image1'
                                )
                              "
                            />
                          </td>
                          <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:5px; width:120px;"
                             :disabled="!this.foodRestaurantEditedItem.upload_image"
                              @click="downloadDocument(foodRestaurantEditedItem.upload_image, 'Restaurant image1')"
                              icon="mdi-download" />
                          </td>
                        </tr>
                        <div
                          class="row q-col-gutter-sm q-py-sm q-pa-md"
                          style="padding-top: 0px"
                        />
                        <tr>
                          <td class="text-left" width="150px">
                            Restaurant Image2
                          </td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocument(
                                  foodRestaurantEditedItem.upload_image1,
                                  'restaurant Image2'
                                )
                              "
                            />
                          </td>
                          <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:5px; width:120px;"
                             :disabled="!this.foodRestaurantEditedItem.upload_image1"
                              @click="downloadDocument(foodRestaurantEditedItem.upload_image1, 'Restaurant image2')"
                              icon="mdi-download" />
                          </td>
                        </tr>
                        <div
                          class="row q-col-gutter-sm q-py-sm q-pa-md"
                          style="padding-top: 0px"
                        />
                        <tr>
                          <td class="text-left" width="150px">
                            Restaurant Image3
                          </td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocument(
                                  foodRestaurantEditedItem.upload_image2,
                                  'Property Image3'
                                )
                              "
                            />
                          </td>
                          <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:5px; width:120px;"
                             :disabled="!this.foodRestaurantEditedItem.upload_image2"
                              @click="downloadDocument(foodRestaurantEditedItem.upload_image2, 'Restaurant image3')"
                              icon="mdi-download" />
                          </td>
                        </tr>
                      </tbody>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home" color="black" size="1.5em" />
                  Restaurant Description
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 150px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-12 text-justify text-grey">
                        {{ foodRestaurantEditedItem.restaurant_description }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-markup-table>
            </div>
          </div>
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Food Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="foodDetails_rows_partner"
                    :columns="foodDetails_columns_admin"
                    :pagination.sync="pagination"
                    dense
                    separator="cell"
                    :grid="mode === 'grid'"
                    :filter="filter"
                    :selected.sync="selected"
                    color="green"
                  >
                     <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn
                          class="text-bold"
                          color="primary"
                          size="sm"
                          icon-right="las la-eye"
                          @click="
                            showfooddata(props.row)
                          "
                        />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-menu_partner_status="props">
                      <q-td :props="props">
                        <q-chip :color="
                          props.row.partner_status== 'verified'
                            ? 'primary'
                            : props.row.partner_status == 'pending'
                              ? 'orange'
                              : props.row.partner_status == 'approved'
                              ? 'secondary'
                              : props.row.partner_status == 'rejected'
                              ? 'red'
                              : 'negative'

                        " text-color="white" dense>{{props.row.partner_status.charAt(0).toUpperCase() + props.row.partner_status.slice(1).toLowerCase()}}
                        </q-chip>
                      </q-td>
                    </template>
                    <!-- <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn
                          class="text-bold"
                          color="primary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocumentfood(props.row.food_image, 'Food Image')
                          "
                        />
                      </q-td>
                    </template> -->
                    <!-- <template v-slot:body-cell-action="props">
                      <q-td :props="props">
                        <q-btn
                          color="green"
                          @click="editFoodItem(props.row)"
                          label="Edit"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >Edit</q-tooltip
                          >
                        </q-btn>
                      </q-td>
                    </template> -->
                       <!-- <template v-slot:body-cell-action="props">
                      <q-td :props="props">
                        <q-btn
                          color="green"
                          @click="editFoodItemdetails(props.row)"
                          label="Edit"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >Edit</q-tooltip
                          >
                        </q-btn>
                      </q-td>
                    </template> -->
                  </q-table>
                </div>
              </q-card>
            </div>
            <div></div>
            <q-card-section class="q-pa-xs" v-if="this.foodRestaurantEditedItem.partner_status!=='approved' && this.foodRestaurantEditedItem.partner_status!=='rejected'">
            <q-form>
              <div class="row q-pa-sm q-gutter-sm">
                <q-input
                  outlined
                  dense
                  label="Remarks"
                  style="width: 96vw"
                  lazy-rules
                  type="textarea"
                  label-color="black"
                  v-model="approvedresturantData.remarks"
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Please enter Remarks',
                  ]"
                >
                </q-input>
              </div>
            </q-form>
              <q-toolbar>
              <q-toolbar-title>
                <div class="q-pa-sm q-pl-md row justify-end">
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn no-caps color="secondary" @click="onApproveresturantData">Approve
                  </q-btn>
                  </div>
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn color="negative" no-caps @click="onRejectresturantData"
                    >Reject</q-btn
                  >
                  </div>
                </div>
              </q-toolbar-title>
            </q-toolbar>
            </q-card-section>
             <!-- edit food  details -->

      <!-- food deatails end -->
            <q-dialog
              v-model="small"
              transition-show="slide-up"
              transition-hide="slide-down"
              :maximized="maximizedToggle"
              persistent
            >
              <q-layout view="Lhh lpR fff" container class="bg-white">
                <q-header class="bg-primary">
                  <q-bar class="bg-primary text-white">
                    <q-icon name="feed" />
                    <div class="text-h6">
                      {{ dialogTitle }}
                    </div>
                    <q-space />

                    <q-btn dense flat icon="close" v-close-popup>
                      <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                  </q-bar>
                </q-header>
                <q-card v-show="showPanDoc" style="height: 600px">
                  <div class="q-pt-xl row items-start q-gutter-md">
                    <iframe
                      :src="url"
                      class="wrapper"
                      width="100%"
                      height="600px"
                      frameborder="0"
                    ></iframe>
                  </div>
                </q-card>
              </q-layout>
            </q-dialog>
                <!-- food deatails view page start -->
      <q-dialog
        v-model="foodviewdialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div class="text-h6">
                View of Food Details:
                {{ editedItem.agent_name }}
              </div>
              <q-space />
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Basic Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-5 text-left text-black">
                        Lead Partner
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.food_partner_name}}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Sub Partner
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.food_partner_sub_name  }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Kitchen Type</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.type_of_kitchen }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">
                        Name Of Kitchen
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.name_of_kitchen }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ foodRestaurantEditedItem.restaurant_phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{  foodRestaurantEditedItem.restaurant_email }}
                      </div>
                      <q-separator />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
                  ><q-icon name="mdi-home-circle" color="black" size="1.5em" />
                  Food Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-5 text-left text-black">Food Item Type </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedfoodDetails.item_name }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">Food Item Name</div>
                      <div class="col-7 text-left text-grey">
                        : {{editedfoodDetails.food_items_name}}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">items Available from</div>
                      <div class="col-7 text-left text-grey">
                        : {{editedfoodDetails.items_available_from}}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Items Available to</div>
                      <div class="col-7 text-left text-grey">
                        : {{editedfoodDetails.items_available_to}}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Units</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedfoodDetails.units }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Price</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedfoodDetails.price}}
                      </div>
                      <q-separator />

                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-file" color="black" size="1.5em" />
                  Documents
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <tbody>
                        <div
                          class="row q-col-gutter-sm q-py-sm q-pa-md"
                          style="padding-top: 0px"
                        />
                        <tr>
                          <td class="text-left" width="150px">Food image</td>
                          <td class="row">
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocument(
                                  editedfoodDetails.food_image,
                                  'food Image'
                                )
                              "
                            />
                          </td>
                          <td>
                            <q-btn class="text-bold" label="Download" color="secondary" size="sm"
                             style="margin-left:5px; width:120px;"
                             :disabled="!this.editedfoodDetails.food_image"
                              @click="downloadDocument(editedfoodDetails.food_image, 'food')"
                              icon="mdi-download" />
                          </td>
                        </tr>
                      </tbody>
                    </div>
                  </div>
                </q-card-section>
              </q-card>

            </div>
          </div>
          <q-card-section class="q-pa-xs" v-if="this.editedfoodDetails.partner_status!=='approved' && this.editedfoodDetails.partner_status!=='rejected'">
                       <q-form>
              <div class="row q-pa-sm q-gutter-sm">
                <q-input
                  outlined
                  dense
                  label="Remarks"
                  style="width: 98vw"
                  lazy-rules
                  type="textarea"
                  label-color="black"
                  v-model="approvedfoodData.remarks"
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Please enter Remarks',
                  ]"
                >
                </q-input>
              </div>

            </q-form>
              <q-toolbar>
              <q-toolbar-title>
                <div class="q-pa-sm q-pl-md row justify-end">
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn no-caps color="secondary" @click="onApprovefoodData">Approve
                  </q-btn>
                  </div>
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn color="negative" no-caps @click="onRejectfoodData"
                    >Reject</q-btn
                  >
                  </div>
                </div>
              </q-toolbar-title>
            </q-toolbar>
          </q-card-section>
        </q-layout>

      </q-dialog>

      <!-- food deatails view page end -->
          </div>
        </q-layout>
      </q-dialog>
          <div>
            <q-dialog
              v-model="small"
              transition-show="slide-up"
              transition-hide="slide-down"
              :maximized="maximizedToggle"
              persistent
            >
              <q-layout view="Lhh lpR fff" container class="bg-white">
                <q-header class="bg-primary">
                  <q-bar class="bg-primary text-white">
                    <q-icon name="feed" />
                    <div class="text-h6">
                      {{ dialogTitle }}
                    </div>
                    <q-space />

                    <q-btn dense flat icon="close" v-close-popup>
                      <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                  </q-bar>
                </q-header>
                <q-card v-show="showPanDoc" style="height: 600px">
                  <div class="q-pt-xl row items-start q-gutter-md">
                    <iframe
                      :src="url"
                      class="wrapper"
                      width="100%"
                      height="600px"
                      frameborder="0"
                    ></iframe>
                  </div>
                </q-card>
              </q-layout>
            </q-dialog>
          </div>
        </q-layout>
      </q-dialog>

    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title2 }}
        </q-toolbar-title>
        <b style="margin-right: 15px;"> User Name: {{ userDetails.user_name }}</b>
        <q-chip
          clickable
          color="secondary"
          text-color="white"
          icon="las la-eye"
          class="text-weight-medium"
          @click="openApprovedPartnersDialog()"
        >
          View All MHFP
        </q-chip>

        <q-btn flat round dense icon="search">
          <q-popup-edit :cover="false" :offset="[0, 10]" v-slot="scope">
            <q-input
              color="secondary"
              v-model="filter"
              dense
              autofocus
              counter
              @keyup.enter="scope.set"
            >
              <template v-slot:prepend>
                <q-icon name="search" color="secondary" />
              </template>
            </q-input>
          </q-popup-edit>
        </q-btn>

        <q-btn flat round dense icon="more_vert" />
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import moment from "moment";
const foodRegistrationMaster = () => {
  return {
    approved: "",
    name: "",
    alias_name: "",
    phone: "",
    fax: "",
    email_id: "",
    description: "",
    building_no: "",
    street: "",
    land_mark: "",
    city: "",
    country: "India",
    state: "",
    pin_code: "",
    pan: "",
    aadhar: "",
    gstin: "",
    bankAccountNo: "",
    bankName: "",
    branchName: "",
    ifsc: "",
    accept: false,
    food_safety: [],
    mb_certificate: [],
    gst_tin: [],
    addhaar_no: [],
    pan_card_file: [],
    mh_agreement: [],
    partner_pic: [],
  };
};
export default {
  data() {
    return {
      dialogTitle: "",
      ...validations,
      url: "",
      title: "MH Food Partner (MHFP) Approval",
      title2: "MH Food Pending Partners (MHFP)",
      title3: "MH Food Approval Partners (MHFP)",
      approvedPartnersDialog: false,
      food_count_status: false,
      editFoodForm: false,
      foodviewdialog: false,
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      food_safety: [],
      mb_certificate: [],
      gst_tin: [],
      addhaar_no: [],
      pan_card_file: [],
      mh_agreement: [],
      partner_pic: [],
      editedIndex: -1,
      editedItem: {
        remarks: "",
        reject: "",
      },
      foodPartnerForm: {
        name: "",
        alias_name: "",
        phone: "",
        fax: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        country: "India",
        state: "",
        pin_code: "",
        pan: "",
        aadhar: "",
        gstin: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",

        accept: false,
      },
      approvedresturantData:{
        remarks: "",
        reject: "",
      },
      approvedfoodData:{
        remarks: "",
        reject: "",
      },
      editedfoodDetails:{
        agent_id: "",
        address: "",
        agent_sub_id: "",
        agent_name: "",
        account_id: "",
        user_id: "",
        partner_id: "",
        partner_sub_id: "",
        foodPartner_name: "",
        foodPartner_sub_name: "",
        food_Partner_name: "",
        food_Partner_sub_name: "",
        sub_partner_name: "",
        name: "",
        partner_name: "",
        sub_name: "",
        agent_sub_name: "",
        items_available_from: "",
        items_available_to: "",
        prifood_type_idce: "",
        foodName: "",
        foodData: "",
        s_no: "",
        units: "",
        foodItemsList: [],
        food_image: "",
        food_type_name: "",
        food_type_id: "",
        food_items_name: "",
        food_items_id: "",
        item_txn_id: "",
        txn_id: "",
        select_offer: "",
        special_offer: "",
        enter_amount: "",
        kitchen_type: "",
        kitchen_name: "",
        foodtype: "",
        foodName: "",
        address: "",
        city: "",
        city_id: "",
        location: "",
        gstin: "",
        fssai_no: "",
        partner_status: "",
      },
      foodRestaurantEditedItem: {
        txn_id:"",
        agent_id: "",
        agent_sub_id: "",
        food_partner_sub_name: "",
      },
      pagination: {
        rowsPerPage: 10,
      },
      verifyItem: {
        remarks: "",
        reject: "",
        // userDetails: ""
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      selected: [],
      data: [],

      details: false,
      visible: false,
      showPanDoc: false,
      maximizedToggle: true,
      foodRestaurantDataDialog: false,
      small: false,

      headerValue:"MH Food verified Partners (MHFP)",

      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        "Sno": "index",
       "Status": "status",
        "Agent Id": "agent_id",
        "Agent Sub ID": "agent_sub_id",
        "Food Partner Name": "agent_name",
        "Food Partner Sub Name": "agent_sub_name",
        "Contact No": "phone",
        "Email ID": "email_id",
      },
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      food_partner_registration_status_count: (state) =>
        state.dashboard.food_partner_registration_status_count,
      property: (state) => state.dropdown.property_arr,
      food_partner_admin_columns: (state) =>
        state.partners.food_partner_admin_columns,
      foodDetails_rows_admin: (state) => state.partners.foodDetails_rows_admin,
      foodDetails_columns_admin: (state) => state.partners.foodDetails_columns_admin,
      approved_food_partners_columns: (state) => state.partners.approved_food_partners_columns,
      food_partner_admin_rows: (state) => state.partners.food_partner_admin_rows,
      food_restaurant_data_rows_admin: (state) => state.dashboard.food_restaurant_data_rows_admin,
      food_restaurant_data_columns: (state) =>
        state.dashboard.food_restaurant_data_columns,
        foodDetails_rows_partner: (state) => state.partners.foodDetails_rows_partner,
    }),
    ...mapGetters("partners", ["food_partner_admin_rows"]),
    ...mapGetters("partners", ["approved_food_partners_rows"]),
    ...mapGetters("dashboard", ["food_restaurant_data_rows_admin"])
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("dashboard/getFoodRegistrationStatusCount");
    this.$store.dispatch("partners/getFoodRegistrationMasterInAdmin");
    this.$store.dispatch("dashboard/getFoodAllDisplayForStaff");
  },
  meta() {
    return {
      title: this.title,
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    ...mapActions("partners", ["foodRegistrationMasterAdd", "approvePartner"]),
    ...mapActions("partners", ["getFoodPartnerRegApprovalStatus"]),
    ...mapActions("partners", ["getfoodDetailsApproval"]),
      ...mapActions("partners", ["approveFoodRegDetails"]),
      ...mapActions("partners", ["approveRestaurantDetails"]),
      ...mapActions("partners", ["approvefoodItemApprove"]),

      ...mapActions("partners", ["rejectFoodRegDetails"]),
      ...mapActions("partners", ["rejectRestaurantDetails"]),
      ...mapActions("partners", ["rejectfoodItemReject"]),
      ...mapActions("dashboard", ["getFoodAllDisplayForStaff"]),
      ...mapActions("dashboard", ["getFoodRegistrationStatusCount"]),
      ...mapActions("dashboard", ["getFoodRestaurantDetailsadmin"]),
      ...mapActions("partners", ["getfoodDetails"]),

    onSubmit() {
      this.$refs.agentFormSubmit.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              const formData = new FormData();
              formData.append("pancard", this.pan_card_file);
              formData.append("addhaar", this.addhaar_no);
              formData.append("gst_tin", this.gst_tin);
              formData.append("mh_agreement", this.mh_agreement);
              formData.append("partner_pic", this.partner_pic);
              formData.append("mb_certificate", this.mb_certificate);
              formData.append("food_safety", this.food_safety);
              formData.append(
                "foodDetails",
                JSON.stringify(this.foodPartnerForm)
              );
              this.foodRegistrationMasterAdd(formData);
              this.foodPartnerForm = foodRegistrationMaster();
              this.$refs.foodPartnerForm.resetValidation();
              this.addDataDialog = false;
            })
            .onCancel(() => {
              this.addDataDialog = true;
            });
        }
      });
    },
    showFoodRestaurantData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.foodRestaurantEditedItem = Object.assign({}, item);
      //  console.log("item", item)
      // this.foodRestaurantEditedItem.agent_id = item.partner_id;
      // this.foodRestaurantEditedItem.agent_sub_id = item.partner_sub_id;
      this.foodRestaurantDataDialog = true;
      this.getfoodDetails(item);
    },
    showfooddata(item){
    this.editedIndex = this.data.indexOf(item);
      this.editedfoodDetails = Object.assign({}, item);
      this.editedfoodDetails.item_name = item.item_name;
      this.editedfoodDetails.food_items_name = item.food_items_name;
      this.editedfoodDetails.items_available_from = item.items_available_from;
      this.editedfoodDetails.items_available_to = item.items_available_to;
      this.editedfoodDetails.units = item.units;
      this.editedfoodDetails.price = item.price;
      this.foodviewdialog = true;
      this.getfoodDetails();
  },
    editItem(item) {
      // console.log("item",item);
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.details = true;
      this.getFoodRestaurantDetailsadmin(this.editedItem);
    },

    // viewPropertyItem(item) {
    //   this.editedIndex = this.data.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.editedItem.agent_id = item.agent_id;
    //   this.editedItem.agent_sub_id = item.agent_sub_id;
    //   this.editedItem.agent_name = item.agent_name;
    //   this.details = true;
    //   this.getFoodRestaurantDetailsadmin(this.editedItem);
    // },
    onApprove() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Approve Data?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.editedItem.remarks = this.verifyItem.remarks;
          this.verifyItem.remarks = [];
          this.approveFoodRegDetails(this.editedItem);
          this.details = false;
        });
    },

      onReject() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Data?",
          cancel: true,
          persistent: true,
        })
         .onOk(() => {
          this.editedItem.remarks = this.verifyItem.remarks;
          this.verifyItem.reject = [];
          this.rejectFoodRegDetails(this.editedItem);
          this.details = false;
           });

      },
      onApproveresturantData() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.foodRestaurantEditedItem.remarks = this.approvedresturantData.remarks;
          this.approvedresturantData.remarks = [];
          this.approveRestaurantDetails(this.foodRestaurantEditedItem);
          this.getFoodRestaurantDetailsadmin();
          this.details = false;
        });
    },
    onRejectresturantData(){
      this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Reject Data?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {
          this.foodRestaurantEditedItem.remarks = this.approvedresturantData.remarks;
          this.approvedresturantData.reject = [];
          this.rejectRestaurantDetails(this.foodRestaurantEditedItem);
          this.details = false;
        });
    },
    onApprovefoodData(){
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.editedfoodDetails.remarks = this.approvedfoodData.remarks;
          this.approvedfoodData.remarks = [];
          this.approvefoodItemApprove(this.editedfoodDetails);
          this.getfoodDetails();
          this.details = false;
        });
    },
    onRejectfoodData(){
      this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Reject Data?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {
          this.editedfoodDetails.remarks = this.approvedfoodData.remarks;
          this.approvedfoodData.reject = [];
          this.rejectfoodItemReject(this.editedfoodDetails);
          this.details = false;
        });
    },
    openApprovedPartnersDialog() {
      this.approvedPartnersDialog = true;
      this.getFoodPartnerRegApprovalStatus("ALL");
    },
    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhfpFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },
    downloadDocument(file, dialogName) {
      const link = document.createElement('a');
      this.dialogTitle = `${dialogName}: ${file}`;
      this.url = filepaths.mhfpFilePath + file;
      link.href = this.url;
      // this.dialogTitle = `${dialogName}: ${file}`;
      link.download = this.dialogTitle;
      link.target = '_blank'; // Open in a new tab
      link.click()
    },
    async reloadPage() {
      this.$router.go(0);
      window.location.reload();
    },
    getClickableFoodRegMaster(item){
      this.getFoodPartnerRegApprovalStatus(item);
      this.getFoodAllDisplayForStaff(item);
      this.food_count_status = true;
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
