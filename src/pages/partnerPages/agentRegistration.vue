<template>
  <div>
    <!-- <q-page-container>  -->
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md">
        <q-chip square clickable @click="getAgentPartnerRegDetails">
          <q-avatar color="primary" text-color="white">{{
            this.agent_partner_registration_status_count.length == 0
              ? "0"
              : parseInt(
                  this.agent_partner_registration_status_count[0].pcount
                ) +
                parseInt(
                  this.agent_partner_registration_status_count[0].acount
                ) +
                parseInt(this.agent_partner_registration_status_count[0].rcount)
          }}</q-avatar>
          All
        </q-chip>
        <q-chip square clickable @click="getAgentRegBasedOnStatus('approved')">
          <q-avatar color="secondary" text-color="white">{{
            this.agent_partner_registration_status_count.length == 0
              ? "0"
              : this.agent_partner_registration_status_count[0].acount
          }}</q-avatar>
          Approved
        </q-chip>
        <q-chip square clickable @click="getAgentRegBasedOnStatus('rejected')">
          <q-avatar color="red" text-color="white">{{
            this.agent_partner_registration_status_count.length == 0
              ? "0"
              : this.agent_partner_registration_status_count[0].rcount
          }}</q-avatar>
          Rejected
        </q-chip>
        <q-chip square clickable @click="getAgentRegBasedOnStatus('pending')">
          <q-avatar color="orange" text-color="white">{{
            this.agent_partner_registration_status_count.length == 0
              ? "0"
              : this.agent_partner_registration_status_count[0].pcount
          }}</q-avatar>
          Pending
        </q-chip>
      </div>
      <q-table
        :data="agent_partner_registration_rows"
        :columns="agent_partner_registration_columns"
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
              color="primary"
              @click="editItem(props.row)"
              icon="las la-eye"
              size="sm"
              ><q-tooltip :disable="$q.platform.is.mobile"
                >View</q-tooltip
              ></q-btn
            >
          </q-td>
        </template>
      </q-table>

      <q-dialog v-model="addDataDialog" persistent maximized>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn>
              <q-icon
                name="close"
                color="white"
                @click="closeAddDataDialog()"
              ></q-icon>
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
                    v-model="agentForm.name"
                    label="Booking Partner Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                 <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.company_name"
                    label="Company Name "
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"

                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" /> </template
                  ></q-input>
                   <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.individual_name"
                    v-if="agentForm.company_name != ''"
                    label="Individual Name"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"

                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" /> </template
                  ></q-input>

                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.phone"
                    label="Phone *"
                    lazy-rules
                    mask="##########"
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
                    label="Whatsapp no *"
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
                    label="Email *"
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
                    label="Landmark *"
                    label-color="black"
                    :rules="[required('Landmark')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker-circle"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-select
                    dense
                    outlined
                    use-input
                    hide-selected
                    :options="Countries"
                    option-value="country_id"
                    option-label="country"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="agentForm.country"
                    label="Country *"
                    label-color="black"
                    :rules="[required('Country')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-select>
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    fill-input
                    :options="states"
                    option-value="state_id"
                    option-label="state_name"
                    v-model="agentForm.state"
                    @input="
                      loadAllCities(agentForm.state);
                      emptycities();
                    "
                    label="State *"
                    label-color="black"
                    :rules="[required('State')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-select>
                  <q-select
                    dense
                    outlined
                    use-input
                    hide-selected
                    :options="cities"
                    option-value="city_id"
                    option-label="city"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="agentForm.city"
                    label="City *"
                    label-color="black"
                    :rules="[required('City')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-select>
                  <q-input
                    dense
                    outlined
                    lazy-rules
                    mask="######"
                    v-model="agentForm.pin_code"
                    label="Pincode *"
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
            <q-step :name="3" :done="step > 3" title="eKYC" icon="assignment">
              <q-form ref="agentFormStaDocs">
                <!-- <div
                  class="q-pa-md row q-gutter-md items-start text-h6 text-weight-bold">
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 400px"
                    fill-input
                    :options="propertyTypes"
                    v-model="agentForm.propertyType"
                    label="Type Of Property *"
                    label-color="black"
                    :rules="[required('Property Type')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select>
                </div> -->
                <div
                  class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  "
                >
                  Proof of Identity and Proof of Address:
                </div>
                <div
                  class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  "
                >
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.pan"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    label="PAN No"
                    label-color="black"
                    mask="AAAAA####A"
                    :rules="[required('Pancard'), panNumber()]"
                  />
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="pan_card_file"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload PAN Card"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.aadhar"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    label="AADHAAR No"
                    label-color="black"
                    mask="############"
                  />
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="addhaar_no"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload AADHAAR"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.gstin"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    label="GSTIN"
                    label-color="black"
                    mask="##AAAAA####A###"
                  />
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="gst_tin"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload GSTIN"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                </div>
                <div
                  class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  "
                >
                  Documents:
                </div>
                <div
                  class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  "
                >
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="mh_agreement"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Agreement Document"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <!-- <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="partner_pic"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Agent Partner Photo"
                   :filter="checkFileSize"
 @rejected="onRejected"

                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file> -->
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="mb_certificate"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload Undertaking"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="property_tax"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload Indemnity Bond"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="fire_safety"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload Declaration"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
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
              <q-form ref="agentFormSubmit">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[required('Bank A/C no'), number()]"
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
                    v-model="cancelled_cheque"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                  /> -->
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="cancelled_cheque"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
                <q-card-actions align="left">
                    <q-toggle
                      v-model="agentForm.accept"
                      label="I accept the Agent Partner Registration"
                    />
                  </q-card-actions>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  color="secondary"
                  label="Submit"
                  v-if="this.onclickValue != 'edit'"
                  @click="onSubmit('submit')"
                  :disable="this.agentForm.accept == false"
                />
                <q-btn
                  color="secondary"
                  label="Update"
                  class="text-bold"
                  @click="onSubmit('update')"
                  v-if="this.onclickValue == 'edit'"
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
                View of Booking Partner Registration Details:
                {{ editedItem.agent_name }}
              </div>
              <q-space />
              <!-- <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="openagentLocationForm()"
              >
                Add Agent Details
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
                      <div class="col-4 text-left text-black">Lead Name</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-4 text-left text-black">Sub Partner</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_sub_name }}
                      </div>
                      <div class="col-4 text-left text-black">Lead Id</div>
                      <div class="col-6 text-left text-grey">
                        : {{ editedItem.agent_id }}
                      </div>
                      <div class="col-4 text-left text-black">Sub Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_sub_id }}
                      </div>
                      <q-separator />
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
                      <!-- <div class="col-4 text-left text-black">Aadhaar</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.aadhar }}
                      </div>
                      <div class="col-4 text-left text-black">Pan Card</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.pan }}
                      </div> -->
                      <div class="col-4 text-left text-black">Commission</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_commission }}
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
                  <div style="height: 250px">
                    <div
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
                    >
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
                      <div class="col-4 text-left">Country</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.country }}
                      </div>
                      <div class="col-4 text-left">State</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.state }}
                      </div>
                      <div class="col-4 text-left">City</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.city }}
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
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 35px"
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
                        <td class="text-left">PAN Card</td>
                        <!-- <td class="text-left">{{ editedItem.pan_card_file_loc }}</td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.pan_card_file_loc,
                                'Pancard'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">AADHAAR</td>
                        <!-- <td class="text-left">{{ editedItem.addhaar_no_loc }}</td> -->
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(editedItem.addhaar_no_loc, 'addhaar')
                            "
                          />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
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
                              showDocument(editedItem.gst_tin_loc, 'gst_tin')
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
                                'Agreement Document'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div>
                    <!--
                    <div class="col-3">
                      <tr>
                        <td class="text-left">Agent Partner Photo</td>
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
                    <div class="col-3">
                      <tr>
                        <td class="text-left">Undertaking</td>
                        <!-- <td class="text-left">
                      {{ editedItem.mb_certificate_loc}}
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
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Indemnity Bond</td>
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
                        <!-- <td class="text-left">
                      {{ editedItem.cancelled_cheque_doc }}
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
          <!-- <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat
                  class="ma-02 text-bold"
                  style="max-height: 20vh" style="height">
                  <q-icon name="feed" color="black" size="1.5em" />Agent Details
                </q-bar>
              <div class="q-pa-md" style="padding-top: 10px">

                <q-table
                  :data="agent_data_rows"
                  :columns="agent_data_columns"
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
                        color="primary"
                        @click="showAgentData(props.row)"
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
              </q-markup-table>
            </div>
          </div> -->

          <q-dialog
            v-model="agentItemDialog"
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
                    View of Agent Details:
                    {{ agentEditedItem.agent_name }}
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
                          <div class="col-6 text-left text-black">
                            Lead Partner
                          </div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.agent_name }}
                          </div>
                          <div class="col-6 text-left text-black">
                            Sub Partner
                          </div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.agent_sub_name }}
                          </div>
                          <div class="col-6 text-left text-black">Lead Id</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.agent_id }}
                          </div>
                          <div class="col-6 text-left text-black">Sub Id</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.agent_sub_id }}
                          </div>
                          <div class="col-6 text-left text-black">Phone</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.phone }}
                          </div>
                          <div class="col-6 text-left text-black">Email Id</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.email_id }}
                          </div>
                          <div class="col-6 text-left text-black">
                            Description
                          </div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.description }}
                          </div>
                          <div class="col-6 text-left text-black">Latitude</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.latitude }}
                          </div>
                          <div class="col-6 text-left text-black">
                            Longitude
                          </div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.longitude }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs text-black">
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
                          <div class="col-6 text-left">House No</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.building_no }}
                          </div>
                          <q-separator />
                          <div class="col-6 text-left">Street</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.street }}
                          </div>
                          <q-separator />
                          <div class="col-6 text-left">Landmark</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.land_mark }}
                          </div>
                          <div class="col-6 text-left">Country</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.country }}
                          </div>
                          <div class="col-6 text-left">State</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.state }}
                          </div>
                          <div class="col-6 text-left">City</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.city }}
                          </div>
                          <div class="col-6 text-left">Pin Code</div>
                          <div class="col-6 text-left text-grey">
                            : {{ agentEditedItem.pin_code }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs">
                    <q-markup-table class="q-ma-xs">
                      <q-bar
                        flat
                        class="ma-02 text-bold"
                        style="max-height: 20vh"
                      >
                        <q-icon
                          name="mdi-file-document"
                          color="black"
                          size="1.5em"
                        />Documents
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
                              <div class="col-2">
                                <tr>
                                  <div class="text-left">Agent Image</div>
                                  <td class="text-right" width="200px">
                                    <q-btn
                                      class="text-bold"
                                      label="view"
                                      color="secondary"
                                      size="sm"
                                      icon-right="mdi-eye"
                                      @click="
                                        showDocument(
                                          agentEditedItem.agent_image,
                                          'Agent Image'
                                        )
                                      "
                                    />
                                  </td>
                                </tr>
                              </div>
                            </tbody>
                          </div>
                        </div>
                      </q-card-section>
                    </q-markup-table>
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
          </div>
        </q-layout>
      </q-dialog>
      <!-- VIEW DETAILS -->
      <q-dialog
        v-model="subPropertyView"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card flat bordered class="bg-white">
          <q-table
            dense
            :title="title"
            :data="agent_registration_rows"
            :columns="agent_registration_columns"
            row-key="sno"
            :filter="filter"
            :selected.sync="selected"
            separator="cell"
            :pagination.sync="pagination"
            :hide-header="mode === 'grid'"
            :grid="mode === 'grid'"
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
              <q-chip
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="editOpenAddDialog()"
              >
                Add MHBAP
              </q-chip>
              <q-btn
                flat
                dense
                color="primary"
                class="text-black text-weight-bold"
                @click="subPropertyView = false"
              >
                <q-icon name="las la-chevron-circle-left" />Back
              </q-btn>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="primary"
                  @click="viewPropertyItem(props.row)"
                  label="View"
                  size="sm"
                  ><q-tooltip :disable="$q.platform.is.mobile"
                    >View Details</q-tooltip
                  ></q-btn
                >
                <q-btn
                  color="green"
                  @click="editPropertyItem(props.row)"
                  label="Edit"
                  size="sm"
                >
                  <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                </q-btn>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </q-dialog>
    </q-page>
    <!-- ADD AGENT DETAILS -->
    <q-dialog
      v-model="agentLocationForm"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form ref="agentLocationForm" class="q-gutter-xs">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">MH Booking Agent Details</div>
              <q-space />
              <q-btn
                dark
                flat
                icon="close"
                color="white"
                @click="closeAgentDialog"
              >
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Basic Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input
                    dense
                    outlined
                    v-model="editedItem.agent_name"
                    readonly
                    label="Agent Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    readonly
                    v-model="editedItem.agent_sub_name"
                    label="Agent Sub Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentItemDetails.agent_phone"
                    label="Phone *"
                    lazy-rules
                    mask="##########"
                    style="width: 250px"
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('Phone no'), phone()]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentItemDetails.agent_email_id"
                    label="Email *"
                    lazy-rules
                    hide-bottom-space
                    style="width: 250px"
                    :rules="[required('Email'), email()]"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentItemDetails.agent_latitude"
                    label="Latitude *"
                    lazy-rules
                    style="width: 200px"
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('latitude'), number()]"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-latitude"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentItemDetails.agent_longitude"
                    label="Longitude *"
                    lazy-rules
                    style="width: 200px"
                    :rules="[required('longitude'), number()]"
                    label-color="black"
                    hide-bottom-space
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-longitude"
                        color="secondary"
                      /> </template
                  ></q-input>

                  <q-input
                    dense
                    outlined
                    v-model="agentItemDetails.agent_description"
                    label="Description"
                    lazy-rules
                    style="width: 250px"
                    label-color="black"
                    hide-bottom-space
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-comment" color="secondary" /> </template
                  ></q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Address Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input
                    dense
                    outlined
                    hide-bottom-space
                    v-model="agentItemDetails.building_no"
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
                    v-model="agentItemDetails.street"
                    label="Street/Colony Name*"
                    lazy-rules
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('Street/Colony')]"
                    ><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentItemDetails.land_mark"
                    label="Landmark *"
                    label-color="black"
                    hide-bottom-space
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
                    readonly
                    v-model="agentItemDetails.country"
                    label="Country"
                    hide-bottom-space
                    label-color="black"
                    :rules="[required('Country')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    fill-input
                    :options="states"
                    option-value="state_id"
                    option-label="state_name"
                    v-model="agentItemDetails.state"
                    @input="
                      loadAllCities(agentItemDetails.state);
                      emptycities();
                    "
                    label="State *"
                    hide-bottom-space
                    label-color="black"
                    :rules="[required('State')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-select>
                  <q-select
                    dense
                    outlined
                    use-input
                    hide-selected
                    :options="cities"
                    option-value="city_id"
                    option-label="city"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="agentItemDetails.city"
                    label="City *"
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('City')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-select>
                  <q-input
                    dense
                    outlined
                    lazy-rules
                    mask="######"
                    v-model="agentItemDetails.pin_code"
                    label="Pincode *"
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('Pincode'), pinNumber()]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Photo / Image</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="agent_image"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    hide-bottom-space
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload Image"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
              </q-card-actions>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"
                @click="onSubmitDetailForm"
              ></q-btn>
            </div>
          </q-card>
        </q-form>
      </q-layout>
    </q-dialog>

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
          icon="add"
          @click="addDataDialog = true"
          class="text-weight-bold"
        >
          Add MHBAP
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
    <!-- </q-page-container>  -->
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import { exportFile } from "quasar";
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
const AgentPartnerRegDetails = () => {
  return {
    property: "",
    name: "",
    agent_name: "",
    company_name: "",
    individual_name:"",
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
    //pan_card_no: [],
    pan_card_file: [],
    addhaar_no: [],
    gst_tin: [],
    mh_agreement: [],
    // partner_pic: [],
    mb_certificate: [],
    property_tax: [],
    fire_safety: [],
    cancelled_cheque: [],
    agent_id: "",
    agent_image: [],
     state_id: "",
        city_id: "",
  };
};
export default {
  data() {
    return {
      ...validations,
      // ...filepaths,
      title: "MH Booking Agent Partner (MHBAP)",
      step: 1,
      label2: "",
      selected: [],
      data: [],
      details: false,
      agentItemDialog: false,
      url: "",
      onclickValue: "",
      subPropertyView: false,
      agentLocationForm: false,
      maximizedToggle: true,
      showPanDoc: false,
      editedIndex: -1,
      editedItem: {
        agent_id: "",
        agent_sub_id: "",
        agent_name: "",
        agent_sub_name: "",
      },
      agentEditedItem: {
        agent_id: "",
        agent_sub_id: "",
        agent_name: "",
        agent_sub_name: "",
      },
      agentItemDetails: {
        agent_id: "",
        agent_sub_id: "",
        // name:"",
        agent_name: "",
        agent_sub_name: "",
        agent_phone: "",
        agent_email_id: "",
        agent_latitude: "",
        agent_longitude: "",
        agent_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "",
        state: "",
        city: "",
        pin_code: "",
      },
      dialogTitle: "",
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      pan_card_file: [],
      addhaar_no: [],
      gst_tin: [],
      mh_agreement: [],
      // partner_pic: [],
      mb_certificate: [],
      property_tax: [],
      fire_safety: [],
      cancelled_cheque: [],
      agent_image: [],

      agentForm: {
        user_id: "",
        agent_sub_name: "",
        name: "",
        agent_id: "",
        agent_sub_id: "",
        agent_name: "",
        company_name: "",
        individual_name:"",
        phone: "",
        fax: "",
        email_id: "",
        agent_commission: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "",
        state: "",
        city: "",
        pin_code: "",
        // propertyType: "",
        pan: "",
        aadhar: "",
        gstin: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        accept: false,
        pan_card_upt: "",
        addhaar_no_upt: "",
        mh_agreement_upt: "",
        mb_certificate_upt: "",
        gst_tin_upt: "",
        property_tax_upt: "",
        fire_safety_upt: "",
        cancelled_cheque_upt: "",
        state_id: "",
        city_id: "",
      },
      pagination: {
        rowsPerPage: 10,
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      statesList: [],
      // propertyTypes: [
      //   "Agent Registration1",
      //   "Agent Registration2",
      //   "Agent Registration3",
      //   "Agent Registration4",
      //   "Agent Registration5",
      // ],
      stateOption: [],
      cityOptions: [],
      small: false,
      recordsStatus: [],
      visible: false,
      Countries: ["India"],
      // photoSmall: false,
      // showpartnerDoc: false,
      // agreSmall: false,
      // showmhDoc: false,
      // gstInSmall: false,
      // showGstDoc: false,
      // aadhaarSmall: false,
      // showAadharDoc: false,
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];

        return user;
      },
      property: (state) => state.dropdown.property_arr,
      agent_partner_registration_columns: (state) =>
        state.dashboard.agent_partner_registration_columns,
      agent_partner_registration_status_count: (state) =>
        state.dashboard.agent_partner_registration_status_count,
      agent_registration_rows: (state) =>
        state.dashboard.agent_registration_rows,
      agent_registration_columns: (state) =>
        state.dashboard.agent_registration_columns,
      agent_data_rows: (state) => state.dashboard.agent_data_rows,
      agent_data_columns: (state) => state.dashboard.agent_data_columns,
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
    }),
    ...mapGetters("dashboard", ["agent_partner_registration_status_count"]),
    ...mapGetters("dashboard", ["agent_partner_registration_rows"]),
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("dashboard/getAgentRegStatusCount");
    this.$store.dispatch("dashboard/getAgentPartnerRegDetails");
    // this.$store.dispatch("dashboard/getAgentLocationDetails");
    this.$store.dispatch("master/loadAllStates");
  },
  meta() {
    return {
      title: this.title,
    };
  },
  methods: {
    // statusCounts() {
    //   let Array2 = Object.values(
    //     this.agent_partner_registration_rows.reduce((c, { status }) => {
    //       /* c[status] = c[status] || { key: status, count: 0 };
    //       c[status].count++; */
    //       c[status] = c[status] || { status: status, count: 0 };
    //       c[status].count++;
    //       return c;
    //     }, {})
    //   );
    //   return Array2;
    // },
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    ...mapActions("dashboard", ["createAgentReg"]),
    ...mapActions("dashboard", ["createAgentLocation"]),
    ...mapActions("dashboard", ["getAgentLocationDetails"]),
    ...mapActions("dashboard", ["agentRegistrationMasterExistingUser"]),
    ...mapActions("dashboard", ["getAgentPartnerRegDetails"]),
    ...mapActions("dashboard", ["getAgentRegBasedOnStatus"]),
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("dashboard", ["updateAgentDetails"]),

    onSubmit(val) {
      if (val == "submit") {
        this.$refs.agentFormSubmit.validate().then((success) => {
          if (success) {
            if (this.editedItem.agent_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  this.agentForm.agent_id = this.editedItem.agent_id;
                  this.agentForm.agent_name = this.editedItem.agent_name;
                  this.agentForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("property_tax", this.property_tax);
                  formData.append("fire_safety", this.fire_safety);
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  formData.append(
                    "agentDetails",
                    JSON.stringify(this.agentForm)
                  );
                  this.createAgentReg(formData);
                  this.agentForm = AgentPartnerRegDetails();
                  this.resetFiles();
                  this.$refs.agentFormSubmit.resetValidation();
                  this.addDataDialog = false;
                  this.subPropertyView = false;
                  this.details = false;
                  this.step = 1;
                  this.$store.dispatch("dashboard/getAgentRegStatusCount");
                  this.getAgentPartnerRegDetails();
                })
                .onCancel(() => {
                  this.resetFiles();

                  this.addDataDialog = true;
                });
            } else {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  this.agentForm.agent_id = "";
                  this.agentForm.agent_sub_name = this.agentForm.agent_name;
                  this.agentForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("property_tax", this.property_tax);
                  formData.append("fire_safety", this.fire_safety);
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  formData.append(
                    "agentDetails",
                    JSON.stringify(this.agentForm)
                  );
                  this.createAgentReg(formData);
                  this.agentForm = AgentPartnerRegDetails();
                  this.resetFiles();
                  this.$refs.agentFormSubmit.resetValidation();
                  this.addDataDialog = false;
                  this.step = 1;
                  this.$store.dispatch("dashboard/getAgentRegStatusCount");
                  this.getAgentPartnerRegDetails();
                })
                .onCancel(() => {
                  this.resetFiles();

                  this.addDataDialog = true;
                });
            }
          }
        });
      } else if (val == "update") {
        this.$refs.agentFormSubmit.validate().then((success) => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update the data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.agentForm.user_id = this.userDetails.account_id;
                this.updateAgentDetails(this.agentForm);
                this.agentForm = AgentPartnerRegDetails();
                this.$refs.agentFormSubmit.resetValidation();
                this.addDataDialog = false;
                this.step = 1;
                this.resetFiles();
                this.subPropertyView = false;
                this.getAgentPartnerRegDetails();
                this.getAgentRegBasedOnStatus();
              })
              .onCancel(() => {
                this.resetFiles();

                this.addDataDialog = true;
              });
          }
        });
      }
    },

    onSubmitDetailForm() {
      this.$refs.agentLocationForm.validate().then((success) => {
        if (this.agentItemDetails.agent_id != "") {
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
                formData.append("agentimage", this.agent_image);
                formData.append(
                  "agentItemDetails",
                  JSON.stringify(this.agentItemDetails)
                );
                this.createAgentLocation(formData);
                this.resetFiles();
                // this.agentItemDetails = AgentLocationDetails();
                this.$refs.agentLocationForm.resetValidation();
                this.addDataDialog = false;
                this.subPropertyView = true;
                this.agentLocationForm = false;
                this.details = false;
                // this.agentItemDialog = false;
                this.agentItemDetails = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.addDataDialog = true;
                // this.agentLocationForm = true;
              });
          }
        }
      });
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.agent_sub_name = item.agent_sub_name;
      this.agentRegistrationMasterExistingUser(item.agent_id);
      this.subPropertyView = true;
      // this.details = true;
    },
    viewPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.agent_sub_id = item.agent_sub_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.agent_sub_name = item.agent_sub_name;
      this.details = true;
      this.getAgentLocationDetails(this.editedItem);
    },
    editPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.step = 1;
      this.addDataDialog = true;
      this.onclickValue = "edit";
      this.agentForm.agent_id = item.agent_id;
      this.agentForm.agent_sub_id = item.agent_sub_id;
      this.agentForm.name = item.agent_sub_name;
      this.agentForm.agent_name = item.agent_name;
      this.agentForm.agent_sub_name = item.agent_sub_name;
      this.agentForm.company_name = item.company_name;
      this.agentForm.individual_name = item.individual_name;
      this.agentForm.phone = item.phone;
      this.agentForm.fax = item.fax;
      this.agentForm.email_id = item.email_id;
      this.agentForm.agent_commission = item.agent_commission;
      this.agentForm.description = item.description;
      this.agentForm.building_no = item.building_no;
      this.agentForm.street = item.street;
      this.agentForm.land_mark = item.land_mark;
      this.agentForm.country = item.country;
      this.agentForm.state = item.state;
      this.agentForm.state_id = item.state_id;
      this.agentForm.city = item.city;
      this.agentForm.city_id = item.city_id;
      this.agentForm.pin_code = item.pin_code;
      this.agentForm.pan = item.pan;
      this.agentForm.aadhar = item.aadhar;
      this.agentForm.gstin = item.gstin;
      this.agentForm.bankAccountNo = item.bankAccountNo;
      this.agentForm.bankName = item.bankName;
      this.agentForm.branchName = item.branchName;
      this.agentForm.ifsc = item.ifsc;
      //docs update
      this.agentForm.pan_card_upt = item.pan_card_file_loc;
      this.agentForm.addhaar_no_upt = item.addhaar_no_loc;
      this.agentForm.mh_agreement_upt = item.mh_agreement_loc;
      this.agentForm.mb_certificate_upt = item.mb_certificate_loc;
      this.agentForm.gst_tin_upt = item.gst_tin_loc;
      this.agentForm.property_tax_upt = item.property_tax_loc;
      this.agentForm.fire_safety_upt = item.fire_safety_loc;
      this.agentForm.cancelled_cheque_upt = item.cancelled_cheque_doc;

      this.pan_card_file = {
        name: item.pan_card_file_loc ?? "",
      };

      this.addhaar_no = {
        name: item.addhaar_no_loc ?? "",
      };

      this.mh_agreement = {
        name: item.mh_agreement_loc ?? "",
      };
      this.mb_certificate = {
        name: item.mb_certificate_loc ?? "",
      };
      this.gst_tin = {
        name: item.gst_tin_loc ?? "",
      };
      this.property_tax = {
        name: item.property_tax_loc ?? "",
      };
      this.fire_safety = {
        name: item.fire_safety_loc ?? "",
      };
      this.cancelled_cheque = {
        name: item.cancelled_cheque_doc ?? "",
      };
    },
    showAgentData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.agentEditedItem = Object.assign({}, item);
      this.agentEditedItem.agent_id = item.agent_id;
      this.agentEditedItem.agent_sub_id = item.agent_sub_id;

      // this.editedItem.partner_id = item.partner_id;
      this.agentItemDialog = true;
    },
    emptycities() {
      this.agentForm.city = "";
      this.agentItemDetails.city = "";
    },
    editOpenAddDialog() {
      // this.agentForm.country = "India";
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      this.agentForm = AgentPartnerRegDetails();
      this.addDataDialog = true;
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.agent_id = "");
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      this.agentForm = AgentPartnerRegDetails();
      this.addDataDialog = true;
      this.details = false;
    },
    onReset() {
      this.agentForm = AgentPartnerRegDetails();
      // this.$refs.agentFormSubmit.resetValidation();
    },
    closeAgentDialog() {
      this.agentLocationForm = false;
    },
    closeAddDataDialog() {
      this.addDataDialog = false;
      this.agentForm = AgentPartnerRegDetails();
      this.resetFiles();
      this.$refs.agentFormSubmit.resetValidation();
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
    checkFileSize(files) {
      return files.filter((file) => file.size < 1048576);
    },
    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 1 MB`,
      });
    },
    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      // this.partner_pic = [];
      this.mb_certificate = [];
      this.property_tax = [];
      this.fire_safety = [];
      this.cancelled_cheque = [];
      this.agent_image = [];
      // this.agentForm = [];
    },
    openagentLocationForm() {
      this.agentLocationForm = true;
      this.agentItemDetails.agent_id = this.editedItem.agent_id;
      this.agentItemDetails.agent_sub_id = this.editedItem.agent_sub_id;
      this.agentItemDetails.agent_name = this.editedItem.agent_name;
      this.agentItemDetails.agent_sub_name = this.editedItem.agent_sub_name;
    },
    filterFnStates(val, update) {
      if (val === "") {
        update(() => {
          this.stateOptions = this.states;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.stateOptions = this.states.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFnCities(val, update) {
      if (val === "") {
        update(() => {
          this.cityOptions = this.cities;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.cityOptions = this.cities.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    exportTable() {
      // naive encoding to csv format
      const content = [
        this.agent_registration_columns.map((col) => wrapCsvValue(col.label)),
      ]
        .concat(
          this.agent_registration_rows.map((row) =>
            this.agent_registration_columns
              .map((col) =>
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
          icon: "warning",
        });
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-height: 500px
</style>
