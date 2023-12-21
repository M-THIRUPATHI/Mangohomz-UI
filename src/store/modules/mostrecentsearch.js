import { api } from "boot/axios";


//intial state
const state = () => ({
  mostRecent_search_HotelDetails: {},
  citywise_seo_array:{},

  // room_type_rows: [],
  // room_type_columns: [
  //   {
  //     align: "center",
  //     field: "id",
  //     label: "#",
  //     headerClasses: "bg-primary text-white"
  //   },
  //   {
  //     align: "left",
  //     label: "Room Type",
  //     field: "room_type",
  //     headerClasses: "bg-primary text-white"
  //   },
  //   {
  //     align: "left",
  //     label: "Room Short Description",
  //     field: "room_short_description",
  //     headerClasses: "bg-primary text-white"
  //   },
  //   {
  //     align: "left",
  //     label: "Room Long Description",
  //     field: "room_long_description",
  //     headerClasses: "bg-primary text-white"
  //   }
  // ],


  // states_arr: [],
  // properties_arr: [],

});

///getters
const getters = {
  mostRecent_search_HotelDetails: state => state.mostRecent_search_HotelDetails,
  citywise_seo_array: state => state.citywise_seo_array,


  // room_type_rows: state => state.room_type_rows,

};

//actions
const actions = {





  // loadCityWiseForSeo({ commit, dispatch }, payload) {
  //    console.log("mostPayload",payload);
  //   api
  //     .get(`/mostRecentSearch/loadCityWiseForSeo/${payload.city_seo_name}/${payload.hospital_seo_name}`)
  //     .then(response => {
  //       commit("GET_CITYWISE_SEO", response.data);
  //       console.log("loadCityWiseForSeo",response.data)

  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  async mostRecentSearchDetails({ commit, dispatch }, payload) {
   // console.log("payload",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/mostRecentSearch/hotels/${"143"}/${"MHHOSP1"}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_MOSTRECENT_SEARCHDETAILS", rows);
        // console.log("recentsearchdata",rows)


        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Hotels SEO Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, );
  },



};

// mutations

const mutations = {
  // SET_ROOM_TYPE(state, rows) {
  //   state.room_type_rows = rows.data;
  // },
  SET_MOSTRECENT_SEARCHDETAILS(state, data) {
    state.mostRecent_search_HotelDetails = data;
  },
  GET_CITYWISE_SEO(state, data) {
    state.citywise_seo_array = data;
  },


};

export const mostrecentsearch = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
