<template>
  <q-page style="padding-top: 100px" class="q-pa-sm">
    <div
            class="
              col-lg-12 col-md-12 col-sm-12 col-xs-12
              bg-secondary
              text-white
            "
           >
            <div class="q-pa-xs row justify-center q-gutter-md">
              <!-- <p style="text-align: justify">Welcome <b>{{ userDetails.name }} </b></p> -->
              <div class="row col-12">
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> Name: {{ userDetails.name }}</b>
                  <br />
                  <b>Email: {{ userDetails.email}}</b>
                </div>
                <q-space />
                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 25px;
                    font-family: verdana;
                  "
                >
                  <p style="text-align: justify">
                    <b>Welcome {{ userDetails.name }}</b>
                  </p>
                </div>
                <q-space />

                <div
                  class="q-ma-xs q-pa-xs"
                  style="
                    text-align: justify;
                    font-size: 15px;
                    font-family: verdana;
                  "
                >
                  <b> User Name: {{ userDetails.user_name }}</b>
                  <br />
                  <b>Account Id: {{ userDetails.zone}}</b>
                </div>
              </div>
            </div>
          </div>
    <card-social icon_position="left" />

    <card-charts />

    <div class="row q-col-gutter-sm  q-py-sm">
      <tab-social />
      <card-with-image />
    </div>

    <div class="row q-col-gutter-sm  q-pb-sm">
      <todo-list />

      <card-time-line />
    </div>

    <table-visits />
  </q-page>
</template>

<script>
import CardSocial from "../../components/cards/CardSocial.vue";
import CardCharts from "../../components/cards/CardCharts.vue";
import TabSocial from "../../components/tabs/TabSocial.vue";
import CardWithImage from "../../components/cards/CardWithImage";
import CardTimeLine from "../../components/cards/CardTimeLine.vue";
import TodoList from "../../components/list/TodoList.vue";
// import TableVisits from "../../components/tables/TableVisits.vue";
export default {
  name: "PageIndex",
  components: {
    CardSocial,
    CardCharts,
    //  CardCharts: () => import('components/cards/CardCharts'),
    TabSocial,
    CardWithImage,
    CardTimeLine,
    TodoList
    // TableVisits
  },


  computed: {

userDetails() {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  return user;
},



},
  setup() {
    return {
      mode: "list",
      messages: [
        {
          id: 5,
          name: "Pratik Patel",
          msg:
            " -- I'll be in your neighborhood doing errands this\n" +
            "            weekend. Do you want to grab brunch?",
          avatar: "https://avatars2.githubusercontent.com/u/34883558?s=400&v=4",
          time: "10:42 PM"
        },
        {
          id: 6,
          name: "Winfield Stapforth",
          msg:
            " -- I'll be in your neighborhood doing errands this\n" +
            "            weekend. Do you want to grab brunch?",
          avatar: "https://cdn.quasar.dev/img/avatar6.jpg",
          time: "11:17 AM"
        },
        {
          id: 1,
          name: "Boy",
          msg:
            " -- I'll be in your neighborhood doing errands this\n" +
            "            weekend. Do you want to grab brunch?",
          avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
          time: "5:17 AM"
        },
        {
          id: 2,
          name: "Jeff Galbraith",
          msg:
            " -- I'll be in your neighborhood doing errands this\n" +
            "            weekend. Do you want to grab brunch?",
          avatar: "https://cdn.quasar.dev/team/jeff_galbraith.jpg",
          time: "5:17 AM"
        },
        {
          id: 3,
          name: "Razvan Stoenescu",
          msg:
            " -- I'll be in your neighborhood doing errands this\n" +
            "            weekend. Do you want to grab brunch?",
          avatar: "https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",
          time: "5:17 AM"
        }
      ]
    };
  }
};
</script>
