<template>
  <q-page style="padding-top: 120px" class="q-pa-sm">
    <subHeaderForAdmin />
    <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card>
          <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
            <p
              class="q-pa-xs text-left text-bold"
              style="text-align: justify; font-size: 20px; font-family: verdana"
            >
              FeedBack View:
            </p>

            <q-btn
              push
              label="Accommodation"
              icon="mdi-domain"
              @click="accomodationdetails()"
              class="bg-primary text-white"
            />
            <q-btn
              push
              label="Food"
              icon="mdi-food-fork-drink"
              @click="accFoodDetails()"
              class="bg-primary text-white"
            />
            <q-btn
              push
              label="Travel"
              icon="mdi-car"
              @click="accTravelDetails()"
              class="bg-primary text-white"
            />
            <q-btn
              push
              label="Medical"
              icon="mdi-medical-bag"
              @click="accMedicalDetails()"
              class="bg-primary text-white"
            />
            <!-- <b style="margin-block: auto; margin-left: auto;"> User Name: {{ userDetails.user_name }}</b> -->
          </div>
        </q-card>
        <div style="padding-top: 10px" ref="accdata" v-if="accdata == true">
          <q-card flat bordered class="bg-white">
            <q-table
              :data="feedback_data_rows"
              :columns="feedback_data_columns"
              :pagination.sync="pagination"
              style="font-family: verdana"
              separator="cell"
              wrap-cells
            >
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    color="positive"
                    icon="las la-eye"
                    size="sm"
                    @click="viewItem(props.row)"
                  >
                    <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                  </q-btn>
                </q-td>
              </template>
            </q-table>
          </q-card>
        </div>
      </div>
    </q-card>
     <q-dialog
          v-model="details"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-layout class="bg-white">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed" />
              <div class="text-h6">
                FeedBack Details:{{ editedItem.user_name }}
              </div>
              <q-space />

              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card-section class="q-pa-xs" >
              <q-form>
                <div  >
                  <q-card class="bg-blue-grey-1 text-black" style="width: 100%">
                    <q-card-section class="text-white">
                      <!-- <div class="q-gutter-xs row">
                        <q-icon
                          name="manage_accounts"
                          color="primary"
                          size="2em"
                        />
                        <div class="text-h6 text-black text-italic">
                          ReachUs Details
                        </div>
                      </div> -->

                      <div class="row">
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Booking ID :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mh_booking_id
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              User Name:
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.user_name
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Property Name :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.property_name
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Experience Rating :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mh_experience_rating
                            }}</q-item-section>
                          </q-item>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                            Hotel Rating:
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.hotel_rating
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                             Recommended Value:
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.mh_recommended_value
                            }}</q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6 q-mt-lg">
                          <q-item>
                            <q-item-section class="text-primary text-h6" avatar>
                              Message :
                            </q-item-section>

                            <q-item-section class="text-dark text-h6">{{
                              editedItem.user_message
                            }}</q-item-section>
                          </q-item>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-form>
            </q-card-section>
          </q-layout>
        </q-dialog>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      details: false,
      maximizedToggle: true,
      editedItem: "",
      accdata: true,
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
    };
  },
  mounted() {
    this.$store.dispatch("adminDashboard/getFeedbackDetails");
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      ...mapGetters("adminDashboard", ["feedback_data_rows"]),
      feedback_data_columns: (state) => state.adminDashboard.feedback_data_columns,
    }),
  },
  methods: {
    ...mapActions("adminDashboard", ["getFeedbackDetails"]),
    accomodationdetails() {
      this.accdata = true;
    },
    accFoodDetails() {
      this.accdata = false;
    },
    accTravelDetails() {
      this.accdata = false;
    },
    accMedicalDetails() {
      this.accdata = false;
    },

    viewItem(item) {
      this.editedItem = Object.assign({}, item);
      this.getFeedbackDetails(this.editedItem);
      this.details = true;
    },
  },
};
</script>

