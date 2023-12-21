<template>
  <div>
    <q-page style="padding-top: 100px" class="q-pa-md">
      <div class="q-pa-md">
        <q-chip square clickable @click="getTransportRegMaster">
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
        <q-chip
          square
          clickable
          @click="getTransportRegistrationBasedOnStatus('approved')"
        >
          <q-avatar color="secondary" text-color="white">{{
            this.property_transport_registration_status_count.length == 0
              ? "0"
              : this.property_transport_registration_status_count[0].acount
          }}</q-avatar>
          Approved
        </q-chip>
        <q-chip
          square
          clickable
          @click="getTransportRegistrationBasedOnStatus('rejected')"
        >
          <q-avatar color="red" text-color="white">{{
            this.property_transport_registration_status_count.length == 0
              ? "0"
              : this.property_transport_registration_status_count[0].rcount
          }}</q-avatar>
          Rejected
        </q-chip>
        <q-chip
          square
          clickable
          @click="getTransportRegistrationBasedOnStatus('pending')"
        >
          <q-avatar color="red" text-color="white">{{
            this.property_transport_registration_status_count.length == 0
              ? "0"
              : this.property_transport_registration_status_count[0].pcount
          }}</q-avatar>
          Pending
        </q-chip>
      </div>
      <q-table
        :data="transport_reg_rows"
        :columns="transport_reg_columns"
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
          <!-- <q-form @submit="onSubmit" ref="transpoterPartnerForm"> -->
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
                    v-model="transportPartnerForm.name"
                    label="Transport Partner Name *"
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
                    v-model="transportPartnerForm.alias_name"
                    label="Transport Partner Alias Name *"
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
                    v-model="transportPartnerForm.phone"
                    label="Phone"
                    lazy-rules
                    mask="##########"
                    style="width:250px"
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
                    v-model="transportPartnerForm.fax"
                    lazy-rules
                    mask="##########"
                    label="Whatsapp no"
                    style="width:250px"
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
                    v-model="transportPartnerForm.email_id"
                    label="Email"
                    lazy-rules
                    class="col-3"
                    hide-bottom-space
                    style="width:250px"
                    :rules="[required('Email'), email()]"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" /> </template
                  ></q-input>

                  <q-input
                    class="col-2"
                    dense
                    outlined
                    v-model="transportPartnerForm.description"
                    label="Description"
                    lazy-rules
                    style="width:250px"
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
                    v-model="transportPartnerForm.building_no"
                    label="House/Flat No *"
                    lazy-rules
                    label-color="black"
                    :rules="[required('House')]"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.street"
                    label="Street/Colony Name*"
                    lazy-rules
                    label-color="black"
                    :rules="[required('Street/Colony')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.land_mark"
                    label="Landmark"
                    label-color="black"
                    :rules="[required('Landmark')]"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker-circle"
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
                    :options="countriesArr"
                    v-model="transportPartnerForm.country"
                    label="Country"
                    label-color="black"
                    :rules="[required('Country')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-select>
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
                    v-model="transportPartnerForm.state"
                    @input="
                      loadAllCities(transportPartnerForm.state);
                      emptyCities();
                    "
                    label="State"
                    label-color="black"
                    :rules="[required('State')]"
                  >
                    <template v-slot:prepend>
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
                    v-model="transportPartnerForm.city"
                    label="City"
                    label-color="black"
                    :rules="[required('City')]"
                  >
                    <template v-slot:prepend>
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
                    v-model="transportPartnerForm.pin_code"
                    label="Pincode"
                    label-color="black"
                    :rules="[required('Pincode'), pinNumber()]"
                  >
                    <template v-slot:prepend>
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
            <q-step :name="3" :done="step > 3" title="eKYC" icon="assignment">
              <q-form ref="agentFormStaDocs">
                <div
                  class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                "
                >
                  <!-- <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 400px"
                    fill-input
                    :options="propertyTypes"
                    v-model="transportPartnerForm.propertyType"
                    label="Type Of Property *"
                    label-color="black"
                    :rules="[required('Property Type')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select> -->
                </div>
                <div
                  class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold"
                >
                  Proof of Identity and Proof of Address:
                </div>
                <div class="q-pa-md row q-gutter-md  items-start">
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.pan"
                    mask="AAAAA####A"
                    label="PAN No"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    label-color="black"
                  />
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width:200px"
                    class="hint-bold"
                    dense
                    v-bind:readonly="this.onclickValue == 'edit'"
                    filled
                    clearable
                    v-model="pan_card_file"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Upload PAN Card"
                    :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.aadhar"
                    label="AADHAAR No"
                    mask="############"
                    label-color="black"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width:200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="addhaar_no"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Upload AADHAAR"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.gstin"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    label="GSTIN"
                    label-color="black"
                    mask="##AAAAA####A###"
                  />
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width:200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-bind:readonly="this.onclickValue == 'edit'"
                    v-model="gst_tin"
                    mask="##AAAAA####A###"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Upload GSTIN"
                    :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                </div>
                <div
                  class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold"
                >
                  Documents:
                </div>
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width:200px"
                    class="hint-bold"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    dense
                    filled
                    v-model="mh_agreement"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Agreement Document"
                    :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>

                  <!-- <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width:200px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="partner_pic"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Transport Partner Photo"
                    :rules="[val => val || 'Please select file']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file> -->
                  <!-- <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width:200px"
                    class="hint-bold"
                    clearable
                    dense
                    filled
                    v-model="mb_certificate"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="val => {files = val;}"
                    hint="Business Certificate"
                    :rules="[(val) => val || 'Please select file']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file> -->
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="undertaking_certificate"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Upload Undertaking"
                    :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="property_tax"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Upload Indemnity Bond"
                    :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="fire_safety"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Upload Declaration"
                    :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <!-- <q-input
                style="width:250px"
                    class="hint-bold"
                  dense
                  filled
                  v-model="foodPartnerForm.file_upload8"
                  type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                  @update:model-value="val => {files = val;}"
                  hint="Latest Property Tax Receipt"
                /> -->
                  <!-- <q-input
                style="width:250px"
                    class="hint-bold"
                  dense
                  filled
                  v-model="transportPartnerForm.file_upload9"
                  type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                  @update:model-value="val => {files = val;}"
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
              <q-form ref="agentFormSubmit">
                <div class="q-pa-md row q-gutter-md  items-start">
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.bankAccountNo"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[number('Bank A/C no')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.ifsc"
                    label="IFSC Code"
                    label-color="black"
                    :rules="[required('IFSC code')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="cancelled_cheque"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                    :rules="[val => val || 'Please select file']"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <!-- <q-input
                  style="width:250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="transportPartnerForm.cancelled_cheque"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="val => {files = val;}"
                    hint="Cancelled Cheque"
                  /> -->
                </div>
                <q-card-actions align="left">
                    <q-toggle
                      v-model="transportPartnerForm.accept"
                      label="I accept the Travel Partner Registration"
                    />
                  </q-card-actions>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                 <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onSubmit('submit')"
                  v-if="this.onclickValue != 'edit'"
                  :disable="this.transportPartnerForm.accept == false"
                />
                <q-btn
                  color="secondary"
                  label="Update"
                  class="text-bold"
                  @click="onSubmit('update')"
                  v-if="this.onclickValue == 'edit'"
                  :disable="this.transportPartnerForm.accept == false"
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
                View of Travel Partner Details:
                {{ editedItem.agent_name }}
              </div>
              <q-space />
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="travelDetailsForm()"
              >
                Add Travel
              </q-chip>
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
                      <div class="col-4 text-left  text-black">Lead Name</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-4 text-left  text-black">Sub Name</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.transport_sub_name }}
                      </div>
                      <div class="col-4 text-left  text-black">Lead Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_id }}
                      </div>
                      <div class="col-4 text-left  text-black">Sub Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.transport_sub_id }}
                      </div>
                      <div class="col-4 text-left  text-black ">Phone</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <div class="col-4 text-left  text-black ">Whatsapp</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.fax }}
                      </div>
                      <div class="col-4 text-left  text-black ">Email</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.email_id }}
                      </div>
                      <!-- <div class="col-3 text-left text-black ">Aaadhaar</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.aadhar }}
                      </div>
                      <div class="col-3 text-left text-black ">Pan Card</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.pan }}
                      </div> -->

                      <div class="col-4 text-left  text-black ">
                        Description
                      </div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.description }}
                      </div>
                      <!-- <div class="col-3 text-left text-black ">Type Of Property</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.propertyType }}
                      </div> -->
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
                  ><q-icon name="mdi-home-circle" color="black" size="1.5em" />
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
                      <div class="col-4 text-left  ">House No</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.building_no }}
                      </div>
                      <div class="col-4 text-left  ">Street</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.street }}
                      </div>
                      <div class="col-4 text-left  ">Landmark</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.land_mark }}
                      </div>
                      <div class="col-4 text-left  ">City</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.city }}
                      </div>
                      <div class="col-4 text-left  ">State</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.state }}
                      </div>
                      <div class="col-4 text-left  ">Country</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.country }}
                      </div>
                      <div class="col-4 text-left  ">Pincode</div>
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
                        <div class="col-4 text-left  ">Account No</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.bankAccountNo }}
                        </div>
                        <div class="col-4 text-left  ">Bank Name</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.bankName }}
                        </div>
                        <div class="col-4 text-left  ">Branch</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.branchName }}
                        </div>
                        <div class="col-4 text-left  ">IFSC Code</div>
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
            <!-- <q-resize-observer @resize="onResize" /> -->
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
                    <div class="col-2">
                      <tr>
                        <td class="text-left">PAN Card</td>
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

                    <div class="col-2">
                      <tr>
                        <td class="text-left">AADHAAR</td>
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

                    <div class="col-2">
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
                      </tr>
                    </div>

                    <div class="col-3">
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
                            @click="
                              showDocument(
                                editedItem.mh_agreement_loc,
                                'Agreement Doc'
                              )
                            "
                          />
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
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.undertaking_certificate,
                                'Undertaking Doc'
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
                                editedItem.property_tax,
                                'Property Tax'
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
                                editedItem.fire_safety,
                                'Fire Safety Document'
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
                                editedItem.cancelled_cheque,
                                'Cancelled Cheque'
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
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Travel Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="travel_item_rows"
                    :columns="travel_item_columns"
                    :pagination.sync="pagination"
                    dense
                    row-key="sno"
                    :filter="filter"
                    :selected.sync="selected"
                    separator="cell"
                    :hide-header="mode === 'grid'"
                    :grid="mode === 'grid'"
                  >
                  <template v-slot:body-cell-action="props">
                      <q-td :props="props">
                        <q-btn color="green" @click="editTravel(props.row)" label="Edit" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
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
                              props.row.vehicle_image,
                              'Vehicle Image'
                            )
                          "
                        />
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
                    dense
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
            </div>
          </div>
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
          </div>
        </q-layout>
      </q-dialog>
      <q-dialog
        v-model="subTransportView"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card flat bordered class="bg-white">
          <q-table
            dense
            :title="title"
            :data="transport_registration_ex_rows"
            :columns="transport_registration_ex_columns"
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
                style="width: 320px"
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
                Add MHTP
              </q-chip>
              <q-btn
                flat
                dense
                color="primary"
                class="text-black text-weight-bold"
                @click="subTransportView = false"
              >
                <q-icon name="las la-chevron-circle-left" />
                Back
              </q-btn>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="primary"
                  @click="viewPropertyItem(props.row)"
                  label="View"
                  size="sm">
                  <q-tooltip :disable="$q.platform.is.mobile">View Details</q-tooltip
                ></q-btn>
                <q-btn
                  color="green"
                  @click="editPropertyItem(props.row)"
                  label="Edit"
                  size="sm">
                  <q-tooltip :disable="$q.platform.is.mobile">Edit Details</q-tooltip
                ></q-btn>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </q-dialog>
      <q-dialog
        v-model="addTravelForm"
        maximized
        persistant
        transition-show="slide-up"
        transition-hide="slide-down"
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
          <q-form ref="addTravelForm">
            <div class="text-overline1 q-gutter-xs" />
            <div class="text-overline1 q-gutter-xs" />
            <q-card class="q-pa-md">
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">Travel Details</div>
              </q-bar>
              <div class="q-pa-md row q-gutter-md">
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="editedItem.agent_name"
                  readonly
                  label="Traveller Name *"
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
                  v-model="editedItem.transport_sub_name"
                  readonly
                  label="Traveller Sub Name *"
                  hide-bottom-space
                  style="width:250px"
                  label-color="black"
                  :rules="[required('Travel Sub Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-select
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="VehicleTypes"
                  fill-input
                  options-dense
                  input-debounce="0"
                  v-model="travelLocation.vehicle_type"
                  label="Vehicle Type *"
                  label-color="black"
                  :rules="[required('Vehicle Type')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select>
                 <q-input
                  dense
                  outlined
                  v-model="travelLocation.vehicle_name"
                  label="vehicle_name *"
                  class="col-3"
                  hide-bottom-space
                  style="width:250px"
                  :rules="[required('vehicle_name')]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-input>
                <q-select
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="vehicleseats"
                  fill-input
                  options-dense
                  input-debounce="0"
                  v-model="travelLocation.no_of_seaters"
                  label="No Of Seaters *"
                  label-color="black"
                  :rules="[required('Seaters')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select>
                <q-input
                  dense
                  outlined
                  v-model="travelLocation.price"
                  label="Price *"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width:250px"
                  :rules="[required('Price'), number()]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <q-select
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="vehiclePrice"
                  fill-input
                  options-dense
                  input-debounce="0"
                  v-model="travelLocation.vehicle_price"
                  label="Vehicle Price *"
                  label-color="black"
                  :rules="[required('Vehicle Price')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select>

                <q-input
                  class="col-2"
                  dense
                  outlined
                  v-model="travelLocation.description"
                  label="Description"
                  lazy-rules
                  style="width:250px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-comment" color="secondary" />
                  </template>
                </q-input>
                 <q-input
                        dense
                        outlined
                        v-model="travelLocation.special_offer"
                        label="Special Offer *"
                        :rules="[required('Special Offer'),number()]"
                        lazy-rules
                        style="width: 180px"
                        label-color="black"
                        hide-bottom-space
                      >
                        <template v-slot:prepend>
                          <q-icon
                            name="mdi-currency-inr"
                            color="secondary"
                          /> </template
                      ></q-input>
                <q-file
                  color="lime-11"
                  bg-color="teal"
                  style="width: 200px"
                  class="hint-bold"
                  dense
                  filled
                  clearable
                  v-model="vehicle_image"
                  type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Upload vehicle Image"
                  :rules="[val => val || 'Please select file']"
                  :filter="checkFileSize"
                  @rejected="onRejected"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <!-- <q-btn push clickable color="green" icon="add" /> -->
              </div>
            </q-card>
            <!-- <q-separator />
            <div class="q-pa-md">
              <q-table
                title="Travel Details"
                dense
                :rows="rows"
                :columns="columns"
                row-key="name"
              />
            </div> -->
            <q-separator />
            <q-spacer />
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"
                v-if="this.onclickValue != 'edit'"
                @click="submitTravelLocData('submit')"
                :disable="this.travelLocation.accept == false"
              />
              <q-btn
                color="secondary"
                label="Update"
                class="text-bold"
                @click="submitTravelLocData('update')"
                v-if="this.onclickValue == 'edit'"
                :disable="this.travelLocation.accept == false"
              />
            </div>
          </q-form>
        </q-card>
      </q-dialog>
    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>
        <q-chip
          clickable
          color="secondary"
          text-color="white"
          icon="add"
          @click="OpenAddDialog()"
          class="text-weight-bold"
        >
          Add MHTP
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

const transportRegMaster = () => {
  return {
    property: "",
    property_name: "",
    name: "",
    agent_name: "",
    transport_sub_name: "",
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
    agent_id: "",
    // propertyType: "",
    undertaking_certificate: [],
    property_tax: [],
    fire_safety: [],
    accept: false
  };
};
const travelLocRegistration = () => {
  return {
     agent_name: "",
    transport_sub_name: "",
    vehicle_type: "",
    city:"",
    vehicle_name:"",
    no_of_seaters:"",
    price: "",
    vehicle_price: "",
    description: "",
    special_offer:"",
    vehicle_image: "",
  };
};
// const travelLocation = () => {
//   return {
//     travel_name: "",
//     phone: "",
//     email_id: "",
//     description: "",
//   }
// };

export default {
  data() {
    return {
      dialogTitle: "",
      ...validations,
      url: "",
      title: "MH Travel Partner (MHTP)",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      gender_options: ["Mr", "Mrs"],
      zoom: 4,
      selected: [],

      data: [],
      details: false,
      subTransportView: false,
      visible: false,
      showPanDoc: false,
      addTravelForm: false,
      maximizedToggle: true,

      small: false,
      editedIndex: -1,

      pan_card_file: [],
      addhaar_no: [],
      gst_tin: [],
      mh_agreement: [],
      // partner_pic: [],
      mb_certificate: [],
      undertaking_certificate: [],
      property_tax: [],
      fire_safety: [],
      cancelled_cheque: [],
      vehicle_image: [],
      VehicleTypes: ["Ola", "Uber", "Rapido"],
      vehiclePrice: ["Per/Km", "Per/Day", "Per/Trip"],
      vehicleseats: ["5 Seater", "7 Seater"],
      editedItem: {
       agent_id: "",
        agent_name: "",
        account_id: " ",
        city:"",
        city_id:"",
        transport_sub_id: "",
        transport_sub_name: "",
        travel_name: "",
      },
      countriesArr: ["India"],
      onclickValue: "",
      transportPartnerForm: {
        user_id: "",
        name: "",
        agent_name: "",
        transport_sub_id: "",
        transport_sub_name: "",
        alias_name: "",
        phone: "",
        fax: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        city_id:"",
        country: "",
        state: "",
        pin_code: "",
        pan: "",
        aadhar: "",
        gstin: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        cancelled_cheque: "",
        accept: false,
        pan_card_file: "",
        addhaar_no: "",
        gst_tin: "",
        mh_agreement: "",
        // partner_pic: "",
        mb_certificate: "",
        undertaking_certificate: "",
        property_tax: "",
        fire_safety: "",
        agent_id: "",
        prev_name: "",
        prev_sub_name: ''
      },
      travelLocation: {
       account_id: "",
        user_id: "",
        agent_id: "",
        transport_sub_id: "",
        agent_name: "",
        transport_sub_name: "",
        vehicle_type: "",
        city:"",
        city_id:"",
        vehicle_name:"",
        no_of_seaters:"",
        price: "",
        vehicle_price: "",
        description: "",
        special_offer:"",
        vehicle_image: "",
        txn_id: "",
      },
      pagination: {
        rowsPerPage: 10
      },
      mode: "list",
      filter: "",
      addDataDialog: false
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      states: state => state.master.states_arr,
      cities: state => state.master.city_arr,
      property: state => state.dropdown.property_arr,
      transport_reg_columns: state => state.dashboard.transport_reg_columns,
      property_transport_registration_status_count: state =>
        state.dashboard.property_transport_registration_status_count,
      transport_registration_ex_rows: state =>
        state.dashboard.transport_registration_ex_rows,
      transport_registration_ex_columns: state =>
        state.dashboard.transport_registration_ex_columns,
      travel_item_rows: state => state.dashboard.travel_item_rows,
      travel_item_columns: state => state.dashboard.travel_item_columns
    }),
    ...mapGetters("dashboard", ["transport_reg_rows"]),
    ...mapGetters("dashboard", ["property_transport_registration_status_count"])
  },
  mounted() {
    this.$store.dispatch("dashboard/getTransportRegistrationStatusCount");
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("dashboard/getTransportRegMaster");
    // this.$store.dispatch("partners/travelDetailsSaving")
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
    /* for travel details */
    //
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("dashboard", ["createTransporterRegDetails"]),
    ...mapActions("dashboard", ["getTransportRegistrationBasedOnStatus"]),
    ...mapActions("dashboard", ["getTransportRegMaster"]),
    ...mapActions("dashboard", ["transportRegistrationMasterExistingUser"]),
    // ...mapActions("partners", ["createTravelLocRegDetails"]),
    ...mapActions("dashboard", ["getTravelDetailsSaving"]),
    ...mapActions("dashboard", ["travelDetailsSaving"]),
    ...mapActions("dashboard", ["travelLocationUpdating"]),
    ...mapActions("dashboard", ["updateTravelPartnerDetails"]),
    onSubmit(val) {
      if(val == 'submit') {
        this.$refs.agentFormSubmit.validate().then(success => {
          if (success) {
            if (this.editedItem.agent_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true
                })
                .onOk(() => {
                  this.transportPartnerForm.agent_id = this.editedItem.agent_id;
                  this.transportPartnerForm.agent_name = this.editedItem.agent_name;
                  this.transportPartnerForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  formData.append(
                    "undertaking_certificate",
                    this.undertaking_certificate
                  );
                  formData.append("property_tax", this.property_tax);
                  formData.append("fire_safety", this.fire_safety);
                  formData.append(
                    "transportPartnerForm",
                    JSON.stringify(this.transportPartnerForm)
                  );
                  this.createTransporterRegDetails(formData);
                  this.transportPartnerForm = transportRegMaster();
                  this.$refs.agentFormSubmit.resetValidation();
                  this.resetFiles();
                  this.addDataDialog = false;
                  this.subTransportView = false;
                  this.step = 1;
                  this.$store.dispatch(
                    "dashboard/getTransportRegistrationStatusCount"
                  );
                  this.getTransportRegMaster();
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
                  persistent: true
                })
                .onOk(() => {
                  this.transportPartnerForm.agent_id = "";
                  this.transportPartnerForm.transport_sub_name = this.transportPartnerForm.name;
                  this.transportPartnerForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  // formData.append("mb_certificate", this.mb_certificate);
                  formData.append("undertaking_certificate",
                    this.undertaking_certificate);
                  formData.append("property_tax", this.property_tax);
                  formData.append("fire_safety", this.fire_safety);
                  formData.append(
                    "transportPartnerForm",
                    JSON.stringify(this.transportPartnerForm)
                  );
                  this.createTransporterRegDetails(formData);
                  this.transportPartnerForm = transportRegMaster();
                  this.$refs.agentFormSubmit.resetValidation();
                  this.resetFiles();
                  this.addDataDialog = false;
                  this.subTransportView =false;
                  this.step = 1;
                  this.$store.dispatch(
                    "dashboard/getTransportRegistrationStatusCount"
                  );
                  this.getTransportRegMaster();
                })
                .onCancel(() => {
                  this.resetFiles();

                  this.addDataDialog = true;
                });
            }
          }
        });
      } else if(val == 'update') {
        this.$refs.agentFormSubmit.validate().then(success => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
            })
            .onOk(() => {
              this.transportPartnerForm.user_id = this.userDetails.account_id;
              this.updateTravelPartnerDetails(this.transportPartnerForm)
              this.transportPartnerForm = transportRegMaster();
              this.$refs.agentFormSubmit.resetValidation();
              this.addDataDialog = false;
              this.step = 1;
              this.resetFiles();
              this.onclickValue = "";
              this.subTransportView = false;
              this.getTransportRegMaster();
            })
          }
        })
      }
    },
    checkFileSize(files) {
      return files.filter(file => file.size < 1048576);
    },
    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 1 MB`
      });
    },
    submitTravelLocData(val) {
    if (val == "submit") {
      this.$refs.addTravelForm.validate().then(success => {
        if (this.travelLocation.agent_id != "") {
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
                this.travelLocation.user_id = this.userDetails.account_id;
                formData.append("vehicle_image", this.vehicle_image);
                formData.append(
                  "travelLocation",
                  JSON.stringify(this.travelLocation)
                );
                this.travelDetailsSaving(formData);
                this.resetFiles();
                this.emptyValue();
                this.travelLocation = travelLocRegistration();
                this.$refs.addTravelForm.resetValidation();
                this.subPropertyView = true;
                this.addTravelForm = false;
                // this.travelLocation = {};
                this.details = false;
                // this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.emptyValue();
                this.addTravelForm = true;
              });
          }
        }
      });
       } else if (val == "update") {
        this.$refs.addTravelForm.validate().then((success) => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.travelLocation.user_id = this.userDetails.account_id;
                this.travelLocationUpdating(this.travelLocation);
                this.$refs.addTravelForm.resetValidation();
                this.addTravelForm = false;
                this.details = false;
                this.subTransportView = true;
                this.resetFiles();

              })
              .onCancel(() => {
                this.resetFiles();
                this.addTravelForm = true;
              });
          }
        });
      }
    },
     editTravel(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.onclickValue = "edit";
      this.travelLocation.account_id = item.account_id;
      this.travelLocation.txn_id = item.txn_id;
      this.travelLocation.agent_id = item.agent_id;
      this.travelLocation.transport_sub_id = item.transport_sub_id;
      this.editedItem.agent_name = item.travel_name;
      this.travelLocation.agent_name = item.travel_name;
      this.travelLocation.transport_sub_name = item.transport_sub_name;
      this.editedItem.transport_sub_name = item.transport_sub_name;
      this.travelLocation.city = item.city;
      this.travelLocation.city_id = item.city_id;
      this.travelLocation.vehicle_type = item.vehicle_type;
      this.travelLocation.vehicle_name = item.vehicle_name;
      this.travelLocation.no_of_seaters = item.no_of_seaters;
      this.travelLocation.price = item.price;
      this.travelLocation.vehicle_price = item.vehicle_price;
      this.travelLocation.description = item.description;
      this.travelLocation.special_offer = item.special_offer;
      this.travelLocation.vehicle_image = item.vehicle_image;
      this.vehicle_image = {
        name: item.vehicle_image ?? "",
      };
      this.addTravelForm = true;
    },
    editOpenAddDialog() {
      this.step = 1;
      this.addDataDialog = true;
      this.transportPartnerForm = transportRegMaster();
      this.$refs.agentFormSubmit.resetValidation();
      this.resetFiles();
    },
    emptyValue() {
      // this.travelLocation.agent_name = [];
      // this.travelLocation.transport_sub_name = [];
      this.travelLocation.price = [];
      this.travelLocation.vehicle_type = [];
      this.travelLocation.vehicle_price = [];
      this.travelLocation.vehicle_name = [];
      this.travelLocation.no_of_seaters = [];
      this.travelLocation.special_offer = [];
      this.vehicle_image =[];
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.agent_id = "");
      this.step = 1;
      this.addDataDialog = true;
      // this.transportPartnerForm = transportRegMaster();
      // this.$refs.agentFormSubmit.resetValidation();
      // this.resetFiles();
      this.details = false;
    },
    travelDetailsForm() {
      this.travelLocation.account_id = this.userDetails.account_id;
      this.travelLocation.agent_id = this.editedItem.agent_id;
      this.travelLocation.transport_sub_id = this.editedItem.transport_sub_id;
      this.travelLocation.agent_name = this.editedItem.agent_name;
      this.travelLocation.transport_sub_name = this.editedItem.transport_sub_name;
       this.travelLocation.city_id =  this.editedItem.city_id;
      this.travelLocation.city =  this.editedItem.city;
      this.addTravelForm = true;
      this.onclickValue ="";
      this.emptyValue();
    },
    reset() {
      this.addTravelForm.resetValidation();
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.transport_sub_id = item.transport_sub_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.city = item.city;
      this.editedItem.city_id = item.city_id;
      // this.editedItem.phone = item.phone;
      this.transportRegistrationMasterExistingUser(item.agent_id);
      this.subTransportView = true;
    },
    editPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.addDataDialog = true;
      this.step=1;
      this.onclickValue = "edit";
      this.transportPartnerForm.agent_id = item.agent_id;
      this.transportPartnerForm.transport_sub_id = item.transport_sub_id;
      this.transportPartnerForm.name = item.transport_sub_name;
      this.transportPartnerForm.prev_name = item.agent_name;
      this.transportPartnerForm.prev_sub_name = item.transport_sub_name;
      this.transportPartnerForm.alias_name = item.alias_name;
      this.transportPartnerForm.phone = item.phone;
      this.transportPartnerForm.fax = item.fax;
      this.transportPartnerForm.email_id = item.email_id;
      this.transportPartnerForm.description = item.description;
      this.transportPartnerForm.building_no = item.building_no;
      this.transportPartnerForm.street = item.street;
      this.transportPartnerForm.land_mark = item.land_mark;
      this.transportPartnerForm.country = item.country;
      this.transportPartnerForm.state = item.state;
      this.transportPartnerForm.city = item.city;
      this.transportPartnerForm.city_id = item.city_id;
      this.transportPartnerForm.pin_code = item.pin_code;
      this.transportPartnerForm.pan = item.pan;
      this.pan_card_file={
        name : item.pan_loc ?? ""
      }
      this.transportPartnerForm.aadhar = item.aadhar;
      this.addhaar_no = {
        name : item.addhaar_loc ?? ""
      }
      this.transportPartnerForm.gstin = item.gstin;
      this.gst_tin = {
        name: item.gst_tin_loc ?? ""
      }
      this.mh_agreement = {
        name : item.mh_agreement_loc ?? ""
      }
      this.mb_certificate = {
        name : item.mb_certificate_loc ?? ""
      }
      this.undertaking_certificate = {
        name : item.undertaking_certificate ?? ""
      }
      this.property_tax = {
        name : item.property_tax ?? ""
      }
      this.fire_safety = {
        name : item.fire_safety ?? ""
      }
      this.transportPartnerForm.bankAccountNo = item.bankAccountNo;
      this.transportPartnerForm.bankName = item.bankName;
      this.transportPartnerForm.branchName = item.branchName;
      this.transportPartnerForm.ifsc = item.ifsc;
      this.cancelled_cheque = {
        name : item.cancelled_cheque ?? ""
      }
    },
    viewPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.transport_sub_id = item.transport_sub_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.transport_sub_name = item.transport_sub_name;
      this.details = true;
      this.getTravelDetailsSaving(this.editedItem);
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
    emptyCities() {
      this.transportPartnerForm.city = "";
      this.travelLocation.city = "";
    },
    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      // this.partner_pic = [];
      this.mb_certificate = [];
      this.undertaking_certificate = [];
      this.property_tax = [];
      this.fire_safety = [];
      this.cancelled_cheque = [];
      this.vehicle_image = [];
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
          v => v.toLowerCase().indexOf(needle) > -1
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
          v => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    exportTable() {
      // naive encoding to csv format
      const content = [
        this.food_registration_columns.map(col => wrapCsvValue(col.label))
      ]
        .concat(
          this.food_registration_rows.map(row =>
            this.food_registration_columns
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
