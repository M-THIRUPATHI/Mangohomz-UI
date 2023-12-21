<template>
  <div>
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md">
        <q-chip square clickable
        @click="getClickableFoodRegMaster('ALL')">
          <q-avatar color="primary" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : parseInt(
                  this.food_partner_registration_status_count[0].pcount
                ) +
                parseInt(
                  this.food_partner_registration_status_count[0].acount
                ) +
                parseInt(this.food_partner_registration_status_count[0].rcount)+
                parseInt(
                  this.food_partner_registration_status_count[0].vcount
                )
          }}</q-avatar>
          All
        </q-chip>
        <q-chip
          square
          clickable
          @click="getFoodRegistrationStatusCount('approved');getClickableFoodRegMaster('approved')"
        >
          <q-avatar color="secondary" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : this.food_partner_registration_status_count[0].acount
          }}</q-avatar>
          Approved
        </q-chip>
        <q-chip
          square
          clickable
          @click="getFoodRegistrationStatusCount('verified');getClickableFoodRegMaster('verified')"
        >
          <q-avatar color="primary" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : this.food_partner_registration_status_count[0].vcount
          }}</q-avatar>
          verified
        </q-chip>
        <q-chip
          square
          clickable
          @click="getFoodRegistrationStatusCount('rejected');getClickableFoodRegMaster('rejected')"
        >
          <q-avatar color="red" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : this.food_partner_registration_status_count[0].rcount
          }}</q-avatar>
          Rejected
        </q-chip>
        <q-chip
          square
          clickable
          @click="getFoodRegistrationStatusCount('pending');getClickableFoodRegMaster('pending')"
        >
          <q-avatar color="orange" text-color="white">{{
            this.food_partner_registration_status_count.length == 0
              ? "0"
              : this.food_partner_registration_status_count[0].pcount
          }}</q-avatar>
          Pending
        </q-chip>
      </div>

      <q-table
        :data="food_partner_registration_rows_staff"
        :columns="food_partner_registration_columns"
        :pagination.sync="pagination"
        row-key="agent_id"
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
            >
              <q-tooltip :disable="$q.platform.is.mobile"
                >View Details</q-tooltip
              >
            </q-btn>
            <q-btn
              color="green"
              class="q-ml-sm"
              @click="editFoodMasterItem(props.row)"
              label="Edit"
              size="sm"
            >
              <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>

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
                    label="Landmark "
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" />
                    </template>
                  </q-input>
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
                    v-model="foodPartnerForm.country"
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
                    v-model="foodPartnerForm.gstin"
                    label="GSTIN"
                    mask="##AAAAA####A###"
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
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <!-- <q-input
                    dense
                    outlined
                    v-model="foodPartnerForm.fssai"
                    label="FSSAI Licence"
                    mask="##############"
                    label-color="black"
                    :rules="[required('FSSAI Licence No.')]"
                  /> -->
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
                    Max File size is 1MB & Image format is
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
<!--Edit All Data And Document Form Start-->
<q-dialog
        v-model="editFoodMasterDialog"
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
                <div class="q-pa-md row q-gutter-md">
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="foodmasterEdit.name"
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
                  <!-- <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="foodmasterEdit.company_name"
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
                    v-model="foodmasterEdit.individual_name"
                    v-if="foodmasterEdit.company_name != ''"
                    label="Individual Name"
                    hide-bottom-space
                    style="width: 300px"
                    label-color="black"

                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" /> </template
                  ></q-input> -->

                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="foodmasterEdit.phone"
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
                    v-model="foodmasterEdit.fax"
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
                    v-model="foodmasterEdit.email_id"
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
                    v-model="foodmasterEdit.description"
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
                    v-model="foodmasterEdit.building_no"
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
                    v-model="foodmasterEdit.street"
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
                    v-model="foodmasterEdit.land_mark"
                    label="Landmark "
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" />
                    </template>
                  </q-input>
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
                    v-model="foodmasterEdit.country"
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
                    v-model="foodmasterEdit.state"
                    @input="
                      loadAllCities(foodmasterEdit.state);
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
                    v-model="foodmasterEdit.city"
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
                    v-model="foodmasterEdit.pin_code"
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
                    v-model="foodmasterEdit.pan"
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
                    v-model="foodmasterEdit.aadhar"
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
                    v-model="foodmasterEdit.gst_registration"
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
                    v-model="foodmasterEdit.gstin"
                    label="GSTIN"
                    :rules="[required('Enter GSTIN')]"
                    mask="##AAAAA####A###"
                    label-color="black"
                    v-bind:readonly="this.onclickValue == 'edit'"
                    v-if="this.foodmasterEdit.gst_registration == 'Registered'"
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
                        v-if="
                          this.foodmasterEdit.gst_registration == 'Registered'
                        "
                      />
                    </template>
                  </q-file>
                  <q-input
                    dense
                    outlined
                    v-model="foodmasterEdit.fssai"
                    label="FSSAI Licence"
                    mask="##############"
                    label-color="black"
                    v-bind:readonly="this.onclickValue == 'edit'"
                  />
                  <!-- <q-input
                    dense
                    outlined
                    v-model="foodmasterEdit.gstin"
                    label="GSTIN"
                    mask="##AAAAA####A###"
                    label-color="black"
                  /> -->
                  <!-- <q-file
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
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file> -->
                  <!-- <q-input
                    dense
                    outlined
                    v-model="foodmasterEdit.fssai"
                    label="FSSAI Licence"
                    mask="##############"
                    label-color="black"
                    :rules="[required('FSSAI Licence No.')]"
                  /> -->
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
                    Max File size is 1MB & Image format is
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
                    v-model="foodmasterEdit.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="number"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="foodmasterEdit.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="foodmasterEdit.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="foodmasterEdit.ifsc"
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
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
                <q-card-actions align="left">
                  <q-toggle
                    v-model="foodmasterEdit.accept"
                    label="I accept the Food Partner Registration"
                  />
                </q-card-actions>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">

                <q-btn
                  color="secondary"
                  label="Update"
                  class="text-bold"
                  @click="onFoodMasterUpdate"

                  :disable="this.foodmasterEdit.accept == false"
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
<!--Edit All Data And Document Form End-->

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
              <!-- <q-chip
                clickable
                dense
                color="secondary"
                text-color="white"
                icon="add"
                @click="openPropertyDialog()"
                class="text-weight-bold"
              >
                Add Food Details
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

                    <!--
                    <div class="col-3">
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
                      {{ editedItem.food_tax_loc }}
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
                      v-model="editFoodRestaurant.restaurant_longitude"
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
              <!-- <q-chip
                dense
                clickable
                color="secondary"
                text-color="white"
                icon="add"
                class="text-weight-medium"
                @click="openPropertyDialog()"
              >
                Add Menu
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
                  <div style="height: 300px">
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
                  <div style="height: 300px">
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
                  <div style="height: 150px">
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

            <div class="row col-12 q-ml-md">
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
                  Travel Details
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
                          <td class="text-left" width="280px">Vehicle image</td>
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
          </div>
        </q-layout>
      </q-dialog>

            <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>

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
            </div> -->
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
            row-key="agent_id"
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
                @click="editOpenAddDialog()"
                class="text-weight-bold"
              >
                Add MHFP
              </q-chip> -->
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
                  class="q-ml-sm"
                  @click="editFoodMasterItem(props.row)"
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
                  style="width: 180px"
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
                  v-model="foodDetails.sub_Name"
                  label="Food Partner Sub Name *"
                  readonly
                  hide-bottom-space
                  style="width: 180px"
                  label-color="black"
                  :rules="[required('Food Partner Sub Name')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="foodDetails.kitchen_name"
                  label="Name of Kitchen *"
                  hide-bottom-space
                  style="width: 180px"
                  label-color="black"
                  :rules="[required('Kitchen Name')]"
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
                  label="Kitchen Type *"
                  hide-bottom-space
                  style="width: 180px"
                  label-color="black"
                  :rules="[required('Kitchen Type')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-select
                  class="col-3"
                  dense
                  outlined
                  v-model="foodDetails.foodName"
                  label="Food Item Name *"
                  hide-bottom-space
                  style="width: 180px"
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
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-select>
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
                <q-input
                  outlined
                  label="items Available from *"
                  dense
                  v-model="foodDetails.items_available_from"
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
                  label="Items Available to*"
                  dense
                  v-model="foodDetails.items_available_to"
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
                  label="Units *"
                  hide-bottom-space
                  style="width: 180px"
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
                  v-model="foodDetails.price"
                  label="Price (from INR)*"
                  hide-bottom-space
                  style="width: 180px"
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
                  style="width: 180px"
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
                  Max File size is 1MB & Image format is
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
        <b style="margin-right:15px"> User Name: {{ userDetails.user_name }}</b>
        <!-- <q-chip
          clickable
          color="secondary"
          text-color="white"
          icon="add"
          @click="OpenAddDialog()"
          class="text-weight-bold"
        >
          Add MHFP
        </q-chip> -->

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
    latitude: "",
    longitude: "",
    food_safety: [],
    foodmasterEdit: null,
    food_image: [],
    food_tax: [],
    mb_certificate: [],
    file_upload5: [],
    gst_tin: [],
    addhaar_no: [],
    pan_card_file: [],
    mh_agreement: [],
    // partner_pic: [],
    food_image: [],
    state_id: "",
    city_id: "",
  };
};
// const foodForm = () => {
//   return {
//     name: "",
//     sub_Name: "",
//     sub_Name: "",
//     item_Name: "",
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
      title: "MH Food Partner (MHFP)",
      label2: "",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      subFoodView: false,
      foodDetailsAddForm: false,
      foodviewdialog: false,
      foodRestaurantEditDialog: false,
      foodRestaurantDataDialog: false,
      editFoodForm: false,
      food_count_status: false,
      upload_Image: [],
      upload_Image1: [],
      upload_Image2: [],
      offerOptions: ["Amount", "Percentage"],
      otherfoodtype: ["Veg", "Non-Veg"],
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
      upload_fssai_1: [],
      gstOptions: ["Registered", "Unregistered"],
      onclickValue: "",
      foodPartnerForm: {
        user_id: "",
        name: "",
        agent_id: "",
        agent_name: "",
        agent_sub_id: "",
        agent_sub_name: "",
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
        state_id: "",
        status: "",
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
        city: "",
        state: "",
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
        state_name: "",
        city_name: "",
        agent_name: "",
        agent_sub_name: "",
        date_from: "",
        date_to: "",
        phone: "",
        select_offer: "",
        enter_amount: "",
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
      },
      foodmasterEdit: {
        user_id: "",
        name: "",
        agent_id: "",
        agent_name: "",
        agent_sub_id: "",
        agent_sub_name: "",
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
        state_id: "",
        status: "",
      },
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
        gstin: "",
        fssai_no: "",
        state_id: "",
        partner_status: "",
        status: "",
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
        partner_status: "",
      },
      Countries: ["India"],
      // foodThaliArr: [
      //   {
      //     food_type_name: "Veg Thali",
      //     food_type_id: 1
      //   },
      //   {
      //     food_type_name: "Chkn Non-Veg Thali",
      //     food_type_id: 2
      //   },
      //   {
      //     food_type_name: "Fish Non-Veg Thali",
      //     food_type_id: 3
      //   },
      //   {
      //     food_type_name: "Egg Thali",
      //     food_type_id: 4
      //   }
      // ],
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
      editFoodMasterDialog: false,
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
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];

        return user;
      },
      food_partner_registration_status_count: (state) =>
        state.dashboard.food_partner_registration_status_count,
      food_partner_registration_rows: (state) =>
        state.dashboard.food_partner_registration_rows,
      food_partner_registration_columns: (state) =>
        state.dashboard.food_partner_registration_columns,
      food_registration_rows: (state) => state.dashboard.food_registration_rows,
      food_registration_columns: (state) =>
        state.dashboard.food_registration_columns,
      foodDetails_rows: (state) => state.dashboard.foodDetails_rows,
      foodDetails_columns: (state) => state.partners.foodDetails_columns,
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
      foodThaliArr: (state) => state.dropdown.food_item_types_arr,
      foodListArr: (state) => state.dropdown.food_list_arr,
      food_partner_registration_rows_staff:(state) => state.dashboard.food_partner_registration_rows_staff,
      food_restaurant_data_columns: (state) =>
        state.partners.food_restaurant_data_columns,
        foodDetails_rows_partner: (state) => state.partners.foodDetails_rows_partner,
    }),
    ...mapGetters("dashboard", ["food_partner_reg_rows"]),
    ...mapGetters("dashboard", ["food_partner_registration_rows_staff"]),
    ...mapGetters("dashboard", ["food_partner_registration_status_count"]),
    ...mapGetters("partners", ["food_restaurant_data_rows"])
  },
  mounted() {
    this.$store.dispatch("dashboard/getFoodRegistrationStatusCount");
    // this.$store.dispatch("dashboard/getFoodRegistrationBasedOnStatus");

    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("dashboard/getFoodRegistrationMaster");
    this.$store.dispatch("dropdown/loadAllFoodTypes");
    this.$store.dispatch("dashboard/getFoodAllDisplayForStaff");

    // this.$store.dispatch("dashboard/getFoodDetails");

    // this.recordsStatus = this.statusCounts();
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

    ...mapActions("dashboard", ["foodRegistrationMasterAdd"]),
    ...mapActions("master", ["loadAllCities"]),
    // ...mapActions("dashboard", ["getFoodRegistrationBasedOnStatus"]),
    ...mapActions("partners", ["getFoodRestaurantDetails"]),
    ...mapActions("dashboard", ["getFoodRegistrationMaster"]),
    ...mapActions("dashboard", ["getExistingUserFoodPartner"]),
    ...mapActions("dashboard", ["foodDetailsSaving"]),
    ...mapActions("dashboard", ["foodDetailsUpdating"]),
    // ...mapActions("dashboard", ["getfoodDetails"]),
    ...mapActions("dashboard", ["updateFoodPartnerDetails"]),
    ...mapActions("dropdown", ["loadAllFoodTypes"]),
    ...mapActions("dropdown", ["loadAllFoodItems"]),
    ...mapActions("dashboard", ["updateFoodMasterForm"]),
    ...mapActions("dashboard", ["getFoodAllDisplayForStaff"]),

    ...mapActions("dashboard", ["getFoodRegistrationStatusCount"]),
    ...mapActions("partners", ["updateFoodRestaurant"]),
    ...mapActions("partners", ["getfoodDetails"]),
    ...mapActions("partners", ["fooditemdetailsUpdating"]),

    // addFoodData() {
    //   if (this.$refs.foodDetailsAddForm.validate()) {
    //     var foodObj = {
    //       s_no: this.foodData_rows.length + 1,
    //       agent_id:this.agent_id,
    //       agent_sub_id:this.agent_sub_id,

    //       name: this.foodDetails.agent_name,
    //       sub_Name: this.foodDetails.sub_Name,
    //       item_Name: this.foodDetails.item_Name,
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
                  // this.$store.dispatch(
                  //   "dashboard/getFoodRegistrationStatusCount"
                  // );
                  // this.getFoodRegistrationMaster();
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
                // console.log(this.foodPartnerForm);
                this.updateFoodPartnerDetails(this.foodPartnerForm);
                this.foodPartnerForm = foodRegistrationMaster();
                this.$refs.agentFormSubmit.resetValidation();
                this.addDataDialog = false;
                this.step = 1;
                this.subFoodView = false;
                this.getFoodRegistrationMaster();
                // this.getFoodRegistrationBasedOnStatus();
              });
          }
        });
      }
    },
    onSubmitFoodDetails(val) {
      if (val == "submit") {
        this.$refs.foodDetailsAddForm.validate().then((success) => {
          if (success) {
            if (this.foodDetails.agent_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true,
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
                  this.getFoodRestaurantDetails();
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
                this.subFoodView = true;
                this.details = false;
                this.getFoodRestaurantDetails();
              });
          }
        });
      }
    },



    onFoodMasterUpdate() {
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

              const formData = new FormData();
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("food_tax", this.food_tax);
                  formData.append("food_safety", this.food_safety);
                  formData.append("cancelled_cheque", this.file_upload5);
                  formData.append(
                    "updateFoodMaster",
                    JSON.stringify(this.foodmasterEdit)
                  );
                 console.log("11update", formData,this.foodmasterEdit);

              this.updateFoodMasterForm( formData);
              this.foodmasterEdit = foodRegistrationMaster();

              this.$refs.agentFormSubmit.resetValidation();
              this.editFoodMasterDialog = false;
              this.step = 1;
                this.subFoodView = false;
                this.getFoodRegistrationMaster();
                // this.getFoodRegistrationBasedOnStatus();
            })
            .onCancel(() => {
              this.resetFiles();
              this.editFoodMasterDialog = true;
            });
        }
      });
    },
    // saving add food details form

    // onSubimtfoodDetailsAddForm() {
    //   this.$refs.foodDetailsAddForm.validate().then((success) => {
    //     if (success) {
    //       if (this.foodData_rows.length > 0) {
    //         this.$q
    //           .dialog({
    //             title: "Confirm",
    //             message: "Do you want to Submit data ?",
    //             cancel: true,
    //             persistent: true,
    //           })
    //           .onOk(() => {
    //             const formData = new FormData();
    //             // formData.append("foodImg", this.foodImg);
    //             formData.append(
    //               "foodData_rows",
    //               JSON.stringify(this.foodData_rows)
    //             );
    //             this.foodDetailsSaving(formData);
    //             // this.resetFiles();

    //             this.foodDetails = foodRegistrationMaster();
    //             // this.$refs.foodDetailsAddForm.resetValidation();
    //             // this.addFoodData();
    //             this.emptyValue();
    //             this.foodForm = {};
    //             //  this.foodDetails = foodForm();

    //             // this.addDataDialog = false;
    //             // this.subPropertyView = false;
    //             // this.foodDetailsAddForm = false;

    //             // this.details = false;
    //             // this.foodDetails = {};
    //             // this.step = 1;
    //           })
    //           .onCancel(() => {
    //             this.resetFiles();
    //             this.emptyValue();

    //             this.addFoodData = true;
    //           });
    //       }
    //     }
    //   });
    // },

    editItem(item) {
      // console.log("item", item);
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
      this.getFoodRestaurantDetails(this.editedItem);
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
    editFoodMasterItem(item) {
     //  console.log("Hiiii", item);
      this.step = 1;
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editFoodMasterDialog = true;
     // this.onclickValue = "edit";
      this.foodmasterEdit.agent_id = item.agent_id;
      this.foodmasterEdit.agent_sub_id = item.agent_sub_id;
      this.foodmasterEdit.name = item.agent_sub_name;
      this.foodmasterEdit.agent_name = item.agent_name;
      this.foodmasterEdit.agent_sub_name = item.agent_sub_name;
      this.foodmasterEdit.company_name = item.company_name;
      this.foodmasterEdit.individual_name = item.individual_name;
      this.foodmasterEdit.phone = item.phone;
      this.foodmasterEdit.fax = item.fax;
      this.foodmasterEdit.email_id = item.email_id;
      this.foodmasterEdit.description = item.description;
      this.foodmasterEdit.building_no = item.building_no;
      this.foodmasterEdit.street = item.street;
      this.foodmasterEdit.land_mark = item.land_mark;
      this.foodmasterEdit.country = item.country;
      this.foodmasterEdit.state = item.state;
      this.foodmasterEdit.state_id = item.state_id;
      this.foodmasterEdit.city = item.city;
      this.foodmasterEdit.city_id = item.city_id;
      this.foodmasterEdit.pin_code = item.pin_code;
      this.foodmasterEdit.pan = item.pan;
      this.pan_card_file = {
        name: item.pan_card_file ?? "",
      };
      this.foodmasterEdit.aadhar = item.aadhar;
      this.addhaar_no = {
        name: item.addhaar_no ?? "",
      };
      this.foodmasterEdit.gstin = item.gstin;
      this.foodmasterEdit.fssai = item.fssai_no;
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
      this.foodmasterEdit.bankAccountNo = item.bankAccountNo;
      this.foodmasterEdit.bankName = item.bankName;
      this.foodmasterEdit.branchName = item.branchName;
      this.foodmasterEdit.ifsc = item.ifsc;
      this.foodmasterEdit.status = item.status;
      this.file_upload5 = {
        name: item.file_upload5 ?? "",
      };
    },
    editFoodItem(item) {
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
      this.foodDetails.food_image = item.food_image;

      this.food_image = {
        name: item.food_image ?? "",
      };
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
      this.upload_fssai_1 = [];
    },

    editOpenAddDialog() {
      this.foodPartnerForm.country = "India";
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      // this.foodPartnerForm = foodRegistrationMaster();
      this.addDataDialog = true;
    },

    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.agent_id = "");
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      // this.foodPartnerForm = foodRegistrationMaster();
      this.addDataDialog = true;
      this.details = false;
    },
    closeAddFoodDialog() {
      this.addDataDialog = false;
      this.editFoodMasterDialog = false;
      this.resetFiles();
      this.foodPartnerForm = foodRegistrationMaster();
      // this.$refs.agentFormSubmit.resetValidation();
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
      this.foodDetails.price = [];
      this.foodDetails.foodName = [];
      this.foodDetails.foodItemsList = [];
      this.foodDetails.kitchen_name = [];
      this.foodDetails.kitchen_type = [];
      this.food_image = [];
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
    getClickableFoodRegMaster(item){
      this.getFoodAllDisplayForStaff(item);
      this.food_count_status = true;

    },
    editFoodRestaurantData(item) {
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
      console.log("editFoodRestaurantData", item);
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
              console.log("updateFoodRestaurant", this.editFoodRestaurant);
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
    closeRestaurantEditDialog() {
      this.foodRestaurantEditDialog = false;
      this.resetFiles();
      this.editFoodRestaurant = foodRegistrationMaster();
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
    editFoodItemdetails(item) {
      console.log("editFoodItemdetails",item);
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
      // this.food_image = {
      //   name: item.food_image ?? "",
      // };
      this.editFoodForm = true;
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
                console.log("this.editedfoodDetails", this.editedfoodDetails);
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
  },
};
</script>
