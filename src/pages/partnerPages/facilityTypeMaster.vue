<template>
  <q-page>
    <div style="padding-top:100px">
      <subHeaderForAdmin />
      <q-card flat bordered class="bg-white">
        <q-table
        style="font-family: verdana"
          :title="title"
          :data="facility_type_rows"
          :columns="facility_type_columns"
          row-key="name"
          dense
          separator="cell"
          :grid="mode === 'grid'"
          :filter="filter"
        >
          <template v-slot:top-right="props">

            <div
                    class="AccomBkgTbl"
                    style="
                      display: flex;
                      align-items: center;
                      margin-top: 10px;
                    "
                  >
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
            </div>
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
    </div>
    <q-dialog v-model="addDataDialog">
      <q-card style="width:300px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-card-section>

        <q-card-section class="q-pa-xs">
          <q-form
            class="q-gutter-md"
            @submit="onSubmit"
            @reset="onReset"
            ref="facilityType"
            v-model="form"
          >
            <div class="row q-pa-sm q-gutter-sm">
              <q-input
                outlined
                dense
                v-model="facilityType.priority_order"
                label="Display Order"
                style="width:250px"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please Enter Display Order'
                ]"
                label-color="black"
              />
              <q-input
                outlined
                dense
                v-model="facilityType.name"
                label="Name"
                lazy-rules
                style="width:250px"
                :rules="[val => (val && val.length > 0) || 'Please Enter Name']"
                label-color="black"
              />
              <q-input
                outlined
                dense
                v-model="facilityType.description"
                label="Description"
                lazy-rules
                style="width:250px"
                :rules="[
                  val => (val && val.length > 0) || 'Please Enter Description'
                ]"
                label-color="black"
              />
              <q-file
                outlined
                v-model="files"
                dense
                style="width:250px"
                @input="Images_onFileChanged($event)"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
          </q-form>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            label="Submit"
            dense
            color="primary"
            @click="onSubmit"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";

const facilityMaster = () => {
  return {
    priority_order: "",
    description: "",
    name: "",
    files: ""
  };
};
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      form: "",
      files: "",
      Images: null,
      title: "Facility Types Master",
      facilityType: {
        priority_order: "",
        description: "",
        name: ""
      },
      mode: "list",
      filter: "",
      addDataDialog: false
    };
  },
  meta() {
    return {
      title: this.title
    };
  },
  computed: {
    ...mapGetters("master", ["facility_type_rows"]),
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      facility_type_columns: state => state.master.facility_type_columns
    })
  },
  mounted() {
    this.$store.dispatch("master/getFacilityTypesMaster");
  },
  methods: {
    ...mapActions("master", ["facilityTypeMasterAdd"]),
    Images_onFileChanged(e) {
      const selectedFile = e.target.files[0];
      this.Images = selectedFile;
    },
    onSubmit() {
      this.$refs.facilityType.validate().then(success => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true
            })
            .onOk(() => {
              // console.log(`File: ${this.Images}`);
              let formData = new FormData();
              formData.append("file", this.Images); // append image/file
              formData.append("details", this.facilityType); // form inputs
              // console.log(`formData: ${formData}`);
              // console.log(JSON.parse(formData));
              // console.log(JSON.stringify(formData));
              this.facilityTypeMasterAdd(formData);
              this.addDataDialog = false;
              this.facilityType = facilityMaster();
              this.$refs.facilityType.resetValidation();
            })
            .onCancel(() => {
              this.addDataDialog = true;
            });
        }
      });
    },
    onReset() {
      this.$refs.facilityType.resetValidation();
    }
  }
};
</script>
<style>
.selected {
  background-color: #00e1ff !important;
  color: #000000 !important;
}

@media (max-width: 767px) {
  .AccomBkgDetails {
    display: block !important;
  }

  .AccomBkgTbl {
    width: 80vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }


  .AccomBkgTbl {
    width: 80vw !important;
  }

}
</style>
