<template>
  <q-page-container style="padding-top: 0px">
    <q-page class="q-pa-sm" style="padding-top: 120px">
      <subHeaderForAdmin />
      <div style="margin: auto width:100vw">

        <q-table title="Accomodation Partner Visit Details" :data="accomadation_visit_data"
          :columns="accomadation_visit_columns" :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell"
          :pagination.sync="pagination" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green"
          class="q-mt-md">
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
            <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width: 250px">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

            <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
              " @click="props.toggleFullscreen" v-if="mode === 'list'">
              <q-tooltip :difiltersable="$q.platform.is.mobile" v-close-popup>{{
                props.inFullscreen
                ? "Exit Fullscreen"
                : "Toggle Fullscreen"
              }}
              </q-tooltip>
            </q-btn>

            <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="
              mode = mode === 'grid' ? 'list' : 'grid';
            separator = mode === 'grid' ? 'none' : 'horizontal';
            " v-if="!props.inFullscreen">
              <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
              </q-tooltip>
            </q-btn>
            <download-excel v-if="accomadation_visit_data.length != 0" :data="accomadation_visit_data"
              :header="headerValue" worksheet="Accomadation Visit Data Report"
              :name="`${excel_date}_accomadation_visits.xls`">
              <q-icon color="primary" name="mdi-file-excel" size="22px" />
              <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
              </q-tooltip>
            </download-excel>
            <!-- <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn> -->
          </template>


          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn class="q-ml-sm" color="primary" style="border-radius: 15px; font-weight: bold; font-size: 12px;"
                @click="editAccomadationVisitData(props.row)" size="sm"><q-tooltip
                  :disable="$q.platform.is.mobile">Update</q-tooltip>Update
              </q-btn>
            </q-td>
          </template>

        </q-table>
      </div>

      <q-dialog v-model="accomadationVisitDataDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpr fff" container class="bg-white">
          <q-header class="bg-primary q-mb-5">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div style="font-family: verdana">Update Accomadation Visit Details</div>
              <q-space />

              <q-btn dense flat icon="close" @click="closeEditAccomadationDialog()">
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <q-space />
          <q-space />


          <q-form class="AccomBkgDetails" ref="accomadationFormBasic" style="margin-top: 60px;">

            <p style="color:red; margin-left: 24px; font-size: 18px;">* Last Updated at {{ Updated_dateTime }}</p>
            <div class="row" id="justify-sides">
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Property Name *"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.propertyName" :rules="[required('Property Name')]">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Address" hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomadationPartnerVisitDetails.address" :rules="[required('Address')]">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Pin Code"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.pincode" :rules="pincodeinputRules">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Property Phone Number" hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomadationPartnerVisitDetails.phoneNumber"
                :rules="phoneinputRules">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Property Email Id"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.emailId" :rules="emailRules">
              </q-input>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Near Hospital *" hide-bottom-space
                style="width: 360px" label-color="black" option-label="near_hospital_name"
                option-value="near_hospital_name" v-model="updateAccomadationPartnerVisitDetails.nearHospital"
                :options="hospitalOptions" :rules="[required('Near Hospital')]">
              </q-select>
              <q-input v-if="updateAccomadationPartnerVisitDetails.nearHospital.near_hospital_name ==
                'Others'
                " class="row col-3 q-mt-sm q-mr-sm " dense outlined label="Other Hospital Name" hide-bottom-space
                style="width: 360px; display: block" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.otherHospital">
              </q-input>

              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Owner Name"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.ownerName">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Owner Mail Id" hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomadationPartnerVisitDetails.ownerMail"
                :rules="emailRules">
              </q-input>


              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Owner Phone Number"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.ownerPhone" :rules="phoneinputRules">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Manager Name" hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomadationPartnerVisitDetails.managerName">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Manager Mail Id"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.managerMail" :rules="emailRules">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Manager Phone Number" hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomadationPartnerVisitDetails.managerPhone"
                :rules="phoneinputRules">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Total Number of Rooms"
                hide-bottom-space fill-input style="width: 360px" label-color="black" option-label="city"
                v-model="updateAccomadationPartnerVisitDetails.totalRooms">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="No of AC Rooms" hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomadationPartnerVisitDetails.AC">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="No of Non AC Rooms"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.nonAc">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Property is in Which Floor"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.whichFloor">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined
                label="How far from the Hospital? " hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.farDistance">
              </q-input>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined
                label="Are they Associated with any other Aggregator? " hide-bottom-space style="width: 360px"
                label-color="black" :options="yesOrNoArr" v-model="updateAccomadationPartnerVisitDetails.aggregator">
              </q-select>
              <q-input v-if="updateAccomadationPartnerVisitDetails.aggregator == 'Yes'"
                class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Aggregator Name"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.aggregatorName">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Check In Time" hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomadationPartnerVisitDetails.checkIn">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Check Out Time"
                hide-bottom-space style="width: 360px" label-color="black"
                v-model="updateAccomadationPartnerVisitDetails.checkOut">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined multiple label="Location" hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomadationPartnerVisitDetails.location">
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
                v-model="updateAccomadationPartnerVisitDetails.propertyType">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Parking"
                hide-bottom-space style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.parking">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Lift" hide-bottom-space
                style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.lift">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="CCTv" hide-bottom-space
                style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.cctv">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Ramp" hide-bottom-space
                style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.ramp">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Restaurant"
                hide-bottom-space style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.restaurant">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Kitchen Options" hide-bottom-space
                style="width: 360px" label-color="black" :options="selfKitchenArr"
                v-model="updateAccomadationPartnerVisitDetails.selfKitchenOption">
              </q-select>

              <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="TV" hide-bottom-space
                style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.Tv">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Wifi" hide-bottom-space
                style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.Wifi">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Hot Water"
                hide-bottom-space style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.hotWater">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Fridge" hide-bottom-space
                style="width: 360px" label-color="black" :options="yesOrNoArr"
                v-model="updateAccomadationPartnerVisitDetails.fridge">
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
              <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Room Category "
                hide-bottom-space style="width: 360px" label-color="black" option-label="room_category"
                option-value="room_category" :options="roomCategoryArr"
                v-model="updateAccomdationPartnerVisitRates.roomCategory">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="AC / Non AC" hide-bottom-space
                style="width: 360px" label-color="black" :options="acNonAcArr"
                v-model="updateAccomdationPartnerVisitRates.acRates">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Type Of Sharing"
                hide-bottom-space style="width: 360px" label-color="black" :options="sharingTypes"
                v-model="updateAccomdationPartnerVisitRates.sharingTypes">
              </q-select>
              <q-select class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Type of Breakfast" hide-bottom-space
                style="width: 360px" label-color="black" :options="breakFastTypes"
                v-model="updateAccomdationPartnerVisitRates.breakFastTypes">
              </q-select>
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Rate " hide-bottom-space
                style="width: 360px" label-color="black" v-model="updateAccomdationPartnerVisitRates.Rates"
                :rules="numberInputRules">
              </q-input>
            </div>
            <div class="row q-pa-md justify-end">
              <q-btn color="primary" label="ADD" @click="onAddValues"> </q-btn>
            </div>
          </q-form>
          <q-table style="font-family: verdana" dense separator="cell" wrap-cells :data="roomCategoryRatesListRow"
            :columns="roomCategoryRatesListColumn" :rows-per-page-options="[]" row-key="s_no"
            no-data-label="No test names added">

            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn @click="deleteRow(props.row)" color="negative" dense flat round icon="delete" class="q-ml-xs" />
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
              <q-input class="row col-3 q-mt-sm q-mr-sm light-gray-input" dense outlined label="Discussion Brief"
                hide-bottom-space style="width: 90vw" label-color="black" type="textarea"
                v-model="updateAccomadationPartnerVisitDetails.discussionBrief">
              </q-input>
              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="MH Share Revenue ( % )" hide-bottom-space
                style="width: 90vw" label-color="black" v-model="updateAccomadationPartnerVisitDetails.shareRevenue"
                :rules="percentageRules">
              </q-input>
            </div>
          </q-form>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
                size="1.5em" />Documents
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.pan_card_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.pan_card_upt,
                  'Pan Card Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Pan Card Image</q-tooltip>
              </q-btn>

              <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                hide-bottom-space v-model="uploadGst" type="file"
                accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
                  files = val;
                }
                  " hint="Upload GST" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                @rejected="onRejected">
                <template v-slot:prepend>
                  <q-icon name="attach_file" color="white" />
                </template>
              </q-file>
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.gst_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.gst_upt,
                  'Gst Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Gst Image</q-tooltip>
              </q-btn>

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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.cancel_cheque_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.cancel_cheque_upt,
                  'Cancel Cheque Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Cancel cheque Image</q-tooltip>
              </q-btn>
            </div>
          </q-card-actions>

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
                size="1.5em" />Property Photographs
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.facade_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.facade_upt,
                  'Property Facade 1 Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Property Facade Image 1</q-tooltip>
              </q-btn>
              <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                hide-bottom-space v-model="Facade2" type="file"
                accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
                  files = val;
                }
                  " hint="Property Facade 2" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                @rejected="onRejected">
                <template v-slot:prepend>
                  <q-icon name="attach_file" color="white" />
                </template>
              </q-file>
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.facade2_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.facade2_upt,
                  'Property Facade 2 Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Property Facade Image 2</q-tooltip>
              </q-btn>
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.lobby1_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.lobby1_upt,
                  'Property Lobby 1 Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Property Lobby Image 1</q-tooltip>
              </q-btn>
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.lobby2_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.lobby2_upt,
                  'Property Lobby Image 2'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Property Lobby Image 2</q-tooltip>
              </q-btn>
              <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                hide-bottom-space v-model="restaurant" type="file"
                accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="(val) => {
                  files = val;
                }
                  " hint="Restaurant " :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                @rejected="onRejected">
                <template v-slot:prepend>
                  <q-icon name="attach_file" color="white" />
                </template>
              </q-file>
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.restaurant_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.restaurant_upt,
                  'Restaurant Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Restaurant Image</q-tooltip>
              </q-btn>
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.self_kitchen_upt"  @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.self_kitchen_upt,
                  'Self Kitchen Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Self Kitchen Image</q-tooltip>
              </q-btn>

            </div>
          </q-card-actions>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name="" color="black"
                size="1.5em" />Property Room Photographs
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.room1_upt"  @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.room1_upt,
                  'Type 1 Room Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Type 1 Room Image</q-tooltip>
              </q-btn>
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.room1_bathroom_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.room1_bathroom_upt,
                  'Type 1  Bathroom Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Type 1 Bathroom Image</q-tooltip>
              </q-btn>
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.room2_upt"  @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.room2_upt,
                  'Type 2 Room Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Type 2 Room Image</q-tooltip>
              </q-btn>
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.room2_bathroom_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.room2_bathroom_upt,
                  'Type 2 Bathroom Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Type 2 Bathroom Image</q-tooltip>
              </q-btn>
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.room3_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.room3_upt,
                  'Type 3 Room Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Type 3 Room Image</q-tooltip>
              </q-btn>
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
              <q-btn color="teal" size="sm" icon="mdi-eye" :disabled="!this.updateAccomadationPartnerVisitDetails.room3_bathroom_upt" @click="
                showDocument(
                  updateAccomadationPartnerVisitDetails.room3_bathroom_upt,
                  'Type 3 Bathroom Image'
                )
                ">
                <q-tooltip :disable="$q.platform.is.mobile">Type 3 Bathroom Image</q-tooltip>
              </q-btn>
            </div>

          </q-card-actions>

          <div class="row q-pa-md justify-end" style="margin-bottom: 20vw; margin:5px;">
            <q-btn color="secondary" label="Update" @click="onClickUpdate" style="margin-right: 10px; font-weight: bold;">
            </q-btn>

            <q-btn color="primary" label="Verify" style="font-weight: bold;" @click="onClickVerify">
            </q-btn>
          </div>
        </q-layout>

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
      dialogTitle: "",
      url: "",
      accomadationVisitDataDialog: false,
      visible: false,
      showPanDoc: false,
      small: false,

      maximizedToggle: true,

      showTable: false,
      selfKitchenArr: ["Free Self kitchen (veg)", "Free Self Kitchen (veg / non-veg)", "Paid Self Kitchen (veg)", "Paid Self Kitchen (veg / non-veg)", "No Kitchen Facility Available"],
      propertyTypeArr: ["Hotel", "Guest House", "Shared House", "PG"],
      acNonAcArr: ['AC', "Non AC"],
      sharingTypes: ['One Sharing', 'Two Sharing', 'Three Sharing'],
      breakFastTypes: ['With Breakfast', 'Without Breakfast'],
      Rates: "",
      Updated_dateTime: "",
      yesOrNoArr: ["Yes", "No"],
      mode: "list",
      filter: "",
      selected: [],
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
      pagination: {
        rowsPerPage: 50,
        inputValue: "",
      },
      updateAccomadationPartnerVisitDetails: {
        s_no: "",
        fieldVisitId: "",
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
        Wifi: "",
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
        pan_card_upt: "",
        gst_upt: "",
        cancel_cheque_upt: "",
        facade_upt: "",
        facade2_upt: "",
        lobby1_upt: "",
        lobby2_upt: "",
        restaurant_upt: "",
        self_kitchen_upt: "",
        room1_upt: "",
        room1_bathroom_upt: "",
        room2_upt: "",
        room2_bathroom_upt: "",
        room3_upt: "",
        room3_bathroom_upt: "",

      },

      updateAccomdationPartnerVisitRates: {
        roomCategory: "",
        acRates: "",
        sharingTypes: "",
        breakFastTypes: "",
        Rates: "",
      },

      addRoomCategoryRatesListRow: [],





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

      headerValue: "Accomadation Visit  Details",
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

    this.$store.dispatch("partners/loadAccomadationpartnerData", payload);

    this.$store.dispatch("dropdown/loadRoomCategories", this.userDetails.zone);
    //console.log(this.updateAccomadationPartnerVisitDetails.fieldVisitId)
    //let visitId = this.updateAccomadationPartnerVisitDetails.fieldVisitId;


  },
  computed: {








    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        //console.log(user);
        //console.log(this.roomCategoryRatesList)
        return user;
      },
      hospitalOptions() {
        const otherOption = {
          near_hospital_name: "Others",
        };

        return [...this.nearHospital_Arr, otherOption];
      },

      nearHospital_Arr: (state) => state.dropdown.nearHospital,
      roomCategoryArr: (state) => state.dropdown.roomCategory,
      roomCategoryRatesListRow: (state) => state.partners.roomCategoryRatesListRow,

      accomadation_visit_columns: (state) => state.partners.accomadation_visit_columns,
      roomCategoryRatesListColumn: (state) => state.partners.roomCategoryRatesListColumn,
    }),
    ...mapGetters("partners", ["accomadation_visit_data"]),



    formattedAccommodationData() {
      // Add a 's_no' property to each item in accomadation_visit_data
      //console.log(this.accomadation_visit_data)
      return this.accomadation_visit_data.map((item, index) => {
        return {
          ...item,
          s_no: index + 1 // Serial number starts from 1
        };

      });
    },


  },

  methods: {
    ...mapActions("dropdown", ["loadNearHospitalNames"]),
    ...mapActions("partners", ["loadAccomadationpartnerData"]),
    ...mapActions("partners", ["updateAccomadationPartnerVisitDetailsSaving"]),
    ...mapActions("partners", ["verifyAccomadationPartnerVisitDetailsSaving"]),
    ...mapActions("dropdown", ["loadRoomCategories"]),
    ...mapActions("partners", ["loadRoomCategoriesListTable"]),
    ...mapActions("partners", ["deleteParticularRowDetails"]),


    checkFileSize(files) {
      return files.filter((file) => file.size < 10048576);
    },

    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 10 MB`,
      });
    },





    editAccomadationVisitData(item) {
      //console.log('rk', item)

      let dateObject = new Date(item.updated_date_time);
      let hours = dateObject.getHours() % 12 || 12;
      let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
      let formattedDate = `${dateObject.getDate()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getFullYear()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;

      this.Updated_dateTime = formattedDate;
      this.updateAccomadationPartnerVisitDetails.s_no = item.s_no;
      this.updateAccomadationPartnerVisitDetails.fieldVisitId = item.field_visit_id;
      this.updateAccomadationPartnerVisitDetails.propertyName = item.property_name;
      this.updateAccomadationPartnerVisitDetails.address = item.address;
      this.updateAccomadationPartnerVisitDetails.pincode = item.pin_code;
      this.updateAccomadationPartnerVisitDetails.phoneNumber = item.phone_number;
      this.updateAccomadationPartnerVisitDetails.emailId = item.email_id;
      this.updateAccomadationPartnerVisitDetails.nearHospital = item.near_hospital_name;
      this.updateAccomadationPartnerVisitDetails.otherHospital = item.other_hospital_name;
      this.updateAccomadationPartnerVisitDetails.ownerName = item.owner_name;
      this.updateAccomadationPartnerVisitDetails.ownerMail = item.owner_mail_id;
      this.updateAccomadationPartnerVisitDetails.ownerPhone = item.owner_phone_number;
      this.updateAccomadationPartnerVisitDetails.managerName = item.manager_name;
      this.updateAccomadationPartnerVisitDetails.managerMail = item.manager_mail_id;
      this.updateAccomadationPartnerVisitDetails.managerPhone = item.manager_phone_number;
      this.updateAccomadationPartnerVisitDetails.totalRooms = item.total_rooms;
      this.updateAccomadationPartnerVisitDetails.AC = item.total_ac_rooms;
      this.updateAccomadationPartnerVisitDetails.nonAc = item.total_non_ac_rooms;
      this.updateAccomadationPartnerVisitDetails.whichFloor = item.which_floor;
      this.updateAccomadationPartnerVisitDetails.farDistance = item.distance_hospital;
      this.updateAccomadationPartnerVisitDetails.aggregator = item.aggregator;
      this.updateAccomadationPartnerVisitDetails.aggregatorName = item.aggregator_name;
      this.updateAccomadationPartnerVisitDetails.checkIn = item.check_in_time;
      this.updateAccomadationPartnerVisitDetails.checkOut = item.check_out_time;
      this.updateAccomadationPartnerVisitDetails.location = item.location;
      this.updateAccomadationPartnerVisitDetails.propertyType = item.property_type;
      this.updateAccomadationPartnerVisitDetails.parking = item.parking;
      this.updateAccomadationPartnerVisitDetails.lift = item.lift;
      this.updateAccomadationPartnerVisitDetails.cctv = item.cctv;
      this.updateAccomadationPartnerVisitDetails.ramp = item.ramp;
      this.updateAccomadationPartnerVisitDetails.restaurant = item.restaurant;
      this.updateAccomadationPartnerVisitDetails.selfKitchenOption = item.self_kitchen;
      this.updateAccomadationPartnerVisitDetails.Tv = item.tv;
      this.updateAccomadationPartnerVisitDetails.Wifi = item.wifi;
      this.updateAccomadationPartnerVisitDetails.hotWater = item.hot_water;
      this.updateAccomadationPartnerVisitDetails.fridge = item.fridge;
      this.updateAccomadationPartnerVisitDetails.discussionBrief = item.discussion_breif;
      this.updateAccomadationPartnerVisitDetails.shareRevenue = item.mh_share_revenue;

      if (item.pan_card != ""){
        this.updateAccomadationPartnerVisitDetails.pan_card_upt = item.pan_card;
      } else {
        this.updateAccomadationPartnerVisitDetails.pan_card_upt = "";

      }

      if (item.gst != ""){
        this.updateAccomadationPartnerVisitDetails.gst_upt = item.gst;
      } else {
        this.updateAccomadationPartnerVisitDetails.gst_upt = "";

      }

      //this.updateAccomadationPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
      if (item.cancel_cheque != ""){
        this.updateAccomadationPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
      } else {
        this.updateAccomadationPartnerVisitDetails.cancel_cheque_upt = "";

      }

      //this.updateAccomadationPartnerVisitDetails.facade_upt = item.facade;
      if (item.facade != ""){
        this.updateAccomadationPartnerVisitDetails.facade_upt = item.facade;
      } else {
        this.updateAccomadationPartnerVisitDetails.facade_upt = "";

      }


      //this.updateAccomadationPartnerVisitDetails.facade2_upt = item.facade2;
      if (item.facade2 != ""){
        this.updateAccomadationPartnerVisitDetails.facade2_upt = item.facade2;
      } else {
        this.updateAccomadationPartnerVisitDetails.facade2_upt = "";

      }

      if (item.lobby1 != ""){
        this.updateAccomadationPartnerVisitDetails.lobby1_upt = item.lobby1;
      } else {
        this.updateAccomadationPartnerVisitDetails.lobby1_upt = "";

      }


      if (item.lobby2 != ""){
        this.updateAccomadationPartnerVisitDetails.lobby2_upt = item.lobby2;
      } else {
        this.updateAccomadationPartnerVisitDetails.lobby2_upt = "";


      }

      if (item.restaurant_pic != ""){
        this.updateAccomadationPartnerVisitDetails.restaurant_upt = item.restaurant_pic;
      } else {
        this.updateAccomadationPartnerVisitDetails.restaurant_upt = "";

      }

      if (item.self_kitchen_pic != ""){
        this.updateAccomadationPartnerVisitDetails.self_kitchen_upt = item.self_kitchen_pic;
      } else {
        this.updateAccomadationPartnerVisitDetails.self_kitchen_upt = "";

      }

      if (item.room1 != ""){
        this.updateAccomadationPartnerVisitDetails.room1_upt = item.room1;
      } else {
        this.updateAccomadationPartnerVisitDetails.room1_upt = "";

      }

      if (item.room1_bathroom != ""){
        this.updateAccomadationPartnerVisitDetails.room1_bathroom_upt = item.room1_bathroom;
      } else {
        this.updateAccomadationPartnerVisitDetails.room1_bathroom_upt = "";

      }

      if (item.room2 != ""){
        this.updateAccomadationPartnerVisitDetails.room2_upt = item.room2;
      } else {
        this.updateAccomadationPartnerVisitDetails.room2_upt = "";

      }

      if (item.room2_bathroom != ""){
        this.updateAccomadationPartnerVisitDetails.room2_bathroom_upt = item.room2_bathroom;
      } else {
        this.updateAccomadationPartnerVisitDetails.room2_bathroom_upt = "";

      }

      if (item.room3 != ""){
        this.updateAccomadationPartnerVisitDetails.room3_upt = item.room3;
      } else {
        this.updateAccomadationPartnerVisitDetails.room3_upt = "";

      }

      if (item.room3_bathroom != ""){
        this.updateAccomadationPartnerVisitDetails.room3_bathroom_upt = item.room3_bathroom;
      } else {
        this.updateAccomadationPartnerVisitDetails.room3_bathroom_upt = "";

      }






      //console.log('pan',this.uploadPanCard)
      this.uploadPanCard = item.pan_card ? new File([item.pan_card], item.pan_card) : null;
      this.uploadGst = item.gst ? new File([item.gst], item.gst) : null;
      this.uploadCancelCheque = item.cancel_cheque ? new File([item.cancel_cheque], item.cancel_cheque) : null;
      this.Facade = item.facade ? new File([item.facade], item.facade) : null;
      this.Facade2 = item.facade2 ? new File([item.facade2], item.facade2) : null;
      this.Lobby1 = item.lobby1 ? new File([item.lobby1], item.lobby1) : null;
      this.Lobby2 = item.lobby2 ? new File([item.lobby2], item.lobby2) : null;
      this.restaurant = item.restaurant_pic ? new File([item.restaurant_pic], item.restaurant_pic) : null;
      this.selfKitchen = item.self_kitchen_pic ? new File([item.self_kitchen_pic], item.self_kitchen_pic) : null;
      this.room1 = item.room1 ? new File([item.room1], item.room1) : null;
      this.room1Bathroom = item.room1_bathroom ? new File([item.room1_bathroom], item.room1_bathroom) : null;
      this.room2 = item.room2 ? new File([item.room2], item.room2) : null;
      this.room2Bathroom = item.room2_bathroom ? new File([item.room2_bathroom], item.room2_bathroom) : null;
      this.room3 = item.room3 ? new File([item.room3], item.room3) : null;
      //console.log('Room 3 Bathroom Path:', item.room3_bathroom);
      this.room3Bathroom = item.room3_bathroom ? new File([item.room3_bathroom], item.room3_bathroom) : null;
      //console.log(this.room3Bathroom)
      //this.room3Bathroom = item.room3_bathroom ? new File([item.room3_bathroom], item.room3_bathroom) : null;

      this.$store.dispatch("partners/loadRoomCategoriesListTable", this.updateAccomadationPartnerVisitDetails);
      this.accomadationVisitDataDialog = true;
    },


    closeEditAccomadationDialog() {
      this.accomadationVisitDataDialog = false;
    },


    onClickUpdate() {
      this.$refs.accomadationFormBasic.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Upload data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {


              const formData = new FormData();
              formData.append("update_pan_card", this.uploadPanCard);
              formData.append("update_gst", this.uploadGst);
              formData.append("update_cancel_cheque", this.uploadCancelCheque);
              formData.append("update_facade", this.Facade);
              formData.append("update_facade2", this.Facade2);
              formData.append("update_lobby1", this.Lobby1);
              formData.append("update_lobby2", this.Lobby2);
              formData.append("update_restaurant", this.restaurant);
              formData.append("update_self_kitchen", this.selfKitchen);
              formData.append("update_room1", this.room1);
              formData.append("update_room1Bathroom", this.room1Bathroom);
              formData.append("update_room2", this.room2);
              formData.append("update_room2Bathroom", this.room2Bathroom);
              formData.append("update_room3", this.room3);
              formData.append("update_room3Bathroom", this.room3Bathroom);


              //console.log(this.updateAccomadationPartnerVisitDetails)
              //console.log(this.addRoomCategoryRatesListRow)
              // console.log(this.updateAccomdationPartnerVisitRates)


              formData.append(
                "update_accomadation_details",
                JSON.stringify(this.updateAccomadationPartnerVisitDetails)
              );

              formData.append(
                "update_accomadation_Rates",
                JSON.stringify(this.addRoomCategoryRatesListRow)
              );

              this.updateAccomadationPartnerVisitDetailsSaving(formData);
// console.log
              //console.log("11update", formData);
              this.resetFiles();

              this.accomadationVisitDataDialog = false;




            })
            .onCancel(() => {
              //this.resetFiles();
              this.accomadationVisitDataDialog = true;
            });
        }
      });
    },




    onClickVerify() {
        //console.log(this.updateAccomadationPartnerVisitDetails)
        this.$refs.accomadationFormBasic.validate().then((success) => {

      if (this.updateAccomadationPartnerVisitDetails.propertyName != "" && this.updateAccomadationPartnerVisitDetails.address != "" && this.updateAccomadationPartnerVisitDetails.pincode != "" && this.updateAccomadationPartnerVisitDetails.phoneNumber != "" && this.updateAccomadationPartnerVisitDetails.emailId != "" && this.updateAccomadationPartnerVisitDetails.nearHospital != "" && this.updateAccomadationPartnerVisitDetails.ownerName != "" && this.updateAccomadationPartnerVisitDetails.ownerMail != "" && this.updateAccomadationPartnerVisitDetails.ownerPhone != "" && this.updateAccomadationPartnerVisitDetails.managerName != "" && this.updateAccomadationPartnerVisitDetails.managerMail != "" && this.updateAccomadationPartnerVisitDetails.managerPhone != "" && this.updateAccomadationPartnerVisitDetails.totalRooms != "" && this.updateAccomadationPartnerVisitDetails.AC != "" && this.updateAccomadationPartnerVisitDetails.nonAc != "" && this.updateAccomadationPartnerVisitDetails.whichFloor != "" && this.updateAccomadationPartnerVisitDetails.farDistance != "" && this.updateAccomadationPartnerVisitDetails.aggregator != "" && this.updateAccomadationPartnerVisitDetails.checkIn != "" && this.updateAccomadationPartnerVisitDetails.checkOut != ""  && this.updateAccomadationPartnerVisitDetails.propertyType != "" && this.updateAccomadationPartnerVisitDetails.parking != "" && this.updateAccomadationPartnerVisitDetails.lift != "" && this.updateAccomadationPartnerVisitDetails.cctv != "" && this.updateAccomadationPartnerVisitDetails.ramp != "" && this.updateAccomadationPartnerVisitDetails.restaurant != "" && this.updateAccomadationPartnerVisitDetails.selfKitchenOption != "" && this.updateAccomadationPartnerVisitDetails.Tv != "" &&
            this.updateAccomadationPartnerVisitDetails.Wifi != "" && this.updateAccomadationPartnerVisitDetails.hotWater != "" && this.updateAccomadationPartnerVisitDetails.fridge != "" && this.updateAccomadationPartnerVisitDetails.discussionBrief != "" && this.updateAccomadationPartnerVisitDetails.shareRevenue != "" && this.updateAccomadationPartnerVisitDetails.pan_card_upt != "" && this.updateAccomadationPartnerVisitDetails.gst_upt != "" && this.updateAccomadationPartnerVisitDetails.cancel_cheque_upt != "" && this.updateAccomadationPartnerVisitDetails.facade_upt != "" && this.updateAccomadationPartnerVisitDetails.facade2_upt != "" && this.updateAccomadationPartnerVisitDetails.lobby1_upt != "" && this.updateAccomadationPartnerVisitDetails.lobby2_upt != "" && this.updateAccomadationPartnerVisitDetails.restaurant_upt != "" && this.
              updateAccomadationPartnerVisitDetails.self_kitchen_upt != "" && this.updateAccomadationPartnerVisitDetails.room1_upt != "" && this.updateAccomadationPartnerVisitDetails.room1_bathroom_upt != "" && this.updateAccomadationPartnerVisitDetails.room2_upt != "" && this.updateAccomadationPartnerVisitDetails.room2_bathroom_upt != "" && this.updateAccomadationPartnerVisitDetails.room3_upt != "" && this.updateAccomadationPartnerVisitDetails.room3_bathroom_upt != "") {
                this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Verify data ?",
                  cancel: true,
                  persistent: true,
                })
                .onOk(() => {
                  this.verifyAccomadationPartnerVisitDetailsSaving(this.updateAccomadationPartnerVisitDetails);
                })
                .onCancel(() => {
                // this.resetFiles();
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





    showDocument(file, dialogName) {
      //console.log(file, dialogName)
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhVisitFilePath + file;
        this.visible = false;
      }, 2000);
      this.small = true;
    },


    resetFiles() {
      this.updateAccomadationPartnerVisitDetails.propertyName = "";
      this.updateAccomadationPartnerVisitDetails.address = "";
      this.updateAccomadationPartnerVisitDetails.phoneNumber = "";
      this.updateAccomadationPartnerVisitDetails.emailId = "";
      this.updateAccomadationPartnerVisitDetails.pincode = "";
      this.updateAccomadationPartnerVisitDetails.nearHospital = "";
      this.updateAccomadationPartnerVisitDetails.otherHospital = "";
      this.updateAccomadationPartnerVisitDetails.ownerName = "";
      this.updateAccomadationPartnerVisitDetails.ownerMail = "";
      this.updateAccomadationPartnerVisitDetails.ownerPhone = "";
      this.updateAccomadationPartnerVisitDetails.managerName = "";
      this.updateAccomadationPartnerVisitDetails.managerMail = "";
      this.updateAccomadationPartnerVisitDetails.managerPhone = "";
      this.updateAccomadationPartnerVisitDetails.totalRooms = "";
      this.updateAccomadationPartnerVisitDetails.AC = "";
      this.updateAccomadationPartnerVisitDetails.nonAc = "";
      this.updateAccomadationPartnerVisitDetails.whichFloor = "";
      this.updateAccomadationPartnerVisitDetails.farDistance = "";
      this.updateAccomadationPartnerVisitDetails.aggregator = "";
      this.updateAccomadationPartnerVisitDetails.aggregatorName = "";
      this.updateAccomadationPartnerVisitDetails.checkIn = "";
      this.updateAccomadationPartnerVisitDetails.checkOut = "";
      this.updateAccomadationPartnerVisitDetails.location = "";
      this.updateAccomadationPartnerVisitDetails.propertyType = "";
      this.updateAccomadationPartnerVisitDetails.parking = "";
      this.updateAccomadationPartnerVisitDetails.lift = "";
      this.updateAccomadationPartnerVisitDetails.cctv = "";
      this.updateAccomadationPartnerVisitDetails.ramp = "";
      this.updateAccomadationPartnerVisitDetails.restaurant = "";
      this.updateAccomadationPartnerVisitDetails.selfKitchenOption = "";
      this.updateAccomadationPartnerVisitDetails.Tv = "";
      this.updateAccomadationPartnerVisitDetails.Wifi = "";
      this.updateAccomadationPartnerVisitDetails.hotWater = "";
      this.updateAccomadationPartnerVisitDetails.fridge = "";
      this.updateAccomadationPartnerVisitDetails.discussionBrief = "";
      this.updateAccomadationPartnerVisitDetails.shareRevenue = "";

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

    // closeEditAccomadationDialog() {
    //   this.accomadationVisitDataDialog = false;
    // },

    onAddValues() {
      this.showTable = true;
      const newRatesDataObj = {
        index: this.roomCategoryRatesListRow.length + 1,
        employee_id: this.userDetails.account_id,
        employee_location: this.userDetails.zone,
        user_name: this.userDetails.user_name,
        city_id: this.userDetails.city_id,
        user_id: this.userDetails.sno,
        name: this.userDetails.name,
        field_visit_id: this.updateAccomadationPartnerVisitDetails.fieldVisitId,
        room_category: this.updateAccomdationPartnerVisitRates.roomCategory.room_category,
        ac_type: this.updateAccomdationPartnerVisitRates.acRates,
        sharing_type: this.updateAccomdationPartnerVisitRates.sharingTypes,
        breakfast_type: this.updateAccomdationPartnerVisitRates.breakFastTypes,
        rate: this.updateAccomdationPartnerVisitRates.Rates,
      };

      this.roomCategoryRatesListRow.push(newRatesDataObj)
      this.addRoomCategoryRatesListRow.push(newRatesDataObj)

      this.updateAccomdationPartnerVisitRates.roomCategory = "";
      this.updateAccomdationPartnerVisitRates.acRates = "";
      this.updateAccomdationPartnerVisitRates.sharingTypes = "";
      this.updateAccomdationPartnerVisitRates.breakFastTypes = "";
      this.updateAccomdationPartnerVisitRates.Rates = "";



    },


    deleteRow(item) {
          let s_no = item.s_no;
          //console.log("s_no",item)
          this.deleteParticularRowDetails(item)
          //console.log(this.roomCategoryRatesListRow)
          this.delet
          const index = this.roomCategoryRatesListRow.findIndex(item => item.s_no === s_no);
          console.log(index)
          if (index !== -1) {
            this.roomCategoryRatesListRow.splice(index, 1);

            // After deleting a row, update sno values to maintain sequential order
            this.updateSerialNumbers();
          }
        },

        updateSerialNumbers() {
          for (let i = 0; i < this.roomCategoryRatesListRow.length; i++) {
            this.roomCategoryRatesListRow[i].s_no = i + 1;
          }
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
