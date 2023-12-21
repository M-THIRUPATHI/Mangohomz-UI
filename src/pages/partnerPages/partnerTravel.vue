<template>
  <div>
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
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
          hide-pagination
        >
          <!-- <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn color="primary" @click="editItem(props.row)" icon="las la-eye" size="sm">
                <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
              </q-btn>
            </q-td>
          </template> -->
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
            <q-btn
              dark
              flat
              icon="close"
              color="white"
              @click="closeAddTravelDialog"
            >
              <q-tooltip class="bg-white text-primary">close</q-tooltip>
            </q-btn>
          </q-bar>
          <!-- <q-form @submit="onSubmit" ref="transpoterPartnerForm"> -->
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
              <q-form ref="agentFormBasic">
                <div class="q-pa-md row q-gutter-md justify-center">
                  <div class="row col-12 justify-center">
                    <div class="row col-3 q-mt-sm">
                      <span name="food" class="text-bold"
                        >1. Travel Partner Name *
                      </span>
                      <q-input
                        class="col-3 q-mt-sm"
                        dense
                        outlined
                        v-model="transportPartnerForm.name"
                        label="Transport Partner Name *"
                        hide-bottom-space
                        style="width: 250px"
                        label-color="black"
                        :rules="[required('Name')]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-account" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                    <div class="row col-6 justify-center">
                      <q-checkbox
                        left-label
                        color="secondary"
                        class="text-bold"
                        v-bind:disable="this.onclickValue == 'edit'"
                        v-model="yes"
                        label="2. Is The Business Entity Name is same as Travel partner name?"
                      />
                      <div class="row col-6 q-ml-sm">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="this.transportPartnerForm.name"
                          label="Business Entity Name"
                          hide-bottom-space
                          style="width: 250px"
                          label-color="black"
                          v-if="yes == true"
                        >
                          <template v-slot:prepend>
                            <q-icon name="mdi-account" color="secondary" />
                          </template>
                        </q-input>
                        <q-input
                          dense
                          outlined
                          v-model="transportPartnerForm.partner_sub_name"
                          label="Business Entity Name"
                          hide-bottom-space
                          style="width: 250px"
                          label-color="black"
                          v-if="yes == false"
                        >
                          <template v-slot:prepend>
                            <q-icon name="mdi-account" color="secondary" />
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </div>
                  <!-- <q-input class="col-3" dense outlined v-model="transportPartnerForm.company_name"
                    label="Company Name " hide-bottom-space style="width: 300px" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" />
                    </template>
                  </q-input>
                  <q-input class="col-3" dense outlined v-model="transportPartnerForm.individual_name"
                    label="Individual Name *" v-if="transportPartnerForm.company_name != ''" hide-bottom-space
                    style="width: 300px" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" />
                    </template>
                  </q-input> -->
                  <div class="row col-12 q-mt-lg justify-center">
                    <div class="row col-3 q-mt-sm">
                      <span name="food" class="text-bold"
                        >3. Enter Phone Number *
                      </span>
                      <q-input
                        class="col-3 q-mt-sm"
                        dense
                        outlined
                        v-model="transportPartnerForm.phone"
                        label="Phone"
                        hide-bottom-space
                        lazy-rules
                        mask="##########"
                        style="width: 250px"
                        label-color="black"
                        :rules="[required('Phone no'), phone()]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-phone" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                    <div class="row col-6 justify-center">
                      <q-checkbox
                        left-label
                        color="secondary"
                        class="text-bold"
                        v-bind:disable="this.onclickValue == 'edit'"
                        v-model="no"
                        label="4. Is Whatsapp Number is same as Phone Number ?"
                      />
                      <div class="row col-6 q-ml-sm">
                        <q-input
                          dense
                          outlined
                          v-model="this.transportPartnerForm.phone"
                          readonly
                          label="WhatsApp No "
                          style="width: 250px"
                          label-color="black"
                          v-if="no == true"
                        >
                          <template v-slot:prepend>
                            <q-icon name="mdi-whatsapp" color="secondary" />
                          </template>
                        </q-input>
                        <q-input
                          dense
                          outlined
                          v-model="transportPartnerForm.fax"
                          lazy-rules
                          mask="##########"
                          hide-bottom-space
                          label="Whatsapp *"
                          style="width: 250px"
                          label-color="black"
                          :rules="[required('Phone no'), phone()]"
                          v-if="no == false"
                        >
                          <template v-slot:prepend>
                            <q-icon name="mdi-whatsapp" color="secondary" />
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </div>
                  <div class="row col-12 q-mt-lg justify-center">
                    <div class="row col-3 q-mt-sm">
                      <q-input
                        dense
                        outlined
                        v-model="transportPartnerForm.alternate_no"
                        lazy-rules
                        mask="##########"
                        label="Alternate no"
                        style="width: 250px"
                        label-color="black"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-whatsapp" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                    <div class="row col-6 q-mt-sm justify-center">
                      <q-input
                        dense
                        outlined
                        v-model="transportPartnerForm.email_id"
                        label="Email"
                        lazy-rules
                        class="col-3"
                        hide-bottom-space
                        style="width: 250px"
                        :rules="[required('Email'), email()]"
                        label-color="black"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-email" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div class="row col-12 q-mt-lg justify-center">
                    <div class="row col-3 q-mt-sm">
                      <q-input
                        class="col-2"
                        dense
                        outlined
                        v-model="transportPartnerForm.description"
                        label="Remarks"
                        lazy-rules
                        style="width: 250px"
                        label-color="black"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-comment" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                    <div class="row col-6 q-mt-sm justify-center"></div>
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
                    dense
                    outlined
                    class="row col-3"
                    v-model="transportPartnerForm.building_no"
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
                    class="row col-3"
                    v-model="transportPartnerForm.street"
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
                    class="row col-3"
                    v-model="transportPartnerForm.land_mark"
                    label="Landmark"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" />
                    </template>
                  </q-input>
                  <q-select
                    dense
                    options-dense
                    outlined
                    class="row col-3"
                    use-input
                    hide-selected
                    fill-input
                    @filter="filterFnCountry"
                    :options="countryOptions"
                    @input="checkstate()"
                    option-value="name"
                    option-label="name"
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
                    ref="indiastate"
                    class="row col-3"
                    v-if="indiastate == true"
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
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-select>
                  <q-select
                    ref="indiacity"
                    class="row col-3"
                    v-if="indiacity == true"
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
                    v-model="transportPartnerForm.city"
                    label="City"
                    label-color="black"
                    :rules="[required('City')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-select>
                  <q-input
                    ref="otherstate"
                    class="row col-3"
                    v-if="otherstate == true"
                    dense
                    outlined
                    v-model="transportPartnerForm.state1"
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
                    class="row col-3"
                    v-if="othercity == true"
                    dense
                    outlined
                    v-model="transportPartnerForm.city1"
                    label="City *"
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
                    class="row col-3"
                    mask="######"
                    v-model="transportPartnerForm.pin_code"
                    label="Pincode/Zipcode *"
                    label-color="black"
                    :rules="[required('Pincode'), pinNumber()]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-input>
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
                    text-h6 text-weight-bold
                  "
                >
                  Proof of Identity and Proof of Address:
                </div>
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.pan"
                    mask="AAAAA####A"
                    label="PAN No"
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
                    v-bind:readonly="this.onclickValue == 'edit'"
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
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
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
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
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
                    style="width: 200px"
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
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
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
                    v-bind:readonly="this.onclickValue == 'edit'"
                    dense
                    filled
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
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>

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
                    :filter="checkFileSize"
                    @rejected="onRejected"
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
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
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
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
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
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
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
                <div class="bg-grey-11 col-12 row q-pa-xs">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
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
                    label="IFSC/SWIFT Code"
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
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                    :rules="[(val) => val || 'Please select file']"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
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
                  <q-item
                    clickable
                    dense
                    v-close-popup
                    @click="opentransportDialog()"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Transport Details</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    dense
                    v-close-popup
                    @click="otherAccomadationForm()"
                    v-if="userDetails.accstatus == 'Approved'"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Property</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    dense
                    v-close-popup
                    @click="openTravelRestaurantDialog()"
                    v-if="userDetails.foodstatus == 'Approved'"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Restaurant</q-item-label>
                    </q-item-section>
                  </q-item>

                  <!-- <q-item
                    clickable
                    dense
                    v-close-popup
                    v-on:click="otherMedicalForm()"
                    :disable="this.editedItem.status != 'approved'"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Medical Store</q-item-label>
                    </q-item-section>
                  </q-item> -->
                  <q-item
                    clickable
                    dense
                    v-close-popup
                    @click="travelMedicalstoreDetailsForm()"
                    v-if="userDetails.medicalstatus == 'Approved'"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Medical Store</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn
                dark
                flat
                icon="close"
                color="white"
                @click="closeAddTravelDialog"
              >
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
                      <div class="col-4 text-left text-black">Sub Name</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.transport_sub_name }}
                      </div>
                      <div class="col-4 text-left text-black">Lead Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_id }}
                      </div>
                      <div class="col-4 text-left text-black">Sub Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.transport_sub_id }}
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
                      <!-- <div class="col-3 text-left text-black ">Aaadhaar</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.aadhar }}
                      </div>
                      <div class="col-3 text-left text-black ">Pan Card</div>
                      <div class="col-9 text-left text-grey">
                        : {{ editedItem.pan }}
                      </div> -->

                      <div class="col-4 text-left text-black">Description</div>
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
                    </div>-->
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
          <!-- <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Travel Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="travel_item_rows" :columns="travel_item_columns" :pagination.sync="pagination" dense
                    row-key="sno" :filter="filter" :selected.sync="selected" separator="cell"
                    :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-action="props">
                      <q-td :props="props">
                        <q-btn color="green" @click="editTravel(props.row)" label="Edit" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                          showDocument(
                            props.row.vehicle_image,
                            'Vehicle Image'
                          )
                        " />
                      </q-td>
                    </template>
                  </q-table>
                </div>

                <template v-slot:top-right="props">
                  <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width: 400px">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>

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
          </div> -->
          <!-- Transport Details Table Start -->
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
          >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Transport Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="transport_item_rows"
                    :columns="transport_item_columns"
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
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
            style="padding-top: 0px"
            v-if="userDetails.accstatus == 'Approved'"
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
                    :data="travelproperty_data_rows"
                    :columns="travelproperty_data_columns"
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
                          @click="showTravelPropertyData(props.row)"
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
                          @click="editTravelPropertyData(props.row)"
                          icon="mdi-pencil"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
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
            <!-- Sachin Medical Store Details Table Start -->
            <div
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              v-if="userDetails.medicalstatus == 'Approved'"
            >
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Medical Store Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="travelmedicalstore_item_rows"
                    :columns="travelmedicalstore_item_columns"
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
                          @click="showTravelMedicalDetails(props.row)"
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
                          @click="editTravelMedicalStoreDetails(props.row)"
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
              </q-markup-table>
            </div>

            <!-- Sachin Medical Store Details Table End -->
            <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Equipment Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="travelequipment_item_rows" :columns="travelequipment_item_columns"
                    :pagination.sync="pagination" dense row-key="sno" :filter="filter" :selected.sync="selected"
                    separator="cell" :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                          showDocumentmedical(
                            props.row.equipment_image,
                            'Equipment Image'
                          )
                        " />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="green" icon="mdi-pencil" size="sm" @click="editTravelEquipmentForm(props.row)">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                </div>
              </q-card>
            </div>-->
            <div
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              v-if="userDetails.foodstatus == 'Approved'"
            >
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
                    :data="travel_restaurant_data_rows"
                    :columns="travel_restaurant_data_columns"
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
                          @click="showTravelRestaurantData(props.row)"
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
                          @click="editTravelRestaurantData(props.row)"
                          icon="mdi-pencil"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
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
                Add Partner Profile
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
                <!-- <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="editedItem.city"
                  readonly
                  label="Vehicle City *"
                  hide-bottom-space
                  style="width:250px"
                  label-color="black"
                  :rules="[required('city')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-city" color="secondary" />
                  </template>
                </q-input> -->
                <!-- <q-select
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="AllCities"
                  fill-input
                  options-dense
                  input-debounce="0"
                  return-object
                  v-model="editedItem.vehicle_city"
                  label="Vehicle City *"
                  label-color="black"
                  :rules="[required('Vehicle city')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-city" color="secondary" />
                  </template>
                </q-select> -->
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
                  v-model="travelLocation.vehicle_name"
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
                  v-model="travelLocation.day_price"
                  label="Day Price *"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('Price'), number()]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  dense
                  outlined
                  v-model="travelLocation.vehicle_type"
                  label="Vehicle Type *"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('Vehicle Type')]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-input>
                <q-select
                  class="row col-3 q-mt-sm q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  style="width: 250px; margin-top: 15px"
                  fill-input
                  label="Per Trip*"
                  label-color="black"
                  option-value="units"
                  option-label="units"
                  v-model="travelLocation.vehicle_per_trip"
                  :options="vehicle_perTripArr"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
                <q-select
                  class="row col-3 q-mt-sm q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  style="width: 250px; margin-top: 15px"
                  fill-input
                  label="Vehicle From "
                  label-color="black"
                  option-value="point_type"
                  option-label="point_type"
                  v-model="travelLocation.vehicle_from"
                  :options="vehicle_fromArr"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
                <q-select
                  class="row col-3 q-mt-sm q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  style="width: 250px; margin-top: 15px"
                  fill-input
                  label="Vehicle To "
                  label-color="black"
                  option-value="near_hospital_name"
                  option-label="near_hospital_name"
                  v-model="travelLocation.vehicle_to"
                  :options="vehicle_toArr"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
                <q-input
                  dense
                  outlined
                  v-model="travelLocation.night_price"
                  label="Night Price *"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('Price'), number()]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-select
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="vehiclePrice"
                  fill-input
                  options-dense
                  input-debounce="0"
                  v-model="travelLocation.units"
                  label="Units *"
                  label-color="black"
                  :rules="[required('Units')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select> -->

                <q-input
                  class="col-2"
                  dense
                  outlined
                  v-model="travelLocation.description"
                  label="Description"
                  lazy-rules
                  style="width: 450px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-comment" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-input
                  dense
                  outlined
                  v-model="travelLocation.special_offer"
                  label="Special Offer *"
                  :rules="[number(), specialMOfferValue('Special Offer', 100)]"
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
                ></q-input> -->
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
                    (val) => {
                      files = val;
                    }
                  "
                  hint="Upload vehicle Image"
                  :rules="[(val) => val || 'Please select file']"
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
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="indigo"
                  label="ADD"
                  @click="addTravelItems"
                ></q-btn>
              </div>
              <q-table
                style="font-family: verdana"
                dense
                separator="cell"
                wrap-cells
                v-if="showTable"
                :data="TravelItemsArrayData"
                :columns="TravelItemscolumn"
                :rows-per-page-options="[]"
                row-key="sno"
                no-data-label="No test names added"
              >
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn
                      @click="deleteRow(props.row.sno)"
                      color="negative"
                      dense
                      flat
                      round
                      icon="delete"
                      class="q-ml-xs"
                    />
                  </q-td>
                </template>
                <!-- <template v-slot:bottom-row>
          <q-td colspan="3" style="text-align: right; font-weight: bold">
            Total
          </q-td>
          <q-td colspan="1" style="text-align: center">
            {{ rate }}
          </q-td>
        </template> -->
              </q-table>
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
            <!-- <q-spacer /> -->
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"
                v-if="this.onclickValue != 'edit'"
                @click="submitTravelLocData('submit')"
                :disable="this.travelLocation.accept == false"
              />
              <!-- <q-btn
                color="secondary"
                label="Update"
                class="text-bold"
                @click="submitTravelLocData('update')"
                v-if="this.onclickValue == 'edit'"
                :disable="this.travelLocation.accept == false"
              /> -->
            </div>
          </q-form>
        </q-card>
      </q-dialog>
         <!-- edit travel details -->
      <q-dialog
        v-model="editTravelForm"
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
          <q-form ref="editTravelForm1">
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

                <q-input
                  dense
                  outlined
                  v-model="edittravelLocation.vehicle_name"
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
                  v-model="edittravelLocation.no_of_seaters"
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
                  v-model="edittravelLocation.day_price"
                  label="Day Price *"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
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
                  :options="vehicle_typeArr"
                  fill-input
                  options-dense
                  input-debounce="0"
                  v-model="edittravelLocation.vehicle_type"
                  label="Vehicle Type *"
                  label-color="black"
                  option-value="vehicle_name"
                  option-label="vehicle_name"
                  :rules="[required('vehicle type')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select>
                <q-select
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="vehiclePrice"
                  fill-input
                  options-dense
                  input-debounce="0"
                  v-model="edittravelLocation.vehicle_per_trip"
                  label="Per Trip *"
                  label-color="black"
                  :rules="[required('Units')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select>

                <q-select
                  class="row col-3 q-mt-sm q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  style="width: 250px; margin-top: 15px"
                  fill-input
                  label="Vehicle From "
                  label-color="black"
                  option-value="point_type"
                  option-label="point_type"
                  v-model="edittravelLocation.vehicle_from"
                  :options="vehicle_fromArr"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
                <q-select
                  class="row col-3 q-mt-sm q-mr-sm"
                  dense
                  options-dense
                  outlined
                  use-input
                  hide-selected
                  style="width: 250px; margin-top: 15px"
                  fill-input
                  label="Vehicle To "
                  label-color="black"
                  option-value="near_hospital_name"
                  option-label="near_hospital_name"
                  v-model="edittravelLocation.vehicle_to"
                  :options="vehicle_toArr"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>

                <q-input
                  dense
                  outlined
                  v-model="edittravelLocation.night_price"
                  label="Night Price *"
                  lazy-rules
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('Price'), number()]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-select
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="vehiclePrice"
                  fill-input
                  options-dense
                  input-debounce="0"
                  v-model="edittravelLocation.units"
                  label="Units *"
                  label-color="black"
                  :rules="[required('Units')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select> -->

                <q-input
                  class="col-2"
                  dense
                  outlined
                  v-model="edittravelLocation.description"
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
                    (val) => {
                      files = val;
                    }
                  "
                  hint="Upload vehicle Image"
                  :rules="[(val) => val || 'Please select file']"
                  :filter="checkFileSize"
                  @rejected="onRejected"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <q-btn
                          color="teal"
                          size="sm"
                          icon="mdi-eye"
                          @click="
                            showDocument(
                              vehicle_image,
                              'vehicle_image'
                            )
                          "
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >Vehicle  Image </q-tooltip
                          >
                        </q-btn>
                <!-- <q-btn push clickable color="green" icon="add" /> -->
              </div>
              <div class="bg-grey-11 col-12 row q-pa-xs">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div>
            </q-card>

            <q-separator />
            <!-- <q-spacer /> -->

            <div class="row col-12 q-ml-md">
              <q-btn
                  color="secondary"
                  label="Update"



                  @click="onTravelUpdatingDetail"
                ></q-btn>
              </div>
          </q-form>
        </q-card>
      </q-dialog>
      <!-- Travel view start -->
      <q-dialog
            v-model="travelviewdialog"
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
                    View of Travel Details:
                    {{ editedItem.agent_name }}
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
                            Transport Company Name
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_company_name  }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Name Of Contact Person
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{  editedItem.Name_Of_Contact_Person }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Phone Number</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_phone }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Email Id</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItem.transport_email_id }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Special Offer
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{editedItem.special_offer}}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Description
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{editedItem.transport_description }}
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
                      Travel Details
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
                            Vehicle Name
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{  edittravelLocation.vehicle_name}}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Day Price
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{edittravelLocation.day_price}}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Night Price</div>
                          <div class="col-7 text-left text-grey">
                            : {{edittravelLocation.night_price}}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">No of seats</div>
                          <div class="col-7 text-left text-grey">
                            : {{edittravelLocation.no_of_seaters}}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Units</div>
                          <div class="col-7 text-left text-grey">
                            : {{ edittravelLocation.units }}
                          </div>
                          <q-separator />

                          <q-separator />
                          <div class="col-5 text-left text-black">Description</div>
                          <div class="col-7 text-left text-grey">
                            : {{ edittravelLocation.description}}
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



                            <div
                              class="row q-col-gutter-sm q-py-sm q-pa-md"
                              style="padding-top: 0px"
                            />
                            <tr>
                              <td class="text-left" width="280px">
                                Vehicle image
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
                                      edittravelLocation.vehicle_image,
                                      'Vehicle Image'
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
      <!-- travel view  end -->
      <!-- Other Accommodation Partner Dialog -->
      <q-dialog
        v-model="addOtherAccoPartner"
        maximized
        persistant
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">
              MH Accommodation Property Details
            </div>
            <q-space />
            <q-btn v-close-popup flat>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-form ref="addOtherAccoPartner">
            <q-bar>
              <div class="text-bold text-black">Basic Details</div>
            </q-bar>
            <div class="text-overline1 q-gutter-xs" />
            <div class="text-overline1 q-gutter-xs" />
            <q-card class="q-pa-md">
              <div class="q-pa-md row q-gutter-md">
                <!-- <q-input class="col-3" dense outlined v-model="editedItem.agent_name" readonly label="Lead Partner*"
                  hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-input class="col-3" dense outlined v-model="editedItem.transport_sub_name" readonly
                  label="Sub Partner *" hide-bottom-space style="width: 250px" label-color="black"
                  :rules="[required('Travel Sub Name')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input> -->
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
                  v-model="otherAccomadationPartner.property_name"
                  label="Type Of Property *"
                  label-color="black"
                  :rules="[required('Property Type')]"
                  ><template v-slot:prepend>
                    <q-icon name="mdi-home-city" color="secondary" /> </template
                ></q-select>
                <!-- <q-input dense outlined v-model="otherAccomadationPartner.property_name" label="Property Type *"
                  class="col-3" hide-bottom-space style="width: 250px" :rules="[required('Property type')]"
                  label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-input> -->
                <q-input
                  dense
                  outlined
                  v-model="otherAccomadationPartner.sub_property_name"
                  label="Property Name *"
                  hide-bottom-space
                  style="width: 250px"
                  label-color="black"
                  :rules="[required('Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-home-city" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  dense
                  outlined
                  v-model="otherAccomadationPartner.property_description"
                  lazy-rules
                  style="width: 100%"
                  label-color="black"
                  type="textarea"
                  :rules="[required('Description')]"
                  autogrow
                  hide-bottom-space
                  placeholder="Description *"
                >
                </q-input>
              </div>
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
                    v-model="otherAccomadationPartner.building_no"
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
                    v-model="otherAccomadationPartner.street"
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
                    v-model="otherAccomadationPartner.land_mark"
                    label="Landmark "
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
                    v-model="otherAccomadationPartner.country"
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
                    v-model="otherAccomadationPartner.state"
                    @input="
                      loadAllCities(otherAccomadationPartner.state);
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
                    v-model="otherAccomadationPartner.city"
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
                    v-model="otherAccomadationPartner.pin_code"
                    label="Pincode *"
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('Pincode'), pinNumber()]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-input>
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    fill-input
                    :options="countriesArr"
                    v-model="otherAccomadationPartner.country"
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
                    v-model="otherAccomadationPartner.property_email_id"
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
                    v-model="otherAccomadationPartner.property_phone"
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
                    v-model="otherAccomadationPartner.Name_Of_Contact_Person"
                    label="Name of Contact Person *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Name')]"
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
                    v-model="otherAccomadationPartner.property_latitude"
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
                    v-model="otherAccomadationPartner.property_longitude"
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
                  <q-select
                    dense
                    options-dense
                    outlined
                    style="width: 250px"
                    v-model="otherAccomadationPartner.amenities"
                    :options="otherpropertyAmenitiesArr"
                    option-label="amenity_name"
                    option-value="amenity_id"
                    multiple
                    aria-checked
                    use-input
                    label="Property Amenities"
                    label-color="black"
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
                  <q-input
                    outlined
                    label="Check In Time *"
                    dense
                    v-model="otherAccomadationPartner.checkIn_time"
                    :rules="[required('Check In Time')]"
                    @click="$refs.qOpeningTime.show()"
                  >
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qOpeningTime"
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-time
                            v-model="otherAccomadationPartner.checkIn_time"
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
                    v-model="otherAccomadationPartner.checkOut_time"
                    :rules="[required('Check Out Time')]"
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
                          <q-time
                            v-model="otherAccomadationPartner.checkOut_time"
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
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div>
            </q-card>
            <q-separator />
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"
                @click="otheronPropertySubmit"
              ></q-btn>
            </div>
          </q-form>
        </q-card>
      </q-dialog>
      <!--Other Accommodation Partner End -->

      <!-- Other Property Data Show And Add Other Room Data Start -->
      <q-dialog
        v-model="travelpropertyDataDialog"
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
                {{ travelPropertyEditedItem.sub_property_name }}
              </div>
              <q-space />
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="openTravelRoomsDialog()"
              >
                Add Rooms
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-5 text-left text-black">Lead Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.sub_partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Lead Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.partner_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.partner_sub_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Property Type
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.property_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Sub Property Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.sub_property_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.property_phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.property_email }}
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
                        : {{ travelPropertyEditedItem.building_no }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Street</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.street }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Landmark</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.land_mark }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Country</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.country }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">State</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.state_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">City</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.city_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Pincode</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.pin_code }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Latitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.property_latitude }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Longitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelPropertyEditedItem.property_longitude }}
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                                showDocumentacc(
                                  travelPropertyEditedItem.upload_image,
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
                                showDocumentacc(
                                  travelPropertyEditedItem.upload_image1,
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
                                showDocumentacc(
                                  travelPropertyEditedItem.upload_image2,
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
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home" color="black" size="1.5em" />
                  Property Description
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 150px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-12 text-justify text-grey">
                        {{ travelPropertyEditedItem.property_description }}
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
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home" color="black" size="1.5em" /> Room
                  Details
                </q-bar>
                <div
                  class="row q-col-gutter-sm q-py-sm q-pa-md"
                  style="padding-top: 10px"
                />
                <div style="width: 95%; margin: auto">
                  <q-table
                    :data="travelrooms_data_rows"
                    :columns="travelrooms_data_columns"
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
                          v-close-popup
                          color="primary"
                          @click="showTravelRoomsData(props.row)"
                          icon="las la-eye"
                          size="sm"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >View</q-tooltip
                          >
                        </q-btn>
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn
                          color="green"
                          v-close-popup
                          icon="mdi-pencil"
                          size="sm"
                          @click="editOtherRoomsData(props.row)"
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
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

      <!-- Other Property Data Show And Add Other Room Data End -->

      <!-- Other Room View Dialog Start -->

      <q-dialog
        v-model="travelroomsDataDialog"
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
                {{ travelroomEditedItem.sub_property_name }}
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
                      <div class="col-5 text-left text-black">Lead Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.sub_partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Lead Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.partner_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.partner_sub_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Property Type
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.property_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Sub Property Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.sub_property_name }}
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
                  Room Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 300px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-5 text-left text-black">
                        No.of Available Rooms
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.no_of_avail_rooms }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Room Type</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.room_type }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Facilities</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.facilities }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Price</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.price }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Units</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelroomEditedItem.units }}
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <tbody>
                        <tr>
                          <td class="text-left" width="280px">Room Image 1</td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocumentacc(
                                  travelroomEditedItem.room_image_1,
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
                          <td class="text-left" width="280px">Room Image 2</td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocumentacc(
                                  travelroomEditedItem.room_image_2,
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
                          <td class="text-left" width="280px">Room Image 3</td>
                          <td>
                            <q-btn
                              class="text-bold"
                              label="view"
                              color="secondary"
                              size="sm"
                              icon-right="mdi-eye"
                              @click="
                                showDocumentacc(
                                  travelroomEditedItem.room_image_3,
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
      <!-- Other Room View Dialog End -->

      <!-- Other Property Edit Dialog  Start-->
      <q-dialog
        v-model="travelpropertyEditDialog"
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
                  @click="travelpropertyEditDialog = false"
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
                    <!-- <q-input dense outlined v-model="travelEditedPropertyData.partner_name" label="Lead Partner *"
                      hide-bottom-space style="width: 250px" label-color="black" readonly>
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelEditedPropertyData.partner_sub_name" label="Sub Partner *"
                      hide-bottom-space style="width: 250px" label-color="black" readonly :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account-multiple-outline" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="travelEditedPropertyData.property_name"
                      label="Property Type *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      readonly
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelEditedPropertyData.sub_property_name"
                      label="Sub Property Name *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelEditedPropertyData.property_description"
                      label="Description *"
                      :rules="[required('Description')]"
                      lazy-rules
                      style="width: 100%"
                      autogrow
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-comment" color="secondary" />
                      </template>
                    </q-input>
                    <!-- <q-input dense outlined v-model="travelEditedPropertyData.property_phone" label="Phone *" lazy-rules
                      mask="##########" readonly style="width: 250px" label-color="black" hide-bottom-space
                      :rules="[required('Phone no'), phone()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelEditedPropertyData.property_email" label="Email *" lazy-rules
                      readonly hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]"
                      label-color="black">
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelEditedPropertyData.property_latitude" label="Latitude *"
                      lazy-rules style="width: 200px" label-color="black" hide-bottom-space
                      :rules="[required('Latitude')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelEditedPropertyData.property_longitude" label="Longitude *"
                      lazy-rules style="width: 200px" :rules="[required('Longitude')]" label-color="black"
                      hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-longitude" color="secondary" />
                      </template>
                    </q-input>

                    <q-input outlined label="Check In Time *" dense v-model="travelEditedPropertyData.checkIn_time"
                      :rules="[required('Check In Time')]">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="travelEditedPropertyData.checkIn_time">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Check Out Time *" dense v-model="travelEditedPropertyData.checkOut_time"
                      :rules="[required('Check Out Time')]">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="travelEditedPropertyData.checkOut_time">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input> -->
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
                      v-model="travelEditedPropertyData.building_no"
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
                      v-model="travelEditedPropertyData.street"
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
                      v-model="travelEditedPropertyData.land_mark"
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
                      :options="stateOptions"
                      @filter="filterFnStates"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="travelEditedPropertyData.state_name"
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
                      v-model="travelEditedPropertyData.city_name"
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
                      v-model="travelEditedPropertyData.pin_code"
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
                      v-model="travelEditedPropertyData.country"
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
                      v-model="travelEditedPropertyData.property_email"
                      label="Email *"
                      lazy-rules
                      readonly
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
                      v-model="travelEditedPropertyData.property_phone"
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
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelEditedPropertyData.Name_Of_Contact_Person"
                      label="Name of Contact Person*"
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Name')]"
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
                      v-model="travelEditedPropertyData.property_latitude"
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
                      v-model="travelEditedPropertyData.property_longitude"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      style="width: 250px"
                      v-model="travelEditedPropertyData.amenities"
                      :options="otherpropertyAmenitiesArr"
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
                    <q-input
                      outlined
                      label="Check In Time *"
                      dense
                      v-model="travelEditedPropertyData.checkIn_time"
                      :rules="[required('Check In Time')]"
                      @click="$refs.qOpeningTime.show()"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qOpeningTime"
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="travelEditedPropertyData.checkIn_time"
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
                      v-model="travelEditedPropertyData.checkOut_time"
                      :rules="[required('Check Out Time')]"
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
                            <q-time
                              v-model="travelEditedPropertyData.checkOut_time"
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
                  <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                    <div class="text-bold row q-ml-md">Note:</div>
                    <div class="row col-12 q-ml-md">
                      Max File size is 2MB & Image format is
                      <b> .JPG, .JPEG, .PNG </b>.
                    </div>
                  </div>
                </q-card-actions>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Update"
                  @click="onTravelPropertyUpdate"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- Other Proper Edit Dialog  End -->
      <!-- Other Room Dialog Start -->
      <q-dialog v-model="travelroomsDialog" maximized persistent>
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
                      v-model="travelRoomDetails.partner_name"
                      label="Lead Partner Name"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      readonly
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelRoomDetails.sub_partner_name"
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
                        />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelRoomDetails.property_name"
                      label="Property Type"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      readonly
                      hide-bottom-space
                      :rules="[required('Property Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelRoomDetails.sub_property_name"
                      label="Sub Property Name"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      readonly
                      hide-bottom-space
                      :rules="[required('Sub Property Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="room_categoryArr"
                      v-model="travelRoomDetails.room_category"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 240px"
                      fill-input
                      :options="roomTypeArr"
                      v-model="travelRoomDetails.room_type"
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
                      v-model="travelRoomDetails.no_of_avail_rooms"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('No.of Available Rooms')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-door" color="secondary" />
                      </template>
                    </q-input>
                    <q-select
                      ref="myChipInput"
                      v-model="travelRoomDetails.room_numbers"
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
                        <q-icon name="mdi-door" color="secondary" />
                      </template>
                      <!-- <template v-if="showOk" v-slot:append>
              <q-icon

                color="secondary"
                name="check_circle_outline"
                class="cursor-pointer"
                @click="doOtherStuff"
             ></q-icon>

            </template> -->
                    </q-select>

                    <q-select
                      dense
                      options-dense
                      outlined
                      style="width: 250px"
                      v-model="travelRoomDetails.facilities"
                      :options="amenitiesArr"
                      option-label="amenity_name"
                      option-value="amenity_id"
                      multiple
                      aria-checked
                      use-input
                      fill-input
                      @input="getOtherAmenities(travelRoomDetails.facilities)"
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
                    <q-input
                      v-if="otheramenitiesinput == true"
                      dense
                      outlined
                      v-model="travelRoomDetails.other_amenities"
                      label="Other Room Amenities"
                      lazy-rules
                      style="width: 190px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Room Amenities')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelRoomDetails.price"
                      label="Price"
                      lazy-rules
                      style="width: 190px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Price')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="unitsArr"
                      v-model="travelRoomDetails.units"
                      label="Rate *"
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
                  <div class="text-bold text-black">Special Offers</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="offerOptions"
                      v-model="travelRoomDetails.select_offer"
                      label="Select Offer*"
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
                        <q-icon name="mdi-sale" color="secondary" /> </template
                    ></q-select>
                    <q-input
                      dense
                      outlined
                      v-model="travelRoomDetails.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.travelRoomDetails.select_offer == 'Amount'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelRoomDetails.property_specialOffer"
                      label="Special Offer(%) *"
                      :rules="[required('Special Offer')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.travelRoomDetails.select_offer == 'Percentage'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>

                    <q-input
                      dense
                      outlined
                      v-model="travelRoomDetails.date_from"
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
                              v-model="travelRoomDetails.date_from"
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
                      v-model="travelRoomDetails.date_to"
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
                              v-model="travelRoomDetails.date_to"
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
                  <div class="row col-12 q-ml-md">
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onTravelRoomsSubmit"
                >
                </q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Other Room Dialog End -->

      <!-- Other Room Edit Dialog Start -->

      <q-dialog
        v-model="travelroomsEditDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="travelroomsEditDialog" class="q-gutter-xs">
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
                  @click="travelroomsEditDialog = false"
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
                    v-model="editedTravelRoomsData.sub_property_name"
                    label="Sub Property Name"
                    readonly
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Sub Property Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                  <q-input
                    dense
                    outlined
                    v-model="editedTravelRoomsData.property_name"
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
                      />
                    </template>
                  </q-input>
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 200px"
                    fill-input
                    :options="room_categoryArr"
                    v-model="editedTravelRoomsData.room_category"
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
                  <q-input
                    dense
                    outlined
                    v-model="editedTravelRoomsData.no_of_avail_rooms"
                    label="No.of Available Rooms"
                    lazy-rules
                    style="width: 200px"
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('No.of Available Rooms')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-door" color="secondary" />
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
                    v-model="editedTravelRoomsData.room_type"
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
                  <q-select
                    ref="myChipInput"
                    v-model="editedTravelRoomsData.room_numbers"
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
                      <q-icon name="mdi-door" color="secondary" />
                    </template>
                    <!-- <template v-if="showOk" v-slot:append>
              <q-icon

                color="secondary"
                name="check_circle_outline"
                class="cursor-pointer"
                @click="doOtherStuff"
             ></q-icon>

            </template> -->
                  </q-select>

                  <q-select
                    dense
                    options-dense
                    outlined
                    style="width: 300px"
                    v-model="editedTravelRoomsData.facilities"
                    :options="amenitiesArr"
                    option-label="amenity_name"
                    option-value="amenity_id"
                    multiple
                    aria-checked
                    use-input
                    fill-input
                    @input="getOtherAmenities(editedTravelRoomsData.facilities)"
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
                  <q-input
                    v-if="otheramenitiesinput == true"
                    dense
                    outlined
                    v-model="editedTravelRoomsData.other_amenities"
                    label="Other Room Amenities"
                    lazy-rules
                    style="width: 190px"
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('Room Amenities')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>
                  <q-input
                    dense
                    outlined
                    v-model="editedTravelRoomsData.price"
                    label="Price"
                    lazy-rules
                    style="width: 190px"
                    label-color="black"
                    hide-bottom-space
                    :rules="[required('Price')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 200px"
                    fill-input
                    :options="unitsArr"
                    v-model="editedTravelRoomsData.units"
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
                <div class="text-bold text-black">Special Offers</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 200px"
                    fill-input
                    :options="offerOptions"
                    v-model="editedTravelRoomsData.select_offer"
                    label="Select Offer*"
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
                      <q-icon name="mdi-sale" color="secondary" /> </template
                  ></q-select>
                  <q-input
                    dense
                    outlined
                    v-model="editedTravelRoomsData.enter_amount"
                    label="Enter Amount *"
                    :rules="[required('Enter Amount')]"
                    lazy-rules
                    style="width: 180px"
                    label-color="black"
                    hide-bottom-space
                    v-if="this.editedTravelRoomsData.select_offer == 'Amount'"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>
                  <q-input
                    dense
                    outlined
                    v-model="editedTravelRoomsData.property_specialOffer"
                    label="Special Offer(%) *"
                    :rules="[required('Special Offer')]"
                    lazy-rules
                    style="width: 180px"
                    label-color="black"
                    hide-bottom-space
                    v-if="
                      this.editedTravelRoomsData.select_offer == 'Percentage'
                    "
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>
                  <q-input
                    dense
                    outlined
                    v-model="editedTravelRoomsData.date_from"
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
                            v-model="editedTravelRoomsData.date_from"
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
                    v-model="editedTravelRoomsData.date_to"
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
                            v-model="editedTravelRoomsData.date_to"
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
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Update"
                  @click="onTravelRoomsUpdate"
                >
                </q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Other Room Edit Dialog End -->

      <!-- Other Equipment Details Start -->
      <q-dialog
        v-model="addOtherMedicalPartner"
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
            ref="addOtherMedicalPartner"
            class="q-gutter-xs"
            lazy-rules
            hide-bottom-space
            :rules="[(val) => (val && val.length > 0) || 'Please enter Values']"
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
                    <!-- <q-input dense outlined v-model="editedItem.agent_name" readonly label="Equipment Name *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editedItem.transport_sub_name" readonly
                      label="Equipment Sub Name *" hide-bottom-space style="width: 250px" label-color="black"
                      :rules="[required('Sub Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      options-dense
                      outlined
                      v-model="otherMedicalPartner.medical_store"
                      label="Medical Store *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      readonly
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>

                    <q-select
                      dense
                      options-dense
                      outlined
                      v-model="otherMedicalPartner.item_name"
                      label="Equipment Item Name *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="othermedicalItemName"
                      option-label="item_name"
                      option-value="item_id"
                      :rules="[required('Equipment Item Name')]"
                      label-color="black"
                      @input="
                        loadAllMedicalUnits(otherMedicalPartner.item_name),
                          emptyMedicalItems()
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <q-select
                      v-model="otherMedicalPartner.units"
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="othermedicalUnitsName"
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
                      v-model="otherMedicalPartner.purchased_type"
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
                      v-model="otherMedicalPartner.price"
                      label="Price *"
                      lazy-rules
                      hide-bottom-space
                      style="width: 250px"
                      :rules="[required('Price'), number()]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
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
                        (val) => {
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
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"
                @click="onOtherMedicalForm"
                :disable="this.addOtherMedicalPartner.accept == false"
              ></q-btn>
            </div>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Other Equipment Details End -->

      <!-- Other Equipment Edit Details Start -->
      <q-dialog
        v-model="travelequipmentUpdatingDetails"
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
            ref="editOtherEquipmentDetails"
            class="q-gutter-xs"
            lazy-rules
            hide-bottom-space
            :rules="[(val) => (val && val.length > 0) || 'Please enter Values']"
          >
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">{{ title }}</div>
                <q-space />
                <q-btn dark flat icon="close" color="white" v-close-popup>
                  <q-tooltip class="bg-white text-primary">close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Edit Equipment Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <!-- <q-input dense outlined v-model="editedItem.agent_name" readonly label="Equipment Name *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editedItem.transport_sub_name" readonly
                      label="Equipment Sub Name *" hide-bottom-space style="width: 250px" label-color="black"
                      :rules="[required('Sub Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      options-dense
                      outlined
                      v-model="editedTravelMedicalDetails.medical_store"
                      label="Medical Store *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      readonly
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>

                    <q-select
                      dense
                      options-dense
                      outlined
                      v-model="editedTravelMedicalDetails.item_name"
                      label="Equipment Item Name *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="othermedicalItemName"
                      option-label="item_name"
                      option-value="item_id"
                      :rules="[required('Equipment Item Name')]"
                      label-color="black"
                      @input="
                        loadAllMedicalUnits(
                          editedTravelMedicalDetails.item_name
                        ),
                          emptyMedicalItems()
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <q-select
                      v-model="editedTravelMedicalDetails.units"
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="othermedicalUnitsName"
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
                      v-model="editedTravelMedicalDetails.purchased_type"
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
                      v-model="editedTravelMedicalDetails.price"
                      label="Price *"
                      lazy-rules
                      hide-bottom-space
                      style="width: 250px"
                      :rules="[required('Price')]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <!-- <q-input
                  dense
                  outlined
                  v-model="editMedicalDetails.special_offer"
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
                      style="width: 250px"
                      class="hint-bold"
                      dense
                      readonly
                      filled
                      clearable
                      v-model="equipment_image"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
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
              </q-card>
              <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Update"
                @click="onTravelUpdatingEquipmentDetailForm()"
              ></q-btn>
            </div>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- Other Equipment Edit Detail End -->

      <!-- Other Food Edit Details Start -->
      <q-dialog v-model="travelfoodDetailsAddForm" maximized persistent>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-separator />
          <q-form ref="travelfoodDetailsAddForm">
            <q-card class="q-pa-md">
              <div class="text-overline1 q-gutter-xs" />
              <div class="text-overline1 q-gutter-xs" />

              <q-bar class="bg-grey">
                <div class="text-h6 text-Black text-bold">Food Details</div>
              </q-bar>

              <div class="q-pa-md row q-gutter-md">
                <div class="q-pa-md row q-gutter-md">
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="travelfoodDetails.kitchen_name"
                    label="Kitchen Name "
                    readonly
                    hide-bottom-space
                    style="width: 200px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="travelfoodDetails.kitchen_type"
                    label="Kitchen Type"
                    readonly
                    hide-bottom-space
                    style="width: 180px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>

                  <q-select
                    class="col-3"
                    dense
                    outlined
                    v-model="travelfoodDetails.item_name"
                    label="Food Item Type *"
                    hide-bottom-space
                    style="width: 200px"
                    label-color="black"
                    :options="otherfoodtype"
                    :rules="[required('Food Item Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-food" color="secondary" />
                    </template>
                  </q-select>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="travelfoodDetails.food_items_name"
                    label="Food Item Name *"
                    hide-bottom-space
                    style="width: 200px"
                    label-color="black"
                    :rules="[required('Food Item Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-food" color="secondary" />
                    </template>
                  </q-input>
                  <q-input
                    outlined
                    label="items Available from *"
                    dense
                    v-model="travelfoodDetails.items_available_from"
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
                            v-model="travelfoodDetails.items_available_from"
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
                    v-model="travelfoodDetails.items_available_to"
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
                            v-model="travelfoodDetails.items_available_to"
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
                    v-model="travelfoodDetails.units"
                    label="Units *"
                    hide-bottom-space
                    style="width: 200px"
                    label-color="black"
                    :options="['1 Plate']"
                    :rules="[required('Units')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-unity" color="secondary" />
                    </template>
                  </q-select>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="travelfoodDetails.price"
                    label="Price*"
                    hide-bottom-space
                    style="width: 200px"
                    label-color="black"
                    :rules="[
                      required('Price'),
                      (v) =>
                        /^[0-9_. ]*$/.test(v) || 'Please enter numbers only',
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>
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
                      (val) => {
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
                </div>
                <div class="bg-grey-11 col-12 row q-pa-xs">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </div>
              <!-- <q-table
                :data="foodData_rows"
                :columns="foodData_columns"
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
                      color="red"
                      @click="deleteItem(props.row)"
                      size="xs"
                      icon="delete"
                      round
                      dense
                      class="text-weight-bold"
                      no-caps
                      ><q-tooltip :disable="$q.platform.is.mobile"
                        >Delete</q-tooltip
                      ></q-btn
                    >
                  </q-td>
                </template>
              </q-table> -->
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Update"
                @click="onTravelUpdatingFoodDetailForm()"
              ></q-btn>
            </div>
          </q-form>
        </q-card>
      </q-dialog>

      <!-- Other Food Edit Details End -->

      <!-- Other Food Details Start -->

      <q-dialog v-model="addOtherFoodPartner" maximized persistent>
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
          <q-form ref="addOtherFoodPartner">
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
                  v-model="otherFoodPartner.kitchen_name"
                  label="Kitchen Name "
                  readonly
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="otherFoodPartner.kitchen_type"
                  label="Kitchen Type"
                  readonly
                  hide-bottom-space
                  style="width: 180px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-select
                  class="col-3"
                  dense
                  outlined
                  v-model="otherFoodPartner.item_name"
                  label="Food Item type *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :options="otherfoodtype"
                  :rules="[required('Food Item Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-select>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="otherFoodPartner.food_items_name"
                  label="Food Item Name *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :rules="[required('Food Item Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  outlined
                  label="items Available from *"
                  dense
                  v-model="otherFoodPartner.items_available_from"
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
                          v-model="otherFoodPartner.items_available_from"
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
                  v-model="otherFoodPartner.items_available_to"
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
                          v-model="otherFoodPartner.items_available_to"
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
                  v-model="otherFoodPartner.units"
                  label="Units *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :options="['1 Plate']"
                  :rules="[required('Units')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-unity" color="secondary" />
                  </template>
                </q-select>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="otherFoodPartner.price"
                  label="Price*"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :rules="[
                    required('Price'),
                    (v) => /^[0-9_. ]*$/.test(v) || 'Please enter numbers only',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-input
                  dense
                  outlined
                  v-model="otherFoodPartner.special_offer"
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
                    (val) => {
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
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div>
              <!-- <q-table
                :data="foodData_rows"
                :columns="foodData_columns"
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
                      color="red"
                      @click="deleteItem(props.row)"
                      size="xs"
                      icon="delete"
                      round
                      dense
                      class="text-weight-bold"
                      no-caps
                      ><q-tooltip :disable="$q.platform.is.mobile"
                        >Delete</q-tooltip
                      ></q-btn
                    >
                  </q-td>
                </template>
              </q-table> -->
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"
                @click="onOtherFoodForm"
                :disable="this.addOtherMedicalPartner.accept == false"
              ></q-btn>
            </div>
          </q-form>
        </q-card>
      </q-dialog>
      <!-- Other Food Details End -->
      <!-- Add Transport Dialog Detail Start -->
      <!-- <q-dialog v-model="travelRestaurantDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="travelRestaurantFormBasic" class="q-gutter-xs">travelRestaurantEditDialog
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Travel Restaurant Details
                </div>
                <q-space />
                <q-btn dark flat icon="close" color="white" @click="closeRestaurantDialog">
                  <q-tooltip class="bg-white text-primary">close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Basic Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="travelRestaurantDetails.name_of_kitchen" label="Name Of Kitchen *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.type_of_kitchen" label="Kitchen Type*"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>


                    <q-input dense outlined style="width: 250px" v-model="travelRestaurantDetails.fssai_no"
                      label="FSSAI Licence" mask="##############" label-color="black"
                      :rules="[required('FSSAI Licence No.')]" v-bind:readonly="this.onclickValue == 'edit'" />
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable v-model="upload_fssai" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Fssai Document" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-input dense outlined v-model="travelRestaurantDetails.special_offer" label="Special Offer *"
                      :rules="[number, specialMOfferValue('Special Offer', 100)]" lazy-rules mask="###"
                      style="width: 250px" label-color="black" hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.date_from" clearable label="Date From"
                      label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy.show()"
                      style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="travelRestaurantDetails.date_from" mask="DD/MM/YYYY" @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.date_to" label="Date To"
                      label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy1.show()"
                      style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" minimal transition-show="scale" transition-hide="scale">
                            <q-date v-model="travelRestaurantDetails.date_to" minimal mask="DD/MM/YYYY"
                              @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" minimal flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.restaurant_description" lazy-rules
                      style="width:100%" label-color="black" type="textarea" :rules="[required('Description')]" autogrow
                      hide-bottom-space placeholder="Description *">
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
                    <q-input dense outlined hide-bottom-space v-model="travelRestaurantDetails.building_no"
                      label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.street" label="Street/Colony Name*"
                      lazy-rules label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-highway" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.land_mark" label="Landmark"
                      label-color="black" hide-bottom-space><template v-slot:prepend>
                        <q-icon name="mdi-map-marker-circle" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                      option-value="state_id" option-label="state_name" v-model="travelRestaurantDetails.state" @input="
  loadAllCities(travelRestaurantDetails.state);
emptyCities();
                      " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                      option-label="city" fill-input options-dense input-debounce="0"
                      v-model="travelRestaurantDetails.city" label="City *" label-color="black" hide-bottom-space
                      :rules="[required('City')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-input dense outlined lazy-rules mask="######" v-model="travelRestaurantDetails.pin_code"
                      label="Pincode *" label-color="black" hide-bottom-space
                      :rules="[required('Pincode'), pinNumber()]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                      v-model="travelRestaurantDetails.country" label="Country" label-color="black"
                      :rules="[required('Country')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
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
                    <q-input dense outlined v-model="travelRestaurantDetails.restaurant_email" label="Email *"
                      lazy-rules hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]"
                      label-color="black">
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.restaurant_phone" label="Phone *"
                      lazy-rules mask="##########" style="width: 250px" label-color="black" hide-bottom-space
                      :rules="[required('Phone no'), phone()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.Name_Of_Contact_Person"
                      label="Name of Contact Person *" hide-bottom-space style="width: 250px" label-color="black"
                      :rules="[required('Name')]">
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
                    <q-input dense outlined v-model="travelRestaurantDetails.restaurant_latitude" label="Latitude *"
                      lazy-rules style="width: 200px" label-color="black" hide-bottom-space
                      :rules="[required('Latitude'), number()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="travelRestaurantDetails.restaurant_longitude" label="Longitude *"
                      lazy-rules style="width: 200px" :rules="[required('Longitude'), number()]" label-color="black"
                      hide-bottom-space>
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
                    <q-input outlined label="Opening Time *" dense v-model="travelRestaurantDetails.opening_time"
                      :rules="[required('Check In Time')]" @click="$refs.qOpeningTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="travelRestaurantDetails.opening_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Closing Time *" dense v-model="travelRestaurantDetails.closing_time"
                      :rules="[required('Check Out Time')]" @click="$refs.qClosingTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="travelRestaurantDetails.closing_time" mask="hh:mm A">
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
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable v-model="upload_Image" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Restaurant Front Image 1" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="upload_Image1" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Restaurant Side Image 2" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="upload_Image2" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Restaurant Reception" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>

                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn color="secondary" label="Submit" @click="onTravelRestaurantSubmit"></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog> -->

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
                <div class="text-h6 text-white">MH Transport Details</div>
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
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="offerOptions"
                      v-model="transportDetails.select_offer"
                      label="Select Offer*"
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
                        <q-icon name="mdi-sale" color="secondary" /> </template
                    ></q-select>
                    <q-input
                      dense
                      outlined
                      v-model="transportDetails.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.transportDetails.select_offer == 'Amount'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="transportDetails.special_offer"
                      label="Special Offer *"
                      :rules="[
                        number(),
                        specialMOfferValue('Special Offer', 100),
                      ]"
                      lazy-rules
                      mask="###"
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.transportDetails.select_offer == 'Percentage'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>

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
                      style="width: 100%"
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
                      :options="stateOptions"
                      @filter="filterFnStates"
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
                      :options="cityOptions"
                      @filter="filterFnCities"
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
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
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
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
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
                      v-model="transportDetails.transport_latitude"
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
                      v-model="transportDetails.transport_longitude"
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
                      hint="Upload Vehicle Front Image "
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
                      hint="Upload Vehicle Back Image "
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
      <q-dialog
        v-model="travelRestaurantEditDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="editTravelRestaurantForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Travel Restaurant Details
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
                      v-model="editTravelRestaurantDatails.name_of_kitchen"
                      label="Name Of Kitchen *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editTravelRestaurantDatails.type_of_kitchen"
                      label="Kitchen Type*"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>

                    <q-input
                      dense
                      outlined
                      style="width: 250px"
                      v-model="editTravelRestaurantDatails.fssai_no"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="offerOptions"
                      v-model="editTravelRestaurantDatails.select_offer"
                      label="Select Offer*"
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
                        <q-icon name="mdi-sale" color="secondary" /> </template
                    ></q-select>
                    <q-input
                      dense
                      outlined
                      v-model="editTravelRestaurantDatails.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="
                        this.editTravelRestaurantDatails.select_offer ==
                        'Amount'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editTravelRestaurantDatails.special_offer"
                      label="Special Offer *"
                      :rules="[
                        number,
                        specialMOfferValue('Special Offer', 100),
                      ]"
                      lazy-rules
                      mask="###"
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      v-if="
                        this.editTravelRestaurantDatails.select_offer ==
                        'Percentage'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editTravelRestaurantDatails.date_from"
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
                              v-model="editTravelRestaurantDatails.date_from"
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
                      v-model="editTravelRestaurantDatails.date_to"
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
                              v-model="editTravelRestaurantDatails.date_to"
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
                      v-model="
                        editTravelRestaurantDatails.restaurant_description
                      "
                      lazy-rules
                      style="width: 100%"
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
                      v-model="editTravelRestaurantDatails.building_no"
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
                      v-model="editTravelRestaurantDatails.street"
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
                      v-model="editTravelRestaurantDatails.land_mark"
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
                      :options="stateOptions"
                      @filter="filterFnStates"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="editTravelRestaurantDatails.state_name"
                      @input="
                        loadAllCities(editTravelRestaurantDatails.state);
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
                      v-model="editTravelRestaurantDatails.city_name"
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
                      v-model="editTravelRestaurantDatails.pin_code"
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
                      v-model="editTravelRestaurantDatails.country"
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
                      v-model="editTravelRestaurantDatails.restaurant_email"
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
                      v-model="editTravelRestaurantDatails.restaurant_phone"
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
                      v-model="
                        editTravelRestaurantDatails.Name_Of_Contact_Person
                      "
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                      v-model="editTravelRestaurantDatails.restaurant_latitude"
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
                      v-model="editTravelRestaurantDatails.restaurant_longitude"
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
                      v-model="editTravelRestaurantDatails.opening_time"
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
                              v-model="editTravelRestaurantDatails.opening_time"
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
                      label="Closing Time *"
                      dense
                      v-model="editTravelRestaurantDatails.closing_time"
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
                              v-model="editTravelRestaurantDatails.closing_time"
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
                  <div class="row col-12 q-ml-md">
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Update"
                  @click="updateTravelRestaurant"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <q-dialog
        v-model="travelRestaurantDataDialog"
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
                {{ travelRestaurantEditedItem.name_of_kitchen }}
              </div>
              <q-space />
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="otherFoodForm()"
              >
                Add Menu
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-5 text-left text-black">Lead Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.food_partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.food_partner_sub_name }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">Kitchen Type</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.type_of_kitchen }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Name Of Kitchen
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.name_of_kitchen }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.restaurant_phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.restaurant_email }}
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
                        : {{ travelRestaurantEditedItem.building_no }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Street</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.street }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Landmark</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.land_mark }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Country</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.country }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">State</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.state_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">City</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.city_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Pincode</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.pin_code }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Latitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.restaurant_latitude }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Longitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ travelRestaurantEditedItem.restaurant_longitude }}
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                                  travelRestaurantEditedItem.upload_image,
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
                                  travelRestaurantEditedItem.upload_image1,
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
                                  travelRestaurantEditedItem.upload_image2,
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
                        {{ travelRestaurantEditedItem.restaurant_description }}
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
                    :data="travel_foodDetails_rows"
                    :columns="travel_foodDetails_columns"
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
                            showDocumentTravelfood(
                              props.row.food_image,
                              'Food Image'
                            )
                          "
                        />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-action="props">
                      <q-td :props="props">
                        <q-btn
                          color="green"
                          @click="editTravelFoodItem(props.row)"
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
            <div></div>
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
      <q-dialog
        v-model="travelRestaurantDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="travelRestaurantFormBasic" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Travel Restaurant Details
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
                      v-model="travelRestaurantDetails.name_of_kitchen"
                      label="Name Of Kitchen *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelRestaurantDetails.type_of_kitchen"
                      label="Kitchen Type*"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>

                    <q-input
                      dense
                      outlined
                      style="width: 250px"
                      v-model="travelRestaurantDetails.fssai_no"
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="offerOptions"
                      v-model="travelRestaurantDetails.select_offer"
                      label="Select Offer*"
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
                        <q-icon name="mdi-sale" color="secondary" /> </template
                    ></q-select>
                    <q-input
                      dense
                      outlined
                      v-model="travelRestaurantDetails.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="
                        this.travelRestaurantDetails.select_offer == 'Amount'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelRestaurantDetails.special_offer"
                      label="Special Offer *"
                      :rules="[
                        number,
                        specialMOfferValue('Special Offer', 100),
                      ]"
                      lazy-rules
                      mask="###"
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                      v-if="
                        this.travelRestaurantDetails.select_offer ==
                        'Percentage'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="travelRestaurantDetails.date_from"
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
                              v-model="travelRestaurantDetails.date_from"
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
                      v-model="travelRestaurantDetails.date_to"
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
                              v-model="travelRestaurantDetails.date_to"
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
                      v-model="travelRestaurantDetails.restaurant_description"
                      lazy-rules
                      style="width: 100%"
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
                      v-model="travelRestaurantDetails.building_no"
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
                      v-model="travelRestaurantDetails.street"
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
                      v-model="travelRestaurantDetails.land_mark"
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
                      :options="stateOptions"
                      @filter="filterFnStates"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="travelRestaurantDetails.state"
                      @input="
                        loadAllCities(travelRestaurantDetails.state);
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
                      v-model="travelRestaurantDetails.city"
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
                      v-model="travelRestaurantDetails.pin_code"
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
                      v-model="travelRestaurantDetails.country"
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
                      v-model="travelRestaurantDetails.restaurant_email"
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
                      v-model="travelRestaurantDetails.restaurant_phone"
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
                      v-model="travelRestaurantDetails.Name_Of_Contact_Person"
                      label="Name of Contact Person *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Name')]"
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
                      v-model="travelRestaurantDetails.restaurant_latitude"
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
                      v-model="travelRestaurantDetails.restaurant_longitude"
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
                      v-model="travelRestaurantDetails.opening_time"
                      :rules="[required('Check In Time')]"
                      @click="$refs.qOpeningTime.show()"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qOpeningTime"
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="travelRestaurantDetails.opening_time"
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
                      label="Closing Time *"
                      dense
                      v-model="travelRestaurantDetails.closing_time"
                      :rules="[required('Check Out Time')]"
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
                            <q-time
                              v-model="travelRestaurantDetails.closing_time"
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
                  <div class="row col-12 q-ml-md">
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onTravelRestaurantSubmit"
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
                @click="travelDetailsForm()"
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
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

                      <div class="col-5 text-left text-black">Phone Number</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.transport_phone }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">Email Id</div>
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
                      <div class="col-5 text-left text-black">Description</div>
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                      <div class="col-5 text-left text-black">Longitude</div>
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                            Transport Image2
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                        <q-btn
                          color="green"
                          @click="editTravelinlocation(props.row)"
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
                          icon="las la-eye"
                          @click="showTravelData(props.row)"
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
                <div class="text-h6 text-white">MH Transport Details</div>
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
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="offerOptions"
                      v-model="transporteditedItem.select_offer"
                      label="Select Offer*"
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
                        <q-icon name="mdi-sale" color="secondary" /> </template
                    ></q-select>
                    <q-input
                      dense
                      outlined
                      v-model="transporteditedItem.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.transporteditedItem.select_offer == 'Amount'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="transporteditedItem.special_offer"
                      label="Enter Percentage *"
                      :rules="[
                        number(),
                        specialMOfferValue('Enter Percentage', 100),
                      ]"
                      lazy-rules
                      mask="###"
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="
                        this.transporteditedItem.select_offer == 'Percentage'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
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
                      style="width: 100%"
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
                      :options="stateOptions"
                      @filter="filterFnStates"
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
                      :options="cityOptions"
                      @filter="filterFnCities"
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
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
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
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
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
                      v-model="transporteditedItem.transport_latitude"
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
                      v-model="transporteditedItem.transport_longitude"
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
                      v-model="transporteditedItem.upload_image1"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      hide-bottom-space
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle Front Image "
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-btn
                          color="teal"
                          size="sm"
                          icon="mdi-eye"
                          @click="
                            showDocument(
                              transporteditedItem.upload_image1,
                              'Property Image1'
                            )
                          "
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >Vehicle Back Image
                      </q-tooltip>
                        </q-btn>
                    <q-file
                      color="lime-11"
                      bg-color="teal"
                      style="width: 240px"
                      class="hint-bold"
                      dense
                      filled
                      clearable
                      hide-bottom-space
                      v-model="transporteditedItem.upload_image2"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle Back Image "
                      :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-btn
                          color="teal"
                          size="sm"
                          icon="mdi-eye"
                          @click="
                            showDocument(
                              transporteditedItem.upload_image2,
                              'Property Image2'
                            )
                          "
                        >
                          <q-tooltip :disable="$q.platform.is.mobile"
                            >Vehicle Back Image
                      </q-tooltip>
                        </q-btn>
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
                  @click="onTransportUpdatingDetail"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Transport Edit Dialog End -->

      <!--Sachin  Add Medical Store Details Start -->
      <q-dialog
        v-model="travelMedicalStoreDetails"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="addMedicalForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">Add Medical Store Details</div>
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
                      v-model="TravelMedicalStore.medical_store_name"
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
                        'Mera Pharmacy',
                      ]"
                      :rules="[required('Medical Store')]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <!-- <q-input dense outlined v-model="TravelMedicalStore.medical_store_name" label="Medical Store *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Medical Store')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="offerOptions"
                      v-model="TravelMedicalStore.select_offer"
                      label="Select Offer*"
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
                        <q-icon name="mdi-sale" color="secondary" /> </template
                    ></q-select>
                    <q-input
                      dense
                      outlined
                      v-model="TravelMedicalStore.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.TravelMedicalStore.select_offer == 'Amount'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="TravelMedicalStore.special_offer"
                      label="Special Offer *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Special Offer')]"
                      v-if="
                        this.TravelMedicalStore.select_offer == 'Percentage'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="TravelMedicalStore.date_from"
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
                              v-model="TravelMedicalStore.date_from"
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
                      v-model="TravelMedicalStore.date_to"
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
                              v-model="TravelMedicalStore.date_to"
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
                      v-model="TravelMedicalStore.description"
                      lazy-rules
                      style="width: 10 0%"
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
                      v-model="TravelMedicalStore.building_no"
                      label="House/Flat No *"
                      lazy-rules
                      label-color="black"
                      :rules="[required('House/Flat No')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="TravelMedicalStore.street"
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
                      v-model="TravelMedicalStore.land_mark"
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
                      :options="stateOptions"
                      @filter="filterFnStates"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="TravelMedicalStore.state"
                      @input="
                        loadAllCities(TravelMedicalStore.state);
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
                      v-model="TravelMedicalStore.city"
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
                      v-model="TravelMedicalStore.pin_code"
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
                      v-model="TravelMedicalStore.country"
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
                      v-model="TravelMedicalStore.email_id"
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
                      v-model="TravelMedicalStore.phone"
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
                      v-model="TravelMedicalStore.name_Of_Contact_Person"
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
                      v-model="TravelMedicalStore.latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="TravelMedicalStore.longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number]"
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
                      v-model="TravelMedicalStore.opening_time"
                      :rules="[required('Opening Time')]"
                      @click="$refs.qOpeningTime.show()"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qOpeningTime"
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="TravelMedicalStore.opening_time"
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
                      label="Closing Time *"
                      dense
                      v-model="TravelMedicalStore.closing_time"
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
                            <q-time
                              v-model="TravelMedicalStore.closing_time"
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
                      hint="Upload Store Image 1"
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
                      hint="Upload Store Image 2"
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
                      hint="Upload Store Image 3"
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
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="submitTravelMedicalStoreData()"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!--Sachin  Add Medical Store Details End -->

      <!-- Sachin Medical Store Details Views Start -->

      <q-dialog
        v-model="travelmedicalStoreViewDialog"
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
                @click="otherMedicalForm()"
              >
                Add Medical Partner
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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

                      <div class="col-5 text-left text-black">Phone Number</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <q-separator />

                      <div class="col-5 text-left text-black">Email Id</div>
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
                      <div class="col-5 text-left text-black">Description</div>
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                      <div class="col-5 text-left text-black">Longitude</div>
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
              class="row col-12 q-col-gutter-sm q-py-sm q-pa-md"
              style="padding-top: 0px"
            >
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="q-gutter-xs"></div>
                <q-card flat bordered class="bg-white">
                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                    <q-icon name="manage_accounts" color="black" size="1.5em" />
                    Equipment Details
                  </q-bar>
                  <div class="q-pa-md" style="padding-top: 10px">
                    <q-table
                      :data="travelequipment_item_rows"
                      :columns="travelequipment_item_columns"
                      :pagination.sync="pagination"
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
                              showDocumentmedical(
                                props.row.equipment_image,
                                'Equipment Image'
                              )
                            "
                          />
                        </q-td>
                      </template>
                      <template v-slot:body-cell-actions1="props">
                        <q-td :props="props">
                          <q-btn
                            color="green"
                            icon="mdi-pencil"
                            size="sm"
                            @click="editTravelEquipmentForm(props.row)"
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
            </div>
          </div>
        </q-layout>
      </q-dialog>
      <!-- Sachin Medical Store Details View End -->
      <!--Sachin  Add Medical Store Details Start -->
      <q-dialog
        v-model="travelmedicalStoreEditDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="addMedicalForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">Add Medical Store Details</div>
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
                      v-model="TravelmedicalstoreeditedItem.medical_store_name"
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
                        'Mera Pharmacy',
                      ]"
                      :rules="[required('Medical Store')]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="offerOptions"
                      v-model="TravelmedicalstoreeditedItem.select_offer"
                      label="Select Offer*"
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
                        <q-icon name="mdi-sale" color="secondary" /> </template
                    ></q-select>
                    <q-input
                      dense
                      outlined
                      v-model="TravelmedicalstoreeditedItem.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="
                        this.TravelmedicalstoreeditedItem.select_offer ==
                        'Amount'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <!-- <q-input dense outlined v-model="TravelmedicalstoreeditedItem.medical_store_name" label="Medical Store *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Medical Store')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="TravelmedicalstoreeditedItem.special_offer"
                      label="Special Offer *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Special Offer')]"
                      v-if="
                        this.TravelmedicalstoreeditedItem.select_offer ==
                        'Percentage'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="TravelmedicalstoreeditedItem.from_date"
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
                              v-model="TravelmedicalstoreeditedItem.from_date"
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
                      v-model="TravelmedicalstoreeditedItem.to_date"
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
                              v-model="TravelmedicalstoreeditedItem.to_date"
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
                      v-model="TravelmedicalstoreeditedItem.description"
                      lazy-rules
                      style="width: 10 0%"
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
                      v-model="TravelmedicalstoreeditedItem.building_no"
                      label="House/Flat No *"
                      lazy-rules
                      label-color="black"
                      :rules="[required('House/Flat No')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="TravelmedicalstoreeditedItem.street"
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
                      v-model="TravelmedicalstoreeditedItem.land_mark"
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
                      :options="stateOptions"
                      @filter="filterFnStates"
                      option-value="state_id"
                      option-label="state_name"
                      v-model="TravelmedicalstoreeditedItem.state_name"
                      @input="
                        loadAllCities(TravelmedicalstoreeditedItem.state);
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
                      v-model="TravelmedicalstoreeditedItem.city_name"
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
                      v-model="TravelmedicalstoreeditedItem.pin_code"
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
                      v-model="TravelmedicalstoreeditedItem.country"
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
                      v-model="TravelmedicalstoreeditedItem.email"
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
                      v-model="TravelmedicalstoreeditedItem.phone"
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
                      v-model="
                        TravelmedicalstoreeditedItem.name_of_contact_person
                      "
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
                      v-model="TravelmedicalstoreeditedItem.latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Latitude'), number]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="TravelmedicalstoreeditedItem.longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number]"
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
                      v-model="TravelmedicalstoreeditedItem.opening_time"
                      :rules="[required('Opening Time')]"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="
                                TravelmedicalstoreeditedItem.opening_time
                              "
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
                      label="Closing Time *"
                      dense
                      v-model="TravelmedicalstoreeditedItem.closing_time"
                      :rules="[required('Closing Time')]"
                    >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="
                                TravelmedicalstoreeditedItem.closing_time
                              "
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
                      v-model="TravelmedicalstoreeditedItem.uploadImage1"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      hide-bottom-space
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 1"
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
                      v-model="TravelmedicalstoreeditedItem.uploadImage2"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 2"
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
                      v-model="TravelmedicalstoreeditedItem.uploadImage3"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 3"
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
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn
                  color="secondary"
                  label="Update"
                  @click="onTravelMedicalStoreUpdatingDetail()"
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
        <b style="margin-right: 15px">
          User Name: {{ userDetails.user_name }}</b
        >
        <q-chip
          clickable
          color="secondary"
          text-color="white"
          icon="add"
          @click="OpenAddDialog()"
          class="text-weight-bold"
        >
          Add Partner Profile
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

const transportRegMaster = () => {
  return {
    property: "",
    gst_registration: "",
    select_offer: "",
    enter_amount: "",
    property_name: "",
    name: "",
    partner_sub_name: "",
    agent_name: "",
    transport_sub_name: "",
    phone: "",
    fax: "",
    alternate_no: "",
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
    prevcity: "",
    prevstate: "",
    country: "",
    state: "",
    state1: "",
    city1: "",
    pin_code: "",
    latitude: "",
    longitude: "",
    file_upload: "",
    agent_id: "",
    // propertyType: "",
    undertaking_certificate: [],
    property_tax: [],
    fire_safety: [],
    accept: false,
    otherpropertyAmenitiesArr: [],
  };
};
const travelLocRegistration = () => {
  return {
    agent_name: "",
    transport_sub_name: "",
    // vehicle_type: "",
    city: "",
    vehicle_name: "",
    no_of_seaters: "",
    day_price: "",
    night_price: "",
    units: "",
    description: "",
    // special_offer:"",
    vehicle_image: "",
  };
};

export default {
  data() {
    return {
      dialogTitle: "",
      ...validations,
      url: "",
      title: "My Vehicles",
      step: 1,
      label2: "",
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
      addOtherAccoPartner: false,
      addOtherFoodPartner: false,
      addOtherMedicalPartner: false,
      travelpropertyDataDialog: false,
      travelpropertyEditDialog: false,
      travelviewdialog: false,
      editTravelForm: false,
      travelroomsDataDialog: false,
      travelroomsDialog: false,
      travelroomsEditDialog: false,
      travelequipmentUpdatingDetails: false,
      travelfoodDetailsAddForm: false,
      transportDialog: false,
      transportViewDialog: false,
      transportEditDialog: false,
      maximizedToggle: true,
      travelRestaurantDialog: false,
      travelRestaurantEditDialog: false,
      travelRestaurantDataDialog: false,
      travelMedicalStoreDetails: false,
      travelmedicalStoreViewDialog: false,
      travelmedicalStoreEditDialog: false,
      yes: false,
      no: false,
      othercity: false,
      otherstate: false,
      indiastate: false,
      indiacity: false,
      small: false,
      showTable: false,
      editedIndex: -1,
      otherfoodtype: ["Veg", "Non-Veg"],
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
      offerOptions: ["Amount", "Percentage"],
      // VehicleTypes: ["Ola", "Uber", "Rapido"],
      vehiclePrice: ["Per/Km", "Per/Trip"],
      vehicleseats: ["4 Seater", "5 Seater", "6 Seater", "7 Seater"],

      TravelItemsArrayData: [],
      TravelItemscolumn: [
        {
          name: "sno",
          label: "Sno",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "sno",
          headerStyle: {
            fontWeight: "bold",
          },
        },

        {
          name: "Vehicle_Type",
          label: "Vehicle Type",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "Vehicle_Type",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          name: "Vehicle_Trip",
          label: "Vehicle Per Trip",
          field: "Vehicle_Trip",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "vehicle_From",
          headerClasses: "bg-indigo-10 text-white",
          label: "Vehicle From",
          align: "center",
          field: "Vehicle_From",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Vehicle_To",
          headerClasses: "bg-indigo-10 text-white",
          label: "Vehicle To",
          align: "center",
          field: "Vehicle_To",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Vehicle_Day_Price",
          headerClasses: "bg-indigo-10 text-white",
          label: "Vehicle Day Price",
          align: "center",
          field: "Vehicle_Day_Price",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "Vehicle_Night_Price",
          headerClasses: "bg-indigo-10 text-white",
          label: "Vehicle Night Price",
          align: "center",
          field: "Vehicle_Night_Price",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "actions",
          headerClasses: "bg-indigo-10 text-white",
          label: "",
          field: "actions",
          align: "center",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],

      TravelItemsArrayAllData: [],

      city: [],
      editedItem: {
        account_id: "",
        agent_id: "",
        agent_name: "",
        account_id: " ",
        city: "",
        city_id: "",
        transport_sub_id: "",
        transport_sub_name: "",
        travel_name: "",
        status: " ",
        address: " ",
        location: " ",
        phone: "",
        Name_Of_Contact_Person: " ",
      },
      upload_Image: [],
      upload_Image1: [],
      upload_Image2: [],
      upload_fssai: [],
      upload_fssai_1: [],
      countriesArr: ["India"],
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
          code: "+500 GS",
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
        { name: "Zimbabwe", code: "+263 ZW" },
      ],
      otheramenitiesinput: false,
      onclickValue: "",
      stateOptions: [],
      cityOptions: [],
      countryOptions: [],
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
        upload_image2: "",
        select_offer: "",
        enter_amount: "",
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
        transport_longitude: "",
        select_offer: "",
        enter_amount: "",
        // upload_image1: "",
        // upload_image2: "",
      },
      transportPartnerForm: {
        user_id: "",
        name: "",
        partner_sub_name: "",
        agent_name: "",
        transport_sub_id: "",
        transport_sub_name: "",
        gst_registration: "",
        select_offer: "",
        enter_amount: "",
        // company_name: "",
        // individual_name: "",
        phone: "",
        fax: "",
        alternate_no: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        city_id: "",
        country: "",
        state: "",
        prevstate: "",
        prevcity: "",
        city1: "",
        state1: "",
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
        prev_sub_name: "",
        address: "",
        location: "",
      },
      editedTravelRoomsData: {
        property_specialOffer: "",
        txn_id: "",
        property_txn_id: "",
        partner_id: "",
        partner_sub_id: "",
        sub_property_name: "",
        property_name: "",
        room_category: "",
        no_of_avail_rooms: "",
        room_type: "",
        date_from: "",
        date_to: "",
        date_from_up: "",
        date_to_up: "",
        facilities: {},
        icon_image: [],
        room_numbers: [],
        price: "",
        other_amenities: "",
        units: "",
        special_offer: "",
        select_offer: "",
        enter_amount: "",
      },

      travelfoodDetails: {
        account_id: "",
        user_id: "",
        agent_id: "",
        agent_sub_id: "",
        transport_sub_id: "",
        foodPartner_name: "",
        foodPartner_sub_name: "",
        name: "",
        agent_name: "",
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
        kitchen_txn_id: "",
        kitchen_type: "",
        kitchen_name: "",
        address: "",
        city: "",
        city_id: "",
        location: "",
        gstin: "",
        fssai_no: "",
        partner_status: "",

        // special_offer: "",
      },
      otherAccomadationPartner: {
        account_id: "",
        property_name: "",
        sub_property_name: "",
        property_phone: "",
        property_email_id: "",
        // property_price_startsFrom: "",
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
        amenities: null,
        checkIn_time: "",
        checkOut_time: "",
        Name_Of_Contact_Person: "",
      },

      otherMedicalPartner: {
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
        purchased_type: "",
        // special_offer:"",
      },

      travelRoomDetails: {
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
        room_numbers: [],
        room_type: "",
        facilities: null,
        price: "",
        units: "",
        property_txn_id: "",
        other_amenities: "",
      },
      travelRestaurantDetails: {
        partner_status: "",
        account_id: "",
        restaurant_name: "",
        name_of_kitchen: "",
        type_of_kitchen: "",
        restaurant_phone: "",
        restaurant_email: "",
        Name_Of_Contact_Person: "",
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
        date_from: "",
        date_to: "",
        food_partner_phone: "",
        phone: "",
        select_offer: "",
        enter_amount: "",
      },
      editedTravelMedicalDetails: {
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
      travelPropertyEditedItem: {
        partner_id: "",
        partner_sub_id: "",
      },
      travelRestaurantEditedItem: {
        agent_id: "",
        agent_sub_id: "",
      },
      editTravelRestaurantDatails: {
        txn_id: "",
        account_id: "",
        restaurant_name: "",
        name_of_kitchen: "",
        type_of_kitchen: "",
        restaurant_phone: "",
        restaurant_email: "",
        Name_Of_Contact_Person: "",
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
        state_name: "",
        city_name: "",
        agent_name: "",
        agent_sub_name: "",
        date_from: "",
        date_to: "",
      },

      travelroomEditedItem: {
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
      },

      travelEditedPropertyData: {
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
        amenities: "",
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

      otherFoodPartner: {
        account_id: "",
        user_id: "",
        agent_id: "",
        agent_sub_id: "",
        foodPartner_name: "",
        foodPartner_sub_name: "",
        name: "",
        agent_name: "",
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
        kitchen_txn_id: "",
        kitchen_type: "",
        kitchen_name: "",
        address: "",
        city: "",
        city_id: "",
        location: "",
        gstin: "",
        fssai_no: "",
        partner_status: "",

        // special_offer: "",
      },
      edittravelLocation:{
        account_id: "",
        user_id: "",
        agent_id: "",
        transport_sub_id: "",
        agent_name: "",
        transport_sub_name: "",
        // vehicle_type: "",
        city: "",
        city_id: "",
        vehicle_name: "",
        no_of_seaters: "",
        day_price: "",
        night_price: "",
        units: "",
        description: "",
        // special_offer:"",
        vehicle_image: "",
        txn_id: "",
        travel_status: "",
        address: " ",
        location: " ",

      },
      TravelMedicalStore: {
        account_id: "",
        equipment_id: "",
        equipment_sub_id: "",
        medical_store_name: "",
        special_offer: "",
        from_date: "",
        to_date: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        state: "",
        city_name: "",
        pin_code: "",
        country: "",
        email: "",
        phone: "",
        name_of_contact_person: "",
        latitude: "",
        longitude: "",
        opening_time: "",
        closing_time: "",
        select_offer: "",
        enter_amount: "",
      },
      TravelmedicalstoreeditedItem: {
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
        closing_time: "",
        city_name: "",
        select_offer: "",
      },
      uploadImage: [],
      uploadImage1: [],
      uploadImage2: [],
      uploadImage3: [],
      uploadImage4: [],
      uploadRoomImage1: [],
      uploadRoomImage2: [],
      uploadRoomImage3: [],
      uploadRoomImage4: [],
      uploadRoomImage5: [],
      equipment_image: [],
      unitsArr: ["Per Day"],
      roomTypeArr: ["Single Share", "Double Share", "Triple Share"],
      room_categoryArr: ["Basic", "Standard", "Supreme"],
vehicle_perTripArr: ["Per/Km", "Per/Trip"],
      food_image: "",
      travelLocation: {
        account_id: "",
        user_id: "",
        agent_id: "",
        transport_sub_id: "",
        agent_name: "",
        transport_sub_name: "",
        vehicle_type: "",
vehicle_per_trip: "",
        vehicle_from: "",
        vehicle_to: "",
        city: "",
        city_id: "",
        vehicle_name: "",
        no_of_seaters: "",
        day_price: "",
        night_price: "",
        units: "",
        description: "",
        // special_offer:"",
        vehicle_image: "",
        txn_id: "",
        travel_status: "",
        address: " ",
        location: " ",
      },
      pagination: {
        rowsPerPage: 500,
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
      property: (state) => state.dropdown.property_arr,
      transport_reg_columns: (state) => state.partners.transport_reg_columns,
      transport_registration_ex_rows: (state) =>
        state.partners.transport_registration_ex_rows,
      transport_registration_ex_columns: (state) =>
        state.partners.transport_registration_ex_columns,
      travelrooms_data_columns: (state) =>
        state.partners.travelrooms_data_columns,
      travel_item_rows: (state) => state.partners.travel_item_rows,
      travel_item_columns: (state) => state.partners.travel_item_columns,
      travelequipment_item_rows: (state) =>
        state.partners.travelequipment_item_rows,
      travelequipment_item_columns: (state) =>
        state.partners.travelequipment_item_columns,
      amenitiesArr: (state) => state.dropdown.amenities_arr,
      otherpropertyAmenitiesArr: (state) =>
        state.dropdown.property_amenities_arr,
      othermedicalItemName: (state) => state.dropdown.medical_item_name,
      othermedicalUnitsName: (state) => state.dropdown.medical_units_name,
      otherfoodThaliArr: (state) => state.dropdown.food_item_types_arr,
      otherfoodListArr: (state) => state.dropdown.food_list_arr,
      property_data_columns: (state) => state.partners.property_data_columns,
      rooms_data_columns: (state) => state.partners.rooms_data_columns,
      travelproperty_data_columns: (state) =>
        state.partners.travelproperty_data_columns,
      travel_foodDetails_rows: (state) =>
        state.partners.travel_foodDetails_rows,
      travel_foodDetails_columns: (state) =>
        state.partners.travel_foodDetails_columns,
      travel_restaurant_data_columns: (state) =>
        state.partners.travel_restaurant_data_columns,
      travelfoodDetails_rows: (state) => state.partners.travelfoodDetails_rows,
      travelfoodDetails_columns: (state) =>
        state.partners.travelfoodDetails_columns,
      transport_item_rows: (state) => state.partners.transport_item_rows,
      transport_item_columns: (state) => state.partners.transport_item_columns,
      travelmedicalstore_item_rows: (state) =>
        state.partners.travelmedicalstore_item_rows,
      travelmedicalstore_item_columns: (state) =>
        state.partners.travelmedicalstore_item_columns,
      propertyOptions: (state) => state.master.properties_arr,
      vehicle_typeArr: (state) => state.dropdown.vehicle_type,
      // vehicle_perTripArr: (state) => state.dropdown.vehicle_per_trip,
      vehicle_fromArr: (state) => state.dropdown.vehicle_from,
      vehicle_toArr: (state) => state.dropdown.vehicle_to,
    }),
    ...mapGetters("partners", ["transport_reg_rows"]),
    ...mapGetters("partners", ["property_data_rows"]),
    ...mapGetters("partners", ["travelproperty_data_rows"]),
    ...mapGetters("partners", ["rooms_data_rows"]),
    ...mapGetters("partners", ["travelrooms_data_rows"]),
    ...mapGetters("partners", ["travel_restaurant_data_rows"]),
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("partners/getTransportRegMaster");
    this.$store.dispatch("dropdown/loadPropertyFacilities");
    this.$store.dispatch("dropdown/loadAllEquipmentItems");
    this.$store.dispatch("dropdown/loadAllFoodTypes");
    this.$store.dispatch("dropdown/loadAllFacilities");
    this.$store.dispatch("master/loadPropertiesDropdown");
this.$store.dispatch("dropdown/loadVehicalTypeCategory");

    this.$store.dispatch(
      "dropdown/loadVehicleFromPlace",
      this.userDetails.zone
    );
    this.$store.dispatch("dropdown/loadVehicleToPlace", this.userDetails.zone);
    // this.$store.dispatch("partners/travelDetailsSaving")
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
    /* for travel details */
    //
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("dropdown", ["loadAllMedicalUnits"]),
    ...mapActions("dropdown", ["loadAllFoodItems"]),
    ...mapActions("partners", ["createTransporterRegDetails"]),
    ...mapActions("partners", ["getTransportRegistrationBasedOnStatus"]),
    ...mapActions("partners", ["getTransportRegMaster"]),
    ...mapActions("partners", ["transportRegistrationMasterExistingUser"]),
    // ...mapActions("partners", ["createTravelLocRegDetails"]),
    ...mapActions("partners", ["otherpropertyDetailsSaving"]),
    ...mapActions("partners", ["otherFoodSaving"]),
    ...mapActions("partners", ["otherMedicalSaving"]),
    ...mapActions("partners", ["getTravelDetailsSaving"]),
    ...mapActions("partners", ["travelDetailsSaving"]),
    ...mapActions("partners", ["travelLocationUpdating"]),
    ...mapActions("partners", ["updateTravelPartnerDetails"]),
    ...mapActions("partners", ["getPropertyDetails"]),
    ...mapActions("partners", ["loadTravelPropertyDetails"]),
    ...mapActions("partners", ["updateTravelPropertyDetails"]),
    ...mapActions("partners", ["travelroomDetailsSaving"]),
    ...mapActions("partners", ["loadTravelRoomsDetails"]),
    ...mapActions("partners", ["updateTravelRoomsDetails"]),
    ...mapActions("partners", ["loadTravelMedicalEqpData"]),
    ...mapActions("partners", ["updatingTravelEquipmentDetailsForm"]),
    ...mapActions("partners", ["getTravelfoodDetails"]),
    ...mapActions("partners", ["updatingTravelFoodDetailsForm"]),
    ...mapActions("partners", ["transportDetailsSaving"]),
    ...mapActions("partners", ["getTransportDetailsSaving"]),
    ...mapActions("partners", ["updatingTransportDetails"]),
    ...mapActions("partners", ["travelRestaurantSaving"]),
    ...mapActions("partners", ["getTravelRestaurantDetails"]),
    ...mapActions("partners", ["updateTravelRestaurantDetails"]),
    ...mapActions("partners", ["saveTravelMedicalStoresData"]),
    ...mapActions("partners", ["getTravelMedicalStoreDetailsSaving"]),
    ...mapActions("partners", ["updatingTravelMedicalStoreDetails"]),
    ...mapActions("partners", ["travelLocationdetailsUpdating"]),
...mapActions("dropdown", ["loadVehicalTypeCategory"]),

    ...mapActions("dropdown", ["loadVehicleFromPlace"]),
    ...mapActions("dropdown", ["loadVehicleToPlace"]),

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
                  this.transportPartnerForm.agent_id = this.editedItem.agent_id;
                  this.transportPartnerForm.agent_name =
                    this.editedItem.agent_name;
                  this.transportPartnerForm.user_id =
                    this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  // formData.append("mb_certificate", this.mb_certificate);
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
                    "partners/getTransportRegistrationStatusCount"
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
                  persistent: true,
                })
                .onOk(() => {
                  this.transportPartnerForm.agent_id = "";
                  this.transportPartnerForm.transport_sub_name =
                    this.transportPartnerForm.name;
                  this.transportPartnerForm.user_id =
                    this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  // formData.append("mb_certificate", this.mb_certificate);
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
                  this.step = 1;
                  // this.$store.dispatch(
                  //   "partners/getTransportRegistrationStatusCount"
                  // );
                  // this.getTransportRegMaster();
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
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.transportPartnerForm.user_id = this.userDetails.account_id;
                this.updateTravelPartnerDetails(this.transportPartnerForm);
                this.transportPartnerForm = transportRegMaster();
                this.$refs.agentFormSubmit.resetValidation();
                this.addDataDialog = false;
                this.step = 1;
                this.onclickValue = "";
                this.resetFiles();
                this.subTransportView = false;
                this.getTransportRegMaster();
              });
          }
        });
      }
    },

    addTravelItems() {
      //console.log(this.editTravelPriceUpdate)
      this.$refs.addTravelForm.validate().then((valid) => {
        if (!valid) {
          this.$q.notify({
            position: "top",
            color: "negative",
            message: "Please Fill the Travel Items",
          });
        } else {
          this.travelLocation.city_id = this.userDetails.city_id;
          console.log(this.travelLocation);
          if (this.TravelItemsArrayData.length == 0) {
            var TravelItemsObj = {
              sno: this.TravelItemsArrayData.length + 1,
              partner_id: this.userDetails.account_id,
              agent_id: this.travelLocation.agent_id,
              transport_sub_id: this.travelLocation.transport_sub_id,
              transport_sub_name: this.travelLocation.transport_sub_name,
              travel_name: this.travelLocation.agent_name,
              no_of_seaters: this.travelLocation.no_of_seaters,
              travel_status: this.travelLocation.travel_status,
              city: this.travelLocation.city,
              city_id: this.userDetails.city_id,
              description: this.travelLocation.description,
              Vehicle_Name: this.travelLocation.vehicle_name,
              Vehicle_Type: this.travelLocation.vehicle_type,
              Vehicle_Trip: this.travelLocation.vehicle_per_trip,
              Vehicle_From: this.travelLocation.vehicle_from.point_type,
              Vehicle_To: this.travelLocation.vehicle_to.near_hospital_name,
              Vehicle_Day_Price: this.travelLocation.day_price,
              Vehicle_Night_Price: this.travelLocation.night_price,
              Vehicle_Image: this.vehicle_image,
            };

            // console.log(TravelItemsObj)

            this.TravelItemsArrayData.push(TravelItemsObj);
            //his.TravelItemsArrayAllData.push(this.travelLocation);
            this.showTable = true;
          } else {
            const exists = this.TravelItemsArrayData.some((item) => {
              return (
                item.Vehicle_Type === this.travelLocation.vehicle_type &&
                item.Vehicle_From ===
                  this.travelLocation.vehicle_from.point_type &&
                item.Vehicle_To ===
                  this.travelLocation.vehicle_to.near_hospital_name
              );
            });

            if (exists) {
              // Display a notification or take appropriate action for duplicate entry
              this.$q.notify({
                position: "top",
                color: "negative",
                message: "Duplicate entries Not Accepted.",
              });
            } else {
              // Add the new entry since it's not a duplicate
              //this.TravelItemsArrayData.push(this.travelLocation)
              this.TravelItemsArrayAllData.push(this.travelLocation);
              this.TravelItemsArrayData.push({
                partner_id: this.userDetails.account_id,
                sno: this.TravelItemsArrayData.length + 1,
                agent_id: this.travelLocation.agent_id,
                transport_sub_id: this.travelLocation.transport_sub_id,
                transport_sub_name: this.travelLocation.transport_sub_name,
                travel_name: this.travelLocation.agent_name,
                no_of_seaters: this.travelLocation.no_of_seaters,
                travel_status: this.travelLocation.travel_status,
                city: this.travelLocation.city,
                city_id: this.userDetails.city_id,
                description: this.travelLocation.description,
                Vehicle_Name: this.travelLocation.vehicle_name,
                Vehicle_Type: this.travelLocation.vehicle_type,
                Vehicle_Trip: this.travelLocation.vehicle_per_trip,
                Vehicle_From: this.travelLocation.vehicle_from.point_type,
                Vehicle_To: this.travelLocation.vehicle_to.near_hospital_name,
                Vehicle_Day_Price: this.travelLocation.day_price,
                Vehicle_Night_Price: this.travelLocation.night_price,
                Vehicle_Image: this.vehicle_image,
              });

              this.showTable = true;
            }
            console.log(this.TravelItemsArrayData);
          }
        }
      });
    },

    otheronPropertySubmit() {
      this.$refs.addOtherAccoPartner.validate().then((success) => {
        if (success) {
          if (this.otherAccomadationPartner.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                const formData = new FormData();
                this.otherAccomadationPartner.agent_name =
                  this.editedItem.agent_name;
                this.otherAccomadationPartner.transport_sub_name =
                  this.editedItem.transport_sub_name;
                formData.append("upload_image1", this.uploadImage);
                formData.append("upload_image2", this.uploadImage1);
                formData.append("upload_image3", this.uploadImage2);
                formData.append("upload_image4", this.uploadImage3);
                formData.append("upload_image5", this.uploadImage4);
                formData.append(
                  "property_details",
                  JSON.stringify(this.otherAccomadationPartner)
                );
                this.otherpropertyDetailsSaving(formData);
                this.resetFiles();

                // this.propertyPartnerForm = propertyRegistrationMaster();
                this.addOtherAccoPartner = false;
                this.details = false;
                this.otherAccomadationPartner = {};
                this.step = 1;
                this.loadTravelPropertyDetails(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.addOtherAccoPartner = true;
              });
          }
        }
      });
    },

    onOtherMedicalForm() {
      this.$refs.addOtherMedicalPartner.validate().then((success) => {
        if (this.otherMedicalPartner.agent_id != "") {
          if (success) {
            // if (this.equipmentRows.length > 0) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.otherMedicalPartner.account_id =
                  this.userDetails.account_id;
                const formData = new FormData();
                formData.append("equipment_image", this.equipment_image);
                formData.append(
                  "equipmentItemDetails",
                  JSON.stringify(this.otherMedicalPartner)
                );
                // formData.append(
                //   "equipmentRows",
                //   JSON.stringify(this.equipmentRows)
                // );
                this.otherMedicalSaving(formData);
                this.resetFiles();
                this.addOtherMedicalPartner = false;
                //this.$refs.addOtherMedicalPartner.resetValidation();
                // this.subPropertyView = true;
                // this.equipmentLocationForm = false;
                this.details = false;
                this.otherMedicalPartner = {};
                this.step = 1;
                this.loadTravelMedicalEqpData(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.emptyValue();
                this.addOtherMedicalPartner = true;
              });
          }
        }
      });
    },

    onOtherFoodForm() {
      this.$refs.addOtherFoodPartner.validate().then((success) => {
        if (this.otherFoodPartner.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.otherFoodPartner.account_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("food_image", this.food_image);
                formData.append(
                  "food_details",
                  JSON.stringify(this.otherFoodPartner)
                );
                // formData.append(
                //   "equipmentRows",
                //   JSON.stringify(this.equipmentRows)
                // );
                this.otherFoodSaving(formData);
                this.resetFiles();
                this.addOtherFoodPartner = false;
                //this.$refs.addOtherMedicalPartner.resetValidation();
                // this.subPropertyView = true;
                // this.equipmentLocationForm = false;
                this.details = false;
                this.otherFoodPartner = {};
                this.step = 1;
                this.getTravelfoodDetails(this.travelRestaurantEditedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.emptyValue();
                this.addOtherFoodPartner = true;
              });
          }
        }
      });
    },
    onTravelPropertyUpdate() {
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
              this.updateTravelPropertyDetails(this.travelEditedPropertyData);
              this.travelpropertyEditDialog = false;
              this.loadTravelPropertyDetails(this.editedItem);
              this.details = false;
              this.travelEditedPropertyData = {};
              this.step = 1;
            })
            .onCancel(() => {
              this.resetFiles();
              this.travelpropertyEditDialog = true;
            });
        }
      });
    },

    onTravelRoomsUpdate() {
      this.$refs.travelroomsEditDialog.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.editedTravelRoomsData.date_from =
                this.editedTravelRoomsData.date_from
                  .split("/")
                  .reverse()
                  .join("-");
              this.editedTravelRoomsData.date_to =
                this.editedTravelRoomsData.date_to
                  .split("/")
                  .reverse()
                  .join("-");
              this.updateTravelRoomsDetails(this.editedTravelRoomsData);
              this.travelroomsEditDialog = false;
              this.travelpropertyDataDialog = false;
              this.details = false;
              this.loadTravelRoomsDetails();
            })
            .onCancel(() => {
              this.resetFiles();
              this.travelroomsDataDialog = true;
            });
        }
      });
    },

    onTravelUpdatingEquipmentDetailForm() {
      this.$refs.editOtherEquipmentDetails.validate().then((success) => {
        if (this.editedTravelMedicalDetails.equipment_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.updatingTravelEquipmentDetailsForm(
                  this.editedTravelMedicalDetails
                );
                this.travelequipmentUpdatingDetails = false;
                // this.addDataDialog = false;
                // this.subPropertyView = true;
                // this.equipmentLocationForm = false;
                this.loadTravelMedicalEqpData(this.editedItem);
                this.details = false;
                this.travelequipmentUpdatingDetails = {};
                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.editOtherEquipmentDetails = true;
              });
          }
        }
      });
    },

    onTravelUpdatingFoodDetailForm() {
      this.$refs.travelfoodDetailsAddForm.validate().then((success) => {
        if (this.travelfoodDetails.equipment_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.updatingTravelFoodDetailsForm(this.travelfoodDetails);
                this.travelfoodDetailsAddForm = false;
                // this.addDataDialog = false;
                // this.subPropertyView = true;
                // this.equipmentLocationForm = false;
                this.getTravelfoodDetails(this.travelRestaurantEditedItem);
                this.details = false;
                this.travelfoodDetailsAddForm = {};
                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.travelfoodDetailsAddForm = true;
              });
          }
        }
      });
    },

    onTravelRoomsSubmit() {
      this.$refs.roomsFormBasic.validate().then((success) => {
        if (success) {
          if (this.travelRoomDetails.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.travelRoomDetails.account_id = this.userDetails.account_id;
                this.travelRoomDetails.date_from =
                  this.travelRoomDetails.date_from
                    .split("/")
                    .reverse()
                    .join("-");
                this.travelRoomDetails.date_to = this.travelRoomDetails.date_to
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
                  JSON.stringify(this.travelRoomDetails)
                );
                this.travelroomDetailsSaving(formData);
                this.resetFiles();
                this.travelroomsDialog = false;
                this.step = 1;
                this.travelRoomDetails = {};
                this.travelpropertyDataDialog = false;
                this.details = false;
              })
              .onCancel(() => {
                this.resetFiles();
                this.travelpropertyDataDialog = true;
              });
          }
        }
      });
    },

    checkFileSize(files) {
      return files.filter((file) => file.size < 2048576);
    },
    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 2 MB`,
      });
    },
    submitTravelLocData(val) {
      if (val == "submit") {
        this.$refs.addTravelForm.validate().then((success) => {
          if (this.travelLocation.agent_id != "") {
            if (success) {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  console.log(this.TravelItemsArrayData);
                  this.TravelItemsArrayData.forEach((item) => {
                    console.log(item);
                    const formData = new FormData();

                    formData.append("vehicle_image", item.Vehicle_Image);
                    formData.append("travelLocation", JSON.stringify(item));
                    this.travelDetailsSaving(formData);
                    this.resetFiles();
                    this.emptyValue();
                    this.travelLocation = travelLocRegistration();
                    this.$refs.addTravelForm.resetValidation();
                    this.addTravelForm = false;
                    // this.travelLocation = {};
                    this.details = false;
                    this.subTransportView = true;
                    this.step = 1;
                  });
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
                const formData = new FormData();
                this.travelLocationUpdating(this.travelLocation);
                this.travelLocation.user_id = this.userDetails.account_id;
                formData.append("vehicle_image", this.vehicle_image);
                formData.append(
                "updatetraveldetails",
                JSON.stringify(this.transporteditedItem)
              );
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
    // editTravel(item) {
    //   this.editedIndex = this.data.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.onclickValue = "edit";
    //   this.travelLocation.account_id = item.account_id;
    //   this.travelLocation.txn_id = item.txn_id;
    //   this.travelLocation.agent_id = item.agent_id;
    //   this.travelLocation.transport_sub_id = item.transport_sub_id;
    //   this.editedItem.agent_name = item.travel_name;
    //   this.travelLocation.agent_name = item.travel_name;
    //   this.travelLocation.transport_sub_name = item.transport_sub_name;
    //   this.editedItem.transport_sub_name = item.transport_sub_name;
    //   this.travelLocation.city = item.city;
    //   this.travelLocation.city_id = item.city_id;
    //   this.travelLocation.travel_status = item.travel_status;
    //   this.travelLocation.vehicle_name = item.vehicle_name;
    //   this.travelLocation.no_of_seaters = item.no_of_seaters;
    //   this.travelLocation.day_price = item.day_price;
    //   this.travelLocation.night_price = item.night_price;
    //   this.travelLocation.units = item.units;
    //   this.travelLocation.description = item.description;
    //   this.travelLocation.address = item.address;
    //   this.travelLocation.location = item.location;

    //   // this.travelLocation.special_offer = item.special_offer;
    //   this.travelLocation.vehicle_image = item.vehicle_image;
    //   this.vehicle_image = {
    //     name: item.vehicle_image ?? "",
    //   };
    //   this.addTravelForm = true;
    // },
    editTravelinlocation(item) {
      console.log("travelitem",item);
      this.editedIndex = this.data.indexOf(item);
      this.editedtravelLocation = Object.assign({}, item);
      // this.onclickValue = "edit";
      this.edittravelLocation.account_id = item.account_id;
      this.edittravelLocation.txn_id = item.txn_id;
      this.edittravelLocation.agent_id = item.agent_id;
      this.edittravelLocation.transport_sub_id = item.transport_sub_id;
      this.edittravelLocation.agent_name = item.travel_name;
      this.edittravelLocation.agent_name = item.travel_name;
      this.edittravelLocation.transport_sub_name = item.transport_sub_name;
      this.edittravelLocation.transport_sub_name = item.transport_sub_name;
      this.edittravelLocation.city = item.city;
      this.edittravelLocation.city_id = item.city_id;
      this.edittravelLocation.travel_status = item.travel_status;
      this.edittravelLocation.vehicle_name = item.vehicle_name;
this.edittravelLocation.vehicle_type = item.vehicle_type;
      this.edittravelLocation.vehicle_per_trip = item.units;
      this.edittravelLocation.vehicle_from = item.vehicle_from;
      this.edittravelLocation.vehicle_to = item.vehicle_to;
      this.edittravelLocation.no_of_seaters = item.no_of_seaters;
      this.edittravelLocation.day_price = item.day_price;
      this.edittravelLocation.night_price = item.night_price;
      // this.edittravelLocation.units = item.units;
      this.edittravelLocation.description = item.description;
      this.edittravelLocation.address = item.address;
      this.edittravelLocation.location = item.location;

      // this.travelLocation.special_offer = item.special_offer;
      this.edittravelLocation.vehicle_image = item.vehicle_image;
      this.vehicle_image = {
        name: item.vehicle_image ?? "",
      };
      this.editTravelForm = true;
    },
    showTravelData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedtravelLocation = Object.assign({}, item);
      this.edittravelLocation.vehicle_name = item.vehicle_name;
      this.edittravelLocation.day_price = item.day_price;
      this.edittravelLocation.night_price = item.night_price;
      this.edittravelLocation.units = item.units;
      this.edittravelLocation.description = item.description;
      // this.edittravelLocation.address = item.address;
      this.edittravelLocation.no_of_seaters = item.no_of_seaters;
      this.edittravelLocation.units = item.units;
      this.edittravelLocation.vehicle_image = item.vehicle_image;
      this.vehicle_image = {
        name: item.vehicle_image ?? "",
      };
      // this.roomsEditedItem.partner_id = item.partner_id;
      // this.roomsEditedItem.partner_sub_id = item.partner_sub_id;
      // this.editedRoomsData.partner_id = item.partner_id;
      // this.editedRoomsData.partner_sub_id = item.partner_sub_id;
      // this.editedRoomsData.property_txn_id = item.property_txn_id;
      this.travelviewdialog = true;
      this.propertyDataDialog = true;
    },
    editOtherRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedTravelRoomsData = Object.assign({}, item);
      this.travelroomsEditDialog = true;
      const amenity = [
        {
          amenity_name: item.facilities.split(","),
          icon_image: item.icon_image.split(","),
        },
      ];
      this.editedTravelRoomsData.txn_id = item.txn_id;
      this.editedTravelRoomsData.partner_id = item.partner_id;
      this.editedTravelRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedTravelRoomsData.sub_property_name = item.sub_property_name;
      this.editedTravelRoomsData.property_name = item.property_name;
      this.editedTravelRoomsData.room_category = item.room_category;
      this.editedTravelRoomsData.no_of_avail_rooms = item.no_of_avail_rooms;
      this.editedTravelRoomsData.room_type = item.room_type;
      this.editedTravelRoomsData.property_specialOffer =
        item.property_specialOffer;
      this.editedTravelRoomsData.date_from =
        this.editedTravelRoomsData.date_from;
      this.editedTravelRoomsData.date_to = this.editedTravelRoomsData.date_to;
      this.editedTravelRoomsData.date_from_up =
        this.editedTravelRoomsData.date_from;
      this.editedTravelRoomsData.date_to_up =
        this.editedTravelRoomsData.date_to;
      this.editedTravelRoomsData.facilities = amenity;
      this.editedTravelRoomsData.price = item.price;
      this.editedTravelRoomsData.other_amenities = item.other_amenities;
      this.editedTravelRoomsData.select_offer = item.select_offer;
      this.editedTravelRoomsData.enter_amount = item.enter_amount;
      this.editedTravelRoomsData.units = item.units;
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

    editTravelEquipmentForm(item) {
      this.travelequipmentUpdatingDetails = true;
      this.editedTravelMedicalDetails.account_id = item.account_id;
      this.editedTravelMedicalDetails.txn_id = item.txn_id;
      this.editedTravelMedicalDetails.item_name = item.item_name;
      this.editedTravelMedicalDetails.item_id = item.item_id;
      this.editedTravelMedicalDetails.price = item.price;
      this.editedTravelMedicalDetails.units = item.units;
      this.editedTravelMedicalDetails.unit_id = item.units_id;
      this.editedTravelMedicalDetails.equipment_id = item.equipment_id;
      this.editedTravelMedicalDetails.equipment_sub_id = item.equipment_sub_id;
      this.editedTravelMedicalDetails.agent_name = item.agent_name;
      this.editedTravelMedicalDetails.equipment_sub_name =
        item.equipment_sub_name;
      this.editedTravelMedicalDetails.medical_store = item.medical_store;
      this.editedTravelMedicalDetails.purchased_type = item.purchased_type;
      this.editedTravelMedicalDetails.address = item.address;
      this.editedTravelMedicalDetails.city = item.city;
      this.editedTravelMedicalDetails.city_id = item.city_id;
      this.editedTravelMedicalDetails.partner_status = item.partner_status;
      this.editedTravelMedicalDetails.location = item.location;
      // this.editedTravelMedicalDetails.special_offer = item.special_offer;
      this.equipment_image = { name: item.equipment_image ?? "" };
    },
    editOpenAddDialog() {
      this.step = 1;
      this.addDataDialog = true;
      this.onclickValue = "";
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.agent_id = "");
      this.step = 1;
      this.onclickValue = "";
      this.addDataDialog = true;
      this.details = false;
    },
    checkstate() {
      if (this.transportPartnerForm.country.name == "India") {
        this.indiastate = true;
        this.indiacity = true;
        this.otherstate = false;
        this.othercity = false;
      } else {
        this.emptyotherstate();
        this.otherstate = true;
        this.othercity = true;
        this.indiastate = false;
        this.indiacity = false;
      }
    },
    emptyotherstate() {
      this.transportPartnerForm.city = [];
      this.transportPartnerForm.state = [];
    },
    travelDetailsForm() {
      this.travelLocation.address = this.editedItem.address;
      this.travelLocation.location = this.editedItem.location;
      this.travelLocation.account_id = this.userDetails.account_id;
      this.travelLocation.agent_id = this.editedItem.agent_id;
      this.travelLocation.transport_sub_id = this.editedItem.transport_sub_id;
      this.travelLocation.agent_name = this.editedItem.agent_name;
      this.travelLocation.transport_sub_name =
        this.editedItem.transport_sub_name;
      this.travelLocation.travel_status = this.editedItem.status;
      this.travelLocation.city_id = this.editedItem.city_id;
      this.travelLocation.city = this.editedItem.city;
      this.onclickValue = "";
      this.emptyValue();
      this.addTravelForm = true;
    },
    otherAccomadationForm() {
      this.otherAccomadationPartner.account_id = this.userDetails.account_id;
      this.otherAccomadationPartner.partner_id = this.editedItem.agent_id;
      this.otherAccomadationPartner.partner_sub_id =
        this.editedItem.transport_sub_id;
      this.otherAccomadationPartner.partner_name = this.editedItem.agent_name;
      this.otherAccomadationPartner.partner_sub_name =
        this.editedItem.transport_sub_name;
      this.otherAccomadationPartner.partner_phone = this.editedItem.phone;
      this.otherAccomadationPartner.property_phone = this.editedItem.phone;
      this.otherAccomadationPartner.property_email_id =
        this.editedItem.email_id;
      this.otherAccomadationPartner.address = this.editedItem.address;
      this.otherAccomadationPartner.location = this.editedItem.location;
      this.otherAccomadationPartner.Name_Of_Contact_Person =
        this.editedItem.Name_Of_Contact_Person;

      this.onclickValue = "";
      this.emptyValue();
      this.addOtherAccoPartner = true;
    },
    otherMedicalForm() {
      this.otherMedicalPartner.account_id = this.userDetails.account_id;
      this.otherMedicalPartner.equipment_id = this.editedItem.equipment_id;
      this.otherMedicalPartner.equipment_sub_id =
        this.editedItem.equipment_sub_id;
      this.otherMedicalPartner.agent_name = this.editedItem.agent_name;
      this.otherMedicalPartner.equipment_sub_name =
        this.editedItem.equipment_sub_name;
      this.otherMedicalPartner.medical_store =
        this.editedItem.medical_store_name;
      this.otherMedicalPartner.address = this.editedItem.address;
      this.otherMedicalPartner.city = this.editedItem.city_name;
      this.otherMedicalPartner.city_id = this.editedItem.city_id;
      this.otherMedicalPartner.location = this.editedItem.location;
      this.otherMedicalPartner.partner_status = this.editedItem.status;
      this.onclickValue = "";
      this.emptyValue();
      this.addOtherMedicalPartner = true;
    },

    otherFoodForm() {
      this.otherFoodPartner.account_id = this.userDetails.account_id;
      this.otherFoodPartner.agent_id = this.travelRestaurantEditedItem.agent_id;
      this.otherFoodPartner.agent_sub_id =
        this.travelRestaurantEditedItem.agent_sub_id;
      this.otherFoodPartner.kitchen_txn_id =
        this.travelRestaurantEditedItem.txn_id;
      this.otherFoodPartner.kitchen_type =
        this.travelRestaurantEditedItem.type_of_kitchen;
      this.otherFoodPartner.kitchen_name =
        this.travelRestaurantEditedItem.name_of_kitchen;
      // this.otherFoodPartner.foodPartner_name = this.travelRestaurantEditedItem.agent_name;
      // this.otherFoodPartner.foodPartner_sub_name = this.travelRestaurantEditedItem.agent_sub_name;
      // this.otherFoodPartner.address = this.travelRestaurantEditedItem.address;
      // this.otherFoodPartner.city = this.travelRestaurantEditedItem.city;
      // this.otherFoodPartner.city_id = this.travelRestaurantEditedItem.city_id;
      // this.otherFoodPartner.location = this.travelRestaurantEditedItem.location;
      // this.otherFoodPartner.partner_status = this.travelRestaurantEditedItem.status;
      this.onclickValue = "";
      this.emptyValue();
      this.addOtherFoodPartner = true;
    },

    reset() {
      this.addTravelForm.resetValidation();
    },
    createValue(val, done) {
      this.showOk = false;
      console.log(val);
      if (done) {
        done(val);
      }
    },
    doStuff(val) {
      this.showOk = true;
      this.inputValue = val;
    },
    doOtherStuff() {
      this.showOk = false;
      this.$refs.myChipInput.add(this.inputValue);
      this.$refs.myChipInput.updateInputValue("");
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxy1.hide();
    },
    closeRestaurantEditDialog() {
      this.travelRestaurantEditDialog = false;
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.transport_sub_id = item.transport_sub_id;
      this.editedItem.agent_name = item.agent_name;
this.editedItem.Vehicle_type = item.Vehicle_type;
      this.editedItem.city = item.city;
      this.editedItem.city_id = item.city_id;
      this.editedItem.status = item.status;
      this.editedItem.address = item.address;
      this.editedItem.location = item.location;
      this.editedItem.Name_Of_Contact_Person = item.Name_Of_Contact_Person;
      // this.editedItem.phone = item.phone;
      this.transportRegistrationMasterExistingUser(item.agent_id);
      this.subTransportView = true;
    },
    editPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.addDataDialog = true;
      this.step = 1;
      this.onclickValue = "edit";
      this.transportPartnerForm.agent_id = item.agent_id;
      this.transportPartnerForm.transport_sub_id = item.transport_sub_id;
      // this.transportPartnerForm.name = item.transport_sub_name;
      this.transportPartnerForm.name = item.agent_name;
      this.transportPartnerForm.partner_sub_name = item.transport_sub_name;
      // this.transportPartnerForm.company_name = item.company_name;
      // this.transportPartnerForm.individual_name = item.individual_name;
      this.transportPartnerForm.phone = item.phone;
      this.transportPartnerForm.fax = item.fax;
      this.transportPartnerForm.alternate_no = item.alternate_no;
      this.transportPartnerForm.email_id = item.email_id;
      this.transportPartnerForm.description = item.description;
      this.transportPartnerForm.building_no = item.building_no;
      this.transportPartnerForm.street = item.street;
      this.transportPartnerForm.land_mark = item.land_mark;
      this.transportPartnerForm.country = item.country;
      this.transportPartnerForm.state = item.state;
      this.transportPartnerForm.city = item.city;
      this.transportPartnerForm.prevstate = item.state;
      this.transportPartnerForm.prevcity = item.city;
      this.transportPartnerForm.city_id = item.city_id;
      this.transportPartnerForm.pin_code = item.pin_code;
      this.transportPartnerForm.pan = item.pan;
      this.pan_card_file = {
        name: item.pan_loc ?? "",
      };
      this.transportPartnerForm.aadhar = item.aadhar;
      this.addhaar_no = {
        name: item.addhaar_loc ?? "",
      };
      this.transportPartnerForm.gstin = item.gstin;
      this.gst_tin = {
        name: item.gst_tin_loc ?? "",
      };
      this.mh_agreement = {
        name: item.mh_agreement_loc ?? "",
      };
      this.mb_certificate = {
        name: item.mb_certificate_loc ?? "",
      };
      this.undertaking_certificate = {
        name: item.undertaking_certificate ?? "",
      };
      this.property_tax = {
        name: item.property_tax ?? "",
      };
      this.fire_safety = {
        name: item.fire_safety ?? "",
      };
      this.transportPartnerForm.bankAccountNo = item.bankAccountNo;
      this.transportPartnerForm.bankName = item.bankName;
      this.transportPartnerForm.branchName = item.branchName;
      this.transportPartnerForm.ifsc = item.ifsc;
      this.cancelled_cheque = {
        name: item.cancelled_cheque ?? "",
      };
    },
    editTravelPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.travelEditedPropertyData = Object.assign({}, item);
      this.travelEditedPropertyData.partner_id = item.partner_id;
      this.travelEditedPropertyData.partner_sub_id = item.partner_sub_id;
      this.travelEditedPropertyData.partner_name = item.partner_name;
      this.travelEditedPropertyData.partner_sub_name = item.sub_partner_name;
      this.travelEditedPropertyData.property_name = item.property_name;
      this.travelEditedPropertyData.sub_property_name = item.sub_property_name;
      this.travelEditedPropertyData.property_phone = item.property_phone;
      this.travelEditedPropertyData.property_email = item.property_email;
      this.travelEditedPropertyData.property_latitude = item.property_latitude;
      this.travelEditedPropertyData.property_longitude =
        item.property_longitude;
      this.travelEditedPropertyData.property_description =
        item.property_description;
      this.travelEditedPropertyData.amenities = item.amenity_name;
      this.travelEditedPropertyData.building_no = item.building_no;
      this.travelEditedPropertyData.street = item.street;
      this.travelEditedPropertyData.land_mark = item.land_mark;
      this.travelEditedPropertyData.country = item.country;
      this.travelEditedPropertyData.state_name = item.state_name;
      this.travelEditedPropertyData.city_name = item.city_name;
      this.travelEditedPropertyData.pin_code = item.pin_code;
      this.travelEditedPropertyData.txn_id = item.txn_id;
      this.travelEditedPropertyData.checkIn_time = item.checkIn_time;
      this.travelEditedPropertyData.checkOut_time = item.checkOut_time;
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
      this.travelpropertyEditDialog = true;
    },

    editTravelFoodItem(item) {
      this.step = 1;
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  this.addDataDialog = true;
      this.travelfoodDetailsAddForm = true;
      //this.onclickValue = "edit";
      this.travelfoodDetails.account_id = item.account_id;
      this.travelfoodDetails.item_txn_id = item.item_txn_id;
      this.travelfoodDetails.agent_id = item.agent_id;
      this.travelfoodDetails.agent_sub_id = item.agent_sub_id;
      this.travelfoodDetails.transport_sub_id = item.agent_sub_id;
      // this.editedItem.agent_name = item.foodPartner_name;
      // this.editedItem.agent_sub_name = item.foodPartner_sub_name;
      // this.travelfoodDetails.agent_name = item.foodPartner_name;
      // this.travelfoodDetails.sub_Name = item.foodPartner_sub_name;
      // this.travelfoodDetails.address = item.address;
      // this.travelfoodDetails.city = item.city;
      // this.travelfoodDetails.location = item.location;
      // this.travelfoodDetails.partner_status = item.partner_status;
      this.travelfoodDetails.city_id = item.city_id;
      this.travelfoodDetails.gstin = item.gstin;
      this.travelfoodDetails.fssai_no = item.fssai_no;
      this.travelfoodDetails.kitchen_name = item.kitchen_name;
      this.travelfoodDetails.kitchen_type = item.kitchen_type;
      this.travelfoodDetails.item_name = item.item_name;
      // this.travelfoodDetails.food_type_id = item.food_type_id;
      this.travelfoodDetails.food_items_name = item.food_items_name;
      this.travelfoodDetails.units = item.units;
      this.travelfoodDetails.price = item.price;
      this.travelfoodDetails.location = item.location;
      this.travelfoodDetails.items_available_to = item.items_available_to;
      this.travelfoodDetails.items_available_from = item.items_available_from;
      this.travelfoodDetails.food_image = item.food_image;

      this.food_image = {
        name: item.food_image ?? "",
      };
    },

    openTravelRoomsDialog() {
      this.travelRoomDetails.partner_id =
        this.travelPropertyEditedItem.partner_id;
      this.travelRoomDetails.partner_sub_id =
        this.travelPropertyEditedItem.partner_sub_id;
      this.travelRoomDetails.partner_name =
        this.travelPropertyEditedItem.partner_name;
      // this.travelRoomDetails.partner_phone = this.propertyEditedItem.partner_phone;
      this.travelRoomDetails.sub_partner_name =
        this.travelPropertyEditedItem.sub_partner_name;
      this.travelRoomDetails.property_name =
        this.travelPropertyEditedItem.property_name;
      this.travelRoomDetails.sub_property_name =
        this.travelPropertyEditedItem.sub_property_name;
      this.travelRoomDetails.property_txn_id =
        this.travelPropertyEditedItem.txn_id;

      this.travelroomsDialog = true;
    },

    showTravelRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.travelroomEditedItem = Object.assign({}, item);
      this.travelroomEditedItem.partner_id = item.partner_id;
      this.travelroomEditedItem.partner_sub_id = item.partner_sub_id;
      this.editedTravelRoomsData.partner_id = item.partner_id;
      this.editedTravelRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedTravelRoomsData.property_txn_id = item.property_txn_id;
      this.travelroomsDataDialog = true;
      this.travelpropertyDataDialog = true;
    },

    showTravelPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.travelPropertyEditedItem = Object.assign({}, item);
      this.travelPropertyEditedItem.partner_id = item.partner_id;
      this.travelPropertyEditedItem.partner_sub_id = item.partner_sub_id;
      this.travelpropertyDataDialog = true;
      this.loadTravelRoomsDetails(this.travelPropertyEditedItem);
    },
    viewPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.account_id = this.userDetails.account_id;
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.transport_sub_id = item.transport_sub_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.transport_sub_name = item.transport_sub_name;
      this.details = true;
      this.loadTravelPropertyDetails(this.editedItem);
      this.getTravelRestaurantDetails(this.editedItem);
      this.getTransportDetailsSaving(this.editedItem);
      this.getTravelMedicalStoreDetailsSaving(this.editedItem);
    },
    onTransportSubmit() {
      this.$refs.transportFormBasic.validate().then((success) => {
        if (success) {
          if (this.transportDetails.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
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
                this.transportDetailsSaving(formData);
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
    opentransportDialog() {
      this.transportDetails.account_id = this.userDetails.account_id;
      this.transportDetails.agent_id = this.editedItem.agent_id;
      this.transportDetails.transport_sub_id = this.editedItem.transport_sub_id;
      this.transportDetails.agent_name = this.editedItem.agent_name;
      this.transportDetails.transport_sub_name =
        this.editedItem.transport_sub_name;
      this.onclickValue = "";

      this.resetFiles();
      this.transportDialog = true;
    },
    showTransportDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.transportViewDialog = true;
      this.getTravelDetailsSaving(this.editedItem);
      this.getTransportDetailsSaving(this.editedItem);
    },
    showTravelRestaurantData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.travelRestaurantEditedItem = Object.assign({}, item);
      // this.travelRestaurantEditedItem.agent_id = item.partner_id;
      // this.travelRestaurantEditedItem.agent_sub_id = item.partner_sub_id;
      this.travelRestaurantDataDialog = true;

      this.getTravelfoodDetails(item);
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
      this.transporteditedItem.enter_amount = item.enter_amount;
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
      this.transporteditedItem.state_id = item.state_id;
      this.transporteditedItem.city_id = item.city_id;
      this.transporteditedItem.pin_code = item.pin_code;
      this.transporteditedItem.transport_latitude = item.transport_latitude;
      this.transporteditedItem.transport_longitude = item.transport_longitude;
      this.transporteditedItem.upload_image1 = {
        name: item.upload_image1 ?? "",
      };
      this.transporteditedItem.upload_image2 = {
        name: item.upload_image2 ?? "",
      };
      this.transportEditDialog = true;
    },

    onTransportUpdatingDetail() {
      this.$refs.transportEditDialog.validate().then((success) => {
        if (this.transporteditedItem.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                const formData=new FormData();
                formData.append("upload_image1", this.transporteditedItem.upload_image1);
                formData.append("upload_image2", this.transporteditedItem.upload_image2);
                formData.append(
                "updatetransport_details",
                JSON.stringify(this.transporteditedItem)
              );
                // this.updatingTransportDetails(this.transporteditedItem);
                this.updatingTransportDetails(formData);
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
    onTravelUpdatingDetail() {
      this.$refs.editTravelForm1.validate().then((success) => {
        if (this.edittravelLocation.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                console.log("this.edittravelLocation",this.edittravelLocation);
                const formData=new FormData();
                formData.append("vehicle_image", this.vehicle_image);

                formData.append(
                "updatetransport_details",
                JSON.stringify(this.edittravelLocation)
              );
                // this.updatingTransportDetails(this.transporteditedItem);
                this.travelLocationdetailsUpdating(formData);

                this.editTravelForm = false;
                this.getTravelDetailsSaving(this.editedItem);

                this.details = false;
                this.resetFiles();

              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.editTravelForm = true;
              });
          }
        }
      });
    },

    getOtherAmenities(facilities) {
      for (let i = 0; i < facilities.length; i++) {
        if (facilities[i].amenity_name == "Others") {
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
    showDocumentTravelfood(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhfpFilePath + file;
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
    emptyCities() {
      this.transportPartnerForm.city = "";
      this.travelLocation.city = "";
    },
    closeAddTravelDialog() {
      this.addDataDialog = false;
      this.details = false;
      this.resetFiles();
      this.transportPartnerForm = transportRegMaster();
      // this.$refs.agentFormSubmit.resetValidation();
    },
    closeRestaurantDialog() {
      this.travelRestaurantDialog = false;
    },
    emptyMedicalItems() {
      this.otherMedicalPartner.units = [];
      this.editedTravelMedicalDetails.units = [];
    },
    emptyValue() {
      this.travelLocation.day_price = [];
      this.travelLocation.night_price = [];
      // this.travelLocation.vehicle_type = [];
      this.travelLocation.units = [];
      this.travelLocation.vehicle_name = [];
      this.travelLocation.no_of_seaters = [];
      this.travelLocation.description = "";
      // this.travelLocation.special_offer = [];
      this.vehicle_image = [];
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
      this.uploadImage = [];
      this.uploadImage1 = [];
      this.uploadImage2 = [];
      this.uploadImage3 = [];
      this.uploadImage4 = [];
      this.equipment_image = [];
      this.food_image = [];
      this.upload_Image = [];
      this.upload_Image1 = [];
      this.upload_Image2 = [];
      this.upload_fssai = [];
      this.upload_fssai_1 = [];
    },
    filterFnCountry(val, update) {
      if (val === "") {
        update(() => {
          this.countryOptions = this.countriescheck;
        });
        return this.countryOptions;
      }
      update(() => {
        const needle = this.countriescheck.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.countryOptions = needle;
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

    filterFnStates(val, update) {
      if (val === "") {
        update(() => {
          this.stateOptions = this.states;
        });
        return this.stateOptions;
      }
      update(() => {
        const needle = this.states.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.stateOptions = needle;
        return this.stateOptions;
      });
    },

    filterFnCities(val, update) {
      if (val === "") {
        update(() => {
          this.cityOptions = this.cities;
        });
        return this.cityOptions;
      }
      update(() => {
        const needle = this.cities.filter((items) => {
          return Object.values(items).some((item) =>
            item.toLowerCase().includes(val.toLowerCase())
          );
        });
        this.cityOptions = needle;
        return this.cityOptions;
      });
    },
    exportTable() {
      // naive encoding to csv format
      const content = [
        this.food_registration_columns.map((col) => wrapCsvValue(col.label)),
      ]
        .concat(
          this.food_registration_rows.map((row) =>
            this.food_registration_columns
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
    openTravelRestaurantDialog() {
      this.travelRestaurantDetails.agent_id = this.editedItem.agent_id;
      this.travelRestaurantDetails.account_id = this.editedItem.account_id;
      this.travelRestaurantDetails.agent_sub_id =
        this.editedItem.transport_sub_id;
      this.travelRestaurantDetails.food_partner_name =
        this.editedItem.agent_name;
      this.travelRestaurantDetails.phone = this.editedItem.phone;
      this.travelRestaurantDetails.food_partner_sub_name =
        this.editedItem.transport_sub_name;
      this.travelRestaurantDetails.partner_status = this.editedItem.status;
      this.resetFiles();
      this.travelRestaurantDialog = true;
    },
    onTravelRestaurantSubmit() {
      this.$refs.travelRestaurantFormBasic.validate().then((success) => {
        if (success) {
          if (this.travelRestaurantDetails.agent_id != "") {
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
                formData.append(
                  "restaurant_details",
                  JSON.stringify(this.travelRestaurantDetails)
                );
                this.travelRestaurantSaving(formData);
                this.resetFiles();
                this.travelRestaurantDialog = false;
                this.details = false;
                this.travelRestaurantDetails = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.travelRestaurantDialog = true;
              });
          }
        }
      });
    },
    editTravelRestaurantData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editTravelRestaurantDatails = Object.assign({}, item);
      this.editTravelRestaurantDatails.agent_id = item.agent_id;
      this.editTravelRestaurantDatails.agent_sub_id = item.agent_sub_id;
      this.editTravelRestaurantDatails.agent_name = item.agent_name;
      this.editTravelRestaurantDatails.agent_sub_name = item.agent_sub_name;
      this.editTravelRestaurantDatails.restaurant_phone = item.restaurant_phone;
      this.editTravelRestaurantDatails.Name_Of_Contact_Person =
        item.Name_Of_Contact_Person;
      this.editTravelRestaurantDatails.restaurant_email = item.restaurant_email;
      this.editTravelRestaurantDatails.restaurant_latitude =
        item.restaurant_latitude;
      this.editTravelRestaurantDatails.restaurant_longitude =
        item.restaurant_longitude;
      this.editTravelRestaurantDatails.restaurant_description =
        item.restaurant_description;
      this.editTravelRestaurantDatails.building_no = item.building_no;
      this.editTravelRestaurantDatails.street = item.street;
      this.editTravelRestaurantDatails.land_mark = item.land_mark;
      this.editTravelRestaurantDatails.state_name = item.state_name;
      this.editTravelRestaurantDatails.city_name = item.city_name;
      this.editTravelRestaurantDatails.pin_code = item.pin_code;
      this.editTravelRestaurantDatails.txn_id = item.txn_id;
      this.editTravelRestaurantDatails.opening_time = item.opening_time;
      this.editTravelRestaurantDatails.closing_time = item.closing_time;
      this.editTravelRestaurantDatails.date_from = item.date_from;
      this.editTravelRestaurantDatails.date_to = item.date_to;
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
      this.travelRestaurantEditDialog = true;
    },
    updateTravelRestaurant() {
      this.$refs.editTravelRestaurantForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.updateTravelRestaurantDetails(
                this.editTravelRestaurantDatails
              );
              this.travelRestaurantEditDialog = false;
            })
            .onCancel(() => {
              this.resetFiles();
              this.travelRestaurantEditDialog = true;
            });
        }
      });
    },

    travelMedicalstoreDetailsForm() {
      this.TravelMedicalStore.account_id = this.userDetails.account_id;
      this.TravelMedicalStore.equipment_id = this.editedItem.agent_id;
      this.TravelMedicalStore.equipment_sub_id =
        this.editedItem.transport_sub_id;
      this.TravelMedicalStore.agent_name = this.editedItem.agent_name;
      this.TravelMedicalStore.equipment_sub_name =
        this.editedItem.transport_sub_name;
      this.TravelMedicalStore.email_id = this.editedItem.email_id;
      this.TravelMedicalStore.phone = this.editedItem.phone;
      // this.TravelMedicalStore.partner_status = this.editedItem.status;
      this.travelMedicalStoreDetails = true;
    },
    submitTravelMedicalStoreData() {
      this.$refs.addMedicalForm.validate().then((success) => {
        if (success) {
          if (this.TravelMedicalStore.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.TravelMedicalStore.user_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("upload_image_1", this.uploadImage);
                formData.append("upload_image_2", this.uploadImage1);
                formData.append("upload_image_3", this.uploadImage2);
                formData.append(
                  "addMedStoresData",
                  JSON.stringify(this.TravelMedicalStore)
                );
                this.saveTravelMedicalStoresData(formData);
                this.resetFiles();
                this.travelMedicalStoreDetails = false;
                this.details = false;
                this.TravelMedicalStore = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.travelMedicalStoreDetails = true;
              });
          }
        }
      });
    },
    showTravelMedicalDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.travelmedicalStoreViewDialog = true;
      this.loadTravelMedicalEqpData(this.editedItem);
    },

    editTravelMedicalStoreDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.TravelmedicalstoreeditedItem = Object.assign({}, item);
      this.TravelmedicalstoreeditedItem.txn_id = item.txn_id;
      this.TravelmedicalstoreeditedItem.equipment_id = item.equipment_id;
      this.TravelmedicalstoreeditedItem.equipment_sub_id =
        item.equipment_sub_id;
      this.TravelmedicalstoreeditedItem.account_id = item.account_id;
      this.TravelmedicalstoreeditedItem.equipment_sub_name =
        item.equipment_sub_name;
      this.TravelmedicalstoreeditedItem.agent_name = item.agent_name;
      this.TravelmedicalstoreeditedItem.medical_store_name =
        item.medical_store_name;
      this.TravelmedicalstoreeditedItem.special_offer = item.special_offer;
      this.TravelmedicalstoreeditedItem.from_date = item.from_date;
      this.TravelmedicalstoreeditedItem.to_date = item.to_date;
      this.TravelmedicalstoreeditedItem.description = item.description;
      this.TravelmedicalstoreeditedItem.phone = item.phone;
      this.TravelmedicalstoreeditedItem.email = item.email;
      this.TravelmedicalstoreeditedItem.name_of_contact_person =
        item.name_of_contact_person;
      this.TravelmedicalstoreeditedItem.building_no = item.building_no;
      this.TravelmedicalstoreeditedItem.street = item.street;
      this.TravelmedicalstoreeditedItem.land_mark = item.land_mark;
      this.TravelmedicalstoreeditedItem.city_name = item.city_name;
      this.TravelmedicalstoreeditedItem.state_name = item.state_name;
      this.TravelmedicalstoreeditedItem.pin_code = item.pin_code;
      this.TravelmedicalstoreeditedItem.latitude = item.latitude;
      this.TravelmedicalstoreeditedItem.longitude = item.longitude;
      this.TravelmedicalstoreeditedItem.select_offer = item.select_offer;
      this.TravelmedicalstoreeditedItem.enter_amount = item.enter_amount;
      this.TravelmedicalstoreeditedItem.uploadImage1 = {
        name: item.upload_image1 ?? "",
      };
      this.TravelmedicalstoreeditedItem.uploadImage2 = {
        name: item.upload_image2 ?? "",
      };
      this.TravelmedicalstoreeditedItem.uploadImage3 = {
        name: item.upload_image3 ?? "",
      };
      this.travelmedicalStoreEditDialog = true;
    },

    onTravelMedicalStoreUpdatingDetail() {
      this.$refs.addMedicalForm.validate().then((success) => {
        if (this.TravelmedicalstoreeditedItem.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.updatingTravelMedicalStoreDetails(
                  this.TravelmedicalstoreeditedItem
                );
                this.travelmedicalStoreEditDialog = false;

                this.details = false;

                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.travelmedicalStoreEditDialog = true;
              });
          }
        }
      });
    },

    closeAddMedicalStore() {
      this.travelMedicalStoreDetails = false;
      this.travelmedicalStoreEditDialog = false;
    },

    deleteRow(sno) {
      const index = this.TravelItemsArrayData.findIndex(
        (item) => item.sno === sno
      );
      if (index !== -1) {
        this.TravelItemsArrayData.splice(index, 1);

        // After deleting a row, update sno values to maintain sequential order
        this.updateSerialNumbers();
      }
    },

    updateSerialNumbers() {
      for (let i = 0; i < this.TravelItemsArrayData.length; i++) {
        this.TravelItemsArrayData[i].sno = i + 1;
      }
    },
  },
};
</script>
