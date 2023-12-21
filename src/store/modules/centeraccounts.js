import { api } from "boot/axios";
import moment from 'moment';
const state = () => ({
center_accounts_bookings_rows: [],
center_accounts_bookings_columns: [
    {
    name:"index",
    align: "center",
    label: "Sno",
    field: "index",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name: "actions",
    label: "View",
    field: "actions",
    headerClasses: "bg-indigo-10 text-white",
    align: "center",
  },
  {
    name:"property_name",
    align: "center",
    label: "Property Name",
    field: "property_name",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"booked_date",
    align: "center",
    label: "Booked Date",
    field: "booked_date",

    sortable: "desc",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }

  },
  {
    name:"booking_order_id",
    align: "center",
    label: "Booking ID",
    field: "booking_order_id",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"check_in",
    align: "center",
    label: "Check-In Date",
    field: "check_in",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"check_out",
    align: "center",
    label: "Check-Out Date",
    field: "check_out",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"no_of_days",
    align: "center",
    label: "Booked Days",
    field: "no_of_days",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
    {
      name:"account_id",
      align: "center",
      label: "Property ID",
      field: "account_id",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Partner GST No",
      field: "property_gstin",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
  {
    name: "guest_name",
    align: "center",
    label: "Guest Name",
    sortable: true,
    field: "guest_name",

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"room_type",
    align: "center",
    label: "Room Category",
    field: "room_type",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"room_price",
    align: "center",
    label: "Rate",
    field: "room_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"partner_offer_percentage",
    align: "center",
    label: "MH Offering%",
    field: "partner_offer_percentage",

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"partner_offer",
    align: "center",
    label: "MH Offer Amount",
    field: "partner_offer",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"partner_offer_percentage",
    align: "center",
    label: "Ap Offer in %",
    field: "discount",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }

  },
  {
    name:"discount_price",
    align: "center",
    label: "Ap Offer Amount",
    field: "discount_price",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"price_after_discount",
    align: "center",
    label: "Booking Amount Before Tax",
    field: "price_after_discount",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"gst_amount",
    align: "center",
    label: "Tax",
    field: "gst_amount",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"total_price",
    align: "center",
    label: "Booking Amount After tax",
    field: "total_price",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"dateOfCancellationData",
    align: "center",
    label: "Date of cancellation",
    sortable: true,
    field: "dateOfCancellationData",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"daysDifference",
    align: "center",
    label: "Cancelled before check in date in no.of days",
    field: "daysDifference",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {

    align: "center",
    label: "Date of Refund to Guest",
    field: "dateOfCancellationData",

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"cancelledAmountData",
    align: "center",
    label: "Amount Refunded to Guest",
    field: "cancelledAmountData",
    sortable: true,

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"partnerRefund",
    align: "center",
    label: "Gross Amount payable to Partner for cancelled booking",
    field: "partnerRefund",
    sortable: true,

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"check_in",
    align: "center",
    label: "Check in Date",
    field: "check_in",
    sortable: true,


    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"check_out",
    align: "center",
    label: "Check Out Date",
    field: "check_out",
    sortable: true,

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"durationOfStay",
    align: "center",
    label: "Duration Of stay",
    field: "durationOfStay",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"room_price",
    align: "center",
    label: "Gross Amount",
    field: "room_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"partner_offer",
    align: "center",
    label: "EB Offer",
    field: "partner_offer",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"mh_offer_price",
    align: "center",
    label: "Discount MH",
    field: "mh_offer_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"discount_price",
    align: "center",
    label: "Discount Partner",
    field: "discount_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"netValue",
    align: "center",
    label: "Net Value",
    field: "netValue",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"gst_amount",
    align: "center",
    label: "Tax",
    field: "gst_amount",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"total_price",
    align: "center",
    label: "Total Bill",
    field: "total_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"tdsValue",
    align: "center",
    label: "TDS@1%",
    field: "tdsValue",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"tdsValue",
    align: "center",
    label: "GST TCS @1%",
    field: "tdsValue",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"grossPayable",
    align: "center",
    label: "Gross payable to partners",
    field: "grossPayable",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"mhCommissionRounded",
    align: "center",
    label: "MH Commission in % including GST",
    field: "mhCommissionRounded",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"totalPayableToPartner",
    align: "center",
    label: "Net Payable to Partner",
    field: "totalPayableToPartner",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },


],
  master_reports:[],
  master_reports_columns: [
    {
      align: "center",
      label: "Sl No",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "inserted_date_time",
      label: "Date of Booking",
      field: "inserted_date_time",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "booking_order_id",
      label: "Booking ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "check_in",
      label: "Booking From Date",
      field: "check_in",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "check_out",
      label: "Booking To Date",
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Number of days booked",
      field: "no_of_days",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Property ID",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Partner GST No.",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Guest Name",
      field: row => row.guestData[0].guest_name,
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Category",
      field: row => row.propertyRoomDetails[0].room_category,
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Rate",
      field: "room_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "discount",
    //   label: "MH Offer In %",
    //   field: "discount",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "center",
      label: "MH Offer Amount",
      field: "mh_offer_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "AP Offer in %",
      field: "discount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "AP Offer Amount",
      field: "discount_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Amount Before Tax",
      field: "price_after_discount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Amount After tax",
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Date of Cancellation",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Cancelled before check in Date in no. of Days",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Date of Refund to Guest",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Amount Refunded to Guest",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Gross Amount payable to Partner for cancelled booking",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "check_in",
      label: "Date of Check in",
      field: "check_in",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "check_out",
      label: "Date of Check Out",
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "no_of_days",
      label: "Duration of Stay",
      field: "no_of_days",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Gross Amount",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Discount-MH",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Discount-Partner",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Net Value",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Tax",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Total Bill",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "GST TCS @1%",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Gross Payable to Partners",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "MH Commission  including GST",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Net Payable to Partner",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
  ],
  admin_masterreports_foodbooking: [],
  admin_masterreports_medicalbooking: [],
  admin_masterreports_travelbooking: [],
  admin_master_reports:[],
  admin_master_reports_columns: [
    {
      align: "center",
      label: "Sl No",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "inserted_date_time",
      label: "Date of Booking",
      field: "inserted_date_time",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "booking_order_id",
      label: "Booking ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "check_in",
      label: "Booking From Date",
      field: "check_in",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "check_out",
      label: "Booking To Date",
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Number of days booked",
      field: "no_of_days",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Property ID",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Partner GST No.",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Guest Name",
      field: row => row.guestData[0].guest_name,
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Number",
      field: row => row.propertyRoomDetails[0].room_numbers,
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Category",
      field: row => row.propertyRoomDetails[0].room_category,
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Rate",
      field: "room_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "discount",
    //   label: "MH Offer In %",
    //   field: "discount",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "center",
      label: "MH Offer Amount",
      field: "mh_offer_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "AP Offer in %",
      field: "discount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "AP Offer Amount",
      field: "discount_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Amount Before Tax",
      field: "price_after_discount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Amount After tax",
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Date of Cancellation",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Cancelled before check in Date in no. of Days",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Date of Refund to Guest",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Amount Refunded to Guest",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Gross Amount payable to Partner for cancelled booking",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "check_in",
      label: "Date of Check in",
      field: "check_in",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "check_out",
      label: "Date of Check Out",
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "no_of_days",
      label: "Duration of Stay",
      field: "no_of_days",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Gross Amount",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Discount-MH",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Discount-Partner",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Net Value",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Tax",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Total Bill",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "GST TCS @1%",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Gross Payable to Partners",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "MH Commission  including GST",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "property_type",
      label: "Net Payable to Partner",
      field: "",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
  ],


  property_master_reports:[],
  properties_reports_columns:[
    {
      align: "center",
      label: "Sl No",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Property City",
      field: "city_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Property Name",
      field: "property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
        align: "center",
        label: "Partner Id",
        field: "partnerid",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Partner Name",
        field: "partner_name",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Partner Phone",
        field: "partner_phone",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      // {
      //   align: "center",
      //   label: "Address",
      //   field: "address",
      //   headerClasses: "bg-indigo-10 text-white",
      //   headerStyle: {
      //     fontWeight: "bold"
      //   }
      // },
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
        label: "Property Email",
        field: "property_email",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
  ],
  property_wise_master_reports:[],
  properties_wise_reports_columns:[
    {
      name:"sno",
      align: "center",
      label: "Sl No",
      field: "sno",
      sortable:true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      align: "center",
      label: "Property Name",
      field: "property_name",
      sortable:true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Bookings",
      field: "total_bookings",
      sortable:true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
        align: "center",
        label: "Total Nights",
        sortable:true,
        field: "total_nights",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Total Guests",
        field: "total_guests",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      // {
      //   align: "center",
      //   label: "GSTIN Number of Partner",
      //   field: "property_state_name",
      //   headerClasses: "bg-indigo-10 text-white",
      //   headerStyle: {
      //     fontWeight: "bold"
      //   }
      // },
      {
        align: "center",
        label: "Total Rooms",
        field: "total_rooms",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Booking Amount",
        field: "booking_amount",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },


      {
        align: "center",
        label: "AOV",
        field: "avg_booking_amount",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },

      {
        align: "center",
        label: "ARN",
        field: "avg_booking_nightvalue",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },

  ],


  property_months_wise_master_reports:[],
  properties_months_wise_reports_columns:[
    {
      name:"sno",
      align: "center",
      label: "Sl No",
      field: "sno",
      sortable:true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      align: "center",
      label: "Month Name",
      field: "month_name",
      sortable:true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Property Name",
      field: "property_name",
      sortable:true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
        align: "center",
        label: "Total Bookings",
        field: "total_bookings",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Total Nights",
        field: "total_nights",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },

      {
        align: "center",
        label: "Total Guests",
        field: "total_guests",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Total Rooms",
        field: "total_rooms",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Booking Amount",
        field: "booking_amount",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },



      {
        align: "center",
        label: "AOV",
        field: "avg_booking_amount",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },

      {
        align: "center",
        label: "ARN",
        field: "avg_booking_nightvalue",
        sortable:true,
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },

  ],
  food_master_reports:[],
  food_master_columns:[
    {
      align: "center",
      label: "Sl No",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Kitchen Type",
      field: "type_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Name of kitchen",
      field: "name_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
        align: "center",
        label: "Opening Time",
        field: "opening_time",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Closing Time",
        field: "closing_time",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "FSSAI Number of Partner",
        field: "fssai_no",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Name of Contact Person",
        field: "Name_Of_Contact_Person",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Phone Number",
        field: "restaurant_phone",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Mail ID",
        field: "restaurant_email",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
  ],
  travel_master_reports:[],
  travel_master_columns:[
    {
      align: "center",
      label: "Sl No",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Transport Company Name",
      field: "transport_company_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
      {
        align: "center",
        label: "Name of Contact Person",
        field: "Name_Of_Contact_Person",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Phone Number",
        field: "transport_phone",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Mail ID",
        field: "transport_email_id",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
  ],
  medical_master_reports:[],
  medical_master_columns:[
    {
      align: "center",
      label: "Sl No",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Medical Store Name",
      field: "medical_store_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Opening Time",
      field: "opening_time",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Closing Time",
      field: "closing_time",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
      {
        align: "center",
        label: "Name of Contact Person",
        field: "name_of_contact_person",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Phone Number",
        field: "phone",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Mail ID",
        field: "email",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
  ],

  center_date_wise_accounts_bookings_rows: [],
  center_date_wise_accounts_bookings_columns: [
    {
      name:"index",
      align: "center",
      label: "Sno",
      field: "index",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
    },
    {
      name:"property_name",
      align: "center",
      label: "Property Name",
      field: "property_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"booked_date",
      align: "center",
      label: "Booked Date",
      field: "booked_date",

      sortable: "desc",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }

    },
    {
      name:"booking_order_id",
      align: "center",
      label: "Booking ID",
      field: "booking_order_id",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"check_in",
      align: "center",
      label: "Booking From Date",
      field: "check_in",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"check_out",
      align: "center",
      label: "Booking To Date",
      field: "check_out",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"no_of_days",
      align: "center",
      label: "number of days booked",
      field: "no_of_days",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"account_id",
      align: "center",
      label: "Property ID",
      field: "account_id",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Partner GST No",
      field: "gst_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
  {
    name: "guest_name",
    align: "center",
    label: "Guest Name",
    sortable: true,
    field: "guest_name",

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"room_type",
    align: "center",
    label: "Room Category",
    field: "room_type",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"room_price",
    align: "center",
    label: "Rate",
    field: "room_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"discount",
    align: "center",
    label: "MH Offering%",
    field: "discount",

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"discount_price",
    align: "center",
    label: "MH Offer Amount",
    field: "discount_price",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"partner_offer_percentage",
    align: "center",
    label: "Ap Offer in %",
    field: "partner_offer_percentage",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }

  },
  {
    name:"partner_offer",
    align: "center",
    label: "Ap Offer Amount",
    field: "partner_offer",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"price_after_discount",
    align: "center",
    label: "Booking Amount Before Tax",
    field: "price_after_discount",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"gst_amount",
    align: "center",
    label: "Tax",
    field: "gst_amount",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"total_price",
    align: "center",
    label: "Booking Amount After tax",
    field: "total_price",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"dateOfCancellationData",
    align: "center",
    label: "Date of cancellation",
    sortable: true,
    field: "dateOfCancellationData",
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"daysDifference",
    align: "center",
    label: "Cancelled before check in date in no.of days",
    field: "daysDifference",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {

    align: "center",
    label: "Date of Refund to Guest",
    field: "dateOfCancellationData",

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"cancelledAmountData",
    align: "center",
    label: "Amount Refunded to Guest",
    field: "cancelledAmountData",
    sortable: true,

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"partnerRefund",
    align: "center",
    label: "Gross Amount payable to Partner for cancelled booking",
    field: "partnerRefund",
    sortable: true,

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"check_in",
    align: "center",
    label: "Check in Date",
    field: "check_in",
    sortable: true,


    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"check_out",
    align: "center",
    label: "Check Out Date",
    field: "check_out",
    sortable: true,

    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"durationOfStay",
    align: "center",
    label: "Duration Of stay",
    field: "durationOfStay",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"room_price",
    align: "center",
    label: "Gross Amount",
    field: "room_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"discount_price",
    align: "center",
    label: "EB Offer",
    field: "discount_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"mh_offer_price",
    align: "center",
    label: "Discount MH",
    field: "mh_offer_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"partner_offer",
    align: "center",
    label: "Discount Partner",
    field: "partner_offer",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"netValue",
    align: "center",
    label: "Net Value",
    field: "netValue",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"gst_amount",
    align: "center",
    label: "Tax",
    field: "gst_amount",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"total_price",
    align: "center",
    label: "Total Bill",
    field: "total_price",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"tdsValue",
    align: "center",
    label: "TDS@1%",
    field: "tdsValue",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  {
    name:"gstTds",
    align: "center",
    label: "GST TCS @1%",
    field: "gstTds",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"grossPayable",
    align: "center",
    label: "Gross payable to partners",
    field: "grossPayable",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"mhCommissionRounded",
    align: "center",
    label: "MH Commission in % including GST",
    field: "mhCommissionRounded",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },

  {
    name:"totalPayableToPartner",
    align: "center",
    label: "Net Payable to Partner",
    field: "totalPayableToPartner",
    sortable: true,
    headerClasses: "bg-indigo-10 text-white",
    headerStyle: {
      fontWeight: "bold"
    }
  },
  ],
  loadcity_from_booking:[],
  property_arr_baseded_on_city:[],



});
const getters = {
center_accounts_bookings_rows: state => state.center_accounts_bookings_rows,
master_reports: state =>state.master_reports,
property_master_reports:state =>state.property_master_reports,
property_wise_master_reports:state =>state.property_wise_master_reports,
property_months_wise_master_reports:state =>state.property_months_wise_master_reports,



food_master_reports:state=> state.food_master_reports,
travel_master_reports:state=> state.travel_master_reports,
medical_master_reports:state=>state.medical_master_reports,
center_date_wise_accounts_bookings_rows: state => state.center_date_wise_accounts_bookings_rows,
property_arr_baseded_on_city: state => state.property_arr_baseded_on_city,


};
const actions = {
     // change method//
  bookingDataForAccounts({ commit, dispatch},payload) {
  //  console.log("payload",payload);
            dispatch("alerts_loaders/startLoading", "", { root: true });
            setTimeout(() => {
              dispatch("alerts_loaders/stopLoading", "", { root: true });
              api
                .get(`/centeraccounts/BookingDataTable/${payload}`)
                .then(response => {
                  let rows = response.data;
                  commit("SET_BOOKING_ACCOUNT_DATA", rows);
                  //  console.log("accountrows",rows);
                })
                .catch(error => {
                  dispatch(
                    "alerts_loaders/showAlert",
                    {
                      msg:
                        "Error While Loading Booking Registration Master Data",
                      type: "negative"
                    },
                    { root: true }
                  );
                });
            }, 1500);
          },
      masterreportsdetails({ commit, dispatch }) {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/masterreportsdetails/${user.account_id}`)
            .then(response => {
              let rows = response.data;
              commit("SET_MASTER_REPORTS",rows);
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Registration Master Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },
      adminreportsdetails({ commit, dispatch }) {

        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/getAdminreportsdetails`)
            .then(response => {
              let rows = response.data;
           //  console.log("Acc.data",response.data)
              commit("SET_ADMIN_MASTER_REPORTS",rows);
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Registration Master Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },


      adminreportsForTravelBooking({ commit, dispatch }) {

        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/getAdminreportsForTravelBooking`)
            .then(response => {
              let rows = response.data;
           //  console.log("travel.data",response.data)
              commit("SET_ADMIN_MASTER_REPORTS_TRAVELBOOKING",rows);
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Travel Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },
      adminreportsForMedicalBooking({ commit, dispatch }) {

        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/getAdminreportsForMedicalBooking`)
            .then(response => {
              let rows = response.data;
           //  console.log("medical.data",response.data)
              commit("SET_ADMIN_MASTER_REPORTS_MEDICALBOOKING",rows);
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Medical Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },


      adminreportsForFoodBooking({ commit, dispatch }) {

        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/getAdminreportsForFoodBooking`)
            .then(response => {
              let rows = response.data;
           //  console.log("food.data",response.data)
              commit("SET_ADMIN_MASTER_REPORTS_FOODBOOKING",rows);
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Food Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },
      propertyreportsdetails({ commit, dispatch }) {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/propertyreportsdetails`)
            .then(response => {
              let rows = response.data;
              commit("SET_PROPERTY_MASTER_REPORTS",rows);
              // console.log("property",rows)
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Registration Master Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },


      propertyWisereportsdetails({ commit, dispatch }) {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/propertywisereportsdetails`)
            .then(response => {
              let rows = response.data;
              commit("SET_PROPERTY_WISE_MASTER_REPORTS",rows);
             // console.log("reportbooking",rows)
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking  Master Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },



      propertyMonthsWisereportsdetails({ commit, dispatch }) {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/propertymonthswisereportsdetails`)
            .then(response => {
              let rows = response.data;
              commit("SET_PROPERTY_MONTH_WISE_MASTER_REPORTS",rows);
              // console.log("reportbooking",rows)
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Months  Master Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },




      foodreportmethod({ commit, dispatch }) {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/foodreportmethod/${user.account_id}`)
            .then(response => {
              let rows = response.data;
              commit("SET_FOOD_MASTER_REPORTS",rows);
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Registration Master Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },

      travelreportmethod({ commit, dispatch }) {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/travelreportmethod/${user.account_id}`)
            .then(response => {
              let rows = response.data;
              commit("SET_TRL_MASTER_REPORTS",rows);
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Registration Master Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },
      medicalreportmethod({ commit, dispatch }) {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .get(`/centeraccounts/medicalreportmethod/${user.account_id}`)
            .then(response => {
              let rows = response.data;
              commit("SET_MED_MASTER_REPORTS",rows);
            })
            .catch(error => {
              dispatch(
                "alerts_loaders/showAlert",
                {
                  msg:
                    "Error While Loading Booking Registration Master Data",
                  type: "negative"
                },
                { root: true }
              );
            });
        }, 1500);
      },


    getDateWiseAccountsDatails({ commit, dispatch},payload) {
      //  console.log("payload",payload);

       if (typeof payload.txn_id == "undefined") {
        payload.txn_id = "ALL";

        // console.log("Inside if block - payload1", payload.txn_id);
      } else {
        // console.log("payload2", payload);
      }

      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(`/centeraccounts/getDateWiseAccountsDatails`,{
            params: {
              fromDate: payload.fromDate,
              toDate: payload.toDate,
              txn_id: payload.txn_id,
              property_city_id:payload.property_city_name.property_city_id,
            }
          })
          .then(response => {
            let rows = response.data;
            commit("SET_DATEWISE_BOOKING_ACCOUNT_DATA", rows);
            // console.log("rows",rows);
          })
          .catch(error => {
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: "Error While Loading Booking Registration Master Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },
    loadBookingAllCity({ commit }) {
      api
        .get(`/centeraccounts/getBookingAllCity`)
        .then(response => {
          let rows = response.data;
          commit("SET_LOADCITY_FROM_BOOKING", rows);
          // console.log("rescityofbook",rows);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadAllPropertBasedOnCities({ commit }, payload) {
      // console.log("payload",payload)
      api
        .get(`/centeraccounts/${payload.property_city_id}`)
        .then(response => {
          commit("SET_ALL_PROPERTY_CITIES", response.data);
          // console.log("ssss",response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },

};
const mutations = {
    SET_BOOKING_ACCOUNT_DATA(state, rows) {
        state.center_accounts_bookings_rows = rows.data;
      },
      SET_MASTER_REPORTS(state,rows) {
        state.master_reports =rows.data;
      },
      SET_ADMIN_MASTER_REPORTS(state,rows) {
        state.admin_master_reports =rows.data;
      },
      SET_ADMIN_MASTER_REPORTS_TRAVELBOOKING(state,rows) {
        state.admin_masterreports_travelbooking =rows.data;
      },
      SET_ADMIN_MASTER_REPORTS_MEDICALBOOKING(state,rows) {
        state.admin_masterreports_medicalbooking =rows.data;
      },
      SET_ADMIN_MASTER_REPORTS_FOODBOOKING(state,rows) {
        state.admin_masterreports_foodbooking =rows.data;
      },

      SET_PROPERTY_MASTER_REPORTS(state,rows) {
        state.property_master_reports =rows.data;
      },

      SET_PROPERTY_WISE_MASTER_REPORTS(state,rows) {
        state.property_wise_master_reports =rows.data;
      },

      SET_PROPERTY_MONTH_WISE_MASTER_REPORTS(state,rows) {
        state.property_months_wise_master_reports =rows.data;
      },
      SET_FOOD_MASTER_REPORTS(state, rows) {
        state.food_master_reports =rows.data;
      },
      SET_TRL_MASTER_REPORTS(state, rows){
        state.travel_master_reports =rows.data;
      },
      SET_MED_MASTER_REPORTS(state, rows){
        state.medical_master_reports =rows.data;
      },
      SET_DATEWISE_BOOKING_ACCOUNT_DATA(state, rows) {
        state.center_date_wise_accounts_bookings_rows = rows.data;
      },

      SET_LOADCITY_FROM_BOOKING(state, rows) {
        state.loadcity_from_booking = rows.data;
      },
      SET_ALL_PROPERTY_CITIES(state, payload) {
        state.property_arr_baseded_on_city = payload.data;
      },

};
export const centeraccounts = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
