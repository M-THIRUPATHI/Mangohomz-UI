<template>
  <div>
    <q-page style="padding-top: 150px" class="q-pa-md">
      <q-table
      style="font-family: verdana"
        :data="equipment_partnersData_forAdmin_rows"
        :columns="equipment_partnersData_forAdmin_columns"
        :rows-per-page-options="[25,50,75,100,0]"
        dense
        :selected.sync="selected"
        :grid="mode === 'grid'"
        :filter="filter"
        color="green"
        separator="cell"
      >
      <template v-slot:top-right="props">
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


<download-excel
      v-if="equipment_partnersData_forAdmin_rows.length != 0"
      :data="equipment_partnersData_forAdmin_rows"
   :fields="json_fields"
      :header="headerValue"
      worksheet="MH MEDICAL Verified Partners (MHMEP)"
      :name="
        `${excel_date}_MedicalEquipmentPartnerApprovals.xls`
      "
    >
      <q-icon color="primary" name="mdi-file-excel" size="22px" />
      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
        >Download Excel
      </q-tooltip>
    </download-excel>

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
      </q-table>
    </q-page>
    <q-dialog v-model="partnerApprovalDialog" maximized persistent>
      <q-card>
        <q-toolbar class="bg-primary q-mb-xl dense">
          <q-toolbar-title class="text-h6 text-bold text-white">{{title3}}</q-toolbar-title>
          <q-btn
            icon="mdi-close"
            dense
            flat
            color="white"
            @click="closepartnerApprovalDialog()"
          />
        </q-toolbar>
        <div class="row q-col-gutter-sm q-ma-xs"  style="padding-top:0px">
      <div class="col-12">
        <div class="q-pa-md">
        <q-chip square clickable @click="getClickableData('all')" >
          <q-avatar color="primary" text-color="white">{{
            this.equipment_partner_registration_status_count.length == 0
              ? "0"
              : parseInt(
                  this.equipment_partner_registration_status_count[0].pcount
                ) +
                parseInt(
                  this.equipment_partner_registration_status_count[0].acount
                ) +
                parseInt(
                  this.equipment_partner_registration_status_count[0].rcount
                ) +
                parseInt(
                  this.equipment_partner_registration_status_count[0].vcount
                )
          }}</q-avatar>
          All
        </q-chip>
        <q-chip
          square
          clickable

          @click="getEquipmentRegistrationStatusCount('Approved');getClickableData('approved')"
        >
          <q-avatar color="secondary" text-color="white">{{
            this.equipment_partner_registration_status_count.length == 0
              ? "0"
              : this.equipment_partner_registration_status_count[0].acount
          }}</q-avatar>
          Approved
        </q-chip>
        <q-chip
          square
          clickable


          @click="getEquipmentRegistrationStatusCount('verified');getClickableData('verified')"
        >
          <q-avatar color="primary" text-color="white">{{
            this.equipment_partner_registration_status_count.length == 0
              ? "0"
              : this.equipment_partner_registration_status_count[0].vcount
          }}</q-avatar>
          verified
        </q-chip>
        <q-chip
          square
          clickable


          @click="getEquipmentRegistrationStatusCount('rejected');getClickableData('rejected')"
        >
          <q-avatar color="red" text-color="white" >{{
            this.equipment_partner_registration_status_count.length == 0
              ? "0"
              : this.equipment_partner_registration_status_count[0].rcount
          }}</q-avatar>
          Rejected
        </q-chip>
        <q-chip
          square
          clickable

          @click="getEquipmentRegistrationStatusCount('pending');getClickableData('pending')"
        >
          <q-avatar color="orange" text-color="white">{{
            this.equipment_partner_registration_status_count.length == 0
              ? "0"
              : this.equipment_partner_registration_status_count[0].pcount
          }}</q-avatar>
          Pending
        </q-chip>

      </div>
    </div>
  </div>
  <q-table  style="font-family: verdana"
        :data="equipment_all_count_for_admin"
        :columns="med_partners_approvals_data_columns"
         :rows-per-page-options="[25,50,75,100,0]"

        dense
        v-if="this.count_admin_rows== true"
        row-key="partner_sub_id"
        separator="cell"
        :grid="mode === 'grid'"
        :filter="filter"
        :selected.sync="selected"
        color="green"
        >
        <template v-slot:top-right="props" >
          <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: 10px;
                    "
                  >
<q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width:400px;" >
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


<download-excel
      v-if="equipment_all_count_for_admin.length != 0"
      :data="equipment_all_count_for_admin"
   :fields="json_fields"
      :header="headerValue1"
      worksheet="MH MEDICAL Verified Partners (MHMEP)"
      :name="
        `${excel_date}_MedicalEquipmentPartnerApprovals.xls`
      "
    >
      <q-icon color="primary" name="mdi-file-excel" size="22px" />
      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
        >Download Excel
      </q-tooltip>
    </download-excel>

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
        </q-table>
               <q-table style="font-family: verdana" :title="title3"
        :data="med_partners_approvals_data_rows"
        :columns="med_partners_approvals_data_columns"
        :rows-per-page-options="[25,50,75,100,0]"
        dense
        v-if="this.count_admin_rows != true"
        row-key="partner_sub_id"
        separator="cell"
        :grid="mode === 'grid'"
        :filter="filter"
        :selected.sync="selected"
        color="green"
        >
        <template v-slot:top-right="props">
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


<download-excel
      v-if="med_partners_approvals_data_rows.length != 0"
      :data="med_partners_approvals_data_rows"
   :fields="json_fields"
      :header="headerValue2"
      worksheet="MH MEDICAL Verified Partners (MHMEP)"
      :name="
        `${excel_date}_MedicalEquipmentPartnerApprovals.xls`
      "
    >
      <q-icon color="primary" name="mdi-file-excel" size="22px" />
      <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
        >Download Excel
      </q-tooltip>
    </download-excel>

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
        </q-table>
      </q-card>
      <q-btn dense flat icon="close" @click="this.partnerApprovalDialog=false">
        <q-tooltip class="bg-primary text-white">Close</q-tooltip>
      </q-btn>
    </q-dialog>
    <q-dialog
      v-model="addDataDialog"
      maximized
      transition-show="slide-left"
      transition-hide="slide-right"
      persistent
    >
      <q-card>
        <q-bar class="bg-primary">
          <div class="text-h6 text-white">{{ title }}</div>
          <q-space />
          <q-btn v-close-popup>
            <q-icon name="close" color="white"></q-icon>
            <q-tooltip>close</q-tooltip>
          </q-btn>
        </q-bar>
        <!-- <q-form @submit="onSubmit" ref="equipmentPartnerForm"> -->
        <q-stepper v-model="step" color="primary" animated>
          <q-step
            :name="1"
            title="Basic Details"
            icon="settings"
            :done="step > 1"
          >
            <q-form ref="agentFormBasic">
              <div class="q-pa-md row q-gutter-md  ">
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="equipmentPartnerForm.name"
                  label="Equipment Partner Name *"
                  hide-bottom-space
                  style="width:250px"
                  label-color="black"
                  :rules="[required('Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="equipmentPartnerForm.alias_name"
                  label="Equipment Partner Alias Name *"
                  hide-bottom-space
                  style="width:250px"
                  label-color="black"
                  :rules="[required('Alias Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>

                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="equipmentPartnerForm.phone"
                  label="Phone"
                  lazy-rules
                  mask="##########"
                  fill-mask
                  style="width:250px"
                  label-color="black"
                  :rules="[required('Phone no'), phone()]"
                  ><template v-slot:prepend>
                    <q-icon name="mdi-phone" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="equipmentPartnerForm.fax"
                  lazy-rules
                  mask="##########"
                  fill-mask
                  label="Fax"
                  style="width:250px"
                  label-color="black"
                  :rules="[phone()]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-whatsapp" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.email_id"
                  label="Email"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width:250px"
                  :rules="[required('Email'), email()]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-email" color="secondary" />
                  </template>
                </q-input>

                <q-input
                  class="col-2"
                  dense
                  outlined
                  v-model="equipmentPartnerForm.description"
                  label="Description"
                  lazy-rules
                  style="width:250px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-comment" color="secondary" />
                  </template>
                </q-input>
              </div>
            </q-form>
            <q-stepper-navigation>
              <q-btn
                @click="
                  () => {
                    this.$refs.agentFormBasic.validate().then(valid => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 2;
                      }
                    });
                  }
                "
                color="primary"
                label="Continue"
              />
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="2"
            title="Address"
            icon="create_new_folder"
            :done="step > 2"
          >
            <q-form ref="agentFormAddress">
              <div class="q-pa-md row q-gutter-md  items-start">
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.building_no"
                  label="House/Flat No *"
                  lazy-rules
                  label-color="black"
                  :rules="[required('House')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-home-city" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.street"
                  label="Street/Colony Name*"
                  lazy-rules
                  label-color="black"
                  :rules="[required('Street/Colony')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-highway" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.land_mark"
                  label="Landmark"
                  label-color="black"
                  :rules="[required('Landmark')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-map-marker-circle" color="secondary" />
                  </template>
                </q-input>

                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.city"
                  label="City"
                  label-color="black"
                  :rules="[required('City')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-map-marker-circle" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.state"
                  label="State"
                  label-color="black"
                  :rules="[required('State')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-map-marker-circle" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.country"
                  label="Country"
                  label-color="black"
                  :rules="[required('Country')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-map-marker-circle" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  dense
                  outlined
                  lazy-rules
                  mask="######"
                  v-model="equipmentPartnerForm.pin_code"
                  label="Pincode"
                  label-color="black"
                  :rules="[required('Pincode'), pinNumber()]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-map-marker-circle" color="secondary" />
                  </template>
                </q-input>
              </div>
            </q-form>

            <q-stepper-navigation class="q-pa-md q-gutter-md">
              <q-btn
                @click="
                  () => {
                    this.$refs.agentFormAddress.validate().then(valid => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 3;
                      }
                    });
                  }
                "
                color="primary"
                label="Continue"
              />
              <q-btn
                outline
                @click="step = 1"
                color="primary"
                label="Back"
                class="q-ml-sm"
                label-color="black"
              />
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="3"
            :done="step > 3"
            title="Statutory Documents"
            icon="assignment"
          >
            <q-form ref="agentFormStaDocs">
              <div class="q-pa-md row q-gutter-md  items-start">
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.pan"
                  label="PAN"
                  label-color="black"
                  mask="AAAAA####A"
                  :rules="[required('Pancard'), panNumber()]"
                />
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.aadhar"
                  label="AADHAAR"
                  label-color="black"
                  mask="####-####-####"
                  :rules="[required('AAdhaar'), addhaarNumber()]"
                />
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.gstin"
                  label="GSTIN"
                  label-color="black"
                  mask="##AAAAA####A#A#"
                  :rules="[required('GST'), gstNumber()]"
                />
              </div>
              <div class="q-pa-md row q-gutter-md  items-start">
                <q-file
                  style="width:250px"
                  class="hint-bold"
                  dense
                  filled
                  v-model="pan_card_file"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="PAN Card"
                  :rules="[required('Pancard Document')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
                <q-file
                  style="width:250px"
                  class="hint-bold"
                  dense
                  filled
                  v-model="addhaar_no"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  :rules="[required('Aadhaar card')]"
                  hint="AADHAAR Card"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
                <q-file
                  style="width:250px"
                  class="hint-bold"
                  dense
                  filled
                  v-model="gst_tin"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="GSTIN Certificate"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
                <q-file
                  style="width:250px"
                  class="hint-bold"
                  dense
                  filled
                  v-model="mh_agreement"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="MH Agreement Document"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>

                <q-file
                  style="width:250px"
                  class="hint-bold"
                  dense
                  filled
                  v-model="partner_pic"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Equipment Partner Photo"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
                <q-file
                  style="width:250px"
                  class="hint-bold"
                  dense
                  filled
                  v-model="mb_certificate"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Municipal Business Certificate"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
                <!-- <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="foodPartnerForm.file_upload8"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Latest Property Tax Receipt"
                /> -->
                <!-- <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="transportPartnerForm.file_upload9"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Food Safety Certificate"
                /> -->
              </div>
            </q-form>
            <q-stepper-navigation class="q-pa-md q-gutter-md">
              <q-btn
                @click="
                  () => {
                    this.$refs.agentFormStaDocs.validate().then(valid => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 4;
                      }
                    });
                  }
                "
                color="primary"
                label="Continue"
              />
              <q-btn
                outline
                @click="step = 2"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="4"
            :done="step > 4"
            title="Bank Details"
            icon="assignment"
          >
            <q-form ref="agentFormBankDetails">
              <div class="q-pa-md row q-gutter-md  items-start">
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.bankAccountNo"
                  label="Bank A/C No"
                  label-color="black"
                  :rules="[required('Bank A/C no')]"
                />
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.bankName"
                  label="Bank Name"
                  label-color="black"
                  :rules="[required('Bank Name')]"
                />
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.branchName"
                  label="Branch Name"
                  label-color="black"
                  :rules="[required('Branch')]"
                />
                <q-input
                  dense
                  outlined
                  v-model="equipmentPartnerForm.ifsc"
                  label="IFSC Code"
                  label-color="black"
                  :rules="[required('IFSC code')]"
                />
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="equipmentPartnerForm.file_upload5"
                  type="file"
                  accept=".pdf, pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Cancelled Cheque"
                />
              </div>
            </q-form>
            <q-stepper-navigation class="q-pa-md q-gutter-md">
              <q-btn
                color="secondary"
                label="Submit"
                @click="onSubmit"
                :disable="this.equipmentPartnerForm.accept == false"
              />
              <q-btn
                outline
                @click="step = 3"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>

        </q-stepper>
        <!-- </q-form> -->
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
              View of Equipment Partner Registration Details:
              {{ editedItem.agent_name }}
            </div>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

        </q-header>
        <div class="row q-col-gutter-sm  q-py-sm " style="padding-top:50px">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Basic Details
                </q-bar>
              <q-card-section class="q-pa-none ">
                <div style="height: 250px;">
                  <div
                    class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                  >
                    <div class="col-4 text-left text-black">Name</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.agent_name }}
                    </div>
                    <div class="col-4 text-left text-black ">Phone</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.phone }}
                    </div>
                    <div class="col-4 text-left text-black ">Whatsapp</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.fax }}
                    </div>
                    <div class="col-4 text-left text-black ">Email</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.email_id }}
                    </div>
                    <div class="col-4 text-left text-black ">Aaadhaar</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.aadhar }}
                    </div>
                    <div class="col-4 text-left text-black ">Pan Card</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.pan }}
                    </div>

                    <div class="col-4 text-left text-black">Description</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.description }}
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
                <div style="height: 250px;">
                  <div
                    class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                  >
                    <div class="col-4 text-left ">House No</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.building_no }}
                    </div>
                    <div class="col-4 text-left ">Street</div>
                    <div class="col-8 text-left text-grey">: {{ editedItem.street }}</div>
                    <div class="col-4 text-left ">Landmark</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.land_mark }}
                    </div>
                    <div class="col-4 text-left ">City</div>
                    <div class="col-8 text-left text-grey">: {{ editedItem.city }}</div>
                    <div class="col-4 text-left ">State</div>
                    <div class="col-8 text-left text-grey">: {{ editedItem.state }}</div>
                    <div class="col-4 text-left ">Country</div>
                    <div class="col-8 text-left text-grey">
                      : {{ editedItem.country }}
                    </div>
                    <div class="col-4 text-left ">Pincode</div>
                    <div class="col-8 text-left text-grey">
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
                <div style="height: 250px;">
                  <div style="height: 250px;">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-4 text-left ">Account No</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.bankAccountNo }}
                      </div>
                      <div class="col-4 text-left ">Bank Name</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.bankName }}
                      </div>
                      <div class="col-4 text-left ">Branch</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.branchName }}
                      </div>
                      <div class="col-4 text-left ">IFSC Code</div>
                      <div class="col-8 text-left text-grey">: {{ editedItem.ifsc }}</div>
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
                    <div class="col-3">
                <tr>
                  <td class="text-left">Pancard</td>
                  <!-- <td class="text-left">{{ editedItem.pan_loc }}</td> -->
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
                      @click="showDocument(editedItem.gst_tin_loc, 'GST TIN')"
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
                          'Agreemnet Doc'
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
                          'Partner Photo'
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
                 </div>
              </tbody>
            </q-markup-table>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px "
        v-if="this.editedItem.status == 'approved'"
        >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Equipment Medical Store
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="medical_stores_rows" :columns="medical_stores_columns"  :rows-per-page-options="[25,50,75,100,0]"

                    dense separator="cell" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected"
                    color="green" hide-pagination>
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn color="primary" @click="showMedicalStoreData(props.row)" icon="las la-eye" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn>
                        <!-- <q-btn color="secondary" @click="editMedicalStoreData(props.row)" icon="mdi-pencil" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn> -->
                      </q-td>
                    </template>
                    <template v-slot:body-cell-medical_store_status="props">
              <q-td :props="props">
                <q-chip :color="
                  props.row.medical_store_status == 'erified'
                    ? 'primary'
                    : props.row.medical_store_status == 'Pending'
                      ? 'orange'
                      : props.row.medical_store_status == 'approved'
                      ? 'secondary'
                      : props.row.medical_store_status == 'rejected'
                      ? 'red'
                      : 'negative'

                " text-color="white" dense>{{ props.row.status }}
                </q-chip>
              </q-td>
            </template>
                  </q-table>
                  <!-- <q-table :data="equipment_item_rows" :columns="equipment_item_columns"  :rows-per-page-options="[25,50,75,100,0]"

                    dense row-key="sno" :filter="filter" :selected.sync="selected" separator="cell"
                    :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="primary" size="sm" icon-right="mdi-eye" @click="
                          showDocument(
                            props.row.equipment_image,
                            'Equipment Image'
                          )
                        " />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="green" icon="mdi-pencil" size="sm" @click="editEquipmentForm(props.row)">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table> -->
                </div>
              </q-card>
            </div>
          </div>
         <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Equipment Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="equipment_items_forAdmin_rows"
                    :columns="equipment_items_forAdmin_columns"
                    :rows-per-page-options="[25,50,75,100,0]"
                    dense
                    row-key="sno"
                    :filter="filter"
                    :selected.sync="selected"
                    separator="cell"
                    :hide-header="mode === 'grid'"
                    :grid="mode === 'grid'"
                  >
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn
                          class="text-bold"
                          label="view"
                          color="secondary"
                          size="sm"
                          icon-right="mdi-eye"
                          @click="
                            showDocument(
                              props.row.equipment_image,
                              'Equipment Image'
                            )
                          "
                        />
                      </q-td>
                    </template>
                  </q-table>
                </div>
              </q-card>
            </div>
          </div>
         </div>

          <q-card-section class="q-pa-xs"  v-if="this.editedItem.status != 'approved'" >
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
              <q-card v-show="showPanDoc" style="height:600px">
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
          <q-toolbar>
              <q-toolbar-title v-if="this.editedItem.status != 'approved'">
                <div class="q-pa-sm q-pl-md row justify-end">
                  <div class="cursor-pointer non-selectable">
                  <q-btn no-caps color="secondary" @click="onApprove">Approve
                  </q-btn>
                  </div>
                  <div class="cursor-pointer non-selectable">
                  <q-btn color="negative" no-caps @click="onReject"
                    >Reject</q-btn
                  >
                  </div>
                </div>
              </q-toolbar-title>
            </q-toolbar>
        </div>
      </q-layout>
<q-footer elevated> </q-footer>
 <!-- Sachin Medical Store View Start -->
 <q-dialog v-model="viewMedStoresData" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div class="text-h6">
                View of Medical Store Details:
                {{ editedMedStoresObj.medical_store_name }}
              </div>
              <q-space />
              <!-- <q-chip clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
                @click="openequipmentLocationForm()">
                Add Medical Item
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
                    <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                      <!-- <div class="col-5 text-left text-black">Lead partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.agent_name }}
                      </div>
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.equipment_sub_name }}
                      </div> -->
                      <!-- <div class="col-5 text-left text-black">Lead Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.partner_id }}
                      </div>
                      <div class="col-5 text-left text-black">Sub Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.partner_sub_id }}
                      </div> -->
                      <div class="col-5 text-left text-black">
                        Medical Store Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.medical_store_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.email_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Description</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.description }}
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
                  <div style="height: 250px">
                    <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                      <div class="col-4 text-left">House No</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.building_no }}
                      </div>
                      <div class="col-4 text-left">Street</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.street }}
                      </div>
                      <div class="col-4 text-left">Landmark</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.land_mark }}
                      </div>
                      <div class="col-4 text-left">Country</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.country }}
                      </div>
                      <div class="col-4 text-left">State</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.state_name }}
                      </div>
                      <div class="col-4 text-left">City</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.city_name }}
                      </div>
                      <div class="col-4 text-left">Pincode</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.pin_code }}
                      </div>
                      <div class="col-4 text-left">Latitude</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.latitude }}
                      </div>
                      <div class="col-4 text-left">Longitude</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.longitude }}
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
                  <div style="height: 250px">
                    <div style="height: 250px">
                      <div class="
                          row
                          text-black text-bold
                          q-ma-xs q-pa-md
                          text-body1
                        ">
                        <div class="col-4 text-left">Medical Store Image 1</div>
                        <div class="col-8 text-left text-grey">
                          :
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.upload_image1,
                              'upload_image1'
                            )
                          " />
                        </div>
                        <div class="col-4 text-left">Medical Store Image 2</div>
                        <div class="col-8 text-left text-grey">
                          :
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.upload_image2,
                              'upload_image2'
                            )
                          " />
                        </div>
                        <div class="col-4 text-left">Medical Store Image 3</div>
                        <div class="col-8 text-left text-grey">
                          :
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.upload_image3,
                              'upload_image3'
                            )
                          " />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <q-resize-observer />
          </div>
          <!-- <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-file-document" color="black" size="1.5em" />Documents
                </q-bar>
                <tbody>
                  <div class="row">
                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 1</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.medical_store_image1,
                              'upload_image1'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 2</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedMedStoresObj.medical_store_image2, 'upload_image2')
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 3</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedMedStoresObj.medical_store_image3, 'upload_image3')
                          " />
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
              </q-markup-table>
            </div>
          </div> -->
          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Equipment Item Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="equipment_items_forAdmin_rows" :columns="equipment_items_forAdmin_columns"  :rows-per-page-options="[25,50,75,100,0]"

                    dense separator="cell" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected"
                    color="green" hide-pagination>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="secondary" @click="editEquipmentForm(props.row)" icon="mdi-pencil" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn
                              color="primary"
                              @click="showequipmentdetails(props.row)"
                              icon="las la-eye"
                              size="sm"
                              ><q-tooltip :disable="$q.platform.is.mobile"
                                >View</q-tooltip
                              ></q-btn
                            >
                      </q-td>
                    </template>
                    <template v-slot:body-cell-medical_store_status="props">
              <q-td :props="props">
                <q-chip :color="
                  props.row.medical_store_status == 'verified'
                    ? 'primary'
                    : props.row.medical_store_status == 'pending'
                      ? 'orange'
                      : props.row.medical_store_status == 'approved'
                      ? 'secondary'
                      : props.row.medical_store_status == 'rejected'
                      ? 'red'
                      : 'negative'

                " text-color="white" dense>{{ props.row.medical_store_status }}
                </q-chip>
              </q-td>
            </template>
                  </q-table>
                  <!-- <q-table :data="equipment_item_rows" :columns="equipment_item_columns"  :rows-per-page-options="[25,50,75,100,0]"

                    dense row-key="sno" :filter="filter" :selected.sync="selected" separator="cell"
                    :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="primary" size="sm" icon-right="mdi-eye" @click="
                          showDocument(
                            props.row.equipment_image,
                            'Equipment Image'
                          )
                        " />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="green" icon="mdi-pencil" size="sm" @click="editEquipmentForm(props.row)">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table> -->
                </div>
              </q-card>
            </div>
          </div>
          <div>
            <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
              :maximized="maximizedToggle" persistent>
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
                    <iframe :src="url" class="wrapper" width="100%" height="600px" frameborder="0"></iframe>
                  </div>
                </q-card>
              </q-layout>
            </q-dialog>
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
                  v-model="verifyItem.medical_store_remarks"
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
            <q-toolbar-title>
              <div class="q-pa-sm q-pl-md row justify-end">
                <div class="cursor-pointer non-selectable">
                  <q-btn no-caps color="secondary" @click="onMedicalstoreApprove"
                    >Approve
                  </q-btn>
                </div>
                <div class="cursor-pointer non-selectable">
                  <q-btn color="negative" no-caps @click="onMedicalstoreReject"
                    >Reject</q-btn
                  >
                </div>
              </div>
            </q-toolbar-title>
          </q-toolbar>
        </q-layout>
      </q-dialog>
       <!-- Sachin Medical Store View End -->
       <q-dialog v-model="viewEqpItemData" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div class="text-h6">
                View of Equipment Item Details:
                {{ editedMedStoresObj.medical_store_name }}
              </div>
              <q-space />
              <!-- <q-chip clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
                @click="openequipmentLocationForm()">
                Add Medical Item
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
                    <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                      <!-- <div class="col-5 text-left text-black">Lead partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.agent_name }}
                      </div>
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.equipment_sub_name }}
                      </div> -->
                      <!-- <div class="col-5 text-left text-black">Lead Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.partner_id }}
                      </div>
                      <div class="col-5 text-left text-black">Sub Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.partner_sub_id }}
                      </div> -->
                      <div class="col-5 text-left text-black">
                        Medical Store Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.medical_store_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.email_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Description</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.description }}
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
                  Equipment Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                      <div class="col-4 text-left">Item Name</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedEqpDetails.item_name }}
                      </div>
                      <div class="col-4 text-left">Units</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedEqpDetails.units }}
                      </div>
                      <div class="col-4 text-left">price</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedEqpDetails.price }}
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
                  <div style="height: 250px">
                    <div style="height: 250px">
                      <div class="
                          row
                          text-black text-bold
                          q-ma-xs q-pa-md
                          text-body1
                        ">
                        <div class="col-4 text-left">Equipment Image </div>
                        <div class="col-8 text-left text-grey">
                          :
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedEqpDetails.equipment_image,
                              'upload_image1'
                            )
                          " />
                        </div>


                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <q-resize-observer />
          </div>
          <!-- <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-file-document" color="black" size="1.5em" />Documents
                </q-bar>
                <tbody>
                  <div class="row">
                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 1</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.medical_store_image1,
                              'upload_image1'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 2</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedMedStoresObj.medical_store_image2, 'upload_image2')
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 3</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedMedStoresObj.medical_store_image3, 'upload_image3')
                          " />
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
              </q-markup-table>
            </div>
          </div> -->
          <!-- <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Equipment Item Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="equipment_items_forAdmin_rows" :columns="equipment_items_forAdmin_columns"  :rows-per-page-options="[25,50,75,100,0]"

                    dense separator="cell" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected"
                    color="green" hide-pagination>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="secondary" @click="editEquipmentForm(props.row)" icon="mdi-pencil" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn
                              color="primary"
                              @click="showequipmentdetails(props.row)"
                              icon="las la-eye"
                              size="sm"
                              ><q-tooltip :disable="$q.platform.is.mobile"
                                >View</q-tooltip
                              ></q-btn
                            >
                      </q-td>
                    </template>
                  </q-table>

                </div>
              </q-card>
            </div>
          </div> -->
          <div>
            <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
              :maximized="maximizedToggle" persistent>
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
                    <iframe :src="url" class="wrapper" width="100%" height="600px" frameborder="0"></iframe>
                  </div>
                </q-card>
              </q-layout>
            </q-dialog>
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
                  v-model="verifyItem.equipment_remarks"
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
            <q-toolbar-title>
              <div class="q-pa-sm q-pl-md row justify-end">
                <div class="cursor-pointer non-selectable">
                  <q-btn no-caps color="secondary" @click="onequipmentApprove"
                    >Approve
                  </q-btn>
                </div>
                <div class="cursor-pointer non-selectable">
                  <q-btn color="negative" no-caps @click="onequipmentReject"
                    >Reject</q-btn
                  >
                </div>
              </div>
            </q-toolbar-title>
          </q-toolbar>
        </q-layout>
      </q-dialog>

    </q-dialog>
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
            @click="openPartnerApprovalDialog()"
          >
          View All MHMEP
        </q-chip>


        <q-btn flat round dense icon="search">
          <q-popup-edit :cover="false" :offset="[0, 10]" v-slot="scope">
            <q-input
              color="secondary"
              v-model="label2"
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

const equipmentRegistrationMaster = () => {
  return {
    approved:"",
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
    file_upload: "",
    accept: false,
    mb_certificate: [],
    gst_tin: [],
    addhaar_no: [],
    pan_card_file: [],
    mh_agreement: [],
    partner_pic: []
  };
};
export default {
  data() {
    return {
      count_admin_rows:false,
      dialogTitle: "",
      ...validations,
      viewMedStoresData: false,
      viewEqpItemData: false,
      title: "MH Medical Equipment Partner (MHMEP) Approval",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
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
      partnerApprovalDialog: false,
      title2: "MH MEDICAL Verified Partners (MHMEP) ",
      title3: "MH MEDICAL Approved Partners (MHMEP) ",
      equipmentPartnerForm: {
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

        accept: false
      },
      editedMedStoresObj: {
        account_id: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
        partner_sub_name: "",
        medical_store_id: "",
        medical_store_name: "",
        description: "",
        phone: "",
        email_id: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "",
        state_id: "",
        state_name: "",
        city_id: "",
        city_name: "",
        pin_code: "",
        latitude: "",
        longitude: "",
        medical_store_image1: "",
        medical_store_image2: "",
        medical_store_image3: ""
      },
      editedEqpDetails:{
      equipment_id: "",
      equipment_sub_id: "",
    },
      pagination: {
        rowsPerPage: 10
      },
       verifyItem: {
        remarks: "",
        reject: "",
        equipment_remarks: "",
        medical_store_remarks: "",
        // userDetails: ""
      },
      mode: "list",
      label2:"",
      filter: "",
      addDataDialog: false,
      selected: [],
      data: [],
      url: "",
      details: false,
      visible: false,
      showPanDoc: false,
      maximizedToggle: true,
      small: false,
      headerValue:"MH MEDICAL Verified Partners (MHMEP)",
      headerValue1:"MH MEDICAL Approved Partners (MHMEP)",
      headerValue2:"MH MEDICAL ALL Partners (MHMEP)",

      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        "Sno": "index",
       "Status": "status",
        "Equipment Partner Name": "agent_name",
        "Equipment Sub Partner Name": "equipment_sub_name",
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
      property: state => state.dropdown.property_arr,
      equipment_partnersData_forAdmin_columns: state =>
        state.partners.equipment_partnersData_forAdmin_columns,
      med_partners_approvals_data_columns: (state) => state.partners.med_partners_approvals_data_columns,
      equipment_items_forAdmin_columns: (state) => state.partners.equipment_items_forAdmin_columns,
      medical_stores_rows: state => state.partners.medical_stores_rows,
      medical_stores_columns: state => state.partners.medical_stores_columns,
      med_partners_approvals_data_rows: state => state.partners.med_partners_approvals_data_rows,
      equipment_partner_registration_status_count: state => state.partners.equipment_partner_registration_status_count,
      equipment_all_count_for_admin: state=>state.partners.equipment_all_count_for_admin,
    }),
    ...mapGetters("partners", ["equipment_all_count_for_admin"]),

...mapGetters("partners", ["equipment_partner_registration_status_count"]),
    ...mapGetters("partners", ["equipment_partnersData_forAdmin_rows"]),
     ...mapGetters("partners", ["equipment_items_forAdmin_rows"]),
    //  ...mapGetters("partners", ["med_partners_approvals_data_rows"]),

  },
  mounted() {
    this.$store.dispatch("partners/getEquipmentRegistrationStatusCount");
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("partners/getMedicalPartnersForAdmin");
    this.$store.dispatch("partners/getEquipmentPartnerRegApprovalStatus");
    this.$store.dispatch("partners/getEquipmentApprovalDetails");
  },
  meta() {
    return {
      title: this.title
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    ...mapActions("partners", ["getAllEquipmentDetailsForAdmin"]),
    ...mapActions("partners", ["getEquipmentRegistrationStatusCount"]),
    ...mapActions("partners", [
      "equipmentRegistrationMasterAdd",
      "approvePartner"]),
      ...mapActions("partners", ["getEquipmentPartnerRegApprovalStatus"]),
       ...mapActions("partners", ["getEquipmentApprovalDetails"]),
        ...mapActions("partners", ["approveEquipmentRegDetails"]),
        ...mapActions("partners", ["approveMedicalstoreDetails"]),
        ...mapActions("partners", ["rejectMedicalstoreDetails"]),
        ...mapActions("partners", ["approveEquipmentDetails"]),
        ...mapActions("partners", ["rejectEquipmentDetails"]),
        ...mapActions("partners", ["rejectEquipmentRegDetails"]),
        ...mapActions("partners", ["getEquipmentItems"]),
        ...mapActions("partners", ["getMedicalStoresData"]),
        ...mapActions("partners", ["getEquipmentPartnerRegApprovalStatus"]),

    onSubmit() {
      this.$refs.agentFormSubmit.validate().then(success => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true
            })
            .onOk(() => {
              const formData = new FormData();
              formData.append("pancard", this.pan_card_file);
              formData.append("addhaar", this.addhaar_no);
              formData.append("gst_tin", this.gst_tin);
              formData.append("mh_agreement", this.mh_agreement);
              formData.append("partner_pic", this.partner_pic);
              formData.append("mb_certificate", this.mb_certificate);

              formData.append(
                "equipmentDetails",
                JSON.stringify(this.equipmentPartnerForm)
              );
              this.equipmentRegistrationMasterAdd(formData);
              this.resetFiles();

              this.equipmentPartnerForm = equipmentRegistrationMaster();
              this.$refs.agentFormSubmit.resetValidation();
              this.addDataDialog = false;
            })
            .onCancel(() => {
              this.resetFiles();
              this.getEquipmentPartnerRegApprovalStatus();
              this.addDataDialog = true;
            });
        }
      });
    },

    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.equipment_id = item.equipment_id;
      this.editedItem.equipment_sub_name = item.equipment_sub_name;
      this.details = true;
      this.getEquipmentItems(this.editedItem)
      this.getMedicalStoresData(this.editedItem)
    },
    showMedicalStoreData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedMedStoresObj = Object.assign({}, item);
      this.editedMedStoresObj.account_id = item.account_id;
      this.editedMedStoresObj.txn_id = item.txn_id;
      this.editedMedStoresObj.partner_id = item.equipment_id;
      this.editedMedStoresObj.partner_name = item.agent_name;
      this.editedMedStoresObj.partner_sub_id = item.equipment_sub_id;
      this.editedMedStoresObj.partner_sub_name = item.equipment_sub_name;
      // this.editedMedStoresObj.medical_store_id = item.medical_store_id;
      this.editedMedStoresObj.medical_store_name = item.medical_store_name;
      this.editedMedStoresObj.description = item.description;
      this.editedMedStoresObj.phone = item.phone;
      this.editedMedStoresObj.email_id = item.email;
      this.editedMedStoresObj.building_no = item.building_no;
      this.editedMedStoresObj.street = item.street;
      this.editedMedStoresObj.land_mark = item.land_mark;
      this.editedMedStoresObj.country = item.country;
      this.editedMedStoresObj.state_id = item.state_id;
      this.editedMedStoresObj.state_name = item.state_name;
      this.editedMedStoresObj.city_id = item.city_id;
      this.editedMedStoresObj.city_name = item.city_name;
      this.editedMedStoresObj.pin_code = item.pin_code;
      this.editedMedStoresObj.latitude = item.latitude;
      this.editedMedStoresObj.longitude = item.longitude;
      this.editedMedStoresObj.medical_store_image1 = {
        name: item.upload_image1 ?? "",
      };
      this.editedMedStoresObj.medical_store_image2 = {
        name: item.upload_image2 ?? "",
      };
      this.editedMedStoresObj.medical_store_image3 = {
        name: item.upload_image3 ?? "",
      };
      // this.editedMedStoresObj.medical_store_image1 = item.upload_image1;
      // this.editedMedStoresObj.medical_store_image2 = item.upload_image2;
      // this.editedMedStoresObj.medical_store_image3 = item.upload_image3;
      this.getEquipmentItems(this.editedMedStoresObj);
      this.viewMedStoresData = true;
    },
    showequipmentdetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedEqpDetails = Object.assign({}, item);
      this.editedEqpDetails.equipment_id = item.equipment_id;
      this.editedEqpDetails.equipment_sub_id = item.equipment_sub_id;



      this.viewEqpItemData = true;
    },
    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhepFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
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
          this.approveEquipmentRegDetails(this.editedItem);
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
          this.rejectEquipmentRegDetails(this.editedItem);
          this.details = false;
        });
    },
    onMedicalstoreApprove() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.editedMedStoresObj.medical_store_remarks = this.verifyItem.medical_store_remarks;
          this.verifyItem.medical_store_remarks = [];
          this.approveMedicalstoreDetails(this.editedMedStoresObj);
          this.details = false;
        });
    },
    onMedicalstoreReject() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Data?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.editedMedStoresObj.medical_store_remarks = this.verifyItem.medical_store_remarks;
          this.verifyItem.reject = [];
          this.rejectMedicalstoreDetails(this.editedMedStoresObj);
          this.details = false;
        });
    },

    onequipmentApprove() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.editedEqpDetails.equipment_remarks = this.verifyItem.equipment_remarks;
          this.verifyItem.equipment_remarks = [];
          this.approveEquipmentDetails(this.editedEqpDetails);
          this.details = false;
        });
    },
    onequipmentReject() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Data?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.editedEqpDetails.equipment_remarks = this.verifyItem.equipment_remarks;
          this.verifyItem.reject = [];
          this.rejectEquipmentDetails(this.editedEqpDetails);
          this.details = false;
        });
    },
    openPartnerApprovalDialog() {
      this.partnerApprovalDialog = true;
      this.count_admin_rows = false;
      this.getEquipmentApprovalDetails();
    },
    closepartnerApprovalDialog(){
      this.partnerApprovalDialog = false;
    },
    getClickableData(item){
this.getAllEquipmentDetailsForAdmin(item);
this.count_admin_rows = true;
    },
    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      this.partner_pic = [];
      this.chancelled_cheque = [];
      this.mb_certificate = [];
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
