const routes = [
  {
    path: "/",
  meta: { title: "Mangohomz – Book a patient-friendly room near the hospital" },
    component: () => import("../pages/menuContentPages/spa_index.vue")
  },
  {
    path: "/coustomerLogin",
    component: () => import("../pages/customerLogin.vue")
  },
  {
    path: "/about",
    component: () => import("../about.vue")
  },
  {
    path: "/partnerwithus",
    component: () => import("../pages/partnerWithUs.vue")
  },
  {
    path: "/patnerLogin",
    component: () => import("../pages/loginPages/partnerLogin.vue")
  },
  {
    path: "/userTypeReg",
    component: () => import("../pages/registrationPages/selectRegistration.vue")
  },
  {
    path: "/rooms",
    component: () => import("../pages/menuContentPages/rooms.vue")
  },

  {
    path: "/food",
    component: () => import("../pages/menuContentPages/food.vue")
  },
  {
    path: "/travel",
    component: () => import("../pages/menuContentPages/travel.vue")
  },
  {
    path: "/medicalEquipment",
    component: () => import("../pages/menuContentPages/medicalEquipment.vue")
  },
  {
    path: "/coronaProtocol",
    component: () => import("../pages/menuContentPages/coronaProtocol.vue")
  },
  {
    path: "/partner",
    component: () => import("../pages/menuContentPages/partner.vue")
  },
  {
    path: "/faqs",
    component: () => import("../pages/menuContentPages/faq.vue")
  },
  {
    path: "/contactUs",
    component: () => import("../pages/menuContentPages/contactUs.vue")
  },
  {
    path: "/mostRecentSearch",
    component: () => import("../pages/menuContentPages/mostRecentSearch.vue")
  },
  {
    path: "/mostRecentSearchResultList",
    component: () => import("../pages/menuContentPages/mostRecentSearchResultList.vue")
  },
  {
    path: "/whyMangoHomz",
    component: () => import("../pages/menuContentPages/whyMangoHomz.vue")
  },
  {
    path: "/login",
    component: () => import("../pages/loginPages/login.vue")
  },
  {
    path: "/searchList",
    component: () => import("../components/searchResultList.vue")
  },
  {
    path: "/bookingProcess/:searchInfo",
    name: "Serach Hotel List",
    component: () => import("../pages/bookingPages/booking.vue")
  },
  // {
  //   path: "/bookingProcess",
  //   name: "Serach Hotel List",
  //   component: () => import("../pages/bookingPages/booking.vue")
  // },
  {
    path: "/hotels/:city/:hospital",
    name: "Hotel List",
    component: () => import("../pages/bookingPages/mostRecentSeo.vue"),
    props: true,
  },
  {
    path: "/hotelName/:hotelInfo/:searchInfo",
    name: "Hotel Information",
    component: () => import("../components/hotelDetails.vue"),
  },
  {
    path: "/property/:city/:hospital/:property",
    name: "SeoHotel Information",
    component: () => import("../pages/bookingPages/mostrecentseohotelDetails.vue"),
  },
  {
    path: "/transportList",
    component: () => import("../components/transportList.vue")
  },
  {
    path: "/foodList",
    component: () => import("../components/foodList.vue")
  },
  {
    path: "/equipmentList",
    component: () => import("../components/equipmentList.vue")
  },
  {
    name: "Booking Room Data",
    path: "/cartDetails/:bookingRoomInfo/:searchInfo",
    component: () => import("../components/cartDetails.vue")
  },
    {
   // name: "Get Guest CancelID",
    path: "/cancelConfirmedPage",
    component: () => import("../components/cancelConfirmedPage.vue")
  },
  {

     path: "/supportUs",
     component: () => import("../pages/menuContentPages/supportUs.vue")
   },
   {

    path: "/termandconditon",
    component: () => import("../pages/menuContentPages/termandcondition.vue")
  },
  {

    path: "/privacypolicy",
    component: () => import("../pages/menuContentPages/privacypolicy.vue")
  },
  {

    path: "/customersupport",
    component: () => import("../pages/menuContentPages/customersupport.vue")
  },
  {

    path: "/refundpolicy",
    component: () => import("../pages/menuContentPages/refundpolicy.vue")
  },
  {

    path: "/cancellationpolicy",
    component: () => import("../pages/menuContentPages/cancellationpolicy.vue")
  },
  {

    path: "/cancellationandrefundspolicy",
    component: () => import("../pages/menuContentPages/cancellationrefundspolicy.vue")
  },
  {
    name: "Get Guest CANCEL Travel ID",
    path: "/cancelTravelConfirmedPage",
    component: () => import("../components/cancelTravelConfirmedPage.vue")
  },
  {
    name: "Get Guest CANCEL medical ID",
    path: "/cancelMedicalConfirmedPage",
    component: () => import("../components/cancelMedicalConfirmedPage.vue")
  },

  {
    name: "Get Guest phone Number",
    path: "/bookingConfirmedPage",
    component: () => import("../components/bookingConfirmedPage.vue")
  },
  {
    name: "Get Food Guest phone Number",
    path: "/bookingFoodConfirmedPage/:foodGuestNumber",
    component: () => import("../components/bookingFoodConfirmedPage.vue")
  },
  {
    name: "Get Travel Guest phone Number",
    path: "/bookingTravelConfirmedPage",
    component: () => import("../components/bookingTravelConfirmedPage.vue")
  },

  {
    name: "Get Equipment Guest phone Number",
    path: "/bookingEquipmentConfirmedPage/:equipmentGuestNumber",
    component: () => import("../components/bookingEquipmentConfirmedPage.vue")
  },
{
    name: "GuestData To PaymentPage",
    path: "/proceedToPayPage/:bookingGuestInfo",
    component: () => import("../components/proceedPayment.vue")
  },
  {
    name: "FoodData To PaymentPage",
    path: "/proceedToPayPage/:foodbookingdata",
    component: () => import("../components/proceedPaymentFood.vue")
  },
  {
    name: "TravelData To PaymentPage",
    path: "/proceedToPayPage/:travelbookingdata",
    component: () => import("../components/proceedPaymentTravel.vue")
  },
  {
    name: "equipmentData To PaymentPage",
    path: "/proceedToPayPage/:bookingGuestInfo",
    component: () => import("../components/proceedPaymentEquipment.vue")
  },
  {
    name: "Equipment Number",
    path: "/bookingEquipment/:EquipmentNo",
    component: () => import("../components/bookingEquipment.vue")
  },
  {
    name: "Food Number",
    path: "/bookingFood/:FoodNo",
    component: () => import("../components/bookingFood.vue")
  },
    {
    name: "Guest Number",
    path: "/bookingTravel/:GuestNo",
    component: () => import("../components/bookingTravel.vue")
  },
  // {
  //   path: "/confirmBooking",
  //   component: () => import("../components/confirmBooking.vue")
  // },
  {
    path: "/bookingEquipment",
    component: () => import("../components/bookingEquipment.vue")
  },
  {
    path: "/bookingFood",
    component: () => import("../components/bookingFood.vue")
  },
  // {
  //   path: "/proceedPayment",
  //   component: () => import("../components/proceedPayment.vue")
  // },
  {
    // name: "Partner Accepted Status",
    path: "/partnerAccepted/:txn_id/:account_id/:partner_id/:status",
    component: () => import("../components/partnerAcceptedStatus.vue")
  },

  {
    path: "/city_manager",
    component: () => import("../layouts/cityLayout.vue"),
    children: [
      {
        path: "/cityDashboard",
        component: () => import("../pages/cityManager/cityDashboard.vue")
      },
      {
        path: "/cityAccBookings",
        component: () => import("../pages/cityManager/cityAccBookings.vue")
      },
    ]
  },
  {
    path: "/admin",
    component: () => import("../layouts/adminLayout.vue"),
    children: [
      {
        path: "/adminDashboard",
        component: () => import("../pages/adminPages/adminDashboard.vue")
      },
      {
        path: "/healthSupportGet",
        component: () => import("../pages/adminPages/healthSupportGetForm.vue")
      },
      {
        path: "/adminReportMaster",
        component: () => import("../pages/adminPages/adminReportsMaster.vue")
      },

      {
        path: "/adminAllApproval",
        component: () => import("../pages/adminPages/adminAllApproval.vue")
      },
      {
        path: "/adminAllMaster",
        component: () => import("../pages/adminPages/adminAllMaster.vue")
      },
      {
        path: "/adminReportForAccommodation",
        component: () => import("../pages/adminPages/adminReportForAccommodation.vue")
      },
      {
        path: "/partnerRegApproval",
        component: () =>
          import("../pages/adminPages/partnerRegApproval.vue")
      },
      {
        path: "/feedbackview",
        component: () => import("../pages/adminPages/feedback.vue")
      },
      {
        path: "/paymentForBookings",
        component: () => import("../pages/adminPages/paymentForBookings.vue")
      },
      {
        path: "/agentRegApproval",
        component: () => import("../pages/adminPages/agentRegApproval.vue")
      },
      {
        path: "/reachusget",
        component: () => import("../pages/adminPages/reachusform.vue")
      },
      {
        path: "/aarthiscanget",
        component: () => import("../pages/adminPages/aarthiscan.vue")
      },
      {
        path: "/emailsubscriberget",
        component: () => import("../pages/adminPages/emailsubscribers.vue")
      },
      {
        path: "/hospitalmasterget",
        component: () => import("../pages/adminPages/hospitalmasterdata.vue")
      },
      {
        path: "/addhospitalmaster",
        component: () => import("../pages/adminPages/addhospitalmaster.vue")
      },
      {
        path: "/adminwhatsappsender",
        component: () => import("../pages/adminPages/adminwhatsappsender.vue")
      },
      {
        path: "/getcallbackmsgdata",
        component: () => import("../pages/adminPages/getcallbackmsgdata.vue")
      },
      {
        path: "/propertymasterget",
        component: () => import("../pages/adminPages/propertymasterdata.vue")
      },
      {
        path: "/propertyPartnerRegApproval",
        component: () =>
          import("../pages/adminPages/propertyPartnerRegApproval.vue")
      },
      {
        path: "/transportPartnerRegApproval",
        component: () =>
          import("../pages/adminPages/transportPartnerRegApproval.vue")
      },
      {
        path: "/foodPartnerRegApproval",
        component: () =>
          import("../pages/adminPages/foodPartnerRegApproval.vue")
      },
      {
        path: "/mhgeniemaster",
        component: () => import("../pages/adminPages/mhgeniemaster.vue")
      },

      {
        path: "/propertywisebooking",
        component: () => import("../pages/adminPages/propertyWisebooking.vue")
      },

      {
        path: "/propertymonthswisebooking",
        component: () => import("../pages/adminPages/propertyMonthsWiseBooking.vue")
      },
      {
        path: "/equipmentPartnerRegApproval",
        component: () =>
          import("../pages/adminPages/equipmentPartnerRegApproval.vue")
      },
      {
        path: "/mhOffers",
        component: () =>
          import("../pages/adminPages/mhOffers.vue")
      },
      {
        path: "/propertyofferprice",
        component: () =>
          import("../pages/adminPages/propertyoffersprice.vue")
      },
      {
        path: "/CallbackmsgMaster",
        component: () =>
          import("../pages/adminPages/callBackmsgMaster.vue")
      },
      {
        path: "/medicalloanlist",
        component: () =>
          import("../pages/adminPages/medicalloanlist.vue")
      },
      {
        path: "/mhbookings",
        component: () =>
          import("../pages/adminPages/mhbookings.vue")
      },
      {
        path: "/mhaccounts",
        component: () =>
          import("../pages/adminPages/mhaccounts.vue")
      },
      {
        path: "/cityManagerApproval",
        component: () =>
          import("../pages/adminPages/cityManagerApproval.vue")
      },
      {
        path: "/staffManagerApproval",
        component: () =>
          import("../pages/adminPages/staffManagerApproval.vue")
      },
        {
        path: "/mhcancellation",
        component: () =>
          import("../pages/adminPages/mhcancellation.vue")
      },
      {
        path: "/viewFieldVisits",
        component: () => import("../pages/adminPages/viewFieldVisits.vue")
      },

    ]
  },
  {
    path: "/staff",
    component: () => import("../layouts/staffLayout.vue"),
    children: [
      {
        path: "/staffDashboard",
        component: () => import("../pages/staffPages/staffDashboard.vue")
      },
      {
        path: "/verifyPartners",
        component: () => import("../pages/staffPages/verifyPartners.vue")
      },
      {
        path: "/fieldVisits",
        component: () => import("../pages/staffPages/fieldVisits.vue")
      },
      {
        path: "/staffAccBooking",
        component: () => import("../pages/staffPages/staffAccBooking.vue")
      },
      {
        path: "/staffAccommodation",
        component: () => import("../pages/staffPages/staffAccDashboard.vue")
      },
      {
        path: "/staffFoodView",
        component: () => import("../pages/staffPages/staffFoodDashboard.vue")
      },
      {
        path: "/staffEquipmentView",
        component: () => import("../pages/staffPages/staffEquipmentDashboard.vue")
      },
      {
        path: "/staffTravelView",
        component: () => import("../pages/staffPages/staffTravelDashboard.vue")
      },
      {
        path: "/travelpointscitywisemaster",
        component: () => import("../pages/adminPages/travelpointscitywisemaster.vue")
      },
      {
        path: "/newProperty",
        component: () => import("../pages/partnerPages/newProperty.vue")
      },
      {
        path: "/agentRegistration",
        component: () => import("../pages/partnerPages/agentRegistration.vue")
      },
      {
        path: "/agentFormAnotherPage",
        component: () => import("../pages/partnerPages/agentRegistrationForm.vue")
      },
      {
        path: "/propertyPartnerRegistration",
        component: () =>
          import("../pages/partnerPages/propertyPartnerRegistration.vue")
      },
      {
        path: "/foodPartnerReg",
        component: () =>
          import("../pages/partnerPages/foodPartnerRegistration.vue")
      },
      {
        path: "/transportPartnerReg",
        component: () =>
          import("../pages/partnerPages/transportPartnerRegistration.vue")
      },
      {
        path: "/equipmentPartnerReg",
        component: () =>
          import("../pages/partnerPages/equipmentPartnerRegistartion.vue")
      },
      {
        path: "/partnerApproval",
        component: () =>
          import("../pages/partnerPages/partnerRegistrationApproval.vue")
      },
      {
        path: "/roomsManagement",
        component: () => import("../pages/partnerPages/roomsManagement.vue")
      },
      {
        path: "/facilityTypeMaster",
        component: () => import("../pages/partnerPages/facilityTypeMaster.vue")
      },
      {
        path: "/propertyTypeMaster",
        component: () => import("../pages/partnerPages/propertyTypeMaster.vue")
      },
      {
        path: "/roomsTypeMaster",
        component: () => import("../pages/partnerPages/roomsTypeMaster.vue")
      },
      {
        path: "/accPartnerVisit",
        component: () => import("../pages/partnerPages/accPartnerVisit.vue")
      },
{
        path: "/hospitalPartnerVisit",
        component: () => import("../pages/partnerPages/hospitalPartnerVisit.vue")
      },
      {
        path: "/travelPartnerVisit",
        component: () => import("../pages/partnerPages/travelPartnerVisit.vue")
      },
      {
        path: "/foodPartnerVisit",
        component: () => import("../pages/partnerPages/foodPartnerVisit.vue")
      },
      {
        path: "/equipmentPartnerVisit",
        component: () => import("../pages/partnerPages/equipmentPartnerVisit.vue")
      },
      // {
      //   path: "/agentPartnerVisit",
      //   component: () => import("../pages/partnerPages/agentPartnerVisit.vue")
      // },
      {
        path: "/viewAccomadationPartnerData",
        component: () => import("../pages/partnerPages/viewAccomadationPartnerData.vue")
      },
{
        path: "/viewTravelPartnerData",
        component: () => import("../pages/partnerPages/viewTravelPartnerData.vue")
      },
      {
        path: "/viewHospitalPartnerData",
        component: () => import("../pages/partnerPages/viewHospitalPartnerData.vue")
      },
      {
        path: "/viewFoodPartnerData",
        component: () => import("../pages/partnerPages/viewFoodPartnerData.vue")
      },
      {
        path: "/viewEquipmentPartnerData",
        component: () => import("../pages/partnerPages/viewEquipmentPartnerData.vue")
      },
      // {
      //   path: "/viewAgentPartnerData",
      //   component: () => import("../pages/partnerPages/viewAgentPartnerData.vue")
      // },

    ]
  },
   {
    path: "/patner",
    component: () => import("../layouts/patnerLayout.vue"),
    children: [
      {
        path: "/partnerDashboard",
        component: () => import("../pages/partnerPages/partnerDashboard.vue")
      },
      {
        path: "/partnerOperations",
        component: () => import("../pages/partnerPages/partnerOperations.vue")
      },
      {
        path: "/partnerReports",
        component: () => import("../pages/partnerPages/partnerreports.vue")
      },
      {
        path: "/partnerBookings",
        component: () => import("../pages/partnerPages/partnerBookings.vue")
      },
       {
        path: "/mhcancellationforpartnerAcc",
        component: () => import("../pages/partnerPages/cancellationforpartnerAcc.vue")
      },
      {
        path: "/partnerFoodBookings",
        component: () => import("../pages/partnerPages/partnerFoodBookings.vue")
      },
      {
        path: "/partnerTravelBookings",
        component: () => import("../pages/partnerPages/partnerTravelBookings.vue")
      },
      {
        path: "/partnerMedicalBookings",
        component: () => import("../pages/partnerPages/partnerMedicalBookings.vue")
      },
      {
        path: "/partnerAccounts",
        component: () => import("../pages/partnerPages/partnerAccounts.vue")
      },
      {
        path: "/foodPartnerAccounts",
        component: () => import("../pages/partnerPages/foodPartnerAccounts.vue")
      },
      {
        path: "/travelPartnerAccounts",
        component: () => import("../pages/partnerPages/travelPartnerAccounts.vue")
      },
      {
        path: "/medicalPartnerAccounts",
        component: () => import("../pages/partnerPages/medicalPartnerAccounts.vue")
      },
      {
        path: "/agentAccounts",
        component: () => import("../pages/partnerPages/agentAccounts.vue")
      },
      {
        path: "/myProperties",
        component: () =>
          import("../pages/partnerPages/partnerAccomodation.vue")
      },
      {
        path: "/myFoodItems",
        component: () =>
          import("../pages/partnerPages/partnerFood.vue")
      },
      {
        path: "/foodPartnerPriceUpdate",
        component: () =>
          import("../pages/partnerPages/foodPartnerPriceUpdate.vue")
      },
      {
        path: "/myVehicles",
        component: () =>
          import("../pages/partnerPages/partnerTravel.vue")
      },
      {
        path: "/myEquipment",
        component: () =>
          import("../pages/partnerPages/partnerMedical.vue")
      }
    ]
  },
  {
    path: "/staff",
    component: () => import("../layouts/staffLayout.vue"),
    children: [
      {
        path: "/staffDashboard",
        component: () => import("../pages/staffPages/staffDashboard.vue")
      },
      {
        path: "/staffAccBooking",
        component: () => import("../pages/staffPages/staffAccBooking.vue")
      },
      {
        path: "/staffAccommodation",
        component: () => import("../pages/staffPages/staffAccDashboard.vue")
      },
      {
        path: "/staffFoodView",
        component: () => import("../pages/staffPages/staffFoodDashboard.vue")
      },
      {
        path: "/staffEquipmentView",
        component: () => import("../pages/staffPages/staffEquipmentDashboard.vue")
      },
      {
        path: "/staffTravelView",
        component: () => import("../pages/staffPages/staffTravelDashboard.vue")
      },
      {
        path: "/newProperty",
        component: () => import("../pages/partnerPages/newProperty.vue")
      },
      {
        path: "/propertyPartnerRegistration",
        component: () =>
          import("../pages/partnerPages/propertyPartnerRegistration.vue")
      },
      {
        path: "/partnerApproval",
        component: () =>
          import("../pages/partnerPages/partnerRegistrationApproval.vue")
      },
      {
        path: "/roomsManagement",
        component: () => import("../pages/partnerPages/roomsManagement.vue")
      },
      {
        path: "/facilityTypeMaster",
        component: () => import("../pages/partnerPages/facilityTypeMaster.vue")
      },
      {
        path: "/propertyTypeMaster",
        component: () => import("../pages/partnerPages/propertyTypeMaster.vue")
      },
      {
        path: "/roomsTypeMaster",
        component: () => import("../pages/partnerPages/roomsTypeMaster.vue")
      },
      {
        path: "/roomsTypeMaster",
        component: () => import("../pages/partnerPages/roomsTypeMaster.vue")
      },
    ]
  },
  {
    path: "/customer",
    component: () => import("../layouts/customerLayout.vue"),
    children: [
      {
        path: "/customer_account",
        component: () => import("../pages/customerPages/customerAccount.vue")
      },
      {
        path: "/customer_bookings",
        component: () => import("../pages/customerPages/customerBookings.vue")
      },
      {
        path: "/customer_paymentHistory",
        component: () =>
          import("../pages/customerPages/customerPaymentHistory.vue")
      },
      {
        path: "/customer_claims_refunds",
        component: () =>
          import("../pages/customerPages/customerClaimsRefunds.vue")
      },
      {
        path: "/customer_make_extend",
        component: () => import("../pages/customerPages/customerMakeExtend.vue")
      },
      {
        path: "/customer_book_cab_med_eq",
        component: () =>
          import("../pages/customerPages/customerBookCabMedEq.vue")
      },
    ]
  },
  {
    path: "/healthSupport",
    component: () => import("../pages/customerPages/healthSupport.vue")
  },
  {
    path: "/agent",
    component: () => import("../layouts/agentLayout.vue"),
    children: [
      {
        path: "/agent_Dashboard",
        component: () => import("../pages/agentPages/agentDashboard.vue")
      },
      {
        path: "/agent_account",
        component: () => import("../pages/agentPages/agentAccount.vue")
      },
      {
        path: "/agent_bookings",
        component: () => import("../pages/agentPages/agentBookings.vue")
      },
      {
        path: "/agent_book_cab_med_eq",
        component: () =>
          import("../pages/agentPages/agentBookCabMedEq.vue")
      }
    ]
  },
  {
    path: "/coustmerSignup",
    component: () =>
      import("../pages/registrationPages/customerRegistration.vue")
  },
  {
    path: "/patnerSignup",
    component: () => import("../pages/registrationPages/patnerSignup.vue")
  },
  // {
  //   path: "/",
  //   component: () => import("layouts/MH.vue"),
  //   children: [{ path: "", component: () => import("pages/Index.vue") }]
  {
    path: "/mhGenieHome",
    component: () => import("../pages/mhGeniePages/mhGenieHome.vue")
  },
  {
    path: "/ChatBot",
    component: () => import("../pages/mhGeniePages/ChatBot.vue")
  },
  {
    path: "/mhGenieUserDashboard",
    component: () => import("../pages/mhGeniePages/mhGenieUserDashboard.vue")
  },
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
