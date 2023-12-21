<template>
  <div>
    <q-page-container>
      <q-page class="q-pa-md q-gutter-xs">
        <div class="row">
          <div class="col-3">
            <q-card class="my-card ">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label
                    ><strong>{{ userDetails.name }}</strong></q-item-label
                  >
                  <q-item-label caption>{{ userDetails.email }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />
              <q-list dense>
                <q-item
                  clickable
                  v-for="item in partner_rows"
                  :key="item.title"
                  :to="item.link"
                >
                  <q-item-section avatar >
                    <q-icon name="inbox" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label >{{ item.title }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  @click="handleLogout"
                  active-class="my-menu-link"
                >
                  <q-item-section avatar>
                    <q-icon name="logout" />
                  </q-item-section>

                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>

            </q-card>
          </div>
          <div class="col-9">
            <!-- this is where the Pages are injected -->

            <router-view></router-view>
          </div>
        </div>
      </q-page>

      <q-page-scroller position="bottom">
        <!-- <q-btn fab icon="keyboard_arrow_up" color="red" /> -->
      </q-page-scroller>
    </q-page-container>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  setup() {
    return {
      drawer: false,
      drawerRight: true
    };
  },
  computed: {
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];

      return user;
    },
    ...mapGetters("account", ["partner_rows"]),
    userMenus() {
      let userMenus = JSON.parse(localStorage.getItem("usermenus")) || [];

      return userMenus;
    }
  },
  mounted() {
    this.$store.dispatch("account/getPartnerMenus");
  },
  methods: {
    ...mapActions("account", ["logout"]),
    handleLogout() {
      this.logout();
    }
  }
};
</script>
