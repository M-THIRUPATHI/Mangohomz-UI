<template>
  <div>
    <q-page style="padding-top: 120px" class="q-pa-md">
      <q-table style="font-family: verdana;padding-top: 20px;margin-top: 20px;" :data="transport_reg_admin_rows"
        :columns="approved_travel_partners_columns" :rows-per-page-options="[25, 50, 75, 100, 0]" dense
        :selected.sync="selected" :grid="mode === 'grid'" :filter="filter" color="green" separator="cell">
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn color="positive" @click="editItem(props.row)" label="Take Action" class="text-bold"
              size="sm"><q-tooltip :disable="$q.platform.is.mobile">Take Action</q-tooltip></q-btn>
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


          <download-excel v-if="transport_reg_admin_rows.length != 0" :data="transport_reg_admin_rows"
            :fields="json_fields" :header="headerValue" worksheet="MH Travel Verified Partners (MHTP)" :name="
              `${excel_date}_TravelPartnerApprovals.xls`
            ">
            <q-icon color="primary" name="mdi-file-excel" size="22px" />
            <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
            </q-tooltip>
          </download-excel>

        </template>
      </q-table>
      <q-dialog v-model="approvedPartnersDialog" maximized persistent>
        <q-card>
          <q-toolbar class="bg-primary q-mb-xl dense">
            <q-toolbar-title class="text-h6 text-bold text-white">{{ title3 }}</q-toolbar-title>



            <q-btn icon="mdi-close" dense flat color="white" @click="approvedPartnersDialog = false" />
          </q-toolbar>
          <div class="q-pa-md">
            <q-chip square clickable @click="getTransportClickableData('all')">
              <q-avatar color="primary" text-color="white">{{
                this.property_transport_registration_status_count.length == 0
                ? "0"
                : parseInt(
                  this.property_transport_registration_status_count[0].pcount
                ) +
                parseInt(
                  this.property_transport_registration_status_count[0].acount
                ) +
                parseInt(
                  this.property_transport_registration_status_count[0].rcount
                )
              }}</q-avatar>
              All
            </q-chip>
            <q-chip square clickable
              @click="getTransportRegistrationStatusCount('approved'); getTransportClickableData('approved')">
              <q-avatar color="secondary" text-color="white">{{
                this.property_transport_registration_status_count.length == 0
                ? "0"
                : this.property_transport_registration_status_count[0].acount
              }}</q-avatar>
              Approved
            </q-chip>
            <q-chip square clickable
              @click="getTransportRegistrationStatusCount('verified'); getTransportClickableData('verified')">
              <q-avatar color="primary" text-color="white">{{
                this.property_transport_registration_status_count.length == 0
                ? "0"
                : this.property_transport_registration_status_count[0].vcount
              }}</q-avatar>
              verified
            </q-chip>
            <q-chip square clickable
              @click="getTransportRegistrationStatusCount('rejected'); getTransportClickableData('rejected')">
              <q-avatar color="red" text-color="white">{{
                this.property_transport_registration_status_count.length == 0
                ? "0"
                : this.property_transport_registration_status_count[0].rcount
              }}</q-avatar>
              Rejected
            </q-chip>
            <q-chip square clickable
              @click="getTransportRegistrationStatusCount('pending'); getTransportClickableData('pending')">
              <q-avatar color="orange" text-color="white">{{
                this.property_transport_registration_status_count.length == 0
                ? "0"
                : this.property_transport_registration_status_count[0].pcount
              }}</q-avatar>
              Pending
            </q-chip>
          </div>

          <q-table :data="travel_admin_count_rows" :columns="approved_travel_partners_columns"
            :rows-per-page-options="[25, 50, 75, 100, 0]" dense v-if="this.count_admin_rows == true" row-key="transport_sub_id"
            separator="cell" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green">
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn color="positive" @click="editItem(props.row)" label="Take Action" class="text-bold"
                  size="sm"><q-tooltip :disable="$q.platform.is.mobile">Take Action</q-tooltip>
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


              <download-excel v-if="travel_admin_count_rows.length != 0" :data="travel_admin_count_rows"
                :fields="json_fields" :header="headerValue2" worksheet="MH Travel Verified Partners (MHTP)" :name="
                  `${excel_date}_TravelPartnerApprovals.xls`
                ">
                <q-icon color="primary" name="mdi-file-excel" size="22px" />
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                </q-tooltip>
              </download-excel>

            </template>
          </q-table>
          <q-table :data="approved_travel_partners_rows" :columns="approved_travel_partners_columns"
            :rows-per-page-options="[25, 50, 75, 100, 0]" dense v-if="this.count_admin_rows != true"
            row-key="transport_sub_id" separator="cell" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected"
            color="green">
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn color="positive" @click="editItem(props.row)" label="Take Action" class="text-bold"
                  size="sm"><q-tooltip :disable="$q.platform.is.mobile">Take Action</q-tooltip>
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


              <download-excel v-if="approved_travel_partners_rows.length != 0" :data="approved_travel_partners_rows"
                :fields="json_fields" :header="headerValue2" worksheet="MH Travel Verified Partners (MHTP)" :name="
                  `${excel_date}_TravelPartnerApprovals.xls`
                ">
                <q-icon color="primary" name="mdi-file-excel" size="22px" />
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                </q-tooltip>
              </download-excel>

            </template>
          </q-table>
        </q-card>

      </q-dialog>
      <q-dialog v-model="addDataDialog" persistent maximized transition-show="slide-left" transition-hide="slide-right">
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn v-close-popup flat>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <!-- <q-form @submit="onSubmit" ref="transpoterPartnerForm"> -->
          <q-stepper v-model="step" color="primary" animated>
            <q-step :name="1" title="Basic Details" icon="settings" :done="step > 1">
              <q-form ref="agentFormBasic">
                <div class="q-pa-md row q-gutter-md">
                  <q-input class="col-3" dense outlined v-model="transportPartnerForm.name"
                    label="Transport Partner Name *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                  <q-input class="col-3" dense outlined v-model="transportPartnerForm.alias_name"
                    label="Transport Partner Alias Name *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Alias Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>

                  <q-input class="col-3" dense outlined v-model="transportPartnerForm.phone" label="Phone" lazy-rules
                    mask="##########" fill-mask style="width: 250px" label-color="black"
                    :rules="[required('Phone no'), phone()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" /> </template></q-input>
                  <q-input class="col-3" dense outlined v-model="transportPartnerForm.fax" lazy-rules mask="##########"
                    fill-mask label="Alt Phone no / Whatsapp no" style="width: 250px" label-color="black"
                    :rules="[phone()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-whatsapp" color="secondary" /> </template></q-input>
                  <q-input dense outlined v-model="transportPartnerForm.email_id" label="Email" lazy-rules class="col-3"
                    hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" /> </template></q-input>

                  <q-input class="col-2" dense outlined v-model="transportPartnerForm.description" label="Description"
                    lazy-rules style="width: 250px" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-comment" color="secondary" /> </template></q-input>
                </div>
              </q-form>
              <q-stepper-navigation>
                <q-btn @click="
                  () => {
                    this.$refs.agentFormBasic.validate().then((valid) => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 2;
                      }
                    });
                  }
                " color="primary" label="Continue" />
              </q-stepper-navigation>
            </q-step>
            <q-step :name="2" title="Address" icon="create_new_folder" :done="step > 2">
              <q-form ref="agentFormAddress">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input dense outlined v-model="transportPartnerForm.building_no" label="House/Flat No *" lazy-rules
                    label-color="black" :rules="[required('House')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" /> </template></q-input>
                  <q-input dense outlined v-model="transportPartnerForm.street" label="Street/Colony Name*" lazy-rules
                    label-color="black" :rules="[required('Street/Colony')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" /> </template></q-input>
                  <q-input dense outlined v-model="transportPartnerForm.land_mark" label="Landmark" label-color="black"
                    :rules="[required('Landmark')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" /> </template></q-input>

                  <q-input dense outlined v-model="transportPartnerForm.city" label="City" label-color="black"
                    :rules="[required('City')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" /> </template></q-input>
                  <q-input dense outlined v-model="transportPartnerForm.state" label="State" :rules="[required('State')]"
                    label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" /> </template></q-input>
                  <q-input dense outlined v-model="transportPartnerForm.country" label="Country"
                    :rules="[required('Country')]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" /> </template></q-input>
                  <q-input dense outlined lazy-rules mask="######" v-model="transportPartnerForm.pin_code" label="Pincode"
                    label-color="black" :rules="[required('Pincode'), pinNumber()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" /> </template></q-input>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn @click="
                  () => {
                    this.$refs.agentFormAddress.validate().then((valid) => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 3;
                      }
                    });
                  }
                " color="primary" label="Continue" />
                <q-btn outline @click="step = 1" color="primary" label="Back" class="q-ml-sm" label-color="black" />
              </q-stepper-navigation>
            </q-step>
            <q-step :name="3" :done="step > 3" title="Statutory Documents" icon="assignment">
              <q-form ref="agentFormStaDocs">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input dense outlined v-model="transportPartnerForm.pan" label="PAN" label-color="black"
                    mask="AAAAA####A" :rules="[required('Pancard'), panNumber()]" />
                  <q-input dense outlined v-model="transportPartnerForm.aadhar" label="AADHAAR" label-color="black"
                    mask="####-####-####" :rules="[required('AAdhaar'), addhaarNumber()]" />
                  <q-input dense outlined v-model="transportPartnerForm.gstin" label="GSTIN" label-color="black"
                    mask="##AAAAA####A#AX" :rules="[required('GST'), gstNumber()]" />
                </div>
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-file style="width: 250px" class="hint-bold" dense filled v-model="pan_card_file" type="file"
                    accept=".pdf, pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="PAN Card" :rules="[required('Pancard Document')]">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template></q-file>
                  <q-file style="width: 250px" class="hint-bold" dense filled v-model="addhaar_no" type="file"
                    accept=".pdf, pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="AADHAAR Card" :rules="[required('Aadhaar card')]">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template></q-file>
                  <q-file style="width: 250px" class="hint-bold" dense filled v-model="gst_tin" type="file"
                    accept=".pdf, pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="GSTIN Certificate">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template></q-file>
                  <q-file style="width: 250px" class="hint-bold" dense filled v-model="mh_agreement" type="file"
                    accept=".pdf, pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="MH Agreement Document">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template></q-file>

                  <q-file style="width: 250px" class="hint-bold" dense filled v-model="partner_pic" type="file"
                    accept=".pdf, pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Transport Partner Photo">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template></q-file>
                  <q-file style="width: 250px" class="hint-bold" dense filled v-model="mb_certificate" type="file"
                    accept=".pdf, pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Business Certificate">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template></q-file>
                  <!-- <q-input
                style="width:250px"
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
                style="width:250px"
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
                <q-btn @click="
                  () => {
                    this.$refs.agentFormStaDocs.validate().then((valid) => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 4;
                      }
                    });
                  }
                " color="primary" label="Continue" />
                <q-btn outline @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>
            <q-step :name="4" :done="step > 4" title="Bank Details" icon="assignment">
              <q-form ref="agentFormBankDetails">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input dense outlined v-model="transportPartnerForm.bankAccountNo" label="Bank A/C No"
                    label-color="black" :rules="[required('Bank A/C no')]" />
                  <q-input dense outlined v-model="transportPartnerForm.bankName" label="Bank Name" label-color="black"
                    :rules="[required('Bank Name')]" />
                  <q-input dense outlined v-model="transportPartnerForm.branchName" label="Branch Name"
                    label-color="black" :rules="[required('Branch')]" />
                  <q-input dense outlined v-model="transportPartnerForm.ifsc" label="IFSC Code" label-color="black"
                    :rules="[required('IFSC code')]" />
                  <!-- <q-input
                  style="width:250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="transportPartnerForm.file_upload5"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                  /> -->
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn @click="
                  () => {
                    this.$refs.agentFormBankDetails
                      .validate()
                      .then((valid) => {
                        if (!valid) {
                        } else {
                          done1 = true;
                          step = 5;
                        }
                      });
                  }
                " color="primary" label="Continue" />
                <q-btn outline @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>
            <q-step :name="5" title="Submit" icon="add_comment">
              <q-form ref="agentFormSubmit">
                <q-card>
                  <q-card-section>
                    <div class="text-h6 text-bold">Terms & Conditions</div>
                  </q-card-section>
                  <q-card-section style="max-height: 50vh" class="scroll">
                    <p v-for="n in 3" :key="n">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum repellendus sit voluptate voluptas eveniet porro.
                      exercitationem aut, natus minima, porro labore.
                    </p>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-toggle v-model="transportPartnerForm.accept" label="I accept the terms and conditions" />
                  </q-card-actions>
                </q-card>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn color="secondary" label="Submit" @click="onSubmit"
                  :disable="this.transportPartnerForm.accept == false" />
                <q-btn outline @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
          <!-- </q-form> -->
        </q-card>
      </q-dialog>
      <q-dialog v-model="details" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div class="text-h6">
                View of Travel Partner Details:
                {{ editedItem.agent_name }}
              </div>
              <q-space />
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>

          </q-header>
          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 50px">
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
                      <div class="col-4 text-left text-black">Name</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-4 text-left text-black">Phone</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <div class="col-4 text-left text-black">Whatsapp</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.fax }}
                      </div>
                      <div class="col-4 text-left text-black">Email</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.email_id }}
                      </div>
                      <div class="col-4 text-left text-black">Aaadhaar</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.aadhar }}
                      </div>
                      <div class="col-4 text-left text-black">Pan Card</div>
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
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon name="mdi-home-circle" color="black"
                    size="1.5em" />
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
                        : {{ editedItem.building_no }}
                      </div>
                      <div class="col-4 text-left">Street</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.street }}
                      </div>
                      <div class="col-4 text-left">Landmark</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.land_mark }}
                      </div>
                      <div class="col-4 text-left">City</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.city }}
                      </div>
                      <div class="col-4 text-left">State</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.state }}
                      </div>
                      <div class="col-4 text-left">Country</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.country }}
                      </div>
                      <div class="col-4 text-left">Pincode</div>
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
                  <div style="height: 250px">
                    <div style="height: 250px">
                      <div class="
                              row
                              text-black text-bold
                              q-ma-xs q-pa-md
                              text-body1
                            ">
                        <div class="col-4 text-left">Account No</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.bankAccountNo }}
                        </div>
                        <div class="col-4 text-left">Bank Name</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.bankName }}
                        </div>
                        <div class="col-4 text-left">Branch</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.branchName }}
                        </div>
                        <div class="col-4 text-left">IFSC Code</div>
                        <div class="col-8 text-left text-grey">
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
          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-file-document" color="black" size="1.5em" />Documents
                </q-bar>
                <tbody>
                  <div class="row">
                    <div class="col-2">
                      <tr>
                        <td class="text-left">PAN Card</td>
                        <!-- <td class="text-left">{{ editedItem.pan_loc }}</td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye"
                            @click="showDocument(editedItem.pan_loc, 'Pancard')" />
                        </td>
                      </tr>
                    </div>

                    <div class="col-2">
                      <tr>
                        <td class="text-left">AADHAAR</td>
                        <!-- <td class="text-left">{{ editedItem.addhaar_loc }}</td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedItem.addhaar_loc, 'Addhaar No')
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-2">
                      <tr>
                        <td class="text-left">GSTIN</td>
                        <!-- <td class="text-left">{{ editedItem.gst_tin_loc }}</td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedItem.gst_tin_loc, 'Gst Tin')
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Agreement Document</td>
                        <!-- <td class="text-left">
                          {{ editedItem.mh_agreement_loc }}
                        </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.mh_agreement_loc,
                              'Agreement Doc'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <!-- <div class="col-3">
                      <tr>
                        <td class="text-left">Travel Partner Photo</td>
                        <td class="text-left">
                          {{ editedItem.partner_pic_loc }}
                        </td>
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
                                'Travel Partner Photo'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div> -->
                  </div>
                  <div class="row">
                    <!-- <div class="col-3">
                      <tr>
                        <td class="text-left">Municipal Doc</td>
                        <td class="text-left">
                          {{ editedItem.mb_certificate_loc }}
                        </td>
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
                    </div> -->
                    <div class="col-3">
                      <tr>
                        <td class="text-left">Undertaking</td>
                        <!-- <td class="text-left">
                          {{ editedItem.mb_certificate_loc }}
                        </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.undertaking_certificate,
                              'Undertaking Doc'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Indemnity Bond</td>
                        <!-- <td class="text-left">
                          {{ editedItem.mb_certificate_loc }}
                        </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.property_tax,
                              'Property Tax'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Declaration</td>
                        <!-- <td class="text-left">
                          {{ editedItem.mb_certificate_loc }}
                        </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.fire_safety,
                              'Fire Safety Document'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Cancelled Cheque</td>
                        <!-- <td class="text-left">
                          {{ editedItem.mb_certificate_loc }}
                        </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.cancelled_cheque,
                              'Cancelled Cheque'
                            )
                          " />
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
              </q-markup-table>
              <q-separator />
              <q-card-section class="q-pa-xs" v-if="this.editedItem.status != 'approved'">
                <q-form>
                  <div class="row q-pa-sm q-gutter-sm">
                    <q-input outlined dense label="Remarks" style="width: 500px" lazy-rules type="textarea"
                      label-color="black" v-model="verifyItem.remarks" :rules="[
                        (val) =>
                          (val !== null && val !== '') || 'Please enter Remarks',
                      ]">
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
            </div>

          </div>

          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px"
            v-if="this.editedItem.status == 'approved'">
            <!-- Transport Details Table Start -->

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Transport Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="transport_item_rows" :columns="transport_item_columns"
                    :rows-per-page-options="[25, 50, 75, 100, 0]" dense row-key="sno" :filter="filter"
                    :selected.sync="selected" separator="cell" :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-action="props">
                      <q-td :props="props">
                        <q-btn color="secondary" @click="showTransportDetails(props.row)" icon="las la-eye" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn>
                        <!-- <q-btn class="q-ml-xs" color="secondary" @click="editTrasportDetails(props.row)"
                          icon="mdi-pencil" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn> -->
                        <!-- <q-btn color="green" @click="editTravel(props.row)" label="Edit" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn> -->
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                          showDocument(
                            props.row.upload_image1,
                            'Vehicle Image'
                          )
                        " />
                      </q-td>
                    </template>
                  </q-table>
                  <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                  <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                </div>


              </q-card>
            </div>


            <!-- Transport Details Table End -->


          </div>


          <div>
            <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down" :maximized="maximizedToggle"
              persistent>
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
              <q-card-section class="q-pa-xs" v-if="this.editedItem.status != 'approved'">
                <q-form>
                  <div class="row q-pa-sm q-gutter-sm">
                    <q-input outlined dense label="Remarks" style="width: 500px" lazy-rules type="textarea"
                      label-color="black" v-model="verifyItem.remarks" :rules="[
                        (val) =>
                          (val !== null && val !== '') || 'Please enter Remarks',
                      ]">
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
            </q-dialog>


          </div>


          <!-- Transport Details Views Start -->

          <q-dialog v-model="transportViewDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
            transition-hide="slide-down">
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-header class="bg-primary">
                <q-bar class="bg-primary text-white">
                  <q-icon name="feed"></q-icon>
                  <div class="text-h6">
                    View of Transport Details:
                    {{ editedItem.transport_sub_name }}
                  </div>
                  <q-space />
                  <!-- <q-chip dense clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
                @click="travelDetailsForm()">
                Add Travel Data
              </q-chip> -->
                  <q-btn dense flat icon="close" @click="closetransportDetailsDialog(editedItem)">
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
                        <div class="
                                row
                                text-black text-bold
                                q-ma-xs q-pa-md
                                text-body1
                              ">
                          <div class="col-5 text-left text-black">
                            Transport Company Name
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_company_name }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Name Of Contact Person
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.Name_Of_Contact_Person }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Phone Number
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_phone }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Email Id
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_email_id }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Special Offer
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.special_offer }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Description
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_description }}
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
                      <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                      Address Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div class="
                                row
                                text-black text-bold
                                q-ma-xs q-pa-md
                                text-body1
                              ">
                          <div class="col-5 text-left">House No</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.building_no }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Street</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.street }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Landmark</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.land_mark }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Country</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.country }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">State</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.state }}
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
                          <div class="col-5 text-left text-black">Latitude</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_latitude }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Longitude
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_longitude }}
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
                        <div class="
                                row
                                text-black text-bold
                                q-ma-xs q-pa-md
                                text-body1
                              ">
                          <tbody>
                            <tr>
                              <td class="text-left" width="280px">
                                Transport Image 1
                              </td>
                              <td>
                                <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye"
                                  @click="
                                    showDocumentacc(
                                      editedItem.upload_image1,
                                      'Upload Image1'
                                    )
                                  " />
                              </td>
                            </tr>
                            <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                            <tr>
                              <td class="text-left" width="280px">
                                Transport Image2
                              </td>
                              <td>
                                <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye"
                                  @click="
                                    showDocumentacc(
                                      editedItem.upload_image2,
                                      'Upload Image2'
                                    )
                                  " />
                              </td>
                            </tr>
                            <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                          </tbody>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <q-markup-table class="q-ma-xs">
                    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                      <q-icon name="mdi-home" color="black" size="1.5em" />
                      Transport Description
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 150px">
                        <div class="
                                row
                                text-black text-bold
                                q-ma-xs q-pa-md
                                text-body1">
                          <div class="col-12 text-justify text-grey">
                            {{ editedItem.transport_description }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-markup-table>
                </div>
              </div>
              <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <q-card flat bordered class="bg-white">
                    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                      <q-icon name="manage_accounts" color="black" size="1.5em" />
                      Travel Details
                    </q-bar>

                    <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                    <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />

                    <div style="width: 95%; margin: auto">
                      <q-table :data="travel_item_rows" :columns="travel_item_columns_admin"
                        :rows-per-page-options="[25, 50, 75, 100, 0]" dense row-key="sno" :filter="filter"
                        :selected.sync="selected" separator="cell" :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                        <template v-slot:body-cell-actions="props">
                          <q-td :props="props">
                            <q-btn color="primary" @click="showtraveldetails(props.row)" icon="las la-eye"
                              size="sm"><q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip></q-btn>
                          </q-td>
                        </template>
                      </q-table>
                    </div>

                    <template v-slot:top-right="props">
                      <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: 10px;
                    "
                  >
                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width: 400px">
                        <template v-slot:append>
                          <q-icon name="search" />
                        </template>
                      </q-input>
</div>
                      <q-btn flat round dense :icon="
                        props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                      " @click="props.toggleFullscreen" v-if="mode === 'list'">
                        <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{
                          props.inFullscreen
                          ? "Exit Fullscreen"
                          : "Toggle Fullscreen"
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

                      <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                        <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                        </q-tooltip>
                      </q-btn>
                    </template>
                  </q-card>
                </div>
                <q-card-section class="q-pa-xs">
                  <q-form>
                    <div class="row q-pa-sm q-gutter-sm">
                      <q-input outlined dense label="Remarks" style="width: 500px" lazy-rules type="textarea"
                        label-color="black" v-model="verifyItem.transport_remarks" :rules="[
                          (val) =>
                            (val !== null && val !== '') || 'Please enter Remarks',
                        ]">
                      </q-input>
                    </div>
                  </q-form>
                </q-card-section>
                <q-toolbar>
                  <q-toolbar-title>
                    <div class="q-pa-sm q-pl-md row justify-end">
                      <div class="cursor-pointer non-selectable">
                        <q-btn no-caps color="secondary" @click="onTransportApprove">Approve
                        </q-btn>
                      </div>
                      <div class="cursor-pointer non-selectable" style="margin-left:10px;">
                        <q-btn color="negative" no-caps @click="onTransportReject">Reject</q-btn>
                      </div>
                    </div>
                  </q-toolbar-title>
                </q-toolbar>
              </div>
            </q-layout>
          </q-dialog>
          <!-- Transport Details View End -->








          <q-dialog v-model="traveldetailsDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
            transition-hide="slide-down">
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-header class="bg-primary">
                <q-bar class="bg-primary text-white">
                  <q-icon name="feed"></q-icon>
                  <div class="text-h6">
                    View of Travel Details:
                    {{ traveleditedItem.transport_sub_name }}
                  </div>
                  <q-space />
                  <!-- <q-chip dense clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
                @click="travelDetailsForm()">
                Add Travel Data
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
                        <div class="
                                row
                                text-black text-bold
                                q-ma-xs q-pa-md
                                text-body1
                              ">
                          <div class="col-5 text-left text-black">
                            Transport Company Name
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_company_name }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Name Of Contact Person
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.Name_Of_Contact_Person }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Phone Number
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_phone }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Email Id
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_email_id }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Special Offer
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.special_offer }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Description
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_description }}
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
                      <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                      Travel Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div class="
                                row
                                text-black text-bold
                                q-ma-xs q-pa-md
                                text-body1
                              ">
                          <div class="col-5 text-left">vehicle Name</div>
                          <div class="col-7 text-left text-grey">
                            : {{ traveleditedItem.vehicle_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">No;- of seaters</div>
                          <div class="col-7 text-left text-grey">
                            : {{ traveleditedItem.no_of_seaters }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Day price</div>
                          <div class="col-7 text-left text-grey">
                            : {{ traveleditedItem.day_price }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left">Night price</div>
                          <div class="col-7 text-left text-grey">
                            : {{ traveleditedItem.night_price }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Units</div>
                          <div class="col-7 text-left text-grey">
                            : {{ traveleditedItem.units }}
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
                        <div class="
                                row
                                text-black text-bold
                                q-ma-xs q-pa-md
                                text-body1
                              ">
                          <tbody>
                            <tr>
                              <td class="text-left" width="280px">
                                vehicle Image
                              </td>
                              <td>
                                <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye"
                                  @click="
                                    showDocumentacc(
                                      traveleditedItem.vehicle_image,
                                      'Upload Image1'
                                    )
                                  " />
                              </td>
                            </tr>

                            <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                          </tbody>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!-- <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <q-markup-table class="q-ma-xs">
                    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                      <q-icon name="mdi-home" color="black" size="1.5em" />
                      Transport Description
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 150px">
                        <div class="
                              row
                              text-black text-bold
                              q-ma-xs q-pa-md
                              text-body1">
                          <div class="col-12 text-justify text-grey">
                            {{ editedItem.transport_description }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-markup-table>
                </div>
              </div> -->

              <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Travel Details
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
                    :data="travel_item_rows"
                    :columns="travel_item_columns_admin"
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
                              color="primary"
                              @click="showtraveldetails(props.row)"
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
                    densea
                    :icon="
                      props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                    "
                    @click="props.toggleFullscreen"
                    v-if="mode === 'list'"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
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
              </q-card>
            </div> -->
              <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
                <q-card-section class="q-pa-xs">
                  <q-form>
                    <div class="row q-pa-sm q-gutter-sm">
                      <q-input outlined dense label="Remarks" style="width: 500px" lazy-rules type="textarea"
                        label-color="black" v-model="verifyItem.travel_details_remarks" :rules="[
                          (val) =>
                            (val !== null && val !== '') || 'Please enter Remarks',
                        ]">
                      </q-input>
                    </div>
                  </q-form>
                </q-card-section>
                <q-toolbar>
                  <q-toolbar-title>
                    <div class="q-pa-sm q-pl-md row justify-end">
                      <div class="cursor-pointer non-selectable">
                        <q-btn no-caps color="secondary" @click="onTravelDetailsApprove">Approve
                        </q-btn>
                      </div>
                      <div class="cursor-pointer non-selectable" style="margin-left:10px;">
                        <q-btn color="negative" no-caps @click="onTravelDetailsReject">Reject</q-btn>
                      </div>
                    </div>
                  </q-toolbar-title>
                </q-toolbar>
              </div>
            </q-layout>
          </q-dialog>
          <div>
            <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down" :maximized="maximizedToggle"
              persistent>
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
        </q-layout>
        <q-footer elevated> </q-footer>
      </q-dialog>
    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title2 }}
        </q-toolbar-title>
        <b style="margin-right:15px"> User Name: {{ userDetails.user_name }}</b>

        <q-chip clickable color="secondary" text-color="white" icon="las la-eye" class="text-weight-medium"
          @click="openApprovedPartnersDialog()">
          View All MHTP
        </q-chip>

        <q-btn flat round dense icon="search">
          <q-popup-edit :cover="false" :offset="[0, 10]" v-slot="scope">
            <q-input color="secondary" v-model="filter" dense autofocus counter @keyup.enter="scope.set">
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

const transportRegMaster = () => {
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
    file_upload: "",
    accept: false,
  };
};
export default {
  data() {
    return {
      count_admin_rows: false,
      dialogTitle: "",
      ...validations,

      url: "",
      title: "MH Travel Partner (MHTP) Approval",
      title2: "MH Travel Verified Partners (MHTP) ",
      title3: "MH Travel Approval Partners (MHTP) ",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      gender_options: ["Mr", "Mrs"],
      zoom: 4,
      selected: [],
      data: [],
      details: false,
      visible: false,
      showPanDoc: false,
      maximizedToggle: true,
      transportViewDialog: false, traveldetailsDialog: false,
      travelDataDialog: false,
      small: false,
      approvedPartnersDialog: false,
      editedIndex: -1,
      editedItem: {
        remarks: "",
        reject: "",
      },
      pan_card_file: [],
      addhaar_no: [],
      gst_tin: [],
      mh_agreement: [],
      partner_pic: [],
      mb_certificate: [],
      transportPartnerForm: {
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
      traveleditedItem: {
        agent_id: "",
        transport_sub_id: "",
      },
      pagination: {
        rowsPerPage: 10,
      },
      verifyItem: {
        remarks: "",
        reject: "",
        travel_details_remarks: "",
        transport_remarks: "",
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      headerValue: "MH Accommodation verified Partners (MHACP)",
      headerValue1: "MH Travel Approval Partners (MHTP)",
      headerValue2: "MH Travel ALL Partners (MHTP)",

      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {
        "Sno": "index",
        "Status": "status",
        "Travel Partner Name": "agent_name",
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
      transport_reg_admin_rows: (state) => state.partners.transport_reg_admin_rows,
      travel_item_columns_admin: (state) => state.partners.travel_item_columns_admin,
      travel_item_rows: (state) => state.partners.travel_item_rows,
      approved_travel_partners_rows: (state) => state.partners.approved_travel_partners_rows,
      approved_travel_partners_columns: (state) => state.partners.approved_travel_partners_columns,
      transport_item_rows: state => state.partners.transport_item_rows,
      transport_item_columns: state => state.partners.transport_item_columns,
      property_data_admin_rows: state => state.property_data_admin_rows,
      property_transport_registration_status_count: (state) =>
        state.partners.property_transport_registration_status_count,
      travel_admin_count_rows: state => state.travel_admin_count_rows,

    }),
    ...mapGetters("partners", ["transport_reg_admin_rows"]),
    ...mapGetters("partners", ["travel_admin_count_rows"]),
    ...mapGetters("partners", [
      "property_transport_registration_status_count",
    ]),
    ...mapGetters("partners", ["transport_reg_rows"]),
    ...mapGetters("partners", ["travel_item_columns_admin_admin"]),


  },

  mounted() {
    this.$store.dispatch("partners/getTransportRegistrationStatusCount");
    // this.$store.dispatch("partners/getTransportPartnersInAdmin");
    this.$store.dispatch("partners/getTransportRegAdminMaster");
    this.$store.dispatch("dropdown/loadAllProperty");



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
    ...mapActions("partners", ["getTransportRegistrationStatusCount"]),
    ...mapActions("partners", ["createTransporterRegDetails", "approvePartner",]),
    ...mapActions("partners", ["getTransportPartnerRegApprovalStatus"]),
    ...mapActions("partners", ["getTransportDetailsForAdmin"]),
    ...mapActions("partners", ["getTravelDetailsForAdmin"]),
    ...mapActions("partners", ["getTransportDetailsSaving"]),
    ...mapActions("partners", ["approveTravelRegDetails"]),
    ...mapActions("partners", ["rejectTravelRegDetails"]),
    ...mapActions("partners", ["rejectTravelRegDetails"]),
    ...mapActions("partners", ["getAllTravelDetailsForAdmin"]),
    ...mapActions("partners", ["approveTravelDetails"]),
    ...mapActions("partners", ["rejectTravelDetails"]),
    ...mapActions("partners", ["approveTrasnportDetails"]),
    ...mapActions("partners", ["rejectTransportDetails"]),








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
              formData.append(
                "transportDetails",
                JSON.stringify(this.transportPartnerForm)
              );
              this.createTransporterRegDetails(formData);
              this.transportPartnerForm = transportRegMaster();
              this.$refs.agentFormSubmit.resetValidation();
              this.resetFiles();
              this.addDataDialog = false;
              this.step = 1;
            })
            .onCancel(() => {
              this.resetFiles();
              this.getTransportPartnerRegApprovalStatus();
              this.addDataDialog = true;
            });
        }
      });
    },
    showDocumentacc(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhapFilePath + file;
        this.visible = false;
      }, 500);
      this.small = true;
    },
    showshowTravelData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.travelDataDialog = true;
    },
    async reloadPage() {
      this.$router.go(0);
      window.location.reload();
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.details = true;
      // console.log("getTransportPartnerRegApprovalStatus",this.property_transport_registration_status_count);
      this.getTransportDetailsSaving(this.editedItem);
    },
    showTransportDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.transportViewDialog = true;
      // this.getTravelDetailsSaving(this.editedItem);
      this.getTravelDetailsForAdmin(this.editedItem);
    },
    showtraveldetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.traveleditedItem = Object.assign({}, item);
      this.traveleditedItem.agent_id = item.agent_id;
      this.traveleditedItem.transport_sub_id = item.transport_sub_id;
      this.traveldetailsDialog = true;
      // this.getTravelDetailsSaving(this.editedItem);
      // this.getTravelDetailsForAdmin(this.editedItem);
    },
    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhtpFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },
    openApprovedPartnersDialog() {
      this.approvedPartnersDialog = true;
      this.getTransportPartnerRegApprovalStatus()
    },
    closetransportDetailsDialog(item) {
      this.editedItem.status = "approved";
      this.transportViewDialog = false;
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
          this.approveTravelRegDetails(this.editedItem);
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
          this.rejectTravelRegDetails(this.editedItem);
          this.details = false;
        });

    },

    onTransportApprove() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.editedItem.transport_remarks = this.verifyItem.transport_remarks;
          this.verifyItem.transport_remarks = [];
          this.approveTrasnportDetails(this.editedItem);
          this.details = false;
        });
    },
    onTransportReject() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Data?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {

          this.editedItem.transport_remarks = this.verifyItem.transport_remarks;
          this.verifyItem.reject = [];
          this.rejectTransportDetails(this.editedItem);
          console.log("editedItem", editedItem);
          this.details = false;
        });

    },

    onTravelDetailsApprove() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.traveleditedItem.travel_details_remarks = this.verifyItem.travel_details_remarks;
          this.verifyItem.travel_details_remarks = [];
          this.approveTravelDetails(this.traveleditedItem);
          this.details = false;
        });
    },
    onTravelDetailsReject() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Reject Data?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {

          this.traveleditedItem.travel_details_remarks = this.verifyItem.travel_details_remarks;
          this.verifyItem.reject = [];
          this.rejectTravelDetails(this.traveleditedItem);
          console.log("traveleditedItem", traveleditedItem);
          this.details = false;
        });

    },

    getTransportClickableData(item) {
      console.log("jhasdfaf", item);
      this.getAllTravelDetailsForAdmin(item);
      this.count_admin_rows = true;
    },
    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      this.partner_pic = [];
      this.mb_certificate = [];
      this.chancelled_cheque = [];
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
