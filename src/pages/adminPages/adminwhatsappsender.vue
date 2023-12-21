<template>
  <q-page-container>
  <q-page class="q-pa-sm" style="padding-top: 20px">
    <subHeaderForAdmin />
    <q-toolbar class="bg-primary text-white rounded-borders q-mt-md q-mb-md">
      <q-toolbar-title class="text-subtitle1 text-weight-bold">
        Whatsapp Sender
      </q-toolbar-title>
    </q-toolbar>


    <!-- whatapp form-->

    <q-form class="AccomBkgDetails" ref="whatsappForm">
      <div class="row justify-content-center" style="justify-content: flex-start">
        <div class="col-sm-4 col-xs-12">
          <q-select
            class="q-mt-sm q-mr-sm"
            dense
            outlined
            label="Whatsapp Number's Options"
            hide-bottom-space
            label-color="black"
            v-model="whatappDetails.whatsappOptions"
            :options="whatsapp_no_of_Arr"
            @input="viewWhatsappSenderData()"
            >
          </q-select>
         <q-table
            :data="Whatsapp_Sender_Details"
            :columns="whatsapp_sender_columns"
            :rows-per-page-options="[10, 25, 50, 0]"
            dense
            separator="cell"
            class="q-mt-sm q-mr-sm"
            v-if="Whatsapp_Sender_Details.length>0 && showTableData && (whatappDetails.whatsappOptions!=null)"
           >
           <template v-slot:top-left>
              <q-checkbox label="Select All Numbers"
                @input="selectAllPhoneNumbers(Whatsapp_Sender_Details)"
                v-model="selectedAll"
                :checked="selectedAll"
                :value="selectedAll"
                >
              </q-checkbox>
           </template>
           <template v-slot:body-cell-actions="props">
             <q-td :props="props" class="q-gutter-sm">
                <q-checkbox  dense
                  :value="numbersSelectedCheckbox.includes(props.row.phone_number)"
                  :checked="numbersSelectedCheckbox.includes(props.row.phone_number)"
                  @input="toggleCheckbox(props.row.phone_number,Whatsapp_Sender_Details)"
                ></q-checkbox >
             </q-td>
           </template>
         </q-table>
         <div class="row">
            <q-input label="Enter Phone Number"  class="q-mt-sm q-mr-sm col-sm-8 col-xs-8"
              v-model="enterPhoneNumber"
              dense
              outlined
              hide-bottom-space
              mask="##########"
              label-color="black"
            >
            </q-input>

            <q-btn  class='q-mt-sm q-ml-sm col-sm-3 col-xs-3 cursor-pointer'  color="primary"
              label="Add"
              v-if="enterPhoneNumber!=null&&enterPhoneNumber.length===10&&whatappDetails.whatsappOptions!=null"
              style="height: 40px"
              @click="addPhoneNumber()"
            >
            </q-btn>

            <q-btn  class='q-mt-sm q-ml-sm col-sm-3 col-xs-3 cursor-pointer'  color="primary"
              label="Add"
              disable
              readonly
              v-else
              style="height: 40px"
              @click="addPhoneNumber()"
            >
            </q-btn>
          </div>
          <div v-if="whatappDetails.whatsappOptions!=null" class="q-mt-md q-mr-sm"
           style="font-weight: 800;"
           >
            <p>Total Number : <span style="color: rgb(27, 122, 43); font-size: large;">{{ Whatsapp_Sender_Details.length }}</span></p>
            <p>Selected Number : <span style="color: rgb(8, 11, 228); font-size: large;">{{ numbersSelectedCheckbox.length  }}</span></p>
            <p>Unselected Number : <span style="color: rgb(240, 56, 10); font-size: large;">{{ Whatsapp_Sender_Details.length-numbersSelectedCheckbox.length}}</span></p>
          </div>
         <!-- <div v-if="whatappDetails.whatsappOptions!=null" class="q-mt-md q-mr-sm"
           style="font-weight: 800;"
           >
            <p style="width: 22vw; display: flex; justify-content: space-between; align-items: center;">
              <span style="width: 10vw;">Total Number </span>
              <span style="width: 1vw; text-align: start;">:</span>
              <span style="color: rgb(27, 122, 43); font-size: large; width: 10vw; text-align: start;">{{ Whatsapp_Sender_Details.length }}</span></p>
            <p style="width: 22vw; display: flex; justify-content: space-between; align-items: center;">
              <span style="width: 10vw; ">Selected Number</span>
              <span style="width: 1vw; text-align: start;">:</span>
              <span style="color: rgb(8, 11, 228); font-size: large; width: 10vw; text-align: start;">{{ numbersSelectedCheckbox.length  }}</span></p>
            <p style="width: 22vw; display: flex; justify-content: space-between; align-items: center;">
              <span style="width: 10vw;">Unselected Number</span>
              <span style="width: 1vw; text-align:start;">:</span>
              <span style="color: rgb(240, 56, 10); font-size: large; width: 10vw; text-align: start;">{{ Whatsapp_Sender_Details.length-numbersSelectedCheckbox.length}}</span></p>
          </div> -->
        </div>
        <div class="col-sm-8 col-xs-12">
          <q-select
            v-if="!freezeValue && numbersSelectedCheckbox.length>0"
            class="q-mt-sm q-mr-sm"
            dense
            outlined
            label="campaign name"
            hide-bottom-space
            label-color="black"
            :options="Campaign_Options_Details"
            option-label="campaign_name"
            option-value="sno"
            v-model="campaignValue.campaignOption"
            @input="getCampaignData()"
          >
          </q-select>
          <q-select
            disable
            readonly
            v-if="(freezeValue || numbersSelectedCheckbox.length===0)"
            class="q-mt-sm q-mr-sm"
            dense
            outlined
            label="campaign name"
            hide-bottom-space
            label-color="black"
            :options="Campaign_Options_Details"
            option-label="campaign_name"
            option-value="sno"
            v-model="campaignValue.campaignOption"
            @input="getCampaignData()"
          >
          </q-select>
          <div class="q-mt-sm q-mr-sm q-pa-sm" style="border: 2px solid indigo; border-radius: 5px; display: flex; flex-direction: column;"
           v-if="Campaign_Details[0] !== undefined && Campaign_Details[0].campaign_text !== undefined && numbersSelectedCheckbox.length>0 && campaignValue.campaignOption!=null">
            <p>{{ Campaign_Details[0].campaign_text }}</p>
            <q-checkbox dense label="FREEZE"
              v-model="freezeValue"
              :value="freezeValue"
              :checked="freezeValue"
              style="justify-content: flex-end;"
            />
          </div>
       </div>
      </div>
      <div class="row q-pa-sm justify-center">
        <q-btn
          color="primary"
          label="send"
          @click="sendAllPhoneNumbers()"
        ></q-btn>
      </div>
    </q-form>

    <!-- <q-dialog v-model="phoneNumbersViewPage" no-backdrop-dismiss>
        <q-card style="width: 600px; height: 550px">
          <q-toolbar
            class="bg-primary text-white text-align rounded-borders"
            style="top: 0"
          >
            <q-toolbar-title style="text-align: center">
              <template v-slot:prepend>
                <q-icon name="inbox" />
              </template>
              PHONE NUMBERS & CAMPAIGN DETAILS
            </q-toolbar-title>
            <q-btn
              dark
              padding="none"
              class="justify-end"
              style="margin: -10px"
              icon="close"
              color="primary"
              @click="closePhoneNumbersDataDialog"
            >
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-toolbar>
          <q-card-section class="q-pt-none" style="margin-top: 30px">
            <q-form class="q-gutter-md" ref="phoneNumbersViewPage">
              <div>
                <div>
                  <p style="text-align: center; font-weight: 800;  text-transform: uppercase; text-decoration: underline;"
                  >
                   {{ whatappDetails.whatsappOptions }}
                  </p>
                </div>
                <ul
                style="display: flex; flex-wrap: wrap; border: 2px solid indigo; border-radius: 5px;"
                >
                  <li v-for="(phoneNumber,index) in numbersSelectedCheckbox" :key="index"
                  style="font-weight: 700;"
                  class="row q-pt-sm q-pb-sm q-pr-sm"
                  >{{ phoneNumber}}</li>
                </ul>
                <div style="border: 2px solid indigo; border-radius: 5px;"
                v-if="Campaign_Details[0] !== undefined && Campaign_Details[0].campaign_text !== undefined && numbersSelectedCheckbox.length>0">
                  <p class="row q-pa-sm">{{ Campaign_Details[0].campaign_text }}</p>
                </div>
              </div>
              <q-card-actions align="center" class="text-primary">
                <q-btn
                  class="text-weight-bolder"
                  @click="sendAllPhoneNumbers()"
                  label="SEND"
                  color="indigo-9"
                />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog> -->

  </q-page>
</q-page-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import validations from "../../helpers/validations";
import subHeaderForAdmin from "src/components/subHeaderForAdmin.vue";



export default {
  components:{
    subHeaderForAdmin
  },
  data() {
    return {
      ...validations,
      numbersSelectedCheckbox: [],
      whatappDetails: {
        whatsappOptions: null,
      },
      campaignValue:{
        campaignOption:null
      },
      whatsapp_no_of_Arr: ["All","Customer","Partners","Others"],
      freezeValue:false,
      selectedAll:false,
      enterPhoneNumber:null,
      // phoneNumbersViewPage:false,
      showTableData:true
    };
  },

  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      Whatsapp_Sender_Details:(state)=>state.master.Whatsapp_Sender_Details,
      whatsapp_sender_columns: (state) => state.master.whatsapp_sender_columns,
      Campaign_Details:(state)=>state.master.Campaign_Details,
      Campaign_Options_Details:(state)=>state.master.Campaign_Options_Details,
    }),
    ...mapGetters("master",["Whatsapp_Sender_Details"]),
    ...mapGetters("master",["Campaign_Details"]),
  },

  mounted() {
    this.$store.dispatch("master/getCampaignOptions");
  },

  methods: {
    ...mapActions("master", ["loadWhatappData"]),
    ...mapActions("master", ["loadCampaignData"]),
    ...mapActions("master", ["phoneNumbersAndCampaignOption"]),
    ...mapActions("master",["addNewPhoneNumber"]),


    viewWhatsappSenderData(){
      this.loadWhatappData(this.whatappDetails)
      this.selectedAll=false
      this.numbersSelectedCheckbox=[]
      this.showTableData=true
    },

    addPhoneNumber(){
        if (this.Whatsapp_Sender_Details.length===this.numbersSelectedCheckbox.length){
          this.selectedAll=true
        }
        const phoneNumber={phoneNumber:this.enterPhoneNumber}
        this.addNewPhoneNumber({phoneNumber,whatappDetails:this.whatappDetails})
        this.selectedAll=false
        this.enterPhoneNumber=null
    },

    getCampaignData(){
      this.loadCampaignData(this.campaignValue.campaignOption)
      this.freezeValue=true
    },

    toggleCheckbox(phoneNumber,phoneNumbersArray) {
      if (this.numbersSelectedCheckbox.includes(phoneNumber)) {
        // Remove the phone number if already selected
        const index = this.numbersSelectedCheckbox.indexOf(phoneNumber);
        this.numbersSelectedCheckbox.splice(index, 1);
        this.selectedAll=false
      } else {
        // Add the phone number if not selected
        this.numbersSelectedCheckbox.push(phoneNumber);
        if (this.numbersSelectedCheckbox.length===phoneNumbersArray.length){
          this.selectedAll=true
        }
      }
      console.log(this.numbersSelectedCheckbox)
    },

    selectAllPhoneNumbers(phoneNumbersArray){
      if (this.selectedAll){
        for (let phoneNumber of phoneNumbersArray){
            if (!this.numbersSelectedCheckbox.includes(phoneNumber.phone_number)) {
              this.numbersSelectedCheckbox.push(phoneNumber.phone_number);
            }
           }
       }else{
        this.numbersSelectedCheckbox=[]
       }
      console.log(this.numbersSelectedCheckbox)
    },

    sendAllPhoneNumbers(){
      if(this.numbersSelectedCheckbox.length===0 && this.campaignValue.campaignOption===null){
        this.$q
        .dialog({
          title: "Error",
          message: "Please Select atleast one Phone Number and Campaign Option?",
        })
      }else if (this.campaignValue.campaignOption===null || !this.freezeValue){
        this.$q
        .dialog({
          title: "Error",
          message: "Please Select Campaign Option?",
        })
      }else if (this.numbersSelectedCheckbox.length===0){
        this.$q
        .dialog({
          title: "Error",
          message: "Please Select atleast one Phone Number",
        })
      }else{
        this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Send data ?",
          cancel: true,
        })
        .onOk(() => {
          // this.openPhoneNumbersDataDialog()
          this.phoneNumbersAndCampaignOption({
            phoneNumbersArray:this.numbersSelectedCheckbox,
            campaignOption:this.Campaign_Details[0].campaign_text,
            whatsappOption:this.whatappDetails.whatsappOptions
          });
          this.reset()
        })
        .onCancel(() => {
          console.log("cancel")
        });
      }
     },

    //  closePhoneNumbersDataDialog(){
    //   this.phoneNumbersViewPage=false
    //  },

    //  openPhoneNumbersDataDialog(){
    //   this.phoneNumbersViewPage=true
    //  },

    // checkAllPhoneNumbers(){
    //     this.$q
    //     .dialog({
    //       title: "Confirm",
    //       message: "Do you want to Send data ?",
    //       cancel: true,
    //     })
    //     .onOk(() => {
    //       this.phoneNumbersAndCampaignOption({
    //         phoneNumbersArray:this.numbersSelectedCheckbox,
    //         campaignOption:this.Campaign_Details[0].campaign_text,
    //         whatsappOption:this.whatappDetails.whatsappOptions
    //       });
    //       this.closePhoneNumbersDataDialog()
    //       this.reset()
    //     })
    //     .onCancel(() => {
    //       console.log("cancel")
    //     });
    //  },

     reset(){
      this.numbersSelectedCheckbox= [],
      this.whatappDetails.whatsappOptions=null,
      this.selectedAll=false,
      this.enterPhoneNumber=null,
      this.showTableData=false
     }

    // validateMobileNumber(value) {
    //   if (/^0/.test(value)) {
    //     return "The first digit of your mobile number cannot be 0.";
    //   } else if (/^\d{10}$/.test(value) && value.length === 10) {
    //     return true;
    //   } else {
    //     return "Mobile number should be exactly 10 digits long.";
    //   }
    // },
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
