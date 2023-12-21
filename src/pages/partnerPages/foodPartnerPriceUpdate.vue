<template>
  <q-page-container>
    <q-page style="padding-top: 30px" class="q-pa-sm">
      <div
        class="row q-col-gutter-sm"
        style="
          padding-top: 0px;
          border-top: 2px solid lightgrey;
          border-bottom: 2px solid lightgrey;
        "
      >
        <div
          class="gt-xs col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white"
        >
          <div
            class="q-pa-xs row justify-center q-gutter-md"
            style="height: 65px"
          >
            <div class="row col-12">
              <div
                class="q-ma-xs q-pa-xs"
                style="
                  text-align: justify;
                  font-size: 15px;
                  font-family: verdana;
                  margin-top: -13px;
                "
              >
                <b>
                  Name:
                  {{ userDetails.name }}
                </b>
                <br />
                <b
                  >Email:
                  {{ userDetails.email }}
                </b>
              </div>
              <q-space />
              <div
                class="q-ma-xs q-pa-xs"
                style="
                  text-align: justify;
                  font-size: 20px;
                  font-family: verdana;
                  margin-top: -10px;
                "
              >
                <p style="text-align: justify">
                  <b
                    >Welcome
                    {{ userDetails.name }}
                  </b>
                </p>
              </div>
              <q-space />

              <div
                class="q-ma-xs q-pa-xs"
                style="
                  text-align: justify;
                  font-size: 15px;
                  font-family: verdana;
                  margin-top: -10px;
                "
              >
                <b>
                  User Name:
                  {{ userDetails.user_name }}
                </b>
                <br />
                <b
                  >City:
                  {{ userDetails.zone }}
                </b>
              </div>
            </div>
          </div>
        </div>
        <div
          class="lt-sm col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white"
        >
          <div class="q-pa-xs row justify-center q-gutter-md">
            <div class="row col-12">
              <div
                class="q-ma-xs q-pa-xs"
                style="
                  text-align: justify;
                  font-size: 15px;
                  font-family: verdana;
                "
              >
                <b>
                  Name:
                  {{ userDetails.name }}
                </b>
                <br />
                <b
                  >Email:
                  {{ userDetails.email }}
                </b>
              </div>
              <q-space />
              <div
                class="q-ma-xs q-pa-xs"
                style="
                  text-align: justify;
                  font-size: 25px;
                  margin-top: -10px;
                  font-family: verdana;
                "
              >
                <p style="text-align: justify">
                  <b
                    >Welcome
                    {{ userDetails.name }}
                  </b>
                </p>
              </div>
              <q-space />

              <div
                class="q-ma-xs q-pa-xs"
                style="
                  text-align: justify;
                  font-size: 15px;
                  margin-top: -28px;
                  font-family: verdana;
                "
              >
                <b>
                  User Name:
                  {{ userDetails.user_name }}
                </b>
                <br />
                <b
                  >City:
                  {{ userDetails.zone }}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Food Update  Edit Dialog  Start-->
      <q-dialog
        v-model="FoodUpdateEditDataDialog"
        persistent
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-layout view="Lhh lpr fff" container class="bg-white"  style="height: 300px;" >
          <q-header class="bg-primary q-mb-5">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div style="font-family: verdana">
                Edit Food Partner Price Update
              </div>
              <q-space />

              <q-btn dense flat icon="close" @click="closeEditHospitalDialog()">
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <q-space />
          <q-space />
          <q-form ref="updateItems" class="q-mt-sm" style="margin-top: 10%">
            <div
              style="justify-content: center"
              class="row justify-content-center"
            >
              <q-select
                class="row q-mt-sm q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                style="width: 250px"
                fill-input
                label="Kitchen Type *"
                label-color="black"
                option-value="kitchen_type"
                option-label="kitchen_type"
                v-model="updateEditFoodPriceUpdate.kitchen_type"
                :options="kitchen_typeArr"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-select
                class="row q-mt-sm q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                style="width: 250px"
                fill-input
                label="Unit *"
                label-color="black"
                option-value="units"
                option-label="units"
                v-model="updateEditFoodPriceUpdate.foods_per_plat"
                :options="unitPerArr"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

              <q-input
                class="row q-mt-sm q-mr-sm"
                dense
                outlined
                label="Price*"
                hide-bottom-space
                style="width: 250px"
                label-color="black"
                v-model="updateEditFoodPriceUpdate.per_price"
                :rules="priceRules"
              >
              </q-input>

              <q-select
                class="row q-mt-sm q-mr-sm"
                dense
                options-dense
                outlined
                use-input
                hide-selected
                style="width: 250px"
                fill-input
                label="Available *"
                label-color="black"
                option-value="Yes"
                option-label="Yes"
                v-model="updateEditFoodPriceUpdate.available_data"
                :options="availableArr"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div class="row q-pa-md justify-end">
              <q-btn
                color="secondary"
                label="Update"
                @click="onPriceUnitsUpdate"
              ></q-btn>
            </div>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- Food Update  Edit Dialog  End-->

      <q-toolbar class="bg-primary text-white rounded-borders q-mt-md q-mb-md">
        <!-- <q-btn flat round dense icon="mdi-account" /> -->
        <q-toolbar-title
          class="text-subtitle1 text-weight-bold"
          style="font-size: 20px"
        >
          Food Partner Price Update
        </q-toolbar-title>
      </q-toolbar>
      <q-form ref="foodItems" class="AccomBkgDetails">
        <div class="row justify-content-center" style="justify-content: center">
          <q-select
            class="row q-mt-sm q-mr-sm"
            dense
            options-dense
            outlined
            use-input
            hide-selected
            style="width: 250px"
            fill-input
            label="Kitchen Type *"
            label-color="black"
            option-value="kitchen_type"
            option-label="kitchen_type"
            v-model="editFoodPriceUpdate.kitchen_type"
            :options="kitchen_typeArr"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            class="row q-mt-sm q-mr-sm"
            dense
            options-dense
            outlined
            use-input
            hide-selected
            style="width: 250px"
            fill-input
            label="Unit *"
            label-color="black"
            option-value="units"
            option-label="units"
            v-model="editFoodPriceUpdate.foods_per_plat"
            :options="unitPerArr"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-input
            class="row q-mt-sm q-mr-sm"
            dense
            outlined
            label="Price*"
            hide-bottom-space
            style="width: 250px"
            label-color="black"
            v-model="editFoodPriceUpdate.per_price"
            :rules="priceRules"
          >
          </q-input>

          <q-select
            class="row q-mt-sm q-mr-sm"
            dense
            options-dense
            outlined
            use-input
            hide-selected
            style="width: 250px"
            fill-input
            label="Available *"
            label-color="black"
            option-value="Yes"
            option-label="Yes"
            v-model="editFoodPriceUpdate.available_data"
            :options="availableArr"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div class="row q-pa-md justify-end">
          <q-btn color="secondary" label="ADD" @click="addFoodItems"></q-btn>
        </div>
      </q-form>
      <q-table
        style="font-family: verdana"
        dense
        separator="cell"
        wrap-cells
        v-if="showTable"
        :data="foodItemsArrayData"
        :columns="foodItemscolumn"
        :rows-per-page-options="[]"
        row-key="sno"
        no-data-label="No test names added"
      >
        <template v-slot:body-cell-edit-actions="props">
          <q-td :props="props">
            <q-btn
              @click="editRow(props.row)"
              color="positive"
              dense
              flat
              round
              icon="edit"
              class="q-ml-xs"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              @click="deleteRow(props.row.sno)"
              color="negative"
              dense
              flat
              round
              icon="delete"
              class="q-ml-xs"
            />
          </q-td>
        </template>

        <!-- <template v-slot:bottom-row>
          <q-td colspan="3" style="text-align: right; font-weight: bold">
            Total
          </q-td>
          <q-td colspan="1" style="text-align: center">
            {{ rate }}
          </q-td>
        </template> -->
      </q-table>

      <q-card-actions align="center" class="text-primary">
        <!-- <q-btn flat label="Cancel" v-close-popup /> -->
        <q-btn class="text-weight-bolder" label="Submit"   @click="onFoodUpdateSubmit()" color="indigo-9" />
      </q-card-actions>
    </q-page>
  </q-page-container>
</template>


<script>
import { mapActions, mapState, mapGetters } from "vuex";
import validations from "../../helpers/validations";
import moment from "moment";
import { date } from "quasar";
import { scroll } from "quasar";
import filepaths from "../../helpers/filepath";

export default {
  data() {
    return {
      showTable: false,
      FoodUpdateEditDataDialog: false,
      availableArr: ["Yes", "No"],

      unitPerArr: ["Per Plate"],
      kitchen_typeArr: ["Cloud Kitchen", "Maharaja Kitchen", "Sawera Hotel"],
      vehicle_toArr: ["rk hospital", "ravi", "kiran"],
      foodItemsArrayData: [],

      foodItemscolumn: [
        {
          name: "sno",
          label: "S No.",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "sno",
          headerStyle: {
            fontWeight: "bold",
          },
        },

        {
          name: "edit-actions",
          label: "Edit",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "edit-actions",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "kitchen_type",
          label: "Kitchen Type",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "kitchen_type",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          name: "foods_per_plat",
          label: "Unit",
          field: "foods_per_plat",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          name: "per_price",
          headerClasses: "bg-indigo-10 text-white",
          label: "Price",
          align: "center",
          field: "per_price",
          headerStyle: {
            fontWeight: "bold",
          },
        },

        {
          name: "available_data",
          headerClasses: "bg-indigo-10 text-white",
          label: "Available Status",
          align: "center",
          field: "available_data",
          headerStyle: {
            fontWeight: "bold",
          },
        },

        {
          name: "actions",
          headerClasses: "bg-indigo-10 text-white",
          label: "",
          field: "actions",
          align: "center",
          headerStyle: {
            fontWeight: "bold",
          },
        },
      ],
      editFoodPriceUpdate: {
        foods_per_plat: "",
        kitchen_type: "",
        available_data: "",
        per_price: "",
      },
      updateEditFoodPriceUpdate: {
        foods_per_plat: "",
        kitchen_type: "",
        available_data: "",
        per_price: "",
      },
      priceRules: [
        (v) => !!v || "Enter digits",
        (v) => /^[1-9]\d*$/.test(v) || "Enter Only Digits",
      ],
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        //console.log(user.zone)
        return user;
      },

      // kitchen_typeArr: (state) => state.dropdown.kitchen_typeArr,
      // vehicle_perTripArr: (state) => state.dropdown.vehicle_per_trip,
      // vehicle_fromArr: (state) => state.dropdown.vehicle_from,
    }),
  },

  mounted() {
    // this.$store.dispatch("dropdown/loadVehicalTypeCategory");
    // this.$store.dispatch("dropdown/loadVehiclePerTrip");
    // this.$store.dispatch("dropdown/loadVehicleFromPlace",city);
  },
  methods: {
    ...mapActions("dropdown", ["loadVehicalTypeCategory"]),
    ...mapActions("dropdown", ["loadVehiclePerTrip"]),
    ...mapActions("partners", ["updatingFoodPriceForm"]),

    addFoodItems() {
      //console.log(this.editFoodPriceUpdate)
      this.$refs.foodItems.validate().then((valid) => {
        if (!valid) {
          this.$q.notify({
            position: "top",
            color: "negative",
            message: "Please Fill the Food Items",
          });
        } else {
          const existingItem = this.foodItemsArrayData.find(
            (item) =>
              item.kitchen_type === this.editFoodPriceUpdate.kitchen_type
          );

          if (existingItem) {
            this.$q.notify({
              position: "top",
              color: "negative",
              message: "Duplicate Kitchen Type is not allowed",
            });
          } else {
            var foodItemsObj = {
              sno: this.foodItemsArrayData.length + 1,
              kitchen_type: this.editFoodPriceUpdate.kitchen_type,
              foods_per_plat: this.editFoodPriceUpdate.foods_per_plat,
              available_data: this.editFoodPriceUpdate.available_data,
              per_price: this.editFoodPriceUpdate.per_price,
            };
            this.foodItemsArrayData.push(foodItemsObj);
            console.log(this.foodItemsArrayData);

            this.showTable = true;
          }
        }
      });
    },


    onFoodUpdateSubmit() {
      this.$refs.foodItems.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
               console.log(this.foodItemsArrayData);

             this.foodItemsArrayData.some((item) => { this.updatingFoodPriceForm(item)});

            })
            .onCancel(() => {

            });
        }
      });
    },





    onPriceUnitsUpdate() {
      this.$refs.updateItems.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              console.log("update", this.updateEditFoodPriceUpdate);
              var num = this.updateEditFoodPriceUpdate.sno;

              if (num >= 1 && num <= this.foodItemsArrayData.length) {
                const item = this.foodItemsArrayData[num - 1];

                if (this.updateEditFoodPriceUpdate.kitchen_type !== undefined) {
                  item.kitchen_type =
                    this.updateEditFoodPriceUpdate.kitchen_type;
                }

                if (
                  this.updateEditFoodPriceUpdate.foods_per_plat !== undefined
                ) {
                  item.foods_per_plat =
                    this.updateEditFoodPriceUpdate.foods_per_plat;
                }

                if (this.updateEditFoodPriceUpdate.per_price !== undefined) {
                  item.per_price = this.updateEditFoodPriceUpdate.per_price;
                }

                if (
                  this.updateEditFoodPriceUpdate.available_data !== undefined
                ) {
                  item.available_data =
                    this.updateEditFoodPriceUpdate.available_data;
                }

                this.FoodUpdateEditDataDialog = false;
              } else {
                console.error("Invalid 'sno' value or index out of bounds.");
              }
            })
            .onCancel(() => {
              this.FoodUpdateEditDataDialog = true;
              this.resetFiles();
            });
        }
      });
    },

    resetFiles() {
      this.editFoodPriceUpdate.kitchen_type = "";
      this.editFoodPriceUpdate.foods_per_plat = "";
      this.editFoodPriceUpdate.per_price = "";
      this.editFoodPriceUpdate.available_data = "";
    },

    editRow(item) {
      //console.log('edit',item)
      (this.updateEditFoodPriceUpdate.sno = item.sno),
        (this.updateEditFoodPriceUpdate.kitchen_type = item.kitchen_type),
        (this.updateEditFoodPriceUpdate.foods_per_plat = item.foods_per_plat),
        (this.updateEditFoodPriceUpdate.per_price = item.per_price),
        (this.updateEditFoodPriceUpdate.available_data = item.available_data),
        //console.log('umesh',this.updateEditFoodPriceUpdate)

        (this.FoodUpdateEditDataDialog = true);
    },

    closeEditHospitalDialog() {
      this.FoodUpdateEditDataDialog = false;
    },
    deleteRow(sno) {
      const index = this.foodItemsArrayData.findIndex(
        (item) => item.sno === sno
      );
      if (index !== -1) {
        this.foodItemsArrayData.splice(index, 1);

        // After deleting a row, update sno values to maintain sequential order
        this.updateSerialNumbers();
      }
    },

    updateSerialNumbers() {
      for (let i = 0; i < this.foodItemsArrayData.length; i++) {
        this.foodItemsArrayData[i].sno = i + 1;
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  .AccomBkgDetails {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  }
  .CancelDetails {
    display: block !important;
  }
  .PartnerAgent {
    display: block !important;
  }
  .AccomBkgTbl {
    width: 91vw !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .AccomBkgDetails {
    display: block !important;
  }
  .CancelDetails {
    display: block !important;
  }
  .PartnerAgent {
    display: block !important;
    justify-content: center;
  }
  .AccomBkgTbl {
    width: 91vw !important;
  }
  .AgentDetails {
    justify-content: center !important;
  }
  .PartnerAgentContent {
    justify-content: center !important;
  }
}
</style>

