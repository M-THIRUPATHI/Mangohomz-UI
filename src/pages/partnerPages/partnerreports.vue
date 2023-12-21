<template>
  <q-page style="padding-top: 70px" class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm" v-if="userDetails.sub_role == 'partner_acc'">
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row q-col-gutter-sm "
          style="padding-top: 0px;border-top: 2px solid lightgrey; border-bottom: 2px solid lightgrey;">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white">
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email }}</b>
                </div>
                <q-space />
                <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 25px;font-family: verdana;">
                  <p style="text-align: justify">
                    <b>Welcome {{ userDetails.name }}</b>
                  </p>
                </div>
                <q-space />

                <div class="q-ma-xs  q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>City: {{ userDetails.zone }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-card>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card flat class="bg-white; q-pa-sm">
                <div class="q-pa-md row justify-center col-12 q-gutter-md " style="display:flex;">
                  <span class="row text-bold text-primary col-12 q-gutter-md" style="font-size:25px">Reports:</span>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" style="
                                                width: 350px;
                                                height:250px;
                                                background-color: aliceblue; ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          Master Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="masterreportmethod()">
                            MASTER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="reportdialogmethod()">PROPERTY MASTER REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" style="
                                        width: 350px;
                                        height:250px;
                                        background-color: aliceblue;
                                        ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          Booking Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="userAgreementDialog = true">
                            PARTNER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="userAgreementDialog = true">REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" style="
                                                width: 350px;
                                                height:250px;
                                                background-color: aliceblue;
                                                ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          PARTNER Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="userAgreementDialog = true">MASTER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="userAgreementDialog = true">PROPERTY MASTER
                            REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                </div>
              </q-card>
            </q-card>
          </div>
        </q-card>
      </q-card>
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md" v-if="reportdialog == true">
        <div class="row q-col-gutter-sm" style="padding-top:0px" ref="reportdialog" v-if="reportdialog == true">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table style="font-family: verdana" :title="title" :data="property_master_reports"
                :columns="properties_reports_columns" dense separator="cell" row-key="sno" :grid="mode === 'grid'"
                color="green" :hide-header="mode === 'grid'">
              </q-table>
            </div>
          </div>
        </div>
      </q-card>
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md" v-if="masterreportdialog == true">
        <div class="row q-col-gutter-sm" style="padding-top:0px" ref="masterreportdialog"
          v-if="masterreportdialog == true">

          <div class="col-12" padding style="padding-top: 20px">
            <q-card flat bordered class="bg-white">
              <q-table dense :data="master_reports" :columns="master_reports_columns" row-key="sno" :filter="filter"
                :selected.sync="selected" separator="cell" :pagination.sync="pagination" :hide-header="mode === 'grid'"
                :grid="mode === 'grid'">
                <template v-slot:top-right="props">
                  <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width: 400px">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>

                  <q-btn flat round dense :icon="
                    props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                  " @click="props.toggleFullscreen" v-if="mode === 'list'">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{
                        props.inFullscreen
                          ? "Exit Fullscreen"
                          : "Toggle Fullscreen"
                    }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="mode = mode === 'grid' ? 'list' : 'grid';
                  separator = mode === 'grid' ? 'none' : 'horizontal';" v-if="!props.inFullscreen">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense color="primary" icon="archive">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                    </q-tooltip>
                  </q-btn>


                </template>
                <template v-slot:bottom-row>
                  <q-tr>
                    <q-td class="text-right text-bold" colspan="15">Total Amount :
                      {{ totalAmount }}
                    </q-td>
                  </q-tr>
                </template>
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <span> 0</span>
                  </q-td>
                </template>
                <template v-slot:body-cell-days="props">
                  <q-td :props="props">
                    <span> {{}}</span>
                  </q-td>
                </template>
                <!-- <template v-slot:header="props">
                  <q-tr :props="props">
                    <q-th
                      colspan="3"
                      style="text-align: center; font-size: 15px"
                      class="text-white bg-primary"
                      ><b>Date of Booking</b></q-th
                    >
                    <q-th
                      colspan="3"
                      style="text-align: center; font-size: 15px"
                      class="text-white bg-primary"
                      ><b>Booking ID</b></q-th
                    >

                    <q-th
                      colspan="3"
                      style="text-align: center; font-size: 15px"
                      class="text-white bg-primary"
                      ><b>Booking From Date</b></q-th
                    >

                    <q-th
                      colspan="3"
                      style="text-align: center; font-size: 15px"
                      class="text-white bg-primary"
                      ><b>Booking To Date</b></q-th
                    >
                    <q-th
                      colspan="3"
                      style="text-align: center; font-size: 15px"
                      class="text-white bg-primary"
                      ><b>Number of days booked</b></q-th
                    >
                  </q-tr>
                </template> -->


              </q-table>
            </q-card>
          </div>
        </div>
      </q-card>
    </div>
    <div class="row q-col-gutter-sm q-py-sm" v-if="userDetails.sub_role == 'partner_food'">
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row q-col-gutter-sm "
          style="padding-top: 0px;border-top: 2px solid lightgrey; border-bottom: 2px solid lightgrey;">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white">
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email }}</b>
                </div>
                <q-space />
                <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 25px;font-family: verdana;">
                  <p style="text-align: justify">
                    <b>Welcome {{ userDetails.name }}</b>
                  </p>
                </div>
                <q-space />

                <div class="q-ma-xs  q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>City: {{ userDetails.zone }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-card>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card flat class="bg-white; q-pa-sm">
                <div class="q-pa-md row justify-center col-12 q-gutter-md " style="display:flex;">
                  <span class="row text-bold text-primary col-12 q-gutter-md" style="font-size:25px">Reports:</span>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" style="width: 350px;
                                                height:250px;
                                                background-color: aliceblue; ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          Master Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="masterreportmethod()">
                            MASTER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="foodreportdialogmethod()">FOOD MASTER REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" style="
                                        width: 350px;
                                        height:250px;
                                        background-color: aliceblue;
                                        ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          Booking Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="userAgreementDialog = true">
                            PARTNER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="userAgreementDialog = true">REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                  
                </div>
              </q-card>
            </q-card>
          </div>
        </q-card>
      </q-card>
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md" v-if="reportdialog == true">
        <div class="row q-col-gutter-sm" style="padding-top:0px" ref="reportdialog" v-if="reportdialog == true">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table style="font-family: verdana" :title="title" :data="food_master_reports"
                :columns="food_master_columns" dense separator="cell" row-key="sno" :grid="mode === 'grid'"
                color="green" :hide-header="mode === 'grid'">
              </q-table>
            </div>
          </div>
        </div>
      </q-card>
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md" v-if="masterreportdialog == true">
        <div class="row q-col-gutter-sm" style="padding-top:0px" ref="masterreportdialog"
          v-if="masterreportdialog == true">

          <div class="col-12" padding style="padding-top: 20px">
            <q-card flat bordered class="bg-white">
              <q-table dense :data="food_master_reports" :columns="food_master_columns" row-key="sno" :filter="filter"
                :selected.sync="selected" separator="cell" :pagination.sync="pagination" :hide-header="mode === 'grid'"
                :grid="mode === 'grid'">
                <template v-slot:top-right="props">
                  <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width: 400px">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>

                  <q-btn flat round dense :icon="
                    props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                  " @click="props.toggleFullscreen" v-if="mode === 'list'">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{
                        props.inFullscreen
                          ? "Exit Fullscreen"
                          : "Toggle Fullscreen"
                    }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="mode = mode === 'grid' ? 'list' : 'grid';
                  separator = mode === 'grid' ? 'none' : 'horizontal';" v-if="!props.inFullscreen">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense color="primary" icon="archive">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                    </q-tooltip>
                  </q-btn>


                </template>
                <template v-slot:bottom-row>
                  <q-tr>



                    <q-td class="text-right text-bold" colspan="15">Total Amount :
                      {{ totalAmount }}
                    </q-td>
                  </q-tr>
                </template>
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <span> 0</span>
                  </q-td>
                </template>
                <template v-slot:body-cell-days="props">
                  <q-td :props="props">
                    <span> {{}}</span>
                  </q-td>
                </template>
              </q-table>
            </q-card>
          </div>
        </div>
      </q-card>



    </div>

    <div class="row q-col-gutter-sm q-py-sm" v-if="userDetails.sub_role == 'partner_vehicle'">
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row q-col-gutter-sm "
          style="padding-top: 0px;border-top: 2px solid lightgrey; border-bottom: 2px solid lightgrey;">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white">
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email }}</b>
                </div>
                <q-space />
                <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 25px;font-family: verdana;">
                  <p style="text-align: justify">
                    <b>Welcome {{ userDetails.name }}</b>
                  </p>
                </div>
                <q-space />

                <div class="q-ma-xs  q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>City: {{ userDetails.zone }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-card>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card flat class="bg-white; q-pa-sm">
                <div class="q-pa-md row justify-center col-12 q-gutter-md " style="display:flex;">
                  <span class="row text-bold text-primary col-12 q-gutter-md" style="font-size:25px">Reports:</span>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" 
                  style="width: 350px;
                        height:250px;
                        background-color: aliceblue; ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          Master Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="masterreportmethod()">
                            MASTER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="travelreportdialogmethod()">TRAVEL MASTER REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" 
                  style="width: 350px;
                        height:250px;
                        background-color: aliceblue;
                        ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          Booking Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="userAgreementDialog = true">
                            PARTNER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="userAgreementDialog = true">REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                </div>
              </q-card>
            </q-card>
          </div>
        </q-card>
      </q-card>
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md" v-if="reportdialog == true">
        <div class="row q-col-gutter-sm" style="padding-top:0px" ref="reportdialog" v-if="reportdialog == true">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table style="font-family: verdana" :title="title" :data="travel_master_reports"
                :columns="travel_master_columns" dense separator="cell" row-key="sno" :grid="mode === 'grid'"
                color="green" :hide-header="mode === 'grid'">
              </q-table>
            </div>
          </div>
        </div>
      </q-card>
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md" v-if="masterreportdialog == true">
        <div class="row q-col-gutter-sm" style="padding-top:0px" ref="masterreportdialog"
          v-if="masterreportdialog == true">

          <div class="col-12" padding style="padding-top: 20px">
            <q-card flat bordered class="bg-white">
              <q-table dense :data="master_reports" :columns="master_reports_columns" row-key="sno" :filter="filter"
                :selected.sync="selected" separator="cell" :pagination.sync="pagination" :hide-header="mode === 'grid'"
                :grid="mode === 'grid'">
                <template v-slot:top-right="props">
                  <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width: 400px">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>

                  <q-btn flat round dense :icon="
                    props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                  " @click="props.toggleFullscreen" v-if="mode === 'list'">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{
                        props.inFullscreen
                          ? "Exit Fullscreen"
                          : "Toggle Fullscreen"
                    }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="mode = mode === 'grid' ? 'list' : 'grid';
                  separator = mode === 'grid' ? 'none' : 'horizontal';" v-if="!props.inFullscreen">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense color="primary" icon="archive">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                    </q-tooltip>
                  </q-btn>


                </template>
                <template v-slot:bottom-row>
                  <q-tr>



                    <q-td class="text-right text-bold" colspan="15">Total Amount :
                      {{ totalAmount }}
                    </q-td>
                  </q-tr>
                </template>
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <span> 0</span>
                  </q-td>
                </template>
                <template v-slot:body-cell-days="props">
                  <q-td :props="props">
                    <span> {{}}</span>
                  </q-td>
                </template>
              </q-table>
            </q-card>
          </div>
        </div>
      </q-card>
    </div>

    <div class="row q-col-gutter-sm q-py-sm" v-if="userDetails.sub_role == 'partner_medical'">
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row q-col-gutter-sm "
          style="padding-top: 0px;border-top: 2px solid lightgrey; border-bottom: 2px solid lightgrey;">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-secondary text-white">
            <div class="q-pa-xs row justify-center q-gutter-md">
              <div class="row col-12">
                <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email }}</b>
                </div>
                <q-space />
                <div class="q-ma-xs q-pa-xs" style="text-align: justify;font-size: 25px;font-family: verdana;">
                  <p style="text-align: justify">
                    <b>Welcome {{ userDetails.name }}</b>
                  </p>
                </div>
                <q-space />

                <div class="q-ma-xs  q-pa-xs" style="text-align: justify;font-size: 15px;font-family: verdana;">
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>City: {{ userDetails.zone }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-card>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card flat class="bg-white; q-pa-sm">
                <div class="q-pa-md row justify-center col-12 q-gutter-md " style="display:flex;">
                  <span class="row text-bold text-primary col-12 q-gutter-md" style="font-size:25px">Reports:</span>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" 
                          style="width: 350px;
                          height:250px;
                          background-color: aliceblue; ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          Master Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="masterreportmethod()">
                            MASTER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="medicalreportdialogmethod()">MEDICAL MASTER REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                  <q-card clickable class="item-start col-6 cursor-pointer  highlight q-ma-sm" style="
                                        width: 350px;
                                        height:250px;
                                        background-color: aliceblue;
                                        ">
                    <div class="col-12  text-left">
                      <div class="row col-12 justify-center "
                        style="font-family: verdana; background-color: aliceblue;">
                        <div
                          class="col-12 row text-caption text-primary text-bold bg-primary q-pa-md text-white justify-center"
                          style="font-size: 20px;border-bottom: 2px solid lightgrey;">
                          Booking Reports
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;border-bottom: 2px solid lightgrey;">
                          1.<a class="text-bold text-primary" @click="userAgreementDialog = true">
                            PARTNER REPORT</a>
                        </div>
                        <div class="col-12 row text-caption text-black text-bold "
                          style="font-size: 15px;padding: 20px;">
                          2.<a class="text-bold text-primary" @click="userAgreementDialog = true">REPORT</a>
                        </div>
                      </div>
                    </div>
                  </q-card>
                </div>
              </q-card>
            </q-card>
          </div>
        </q-card>
      </q-card>
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md" v-if="reportdialog == true">
        <div class="row q-col-gutter-sm" style="padding-top:0px" ref="reportdialog" v-if="reportdialog == true">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="q-pa-md" style="padding-top: 20px">
              <q-table style="font-family: verdana" :title="title" :data="medical_master_reports"
                :columns="medical_master_columns" dense separator="cell" row-key="sno" :grid="mode === 'grid'"
                color="green" :hide-header="mode === 'grid'">
              </q-table>
            </div>
          </div>
        </div>
      </q-card>
      <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md" v-if="masterreportdialog == true">
        <div class="row q-col-gutter-sm" style="padding-top:0px" ref="masterreportdialog"
          v-if="masterreportdialog == true">

          <div class="col-12" padding style="padding-top: 20px">
            <q-card flat bordered class="bg-white">
              <q-table dense :data="master_reports" :columns="master_reports_columns" row-key="sno" :filter="filter"
                :selected.sync="selected" separator="cell" :pagination.sync="pagination" :hide-header="mode === 'grid'"
                :grid="mode === 'grid'">
                <template v-slot:top-right="props">
                  <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width: 400px">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>

                  <q-btn flat round dense :icon="
                    props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'
                  " @click="props.toggleFullscreen" v-if="mode === 'list'">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{
                        props.inFullscreen
                          ? "Exit Fullscreen"
                          : "Toggle Fullscreen"
                    }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="mode = mode === 'grid' ? 'list' : 'grid';
                  separator = mode === 'grid' ? 'none' : 'horizontal';" v-if="!props.inFullscreen">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense color="primary" icon="archive">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                    </q-tooltip>
                  </q-btn>


                </template>
                <template v-slot:bottom-row>
                  <q-tr>



                    <q-td class="text-right text-bold" colspan="15">Total Amount :
                      {{ totalAmount }}
                    </q-td>
                  </q-tr>
                </template>
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <span> 0</span>
                  </q-td>
                </template>
                <template v-slot:body-cell-days="props">
                  <q-td :props="props">
                    <span> {{ }}</span>
                  </q-td>
                </template>

              </q-table>
            </q-card>
          </div>
        </div>
      </q-card>

    </div>
  </q-page>
</template>
  
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";
import { date } from "quasar";
import { scroll } from "quasar";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
export default {
  data() {
    return {
      AccImgpath: filepaths.mhapFilePath,
      Acctravel: filepaths.mhtpFilePath,
      Accfood: filepaths.mhfpFilePath,
      Accmedical: filepaths.mhepFilePath,
      editedIndex: -1,
      url: "",
      filter: "",
      selected: [],
      pagination: {
        rowsPerPage: 500
      },
      dialogTitle: "",
      mode: "list",
      title: "Master Report:",
      title1: "Property Master Report:",
      masterreportdialog: false,
      reportdialog: false,
      ...validations,

      dates: {
        date_from: "",
        date_to: ""
      },
      moment: moment,
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
      a: [
        "",
        "One ",
        "Two ",
        "Three ",
        "Four ",
        "Five ",
        "Six ",
        "Seven ",
        "Eight ",
        "Nine ",
        "Ten ",
        "Eleven ",
        "Twelve ",
        "Thirteen ",
        "Fourteen ",
        "Fifteen ",
        "Sixteen ",
        "Seventeen ",
        "Eighteen ",
        "Nineteen "
      ],
      b: [
        "",
        "",
        "Twenty",
        "Thirty",
        "Fourty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety"
      ]
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      user: (state) => state.account.user,
      properties_reports_columns: (state) =>
        state.centeraccounts.properties_reports_columns,
      revenue_accounts_bookings_columns: (state) => state.booking.revenue_accounts_bookings_columns,
      guest_book_columns: (state) => state.booking.guest_book_columns,
      master_reports_columns: (state) => (state).centeraccounts.master_reports_columns,
      food_master_columns: (state) => (state).centeraccounts.food_master_columns,
      travel_master_columns: (state) => (state).centeraccounts.travel_master_columns,
      medical_master_columns:(state)=>(state).centeraccounts.medical_master_columns,
      totalAmount() {
        let sum = this.master_reports.reduce((accum, current) => {
          return parseFloat(accum + parseFloat(current.price_after_discount));
        }, 0);
        return sum;
      },
    }),
    ...mapGetters("partners", ["hotelData_rows"]),
    ...mapGetters("centeraccounts", ["property_master_reports"]),
    ...mapGetters("centeraccounts", ["master_reports"]),
    ...mapGetters("centeraccounts", ["food_master_reports"]),
    ...mapGetters("centeraccounts", ["travel_master_reports"]),
    ...mapGetters("centeraccounts", ["medical_master_reports"]),
  },
  created() {
    if (this.userDetails.sub_role == "partner_acc") {
      this.$store.dispatch("centeraccounts/propertyreportsdetails");
      this.$store.dispatch("centeraccounts/masterreportsdetails")
    } else if (this.userDetails.sub_role == "partner_food") {

    } else if (this.userDetails.sub_role == "partner_vehicle") {

    } else if (this.userDetails.sub_role == "partner_medical") {

    }
  },
  mounted() {

  },
  methods: {
    ...mapActions("booking", ["getBookingDetails"]),
    ...mapActions("centeraccounts", ["masterreportsdetails"]),
    ...mapActions("centeraccounts", ["foodreportmethod"]),
    ...mapActions("centeraccounts", ["travelreportmethod"]),
    ...mapActions("centeraccounts", ["medicalreportmethod"]),
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    inWords(num) {
      if ((num = num.toString()).length > 9) return "overflow";
      let n = ("000000000" + num)
        .substr(-9)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return;
      var str = "";
      str +=
        n[1] != 0
          ? (this.a[Number(n[1])] || this.b[n[1][0]] + " " + this.a[n[1][1]]) +
          "Crore "
          : "";
      str +=
        n[2] != 0
          ? (this.a[Number(n[2])] || this.b[n[2][0]] + " " + this.a[n[2][1]]) +
          "Lakh "
          : "";
      str +=
        n[3] != 0
          ? (this.a[Number(n[3])] || this.b[n[3][0]] + " " + this.a[n[3][1]]) +
          "Thousand "
          : "";
      str +=
        n[4] != 0
          ? (this.a[Number(n[4])] || this.b[n[4][0]] + " " + this.a[n[4][1]]) +
          "Hundred "
          : "";
      str +=
        n[5] != 0
          ? (str != "" ? "and " : "") +
          (this.a[Number(n[5])] || this.b[n[5][0]] + " " + this.a[n[5][1]]) +
          "Only "
          : "";
      return str;
    },
    masterreportmethod() {
      this.masterreportdialog = true;
      this.reportdialog = false;
    },
    reportdialogmethod() {
      this.masterreportdialog = false;
      this.reportdialog = true;
    },
    foodreportdialogmethod() {
      this.masterreportdialog = false;
      this.reportdialog = true;
      this.foodreportmethod()

    },
    travelreportdialogmethod(){
      this.masterreportdialog = false;
      this.reportdialog = true;
      this.travelreportmethod()
    },
    medicalreportdialogmethod(){
      this.masterreportdialog = false;
      this.reportdialog = true;
      this.medicalreportmethod()
    },
  },
};
</script>
  