<template>
  <div>
    <q-page style="padding-top: 150px" class="q-pa-md">
      <q-table
      style="font-family: verdana"
        :title="title"
        :data="partners_data_forAdmin_rows"
        :columns="partners_data_forAdmin_columns"
         dense
        row-key="partner_sub_id"
        separator="cell"
        :grid="mode === 'grid'"
        :filter="filter"
        :selected.sync="selected"
        color="green"
        :rows-per-page-options="[25,50,75,100,0]"
      >
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
                <q-chip :color="
                  props.row.status == 'verified'
                    ? 'primary'
                    : props.row.status == 'pending'
                      ? 'orange'
                      : props.row.status == 'approved'
                      ? 'secondary'
                      : props.row.status == 'rejected'
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
      v-if="partners_data_forAdmin_rows.length != 0"
      :data="partners_data_forAdmin_rows"
   :fields="json_fields"
      :header="headerValue"
      worksheet="MH Accommodation verified Partners (MHACP)"
      :name="
        `${excel_date}_PropertyPartnerApprovals.xls`
      "
    >
      <q-icon color="primary" name="mdi-file-excel" size="22px" />
      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
        >Download Excel
      </q-tooltip>
    </download-excel>

</template>
      </q-table>
      <q-dialog v-model="partnerApprovalDialog" maximized persistent>
        <q-card>
          <q-toolbar class="bg-primary q-mb-xl dense">
            <q-toolbar-title class="text-h6 text-bold text-white">{{title2}}</q-toolbar-title>
            <q-btn
              icon="mdi-close"
              dense
              flat
              color="white"
              @click="partnerApprovalDialog=false"
            />
          </q-toolbar>
          <div class="q-pa-md">
        <q-chip  square clickable @click="getClickableProperty('all');">
          <q-avatar color="primary" text-color="white">{{
            this.property_partner_registration_status_count.length == 0
              ? "0"
              : parseInt(
                  this.property_partner_registration_status_count[0].pcount
                ) +
                parseInt(
                  this.property_partner_registration_status_count[0].acount
                ) +
                parseInt(
                  this.property_partner_registration_status_count[0].rcount
                ) +
                parseInt(
                  this.property_partner_registration_status_count[0].vcount
                )

          }}</q-avatar>
          All
        </q-chip>
        <q-chip
          square
          clickable
          @click="getPropertyRegistrationStatusCount('approved');getClickableProperty('approved');"
        >
          <q-avatar color="secondary" text-color="white">{{
            this.property_partner_registration_status_count.length == 0
              ? "0"
              : this.property_partner_registration_status_count[0].acount
          }}</q-avatar>
          Approved
        </q-chip>
        <q-chip
          square
          clickable
          @click="getPropertyRegistrationStatusCount('verified');getClickableProperty('verified');"
        >
          <q-avatar color="primary" text-color="white">{{
            this.property_partner_registration_status_count.length == 0
              ? "0"
              : this.property_partner_registration_status_count[0].vcount
          }}</q-avatar>
          verified
        </q-chip>
        <q-chip
          square
          clickable
          @click="getPropertyRegistrationStatusCount('rejected');getClickableProperty('rejected');"
        >
          <q-avatar color="red" text-color="white">{{
            this.property_partner_registration_status_count.length == 0
              ? "0"
              : this.property_partner_registration_status_count[0].rcount
          }}</q-avatar>
          Rejected
        </q-chip>
        <q-chip
          square
          clickable
          @click="getPropertyRegistrationStatusCount('pending');getClickableProperty('pending');"
        >
          <q-avatar color="orange" text-color="white">{{
            this.property_partner_registration_status_count.length == 0
              ? "0"
              : this.property_partner_registration_status_count[0].pcount
          }}</q-avatar>
          Pending
        </q-chip>
      </div>
      <q-table
          :data="partners_allDisplay_approvals_data_row"
          :columns="partners_approvals_data_columns"
          :rows-per-page-options="[25,50,75,100,0]"
          dense
          v-if="this.property_count_forAdmin == true"
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
                  color="positive"
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
                  props.row.status == 'verified'
                    ? 'primary'
                    : props.row.status == 'pending'
                      ? 'orange'
                      : props.row.status == 'approved'
                      ? 'secondary'
                      : props.row.status == 'rejected'
                      ? 'red'
                      : 'negative'

                " text-color="white" dense>{{ props.row.status }}
                </q-chip>
              </q-td>
            </template>
            <template v-slot:top-right="props">



<q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width:400px">
  <template v-slot:append>
    <q-icon name="search" />
  </template>
</q-input>



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
      v-if="partners_allDisplay_approvals_data_row.length != 0"
      :data="partners_allDisplay_approvals_data_row"
   :fields="json_fields"
      :header="headerValue1"
      worksheet="MH Accommodation verified Partners (MHACP)"
      :name="
        `${excel_date}_PropertyPartnerApprovals.xls`
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
          </q-table>
          <q-table
          :data="partners_approvals_data_rows"
          :columns="partners_approvals_data_columns"
          :rows-per-page-options="[25,50,75,100,0]"
          dense
          v-if="this.property_count_forAdmin != true"
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
                  color="positive"
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
                  props.row.status == 'verified'
                    ? 'primary'
                    : props.row.status == 'pending'
                      ? 'orange'
                      : props.row.status == 'approved'
                      ? 'secondary'
                      : props.row.status == 'rejected'
                      ? 'red'
                      : 'negative'

                " text-color="white" dense>{{ props.row.status }}
                </q-chip>
              </q-td>
            </template>
            <template v-slot:top-right="props">



<q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width:400px">
  <template v-slot:append>
    <q-icon name="search" />
  </template>
</q-input>
<q-btn dense flat icon="mdi-folder-refresh-outline" v-close-popup  @click="reloadPage">
                  <q-tooltip class="bg-white text-primary">Refresh</q-tooltip>
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
      v-if="partners_approvals_data_rows.length != 0"
      :data="partners_approvals_data_rows"
   :fields="json_fields"
      :header="headerValue2"
      worksheet="MH Accommodation verified Partners (MHACP)"
      :name="
        `${excel_date}_PropertyPartnerApprovals.xls`
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
          </q-table>
        </q-card>
      <q-btn dense flat icon="close" @click="this.partnerApprovalDialog=false">
        <q-tooltip class="bg-primary text-white">Close</q-tooltip>
      </q-btn>

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
                View of Property Partner Registration Details:
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
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
                      <div class="col-5 text-left text-black">Name</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <div class="col-5 text-left text-black">Whatsapp</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.fax }}
                      </div>
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.email_id }}
                      </div>
                      <div class="col-5 text-left text-black">Aaadhaar</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.aadhar }}
                      </div>
                      <div class="col-5 text-left text-black">Pan Card</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.pan }}
                      </div>

                      <div class="col-5 text-left text-black">Description</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.description }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
                  ><q-icon name="mdi-home-circle" color="black" size="1.5em" />
                  Address details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
                      <div class="col-5 text-left">House No</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.building_no }}
                      </div>
                      <div class="col-5 text-left">Street</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.street }}
                      </div>
                      <div class="col-5 text-left">Landmark</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.land_mark }}
                      </div>
                      <div class="col-5 text-left">City</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.city }}
                      </div>
                      <div class="col-5 text-left">State</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.state }}
                      </div>
                      <div class="col-5 text-left">Country</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.country }}
                      </div>
                      <div class="col-5 text-left">Pincode</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.pin_code }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-bank" color="black" size="1.5em" />
                  Bank Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div style="height: 300px">
                      <div
                        class="
                          row
                          text-black text-bold
                          q-ma-xs q-pa-md
                          text-body1
                        "
                      >
                        <div class="col-5 text-left text-black">Aadhaar</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.aadhar }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left text-black">Pan Card</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.pan }}
                        </div>
                        <div class="col-5 text-left text-black">Account No</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.bankAccountNo }}
                        </div>
                        <div class="col-5 text-left text-black">Bank Name</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.bankName }}
                        </div>
                        <div class="col-5 text-left text-black">Branch</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.branchName }}
                        </div>
                        <div class="col-5 text-left text-black">IFSC Code</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.ifsc }}
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
            class="row q-col-gutter-sm  q-py-sm q-pa-md"
            style="padding-top:35px"
          >
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-markup-table class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold"
              style="max-height: 20vh">
                <q-icon
                  name="mdi-file-document"
                  color="black"
                  size="1.5em"
                />Documents
              </q-bar>
              <tbody>
                <div class="row">
                  <div class="col-3">
                    <tr>
                      <td class="text-left">Pancard</td>
                      <td class="text-center">
                        <q-btn
                          class="text-bold"
                          label="view"
                          color="secondary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="showDocument(editedItem.pan_loc, 'Pancard')"
                        />
                      </td>
                    </tr>
                  </div>
                  <div class="col-3">
                    <tr>
                      <td class="text-left">Addhaar No</td>
                      <!-- <td class="text-left">{{ editedItem.addhaar_loc }}</td> -->
                      <td class="text-center">
                        <q-btn
                          class="text-bold"
                          label="view"
                          color="secondary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocument(editedItem.addhaar_loc, 'Addhaar No')
                          "
                        />
                      </td>
                    </tr>
                  </div>

                  <div class="col-3">
                    <tr>
                      <td class="text-left">Gst Tin No</td>
                      <!-- <td class="text-left">{{ editedItem.gst_tin_loc }}</td> -->
                      <td class="text-center">
                        <q-btn
                          class="text-bold"
                          label="view"
                          color="secondary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocument(editedItem.gst_tin_loc, 'GST TIN')
                          "
                        />
                      </td>
                    </tr>
                  </div>

                  <div class="col-3">
                    <tr>
                      <td class="text-left">Agreement Doc</td>
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
                          @click="
                            showDocument(
                              editedItem.mh_agreement_loc,
                              'Argeement Doc'
                            )
                          "
                        />
                      </td>
                    </tr>
                  </div>
                  <div class="col-3">
                    <tr>
                      <td class="text-left">Partner Photo</td>
                      <!-- <td class="text-left">
                      {{ editedItem.partner_pic_loc }}
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
                              editedItem.partner_pic_loc,
                              'Partner PIc'
                            )
                          "
                        />
                      </td>
                    </tr>
                  </div>

                  <div class="col-3">
                    <tr>
                      <td class="text-left">Municipal Business Doc</td>
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
                              'Municipal Business'
                            )
                          "
                        />
                      </td>
                    </tr>
                  </div>

                  <div class="col-3">
                    <tr>
                      <td class="text-left">Property Tax Receipt</td>
                      <!-- <td class="text-left">
                      {{ editedItem.property_tax_loc }}
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
                              editedItem.property_tax_loc,
                              'Property Tax'
                            )
                          "
                        />
                      </td>
                    </tr>
                  </div>

                  <div class="col-3">
                    <tr>
                      <td class="text-left">Fire Safety Doc</td>
                      <!-- <td class="text-left">
                      {{ editedItem.fire_safety_loc }}
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
                              editedItem.fire_safety_loc,
                              'Fire Safety Document'
                            )
                          "
                        />
                      </td>
                    </tr>
                  </div>
                </div>
              </tbody>
            </q-markup-table>
          </div>
           </div>
           <!--<div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-city" color="black" size="1.5em" />
                  Property Details
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
                    :data="property_data_rows"
                    :columns="property_data_columns"
                    :rows-per-page-options="[25,50,75,100,0]"
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
                          color="primary"
                          @click="showPropertyData(props.row)"
                          icon="las la-eye"
                          size="sm"
                          ><q-tooltip :disable="$q.platform.is.mobile"
                            >View</q-tooltip
                          >
                        </q-btn>
                        <q-btn
                          color="primary"
                          @click="editPropertyData(props.row)"
                          icon="mdi-pencil"
                          size="sm"
                          ><q-tooltip :disable="$q.platform.is.mobile"
                            >Edit</q-tooltip
                          >
                        </q-btn>
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
          </div> -->
          <q-card-section class="q-pa-xs" v-if="this.editedItem.status != 'approved'">
            <q-form>
              <div class="row q-pa-sm q-gutter-sm">
                <q-input
                  outlined
                  dense
                  label="Remarks"
                  style="width: 500px"
                  lazy-rules
                  type="textarea"
                  label-color="black"
                  v-model="verifyItem.remarks"
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Please enter Remarks',
                  ]"
                >
                </q-input>
              </div>
            </q-form>
          </q-card-section>
          <q-toolbar>
                <q-toolbar-title v-if="this.editedItem.status != 'approved'">
                  <div class="q-pa-sm q-pl-md row justify-end">
                    <div class="cursor-pointer non-selectable">
                      <q-btn no-caps color="secondary" @click="onApprove">Approve
                      </q-btn>
                    </div>
                    <div class="cursor-pointer non-selectable">
                      <q-btn color="negative" no-caps @click="onReject">Reject</q-btn>
                    </div>
                  </div>
                </q-toolbar-title>
              </q-toolbar>
                      <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"  v-if="this.editedItem.status == 'approved'"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-city" color="black" size="1.5em" />
                  Property Details
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
                    :data="property_data_admin_rows"
                    :columns="property_data_columns"
                    :rows-per-page-options="[25,50,75,100,0]"
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
                          color="primary"
                          @click="showPropertyData(props.row)"
                          icon="las la-eye"
                          size="sm"
                          ><q-tooltip :disable="$q.platform.is.mobile"
                            >View</q-tooltip
                          >
                        </q-btn>
                        <!-- <q-btn
                          color="primary"
                          @click="editPropertyData(props.row)"
                          icon="mdi-pencil"
                          size="sm"
                          ><q-tooltip :disable="$q.platform.is.mobile"
                            >Edit</q-tooltip
                          >
                        </q-btn> -->
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
          </div>
          <q-dialog
            v-model="propertyDataDialog"
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
                    View of Property Details:
                    {{ propertyEditedItem.sub_property_name }}
                  </div>
                  <q-space />
                  <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                  </q-btn>
                </q-bar>
              </q-header>

              <div
                class="row q-col-gutter-sm q-py-sm"
                style="padding-top: 35px"
              >
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs text-black">
                    <q-bar
                      flat
                      class="ma-02 text-bold"
                      style="max-height: 20vh"
                    >
                      <q-icon
                        name="manage_accounts"
                        color="black"
                        size="1.5em"
                      />
                      Basic Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div
                          class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          "
                        >
                          <div class="col-5 text-left text-black">
                            Lead Partner
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.partner_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Sub Partner
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.sub_partner_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Lead Id</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.partner_id }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Sub Id</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.partner_sub_id }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Property Type
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.property_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Sub Property Name
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.sub_property_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Phone</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.property_phone }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Email</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.property_email }}
                          </div>
                          <div class="col-5 text-left text-black">MH Revenue Sharing In %</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.mh_service_fee }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs">
                    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
                      ><q-icon
                        name="mdi-home-circle"
                        color="black"
                        size="1.5em"
                      />
                      Address Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div
                          class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          "
                        >
                          <div class="col-5 text-left">House No</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.building_no }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Street</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.street }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Landmark</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.land_mark }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Country</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.country }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">State</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.state_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">City</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.city_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Pincode</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.pin_code }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Latitude</div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.property_latitude }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Longitude
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ propertyEditedItem.property_longitude }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs">
                    <q-bar
                      flat
                      class="ma-02 text-bold"
                      style="max-height: 20vh"
                    >
                      <q-icon name="mdi-file" color="black" size="1.5em" />
                      Documents
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div
                          class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          "
                        >
                          <tbody>
                            <tr>
                              <td class="text-left" >
                                Property Image 1
                              </td>
                              <td style="padding-left: 30px;">
                                <q-btn
                                  class="text-bold"
                                  label="view"
                                  color="secondary"
                                  size="sm"
                                  icon-right="mdi-eye"
                                  @click="
                                    showDocument(
                                      propertyEditedItem.upload_image,
                                      'Property Image'
                                    )
                                  "
                                />
                              </td>
                            </tr>
                            <div
                              class="row q-col-gutter-sm q-py-sm q-pa-md"
                              style="padding-top: 0px"
                            />
                            <tr>
                              <td class="text-left" >
                                Property Image 2
                              </td>
                              <td style="padding-left: 30px;">
                                <q-btn
                                  class="text-bold"
                                  label="view"
                                  color="secondary"
                                  size="sm"
                                  icon-right="mdi-eye"
                                  @click="
                                    showDocument(
                                      propertyEditedItem.upload_image1,
                                      'Property Image1'
                                    )
                                  "
                                />
                              </td>
                            </tr>
                            <div
                              class="row q-col-gutter-sm q-py-sm q-pa-md"
                              style="padding-top: 0px"
                            />
                            <tr>
                              <td class="text-left">
                                Property Image 3
                              </td>
                              <td style="padding-left: 30px;">
                                <q-btn
                                  class="text-bold"
                                  label="view"
                                  color="secondary"
                                  size="sm"
                                  icon-right="mdi-eye"
                                  @click="
                                    showDocument(
                                      propertyEditedItem.upload_image2,
                                      'Property Image2'
                                    )
                                  "
                                />
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
                    <q-bar
                      flat
                      class="ma-02 text-bold"
                      style="max-height: 20vh"
                    >
                      <q-icon name="mdi-home" color="black" size="1.5em" />
                      Property Description
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 150px">
                        <div
                          class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          "
                        >
                          <div class="col-12 text-justify text-grey">
                            {{ propertyEditedItem.property_description }}
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
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <q-markup-table class="q-ma-xs">
                    <q-bar
                      flat
                      class="ma-02 text-bold"
                      style="max-height: 20vh"
                    >
                      <q-icon name="mdi-home" color="black" size="1.5em" /> Room Details
                    </q-bar>
                    <div
                      class="row q-col-gutter-sm q-py-sm q-pa-md"
                      style="padding-top: 10px"
                    />
                    <div style="width: 95%; margin: auto">
                      <q-table
                        :data="rooms_data_admin_rows"
                        :columns="rooms_data_admin_columns"
                        :rows-per-page-options="[25,50,75,100,0]"
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
                              color="primary"
                              @click="showRoomsData(props.row)"
                              icon="las la-eye"
                              size="sm"
                              ><q-tooltip :disable="$q.platform.is.mobile"
                                >View</q-tooltip
                              ></q-btn
                            >
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
              </div>

               <q-card-section class="q-pa-xs">
            <q-form>
              <div class="row q-pa-sm q-gutter-sm">
                <q-input
                  outlined
                  dense
                  label="Remarks"
                  style="width: 500px"
                  lazy-rules
                  type="textarea"
                  label-color="black"
                  v-model="approvedPropertyData.remarks"

                >
                </q-input>


                <q-input
                      dense
                      outlined
                      lazy-rules
                      style="width: 290px"
                      v-model="approvedPropertyData.mh_service_fee"

                      label="MH Revenue Sharing In %"
                      label-color="black"
                      hide-bottom-space
                      :rules="[
                        number(),
                        specialMOfferValue('MH Revenue Sharing In %', 100),
                      ]"

                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-currency-inr"
                          color="secondary"
                        /> </template
                    ></q-input>


              </div>
            </q-form>
              <q-toolbar>
              <q-toolbar-title>
                <div class="q-pa-sm q-pl-md row justify-end">
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn no-caps color="secondary" @click="onApprovePropertyData">Approve
                  </q-btn>
                  </div>
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn color="negative" no-caps @click="onRejectPropertyData"
                    >Reject</q-btn
                  >
                  </div>
                </div>
              </q-toolbar-title>
            </q-toolbar>
          </q-card-section>
            </q-layout>
          </q-dialog>

          <!-- ROOMS DIALOG -->
          <q-dialog
            v-model="roomsDataDialog"
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
                    View of Room Details:
                    {{ roomsEditedItem.sub_property_name }}
                  </div>
                  <q-space />
                  <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                  </q-btn>
                </q-bar>
              </q-header>

              <div
                class="row q-col-gutter-sm q-py-sm"
                style="padding-top: 35px"
              >
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs text-black">
                    <q-bar
                      flat
                      class="ma-02 text-bold"
                      style="max-height: 20vh"
                    >
                      <q-icon
                        name="manage_accounts"
                        color="black"
                        size="1.5em"
                      />
                      Basic Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div
                          class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          "
                        >
                          <div class="col-5 text-left text-black">
                            Lead Partner
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.partner_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Sub Partner
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.sub_partner_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Lead Id</div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.partner_id }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Sub Id</div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.partner_sub_id }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Property Type
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.property_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Sub Property Name
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.sub_property_name }}
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
                      ><q-icon
                        name="mdi-home-circle"
                        color="black"
                        size="1.5em"
                      />
                      Room Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div
                          class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          "
                        >
                          <div class="col-5 text-left text-black">
                            Room Number
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.room_no }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Room Type
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.room_type }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Facilities
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.facilities }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Price</div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.price }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Units</div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.units }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>

                  </q-card>



               <q-card-section class="q-pa-xs">
                       <q-form>
              <div class="row q-pa-sm q-gutter-sm">
                <q-input
                  outlined
                  dense
                  label="Remarks"
                  style="width: 500px"
                  lazy-rules
                  type="textarea"
                  label-color="black"
                  v-model="approvedRoomData.remarks"
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
                  <q-btn no-caps color="secondary" @click="onApproveRoomData">Approve
                  </q-btn>
                  </div>
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn color="negative" no-caps @click="onRejectRoomData"
                    >Reject</q-btn
                  >
                  </div>
                </div>
              </q-toolbar-title>
            </q-toolbar>
          </q-card-section>

                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs">
                    <q-bar
                      flat
                      class="ma-02 text-bold"
                      style="max-height: 20vh"
                    >
                      <q-icon name="mdi-file" color="black" size="1.5em" />
                      Documents
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div
                          class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          "
                        >
                          <tbody>
                            <tr>
                              <td class="text-left" width="280px">
                                Room Image 1
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
                                      roomsEditedItem.room_image_1,
                                      'Room Image 1'
                                    )
                                  "
                                />
                              </td>
                            </tr>
                            <div
                              class="row q-col-gutter-sm q-py-sm q-pa-md"
                              style="padding-top: 0px"
                            />
                            <tr>
                              <td class="text-left" width="280px">
                                Room Image 2
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
                                      roomsEditedItem.room_image_2,
                                      'Room Image 2'
                                    )
                                  "
                                />
                              </td>
                            </tr>
                            <div
                              class="row q-col-gutter-sm q-py-sm q-pa-md"
                              style="padding-top: 0px"
                            />
                            <tr>
                              <td class="text-left" width="280px">
                                Room Image 3
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
                                      roomsEditedItem.room_image_3,
                                      'Room Image 3'
                                    )
                                  "
                                />
                              </td>
                            </tr>
                          </tbody>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
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
            <!-- <q-toolbar>
              <q-toolbar-title>
                <div class="q-pa-sm q-pl-md row justify-end">
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn no-caps color="secondary" @click="onApprove">Approve
                  </q-btn>
                  </div>
                  <div class="cursor-pointer non-selectable" style="padding: 5px;">
                  <q-btn color="negative" no-caps @click="onReject"
                    >Reject</q-btn
                  >
                  </div>
                </div>
              </q-toolbar-title>
            </q-toolbar> -->
          </div>
        </q-layout>

        <q-footer elevated> </q-footer>
      </q-dialog>
    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>
        <b style="margin-right: 15px;"> User Name: {{ userDetails.user_name }}</b>
        <q-chip
          clickable
          color="secondary"
          text-color="white"
          icon="las la-eye"
          class="text-weight-medium"
          @click="openApprovalPartnersDialog()"
        >
        View All MHACP
        </q-chip>

        <q-btn flat round dense icon="search">
          <q-popup-edit
            v-model="label2"
            :cover="false"
            :offset="[0, 10]"
            v-slot="scope"
          >
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

const propertyRegistrationMaster = () => {
  return {
    approved: "",
    property: "",
    property_name: "",
    name: "",
    phone: "",
    fax: "",
    email_id: "",
    hotel_registration_no: "",
    hotel_owner: "",
    cancellation_policy: "",
    display_order: "",
    video_link: "",
    is_default: "",
    facilities: "",
    preferences: "",
    description: "",
    building_no: "",
    street: "",
    land_mark: "",
    country: "",
    state: "",
    pin_code: "",
    latitude: "",
    longitude: "",
    accept: false,
    pan_card_file: [],
    addhaar_no: [],
    gst_tin: [],
    mh_agreement: [],
    partner_pic: [],
    mb_certificate: [],
    property_tax: [],
    fire_safety: [],
  };
};
export default {
  data() {
    return {
      property_count_forAdmin: false,
      ...validations,
      dialogTitle: "",
      label2: "",
      selected: [],
      data: [],
      url: "",
      details: false,
      propertyDataDialog: false,
      roomsDataDialog: false,
      visible: false,
      showPanDoc: false,
      small: false,
      editedIndex: -1,
      editedItem: {
        remarks: "",
        reject: "",
      },

      propertyEditedItem: {
        partner_id: "",
        partner_sub_id: "",
      },
      roomsEditedItem: {
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
      },

      title: "MH Accommodation verified Partners (MHACP)",
      title2: "MH Accommodation Approved Partners (MHACP) ",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      maximizedToggle: true,
      partnerApprovalDialog: false,
      pan_card_file: [],
      addhaar_no: [],
      gst_tin: [],
      mh_agreement: [],
      partner_pic: [],
      mb_certificate: [],
      property_tax: [],
      fire_safety: [],
      editedPropertyData: {
        txn_id: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
        partner_sub_name: "",
        property_name: "",
        sub_property_name: "",
        property_phone: "",
        property_email: "",
        property_latitude: "",
        property_longitude: "",
        property_price_startsFrom: "",
        property_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "",
        state_name: "",
        city_name: "",
        pin_code: "",
      },
      propertyPartnerForm: {
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
      verifyItem: {
        remarks: "",
        reject: "",
        // userDetails: ""
      },
      approvedPropertyData: {
        remarks: "",
        reject: "",
        mh_service_fee: "",
      },
        approvedRoomData: {
        remarks: "",
        reject: "",
      },

      propertyDetails: {
        property_name: "",
        sub_property_name: "",
        property_phone: "",
        property_email_id: "",
        property_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        property_latitude: "",
        property_longitude: "",
        partner_id: "",
        partner_sub_id: "",
        partner_name: "",
        partner_phone: "",
        partner_sub_name: "",
        property_price_startsFrom: "",
      },
      mode: "list",
      filter: "",
      headerValue:"MH Accommodation Verified Partners (MHACP)",
      headerValue1:"MH Accommodation Approved Partners (MHACP)",
      headerValue2:"MH Accommodation ALL Partners (MHACP)",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        "Sno": "index",
       "Status": "status",
        "Account Id": "account_id",
        "Partner Id": "partner_id",
        "Property Partner Name": "agent_name",
        "Sub Partner Name": "agent_sub_name",
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
      property: (state) => state.dropdown.property_arr,
      partners_data_forAdmin_columns: (state) =>
        state.dashboard.partners_data_forAdmin_columns,
      property_registration_rows: (state) =>
        state.dashboard.property_registration_rows,
      property_data_columns: (state) => state.partners.property_data_columns,
      rooms_data_admin_columns: (state) => state.partners.rooms_data_admin_columns,
      property_registration_columns: (state) =>
        state.dashboard.property_registration_columns,
      partners_data_forAdmin_rows: (state) => state.dashboard.partners_data_forAdmin_rows,
      partners_approvals_data_rows: (state) => state.dashboard.partners_approvals_data_rows,
      partners_approvals_data_columns: (state) => state.dashboard.partners_approvals_data_columns,
      partners_allDisplay_approvals_data_row:state=>state.dashboard.partners_allDisplay_approvals_data_row,
      property_partner_registration_status_count: (state) =>
        state.dashboard.property_partner_registration_status_count,
    }),
    ...mapGetters("dashboard", ["property_partner_registration_status_count"]),
    ...mapGetters("partners", ["property_data_rows"]),
    ...mapGetters("partners", ["property_data_admin_rows"]),
    ...mapGetters("partners", ["rooms_data_admin_rows"]),
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("dashboard/getPropertyRegistrationStatusCount");
    this.$store.dispatch("dashboard/getAllPartnersData");
    this.$store.dispatch("dashboard/getPropertyRegistrationMaster");
  },
  meta() {
    return {
      title: this.title,
    };
  },
  methods: {
    ...mapActions("partners", ["propertyRegistrationMasterAdd", "approvePartner"]),
    ...mapActions("dashboard", ["getPropertyDisplayCountOfAdmin"]),
    ...mapActions("dashboard", ["getpropertyPartnerRegApprovalStatus"]),
    ...mapActions("partners", ["getPropertyDetailsForAdmin"]),
    ...mapActions("partners", ["getRoomsDetailsForAdmin"]),
    ...mapActions("partners", ["approvePartnerAccDetails"]),
    ...mapActions("partners", ["approvePropertyAccDetails"]),
    ...mapActions("partners", ["approveRoomAccDetails"]),
    ...mapActions("partners", ["rejectRoomAccDetails"]),
    ...mapActions("partners", ["rejectPropertyAccDetails"]),
    ...mapActions("partners", ["rejectPartnerAccDetails"]),
    ...mapActions("dashboard", ["getPropertyRegistrationStatusCount"]),
    ...mapActions("dashboard", ["getPropertyRegistrationMaster"]),

    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },

    onApprove() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.editedItem.remarks = this.verifyItem.remarks;
          this.verifyItem.remarks = [];
          this.approvePartnerAccDetails(this.editedItem);
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
          this.rejectPartnerAccDetails(this.editedItem);
          this.details = false;
        });
    },



    onApprovePropertyData() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.propertyEditedItem.remarks = this.approvedPropertyData.remarks;
          this.propertyEditedItem.mh_service_fee = this.approvedPropertyData.mh_service_fee;
          this.approvedPropertyData.remarks = [];
          this.approvedPropertyData.mh_service_fee = [];

          this.approvePropertyAccDetails(this.propertyEditedItem);
          this.getAllPartnersData();
          this.details = false;
        });
    },


    onRejectPropertyData() {
        this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Reject Data?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {
          this.propertyEditedItem.remarks = this.approvedPropertyData.remarks;
          this.approvedPropertyData.reject = [];
          this.rejectPropertyAccDetails(this.propertyEditedItem);
          this.details = false;
        });
    },

    onApproveRoomData() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.roomsEditedItem.remarks = this.approvedRoomData.remarks;
          this.approvedRoomData.remarks = [];
          this.approveRoomAccDetails(this.roomsEditedItem);
         // console.log("this.roomsEditedItem",this.roomsEditedItem)
          this.details = false;
        });
    },


    onRejectRoomData() {
        this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Reject Data?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {
            this.roomsEditedItem.remarks = this.approvedRoomData.remarks;
          this.approvedRoomData.reject = [];
          this.rejectRoomAccDetails(this.roomsEditedItem);
          this.details = false;
        });
    },

    showPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.propertyEditedItem = Object.assign({}, item);
      this.propertyEditedItem.partner_id = item.partner_id;
      this.propertyEditedItem.partner_sub_id = item.partner_sub_id;
      this.propertyDataDialog = true;
      this.getRoomsDetailsForAdmin(this.propertyEditedItem);
    },
    showRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.roomsEditedItem = Object.assign({}, item);
      this.roomsEditedItem.partner_id = item.partner_id;
      this.roomsEditedItem.partner_sub_id = item.partner_sub_id;
      // this.roomsEditedItem.partner_sub_id = item.partner_sub_id;
      this.roomsDataDialog = true;
    },
    openRoomsDialog() {
      this.roomDetails.partner_id = this.propertyEditedItem.partner_id;
      this.roomDetails.partner_sub_id = this.propertyEditedItem.partner_sub_id;
      this.roomDetails.partner_name = this.propertyEditedItem.partner_name;
      // this.roomDetails.partner_phone = this.propertyEditedItem.partner_phone;
      this.roomDetails.sub_partner_name =
        this.propertyEditedItem.sub_partner_name;
      this.roomDetails.property_name = this.propertyEditedItem.property_name;
      this.roomDetails.sub_property_name =
        this.propertyEditedItem.sub_property_name;
      this.roomDetails.property_txn_id = this.propertyEditedItem.txn_id;

      this.roomsDialog = true;
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.details = true;
      this.getPropertyDetailsForAdmin(this.editedItem);
    },

    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhapFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },

    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      this.partner_pic = [];
      this.chancelled_cheque = [];
      this.mb_certificate = [];
      this.property_tax = [];
      this.fire_safety = [];
    },
    openApprovalPartnersDialog() {
      this.getpropertyPartnerRegApprovalStatus();
      this.partnerApprovalDialog = true;
    },
    getClickableProperty(item){
      this.getPropertyDisplayCountOfAdmin(item);
      this.property_count_forAdmin = true;
    },
    async reloadPage() {
      this.$router.go(0);
      window.location.reload();
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

