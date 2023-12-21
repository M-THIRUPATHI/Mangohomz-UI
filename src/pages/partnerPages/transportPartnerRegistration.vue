<template>
  <div>
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
        <q-chip square clickable @click="getClickableTransportRegMaster('ALL')">
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
                ) +
                parseInt(
                  this.property_transport_registration_status_count[0].vcount
                )
          }}</q-avatar>
          All
        </q-chip>
        <q-chip
          square
          clickable
          @click="
            getTransportRegistrationStatusCount('approved');
            getClickableTransportRegMaster('approved');
          "
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
          @click="
            getTransportRegistrationStatusCount('verified');
            getClickableTransportRegMaster('verified');
          "
        >
          <q-avatar color="primary" text-color="white">{{
            this.property_transport_registration_status_count.length == 0
              ? "0"
              : this.property_transport_registration_status_count[0].vcount
          }}</q-avatar>
          verified
        </q-chip>
        <q-chip
          square
          clickable
          @click="
            getTransportRegistrationStatusCount('rejected');
            getClickableTransportRegMaster('rejected');
          "
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
          @click="
            getTransportRegistrationStatusCount('pending');
            getClickableTransportRegMaster('pending');
          "
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
        :data="transport_reg_rows_staff"
        :columns="transport_reg_columns"
        :pagination.sync="pagination"
        dense
        row-key="agent_id"
        :selected.sync="selected"
        :grid="mode === 'grid'"
        :filter="filter"
        color="green"
        separator="cell"
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
              ></q-btn
            >
            <q-btn
              color="green"
              class="q-ml-sm"
              @click="editPropertyItem(props.row)"
              label="Edit"
              size="sm"
            >
              <q-tooltip :disable="$q.platform.is.mobile"
                >Edit Details</q-tooltip
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
                  <!-- <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="transportPartnerForm.company_name"
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
                    v-model="transportPartnerForm.individual_name"
                    label="Individual Name *"
                     v-if="transportPartnerForm.company_name != ''"
                    hide-bottom-space
                    style="width: 300px"
                    label-color="black"

                  >
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" />
                    </template>
                  </q-input> -->

                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="transportPartnerForm.phone"
                    label="Phone"
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
                    v-model="transportPartnerForm.fax"
                    lazy-rules
                    mask="##########"
                    label="Whatsapp no"
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
                      <q-icon name="mdi-email" color="secondary" /> </template
                  ></q-input>

                  <q-input
                    class="col-2"
                    dense
                    outlined
                    v-model="transportPartnerForm.description"
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
                  class="q-pa-md row q-gutter-md items-start text-h6 text-weight-bold"
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
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.aadhar"
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
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.gstin"
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
                      <q-icon name="attach_file" /> </template
                  ></q-file>
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
                      <q-icon name="attach_file" /> </template
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
                    :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
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
                    :rules="[(val) => val || 'Please select file']"
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
                    v-model="transportPartnerForm.bankAccountNo"
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
                  />
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="transportPartnerForm.ifsc"
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
      <!--Edit Or Update Data And Document Start -->

      <q-dialog v-model="addDataDialog" maximized persistent>
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
              <q-form ref="agentFormBasic">
                <div class="q-pa-md row q-gutter-md">
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="edittransportPartnerForm.name"
                    label="Transport Partner Name *"
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
                    v-model="edittransportPartnerForm.phone"
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
                    v-model="edittransportPartnerForm.fax"
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
                    v-model="edittransportPartnerForm.email_id"
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
                    v-model="edittransportPartnerForm.description"
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
                    v-model="edittransportPartnerForm.building_no"
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
                    v-model="edittransportPartnerForm.street"
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
                    v-model="edittransportPartnerForm.land_mark"
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
                    v-model="edittransportPartnerForm.country"
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
                    v-model="edittransportPartnerForm.state"
                    @input="
                      loadAllCities(edittransportPartnerForm.state);
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
                    v-model="edittransportPartnerForm.city"
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
                    v-model="edittransportPartnerForm.pin_code"
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
                  class="q-pa-md row q-gutter-md items-start text-h6 text-weight-bold"
                >
                  Proof of Identity and Proof of Address:
                </div>
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="edittransportPartnerForm.pan"
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
                    v-model="edittransportPartnerForm.aadhar"
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
                    v-model="edittransportPartnerForm.gstin"
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
              <q-form ref="propertyPartnerFormSubmit">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input
                    dense
                    outlined
                    v-model="edittransportPartnerForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                    :rules="[required('Bank A/C no'), number()]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="edittransportPartnerForm.bankName"
                    label="Bank Name"
                    label-color="black"
                    :rules="[required('Bank Name')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="edittransportPartnerForm.branchName"
                    label="Branch Name"
                    label-color="black"
                    :rules="[required('Branch')]"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="edittransportPartnerForm.ifsc"
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
                    v-model="edittransportPartnerForm.accept"
                    label="I accept the Property Partner Registration"
                  />
                </q-card-actions>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  color="secondary"
                  label="Update"
                  class="text-bold"
                  @click="ontransportPartnerUpdate"
                  :disable="this.edittransportPartnerForm.accept == false"
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
                View of Travel Partner Details:
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
                @click="travelDetailsForm()"
              >
                Add Travel
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
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"
                  ><q-icon name="mdi-home-circle" color="black" size="1.5em" />
                  Address Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
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
                    {{ editedItemtransport.transport_sub_name }}
                  </div>
                  <q-space />
                  <!-- <q-chip dense clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
                @click="travelDetailsForm()">
                Add Travel Data
              </q-chip> -->
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
                          class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                        >
                          <div class="col-5 text-left text-black">
                            Transport Company Name
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.transport_company_name }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Name Of Contact Person
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.Name_Of_Contact_Person }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Phone Number
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.transport_phone }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">Email Id</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.transport_email_id }}
                          </div>
                          <q-separator />

                          <div class="col-5 text-left text-black">
                            Special Offer
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.special_offer }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Description
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.transport_description }}
                          </div>
                          <q-separator />
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
                      <q-icon
                        name="mdi-home-circle"
                        color="black"
                        size="1.5em"
                      />
                      Address Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div
                          class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                        >
                          <div class="col-5 text-left">House No</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.building_no }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Street</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.street }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Landmark</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.land_mark }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Country</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.country }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">State</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.state }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">City</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.city }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left">Pincode</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.pin_code }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Latitude</div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.transport_latitude }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Longitude
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ editedItemtransport.transport_longitude }}
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
                                      editedItemtransport.upload_image1,
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
                                      editedItemtransport.upload_image2,
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
                    <q-bar
                      flat
                      class="ma-02 text-bold"
                      style="max-height: 20vh"
                    >
                      <q-icon name="mdi-home" color="black" size="1.5em" />
                      Transport Description
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 150px">
                        <div
                          class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                        >
                          <div class="col-12 text-justify text-grey">
                            {{ editedItemtransport.transport_description }}
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
                              @click="editTravel(props.row)"
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
                        <q-tooltip
                          :disable="$q.platform.is.mobile"
                          v-close-popup
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
                        <q-tooltip
                          :disable="$q.platform.is.mobile"
                          v-close-popup
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
                        <q-tooltip
                          :disable="$q.platform.is.mobile"
                          v-close-popup
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
                            <q-icon
                              name="mdi-sale"
                              color="secondary"
                            /> </template
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
                          v-if="
                            this.transporteditedItem.select_offer == 'Amount'
                          "
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
                            this.transporteditedItem.select_offer ==
                            'Percentage'
                          "
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-percent-outline"
                              color="secondary"
                            />
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

          <!-- <div
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
                          @click="editTravel(props.row)"
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
          </div> -->
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
            :data="transport_reg_rows_staff"
            :columns="transport_reg_columns"
            row-key="status"
            :filter="filter"
            :selected.sync="selected"
            separator="cell"
            :pagination.sync="pagination"
            :hide-header="mode === 'grid'"
            :grid="mode === 'grid'"
          >
        <!-- <q-card flat bordered class="bg-white">
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
          > -->
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
                Add MHTP
              </q-chip> -->
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
                  ></q-btn
                >
                <q-btn
                  color="green"
                  @click="editPropertyItem(props.row)"
                  label="Edit"
                  size="sm"
                >
                  <q-tooltip :disable="$q.platform.is.mobile"
                    >Edit</q-tooltip
                  ></q-btn
                >
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
                <!-- <q-select
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
                </q-select> -->
                <q-input
                  dense
                  outlined
                  v-model="travelLocation.vehicle_name"
                  label="vehicle Name *"
                  class="col-3"
                  hide-bottom-space
                  style="width: 250px"
                  :rules="[required('Vehicle Name')]"
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
                <q-select
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
                </q-select>

                <q-input
                  class="col-2"
                  dense
                  outlined
                  v-model="travelLocation.description"
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
                @click="updateTravelLocData('update')"
                :disable="this.travelLocation.accept == false"
              />
            </div>
          </q-form>
        </q-card>
      </q-dialog>
    </q-page>
    <!-- Travel view start -->
    <q-dialog
      :visible="travelviewdialog"
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
              {{ editedItemtransport.agent_name }}
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
                      Transport Company Name
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItemtransport.transport_company_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Name Of Contact Person
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItemtransport.Name_Of_Contact_Person }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Phone Number</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItemtransport.transport_phone }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Email Id</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItemtransport.transport_email_id }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Special Offer</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItemtransport.special_offer }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Description</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItemtransport.transport_description }}
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
                    <div class="col-5 text-left text-black">Vehicle Name</div>
                    <div class="col-7 text-left text-grey">
                      : {{ travelLocation.vehicle_name }}
                    </div>
                    <q-separator />

                    <div class="col-5 text-left text-black">Day Price</div>
                    <div class="col-7 text-left text-grey">
                      : {{ travelLocation.day_price }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Night Price</div>
                    <div class="col-7 text-left text-grey">
                      : {{ travelLocation.night_price }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">No of seats</div>
                    <div class="col-7 text-left text-grey">
                      : {{ travelLocation.no_of_seaters }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Units</div>
                    <div class="col-7 text-left text-grey">
                      : {{ travelLocation.units }}
                    </div>
                    <q-separator />

                    <q-separator />
                    <div class="col-5 text-left text-black">Description</div>
                    <div class="col-7 text-left text-grey">
                      : {{ travelLocation.description }}
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
                                travelLocation.vehicle_image,
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
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>
        <b style="margin-right: 15px">
          User Name: {{ userDetails.user_name }}</b
        >
        <!-- <q-chip
          clickable
          color="secondary"
          text-color="white"
          icon="add"
          @click="OpenAddDialog()"
          class="text-weight-bold"
        >
          Add MHTP
        </q-chip> -->

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
    accept: false,
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
      transport_count_status: false,
      transportViewDialog: false,
      transportEditDialog: false,
      pincode_loading: false,
      maximizedToggle: true,
      travelviewdialog: false,
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
      offerOptions: ["Amount", "Percentage"],
      // VehicleTypes: ["Ola", "Uber", "Rapido"],
      vehiclePrice: ["Per/Km", "Per/Trip"],
      vehicleseats: ["4 Seater", "5 Seater", "6 Seater", "7 Seater"],
      editedItem: {
        agent_id: "",
        agent_name: "",
        account_id: " ",
        city: "",
        city_id: "",
        transport_sub_id: "",
        transport_sub_name: "",
        travel_name: "",
        status: " ",
      },
      countriesArr: ["India"],
      onclickValue: "",
      transportPartnerForm: {
        user_id: "",
        name: "",
        agent_name: "",
        transport_sub_id: "",
        transport_sub_name: "",
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
        city_id: "",
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
        prev_sub_name: "",
        status: "",
      },
      edittransportPartnerForm: {
        user_id: "",
        name: "",
        agent_name: "",
        transport_sub_id: "",
        transport_sub_name: "",
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
        city_id: "",
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
        countriesArr: ["India"],
        property_tax: "",
        fire_safety: "",
        agent_id: "",
        prev_name: "",
        prev_sub_name: "",
        status: "",
      },
      editedItemtransport: {},
      transporteditedItem: {
        uploadImage_update1: "",
        uploadImage_update2: "",
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

      travelLocation: {
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
        vehicle_image: "",
        txn_id: "",
        travel_status: "",
        vehicle_image_update1: "",
      },
      pagination: {
        rowsPerPage: 500,
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      editDataDialog: false,
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
      states: (state) => state.master.states_arr,
      cities: (state) => state.master.city_arr,
      property: (state) => state.dropdown.property_arr,
      transport_reg_columns: (state) => state.dashboard.transport_reg_columns,
      property_transport_registration_status_count: (state) =>
        state.dashboard.property_transport_registration_status_count,
      transport_registration_ex_rows: (state) =>
        state.dashboard.transport_registration_ex_rows,
      transport_registration_ex_columns: (state) =>
        state.dashboard.transport_registration_ex_columns,
      travel_item_rows: (state) => state.dashboard.travel_item_rows,
      travel_item_columns: (state) => state.dashboard.travel_item_columns,
      transport_item_rows: (state) => state.dashboard.transport_item_rows,
      transport_item_columns: (state) => state.dashboard.transport_item_columns,
      transport_reg_rows_staff: (state) =>
        state.dashboard.transport_reg_rows_staff,
    }),
    ...mapGetters("dashboard", ["transport_reg_rows_staff"]),
    ...mapGetters("dashboard", [
      "property_transport_registration_status_count",
    ]),
  },
  mounted() {
    this.$store.dispatch("dashboard/getTransportRegistrationStatusCount");
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("dashboard/getTransportRegMaster");
    this.$store.dispatch("dashboard/getTransportAllDisplayForStaff");

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
    ...mapActions("dashboard", ["createTransporterRegDetails"]),
   // ...mapActions("dashboard", ["getTransportRegistrationBasedOnStatus"]),
    ...mapActions("dashboard", ["getTransportRegMaster"]),
    ...mapActions("dashboard", ["transportRegistrationMasterExistingUser"]),
    // ...mapActions("partners", ["createTravelLocRegDetails"]),
    ...mapActions("dashboard", ["getTravelDetailsSaving"]),
    ...mapActions("dashboard", ["travelDetailsSaving"]),
    ...mapActions("dashboard", ["travelLocationUpdating"]),
    ...mapActions("dashboard", ["updateTravelPartnerDetails"]),
    ...mapActions("dashboard", ["updatetransportPartnerForm"]),
    ...mapActions("dashboard", ["getTransportDetailsSaving"]),
    ...mapActions("dashboard", ["updatingTransportDetails"]),
    ...mapActions("dashboard", ["getTransportAllDisplayForStaff"]),
    ...mapActions("dashboard", ["getTransportRegistrationStatusCount"]),
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
                  // this.resetFiles();
                  this.addDataDialog = false;
                  this.subTransportView = false;
                  this.step = 1;
                  // this.$store.dispatch(
                  //   "dashboard/getTransportRegistrationStatusCount"
                  // );
                  this.getTransportRegMaster();
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
                this.resetFiles();
                this.onclickValue = "";
                this.subTransportView = false;
                this.getTransportRegMaster();
              });
          }
        });
      }
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
    ontransportPartnerUpdate() {
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
                "updatetransport",
                JSON.stringify(this.edittransportPartnerForm)
              );
              //  console.log("update", this.edittransportPartnerForm);

              this.updatetransportPartnerForm(formData);
            // this.edittransportPartnerForm = transportRegMaster();

              // this.$refs.propertyPartnerFormSubmit.resetValidation();
          //    this.editDataDialog = false;
              this.step = 1;
              this.subTransportView = false;
              this.getTransportAllDisplayForStaff();
              this.addDataDialog = false;
             // this.getTransportRegMaster();
            //  this.getTransportRegistrationBasedOnStatus();
            })
            .onCancel(() => {
              this.resetFiles();
              this.addDataDialog = true;
              // this.editDataDialog = true;
            });
        }
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
                  const formData = new FormData();
                  this.travelLocation.user_id = this.userDetails.account_id;
                  formData.append("vehicle_image", this.vehicle_image);
                  formData.append(
                    "travelupdate",
                    JSON.stringify(this.travelLocation)
                  );
                  this.travelDetailsSaving(formData);
                  this.resetFiles();
                  this.emptyValue();
                  this.travelLocation = travelLocRegistration();
                  this.$refs.addTravelForm.resetValidation();
                  this.subPropertyView = false;
                  this.addTravelForm = false;
                  this.details = false;
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
                this.subTransportView = false;
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
    updateTravelLocData() {
      this.$refs.addTravelForm.validate().then((success) => {
        if (this.travelLocation.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                console.log("this.edittravelLocation", this.edittravelLocation);
                const formData = new FormData();
                formData.append("vehicle_image", this.vehicle_image);

                formData.append(
                  "travelLocation",
                  JSON.stringify(this.travelLocation)
                );
                // this.updatingTransportDetails(this.transporteditedItem);
                this.$refs.addTravelForm.resetValidation();
                this.travelLocationUpdating(formData);

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
      this.travelLocation.travel_status = item.travel_status;
      // this.travelLocation.vehicle_type = item.vehicle_type;
      this.travelLocation.vehicle_name = item.vehicle_name;
      this.travelLocation.no_of_seaters = item.no_of_seaters;
      this.travelLocation.day_price = item.day_price;
      this.travelLocation.night_price = item.night_price;
      this.travelLocation.units = item.units;
      this.travelLocation.description = item.description;
      this.travelLocation.vehicle_image_update1 = item.vehicle_image;
      this.vehicle_image = {
        name: item.vehicle_image ?? "",
      };
      this.addTravelForm = true;
    },
    showTransportDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItemtransport = Object.assign({}, item);
      this.transportViewDialog = true;
      this.getTravelDetailsSaving(this.editedItemtransport);
      // this.getTransportDetailsSaving(this.editedItem);
    },

    editTrasportDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.transporteditedItem = Object.assign({}, item);
      this.transporteditedItem.tnx_id = item.tnx_id;
      this.transporteditedItem.agent_id = item.agent_id;
      this.transporteditedItem.transport_sub_id = item.transport_sub_id;
      this.transporteditedItem.account_id = item.account_id;
      this.transporteditedItem.transport_sub_name = item.transport_sub_name;
      this.transporteditedItem.status = item.status;
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
      this.transporteditedItem.pin_code = item.pin_code;
      this.transporteditedItem.transport_latitude = item.transport_latitude;
      this.transporteditedItem.transport_longitude = item.transport_longitude;
      this.transporteditedItem.uploadImage_update1 = item.upload_image1;
      this.transporteditedItem.uploadImage_update2 = item.upload_image2;
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
                const formData = new FormData();
                formData.append(
                  "upload_image1",
                  this.transporteditedItem.upload_image1
                );
                formData.append(
                  "upload_image2",
                  this.transporteditedItem.upload_image2
                );
                formData.append(
                  "transportedited",
                  JSON.stringify(this.transporteditedItem)
                );
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

    editOpenAddDialog() {
      this.step = 1;
      this.onclickValue = "";
      this.addDataDialog = true;
      this.transportPartnerForm = transportRegMaster();
      this.$refs.agentFormSubmit.resetValidation();
      this.resetFiles();
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxy1.hide();
    },
    showDocumentacc(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhtpFilePath + file;
        this.visible = false;
      }, 500);
      this.small = true;
    },
    emptyValue() {
      // this.travelLocation.agent_name = [];
      // this.travelLocation.transport_sub_name = [];
      this.travelLocation.day_price = [];
      this.travelLocation.night_price = [];
      // this.travelLocation.vehicle_type = [];
      this.travelLocation.units = [];
      this.travelLocation.vehicle_name = [];
      this.travelLocation.no_of_seaters = [];
      this.travelLocation.description = "";
      this.vehicle_image = [];
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.agent_id = "");
      this.step = 1;
      this.onclickValue = "";
      this.addDataDialog = true;
      this.details = false;
    },
    closeAddDataDialog() {
      this.resetFiles();

      this.addDataDialog = false;
      // this.equipmentUpdatingDetails = false;
      this.editDataDialog = false;
      // this.equipmentPartnerForm = equipmentRegistrationMaster();
      // this.$refs.agentFormSubmit.resetValidation();
    },
    travelDetailsForm() {
      this.travelLocation.account_id = this.userDetails.account_id;
      this.travelLocation.agent_id = this.editedItem.agent_id;
      this.travelLocation.transport_sub_id = this.editedItem.transport_sub_id;
      this.travelLocation.agent_name = this.editedItem.agent_name;
      this.travelLocation.transport_sub_name =
        this.editedItem.transport_sub_name;
      this.travelLocation.travel_status = this.editedItem.status;
      this.travelLocation.city_id = this.editedItem.city_id;
      this.travelLocation.city = this.editedItem.city;
      this.addTravelForm = true;
      this.onclickValue = "";
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
      this.editedItem.state = item.state;
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

    // editPropertyItem(item) {
    //   this.editedIndex = this.data.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.addDataDialog = true;
    //   this.step = 1;
    //   this.onclickValue = "edit";
    //   this.transportPartnerForm.agent_id = item.agent_id;
    //   this.transportPartnerForm.transport_sub_id = item.transport_sub_id;
    //   this.transportPartnerForm.name = item.transport_sub_name;
    //   this.transportPartnerForm.prev_name = item.agent_name;
    //   this.transportPartnerForm.prev_sub_name = item.transport_sub_name;
    //   this.transportPartnerForm.company_name = item.company_name;
    //   this.transportPartnerForm.individual_name = item.individual_name;
    //   this.transportPartnerForm.phone = item.phone;
    //   this.transportPartnerForm.fax = item.fax;
    //   this.transportPartnerForm.email_id = item.email_id;
    //   this.transportPartnerForm.description = item.description;
    //   this.transportPartnerForm.building_no = item.building_no;
    //   this.transportPartnerForm.street = item.street;
    //   this.transportPartnerForm.land_mark = item.land_mark;
    //   this.transportPartnerForm.country = item.country;
    //   this.transportPartnerForm.state = item.state;
    //   this.transportPartnerForm.city = item.city;
    //   this.transportPartnerForm.city_id = item.city_id;
    //   this.transportPartnerForm.pin_code = item.pin_code;
    //   this.transportPartnerForm.pan = item.pan;
    //   this.transportPartnerForm.status=item.status;
    //   this.pan_card_file = {
    //     name: item.pan_loc ?? "",
    //   };
    //   this.transportPartnerForm.aadhar = item.aadhar;
    //   this.addhaar_no = {
    //     name: item.addhaar_loc ?? "",
    //   };
    //   this.transportPartnerForm.gstin = item.gstin;
    //   this.gst_tin = {
    //     name: item.gst_tin_loc ?? "",
    //   };
    //   this.mh_agreement = {
    //     name: item.mh_agreement_loc ?? "",
    //   };
    //   this.mb_certificate = {
    //     name: item.mb_certificate_loc ?? "",
    //   };
    //   this.undertaking_certificate = {
    //     name: item.undertaking_certificate ?? "",
    //   };
    //   this.property_tax = {
    //     name: item.property_tax ?? "",
    //   };
    //   this.fire_safety = {
    //     name: item.fire_safety ?? "",
    //   };
    //   this.transportPartnerForm.bankAccountNo = item.bankAccountNo;
    //   this.transportPartnerForm.bankName = item.bankName;
    //   this.transportPartnerForm.branchName = item.branchName;
    //   this.transportPartnerForm.ifsc = item.ifsc;
    //   this.cancelled_cheque = {
    //     name: item.cancelled_cheque ?? "",
    //   };
    // },
    editPropertyItem(item) {
      //  console.log("item",item);
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // console.log("editedItem",editedItem);
      this.addDataDialog = true;
      this.step = 1;
      // this.onclickValue = "edit";
      this.edittransportPartnerForm.agent_id = item.agent_id;
      this.edittransportPartnerForm.account_id = item.user_id;
      this.edittransportPartnerForm.transport_sub_id = item.transport_sub_id;
      this.edittransportPartnerForm.name = item.transport_sub_name;
      this.edittransportPartnerForm.status = item.status;
      // this.edittransportPartnerForm.transport_sub_name = item.name;
      this.edittransportPartnerForm.name = item.agent_name;
      // this.edittransportPartnerForm.partner_sub_name = item.transport_sub_name;
      // this.transportPartnerForm.company_name = item.company_name;
      // this.transportPartnerForm.individual_name = item.individual_name;
      this.edittransportPartnerForm.phone = item.phone;
      this.edittransportPartnerForm.fax = item.fax;
      this.edittransportPartnerForm.alternate_no = item.alternate_no;
      this.edittransportPartnerForm.email_id = item.email_id;
      this.edittransportPartnerForm.description = item.description;
      this.edittransportPartnerForm.building_no = item.building_no;
      this.edittransportPartnerForm.street = item.street;
      this.edittransportPartnerForm.land_mark = item.land_mark;
      this.edittransportPartnerForm.country = item.country;
      this.edittransportPartnerForm.state = item.state;
      this.edittransportPartnerForm.city = item.city;
      // this.edittransportPartnerForm.prevstate = item.state;
      this.edittransportPartnerForm.prevcity = item.city;
      this.edittransportPartnerForm.city_id = item.city_id;
      this.edittransportPartnerForm.pin_code = item.pin_code;
      this.edittransportPartnerForm.pan = item.pan;
      //docs update

      this.edittransportPartnerForm.pan_card_upt = item.pan_loc;
      this.edittransportPartnerForm.addhaar_no_upt = item.addhaar_loc;
      this.edittransportPartnerForm.mh_agreement_upt = item.mh_agreement_loc;
      this.edittransportPartnerForm.mb_certificate_upt =
        item.mb_certificate_loc;
      this.edittransportPartnerForm.gst_tin_upt = item.gst_tin_loc;
      this.edittransportPartnerForm.property_tax_upt = item.property_tax;
      this.edittransportPartnerForm.fire_safety_upt = item.fire_safety;
      this.edittransportPartnerForm.cancelled_cheque_upt =
        item.cancelled_cheque_doc;

      this.pan_card_file = {
        name: item.pan_loc ?? "",
      };
      this.edittransportPartnerForm.aadhar = item.aadhar;
      this.addhaar_no = {
        name: item.addhaar_loc ?? "",
      };
      this.edittransportPartnerForm.gstin = item.gstin;
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
      this.cancelled_cheque = {
        name: item.cancelled_cheque_doc ?? "",
      };
      this.edittransportPartnerForm.bankAccountNo = item.bankAccountNo;
      this.edittransportPartnerForm.bankName = item.bankName;
      this.edittransportPartnerForm.branchName = item.branchName;
      this.edittransportPartnerForm.ifsc = item.ifsc;
      this.cancelled_cheque = {
        name: item.cancelled_cheque ?? "",
      };
      // console.log("edittransportPartnerForm",edittransportPartnerForm);
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
      // this.loadTravelPropertyDetails(this.editedItem);
      // this.getTravelRestaurantDetails(this.editedItem);
      this.getTransportDetailsSaving(this.editedItem);
      // this.getTravelMedicalStoreDetailsSaving(this.editedItem);
    },
    showTravelData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.travelLocation.vehicle_name = item.vehicle_name;
      this.travelLocation.day_price = item.day_price;
      this.travelLocation.night_price = item.night_price;
      this.travelLocation.units = item.units;
      this.travelLocation.description = item.description;
      // this.travelLocation.address = item.address;
      this.travelLocation.no_of_seaters = item.no_of_seaters;
      this.travelLocation.units = item.units;
      this.travelLocation.vehicle_image = item.vehicle_image;
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
    getClickableTransportRegMaster(item) {
      this.getTransportAllDisplayForStaff(item);
      this.transport_count_status = true;
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
