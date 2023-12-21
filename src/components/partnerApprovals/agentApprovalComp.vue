<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
      <q-btn flat icon="mdi-badge-account-horizontal" label="Agent Partners" />
      <q-space />
      <q-tabs
        v-model="tab"
        shrink
        stretch
        inline-label
        active-color="white"
        active-bg-color="primary"
        indicator-color="secondary"
      >
        <q-tab name="mails" label="Pending" />
        <q-tab name="alarms" label="Approved" />
        <q-tab name="movies" label="Rejected" />
      </q-tabs>
    </q-toolbar>
    <div class="q-gutter-y-md">
      <q-card>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="q-pa-md">
              <q-table
                :data="agent_pending_details"
                :columns="agent_pending_columns"
                row-key="agent_id"
              >
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn color="secondary" size="sm" label="Action"
                      ><q-tooltip :disable="$q.platform.is.mobile"
                        >Take action</q-tooltip
                      ></q-btn
                    >
                  </q-td>
                </template>
              </q-table>
            </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="q-pa-md">
              <q-table
                :rows="agent_pending_details"
                :columns="agent_pending_columns"
                row-key="agent_id"
              />
            </div>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="q-pa-md">
              <q-table
                :rows="agent_pending_details"
                :columns="agent_pending_columns"
                row-key="agent_id"
              />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      tab: "mails"
    };
  },
  created() {
  },
  computed: {
    ...mapState({
      agent_pending_columns: state => state.partners.agent_pending_columns,
      agent_pending_details: state => state.partners.agent_pending_details
    })
    // ...mapGetters("partners", ["agent_pending_details"])
  },
  mounted() {
    this.$store.dispatch("partners/getAgentDetailsByStatus", "pending");
  }
};
</script>
