<template>
  <div>
    <!-- <q-page-container> -->
    <q-page style="padding-top: 150px" class="q-pa-md">
      <q-table
      style="font-family: verdana"
        :title="title"
        :data="agent_partner_registration_rows"
        :columns="agent_partner_registration_columns"
        row-key="agent_id"
        :pagination.sync="pagination"
        dense
        :selected.sync="selected"
        :grid="mode === 'grid'"
        :filter="filter"
        color="green"
        separator="cell"
        :hide-header="mode === 'grid'"
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
        v-if="agent_partner_registration_rows.length != 0"
        :data="agent_partner_registration_rows"
     :fields="json_fields"
        :header="headerValue"
        worksheet="Booking Agent Approvals"
        :name="
          `${excel_date}_Booking Agent.xls`
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
                  props.row.agentstatus == 'Approved'
                    ? 'green'
                    : props.row.agentstatus == 'Pending'
                      ? 'orange'
                      : 'negative'
                " text-color="white" dense>{{ props.row.agentstatus }}
                </q-chip>
              </q-td>
            </template>
      </q-table>
      <q-dialog v-model="approvedPartnersDialog" maximized persistent>
        <q-card>
          <q-toolbar class="bg-primary q-mb-xl dense">
            <q-toolbar-title class="text-h6 text-bold text-white">{{
              title2
            }}</q-toolbar-title>
            <q-btn
              icon="mdi-close"
              dense
              flat
              color="white"
              @click="approvedPartnersDialog = false"
            />
          </q-toolbar>
          <q-table
            :data="approved_agent_booking_rows"
            :columns="approved_agent_booking_columns"
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
                  props.row.agentstatus == 'Approved'
                    ? 'green'
                    : props.row.agentstatus == 'Pending'
                      ? 'orange'
                      : 'negative'
                " text-color="white" dense>{{ props.row.agentstatus }}
                </q-chip>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </q-dialog>
      <q-dialog
        v-model="addDataDialog"
        persistent
        maximized
        transition-show="slide-left"
        transition-hide="slide-right"
      >
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn v-close-popup flat>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-stepper v-model="step" color="primary" animated>
            <q-step
              :name="1"
              title="Basic Details"
              icon="settings"
              :done="step > 1"
            >
              <q-form ref="agentFormBasic">
                <div class="q-pa-md row q-gutter-md">
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.agent_name"
                    label="Booking Partner Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    lazy-rules
                    :rules="[required('Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.alias_name"
                    label="Booking Partner Alias Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Alias Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>

                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.phone"
                    label="Phone"
                    lazy-rules
                    mask="##########"
                    fill-mask
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Phone no'), phone()]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.fax"
                    lazy-rules
                    mask="##########"
                    fill-mask
                    label="Alt Phone no / Whatsapp no"
                    style="width: 250px"
                    label-color="black"
                    :rules="[phone()]"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-whatsapp"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.email_id"
                    label="Email"
                    lazy-rules
                    class="col-3"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Email'), email()]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.agent_commission"
                    label="Commission as per agreement"
                    style="width: 250px"
                    label-color="black"
                    suffix="%"
                    mask="##"
                    :rules="[required('Commission')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-percent" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-2"
                    dense
                    outlined
                    v-model="agentForm.description"
                    label="Description"
                    lazy-rules
                    style="width: 250px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-comment" color="secondary" /> </template
                  ></q-input>
                </div>
              </q-form>
              <q-stepper-navigation>
                <q-btn
                  @click="
                    () => {
                      this.$refs.agentFormBasic.validate().then((valid) => {
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
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.building_no"
                    label="House/Flat No *"
                    lazy-rules
                    label-color="black"
                    :rules="[required('House')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.street"
                    label="Street/Colony Name*"
                    lazy-rules
                    label-color="black"
                    :rules="[required('Street/Colony')]"
                    ><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.land_mark"
                    label="Landmark"
                    label-color="black"
                    :rules="[required('Landmark')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker-circle"
                        color="secondary"
                      /> </template
                  ></q-input>

                  <q-input
                    dense
                    outlined
                    v-model="agentForm.city"
                    label="City"
                    label-color="black"
                    :rules="[required('City')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.state"
                    label="State"
                    label-color="black"
                    :rules="[required('State')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.country"
                    label="Country"
                    label-color="black"
                    :rules="[required('Country')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    lazy-rules
                    mask="######"
                    v-model="agentForm.pin_code"
                    label="Pincode"
                    label-color="black"
                    :rules="[required('Pincode'), pinNumber()]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-input>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  @click="
                    () => {
                      this.$refs.agentFormAddress.validate().then((valid) => {
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
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.pan"
                    label="PAN"
                    label-color="black"
                    mask="AAAAA####A"
                    :rules="[required('Pancard'), panNumber()]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.aadhar"
                    label="AADHAAR"
                    label-color="black"
                    mask="####-####-####"
                    :rules="[required('AAdhaar'), addhaarNumber()]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.gstin"
                    label="GSTIN"
                    label-color="black"
                    mask="##AAAAA####A#A#"
                    :rules="[required('GST'), gstNumber()]"
                  />
                </div>
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-file
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="pan_card_file"
                    type="file"
                    accept=".pdf, pdf/*"
                    hint="PAN Card"
                    :rules="[required('Pancard Document')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                  <q-file
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="addhaar_no"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="AADHAAR Card"
                    :rules="[required('Aadhaar card')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-file
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="gst_tin"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="GSTIN Certificate"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-file
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="mh_agreement"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="MH Agreement Document"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>

                  <q-file
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="partner_pic"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Booking Partner Photo"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  @click="
                    () => {
                      this.$refs.agentFormStaDocs.validate().then((valid) => {
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
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[required('Bank A/C no')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.ifsc"
                    label="IFSC Code"
                    label-color="black"
                    :rules="[required('IFSC code')]"
                  />
                  <!-- <q-input
                    class="hint-bold"
                    dense
                    filled
                    v-model="chancelled_cheque"
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
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onSubmit"
                  :disable="this.agentForm.accept == false"
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
        </q-card>
      </q-dialog>
      <!-- <q-dialog
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
                View of Booking Partner Registration Details:
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
                      <div class="col-6 text-left text-black">Name</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-6 text-left text-black">Phone</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <div class="col-6 text-left text-black">Whatsapp</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.fax }}
                      </div>
                      <div class="col-6 text-left text-black">Email</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.email_id }}
                      </div>
                      <div class="col-6 text-left text-black">Aaadhaar</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.aadhar }}
                      </div>
                      <div class="col-6 text-left text-black">Pan Card</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.pan }}
                      </div>
                      <div class="col-6 text-left text-black">Commision</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.agent_commission }}
                      </div>
                      <div class="col-6 text-left text-black">Description</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.description }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
                  ><q-icon name="mdi-home-circle" color="black" size="1.5em" />
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
                      <div class="col-6 text-left">House No</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.building_no }}
                      </div>
                      <div class="col-6 text-left">Street</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.street }}
                      </div>
                      <div class="col-6 text-left">Landmark</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.land_mark }}
                      </div>
                      <div class="col-6 text-left">City</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.city }}
                      </div>

                      <div class="col-6 text-left">State</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.state }}
                      </div>
                      <div class="col-6 text-left">Country</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.country }}
                      </div>
                      <div class="col-6 text-left">Pincode</div>
                      <div class="col-6 text-left text-grey">
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
                        <div class="col-4 text-left text-black">Aadhaar</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.aadhar }}
                        </div>
                        <div class="col-4 text-left text-black">Pan Card</div>
                        <div class="col-8 text-left text-grey">
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
          <div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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

                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.addhaar_loc,
                                'Addhaar card'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Gst Tin No</td>

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
                                'Agreement Doument'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div>
                    <div class="col-3">
                      <tr>
                        <td class="text-left">Partner Photo</td>

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
                        <td class="text-left">Undertaking</td>

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
                      </tr>
                    </div>
                    <div class="col-3">
                      <tr>
                        <td class="text-left">Indemnity Bond</td>

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
                                'Indemnity Bond'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Declaration</td>

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
                                'Declaration'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div>
                    <div class="col-3">
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
                                editedItem.cancelled_cheque_doc,
                                'Cancelled Cheque Document'
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

            <q-toolbar>
              <q-toolbar-title>
                <div class="q-pa-sm q-pl-md row justify-end">
                  <div class="cursor-pointer non-selectable">
                    <q-btn no-caps color="secondary" @click="onApprove"
                      >Approve
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
      </q-dialog> -->
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
                  Agent Registration Details: {{ editedItem.first_name }}
                </div>
                <q-space />

                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>
            </q-header>
            <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px;padding-left: 450px;">

<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
  <q-card class="q-ma-xs " style="height: 450px;width:600px">
    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
      ><q-icon name="mdi-home-circle" color="black" size="1.5em" />
      Agent Details
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
              <q-bar>
                <q-space />
                <q-btn
                  label="Decline"
                  color="red"
                  @click="onReject"
                />
                <q-btn
                  label="Accept"
                  color="green"
                  @click="onApprove"
                  v-if="editedItem.agentstatus == 'Pending'"
                />
              </q-bar>
            </q-footer>
          </q-layout>
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
          @click="openApprovedPartnersDialog()"
        >
          View
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
    <!-- </q-page-container> -->
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import validations from "../../helpers/validations";
import moment from "moment";
import filepaths from "../../helpers/filepath";
const defaultAgentObj = () => {
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
    pin_code: "",
    pan: "",
    aadhar: "",
    gstin: "",
    bankAccountNo: "",
    bankName: "",
    branchName: "",
    ifsc: "",
    accept: false,
    pan_card_no: [],
    addhaar_no: [],
    gst_tin: [],

    mh_agreement: [],
    partner_pic: [],
    chancelled_cheque: [],
  };
};
export default {
  data() {
    return {
      ...validations,
      // ...filepaths,
      title: "MH Booking Agent (MHBA) Approval",
      title2: "MH Booking Agent Pending (MHBA)",
      title3: "MH Booking Agent Approval (MHBA)",
      approvedPartnersDialog: false,
      step: 1,
      selected: [],
      data: [],
      details: false,
      maximizedToggle: true,
      dialogTitle: "",
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      pan_card_file: [],
      addhaar_no: [],
      gst_tin: [],
      mh_agreement: [],
      partner_pic: [],
      chancelled_cheque: [],
      editedIndex: -1,
      editedItem: {
        remarks: "",
        reject: "",
      },

      agentForm: {
        agent_name: "",
        alias_name: "",
        phone: "",
        fax: "",
        email_id: "",
        agent_commission: "",
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
        // file_upload1: "",
        // file_upload2: "",
        // file_upload3: "",
        // file_upload4: "",
        // file_upload5: "",
        // file_upload6: "",
        accept: false,
      },
      pagination: {
        rowsPerPage: 10,
      },
      verifyItem: {
        remarks: "",
        reject: "",

        // userDetails: ""
      },
      headerValue:"Booking Agent Approvals",
      excel_date: moment(new Date()).format("DD/MM/YYYY"),
      json_fields: {


        "Agent Name": "first_name",
        "Mobile": "mobile_no",
        "Email ID": "email_id",
        "Referal Name": "nearest_hospital",
        "City": "city",
        "Application Date": "created_datetime",
        "Status": "agentstatus",

      },

      mode: "list",
      filter: "",
      addDataDialog: false,

      small: false,
      url: "",

      visible: false,
      showPanDoc: false,
      photoSmall: false,
      showpartnerDoc: false,
      agreSmall: false,
      showmhDoc: false,
      gstInSmall: false,
      showGstDoc: false,
      aadhaarSmall: false,
      showAadharDoc: false,
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      property: (state) => state.dropdown.property_arr,

      agent_registration_columns: (state) =>
        state.partners.agent_registration_columns,

      approved_agent_booking_columns: (state) =>
        state.partners.approved_agent_booking_columns,
          agent_partner_registration_columns: (state) =>
        state.partners.agent_partner_registration_columns,
    }),
    ...mapGetters("partners", ["agent_registration_rows"]),
      ...mapGetters("partners", ["approved_agent_booking_rows"]),
    ...mapGetters("partners", ["agent_partner_registration_rows"]),
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("partners/getAgentPartnerRegDetails");
    this.$store.dispatch("partners/agentRegistrationMasterExistingUser");
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
    ...mapActions("partners", ["createAgentReg", "approvePartner"]),
    ...mapActions("partners", ["getAgentRegApprovalStatus"]),
    ...mapActions("partners", ["approveAgentRegDetails"]),
    ...mapActions("partners", ["rejectAgentRegDetails"]),

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
              formData.append("agentDetails", JSON.stringify(this.agentForm));
              this.createAgentReg(formData);
              this.agentForm = defaultAgentObj();
              this.resetFiles();
              this.$refs.agentFormSubmit.resetValidation();
              this.addDataDialog = false;
              this.step = 1;
            })
            .onCancel(() => {
              this.resetFiles();
              this.getAgentRegApprovalStatus();
              this.addDataDialog = true;
            });
        }
      });
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.details = true;
    },
    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.agentFilePath + file;
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
          // this.editedItem.remarks = this.verifyItem.remarks;
          // this.verifyItem.remarks = [];
          this.approveAgentRegDetails(this.editedItem);
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
          this.rejectAgentRegDetails(this.editedItem);
          this.details = false;
        });
    },
  openApprovedPartnersDialog() {
    this.approvedPartnersDialog = true;
    this.getAgentRegApprovalStatus();
  },
    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      this.partner_pic = [];
      this.chancelled_cheque = [];
    },
    async reloadPage() {
      this.$router.go(0);
      // window.location.reload();
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
