import { api } from "boot/axios";

//intial state
const state = () => ({
  user: null,
  adult_count: null,
  child_count: null,
  infant_count: null,
  userMenus: [],
  user_rows: [],
  partner_rows: [],
  partner_columns: [],
  language: "English",
  partner_reg_rows: [],
  staff_reg_rows: [],
  city_reg_rows: [],
  user_otp_arr: [],
  partner_Approval_status_count: [],
  city: "",
  city_id: "",
  hospital: "",
  hospital_id: "",
  reachus_data_rows: [],
  patient_data_rows: [],
  patient_data_columns: [
    {
      name: "index",
      align: "center",
      label: "Sno",
      required: true,
      field: "index",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "actions",
      label: "Take Action",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "created_datetime1",
      align: "left",
      label: "Date",
      required: true,
      field: "created_datetime1",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "patient_name",
      align: "left",
      label: "Patient Name",
      required: true,
      field: "patient_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "disease",
      align: "left",
      label: "Diseases",
      required: true,
      field: "disease",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "other_disease",
      align: "left",
      label: "Other Disease",
      required: true,
      field: "other_disease",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "contact_email",
      align: "left",
      label: "Contact Email",
      field: "contact_email",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "patient_location",
      align: "left",
      label: "Patient Location",
      field: "patient_location",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "mobile_number",
      align: "left",
      label: "Mobile Number",
      field: "mobile_number",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "message",
      align: "left",
      label: "Message",
      field: "message",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
 ],
   diseasetakeaction_data_rows: [],
  diseasetakeaction_data_columns:[
    {
      name: "health_support_id",
      align: "left",
      label: "Health Support ID",
      required: true,
      field: "health_support_id",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "patient_name",
      align: "left",
      label: "Patient Name",
      required: true,
      field: "patient_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "disease",
      align: "left",
      label: "Diseases",
      required: true,
      field: "disease",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "other_disease",
      align: "left",
      label: "Other Disease",
      required: true,
      field: "other_disease",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "action_takenby",
      align: "left",
      label: "Action Taken By",
      required: true,
      field: "action_takenby",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "remarks",
      align: "left",
      label: "Remarks",
      required: true,
      field: "remarks",
      headerClasses: "bg-primary text-white",
      sortable: true
    }

  ],
  reachus_data_columns: [
    {
      name: "index",
      align: "center",
      label: "Sno",
      required: true,
      field: "index",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "actions",
      label: "Take Action",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "created_datetime1",
      align: "center",
      label: "Date",
      required: true,
      field: "created_datetime1",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "patient_name",
      align: "left",
      label: "Patient Name",
      required: true,
      field: "patient_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "hospital_name",
      align: "left",
      label: "hospital Name",
      required: true,
      field: "hospital_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "contact_email",
      align: "left",
      label: "Contact Email",
      field: "contact_email",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "mobile_number",
      align: "left",
      label: "Mobile Number",
      field: "mobile_number",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "patient_location",
      align: "left",
      label: "Patient Location",
      field: "patient_location",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "message",
      align: "left",
      label: "Message",
      field: "message",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],
  takeaction_data_rows: [],
  takeaction_data_columns: [
    // {
    //   name: "sno",
    //   align: "center",
    //   label: "Sno",
    //   required: true,
    //   field: "sno",
    //   headerClasses: "bg-primary text-white",
    //   sortable: true
    // },
    {
      name: "reachus_id",
      align: "left",
      label: "Reachus Id",
      required: true,
      field: "reachus_id",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "hospitalName",
      align: "left",
      label: "hospital Name",
      required: true,
      field: "hospitalName",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "action_takenby",
      align: "left",
      label: "Action Taken By",
      required: true,
      field: "action_takenby",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "remarks",
      align: "left",
      label: "Remarks",
      required: true,
      field: "remarks",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],
  partner_reg_columns: [
    {
      name: "index",
      align: "center",
      label: "Sno",
      required: true,
      field: "index",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "actions",
      label: "Take Action",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "status",
      required: true,
      label: "Status",
      align: "left",
      headerClasses: "bg-primary text-white",
      field: "status",
      sortable: true
    },
    {
      name: "city",
      align: "left",
      label: "City",
      field: "city",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "nearest_hospital",
      align: "left",
      label: "Nearest Hospital",
      field: "nearest_hospital",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "partner_id",
      align: "left",
      label: "Partner Id",
      required: true,
      field: "partner_id",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "partner_type",
      align: "left",
      label: "Type Of Partner",
      field: "partner_type",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
     {
      name: "first_name",
      align: "left",
      label: "Partner Name",
      required: true,
      field: "first_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "mobile_no",
      align: "left",
      label: "Mobile",
      field: "mobile_no",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "email_id",
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "created_datetime",
      align: "left",
      label: "Application Date",
      field: "created_datetime",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
  ],

  guest_columns: [
    {
      name: "sno",
      align: "center",
      label: "Sno",
      required: true,
      field: "sno",
      headerClasses: "text-black text-bold",
      sortable: true
    },
    {
      name: "mh_booking_id",
      align: "center",
      label: "MH Booking Id",
      required: true,
      field: "mh_booking_id",
      headerClasses: "text-black text-bold",
      sortable: true
    },
    {
      name: "guest_name",
      align: "left",
      label: "Guest Name",
      required: true,
      field: "guest_name",
      headerClasses: "text-black text-bold",
      sortable: true
    },
    {
      name: "guest_type",
      align: "left",
      label: "Guest Type",
      required: true,
      field: "guest_type",
      headerClasses: "text-black text-bold",
      sortable: true
    }
  ],
  partner_approval_displayAll_rows: [],
});

///getters
const getters = {
  allUser: state => state.user_rows,
  userDetails: state => state.user,
  userMenus: state => state.userMenus,
  partner_rows: state => state.partner_rows,
  user: state => state.user,
  partner_reg_rows: state => state.partner_reg_rows,
  reachus_data_rows: state => state.reachus_data_rows,
  patient_data_rows: state => state.patient_data_rows,
  diseasetakeaction_data_rows: state => state.diseasetakeaction_data_rows,
  takeaction_data_rows: state => state.takeaction_data_rows,
  partner_approval_displayAll_rows: state =>state.partner_approval_displayAll_rows,
  staff_reg_rows: state => state.staff_reg_rows,
  city_reg_rows: state => state.city_reg_rows,
  user_otp_arr: state => state.user_otp_arr,
  partner_Approval_status_count: state => state.partner_Approval_status_count,

};

//actions
const actions = {
  async login({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/loginLoading", "", { root: true });
    try {
      let response = await api.post("/userAccount/login", payload);
      let result = response.data;
      let user = response.data.user[0];
      let status = response.data.status;

      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
      }, 1000);
      dispatch(
        "alerts_loaders/showAlert",
        { msg: result.message, type: status ? "positive" : "negative" },
        { root: true }
      );
      localStorage.setItem("user", JSON.stringify(user));
      commit("LOGIN_SUCCESS", user);
      if (status) {
        // dispatch("alerts_loaders/startLoading","",{root:true})
        setTimeout(() => {
          this.$router.push("/customer");
          dispatch("getUserMenus", user.role, user.sub_role);
          //dispatch("alerts_loaders/stopLoading","",{root:true})
        }, 2000);
      }
    } catch (error) {
      localStorage.removeItem("user");
      commit("LOGIN_FAILURE");
      dispatch("alerts_loaders/stopLoading", "", { root: true });
    }
  },
  createUserLoginAcc({ dispatch, commit }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    dispatch(`alerts_loaders/showAlert`,
     { msg: "OTP sent successfully. Please check your mobile phone.",
     type: "positive" }, { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/userAccount/userLogin", payload)
        .then(response => {
          let rows = response.data.result2;
          //  console.log("rows",rows)
          commit("USER_LOGIN_OTP", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed to Login ",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  // createUserLoginAcc({ dispatch, commit }, payload) {
  //   dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .post("/userAccount/userLogin", payload)
  //       .then(response => {
  //         let rows = response.data.result2;
  //         //  console.log("rows",rows)
  //         commit("USER_LOGIN_OTP", rows);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           `alerts_loaders/showAlert`,
  //           {
  //             msg: "Failed to Login ",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },

  updateOtp({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      api
        .put(
          `/userAccount/updateOtpData/${payload.mobile_no}/${payload.user_code}`,
          payload
        )
        .then(response => {
          if (response.data.message === "OTP verification successful") {
            dispatch(
              `alerts_loaders/showAlert`,
              {
                msg: "OTP verification successful",
                type: "positive"
              },
              { root: true }
            );
          } else {
            dispatch(
              `alerts_loaders/showAlert`,
              {
                msg: "OTP verification failed. Please try again.",
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
              msg: "Failed to Login ",
              type: "negative"
            },
            { root: true }
          );
        })
        .finally(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
        });
    }, 1500);
  },
  // updateOtp({ dispatch }, payload) {
  //   //  console.log("Payload", payload)
  //   dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .put(
  //         `/userAccount/updateOtpData/${payload.mobile_no}/${payload.user_code}`,
  //         payload
  //       )
  //       .then(response => {
  //         //   console.log("response",response)
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           `alerts_loaders/showAlert`,
  //           {
  //             msg: "Failed to Login ",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },
  async partnerLogin({ commit, dispatch }, payload) {
    try {
      dispatch("alerts_loaders/loginLoading", "", { root: true });
      let response = await api.post("/userAccount/login", payload);
      let result = response.data;
      let user = response.data.user[0];
      let status = response.data.status;
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
      }, 2000);
      dispatch(
        "alerts_loaders/showAlert",
        { msg: result.message, type: status ? "positive" : "negative" },
        { root: true }
      );

      localStorage.setItem("user", JSON.stringify(user));
      //dispatch menus
      commit("LOGIN_SUCCESS", user);
      if (status) {
        // dispatch("alerts_loaders/startLoading","",{root:true})
        setTimeout(() => {
          this.$router.push("/patner");
          this.$router.push("/partnerDashboard");
          dispatch("alerts_loaders/stopLoading", "", { root: true });
        }, 2000);
      }
    } catch (error) {
      localStorage.removeItem("user");
      commit("LOGIN_FAILURE");
    }
    //  finally{
    //   dispatch("alerts_loaders/stopLoading","",{root:true})
    // }
  },
  async agentLogin({ commit, dispatch }, payload) {
    try {
      dispatch("alerts_loaders/loginLoading", "", { root: true });
      let response = await api.post("/userAccount/login", payload);
      let result = response.data;
      let user = response.data.user[0];
      let status = response.data.status;
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
      }, 2000);
      dispatch(
        "alerts_loaders/showAlert",
        { msg: result.message, type: status ? "positive" : "negative" },
        { root: true }
      );

      localStorage.setItem("user", JSON.stringify(user));
      //dispatch menus
      commit("LOGIN_SUCCESS", user);
      if (status) {
        setTimeout(() => {
          this.$router.push("/agent");
          this.$router.push("/agent_Dashboard");
          dispatch("getUserMenus", user.role, user.sub_role);
        }, 2000);
      }
    } catch (error) {
      localStorage.removeItem("user");
      commit("LOGIN_FAILURE");
    }
  },
  // async adminLogin({ commit, dispatch }, payload) {
  //   try {
  //     dispatch("alerts_loaders/loginLoading", "", { root: true });
  //     let response = await api.post("/userAccount/login", payload);
  //     let result = response.data;
  //     let user = response.data.user[0];
  //     let status = response.data.status;

  //     setTimeout(() => {
  //       dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     }, 1000);
  //     dispatch(
  //       "alerts_loaders/showAlert",
  //       { msg: result.message, type: status ? "positive" : "negative" },
  //       { root: true }
  //     );

  //     localStorage.setItem("user", JSON.stringify(user));
  //     //dispatch menus
  //     commit("LOGIN_SUCCESS", user);
  //     // if (status) {
  //     // dispatch("alerts_loaders/startLoading","",{root:true})
  //     setTimeout(() => {
  //       this.$router.push("/admin");
  //       this.$router.push("/adminDashboard");
  //       dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     }, 2000);
  //     // }
  //   } catch (error) {
  //     localStorage.removeItem("user");
  //     commit("LOGIN_FAILURE");
  //   }
  //   //  finally{
  //   //   dispatch("alerts_loaders/stopLoading","",{root:true})
  //   // }
  // },
  // async staffLogin({ commit, dispatch }, payload) {
  //   try {
  //     dispatch("alerts_loaders/loginLoading", "", { root: true });
  //     let response = await api.post("/userAccount/login", payload);
  //     let result = response.data;
  //     let user = response.data.user[0];
  //     let status = response.data.status;

  //     setTimeout(() => {
  //       dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     }, 1000);
  //     dispatch(
  //       "alerts_loaders/showAlert",
  //       { msg: result.message, type: status ? "positive" : "negative" },
  //       { root: true }
  //     );

  //     localStorage.setItem("user", JSON.stringify(user));
  //     //dispatch menus
  //     commit("LOGIN_SUCCESS", user);
  //     // if (status) {
  //     // dispatch("alerts_loaders/startLoading","",{root:true})
  //     setTimeout(() => {
  //       this.$router.push("/staff");
  //       this.$router.push("/staffDashboard");
  //       dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     }, 2000);
  //     // }
  //   } catch (error) {
  //     localStorage.removeItem("user");
  //     commit("LOGIN_FAILURE");
  //   }
  //   //  finally{
  //   //   dispatch("alerts_loaders/stopLoading","",{root:true})
  //   // }
  // },

  // async cityManagerLogin({ commit, dispatch }, payload) {
  //   try {
  //     dispatch("alerts_loaders/loginLoading", "", { root: true });
  //     let response = await api.post("/userAccount/login", payload);
  //     let result = response.data;
  //     let user = response.data.user[0];
  //     let status = response.data.status;

  //     setTimeout(() => {
  //       dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     }, 1000);
  //     dispatch(
  //       "alerts_loaders/showAlert",
  //       { msg: result.message, type: status ? "positive" : "negative" },
  //       { root: true }
  //     );

  //     localStorage.setItem("user", JSON.stringify(user));
  //     //dispatch menus
  //     commit("LOGIN_SUCCESS", user);
  //     // if (status) {
  //     // dispatch("alerts_loaders/startLoading","",{root:true})
  //     setTimeout(() => {
  //       this.$router.push("/city_manager");
  //       this.$router.push("/cityDashboard");
  //       dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     }, 2000);
  //     // }
  //   } catch (error) {
  //     localStorage.removeItem("user");
  //     commit("LOGIN_FAILURE");
  //   }
  //   //  finally{
  //   //   dispatch("alerts_loaders/stopLoading","",{root:true})
  //   // }
  // },


//Onkar Add Mh Login for all
async mhLogin({ commit, dispatch }, payload) {
    try {
      dispatch("alerts_loaders/loginLoading", "", { root: true });
      let response = await api.post("/userAccount/login", payload);
      let result = response.data;
      let user = response.data.user[0];
      let status = response.data.status;

      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
    },1500);
      dispatch(
        "alerts_loaders/showAlert",
        { msg: result.message, type: status ? "positive" : "negative" },
        { root: true }
      );
      localStorage.setItem("user", JSON.stringify(user));
      commit("LOGIN_SUCCESS", user);
      if (status) {
        if (user.role === "city_manager") {
      setTimeout(() => {
        this.$router.push("/city_manager");
        this.$router.push("/cityDashboard");
      }, 2000);
        } else if (user.role === "staff") {
          setTimeout(() => {
            this.$router.push("/staff");
            this.$router.push("/staffDashboard");
          }, 2000);
        } else if (user.role === "admin") {
          setTimeout(() => {
          this.$router.push("/admin");
            this.$router.push("/adminDashboard");
          },2000);
        }
        // dispatch("alerts_loaders/startLoading", "", { root: true });
      }
    } catch (error) {
      localStorage.removeItem("user");
      commit("LOGIN_FAILURE");
    }
  },




  logout({ commit }) {
    commit("LOGOUT_USER");
    localStorage.clear("user");
    localStorage.clear("userMenus");
    this.$router.replace("/");
  },

  getUserMenus({ commit, dispatch }, role, role2) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/userAccount/getUserMenus/${role}/${role2}`)
        .then(response => {
          let usermenus = response.data;
          localStorage.setItem("usermenus", JSON.stringify(usermenus));
          commit("SET_USER_MENUS", usermenus);
        })
        .catch(error => {
          console.log(error);
          localStorage.removeItem("usermenus");
          dispatch(
            "alerts_loaders/showAlert",
            { msg: "Menus Loading Faied", type: "negative" },
            { root: true }
          );
        });
    }, 3000);
  },
  customerRegistration({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/customerRegistration", payload)
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
              msg: "Failed To Save Customer Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  partnerRegistration({ dispatch }, payload) {
    // console.log("payload", payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/partnerRegistration", payload.formData)
        .then(response => {
          if (response?.data?.message.includes("Register")) {
            dispatch(
              `alerts_loaders/showAlert`,
              { msg: response.data.message, type: "negative" },
              { root: true }
            );
          } else {
            payload.dialogOpen();
          }

          // dispatch(
          //   "alerts_loaders/showAlertInteractive",
          //   { msg: response.data.message, type: "positive" },
          //   { root: true }
          // );
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Partner Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  grievanceRegistration({ dispatch }, payload) {
    // console.log(payload)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/partnerRegistration/grievanceRegistration", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlertInteractive",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Grievance Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  getPartnerMenus({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(`/userAccount/getUserMenus/${user.role}/${user.sub_role}`)
      .then(response => {
        let rows = response.data;
        localStorage.setItem("rows", JSON.stringify(rows));
        commit("SET_PARTNER", rows);
      })

      .catch(error => {
        console.log(error);
        localStorage.removeItem("rows");
        dispatch(
          `alerts_loaders/showAlert`,
          {
            msg: "Error While Loading Partner Layout Data",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  getPartnerAllDisplayForAdmin({ commit, dispatch },payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/approvePartner/getPartnerAllDisplayForAdmin/${payload}`)
        .then(response => {
          let usermenus = response.data;
          // console.log(response.data);
          commit("SET_PARTNER_ALLDISPLAY_FORADMIN", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Partner Registration",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  getPartnerRegistrationData({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/approvePartner/partnerRegData`)
        .then(response => {
          let usermenus = response.data;
          // console.log(response.data);
          commit("SET_PARTNER_USER", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Partner Registration",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
   // GEt Take Action Data
   getActionsDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/approvePartner/takeActionDetails/${payload.reachus_id}`)
        .then(response => {
          let usermenus = response.data;

          commit("TAKE_ACTION_DATA", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading TAke Action Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  approvePartner({ dispatch }, payload) {
    api
      .put(`/approvePartner/approvePartner`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        dispatch("getPartnerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Partner Approval Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  rejectPartner({ dispatch }, payload) {
    api
      .put(`/approvePartner/rejectPartner`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "info" },
          { root: true }
        );
        dispatch("getPartnerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Partner Rejection Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  approvePartnerfood({ dispatch }, payload) {
    api
      .put(`/approvePartner/approvePartnerfood`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        dispatch("getPartnerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Partner Approval Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  rejectPartnerfood({ dispatch }, payload) {
    api
      .put(`/approvePartner/rejectPartnerfood`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "info" },
          { root: true }
        );
        dispatch("getPartnerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Partner Rejection Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  approvePartnertravel({ dispatch }, payload) {
    api
      .put(`/approvePartner/approvePartnertravel`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        dispatch("getPartnerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Partner Approval Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  rejectPartnertravel({ dispatch }, payload) {
    api
      .put(`/approvePartner/rejectPartnertravel`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "info" },
          { root: true }
        );
        dispatch("getPartnerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Partner Rejection Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  approvePartnermedical({ dispatch }, payload) {
    api
      .put(`/approvePartner/approvePartnermedical`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        dispatch("getPartnerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Partner Approval Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  rejectPartnermedical({ dispatch }, payload) {
    api
      .put(`/approvePartner/rejectPartnermedical`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "info" },
          { root: true }
        );
        dispatch("getPartnerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Partner Rejection Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  staffRegistration({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/partnerRegistration/staffRegistration", payload)
        .then(response => {
          // console.log(response);
          dispatch(
            "alerts_loaders/showAlertInteractive",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Staff Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  getStaffRegistrationData({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/approvePartner/staffRegData`)
        .then(response => {
          let usermenus = response.data;
          // console.log(response.data);
          commit("SET_STAFF_USER", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Partner Registration",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  approveStaffRegistration({ dispatch }, payload) {
    api
      .put(`/approvePartner/approveStaffRegistration`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        dispatch("getStaffRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Staff Approval Failed! Please try Again", type: "negative" },
          { root: true }
        );
      });
  },
  rejectStaffRegistration({ dispatch }, payload) {
    api
      .put(`/approvePartner/rejectStaffRegistration`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "info" },
          { root: true }
        );
        dispatch("getStaffRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Staff Rejection Failed! Please try Again", type: "negative" },
          { root: true }
        );
      });
  },
  cityRegistration({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/partnerRegistration/cityMangerRegistration", payload)
        .then(response => {
          // console.log(response);
          dispatch(
            "alerts_loaders/showAlertInteractive",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save City Manager Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  getCityManagerRegistrationData({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/approvePartner/cityManagerRegData`)
        .then(response => {
          let usermenus = response.data;
          // console.log(response.data);
          commit("SET_CITY_MANAGER_USER", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading City Manager Registration",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  approveCityManager({ dispatch }, payload) {
    api
      .put(`/approvePartner/approveCityManager`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        dispatch("getCityManagerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "City Manager Approval Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },

  // Get Reach Us data
  getReachusFormDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/approvePartner/custReachusData`)
        .then(response => {
          let usermenus = response.data;
          // console.log(response.data);
          commit("CUST_REACHUS_DATA", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading ReachUS Registration",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },

  rejectCityManager({ dispatch }, payload) {
    api
      .put(`/approvePartner/rejectCityManager`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "info" },
          { root: true }
        );
        dispatch("getCityManagerRegistrationData");
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "City Manager Rejection Failed! Please try Again",
            type: "negative"
          },
          { root: true }
        );
      });
  },
  agentRegistration({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/agentApi/agentRegistration", payload.formData)
        .then(response => {
          if (response?.data?.message.includes("Register")) {
            dispatch(
              `alerts_loaders/showAlert`,
              { msg: response.data.message, type: "negative" },
              { root: true }
            );
          } else {
            payload.agentdialogOpen();
          }
          // dispatch(
          //   "alerts_loaders/showAlertInteractive",
          //   { msg: response.data.message, type: "positive" },
          //   { root: true }
          // );
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Agent Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  Registernewpartner({ dispatch }, payload) {
    api
      .put(`/approvePartner/Registernewpartner`, payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        // dispatch("getCityManagerRegistrationData")
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Registration Failed! Please try Again", type: "negative" },
          { root: true }
        );
      });
  },
  Registernewaccpartner({ dispatch }, payload) {
    api
      .put(`/approvePartner/Registernewaccpartner`, payload)
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
          "alerts_loaders/showAlert",
          { msg: "Registration Failed! Please try Again", type: "negative" },
          { root: true }
        );
      });
  },
  Registernewtravelpartner({ dispatch }, payload) {
    api
      .put(`/approvePartner/Registernewtravelpartner`, payload)
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
          "alerts_loaders/showAlert",
          { msg: "Registration Failed! Please try Again", type: "negative" },
          { root: true }
        );
      });
  },

   // SAve  Patient Details Data
   patientDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/customerRegistration/savingPatientHSDetails", formData, {
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

          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Reach Us Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  Registernewmedicalpartner({ dispatch }, payload) {
    api
      .put(`/approvePartner/Registernewmedicalpartner`, payload)
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
          "alerts_loaders/showAlert",
          { msg: "Registration Failed! Please try Again", type: "negative" },
          { root: true }
        );
      });
  },
  getpartnerRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          "/approvePartner/getpartnerRegistrationStatusCount"
        )
        .then(response => {
          let rows = response.data;
          commit("SET_PARTNER_REGISTRATION_STATUS_COUNT", rows);
          //console.log("rows",rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Partner Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },


  reachusActionTakeSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/customerRegistration/savingActionTakeDetails", formData, {})
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            // dispatch("getPropertyDetails");
            // dispatch("getPropertyRegistrationMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Reach Us Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getPatientDiseaseDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .get(`/approvePartner/getpatientDiseaseData`)
      .then(response => {
        let usermenus = response.data;
        //console.log("123654",response.data);
        commit("PATIENT_DISEASE_DATA", usermenus);
      })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Getting Patient Disease Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },

   //reach us form saving//
   reachwithusSaving({ dispatch }, payload) {
    console.log("ooooo",payload)
     dispatch(`alerts_loaders/saveLoading`, "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .post("/customerRegistration/reachwithusSaving", payload.formData)
         .then(response => {
          if (response?.data?.message.includes("SUBMIT")) {
            dispatch(
              `alerts_loaders/showAlert`,
              { msg: response.data.message, type: "negative" },
              { root: true }
            );
          } else {
            payload.dialogOpen();
          }
          //  dispatch(
          //    "alerts_loaders/showAlert",
          //    { msg: response.data.message, type: "positive" },
          //    { root: true }
          //  );

         })
         .catch(error => {
           console.log(error);
           dispatch(
             `alerts_loaders/showAlert`,
             {
               msg: "Failed To Reach us Details Data",
               type: "negative"
             },
             { root: true }
           );
         });
     }, 1500);
   },
   getPatientDiseaseActionsDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/approvePartner/diseasetakeActionDetails/${payload.health_support_id	}`)
        .then(response => {
          let usermenus = response.data;

          commit("DISEASE_TAKE_ACTION_DATA", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Health Support TAke Action Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 3000);
  },
  savechatus({ dispatch }, payload) {
    // console.log("ooooo", payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/customerRegistration/savechatus", payload)
        .then(response => {
          if (response.data && response.data.success) {
            dispatch(


              { root: true }
            );
          } else {
            dispatch(
              ``,
              {
                msg: response.data && response.data.message || "Failed to save chat Details Data",
                type: "positive"
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
              msg: "Failed To Save chat Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  medicalLoanDetailsSaving({ dispatch }, payload) {
    // console.log("Frontend data:",payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/customerRegistration/savingMedicalLoanDetails", payload)
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Medical Loan Details",
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
  SET_USER(state, rows) {
    state.user_rows = rows.data;
  },
  LOGIN_SUCCESS(state) {
    state.user = JSON.parse(localStorage.getItem("user")) || [];
    // state.user = rows;
  },
  LOGIN_FAILURE(state) {
    state.user = null;
  },
  LOGOUT_USER(state) {
    state.user = null;
  },
  SET_USER_MENUS(state, rows) {
    state.userMenus = JSON.parse(localStorage.getItem("usermenus")) || [];

    //  state.userMenus = rows;
  },
  SET_PARTNER(state, rows) {
    state.partner_rows = JSON.parse(localStorage.getItem("rows")) || [];
  },
  SET_PARTNER_USER(state, rows) {
    state.partner_reg_rows = rows;
  },
  CUST_REACHUS_DATA(state, rows) {
    state.reachus_data_rows = rows.data;
  },
  SET_PARTNER_ALLDISPLAY_FORADMIN(state, rows) {
    state.partner_approval_displayAll_rows = rows;
  },
  PATIENT_DISEASE_DATA(state, rows) {
    state.patient_data_rows = rows;
  },
  DISEASE_TAKE_ACTION_DATA(state, rows) {
    state.diseasetakeaction_data_rows = rows;
  },
  TAKE_ACTION_DATA(state, rows) {
    state.takeaction_data_rows = rows;
  },
  SET_STAFF_USER(state, rows) {
    state.staff_reg_rows = rows;
  },
  SET_CITY_MANAGER_USER(state, rows) {
    state.city_reg_rows = rows;
  },
  USER_LOGIN_OTP(state, rows) {
    state.user_otp_arr = rows;
  },
  SET_PARTNER_REGISTRATION_STATUS_COUNT(state, rows) {
    state.partner_Approval_status_count = rows.data;
  },
};

export const account = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
