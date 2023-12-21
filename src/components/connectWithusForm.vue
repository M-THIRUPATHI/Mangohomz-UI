<template>
  <div>
    <!-- style="margin-top: -28% ;width:100%;z-index:2;" -->
    <!-- Mobile View Code -->

    <div class="q-pa-xs lt-sm"></div>
    <!-- Website View Code -->
    <!-- style="float:right;margin-top:-28.25%;margin-right:-1%;width:70%;z-index:2;" -->
    <div
      class="q-px-lg gt-xs connectform"

    >
      <div>
        <div class="row col-12">
          <div
            class="q-video"
            width="653"
            style="margin-right: 50px; height: 100px;padding-left: 0px;"
          >
            <iframe
              width="653"
              height="380"
              src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div
            class="q-video"
            width="653"
            style="margin-right: 50px; height: 100px"
          >
            <iframe
              width="653"
              height="380"
              src="https://twitter.com/mangohomz?ref_src=twsrc%5Etfw"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div
            class="q-video"
            width="653"
            style="margin-right: 50px; height: 100px"
          >
            <iframe
              width="653"
              height="380"
              src="https://mangohomz.ai/blog/"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div
            class="q-video"
            width="853"
            style="margin-right: 50px; height: 100px"
          >
            <q-btn
              color="black"
              label="Reach Us"
              @click="connectWithusDialogOpen()"
              ><q-tooltip class="bg-primary text-body2"
                >Reach us</q-tooltip
              ></q-btn
            >
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { date } from "quasar";

// import { CoolSelect } from "vue-cool-select";
let date3 = new Date();
let date4 = date3.setDate(date3.getDate() + 1);
let selectedDate1 = "";
// let city_array = this.$store.state.store.dropdown.city_arr;

export default {
  name: "connect-form-comp",
  // components: { CoolSelect },

  data() {
    return {

      //loadingState: false,
      connectwithusDialog: false,


    };
  },
  //   meta(){
  // return{
  //   title:this.title
  // }
  //   },

  computed: {
    ...mapState({

    }),


  },
  mounted() {
   // this.$store.dispatch("dropdown/loadAllCities");
  },
  methods: {
   // ...mapActions("dropdown", ["loadAllHospitals"]),



   connectWithusDialogOpen() {
    // console.log("asdasd")
      this.connectwithusDialog = true;
    },


  },
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
@media screen and (min-width: 1920px) {
  .bookingform {
    padding: 6%;
  }
}
</style>
