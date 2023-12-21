<template>
    <q-page-container style="padding-top: 0px">
      <q-page class="q-pa-sm" style="padding-top: 120px">
        <subHeaderForAdmin />

        <div style="margin: auto width:100vw">

       <q-table
         title="Hospital Partner Visit Details"
         :data="hospital_visit_data"
         :columns="hospital_visit_columns"
         :rows-per-page-options="[100, 200, 300, 0]"
         dense
         separator="cell"
         :pagination.sync="pagination"
         :grid="mode === 'grid'"
         :filter="filter"
         :selected.sync="selected"
         color="green"
         class="q-mt-md"
       >
       <template v-slot:body-cell-visit_status="props">
            <q-td :props="props">


              <q-chip
                :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background1 text-center'">
                {{ props.row.visit_status }}

              </q-chip>


            </q-td>
          </template>
          <template v-slot:body-cell-s_no="props">
            {{ props.index + 1 }}
          </template>

       <template v-slot:top-right="props">
             <q-input
               outlined
               dense
               debounce="300"
               v-model="filter"
               placeholder="Search"
               style="width: 250px"
             >
               <template v-slot:append>
                 <q-icon name="search" />
               </template>
             </q-input>

             <q-btn
               flat
               round
               dense
               :icon="
                 props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
               "
               @click="props.toggleFullscreen"
               v-if="mode === 'list'"
             >
               <q-tooltip
                 :difiltersable="$q.platform.is.mobile"
                 v-close-popup
                 >{{
                   props.inFullscreen
                     ? "Exit Fullscreen"
                     : "Toggle Fullscreen"
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
             <download-excel
               v-if="hospital_visit_data.length != 0"
               :data="hospital_visit_data"
               :header="headerValue"
               worksheet="Hospital Visit Data Report"
               :name="`${excel_date}_hospitals_visits.xls`"
             >
               <q-icon color="primary" name="mdi-file-excel" size="22px" />
               <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
                 >Download Excel
               </q-tooltip>
             </download-excel>
             <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
           <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
           </q-tooltip>
         </q-btn> -->
           </template>


           <template v-slot:body-cell-actions="props">
           <q-td :props="props">
             <q-btn
               class="q-ml-sm"
               color="primary"
               style="border-radius: 15px; font-weight: bold; font-size: 12px;"
               @click="editHospitalVisitData(props.row)"
               size="sm"
               ><q-tooltip :disable="$q.platform.is.mobile">Update</q-tooltip
               >Update
             </q-btn>
           </q-td>
         </template>

       </q-table>
     </div>

     <q-dialog
          v-model="hospitalVisitDataDialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
        <q-layout view="Lhh lpr fff" container class="bg-white">
        <q-header class="bg-primary q-mb-5">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            <div style="font-family: verdana">Update Hospital Visit Details</div>
            <q-space />

            <q-btn dense flat icon="close" @click="closehospitalTravelDialog()">
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <q-space />
        <q-space />


        <q-form class="AccomBkgDetails" ref="hospitalFormBasic1" style="margin-top: 60px; padding-left: 15px;">
            <p style="color:red; margin-left: 24px; font-size: 18px;">* Last Updated at {{ Updated_dateTime }}</p>
                <div class="row" id="justify-sides">
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Hospital Name * " hide-bottom-space
                        style="width: 400px" label-color="black" v-model="updateHospitalPartnerVisitDetails.hospitalName"
                        :rules="[required('Hospital Name')]">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Address" hide-bottom-space
                        style="width: 400px" label-color="black" v-model="updateHospitalPartnerVisitDetails.address"
                        :rules="[required('Address')]">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Pin Code" hide-bottom-space
                        style="width: 400px" label-color="black" v-model="updateHospitalPartnerVisitDetails.pincode"
                        :rules="pincodeinputRules">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Hospital Contact Number"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="updateHospitalPartnerVisitDetails.phoneNumber" :rules="phoneinputRules">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Hospital Email Id" hide-bottom-space
                        style="width: 400px" label-color="black" v-model="updateHospitalPartnerVisitDetails.emailId"
                        :rules="emailRules">
                    </q-input>

                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Key Person Name of the Hospital"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="updateHospitalPartnerVisitDetails.keyPersonName">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Key Person  Mail Id" hide-bottom-space
                        style="width: 400px" label-color="black" v-model="updateHospitalPartnerVisitDetails.keyPersonMail"
                        :rules="emailRules">
                    </q-input>

                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Key Person Phone Number"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="updateHospitalPartnerVisitDetails.keyPersonPhone" :rules="phoneinputRules">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Hospital Help Line Manager Name"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="updateHospitalPartnerVisitDetails.managerName">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Hospital Help Line Manager Mail Id"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="updateHospitalPartnerVisitDetails.managerMail" :rules="emailRules">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined
                        label="Hospital Help Line Manager Phone Number" hide-bottom-space style="width: 400px"
                        label-color="black" v-model="updateHospitalPartnerVisitDetails.managerPhone" :rules="phoneinputRules">
                    </q-input>
                    <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined
                        label="Is Hospital Providing Any Accomadation ?" hide-bottom-space style="width: 400px"
                        label-color="black" :options="yesOrNoArr" v-model="updateHospitalPartnerVisitDetails.accomadation">
                    </q-select>
                    <q-input v-if="updateHospitalPartnerVisitDetails.accomadation == 'Yes'" class="row col-3 q-mt-sm q-mr-sm light-gray-input"
                        dense outlined label="Accomadation Name" hide-bottom-space style="width: 400px" label-color="black"
                        v-model="updateHospitalPartnerVisitDetails.accomadationName">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined
                        label="Flow of Outstation Patients Approximate per day ?" hide-bottom-space style="width: 400px"
                        label-color="black" v-model="updateHospitalPartnerVisitDetails.outstationFlow">
                    </q-input>


                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Other Services Hospital is Provided? "
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="updateHospitalPartnerVisitDetails.otherServices">
                    </q-input>
                    <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined
                        label="Is Any Third Party tieup for patient accomadation ?" hide-bottom-space style="width: 400px"
                        label-color="black" :options="yesOrNoArr" v-model="updateHospitalPartnerVisitDetails.thirdParty">
                    </q-select>
                    <q-input v-if="updateHospitalPartnerVisitDetails.thirdParty == 'Yes'" class="row col-3 q-mt-sm q-mr-sm" dense
                        outlined label="Third Party Name" hide-bottom-space style="width: 400px" label-color="black"
                        v-model="updateHospitalPartnerVisitDetails.thirdPartyName">
                    </q-input>

                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined
                        label="Any Person of the Hospital who can be our Asset ?" hide-bottom-space style="width: 400px"
                        label-color="black" v-model="updateHospitalPartnerVisitDetails.asset">
                    </q-input>

                </div>

        </q-form>

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px; font-size: 15px;"><q-icon name="" color="black"
                        size="1.5em" />Key Departments/Doctors for which the hospital is famous for?
                </q-bar>
            </div>
            <q-form class="AccomBkgDetails" ref="accomadationFormBasic">
                <div class="row" id="justify-sides">
                    <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Departments/Doctor "
                        hide-bottom-space style="width: 360px" label-color="black" :options="doctorArr"
                        v-model="updateHospitalPartnerVisitKeyDetails.departmentOrDoctor">
                    </q-select>
                    <q-input v-if="updateHospitalPartnerVisitKeyDetails.departmentOrDoctor == 'Doctor'"
                        class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Doctor Name" hide-bottom-space
                        style="width: 360px" label-color="black" v-model="updateHospitalPartnerVisitKeyDetails.doctorName">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm " dense outlined label="Speciality Name" hide-bottom-space
                        style="width: 360px" label-color="black" v-model="updateHospitalPartnerVisitKeyDetails.specialityName">
                    </q-input>


                </div>
                <div class="row q-pa-md justify-end">
                    <q-btn color="primary" label="ADD" @click="onAddValues"> </q-btn>
                </div>
            </q-form>

            <q-table style="font-family: verdana" dense separator="cell" wrap-cells  :data="keyPersonsDataRow"
                :columns="keyPersonsDataColumn" :rows-per-page-options="[]" row-key="sno" no-data-label="No test names added">

                <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                        <q-btn @click="deleteRow(props.row)" color="negative" dense flat round icon="delete"
                            class="q-ml-xs" />
                    </q-td>
                </template>

            </q-table>





      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;"
          ><q-icon
            name=""
            color="black"
            size="1.5em"
          />Documents
        </q-bar>
      </div>

      <!--BOOKING ALL MODULE START-->
      <q-card-actions>
        <div class="row  items-start q-gutter-md" id="justify-sides">
          <q-file
            color="lime-11"
            bg-color="teal"
            style="width: 240px"
            class="hint-bold"
            dense
            filled
            clearable
            v-model="uploadImage1"
            type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            hide-bottom-space
            @update:model-value="
              (val) => {
                files = val;
              }
            "
            hint="Hospital Image 1 "
            :rules="[(val) => val || 'Please select file']"
            :filter="checkFileSize"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateHospitalPartnerVisitDetails.image_upt1" @click="
                showDocument(
                  updateHospitalPartnerVisitDetails.image_upt1,
                  'Hospital Image 1'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Hospital Image 1</q-tooltip>
              </q-btn>

          <q-file
            color="lime-11"
            bg-color="teal"
            style="width: 240px"
            class="hint-bold"
            dense
            filled
            clearable
            hide-bottom-space

            v-model="uploadImage2"
            type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="
              (val) => {
                files = val;
              }
            "
            hint="Hospital Image 2"
            :rules="[(val) => val || 'Please select file']"
            :filter="checkFileSize"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateHospitalPartnerVisitDetails.image_upt2" @click="
                showDocument(
                  updateHospitalPartnerVisitDetails.image_upt2,
                  'Hospital Image 2'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Hospital Image 2</q-tooltip>
              </q-btn>


          <q-file
            color="lime-11"
            bg-color="teal"
            style="width: 240px"
            class="hint-bold"
            dense
            filled
            clearable
            hide-bottom-space
            v-model="uploadImage3"

            type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="
              (val) => {
                files = val;
              }
            "
            hint="Hospital Image 3"
            :rules="[(val) => val || 'Please select file']"
            :filter="checkFileSize"
            @rejected="onRejected"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateHospitalPartnerVisitDetails.image_upt3" @click="
                showDocument(
                  updateHospitalPartnerVisitDetails.image_upt3,
                  'Hospital Image 3'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Hospital Image 3</q-tooltip>
              </q-btn>





        </div>
      </q-card-actions>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;"
          ><q-icon
            name=""
            color="black"
            size="1.5em"
          />Discussion Brief
        </q-bar>
      </div>
      <q-form class="AccomBkgDetails" ref="hospitalFormBasic" style="padding-left: 15px;">
                <div class="row" id="justify-sides">
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Discussion Brief" hide-bottom-space
                        style="width: 90vw" label-color="black" type="textarea"
                        v-model="updateHospitalPartnerVisitDetails.discussionBrief">
                    </q-input>


                </div>
            </q-form>



        <div class="row q-pa-md justify-end" style="margin-bottom: 20vw; margin:5px;">
            <q-btn color="secondary" label="Update" @click="onClickUpdate" style="margin-right: 10px; font-weight: bold;">
            </q-btn>

            <q-btn color="primary" label="Verify" style="font-weight: bold;" @click="onClickVerify">
            </q-btn>
          </div>


      <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down" :maximized="maximizedToggle"
          persistent>
          <q-layout view="Lhh lpR fff" container class="bg-white">
            <q-header class="bg-primary">
              <q-bar class="bg-primary text-white" style="height: 60px;">
                <q-icon name="feed" />
                <div class="text-h6">
                  {{ dialogTitle }}
                </div>
                <q-space />

                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>
            </q-header>
            <q-card v-show="showPanDoc" style="height: 600px">
              <div class="q-pt-xl row items-start q-gutter-md">

                <iframe :src="url" class="wrapper" width="100%" height="600px" frameborder="1"></iframe>
              </div>
            </q-card>
          </q-layout>
        </q-dialog>






      </q-layout>

    </q-dialog>

      </q-page>
    </q-page-container>
  </template>

  <script>
  import { mapState, mapActions, mapGetters } from "vuex";
  import moment from "moment";
  import validations from "../../helpers/validations";
  import filepaths from "../../helpers/filepath";
  import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";
  export default {
    components: {
      subHeaderForAdmin
    },
    data() {
      return {
        ...validations,
        url: "",
        dialogName: "",
        doctorArr: ["Department", "Doctor"],
        dialogTitle: "",
        hospitalVisitDataDialog: false,
        maximizedToggle: true,
        visible: false,
      showPanDoc: false,
      small: false,
        Updated_dateTime: "",
        yesOrNoArr: ["Yes", "No"],
        mode: "list",
        filter: "",
        selected: [],

        uploadImage1: [],
        uploadImage2: [],
        uploadImage3: [],

        pagination: {
          rowsPerPage: 50,
          inputValue: "",
        },

        updateHospitalPartnerVisitDetails: {
                hospitalName: "",
                address: "",
                pincode: "",
                phoneNumber: "",
                emailId: "",
                keyPersonName: "",
                keyPersonMail: "",
                keyPersonPhone: "",
                managerName: "",
                managerMail: "",
                managerPhone: "",
                accomadation: "",
                accomadationName: "",
                outstationFlow: "",
                otherServices: "",
                thirdParty: "",
                thirdPartyName: "",
                asset: "",
                discussionBrief: "",
                image_upt1: "",
                image_upt2: "",
                image_upt3: "",

        },

        updateHospitalPartnerVisitKeyDetails: {
                departmentOrDoctor: "",
                doctorName: "",
                specialityName: "",
            },

            addKeyPersonsDataRow: [],

            // keyPersonsData: [],
            // keyPersonsDataColumns: [
            //     {
            //         name: "sno",
            //         label: "Sno",
            //         align: "center",
            //         headerClasses: "bg-indigo-10 text-white",
            //         field: "sno",
            //         headerStyle: {
            //             fontWeight: "bold",
            //         },
            //     },


            //     {

            //         label: "Department / Doctor",
            //         align: "center",
            //         headerClasses: "bg-indigo-10 text-white",
            //         field: "departmentType",
            //         headerStyle: {
            //             fontWeight: "bold",
            //         },
            //     },
            //     {
            //         align: "center",
            //         headerClasses: "bg-indigo-10 text-white",

            //         label: "Doctor Name",
            //         field: "doctorName",
            //         headerStyle: {
            //             fontWeight: "bold",
            //         },
            //     },
            //     {

            //         headerClasses: "bg-indigo-10 text-white",
            //         label: "Speciality Name",
            //         align: "center",
            //         field: "specialityName",
            //         headerStyle: {
            //             fontWeight: "bold",
            //         },
            //     },


            //     {
            //         name: "actions",
            //         headerClasses: "bg-indigo-10 text-white",
            //         label: "",
            //         field: "actions",
            //         align: "center",
            //         headerStyle: {
            //             fontWeight: "bold",
            //         },
            //     },


            // ],


            phoneinputRules: [
                (v) => !v || /^[0-9]{10}$/.test(v) || "Enter a Valid Phone Number",
            ],
            numberInputRules: [
                (v) => !v || /^[1-9]\d*$/.test(v) || "Enter a number greater than 0",
            ],
            emailRules: [
                (v) => !v || /.+@.+\..+/.test(v) || "Email must be valid",
            ],
            pincodeinputRules: [
                (v) => !v || /^[0-9]{6}$/.test(v) || "Enter a 6-digit PIN code",
            ],
            percentageRules: [
                (v) => !v || /^([1-9][0-9]|[1-9]100|100)$/.test(v) || "Enter a number between 10 and 100"
            ],

        headerValue: "Travel Visit  Details",
        excel_date: moment(new Date()).format("DD/MM/YYYY"),
      };


    },

    mounted() {
      this.$store.dispatch(
      "dropdown/loadNearHospitalNames",
      this.userDetails.zone
    );

        let payload = {
        city: this.userDetails.zone,
        userName: this.userDetails.name,
        };
        this.$store.dispatch("partners/loadHospitalpartnerData", payload);
    },
    computed: {


      ...mapState({
        userDetails() {
          let user = JSON.parse(localStorage.getItem("user")) || [];
          // console.log(user);
          return user;
        },
        hospitalOptions() {
          const otherOption = {
            near_hospital_name: "Others",
          };

          return [...this.nearHospital_Arr, otherOption];
        },

        nearHospital_Arr: (state) => state.dropdown.nearHospital,

        hospital_visit_columns: (state) => state.partners.hospital_visit_columns,
        keyPersonsDataRow: (state) => state.partners.keyPersonsDataRow,
        keyPersonsDataColumn: (state) => state.partners.keyPersonsDataColumn,
      }),

      ...mapGetters("partners", ["hospital_visit_data"]),




      formattedAccommodationData() {
        // Add a 's_no' property to each item in travel_visit_data
        //console.log(this.travel_visit_data)
        return this.hospital_visit_data.map((item, index) => {
          return {
            ...item,
            s_no: index + 1 // Serial number starts from 1
          };

        });
      },


    },

    methods: {

      ...mapActions("partners", ["loadHospitalpartnerData"]),

      ...mapActions("partners", ["updateHospitalPartnerVisitDetailsSaving"]),
      ...mapActions("partners", ["deleteParticularRowDetailsForHospital"]),
      ...mapActions("partners", ["verifyHospitalFieldVisitDetails"]),


      checkFileSize(files) {
        return files.filter((file) => file.size < 10048576);
      },

      onRejected() {
        this.$q.notify({
          type: "negative",
          message: `File Size should be less than (or) equals to 10 MB`,
        });
      },


      editHospitalVisitData(item) {
        console.log(item)

        let dateObject = new Date(item.updated_date_time);

        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';


        let formattedDate = `${dateObject.getDate()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getFullYear()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;

        this.Updated_dateTime = formattedDate;



        this.updateHospitalPartnerVisitDetails.s_no = item.s_no;
        this.updateHospitalPartnerVisitDetails.fieldVisitId = item.field_visit_id;
        this.updateHospitalPartnerVisitDetails.hospitalName = item.hospital_name;
        this.updateHospitalPartnerVisitDetails.address = item.address;
        this.updateHospitalPartnerVisitDetails.pincode = item.pincode;
        this.updateHospitalPartnerVisitDetails.phoneNumber = item.phone_number;
        this.updateHospitalPartnerVisitDetails.emailId = item.email;
        this.updateHospitalPartnerVisitDetails.keyPersonName = item.key_person_name;
        this.updateHospitalPartnerVisitDetails.keyPersonMail = item.key_person_mail;
        this.updateHospitalPartnerVisitDetails.keyPersonPhone = item.key_person_phone;
        this.updateHospitalPartnerVisitDetails.managerName = item.manager_name;
        this.updateHospitalPartnerVisitDetails.managerMail = item.manager_mail;
        this.updateHospitalPartnerVisitDetails.managerPhone = item.manager_phone;
        this.updateHospitalPartnerVisitDetails.accomadation = item.providing_accomadation;
        this.updateHospitalPartnerVisitDetails.accomadationName = item.accomadation_name;
        this.updateHospitalPartnerVisitDetails.outstationFlow = item.outstation_flow;
        this.updateHospitalPartnerVisitDetails.otherServices = item.other_services;
        this.updateHospitalPartnerVisitDetails.thirdParty = item.third_party;
        this.updateHospitalPartnerVisitDetails.thirdPartyName = item.third_party_name;
        this.updateHospitalPartnerVisitDetails.asset = item.asset;
        this.updateHospitalPartnerVisitDetails.discussionBrief = item.discussion_brief;

        if (item.hospital_image_1 != ""){
        this.updateHospitalPartnerVisitDetails.image_upt1 = item.hospital_image_1;
      } else {
        this.updateHospitalPartnerVisitDetails.image_upt1 = "";

      }

      if (item.hospital_image_2 != ""){
        this.updateHospitalPartnerVisitDetails.image_upt2 = item.hospital_image_2;
      } else {
        this.updateHospitalPartnerVisitDetails.image_upt2 = "";

      }


      if (item.hospital_image_3 != ""){
        this.updateHospitalPartnerVisitDetails.image_upt3 = item.hospital_image_3;
      } else {
        this.updateHospitalPartnerVisitDetails.image_upt3 = "";

      }

      this.uploadImage1 = item.hospital_image_1 ? new File([item.hospital_image_1], item.hospital_image_1) : null;
      this.uploadImage2 = item.hospital_image_2 ? new File([item.hospital_image_2], item.hospital_image_2) : null;
      this.uploadImage3 = item.hospital_image_3 ? new File([item.hospital_image_3], item.hospital_image_3) : null;



    //   console.log(this.uploadImage2)
    //   console.log(this.uploadImage3)
    this.$store.dispatch("partners/loadDepartmentsTable", this.updateHospitalPartnerVisitDetails);


        this.hospitalVisitDataDialog = true;
      },


      closehospitalTravelDialog() {
        this.hospitalVisitDataDialog = false;
      },

      onClickUpdate() {
      this.$refs.hospitalFormBasic1.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {

              console.log('ravi', this.updateHospitalPartnerVisitDetails)
              const formData = new FormData();

              //console.log(this.updateAccomadationPartnerVisitDetails.s_no);
              //formData.append("s_no", this.updateAccomadationPartnerVisitDetails.s_no);

              formData.append("update_image_1", this.uploadImage1);
              formData.append("update_image_2", this.uploadImage2);
              formData.append("update_image_3", this.uploadImage3);


              //console.log('kiran',this.updateHospitalPartnerVisitDetails)

              formData.append(
                "update_hospital_details",
                JSON.stringify(this.updateHospitalPartnerVisitDetails)
              );


              formData.append(
                "update_hospital_dept_details",
                JSON.stringify(this.addKeyPersonsDataRow)
              );

              this.updateHospitalPartnerVisitDetailsSaving(formData);
              //console.log("11update", formData);
              this.hospitalVisitDataDialog = false;


            })
            .onCancel(() => {
              //this.resetFiles();
              this.hospitalVisitDataDialog = true;
            });
        }
      });
    },

    showDocument(file, dialogName) {
      //console.log(file, dialogName)
          setTimeout(() => {
          this.showPanDoc = true;
          this.dialogTitle = `${dialogName}: ${file}`;
          this.url = filepaths.mhVisitFilePath + file;
          this.visible = false;
        }, 2000);
        this.small = true;
    },


    deleteRow(item) {
      let s_no = item.s_no;
      //console.log("s_no",item)
      this.deleteParticularRowDetailsForHospital(item)
      //console.log(this.roomCategoryRatesListRow)
      this.delet
      const index = this.keyPersonsDataRow.findIndex(item => item.s_no === s_no);
      console.log(index)
      if (index !== -1) {
        this.keyPersonsDataRow.splice(index, 1);

        // After deleting a row, update sno values to maintain sequential order
        this.updateSerialNumbers();
      }
    },

    updateSerialNumbers() {
      for (let i = 0; i < this.keyPersonsDataRow.length; i++) {
        this.keyPersonsDataRow[i].s_no = i + 1;
      }
    },


    onAddValues() {
      this.showTable = true;
      const newRatesDataObj = {
        index: this.keyPersonsDataRow.length + 1,
        employee_id: this.userDetails.account_id,
        employee_location: this.userDetails.zone,
        user_name: this.userDetails.user_name,
        city_id: this.userDetails.city_id,
        user_id: this.userDetails.sno,
        name: this.userDetails.name,
        field_visit_id: this.updateHospitalPartnerVisitDetails.fieldVisitId,
        key_type: this.updateHospitalPartnerVisitKeyDetails.departmentOrDoctor,
        doctor_name: this.updateHospitalPartnerVisitKeyDetails.doctorName,
        speciality_name: this.updateHospitalPartnerVisitKeyDetails.specialityName,

      };

      this.keyPersonsDataRow.push(newRatesDataObj)
      this.addKeyPersonsDataRow.push(newRatesDataObj)
      console.log(this.addKeyPersonsDataRow)

      this.updateHospitalPartnerVisitKeyDetails.departmentOrDoctor = "";
      this.updateHospitalPartnerVisitKeyDetails.doctorName = "";
      this.updateHospitalPartnerVisitKeyDetails.specialityName = "";




    },


    onClickVerify() {
        //console.log(this.updateAccomadationPartnerVisitDetails)
        this.$refs.accomadationFormBasic.validate().then((success) => {

      if (this.updateHospitalPartnerVisitDetails.hospitalName != "" && this.updateHospitalPartnerVisitDetails.address != "" && this.updateHospitalPartnerVisitDetails.pincode != "" && this.updateHospitalPartnerVisitDetails.phoneNumber != "" && this.updateHospitalPartnerVisitDetails.emailId != "" &&  this.updateHospitalPartnerVisitDetails.keyPersonName != "" && this.updateHospitalPartnerVisitDetails.keyPersonMail != "" && this.updateHospitalPartnerVisitDetails.keyPersonPhone != "" && this.updateHospitalPartnerVisitDetails.managerName != "" && this.updateHospitalPartnerVisitDetails.managerMail != "" && this.updateHospitalPartnerVisitDetails.managerPhone != "" && this.updateHospitalPartnerVisitDetails.accomadation != ""  && this.updateHospitalPartnerVisitDetails.outstationFlow != "" && this.updateHospitalPartnerVisitDetails.thirdParty != "" && this.updateHospitalPartnerVisitDetails.asset != "" && this.updateHospitalPartnerVisitDetails.discussionBrief != "" && this.updateHospitalPartnerVisitDetails.image_upt1 != ""  && this.updateHospitalPartnerVisitDetails.image_upt2 != "" && this.updateHospitalPartnerVisitDetails.image_upt3 != "" ) {
                this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Verify data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  this.verifyHospitalFieldVisitDetails(this.updateHospitalPartnerVisitDetails);
                })
                .onCancel(() => {
                  //this.resetFiles();
                  this.accomadationVisitDataDialog = true;
                })

            } else {
               this.$q.notify({
                  color: "negative",
                  position: "top",
                  message: `Please Fill All the Details...`,
                });

              }
            })
        },


    },

  };
  </script>

  <style scoped>
  @media (max-width: 767px) {
    #justify-sides {
      justify-content: center;
    }
  }

  @media (min-width: 767px) {
    #justify-sides {
      justify-content: start;
    }
  }



  .background1 {
  background-color: green;
  color: #ffffff;
  width: 90px;
  border-radius: 12px;
  padding-left: 22px;
  font-weight: bolder;

}

.background2 {
  background-color: orange;
  color: #000000;
  width: 90px;
  border-radius: 12px;
  padding-left: 14px;
  font-weight: bolder;

}

.light-gray-input {
  background-color: #eeeeff;
}






  </style>
