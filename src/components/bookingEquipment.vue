<template>
  <q-page-container class="bg-indigo-1">
    <headerTag />
    <!--mobile view start-->
    <q-page style="display: flex" class="bg-grey lt-sm">
      <div class="justify-center lt-sm" style="display: contents">
        <div class="lt-sm row justify-center">
          <q-card style="margin-top: 6px" flat class="bg-white lt-sm">
            <div class="row" style="width: 368px; height: min-content">
              <div
                class="text-h7 text-bold q-pa-sm"
                style="font-size: larger; align-self: end; width: 261px"
              >
                <q-icon size="30px">
                  <q-img
                    src="~assets/logos/MHmini_logo_128x128.png"
                  ></q-img> </q-icon
                >MH - MEDICAL EQUIPMENT BOOKING
              </div>
              <q-space />

              <div class="text-h6 text-bold q-pa-sm">
                <q-btn
                  outline
                  rounded
                  style="width: 68px; height: 39px; margin-left: 22px"
                  color="primary"
                  @click="confirm = true"
                  >BACK
                </q-btn>
              </div>
            </div>
          </q-card>

          <q-card
            flat
            :class="class_val"
            class="row bg-transparent q-pa-xs lt-sm"
          >
            <q-card flat class="bg-white;" style="width: 100%">
              <q-card
                bordered
                class="q-pa-xs bg-white justify-center"
                style="border: 1px solid silver"
                v-if="this.EquipmentId.data[0]"
              >
                <div class="row justify-start">
                  <div
                    class="row text-black text-bold q-pa-sm q-ml-md text-left"
                    style="font-family: verdana; font-size: 16px; width: 100%"
                  >
                    MH BOOKING ID -{{ EquipmentId.data[0].booking_order_id }}
                  </div>
                  <q-space />
                </div>
                <q-separator />
                <div class="row q-pl-sm">
                  <div style="margin-top: -4px" class="col-12 col-md-4 q-pa-xs">
                    <div class="text-bold text-subtitle">
                      <q-icon size="3em" name="mdi-map-marker-radius" />

                      {{ EquipmentId.data[0].property_city_name }}, India.
                    </div>
                    <div class="text-subtitle" style="font-size: 13px">
                      Hospital Name:-
                      {{ EquipmentId.data[0].near_hospital_name }}
                    </div>
                  </div>
                  <div
                    class="col-12 col-md-8 q-pa-sm row"
                    style="width: 342px; background-color: #e4fae9"
                  >
                    <div class="col-4 text-center">
                      <div class="text-caption">Check In</div>
                      <div class="text-bold text-subtitle">
                        {{
                          moment(EquipmentId.data[0].check_in).format(
                            "dddd, DD MMM YYYY"
                          )
                        }}
                      </div>
                      <div class="text-caption">
                        {{
                          moment(EquipmentId.data[0].check_in).format("h:mm a")
                        }}
                      </div>
                    </div>
                    <div class="col-4 text-center">
                      <div class="text-caption">Check Out</div>
                      <div class="text-bold text-subtitle">
                        {{
                          moment(EquipmentId.data[0].check_out).format(
                            "dddd, DD MMM YYYY"
                          )
                        }}
                      </div>
                      <div class="text-caption">
                        {{
                          moment(EquipmentId.data[0].check_out).format("h:mm a")
                        }}
                      </div>
                    </div>
                    <div class="col-4 text-center">
                      <div class="text-caption">Guest</div>
                      <div class="text-bold text-subtitle">
                        {{ EquipmentId.data[0].guest_count }} guests
                      </div>
                      <div class="text-caption">
                        {{ EquipmentId.data[0].no_of_days }} Nights
                      </div>
                    </div>
                  </div>
                </div>
              </q-card>
            </q-card>
          </q-card>

          <q-card
            flat
            :class="class_val"
            class="row bg-transparent q-pa-xs lt-sm"
            no-data-text="no data"
            style="margin-top: -3px"
          >
            <q-card flat style="height: auto; width: 100%">
              <div class="row items-center" style="justify-content: center">
                <div class="text-h6 text-bold q-pa-sm">
                  Book Your Medical Equipments
                </div>
              </div>
              <q-card-actions
                class="row col-12"
                style="padding-top: 30px"
                v-if="this.EquipmentId.data[0]"
              >
                <div ref="SearchMedicalPartners" class="row col-12 q-gutter-md">
                  <q-input
                    dense
                    outlined
                    bg-color="primary"
                    label="Date"
                    label-color="white"
                    clear-icon="close"
                    minimal
                    dark
                    class="col-3"
                    v-model="bookingMedical.date"
                    @click="$refs.qDateProxy.show()"
                    v-if="this.EquipmentId.data[0]"
                    style="width: 125px"
                    :rules="[required('Date To')]"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qDateProxy"
                          minimal
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            minimal
                            mask="DD/MM/YYYY"
                            v-model="bookingMedical.date"
                            :options="optionsFn"
                            @input="closeDialog"
                          >
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                minimal
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>

                  <q-select
                    dense
                    options-dense
                    outlined
                    multiple
                    aria-checked
                    use-input
                    v-model="bookingMedical.item_name"
                    bg-color="primary"
                    label="Equipment Item Name *"
                    color="cyan"
                    dark
                    class="col-3"
                    style="width: 142px"
                    filled
                    :rules="[required('Equipment Item Name ')]"
                    :options="medicalItemName"
                    option-label="item_name"
                    option-value="item_id"
                    label-color="white"
                  >
                  </q-select>
                  <q-input
                    class="col-3"
                    dense
                    options-dense
                    outlined
                    color="cyan"
                    dark
                    bg-color="primary"
                    style="width: 150px"
                    filled
                    v-model="bookingMedical.days_booked_for"
                    label="No. of Days Booked *"
                    :rules="[required('Days Booked For')]"
                    label-color="white"
                  >
                  </q-input>
                  <q-btn
                    class="col-4 q-mr-sm text-bold"
                    style="width: 100px; height: 40px"
                    dense
                    @click="
                      medicalSearch(
                        EquipmentId.data[0].property_city_id,
                        bookingMedical.item_name
                      )
                    "
                    label="Search"
                    color="primary"
                  />
                </div>
              </q-card-actions>
              <q-separator />
              <q-card
                flat
                class="bg-white; q-pa-sm"
                style="padding-top: 0px"
                v-if="EquipmentId.data[0]"
              >
                <div
                  class="q-pa-md row items-start col-12 q-gutter-md"
                  v-if="EquipmentId.data[0]"
                >
                  <q-card
                    class="item-start col-5 cursor-pointer highlight q-ma-sm"
                    style="
                      width: 300px;
                      height: 150px;
                      background-color: #e4fae9;
                    "
                    :class="class_val"
                    v-for="item in equipment_item_rows"
                    :key="item.agent_sub_id"
                    @click="onEquipmentPartner(item)"
                  >
                    <q-card-section
                      horizontal
                      class="row col-12 q-pa-sm"
                      style="height: 150px"
                    >
                      <div class="row">
                        <div
                          class="col-4 q-my-auto"
                          style="height: 120px; width: 100px"
                        >
                          <q-avatar
                            class="text-center"
                            color="secondary"
                            size="6em"
                            text-color="white"
                            style="
                              font-family: verdana;
                              height: 80px;
                              width: 70px;
                            "
                          >
                            {{ item.medical_store_name.charAt(0) }}</q-avatar
                          >
                          <!-- <q-img
                          class="row col-6 items-start q-pa-sm"
                          :src="`${equipmentImgpath}/${item.equipment_image}`"
                          style="
                            height: 135px;
                            width: 100px;
                            border-radius: 20px;
                          "
                        /> -->
                        </div>
                      </div>
                      <q-separator />
                      <div
                        class="row col-8 q-ml-md text-center"
                        style="height: 100px; width: 100px; padding-top: 0px"
                      >
                        <div class="row q-pa-sm">
                          <div
                            class="col-12 text-caption text-black text-bold"
                            style="font-size: 14px"
                          >
                            {{ item.medical_store_name }}
                          </div>

                          <div class="col-12" style="font-size: 10px">
                            <q-rating
                              v-model="rating"
                              size="1em"
                              :max="5"
                              class="col-4"
                              color="yellow"
                              readonly
                            />
                            <q-chip
                              class="col-2"
                              color="secondary"
                              dark
                              dense
                              style="height: 20px; width: 30px"
                              size="xs"
                              >{{ rating }} / 5</q-chip
                            >
                          </div>
                          <div
                            class="col-12 text-caption"
                            style="font-size: 12px"
                          >
                            {{ item.medical_store_name }}
                          </div>
                          <div
                            class="col-12 text-caption"
                            style="font-size: 12px"
                          >
                            {{ item.location }}

                            <q-btn
                              size="sm"
                              outlined
                              filled
                              style="height: 30px"
                              color="primary"
                              @click="onEquipmentPartner(item)"
                              label="Select"
                              class="text-weight-bold q-ml-xl"
                            />
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-card>
              <q-separator />
              <q-card
                flat
                class="bg-white; q-pa-sm"
                style="padding-top: 5px"
                v-if="this.medicalItems_rows.length > 0"
              >
                <div class="row" style="padding-top: 0px">
                  <div class="text-h6 text-bold q-pa-sm">
                    <q-icon size="30px">
                      <q-avatar color="secondary" size="30px"
                        >{{ this.eqpRows.equipment_sub_name.charAt(0) }}
                      </q-avatar>
                    </q-icon>
                    {{ this.eqpRows.equipment_sub_name }}
                  </div>
                  <q-space />
                </div>
                <div
                  class="q-pa-md row items-start col-12 q-gutter-md"
                  v-if="this.medicalItems_rows.length > 0"
                >
                  <q-card
                    class="item-start col-5 cursor-pointer q-ma-sm"
                    style="
                      width: 300px;
                      height: 150px;
                      background-color: #e4fae9;
                    "
                    :class="class_val"
                    v-for="item in medicalItems_rows"
                    :key="item.txn_id"
                  >
                    <q-card-section horizontal class="row col-12 q-pa-sm">
                      <div class="row">
                        <div class="col-6" style="height: 120px; width: 100px">
                          <q-img
                            class="row col-6 items-start q-pa-sm"
                            :src="`${equipmentImgpath}/${item.equipment_image}`"
                            style="
                              height: 135px;
                              width: 100px;
                              border-radius: 20px;
                            "
                          />
                        </div>

                        <div
                          class="row col-6 q-ml-md text-center"
                          style="height: 100px; width: 100px; padding-top: 0px"
                        >
                          <div class="row justify-start q-pa-sm">
                            <div
                              class="col-12 text-caption text-black text-bold"
                              style="font-size: 12px"
                            >
                              {{ item.item_name }}
                            </div>

                            <div
                              class="col-12 text-caption"
                              style="font-size: 14px"
                            >
                              {{ item.price }}
                            </div>

                            <div
                              class="col-12 text-caption"
                              style="font-size: 14px"
                            >
                              {{ item.medical_store }}
                            </div>
                          </div>
                          <div class="row col-12 justify-center text-caption">
                            <q-select
                              dense
                              options-dense
                              class="col-4 text-bold"
                              type="button"
                              v-model="medicalItem.addCount[item.txn_id]"
                              hide-bottom-space
                              :options="['1', '2', '3', '4', '5']"
                              @input="loadEquipmentData(item)"
                            >
                              <!-- <option
                              v-for="(item, txn_id) in medicalItem.item"
                              :key="txn_id"

                            ></option> -->
                            </q-select>
                            <q-btn
                              size="sm"
                              outlined
                              filled
                              color="primary"
                              @click="addMedicalItem(item)"
                              label="Add"
                              style="margin-left: 10px; width: 30px"
                              class="col-4 justify-end"
                            />
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-card>
            </q-card>
          </q-card>

          <q-card
            flat
            :class="class_val"
            class="row bg-transparent q-pa-xs lt-sm"
            style="margin-top: -3px"
            v-if="this.incrementCount.length > 0"
          >
            <div
              class="q-pa-xs bg-white justify-center"
              style="width: -webkit-fill-available"
            >
              <div class="row col-12">
                <div class="text-h6 text-bold q-pa-sm" style="font-size: 15px">
                  MANGOHOMZ OFFERS
                </div>
                <q-space />
              </div>
              <div
                class="row col-12 q-pa-sm"
                style="border-top: 1px solid silver"
              >
                <q-list
                  dense
                  style="font-size: 11px"
                  class="cursor-pointer row col-12"
                  v-for="item in mangohomzOffers_arr"
                  :key="item.sno"
                >
                  <q-card
                    class="col-12 row q-pa-sm"
                    style="background-color: #ffffff"
                    type="radio"
                    v-if="
                      getBasePrice >= item.offer_money_start &&
                      getBasePrice <= item.offer_money_end
                    "
                    @click="selectOffer(item)"
                  >
                    <div class="row">
                      <q-img
                        :src="`${OfferImgpath}${item.offer_image}`"
                        style="height: 70px; width: 70px"
                      />
                      <div
                        class="text-bold text-indigo-9 text-body1"
                        style="position: absolute; top: 10px; right: 20px"
                      >
                        ₹ {{ item.offer_price }}
                      </div>
                      <q-list color="indigo-9"
                        ><span
                          class="text-indigo-9 text-bold text-body2 text-bold q-mr-xl q-pa-sm"
                          style="font-family: verdana; font-size: 12px"
                          >{{ item.offer_name }}</span
                        >
                      </q-list>
                    </div>
                    <div class="row col-12">
                      <div
                        class="q-pa-sm text-left"
                        style="font-family: verdana; font-size: 10px"
                      >
                        {{ item.offer_description }}
                      </div>
                    </div>
                  </q-card>
                </q-list>
              </div>
            </div>
            <q-separator />
            <q-separator />
            <div class="bg-white" style="max-width: 402px; height: 450px">
              <div class="row col-12">
                <div
                  class="text-caption text-bold q-pa-sm text-silver"
                  style="font-family: verdana; font-size: 12px"
                >
                  PRICE DETAILS
                </div>
                <q-space />
              </div>

              <div
                class="row col-12 q-pa-sm"
                style="
                  border-top: 1px solid silver;
                  font-family: verdana;
                  font-size: 10px;
                "
              >
                <q-item-section class="text-bold text-capitalize"
                  >Selected Equipment</q-item-section
                >
                <q-space />
                <q-item-section class="text-right">
                  {{ this.selectMedicalItems }}
                </q-item-section>
              </div>

              <div
                class="col-8 items-start"
                style="border: 0px solid silver; width: 350px; margin-left: 0px"
                v-if="this.incrementCount.length > 0"
              >
                <q-list dense style="padding-bottom: 15px" class="row col-12">
                  <q-item
                    class="col-12"
                    v-for="item in incrementCount"
                    :key="item.txn_id"
                    style="padding-bottom: 10px"
                  >
                    <q-item-section class="col-8">
                      {{ item.item_name }} :- ({{ item.price }} *
                      {{ parseInt(item.add_qty) }})</q-item-section
                    >
                    <q-space />
                    <q-item-section class="text-right"
                      >₹
                      {{ item.price * parseInt(item.add_qty) }}</q-item-section
                    >
                  </q-item>

                  <q-item class="col-12" style="background-color: #e4fae9">
                    <q-item-section class="text-bold"
                      >Base Price :- (for
                      {{ this.getQtyValue }} Qty)</q-item-section
                    >
                    <q-space />
                    <q-item-section class="text-right text-bold"
                      >₹
                      {{
                        Math.round(parseFloat(this.getBasePrice).toFixed(2))
                      }}</q-item-section
                    >
                  </q-item>
                </q-list>
              </div>

              <q-separator />
              <div
                class="row col-12 q-pa-sm"
                style="
                  border-top: 1px solid silver;
                  border: 0px solid silver;
                  font-size: medium;
                "
                v-if="this.incrementCount.length > 0"
              >
                <!-- <q-item class="col-12">
                    <q-item-section>Equipment Charges</q-item-section>
                    <q-space />
                    <q-item-section class="text-right text-bold" style="font-size=12px">{{ this.medicalCharges }}
                    </q-item-section>
                  </q-item> -->
                <!-- <q-item class="col-12">
                    <q-item-section>Discount (%)</q-item-section><q-space />
                    <q-item-section
                      class="text-right text-secondary text-bold"
                      style="font-size=12px"
                      >(-) Rs. {{ this.discount }}</q-item-section
                    >
                  </q-item>
                  <q-item class="col-12" style="background-color: #e4fae9">
                    <q-item-section>Base Price</q-item-section><q-space />
                    <q-item-section
                      class="text-right text-bold"
                      style="font-size=12px"
                    >
                      {{ this.basicPrice }}</q-item-section
                    >
                  </q-item> -->
                <q-item
                  class="col-12 text-indigo-9 text-bold text-subtitle2"
                  style="-webkit-text-stroke: thin"
                >
                  <q-item-section>MangoHomz Offers</q-item-section><q-space />
                  <q-btn
                    v-if="this.selected_offer_price != 0"
                    flat
                    dense
                    class="text-bold"
                    style="color: red; font-size: 10px"
                    icon="mdi-delete"
                    rounded
                    @click="removeCoupon"
                    ><span>Remove Offer</span>
                  </q-btn>
                </q-item>
                <q-item class="col-12 text-caption text-indigo-9 text-bold">
                  <q-item-section style="-webkit-text-stroke-width: thin">{{
                    this.selected_offer_name
                  }}</q-item-section
                  ><q-space />
                  <q-item-section
                    class="text-right text-indigo-9"
                    style="-webkit-text-stroke-width: thin;font-size=12px"
                    >(-) ₹ {{ this.selected_offer_price }}</q-item-section
                  >
                </q-item>
                <!-- <q-item class="col-12 text-caption text-secondary text-bold">
                    <q-item-section>Gocash +</q-item-section><q-space />
                    <q-item-section class="text-right">- Rs 10</q-item-section>
                  </q-item> -->
                <q-item class="col-12" style="background-color: #e4fae9">
                  <q-item-section>Price after discount</q-item-section>
                  <q-space />
                  <q-item-section
                    class="text-right text-bold"
                    style="font-size=12px"
                    >₹ {{ this.priceAfterDiscount }}
                  </q-item-section>
                </q-item>
                <q-item class="col-12">
                  <q-item-section class="text-bold text-subtitle2"
                    >+ Taxes & Fees</q-item-section
                  >
                  <q-space />
                </q-item>
                <q-item class="col-12">
                  <q-item-section>Taxes</q-item-section>
                  <q-space />
                  <q-item-section
                    class="text-right text-bold"
                    style="font-size=12px"
                    >₹ {{ this.gstOnPrice }}</q-item-section
                  >
                </q-item>
                <!-- <q-item class="col-12">
                    <q-item-section>CGST on price (9%)</q-item-section>
                    <q-space />
                    <q-item-section class="text-right">Rs {{ this.cGstOnPrice }}</q-item-section>
                  </q-item>
                  <q-item class="col-12">
                    <q-item-section>SGST on price (9%)</q-item-section>
                    <q-space />
                    <q-item-section class="text-right">Rs {{ this.cGstOnPrice }}</q-item-section>
                  </q-item> -->
                <!-- <q-item class="col-12">
                    <q-item-section>Service Fee</q-item-section><q-space />
                    <q-item-section class="text-right">Rs 20</q-item-section>
                  </q-item> -->
                <q-item class="col-12" style="background-color: #e4fae9">
                  <q-item-section class="text-bold text-subtitle2"
                    >PAYABLE NOW</q-item-section
                  >
                  <q-space />
                  <q-item-section
                    class="text-right text-bold"
                    style="font-size=12px"
                    >₹ {{ this.payableAmount }}
                  </q-item-section>
                </q-item>

                <!-- <q-item class="col-12 text-primary">
                    <q-item-section>EMI Starts at Rs.4500</q-item-section>
                    <q-space />
                  </q-item> -->
              </div>
            </div>
            <q-separator />
            <q-separator />
            <div
              class="q-pa-xs bg-white justify-center"
              style="width: -webkit-fill-available"
            >
              <q-separator />
              <div
                class="q-ml-md q-mt-md q-mb-md text-bold text-body2"
                style="font-family: verdana; font-size: 16px"
              >
                Mobile Number
              </div>

              <div
                class="row items-start q-gutter-md"
                style="padding-top: 10px"
              >
                <div class="col-2" style="padding-left: 10px">
                  <q-select
                    dense
                    filled
                    square
                    :options="countriesArr"
                    option-label="code"
                    option-value="name"
                    v-model="formDetails.selected_country"
                    :rules="[required('Code')]"
                    ref="verifyCountryCode"
                    hide-bottom-space
                    style="width: 110px; font-size: 11px"
                    label-color="grey"
                  >
                  </q-select>
                </div>
                <div class="col-2" style="padding-left: 50px">
                  <q-input
                    dense
                    filled
                    outlined
                    v-model="formDetails.mobile_no"
                    ref="verifyMobile"
                    :rules="[required('Mobile Number'), phone()]"
                    label="Enter Mobile No *"
                    lazy-rules
                    mask="##########"
                    style="width: 200px; font-family: verdana; font-size: 12px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </div>
              <!-- <div
                class=" text-bold text-body2"
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-left: 10px;
                "
              >
                Whatsapp Number
              </div>
              <div
                class="row items-start q-gutter-md "
                style="padding-top: 10px"
              >
                <div class="col-2" style="padding-left: 50px">
                  <q-input
                    dense
                    outlined
                    v-model="formDetails.whatsapp_number"
                    ref="verifyAppNumber"
                    :rules="[required('Mobile Number'), phone()]"
                    label="Enter Whatsapp No *"
                    lazy-rules
                    mask="##########"
                    style="width: 200px; font-family: verdana; font-size: 12px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </div> -->
              <div
                class="q-mb-sm text-bold text-body2"
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-left: 10px;
                "
              >
                Email ID
              </div>
              <div class="col-12 q-pa-xs q-mb-xs" style="padding-left: 10px">
                <q-input
                  dense
                  outlined
                  v-model="formDetails.email_id"
                  label="Email"
                  ref="verifyEmail"
                  lazy-rules
                  hide-bottom-space
                  style="width: 100%"
                  :rules="[required('Email'), email()]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-email" color="secondary" />
                  </template>
                </q-input>
              </div>
              <q-separator />
              <div
                class="row justify-center q-gutter-md"
                style="padding-top: 10px"
              >
                <q-checkbox
                  v-model="right"
                  dense
                  class="text-bold"
                  label="Enter GST Details (Optional)"
                />
              </div>
              <div class="q-mt-md">
                <q-input
                  dense
                  filled
                  outlined
                  v-model="formDetails.gstin_no"
                  v-if="this.right == true"
                  class="q-mx-auto"
                  mask="##AAAAA####A###"
                  label="Enter GSTIN Number"
                  lazy-rules
                  :rules="[gstNumber()]"
                  style="width: 200px; font-family: verdana; font-size: 12px"
                  label-color="black"
                >
                </q-input>
              </div>
              <div class="col-12 q-mx-xs" style="padding-top: 20px">
                <p style="width: 100%; font-family: verdana; font-size: 12px">
                  <q-checkbox
                    v-model="terms_conditions"
                    dense
                    size="28px"
                    style="margin-bottom: 3px"
                  />
                  By Proceeding I agree to Mangohomz
                  <a
                    class="text-bold text-primary"
                    @click="userAgreementDialog = true"
                    href="#"
                    >User Terms & Condition</a
                  >, with
                  <a
                    class="text-bold text-primary"
                    @click="privacyPolicyDialog = true"
                    href="#"
                    >Privacy</a
                  >,
                  <a
                    class="text-bold text-primary"
                    @click="cancellationDialog = true"
                    href="#"
                    >Cancellation</a
                  >
                  &
                  <a
                    class="text-bold text-primary"
                    @click="refundDialog = true"
                    href="#"
                    >Refund</a
                  >
                  policy.
                </p>
              </div>
              <div class="row justify-center">
                <q-btn
                  color="positive"
                  label="PROCEED TO PAY"
                  style="font-family: verdana; font-size: 12px"
                  class="text-bold"
                  label-color="black"
                  :disable="this.terms_conditions == false"
                  @click="submitEquipmentBookingData()"
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <q-dialog v-model="userAgreementDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div
              class="text-h6 text-bold text-center text-primary"
              style="font-family: verdana; font-size: 18px"
            >
              User Agreement
            </div>
          </q-card-section>
          <q-card-section>
            <div style="font-family: verdana; font-size: 12px">
              <strong>MANGOHOMZ (MH)</strong> coordinates medical trips around
              the world and is bridging the gap between patient and the
              hospital, it provides patient friendly accommodation, food
              facility, travel facility near medical hubs to medical travelers.
              <strong>MANGOHOMZ (MH)</strong> is not a medical professional and
              does not have any hired medical professionals working for their
              company to provide medical advice or make any medical
              recommendations, before or during medical trip. All information
              provided by <strong>MANGOHOMZ (MH)</strong>
              and its staff is strictly for informative and educational guidance
              and should not be interpreted as medical advice.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              By using
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >
              – <strong>MANGOHOMZ (MH)</strong> Online Website for Medical
              Tourism, you hereby agree to be bound by all the terms and
              conditions contained in this User Agreement ("Agreement").
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >
              – <strong>MANGOHOMZ (MH)</strong> reserves the right at its
              discretion to change the Terms of this Agreement and will provide
              notice of any such changes by online posting. Your continued use
              of
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >
              – <strong>MANGOHOMZ (MH)</strong> Online Web site after the
              posting of any notice of change in terms shall constitute your
              agreement to be bound by any such changes
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              This User Agreement along with Terms Of Service (collectively, the
              "User Agreement") forms the terms and conditions for the use of
              services and products of MangoHomz(MH)
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any person ("User") who inquiries about or purchases any products
              or services of <strong>MANGOHOMZ (MH)</strong> through its
              websites, mobile applications, sales persons, offices, call
              centers, branch offices, franchisees, agents etc. (all the
              aforesaid platforms collectively referred to as "Sales Channels")
              agree to be governed by this User Agreement. The websites and the
              mobile applications of <strong>MANGOHOMZ (MH)</strong> are
              collectively referred to as 'Website’ shall include channel
              Partners viz Accommodation Partner, Booking Agent Partner, Food
              Partner, Medicine & Medical Equipment Partner, Travel Partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Both User and <strong>MANGOHOMZ (MH)</strong> are individually
              referred to as 'Party' and collectively referred to as 'Parties'
              to the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Terms of Service" available on <strong>MANGOHOMZ (MH)</strong>'s
              website details out terms & conditions applicable on various
              services or products facilitated by
              <strong>MANGOHOMZ (MH)</strong>. The User should refer to the
              relevant Terms of Service applicable for the given product or
              service as booked by the User. Such Terms of Service are binding
              on the User
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              ELIGIBILITY TO USE
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User must be atleast 18 years or above age and is legally
              authorized to enter into an agreement so as become a User and use
              the services of <strong>MANGOHOMZ (MH)</strong>.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong>, reserve the right to terminate
              membership and/or block access to the Website if it is discovered
              that a minor or a person incompetent to contract according to the
              law or any information pertaining to age entered at the time of
              creation of account is false.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Before using the Website, approaching any Sales Channels or
              procuring the services of <strong>MANGOHOMZ (MH)</strong>, the
              Users shall compulsorily read and understand this User Agreement,
              and shall be deemed to have accepted this User Agreement as a
              binding document that governs User's dealings and transactions
              with <strong>MANGOHOMZ (MH)</strong>. If the User does not agree
              with any part of this Agreement, then the User must not avail
              <strong>MANGOHOMZ (MH)</strong>'s services and must not access or
              approach the Sales Channels of <strong>MANGOHOMZ (MH)</strong>
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              All rights and liabilities of the User and
              <strong>MANGOHOMZ (MH)</strong> with respect to any services or
              product facilitated by <strong>MANGOHOMZ (MH)</strong>
              shall be restricted to the scope of this User Agreement.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              CONTENT
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              All content provided through various Sales Channels, including but
              not limited to audio, images, software, text, icons and such
              similar content ("Content"), are registered by
              <strong>MANGOHOMZ (MH)</strong> and protected under applicable
              intellectual property laws. User cannot use this Content for any
              other purpose, except as specified herein.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User agrees to follow all instructions provided by
              <strong>MANGOHOMZ (MH)</strong>
              which will prescribe the way such User may use the Content.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              There are a number of proprietary logos, service marks and
              trademarks displayed on the Website and through other Sales
              Channels of <strong>MANGOHOMZ (MH)</strong>, as may be applicable.
              <strong>MANGOHOMZ (MH)</strong>
              does not grant the User a license, right or authority to utilize
              such proprietary logos, service marks, or trademarks in any
              manner. Any unauthorized use of the Content, will be in violation
              of the applicable law.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> respects the intellectual property
              rights of others. If you notice any act of infringement on the
              Website, you may inform <strong>MANGOHOMZ (MH)</strong>, at
              <a
                class="text-bold text-primary"
                href="https://www.mangohomz.com/#/"
                target="_blank"
                >www.MangoHomz.com
              </a>
              Website. The Website is meant to be used by bonafide User(s) for a
              lawful use
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User shall not distribute exchange, modify, sell or transmit
              anything from the Website, including but not limited to any text,
              images, audio and video, for any business, commercial or public
              purpose.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User Agreement grants a limited, non-exclusive,
              non-transferable right to use this Website as expressly permitted
              in this User Agreement. The User agrees not to interrupt or
              attempt to interrupt the operation of the Website in any manner
              whatsoever.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Access to certain features of the Website may only be available to
              registered User(s). The process of registration may require the
              User to answer certain questions or provide certain information
              that may or may not be personal in nature. Some such fields may be
              mandatory or optional. User represents and warrants that all
              information supplied to <strong>MANGOHOMZ (MH)</strong> is true
              and accurate.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User/Participant/Patient or his/her family
              members/relatives/escorts/friends making the booking on behalf of
              the Participant/Patient shall read carefully the terms and
              conditions mentioned herein before filling and signing the
              registration form. The User/Participant/Patient (and his/her
              family members/relatives /escorts/ friends making the booking on
              behalf of the Participant/Patient) shall sign this document. The
              signing of the terms & conditions document by the
              User/Participant/Patient (and his/her family
              members/relatives/escorts/friends making the booking on behalf of
              the Participant/Patient) shall mean acceptance in totality of the
              terms and conditions contained herein by the Participant/Patient
              (and his/her family members/relatives/escorts/friends making the
              booking on behalf of the Participant/Patient). The signed terms &
              conditions documents with payment receipt shall be binding on the
              Participant/Patient (and his/her family members/
              relatives/escorts/friends making the booking on behalf of the
              User/Participant/ Patient) and shall constitute a contract between
              MANGOHOMZ and the User/Participant/Patient (and his/her
              family/members/relatives/escorts/friends making the booking on
              behalf of the Participant / Patient) on the Participant / Patient
              (and his / her family members / relatives / escorts / friends
              making the booking on behalf of the Participant / Patient) signing
              the terms and conditions document and making payment towards the
              Package.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> does not control or operate any
              services of any Channel partner, neither does it operate or
              control any facility or service provided by the Channel partner
              mentioned in the Medical Treatment Package. MANGOHOMZ takes care
              in selecting all the ingredients required by Medical Traveler and
              has no control whatsoever in running the Channel partner.
              MANGOHOMZ cannot be made liable / responsible for any delay,
              default, failure, improper services / deficiency in services
              provided by the Channel partner and / or for any injury, sickness,
              accident, discomfort, death, loss or damage of any kind whatsoever
              which may arise due to any act of negligence, deficiency or
              default in services, of the management or employees of the Channel
              partner.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> reserves the right, in its sole
              discretion, to terminate the access to the Website and the
              services offered on the same or any portion thereof at any time,
              without notice, for general maintenance or any other reason
              whatsoever.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> will always make its best
              endeavours to ensure that the content on its websites or other
              sales channels are free of any virus or such other malwares.
              However, any data or information downloaded or otherwise obtained
              through the use of the Website or any other Sales Channel is done
              entirely at the User's own discretion and risk and they will be
              solely responsible for any damage to their computer systems or
              loss of data that may result from the download of such data or
              information.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              TERMS OF SERVICE
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> Platform provides the user with:
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              a. Accommodation partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              b. Travel partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              c. Food partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              d. Booking Agent Partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              e. Medicine & Medical Equipment Partner
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              A. <strong>MANGOHOMZ (MH)</strong> Platform is primarily
              responsible for providing a comfortable room stay, travel facility
              to medical hub and other connected facility for ensuring the
              acceptability of the services as promised by
              <strong>MANGOHOMZ (MH)</strong> to its customers on behalf of its
              partner. <strong>MANGOHOMZ (MH)</strong> has right to direct the
              Accommodation owner to provide the room stay services along with
              other adequate facility as promised for, to
              <strong>MANGOHOMZ (MH)</strong>’s medical travelers.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              B. <strong>MANGOHOMZ (MH)</strong> understands the needs and
              requirements of Medical Traveler and accordingly offers stay and
              other connected facilities of Medical Traveler near
              hospital/Treating Institution through its platform to service its
              medical travelers.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              C <strong>MANGOHOMZ (MH)</strong> markets the room stays,
              providing its medical travelers with the room booking voucher that
              entitles them to avail Hotel stay service in
              <strong>MANGOHOMZ (MH)</strong> branded rooms provided by our
              Channel partners as per terms agreed with
              <strong>MANGOHOMZ (MH)</strong>.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              D. In case medical travelers are not able to select the facilities
              from our website, they can call our customer support desk and our
              team will help you find a suitable accommodation/facility within
              preferred budget and amenities near the Medical hub
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              E. If any check-in is denied for a confirmed booking, MANGOHOMZ MH
              shall ensure that User is provided with an alternate accommodation
              of comparable standards. In an event, where the alternate
              accommodation could not be provided, MANGOHOMZ MH shall arrange
              for the refund (as per <strong>MANGOHOMZ (MH)</strong>)
              <a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >refund Policy</a
              >
              of any pre-booking amount collected from the User
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              F. MANGOHOMZ MH also promises its Users of a comfortable travel,
              room stay, requisite medical equipment and support at all its
              MANGOHOMZ MH branded channels.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              G. For any default in service user can reach out to us by:
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              a. Writing to us on the MANGOHIMZ (MH) support page
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              b. Calling us on our 24X7 guest support helpline
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              Our guest support team will ensure the best and resolve your
              concern.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              H. MANGOHIMZ MH stays involved with the Users right from the time
              when booking is made through MANGOHIMZ MH platform and throughout
              the hotel stays, ensuring that the User gets a comfortable room
              stay experience.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              LIMITED LIABILITY OF MANGOHOMZ
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Unless <strong>MANGOHOMZ (MH)</strong> explicitly acts as a
              reseller in certain scenarios,
              <strong>MANGOHOMZ (MH)</strong> always acts as a facilitator by
              connecting the User with the respective service providers
              (Property Partner - Food Partner -Medical Equipment Partner-
              Travel Partner providing vehicle as and when required)– Booking
              Agent partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong>'s liability is limited to
              providing the User with a confirmed booking as selected by the
              User.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any issues or concerns faced by the User at the time of availing
              any such services shall be the sole responsibility of the Service
              Provider. <strong>MANGOHOMZ (MH)</strong> liability shall be
              limited to the arrangement of service, liability with respect to
              quality of services shall lie with the accommodation partner. Any
              acts, omissions, errors, representations, warranties, breaches or
              negligence on part of any Service Provider shall be his
              responsibility
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Unless explicitly committed by <strong>MANGOHOMZ (MH)</strong> as
              a part of any product or service:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> assumes no liability for the
              standard of services as provided by the respective Service
              Providers.
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              • <strong>MANGOHOMZ (MH)</strong> provides no guarantee with
              regard to their quality or fitness as represented.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              • <strong>MANGOHOMZ (MH)</strong> doesn't guarantee the
              availability of any services as listed by a Service Provider.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              By making a booking, User understands
              <strong>MANGOHOMZ (MH)</strong> merely provides a technology
              platform for booking of services and products and the ultimate
              liability rests on the respective Service Provider and not
              <strong>MANGOHOMZ (MH)</strong>. Thus the ultimate contract of
              service is between User and Service Provider.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User further understands that the information displayed on the
              Website with respect to any service is displayed as furnished by
              the Service Provider. <strong>MANGOHOMZ (MH)</strong>, therefore
              cannot be held liable in case if the information provided by the
              Service Provider is found to be inaccurate, inadequate or obsolete
              or in contravention of any laws, rules, regulations or directions
              in force.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              USERS RESPONSIBILITY
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Users are advised to check the description of the services and
              products carefully before making a booking. User(s) agree to be
              bound by all the conditions as contained in booking confirmation
              or as laid out in the confirmed booking voucher. These conditions
              are also to be read in consonance with the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If a User intends to make a booking on behalf of another person,
              it shall be the responsibility of the User to inform such person
              about the terms of this Agreement, including all rules and
              restrictions applicable there to.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User undertakes to abide by all procedures and guidelines, as
              modified from time to time, in connection with the use of the
              services available through <strong>MANGOHOMZ (MH)</strong>. The
              User further undertakes to comply with all applicable laws,
              regulations, orders, directions etc. issued by either the Central
              Government, State Government, District Authorities or any other
              statutory body empowered to do so w.r.t use of services or for
              each transaction.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The services are provided on an "as is" and "as available" basis.
              <strong>MANGOHOMZ (MH)</strong> may change the features or
              functionality of the services being provided at any time, in its
              sole discretion, without any prior notice.
              <strong>MANGOHOMZ (MH)</strong> expressly disclaims all warranties
              of any kind, whether express or implied, including, but not
              limited to the implied warranties of merchantability, reasonably
              fit for all purposes. No advice or information, whether oral or
              written, which the User obtains from
              <strong>MANGOHOMZ (MH)</strong> or through the services opted
              shall create any warranty not expressly made herein or in the
              terms and conditions of the services.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User also authorizes <strong>MANGOHOMZ (MH)</strong>'s
              representative to contact such user over phone, message and email.
              This consent shall supersede any preferences set by such User
              through national customer preference register (NCPR) or any other
              similar preferences.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              FEES AND PAYMENT
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> further reserves the right to
              alter any and all fees from time to time. Any such additional
              fees, including fee towards any modifications there of, will be
              displayed to the User before confirming the booking or collecting
              the payment from such User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In cases of short charging of the booking amount, taxes, statutory
              fee, convenience fee etc., owing to any technical error or other
              reason, <strong>MANGOHOMZ (MH)</strong> shall reserve the right to
              deduct, charge or claim the balance amount from the User and the
              User shall pay such balance amount to
              <strong>MANGOHOMZ (MH)</strong>. In cases where the short charge
              is claimed prior to the utilization of the booking,
              <strong>MANGOHOMZ (MH)</strong> will be at liberty to cancel such
              bookings if the amount is not paid before the utilization date.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any increase in the price charged by
              <strong>MANGOHOMZ (MH)</strong> on account of change in rate of
              taxes or imposition of new taxes, levies by Government shall have
              to be borne by the User. Such imposition of taxes, levies may be
              without prior notice and could also be retrospective but will
              always be as per applicable law.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In the rare circumstance of a booking not getting confirmed for
              any reason whatsoever, <strong>MANGOHOMZ (MH)</strong> will
              process the refund of the booking amount paid by the User and
              intimate the User about the same.
              <strong>MANGOHOMZ (MH)</strong> is not under any obligation to
              provide an alternate booking in lieu of or to compensate or
              replace the unconfirmed booking. All subsequent bookings will be
              treated as new transactions. Any applicable refund will be
              processed as per the defined policies of the service provider and
              <strong>MANGOHOMZ (MH)</strong> as the case may be. (<a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >Refund Policy</a
              >)
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User shall be completely responsible for all charges, fees,
              duties, taxes, and assessments arising out of the use of the
              service, as per the applicable laws
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees and understands that all payments shall only be
              made to bank accounts of <strong>MANGOHOMZ (MH)</strong>.
              <strong>MANGOHOMZ (MH)</strong> or its agents, representatives or
              employees shall never ask a customer to transfer money to any
              private account or to an account not held in the name of
              <strong>MANGOHOMZ (MH)</strong>. The User agrees that if that user
              transfers any amount against any booking or transaction to any
              bank account that is not legitimately held by
              <strong>MANGOHOMZ (MH)</strong> or to any personal account of any
              person, <strong>MANGOHOMZ (MH)</strong> shall not be held liable
              for the same. User shall not hold any right to recover from
              <strong>MANGOHOMZ (MH)</strong> any amount which is transferred by
              the User to any third party.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User will not share his personal sensitive information like
              credit/debit card number, CVV, OTP, card expiry date, user IDs,
              passwords etc. with any person including the agents, employees or
              representatives of <strong>MANGOHOMZ (MH)</strong>. The User shall
              immediately inform <strong>MANGOHOMZ (MH)</strong> if such details
              are demanded by any of its agents' employees or representatives.
              <strong>MANGOHOMZ (MH)</strong> shall not be liable for any loss
              that the User incurs for sharing the aforesaid details.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Refunds, if any, on cancelled bookings will always be processed to
              the respective account or the banking instrument (Credit Card,
              <strong>MANGOHOMZ (MH)</strong> wallet etc) from which payment was
              made for that booking
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Booking(s) made by the User through
              <strong>MANGOHOMZ (MH)</strong> are subject to the applicable
              <a
                class="text-bold text-primary"
                @click="cancellationDialog = true"
                href="#"
                >Cancellation</a
              >
              &
              <a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >refund policy </a
              >.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> provides various modes of making
              payments on the Website for transacting, like UPI, Credit/Debit
              Cards of various banks, Net Banking facility of all major banks,
              <strong>MANGOHOMZ (MH)</strong> and third-party Wallets, Gift
              Cards, EMI and more.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              OBLIGATION TO OBTAIN VISA
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              International bookings can be made through
              <strong>MANGOHOMZ (MH)</strong> irrespective of VISA. Arrangement
              of VISA in any case is not the responsibility of
              <strong>MANGOHOMZ (MH)</strong>. OK TO BOARD permission are to be
              obtained by the User as per the requirement of their travel
              bookings and the requirements of the countries the User intends to
              visit or transit through.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> is not responsible for any issues,
              including inability to travel, arising out of visa requirements
              and is also not liable to refund any amount to the User for being
              unable to utilize the booking due to absence or denial of visa,
              Refund, if any, will be as per the applicable terms of booking and
              <a
                class="text-bold text-primary"
                @click="cancellationDialog = true"
                href="#"
                >Cancellation</a
              >
              &
              <a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >refund policy</a
              >
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Force Majure:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              There can be exceptional circumstances where
              <strong>MANGOHOMZ (MH)</strong> and / or the Service Providers may
              be unable to honor the confirmed bookings due to various reasons
              like act of God, labor unrest, insolvency, a pandemic, an
              epidemic, business exigencies, government decisions, terrorist
              activity, any operational and technical issues, route and flight
              cancellations etc. or any other reason beyond the control of
              <strong>MANGOHOMZ (MH)</strong> . If
              <strong>MANGOHOMZ (MH)</strong> has advance knowledge of any such
              situations where dishonor of bookings may happen, it will make its
              best efforts to provide similar alternative to the User or refund
              the booking amount after deducting applicable service charges, if
              supported and refunded by that respective service operators. The
              User agrees that <strong>MANGOHOMZ (MH)</strong> being merely a
              facilitator of the services and products booked cannot be held
              responsible for any such Force Majeure circumstance. There can’t
              be any direct interaction between service providers and user MH
              will be the only point of interaction for users
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees that in the event of non-confirmation of booking
              due to any technical reasons (like network downtime, disconnection
              with third party platforms such as payment gateways, banks etc.)
              or any other similar failures, <strong>MANGOHOMZ (MH)</strong> ’s
              obligation shall be limited to refunding the booking amount, if
              any, received from the customer. Such refund shall completely
              discharge <strong>MANGOHOMZ (MH)</strong> from all liabilities
              with respect to that transaction. Additional liabilities, if any,
              shall be borne by the User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In no event shall <strong>MANGOHOMZ (MH)</strong> and be liable
              for any direct, indirect, punitive, incidental, special or
              consequential damages, and any other damages like damages for loss
              of use, data or profits, arising out of or in any way connected
              with the use or performance of the Website or any other Sales
              Channel.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO REFUSE
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> at its sole discretion reserves
              the right to not accept any booking without assigning any reason
              thereof.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> will not provide any service or
              share confirmed booking details till such time the complete
              consideration is received from the User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In addition to other remedies and recourse available to
              <strong>MANGOHOMZ (MH)</strong> under this User Agreement or under
              applicable law, <strong>MANGOHOMZ (MH)</strong> may limit the
              User's activity, warn other users of the User's actions,
              immediately suspend or terminate the User's registration, or
              refuse to provide the User with access to the Website if:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User is in breach of this User Agreement; or
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • <strong>MANGOHOMZ (MH)</strong>is unable to verify or
              authenticate any information provided by the User; or
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> believes that the User's actions
              may infringe on any third-party rights or breach any applicable
              law or otherwise result in any liability for the User, other users
              of <strong>MANGOHOMZ (MH)</strong> , or
              <strong>MANGOHOMZ (MH)</strong> itself.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Once a User has been suspended or terminated, such User shall not
              register or attempt to register with
              <strong>MANGOHOMZ (MH)</strong> with different credentials, or use
              the Website in any manner whatsoever until such User is reinstated
              by <strong>MANGOHOMZ (MH)</strong>.
              <strong>MANGOHOMZ (MH)</strong> may at any time in its sole
              discretion reinstate suspended users.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If a User breaches this User Agreement,
              <strong>MANGOHOMZ (MH)</strong> reserves the right to recover any
              amounts due to be paid by the User to
              <strong>MANGOHOMZ (MH)</strong>, and to take appropriate legal
              action as it deems necessary.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO REFUSAL BY END SERVICE PROVIDER
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User agrees that the end service provider may refuse to provide
              the service(s), agreed to be provided to the User, for any booking
              made through <strong>MANGOHOMZ (MH)</strong> with/without
              assigning any reasons or owing to reasons including but not
              limited to behavioral issues, public safety, health hazards,
              infectious diseases, government orders/notification etc. In such
              scenarios of refusal, the liability that may ensue shall solely
              vest with the end service provider as it is outside the purview of
              <strong>MANGOHOMZ (MH)</strong> and the User agrees that any
              claim, refund or damages against such refusal shall be as per
              <strong>MANGOHOMZ (MH) </strong>
              <a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >refund policy</a
              >.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO CANCEL
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User expressly undertakes to provide
              <strong>MANGOHOMZ (MH)</strong> with correct and valid information
              while making use of the Website under this User Agreement, and not
              to make any misrepresentation of facts. Any default on part of the
              User would disentitle the User from availing the services from
              <strong>MANGOHOMZ (MH)</strong> .
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In case <strong>MANGOHOMZ (MH)</strong> discovers or has reasons
              to believe at any time during or after receiving a request for
              services from the User that the request for services is either
              unauthorized or the information provided by the User or any of the
              travelers is not correct or that any fact has been misrepresented
              by that User, <strong>MANGOHOMZ (MH)</strong> shall be entitled to
              appropriate legal remedies against the User, including
              cancellation of the bookings, without any prior intimation to the
              User. In such an event, <strong>MANGOHOMZ (MH)</strong> shall not
              be responsible or liable for any loss or damage that may be caused
              to the User or any other person in the booking, as a consequence
              of such cancellation of booking or services.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If any judicial, quasi-judicial, investigation agency, government
              authority approaches <strong>MANGOHOMZ (MH)</strong> to cancel any
              booking, <strong>MANGOHOMZ (MH)</strong> will cancel the same
              without approaching the concerned User whose booking has been
              cancelled.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User shall not hold
              <strong>MANGOHOMZ (MH)</strong> responsible for any loss or damage
              arising out of measures taken by
              <strong>MANGOHOMZ (MH)</strong> for safeguarding its own interest
              and that of its genuine customers. This would also include
              <strong>MANGOHOMZ (MH)</strong> denying or cancelling any bookings
              on account of suspected fraud transactions.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              INDEMNIFICATION
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees to indemnify, defend and hold harmless
              <strong>MANGOHOMZ (MH)</strong> , its affiliates and their
              respective officers, directors, lawful successors and assigns from
              and against any and all losses, liabilities, claims, damages,
              costs and expenses (including legal fees and disbursements in
              connection therewith and interest chargeable thereon) asserted
              against or incurred by such indemnified persons, that arise out
              of, result from, or may be payable by virtue of, any breach of any
              representation or warranty provided by the User, or
              non-performance of any covenant by the stay User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User shall be solely liable for any breach of any country
              specific rules and regulations or general code of conduct and
              MANGOHOMZ (MH) cannot be held responsible for the same.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              MISCLLEANEOUS
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              SEVERABILITY: If any provision of this User Agreement is
              determined to be invalid or unenforceable in whole or in part,
              such invalidity or unenforceability shall attach only to such
              provision or part of such provision and the remaining part of such
              provision and all other provisions of this User Agreement shall
              continue to be in full force and effect.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              JURISDICTION: This Agreement is subject to interpretation as per
              the laws of India, and the parties shall refer any unresolved
              disputes to the exclusive jurisdiction of courts situated in MH
              administrative areas as Bengaluru, Delhi and Mumbai.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              AMENDMENT TO THE USER AGREEMENT:
              <strong>MANGOHOMZ (MH)</strong> reserves the right to change the
              User Agreement from time to time. The User is responsible for
              regularly reviewing the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              CONFIDENTIALITY: Any information which is specifically mentioned
              by MANGOHOMZ as confidential shall be maintained confidentially by
              the User and shall not be disclosed unless as required by law or
              to serve the purpose of this User Agreement and the obligations of
              both the parties herein.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              FEEDBACK FROM CUSTOMER: <strong>MANGOHOMZ (MH)</strong> would like
              to know the feedback of the Users for improving its services. The
              User hereby authorizes MANGOHOMZ to contact the User for their
              feedback on various services offered by MANGOHOMZ. Such feedback
              may be collected through emails, telephone calls, SMS or any other
              medium from time to time. In case the User chooses not to be
              contacted, such User shall write to MANGOHOMZ for specific
              exclusion at
              <a
                class="text-bold text-primary"
                @click="privacyPolicyDialog()"
                href="#"
                >privacy@MANGOHOMZ.com</a
              >
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              PRIVACY POLICY: User shall also refer to MANGOHOMZ's
              <a
                class="text-bold text-primary"
                @click="privacyPolicyDialog = true"
                href="#"
                >Privacy policy</a
              >
              available on MANGOHOMZ's website which governs use of the
              Websites. By using the Website, User agrees to the terms of the
              Privacy Policy and accordingly consents to the use of the User’s
              personal information by MANGOHOMZ and its affiliates in accordance
              with the terms of the Privacy policy.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              GRIEVANCE REDRESSAL: MANGOHOMZ strongly believes in resolving the
              issues raised by the User(s). In the event if user feels that it’s
              concern has not been resolved to it’s satisfaction, User may
              contact our
              <a class="text-bold" href="#" @click="openGrievanceDialog()"
                >grievance officer</a
              >
              who shall Endeavour to redress the concern within 30 working days
              from the date of escalation. To reach the Grievance Officer please
              use this
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >

              to submit the details. User(s) are advised to escalate to the
              grievance officer only when they have already raised their
              complaint which has not been resolved to their satisfaction, or
              their concern has not been resolved within 30 working days from
              the date of ticket generation. User(s) will be required to share
              their booking reference number and the ticket ID generated for
              their complaint, for any escalations to the Grievance Officer
              through this
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="grievanceDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div
              class="text-h6 text-bold text-center text-black"
              style="
                font-family: verdana;
                font-size: 14px;
                text-decoration: underline;
              "
            >
              MANGOHOMZ (MH) GRIEVANCE REDRESSAL FORM
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form
              class="q-gutter-md"
              @submit="onGrievanceSubmit"
              ref="grievanceForm"
            >
              <q-input
                dense
                outlined
                v-model="grievanceForm.name"
                autofocus
                @keyup.enter="prompt = false"
                label="Name"
                :rules="[required('Name')]"
                style="padding-bottom: 5px"
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.mobile_no"
                @keyup.enter="prompt = false"
                label="Mobile No"
                lazy-rules
                mask="##########"
                style="padding-bottom: 5px"
                :rules="[required('Phone no'), phone()]"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.email_id"
                @keyup.enter="prompt = false"
                label="Email-ID"
                style="padding-bottom: 5px"
                :rules="[required('Email'), email()]"
                ><template v-slot:prepend>
                  <q-icon name="email" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.mh_booking_id"
                autofocus
                @keyup.enter="prompt = false"
                label="MangoHomz Booking ID"
                :rules="[required('MH Booking ID')]"
                style="padding-bottom: 5px"
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                label="Date"
                class="col-3"
                v-model="grievanceForm.date"
                @click="$refs.qDateProxy.show()"
                :rules="[required('Date To')]"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      color="secondary"
                      ref="qDateProxy"
                      minimal
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        minimal
                        mask="DD/MM/YYYY"
                        v-model="grievanceForm.date"
                        :options="optionsFn"
                        @input="closeDialog"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="black"
                            minimal
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.address"
                autofocus
                @keyup.enter="prompt = false"
                label="Address"
                :rules="[required('address')]"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-city" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.comment"
                type="textarea"
                @keyup.enter="prompt = false"
                style="padding-bottom: 5px"
                label="Complain/Suggestion/Feedback"
                :rules="[required('Complain/Suggestion/Feedback')]"
                ><template v-slot:prepend>
                  <q-icon name="mdi-comment-quote" color="secondary" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-actions align="right" class="text-secondary">
            <q-btn
              push
              outline
              class="text-secondary"
              label="Submit"
              color="secondary"
              @click="onGrievanceSubmit"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="privacyPolicyDialog">
        <q-card style="min-width: 350px">
          <q-card-section class="row col-12">
            <div
              class="col-11 text-h6 text-bold text-center text-primary"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              PRIVACY POLICY
            </div>
            <div>
              <q-btn
                dark
                padding="none"
                class="justify-end"
                icon="close"
                color="primary"
                @click="closePrivacyPolicyDialog"
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> is committed to protecting your
              information. This privacy notice provides details about the
              information collected about you, how is it used and how it is
              protected. It also explains your rights and how to contact us if
              you have questions about how the information provided by you is
              used.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Scope of our privacy notice
            </div>
            <div style="font-family: verdana; font-size: 12px">
              This notice applies to anyone who interacts with us in relation to
              our products and services (“you”, “your”), via any channel (e.g.
              app, website, email, phone, walk-ins to MangoHomz accommodations,
              booking an MangoHomz accommodation etc.). We may give you
              additional privacy notices if required for specific interactions.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you book a stay / services through us at one of our partners’
              guest houses, hotels, other lodgings, transport or any other
              service, that partner will use your personal data as shown in
              their privacy notice.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Ways in which we obtain personal information
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We obtain personal information from you and from hospitals and
              from others who book accommodation or any other service for you.
              Where you provide us with information about other individuals
              (e.g. the names of others who you will stay at the accommodation
              you book), you must ensure that the privacy policy is seen by them
              and they are comfortable with you doing this.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Categories of personal information
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We process two categories of personal information about you
              and/or, where applicable, others whom you have booked
              accommodation or any other service for, namely:
            </div>
            <div style="font-family: verdana; font-size: 12px">
              <ul>
                <li>
                  Standard personal information (e.g. information we use to
                  contact you, identify you or manage our relationship with
                  you); and
                </li>
                <li>
                  Special categories of information (e.g. your preference of
                  food in general, medical condition and its requirements,
                  specific schedules etc).
                </li>
              </ul>
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
              "
            >
              Purposes and lawful grounds of our processing personal information
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We process your personal information for the purposes set out in
              this notice, based on the legal grounds. Different legal grounds
              apply depending on what category of personal information we
              process. Standard personal information is normally processed by us
              on the basis that it is necessary for the performance of a
              contract, our or a third parties’ legitimate interests or law.
              Further information about this and special category processing
              grounds is set out below.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Legitimate interests
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We process your personal information for a number of legitimate
              interests, including providing you with services, administering
              our relationship with you, for marketing and service/product
              improvement purposes and in order to exercise our rights or handle
              claims. More detailed information about our legitimate interests
              is set out below.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Marketing and Preferences
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We use your personal information to send you marketing by post,
              telephone, social media platforms, email, SMS, application
              notifications and silent notifications to track installation
              status of the application. We may also use your personal
              information to carry out online paid marketing activities in the
              nature of retargeting.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We also use technology to help us understand your personal
              preferences and interests so that we can send recommendations and
              marketing communications that are likely to be of more interest to
              you. Using technology in this way is sometimes known as profiling.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you wish to unsubscribe from emails sent by us, you can do so
              at any time by clicking on the "unsubscribe" link that appears in
              all emails and by adjusting the settings on your device to turn
              off notifications from our app. Otherwise, you can always contact
              us at dataprotection@Mangohomz.com to update your contact
              preferences. You may also object to profiling relating to direct
              marketing by contacting us at dataprotection @Mangohomz.com.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Registration on the Website: 
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Information which you provide while subscribing to or registering
              on the Website, including but not limited to information about
              your personal identity such as name, gender, marital status,
              religion, age, profile picture etc., your contact details such as
              your email address, postal addresses, frequent flyer number,
              telephone (mobile or otherwise) and/or fax numbers. The
              information may also include information such as your banking
              details (including credit/debit card) and any other information
              relating to your income and/or lifestyle; billing information
              payment history etc. (as shared by you).
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Other information:
            </div>
            <div style="font-family: verdana; font-size: 12px">
              <ul>
                <li>
                  Transactional history (other than banking details) about your
                  e-commerce activities, buying behavior.
                </li>
                <li>
                  Your usernames, passwords, email addresses and other
                  security-related information used by you in relation to our
                  Services.
                </li>
                <li>
                  Data either created by you or by a third party and which you
                  wish to store on our servers such as image files, documents
                  etc.
                </li>
                <li>
                  Data available in public domain or received from any third
                  party including social media channels, including but not
                  limited to personal or non-personal information from your
                  linked social media channels (like name, email address, friend
                  list, profile pictures or any other information that is
                  permitted to be received as per your account settings) as a
                  part of your account information.
                </li>
                <li>
                  Information pertaining any other traveler(s) for who you make
                  a booking through your registered MANGOHOMZ account. In such
                  case, you must confirm and represent that each of the other
                  traveler(s) for whom a booking has been made, has agreed to
                  have the information shared by you disclosed to us and further
                  be shared by us with the concerned service provider(s).
                </li>
                <li>
                  If you request MANGOHOMZ to provide visa related services,
                  then copies of your passport, bank statements, originals of
                  the filled in application forms, photographs, and any other
                  information which may be required by the respective embassy to
                  process your visa application.
                </li>
                <li>
                  For international bookings, Users, in compliance with the
                  Liberalized Remittance Scheme(LRS) of RBI or any other law may
                  be required to provide details such as their PAN information
                  or passport details number or any such information required by
                  Service Provider. Such information shall be strictly used as
                  per the aforesaid requirements only. In case a User does not
                  wish to provide this information, MANGOHOMZ may not be able to
                  process the booking. MANGOHOMZ will never share User’s PAN
                  details without their prior consent unless otherwise such
                  action is required by any law enforcement authority for
                  investigation, by court order or in reference to any legal
                  process.
                </li>
                <li>
                  In case you opt for contactless check-in at Hotels, then
                  copies of your government identification like Aadhar, driving
                  license, election card etc., Self-declaration and any other
                  information like date of birth, destination/origin of travel
                  and place of residence that may be required by the concerned
                  Hotel to honor your hotel booking.
                </li>
                <li>
                  For international bookings, Users, in compliance with the
                  Liberalized Remittance Scheme (LRS) of RBI or any other law
                  may be required to provide details such as their PAN
                  information or passport details number or any such information
                  required by Service Provider.
                </li>
                <li>
                  In case you opt for contactless check-in at Hotels, then
                  copies of your government identification like Aadhar, driving
                  license, election card etc., Self-declaration and any other
                  information like date of birth, destination/origin of travel
                  and place of residence that may be required by the concerned
                  Hotel to honor your hotel booking.
                </li>
              </ul>
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Such information shall be strictly used for the aforesaid
              specified & lawful purpose only. User further understands that
              MANGOHOMZ may share this information with the end service provider
              or any other third party for provision and facilitation of the
              desired booking. MANGOHOMZ will always redact all/any sensitive &
              confidential information contained in the vaccination certificate,
              passbook, bank statement or any other identity card submitted for
              the purpose of availing a service, promotional offer or booking a
              product on the Website. In case a User does not wish to provide
              this information or opts for deletion of the information already
              provided, MANGOHOMZ may not be able to process the desired booking
              request. MANGOHOMZ will never share any of the above information
              collected including PAN card details, Passport details, Aadhar
              Card details without their prior consent unless otherwise such
              action is required by any law enforcement authority for
              investigation, by court order or in reference to any legal
              process.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Analytics and Advertising Services Provided by Others
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Third parties provide us with audience measurement and analytics
              services that analyze your online interactions (both with the
              MangoHomz(MH) and other websites), serve you with tailored
              marketing and report on the performance of that marketing. We also
              use Google Place API to make suggestions based on your location or
              search strings.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              MangoHomz is using Google Place API for place prediction. Please
              refer to their privacy policy
              <a
                class="text-bold text-primary"
                href="http://www.google.com/privacy.html"
                target="_blank"
                >http://www.google.com/privacy.html</a
              >.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Sharing your information
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We share your information within MangoHomz Group and with others
              who help us provide services to you (e.g. your accommodation
              provider). We also share your information in accordance with the
              law.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              For more information on who we share your information with,
              (please expand this section naming the groups you will share)We
              share your information for the purposes set out in this privacy
              policy, with the following categories of recipients:
            </div>
            <div style="font-family: verdana; font-size: 12px">
              <ul>
                <li>Other members of the Mangohomz;</li>
                <li>
                  With accommodation managers to enable them to provide the
                  services you request, e.g. we share your name and expected
                  check-in time;
                </li>
                <li>
                  Third party suppliers who help deliver products or services on
                  our behalf, or who have partnered with Mangohomz in connection
                  with services or a relevant promotional offering, as well as
                  other apps or websites that integrate with our API or
                  Services, or those with an API or Service with which we
                  integrate;
                </li>
                <li>Your contact if you use a referral feature;</li>
                <li>
                  The general public, if you submit content in a public forum,
                  such as blog comments, social media posts, or other features
                  of our services that are obviously viewable by the general
                  public. For example, you may choose to use social sharing
                  features and related tools which let you share your Mangohomz
                  experience with other apps, sites, or media, and vice versa.
                  Your use of these features enables the sharing of information
                  with your friends or the public, depending on your social
                  sharing service settings. Please refer to the privacy policies
                  of those social sharing services for more information about
                  how they handle the data you provide to or share through them;
                </li>
                <li>
                  Third parties where we have a duty to or are permitted to
                  disclose your personal information by law (e.g. law
                  enforcement officials, government authorities);
                </li>
                <li>
                  With the police in the exercise of their functions or with
                  others as required by a court order;
                </li>
                <li>
                  Third parties in connection with any merger, sale of company
                  assets, consolidation or restructuring, financing, or
                  acquisition of all or a portion of the Mangohomz Group’s
                  business, in which case personal data held by it about its
                  customers or visitors to the website may be one of the
                  transferred assets.
                </li>
              </ul>
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Where we share your personal information, appropriate protections
              will be in place to protect your personal information as required
              by data protection laws.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Transfers outside of your country
            </div>
            <div style="font-family: verdana; font-size: 12px">
              MangoHomz uses global information systems. As a result, MangoHomz
              transfers your personal information to a country outside of your
              country, for the purposes set out in this policy.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              MangoHomz takes steps to ensure that when your personal
              information is transferred internationally, it is subject to
              appropriate safeguards in accordance with data protection laws.
              Often, these safeguards include contractual safeguards. More
              information about these safeguards (including copies, where
              relevant) can be obtained by contacting
              [dataprotection@Mangohomz.com].
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
              "
            >
              Retention period
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We retain your personal information in accordance with MangoHomz’s
              records retention policies. However, there may be circumstances
              that mean we must retain your personal information for longer
              (e.g. if you make a claim in relation to a booking).
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Your rights
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Data protection laws provides individuals with rights in relation
              to the information that MangoHomz holds about them on some
              computer and paper records. These include rights to access,
              correct, delete, restrict the use of, object to the use of, port
              to another person, and withdraw consent to the use of, your
              information. Exceptions may apply to these rights.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Data protection contacts
            </div>
            <div style="font-family: verdana; font-size: 12px">
              If you have any questions, comments, complaints or suggestions in
              relation to this notice, or any other concerns about the way in
              which we process information about you, please contact our Privacy
              Team at
              <a
                class="text-bold text-primary"
                href="dataprotection@mangohomz.com."
                target="_blank"
                >dataprotection@mangohomz.com.</a
              >
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you are not satisfied with the response from our Privacy Team,
              you can contact our Data Protection Officer at [<a
                class="text-bold text-primary"
                href="dataprotection@mangohomz.com."
                target="_blank"
                >dataprotection@mangohomz.com.</a
              >].You also have a right to make a complaint to your local privacy
              supervisory authority.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="cancellationDialog">
        <q-card style="min-width: 350px">
          <q-card-section class="row class-11">
            <div
              class="col-11 text-h6 text-bold text-center text-primary"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              Cancellation Policy For User
            </div>
            <div class="col-1">
              <q-btn
                dark
                padding="none"
                icon="close"
                @click="closeCancellationDialog"
                v-close-popup
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                text-decoration: underline;
              "
            >
              Medical Equipment:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> strict cancellation policy allows
              MangoHomz Guests to receive a full refund if they cancel the
              Medical Equipment booking at least 3 days before the booked date.
              Any cancellation thereafter the guest will be entitled to get only
              60% refund of the booked amount.<strong>MANGOHOMZ (MH)</strong>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="refundDialog">
        <q-card style="min-width: 350px">
          <q-card-section class="row col-12">
            <div
              class="col-11 text-h6 text-bold text-center text-primary"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              MH Refund Policy For Users
            </div>
            <div>
              <q-btn
                dark
                padding="none"
                class="justify-end"
                icon="close"
                color="primary"
                @click="closeRefundDialog"
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
              "
            >
              Refund Type:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any applicable Refund of any kind can be in MH wallet for future
              use or User may opt for refund to the account/Card from where the
              payment has been processed.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
              "
            >
              Refund Time limit:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User will get the refund on or within 7 days of the cancellation
              or any refund // in case of any further delay MH will notify the
              user.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="q-mx-lg">
            <div class="text-h6 q-ml-sm">You'll redirected to Home page</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Ok" color="primary" @click="backTo()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
    <!--mobile view end-->
    <!--website view start-->
    <q-page style="padding-top: 20px" class="q-pa-md bg-grey gt-sm">
      <div class="justify-center">
        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card
            flat
            class="bg-white;border-radius: 30px"
            style="width: 1000px"
          >
            <q-card flat :class="class_val" class="bg-white;">
              <div class="row">
                <div class="text-h6 text-bold q-pa-sm">
                  <q-icon size="30px">
                    <q-img
                      src="~assets/logos/MHmini_logo_128x128.png"
                    ></q-img> </q-icon
                  >MH - MEDICAL EQUIPMENT BOOKING
                </div>
                <q-space />
                <div class="text-h6 text-bold q-pa-sm">
                  <q-btn
                    outline
                    rounded
                    style="width: 80px; height: 40px"
                    color="primary"
                    @click="confirm = true"
                    >BACK
                  </q-btn>
                </div>
              </div>
            </q-card>
            <q-separator />
          </q-card>
          <q-card flat :class="class_val" class="row bg-transparent">
            <q-card flat class="bg-white;" style="width: 100%">
              <q-card flat class="bg-white;width: 450px;">
                <q-card
                  bordered
                  class="q-pa-xs bg-white justify-center;"
                  style="
                    border: 1px solid silver;
                    width: 100%;
                    height: 180px;
                    padding-top: 20px;
                  "
                  v-if="this.EquipmentId.data[0]"
                >
                  <div class="row">
                    <div
                      class="row col-6 text-black text-bold q-pa-sm float-left text-left"
                      style="
                        font-family: verdana;
                        font-size: 15px;
                        padding-top: 0px;
                      "
                    >
                      MH BOOKING ID -{{ EquipmentId.data[0].booking_order_id }}
                    </div>

                    <q-space />
                  </div>
                  <q-separator />
                  <q-separator />
                  <div class="row q-mt-sm" style="padding-top: 20px">
                    <div class="col-4 q-pa-xs">
                      <div class="text-bold text-subtitle">
                        <q-icon name="mdi-map-marker-radius" />

                        {{ EquipmentId.data[0].property_city_name }}, India.
                      </div>
                      <div class="text-subtitle">
                        Hospital Name:-
                        {{ EquipmentId.data[0].near_hospital_name }}
                      </div>
                    </div>
                    <div
                      class="col-8 q-pa-sm row"
                      style="background-color: #e4fae9"
                    >
                      <div class="col-5">
                        <div class="text-caption">Check In</div>
                        <div class="text-bold text-subtitle">
                          {{
                            moment(EquipmentId.data[0].check_in).format(
                              "dddd, DD MMM YYYY"
                            )
                          }}
                        </div>
                        <div class="text-caption">
                          {{
                            moment(EquipmentId.data[0].check_in).format(
                              "h:mm a"
                            )
                          }}
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="text-caption">Check Out</div>
                        <div class="text-bold text-subtitle">
                          {{
                            moment(EquipmentId.data[0].check_out).format(
                              "dddd, DD MMM YYYY"
                            )
                          }}
                        </div>
                        <div class="text-caption">
                          {{
                            moment(EquipmentId.data[0].check_out).format(
                              "h:mm a"
                            )
                          }}
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="text-caption">Guest</div>
                        <div class="text-bold text-subtitle">
                          {{ EquipmentId.data[0].guest_count }} guests
                        </div>
                        <div class="text-caption">
                          {{ EquipmentId.data[0].no_of_days }} Nights
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card>
              </q-card>
            </q-card>
          </q-card>
          <q-card style="width: 1000px">
            <div class="row">
              <div class="text-h6 text-bold q-pa-sm">
                Medical Equipment Partners
              </div>
            </div>
            <q-card-actions
              class="row col-12"
              style="padding-top: 30px"
              v-if="this.EquipmentId.data[0]"
            >
              <div ref="SearchMedicalPartners" class="row col-12 q-gutter-md">
                <q-input
                  dense
                  outlined
                  bg-color="primary"
                  label="Date"
                  label-color="white"
                  clear-icon="close"
                  minimal
                  dark
                  class="col-3"
                  v-model="bookingMedical.date"
                  @click="$refs.qDateProxy.show()"
                  v-if="this.EquipmentId.data[0]"
                  style="margin-left: 50px; width: 250px"
                  :rules="[required('Date To')]"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        minimal
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          minimal
                          mask="DD/MM/YYYY"
                          v-model="bookingMedical.date"
                          :options="optionsFn"
                          @input="closeDialog"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              minimal
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>

                <q-select
                  dense
                  options-dense
                  outlined
                  multiple
                  aria-checked
                  use-input
                  v-model="bookingMedical.item_name"
                  bg-color="primary"
                  label="Equipment Item Name *"
                  color="cyan"
                  dark
                  class="col-3"
                  style="width: 250px"
                  filled
                  :rules="[required('Equipment Item Name ')]"
                  hide-bottom-space
                  :options="medicalItemName"
                  option-label="item_name"
                  option-value="item_id"
                  label-color="white"
                >
                </q-select>
                <q-input
                  class="col-3"
                  dense
                  options-dense
                  outlined
                  color="cyan"
                  dark
                  bg-color="primary"
                  style="width: 250px"
                  filled
                  v-model="bookingMedical.days_booked_for"
                  label="No. of Days Booked *"
                  hide-bottom-space
                  :rules="[required('Days Booked For')]"
                  label-color="white"
                >
                </q-input>
                <q-btn
                  class="col-4 q-mr-sm text-bold"
                  style="width: 100px; height: 40px"
                  dense
                  @click="
                    medicalSearch(
                      EquipmentId.data[0].property_city_id,
                      bookingMedical.item_name
                    )
                  "
                  label="Search"
                  color="primary"
                />
              </div>
            </q-card-actions>

            <q-card
              flat
              class="bg-white; q-pa-sm"
              style="padding-top: 0px"
              v-if="EquipmentId.data[0]"
            >
              <div
                class="q-pa-md row items-start col-12 q-gutter-md"
                v-if="EquipmentId.data[0]"
              >
                <q-card
                  class="item-start col-5 cursor-pointer highlight q-ma-sm"
                  style="width: 300px; height: 150px; background-color: #e4fae9"
                  :class="class_val"
                  v-for="item in equipment_item_rows"
                  :key="item.agent_sub_id"
                  @click="onEquipmentPartner(item)"
                >
                  <q-card-section
                    horizontal
                    class="row col-12 q-pa-sm"
                    style="height: 150px"
                  >
                    <div class="row">
                      <div
                        class="col-4 q-my-auto"
                        style="height: 120px; width: 100px"
                      >
                        <q-avatar
                          class="text-center"
                          color="secondary"
                          size="6em"
                          text-color="white"
                          style="
                            font-family: verdana;
                            height: 80px;
                            width: 70px;
                          "
                        >
                          {{ item.medical_store_name.charAt(0) }}</q-avatar
                        >
                        <!-- <q-img
                          class="row col-6 items-start q-pa-sm"
                          :src="`${equipmentImgpath}/${item.equipment_image}`"
                          style="
                            height: 135px;
                            width: 100px;
                            border-radius: 20px;
                          "
                        /> -->
                      </div>
                    </div>

                    <div
                      class="row col-8 q-ml-md text-center"
                      style="height: 100px; width: 100px; padding-top: 0px"
                    >
                      <div class="row q-pa-sm">
                        <div
                          class="col-12 text-caption text-black text-bold"
                          style="font-size: 14px"
                        >
                          {{ item.medical_store_name }}
                        </div>

                        <div class="col-12" style="font-size: 10px">
                          <q-rating
                            v-model="rating"
                            size="1em"
                            :max="5"
                            class="col-4"
                            color="yellow"
                            readonly
                          />
                          <q-chip
                            class="col-2"
                            color="secondary"
                            dark
                            dense
                            style="height: 20px; width: 30px"
                            size="xs"
                            >{{ rating }} / 5</q-chip
                          >
                        </div>
                        <div
                          class="col-12 text-caption"
                          style="font-size: 12px"
                        >
                          {{ item.medical_store_name }}
                        </div>
                        <div
                          class="col-12 text-caption"
                          style="font-size: 12px"
                        >
                          {{ item.location }}

                          <q-btn
                            size="sm"
                            outlined
                            filled
                            style="height: 30px"
                            color="primary"
                            @click="onEquipmentPartner(item)"
                            label="Select"
                            class="text-weight-bold q-ml-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </q-card>

            <q-card
              flat
              class="bg-white; q-pa-sm"
              style="padding-top: 5px"
              v-if="this.medicalItems_rows.length > 0"
            >
              <div class="row" style="padding-top: 0px">
                <div class="text-h6 text-bold q-pa-sm">
                  <q-icon size="30px">
                    <q-avatar color="secondary" size="30px"
                      >{{ this.eqpRows.equipment_sub_name.charAt(0) }}
                    </q-avatar>
                  </q-icon>
                  {{ this.eqpRows.equipment_sub_name }}
                </div>
                <q-space />
              </div>
              <div
                class="q-pa-md row items-start col-12 q-gutter-md"
                v-if="this.medicalItems_rows.length > 0"
              >
                <q-card
                  class="item-start col-5 cursor-pointer q-ma-sm"
                  style="width: 300px; height: 150px; background-color: #e4fae9"
                  :class="class_val"
                  v-for="item in medicalItems_rows"
                  :key="item.txn_id"
                >
                  <q-card-section horizontal class="row col-12 q-pa-sm">
                    <div class="row">
                      <div class="col-6" style="height: 120px; width: 100px">
                        <q-img
                          class="row col-6 items-start q-pa-sm"
                          :src="`${equipmentImgpath}/${item.equipment_image}`"
                          style="
                            height: 135px;
                            width: 100px;
                            border-radius: 20px;
                          "
                        />
                      </div>

                      <div
                        class="row col-6 q-ml-md text-center"
                        style="height: 100px; width: 100px; padding-top: 0px"
                      >
                        <div class="row justify-start q-pa-sm">
                          <div
                            class="col-12 text-caption text-black text-bold"
                            style="font-size: 12px"
                          >
                            {{ item.item_name }}
                          </div>

                          <div
                            class="col-12 text-caption"
                            style="font-size: 14px"
                          >
                            {{ item.price }}
                          </div>

                          <div
                            class="col-12 text-caption"
                            style="font-size: 14px"
                          >
                            {{ item.medical_store }}
                          </div>
                        </div>
                        <div class="row col-12 justify-center text-caption">
                          <q-select
                            dense
                            options-dense
                            class="col-4 text-bold"
                            type="button"
                            v-model="medicalItem.addCount[item.txn_id]"
                            hide-bottom-space
                            :options="['1', '2', '3', '4', '5']"
                            @input="loadEquipmentData(item)"
                          >
                            <!-- <option
                              v-for="(item, txn_id) in medicalItem.item"
                              :key="txn_id"

                            ></option> -->
                          </q-select>
                          <q-btn
                            size="sm"
                            outlined
                            filled
                            color="primary"
                            @click="addMedicalItem(item)"
                            label="Add"
                            style="margin-left: 10px; width: 30px"
                            class="col-4 justify-end"
                          />
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </q-card>
          </q-card>
          <q-card
            v-if="this.incrementCount.length > 0"
            flat
            class="row bg-transparent"
            style="width: 1000px"
          >
            <div
              class="col q-ml-xs bg-white row"
              style="height: 500px; overflow: auto"
            >
              <div class="row col-12 text-h6 text-bold q-pa-sm">
                Your Orders
              </div>
              <div
                class="q-ml-xl text-primary text-bold"
                style="font-size: 14px"
              >
                {{ this.selectMedicalItems }}
              </div>
              <q-separator />
              <div
                class="col-8 items-start"
                style="border: 0px solid silver; width: 350px; margin-left: 0px"
                v-if="this.incrementCount.length > 0"
              >
                <q-list dense style="padding-bottom: 15px" class="row col-12">
                  <q-item
                    class="col-12"
                    v-for="item in incrementCount"
                    :key="item.txn_id"
                    style="padding-bottom: 10px"
                  >
                    <q-item-section class="col-8">
                      {{ item.item_name }} :- ({{ item.price }} *
                      {{ parseInt(item.add_qty) }})</q-item-section
                    >
                    <q-space />
                    <q-item-section class="text-right"
                      >Rs.
                      {{ item.price * parseInt(item.add_qty) }}</q-item-section
                    >
                  </q-item>

                  <q-item class="col-12" style="background-color: #e4fae9">
                    <q-item-section class="text-bold"
                      >Total Price :- (for
                      {{ this.getQtyValue }} Qty)</q-item-section
                    >
                    <q-space />
                    <q-item-section class="text-right text-bold"
                      >Rs.
                      {{
                        Math.round(parseFloat(this.getBasePrice).toFixed(2))
                      }}</q-item-section
                    >
                  </q-item>
                </q-list>
              </div>
              <div class="row col-12" v-if="this.incrementCount.length > 0">
                <div class="col-8 text-h6 text-bold q-pa-sm">Price Details</div>
              </div>
              <q-separator />
              <div
                class="row col-12 q-pa-sm"
                style="padding-top:10px border:0px solid silver;"
                v-if="this.incrementCount.length > 0"
              >
                <q-list
                  dense
                  style="font-size: 12px; padding-bottom: 30px"
                  class="row col-12"
                >
                  <q-item class="col-12">
                    <q-item-section>Equipment Charges</q-item-section>
                    <q-space />
                    <q-item-section
                      class="text-right text-bold"
                      style="font-size=12px"
                      >{{ this.medicalCharges }}
                    </q-item-section>
                  </q-item>
                  <!-- <q-item class="col-12">
                    <q-item-section>Discount (%)</q-item-section><q-space />
                    <q-item-section
                      class="text-right text-secondary text-bold"
                      style="font-size=12px"
                      >(-) Rs. {{ this.discount }}</q-item-section
                    >
                  </q-item>
                  <q-item class="col-12" style="background-color: #e4fae9">
                    <q-item-section>Base Price</q-item-section><q-space />
                    <q-item-section
                      class="text-right text-bold"
                      style="font-size=12px"
                    >
                      {{ this.basicPrice }}</q-item-section
                    >
                  </q-item> -->
                  <q-item class="col-12 text-bold text-subtitle2">
                    <q-item-section>- Offers</q-item-section>
                    <q-space />
                    <q-btn
                      v-if="this.selected_offer_price != 0"
                      flat
                      dense
                      class="text-bold"
                      style="color: red; font-size: 10px"
                      icon="mdi-delete"
                      rounded
                      @click="removeCoupon"
                      ><span>Delete Coupon</span>
                    </q-btn>
                  </q-item>
                  <q-item class="col-12 text-caption text-secondary text-bold">
                    <q-item-section>{{
                      this.selected_offer_name
                    }}</q-item-section>
                    <q-space />
                    <q-item-section
                      class="text-right text-secondary text-bold"
                      style="font-size=12px"
                      >(-) Rs. {{ this.selected_offer_price }}</q-item-section
                    >
                  </q-item>
                  <!-- <q-item class="col-12 text-caption text-secondary text-bold">
                    <q-item-section>Gocash +</q-item-section><q-space />
                    <q-item-section class="text-right">- Rs 10</q-item-section>
                  </q-item> -->
                  <q-item class="col-12" style="background-color: #e4fae9">
                    <q-item-section>Price after discount</q-item-section>
                    <q-space />
                    <q-item-section
                      class="text-right text-bold"
                      style="font-size=12px"
                      >Rs {{ this.priceAfterDiscount }}
                    </q-item-section>
                  </q-item>
                  <q-item class="col-12">
                    <q-item-section class="text-bold text-subtitle2"
                      >+ Taxes & Fees</q-item-section
                    >
                    <q-space />
                  </q-item>
                  <q-item class="col-12">
                    <q-item-section>Taxes</q-item-section>
                    <q-space />
                    <q-item-section
                      class="text-right text-bold"
                      style="font-size=12px"
                      >Rs {{ this.gstOnPrice }}</q-item-section
                    >
                  </q-item>
                  <!-- <q-item class="col-12">
                    <q-item-section>CGST on price (9%)</q-item-section>
                    <q-space />
                    <q-item-section class="text-right">Rs {{ this.cGstOnPrice }}</q-item-section>
                  </q-item>
                  <q-item class="col-12">
                    <q-item-section>SGST on price (9%)</q-item-section>
                    <q-space />
                    <q-item-section class="text-right">Rs {{ this.cGstOnPrice }}</q-item-section>
                  </q-item> -->
                  <!-- <q-item class="col-12">
                    <q-item-section>Service Fee</q-item-section><q-space />
                    <q-item-section class="text-right">Rs 20</q-item-section>
                  </q-item> -->
                  <q-item class="col-12" style="background-color: #e4fae9">
                    <q-item-section class="text-bold text-subtitle2"
                      >PAYABLE NOW</q-item-section
                    >
                    <q-space />
                    <q-item-section
                      class="text-right text-bold"
                      style="font-size=12px"
                      >Rs {{ this.payableAmount }}
                    </q-item-section>
                  </q-item>
                  <!-- <q-item class="col-12 text-primary">
                    <q-item-section>EMI Starts at Rs.4500</q-item-section>
                    <q-space />
                  </q-item> -->
                </q-list>
              </div>
            </div>
            <div
              class="col q-ml-xs bg-white"
              style="height: 500px; overflow: auto"
            >
              <div class="row col-12">
                <div class="text-h6 text-bold q-pa-sm" style="font-size: 15px">
                  MANGOHOMZ OFFERS
                </div>
                <q-space />
                <!-- <div class="text-caption q-ma-xs">
                  <q-btn
                    flat
                    class="text-bold"
                    style="color: red; font-size: 10px; margin: 3px"
                    label="Coupon"
                    icon="mdi-delete"
                    rounded
                    @click="removeCoupon"
                  />
                </div> -->
                <div
                  class="cursor-pointer row col-12 q-pa-sm"
                  style="border-top: 1px solid silver"
                  v-if="this.incrementCount.length > 0"
                >
                  <q-list
                    dense
                    style="font-size: 11px"
                    class="row col-12"
                    v-for="item in mangohomzOffers_arr"
                    :key="item.sno"
                  >
                    <q-card
                      class="col-12 row q-mb-sm q-pa-sm"
                      style="background-color: #e4fae9"
                      v-if="
                        getBasePrice >= item.offer_money_start &&
                        getBasePrice <= item.offer_money_end
                      "
                      @click="selectOffer(item)"
                    >
                      <div class="row col-12">
                        <div
                          class="text-bold text-secondary text-body2"
                          style="position: absolute; top: 10px; right: 20px"
                        >
                          (-) Rs. {{ item.offer_price }}
                        </div>
                        <q-list color="secondary"
                          ><span
                            class="text-secondary text-body2 text-bold q-mr-xl q-pa-sm"
                            style="font-family: verdana; font-size: 12px"
                            >{{ item.offer_name }}</span
                          >
                        </q-list>
                      </div>
                      <div class="row col-12 items-start">
                        <div
                          class="q-pa-sm"
                          style="font-family: verdana; font-size: 10px"
                        >
                          {{ item.offer_description }}
                        </div>
                      </div>
                    </q-card>
                  </q-list>
                </div>
              </div>
            </div>
            <div class="col q-ml-xs bg-white" style="height: 500px">
              <div
                class="q-mt-xs text-bold text-body2"
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-left: 10px;
                "
              >
                Mobile Number
              </div>

              <div
                class="row items-start q-gutter-md"
                style="padding-top: 10px"
              >
                <div class="col-2" style="padding-left: 10px">
                  <q-select
                    dense
                    filled
                    square
                    :options="countriesArr"
                    option-label="code"
                    option-value="name"
                    v-model="formDetails.selected_country"
                    :rules="[required('Code')]"
                    ref="verifyCountryCode"
                    hide-bottom-space
                    style="width: 110px; font-size: 11px"
                    label-color="grey"
                  >
                  </q-select>
                </div>
                <div class="col-2" style="padding-left: 50px">
                  <q-input
                    dense
                    filled
                    outlined
                    v-model="formDetails.mobile_no"
                    ref="verifyMobile"
                    :rules="[required('Mobile Number'), phone()]"
                    label="Enter Mobile No *"
                    lazy-rules
                    mask="##########"
                    style="width: 200px; font-family: verdana; font-size: 12px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </div>
              <!-- <div
                class=" text-bold text-body2"
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-left: 10px;
                "
              >
                Whatsapp Number
              </div>
              <div
                class="row items-start q-gutter-md "
                style="padding-top: 10px"
              >
                <div class="col-2" style="padding-left: 50px">
                  <q-input
                    dense
                    outlined
                    v-model="formDetails.whatsapp_number"
                    ref="verifyAppNumber"
                    :rules="[required('Mobile Number'), phone()]"
                    label="Enter Whatsapp No *"
                    lazy-rules
                    mask="##########"
                    style="width: 200px; font-family: verdana; font-size: 12px"
                    label-color="black"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mdi-phone" color="secondary" />
                    </template>
                  </q-input>
                </div>
              </div> -->
              <div
                class="q-mb-sm text-bold text-body2"
                style="
                  font-family: verdana;
                  font-size: 14px;
                  padding-left: 10px;
                "
              >
                Email ID
              </div>
              <div class="col-12 q-pa-xs q-mb-xs" style="padding-left: 10px">
                <q-input
                  dense
                  outlined
                  v-model="formDetails.email_id"
                  label="Email"
                  ref="verifyEmail"
                  lazy-rules
                  hide-bottom-space
                  style="width: 100%"
                  :rules="[required('Email'), email()]"
                  label-color="black"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-email" color="secondary" />
                  </template>
                </q-input>
              </div>
              <q-separator />
              <div
                class="row justify-center q-gutter-md"
                style="padding-top: 10px"
              >
                <q-checkbox
                  v-model="right"
                  dense
                  class="text-bold"
                  label="Enter GST Details (Optional)"
                />
              </div>
              <div class="q-mt-md">
                <q-input
                  dense
                  filled
                  outlined
                  v-model="formDetails.gstin_no"
                  v-if="this.right == true"
                  class="q-mx-auto"
                  mask="##AAAAA####A###"
                  label="Enter GSTIN Number"
                  lazy-rules
                  :rules="[gstNumber()]"
                  style="width: 200px; font-family: verdana; font-size: 12px"
                  label-color="black"
                >
                </q-input>
              </div>
              <div class="col-12 q-mx-xs" style="padding-top: 20px">
                <p style="width: 100%; font-family: verdana; font-size: 12px">
                  <q-checkbox
                    v-model="terms_conditions"
                    dense
                    size="28px"
                    style="margin-bottom: 3px"
                  />
                  By Proceeding I agree to Mangohomz
                  <a
                    class="text-bold text-primary"
                    @click="userAgreementDialog = true"
                    href="#"
                    >User Terms & Condition</a
                  >, with
                  <a
                    class="text-bold text-primary"
                    @click="privacyPolicyDialog = true"
                    href="#"
                    >Privacy</a
                  >,
                  <a
                    class="text-bold text-primary"
                    @click="cancellationDialog = true"
                    href="#"
                    >Cancellation</a
                  >
                  &
                  <a
                    class="text-bold text-primary"
                    @click="refundDialog = true"
                    href="#"
                    >Refund</a
                  >
                  policy.
                </p>
              </div>
              <div class="row justify-center">
                <q-btn
                  color="positive"
                  label="PROCEED TO PAY"
                  style="font-family: verdana; font-size: 12px"
                  class="text-bold"
                  label-color="black"
                  :disable="this.terms_conditions == false"
                  @click="submitEquipmentBookingData()"
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <q-dialog v-model="userAgreementDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div
              class="text-h6 text-bold text-center text-primary"
              style="font-family: verdana; font-size: 18px"
            >
              User Agreement
            </div>
          </q-card-section>
          <q-card-section>
            <div style="font-family: verdana; font-size: 12px">
              <strong>MANGOHOMZ (MH)</strong> coordinates medical trips around
              the world and is bridging the gap between patient and the
              hospital, it provides patient friendly accommodation, food
              facility, travel facility near medical hubs to medical travelers.
              <strong>MANGOHOMZ (MH)</strong> is not a medical professional and
              does not have any hired medical professionals working for their
              company to provide medical advice or make any medical
              recommendations, before or during medical trip. All information
              provided by <strong>MANGOHOMZ (MH)</strong>
              and its staff is strictly for informative and educational guidance
              and should not be interpreted as medical advice.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              By using
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >
              – <strong>MANGOHOMZ (MH)</strong> Online Website for Medical
              Tourism, you hereby agree to be bound by all the terms and
              conditions contained in this User Agreement ("Agreement").
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >
              – <strong>MANGOHOMZ (MH)</strong> reserves the right at its
              discretion to change the Terms of this Agreement and will provide
              notice of any such changes by online posting. Your continued use
              of
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >
              – <strong>MANGOHOMZ (MH)</strong> Online Web site after the
              posting of any notice of change in terms shall constitute your
              agreement to be bound by any such changes
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              This User Agreement along with Terms Of Service (collectively, the
              "User Agreement") forms the terms and conditions for the use of
              services and products of MangoHomz(MH)
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any person ("User") who inquiries about or purchases any products
              or services of <strong>MANGOHOMZ (MH)</strong> through its
              websites, mobile applications, sales persons, offices, call
              centers, branch offices, franchisees, agents etc. (all the
              aforesaid platforms collectively referred to as "Sales Channels")
              agree to be governed by this User Agreement. The websites and the
              mobile applications of <strong>MANGOHOMZ (MH)</strong> are
              collectively referred to as 'Website’ shall include channel
              Partners viz Accommodation Partner, Booking Agent Partner, Food
              Partner, Medicine & Medical Equipment Partner, Travel Partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Both User and <strong>MANGOHOMZ (MH)</strong> are individually
              referred to as 'Party' and collectively referred to as 'Parties'
              to the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Terms of Service" available on <strong>MANGOHOMZ (MH)</strong>'s
              website details out terms & conditions applicable on various
              services or products facilitated by
              <strong>MANGOHOMZ (MH)</strong>. The User should refer to the
              relevant Terms of Service applicable for the given product or
              service as booked by the User. Such Terms of Service are binding
              on the User
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              ELIGIBILITY TO USE
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User must be atleast 18 years or above age and is legally
              authorized to enter into an agreement so as become a User and use
              the services of <strong>MANGOHOMZ (MH)</strong>.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong>, reserve the right to terminate
              membership and/or block access to the Website if it is discovered
              that a minor or a person incompetent to contract according to the
              law or any information pertaining to age entered at the time of
              creation of account is false.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Before using the Website, approaching any Sales Channels or
              procuring the services of <strong>MANGOHOMZ (MH)</strong>, the
              Users shall compulsorily read and understand this User Agreement,
              and shall be deemed to have accepted this User Agreement as a
              binding document that governs User's dealings and transactions
              with <strong>MANGOHOMZ (MH)</strong>. If the User does not agree
              with any part of this Agreement, then the User must not avail
              <strong>MANGOHOMZ (MH)</strong>'s services and must not access or
              approach the Sales Channels of <strong>MANGOHOMZ (MH)</strong>
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              All rights and liabilities of the User and
              <strong>MANGOHOMZ (MH)</strong> with respect to any services or
              product facilitated by <strong>MANGOHOMZ (MH)</strong>
              shall be restricted to the scope of this User Agreement.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              CONTENT
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              All content provided through various Sales Channels, including but
              not limited to audio, images, software, text, icons and such
              similar content ("Content"), are registered by
              <strong>MANGOHOMZ (MH)</strong> and protected under applicable
              intellectual property laws. User cannot use this Content for any
              other purpose, except as specified herein.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User agrees to follow all instructions provided by
              <strong>MANGOHOMZ (MH)</strong>
              which will prescribe the way such User may use the Content.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              There are a number of proprietary logos, service marks and
              trademarks displayed on the Website and through other Sales
              Channels of <strong>MANGOHOMZ (MH)</strong>, as may be applicable.
              <strong>MANGOHOMZ (MH)</strong>
              does not grant the User a license, right or authority to utilize
              such proprietary logos, service marks, or trademarks in any
              manner. Any unauthorized use of the Content, will be in violation
              of the applicable law.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> respects the intellectual property
              rights of others. If you notice any act of infringement on the
              Website, you may inform <strong>MANGOHOMZ (MH)</strong>, at
              <a
                class="text-bold text-primary"
                href="https://www.mangohomz.com/#/"
                target="_blank"
                >www.MangoHomz.com
              </a>
              Website. The Website is meant to be used by bonafide User(s) for a
              lawful use
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User shall not distribute exchange, modify, sell or transmit
              anything from the Website, including but not limited to any text,
              images, audio and video, for any business, commercial or public
              purpose.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User Agreement grants a limited, non-exclusive,
              non-transferable right to use this Website as expressly permitted
              in this User Agreement. The User agrees not to interrupt or
              attempt to interrupt the operation of the Website in any manner
              whatsoever.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Access to certain features of the Website may only be available to
              registered User(s). The process of registration may require the
              User to answer certain questions or provide certain information
              that may or may not be personal in nature. Some such fields may be
              mandatory or optional. User represents and warrants that all
              information supplied to <strong>MANGOHOMZ (MH)</strong> is true
              and accurate.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User/Participant/Patient or his/her family
              members/relatives/escorts/friends making the booking on behalf of
              the Participant/Patient shall read carefully the terms and
              conditions mentioned herein before filling and signing the
              registration form. The User/Participant/Patient (and his/her
              family members/relatives /escorts/ friends making the booking on
              behalf of the Participant/Patient) shall sign this document. The
              signing of the terms & conditions document by the
              User/Participant/Patient (and his/her family
              members/relatives/escorts/friends making the booking on behalf of
              the Participant/Patient) shall mean acceptance in totality of the
              terms and conditions contained herein by the Participant/Patient
              (and his/her family members/relatives/escorts/friends making the
              booking on behalf of the Participant/Patient). The signed terms &
              conditions documents with payment receipt shall be binding on the
              Participant/Patient (and his/her family members/
              relatives/escorts/friends making the booking on behalf of the
              User/Participant/ Patient) and shall constitute a contract between
              MANGOHOMZ and the User/Participant/Patient (and his/her
              family/members/relatives/escorts/friends making the booking on
              behalf of the Participant / Patient) on the Participant / Patient
              (and his / her family members / relatives / escorts / friends
              making the booking on behalf of the Participant / Patient) signing
              the terms and conditions document and making payment towards the
              Package.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> does not control or operate any
              services of any Channel partner, neither does it operate or
              control any facility or service provided by the Channel partner
              mentioned in the Medical Treatment Package. MANGOHOMZ takes care
              in selecting all the ingredients required by Medical Traveler and
              has no control whatsoever in running the Channel partner.
              MANGOHOMZ cannot be made liable / responsible for any delay,
              default, failure, improper services / deficiency in services
              provided by the Channel partner and / or for any injury, sickness,
              accident, discomfort, death, loss or damage of any kind whatsoever
              which may arise due to any act of negligence, deficiency or
              default in services, of the management or employees of the Channel
              partner.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> reserves the right, in its sole
              discretion, to terminate the access to the Website and the
              services offered on the same or any portion thereof at any time,
              without notice, for general maintenance or any other reason
              whatsoever.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> will always make its best
              endeavours to ensure that the content on its websites or other
              sales channels are free of any virus or such other malwares.
              However, any data or information downloaded or otherwise obtained
              through the use of the Website or any other Sales Channel is done
              entirely at the User's own discretion and risk and they will be
              solely responsible for any damage to their computer systems or
              loss of data that may result from the download of such data or
              information.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              TERMS OF SERVICE
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> Platform provides the user with:
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              a. Accommodation partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              b. Travel partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              c. Food partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              d. Booking Agent Partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              e. Medicine & Medical Equipment Partner
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              A. <strong>MANGOHOMZ (MH)</strong> Platform is primarily
              responsible for providing a comfortable room stay, travel facility
              to medical hub and other connected facility for ensuring the
              acceptability of the services as promised by
              <strong>MANGOHOMZ (MH)</strong> to its customers on behalf of its
              partner. <strong>MANGOHOMZ (MH)</strong> has right to direct the
              Accommodation owner to provide the room stay services along with
              other adequate facility as promised for, to
              <strong>MANGOHOMZ (MH)</strong>’s medical travelers.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              B. <strong>MANGOHOMZ (MH)</strong> understands the needs and
              requirements of Medical Traveler and accordingly offers stay and
              other connected facilities of Medical Traveler near
              hospital/Treating Institution through its platform to service its
              medical travelers.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              C <strong>MANGOHOMZ (MH)</strong> markets the room stays,
              providing its medical travelers with the room booking voucher that
              entitles them to avail Hotel stay service in
              <strong>MANGOHOMZ (MH)</strong> branded rooms provided by our
              Channel partners as per terms agreed with
              <strong>MANGOHOMZ (MH)</strong>.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              D. In case medical travelers are not able to select the facilities
              from our website, they can call our customer support desk and our
              team will help you find a suitable accommodation/facility within
              preferred budget and amenities near the Medical hub
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              E. If any check-in is denied for a confirmed booking, MANGOHOMZ MH
              shall ensure that User is provided with an alternate accommodation
              of comparable standards. In an event, where the alternate
              accommodation could not be provided, MANGOHOMZ MH shall arrange
              for the refund (as per <strong>MANGOHOMZ (MH)</strong>)
              <a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >refund Policy</a
              >
              of any pre-booking amount collected from the User
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              F. MANGOHOMZ MH also promises its Users of a comfortable travel,
              room stay, requisite medical equipment and support at all its
              MANGOHOMZ MH branded channels.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              G. For any default in service user can reach out to us by:
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              a. Writing to us on the MANGOHIMZ (MH) support page
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              b. Calling us on our 24X7 guest support helpline
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              Our guest support team will ensure the best and resolve your
              concern.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              H. MANGOHIMZ MH stays involved with the Users right from the time
              when booking is made through MANGOHIMZ MH platform and throughout
              the hotel stays, ensuring that the User gets a comfortable room
              stay experience.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              LIMITED LIABILITY OF MANGOHOMZ
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Unless <strong>MANGOHOMZ (MH)</strong> explicitly acts as a
              reseller in certain scenarios,
              <strong>MANGOHOMZ (MH)</strong> always acts as a facilitator by
              connecting the User with the respective service providers
              (Property Partner - Food Partner -Medical Equipment Partner-
              Travel Partner providing vehicle as and when required)– Booking
              Agent partner
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong>'s liability is limited to
              providing the User with a confirmed booking as selected by the
              User.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any issues or concerns faced by the User at the time of availing
              any such services shall be the sole responsibility of the Service
              Provider. <strong>MANGOHOMZ (MH)</strong> liability shall be
              limited to the arrangement of service, liability with respect to
              quality of services shall lie with the accommodation partner. Any
              acts, omissions, errors, representations, warranties, breaches or
              negligence on part of any Service Provider shall be his
              responsibility
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Unless explicitly committed by <strong>MANGOHOMZ (MH)</strong> as
              a part of any product or service:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> assumes no liability for the
              standard of services as provided by the respective Service
              Providers.
            </div>

            <div
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 10px;
                padding-left: 20px;
              "
            >
              • <strong>MANGOHOMZ (MH)</strong> provides no guarantee with
              regard to their quality or fitness as represented.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-left: 20px"
            >
              • <strong>MANGOHOMZ (MH)</strong> doesn't guarantee the
              availability of any services as listed by a Service Provider.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              By making a booking, User understands
              <strong>MANGOHOMZ (MH)</strong> merely provides a technology
              platform for booking of services and products and the ultimate
              liability rests on the respective Service Provider and not
              <strong>MANGOHOMZ (MH)</strong>. Thus the ultimate contract of
              service is between User and Service Provider.
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User further understands that the information displayed on the
              Website with respect to any service is displayed as furnished by
              the Service Provider. <strong>MANGOHOMZ (MH)</strong>, therefore
              cannot be held liable in case if the information provided by the
              Service Provider is found to be inaccurate, inadequate or obsolete
              or in contravention of any laws, rules, regulations or directions
              in force.
            </div>

            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              USERS RESPONSIBILITY
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Users are advised to check the description of the services and
              products carefully before making a booking. User(s) agree to be
              bound by all the conditions as contained in booking confirmation
              or as laid out in the confirmed booking voucher. These conditions
              are also to be read in consonance with the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If a User intends to make a booking on behalf of another person,
              it shall be the responsibility of the User to inform such person
              about the terms of this Agreement, including all rules and
              restrictions applicable there to.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User undertakes to abide by all procedures and guidelines, as
              modified from time to time, in connection with the use of the
              services available through <strong>MANGOHOMZ (MH)</strong>. The
              User further undertakes to comply with all applicable laws,
              regulations, orders, directions etc. issued by either the Central
              Government, State Government, District Authorities or any other
              statutory body empowered to do so w.r.t use of services or for
              each transaction.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The services are provided on an "as is" and "as available" basis.
              <strong>MANGOHOMZ (MH)</strong> may change the features or
              functionality of the services being provided at any time, in its
              sole discretion, without any prior notice.
              <strong>MANGOHOMZ (MH)</strong> expressly disclaims all warranties
              of any kind, whether express or implied, including, but not
              limited to the implied warranties of merchantability, reasonably
              fit for all purposes. No advice or information, whether oral or
              written, which the User obtains from
              <strong>MANGOHOMZ (MH)</strong> or through the services opted
              shall create any warranty not expressly made herein or in the
              terms and conditions of the services.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User also authorizes <strong>MANGOHOMZ (MH)</strong>'s
              representative to contact such user over phone, message and email.
              This consent shall supersede any preferences set by such User
              through national customer preference register (NCPR) or any other
              similar preferences.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              FEES AND PAYMENT
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> further reserves the right to
              alter any and all fees from time to time. Any such additional
              fees, including fee towards any modifications there of, will be
              displayed to the User before confirming the booking or collecting
              the payment from such User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In cases of short charging of the booking amount, taxes, statutory
              fee, convenience fee etc., owing to any technical error or other
              reason, <strong>MANGOHOMZ (MH)</strong> shall reserve the right to
              deduct, charge or claim the balance amount from the User and the
              User shall pay such balance amount to
              <strong>MANGOHOMZ (MH)</strong>. In cases where the short charge
              is claimed prior to the utilization of the booking,
              <strong>MANGOHOMZ (MH)</strong> will be at liberty to cancel such
              bookings if the amount is not paid before the utilization date.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any increase in the price charged by
              <strong>MANGOHOMZ (MH)</strong> on account of change in rate of
              taxes or imposition of new taxes, levies by Government shall have
              to be borne by the User. Such imposition of taxes, levies may be
              without prior notice and could also be retrospective but will
              always be as per applicable law.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In the rare circumstance of a booking not getting confirmed for
              any reason whatsoever, <strong>MANGOHOMZ (MH)</strong> will
              process the refund of the booking amount paid by the User and
              intimate the User about the same.
              <strong>MANGOHOMZ (MH)</strong> is not under any obligation to
              provide an alternate booking in lieu of or to compensate or
              replace the unconfirmed booking. All subsequent bookings will be
              treated as new transactions. Any applicable refund will be
              processed as per the defined policies of the service provider and
              <strong>MANGOHOMZ (MH)</strong> as the case may be. (<a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >Refund Policy</a
              >)
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User shall be completely responsible for all charges, fees,
              duties, taxes, and assessments arising out of the use of the
              service, as per the applicable laws
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees and understands that all payments shall only be
              made to bank accounts of <strong>MANGOHOMZ (MH)</strong>.
              <strong>MANGOHOMZ (MH)</strong> or its agents, representatives or
              employees shall never ask a customer to transfer money to any
              private account or to an account not held in the name of
              <strong>MANGOHOMZ (MH)</strong>. The User agrees that if that user
              transfers any amount against any booking or transaction to any
              bank account that is not legitimately held by
              <strong>MANGOHOMZ (MH)</strong> or to any personal account of any
              person, <strong>MANGOHOMZ (MH)</strong> shall not be held liable
              for the same. User shall not hold any right to recover from
              <strong>MANGOHOMZ (MH)</strong> any amount which is transferred by
              the User to any third party.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User will not share his personal sensitive information like
              credit/debit card number, CVV, OTP, card expiry date, user IDs,
              passwords etc. with any person including the agents, employees or
              representatives of <strong>MANGOHOMZ (MH)</strong>. The User shall
              immediately inform <strong>MANGOHOMZ (MH)</strong> if such details
              are demanded by any of its agents' employees or representatives.
              <strong>MANGOHOMZ (MH)</strong> shall not be liable for any loss
              that the User incurs for sharing the aforesaid details.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Refunds, if any, on cancelled bookings will always be processed to
              the respective account or the banking instrument (Credit Card,
              <strong>MANGOHOMZ (MH)</strong> wallet etc) from which payment was
              made for that booking
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Booking(s) made by the User through
              <strong>MANGOHOMZ (MH)</strong> are subject to the applicable
              <a
                class="text-bold text-primary"
                @click="cancellationDialog = true"
                href="#"
                >Cancellation</a
              >
              &
              <a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >refund policy </a
              >.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> provides various modes of making
              payments on the Website for transacting, like UPI, Credit/Debit
              Cards of various banks, Net Banking facility of all major banks,
              <strong>MANGOHOMZ (MH)</strong> and third-party Wallets, Gift
              Cards, EMI and more.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              OBLIGATION TO OBTAIN VISA
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              International bookings can be made through
              <strong>MANGOHOMZ (MH)</strong> irrespective of VISA. Arrangement
              of VISA in any case is not the responsibility of
              <strong>MANGOHOMZ (MH)</strong>. OK TO BOARD permission are to be
              obtained by the User as per the requirement of their travel
              bookings and the requirements of the countries the User intends to
              visit or transit through.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> is not responsible for any issues,
              including inability to travel, arising out of visa requirements
              and is also not liable to refund any amount to the User for being
              unable to utilize the booking due to absence or denial of visa,
              Refund, if any, will be as per the applicable terms of booking and
              <a
                class="text-bold text-primary"
                @click="cancellationDialog = true"
                href="#"
                >Cancellation</a
              >
              &
              <a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >refund policy</a
              >
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Force Majure:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              There can be exceptional circumstances where
              <strong>MANGOHOMZ (MH)</strong> and / or the Service Providers may
              be unable to honor the confirmed bookings due to various reasons
              like act of God, labor unrest, insolvency, a pandemic, an
              epidemic, business exigencies, government decisions, terrorist
              activity, any operational and technical issues, route and flight
              cancellations etc. or any other reason beyond the control of
              <strong>MANGOHOMZ (MH)</strong> . If
              <strong>MANGOHOMZ (MH)</strong> has advance knowledge of any such
              situations where dishonor of bookings may happen, it will make its
              best efforts to provide similar alternative to the User or refund
              the booking amount after deducting applicable service charges, if
              supported and refunded by that respective service operators. The
              User agrees that <strong>MANGOHOMZ (MH)</strong> being merely a
              facilitator of the services and products booked cannot be held
              responsible for any such Force Majeure circumstance. There can’t
              be any direct interaction between service providers and user MH
              will be the only point of interaction for users
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees that in the event of non-confirmation of booking
              due to any technical reasons (like network downtime, disconnection
              with third party platforms such as payment gateways, banks etc.)
              or any other similar failures, <strong>MANGOHOMZ (MH)</strong> ’s
              obligation shall be limited to refunding the booking amount, if
              any, received from the customer. Such refund shall completely
              discharge <strong>MANGOHOMZ (MH)</strong> from all liabilities
              with respect to that transaction. Additional liabilities, if any,
              shall be borne by the User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In no event shall <strong>MANGOHOMZ (MH)</strong> and be liable
              for any direct, indirect, punitive, incidental, special or
              consequential damages, and any other damages like damages for loss
              of use, data or profits, arising out of or in any way connected
              with the use or performance of the Website or any other Sales
              Channel.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO REFUSE
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> at its sole discretion reserves
              the right to not accept any booking without assigning any reason
              thereof.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> will not provide any service or
              share confirmed booking details till such time the complete
              consideration is received from the User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In addition to other remedies and recourse available to
              <strong>MANGOHOMZ (MH)</strong> under this User Agreement or under
              applicable law, <strong>MANGOHOMZ (MH)</strong> may limit the
              User's activity, warn other users of the User's actions,
              immediately suspend or terminate the User's registration, or
              refuse to provide the User with access to the Website if:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User is in breach of this User Agreement; or
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              • <strong>MANGOHOMZ (MH)</strong>is unable to verify or
              authenticate any information provided by the User; or
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> believes that the User's actions
              may infringe on any third-party rights or breach any applicable
              law or otherwise result in any liability for the User, other users
              of <strong>MANGOHOMZ (MH)</strong> , or
              <strong>MANGOHOMZ (MH)</strong> itself.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Once a User has been suspended or terminated, such User shall not
              register or attempt to register with
              <strong>MANGOHOMZ (MH)</strong> with different credentials, or use
              the Website in any manner whatsoever until such User is reinstated
              by <strong>MANGOHOMZ (MH)</strong>.
              <strong>MANGOHOMZ (MH)</strong> may at any time in its sole
              discretion reinstate suspended users.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If a User breaches this User Agreement,
              <strong>MANGOHOMZ (MH)</strong> reserves the right to recover any
              amounts due to be paid by the User to
              <strong>MANGOHOMZ (MH)</strong>, and to take appropriate legal
              action as it deems necessary.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO REFUSAL BY END SERVICE PROVIDER
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User agrees that the end service provider may refuse to provide
              the service(s), agreed to be provided to the User, for any booking
              made through <strong>MANGOHOMZ (MH)</strong> with/without
              assigning any reasons or owing to reasons including but not
              limited to behavioral issues, public safety, health hazards,
              infectious diseases, government orders/notification etc. In such
              scenarios of refusal, the liability that may ensue shall solely
              vest with the end service provider as it is outside the purview of
              <strong>MANGOHOMZ (MH)</strong> and the User agrees that any
              claim, refund or damages against such refusal shall be as per
              <strong>MANGOHOMZ (MH) </strong>
              <a
                class="text-bold text-primary"
                @click="refundDialog = true"
                href="#"
                >refund policy</a
              >.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              RIGHT TO CANCEL
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User expressly undertakes to provide
              <strong>MANGOHOMZ (MH)</strong> with correct and valid information
              while making use of the Website under this User Agreement, and not
              to make any misrepresentation of facts. Any default on part of the
              User would disentitle the User from availing the services from
              <strong>MANGOHOMZ (MH)</strong> .
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              In case <strong>MANGOHOMZ (MH)</strong> discovers or has reasons
              to believe at any time during or after receiving a request for
              services from the User that the request for services is either
              unauthorized or the information provided by the User or any of the
              travelers is not correct or that any fact has been misrepresented
              by that User, <strong>MANGOHOMZ (MH)</strong> shall be entitled to
              appropriate legal remedies against the User, including
              cancellation of the bookings, without any prior intimation to the
              User. In such an event, <strong>MANGOHOMZ (MH)</strong> shall not
              be responsible or liable for any loss or damage that may be caused
              to the User or any other person in the booking, as a consequence
              of such cancellation of booking or services.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If any judicial, quasi-judicial, investigation agency, government
              authority approaches <strong>MANGOHOMZ (MH)</strong> to cancel any
              booking, <strong>MANGOHOMZ (MH)</strong> will cancel the same
              without approaching the concerned User whose booking has been
              cancelled.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User shall not hold
              <strong>MANGOHOMZ (MH)</strong> responsible for any loss or damage
              arising out of measures taken by
              <strong>MANGOHOMZ (MH)</strong> for safeguarding its own interest
              and that of its genuine customers. This would also include
              <strong>MANGOHOMZ (MH)</strong> denying or cancelling any bookings
              on account of suspected fraud transactions.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              INDEMNIFICATION
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User agrees to indemnify, defend and hold harmless
              <strong>MANGOHOMZ (MH)</strong> , its affiliates and their
              respective officers, directors, lawful successors and assigns from
              and against any and all losses, liabilities, claims, damages,
              costs and expenses (including legal fees and disbursements in
              connection therewith and interest chargeable thereon) asserted
              against or incurred by such indemnified persons, that arise out
              of, result from, or may be payable by virtue of, any breach of any
              representation or warranty provided by the User, or
              non-performance of any covenant by the stay User.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              The User shall be solely liable for any breach of any country
              specific rules and regulations or general code of conduct and
              MANGOHOMZ (MH) cannot be held responsible for the same.
            </div>
            <div
              class="text-bold text-left"
              style="font-family: verdana; font-size: 15px; padding-top: 20px"
            >
              MISCLLEANEOUS
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              SEVERABILITY: If any provision of this User Agreement is
              determined to be invalid or unenforceable in whole or in part,
              such invalidity or unenforceability shall attach only to such
              provision or part of such provision and the remaining part of such
              provision and all other provisions of this User Agreement shall
              continue to be in full force and effect.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              JURISDICTION: This Agreement is subject to interpretation as per
              the laws of India, and the parties shall refer any unresolved
              disputes to the exclusive jurisdiction of courts situated in MH
              administrative areas as Bengaluru, Delhi and Mumbai.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              AMENDMENT TO THE USER AGREEMENT:
              <strong>MANGOHOMZ (MH)</strong> reserves the right to change the
              User Agreement from time to time. The User is responsible for
              regularly reviewing the User Agreement.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              CONFIDENTIALITY: Any information which is specifically mentioned
              by MANGOHOMZ as confidential shall be maintained confidentially by
              the User and shall not be disclosed unless as required by law or
              to serve the purpose of this User Agreement and the obligations of
              both the parties herein.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              FEEDBACK FROM CUSTOMER: <strong>MANGOHOMZ (MH)</strong> would like
              to know the feedback of the Users for improving its services. The
              User hereby authorizes MANGOHOMZ to contact the User for their
              feedback on various services offered by MANGOHOMZ. Such feedback
              may be collected through emails, telephone calls, SMS or any other
              medium from time to time. In case the User chooses not to be
              contacted, such User shall write to MANGOHOMZ for specific
              exclusion at
              <a
                class="text-bold text-primary"
                @click="privacyPolicyDialog()"
                href="#"
                >privacy@MANGOHOMZ.com</a
              >
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              PRIVACY POLICY: User shall also refer to MANGOHOMZ's
              <a
                class="text-bold text-primary"
                @click="privacyPolicyDialog = true"
                href="#"
                >Privacy policy</a
              >
              available on MANGOHOMZ's website which governs use of the
              Websites. By using the Website, User agrees to the terms of the
              Privacy Policy and accordingly consents to the use of the User’s
              personal information by MANGOHOMZ and its affiliates in accordance
              with the terms of the Privacy policy.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              GRIEVANCE REDRESSAL: MANGOHOMZ strongly believes in resolving the
              issues raised by the User(s). In the event if user feels that it’s
              concern has not been resolved to it’s satisfaction, User may
              contact our
              <a class="text-bold" href="#" @click="openGrievanceDialog()"
                >grievance officer</a
              >
              who shall Endeavour to redress the concern within 30 working days
              from the date of escalation. To reach the Grievance Officer please
              use this
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >

              to submit the details. User(s) are advised to escalate to the
              grievance officer only when they have already raised their
              complaint which has not been resolved to their satisfaction, or
              their concern has not been resolved within 30 working days from
              the date of ticket generation. User(s) will be required to share
              their booking reference number and the ticket ID generated for
              their complaint, for any escalations to the Grievance Officer
              through this
              <a
                class="text-bold text-primary"
                href="https://mangohomz.com"
                target="_blank"
                >www.MangoHomz.com</a
              >
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="grievanceDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div
              class="text-h6 text-bold text-center text-black"
              style="
                font-family: verdana;
                font-size: 14px;
                text-decoration: underline;
              "
            >
              MANGOHOMZ (MH) GRIEVANCE REDRESSAL FORM
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form
              class="q-gutter-md"
              @submit="onGrievanceSubmit"
              ref="grievanceForm"
            >
              <q-input
                dense
                outlined
                v-model="grievanceForm.name"
                autofocus
                @keyup.enter="prompt = false"
                label="Name"
                :rules="[required('Name')]"
                style="padding-bottom: 5px"
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.mobile_no"
                @keyup.enter="prompt = false"
                label="Mobile No"
                lazy-rules
                mask="##########"
                style="padding-bottom: 5px"
                :rules="[required('Phone no'), phone()]"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.email_id"
                @keyup.enter="prompt = false"
                label="Email-ID"
                style="padding-bottom: 5px"
                :rules="[required('Email'), email()]"
                ><template v-slot:prepend>
                  <q-icon name="email" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.mh_booking_id"
                autofocus
                @keyup.enter="prompt = false"
                label="MangoHomz Booking ID"
                :rules="[required('MH Booking ID')]"
                style="padding-bottom: 5px"
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                label="Date"
                class="col-3"
                v-model="grievanceForm.date"
                @click="$refs.qDateProxy.show()"
                :rules="[required('Date To')]"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      color="secondary"
                      ref="qDateProxy"
                      minimal
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        minimal
                        mask="DD/MM/YYYY"
                        v-model="grievanceForm.date"
                        :options="optionsFn"
                        @input="closeDialog"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="black"
                            minimal
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.address"
                autofocus
                @keyup.enter="prompt = false"
                label="Address"
                :rules="[required('address')]"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-city" color="secondary" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="grievanceForm.comment"
                type="textarea"
                @keyup.enter="prompt = false"
                style="padding-bottom: 5px"
                label="Complain/Suggestion/Feedback"
                :rules="[required('Complain/Suggestion/Feedback')]"
                ><template v-slot:prepend>
                  <q-icon name="mdi-comment-quote" color="secondary" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-actions align="right" class="text-secondary">
            <q-btn
              push
              outline
              class="text-secondary"
              label="Submit"
              color="secondary"
              @click="onGrievanceSubmit"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="privacyPolicyDialog">
        <q-card style="min-width: 350px">
          <q-card-section class="row col-12">
            <div
              class="col-11 text-h6 text-bold text-center text-primary"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              PRIVACY POLICY
            </div>
            <div>
              <q-btn
                dark
                padding="none"
                class="justify-end"
                icon="close"
                color="primary"
                @click="closePrivacyPolicyDialog"
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> is committed to protecting your
              information. This privacy notice provides details about the
              information collected about you, how is it used and how it is
              protected. It also explains your rights and how to contact us if
              you have questions about how the information provided by you is
              used.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Scope of our privacy notice
            </div>
            <div style="font-family: verdana; font-size: 12px">
              This notice applies to anyone who interacts with us in relation to
              our products and services (“you”, “your”), via any channel (e.g.
              app, website, email, phone, walk-ins to MangoHomz accommodations,
              booking an MangoHomz accommodation etc.). We may give you
              additional privacy notices if required for specific interactions.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you book a stay / services through us at one of our partners’
              guest houses, hotels, other lodgings, transport or any other
              service, that partner will use your personal data as shown in
              their privacy notice.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Ways in which we obtain personal information
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We obtain personal information from you and from hospitals and
              from others who book accommodation or any other service for you.
              Where you provide us with information about other individuals
              (e.g. the names of others who you will stay at the accommodation
              you book), you must ensure that the privacy policy is seen by them
              and they are comfortable with you doing this.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Categories of personal information
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We process two categories of personal information about you
              and/or, where applicable, others whom you have booked
              accommodation or any other service for, namely:
            </div>
            <div style="font-family: verdana; font-size: 12px">
              <ul>
                <li>
                  Standard personal information (e.g. information we use to
                  contact you, identify you or manage our relationship with
                  you); and
                </li>
                <li>
                  Special categories of information (e.g. your preference of
                  food in general, medical condition and its requirements,
                  specific schedules etc).
                </li>
              </ul>
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
              "
            >
              Purposes and lawful grounds of our processing personal information
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We process your personal information for the purposes set out in
              this notice, based on the legal grounds. Different legal grounds
              apply depending on what category of personal information we
              process. Standard personal information is normally processed by us
              on the basis that it is necessary for the performance of a
              contract, our or a third parties’ legitimate interests or law.
              Further information about this and special category processing
              grounds is set out below.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Legitimate interests
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We process your personal information for a number of legitimate
              interests, including providing you with services, administering
              our relationship with you, for marketing and service/product
              improvement purposes and in order to exercise our rights or handle
              claims. More detailed information about our legitimate interests
              is set out below.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Marketing and Preferences
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We use your personal information to send you marketing by post,
              telephone, social media platforms, email, SMS, application
              notifications and silent notifications to track installation
              status of the application. We may also use your personal
              information to carry out online paid marketing activities in the
              nature of retargeting.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We also use technology to help us understand your personal
              preferences and interests so that we can send recommendations and
              marketing communications that are likely to be of more interest to
              you. Using technology in this way is sometimes known as profiling.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you wish to unsubscribe from emails sent by us, you can do so
              at any time by clicking on the "unsubscribe" link that appears in
              all emails and by adjusting the settings on your device to turn
              off notifications from our app. Otherwise, you can always contact
              us at dataprotection@Mangohomz.com to update your contact
              preferences. You may also object to profiling relating to direct
              marketing by contacting us at dataprotection @Mangohomz.com.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Registration on the Website: 
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Information which you provide while subscribing to or registering
              on the Website, including but not limited to information about
              your personal identity such as name, gender, marital status,
              religion, age, profile picture etc., your contact details such as
              your email address, postal addresses, frequent flyer number,
              telephone (mobile or otherwise) and/or fax numbers. The
              information may also include information such as your banking
              details (including credit/debit card) and any other information
              relating to your income and/or lifestyle; billing information
              payment history etc. (as shared by you).
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Other information:
            </div>
            <div style="font-family: verdana; font-size: 12px">
              <ul>
                <li>
                  Transactional history (other than banking details) about your
                  e-commerce activities, buying behavior.
                </li>
                <li>
                  Your usernames, passwords, email addresses and other
                  security-related information used by you in relation to our
                  Services.
                </li>
                <li>
                  Data either created by you or by a third party and which you
                  wish to store on our servers such as image files, documents
                  etc.
                </li>
                <li>
                  Data available in public domain or received from any third
                  party including social media channels, including but not
                  limited to personal or non-personal information from your
                  linked social media channels (like name, email address, friend
                  list, profile pictures or any other information that is
                  permitted to be received as per your account settings) as a
                  part of your account information.
                </li>
                <li>
                  Information pertaining any other traveler(s) for who you make
                  a booking through your registered MANGOHOMZ account. In such
                  case, you must confirm and represent that each of the other
                  traveler(s) for whom a booking has been made, has agreed to
                  have the information shared by you disclosed to us and further
                  be shared by us with the concerned service provider(s).
                </li>
                <li>
                  If you request MANGOHOMZ to provide visa related services,
                  then copies of your passport, bank statements, originals of
                  the filled in application forms, photographs, and any other
                  information which may be required by the respective embassy to
                  process your visa application.
                </li>
                <li>
                  For international bookings, Users, in compliance with the
                  Liberalized Remittance Scheme(LRS) of RBI or any other law may
                  be required to provide details such as their PAN information
                  or passport details number or any such information required by
                  Service Provider. Such information shall be strictly used as
                  per the aforesaid requirements only. In case a User does not
                  wish to provide this information, MANGOHOMZ may not be able to
                  process the booking. MANGOHOMZ will never share User’s PAN
                  details without their prior consent unless otherwise such
                  action is required by any law enforcement authority for
                  investigation, by court order or in reference to any legal
                  process.
                </li>
                <li>
                  In case you opt for contactless check-in at Hotels, then
                  copies of your government identification like Aadhar, driving
                  license, election card etc., Self-declaration and any other
                  information like date of birth, destination/origin of travel
                  and place of residence that may be required by the concerned
                  Hotel to honor your hotel booking.
                </li>
                <li>
                  For international bookings, Users, in compliance with the
                  Liberalized Remittance Scheme (LRS) of RBI or any other law
                  may be required to provide details such as their PAN
                  information or passport details number or any such information
                  required by Service Provider.
                </li>
                <li>
                  In case you opt for contactless check-in at Hotels, then
                  copies of your government identification like Aadhar, driving
                  license, election card etc., Self-declaration and any other
                  information like date of birth, destination/origin of travel
                  and place of residence that may be required by the concerned
                  Hotel to honor your hotel booking.
                </li>
              </ul>
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Such information shall be strictly used for the aforesaid
              specified & lawful purpose only. User further understands that
              MANGOHOMZ may share this information with the end service provider
              or any other third party for provision and facilitation of the
              desired booking. MANGOHOMZ will always redact all/any sensitive &
              confidential information contained in the vaccination certificate,
              passbook, bank statement or any other identity card submitted for
              the purpose of availing a service, promotional offer or booking a
              product on the Website. In case a User does not wish to provide
              this information or opts for deletion of the information already
              provided, MANGOHOMZ may not be able to process the desired booking
              request. MANGOHOMZ will never share any of the above information
              collected including PAN card details, Passport details, Aadhar
              Card details without their prior consent unless otherwise such
              action is required by any law enforcement authority for
              investigation, by court order or in reference to any legal
              process.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Analytics and Advertising Services Provided by Others
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Third parties provide us with audience measurement and analytics
              services that analyze your online interactions (both with the
              MangoHomz(MH) and other websites), serve you with tailored
              marketing and report on the performance of that marketing. We also
              use Google Place API to make suggestions based on your location or
              search strings.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              MangoHomz is using Google Place API for place prediction. Please
              refer to their privacy policy
              <a
                class="text-bold text-primary"
                href="http://www.google.com/privacy.html"
                target="_blank"
                >http://www.google.com/privacy.html</a
              >.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Sharing your information
            </div>
            <div style="font-family: verdana; font-size: 12px">
              We share your information within MangoHomz Group and with others
              who help us provide services to you (e.g. your accommodation
              provider). We also share your information in accordance with the
              law.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              For more information on who we share your information with,
              (please expand this section naming the groups you will share)We
              share your information for the purposes set out in this privacy
              policy, with the following categories of recipients:
            </div>
            <div style="font-family: verdana; font-size: 12px">
              <ul>
                <li>Other members of the Mangohomz;</li>
                <li>
                  With accommodation managers to enable them to provide the
                  services you request, e.g. we share your name and expected
                  check-in time;
                </li>
                <li>
                  Third party suppliers who help deliver products or services on
                  our behalf, or who have partnered with Mangohomz in connection
                  with services or a relevant promotional offering, as well as
                  other apps or websites that integrate with our API or
                  Services, or those with an API or Service with which we
                  integrate;
                </li>
                <li>Your contact if you use a referral feature;</li>
                <li>
                  The general public, if you submit content in a public forum,
                  such as blog comments, social media posts, or other features
                  of our services that are obviously viewable by the general
                  public. For example, you may choose to use social sharing
                  features and related tools which let you share your Mangohomz
                  experience with other apps, sites, or media, and vice versa.
                  Your use of these features enables the sharing of information
                  with your friends or the public, depending on your social
                  sharing service settings. Please refer to the privacy policies
                  of those social sharing services for more information about
                  how they handle the data you provide to or share through them;
                </li>
                <li>
                  Third parties where we have a duty to or are permitted to
                  disclose your personal information by law (e.g. law
                  enforcement officials, government authorities);
                </li>
                <li>
                  With the police in the exercise of their functions or with
                  others as required by a court order;
                </li>
                <li>
                  Third parties in connection with any merger, sale of company
                  assets, consolidation or restructuring, financing, or
                  acquisition of all or a portion of the Mangohomz Group’s
                  business, in which case personal data held by it about its
                  customers or visitors to the website may be one of the
                  transferred assets.
                </li>
              </ul>
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Where we share your personal information, appropriate protections
              will be in place to protect your personal information as required
              by data protection laws.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Transfers outside of your country
            </div>
            <div style="font-family: verdana; font-size: 12px">
              MangoHomz uses global information systems. As a result, MangoHomz
              transfers your personal information to a country outside of your
              country, for the purposes set out in this policy.
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              MangoHomz takes steps to ensure that when your personal
              information is transferred internationally, it is subject to
              appropriate safeguards in accordance with data protection laws.
              Often, these safeguards include contractual safeguards. More
              information about these safeguards (including copies, where
              relevant) can be obtained by contacting
              [dataprotection@Mangohomz.com].
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
              "
            >
              Retention period
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              We retain your personal information in accordance with MangoHomz’s
              records retention policies. However, there may be circumstances
              that mean we must retain your personal information for longer
              (e.g. if you make a claim in relation to a booking).
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Your rights
            </div>
            <div style="font-family: verdana; font-size: 12px">
              Data protection laws provides individuals with rights in relation
              to the information that MangoHomz holds about them on some
              computer and paper records. These include rights to access,
              correct, delete, restrict the use of, object to the use of, port
              to another person, and withdraw consent to the use of, your
              information. Exceptions may apply to these rights.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
                padding-top: 10px;
              "
            >
              Data protection contacts
            </div>
            <div style="font-family: verdana; font-size: 12px">
              If you have any questions, comments, complaints or suggestions in
              relation to this notice, or any other concerns about the way in
              which we process information about you, please contact our Privacy
              Team at
              <a
                class="text-bold text-primary"
                href="dataprotection@mangohomz.com."
                target="_blank"
                >dataprotection@mangohomz.com.</a
              >
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              If you are not satisfied with the response from our Privacy Team,
              you can contact our Data Protection Officer at [<a
                class="text-bold text-primary"
                href="dataprotection@mangohomz.com."
                target="_blank"
                >dataprotection@mangohomz.com.</a
              >].You also have a right to make a complaint to your local privacy
              supervisory authority.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="cancellationDialog">
        <q-card style="min-width: 350px">
          <q-card-section class="row class-11">
            <div
              class="col-11 text-h6 text-bold text-center text-primary"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              Cancellation Policy For User
            </div>
            <div class="col-1">
              <q-btn
                dark
                padding="none"
                icon="close"
                @click="closeCancellationDialog"
                v-close-popup
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                text-decoration: underline;
              "
            >
              Medical Equipment:
            </div>

            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              <strong>MANGOHOMZ (MH)</strong> strict cancellation policy allows
              MangoHomz Guests to receive a full refund if they cancel the
              Medical Equipment booking at least 3 days before the booked date.
              Any cancellation thereafter the guest will be entitled to get only
              60% refund of the booked amount.<strong>MANGOHOMZ (MH)</strong>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="refundDialog">
        <q-card style="min-width: 350px">
          <q-card-section class="row col-12">
            <div
              class="col-11 text-h6 text-bold text-center text-primary"
              style="
                font-family: verdana;
                font-size: 16px;
                text-decoration: underline;
              "
            >
              MH Refund Policy For Users
            </div>
            <div>
              <q-btn
                dark
                padding="none"
                class="justify-end"
                icon="close"
                color="primary"
                @click="closeRefundDialog"
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
              "
            >
              Refund Type:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              Any applicable Refund of any kind can be in MH wallet for future
              use or User may opt for refund to the account/Card from where the
              payment has been processed.
            </div>
            <div
              class="text-bold text-left"
              style="
                font-family: verdana;
                font-size: 12px;
                padding-top: 0px;
                text-decoration: underline;
              "
            >
              Refund Time limit:
            </div>
            <div
              style="font-family: verdana; font-size: 12px; padding-top: 10px"
            >
              User will get the refund on or within 7 days of the cancellation
              or any refund // in case of any further delay MH will notify the
              user.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="q-mx-lg">
            <div class="text-h6 q-ml-sm">You'll redirected to Home page</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Ok" color="primary" @click="backTo()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
    <!--website view end-->
    <footer-tag />

    <!-- <search-header-comp /> -->
  </q-page-container>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import headerTag from "./header.vue";
import footerTag from "./footer.vue";
import moment from "moment";
import { date } from "quasar";
import validations from "../helpers/validations";
import filepaths from "../helpers/filepath";
import { api } from "boot/axios";

// import searchHeaderComp from "../components/searchHeaderComp.vue";
export default {
  components: {
    headerTag,
    footerTag,
    // searchHeaderComp
  },
  data() {
    return {
      moment: moment,
      popup1: "popup1",
      EquipmentId:null,
      equipmentImgpath: filepaths.mhepFilePath,
      ...validations,
      class_val: "shadow-1 hotel-details-card-1",
      days: 0,
      confirm: false,
      right: false,
      terms_conditions: false,
      userAgreementDialog: false,
      cancellationDialog: false,
      grievanceDialog: false,
      privacyPolicyDialog: false,
      refundDialog: false,
      selected_property_name: "",
      selected_property_min_price: "",
      selected_property_type: "",
      hotel_image_1: "",
      description: "",
      rating: 4.5,
      room_total: "",
      cart_total: "",

      searchItem: {
        city: "",
        hospital: "",
        checkIn: "",
        checkOut: "",
        guests: "",

        adult_count: 0,
        child_count: 0,
        infant_count: 0,
      },
      selected_offer_name: "APPLY COUPEN",
      selected_offer_price: "0",
      eqpRows: {
        equipment_id: "",
        equipment_sub_id: "",
        agent_name: "",
        equipment_sub_name: "",
        check_in: "",
        check_out: "",
        price: "",
        medical_store: "",
        txn_id: "",
      },
      // item: "",
      bookingMedical: {
        item_name: [],
        date_from: "",
        date_to: "",
        quantity: "",
        date: "",
        days_booked_for: "",
      },
      medicalArr: {
        equipment_sub_id: "",
        equipment_id: "",
        agent_name: "",
        equipment_sub_name: "",
        item_name: "",
        price: "",
        units: "",
        equipment_image: "",
        status: "",
        medical_store: "",
        address: "",
        txn_id: "",
        location: "",
      },
      formDetails: {
        gstin_no: "",
        mobile_no: "",
        selected_country: { name: "India", code: "+91 IND" },
        selected_country1: { name: "India", code: "+91 IND" },
        email_id: "",
        whatsapp_number: "",
      },
      selectMedicalItems: "Please Add Medical equipment Item Details",
      mhDetails: { booking_order_id: "" },
      countriesArr: [
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
          code: "+500 GS",
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
        { name: "Zimbabwe", code: "+263 ZW" },
      ],
      guestMedicalDetails: {
        selectedMedicalObj: {},
        // formDetailsObj: {},
        booking_id: "",
        booking_order_id: "",
        booking_city: "",
        booking_city_id: "",
        hotel_property_name: "",
        near_hospital_name: "",
        check_in: "",
        check_out: "",
        guest_count: "",
        no_of_days: "",
        eqp_booking_date: "",
        eqp_booking_type: "",
        medical_charges: "",
        total_qty_booked: "",
        medical_charges: "",
        discount: "",
        discount_price: "",
        base_price: "",
        mh_offer_coupon: "",
        mh_offer_price: "",
        // selected_offer_price: "",
        price_after_discount: "",
        gst_percentage: "",
        gst_on_base_price: "",
        payable_amount: "",
        country_name: "",
        country_code: "",
        gstin_no: "",
        mobile_number: "",
        total_item_qty: "",
        days_booked_for: "",
        whatsapp_number: "",
        email_id: "",
        cgst_amount: "",
        cgst_percentage: "",
        sgst_amount: "",
        sgst_percentage: "",
        // basicPrice: ""
      },
      grievanceForm: {
        name: "",
        mobile_no: "",
        email_id: "",
        mh_booking_id: "",
        date: "",
        date_to: "",
        address: "",
        comment: "",
      },
      accBooking: {
        booking_order_id: "",
      },
      medicalItem: {
        addCount: [],
      },

      incrementCount: [],
    };
  },

  created() {
    // this.EquipmentId = "";
    // this.EquipmentId = JSON.parse(this.$route.params.EquipmentNo);
    // // this.EquipmentId = this.$route.params.EquipmentNo;
    // this.formDetails.mobile_no = this.EquipmentId.data[0].primary_no;
    // this.formDetails.email_id = this.EquipmentId.data[0].email_id;
    this.$store.state.booking.booking_order_data = [];
    this.$store.state.partners.equipment_item_rows = [];
    this.$store.state.partners.medicalItems_rows = [];
    this.hotelImgpath = filepaths.mhapFilePath;
    this.OfferImgpath = filepaths.mhapFilePath;
  },
  computed: {
    ...mapState({
      optionsFn(d) {
        let fromDate = date.formatDate(
          this.EquipmentId.data[0].check_in,
          "YYYY/MM/DD"
        );
        let toDate = date.formatDate(
          this.EquipmentId.data[0].check_out,
          "YYYY/MM/DD"
        );
        return (d) => d >= fromDate && d <= toDate;
      },
      mangohomzOffers_arr: (state) => state.booking.mangohomzOffers_arr,
      equipment_item_rows: (state) => state.partners.equipment_item_rows,
      medicalItems_rows: (state) => state.partners.medicalItems_rows,
      medical_addItems_rows: (state) => state.partners.medical_addItems_rows,
      booking_order_data: (state) => state.booking.booking_order_data,
      medicalItemName: (state) => state.dropdown.medical_item_name,
    }),
    getMedicalQty() {
      let sum = this.incrementCount.length;
      return parseInt(sum);
    },
    getQtyValue() {
      let sum = this.incrementCount.reduce((accum, current) => {
        return parseFloat(accum + parseInt(current.add_qty));
      }, 0);
      return sum;
    },
    getBasePrice() {
      let sum = this.incrementCount.reduce((accum, current) => {
        return parseFloat(
          accum + parseInt(current.price) * parseInt(current.add_qty)
        );
      }, 0);
      return sum;
    },
    medicalCharges() {
      let medicalCharges = Math.round(parseFloat(this.getBasePrice).toFixed(2));
      return medicalCharges;
    },
    // discount() {
    //   let discount = Math.round(
    //     (parseFloat(this.getBasePrice).toFixed(2) *
    //       parseFloat(this.incrementCount[0].special_offer).toFixed(2)) /
    //       100
    //   );
    //   return discount;
    // },
    // basicPrice() {
    //   let basicPrice = Math.round(
    //     parseFloat(this.getBasePrice).toFixed(2) -
    //        (parseFloat(this.getBasePrice).toFixed(2) *
    //         parseFloat(this.incrementCount[0].special_offer).toFixed(2)) /
    //         100
    //   );
    //   return basicPrice;
    // },
    priceAfterDiscount() {
      let priceAfterDisc = Math.round(
        parseFloat(this.getBasePrice).toFixed(2) -
          parseFloat(this.selected_offer_price).toFixed(2)
      );
      return priceAfterDisc;
    },
    gstOnPrice() {
      let gst = Math.round(
        (parseFloat(this.getBasePrice).toFixed(2) * 18) / 100
      );
      return gst;
    },
    cGstOnPrice() {
      let cgst = Math.round(
        ((parseFloat(this.getBasePrice).toFixed(2) -
          parseFloat(this.selected_offer_price).toFixed(2)) *
          9) /
          100
      );
      return cgst;
    },
    payableAmount() {
      let payAmount = Math.round(
        (
          parseFloat(this.priceAfterDiscount) + parseFloat(this.gstOnPrice)
        ).toFixed(2)
      );
      return payAmount;
    },
    // payableAmount() {
    //   let payAmount = Math.round(
    //     parseFloat(this.getBasePrice).toFixed(2) -
    //       (parseFloat(this.getBasePrice).toFixed(2) *
    //       parseFloat(this.incrementCount[0].special_offer).toFixed(2)) /
    //       100 -
    //       parseFloat(this.selected_offer_price).toFixed(2) +
    //       ((parseFloat(this.getBasePrice).toFixed(2) -
    //         (parseFloat(this.getBasePrice).toFixed(2) *
    //         parseFloat(this.incrementCount[0].special_offer).toFixed(2)) /
    //          100 -
    //         parseFloat(this.selected_offer_price).toFixed(2)) *
    //         18) /
    //         100
    //   );
    //   return payAmount;
    // },

    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
  },
async  mounted() {


    // this.EquipmentId = "";
    let bookingIdRoute = this.$route.params.EquipmentNo;

    try {
      const data = await this.someFunction(bookingIdRoute);
       this.EquipmentId = data;
      //  console.log("mostRecent1:",data);
    } catch (error) {
      // console.log("Error",error);
      // Handle error if needed
    }
    // this.EquipmentId = JSON.parse(this.$route.params.EquipmentNo);
    // this.EquipmentId = this.$route.params.EquipmentNo;
    this.formDetails.mobile_no = this.EquipmentId.data[0].primary_no;
    this.formDetails.email_id = this.EquipmentId.data[0].email_id;








    // this.$store.dispatch("booking/getMedicalBookingData", this.EquipmentId);
    this.$store.dispatch("dropdown/loadAllEquipmentItems");
    this.$store.dispatch("booking/getMedicalMangohomzOfferData");
  },
  methods: {
    ...mapActions("booking", ["getMedicalMangohomzOfferData"]),
    ...mapActions("partners", ["getEquipmentBookingDetails"]),
    ...mapActions("partners", ["getBookingEquipmentTypes"]),
    ...mapActions("partners", ["getMedicalItems"]),
    // ...mapActions("booking", ["getMedicalBookingData"]),
    ...mapActions("booking", ["saveEquipmentBookingDetails"]),

    moveToHotel() {
      this.$router.push("/hotelName");
    },


    async fetchData(bookingIdRoute) {
      try {
        const response = await api.get(
          `/booking/getMHBookingData/${bookingIdRoute}`
        );
        // console.log(response)
        return response.data;
      } catch (error) {
        // console.log(error);
        throw error;
      }
    },

    async someFunction(bookingIdRoute) {
      // console.log("bookingIdRoute",bookingIdRoute);
      try {
        const response = await this.fetchData(bookingIdRoute);
        //  console.log("console", response);
        return response;
      } catch (error) {
        // console.error(error);
        throw error;
      }
    },





    closeCancellationDialog() {
      this.cancellationDialog = false;
    },
    closePrivacyPolicyDialog() {
      this.privacyPolicyDialog = false;
    },
    closeRefundDialog() {
      this.refundDialog = false;
    },
    openGrievanceDialog() {
      this.grievanceDialog = true;
    },
    loadEquipmentData(item) {
      this.medicalArr = Object.assign({}, item);
      for (const element of this.incrementCount) {
        if (element.txn_id == this.medicalArr.txn_id) {
        }
      }
    },
    onGrievanceSubmit() {
      this.$refs.grievanceForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.grievanceRegistration(this.grievanceForm);
              this.grievanceDialog = false;
              this.$refs.grievanceForm.reset();
            })
            .onCancel(() => {
              this.grievanceDialog = true;
              this.resetFiles();
            });
        } else {
          this.$q.notify({
            message: `Please Enter Form Properly`,
            position: "top",
            type: "negative",
          });
        }
      });
    },
    addMedicalItem(item) {
      this.selectMedicalItems = "";
      let isAlreadyExist = false;
      // let qtyValue = "";
      this.medicalArr = Object.assign({}, item);
      if (this.incrementCount.length > 0) {
        for (const element of this.incrementCount) {
          if (element.txn_id == this.medicalArr.txn_id) {
            isAlreadyExist = true;

            // qtyValue = element.add_qty;
            break;
          }
        }

        if (isAlreadyExist) {
          let objIndex = this.incrementCount.findIndex(
            (obj) => obj.txn_id == this.medicalArr.txn_id
          );
          this.incrementCount[objIndex].add_qty = parseInt(
            this.medicalItem.addCount[this.medicalArr.txn_id]
          );
        } else {
          var incrementObj = {
            account_id: this.medicalArr.account_id,
            equipment_sub_id: this.medicalArr.equipment_sub_id,
            equipment_id: this.medicalArr.equipment_id,
            agent_name: this.medicalArr.agent_name,
            equipment_sub_name: this.medicalArr.equipment_sub_name,
            txn_id: this.medicalArr.txn_id,
            item_name: this.medicalArr.item_name,
            price: this.medicalArr.price,
            units: this.medicalArr.units,
            equipment_image: this.medicalArr.equipment_image,
            status: this.medicalArr.status,
            medical_store: this.medicalArr.medical_store,
            address: this.medicalArr.address,
            location: this.medicalArr.location,
            special_offer: this.medicalArr.special_offer,
            add_qty: this.medicalItem.addCount[this.medicalArr.txn_id],
          };
          this.incrementCount.push(incrementObj);
        }
      } else {
        var incrementObj = {
          account_id: this.medicalArr.account_id,
          equipment_sub_id: this.medicalArr.equipment_sub_id,
          equipment_id: this.medicalArr.equipment_id,
          agent_name: this.medicalArr.agent_name,
          equipment_sub_name: this.medicalArr.equipment_sub_name,
          txn_id: this.medicalArr.txn_id,
          item_name: this.medicalArr.item_name,
          price: this.medicalArr.price,
          units: this.medicalArr.units,
          equipment_image: this.medicalArr.equipment_image,
          status: this.medicalArr.status,
          medical_store: this.medicalArr.medical_store,
          address: this.medicalArr.address,
          address: this.medicalArr.address,
          location: this.medicalArr.location,
          special_offer: this.medicalArr.special_offer,
          add_qty: this.medicalItem.addCount[this.medicalArr.txn_id],
        };
        this.incrementCount.push(incrementObj);
      }
      (this.medicalArr.account_id = ""),
        (this.medicalArr.equipment_sub_id = ""),
        (this.medicalArr.equipment_id = ""),
        (this.medicalArr.agent_name = ""),
        (this.medicalArr.equipment_sub_name = ""),
        (this.medicalArr.item_name = ""),
        (this.medicalArr.price = ""),
        (this.medicalArr.units = ""),
        (this.medicalArr.equipment_image = ""),
        (this.medicalArr.status = ""),
        (this.medicalArr.medical_store = ""),
        (this.medicalArr.address = ""),
        (this.medicalArr.special_offer = ""),
        (this.medicalArr.txn_id = "");
    },

    onEquipmentPartner(item) {
      const index = this.medicalItems_rows.indexOf(item);
      this.eqpRows = Object.assign({}, item);
      this.getBookingEquipmentTypes(item);
      this.medicalItem.addCount = [];
      this.incrementCount = [];
    },
    medicalSearch(item1, item2) {
      var equObj = {
        item_name: this.bookingMedical.item_name,
        date: this.bookingMedical.date,
        no_of_days: this.bookingMedical.days_booked_for,
      };
      this.selectCityBasis = "";
      let array = [];
      for (var i = 0; i < item2.length; i++) {
        array.push(item2[i].item_id);
      }
      var arrayObj = {
        city: item1,
        array: array,
      };
      if (
        this.bookingMedical.item_name != "" &&
        this.bookingMedical.date != "" &&
        this.bookingMedical.days_booked_for != ""
      ) {
        this.getEquipmentBookingDetails(arrayObj);
      } else if (
        this.bookingMedical.item_name == "" ||
        this.bookingMedical.date == "" ||
        this.bookingMedical.days_booked_for == ""
      ) {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "Please Fill All the Details Correctly!",
        });
      }
    },
    submitEquipmentBookingData() {
      if (this.incrementCount.length > 0) {
        if (
          this.$refs.verifyCountryCode.validate() &&
          this.$refs.verifyMobile.validate() &&
          this.$refs.verifyEmail.validate()
        ) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Proceed the Payment ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.guestMedicalDetails.booking_id =
                this.EquipmentId.data[0].booking_id;
              this.guestMedicalDetails.booking_order_id =
                this.EquipmentId.data[0].booking_order_id;
              this.guestMedicalDetails.booking_city =
                this.EquipmentId.data[0].property_city_name;
              this.guestMedicalDetails.booking_city_id =
                this.EquipmentId.data[0].property_city_id;
              this.guestMedicalDetails.hotel_property_name =
                this.EquipmentId.data[0].property_name;
              this.guestMedicalDetails.near_hospital_name =
                this.EquipmentId.data[0].near_hospital_name;
              this.guestMedicalDetails.check_in =
                this.EquipmentId.data[0].check_in;
              this.guestMedicalDetails.check_out =
                this.EquipmentId.data[0].check_out;
              this.guestMedicalDetails.guest_count =
                this.EquipmentId.data[0].guest_count;
              this.guestMedicalDetails.no_of_days =
                this.EquipmentId.data[0].no_of_days;
              this.guestMedicalDetails.eqp_booking_date =
                this.bookingMedical.date;
              this.guestMedicalDetails.eqp_booking_type =
                this.bookingMedical.item_name;
              this.guestMedicalDetails.days_booked_for =
                this.bookingMedical.days_booked_for;
              // this.guestMedicalDetails.adult_count =
              //   this.searchItem.adult_count;
              // this.guestMedicalDetails.child_count =
              //   this.searchItem.child_count;
              // this.guestMedicalDetails.formDetailsObj = this.formDetails;
              this.guestMedicalDetails.total_item_qty = this.getMedicalQty;
              this.guestMedicalDetails.total_qty_booked = this.getQtyValue;
              this.guestMedicalDetails.medical_charges = this.medicalCharges;
              // this.guestMedicalDetails.discount =
              //   this.incrementCount[0].special_offer;
              // this.guestMedicalDetails.discount_price = this.discount;
              // this.guestMedicalDetails.base_price = this.basicPrice;
              this.guestMedicalDetails.mh_offer_coupon =
                this.selected_offer_name == "APPLY COUPON"
                  ? ""
                  : this.selected_offer_name;
              this.guestMedicalDetails.mh_offer_price =
                this.selected_offer_price;
              this.guestMedicalDetails.price_after_discount =
                this.priceAfterDiscount;
              this.guestMedicalDetails.gst_percentage = 18;
              this.guestMedicalDetails.gst_on_base_price = this.gstOnPrice;
              this.guestMedicalDetails.cgst_percentage = 9;
              this.guestMedicalDetails.cgst_amount = this.cGstOnPrice;
              this.guestMedicalDetails.sgst_percentage = 9;
              this.guestMedicalDetails.sgst_amount = this.cGstOnPrice;
              this.guestMedicalDetails.payable_amount = this.payableAmount;
              this.guestMedicalDetails.country_name =
                this.formDetails.selected_country.name;
              this.guestMedicalDetails.country_code =
                this.formDetails.selected_country.code;
              this.guestMedicalDetails.gstin_no = this.formDetails.gstin_no;
              this.guestMedicalDetails.mobile_number =
                this.formDetails.mobile_no;
              this.guestMedicalDetails.whatsapp_number =
                this.formDetails.whatsapp_number;
              this.guestMedicalDetails.email_id = this.formDetails.email_id;
              this.guestMedicalDetails.selectedMedicalObj = this.incrementCount;

              let guestMedicalData = this.guestMedicalDetails;
              this.showRazorpay(guestMedicalData);
            });
        } else {
          this.$q.notify({
            color: "negative",
            position: "top",
            message: "Please Enter the Mobile Number",
          });
        }
      } else {
        this.$q.notify({
          position: "top",
          color: "negative",
          message: "Please Select Equipment Items to Continue",
        });
      }
    },
    loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    },
    async showRazorpay(item) {
      let paymentObj = {
        total_price: item.payable_amount,
        phone_number: item.mobile_number,
      };
      var res = await this.loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      api
        .post("/razorPayPayment/medicalPayment", paymentObj)
        .then((response) => {
          if (response.status == 200) {
            const options = {
              currency: response.data.currency,
              amount: response.data.amount.toString(),
              order_id: response.data.id,
              name: "Mangohomz Payment",
              description: "Stay Well. Get Well.",
              image:
                "https://mangohomz.com/img/MHmini_logo_128x128.b523dbe5.png",
              handler: (response) => {
                if (
                  (response.razorpay_order_id != "" ||
                    response.razorpay_order_id != null) &&
                  (response.razorpay_payment_id != "" ||
                    response.razorpay_payment_id != null) &&
                  (response.razorpay_signature != "" ||
                    response.razorpay_signature != null)
                ) {
                  item.razorpay_order_id = response.razorpay_order_id;
                  item.razorpay_payment_id = response.razorpay_payment_id;
                  item.razorpay_signature = response.razorpay_signature;
                }

                this.saveEquipmentBookingDetails(item);
              },
              prefill: {
                name: "Sedots",
                email: item.email_id,
                contact: item.mobile_number,
              },
            };
            var rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", function (response) {});
            rzp1.open();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    selectOffer(item) {
      this.selected_offer_name = item.offer_name;
      this.selected_offer_price = item.offer_price;
      this.$q.notify({
        color: "green",
        position: "top",
        message: `The Selected Offer has been Added!`,
      });
    },
    removeCoupon() {
      this.selected_offer_name = "APPLY COUPON";
      this.selected_offer_price = "0";
    },
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
    closeDialog1() {
      this.$refs.qDateProxy1.hide();
    },
    showDocument(file) {
      this.url = filepaths.mhepFilePath + file;
      this.visible = false;
    },
    backTo() {
      this.$router.push("/");
      this.confirm = false;
    },
  },
  noOfDays(date1, date2) {
    date1 = date1.split("/");
    date2 = date2.split("/");
    date1 = new Date(date1[0], date1[1], date1[2]);
    date2 = new Date(date2[0], date2[1], date2[2]);
    var date1_unixtime = parseInt(date1.getTime() / 1000);
    var date2_unixtime = parseInt(date2.getTime() / 1000);
    var timeDifference = date2_unixtime - date1_unixtime;
    var timeDifferenceInHours = timeDifference / 60 / 60;
    var timeDifferenceInDays = timeDifferenceInHours / 24;
    return timeDifferenceInDays;
  },

  // selectOffer(item) {
  //   this.selected_offer_name = item.offer_name;
  //   this.selected_offer_price = item.offer_price;
  //   this.$q.notify({
  //       color: "green",
  //       position: "top",
  //       message: `The Selected Offer has been Added!`
  //     });
  // },
  removeCoupon() {
    this.selected_offer_name = "APPLY COUPON";
    this.selected_offer_price = "0";
  },
  closeDialog() {
    this.$refs.qDateProxy.hide();
  },
  closeDialog1() {
    this.$refs.qDateProxy1.hide();
  },
  showDocument(file) {
    this.url = filepaths.mhepFilePath + file;
    this.visible = false;
  },
  backTo() {
    this.$router.push("/");
    this.confirm = false;
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
.grad
  background-image: linear-gradient(to bottom, green 30%, #2907a2 10%)
</style>
