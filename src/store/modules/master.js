import { api } from "boot/axios";

//intial state
const state = () => ({
  room_type_rows: [],
  room_type_columns: [
    {
      align: "center",
      field: "id",
      label: "#",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Room Type",
      field: "room_type",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Room Short Description",
      field: "room_short_description",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Room Long Description",
      field: "room_long_description",
      headerClasses: "bg-primary text-white"
    }
  ],
  facility_type_rows: [],
  facility_type_columns: [
    {
      align: "center",
      field: "id",
      label: "#",
      headerClasses: "bg-primary text-white"
    },
    // {
    //   name: "diaplay_order",
    //   label: "Dispaly Order",
    //   field: "priority_order",
    //   headerClasses: "bg-primary text-white",
    //   align: "center",
    // },
    {
      label: "Name",
      field: "name",
      headerClasses: "bg-primary text-white",
      align: "left"
    },
    {
      label: "Description",
      field: "description",
      headerClasses: "bg-primary text-white",
      align: "left"
    }
  ],
  property_type_rows: [],
  property_type_columns: [
    {
      align: "center",
      field: "id",
      label: "#",
      headerClasses: "bg-primary text-white"
    },
    {
      label: "Property Type",
      align: "left",
      field: "property_type",
      headerClasses: "bg-primary text-white"
    }
    // {
    //   name: "priority_order",
    //   label: "Priority Order",
    //   align: "right",
    //   field: "priority_order",
    //   headerClasses: "bg-primary text-white"
    // }
  ],
  property_registration_rows: [],
  property_registration_columns: [
    {
      align: "center",
      label: "#",
      field: "id",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Property Name",
      field: "property_name",
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
      label: "Registration Number",
      field: "registration_number",
      headerClasses: "bg-primary text-white"
    }
  ],
  rooms_management_rows: [],
  rooms_management_columns: [
    {
      align: "center",
      field: "id",
      label: "#",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      field: "property_name",
      label: "Property Name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      field: "room_type",
      label: "Room Type",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "right",
      field: "default_price",
      label: "Default Price",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "right",
      field: "extra_bed_charge",
      label: "Extra Bed Charge",
      headerClasses: "bg-primary text-white "
    },
    {
      align: "right",
      field: "max_adults",
      label: "Max Adults",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "right",
      field: "max_extra_beds",
      label: "Max Extra Beds",
      headerClasses: "bg-primary text-white"
    }
  ],
  states_arr: [],
  properties_arr: [],
  city_arr: [],
  cities: [],
  hospital_state: [],
  hospital_city: [],
  Hospital_Master_Details: [],
  Campaign_Details:[],
  Whatsapp_Sender_Details:[],
  Campaign_Options_Details :[],
  admin_hospital_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "sno",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      align: "center",
      label: "Edit",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {

      label: "Hospital ID",
      field: "near_hospital_id",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Hospital Name",
      sortable: true,
      field: "near_hospital_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Location",
      field: "locality",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
   {
      align: "center",
      label: "Type",
      field: "type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Latitude",
      field: "latitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Longitude",
      field: "longitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

     {
      align: "center",
      label: "City",
      field: "city",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      align: "center",
      label: "Address",
      field: "address",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Pin Code",
      field: "pin_code",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      align: "center",
      label: "No of Beds",
      field: "no_of_bed",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },


  ],
  whatsapp_sender_columns: [
    {
      name: "actions",
      align: "center",
      label: "checkbox",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "phone number",
      field:"phone_number",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
  ],
});

///getters
const getters = {
  room_type_rows: state => state.room_type_rows,
  facility_type_rows: state => state.facility_type_rows,
  property_type_rows: state => state.property_type_rows,
  property_registration_rows: state => state.property_registration_rows,
  rooms_management_rows: state => state.rooms_management_rows,
  states_arr: state => state.states_arr,
  properties_arr: state => state.properties_arr,
  city_arr: state => state.city_arr,
  cities: state => state.cities,
  hospital_state: state => state.hospital_state,
  hospital_city: state => state.hospital_city,
  Hospital_Master_Details: state => state.Hospital_Master_Details,
  Whatsapp_Sender_Details:state=>state.Whatsapp_Sender_Details,
  Campaign_Details:state=>state.Campaign_Details,
  Campaign_Options_Details:state=>state.Campaign_Options_Details ,
};

//actions
const actions = {
  /* Room Types Master saving */
  roomTypeMasterAdd({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/roomTypeMaster", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getRoomTypesMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            { msg: "Failed To Save Room Type Master Data", type: "negative" },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Room Types Master data fetching */
  getRoomTypesMaster({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/roomTypeMaster")
        .then(response => {
          let rows = response.data;

          commit("SET_ROOM_TYPE", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Room Types Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Facility Type Master saving*/
  facilityTypeMasterAdd({ dispatch }, payload) {
    // console.log(payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/facilityMaster", payload, {
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
            dispatch("getFacilityTypesMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Facility Type Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Facility Type Master data fetching*/

  getFacilityTypesMaster({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/facilityMaster")
        .then(response => {
          let rows = response.data;

          commit("SET_FACILITY_TYPE", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Facility Types Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
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
  /* Property Registration Master*/
  propertyRegistrationMasterAdd({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster", payload)
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
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/propertyRegistrationMaster")
        .then(response => {
          let rows = response.data;

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
  /* Room Management Master*/
  roomManagementMasterAdd({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/roomManagementMaster", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getRoomsManagementMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            { msg: "Failed To Save Room Type Master Data", type: "negative" },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Rooms Management Master get mathod*/
  getRoomsManagementMaster({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/roomManagementMaster")
        .then(response => {
          let rows = response.data;
          commit("SET_ROOMS_MANAGEMENT", rows);
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
  loadPropertiesDropdown({ commit }) {
    api
      .get(`/propertiesMaster`)
      .then(response => {
        commit("SET_ALL_PROPERTIES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllStates({ commit }) {
    api
      .get(`/stateMaster`)
      .then(response => {
        commit("SET_ALL_STATES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllCities({ commit }, state) {
    console.log(state)
    api
      .get(`/citiesOfState/${state.state_id}`)
      .then(response => {
        commit("SET_ALL_CITIES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadCities({ commit }) {
    api
      .get(`/citiesOfState/getAllCities/selectCities`)
      .then(response => {

        // console.log("SET_CITIES :- ",response.data)

        commit("SET_CITIES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
},

  async hospitalDetailsSaving({ dispatch }, payload) {
    //console.log("payload" ,payload)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    try {
      const response = await api
        .post("/hospitalMaster/savingHospitalDetails", payload);
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(
        `alerts_loaders/showAlert`,
        { msg: "Failed To Save Hospital Details Data", type: "negative" },
        { root: true }
      );
  }
},

  // loadHospitalData({ commit }) {
  //   api
  //     .get(`/hospitalMaster/loadHospitalMasterDetails`)
  //     .then(response => {
  //       commit("GET_HOSPITAL_MASTER_DETAILS", response.data);
  //       console.log("Load Hospital Master Data",response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },















  loadHospitalData({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/dropdown/loadHospitalMasterDetails`)
        .then(response => {
          let rows = response.data;
          commit("GET_HOSPITAL_MASTER_DETAILS", rows);
        //  console.log("data",rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
             msg: "Error While get Hospital Master details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },


  loadWhatappData({ commit, dispatch },payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/loadWhatsappSenderDetails/${payload.whatsappOptions}`)
        .then(response => {
          let rows = response.data;
          commit("GET_WHATSAPP_SENDER_DETAILS", rows);
        //  console.log("data",rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
             msg: "Error While getting Whatsapp Sender details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  loadCampaignData({ commit, dispatch },payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/loadCampaignDataDetails/${payload.campaign_name}`)
        .then(response => {
          let rows = response.data;
          console.log(rows)
          commit("GET_CAMPAIGN_DETAILS", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
             msg: "Error While getting Campaign details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  getCampaignOptions({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/adminDashboard/getCampaignOptionsDetails/loadHospital")
        .then(response => {
          let rows = response.data;
          commit("GET_CAMPAIGN_OPTIONS_DETAILS", rows);
          console.log('rows',rows)
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Getting Campaign Option Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  addNewPhoneNumber({ commit, dispatch },payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post(`/adminDashboard/addNewPhoneNumberDetails`,payload.phoneNumber)
        .then(response => {
          let {msg,type} = response.data.message;
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg,
              type,
            },
            { root: true }
          );
          setTimeout(() => {
            dispatch("loadWhatappData", payload.whatappDetails);
          }, 1000);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Adding New Phone Number details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

   phoneNumbersAndCampaignOption({dispatch},payload){
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/adminDashboard/insertPhoneNumbersAndCampaignOption",payload)
        .then(response => {
          let rows = response.data;
          console.log(rows)
          // commit("GET_CAMPAIGN_OPTIONS_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While send phone number and campaign option Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  updateHospitalDetails({ dispatch }, payload) {
    console.log("payload",payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
       .put(
        `/hospitalMaster/updateHospitalData/${payload.near_hospital_id}`,
        payload,
      )

        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          // setTimeout(() => {
          //   dispatch("getPropertyDetails");
          //   dispatch("getPropertyRegistrationMaster");
          // }, 1000);
        });
    }, 1000);
  },


};

// mutations

const mutations = {
  SET_ROOM_TYPE(state, rows) {
    state.room_type_rows = rows.data;
  },
  SET_FACILITY_TYPE(state, rows) {
    state.facility_type_rows = rows.data;
  },
  SET_PROPERTY_TYPE(state, rows) {
    state.property_type_rows = rows.data;
  },
  SET_PROPERTY_REGISTRATION(state, rows) {
    state.property_registration_rows = rows.data;
  },
  SET_ROOMS_MANAGEMENT(state, rows) {
    state.rooms_management_rows = rows.data;
  },
  SET_ALL_PROPERTIES(state, payload) {
    state.properties_arr = payload.data;
  },
  SET_ALL_STATES(state, payload) {
    state.states_arr = payload.data;
  },
  SET_ALL_CITIES(state, payload) {
    state.city_arr = payload.data;
  },
  SET_CITIES(state, payload){
    state.cities = payload.data;
  },
  GET_HOSPITAL_MASTER_DETAILS(state,rows){
    state.Hospital_Master_Details = rows.data;
  },
  GET_CAMPAIGN_DETAILS(state,row){
    state.Campaign_Details=row.data;
  },
  GET_WHATSAPP_SENDER_DETAILS(state,rows){
    state.Whatsapp_Sender_Details = rows.data;
  },
  GET_CAMPAIGN_OPTIONS_DETAILS(state,rows){
    state.Campaign_Options_Details = rows.data;
  }
};

export const master = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
