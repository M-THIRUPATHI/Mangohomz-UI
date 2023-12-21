import {
  Loading,
  QSpinnerIos,
  Notify,
  QSpinnerHourglass,
  QSpinnerFacebook,
  QSpinnerClock
} from "quasar";

//intial state
const state = () => ({
  msg: "Something went wrong Please try again!"
});

///getters
const getters = {
  allUserLogin: state => state.user_login
};

//actions
const actions = {
  startLoading() {
    Loading.show({
      spinner: QSpinnerHourglass,
      spinnerColor: "deep-orange",
      spinnerSize: "5.5em",
      backgroundColor: "grey",
      message: "Data is Loading Please wait!...",
      messageColor: "black"
    });
  },
  landingPageLoading() {
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: "light-blue",
      spinnerSize: "5.5em",
      backgroundColor: "grey",
      message: "Process is in progress.Please Hang on...",
      messageColor: "black"
    });
  },
  saveLoading() {
    Loading.show({
      spinner: QSpinnerClock,
      spinnerColor: "purple",
      spinnerSize: "5.5em",
      backgroundColor: "white",
      message: "Process is in progress.Please Hang on...",
      messageColor: "black"
    });
  },
  loginLoading() {
    Loading.show({
      spinner: QSpinnerIos,
      spinnerColor: "light-blue",
      spinnerSize: "5.5em",
      backgroundColor:"white"
    });
  },
  stopLoading() {
    Loading.hide();
  },
  showAlert({ commit }, data) {
    // commit('set_msg',msg)
    Notify.create({
      type: data.type,
      position: "top",
      message: data.msg ? data.msg : "Something went wrong Please try again!"
    });
  },
  showAlertInteractive({ commit },data) {
    // commit('set_msg',msg)
    Notify.create({
      type: "positive",
      position: "center",
      multiLine: true,
      message: data.msg ? data.msg : "Something went wrong Please try again!",
      actions: [
        { label: 'Close', color: 'white', handler: () => { /* ... */ } }
      ]
    });
  }
};

// mutations
const mutations = {
  set_msg(state, msg) {
    state.msg = msg;
  }
};

export const alerts_loaders = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
