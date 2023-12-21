<template>
  <q-page-container>
    <q-page>
      <q-toolbar class="bg-primary text-white text-align">
        <q-toolbar-title style="text-align: center">
          Looking For Health Support
        </q-toolbar-title>
      </q-toolbar>

      <div style="margin-top: 30px; justify-content: center" class="row col-12">
        <div class="text-center" style="width: 120px">
          <q-img
            style="cursor: pointer"
            class="avatar"
            src="~assets/homz/heart.png"
            @click="openheartIssueDialog()"
          ></q-img>
          <div style="margin-top: 10px">Heart</div>
        </div>
        &nbsp;
        <div class="text-center" style="width: 120px">
          <q-img
            style="cursor: pointer"
            class="avatar"
            src="~assets/homz/liver.jpg"
            @click="openliverIssueDialog()"
          ></q-img>
          <div style="margin-top: 10px">Liver</div>
        </div>
        &nbsp;
        <div class="text-center" style="width: 120px">
          <q-img
            style="cursor: pointer"
            class="avatar"
            src="~assets/homz/kidney.png"
            @click="openkidneyIssueDialog()"
          ></q-img>
          <div style="margin-top: 10px">Kidney</div>
        </div>
      </div>

      <div style="margin-top: 30px; justify-content: center" class="row col-12">
        <div class="text-center" style="width: 120px">
          <q-img
            style="cursor: pointer"
            class="avatar"
            src="~assets/homz/brain.webp"
            @click="openbrainIssueDialog()"
          ></q-img>
          <div style="margin-top: 10px">Brain</div>
        </div>
        &nbsp;
        <div class="text-center" style="width: 120px">
          <q-img
            style="cursor: pointer"
            class="avatar"
            src="~assets/homz/digestive.png"
            @click="opendigestiveIssueDialog()"
          ></q-img>
          <div style="margin-top: 10px">Digestive</div>
        </div>
        &nbsp;
        <div class="text-center" style="width: 120px">
          <q-img
            style="cursor: pointer"
            class="avatar"
            src="~assets/homz/respiratory-lung.png"
            @click="openrespiratoryIssueDialog()"
          ></q-img>
          <div style="margin-top: 10px">Respiratory</div>
        </div>
      </div>

      <q-dialog v-model="heartIssueDialog" no-backdrop-dismiss>
        <q-card style="min-width: 350px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0; position: sticky; z-index: 100"
          >
            <q-toolbar-title style="text-align: center">
              Heart Disease
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closeheartIssueDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>

          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form
              class="q-gutter-md justify-center"
              ref="allhealthdata"
              style="display: flex; flex-direction: column; align-items: center"
            >
              <q-select
                dense
                options-dense
                multiple
                style="width: 240px"
                v-model="allhealthdata.heartdisease"
                :options="
                  allDiseaseArr.filter((option) =>
                    option.disease_type.includes('Heart')
                  )
                "
                :option-label="(option) => option.disease_name"
                label="Select Problem"
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
                outlined
                dense
                label="Other Problem Please Write.."
                lazy-rules
                type="textarea"
                style="width: 300px"
                label-color="black"
                v-model="allhealthdata.other_disease"
              >
              </q-input>

              <q-btn
                no-caps
                rounded
                color="secondary"
                @click="openPatientDetailsForm"
                >Next</q-btn
              >
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!--Heart Issue Dialog End-->

      <!--Liver Issue Dialog Start-->
      <q-dialog v-model="liverIssueDialog" no-backdrop-dismiss>
        <q-card style="min-width: 350px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0; position: sticky; z-index: 100"
          >
            <q-toolbar-title style="text-align: center">
              Liver Disease
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closeliverIssueDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>

          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form
              class="q-gutter-md justify-center"
              ref="allhealthdata"
              style="display: flex; flex-direction: column; align-items: center"
            >
              <q-select
                dense
                options-dense
                multiple
                style="width: 240px"
                v-model="allhealthdata.liverdisease"
                :options="
                  allDiseaseArr.filter((option) =>
                    option.disease_type.includes('Liver')
                  )
                "
                :option-label="(option) => option.disease_name"
                label="Select Problem"
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
                outlined
                dense
                label="Other Problem Please Write.."
                lazy-rules
                type="textarea"
                style="width: 300px"
                label-color="black"
                v-model="allhealthdata.other_disease"
              >
              </q-input>

              <q-btn
                no-caps
                rounded
                color="secondary"
                @click="openPatientDetailsForm"
                >Next</q-btn
              >
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!--Liver Issue Dialog End-->

      <!--Kidney Issue Dialog Start-->
      <q-dialog v-model="kidneyIssueDialog" no-backdrop-dismiss>
        <q-card style="min-width: 350px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0; position: sticky; z-index: 100"
          >
            <q-toolbar-title style="text-align: center">
              Kidney Disease
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closekidneyIssueDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>

          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form
              class="q-gutter-md justify-center"
              ref="allhealthdata"
              style="display: flex; flex-direction: column; align-items: center"
            >
              <q-select
                dense
                options-dense
                multiple
                style="width: 240px"
                v-model="allhealthdata.kidneydisease"
                :options="
                  allDiseaseArr.filter((option) =>
                    option.disease_type.includes('Kidney')
                  )
                "
                :option-label="(option) => option.disease_name"
                label="Select Problem"
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
                outlined
                dense
                label="Other Problem Please Write.."
                lazy-rules
                type="textarea"
                style="width: 300px"
                label-color="black"
                v-model="allhealthdata.other_disease"
              >
              </q-input>

              <q-btn
                no-caps
                rounded
                color="secondary"
                @click="openPatientDetailsForm"
                >Next</q-btn
              >
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!--Kidney Issue Dialog End-->

      <!--Brain Issue Dialog Start-->
      <q-dialog v-model="brainIssueDialog" no-backdrop-dismiss>
        <q-card style="min-width: 350px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0; position: sticky; z-index: 100"
          >
            <q-toolbar-title style="text-align: center">
              Brain Disease
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closebrainIssueDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>

          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form
              class="q-gutter-md justify-center"
              ref="allhealthdata"
              style="display: flex; flex-direction: column; align-items: center"
            >
              <q-select
                dense
                options-dense
                multiple
                style="width: 240px"
                v-model="allhealthdata.braindisease"
                :options="
                  allDiseaseArr.filter((option) =>
                    option.disease_type.includes('Brain')
                  )
                "
                :option-label="(option) => option.disease_name"
                label="Select Problem"
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
                outlined
                dense
                label="Other Problem Please Write.."
                lazy-rules
                type="textarea"
                style="width: 300px"
                label-color="black"
                v-model="allhealthdata.other_disease"
              >
              </q-input>

              <q-btn
                no-caps
                rounded
                color="secondary"
                @click="openPatientDetailsForm"
                >Next</q-btn
              >
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!--Kidney Issue Dialog End-->

      <!--Digestive Issue Dialog Start-->
      <q-dialog v-model="digestiveIssueDialog" no-backdrop-dismiss>
        <q-card style="min-width: 350px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0; position: sticky; z-index: 100"
          >
            <q-toolbar-title style="text-align: center">
              Digestive Disease
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closedigestiveIssueDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>

          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form
              class="q-gutter-md justify-center"
              ref="allhealthdata"
              style="display: flex; flex-direction: column; align-items: center"
            >
              <q-select
                dense
                options-dense
                multiple
                style="width: 240px"
                v-model="allhealthdata.digestivedisease"
                :options="
                  allDiseaseArr.filter((option) =>
                    option.disease_type.includes('Digestive')
                  )
                "
                :option-label="(option) => option.disease_name"
                label="Select Problem"
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
                outlined
                dense
                label="Other Problem Please Write.."
                lazy-rules
                type="textarea"
                style="width: 300px"
                label-color="black"
                v-model="allhealthdata.other_disease"
              >
              </q-input>

              <q-btn
                no-caps
                rounded
                color="secondary"
                @click="openPatientDetailsForm"
                >Next</q-btn
              >
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!--Digestive Issue Dialog End-->

      <!--Respiratory Issue Dialog Start-->
      <q-dialog v-model="respiratoryIssueDialog" no-backdrop-dismiss>
        <q-card style="min-width: 350px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0; position: sticky; z-index: 100"
          >
            <q-toolbar-title style="text-align: center">
              Respiratory Disease
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closerespiratoryIssueDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>

          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form
              class="q-gutter-md justify-center"
              ref="allhealthdata"
              style="display: flex; flex-direction: column; align-items: center"
            >
              <q-select
                dense
                options-dense
                multiple
                style="width: 240px"
                v-model="allhealthdata.respiratorydisease"
                :options="
                  allDiseaseArr.filter((option) =>
                    option.disease_type.includes('Respiratory')
                  )
                "
                :option-label="(option) => option.disease_name"
                label="Select Problem"
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
                outlined
                dense
                label="Other Problem Please Write.."
                lazy-rules
                type="textarea"
                style="width: 300px"
                label-color="black"
                v-model="allhealthdata.other_disease"
              >
              </q-input>

              <q-btn
                no-caps
                rounded
                color="secondary"
                @click="openPatientDetailsForm"
                >Next</q-btn
              >
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!--Respiratory Issue Dialog End-->

      <!-- Add Patient Details Start-->
      <q-dialog v-model="PatientDetailsForm" no-backdrop-dismiss>
        <q-card style="min-width: 350px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0; position: sticky; z-index: 100"
          >
            <q-toolbar-title style="text-align: center">
              Patient Details
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closePatientDetailsForm"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>
          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form
              class="q-gutter-md justify-center"
              ref="allhealthdata"
              style="display: flex; flex-direction: column"
            >
              <q-input
                dense
                rounded
                outlined
                v-model="allhealthdata.patient_name"
                label="Patient Name*"
                label-color="black"
                :rules="[required('Patient Name')]"
              >
              </q-input>
              <q-input
                dense
                rounded
                outlined
                v-model="allhealthdata.contact_email"
                label="Contact Email"
                label-color="black"
                :rules="[required('Email'), email()]"
              >
              </q-input>
              <q-input
                dense
                rounded
                outlined
                v-model="allhealthdata.mobile_number"
                label="Mobile Number*"
                label-color="black"
                :rules="[required('Mobile Number'), (val) => /^\+\d{2}-(?!0)\d{10}$/.test(val) || 'Invalid Phone Number']"
                mask="+##-##########"
              >
              </q-input>
              <q-input
                dense
                rounded
                outlined
                v-model="allhealthdata.patient_location"
                label="Patient Location*"
                label-color="black"
                :rules="[required('Patient Location')]"
              >
              </q-input>
              <!-- <q-input
                dense
                rounded
                outlined
                v-model="allhealthdata.message"
                type="text"
                label="Message"
                label-color="black"
              >
              </q-input> -->
              <q-card-actions align="center">
                <p style="width: 100%; font-family: verdana; font-size: 12px">
                  *MangoHomz executive will Contact you soon.
                </p>

                <q-btn
                  style="align-items: center; width: 100px"
                  dark
                  push
                  rounded
                  dense
                  class="text-weight-bolder"
                  color="indigo-9"
                  label="Submit"
                  @click="submitPatientDetails"
                />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!-- Add Patient Details End-->
    </q-page>
  </q-page-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import validations from "../../helpers/validations";
export default {
  data() {
    return {
      editedItem: "",
      ...validations,
      PatientDetailsForm: false,
      heartIssueDialog: false,
      liverIssueDialog: false,
      kidneyIssueDialog: false,
      brainIssueDialog: false,
      digestiveIssueDialog: false,
      respiratoryIssueDialog: false,
      heart_Arr: [],
      allhealthdata: {
        heartdisease: [],
        liverdisease: [],
        kidneydisease: [],
        braindisease: [],
        digestivedisease: [],
        respiratorydisease: [],
        other_disease: "",
        patient_name: "",
        contact_email: "",
        mobile_number: "+91",
        patient_location: "",
        message: "",
      },
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      allDiseaseArr: (state) => state.dropdown.allDisease_Arr,
    }),
  },
  mounted() {
    // this.$store.dispatch("account/getAllCheckBoxdata");
    this.$store.dispatch("dropdown/loadAllDiseaseProblem");
  },
  methods: {
    ...mapActions("account", ["patientDetailsSaving"]),
    closeheartIssueDialog() {
      this.heartIssueDialog = false;
    },
    closeliverIssueDialog() {
      this.liverIssueDialog = false;
    },
    closekidneyIssueDialog() {
      this.kidneyIssueDialog = false;
    },
    closebrainIssueDialog() {
      this.brainIssueDialog = false;
    },
    closedigestiveIssueDialog() {
      this.digestiveIssueDialog = false;
    },
    closerespiratoryIssueDialog() {
      this.respiratoryIssueDialog = false;
    },
    closePatientDetailsForm() {
      this.PatientDetailsForm = false;
    },
    openheartIssueDialog(item) {
      this.allhealthdata.health_type = "Heart";
      this.heartIssueDialog = true;
    },
    openliverIssueDialog() {
      this.allhealthdata.health_type = "Liver";
      this.liverIssueDialog = true;
    },
    openkidneyIssueDialog() {
      this.allhealthdata.health_type = "Kidney";
      this.kidneyIssueDialog = true;
    },
    openbrainIssueDialog() {
      this.allhealthdata.health_type = "Brain";
      this.brainIssueDialog = true;
    },
    opendigestiveIssueDialog() {
      this.allhealthdata.health_type = "Digestive";
      this.digestiveIssueDialog = true;
    },
    openrespiratoryIssueDialog() {
      this.allhealthdata.health_type = "Respiratory";
      this.respiratoryIssueDialog = true;
    },
    openPatientDetailsForm() {
      this.heartIssueDialog = false;
      this.liverIssueDialog = false;
      this.kidneyIssueDialog = false;
      this.brainIssueDialog = false;
      this.digestiveIssueDialog = false;
      this.respiratoryIssueDialog = false;
      this.PatientDetailsForm = true;
    },
    submitPatientDetails() {
      this.$refs.allhealthdata.validate().then((success) => {
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
              formData.append(
                "patient_details",
                JSON.stringify(this.allhealthdata)
              );
              this.patientDetailsSaving(formData);
              this.allhealthdata = {};
              this.step = 1;
              this.PatientDetailsForm = false;
            })
            .onCancel(() => {
              this.allhealthdata = true;
            });
        }
      });
    },
  },
};
</script>

<style>
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 80%;
  height: 80%;
  object-fit: cover;
}
</style>


