<template>
  <q-page-container class="bg-indigo-1">
    <headerTag />
    <q-page style="padding-top: 60px" class="q-pa-md grad">
      <div class="justify-center">
        <div class="q-pa-md row justify-center q-gutter-md">
          <q-card
            flat
            :class="class_val"
            class="bg-white"
            style="max-width:600px;"
          >
            <!-- <div class="bg-white justify-center col-12 q-pa-md"> -->
            <div class="row">
              <div class="text-h6 text-bold q-pa-sm" style="color:grey">
                PAYMENT MODE
              </div>
            </div>
            <q-separator />
            <q-card-section padding style="padding-top:20px;">
              <q-item
                class="row col-12 text-bold text-caption items-center"
                style="background-color:#E4FAE9"
              >
                <q-icon
                  color="blue"
                  name="mdi-check-circle"
                  size="22px"
                  class="q-mr-sm"
                />
                <span
                  >You save Rs 999 with<span
                    class="text-secondary q-ml-xs text-bold"
                    >{{ this.medicalBookingGuestData[0].usedOffer }}</span
                  ></span
                >
              </q-item>
            </q-card-section>
            <div class="row">
              <div
                class="text-subtitle1 q-mt-sm q-ml-md q-mb-sm text-bold"
                style="color:grey"
              >
                SELECT PAYMENT MODE
              </div>
            </div>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              icon="credit_card"
              header-class="text-grey text-bold"
              expand-separator
              label="YOUR SAVED CARD"
            >
              <q-card>
                <q-card-section>
                  <q-form ref="savedCard">
                    <div class="row justify-center q-mb-xs">
                      <q-input
                        class="col-3"
                        dense
                        outlined
                        filled
                        label="Enter Card Number *"
                        hide-bottom-space
                        mask="################"
                        style="width: 350px"
                        label-color="black"
                        :rules="[required('Card Number')]"
                      ></q-input>
                    </div>
                    <div class="row text-bold" style="margin-left:110px;color:">
                      valid thru
                    </div>
                    <div class="row justify-center">
                      <q-input
                        style="width: 120px"
                        class="q-mr-xs"
                        filled
                        square
                        dense
                        lazy-rules
                        mask="##"
                        label="MM"
                        hide-bottom-space
                        :rules="[required('Month')]"
                      ></q-input>
                      <q-input
                        style="width: 120px"
                        class="q-mr-xs"
                        filled
                        square
                        dense
                        lazy-rules
                        mask="####"
                        label="YYYY"
                        hide-bottom-space
                        :rules="[required('Year')]"
                      ></q-input>
                      <q-input
                        class="col-3"
                        dense
                        outlined
                        filled
                        label="CVV *"
                        mask="###"
                        hide-bottom-space
                        style="width: 100px"
                        label-color="black"
                        :rules="[required('CVV')]"
                      ></q-input>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />

            <q-expansion-item
              group="somegroup"
              icon="credit_card"
              header-class="text-grey text-bold"
              expand-separator
              label="UPI"
            >
              <q-card>
                <q-card-section>
                  <q-form ref="upiForm">
                    <div class="row justify-center q-mb-xs">
                      <q-input
                        class="col-4"
                        dense
                        outlined
                        filled
                        label="Enter Your UPI ID *"
                        hide-bottom-space
                        style="width: 350px"
                        label-color="black"
                        :rules="[required('UPI ID')]"
                      ></q-input>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              icon="credit_card"
              header-class="text-grey text-bold"
              expand-separator
              label="DEBIT / CREDIT CARD"
            >
              <q-card>
                <q-card-section>
                  <q-form ref="debitCardForm">
                    <div class="row justify-center q-mb-xs">
                      <q-input
                        class="col-3"
                        dense
                        outlined
                        filled
                        label="Enter Card Number *"
                        hide-bottom-space
                        mask="################"
                        style="width: 350px"
                        label-color="black"
                        :rules="[required('Card Number')]"
                      ></q-input>
                    </div>
                    <div class="row text-bold" style="margin-left:110px;color:">
                      valid thru
                    </div>
                    <div class="row justify-center">
                      <q-input
                        style="width: 120px"
                        class="q-mr-xs"
                        filled
                        square
                        dense
                        lazy-rules
                        mask="##"
                        label="MM"
                        hide-bottom-space
                        :rules="[required('Month')]"
                      ></q-input>
                      <q-input
                        style="width: 120px"
                        class="q-mr-xs"
                        filled
                        square
                        dense
                        lazy-rules
                        mask="####"
                        label="YYYY"
                        hide-bottom-space
                        :rules="[required('Year')]"
                      ></q-input>
                      <q-input
                        class="col-3"
                        dense
                        outlined
                        filled
                        label="CVV *"
                        mask="###"
                        hide-bottom-space
                        style="width: 100px"
                        label-color="black"
                        :rules="[required('CVV')]"
                      ></q-input>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              icon="credit_card"
              header-class="text-grey text-bold"
              expand-separator
              label="EMI"
            >
              <q-card>
                <q-card-section>
                  <div style="text-align:center">
                    <q-btn
                      class="text-center text-bold"
                      dense
                      label="SELECT EMI PLANS"
                      color="secondary"
                      style="padding: 4px 20px"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              icon="credit_card"
              header-class="text-grey text-bold"
              expand-separator
              label="GOOGLE PAY"
            >
              <q-card>
                <q-card-section>
                  <div style="text-align:center">
                    <q-btn
                      class="text-center text-bold"
                      dense
                      label="PAY USING GPAY"
                      color="secondary"
                      style="padding: 4px 20px"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              icon="credit_card"
              header-class="text-grey text-bold"
              expand-separator
              label="NET BANKING"
            >
              <q-card>
                <q-card-section>
                  <div style="text-align:center">
                    <q-btn
                      class="text-center text-bold"
                      dense
                      label="PAY USING INTERNET BANKING"
                      color="secondary"
                      style="padding: 4px 20px"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              icon="credit_card"
              header-class="text-grey text-bold"
              expand-separator
              label="PAYPAL"
            >
              <q-card>
                <q-card-section>
                  <div style="text-align:center">
                    <q-btn
                      class="text-center text-bold"
                      dense
                      label="PAY USING PAYPAL"
                      color="secondary"
                      style="padding: 4px 20px"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <div style="text-align:center">
              <q-chip
                square
                class="text-center text-bold"
                dense
                clickable
                @click="payTotalAMount()"
                color="secondary"
                style="margin:30px 0px;padding: 20px 180px"
                >PAY  Rs. {{medicalBookingGuestData[0].payable_amount}}</q-chip
              >
              <!-- <q-btn
                class="text-center text-bold"
                dense
                label="PAY Rs 13,002"
                @click="payTotalAMount()"
                color="secondary"
                style="margin:30px 0px;padding: 4px 80px"
              /> -->
            </div>
          </q-card>
        </div>
      </div>
    </q-page>
    <!-- <footer-tag /> -->
  </q-page-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
import validations from "../helpers/validations";
import headerTag from "./header.vue";
// import footerTag from "./footer.vue";
export default {
  components: {
    headerTag
    // footerTag,
  },
  data() {
    return {
      ...validations,
      class_val: "shadow-1 hotel-details-card-1",
      days: 0,
      confirm: false
    };
  },
  created() {
    this.medicalBookingGuestData = [];
    this.medicalBookingGuestData.push(this.$route.params.medicalbookingdata);
  },
  computed: {
    ...mapState({
      hotel_list: state => state.booking.hotelDetails
    }),
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    }
  },
  mounted() {},
  methods: {
    ...mapActions("booking", ["saveEquipmentBookingDetails"]),
    ...mapActions("booking", ["saveFoodBookingDetails"]),
    ...mapActions("booking", ["saveBookingData"]),

    backTo() {
      this.$router.push("/");
      this.confirm = false;
    },
    payTotalAMount() {
      this.saveEquipmentBookingDetails(this.medicalBookingGuestData[0]);
      // this.saveFoodBookingDetails(this.medicalBookingGuestData[0]);
      // let guestNo = this.medicalBookingGuestData[0].mobile_number;
      // this.$router.push({
      //   name: "Get Guest phone Number",
      //   params: { guestNumber: guestNo }
      // });
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 500px
.grad
    background-image: linear-gradient(to bottom, green 30%, #2907a2 10%)
</style>
