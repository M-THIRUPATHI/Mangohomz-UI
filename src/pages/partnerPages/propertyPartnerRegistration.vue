<template>
  <div>
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md">
        <q-chip square clickable @click="getPropertyRegistrationMaster">
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
                )
          }}</q-avatar>
          All
        </q-chip>
        <q-chip
          square
          clickable
          @click="getPropertyRegistrationBasedOnStatus('approved')"
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
          @click="getPropertyRegistrationBasedOnStatus('approved')"
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
          @click="getPropertyRegistrationBasedOnStatus('rejected')"
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
          @click="getPropertyRegistrationBasedOnStatus('pending')"
        >
          <q-avatar color="orange" text-color="white">{{
            this.property_partner_registration_status_count.length == 0
              ? "0"
              : this.property_partner_registration_status_count[0].pcount
          }}</q-avatar>
          Pending
        </q-chip>
      </div>
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
      >
        <!-- <template v-slot:body-cell-actions="props">
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
        </template> -->
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

      <!-- ADD NEW DETAILS -->

      <q-dialog v-model="addDataDialog" maximized persistent>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn>
              <q-icon
                name="close"
                color="white"
                @click="closeAddPropertyDialog()"
              ></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <!-- <q-form @submit="onSubmit" ref="propertyPartnerForm"> -->
          <q-stepper
            v-model="step"
            color="primary"
            animated
            done-color="secondary"
            active-color="primary"
            inactive-color="primary"
          >
            <q-step
              :name="1"
              title="Basic Details"
              icon="settings"
              :done="step > 1"
            >
              <q-form ref="propertyPartnerFormBasic">
                <div class="q-pa-md row q-gutter-md">
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="propertyPartnerForm.name"
                    label="Property Partner Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <!-- <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="propertyPartnerForm.company_name"
                    label="Company Name "
                    hide-bottom-space
                    style="width: 300px"
                    label-color="black"

                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="propertyPartnerForm.individual_name"
                    v-if ="propertyPartnerForm.company_name != ''"
                    label="Individual Name"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"

                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" /> </template
                  ></q-input> -->

                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="propertyPartnerForm.phone"
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
                    v-model="propertyPartnerForm.fax"
                    lazy-rules
                    mask="##########"
                    label="WhatsApp No *"
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Phone no'), phone()]"
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
                    v-model="propertyPartnerForm.email_id"
                    label="Email *"
                    lazy-rules
                    class="col-3"
                    hide-bottom-space
                    style="width: 250px"
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
                    v-model="propertyPartnerForm.description"
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
                      this.$refs.propertyPartnerFormBasic
                        .validate()
                        .then((valid) => {
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
              <q-form ref="propertyPartnerFormAddress">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
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
                    dense
                    outlined
                    use-input
                    hide-selected
                    :options="countriesArr"
                    option-value="country_id"
                    option-label="country"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="propertyPartnerForm.country"
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
                    :options="stateOptions"
                    @filter="filterFnStates"
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
                    dense
                    outlined
                    use-input
                    hide-selected
                    :options="cityOptions"
                    @filter="filterFnCities"
                    option-value="city_id"
                    option-label="city"
                    fill-input
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
                    dense
                    outlined
                    lazy-rules
                    mask="######"
                    v-model="propertyPartnerForm.pin_code"
                    label="Pincode *"
                    label-color="black"
                    :rules="[required('Pincode'), pinNumber()]"
                  >
                    <template v-slot:prepend>
                      <q-circular-progress
                        v-show="showOnCheckPincode"
                        v-if="pincode_loading"
                        indeterminate
                        size="20px"
                        color="secondary"
                        class="q-ma-md"
                      />
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  @click="
                    () => {
                      this.$refs.propertyPartnerFormAddress
                        .validate()
                        .then((valid) => {
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
              <q-form ref="propertyPartnerFormStaDocs">
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
                    @filter="filterFn"
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
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.pan"
                    label="PAN No"
                    mask="AAAAA####A"
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
                  /><q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
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

                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.gstin"
                    label="GSTIN"
                    label-color="black"

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
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload GSTIN"
                    :rules="[(val) => val || 'Please select file']"
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
                    :rules="[(val) => val || 'Please select file']"
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
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    :filter="checkFileSize"
                    @rejected="onRejected"
                    hint="Upload Undertaking"
                    :rules="[(val) => val || 'Please select file']"
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
                    :rules="[(val) => val || 'Please select file']"
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
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload Declaration"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                    :rules="[(val) => val || 'Please select file']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                </div>
                <div class="bg-grey-11 col-12 row q-pa-xs">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 10MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  @click="
                    () => {
                      this.$refs.propertyPartnerFormStaDocs
                        .validate()
                        .then((valid) => {
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
              <q-form ref="propertyPartnerFormSubmit">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[required('Bank A/C no'), number()]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="propertyPartnerForm.ifsc"
                    label="IFSC Code"
                    label-color="black"
                    :rules="[required('IFSC code')]"
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
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                    :rules="[(val) => val || 'Please select file']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
                <q-card-actions align="left">
                  <q-toggle
                    v-model="propertyPartnerForm.accept"
                    label="I accept the Property Partner Registration"
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

      <!--Edit Or Update Data And Document Start -->

      <q-dialog v-model="editDataDialog" maximized persistent>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn>
              <q-icon
                name="close"
                color="white"
                @click="closeAddPropertyDialog()"
              ></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <!-- <q-form @submit="onSubmit" ref="propertyPartnerForm"> -->
          <q-stepper
            v-model="step"
            color="primary"
            animated
            done-color="secondary"
            active-color="primary"
            inactive-color="primary"
          >
            <q-step
              :name="1"
              title="Basic Details"
              icon="settings"
              :done="step > 1"
            >
              <q-form ref="editpropertyPartnerFormBasic">
                <div class="q-pa-md row q-gutter-md">
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.name"
                    label="Property Partner Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <!-- <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.company_name"
                    label="Company Name "
                    hide-bottom-space
                    style="width: 300px"
                    label-color="black"

                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.individual_name"
                    v-if ="editpropertyPartnerForm.company_name != ''"
                    label="Individual Name"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"

                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" /> </template
                  ></q-input> -->

                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.phone"
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
                    v-model="editpropertyPartnerForm.fax"
                    lazy-rules
                    mask="##########"
                    label="WhatsApp No *"
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Phone no'), phone()]"
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
                    v-model="editpropertyPartnerForm.email_id"
                    label="Email *"
                    lazy-rules
                    class="col-3"
                    hide-bottom-space
                    style="width: 250px"
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
                    v-model="editpropertyPartnerForm.description"
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
                      this.$refs.editpropertyPartnerFormBasic
                        .validate()
                        .then((valid) => {
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
              <q-form ref="propertyPartnerFormAddress">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.building_no"
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
                    v-model="editpropertyPartnerForm.street"
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
                    v-model="editpropertyPartnerForm.land_mark"
                    label="Landmark"
                    label-color="black"
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
                    :options="countriesArr"
                    option-value="country_id"
                    option-label="country"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="editpropertyPartnerForm.country"
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
                    :options="stateOptions"
                    @filter="filterFnStates"
                    option-value="state_id"
                    option-label="state_name"
                    v-model="editpropertyPartnerForm.state"
                    @input="
                      loadAllCities(editpropertyPartnerForm.state);
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
                    dense
                    outlined
                    use-input
                    hide-selected
                    :options="cityOptions"
                    @filter="filterFnCities"
                    option-value="city_id"
                    option-label="city"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="editpropertyPartnerForm.city"
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
                    v-model="editpropertyPartnerForm.pin_code"
                    label="Pincode *"
                    label-color="black"
                    :rules="[required('Pincode'), pinNumber()]"
                  >
                    <template v-slot:prepend>
                      <q-circular-progress
                        v-show="showOnCheckPincode"
                        v-if="pincode_loading"
                        indeterminate
                        size="20px"
                        color="secondary"
                        class="q-ma-md"
                      />
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  @click="
                    () => {
                      this.$refs.propertyPartnerFormAddress
                        .validate()
                        .then((valid) => {
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
              <q-form ref="propertyPartnerFormStaDocs">
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
                    @filter="filterFn"
                    v-model="editpropertyPartnerForm.propertyType"
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
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.pan"
                    label="PAN No"
                    mask="AAAAA####A"
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
                    v-model="editpropertyPartnerForm.aadhar"
                    mask="############"
                    label="AADHAAR No"
                    label-color="black"
                  /><q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
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

                  <q-input
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.gstin"
                    label="GSTIN"
                    label-color="black"

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
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload GSTIN"
                    :rules="[(val) => val || 'Please select file']"
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
                    :rules="[(val) => val || 'Please select file']"
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
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    :filter="checkFileSize"
                    @rejected="onRejected"
                    hint="Upload Undertaking"
                    :rules="[(val) => val || 'Please select file']"
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
                    :rules="[(val) => val || 'Please select file']"
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
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload Declaration"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                    :rules="[(val) => val || 'Please select file']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>
                </div>
                <div class="bg-grey-11 col-12 row q-pa-xs">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 10MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  @click="
                    () => {
                      this.$refs.propertyPartnerFormStaDocs
                        .validate()
                        .then((valid) => {
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
              <q-form ref="propertyPartnerFormSubmit">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[required('Bank A/C no'), number()]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="editpropertyPartnerForm.ifsc"
                    label="IFSC Code"
                    label-color="black"
                    :rules="[required('IFSC code')]"
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
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                    :rules="[(val) => val || 'Please select file']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
                <q-card-actions align="left">
                  <q-toggle
                    v-model="editpropertyPartnerForm.accept"
                    label="I accept the Property Partner Registration"
                  />
                </q-card-actions>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">

                <q-btn
                  color="secondary"
                  label="Update"
                  class="text-bold"
                   @click="onPropertyPartnerUpdate"

                  :disable="this.editpropertyPartnerForm.accept == false"
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

      <!--Edit Or Update Data And Document End -->


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
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="openPropertyDialog()"
              >
                Add Property
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

                    <!-- <div class="col-3"> -->
                    <!-- <tr> -->
                    <!-- <td class="text-left">Property Partner Photo</td> -->
                    <!-- <td class="text-left">
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
                      </tr> -->
                    <!-- </div> -->
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
                          color="primary"
                          @click="showPropertyData(props.row)"
                          icon="las la-eye"
                          size="sm"
                          ><q-tooltip :disable="$q.platform.is.mobile"
                            >View</q-tooltip
                          >
                        </q-btn>
                        <q-btn
                          class="q-ml-sm"
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
                              <td class="text-left" width="280px">
                                Property Image 2
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
                                Property Image 3
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
                                Cancel Cheque
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
                                      propertyEditedItem.cancelled_cheque_doc,
                                      'Cancel Cheque'
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
                                Agreement
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
                                      propertyEditedItem.mh_agreement,
                                      'Agreement'
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
                               Bank Mandate
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
                                      propertyEditedItem.mh_bankmandate,
                                      'Bank Mandate'
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
                              Declaration
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
                                      propertyEditedItem.mh_declaration,
                                      'Declaration'
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
                              GSTIN
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
                                      propertyEditedItem.mh_gstin,
                                      'Declaration'
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
                              ></q-btn
                            >
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
                        <q-input
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
                        ></q-input>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_name"
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
                        ></q-input>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.sub_property_name"
                          label="Sub Property Name *"
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
                      v-model="editedPropertyData.property_alternate_email"
                      label="Alternate Email"
                      lazy-rules
                      hide-bottom-space
                      style="width: 250px"

                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" /> </template
                    ></q-input>
                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_latitude"
                          label="Latitude *"
                          lazy-rules
                          style="width: 250px"
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
                          v-model="editedPropertyData.property_longitude"
                          label="Longitude *"
                          lazy-rules
                          style="width: 250px"
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
                          v-model="editedPropertyData.amenities"
                          :options="propertyAmenitiesArr"
                          option-label="amenity_name"
                          option-value="amenity_id"
                          multiple
                          aria-checked
                          use-input
                          label="Amenities"
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
                        <q-input
                          outlined
                          label="Check In Time *"
                          dense
                          v-model="editedPropertyData.checkIn_time"
                          :rules="[required('Check In Time')]"
                        >
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy
                                cover
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-time
                                  v-model="editedPropertyData.checkIn_time"
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
                          label="Check Out Time *"
                          dense
                          v-model="editedPropertyData.checkOut_time"
                          :rules="[required('Check Out Time')]"
                        >
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy
                                cover
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-time
                                  v-model="editedPropertyData.checkOut_time"
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
                        <!-- <q-input
                      dense
                      outlined
                      lazy-rules
                      style="width: 290px"
                      v-model="editedPropertyData.mh_service_fee"
                      label="MH Service Commission In %*"
                      label-color="black"
                      readonly
                      hide-bottom-space
                      :rules="[required('MH Service Commission In %'), number()]"
                      ><template v-slot:prepend>
                        <q-icon
                          name="mdi-currency-inr"
                          color="secondary"
                        /> </template
                    ></q-input> -->






                        <q-input
                          dense
                          outlined
                          v-model="editedPropertyData.property_description"
                          label="Description *"
                          :rules="[required('Description')]"
                          lazy-rules
                          style="width: 100%"
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
                          :options="stateOptions"
                    @filter="filterFnStates"
                          option-value="state_id"
                          option-label="state_name"
                          v-model="editedPropertyData.state_name"
                          @input="
                            loadAllCities(editedPropertyData.state_name);
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
                          :options="cityOptions"
                    @filter="filterFnCities"
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




                  <q-card flat class="q-pa-md">
                    <q-bar>
                      <div class="text-bold text-black">Bank Details</div>
                    </q-bar>
                    <q-card-actions>
                      <div class="q-pa-md row q-gutter-md items-start">


                <q-input
                  dense
                  outlined
                  v-model="editedPropertyData.bankAccountNo"
                  label="Bank A/C No"
                  label-color="black"
                  :rules="[required('Bank A/C no')]"

                />

                <q-input
                  dense
                  outlined
                  v-model="editedPropertyData.bankName"
                  label="Bank Name"
                  label-color="black"
                  :rules="[required('Bank Name')]"

                />
                <q-input
                  dense
                  outlined
                  v-model="editedPropertyData.branchName"
                  label="Branch Name"
                  label-color="black"
                  :rules="[required('Branch')]"

                />
                <q-input
                  dense
                  outlined
                  v-model="editedPropertyData.ifsc"
                  label="IFSC/SWIFT Code"
                  label-color="black"
                  :rules="[required('IFSC code')]"

                />

                <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 200px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      v-model="cancelled_cheque_doc"

                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Cancel Cheque"
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
                      v-model="mh_bankmandate"

                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Bank Mandate"
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" /> </template
                    ></q-file>
              </div>
                    </q-card-actions>
                  </q-card>




                  <q-card flat class="q-pa-md">
                    <q-bar>
                      <div class="text-bold text-black">Agreement/Declaration</div>
                    </q-bar>
                    <q-card-actions>
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

                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 200px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      v-model="mh_declaration"

                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Declaration/Indeminity Document"
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
                      v-model="gst_tin"

                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="GSTIN"
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" /> </template
                    ></q-file>
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
                      <div class="row col-12 q-ml-md">
                        Max File size is 10MB & Image format is
                        <b> .JPG, .JPEG, .PNG </b>.
                      </div>
                    </div>
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
                            Room Category
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.room_category }}
                          </div>
                          <q-separator />
                          <!-- <div class="col-5 text-left text-black">
                            From INR
                          </div>
                          <div class="col-7 text-left text-grey">
                            : ₹. {{ roomsEditedItem.from_Inr }} /-
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            To Inr
                          </div>
                          <div class="col-7 text-left text-grey">
                            : ₹. {{ roomsEditedItem.to_Inr }} /-
                          </div>
                          <q-separator /> -->
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
                            Special Offer/Day
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.property_specialOffer }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Room Facilities
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
                      <q-select
                        dense
                        options-dense
                        outlined
                        use-input
                        hide-selected
                        style="width: 200px"
                        fill-input
                        :options="room_categoryArr"
                        v-model="editedRoomsData.room_category"
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
                      </q-select>
                      <!-- <q-input
                        dense
                        outlined
                        v-model="editedRoomsData.from_Inr"
                        label="From INR"
                        lazy-rules
                        style="width: 200px"
                        label-color="black"
                        hide-bottom-space
                        :rules="[required('From INR'), number()]"
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
                        v-model="editedRoomsData.to_Inr"
                        label="To INR"
                        lazy-rules
                        style="width: 200px"
                        label-color="black"
                        hide-bottom-space
                        :rules="[required('To INR'), number()]"
                      >
                        <template v-slot:prepend>
                          <q-icon
                            name="mdi-currency-inr"
                            color="secondary"
                          /> </template
                      ></q-input> -->

                      <q-input
                        dense
                        outlined
                        v-model="editedRoomsData.no_of_avail_rooms"
                        label="No of Available Room"
                        lazy-rules
                        style="width: 190px"
                        label-color="black"
                        hide-bottom-space
                        :rules="[required('No of Available Room'), number()]"
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
                        v-model="editedRoomsData.room_no"
                        label="Room Number"
                        lazy-rules
                        style="width: 150px"
                        label-color="black"
                        hide-bottom-space
                        :rules="[required('Room Number')]"
                      >
                        <template v-slot:prepend>
                          <q-icon
                            name="mdi-door"
                            color="secondary"
                          /> </template
                      ></q-input> -->
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
                        label="Special Offer/Day *"
                        :rules="[required('Special Offer/Day')]"
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
                                minimal
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
                        input-debounce
                        style="width: 250px"
                        v-model="editedRoomsData.facilities"
                        :options="amenitiesArr"
                        option-label="amenity_name"
                        option-value="amenity_id"
                        multiple
                        use-input
                        aria-checked
                        label="Amenities"
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
                      <q-select
                        dense
                        options-dense
                        outlined
                        use-input
                        hide-selected
                        style="width: 150px"
                        fill-input
                        :options="unitsArr"
                        @filter="filterFn"
                        v-model="editedRoomsData.units"
                        label="Units *"
                        label-color="black"
                        use-checkbox
                        :rules="[required('Units')]"
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
                      </q-select>
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
                    <div class="row col-12 q-ml-md">
                      Max File size is 10MB & Image format is
                      <b> .JPG, .JPEG, .PNG </b>.
                    </div>
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
              <!-- <q-chip
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="editOpenAddDialog()"
              >
                Add MHAP
              </q-chip> -->
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
                    <q-input
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
                    ></q-input>
                    <q-input
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
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="propertyDetails.sub_property_name"
                      label="Sub Property Name *"
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
                      v-model="propertyDetails.property_phone"
                      label="Phone *"
                      lazy-rules
                      mask="##########"
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Phone no'), phone()]"
                      readonly
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" /> </template
                    ></q-input>
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
                      readonly
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" /> </template
                    ></q-input>
                    <q-input
                      dense
                      outlined
                      v-model="propertyDetails.property_latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 250px"
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
                      v-model="propertyDetails.property_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 250px"
                      :rules="[required('Email'), number()]"
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
                      label="Amenities"
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
                    <!-- <q-input
                      dense
                      outlined
                      v-model="propertyDetails.property_price_startsFrom"
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
                    <q-input
                      outlined
                      label="Check In Time *"
                      dense
                      v-model="propertyDetails.checkIn_time"
                      :rules="[required('Check In Time')]"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="propertyDetails.checkIn_time"
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
                      label="Check Out Time *"
                      dense
                      v-model="propertyDetails.checkOut_time"
                      :rules="[required('Check Out Time')]"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="propertyDetails.checkOut_time"
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
                      dense
                      outlined
                      v-model="propertyDetails.property_description"
                      lazy-rules
                      style="width: 100%"
                      label-color="black"
                      type="textarea"
                      :rules="[required('Description')]"
                      autogrow
                      hide-bottom-space
                      placeholder="Description *"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      fill-input
                      :options="stateOptions"
                    @filter="filterFnStates"
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
                      :options="cityOptions"
                    @filter="filterFnCities"
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
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 10MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="room_categoryArr"
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
                    </q-select>
                    <!-- <q-input
                      dense
                      outlined
                      v-model="roomDetails.from_Inr"
                      label="From INR"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('From INR'), number()]"
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
                      v-model="roomDetails.to_Inr"
                      label="To INR"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('To INR'), number()]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-currency-inr"
                          color="secondary"
                        /> </template
                    ></q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="roomDetails.room_no"
                      label="Room Number"
                      lazy-rules
                      style="width: 150px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Room Number')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-door" color="secondary" /> </template
                    ></q-input>
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      :options="roomTypeArr"
                      @filter="filterFn"
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
                      v-model="roomDetails.property_specialOffer"
                      label="Special Offer/Day *"
                      :rules="[required('Special Offer/Day')]"
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
                              :options="optionsFn"
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
                              :options="optionsFn2"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      fill-input
                      input-debounce
                      style="width: 250px"
                      v-model="roomDetails.facilities"
                      :options="amenitiesArr"
                      option-label="amenity_name"
                      option-value="amenity_id"
                      multiple
                      aria-checked
                      use-input
                      label="Amenities"
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
                    <q-input
                      dense
                      outlined
                      v-model="roomDetails.price"
                      label="Price"
                      lazy-rules
                      style="width: 150px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Price')]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-currency-inr"
                          color="secondary"
                        /> </template
                    ></q-input>
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 150px"
                      fill-input
                      :options="unitsArr"
                      @filter="filterFn"
                      v-model="roomDetails.units"
                      label="Units *"
                      label-color="black"
                      :rules="[required('Units')]"
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
                    </q-select>
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
                  <div class="row col-12 q-ml-md">
                    Max File size is 10MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn color="secondary" label="Submit" @click="onRoomsSubmit">
                </q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>
        <b style="margin-right:15px"> User Name: {{ userDetails.user_name }}</b>
        <!-- <q-chip
          clickable
          color="secondary"
          text-color="white"
          icon="add"
          class="text-weight-bold"
          @click="OpenAddDialog()"
        >
          Add MHAP
        </q-chip> -->
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
import { date } from "quasar";

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
    // partner_pic: [],
    mb_certificate: [],
    property_tax: [],
    fire_safety: [],
    cancelled_cheque: [],
    amenitiesArr: [],
    partner_id: "",
    propertyAmenitiesArr: [],
    amenities: "",
  };
};
export default {
  data() {
    return {
      ...validations,
      dialogTitle: "",
      label2: "",
      selected: [],
      data: [],
      url: "",
      details: false,
      subPropertyView: false,
      propertyDialog: false,
      roomsDialog: false,
      visible: false,
      showPanDoc: false,
      small: false,
      propertyDataDialog: false,
      propertyEditDialog: false,
      roomsDataDialog: false,
      roomsEditDialog: false,
      showOnCheckPincode: false,
      pincode_loading: false,
      editedIndex: -1,
      editedItem: {
        partner_id: "",
        partner_sub_id: "",
        partner_name: "",
        partner_phone: "",
        partner_sub_name: "",
        property_type: "",
        account_id: "",
        phone: "",
        email_id: "",
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
      title: "MH Accommodation Partner  (MHAP)",
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
      countriesArr: ["India"],
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
        account_id: "",
        amenities: null,
        checkIn_time: "",
        checkOut_time: "",
      },
      uploadImage3: [],
      uploadImage4: [],
      uploadImage5: [],
      cancelled_cheque_doc: [],
      mh_declaration: [],
      mh_bankmandate: [],

      editedPropertyData: {
        uploadImage_update: "",
        uploadImage_update1: "",
        uploadImage_update2: "",
        uploadImage_update3: "",
        uploadImage_update4: "",
        cancelled_cheque_doc: "",
        mh_agreement: "",
        mh_declaration: "",
        mh_bankmandate: "",
        txn_id: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
        partner_sub_name: "",
        property_name: "",
        sub_property_name: "",
        property_phone: "",
        property_email: "",
        property_alternate_email: "",
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
        bankAccountNo:"",
        bankName: "",
        branchName: "",
        ifsc: "",
        mh_service_fee: "",
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
        room_no: "",
        room_type: "",
        facilities: null,
        price: "",
        units: "",
        property_txn_id: "",
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
        room_no: "",
        room_type: "",
        date_from: "",
        date_to: "",
        date_from_up: "",
        date_to_up: "",
        facilities: [],
        icon_image: [],
        price: "",
        units: "",
        uploadImage: "",
        uploadImage1: "",
        uploadImage2: "",
      },
      onclickValue: "",
      roomTypeArr: ["Single Share", "Double Share", "Triple Share"],
      room_categoryArr: ["Basic", "Standard", "Supreme"],
      unitsArr: ["Per Day"],

      propertyPartnerForm: {
        name: "",
        agent_name: "",
        agent_sub_name: "",
        partner_sub_id: "",
        account_id: "",
        company_name: "",
        individual_name: "",
        phone: "",
        fax: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
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
        accept: false,
        propertyType: "",
        partner_id: "",
        partner_name: "",
        state_id: "",
        city_id: "",
        pan_card_upt: "",
        addhaar_no_upt: "",
        mh_agreement_upt: "",
        mb_certificate_upt: "",
        gst_tin_upt: "",
        property_tax_upt: "",
        fire_safety_upt: "",
        cancelled_cheque_upt: "",
        countriesArr: ["India"],
        status: "",
      },
      editpropertyPartnerForm: {
        name: "",
        agent_name: "",
        agent_sub_name: "",
        partner_sub_id: "",
        account_id: "",
        company_name: "",
        individual_name: "",
        phone: "",
        fax: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        country: "",
        gstin: "",
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
        propertyType: "",
        partner_id: "",
        partner_name: "",
        state_id: "",
        city_id: "",
        pan_card_upt: "",
        addhaar_no_upt: "",
        mh_agreement_upt: "",
        mb_certificate_upt: "",
        gst_tin_upt: "",
        property_tax_upt: "",
        fire_safety_upt: "",
        cancelled_cheque_upt: "",
        countriesArr: ["India"],
        status: "",
        amenities:"",
      },
      columns: "",
      pagination: {
        rowsPerPage: 500,
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      editDataDialog: false,
      statesList: [],

      // propertyTypes: [],
      // propertyOptions: [],
      stateOption: [],
      cityOptions: [],
      stateOptions:[],
      recordsStatus: [],
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
    };
  },

  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      optionsFn2(d) {
        // console.log("KKK", this.roomDetails.date_from);
        let fromDate = date.formatDate(
          this.roomDetails.date_from.split("/").reverse().join("-"),
          "YYYY/MM/DD"
        );
        // console.log("LLL", fromDate);
        return (d) => d >= fromDate;
      },
      property: (state) => state.dashboard.property_arr,
      property_partner_registration_columns: (state) =>
        state.dashboard.property_partner_registration_columns,
      property_data_columns: (state) => state.dashboard.property_data_columns,
      rooms_data_columns: (state) => state.dashboard.rooms_data_columns,
      property_partner_registration_status_count: (state) =>
        state.dashboard.property_partner_registration_status_count,
      property_registration_rows: (state) =>
        state.dashboard.property_registration_rows,
      property_registration_columns: (state) =>
        state.dashboard.property_registration_columns,
      propertyOptions: (state) => state.master.properties_arr,
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
      amenitiesArr: (state) => state.dropdown.amenities_arr,
      propertyAmenitiesArr: (state) => state.dropdown.property_amenities_arr,
    }),
    ...mapGetters("dashboard", ["property_partner_registration_status_count"]),
    ...mapGetters("dashboard", ["property_partner_registration_rows"]),
    ...mapGetters("dashboard", ["property_data_rows"]),
    ...mapGetters("dashboard", ["rooms_data_rows"]),
  },
  mounted() {
    this.$store.dispatch("dashboard/getPropertyRegistrationMaster");
    this.$store.dispatch("dashboard/getPropertyRegistrationStatusCount");
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("master/loadPropertiesDropdown");
    this.$store.dispatch("dropdown/loadAllFacilities");
    this.$store.dispatch("dropdown/loadPropertyFacilities");
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
    ...mapActions("dashboard", ["propertyRegistrationMasterAdd"]),
    ...mapActions("dashboard", ["propertyRegistrationMasterExistingUser"]),
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("dashboard", ["getPropertyRegistrationBasedOnStatus"]),
    ...mapActions("dashboard", ["getPropertyRegistrationMaster"]),
    ...mapActions("dashboard", ["propertyDetailsSaving"]),
    ...mapActions("dashboard", ["getPropertyDetails"]),
    ...mapActions("dashboard", ["roomDetailsSaving"]),
    ...mapActions("dashboard", ["getRoomsDetails"]),
    ...mapActions("dashboard", ["updatePropertyPartnerDetails"]),
    ...mapActions("dashboard", ["updatePropertyPartnerForm"]),
    ...mapActions("dashboard", ["updatePropertyDetails"]),
    ...mapActions("dashboard", ["updateRoomsDetails"]),

    onSubmit(val) {
      if (val == "submit") {
        this.$refs.propertyPartnerFormSubmit.validate().then((success) => {
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
                  this.$refs.propertyPartnerFormSubmit.resetValidation();
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
            }
          }
        });
      } else if (val == "update") {
        this.$refs.propertyPartnerFormSubmit.validate().then((success) => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.propertyPartnerForm.account_id =
                  this.userDetails.account_id;


                  // formData.append("pancard", this.pan_card_file);
                  // formData.append("addhaar", this.addhaar_no);
                  // formData.append("gst_tin", this.gst_tin);
                  // formData.append("mh_agreement", this.mh_agreement);
                  // // formData.append("partner_pic", this.partner_pic);
                  // formData.append("mb_certificate", this.mb_certificate);
                  // formData.append("property_tax", this.property_tax);
                  // formData.append("fire_safety", this.fire_safety);
                  // formData.append("cancelled_cheque", this.cancelled_cheque);

                this.updatePropertyPartnerDetails(this.propertyPartnerForm);
               // console.log("sss",this.propertyPartnerForm);
                this.propertyPartnerForm = propertyRegistrationMaster();
                this.$refs.propertyPartnerFormSubmit.resetValidation();
                this.addDataDialog = false;
                this.step = 1;
                this.subPropertyView = false;
                this.getPropertyRegistrationMaster();
                this.getPropertyRegistrationBasedOnStatus();
              });
          }
        });
      }
    },
    checkFileSize(files) {
      return files.filter((file) => file.size < 10048576);
    },
    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 10 MB`,
      });
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
                this.propertyDetails.account_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("upload_image1", this.uploadImage);
                formData.append("upload_image2", this.uploadImage1);
                formData.append("upload_image3", this.uploadImage2);
                formData.append(
                  "property_details",
                  JSON.stringify(this.propertyDetails)
                );
                this.propertyDetailsSaving(formData);
                // console.log("FormDAta--", formData);
                this.resetFiles();

                this.propertyPartnerForm = propertyRegistrationMaster();
                this.$refs.propertyFormBasic.resetValidation();
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

       onPropertyPartnerUpdate() {
      this.$refs.propertyPartnerFormSubmit.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {

             // this.editpropertyPartnerForm.account_id = this.userDetails.account_id;
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
                    "updateProperty",
                    JSON.stringify(this.editpropertyPartnerForm)
                  );
                 // console.log("11update", formData);

              this.updatePropertyPartnerForm( formData);
              this.editpropertyPartnerForm = propertyRegistrationMaster();

              this.$refs.propertyPartnerFormSubmit.resetValidation();
              this.editDataDialog = false;
              this.step = 1;
                this.subPropertyView = false;
                this.getPropertyRegistrationMaster();
                this.getPropertyRegistrationBasedOnStatus();
            })
            .onCancel(() => {
              this.resetFiles();
              this.editDataDialog = true;
            });
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
              this.editedPropertyData.txn_id =  this.editedPropertyData.txn_id;
             // console.log("this.editedPropertyData.txn_id",this.editedPropertyData.txn_id)
              const formData = new FormData();
                formData.append("upload_image1", this.uploadImage);
                formData.append("upload_image2", this.uploadImage1);
                formData.append("upload_image3", this.uploadImage2);
                formData.append("upload_image4", this.uploadImage3);
                formData.append("upload_image5", this.uploadImage4);




                formData.append("property_cancelcheque", this.cancelled_cheque_doc);
                formData.append("propety_agreement", this.mh_agreement);
                formData.append("property_declaration", this.mh_declaration);
                formData.append("property_bankmandate", this.mh_bankmandate);
                formData.append("property_gst_tin", this.gst_tin);





                formData.append(
                  "updateproperty_details",
                  JSON.stringify(this.editedPropertyData)
                );
          //    console.log("11update",formData);

              this.updatePropertyDetails(formData);
              this.getPropertyDetails(this.editedItem);
              this.details = false;
              this.$refs.editPropertyForm.resetValidation();
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
                formData.append(
                  "room_details",
                  JSON.stringify(this.roomDetails)
                );
                this.roomDetailsSaving(formData);
                // console.log("FormDAta--", formData);
                this.resetFiles();

                // this.roomDetails = propertyRegistrationMaster();
                this.$refs.roomsFormBasic.resetValidation();
                this.roomsDialog = false;
                this.step = 1;
                this.roomDetails = {};
                this.propertyDataDialog = false;
                this.details = false;
              })
              .onCancel(() => {
                this.resetFiles();

                this.addDataDialog = true;
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
                .split("/")
                .reverse()
                .join("-");
              this.editedRoomsData.date_to = this.editedRoomsData.date_to
                .split("/")
                .reverse()
                .join("-");

                const formData = new FormData();
                formData.append("upload_room_image1", this.uploadRoomImage1);
                formData.append("upload_room_image2", this.uploadRoomImage2);
                formData.append("upload_room_image3", this.uploadRoomImage3);
                formData.append("upload_room_image4", this.uploadRoomImage4);
                formData.append("upload_room_image5", this.uploadRoomImage5);
                formData.append(
                  "room_updatedetails",
                  JSON.stringify(this.editedRoomsData)
                );
               console.log("update", this.editedRoomsData);
              this.updateRoomsDetails(formData);
              //  this.$refs.editRoomsForm.resetValidation();
              this.roomsEditDialog = false;
              // this.step = 1;
              // this.roomDetails = {};
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
    // checkPincode() {
    //   this.showOnCheckPincode = true;
    //   this.pincode_loading = true;
    //   api
    //     .get(`/staffAccPartnersData/checkPincode/${this.propertyPartnerForm.pin_code}`)
    //     .then(response => {
    //       console.log("In APi")
    //       console.log(response.data)
    //     })
    // },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.partner_id = item.partner_id;
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
      this.details = true;
      this.getPropertyDetails(this.editedItem);
    },
    editPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editDataDialog = true;
      // this.onclickValue = "edit";
      this.step = 1;
      this.editpropertyPartnerForm.partner_id = item.partner_id;
      this.editpropertyPartnerForm.partner_sub_id = item.partner_sub_id;
      this.editpropertyPartnerForm.name = item.agent_sub_name;
      this.editpropertyPartnerForm.agent_name = item.agent_name;
      this.editpropertyPartnerForm.agent_sub_name = item.agent_sub_name;
      this.editpropertyPartnerForm.company_name = item.company_name;
      this.editpropertyPartnerForm.individual_name = item.individual_name;
      this.editpropertyPartnerForm.phone = item.phone;
      this.editpropertyPartnerForm.fax = item.fax;
      this.editpropertyPartnerForm.email_id = item.email_id;
      this.editpropertyPartnerForm.description = item.description;
      this.editpropertyPartnerForm.building_no = item.building_no;
      this.editpropertyPartnerForm.street = item.street;
      this.editpropertyPartnerForm.land_mark = item.land_mark;
      this.editpropertyPartnerForm.country = item.country;
      this.editpropertyPartnerForm.state = item.state;
      this.editpropertyPartnerForm.city = item.city;
      this.editpropertyPartnerForm.state_id = item.state_id;
      this.editpropertyPartnerForm.city_id = item.city_id;
      this.editpropertyPartnerForm.pin_code = item.pin_code;
      this.editpropertyPartnerForm.propertyType = item.property_type;
      this.editpropertyPartnerForm.pan = item.pan;
      this.editpropertyPartnerForm.pan_card_upt = item.pan_loc;
      this.editpropertyPartnerForm.addhaar_no_upt = item.addhaar_loc;
      this.editpropertyPartnerForm.mh_agreement_upt = item.mh_agreement_loc;
      this.editpropertyPartnerForm.mb_certificate_upt = item.mb_certificate_loc;
      this.editpropertyPartnerForm.gst_tin_upt = item.gst_tin_loc;
      this.editpropertyPartnerForm.property_tax_upt = item.property_tax_loc;
      this.editpropertyPartnerForm.fire_safety_upt = item.fire_safety_loc;
      this.editpropertyPartnerForm.cancelled_cheque_upt = item.cancelled_cheque_doc;
      this.editpropertyPartnerForm.status = item.status;
      this.pan_card_file = {
        name: item.pan_loc ?? "",
      };
      this.editpropertyPartnerForm.aadhar = item.aadhar;
      this.addhaar_no = {
        name: item.addhaar_loc ?? "",
      };
      this.editpropertyPartnerForm.gstin = item.gstin;
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
      this.editpropertyPartnerForm.bankAccountNo = item.bankAccountNo;
      this.editpropertyPartnerForm.bankName = item.bankName;
      this.editpropertyPartnerForm.branchName = item.branchName;
      this.editpropertyPartnerForm.ifsc = item.ifsc;
      this.cancelled_cheque = {
        name: item.cancelled_cheque_doc ?? "",
      };
      this.mh_agreement = {
        name: item.mh_agreement ?? "",
      };
      this.mh_declaration = {
        name: item.mh_declaration ?? "",
      };
      this.mh_bankmandate = {
        name: item.mh_bankmandate ?? "",
      };
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
      console.log("sswwww",item);
      this.editedPropertyData.partner_id = item.partner_id;
      this.editedPropertyData.partner_sub_id = item.partner_sub_id;
      this.editedPropertyData.partner_name = item.partner_name;
      this.editedPropertyData.partner_sub_name = item.sub_partner_name;
      this.editedPropertyData.property_name = item.property_name;
      this.editedPropertyData.sub_property_name = item.sub_property_name;
      this.editedPropertyData.property_phone = item.property_phone;
      this.editedPropertyData.property_email = item.property_email;
      this.editedPropertyData.property_alternate_email = item.property_alternate_email;

      this.editedPropertyData.property_latitude = item.property_latitude;
      this.editedPropertyData.property_longitude = item.property_longitude;
      this.editedPropertyData.property_description = item.property_description;
      // this.editedPropertyData.property_price_startsFrom =
      //   item.price_starts_from;
      this.editedPropertyData.building_no = item.building_no;
      this.editedPropertyData.street = item.street;
      this.editedPropertyData.land_mark = item.land_mark;
      this.editedPropertyData.country = item.country;
      this.editedPropertyData.state_name = item.state_name;
      this.editedPropertyData.city_name = item.city_name;
      this.editedPropertyData.pin_code = item.pin_code;



      this.editedPropertyData.bankAccountNo = item.bankAccountNo;
      this.editedPropertyData.bankName = item.bankName;
      this.editedPropertyData.branchName = item.branchName;
      this.editedPropertyData.ifsc = item.ifsc;
      this.editedPropertyData.cancelled_cheque_doc = item.cancelled_cheque_doc;
      this.editedPropertyData.mh_agreement = item.mh_agreement;
      this.editedPropertyData.mh_declaration = item.mh_declaration;
      this.editedPropertyData.mh_agreement = item.mh_agreement;
      const amenities = [
        {
          amenity_name: item.amenity_name.split(","),
          icon_image: item.amenity_icon.split(","),
        },
      ];

      this.editedPropertyData.amenities = amenities;
      this.editedPropertyData.checkIn_time = item.checkIn_time;
      this.editedPropertyData.checkOut_time = item.checkOut_time;
      this.editedPropertyData.txn_id = item.txn_id;
      this.editedPropertyData.uploadImage_update = item.upload_image;
      this.editedPropertyData.uploadImage_update1 = item.upload_image1;
      this.editedPropertyData.uploadImage_update2 = item.upload_image2;
      this.editedPropertyData.uploadImage_update3 = item.upload_image3;
      this.editedPropertyData.uploadImage_update4 = item.upload_image4;

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
      this.cancelled_cheque_doc = {
        name: item.cancelled_cheque_doc ?? "",
      };
      this.mh_agreement = {
        name: item.mh_agreement ?? "",
      };
      this.mh_declaration = {
        name: item.mh_declaration ?? "",
      };
      this.mh_bankmandate = {
        name: item.mh_bankmandate ?? "",
      };
      this.gst_tin = {
        name: item.mh_gstin ?? "",
      };
      // this.uploadImage = item.upload_image;
      // this.uploadImage1 = item.upload_image1;
      // this.uploadImage2 = item.upload_image2);
      this.propertyEditDialog = true;
    },
    editRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedRoomsData = Object.assign({}, item);
      this.roomsEditDialog = true;
     // console.log("item", item);
      const amenity = [
        {
          amenity_name: item.facilities.split(","),
          icon_image: item.icon_image.split(","),
        },
      ];
     // console.log("dfdd",amenity)

      //console.log("item",item)
      this.editedRoomsData.txn_id = item.txn_id;
      this.editedRoomsData.partner_id = item.partner_id;
      // this.editedRoomsData.property_txn_id = item.property_txn_id;
      this.editedRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedRoomsData.sub_property_name = item.sub_property_name;
      this.editedRoomsData.property_name = item.property_name;
      this.editedRoomsData.room_category = item.room_category;
      this.editedRoomsData.no_of_avail_rooms = item.no_of_avail_rooms;
      this.editedRoomsData.room_no = item.room_no;
      this.editedRoomsData.room_type = item.room_type;
      this.editedRoomsData.property_specialOffer = item.property_specialOffer;
      this.editedRoomsData.date_from = item.date_from;
      this.editedRoomsData.date_to = item.date_to;
      this.editedRoomsData.date_from_up = item.date_from;
      this.editedRoomsData.date_to_up = item.date_to;
      this.editedRoomsData.facilities = amenity;
     // console.log("ssaasd", this.editedRoomsData.facilities)
;
      // this.editedRoomsData.icon_image = item.icon_image.split(",");
      this.editedRoomsData.price = item.price;
      this.editedRoomsData.units = item.units;
      this.editedRoomsData.uploadImage = item.room_image_1;
      this.editedRoomsData.uploadImage1 = item.room_image_2;
      this.editedRoomsData.uploadImage2 = item.room_image_3;
     // console.log("iiiitem",item)
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
      // this.roomsEditedItem.partner_sub_id = item.partner_sub_id;
      // console.log(this.roomsEditedItem);
      this.roomsDataDialog = true;
      this.propertyDataDialog = true;
      // this.getRoomsDetails(this.roomsEditedItem);
    },
    editOpenAddDialog() {
      // this.propertyPartnerForm.country = "India";
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      this.propertyPartnerForm = propertyRegistrationMaster();
      this.addDataDialog = true;
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.partner_id = "");
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      this.propertyPartnerForm = propertyRegistrationMaster();
      this.addDataDialog = true;
      this.details = false;
    },
    onReset() {
      this.propertyPartnerForm = propertyRegistrationMaster();
      // this.$refs.propertyPartnerFormSubmit.resetValidation();
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
      // console.log(this.roomDetails);
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxy1.hide();
    },
    closeRoomDialog() {
      this.roomsDialog = false;
    },
    openPropertyDialog() {
      this.propertyDetails.partner_id = this.editedItem.partner_id;
      this.propertyDetails.partner_sub_id = this.editedItem.partner_sub_id;
      this.propertyDetails.partner_name = this.editedItem.partner_name;
      this.propertyDetails.property_phone = this.editedItem.phone;
      this.propertyDetails.property_email_id = this.editedItem.email_id;
      this.propertyDetails.partner_phone = this.editedItem.partner_phone;
      this.propertyDetails.partner_sub_name = this.editedItem.partner_sub_name;
      this.propertyDetails.property_name = this.editedItem.property_type;
      this.propertyDialog = true;
      this.resetFiles();
    },

    closePropertyDialog() {
      this.propertyDialog = false;
    },
    closeAddPropertyDialog() {
      this.addDataDialog = false;
      this.editDataDialog =false;
      this.propertyPartnerForm = propertyRegistrationMaster();
      this.resetFiles();
      this.$refs.propertyPartnerFormSubmit.resetValidation();
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
      // this.partner_pic = [];
      this.cancelled_cheque = [];
      this.cancelled_cheque_doc = [];
      this.mh_agreement = [];
      this.mh_declaration = [];
      this.mh_bankmandate = [];
      this.gst_tin = [];


      this.mb_certificate = [];
      this.property_tax = [];
      this.uploadImage = [];
      this.uploadImage1 = [];
      this.uploadImage2 = [];
      this.uploadImage3 = [];
      this.uploadImage4 = [];
      // this.uploadImage5 = [];
      this.uploadRoomImage1 = [];
      this.uploadRoomImage2 = [];
      this.uploadRoomImage3 = [];
      this.uploadRoomImage4 = [];
      this.uploadRoomImage5 = [];
    },
    emptyCities() {
      this.propertyDetails.city = "";
    },
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.propertyOptions = this.propertyTypes;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.propertyOptions = this.propertyTypes.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    // filterFnStates(val, update) {
    //   if (val === "") {
    //     update(() => {
    //       this.stateOptions = this.states;
    //     });
    //     return;
    //   }

    //   update(() => {
    //     const needle = val.toLowerCase();
    //     this.stateOptions = this.states.filter(
    //       (v) => v.toLowerCase().indexOf(needle) > -1
    //     );
    //   });
    // },
    // filterFnCities(val, update) {
    //   if (val === "") {
    //     update(() => {
    //       this.cityOptions = this.cities;
    //     });
    //     return;
    //   }

    //   update(() => {
    //     const needle = val.toLowerCase();
    //     this.cityOptions = this.cities.filter(
    //       (v) => v.toLowerCase().indexOf(needle) > -1
    //     );
    //   });
    // },


    filterFnCountry(val,update) {
        if (val === "") {
        update(() => {
          this.countryOptions = this.countriescheck;
        });
        return this.countryOptions;
      }
      update(() => {
        const needle = this.countriescheck.filter((items)=> {return Object.values(items).some((item)=> item.toLowerCase().includes(val.toLowerCase()))} )
         this.countryOptions=needle
        return this.countryOptions;
      });
    },
    // filterFnStates(val, update) {
    //   if (val === "") {
    //     update(() => {
    //       this.stateOptions = this.states;
    //     });
    //     return;
    //   }

    //   update(() => {
    //     const needle = val.toLowerCase();
    //     this.stateOptions = this.states.filter(
    //       (v) => v.toLowerCase().indexOf(needle) > -1
    //     );
    //   });
    // },

    filterFnStates(val,update) {
        if (val === "") {
        update(() => {
          this.stateOptions = this.states;
        });
        return this.stateOptions;
      }
      update(() => {
        const needle = this.states.filter((items)=> {return Object.values(items).some((item)=> item.toLowerCase().includes(val.toLowerCase()))} )
         this.stateOptions=needle
        return this.stateOptions;
      });
    },

    filterFnCities(val,update) {
        if (val === "") {
        update(() => {
          this.cityOptions = this.cities;
        });
        return this.cityOptions;
      }
      update(() => {
        const needle = this.cities.filter((items)=> {return Object.values(items).some((item)=> item.toLowerCase().includes(val.toLowerCase()))} )
         this.cityOptions=needle
        return this.cityOptions;
      });
    },
    exportTable() {
      // naive encoding to csv format
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
  },
};
</script>
