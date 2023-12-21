<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 120px">
      <subHeaderForAdmin />

      <q-toolbar class="bg-primary text-white rounded-borders q-mt-sm q-mb-sm" style="padding-top:0px;">
        <!-- //<q-btn flat round dense icon="mdi-account" /> -->
        <q-toolbar-title class="text-subtitle1 text-weight-bold" style="font-size: 18px;">
          Accommodation Partner Details
        </q-toolbar-title>
        <div class="row q-pa-md justify-end">
          <q-btn color="secondary" label="View" text-bold="bold" style="font-weight: bolder" @click="onClickView" size="md"> </q-btn>
        </div>
      </q-toolbar>

      <q-form class="AccomBkgDetails" ref="rkFormBasic">
        <div class="row" id="justify-sides">
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Property Name *" hide-bottom-space
            label-color="black" style="width: 360px" v-model="accomadationPartnerVisitDetails.propertyName"
            :rules="[required('Property Name')]">
          </q-input>

          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Address *" hide-bottom-space
            style="width: 360px;" label-color="black" bg-color="LightGray" v-model="accomadationPartnerVisitDetails.address"
            :rules="[required('Address')]">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Pin Code "
            hide-bottom-space style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.pincode"
            :rules="pincodeinputRules">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label=" Property WhatsApp Number " hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.phoneNumber"
            :rules="phoneinputRules">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Property Email Id" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.emailId"
            :rules="emailRules">
          </q-input>
          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Near Hospital *" hide-bottom-space
            style="width: 360px" label-color="black" option-label="near_hospital_name" option-value="near_hospital_name"
            v-model="accomadationPartnerVisitDetails.nearHospital" :options="hospitalOptions"
            :rules="[required('near Hospital')]">
          </q-select>
          <q-input v-if="accomadationPartnerVisitDetails.nearHospital.near_hospital_name ==
            'Others'
            " class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Other Hospital Name" hide-bottom-space
            style="width: 360px; display: block" label-color="black"
            v-model="accomadationPartnerVisitDetails.otherHospital">
          </q-input>

          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Owner Name" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.ownerName">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Owner Email Id" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.ownerMail"
            :rules="emailRules">
          </q-input>


          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Owner WhatsApp Number " hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.ownerPhone"
            :rules="phoneinputRules">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Manager Name" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.managerName">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Manager Email Id " hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.managerMail"
            :rules="emailRules">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Manager WhatsApp Number " hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.managerPhone"
            :rules="phoneinputRules">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Total Number Of Rooms" hide-bottom-space
            fill-input style="width: 360px" label-color="black" option-label="city"
            v-model="accomadationPartnerVisitDetails.totalRooms">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="No of AC Rooms " hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.AC">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="No of Non AC Rooms" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.nonAc">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Property is in Which Floor" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.whichFloor">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="How far from the Hospital? " hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.farDistance">
          </q-input>
          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined
            label="Are they Associated with any other Aggregator? " hide-bottom-space style="width: 360px"
            label-color="black" :options="yesOrNoArr" v-model="accomadationPartnerVisitDetails.aggregator">
          </q-select>
          <q-input v-if="accomadationPartnerVisitDetails.aggregator == 'Yes'" class="row col-3 q-mt-sm q-mr-sm" dense
            outlined label="Aggregator Name" hide-bottom-space style="width: 360px" label-color="black"
            v-model="accomadationPartnerVisitDetails.aggregatorName">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Check In Time" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.checkIn">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Check Out Time" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.checkOut">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined multiple label="Location" hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitDetails.location">
          </q-input>


        </div>
      </q-form>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
            size="1.5em" />Amenities
        </q-bar>
      </div>
      <q-form class="AccomBkgDetails" ref="accomadationFormBasic">
        <div class="row" id="justify-sides">
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="What Type of Property? " hide-bottom-space
            style="width: 360px" label-color="black" :options="propertyTypeArr"
            v-model="accomadationPartnerVisitDetails.propertyType">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Parking" hide-bottom-space
            style="width: 360px" label-color="black" :options="yesOrNoArr"
            v-model="accomadationPartnerVisitDetails.parking">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Lift" hide-bottom-space style="width: 360px"
            label-color="black" :options="yesOrNoArr" v-model="accomadationPartnerVisitDetails.lift">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="CCTv" hide-bottom-space style="width: 360px"
            label-color="black" :options="yesOrNoArr" v-model="accomadationPartnerVisitDetails.cctv">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Ramp" hide-bottom-space style="width: 360px"
            label-color="black" :options="yesOrNoArr" v-model="accomadationPartnerVisitDetails.ramp">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Restaurant" hide-bottom-space
            style="width: 360px" label-color="black" :options="yesOrNoArr"
            v-model="accomadationPartnerVisitDetails.restaurant">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Kitchen Options" hide-bottom-space
            style="width: 360px" label-color="black" :options="selfKitchenArr"
            v-model="accomadationPartnerVisitDetails.selfKitchenOption">
          </q-select>

          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="TV" hide-bottom-space style="width: 360px"
            label-color="black" :options="yesOrNoArr" v-model="accomadationPartnerVisitDetails.Tv">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Wifi" hide-bottom-space style="width: 360px"
            label-color="black" :options="yesOrNoArr" v-model="accomadationPartnerVisitDetails.Wifi">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Hot Water" hide-bottom-space
            style="width: 360px" label-color="black" :options="yesOrNoArr"
            v-model="accomadationPartnerVisitDetails.hotWater">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Fridge" hide-bottom-space style="width: 360px"
            label-color="black" :options="yesOrNoArr" v-model="accomadationPartnerVisitDetails.fridge">
          </q-select>


        </div>
      </q-form>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
            size="1.5em" />Rates
        </q-bar>
      </div>
      <q-form class="AccomBkgDetails" ref="accomadationFormBasic">
        <div class="row" id="justify-sides">
          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Room Category " hide-bottom-space
            style="width: 360px" label-color="black" option-label="room_category" option-value="room_category" :options="roomCategoryArr"
            v-model="accomadationPartnerVisitRates.roomCategory">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="AC / Non AC" hide-bottom-space
            style="width: 360px" label-color="black" :options="acNonAcArr"
            v-model="accomadationPartnerVisitRates.acRates">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Type Of Sharing" hide-bottom-space
            style="width: 360px" label-color="black" :options="sharingTypes"
            v-model="accomadationPartnerVisitRates.sharingTypes">
          </q-select>
          <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Type of Breakfast" hide-bottom-space
            style="width: 360px" label-color="black" :options="breakFastTypes"
            v-model="accomadationPartnerVisitRates.breakFastTypes">
          </q-select>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Rate " hide-bottom-space
            style="width: 360px" label-color="black" v-model="accomadationPartnerVisitRates.Rates"
            :rules="numberInputRules">
          </q-input>
        </div>
        <div class="row q-pa-md justify-end">
          <q-btn color="primary" label="ADD" @click="onAddValues"> </q-btn>
        </div>
      </q-form>

      <q-table
          style="font-family: verdana"
          dense
          separator="cell"
          wrap-cells
          v-if="showTable"
          :data="ratesData"
          :columns="ratesColumn"
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

        </q-table>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
            size="1.5em" />Discussion Brief
        </q-bar>
      </div>
      <q-form class="AccomBkgDetails" ref="accomadationFormBasic">
        <div class="row" id="justify-sides">
          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Discussion Brief" hide-bottom-space
            style="width: 90vw" label-color="black" type="textarea"
            v-model="accomadationPartnerVisitDetails.discussionBrief">
          </q-input>
          <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="MH Share Revenue ( % )" hide-bottom-space
            style="width: 90vw" label-color="black" v-model="accomadationPartnerVisitDetails.shareRevenue"
            :rules="percentageRules">
          </q-input>
        </div>
      </q-form>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;">Documents Upload
          <!-- <q-space />
          <q-space /> -->

        </q-bar>
      </div>

      <!--BOOKING ALL MODULE START-->
      <q-card-actions>
        <div class="row items-start q-gutter-md" id="justify-sides">
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            v-model="uploadPanCard" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            hide-bottom-space @update:model-value="(val) => {
              files = val;
            }
              " hint="Upload Pan Card " :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="uploadGst" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Upload GST" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="uploadCancelCheque" type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
              files = val;
            }
              " hint="Cancel Cheque" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>


        </div>
      </q-card-actions>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;">Property Photographs

        </q-bar>
      </div>

      <q-card-actions>
        <div class="row items-start q-gutter-md" id="justify-sides">


          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="Facade" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Property Facade 1 " :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="Facade2" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Property Facade 2" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="Lobby1" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Property Lobby 1" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="Lobby2" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Property Lobby 2 " :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="restaurant" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Restaurant " :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="selfKitchen" type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
              files = val;
            }
              " hint="Self Kitchen" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>

        </div>
      </q-card-actions>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px">Property Room Photographs

        </q-bar>
      </div>

      <q-card-actions>
        <div class="row items-start q-gutter-md" id="justify-sides">

          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="room1" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Type 1 Room" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="room1Bathroom" type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
              files = val;
            }
              " hint="Type 1  Bathroom " :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="room2" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Type 2 Room" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="room2Bathroom" type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
              files = val;
            }
              " hint="Type 2 Bathroom" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="room3" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
            @update:model-value="(val) => {
              files = val;
            }
              " hint="Type 3 Room" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
          <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
            hide-bottom-space v-model="room3Bathroom" type="file"
            accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
              files = val;
            }
              " hint="Type 3 Bathroom" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
            @rejected="onRejected">
            <template v-slot:prepend>
              <q-icon name="attach_file" color="white" />
            </template>
          </q-file>
        </div>
      </q-card-actions>



      <div class="row q-pa-md justify-end">
        <q-btn color="secondary" label="Submit" @click="onAccSubmit" style="margin-right: 10px; font-weight: bold;"> </q-btn>

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
      uniqueNum: 0,
      yesOrNoArr: ["Yes", "No"],
      selfKitchenArr: ["Free Self kitchen (veg)", "Free Self Kitchen (veg / non-veg)", "Paid Self Kitchen (veg)", "Paid Self Kitchen (veg / non-veg)", "No Kitchen Facility Available"],
      propertyTypeArr: ["Hotel", "Guest House", "Shared House", "PG", "Individual Apartment"],
      acNonAcArr: ['AC',"Non AC"],
      sharingTypes: ['One Sharing', 'Two Sharing', 'Three Sharing'],
      breakFastTypes: ['With Breakfast', 'Without Breakfast'],
      Rates: "",
      ratesData: [],
      ratesColumn: [
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

          label: "Room Category",
          align: "center",
          headerClasses: "bg-indigo-10 text-white",
          field: "roomCategory",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {
          align: "center",
          headerClasses: "bg-indigo-10 text-white",

          label: "AC / Non AC",
          field: "acRates",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {

          headerClasses: "bg-indigo-10 text-white",
          label: "Sharing Types",
          align: "center",
          field: "sharingTypes",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {

          headerClasses: "bg-indigo-10 text-white",
          label: "BreakFast Types",
          align: "center",
          field: "breakFastTypes",
          headerStyle: {
            fontWeight: "bold",
          },
        },
        {

          headerClasses: "bg-indigo-10 text-white",
          label: "Rates",
          align: "center",
          field: "Rates",
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
      filter: "",
      selected: [],
      mode: "list",
      uploadPanCard: [],
      uploadGst: [],
      uploadCancelCheque: [],
      Facade: [],
      Facade2: [],
      Lobby1: [],
      Lobby2: [],
      restaurant: [],
      selfKitchen: [],
      room1: [],
      room1Bathroom: [],
      room2: [],
      room2Bathroom: [],
      room3: [],
      room3Bathroom: [],
      index: 0,

      accomadationPartnerVisitDetails: {

        propertyName: "",
        address: "",
        pincode: "",
        phoneNumber: "",
        emailId: "",
        nearHospital: "",
        otherHospital: "",
        ownerName: "",
        ownerMail: "",
        ownerPhone: "",
        managerName: "",
        managerMail: "",
        managerPhone: "",
        totalRooms: "",
        AC: "",
        nonAc: "",
        whichFloor: "",
        farDistance: "",
        aggregator: "",
        aggregatorName: "",
        checkIn: "",
        checkOut: "",
        location: "",
        propertyType: "",
        parking: "",
        lift: "",
        cctv: "",
        ramp: "",
        restaurant: "",
        selfKitchenOption: "",
        Tv: "",
        Wifi: "",
        hotWater: "",
        fridge: "",
        discussionBrief: "",
        shareRevenue: "",
      },

      accomadationPartnerVisitRates: {

        roomCategory: "",
        acRates: "",
        sharingTypes: "",
        Rates: "",
        breakFastTypes: "",
        fieldVisitRatesDataObj: {},
      },

      fieldVisitRatesDataArray: [],

      phoneinputRules: [
        (v) =>  !v || /^[0-9]{10}$/.test(v) || "Enter a Valid Phone Number",
      ],
      numberInputRules: [
        (v) => !v || /^[1-9]\d*$/.test(v) || "Enter a number greater than 0",
      ],
      emailRules: [
        (v) =>  !v || /.+@.+\..+/.test(v) || "Email must be valid",
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
    this.$store.dispatch(
      "dropdown/loadNearHospitalNames",
      this.userDetails.zone
    );
    this.$store.dispatch(
      "dropdown/loadRoomCategories",
      this.userDetails.zone
    );
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        //console.log(user);
        return user;
      },
      hospitalOptions() {
        const otherOption = {
          near_hospital_name: "Others",
        };

        return [...this.nearHospital_Arr, otherOption];
      },

      // categoriesOptions() {
      //   const otherOption = {
      //     room_category: "Others",
      //   };

      //   return [...this.roomCategoryArr, otherOption];
      // },

      nearHospital_Arr: (state) => state.dropdown.nearHospital,
      roomCategoryArr: (state) => state.dropdown.roomCategory,

    }),
  },

  methods: {
    ...mapActions("dropdown", ["loadNearHospitalNames"]),
    ...mapActions("partners", ["accomadationPartnerVisitDetailsSaving"]),
    ...mapActions("dropdown", ["loadRoomCategories"]),

    checkFileSize(files) {
      return files.filter((file) => file.size < 10048576);
    },

    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 10 MB`,
      });
    },


    onAccSubmit() {
      this.$refs.rkFormBasic.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.uniqueNum = this.uniqueNum + 1 ;
              //console.log(this.uniqueNum)


              //console.log(this.accomadationPartnerVisitDetails);
              this.accomadationPartnerVisitDetails.employee_id = this.userDetails.account_id;
              this.accomadationPartnerVisitDetails.employee_name = this.userDetails.name;
              this.accomadationPartnerVisitDetails.employee_location = this.userDetails.zone;
              this.accomadationPartnerVisitDetails.user_id = this.userDetails.sno;
              this.accomadationPartnerVisitDetails.user_name = this.userDetails.user_name;
              this.accomadationPartnerVisitDetails.city_id = this.userDetails.city_id;








              const formData = new FormData();

              formData.append("upload_pan_card", this.uploadPanCard);
              formData.append("upload_gst", this.uploadGst);
              formData.append("upload_cancel_cheque", this.uploadCancelCheque);
              formData.append("upload_facade", this.Facade);
              formData.append("upload_facade2", this.Facade2);
              formData.append("upload_lobby1", this.Lobby1);
              formData.append("upload_lobby2", this.Lobby2);
              formData.append("upload_restaurant", this.restaurant);
              formData.append("upload_self_kitchen", this.selfKitchen);
              formData.append("upload_room1", this.room1);
              formData.append("upload_room1Bathroom", this.room1Bathroom);
              formData.append("upload_room2", this.room2);
              formData.append("upload_room2Bathroom", this.room2Bathroom);
              formData.append("upload_room3", this.room3);
              formData.append("upload_room3Bathroom", this.room3Bathroom);

              //console.log(formData);

              formData.append(
                "accomadation_details",
                JSON.stringify(this.accomadationPartnerVisitDetails)
              );

              formData.append(
                "accomadation_rates",
                JSON.stringify(this.fieldVisitRatesDataArray)
              );

              //console.log(this.fieldVisitRatesDataArray)

              //console.log(formData);
              this.accomadationPartnerVisitDetailsSaving(formData);
             this.resetFiles();
            })
            .onCancel(() => {
              //this.resetFiles();
            });
        }
      });
    },

    resetFiles() {
      this.accomadationPartnerVisitDetails.propertyName = "";
      this.accomadationPartnerVisitDetails.address = "";
      this.accomadationPartnerVisitDetails.phoneNumber = "";
      this.accomadationPartnerVisitDetails.emailId = "";
      this.accomadationPartnerVisitDetails.pincode = "";
      this.accomadationPartnerVisitDetails.nearHospital = "";
      this.accomadationPartnerVisitDetails.otherHospital = "";
      this.accomadationPartnerVisitDetails.ownerName = "";
      this.accomadationPartnerVisitDetails.ownerMail = "";
      this.accomadationPartnerVisitDetails.ownerPhone = "";
      this.accomadationPartnerVisitDetails.managerName = "";
      this.accomadationPartnerVisitDetails.managerMail = "";
      this.accomadationPartnerVisitDetails.managerPhone = "";
      this.accomadationPartnerVisitDetails.totalRooms = "";
      this.accomadationPartnerVisitDetails.AC = "";
      this.accomadationPartnerVisitDetails.nonAc = "";
      this.accomadationPartnerVisitDetails.whichFloor = "";
      this.accomadationPartnerVisitDetails.farDistance = "";
      this.accomadationPartnerVisitDetails.aggregator = "";
      this.accomadationPartnerVisitDetails.aggregatorName = "";
      this.accomadationPartnerVisitDetails.checkIn = "";
      this.accomadationPartnerVisitDetails.checkOut = "";
      this.accomadationPartnerVisitDetails.location = "";
      this.accomadationPartnerVisitDetails.propertyType = "";
      this.accomadationPartnerVisitDetails.parking = "";
      this.accomadationPartnerVisitDetails.lift = "";
      this.accomadationPartnerVisitDetails.cctv = "";
      this.accomadationPartnerVisitDetails.ramp = "";
      this.accomadationPartnerVisitDetails.restaurant = "";
      this.accomadationPartnerVisitDetails.selfKitchenOption = "";
      this.accomadationPartnerVisitDetails.Tv = "";
      this.accomadationPartnerVisitDetails.Wifi = "";
      this.accomadationPartnerVisitDetails.hotWater = "";
      this.accomadationPartnerVisitDetails.fridge = "";
      this.accomadationPartnerVisitDetails.discussionBrief = "";
      this.accomadationPartnerVisitDetails.shareRevenue = "";

      this.uploadPanCard = [];
      this.uploadGst = [];
      this.uploadCancelCheque = [];
      this.Facade = [];
      this.Facade2 = [];
      this.Lobby1 = [];
      this.Lobby2 = [];
      this.restaurant = [];
      this.selfKitchen = [];
      this.room1 = [];
      this.room1Bathroom = [];
      this.room2 = [];
      this.room2Bathroom = [];
      this.room3 = [];
      this.room3Bathroom = [];


    },

    onClickView() {
      this.$router.push("/viewAccomadationPartnerData");
    },






    onAddValues() {
      this.showTable = true;
      const newRatesDataObj = {
        sno: this.ratesData.length + 1,
        employee_id: this.userDetails.account_id,
        employee_location: this.userDetails.zone,
        user_name: this.userDetails.user_name,
        city_id: this.userDetails.city_id,
        user_id: this.userDetails.sno,
        name: this.userDetails.name,
        roomCategory: this.accomadationPartnerVisitRates.roomCategory.room_category,
        acRates: this.accomadationPartnerVisitRates.acRates,
        sharingTypes: this.accomadationPartnerVisitRates.sharingTypes,
        breakFastTypes: this.accomadationPartnerVisitRates.breakFastTypes,
        Rates: this.accomadationPartnerVisitRates.Rates,
      };

      // Check if newRatesDataObj already exists in ratesData array
      const isDuplicate = this.ratesData.some(item =>
        item.roomCategory === newRatesDataObj.roomCategory &&
        item.acRates === newRatesDataObj.acRates &&
        item.sharingTypes === newRatesDataObj.sharingTypes &&
        item.breakFastTypes === newRatesDataObj.breakFastTypes
      );

      if (!isDuplicate) {
        this.ratesData.push(newRatesDataObj);
        //console.log(this.ratesData);
        this.index = this.index + 1;
      } else {
        alert("Duplicate Entries Not Accepted..");
      }


      this.fieldVisitRatesDataArray.push(newRatesDataObj)


      this.accomadationPartnerVisitRates.roomCategory = "";
      this.accomadationPartnerVisitRates.acRates = "";
      this.accomadationPartnerVisitRates.sharingTypes = "";
      this.accomadationPartnerVisitRates.breakFastTypes = "";
      this.accomadationPartnerVisitRates.Rates = "";

    },


        deleteRow(sno) {
          //console.log(sno)
          const index = this.ratesData.findIndex(item => item.sno === sno);
          if (index !== 0) {
            this.ratesData.splice(index, 1);

            // After deleting a row, update sno values to maintain sequential order
            this.updateSerialNumbers();
          }
        },

        updateSerialNumbers() {
          for (let i = 0; i < this.ratesData.length; i++) {
            this.ratesData[i].sno = i + 1;
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

.light-gray-input {
  background-color: #eeeeff;
}

</style>

