<template>
  <div>
    <q-page style="padding-top: 60px" class="q-pa-md">
      <div class="q-pa-md">
        <q-chip clickable icon="mdi-badge-account-horizontal">
          Booking Partners
        </q-chip>
        <q-chip
          clickable
          color="teal"
          text-color="white"
          icon="mdi-food-fork-drink"
        >
          Food Partners
        </q-chip>
        <q-chip
          clickable
          color="red"
          text-color="white"
          icon-right="mdi-badge-account-horizontal"
        >
          <q-avatar color="primary" text-color="white">50</q-avatar>
          Agent Partners
        </q-chip>
        <q-chip
          clickable
          color="orange"
          text-color="white"
          icon="mdi-train-car"
        >
          Transport Partners
        </q-chip>
      </div>
      <agentApprovalComp />
    </q-page>
    <q-page-sticky position="top" expand class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat round dense icon="mdi-account" />
        <q-toolbar-title class="text-subtitle1 text-weight-bold">
          {{ title }}
        </q-toolbar-title>

        <q-btn flat round dense icon="more_vert" />
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>
<script>
import agentApprovalComp from "../../components/partnerApprovals/agentApprovalComp.vue";

export default {
  components: {
    agentApprovalComp
  },
  data() {
    return {
      title: "Partner`s Registration Details"
    };
  },
  computed: {},
  mounted() {},
  meta() {
    return {
      title: this.title
    };
  },
  methods: {}
};
</script>
