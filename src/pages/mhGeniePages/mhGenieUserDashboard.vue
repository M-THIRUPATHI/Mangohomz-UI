<template>
  <q-page-container style="padding: 0%;">
    <!--mobile view start-->
    <q-page class="lt-sm">
      <q-header>
        <q-toolbar>
          <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />
          <q-toolbar-title>
            <q-avatar size="26px">
              <img src="icons/favicon-32x32.png">
            </q-avatar>
            Mangohomz Genie
          </q-toolbar-title>
          <!-- <b style="max-inline-size: min-content;"> User Name: {{ genieuser_details_rows[0].username }}</b> -->
        </q-toolbar>
      </q-header>
      <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-2 q-ma-md">
        <q-list>
          <div style="text-align: -webkit-center;justify-content: center;padding-top: 10px;">
            <q-img src="../../assets/images/bot-1.webp" style="width:80px;height: 90px;" />
          </div>
          <q-separator />
          <q-list>
            <!-- <q-item clickable>
              <q-item-section>
                <q-item-label @click="onhome">Home</q-item-label>
              </q-item-section>
            </q-item> -->
            <!-- <q-separator /> -->
            <q-item clickable>
              <q-item-section>
                <q-item-label>Dashboard</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label @click="onPatientDetails">Patient Details</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label @click="onchatbot">Chatbot</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label @click="onlogout">Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-list>
      </q-drawer>
      <!--Patient Details Start-->
      <div class=" lt-sm">
        <router-view v-if="!showForm" />
        <q-form ref="patientdata" @submit="onSubmitPatientData" v-else>
          <!-- <div>
            <q-img src="../assets/images/DetailsBannerUp.png" style="width: 100%;" />
          </div> -->
          <div style="margin-top: 20px; text-align: -webkit-center;">
            <p style="font-size: 16px; font-weight: 600;">{{ formattedProblem }} Problem</p>
            <q-input dense outlined v-model="patientformdata.patient_firstname" label="Patient First Name*"
              style="margin-top: 10px;width: 300px;" :rules="[val => !!val || 'First name is required']" />
            <q-input dense outlined v-model="patientformdata.patient_lastname" label="Patient Last Name*"
              style="margin-top: 10px;width: 300px;" :rules="[val => !!val || 'Last name is required']" />
            <q-input dense outlined v-model="patientformdata.email_id" label="Email*"
              style="margin-top: 10px; width: 300px;"
              :rules="[val => !!val || 'Email is required', val => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val) || 'Invalid email address']" />
            <q-input mask="##########" dense outlined v-model="patientformdata.phone_number" label="Mobile Number*"
              style="margin-top: 10px; width: 300px;"
              :rules="[val => !!val || 'Mobile number is required', val => /^[1-9][0-9]{9}$/.test(val) || 'Invalid mobile number']" />
            <q-input dense outlined v-model="patientformdata.patient_location" label="Patient Location*"
              style="margin-top: 10px; width: 300px;" :rules="[val => !!val || 'Patient location is required']" />
            <div>
              <div>
                <q-select dense outlined v-model="patientformdata.problem" :options="options" label="Select Problem*"
                  style="margin-top: 10px; width: 300px;"
                  :rules="[val => val && val.length > 0 || 'Problem selection is required']">
                </q-select>
              </div>
            </div>
            <div>
              <q-input outlined type="textarea" v-model="patientformdata.pr_description" label="Problem Description*"
                style="margin-top: 10px; width: 300px;" :rules="[val => !!val || 'Problem description is required']" />
            </div>
            <div style="margin-top: 16px; font-size: 18px; text-align: center; cursor: pointer;" @click="AddMoreproblems">
              <p>Add more problems <span style="color: green;">+</span></p>
            </div>
            <div style="margin-top: 10px; display: flex; justify-content: center;">
              <button
                style="padding: 5px; font-size: 18px; text-align: center; border-radius: 5px; background-color: #0080ff; font-weight: 600; color: white; cursor: pointer;"
                type="submit">
                Submit
              </button>
            </div>
            <div
              style="position: fixed;left: 0; width: 100%; display: flex; justify-content: center; align-items: flex-end; padding: 20px 0;">
              <q-img src="../../assets/images/DetailsBannerDown.png" style="width: 100%; height: 100px;" />
            </div>
          </div>
        </q-form>
      </div>
      <!--Patient Details End-->
      <!--user dashboard patient details table start -->
      <!-- <div class="lt-sm" style="margin-top: 20px;" ref="patientdetails" v-if="patientdetails === true">
        <q-card flat bordered class="bg-white">
          <q-table :title="title" :data="userpatient_details_rows" :columns="userpatient_details_columns"
            :pagination.sync="pagination" style="font-family: verdana" separator="cell" wrap-cells>
          </q-table>
        </q-card>
      </div> -->
      <!--user dashboard patient details table end -->
    </q-page>
    <!--mobile view end-->
    <!--website view start-->
    <q-page class="gt-sm">
      <q-layout view="lHh Lpr lFf" class="bg-white q-ma-md">
        <q-header elevated>
          <q-toolbar>
            <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />
            <q-toolbar-title>
              <q-avatar size="26px">
                <img src="icons/favicon-32x32.png">
              </q-avatar>
              Mangohomz Genie
            </q-toolbar-title>
            <b> User Name: {{ this.genieuser_details_rows[0].username }}</b>
          </q-toolbar>
        </q-header>
        <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-2">
          <q-list>
            <div style="text-align: -webkit-center;justify-content: center;padding-top: 10px;">
              <q-img src="../../assets/images/bot-1.webp" style="width:80px;height: 90px;" />
            </div>
            <q-separator />
            <q-list>
              <!-- <q-item clickable>
                <q-item-section>
                  <q-item-label @click="onhome">Home</q-item-label>
                </q-item-section>
              </q-item> -->
              <!-- <q-separator /> -->
              <q-item clickable>
                <q-item-section>
                  <q-item-label>Dashboard</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>
                  <q-item-label @click="onPatientDetails">Patient Details</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>
                  <q-item-label @click="onchatbot">Chatbot</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>
                  <q-item-label @click="onlogout">Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-list>
        </q-drawer>

        <!--Patient Details Start-->
        <div class=" gt-sm">
          <router-view v-if="!showForm" />
          <q-form ref="patientdata" @submit="onSubmitPatientData" v-else>
            <!-- <div>
            <q-img src="../assets/images/DetailsBannerUp.png" style="width: 100%;" />
          </div> -->
            <div style="margin-top: 70px; text-align: -webkit-center;">
              <p style="font-size: 16px; font-weight: 600;">{{ formattedProblem }} Problem</p>
              <div style="display: flex; place-content: center">
                <q-input dense outlined v-model="patientformdata.patient_firstname" label="Patient First Name*"
                  style="width: 280px; margin-right: 20px;" :rules="[val => !!val || 'First name is required']" />
                <q-input dense outlined v-model="patientformdata.patient_lastname" label="Patient Last Name*"
                  style="width: 270px; margin-right: 10px;" :rules="[val => !!val || 'Last name is required']" />
              </div>
              <q-input dense outlined v-model="patientformdata.email_id" label="Email*"
                style="margin-top: 20px; width: 570px;"
                :rules="[val => !!val || 'Email is required', val => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val) || 'Invalid email address']" />
              <q-input mask="##########" dense outlined v-model="patientformdata.phone_number" label="Mobile Number*"
                style="margin-top: 20px; width: 570px;"
                :rules="[val => !!val || 'Mobile number is required', val => /^[1-9][0-9]{9}$/.test(val) || 'Invalid mobile number']" />
              <q-input dense outlined v-model="patientformdata.patient_location" label="Patient Location*"
                style="margin-top: 20px; width: 570px;" :rules="[val => !!val || 'Patient location is required']" />
              <q-select dense outlined v-model="patientformdata.problem" :options="options" label="Select Problem*"
                style="margin-top: 20px; width: 570px;"
                :rules="[val => val && val.length > 0 || 'Problem selection is required']">
              </q-select>
              <div>
                <q-input outlined type="textarea" v-model="patientformdata.pr_description" label="Problem Description*"
                  style="margin-top: 20px; width: 570px;" :rules="[val => !!val || 'Problem description is required']" />
              </div>
              <div style="margin-top: 16px; font-size: 18px; text-align: center; cursor: pointer;"
                @click="AddMoreproblems">
                <p>Add more problems <span style="color: green;">+</span></p>
              </div>
              <!-- Display table -->
              <template v-if="problems.length > 0">
                <div>
                  <h3>Added Problems:</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Problem</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(problem, index) in problems" :key="index">
                        <td>{{ problem.problem }}</td>
                        <td>{{ problem.description }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
              <div style="margin-top: 20px; display: flex; justify-content: center;">
                <button
                  style="padding: 5px; font-size: 18px; text-align: center; border-radius: 5px; background-color: #0080ff; font-weight: 600; color: white; cursor: pointer;"
                  type="submit">
                  Submit
                </button>
              </div>
              <div style="margin-top: 20px;">
                <q-img src="../../assets/images/DetailsBannerDown.png" style="width: 100%;" />
              </div>
            </div>
          </q-form>
        </div>
        <!--Patient Details End-->
        <!--website user dashboard patient details table start -->
        <!-- <div class="gt-sm" style="margin-top: 70px;" ref="patientdetails" v-if="patientdetails === true">
          <q-btn class="q-mt-md" flat color="primary" label="+ Add More Problem" @click="openProblemDialog" />
          <q-card flat bordered class="bg-white">
            <q-table :title="title" :data="userpatient_details_rows" :columns="userpatient_details_columns"
              :pagination.sync="pagination" style="font-family: verdana" separator="cell" wrap-cells>
            </q-table>
          </q-card>
        </div> -->
        <!--website user dashboard patient details table end -->

      </q-layout>
    </q-page>
    <!--website view end-->
  </q-page-container>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { ref } from 'vue';

export default {
  data() {
    return {
      title: "Patient Details",
      options: ["Heart", "Brain", "Kidney", "Liver", "Respiratory", "Mother & Child Care", "Other"],
      leftDrawerOpen: false,
      showForm: false,
      showMultipleProblems: false,
      problems: [],
      patientformdata: {
        user_id: "",
        patient_firstname: "",
        patient_lastname: "",
        email_id: "",
        phone_number: "",
        patient_location: "",
        problem: [],
        pr_description: ""
      },
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      patientdetails: false,
      showProblemDialog: false,
    }
  },
  meta() {
    return {
      title: this.title
    };
  },
  mounted() {

    // this.leftDrawerOpen = true;

    this.$store.dispatch("genie/getPatientDetails");
    this.$store.dispatch("genie/getgenieuserdetails");


  },
  created() {
    // this.leftDrawerOpen = true;
  },
  computed: {
    formattedProblem() {
      return Array.isArray(this.patientformdata.problem)
        ? this.patientformdata.problem.join(" , ")
        : this.patientformdata.problem;
    },

    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },

      userpatient_details_columns: (state) => state.genie.userpatient_details_columns,
    }),
    ...mapGetters("genie", ["userpatient_details_rows"]),
    ...mapGetters("genie", ["genieuser_details_rows"]),

  },
  methods: {
    ...mapActions("genie", ["savePatientDetails"]),
    ...mapActions("genie", ["getgenieuserdetails"]),
    AddMoreproblems() {
      if (this.patientformdata.problem && this.patientformdata.pr_description) {
        this.problems.push({
          problem: this.patientformdata.problem,
          description: this.patientformdata.pr_description,
        });
        // Clear the selected problem and description
        this.patientformdata.problem = '';
        this.patientformdata.pr_description = '';
      }
    },
    openProblemDialog() {
      this.showProblemDialog = true;
    },
    closeProblemDialog() {
      this.showProblemDialog = false;
    },
    resetForm() {
      this.patientformdata = {
        patient_firstname: '',
        patient_lastname: '',
        email_id: '',
        phone_number: '',
        patient_location: '',
        problem: '',
        pr_description: ''
      };
    },
    async onlogout() {
      this.resetForm();
      await this.$router.push('/mhGenieHome');
      this.$q.notify({
        message: "Logout successful",
        type: "positive",
        position: "top"
      });
      setTimeout(() => {
        this.showForm = false;
        this.$router.go();
      }, 1000);
    },
    onhome() {
      this.$router.replace('/mhGenieHome');
       this.resetForm();
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    onPatientDetails() {
      this.patientdetails = true;
      this.showForm = true;
      this.leftDrawerOpen = false;
    },
    onchatbot() {
      this.$router.push('/ChatBot');
    },
    onSubmitPatientData() {
      this.$refs.patientdata.validate().then(async (success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to submit the data?",
              cancel: true,
              persistent: true,
            })
            .onOk(async () => {
              try {
                const problems = this.problems.map((problem) => problem.problem);
            const descriptions = this.problems.map((problem) => problem.description);
                const data = { ...this.patientformdata,  problems: problems,
              descriptions: descriptions, user_id:this.genieuser_details_rows[0].user_id  };
                const response = await this.savePatientDetails(data);
                this.$q.notify({
                  message: response.message,
                  type: "positive",
                  position: "top",
                  timeout: "500",
                });
                this.resetForm();
                this.showForm = false;
                this.showProblemDialog = false;
                this.$router.push('/mhGenieUserDashboard');
              } catch (error) {
                console.log(error);
                this.$q.notify({
                  message: "Failed to save patient data",
                  type: "negative",
                });
                this.showForm = true;
              }
            })
            .onCancel(() => {
              this.showForm = true;
            });
        }
      });
    },

  },
}
</script>
<style>
.chatBotLogo {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
</style>
