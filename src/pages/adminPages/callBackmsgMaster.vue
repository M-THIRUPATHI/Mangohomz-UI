<template>
  <q-page-container>
    <q-page style="padding-top: 30px" class="q-pa-sm">
      <div class="row q-col-gutter-sm q-py-sm">
        <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <subHeaderForAdmin />

          <q-card>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div
                class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                style="
                  font-size: 20px;
                  margin-top: 25px;
                  border-bottom: 2px solid lightgrey;
                "
              >
                Call Back Message
              </div>
              <div
                class="mblview col-12 row"
                style="display: flex; justify-content: center"
              >
                <div class="col-6" style="width: 500px">
                  <div class="q-pa-md text-center">
                    <q-btn
                      color="primary"
                      label="Send Message"
                      @click="onsendmsgbtn"
                    />
                  </div>
                </div>
                <div class="col-6" style="width: 500px">
                  <div class="q-pa-md text-center">
                    <q-btn
                      color="primary"
                      label="View Data"
                      @click="navigateToCallBackMessages()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </q-card>
      </div>
    </q-page>

    <!--Add More location Submit-->
    <q-dialog
      v-model="opensendmsgfdialog"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="height: 450px;" >
        <q-header class="bg-primary">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            Send Message
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <div>
          <div>

              <q-card-section class="q-pt-none" style="margin-top: 40px">
                <q-form class="row q-gutter-md" ref="refcallbackmsg">
                  <q-input
                    dense
                    outlined
                    lazy-rules
                    v-model="callbckformdata.mobile_number"
                    label="Mobile Number*"
                    mask="##########"
                    :rules="[required('Phone no'), validateMobileNumber]"
                    label-color="black"
                    hide-bottom-space
                    style="max-width: 150px"
                  >
                  </q-input>
                  <q-input
                    dense
                    outlined
                    debounce="300"
                    v-model="callbckformdata.date_call"
                    clearable
                    label="Call Date"
                    label-color="black"
                    clear-icon="close"
                    hide-bottom-space

                    minimal
                    @click="$refs.qDateProxy.show()"
                    style="width: 150px"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                          minimal
                        >
                          <q-date
                            v-model="callbckformdata.date_call"
                            mask="DD/MM/YYYY"
                            :options="optionsFnForDate"
                            minimal
                            @input="closeDialog"
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
                  <q-input
                    dense
                    outlined
                    lazy-rules
                    v-model="callbckformdata.customer_name"
                    label="Name"

                    label-color="black"
                    hide-bottom-space
                    style="max-width: 250px"
                  >
                  </q-input>
                  <q-select
                    dense
                    outlined
                    use-input
                    hide-selected
                    lazy-rules
                    :options="cityOptions"
                    @filter="filterFnCities"
                    option-value="city_id"
                    option-label="city"
                    fill-input
                    v-model="callbckformdata.hospital_location"
                    label="Hospital Location"

                    label-color="black"
                    hide-bottom-space
                    style="max-width: 250px"
                    @input="
                      loadAllHospitalForCall(callbckformdata.hospital_location);
                      emptyHospital();
                    "
                  >
                  </q-select>

                  <q-select
                    dense
                    outlined
                    use-input
                    hide-selected
                    lazy-rules
                    :options="hospitalOptions"
                    @filter="filterFnHospital"
                    option-value="near_hospital_id "
                    option-label="near_hospital_name"
                    v-model="callbckformdata.hospital_name"
                    label="Hospital Name"
                    fill-input
                    label-color="black"
                    hide-bottom-space
                    style="max-width: 250px"
                  >
                  </q-select>

                  <q-input
                    dense
                    outlined
                    lazy-rules
                    v-model="callbckformdata.customer_city"
                    label="Customer City"

                    label-color="black"
                    hide-bottom-space
                    style="max-width: 250px"
                  >
                  </q-input>


                  <q-input
                    dense
                    outlined
                    lazy-rules
                    v-model="callbckformdata.other_hospital_name"
                    label="Other Hospital Name"

                    label-color="black"
                    hide-bottom-space
                    style="max-width: 250px"
                  >
                  </q-input>




                  <q-input
                    v-model="callbckformdata.remark"
                    outlined
                    dense
                    label="Remarks"
                    style="width: 500px"
                    lazy-rules
                    type="textarea"
                    label-color="black"
                  >
                  </q-input>
                </q-form>
              </q-card-section>

          </div>
          <q-resize-observer />
          <div class="q-pa-md text-center">
            <q-btn
              @click="onsendmsgSubmit()"
              dark
              rounded
              dense
              color="indigo-9"
              label="Send Message"
            />
          </div>
        </div>
      </q-layout>
    </q-dialog>
  </q-page-container>
</template>


<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";
import { date } from "quasar";
import { scroll } from "quasar";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      ...validations,
      opensendmsgfdialog: false,
      cityOptions: [],
      hospitalOptions: [],
      callbckformdata: {
        mobile_number: "",
        date_call: new Date().toLocaleDateString("en-GB"),
        customer_name: "",
        hospital_name: "",
        hospital_location: "",
        customer_city: "",
        other_hospital_name:"",
        remark: "",
      },
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      user: (state) => state.account.user,
      cities: (state) => state.adminDashboard.call_back_allcity_rows,
      hospitalforcallback: (state) =>
        state.adminDashboard.get_hospital_for_callback_rows,
    }),
  },
  created() {},
  mounted() {
    this.$store.dispatch("adminDashboard/loadAllCitiesforCallBack");
  },
  methods: {
    ...mapActions("adminDashboard", ["callbackdataSaving"]),
    ...mapActions("adminDashboard", ["loadAllHospitalForCall"]),

    onsendmsgbtn() {
      this.opensendmsgfdialog = true;
    },
    navigateToCallBackMessages() {
      this.$router.push("/getcallbackmsgdata");
    },
    validateMobileNumber(value) {
      if (/^0/.test(value)) {
        return "The first digit of your mobile number cannot be 0.";
      } else if (/^\d{10}$/.test(value)) {
        return true;
      } else {
        return "Mobile number should be exactly 10 digits long.";
      }
    },

    closeDialog() {
      this.$refs.qDateProxy.hide();
    },

    emptyHospital() {
      this.callbckformdata.hospital_name = "";
    },
    optionsFnForDate(d) {
        return d <= date.formatDate(Date.now(), "YYYY/MM/DD");
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
    filterFnHospital(val, update) {
  if (val === "") {
    update(() => {
      this.hospitalOptions = this.hospitalforcallback;
    });
    return this.hospitalOptions;
  }

  update(() => {
    const needle = this.hospitalforcallback.filter((items) => {
      return Object.values(items).some((item) => {
        if (typeof item === 'string') {
          return item.toLowerCase().includes(val.toLowerCase());
        }
        return false; // Skip non-string items
      });
    });
    this.hospitalOptions = needle;
    return this.hospitalOptions;
  });
},

    onsendmsgSubmit() {
      this.$refs.refcallbackmsg.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data?",
              cancel: true,
              persistent: true,
            })
            .onOk(async () => {
              const response = await this.callbackdataSaving(
                this.callbckformdata
              );
              // this.opensendmsgfdialog = false;
              this.callbckformdata.mobile_number = "";
              // this.callbckformdata.date_call = "";
              this.callbckformdata.customer_name = "";
              this.callbckformdata.hospital_name = "";
              this.callbckformdata.hospital_location = "";
              this.callbckformdata.customer_city = "";
              this.callbckformdata.other_hospital_name = "";


              this.callbckformdata.remark = "";

              this.$q.notify({
                message: "Successfully Added CallBack Message Added ",
                position: "top",
                type: "positive",
              });
            })
            .onCancel(() => {
              this.opensendmsgfdialog = true;
            });
        } else {
          this.$q.notify({
            message: `Please Enter Form Properly`,
            position: "top",
            type: "negative",
          });
        }
      });
    },
  },
};
</script>

