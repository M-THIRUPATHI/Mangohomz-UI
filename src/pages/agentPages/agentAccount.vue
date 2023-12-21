<template>
    <div>
        <q-page style="padding-top: 100px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
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
          <q-stepper v-model="step" color="primary" animated done-color="secondary" active-color="primary"
            inactive-color="primary">
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
                    v-model="agentPartnerForm.name"
                    label="Your Full Name *"
                    hide-bottom-space
                    style="width: 250px"
                    label-color="black"
                    :rules="[required('First Name & Last Name')]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentPartnerForm.phone"
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
                    v-model="agentPartnerForm.fax"
                    lazy-rules
                    mask="##########"
                    label="WhatsApp No "
                    style="width: 250px"
                    label-color="black"
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
                    v-model="agentPartnerForm.email_id"
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
                    v-model="agentPartnerForm.description"
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
                    v-model="agentPartnerForm.building_no"
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
                    v-model="agentPartnerForm.street"
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
                    v-model="agentPartnerForm.land_mark"
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
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    fill-input
                    :options="countriesArr"
                    option-value="country_Id"
                    option-label="country_name"
                    v-model="agentPartnerForm.country"
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
                    v-model="agentPartnerForm.state"
                    @input="
                      loadAllCities(agentPartnerForm.state);
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
                    :options="cities"
                    option-value="city_id"
                    option-label="city"
                    fill-input
                    options-dense
                    input-debounce="0"
                    v-model="agentPartnerForm.city"
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
                    v-model="agentPartnerForm.pin_code"
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
                    v-model="agentPartnerForm.pan"
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
                    v-model="agentPartnerForm.aadhar"
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
                  <q-input
                    dense
                    outlined
                    v-model="agentPartnerForm.gstin"
                    label="GSTIN"
                    label-color="black"
                    mask="##AAAAA####A###"
                    :filter="checkFileSize"
                    @rejected="onRejected"
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
                    v-model="agentPartnerForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[required('Bank A/C no')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentPartnerForm.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentPartnerForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentPartnerForm.ifsc"
                    label="IFSC Code"
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
                      v-model="agentPartnerForm.accept"
                      label="I accept the Agent Registration"
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
                  :disable="this.agentPartnerForm.accept == false"
                />
                <q-btn
                  color="secondary"
                  label="Update"
                  class="text-bold"
                  @click="onSubmit('update')"
                  v-if="this.onclickValue == 'edit'"
                  :disable="this.agentPartnerForm.accept == false"
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
      <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>
        <q-chip
        v-show="this.agent_account_item_rows.length == 0"
          clickable
          color="secondary"
          text-color="white"
          icon="add"
          class="text-weight-bold"
          @click="OpenAddDialog()"
        >
          Add Profile
        </q-chip>
        <q-chip
        v-show="this.agent_account_item_rows.length > 0"
          clickable
          color="secondary"
          text-color="white"
          class="text-weight-bold"
          @click="editOpenAddDialog()"
        >
          Edit Profile
        </q-chip>
        <q-btn
            dense
            rounded
            color="secondary"
            text-color="white"
            class="text-weight-bold"
            style="width:70px"
            label="Back"
            to="/agent_Dashboard"
        />
      </q-toolbar>
    </q-page-sticky>
    </div>
    <div class="row col-12" v-for="item in agent_account_item_rows" :key="item.s_no">
      <div class="text-left text-black">User Name</div>
      <div  class="text-left text-black">{{ item.user_name }}</div>
      <q-space />
      <div class="text-left text-black">Password</div>
      <div class="text-left text-black">{{item.password}}</div>
    </div>
    <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px"  v-for="item in agent_account_item_rows" :key="item.s_no">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black" >
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
                        : {{ item.agent_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Whatsapp</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.fax }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.email_id }}
                      </div>
                      <q-separator />
                     
                      <div class="col-5 text-left text-black">Description</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.description }}
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
                        : {{ item.building_no }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Street</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.street }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Landmark</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.land_mark }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">City</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.city }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">State</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.state }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Country</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.country }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left">Pincode</div>
                      <div class="col-7 text-left text-grey">
                        : {{ item.pin_code }}
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
                          : {{ item.aadhar }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left text-black">Pan Card</div>
                        <div class="col-7 text-left text-grey">
                          : {{ item.pan }}
                        </div>
                        <div class="col-5 text-left">Account No</div>
                        <div class="col-7 text-left text-grey">
                          : {{ item.bankAccountNo }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left">Bank Name</div>
                        <div class="col-7 text-left text-grey">
                          : {{ item.bankName }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left">Branch</div>
                        <div class="col-7 text-left text-grey">
                          : {{ item.branchName }}
                        </div>
                        <q-separator />
                        <div class="col-5 text-left">IFSC Code</div>
                        <div class="col-7 text-left text-grey">
                          : {{ item.ifsc }}
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <q-resize-observer />
          </div>

  </q-page>
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
const agentRegistrationMaster = () => {
  return {
    approved: "",
    approved_val: "",
    name: "",
    phone: "",
    fax: "",
    alternate_no:"",
    email_id: "",
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
    accept: false,
    pan_card_file: [],
    addhaar_no: [],
    gst_tin: [],
    mh_agreement: [],
    mb_certificate: [],
    property_tax: [],
    fire_safety: [],
    cancelled_cheque: [],
    partner_id: "",
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
      visible: false,
      visible1:false,
      showPanDoc: false,
      showtravel:false,
      small: false,
      big:false,
      editedIndex: -1,
      title: "My Account",
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
      countriesArr:["India"],
      columns: "",
      pagination: {
        rowsPerPage: 500,
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      statesList: [],
      onclickValue: "",
      agentPartnerForm: {
        user_name:"",
        password:"",
        sub_role:"",
        account_id: "",
        name: "",
        partner_sub_name:"",
        phone: "",
        fax: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        country:"",
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
        partner_sub_id: "",
      },
    };
  },
  created() {
    this.$store.dispatch("partners/getgetAgentAccountData");
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
      agent_account_item_rows: state => state.partners.agent_account_item_rows

    }),
    ...mapGetters("partners", ["rooms_data_rows"]),
    ...mapGetters("partners", ["agent_account_item_rows"]),
  },
  mounted() {
    this.$store.dispatch("master/loadAllStates");
    this.agentPartnerForm.email_id =this.userDetails.email;
    this.agentPartnerForm.name =this.userDetails.name;
    this.agentPartnerForm.phone =this.userDetails.mobile_no;
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
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("partners", ["addagentRegistrationMaster"]),
    onSubmit(val) {
      if (val == "submit") {
        this.$refs.agentFormBankDetails.validate().then((success) => {
          if (success) {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  this.agentPartnerForm.account_id =
                    this.userDetails.account_id;
                    this.agentPartnerForm.user_name =
                    this.userDetails.user_name;
                    this.agentPartnerForm.password =
                    this.userDetails.password;
                    this.agentPartnerForm.sub_role =
                    this.userDetails.sub_role;
                  const formData = new FormData();
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("property_tax", this.property_tax);
                  formData.append("fire_safety", this.fire_safety);
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  formData.append(
                    "agentPartnerDetails",
                    JSON.stringify(this.agentPartnerForm)
                  );
                  this.addagentRegistrationMaster(formData);
                  this.resetFiles();
                  this.agentPartnerForm = agentRegistrationMaster();
                  this.addDataDialog = false;
                  this.step = 1;
                })
                .onCancel(() => {
                  this.resetFiles();
                  this.addDataDialog = true;
                });
            
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
                this.agentPartnerForm.account_id =
                  this.userDetails.account_id;
                this.updateagentDetails(this.agentPartnerForm);
                this.agentPartnerForm = agentRegistrationMaster();
                this.addDataDialog = false;
                this.step = 1;
              });
          }
        });
      }
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
    editOpenAddDialog() {
    console.log("agent",this.agent_account_item_rows)
    console.log("agent",this.agent_account_item_rows[0].agent_name)
      this.addDataDialog = true;
      this.onclickValue = "edit";
      this.step = 1;
      this.agentPartnerForm.user_name = this.agent_account_item_rows[0].user_name;
      this.agentPartnerForm.password =this. agent_account_item_rows[0].password;
      this.agentPartnerForm.sub_role = this.agent_account_item_rows[0].sub_role;
      this.agentPartnerForm.agent_id = this.agent_account_item_rows[0].agent_id;
      this.agentPartnerForm.agent_sub_id = this.agent_account_item_rows[0].agent_sub_id;
      this.agentPartnerForm.name = this.agent_account_item_rows[0].agent_name;
      this.agentPartnerForm.partner_sub_name = this.agent_account_item_rows[0].agent_sub_name;
      this.agentPartnerForm.phone = this.agent_account_item_rows[0].phone;
      this.agentPartnerForm.fax = this.agent_account_item_rows[0].fax;
      this.agentPartnerForm.alternate_no = this.agent_account_item_rows[0].alternate_no;
      this.agentPartnerForm.email_id = this.agent_account_item_rows[0].email_id;
      this.agentPartnerForm.description = this.agent_account_item_rows[0].description;
      this.agentPartnerForm.building_no = this.agent_account_item_rows[0].building_no;
      this.agentPartnerForm.street = this.agent_account_item_rows[0].street;
      this.agentPartnerForm.land_mark = this.agent_account_item_rows[0].land_mark;
      this.agentPartnerForm.country = this.agent_account_item_rows[0].country;
      this.agentPartnerForm.state = this.agent_account_item_rows[0].state;
      this.agentPartnerForm.city = this.agent_account_item_rows[0].city;
      this.agentPartnerForm.prevstate = this.agent_account_item_rows[0].state;
      this.agentPartnerForm.prevcity = this.agent_account_item_rows[0].city;
      this.agentPartnerForm.pin_code = this.agent_account_item_rows[0].pin_code;
      this.agentPartnerForm.propertyType = this.agent_account_item_rows[0].property_type;
      this.agentPartnerForm.pan = this.agent_account_item_rows[0].pan;
      this.pan_card_file = {
        name: this.agent_account_item_rows[0].pan_loc ?? "",
      };
      this.agentPartnerForm.aadhar = this.agent_account_item_rows[0].aadhar;
      this.addhaar_no = {
        name: this.agent_account_item_rows[0].addhaar_loc ?? "",
      };
      this.agentPartnerForm.gstin = this.agent_account_item_rows[0].gstin;
      this.gst_tin = {
        name: this.agent_account_item_rows[0].gst_tin_loc ?? "",
      };
      this.mh_agreement = {
        name: this.agent_account_item_rows[0].mh_agreement_loc ?? "",
      };
      this.mb_certificate = {
        name: this.agent_account_item_rows[0].mb_certificate_loc ?? "",
      };
      this.property_tax = {
        name: this.agent_account_item_rows[0].property_tax_loc ?? "",
      };
      this.fire_safety = {
        name: this.agent_account_item_rows[0].fire_safety_loc ?? "",
      };
      this.agentPartnerForm.bankAccountNo = this.agent_account_item_rows[0].bankAccountNo;
      this.agentPartnerForm.bankName = this.agent_account_item_rows[0].bankName;
      this.agentPartnerForm.branchName = this.agent_account_item_rows[0].branchName;
      this.agentPartnerForm.ifsc = this.agent_account_item_rows[0].ifsc;
      this.cancelled_cheque = {
        name: this.agent_account_item_rows[0].cancelled_cheque_doc ?? "",
      };
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.partner_id = "");
      this.onclickValue = "";
      this.step = 1;
      this.addDataDialog = true;
      this.details = false;
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
      this.agentPartnerForm.city = "";
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
    closeAddPartnerDialog() {
      this.addDataDialog = false;
      this.resetFiles();
      this.agentPartnerForm = agentRegistrationMaster();
    },
  },
};
</script>