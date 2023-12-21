<template>
  <q-page style="padding-top: 100px" class="q-pa-sm">
      <booking-list />
  </q-page>
</template>

<script>

import BookingList from "../../components/partnerCards/bookingsListView.vue";
//import AccountsList from "../../components/partnerCards/bookingAccountsView.vue";
// import TableVisits from "../../components/tables/TableVisits.vue";
export default {
  name: "PageIndex",
  components: {
    BookingList,
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
