<template>
  <div>
    <!-- <q-page-container>  -->
    <q-page style="padding-top: 100px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
        <!-- {{ this.recordsStatus }} -->
        <q-table
          :data="equipment_partner_registration_rows"
          :columns="equipment_partner_registration_columns"
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
      </div>

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
                    v-model="equipmentPartnerForm.name"
                    label="Equipment Partner Name *"
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
                    v-model="equipmentPartnerForm.company_name"
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
                    v-model="equipmentPartnerForm.individual_name"
                    label="Individual Name *"
                    v-if="equipmentPartnerForm.company_name != ''"
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
                    v-model="equipmentPartnerForm.phone"
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
                    v-model="equipmentPartnerForm.fax"
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
                    v-model="equipmentPartnerForm.email_id"
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
                    v-model="equipmentPartnerForm.agent_commission"
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
                    v-model="equipmentPartnerForm.description"
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
                    v-model="equipmentPartnerForm.building_no"
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
                    v-model="equipmentPartnerForm.street"
                    label="Street/Colony Name *"
                    lazy-rules
                    label-color="black"
                    :rules="[required('Street/Colony')]"
                    ><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="equipmentPartnerForm.land_mark"
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
                    v-model="equipmentPartnerForm.country"
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
                    v-model="equipmentPartnerForm.state"
                    @input="
                      loadAllCities(equipmentPartnerForm.state);
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
                    v-model="equipmentPartnerForm.city"
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
                    v-model="equipmentPartnerForm.pin_code"
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
                <!-- <div class="q-pa-md row q-gutter-md items-start text-h6 text-weight-bold">
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 400px"
                    fill-input
                    :options="propertyTypes"
                    v-model="equipmentPartnerForm.propertyType"
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
                    v-model="equipmentPartnerForm.pan"
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
                    v-model="equipmentPartnerForm.aadhar"
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
                      val => {
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
                    v-model="equipmentPartnerForm.gstin"
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
                      val => {
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
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Equipment Photo"
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
                    v-model="property_tax"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    type="file"
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
                    v-model="fire_safety"
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
                    v-model="equipmentPartnerForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[required('Bank A/C no'), number()]"
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
                    :rules="[required('file')]"
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
              </q-form>
              <q-card-actions align="left">
                <q-toggle
                  v-model="equipmentPartnerForm.accept"
                  label="I accept the Equipment Partner Registration"
                />
              </q-card-actions>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  color="secondary"
                  label="Submit"
                  v-if="this.onclickValue != 'edit'"
                  @click="onSubmit('submit')"
                  :disable="this.equipmentPartnerForm.accept == false"
                />
                <q-btn
                  color="secondary"
                  label="Update"
                  class="text-bold"
                  @click="onSubmit('update')"
                  v-if="this.onclickValue == 'edit'"
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
        </q-card>
      </q-dialog>

      <!-- DETAILED VIEW -->

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
              <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="openequipmentLocationForm()"
              >
                Add Equipment Details
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
                      <div class="col-4 text-left text-black">Lead partner</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-4 text-left text-black">Sub Partner</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.equipment_sub_name }}
                      </div>
                      <div class="col-4 text-left text-black">Lead Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.equipment_id }}
                      </div>
                      <div class="col-4 text-left text-black">Sub Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.equipment_sub_id }}
                      </div>
                      <q-separator />
                      <div class="col-4 text-left text-black">Phone</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <q-separator />
                      <div class="col-4 text-left text-black">Whatsapp</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.fax }}
                      </div>
                      <q-separator />
                      <div class="col-4 text-left text-black">Email</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.email_id }}
                      </div>
                      <div class="col-4 text-left text-black">Commission</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_commission }}
                      </div>
                      <q-separator />
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
                              showDocument(editedItem.addhaar_no_loc, 'Addhaar')
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

                    <!-- <div class="col-3">
                      <tr>
                        <td class="text-left">Equipment Partner Photo</td>
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
                                'Equipment Photo'
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
                                'Under Taking'
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
                                'Indemnity'
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
          <div
            class="row q-col-gutter-sm q-py-sm q-pa-md"
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
                    :data="equipment_item_rows"
                    :columns="equipment_item_columns"
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
                            showDocument(
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
                          @click="editEquipmentForm(props.row)"
                          ><q-tooltip :disable="$q.platform.is.mobile"
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

      <!-- PARTNER LIST -->
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
            :data="equipment_registration_rows"
            :columns="equipment_registration_columns"
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
                Add Equipment
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

    <!-- ADD EQUIPMENT DETAILS -->
    <q-dialog
      v-model="equipmentLocationForm"
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
          ref="equipmentLocationForm"
          class="q-gutter-xs"
          lazy-rules
          hide-bottom-space
          :rules="[val => (val && val.length > 0) || 'Please enter Values']"
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
                @click="closeEquipmentDialog"
              >
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Equipment Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input
                    dense
                    outlined
                    v-model="editedItem.agent_name"
                    readonly
                    label="Equipment Name *"
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
                    v-model="editedItem.equipment_sub_name"
                    readonly
                    label="Equipment Sub Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Sub Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <q-select
                    dense
                    options-dense
                    outlined
                    v-model="equipmentItemDetails.medical_store"
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
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-select>

                  <q-select
                    dense
                    options-dense
                    outlined
                    v-model="equipmentItemDetails.item_name"
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
                      loadAllMedicalUnits(equipmentItemDetails.item_name),
                        emptyMedicalItems()
                    "
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-select>
                  <q-select
                    v-model="equipmentItemDetails.units"
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
                    v-model="equipmentItemDetails.purchased_type"
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 250px"
                    fill-input
                    hide-bottom-space
                    :options="medicalPurchasingType"
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
                    v-model="equipmentItemDetails.price"
                    label="Price *"
                    lazy-rules
                    hide-bottom-space
                    style="width: 250px"
                    :rules="[required('Price'), number()]"
                    label-color="black"
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
                  v-model="equipmentItemDetails.special_offer"
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
                <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
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
              @click="onSubmitDetailForm"
              :disable="this.equipmentLocationForm.accept == false"
            ></q-btn>
          </div>
        </q-form>
      </q-layout>
    </q-dialog>

    <!-- EDIT EQUIPMENT DETAILS -->
    <q-dialog
      v-model="equipmentUpdatingDetails"
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
          ref="editEquipmentDetails"
          class="q-gutter-xs"
          lazy-rules
          hide-bottom-space
          :rules="[val => (val && val.length > 0) || 'Please enter Values']"
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
                @click="closeEditEquipmentDialog"
              >
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Edit Equipment Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input
                    dense
                    outlined
                    v-model="editEditedItem.agent_name"
                    readonly
                    label="Equipment Name *"
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
                    v-model="editEditedItem.equipment_sub_name"
                    readonly
                    label="Equipment Sub Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('Sub Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <q-select
                    dense
                    options-dense
                    outlined
                    v-model="editMedicalDetails.medical_store"
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
                      ' Zigy',
                      'mChemist',
                      'OnlineMedicalStore.com',
                      'Savemymeds Pharmacy',
                      'Mera Pharmacy'
                    ]"
                    :rules="[required('Medical Store')]"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-select>

                  <q-select
                    dense
                    options-dense
                    outlined
                    v-model="editMedicalDetails.item_name"
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
                      loadAllMedicalUnits(editMedicalDetails.item_name),
                        emptyMedicalItems()
                    "
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-select>
                  <q-select
                    v-model="editMedicalDetails.units"
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
                    v-model="editMedicalDetails.purchased_type"
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 250px"
                    fill-input
                    hide-bottom-space
                    :options="medicalPurchasingType"
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
                    v-model="editMedicalDetails.price"
                    label="Price *"
                    lazy-rules
                    hide-bottom-space
                    style="width: 250px"
                    :rules="[required('Price'), number()]"
                    label-color="black"
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
            </q-card>
            <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
            <div class="text-bold row q-ml-md">Note:</div>
              <div class="text-bold row q-ml-md">Note:</div>
              <div class="row col-12 q-ml-md">Max File size is 1MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
            </div>
          </q-card>
          <div class="row q-pa-md justify-end">
            <q-btn
              color="secondary"
              label="Update"
              @click="onUpdatingEquipmentDetailForm()"
            ></q-btn>
          </div>
        </q-form>
      </q-layout>
    </q-dialog>

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
          Add Equipment
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
const equipmentRegistrationMaster = () => {
  return {
    property: "",
    agent_name: "",
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
    equipment_id: "",
    equipment_image: []
  };
};
// const equipmentForm = () => {
//   return {
//     equipment_id: "",
//     equipment_sub_id: "",
//     equipment_sub_name: "",
//     agent_name: "",
//     price: "",
//     item_name: "",
//     units: "",
//   };
// };
export default {
  data() {
    return {
      ...validations,
      ...filepaths,
      title: "My Equipment",
      step: 1,
      label2: "",
      selected: [],
      data: [],
      details: false,
      url: "",
      subPropertyView: false,
      equipmentLocationForm: false,
      equipmentDetailsForm: false,
      maximizedToggle: true,
      onclickValue: "",
      dialogTitle: "",
      editedIndex: -1,
      editedItem: {
        equipment_id: "",
        equipment_sub_id: "",
        agent_name: "",
        equipment_sub_name: "",
        account_id: "",
        location: "",
        city: "",
        city_id: "",
        address: "",
        price: "",
        medical_store: "",
        status: "",
        partner_status: ""
        // special_offer:"",
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
        // special_offer:"",
      },

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

      equipmentItemDetails: {
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
        purchased_type:"",
        // special_offer:"",
      },
      editMedicalDetails: {
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
        purchased_type:"",
        //  special_offer:"",
      },
      // unitOptions: [],
      equipment_image: [],

      equipmentPartnerForm: {
        account_id: "",
        equipment_sub_id: "",
        user_id: "",
        equipment_sub_name: "",
        name: "",
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
        equipment_id: "",
        pan_card_upt: "",
        addhaar_no_upt: "",
        mh_agreement_upt: "",
        mb_certificate_upt: "",
        gst_tin_upt: "",
        property_tax_upt: "",
        fire_safety_upt: "",
        cancelled_cheque_upt: "",
        state_id: "",
        city_id: ""
      },
      pagination: {
        rowsPerPage: 500
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      equipmentUpdatingDetails: false,
      statesList: [],
      Countries: ["India"],
      small: false,
      stateOption: [],
      cityOptions: [],
      medicalPurchasingType: ["Market Price","Rent (Per Day)"],
      recordsStatus: [],
      visible: false,
      showPanDoc: false
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];

        return user;
      },
      property: state => state.dropdown.property_arr,

      equipment_partner_registration_columns: state =>
        state.partners.equipment_partner_registration_columns,
      equipment_partner_registration_status_count: state =>
        state.partners.equipment_partner_registration_status_count,
      equipment_registration_rows: state =>
        state.partners.equipment_registration_rows,
      equipment_registration_columns: state =>
        state.partners.equipment_registration_columns,
      equipment_item_rows: state => state.partners.equipment_item_rows,
      equipment_item_columns: state => state.partners.equipment_item_columns,
      states: state => state.master.states_arr,
      cities: state => state.master.city_arr,
      medicalItemName: state => state.dropdown.medical_item_name,
      medicalUnitsName: state => state.dropdown.medical_units_name
    }),
    ...mapGetters("partners", ["equipment_partner_registration_status_count"]),
    ...mapGetters("partners", ["equipment_partner_registration_rows"])
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("partners/getEquipmentRegistrationStatusCount");
    this.$store.dispatch("partners/getEquipmentRegistrationMaster");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("dropdown/loadAllEquipmentItems");
    // this.$store.dispatch("partners/getEquipmentLocationDetails");
    // this.recordsStatus = this.statusCounts();
    // console.log("Status",equipment_partner_registration_status_count);
  },
  meta() {
    return {
      title: this.title
    };
  },
  methods: {
    // addDetailForm() {
    //   if (this.$refs.equipmentLocationForm.validate()) {
    //     var eqpObj = {
    //       s_no: this.equipmentRows.length + 1,
    //       equipment_id: this.editedItem.equipment_id,
    //       equipment_sub_id: this.editedItem.equipment_sub_id,
    //       agent_name: this.equipmentItemDetails.agent_name,
    //       equipment_sub_name: this.equipmentItemDetails.equipment_sub_name,
    //       item_name: this.equipmentItemDetails.item_name,
    //       price: this.equipmentItemDetails.price,
    //       units: this.equipmentItemDetails.units,
    //       equipment_image: this.equipment_image
    //         ? this.equipment_image.name
    //         : "",
    //     };
    //     // console.log(eqpObj);
    //     this.equipmentRows.push(eqpObj);
    //     this.equipmentItemDetails = equipmentForm();
    //     this.emptyValue();
    //     // this.$refs.equipmentLocationForm.reset();
    //     this.resetFiles();
    //     this.$q.notify({
    //       color: "positive",
    //       message: "Equipment Details Added",
    //     });
    //   } else {
    //     this.$q.notify({
    //       color: "negative",
    //       message: "Please Fill the form properly",
    //     });
    //   }
    // },
    deleteItem(item) {
      const index = this.equipmentRows.indexOf(item);
      this.equipmentRows.splice(index, 1);
      this.$q.notify("Equipment Details deleted!");
    },
    reset() {
      this.equipmentLocationForm.resetValidation();
      this.equipmentUpdatingDetails.resetValidation();
    },
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    emptycities() {
      this.equipmentPartnerForm.city = "";
      // this.equipmentItemDetails.city = "";
    },
    ...mapActions("dropdown", ["loadAllEquipmentItems"]),
    ...mapActions("dropdown", ["loadAllMedicalUnits"]),
    ...mapActions("partners", ["equipmentRegistrationMasterAdd"]),
    ...mapActions("partners", ["createEquipmentLocation"]),
    ...mapActions("partners", ["getEquipmentLocationDetails"]),
    ...mapActions("partners", ["equipmentRegistrationMasterExistingUser"]),
    ...mapActions("partners", ["getEquipmentRegistrationMaster"]),
    ...mapActions("partners", ["getEquipmentRegistrationBasedOnStatus"]),
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("partners", ["updateEquipmentDetails"]),
    ...mapActions("partners", ["updatingEquipmentDetailsForm"]),

    onSubmit(val) {
      if (val == "submit") {
        this.$refs.agentFormSubmit.validate().then(success => {
          if (success) {
            if (this.editedItem.equipment_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true
                })
                .onOk(() => {
                  this.equipmentPartnerForm.equipment_id = this.editedItem.equipment_id;
                  this.equipmentPartnerForm.agent_name = this.editedItem.agent_name;
                  this.equipmentPartnerForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("pancard", this.pan_card_file);
                  // console.log(this.pan_card_file)
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("property_tax", this.property_tax);
                  formData.append("fire_safety", this.fire_safety);
                  // console.log(this.fire_safety)
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  //  console.log(this.cancelled_cheque)
                  formData.append(
                    "equipmentDetails",
                    JSON.stringify(this.equipmentPartnerForm)
                  );
                  this.equipmentRegistrationMasterAdd(formData);
                  this.resetFiles();
                  this.equipmentPartnerForm = equipmentRegistrationMaster();

                  this.$refs.agentFormSubmit.resetValidation();
                  this.addDataDialog = false;
                  this.subPropertyView = false;
                  this.details = false;
                  this.step = 1;
                  this.$store.dispatch(
                    "partners/getEquipmentRegistrationStatusCount"
                  );
                  this.getEquipmentRegistrationMaster();
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
                  this.equipmentPartnerForm.equipment_id = "";
                  this.equipmentPartnerForm.equipment_sub_name = this.equipmentPartnerForm.agent_name;
                  this.equipmentPartnerForm.user_id = this.userDetails.account_id;
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
                    "equipmentDetails",
                    JSON.stringify(this.equipmentPartnerForm)
                  );
                  this.equipmentRegistrationMasterAdd(formData);
                  this.resetFiles();
                  this.equipmentPartnerForm = equipmentRegistrationMaster();
                  this.$refs.agentFormSubmit.resetValidation();
                  this.addDataDialog = false;
                  this.step = 1;
                  this.$store.dispatch(
                    "partners/getEquipmentRegistrationStatusCount"
                  );
                  this.getEquipmentRegistrationMaster();
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
                message: "Do you want to Update the data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.equipmentPartnerForm.user_id = this.userDetails.account_id;
                // console.log(this.equipmentPartnerForm);
                this.updateEquipmentDetails(this.equipmentPartnerForm);
                this.equipmentPartnerForm = equipmentRegistrationMaster();
                this.$refs.agentFormSubmit.resetValidation();
                this.addDataDialog = false;
                this.step = 1;
                this.subPropertyView = false;
                this.getEquipmentRegistrationMaster();
                this.getEquipmentRegistrationBasedOnStatus();
              })
              .onCancel(() => {
                // this.emptyValue();
                // this.resetFiles();
                // this.addDataDialog = true;
              });
          }
        });
      }
    },
    onSubmitDetailForm() {
      this.$refs.equipmentLocationForm.validate().then(success => {
        if (this.equipmentItemDetails.equipment_id != "") {
          if (success) {
            // if (this.equipmentRows.length > 0) {
            // console.log("hii");
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.equipmentItemDetails.account_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("equipment_image", this.equipment_image);
                formData.append(
                  "equipmentItemDetails",
                  JSON.stringify(this.equipmentItemDetails)
                );
                // formData.append(
                //   "equipmentRows",
                //   JSON.stringify(this.equipmentRows)
                // );
                this.createEquipmentLocation(formData);
                this.resetFiles();

                this.$refs.equipmentLocationForm.resetValidation();
                this.subPropertyView = true;
                this.equipmentLocationForm = false;
                this.details = false;
                this.equipmentItemDetails = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.emptyValue();
                this.equipmentLocationForm = true;
              });
          }
        }
      });
    },
    onUpdatingEquipmentDetailForm() {
      this.$refs.editEquipmentDetails.validate().then(success => {
        if (this.editEditedItem.equipment_id != "") {
          if (success) {
            // console.log("Update");
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.updatingEquipmentDetailsForm(this.editMedicalDetails);
                // console.log("this.editMedicalDetails", this.editMedicalDetails);
                this.equipmentUpdatingDetails = false;
                this.addDataDialog = false;
                this.subPropertyView = true;
                this.equipmentLocationForm = false;
                this.details = false;
                this.equipmentItemDetails = {};
                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.editEquipmentDetails = true;
              });
          }
        }
      });
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.equipment_id = item.equipment_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.equipment_sub_name = item.equipment_sub_name;
      this.editEditedItem.equipment_id = item.equipment_id;
      this.editEditedItem.agent_name = item.agent_name;
      this.editEditedItem.equipment_sub_name = item.equipment_sub_name;
      this.editEditedItem.location = item.location;
      this.editEditedItem.address = item.address;
      this.editEditedItem.city = item.city;
      this.editEditedItem.city_id = item.city_id;
      this.editEditedItem.status = item.status;
      this.editEditedItem.medical_store = item.medical_store;
      this.equipmentRegistrationMasterExistingUser(item.equipment_id);
      this.subPropertyView = true;
    },
    viewPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.account_id = this.userDetails.account_id;
      this.editedItem.equipment_id = item.equipment_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.equipment_sub_name = item.equipment_sub_name;
      this.editedItem.equipment_sub_name = item.agent_name;
      this.editedItem.status = item.status;
      this.details = true;
      this.getEquipmentLocationDetails(this.editedItem);
    },
    editPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.step = 1;
      this.addDataDialog = true;
      this.onclickValue = "edit";
      this.equipmentPartnerForm.equipment_id = item.equipment_id;
      this.equipmentPartnerForm.equipment_sub_id = item.equipment_sub_id;
      this.equipmentPartnerForm.name = item.equipment_sub_name;
      this.equipmentPartnerForm.agent_name = item.agent_name;
      this.equipmentPartnerForm.equipment_sub_name = item.equipment_sub_name;
      this.equipmentPartnerForm.company_name = item.company_name;
      this.equipmentPartnerForm.individual_name = item.individual_name;
      this.equipmentPartnerForm.phone = item.phone;
      this.equipmentPartnerForm.fax = item.fax;
      this.equipmentPartnerForm.email_id = item.email_id;
      this.equipmentPartnerForm.agent_commission = item.agent_commission;
      this.equipmentPartnerForm.description = item.description;
      this.equipmentPartnerForm.building_no = item.building_no;
      this.equipmentPartnerForm.street = item.street;
      this.equipmentPartnerForm.land_mark = item.land_mark;
      this.equipmentPartnerForm.country = item.country;
      this.equipmentPartnerForm.state = item.state;
      this.equipmentPartnerForm.state_id = item.state_id;
      this.equipmentPartnerForm.city = item.city;
      this.equipmentPartnerForm.city_id = item.city_id;
      this.equipmentPartnerForm.pin_code = item.pin_code;
      this.equipmentPartnerForm.pan = item.pan;
      this.equipmentPartnerForm.aadhar = item.aadhar;
      this.equipmentPartnerForm.gstin = item.gstin;
      this.equipmentPartnerForm.bankAccountNo = item.bankAccountNo;
      this.equipmentPartnerForm.bankName = item.bankName;
      this.equipmentPartnerForm.branchName = item.branchName;
      this.equipmentPartnerForm.ifsc = item.ifsc;
      //docs update
      this.equipmentPartnerForm.pan_card_upt = item.pan_card_file_loc;
      this.equipmentPartnerForm.addhaar_no_upt = item.addhaar_no_loc;
      this.equipmentPartnerForm.mh_agreement_upt = item.mh_agreement_loc;
      this.equipmentPartnerForm.mb_certificate_upt = item.mb_certificate_loc;
      this.equipmentPartnerForm.gst_tin_upt = item.gst_tin_loc;
      this.equipmentPartnerForm.property_tax_upt = item.property_tax_loc;
      this.equipmentPartnerForm.fire_safety_upt = item.fire_safety_loc;
      this.equipmentPartnerForm.cancelled_cheque_upt =
        item.cancelled_cheque_doc;

      this.pan_card_file = {
        name: item.pan_card_file_loc ?? ""
      };

      this.addhaar_no = {
        name: item.addhaar_no_loc ?? ""
      };

      this.mh_agreement = {
        name: item.mh_agreement_loc ?? ""
      };
      this.mb_certificate = {
        name: item.mb_certificate_loc ?? ""
      };
      this.gst_tin = {
        name: item.gst_tin_loc ?? ""
      };
      this.property_tax = {
        name: item.property_tax_loc ?? ""
      };
      this.fire_safety = {
        name: item.fire_safety_loc ?? ""
      };
      this.cancelled_cheque = {
        name: item.cancelled_cheque_doc ?? ""
      };
    },
    editOpenAddDialog() {
      // this.equipmentPartnerForm.country = "India";
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      this.addDataDialog = true;
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.equipment_id = "");
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      this.addDataDialog = true;
      this.details = false;
    },
    closeAddDataDialog() {
      this.resetFiles();
      this.addDataDialog = false;
      this.equipmentUpdatingDetails = false;
      // this.equipmentPartnerForm = equipmentRegistrationMaster();
      this.$refs.agentFormSubmit.resetValidation();
    },

    openequipmentLocationForm() {
      this.equipmentLocationForm = true;
      this.editMedicalDetails.account_id = this.editedItem.account_id;
      this.equipmentItemDetails.equipment_id = this.editedItem.equipment_id;
      this.equipmentItemDetails.equipment_sub_id = this.editedItem.equipment_sub_id;
      this.equipmentItemDetails.agent_name = this.editedItem.agent_name;
      this.equipmentItemDetails.equipment_sub_name = this.editedItem.equipment_sub_name;
      this.equipmentItemDetails.address = this.editedItem.address;
      this.equipmentItemDetails.city = this.editedItem.city;
      this.equipmentItemDetails.city_id = this.editedItem.city_id;
      this.equipmentItemDetails.location = this.editedItem.location;
      this.equipmentItemDetails.partner_status = this.editedItem.status;
      // console.log("this.equipmentItemDetails", this.equipmentItemDetails);
    },

    editEquipmentForm(item) {
      this.equipmentUpdatingDetails = true;
      this.editMedicalDetails.account_id = item.account_id;
      this.editMedicalDetails.txn_id = item.txn_id;
      this.editMedicalDetails.item_name = item.item_name;
      this.editMedicalDetails.item_id = item.item_id;
      this.editMedicalDetails.price = item.price;
      this.editMedicalDetails.units = item.units;
      this.editMedicalDetails.unit_id = item.units_id;
      this.editMedicalDetails.equipment_id = item.equipment_id;
      this.editMedicalDetails.equipment_sub_id = item.equipment_sub_id;
      this.editMedicalDetails.agent_name = item.agent_name;
      this.editMedicalDetails.equipment_sub_name = item.equipment_sub_name;
      this.editMedicalDetails.medical_store = item.medical_store;
      this.editMedicalDetails.purchased_type = item.purchased_type;
      this.editMedicalDetails.address = item.address;
      this.editMedicalDetails.city = item.city;
      this.editMedicalDetails.city_id = item.city_id;
      this.editMedicalDetails.partner_status = item.partner_status;
      this.editMedicalDetails.location = item.location;
      // console.log("this.editMedicalDetails",this.editMedicalDetails);
      // this.editMedicalDetails.special_offer = item.special_offer;
      this.equipment_image = { name: item.equipment_image ?? "" };
    },
    closeEquipmentDialog() {
      this.equipmentLocationForm = false;
    },
    closeEditEquipmentDialog() {
      this.equipmentUpdatingDetails = false;
    },
    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhepFilePath + file;
        // this.url = filepaths.agentFilePath + file;
        // console.log(this.url);
        this.visible = false;
      }, 2000);
      this.small = true;
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
      this.mb_certificate = [];
      this.property_tax = [];
      this.fire_safety = [];
      this.cancelled_cheque = [];
      this.equipment_image = [];
    },
    emptyMedicalItems() {
      this.equipmentItemDetails.units = [];
      this.editMedicalDetails.units = [];
    },
    emptyValue() {
      this.equipmentItemDetails.equipment_sub_name = [];
      this.equipmentItemDetails.agent_name = [];
      this.equipmentItemDetails.price = [];
      this.equipmentItemDetails.item_name = [];
      this.equipmentItemDetails.units = [];
      // this.equipmentItemDetails.special_offer = [];
      this.editMedicalDetails.equipment_sub_name = [];
      this.editMedicalDetails.agent_name = [];
      this.editMedicalDetails.price = [];
      this.editMedicalDetails.medical_store = [];
      this.editMedicalDetails.item_name = [];
      // this.editMedicalDetails.special_offer = [];
      this.editMedicalDetails.units = [];
      this.editMedicalDetails.equipment_image = [];
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
        this.equipment_registration_columns.map(col => wrapCsvValue(col.label))
      ]
        .concat(
          this.equipment_registration_rows.map(row =>
            this.equipment_registration_columns
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
