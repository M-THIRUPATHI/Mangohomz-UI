<template>
  <div>
    <!-- <q-page-container>  -->
    <q-page style="padding-top: 130px" class="q-pa-md">
      <div class="q-pa-md" style="padding-top: 20px">
        <!-- {{ this.recordsStatus }} -->
        <q-table :data="equipment_partner_registration_rows" :columns="equipment_partner_registration_columns"
          :pagination.sync="pagination" dense :selected.sync="selected" :grid="mode === 'grid'" :filter="filter"
          color="green" separator="cell">
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn color="primary" @click="viewPropertyItem(props.row)" label="View" size="sm">
                <q-tooltip :disable="$q.platform.is.mobile">View Details</q-tooltip>
              </q-btn>
              <q-btn color="green" @click="editPropertyItem(props.row)" label="Edit" size="sm">
                <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>

    <!--Sachin  Add Medical Store Details Start -->
    <q-dialog v-model="addMedicalStore" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="addMedicalForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  Add Medical Store Details
                </div>
                <q-space />
                <q-btn dark flat icon="close" color="white" @click="closeAddMedicalStore">
                  <q-tooltip class="bg-white text-primary">close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Basic Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                     <q-select
                      dense
                      options-dense
                      outlined
                      v-model="medicalStoreObj.medical_store_name"
                      label="Medical Store *"
                      use-input
                      hide-selected
                      style="width: 250px"
                      fill-input
                      hide-bottom-space
                      :options="medicalStoreItems"
                      option-label="medical_store_name"
                      option-value="medical_store_id"
                      :rules="[required('Medical Store')]"
                      label-color="black"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <!-- <q-input dense outlined v-model="medicalStoreObj.medical_store_name" label="Medical Store *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Medical Store')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input dense outlined v-model="medicalStoreObj.special_offer" label="Special Offer *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Special Offer')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="medicalStoreObj.date_from" label="Date From" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="medicalStoreObj.date_from" minimal mask="DD/MM/YYYY" @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="medicalStoreObj.date_to" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                            <q-date v-model="medicalStoreObj.date_to" minimal mask="DD/MM/YYYY" @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="medicalStoreObj.description" lazy-rules style="width:10 0%"
                      label-color="black" type="textarea" :rules="[required('Description')]" autogrow hide-bottom-space
                      placeholder="Description *">
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Address Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined hide-bottom-space v-model="medicalStoreObj.building_no"
                      label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House/Flat No')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="medicalStoreObj.street" label="Street/Colony Name*" lazy-rules
                      label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-highway" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="medicalStoreObj.land_mark" label="Landmark" label-color="black"
                      hide-bottom-space><template v-slot:prepend>
                        <q-icon name="mdi-map-marker-circle" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                      option-value="state_id" option-label="state_name" v-model="medicalStoreObj.state" @input="loadAllCities(medicalStoreObj.state);emptyCities();
                      " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                      option-label="city" fill-input options-dense input-debounce="0" v-model="medicalStoreObj.city"
                      label="City *" label-color="black" hide-bottom-space :rules="[required('City')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-input dense outlined lazy-rules mask="######" v-model="medicalStoreObj.pin_code"
                      label="Pincode *" label-color="black" hide-bottom-space
                      :rules="[required('Pincode'), pinNumber()]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                      v-model="medicalStoreObj.country" label="Country" label-color="black"
                      :rules="[required('Country')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="medicalStoreObj.email_id" label="Email *" lazy-rules
                      hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]" label-color="black">
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="medicalStoreObj.phone" label="Phone *" lazy-rules mask="##########"
                      style="width: 250px" label-color="black" hide-bottom-space
                      :rules="[required('Phone no'), phone()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="medicalStoreObj.name_Of_Contact_Person"
                      label="Name of Contact Person *" hide-bottom-space style="width: 250px" label-color="black"
                      :rules="[required('Name of Contact Person')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="medicalStoreObj.latitude" label="Latitude *" lazy-rules
                      style="width: 200px" label-color="black" hide-bottom-space
                      :rules="[required('Latitude'), number()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="medicalStoreObj.longitude" label="Longitude *" lazy-rules
                      style="width: 200px" :rules="[required('Longitude'), number()]" label-color="black"
                      hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-longitude" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input outlined label="Opening Time *" dense v-model="medicalStoreObj.opening_time"
                    :rules="[required('Opening Time')]" @click="$refs.qOpeningTime.show()" >
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="medicalStoreObj.opening_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Closing Time *" dense v-model="medicalStoreObj.closing_time"
                    :rules="[required('Closing Time')]" @click="$refs.qClosingTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="medicalStoreObj.closing_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable v-model="uploadImage" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Store Image 1" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="uploadImage1" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Store Image 2" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="uploadImage2" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Store Image 3" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn color="secondary" label="Submit" @click="submitMedicalStoreData()"></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
          <!--Sachin  Add Medical Store Details End -->
      <!--Sachin  Edit Medical Store Details Start -->
      <q-dialog v-model="editMedStoresData" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="addMedicalForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  Add Medical Store Details
                </div>
                <q-space />
                <q-btn dark flat icon="close" color="white" @click="closeEditMedicalStore">
                  <q-tooltip class="bg-white text-primary">close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Basic Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-select dense options-dense outlined v-model="editmedicalStoreObj.medical_store_name"
                      label="Medical Store *" use-input hide-selected style="width: 250px" fill-input hide-bottom-space
                      :options="[
                        'Apollo',
                        'MedPlus',
                        'Netmeds',
                        '1mgAYUSH',
                        'Zigy',
                        'mChemist',
                        'OnlineMedicalStore.com',
                        'Savemymeds Pharmacy',
                        'Mera Pharmacy'
                      ]" :rules="[required('Medical Store')]" label-color="black">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-select>
                    <!-- <q-input dense outlined v-model="TravelmedicalstoreeditedItem.medical_store_name" label="Medical Store *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Medical Store')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-input dense outlined v-model="editmedicalStoreObj.special_offer" label="Special Offer *"
                      hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Special Offer')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editmedicalStoreObj.from_date" label="Date From"
                      label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy.show()"
                      style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="editmedicalStoreObj.from_date" minimal mask="DD/MM/YYYY"
                              @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editmedicalStoreObj.to_date" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                            <q-date v-model="editmedicalStoreObj.to_date" minimal mask="DD/MM/YYYY"
                              @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editmedicalStoreObj.description" lazy-rules style="width:10 0%"
                      label-color="black" type="textarea" :rules="[required('Description')]" autogrow hide-bottom-space
                      placeholder="Description *">
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Address Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined hide-bottom-space v-model="editmedicalStoreObj.building_no"
                      label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House/Flat No')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editmedicalStoreObj.street" label="Street/Colony Name*" lazy-rules
                      label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-highway" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="editmedicalStoreObj.land_mark" label="Landmark" label-color="black"
                      hide-bottom-space><template v-slot:prepend>
                        <q-icon name="mdi-map-marker-circle" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                      option-value="state_id" option-label="state_name" v-model="editmedicalStoreObj.state_name" @input="
  loadAllCities(editmedicalStoreObj.state);
emptyCities();
                      " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                      option-label="city" fill-input options-dense input-debounce="0"
                      v-model="editmedicalStoreObj.city_name" label="City *" label-color="black" hide-bottom-space
                      :rules="[required('City')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-input dense outlined lazy-rules mask="######" v-model="editmedicalStoreObj.pin_code"
                      label="Pincode *" label-color="black" hide-bottom-space
                      :rules="[required('Pincode'), pinNumber()]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                      v-model="editmedicalStoreObj.country" label="Country" label-color="black"
                      :rules="[required('Country')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="editmedicalStoreObj.email" label="Email *" lazy-rules
                      hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]" label-color="black">
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editmedicalStoreObj.phone" label="Phone *" lazy-rules
                      mask="##########" style="width: 250px" label-color="black" hide-bottom-space
                      :rules="[required('Phone no'), phone()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="
                      editmedicalStoreObj.name_of_contact_person
                    " label="Name of Contact Person *" hide-bottom-space style="width: 250px" label-color="black"
                      :rules="[required('Name of Contact Person')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="editmedicalStoreObj.latitude" label="Latitude *" lazy-rules
                      style="width: 200px" label-color="black" hide-bottom-space
                      :rules="[required('Latitude'), number]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editmedicalStoreObj.longitude" label="Longitude *" lazy-rules
                      style="width: 200px" :rules="[required('Longitude'), number]" label-color="black"
                      hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-longitude" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input outlined label="Opening Time *" dense v-model="editmedicalStoreObj.opening_time"
                    :rules="[required('Opening Time')]" @click="$refs.qOpeningTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="editmedicalStoreObj.opening_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Closing Time *" dense v-model="editmedicalStoreObj.closing_time"
                    :rules="[required('Closing Time')]" @click="$refs.qClosingTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="editmedicalStoreObj.closing_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable v-model="editmedicalStoreObj.uploadImage1" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                        val => {
                          files = val;
                        }
                      " hint="Upload Store Image 1" :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="editmedicalStoreObj.uploadImage2" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        val => {
                          files = val;
                        }
                      " hint="Upload Store Image 2" :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="editmedicalStoreObj.uploadImage3" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        val => {
                          files = val;
                        }
                      " hint="Upload Store Image 3" :rules="[val => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">
                    Max File size is 2MB & Image format is
                    <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn color="secondary" label="Update" @click="onMedicalStoreUpdatingDetail()"></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!--Sachin  Edit Medical Store Details End -->
      <q-dialog v-model="addDataDialog" persistent maximized>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn>
              <q-icon name="close" color="white" @click="closeAddDataDialog()"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-stepper v-model="step" color="primary" animated done-color="secondary" active-color="primary"
            inactive-color="primary">
            <q-step :name="1" title="Basic Details" icon="settings" :done="step > 1">
              <q-form ref="agentFormBasic">
                <div class="q-pa-md row q-gutter-md justify-center">
                  <div class="row col-12 justify-center">
                    <div class="row col-3 q-mt-sm">
                      <q-span name="food" class="text-bold">1. Medical Partner Name * </q-span>
                      <q-input class="row col-3 q-mt-sm" dense outlined v-model="equipmentPartnerForm.name"
                        label="Equipment Partner Name *" hide-bottom-space style="width: 250px" label-color="black"
                        :rules="[required('Name')]">
                        <template v-slot:prepend>
                          <q-icon name="mdi-account" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                    <div class="row col-6 justify-center ">
                      <q-checkbox left-label color="secondary" class="text-bold"
                        v-bind:disable="this.onclickValue == 'edit'" v-model="yes"
                        label="2. Is The Business Entity Name is same as Medical partner name?" />
                      <div class="row col-6 q-ml-sm">
                        <q-input dense outlined readonly v-model="this.equipmentPartnerForm.name"
                          label="Business Entity Name" hide-bottom-space style="width: 250px" label-color="black"
                          v-if="yes == true">
                          <template v-slot:prepend>
                            <q-icon name="mdi-account" color="secondary" />
                          </template>
                        </q-input>
                        <q-input dense outlined v-model="equipmentPartnerForm.partner_sub_name"
                          label="Business Entity Name" hide-bottom-space style="width: 250px" label-color="black"
                          v-if="yes == false">
                          <template v-slot:prepend>
                            <q-icon name="mdi-account" color="secondary" />
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </div>
                  <!-- <q-input class="col-3" dense outlined v-model="equipmentPartnerForm.company_name"
                    label="Company Name " hide-bottom-space style="width: 300px" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" />
                    </template>
                  </q-input>
                  <q-input class="col-3" dense outlined v-model="equipmentPartnerForm.individual_name"
                    label="Individual Name *" v-if="equipmentPartnerForm.company_name != ''" hide-bottom-space
                    style="width: 300px" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="apartment" color="secondary" />
                    </template>
                  </q-input> -->
                  <div class="row col-12 q-mt-lg justify-center">
                    <div class="row col-3 q-mt-sm">
                      <q-span class="text-bold">3. Enter Phone Number * </q-span>
                      <q-input class="col-3 q-mt-sm" dense outlined v-model="equipmentPartnerForm.phone" label="Phone *"
                        lazy-rules mask="##########" style="width: 250px" label-color="black"
                        :rules="[required('Phone no'), phone()]">
                        <template v-slot:prepend>
                          <q-icon name="mdi-phone" color="secondary" />
                        </template>
                      </q-input>
                    </div>
                    <div class="row col-6 justify-center">
                      <q-checkbox left-label color="secondary" class="text-bold"
                        v-bind:disable="this.onclickValue == 'edit'" v-model="no"
                        label="4. Is Whatsapp Number is same as Phone Number ?" />
                      <div class="row col-6 q-ml-sm">
                        <q-input dense outlined v-model="this.equipmentPartnerForm.phone" readonly label="WhatsApp No "
                          style="width: 250px" label-color="black" v-if="no == true">
                          <template v-slot:prepend>
                            <q-icon name="mdi-whatsapp" color="secondary" />
                          </template>
                        </q-input>
                        <q-input class="col-3" dense outlined v-model="equipmentPartnerForm.fax" lazy-rules
                          mask="##########" label="Whatsapp no *" style="width: 250px" label-color="black"
                          :rules="[required('WhatsApp no'),phone()]" v-if="no == false">
                          <template v-slot:prepend>
                            <q-icon name="mdi-whatsapp" color="secondary" />
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </div>
                  <div class="row col-12 q-mt-lg justify-center">
                  <div class="row col-3 q-mt-sm">
                  <q-input dense outlined v-model="equipmentPartnerForm.alternate_no" lazy-rules mask="##########"
                    label="Alternate Number" style="width: 250px" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                </div>
                <div class="row col-6 q-mt-sm justify-center">
                  <q-input dense outlined v-model="equipmentPartnerForm.email_id" label="Email *" lazy-rules
                    hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Email'), email()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" />
                    </template>
                  </q-input>
                  <!-- <q-input class="col-3" dense outlined v-model="equipmentPartnerForm.agent_commission"
                    label="Commission as per agreement" style="width: 250px" label-color="black" suffix="%" mask="##"
                    :rules="[required('Commission')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-percent" color="secondary" />
                    </template>
                  </q-input> -->
                </div>
              </div>
               <div class="row col-12 q-mt-lg justify-center">
                  <div class="row col-3 q-mt-sm">
                  <q-input  dense outlined v-model="equipmentPartnerForm.description" label="Remarks"
                    lazy-rules style="width: 250px" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-comment" color="secondary" />
                    </template>
                  </q-input>
                </div>
                <div class="row col-6 q-mt-sm justify-center">

                </div>
              </div>
                </div>
              </q-form>
              <q-stepper-navigation>
                <div class="row justify-center">
                <q-btn @click="
                  () => {
                    this.$refs.agentFormBasic.validate().then(valid => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 2;
                      }
                    });
                  }
                " color="primary" label="Continue" />
                </div>
              </q-stepper-navigation>
            </q-step>
            <q-step :name="2" title="Address" icon="create_new_folder" :done="step > 2">
              <q-form ref="agentFormAddress">
                <div class="q-pa-md row col-12 q-gutter-md justify-center">
                  <q-input dense outlined  class="row col-3" v-model="equipmentPartnerForm.building_no" label="House/Flat No *" lazy-rules
                    label-color="black" :rules="[required('House')]"><template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined   class="row col-3" v-model="equipmentPartnerForm.street" label="Street/Colony Name *" lazy-rules
                    label-color="black" :rules="[required('Street/Colony')]"><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined  class="row col-3" v-model="equipmentPartnerForm.land_mark" label="Landmark "
                    label-color="black"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" />
                    </template></q-input>
                  <q-select dense outlined use-input  class="row col-3" hide-selected   @filter="filterFnCountry"
                    :options="countryOptions" @input="checkstate()"
                    option-value="name" option-label="name" fill-input options-dense input-debounce="0"
                    v-model="equipmentPartnerForm.country" label="Country *" label-color="black"
                    :rules="[required('Country')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template>
                  </q-select>
                  <q-select ref="indiastate"  class="row col-3" v-if="indiastate == true" dense options-dense outlined use-input
                    hide-selected fill-input   :options="stateOptions"
                    @filter="filterFnStates" option-value="state_id" option-label="state_name"
                    v-model="equipmentPartnerForm.state" @input="
  loadAllCities(equipmentPartnerForm.state);
emptycities();
                    " label="State *" label-color="black" :rules="[required('State')]"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                  <q-select ref="indiacity"   class="row col-3" v-if="indiacity == true" dense outlined use-input hide-selected
                  :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id" option-label="city" fill-input options-dense
                    input-debounce="0" v-model="equipmentPartnerForm.city" label="City *" label-color="black"
                    :rules="[required('City')]"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                  <q-input ref="otherstate"  class="row col-3" v-if="otherstate == true" dense outlined v-model="equipmentPartnerForm.state1"
                    label="State *" label-color="black"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-input>
                    <q-input ref="othercity" v-if="othercity == true" dense outlined v-model="equipmentPartnerForm.city1"
                    label="City *" class="row col-3" label-color="black" :rules="[required('City')]"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" /> </template></q-input>
                  <q-input dense outlined lazy-rules  class="row col-3" mask="######" v-model="equipmentPartnerForm.pin_code"
                    label="Pincode/Zipcode*" label-color="black" :rules="[required('Pincode'), pinNumber()]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-input>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <div class="row justify-center">
                <q-btn @click="
                  () => {
                    this.$refs.agentFormAddress.validate().then((valid) => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 3;
                      }
                    });
                  }
                " color="primary" label="Continue" />
                <q-btn outline @click="step = 1" color="primary" label="Back" class="q-ml-sm "  label-color="black" />
                </div>
              </q-stepper-navigation>
            </q-step>
            <q-step :name="3" :done="step > 3" title="eKYC" icon="assignment">
              <q-form ref="agentFormStaDocs">
                <!-- <div class="q-pa-md row q-gutter-md items-start text-h6 text-weight-bold">
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 400px"
                    fill-input
                    :options="propertyTypes"
                    v-model="equipmentPartnerForm.propertyType"
                    label="Type Of Property *"
                    label-color="black"
                    :rules="[required('Property Type')]"
                    ><template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select>
                </div> -->
                <div class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  ">
                  Proof of Identity and Proof of Address:
                </div>
                <div class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  ">
                  <q-input dense outlined v-model="equipmentPartnerForm.pan"
                    v-bind:readonly="this.onclickValue == 'edit'" label="PAN No" label-color="black" mask="AAAAA####A"
                    :rules="[required('Pancard'), panNumber()]" />
                    <q-file color="lime-11" bg-color="teal" style="width: 200px" class="hint-bold" dense filled clearable
                    v-model="pan_card_file" v-bind:readonly="this.onclickValue == 'edit'" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload PAN Card" :filter="checkFileSize" @rejected="onRejected" :rules="[
  val =>
    (val != '' && pan_card_file != '') ||
    'Please Upload PAN Card'
]">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template></q-file>
                  <q-input dense outlined v-model="equipmentPartnerForm.aadhar"
                    v-bind:readonly="this.onclickValue == 'edit'" label="AADHAAR No" label-color="black"
                    mask="############" />
                    <q-file color="lime-11" bg-color="teal" style="width: 200px" class="hint-bold" dense filled clearable
                    v-model="addhaar_no" v-bind:readonly="this.onclickValue == 'edit'" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload AADHAAR" :filter="checkFileSize" @rejected="onRejected" :rules="[
  val =>
    (val != '' && addhaar_no != '') ||
    'Please Upload AADHAAR'
]">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template></q-file>
                  <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 200px"
                    fill-input
                    :options="gstOptions"
                    v-model="equipmentPartnerForm.gst_registration"
                    label="GST Registration*"
                    label-color="black"
                    :rules="[required('Property Type')]"

                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select>
                  <q-input dense outlined v-model="equipmentPartnerForm.gstin"
                    v-bind:readonly="this.onclickValue == 'edit'" label="GSTIN" label-color="black"
                    mask="##AAAAA####A###"
                    v-if=" this.equipmentPartnerForm.gst_registration =='Registered'"/>
                  <q-file color="lime-11" bg-color="teal" style="width: 200px" class="hint-bold" dense filled clearable
                    v-model="gst_tin" v-bind:readonly="this.onclickValue == 'edit'" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload GSTIN" :filter="checkFileSize" @rejected="onRejected"
                    v-if=" this.equipmentPartnerForm.gst_registration =='Registered'">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
                <div class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  ">
                  Documents:
                </div>
                <div class="
                    q-pa-md
                    row
                    q-gutter-md
                    items-start
                    text-h6 text-weight-bold
                  ">
                  <q-file color="lime-11" bg-color="teal" style="width: 250px" class="hint-bold" dense filled clearable
                    v-model="mh_agreement" v-bind:readonly="this.onclickValue == 'edit'" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Agreement Document"
                    :rules="[(val) => val || 'Please select file']"
                     :filter="checkFileSize"
                     @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                  <!-- <q-file
                    color="lime-11"
                    bg-color="teal"
                    style="width: 200px"
                    class="hint-bold"
                    dense
                    filled
                    clearable
                    v-model="partner_pic"
                    type="file"
                   accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      (val) => {
                        files = val;
                      }
                    "
                    hint="Equipment Photo"
                     :filter="checkFileSize"
                    @rejected="onRejected"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" /> </template
                  ></q-file> -->
                  <q-file color="lime-11" bg-color="teal" style="width: 200px" class="hint-bold" dense filled clearable
                    v-model="mb_certificate" v-bind:readonly="this.onclickValue == 'edit'" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Undertaking"
                    :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 200px" class="hint-bold" dense filled clearable
                    v-model="property_tax" v-bind:readonly="this.onclickValue == 'edit'" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Indemnity Bond"
                    :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 200px" class="hint-bold" dense filled clearable
                    v-model="fire_safety" v-bind:readonly="this.onclickValue == 'edit'" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Declaration"
                    :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
                <div class="bg-grey-11 col-12 row q-pa-xs">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-form>
              <q-stepper-navigation class="q-pa-md q-gutter-md text-center justify-center">
                <q-btn @click="
                  () => {
                    this.$refs.agentFormStaDocs.validate().then(valid => {
                      if (!valid) {
                      } else {
                        done1 = true;
                        step = 4;
                      }
                    });
                  }
                " color="primary" label="Continue" />
                <q-btn outline @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>
            <q-step :name="4" :done="step > 4" title="Bank Details" icon="assignment">
              <q-form ref="agentFormSubmit">
                <div class="q-pa-md row q-gutter-md items-start">
                  <q-input dense outlined v-model="equipmentPartnerForm.bankAccountNo" label="Bank A/C No"
                    label-color="black" :rules="[required('Bank A/C no'), number()]" />
                  <q-input dense outlined v-model="equipmentPartnerForm.bankName" label="Bank Name" label-color="black"
                    :rules="[required('Bank Name')]" />
                  <q-input dense outlined v-model="equipmentPartnerForm.branchName" label="Branch Name"
                    label-color="black" :rules="[required('Branch')]" />
                  <q-input dense outlined v-model="equipmentPartnerForm.ifsc" label="IFSC Code" label-color="black"
                    :rules="[required('IFSC code')]" />
                    <q-file color="lime-11" bg-color="teal" style="width: 250px" class="hint-bold" dense filled clearable
                    v-model="cancelled_cheque" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    v-bind:readonly="this.onclickValue == 'edit'" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Cancelled Cheque" :rules="[
  val =>
    (val != '' && cancelled_cheque != '') ||
    'Please Upload Cancelled Cheque'
]" :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
              </q-form>
              <q-card-actions align="left">
                <q-toggle v-model="equipmentPartnerForm.accept" label="I accept the Equipment Partner Registration" />
              </q-card-actions>
              <q-stepper-navigation class="q-pa-md q-gutter-md">
                <q-btn color="secondary" label="Submit" v-if="this.onclickValue != 'edit'" @click="onSubmit('submit')"
                  :disable="this.equipmentPartnerForm.accept == false" />
                <q-btn color="secondary" label="Update" class="text-bold" @click="onSubmit('update')"
                  v-if="this.onclickValue == 'edit'" :disable="this.equipmentPartnerForm.accept == false" />
                <q-btn outline @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </q-card>
      </q-dialog>

      <!-- ADD PROPERTY DETAILS -->

      <q-dialog v-model="PropertyPartnerDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="propertyFormBasic" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">
                  MH Accommodation Property Details
                </div>
                <q-space />
                <q-btn dark flat icon="close" color="white" v-close-popup @click="closePartnerDialog">
                  <q-tooltip class="bg-white text-primary">close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Basic Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <!-- <q-input dense outlined v-model="this.propertyPartnerDetails.agent_name" label="Lead Partner *"
                      hide-bottom-space style="width: 250px" label-color="black" readonly>
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="this.propertyPartnerDetails.equipment_sub_name"
                      label="Sub Partner *" hide-bottom-space style="width: 250px" label-color="black" readonly
                      :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account-multiple-outline" color="secondary" />
                      </template>
                    </q-input> -->
                    <!-- <q-input dense outlined v-model="propertyPartnerDetails.property_name" label="Property Type *"
                      hide-bottom-space style="width: 250px" label-color="black" readonly>
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input> -->
                    <q-select
                    dense
                    options-dense
                    outlined
                    use-input
                    hide-selected
                    style="width: 300px"
                    fill-input
                    :options="propertyOptions"
                    option-value="property_id"
                    option-label="property_name"
                    v-model="propertyPartnerDetails.property_name"
                    label="Type Of Property *"
                    label-color="black"
                    :rules="[required('Property Type')]"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-home-city"
                        color="secondary"
                      /> </template
                  ></q-select>
                    <q-input dense outlined v-model="propertyPartnerDetails.sub_property_name"
                      label="Property Name *" hide-bottom-space style="width: 250px" label-color="black"
                      :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="propertyPartnerDetails.property_description" lazy-rules
                      style="width:100%" label-color="black" type="textarea" :rules="[required('Description')]" autogrow
                      hide-bottom-space placeholder="Description *">
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Address Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined hide-bottom-space v-model="propertyPartnerDetails.building_no"
                      label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="propertyPartnerDetails.street" label="Street/Colony Name*"
                      lazy-rules label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-highway" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="propertyPartnerDetails.land_mark" label="Landmark"
                      label-color="black" hide-bottom-space><template v-slot:prepend>
                        <q-icon name="mdi-map-marker-circle" color="secondary" />
                      </template></q-input>

                      <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                      option-value="state_id" option-label="state_name" v-model="propertyPartnerDetails.state" @input="
  loadAllCities(propertyPartnerDetails.state);
emptyCities();
                      " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                      option-label="city" fill-input options-dense input-debounce="0" v-model="propertyPartnerDetails.city"
                      label="City *" label-color="black" hide-bottom-space :rules="[required('City')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" /> </template></q-select>
                    <q-input dense outlined lazy-rules mask="######" v-model="propertyPartnerDetails.pin_code"
                      label="Pincode *" label-color="black" hide-bottom-space
                      :rules="[required('Pincode'), pinNumber()]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                      v-model="propertyPartnerDetails.country" label="Country" label-color="black"
                      :rules="[required('Country')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="propertyPartnerDetails.property_email_id" label="Email *"
                      lazy-rules hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]"
                      label-color="black" >
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="propertyPartnerDetails.property_phone" label="Phone *" lazy-rules
                      mask="##########" style="width: 250px" label-color="black" hide-bottom-space
                      :rules="[required('Phone no'), phone()]" >
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="propertyPartnerDetails.Name_Of_Contact_Person"
                      label="Name of Contact Person *" hide-bottom-space style="width: 250px" label-color="black"
                      :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="propertyPartnerDetails.property_latitude" label="Latitude *"
                      lazy-rules style="width: 200px" label-color="black" hide-bottom-space
                      :rules="[required('Latitude'), number()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="propertyPartnerDetails.property_longitude" label="Longitude *"
                      lazy-rules style="width: 200px" :rules="[required('Longitude'), number()]" label-color="black"
                      hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-longitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-select dense options-dense outlined style="width: 250px"
                      v-model="propertyPartnerDetails.facilities" :options="propertyAmenitiesArr"
                      option-label="amenity_name" option-value="amenity_id" multiple aria-checked use-input
                      label="Property Amenities" label-color="black" :rules="[required('Facilities')]">
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input outlined label="Check In Time *" dense v-model="propertyPartnerDetails.checkIn_time"
                    :rules="[required('Check In Time')]" @click="$refs.qOpeningTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="propertyPartnerDetails.checkIn_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Check Out Time *" dense v-model="propertyPartnerDetails.checkOut_time"
                    :rules="[required('Check Out Time')]" @click="$refs.qClosingTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="propertyPartnerDetails.checkOut_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <!-- <q-input
                      dense
                      outlined
                      v-model="propertyPartnerDetails.property_price_startsFrom"
                      label="Price Starts From *"
                      :rules="[required('Price Starts From')]"
                      lazy-rules
                      style="width: 250px"
                      label-color="black"
                      hide-bottom-space
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="mdi-currency-inr"
                          color="secondary"
                        /> </template
                    ></q-input> -->

                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <!-- <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Address Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined hide-bottom-space v-model="propertyPartnerDetails.building_no"
                      label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="propertyPartnerDetails.street" label="Street/Colony Name*"
                      lazy-rules label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-highway" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="propertyPartnerDetails.land_mark" label="Landmark *"
                      label-color="black" hide-bottom-space :rules="[required('Landmark')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker-circle" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                      v-model="propertyPartnerDetails.country" label="Country" label-color="black"
                      :rules="[required('Country')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                      option-value="state_id" option-label="state_name" v-model="propertyPartnerDetails.state" @input="
  loadAllCities(propertyPartnerDetails.state);
emptyCities();
                      " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                      option-label="city" fill-input options-dense input-debounce="0"
                      v-model="propertyPartnerDetails.city" label="City *" label-color="black" hide-bottom-space
                      :rules="[required('City')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-input dense outlined lazy-rules mask="######" v-model="propertyPartnerDetails.pin_code"
                      label="Pincode *" label-color="black" hide-bottom-space
                      :rules="[required('Pincode'), pinNumber()]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-input>
                  </div>
                </q-card-actions>
              </q-card> -->
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable v-model="uploadImage" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Front Image 1" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="uploadImage1" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Front Image 2" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="uploadImage2" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Reception" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="uploadImage3" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Lobby" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space v-model="uploadImage4" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Side Image" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                </q-card-actions>
                <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                  <div class="text-bold row q-ml-md">Note:</div>
                  <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.
                  </div>
                </div>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn color="secondary" label="Submit" @click="onPropertyPartnerSubmit"></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>
      <!-- Property Edit Dialog -->
      <q-dialog v-model="propertyPartnerEditDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-form ref="editPropertyForm" class="q-gutter-xs">
            <q-card>
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">Edit Property Details</div>
                <q-space />
                <q-btn dark flat icon="close" color="white" @click="propertyPartnerEditDialog = false">
                  <q-tooltip class="bg-white text-primary">close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Basic Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="editedPropertyPartnerData.property_name" label="Property Type *"
                      hide-bottom-space style="width: 250px" label-color="black" readonly>
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editedPropertyPartnerData.sub_property_name"
                      label="Sub Property Name *" hide-bottom-space style="width: 250px" label-color="black"
                      :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editedPropertyPartnerData.property_description"
                      label="Description *" :rules="[required('Description')]" lazy-rules style="width:100%" autogrow
                      label-color="black" hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-comment" color="secondary" />
                      </template>
                    </q-input>

                    <!-- <q-input
                          dense
                          outlined
                          v-model="editedPropertyPartnerData.property_price_startsFrom"
                          label="Price Starts From *"
                          :rules="[required('Price Starts From')]"
                          lazy-rules
                          style="width: 250px"
                          label-color="black"
                          hide-bottom-space
                        >
                          <template v-slot:prepend>
                            <q-icon
                              name="mdi-currency-inr"
                              color="secondary"
                            /> </template
                        ></q-input> -->

                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Address Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined hide-bottom-space v-model="editedPropertyPartnerData.building_no"
                      label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-home-city" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="editedPropertyPartnerData.street" label="Street/Colony Name*"
                      lazy-rules label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-highway" color="secondary" />
                      </template></q-input>
                    <q-input dense outlined v-model="editedPropertyPartnerData.land_mark" label="Landmark *"
                      label-color="black" hide-bottom-space :rules="[required('Landmark')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker-circle" color="secondary" />
                      </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                      v-model="editedPropertyPartnerData.country" label="Country" label-color="black"
                      :rules="[required('Country')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                      <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                      option-value="state_id" option-label="state_name" v-model="editedPropertyPartnerData.state" @input="
    loadAllCities(editedPropertyPartnerData.state);
  emptyCities();
                      " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                      option-label="city" fill-input options-dense input-debounce="0" v-model="editedPropertyPartnerData.city"
                      label="City *" label-color="black" hide-bottom-space :rules="[required('City')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select>
                    <q-input dense outlined lazy-rules mask="######" v-model="editedPropertyPartnerData.pin_code"
                      label="Pincode *" label-color="black" hide-bottom-space
                      :rules="[required('Pincode'), pinNumber()]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-input>
                    <!-- <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                      v-model="editedPropertyPartnerData.country" label="Country" label-color="black"
                      :rules="[required('Country')]"><template v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" />
                      </template></q-select> -->
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Contact Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="editedPropertyPartnerData.property_email" label="Email *"
                      lazy-rules hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]"
                      label-color="black">
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editedPropertyPartnerData.property_phone" label="Phone *"
                      lazy-rules mask="##########" style="width: 250px" label-color="black" hide-bottom-space
                      :rules="[required('Phone no'), phone()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" color="secondary" />
                      </template>
                    </q-input>

                    <q-input dense outlined v-model="editedPropertyPartnerData.Name_Of_Contact_Person"
                      label="Name of Contact Person*" style="width: 250px" label-color="black" hide-bottom-space
                      :rules="[required('Name')]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" color="secondary" />
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Location Details</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input dense outlined v-model="editedPropertyPartnerData.property_latitude" label="Latitude *"
                      lazy-rules style="width: 200px" label-color="black" hide-bottom-space
                      :rules="[required('Email'), number()]">
                      <template v-slot:prepend>
                        <q-icon name="mdi-latitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editedPropertyPartnerData.property_longitude" label="Longitude *"
                      lazy-rules style="width: 200px" :rules="[required('Email'), number()]" label-color="black"
                      hide-bottom-space>
                      <template v-slot:prepend>
                        <q-icon name="mdi-longitude" color="secondary" />
                      </template>
                    </q-input>
                    <q-select dense options-dense outlined style="width: 300px" v-model="editedPropertyPartnerData.facilities"
                        :options="propertyAmenitiesArr" option-label="amenity_name" option-value="amenity_id" multiple
                        aria-checked use-input fill-input @input="getOtherAmenities(editedPropertyPartnerData.facilities)"
                        label="Room Amenities" label-color="black" :rules="[required('Facilities')]">
                        <template v-slot:no-option>
                          <q-item>
                            <q-item-section class="text-grey">
                              No results
                            </q-item-section>
                          </q-item>
                        </template>
                        <template v-slot:prepend>
                          <q-icon name="mdi-home-city" color="secondary" />
                        </template>
                      </q-select>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Timings</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-input outlined label="Check In Time *" dense v-model="editedPropertyPartnerData.checkIn_time"
                    :rules="[required('Check In Time')]" @click="$refs.qOpeningTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="editedPropertyPartnerData.checkIn_time">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input outlined label="Check Out Time *" dense v-model="editedPropertyPartnerData.checkOut_time"
                    :rules="[required('Check Out Time')]" @click="$refs.qClosingTime.show()">
                      <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                          <q-popup-proxy ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                            <q-time v-model="editedPropertyPartnerData.checkOut_time" mask="hh:mm A">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-time>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
              <q-separator />
              <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Photos / Images</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled readonly
                      clearable v-model="uploadImage" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Front Image 1" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space readonly v-model="uploadImage1" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Front Image 2" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space readonly v-model="uploadImage2" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Reception" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable hide-bottom-space readonly v-model="uploadImage3" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Lobby" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                    <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled
                      clearable readonly hide-bottom-space v-model="uploadImage4" type="file"
                      accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                        (val) => {
                          files = val;
                        }
                      " hint="Upload Property Side Image" :rules="[(val) => val || 'Please select file']"
                      :filter="checkFileSize" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" color="white" />
                      </template>
                    </q-file>
                  </div>
                  <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                    <div class="text-bold row q-ml-md">Note:</div>
                    <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.
                    </div>
                  </div>
                </q-card-actions>
              </q-card>
              <div class="row q-pa-md justify-end">
                <q-btn color="secondary" label="Update" @click="onPropertyUpdate"></q-btn>
              </div>
            </q-card>
          </q-form>
        </q-layout>
      </q-dialog>

      <!-- ADD FOOD DETAILS -->
      <q-dialog v-model="addFoodDetailsDialog" maximized persistent>
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn v-close-popup>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-separator />
          <q-form ref="addFoodDetailsDialog">
            <q-card class="q-pa-md">
              <div class="text-overline1 q-gutter-xs" />
              <div class="text-overline1 q-gutter-xs" />

              <q-bar class="bg-grey">
                <div class="text-h6 text-Black text-bold">Food Details</div>
              </q-bar>

              <div class="q-pa-md row q-gutter-md">
                <q-input class="col-3" dense outlined v-model="addFoodDetails.kitchen_name" label="Kitchen Name"
                  readonly hide-bottom-space style="width: 200px" label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-input class="col-3" dense outlined v-model="addFoodDetails.kitchen_type" label="Kitchen Type" readonly hide-bottom-space style="width: 180px" label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-select class="col-3" dense outlined v-model="addFoodDetails.foodtype" label="Food Type *"
                  hide-bottom-space style="width: 200px" label-color="black" :options="otherfoodtype"
                  :rules="[required('Food Item Name')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-select>
                <q-input class="col-3" dense outlined v-model="addFoodDetails.foodName" label="Food Item Name *"
                  hide-bottom-space style="width: 200px" label-color="black" :rules="[required('Food Item Name')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-food" color="secondary" />
                  </template>
                </q-input>
                <q-input outlined label="items Available from *" dense v-model="addFoodDetails.items_available_from"
                  :rules="[required('items Available from')]">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time v-model="addFoodDetails.items_available_from" mask="hh:mm A">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input outlined label="Items Available to*" dense v-model="addFoodDetails.items_available_to"
                  :rules="[required('Items Available to')]">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time v-model="addFoodDetails.items_available_to" mask="hh:mm A">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-select class="col-3" dense outlined v-model="addFoodDetails.units" label="Units *" hide-bottom-space
                  style="width: 200px" label-color="black" :options="['1 Plate']" :rules="[required('Units')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-unity" color="secondary" />
                  </template>
                </q-select>
                <q-input class="col-3" dense outlined v-model="addFoodDetails.price" label="Price*" hide-bottom-space
                  style="width: 200px" label-color="black" :rules="[
                    required('Price'),
                    v => /^[0-9_. ]*$/.test(v) || 'Please enter numbers only'
                  ]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-input
                  dense
                  outlined
                  v-model="addFoodDetails.special_offer"
                  label="Special Offer *"
                  :rules="[number, specialMOfferValue('Special Offer', 100)]"
                  lazy-rules
                  mask="###"
                  style="width: 200px"
                  label-color="black"
                  hide-bottom-space
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-percent-outline"
                      color="secondary"
                    /> </template
                ></q-input> -->
                <q-file color="lime-11" bg-color="teal" style="width: 200px" class="hint-bold" dense clearable
                  v-model="food_image" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                  @update:model-value="
                    val => {
                      files = val;
                    }
                  " hint="Upload Food Image" :filter="checkFileSize" v-bind:readonly="this.onclickValue == 'edit'"
                  @rejected="onRejected">
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <!-- <q-btn
                  @click="addFoodData"
                  style="height: 40px"
                  square
                  dense
                  icon="add"
                  color="primary"
                /> -->
              </div>
              <div class="bg-grey-11 col-12 row q-pa-xs">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  Max File size is 2MB & Image format is
                  <b> .JPG, .JPEG, .PNG </b>.
                </div>
              </div>
              <!-- <q-table
                :data="foodData_rows"
                :columns="foodData_columns"
                :pagination.sync="pagination"
                dense
                separator="cell"
                :grid="mode === 'grid'"
                :filter="filter"
                :selected.sync="selected"
                color="green"
              >
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn
                      color="red"
                      @click="deleteItem(props.row)"
                      size="xs"
                      icon="delete"
                      round
                      dense
                      class="text-weight-bold"
                      no-caps
                      ><q-tooltip :disable="$q.platform.is.mobile"
                        >Delete</q-tooltip
                      ></q-btn
                    >
                  </q-td>
                </template>
              </q-table> -->
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Submit" v-if="this.onclickValue != 'edit'"
                @click="onSubmitaddFoodDetails('submit')" :disable="this.addFoodDetails.accept == false" />
              <q-btn color="secondary" label="Update" class="text-bold" @click="onSubmitaddFoodDetails('update')"
                v-if="this.onclickValue == 'edit'" :disable="this.addFoodDetails.accept == false" />
            </div>
          </q-form>
        </q-card>
      </q-dialog>

      <!-- ADD TRAVEL DETAILS -->
      <q-dialog v-model="addTravelDetails" maximized persistant transition-show="slide-up" transition-hide="slide-down">
        <q-card>
          <q-bar class="bg-primary">
            <div class="text-h6 text-white">{{ title }}</div>
            <q-space />
            <q-btn v-close-popup flat>
              <q-icon name="close" color="white"></q-icon>
              <q-tooltip>close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-form ref="addTravelDetails">
            <div class="text-overline1 q-gutter-xs" />
            <div class="text-overline1 q-gutter-xs" />
            <q-card class="q-pa-md">
              <q-bar class="bg-primary">
                <div class="text-h6 text-white">Travel Details</div>
              </q-bar>
              <div class="q-pa-md row q-gutter-md">
                <q-input class="col-3" dense outlined v-model="editedItem.agent_name" readonly label="Traveller Name *"
                  hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-input class="col-3" dense outlined v-model="editedItem.transport_sub_name" readonly
                  label="Traveller Sub Name *" hide-bottom-space style="width: 250px" label-color="black"
                  :rules="[required('Travel Sub Name')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-input
                  class="col-3"
                  dense
                  outlined
                  v-model="editedItem.city"
                  readonly
                  label="Vehicle City *"
                  hide-bottom-space
                  style="width:250px"
                  label-color="black"
                  :rules="[required('city')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-city" color="secondary" />
                  </template>
                </q-input> -->
                <!-- <q-select
                  dense
                  outlined
                  use-input
                  hide-selected
                  :options="AllCities"
                  fill-input
                  options-dense
                  input-debounce="0"
                  return-object
                  v-model="editedItem.vehicle_city"
                  label="Vehicle City *"
                  label-color="black"
                  :rules="[required('Vehicle city')]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-city" color="secondary" />
                  </template>
                </q-select> -->
                <!-- <q-select dense outlined use-input hide-selected :options="VehicleTypes" fill-input options-dense
                  input-debounce="0" v-model="addTravelLocation.vehicle_type" label="Vehicle Type *" label-color="black"
                  :rules="[required('Vehicle Type')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select> -->
                <q-input dense outlined v-model="addTravelLocation.vehicle_name" label="Vehicle Name *" class="col-3"
                  hide-bottom-space style="width: 250px" :rules="[required('vehicle name')]" label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-input>
                <q-select dense outlined use-input hide-selected :options="vehicleseats" fill-input options-dense
                  input-debounce="0" v-model="addTravelLocation.no_of_seaters" label="No Of Seaters *"
                  label-color="black" :rules="[required('Seaters')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select>
                <q-input dense outlined v-model="addTravelLocation.day_price" label="Day Price *" lazy-rules
                  class="col-3" hide-bottom-space style="width: 250px" :rules="[required('Price'), number()]"
                  label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <q-input dense outlined v-model="addTravelLocation.night_price" label="Night Price *" lazy-rules
                  class="col-3" hide-bottom-space style="width: 250px" :rules="[required('Price'), number()]"
                  label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <q-select dense outlined use-input hide-selected :options="vehiclePrice" fill-input options-dense
                  input-debounce="0" v-model="addTravelLocation.units" label="Units *" label-color="black"
                  :rules="[required('Units')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-car" color="secondary" />
                  </template>
                </q-select>

                <q-input class="col-2" dense outlined v-model="addTravelLocation.description" label="Description"
                  lazy-rules style="width: 250px" label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-comment" color="secondary" />
                  </template>
                </q-input>
                <!-- <q-input
                  dense
                  outlined
                  v-model="addTravelLocation.special_offer"
                  label="Special Offer *"
                  :rules="[number(), specialMOfferValue('Special Offer', 100)]"
                  lazy-rules
                  mask="###"
                  style="width: 180px"
                  label-color="black"
                  hide-bottom-space
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-percent-outline"
                      color="secondary"
                    /> </template
                ></q-input> -->
                <q-file color="lime-11" bg-color="teal" style="width: 200px" class="hint-bold" dense filled clearable
                  v-model="vehicle_image" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                  @update:model-value="
                    (val) => {
                      files = val;
                    }
                  " hint="Upload vehicle Image" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                  @rejected="onRejected">
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <!-- <q-btn push clickable color="green" icon="add" /> -->
              </div>
              <div class="bg-grey-11 col-12 row q-pa-xs">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
              </div>
            </q-card>
            <!-- <q-separator />
            <div class="q-pa-md">
              <q-table
                title="Travel Details"
                dense
                :rows="rows"
                :columns="columns"
                row-key="name"
              />
            </div> -->
            <q-separator />
            <q-spacer />
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Submit" v-if="this.onclickValue != 'edit'"
                @click="submitTravelLocData('submit')" :disable="this.addTravelLocation.accept == false" />
              <q-btn color="secondary" label="Update" class="text-bold" @click="submitTravelLocData('update')"
                v-if="this.onclickValue == 'edit'" :disable="this.addTravelLocation.accept == false" />
            </div>
          </q-form>
        </q-card>
      </q-dialog>

      <!-- DETAILED VIEW -->

      <q-dialog v-model="details" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div class="text-h6">
                View of Equipment Partner Registration Details:
                {{ editedItem.agent_name }}
              </div>
              <q-space />
              <!-- <q-chip dense clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
                @click="openMedicalStoreDialog(editedItem)">

              </q-chip> -->
              <q-btn-dropdown rounded dense clickable text-color="white" class="text-weight-medium text-bold"
                color="secondary" label="Add Data" icon="add">
                <q-list>
                  <q-item class="q-mt-xs" clickable dense v-close-popup @click="openPropertyPartnerDialog()" v-if="userDetails.accstatus == 'Approved'">
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>Add Property</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="q-mt-xs" clickable dense v-close-popup @click="OpenEqpRestaurantDialog()" v-if="userDetails.foodstatus == 'Approved'">
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>Add Restaurants</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="q-mt-xs" clickable dense v-close-popup @click="opentransportDialog()" v-if="userDetails.travelstatus == 'Approved'">
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>ADD Transport Details</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="q-mt-xs" clickable dense v-close-popup @click="openMedicalStoreDialog(editedItem)">
                    <q-item-section class="text-bold text-primary">
                      <q-item-label>Add Medical Store</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Basic Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                      <div class="col-4 text-left text-black">Lead partner</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_name }}
                      </div>
                      <div class="col-4 text-left text-black">Sub Partner</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.equipment_sub_name }}
                      </div>
                      <div class="col-4 text-left text-black">Lead Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.equipment_id }}
                      </div>
                      <div class="col-4 text-left text-black">Sub Id</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.equipment_sub_id }}
                      </div>
                      <q-separator />
                      <div class="col-4 text-left text-black">Phone</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.phone }}
                      </div>
                      <q-separator />
                      <div class="col-4 text-left text-black">Whatsapp</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.fax }}
                      </div>
                      <q-separator />
                      <div class="col-4 text-left text-black">Email</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.email_id }}
                      </div>
                      <div class="col-4 text-left text-black">Commission</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.agent_commission }}
                      </div>
                      <q-separator />
                      <div class="col-4 text-left text-black">Description</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.description }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                  Address Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                      <div class="col-4 text-left">House No</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.building_no }}
                      </div>
                      <div class="col-4 text-left">Street</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.street }}
                      </div>
                      <div class="col-4 text-left">Landmark</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.land_mark }}
                      </div>
                      <div class="col-4 text-left">Country</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.country }}
                      </div>
                      <div class="col-4 text-left">State</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.state }}
                      </div>
                      <div class="col-4 text-left">City</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.city }}
                      </div>
                      <div class="col-4 text-left">Pincode</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedItem.pin_code }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-bank" color="black" size="1.5em" />
                  Bank Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div style="height: 250px">
                      <div class="
                          row
                          text-black text-bold
                          q-ma-xs q-pa-md
                          text-body1
                        ">
                        <div class="col-4 text-left">Account No</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.bankAccountNo }}
                        </div>
                        <div class="col-4 text-left">Bank Name</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.bankName }}
                        </div>
                        <div class="col-4 text-left">Branch</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.branchName }}
                        </div>
                        <div class="col-4 text-left">IFSC Code</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.ifsc }}
                        </div>
                        <div class="col-4 text-left text-black">Aadhaar</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.aadhar }}
                        </div>
                        <div class="col-4 text-left text-black">Pan Card</div>
                        <div class="col-8 text-left text-grey">
                          : {{ editedItem.pan }}
                        </div>
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
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-file-document" color="black" size="1.5em" />Documents
                </q-bar>
                <tbody>
                  <div class="row">
                    <div class="col-3">
                      <tr>
                        <td class="text-left">PAN Card</td>
                        <!-- <td class="text-left">{{ editedItem.pan_card_file_loc }}</td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.pan_card_file_loc,
                              'Pancard'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">AADHAAR</td>
                        <!-- <td class="text-left">{{ editedItem.addhaar_no_loc }}</td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedItem.addhaar_no_loc, 'Addhaar')
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">GSTIN</td>
                        <!-- <td class="text-left">{{ editedItem.gst_tin_loc }}</td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedItem.gst_tin_loc, 'gst_tin')
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Agreement Doc</td>
                        <!-- <td class="text-left">
                      {{ editedItem.mh_agreement_loc }}
                    </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.mh_agreement_loc,
                              'Agreement Document'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <!-- <div class="col-3">
                      <tr>
                        <td class="text-left">Equipment Partner Photo</td>
                        <td class="text-center">
                          <q-btn
                            class="text-bold"
                            label="view"
                            color="secondary"
                            size="sm"
                            icon-right="mdi-eye"
                            @click="
                              showDocument(
                                editedItem.partner_pic_loc,
                                'Equipment Photo'
                              )
                            "
                          />
                        </td>
                      </tr>
                    </div> -->
                  </div>

                  <div class="row">
                    <div class="col-3">
                      <tr>
                        <td class="text-left">Undertaking</td>
                        <!-- <td class="text-left">
                      {{ editedItem.mb_certificate_loc}}
                    </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.mb_certificate_loc,
                              'Under Taking'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Indemnity Bond</td>
                        <!-- <td class="text-left">
                      {{ editedItem.property_tax_loc }}
                    </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.property_tax_loc,
                              'Indemnity'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Declaration</td>
                        <!-- <td class="text-left">
                      {{ editedItem.fire_safety_loc }}
                    </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.fire_safety_loc,
                              'Declaration'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">Cancelled Cheque</td>
                        <!-- <td class="text-left">
                      {{ editedItem.cancelled_cheque_doc }}
                    </td> -->
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedItem.cancelled_cheque_doc,
                              'Cancelled Cheque Document'
                            )
                          " />
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
              </q-markup-table>
            </div>
          </div>
          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Equipment Medical Store
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="medical_stores_rows" :columns="medical_stores_columns" :pagination.sync="pagination"
                    dense separator="cell" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected"
                    color="green" hide-pagination>
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn color="primary" @click="showMedicalStoreData(props.row)" icon="las la-eye" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn>
                        <q-btn color="secondary" @click="editMedicalStoreData(props.row)" icon="mdi-pencil" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                  <!-- <q-table :data="equipment_item_rows" :columns="equipment_item_columns" :pagination.sync="pagination"
                    dense row-key="sno" :filter="filter" :selected.sync="selected" separator="cell"
                    :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="primary" size="sm" icon-right="mdi-eye" @click="
                          showDocument(
                            props.row.equipment_image,
                            'Equipment Image'
                          )
                        " />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="green" icon="mdi-pencil" size="sm" @click="editEquipmentForm(props.row)">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table> -->
                </div>
              </q-card>
            </div>
          </div>
          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" v-if="userDetails.accstatus=='Approved'">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-city" color="black" size="1.5em" />
                  Property Details
                </q-bar>
                <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                <div style="width: 95%; margin: auto">
                  <q-table :data="property_partner_data_rows" :columns="property_partner_data_columns"
                    :pagination.sync="pagination" dense separator="cell" :grid="mode === 'grid'" :filter="filter"
                    :selected.sync="selected" color="green">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn color="secondary" @click="showPropertyData(props.row)" icon="las la-eye" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn>
                        <q-btn class="q-ml-xs" color="secondary" @click="editPropertyData(props.row)" icon="mdi-pencil"
                          size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                  <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                  <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                </div>
              </q-markup-table>
            </div>
          </div>
          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" v-if="userDetails.foodstatus=='Approved'">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-city" color="black" size="1.5em" />
                  Restaurant Details
                </q-bar>
                <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                <div style="width: 95%; margin: auto">
                  <q-table :data="eqp_restaurant_data_rows" :columns="eqp_restaurant_data_columns"
                    :pagination.sync="pagination" dense separator="cell" :grid="mode === 'grid'" :filter="filter"
                    :selected.sync="selected" color="green">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn color="secondary" @click="showEqpRestaurantData(props.row)" icon="las la-eye" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn>
                        <q-btn class="q-ml-xs" color="secondary" @click="editEqpRestaurantData(props.row)"
                          icon="mdi-pencil" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                  <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                  <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                </div>
              </q-markup-table>
            </div>
          </div>
          <!-- Transport Details Table Start -->
          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" v-if="userDetails.travelstatus=='Approved'">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Transport Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="medicaltransport_item_rows" :columns="medicaltransport_item_columns"
                    :pagination.sync="pagination" dense row-key="sno" :filter="filter" :selected.sync="selected"
                    separator="cell" :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-action="props">
                      <q-td :props="props">
                        <q-btn color="secondary" @click="showTransportDetails(props.row)" icon="las la-eye" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn>
                        <q-btn class="q-ml-xs" color="secondary" @click="editTrasportDetails(props.row)"
                          icon="mdi-pencil" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                        <!-- <q-btn color="green" @click="editTravel(props.row)" label="Edit" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn> -->
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                          showDocument(
                            props.row.upload_image1,
                            'Vehicle Image'
                          )
                        " />
                      </q-td>
                    </template>
                  </q-table>
                </div>

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

                  <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="
                    mode = mode === 'grid' ? 'list' : 'grid';
                  separator = mode === 'grid' ? 'none' : 'horizontal';
                  " v-if="!props.inFullscreen">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                    </q-tooltip>
                  </q-btn>

                  <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                    <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                    </q-tooltip>
                  </q-btn>
                </template>
              </q-card>
            </div>
          </div>
          <div>
            <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
              :maximized="maximizedToggle" persistent>
              <q-layout view="Lhh lpR fff" container class="bg-white">
                <q-header class="bg-primary">
                  <q-bar class="bg-primary text-white">
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
                    <iframe :src="url" class="wrapper" width="100%" height="600px" frameborder="0"></iframe>
                  </div>
                </q-card>
              </q-layout>
            </q-dialog>
          </div>
        </q-layout>
      </q-dialog>
     <!-- Sachin Medical Store View Start -->
     <q-dialog v-model="viewMedStoresData" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>
              <div class="text-h6">
                View of Medical Store Details:
                {{ editedMedStoresObj.medical_store_name }}
              </div>
              <q-space />
              <q-chip clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
                @click="openequipmentLocationForm()">
                Add Medical Item
              </q-chip>
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs text-black">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Basic Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                      <!-- <div class="col-5 text-left text-black">Lead partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.agent_name }}
                      </div>
                      <div class="col-5 text-left text-black">Sub Partner</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.equipment_sub_name }}
                      </div> -->
                      <!-- <div class="col-5 text-left text-black">Lead Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.partner_id }}
                      </div>
                      <div class="col-5 text-left text-black">Sub Id</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.partner_sub_id }}
                      </div> -->
                      <div class="col-5 text-left text-black">
                        Medical Store Name
                      </div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.medical_store_name }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Phone</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.phone }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Email</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.email_id }}
                      </div>
                      <q-separator />
                      <div class="col-5 text-left text-black">Description</div>
                      <div class="col-7 text-left text-grey">
                        : {{ editedMedStoresObj.description }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                  Address Details
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div class="
                        row
                        text-black text-bold
                        q-ma-xs q-pa-md
                        text-body1
                      ">
                      <div class="col-4 text-left">House No</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.building_no }}
                      </div>
                      <div class="col-4 text-left">Street</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.street }}
                      </div>
                      <div class="col-4 text-left">Landmark</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.land_mark }}
                      </div>
                      <div class="col-4 text-left">Country</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.country }}
                      </div>
                      <div class="col-4 text-left">State</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.state_name }}
                      </div>
                      <div class="col-4 text-left">City</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.city_name }}
                      </div>
                      <div class="col-4 text-left">Pincode</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.pin_code }}
                      </div>
                      <div class="col-4 text-left">Latitude</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.latitude }}
                      </div>
                      <div class="col-4 text-left">Longitude</div>
                      <div class="col-8 text-left text-grey">
                        : {{ editedMedStoresObj.longitude }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-file" color="black" size="1.5em" />
                  Documents
                </q-bar>
                <q-card-section class="q-pa-none">
                  <div style="height: 250px">
                    <div style="height: 250px">
                      <div class="
                          row
                          text-black text-bold
                          q-ma-xs q-pa-md
                          text-body1
                        ">
                        <div class="col-4 text-left">Medical Store Image 1</div>
                        <div class="col-8 text-left text-grey">
                          :
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.medical_store_image1,
                              'upload_image1'
                            )
                          " />
                        </div>
                        <div class="col-4 text-left">Medical Store Image 2</div>
                        <div class="col-8 text-left text-grey">
                          :
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.medical_store_image2,
                              'upload_image2'
                            )
                          " />
                        </div>
                        <div class="col-4 text-left">Medical Store Image 3</div>
                        <div class="col-8 text-left text-grey">
                          :
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.medical_store_image3,
                              'upload_image3'
                            )
                          " />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <q-resize-observer />
          </div>
          <!-- <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-markup-table class="q-ma-xs">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="mdi-file-document" color="black" size="1.5em" />Documents
                </q-bar>
                <tbody>
                  <div class="row">
                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 1</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(
                              editedMedStoresObj.medical_store_image1,
                              'upload_image1'
                            )
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 2</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedMedStoresObj.medical_store_image2, 'upload_image2')
                          " />
                        </td>
                      </tr>
                    </div>

                    <div class="col-3">
                      <tr>
                        <td class="text-left">MedicalStore Image 3</td>
                        <td class="text-center">
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocument(editedMedStoresObj.medical_store_image3, 'upload_image3')
                          " />
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
              </q-markup-table>
            </div>
          </div> -->
          <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="q-gutter-xs"></div>
              <q-card flat bordered class="bg-white">
                <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                  <q-icon name="manage_accounts" color="black" size="1.5em" />
                  Equipment Item Details
                </q-bar>
                <div class="q-pa-md" style="padding-top: 10px">
                  <q-table :data="equipment_item_rows" :columns="equipment_item_columns" :pagination.sync="pagination"
                    dense separator="cell" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected"
                    color="green" hide-pagination>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="secondary" @click="editEquipmentForm(props.row)" icon="mdi-pencil" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions2="props">
                      <q-td :props="props">
                        <q-btn color="secondary" @click="showDocument(props.row.equipment_image)" icon="mdi-eye" size="sm">
                          <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table>
                  <!-- <q-table :data="equipment_item_rows" :columns="equipment_item_columns" :pagination.sync="pagination"
                    dense row-key="sno" :filter="filter" :selected.sync="selected" separator="cell"
                    :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                    <template v-slot:body-cell-actions="props">
                      <q-td :props="props">
                        <q-btn class="text-bold" label="view" color="primary" size="sm" icon-right="mdi-eye" @click="
                          showDocument(
                            props.row.equipment_image,
                            'Equipment Image'
                          )
                        " />
                      </q-td>
                    </template>
                    <template v-slot:body-cell-actions1="props">
                      <q-td :props="props">
                        <q-btn color="green" icon="mdi-pencil" size="sm" @click="editEquipmentForm(props.row)">
                          <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                        </q-btn>
                      </q-td>
                    </template>
                  </q-table> -->
                </div>
              </q-card>
            </div>
          </div>
          <div>
            <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down"
              :maximized="maximizedToggle" persistent>
              <q-layout view="Lhh lpR fff" container class="bg-white">
                <q-header class="bg-primary">
                  <q-bar class="bg-primary text-white">
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
                    <iframe :src="url" class="wrapper" width="100%" height="600px" frameborder="0"></iframe>
                  </div>
                </q-card>
              </q-layout>
            </q-dialog>
          </div>
        </q-layout>
      </q-dialog>
       <!-- Sachin Medical Store View End -->
      <!-- PARTNER LIST -->
      <!-- <q-dialog v-model="subPropertyView" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-card flat bordered class="bg-white">
          <q-table dense :title="title" :data="equipment_registration_rows" :columns="equipment_registration_columns"
            row-key="sno" :filter="filter" :selected.sync="selected" separator="cell" :pagination.sync="pagination"
            :hide-header="mode === 'grid'" :grid="mode === 'grid'">
            <template v-slot:top-right="props">
              <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" style="width: 400px">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>

              <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen" v-if="mode === 'list'">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{
                props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
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

              <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                </q-tooltip>
              </q-btn>
              <q-chip clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
                @click="editOpenAddDialog()">
                Add Equipment
              </q-chip>
              <q-btn flat dense color="primary" class="text-black text-weight-bold" @click="subPropertyView = false">
                <q-icon name="las la-chevron-circle-left" />
                Back
              </q-btn>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn color="primary" @click="viewPropertyItem(props.row)" label="View" size="sm">
                  <q-tooltip :disable="$q.platform.is.mobile">View Details</q-tooltip>
                </q-btn>
                <q-btn color="green" @click="editPropertyItem(props.row)" label="Edit" size="sm">
                  <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                </q-btn>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </q-dialog> -->
    </q-page>

    <!-- ADD EQUIPMENT DETAILS -->
    <q-dialog v-model="equipmentLocationForm" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form filled square clearable dense ref="equipmentLocationForm" class="q-gutter-xs" lazy-rules
          hide-bottom-space :rules="[val => (val && val.length > 0) || 'Please enter Values']">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">{{ title }}</div>
              <q-space />
              <q-btn dark flat icon="close" color="white" @click="closeEquipmentDialog">
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Equipment Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense options-dense outlined v-model="equipmentItemDetails.medical_store"
                    label="Medical Store *" use-input hide-selected style="width: 250px" fill-input hide-bottom-space readonly >
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>

                  <q-select dense options-dense outlined v-model="equipmentItemDetails.item_name"
                    label="Equipment Item Name *" use-input hide-selected style="width: 250px" fill-input
                    hide-bottom-space :options="medicalItemName" option-label="item_name" option-value="item_id"
                    :rules="[required('Equipment Item Name')]" label-color="black" @input="
                      loadAllMedicalUnits(equipmentItemDetails.item_name),
                      emptyMedicalItems()
                    ">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-select>
                  <q-select v-model="equipmentItemDetails.units" dense options-dense outlined use-input hide-selected
                    style="width: 250px" fill-input hide-bottom-space :options="medicalUnitsName" option-label="units"
                    option-value="unit_id" label="Units *" label-color="black" :rules="[required('Units')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-unity" color="secondary" />
                    </template>
                  </q-select>
                  <q-select v-model="equipmentItemDetails.purchased_type" dense options-dense outlined use-input
                    hide-selected style="width: 250px" fill-input hide-bottom-space :options="medicalPurchasingType"
                    label="Purchasing Type *" label-color="black" :rules="[required('Purchased Type')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-unity" color="secondary" />
                    </template>
                  </q-select>
                  <q-input dense outlined v-model="equipmentItemDetails.price" label="Price *" lazy-rules
                    hide-bottom-space style="width: 250px" :rules="[required('Price'), number()]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>

                  <!-- <q-input
                  dense
                  outlined
                  v-model="equipmentItemDetails.special_offer"
                  label="Special Offer *"
                  :rules="[number, specialMOfferValue('Special Offer', 100)]"
                  lazy-rules
                  mask="###"
                  style="width: 200px"
                  label-color="black"
                  hide-bottom-space
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-percent-outline"
                      color="secondary"
                    /> </template
                ></q-input> -->
                  <q-file color="lime-11" bg-color="teal" style="width: 250px" class="hint-bold" dense filled clearable
                    v-model="equipment_image" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Equipment Image" :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <!-- <q-btn
                    square
                    dense
                    icon="add"
                    color="primary"
                    style="height: 40px"
                    @click="addDetailForm"
                  ></q-btn> -->
                </div>
              </q-card-actions>
              <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
              </div>
            </q-card>
            <!-- <q-table
              :data="equipmentRows"
              :columns="equipmentColumns"
              :pagination.sync="pagination"
              dense
              :selected.sync="selected"
              :grid="mode === 'grid'"
              :filter="filter"
              color="green"
              separator="cell"
            >
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    color="red"
                    @click="deleteItem(props.row)"
                    size="xs"
                    icon="delete"
                    round
                    dense
                    class="text-weight-bold"
                    no-caps
                    ><q-tooltip :disable="$q.platform.is.mobile"
                      >Delete</q-tooltip
                    ></q-btn
                  >
                </q-td>
              </template>
            </q-table> -->
          </q-card>
          <div class="row q-pa-md justify-end">
            <q-btn color="secondary" label="Submit" @click="onSubmitDetailForm"
              :disable="this.equipmentLocationForm.accept == false"></q-btn>
          </div>
        </q-form>
      </q-layout>
    </q-dialog>

    <!-- EDIT EQUIPMENT DETAILS -->
    <q-dialog v-model="equipmentUpdatingDetails" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form filled square clearable dense ref="editEquipmentDetails" class="q-gutter-xs" lazy-rules
          hide-bottom-space :rules="[val => (val && val.length > 0) || 'Please enter Values']">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">{{ title }}</div>
              <q-space />
              <q-btn dark flat icon="close" color="white" @click="closeEditEquipmentDialog">
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Edit Equipment Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense options-dense outlined v-model="editMedicalDetails.medical_store"
                    label="Medical Store *" use-input hide-selected style="width: 250px" fill-input hide-bottom-space
                   readonly>
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                  <q-select dense options-dense outlined v-model="editMedicalDetails.item_name"
                    label="Equipment Item Name *" use-input hide-selected style="width: 250px" fill-input
                    hide-bottom-space :options="medicalItemName" option-label="item_name" option-value="item_id"
                    :rules="[required('Equipment Item Name')]" label-color="black" @input="
                      loadAllMedicalUnits(editMedicalDetails.item_name),
                      emptyMedicalItems()
                    ">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-select>
                  <q-select v-model="editMedicalDetails.units" dense options-dense outlined use-input hide-selected
                    style="width: 250px" fill-input hide-bottom-space :options="medicalUnitsName" option-label="units"
                    option-value="unit_id" label="Units *" label-color="black" :rules="[required('Units')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-unity" color="secondary" />
                    </template>
                  </q-select>
                  <q-select v-model="editMedicalDetails.purchased_type" dense options-dense outlined use-input
                    hide-selected style="width: 250px" fill-input hide-bottom-space :options="medicalPurchasingType"
                    label="Purchasing Type *" label-color="black" :rules="[required('Purchased Type')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-unity" color="secondary" />
                    </template>
                  </q-select>
                  <q-input dense outlined v-model="editMedicalDetails.price" label="Price *" lazy-rules
                    hide-bottom-space style="width: 250px" :rules="[required('Price'), number()]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>
                  <!-- <q-input
                  dense
                  outlined
                  v-model="editMedicalDetails.special_offer"
                  label="Special Offer *"
                  :rules="[number, specialMOfferValue('Special Offer', 100)]"
                  lazy-rules
                  mask="###"
                  style="width: 200px"
                  label-color="black"
                  hide-bottom-space
                >
                  <template v-slot:prepend>
                    <q-icon
                      name="mdi-percent-outline"
                      color="secondary"
                    /> </template
                ></q-input> -->
                  <q-file color="lime-11" bg-color="teal" style="width: 250px" class="hint-bold" dense readonly filled
                    clearable v-model="equipment_image" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Equipment Image" :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <!-- <q-btn
                    square
                    dense
                    icon="add"
                    color="primary"
                    style="height: 40px"
                    @click="addDetailForm"
                  ></q-btn> -->
                </div>
              </q-card-actions>
            </q-card>
            <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
              <div class="text-bold row q-ml-md">Note:</div>
              <div class="text-bold row q-ml-md">Note:</div>
              <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
            </div>
          </q-card>
          <div class="row q-pa-md justify-end">
            <q-btn color="secondary" label="Update" @click="onUpdatingEquipmentDetailForm()"></q-btn>
          </div>
        </q-form>
      </q-layout>
    </q-dialog>

    <!-- VIEW ROOM PROPERTY -->
    <q-dialog v-model="roomPropertyDataDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            <div class="text-h6">
              View of Property Details:
              {{ roomPropertyEditedItem.sub_property_name }}
            </div>
            <q-space />
            <q-chip dense clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
              @click="openRoomsDialog()">
              Add Rooms
            </q-chip>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs text-black">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Basic Details
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <div class="col-5 text-left text-black">
                      Lead Partner
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.partner_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Sub Partner
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.sub_partner_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Lead Id</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.partner_id }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Sub Id</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.partner_sub_id }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Property Type
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.property_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Sub Property Name
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.sub_property_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Phone</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.property_phone }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Email</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.property_email }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                Address Details
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <div class="col-5 text-left">House No</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.building_no }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Street</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.street }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Landmark</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.land_mark }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Country</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.country }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">State</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.state_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">City</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.city_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Pincode</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.pin_code }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Latitude</div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.property_latitude }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Longitude
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ roomPropertyEditedItem.property_longitude }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-file" color="black" size="1.5em" />
                Documents
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <tbody>
                      <tr>
                        <td class="text-left" width="280px">
                          Property Image 1
                        </td>
                        <td>
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocumentacc(
                              roomPropertyEditedItem.upload_image,
                              'Property Image1'
                            )
                          " />
                        </td>
                      </tr>
                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                      <tr>
                        <td class="text-left" width="280px">
                          Property Image2
                        </td>
                        <td>
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocumentacc(
                              roomPropertyEditedItem.upload_image1,
                              'Property Image2'
                            )
                          " />
                        </td>
                      </tr>
                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                      <tr>
                        <td class="text-left" width="280px">
                          Property Image3
                        </td>
                        <td>
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocumentacc(
                              roomPropertyEditedItem.upload_image2,
                              'Property Image3'
                            )
                          " />
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-markup-table class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-home" color="black" size="1.5em" />
                Property Description
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 150px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1">
                    <div class="col-12 text-justify text-grey">
                      {{ roomPropertyEditedItem.property_description }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-markup-table>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-markup-table class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-home" color="black" size="1.5em" /> Room
                Details
              </q-bar>
              <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 10px" />
              <div style="width: 95%; margin: auto">
                <q-table :data="rooms_property_data_rows" :columns="rooms_property_data_columns"
                  :pagination.sync="pagination" dense separator="cell" :grid="mode === 'grid'" :filter="filter"
                  :selected.sync="selected" color="green">
                  <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                      <q-btn color="primary" @click="showRoomsData(props.row)" icon="las la-eye" size="sm">
                        <q-tooltip :disable="$q.platform.is.mobile">View</q-tooltip>
                      </q-btn>
                    </q-td>
                  </template>
                  <template v-slot:body-cell-actions1="props">
                    <q-td :props="props">
                      <q-btn color="green" icon="mdi-pencil" size="sm" @click="editRoomsData(props.row)">
                        <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                      </q-btn>
                    </q-td>
                  </template>
                </q-table>
                <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
              </div>
            </q-markup-table>
          </div>
        </div>
      </q-layout>
    </q-dialog>

    <!-- ADD ROOM DETAILS -->
    <q-dialog v-model="addRoomsDialog" maximized persistent>
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form ref="roomsFormBasic" class="q-gutter-xs">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">
                MH Accommodation Room Details
              </div>
              <q-space />
              <q-btn v-close-popup>
                <q-icon name="close" color="white"></q-icon>
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Basic Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="propertyRoomDetails.partner_name" label="Lead Partner Name"
                    hide-bottom-space style="width: 250px" label-color="black" readonly :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="propertyRoomDetails.sub_partner_name" label="Sub Partner" lazy-rules
                    style="width: 250px" label-color="black" readonly hide-bottom-space
                    :rules="[required('Sub Partner')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account-multiple-outline" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="propertyRoomDetails.property_name" label="Property Type" lazy-rules
                    style="width: 250px" label-color="black" readonly hide-bottom-space>
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="propertyRoomDetails.sub_property_name" label="Sub Property Name"
                    lazy-rules style="width: 250px" label-color="black" readonly hide-bottom-space
                    :rules="[required('Sub Property Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>
                  <q-select dense options-dense outlined use-input hide-selected style="width: 200px" fill-input
                    :options="room_categoryArr" v-model="propertyRoomDetails.room_category" label="Room Category*"
                    label-color="black" :rules="[required('Room Category')]">
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-circle" color="secondary" />
                    </template>
                  </q-select>
                  <q-select dense options-dense outlined use-input hide-selected style="width: 240px" fill-input
                    :options="roomTypeArr" v-model="propertyRoomDetails.room_type" label="Type of Room *"
                    label-color="black" :rules="[required('Type of Room')]">
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-circle" color="secondary" />
                    </template>
                  </q-select>
                  <q-input dense outlined label="No.of Available Rooms" v-model="propertyRoomDetails.no_of_avail_rooms"
                    label-color="black" hide-bottom-space :rules="[required('No.of Available Rooms', number())]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-door" color="secondary" />
                    </template>
                  </q-input>
                  <q-select ref="myChipInput" v-model="propertyRoomDetails.room_numbers" multiple dense outlined
                    use-chips use-input new-value-mode="add" stack-label hide-dropdown-icon label="Room Number"
                    @input.native="doStuff($event.target.value)" @new-value="createValue"
                    @keyup.tab.native="doOtherStuff">
                    <template v-slot:prepend>
                      <q-icon name="mdi-door" color="secondary" />
                    </template>
                  </q-select>
                  <q-select dense options-dense outlined style="width: 250px" v-model="propertyRoomDetails.facilities"
                    :options="amenitiesArr" option-label="amenity_name" option-value="amenity_id" multiple aria-checked
                    use-input fill-input @input="getOtherAmenities(propertyRoomDetails.facilities)"
                    label="Room Amenities" label-color="black" :rules="[required('Amenities')]">
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-select>
                  <q-input v-if="otheramenitiesinput == true" dense outlined
                    v-model="propertyRoomDetails.other_amenities" label="Other Room Amenities" lazy-rules
                    style="width: 190px" label-color="black" hide-bottom-space :rules="[required('Room Amenities')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="propertyRoomDetails.price" label="Price" lazy-rules
                    style="width: 190px" label-color="black" hide-bottom-space :rules="[required('Price'), number()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-currency-inr" color="secondary" />
                    </template>
                  </q-input>
                  <q-select dense options-dense outlined use-input hide-selected style="width: 200px" fill-input
                    :options="unitsArr" v-model="propertyRoomDetails.units" label="Rate *" label-color="black"
                    use-checkbox :rules="[required('Units')]">
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                    <template v-slot:prepend>
                      <q-icon name="mdi-timer-sand" color="secondary" />
                    </template>
                  </q-select>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Special Offers</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-select dense options-dense outlined use-input hide-selected style="width: 200px" fill-input
                      :options="offerOptions" v-model="propertyRoomDetails.select_offer" label="Select Offer*"
                      label-color="black" :rules="[required('Property Type')]">
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-sale" color="secondary" /> </template></q-select>
                    <q-input dense outlined v-model="propertyRoomDetails.enter_amount" label="Enter Amount *"
                      :rules="[required('Enter Amount')]" lazy-rules style="width: 180px" label-color="black"
                      hide-bottom-space v-if="this.propertyRoomDetails.select_offer == 'Amount'">
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="propertyRoomDetails.special_offer" label="Special Offer *"
                      :rules="[number, specialMOfferValue('Special Offer', 100)]" lazy-rules mask="###"
                      style="width: 250px" label-color="black" hide-bottom-space
                      v-if="this.propertyRoomDetails.select_offer == 'Percentage'">
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>

                  <q-input dense outlined v-model="propertyRoomDetails.date_from" label="Date From" label-color="black"
                    clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="propertyRoomDetails.date_from" minimal mask="DD/MM/YYYY"
                            @input="closeDialog">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="propertyRoomDetails.date_to" label="Date To" label-color="black"
                    clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                          <q-date v-model="propertyRoomDetails.date_to" minimal mask="DD/MM/YYYY" @input="closeDialog1">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Photos / Images</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    v-model="uploadRoomImage1" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    hide-bottom-space @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Room Image1" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                    @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    hide-bottom-space v-model="uploadRoomImage2" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Room Image2" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                    @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    hide-bottom-space v-model="uploadRoomImage3" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Room Image3" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                    @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    hide-bottom-space v-model="uploadRoomImage4" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Room Image4" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                    @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    hide-bottom-space v-model="uploadRoomImage5" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Room Image5" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                    @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
              </q-card-actions>
              <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
              </div>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Submit" @click="onRoomsSubmit">
              </q-btn>
            </div>
          </q-card>
        </q-form>
      </q-layout>
    </q-dialog>
    <!-- GET ROOM DETAILS -->

    <q-dialog v-model="roomsDataDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
            transition-hide="slide-down">
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-header class="bg-primary">
                <q-bar class="bg-primary text-white">
                  <q-icon name="feed"></q-icon>
                  <div class="text-h6">
                    View of Room Details:
                    {{ roomsEditedItem.sub_property_name }}
                  </div>
                  <q-space />
                  <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                  </q-btn>
                </q-bar>
              </q-header>
              <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs text-black">
                    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                      <q-icon name="manage_accounts" color="black" size="1.5em" />
                      Basic Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                          <div class="col-5 text-left text-black">
                            Lead Partner
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.partner_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Sub Partner
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.sub_partner_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Lead Id</div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.partner_id }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Sub Id</div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.partner_sub_id }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Property Type
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.property_name }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Sub Property Name
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.sub_property_name }}
                          </div>
                          <q-separator />
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs">
                    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh"><q-icon name="mdi-home-circle"
                        color="black" size="1.5em" />
                      Room Details
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                          <div class="col-5 text-left text-black">
                            No.of Available Rooms
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.no_of_avail_rooms }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Room Type
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.room_type }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">
                            Facilities
                          </div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.facilities }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Price</div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.price }}
                          </div>
                          <q-separator />
                          <div class="col-5 text-left text-black">Units</div>
                          <div class="col-7 text-left text-grey">
                            : {{ roomsEditedItem.units }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <q-card class="q-ma-xs">
                    <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                      <q-icon name="mdi-file" color="black" size="1.5em" />
                      Documents
                    </q-bar>
                    <q-card-section class="q-pa-none">
                      <div style="height: 300px">
                        <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                          <tbody>
                            <tr>
                              <td class="text-left" width="280px">
                                Room Image 1
                              </td>
                              <td>
                                <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye"
                                  @click="
                                    showDocumentacc(
                                      roomsEditedItem.room_image_1,
                                      'Room Image 1'
                                    )
                                  " />
                              </td>
                            </tr>
                            <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                            <tr>
                              <td class="text-left" width="280px">
                                Room Image 2
                              </td>
                              <td>
                                <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye"
                                  @click="
                                    showDocumentacc(
                                      roomsEditedItem.room_image_2,
                                      'Room Image 2'
                                    )
                                  " />
                              </td>
                            </tr>
                            <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                            <tr>
                              <td class="text-left" width="280px">
                                Room Image 3
                              </td>
                              <td>
                                <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye"
                                  @click="
                                  showDocumentacc(
                                    roomsEditedItem.room_image_3,
                                    'Room Image 3'
                                  )" />
                              </td>
                            </tr>
                          </tbody>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-layout>
          </q-dialog>

    <!-- EDIT ROOM DETAILS -->
    <q-dialog v-model="roomsEditPropertyDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form ref="editRoomsForm" class="q-gutter-xs">
          <q-header class="bg-primary">
            <q-bar class="bg-primary text-white">
              <q-icon name="feed"></q-icon>

              <div class="text-h6">Edit of Room Details</div>
              <q-space />
              <q-btn dark flat icon="close" color="white" @click="roomsEditPropertyDialog = false">
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
          </q-header>
          <q-card flat class="q-pa-md" padding style="padding-top: 45px">
            <q-bar>
              <div class="text-bold text-black">Basic Details</div>
            </q-bar>
            <q-card-actions>
              <div class="row items-start q-gutter-md">
                <q-input dense outlined v-model="editedPropertyRoomsData.sub_property_name" label="Sub Property Name"
                  readonly hide-bottom-space style="width: 250px" label-color="black"
                  :rules="[required('Sub Property Name')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" color="secondary" />
                  </template>
                </q-input>
                <q-input dense outlined v-model="editedPropertyRoomsData.property_name" readonly label="Property Type *"
                  hide-bottom-space style="width: 250px" label-color="black">
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-multiple-outline" color="secondary" />
                  </template>
                </q-input>
                <q-select dense options-dense outlined use-input hide-selected style="width: 200px" fill-input
                  :options="room_categoryArr" v-model="editedPropertyRoomsData.room_category" label="Room Category*"
                  label-color="black" :rules="[required('Room Category')]">
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:prepend>
                    <q-icon name="mdi-home-circle" color="secondary" />
                  </template>
                </q-select>
                <q-input dense outlined v-model="editedPropertyRoomsData.no_of_avail_rooms"
                  label="No.of Available Rooms" lazy-rules style="width: 200px" label-color="black" hide-bottom-space
                  :rules="[required('No.of Available Rooms', number())]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-door" color="secondary" />
                  </template>
                </q-input>
                <q-select dense options-dense outlined use-input hide-selected style="width: 240px" fill-input
                  :options="roomTypeArr" v-model="editedPropertyRoomsData.room_type" label="Type of Room *"
                  label-color="black" :rules="[required('Type of Room')]">
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:prepend>
                    <q-icon name="mdi-home-circle" color="secondary" />
                  </template>
                </q-select>
                <q-select ref="myChipInput" v-model="editedPropertyRoomsData.room_numbers" multiple dense outlined
                  use-chips use-input new-value-mode="edit" stack-label hide-dropdown-icon label="Room Number"
                  @input.native="doStuff($event.target.value)" @new-value="createValue"
                  @keyup.tab.native="doOtherStuff">
                  <template v-slot:prepend>
                    <q-icon name="mdi-door" color="secondary" />
                  </template>
                </q-select>
                <q-select dense options-dense outlined style="width: 300px" v-model="editedPropertyRoomsData.facilities"
                  :options="amenitiesArr" option-label="amenity_name" option-value="amenity_id" multiple aria-checked
                  use-input fill-input @input="getOtherAmenities(editedPropertyRoomsData.facilities)"
                  label="Room Amenities" label-color="black" :rules="[required('Facilities')]">
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:prepend>
                    <q-icon name="mdi-home-city" color="secondary" />
                  </template>
                </q-select>
                <q-input v-if="otheramenitiesinput == true" dense outlined
                  v-model="editedPropertyRoomsData.other_amenities" label="Other Room Amenities" lazy-rules
                  style="width: 190px" label-color="black" hide-bottom-space :rules="[required('Room Amenities')]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-home-city" color="secondary" />
                  </template>
                </q-input>
                <q-input dense outlined v-model="editedPropertyRoomsData.price" label="Price" lazy-rules
                  style="width: 190px" label-color="black" hide-bottom-space :rules="[required('Price'), number()]">
                  <template v-slot:prepend>
                    <q-icon name="mdi-currency-inr" color="secondary" />
                  </template>
                </q-input>
                <q-select dense options-dense outlined use-input hide-selected style="width: 200px" fill-input
                  :options="unitsArr" v-model="editedPropertyRoomsData.units" label="Units *" label-color="black"
                  use-checkbox :rules="[required('Units')]">
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:prepend>
                    <q-icon name="mdi-timer-sand" color="secondary" />
                  </template>
                </q-select>
              </div>
            </q-card-actions>
          </q-card>
          <q-separator />
          <q-card flat class="q-pa-md">
            <q-bar>
              <div class="text-bold text-black">Special Offers</div>
            </q-bar>
            <q-card-actions>
              <div class="row items-start q-gutter-md">
                <q-select dense options-dense outlined use-input hide-selected style="width: 200px" fill-input
                        :options="offerOptions" v-model="editedPropertyRoomsData.select_offer" label="Select Offer*"
                        label-color="black" :rules="[required('Property Type')]">
                        <template v-slot:no-option>
                          <q-item>
                            <q-item-section class="text-grey">
                              No results
                            </q-item-section>
                          </q-item>
                        </template>
                        <template v-slot:prepend>
                          <q-icon name="mdi-sale" color="secondary" /> </template></q-select>
                      <q-input dense outlined v-model="editedPropertyRoomsData.enter_amount" label="Enter Amount *"
                        :rules="[required('Enter Amount')]" lazy-rules style="width: 180px" label-color="black"
                        hide-bottom-space v-if="this.editedPropertyRoomsData.select_offer == 'Amount'">
                        <template v-slot:prepend>
                          <q-icon name="mdi-currency-inr" color="secondary" />
                        </template>
                      </q-input>
                      <q-input dense outlined v-model="editedPropertyRoomsData.special_offer" label="Special Offer *"
                        :rules="[number, specialMOfferValue('Special Offer', 100)]" lazy-rules mask="###"
                        style="width: 250px" label-color="black" hide-bottom-space
                        v-if="this.editedPropertyRoomsData.select_offer == 'Percentage'">
                        <template v-slot:prepend>
                          <q-icon name="mdi-percent-outline" color="secondary" />
                        </template>
                      </q-input>
                <q-input dense outlined v-model="editedPropertyRoomsData.date_from" clearable label="Date From"
                  label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="editedPropertyRoomsData.date_from" mask="DD/MM/YYYY" clear-icon="close" minimal  @input="closeDialog">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input dense outlined v-model="editedPropertyRoomsData.date_to" label="Date To" label-color="black"
                  clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy1" minimal transition-show="scale" transition-hide="scale">
                        <q-date v-model="editedPropertyRoomsData.date_to" minimal mask="DD/MM/YYYY"
                          @input="closeDialog1">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" minimal flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </q-card-actions>
          </q-card>
          <q-separator />
          <q-card flat class="q-pa-md">
            <q-bar>
              <div class="text-bold text-black">Photos / Images</div>
            </q-bar>
            <q-card-actions>
              <div class="row items-start q-gutter-md">
                <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                  readonly v-model="uploadRoomImage1" type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                    (val) => {
                      files = val;
                    }
                  " hint="Upload Room Image1" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                  @rejected="onRejected">
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                  hide-bottom-space readonly v-model="uploadRoomImage2" type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                    (val) => {
                      files = val;
                    }
                  " hint="Upload Room Image2" :rules="[(val) => val || 'Please select file']" :filter="checkFileSize"
                  @rejected="onRejected">
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                  hide-bottom-space v-model="uploadRoomImage3" readonly type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                    (val) => {
                      files = val;
                    }
                  " hint="Upload Washroom Image1" :rules="[(val) => val || 'Please select file']"
                  :filter="checkFileSize" @rejected="onRejected">
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                  hide-bottom-space v-model="uploadRoomImage4" readonly type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                    (val) => {
                      files = val;
                    }
                  " hint="Upload Washroom Image2" :rules="[(val) => val || 'Please select file']"
                  :filter="checkFileSize" @rejected="onRejected">
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
                <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                  hide-bottom-space v-model="uploadRoomImage5" readonly type="file"
                  accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                    (val) => {
                      files = val;
                    }
                  " hint="Upload Additional Image" :rules="[(val) => val || 'Please select file']"
                  :filter="checkFileSize" @rejected="onRejected">
                  <template v-slot:prepend>
                    <q-icon name="attach_file" color="white" />
                  </template>
                </q-file>
              </div>
            </q-card-actions>
            <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
              <div class="text-bold row q-ml-md">Note:</div>
              <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
            </div>
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Update" @click="onRoomsUpdate">
              </q-btn>
            </div>
          </q-card>
        </q-form>
      </q-layout>
    </q-dialog>
    <!-- Add Transport Dialog Detail Start -->
    <q-dialog v-model="transportDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form ref="transportFormBasic" class="q-gutter-xs">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">
                MH Transport Details
              </div>
              <q-space />
              <q-btn dark flat icon="close" color="white" v-close-popup>
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Basic Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="transportDetails.transport_company_name"
                    label="Transport Company Name *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transportDetails.special_offer" label="Special Offer *" :rules="[
                    number(),
                    specialMOfferValue('Special Offer', 100)
                  ]" lazy-rules mask="###" style="width: 180px" label-color="black" hide-bottom-space>
                    <template v-slot:prepend>
                      <q-icon name="mdi-percent-outline" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transportDetails.from_date" label="Date From" label-color="black"
                    clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="transportDetails.from_date" minimal mask="DD/MM/YYYY" @input="closeDialog">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transportDetails.to_date" label="Date To" label-color="black"
                    clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                          <q-date v-model="transportDetails.to_date" minimal mask="DD/MM/YYYY" @input="closeDialog1">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transportDetails.transport_description" lazy-rules style="width:100%"
                    label-color="black" type="textarea" :rules="[required('Description')]" autogrow hide-bottom-space
                    placeholder="Description *">
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Address Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined hide-bottom-space v-model="transportDetails.building_no"
                    label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined v-model="transportDetails.street" label="Street/Colony Name*" lazy-rules
                    label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined v-model="transportDetails.land_mark" label="Landmark" label-color="black"
                    hide-bottom-space><template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" />
                    </template></q-input>
                  <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                    option-value="state_id" option-label="state_name" v-model="transportDetails.state" @input="
                      loadAllCities(transportDetails.state);
                    emptyCities();
                    " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                  <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                    option-label="city" fill-input options-dense input-debounce="0" v-model="transportDetails.city"
                    label="City *" label-color="black" hide-bottom-space :rules="[required('City')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                  <q-input dense outlined lazy-rules mask="######" v-model="transportDetails.pin_code" label="Pincode *"
                    label-color="black" hide-bottom-space :rules="[required('Pincode'), pinNumber()]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-input>
                  <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                    v-model="transportDetails.country" label="Country" label-color="black"
                    :rules="[required('Country')]"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Contact Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="transportDetails.transport_email_id" label="Email *" lazy-rules
                    hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transportDetails.transport_phone" label="Phone *" lazy-rules
                    mask="##########" style="width: 250px" label-color="black" hide-bottom-space
                    :rules="[required('Phone no'), phone()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transportDetails.Name_Of_Contact_Person"
                    label="Name of Contact Person *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Location Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="transportDetails.transport_latitude" label="Latitude *" lazy-rules
                    style="width: 200px" label-color="black" hide-bottom-space
                    :rules="[required('Latitude'), number()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-latitude" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transportDetails.transport_longitude" label="Longitude *" lazy-rules
                    style="width: 200px" :rules="[required('Longitude'), number()]" label-color="black"
                    hide-bottom-space>
                    <template v-slot:prepend>
                      <q-icon name="mdi-longitude" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />

            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Photos / Images</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    v-model="uploadImage" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    hide-bottom-space @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Vehicle Front Image " :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    hide-bottom-space v-model="uploadImage1" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Vehicle Back Image " :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
              </q-card-actions>
              <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  1- Day Time <b> 7:01AM To 9:00PM </b>.
                </div>
                <div class="row col-12 q-ml-md">
                  1- Night Time <b> 9:01PM To 7:00AM </b>.
                </div>
              </div>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Submit" @click="onMedicalTransportSubmit"></q-btn>
            </div>
          </q-card>
        </q-form>
      </q-layout>
    </q-dialog>
    <q-dialog v-model="transportViewDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            <div class="text-h6">
              View of Transport Details:
              {{ editedItem.transport_sub_name }}
            </div>
            <q-space />
            <q-chip dense clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
              @click="openTravelDetailsDialog()">
              Add Travel Data
            </q-chip>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs text-black">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Basic Details
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <div class="col-5 text-left text-black">
                      Transport Company Name
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.transport_company_name }}
                    </div>
                    <q-separator />

                    <div class="col-5 text-left text-black">
                      Name Of Contact Person
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.Name_Of_Contact_Person }}
                    </div>
                    <q-separator />

                    <div class="col-5 text-left text-black">
                      Phone Number
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.transport_phone }}
                    </div>
                    <q-separator />

                    <div class="col-5 text-left text-black">
                      Email Id
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.transport_email_id }}
                    </div>
                    <q-separator />

                    <div class="col-5 text-left text-black">
                      Special Offer
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.special_offer }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Description
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.transport_description }}
                    </div>
                    <q-separator />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                Address Details
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <div class="col-5 text-left">House No</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.building_no }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Street</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.street }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Landmark</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.land_mark }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Country</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.country }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">State</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.state }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">City</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.city }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Pincode</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.pin_code }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Latitude</div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.transport_latitude }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Longitude
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ editedItem.transport_longitude }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-file" color="black" size="1.5em" />
                Documents
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <tbody>
                      <tr>
                        <td class="text-left" width="280px">
                          Transport Image 1
                        </td>
                        <td>
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocumentacc(
                              editedItem.upload_image,
                              'Upload Image1'
                            )
                          " />
                        </td>
                      </tr>
                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                      <tr>
                        <td class="text-left" width="280px">
                          Transport Image2
                        </td>
                        <td>
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showDocumentacc(
                              editedItem.upload_image1,
                              'Upload Image2'
                            )
                          " />
                        </td>
                      </tr>
                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                    </tbody>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-markup-table class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-home" color="black" size="1.5em" />
                Transport Description
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 150px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1">
                    <div class="col-12 text-justify text-grey">
                      {{ editedItem.transport_description }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-markup-table>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card flat bordered class="bg-white">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Travel Details
              </q-bar>
              <div class="q-pa-md" style="padding-top: 10px">
                <q-table :data="travel_item_partner_rows" :columns="travel_item_partner_columns"
                  :pagination.sync="pagination" dense row-key="sno" :filter="filter" :selected.sync="selected"
                  separator="cell" :hide-header="mode === 'grid'" :grid="mode === 'grid'">
                  <template v-slot:body-cell-action="props">
                    <q-td :props="props">
                      <q-btn color="green" @click="editTravelPartner(props.row)" label="Edit" size="sm">
                        <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                      </q-btn>
                    </q-td>
                  </template>
                  <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                      <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                        showDocumenttravel(
                          props.row.vehicle_image,
                          'Vehicle Image'
                        )
                      " />
                    </q-td>
                  </template>
                </q-table>
              </div>
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

                <q-btn flat round dense :icon="mode === 'grid' ? 'list' : 'grid_on'" @click="
                  mode = mode === 'grid' ? 'list' : 'grid';
                separator = mode === 'grid' ? 'none' : 'horizontal';
                " v-if="!props.inFullscreen">
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>{{ mode === "grid" ? "List" : "Grid" }}
                  </q-tooltip>
                </q-btn>

                <q-btn flat round dense color="primary" icon="archive" @click="exportTable">
                  <q-tooltip :disable="$q.platform.is.mobile" v-close-popup>CSV Export
                  </q-tooltip>
                </q-btn>
              </template>
            </q-card>
          </div>
        </div>
      </q-layout>
    </q-dialog>

    <!-- ADD RESTAURANT DETAILS (Rani)-->

    <q-dialog v-model="medicalRestaurantDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form ref="eqpRestaurantFormBasic" class="q-gutter-xs">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">
                MH Equipment Restaurant Details
              </div>
              <q-space />
              <q-btn dark flat icon="close" color="white" @click="closeRestaurantDialog">
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Basic Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="EqpRestaurantDetails.name_of_kitchen" label="Name Of Kitchen *"
                    hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="EqpRestaurantDetails.type_of_kitchen" label="Kitchen Type*"
                    hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>

                  <q-input dense outlined style="width: 250px" v-model="EqpRestaurantDetails.fssai_no"
                    label="FSSAI Licence" mask="##############" label-color="black"
                    :rules="[required('FSSAI Licence No.')]" v-bind:readonly="this.onclickValue == 'edit'" />
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    v-model="upload_fssai" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    hide-bottom-space @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Fssai Document" :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>

                  <q-input dense outlined v-model="EqpRestaurantDetails.restaurant_description" lazy-rules
                    style="width:100%" label-color="black" type="textarea" :rules="[required('Description')]" autogrow
                    hide-bottom-space placeholder="Description *">
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Special Offers</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-select dense options-dense outlined use-input hide-selected style="width: 200px" fill-input
                      :options="offerOptions" v-model="EqpRestaurantDetails.select_offer" label="Select Offer*"
                      label-color="black" :rules="[required('Property Type')]">
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-sale" color="secondary" /> </template></q-select>
                    <q-input dense outlined v-model="EqpRestaurantDetails.enter_amount" label="Enter Amount *"
                      :rules="[required('Enter Amount')]" lazy-rules style="width: 180px" label-color="black"
                      hide-bottom-space v-if="this.EqpRestaurantDetails.select_offer == 'Amount'">
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="EqpRestaurantDetails.special_offer" label="Special Offer *"
                      :rules="[number, specialMOfferValue('Special Offer', 100)]" lazy-rules mask="###"
                      style="width: 250px" label-color="black" hide-bottom-space
                      v-if="this.EqpRestaurantDetails.select_offer == 'Percentage'">
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="EqpRestaurantDetails.date_from" label="Date From" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="EqpRestaurantDetails.date_from" minimal mask="DD/MM/YYYY" @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="EqpRestaurantDetails.date_to" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                            <q-date v-model="EqpRestaurantDetails.date_to" minimal mask="DD/MM/YYYY" @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Address Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined hide-bottom-space v-model="EqpRestaurantDetails.building_no"
                    label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined v-model="EqpRestaurantDetails.street" label="Street/Colony Name*" lazy-rules
                    label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined v-model="EqpRestaurantDetails.land_mark" label="Landmark" label-color="black"
                    hide-bottom-space><template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" />
                    </template></q-input>
                  <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                    option-value="state_id" option-label="state_name" v-model="EqpRestaurantDetails.state" @input="
                      loadAllCities(EqpRestaurantDetails.state);
                    emptyCities();
                    " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                  <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                    option-label="city" fill-input options-dense input-debounce="0" v-model="EqpRestaurantDetails.city"
                    label="City *" label-color="black" hide-bottom-space :rules="[required('City')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                  <q-input dense outlined lazy-rules mask="######" v-model="EqpRestaurantDetails.pin_code"
                    label="Pincode *" label-color="black" hide-bottom-space :rules="[required('Pincode'), pinNumber()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-input>
                  <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                    v-model="EqpRestaurantDetails.country" label="Country" label-color="black"
                    :rules="[required('Country')]"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Contact Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="EqpRestaurantDetails.restaurant_email" label="Email *" lazy-rules
                    hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="EqpRestaurantDetails.restaurant_phone" label="Phone *" lazy-rules
                    mask="##########" style="width: 250px" label-color="black" hide-bottom-space
                    :rules="[required('Phone no'), phone()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="EqpRestaurantDetails.Name_Of_Contact_Person"
                    label="Name of Contact Person *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Location Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="EqpRestaurantDetails.restaurant_latitude" label="Latitude *"
                    lazy-rules style="width: 200px" label-color="black" hide-bottom-space
                    :rules="[required('Latitude'), number()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-latitude" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="EqpRestaurantDetails.restaurant_longitude" label="Longitude *"
                    lazy-rules style="width: 200px" :rules="[required('Longitude'), number()]" label-color="black"
                    hide-bottom-space>
                    <template v-slot:prepend>
                      <q-icon name="mdi-longitude" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Timings</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input outlined label="Opening Time *" dense v-model="EqpRestaurantDetails.opening_time"
                    :rules="[required('Check In Time')]" @click="$refs.qOpeningTime.show()">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy ref="qOpeningTime" cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="EqpRestaurantDetails.opening_time" mask="hh:mm A">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-input outlined label="Closing Time *" dense v-model="EqpRestaurantDetails.closing_time"
                    :rules="[required('Check Out Time')]" @click="$refs.qClosingTime.show()">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy ref="qClosingTime" cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="EqpRestaurantDetails.closing_time" mask="hh:mm A">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Photos / Images</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    v-model="upload_Image" type="file" accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*"
                    hide-bottom-space @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Restaurant Front Image 1" :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    hide-bottom-space v-model="upload_Image1" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Restaurant Side Image 2" :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    hide-bottom-space v-model="upload_Image2" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Restaurant Reception" :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
              </q-card-actions>
              <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
              </div>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Submit" @click="OnEqpRestaurantSubmit"></q-btn>
            </div>
          </q-card>
        </q-form>
      </q-layout>
    </q-dialog>

    <!-- EDIT RESTAURANT DETAILS -->
    <q-dialog v-model="eqpRestaurantEditDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form ref="editRestaurantForm" class="q-gutter-xs">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">
                MH Accommodation Restaurant Details
              </div>
              <q-space />
              <q-btn dark flat icon="close" color="white" @click="closeRestaurantEditDialog">
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Basic Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="editEqpRestaurant.name_of_kitchen" label="Name Of Kitchen *"
                    hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="editEqpRestaurant.type_of_kitchen" label="Kitchen Type*"
                    hide-bottom-space style="width: 250px" label-color="black" :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>

                  <q-input dense outlined style="width: 250px" v-model="editEqpRestaurant.fssai_no"
                    label="FSSAI Licence" mask="##############" label-color="black"
                    :rules="[required('FSSAI Licence No.')]" v-bind:readonly="this.onclickValue == 'edit'" />
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled readonly
                    clearable v-model="upload_fssai_1" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Fssai Document" :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>

                  <q-input dense outlined v-model="editEqpRestaurant.date_from" clearable label="Date From"
                    label-color="black" clear-icon="close" minimal @click="$refs.qDateProxy.show()"
                    style="width: 200px">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="editEqpRestaurant.date_from" mask="DD/MM/YYYY" @input="closeDialog">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>

                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
                        <q-card flat class="q-pa-md">
                <q-bar>
                  <div class="text-bold text-black">Special Offers</div>
                </q-bar>
                <q-card-actions>
                  <div class="row items-start q-gutter-md">
                    <q-select dense options-dense outlined use-input hide-selected style="width: 200px" fill-input
                      :options="offerOptions" v-model="editEqpRestaurant.select_offer" label="Select Offer*"
                      label-color="black" :rules="[required('Property Type')]">
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">
                            No results
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:prepend>
                        <q-icon name="mdi-sale" color="secondary" /> </template></q-select>
                    <q-input dense outlined v-model="editEqpRestaurant.enter_amount" label="Enter Amount *"
                      :rules="[required('Enter Amount')]" lazy-rules style="width: 180px" label-color="black"
                      hide-bottom-space v-if="this.editEqpRestaurant.select_offer == 'Amount'">
                      <template v-slot:prepend>
                        <q-icon name="mdi-currency-inr" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editEqpRestaurant.special_offer" label="Special Offer *"
                      :rules="[number, specialMOfferValue('Special Offer', 100)]" lazy-rules mask="###"
                      style="width: 250px" label-color="black" hide-bottom-space
                      v-if="this.editEqpRestaurant.select_offer == 'Percentage'">
                      <template v-slot:prepend>
                        <q-icon name="mdi-percent-outline" color="secondary" />
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editEqpRestaurant.date_from" label="Date From" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="editEqpRestaurant.date_from" minimal mask="DD/MM/YYYY" @input="closeDialog">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                    <q-input dense outlined v-model="editEqpRestaurant.date_to" label="Date To" label-color="black"
                      clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                            <q-date v-model="editEqpRestaurant.date_to" minimal mask="DD/MM/YYYY" @input="closeDialog1">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-actions>
              </q-card>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Address Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined hide-bottom-space v-model="editEqpRestaurant.building_no"
                    label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined v-model="editEqpRestaurant.street" label="Street/Colony Name*" lazy-rules
                    label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined v-model="editEqpRestaurant.land_mark" label="Landmark" label-color="black"
                    hide-bottom-space><template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" />
                    </template></q-input>
                    <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                      option-value="state_id" option-label="state_name" v-model="editEqpRestaurant.state" @input="
  loadAllCities(editEqpRestaurant.state);
emptyCities();
                      " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" /> </template></q-select>
                    <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                      option-label="city" fill-input options-dense input-debounce="0" v-model="editEqpRestaurant.city"
                      label="City *" label-color="black" hide-bottom-space :rules="[required('City')]"><template
                        v-slot:prepend>
                        <q-icon name="mdi-map-marker" color="secondary" /> </template></q-select>
                  <q-input dense outlined lazy-rules mask="######" v-model="editEqpRestaurant.pin_code"
                    label="Pincode *" label-color="black" hide-bottom-space :rules="[required('Pincode'), pinNumber()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-input>
                  <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                    v-model="editEqpRestaurant.country" label="Country" label-color="black"
                    :rules="[required('Country')]"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Contact Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="editEqpRestaurant.restaurant_email" label="Email *" lazy-rules
                    hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="editEqpRestaurant.restaurant_phone" label="Phone *" lazy-rules
                    mask="##########" style="width: 250px" label-color="black" hide-bottom-space
                    :rules="[required('Phone no'), phone()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="editEqpRestaurant.Name_Of_Contact_Person"
                    label="Name of Contact Person *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Location Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="editEqpRestaurant.restaurant_latitude" label="Latitude *" lazy-rules
                    style="width: 200px" label-color="black" hide-bottom-space
                    :rules="[required('Latitude'), number()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-latitude" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="editEqpRestaurant.restaurant_longitude" label="Longitude *"
                    lazy-rules style="width: 200px" :rules="[required('Longitude'), number()]" label-color="black"
                    hide-bottom-space>
                    <template v-slot:prepend>
                      <q-icon name="mdi-longitude" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Timings</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input outlined label="Opening Time *" dense v-model="editEqpRestaurant.opening_time"
                    :rules="[required('Check In Time')]">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="editEqpRestaurant.opening_time" mask="hh:mm A">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-input outlined label="Closing Time *" dense v-model="editEqpRestaurant.closing_time"
                    :rules="[required('Check Out Time')]">
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="editEqpRestaurant.closing_time" mask="hh:mm A">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Photos / Images</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled readonly
                    clearable v-model="upload_Image" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Kitchen Front Image 1" :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled readonly
                    clearable hide-bottom-space v-model="upload_Image1" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Kitchen Side Image 2" :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled readonly
                    clearable hide-bottom-space v-model="upload_Image2" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      (val) => {
                        files = val;
                      }
                    " hint="Upload Kitchen Reception" :rules="[(val) => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
              </q-card-actions>
              <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">Max File size is 2MB & Image format is <b> .JPG, .JPEG, .PNG </b>.</div>
              </div>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Update" @click="updateEqpRestaurant"></q-btn>
            </div>
          </q-card>
        </q-form>
      </q-layout>
    </q-dialog>

    <!-- GET RESTAURANT DETAILS (Rani)-->

    <q-dialog v-model="eqpRestaurantDataDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-bar class="bg-primary text-white">
            <q-icon name="feed"></q-icon>
            <div class="text-h6">
              View of Property Details:
              {{ EqpRestaurantEditedItem.name_of_kitchen }}
            </div>
            <q-space />
            <q-chip dense clickable color="secondary" text-color="white" icon="add" class="text-weight-medium"
              @click="openFoodPropertyDialog()">
              Add Menu
            </q-chip>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
        </q-header>
        <div class="row q-col-gutter-sm q-py-sm" style="padding-top: 35px">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs text-black">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Basic Details
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <div class="col-5 text-left text-black">
                      Lead Partner
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.food_partner_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Sub Partner
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.food_partner_sub_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Kitchen Type
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.type_of_kitchen }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Name Of Kitchen
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.name_of_kitchen }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Phone</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.restaurant_phone }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Email</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.restaurant_email }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-home-circle" color="black" size="1.5em" />
                Address Details
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <div class="col-5 text-left">House No</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.building_no }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Street</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.street }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Landmark</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.land_mark }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Country</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.country }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">State</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.state_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">City</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.city_name }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left">Pincode</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.pin_code }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">Latitude</div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.restaurant_latitude }}
                    </div>
                    <q-separator />
                    <div class="col-5 text-left text-black">
                      Longitude
                    </div>
                    <div class="col-7 text-left text-grey">
                      : {{ EqpRestaurantEditedItem.restaurant_longitude }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-file" color="black" size="1.5em" />
                Documents
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 300px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1
                          ">
                    <tbody>
                      <tr>
                        <td class="text-left" width="280px">
                          Restaurant Image 1
                        </td>
                        <td>
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showRestaurantDocument(
                              EqpRestaurantEditedItem.upload_image,
                              'restaurant Image1'
                            )
                          " />
                        </td>
                      </tr>
                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                      <tr>
                        <td class="text-left" width="280px">
                          Restaurant Image2
                        </td>
                        <td>
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showRestaurantDocument(
                              EqpRestaurantEditedItem.upload_image1,
                              'restaurant Image2'
                            )
                          " />
                        </td>
                      </tr>
                      <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px" />
                      <tr>
                        <td class="text-left" width="280px">
                          Restaurant Image3
                        </td>
                        <td>
                          <q-btn class="text-bold" label="view" color="secondary" size="sm" icon-right="mdi-eye" @click="
                            showRestaurantDocument(
                              EqpRestaurantEditedItem.upload_image2,
                              'Property Image3'
                            )
                          " />
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-markup-table class="q-ma-xs">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="mdi-home" color="black" size="1.5em" />
                Restaurant Description
              </q-bar>
              <q-card-section class="q-pa-none">
                <div style="height: 150px">
                  <div class="
                            row
                            text-black text-bold
                            q-ma-xs q-pa-md
                            text-body1">
                    <div class="col-12 text-justify text-grey">
                      {{ EqpRestaurantEditedItem.restaurant_description }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-markup-table>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-py-sm q-pa-md" style="padding-top: 0px">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-card flat bordered class="bg-white">
              <q-bar flat class="ma-02 text-bold" style="max-height: 20vh">
                <q-icon name="manage_accounts" color="black" size="1.5em" />
                Food Details
              </q-bar>
              <div class="q-pa-md" style="padding-top: 10px">
                <q-table :data="food_Details_rows" :columns="food_Details_columns" :pagination.sync="pagination" dense
                  separator="cell" :grid="mode === 'grid'" :filter="filter" :selected.sync="selected" color="green">
                  <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                      <q-btn class="text-bold" color="primary" size="sm" icon-right="mdi-eye" @click="
                        showDocumentfood(props.row.food_image, 'Food Image')
                      " />
                    </q-td>
                  </template>
                  <template v-slot:body-cell-action="props">
                    <q-td :props="props">
                      <q-btn color="green" @click="editFoodPartner(props.row)" label="Edit" size="sm">
                        <q-tooltip :disable="$q.platform.is.mobile">Edit</q-tooltip>
                      </q-btn>
                    </q-td>
                  </template>
                </q-table>
              </div>
            </q-card>
          </div>
          <div>
                      </div>
          <q-dialog v-model="small" transition-show="slide-up" transition-hide="slide-down" :maximized="maximizedToggle"
            persistent>
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-header class="bg-primary">
                <q-bar class="bg-primary text-white">
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
                  <iframe :src="url" class="wrapper" width="100%" height="600px" frameborder="0"></iframe>
                </div>
              </q-card>
            </q-layout>
          </q-dialog>
        </div>
      </q-layout>
    </q-dialog>

    <!-- Transport Details View End -->
    <!-- Transport Edit Dialog Start -->
    <q-dialog v-model="transportEditDialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
      transition-hide="slide-down">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-form ref="transportEditDialog" class="q-gutter-xs">
          <q-card>
            <q-bar class="bg-primary">
              <div class="text-h6 text-white">
                MH Transport Details
              </div>
              <q-space />
              <q-btn dark flat icon="close" color="white" v-close-popup>
                <q-tooltip class="bg-white text-primary">close</q-tooltip>
              </q-btn>
            </q-bar>
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Basic Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="transporteditedItem.transport_company_name"
                    label="Transport Company Name *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transporteditedItem.special_offer" label="Special Offer *" :rules="[
                    number(),
                    specialMOfferValue('Special Offer', 100)
                  ]" lazy-rules mask="###" style="width: 180px" label-color="black" hide-bottom-space>
                    <template v-slot:prepend>
                      <q-icon name="mdi-percent-outline" color="secondary" />
                    </template>
                  </q-input>

                  <q-input dense outlined v-model="transporteditedItem.from_date" label="Date From" label-color="black"
                    clear-icon="close" minimal @click="$refs.qDateProxy.show()" style="width: 200px">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="transporteditedItem.from_date" minimal mask="DD/MM/YYYY"
                            @input="closeDialog">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transporteditedItem.to_date" label="Date To" label-color="black"
                    clear-icon="close" minimal @click="$refs.qDateProxy1.show()" style="width: 200px">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                          <q-date v-model="transporteditedItem.to_date" minimal mask="DD/MM/YYYY" @input="closeDialog1">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transporteditedItem.transport_description" lazy-rules
                    style="width:100%" label-color="black" type="textarea" :rules="[required('Description')]" autogrow
                    hide-bottom-space placeholder="Description *">
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Address Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined hide-bottom-space v-model="transporteditedItem.building_no"
                    label="House/Flat No *" lazy-rules label-color="black" :rules="[required('House')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-home-city" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined v-model="transporteditedItem.street" label="Street/Colony Name*" lazy-rules
                    label-color="black" hide-bottom-space :rules="[required('Street/Colony')]"><template v-slot:prepend>
                      <q-icon name="mdi-highway" color="secondary" />
                    </template></q-input>
                  <q-input dense outlined v-model="transporteditedItem.land_mark" label="Landmark" label-color="black"
                    hide-bottom-space><template v-slot:prepend>
                      <q-icon name="mdi-map-marker-circle" color="secondary" />
                    </template></q-input>
                  <q-select dense options-dense outlined use-input hide-selected fill-input :options="stateOptions"
                    @filter="filterFnStates"
                    option-value="state_id" option-label="state_name" v-model="transporteditedItem.state" @input="
                      loadAllCities(transporteditedItem.state);
                    emptyCities();
                    " label="State *" hide-bottom-space label-color="black" :rules="[required('State')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                  <q-select dense outlined use-input hide-selected :options="cityOptions"
                    @filter="filterFnCities" option-value="city_id"
                    option-label="city" fill-input options-dense input-debounce="0" v-model="transporteditedItem.city"
                    label="City *" label-color="black" hide-bottom-space :rules="[required('City')]"><template
                      v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                  <q-input dense outlined lazy-rules mask="######" v-model="transporteditedItem.pin_code"
                    label="Pincode *" label-color="black" hide-bottom-space :rules="[required('Pincode'), pinNumber()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-input>
                  <q-select dense options-dense outlined use-input hide-selected fill-input :options="countriesArr"
                    v-model="transporteditedItem.country" label="Country" label-color="black"
                    :rules="[required('Country')]"><template v-slot:prepend>
                      <q-icon name="mdi-map-marker" color="secondary" />
                    </template></q-select>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Contact Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="transporteditedItem.transport_email_id" label="Email *" lazy-rules
                    hide-bottom-space style="width: 250px" :rules="[required('Email'), email()]" label-color="black">
                    <template v-slot:prepend>
                      <q-icon name="mdi-email" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transporteditedItem.transport_phone" label="Phone *" lazy-rules
                    mask="##########" style="width: 250px" label-color="black" hide-bottom-space
                    :rules="[required('Phone no'), phone()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transporteditedItem.Name_Of_Contact_Person"
                    label="Name of Contact Person *" hide-bottom-space style="width: 250px" label-color="black"
                    :rules="[required('Name')]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-account" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />
            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Location Details</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-input dense outlined v-model="transporteditedItem.transport_latitude" label="Latitude *" lazy-rules
                    style="width: 200px" label-color="black" hide-bottom-space
                    :rules="[required('Latitude'), number()]">
                    <template v-slot:prepend>
                      <q-icon name="mdi-latitude" color="secondary" />
                    </template>
                  </q-input>
                  <q-input dense outlined v-model="transporteditedItem.transport_longitude" label="Longitude *"
                    lazy-rules style="width: 200px" :rules="[required('Longitude'), number()]" label-color="black"
                    hide-bottom-space>
                    <template v-slot:prepend>
                      <q-icon name="mdi-longitude" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </q-card-actions>
            </q-card>
            <q-separator />

            <q-card flat class="q-pa-md">
              <q-bar>
                <div class="text-bold text-black">Photos / Images</div>
              </q-bar>
              <q-card-actions>
                <div class="row items-start q-gutter-md">
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    v-model="transporteditedItem.uploadImage1" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" hide-bottom-space @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Vehicle Front Image " :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                  <q-file color="lime-11" bg-color="teal" style="width: 240px" class="hint-bold" dense filled clearable
                    hide-bottom-space v-model="transporteditedItem.uploadImage2" type="file"
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .PDF, .pdf/*" @update:model-value="
                      val => {
                        files = val;
                      }
                    " hint="Upload Vehicle Back Image " :rules="[val => val || 'Please select file']"
                    :filter="checkFileSize" @rejected="onRejected">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" color="white" />
                    </template>
                  </q-file>
                </div>
              </q-card-actions>
              <div class="bg-grey-11 col-12 row q-pa-xs q-mt-md">
                <div class="text-bold row q-ml-md">Note:</div>
                <div class="row col-12 q-ml-md">
                  1- Day Time <b> 7:01AM To 9:00PM </b>.
                </div>
                <div class="row col-12 q-ml-md">
                  1- Night Time <b> 9:01PM To 7:00AM </b>.
                </div>
              </div>
            </q-card>
            <div class="row q-pa-md justify-end">
              <q-btn color="secondary" label="Update" @click="onMedicalTransportUpdatingDetail"></q-btn>
            </div>
          </q-card>
        </q-form>
      </q-layout>
    </q-dialog>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>
        <b style="margin-right:15px"> User Name: {{ userDetails.user_name }}</b>
        <q-chip clickable color="secondary" text-color="white" icon="add" @click="OpenAddDialog()"
          class="text-weight-bold">
          Add Partner Profile
        </q-chip>

        <q-btn flat round dense icon="search">
          <q-popup-edit v-model="label2" :cover="false" :offset="[0, 10]" v-slot="scope">
            <q-input color="secondary" v-model="filter" dense autofocus counter @keyup.enter="scope.set">
              <template v-slot:prepend>
                <q-icon name="search" color="secondary" />
              </template>
            </q-input>
          </q-popup-edit>
        </q-btn>

        <q-btn flat round dense icon="more_vert" />
      </q-toolbar>
    </q-page-sticky>
    <!-- </q-page-container>  -->
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import validations from "../../helpers/validations";
import moment from "moment";
import filepaths from "../../helpers/filepath";
import { exportFile } from "quasar";
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
const equipmentRegistrationMaster = () => {
  return {
    property: "",
    agent_name: "",
    gst_registration:"",
    phone: "",
    fax: "",
    email_id: "",
    name: "",
    partner_sub_name: "",
    alternate_no: "",
    prevcity: "",
    prevstate: "",
    hotel_registration_no: "",
    hotel_owner: "",
    cancellation_policy: "",
    display_order: "",
    video_link: "",
    is_default: "",
    facilities: "",
    preferences: "",
    description: "",
    building_no: "",
    street: "",
    land_mark: "",
    country: "",
    state: "",
    state1: "",
    city1: "",
    pin_code: "",
    latitude: "",
    longitude: "",
    file_upload: "",
    pin_code: "",
    pan: "",
    aadhar: "",
    gstin: "",
    fssai_no: "",
    partner_id: "",
    partner_sub_id: "",
    partner_name: "",
    sub_partner_name: "",
    partner_phone: "",
    property_name: "",
    bankAccountNo: "",
    bankName: "",
    branchName: "",
    ifsc: "",
    accept: false,
    pan_card_file: [],
    addhaar_no: [],
    gst_tin: [],
    mh_agreement: [],
    mb_certificate: [],
    property_tax: [],
    fire_safety: [],
    cancelled_cheque: [],
    equipment_id: "",
    equipment_image: [],
    amenitiesArr: [],
    propertyAmenitiesArr: [],
    food_image: [],
    partner_id: "",
    vehicle_image: "",
    transport_sub_name: "",


  };
};
// const equipmentForm = () => {
//   return {
//     equipment_id: "",
//     equipment_sub_id: "",
//     equipment_sub_name: "",
//     agent_name: "",
//     price: "",
//     item_name: "",
//     units: "",
//   };
// };
const travelLocRegistration = () => {
  return {
    agent_name: "",
    transport_sub_name: "",
    // vehicle_type: "",
    city: "",
    vehicle_name: "",
    no_of_seaters: "",
    day_price: "",
    night_price: "",
    units: "",
    description: "",
    // special_offer:"",
    vehicle_image: ""
  };
};
export default {
  data() {
    return {
    moment:moment,
      ...validations,
      ...filepaths,
      title: "My Equipment",
      step: 1,
      label2: "",
      selected: [],
      data: [],
      details: false,
      url: "",
      yes: false,
      no: false,
      othercity: false,
      otherstate: false,
      indiastate: false,
      indiacity: false,
      subPropertyView: false,
      equipmentLocationForm: false,
      equipmentDetailsForm: false,
      addFoodDetailsDialog: false,
      addTravelDetails: false,
      maximizedToggle: true,
      PropertyPartnerDialog: false,
      roomPropertyDataDialog: false,
      roomsDataDialog: false,
      otheramenitiesinput: false,
      propertyPartnerEditDialog: false,
      roomsEditPropertyDialog: false,
      addRoomsDialog: false,
      transportDialog: false,
      transportViewDialog: false,
      transportEditDialog: false,
      addMedicalStore: false,
      editMedStoresData:false,
      viewMedStoresData: false,
      medicalRestaurantDialog: false,
      eqpRestaurantDataDialog: false,
      eqpRestaurantEditDialog: false,
      otherfoodtype: ['Veg', 'Non-Veg'],
      offerOptions: ["Amount", "Percentage"],
      onclickValue: "",
      dialogTitle: "",
      editedIndex: -1,
      editedMedStoresObj: {
        account_id: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
        partner_sub_name: "",
        medical_store_id: "",
        medical_store_name: "",
        description: "",
        phone: "",
        email_id: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "",
        state_id: "",
        state_name: "",
        city_id: "",
        city_name: "",
        pin_code: "",
        latitude: "",
        longitude: "",
        medical_store_image1: "",
        medical_store_image2: "",
        medical_store_image3: ""
      },
      roomsEditedItem: {
        partner_id: "",
        partner_sub_id: "",
        property_txn_id: "",
      },
      editedItem: {
        gst_registration:"",
        equipment_id: "",
        partner_id: "",
        partner_name: "",
        partner_phone: "",
        partner_sub_name: "",
        equipment_sub_id: "",
        agent_name: "",
        equipment_sub_name: "",
        partner_sub_id: "",
        email_id: "",
        phone: "",
        account_id: "",
        location: "",
        city: "",
        property_type: "",
        city_id: "",
        address: "",
        price: "",
        medical_store: "",
        status: "",
        partner_status: "",
        agent_id: "",
        agent_sub_id: "",
        agent_sub_name: "",
        gstin: "",
        fssai_no: "",
        foodPartner_sub_name: "",
        sub_Name: "",
        transport_sub_name: "",
        items_available_from: "",
        items_available_to: "",
        name_of_kitchen: "",
        type_of_kitchen: "",
      },
      roomPropertyEditedItem: {
        partner_id: "",
        partner_sub_id: "",
      },
      medicalStoreObj: {
        account_id: "",
        partner_id: "",
        partner_sub_id: "",
        medical_store_name: "",
        description: "",
        special_offer: "",
        date_from: "",
        date_to: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        state: "",
        city: "",
        pin_code: "",
        country: "",
        email_id: "",
        phone: "",
        name_Of_Contact_Person: "",
        latitude: "",
        longitude: "",
        opening_time: "",
        closing_time: "",
      },
      editmedicalStoreObj: {
        account_id: "",
        equipment_id: "",
        equipment_sub_id: "",
        agent_name: "",
        equipment_sub_name: "",
        medical_store_name: "",
        description: "",
        special_offer: "",
        date_from: "",
        date_to: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        state_name: "",
        city_name: "",
        pin_code: "",
        country: "",
        email_id: "",
        phone: "",
        name_Of_Contact_Person: "",
        latitude: "",
        longitude: "",
        opening_time: "",
        closing_time: ""
      },
      editedPropertyPartnerData: {
        txn_id: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
        partner_sub_name: "",
        property_name: "",
        sub_property_name: "",
        property_phone: "",
        property_email: "",
        property_latitude: "",
        property_longitude: "",
        facilities: {},
        icon_image: [],
        // amenities: "",
        property_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "",
        state: "",
        city: "",
        pin_code: "",
        checkIn_time: "",
        checkOut_time: "",
        Name_Of_Contact_Person: "",
      },
      editedPropertyRoomsData: {
        property_specialOffer: "",
        txn_id: "",
        property_txn_id: "",
        partner_id: "",
        partner_sub_id: "",
        sub_property_name: "",
        property_name: "",
        room_category: "",
        no_of_avail_rooms: "",
        room_numbers: [],
        roomNumber: "",
        room_type: "",
        date_from: "",
        date_to: "",
        date_from_up: "",
        date_to_up: "",
        facilities: {},
        icon_image: [],
        price: "",
        other_amenities: "",
        units: "Per Day",

        special_offer: "",
        select_offer: "",
        enter_amount: "",

      },
      addFoodDetails: {
        agent_id: "",
        agent_sub_id: "",
        agent_name: "",
        account_id: "",
        user_id: "",
        partner_id: "",
        partner_sub_id: "",
        foodPartner_name: "",
        foodPartner_sub_name: "",
        sub_partner_name: "",
        name: "",
        partner_name: "",
        partner_sub_name: "",
        sub_Name: "",
        items_available_from: "",
        items_available_to: "",
        price: "",
        agent_sub_name: "",
        foodName: "",
        foodData: "",
        s_no: "",
        units: "",
        foodItemsList: [],
        food_image: "",
        food_type_name: "",
        food_type_id: "",
        food_items_name: "",
        food_items_id: "",
        item_txn_id: "",
        kitchen_txn_id: "",
        kitchen_type: "",
        kitchen_name: "",
        address: "",
        city: "",
        city_id: "",
        location: "",
        gstin: "",
        fssai_no: "",
        partner_status: "",
        equipment_sub_name: "",
        foodtype: "",
      },
      EqpRestaurantDetails: {
        partner_status: "",
        account_id: "",
        restaurant_name: "",
        name_of_kitchen: "",
        type_of_kitchen: "",
        restaurant_phone: "",
        restaurant_email: "",
        Name_Of_Contact_Person: "",
        restaurant_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        restaurant_latitude: "",
        restaurant_longitude: "",
        agent_id: "",
        agent_sub_id: "",
        food_partner_name: "",
        food_partner_sub_name: "",
        opening_time: "",
        closing_time: "",
        date_from: "",
        date_to: "",
        food_partner_phone: "",
        special_offer: "",
        select_offer: "",
        enter_amount: "",

      },
      editEqpRestaurant: {
        txn_id: "",
        account_id: "",
        restaurant_name: "",
        name_of_kitchen: "",
        type_of_kitchen: "",
        restaurant_phone: "",
        restaurant_email: "",
        Name_Of_Contact_Person: "",
        restaurant_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        restaurant_latitude: "",
        restaurant_longitude: "",
        agent_id: "",
        agent_sub_id: "",
        food_partner_name: "",
        food_partner_phone: "",
        food_partner_sub_name: "",
        opening_time: "",
        closing_time: "",
        state_name: "",
        city_name: "",
        agent_name: "",
        agent_sub_name: "",
        date_from: "",
        date_to: "",
        special_offer: "",
        select_offer: "",
        enter_amount: "",
      },
      EqpRestaurantEditedItem: {
        txn_id: "",
        account_id: "",
        restaurant_name: "",
        name_of_kitchen: "",
        type_of_kitchen: "",
        restaurant_phone: "",
        restaurant_email: "",
        Name_Of_Contact_Person: "",
        restaurant_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        restaurant_latitude: "",
        restaurant_longitude: "",
        agent_id: "",
        agent_sub_id: "",
        food_partner_name: "",
        food_partner_phone: "",
        food_partner_sub_name: "",
        opening_time: "",
        closing_time: "",
        state_name: "",
        city_name: "",
        agent_name: "",
        agent_sub_name: "",
        date_from: "",
        date_to: "",
      },
      addTravelLocation: {
        account_id: "",
        user_id: "",
        agent_id: "",
        transport_sub_id: "",
        agent_name: "",
        transport_sub_name: "",
        // vehicle_type: "",
        city: "",
        city_id: "",
        vehicle_name: "",
        no_of_seaters: "",
        day_price: "",
        night_price: "",
        units: "",
        description: "",
        // special_offer:"",
        vehicle_image: "",
        txn_id: "",
        travel_status: "",
        address: " ",
        location: " ",
        equipment_sub_name: "",
      },
      propertyRoomDetails: {
        property_specialOffer: "",
        txn_id: "",
        property_txn_id: "",
        partner_id: "",
        partner_sub_id: "",
        partner_name: "",
        sub_partner_name: "",
        amenity_arr: "",
        amenityIcon: "",
        other_amenities: "",
        no_of_avail_rooms: "",
        room_numbers: [],
        room_type: "",
        property_name: "",
        account_id: "",
        date_to: "",
        date_from: "",
        sub_property_name: "",
        room_category: "",
        facilities: null,
        price: "",
        units: "Per Day",
        special_offer: "",
        select_offer: "",
        enter_amount: "",
        status: ""

      },
      roomTypeArr: ["Single Share", "Double Share", "Triple Share"],
      room_categoryArr: ["Basic", "Standard", "Supreme"],
      unitsArr: ["Per Day"],

      propertyPartnerForm: {
        account_id: "",
        name: "",
        prev_name: "",
        prev_sub_name: "",
        company_name: "",
        individual_name: "",
        phone: "",
        fax: "",
        email_id: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        countriesArr: ["India"],
        state: "",
        pin_code: "",
        pan: "",
        aadhar: "",
        gstin: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        accept: false,
        propertyType: "",
        partner_id: "",
        partner_name: "",
        partner_sub_id: "",
      },

      countriesArr: ["India"],
      propertyPartnerDetails: {
        agent_name: "",
        equipment_sub_name: "",
        sub_partner_name: "",
        phone: "",
        email_id: "",
        account_id: "",
        property_name: "",
        sub_property_name: "",
        property_phone: "",
        property_email_id: "",
        property_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        property_latitude: "",
        property_longitude: "",
        partner_id: "",
        partner_sub_id: "",
        partner_name: "",
        partner_phone: "",
        partner_sub_name: "",
        amenities: null,
        checkIn_time: "",
        checkOut_time: "",
        equipment_sub_id: "",
        // partner_id:"",
        // partner_sub_id:"",
        // partner_name:"",
        // sub_partner_name:"",
        // partner_phone:"",
        // property_name:"",

      },
      uploadImage: [],
      uploadImage1: [],
      uploadImage2: [],
      uploadImage3: [],
      uploadImage4: [],
      food_image: [],
      vehicle_image: [],
      uploadRoomImage1: [],
      uploadRoomImage2: [],
      uploadRoomImage3: [],
      uploadRoomImage4: [],
      uploadRoomImage5: [],
      upload_Image: [],
      upload_Image1: [],
      upload_Image2: [],
      upload_fssai: [],
      upload_fssai_1: [],

      editEditedItem: {
        equipment_id: "",
        equipment_sub_id: "",
        agent_name: "",
        equipment_sub_name: "",
        price: "",
        units: "",
        user_id: "",
        location: "",
        city: "",
        city_id: "",
        address: "",
        medical_store: ""
        // special_offer:"",
      },

      center: { lat: 20.7937, lng: 78.3629 },
      zoom: 4,
      pan_card_file: [],
      addhaar_no: [],
      gst_tin: [],
      mh_agreement: [],
      // partner_pic: [],
      mb_certificate: [],
      property_tax: [],
      fire_safety: [],
      cancelled_cheque: [],

      equipmentItemDetails: {
        account_id: "",
        equipment_id: "",
        equipment_sub_id: "",
        equipment_sub_name: "",
        agent_name: "",
        price: "",
        item_name: "",
        units: "",
        location: "",
        city: "",
        city_id: "",
        address: "",
        medical_store: "",
        partner_status: "",
        purchased_type: "",
        // special_offer:"",
      },
      editMedicalDetails: {
        equipment_id: "",
        equipment_sub_id: "",
        equipment_sub_name: "",
        agent_name: "",
        price: "",
        item_name: "",
        units: "",
        txn_id: "",
        user_id: "",
        account_id: "",
        location: "",
        city: "",
        city_id: "",
        address: "",
        medical_store: "",
        equipment_image: "",
        unit_id: "",
        item_id: "",
        partner_status: "",
        purchased_type: "",
        //  special_offer:"",
      },
      // unitOptions: [],
      equipment_image: [],

      equipmentPartnerForm: {
        account_id: "",
        equipment_sub_id: "",
        user_id: "",
        gst_registration:"",

        name: "",
        partner_sub_name: "",
        // agent_name: "",
        // company_name: "",
        // individual_name: "",
        phone: "",
        fax: "",
        alternate_no: "",
        email_id: "",
        agent_commission: "",
        description: "",
        building_no: "",
        street: "",
        land_mark: "",
        country: "",
        state: "",
        city: "",
        prevstate: "",
        prevcity: "",
        pin_code: "",
        // countriesArr: ["India"],

        // propertyType: "",
        pan: "",
        aadhar: "",
        gstin: "",
        bankAccountNo: "",
        bankName: "",
        branchName: "",
        ifsc: "",
        accept: false,
        equipment_id: "",
        pan_card_upt: "",
        addhaar_no_upt: "",
        mh_agreement_upt: "",
        mb_certificate_upt: "",
        gst_tin_upt: "",
        property_tax_upt: "",
        fire_safety_upt: "",
        cancelled_cheque_upt: "",

      },
      transportDetails: {
        account_id: "",
        agent_id: "",
        transport_sub_id: "",
        transport_sub_name: "",
        agent_name: "",
        transport_company_name: "",
        special_offer: "",
        transport_phone: "",
        transport_email_id: "",
        Name_Of_Contact_Person: "",
        transport_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        transport_latitude: "",
        transport_longitude: ""
        // upload_image1: "",
        // upload_image2: "",
      },
      transporteditedItem: {
        account_id: "",
        agent_id: "",
        transport_sub_id: "",
        transport_sub_name: "",
        agent_name: "",
        transport_company_name: "",
        special_offer: "",
        from_date: "",
        to_date: "",
        transport_phone: "",
        transport_email_id: "",
        Name_Of_Contact_Person: "",
        transport_description: "",
        building_no: "",
        street: "",
        land_mark: "",
        city: "",
        state: "",
        pin_code: "",
        transport_latitude: "",
        transport_longitude: "",
        upload_image1: "",
        upload_image2: ""
      },
      pagination: {
        rowsPerPage: 500
      },
      mode: "list",
      filter: "",
      addDataDialog: false,
      equipmentUpdatingDetails: false,
      statesList: [],
      Countries: ["India"],
      small: false,
      stateOption: [],
      cityOptions: [],
      gstOptions: ["Registered", "Unregistered"],
      medicalPurchasingType: ["Market Price", "Rent (Per Day)"],
      vehiclePrice: ["Per/Km", "Per/Trip"],
      vehicleseats: ["4 Seater", "5 Seater", "6 Seater", "7 Seater"],
      recordsStatus: [],
      visible: false,
      showPanDoc: false,
      countriescheck: [
        { name: "Afghanistan", code: "+93 AF" },
        { name: "Albania", code: "+355 AL" },
        { name: "Algeria", code: "+213 DZ" },
        { name: "American Samoa", code: "+1 684 AS" },
        { name: "AndorrA", code: "+376 AD" },
        { name: "Angola", code: "+244 AO" },
        { name: "Anguilla", code: "+1 264 AI" },
        { name: "Antigua and Barbuda", code: "+1 268 AG" },
        { name: "Argentina", code: "+54 AR" },
        { name: "Armenia", code: "+374 AM" },
        { name: "Aruba", code: "+297 AW" },
        { name: "Australia", code: "+61 AU" },
        { name: "Austria", code: "+43 AT" },
        { name: "Azerbaijan", code: "+994 AZ" },
        { name: "Bahamas", code: "+1 242 BS" },
        { name: "Bahrain", code: "+973 BH" },
        { name: "Bangladesh", code: "+880 BD" },
        { name: "Barbados", code: "+1 246 BB" },
        { name: "Belarus", code: "+375 BY" },
        { name: "Belgium", code: "+32 BE" },
        { name: "Belize", code: "+501 BZ" },
        { name: "Benin", code: "+229 BJ" },
        { name: "Bermuda", code: "+1 441 BM" },
        { name: "Bhutan", code: "+975 BT" },
        { name: "Bolivia", code: "+591 BO" },
        { name: "Bosnia and Herzegovina", code: "+387 BA" },
        { name: "Botswana", code: "+267 BW" },
        { name: "Brazil", code: "+55 BR" },
        { name: "British Indian Ocean Territory", code: "+246 IO" },
        { name: "Bulgaria", code: "+359 BG" },
        { name: "Burkina Faso", code: "+226 BF" },
        { name: "Burundi", code: "+257 BI" },
        { name: "Cambodia", code: "+855 KH" },
        { name: "Cameroon", code: "+237 CM" },
        { name: "Canada", code: "+1 CA" },
        { name: "Cape Verde", code: "+238 CV" },
        { name: "Cayman Islands", code: "+345 KY" },
        { name: "Central African Republic", code: "+236 CF" },
        { name: "Chad", code: "+235 TD" },
        { name: "Chile", code: "+56 CL" },
        { name: "China", code: "+86 CN" },
        { name: "Christmas Island", code: "+61 CX" },
        { name: "Cocos (Keeling) Islands", code: "+61 CC" },
        { name: "Colombia", code: "+57 CO" },
        { name: "Comoros", code: "+269 KM" },
        { name: "Congo", code: "+242 CG" },
        { name: "Congo, The Democratic Republic of the", code: "+243 CD" },
        { name: "Cook Islands", code: "+682 CK" },
        { name: "Costa Rica", code: "+506 CR" },
        { name: "Croatia", code: "+385 HR" },
        { name: "Cuba", code: "+53 CU" },
        { name: "Cyprus", code: "+537 CY" },
        { name: "Czech Republic", code: "+420 CZ" },
        { name: "Denmark", code: "+45 DK" },
        { name: "Djibouti", code: "+253 DJ" },
        { name: "Dominica", code: "+1 767 DM" },
        { name: "Dominican Republic", code: "+1 809 DO" },
        { name: "Ecuador", code: "+593 EC" },
        { name: "Egypt", code: "+20 EG" },
        { name: "El Salvador", code: "+503 SV" },
        { name: "Equatorial Guinea", code: "+240 GQ" },
        { name: "Eritrea", code: "+291 ER" },
        { name: "Estonia", code: "+372 EE" },
        { name: "Ethiopia", code: "+251 ET" },
        { name: "Falkland Islands (Malvinas)", code: "+500 FK" },
        { name: "Faroe Islands", code: "+298 FO" },
        { name: "Fiji", code: "+679 FJ" },
        { name: "Finland", code: "+358 FI" },
        { name: "France", code: "+33 FR" },
        { name: "French Guiana", code: "+594 GF" },
        { name: "French Polynesia", code: "+689 PF" },
        { name: "Gabon", code: "+241 GA" },
        { name: "Gambia", code: "+220 GM" },
        { name: "Georgia", code: "+995 GE" },
        { name: "Germany", code: "+49 DE" },
        { name: "Ghana", code: "+233 GH" },
        { name: "Gibraltar", code: "+350 GI" },
        { name: "Greece", code: "+30 GR" },
        { name: "Greenland", code: "+299 GL" },
        { name: "Grenada", code: "+1 473 GD" },
        { name: "Guadeloupe", code: "+590 GP" },
        { name: "Guam", code: "+1 671 GU" },
        { name: "Guatemala", code: "+502 GT" },
        { name: "Guinea", code: "+224 GN" },
        { name: "Guinea-Bissau", code: "+245 GW" },
        { name: "Guyana", code: "+595 GY" },
        { name: "Haiti", code: "+509 HT" },
        { name: "Honduras", code: "+504 HN" },
        { name: "Hong Kong", code: "+852 HK" },
        { name: "Hungary", code: "+36 HU" },
        { name: "Iceland", code: "+354 IS" },
        { name: "India", code: "+91 IND" },
        { name: "Indonesia", code: "+62 ID" },
        { name: "Iran, Islamic Republic Of", code: "+98 IR" },
        { name: "Iraq", code: "+964 IQ" },
        { name: "Ireland", code: "+353 IE" },
        { name: "Israel", code: "+972 IL" },
        { name: "Italy", code: "+39 IT" },
        { name: "Jamaica", code: "+1 876 JM" },
        { name: "Japan", code: "+81 JP" },
        { name: "Jordan", code: "+962 JO" },
        { name: "Kazakhstan", code: "+7 7 KZ" },
        { name: "Kenya", code: "+254 KE" },
        { name: "Kiribati", code: "+686 KI" },
        { name: "Kuwait", code: "+965 KW" },
        { name: "Kyrgyzstan", code: "+996 KG" },
        { name: "Lao People'S Democratic Republic", code: "+856 LA" },
        { name: "Latvia", code: "+371 LV" },
        { name: "Lebanon", code: "+961 LB" },
        { name: "Lesotho", code: "+266 LS" },
        { name: "Liberia", code: "+231 LR" },
        { name: "Libyan Arab Jamahiriya", code: "+218 LY" },
        { name: "Liechtenstein", code: "+423 LI" },
        { name: "Lithuania", code: "+370 LT" },
        { name: "Luxembourg", code: "+352 LU" },
        { name: "Macao", code: "+853 MO" },
        { name: "Macedonia, The Former Yugoslav Republic of", code: "+389 MK" },
        { name: "Madagascar", code: "+261 MG" },
        { name: "Malawi", code: "+265 MW" },
        { name: "Malaysia", code: "+60 MY" },
        { name: "Maldives", code: "+960 MV" },
        { name: "Mali", code: "+223 ML" },
        { name: "Malta", code: "+356 MT" },
        { name: "Marshall Islands", code: "+692 MH" },
        { name: "Martinique", code: "+596 MQ" },
        { name: "Mauritania", code: "+222 MR" },
        { name: "Mauritius", code: "+230 MU" },
        { name: "Mayotte", code: "+262 YT" },
        { name: "Mexico", code: "+52 MX" },
        { name: "Micronesia, Federated States of", code: "+691 FM" },
        { name: "Moldova, Republic of", code: "+373 MD" },
        { name: "Monaco", code: "+377 MC" },
        { name: "Mongolia", code: "+976 MN" },
        { name: "Montserrat", code: "+1664 MS" },
        { name: "Morocco", code: "+212 MA" },
        { name: "Myanmar", code: "+95 MM" },
        { name: "Namibia", code: "+264 NA" },
        { name: "Nauru", code: "+674 NR" },
        { name: "Nepal", code: "+977 NP" },
        { name: "Netherlands", code: "+31 NL" },
        { name: "Netherlands Antilles", code: "+599 AN" },
        { name: "New Caledonia", code: "+687 NC" },
        { name: "New Zealand", code: "+64 NZ" },
        { name: "Nicaragua", code: "+505 NI" },
        { name: "Niger", code: "+227 NE" },
        { name: "Nigeria", code: "+234 NG" },
        { name: "Niue", code: "+683 NU" },
        { name: "Norfolk Island", code: "+672 NF" },
        { name: "Northern Mariana Islands", code: "+1 670 MP" },
        { name: "Norway", code: "+47 NO" },
        { name: "Oman", code: "+968 OM" },
        { name: "Pakistan", code: "+92 PK" },
        { name: "Palau", code: "+680 PW" },
        { name: "Palestinian Territory, Occupied", code: "+970 PS" },
        { name: "Panama", code: "+507 PA" },
        { name: "Papua New Guinea", code: "+675 PG" },
        { name: "Paraguay", code: "+595 PY" },
        { name: "Peru", code: "+51 PE" },
        { name: "Philippines", code: "+63 PH" },
        { name: "Poland", code: "+48 PL" },
        { name: "Portugal", code: "+351 PT" },
        { name: "Puerto Rico", code: "+1 787 PR" },
        { name: "Qatar", code: "+974 QA" },
        { name: "Reunion", code: "+262 RE" },
        { name: "Romania", code: "+40 RO" },
        { name: "Russian Federation", code: "+7 RU" },
        { name: "RWANDA", code: "+250 RW" },
        { name: "Samoa", code: "+685 WS" },
        { name: "San Marino", code: "+378 SM" },
        { name: "Saudi Arabia", code: "+966 SA" },
        { name: "Senegal", code: "+221 SN" },
        { name: "Serbia and Montenegro", code: "+381 CS" },
        { name: "Seychelles", code: "+248 SC" },
        { name: "Sierra Leone", code: "+232 SL" },
        { name: "Singapore", code: "+65 SG" },
        { name: "Slovakia", code: "+421 SK" },
        { name: "Slovenia", code: "+386 SI" },
        { name: "Solomon Islands", code: "+677 SB" },
        { name: "South Africa", code: "+27 ZA" },
        {
          name: "South Georgia and the South Sandwich Islands",
          code: "+500 GS"
        },
        { name: "Spain", code: "+34 ES" },
        { name: "Sri Lanka", code: "+94 LK" },
        { name: "Sudan", code: "+249 SD" },
        { name: "Suriname", code: "+597 SR" },
        { name: "Swaziland", code: "+268 SZ" },
        { name: "Sweden", code: "+46 SE" },
        { name: "Switzerland", code: "+41 CH" },
        { name: "Syrian Arab Republic", code: "+963 SY" },
        { name: "Taiwan, Province of China", code: "+886 TW" },
        { name: "Tajikistan", code: "+992 TJ" },
        { name: "Tanzania, United Republic of", code: "+255 TZ" },
        { name: "Thailand", code: "+66 TH" },
        { name: "Timor-Leste", code: "+670 TL" },
        { name: "Togo", code: "+228 TG" },
        { name: "Tokelau", code: "+690 TK" },
        { name: "Tonga", code: "+676 TO" },
        { name: "Trinidad and Tobago", code: "+1 868 TT" },
        { name: "Tunisia", code: "+216 TN" },
        { name: "Turkey", code: "+90 TR" },
        { name: "Turkmenistan", code: "+993 TM" },
        { name: "Turks and Caicos Islands", code: "+1 649 TC" },
        { name: "Tuvalu", code: "+688 TV" },
        { name: "Uganda", code: "+256 UG" },
        { name: "Ukraine", code: "+380 UA" },
        { name: "United Arab Emirates", code: "+971 AE" },
        { name: "United Kingdom", code: "+44 GB" },
        { name: "United States", code: "+1 US" },
        { name: "Uruguay", code: "+598 UY" },
        { name: "Uzbekistan", code: "+998 UZ" },
        { name: "Vanuatu", code: "+678 VU" },
        { name: "Venezuela", code: "+58 VE" },
        { name: "Viet Nam", code: "+84 VN" },
        { name: "Virgin Islands, British", code: "+1 284 VG" },
        { name: "Virgin Islands, U.S.", code: "+1 340 VI" },
        { name: "Wallis and Futuna", code: "+681 WF" },
        { name: "Yemen", code: "+967 YE" },
        { name: "Zambia", code: "+260 ZM" },
        { name: "Zimbabwe", code: "+263 ZW" }
      ],
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
      property: state => state.dropdown.property_arr,

      equipment_partner_registration_columns: state =>
        state.partners.equipment_partner_registration_columns,
      equipment_partner_registration_status_count: state =>
        state.partners.equipment_partner_registration_status_count,
      equipment_registration_rows: state =>
        state.partners.equipment_registration_rows,
      equipment_registration_columns: state =>
        state.partners.equipment_registration_columns,
      medical_stores_rows: state => state.partners.medical_stores_rows,
      equipment_item_rows: state => state.partners.equipment_item_rows,
      medical_stores_columns: state => state.partners.medical_stores_columns,
      equipment_item_columns: state => state.partners.equipment_item_columns,
      states: state => state.master.states_arr,
      cities: state => state.master.city_arr,
      medicalItemName: state => state.dropdown.medical_item_name,
      medicalUnitsName: state => state.dropdown.medical_units_name,
      propertyAmenitiesArr: (state) => state.dropdown.property_amenities_arr,
      foodThaliArr: state => state.dropdown.food_item_types_arr,
      foodListArr: state => state.dropdown.food_list_arr,
      property_partner_data_columns: (state) => state.partners.property_partner_data_columns,
      rooms_property_data_columns: (state) => state.partners.rooms_property_data_columns,
      amenitiesArr: (state) => state.dropdown.amenities_arr,
      food_Details_rows: state => state.partners.food_Details_rows,
      food_Details_columns: state => state.partners.food_Details_columns,
      travel_item_partner_rows: (state) => state.partners.travel_item_partner_rows,
      travel_item_partner_columns: (state) => state.partners.travel_item_partner_columns,
      medicaltransport_item_columns: (state) => state.partners.medicaltransport_item_columns,
      eqp_restaurant_data_columns: (state) => state.partners.eqp_restaurant_data_columns,
      acc_food_Details_columns: (state) => state.partners.acc_food_Details_columns,
      propertyOptions: (state) => state.master.properties_arr,
      medicalStoreItems: state => state.dropdown.equipment_medical_store

    }),
    ...mapGetters("partners", ["equipment_partner_registration_status_count"]),
    ...mapGetters("partners", ["equipment_partner_registration_rows"]),
    ...mapGetters("partners", ["property_partner_data_rows"]),
    ...mapGetters("partners", ["rooms_property_data_rows"]),
    ...mapGetters("partners", ["medicaltransport_item_rows"]),
    ...mapGetters("partners", ["eqp_restaurant_data_rows"]),
    ...mapGetters("partners", ["acc_food_Details_rows"]),
  },
  mounted() {
    this.$store.dispatch("dropdown/loadAllProperty");
    this.$store.dispatch("master/loadPropertiesDropdown");
    this.$store.dispatch("partners/getEquipmentRegistrationStatusCount");
    this.$store.dispatch("partners/getEquipmentRegistrationMaster");
    this.$store.dispatch("master/loadAllStates");
    this.$store.dispatch("dropdown/loadAllEquipmentItems");
    this.$store.dispatch("dropdown/loadPropertyFacilities");
    this.$store.dispatch("dropdown/loadAllFoodTypes");
    this.$store.dispatch("dropdown/loadAllFacilities");
    this.$store.dispatch("dropdown/loadAllMedicalStores");

    // this.$store.dispatch("partners/getEquipmentLocationDetails");
    // this.recordsStatus = this.statusCounts();
  },
  meta() {
    return {
      title: this.title
    };
  },
  methods: {
    // addDetailForm() {
    //   if (this.$refs.equipmentLocationForm.validate()) {
    //     var eqpObj = {
    //       s_no: this.equipmentRows.length + 1,
    //       equipment_id: this.editedItem.equipment_id,
    //       equipment_sub_id: this.editedItem.equipment_sub_id,
    //       agent_name: this.equipmentItemDetails.agent_name,
    //       equipment_sub_name: this.equipmentItemDetails.equipment_sub_name,
    //       item_name: this.equipmentItemDetails.item_name,
    //       price: this.equipmentItemDetails.price,
    //       units: this.equipmentItemDetails.units,
    //       equipment_image: this.equipment_image
    //         ? this.equipment_image.name
    //         : "",
    //     };
    //     this.equipmentRows.push(eqpObj);
    //     this.equipmentItemDetails = equipmentForm();
    //     this.emptyValue();
    //     // this.$refs.equipmentLocationForm.reset();
    //     this.resetFiles();
    //     this.$q.notify({
    //       color: "positive",
    //       message: "Equipment Details Added",
    //     });
    //   } else {
    //     this.$q.notify({
    //       color: "negative",
    //       message: "Please Fill the form properly",
    //     });
    //   }
    // },
    deleteItem(item) {
      const index = this.equipmentRows.indexOf(item);
      this.equipmentRows.splice(index, 1);
      this.$q.notify("Equipment Details deleted!");
    },
    reset() {
      this.equipmentLocationForm.resetValidation();
      this.equipmentUpdatingDetails.resetValidation();
    },
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    emptycities() {
      this.equipmentPartnerForm.city = "";
      this.equipmentItemDetails.city = "";
    },
    ...mapActions("dropdown", ["loadAllEquipmentItems"]),
    ...mapActions("dropdown", ["loadAllMedicalUnits"]),
    ...mapActions("partners", ["equipmentRegistrationMasterAdd"]),
    ...mapActions("partners", ["createEquipmentLocation"]),
    ...mapActions("partners", ["getEquipmentLocationDetails"]),
    ...mapActions("partners", ["equipmentRegistrationMasterExistingUser"]),
    ...mapActions("partners", ["getEquipmentRegistrationMaster"]),
    ...mapActions("partners", ["getEquipmentRegistrationBasedOnStatus"]),
    ...mapActions("master", ["loadAllCities"]),
    ...mapActions("partners", ["updateEquipmentDetails"]),
    ...mapActions("partners", ["updatingEquipmentDetailsForm"]),
    ...mapActions("partners", ["propertyPartnerDetailsSaving"]),
    ...mapActions("dropdown", ["loadAllFoodItems"]),
    ...mapActions("partners", ["addFoodDetailsSaving"]),
    ...mapActions("partners", ["loadFoodDetails"]),
    ...mapActions("partners", ["addTravelDetailsSaving"]),
    ...mapActions("partners", ["getRoomsPropertyDetails"]),
    ...mapActions("partners", ["getPropertyPartnerDetails"]),
    ...mapActions("partners", ["propertyRoomDetailsSaving"]),
    ...mapActions("partners", ["updatemedicalPropertyPartnerDetails"]),
    ...mapActions("partners", ["updateRoomsPropertyDetails"]),
    ...mapActions("partners", ["loadTravelDetails"]),
    ...mapActions("partners", ["travelPartnerUpdating"]),
    ...mapActions("partners", ["addFoodDetailsUpdating"]),
    ...mapActions("partners", ["medicaltransportDetailsSaving"]),
    ...mapActions("partners", ["getMedicalTransportDetailsSaving"]),
    ...mapActions("partners", ["updatingMedicalTransportDetails"]),
    ...mapActions("partners", ["saveMedicalStoresData"]),
    ...mapActions("partners", ["getMedicalStoresData"]),
    ...mapActions("partners", ["EqpRestaurantSaving"]),
    ...mapActions("partners", ["getEqpRestaurantDetails"]),
    ...mapActions("partners", ["updateEqpRestaurantDetails"]),
    ...mapActions("partners", ["updatingMedicalStoreDetails"]),
    ...mapActions("dropdown", ["loadAllMedicalStores"]),

    onSubmit(val) {
      if (val == "submit") {
        this.$refs.agentFormSubmit.validate().then(success => {
          if (success) {
            if (this.editedItem.equipment_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true
                })
                .onOk(() => {
            //      console.log("form1",this.equipmentPartnerForm)
                  this.equipmentPartnerForm.equipment_id = this.editedItem.equipment_id;
                  this.equipmentPartnerForm.agent_name = this.editedItem.agent_name;
                  this.equipmentPartnerForm.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("property_tax", this.property_tax);
                  formData.append("fire_safety", this.fire_safety);
                  formData.append("cancelled_cheque", this.cancelled_cheque);
                  formData.append(
                    "equipmentDetails",
                    JSON.stringify(this.equipmentPartnerForm)
                  );

                  this.equipmentRegistrationMasterAdd(formData);
              //    console.log("6526441564151",formData)
                  this.resetFiles();
                  this.equipmentPartnerForm = equipmentRegistrationMaster();

                  this.$refs.agentFormSubmit.resetValidation();
                  this.addDataDialog = false;
                  this.subPropertyView = false;
                  this.details = false;
                  this.step = 1;
                  // this.$store.dispatch(
                  //   "partners/getEquipmentRegistrationStatusCount"
                  // );
                  // this.getEquipmentRegistrationMaster();
                })
                .onCancel(() => {
                  this.resetFiles();
                  this.addDataDialog = true;
                });
            } else {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true
                })
                .onOk(() => {
               //   console.log("form2",this.equipmentPartnerForm)
                  this.equipmentPartnerForm.equipment_id = "";
                  this.equipmentPartnerForm.equipment_sub_name = this.equipmentPartnerForm.agent_name;
                  this.equipmentPartnerForm.user_id = this.userDetails.account_id;
              //    console.log("23345",this.equipmentPartnerForm)
                  const formData = new FormData();
                  formData.append("pancard", this.pan_card_file);
                  formData.append("addhaar", this.addhaar_no);
                  formData.append("gst_tin", this.gst_tin);
                  formData.append("mh_agreement", this.mh_agreement);
                  // formData.append("partner_pic", this.partner_pic);
                  formData.append("mb_certificate", this.mb_certificate);
                  formData.append("property_tax", this.property_tax);
                  formData.append("fire_safety", this.fire_safety);
                  formData.append("cancelled_cheque", this.cancelled_cheque);

                  formData.append(
                    "equipmentDetails",
                    JSON.stringify(this.equipmentPartnerForm)

                  );
                  this.equipmentRegistrationMasterAdd(formData);
                  this.resetFiles();
                  this.equipmentPartnerForm = equipmentRegistrationMaster();
                  // this.$refs.agentFormSubmit.resetValidation();
                  this.addDataDialog = false;
                  this.step = 1;
                  this.$store.dispatch(
                    "partners/getEquipmentRegistrationStatusCount"
                  );
                  this.getEquipmentRegistrationMaster();
                })
                .onCancel(() => {
                  this.resetFiles();
                  this.addDataDialog = true;
                });
            }
          }
        });
      } else if (val == "update") {
        this.$refs.agentFormSubmit.validate().then(success => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update the data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.equipmentPartnerForm.user_id = this.userDetails.account_id;
                this.updateEquipmentDetails(this.equipmentPartnerForm);
                this.equipmentPartnerForm = equipmentRegistrationMaster();
                // this.$refs.agentFormSubmit.resetValidation();
                this.addDataDialog = false;
                this.step = 1;
                this.subPropertyView = false;
                this.getEquipmentRegistrationMaster();
                this.getEquipmentRegistrationBasedOnStatus();
              })
              .onCancel(() => {
                // this.emptyValue();
                // this.resetFiles();
                // this.addDataDialog = true;
              });
          }
        });
      }
    },
    onPropertyUpdate() {
      this.$refs.editPropertyForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
             // console.log("updateproperty",this.editedPropertyPartnerData)
              this.updatemedicalPropertyPartnerDetails(this.editedPropertyPartnerData);
              this.propertyPartnerEditDialog = false;
            })
            .onCancel(() => {

              this.propertyPartnerEditDialog = true;
              this.resetFiles();
            });
        }
      });
    },
    onRoomsUpdate() {
      this.$refs.editRoomsForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
           //   console.log("rooms",this.editedPropertyRoomsData)
              this.editedPropertyRoomsData.date_from = this.editedPropertyRoomsData.date_from
                .split("/").reverse().join("-");
              this.editedPropertyRoomsData.date_to = this.editedPropertyRoomsData.date_to
                .split("/")
                .reverse()
                .join("-");
              this.updateRoomsPropertyDetails(this.editedPropertyRoomsData);
              this.roomsEditPropertyDialog = false;
              this.propertyDataDialog = false;
              this.details = false;
              this.getRoomsDetails();
            })
            .onCancel(() => {
              this.resetFiles();
              this.roomsEditPropertyDialog = true;
            });
        }
      });
    },
    onPropertyPartnerSubmit() {
      this.$refs.propertyFormBasic.validate().then((success) => {
        if (success) {
          if (this.propertyPartnerDetails.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
            //    console.log("saveproperty",this.propertyPartnerDetails)
                const formData = new FormData();
                formData.append("upload_image1", this.uploadImage);
                formData.append("upload_image2", this.uploadImage1);
                formData.append("upload_image3", this.uploadImage2);
                formData.append("upload_image4", this.uploadImage3);
                formData.append("upload_image5", this.uploadImage4);
                formData.append("property_details", JSON.stringify(this.propertyPartnerDetails));
                this.propertyPartnerDetailsSaving(formData);
                this.resetFiles();

                this.propertyPartnerForm = propertyRegistrationMaster();
                this.PropertyPartnerDialog = false;
                this.details = false;
                this.propertyPartnerDetails = {};
                this.step = 1;
                this.getPropertyPartnerDetails(this.editedItem);
              })
              .onCancel(() => {
                this.resetFiles();
                this.PropertyPartnerDialog = true;
              });
          }
        }
      });
    },
    showRoomsData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.roomsEditedItem = Object.assign({}, item);
      this.roomsEditedItem.partner_id = item.partner_id;
      this.roomsEditedItem.partner_sub_id = item.partner_sub_id;
      this.editedPropertyRoomsData.partner_id = item.partner_id;
      this.editedPropertyRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedPropertyRoomsData.property_txn_id = item.property_txn_id;
      this.roomsDataDialog = true;
      this.propertyDataDialog = true;
    },
    editRoomsData(item) {
    //  console.log("edited",item)
      this.editedIndex = this.data.indexOf(item);
      this.editedPropertyRoomsData = Object.assign({}, item);
      const amenity = [
        {
          amenity_name: item.facilities.split(","),
          icon_image: item.icon_image.split(",")
        }
      ];
      let roomNumbers = item.room_numbers.split(",");
      this.editedPropertyRoomsData.room_numbers = roomNumbers;

      this.editedPropertyRoomsData.txn_id = item.txn_id;
      this.editedPropertyRoomsData.partner_id = item.partner_id;
      this.editedPropertyRoomsData.partner_sub_id = item.partner_sub_id;
      this.editedPropertyRoomsData.sub_property_name = item.sub_property_name;
      this.editedPropertyRoomsData.property_name = item.property_name;
      this.editedPropertyRoomsData.room_category = item.PropertyRoomsDataroom_category;
      this.editedPropertyRoomsData.no_of_avail_rooms = item.no_of_avail_rooms;
      this.editedPropertyRoomsData.room_type = item.room_type;
      // this.editedPropertyRoomsData.property_specialOffer = item.property_specialOffer;
      //  this.editedPropertyRoomsData.select_offer = item.property_specialOffer;
      this.editedPropertyRoomsData.select_offer = item.select_offer;
      this.editedPropertyRoomsData.enter_amount = item.enter_amount;
      this.editedPropertyRoomsData.special_offer = item.property_specialOffer;
      // this.editedPropertyRoomsData.date_from = this.editedPropertyRoomsData.date_from;

      this.editedPropertyRoomsData.date_from =  moment(item.date_from).format("DD-MM-YYYY");
      this.editedPropertyRoomsData.date_to = moment(item.date_to).format("DD-MM-YYYY");
      this.editedPropertyRoomsData.date_from_up = this.editedPropertyRoomsData.date_from;
      this.editedPropertyRoomsData.date_to_up = this.editedPropertyRoomsData.date_to;
      this.editedPropertyRoomsData.facilities = amenity;
      this.editedPropertyRoomsData.price = item.price;
      this.editedPropertyRoomsData.other_amenities = item.other_amenities;

      this.editedPropertyRoomsData.units = item.units;
      this.uploadRoomImage1 = {
        name: item.room_image_1 ?? "",
      };
      this.uploadRoomImage2 = {
        name: item.room_image_2 ?? "",
      };
      this.uploadRoomImage3 = {
        name: item.room_image_3 ?? "",
      };
      this.uploadRoomImage4 = {
        name: item.room_image_4 ?? "",
      };
      this.uploadRoomImage5 = {
        name: item.room_image_5 ?? "",
      };
      this.roomsEditPropertyDialog = true;

    },
    onSubmitaddFoodDetails(val) {
      if (val == "submit") {
        this.$refs.addFoodDetailsDialog.validate().then(success => {
          if (success) {
            if (this.addFoodDetails.agent_id != "") {
              this.$q
                .dialog({
                  title: "Confirm",
                  message: "Do you want to Submit data ?",
                  cancel: true,
                  persistent: true
                })
                .onOk(() => {
                 // console.log("save",this.addFoodDetails)
                  this.addFoodDetails.user_id = this.userDetails.account_id;
                  const formData = new FormData();
                  formData.append("food_image", this.food_image);
                  formData.append(
                    "food_details",
                    JSON.stringify(this.addFoodDetails)
                  );
                  this.addFoodDetailsSaving(formData);
                  this.resetFiles();
                  this.emptyValue();
                  this.$refs.addFoodDetailsDialog.resetValidation();
                  this.addFoodDetailsDialog = false;

                  this.details = false;
                  this.loadFoodDetails(this.EqpRestaurantEditedItem);
                })
                .onCancel(() => {
                  this.resetFiles();
                  this.emptyValue();
                  this.addFoodDetailsDialog = true;
                });
            }
          }
        });
      } else if (val == "update") {
        this.$refs.addFoodDetailsDialog.validate().then(success => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.addFoodDetailsUpdating(this.addFoodDetails);
                this.$refs.addFoodDetailsDialog.resetValidation();
                this.addFoodDetailsDialog = false;

                this.details = false;
                this.loadFoodDetails(this.EqpRestaurantEditedItem);
              });
          }
        });
      }
    },
    updateEqpRestaurant() {
      this.$refs.editRestaurantForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Update data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
             // console.log("update",this.editEqpRestaurant)
              this.updateEqpRestaurantDetails(this.editEqpRestaurant);
              this.eqpRestaurantEditDialog = false;
            })
            .onCancel(() => {
              this.resetFiles();
              this.eqpRestaurantEditDialog = true;
            });
        }
      });
    },
    submitTravelLocData(val) {
      if (val == "submit") {
        this.$refs.addTravelDetails.validate().then((success) => {
          if (this.addTravelLocation.agent_id != "") {
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
                  this.addTravelLocation.user_id = this.userDetails.account_id;
                  formData.append("vehicle_image", this.vehicle_image);
                  formData.append(
                    "addTravelLocation",
                    JSON.stringify(this.addTravelLocation)
                  );
                  this.addTravelDetailsSaving(formData);
                  this.resetFiles();
                  this.emptyValue();
                  this.addTravelLocation = travelLocRegistration();
                  this.$refs.addTravelDetails.resetValidation();
                  this.addTravelDetails = false;
                  this.addTravelLocation = {};
                  this.loadTravelDetails(this.editedItem)
                  this.details = false;

                  // this.step = 1;
                })
                .onCancel(() => {
                  this.resetFiles();
                  this.emptyValue();
                  this.addTravelDetails = true;
                });
            }
          }
        });
      } else if (val == "update") {
        this.$refs.addTravelDetails.validate().then((success) => {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
                this.travelPartnerUpdating(this.addTravelLocation);
                this.addTravelLocation.user_id = this.userDetails.account_id;
                this.$refs.addTravelDetails.resetValidation();
                this.addTravelDetails = false;
                this.details = false;
                this.loadTravelDetails(this.editedItem)
                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                this.addTravelDetails = true;
              });
          }
        });
      }
    },
    submitMedicalStoreData() {
      this.$refs.addMedicalForm.validate().then(success => {
        if (success) {
          if (this.medicalStoreObj.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.medicalStoreObj.user_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("upload_image_1", this.uploadImage);
                formData.append("upload_image_2", this.uploadImage1);
                formData.append("upload_image_3", this.uploadImage2);
                formData.append(
                  "addMedStoresData",
                  JSON.stringify(this.medicalStoreObj)
                );
                this.saveMedicalStoresData(formData);
                this.resetFiles();
                this.addMedicalStore = false;
                this.details = false;
                this.medicalStoreObj = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.addMedicalStore = true;
              });
          }
        }
      });
    },
    onSubmitDetailForm() {
      this.$refs.equipmentLocationForm.validate().then(success => {
        if (this.equipmentItemDetails.equipment_id != "") {
          if (success) {
            // if (this.equipmentRows.length > 0) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.equipmentItemDetails.account_id = this.userDetails.account_id;
                const formData = new FormData();
                formData.append("equipment_image", this.equipment_image);
                formData.append(
                  "equipmentItemDetails",
                  JSON.stringify(this.equipmentItemDetails)
                );
                // formData.append(
                //   "equipmentRows",
                //   JSON.stringify(this.equipmentRows)
                // );
                this.createEquipmentLocation(formData);
                this.resetFiles();
                this.getEquipmentLocationDetails(this.editedMedStoresObj)
                this.$refs.equipmentLocationForm.resetValidation();
                this.subPropertyView = true;
                this.equipmentLocationForm = false;
                this.details = false;
                this.equipmentItemDetails = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.emptyValue();
                this.equipmentLocationForm = true;
              });
          }
        }
      });
    },
    onUpdatingEquipmentDetailForm() {
      this.$refs.editEquipmentDetails.validate().then(success => {
        if (success) {
          if (this.editMedicalDetails.equipment_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.updatingEquipmentDetailsForm(this.editMedicalDetails);
                this.getEquipmentLocationDetails(this.editedMedStoresObj)
                this.equipmentUpdatingDetails = false;
                this.addDataDialog = false;
                this.subPropertyView = true;
                this.equipmentLocationForm = false;
                this.details = false;
                this.equipmentItemDetails = {};
                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.editEquipmentDetails = true;
              });
          }
        }
      });
    },
    onRoomsSubmit() {
      this.$refs.roomsFormBasic.validate().then((success) => {
        if (success) {
          if (this.propertyRoomDetails.partner_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
             //  console.log("save",this.propertyRoomDetails)
                this.propertyRoomDetails.account_id = this.userDetails.account_id;
                this.propertyRoomDetails.date_from = this.propertyRoomDetails.date_from
                  .split("/")
                  .reverse()
                  .join("-");
                this.propertyRoomDetails.date_to = this.propertyRoomDetails.date_to
                  .split("/")
                  .reverse()
                  .join("-");
                const formData = new FormData();
                formData.append("upload_room_image1", this.uploadRoomImage1);
                formData.append("upload_room_image2", this.uploadRoomImage2);
                formData.append("upload_room_image3", this.uploadRoomImage3);
                formData.append("upload_room_image4", this.uploadRoomImage4);
                formData.append("upload_room_image5", this.uploadRoomImage5);
                formData.append("room_details", JSON.stringify(this.propertyRoomDetails));
                this.propertyRoomDetailsSaving(formData);
                this.resetFiles();
                this.addRoomsDialog = false;
                this.step = 1;
                this.propertyRoomDetails = {};
                this.propertyDataDialog = false;
                this.details = false;
              })
              .onCancel(() => {
                this.resetFiles();
                this.propertyDataDialog = true;
              });
          }
        }
      });
    },
    createValue(val, done) {
      this.showOk = false
      if (done) {
        done(val)
      }
    },
    doStuff(val) {
      this.showOk = true
      this.inputValue = val

    },
    doOtherStuff() {
      this.showOk = false
      this.$refs.myChipInput.add(this.inputValue)
      this.$refs.myChipInput.updateInputValue('')
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxy1.hide();
    },
    closeRestaurantDialog() {
      this.medicalRestaurantDialog = false;
    },
    closeRestaurantEditDialog() {
      this.eqpRestaurantEditDialog = false;
    },
    showMedicalStoreData(item) {
      this.editedMedStoresObj.account_id = item.account_id;
      this.editedMedStoresObj.txn_id = item.txn_id;
      this.editedMedStoresObj.partner_id = item.equipment_id;
      this.editedMedStoresObj.partner_name = item.agent_name;
      this.editedMedStoresObj.partner_sub_id = item.equipment_sub_id;
      this.editedMedStoresObj.partner_sub_name = item.equipment_sub_name;
      // this.editedMedStoresObj.medical_store_id = item.medical_store_id;
      this.editedMedStoresObj.medical_store_name = item.medical_store_name;
      this.editedMedStoresObj.description = item.description;
      this.editedMedStoresObj.phone = item.phone;
      this.editedMedStoresObj.email_id = item.email;
      this.editedMedStoresObj.building_no = item.building_no;
      this.editedMedStoresObj.street = item.street;
      this.editedMedStoresObj.land_mark = item.land_mark;
      this.editedMedStoresObj.country = item.country;
      this.editedMedStoresObj.state_id = item.state_id;
      this.editedMedStoresObj.state_name = item.state_name;
      this.editedMedStoresObj.city_id = item.city_id;
      this.editedMedStoresObj.city_name = item.city_name;
      this.editedMedStoresObj.pin_code = item.pin_code;
      this.editedMedStoresObj.latitude = item.latitude;
      this.editedMedStoresObj.longitude = item.longitude;
      this.editedMedStoresObj.medical_store_image1 = {
        name: item.upload_image1 ?? "",
      };
      this.editedMedStoresObj.medical_store_image2 = {
        name: item.upload_image2 ?? "",
      };
      this.editedMedStoresObj.medical_store_image3 = {
        name: item.upload_image3 ?? "",
      };
      // this.editedMedStoresObj.medical_store_image1 = item.upload_image1;
      // this.editedMedStoresObj.medical_store_image2 = item.upload_image2;
      // this.editedMedStoresObj.medical_store_image3 = item.upload_image3;
      this.getEquipmentLocationDetails(this.editedMedStoresObj);
      this.viewMedStoresData = true;
    },
    editMedicalStoreData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editmedicalStoreObj = Object.assign({}, item);
      this.editmedicalStoreObj.txn_id = item.txn_id;
      this.editmedicalStoreObj.equipment_id = item.equipment_id;
      this.editmedicalStoreObj.equipment_sub_id = item.equipment_sub_id;
      this.editmedicalStoreObj.account_id = item.account_id;
      this.editmedicalStoreObj.equipment_sub_name =
        item.equipment_sub_name;
      this.editmedicalStoreObj.agent_name = item.agent_name;
      this.editmedicalStoreObj.medical_store_name =
        item.medical_store_name;
      this.editmedicalStoreObj.special_offer = item.special_offer;
      this.editmedicalStoreObj.from_date = item.from_date;
      this.editmedicalStoreObj.to_date = item.to_date;
      this.editmedicalStoreObj.description = item.description;
      this.editmedicalStoreObj.phone = item.phone;
      this.editmedicalStoreObj.email = item.email;
      this.editmedicalStoreObj.name_of_contact_person =
        item.name_of_contact_person;
      this.editmedicalStoreObj.building_no = item.building_no;
      this.editmedicalStoreObj.street = item.street;
      this.editmedicalStoreObj.land_mark = item.land_mark;
      this.editmedicalStoreObj.city_name = item.city_name;
      this.editmedicalStoreObj.state_name = item.state_name;
      this.editmedicalStoreObj.pin_code = item.pin_code;
      this.editmedicalStoreObj.latitude = item.latitude;
      this.editmedicalStoreObj.longitude = item.longitude;
      this.editmedicalStoreObj.uploadImage1 = {
        name: item.upload_image1 ?? ""
      };
      this.editmedicalStoreObj.uploadImage2 = {
        name: item.upload_image2 ?? ""
      };
      this.editmedicalStoreObj.uploadImage3 = {
        name: item.upload_image3 ?? ""
      };
      this.editMedStoresData = true;
    },


    onMedicalStoreUpdatingDetail() {
      this.$refs.addMedicalForm.validate().then(success => {
        if (this.editmedicalStoreObj.agent_id != "") {
          if (success) {
            this.$q
              .dialog({

                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.updatingMedicalStoreDetails(
                  this.editmedicalStoreObj
                );
                this.editMedStoresData = false;

                this.details = false;

                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.editMedStoresData = true;
              });
          }
        }
      });
    },
    openMedicalStoreDialog(item) {
      this.medicalStoreObj.account_id = item.account_id;
      this.medicalStoreObj.equipment_id = item.equipment_id;
      this.medicalStoreObj.equipment_sub_id = item.equipment_sub_id;
      this.medicalStoreObj.agent_name = this.editedItem.agent_name;
      this.medicalStoreObj.equipment_sub_name = this.editedItem.equipment_sub_name;
      this.medicalStoreObj.phone = item.phone;
      this.medicalStoreObj.email_id = item.email_id;
      this.addMedicalStore = true;
    },
    editTravelPartner(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.onclickValue = "edit";
      this.addTravelLocation.account_id = item.account_id;
      this.addTravelLocation.txn_id = item.txn_id;
      this.addTravelLocation.agent_id = item.agent_id;
      this.addTravelLocation.transport_sub_id = item.transport_sub_id;
      this.editedItem.agent_name = item.travel_name;
      this.addTravelLocation.agent_name = this.editedItem.agent_name;
      this.editedItem.equipment_sub_name = item.transport_sub_name;
      this.addTravelLocation.equipment_sub_name =
        this.editedItem.equipment_sub_name;
      this.addTravelLocation.city = item.city;
      this.addTravelLocation.city_id = item.city_id;
      this.addTravelLocation.travel_status = item.travel_status;
      this.addTravelLocation.vehicle_name = item.vehicle_name;
      this.addTravelLocation.no_of_seaters = item.no_of_seaters;
      this.addTravelLocation.day_price = item.day_price;
      this.addTravelLocation.night_price = item.night_price;
      this.addTravelLocation.units = item.units;
      this.addTravelLocation.description = item.description;
      this.addTravelLocation.address = item.address;
      this.addTravelLocation.location = item.location;
      this.addTravelLocation.transport_sub_name = this.editedItem.equipment_sub_name;
      // this.travelLocation.special_offer = item.special_offer;
      this.addTravelLocation.vehicle_image = item.vehicle_image;
      this.vehicle_image = {
        name: item.vehicle_image ?? "",
      };
      this.addTravelDetails = true;
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.equipment_id = item.equipment_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.equipment_sub_name = item.equipment_sub_name;
      this.editEditedItem.equipment_id = item.equipment_id;
      this.editEditedItem.agent_name = item.agent_name;
      this.editEditedItem.equipment_sub_name = item.equipment_sub_name;
      this.editEditedItem.location = item.location;
      this.editEditedItem.address = item.address;
      this.editEditedItem.city = item.city;
      this.editEditedItem.city_id = item.city_id;
      this.editEditedItem.status = item.status;
      this.editEditedItem.medical_store = item.medical_store;
      this.editedItem.gstin = item.gstin;
      this.editedItem.fssai_no = item.fssai_no;
      this.equipmentRegistrationMasterExistingUser(item.equipment_id);
      this.subPropertyView = true;
    },
    viewPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.account_id = this.userDetails.account_id;
      this.editedItem.equipment_id = item.equipment_id;
      this.editedItem.equipment_sub_id = item.equipment_sub_id;
      this.editedItem.agent_name = item.agent_name;
      this.editedItem.equipment_sub_name = item.equipment_sub_name;
      this.editedItem.equipment_sub_name = item.agent_name;
      this.editedItem.agent_sub_id = item.agent_sub_id;
      this.editedItem.status = item.status;
      this.details = true;
      // this.getEquipmentLocationDetails(this.editedItem);
      this.getMedicalStoresData(this.editedItem);
      this.getPropertyPartnerDetails(this.editedItem);
      this.getMedicalTransportDetailsSaving(this.editedItem);
      this.getEqpRestaurantDetails(this.editedItem);
    },
    showPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.roomPropertyEditedItem = Object.assign({}, item);
      this.roomPropertyEditedItem.partner_id = item.partner_id;
      this.roomPropertyEditedItem.partner_sub_id = item.partner_sub_id;
      this.roomPropertyDataDialog = true;
      this.getRoomsPropertyDetails(this.roomPropertyEditedItem);
    },
    editPropertyData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedPropertyPartnerData = Object.assign({}, item);
      this.editedPropertyPartnerData.partner_id = item.partner_id;
      this.editedPropertyPartnerData.partner_sub_id = item.partner_sub_id;
      this.editedPropertyPartnerData.partner_name = item.partner_name;
      this.editedPropertyPartnerData.partner_sub_name = item.sub_partner_name;
      this.editedPropertyPartnerData.property_name = item.property_name;
      this.editedPropertyPartnerData.sub_property_name = item.sub_property_name;
      this.editedPropertyPartnerData.property_phone = item.property_phone;
      this.editedPropertyPartnerData.property_email = item.property_email;
      this.editedPropertyPartnerData.property_latitude = item.property_latitude;
      this.editedPropertyPartnerData.property_longitude = item.property_longitude;
      this.editedPropertyPartnerData.facilities= item.amenity_name;
      this.editedPropertyPartnerData.property_description = item.property_description;
      this.editedPropertyPartnerData.building_no = item.building_no;
      this.editedPropertyPartnerData.street = item.street;
      this.editedPropertyPartnerData.land_mark = item.land_mark;
      this.editedPropertyPartnerData.country = item.country;
      this.editedPropertyPartnerData.state = item.state_name;
      this.editedPropertyPartnerData.city = item.city_name;
      this.editedPropertyPartnerData.pin_code = item.pin_code;
      this.editedPropertyPartnerData.txn_id = item.txn_id;
      this.editedPropertyPartnerData.checkIn_time = item.checkIn_time;
      this.editedPropertyPartnerData.checkOut_time = item.checkOut_time;
      this.editedPropertyPartnerData.Name_Of_Contact_Person = item.Name_Of_Contact_Person;
      this.uploadImage = {
        name: item.upload_image ?? "",
      };

      this.uploadImage1 = {
        name: item.upload_image1 ?? "",
      };
      this.uploadImage2 = {
        name: item.upload_image2 ?? "",
      };
      this.uploadImage3 = {
        name: item.upload_image3 ?? "",
      };
      this.uploadImage4 = {
        name: item.upload_image4 ?? "",
      };
      this.propertyPartnerEditDialog = true;

    //  console.log("qqqqq",item)
    },

    editPropertyItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.step = 1;
      this.addDataDialog = true;
      this.onclickValue = "edit";
      this.equipmentPartnerForm.equipment_id = item.equipment_id;
      this.equipmentPartnerForm.equipment_sub_id = item.equipment_sub_id;
      this.equipmentPartnerForm.name = item.agent_name;
      this.equipmentPartnerForm.partner_sub_name = item.equipment_sub_name;
      // this.equipmentPartnerForm.agent_name = item.agent_name;
      // this.equipmentPartnerForm.equipment_sub_name = item.equipment_sub_name;
      // this.equipmentPartnerForm.company_name = item.company_name;
      // this.equipmentPartnerForm.individual_name = item.individual_name;
      this.equipmentPartnerForm.phone = item.phone;
      this.equipmentPartnerForm.fax = item.fax;
      this.equipmentPartnerForm.alternate_no = item.alternate_no;
      this.equipmentPartnerForm.email_id = item.email_id;
      this.equipmentPartnerForm.agent_commission = item.agent_commission;
      this.equipmentPartnerForm.description = item.description;
      this.equipmentPartnerForm.building_no = item.building_no;
      this.equipmentPartnerForm.street = item.street;
      this.equipmentPartnerForm.land_mark = item.land_mark;
      this.equipmentPartnerForm.country = item.country;
      this.equipmentPartnerForm.state = item.state_name;
      this.equipmentPartnerForm.state_id = item.state_id;
      this.equipmentPartnerForm.city = item.city;
      this.equipmentPartnerForm.prevstate = item.state;
      this.equipmentPartnerForm.prevcity = item.city;
      this.equipmentPartnerForm.city_id = item.city_id;
      this.equipmentPartnerForm.pin_code = item.pin_code;
      this.equipmentPartnerForm.pan = item.pan;
      this.equipmentPartnerForm.aadhar = item.aadhar;
      this.equipmentPartnerForm.gstin = item.gstin;
      this.equipmentPartnerForm.bankAccountNo = item.bankAccountNo;
      this.equipmentPartnerForm.bankName = item.bankName;
      this.equipmentPartnerForm.branchName = item.branchName;
      this.equipmentPartnerForm.ifsc = item.ifsc;
      //docs update
      this.equipmentPartnerForm.pan_card_upt = item.pan_card_file_loc;
      this.equipmentPartnerForm.addhaar_no_upt = item.addhaar_no_loc;
      this.equipmentPartnerForm.mh_agreement_upt = item.mh_agreement_loc;
      this.equipmentPartnerForm.mb_certificate_upt = item.mb_certificate_loc;
      this.equipmentPartnerForm.gst_tin_upt = item.gst_tin_loc;
      this.equipmentPartnerForm.property_tax_upt = item.property_tax_loc;
      this.equipmentPartnerForm.fire_safety_upt = item.fire_safety_loc;
      this.equipmentPartnerForm.cancelled_cheque_upt =
        item.cancelled_cheque_doc;

      this.pan_card_file = {
        name: item.pan_card_file_loc ?? ""
      };

      this.addhaar_no = {
        name: item.addhaar_no_loc ?? ""
      };

      this.mh_agreement = {
        name: item.mh_agreement_loc ?? ""
      };
      this.mb_certificate = {
        name: item.mb_certificate_loc ?? ""
      };
      this.gst_tin = {
        name: item.gst_tin_loc ?? ""
      };
      this.property_tax = {
        name: item.property_tax_loc ?? ""
      };
      this.fire_safety = {
        name: item.fire_safety_loc ?? ""
      };
      this.cancelled_cheque = {
        name: item.cancelled_cheque_doc ?? ""
      };
    },
    editOpenAddDialog() {
      // this.equipmentPartnerForm.country = "India";
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      this.addDataDialog = true;
    },
    OpenAddDialog() {
      (this.editedItem = {}), (this.editedItem.equipment_id = "");
      this.step = 1;
      this.onclickValue = "";
      this.resetFiles();
      this.addDataDialog = true;
      this.details = false;
    },
    editFoodPartner(item) {
      this.step = 1;
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  this.addDataDialog = true;
      this.addFoodDetailsDialog = true;
      this.onclickValue = "edit";
      this.addFoodDetails.account_id = item.account_id;
      this.addFoodDetails.item_txn_id = item.item_txn_id;
      this.addFoodDetails.agent_id = item.agent_id;
      this.addFoodDetails.agent_sub_id = item.agent_sub_id;
      this.addFoodDetails.partner_id = item.agent_id;
      this.addFoodDetails.partner_sub_id = item.agent_sub_id;
      this.addFoodDetails.foodPartner_name = item.foodPartner_name;
      this.addFoodDetails.foodPartner_sub_name = item.foodPartner_sub_name;
      this.addFoodDetails.address = item.address;
      this.addFoodDetails.city = item.city;
      this.addFoodDetails.location = item.location;
      this.addFoodDetails.partner_status = item.partner_status;
      this.addFoodDetails.city_id = item.city_id;
      this.addFoodDetails.gstin = item.gstin;
      this.addFoodDetails.fssai_no = item.fssai_no;
      this.addFoodDetails.kitchen_name = item.kitchen_name;
      this.addFoodDetails.kitchen_type = item.kitchen_type;
      this.addFoodDetails.foodName = item.food_items_name;
      this.addFoodDetails.foodtype = item.item_name;
      this.addFoodDetails.location = item.location;
      this.addFoodDetails.food_items_name
        = item.foodName;
      // this.AccFoodPartner.food_type_id = item.food_type_id;
      this.addFoodDetails.foodItemsList = item.foodName;
      this.addFoodDetails.units = item.units;
      this.addFoodDetails.price = item.price;
      this.addFoodDetails.items_available_from = item.items_available_to;
      this.addFoodDetails.items_available_to = item.items_available_to;
      // this.foodDetails.special_offer = item.special_offer;
      this.addFoodDetails.food_image = item.food_image;

      this.food_image = {
        name: item.food_image ?? ""
      };
    },
    openRoomsDialog() {
      this.propertyRoomDetails.partner_id = this.roomPropertyEditedItem.partner_id;
      this.propertyRoomDetails.partner_sub_id = this.roomPropertyEditedItem.partner_sub_id;
      this.propertyRoomDetails.partner_name = this.roomPropertyEditedItem.partner_name;
      this.propertyRoomDetails.sub_partner_name =
        this.roomPropertyEditedItem.sub_partner_name;
      this.propertyRoomDetails.property_name = this.roomPropertyEditedItem.property_name;
      this.propertyRoomDetails.sub_property_name =
        this.roomPropertyEditedItem.sub_property_name;
        this.propertyRoomDetails.property_specialOffer = this.roomPropertyEditedItem.property_specialOffer;
        this.propertyRoomDetails.special_offer = this.roomPropertyEditedItem.special_offer;
      this.propertyRoomDetails.property_txn_id = this.roomPropertyEditedItem.txn_id;
      // this.emptyRoomsValue();
      this.addRoomsDialog = true;
    },
    emptyRoomsValue(){
      this.uploadRoomImage1 = [];
      this.uploadRoomImage2 = [];
      this.uploadRoomImage3 = [];
      this.uploadRoomImage4 = [];
      this.uploadRoomImage5 = [];
    },
    closeAddDataDialog() {
      this.resetFiles();
      this.addDataDialog = false;
      this.equipmentUpdatingDetails = false;
      // this.equipmentPartnerForm = equipmentRegistrationMaster();
    },
    getOtherAmenities(facilities) {
      for (let i = 0; i < facilities.length; i++) {
        if (facilities[i].amenity_name == "Others") {
          this.otheramenitiesinput = true;
        } else {

          this.otheramenitiesinput = false;
        }
      }
    },

    openequipmentLocationForm() {
      this.equipmentItemDetails.txn_id = this.editedMedStoresObj.txn_id;
      this.editMedicalDetails.account_id = this.editedMedStoresObj.account_id;
      this.equipmentItemDetails.equipment_id = this.editedMedStoresObj.equipment_id;
      this.equipmentItemDetails.equipment_sub_id = this.editedMedStoresObj.equipment_sub_id;
      this.equipmentItemDetails.agent_name = this.editedMedStoresObj.agent_name;
      this.equipmentItemDetails.equipment_sub_name = this.editedMedStoresObj.equipment_sub_name;
      this.equipmentItemDetails.medical_store = this.editedMedStoresObj.medical_store_name;
      this.equipmentItemDetails.address = this.editedMedStoresObj.address;
      this.equipmentItemDetails.city = this.editedMedStoresObj.city;
      this.equipmentItemDetails.city_id = this.editedMedStoresObj.city_id;
      this.equipmentItemDetails.location = this.editedMedStoresObj.location;
      this.equipmentItemDetails.partner_status = this.editedMedStoresObj.status;
      this.equipmentLocationForm = true;
    },

    editEquipmentForm(item) {
      this.editMedicalDetails.account_id = item.account_id;
      this.editMedicalDetails.txn_id = item.txn_id;
      this.editMedicalDetails.item_name = item.item_name;
      this.editMedicalDetails.item_id = item.item_id;
      this.editMedicalDetails.price = item.price;
      this.editMedicalDetails.units = item.units;
      this.editMedicalDetails.unit_id = item.units_id;
      this.editMedicalDetails.equipment_id = item.equipment_id;
      this.editMedicalDetails.equipment_sub_id = item.equipment_sub_id;
      this.editEditedItem.agent_name = item.agent_name;
      this.editEditedItem.equipment_sub_name = item.equipment_sub_name;
      this.editMedicalDetails.medical_store = item.medical_store;
      this.editMedicalDetails.purchased_type = item.purchased_type;
      this.editMedicalDetails.address = item.address;
      this.editMedicalDetails.city = item.city;
      this.editMedicalDetails.city_id = item.city_id;
      this.editMedicalDetails.partner_status = item.partner_status;
      this.editMedicalDetails.location = item.location;
      // this.editMedicalDetails.special_offer = item.special_offer;
      this.equipment_image = { name: item.equipment_image ?? "" };
      this.equipmentUpdatingDetails = true;
    },
    closeEquipmentDialog() {
      this.equipmentLocationForm = false;
    },
    closeEditEquipmentDialog() {
      this.equipmentUpdatingDetails = false;
    },
    openPropertyPartnerDialog() {
      this.PropertyPartnerDialog = true;
      this.propertyPartnerDetails.partner_id = this.editedItem.equipment_id;
      this.propertyPartnerDetails.account_id = this.editedItem.account_id;
      this.propertyPartnerDetails.partner_sub_id = this.editedItem.equipment_sub_id;
      this.propertyPartnerDetails.equipment_sub_id = this.editedItem.equipment_sub_id;
      this.propertyPartnerDetails.agent_name = this.editedItem.agent_name;
      this.propertyPartnerDetails.equipment_sub_name = this.editedItem.equipment_sub_name;
      this.propertyPartnerDetails.property_name = this.editedItem.property_type;
      this.propertyPartnerDetails.property_phone = this.editedItem.phone;
      this.propertyPartnerDetails.partner_phone = this.editedItem.phone;
      this.propertyPartnerDetails.property_email_id = this.editedItem.email_id;
      this.propertyPartnerDetails.partner_name = this.editedItem.agent_name;
      this.propertyPartnerDetails.partner_sub_name = this.editedItem.equipment_sub_name;
      this.propertyPartnerDetails.city
      = this.editedItem.city_name
        this.propertyPartnerDetails.state_name
       = this.editedItem.state

      this.resetFiles();
     // console.log("items",this.editedItem)
    },
    openFoodPropertyDialog() {
      this.addFoodDetails.account_id = this.EqpRestaurantEditedItem.account_id;
      this.addFoodDetails.agent_id = this.EqpRestaurantEditedItem.agent_id;
      this.addFoodDetails.agent_sub_id = this.EqpRestaurantEditedItem.agent_sub_id;
      this.addFoodDetails.kitchen_txn_id = this.EqpRestaurantEditedItem.txn_id;
      this.addFoodDetails.kitchen_name = this.EqpRestaurantEditedItem.name_of_kitchen;
      this.addFoodDetails.kitchen_type = this.EqpRestaurantEditedItem.type_of_kitchen;
      this.addFoodDetailsDialog = true;
      this.onclickValue = "";
      this.emptyValue();
    },
    openTravelDetailsDialog() {
      this.addTravelLocation.address = this.editedItem.address;
      this.addTravelLocation.location = this.editedItem.location;
      this.addTravelLocation.account_id = this.userDetails.account_id;
      this.addTravelLocation.agent_id = this.editedItem.agent_id;
      this.addTravelLocation.transport_sub_id = this.editedItem.transport_sub_id;
      this.addTravelLocation.agent_name = this.editedItem.agent_name;
      this.addTravelLocation.transport_sub_name =
        this.editedItem.transport_sub_name;
      this.addTravelLocation.travel_status = this.editedItem.status;
      this.addTravelLocation.city_id = this.editedItem.city_id;
      this.addTravelLocation.city = this.editedItem.city;
      this.addTravelLocation.transport_sub_name = this.editedItem.transport_sub_name;
      this.onclickValue = "";
      this.emptyValue();
      this.addTravelDetails = true;
    },
    closePartnerDialog() {
      this.PropertyPartnerDialog = false;
    },
    closeAddMedicalStore() {
      this.addMedicalStore = false;
    },
    closeEditMedicalStore(){
      this.editMedStoresData = false;
    },
    checkstate() {
      if (this.equipmentPartnerForm.country.name == "India") {
        this.indiastate = true;
        this.indiacity = true;
        this.otherstate = false;
        this.othercity = false;
      } else {
        this.emptyotherstate();
        this.otherstate = true;
        this.othercity = true;
        this.indiastate = false;
        this.indiacity = false;
      }
    },
    emptyotherstate() {
      this.equipmentPartnerForm.city = [];
      this.equipmentPartnerForm.state = [];
    },
    showDocumentacc(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhapFilePath + file;
        this.visible = false;
      }, 500);
      this.small = true;
    },
    showDocumenttravel(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhtpFilePath + file;
        this.visible = false;
      }, 500);
      this.small = true;
    },
    showDocumentfood(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;

        this.url = filepaths.mhfpFilePath + file;
        this.visible = false;
      }, 500);
      this.small = true;
    },
    showDocument(file, dialogName) {
      this.visible = true;
      setTimeout(() => {
        this.showPanDoc = true;
        this.dialogTitle = `${dialogName}: ${file}`;
        this.url = filepaths.mhepFilePath + file;
        this.visible = false;
      }, 500);
      this.small = true;
    },
    checkFileSize(files) {
      return files.filter(file => file.size < 2048576);
    },
    onRejected() {
      this.$q.notify({
        type: "negative",
        message: `File Size should be less than (or) equals to 2 MB`
      });
    },
    resetFiles() {
      this.pan_card_file = [];
      this.addhaar_no = [];
      this.gst_tin = [];
      this.mh_agreement = [];
      this.mb_certificate = [];
      this.property_tax = [];
      this.fire_safety = [];
      this.cancelled_cheque = [];
      this.equipment_image = [];
      this.uploadImage = [];
      this.uploadImage1 = [];
      this.uploadImage2 = [];
      this.uploadImage3 = [];
      this.uploadImage4 = [];
      this.uploadRoomImage1 = [];
      this.uploadRoomImage2 = [];
      this.uploadRoomImage3 = [];
      this.uploadRoomImage4 = [];
      this.uploadRoomImage5 = [];
      this.upload_Image = [];
      this.upload_Image1 = [];
      this.upload_Image2 = [];
      this.upload_fssai = [];
      this.upload_fssai_1 = [];
    },
    emptyMedicalItems() {
      this.equipmentItemDetails.units = [];
      this.editMedicalDetails.units = [];
    },
    opentransportDialog() {
      this.transportDetails.account_id = this.userDetails.account_id;
      this.transportDetails.agent_id = this.editedItem.equipment_id;
      this.transportDetails.transport_sub_id = this.editedItem.equipment_sub_id;
      this.transportDetails.agent_name = this.editedItem.agent_name;
      this.transportDetails.transport_sub_name = this.editedItem.equipment_sub_name;
      this.onclickValue = "";

      this.resetFiles();
      this.transportDialog = true;
    },
    onMedicalTransportSubmit() {
      this.$refs.transportFormBasic.validate().then(success => {
        if (success) {
          if (this.transportDetails.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                const formData = new FormData();
                this.transportDetails.user_id = this.userDetails.account_id;
                formData.append("upload_image1", this.uploadImage);
                formData.append("upload_image2", this.uploadImage1);

                formData.append(
                  "transport_details",
                  JSON.stringify(this.transportDetails)
                );
                this.medicaltransportDetailsSaving(formData);
                this.resetFiles();
                this.transportDialog = false;
                this.details = false;
                this.transportDetails = {};
                this.step = 1;
              })
              .onCancel(() => {
                this.resetFiles();
                this.transportDialog = true;
              });
          }
        }
      });
    },

    showTransportDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.transportViewDialog = true;
      this.loadTravelDetails(this.editedItem);
      //this.getMedicalTransportDetailsSaving(this.editedItem);
    },
    editTrasportDetails(item) {
      this.editedIndex = this.data.indexOf(item);
      this.transporteditedItem = Object.assign({}, item);
      this.transporteditedItem.tnx_id = item.tnx_id;
      this.transporteditedItem.agent_id = item.agent_id;
      this.transporteditedItem.transport_sub_id = item.transport_sub_id;
      this.transporteditedItem.account_id = item.account_id;
      this.transporteditedItem.transport_sub_name = item.transport_sub_name;
      this.transporteditedItem.agent_name = item.agent_name;
      this.transporteditedItem.transport_company_name =
        item.transport_company_name;
      this.transporteditedItem.special_offer = item.special_offer;
      this.transporteditedItem.from_date = item.from_date;
      this.transporteditedItem.to_date = item.to_date;
      this.transporteditedItem.transport_phone = item.transport_phone;
      this.transporteditedItem.transport_email_id = item.transport_email_id;
      this.transporteditedItem.Name_Of_Contact_Person =
        item.Name_Of_Contact_Person;
      this.transporteditedItem.transport_description =
        item.transport_description;
      this.transporteditedItem.building_no = item.building_no;
      this.transporteditedItem.street = item.street;
      this.transporteditedItem.land_mark = item.land_mark;
      this.transporteditedItem.city = item.city;
      this.transporteditedItem.state = item.state;
      this.transporteditedItem.pin_code = item.pin_code;
      this.transporteditedItem.transport_latitude = item.transport_latitude;
      this.transporteditedItem.transport_longitude = item.transport_longitude;
      this.transporteditedItem.uploadImage1 = {
        name: item.upload_image1 ?? ""
      };
      this.transporteditedItem.uploadImage2 = {
        name: item.upload_image2 ?? ""
      };
      this.transportEditDialog = true;
    },
    onMedicalTransportUpdatingDetail() {
      this.$refs.transportEditDialog.validate().then(success => {
        if (this.transporteditedItem.agent_id != "") {
          if (success) {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Update data ?",
                cancel: true,
                persistent: true
              })
              .onOk(() => {
                this.updatingMedicalTransportDetails(this.transporteditedItem);
                this.transportEditDialog = false;

                this.details = false;

                this.resetFiles();
              })
              .onCancel(() => {
                this.resetFiles();
                // this.emptyValue();
                this.transportEditDialog = true;
              });
          }
        }
      });
    },
    emptyValue() {
      this.equipmentItemDetails.equipment_sub_name = [];
      this.equipmentItemDetails.agent_name = [];
      this.equipmentItemDetails.price = [];
      this.equipmentItemDetails.item_name = [];
      this.equipmentItemDetails.units = [];
      // this.equipmentItemDetails.special_offer = [];
      this.editMedicalDetails.equipment_sub_name = [];
      this.editMedicalDetails.agent_name = [];
      this.editMedicalDetails.price = [];
      this.editMedicalDetails.medical_store = [];
      this.editMedicalDetails.item_name = [];
      // this.editMedicalDetails.special_offer = [];
      this.editMedicalDetails.units = [];
      this.editMedicalDetails.equipment_image = [];
      this.addFoodDetails.units = [];
      this.food_image = [];
      this.addFoodDetails.price = [];
      this.addFoodDetails.foodName = [];
      this.addFoodDetails.foodItemsList = [];
      this.addFoodDetails.items_available_to = [];
      this.addFoodDetails.items_available_from = [];
      this.food_image = [];
      this.addTravelLocation.day_price = [];
      this.addTravelLocation.night_price = [];
      this.addTravelLocation.units = [];
      this.addTravelLocation.vehicle_name = [];
      this.addTravelLocation.no_of_seaters = [];
      this.addTravelLocation.description = "";

      this.vehicle_image = [];
    },
    emptyFoodItems() {
      this.addFoodDetails.foodItemsList = [];
    },
    filterFnCountry(val,update) {
        if (val === "") {
        update(() => {
          this.countryOptions = this.countriescheck;
        });
        return this.countryOptions;
      }
      update(() => {
        const needle = this.countriescheck.filter((items)=> {return Object.values(items).some((item)=> item.toLowerCase().includes(val.toLowerCase()))} )
         this.countryOptions=needle
        return this.countryOptions;
      });
    },
    // filterFnStates(val, update) {
    //   if (val === "") {
    //     update(() => {
    //       this.stateOptions = this.states;
    //     });
    //     return;
    //   }

    //   update(() => {
    //     const needle = val.toLowerCase();
    //     this.stateOptions = this.states.filter(
    //       (v) => v.toLowerCase().indexOf(needle) > -1
    //     );
    //   });
    // },

    filterFnStates(val,update) {
        if (val === "") {
        update(() => {
          this.stateOptions = this.states;
        });
        return this.stateOptions;
      }
      update(() => {
        const needle = this.states.filter((items)=> {return Object.values(items).some((item)=> item.toLowerCase().includes(val.toLowerCase()))} )
         this.stateOptions=needle
        return this.stateOptions;
      });
    },

    filterFnCities(val,update) {
        if (val === "") {
        update(() => {
          this.cityOptions = this.cities;
        });
        return this.cityOptions;
      }
      update(() => {
        const needle = this.cities.filter((items)=> {return Object.values(items).some((item)=> item.toLowerCase().includes(val.toLowerCase()))} )
         this.cityOptions=needle
        return this.cityOptions;
      });
    },
    exportTable() {
      // naive encoding to csv format
      const content = [
        this.equipment_registration_columns.map(col => wrapCsvValue(col.label))
      ]
        .concat(
          this.equipment_registration_rows.map(row =>
            this.equipment_registration_columns
              .map(col =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("users-export.csv", content, "text/csv");

      if (status !== true) {
        $q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
      }
    },
    OpenEqpRestaurantDialog() {
      this.EqpRestaurantDetails.agent_id = this.editedItem.equipment_id;
      this.EqpRestaurantDetails.account_id = this.editedItem.account_id;
      this.EqpRestaurantDetails.agent_sub_id = this.editedItem.equipment_sub_id;
      this.EqpRestaurantDetails.food_partner_name = this.editedItem.agent_name;
      this.EqpRestaurantDetails.food_partner_phone = this.editedItem.phone;
      this.EqpRestaurantDetails.food_partner_sub_name = this.editedItem.equipment_sub_name;
      this.EqpRestaurantDetails.partner_status = this.editedItem.status;
      this.medicalRestaurantDialog = true;

      this.resetFiles();
    },
    OnEqpRestaurantSubmit() {
      this.$refs.eqpRestaurantFormBasic.validate().then((success) => {
        if (success) {
          if (this.EqpRestaurantDetails.agent_id != "") {
            this.$q
              .dialog({
                title: "Confirm",
                message: "Do you want to Submit data ?",
                cancel: true,
                persistent: true,
              })
              .onOk(() => {
              //  console.log("save",this.EqpRestaurantDetails)
                const formData = new FormData();
                formData.append("upload_fssai", this.upload_fssai);
                formData.append("upload_image1", this.upload_Image);
                formData.append("upload_image2", this.upload_Image1);
                formData.append("upload_image3", this.upload_Image2);
                formData.append("restaurant_details", JSON.stringify(this.EqpRestaurantDetails));
                this.EqpRestaurantSaving(formData);
                this.resetFiles();

                // this.propertyPartnerForm = propertyRegistrationMaster();
                this.medicalRestaurantDialog = false;
                this.details = false;
                this.EqpRestaurantDetails = {};
                this.step = 1;
                this.getEqpRestaurantDetails(this.editedItem);

              })
              .onCancel(() => {
                this.resetFiles();
                this.medicalRestaurantDialog = true;
              });
          }
        }
      });
    },
    showEqpRestaurantData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.EqpRestaurantEditedItem = Object.assign({}, item);
      this.eqpRestaurantDataDialog = true;
      this.loadFoodDetails(item);
    },
    emptyCities() {
      this.medicalStoreObj.city = "";
      this.editmedicalStoreObj.city_name= "";
      this.propertyPartnerDetails.city = "";
      // this.editedPropertyPartnerData.city_name = "";
      this.EqpRestaurantDetails.city = "";
      this.editEqpRestaurant.city_name = "";
      this.transporteditedItem.city = "";
    },
    editEqpRestaurantData(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editEqpRestaurant = Object.assign({}, item);
      this.editEqpRestaurant.agent_id = item.agent_id;
      this.editEqpRestaurant.agent_sub_id = item.agent_sub_id;
      this.editEqpRestaurant.agent_name = item.agent_name;
      this.editEqpRestaurant.agent_sub_name = item.agent_sub_name;
      this.editEqpRestaurant.restaurant_phone = item.restaurant_phone;
      this.editEqpRestaurant.Name_Of_Contact_Person = item.Name_Of_Contact_Person;
      this.editEqpRestaurant.restaurant_email = item.restaurant_email;
      this.editEqpRestaurant.restaurant_latitude = item.restaurant_latitude;
      this.editEqpRestaurant.restaurant_longitude = item.restaurant_longitude;
      this.editEqpRestaurant.restaurant_description = item.restaurant_description;
      this.editEqpRestaurant.building_no = item.building_no;
      this.editEqpRestaurant.street = item.street;
      this.editEqpRestaurant.land_mark = item.land_mark;
      this.editEqpRestaurant.state = item.state_name;
      this.editEqpRestaurant.city
 = item.city_name;
      this.editEqpRestaurant.pin_code = item.pin_code;
      this.editEqpRestaurant.txn_id = item.txn_id;
      this.editEqpRestaurant.select_offer = item.select_offer;
      // this.editEqpRestaurant.enter_amount = item.enter_amount;
      // this.editEqpRestaurant.special_offer = item.special_offer;
      this.editEqpRestaurant.opening_time = item.opening_time;
      this.editEqpRestaurant.closing_time = item.closing_time;
      this.editEqpRestaurant.date_from = item.date_from;
      this.editEqpRestaurant.date_to = item.date_to;
      this.upload_fssai_1 = {
        name: item.upload_fssai ?? "",
      };
      this.upload_Image = {
        name: item.upload_image ?? "",
      };
      this.upload_Image1 = {
        name: item.upload_image1 ?? "",
      };
      this.upload_Image2 = {
        name: item.upload_image2 ?? "",
      };
      this.eqpRestaurantEditDialog = true;
    },
  },
};
</script>
