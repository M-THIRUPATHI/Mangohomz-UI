<template>
  <div>
    <q-page style="padding-top: 150px" class="q-pa-md">
      <q-card flat bordered class="bg-white">
        <div class="q-pa-md row q-gutter-md">
          <q-input
            class="col-3"
            dense
            outlined
            label="Offer Name *"
            hide-bottom-space
            style="width: 250px"
            label-color="black"
            :rules="[required('Name')]"
            v-model="mhOffers.offer_name"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-sale" color="secondary" /> </template
          ></q-input>

          <q-input
            class="col-3"
            dense
            outlined
            label="Offer Price/Percentage*"
            hide-bottom-space
            style="width: 250px"
            label-color="black"
            :rules="[required('Price'), number()]"
            v-model="mhOffers.offer_price"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-currency-inr" color="secondary" /> </template
          ></q-input>

          <q-input
            class="col-3"
            dense
            outlined
            label="Offer Start Date*"
            hide-bottom-space
            style="width: 250px"
            label-color="black"
            :rules="[required('Offer Start Date')]"
            v-model="mhOffers.offer_start_date"
            @click="$refs.qDateProxy1.show()"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy1"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                  flat
                    v-model="mhOffers.offer_start_date"
                    minimal
                    :options="optionsFn1"
                    mask="DD/MM/YYYY"
                    @click="fromDateSelected"
                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup @click="fromDateSelected" label="Ok" color="primary" flat />
                      <q-btn
                        v-close-popup
                        label="Close"
                        color="primary"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            class="col-3"
            dense
            outlined
            label="Offer End Date*"
            hide-bottom-space
            style="width: 250px"
            label-color="black"
            :rules="[required('Offer End Date')]"
            v-model="mhOffers.offer_end_date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy2"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="mhOffers.offer_end_date"
                    minimal
                    mask="DD/MM/YYYY"
                    :options="optionsFn2"

                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Ok" color="primary" flat />
                      <!-- <q-btn v-close-popup label="Close" color="primary" flat /> -->
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            class="col-3"
            dense
            outlined
            label="Offer Type*"
            hide-bottom-space
            style="width: 250px"
            label-color="black"
            :rules="[required('type')]"
            v-model="mhOffers.offer_type"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-home-city" color="secondary" /> </template
          ></q-input>
         <q-select
            class="col-3"
            dense
            options-dense
            outlined
            use-input
            fill-input
            hide-selected
            label="Offer From whom *"
            :options="[
              'Property Partner',
              'Equipment Partner',
              'Food Partner',
              'Travel Partner'
            ]"
            hide-bottom-space
            style="width: 250px"
            label-color="black"
            :rules="[required('Name')]"
            v-model="mhOffers.offer_from_whom"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-account" color="secondary" /> </template
          ></q-select>
          <q-input
            class="col-3"
            dense
            outlined
            label="Offer Description*"
            hide-bottom-space
            style="width: 250px"
            label-color="black"
            :rules="[required('Discription')]"
            v-model="mhOffers.offer_description"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-comment" color="secondary" /> </template
          ></q-input>
        </div>
        <div class="q-pa-md row q-gutter-md">
          <q-stepper-navigation>
            <q-btn @click="onSubmit" color="secondary" label="Submit" />
          </q-stepper-navigation>
        </div>
      </q-card>
    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-sale" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>
        <b> User Name: {{ userDetails.user_name }}</b>
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";
import { date } from "quasar";


const transportRegMaster = () => {
  return {};
};
export default {
  data() {
    return {
      dialogTitle: "",
      ...validations,
      url: "",
      title: "MH Offers",
      maximizedToggle: true,
      booking: false,
      selected: [],
      data: [],
      details: false,
      visible: false,
      showPanDoc: false,
      // editItem: {},
      pagination: {
        rowsPerPage: 10,
      },
      optionsFn1(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");

      },
      mhOffers: {
        offer_name: "",
        offer_price: "",
        offer_start_date: "",
        offer_end_date: "",
        offer_type: "",
        offer_from_whom: "",
        offer_description: "",
      },

      mode: "list",
      filter: "",
    };
  },
  computed: {
    ...mapState({
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
    }),

     optionsFn2(d) {
      let fromDate = date.formatDate(this.mhOffers.offer_start_date.split("/").reverse().join("-"), "YYYY/MM/DD");
      return d => d >= fromDate;
    }

  },

  mounted() {

  },

  meta() {
    return {
      title: this.title,
    };
  },
  methods: {
    ...mapActions("partners", ["createTransporterRegDetails",]),
    ...mapActions("partners", ["approvePartner"]),
    ...mapActions("partners", ["saveMhOffers"]),

    fromDateSelected() {
      this.mhOffers.offer_end_date = this.mhOffers.offer_start_date
    },

    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.booking = true;
      this.getBookingDetails(this.editedItem);
    },
    onSubmit() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you want to Submit data ?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.saveMhOffers(this.mhOffers);
         // this.resetFiles();
          this.$router.push("/admin");
        this.$router.push("/adminDashboard");
        })
        .onCancel(() => {
          this.resetFiles();
        });
    },
  },
  closeDialog() {
    this.$refs.qDateProxy1.hide();
  },
  // closeDialog1() {
  //   this.$refs.qDateProxy1.hide();
  // },

  resetFiles() {
    this.mhOffers.offer_name = [];
    this.mhOffers.offer_price = [];
    this.mhOffers.offer_start_date = [];
    this.mhOffers.offer_end_date = [];
    this.mhOffers.offer_type = [];
    this.mhOffers.offer_from_whom = [];
    this.mhOffers.offer_description = [];
  },
};
</script>
