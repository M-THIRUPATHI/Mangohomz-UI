import { api } from "boot/axios";

//intial state
const state = () => ({
    userpatient_details_rows: [],
    userpatient_details_columns:[
      {
        name: "s_no",
        align: "center",
        label: "Sno",
        field: "s_no",
        headerClasses: "bg-primary text-white",
      },
      {
        name: "patient_firstname",
        align: "center",
        label: "First Name",
        field: "patient_firstname",
        headerClasses: "bg-primary text-white",
        align: "center",
      },
      {
        name: "patient_lastname",
        align: "center",
        label: "Last Name",
        field: "patient_lastname",
        headerClasses: "bg-primary text-white",
      },
      {
       name: "email_id",
       align: "center",
       label: "Email Id",
       field: "email_id",
       headerClasses: "bg-primary text-white",
     },
      {
        name: "phone_number",
        align: "center",
        label: "Phone Number",
        field: "phone_number",
        headerClasses: "bg-primary text-white",
      },
      {
        name: "patient_location",
        align: "center",
        label: "Location",
        field: "patient_location",
        headerClasses: "bg-primary text-white",
      },
      {
        name: "problem",
        align: "center",
        label: "Problem",
        field: "problem",
        headerClasses: "bg-primary text-white",
      },
      {
        name: "pr_description",
        align: "center",
        label: "Problem Description",
        field: "pr_description",
        headerClasses: "bg-primary text-white",
      },
      {
       name: "created_datetime",
       align: "center",
       label: "Date&Time",
       field: "created_datetime",
       headerClasses: "bg-primary text-white",
     },
    ],
    genieuser_details_rows:[]
});

///getters
const getters = {
    user_id: (state) => state.user_id,
    userpatient_details_rows: state => state.userpatient_details_rows,
    genieuser_details_rows: state => state.genieuser_details_rows

};

//actions
const actions = {
  //Signup User
  async userSignupDetails({ dispatch }, payload) {
    try {
      const response = await api.post("/mhGenieMaster/userSignupDetails", payload);
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(
        "alerts_loaders/showAlert",
        { msg: "Failed To Save User Signup Data", type: "negative" },
        { root: true }
      );
    }
  },
  //Login User
  async mhgenieLogin({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/loginLoading", "", { root: true });
    try {
      const user_id = user.user_id || "";
      let response = await api.post(`/mhGenieMaster/mhgenieLogin`, payload);
      let result = response.data;
      let status = result.status;
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
      }, 1500);
      dispatch(
        "alerts_loaders/showAlert",
        { msg: result.message, type: status ? "positive" : "negative" },
        { root: true }
      );
      // console.log(result, status);
      return { status };
    } catch (error) {
      commit("LOGIN_FAILURE");
      // dispatch("alerts_loaders/stopLoading", "", { root: true });
      throw error;
    }
  },
  async savePatientDetails({ dispatch }, payload) {
    try {
      const response = await api.post("/mhGenieMaster/savePatientDetails", payload);
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(
        "alerts_loaders/showAlert",
        { msg: "Failed To Save Patient Data", type: "negative" },
        { root: true }
      );
    }
  },

  getPatientDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/mhGenieMaster/getPatientDetails`)
        .then(response => {
          let usermenus = response.data;
          commit("GET_PATIENT_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While loading patient Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getgenieuserdetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/mhGenieMaster/getgenieuserdetails`)
        .then(response => {
          let usermenus = response.data;
          // console.log(response.data);
          commit("GET_GENIEUSER_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While loading User Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
};

// mutations

const mutations = {
  LOGIN_FAILURE(state) {},
  GET_PATIENT_DETAILS(state, rows) {
    state.userpatient_details_rows = rows;
  },
  GET_GENIEUSER_DETAILS(state, rows) {
    state.genieuser_details_rows = rows;
  },
};

export const genie = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
