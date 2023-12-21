<template>
  <div>
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
        <q-table
          :data="food_partner_registration_rows"
          :columns="food_partner_registration_columns"
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
                <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>

      <!-- ADD NEW DETAILS -->

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
            <q-btn
              dark
              flat
              icon="close"
              color="white"
              @click="closeAddFoodDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <!-- <q-form @submit="onSubmit" ref="foodPartnerForm"> -->
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
                        >1. Food Partner Name *
                      </span>
                      <q-input
                        class="row col-3 q-mt-sm"
                        dense
                        outlined
                        v-model="foodPartnerForm.name"
                        label="Food Partner Name *"
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
                        label="2. Is The Business Entity Name is same as Food partner name?"
                      />
                      <div class="row col-6 q-ml-sm">
                        <q-input
                          dense
                          outlined
                          readonly
                          v-model="this.foodPartnerForm.name"
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
                          v-model="foodPartnerForm.partner_sub_name"
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
                  <!-- <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="foodPartnerForm.company_name"
                    label="Company Name "
                    hide-bottom-space
                    style="width: 300px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" />
                    </template>
                  </q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="foodPartnerForm.individual_name"
                    v-if="foodPartnerForm.company_name != ''"
                    label="Individual Name"
                    hide-bottom-space
                    style="width: 300px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" /> </template
                  ></q-input> -->
                  <div class="row col-12 q-mt-lg justify-center">
                    <div class="row col-3 q-mt-sm">
                      <span name="food" class="text-bold"
                        >3. Enter Phone Number *
                      </span>
                      <q-input
                        class="col-3 q-mt-sm"
                        dense
                        outlined
                        hide-bottom-space
                        v-model="foodPartnerForm.phone"
                        label="Phone *"
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
                          label="4.Is Your Whatsapp Number is same as Your Phone Number?"
                        />
                        <div class="row col-6 q-ml-sm">
                          <q-input
                            dense
                            outlined
                            v-model="this.foodPartnerForm.phone"
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
                            v-model="foodPartnerForm.fax"
                            lazy-rules
                            mask="##########"
                            hide-bottom-space
                            label="Whatsapp *"
                            style="width: 250px"
                            label-color="black"
                            :rules="[required('Whatsapp no'), phone()]"
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
                        v-model="foodPartnerForm.alternate_no"
                        lazy-rules
                        mask="##########"
                        label="Alternate Number"
                        style="width: 250px"
                        label-color="black"
                      >
                        <template v-slot:prepend>
                          <q-icon name="mdi-phone" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                    <div
                     class="row col-6 justify-center">
                      <q-input
                        dense
                        outlined
                        v-model="foodPartnerForm.email_id"
                        label="Email *"
                        lazy-rules
                        class="col-3"
                        hide-bottom-space
                        style="width: 250px"
                        label-color="black"
                        :rules="[required('Email'), email()]"
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
                        v-model="foodPartnerForm.description"
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
                <div class="row justify-center">
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
                </div>
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
                    v-model="foodPartnerForm.building_no"
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
                    v-model="foodPartnerForm.street"
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
                    v-model="foodPartnerForm.land_mark"
                    label="Landmark "
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
                    use-input
                    hide-selected
                    fill-input
                    @filter="filterFnCountry"
                    :options="countryOptions"
                    @input="checkstate()"
                    option-value="name"
                    option-label="name"
                    class="row col-3"
                    v-model="foodPartnerForm.country"
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
                    v-if="indiastate == true"
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    fill-input
                    :options="stateOptions"
                    @filter="filterFnStates"
                    class="row col-3"
                    option-value="state_id"
                    option-label="state_name"
                    v-model="foodPartnerForm.state"
                    @input="
                      loadAllCities(foodPartnerForm.state);
                      emptyCities();
                    "
                    label="State *"
                    label-color="black"
                    :rules="[required('Enter State')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-select>

                  <q-select
                    ref="indiacity"
                    v-if="indiacity == true"
                    dense
                    outlined
                    use-input
                    hide-selected
                    :options="cityOptions"
                    @filter="filterFnCities"
                    class="row col-3"
                    option-value="city_id"
                    option-label="city"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="foodPartnerForm.city"
                    label="City *"
                    label-color="black"
                    :rules="[required('Enter City')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-select>
                  <q-input
                    ref="otherstate"
                    v-if="otherstate == true"
                    dense
                    outlined
                    v-model="foodPartnerForm.state1"
                    label="State *"
                    class="row col-3"
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
                    v-model="foodPartnerForm.city1"
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
                    v-model="foodPartnerForm.pin_code"
                    label="Pincode/Zipcode *"
                    label-color="black"
                    :rules="pinnumberRules"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-form>
              <q-stepper-navigation>
                <div class="row justify-center">
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
                </div>
              </q-stepper-navigation>
            </q-step>
            <q-step :name="3" :done="step > 3" title="eKYC" icon="assignment">
              <q-form ref="agentFormStaDocs">
                <div
                  class="q-pa-md row q-gutter-md items-start text-h6 text-weight-bold"
                ></div>
                <div
                  class="q-pa-md row q-gutter-md items-start text-h6 text-weight-bold"
                >
                  Proof of Identity and Proof of Address:
                </div>
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="foodPartnerForm.pan"
                    mask="AAAAA####A"
                    label="PAN No"
                    v-bind:readonly="onclickValue === 'edit'"
                    label-color="black"
                    :rules="[required('Pancard'), panNumber()]"
                  />

                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    v-bind:readonly="this.onclickValue == 'edit'"
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
                    v-bind:readonly="this.onclickValue == 'edit'"
                    v-model="foodPartnerForm.aadhar"
                    label="AADHAAR No"
                    mask="############"
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
                    v-model="addhaar_no"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Upload AADHAAR"
                    v-bind:readonly="this.onclickValue == 'edit'"
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
                    :options="gstOptions"
                    v-model="foodPartnerForm.gst_registration"
                    label="GST Registration*"
                    label-color="black"
                    :rules="[required('Property Type')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
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
                    v-model="foodPartnerForm.gstin"
                    label="GSTIN"
                    :rules="[required('Enter GSTIN')]"
                    mask="##AAAAA####A###"
                    label-color="black"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    v-if="this.foodPartnerForm.gst_registration == 'Registered'"
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
                      <q-icon
                        name="attach_file"
                        color="white"
                      />
                    </template>
                  </q-file>
                  <q-input
                    dense
                    outlined
                    v-model="foodPartnerForm.fssai_no"
                    label="FSSAI Licence"
                    mask="##############"
                    label-color="black"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                </div>
                <div
                  class="q-pa-md row q-gutter-md items-start text-h6 text-weight-bold"
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
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
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
                    hint="Food Partner Photo"
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
                    type="file"
                    v-bind:readonly="this.onclickValue == 'edit'"
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
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="food_tax"
                    type="file"
                    v-bind:readonly="this.onclickValue == 'edit'"
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
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="food_safety"
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
              </q-form>
              <q-stepper-navigation>
                <div class="row justify-center">
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
                </div>
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
                    v-model="foodPartnerForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="number"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="foodPartnerForm.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="foodPartnerForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="foodPartnerForm.ifsc"
                    label="IFSC/SWIFT Code"
                    label-color="black"
                    :rules="[required('IFSC code')]"
                  />
                  <!-- <q-input
                    class="hint-bold"
                    dense
                    filled
                    v-model="foodPartnerForm.file_upload5"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
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
                    v-model="file_upload5"
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
                    :rules="[
                      (val) =>
                        (val != '' && file_upload5 != '') ||
                        'Please Upload Cancelled Cheque Doc',
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
                <q-card-actions>
                  <q-toggle
                    v-model="foodPartnerForm.accept"
                    label="I accept the Food Partner Registration"
                  />
                </q-card-actions>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <div class="row justify-center">
                  <q-btn
                    color="secondary"
                    label="Submit"
                    v-if="this.onclickValue != 'edit'"
                    @click="onSubmit('submit')"
                    :disable="this.foodPartnerForm.accept == false"
                  />
                  <q-btn
                    color="secondary"
                    label="Update"
                    class="text-bold"
                    @click="onSubmit('update')"
                    v-if="this.onclickValue == 'edit'"
                    :disable="this.foodPartnerForm.accept == false"
                  />
                  <q-btn
                    outline
                    @click="step = 3"
                    color="primary"
                    label="Back"
                    class="q-ml-sm"
                  />
                </div>
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
          <!-- </q-form> -->
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
                View of Food Partner Registration Details:
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
                    @click="openRestaurantDialog()"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Restaurant</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    dense
                    v-close-popup
                    @click="otherFoodAccomadationForm()"
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
                    @click="foodMedicalstoreDetailsForm()"
                    v-if="userDetails.medicalstatus == 'Approved'"
                  >
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Medical Store</q-item-label>
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                    <div style="height: 200px">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                        <div class="col-3 text-left text-black">GSTIN</div>
                        <div class="col-9 text-left text-grey">
                          : {{ editedItem.gstin }}
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
                    <div class="col-3">
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
                      </tr>
                    </div>

                    <div class="col-3">
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
                            @click="showDocument(editedItem.mh_agreement_loc)"
                          />
                        </td>
                      </tr>
                    </div>

                    <!-- <div class="col-3">
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
                                'Food Safety Certificate'
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
                                editedItem.food_tax,
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
                                editedItem.file_upload5,
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
            <q-separator />
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                  :data="food_restaurant_data_rows"
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
                      <q-btn
                        class="q-ml-xs"
                        color="secondary"
                        @click="editFoodRestaurantData(props.row)"
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
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
            v-if="userDetails.accstatus == 'Approved'"
          >
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
                  :data="foodproperty_data_rows"
                  :columns="foodproperty_data_columns"
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
                        @click="showOtherPropertyData(props.row)"
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
                        @click="editOtherPropertyData(props.row)"
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
            style="padding-top: 0px"
            v-if="userDetails.medicalstatus == 'Approved'"
          >
            <q-markup-table class="q-ma-xs">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-card flat bordered class="bg-white">
                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                    <q-icon name="manage_accounts" color="black" size="1.5em" />
                    Medical Store Details
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
                      :data="foodmedicalstore_item_rows"
                      :columns="foodmedicalstore_item_columns"
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
                            @click="editFoodMedicalStoreDetails(props.row)"
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
            </q-markup-table>
          </div>
          <!-- Sachin Medical Store Details Table End -->

          <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-city" color="black" size="1.5em" />
                  Equipment Details
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
                  :data="otherequipment_item_rows"
                  :columns="otherequipment_item_columns"
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
                        color="primary"
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
                        @click="editOtherEquipmentForm(props.row)"
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
            </div> -->
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
            v-if="userDetails.travelstatus == 'Approved'"
          >
            <q-card flat bordered class="bg-white">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Transport Details
              </q-bar>

              <div class="q-pa-md" style="padding-top: 10px">
                <q-table
                  :data="foodtransport_item_rows"
                  :columns="foodtransport_item_columns"
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
                          showDocument(props.row.upload_image1, 'Vehicle Image')
                        "
                      />
                    </q-td>
                  </template>
                </q-table>
              </div>
              <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card flat bordered class="bg-white">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Travel Details
              </q-bar>
              <div class="q-pa-md" style="padding-top: 10px">
                <q-table
                  :data="othertravel_item_rows"
                  :columns="othertravel_item_columns"
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
                        @click="editOtherTravel(props.row)"
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
                          showDocumenttravel(props.row.vehicle_image, 'Vehicle Image')
                        "
                      />
                    </q-td>
                  </template>
                </q-table>
              </div> -->
              <!-- <template v-slot:top-right="props">
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
                </template> -->
            </q-card>
          </div>
        </q-layout>
      </q-dialog>
      <!-- Other Property Data Show And Add Other Room Data Start -->
      <q-dialog
        v-model="propertyOtherDataDialog"
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
                {{ otherpropertyEditedItem.sub_property_name }}
              </div>
              <q-space />
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="openOtherRoomsDialog()"
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
                        : {{ otherpropertyEditedItem.partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.sub_partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Lead Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.partner_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.partner_sub_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Property Type
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.property_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Sub Property Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.sub_property_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.property_phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.property_email }}
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
                        : {{ otherpropertyEditedItem.building_no }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Street</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.street }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Landmark</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.land_mark }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Country</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.country }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">State</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.state_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">City</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.city_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Pincode</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.pin_code }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Latitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.property_latitude }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Longitude</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherpropertyEditedItem.property_longitude }}
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
                                  otherpropertyEditedItem.upload_image,
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
                                  otherpropertyEditedItem.upload_image1,
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
                                  otherpropertyEditedItem.upload_image2,
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
                        {{ otherpropertyEditedItem.property_description }}
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
                    :data="otherrooms_data_rows"
                    :columns="otherrooms_data_columns"
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
                          @click="showOtherRoomsData(props.row)"
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
      <!-- Other Property Edit Dialog  Start-->
      <q-dialog
        v-model="otherpropertyEditDialog"
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
                  @click="closeAccPropertyEdit"
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
                          v-model="editedOtherPropertyData.partner_name"
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
                          v-model="editedOtherPropertyData.partner_sub_name"
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
                    <q-input
                      dense
                      outlined
                      v-model="editedOtherPropertyData.property_name"
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
                      v-model="editedOtherPropertyData.sub_property_name"
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
                      v-model="editedOtherPropertyData.property_description"
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
                    <!-- <q-input
                          dense
                          outlined
                          v-model="editedOtherPropertyData.property_price_startsFrom"
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
                      v-model="editedOtherPropertyData.building_no"
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
                      v-model="editedOtherPropertyData.street"
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
                      v-model="editedOtherPropertyData.land_mark"
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
                      v-model="editedOtherPropertyData.state"
                      @input="
                        loadAllCities(editedOtherPropertyData.state);
                        emptyCities();
                      "
                      label="State *"
                      hide-bottom-space
                      label-color="black"
                      :rules="[required('State')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template>
                    </q-select>
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
                      v-model="editedOtherPropertyData.city"
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
                      v-model="editedOtherPropertyData.pin_code"
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
                      v-model="editedOtherPropertyData.country"
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
                      v-model="editedOtherPropertyData.property_email"
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
                      v-model="editedOtherPropertyData.property_phone"
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
                      v-model="editedOtherPropertyData.Name_Of_Contact_Person"
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
                      v-model="editedOtherPropertyData.property_latitude"
                      label="Latitude *"
                      Latitudelazy-rules
                      style="width: 200px"
                      label-color="black"
                      type="number"
                      hide-bottom-space
                      :rules="[required('Latitude')]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editedOtherPropertyData.property_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude')]"
                      label-color="black"
                      type="number"
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
                      v-model="editedOtherPropertyData.amenities"
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
                    <q-input
                      outlined
                      label="Check In Time *"
                      dense
                      v-model="editedOtherPropertyData.checkIn_time"
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
                              v-model="editedOtherPropertyData.checkIn_time"
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
                      v-model="editedOtherPropertyData.checkOut_time"
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
                              v-model="editedOtherPropertyData.checkOut_time"
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
                      :filter="checkFileSize"
                      @rejected="onRejected"
                      :rules="[
                        (val) =>
                          (val != '' && uploadImage != '') ||
                          'Please Upload Property Front Image Doc',
                      ]"
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
                      :rules="[
                        (val) =>
                          (val != '' && uploadImage1 != '') ||
                          'Please Upload Property Front Doc',
                      ]"
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
                      :rules="[
                        (val) =>
                          (val != '' && uploadImage2 != '') ||
                          'Please Upload Property Reception Front Doc',
                      ]"
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
                      :rules="[
                        (val) =>
                          (val != '' && uploadImage3 != '') ||
                          'Please Upload Property Lobby Doc',
                      ]"
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
                      v-model="uploadImage4"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Property Lobby"
                      :rules="[
                        (val) =>
                          (val != '' && uploadImage3 != '') ||
                          'Please Upload Property Lobby Doc',
                      ]"
                      :filter="checkFileSize"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <!-- <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable readonly hide-bottom-space v-model="uploadImage4" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        val => {
                          files = val;
                        }
                      " hint="Upload Property Side Image" :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file> -->
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
                  @click="onOtherPropertyUpdate"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- Other Proper Edit Dialog  End -->

      <!-- Other Room Dialog Start -->
      <q-dialog v-model="otherroomsDialog" maximized persistent>
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
                      v-model="otherRoomDetails.partner_name"
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
                      v-model="otherRoomDetails.sub_partner_name"
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
                      v-model="otherRoomDetails.property_name"
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
                      v-model="otherRoomDetails.sub_property_name"
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
                      v-model="otherRoomDetails.room_category"
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
                      v-model="otherRoomDetails.room_type"
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
                      v-model="otherRoomDetails.no_of_avail_rooms"
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
                      v-model="otherRoomDetails.room_numbers"
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
                      v-model="otherRoomDetails.facilities"
                      :options="amenitiesArr"
                      option-label="amenity_name"
                      option-value="amenity_id"
                      multiple
                      aria-checked
                      use-input
                      fill-input
                      @input="getOtherAmenities(otherRoomDetails.facilities)"
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
                      v-model="otherRoomDetails.other_amenities"
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
                      v-model="otherRoomDetails.price"
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
                      v-model="otherRoomDetails.units"
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
                      v-model="otherRoomDetails.select_offer"
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
                      v-model="otherRoomDetails.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.otherRoomDetails.select_offer == 'Amount'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="otherRoomDetails.property_specialOffer"
                      label="Special Offer(%) *"
                      :rules="[required('Special Offer')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.otherRoomDetails.select_offer == 'Percentage'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>

                    <q-input
                      dense
                      outlined
                      v-model="otherRoomDetails.date_from"
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
                              v-model="otherRoomDetails.date_from"
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
                      v-model="otherRoomDetails.date_to"
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
                              v-model="otherRoomDetails.date_to"
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
                  @click="onOtherRoomsSubmit"
                >
                </q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Other Room Dialog End -->
      <!-- Other Room View Dialog Start -->

      <q-dialog
        v-model="otherroomsDataDialog"
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
                {{ otherroomsEditedItem.sub_property_name }}
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
                        : {{ otherroomsEditedItem.partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.sub_partner_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Lead Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.partner_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Sub Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.partner_sub_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Property Type
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.property_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">
                        Sub Property Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.sub_property_name }}
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
                        : {{ otherroomsEditedItem.no_of_avail_rooms }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Room Type</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.room_type }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Facilities</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.facilities }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Price</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.price }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Units</div>
                      <div class="col-7 text-left text-grey">
                        : {{ otherroomsEditedItem.units }}
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
                                  otherroomsEditedItem.room_image_1,
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
                                  otherroomsEditedItem.room_image_2,
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
                                  otherroomsEditedItem.room_image_3,
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

      <!-- Other Room Edit Dialog Start -->

      <q-dialog
        v-model="otherroomsEditDialog"
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
                  @click="otherroomsEditDialog = false"
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
                    v-model="editedOtherRoomsData.sub_property_name"
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
                    v-model="editedOtherRoomsData.property_name"
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
                    v-model="editedOtherRoomsData.room_category"
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
                    v-model="editedOtherRoomsData.no_of_avail_rooms"
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
                    v-model="editedOtherRoomsData.room_type"
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
                    v-model="editedOtherRoomsData.room_numbers"
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
                    v-model="editedOtherRoomsData.facilities"
                    :options="amenitiesArr"
                    option-label="amenity_name"
                    option-value="amenity_id"
                    multiple
                    aria-checked
                    use-input
                    fill-input
                    @input="getOtherAmenities(editedOtherRoomsData.facilities)"
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
                    v-model="editedOtherRoomsData.other_amenities"
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
                    v-model="editedOtherRoomsData.price"
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
                    v-model="editedOtherRoomsData.units"
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
                    v-model="editedOtherRoomsData.select_offer"
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
                    v-model="editedOtherRoomsData.enter_amount"
                    label="Enter Amount *"
                    :rules="[required('Enter Amount')]"
                    lazy-rules
                    style="width: 180px"
                    label-color="black"
                    hide-bottom-space
                    v-if="this.editedOtherRoomsData.select_offer == 'Amount'"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>
                  <q-input
                    dense
                    outlined
                    v-model="editedOtherRoomsData.property_specialOffer"
                    label="Special Offer(%) *"
                    :rules="[required('Special Offer')]"
                    lazy-rules
                    style="width: 180px"
                    label-color="black"
                    hide-bottom-space
                    v-if="
                      this.editedOtherRoomsData.select_offer == 'Percentage'
                    "
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>

                  <q-input
                    dense
                    outlined
                    v-model="editedOtherRoomsData.date_from"
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
                          minimal
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="editedOtherRoomsData.date_from"
                            minimal
                            mask="DD/MM/YYYY"
                            @input="closeDialog"
                          >
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                minimal
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
                    v-model="editedOtherRoomsData.date_to"
                    label="Date To"
                    clearable
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
                            v-model="editedOtherRoomsData.date_to"
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
                  @click="onOtherRoomsUpdate"
                >
                </q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Other Room Edit Dialog End -->
      <q-dialog
        v-model="otherTravelForm"
        maximized
        persistant
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card>
          <q-bar class="bg-primary">
            <q-space />
            <q-btn v-close-popup flat>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-form ref="otherTravelForm">
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
                </q-input>
                <q-select
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
                  v-model="othertravelLocation.vehicle_name"
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
                  v-model="othertravelLocation.no_of_seaters"
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
                  v-model="othertravelLocation.day_price"
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
                <q-input
                  dense
                  outlined
                  v-model="othertravelLocation.night_price"
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
                  v-model="othertravelLocation.units"
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
                  v-model="othertravelLocation.description"
                  label="Description"
                  lazy-rules
                  style="width: 250px"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-comment" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-input
                  dense
                  outlined
                  v-model="othertravelLocation.special_offer"
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

            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Update"
                @click="onOtherTravelUpdate()"
              ></q-btn>
            </div>
          </q-form>
        </q-card>
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

      <!-- VIEW DETAILS -->

      <q-dialog
        v-model="subFoodView"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card flat bordered class="bg-white">
          <q-table
            dense
            :title="title"
            :data="food_registration_rows"
            :columns="food_registration_columns"
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
                @click="editOpenAddDialog()"
                class="text-weight-bold"
              >
                Add Food Partner
              </q-chip>
              <q-btn
                flat
                dense
                color="primary"
                class="text-black text-weight-bold"
                @click="subFoodView = false"
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
                  <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                </q-btn>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </q-dialog>

      <!-- ADD FOOD DETAILS -->
      <q-dialog v-model="foodDetailsAddForm" maximized persistent>
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
          <q-form ref="foodDetailsAddForm">
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
                  v-model="foodDetails.kitchen_name"
                  label="Kitchen Name"
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
                  v-model="foodDetails.kitchen_type"
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
                <!-- <q-select
                  class="col-3"
                  dense
                  outlined
                  v-model="foodDetails.foodName"
                  label="Food Item Name *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :options="foodThaliArr"
                  option-label="item_name"
                  option-value="food_type_id"
                  :rules="[required('Food Item Name')]"
                  @input="
                    loadAllFoodItems(foodDetails.foodName);
                    emptyFoodItems();
                  "
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" /> </template
                ></q-select>
                <q-select
                  dense
                  options-dense
                  outlined
                  style="width: 350px"
                  v-model="foodDetails.foodItemsList"
                  :options="foodListArr"
                  option-label="food_items_name"
                  option-value="food_items_id"
                  multiple
                  aria-checked
                  use-input
                  label="Items List *"
                  label-color="black"
                  :rules="[required('Food Items List')]"
                >
                  <template v-slot:options>
                    <q-item>
                      <q-item-section class="text-grey">
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-select> -->
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="foodDetails.food_items_name"
                  label="Food Item Name"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :rules="[]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-input>
                <q-select
                  options-dense
                  use-input
                  hide-selected
                  fill-input
                  class="col-3"
                  dense
                  outlined
                  v-model="foodDetails.item_name"
                  label="Food Item Type"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :options="otherfoodtype"
                  :rules="[]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-select>
                <q-input
                  outlined
                  label="items Available from"
                  dense
                  v-model="foodDetails.items_available_from"
                  :rules="[]"
                >
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time
                          v-model="foodDetails.items_available_from"
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
                  label="Items Available to"
                  dense
                  v-model="foodDetails.items_available_to"
                  :rules="[]"
                >
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time
                          v-model="foodDetails.items_available_to"
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
                  v-model="foodDetails.units"
                  label="Units"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :options="['1 Plate']"
                  :rules="[]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-unity" color="secondary" />
                  </template>
                </q-select>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="foodDetails.price"
                  label="Price"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :rules="[
                    (v) => /^[0-9_. ]*$/.test(v) || 'Please enter numbers only',
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
                  :rules="[]"
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
                    v-model="foodDetails.city_name"
                    label="City *"
                    label-color="black"
                    hide-bottom-space
                    :rules="[]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-select>
              </div>
              <div class="bg-grey-11 col-12 row q-pa-xs">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>

              </div>
              <div class='row justify-end q-ma-md' >
                <q-btn
                  color="indigo"
                  label="ADD"
                  @click="addFoodItems"
                 >
                </q-btn>
              </div>
              <q-table
                style="font-family: verdana"
                dense
                separator="cell"
                wrap-cells
                :data="food_Items_Array_Data"
                :columns="food_Items_column"
                :rows-per-page-options="[]"
                row-key="s_no"
                no-data-label="No Food Items Added"
                v-if="food_Items_Array_Data.length!=0"
              >
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn
                      @click="deleteFoodDetailsRow(props.row.index)"
                      color="negative"
                      dense
                      flat
                      round
                      icon="delete"
                      class="q-ml-xs"
                    />
                  </q-td>
                </template>
              </q-table>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"

                @click="Submitfood('submit')"
                :disable="this.foodDetails.accept == false"
              />
              <!-- <q-btn
                color="secondary"
                label="Update"
                class="text-bold"
                @click="Submitfood('update')"
                v-if="this.onclickValue == 'edit'"
                :disable="this.foodDetails.accept == false"
              /> -->
            </div>
          </q-form>
        </q-card>
      </q-dialog>
      <!-- edit food  details -->
      <q-dialog
        v-model="editFoodForm"
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
          <q-form ref="editFoodForm">
            <div class="text-overline1 q-gutter-xs" />
            <div class="text-overline1 q-gutter-xs" />
            <q-card class="q-pa-md">
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">Food Details</div>
              </q-bar>
              <div class="q-pa-md row q-gutter-md">
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="editedfoodDetails.name_of_kitchen"
                  label="Kitchen Name"
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
                  v-model="editedfoodDetails.type_of_kitchen"
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
                  v-model="editedfoodDetails.item_name"
                  label="Food Item Type *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :options="otherfoodtype"
                  :rules="[required('Food Item Type')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-select>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="editedfoodDetails.food_items_name"
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
                  v-model="editedfoodDetails.items_available_from"
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
                          v-model="editedfoodDetails.items_available_from"
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
                  v-model="editedfoodDetails.items_available_to"
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
                          v-model="editedfoodDetails.items_available_to"
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
                  v-model="editedfoodDetails.units"
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
                  v-model="editedfoodDetails.price"
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

                  @rejected="onRejected"
                  :rules="[
                    (val) =>
                      (val != '' && food_image != '') ||
                      'Please Upload Food Image Doc',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <!-- <q-btn
                  color="teal"
                  size="sm"
                  icon="mdi-eye"
                  @click="showDocument(food_image, 'vehicle_image')"
                >
                  <q-tooltip :disable="$q.platform.is.mobile"
                    >Vehicle Image
                  </q-tooltip>
                </q-btn> -->
                <!-- <q-btn push clickable color="green" icon="add" /> -->
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
                    v-model="editedfoodDetails.city_name"
                    label="City *"
                    label-color="black"
                    hide-bottom-space
                    :rules="[]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker"
                        color="secondary"
                      /> </template
                  ></q-select>
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
            <q-spacer />

            <div class="row col-12 q-ma-md justify-end">
              <q-btn
                color="secondary"
                label="Update"
                @click="onFoodUpdatingDetail"
              ></q-btn>
            </div>
          </q-form>
        </q-card>
      </q-dialog>
      <!-- food deatails end -->
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
                  Food Item Details
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
                          <td class="text-left" width="280px">Food image</td>
                          <td>
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
      <!-- food deatails view page end -->
      <!-- Other Accommodation Partner Start -->

      <q-dialog
        v-model="addOtherFoodAccoPartner"
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
              <q-icon
                name="close"
                color="white"
                @click="closeAccPropertyEdit"
              ></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-form ref="addOtherFoodAccoPartner">
            <q-bar>
              <div class="text-bold text-black">Basic Details</div>
            </q-bar>
            <div class="text-overline1 q-gutter-xs" />
            <div class="text-overline1 q-gutter-xs" />
            <q-card class="q-pa-md">
              <div class="q-pa-md row q-gutter-md">
                <!-- <q-input dense outlined v-model="otherFoodAccomadationPartner.property_name" label="Property Type *"
                  class="col-3" hide-bottom-space style="width: 250px" :rules="[required('vehicle name')]"
                  label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-home" color="secondary" />
                  </template>
                </q-input> -->
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
                  v-model="otherFoodAccomadationPartner.property_name"
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
                    <q-icon name="mdi-home-city" color="secondary" />
                  </template>
                </q-select>
                <q-input
                  dense
                  outlined
                  v-model="otherFoodAccomadationPartner.sub_property_name"
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
                  v-model="otherFoodAccomadationPartner.property_description"
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
                <!-- <q-file
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
                </q-file> -->
                <!-- <q-btn push clickable color="green" icon="add" /> -->
              </div>
              <!-- <div class="bg-grey-11 col-12 row q-pa-xs">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div> -->
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
                    v-model="otherFoodAccomadationPartner.building_no"
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
                    v-model="otherFoodAccomadationPartner.street"
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
                    v-model="otherFoodAccomadationPartner.land_mark"
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
                    :options="stateOptions"
                    @filter="filterFnStates"
                    option-value="state_id"
                    option-label="state_name"
                    v-model="otherFoodAccomadationPartner.state"
                    @input="
                      loadAllCities(otherFoodAccomadationPartner.state);
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
                    v-model="otherFoodAccomadationPartner.city"
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
                    v-model="otherFoodAccomadationPartner.pin_code"
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
                    v-model="otherFoodAccomadationPartner.country"
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
                    v-model="otherFoodAccomadationPartner.property_email_id"
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
                    v-model="otherFoodAccomadationPartner.property_phone"
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
                      otherFoodAccomadationPartner.Name_Of_Contact_Person
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
                    v-model="otherFoodAccomadationPartner.property_latitude"
                    label="Latitude *"
                    type="number"
                    lazy-rules
                    style="width: 200px"
                    label-color="black"
                    :rules="[required('Longitude')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-latitude" color="secondary" />
                    </template>
                  </q-input>
                  <!-- :rules="[required('Latitude'), number()]" -->
                  <q-input
                    dense
                    outlined
                    v-model="otherFoodAccomadationPartner.property_longitude"
                    label="Longitude *"
                    type="number"
                    lazy-rules
                    style="width: 200px"
                    :rules="[required('Longitude')]"
                    label-color="black"
                    hide-bottom-space
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-longitude" color="secondary" />
                    </template>
                  </q-input>
                  <!-- :rules="[required('Longitude'), number()]" -->
                  <q-select
                    dense
                    options-dense
                    outlined
                    style="width: 250px"
                    v-model="otherFoodAccomadationPartner.amenities"
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
                  <q-input
                    outlined
                    label="Check In Time *"
                    dense
                    v-model="otherFoodAccomadationPartner.checkIn_time"
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
                            v-model="otherFoodAccomadationPartner.checkIn_time"
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
                    v-model="otherFoodAccomadationPartner.checkOut_time"
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
                            v-model="otherFoodAccomadationPartner.checkOut_time"
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
                    :rules="[
                      (val) =>
                        (val != '' && uploadImage != '') ||
                        'Please Upload Property Front Image Doc',
                    ]"
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
                    :rules="[
                      (val) =>
                        (val != '' && uploadImage1 != '') ||
                        'Please Upload Property Front Image Doc',
                    ]"
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
                    :rules="[
                      (val) =>
                        (val != '' && uploadImage2 != '') ||
                        'Please Upload Property Reception Doc',
                    ]"
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
                    :rules="[
                      (val) =>
                        (val != '' && uploadImage3 != '') ||
                        'Please Upload Property Lobby Doc',
                    ]"
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
                    :rules="[
                      (val) =>
                        (val != '' && uploadImage4 != '') ||
                        'Please Upload Property Side Doc',
                    ]"
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
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Submit"
                @click="otheronFoodPropertySubmit"
              ></q-btn>
            </div>
          </q-form>
        </q-card>
      </q-dialog>
      <!-- Other Accommodation Partner End -->

      <!-- Other Equipment Details Start -->
      <q-dialog
        v-model="addOtherFoodMedicalPartner"
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
            ref="addOtherFoodMedicalPartner"
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
                    <q-input dense outlined v-model="editedItem.agent_sub_name" readonly label="Equipment Sub Name *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Sub Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      options-dense
                      outlined
                      v-model="otherFoodMedicalPartner.medical_store"
                      label="Medical Store "
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
                      v-model="otherFoodMedicalPartner.item_name"
                      label="Equipment Item Name *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="otherFoodmedicalItemName"
                      option-label="item_name"
                      option-value="item_id"
                      :rules="[required('Equipment Item Name')]"
                      label-color="black"
                      @input="
                        loadAllMedicalUnits(otherFoodMedicalPartner.item_name),
                          emptyMedicalItems()
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <q-select
                      v-model="otherFoodMedicalPartner.units"
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="otherFoodmedicalUnitsName"
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
                      v-model="otherFoodMedicalPartner.purchased_type"
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
                      v-model="otherFoodMedicalPartner.price"
                      label="Price *"
                      lazy-rules
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <!-- :rules="[required('Price'), number()]" -->
                    <!-- <q-input
                  dense
                  outlined
                  v-model="otherFoodMedicalPartner.special_offer"
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
                      :rules="[
                        (val) =>
                          (val != '' && equipment_image != '') ||
                          'Please Upload Equipment Image Doc',
                      ]"
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
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <!-- <q-table
              :data="equipmentRows"
              :columns="equipmentColumns"
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
                @click="onOtherFoodMedicalForm"
                :disable="this.addOtherFoodMedicalPartner.accept == false"
              ></q-btn>
            </div>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Other Equipment Details End -->

      <!-- Other Equipment Edit Details Start -->
      <q-dialog
        v-model="otherequipmentUpdatingDetails"
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
                    <q-input dense outlined v-model="editedItem.agent_sub_name" readonly label="Equipment Sub Name *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Sub Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-select
                      dense
                      options-dense
                      outlined
                      v-model="editOtherMedicalDetails.medical_store"
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
                    </q-select>

                    <q-select
                      dense
                      options-dense
                      outlined
                      v-model="editOtherMedicalDetails.item_name"
                      label="Equipment Item Name *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="otherFoodmedicalItemName"
                      option-label="item_name"
                      option-value="item_id"
                      :rules="[required('Equipment Item Name')]"
                      label-color="black"
                      @input="
                        loadAllMedicalUnits(editOtherMedicalDetails.item_name),
                          emptyMedicalItems()
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <q-select
                      v-model="editOtherMedicalDetails.units"
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="otherFoodmedicalUnitsName"
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
                      v-model="editOtherMedicalDetails.purchased_type"
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
                      v-model="editOtherMedicalDetails.price"
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
                      :rules="[
                        (val) =>
                          (val != '' && equipment_image != '') ||
                          'Please Upload Equipment Image',
                      ]"
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
                @click="onOtherUpdatingEquipmentDetailForm()"
              ></q-btn>
            </div>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- Other Equipment Edit Detail End -->

      <!-- Other Travel Details Start -->
      <q-dialog
        v-model="addOtherFoodTravelPartner"
        maximized
        persistant
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card>
          <q-bar class="bg-primary">
            <q-space />
            <q-btn v-close-popup flat>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-form ref="addOtherFoodTravelPartner">
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
                  v-model="otherFoodtravelPartner.vehicle_name"
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
                  v-model="otherFoodtravelPartner.no_of_seaters"
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
                  v-model="otherFoodtravelPartner.day_price"
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
                  v-model="otherFoodtravelPartner.night_price"
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
                  v-model="otherFoodtravelPartner.units"
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
                  v-model="otherFoodtravelPartner.description"
                  label="Description"
                  lazy-rules
                  style="width: 250px"
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
              <q-btn
                color="secondary"
                label="Submit"
                @click="otheronFoodSubmit"
              ></q-btn>
            </div>
          </q-form>
        </q-card>
      </q-dialog>
      <!-- ADD RESTAURANT DETAILS -->
      <q-dialog
        v-model="foodRestaurantDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="foodRestaurantForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">MH Food Restaurant Details</div>
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
                      v-model="foodRestaurantDetails.name_of_kitchen"
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
                      v-model="foodRestaurantDetails.type_of_kitchen"
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
                      v-model="foodRestaurantDetails.fssai_no"
                      label="FSSAI Licence"
                      mask="##############"
                      label-color="black"
                      :rules="[required('FSSAI Licence No.')]"
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
                    <!-- <q-input dense outlined v-model="foodRestaurantDetails.special_offer" label="Special Offer *"
                      :rules="[number, specialMOfferValue('Special Offer', 100)]" lazy-rules mask="###"
                      style="width: 250px" label-color="black" hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="foodRestaurantDetails.date_from" clearable label="Date From"
                      label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy.show()"
                      style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="foodRestaurantDetails.date_from" mask="DD/MM/YYYY" @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="foodRestaurantDetails.date_to" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" minimal transition-show="scale" transition-hide="scale">
                            <q-date v-model="foodRestaurantDetails.date_to" minimal mask="DD/MM/YYYY"
                              @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" minimal flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="foodRestaurantDetails.restaurant_description"
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
                      v-model="foodRestaurantDetails.building_no"
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
                      v-model="foodRestaurantDetails.street"
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
                      v-model="foodRestaurantDetails.land_mark"
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
                      v-model="foodRestaurantDetails.country"
                      label="Country *"
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
                      v-model="foodRestaurantDetails.state"
                      @input="
                        loadAllCities(foodRestaurantDetails.state);
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
                      v-model="foodRestaurantDetails.city"
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
                      v-model="foodRestaurantDetails.pin_code"
                      label="Pincode *"
                      label-color="black"
                      hide-bottom-space
                      :rules="[required('Pincode'), pinNumber]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
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
                    <q-select
                      dense
                      options-dense
                      outlined
                      use-input
                      hide-selected
                      style="width: 200px"
                      fill-input
                      :options="offerOptions"
                      v-model="foodRestaurantDetails.select_offer"
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
                      v-model="foodRestaurantDetails.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.foodRestaurantDetails.select_offer == 'Amount'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="foodRestaurantDetails.special_offer"
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
                        this.foodRestaurantDetails.select_offer == 'Percentage'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="foodRestaurantDetails.date_from"
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
                            minimal
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="foodRestaurantDetails.date_from"
                              minimal
                              mask="DD/MM/YYYY"
                              @input="closeDialog"
                            >
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  minimal
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
                      v-model="foodRestaurantDetails.date_to"
                      clearable
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
                              v-model="foodRestaurantDetails.date_to"
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
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="foodRestaurantDetails.restaurant_email"
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
                      v-model="foodRestaurantDetails.restaurant_phone"
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
                      v-model="foodRestaurantDetails.Name_Of_Contact_Person"
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
                      v-model="foodRestaurantDetails.restaurant_latitude"
                      label="Latitude"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      type="number"
                      hide-bottom-space
                      :rules="[number]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="foodRestaurantDetails.restaurant_longitude"
                      label="Longitude"
                      lazy-rules
                      style="width: 200px"
                      :rules="[number]"
                      label-color="black"
                      type="number"
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
                      v-model="foodRestaurantDetails.opening_time"
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
                              v-model="foodRestaurantDetails.opening_time"
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
                      v-model="foodRestaurantDetails.closing_time"
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
                              v-model="foodRestaurantDetails.closing_time"
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
                      :rules="[
                        (val) =>
                          (val != '' && upload_Image != '') ||
                          'Please Upload Restaurant Front Image Doc',
                      ]"
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
                  @click="onFoodRestaurantSubmit"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- EDIT RESTAURANT DETAILS -->
      <q-dialog
        v-model="foodRestaurantEditDialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="editFoodRestaurantForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">MH Food Restaurant Details</div>
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
                      v-model="editFoodRestaurant.name_of_kitchen"
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
                      v-model="editFoodRestaurant.type_of_kitchen"
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
                      v-model="editFoodRestaurant.fssai_no"
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
                    <!-- <q-input dense outlined v-model="editFoodRestaurant.special_offer" label="Special Offer *"
                      :rules="[number, specialMOfferValue('Special Offer', 100)]" lazy-rules mask="###"
                      style="width: 250px" label-color="black" hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editFoodRestaurant.date_from" clearable label="Date From"
                      label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy.show()"
                      style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="editFoodRestaurant.date_from" mask="DD/MM/YYYY" @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editFoodRestaurant.date_to" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" minimal transition-show="scale" transition-hide="scale">
                            <q-date v-model="editFoodRestaurant.date_to" minimal mask="DD/MM/YYYY"
                              @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" minimal flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="editFoodRestaurant.restaurant_description"
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
                      v-model="editFoodRestaurant.building_no"
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
                      v-model="editFoodRestaurant.street"
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
                      v-model="editFoodRestaurant.land_mark"
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
                      v-model="editFoodRestaurant.country"
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
                      v-model="editFoodRestaurant.state"
                      @input="
                        loadAllCities(editFoodRestaurant.state);
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
                      v-model="editFoodRestaurant.city"
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
                      v-model="editFoodRestaurant.pin_code"
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
                      v-model="editFoodRestaurant.select_offer"
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
                      v-model="editFoodRestaurant.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.editFoodRestaurant.select_offer == 'Amount'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editFoodRestaurant.special_offer"
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
                        this.editFoodRestaurant.select_offer == 'Percentage'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editFoodRestaurant.date_from"
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
                            minimal
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="editFoodRestaurant.date_from"
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
                      v-model="editFoodRestaurant.date_to"
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
                              v-model="editFoodRestaurant.date_to"
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
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="editFoodRestaurant.restaurant_email"
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
                      v-model="editFoodRestaurant.restaurant_phone"
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
                      v-model="editFoodRestaurant.Name_Of_Contact_Person"
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
                      v-model="editFoodRestaurant.restaurant_latitude"
                      label="Latitude"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      type="number"
                      hide-bottom-space
                      :rules="[number]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="editFoodRestaurant.restaurant_longitude"
                      label="Longitude"
                      lazy-rules
                      style="width: 200px"
                      :rules="[number]"
                      label-color="black"
                      type="number"
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
                      v-model="editFoodRestaurant.opening_time"
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
                              v-model="editFoodRestaurant.opening_time"
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
                      v-model="editFoodRestaurant.closing_time"
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
                              v-model="editFoodRestaurant.closing_time"
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
                      hint="Upload Kitchen Front Image 1"
                      :rules="[
                        (val) =>
                          (val != '' && upload_Image != '') ||
                          'Please Upload Kitchen Front Image Doc',
                      ]"
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
                  @click="updateFoodRestaurantData"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- GET RESTAURANT DETAILS -->

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
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="openPropertyDialog()"
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
                  <div style="height: 260px">
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
                  <div style="height: 260px">
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
                  <div style="height: 260px">
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
                                  foodRestaurantEditedItem.upload_image,
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
                                  foodRestaurantEditedItem.upload_image1,
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
                                  foodRestaurantEditedItem.upload_image2,
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
                  <div style="height: 100px">
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
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Food Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="foodDetails_rows_partner"
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
                          icon-right="las la-eye"
                          @click="
                            showfooddata(props.row)
                          "
                        />
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
                       <template v-slot:body-cell-action="props">
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
      <!-- Other Travel Details End -->
      <!-- Add Transport Dialog Detail Start -->
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
                <q-btn
                  dark
                  flat
                  icon="close"
                  color="white"
                  @click="closeTransportForm"
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
                    <!-- <q-input dense outlined v-model="transportDetails.special_offer" label="Special Offer *" :rules="[
                      number,
                      specialMOfferValue('Special Offer', 100)
                    ]" lazy-rules mask="###" style="width: 180px" label-color="black" hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="transportDetails.from_date" label="Date From" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="transportDetails.from_date" minimal mask="DD/MM/YYYY" @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="transportDetails.to_date" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                            <q-date v-model="transportDetails.to_date" minimal mask="DD/MM/YYYY" @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input> -->
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
                  <div class="text-bold text-black">Special Offer</div>
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
                        number,
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
                      type="number"
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
                      v-model="transportDetails.transport_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number]"
                      label-color="black"
                      type="number"
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
                      :rules="[
                        (val) =>
                          (val != '' && uploadImage != '') ||
                          'Please Upload Vehicle Front Doc',
                      ]"
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
                      :rules="[
                        (val) =>
                          (val != '' && uploadImage1 != '') ||
                          'Please Upload Vehicle Back Doc',
                      ]"
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
                      hint="Upload licence plate Image "
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
                  @click="onFoodTransportSubmit"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
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
                @click="otherFoodTravelForm()"
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
                    :data="othertravel_item_rows"
                    :columns="othertravel_item_columns"
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
                          @click="editOtherTravel(props.row)"
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
                            showDocumenttravel(
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
                <q-btn
                  dark
                  flat
                  icon="close"
                  color="white"
                  @click="closeTransportForm"
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
                    <!-- <q-input dense outlined v-model="transporteditedItem.special_offer" label="Special Offer *" :rules="[
                      number,
                      specialMOfferValue('Special Offer', 100)
                    ]" lazy-rules mask="###" style="width: 180px" label-color="black" hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>

                    <q-input dense outlined v-model="transporteditedItem.from_date" label="Date From"
                      label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy.show()"
                      style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="transporteditedItem.from_date" minimal mask="DD/MM/YYYY"
                              @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="transporteditedItem.to_date" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                            <q-date v-model="transporteditedItem.to_date" minimal mask="DD/MM/YYYY"
                              @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input> -->

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
                  <div class="text-bold text-black">Special Offer</div>
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
                      label="Special Offer *"
                      :rules="[
                        number,
                        specialMOfferValue('Special Offer', 100),
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
                      type="number"
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
                      v-model="transporteditedItem.transport_longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number]"
                      label-color="black"
                      type="number"
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
                      v-model="transporteditedItem.uploadImage1"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      hide-bottom-space
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle Front Image "
                      :rules="[
                        (val) =>
                          (val != '' &&
                            transporteditedItem.uploadImage1 != '') ||
                          'Please Upload Vehicle Front Image Doc',
                      ]"
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
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle Back Image "
                      :rules="[
                        (val) =>
                          (val != '' &&
                            transporteditedItem.uploadImage2 != '') ||
                          'Please Upload Vehicle Back Doc',
                      ]"
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
                      v-model="transporteditedItem.uploadImage3"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Vehicle licence plate Image "
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
                  @click="onFoodTransportUpdatingDetail"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Transport Edit Dialog End -->

      <!--Sachin  Add Medical Store Details Start -->
      <q-dialog
        v-model="foodMedicalStoreDetails"
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
                      v-model="FoodMedicalStore.medical_store_name"
                      label="Medical Store *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="medicalFoodStoreItems"
                      option-label="medical_store_name"
                      option-value="medical_store_id"
                      :rules="[required('Medical Store')]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <!-- <q-input dense outlined v-model="FoodMedicalStore.medical_store_name" label="Medical Store *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Medical Store')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <!-- <q-input dense outlined v-model="FoodMedicalStore.special_offer" label="Special Offer *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Special Offer')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="FoodMedicalStore.date_from" label="Date From" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="FoodMedicalStore.date_from" minimal mask="DD/MM/YYYY" @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="FoodMedicalStore.date_to" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                            <q-date v-model="FoodMedicalStore.date_to" minimal mask="DD/MM/YYYY" @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="FoodMedicalStore.description"
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
                      v-model="FoodMedicalStore.building_no"
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
                      v-model="FoodMedicalStore.street"
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
                      v-model="FoodMedicalStore.land_mark"
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
                      v-model="FoodMedicalStore.state"
                      @input="
                        loadAllCities(FoodMedicalStore.state);
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
                      v-model="FoodMedicalStore.city"
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
                      v-model="FoodMedicalStore.pin_code"
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
                      v-model="FoodMedicalStore.country"
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
                      v-model="FoodMedicalStore.select_offer"
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
                      v-model="FoodMedicalStore.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="this.FoodMedicalStore.select_offer == 'Amount'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="FoodMedicalStore.special_offer"
                      label="Special Offer *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Special Offer')]"
                      v-if="this.FoodMedicalStore.select_offer == 'Percentage'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="FoodMedicalStore.date_from"
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
                              v-model="FoodMedicalStore.date_from"
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
                      v-model="FoodMedicalStore.date_to"
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
                              v-model="FoodMedicalStore.date_to"
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
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="FoodMedicalStore.email_id"
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
                      v-model="FoodMedicalStore.phone"
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
                      v-model="FoodMedicalStore.name_Of_Contact_Person"
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
                      v-model="FoodMedicalStore.latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      type="number"
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
                      v-model="FoodMedicalStore.longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number]"
                      label-color="black"
                      type="number"
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
                      v-model="FoodMedicalStore.opening_time"
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
                              v-model="FoodMedicalStore.opening_time"
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
                      v-model="FoodMedicalStore.closing_time"
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
                              v-model="FoodMedicalStore.closing_time"
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
                      :rules="[
                        (val) =>
                          (val != '' && uploadImage1 != '') ||
                          'Please Upload Store Image Doc',
                      ]"
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
                  @click="submitFoodMedicalStoreData()"
                ></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!--Sachin  Add Medical Store Details End -->

      <!-- Sachin Medical Store Details Views Start -->

      <q-dialog
        v-model="foodmedicalStoreViewDialog"
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
                @click="otherFoodMedicalForm()"
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
                <q-card flat bordered class="bg-white">
                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                    <q-icon name="manage_accounts" color="black" size="1.5em" />
                    Equipment Details
                  </q-bar>
                  <div class="q-pa-md" style="padding-top: 10px">
                    <q-table
                      :data="otherequipment_item_rows"
                      :columns="otherequipment_item_columns"
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
                            color="primary"
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
                            @click="editOtherEquipmentForm(props.row)"
                          >
                            <q-tooltip :disable="$q.platform.is.mobile"
                              >Edit</q-tooltip
                            >
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
        v-model="foodmedicalStoreEditDialog"
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
                      v-model="FoodmedicalstoreeditedItem.medical_store_name"
                      label="Medical Store *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="medicalFoodStoreItems"
                      option-label="medical_store_name"
                      option-value="medical_store_id"
                      :rules="[required('Medical Store')]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <!-- <q-input dense outlined v-model="FoodmedicalstoreeditedItem.medical_store_name" label="Medical Store *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Medical Store')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <!-- <q-input dense outlined v-model="FoodmedicalstoreeditedItem.special_offer" label="Special Offer *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Special Offer')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="FoodmedicalstoreeditedItem.from_date" label="Date From"
                      label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy.show()"
                      style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="FoodmedicalstoreeditedItem.from_date" minimal mask="DD/MM/YYYY"
                              @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="FoodmedicalstoreeditedItem.to_date" label="Date To"
                      label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy1.show()"
                      style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                            <q-date v-model="FoodmedicalstoreeditedItem.to_date" minimal mask="DD/MM/YYYY"
                              @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input> -->
                    <q-input
                      dense
                      outlined
                      v-model="FoodmedicalstoreeditedItem.description"
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
                      v-model="FoodmedicalstoreeditedItem.building_no"
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
                      v-model="FoodmedicalstoreeditedItem.street"
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
                      v-model="FoodmedicalstoreeditedItem.land_mark"
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
                      v-model="FoodmedicalstoreeditedItem.state_name"
                      @input="
                        loadAllCities(FoodmedicalstoreeditedItem.state);
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
                      v-model="FoodmedicalstoreeditedItem.city_name"
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
                      v-model="FoodmedicalstoreeditedItem.pin_code"
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
                      v-model="FoodmedicalstoreeditedItem.country"
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
                      v-model="FoodmedicalstoreeditedItem.select_offer"
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
                      v-model="FoodmedicalstoreeditedItem.enter_amount"
                      label="Enter Amount *"
                      :rules="[required('Enter Amount')]"
                      lazy-rules
                      style="width: 180px"
                      label-color="black"
                      hide-bottom-space
                      v-if="
                        this.FoodmedicalstoreeditedItem.select_offer == 'Amount'
                      "
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input
                      dense
                      outlined
                      v-model="FoodmedicalstoreeditedItem.special_offer"
                      label="Special Offer *"
                      hide-bottom-space
                      style="width: 250px"
                      label-color="black"
                      :rules="[required('Special Offer')]"
                      v-if="
                        this.FoodmedicalstoreeditedItem.select_offer ==
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
                      v-model="FoodmedicalstoreeditedItem.from_date"
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
                              v-model="FoodmedicalstoreeditedItem.from_date"
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
                      v-model="FoodmedicalstoreeditedItem.to_date"
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
                              v-model="FoodmedicalstoreeditedItem.to_date"
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
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input
                      dense
                      outlined
                      v-model="FoodmedicalstoreeditedItem.email"
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
                      v-model="FoodmedicalstoreeditedItem.phone"
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
                        FoodmedicalstoreeditedItem.name_of_contact_person
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
                      v-model="FoodmedicalstoreeditedItem.latitude"
                      label="Latitude *"
                      lazy-rules
                      style="width: 200px"
                      label-color="black"
                      type="number"
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
                      v-model="FoodmedicalstoreeditedItem.longitude"
                      label="Longitude *"
                      lazy-rules
                      style="width: 200px"
                      :rules="[required('Longitude'), number]"
                      label-color="black"
                      type="number"
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
                      v-model="FoodmedicalstoreeditedItem.opening_time"
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
                              v-model="FoodmedicalstoreeditedItem.opening_time"
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
                      v-model="FoodmedicalstoreeditedItem.closing_time"
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
                              v-model="FoodmedicalstoreeditedItem.closing_time"
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
                      v-model="FoodmedicalstoreeditedItem.uploadImage1"
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
                      v-model="FoodmedicalstoreeditedItem.uploadImage2"
                      type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                      @update:model-value="
                        (val) => {
                          files = val;
                        }
                      "
                      hint="Upload Store Image 2"
                      :rules="[
                        (val) =>
                          (val != '' &&
                            FoodmedicalstoreeditedItem.uploadImage2 != '') ||
                          'Please Upload Store Image Doc',
                      ]"
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
                      v-model="FoodmedicalstoreeditedItem.uploadImage3"
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
                  @click="onFoodMedicalStoreUpdatingDetail()"
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
import { api } from "boot/axios";
const foodRegistrationMaster = () => {
  return {
    foodData: "",
    gst_registration: "",
    agent_id: "",
    name: "",
    partner_sub_name: "",
    agent_name: "",
    company_name: "",
    individual_name: "",
    phone: "",
    fax: "",
    alternate_no: "",
    email_id: "",
    description: "",
    building_no: "",
    street: "",
    land_mark: "",
    city: "",
    country: "",
    prevcity: "",
    prevstate: "",
    state: "",
    state1: "",
    city1: "",
    pin_code: "",
    pan: "",
    aadhar: "",
    gstin: "",
    fssai: "",
    bankAccountNo: "",
    bankName: "",
    branchName: "",
    ifsc: "",
    accept: false,
    latitude: "",
    longitude: "",
    food_safety: [],
    food_image: [],
    food_tax: [],
    mb_certificate: [],
    file_upload5: [],
    gst_tin: [],
    addhaar_no: [],
    pan_card_file: [],
    mh_agreement: [],
    // partner_pic: [],
    food_image: "",
  };
};
const foodAccPropertyForm = () => {
  return {
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
    Name_Of_Contact_Person: "",
  };
};
const foodTransportForm = () => {
  return {
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
  };
};
const foodMedicalStore = () => {
  return {
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
  };
};
export default {
  data() {
    return {
      dialogTitle: "",
      ...validations,
      url: "",
      title: "My Food Items",
      label2: "",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      subFoodView: false,
      foodDetailsAddForm: false,
      offerOptions: ["Amount", "Percentage"],
      vehiclePrice: ["Per/Km", "Per/Trip"],
      vehicleseats: ["4 Seater", "5 Seater", "6 Seater", "7 Seater"],
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
      vehicle_image: [],
      food_safety: [],
      food_tax: [],
      food_image: [],
      mb_certificate: [],
      gst_tin: [],
      addhaar_no: [],
      file_upload5: [],
      pan_card_file: [],
      mh_agreement: [],
      upload_Image: [],
      upload_Image1: [],
      upload_Image2: [],
      upload_fssai: [],
      upload_fssai_1: [],
      yes: false,
      no: false,
      foodviewdialog: false,
      othercity: false,
      otherstate: false,
      indiastate: false,
      indiacity: false,
      // partner_pic: [],
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
      otherfoodtype: ["Veg", "Non-Veg"],
      editedIndex: -1,
      editedItem: {
        gst_registration: "",
        account_id: "",
        agent_id: "",
        agent_sub_id: "",
        agent_name: "",
        account_id: " ",
        agent_sub_name: "",
        address: "",
        city: "",
        city_id: "",
        location: "",
        status: "",
        gstin: "",
        fssai_no: "",
        partner_status: "",
        food_partner_phone: "",
        restaurant_phone: "",
        phone: "",
        items_available_from: "",
        items_available_to: "",
        item_name: "",
        food_items_name: "",
        kitchen_name: "",
        kitchen_type: "",
        name_of_kitchen: "",
        type_of_kitchen: "",
        foodPartner_name: "",
        foodPartner_sub_name: "",
        select_offer: "",
        enter_amount: "",
        special_offer: "",
      },

      otherFoodAccomadationPartner: {
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

      editedOtherPropertyData: {
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
        state: "",
        city: "",
        pin_code: "",
        checkIn_time: "",
        checkOut_time: "",
        Name_Of_Contact_Person: "",
      },

      editedOtherRoomsData: {
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
        select_offer: "",
        enter_amount: "",
      },

      otherFoodMedicalPartner: {
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
        from_date: "",
        to_date: "",
        name_of_contact_person: "",
        email: "",
        city_name: "",
      },
      otherFoodtravelPartner: {
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
        travel_status: "",
      },

      foodDetails: {
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
        item_name:"",
        price:"",
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
        city_name:"",
      },
      foodRestaurantDetails: {
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
        enter_again: "",
      },
      foodRestaurantEditedItem: {
        agent_id: "",
        agent_sub_id: "",
        food_partner_sub_name: "",
      },
      editFoodRestaurant: {
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
        state:'',
        city:'',
        fssai_no: "",
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
        agent_name: "",
        agent_sub_name: "",
        date_from: "",
        date_to: "",
        phone: "",
        select_offer: "",
        enter_amount: "",
      },
      onclickValue: "",
      addOtherFoodAccoPartner: false,
      editFoodForm: false,
      addOtherFoodMedicalPartner: false,
      addOtherFoodTravelPartner: false,
      propertyOtherDataDialog: false,
      otherroomsDialog: false,
      otherpropertyEditDialog: false,
      otherroomsDataDialog: false,
      otherroomsEditDialog: false,
      otherequipmentUpdatingDetails: false,
      otherTravelForm: false,
      foodRestaurantDialog: false,
      foodRestaurantEditDialog: false,
      foodRestaurantDataDialog: false,
      transportDialog: false,
      transportViewDialog: false,
      transportEditDialog: false,
      foodMedicalStoreDetails: false,
      foodmedicalStoreViewDialog: false,
      foodmedicalStoreEditDialog: false,

      otherpropertyEditedItem: {
        partner_id: "",
        partner_sub_id: "",
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
        city_name:"",
      },
      foodPartnerForm: {
        user_id: "",
        name: "",
        partner_sub_name: "",
        agent_id: "",
        agent_sub_id: "",
        gst_registration: "",
        gstin: "",
        fssai_no: "",
        phone: "",
        fax: "",
        alternate_no: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        country: "",
        prevstate: "",
        prevcity: "",
        state: "",
        city1: "",
        state1: "",
        pin_code: "",
        pan: "",
        aadhar: "",
        gstin: "",
        fssai_no: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        city: "",
        address: "",
        location: "",
        city_id: "",
        gstin: "",
        fssai_no: "",
        accept: false,
        status: "",
        foodPartner_name: "",
        foodPartner_sub_name: "",
        food_type_id: "",
        select_offer: "",
        special_offer: "",
        enter_amount: "",
      },
      otherroomsEditedItem: {
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
      },
      otherRoomDetails: {
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
        room_type: "",
        facilities: null,
        price: "",
        units: "",
        property_txn_id: "",
        other_amenities: "",
        select_offer: "",
        enter_amount: "",
        room_numbers: [],
      },
      editOtherMedicalDetails: {
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

      othertravelLocation: {
        account_id: "",
        user_id: "",
        agent_id: "",
        transport_sub_id: "",
        agent_name: "",
        transport_sub_name: "",
        // vehicle_type: "",
        city: "",
        city_id: "",
        address: "",
        location: "",
        vehicle_name: "",
        no_of_seaters: "",
        day_price: "",
        night_price: "",
        units: "",
        location: "",
        address: "",
        description: "",
        // special_offer:"",
        vehicle_image: "",
        txn_id: "",
        travel_status: "",
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
        country: "",
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
        upload_image2: "",
        upload_image3: "",
        select_offer: "",
        enter_amount: "",
      },
      FoodMedicalStore: {
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
        select_offer: "",
        enter_amount: "",
        medical_store_name: "",
      },
      FoodmedicalstoreeditedItem: {
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
        select_offer: "",
        enter_amount: "",
        medical_store_name: "",
      },
      roomTypeArr: ["Single Share", "Double Share", "Triple Share"],
      room_categoryArr: ["Basic", "Standard", "Supreme"],
      unitsArr: ["Per Day"],
      number: [
        (value) => !!value || "Bank A/C No is Required.",
        (v) => /^[0-9_. ]*$/.test(v) || "Please enter numbers only",
      ],

      pinnumberRules: [
        (v) => !!v || "Pin Code is required",
        (v) => /^[0-9_ ]*$/.test(v) || "Only Numbers are allowed",
        (v) => (v && v.length == 6) || "Value Must be 6 Digit",
      ],
      columns: "",
      pagination: {
        rowsPerPage: 500,
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
      s_no: [],

      small: false,
      statesList: [],
      stateOptions: [],
      cityOptions: [],
      countryOptions: [],
      gstOptions: ["Registered", "Unregistered"],
      food_Items_Array_Data:[],
      food_Items_column:[
        {
          align: "center",
          label: "Sno",
          field: "index",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          align: "left",
          label: "Kitchen Name",
          field: "kitchen_name",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          align: "left",
          label: "Kitchen Type",
          field: "kitchen_type",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          align: "left",
          label: "Food Item Name",
          field: "food_items_name",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          label: "Food Item Type",
          align: "left",
          field: "item_name",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          label: "Item Available From",
          align: "left",
          field: "items_available_from",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          label: "Item Available To",
          align: "left",
          field: "items_available_to",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          label: "Units",
          align: "left",
          field: "units",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          label: "Price",
          align: "left",
          field: "price",
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          label: "City",
          align: "left",
          field: row=>{
            return `${row.city_name.city}`
          },
          headerClasses: "bg-primary text-white",
          headerStyle: {
            fontWeight: "bold"
          }
        },
        {
          name:"actions",
          label: "Delete",
          field: "actions",
          headerClasses: "bg-primary text-white",
          align: "center",
          headerStyle: {
            fontWeight: "bold"
          }
        }
      ],
    };
  },
  created() {
    console.log("medicalFoodStoreItems", this.equipment_medical_store);
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      propertyOptions: (state) => state.master.properties_arr,
      food_partner_registration_rows: (state) =>
        state.partners.food_partner_registration_rows,
      food_partner_registration_columns: (state) =>
        state.partners.food_partner_registration_columns,

      food_registration_rows: (state) => state.partners.food_registration_rows,
      food_registration_columns: (state) =>
        state.partners.food_registration_columns,
      otherrooms_data_columns: (state) =>
        state.partners.otherrooms_data_columns,
      otherequipment_item_rows: (state) =>
        state.partners.otherequipment_item_rows,
      otherequipment_item_columns: (state) =>
        state.partners.otherequipment_item_columns,
      othertravel_item_rows: (state) => state.partners.othertravel_item_rows,
      othertravel_item_columns: (state) =>
        state.partners.othertravel_item_columns,

      foodDetails_rows: (state) => state.partners.foodDetails_rows,
      foodDetails_rows_partner: (state) => state.partners.foodDetails_rows_partner,

      foodDetails_columns: (state) => state.partners.foodDetails_columns,
      // property_data_rows: state => state.partners.property_data_rows,
      foodproperty_data_columns: (state) =>
        state.partners.foodproperty_data_columns,
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
      foodThaliArr: (state) => state.dropdown.food_item_types_arr,
      foodListArr: (state) => state.dropdown.food_list_arr,
      propertyAmenitiesArr: (state) => state.dropdown.property_amenities_arr,
      amenitiesArr: (state) => state.dropdown.amenities_arr,
      otherFoodmedicalItemName: (state) => state.dropdown.medical_item_name,
      otherFoodmedicalUnitsName: (state) => state.dropdown.medical_units_name,
      food_restaurant_data_columns: (state) =>
        state.partners.food_restaurant_data_columns,
      foodtransport_item_rows: (state) =>
        state.partners.foodtransport_item_rows,
      foodtransport_item_columns: (state) =>
        state.partners.foodtransport_item_columns,
      foodmedicalstore_item_rows: (state) =>
        state.partners.foodmedicalstore_item_rows,
      foodmedicalstore_item_columns: (state) =>
        state.partners.foodmedicalstore_item_columns,
      medicalFoodStoreItems: (state) => state.dropdown.equipment_medical_store,
    }),
    ...mapGetters("partners", ["food_partner_reg_rows"]),
    ...mapGetters("partners", ["foodproperty_data_rows"]),
    ...mapGetters("partners", ["otherrooms_data_rows"]),
    ...mapGetters("partners", ["food_restaurant_data_rows"]),
  },
  mounted() {
    this.$store.dispatch("partners/getFoodRegistrationBasedOnStatus");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("partners/getFoodRegistrationMaster");
    this.$store.dispatch("dropdown/loadAllFoodTypes");
    this.$store.dispatch("dropdown/loadPropertyFacilities");
    this.$store.dispatch("dropdown/loadAllFacilities");
    this.$store.dispatch("dropdown/loadAllEquipmentItems");
    this.$store.dispatch("master/loadPropertiesDropdown");
    this.$store.dispatch("dropdown/loadAllMedicalStores");
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
    deleteItem(item) {
      const index = this.foodData_rows.indexOf(item);
      this.foodData_rows.splice(index, 1);
      this.$q.notify("deleted!");
    },
    ...mapActions("partners", ["foodRegistrationMasterAdd"]),
    ...mapActions("dropdown", ["loadAllMedicalUnits"]),
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("partners", ["getFoodRegistrationBasedOnStatus"]),
    ...mapActions("partners", ["getFoodRegistrationMaster"]),
    ...mapActions("partners", ["getExistingUserFoodPartner"]),
    ...mapActions("partners", ["updateFoodPartnerDetails"]),
    ...mapActions("partners", ["foodDetailsSaving"]),
    ...mapActions("partners", ["otherFoodpropertyDetailsSaving"]),
    ...mapActions("partners", ["otherFoodMedicalSaving"]),
    ...mapActions("partners", ["foodDetailsUpdating"]),
    ...mapActions("partners", ["getfoodDetails"]),
    ...mapActions("dropdown", ["loadAllFoodTypes"]),
    ...mapActions("dropdown", ["loadAllFoodItems"]),
    ...mapActions("partners", ["otherFoodTravelSaving"]),
    ...mapActions("partners", ["otherroomDetailsSaving"]),
    ...mapActions("partners", ["loadPropertyDetails"]),
    ...mapActions("partners", ["loadRoomsDetails"]),
    ...mapActions("partners", ["updateOtherPropertyDetails"]),
    ...mapActions("partners", ["updateOtherRoomsDetails"]),
    ...mapActions("partners", ["loadMedicalEqpData"]),
    ...mapActions("partners", ["updatingOtherEquipmentDetailsForm"]),
    ...mapActions("partners", ["updatingOtherTravelDetailsForm"]),
    ...mapActions("partners", ["loadTravelDetailsSaving"]),
    ...mapActions("partners", ["foodRestaurantDetailsSaving"]),
    ...mapActions("partners", ["getFoodRestaurantDetails"]),
    ...mapActions("partners", ["updateFoodRestaurant"]),
    ...mapActions("partners", ["foodtransportDetailsSaving"]),
    ...mapActions("partners", ["getFoodTransportDetailsSaving"]),
    ...mapActions("partners", ["updatingFoodTransportDetails"]),
    ...mapActions("partners", ["saveFoodMedicalStoresData"]),
    ...mapActions("partners", ["getFoodMedicalStoreDetailsSaving"]),
    ...mapActions("partners", ["updatingFoodMedicalStoreDetails"]),
    ...mapActions("dropdown", ["loadAllMedicalStores"]),
    ...mapActions("partners", ["fooditemdetailsUpdating"]),


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
                  // console.log("this.foodPartnerForm", this.foodPartnerForm);

                  this.foodPartnerForm.agent_id = this.editedItem.agent_id;
                  this.foodPartnerForm.agent_name = this.editedItem.agent_name;
                  this.foodPartnerForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  // console.log("formData", this.formData);
                  formData.append("pan_card_file", this.pan_card_file);
                  formData.append("addhaar_no", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("food_tax", this.food_tax);
                  formData.append("mh_agreement", this.mh_agreement);
                  formData.append("fssai_no", this.fssai_no);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("food_safety", this.food_safety);
                  formData.append("file_upload5", this.file_upload5);
                  formData.append(
                    "foodPartnerDetails",
                    JSON.stringify(this.foodPartnerForm)
                  );
                  // console.log("this.foodPartnerForm)", this.foodPartnerForm);
                  this.foodRegistrationMasterAdd(formData);
                  this.resetFiles();
                  this.foodPartnerForm = foodRegistrationMaster();
                  this.$refs.agentFormSubmit.resetValidation();
                  this.details = false;
                  this.addDataDialog = false;
                  this.subFoodView = false;
                  this.step = 1;
                  this.$store.dispatch(
                    "partners/getFoodRegistrationStatusCount"
                  );
                  this.getFoodRegistrationMaster();
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
                  this.foodPartnerForm.agent_id = "";
                  this.foodPartnerForm.agent_sub_name =
                    this.foodPartnerForm.name;
                  this.foodPartnerForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("pan_card_file", this.pan_card_file);
                  formData.append("addhaar_no", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("food_tax", this.food_tax);
                  formData.append("mh_agreement", this.mh_agreement);
                  formData.append("fssai_no", this.fssai_no);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("food_safety", this.food_safety);
                  formData.append("file_upload5", this.file_upload5);
                  formData.append(
                    "foodPartnerDetails",
                    JSON.stringify(this.foodPartnerForm)
                  );
                  this.foodRegistrationMasterAdd(formData);
                  this.resetFiles();
                  this.foodPartnerForm = foodRegistrationMaster();
                  this.$refs.agentFormSubmit.resetValidation();
                  this.details = false;
                  this.addDataDialog = false;
                  this.subFoodView = false;
                  this.step = 1;
                  this.$store.dispatch(
                    "partners/getFoodRegistrationStatusCount"
                  );
                  this.getFoodRegistrationMaster();
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
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.foodPartnerForm.user_id = this.userDetails.account_id;
                this.updateFoodPartnerDetails(this.foodPartnerForm);
                this.foodPartnerForm = foodRegistrationMaster();
                this.$refs.agentFormSubmit.resetValidation();
                this.addDataDialog = false;
                this.step = 1;
                this.onclickValue = "";
                this.subFoodView = false;
                this.getFoodRegistrationMaster();
              });
          }
        });
      }
    },
    addFoodItems(){
      // console.log(this.foodDetails)
      if (this.foodDetails.agent_id != "" && this.foodDetails.food_items_name != "" && this.foodDetails.item_name != "" && this.foodDetails.items_available_from != "" && this.foodDetails.items_available_to != ""
       && this.foodDetails.units != "" && this.foodDetails.price != "" && this.food_image.name !== undefined) {
        this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Add data ?",
          })
          .onOk(() => {
            let foodDetail=this.foodDetails;
            foodDetail.user_id=this.userDetails.account_id;
            foodDetail.food_image=this.food_image
            this.food_Items_Array_Data.push({
              index:this.food_Items_Array_Data.length+1,
              ...foodDetail
            })
            this.emptyValue();
          })
      }else{
        this.$q.dialog({
          title: "Error",
          message: "Please Fill Required data ?",
        })
      }
    },
    deleteFoodDetailsRow(index) {
      const filter_food_Items_Array_Data = this.food_Items_Array_Data.filter((everyFoodItem) => {
        return everyFoodItem.index !== index
      });
      let new_food_Items_Array_Data=[]
      for (let everyFoodItem in filter_food_Items_Array_Data){
        let item = filter_food_Items_Array_Data[everyFoodItem];
        item.index = parseInt(everyFoodItem)+1; // Assuming you want to update the 'index' property
        new_food_Items_Array_Data.push({
          ...item
        });
      }
      this.food_Items_Array_Data = filter_food_Items_Array_Data;
    },
    Submitfood(val) {
      if (val == "submit") {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              for (let eachIndex in this.food_Items_Array_Data){
                // console.log(this.food_Items_Array_Data[eachIndex].food_image)
                const formData = new FormData();
                formData.append("food_image",this.food_Items_Array_Data[eachIndex].food_image)
                formData.append(
                  "food_details",
                  JSON.stringify(this.food_Items_Array_Data[eachIndex])
                );
                this.foodDetailsSaving(formData);
                this.getfoodDetails(this.foodRestaurantEditedItem);
              }
                this.$refs.foodDetailsAddForm.resetValidation();
                this.foodDetailsAddForm = false;
                this.subFoodView = false;
                this.details = false;
                this.food_Items_Array_Data=[]
                this.resetFiles();
            })
            .onCancel(() => {
              this.foodDetailsAddForm = true;
            });
        }
        else if (val == "update") {
        this.$refs.foodDetailsAddForm.validate().then((success) => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.foodDetailsUpdating(this.foodDetails);
                this.$refs.foodDetailsAddForm.resetValidation();
                this.foodDetailsAddForm = false;
                this.subFoodView = false;
                this.details = false;
                this.getfoodDetails(this.foodRestaurantEditedItem);
              });
          }
        });
      }
    },

    otheronFoodPropertySubmit() {
      this.$refs.addOtherFoodAccoPartner.validate().then((success) => {
        if (success) {
          if (this.otherFoodAccomadationPartner.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                const formData = new FormData();
                this.otherFoodAccomadationPartner.agent_name =
                  this.editedItem.agent_name;
                this.otherFoodAccomadationPartner.agent_sub_name =
                  this.editedItem.agent_sub_name;
                formData.append("upload_image1", this.uploadImage);
                formData.append("upload_image2", this.uploadImage1);
                formData.append("upload_image3", this.uploadImage2);
                formData.append("upload_image4", this.uploadImage3);
                formData.append("upload_image5", this.uploadImage4);
                formData.append(
                  "property_details",
                  JSON.stringify(this.otherFoodAccomadationPartner)
                );
                this.otherFoodpropertyDetailsSaving(formData);
                this.resetFiles();

                // this.propertyPartnerForm = propertyRegistrationMaster();
                this.addOtherFoodAccoPartner = false;
                this.details = false;
                this.otherFoodAccomadationPartner = {};
                this.step = 1;
                this.loadPropertyDetails(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.addOtherFoodAccoPartner = true;
              });
          }
        }
      });
    },

    onOtherFoodMedicalForm() {
      this.$refs.addOtherFoodMedicalPartner.validate().then((success) => {
        if (this.otherFoodMedicalPartner.agent_id != "") {
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
                this.otherFoodMedicalPartner.account_id =
                  this.userDetails.account_id;
                const formData = new FormData();
                formData.append("equipment_image", this.equipment_image);
                formData.append(
                  "equipmentItemDetails",
                  JSON.stringify(this.otherFoodMedicalPartner)
                );
                // formData.append(
                //   "equipmentRows",
                //   JSON.stringify(this.equipmentRows)
                // );
                this.otherFoodMedicalSaving(formData);
                this.resetFiles();
                this.addOtherFoodMedicalPartner = false;
                //this.$refs.addOtherMedicalPartner.resetValidation();
                // this.subPropertyView = true;
                // this.equipmentLocationForm = false;
                this.details = false;
                this.otherFoodMedicalPartner = {};
                this.step = 1;
                this.foodmedicalStoreViewDialog = false;
                this.loadMedicalEqpData(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.emptyValue();
                this.addOtherFoodMedicalPartner = true;
              });
          }
        }
      });
    },

    otheronFoodSubmit() {
      this.$refs.addOtherFoodTravelPartner.validate().then((success) => {
        if (this.otherFoodtravelPartner.agent_id != "") {
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
                this.otherFoodtravelPartner.account_id =
                  this.userDetails.account_id;
                const formData = new FormData();
                formData.append("vehicle_image", this.vehicle_image);
                formData.append(
                  "travelLocation",
                  JSON.stringify(this.otherFoodtravelPartner)
                );
                //  console.log("sasa", this.otherFoodtravelPartner)

                // formData.append(
                //   "equipmentRows",
                //   JSON.stringify(this.equipmentRows)
                // );
                this.otherFoodTravelSaving(formData);
                this.resetFiles();
                this.addOtherFoodTravelPartner = false;
                this.details = false;
                this.otherFoodtravelPartner = {};
                this.step = 1;
                this.loadTravelDetailsSaving(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.emptyValue();
                this.addOtherFoodTravelPartner = true;
              });
          }
        }
      });
    },

    onOtherRoomsSubmit() {
      this.$refs.roomsFormBasic.validate().then((success) => {
        if (success) {
          if (this.otherRoomDetails.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.otherRoomDetails.account_id = this.userDetails.account_id;
                this.otherRoomDetails.date_from =
                  this.otherRoomDetails.date_from
                    .split("/")
                    .reverse()
                    .join("-");
                this.otherRoomDetails.date_to = this.otherRoomDetails.date_to
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
                  JSON.stringify(this.otherRoomDetails)
                );
                //  console.log("ooo",this.otherRoomDetails)
                this.otherroomDetailsSaving(formData);
                this.resetFiles();
                this.otherroomsDialog = false;
                this.step = 1;
                this.otherRoomDetails = {};
                this.propertyOtherDataDialog = false;
                this.details = false;
              })
              .onCancel(() => {
                this.resetFiles();
                this.propertyOtherDataDialog = true;
              });
          }
        }
      });
    },

    onOtherPropertyUpdate() {
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
              this.updateOtherPropertyDetails(this.editedOtherPropertyData);
              this.otherpropertyEditDialog = false;
              this.loadPropertyDetails(this.editedItem);
            })
            .onCancel(() => {
              this.resetFiles();
              this.otherpropertyEditDialog = true;
            });
        }
      });
    },

    onOtherRoomsUpdate() {
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
              this.editedOtherRoomsData.date_from =
                this.editedOtherRoomsData.date_from
                  .split("/")
                  .reverse()
                  .join("-");
              this.editedOtherRoomsData.date_to =
                this.editedOtherRoomsData.date_to
                  .split("/")
                  .reverse()
                  .join("-");
              this.updateOtherRoomsDetails(this.editedOtherRoomsData);
              this.otherroomsDataDialog = false;
              this.propertyOtherDataDialog = false;
              this.details = false;
              this.loadRoomsDetails();
            })
            .onCancel(() => {
              this.resetFiles();
              this.otherroomsDataDialog = true;
            });
        }
      });
    },

    onOtherUpdatingEquipmentDetailForm() {
      this.$refs.editOtherEquipmentDetails.validate().then((success) => {
        if (this.editOtherMedicalDetails.equipment_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.updatingOtherEquipmentDetailsForm(
                  this.editOtherMedicalDetails
                );
                this.otherequipmentUpdatingDetails = false;
                // this.addDataDialog = false;
                // this.subPropertyView = true;
                // this.equipmentLocationForm = false;
                this.details = false;
                this.otherequipmentUpdatingDetails = {};
                this.resetFiles();
                this.loadMedicalEqpData(this.editedItem);
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

    onOtherTravelUpdate() {
      this.$refs.otherTravelForm.validate().then((success) => {
        if (this.othertravelLocation.equipment_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.updatingOtherTravelDetailsForm(this.othertravelLocation);
                this.otherTravelForm = false;
                // this.addDataDialog = false;
                // this.subPropertyView = true;
                // this.equipmentLocationForm = false;
                this.details = false;
                this.othertravelLocation = {};
                this.resetFiles();
                this.loadTravelDetailsSaving(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.otherTravelForm = true;
              });
          }
        }
      });
    },

    showOtherPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.otherpropertyEditedItem = Object.assign({}, item);
      this.otherpropertyEditedItem.partner_id = item.partner_id;
      this.otherpropertyEditedItem.partner_sub_id = item.partner_sub_id;
      this.propertyOtherDataDialog = true;
      this.loadRoomsDetails(this.otherpropertyEditedItem);
    },

    openOtherRoomsDialog() {
      this.otherRoomDetails.partner_id =
        this.otherpropertyEditedItem.partner_id;
      this.otherRoomDetails.partner_sub_id =
        this.otherpropertyEditedItem.partner_sub_id;
      this.otherRoomDetails.partner_name =
        this.otherpropertyEditedItem.partner_name;
      // this.otherRoomDetails.partner_phone = this.propertyEditedItem.partner_phone;
      this.otherRoomDetails.sub_partner_name =
        this.otherpropertyEditedItem.sub_partner_name;
      this.otherRoomDetails.property_name =
        this.otherpropertyEditedItem.property_name;
      this.otherRoomDetails.sub_property_name =
        this.otherpropertyEditedItem.sub_property_name;
      this.otherRoomDetails.property_txn_id =
        this.otherpropertyEditedItem.txn_id;

      this.otherroomsDialog = true;
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
    getOtherAmenities(facilities) {
      for (let i = 0; i < facilities.length; i++) {
        if (facilities[i].amenity_name == "Others") {
          this.otheramenitiesinput = true;
        } else {
          this.otheramenitiesinput = false;
        }
      }
    },
    createValue(val, done) {
      this.showOk = false;
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

      this.$refs.myChipInput.updateInputValue("");
      this.$refs.myChipEditInput.updateInputValue("");
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxy1.hide();
    },

    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.agent_sub_id = item.agent_sub_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.address = item.address;
      this.editedItem.city = item.city;
      this.editedItem.location = item.location;
      this.editedItem.partner_status = item.status;
      this.editedItem.city_id = item.city_id;
      this.editedItem.gstin = item.gstin;
      this.editedItem.fssai_no = item.fssai_no;
      // this.editedItem.food_image = item.food_image;

      this.getExistingUserFoodPartner(item.agent_id);
      // this.details = true;
      this.subFoodView = true;
    },
    editPropertyItem(item) {
      // console.log("item", item);
      this.step = 1;
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.addDataDialog = true;
      this.onclickValue = "edit";
      this.foodPartnerForm.agent_id = item.agent_id;
      this.foodPartnerForm.agent_sub_id = item.agent_sub_id;
      this.foodPartnerForm.name = item.agent_name;
      this.foodPartnerForm.partner_sub_name = item.agent_sub_name;
      this.foodPartnerForm.phone = item.phone;
      this.foodPartnerForm.fax = item.fax;
      this.foodPartnerForm.alternate_no = item.alternate_no;
      this.foodPartnerForm.email_id = item.email_id;
      this.foodPartnerForm.description = item.description;
      this.foodPartnerForm.building_no = item.building_no;
      this.foodPartnerForm.street = item.street;
      this.foodPartnerForm.land_mark = item.land_mark;
      this.foodPartnerForm.country = item.country;
      this.foodPartnerForm.state = item.state;
      this.foodPartnerForm.city = item.city;
      this.foodPartnerForm.prevstate = item.state;
      this.foodPartnerForm.prevcity = item.city;
      this.foodPartnerForm.city_id = item.city_id;
      this.foodPartnerForm.pin_code = item.pin_code;
      this.foodPartnerForm.gst_registration = item.gst_registration;

      this.foodPartnerForm.fssai_no = item.fassai_no;
      this.foodPartnerForm.pan = item.pan;
      this.pan_card_file = {
        name: item.pan_card_file ?? "",
      };
      this.foodPartnerForm.aadhar = item.aadhar;
      this.addhaar_no = {
        name: item.addhaar_no ?? "",
      };
      this.foodPartnerForm.gstin = item.gstin;
      this.foodPartnerForm.fssai_no = item.fssai_no;
      this.gst_tin = {
        name: item.gst_tin_loc ?? "",
      };
      this.mh_agreement = {
        name: item.mh_agreement_loc ?? "",
      };
      this.mb_certificate = {
        name: item.mb_certificate_loc ?? "",
      };
      this.food_tax = {
        name: item.food_tax ?? "",
      };
      this.food_safety = {
        name: item.food_safety_certificate ?? "",
      };
      this.foodPartnerForm.bankAccountNo = item.bankAccountNo;
      this.foodPartnerForm.bankName = item.bankName;
      this.foodPartnerForm.branchName = item.branchName;
      this.foodPartnerForm.ifsc = item.ifsc;
      this.file_upload5 = {
        name: item.file_upload5 ?? "",
      };
    },

    editFoodItemdetails(item) {
      // console.log("editFoodItemdetails",item);
      // this.step = 1;
      this.editedIndex = this.data.indexOf(item);
      this.editedfoodDetails = Object.assign({}, item);
      //  this.addDataDialog = true;
      // this.foodDetailsAddForm = true;
      // this.onclickValue = "edit";
      this.editedfoodDetails.account_id = item.account_id;
      this.editedfoodDetails.item_txn_id = item.item_txn_id;
      // this.editedfoodDetails.item_txn_id = item.txn_id;
      this.editedfoodDetails.agent_id = item.agent_id;
      this.editedfoodDetails.agent_sub_id = item.agent_sub_id;
      this.editedItem.foodPartner_name = item.agent_name;
      this.editedItem.foodPartner_sub_name = item.agent_sub_name;
      this.editedfoodDetails.agent_name = item.foodPartner_name;
      this.editedfoodDetails.sub_Name = item.foodPartner_sub_name;
      this.editedfoodDetails.address = item.address;
      this.editedfoodDetails.city = item.city;
      this.editedfoodDetails.location = item.location;
      this.editedfoodDetails.partner_status = item.partner_status;
      this.editedfoodDetails.city_id = item.city_id;
      this.editedfoodDetails.gstin = item.gstin;
      this.editedfoodDetails.fssai_no = item.fssai_no;
      this.editedfoodDetails.name_of_kitchen = item.kitchen_name;
      this.editedfoodDetails.type_of_kitchen = item.kitchen_type;
      this.editedfoodDetails.item_name = item.item_name;
      this.editedfoodDetails.food_type_id = item.food_type_id;
      this.editedfoodDetails.food_items_name = item.food_items_name;
      this.editedfoodDetails.units = item.units;
      this.editedfoodDetails.price = item.price;
      this.editedfoodDetails.items_available_from = item.items_available_from;
      this.editedfoodDetails.items_available_to = item.items_available_to;
      this.editedfoodDetails.food_image = item.food_image;
      this.editedfoodDetails.select_offer = item.select_offer;
      this.editedfoodDetails.enter_amount = item.enter_amount;
      this.editedfoodDetails.special_offer = item.special_offer;
      this.editedfoodDetails.food_image = item.food_image;
      this.food_image = {
        name: item.food_image ?? "",
      };
      const state={
        state_id : this.foodRestaurantEditedItem.state_id,
        state_name : this.foodRestaurantEditedItem.state_name
      }
      this.loadAllCities(state)
      // this.food_image = {
      //   name: item.food_image ?? "",
      // };
      this.editFoodForm = true;
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
    // editFoodItem(item) {
    //   this.step = 1;
    //   this.editedIndex = this.data.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   //  this.addDataDialog = true;
    //   this.foodDetailsAddForm = true;
    //   this.onclickValue = "edit";
    //   this.foodDetails.account_id = item.account_id;
    //   this.foodDetails.item_txn_id = item.item_txn_id;
    //   this.foodDetails.item_txn_id = item.txn_id;
    //   this.foodDetails.agent_id = item.agent_id;
    //   this.foodDetails.agent_sub_id = item.agent_sub_id;
    //   this.editedItem.foodPartner_name = item.agent_name;
    //   this.editedItem.foodPartner_sub_name = item.agent_sub_name;
    //   this.foodDetails.agent_name = item.foodPartner_name;
    //   this.foodDetails.sub_Name = item.foodPartner_sub_name;
    //   this.foodDetails.address = item.address;
    //   this.foodDetails.city = item.city;
    //   this.foodDetails.location = item.location;
    //   this.foodDetails.partner_status = item.partner_status;
    //   this.foodDetails.city_id = item.city_id;
    //   this.foodDetails.gstin = item.gstin;
    //   this.foodDetails.fssai_no = item.fssai_no;
    //   this.foodDetails.kitchen_name = item.kitchen_name;
    //   this.foodDetails.kitchen_type = item.kitchen_type;
    //   this.foodDetails.item_name = item.item_name;
    //   this.foodDetails.food_type_id = item.food_type_id;
    //   this.foodDetails.food_items_name = item.food_items_name;
    //   this.foodDetails.units = item.units;
    //   this.foodDetails.price = item.price;
    //   this.foodDetails.items_available_from = item.items_available_from;
    //   this.foodDetails.items_available_to = item.items_available_to;
    //   this.foodDetails.food_image = item.food_image;
    //   this.foodDetails.select_offer = item.select_offer;
    //   this.foodDetails.enter_amount = item.enter_amount;
    //   this.foodDetails.special_offer = item.special_offer;

    //   this.food_image = {
    //     name: item.food_image ?? "",
    //   };
    // },
    openPropertyDialog() {
      this.foodDetails.account_id = this.foodRestaurantEditedItem.account_id;
      this.foodDetails.agent_id = this.foodRestaurantEditedItem.agent_id;
      this.foodDetails.agent_sub_id =
        this.foodRestaurantEditedItem.agent_sub_id;
      this.foodDetails.foodPartner_name =
        this.foodRestaurantEditedItem.food_partner_name;
      this.foodDetails.foodPartner_sub_name =
        this.foodRestaurantEditedItem.food_partner_sub_name;
      this.foodDetails.kitchen_name =
        this.foodRestaurantEditedItem.name_of_kitchen;
      this.foodDetails.kitchen_type =
        this.foodRestaurantEditedItem.type_of_kitchen;
      this.foodDetails.address = this.foodRestaurantEditedItem.address;
      this.foodDetails.gstin = this.foodRestaurantEditedItem.gstin;
      this.foodDetails.city = this.foodRestaurantEditedItem.city_name;
      this.foodDetails.city_id = this.foodRestaurantEditedItem.city_id;
      this.foodDetails.location = this.foodRestaurantEditedItem.location;
      this.foodDetails.partner_status =
        this.foodRestaurantEditedItem.partner_status;
      this.foodDetails.txn_id = this.foodRestaurantEditedItem.txn_id;
      this.foodDetails.items_available_from =
        this.editedItem.items_available_from;
      this.foodDetails.items_available_to = this.editedItem.items_available_to;
      this.foodDetails.fssai_no = this.foodRestaurantEditedItem.fssai_no;
      this.foodDetails.select_offer =
        this.foodRestaurantEditedItem.select_offer;
      this.foodDetails.special_offer =
        this.foodRestaurantEditedItem.special_offer;
      this.foodDetails.enter_amount =
        this.foodRestaurantEditedItem.enter_amount;
      this.foodDetails.item_txn_id = this.editedItem.item_txn_id;
      this.foodDetails.food_items_id = this.editedItem.food_items_id;
      // this.foodDetails.food_partner_name =
      //   this.foodRestaurantEditedItem.foodpartner_name;
      // this.foodDetails.food_partner_sub_name =
      //   this.foodRestaurantEditedItem.foodpartner_sub_name;
      this.foodDetails.foodPartner_name = this.editedItem.foodPartner_name;
      this.foodDetails.foodpartner_sub_name =
        this.editedItem.foodpartner_sub_name;
      this.foodDetails.foodData = this.editedItem.foodData;

      // this.foodDetails.units=this.editedItem.units;
      this.foodDetails.price = this.editedItem.price;
      // this.foodDetails.account_id = this.userDetails.account_id;
      // this.foodDetails.agent_id = this.foodRestaurantEditedItem.agent_id;
      // this.foodDetails.agent_sub_id = this.foodRestaurantEditedItem.agent_sub_id;
      // this.foodDetails.foodPartner_name = this.foodRestaurantEditedItem.food_partner_name;
      // this.foodDetails.foodPartner_sub_name = this.foodRestaurantEditedItem.food_partner_sub_name;
      // this.foodDetails.kitchen_name = this.foodRestaurantEditedItem.name_of_kitchen;
      // this.foodDetails.kitchen_type = this.foodRestaurantEditedItem.type_of_kitchen;
      // this.foodDetails.address = this.foodRestaurantEditedItem.address;
      // this.foodDetails.city = this.foodRestaurantEditedItem.city_name;
      // this.foodDetails.location = this.foodRestaurantEditedItem.location;
      // this.foodDetails.partner_status = this.foodRestaurantEditedItem.partner_status;
      // this.foodDetails.city_id = this.foodRestaurantEditedItem.city_id;
      // this.foodDetails.gstin = this.foodRestaurantEditedItem.gstin;
      // this.foodDetails.fssai_no = this.foodRestaurantEditedItem.fssai_no;
      // this.foodDetails.txn_id = this.foodRestaurantEditedItem.txn_id;
      // this.foodDetails.select_offer = this.foodRestaurantEditedItem.select_offer;
      // this.foodDetails.enter_amount = this.foodRestaurantEditedItem.enter_amount;
      // this.foodDetails.special_offer = this.foodRestaurantEditedItem.special_offer;
      // this.foodDetails.item_txn_id = this.foodRestaurantEditedItem.txn_id;
      // console.log("foodRestaurantEditedItem", this.foodRestaurantEditedItem);
      // console.log("foodDetails", this.foodDetails);
      const state={
        state_id : this.foodRestaurantEditedItem.state_id,
        state_name : this.foodRestaurantEditedItem.state_name
      }
      this.loadAllCities(state)
      this.foodDetailsAddForm = true;
      this.onclickValue = "";
      this.emptyValue();
    },

    otherFoodAccomadationForm() {
      this.otherFoodAccomadationPartner.account_id =
        this.userDetails.account_id;
      this.otherFoodAccomadationPartner.partner_id = this.editedItem.agent_id;
      this.otherFoodAccomadationPartner.partner_sub_id =
        this.editedItem.agent_sub_id;
      this.otherFoodAccomadationPartner.partner_name =
        this.editedItem.agent_name;
      this.otherFoodAccomadationPartner.partner_sub_name =
        this.editedItem.agent_sub_name;
      this.otherFoodAccomadationPartner.partner_phone = this.editedItem.phone;
      this.otherFoodAccomadationPartner.property_phone = this.editedItem.phone;
      this.otherFoodAccomadationPartner.property_email_id =
        this.editedItem.email_id;

      this.onclickValue = "";
      this.emptyValue();
      this.addOtherFoodAccoPartner = true;
    },

    otherFoodMedicalForm() {
      this.otherFoodMedicalPartner.account_id = this.userDetails.account_id;
      this.otherFoodMedicalPartner.equipment_id = this.editedItem.equipment_id;
      this.otherFoodMedicalPartner.equipment_sub_id =
        this.editedItem.equipment_sub_id;
      this.otherFoodMedicalPartner.agent_name = this.editedItem.agent_name;
      this.otherFoodMedicalPartner.equipment_sub_name =
        this.editedItem.equipment_sub_name;
      this.otherFoodMedicalPartner.medical_store =
        this.editedItem.medical_store_name;
      this.otherFoodMedicalPartner.address = this.editedItem.address;
      this.otherFoodMedicalPartner.city = this.editedItem.city_name;
      this.otherFoodMedicalPartner.city_id = this.editedItem.city_id;
      this.otherFoodMedicalPartner.location = this.editedItem.location;
      this.otherFoodMedicalPartner.partner_status = this.editedItem.status;
      this.otherFoodMedicalPartner.from_date = this.editedItem.from_date;
      this.otherFoodMedicalPartner.to_date = this.editedItem.to_date;
      this.otherFoodMedicalPartner.email = this.editedItem.email;
      this.otherFoodMedicalPartner.name_of_contact_person =
        this.editedItem.name_of_contact_person;
      this.onclickValue = "";
      this.emptyValue();
      this.addOtherFoodMedicalPartner = true;
    },

    otherFoodTravelForm() {
      this.otherFoodtravelPartner.account_id = this.userDetails.account_id;
      this.otherFoodtravelPartner.agent_id = this.editedItem.agent_id;
      this.otherFoodtravelPartner.transport_sub_id =
        this.editedItem.agent_sub_id;
      this.otherFoodtravelPartner.agent_name = this.editedItem.agent_name;
      this.otherFoodtravelPartner.transport_sub_name =
        this.editedItem.agent_sub_name;
      this.otherFoodtravelPartner.travel_status = this.editedItem.status;
      this.otherFoodtravelPartner.city_id = this.editedItem.city_id;
      this.otherFoodtravelPartner.city = this.editedItem.city;
      this.otherFoodtravelPartner.address = this.editedItem.address;
      this.otherFoodtravelPartner.location = this.editedItem.location;
      //   console.log("wwe", this.editedItem)
      this.onclickValue = "";
      this.emptyValue();
      this.addOtherFoodTravelPartner = true;
    },

    editOtherRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedOtherRoomsData = Object.assign({}, item);
      this.otherroomsEditDialog = true;
      const amenity = [
        {
          amenity_name: item.facilities.split(","),
          icon_image: item.icon_image.split(","),
        },
      ];
      let roomNumbers = item.room_numbers.split(",");
      this.editedOtherRoomsData.room_numbers = roomNumbers;
      this.editedOtherRoomsData.txn_id = item.txn_id;
      this.editedOtherRoomsData.partner_id = item.partner_id;
      this.editedOtherRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedOtherRoomsData.sub_property_name = item.sub_property_name;
      this.editedOtherRoomsData.property_name = item.property_name;
      this.editedOtherRoomsData.room_category = item.room_category;
      this.editedOtherRoomsData.no_of_avail_rooms = item.no_of_avail_rooms;
      this.editedOtherRoomsData.room_type = item.room_type;
      this.editedOtherRoomsData.property_specialOffer =
        item.property_specialOffer;
      this.editedOtherRoomsData.date_from = this.editedOtherRoomsData.date_from;
      this.editedOtherRoomsData.date_to = this.editedOtherRoomsData.date_to;
      this.editedOtherRoomsData.date_from_up =
        this.editedOtherRoomsData.date_from;
      this.editedOtherRoomsData.date_to_up = this.editedOtherRoomsData.date_to;
      this.editedOtherRoomsData.facilities = amenity;
      this.editedOtherRoomsData.price = item.price;
      this.editedOtherRoomsData.other_amenities = item.other_amenities;
      this.editedOtherRoomsData.select_offer = item.select_offer;
      this.editedOtherRoomsData.enter_amount = item.enter_amount;
      this.editedOtherRoomsData.room_numbers = item.room_numbers;
      this.editedOtherRoomsData.units = item.units;
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

    editOtherEquipmentForm(item) {
      this.otherequipmentUpdatingDetails = true;
      this.editOtherMedicalDetails.account_id = item.account_id;
      this.editOtherMedicalDetails.txn_id = item.txn_id;
      this.editOtherMedicalDetails.item_name = item.item_name;
      this.editOtherMedicalDetails.item_id = item.item_id;
      this.editOtherMedicalDetails.price = item.price;
      this.editOtherMedicalDetails.units = item.units;
      this.editOtherMedicalDetails.unit_id = item.units_id;
      this.editOtherMedicalDetails.equipment_id = item.equipment_id;
      this.editOtherMedicalDetails.equipment_sub_id = item.equipment_sub_id;
      this.editOtherMedicalDetails.agent_name = item.agent_name;
      this.editOtherMedicalDetails.equipment_sub_name = item.equipment_sub_name;
      this.editOtherMedicalDetails.medical_store = item.medical_store;
      this.editOtherMedicalDetails.purchased_type = item.purchased_type;
      this.editOtherMedicalDetails.address = item.address;
      this.editOtherMedicalDetails.city = item.city;
      this.editOtherMedicalDetails.city_id = item.city_id;
      this.editOtherMedicalDetails.partner_status = item.partner_status;
      this.editOtherMedicalDetails.location = item.location;

      // this.editOtherMedicalDetails.special_offer = item.special_offer;
      this.equipment_image = { name: item.equipment_image ?? "" };
    },

    editOtherTravel(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  this.onclickValue = "edit";
      this.othertravelLocation.account_id = item.account_id;
      this.othertravelLocation.txn_id = item.txn_id;
      this.othertravelLocation.agent_id = item.agent_id;
      this.othertravelLocation.transport_sub_id = item.transport_sub_id;
      this.editedItem.agent_name = item.travel_name;
      this.othertravelLocation.agent_name = item.travel_name;
      this.othertravelLocation.transport_sub_name = item.transport_sub_name;
      this.editedItem.transport_sub_name = item.transport_sub_name;
      this.othertravelLocation.city = item.city;
      this.othertravelLocation.city_id = item.city_id;
      this.othertravelLocation.travel_status = item.travel_status;
      // this.travelLocation.vehicle_type = item.vehicle_type;
      this.othertravelLocation.vehicle_name = item.vehicle_name;
      this.othertravelLocation.no_of_seaters = item.no_of_seaters;
      this.othertravelLocation.day_price = item.day_price;
      this.othertravelLocation.night_price = item.night_price;
      this.othertravelLocation.units = item.units;
      this.othertravelLocation.address = item.address;
      this.othertravelLocation.location = item.location;
      this.othertravelLocation.description = item.description;
      // this.othertravelLocation.special_offer = item.special_offer;
      this.othertravelLocation.vehicle_image = item.vehicle_image;
      this.vehicle_image = {
        name: item.vehicle_image ?? "",
      };
      this.otherTravelForm = true;
    },

    showOtherRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.otherroomsEditedItem = Object.assign({}, item);
      this.otherroomsEditedItem.partner_id = item.partner_id;
      this.otherroomsEditedItem.partner_sub_id = item.partner_sub_id;
      this.editedOtherRoomsData.partner_id = item.partner_id;
      this.editedOtherRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedOtherRoomsData.property_txn_id = item.property_txn_id;
      this.otherroomsDataDialog = true;
      this.propertyOtherDataDialog = true;
    },

    viewPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.account_id = this.userDetails.account_id;
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.agent_sub_id = item.agent_sub_id;
      this.editedItem.agent_name = item.agent_name;
      this.details = true;
      this.loadPropertyDetails(this.editedItem);
      this.getFoodRestaurantDetails(this.editedItem);
      this.getFoodTransportDetailsSaving(this.editedItem);
      this.getFoodMedicalStoreDetailsSaving(this.editedItem);
    },
    editOtherPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedOtherPropertyData = Object.assign({}, item);
      this.editedOtherPropertyData.partner_id = item.partner_id;
      this.editedOtherPropertyData.partner_sub_id = item.partner_sub_id;
      this.editedOtherPropertyData.partner_name = item.partner_name;
      this.editedOtherPropertyData.partner_sub_name = item.sub_partner_name;
      this.editedOtherPropertyData.property_name = item.property_name;
      this.editedOtherPropertyData.sub_property_name = item.sub_property_name;
      this.editedOtherPropertyData.property_phone = item.property_phone;
      this.editedOtherPropertyData.property_email = item.property_email;
      this.editedOtherPropertyData.property_latitude = item.property_latitude;
      this.editedOtherPropertyData.property_longitude = item.property_longitude;
      this.editedOtherPropertyData.property_description =
        item.property_description;
      this.editedOtherPropertyData.amenities = item.amenity_name;
      this.editedOtherPropertyData.building_no = item.building_no;
      this.editedOtherPropertyData.street = item.street;
      this.editedOtherPropertyData.land_mark = item.land_mark;
      this.editedOtherPropertyData.country = item.country;
      this.editedOtherPropertyData.state = item.state_name;
      this.editedOtherPropertyData.city = item.city_name;
      this.editedOtherPropertyData.pin_code = item.pin_code;
      this.editedOtherPropertyData.txn_id = item.txn_id;
      this.editedOtherPropertyData.checkIn_time = item.checkIn_time;
      this.editedOtherPropertyData.checkOut_time = item.checkOut_time;
      this.editedOtherPropertyData.Name_Of_Contact_Person =
        item.Name_Of_Contact_Person;
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
      this.otherpropertyEditDialog = true;
    },
    opentransportDialog() {
      this.transportDetails.account_id = this.userDetails.account_id;
      this.transportDetails.agent_id = this.editedItem.agent_id;
      this.transportDetails.transport_sub_id = this.editedItem.agent_sub_id;
      this.transportDetails.agent_name = this.editedItem.agent_name;
      this.transportDetails.transport_sub_name = this.editedItem.agent_sub_name;
      this.onclickValue = "";

      this.resetFiles();
      this.transportDialog = true;
    },
    onFoodTransportSubmit() {
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
                formData.append("upload_image3", this.uploadImage3);

                formData.append(
                  "transport_details",
                  JSON.stringify(this.transportDetails)
                );
                this.foodtransportDetailsSaving(formData);
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
      //  console.log("llll", item)
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.transportViewDialog = true;
      this.loadTravelDetailsSaving(this.editedItem);
      //this.getFoodTransportDetailsSaving(this.editedItem);
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
      this.transporteditedItem.select_offer = item.select_offer;
      this.transporteditedItem.enter_amount = item.enter_amount;
      this.transporteditedItem.uploadImage1 = {
        name: item.upload_image1 ?? "",
      };
      this.transporteditedItem.uploadImage2 = {
        name: item.upload_image2 ?? "",
      };
      this.transporteditedItem.uploadImage3 = {
        name: item.upload_image2 ?? "",
      };
      this.transportEditDialog = true;
    },

    onFoodTransportUpdatingDetail() {
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
                this.updatingFoodTransportDetails(this.transporteditedItem);
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
    foodMedicalstoreDetailsForm() {
      this.FoodMedicalStore.account_id = this.userDetails.account_id;
      this.FoodMedicalStore.equipment_id = this.editedItem.agent_id;
      this.FoodMedicalStore.equipment_sub_id = this.editedItem.agent_sub_id;
      this.FoodMedicalStore.agent_name = this.editedItem.agent_name;
      this.FoodMedicalStore.equipment_sub_name = this.editedItem.agent_sub_name;
      this.FoodMedicalStore.email_id = this.editedItem.email_id;
      this.FoodMedicalStore.phone = this.editedItem.phone;
      // this.FoodMedicalStore.partner_status = this.editedItem.status;
      this.foodMedicalStoreDetails = true;
    },
    closeAddMedicalStore() {
      this.foodMedicalStoreDetails = false;
      this.foodmedicalStoreEditDialog = false;
      this.resetFiles();
      this.FoodmedicalstoreeditedItem = foodMedicalStore();
      this.FoodMedicalStore = foodMedicalStore();
    },

    submitFoodMedicalStoreData() {
      this.$refs.addMedicalForm.validate().then((success) => {
        if (success) {
          if (this.FoodMedicalStore.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.FoodMedicalStore.user_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("upload_image_1", this.uploadImage);
                formData.append("upload_image_2", this.uploadImage1);
                formData.append("upload_image_3", this.uploadImage2);
                formData.append(
                  "addMedStoresData",
                  JSON.stringify(this.FoodMedicalStore)
                );
                // console.log("saveFoodMedicalStoresData", this.FoodMedicalStore)

                this.saveFoodMedicalStoresData(formData);
                this.resetFiles();
                this.foodMedicalStoreDetails = false;
                this.details = false;
                this.FoodMedicalStore = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.foodMedicalStoreDetails = true;
              });
          }
        }
      });
    },
    showMedicalStoreDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.foodmedicalStoreViewDialog = true;
      this.loadMedicalEqpData(this.editedItem);
    },
    editFoodMedicalStoreDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.FoodmedicalstoreeditedItem = Object.assign({}, item);
      this.FoodmedicalstoreeditedItem.txn_id = item.txn_id;
      this.FoodmedicalstoreeditedItem.equipment_id = item.equipment_id;
      this.FoodmedicalstoreeditedItem.equipment_sub_id = item.equipment_sub_id;
      this.FoodmedicalstoreeditedItem.account_id = item.account_id;
      this.FoodmedicalstoreeditedItem.equipment_sub_name =
        item.equipment_sub_name;
      this.FoodmedicalstoreeditedItem.agent_name = item.agent_name;
      this.FoodmedicalstoreeditedItem.medical_store_name =
        item.medical_store_name;
      this.FoodmedicalstoreeditedItem.special_offer = item.special_offer;
      this.FoodmedicalstoreeditedItem.from_date = item.from_date;
      this.FoodmedicalstoreeditedItem.to_date = item.to_date;
      this.FoodmedicalstoreeditedItem.description = item.description;
      this.FoodmedicalstoreeditedItem.phone = item.phone;
      this.FoodmedicalstoreeditedItem.email = item.email;
      this.FoodmedicalstoreeditedItem.Name_of_contact_person =
        item.name_of_contact_person;
      this.FoodmedicalstoreeditedItem.building_no = item.building_no;
      this.FoodmedicalstoreeditedItem.street = item.street;
      this.FoodmedicalstoreeditedItem.land_mark = item.land_mark;
      this.FoodmedicalstoreeditedItem.city_name = item.city_name;
      this.FoodmedicalstoreeditedItem.state_name = item.state_name;
      this.FoodmedicalstoreeditedItem.pin_code = item.pin_code;
      this.FoodmedicalstoreeditedItem.latitude = item.latitude;
      this.FoodmedicalstoreeditedItem.longitude = item.longitude;
      this.FoodmedicalstoreeditedItem.select_offer = item.select_offer;
      this.FoodmedicalstoreeditedItem.enter_amount = item.enter_amount;
      this.FoodmedicalstoreeditedItem.uploadImage1 = {
        name: item.upload_image1 ?? "",
      };
      this.FoodmedicalstoreeditedItem.uploadImage2 = {
        name: item.upload_image2 ?? "",
      };
      this.FoodmedicalstoreeditedItem.uploadImage3 = {
        name: item.upload_image3 ?? "",
      };
      this.foodmedicalStoreEditDialog = true;
    },

    onFoodMedicalStoreUpdatingDetail() {
      this.$refs.addMedicalForm.validate().then((success) => {
        if (this.FoodmedicalstoreeditedItem.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.updatingFoodMedicalStoreDetails(
                  this.FoodmedicalstoreeditedItem
                );
                this.foodmedicalStoreEditDialog = false;

                this.details = false;

                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.foodmedicalStoreEditDialog = true;
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
    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      // this.partner_pic = [];
      this.file_upload5 = [];
      this.mb_certificate = [];
      this.food_tax = [];
      this.food_safety = [];
      this.food_image = [];
      this.vehicle_image = [];
      this.equipment_image = [];
      this.uploadImage = [];
      this.uploadImage1 = [];
      this.uploadImage2 = [];
      this.uploadImage3 = [];
      this.uploadImage4 = [];
      this.upload_Image = [];
      this.upload_Image1 = [];
      this.upload_Image2 = [];
      this.upload_fssai = [];
      this.upload_fssai_1 = [];
      this.uploadRoomImage1 = [];
      this.uploadRoomImage2 = [];
      this.uploadRoomImage3 = [];
      this.uploadRoomImage4 = [];
      this.uploadRoomImage5 = [];
    },

    editOpenAddDialog() {
      this.step = 1;
      this.onclickValue = "";
      this.foodPartnerForm.country = "India";
      this.foodDetails.country = "India";
      this.addDataDialog = true;
    },

    OpenAddDialog() {
      this.step = 1;
      (this.editedItem = {}), (this.editedItem.agent_id = "");
      this.onclickValue = "";
      this.addDataDialog = true;
      this.details = false;
    },
    checkstate() {
      if (this.foodPartnerForm.country.name == "India") {
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
      this.foodPartnerForm.city = [];
      this.foodPartnerForm.state = [];
    },
    showDocument(file, dialogName) {
    // console.log("file",file)
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhfpFilePath + file;
        this.visible = false;
      }, 500);
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
    showDocumenttravel(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhtpFilePath + file;
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
      this.foodPartnerForm.city = "";
      this.foodDetails.city = "";
    },
    emptyFoodItems() {
      this.foodDetails.foodItemsList = [];
    },
    emptyMedicalItems() {
      this.otherFoodMedicalPartner.units = [];
    },
    emptyValue() {
      this.foodDetails.units = [];
      this.food_image = [];
      this.uploadRoomImage1 = [];
      this.uploadRoomImage2 = [];
      this.uploadRoomImage3 = [];
      this.uploadRoomImage4 = [];
      this.uploadRoomImage5 = [];
      this.foodDetails.price = "";
      this.foodDetails.items_available_from = "";
      this.foodDetails.items_available_to = "";
      this.foodDetails.item_name = "";
      this.foodDetails.food_items_name = "";
      this.foodDetails.city_name = "";
      this.food_image = [];
    },
    closeAddFoodDialog() {
      this.addDataDialog = false;
      this.resetFiles();
      this.foodPartnerForm = foodRegistrationMaster();
    },
    closeRestaurantDialog() {
      this.foodRestaurantDialog = false;
      this.resetFiles();
      this.foodRestaurantDetails = foodRegistrationMaster();
    },
    closeRestaurantEditDialog() {
      this.foodRestaurantEditDialog = false;
      this.resetFiles();
      this.editFoodRestaurant = foodRegistrationMaster();
    },
    closeAccPropertyFrom() {
      this.addOtherFoodAccoPartner = false;
      this.resetFiles();
      this.otherFoodAccomadationPartner = foodAccPropertyForm();
    },
    closeAccPropertyEdit() {
      this.otherpropertyEditDialog = false;
      this.resetFiles();
      this.editedOtherPropertyData = foodAccPropertyForm();
    },
    closeTransportForm() {
      this.transportDialog = false;
      this.transportEditDialog = false;
      this.resetFiles();
      this.transportDetails = foodTransportForm();
      this.transporteditedItem = foodTransportForm();
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
    //       v => v.toLowerCase().indexOf(needle) > -1
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
    //       v => v.toLowerCase().indexOf(needle) > -1
    //     );
    //   });
    // },
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
    openRestaurantDialog() {
      this.foodRestaurantDetails.agent_id = this.editedItem.agent_id;
      this.foodRestaurantDetails.account_id = this.editedItem.account_id;
      this.foodRestaurantDetails.agent_sub_id = this.editedItem.agent_sub_id;
      this.foodRestaurantDetails.food_partner_name = this.editedItem.agent_name;
      this.foodRestaurantDetails.phone = this.editedItem.phone;
      this.foodRestaurantDetails.food_partner_sub_name =
        this.editedItem.agent_sub_name;
      this.foodRestaurantDetails.partner_status = this.editedItem.status;
      this.resetFiles();
      this.foodRestaurantDialog = true;
    },
    onFoodRestaurantSubmit() {
      this.$refs.foodRestaurantForm.validate().then((success) => {
        if (success) {
          if (this.foodRestaurantDetails.agent_id != "") {
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
                  JSON.stringify(this.foodRestaurantDetails)
                );
                // console.log(this.foodRestaurantDetails)
                this.foodRestaurantDetailsSaving(formData);
                this.resetFiles();

                // this.propertyPartnerForm = propertyRegistrationMaster();
                this.foodRestaurantDialog = false;
                this.details = false;
                this.foodRestaurantDetails = {};
                this.step = 1;
                // this.getRestaurantDetails(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.foodRestaurantDialog = true;
              });
          }
        }
      });
    },
    editFoodRestaurantData(item) {
      // console.log("city:",item.city_name)
      // console.log("state:",item.state_name)
      this.editedIndex = this.data.indexOf(item);
      this.editFoodRestaurant = Object.assign({}, item);
      this.editFoodRestaurant.agent_id = item.agent_id;
      this.editFoodRestaurant.agent_sub_id = item.agent_sub_id;
      this.editFoodRestaurant.agent_name = item.agent_name;
      this.editFoodRestaurant.agent_sub_name = item.agent_sub_name;
      this.editFoodRestaurant.food_partner_phone = item.food_partner_phone;
      this.editFoodRestaurant.restaurant_phone = item.restaurant_phone;
      this.editFoodRestaurant.Name_Of_Contact_Person =
        item.Name_Of_Contact_Person;
      this.editFoodRestaurant.restaurant_email = item.restaurant_email;
      this.editFoodRestaurant.restaurant_latitude = item.restaurant_latitude;
      this.editFoodRestaurant.restaurant_longitude = item.restaurant_longitude;
      this.editFoodRestaurant.fssai_no = item.fssai_no;

      this.editFoodRestaurant.restaurant_description =
        item.restaurant_description;
      this.editFoodRestaurant.building_no = item.building_no;
      this.editFoodRestaurant.street = item.street;
      this.editFoodRestaurant.land_mark = item.land_mark;
      this.editFoodRestaurant.state = item.state_name;
      this.editFoodRestaurant.city = item.city_name;
      this.editFoodRestaurant.pin_code = item.pin_code;
      this.editFoodRestaurant.txn_id = item.txn_id;
      this.editFoodRestaurant.opening_time = item.opening_time;
      this.editFoodRestaurant.closing_time = item.closing_time;
      this.editFoodRestaurant.date_from = item.date_from;
      this.editFoodRestaurant.date_to = item.date_to;
      this.editFoodRestaurant.select_offer = item.select_offer;
      this.editFoodRestaurant.enter_amount = item.enter_amount;
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
      this.foodRestaurantEditDialog = true;
      // console.log("editFoodRestaurantData", item);
    },
    updateFoodRestaurantData() {
      this.$refs.editFoodRestaurantForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              // console.log("updateFoodRestaurant", this.editFoodRestaurant);
              // this.updateFoodRestaurant(this.editFoodRestaurant);
              const formData = new FormData();
              this.updateFoodRestaurant(formData);
              formData.append("upload_Image", this.upload_Image);
              formData.append("upload_Image1", this.upload_Image1);
              formData.append("upload_Image2", this.upload_Image2);
              formData.append(
                "updateresturant_details",
                JSON.stringify(this.editFoodRestaurant)
              );
              this.foodRestaurantEditDialog = false;
              this.details = false;
              this.getFoodRestaurantDetails();
            })
            .onCancel(() => {
              this.resetFiles();
              this.foodRestaurantEditDialog = true;
            });
        }
      });
    },
    onFoodUpdatingDetail() {
      this.$refs.editFoodForm.validate().then((success) => {
        if (this.editedfoodDetails.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                // console.log("this.editedfoodDetails", this.editedfoodDetails.city_name);
                const formData = new FormData();
                formData.append("food_image", this.food_image);

                formData.append(
                  "updatefood_details",
                  JSON.stringify(this.editedfoodDetails)
                );

                // this.updatingTransportDetails(this.transporteditedItem);
                this.fooditemdetailsUpdating(formData);

                this.editFoodForm = false;
                this.getfoodDetails(this.foodRestaurantEditedItem);
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
  },
};
</script>
