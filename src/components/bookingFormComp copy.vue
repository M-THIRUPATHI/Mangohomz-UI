<template>
  <div style="float:right;margin-top: 60px">
    <!-- start to cope code -->
    <div class="q-px-lg lt-sm" style="margin-top: 50px ;width:100%;z-index:2;">
      <div>
        <q-card class="rounded-borders" flat>
          <div class="row q-pa-sm q-gutter-xs">
            <q-select
              label="City/Hospital"
              :options="options"
              v-model="defaultItem.city"
              label-color="black"
              option-value="hospital_id"
              option-label="hospital"
              options-dense
              outlined
              fill-input
              reactive-rules
              dense
              clearable
              class="col-12"
              style="width:300px"
              use-input
              input-debounce="0"
              @filter="filterFn"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>

            <!-- <q-select
            outlined
            dense
            class="col"
            label="Hospital"
            label-color="black"
            :options="hospital"
            v-model="defaultItem.hospital"
            option-value="hospital_id"
            option-label="hospital_name"
            options-dense
            lazy-rules
          /> -->
            <q-input
              class="col-6"
              outlined
              v-model="defaultItem.date"
              dense
              mask="date"
              label="Check-in"
              label-color="black"
              style="width:130px"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="defaultItem.date"
                      minimal
                      :options="optionsFn"
                    >
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input
              class="col-6"
              outlined
              v-model="defaultItem.date1"
              dense
              mask="date"
              label="Check-out"
              label-color="black"
              style="width:130px"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="defaultItem.date1"
                      minimal
                      :options="date => date >= defaultItem.date"
                    >
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-btn
              label="Guest"
              v-model="defaultItem.guest"
              label-color="black"
              outlined
              dense
              style="width:100px"
              color="primary"
              @click="show_guest_cards = !show_guest_cards"
            >
            </q-btn>

            <q-btn
              dense
              class=" bg-primary text-white text-capitalize"
              to="/searchList"
              ><q-icon name="search"
            /></q-btn>
          </div>
        </q-card>
      </div>

      <div class="row " v-show="show_guest_cards">
        <!-- <div style="background-color:#FFF;opacity: 0.7;" class="col-6 ">
        <div class="text-weight-bold text-center " style="padding-top:20px">
          PATIENT - FRIENDLY STAY
          <q-img
            src="~assets/logos/MHmini_logo_128x128.png"
            style="width:40px;"
          ></q-img>
          POCKET - FRIENDLY BUDGET
        </div>
        <div class="text-weight-bold text-center q-pa-lg">
          Nobody handles medical stays like we do.
        </div>
      </div> -->
        <div class="col-12 q-pa-sm q-gutter-sm  col-sm-12 col-md-12 col-lg-12 ">
          <q-list style="max-width: 800px" class="rounded-borders bg-white">
            <q-item>
              <q-item-section>
                <q-item-label lines="1" class="text-bold">Adults</q-item-label>
                <q-item-label caption lines="2">
                  <!-- <span class="text-weight-bold">John</span> -->
                  <span class="text-black">Age 13 or above</span>
                </q-item-label>
              </q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :disable="adult_count <= 0 ? true : false"
                    icon="mdi-minus-circle-outline"
                    @click="--adult_count"
                  />
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :label="adult_count"
                    v-model="adult_count"
                  />
                  <q-btn
                    size="12px"
                    flat
                    dense
                    round
                    :disable="adult_count >= 4 ? true : false"
                    icon="mdi-plus-circle-outline"
                    @click="adult_count++"
                  />
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label lines="1">Children</q-item-label>
                <q-item-label caption lines="2">
                  <!-- <span class="text-weight-bold">John</span> -->
                  <span class="text-black">Age 2 - 12</span>
                </q-item-label>
              </q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :disable="child_count <= 0 ? true : false"
                    icon="mdi-minus-circle-outline"
                    @click="--child_count"
                  />
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :label="child_count"
                    v-model="child_count"
                  />
                  <q-btn
                    size="12px"
                    flat
                    dense
                    round
                    :disable="child_count >= 4 ? true : false"
                    icon="mdi-plus-circle-outline"
                    @click="child_count++"
                  />
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label lines="1">Infants</q-item-label>
                <q-item-label caption lines="2">
                  <!-- <span class="text-weight-bold">John</span> -->
                  <span class="text-black"> under-2</span>
                </q-item-label>
              </q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :disable="infant_count <= 0 ? true : false"
                    icon="mdi-minus-circle-outline"
                    @click="--infant_count"
                  />
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    :label="infant_count"
                    v-model="infant_count"
                  />
                  <q-btn
                    size="12px"
                    flat
                    dense
                    round
                    :disable="infant_count >= 4 ? true : false"
                    icon="mdi-plus-circle-outline"
                    @click="infant_count++"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- end code -->
    <div>
      <q-card class="rounded-borders " flat>
        <div class="row q-pa-xs">
          <div class="row q-pa-xs q-gutter-xs">
            <q-input label="City" outlined dense class="col" />

            <q-input outlined dense class="col" label="Hospital" lazy-rules />
            <q-input outlined dense class="col" label="Check-in" lazy-rules />
            <q-input outlined dense class="col" label="Check-out" lazy-rules />
            <q-btn
              icon="search"
              dense
              flat
              color="primary"
              label="Search"
            ></q-btn>
          </div>
        </div>
      </q-card>
    </div>

    <div>
      <div class="text-weight-bold" style="padding-top:20px">
        <p>PATIENT-FRIENDLY STAY</p>

        <q-icon
          ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
        ></q-icon>
        <p>POCKET_FRIENDLY BUDGET</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "booking-form-comp"
};
</script>
<style>
.container {
  position: absolute;
}
.text-block {
  position: absolute;
  bottom: 8px;
  right: 16px;
  position: absolute;

  background-color: black;
  color: white;
}
</style>
