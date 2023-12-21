<template>
  <div>
    <q-page style="padding-top: 100px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
        <!-- {{ this.recordsStatus }} -->
        <q-table
          :data="property_partner_registration_rows"
          :columns="property_partner_registration_columns"
          :pagination.sync="pagination"
          dense
          separator="cell"
          :grid="mode === 'grid'"
          :filter="filter"
          :selected.sync="selected"
          color="green"
          hide-pagination
        >
        <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="primary"
                  @click="viewPropertyItem(props.row)"
                  label="View"
                  size="sm"
                >
                  <q-tooltip :disable="$q.platform.is.mobile"
                    >View Details</q-tooltip
                  >
                </q-btn>
                <q-btn
                  color="green"
                  @click="editPropertyItem(props.row)"
                  label="Edit"
                  size="sm"
                >
                  <q-tooltip :disable="$q.platform.is.mobile"
                    >Edit Details</q-tooltip
                  >
                </q-btn>
              </q-td>
            </template>
        </q-table>
      </div>

      <!-- ADD NEW DETAILS -->

      <q-dialog v-model="addDataDialog" maximized persistent>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn
              dark
              flat
              icon="close"
              color="white"
              @click="closeAddPartnerDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <!-- <q-form @submit="onSubmit" ref="propertyPartnerForm"> -->
          <q-stepper v-model="step" color="primary" animated done-color="secondary" active-color="primary"
            inactive-color="primary">
            <q-step
              :name="1"
              title="Basic Details"
              icon="settings"
              :done="step > 1"
            >
              <q-form ref="agentFormBasic" >
                <div class="q-pa-md row q-gutter-md justify-center">
                  <div class="row col-12 justify-center">
                   <div class="row col-3 q-mt-sm">
                    <span class="text-bold" >1. Property Partner Name * </span>
                    <q-input
                    class="row col-3 q-mt-sm"
                    dense
                    outlined
                    v-model="propertyPartnerForm.name"
                    label="Property Partner Name*"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                   </div>
                  <div class="row col-6 justify-center">
                    <q-checkbox left-label v-bind:disable="this.onclickValue == 'edit'" color="secondary" class="text-bold" v-model="yes" label="2. Is The Business Entity Name is same as property partner name?" />
                      <div class="row col-6 q-ml-sm" >
                      <q-input
                      dense
                      outlined
                      readonly
                      v-model="this.propertyPartnerForm.name"
                      label="Business Entity Name"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      v-if="yes == true"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="propertyPartnerForm.partner_sub_name"
                      label="Business Entity Name"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      v-if="yes == false"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" /> </template
                    ></q-input>
                      </div>
                  </div>
                </div>
                  <div class="row col-12 q-mt-lg justify-center">
                   <div class="row col-3 q-mt-sm">
                    <span class="text-bold" >3. Enter Phone Number * </span>
                    <q-input
                    class="col-3 q-mt-sm"
                    dense
                    outlined
                    v-model="propertyPartnerForm.phone"
                    hide-bottom-space
                    label="Phone *"
                    mask="##########"
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Phone no'), phone()]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" /> </template
                  ></q-input>
                   </div>
                  <div class="row col-6 justify-center">
                    <q-checkbox left-label color="secondary" v-bind:disable="this.onclickValue == 'edit'" class="text-bold" v-model="no" label="4. Is Your Whatsapp Number is same as Phone Number ?" />
                      <div class="row col-6 q-ml-sm ">
                        <q-input
                    dense
                    outlined
                    v-model="this.propertyPartnerForm.phone"
                    readonly
                    label="WhatsApp No "
                    style="width: 250px"
                    label-color="black"
                    v-if="no == true"
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
                    v-model="propertyPartnerForm.fax"
                    lazy-rules
                    hide-bottom-space
                    mask="##########"
                    label="WhatsApp No *"
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('WhatsApp no'), phone()]"
                    v-if="no == false"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-whatsapp"
                        color="secondary"
                      /> </template
                  ></q-input>
                </div>
                  </div>
                </div>

                <div class="row col-12 q-mt-lg justify-center">
                  <div class="row col-3 q-mt-sm">

                <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.alternate_no"
                    lazy-rules
                    mask="##########"
                    label="Alternate Number"
                    style="width: 250px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-phone"
                        color="secondary"
                      /> </template
                  ></q-input>
                </div>
                <div class="row col-6 q-mt-sm justify-center">
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.email_id"
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
                </div>
              </div>
               <div class="row col-12 q-mt-lg justify-center">
                  <div class="row col-3 q-mt-sm">

                    <q-input

                 dense
                 outlined
                 v-model="propertyPartnerForm.description"
                 label="Remarks"
                 lazy-rules
                 style="width: 250px"
                 label-color="black"
               >
                 <template v-slot:prepend>
                   <q-icon name="mdi-comment" color="secondary" /> </template
               ></q-input>
                </div>
                <div class="row col-6 q-mt-sm justify-center">

                </div>
              </div>

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
                <div class="q-pa-md row col-12 q-gutter-md justify-center">
                  <q-input
                  class="row col-3"
                    dense
                    outlined
                    v-model="propertyPartnerForm.building_no"
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
                  class="row col-3"
                    dense
                    outlined
                    v-model="propertyPartnerForm.street"
                    label="Street/Colony Name*"
                    lazy-rules
                    label-color="black"
                    :rules="[required('Street/Colony')]"
                    ><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" /> </template
                  ></q-input>
                  <q-input
                  class="row col-3"
                    dense
                    outlined
                    v-model="propertyPartnerForm.land_mark"
                    label="Landmark"
                    label-color="black"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker-circle"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-select
                  class="row col-3"
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    fill-input
                    :options="countriescheck"
                    @input="checkstate()"
                    option-value="name"
                    option-label="name"
                    v-model="propertyPartnerForm.country"
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
                  class="row col-3"
                    ref="indiastate"
                    v-if="indiastate==true"
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    fill-input
                    :options="states"
                    option-value="state_id"
                    option-label="state_name"
                    v-model="propertyPartnerForm.state"
                    @input="
                      loadAllCities(propertyPartnerForm.state);
                      emptyCities();
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
                    ref="indiacity"
                    v-if="indiacity==true"
                    dense
                    outlined
                    use-input
                    hide-selected
                    :options="cities"
                    option-value="city_id"
                    option-label="city"
                    fill-input
                    class="row col-3"
                    options-dense
                    input-debounce="0"
                    v-model="propertyPartnerForm.city"
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
                    ref="otherstate"
                    v-if="otherstate==true"
                    dense
                    outlined
                    class="row col-3"
                    v-model="propertyPartnerForm.state1"
                    label="State *"
                    label-color="black"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                  ref="othercity"
                  v-if="othercity==true"
                    dense
                    outlined
                    v-model="propertyPartnerForm.city1"
                    label="City *"
                    class="row col-3"
                    label-color="black"
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
                    v-model="propertyPartnerForm.pin_code"
                    class="row col-3"
                    label="Pincode/Zipcode *"
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
                  class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  "
                >
                <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 400px"
                    fill-input
                    :options="propertyOptions"
                    option-value="property_id"
                    option-label="property_name"
                    v-model="propertyPartnerForm.propertyType"
                    label="Type Of Property *"
                    label-color="black"
                    :rules="[required('Property Type')]"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select>
                </div>-->
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
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.pan"
                    label="PAN No"
                    mask="AAAAA####A"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    label-color="black"
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
                    :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.aadhar"
                    mask="############"
                    label="AADHAAR No"
                    label-color="black"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  /><q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    dense
                    filled
                    clearable
                    v-model="addhaar_no"
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
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 200px"
                    fill-input
                    :options="gstOptions"
                    v-model="propertyPartnerForm.gst_registration"
                    label="GST Registration*"
                    label-color="black"
                    :rules="[required('Property Type')]"

                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select>
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.gstin"
                    label="GSTIN"
                    label-color="black"
                    mask="##AAAAA####A###"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    v-if=" this.propertyPartnerForm.gst_registration =='Registered'"
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
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload GSTIN"
                    :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                    v-if=" this.propertyPartnerForm.gst_registration =='Registered'"
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
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
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
                    :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
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
                    hint="Property Partner Photo"
                    :rules="[val => val || 'Please select file']"
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
                    :rules="[(val) => val || 'Please select file']"
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
                    v-bind:readonly="this.onclickValue == 'edit'"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="property_tax"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload Indemnity Bond"
                    :rules="[(val) => val || 'Please select file']"
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
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload Declaration"
                    :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                </div>
                <div class="bg-grey-11 col-12 row q-pa-xs">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
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
                    v-model="propertyPartnerForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[required('Bank A/C no')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.ifsc"
                    label="IFSC/SWIFT Code"
                    label-color="black"
                    :rules="[required('IFSC code')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 250px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="cancelled_cheque"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                    :rules="[(val) => val || 'Please select file']"
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
                      v-model="propertyPartnerForm.accept"
                      label="I accept the Partner Registration"
                    />
                  </q-card-actions>
              </q-form>
               <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  color="secondary"
                  label="Submit"
                  class="text-bold"
                  @click="onSubmit('submit')"
                  v-if="this.onclickValue != 'edit'"
                  :disable="this.propertyPartnerForm.accept == false"
                />
                <q-btn
                  color="secondary"
                  label="Update"
                  class="text-bold"
                  @click="onSubmit('update')"
                  v-if="this.onclickValue == 'edit'"
                  :disable="this.propertyPartnerForm.accept == false"
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

      <!--SUB VIEW DETAILS -->

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
              <!-- v-on:click="openPropertyDialog()"
                :disable="this.editedItem.status == 'approved'" -->
              <q-btn-dropdown
                rounded
                dense
                clickable
                text-color="white"
                class="text-weight-medium text-bold"
                color="secondary"
                label="Add Data"
                icon="add"
              >
              <q-list>
                <q-item clickable
                    dense
                    v-close-popup
                   @click="openPropertyDialog()">
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>Add Property</q-item-label>
                    </q-item-section>
                </q-item>
                  <q-item
                    clickable
                    dense
                    v-close-popup
                    @click="openRestaurantDialog()"
                    v-if="userDetails.foodstatus == 'Approved'"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD RESTAURANT</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    dense
                    v-close-popup
                    @click="opentransportDialog()"
                    v-if="userDetails.travelstatus == 'Approved'"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Transport Details</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    dense
                    v-close-popup
                    @click="accMedicalstoreDetailsForm()"
                    v-if="userDetails.medicalstatus == 'Approved'"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>Medical Store</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
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
                      <div class="col-5 text-left text-black">Lead Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.agent_sub_name }}
                      </div>
                      <div class="col-5 text-left text-black">Lead Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.partner_id }}
                      </div>
                      <div class="col-5 text-left text-black">Sub Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.partner_sub_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Whatsapp</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.fax }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.email_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Property Type
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.property_type }}
                      </div>
                      <q-separator />
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
                      <div class="col-5 text-left">City</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.city }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">State</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.state }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Country</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.country }}
                      </div>
                      <q-separator />
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
                        <div class="col-5 text-left text-black">Aadhaar</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.aadhar }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left text-black">Pan Card</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.pan }}
                        </div>
                        <div class="col-5 text-left">Account No</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.bankAccountNo }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left">Bank Name</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.bankName }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left">Branch</div>
                        <div class="col-7 text-left text-grey">
                          : {{ editedItem.branchName }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left">IFSC Code</div>
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
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
                  ><q-icon
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
                              showDocument(editedItem.addhaar_loc, 'Addgaar No')
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
                              showDocument(editedItem.gst_tin_loc, 'GST TIN')
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
                                'Argeement Doc'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div>

                    <!-- <div class="col-3">
                      <tr>
                        <td class="text-left">Property Partner Photo</td>
                       <td class="text-left">
                      {{ editedItem.partner_pic_loc }}
                    </td> -->
                    <!-- <td class="text-center">
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
                    </div> -->
                  </div>
                  <div class="row">
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
                          @click="showPropertyData(props.row)"
                          icon="las la-eye"
                          size="sm"
                          ><q-tooltip :disable="$q.platform.is.mobile"
                            >View</q-tooltip
                          >
                        </q-btn>
                        <q-btn
                          class="q-ml-xs"
                          color="secondary"
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
          </div>

          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="userDetails.foodstatus=='Approved'">
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
                    :data="restaurant_data_rows"
                    :columns="restaurant_data_columns"
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
                          @click="showRestaurantData(props.row)"
                          icon="las la-eye"
                          size="sm"
                          ><q-tooltip :disable="$q.platform.is.mobile"
                            >View</q-tooltip
                          >
                        </q-btn>
                        <q-btn
                          class="q-ml-xs"
                          color="secondary"
                          @click="editRestaurantData(props.row)"
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
          </div>
               <!-- Transport Details Table Start -->
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px" v-if="userDetails.travelstatus=='Approved'"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Transport Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="acctransport_item_rows"
                    :columns="acctransport_item_columns"
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
                        <q-btn
                          color="secondary"
                          @click="showTransportDetails(props.row)"
                          icon="las la-eye"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >View</q-tooltip
                          >
                        </q-btn>
                        <q-btn
                          class="q-ml-xs"
                          color="secondary"
                          @click="editTrasportDetails(props.row)"
                          icon="mdi-pencil"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >Edit</q-tooltip
                          >
                        </q-btn>
                        <!-- <q-btn color="green" @click="editTravel(props.row)" label="Edit" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn> -->
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
                              props.row.upload_image1,
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
          <!-- Transport Details Table End -->
          <!-- <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Equipment Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="equipment_acc_rows" :columns="equipment_acc_columns" :pagination.sync="pagination"
                    dense row-key="sno" :filter="filter" :selected.sync="selected" separator="cell"
                    :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                          showDocumentmedical(props.row.equipment_image, 'Equipment Image')
                        " />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="green" icon="mdi-pencil" size="sm" @click="editAccEquipment(props.row)">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                </div>
              </q-card>
            </div>
          </div> -->
          <!-- Sachin Medical Store Details Table Start -->
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px" v-if="userDetails.medicalstatus =='Approved'"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Medical Store Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="accmedicalstore_item_rows"
                    :columns="accmedicalstore_item_columns"
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
                        <q-btn
                          color="secondary"
                          @click="showMedicalStoreDetails(props.row)"
                          icon="las la-eye"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >View</q-tooltip
                          >
                        </q-btn>
                        <q-btn
                          class="q-ml-xs"
                          color="secondary"
                          @click="editMedicalStoreDetails(props.row)"
                          icon="mdi-pencil"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >Edit</q-tooltip
                          >
                        </q-btn>
                        <!-- <q-btn color="green" @click="editTravel(props.row)" label="Edit" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn> -->
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
                              props.row.upload_image1,
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
          <!-- Sachin Medical Store Details Table End -->

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
                  <q-chip
                    dense
                    clickable
                    color="secondary"
                    text-color="white"
                    icon="add"
                    class="text-weight-medium"
                    @click="openRoomsDialog()"
                  >
                    Add Rooms
                  </q-chip>
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
                              <td class="text-left" width="280px">
                                Property Image 1
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
                                      propertyEditedItem.upload_image,
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
                              <td class="text-left" width="280px">
                                Property Image2
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
                                      propertyEditedItem.upload_image1,
                                      'Property Image2'
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
                                Property Image3
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
                                      propertyEditedItem.upload_image2,
                                      'Property Image3'
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
                            text-body1"
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
                      <q-icon name="mdi-home" color="black" size="1.5em" /> Room
                      Details
                    </q-bar>
                    <div
                      class="row q-col-gutter-sm q-py-sm q-pa-md"
                      style="padding-top: 10px"
                    />
                    <div style="width: 95%; margin: auto">
                      <q-table
                        :data="rooms_data_rows"
                        :columns="rooms_data_columns"
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
                              @click="showRoomsData(props.row)"
                              icon="las la-eye"
                              size="sm"
                              ><q-tooltip :disable="$q.platform.is.mobile"
                                >View</q-tooltip
                              >
                            </q-btn>
                          </q-td>
                        </template>
                        <template v-slot:body-cell-actions1="props">
                          <q-td :props="props">
                            <q-btn
                              color="green"
                              icon="mdi-pencil"
                              size="sm"
                              @click="editRoomsData(props.row)"
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
              </div>
            </q-layout>
          </q-dialog>

          <!-- Property Edit Dialog -->
          <q-dialog
            v-model="propertyEditDialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-form ref="editPropertyForm" class="q-gutter-xs">
                <q-card>
                  <q-bar class="bg-primary">
                    <div class="text-h6 text-white">Edit Property Details</div>
                    <q-space />
                    <q-btn
                      dark
                      flat
                      icon="close"
                      color="white"
                      @click="propertyEditDialog = false"
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
                        <!-- <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.partner_name"
                          label="Lead Partner *"
                          hide-bottom-space
                          style="width: 250px"
                          label-color="black"
                          readonly
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-account"
                              color="secondary"
                            /> </template
                        ></q-input>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.partner_sub_name"
                          label="Sub Partner *"
                          hide-bottom-space
                          style="width: 250px"
                          label-color="black"
                          readonly
                          :rules="[required('Name')]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-account-multiple-outline"
                              color="secondary"
                            /> </template
                        ></q-input> -->
                        <!-- <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_name"
                          label="Property Type *"
                          hide-bottom-space
                          style="width: 250px"
                          label-color="black"
                          :rules="[required('Name')]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-home-city"
                              color="secondary"
                            /> </template
                        ></q-input> -->
                        <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 300px"
                    fill-input
                    :options="propertyOptions"
                    option-value="property_id"
                    option-label="property_name"
                    v-model="editedPropertyData.property_name"
                    label="Type Of Property *"
                    label-color="black"
                    :rules="[required('Property Type')]"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.sub_property_name"
                          label="Property Name *"
                          hide-bottom-space
                          style="width: 250px"
                          label-color="black"
                          :rules="[required('Name')]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-home-city"
                              color="secondary"
                            /> </template
                        ></q-input>
                        <!-- <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_phone"
                          label="Phone *"
                          lazy-rules
                          mask="##########"
                          readonly
                          style="width: 250px"
                          label-color="black"
                          hide-bottom-space
                          :rules="[required('Phone no'), phone()]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-phone"
                              color="secondary"
                            /> </template
                        ></q-input>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_email"
                          label="Email *"
                          lazy-rules
                          readonly
                          hide-bottom-space
                          style="width: 250px"
                          :rules="[required('Email'), email()]"
                          label-color="black"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-email"
                              color="secondary"
                            /> </template
                        ></q-input>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_latitude"
                          label="Latitude *"
                          lazy-rules
                          style="width: 200px"
                          label-color="black"
                          hide-bottom-space
                          :rules="[required('Email'), number()]"
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
                          v-model="editedPropertyData.property_longitude"
                          label="Longitude *"
                          lazy-rules
                          style="width: 200px"
                          :rules="[required('Email'), number()]"
                          label-color="black"
                          hide-bottom-space
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-longitude"
                              color="secondary"
                            /> </template
                        ></q-input> -->
                        <!-- <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_price_startsFrom"
                          label="Price Starts From *"
                          :rules="[required('Price Starts From')]"
                          lazy-rules
                          style="width: 250px"
                          label-color="black"
                          hide-bottom-space
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-currency-inr"
                              color="secondary"
                            /> </template
                        ></q-input> -->
                        <!-- <q-input outlined label="Check In Time *" dense v-model="editedPropertyData.checkIn_time" :rules="[required('Check In Time')]">
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-time v-model="editedPropertyData.checkIn_time">
                                  <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                  </div>
                                </q-time>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input> -->
                        <!-- <q-input outlined label="Check Out Time *" dense v-model="editedPropertyData.checkOut_time" :rules="[required('Check Out Time')]">
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-time v-model="editedPropertyData.checkOut_time">
                                  <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                  </div>
                                </q-time>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input> -->
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_description"
                          label="Description *"
                          :rules="[required('Description')]"
                          lazy-rules
                          style="width:100%"
                          autogrow
                          label-color="black"
                          hide-bottom-space
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-comment"
                              color="secondary"
                            /> </template
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
                          v-model="editedPropertyData.building_no"
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
                          v-model="editedPropertyData.street"
                          label="Street/Colony Name*"
                          lazy-rules
                          label-color="black"
                          hide-bottom-space
                          :rules="[required('Street/Colony')]"
                          ><template v-slot:prepend>
                            <q-icon
                              name="mdi-highway"
                              color="secondary"
                            /> </template
                        ></q-input>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.land_mark"
                          label="Landmark"
                          label-color="black"
                          hide-bottom-space
                          ><template v-slot:prepend>
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
                          v-model="editedPropertyData.country"
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
                          v-model="editedPropertyData.state_name"
                          @input="
                            loadAllCities(propertyDetails.state);
                            emptyCities();
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
                          v-model="editedPropertyData.city_name"
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
                          v-model="editedPropertyData.pin_code"
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
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_email"
                          label="Email *"
                          lazy-rules
                          hide-bottom-space
                          style="width: 250px"
                          :rules="[required('Email'), email()]"
                          label-color="black"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-email"
                              color="secondary"
                            /> </template
                        ></q-input>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_phone"
                          label="Phone *"
                          lazy-rules
                          mask="##########"
                          style="width: 250px"
                          label-color="black"
                          hide-bottom-space
                          :rules="[required('Phone no'), phone()]"
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-phone"
                              color="secondary"
                            /> </template
                        ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editedPropertyData.Name_Of_Contact_Person"
                      lazy-rules
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_latitude"
                          label="Latitude *"
                          lazy-rules
                          style="width: 200px"
                          label-color="black"
                          hide-bottom-space
                          :rules="[required('Email'), number()]"
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
                          v-model="editedPropertyData.property_longitude"
                          label="Longitude *"
                          lazy-rules
                          style="width: 200px"
                          :rules="[required('Longitude'), number()]"
                          label-color="black"
                          hide-bottom-space
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-longitude"
                              color="secondary"
                            /> </template
                        ></q-input>
                    <!-- <q-select
                      dense
                      options-dense
                      outlined
                      style="width: 250px"
                      v-model="editedPropertyData.amenities"
                      :options="propertyAmenitiesArr"
                      option-label="amenity_name"
                      option-value="amenity_id"
                      multiple
                      aria-checked
                      use-input
                      label="Property Amenities"
                      label-color="black"
                      :rules="[required('Amenities')]"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-select> -->
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input outlined label="Check In Time *" dense v-model="editedPropertyData.checkIn_time"  :rules="[required('Check In Time')]" @click="$refs.qOpeningTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                           ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="editedPropertyData.checkIn_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Check Out Time *" dense v-model="editedPropertyData.checkOut_time"  :rules="[required('Check Out Time')]" @click="$refs.qClosingTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="editedPropertyData.checkOut_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
                  <q-card flat class="q-pa-md">
                    <q-bar>
                      <div class="text-bold text-black">Photos / Images</div>
                    </q-bar>
                    <q-card-actions>
                       <div class="row items-start q-gutter-md">
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          readonly
                          clearable
                          v-model="uploadImage"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          hide-bottom-space
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Front Image 1"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          readonly
                          v-model="uploadImage1"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Front Image 2"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          readonly
                          v-model="uploadImage2"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Reception"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          readonly
                          v-model="uploadImage3"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Lobby"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          readonly
                          hide-bottom-space
                          v-model="uploadImage4"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Side Image"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                      </div>
                      <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                        <div class="text-bold row q-ml-md">Note:</div>
                        <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
                      </div>
                    </q-card-actions>
                  </q-card>
                  <div class="row q-pa-md justify-end">
                    <q-btn
                      color="secondary"
                      label="Update"
                      @click="onPropertyUpdate"
                    ></q-btn>
                  </div>
                </q-card>
              </q-form>
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
                            No.of Available Rooms
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.no_of_avail_rooms }}
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
                                    )"
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
          <q-dialog
            v-model="roomsEditDialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-form ref="editRoomsForm" class="q-gutter-xs">
                <q-header class="bg-primary">
                  <q-bar class="bg-primary text-white">
                    <q-icon name="feed"></q-icon>

                    <div class="text-h6">Edit of Room Details</div>
                    <q-space />
                    <q-btn
                      dark
                      flat
                      icon="close"
                      color="white"
                      @click="roomsEditDialog = false"
                    >
                      <q-tooltip class="bg-white text-primary">close</q-tooltip>
                    </q-btn>
                  </q-bar>
                </q-header>
                <q-card flat class="q-pa-md" padding style="padding-top: 45px">
                  <q-bar>
                    <div class="text-bold text-black">Basic Details</div>
                  </q-bar>
                  <q-card-actions>
                    <div class="row items-start q-gutter-md">
                      <q-input
                        dense
                        outlined
                        v-model="editedRoomsData.sub_property_name"
                        label="Sub Property Name"
                        readonly
                        hide-bottom-space
                        style="width: 250px"
                        label-color="black"
                        :rules="[required('Sub Property Name')]"
                      >
                        <template v-slot:prepend>
                          <q-icon
                            name="mdi-account"
                            color="secondary"
                          /> </template
                      ></q-input>
                      <q-input
                        dense
                        outlined
                        v-model="editedRoomsData.property_name"
                        readonly
                        label="Property Type *"
                        hide-bottom-space
                        style="width: 250px"
                        label-color="black"
                        :rules="[required('Property Type')]"
                      >
                        <template v-slot:prepend>
                          <q-icon
                            name="mdi-account-multiple-outline"
                            color="secondary"
                          /> </template
                      ></q-input>
                      <q-input
                        dense
                        options-dense
                        outlined
                        use-input
                        hide-selected
                        style="width: 200px"
                        fill-input

                        v-model="editedRoomsData.room_category"
                        label="Room Category*"
                        label-color="black"
                        :rules="[required('Room Category')]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-home-circle" color="secondary" />
                        </template>
                      </q-input>
                      <q-input
                        dense
                        outlined
                        v-model="editedRoomsData.no_of_avail_rooms"
                        label="No.of Available Rooms"
                        lazy-rules
                        style="width: 200px"
                        label-color="black"
                        hide-bottom-space
                        :rules="[required('No.of Available Rooms', number())]"
                      >
                        <template v-slot:prepend>
                          <q-icon
                            name="mdi-door"
                            color="secondary"
                          /> </template
                      ></q-input>
                      <q-select
                        dense
                        options-dense
                        outlined
                        use-input
                        hide-selected
                        style="width: 240px"
                        fill-input
                        :options="roomTypeArr"
                        v-model="editedRoomsData.room_type"
                        label="Type of Room *"
                        label-color="black"
                        :rules="[required('Type of Room')]"
                      >
                        <template v-slot:no-option>
                          <q-item>
                            <q-item-section class="text-grey">
                              No results
                            </q-item-section>
                          </q-item>
                        </template>
                        <template v-slot:prepend>
                          <q-icon name="mdi-home-circle" color="secondary" />
                        </template>
                      </q-select>
                      <q-input
                        dense
                        outlined
                        v-model="editedRoomsData.property_specialOffer"
                        label="Special Offer(%) *"
                        :rules="[required('Special Offer')]"
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

                      <q-input
                        dense
                        outlined
                        v-model="editedRoomsData.date_from"
                        clearable
                        label="Date From"
                        label-color="black"
                        clear-icon="close"
                        minimal
                        @click="$refs.qDateProxy.show()"
                        style="width: 200px"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              ref="qDateProxy"
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                v-model="editedRoomsData.date_from"
                                mask="DD/MM/YYYY"
                                @input="closeDialog"
                              >
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                      <q-input
                        dense
                        outlined
                        v-model="editedRoomsData.date_to"
                        label="Date To"
                        label-color="black"
                        clear-icon="close"
                        minimal
                        @click="$refs.qDateProxy1.show()"
                        style="width: 200px"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              ref="qDateProxy1"
                              minimal
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                v-model="editedRoomsData.date_to"
                                minimal
                                mask="DD/MM/YYYY"
                                @input="closeDialog1"
                              >
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    minimal
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                      <q-select
                        dense
                        options-dense
                        outlined
                        style="width: 300px"
                        v-model="editedRoomsData.facilities"
                        :options="amenitiesArr"
                        option-label="amenity_name"
                        option-value="amenity_id"
                        multiple
                        aria-checked
                        use-input
                       fill-input
                         @input="getOtherAmenities(editedRoomsData.facilities)"
                        label="Room Amenities"
                        label-color="black"
                        :rules="[required('Facilities')]"
                      >
                        <template v-slot:no-option>
                          <q-item>
                            <q-item-section class="text-grey">
                              No results
                            </q-item-section>
                          </q-item>
                        </template>
                        <template v-slot:prepend>
                          <q-icon name="mdi-home-city" color="secondary" />
                        </template>
                      </q-select>
                       <q-input v-if="otheramenitiesinput == true"
                      dense
                      outlined
                      v-model="editedRoomsData.other_amenities"
                      label="Other Room Amenities"
                      lazy-rules
                      style="width: 190px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Room Amenities')]"
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
                        v-model="editedRoomsData.price"
                        label="Price"
                        lazy-rules
                        style="width: 190px"
                        label-color="black"
                        hide-bottom-space
                        :rules="[required('Price'), number()]"
                      >
                        <template v-slot:prepend>
                          <q-icon
                            name="mdi-currency-inr"
                            color="secondary"
                          /> </template
                      ></q-input>
                      <q-input
                        dense
                        options-dense
                        outlined
                        use-input
                        hide-selected
                        style="width: 200px"
                        fill-input
                        v-model="editedRoomsData.units"
                        label="Units *"
                        label-color="black"
                        use-checkbox
                        readonly
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-timer-sand" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                  </q-card-actions>
                </q-card>
                <q-separator />
                <q-card flat class="q-pa-md">
                  <q-bar>
                    <div class="text-bold text-black">Photos / Images</div>
                  </q-bar>
                  <q-card-actions>
                    <div class="row items-start q-gutter-md">
                      <q-file
                        color="lime-11"
                        bg-color="teal"
                        style="width: 240px"
                        class="hint-bold"
                        dense
                        filled
                        clearable
                        readonly
                        v-model="uploadRoomImage1"
                        type="file"
                        accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                        hide-bottom-space
                        @update:model-value="
                          (val) => {
                            files = val;
                          }
                        "
                        hint="Upload Room Image1"
                        :rules="[(val) => val || 'Please select file']"
                        :filter="checkFileSize"
                        @rejected="onRejected"
                      >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" color="white" />
                        </template>
                      </q-file>
                      <q-file
                        color="lime-11"
                        bg-color="teal"
                        style="width: 240px"
                        class="hint-bold"
                        dense
                        filled
                        clearable
                        hide-bottom-space
                        readonly
                        v-model="uploadRoomImage2"
                        type="file"
                        accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                        @update:model-value="
                          (val) => {
                            files = val;
                          }
                        "
                        hint="Upload Room Image2"
                        :rules="[(val) => val || 'Please select file']"
                        :filter="checkFileSize"
                        @rejected="onRejected"
                      >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" color="white" />
                        </template>
                      </q-file>
                      <q-file
                        color="lime-11"
                        bg-color="teal"
                        style="width: 240px"
                        class="hint-bold"
                        dense
                        filled
                        clearable
                        hide-bottom-space
                        v-model="uploadRoomImage3"
                        readonly
                        type="file"
                        accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                        @update:model-value="
                          (val) => {
                            files = val;
                          }
                        "
                        hint="Upload Washroom Image1"
                        :rules="[(val) => val || 'Please select file']"
                        :filter="checkFileSize"
                        @rejected="onRejected"
                      >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" color="white" />
                        </template>
                      </q-file>
                      <q-file
                        color="lime-11"
                        bg-color="teal"
                        style="width: 240px"
                        class="hint-bold"
                        dense
                        filled
                        clearable
                        hide-bottom-space
                        v-model="uploadRoomImage4"
                        readonly
                        type="file"
                        accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                        @update:model-value="
                          (val) => {
                            files = val;
                          }
                        "
                        hint="Upload Washroom Image2"
                        :rules="[(val) => val || 'Please select file']"
                        :filter="checkFileSize"
                        @rejected="onRejected"
                      >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" color="white" />
                        </template>
                      </q-file>
                      <q-file
                        color="lime-11"
                        bg-color="teal"
                        style="width: 240px"
                        class="hint-bold"
                        dense
                        filled
                        clearable
                        hide-bottom-space
                        v-model="uploadRoomImage5"
                        readonly
                        type="file"
                        accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                        @update:model-value="
                          (val) => {
                            files = val;
                          }
                        "
                        hint="Upload Additional Image"
                        :rules="[(val) => val || 'Please select file']"
                        :filter="checkFileSize"
                        @rejected="onRejected"
                      >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" color="white" />
                        </template>
                      </q-file>
                    </div>
                  </q-card-actions>
                  <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                    <div class="text-bold row q-ml-md">Note:</div>
                    <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
                  </div>
                  <div class="row q-pa-md justify-end">
                    <q-btn
                      color="secondary"
                      label="Update"
                      @click="onRoomsUpdate"
                    >
                    </q-btn>
                  </div>
                </q-card>
              </q-form>
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
            <q-dialog
              v-model="big"
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
                <q-card v-show="showtravel" style="height: 600px">
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
    <!-- EDIT EQUIPMENT DETAILS -->
    <q-dialog v-model="accMedicalDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form filled square clearable dense ref="accMedicalDialog" class="q-gutter-xs" lazy-rules
          hide-bottom-space :rules="[val => (val && val.length > 0) || 'Please enter Values']">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">{{ title }}</div>
              <q-space />
              <q-btn dark flat icon="close" color="white" @click="closeEditEquipmentDialog">
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Edit Equipment Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <!-- <q-input dense outlined v-model="editAccMedical.agent_name" readonly label="Equipment Name *"
                    hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="editAccMedical.equipment_sub_name" readonly
                    label="Equipment Sub Name *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Sub Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input> -->
                  <q-input dense options-dense outlined v-model="editAccMedical.medical_store"
                    label="Medical Store *" use-input hide-selected style="width: 250px" fill-input hide-bottom-space
                    readonly label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>

                  <q-select dense options-dense outlined v-model="editAccMedical.item_name"
                    label="Equipment Item Name *" use-input hide-selected style="width: 250px" fill-input
                    hide-bottom-space :options="medicalItemName" option-label="item_name" option-value="item_id"
                    :rules="[required('Equipment Item Name')]" label-color="black" @input="
                      loadAllMedicalUnits(editAccMedical.item_name),
                        emptyMedicalItems()
                    ">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-select>
                  <q-select v-model="editAccMedical.units" dense options-dense outlined use-input hide-selected
                    style="width: 250px" fill-input hide-bottom-space :options="medicalUnitsName" option-label="units"
                    option-value="unit_id" label="Units *" label-color="black" :rules="[required('Units')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-unity" color="secondary" />
                    </template>
                  </q-select>
                  <q-select v-model="editAccMedical.purchased_type" dense options-dense outlined use-input
                    hide-selected style="width: 250px" fill-input hide-bottom-space :options="medicalPurchasingType"
                    label="Purchasing Type *" label-color="black" :rules="[required('Purchased Type')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-unity" color="secondary" />
                    </template>
                  </q-select>
                  <q-input dense outlined v-model="editAccMedical.price" label="Price *" lazy-rules
                    hide-bottom-space style="width: 250px" :rules="[required('Price'), number()]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>
                  <!-- <q-input
                  dense
                  outlined
                  v-model="editAccMedical.special_offer"
                  label="Special Offer *"
                  :rules="[number, specialMOfferValue('Special Offer', 100)]"
                  lazy-rules
                  mask="###"
                  style="width: 200px"
                  label-color="black"
                  hide-bottom-space
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-percent-outline"
                      color="secondary"
                    /> </template
                ></q-input> -->
                  <q-file color="lime-11" bg-color="teal" style="width: 250px" class="hint-bold" dense readonly filled
                    clearable v-model="equipment_image" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Equipment Image" :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <!-- <q-btn
                    square
                    dense
                    icon="add"
                    color="primary"
                    style="height: 40px"
                    @click="addDetailForm"
                  ></q-btn> -->
                </div>
              </q-card-actions>
            </q-card>
            <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
              <div class="text-bold row q-ml-md">Note:</div>
              <div class="text-bold row q-ml-md">Note:</div>
              <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
            </div>
          </q-card>
          <div class="row q-pa-md justify-end">
            <q-btn color="secondary" label="Update" @click="updatingAccMedical()"></q-btn>
          </div>
        </q-form>
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
            :data="property_registration_rows"
            :columns="property_registration_columns"
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
                Add My Property
              </q-chip>
              <q-btn
                flat
                dense
                color="primary"
                class="text-black text-weight-bold"
                @click="subPropertyView = false"
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
                  size="sm"
                >
                  <q-tooltip :disable="$q.platform.is.mobile"
                    >View Details</q-tooltip
                  >
                </q-btn>
                <q-btn
                  color="green"
                  @click="editPropertyItem(props.row)"
                  label="Edit"
                  size="sm"
                >
                  <q-tooltip :disable="$q.platform.is.mobile"
                    >Edit Details</q-tooltip
                  >
                </q-btn>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </q-dialog>
 <!-- Other Travel Details Start -->
 <q-dialog
        v-model="AccTravelPartnerDialog"
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
          <q-form ref="AccTravelPartnerDialog">
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
                  style="width: 250px"
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
                  style="width: 250px"
                  label-color="black"
                  :rules="[required('Travel Sub Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-select dense outlined use-input hide-selected :options="VehicleTypes" fill-input options-dense
                  input-debounce="0" v-model="travelLocation.vehicle_type" label="Vehicle Type *" label-color="black"
                  :rules="[required('Vehicle Type')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select> -->
                <q-input
                  dense
                  outlined
                  v-model="otherAcctravelPartner.vehicle_name"
                  label="Vehicle Name *"
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('vehicle name')]"
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
                  v-model="otherAcctravelPartner.no_of_seaters"
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
                  v-model="otherAcctravelPartner.day_price"
                  label="Day Price *"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('Price')]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <!-- :rules="[required('Price'), number()]" -->
                <q-input
                  dense
                  outlined
                  v-model="otherAcctravelPartner.night_price"
                  label="Night Price *"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('Price')]"
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
                  v-model="otherAcctravelPartner.units"
                  label="Units *"
                  label-color="black"
                  :rules="[required('Units')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select>

                <q-input
                  class="col-2"
                  dense
                  outlined
                  v-model="otherAcctravelPartner.description"
                  label="Description"
                  lazy-rules
                  style="width: 250px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-comment" color="secondary" />
                  </template>
                </q-input>

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
              <div class="bg-grey-11 col-12 row q-pa-xs">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  Max File size is 1MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
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
            <!-- <div class="row q-pa-md justify-end">
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
            </div> -->

            <q-separator />
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Submit" v-if="this.onclickValue != 'edit'"
                @click="submitTravel('submit')" :disable="this.otherAcctravelPartner.accept == false" />
              <q-btn color="secondary" label="Update" class="text-bold" @click="submitTravel('update')"
                v-if="this.onclickValue == 'edit'" :disable="this.otherAcctravelPartner.accept == false" />
            </div>
          </q-form>
        </q-card>
      </q-dialog>

      <!-- Other Travel Details End -->
 <!-- Other Food Details Start -->

 <q-dialog v-model="AccFoodPartnerDialog" maximized persistent>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">My Food Items</div>
            <q-space />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-separator />
          <q-form ref="AccFoodPartnerDialog">
            <q-card class="q-pa-md">
              <div class="text-overline1 q-gutter-xs" />
              <div class="text-overline1 q-gutter-xs" />

              <q-bar class="bg-grey">
                <div class="text-h6 text-Black text-bold">Food Details</div>
              </q-bar>

              <div class="q-pa-md row q-gutter-md">
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="AccFoodPartner.kitchen_name"
                  label="Kitchen Name"
                  readonly
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-input>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="AccFoodPartner.kitchen_type"
                  label="Kitchen Type"
                  readonly
                  hide-bottom-space
                  style="width: 180px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-input>
                <q-select
                  class="col-3"
                  dense
                  outlined
                  v-model="AccFoodPartner.foodtype"
                  label="Food Item Name *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :options="otherfoodtype"
                  :rules="[required('Food Item Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" /> </template
                ></q-select>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="AccFoodPartner.foodName"
                  label="Food Item Name *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :rules="[required('Food Item Name')]"
                  @input="
                    loadAllFoodItems(AccFoodPartner.foodName);
                    emptyFoodItems();
                  "
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" /> </template
                ></q-input>
                <q-input
                  outlined
                  label="items Available from *"
                  dense
                  v-model="AccFoodPartner.items_available_from"
                  :rules="[required('items Available from')]"
                >
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time
                          v-model="AccFoodPartner.items_available_from"
                          mask="hh:mm A"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input
                  outlined
                  label="Items Available to*"
                  dense
                  v-model="AccFoodPartner.items_available_to"
                  :rules="[required('Items Available to')]"
                >
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time
                          v-model="AccFoodPartner.items_available_to"
                          mask="hh:mm A"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-select
                  class="col-3"
                  dense
                  outlined
                  v-model="AccFoodPartner.units"
                  label="Units *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :options="['1 Plate']"
                  :rules="[required('Units')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-unity" color="secondary" /> </template
                ></q-select>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="AccFoodPartner.price"
                  label="Price*"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :rules="[
                    required('Price'),
                    v => /^[0-9_. ]*$/.test(v) || 'Please enter numbers only'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-currency-inr"
                      color="secondary"
                    /> </template
                ></q-input>
                <!-- <q-input
                  dense
                  outlined
                  v-model="AccFoodPartner.special_offer"
                  label="Special Offer *"
                  :rules="[number, specialMOfferValue('Special Offer', 100)]"
                  lazy-rules
                  mask="###"
                  style="width: 200px"
                  label-color="black"
                  hide-bottom-space
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-percent-outline"
                      color="secondary"
                    /> </template
                ></q-input> -->
                <q-file
                  color="lime-11"
                  bg-color="teal"
                  style="width: 200px"
                  class="hint-bold"
                  dense
                  clearable
                  v-model="food_image"
                  type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Upload Food Image"
                  :filter="checkFileSize"
                  v-bind:readonly="this.onclickValue == 'edit'"
                  @rejected="onRejected"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <!-- <q-btn
                  @click="addFoodData"
                  style="height: 40px"
                  square
                  dense
                  icon="add"
                  color="primary"
                /> -->
              </div>
              <div class="bg-grey-11 col-12 row q-pa-xs">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  Max File size is 1MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div>
            </q-card>
             <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Submit" v-if="this.onclickValue != 'edit'"
                @click="Submitfood('submit')" :disable="this.AccFoodPartner.accept == false" />
              <q-btn color="secondary" label="Update" class="text-bold" @click="Submitfood('update')"
                v-if="this.onclickValue == 'edit'" :disable="this.AccFoodPartner.accept == false" />
            </div>
          </q-form>
        </q-card>
      </q-dialog>
      <!-- Other Food Details End -->
  <!-- Other Equipment Details Start -->
  <q-dialog
        v-model="AccMedicalPartnerDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form
            filled
            square
            clearable
            dense
            ref="AccMedicalPartnerDialog"
            class="q-gutter-xs"
            lazy-rules
            hide-bottom-space
            :rules="[val => (val && val.length > 0) || 'Please enter Values']"
          >
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">My Equipment</div>
                <q-space />
                <q-btn v-close-popup dark flat icon="close" color="white">
                  <q-tooltip class="bg-white text-primary">close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Equipment Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <!-- <q-input
                      dense
                      outlined
                      v-model="AccMedicalPartner.agent_name"
                      readonly
                      label="Equipment Name *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalPartner.equipment_sub_name"
                      readonly
                      label="Equipment Sub Name *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Sub Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input> -->
                    <q-input
                      dense
                      options-dense
                      outlined
                      v-model="AccMedicalPartner.medical_store"
                      label="Medical Store "
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      readonly
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>

                    <q-select
                      dense
                      options-dense
                      outlined
                      v-model="AccMedicalPartner.item_name"
                      label="Equipment Item Name *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="medicalItemName"
                      option-label="item_name"
                      option-value="item_id"
                      :rules="[required('Equipment Item Name')]"
                      label-color="black"
                      @input="
                        loadAllMedicalUnits(AccMedicalPartner.item_name),
                          emptyMedicalItems()
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-select>
                    <q-select
                      v-model="AccMedicalPartner.units"
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="medicalUnitsName"
                      option-label="units"
                      option-value="unit_id"
                      label="Units *"
                      label-color="black"
                      :rules="[required('Units')]"
                      ><template v-slot:prepend>
                        <q-icon name="mdi-unity" color="secondary" />
                      </template>
                    </q-select>
                    <q-select
                      v-model="AccMedicalPartner.purchased_type"
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="['Market Price', 'Rent (Per Day)']"
                      label="Purchasing Type *"
                      label-color="black"
                      :rules="[required('Purchased Type')]"
                      ><template v-slot:prepend>
                        <q-icon name="mdi-unity" color="secondary" />
                      </template>
                    </q-select>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalPartner.price"
                      label="Price *"
                      lazy-rules
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
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
                      style="width: 250px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      v-model="equipment_image"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Equipment Image"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <!-- <q-btn
                    square
                    dense
                    icon="add"
                    color="primary"
                    style="height: 40px"
                    @click="addDetailForm"
                  ></q-btn> -->
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 1MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"
                @click="MedicalSubmit"
              ></q-btn>
            </div>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Other Equipment Details End -->

      <!-- ADD PROPERTY DETAILS -->

      <q-dialog
        v-model="propertyDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="propertyFormBasic" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Accommodation Property Details
                </div>
                <q-space />
                <q-btn
                  dark
                  flat
                  icon="close"
                  color="white"
                  @click="closePropertyDialog"
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
                    <!-- <q-input
                      dense
                      outlined
                      v-model="this.propertyDetails.partner_name"
                      label="Lead Partner *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      readonly
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="this.propertyDetails.partner_sub_name"
                      label="Sub Partner *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      readonly
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account-multiple-outline"
                          color="secondary"
                        /> </template
                    ></q-input> -->
                    <!-- <q-input
                      dense
                      outlined
                      v-model="propertyDetails.property_name"
                      label="Property Type *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      readonly
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-home-city"
                          color="secondary"
                        /> </template
                    ></q-input> -->
                    <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 300px"
                    fill-input
                    :options="propertyOptions"
                    option-value="property_id"
                    option-label="property_name"
                    v-model="propertyDetails.property_name"
                    label="Type Of Property *"
                    label-color="black"
                    :rules="[required('Property Type')]"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select>
                    <q-input
                      dense
                      outlined
                      v-model="propertyDetails.sub_property_name"
                      label="Property Name *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                      v-model="propertyDetails.property_description"
                      lazy-rules
                      style="width:100%"
                      label-color="black"
                      type="textarea"
                      :rules="[required('Description')]"
                      autogrow
                      hide-bottom-space
                      placeholder="Description *"
                    >
                    </q-input>
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
                      v-model="propertyDetails.building_no"
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
                      v-model="propertyDetails.street"
                      label="Street/Colony Name*"
                      lazy-rules
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Street/Colony')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-highway"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="propertyDetails.land_mark"
                      label="Landmark"
                      label-color="black"
                      hide-bottom-space
                      ><template v-slot:prepend>
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
                      :options="states"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="propertyDetails.state"
                      @input="
                        loadAllCities(propertyDetails.state);
                        emptyCities();
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
                      v-model="propertyDetails.city"
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
                      v-model="propertyDetails.pin_code"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      :options="countriesArr"
                      v-model="propertyDetails.country"
                      label="Country"
                      label-color="black"
                      :rules="[required('Country')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-map-marker"
                          color="secondary"
                        /> </template
                    ></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="propertyDetails.property_email_id"
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
                      v-model="propertyDetails.property_phone"
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
                      v-model="propertyDetails.Name_Of_Contact_Person"
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="propertyDetails.property_latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number()]"
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
                      v-model="propertyDetails.property_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number()]"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-longitude"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-select
                      dense
                      options-dense
                      outlined
                      style="width: 250px"
                      v-model="propertyDetails.amenities"
                      :options="propertyAmenitiesArr"
                      option-label="amenity_name"
                      option-value="amenity_id"
                      multiple
                      aria-checked
                      use-input
                      label="Property Amenities"
                      label-color="black"
                      :rules="[required('Amenities')]"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input outlined label="Check In Time *" dense v-model="propertyDetails.checkIn_time"  :rules="[required('Check In Time')]" @click="$refs.qOpeningTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                          ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="propertyDetails.checkIn_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Check Out Time *" dense v-model="propertyDetails.checkOut_time"  :rules="[required('Check Out Time')]" @click="$refs.qClosingTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="propertyDetails.checkOut_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          v-model="uploadImage"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          hide-bottom-space
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Front Image 1"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          v-model="uploadImage1"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Front Image 2"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          v-model="uploadImage2"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Reception"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          v-model="uploadImage3"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Lobby"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          v-model="uploadImage4"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Property Side Image"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                      </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onPropertySubmit"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- ADD ROOM DETAILS -->

      <q-dialog v-model="roomsDialog" maximized persistent>
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="roomsFormBasic" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Accommodation Room Details
                </div>
                <q-space />
                <q-btn v-close-popup>
                  <q-icon name="close" color="white"></q-icon>
                  <q-tooltip>close</q-tooltip>
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
                      v-model="roomDetails.partner_name"
                      label="Lead Partner Name"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      readonly
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="roomDetails.sub_partner_name"
                      label="Sub Partner"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      readonly
                      hide-bottom-space
                      :rules="[required('Sub Partner')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account-multiple-outline"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="roomDetails.property_name"
                      label="Property Type"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      readonly
                      hide-bottom-space
                      :rules="[required('Property Name')]"
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
                      v-model="roomDetails.sub_property_name"
                      label="Sub Property Name"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      readonly
                      hide-bottom-space
                      :rules="[required('Sub Property Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-home-city"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      v-model="roomDetails.room_category"
                      label="Room Category*"
                      label-color="black"
                      :rules="[required('Room Category')]"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-circle" color="secondary" />
                      </template>
                    </q-input>
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 240px"
                      fill-input
                      :options="roomTypeArr"
                      v-model="roomDetails.room_type"
                      label="Type of Room *"
                      label-color="black"
                      :rules="[required('Type of Room')]"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-circle" color="secondary" />
                      </template>
                    </q-select>
                    <q-input
                      dense
                      outlined
                      label="No.of Available Rooms"
                      v-model="roomDetails.no_of_avail_rooms"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('No.of Available Rooms', number())]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-door" color="secondary" /> </template
                    ></q-input>
                    <q-select
                      ref="myChipInput"
                      v-model="roomDetails.room_numbers"
                      multiple
                      dense
                      outlined
                      use-chips
                      use-input
                      new-value-mode="add"
                      stack-label
                      hide-dropdown-icon
                      label="Room Number"
                      @input.native="doStuff($event.target.value)"
                      @new-value="createValue"
                      @keyup.tab.native="doOtherStuff"
                      >
                      <template v-slot:prepend>
                          <q-icon name="mdi-door" color="secondary" /> </template
                      >
                    </q-select>
                    <q-select
                      dense
                      options-dense
                      outlined
                      style="width: 250px"
                      v-model="roomDetails.facilities"
                      :options="amenitiesArr"
                      option-label="amenity_name"
                      option-value="amenity_id"
                      multiple
                      aria-checked
                      use-input
                      fill-input
                      @input="getOtherAmenities(roomDetails.facilities)"
                      label="Room Amenities"
                      label-color="black"
                      :rules="[required('Amenities')]"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-select>
                     <q-input v-if="otheramenitiesinput == true"
                      dense
                      outlined
                      v-model="roomDetails.other_amenities"
                      label="Other Room Amenities"
                      lazy-rules
                      style="width: 190px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Room Amenities')]"
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
                      v-model="roomDetails.price"
                      label="Price"
                      lazy-rules
                      style="width: 190px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Price'), number()]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-currency-inr"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      v-model="roomDetails.units"
                      label="Rate *"
                      label-color="black"
                      readonly
                      use-checkbox
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-timer-sand" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Special Offers</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="roomDetails.property_specialOffer"
                      label="Special Offer(%) *"
                      :rules="[required('Special Offer')]"
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

                    <q-input
                      dense
                      outlined
                      v-model="roomDetails.date_from"
                      label="Date From"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="roomDetails.date_from"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="roomDetails.date_to"
                      label="Date To"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy1.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy1"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="roomDetails.date_to"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog1"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      v-model="uploadRoomImage1"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      hide-bottom-space
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Room Image1"
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="uploadRoomImage2"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Room Image2"
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="uploadRoomImage3"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Room Image3"
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="uploadRoomImage4"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Room Image4"
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="uploadRoomImage5"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Room Image5"
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onRoomsSubmit"
                >
                </q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- ADD RESTAURANT DETAILS -->

       <q-dialog
        v-model="restaurantDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="restaurantFormBasic" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Accommodation Restaurant Details
                </div>
                <q-space />
                <q-btn
                  dark
                  flat
                  icon="close"
                  color="white"
                  @click="closeRestaurantDialog"
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
                      v-model="restaurantDetails.name_of_kitchen"
                      label="Name Of Kitchen *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                      v-model="restaurantDetails.type_of_kitchen"
                      label="Kitchen Type*"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                    style="width: 250px"
                    v-model="restaurantDetails.fssai_no"
                    label="FSSAI Licence"
                    mask="##############"
                    label-color="black"
                    :rules="[required('FSSAI Licence No.')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          v-model="upload_fssai"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          hide-bottom-space
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Fssai Document"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                  <q-input
                  dense
                  outlined
                  v-model="restaurantDetails.special_offer"
                  label="Special Offer *"
                  :rules="[number, specialMOfferValue('Special Offer', 100)]"
                  lazy-rules
                  mask="###"
                  style="width: 250px"
                  label-color="black"
                  hide-bottom-space
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-percent-outline"
                      color="secondary"
                    /> </template
                ></q-input>
                <q-input
                  dense
                  outlined
                  v-model="restaurantDetails.date_from"
                  clearable
                  label="Date From"
                  label-color="black"
                  clear-icon="close"
                  minimal
                  @click="$refs.qDateProxy.show()"
                  style="width: 200px"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="restaurantDetails.date_from"
                          mask="DD/MM/YYYY"
                          @input="closeDialog"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input
                    dense
                    outlined
                    v-model="restaurantDetails.date_to"
                    label="Date To"
                    label-color="black"
                    clear-icon="close"
                    minimal
                    @click="$refs.qDateProxy1.show()"
                    style="width: 200px"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qDateProxy1"
                          minimal
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="restaurantDetails.date_to"
                            minimal
                            mask="DD/MM/YYYY"
                            @input="closeDialog1"
                          >
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                minimal
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="restaurantDetails.restaurant_description"
                      lazy-rules
                      style="width:100%"
                      label-color="black"
                      type="textarea"
                      :rules="[required('Description')]"
                      autogrow
                      hide-bottom-space
                      placeholder="Description *"
                    >
                    </q-input>
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
                      v-model="restaurantDetails.building_no"
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
                      v-model="restaurantDetails.street"
                      label="Street/Colony Name*"
                      lazy-rules
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Street/Colony')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-highway"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="restaurantDetails.land_mark"
                      label="Landmark"
                      label-color="black"
                      hide-bottom-space
                      ><template v-slot:prepend>
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
                      :options="states"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="restaurantDetails.state"
                      @input="
                        loadAllCities(restaurantDetails.state);
                        emptyCities();
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
                      v-model="restaurantDetails.city"
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
                      v-model="restaurantDetails.pin_code"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      :options="countriesArr"
                      v-model="restaurantDetails.country"
                      label="Country"
                      label-color="black"
                      :rules="[required('Country')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-map-marker"
                          color="secondary"
                        /> </template
                    ></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="restaurantDetails.restaurant_email"
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
                      v-model="restaurantDetails.restaurant_phone"
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
                      v-model="restaurantDetails.Name_Of_Contact_Person"
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="restaurantDetails.restaurant_latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number()]"
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
                      v-model="restaurantDetails.restaurant_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number()]"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-longitude"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input outlined label="Opening Time *" dense v-model="restaurantDetails.opening_time"  :rules="[required('Check In Time')]"  @click="$refs.qOpeningTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                         <q-popup-proxy ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="restaurantDetails.opening_time"
                            mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Closing Time *" dense v-model="restaurantDetails.closing_time"  :rules="[required('Check Out Time')]" @click="$refs.qClosingTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                          ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="restaurantDetails.closing_time"
                            mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          v-model="upload_Image"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          hide-bottom-space
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Restaurant Front Image 1"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          v-model="upload_Image1"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Restaurant Side Image 2"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          clearable
                          hide-bottom-space
                          v-model="upload_Image2"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Restaurant Reception"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                      </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onRestaurantSubmit"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

   <q-dialog
            v-model="restaurantDataDialog"
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
                    View of Restaurant Details:
                    {{ restaurantEditedItem.name_of_kitchen }}
                  </div>
                  <q-space />
                  <q-chip
                    dense
                    clickable
                    color="secondary"
                    text-color="white"
                    icon="add"
                    class="text-weight-medium"
                    @click="otherAccFoodForm()"
                  >
                    Add Food Items
                  </q-chip>
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
                            : {{ restaurantEditedItem.food_partner_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Sub Partner
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.food_partner_sub_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Kitchen Type
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.type_of_kitchen }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                           Name Of Kitchen
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.name_of_kitchen }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Phone</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.restaurant_phone }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Email</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.restaurant_email }}
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
                            : {{ restaurantEditedItem.building_no }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Street</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.street }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Landmark</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.land_mark }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Country</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.country }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">State</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.state_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">City</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.city_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Pincode</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.pin_code }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Latitude</div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.restaurant_latitude }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Longitude
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ restaurantEditedItem.restaurant_longitude }}
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
                              <td class="text-left" width="280px">
                                Restaurant Image 1
                              </td>
                              <td>
                                <q-btn
                                  class="text-bold"
                                  label="view"
                                  color="secondary"
                                  size="sm"
                                  icon-right="mdi-eye"
                                  @click="
                                    showRestaurantDocument(
                                      restaurantEditedItem.upload_image,
                                      'restaurant Image1'
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
                                    showRestaurantDocument(
                                      restaurantEditedItem.upload_image1,
                                      'restaurant Image2'
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
                                    showRestaurantDocument(
                                      restaurantEditedItem.upload_image2,
                                      'Property Image3'
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
                      Restaurant Description
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 150px">
                        <div
                          class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1"
                        >
                          <div class="col-12 text-justify text-grey">
                            {{ restaurantEditedItem.restaurant_description }}
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
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Food Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="acc_food_Details_rows"
                    :columns="acc_food_Details_columns"
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
                            showDocumentfood(props.row.food_image, 'Food Image')
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
            </div>
          <div>
          </div>
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
<!-- EDIT RESTAURANT DETAILS -->
      <q-dialog
        v-model="restaurantEditDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="editRestaurantForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Accommodation Restaurant Details
                </div>
                <q-space />
                <q-btn
                  dark
                  flat
                  icon="close"
                  color="white"
                  @click="closeRestaurantEditDialog"
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
                      v-model="editRestaurantDetails.name_of_kitchen"
                      label="Name Of Kitchen *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                      v-model="editRestaurantDetails.type_of_kitchen"
                      label="Kitchen Type*"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                    style="width: 250px"
                    v-model="editRestaurantDetails.fssai_no"
                    label="FSSAI Licence"
                    mask="##############"
                    label-color="black"
                    :rules="[required('FSSAI Licence No.')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          readonly

                          clearable
                          v-model="upload_fssai_1"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          hide-bottom-space
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Fssai Document"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                  <q-input
                  dense
                  outlined
                  v-model="editRestaurantDetails.special_offer"
                  label="Special Offer *"
                  :rules="[number, specialMOfferValue('Special Offer', 100)]"
                  lazy-rules
                  mask="###"
                  style="width: 250px"
                  label-color="black"
                  hide-bottom-space
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-percent-outline"
                      color="secondary"
                    /> </template
                ></q-input>
                <q-input
                        dense
                        outlined
                        v-model="editRestaurantDetails.date_from"
                        clearable
                        label="Date From"
                        label-color="black"
                        clear-icon="close"
                        minimal
                        @click="$refs.qDateProxy.show()"
                        style="width: 200px"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              ref="qDateProxy"
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                v-model="editRestaurantDetails.date_from"
                                mask="DD/MM/YYYY"
                                @input="closeDialog"
                              >
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                      <q-input
                        dense
                        outlined
                        v-model="editRestaurantDetails.date_to"
                        label="Date To"
                        label-color="black"
                        clear-icon="close"
                        minimal
                        @click="$refs.qDateProxy1.show()"
                        style="width: 200px"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              ref="qDateProxy1"
                              minimal
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date
                                v-model="editRestaurantDetails.date_to"
                                minimal
                                mask="DD/MM/YYYY"
                                @input="closeDialog1"
                              >
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    minimal
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editRestaurantDetails.restaurant_description"
                      lazy-rules
                      style="width:100%"
                      label-color="black"
                      type="textarea"
                      :rules="[required('Description')]"
                      autogrow
                      hide-bottom-space
                      placeholder="Description *"
                    >
                    </q-input>

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
                      v-model="editRestaurantDetails.building_no"
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
                      v-model="editRestaurantDetails.street"
                      label="Street/Colony Name*"
                      lazy-rules
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Street/Colony')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-highway"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editRestaurantDetails.land_mark"
                      label="Landmark"
                      label-color="black"
                      hide-bottom-space
                      ><template v-slot:prepend>
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
                      :options="states"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="editRestaurantDetails.state_name"
                      @input="
                        loadAllCities(editRestaurantDetails.state);
                        emptyCities();
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
                      v-model="editRestaurantDetails.city_name"
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
                      v-model="editRestaurantDetails.pin_code"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      :options="countriesArr"
                      v-model="editRestaurantDetails.country"
                      label="Country"
                      label-color="black"
                      :rules="[required('Country')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-map-marker"
                          color="secondary"
                        /> </template
                    ></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="editRestaurantDetails.restaurant_email"
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
                      v-model="editRestaurantDetails.restaurant_phone"
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
                      v-model="editRestaurantDetails.Name_Of_Contact_Person"
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>

                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="editRestaurantDetails.restaurant_latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number()]"
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
                      v-model="editRestaurantDetails.restaurant_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number()]"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-longitude"
                          color="secondary"
                        /> </template
                    ></q-input>


                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input outlined label="Opening Time *" dense v-model="editRestaurantDetails.opening_time"  :rules="[required('Check In Time')]">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="editRestaurantDetails.opening_time"
                            mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Closing Time *" dense v-model="editRestaurantDetails.closing_time"  :rules="[required('Check Out Time')]">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="editRestaurantDetails.closing_time"
                            mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          readonly

                          clearable
                          v-model="upload_Image"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          hide-bottom-space
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Kitchen Front Image 1"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          readonly

                          clearable
                          hide-bottom-space
                          v-model="upload_Image1"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Kitchen Side Image 2"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>
                        <q-file
                          color="lime-11"
                          bg-color="teal"
                          style="width: 240px"
                          class="hint-bold"
                          dense
                          filled
                          readonly

                          clearable
                          hide-bottom-space
                          v-model="upload_Image2"
                          type="file"
                          accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                          @update:model-value="
                            (val) => {
                              files = val;
                            }
                          "
                          hint="Upload Kitchen Reception"
                          :rules="[(val) => val || 'Please select file']"
                          :filter="checkFileSize"
                          @rejected="onRejected"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                          </template>
                        </q-file>

                      </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Update"
                  @click="updateRestaurant"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <q-dialog
        v-model="transportDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="transportFormBasic" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Transport Details
                </div>
                <q-space />
                <q-btn dark flat icon="close" color="white" v-close-popup>
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
                      v-model="transportDetails.transport_company_name"
                      label="Transport Company Name *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                      v-model="transportDetails.special_offer"
                      label="Special Offer *"
                      :rules="[
                        number(),
                        specialMOfferValue('Special Offer', 100)
                      ]"
                      lazy-rules
                      mask="###"
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-percent-outline"
                          color="secondary"
                        /> </template
                    ></q-input>

                    <q-input
                      dense
                      outlined
                      v-model="transportDetails.from_date"
                      label="Date From"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="transportDetails.from_date"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="transportDetails.to_date"
                      label="Date To"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy1.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy1"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="transportDetails.to_date"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog1"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="transportDetails.transport_description"
                      lazy-rules
                      style="width:100%"
                      label-color="black"
                      type="textarea"
                      :rules="[required('Description')]"
                      autogrow
                      hide-bottom-space
                      placeholder="Description *"
                    >
                    </q-input>
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
                      v-model="transportDetails.building_no"
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
                      v-model="transportDetails.street"
                      label="Street/Colony Name*"
                      lazy-rules
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Street/Colony')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-highway"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="transportDetails.land_mark"
                      label="Landmark"
                      label-color="black"
                      hide-bottom-space
                      ><template v-slot:prepend>
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
                      :options="states"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="transportDetails.state"
                      @input="
                        loadAllCities(transportDetails.state);
                        emptyCities();
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
                      v-model="transportDetails.city"
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
                      v-model="transportDetails.pin_code"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      :options="countriesArr"
                      v-model="transportDetails.country"
                      label="Country"
                      label-color="black"
                      :rules="[required('Country')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-map-marker"
                          color="secondary"
                        /> </template
                    ></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="transportDetails.transport_email_id"
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
                      v-model="transportDetails.transport_phone"
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
                      v-model="transportDetails.Name_Of_Contact_Person"
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="transportDetails.transport_latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number()]"
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
                      v-model="transportDetails.transport_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number()]"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-longitude"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />

              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      v-model="uploadImage"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      hide-bottom-space
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle Front Image "
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="uploadImage1"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle Back Image "
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    1- Day Time <b> 7:01AM To 9:00PM </b>.
                  </div>
                  <div class="row col-12 q-ml-md">
                    1- Night Time <b> 9:01PM To 7:00AM </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onTransportSubmit"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- Add Transport Dialog Detail End -->
      <!-- Transport Details Views Start -->

      <q-dialog
        v-model="transportViewDialog"
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
                View of Transport Details:
                {{ editedItem.transport_sub_name }}
              </div>
              <q-space />
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="otherAccTravelForm()"
              >
                Add Travel Data
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
                        Transport Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.transport_company_name }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">
                        Contact Person Name
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
                            Transport Image 1
                          </td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocumentacc(
                                  editedItem.upload_image,
                                  'Upload Image1'
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
                            Trasport Image2
                          </td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocumentacc(
                                  editedItem.upload_image1,
                                  'Upload Image2'
                                )
                              "
                            />
                          </td>
                        </tr>
                        <div
                          class="row q-col-gutter-sm q-py-sm q-pa-md"
                          style="padding-top: 0px"
                        />
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
                  Transport Description
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 150px">
                    <div
                      class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1"
                    >
                      <div class="col-12 text-justify text-grey">
                        {{ editedItem.transport_description }}
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
            <div
              class="row col-12  q-col-gutter-sm q-py-sm q-pa-md"
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
                      :data="acc_travel_rows"
                      :columns="acc_travel_columns"
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
                          <q-btn
                            color="green"
                            @click="editAccTravel(props.row)"
                            label="Edit"
                            size="sm"
                          >
                            <q-tooltip :disable="$q.platform.is.mobile"
                              >Edit</q-tooltip
                            >
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
                              showDocument1(
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
          </div>
        </q-layout>
      </q-dialog>
      <!-- Transport Details View End -->

      <!-- Transport Edit Dialog Start -->
          <q-dialog
        v-model="transportEditDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="transportEditDialog" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Transport Details
                </div>
                <q-space />
                <q-btn dark flat icon="close" color="white" v-close-popup>
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
                      v-model="transporteditedItem.transport_company_name"
                      label="Transport Company Name *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                      v-model="transporteditedItem.special_offer"
                      label="Special Offer *"
                      :rules="[
                        number(),
                        specialMOfferValue('Special Offer', 100)
                      ]"
                      lazy-rules
                      mask="###"
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-percent-outline"
                          color="secondary"
                        /> </template
                    ></q-input>

                    <q-input
                      dense
                      outlined
                      v-model="transporteditedItem.from_date"
                      label="Date From"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="transporteditedItem.from_date"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="transporteditedItem.to_date"
                      label="Date To"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy1.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy1"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="transporteditedItem.to_date"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog1"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="transporteditedItem.transport_description"
                      lazy-rules
                      style="width:100%"
                      label-color="black"
                      type="textarea"
                      :rules="[required('Description')]"
                      autogrow
                      hide-bottom-space
                      placeholder="Description *"
                    >
                    </q-input>
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
                      v-model="transporteditedItem.building_no"
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
                      v-model="transporteditedItem.street"
                      label="Street/Colony Name*"
                      lazy-rules
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Street/Colony')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-highway"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="transporteditedItem.land_mark"
                      label="Landmark"
                      label-color="black"
                      hide-bottom-space
                      ><template v-slot:prepend>
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
                      :options="states"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="transporteditedItem.state"
                      @input="
                        loadAllCities(transporteditedItem.state);
                        emptyCities();
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
                      v-model="transporteditedItem.city"
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
                      v-model="transporteditedItem.pin_code"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      :options="countriesArr"
                      v-model="transporteditedItem.country"
                      label="Country"
                      label-color="black"
                      :rules="[required('Country')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-map-marker"
                          color="secondary"
                        /> </template
                    ></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="transporteditedItem.transport_email_id"
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
                      v-model="transporteditedItem.transport_phone"
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
                      v-model="transporteditedItem.Name_Of_Contact_Person"
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-account"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="transporteditedItem.transport_latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number()]"
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
                      v-model="transporteditedItem.transport_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number()]"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-longitude"
                          color="secondary"
                        /> </template
                    ></q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />

              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      v-model="transporteditedItem.uploadImage1"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      hide-bottom-space
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle Front Image "
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="transporteditedItem.uploadImage2"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle Back Image "
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    1- Day Time <b> 7:01AM To 9:00PM </b>.
                  </div>
                  <div class="row col-12 q-ml-md">
                    1- Night Time <b> 9:01PM To 7:00AM </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Update"
                  @click="onAccoTransportUpdatingDetail"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Transport Edit Dialog End -->

      <!--Sachin  Add Medical Store Details Start -->
      <q-dialog
        v-model="accMedicalStoreDetails"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="addMedicalForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  Add Medical Store Details
                </div>
                <q-space />
                <q-btn
                  dark
                  flat
                  icon="close"
                  color="white"
                  @click="closeAddMedicalStore"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      v-model="AccMedicalStore.medical_store_name"
                      label="Medical Store *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="[
                        'Apollo',
                        'MedPlus',
                        'Netmeds',
                        '1mgAYUSH',
                        'Zigy',
                        'mChemist',
                        'OnlineMedicalStore.com',
                        'Savemymeds Pharmacy',
                        'Mera Pharmacy'
                      ]"
                      :rules="[required('Medical Store')]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <!-- <q-input dense outlined v-model="AccMedicalStore.medical_store_name" label="Medical Store *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Medical Store')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.special_offer"
                      label="Special Offer *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Special Offer')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.date_from"
                      label="Date From"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="AccMedicalStore.date_from"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.date_to"
                      label="Date To"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy1.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy1"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="AccMedicalStore.date_to"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog1"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.description"
                      lazy-rules
                      style="width:10 0%"
                      label-color="black"
                      type="textarea"
                      :rules="[required('Description')]"
                      autogrow
                      hide-bottom-space
                      placeholder="Description *"
                    >
                    </q-input>
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
                      v-model="AccMedicalStore.building_no"
                      label="House/Flat No *"
                      lazy-rules
                      label-color="black"
                      :rules="[required('House/Flat No')]"
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
                      v-model="AccMedicalStore.street"
                      label="Street/Colony Name*"
                      lazy-rules
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Street/Colony')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-highway"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.land_mark"
                      label="Landmark"
                      label-color="black"
                      hide-bottom-space
                      ><template v-slot:prepend>
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
                      :options="states"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="AccMedicalStore.state"
                      @input="
                        loadAllCities(AccMedicalStore.state);
                        emptyCities();
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
                      v-model="AccMedicalStore.city"
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
                      v-model="AccMedicalStore.pin_code"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      :options="countriesArr"
                      v-model="AccMedicalStore.country"
                      label="Country"
                      label-color="black"
                      :rules="[required('Country')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-map-marker"
                          color="secondary"
                        /> </template
                    ></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.email_id"
                      label="Email *"
                      lazy-rules
                      hide-bottom-space
                      style="width: 250px"
                      :rules="[required('Email'), email()]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.phone"
                      label="Phone *"
                      lazy-rules
                      mask="##########"
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Phone no'), phone()]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.name_Of_Contact_Person"
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name of Contact Person')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number()]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="AccMedicalStore.longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number()]"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-longitude" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      outlined
                      label="Opening Time *"
                      dense
                      v-model="AccMedicalStore.opening_time"
                      :rules="[required('Opening Time')]" @click="$refs.qOpeningTime.show()"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                          ref="qOpeningTime"
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time v-model="AccMedicalStore.opening_time" mask="hh:mm A" >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      outlined
                      label="Closing Time *"
                      dense
                      v-model="AccMedicalStore.closing_time"
                      :rules="[required('Closing Time')]"
                      @click="$refs.qClosingTime.show()"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                          ref="qClosingTime"
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time v-model="AccMedicalStore.closing_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      v-model="uploadImage"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      hide-bottom-space
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 1"
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="uploadImage1"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 2"
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="uploadImage2"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 3"
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 1MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="submitAccMedicalStoreData()"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!--Sachin  Add Medical Store Details End -->


        <!-- Sachin Medical Store Details Views Start -->

      <q-dialog
        v-model="medicalStoreViewDialog"
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
                View of Medical Store Details:
                {{ editedItem.equipment_sub_name }}
              </div>
              <q-space />
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="otherAccMedicalForm()"
              >
                Add Medical Equipments
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
                       Medical Store Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.medical_store_name }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">
                        Contact Person Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.name_of_contact_person }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">
                        Phone Number
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">
                        Email Id
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.email }}
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
                        : {{ editedItem.description }}
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
                        : {{ editedItem.state_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">City</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.city_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Pincode</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.pin_code }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Latitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.latitude }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Longitude
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.longitude }}
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
                            Medical Store Image 1
                          </td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocumentacc(
                                  editedItem.upload_image,
                                  'Upload Image1'
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
                            Medical Store Image2
                          </td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocumentacc(
                                  editedItem.upload_image1,
                                  'Upload Image2'
                                )
                              "
                            />
                          </td>
                        </tr>
                        <div
                          class="row q-col-gutter-sm q-py-sm q-pa-md"
                          style="padding-top: 0px"
                        />
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
                  Medical Store Description
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 150px">
                    <div
                      class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1"
                    >
                      <div class="col-12 text-justify text-grey">
                        {{ editedItem.description }}
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
            <div
              class="row col-12  q-col-gutter-sm q-py-sm q-pa-md"
              style="padding-top: 0px"
            >
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-card flat bordered class="bg-white">
                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                    <q-icon name="manage_accounts" color="black" size="1.5em" />
                    Equipment Details
                  </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="equipment_acc_rows" :columns="equipment_acc_columns" :pagination.sync="pagination"
                    dense row-key="sno" :filter="filter" :selected.sync="selected" separator="cell"
                    :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                          showDocumentmedical(props.row.equipment_image, 'Equipment Image')
                        " />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="green" icon="mdi-pencil" size="sm" @click="editAccEquipment(props.row)">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
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
          </div>
        </q-layout>
      </q-dialog>
      <!-- Sachin Medical Store Details View End -->

      <!--Sachin  Add Medical Store Details Start -->
      <q-dialog
        v-model="medicalStoreEditDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="addMedicalForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  Add Medical Store Details
                </div>
                <q-space />
                <q-btn
                  dark
                  flat
                  icon="close"
                  color="white"
                  @click="closeAddMedicalStore"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      v-model="medicalstoreeditedItem.medical_store_name"
                      label="Medical Store *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="[
                        'Apollo',
                        'MedPlus',
                        'Netmeds',
                        '1mgAYUSH',
                        'Zigy',
                        'mChemist',
                        'OnlineMedicalStore.com',
                        'Savemymeds Pharmacy',
                        'Mera Pharmacy'
                      ]"
                      :rules="[required('Medical Store')]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <!-- <q-input dense outlined v-model="AccMedicalStore.medical_store_name" label="Medical Store *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Medical Store')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.special_offer"
                      label="Special Offer *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Special Offer')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.from_date"
                      label="Date From"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="medicalstoreeditedItem.from_date"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.to_date"
                      label="Date To"
                      label-color="black"
                      clear-icon="close"
                      minimal
                      @click="$refs.qDateProxy1.show()"
                      style="width: 200px"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy1"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="medicalstoreeditedItem.to_date"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog1"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.description"
                      lazy-rules
                      style="width:10 0%"
                      label-color="black"
                      type="textarea"
                      :rules="[required('Description')]"
                      autogrow
                      hide-bottom-space
                      placeholder="Description *"
                    >
                    </q-input>
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
                      v-model="medicalstoreeditedItem.building_no"
                      label="House/Flat No *"
                      lazy-rules
                      label-color="black"
                      :rules="[required('House/Flat No')]"
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
                      v-model="medicalstoreeditedItem.street"
                      label="Street/Colony Name*"
                      lazy-rules
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Street/Colony')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-highway"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.land_mark"
                      label="Landmark"
                      label-color="black"
                      hide-bottom-space
                      ><template v-slot:prepend>
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
                      :options="states"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="medicalstoreeditedItem.state_name"
                      @input="
                        loadAllCities(medicalstoreeditedItem.state);
                        emptyCities();
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
                      v-model="medicalstoreeditedItem.city_name"
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
                      v-model="medicalstoreeditedItem.pin_code"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      :options="countriesArr"
                      v-model="medicalstoreeditedItem.country"
                      label="Country"
                      label-color="black"
                      :rules="[required('Country')]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-map-marker"
                          color="secondary"
                        /> </template
                    ></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.email"
                      label="Email *"
                      lazy-rules
                      hide-bottom-space
                      style="width: 250px"
                      :rules="[required('Email'), email()]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.phone"
                      label="Phone *"
                      lazy-rules
                      mask="##########"
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Phone no'), phone()]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.name_of_contact_person"
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name of Contact Person')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number()]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="medicalstoreeditedItem.longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number()]"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-longitude" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      outlined
                      label="Opening Time *"
                      dense
                      v-model="medicalstoreeditedItem.opening_time"
                      :rules="[required('Opening Time')]"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time v-model="AccMedicalStore.opening_time">
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input
                      outlined
                      label="Closing Time *"
                      dense
                      v-model="medicalstoreeditedItem.closing_time"
                      :rules="[required('Closing Time')]"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time v-model="medicalstoreeditedItem.closing_time">
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      v-model="medicalstoreeditedItem.uploadImage1"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      hide-bottom-space
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 1"
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="medicalstoreeditedItem.uploadImage2"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 2"
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="medicalstoreeditedItem.uploadImage3"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        val => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 3"
                      :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 1MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Update"
                  @click="onAccMedicalStoreUpdatingDetail()"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!--Sachin  Add Medical Store Details End -->

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
          class="text-weight-bold"
          @click="OpenAddDialog()"
        >
          Add Partner Profile
        </q-chip>
        <!-- <q-btn
          size="md"
          dense
          class="text-weight-bold"
          color="secondary"
          icon="add"
          label="Add New"
          @click="addDataDialog = true"
        /> -->
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
import { exportFile } from "quasar";
import { api } from "boot/axios";

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
const propertyRegistrationMaster = () => {
  return {
    approved: "",
    approved_val: "",
    property: "",
    property_name: "",
    gst_registration:"",
    name: "",
    partner_sub_name:"",
    phone: "",
    fax: "",
    alternate_no:"",
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
    state1:"",
    city1:"",
    prevcity:"",
    prevstate:"",
    pin_code: "",
    latitude: "",
    checkIn_time: "",
    longitude: "",
    accept: false,
    pan_card_file: [],
    addhaar_no: [],
    gst_tin: [],
    mh_agreement: [],
    // partner_pic: [],
    mb_certificate: [],
    property_tax: [],
    fire_safety: [],
    cancelled_cheque: [],
    amenitiesArr: [],
    propertyAmenitiesArr: [],
    partner_id: "",
  };
};
export default {
  data() {
    return {
      ...validations,
      dialogTitle: "",
      label2: "",
      // submitBtn: false,
      selected: [],
      data: [],
      url: "",
      inputValue: '',
      yes:false,
      no:false,
      othercity:false,
      otherstate:false,
      indiastate:false,
      indiacity:false,
      showOk: false,
      details: false,
      subPropertyView: false,
      propertyDialog: false,
      AccFoodPartnerDialog: false,
      AccMedicalPartnerDialog: false,
      accMedicalStoreDetails: false,
      medicalStoreEditDialog: false,
      AccTravelPartnerDialog: false,
      accMedicalDialog:false,
      roomsDialog: false,
      restaurantDialog:false,
      visible: false,
      visible1:false,
      showPanDoc: false,
      showtravel:false,
      small: false,
      big:false,
      propertyDataDialog: false,
      propertyEditDialog: false,
      roomsDataDialog: false,
      roomsEditDialog: false,
      otheramenitiesinput: false,
      restaurantDataDialog: false,
      restaurantEditDialog: false,
      otherfoodtype:['Veg','Non-Veg'],
      transportDialog: false,
      transportViewDialog: false,
      medicalStoreViewDialog: false,
      transportEditDialog: false,
      editedIndex: -1,
      editedItem: {
        gst_registration:"",
        account_id: "",
        partner_id: "",
        partner_sub_id: "",
        partner_name: "",
        partner_phone: "",
        partner_sub_name: "",
        property_type: "",
        phone: "",
        email_id: "",
        sub_partner_name:"",
        items_available_from:"",
        items_available_to:"",
        foodPartner_name:"",
        foodPartner_sub_name:"",
        agent_id:"",
        agent_sub_id:"",
        agent_name:"",
        travel_name:"",
        transport_sub_name:"",
        food_partner_name:"",
        food_partner_phone:"",
        food_partner_sub_name:"",
        kitchen_type:"",
        restaurant_phone:"",
        Name_Of_Contact_Person:"",
        restaurant_email:"",
        status:"",
        name_of_kitchen:"",
        type_of_kitchen:"",
      },
      editEditedItem: {
        equipment_id: "",
        equipment_sub_id: "",
        agent_name: "",
        equipment_sub_name: "",
        price: "",
        units: "",
        user_id: "",
        location: "",
        city: "",
        city_id: "",
        address: "",
        medical_store: ""
      },
      propertyEditedItem: {
        partner_id: "",
        partner_sub_id: "",
      },
      restaurantEditedItem:{
        agent_id:"",
        agent_sub_id:"",
      },
      roomsEditedItem: {
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
      },
      title: "My Properties",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      maximizedToggle: true,
      pan_card_file: [],
      addhaar_no: [],
      gst_tin: [],
      mh_agreement: [],
      // partner_pic: [],
      mb_certificate: [],
      property_tax: [],
      fire_safety: [],
      cancelled_cheque: [],
      uploadImage: [],
      uploadImage1: [],
      uploadImage2: [],
      uploadImage3: [],
      uploadImage4: [],
      upload_Image: [],
      upload_Image1: [],
      upload_Image2: [],
      upload_fssai:[],
      upload_fssai_1:[],
      countriesArr:["India"],
      countriescheck: [
        { name: "Afghanistan", code: "+93 AF" },
        { name: "Albania", code: "+355 AL" },
        { name: "Algeria", code: "+213 DZ" },
        { name: "American Samoa", code: "+1 684 AS" },
        { name: "AndorrA", code: "+376 AD" },
        { name: "Angola", code: "+244 AO" },
        { name: "Anguilla", code: "+1 264 AI" },
        { name: "Antigua and Barbuda", code: "+1 268 AG" },
        { name: "Argentina", code: "+54 AR" },
        { name: "Armenia", code: "+374 AM" },
        { name: "Aruba", code: "+297 AW" },
        { name: "Australia", code: "+61 AU" },
        { name: "Austria", code: "+43 AT" },
        { name: "Azerbaijan", code: "+994 AZ" },
        { name: "Bahamas", code: "+1 242 BS" },
        { name: "Bahrain", code: "+973 BH" },
        { name: "Bangladesh", code: "+880 BD" },
        { name: "Barbados", code: "+1 246 BB" },
        { name: "Belarus", code: "+375 BY" },
        { name: "Belgium", code: "+32 BE" },
        { name: "Belize", code: "+501 BZ" },
        { name: "Benin", code: "+229 BJ" },
        { name: "Bermuda", code: "+1 441 BM" },
        { name: "Bhutan", code: "+975 BT" },
        { name: "Bolivia", code: "+591 BO" },
        { name: "Bosnia and Herzegovina", code: "+387 BA" },
        { name: "Botswana", code: "+267 BW" },
        { name: "Brazil", code: "+55 BR" },
        { name: "British Indian Ocean Territory", code: "+246 IO" },
        { name: "Bulgaria", code: "+359 BG" },
        { name: "Burkina Faso", code: "+226 BF" },
        { name: "Burundi", code: "+257 BI" },
        { name: "Cambodia", code: "+855 KH" },
        { name: "Cameroon", code: "+237 CM" },
        { name: "Canada", code: "+1 CA" },
        { name: "Cape Verde", code: "+238 CV" },
        { name: "Cayman Islands", code: "+345 KY" },
        { name: "Central African Republic", code: "+236 CF" },
        { name: "Chad", code: "+235 TD" },
        { name: "Chile", code: "+56 CL" },
        { name: "China", code: "+86 CN" },
        { name: "Christmas Island", code: "+61 CX" },
        { name: "Cocos (Keeling) Islands", code: "+61 CC" },
        { name: "Colombia", code: "+57 CO" },
        { name: "Comoros", code: "+269 KM" },
        { name: "Congo", code: "+242 CG" },
        { name: "Congo, The Democratic Republic of the", code: "+243 CD" },
        { name: "Cook Islands", code: "+682 CK" },
        { name: "Costa Rica", code: "+506 CR" },
        { name: "Croatia", code: "+385 HR" },
        { name: "Cuba", code: "+53 CU" },
        { name: "Cyprus", code: "+537 CY" },
        { name: "Czech Republic", code: "+420 CZ" },
        { name: "Denmark", code: "+45 DK" },
        { name: "Djibouti", code: "+253 DJ" },
        { name: "Dominica", code: "+1 767 DM" },
        { name: "Dominican Republic", code: "+1 809 DO" },
        { name: "Ecuador", code: "+593 EC" },
        { name: "Egypt", code: "+20 EG" },
        { name: "El Salvador", code: "+503 SV" },
        { name: "Equatorial Guinea", code: "+240 GQ" },
        { name: "Eritrea", code: "+291 ER" },
        { name: "Estonia", code: "+372 EE" },
        { name: "Ethiopia", code: "+251 ET" },
        { name: "Falkland Islands (Malvinas)", code: "+500 FK" },
        { name: "Faroe Islands", code: "+298 FO" },
        { name: "Fiji", code: "+679 FJ" },
        { name: "Finland", code: "+358 FI" },
        { name: "France", code: "+33 FR" },
        { name: "French Guiana", code: "+594 GF" },
        { name: "French Polynesia", code: "+689 PF" },
        { name: "Gabon", code: "+241 GA" },
        { name: "Gambia", code: "+220 GM" },
        { name: "Georgia", code: "+995 GE" },
        { name: "Germany", code: "+49 DE" },
        { name: "Ghana", code: "+233 GH" },
        { name: "Gibraltar", code: "+350 GI" },
        { name: "Greece", code: "+30 GR" },
        { name: "Greenland", code: "+299 GL" },
        { name: "Grenada", code: "+1 473 GD" },
        { name: "Guadeloupe", code: "+590 GP" },
        { name: "Guam", code: "+1 671 GU" },
        { name: "Guatemala", code: "+502 GT" },
        { name: "Guinea", code: "+224 GN" },
        { name: "Guinea-Bissau", code: "+245 GW" },
        { name: "Guyana", code: "+595 GY" },
        { name: "Haiti", code: "+509 HT" },
        { name: "Honduras", code: "+504 HN" },
        { name: "Hong Kong", code: "+852 HK" },
        { name: "Hungary", code: "+36 HU" },
        { name: "Iceland", code: "+354 IS" },
        { name: "India", code: "+91 IND" },
        { name: "Indonesia", code: "+62 ID" },
        { name: "Iran, Islamic Republic Of", code: "+98 IR" },
        { name: "Iraq", code: "+964 IQ" },
        { name: "Ireland", code: "+353 IE" },
        { name: "Israel", code: "+972 IL" },
        { name: "Italy", code: "+39 IT" },
        { name: "Jamaica", code: "+1 876 JM" },
        { name: "Japan", code: "+81 JP" },
        { name: "Jordan", code: "+962 JO" },
        { name: "Kazakhstan", code: "+7 7 KZ" },
        { name: "Kenya", code: "+254 KE" },
        { name: "Kiribati", code: "+686 KI" },
        { name: "Kuwait", code: "+965 KW" },
        { name: "Kyrgyzstan", code: "+996 KG" },
        { name: "Lao People'S Democratic Republic", code: "+856 LA" },
        { name: "Latvia", code: "+371 LV" },
        { name: "Lebanon", code: "+961 LB" },
        { name: "Lesotho", code: "+266 LS" },
        { name: "Liberia", code: "+231 LR" },
        { name: "Libyan Arab Jamahiriya", code: "+218 LY" },
        { name: "Liechtenstein", code: "+423 LI" },
        { name: "Lithuania", code: "+370 LT" },
        { name: "Luxembourg", code: "+352 LU" },
        { name: "Macao", code: "+853 MO" },
        { name: "Macedonia, The Former Yugoslav Republic of", code: "+389 MK" },
        { name: "Madagascar", code: "+261 MG" },
        { name: "Malawi", code: "+265 MW" },
        { name: "Malaysia", code: "+60 MY" },
        { name: "Maldives", code: "+960 MV" },
        { name: "Mali", code: "+223 ML" },
        { name: "Malta", code: "+356 MT" },
        { name: "Marshall Islands", code: "+692 MH" },
        { name: "Martinique", code: "+596 MQ" },
        { name: "Mauritania", code: "+222 MR" },
        { name: "Mauritius", code: "+230 MU" },
        { name: "Mayotte", code: "+262 YT" },
        { name: "Mexico", code: "+52 MX" },
        { name: "Micronesia, Federated States of", code: "+691 FM" },
        { name: "Moldova, Republic of", code: "+373 MD" },
        { name: "Monaco", code: "+377 MC" },
        { name: "Mongolia", code: "+976 MN" },
        { name: "Montserrat", code: "+1664 MS" },
        { name: "Morocco", code: "+212 MA" },
        { name: "Myanmar", code: "+95 MM" },
        { name: "Namibia", code: "+264 NA" },
        { name: "Nauru", code: "+674 NR" },
        { name: "Nepal", code: "+977 NP" },
        { name: "Netherlands", code: "+31 NL" },
        { name: "Netherlands Antilles", code: "+599 AN" },
        { name: "New Caledonia", code: "+687 NC" },
        { name: "New Zealand", code: "+64 NZ" },
        { name: "Nicaragua", code: "+505 NI" },
        { name: "Niger", code: "+227 NE" },
        { name: "Nigeria", code: "+234 NG" },
        { name: "Niue", code: "+683 NU" },
        { name: "Norfolk Island", code: "+672 NF" },
        { name: "Northern Mariana Islands", code: "+1 670 MP" },
        { name: "Norway", code: "+47 NO" },
        { name: "Oman", code: "+968 OM" },
        { name: "Pakistan", code: "+92 PK" },
        { name: "Palau", code: "+680 PW" },
        { name: "Palestinian Territory, Occupied", code: "+970 PS" },
        { name: "Panama", code: "+507 PA" },
        { name: "Papua New Guinea", code: "+675 PG" },
        { name: "Paraguay", code: "+595 PY" },
        { name: "Peru", code: "+51 PE" },
        { name: "Philippines", code: "+63 PH" },
        { name: "Poland", code: "+48 PL" },
        { name: "Portugal", code: "+351 PT" },
        { name: "Puerto Rico", code: "+1 787 PR" },
        { name: "Qatar", code: "+974 QA" },
        { name: "Reunion", code: "+262 RE" },
        { name: "Romania", code: "+40 RO" },
        { name: "Russian Federation", code: "+7 RU" },
        { name: "RWANDA", code: "+250 RW" },
        { name: "Samoa", code: "+685 WS" },
        { name: "San Marino", code: "+378 SM" },
        { name: "Saudi Arabia", code: "+966 SA" },
        { name: "Senegal", code: "+221 SN" },
        { name: "Serbia and Montenegro", code: "+381 CS" },
        { name: "Seychelles", code: "+248 SC" },
        { name: "Sierra Leone", code: "+232 SL" },
        { name: "Singapore", code: "+65 SG" },
        { name: "Slovakia", code: "+421 SK" },
        { name: "Slovenia", code: "+386 SI" },
        { name: "Solomon Islands", code: "+677 SB" },
        { name: "South Africa", code: "+27 ZA" },
        {
          name: "South Georgia and the South Sandwich Islands",
          code: "+500 GS"
        },
        { name: "Spain", code: "+34 ES" },
        { name: "Sri Lanka", code: "+94 LK" },
        { name: "Sudan", code: "+249 SD" },
        { name: "Suriname", code: "+597 SR" },
        { name: "Swaziland", code: "+268 SZ" },
        { name: "Sweden", code: "+46 SE" },
        { name: "Switzerland", code: "+41 CH" },
        { name: "Syrian Arab Republic", code: "+963 SY" },
        { name: "Taiwan, Province of China", code: "+886 TW" },
        { name: "Tajikistan", code: "+992 TJ" },
        { name: "Tanzania, United Republic of", code: "+255 TZ" },
        { name: "Thailand", code: "+66 TH" },
        { name: "Timor-Leste", code: "+670 TL" },
        { name: "Togo", code: "+228 TG" },
        { name: "Tokelau", code: "+690 TK" },
        { name: "Tonga", code: "+676 TO" },
        { name: "Trinidad and Tobago", code: "+1 868 TT" },
        { name: "Tunisia", code: "+216 TN" },
        { name: "Turkey", code: "+90 TR" },
        { name: "Turkmenistan", code: "+993 TM" },
        { name: "Turks and Caicos Islands", code: "+1 649 TC" },
        { name: "Tuvalu", code: "+688 TV" },
        { name: "Uganda", code: "+256 UG" },
        { name: "Ukraine", code: "+380 UA" },
        { name: "United Arab Emirates", code: "+971 AE" },
        { name: "United Kingdom", code: "+44 GB" },
        { name: "United States", code: "+1 US" },
        { name: "Uruguay", code: "+598 UY" },
        { name: "Uzbekistan", code: "+998 UZ" },
        { name: "Vanuatu", code: "+678 VU" },
        { name: "Venezuela", code: "+58 VE" },
        { name: "Viet Nam", code: "+84 VN" },
        { name: "Virgin Islands, British", code: "+1 284 VG" },
        { name: "Virgin Islands, U.S.", code: "+1 340 VI" },
        { name: "Wallis and Futuna", code: "+681 WF" },
        { name: "Yemen", code: "+967 YE" },
        { name: "Zambia", code: "+260 ZM" },
        { name: "Zimbabwe", code: "+263 ZW" }
      ],
      propertyDetails: {
        account_id: "",
        property_name: "",
        sub_property_name: "",
        property_phone: "",
        property_email_id: "",
        Name_Of_Contact_Person:"",
        // property_price_startsFrom: "",
        property_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        property_status: "",
        property_latitude: "",
        property_longitude: "",
        partner_id: "",
        partner_sub_id: "",
        partner_name: "",
        partner_phone: "",
        partner_sub_name: "",
        amenities: null,
        checkIn_time: "",
        checkOut_time: "",
      },
      uploadRoomImage1: [],
      uploadRoomImage2: [],
      uploadRoomImage3: [],
      uploadRoomImage4: [],
      uploadRoomImage5: [],
      editedRoomsData: {
        property_specialOffer: "",
        txn_id: "",
        property_txn_id: "",
        partner_id: "",
        partner_sub_id: "",
        sub_property_name: "",
        property_name: "",
        room_category: "",
        no_of_avail_rooms: "",
        room_numbers:[],
        room_type: "",
        date_from: "",
        date_to: "",
        date_from_up: "",
        date_to_up: "",
        facilities: {},
        icon_image: [],
        price: "",
        other_amenities: "",
        units: "Per Day",
      },
      editedPropertyData: {
        txn_id: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
        partner_sub_name: "",
        property_name: "",
        sub_property_name: "",
        property_phone: "",
        Name_Of_Contact_Person:"",
        property_email: "",
        property_latitude: "",
        property_longitude: "",
        // property_price_startsFrom: "",
        property_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "",
        state_name: "",
        city_name: "",
        pin_code: "",
        checkIn_time: "",
        checkOut_time: "",
      },
      editAccMedical: {
        equipment_id: "",
        equipment_sub_id: "",
        equipment_sub_name: "",
        agent_name: "",
        price: "",
        item_name: "",
        units: "",
        txn_id: "",
        user_id: "",
        account_id: "",
        location: "",
        city: "",
        city_id: "",
        address: "",
        medical_store: "",
        equipment_image: "",
        unit_id: "",
        item_id: "",
        partner_status: "",
        purchased_type: "",
        //  special_offer:"",
      },
      roomDetails: {
        property_specialOffer: "",
        account_id: "",
        date_to: "",
        date_from: "",
        partner_id: "",
        partner_sub_id: "",
        partner_name: "",
        sub_partner_name: "",
        property_name: "",
        sub_property_name: "",
        room_category: "",
        no_of_avail_rooms: "",
        room_numbers:[],
        room_type: "",
        facilities: null,
        price: "",
        units: "Per Day",
        property_txn_id: "",
         other_amenities:"",
      },
      roomTypeArr: ["Single Share", "Double Share", "Triple Share"],
      propertyPartnerForm: {
        account_id: "",
        name: "",
        partner_sub_name:"",
        gst_registration:"",
        // prev_name: "",
        // prev_sub_name: "",
        // company_name: "",
        // individual_name:"",
        phone: "",
        fax: "",
        alternate_no:"",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        country:"",
        state: "",
        prevcity:"",
        prevstate:"",
        city1:"",
        state1:"",
        pin_code: "",
        pan: "",
        aadhar: "",
        gstin: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        accept: false,
        propertyType: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
      },
      restaurantDetails: {
        partner_status: "",
        account_id: "",
        restaurant_name: "",
        name_of_kitchen: "",
        type_of_kitchen:"",
        restaurant_phone: "",
        restaurant_email: "",
        Name_Of_Contact_Person:"",
        restaurant_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        restaurant_latitude: "",
        restaurant_longitude: "",
        agent_id: "",
        agent_sub_id: "",
        food_partner_name: "",
        food_partner_sub_name: "",
        opening_time: "",
        closing_time: "",
        date_from:"",
        date_to:"",
        food_partner_phone:"",
      },
      editRestaurantDetails: {
        txn_id:"",
        account_id: "",
        restaurant_name: "",
        name_of_kitchen: "",
        type_of_kitchen:"",
        restaurant_phone: "",
        restaurant_email: "",
        Name_Of_Contact_Person:"",
        restaurant_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        restaurant_latitude: "",
        restaurant_longitude: "",
        agent_id: "",
        agent_sub_id: "",
        food_partner_name: "",
        food_partner_phone: "",
        food_partner_sub_name: "",
        opening_time: "",
        closing_time: "",
        state_name:"",
        city_name:"",
        agent_name:"",
        agent_sub_name:"",
        date_from:"",
        date_to:"",

      },
      AccMedicalStore: {
        account_id: "",
        equipment_id: "",
        equipment_sub_id: "",
        medical_store_name: "",
        special_offer: "",
        date_from: "",
        date_to: "",
        description: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        state: "",
        city: "",
        pin_code: "",
        country: "",
        email_id: "",
        phone: "",
        name_Of_Contact_Person: "",
        latitude: "",
        longitude: "",
        opening_time: "",
        closing_time: ""
      },
      medicalstoreeditedItem: {
        txn_id: "",
        account_id: "",
        equipment_id: "",
        equipment_sub_id: "",
        medical_store_name: "",
        special_offer: "",
        date_from: "",
        date_to: "",
        description: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        state: "",
        city: "",
        pin_code: "",
        country: "",
        email_id: "",
        phone: "",
        name_Of_Contact_Person: "",
        latitude: "",
        longitude: "",
        opening_time: "",
        closing_time: ""
      },
      columns: "",
      pagination: {
        rowsPerPage: 500,
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      statesList: [],
      onclickValue: "",
      // propertyTypes: [],
      // propertyOptions: [],
      stateOption: [],
      cityOptions: [],
      recordsStatus: [],
      gstOptions: ["Registered", "Unregistered"],
      vehiclePrice: ["Per/Km", "Per/Trip"],
      vehicleseats: ["4 Seater", "5 Seater", "6 Seater", "7 Seater"],
      medicalPurchasingType: ["Market Price", "Rent (Per Day)"],
      equipment_image: [],
      vehicle_image: [],
      food_image: [],
      otherAcctravelPartner: {
        account_id: "",
        user_id: "",
        agent_id: "",
        transport_sub_id: "",
        agent_name: "",
        transport_sub_name: "",
        city: "",
        city_id: "",
        vehicle_name: "",
        no_of_seaters: "",
        day_price: "",
        night_price: "",
        units: "",
        location: "",
        address: "",
        description: "",
        vehicle_image: "",
        txn_id: "",
        travel_status: ""
      },
      AccFoodPartner: {
        agent_id:"",
        agent_sub_id:"",
        agent_name:"",
        account_id: "",
        user_id: "",
        partner_id: "",
        partner_sub_id: "",
        foodPartner_name: "",
        foodPartner_sub_name: "",
        sub_partner_name:"",
        name: "",
        partner_name: "",
        partner_sub_name:"",
        sub_Name: "",
        items_available_from: "",
        items_available_to: "",
        price: "",
        agent_sub_name: "",
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
        kitchen_txn_id:"",
        kitchen_type: "",
        kitchen_name: "",
        address: "",
        city: "",
        city_id: "",
        location: "",
        gstin: "",
        fssai_no: "",
        partner_status: ""
      },
      AccMedicalPartner: {
        account_id: "",
        equipment_id: "",
        equipment_sub_id: "",
        equipment_sub_name: "",
        agent_name: "",
        price: "",
        item_name: "",
        units: "",
        location: "",
        city: "",
        city_id: "",
        address: "",
        medical_store: "",
        partner_status: "",
        purchased_type: ""
      },
      transportDetails: {
        account_id: "",
        agent_id: "",
        transport_sub_id: "",
        transport_sub_name: "",
        agent_name: "",
        transport_company_name: "",
        special_offer: "",
        from_date: "",
        to_date: "",
        transport_phone: "",
        transport_email_id: "",
        Name_Of_Contact_Person: "",
        transport_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        transport_latitude: "",
        transport_longitude: ""
        // upload_image1: "",
        // upload_image2: "",
      },

      transporteditedItem: {
        account_id: "",
        agent_id: "",
        transport_sub_id: "",
        transport_sub_name: "",
        agent_name: "",
        transport_company_name: "",
        special_offer: "",
        from_date: "",
        to_date: "",
        transport_phone: "",
        transport_email_id: "",
        Name_Of_Contact_Person: "",
        transport_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        transport_latitude: "",
        transport_longitude: "",
        upload_image1: "",
        upload_image2: ""
      }
    };
  },

  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      property: (state) => state.dropdown.property_arr,
      property_partner_registration_columns: (state) =>
        state.partners.property_partner_registration_columns,
      property_data_columns: (state) => state.partners.property_data_columns,
      rooms_data_columns: (state) => state.partners.rooms_data_columns,
      property_registration_rows: (state) =>
        state.partners.property_registration_rows,
      property_registration_columns: (state) =>
        state.partners.property_registration_columns,
      propertyOptions: (state) => state.master.properties_arr,
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
      amenitiesArr: (state) => state.dropdown.amenities_arr,
      propertyAmenitiesArr: (state) => state.dropdown.property_amenities_arr,
      otherfoodListArr: state => state.dropdown.food_list_arr,
      otherfoodThaliArr: state => state.dropdown.food_item_types_arr,
      medicalItemName: state => state.dropdown.medical_item_name,
      medicalUnitsName: state => state.dropdown.medical_units_name,
      acc_food_Details_rows: state => state.partners.acc_food_Details_rows,
      acc_food_Details_columns: state => state.partners.acc_food_Details_columns,
      acc_travel_rows: (state) => state.partners.acc_travel_rows,
      acc_travel_columns: (state) => state.partners.acc_travel_columns,
      equipment_acc_rows: state => state.partners.equipment_acc_rows,
      equipment_acc_columns: state => state.partners.equipment_acc_columns,
      restaurant_data_columns: state => state.partners.restaurant_data_columns,
      transport_item_rows: state => state.partners.transport_item_rows,
      transport_item_columns: state => state.partners.transport_item_columns,
      acctransport_item_rows: state => state.partners.acctransport_item_rows,
      acctransport_item_columns: state => state.partners.acctransport_item_columns,
      accmedicalstore_item_rows: state => state.partners.accmedicalstore_item_rows,
      accmedicalstore_item_columns: state => state.partners.accmedicalstore_item_columns
    }),
    ...mapGetters("partners", ["property_partner_registration_rows"]),
    ...mapGetters("partners", ["property_data_rows"]),
    ...mapGetters("partners", ["rooms_data_rows"]),
    ...mapGetters("partners", ["restaurant_data_rows"]),
  },
  mounted() {
    this.$store.dispatch("partners/getPropertyRegistrationMaster");
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("master/loadPropertiesDropdown");
    this.$store.dispatch("dropdown/loadAllFacilities");
    this.$store.dispatch("dropdown/loadPropertyFacilities");
    this.$store.dispatch("dropdown/loadAllEquipmentItems");
    this.$store.dispatch("dropdown/loadAllFoodTypes");
    // this.$store.dispatch("partners/getPropertyRegistrationBasedOnStatus");
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
    ...mapActions("partners", ["propertyRegistrationMasterAdd"]),
    ...mapActions("partners", ["propertyRegistrationMasterExistingUser"]),
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("partners", ["getPropertyRegistrationMaster"]),
    ...mapActions("partners", ["propertyDetailsSaving"]),
    ...mapActions("partners", ["restaurantDetailsSaving"]),
    ...mapActions("partners", ["getPropertyDetails"]),
    ...mapActions("partners", ["roomDetailsSaving"]),
    ...mapActions("partners", ["getRoomsDetails"]),
    ...mapActions("partners", ["updateRoomsDetails"]),
    ...mapActions("partners", ["updatePropertyPartnerDetails"]),
    ...mapActions("partners", ["updatePropertyDetails"]),
    ...mapActions("partners", ["travelAccSaving"]),
    ...mapActions("dropdown", ["loadAllFoodItems"]),
    ...mapActions("dropdown", ["loadAllMedicalUnits"]),
    ...mapActions("partners", ["AccFoodSaving"]),
    ...mapActions("partners", ["medicalAccSaving"]),
    ...mapActions("partners", ["getAccFoodDetails"]),
    ...mapActions("partners", ["accFoodUpdating"]),
    ...mapActions("partners", ["loadAccTravel"]),
    ...mapActions("partners", ["accTravelUpdating"]),
    ...mapActions("partners",["getAccMedical"]),
    ...mapActions("partners",["accUpdatingmedical"]),
    ...mapActions("partners", ["restaurantDetailsSaving"]),
    ...mapActions("partners",["getRestaurantDetails"]),
    ...mapActions("partners",["updateRestaurantDetails"]),
    ...mapActions("partners", ["getAccomodationTransportDetails"]),
    ...mapActions("partners", ["updatingAccoTransportDetails"]),
    ...mapActions("partners", ["acctransportDataSaving"]),
    ...mapActions("partners", ["saveAccMedicalStoresData"]),
    ...mapActions("partners", ["getAccMedicalStoreDetailsSaving"]),
    ...mapActions("partners", ["updatingAccMedicalStoreDetails"]),
    onSubmit(val) {
      if (val == "submit") {
        // console.log("agentFormBankDetails",this.agentFormBankDetails);
        this.$refs.agentFormBankDetails.validate().then((success) => {
          if (success) {
            if (this.editedItem.partner_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  // console.log("propertyPartnerDetails",this.propertyPartnerDetails);
                  this.propertyPartnerForm.partner_id =
                    this.editedItem.partner_id;
                  this.propertyPartnerForm.partner_name =
                    this.editedItem.partner_name;
                  this.propertyPartnerForm.account_id =
                    this.userDetails.account_id;
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
                    "propertyPartnerDetails",
                    JSON.stringify(this.propertyPartnerForm)
                  );
                  this.propertyRegistrationMasterAdd(formData);
                  this.resetFiles();

                  this.propertyPartnerForm = propertyRegistrationMaster();
                //  this.$refs.agentFormBankDetails.resetValidation();
                  this.addDataDialog = false;
                  this.subPropertyView = false;
                  this.details = false;
                  this.step = 1;
                  this.$store.dispatch(
                    "partners/getPropertyRegistrationStatusCount"
                  );
                  this.getPropertyRegistrationMaster();
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
                  this.propertyPartnerForm.partner_id = "";
                  this.propertyPartnerForm.account_id =
                    this.userDetails.account_id;
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
                    "propertyPartnerDetails",
                    JSON.stringify(this.propertyPartnerForm)
                  );
                  this.propertyRegistrationMasterAdd(formData);
                  this.resetFiles();

                  this.propertyPartnerForm = propertyRegistrationMaster();
                //  this.$refs.agentFormBankDetails.resetValidation();
                  this.addDataDialog = false;
                  this.step = 1;
                  this.$store.dispatch(
                    "partners/getPropertyRegistrationStatusCount"
                  );
                  this.getPropertyRegistrationMaster();
                })
                .onCancel(() => {
                  this.resetFiles();

                  this.addDataDialog = true;
                });
            }
          }
        });
      } else if (val == "update") {
        this.$refs.agentFormBankDetails.validate().then((success) => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.propertyPartnerForm.account_id =
                  this.userDetails.account_id;
                this.updatePropertyPartnerDetails(this.propertyPartnerForm);
                this.propertyPartnerForm = propertyRegistrationMaster();
                this.addDataDialog = false;
                this.step = 1;
                this.subPropertyView = false;
                this.getPropertyRegistrationMaster();
              });
          }
        });
      }
    },
    onPropertySubmit() {
      this.$refs.propertyFormBasic.validate().then((success) => {
        if (success) {
          if (this.propertyDetails.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                const formData = new FormData();
                formData.append("upload_image1", this.uploadImage);
                formData.append("upload_image2", this.uploadImage1);
                formData.append("upload_image3", this.uploadImage2);
                formData.append("upload_image4", this.uploadImage3);
                formData.append("upload_image5", this.uploadImage4);
                formData.append("property_details", JSON.stringify(this.propertyDetails));
                this.propertyDetailsSaving(formData);
                this.resetFiles();

                this.propertyPartnerForm = propertyRegistrationMaster();
                this.propertyDialog = false;
                this.details = false;
                this.propertyDetails = {};
                this.step = 1;
                this.getPropertyDetails(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.propertyDialog = true;
              });
          }
        }
      });
    },
    onPropertyUpdate() {
      this.$refs.editPropertyForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.updatePropertyDetails(this.editedPropertyData);
              this.propertyEditDialog = false;
            })
            .onCancel(() => {
              this.resetFiles();
              this.propertyEditDialog = true;
            });
        }
      });
    },
    onRoomsSubmit() {
      this.$refs.roomsFormBasic.validate().then((success) => {
        if (success) {
          if (this.roomDetails.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.roomDetails.account_id = this.userDetails.account_id;
                this.roomDetails.date_from = this.roomDetails.date_from
                  .split("/")
                  .reverse()
                  .join("-");
                this.roomDetails.date_to = this.roomDetails.date_to
                  .split("/")
                  .reverse()
                  .join("-");
                const formData = new FormData();
                formData.append("upload_room_image1", this.uploadRoomImage1);
                formData.append("upload_room_image2", this.uploadRoomImage2);
                formData.append("upload_room_image3", this.uploadRoomImage3);
                formData.append("upload_room_image4", this.uploadRoomImage4);
                formData.append("upload_room_image5", this.uploadRoomImage5);
                formData.append("room_details", JSON.stringify(this.roomDetails));
                this.roomDetailsSaving(formData);
                this.resetFiles();
                this.roomsDialog = false;
                this.step = 1;
                this.roomDetails = {};
                this.propertyDataDialog = false;
                this.details = false;
              })
              .onCancel(() => {
                this.resetFiles();
                this.propertyDataDialog = true;
              });
          }
        }
      });
    },
    onRoomsUpdate() {
      this.$refs.editRoomsForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.editedRoomsData.date_from = this.editedRoomsData.date_from
                .split("/").reverse().join("-");
              this.editedRoomsData.date_to = this.editedRoomsData.date_to
                .split("/")
                .reverse()
                .join("-");
              this.updateRoomsDetails(this.editedRoomsData);
              this.roomsEditDialog = false;
              this.propertyDataDialog = false;
              this.details = false;
              this.getRoomsDetails();
            })
            .onCancel(() => {
              this.resetFiles();
              this.roomsEditDialog = true;
            });
        }
      });
    },
    submitTravel(val) {
      if (val == "submit") {
        this.$refs.AccTravelPartnerDialog.validate().then((success) => {
          if (this.otherAcctravelPartner.agent_id != "") {
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
                  this.otherAcctravelPartner.user_id = this.userDetails.account_id;
                  formData.append("vehicle_image", this.vehicle_image);
                  formData.append(
                    "travelLocation",
                    JSON.stringify(this.otherAcctravelPartner)
                  );
                  this.travelAccSaving(formData);
                  this.resetFiles();
                  this.emptyValue();
                  this.$refs.AccTravelPartnerDialog.resetValidation();
                  this.AccTravelPartnerDialog = false;
                  this.otherAcctravelPartner = {};
                  this.loadAccTravel(this.otherAcctravelPartner)
                  this.details = false;

                  // this.step = 1;
                })
                .onCancel(() => {
                  this.resetFiles();
                  this.emptyValue();
                  this.AccTravelPartnerDialog = true;
                });
            }
          }
        });
      } else if (val == "update") {
        this.$refs.AccTravelPartnerDialog.validate().then((success) => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.accTravelUpdating(this.otherAcctravelPartner);
                this.otherAcctravelPartner.user_id = this.userDetails.account_id;
                this.$refs.AccTravelPartnerDialog.resetValidation();
                this.travelAccSaving = false;
                this.details = false;
                this.loadAccTravel(this.otherAcctravelPartner)
                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                this.travelAccSaving = true;
              });
          }
        });
      }
    },
    updatingAccMedical() {
      this.$refs.accMedicalDialog.validate().then(success => {
        if (this.editAccMedical.equipment_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.accUpdatingmedical(this.editAccMedical);
                this.accMedicalDialog = false;
                this.AccMedicalPartnerDialog = false;
                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.accMedicalDialog = true;
              });
          }
        }
      });
    },
    // Submitfood() {
    //   this.$refs.AccFoodPartnerDialog.validate().then(success => {
    //     if (this.AccFoodPartner.agent_id != "") {
    //       if (success) {
    //         this.$q
    //           .dialog({
    //             title: "Confirm",
    //             message: "Do you want to Submit data ?",
    //             cancel: true,
    //             persistent: true
    //           })
    //           .onOk(() => {
    //             this.AccFoodPartner.account_id = this.userDetails.account_id;
    //             const formData = new FormData();
    //             formData.append("food_image", this.food_image);
    //             formData.append(
    //               "food_details",
    //               JSON.stringify(this.AccFoodPartner)
    //             );
    //             this.AccFoodSaving(formData);
    //             this.resetFiles();
    //             this.AccFoodPartner = {};
    //             this.AccFoodPartnerDialog = false;
    //             this.details = false;
    //             this.step = 1;
    //           })
    //           .onCancel(() => {
    //             this.resetFiles();
    //             this.emptyValue();
    //             this.AccFoodPartnerDialog = true;
    //           });
    //       }
    //     }
    //   });
    // },
    updateRestaurant() {
      this.$refs.editRestaurantForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.updateRestaurantDetails(this.editRestaurantDetails);
              this.restaurantEditDialog = false;
            })
            .onCancel(() => {
              this.resetFiles();
              this.restaurantEditDialog = true;
            });
        }
      });
    },
    Submitfood(val) {
      if (val == "submit") {
        this.$refs.AccFoodPartnerDialog.validate().then(success => {
          if (success) {
            if (this.AccFoodPartner.agent_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true
                })
                .onOk(() => {
                  this.AccFoodPartner.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("food_image", this.food_image);
                  formData.append(
                    "food_details",
                    JSON.stringify(this.AccFoodPartner)
                  );
                  this.AccFoodSaving(formData);
                  this.resetFiles();
                  this.emptyValue();
                  this.$refs.AccFoodPartnerDialog.resetValidation();
                  this.AccFoodPartnerDialog = false;

                  this.details = false;
                })
                .onCancel(() => {
                  this.resetFiles();
                  this.emptyValue();
                  this.AccFoodPartnerDialog = true;
                });
            }
          }
        });
      } else if (val == "update") {
        this.$refs.AccFoodPartnerDialog.validate().then(success => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.accFoodUpdating(this.AccFoodPartner);
                this.$refs.AccFoodPartnerDialog.resetValidation();
                this.AccFoodPartnerDialog = false;

                this.details = false;
              });
          }
        });
      }
    },
    onRestaurantSubmit() {
      this.$refs.restaurantFormBasic.validate().then((success) => {
        if (success) {
          if (this.restaurantDetails.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                const formData = new FormData();
                formData.append("upload_fssai", this.upload_fssai);
                formData.append("upload_image1", this.upload_Image);
                formData.append("upload_image2", this.upload_Image1);
                formData.append("upload_image3", this.upload_Image2);
                formData.append("restaurant_details", JSON.stringify(this.restaurantDetails));
                this.restaurantDetailsSaving(formData);
                this.resetFiles();

                // this.propertyPartnerForm = propertyRegistrationMaster();
                this.restaurantDialog = false;
                this.details = false;
                this.restaurantDetails = {};
                this.step = 1;
                // this.getRestaurantDetails(this.editedItem);

              })
              .onCancel(() => {
                this.resetFiles();
                this.restaurantDialog = true;
              });
          }
        }
      });
    },
    MedicalSubmit() {
      this.$refs.AccMedicalPartnerDialog.validate().then(success => {
        if (this.AccMedicalPartner.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.AccMedicalPartner.account_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("equipment_image", this.equipment_image);
                formData.append(
                  "equipmentItemDetails",
                  JSON.stringify(this.AccMedicalPartner)
                );
                this.medicalAccSaving(formData);
                this.resetFiles();
                this.AccMedicalPartnerDialog = false;
                this.AccMedicalPartner = {};
                this.details = false;
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.emptyValue();
                this.AccMedicalPartnerDialog = true;
              });
          }
        }
      });
    },
    createValue (val, done) {
      this.showOk = false
      console.log(val)
      if(done) {
        done(val)
      }
    },
    doStuff (val) {
      this.showOk = true
      this.inputValue = val
    },
    doOtherStuff () {
      this.showOk = false
      this.$refs.myChipInput.add(this.inputValue)
      this.$refs.myChipInput.updateInputValue('')
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxy1.hide();
    },
    closeEditEquipmentDialog() {
      this.accMedicalDialog = false;
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.partner_id = item.partner_id;
      this.editedItem.account_id = item.account_id;
      this.editedItem.partner_sub_id = item.partner_sub_id;
      this.editedItem.partner_name = item.agent_name;
      this.editedItem.partner_phone = item.phone;
      this.editedItem.partner_sub_name = item.agent_sub_name;
      this.propertyRegistrationMasterExistingUser(item.partner_id);
      this.subPropertyView = true;
    },
    viewPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.partner_id = item.partner_id;
      this.editedItem.account_id = item.account_id;
      this.editedItem.partner_sub_id = item.partner_sub_id;
      this.editedItem.partner_name = item.agent_name;
      this.editedItem.partner_phone = item.phone;
      this.editedItem.partner_sub_name = item.agent_sub_name;
      this.editedItem.agent_id = item.partner_id;
      this.editedItem.agent_sub_id = item.partner_sub_id;
      this.editedItem.agent_sub_id = item.partner_sub_id;
      this.details = true;
      this.getPropertyDetails(this.editedItem);
      this.getRestaurantDetails(this.editedItem);
      this.getAccomodationTransportDetails(this.editedItem);
      this.getAccMedicalStoreDetailsSaving(this.editedItem);
    },
    editPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.addDataDialog = true;
      this.onclickValue = "edit";
      this.step = 1;
      this.propertyPartnerForm.partner_id = item.partner_id;
      this.propertyPartnerForm.partner_sub_id = item.partner_sub_id;
      this.propertyPartnerForm.name = item.agent_name;
      this.propertyPartnerForm.partner_sub_name = item.agent_sub_name;
      this.propertyPartnerForm.phone = item.phone;
      this.propertyPartnerForm.fax = item.fax;
      this.propertyPartnerForm.alternate_no = item.alternate_no;
      this.propertyPartnerForm.email_id = item.email_id;
      this.propertyPartnerForm.description = item.description;
      this.propertyPartnerForm.building_no = item.building_no;
      this.propertyPartnerForm.street = item.street;
      this.propertyPartnerForm.land_mark = item.land_mark;
      this.propertyPartnerForm.country = item.country;
      this.propertyPartnerForm.state = item.state;
      this.propertyPartnerForm.city = item.city;
      this.propertyPartnerForm.prevstate = item.state;
      this.propertyPartnerForm.prevcity = item.city;
      this.propertyPartnerForm.pin_code = item.pin_code;
      this.propertyPartnerForm.propertyType = item.property_type;
      this.propertyPartnerForm.pan = item.pan;
      this.pan_card_file = {
        name: item.pan_loc ?? "",
      };
      this.propertyPartnerForm.aadhar = item.aadhar;
      this.addhaar_no = {
        name: item.addhaar_loc ?? "",
      };
      this.propertyPartnerForm.gstin = item.gstin;
      this.gst_tin = {
        name: item.gst_tin_loc ?? "",
      };
      this.mh_agreement = {
        name: item.mh_agreement_loc ?? "",
      };
      this.mb_certificate = {
        name: item.mb_certificate_loc ?? "",
      };
      this.property_tax = {
        name: item.property_tax_loc ?? "",
      };
      this.fire_safety = {
        name: item.fire_safety_loc ?? "",
      };
      this.propertyPartnerForm.bankAccountNo = item.bankAccountNo;
      this.propertyPartnerForm.bankName = item.bankName;
      this.propertyPartnerForm.branchName = item.branchName;
      this.propertyPartnerForm.ifsc = item.ifsc;
      this.cancelled_cheque = {
        name: item.cancelled_cheque_doc ?? "",
      };
    },
    editAccTravel(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.AccTravelPartnerDialog = true;
      this.onclickValue = "edit";
      this.otherAcctravelPartner.account_id = item.account_id;
      this.otherAcctravelPartner.txn_id = item.txn_id;
      this.otherAcctravelPartner.agent_id = item.agent_id;
      this.otherAcctravelPartner.transport_sub_id = item.transport_sub_id;
      this.editedItem.agent_name = item.travel_name;
      this.otherAcctravelPartner.agent_name = this.editedItem.agent_name;
      this.editedItem.transport_sub_name = item.transport_sub_name;
      this.otherAcctravelPartner.transport_sub_name =
      this.editedItem.transport_sub_name;
      this.otherAcctravelPartner.city = item.city;
      this.otherAcctravelPartner.city_id = item.city_id;
      this.otherAcctravelPartner.travel_status = item.travel_status;
      this.otherAcctravelPartner.vehicle_name = item.vehicle_name;
      this.otherAcctravelPartner.no_of_seaters = item.no_of_seaters;
      this.otherAcctravelPartner.day_price = item.day_price;
      this.otherAcctravelPartner.night_price = item.night_price;
      this.otherAcctravelPartner.units = item.units;
      this.otherAcctravelPartner.description = item.description;
      this.otherAcctravelPartner.address = item.address;
      this.otherAcctravelPartner.location = item.location;
      this.otherAcctravelPartner.transport_sub_name = this.editedItem.transport_sub_name;
      this.otherAcctravelPartner.vehicle_image = item.vehicle_image;
      this.vehicle_image = {
        name: item.vehicle_image ?? "",
      };

    },
    editAccEquipment(item) {
      this.accMedicalDialog = true;
      this.editAccMedical.account_id = item.account_id;
      this.editAccMedical.txn_id = item.txn_id;
      this.editAccMedical.item_name = item.item_name;
      this.editAccMedical.item_id = item.item_id;
      this.editAccMedical.price = item.price;
      this.editAccMedical.units = item.units;
      this.editAccMedical.unit_id = item.units_id;
      this.editAccMedical.equipment_id = item.equipment_id;
      this.editAccMedical.equipment_sub_id = item.equipment_sub_id;
      this.editAccMedical.agent_name = item.agent_name;
      this.editAccMedical.equipment_sub_name = item.equipment_sub_name;
      this.editAccMedical.medical_store = item.medical_store;
      this.editAccMedical.purchased_type = item.purchased_type;
      this.editAccMedical.address = item.address;
      this.editAccMedical.city = item.city;
      this.editAccMedical.city_id = item.city_id;
      this.editAccMedical.partner_status = item.partner_status;
      this.editAccMedical.location = item.location;
      this.equipment_image = { name: item.equipment_image ?? "" };
    },
    showPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.propertyEditedItem = Object.assign({}, item);
      this.propertyEditedItem.partner_id = item.partner_id;
      this.propertyEditedItem.partner_sub_id = item.partner_sub_id;
      this.propertyDataDialog = true;
      this.getRoomsDetails(this.propertyEditedItem);
    },
    editPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedPropertyData = Object.assign({}, item);
      this.editedPropertyData.partner_id = item.partner_id;
      this.editedPropertyData.partner_sub_id = item.partner_sub_id;
      this.editedPropertyData.partner_name = item.partner_name;
      this.editedPropertyData.partner_sub_name = item.sub_partner_name;
      this.editedPropertyData.property_name = item.property_name;
      this.editedPropertyData.sub_property_name = item.sub_property_name;
      this.editedPropertyData.property_phone = item.property_phone;
      this.editedPropertyData.Name_Of_Contact_Person = item.Name_Of_Contact_Person;
      this.editedPropertyData.property_email = item.property_email;
      this.editedPropertyData.Name_Of_Contact_Person=item.Name_Of_Contact_Person;
      this.editedPropertyData.property_latitude = item.property_latitude;
      this.editedPropertyData.property_longitude = item.property_longitude;
      this.editedPropertyData.property_description = item.property_description;
      this.editedPropertyData.building_no = item.building_no;
      this.editedPropertyData.street = item.street;
      this.editedPropertyData.land_mark = item.land_mark;
      this.editedPropertyData.country = item.country;
      this.editedPropertyData.state_name = item.state_name;
      this.editedPropertyData.city_name = item.city_name;
      this.editedPropertyData.pin_code = item.pin_code;
      this.editedPropertyData.txn_id = item.txn_id;
      this.editedPropertyData.checkIn_time = item.checkIn_time;
      this.editedPropertyData.checkOut_time = item.checkOut_time;
      this.uploadImage = {
        name: item.upload_image ?? "",
      };

      this.uploadImage1 = {
        name: item.upload_image1 ?? "",
      };
      this.uploadImage2 = {
        name: item.upload_image2 ?? "",
      };
      this.uploadImage3 = {
        name: item.upload_image3 ?? "",
      };
      this.uploadImage4 = {
        name: item.upload_image4 ?? "",
      };
      this.propertyEditDialog = true;
    },

    editRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedRoomsData = Object.assign({}, item);
      this.roomsEditDialog = true;
      const amenity =[
        {
          amenity_name : item.facilities.split(","),
          icon_image : item.icon_image.split(",")
        }
      ];
      this.editedRoomsData.txn_id = item.txn_id;
      this.editedRoomsData.partner_id = item.partner_id;
      this.editedRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedRoomsData.sub_property_name = item.sub_property_name;
      this.editedRoomsData.property_name = item.property_name;
      this.editedRoomsData.room_category = item.room_category;
      this.editedRoomsData.no_of_avail_rooms = item.no_of_avail_rooms;
      this.editedRoomsData.room_numbers = item.room_numbers;
      this.editedRoomsData.room_type = item.room_type;
      this.editedRoomsData.property_specialOffer = item.property_specialOffer;
      this.editedRoomsData.date_from = this.editedRoomsData.date_from;
      this.editedRoomsData.date_to = this.editedRoomsData.date_to;
      this.editedRoomsData.date_from_up = this.editedRoomsData.date_from;
      this.editedRoomsData.date_to_up = this.editedRoomsData.date_to;
      this.editedRoomsData.facilities = amenity;
      this.editedRoomsData.price = item.price;
      this.editedRoomsData.other_amenities = item.other_amenities;
      this.editedRoomsData.units = item.units;
      this.uploadRoomImage1 = {
        name: item.room_image_1 ?? "",
      };
      this.uploadRoomImage2 = {
        name: item.room_image_2 ?? "",
      };
      this.uploadRoomImage3 = {
        name: item.room_image_3 ?? "",
      };
      this.uploadRoomImage4 = {
        name: item.room_image_4 ?? "",
      };
      this.uploadRoomImage5 = {
        name: item.room_image_5 ?? "",
      };
    },
    showRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.roomsEditedItem = Object.assign({}, item);
      this.roomsEditedItem.partner_id = item.partner_id;
      this.roomsEditedItem.partner_sub_id = item.partner_sub_id;
      this.editedRoomsData.partner_id = item.partner_id;
      this.editedRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedRoomsData.property_txn_id = item.property_txn_id;
      this.roomsDataDialog = true;
      this.propertyDataDialog = true;
    },
    editOpenAddDialog() {
      this.onclickValue = "";
      this.step = 1;
      this.addDataDialog = true;
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.partner_id = "");
      this.onclickValue = "";
      this.step = 1;
      this.addDataDialog = true;
      this.details = false;
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
    editFoodItem(item) {
      this.step = 1;
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.AccFoodPartnerDialog = true;
      this.onclickValue = "edit";
      this.AccFoodPartner.account_id = item.account_id;
      this.AccFoodPartner.agent_id = item.agent_id;
      this.AccFoodPartner.agent_sub_id = item.agent_sub_id;
      this.AccFoodPartner.item_txn_id = item.item_txn_id;
      this.AccFoodPartner.partner_id = item.agent_id;
      this.AccFoodPartner.partner_sub_id = item.agent_sub_id;
      this.AccFoodPartner.foodPartner_name =item.foodPartner_name;
      this.AccFoodPartner.foodPartner_sub_name=item.foodPartner_sub_name;
      this.AccFoodPartner.address = item.address;
      this.AccFoodPartner.city = item.city;
      this.AccFoodPartner.location = item.location;
      this.AccFoodPartner.partner_status = item.partner_status;
      this.AccFoodPartner.city_id = item.city_id;
      this.AccFoodPartner.gstin = item.gstin;
      this.AccFoodPartner.fssai_no = item.fssai_no;
      this.AccFoodPartner.kitchen_name = item.kitchen_name;
      this.AccFoodPartner.kitchen_type = item.kitchen_type;
      this.AccFoodPartner.foodtype=item.item_name;
      this.AccFoodPartner.foodName = item.food_items_name;
      // this.AccFoodPartner.food_type_id = item.food_type_id;
      this.AccFoodPartner.foodItemsList = item.food_items_name;
      this.AccFoodPartner.units = item.units;
      this.AccFoodPartner.price = item.price;
      this.AccFoodPartner.items_available_from = item.items_available_from;
      this.AccFoodPartner.items_available_to = item.items_available_to;
      this.AccFoodPartner.food_image = item.food_image;

      this.food_image = {
        name: item.food_image ?? ""
      };
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
    closeRoomDialog() {
      this.roomsDialog = false;
    },
    closeAddPartnerDialog() {
      this.addDataDialog = false;
      this.resetFiles();
      this.propertyPartnerForm = propertyRegistrationMaster();
    },
    openPropertyDialog() {
      this.propertyDetails.partner_id = this.editedItem.partner_id;
      this.propertyDetails.account_id = this.editedItem.account_id;
      this.propertyDetails.partner_sub_id = this.editedItem.partner_sub_id;
      this.propertyDetails.partner_name = this.editedItem.partner_name;
      this.propertyDetails.partner_phone = this.editedItem.partner_phone;
      this.propertyDetails.partner_sub_name = this.editedItem.partner_sub_name;
      // this.propertyDetails.property_name = this.editedItem.property_type;
      this.propertyDetails.property_phone = this.editedItem.phone;
      this.propertyDetails.Name_Of_Contact_Person = this.editedItem.Name_Of_Contact_Person;
      this.propertyDetails.property_email_id = this.editedItem.email_id;
      this.propertyDetails.property_status = this.editedItem.status;
      this.resetFiles();
      this.propertyDialog = true;
    },
    otherAccFoodForm() {
      this.AccFoodPartner.account_id = this.restaurantEditedItem.account_id;
      this.AccFoodPartner.agent_id = this.restaurantEditedItem.agent_id;
      this.AccFoodPartner.agent_sub_id = this.restaurantEditedItem.agent_sub_id;
      this.AccFoodPartner.agent_name = this.restaurantEditedItem.agent_name;
      this.AccFoodPartner.sub_Name = this.restaurantEditedItem.agent_sub_name;
      this.AccFoodPartner.kitchen_name = this.restaurantEditedItem.name_of_kitchen;
      this.AccFoodPartner.kitchen_type = this.restaurantEditedItem.type_of_kitchen;
      this.AccFoodPartner.address = this.restaurantEditedItem.address;
      this.AccFoodPartner.gstin = this.restaurantEditedItem.gstin;
      this.AccFoodPartner.city = this.restaurantEditedItem.city;
       this.AccFoodPartner.city_id = this.restaurantEditedItem.city_id;
       this.AccFoodPartner.location = this.restaurantEditedItem.location;
      this.AccFoodPartner.partner_status = this.restaurantEditedItem.status;
      this.AccFoodPartner.kitchen_txn_id=this.restaurantEditedItem.txn_id;
      // this.AccFoodPartner.items_available_from = this.editedItem.items_available_from;
      // this.AccFoodPartner.items_available_to = this.editedItem.items_available_to;
      this.onclickValue = "";
       this.emptyValue();
      this.AccFoodPartnerDialog = true;
    },
    otherAccTravelForm() {
      this.otherAcctravelPartner.account_id = this.userDetails.account_id;
      this.otherAcctravelPartner.agent_id = this.editedItem.partner_id;
      this.otherAcctravelPartner.transport_sub_id = this.editedItem.partner_sub_id;
      this.otherAcctravelPartner.agent_name = this.editedItem.partner_name;
      this.otherAcctravelPartner.transport_sub_name = this.editedItem.partner_sub_name;
      this.otherAcctravelPartner.travel_status = this.editedItem.status;
      this.otherAcctravelPartner.city_id = this.editedItem.city_id;
      this.otherAcctravelPartner.city = this.editedItem.city;
      this.otherAcctravelPartner.address = this.editedItem.address;
      this.otherAcctravelPartner.location = this.editedItem.location;
      this.onclickValue = "";
      this.emptyValue();
      this.AccTravelPartnerDialog = true;
    },
    accMedicalstoreDetailsForm(){
      this.AccMedicalStore.account_id = this.userDetails.account_id;
      this.AccMedicalStore.equipment_id = this.editedItem.partner_id;
      this.AccMedicalStore.equipment_sub_id = this.editedItem.partner_sub_id;
      this.AccMedicalStore.agent_name = this.editedItem.partner_name;
      this.AccMedicalStore.equipment_sub_name = this.editedItem.partner_sub_name;
      this.AccMedicalStore.email_id = this.editedItem.email_id;
      this.AccMedicalStore.phone = this.editedItem.phone;
     // this.AccMedicalStore.partner_status = this.editedItem.status;
     this.accMedicalStoreDetails =true;
    },
    otherAccMedicalForm() {
      this.AccMedicalPartner.account_id = this.userDetails.account_id;
      this.AccMedicalPartner.equipment_id = this.editedItem.equipment_id;
      this.AccMedicalPartner.equipment_sub_id = this.editedItem.equipment_sub_id;
      this.AccMedicalPartner.agent_name = this.editedItem.agent_name;
      this.AccMedicalPartner.equipment_sub_name = this.editedItem.equipment_sub_name;
      this.AccMedicalPartner.medical_store = this.editedItem.medical_store_name;
      this.AccMedicalPartner.address = this.editedItem.address;
      this.AccMedicalPartner.city = this.editedItem.city_name;
      this.AccMedicalPartner.city_id = this.editedItem.city_id;
      this.AccMedicalPartner.location = this.editedItem.location;
      this.AccMedicalPartner.partner_status = this.editedItem.status;
      this.onclickValue = "";
      this.emptyValue();

      this.AccMedicalPartnerDialog = true;
    },
    emptyValue() {
      this.AccFoodPartner.units = [];
      this.food_image = [];
      this.AccFoodPartner.price = [];
      this.AccFoodPartner.foodtype = [];
      this.AccFoodPartner.foodItemsList = [];
      this.AccFoodPartner.items_available_from = [];
      this.AccFoodPartner.items_available_to = [];
      this.otherAcctravelPartner.day_price = [];
      this.otherAcctravelPartner.night_price = [];
      this.otherAcctravelPartner.units = [];
      this.otherAcctravelPartner.vehicle_name = [];
      this.otherAcctravelPartner.no_of_seaters = [];
      this.otherAcctravelPartner.description = "";
      this.vehicle_image = [];
      this.AccMedicalPartner.price = [];
      this.AccMedicalPartner.item_name = [];
      this.AccMedicalPartner.units = [];
      this.equipment_image = [];
    },

    closePropertyDialog() {
      this.propertyDialog = false;
    },
    closeRestaurantDialog(){
      this.restaurantDialog = false;
    },
    closeRestaurantEditDialog(){
      this.restaurantEditDialog = false;
    },
    opentransportDialog() {
      this.transportDetails.account_id = this.userDetails.account_id;
      this.transportDetails.agent_id = this.editedItem.partner_id;
      this.transportDetails.transport_sub_id = this.editedItem.partner_sub_id;
      this.transportDetails.agent_name = this.editedItem.partner_name;
      this.transportDetails.transport_sub_name = this.editedItem.partner_sub_name;
      this.onclickValue = "";

      this.resetFiles();
      this.transportDialog = true;
    },
    onTransportSubmit() {
      this.$refs.transportFormBasic.validate().then(success => {
        if (success) {
          if (this.transportDetails.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                const formData = new FormData();
                this.transportDetails.user_id = this.userDetails.account_id;
                formData.append("upload_image1", this.uploadImage);
                formData.append("upload_image2", this.uploadImage1);

                formData.append(
                  "transport_details",
                  JSON.stringify(this.transportDetails)
                );
                this.acctransportDataSaving(formData);
                this.resetFiles();
                this.transportDialog = false;
                this.details = false;
                this.transportDetails = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.transportDialog = true;
              });
          }
        }
      });
    },

    showTransportDetails(item) {
      // this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.transportViewDialog = true;
      this.loadAccTravel(this.editedItem);
      // this.getAccomodationTransportDetails(this.editedItem);
    },

    editTrasportDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.transporteditedItem = Object.assign({}, item);
      this.transporteditedItem.tnx_id = item.tnx_id;
      this.transporteditedItem.agent_id = item.agent_id;
      this.transporteditedItem.transport_sub_id = item.transport_sub_id;
      this.transporteditedItem.account_id = item.account_id;
      this.transporteditedItem.transport_sub_name = item.transport_sub_name;
      this.transporteditedItem.agent_name = item.agent_name;
      this.transporteditedItem.transport_company_name =
        item.transport_company_name;
      this.transporteditedItem.special_offer = item.special_offer;
      this.transporteditedItem.from_date = item.from_date;
      this.transporteditedItem.to_date = item.to_date;
      this.transporteditedItem.transport_phone = item.transport_phone;
      this.transporteditedItem.transport_email_id = item.transport_email_id;
      this.transporteditedItem.Name_Of_Contact_Person =
        item.Name_Of_Contact_Person;
      this.transporteditedItem.transport_description =
        item.transport_description;
      this.transporteditedItem.building_no = item.building_no;
      this.transporteditedItem.street = item.street;
      this.transporteditedItem.land_mark = item.land_mark;
      this.transporteditedItem.city = item.city;
      this.transporteditedItem.state = item.state;
      this.transporteditedItem.pin_code = item.pin_code;
      this.transporteditedItem.transport_latitude = item.transport_latitude;
      this.transporteditedItem.transport_longitude = item.transport_longitude;
      this.transporteditedItem.uploadImage1 = {
        name: item.upload_image1 ?? ""
      };
      this.transporteditedItem.uploadImage2 = {
        name: item.upload_image2 ?? ""
      };
      this.transportEditDialog = true;
    },

    onAccoTransportUpdatingDetail() {
      this.$refs.transportEditDialog.validate().then(success => {
        if (this.transporteditedItem.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.updatingAccoTransportDetails(this.transporteditedItem);
                this.transportEditDialog = false;

                this.details = false;

                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.transportEditDialog = true;
              });
          }
        }
      });
    },

    submitAccMedicalStoreData() {
      this.$refs.addMedicalForm.validate().then(success => {
        if (success) {
          if (this.AccMedicalStore.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.AccMedicalStore.user_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("upload_image_1", this.uploadImage);
                formData.append("upload_image_2", this.uploadImage1);
                formData.append("upload_image_3", this.uploadImage2);
                formData.append(
                  "addMedStoresData",
                  JSON.stringify(this.AccMedicalStore)
                );
                this.saveAccMedicalStoresData(formData);
                this.resetFiles();
                this.accMedicalStoreDetails = false;
                this.details = false;
                this.AccMedicalStore = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.accMedicalStoreDetails = true;
              });
          }
        }
      });
    },
  editMedicalStoreDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.medicalstoreeditedItem = Object.assign({}, item);
      this.medicalstoreeditedItem.txn_id = item.txn_id;
      this.medicalstoreeditedItem.equipment_id = item.equipment_id;
      this.medicalstoreeditedItem.equipment_sub_id = item.equipment_sub_id;
      this.medicalstoreeditedItem.account_id = item.account_id;
      this.medicalstoreeditedItem.equipment_sub_name = item.equipment_sub_name;
      this.medicalstoreeditedItem.agent_name = item.agent_name;
      this.medicalstoreeditedItem.medical_store_name =
        item.medical_store_name;
      this.medicalstoreeditedItem.special_offer = item.special_offer;
      this.medicalstoreeditedItem.from_date = item.from_date;
      this.medicalstoreeditedItem.to_date = item.to_date;
      this.medicalstoreeditedItem.description = item.description;
      this.medicalstoreeditedItem.phone = item.phone;
      this.medicalstoreeditedItem.email = item.email;
      this.medicalstoreeditedItem.name_of_contact_person =
        item.name_of_contact_person;
      this.medicalstoreeditedItem.building_no = item.building_no;
      this.medicalstoreeditedItem.street = item.street;
      this.medicalstoreeditedItem.land_mark = item.land_mark;
      this.medicalstoreeditedItem.city_name = item.city_name;
      this.medicalstoreeditedItem.state_name = item.state_name;
      this.medicalstoreeditedItem.pin_code = item.pin_code;
      this.medicalstoreeditedItem.latitude = item.latitude;
      this.medicalstoreeditedItem.longitude = item.longitude;
      this.medicalstoreeditedItem.uploadImage1 = {
        name: item.upload_image1 ?? ""
      };
      this.medicalstoreeditedItem.uploadImage2 = {
        name: item.upload_image2 ?? ""
      };
      this.medicalstoreeditedItem.uploadImage3 = {
        name: item.upload_image3 ?? ""
      };
      this.medicalStoreEditDialog = true;
    },
   showMedicalStoreDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.medicalStoreViewDialog = true;
      this.getAccMedical(item);
    },

  onAccMedicalStoreUpdatingDetail() {
      this.$refs.addMedicalForm.validate().then(success => {
        if (this.medicalstoreeditedItem.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.updatingAccMedicalStoreDetails(this.medicalstoreeditedItem);
                this.medicalStoreEditDialog = false;

                this.details = false;

                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.medicalStoreEditDialog = true;
              });
          }
        }
      });
    },

      closeAddMedicalStore() {
      this.accMedicalStoreDetails = false;
      this.medicalStoreEditDialog = false;
    },
  getOtherAmenities(facilities) {
    for (let i = 0; i < facilities.length; i++) {
      if (facilities[i].amenity_name == "Others" ) {
        this.otheramenitiesinput = true;
      } else {

       this.otheramenitiesinput = false;
      }
    }
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
    showDocument1(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhtpFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },
    showDocumentfood(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhfpFilePath + file;
        this.visible = false;
      }, 500);
      this.small = true;
    },
    showDocumentmedical(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhepFilePath + file;
        this.visible = false;
      }, 500);
      this.small = true;
    },
    showRestaurantDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhfpFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },
    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      this.cancelled_cheque = [];
      this.mb_certificate = [];
      this.property_tax = [];
      this.fire_safety = [];
      this.uploadImage = [];
      this.uploadImage1 = [];
      this.uploadImage2 = [];
      this.uploadImage3 = [];
      this.uploadImage4 = [];
      this.uploadRoomImage1 = [];
      this.uploadRoomImage2 = [];
      this.uploadRoomImage3 = [];
      this.uploadRoomImage4 = [];
      this.uploadRoomImage5 = [];
      this.vehicle_image = [];
      this.upload_Image = [];
      this.upload_Image1 = [];
      this.upload_Image2 = [];
      this.upload_fssai = [];
      this.upload_fssai_1 = [];
    },
    emptyCities() {
      this.propertyDetails.city = "";
    },
    emptyFoodItems() {
      this.AccFoodPartner.foodItemsList = [];
    },
    emptyMedicalItems() {
      this.AccMedicalPartner.units = [];

    },

    checkstate(){
      if(this.propertyPartnerForm.country.name == "India"){
        this.indiastate=true;
        this.indiacity=true;
        this.otherstate=false;
        this.othercity=false;
      } else{
        this.emptyotherstate();
        this.otherstate=true;
        this.othercity=true;
        this.indiastate=false;
        this.indiacity=false;
      }
    },
    emptyotherstate(){
      this.propertyPartnerForm.city=[];
      this.propertyPartnerForm.state=[];
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
      const content = [
        this.property_registration_columns.map((col) =>
          wrapCsvValue(col.label)
        ),
      ]
        .concat(
          this.property_registration_rows.map((row) =>
            this.property_registration_columns
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
    openRestaurantDialog() {
      this.restaurantDetails.agent_id = this.editedItem.partner_id;
      this.restaurantDetails.account_id = this.editedItem.account_id;
      this.restaurantDetails.agent_sub_id = this.editedItem.partner_sub_id;
      this.restaurantDetails.food_partner_name = this.editedItem.partner_name;
      this.restaurantDetails.food_partner_phone = this.editedItem.partner_phone;
      this.restaurantDetails.food_partner_sub_name = this.editedItem.partner_sub_name;
      this.restaurantDetails.partner_status = this.editedItem.status;
      // this.restaurantDetails.name_of_kitchen = this.editedItem.name_of_kitchen;
      // this.restaurantDetails.type_of_kitchen =this.editedItem.type_of_kitchen
      // this.restaurantDetails.restaurant_phone = this.editedItem.restaurant_phone;
      // this.restaurantDetails.Name_Of_Contact_Person = this.editedItem.Name_Of_Contact_Person;
      // this.restaurantDetails.restaurant_email = this.editedItem.restaurant_email;
      this.resetFiles();
      this.restaurantDialog = true;
    },
    showRestaurantData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.restaurantEditedItem = Object.assign({}, item);
      // this.restaurantEditedItem.agent_id = item.partner_id;
      // this.restaurantEditedItem.agent_sub_id = item.partner_sub_id;
      this.restaurantDataDialog = true;
      this.getAccFoodDetails(item);
    },
    editRestaurantData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editRestaurantDetails = Object.assign({}, item);
      this.editRestaurantDetails.agent_id = item.agent_id;
      this.editRestaurantDetails.agent_sub_id = item.agent_sub_id;
      this.editRestaurantDetails.agent_name = item.agent_name;
      this.editRestaurantDetails.agent_sub_name = item.agent_sub_name;
      this.editRestaurantDetails.restaurant_phone = item.restaurant_phone;
      this.editRestaurantDetails.Name_Of_Contact_Person = item.Name_Of_Contact_Person;
      this.editRestaurantDetails.restaurant_email = item.restaurant_email;
      this.editRestaurantDetails.restaurant_latitude = item.restaurant_latitude;
      this.editRestaurantDetails.restaurant_longitude = item.restaurant_longitude;
      this.editRestaurantDetails.restaurant_description = item.restaurant_description;
      this.editRestaurantDetails.building_no = item.building_no;
      this.editRestaurantDetails.street = item.street;
      this.editRestaurantDetails.land_mark = item.land_mark;
      this.editRestaurantDetails.state_name = item.state_name;
      this.editRestaurantDetails.city_name = item.city_name;
      this.editRestaurantDetails.pin_code = item.pin_code;
      this.editRestaurantDetails.txn_id = item.txn_id;
      this.editRestaurantDetails.opening_time = item.opening_time;
      this.editRestaurantDetails.closing_time = item.closing_time;
      this.editRestaurantDetails.date_from = item.date_from;
      this.editRestaurantDetails.date_to = item.date_to;
      this.upload_fssai_1 = {
        name: item.upload_fssai ?? "",
      };
      this.upload_Image = {
        name: item.upload_image ?? "",
      };
      this.upload_Image1 = {
        name: item.upload_image1 ?? "",
      };
      this.upload_Image2 = {
        name: item.upload_image2 ?? "",
      };
      this.restaurantEditDialog= true;
    },
  },
};
</script>
