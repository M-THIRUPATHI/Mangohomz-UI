import { api } from "boot/axios";
const state = () => ({
  mh_acc_data: [],
  mh_travel_data:[],
  mh_equipment_data:[],
  mh_food_data:[],
  acc_guest_cancel_data: [],
  acc_travel_cancel_data: [],
  individual_travel_cancel_data: [],
  individual_medical_cancel_data: [],
  acc_medical_cancel_data: [],
  Accommodation_Cancellation_rows: [],
  Accommodation_Cancellation_columns:[
    {
     name: "index",
     align: "center",
     label: "Sno",
     field: "index",
     sortable: true,
     headerClasses: "bg-primary text-white",
   },
   {
     name: "booking_cancel_id",
     align: "center",
     label: "Cancel id",
     field: "booking_cancel_id",
     headerClasses: "bg-primary text-white",
     align: "center",
     sortable: true,
   },
   {
     name: "booking_order_id",
     align: "center",
     label: "MH Booking Order Id",
     field: "booking_order_id",
     headerClasses: "bg-primary text-white",
     sortable: true,
   },


   {
    name: "guest_name",
    sortable: true,
    align: "center",
    label: "Customer Name",
    field: "guest_name",
    headerClasses: "bg-primary text-white",
  },
   {
     name: "created_datetime1",
     align: "center",
     label: "Cancel Date",
     field: "created_datetime1",
     headerClasses: "bg-primary text-white",
     sortable: true,
   },
   {
     name: "property_name",
     align: "center",
     label: "Property Name",
     field: "property_name",
     headerClasses: "bg-primary text-white",
     sortable: true,
   },
   {
     name: "property_city_name",
     align: "center",
     label: "Property City Name",
     field: "property_city_name",
     headerClasses: "bg-primary text-white",
     sortable: true,
   },
   {
     name: "check_in",
     align: "center",
     label: "Check In",
     field: "check_in",
     headerClasses: "bg-primary text-white",
     sortable: true,
   },
   {
     name: "check_out",
     align: "center",
     label: "Check Out",
     field: "check_out",
     headerClasses: "bg-primary text-white",
     sortable: true,
   },
   {
    name: "no_of_days",
    align: "center",
    label: "No Of Days",
    field: "no_of_days",
    headerClasses: "bg-primary text-white",
    sortable: true,
  },
  {
    name: "phone_no",
    align: "center",
    label: "Mobile Number",
    field: "phone_no",
    headerClasses: "bg-primary text-white",
    sortable: true,
  },
  {
    name: "room_price",
    align: "center",
    label: "Room Price",
    field: "room_price",
    headerClasses: "bg-primary text-white",
    sortable: true,
  },
  {
    name: "total_price",
    align: "center",
    label: "Total Price",
    field: "total_price",
    headerClasses: "bg-primary text-white",
    sortable: true,
  },
  {
    name: "cancellAmount",
    align: "center",
    label: "Cancellation Amount",
    field: "cancellAmount",
    headerClasses: "bg-primary text-white",
    sortable: true,
  },
  {
    name: "refundAmount",
    align: "center",
    label: "Refund Amount",
    field: "refundAmount",
    headerClasses: "bg-primary text-white",
    sortable: true,
  },

  {
    name: "partner_amount_on_cancel",
    align: "center",
    label: "Balance Payment To Partner",
    field: "partner_amount_on_cancel",
    headerClasses: "bg-primary text-white",
    sortable: true,
  },

 ],
 Travel_Cancellation_rows:[],
 Travel_Cancellation_columns:[
  {
   name: "s_no",
   align: "center",
   label: "Sno",
   field: "s_no",
   headerClasses: "bg-primary text-white",
 },
 {
   name: "booking_order_id",
   align: "center",
   label: "Booking Order Id",
   field: "booking_order_id",
   headerClasses: "bg-primary text-white",
 },
 {
  name: "travel_booking_orderid",
  align: "center",
  label: "Travel Booking Order id",
  field: "travel_booking_orderid",
  headerClasses: "bg-primary text-white",
},
 {
   name: "travel_name",
   align: "center",
   label: "Travel Name",
   field: "travel_name",
   headerClasses: "bg-primary text-white",
 },
 {
   name: "transport_sub_name",
   align: "center",
   label: "Transport Sub Name",
   field: "transport_sub_name",
   headerClasses: "bg-primary text-white",
 },
 {
   name: "booking_origin",
   align: "center",
   label: "Booking Origin",
   field: "booking_origin",
   headerClasses: "bg-primary text-white",
 },
 {
   name: "booking_destination",
   align: "center",
   label: "Booking Destination",
   field: "booking_destination",
   headerClasses: "bg-primary text-white",
 },
 {
  name: "mobile_number",
  align: "center",
  label: "Mobile Number",
  field: "mobile_number",
  headerClasses: "bg-primary text-white",
},
{
  name: "travel_charges",
  align: "center",
  label: "Travel Charges",
  field: "travel_charges",
  headerClasses: "bg-primary text-white",
},
{
  name: "payable_amount",
  align: "center",
  label: "Payable Amount",
  field: "payable_amount",
  headerClasses: "bg-primary text-white",
},
{
  name: "travelrefundamount",
  align: "center",
  label: "Refund Amount",
  field: "travelrefundamount",
  headerClasses: "bg-primary text-white",
},
],
food_Cancellation_rows:[],
food_Cancellation_columns:[
 {
  name: "s_no",
  align: "center",
  label: "Sno",
  field: "s_no",
  headerClasses: "bg-primary text-white",
},
{
  name: "booking_order_id",
  align: "center",
  label: "Booking Order Id",
  field: "booking_order_id",
  headerClasses: "bg-primary text-white",
},
{
 name: "food_booking_orderid",
 align: "center",
 label: "Food Booking Order id",
 field: "food_booking_orderid",
 headerClasses: "bg-primary text-white",
},
{
  name: "food_partner_sub_name",
  align: "center",
  label: "Food Partner Sub Name",
  field: "food_partner_sub_name",
  headerClasses: "bg-primary text-white",
},
{
  name: "food_booking_type",
  align: "center",
  label: "Food Booking Type",
  field: "food_booking_type",
  headerClasses: "bg-primary text-white",
},
{
  name: "mobile_number",
  align: "center",
  label: "Mobile No",
  field: "mobile_number",
  headerClasses: "bg-primary text-white",
},
{
  name: "food_booking_date",
  align: "center",
  label: "Food Booking Date",
  field: "food_booking_date",
  headerClasses: "bg-primary text-white",
},
{
 name: "total_quantity_booked",
 align: "center",
 label: "Total Quantity Booked",
 field: "total_quantity_booked",
 headerClasses: "bg-primary text-white",
},
{
 name: "food_charges",
 align: "center",
 label: "Food Charges",
 field: "food_charges",
 headerClasses: "bg-primary text-white",
},
{
 name: "final_price_amount",
 align: "center",
 label: "final Price Amount",
 field: "final_price_amount",
 headerClasses: "bg-primary text-white",
},
{
 name: "foodrefundamount",
 align: "center",
 label: "Refund Amount",
 field: "foodrefundamount",
 headerClasses: "bg-primary text-white",
},
],
medical_Cancellation_rows:[],
medical_Cancellation_columns:[
  {
    name: "s_no",
    align: "center",
    label: "Sno",
    field: "s_no",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "booking_order_id",
    align: "center",
    label: "Booking Order Id",
    field: "booking_order_id",
    headerClasses: "bg-primary text-white",
  },
  {
   name: "medical_booking_orderid",
   align: "center",
   label: "Medical Booking Order id",
   field: "medical_booking_orderid",
   headerClasses: "bg-primary text-white",
  },
  {
    name: "equipment_partner_name",
    align: "center",
    label: "Equipment Partner Name",
    field: "equipment_partner_name",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "equipment_partner_sub_name",
    align: "center",
    label: "Equipment Partner Sub Name",
    field: "equipment_partner_sub_name",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "eqp_booking_type",
    align: "center",
    label: "Eqp Booking Type",
    field: "eqp_booking_type",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "mobile_number",
    align: "center",
    label: "Mobile Number",
    field: "mobile_number",
    headerClasses: "bg-primary text-white",
  },
  {
   name: "eqp_booking_date",
   align: "center",
   label: "Eqp Booking Date",
   field: "eqp_booking_date",
   headerClasses: "bg-primary text-white",
  },
  {
   name: "medical_charges",
   align: "center",
   label: "Medical Charges",
   field: "medical_charges",
   headerClasses: "bg-primary text-white",
  },
  {
   name: "final_price_amount",
   align: "center",
   label: "final Price Amount",
   field: "final_price_amount",
   headerClasses: "bg-primary text-white",
  },
  {
   name: "equipmentrefundamount",
   align: "center",
   label: "Refund Amount",
   field: "equipmentrefundamount",
   headerClasses: "bg-primary text-white",
  },
],
partnerAcc_Cancellation_rows:[],
partnerAcc_Cancellation_columns:[
  {
    name: "s_no",
    align: "center",
    label: "Sno",
    field: "s_no",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "account_id",
    align: "center",
    label: "Account id",
    field: "account_id",
    headerClasses: "bg-primary text-white",
    align: "center",
  },
  {
    name: "booking_order_id",
    align: "center",
    label: "Booking Order Id",
    field: "booking_order_id",
    headerClasses: "bg-primary text-white",
  },
  {
   name: "property_name",
   align: "center",
   label: "Property Name",
   field: "property_name",
   headerClasses: "bg-primary text-white",
 },
  {
    name: "property_type",
    align: "center",
    label: "Property Type",
    field: "property_type",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "room_type",
    align: "center",
    label: "Room Type",
    field: "room_type",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "phone_no",
    align: "center",
    label: "Phone No",
    field: "phone_no",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "check_in",
    align: "center",
    label: "Check In",
    field: "check_in",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "check_out",
    align: "center",
    label: "Check Out",
    field: "check_out",
    headerClasses: "bg-primary text-white",
  },
  {
   name: "no_of_days",
   align: "center",
   label: "No Of Days",
   field: "no_of_days",
   headerClasses: "bg-primary text-white",
 },
 {
   name: "room_price",
   align: "center",
   label: "Room Price",
   field: "room_price",
   headerClasses: "bg-primary text-white",
 },
 {
   name: "total_price",
   align: "center",
   label: "Total Price",
   field: "total_price",
   headerClasses: "bg-primary text-white",
 },
 {
   name: "cancellAmount",
   align: "center",
   label: "Cancellation Amount",
   field: "cancellAmount",
   headerClasses: "bg-primary text-white",
 },
 {
   name: "refundAmount",
   align: "center",
   label: "Refund Amount",
   field: "refundAmount",
   headerClasses: "bg-primary text-white",
 },
],
});
const getters = {
  mh_acc_data: state => state.mh_acc_data,
  mh_travel_data: state => state.mh_travel_data,
  mh_equipment_data: state => state.mh_equipment_data,
  mh_food_data: state => state.mh_food_data,
  acc_guest_cancel_data: state => state.acc_guest_cancel_data,
  acc_travel_cancel_data: state => state.acc_travel_cancel_data,
  individual_travel_cancel_data: state => state.individual_travel_cancel_data,
  individual_medical_cancel_data: state => state.individual_medical_cancel_data,
  Accommodation_Cancellation_rows: state => state.Accommodation_Cancellation_rows,
  Travel_Cancellation_rows: state => state.Travel_Cancellation_rows,
  food_Cancellation_rows : state => state.food_Cancellation_rows,
  medical_Cancellation_rows: state => state.medical_Cancellation_rows,
  acc_medical_cancel_data: state => state.acc_medical_cancel_data,
  partnerAcc_Cancellation_rows: state => state.partnerAcc_Cancellation_rows,
};
const actions = {
  cancellDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/cancelled/cancellDetails", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Cancell Booking",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  cancellfoodbooking({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/cancelled/cancelledfoodbooking", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Cancell Booking",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  cancelltravelbooking({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/cancelled/cancelledtravelbooking", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getIndividualTravelCancelId", payload.mobile_number);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Cancell Booking",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
   cancelltravelbooking({ dispatch }, payload) {
   // console.log("payload trael",payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/cancelled/cancelledtravelbooking", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getIndividualTravelCancelId", payload.travel_booking_orderid);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Cancell Booking",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  cancellequipmentbooking({ dispatch }, payload) {
 //   console.log("payload medical cal",payload);

    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/cancelled/cancelledequipmentbooking", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
           setTimeout(() => {
            dispatch("getIndividualMedicalCancelId", payload.medical_booking_orderid	);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Cancell Booking",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  AccomodationStatus({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/cancelled/AccomodationStatus/${payload.booking_order_id}`,payload)
    }, 1500);
  },
  FoodStatus({ dispatch }, payload) {
   dispatch(`alerts_loaders/saveLoading`, "", { root: true });
   setTimeout(() => {
     dispatch("alerts_loaders/stopLoading", "", { root: true });
     api
       .put(
         `/cancelled/FoodStatus/${payload.food_booking_orderid}`,payload)
   }, 1500);
 },
 TravelStatus({ dispatch }, payload) {
 dispatch(`alerts_loaders/saveLoading`, "", { root: true });
 setTimeout(() => {
   dispatch("alerts_loaders/stopLoading", "", { root: true });
   api
     .put(
       `/cancelled/TravelStatus/${payload.travel_booking_orderid}`,payload)
 }, 1500);
},
equipmentStatus({ dispatch }, payload) {
//  console.log("equp",payload);
 dispatch(`alerts_loaders/saveLoading`, "", { root: true });
 setTimeout(() => {
   dispatch("alerts_loaders/stopLoading", "", { root: true });
   api
     .put(
       `/cancelled/equipmentStatus/${payload.medical_booking_orderid}`,payload)
 }, 1500);
},

loadAccomodationDetails({ dispatch, commit }, payload) {
  console.log("ddd",payload);
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/cancelled/loadAccomodationDetails/${payload.item}`)
      .then((response) => {
        if (response.data.data.length > 0) {
          let rows = response.data;
          commit("SET_ACCOMODATION_DETAILS", rows);
          console.log("rowsofcancel", rows);

          let checkinDate = new Date(rows.data[0].check_in);
          let checkInTime = rows.data[0].checkIn_time;


          let currentDate = new Date();
          if (checkinDate < currentDate || (checkinDate.getTime() === currentDate.getTime() && checkInTime <= currentDate.getHours())) {

            payload.cancellationDialogOpen();

          }
        } else {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: `${payload} is not found. Please Check the MH Booking ID`,
              type: "negative",
            },
            { root: true }
          );
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading  booking details Data",
            type: "negative",
          },
          { root: true }
        );
      });
  }, 1500);
},
// loadAccomodationDetails({ dispatch,commit }, payload) {
//   dispatch("alerts_loaders/startLoading", "", { root: true });
//   setTimeout(() => {
//     dispatch("alerts_loaders/stopLoading", "", { root: true });
//     api
//     .get(`/cancelled/loadAccomodationDetails/${payload}`)
//       .then(response => {
//         if (response.data.data.length > 0) {
//           let rows = response.data;
//           commit("SET_ACCOMODATION_DETAILS", rows);
//           console.log("rowsofcancel",rows);
//          // Get the check-in date and time from the accommodation details
//          let checkinDate = new Date(rows.data[0].check_in);

//          // Compare the check-in date and time with the current date and time
//          let currentDate = new Date();
//          if (checkinDate < currentDate) {
//            // If the check-in date and time have already passed,
//            // prevent cancellation by not showing the cancellation button
//            // or by showing a message to the user that cancellation is no longer allowed
//          }
//        } else {
//          dispatch(
//            "alerts_loaders/showAlert",
//            {
//              msg: `${payload} is not found. Please Check the MH Booking ID`,
//              type: "negative"
//            },
//            { root: true }
//          );
//        }
//      })
//       .catch(error => {
//         console.log(error);
//         dispatch(
//           "alerts_loaders/showAlert",
//           {
//             msg: "Error While Loading food booking details Data",
//             type: "negative"
//           },
//           { root: true }
//         );
//       });
//   }, 1500);
// },

loadTravelDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/cancelled/loadTravelDetails/${payload}`)
        .then(response => {

          if (response.data.data.length > 0) {
            let rows = response.data;
            commit("SET_TRAVEL_DETAILS", rows);

          } else {
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: `${payload} is not found. Please Check the MH Booking ID`,
                type: "negative"
              },
              { root: true }
            );
          }
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading MH Booking Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadMedicalDetails({ commit, dispatch }, payload) {

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/cancelled/loadMedicalDetails/${payload}`)
        .then(response => {

          if (response.data.data.length > 0) {
            let rows = response.data;
            commit("SET_EQUIPMENT_DETAILS", rows);

          } else {
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: `${payload} is not found. Please Check the MH Booking ID`,
                type: "negative"
              },
              { root: true }
            );
          }
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading MH Booking Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadFoodDetails({ commit, dispatch }, payload) {
 //  console.log("sese",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/cancelled/loadFoodDetails/${payload}`)
        .then(response => {

          if (response.data.data.length > 0) {
            let rows = response.data;
            commit("SET_FOOD_DETAILS", rows);
      //  console.log("food row",rows);
          } else {
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: `${payload} is not found. Please Check the MH Booking ID`,
                type: "negative"
              },
              { root: true }
            );
          }
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading MH Booking Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getCancelId({ commit, dispatch }, payload) {
    // console.log("cancel",payload)
     dispatch("alerts_loaders/startLoading", "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .get(`/cancelled/gettingCancelId/${payload.booking_order_id}`)
         .then(response => {
           let rows = response.data;
           console.log(rows,"ppp")
           commit("SET_ACC_CANCEL_ID", rows);

           // this.$router.push({
           //   name: "Get Guest CancelID",
           //   params: { guestCancelID: rows }
           // });
         })
         .catch(error => {
           console.log(error);
           dispatch(
             "alerts_loaders/showAlert",
             {
               msg: "Error While Loading Booking Guests Data",
               type: "negative"
             },
             { root: true }
           );
         });
     }, 1500);
   },




   getTravelCancelId({ commit, dispatch }, payload) {
    //  console.log("cancelTravel",payload)
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(`/cancelled/gettingTravelCancelId/${payload.booking_order_id}`)
          .then(response => {
            let rows = response.data;
          //  console.log(response.data,"travel")
            commit("SET_TRAVEL_CANCEL_ID", rows);

            // this.$router.push({
            //   name: "Get Guest CancelID",
            //   params: { guestCancelID: rows }
            // });
          })
          .catch(error => {
            console.log(error);
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: "Error While Loading Booking Guests Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },

    getIndividualTravelCancelId({ commit, dispatch }, payload) {
    //  console.log("Individual11",payload)
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(`/cancelled/gettingIndividualTravelCancelId/${payload}`)
          .then(response => {
            let rows = response.data;
         //   console.log(response.data,"Individual")
            commit("SET_INDIVIDUAL_TRAVEL_CANCEL_ID", rows);
            this.$router.push({
              name: "Get Guest CANCEL Travel ID",
              params: { travelCanceldata: rows }
            });
          })
          .catch(error => {
            console.log(error);
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: "Error While Loading Travel Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },

    getIndividualMedicalCancelId({ commit, dispatch }, payload) {
    //  console.log("Individual11",payload)
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(`/cancelled/gettingIndividualMedicalCancelId/${payload}`)
          .then(response => {
            let rows = response.data;
          //  console.log(response.data,"Individual Medical")
            commit("SET_INDIVIDUAL_MEDICAL_CANCEL_ID", rows);
            this.$router.push({
              name: "Get Guest CANCEL medical ID",
              params: { medicalCanceldata: rows }
            });
          })
          .catch(error => {
            console.log(error);
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: "Error While Loading Travel Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },
    getMedicalCancelId({ commit, dispatch }, payload) {
    // console.log("cancelMedicalvel",payload)
     dispatch("alerts_loaders/startLoading", "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .get(`/cancelled/gettingMedicalCancelId/${payload.booking_order_id}`)
         .then(response => {
           let rows = response.data;
        //   console.log(response.data,"medical")
           commit("SET_MEDICAL_CANCEL_ID", rows);

           // this.$router.push({
           //   name: "Get Guest CancelID",
           //   params: { guestCancelID: rows }
           // });
         })
         .catch(error => {
           console.log(error);
           dispatch(
             "alerts_loaders/showAlert",
             {
               msg: "Error While Loading Booking Guests Data",
               type: "negative"
             },
             { root: true }
           );
         });
     }, 1500);
   },
   getAccommodationCancellationDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/cancelled/getAccommodationCancellationDetails`)
        .then(response => {
          let usermenus = response.data;
// console.log(usermenus);
          commit("GET_ACC_CANCELLATION_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Accommodation Cancellation Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTravelCancellationDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/cancelled/getTravelCancellationDetails`)
        .then(response => {
          let usermenus = response.data;

          commit("GET_TRAVEL_CANCELLATION_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Travel Cancellation Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getFoodCancellationDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/cancelled/getFoodCancellationDetails`)
        .then(response => {
          let usermenus = response.data;

          commit("GET_FOOD_CANCELLATION_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Cancellation Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMedicalCancellationDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/cancelled/getMedicalCancellationDetails`)
        .then(response => {
          let usermenus = response.data;

          commit("GET_MEDICAL_CANCELLATION_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Medical Cancellation Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getPartnerAccCancellation({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .get(`/cancelled/getPartnerAccCancellation/acc/${user.account_id}`)
        .then(response => {
          let usermenus = response.data;

          commit("GET_PARTNERACC_CANCELLATION_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Partner Accommodation Cancellation Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

};
const mutations = {
  SET_ACCOMODATION_DETAILS(state, data) {
    state.mh_acc_data = data.data;
  },
  SET_TRAVEL_DETAILS(state, data) {
    state.mh_travel_data = data.data;
  },
  SET_EQUIPMENT_DETAILS(state, data) {
    state.mh_equipment_data = data.data;
  },
  SET_FOOD_DETAILS(state, data) {
    state.mh_food_data = data.data;
  },
  SET_ACC_CANCEL_ID(state, data) {
    state.acc_guest_cancel_data = data.data;
  },
  SET_TRAVEL_CANCEL_ID(state, data) {
    state.acc_travel_cancel_data = data.data;
  },
  SET_INDIVIDUAL_TRAVEL_CANCEL_ID(state, data) {
    state.individual_travel_cancel_data = data.data;
  },
  SET_INDIVIDUAL_MEDICAL_CANCEL_ID(state, data) {
    state.individual_medical_cancel_data = data.data;
  },
  SET_MEDICAL_CANCEL_ID(state, data) {
    state.acc_medical_cancel_data = data.data;
  },
  GET_ACC_CANCELLATION_DETAILS(state, rows) {
    state.Accommodation_Cancellation_rows = rows;
  },
  GET_TRAVEL_CANCELLATION_DETAILS(state, rows) {
    state.Travel_Cancellation_rows = rows;
  },
  GET_FOOD_CANCELLATION_DETAILS(state, rows) {
    state.food_Cancellation_rows = rows;
  },
  GET_MEDICAL_CANCELLATION_DETAILS(state, rows) {
    state.medical_Cancellation_rows = rows;
  },
  GET_PARTNERACC_CANCELLATION_DETAILS(state, rows) {
    state.partnerAcc_Cancellation_rows = rows;
  },
};
export const cancelled = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
