import { api } from "boot/axios";

//intial state
const state = () => ({
  property_arr: [],
  roomType_arr: [],
  amenities_arr: [],
  allDisease_Arr: [],
  property_amenities_arr: [],
  city_arr: [],
  city_arr_arthilabs: [],
  address_arr_arthilabs: [],
  centernames_arr_arthilabs: [],
  testtype_arr_arthilabs: [],
  testname_arr_arthilabs: [],
propertycity_arr: [],
  property_arr: [],
  propertyroomtype_arr: [],
  roominfocatwise_arr: [],

  travelpoint_type: [],
  travelpoint_name: [],

  hospital_arr: [],
  property_names_arr: [],
  food_list_arr: [],
  food_item_types_arr: [],
  medical_item_name: [],
  medical_units_name: [],
  partners_arr: [],
  sub_partners_arr: [],
  sub_property_arr: [],
  sub_food_partners_arr: [],
  properties_arr_details_booking: [],

  properties_arr: [],
  properties_arr_details: [],
  all_states_arr: [],
  equipment_medical_store: [],
  restaurant_arr: [],
  food_restaurant_arr: [],
  travel_restaurant_arr: [],
  medical_restaurant_arr: [],
  property_operation_row:[],
vehicle_type: [],
  vehicle_per_trip: [],
  vehicle_from: [],
  vehicle_to: [],
  medical_store: [],
  item_name: [],
  units: [],
  nearHospital: [],
roomCategory: [],
});

///getters
const getters = {
  properties_arr_details_booking: state => state.properties_arr_details_booking,
  property_arr: state => state.property_arr,
  roomType_arr: state => state.roomType_arr,
  amenities_arr: state => state.amenities_arr,
  allDisease_Arr: state => state.allDisease_Arr,
  property_amenities_arr: state => state.property_amenities_arr,
  food_list_arr: state => state.food_list_arr,
  food_item_types_arr: state => state.food_item_types_arr,
  medical_item_name: state => state.medical_item_name,
  medical_units_name: state => state.medical_units_name,
  hospital_arr: state => state.hospital_arr,
  city_arr: state => state.city_arr,
  city_arr_arthilabs: state => state.city_arr_arthilabs,
  address_arr_arthilabs: state => state.address_arr_arthilabs,
  centernames_arr_arthilabs: state => state.centernames_arr_arthilabs,
  testtype_arr_arthilabs: state => state.testtype_arr_arthilabs,
  testname_arr_arthilabs: state => state.testname_arr_arthilabs,
propertycity_arr: state => state.propertycity_arr,
  property_arr: state => state.property_arr,
  propertyroomtype_arr: state => state.propertyroomtype_arr,
  roominfocatwise_arr: state => state.roominfocatwise_arr,

  travelpoint_type: state => state.travelpoint_type,
  travelpoint_name: state => state.travelpoint_name,

  property_names_arr: state => state.property_names_arr,
  partners_arr: state => state.partners_arr,
  sub_partners_arr: state => state.sub_partners_arr,
  sub_food_partners_arr: state => state.sub_food_partners_arr,
  properties_arr: state => state.properties_arr,
  all_states_arr: state => state.all_states_arr,
  equipment_medical_store: state => state.equipment_medical_store,
  restaurant_arr: state => state.restaurant_arr,
  food_restaurant_arr: state => state.food_restaurant_arr,
  travel_restaurant_arr: state => state.travel_restaurant_arr,
  medical_restaurant_arr: state => state.medical_restaurant_arr,
  property_operation_row: state => state.property_operation_row,
  sub_property_arr: state => state.sub_property_arr,
  properties_arr_details: state => state.properties_arr_details,
vehicle_type: state => state.vehicle_type,
  vehicle_per_trip: state => state.vehicle_per_trip,
  vehicle_from: state => state.vehicle_from,
  vehicle_to: state => state.vehicle_to,
  medical_store: state => state.medical_store,
  item_name: state => state.item_name,
  units: state => state.units,
  nearHospital: state => state.nearHospital,
roomCategory: state => state.roomCategory,
};

//actions
const actions = {
  loadAllProperty({ commit }) {
    api
      .get(`/dropdown`)
      .then(response => {
        commit("SET_ALL_PROPERTY", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllRoomTypes({ commit }) {
    api
      .get(`/roomType`)
      .then(response => {
        commit("SET_ALL_ROOM_TYPE", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllFacilities({ commit }) {
    api
      .get(`/facilityMaster`)
      .then(response => {
        commit("SET_ALL_AMENITIES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadPropertyFacilities({ commit }) {
    api
      .get(`/facilityMaster/loadPropertyAmenities`)
      .then(response => {
        commit("SET_PROPERTY_AMENITIES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllMedicalStores({ commit }) {
    api
      .get(`/medicalItemList/loadAllMedicalstores`)
      .then(response => {
        commit("SET_EQUIPMENT_MEDICAL_STORES", response.data);
      //  console.log("SET_EQUIPMENT_MEDICAL_STORES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllFoodTypes({ commit }) {
    api
      .get("/foodItemList/loadItems")
      .then(response => {
        commit("SET_ALL_FOOD_TYPE_ITEMS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllFoodItems({ commit }, foodName) {
    api
      .get(`/foodItemList/${foodName.food_type_id}`)
      .then(response => {
        commit("SET_ALL_FOOD_LIST", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllEquipmentItems({ commit }) {
    api
      .get("/equipmentItemList")
      .then(response => {
        commit("SET_ALL_EQUIPMENT_LIST", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllMedicalUnits({ commit }, item_name) {
    api
      .get(`/equipmentItemList/loadUnits/${item_name.item_id}`)
      .then(response => {
        commit("SET_ALL_MEDICAL_UNITS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllCities({ commit }) {
    api
      .get(`/cityMaster`)
      .then(response => {
        commit("SET_CITIES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllCitiesarthilabs({ commit }) {
    api
      .get(`/cityMaster/getarthilabcities`)
      .then(response => {
        commit("SET_CITIES_ARTHILABS", response.data);
        // console.log("SET_CITIES_ARTHILABS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllArthilabCenters({ commit }, payload) {
    api
      .get(`/cityMaster/getarthilabcenters/${payload.city}`)
      .then(response => {
        commit("SET_CENTENAMES_ARTHILABS", response.data);
        //console.log("SET_CENTENAMES_ARTHILABS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllArthilabaddress({ commit }, payload) {
    api
      .get(`/cityMaster/getarthilabaddress/${payload.city}/${payload.center_name}`)
      .then(response => {
        commit("SET_ADDRESS_ARTHILABS", response.data);
        //console.log("SET_ADDRESS_ARTHILABS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadAllArthilabtesttype({ commit }, payload) {
   // console.log("payload", payload);
    api
      .get(
        `/cityMaster/getarthilabtesttypes/${payload.city}/${payload.center_name}`
      )
      .then(response => {
        commit("SET_TESTTYPE_ARTHILABS", response.data);
       // console.log("SET_TESTTYPE_ARTHILABS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  // loadAllArthilabtestname({ commit }, payload) {
  //   console.log("payloadNAME", payload);
  //   api
  //     .get(`/cityMaster/getarthilabtestname/${payload.center_name.city}/${payload.center_name.center_name}/${payload.test_type.test_type}`)
  //     .then(response => {
  //       if (response.data.length > 0) {
  //       commit("SET_TESTNAME_ARTHILABS", response.data);
  //       console.log("SET_TESTNAME_ARTHILABS", response.data);

  //   } else {
  //          // Test not available for the selected test type
  //          commit("SET_TESTNAME_ARTHILABS", []);
  //          console.log("Test not available");
  //        }
  //      })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  loadAllArthilabtestname({ commit }, payload) {
    // console.log("payloadNAME", payload);
    api
      .get(`/cityMaster/getarthilabtestname/${payload.center_name.city}/${payload.center_name.center_name}/${payload.test_type.test_type}`)
      .then(response => {
        if (response.data && response.data.length > 0 ) {
          commit("SET_TESTNAME_ARTHILABS", response.data);
        } else {
          commit("SET_TESTNAME_ARTHILABS", []);

        }
        // console.log("testname", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
loadPropertyCities({ commit }) {
    api
      .get(`/cityMaster/getpropertyallcity`)
      .then(response => {
        commit("GET_PROPERTYCITIES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadProperty({ commit }, city_id) {
    // console.log(city_id);
    api
      .get(`/dropdown/getpropertydetailsforoffers/${city_id}`)
      .then(response => {
        commit("GET_PROPERTY", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadpropertyroomtype({ commit }, payload) {
    // console.log(payload);
    api
      .get(
        `/dropdown/getpropertyroomtype/${payload.txn_id}/${payload.partner_id}`
      )
      .then(response => {
        this.item = response.data;
        commit("GET_PROPERTYROOMTYPE", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  getcategorywiseroominfo({ commit }, payload) {
    // console.log(payload);
    api
      .get(
        `/dropdown/getcategorywiseroominfo/${payload.txn_id}/${payload.partner_id}/${payload.room_category}/${payload.room_type}`
      )
      .then(response => {
        this.item = response.data;
        commit("GET_ROOMINFOCATWISE", response.data);
        //  console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadAllPointTypes({ commit }, payload) {

    api
      .get(`/cityMaster/getallpointtypes/${payload.property_city_id}`)
      .then(response => {
        commit("SET_POINTTYPES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadAllPointNames({ commit }, { city_code, point_type, hotel_txn_id }) {
    // console.log({ city_code });
    // console.log({ point_type });
    // console.log(hotel_txn_id);
    api
      .get(
        `/cityMaster/getallpointnames/${city_code}/${point_type}/${hotel_txn_id}`
      )
      .then(response => {
        commit("SET_POINTNAMES", response.data);
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
        // console.log("startete",response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllHospitals({ commit }, payload) {
    // console.log("payload.city_id",payload);
    api
      .get(`/hospitalMaster/${payload.city_id}`)
      .then(response => {
        commit("SET_HOSPITAL", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadAllPropertyNames({ commit }) {
    api
      .get(`/propertyName`)
      .then(response => {
        commit("SET_PROPERTY_NAME", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadPartners({ commit }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(`/dropdown/loadPartnersNames/${user.account_id}`)
      .then(response => {
        let rows = response.data;
        commit("SET_PARTNER_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadSubPartners({ commit }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadSubPartnersNames/${user.account_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_SUB_PARTNER_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadProperties({ commit }, payload) {
  //  console.log("pay123213load",payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadPropertyNames/${user.account_id}/${payload.partner_sub_name.partner_sub_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_PROPERTY_NAMES", rows);
       // console.log("sasaaa",rows)
      })
      .catch(error => {
        console.log(error);
      });
  },
    // change method//
    loadPropertiesforadmin({ commit }, payload) {
    // console.log("pay123213load",payload);
       let user = JSON.parse(localStorage.getItem("user")) || [];
       api
         .get(
           `/dropdown/loadPropertiesforadmin`
         )
         .then(response => {
           let rows = response.data;
           commit("SET_PROPERTY_NAMES_FOR_ADMIN", rows);
        //  console.log("sasaaa",rows)
         })
         .catch(error => {
           console.log(error);
         });
     },
  loadfoodProperties({ commit }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadfoodProperties/${user.account_id}/${payload.agent_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_PROPERTY_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadTravelproperties({ commit }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadTravelproperties/${user.account_id}/${payload.agent_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_PROPERTY_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadEquipmentProperties({ commit }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadEquipmentProperties/${user.account_id}/${payload.equipment_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_PROPERTY_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadrestaurantDetails({ commit }, payload) {
   // console.log("loadrestaurantDetails", payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadrestaurantDetails/${user.account_id}/${payload.partner_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_RESTAURANT_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadFoodrestaurantDetails({ commit }, payload) {
   // console.log("loadFoodrestaurantDetails", payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadFoodrestaurantDetails/${user.account_id}/${payload.agent_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("FOOD_SET_RESTAURANT_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadTravelrestaurantDetails({ commit }, payload) {
   // console.log("loadTravelrestaurantDetails", payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadTravelrestaurantDetails/${user.account_id}/${payload.agent_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("TRAVEL_SET_RESTAURANT_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadMedicalrestaurantDetails({ commit }, payload) {
   // console.log("loadMedicalrestaurantDetails", payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadMedicalrestaurantDetails/${user.account_id}/${payload.equipment_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("MEDICAL_SET_RESTAURANT_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadfoodsubPartner({ commit }, payload) {
   // console.log("dotjs", payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadFoodSubPartnersNames/${user.account_id}/${payload.agent_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_FOOD_SUB_PARTNER_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadFoodProperties({ commit }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(
        `/dropdown/loadFoodPropertyNames/${user.account_id}/${payload.partner_name.agent_id}/${payload.partner_sub_name.agent_sub_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_PROPERTY_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadPropertiesforadminBooking({ commit }, payload) {
    // console.log("pay123213load", payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(`/dropdown/loadPropertiesforadminBooking`)
      .then(response => {
        let rows = response.data;
        commit("SET_PROPERTY_NAMES_FOR_ADMIN_BOOKING", rows);
        // console.log("sasaaa", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getPropertyForOperation({ commit, dispatch }, payload) {
    // console.log("pay",payload)
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/dropdown/getPropertyDetailsForoperation/${user.account_id}/${payload.property_name.txn_id}/${payload.partner_sub_name.partner_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_PROPERTY_FOR_OPERATION", rows);
          // console.log("sassa",rows)
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Operation Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadAllDiseaseProblem({ commit }) {
    api
      .get(`/dropdown/getAllProblemDetails`)
      .then(response => {
        commit("GET_ALLDISEASE_ARR", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },


  loadVehicalTypeCategory({ commit }) {
    api
      .get(`/dropdown/loadVehicalTypeCategory`)
      .then(response => {
        commit("GET_VEHICLETYPE_ARR", response.data);
        //console.log(response.data)
        //console.log("Load Vehicle Type Data",response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadVehiclePerTrip({ commit }) {
    api
      .get(`/dropdown/loadVehiclePerTrip`)
      .then(response => {
        commit("GET_VEHICLEPERTRIP_ARR", response.data);
        //console.log(response.data)
        //console.log("Load Vehicle Per Trip Data",response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadVehicleFromPlace({ commit },payload) {
    //console.log('city',payload)
    api
      .get(`/dropdown/loadVehicleFromPlace/${payload}`)
      .then(response => {
        commit("GET_VEHICLEFROM_ARR", response.data);
        //console.log(response.data)
        //console.log("Load Vehicle Per Trip Data",response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadVehicleToPlace({ commit },payload) {
    //console.log('city',payload)
    api
      .get(`/dropdown/loadVehicleToPlace/${payload}`)
      .then(response => {
        commit("GET_VEHICLETO_ARR", response.data);
        //console.log(response.data)
        //console.log("Load Vehicle Per Trip Data",response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },


  travelUpdateDetailsSaving({ dispatch }, payload) {
    //console.log("ooooo", payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/dropdown/travelUpdateDetailsSavingMethod", payload)
        .then(response => {
          if (response.data && response.data.success) {
            dispatch(
              `alerts_loaders/showAlert`,
              { msg: response.data.message, type: "positive" },
              { root: true }
            );
          } else {
            // dispatch(
            //   `alerts_loaders/showAlert`,
            //   {
            //     msg: response.data && response.data.message && "Failed To Travel Update Details Data",
            //     type: "negative"
            //   },
            //   { root: true }
            // );
          }
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Travel Update Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  loadMedicalStoreDetails({commit}) {
    api
      .get(`/dropdown/loadMedicalStoreDetails`)
      .then(response => {
        commit("GET_MEDICALSTORE_ARR",response.data);
        //console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadItemNameDetails({commit}) {
    api
      .get(`/dropdown/loadItemNameDetails`)
      .then(response => {
        commit("GET_ITEMNAME_ARR",response.data);
        //console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadEquipmentUnits({commit}) {
    api
      .get(`/dropdown/loadEquipmentUnits`)
      .then(response => {
        commit("GET_UNITS",response.data);
      })
      .catch(error => {
        console.log(error);;
      })
  },

  partnerEquipmentSubmitData({ dispatch }, payload) {
    // console.log("ooooo", payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/dropdown/partnerEquipmentSubmitData", payload)
        .then(response => {
          if (response.data && response.data.success) {
            dispatch(
              `alerts_loaders/showAlert`,
              { msg: response.data.message, type: "positive" },
              { root: true }
            );
          } else {
            dispatch(
              `alerts_loaders/showAlert`,
              {
                msg: response.data && response.data.message && "Failed To Save Equipment Details Data",
                type: "negative"
              },
              { root: true }
            );
          }
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Submit Equipment Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  //Ravi kiran Load Near Hospital Names

  loadNearHospitalNames({ commit }, payload) {
    //console.log(payload)
    api
      .get(`/dropdown/loadNearHospitalNames/${payload}`)

      .then(response => {
        commit("GET_NEAR_HOSPITAL_NAMES", response.data);
        //console.log('rk',response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },






    loadRoomCategories({ commit }, payload) {
      //console.log(payload)
      api
        .get(`/dropdown/loadRoomCategories`)

        .then(response => {
          commit("GET_ROOM_CATEGORY", response.data);
          //console.log('rk',response.data)
        })
        .catch(error => {
          console.log(error);
        });
    },

    //Ravi kiran END

};



// mutations

const mutations = {
  SET_PROPERTY_NAMES_FOR_ADMIN_BOOKING(state, rows) {
    state.properties_arr_details = rows.data;
  },
  // SET_PROPERTY_NAMES_FOR_ADMIN(state, rows) {
  //   state.properties_arr_details = rows.data;
  // },
  SET_PROPERTY_NAMES_FOR_ADMIN(state, rows) {
    state.properties_arr_details_booking = rows.data;
  },
  SET_ALL_PROPERTY(state, payload) {
    state.property_arr = payload.data;
  },
  SET_ALL_ROOM_TYPE(state, payload) {
    state.roomType_arr = payload.data;
  },
  SET_ALL_AMENITIES(state, payload) {
    state.amenities_arr = payload.data;
  },
  SET_PROPERTY_AMENITIES(state, payload) {
    state.property_amenities_arr = payload.data;
  },
  SET_EQUIPMENT_MEDICAL_STORES(state, payload) {
    state.equipment_medical_store = payload.data;
  },
  SET_ALL_FOOD_TYPE_ITEMS(state, payload) {
    state.food_item_types_arr = payload.data;
  },
  SET_ALL_FOOD_LIST(state, payload) {
    state.food_list_arr = payload.data;
  },
  SET_ALL_EQUIPMENT_LIST(state, payload) {
    state.medical_item_name = payload.data;
  },
  SET_ALL_MEDICAL_UNITS(state, payload) {
    state.medical_units_name = payload.data;
  },
  SET_CITIES(state, payload) {
    state.city_arr = payload;
  },
  SET_CITIES_ARTHILABS(state, payload) {
    state.city_arr_arthilabs = payload;
  },
  SET_CENTENAMES_ARTHILABS(state, payload) {
    state.centernames_arr_arthilabs = payload;
  },
  SET_ADDRESS_ARTHILABS(state, payload) {
    state.address_arr_arthilabs = payload;
  },
  SET_TESTTYPE_ARTHILABS(state, payload) {
    state.testtype_arr_arthilabs = payload;
  },
  SET_TESTNAME_ARTHILABS(state, payload) {
    state.testname_arr_arthilabs = payload;
  },
  GET_PROPERTYCITIES(state, payload) {
    state.propertycity_arr = payload;
  },
  GET_PROPERTY(state, payload) {
    state.property_arr = payload;
  },
  GET_PROPERTYROOMTYPE(state, payload) {
    state.propertyroomtype_arr = payload;
  },
  GET_ROOMINFOCATWISE(state, payload) {
    state.roominfocatwise_arr = payload;
  },
SET_POINTTYPES(state, payload) {
    state.travelpoint_type = payload;
  },
  SET_POINTNAMES(state, payload) {
    state.travelpoint_name = payload;
  },

  SET_HOSPITAL(state, payload) {
    state.hospital_arr = payload.data;
  },
  SET_PROPERTY_NAME(state, payload) {
    state.property_names_arr = payload.data;
  },
  SET_PARTNER_NAMES(state, rows) {
    state.partners_arr = rows.data;
  },
  SET_SUB_PARTNER_NAMES(state, rows) {
    state.sub_partners_arr = rows.data;
  },
  SET_FOOD_SUB_PARTNER_NAMES(state, rows) {
    state.sub_food_partners_arr = rows.data;
  },
  SET_PROPERTY_NAMES(state, rows) {
    state.properties_arr = rows.data;
  },
  SET_ALL_STATES(state, rows) {
    state.all_states_arr = rows.data;
  },
  SET_RESTAURANT_NAMES(state, rows) {
    state.restaurant_arr = rows.data;
  },
  FOOD_SET_RESTAURANT_NAMES(state, rows) {
    state.food_restaurant_arr = rows.data;
  },
  TRAVEL_SET_RESTAURANT_NAMES(state, rows) {
    state.travel_restaurant_arr = rows.data;
  },
  MEDICAL_SET_RESTAURANT_NAMES(state, rows) {
    state.medical_restaurant_arr = rows.data;
  },
  SET_PROPERTY_FOR_OPERATION(state, rows) {
    state.property_operation_row = rows.data;
  },
  GET_ALLDISEASE_ARR(state, payload) {
    state.allDisease_Arr = payload.data;
  },
  SET_SUB_PROPERTY_NAMES(state, rows) {
    state.sub_property_arr = rows.data;
  },
  GET_VEHICLETYPE_ARR(state, rows) {
    state.vehicle_type = rows.data;
  },
  GET_VEHICLEPERTRIP_ARR(state, rows) {
    state.vehicle_per_trip = rows.data;
  },
  GET_VEHICLEFROM_ARR(state, rows) {
    state.vehicle_from = rows.data;
  },
  GET_VEHICLETO_ARR(state, rows) {
    state.vehicle_to = rows.data;
  },
  GET_NEAR_HOSPITAL_NAMES(state, rows) {
    state.nearHospital = rows.data;
  },
GET_ROOM_CATEGORY(state,rows) {
    state.roomCategory = rows.data;
  }
};


export const dropdown = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
