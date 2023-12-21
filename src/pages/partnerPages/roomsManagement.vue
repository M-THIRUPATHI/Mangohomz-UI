<template>
   <q-page-container style="padding-top: 0px">
  <q-page>
    <div style="padding-top:100px">
      <subHeaderForAdmin />
      <q-card bordered class="bg-white">
        <q-table
        style="font-family: verdana"
          :title="title"
          :data="rooms_management_rows"
          :columns="rooms_management_columns"
          :pagination.sync="pagination"
          dense
          separator="cell"
          :filter="filter"
          :grid="mode === 'grid'"
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
      <q-dialog v-model="addDataDialog" full-width>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-form @submit="onSubmit" ref="roomForm">
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
                    filled
                    v-model="roomForm.property_name"
                    :options="propertyNames"
                    option-label="property_name"
                    label="Property Name *"
                    options-dense
                    label-color="black"
                  />

                  <q-select
                    class="col-3"
                    dense
                    filled
                    v-model="roomForm.roomType"
                    :options="roomType"
                    option-value="room_id"
                    option-label="room_type"
                    label="Room Type *"
                    label-color="black"
                  />
                  <q-input
                    class="col-3"
                    dense
                    filled
                    v-model="roomForm.room_short_description"
                    label="Room Short Description"
                    label-color="black"
                  />

                  <q-input
                    class="col-3"
                    dense
                    filled
                    v-model="roomForm.room_long_description"
                    label="Room Long Description"
                    label-color="black"
                    lazy-rules
                  />
                  <q-select
                    class="col-3"
                    dense
                    filled
                    v-model="roomForm.facilities"
                    :options="facilities"
                    option-value="priority_order"
                    option-label="name"
                    label="Facilities"
                    options-dense
                    label-color="black"
                    multiple
                  />
                  <q-select
                    dense
                    filled
                    v-model="roomForm.floor"
                    :options="floors"
                    options-dense
                    label="Floor"
                    lazy-rules
                    label-color="black"
                    class="col-3"
                  />
                  <q-input
                    class="col-3"
                    dense
                    filled
                    v-model="roomForm.max_adults"
                    type="number"
                    label="Max Adults"
                    label-color="black"
                    min="0"
                  />
                  <q-input
                    class="col-3"
                    dense
                    filled
                    v-model="roomForm.max_kids"
                    type="number"
                    label="Max Kids"
                    label-color="black"
                    min="0"
                  />
                  <q-input
                    class="col-3"
                    dense
                    filled
                    v-model="roomForm.max_extra_beds"
                    type="number"
                    label="Max Extra Beds"
                    label-color="black"
                    min="0"
                  />
                </div>
                <q-stepper-navigation>
                  <q-btn @click="step = 2" color="primary" label="Continue" />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="2"
                title="Infrastructure"
                icon="create_new_folder"
                :done="step > 2"
              >
                <div class="q-pa-md row q-gutter-md  items-start">
                  <q-input
                    dense
                    filled
                    v-model="roomForm.room_area"
                    label="Room Area"
                    lazy-rules
                    type="number"
                    class="col-3"
                    label-color="black"
                    min="1"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.bathrooms"
                    label="Bathrooms "
                    type="number"
                    class="col-3"
                    label-color="black"
                    min="1"
                    lazy-rules
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.single_beds"
                    label="Single Beds "
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                    min="1"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.double_beds"
                    label="Double Beds"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                    min="1"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.folded_beds"
                    label="Sofas/Folded Beds"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                    min="0"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.no_of_rooms_spec"
                    label="No of Rooms with same specifications in this Property"
                    type="number"
                    class="col-3"
                    lazy-rules
                    style="width:350px"
                    label-color="black"
                    min="0"
                  />
                </div>

                <q-stepper-navigation class="q-pa-md q-gutter-md">
                  <q-btn @click="step = 3" color="primary" label="Continue" />
                  <q-btn
                    outline
                    @click="step = 1"
                    color="primary"
                    label="Back"
                    class="q-ml-sm"
                  />
                </q-stepper-navigation>
              </q-step>

              <q-step
                :name="3"
                :done="step > 3"
                title="Pricing"
                icon="assignment"
              >
                <div class="q-pa-md row q-gutter-md  items-start">
                  <q-input
                    dense
                    filled
                    v-model="roomForm.default_price"
                    label="Default Price*"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.extra_bed_charges"
                    label="Extra Bed Charges"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.discount_night"
                    label="Discount Type*"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.discount_night_3"
                    label="Discount:3rd Room"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.discount_night_4"
                    label="Discount:4th Room"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.discount_night_5"
                    label="Discount:5th Room"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.discount_guest"
                    label="Long Term Discount Type*"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.discount_guest_3"
                    label="Discount:3rd Night"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.discount_guest_4"
                    label="Discount:4th Night"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.discount_guest_5"
                    label="Discount:5th Night"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.type_of_money_refund"
                    label="Type Of Money Refund*"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.money_refund_value"
                    label="Money Refund Value"
                    type="number"
                    class="col-3"
                    lazy-rules
                    label-color="black"
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
                title="Room Images"
                icon="assignment"
              >
                <div class="q-pa-md row q-gutter-md  items-start">
                  <q-input
                    dense
                    filled
                    v-model="roomForm.file_upload1"
                    type="file"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Room Image 1"
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.file_upload2"
                    type="file"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Room Image 2 "
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.file_upload3"
                    type="file"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Room Image 3 "
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.file_upload4"
                    type="file"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Room Image 4 "
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.file_upload5"
                    type="file"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Room Image 5 "
                  />
                  <q-input
                    dense
                    filled
                    v-model="roomForm.file_upload6"
                    type="file"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    "
                    hint="Room Image 6 "
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
              <q-step
                :name="5"
                :done="step > 5"
                title="Submit"
                icon="add_comment"
              >
                <q-card>
                  <q-card-actions>
                    <div class="text-h6 text-bold">Terms & Conditions</div>
                  </q-card-actions>
                  <q-card-section style="max-height: 50vh" class="scroll">
                    <p v-for="n in 10" :key="n" class="text-italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum repellendus sit voluptate voluptas eveniet porro.
                      Rerum blanditiis perferendis totam, ea at omnis vel
                      numquam exercitationem aut, natus minima, porro labore.
                    </p>
                  </q-card-section>
                  <q-card-actions align="left">
                    <q-toggle
                      v-model="roomForm.accept"
                      label="I accept the Rooms Management"
                    />
                  </q-card-actions>
                </q-card>

                <q-stepper-navigation class="q-pa-md q-gutter-md">
                  <q-btn
                    color="secondary"
                    label="Submit"
                    :disable="this.roomForm.accept == false"
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
  </q-page>
</q-page-container>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
const roomsManagement = () => {
  return {
    property_name: "",
    roomType: "",
    room_short_description: "",
    room_long_description: "",
    facilities: "",
    floor: "",
    max_adults: "",
    max_kids: "",
    max_extra_beds: "",
    room_area: "",
    bathrooms: "",
    single_beds: "",
    double_beds: "",
    folded_beds: "",
    no_of_rooms_spec: "",
    default_price: "",
    extra_bed_charges: "",
    file_upload: "",
    money_refund_value: "",
    type_of_money_refund: "",
    discount_guest_5: "",
    discount_guest_4: "",
    discount_guest_3: "",
    discount_guest: "",
    discount_night_5: "",
    discount_night_4: "",
    discount_night_3: "",
    discount_night: "",
    accept: false
  };
};
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      title: "Rooms Management",
      step: 1,
      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      roomForm: {
        property_name: "",
        roomType: "",
        room_short_description: "",
        room_long_description: "",
        facilities: [],
        floor: "",
        max_adults: "",
        max_kids: "",
        max_extra_beds: "",
        room_area: "",
        bathrooms: "",
        single_beds: "",
        double_beds: "",
        folded_beds: "",
        no_of_rooms_spec: "",
        default_price: "",
        extra_bed_charges: "",
        file_upload1: "",
        file_upload2: "",
        file_upload3: "",
        file_upload4: "",
        file_upload5: "",
        file_upload6: "",
        money_refund_value: "",
        type_of_money_refund: "",
        discount_guest_5: "",
        discount_guest_4: "",
        discount_guest_3: "",
        discount_guest: "",
        discount_night_5: "",
        discount_night_4: "",
        discount_night_3: "",
        discount_night: "",
        accept: false
      },

      addDataDialog: false,
      mode: "list",
      pagination: {
        rowsPerPage: 10
      },
      filter: "",
      floors: [
        "Ground Floor",
        "1st Floor",
        "2nd Floor",
        "3rd Floor",
        "4th Floor",
        "5th Floor",
        "6th Floor",
        "7th Floor",
        "8th Floor",
        "9th Floor",
        "10th Floor"
      ]
    };
  },
  computed: {
    ...mapGetters("master", ["rooms_management_rows"]),
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      roomType: state => state.dropdown.roomType_arr,
      facilities: state => state.dropdown.facilities_arr,
      propertyNames: state => state.dropdown.property_names_arr,
      rooms_management_columns: state => state.master.rooms_management_columns
    })
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllRoomTypes");
    this.$store.dispatch("dropdown/loadAllFacilities");
    this.$store.dispatch("dropdown/loadAllPropertyNames");
    this.$store.dispatch("master/getRoomsManagementMaster");
  },
  meta() {
    return {
      title: this.title
    };
  },
  methods: {
    ...mapActions("master", ["roomManagementMasterAdd"]),
    onSubmit() {
      this.$refs.roomForm.validate().then(sucess => {
        if (sucess) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true
            })
            .onOk(() => {
              this.roomManagementMasterAdd(this.roomForm);
              this.roomForm = roomsManagement();
              this.addDataDialog = false;
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
