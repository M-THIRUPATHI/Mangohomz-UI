<template>
  <div>
    <!-- <q-page-container> -->
    <q-page style="padding-top: 60px" class="q-pa-md">
      <div class="q-pa-md">
        <q-chip clickable icon="bookmark">
          Bookmark
        </q-chip>
        <q-chip clickable color="teal" text-color="white" icon="bookmark">
          Bookmark
        </q-chip>
        <q-chip
          clickable
          color="red"
          text-color="white"
          icon="alarm"
          label="Set alarm"
        />
        <q-chip clickable color="orange" text-color="white" icon="directions">
          Get directions
        </q-chip>
        <q-chip square clickable>
          <q-avatar color="primary" text-color="white">50</q-avatar>
          All
        </q-chip>
        <q-chip square clickable>
          <q-avatar color="secondary" text-color="white">10</q-avatar>
          Active
        </q-chip>
        <q-chip square clickable>
          <q-avatar color="red" text-color="white">40</q-avatar>
          In-Active
        </q-chip>
      </div>
      <q-table
        :data="agent_registration_rows"
        :columns="agent_registration_columns"
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
          <!-- Check form Validations -->

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
                    v-model="agentForm.agent_name"
                    label="Booking Partner Name *"
                    hide-bottom-space
                    style="width:250px"
                    label-color="black"
                    lazy-rules
                    :rules="[
                      val => (val && val.length > 0) || 'Please type something'
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.alias_name"
                    label="Booking Partner Alias Name *"
                    hide-bottom-space
                    style="width:250px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" /> </template
                  ></q-input>

                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.phone"
                    label="Phone"
                    lazy-rules
                    mask="##########"
                    fill-mask
                    style="width:250px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    v-model="agentForm.fax"
                    lazy-rules
                    mask="##########"
                    fill-mask
                    label="Alt Phone no / Whatsapp no"
                    style="width:250px"
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
                    v-model="agentForm.email_id"
                    label="Email"
                    lazy-rules
                    class="col-3"
                    hide-bottom-space
                    style="width:250px"
                    :rules="[
                      val => (val && val.length > 0) || 'Please Enter Email ID',
                      isValidEmail
                    ]"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-3"
                    dense
                    outlined
                    type="number"
                    min="0"
                    max="20"
                    v-model="agentForm.agent_commission"
                    label="Commission as per agreement"
                    style="width:250px"
                    label-color="black"
                    suffix="%"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-percent" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    class="col-2"
                    dense
                    outlined
                    v-model="agentForm.description"
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
                    v-model="agentForm.building_no"
                    label="House/Flat No *"
                    lazy-rules
                    label-color="black"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.street"
                    label="Street/Colony Name*"
                    lazy-rules
                    label-color="black"
                    ><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" /> </template
                  ></q-input>
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.land_mark"
                    label="Landmark"
                    label-color="black"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-map-marker-circle"
                        color="secondary"
                      /> </template
                  ></q-input>

                  <q-input
                    dense
                    outlined
                    v-model="agentForm.city"
                    label="City"
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
                    v-model="agentForm.state"
                    label="State"
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
                    v-model="agentForm.country"
                    label="Country"
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
                    v-model="agentForm.pin_code"
                    label="Pincode"
                    label-color="black"
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
            <q-step
              :name="3"
              :done="step > 3"
              title="Statutory Documents"
              icon="assignment"
            >
              <q-form ref="agentFormStaDocs">
                <div class="q-pa-md row q-gutter-md  items-start">
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.pan"
                    label="PAN"
                    label-color="black"
                    mask="AAAAA####A"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.aadhar"
                    label="AADHAAR"
                    label-color="black"
                    mask="####-####-####"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.gstin"
                    label="GSTIN"
                    label-color="black"
                    mask="##AAAAA####A#A#"
                  />
                </div>
                <div class="q-pa-md row q-gutter-md  items-start">
                  <q-file
                    style="width:250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="pan_card_file"
                    type="file"
                    accept=".pdf, pdf/*"
                    hint="PAN Card"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                  <q-file
                    style="width:250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="addhaar_no"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="AADHAAR Card"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-file
                    style="width:250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="gst_tin"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="GSTIN Certificate"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
                  <q-file
                    style="width:250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="mh_agreement"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="MH Agreement Document"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>

                  <q-file
                    style="width:250px"
                    class="hint-bold"
                    dense
                    filled
                    v-model="partner_pic"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Booking Partner Photo"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" /> </template
                  ></q-file>
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
              <q-form ref="agentFormBankDetails">
                <div class="q-pa-md row q-gutter-md  items-start">
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.bankAccountNo"
                    label="Bank A/C No"
                    label-color="black"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.bankName"
                    label="Bank Name"
                    label-color="black"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.branchName"
                    label="Branch Name"
                    label-color="black"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="agentForm.ifsc"
                    label="IFSC Code"
                    label-color="black"
                  />
                  <q-input
                    class="hint-bold"
                    dense
                    filled
                    v-model="chancelled_cheque"
                    type="file"
                    accept=".pdf, pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Cancelled Cheque"
                  />
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  @click="
                    () => {
                      this.$refs.agentFormBankDetails.validate().then(valid => {
                        if (!valid) {
                        } else {
                          done1 = true;
                          step = 5;
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
            <q-step :name="5" title="Submit" icon="add_comment">
              <q-form ref="agentFormSubmit">
                <q-card>
                  <q-card-section>
                    <div class="text-h6 text-bold">Terms & Conditions</div>
                  </q-card-section>
                  <q-card-section style="max-height: 50vh" class="scroll">
                    <p v-for="n in 3" :key="n">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum repellendus sit voluptate voluptas eveniet porro.
                      exercitationem aut, natus minima, porro labore.
                    </p>
                  </q-card-section>
                  <q-card-actions align="left">
                    <q-toggle
                      v-model="agentForm.accept"
                      label="I accept the Agent Partner Approval"
                    />
                  </q-card-actions>
                </q-card>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  color="secondary"
                  label="Submit"
                  @click="onSubmit"
                  :disable="this.agentForm.accept == false"
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
                View of Booking Partner Registration Details:
                {{ editedItem.agent_name }}
              </div>
              <q-space />
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div class="row q-col-gutter-sm  q-py-sm " style="padding-top:35px">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs bg-blue-6 text-white">
                <q-card-section class="text-h6 text-bold  ">
                  Basic Details
                </q-card-section>
                <q-card-section class="q-pa-none ">
                  <div style="height: 250px;">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-3 text-left text-white">Name</div>
                      <div class="col-9 text-left text-white">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-3 text-left text-white ">Phone</div>
                      <div class="col-9 text-left text-white">
                        : {{ editedItem.phone }}
                      </div>
                      <div class="col-3 text-left text-white ">Whatsapp</div>
                      <div class="col-9 text-left text-white">
                        : {{ editedItem.fax }}
                      </div>
                      <div class="col-3 text-left text-white ">Email</div>
                      <div class="col-9 text-left text-white">
                        : {{ editedItem.email_id }}
                      </div>
                      <div class="col-3 text-left text-white ">Aaadhaar</div>
                      <div class="col-9 text-left text-white">
                        : {{ editedItem.aadhar }}
                      </div>
                      <div class="col-3 text-left text-white ">Pan Card</div>
                      <div class="col-9 text-left text-white">
                        : {{ editedItem.pan }}
                      </div>
                      <div class="col-3 text-left text-white ">Commision</div>
                      <div class="col-9 text-left text-white">
                        : {{ editedItem.agent_commission }}
                      </div>
                      <div class="col-3 text-left text-white ">Description</div>
                      <div class="col-9 text-left text-white">
                        : {{ editedItem.description }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs bg-deep-purple-2">
                <q-card-section class="text-h6 text-bold text-black">
                  Address
                </q-card-section>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px;">
                    <div
                      class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                    >
                      <div class="col-3 text-left ">House No</div>
                      <div class="col-9 text-left">
                        : {{ editedItem.building_no }}
                      </div>
                      <div class="col-3 text-left ">Street</div>
                      <div class="col-9 text-left">
                        : {{ editedItem.street }}
                      </div>
                      <div class="col-3 text-left ">Landmark</div>
                      <div class="col-9 text-left">
                        : {{ editedItem.land_mark }}
                      </div>
                      <div class="col-3 text-left ">City</div>
                      <div class="col-9 text-left">: {{ editedItem.city }}</div>
                      <div class="col-3 text-left ">State</div>
                      <div class="col-9 text-left">
                        : {{ editedItem.state }}
                      </div>
                      <div class="col-3 text-left ">Country</div>
                      <div class="col-9 text-left">
                        : {{ editedItem.country }}
                      </div>
                      <div class="col-3 text-left ">Pincode</div>
                      <div class="col-9 text-left">
                        : {{ editedItem.pin_code }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs bg-orange-6 ">
                <q-card-section class="text-h6 text-bold text-black">
                  Bank Details
                </q-card-section>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px;">
                    <div style="height: 250px;">
                      <div
                        class="row text-black text-bold q-ma-xs q-pa-md text-body1"
                      >
                        <div class="col-3 text-left ">Account No</div>
                        <div class="col-9 text-left">
                          : {{ editedItem.bankAccountNo }}
                        </div>
                        <div class="col-3 text-left ">Bank Name</div>
                        <div class="col-9 text-left">
                          : {{ editedItem.bankName }}
                        </div>
                        <div class="col-3 text-left ">Branch</div>
                        <div class="col-9 text-left">
                          : {{ editedItem.branchName }}
                        </div>
                        <div class="col-3 text-left ">IFSC Code</div>
                        <div class="col-9 text-left">
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
            class="row q-col-gutter-sm  q-py-sm q-pa-md"
            style="padding-top:35px"
          >
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-markup-table dark class="bg-indigo-8">
                <thead>
                  <div class="text-h5 q-ml-md text-white">Documents</div>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">Pancard</td>
                    <td class="text-left">{{ editedItem.pan_loc }}</td>
                    <td class="text-center">
                      <q-btn
                        class="text-bold"
                        label="view"
                        color="secondary"
                        size="sm"
                        icon-right="mdi-eye"
                        @click="showDocument(editedItem.pan_loc)"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Addhaar No</td>
                    <td class="text-left">{{ editedItem.addhaar_loc }}</td>
                    <td class="text-center">
                      <q-btn
                        class="text-bold"
                        label="view"
                        color="secondary"
                        size="sm"
                        icon-right="mdi-eye"
                        @click="showDocument(editedItem.addhaar_loc)"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Gst Tin No</td>
                    <td class="text-left">{{ editedItem.gst_tin_loc }}</td>
                    <td class="text-center">
                      <q-btn
                        class="text-bold"
                        label="view"
                        color="secondary"
                        size="sm"
                        icon-right="mdi-eye"
                        @click="showDocument(editedItem.gst_tin_loc)"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Agreement Doc</td>
                    <td class="text-left">
                      {{ editedItem.mh_agreement_loc }}
                    </td>
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
                  <tr>
                    <td class="text-left">Partner Photo</td>
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
                        @click="showDocument(editedItem.partner_pic_loc)"
                      />
                    </td>
                  </tr>
                </tbody>
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
                      Pan Doc: {{ editedItem.agent_name }}
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
          @click="addDataDialog = true"
          class="text-weight-bold"
        >
          Add a new partner
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
    <!-- </q-page-container> -->
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import validations from "../../helpers/validations";
const defaultAgentObj = () => {
  return {
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
    pan_card_no: [],
    addhaar_no: [],
    gst_tin: [],

    mh_agreement: [],
    partner_pic: [],
    chancelled_cheque: []
  };
};
export default {
  data() {
    return {
      ...validations,
      title: "Booking Partner Registration",
      step: 1,
      selected: [],
      data: [],
      details: false,
      maximizedToggle: true,

      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      pan_card_file: [],
      addhaar_no: [],
      gst_tin: [],
      mh_agreement: [],
      partner_pic: [],
      chancelled_cheque: [],
      editedIndex: -1,
      editedItem: {},

      agentForm: {
        agent_name: "",
        alias_name: "",
        phone: "",
        fax: "",
        email_id: "",
        agent_commission: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        country: "India",
        state: "",
        pin_code: "",
        pan: "",
        aadhar: "",
        gstin: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        // file_upload1: "",
        // file_upload2: "",
        // file_upload3: "",
        // file_upload4: "",
        // file_upload5: "",
        // file_upload6: "",
        accept: false
      },
      pagination: {
        rowsPerPage: 10
      },
      mode: "list",
      filter: "",
      addDataDialog: false,

      small: false,
      url: "",

      visible: false,
      showPanDoc: false,
      photoSmall: false,
      showpartnerDoc: false,
      agreSmall: false,
      showmhDoc: false,
      gstInSmall: false,
      showGstDoc: false,
      aadhaarSmall: false,
      showAadharDoc: false
    };
  },
  computed: {
    ...mapState({
      property: state => state.dropdown.property_arr,
      agent_registration_columns: state =>
        state.partners.agent_registration_columns
    }),
    ...mapGetters("partners", ["agent_registration_rows"])
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("partners/getAgentPartnerRegDetails");
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
    ...mapActions("partners", ["createAgentReg"]),
    onSubmit() {
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
              const formData = new FormData();
              formData.append("pancard", this.pan_card_file);
              formData.append("addhaar", this.addhaar_no);
              formData.append("gst_tin", this.gst_tin);
              formData.append("mh_agreement", this.mh_agreement);
              formData.append("partner_pic", this.partner_pic);
              formData.append("agentDetails", JSON.stringify(this.agentForm));
              this.createAgentReg(formData);
              this.agentForm = defaultAgentObj();
              this.$refs.agentForm.resetValidation();
              this.addDataDialog = false;
              this.step = 1;
            })
            .onCancel(() => {
              this.addDataDialog = true;
            });
        }
      });
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.details = true;
    },
    showDocument(file) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.url = "/mh/mh_documents/agent_documents/" + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-height: 500px
</style>
