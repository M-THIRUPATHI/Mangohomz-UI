<template>
  <div>
    <q-card flat bordered class="bg-white">
      <q-table
        :title="title"
        :data="property_reg_rows"
        :columns="property_reg_cols"
        :pagination.sync="pagination"
        dense
        separator="cell"
        :grid="mode === 'grid'"
        :filter="filter"
      >
        <template v-slot:top-right="props">
          <q-input
            outlined
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
            style="width:400px"
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
            class="glossy bg-primary text-white text-weight-bold"
            icon="add"
            round
            dense
            @click="addDataDialog = true"
            ><q-tooltip :disable="$q.platform.is.mobile" v-close-popup
              >Add Data
            </q-tooltip></q-btn
          >
        </template>
      </q-table>
    </q-card>
    <q-dialog v-model="addDataDialog" full-width persistent>
      <q-card>
        <q-bar class="bg-primary">
          <div class="text-h6 text-white">{{ title }}</div>
          <q-space />
          <q-btn v-close-popup>
            <q-icon name="close" color="white"></q-icon>
            <q-tooltip>close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-form @submit="onSubmit" ref="propertyForm">
          <q-stepper v-model="step" color="primary" animated>
            <q-step
              :name="1"
              title="Basic Details"
              icon="settings"
              :done="step > 1"
            >
              <div class="q-pa-md row q-gutter-md  ">
                <q-select
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.property"
                  :options="property"
                  option_value="property_code"
                  option-label="property_type"
                  label="Property Type *"
                  hide-bottom-space
                  style="width:250px"
                  label-color="black"
                />

                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.property_name"
                  label="Property Name *"
                  hide-bottom-space
                  style="width:250px"
                  label-color="black"
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.name"
                  label="Property Alias Name *"
                  hide-bottom-space
                  style="width:250px"
                  label-color="black"
                />

                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.phone"
                  label="Phone"
                  lazy-rules
                  mask="##########"
                  fill-mask
                  style="width:250px"
                  label-color="black"
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.fax"
                  label="Fax"
                  mask="##########"
                  fill-mask
                  lazy-rules
                  style="width:250px"
                  label-color="black"
                />
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.email_id"
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
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.hotel_registration_no"
                  label="Hotel Registration Number *"
                  style="width:250px"
                  label-color="black"
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  type="number"
                  min="0"
                  max="20"
                  v-model="propertyForm.hotel_owner"
                  label="Commission(In %)"
                  style="width:250px"
                  label-color="black"
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  min="0"
                  max="5"
                  v-model="propertyForm.cancellation_policy"
                  type="number"
                  label="Cancellation Policy"
                  style="width:250px"
                  label-color="black"
                  suffix="Days"
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  min="1"
                  max="1000"
                  type="number"
                  v-model="propertyForm.display_order"
                  label="Display Order"
                  style="width:250px"
                  label-color="black"
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.video_link"
                  label="Video Link"
                  lazy-rules
                  style="width:250px"
                  label-color="black"
                />
                <q-select
                  dense
                  class="col-3"
                  outlined
                  :options="['Yes', 'No']"
                  v-model="propertyForm.is_default"
                  label="To display by default in website?"
                  lazy-rules
                  style="width:250px"
                  label-color="black"
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.preferences"
                  label="Preferences"
                  lazy-rules
                  style="width:250px"
                  label-color="black"
                />
                <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="propertyForm.description"
                  label="Description"
                  lazy-rules
                  style="width:250px"
                  label-color="black"
                />
                <q-select
                  dense
                  multiple
                  use-chips
                  stack-label
                  class="col-3"
                  outlined
                  option_value="facility_code"
                  option-label="facility_type"
                  :options="facilities_options"
                  v-model="propertyForm.facilities"
                  label="Facilities"
                  style="width:250px"
                  label-color="black"
                />
              </div>
              <q-stepper-navigation>
                <q-btn @click="step = 2" color="primary" label="Continue" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Address"
              icon="create_new_folder"
              :done="step > 2"
            >
              <div class="q-pa-md row q-gutter-md  items-start">
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.building_no"
                  label="House No *"
                  lazy-rules
                  label-color="black"
                />
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.street"
                  label="Street/Colony *"
                  lazy-rules
                  label-color="black"
                />
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.land_mark"
                  label="Landmark"
                  label-color="black"
                />
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.country"
                  label="Country"
                  label-color="black"
                />
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.state"
                  label="State"
                  label-color="black"
                />
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.city"
                  label="City"
                  label-color="black"
                />
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.pin_code"
                  label="Pincode"
                  mask="XXXXXX"
                  fill-mask
                  lazy-rules
                  label-color="black"
                />

                <q-input
                  dense
                  outlined
                  v-model="propertyForm.latitude"
                  label="Latitude"
                  label-color="black"
                  type="number"
                />
                <q-input
                  dense
                  outlined
                  v-model="propertyForm.longitude"
                  label="Longitude"
                  label-color="black"
                  type="number"
                />
                <!-- <q-google-map
              :center="center"
              :zoom="zoom"
              style="width: 320px;height: 230px;"
            >
            </q-google-map> -->
              </div>

              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn @click="step = 3" color="primary" label="Continue" />
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
              title="Property Images"
              icon="assignment"
            >
              <div class="q-pa-md row q-gutter-md  items-start">
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload1"
                  type="file"
                  accept="image/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Property Image 1"
                />
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload2"
                  type="file"
                  accept="image/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Property Image 2"
                />
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload3"
                  type="file"
                  accept="image/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Property Image 3"
                />
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload4"
                  type="file"
                  accept="image/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Property Image 4"
                />
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload5"
                  type="file"
                  accept="image/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Property Image 5"
                />
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload6"
                  type="file"
                  accept="image/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Property Image 6"
                />
              </div>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn @click="step = 4" color="primary" label="Continue" />
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
              title="Statutory Documents"
              icon="assignment"
            >
              <div class="q-pa-md row q-gutter-md  items-start">
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload7"
                  type="file"
                  accept="image/*,.pdf,pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Business Licence Certificate"
                />
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload8"
                  type="file"
                  accept="image/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Fire Safety Certificate"
                />
                <q-input
                  class="hint-bold"
                  dense
                  filled
                  v-model="propertyForm.file_upload9"
                  type="file"
                  accept="image/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  "
                  hint="Municipal Licence"
                />
              </div>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn @click="step = 5" color="primary" label="Continue" />
                <q-btn
                  outline
                  @click="step = 3"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step :name="5" title="Submit" icon="add_comment">
              <q-card>
                <q-card-section>
                  <div class="text-h6 text-bold">Terms & Conditions</div>
                </q-card-section>

                <q-card-section style="max-height: 50vh" class="scroll">
                  <p v-for="n in 3" :key="n">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum repellendus sit voluptate voluptas eveniet porro.
                    Rerum blanditiis perferendis totam, ea at omnis vel numquam
                    exercitationem aut, natus minima, porro labore.
                  </p>
                </q-card-section>
                <q-card-actions align="right">
                  <q-toggle
                    v-model="propertyForm.accept"
                    label="I accept the terms and conditions"
                  />
                </q-card-actions>
              </q-card>

              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn
                  color="secondary"
                  label="Submit"
                  :disable="this.propertyForm.accept == false"
                />
                <q-btn
                  outline
                  @click="step = 4"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
const propertyRegistrationMaster = () => {
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
    accept: false
  };
};
export default {
  data() {
    return {
      title: "Property Registration Master",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      facilities_options: [
        "AC",
        "TV",
        "MicroOven",
        "WheelChair",
        "Electric Cooker",
        "Water kettle heater"
      ],
      propertyForm: {
        property: "",
        property_name: "",
        name: "",
        phone: "",
        fax: "",
        email_id: "",
        hotel_registration_no: "",
        hotel_owner: "",
        cancellation_policy: "3",
        display_order: "",
        video_link: "",
        is_default: "Yes",
        facilities: null,
        preferences: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "India",
        state: "",
        city: "",
        pin_code: "",
        latitude: "",
        longitude: "",
        file_upload1: "",
        file_upload2: "",
        file_upload3: "",
        file_upload4: "",
        file_upload5: "",
        file_upload6: "",
        file_upload7: "",
        file_upload8: "",
        file_upload9: "",
        accept: false
      },
      pagination: {
        rowsPerPage: 10
      },
      mode: "list",
      filter: "",
      addDataDialog: false
    };
  },
  computed: {
    ...mapState({
      property: state => state.dropdown.property_arr,
      property_reg_cols: state => state.partners.property_reg_cols
    }),
    ...mapGetters("partners", ["property_reg_rows"])
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("partners/getPropertyRegMaster");
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
    ...mapActions("partners", ["savePropertyRegDetails"]),
    onSubmit() {
      this.$refs.propertyForm.validate().then(success => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true
            })
            .onOk(() => {
              this.savePropertyRegDetails(this.propertyForm);
              this.propertyForm = propertyRegistrationMaster();
              this.$refs.patnerForm.resetValidation();
              this.addDataDialog = false;
              this.step = 1;
            })
            .onCancel(() => {
              this.addDataDialog = true;
            });
        }
      });
    }
  }
};
</script>
