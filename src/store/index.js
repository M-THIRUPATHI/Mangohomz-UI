import Vue from "vue";
import Vuex from "vuex";
import { account } from "./modules/account";
import { alerts_loaders } from "./modules/alerts_loaders";
import { master } from "./modules/master";
import { dropdown } from "./modules/dropdown";
import { partners } from "./modules/partners";
import { booking } from "./modules/booking";
import { dashboard } from "./modules/dashboard";
import { cancelled } from "./modules/cancelled";
import { centeraccounts } from "./modules/centeraccounts";
import { mostrecentsearch } from "./modules/mostrecentsearch";
import { adminDashboard } from "./modules/adminDashboard";
import { genie } from "./modules/genie";


Vue.use(Vuex);

//export store module
export default new Vuex.Store({
  modules: {
    account,
    alerts_loaders,
    master,
    dropdown,
    partners,
    booking,
    dashboard,
    cancelled,
    centeraccounts,
    mostrecentsearch,
    adminDashboard,
    genie
  }
});
