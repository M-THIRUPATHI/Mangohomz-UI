<template>
  <q-page-container  style="padding-top: 0px">
  <q-page>
    <div style="padding-top:100px">
      <subHeaderForAdmin />
      <div class="col-12">
        <q-card flat bordered class="bg-white">
          <q-table
          style="font-family: verdana"
            :title="title"
            :data="room_type_rows"
            :columns="room_type_columns"
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
    </div>
    <q-dialog v-model="addDataDialog">
      <q-card style="width:300px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup >
            <q-tooltip >Close</q-tooltip>
          </q-btn>
        </q-card-section>
        <q-card-section >
          <q-form
            class="q-gutter-sm"
            @submit="onSubmit"
            @reset="onReset"
            ref="roomType"
          >
            <div class="row q-pa-sm q-gutter-sm">
              <q-input
                outlined
                dense
                v-model="roomType.room_type"
                label="Room Type"
                style="width:250px"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please Enter Room Type'
                ]"
                label-color="black"
              />
              <q-input
                outlined
                dense
                v-model="roomType.room_short_description"
                label="Room Short Description"
                lazy-rules
                style="width:250px"
                :rules="[
                  val => (val && val.length > 0) || 'Please type Room Short Description'
                ]"
                label-color="black"
              />
              <q-input
                outlined
                dense
                v-model="roomType.room_long_description"
                label="Room Long Description"
                lazy-rules
                style="width:250px"
                :rules="[
                  val => (val && val.length > 0) || 'Please type Room Long Description'
                ]"
              />
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
</q-page-container>
</template>
<script>
import { mapActions,mapState,mapGetters } from "vuex";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
const roomMaster = () => {
  return {
    room_type: "",
    room_short_description: "",
    room_long_description: ""
  };
};
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      title: "Room Types Master",
      roomType: {
        room_type: "",
        room_short_description: "",
        room_long_description: ""
      },
      addDataDialog: false,

      filter: "",
      mode: "list",


      maximizedToggle: true
    };
  },
  meta() {
    return {
      title: this.title
    };
  },
 computed: {
    ...mapGetters("master",["room_type_rows"]),
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      room_type_columns: (state) =>
        state.master.room_type_columns,

    }),
  },
  mounted() {
    this.$store.dispatch("master/getRoomTypesMaster");
  },
  methods: {
    ...mapActions("master", ["roomTypeMasterAdd"]),
    onSubmit(){
      this.$refs.roomType.validate().then(success=>{
        if (success) {
         this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true
            })
            .onOk(() => {
               this.roomTypeMasterAdd(this.roomType);
               this.addDataDialog = false
               this.roomType = roomMaster()
              this.$refs.roomType.resetValidation();

            })
            .onCancel(() => {
              this.addDataDialog = true;
            });

        }
      })
    },

    onReset() {
      this.$refs.roomType.resetValidation();
    }
  },

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
    width: 90vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }


  .AccomBkgTbl {
    width: 90vw !important;
  }

}
</style>
