<template>
  <q-page-container style="padding-top: 0px">
      <q-page class="q-pa-sm" style="padding-top: 120px">
          <subHeaderForAdmin />
          <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <q-card>
                      <div class="q-pa-xs q-gutter-md q-ma-xs row items-start">
                          <p class="q-pa-xs text-left text-bold" style="
                  text-align: justify;
                  font-size: 20px;
                  font-family: verdana;
                ">
                              Field Visits:
                          </p>
                          <!-- <q-btn-group push class="bg-primary text-white"> -->
                          <q-btn push label="Accommodation" icon="mdi-domain" class="bg-primary text-white"
                              @click="onClickAccomadation" />
                          <q-btn push label="Food" icon="mdi-food-fork-drink" class="bg-primary text-white"
                              @click="onClickFood" />
                          <q-btn push label="Travel" icon="mdi-car" class="bg-primary text-white" @click="onClickTravel" />
                          <q-btn push label="Equipment" icon="mdi-wrench" class="bg-primary text-white" @click="onClickEquipment" />
                          <q-btn push label="Hospital" icon="mdi-hospital" class="bg-primary text-white"
                              @click="onClickHospital" />
                          <!-- <q-btn push label="Agent" icon="mdi-account" class="bg-primary text-white"
                              @click="onClickAgent" /> -->


                          <!-- </q-btn-group> -->
                      </div>
                  </q-card>
              </div>
          </q-card>


          <!-- //Ravi kiran Accomadation Code -->

          <div style="margin: auto width:100vw">

              <q-table v-if="viewAccomadationTable" title="Accomodation Partner Visit Details" style="width:95vw;"
                  :data="admin_accomadation_visit_data" :columns="admin_accomadation_visit_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green" class="q-mt-md">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                              {{ props.row.visit_status.toUpperCase() }}


                          </q-chip> -->
                      </q-td>
                  </template>


                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>





                  <template v-slot:top-right="props">
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>


                      <div style="
                          display: flex;
                          align-items: center;
                          margin-right: 0px;

                          " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                          display: flex;

                          align-items: center;
                          margin-right: 20px;
                          margin-top: -10px;

                          ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                      display: flex;
                                      align-items: center;
                                      margin-top:-20px;

                                  ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseDetails()" style="margin-right: 10px" color="primary"
                                  label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel v-if="admin_accomadation_visit_data.length != 0"
                          :data="admin_accomadation_visit_data" :header="headerValue"
                          worksheet="Accomadation Visit Data Report" :name="`${excel_date}_accomadation_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewAccomadationVisitData(props.row)"
                              size="sm"><q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>


              </q-table>

              <q-table v-if="isDateRangeActiveForAccomadation" title="Accomodation Partner Visit Details"
                  style="width:95vw;" :data="admin_datewise_visit_data" :columns="admin_datewise_accomadation_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green"
                  class="q-mt-md row center">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                              {{ props.row.visit_status.toUpperCase() }}


                          </q-chip> -->
                      </q-td>
                  </template>
                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>


                  <template v-slot:top-right="props">
                      <!-- <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityArr" option-label="city"
                          option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select> -->
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>

                      <div style="
                          display: flex;
                          align-items: center;
                          margin-right: 0px;


                          " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                          display: flex;

                          align-items: center;
                          margin-right: 20px;
                          margin-top: -10px;

                          ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                      display: flex;
                                      align-items: center;
                                      margin-top:-20px;

                                  ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseDetails()" style="margin-right: 10px" color="primary"
                                  label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel v-if="admin_datewise_visit_data.length != 0" :data="admin_datewise_visit_data"
                          :header="headerValue" worksheet="Accomadation Visit Data Report"
                          :name="`${excel_date}_accomadation_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewAccomadationVisitData(props.row)"
                              size="sm"><q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>
              </q-table>

              <q-dialog height="1000px" v-model="viewParticularRowDetails" transition-show="slide-up"
                  transition-hide="slide-down" persistent :maximized="maximizedToggle">
                  <q-layout view="Lhh lpR fff" container class="bg-white">
                      <q-header class="bg-primary">
                          <q-bar class="bg-primary text-white">
                              <q-icon name="feed"></q-icon>
                              <div class="text-h6">
                                  View of Accomadation Partner Visit Details:

                              </div>
                              <q-space />

                              <!-- <q-btn
                              print="'#createPdf'"
                              label="Print"

                              rounded
                              class="positive text-bold text-white"
                              @click="printpart('createPdf')"
                              /> -->

                              <!-- <q-btn color="secondary">
                          <download-excel :data="admin_accomadation_visit_data"
                              :header="headerValue" worksheet="Accomadation Visit Data Report"
                              :name="`${excel_date}_accomadation_visits.xls`">
                              <q-icon color="primary" name="mdi-file-excel" size="22px" />Download Excel
                              <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                              </q-tooltip>
                          </download-excel>
                      </q-btn> -->

                              <q-btn dense flat icon="close" v-close-popup>
                                  <q-tooltip class="bg-white text-primary" @click="closeDialog">Close</q-tooltip>
                              </q-btn>

                          </q-bar>
                      </q-header>
                      <div id="property-pdf">
                          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
                              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                  <q-card class="q-ma-xs text-black">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh;">
                                          <q-icon name="manage_accounts" color="black" size="1.5em" />
                                          Property Basic Details
                                      </q-bar>
                                      <q-card-section class="q-pa-none">
                                          <div style="height: 350px">
                                              <div class="
                                              row
                                              text-black text-bold
                                              q-ma-xs q-pa-md
                                              text-body1
                                          ">
                                                  <div class="col-4 text-left text-black">Property Name</div>
                                                  <div class="col-8 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.propertyName }}
                                                  </div>
                                                  <div class="col-4 text-left text-black">Address</div>
                                                  <div class="col-8 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.address }}
                                                  </div>
                                                  <div class="col-4 text-left text-black">Pin Code</div>
                                                  <div class="col-8 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.pincode }}
                                                  </div>
                                                  <div class="col-4 text-left text-black">Property Phone Number</div>
                                                  <div class="col-8 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.phoneNumber }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-4 text-left text-black">Email ID</div>
                                                  <div class="col-8 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.emailId }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-4 text-left text-black">Near Hospital</div>
                                                  <div class="col-8 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.nearHospital }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-4 text-left text-black">Other Hospital</div>
                                                  <div class="col-8 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.otherHospital }}
                                                  </div>
                                                  <q-separator />


                                              </div>
                                          </div>
                                      </q-card-section>
                                  </q-card>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                  <q-card class="q-ma-xs" id="owner-pdf">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                              name="mdi-information" color="black" size="1.5em" />
                                          Owner & Manager Details
                                      </q-bar>
                                      <q-card-section class="q-pa-none">
                                          <div style="height: 350px">
                                              <div class="
                      row
                      text-black text-bold
                      q-ma-xs q-pa-md
                      text-body1
                    ">
                                                  <div class="col-5 text-left">Owner Name</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.ownerName }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Owner Mail ID</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.ownerMail }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Owner Phone Number</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.ownerPhone }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Manager Name </div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.managerName }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Manager Mail ID</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.managerMail }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Manager Phone Number</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.managerPhone }}
                                                  </div>


                                              </div>
                                          </div>
                                      </q-card-section>
                                  </q-card>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                  <q-card class="q-ma-xs">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                                          <q-icon name="mdi-information" color="black" size="1.6em" />
                                          Other Details
                                      </q-bar>
                                      <q-card-section class="q-pa-none">
                                          <div style="height: 350px">
                                              <div style="height: 280px">
                                                  <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                                                      <div class="col-6 text-left text-black">Total Rooms</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.totalRooms }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left text-black">Total AC Rooms</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.AC }}
                                                      </div>
                                                      <div class="col-6 text-left">Total Non AC Rooms</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.nonAc }}
                                                      </div>

                                                      <q-separator />

                                                      <div class="col-6 text-left">Property Type </div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.propertyType }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left">Are they Associated With any Other
                                                          Agrregator ?
                                                      </div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.aggregator }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left">Aggregator Name</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.aggregatorName }}
                                                      </div>

                                                      <q-separator />

                                                      <div class="col-6 text-left text-black">How Far from the Hospital
                                                      </div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.farDistance }}
                                                      </div>
                                                      <!-- <q-separator />
                                              <div class="col-6 text-left"> Share Revenue</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewAccomadationPartnerVisitDetails.shareRevenue }}
                                              </div> -->
                                                      <!-- <q-separator />
                                              <div class="col-6 text-left">Fridge</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewAccomadationPartnerVisitDetails.fridge }}
                                              </div> -->
                                                  </div>
                                              </div>
                                          </div>
                                      </q-card-section>
                                  </q-card>
                              </div>

                              <q-resize-observer />
                          </div>
                          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 36px">
                              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                  <q-card class="q-ma-xs text-black">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                                          <q-icon name="mdi-swim" color="black" size="1.6em" />
                                          Amenities
                                      </q-bar>
                                      <q-card-section class="q-pa-none">
                                          <div style="height: 280px">
                                              <div class="
                                              row
                                              text-black text-bold
                                              q-ma-xs q-pa-md
                                              text-body1
                                          ">
                                                  <div class="col-6 text-left text-black">Parking</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.parking }}
                                                  </div>
                                                  <div class="col-6 text-left text-black">Ramp</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.ramp }}
                                                  </div>
                                                  <div class="col-6 text-left text-black">Wifi</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.Wifi }}
                                                  </div>
                                                  <div class="col-6 text-left text-black">Lift</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.lift }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">CC Tv</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.cctv }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Tv</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.Tv }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Hot Water</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.hotWater }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Fridge</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.fridge }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">
                                                      Restaurant
                                                  </div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.restaurant }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Kitchen Options</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewAccomadationPartnerVisitDetails.selfKitchen }}
                                                  </div>

                                              </div>
                                          </div>
                                      </q-card-section>
                                  </q-card>
                              </div>

                              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                  <q-card class="q-ma-xs">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                                          <q-icon name="mdi-information" color="black" size="1.5em" />
                                          Other Details
                                      </q-bar>
                                      <q-card-section class="q-pa-none">
                                          <div style="height: 280px">
                                              <div style="height: 280px">
                                                  <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">



                                                      <div class="col-6 text-left">MH Share revenue</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.shareRevenue }}
                                                      </div>
                                                      <q-separator />


                                                      <div class="col-6 text-left text-black">Check In Time</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.checkIn }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left text-black">Check Out Time</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.checkOut }}
                                                      </div>

                                                      <div class="col-6 text-left">Inserted Date Time</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.insertedDateTime
                                                          }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left"> Updated Date Time</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.updatedDateTime }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left text-black">
                                                          Property is in Which Floor
                                                      </div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.whichFloor }}
                                                      </div>

                                                      <!-- <q-separator />
                                              <div class="col-6 text-left"> Share Revenue</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewAccomadationPartnerVisitDetails.shareRevenue }}
                                              </div> -->

                                                  </div>
                                              </div>
                                          </div>
                                      </q-card-section>
                                  </q-card>
                              </div>

                              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                  <q-card class="q-ma-xs">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                                          <q-icon name="mdi-information" color="black" size="1.5em" />
                                          User & Employee Details
                                      </q-bar>
                                      <q-card-section class="q-pa-none">
                                          <div style="height: 280px">
                                              <div style="height: 280px">
                                                  <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                                                      <div class="col-6 text-left text-black">Field Visit ID</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.fieldVisitId }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left text-black">User ID</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.userId }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left text-black">User Name</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.userName }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left text-black">Employee ID</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.employeeId }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left text-black">Employee Name</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.employeeName }}
                                                      </div>
                                                      <q-separator />
                                                      <div class="col-6 text-left text-black">Employee Location</div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.employeeLocation
                                                          }}
                                                      </div>
                                                      <q-separator />

                                                      <div class="col-6 text-left text-black">Employee City ID </div>
                                                      <div class="col-6 text-left text-black">
                                                          : {{ this.viewAccomadationPartnerVisitDetails.cityId }}
                                                      </div>
                                                      <q-separator />






                                                  </div>
                                              </div>
                                          </div>
                                      </q-card-section>
                                  </q-card>
                              </div>

                              <q-resize-observer />
                          </div>

                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon
                                      name="" color="black" size="1.5em" />Discussion Brief
                              </q-bar>
                          </div>
                          <q-form class="AccomBkgDetails" ref="accomadationFormBasic">
                              <div class="row" id="justify-sides">

                                  <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Discussion Brief"
                                      readonly hide-bottom-space
                                      style="width: 90vw; margin-left: 20px; margin-bottom: 15px;" label-color="black"
                                      type="textarea" v-model="this.viewAccomadationPartnerVisitDetails.discussionBrief">

                                  </q-input>
                              </div>
                          </q-form>

                          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px;">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <q-markup-table class="q-ma-xs">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                              name="mdi-currency-inr" color="black" size="1.5em" />Room Category Rates
                                      </q-bar>
                                      <q-table style="font-family: verdana; margin-top: 10px;" dense separator="cell"
                                          wrap-cells :data="roomCategoryRatesListRowForAdmin"
                                          :columns="roomCategoryRatesListColumnForAdmin" :rows-per-page-options="[]"
                                          row-key="s_no" no-data-label="No test names added">


                                      </q-table>
                                  </q-markup-table>
                              </div>
                          </div>

                      </div>

                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px;">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <q-markup-table class="q-ma-xs">
                                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                          name="mdi-file-document" color="black" size="1.5em" />Documents
                                  </q-bar>
                                  <tbody>
                                      <div class="row">
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">PAN Card</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.pan_card_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.pan_card_upt, 'Pan Card')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.pan_card_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.pan_card_upt, 'Pan Card')"
                                                          icon="mdi-download" />

                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">GST</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.gst_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.gst_upt, 'Gst')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.gst_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.gst_upt, 'Gst')"
                                                          icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Cancel Cheque</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.cancel_cheque_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.cancel_cheque_upt, 'Cancel Cheque')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.cancel_cheque_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.cancel_cheque_upt, 'Cancel Cheque')"
                                                          icon="mdi-download" />
                                                  </td>


                                              </tr>
                                          </div>
                                      </div>
                                  </tbody>
                              </q-markup-table>
                          </div>
                      </div>




                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px;">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <q-markup-table class="q-ma-xs">
                                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                          name="mdi-file-document" color="black" size="1.5em" />Property Photographs
                                  </q-bar>
                                  <tbody>
                                      <div class="row">
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Property Facade 1</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.facade_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.facade_upt, 'Facade 1')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.facade_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.facade_upt, 'Facade 1')"
                                                          icon="mdi-download" />
                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Property Facade 2 </td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.facade2_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.facade2_upt, 'Facade 2')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.facade2_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.facade2_upt, 'Facade 2')"
                                                          icon="mdi-download" />
                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Property Lobby 1 </td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.lobby1_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.lobby1_upt, 'Lobby 1')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.lobby1_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.lobby1_upt, 'Lobby 1')"
                                                          icon="mdi-download" />
                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Property Lobby 2</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.lobby2_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.lobby2_upt, 'Lobby 2')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.lobby2_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.lobby2_upt, 'Lobby 2')"
                                                          icon="mdi-download" />
                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Restaurant </td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.restaurant_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.restaurant_upt, 'Restaurant Pic')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.restaurant_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.restaurant_upt, 'Restaurant Pic')"
                                                          icon="mdi-download" />
                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Self Kitchen </td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.self_kitchen_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.self_kitchen_upt, 'Self Kitchen Pic')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.self_kitchen_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.self_kitchen_upt, 'Self Kitchen Pic')"
                                                          icon="mdi-download" />
                                                  </td>

                                              </tr>
                                          </div>


                                      </div>
                                  </tbody>
                              </q-markup-table>
                          </div>
                      </div>

                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px;">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <q-markup-table class="q-ma-xs">
                                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                          name="mdi-file-document" color="black" size="1.5em" />Property Rooms Photographs
                                  </q-bar>
                                  <tbody>
                                      <div class="row">
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Type 1 Room</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room1_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.room1_upt, 'Type 1 Room')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room1_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.room1_upt, 'Room 1')"
                                                          icon="mdi-download" />
                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Type 1 Bathroom </td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room1_bathroom_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.room1_bathroom_upt, 'Type 1 Bathroom')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room1_bathroom_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.room1_bathroom_upt, 'Room 1 Bathroom')"
                                                          icon="mdi-download" />
                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Type 2 Room </td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room2_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.room2_upt, 'Type 2 Room')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room2_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.room2_upt, 'Room 2')"
                                                          icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Type 2 Bathroom</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room2_bathroom_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.room2_bathroom_upt, 'Type 2 Bathroom')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room2_bathroom_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.room2_bathroom_upt, 'Room 2 Bathroom')"
                                                          icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Type 3 Room </td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room3_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.room3_upt, 'Type 3 Room')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room3_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.room3_upt, 'Room 3')"
                                                          icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Type 3 Bathroom</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room3_bathroom_upt"
                                                          @click="showDocument(viewAccomadationPartnerVisitDetails.room3_bathroom_upt, 'Type 3 Bathroom')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewAccomadationPartnerVisitDetails.room3_bathroom_upt"
                                                          @click="downloadDocument(viewAccomadationPartnerVisitDetails.room3_bathroom_upt, 'Room 3 Bathroom')"
                                                          icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>

                                      </div>
                                  </tbody>
                              </q-markup-table>
                          </div>
                      </div>





                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name=""
                                  color="black" size="1.5em" />Remarks
                          </q-bar>
                      </div>
                      <q-form class="AccomBkgDetails" ref="accomadationFormBasic"
                          style="margin-bottom: 100px; margin-left: 20px;">
                          <div class="row" id="justify-sides">

                              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Remarks" hide-bottom-space
                                  style="width: 90vw" label-color="black" type="textarea"
                                  v-model="viewAccomadationPartnerVisitDetails.remarks">
                              </q-input>
                          </div>
                          <div class="row q-pa-md justify-end">
                              <!-- <q-btn style="margin-right: 20px;" color="secondary" label="Submit" @click="onClickSubmit">
                          </q-btn> -->
                              <q-btn color="primary" label="Verify"
                                  :disabled="this.viewAccomadationPartnerVisitDetails.visitStatus === 'PENDING'"
                                  @click="onClickVerify"> </q-btn>

                          </div>
                      </q-form>


                      <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
                          :maximized="maximizedToggle" persistent>
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
                                      <iframe :src="url" class="wrapper" width="100%" height="600px"
                                          frameborder="1"></iframe>
                                  </div>
                              </q-card>
                          </q-layout>
                      </q-dialog>

                  </q-layout>
              </q-dialog>

          </div>




          <!-- //Ravi kiran Hospital Code -->
          <div style="margin: auto width:100vw">

              <q-table v-if="viewHospitalTable" title="Hospital Partner Visit Details" style="width:95vw;"
                  :data="admin_hospital_visit_data" :columns="admin_hospital_visit_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green" class="q-mt-md">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                          {{ props.row.visit_status.toUpperCase() }}


                      </q-chip> -->
                      </q-td>
                  </template>


                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>





                  <template v-slot:top-right="props">
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>


                      <div style="
                      display: flex;
                      align-items: center;
                      margin-right: 0px;

                      " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                      display: flex;

                      align-items: center;
                      margin-right: 20px;
                      margin-top: -10px;

                      ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                  display: flex;
                                  align-items: center;
                                  margin-top:-20px;

                              ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseHospitalDetails()" style="margin-right: 10px"
                                  color="primary" label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel v-if="admin_hospital_visit_data.length != 0" :data="admin_hospital_visit_data"
                          :header="headerValue" worksheet="Accomadation Visit Data Report"
                          :name="`${excel_date}_accomadation_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewHospitalVisitData(props.row)"
                              size="sm"><q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>


              </q-table>

              <q-table v-if="isDateRangeActiveForHospital" title="Hospital Partner Visit Details" style="width:95vw;"
                  :data="admin_datewise_hospital_data" :columns="admin_datewise_hospital_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green"
                  class="q-mt-md row center">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                                          {{ props.row.visit_status.toUpperCase() }}


                                      </q-chip> -->
                      </q-td>
                  </template>
                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>


                  <template v-slot:top-right="props">
                      <!-- <q-select dense options-dense outlined use-input hide-selected
                                      style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                                      label-color="black" v-model="selectCity" :options="cityArr" option-label="city"
                                      option-value="city">
                                      <template v-slot:no-option>
                                          <q-item>
                                              <q-item-section class="text-grey"> No results </q-item-section>
                                          </q-item>
                                      </template>
                                  </q-select> -->
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>

                      <div style="
                                      display: flex;
                                      align-items: center;
                                      margin-right: 0px;


                                      " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                                      display: flex;

                                      align-items: center;
                                      margin-right: 20px;
                                      margin-top: -10px;

                                      ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                                  display: flex;
                                                  align-items: center;
                                                  margin-top:-20px;

                                              ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseHospitalDetails()" style="margin-right: 10px"
                                  color="primary" label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel :data="admin_datewise_hospital_data" :header="headerValue"
                          worksheet="Hospital Visit Data Report" :name="`${excel_date}_hospital_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewHospitalVisitData(props.row)"
                              size="sm"><q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>
              </q-table>

              <q-dialog height="1000px" v-model="viewParticularRowDetailsForHospital" transition-show="slide-up"
                  transition-hide="slide-down" persistent :maximized="maximizedToggle">
                  <q-layout view="Lhh lpR fff" container class="bg-white">
                      <q-header class="bg-primary">
                          <q-bar class="bg-primary text-white">
                              <q-icon name="feed"></q-icon>
                              <div class="text-h6">
                                  View of Hospital Partner Visit Details:

                              </div>
                              <q-space />

                              <!-- <q-btn color="secondary" @click="generateAndDownloadPDF">Download PDF</q-btn> -->

                              <!-- <q-btn color="secondary">
                          <download-excel :data="admin_accomadation_visit_data"
                              :header="headerValue" worksheet="Accomadation Visit Data Report"
                              :name="`${excel_date}_accomadation_visits.xls`">
                              <q-icon color="primary" name="mdi-file-excel" size="22px" />Download Excel
                              <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                              </q-tooltip>
                          </download-excel>
                      </q-btn> -->

                              <q-btn dense flat icon="close" v-close-popup>
                                  <q-tooltip class="bg-white text-primary" @click="closeDialog">Close</q-tooltip>
                              </q-btn>

                          </q-bar>
                      </q-header>
                      <div id="property-pdf">
                          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
                              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <q-card class="q-ma-xs text-black">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh;">
                                          <q-icon name="manage_accounts" color="black" size="1.5em" />
                                          Hospital Basic Details
                                      </q-bar>
                                      <q-card-section class="q-pa-none">
                                          <div style="height: 420px">
                                              <div class="
                                              row
                                              text-black text-bold
                                              q-ma-xs q-pa-md
                                              text-body1
                                          ">
                                                  <div class="col-5 text-left text-black">Hospital Name</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.hospitalName }}
                                                  </div>
                                                  <div class="col-5 text-left text-black">Address</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.address }}
                                                  </div>
                                                  <div class="col-5 text-left text-black">Pin Code</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.pincode }}
                                                  </div>
                                                  <div class="col-5 text-left text-black">Hospital Phone Number</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.phoneNumber }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left text-black">Email ID</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.emailId }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Key Person Name</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.keyPersonName }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Key Person Mail</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.keyPersonMail }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Key Person Phone</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.keyPersonPhone }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Manager Name </div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.managerName }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Manager Mail ID</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.managerMail }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Manager Phone Number</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.managerPhone }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Inserted Date Time</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.insertedDateTime }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Updated Date Time</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.updatedDateTime }}
                                                  </div>
                                                  <div class="col-5 text-left">Visit Status</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.visitStatus }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-5 text-left">Admin Status</div>
                                                  <div class="col-7 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.adminStatus }}
                                                  </div>


                                              </div>
                                          </div>
                                      </q-card-section>
                                  </q-card>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                  <q-card class="q-ma-xs" id="owner-pdf">
                                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                              name="mdi-information" color="black" size="1.5em" />
                                          Other Details
                                      </q-bar>
                                      <q-card-section class="q-pa-none">
                                          <div style="height: 420px">
                                              <div class="
                      row
                      text-black text-bold
                      q-ma-xs q-pa-md
                      text-body1
                    ">
                                                  <div class="col-6 text-left text-black">Field Visit ID</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.fieldVisitId }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">User ID</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.userId }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">User Name</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.userName }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Employee ID</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.employeeId }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Employee Name</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.employeeName }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Employee Location</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.employeeLocation }}
                                                  </div>
                                                  <q-separator />

                                                  <div class="col-6 text-left text-black">Employee City ID </div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.cityId }}
                                                  </div>
                                                  <q-separator />

                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Is Hospital Providing Any
                                                      Accomadation</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.accomadation }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Accomadation Name</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.accomadationName }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black"> Flow of Outstation Patients per
                                                      Day ?</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.outstationFlow }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Is Any Third Party tieup for
                                                      Patient Accomadation ?</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.thirdParty }}
                                                  </div>
                                                  <q-separator />
                                                  <div class="col-6 text-left text-black">Third Party Name</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.thirdPartyName }}
                                                  </div>
                                                  <q-separator />

                                                  <div class="col-6 text-left text-black">Any Person of the hospital who
                                                      can be our asset ?</div>
                                                  <div class="col-6 text-left text-black">
                                                      : {{ this.viewHospitalPartnerVisitDetails.asset }}
                                                  </div>
                                                  <q-separator />




                                              </div>
                                          </div>
                                      </q-card-section>
                                  </q-card>
                              </div>
                              <q-resize-observer />
                          </div>

                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon
                                      name="" color="black" size="1.5em" />Discussion Brief
                              </q-bar>
                          </div>
                          <q-table style="font-family: verdana" dense separator="cell" wrap-cells  :data="keyPersonsDataRowForAdmin"
                              :columns="keyPersonsDataColumnForAdmin" :rows-per-page-options="[]" row-key="sno" no-data-label="No test names added">

                              <template v-slot:body-cell-actions="props">
                                  <q-td :props="props">
                                      <q-btn @click="deleteRow(props.row)" color="negative" dense flat round icon="delete"
                                          class="q-ml-xs" />
                                  </q-td>
                              </template>

                          </q-table>

                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon
                                      name="" color="black" size="1.5em" />Discussion Brief
                              </q-bar>
                          </div>
                          <q-form class="AccomBkgDetails" ref="accomadationFormBasic">
                              <div class="row" id="justify-sides">

                                  <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Discussion Brief"
                                      readonly hide-bottom-space
                                      style="width: 90vw; margin-left: 20px; margin-bottom: 15px;" label-color="black"
                                      type="textarea" v-model="this.viewHospitalPartnerVisitDetails.discussionBrief">

                                  </q-input>
                              </div>
                          </q-form>



                      </div>

                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px;">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <q-markup-table class="q-ma-xs">
                                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                          name="mdi-file-document" color="black" size="1.5em" />Documents
                                  </q-bar>
                                  <tbody>
                                      <div class="row">
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Hospital Image 1</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewHospitalPartnerVisitDetails.image_upt1"
                                                          @click="showDocument(viewHospitalPartnerVisitDetails.image_upt1, 'Hospital Image 1')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewHospitalPartnerVisitDetails.image_upt1"
                                                          @click="downloadDocument(viewHospitalPartnerVisitDetails.image_upt1, 'Hospital Image 1')"
                                                          icon="mdi-download" />

                                                  </td>

                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Hospital Image 2</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewHospitalPartnerVisitDetails.image_upt2"
                                                          @click="showDocument(viewHospitalPartnerVisitDetails.image_upt2, 'Hospital Image 2')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewHospitalPartnerVisitDetails.image_upt2"
                                                          @click="downloadDocument(viewHospitalPartnerVisitDetails.image_upt2, 'Hospital Image 2')"
                                                          icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Hospital Image 3</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"
                                                          :disabled="!this.viewHospitalPartnerVisitDetails.image_upt3"
                                                          @click="showDocument(viewHospitalPartnerVisitDetails.image_upt3, 'Hospital Image 3')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewHospitalPartnerVisitDetails.image_upt3"
                                                          @click="downloadDocument(viewHospitalPartnerVisitDetails.image_upt3, 'Hospital Image 3')"
                                                          icon="mdi-download" />
                                                  </td>


                                              </tr>
                                          </div>
                                      </div>
                                  </tbody>
                              </q-markup-table>
                          </div>
                      </div>









                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name=""
                                  color="black" size="1.5em" />Remarks
                          </q-bar>
                      </div>
                      <q-form class="AccomBkgDetails" ref="accomadationFormBasic"
                          style="margin-bottom: 100px; margin-left: 20px;">
                          <div class="row" id="justify-sides">

                              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Remarks" hide-bottom-space
                                  style="width: 90vw" label-color="black" type="textarea"
                                  v-model="viewHospitalPartnerVisitDetails.remarks">
                              </q-input>
                          </div>
                          <div class="row q-pa-md justify-end">
                              <!-- <q-btn style="margin-right: 20px;" color="secondary" label="Submit" @click="onClickSubmit">
                          </q-btn> -->
                              <q-btn color="primary" label="Verify"
                                  :disabled="this.viewHospitalPartnerVisitDetails.visitStatus === 'PENDING'"
                                  @click="onClickHospitalVerify"> </q-btn>

                          </div>
                      </q-form>


                      <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
                          :maximized="maximizedToggle" persistent>
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
                                      <iframe :src="url" class="wrapper" width="100%" height="600px"
                                          frameborder="1"></iframe>
                                  </div>
                              </q-card>
                          </q-layout>
                      </q-dialog>

                  </q-layout>
              </q-dialog>


          </div>



          <!-- Ravi kiran Food Code -->
          <div style="margin: auto width:100vw">

              <q-table v-if="viewFoodTable" title="Food Partner Visit Details" style="width:95vw;"
                  :data="admin_food_visit_data" :columns="admin_food_visit_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green" class="q-mt-md">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                          {{ props.row.visit_status.toUpperCase() }}


                      </q-chip> -->
                      </q-td>
                  </template>


                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>





                  <template v-slot:top-right="props">
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>


                      <div style="
                      display: flex;
                      align-items: center;
                      margin-right: 0px;

                      " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                      display: flex;

                      align-items: center;
                      margin-right: 20px;
                      margin-top: -10px;

                      ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                  display: flex;
                                  align-items: center;
                                  margin-top:-20px;

                              ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseFoodDetails()" style="margin-right: 10px" color="primary"
                                  label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel v-if="admin_food_visit_data.length != 0" :data="admin_food_visit_data"
                          :header="headerValue" worksheet="Food Visit Data Report"
                          :name="`${excel_date}_accomadation_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewFoodVisitData(props.row)" size="sm"><q-tooltip
                                  :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>


              </q-table>

              <q-table v-if="isDateRangeActiveForFood" title="Food Partner Visit Details" style="width:95vw;"
                  :data="admin_datewise_food_data" :columns="admin_datewise_food_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green"
                  class="q-mt-md row center">
                  d
                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                                          {{ props.row.visit_status.toUpperCase() }}


                                      </q-chip> -->
                      </q-td>
                  </template>
                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>


                  <template v-slot:top-right="props">
                      <!-- <q-select dense options-dense outlined use-input hide-selected
                                      style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                                      label-color="black" v-model="selectCity" :options="cityArr" option-label="city"
                                      option-value="city">
                                      <template v-slot:no-option>
                                          <q-item>
                                              <q-item-section class="text-grey"> No results </q-item-section>
                                          </q-item>
                                      </template>
                                  </q-select> -->
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>

                      <div style="
                                      display: flex;
                                      align-items: center;
                                      margin-right: 0px;


                                      " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                                      display: flex;

                                      align-items: center;
                                      margin-right: 20px;
                                      margin-top: -10px;

                                      ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                                  display: flex;
                                                  align-items: center;
                                                  margin-top:-20px;

                                              ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseFoodDetails()" style="margin-right: 10px" color="primary"
                                  label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel :data="admin_datewise_food_data" :header="headerValue"
                          worksheet="Food Visit Data Report" :name="`${excel_date}_hospital_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewFoodVisitData(props.row)" size="sm"><q-tooltip
                                  :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>
              </q-table>

              <q-dialog height="1000px" v-model="viewParticularRowDetailsForFood" transition-show="slide-up"
                  transition-hide="slide-down" persistent :maximized="maximizedToggle">
                  <q-layout view="Lhh lpR fff" container class="bg-white">
                      <q-header class="bg-primary">
                          <q-bar class="bg-primary text-white">
                              <q-icon name="feed"></q-icon>
                              <div class="text-h6">View of Food Partner Visit Details:</div>
                              <q-space />

                              <q-btn dense flat icon="close" v-close-popup>
                                  <q-tooltip class="bg-white text-primary" @click="closeDialog">Close</q-tooltip>
                              </q-btn>
                          </q-bar>
                      </q-header>

                      <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
                          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <q-card class="q-ma-xs text-black">
                                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                                      <q-icon name="manage_accounts" color="black" size="1.5em" />
                                      Restaurant Basic Details
                                  </q-bar>
                                  <q-card-section class="q-pa-none">
                                      <div style="height: 280px">
                                          <div class="row text-black text-bold q-ma-xs q-pa-md text-body1">
                                              <div class="col-6 text-left text-black">
                                                  Restaurant Name
                                              </div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.restaurantName }}
                                              </div>
                                              <div class="col-6 text-left text-black">Address</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.address }}
                                              </div>
                                              <div class="col-6 text-left text-black">Pin Code</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.pincode }}
                                              </div>
                                              <div class="col-6 text-left text-black">
                                                  Restaurant Phone Number
                                              </div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.phoneNumber }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left text-black">Email ID</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.emailId }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left text-black">
                                                  Near Hospital
                                              </div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.nearHospital }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left text-black">
                                                  Other Hospital
                                              </div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.otherHospital }}
                                              </div>
                                              <q-separator />
                                          </div>
                                      </div>
                                  </q-card-section>
                              </q-card>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <q-card class="q-ma-xs">
                                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                          name="mdi-information" color="black" size="1.5em" />
                                      Owner & Manager Details
                                  </q-bar>
                                  <q-card-section class="q-pa-none">
                                      <div style="height: 280px">
                                          <div class="row text-black text-bold q-ma-xs q-pa-md text-body1">
                                              <div class="col-6 text-left">Owner Name</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.ownerName }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left">Owner Mail ID</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.ownerMail }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left">Owner Phone Number</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.ownerPhone }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left">Manager Name</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.managerName }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left">Manager Mail ID</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.managerMail }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left">Manager Phone Number</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.managerPhone }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left text-black">item1</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.item1 }}
                                              </div>
                                              <q-separator />
                                              <div class="col-6 text-left text-black">item2</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.item2 }}
                                              </div>
                                              <div class="col-6 text-left">item3</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewFoodPartnerVisitDetails.item3 }}
                                              </div>
                                          </div>
                                      </div>
                                  </q-card-section>
                              </q-card>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <q-card class="q-ma-xs">
                                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                                      <q-icon name="mdi-information" color="black" size="1.6em" />
                                      Other Details
                                  </q-bar>
                                  <q-card-section class="q-pa-none">
                                      <div style="height: 280px">
                                          <div style="height: 280px">
                                              <div class="row text-black text-bold q-ma-xs q-pa-md text-body1">
                                                  <div class="col-5 text-left">Field Visit ID</div>
                                                  <div class="col-7 text-left text-black">
                                                      :
                                                      {{ this.viewFoodPartnerVisitDetails.fieldVisitId }}
                                                  </div>

                                                  <div class="col-5 text-left background-color-field">
                                                      User Name
                                                  </div>
                                                  <div class="col-7 text-left text-black">
                                                      :
                                                      {{ this.viewFoodPartnerVisitDetails.userName }}
                                                  </div>
                                                  <q-separator />


                                                  <div class="col-5 text-left">Discussion Brief</div>
                                                  <div class="col-7 text-left text-black">
                                                      :
                                                      {{ this.viewFoodPartnerVisitDetails.discussionBrief }}
                                                  </div>

                                                  <div class="col-5 text-left background-color-field">
                                                      MH Share Revenue
                                                  </div>
                                                  <div class="col-7 text-left text-black">
                                                      :
                                                      {{ this.viewFoodPartnerVisitDetails.MHShareRevenue }}
                                                  </div>
                                                  <q-separator />

                                                  <div class="col-5 text-left">Inserted DateTime</div>
                                                  <div class="col-7 text-left text-black">
                                                      :
                                                      {{
                                                          this.viewFoodPartnerVisitDetails.insertedDateTime
                                                      }}
                                                  </div>
                                                  <div class="col-5 text-left">Updated DateTime</div>
                                                  <div class="col-7 text-left text-black">
                                                      :
                                                      {{ this.viewFoodPartnerVisitDetails.updatedDateTime }}
                                                  </div>

                                                  <q-separator />

                                                  <div class="col-5 text-left">Visit Status</div>
                                                  <div class="col-7 text-left">
                                                      : {{ this.viewFoodPartnerVisitDetails.visitStatus }}
                                                  </div>

                                                  <div class="col-5 text-left">Admin Status</div>
                                                  <div class="col-7 text-left">
                                                      : {{ this.viewFoodPartnerVisitDetails.adminStatus }}
                                                  </div>
                                                  <q-separator />
                                              </div>
                                          </div>
                                      </div>
                                  </q-card-section>
                              </q-card>
                          </div>

                          <q-resize-observer />
                      </div>

                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <q-markup-table class="q-ma-xs">
                                  <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                          name="mdi-file-document" color="black" size="1.5em" />Documents
                                  </q-bar>
                                  <tbody>
                                      <div class="row">
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">PAN Card</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"  :disabled="!this.viewFoodPartnerVisitDetails.pan_card_upt" @click="
                                                              showDocument(
                                                                  viewFoodPartnerVisitDetails.pan_card_upt,
                                                                  'Pan Card'
                                                              )
                                                              " />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewFoodPartnerVisitDetails.pan_card_upt"
                                                          @click="downloadDocument(viewFoodPartnerVisitDetails.pan_card_upt, 'Pan Card')"
                                                          icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">GST</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"  :disabled="!this.viewFoodPartnerVisitDetails.gst_upt" @click="
                                                              showDocument(
                                                                  viewFoodPartnerVisitDetails.gst_upt,
                                                                  'Gst'
                                                              )
                                                              " />
                                                                <q-btn label="Download" color="secondary" size="sm"
                                                                  style="margin-left:5px;"
                                                                  :disabled="!this.viewFoodPartnerVisitDetails.gst_upt"
                                                                  @click="downloadDocument(viewFoodPartnerVisitDetails.gst_upt, 'Gst')"
                                                                  icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">Cancel Cheque</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"  :disabled="!this.viewFoodPartnerVisitDetails.cancel_cheque_upt" @click="
                                                              showDocument(
                                                                  viewFoodPartnerVisitDetails.cancel_cheque_upt,
                                                                  'Cancel Cheque'
                                                              )
                                                              " />
                                                               <q-btn label="Download" color="secondary" size="sm"
                                                                  style="margin-left:5px;"
                                                                  :disabled="!this.viewFoodPartnerVisitDetails.cancel_cheque_upt"
                                                                  @click="downloadDocument(viewFoodPartnerVisitDetails.cancel_cheque_upt, 'Cancel Cheque')"
                                                                  icon="mdi-download" />

                                                  </td>
                                              </tr>
                                          </div>
                                          <div class="col-12 col-sm-4">
                                              <tr>
                                                  <td class="text-left">FSSAI CERTIFICATE</td>
                                                  <td class="text-center">
                                                      <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                          icon-right="mdi-eye"  :disabled="!this.viewFoodPartnerVisitDetails.fssai_certificate" @click="
                                                              showDocument(
                                                                  viewFoodPartnerVisitDetails.fssai_certificate,
                                                                  'Fssai Certificate'
                                                              )
                                                              " />
                                                              <q-btn label="Download" color="secondary" size="sm"
                                                          style="margin-left:5px;"
                                                          :disabled="!this.viewFoodPartnerVisitDetails.fssai_certificate"
                                                          @click="downloadDocument(viewFoodPartnerVisitDetails.fssai_certificate, 'Fssai Certificate')"
                                                          icon="mdi-download" />
                                                  </td>
                                              </tr>
                                          </div>
                                      </div>
                                  </tbody>
                              </q-markup-table>
                          </div>
                      </div>

                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name=""
                                  color="black" size="1.5em" />Remarks
                          </q-bar>
                      </div>
                      <q-form class="AccomBkgDetails" ref="FoodFormBasic" style="margin-bottom: 100px; margin-left: 20px">
                          <div class="row" id="justify-sides">
                              <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Remarks" hide-bottom-space
                                  style="width: 90vw" label-color="black" type="textarea"
                                  v-model="viewFoodPartnerVisitDetails.FoodRemarks">
                              </q-input>
                          </div>
                          <div class="row q-pa-md justify-end">
                              <q-btn color="indigo" label="Verify" style="font-weight:bold"  :disabled="this.viewFoodPartnerVisitDetails.visitStatus === 'PENDING'" @click="onClickFoodVerify">
                              </q-btn>
                              <!-- <q-btn v-if="onAdminFoodVerify" color="primary" style="margin-left:20px;" label="Verify" @click="onClickFoodVerify"> </q-btn> -->
                          </div>
                      </q-form>

                      <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
                          :maximized="maximizedToggle" persistent>
                          <q-layout view="Lhh lpR fff" container class="bg-white">
                              <q-header class="bg-primary">
                                  <q-bar class="bg-primary text-white" style="height: 60px">
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
                                      <iframe :src="url" class="wrapper" width="100%" height="600px"
                                          frameborder="1"></iframe>
                                  </div>
                              </q-card>
                          </q-layout>
                      </q-dialog>
                  </q-layout>
              </q-dialog>

          </div>

      <!-- Ravi kiran Travel Code -->
          <div style="margin: auto width:100vw">
          <q-table v-if="viewTravelTable" title="Travel Partner Visit Details" style="width:95vw;"
                  :data="admin_travel_visit_data" :columns="admin_travel_visit_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green" class="q-mt-md">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                          {{ props.row.visit_status.toUpperCase() }}


                      </q-chip> -->
                      </q-td>
                  </template>


                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>





                  <template v-slot:top-right="props">
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>


                      <div style="
                      display: flex;
                      align-items: center;
                      margin-right: 0px;

                      " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                      display: flex;

                      align-items: center;
                      margin-right: 20px;
                      margin-top: -10px;

                      ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                  display: flex;
                                  align-items: center;
                                  margin-top:-20px;

                              ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseTravelDetails()" style="margin-right: 10px" color="primary"
                                  label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel v-if="admin_travel_datewise_visit_columns.length != 0" :data="admin_food_visit_data"
                          :header="headerValue" worksheet="Food Visit Data Report"
                          :name="`${excel_date}_accomadation_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewTravelVisitData(props.row)" size="sm"><q-tooltip
                                  :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>


              </q-table>

              <q-table v-if="isDateRangeActiveForTravel" title="Travel Partner Visit Details" style="width:95vw;"
                  :data="admin_travel_datewise_visit_data" :columns="admin_travel_datewise_visit_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green"
                  class="q-mt-md row center">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                                          {{ props.row.visit_status.toUpperCase() }}


                                      </q-chip> -->
                      </q-td>
                  </template>
                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>


                  <template v-slot:top-right="props">
                      <!-- <q-select dense options-dense outlined use-input hide-selected
                                      style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                                      label-color="black" v-model="selectCity" :options="cityArr" option-label="city"
                                      option-value="city">
                                      <template v-slot:no-option>
                                          <q-item>
                                              <q-item-section class="text-grey"> No results </q-item-section>
                                          </q-item>
                                      </template>
                                  </q-select> -->
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>

                      <div style="
                                      display: flex;
                                      align-items: center;
                                      margin-right: 0px;


                                      " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                                      display: flex;

                                      align-items: center;
                                      margin-right: 20px;
                                      margin-top: -10px;

                                      ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                                  display: flex;
                                                  align-items: center;
                                                  margin-top:-20px;

                                              ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseTravelDetails()" style="margin-right: 10px" color="primary"
                                  label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel :data="admin_datewise_food_data" :header="headerValue"
                          worksheet="Food Visit Data Report" :name="`${excel_date}_hospital_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewTravelVisitData(props.row)" size="sm"><q-tooltip
                                  :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>
              </q-table>

              <q-dialog  height="1000px" v-model="viewParticularRowDetailsForTravel" transition-show="slide-up"
              transition-hide="slide-down" persistent :maximized="maximizedToggle">
              <q-layout view="Lhh lpR fff" container class="bg-white">
                  <q-header class="bg-primary">
                      <q-bar class="bg-primary text-white">
                          <q-icon name="feed"></q-icon>
                          <div class="text-h6">
                              View of Travel Partner Visit Details:

                          </div>
                          <q-space />

                          <q-btn dense flat icon="close" v-close-popup>
                              <q-tooltip class="bg-white text-primary" @click="closeDialog">Close</q-tooltip>
                          </q-btn>
                      </q-bar>
                  </q-header>

                  <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                          <q-card class="q-ma-xs text-black">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh;" >
                                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                                  Travel Agency Basic Details
                              </q-bar>
                              <q-card-section class="q-pa-none">
                                  <div style="height: 280px">
                                      <div class="
                                              row
                                              text-black text-bold
                                              q-ma-xs q-pa-md
                                              text-body1
                                          ">
                                          <div class="col-5 text-left text-black">TravelAgency Name</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.travelAgencyName }}
                                          </div>
                                          <div class="col-5 text-left text-black">Address</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.address }}
                                          </div>
                                          <div class="col-5 text-left text-black">Pin Code</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.pincode }}
                                          </div>
                                          <div class="col-5 text-left text-black">Phone Number</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.phoneNumber }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left text-black">Email ID</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.emailId }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left text-black">Near Hospital</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.nearHospital }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left text-black">Other Hospital</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.otherHospital }}
                                          </div>
                                          <q-separator />

                                      </div>
                                  </div>
                              </q-card-section>
                          </q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                          <q-card class="q-ma-xs">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon name="mdi-information"
                                      color="black" size="1.5em" />
                                  Owner & Manager Details
                              </q-bar>
                              <q-card-section class="q-pa-none">
                                  <div style="height: 280px">
                                      <div class="
                      row
                      text-black text-bold
                      q-ma-xs q-pa-md
                      text-body1
                    ">
                                          <div class="col-5 text-left">Owner Name</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.ownerName }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Owner Mail ID</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.ownerMail }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Owner Phone Number</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.ownerPhone }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Manager Name </div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.managerName }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Manager Mail ID</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.managerMail }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Manager Phone Number</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewTravelPartnerVisitDetails.managerPhone }}
                                          </div>
                                          <q-separator />
                                          <!-- <div class="col-5 text-left">Discussion Brief</div> -->
                                              <!-- <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.discussionBrief }}
                                              </div> -->

                                      </div>
                                  </div>
                              </q-card-section>
                          </q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                          <q-card class="q-ma-xs">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                                  <q-icon name="mdi-information" color="black" size="1.5em" />
                                  Other Details
                              </q-bar>
                              <q-card-section class="q-pa-none">
                                  <div style="height: 280px">
                                      <div style="height: 280px">
                                          <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                                              <div class="col-5 text-left text-black">Field Visit ID</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.fieldVisitId }}
                                              </div>
                                              <div class="col-5 text-left text-black">User ID</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.userId }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left text-black">User Name</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.userName }}
                                              </div>
                                              <q-separator />

                                              <div class="col-5 text-left text-black">Account ID</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.employeeId }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left text-black">Employee Name</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.employeeName }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left text-black">Employee Location</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.employeeLocation }}
                                              </div>
                                              <q-separator />






                                              <div class="col-5 text-left">Inserted Date Time</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.insertedDateTime }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left"> Updated Date Time</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.updatedDateTime }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left"> Visit Status</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.visitStatus }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left"> Admin Status</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewTravelPartnerVisitDetails.adminStatus }}
                                              </div>
                                              <q-separator />

                                              <!-- <q-separator />
                                              <div class="col-6 text-left"> Share Revenue</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewAccomadationPartnerVisitDetails.shareRevenue }}
                                              </div> -->

                                          </div>
                                      </div>
                                  </div>
                              </q-card-section>
                          </q-card>
                      </div>


                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;"
                      ><q-icon
                          name=""
                          color="black"
                          size="1.5em"
                          />Discussion Brief
                       </q-bar>
                  </div>
                   <q-form class="AccomBkgDetails" ref="TravelFormBasic">
      <div class="row" id="justify-sides">
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          readonly
          label="Discussion Brief "
          hide-bottom-space
          style="width: 90vw"
          label-color="black"
          type="textarea"
          v-model="viewTravelPartnerVisitDetails.discussionBrief"
        >
        </q-input>

      </div>

    </q-form>

                  <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px;">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                          <q-markup-table class="q-ma-xs">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                      name="mdi-file-document" color="black" size="1.5em" />Documents
                              </q-bar>
                              <tbody>
                                  <div class="row">
                                      <div class="col-12 col-sm-4">
                                      <tr >
                                              <td class="text-left">PAN Card</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewTravelPartnerVisitDetails.pan_card_upt"
                                                      @click="showDocument(viewTravelPartnerVisitDetails.pan_card_upt, 'Pan Card')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewTravelPartnerVisitDetails.pan_card_upt"
                                                      @click="downloadDocument(viewTravelPartnerVisitDetails.pan_card_upt, 'Pan Card')"
                                                      icon="mdi-download" />
                                              </td>


                                      </tr>
                                  </div>
                                      <div class="col-12 col-sm-4">
                                          <tr>
                                              <td class="text-left">GST</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewTravelPartnerVisitDetails.gst_upt"
                                                      @click="showDocument(viewTravelPartnerVisitDetails.gst_upt, 'Gst')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewTravelPartnerVisitDetails.gst_upt"
                                                      @click="downloadDocument(viewTravelPartnerVisitDetails.gst_upt, 'GST')"
                                                      icon="mdi-download" />
                                              </td>
                                          </tr>
                                      </div>
                                      <div class="col-12 col-sm-4">
                                          <tr>
                                              <td class="text-left">Cancel Cheque</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewTravelPartnerVisitDetails.cancel_cheque_upt"
                                                      @click="showDocument(viewTravelPartnerVisitDetails.cancel_cheque_upt, 'Cancel Cheque')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewTravelPartnerVisitDetails.pan_card_upt"
                                                      @click="downloadDocument(viewTravelPartnerVisitDetails.pan_card_upt, 'Cancel Cheque')"
                                                      icon="mdi-download" />
                                              </td>
                                          </tr>
                                      </div>
                                  </div>
                              </tbody>
                          </q-markup-table>
                      </div>
                  </div>


                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name=""
                              color="black" size="1.5em" />Remarks
                      </q-bar>
                  </div>
                  <q-form class="AccomBkgDetails" ref="travelFormBasic"
                      style="margin-bottom: 100px; margin-left: 20px;">
                      <div class="row" id="justify-sides">
                          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Remarks" hide-bottom-space
                              style="width: 90vw" label-color="black" type="textarea" v-model="viewTravelPartnerVisitDetails.travelRemarks">
                          </q-input>
                      </div>
                      <div class="row q-pa-md justify-end">
                          <!-- <q-btn style="margin: 5px;" color="secondary" label="Submit" @click="onTravelClickSubmit"> </q-btn> -->
                          <q-btn style="margin: 5px;" color="primary"  label="Verify"  :disabled="this.viewTravelPartnerVisitDetails.visitStatus === 'PENDING'" @click="onTravelClickVerifyForm"> </q-btn>

                      </div>
                  </q-form>


                  <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
                      :maximized="maximizedToggle" persistent>
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
          </div>


           <!-- Ravi kiran Equipment Code -->
           <div style="margin: auto width:100vw">
          <q-table v-if="viewEquipmentTable" title="Equipment Partner Visit Details" style="width:95vw;"
                  :data="admin_equipment_visit_data" :columns="admin_equipment_visit_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green" class="q-mt-md">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                          {{ props.row.visit_status.toUpperCase() }}


                      </q-chip> -->
                      </q-td>
                  </template>


                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>





                  <template v-slot:top-right="props">
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>


                      <div style="
                      display: flex;
                      align-items: center;
                      margin-right: 0px;

                      " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                      display: flex;

                      align-items: center;
                      margin-right: 20px;
                      margin-top: -10px;

                      ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                  display: flex;
                                  align-items: center;
                                  margin-top:-20px;

                              ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseEquipmentDetails()" style="margin-right: 10px" color="primary"
                                  label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel v-if="admin_food_visit_data.length != 0" :data="admin_food_visit_data"
                          :header="headerValue" worksheet="Food Visit Data Report"
                          :name="`${excel_date}_accomadation_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewEquipmentVisitData(props.row)" size="sm"><q-tooltip
                                  :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>


              </q-table>

              <q-table v-if="isDateRangeActiveForEquipment" title="Equipment Partner Visit Details" style="width:95vw;"
                  :data="admin_equipment_datewise_visit_data" :columns="admin_equipment_datewise_visit_columns"
                  :rows-per-page-options="[100, 200, 300, 0]" dense separator="cell" :pagination.sync="pagination"
                  :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green"
                  class="q-mt-md row center">

                  <template v-slot:body-cell-visit_status="props">
                      <q-td :props="props">
                          <q-chip
                              :class="props.row.visit_status === 'PENDING' ? 'background2 text-center' : 'background3 text-center'">
                              {{ props.row.visit_status }}

                          </q-chip>
                          <!-- <q-chip style="font-weight: bold; background-color: green; color: white">
                                          {{ props.row.visit_status.toUpperCase() }}


                                      </q-chip> -->
                      </q-td>
                  </template>
                  <template v-slot:body-cell-admin_status="props">
                      <q-td :props="props">
                          <q-chip :class="props.row.admin_status === 'PENDING' ? 'background2' : 'background1'">
                              {{ props.row.admin_status }}

                          </q-chip>
                      </q-td>
                  </template>


                  <template v-slot:top-right="props">
                      <!-- <q-select dense options-dense outlined use-input hide-selected
                                      style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                                      label-color="black" v-model="selectCity" :options="cityArr" option-label="city"
                                      option-value="city">
                                      <template v-slot:no-option>
                                          <q-item>
                                              <q-item-section class="text-grey"> No results </q-item-section>
                                          </q-item>
                                      </template>
                                  </q-select> -->
                      <q-select dense options-dense outlined use-input hide-selected
                          style="width: 250px;margin-top: 10px;margin-right: 5px;" fill-input label="Select City "
                          label-color="black" v-model="selectCity" :options="cityOptions" @filter="filterFnCities"
                          option-label="city" option-value="city">
                          <template v-slot:no-option>
                              <q-item>
                                  <q-item-section class="text-grey"> No results </q-item-section>
                              </q-item>
                          </template>
                      </q-select>

                      <div style="
                                      display: flex;
                                      align-items: center;
                                      margin-right: 0px;


                                      " class="AccomBkgDetails">
                          <div class="AccomBkgTbl" style="
                                      display: flex;

                                      align-items: center;
                                      margin-right: 20px;
                                      margin-top: -10px;

                                      ">
                              <q-input dense outlined debounce="300" label="From Date" ref="checkFromDate"
                                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxyFromDate.show()"
                                  v-model="viewFieldVisitDateSet.fromDate"
                                  style="width: 200px; font-size: 12px; margin-top: 40px" :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyFromDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog1()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.fromDate" :options="optionsFn">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>
                          <div class="AccomBkgTbl" style="
                                                  display: flex;
                                                  align-items: center;
                                                  margin-top:-20px;

                                              ">
                              <q-input dense outlined debounce="300" label="To Date" ref="checkToDate" label-color="black"
                                  clear-icon="close" minimal @click="$refs.qDateProxyToDate.show()"
                                  v-model="viewFieldVisitDateSet.toDate"
                                  style="width: 200px; font-size: 12px; margin-top: 50px; margin-left:-10px;"
                                  :rules="[required('Date')]">
                                  <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy ref="qDateProxyToDate" minimal transition-show="scale"
                                              transition-hide="scale">
                                              <q-date @input="closeDialog2()" minimal mask="YYYY/MM/DD"
                                                  v-model="viewFieldVisitDateSet.toDate" :options="optionsFn2">
                                                  <div class="row items-center justify-end">
                                                      <q-btn v-close-popup label="Close" color="primary" minimal flat />
                                                  </div>
                                              </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                  </template>
                              </q-input>
                          </div>


                          <div class="AccomBkgTbl" style="display: flex; align-items: center; margin-top: 10px;">
                              <q-btn @click="loadVisitDateWiseEquipmentDetails()" style="margin-right: 10px" color="primary"
                                  label="Submit" class="q-ml-md" no-caps />
                          </div>

                      </div>



                      <q-input outlined dense debounce="300" v-model="filter" placeholder="Search"
                          style="width: 250px; margin-top:5px;">
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
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid"
                          }}
                          </q-tooltip>
                      </q-btn>
                      <download-excel :data="admin_datewise_food_data" :header="headerValue"
                          worksheet="Food Visit Data Report" :name="`${excel_date}_hospital_visits.xls`">
                          <q-icon color="primary" name="mdi-file-excel" size="22px" />
                          <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>Download Excel
                          </q-tooltip>
                      </download-excel>

                  </template>

                  <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                          <q-btn class="q-ml-sm" color="indigo" @click="viewEquipmentVisitData(props.row)" size="sm"><q-tooltip
                                  :disable="$q.platform.is.mobile">View</q-tooltip>View
                          </q-btn>
                      </q-td>
                  </template>
              </q-table>

              <q-dialog  height="1000px" v-model="viewParticularRowDetailsForEquipment" transition-show="slide-up"
              transition-hide="slide-down" persistent :maximized="maximizedToggle">
              <q-layout view="Lhh lpR fff" container class="bg-white">
                  <q-header class="bg-primary">
                      <q-bar class="bg-primary text-white">
                          <q-icon name="feed"></q-icon>
                          <div class="text-h6">
                              View of Equipment Visit Details:

                          </div>
                          <q-space />

                          <q-btn dense flat icon="close" v-close-popup>
                              <q-tooltip class="bg-white text-primary" @click="closeDialog">Close</q-tooltip>
                          </q-btn>
                      </q-bar>
                  </q-header>

                  <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                          <q-card class="q-ma-xs text-black">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh;" >
                                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                                  Equipment Basic Details
                              </q-bar>
                              <q-card-section class="q-pa-none">
                                  <div style="height: 280px">
                                      <div class="
                                              row
                                              text-black text-bold
                                              q-ma-xs q-pa-md
                                              text-body1
                                          ">
                                          <div class="col-5 text-left text-black">Equipment Name</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.equipmentName }}
                                          </div>
                                          <div class="col-5 text-left text-black">Address</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.address }}
                                          </div>
                                          <div class="col-5 text-left text-black">Pin Code</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.pincode }}
                                          </div>
                                          <div class="col-5 text-left text-black">Phone Number</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.phoneNumber }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left text-black">Email ID</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.emailId }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left text-black">Near Hospital</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.nearHospital }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left text-black">Other Hospital</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.otherHospital }}
                                          </div>
                                          <q-separator />

                                      </div>
                                  </div>
                              </q-card-section>
                          </q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                          <q-card class="q-ma-xs">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon name="mdi-information"
                                      color="black" size="1.5em" />
                                  Owner & Manager Details
                              </q-bar>
                              <q-card-section class="q-pa-none">
                                  <div style="height: 280px">
                                      <div class="
                      row
                      text-black text-bold
                      q-ma-xs q-pa-md
                      text-body1
                    ">
                                          <div class="col-5 text-left">Owner Name</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.ownerName }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Owner Mail ID</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.ownerMail }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Owner Phone Number</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.ownerPhone }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Manager Name </div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.managerName }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Manager Mail ID</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.managerMail }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Manager Phone Number</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.managerPhone }}
                                          </div>
                                          <q-separator />
                                          <q-separator />
                                          <div class="col-5 text-left">Oxygen Cylinder Rates</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.oxygenCylinders }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Tripod Stick Rates</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.tripod }}
                                          </div>
                                          <q-separator />
                                          <div class="col-5 text-left">Wheel Chair Rates</div>
                                          <div class="col-7 text-left text-black">
                                              : {{ this.viewEquipmentVisitDetails.wheel }}
                                          </div>
                                          <q-separator />
                                          <!-- <div class="col-5 text-left">Discussion Brief</div> -->
                                              <!-- <div class="col-7 text-left text-black">
                                                  : {{ this.viewEquipmentVisitDetails.discussionBrief }}
                                              </div> -->

                                      </div>
                                  </div>
                              </q-card-section>
                          </q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                          <q-card class="q-ma-xs">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                                  <q-icon name="mdi-information" color="black" size="1.5em" />
                                  Other Details
                              </q-bar>
                              <q-card-section class="q-pa-none">
                                  <div style="height: 280px">
                                      <div style="height: 280px">
                                          <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">

                                              <div class="col-5 text-left text-black">Employee ID</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewEquipmentVisitDetails.employeeId }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left text-black">Employee Name</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewEquipmentVisitDetails.employeeName }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left text-black">Employee Location</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewEquipmentVisitDetails.employeeLocation }}
                                              </div>
                                              <q-separator />






                                              <div class="col-5 text-left">Inserted Date Time</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewEquipmentVisitDetails.insertedDateTime }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left"> Updated Date Time</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewEquipmentVisitDetails.updatedDateTime }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left"> Visit Status</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewEquipmentVisitDetails.visitStatus }}
                                              </div>
                                              <q-separator />
                                              <div class="col-5 text-left"> Admin Status</div>
                                              <div class="col-7 text-left text-black">
                                                  : {{ this.viewEquipmentVisitDetails.adminStatus }}
                                              </div>
                                              <q-separator />

                                              <!-- <q-separator />
                                              <div class="col-6 text-left"> Share Revenue</div>
                                              <div class="col-6 text-left text-black">
                                                  : {{ this.viewAccomadationPartnerVisitDetails.shareRevenue }}
                                              </div> -->

                                          </div>
                                      </div>
                                  </div>
                              </q-card-section>
                          </q-card>
                      </div>


                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px;"
                      ><q-icon
                          name=""
                          color="black"
                          size="1.5em"
                          />Discussion Brief
                       </q-bar>
                  </div>
                   <q-form class="AccomBkgDetails" ref="EquipmentFormBasic">
      <div class="row" id="justify-sides">
        <q-input
          class="row col-3 q-mt-sm q-mr-sm"
          dense
          outlined
          readonly
          label="Discussion Brief "
          hide-bottom-space
          style="width: 90vw"
          label-color="black"
          type="textarea"
          v-model="viewEquipmentVisitDetails.discussionBrief"
        >
        </q-input>

      </div>

    </q-form>

                  <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px;">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                          <q-markup-table class="q-ma-xs">
                              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon
                                      name="mdi-file-document" color="black" size="1.5em" />Documents
                              </q-bar>
                              <tbody>
                                  <div class="row">
                                      <div class="col-12 col-sm-4">
                                      <tr >
                                              <td class="text-left">PAN Card</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewEquipmentVisitDetails.pan_card_upt"
                                                      @click="showDocument(viewEquipmentVisitDetails.pan_card_upt, 'Pan Card')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewEquipmentVisitDetails.pan_card_upt"
                                                      @click="downloadDocument(viewEquipmentVisitDetails.pan_card_upt, 'Pan Card')"
                                                      icon="mdi-download" />
                                              </td>

                                      </tr>
                                  </div>
                                      <div class="col-12 col-sm-4">
                                          <tr>
                                              <td class="text-left">GST</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewEquipmentVisitDetails.gst_upt"
                                                      @click="showDocument(viewEquipmentVisitDetails.gst_upt, 'Gst')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewEquipmentVisitDetails.gst_upt"
                                                      @click="downloadDocument(viewEquipmentVisitDetails.gst_upt, 'GST')"
                                                      icon="mdi-download" />
                                              </td>
                                          </tr>
                                      </div>
                                      <div class="col-12 col-sm-4">
                                          <tr>
                                              <td class="text-left">Cancel Cheque</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewEquipmentVisitDetails.cancel_cheque_upt"
                                                      @click="showDocument(viewEquipmentVisitDetails.cancel_cheque_upt, 'Cancel Cheque')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewEquipmentVisitDetails.cancel_cheque_upt"
                                                      @click="downloadDocument(viewEquipmentVisitDetails.cancel_cheque_upt, 'Cancel Cheque')"
                                                      icon="mdi-download" />
                                              </td>
                                          </tr>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-12 col-sm-4">
                                      <tr >
                                              <td class="text-left">Wheel Chair</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewEquipmentVisitDetails.wheel_chair_upt"
                                                      @click="showDocument(viewEquipmentVisitDetails.wheel_chair_upt, 'Wheel Chair')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewEquipmentVisitDetails.wheel_chair_upt"
                                                      @click="downloadDocument(viewEquipmentVisitDetails.wheel_chair_upt, 'Wheel Chair')"
                                                      icon="mdi-download" />
                                              </td>

                                      </tr>
                                  </div>
                                      <div class="col-12 col-sm-4">
                                          <tr>
                                              <td class="text-left">Oxygen Cylinder</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewEquipmentVisitDetails.oxygen_cylinder_upt"
                                                      @click="showDocument(viewEquipmentVisitDetails.oxygen_cylinder_upt, 'Oxygen Cylinder')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewEquipmentVisitDetails.oxygen_cylinder_upt"
                                                      @click="downloadDocument(viewEquipmentVisitDetails.oxygen_cylinder_upt, 'Pan Card')"
                                                      icon="mdi-download" />
                                              </td>
                                          </tr>
                                      </div>
                                      <div class="col-12 col-sm-4">
                                          <tr>
                                              <td class="text-left">Tripod Walking Stick</td>
                                              <td class="text-center">
                                                  <q-btn class="text-bold" label="view" color="secondary" size="sm"
                                                      icon-right="mdi-eye" :disabled="!this.viewEquipmentVisitDetails.tripod_walking_stick_upt "
                                                      @click="showDocument(viewEquipmentVisitDetails.tripod_walking_stick_upt , 'Tripod Walking Stick')" />
                                                      <q-btn label="Download" color="secondary" size="sm"
                                                      style="margin-left:5px;"
                                                      :disabled="!this.viewEquipmentVisitDetails.tripod_walking_stick_upt"
                                                      @click="downloadDocument(viewEquipmentVisitDetails.tripod_walking_stick_upt, 'Tripod Walking Stick')"
                                                      icon="mdi-download" />
                                              </td>
                                          </tr>
                                      </div>
                                  </div>
                              </tbody>
                          </q-markup-table>
                      </div>
                  </div>


                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-bar flat class="ma-02 text-bold" style="max-height: 20vh; margin-top: 15px"><q-icon name=""
                              color="black" size="1.5em" />Remarks
                      </q-bar>
                  </div>
                  <q-form class="AccomBkgDetails" ref="EquipmentFormBasic"
                      style="margin-bottom: 100px; margin-left: 20px;">
                      <div class="row" id="justify-sides">
                          <q-input class="row col-3 q-mt-sm q-mr-sm" dense outlined label="Remarks" hide-bottom-space
                              style="width: 90vw" label-color="black" type="textarea" v-model="viewEquipmentVisitDetails.equipmentRemarks">
                          </q-input>
                      </div>
                      <div class="row q-pa-md justify-end">
                          <!-- <q-btn style="margin: 5px;" color="secondary" label="Submit" @click="onTravelClickSubmit"> </q-btn> -->
                          <q-btn style="margin: 5px;" color="primary"  label="Verify"   :disabled="this.viewEquipmentVisitDetails.visitStatus === 'PENDING'" @click="onEquipmentVerifyForm"> </q-btn>

                      </div>
                  </q-form>


                  <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
                      :maximized="maximizedToggle" persistent>
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
          </div>



      </q-page>
  </q-page-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { date } from "quasar";
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
          pdfContent: [],
          dialogTitle: "",
          url: "",
          viewAccomadationTable: false,
          isDateRangeActiveForAccomadation: false,
          viewParticularRowDetails: false,

          viewHospitalTable: false,
          isDateRangeActiveForHospital: false,
          viewParticularRowDetailsForHospital: false,

          viewFoodTable: false,
          isDateRangeActiveForFood: false,
          viewParticularRowDetailsForFood: false,

          viewTravelTable: false,
          isDateRangeActiveForTravel: false,
          viewParticularRowDetailsForTravel: false,

          viewEquipmentTable: false,
          isDateRangeActiveForEquipment: false,
          viewParticularRowDetailsForEquipment: false,


          maximizedToggle: true,
          visible: false,
          showPanDoc: false,
          pick: false,
          small: false,
          cityOptions: [],
          selectCity: "",
          selectUserName: "",
          mode: "list",
          filter: "",
          selected: [],
          pagination: {
              rowsPerPage: 50,
              inputValue: "",
          },

          datewiseacctabledata: false,
          viewFieldVisitDateSet: {
              fromDate: null,
              toDate: null,
          },
          optionsFn(d) {
              return d <= date.formatDate(Date.now(), "YYYY/MM/DD");
          },
          closeDialog1() {
              this.$refs.qDateProxyFromDate.hide();
          },
          closeDialog2() {
              this.$refs.qDateProxyToDate.hide();
          },


          adminRemarks: "",
          headerValue: "Accomadation Visit  Details",
          excel_date: moment(new Date()).format("YYYY/MM/DD"),


          viewAccomadationPartnerVisitDetails: {
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
              propertyType: "",
              parking: "",
              lift: "",
              cctv: "",
              ramp: "",
              restaurant: "",
              selfKitchen: "",
              insertedDateTime: "",
              updatedDateTime: "",
              Tv: "",
              Wifi: "",
              hotWater: "",
              fridge: "",
              discussionBrief: "",
              shareRevenue: "",
              remarks: "",
              visitStatus: "",
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
              visitStatus: "",

          },

          viewHospitalPartnerVisitDetails: {
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


    viewFoodPartnerVisitDetails: {
      s_no: "",
      restaurantName: "",
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

      insertedDateTime: "",
      updatedDateTime: "",

      discussionBrief: "",
      shareRevenue: "",
      pan_card_upt: "",
      gst_upt: "",
      cancel_cheque_upt: "",
      fssai_certificate: "",

      item1: "",
      item2: "",
      item3: "",
      FoodRemarks: "",
    },

    viewTravelPartnerVisitDetails: {
              s_no: "",
              travelAgencyName: "",
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
              pan_card_upt: "",
              gst_upt: "",
              cancel_cheque_upt: "",
              travelRemarks: "",
              visitStatus:"",
              adminStatus:"",

          },

    viewEquipmentVisitDetails: {
              s_no: "",
              equipmentName: "",
              field_visit_id : "",
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
              pan_card_upt: "",
              gst_upt: "",
              cancel_cheque_upt: "",
              wheel_chair_upt : "",
              oxygen_cylinder_upt : "",
              tripod_walking_stick_upt : "",
              equipmentRemarks: "",
              visitStatus:"",
              adminStatus:"",

          },



      }

  },

  mounted() {
      this.$store.dispatch("adminDashboard/loadAccomadationPartnerDataForAdminReport");
      this.$store.dispatch("adminDashboard/loadHospitalPartnerDataForAdminReport");
      this.$store.dispatch("adminDashboard/loadFoodPartnerDataForAdminReport");
      this.$store.dispatch("adminDashboard/loadTravelPartnerDataForAdminReport");
      this.$store.dispatch("adminDashboard/loadCityArrForAdmin");
      this.$store.dispatch("adminDashboard/loadEquipmentPartnerDataForAdminReport");



      const today = new Date();
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(today.getDate() - 30);

      // Format the default values as "yyyy-MM-dd" for date inputs
      const formattedFromDate = this.formatDateIn(thirtyDaysAgo);
      const formattedToDate = this.formatDateIn(today);

      // console.log("From Date:", formattedFromDate);
      // console.log("To Date:", formattedToDate);
      this.viewFieldVisitDateSet.fromDate = formattedFromDate;
      this.viewFieldVisitDateSet.toDate = formattedToDate;


      //const inputDate = new Date("2023-10-11T09:43:10.000Z");



      //console.log(formattedDate);



  },

  computed: {



      optionsFn2(d) {
          let fromDate = date.formatDate(
              this.viewFieldVisitDateSet.fromDate,
              "YYYY/MM/DD"
          );
          let today = date.formatDate(new Date(), "YYYY/MM/DD");
          //console.log(fromDate);
          //console.log(d)
          return (d) => d >= fromDate && d <= today;
      },

      ...mapState({
          userDetails() {
              let user = JSON.parse(localStorage.getItem("user")) || [];
              //console.log(user);
              return user;
          },

          CityArr: (state) => state.adminDashboard.CityArr,
          roomCategoryRatesListRowForAdmin: (state) => state.adminDashboard.roomCategoryRatesListRowForAdmin,

          admin_accomadation_visit_columns: (state) => state.adminDashboard.admin_accomadation_visit_columns,
          admin_hospital_visit_columns: (state) => state.adminDashboard.admin_hospital_visit_columns,
          admin_food_visit_columns: (state) => state.adminDashboard.admin_food_visit_columns,

          admin_datewise_accomadation_columns: (state) => state.adminDashboard.admin_datewise_accomadation_columns,
          admin_datewise_hospital_columns: (state) => state.adminDashboard.admin_datewise_hospital_columns,
          admin_datewise_food_columns: (state) => state.adminDashboard.admin_datewise_food_columns,
          admin_travel_visit_columns : (state) => state.adminDashboard.admin_travel_visit_columns,
          // admin_datewise_travel_columns: (state) => state.adminDashboard.admin_datewise_travel_columns,
          admin_travel_datewise_visit_columns: (state) => state.adminDashboard.admin_travel_datewise_visit_columns,
          admin_equipment_visit_columns: (state) => state.adminDashboard.admin_equipment_visit_columns,
          admin_equipment_datewise_visit_columns: (state) => state.adminDashboard.admin_equipment_datewise_visit_columns,
          roomCategoryRatesListColumnForAdmin: (state) => state.adminDashboard.roomCategoryRatesListColumnForAdmin,

          keyPersonsDataRowForAdmin: (state) => state.adminDashboard.keyPersonsDataRowForAdmin,
          keyPersonsDataColumnForAdmin: (state) => state.adminDashboard.keyPersonsDataColumnForAdmin,

          ...mapGetters("adminDashboard", ["admin_accomadation_visit_data"]),
          ...mapGetters("adminDashboard", ["admin_datewise_visit_data"]),
          ...mapGetters("adminDashboard", ["admin_hospital_visit_data"]),
          ...mapGetters("adminDashboard", ["admin_datewise_hospital_data"]),
          ...mapGetters("adminDashboard", ["admin_food_visit_data"]),
          ...mapGetters("adminDashboard", ["admin_datewise_food_data"]),
          ...mapGetters("adminDashboard", ["admin_travel_visit_data"]),
          ...mapGetters("adminDashboard", ["admin_travel_datewise_visit_data"]),
          ...mapGetters("adminDashboard", ["admin_equipment_visit_data"]),
          ...mapGetters("adminDashboard", ["admin_equipment_datewise_visit_data"]),



      }),


  },



  methods: {

      ...mapActions("adminDashboard", ["loadCityArrForAdmin"]),

      ...mapActions('adminDashboard', ['loadAccomadationPartnerDataForAdminReport']),
      ...mapActions("adminDashboard", ["getDateWiseAccomadationDetails"]),
      ...mapActions("adminDashboard", ["addRemaksMethodSaving"]),
      ...mapActions("adminDashboard", ["verifyAccomadationPartnerByAdmin"]),
      ...mapActions("adminDashboard", ["loadRoomCategoriesListTableForAdmin"]),
      ...mapActions("adminDashboard", ["loadHospitalPartnerDataForAdminReport"]),
      ...mapActions("adminDashboard", ["loadFoodPartnerDataForAdminReport"]),

      ...mapActions("adminDashboard", ["getDateWiseHospitalDetails"]),
      ...mapActions("adminDashboard", ["addRemaksMethodSavingForHosptial"]),
      ...mapActions("adminDashboard", ["verifyHospitalPartnerByAdmin"]),
      ...mapActions("adminDashboard", ["getDateWiseFoodDetails"]),

      ...mapActions("adminDashboard", ["verifyAdminFormDataSaving"]),
      ...mapActions("adminDashboard", ["addFoodRemarksMethodSaving"]),
      ...mapActions["adminDashboard", ["loadTravelPartnerDataForAdminReport"]],
      ...mapActions("adminDashboard",["getDateWiseTravelDetails"]),
      ...mapActions["adminDashboard", ["loadEquipmentPartnerDataForAdminReport"]],
      ...mapActions("adminDashboard",["getDateWiseEquipmentDetails"]),
      ...mapActions("adminDashboard",["VerifyViewEquipmentPartnerDetailsSaving"]),
      ...mapActions("adminDashboard", ["addEquipmentRemaksMethodSaving"]),






      onDateString(stringDate) {
          //console.log(inputDate)
          let inputDate = new Date(stringDate)


          const day = inputDate.getDate().toString().padStart(2, '0');
          const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based, so we add 1.
          const year = inputDate.getFullYear();
          let hours = inputDate.getHours();
          const amPm = hours >= 12 ? 'PM' : 'AM';

          // Convert hours to 12-hour format
          hours = hours % 12 || 12;

          const minutes = inputDate.getMinutes().toString().padStart(2, '0');

          const formattedDate = `${year}/${month}/${day} ${hours}:${minutes} ${amPm}`;

          return formattedDate


      },

      onClickAccomadation() {
          // console.log('rk')
          // console.log(this.userDetails)
          this.viewAccomadationTable = true;
          this.viewHospitalTable = false;
          this.isDateRangeActiveForHospital = false;
          this.isDateRangeActiveForAccomadation = false;
          this.viewFoodTable = false;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = false;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = false;
      },

      onClickFood() {
          this.viewAccomadationTable = false;
          this.viewHospitalTable = false;
          this.isDateRangeActiveForHospital = false;
          this.isDateRangeActiveForAccomadation = false;
          this.viewFoodTable = true;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = false;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = false;
      },

      onClickHospital() {

          this.viewAccomadationTable = false;
          this.isDateRangeActiveForAccomadation = false;
          this.viewHospitalTable = true;
          this.viewFoodTable = false;
          this.isDateRangeActiveForHospital = false;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = false;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = false;
      },

      onClickTravel() {
          this.viewAccomadationTable = false;
          this.isDateRangeActiveForAccomadation = false;
          this.viewHospitalTable = false;
          this.viewFoodTable = false;
          this.isDateRangeActiveForHospital = false;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = true;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = false;
      },

      onClickEquipment() {
          this.viewAccomadationTable = false;
          this.isDateRangeActiveForAccomadation = false;
          this.viewHospitalTable = false;
          this.viewFoodTable = false;
          this.isDateRangeActiveForHospital = false;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = false;
          this.isDateRangeActiveForEquipment = false;
          this.viewEquipmentTable = true;
      },





      async loadVisitDateWiseDetails() {
          this.isDateRangeActiveForAccomadation = true;
          this.datewiseacctabledata = true;
          this.viewAccomadationTable = false;
          this.viewHospitalTable = false;
          this.isDateRangeActiveForHospital = false;
          this.viewFoodTable = false;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = false;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = false;

          const payload = {
              fromDate: this.viewFieldVisitDateSet.fromDate,
              toDate: this.viewFieldVisitDateSet.toDate,
              city: this.selectCity
          };
          //console.log(payload)
          this.$store.dispatch("adminDashboard/getDateWiseAccomadationDetails", payload);
      },


      async loadVisitDateWiseHospitalDetails() {
          this.isDateRangeActiveForAccomadation = false;
          this.viewHospitalTable = false;
          this.isDateRangeActiveForHospital = true;
          this.viewAccomadationTable = false;
          this.viewFoodTable = false;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = false;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = false;


          const payload = {
              fromDate: this.viewFieldVisitDateSet.fromDate,
              toDate: this.viewFieldVisitDateSet.toDate,
              city: this.selectCity
          };
          //console.log(payload)
          this.$store.dispatch("adminDashboard/getDateWiseHospitalDetails", payload);
      },

      async loadVisitDateWiseFoodDetails() {
          this.isDateRangeActiveForAccomadation = false;
          this.viewHospitalTable = false;
          this.isDateRangeActiveForHospital = false;
          this.viewAccomadationTable = false;
          this.viewFoodTable = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = false;
          this.isDateRangeActiveForFood = true;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = false;



          const payload = {
              fromDate: this.viewFieldVisitDateSet.fromDate,
              toDate: this.viewFieldVisitDateSet.toDate,
              city: this.selectCity,
          };
          // console.log(payload)
          this.$store.dispatch("adminDashboard/getDateWiseFoodDetails", payload);
      },

      loadVisitDateWiseTravelDetails() {
          this.isDateRangeActiveForAccomadation = false;
          this.viewHospitalTable = false;
          this.isDateRangeActiveForHospital = false;
          this.viewAccomadationTable = false;
          this.viewFoodTable = false;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = true;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = false;


          const payload = {
              fromDate: this.viewFieldVisitDateSet.fromDate,
              toDate: this.viewFieldVisitDateSet.toDate,
              city: this.selectCity
          };
          // console.log(payload)
          this.$store.dispatch("adminDashboard/getDateWiseTravelDetails", payload);

      },

      loadVisitDateWiseEquipmentDetails() {
          this.isDateRangeActiveForAccomadation = false;
          this.viewHospitalTable = false;
          this.isDateRangeActiveForHospital = false;
          this.viewAccomadationTable = false;
          this.viewFoodTable = false;
          this.isDateRangeActiveForFood = false;
          this.viewTravelTable = false;
          this.isDateRangeActiveForTravel = false;
          this.viewEquipmentTable = false;
          this.isDateRangeActiveForEquipment = true;


          const payload = {
              fromDate: this.viewFieldVisitDateSet.fromDate,
              toDate: this.viewFieldVisitDateSet.toDate,
              city: this.selectCity
          };
          // console.log(payload)
          this.$store.dispatch("adminDashboard/getDateWiseEquipmentDetails", payload);

      },


      fromDateSelected() {
          // console.log("sasa",this.defaultItem.dateModel.from);
          this.viewFieldVisitDateSet.toDate = this.viewFieldVisitDateSet.fromDate;
      },

      viewAccomadationVisitData(item) {
          // console.log(item)
          //this.$router.push("/viewParticularRowDetails");
          this.viewParticularRowDetails = true;
          this.viewAccomadationPartnerVisitDetails.s_no = item.s_no;
          this.viewAccomadationPartnerVisitDetails.employeeId = item.employee_id;
          this.viewAccomadationPartnerVisitDetails.employeeName = item.name;
          this.viewAccomadationPartnerVisitDetails.fieldVisitId = item.field_visit_id;
          this.viewAccomadationPartnerVisitDetails.userId = item.user_id;
          this.viewAccomadationPartnerVisitDetails.userName = item.user_name;
          this.viewAccomadationPartnerVisitDetails.cityId = item.city_id;
          this.viewAccomadationPartnerVisitDetails.employeeLocation = item.employee_location;
          this.viewAccomadationPartnerVisitDetails.propertyName = item.property_name;
          this.viewAccomadationPartnerVisitDetails.address = item.address;
          this.viewAccomadationPartnerVisitDetails.pincode = item.pin_code;
          this.viewAccomadationPartnerVisitDetails.phoneNumber = item.phone_number;
          this.viewAccomadationPartnerVisitDetails.emailId = item.email_id;
          this.viewAccomadationPartnerVisitDetails.nearHospital = item.near_hospital_name;
          this.viewAccomadationPartnerVisitDetails.otherHospital = item.other_hospital_name;
          this.viewAccomadationPartnerVisitDetails.ownerName = item.owner_name;
          this.viewAccomadationPartnerVisitDetails.ownerMail = item.owner_mail_id;
          this.viewAccomadationPartnerVisitDetails.ownerPhone = item.owner_phone_number;
          this.viewAccomadationPartnerVisitDetails.managerName = item.manager_name;
          this.viewAccomadationPartnerVisitDetails.managerMail = item.manager_mail_id;
          this.viewAccomadationPartnerVisitDetails.managerPhone = item.manager_phone_number;
          this.viewAccomadationPartnerVisitDetails.totalRooms = item.total_rooms;
          this.viewAccomadationPartnerVisitDetails.AC = item.total_ac_rooms;
          this.viewAccomadationPartnerVisitDetails.nonAc = item.total_non_ac_rooms;
          this.viewAccomadationPartnerVisitDetails.whichFloor = item.which_floor;
          this.viewAccomadationPartnerVisitDetails.farDistance = item.distance_hospital;
          this.viewAccomadationPartnerVisitDetails.aggregator = item.aggregator;
          this.viewAccomadationPartnerVisitDetails.aggregatorName = item.aggregator_name;
          this.viewAccomadationPartnerVisitDetails.checkIn = item.check_in_time;
          this.viewAccomadationPartnerVisitDetails.insertedDateTime = this.onDateString(item.inserted_date_time),
              this.viewAccomadationPartnerVisitDetails.updatedDateTime = this.onDateString(item.updated_date_time),
              this.viewAccomadationPartnerVisitDetails.checkOut = item.check_out_time;
          this.viewAccomadationPartnerVisitDetails.propertyType = item.property_type;
          this.viewAccomadationPartnerVisitDetails.parking = item.parking;
          this.viewAccomadationPartnerVisitDetails.lift = item.lift;
          this.viewAccomadationPartnerVisitDetails.cctv = item.cctv;
          this.viewAccomadationPartnerVisitDetails.ramp = item.ramp;
          this.viewAccomadationPartnerVisitDetails.restaurant = item.restaurant;
          this.viewAccomadationPartnerVisitDetails.selfKitchen = item.self_kitchen;
          this.viewAccomadationPartnerVisitDetails.Tv = item.tv;
          this.viewAccomadationPartnerVisitDetails.Wifi = item.wifi;
          this.viewAccomadationPartnerVisitDetails.hotWater = item.hot_water;
          this.viewAccomadationPartnerVisitDetails.fridge = item.fridge;
          this.viewAccomadationPartnerVisitDetails.discussionBrief = item.discussion_breif;
          this.viewAccomadationPartnerVisitDetails.shareRevenue = item.mh_share_revenue;
          this.viewAccomadationPartnerVisitDetails.remarks = item.remarks;
          this.viewAccomadationPartnerVisitDetails.visitStatus = item.visit_status;

          if (item.pan_card != "") {
              this.viewAccomadationPartnerVisitDetails.pan_card_upt = item.pan_card;
          } else {
              this.viewAccomadationPartnerVisitDetails.pan_card_upt = "";

          }

          if (item.gst != "") {
              this.viewAccomadationPartnerVisitDetails.gst_upt = item.gst;
          } else {
              this.viewAccomadationPartnerVisitDetails.gst_upt = "";

          }

          //this.viewAccomadationPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
          if (item.cancel_cheque != "") {
              this.viewAccomadationPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
          } else {
              this.viewAccomadationPartnerVisitDetails.cancel_cheque_upt = "";

          }

          //this.viewAccomadationPartnerVisitDetails.facade_upt = item.facade;
          if (item.facade != "") {
              this.viewAccomadationPartnerVisitDetails.facade_upt = item.facade;
          } else {
              this.viewAccomadationPartnerVisitDetails.facade_upt = "";

          }


          //this.viewAccomadationPartnerVisitDetails.facade2_upt = item.facade2;
          if (item.facade2 != "") {
              this.viewAccomadationPartnerVisitDetails.facade2_upt = item.facade2;
          } else {
              this.viewAccomadationPartnerVisitDetails.facade2_upt = "";

          }

          if (item.lobby1 != "") {
              this.viewAccomadationPartnerVisitDetails.lobby1_upt = item.lobby1;
          } else {
              this.viewAccomadationPartnerVisitDetails.lobby1_upt = "";

          }


          if (item.lobby2 != "") {
              this.viewAccomadationPartnerVisitDetails.lobby2_upt = item.lobby2;
          } else {
              this.viewAccomadationPartnerVisitDetails.lobby2_upt = "";


          }

          if (item.restaurant_pic != "") {
              this.viewAccomadationPartnerVisitDetails.restaurant_upt = item.restaurant_pic;
          } else {
              this.viewAccomadationPartnerVisitDetails.restaurant_upt = "";

          }

          if (item.self_kitchen_pic != "") {
              this.viewAccomadationPartnerVisitDetails.self_kitchen_upt = item.self_kitchen_pic;
          } else {
              this.viewAccomadationPartnerVisitDetails.self_kitchen_upt = "";

          }

          if (item.room1 != "") {
              this.viewAccomadationPartnerVisitDetails.room1_upt = item.room1;
          } else {
              this.viewAccomadationPartnerVisitDetails.room1_upt = "";

          }

          if (item.room1_bathroom != "") {
              this.viewAccomadationPartnerVisitDetails.room1_bathroom_upt = item.room1_bathroom;
          } else {
              this.viewAccomadationPartnerVisitDetails.room1_bathroom_upt = "";

          }

          if (item.room2 != "") {
              this.viewAccomadationPartnerVisitDetails.room2_upt = item.room2;
          } else {
              this.viewAccomadationPartnerVisitDetails.room2_upt = "";

          }

          if (item.room2_bathroom != "") {
              this.viewAccomadationPartnerVisitDetails.room2_bathroom_upt = item.room2_bathroom;
          } else {
              this.viewAccomadationPartnerVisitDetails.room2_bathroom_upt = "";

          }

          if (item.room3 != "") {
              this.viewAccomadationPartnerVisitDetails.room3_upt = item.room3;
          } else {
              this.viewAccomadationPartnerVisitDetails.room3_upt = "";

          }

          if (item.room3_bathroom != "") {
              this.viewAccomadationPartnerVisitDetails.room3_bathroom_upt = item.room3_bathroom;
          } else {
              this.viewAccomadationPartnerVisitDetails.room3_bathroom_upt = "";


          }
          // this.viewAccomadationPartnerVisitDetails.pan_card_upt = item.pan_card;
          // this.viewAccomadationPartnerVisitDetails.gst_upt = item.gst;
          // this.viewAccomadationPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
          // this.viewAccomadationPartnerVisitDetails.facade_upt = item.facade;
          // this.viewAccomadationPartnerVisitDetails.facade2_upt = item.facade2;
          // this.viewAccomadationPartnerVisitDetails.lobby1_upt = item.lobby1;
          // this.viewAccomadationPartnerVisitDetails.lobby2_upt = item.lobby2;
          // this.viewAccomadationPartnerVisitDetails.restaurant_upt = item.restaurant_pic;
          // this.viewAccomadationPartnerVisitDetails.self_kitchen_upt = item.self_kitchen_pic;
          // this.viewAccomadationPartnerVisitDetails.room1_upt = item.room1;
          // this.viewAccomadationPartnerVisitDetails.room1_bathroom_upt = item.room1_bathroom;
          // this.viewAccomadationPartnerVisitDetails.room2_upt = item.room2;
          // this.viewAccomadationPartnerVisitDetails.room2_bathroom_upt = item.room2_bathroom;
          // this.viewAccomadationPartnerVisitDetails.room3_upt = item.room3;
          // this.viewAccomadationPartnerVisitDetails.room3_bathroom_upt = item.room3_bathroom;
          // this.viewAccomadationPartnerVisitDetails.visitStatus = item.visit_status;


          this.$store.dispatch("adminDashboard/loadRoomCategoriesListTableForAdmin", this.viewAccomadationPartnerVisitDetails);

      },

      viewHospitalVisitData(item) {
          //console.log(item)
          //console.log(this.keyPersonsDataRowForAdmin)

          this.viewParticularRowDetailsForHospital = true;
          this.viewHospitalPartnerVisitDetails.s_no = item.s_no;
          this.viewHospitalPartnerVisitDetails.employeeId = item.employee_id;
          this.viewHospitalPartnerVisitDetails.employeeName = item.name;
          this.viewHospitalPartnerVisitDetails.fieldVisitId = item.field_visit_id;
          this.viewHospitalPartnerVisitDetails.userId = item.user_id;
          this.viewHospitalPartnerVisitDetails.userName = item.user_name;
          this.viewHospitalPartnerVisitDetails.cityId = item.city_id;
          this.viewHospitalPartnerVisitDetails.employeeLocation = item.employee_location;
          this.viewHospitalPartnerVisitDetails.hospitalName = item.hospital_name;
          this.viewHospitalPartnerVisitDetails.address = item.address;
          this.viewHospitalPartnerVisitDetails.pincode = item.pincode;
          this.viewHospitalPartnerVisitDetails.phoneNumber = item.phone_number;
          this.viewHospitalPartnerVisitDetails.emailId = item.email;
          this.viewHospitalPartnerVisitDetails.keyPersonName = item.key_person_name;
          this.viewHospitalPartnerVisitDetails.keyPersonMail = item.key_person_mail;
          this.viewHospitalPartnerVisitDetails.keyPersonPhone = item.key_person_phone;
          this.viewHospitalPartnerVisitDetails.managerName = item.manager_name;
          this.viewHospitalPartnerVisitDetails.managerMail = item.manager_mail;
          this.viewHospitalPartnerVisitDetails.managerPhone = item.manager_phone;
          this.viewHospitalPartnerVisitDetails.accomadation = item.providing_accomadation;
          this.viewHospitalPartnerVisitDetails.accomadationName = item.accomadation_name;
          this.viewHospitalPartnerVisitDetails.outstationFlow = item.outstation_flow;
          this.viewHospitalPartnerVisitDetails.thirdParty = item.third_party;
          this.viewHospitalPartnerVisitDetails.asset = item.asset;


          this.viewHospitalPartnerVisitDetails.insertedDateTime = this.onDateString(item.inserted_date_time),
              this.viewHospitalPartnerVisitDetails.updatedDateTime = this.onDateString(item.updated_date_time),
              this.viewHospitalPartnerVisitDetails.discussionBrief = item.discussion_brief;

          this.viewHospitalPartnerVisitDetails.remarks = item.remarks;
          this.viewHospitalPartnerVisitDetails.visitStatus = item.visit_status;
          this.viewHospitalPartnerVisitDetails.adminStatus = item.admin_status;

          if (item.pan_card != "") {
              this.viewHospitalPartnerVisitDetails.image_upt1 = item.hospital_image_1;
          } else {
              this.viewHospitalPartnerVisitDetails.image_upt1 = "";

          }

          if (item.gst != "") {
              this.viewHospitalPartnerVisitDetails.image_upt2 = item.hospital_image_2;
          } else {
              this.viewHospitalPartnerVisitDetails.image_upt2 = "";

          }


          if (item.cancel_cheque != "") {
              this.viewHospitalPartnerVisitDetails.image_upt3 = item.hospital_image_3;
          } else {
              this.viewHospitalPartnerVisitDetails.image_upt3 = "";

          }






          this.$store.dispatch("adminDashboard/loadDepartmentsTableForAdmin", this.viewHospitalPartnerVisitDetails);

      },

      viewFoodVisitData(item) {
          //this.$router.push("/viewParticularRowDetails");

          console.log(item)


          this.viewParticularRowDetails = false;
          this.viewParticularRowDetailsForHospital = false;
          this.viewParticularRowDetailsForFood = true;
          this.viewFoodPartnerVisitDetails.s_no = item.s_no;
          this.viewFoodPartnerVisitDetails.employeeId = item.employee_id;
          (this.viewFoodPartnerVisitDetails.name = item.name),
              (this.viewFoodPartnerVisitDetails.employeeLocation =
                  item.employee_location);
          this.viewFoodPartnerVisitDetails.restaurantName = item.restaurant_name;
          this.viewFoodPartnerVisitDetails.address = item.address;
          this.viewFoodPartnerVisitDetails.pincode = item.pincode;
          this.viewFoodPartnerVisitDetails.phoneNumber = item.phone_number;
          this.viewFoodPartnerVisitDetails.emailId = item.email_id;
          this.viewFoodPartnerVisitDetails.nearHospital = item.near_hospital_name;
          this.viewFoodPartnerVisitDetails.otherHospital = item.other_hospital_name;
          this.viewFoodPartnerVisitDetails.ownerName = item.owner_name;
          this.viewFoodPartnerVisitDetails.ownerMail = item.owner_mail;
          this.viewFoodPartnerVisitDetails.ownerPhone = item.owner_phone_number;
          this.viewFoodPartnerVisitDetails.managerName = item.manager_name;
          this.viewFoodPartnerVisitDetails.managerMail = item.manager_mail;
          this.viewFoodPartnerVisitDetails.managerPhone = item.manager_phone_number;
          this.viewFoodPartnerVisitDetails.item1 = item.item1;
          this.viewFoodPartnerVisitDetails.item2 = item.item2;
          this.viewFoodPartnerVisitDetails.item3 = item.item3;

          this.viewFoodPartnerVisitDetails.discussionBrief = item.discussion_brief;
          this.viewFoodPartnerVisitDetails.fieldVisitId = item.field_visit_id;
          this.viewFoodPartnerVisitDetails.userName = item.user_name;
          this.viewFoodPartnerVisitDetails.shareRevenue = item.mh_share_revenue;
          this.viewFoodPartnerVisitDetails.pan_card_upt = item.pan_card;
          this.viewFoodPartnerVisitDetails.gst_upt = item.gst;
          this.viewFoodPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
          this.viewFoodPartnerVisitDetails.fssai_certificate =
              item.fssai_certificate;
          this.viewFoodPartnerVisitDetails.MHShareRevenue = item.mh_share_revenue;
          this.viewFoodPartnerVisitDetails.updatedDateTime = this.onDateString(
              item.updated_date_time
          );
          this.viewFoodPartnerVisitDetails.insertedDateTime = this.onDateString(
              item.inserted_date_time
          );

          this.viewFoodPartnerVisitDetails.visitStatus = item.visit_status;
          this.viewFoodPartnerVisitDetails.adminStatus = item.admin_status;
          this.viewFoodPartnerVisitDetails.FoodRemarks = item.remarks;
      },


      viewTravelVisitData(item) {
           console.log("page",item)
          this.viewParticularRowDetailsForTravel = true;
          this.viewTravelPartnerVisitDetails.s_no = item.s_no
          this.viewTravelPartnerVisitDetails.travelAgencyName = item.travel_agency_name
          this.viewTravelPartnerVisitDetails.address = item.address
          this.viewTravelPartnerVisitDetails.pincode = item.pin_code
          this.viewTravelPartnerVisitDetails.phoneNumber = item.phone_number
          this.viewTravelPartnerVisitDetails.emailId = item.email_id
          this.viewTravelPartnerVisitDetails.nearHospital = item.near_hospital_name
          this.viewTravelPartnerVisitDetails.otherHospital = item.other_hospital_name
          this.viewTravelPartnerVisitDetails.ownerName = item.owner_name
          this.viewTravelPartnerVisitDetails.ownerMail = item.owner_mail
          this.viewTravelPartnerVisitDetails.ownerPhone = item.owner_phone_number
          this.viewTravelPartnerVisitDetails.managerName = item.manager_name
          this.viewTravelPartnerVisitDetails.managerMail = item.manager_mail
          this.viewTravelPartnerVisitDetails.managerPhone = item.manager_phone_number
          this.viewTravelPartnerVisitDetails.discussionBrief = item.discussion_brief
          this.viewTravelPartnerVisitDetails.shareRevenue = item.mh_share_revenue
          // this.viewTravelPartnerVisitDetails.pan_card_upt = item.pan_card
          // this.viewTravelPartnerVisitDetails.gst_upt = item.gst
          // this.viewTravelPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque
          this.viewTravelPartnerVisitDetails.employeeId  = item.employee_id
          this.viewTravelPartnerVisitDetails.employeeName  = item.name
          this.viewTravelPartnerVisitDetails.employeeLocation  = item.employee_location
          this.viewTravelPartnerVisitDetails.userId = item.user_id
          this.viewTravelPartnerVisitDetails.userName = item.user_name
          this.viewTravelPartnerVisitDetails.fieldVisitId = item.field_visit_id
          this.viewTravelPartnerVisitDetails.insertedDateTime = this.onDateString(item.inserted_date_time)
          this.viewTravelPartnerVisitDetails.updatedDateTime = this.onDateString(item.updated_date_time)
          this.viewTravelPartnerVisitDetails.travelRemarks = item.remarks
          this.viewTravelPartnerVisitDetails.visitStatus = item.visit_status
          this.viewTravelPartnerVisitDetails.adminStatus = item.admin_status




          if (item.pan_card_upt != ""){
        this.viewTravelPartnerVisitDetails.pan_card_upt = item.pan_card;
      }
      else {
        this.viewTravelPartnerVisitDetails.pan_card_upt = false;
      }

      if (item.gst_upt != ""){
        this.viewTravelPartnerVisitDetails.gst_upt = item.gst;
      }
      else {
        this.viewTravelPartnerVisitDetails.gst_upt = false;
      }

      if (item.cancel_cheque_upt != ""){
        this.viewTravelPartnerVisitDetails.cancel_cheque_upt = item.cancel_cheque;
      }
      else {
        this.viewTravelPartnerVisitDetails.cancel_cheque_upt = false;
      }

      },

      viewEquipmentVisitData(item) {
          this.viewParticularRowDetailsForEquipment = true;
          // console.log(item)
          this.viewEquipmentVisitDetails.s_no = item.s_no
          this.viewEquipmentVisitDetails.field_visit_id = item.field_visit_id
          this.viewEquipmentVisitDetails.equipmentName = item.equipment_name
          this.viewEquipmentVisitDetails.address = item.address
          this.viewEquipmentVisitDetails.pincode = item.pin_code
          this.viewEquipmentVisitDetails.phoneNumber = item.phone_number
          this.viewEquipmentVisitDetails.emailId = item.email_id
          this.viewEquipmentVisitDetails.nearHospital = item.near_hospital_name
          this.viewEquipmentVisitDetails.otherHospital = item.other_hospital_name
          this.viewEquipmentVisitDetails.ownerName = item.owner_name
          this.viewEquipmentVisitDetails.ownerMail = item.owner_mail
          this.viewEquipmentVisitDetails.ownerPhone = item.owner_phone_number
          this.viewEquipmentVisitDetails.managerName = item.manager_name
          this.viewEquipmentVisitDetails.managerMail = item.manager_mail
          this.viewEquipmentVisitDetails.managerPhone = item.manager_phone_number
          this.viewEquipmentVisitDetails.oxygenCylinders = item.oxygen_cylinders
          this.viewEquipmentVisitDetails.tripod = item.tripod_walking_stick
          this.viewEquipmentVisitDetails.wheel = item.wheel_chairs
          this.viewEquipmentVisitDetails.discussionBrief = item.discussion_brief
          this.viewEquipmentVisitDetails.shareRevenue = item.mh_share_revenue
          // this.viewEquipmentVisitDetails.pan_card_upt = item.pan_card
          // this.viewEquipmentVisitDetails.gst_upt = item.gst
          // this.viewEquipmentVisitDetails.cancel_cheque_upt = item.cancel_cheque
          this.viewEquipmentVisitDetails.employeeId  = item.employee_id
          this.viewEquipmentVisitDetails.employeeName  = item.name
          this.viewEquipmentVisitDetails.employeeLocation  = item.employee_location
          this.viewEquipmentVisitDetails.insertedDateTime = this.onDateString(item.inserted_date_time)
          this.viewEquipmentVisitDetails.updatedDateTime = this.onDateString(item.updated_date_time)
          this.viewEquipmentVisitDetails.equipmentRemarks = item.remarks
          this.viewEquipmentVisitDetails.visitStatus = item.visit_status
          this.viewEquipmentVisitDetails.adminStatus = item.admin_status




      if (item.pan_card_upt != ""){
        this.viewEquipmentVisitDetails.pan_card_upt = item.pan_card;
      }
      else {
        this.viewEquipmentVisitDetails.pan_card_upt = "";
      }

      if (item.gst_upt != ""){
        this.viewEquipmentVisitDetails.gst_upt = item.gst;
      }
      else {
        this.viewEquipmentVisitDetails.gst_upt = "";
      }

      if (item.cancel_cheque_upt != ""){
        this.viewEquipmentVisitDetails.cancel_cheque_upt = item.cancel_cheque;
      }
      else {
        this.viewEquipmentVisitDetails.cancel_cheque_upt = "";
      }
      if (item.wheel_chair_pic != ""){
        this.viewEquipmentVisitDetails.wheel_chair_upt= item.wheel_chair_pic;
      }
      else {
        this.viewEquipmentVisitDetails.wheel_chair_upt = "";
      }

      if (item.oxygen_cylinder_pic != ""){
        this.viewEquipmentVisitDetails.oxygen_cylinder_upt = item.oxygen_cylinder_pic;
      }
      else {
        this.viewEquipmentVisitDetails.oxygen_cylinder_upt = "";
      }

      if (item.tripod_walking_stick_pic != ""){
        this.viewEquipmentVisitDetails.tripod_walking_stick_upt = item.tripod_walking_stick_pic;
      }
      else {
        this.viewEquipmentVisitDetails.tripod_walking_stick_upt = "";
      }



      },



      closeDialog() {
          this.viewParticularRowDetails = false;
      },

      formatDateIn(date) {
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
          const year = date.getFullYear();
          return `${year}/${month}/${day}`;
      },

      showDocument(file, dialogName) {
          console.log(file, dialogName)
          this.visible = true;
          setTimeout(() => {
              this.showPanDoc = true;
              this.dialogTitle = `${dialogName}: ${file}`;
              this.url = filepaths.mhVisitFilePath + file;
              console.log(this.url)
              this.visible = false;
          }, 2000);


          this.small = true;
      },



      downloadDocument(file, dialogName) {
          const link = document.createElement('a');
          link.href = this.url;
          console.log(link.href)
          this.dialogTitle = `${dialogName}: ${file}`;
          console.log(this.dialogTitle)
          link.download = this.dialogTitle;
          console.log(link.download)
          link.target = '_blank'; // Open in a new tab
          link.click()

      },

      onClickVerify() {
          //console.log(this.updateAccomadationPartnerVisitDetails)
          if (this.viewAccomadationPartnerVisitDetails.visitStatus == "LISTED") {
              this.$q
                  .dialog({
                      title: "Confirm",
                      message: "Do you want to Verify data ?",
                      cancel: true,
                      persistent: true,
                  })
                  .onOk(() => {
                      let payload = {
                          add_remarks: this.viewAccomadationPartnerVisitDetails.remarks,
                          serial_num: this.viewAccomadationPartnerVisitDetails.s_no
                      };
                      //let serial_num = this.viewAccomadationPartnerVisitDetails.s_no;
                      this.addRemaksMethodSaving(payload);

                      this.adminRemarks = "";
                      //console.log(this.viewAccomadationPartnerVisitDetails)
                      this.verifyAccomadationPartnerByAdmin(this.viewAccomadationPartnerVisitDetails);
                      this.viewParticularRowDetails = false;
                  })
                  .onCancel(() => {
                      this.viewParticularRowDetails = false;
                  })
          } else {
              this.$q.notify({
                  color: "negative",
                  position: "top",
                  message: `Property is Not Yet Listed...`,
              });
          }

      },

      onClickHospitalVerify() {
          // console.log(this.viewHospitalPartnerVisitDetails.remarks)
          if (this.viewHospitalPartnerVisitDetails.visitStatus == "LISTED") {
              this.$q
                  .dialog({
                      title: "Confirm",
                      message: "Do you want to Verify data ?",
                      cancel: true,
                      persistent: true,
                  })
                  .onOk(() => {
                      let payload = {
                          add_remarks: this.viewHospitalPartnerVisitDetails.remarks,
                          serial_num: this.viewHospitalPartnerVisitDetails.s_no
                      };
                      //let serial_num = this.viewHospitalPartnerVisitDetails.s_no;
                      this.addRemaksMethodSavingForHosptial(payload);

                      this.adminRemarks = "";
                      //console.log(this.viewHospitalPartnerVisitDetails)
                      this.verifyHospitalPartnerByAdmin(this.viewHospitalPartnerVisitDetails);
                      this.viewParticularRowDetailsForHospital = false;
                  })
                  .onCancel(() => {
                      this.viewParticularRowDetailsForHospital = false;
                  })
          } else {
              this.$q.notify({
                  color: "negative",
                  position: "top",
                  message: `Hospital is Not Yet Listed...`,
              });
          }

      },



      filterFnCities(val, update) {
          //console.log(val)
          if (val === "") {
              update(() => {
                  this.cityOptions = this.CityArr;
              });
              return this.cityOptions;
          }
          update(() => {
              const needle = this.CityArr.filter((items) => {
                  return Object.values(items).some((item) =>
                      item.toLowerCase().includes(val.toLowerCase())
                  );
              });
              this.cityOptions = needle;
              return this.cityOptions;
          });
      },


      onClickAgent() {
          // console.log('rk')
          // console.log(this.userDetails)
          this.viewAccomadationTable = false;
          this.isDateRangeActiveForAccomadation = false;
          this.viewHospitalTable = false;
          this.isDateRangeActiveForHospital = false;

      },


      onClickFoodVerify() {
    this.$refs.FoodFormBasic.validate().then((success) => {
      if (
        this.viewFoodPartnerVisitDetails.visitStatus != "PENDING"
      ) {
        this.$q
          .dialog({
            title: "Confirm",
            message: "Do you want to Verify data ?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {
            this.verifyAdminFormDataSaving(this.viewFoodPartnerVisitDetails);

            let payload = {
              add_remarks: this.viewFoodPartnerVisitDetails.FoodRemarks,
              serial_num: this.viewFoodPartnerVisitDetails.s_no,
            };
            // console.log("sfnjdsbfdhj",item)

            console.log("doods", payload);
            //let serial_num = this.viewAccomadationPartnerVisitDetails.s_no;
            this.addFoodRemarksMethodSaving(payload);

            this.foodVisitDataDialog = false;
          })
          .onCancel(() => {
            //this.resetFiles();
            this.editDataDailogue = true;
          });
      } else {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: `Restaurant is Not Yet Listed...`,
        });
      }
    });
  },

  onTravelClickVerifyForm() {
      this.$refs.travelFormBasic.validate().then((success) => {
        if (this.viewTravelPartnerVisitDetails.visitStatus != "PENDING") {
      this.$q.dialog({
                title: "Confirm",
                message: "Do you want to Verify data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                  this.VerifyViewTravelPartnerVisitDetailsSaving(this.viewTravelPartnerVisitDetails);
                  console.log(this.viewTravelPartnerVisitDetails.travelRemarks, this.viewTravelPartnerVisitDetails.s_no);
                          let payload = {
                              add_remarks: this.viewTravelPartnerVisitDetails.travelRemarks,
                              serial_num: this.viewTravelPartnerVisitDetails.s_no

                          };
                          //let serial_num = this.viewAccomadationPartnerVisitDetails.s_no;
              // console.log("Hello payload",payload)
              this.addTravelRemaksMethodSaving(payload);

              this.viewTravelPartnerVisitDetails.travelRemarks = "";
              this.closeDialog()
      })
      .onCancel(() => {
      //   this.resetFiles();
        this.editDataDialog = true;
              })
              .onCancel(() => {
                // this.resetFiles();
                this.travelVisitDataDialog = true;
              })
    }
    else {
             this.$q.notify({
                color: "negative",
                position: "top",
                message: `Travel Agency Details Not Yet Listed....`,
              });

    }
    });

    },

  onEquipmentVerifyForm() {
      this.$refs.EquipmentFormBasic.validate().then((success) => {
        if (this.viewEquipmentVisitDetails.visitStatus != "PENDING") {
      this.$q.dialog({
                title: "Confirm",
                message: "Do you want to Verify data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                  // console.log(this.viewEquipmentVisitDetails.equipmentRemarks, this.viewEquipmentVisitDetails.s_no);
                          let payload = {
                              add_remarks: this.viewEquipmentVisitDetails.equipmentRemarks,
                              field_visit_id: this.viewEquipmentVisitDetails.field_visit_id

                          };
                          console.log(payload)

                   this.VerifyViewEquipmentPartnerDetailsSaving(this.viewEquipmentVisitDetails);

                          //let serial_num = this.viewAccomadationPartnerVisitDetails.s_no;
              // console.log("Hello payload",payload)
              this.addEquipmentRemaksMethodSaving(payload);

              this.viewEquipmentVisitDetails.equipmentRemarks = "";
              this.closeDialog()
      })
      .onCancel(() => {
      //   this.resetFiles();
        this.editDataDialog = true;
              })
              .onCancel(() => {
                // this.resetFiles();
                this.travelVisitDataDialog = true;
              })
    }
    else {
             this.$q.notify({
                color: "negative",
                position: "top",
                message: `Equipment Details Not Yet Listed....`,
              });

    }
    });

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

  #moblie-view {
      display: flex;
      flex-direction: row;
  }

}

@media (min-width: 767px) {
  #justify-sides {
      justify-content: start;
  }

  #blocking {
      display: block;
  }
}

.background1 {
  background-color: green;
  color: white;
  width: 90px;
  border-radius: 12px;
  padding-left: 16px;
  font-weight: bolder;


}

.background2 {
  background-color: orange;
  width: 90px;
  border-radius: 12px;
  padding-left: 16px;
  font-weight: bolder;
}

.background3 {
  background-color: green;
  color: white;
  width: 90px;
  border-radius: 12px;
  padding-left: 22px;
  font-weight: bolder;

}
</style>

