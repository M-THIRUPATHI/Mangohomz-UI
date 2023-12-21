<template>
    <q-page-container style="padding-top: 0px">
        <q-page class="q-pa-sm" style="padding-top: 120px">
            <subHeaderForAdmin />

            <q-toolbar class="bg-primary text-white rounded-borders q-mt-md q-mb-md">
                <!-- <q-btn flat round dense icon="mdi-account" /> -->
                <q-toolbar-title class="text-subtitle1 text-weight-bold" style="font-size: 18px">
                    Hospital Partner Basic Details
                </q-toolbar-title>
                <div class="row q-pa-md justify-end">
                    <q-btn color="secondary" label="View" style="font-weight: bold;" @click="onClickView" > </q-btn>
                </div>
            </q-toolbar>
            <q-form class="AccomBkgDetails" ref="hospitalFormBasic1">
                <div class="row" id="justify-sides">
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Hospital Name * " hide-bottom-space
                        style="width: 400px" label-color="black" v-model="hospitalPartnerVisitDetails.hospitalName"
                        :rules="[required('Hospital Name')]">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Address" hide-bottom-space
                        style="width: 400px" label-color="black" v-model="hospitalPartnerVisitDetails.address"
                        :rules="[required('Address')]">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Pin Code" hide-bottom-space
                        style="width: 400px" label-color="black" v-model="hospitalPartnerVisitDetails.pincode"
                        :rules="pincodeinputRules">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Hospital Contact Number"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="hospitalPartnerVisitDetails.phoneNumber" :rules="phoneinputRules">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Hospital Email Id" hide-bottom-space
                        style="width: 400px" label-color="black" v-model="hospitalPartnerVisitDetails.emailId"
                        :rules="emailRules">
                    </q-input>

                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Key Person Name of the Hospital"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="hospitalPartnerVisitDetails.keyPersonName">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Key Person  Mail Id" hide-bottom-space
                        style="width: 400px" label-color="black" v-model="hospitalPartnerVisitDetails.keyPersonMail"
                        :rules="emailRules">
                    </q-input>

                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Key Person Phone Number"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="hospitalPartnerVisitDetails.keyPersonPhone" :rules="phoneinputRules">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Hospital Help Line Manager Name"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="hospitalPartnerVisitDetails.managerName">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Hospital Help Line Manager Mail Id"
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="hospitalPartnerVisitDetails.managerMail" :rules="emailRules">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined
                        label="Hospital Help Line Manager Phone Number" hide-bottom-space style="width: 400px"
                        label-color="black" v-model="hospitalPartnerVisitDetails.managerPhone" :rules="phoneinputRules">
                    </q-input>
                    <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined
                        label="Is Hospital Providing Any Accomadation ?" hide-bottom-space style="width: 400px"
                        label-color="black" :options="yesOrNoArr" v-model="hospitalPartnerVisitDetails.accomadation">
                    </q-select>
                    <q-input v-if="hospitalPartnerVisitDetails.accomadation == 'Yes'" class="row col-3 q-mt-sm q-mr-sm light-gray-input"
                        dense outlined label="Accomadation Name" hide-bottom-space style="width: 400px" label-color="black"
                        v-model="hospitalPartnerVisitDetails.accomadationName">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined
                        label="Flow of Outstation Patients Approximate per day ?" hide-bottom-space style="width: 400px"
                        label-color="black" v-model="hospitalPartnerVisitDetails.outstationFlow">
                    </q-input>


                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Other Services Hospital is Provided? "
                        hide-bottom-space style="width: 400px" label-color="black"
                        v-model="hospitalPartnerVisitDetails.otherServices">
                    </q-input>
                    <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined
                        label="Is Any Third Party tieup for patient accomadation ?" hide-bottom-space style="width: 400px"
                        label-color="black" :options="yesOrNoArr" v-model="hospitalPartnerVisitDetails.thirdParty">
                    </q-select>
                    <q-input v-if="hospitalPartnerVisitDetails.thirdParty == 'Yes'" class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense
                        outlined label="Third Party Name" hide-bottom-space style="width: 400px" label-color="black"
                        v-model="hospitalPartnerVisitDetails.thirdPartyName">
                    </q-input>

                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined
                        label="Any Person of the Hospital who can be our Asset ?" hide-bottom-space style="width: 400px"
                        label-color="black" v-model="hospitalPartnerVisitDetails.asset">
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
                        v-model="hospitalPartnerVisitKeyDetails.departmentOrDoctor">
                    </q-select>
                    <q-input v-if="hospitalPartnerVisitKeyDetails.departmentOrDoctor == 'Doctor'"
                        class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Doctor Name" hide-bottom-space
                        style="width: 360px" label-color="black" v-model="hospitalPartnerVisitKeyDetails.doctorName">
                    </q-input>
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Speciality Name" hide-bottom-space
                        style="width: 360px" label-color="black" v-model="hospitalPartnerVisitKeyDetails.specialityName">
                    </q-input>


                </div>
                <div class="row q-pa-md justify-end">
                    <q-btn color="primary" label="ADD" @click="onAddValues"> </q-btn>
                </div>
            </q-form>

            <q-table style="font-family: verdana" dense separator="cell" wrap-cells v-if="showTable" :data="keyPersonsData"
                :columns="keyPersonsColumn" :rows-per-page-options="[]" row-key="sno" no-data-label="No test names added">

                <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                        <q-btn @click="deleteRow(props.row.sno)" color="negative" dense flat round icon="delete"
                            class="q-ml-xs" />
                    </q-td>
                </template>

            </q-table>





            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;"><q-icon name=""
                        color="black" size="1.5em" />Documents
                </q-bar>
            </div>

            <!--BOOKING ALL MODULE START-->
            <q-card-actions>
                <div class="row  items-start q-gutter-md" id="justify-sides">


                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                        hide-bottom-space v-model="hospitalImage1" type="file"
                        accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
                            files = val;
                        }
                            " hint="Hospital Image 1" :rules="[(val) => val || 'Please select file']"
                        :filter="checkFileSize" @rejected="onRejected">
                        <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                        </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                        hide-bottom-space v-model="hospitalImage2" type="file"
                        accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
                            files = val;
                        }
                            " hint="Hospital Image 2" :rules="[(val) => val || 'Please select file']"
                        :filter="checkFileSize" @rejected="onRejected">
                        <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                        </template>
                    </q-file>

                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                        hide-bottom-space v-model="hospitalImage3" type="file"
                        accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
                            files = val;
                        }
                            " hint="Hospital Image 3" :rules="[(val) => val || 'Please select file']"
                        :filter="checkFileSize" @rejected="onRejected">
                        <template v-slot:prepend>
                            <q-icon name="attach_file" color="white" />
                        </template>
                    </q-file>



                </div>
            </q-card-actions>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
                        size="1.5em" />Discussion Brief
                </q-bar>
            </div>
            <q-form class="AccomBkgDetails" ref="hospitalFormBasic">
                <div class="row" id="justify-sides">
                    <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Discussion Brief" hide-bottom-space
                        style="width: 90vw" label-color="black" type="textarea"
                        v-model="hospitalPartnerVisitDetails.discussionBrief">
                    </q-input>


                </div>
            </q-form>

            <div class="row q-pa-md justify-end">
                <q-btn color="secondary" label="Submit" @click="onHospitalSubmit">
                </q-btn>
            </div>





        </q-page>
    </q-page-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
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
            showTable: false,
            yesOrNoArr: ['Yes', 'No'],
            doctorArr: ["Department", "Doctor"],
            filter: "",
            selected: [],
            mode: "list",
            hospitalImage1: [],
            hospitalImage2: [],
            hospitalImage3: [],






            hospitalPartnerVisitDetails: {
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

            },

            hospitalPartnerVisitKeyDetails: {
                departmentOrDoctor: "",
                doctorName: "",
                specialityName: "",
            },

            fieldVisitHospitalArray: [],


            keyPersonsData: [],
            keyPersonsColumn: [
                {
                    name: "sno",
                    label: "Sno",
                    align: "center",
                    headerClasses: "bg-indigo-10 text-white",
                    field: "sno",
                    headerStyle: {
                        fontWeight: "bold",
                    },
                },


                {

                    label: "Department / Doctor",
                    align: "center",
                    headerClasses: "bg-indigo-10 text-white",
                    field: "departmentType",
                    headerStyle: {
                        fontWeight: "bold",
                    },
                },
                {
                    align: "center",
                    headerClasses: "bg-indigo-10 text-white",

                    label: "Doctor Name",
                    field: "doctorName",
                    headerStyle: {
                        fontWeight: "bold",
                    },
                },
                {

                    headerClasses: "bg-indigo-10 text-white",
                    label: "Speciality Name",
                    align: "center",
                    field: "specialityName",
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
        };
    },

    mounted() {

        this.$store.dispatch("dropdown/loadNearHospitalNames", this.userDetails.zone);

    },
    computed: {
        ...mapState({
            userDetails() {
                let user = JSON.parse(localStorage.getItem("user")) || [];
                // console.log(user)
                return user;
            },
            hospitalOptions() {
                const otherOption = {
                    near_hospital_name: 'Others',
                };

                return [...this.nearHospital_Arr, otherOption];
            },


            nearHospital_Arr: (state) => state.dropdown.nearHospital,
        }),
    },

    methods: {

        ...mapActions("dropdown", ["loadNearHospitalNames"]),
        ...mapActions("partners", ["hospitalPartnerVisitDetailsSaving"]),

        checkFileSize(files) {
            return files.filter((file) => file.size < 10048576);
        },

        onRejected() {
            this.$q.notify({
                type: "negative",
                message: `File Size should be less than (or) equals to 10 MB`,
            });
        },


        onAddValues() {
            this.showTable = true;
            const newKeyObj = {
                sno: this.keyPersonsData.length + 1,
                account_id: this.userDetails.account_id,
                name: this.userDetails.name,
                employee_location: this.userDetails.zone,
                s_no: this.userDetails.sno,
                user_name: this.userDetails.user_name,
                city: this.userDetails.city_id,
                departmentType: this.hospitalPartnerVisitKeyDetails.departmentOrDoctor,
                doctorName: this.hospitalPartnerVisitKeyDetails.doctorName,
                specialityName: this.hospitalPartnerVisitKeyDetails.specialityName,
            }

            this.keyPersonsData.push(newKeyObj)
            this.fieldVisitHospitalArray.push(newKeyObj)

            //console.log(this.keyPersonsData)
            this.hospitalPartnerVisitKeyDetails.departmentOrDoctor = "";
            this.hospitalPartnerVisitKeyDetails.doctorName = "";
            this.hospitalPartnerVisitKeyDetails.specialityName = "";

        },

        onHospitalSubmit() {
            this.$refs.hospitalFormBasic1.validate().then((success) => {
                if (success) {
                    this.$q
                        .dialog({
                            title: "Confirm",
                            message: "Do you want to Submit data ?",
                            cancel: true,
                            persistent: true,
                        })
                        .onOk(() => {

                            this.hospitalPartnerVisitDetails.employee_id = this.userDetails.account_id;
                            this.hospitalPartnerVisitDetails.employee_name = this.userDetails.name;
                            this.hospitalPartnerVisitDetails.employee_location = this.userDetails.zone;
                            this.hospitalPartnerVisitDetails.user_id = this.userDetails.sno;
                            this.hospitalPartnerVisitDetails.user_name = this.userDetails.user_name;
                            this.hospitalPartnerVisitDetails.city_id = this.userDetails.city_id;

                            //console.log("uuuuu", this.hospitalPartnerVisitDetails);
                            const formData = new FormData();

                            formData.append("upload_hospital_image_1", this.hospitalImage1);
                            formData.append("upload_hospital_image_2", this.hospitalImage2);
                            formData.append("upload_hospital_image_3", this.hospitalImage3);


                            //console.log(formData);

                            formData.append(
                                "hosptial_fieldvisit_details",
                                JSON.stringify(this.hospitalPartnerVisitDetails)
                            );

                            formData.append(
                                "hosptial_fieldvisit_key_details",
                                JSON.stringify(this.fieldVisitHospitalArray)
                            );

                            // formData.append(
                            //     "accomadation_rates",
                            //     JSON.stringify(this.fieldVisitRatesDataArray)
                            // );

                            //console.log(this.fieldVisitRatesDataArray)

                            //console.log(formData);
                            this.hospitalPartnerVisitDetailsSaving(formData);

                            this.resetFiles();

                        })
                        .onCancel(() => {
                            this.resetFiles();
                        });
                }
            });
        },

        onClickView() {
            this.$router.push("/viewHospitalPartnerData");
        },


        resetFiles() {
            this.hospitalPartnerVisitDetails.hospitalName = "";
            this.hospitalPartnerVisitDetails.address = "";
            this.hospitalPartnerVisitDetails.pincode = "";
            this.hospitalPartnerVisitDetails.phoneNumber = "";
            this.hospitalPartnerVisitDetails.emailId = "";
            this.hospitalPartnerVisitDetails.nearHospital = "";
            this.hospitalPartnerVisitDetails.otherHospital = "";
            this.hospitalPartnerVisitDetails.ownerName = "";
            this.hospitalPartnerVisitDetails.ownerMail = "";
            this.hospitalPartnerVisitDetails.ownerPhone = "";
            this.hospitalPartnerVisitDetails.managerName = "";
            this.hospitalPartnerVisitDetails.managerMail = "";
            this.hospitalPartnerVisitDetails.managerPhone = "";
            this.hospitalPartnerVisitDetails.totalVehicles = "";
            this.hospitalPartnerVisitDetails.fiveSeaters = "";
            this.hospitalPartnerVisitDetails.sevenSeaters = "";
            this.hospitalPartnerVisitDetails.collected = "";
            this.hospitalPartnerVisitDetails.pending = "";

            this.uploadPanCard = [];
            this.uploadGst = [];
            this.uploadCancelCheque = [];
            this.certificateFSSAI = [];
            this.vehicle1 = [];
            this.vehicle2 = [];
            this.vehicle3 = [];
            this.vehicle4 = [];

        },


        deleteRow(sno) {
          //console.log(sno)
          const index = this.keyPersonsData.findIndex(item => item.sno === sno);
          if (index !== 0) {
            this.keyPersonsData.splice(index, 1);

            // After deleting a row, update sno values to maintain sequential order
            this.updateSerialNumbers();
          }
        },

        updateSerialNumbers() {
          for (let i = 0; i < this.keyPersonsData.length; i++) {
            this.keyPersonsData[i].sno = i + 1;
          }
        },


        // ...mapActions("account", ["getMonthwiseAccBookings"]),
        ...mapActions("partners", ["travelPartnerVisitDetailsSaving"]),



    },
};
</script>

<style scoped>


.light-gray-input {
  background-color: #eeeeff;
}


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
</style>
