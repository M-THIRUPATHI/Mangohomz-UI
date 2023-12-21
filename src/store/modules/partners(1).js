import { api } from "boot/axios";
//intial state
const state = () => ({
  agent_registration_rows: [],
  agent_registration_columns: [
    {
      align: "center",
      label: "#",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Agent Name",
      // field: "agent_name",
      field: row => row.agent_name,
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
      // headerClasses: "text-bold "
    },
    {
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
      // headerClasses: "text-bold "
    },
    {
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
      // headerClasses: "text-bold "
    },
    {
      align: "left",
      label: "Commission",
      field: "agent_commission",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
      // headerClasses: "text-bold "
    }
  ],
  property_partner_registration_rows: [],
  property_partner_registration_columns: [
    {
      align: "center",
      label: "#",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Property Partner Name",
      field: "agent_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Aadhaar No",
      field: "aadhar",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  food_partner_registration_rows: [],
  food_partner_registration_columns: [
    {
      align: "center",
      label: "#",
      field: "id",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Food Partner Name",
      field: "food_partner_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Email ID",
      field: "email",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Food Partner ID",
      field: "food_partner_reg_no",
      headerClasses: "bg-primary text-white"
    }
  ],
  transport_reg_rows: [],
  transport_reg_columns: [
    {
      align: "center",
      label: "#",
      field: "id",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Transport Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Bank Account No",
      field: "bankAccountNo",
      headerClasses: "bg-primary text-white"
    }
  ],
  equipment_partner_registration_rows: [],
  equipment_partner_registration_columns: [
    {
      align: "center",
      label: "#",
      field: "id",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Equipment Partner Name",
      field: "equipment_partner_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Email ID",
      field: "email",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Equipment Partner ID",
      field: "equipment_partner_reg_no",
      headerClasses: "bg-primary text-white"
    }
  ],
  property_reg_rows: [],
  property_reg_cols: [
    {
      align: "center",
      label: "#",
      field: "id",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Property Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Property Partner ID",
      field: "partner_partner_reg_no",
      headerClasses: "bg-primary text-white"
    }
  ]
});

///getters
const getters = {
  agent_registration_rows: state => state.agent_registration_rows,
  property_partner_registration_rows: state =>
    state.property_partner_registration_rows,
  transport_reg_rows: state => state.transport_reg_rows,
  property_reg_rows: state => state.property_reg_rows
};

//actions
const actions = {
  /* Property Type Master saving*/
  propertyTypeMasterAdd({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyTypeMaster", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getPropertyTypesMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Property Type Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  /* Property Type Master data fetching*/
  getPropertyTypesMaster({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/propertyTypeMaster")
        .then(response => {
          let rows = response.data;

          commit("SET_PROPERTY_TYPE", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Types Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  //agent partner masterr

  /* Property Registration Master*/
  propertyRegistrationMasterAdd({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getPropertyRegistrationMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Property Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Property Registration Master get method*/
  getPropertyRegistrationMaster({ commit, dispatch }) {
    // console.log("in");
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/propertyRegistrationMaster")
        .then(response => {
          let rows = response.data;
          // console.log(rows);
          commit("SET_PROPERTY_REGISTRATION", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  // agent propert partnet saving
  createAgentReg({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/agentApi", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getAgentPartnerRegDetails");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Property Type Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Property Registration Master get method*/
  getAgentPartnerRegDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/agentApi")
        .then(response => {
          // let result = [];
          let rows = response.data;
          // console.log(rows);
          //            rows.forEach(element,index => {
          // sno
          //            });
          commit("SET_AGENT_REG_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // agent propert partnet saving
  createTransporterRegDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transpoterApi", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTransportRegMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Property Type Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTransportRegMaster({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/transpoterApi")
        .then(response => {
          let rows = response.data;
          // console.log(rows);

          commit("SET_TRANSPORT_REG_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  savePropertyRegDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster/savePropertyRegDetails", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getPropertyRegMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Property Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getPropertyRegMaster({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/propertyRegistrationMaster/getMultiplePropertyDetails")
        .then(response => {
          let rows = response.data;
          // console.log(rows);

          commit("SET_TRANSPORT_REG_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  }
};

// mutations

const mutations = {
  SET_PROPERTY_TYPE(state, rows) {
    state.property_type_rows = rows.data;
  },
  SET_PROPERTY_REGISTRATION(state, rows) {
    state.property_partner_registration_rows = rows.data;
  },
  SET_AGENT_REG_DETAILS(state, rows) {
    state.agent_registration_rows = rows.data;
  },
  SET_TRANSPORT_REG_DETAILS(state, rows) {
    state.transport_reg_rows = rows.data;
  }
};

export const partners = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
