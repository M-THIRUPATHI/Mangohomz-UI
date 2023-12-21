<template>
  <div>
    <q-page style="padding-top: 100px" class="q-pa-md">
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
                @click="editItem(props.row)"
                icon="las la-eye"
                size="sm">
                <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip></q-btn>
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
                  <q-input
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
                  ></q-input>

                  <q-input
                    class="col-3"
                    dense
                    outlined
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
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="foodPartnerForm.fax"
                    lazy-rules
                    mask="##########"
                    label="Whatsapp *"
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Phone no'), phone()]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-whatsapp" color="secondary" />
                    </template>
                  </q-input>
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

                  <q-input
                    class="col-2"
                    dense
                    outlined
                    v-model="foodPartnerForm.description"
                    label="Description"
                    lazy-rules
                    style="width: 250px"
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
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
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
                    v-model="foodPartnerForm.land_mark"
                    label="Landmark *"
                    label-color="black"
                    :rules="[required('Landmark')]"
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
                    :options="countriesArr"
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
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    fill-input
                    :options="states"
                    option-value="state_id"
                    option-label="state_name"
                    v-model="foodPartnerForm.state"
                    @input="
                      loadAllCities(foodPartnerForm.state);
                      emptyCities();
                    "
                    label="State *"
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
                    :options="cities"
                    option-value="city_id"
                    option-label="city"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="foodPartnerForm.city"
                    label="City *"
                    label-color="black"
                    :rules="[required('City')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-select>
                  <q-input
                    dense
                    outlined
                    lazy-rules
                    mask="######"
                    v-model="foodPartnerForm.pin_code"
                    label="Pincode *"
                    label-color="black"
                    :rules="pinnumberRules"
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
                ></div>
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
                    v-model="foodPartnerForm.pan"
                    label="PAN No"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    mask="AAAAA####A"
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
                      val => {
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
                    v-bind:readonly="this.onclickValue == 'edit'"
                    v-model="foodPartnerForm.aadhar"
                    label="AADHAAR No"
                    mask="############"
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
                      val => {
                        files = val;
                      }
                    "
                    hint="Upload AADHAAR"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file>

                  <q-input
                    dense
                    outlined
                    v-model="foodPartnerForm.gstin"
                    label="GSTIN"
                    mask="##AAAAA####A###"
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
                    v-model="gst_tin"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
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
                  <q-input
                    dense
                    outlined
                    v-model="foodPartnerForm.fssai"
                    label="FSSAI Licence"
                    mask="##############"
                    label-color="black"
                    :rules="[required('FSSAI Licence No.')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
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
                      val => {
                        files = val;
                      }
                    "
                    hint="Agreement Document"
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
                      val => {
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
                    v-model="food_tax"
                    type="file"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
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
                    v-model="food_safety"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
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
                <div class="bg-grey-11 col-12 row q-pa-xs">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
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
                    label="IFSC Code"
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
                      val => {
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
                    v-model="foodPartnerForm.accept"
                    label="I accept the Food Partner Registration"
                  />
                </q-card-actions>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
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
              <q-chip
                clickable
                dense
                color="secondary"
                text-color="white"
                icon="add"
                @click="openPropertyDialog()"
                class="text-weight-bold"
              >
                Add Food Details
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
                      class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      "
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
                    <div style="height: 250px">
                      <div
                        class="
                          row
                          text-black text-bold
                          q-ma-xs q-pa-md
                          text-body1
                        "
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
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Food Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table
                    :data="foodDetails_rows"
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
                          icon-right="mdi-eye"
                          @click="
                            showDocument(props.row.food_image, 'Food Image')
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
            <div class="text-h6 text-white">{{ title }}</div>
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
                  v-model="foodDetails.agent_name"
                  label="Food Partner Name *"
                  readonly
                  hide-bottom-space
                  style="width: 200px"
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
                  v-model="foodDetails.sub_Name"
                  label="Food Partner Sub Name *"
                  readonly
                  hide-bottom-space
                  style="width: 180px"
                  label-color="black"
                  :rules="[required('Food Partner Sub Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-input>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="foodDetails.kitchen_name"
                  label="Name of Kitchen *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :rules="[required('Kitchen Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-input>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="foodDetails.kitchen_type"
                  label="Kitchen Type *"
                  hide-bottom-space
                  style="width: 200px"
                  label-color="black"
                  :rules="[required('Kitchen Type')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" /> </template
                ></q-input>
                <q-select
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
                        <!-- <q-checkbox  v-model="selected" @update:model-value="toggleOption(opt)"></q-checkbox> -->
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-select>
                 <q-input outlined label="items Available from *" dense v-model="foodDetails.items_available_from" :rules="[required('items Available from')]">
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-time v-model="foodDetails.items_available_from"
                                mask="hh:mm A">
                                  <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                  </div>
                                </q-time>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                 <q-input outlined label="Items Available to*" dense v-model="foodDetails.items_available_to" :rules="[required('Items Available to')]">
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-time v-model="foodDetails.items_available_to" mask="hh:mm A">
                                  <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
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
                  v-model="foodDetails.price"
                  label="Price (from INR)*"
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
                  v-model="foodDetails.special_offer"
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
                <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
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
                v-if="this.onclickValue != 'edit'"
                @click="onSubmitFoodDetails('submit')"
                :disable="this.foodDetails.accept == false"
              />
              <q-btn
                color="secondary"
                label="Update"
                class="text-bold"
                @click="onSubmitFoodDetails('update')"
                v-if="this.onclickValue == 'edit'"
                :disable="this.foodDetails.accept == false"
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
          Add MHFP
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
    agent_id: "",
    name: "",
    agent_name: "",
    company_name: "",
    individual_name:"",
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
    food_image: []
  };
};
// const foodForm = () => {
//   return {
//     name: "",
//     sub_Name: "",
//     sub_Name: "",
//     food_name: "",
//     price: "",
//     units: "",
//     food_image: "",
//   };
// };
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

      // foodData_rows: [],
      // foodData_columns: [
      //   {
      //     name: "s_no",
      //     label: "S_No",
      //     align: "left",
      //     field: "s_no",
      //     headerClasses: "bg-primary text-white",
      //     headerStyle: {
      //       fontWeight: "bold",
      //     },
      //   },
      //   {
      //     name: "name",
      //     label: "Food Partner Name",
      //     align: "left",
      //     field: "name",
      //     headerClasses: "bg-primary text-white",
      //     headerStyle: {
      //       fontWeight: "bold",
      //     },
      //   },
      //   {
      //     name: "sub_Name",
      //     label: "Food Partner Sub Name",
      //     align: "left",
      //     field: "sub_Name",
      //     headerClasses: "bg-primary text-white",
      //     headerStyle: {
      //       fontWeight: "bold",
      //     },
      //   },

      //   {
      //     name: "food_name",
      //     label: "Food Item Name",
      //     align: "left",
      //     field: "food_name",
      //     headerClasses: "bg-primary text-white",
      //     headerStyle: {
      //       fontWeight: "bold",
      //     },
      //   },
      //   {
      //     name: "price",
      //     label: "Price",
      //     align: "left",
      //     field: "price",
      //     headerClasses: "bg-primary text-white",
      //     headerStyle: {
      //       fontWeight: "bold",
      //     },
      //   },
      //   {
      //     name: "units",
      //     label: "Units",
      //     align: "left",
      //     field: "units",
      //     headerClasses: "bg-primary text-white",
      //     headerStyle: {
      //       fontWeight: "bold",
      //     },
      //   },
      //   {
      //     name: "foodImg",
      //     label: "Upload Food Image",
      //     align: "left",
      //     field: "foodImg",
      //     headerClasses: "bg-primary text-white",
      //     headerStyle: {
      //       fontWeight: "bold",
      //     },
      //   },
      //   {
      //     name: "actions",
      //     label: "Actions",
      //     field: "actions",
      //     headerClasses: "bg-primary text-white",
      //     align: "center",
      //     headerStyle: {
      //       fontWeight: "bold",
      //     },
      //   },
      // ],

      food_safety: [],
      food_tax: [],
      food_image: [],
      mb_certificate: [],
      gst_tin: [],
      addhaar_no: [],
      file_upload5: [],
      pan_card_file: [],
      mh_agreement: [],
      // partner_pic: [],
      countriesArr: ["India"],
      editedIndex: -1,
      editedItem: {
        agent_id: "",
        agent_sub_id: "",
        agent_name: "",
        agent_sub_name: "",
        address: "",
        city: "",
        city_id: "",
        location: "",
        status: "",
        gstin: "",
        fssai_no: "",
        partner_status: ""
        // food_image: "",
      },

      foodDetails: {
        account_id: "",
        user_id: "",
        agent_id: "",
        agent_sub_id: "",
        foodPartner_name: "",
        foodPartner_sub_name: "",
        name: "",
        agent_name: "",
        sub_Name: "",
        items_available_from:"",
        items_available_to:"",
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
        txn_id: "",
        kitchen_type: "",
        kitchen_name: "",
        address: "",
        city: "",
        city_id: "",
        location: "",
        gstin: "",
        fssai_no: "",
        partner_status: ""
        
        // special_offer: "",
      },
      onclickValue: "",

      // foodThaliArr: [
      //   {
      //     food_type_name: "Veg Thali",
      //     food_type_id: 1,
      //   },
      //   {
      //     food_type_name: "Chkn Non-Veg Thali",
      //     food_type_id: 2,
      //   },
      //   {
      //     food_type_name: "Fish Non-Veg Thali",
      //     food_type_id: 3,
      //   },
      //   {
      //     food_type_name: "Egg Thali",
      //     food_type_id: 4,
      //   },
      // ],

      foodPartnerForm: {
        user_id: "",
        name: "",
        agent_id: "",
        agent_name: "",
        agent_sub_id: "",
        agent_sub_name: "",
        company_name: "",
        individual_name:"",
        phone: "",
        fax: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        country: "",
        countriesArr: ["India"],
        state: "",
        pin_code: "",
        pan: "",
        aadhar: "",
        gstin: "",
        fssai: "",
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
        status: ""
      },
      number: [
        value => !!value || "Bank A/C No is Required.",
        v => /^[0-9_. ]*$/.test(v) || "Please enter numbers only"
      ],

      pinnumberRules: [
        v => !!v || "Pin Code is required",
        v => /^[0-9_ ]*$/.test(v) || "Only Numbers are allowed",
        v => (v && v.length == 6) || "Value Must be 6 Digit"
      ],
      columns: "",
      pagination: {
        rowsPerPage: 500
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
      cityOptions: []
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      food_partner_registration_rows: state =>
        state.partners.food_partner_registration_rows,
      food_partner_registration_columns: state =>
        state.partners.food_partner_registration_columns,

      food_registration_rows: state => state.partners.food_registration_rows,
      food_registration_columns: state =>
        state.partners.food_registration_columns,

      foodDetails_rows: state => state.partners.foodDetails_rows,
      foodDetails_columns: state => state.partners.foodDetails_columns,

      states: state => state.master.states_arr,
      cities: state => state.master.city_arr,
      foodThaliArr: state => state.dropdown.food_item_types_arr,
      foodListArr: state => state.dropdown.food_list_arr
    }),
    ...mapGetters("partners", ["food_partner_reg_rows"])
  },
  mounted() {
    this.$store.dispatch("partners/getFoodRegistrationBasedOnStatus");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("partners/getFoodRegistrationMaster");
    this.$store.dispatch("dropdown/loadAllFoodTypes");

    // this.recordsStatus = this.statusCounts();
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
    deleteItem(item) {
      const index = this.foodData_rows.indexOf(item);
      this.foodData_rows.splice(index, 1);
      this.$q.notify("deleted!");
    },

    ...mapActions("partners", ["foodRegistrationMasterAdd"]),
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("partners", ["getFoodRegistrationBasedOnStatus"]),
    ...mapActions("partners", ["getFoodRegistrationMaster"]),
    ...mapActions("partners", ["getExistingUserFoodPartner"]),
    ...mapActions("partners", ["updateFoodPartnerDetails"]),
    ...mapActions("partners", ["foodDetailsSaving"]),
    ...mapActions("partners", ["foodDetailsUpdating"]),
    ...mapActions("partners", ["getfoodDetails"]),
    ...mapActions("dropdown", ["loadAllFoodTypes"]),
    ...mapActions("dropdown", ["loadAllFoodItems"]),

    // addFoodData() {
    //   if (this.$refs.foodDetailsAddForm.validate()) {
    //     var foodObj = {
    //       s_no: this.foodData_rows.length + 1,
    //       agent_id:this.agent_id,
    //       agent_sub_id:this.agent_sub_id,

    //       name: this.foodDetails.agent_name,
    //       sub_Name: this.foodDetails.sub_Name,
    //       food_name: this.foodDetails.food_name,
    //       price: this.foodDetails.price,
    //       units: this.units,
    //       foodImg: this.foodImg ? this.foodImg.name : "",
    //     };
    //     this.foodData_rows.push(foodObj);
    //     this.foodDetails = foodForm();
    //     this.$q.notify({
    //       color: "positive",
    //       message: "Food Details Added",
    //     });
    //     this.emptyValue();
    //     console.log(foodObj);
    //   } else {
    //     this.$q.notify({
    //       color: "negative",
    //       message: "Please Fill the form properly",
    //     });
    //   }
    // },

    // onReset(){
    //   this.$refs.foodDetailsAddForm.resetValidation();
    // },

    onSubmit(val) {
      if (val == "submit") {
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
                  this.foodPartnerForm.agent_id = this.editedItem.agent_id;
                  this.foodPartnerForm.agent_name = this.editedItem.agent_name;
                  this.foodPartnerForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("pan_card_file", this.pan_card_file);
                  formData.append("addhaar_no", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("food_tax", this.food_tax);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("food_safety", this.food_safety);
                  formData.append("file_upload5", this.file_upload5);
                  formData.append(
                    "foodPartnerDetails",
                    JSON.stringify(this.foodPartnerForm)
                  );
                  this.foodRegistrationMasterAdd(formData);
                  this.resetFiles();
                  // console.log("formData", formData);
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
                  persistent: true
                })
                .onOk(() => {
                  this.foodPartnerForm.agent_id = "";
                  this.foodPartnerForm.agent_sub_name = this.foodPartnerForm.name;
                  this.foodPartnerForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("pan_card_file", this.pan_card_file);
                  formData.append("addhaar_no", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("food_tax", this.food_tax);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
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
                this.foodPartnerForm.user_id = this.userDetails.account_id;
                // console.log(this.foodPartnerForm);
                this.updateFoodPartnerDetails(this.foodPartnerForm);
                this.foodPartnerForm = foodRegistrationMaster();
                this.$refs.agentFormSubmit.resetValidation();
                this.addDataDialog = false;
                this.step = 1;
                this.subFoodView = false;
                this.getFoodRegistrationMaster();
              });
          }
        });
      }
    },
    onSubmitFoodDetails(val) {
      if (val == "submit") {
        this.$refs.foodDetailsAddForm.validate().then(success => {
          if (success) {
            if (this.foodDetails.agent_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true
                })
                .onOk(() => {
                  this.foodDetails.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("food_image", this.food_image);
                  formData.append(
                    "food_details",
                    JSON.stringify(this.foodDetails)
                  );
                  this.foodDetailsSaving(formData);
                  this.resetFiles();
                  this.emptyValue();
                  // console.log("this.foodDetails", this.foodDetails);
                  this.$refs.foodDetailsAddForm.resetValidation();
                  this.foodDetailsAddForm = false;
                  this.subFoodView = true;
                  this.details = false;
                  this.getfoodDetails();
                })
                .onCancel(() => {
                  this.resetFiles();
                  this.emptyValue();
                  this.foodDetailsAddForm = true;
                });
            }
          }
        });
      } else if (val == "update") {
        this.$refs.foodDetailsAddForm.validate().then(success => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.foodDetailsUpdating(this.foodDetails);
                // console.log("updating", this.foodDetails);
                this.$refs.foodDetailsAddForm.resetValidation();
                this.foodDetailsAddForm = false;
                this.subFoodView = true;
                this.details = false;
                this.getfoodDetails();   
              });
          }
        });
      }
    },

    editItem(item) {
      //  console.log("item", item);
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
      // console.log("Hiiii", item);
      this.step = 1;
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.addDataDialog = true;
      this.onclickValue = "edit";
      this.foodPartnerForm.agent_id = item.agent_id;
      this.foodPartnerForm.agent_sub_id = item.agent_sub_id;
      this.foodPartnerForm.name = item.agent_sub_name;
      this.foodPartnerForm.agent_name = item.agent_name;
      this.foodPartnerForm.agent_sub_name = item.agent_sub_name;
      this.foodPartnerForm.company_name = item.company_name;
      this.foodPartnerForm.individual_name = item.individual_name;
      this.foodPartnerForm.phone = item.phone;
      this.foodPartnerForm.fax = item.fax;
      this.foodPartnerForm.email_id = item.email_id;
      this.foodPartnerForm.description = item.description;
      this.foodPartnerForm.building_no = item.building_no;
      this.foodPartnerForm.street = item.street;
      this.foodPartnerForm.land_mark = item.land_mark;
      this.foodPartnerForm.country = item.country;
      this.foodPartnerForm.state = item.state;
      this.foodPartnerForm.city = item.city;
      this.foodPartnerForm.city_id= item.city_id;
      this.foodPartnerForm.pin_code = item.pin_code;
      this.foodPartnerForm.pan = item.pan;
      this.pan_card_file = {
        name: item.pan_card_file ?? ""
      };
      this.foodPartnerForm.aadhar = item.aadhar;
      this.addhaar_no = {
        name: item.addhaar_no ?? ""
      };
      this.foodPartnerForm.gstin = item.gstin;
      this.foodPartnerForm.fssai = item.fssai_no;
      this.gst_tin = {
        name: item.gst_tin_loc ?? ""
      };
      this.mh_agreement = {
        name: item.mh_agreement_loc ?? ""
      };
      this.mb_certificate = {
        name: item.mb_certificate_loc ?? ""
      };
      this.food_tax = {
        name: item.food_tax ?? ""
      };
      this.food_safety = {
        name: item.food_safety_certificate ?? ""
      };
      this.foodPartnerForm.bankAccountNo = item.bankAccountNo;
      this.foodPartnerForm.bankName = item.bankName;
      this.foodPartnerForm.branchName = item.branchName;
      this.foodPartnerForm.ifsc = item.ifsc;
      this.file_upload5 = {
        name: item.file_upload5 ?? ""
      };
    },
    editFoodItem(item) {
      // console.log("items", item);
      this.step = 1;
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  this.addDataDialog = true;
      this.foodDetailsAddForm = true;
      this.onclickValue = "edit";
      this.foodDetails.account_id = item.account_id;
      this.foodDetails.txn_id = item.txn_id;
      this.foodDetails.agent_id = item.agent_id;
      this.foodDetails.agent_sub_id = item.agent_sub_id;
      this.editedItem.agent_name = item.foodPartner_name;
      this.editedItem.agent_sub_name = item.foodPartner_sub_name;
      this.foodDetails.agent_name = item.foodPartner_name;
      this.foodDetails.sub_Name = item.foodPartner_sub_name;
      this.foodDetails.address = item.address;
      this.foodDetails.city = item.city;
      this.foodDetails.location = item.location;
      this.foodDetails.partner_status = item.partner_status;
      this.foodDetails.city_id = item.city_id;
      this.foodDetails.gstin = item.gstin;
      this.foodDetails.fssai_no = item.fssai_no;
      this.foodDetails.kitchen_name = item.kitchen_name;
      this.foodDetails.kitchen_type = item.kitchen_type;
      this.foodDetails.foodName = item.item_name;
      this.foodDetails.food_type_id = item.food_type_id;
      this.foodDetails.foodItemsList = item.food_items_name.split(",");
      this.foodDetails.units = item.units;
      this.foodDetails.price = item.price;
      // this.foodDetails.special_offer = item.special_offer;
      this.foodDetails.food_image = item.food_image;

      this.food_image = {
        name: item.food_image ?? ""
      };
    },
    openPropertyDialog() {
      this.foodDetails.agent_id = this.editedItem.agent_id;
      this.foodDetails.agent_sub_id = this.editedItem.agent_sub_id;
      this.foodDetails.agent_name = this.editedItem.agent_name;
      this.foodDetails.sub_Name = this.editedItem.agent_sub_name;
      this.foodDetails.address = this.editedItem.address;
      this.foodDetails.city = this.editedItem.city;
      this.foodDetails.location = this.editedItem.location;
      this.foodDetails.partner_status = this.editedItem.status;
      this.foodDetails.city_id = this.editedItem.city_id;
      this.foodDetails.gstin = this.editedItem.gstin;
      this.foodDetails.fssai_no = this.editedItem.fssai_no;
      this.foodDetailsAddForm = true;
      this.onclickValue = "";
      this.emptyValue();
    },

    viewPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.agent_id = item.agent_id;
      this.editedItem.agent_sub_id = item.agent_sub_id;
      this.editedItem.agent_name = item.agent_name;
      this.details = true;
      this.getfoodDetails(this.editedItem);
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

    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhfpFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },
    emptyCities() {
      this.foodPartnerForm.city = "";
      this.foodDetails.city = "";
    },
    emptyFoodItems() {
      this.foodDetails.foodItemsList = [];
    },
    emptyValue() {
      this.foodDetails.units = [];
      this.food_image = [];
      // this.foodDetails.name = [];
      // this.foodDetails.sub_Name = [];
      this.foodDetails.price = [];
      this.foodDetails.foodName = [];
      this.foodDetails.foodItemsList = [];
      this.foodDetails.kitchen_name = [];
      this.foodDetails.kitchen_type = [];
      this.foodDetails.items_available_to = [];
      this.foodDetails.items_available_from = [];
      // this.foodDetails.special_offer = [];
      this.food_image = [];
    },
    closeAddFoodDialog() {
      this.addDataDialog = false;
      this.resetFiles();
      this.foodPartnerForm = foodRegistrationMaster();
      this.$refs.agentFormSubmit.resetValidation();
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
