import { api } from "boot/axios";
import moment from 'moment';
const state = () => ({
  searchDetails: {},
  hotelDetails: {},
  mrs_hotel_info:{},
  hotelInfo_arr: {},
  hotel_arr_forcart:{},
  accBooking_details: [],
  selected_property_name: "",
  selected_property_type: "",
  selected_room_type: "",
  selected_property_min_price: "",
  hotel_image_1: "",
  description: "",
  rating: "",
  account_id: "",
  partner_id: "",
  partner_sub_id: "",
  Property_id: "",
  room_txn_id: "",
  getMangohomzOffer_arr: [],
  acc_guest_booked_data: [],
  mangohomzOffers_arr: [],
  eqp_guest_booked_data: [],
  food_print_val_arr: [],
  partner_bookings_rows: [],
  revenue_bookings_rows:[],
  food_guest_booked_data: [],
  travel_guest_booked_data: [],
  eqp_guest_booked_data: [],
  mh_acc_data: [],
  mh_print_data:[],
  accdetails_arr:[],
  food_cnfrm_booking_data: [],
  mh_acc_booked_data: [],
  partner_bookings_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Hotel Name",
      field: "property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Hotel Type",
      field: "property_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Type",
      field: "room_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "City",
      field: "property_city_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Near Hospital",
      field: "near_hospital_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Check In",
      field: "check_in",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Check Out",
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Amount",
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  partner_accounts_bookings_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Charges",
      field: "room_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Discount (%)",
      field: "discount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Discount Price",
      field: "discount_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "MH offer Price",
      field: "mh_offer_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Taxes (%)",
      field: "gst_percentage",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "GST Amount",
      field: "gst_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Net Amount",
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  aarthilabs_data_rows: [],
  aarthilabs_data_columns:[
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
      label: "View",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "booked_date",
      align: "left",
      label: "Booked Date",
      field: "booked_date",
      headerClasses: "bg-primary text-white",
      sortable: true

    },
    {
      name: "customer_name",
      align: "left",
      label: "Customer Name",
      field: "customer_name",
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
      name: "email_id",
      align: "left",
      label: "Email Id",
      field: "email_id",
      headerClasses: "bg-primary text-white",
      sortable: true

    },
    {
      name: "customer_age",
      align: "left",
      label: "Age",
      field: "customer_age",
      headerClasses: "bg-primary text-white",
      sortable: true

    },
    {
      name: "gender",
      align: "left",
      label: "Gender",
      field: "gender",
      headerClasses: "bg-primary text-white",
      sortable: true

    },
    {
      name: "city_name",
      align: "left",
      label: "City",
      field: "city_name",
      headerClasses: "bg-primary text-white",
      sortable: true

    },
    {
      name: "aarthi_center_name",
      align: "left",
      label: "Center Name",
      field: "aarthi_center_name",
      headerClasses: "bg-primary text-white",
      sortable: true

    },
    {
      name: "test_date",
      align: "left",
      label: "Test Date",
      field: "test_date",
      headerClasses: "bg-primary text-white",
      sortable: true

    },
    // {

    //   align: "left",
    //   label: "Test Type",
    //   field: row => row.testtype[0].test_type
    //   ,
    //   format: val => `${val}`,
    //   headerClasses: "bg-primary text-white",

    // },
    // {

    //   align: "left",
    //   label: "Test Name",
    //   field: row => row.testname[0].test_name
    //   ,
    //   format: val => `${val}`,
    //   headerClasses: "bg-primary text-white",

    // },
  ],
  guest_book_columns: [
    {
      align: "center",
      label: "Sr.No.",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking ID",
      field: "mh_booking_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "center",
    //   label: "Guest Status",
    //   field: "guest_gender",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "center",
      label: "Guest Name",
      field: "guest_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Guest Type",
      field: "guest_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  city_bookings_rows: [],
  staff_bookings_rows: [],
  booking_order_data: [],
  bookingId_arr: [],
  admin_bookings_rows: [],
  foodPartner_bkng_rows: [],
  food_partner_account_bkng_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "s_no",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Booking ID",
      field: "food_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Invoice Number",
      field: "invoice_number",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price",
      field: "food_charges",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Discount Price",
      field: "mh_offer_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Taxes (%)",
      field: "gst_percentage",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "CGST Price",
      field: "cgst_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "SGST Price",
      field: "sgst_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Net Amount",
      field: "final_price_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  foodPartner_bkng_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "s_no",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Booking ID",
      field: "food_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Date of Booking",
      field: "food_booking_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Type",
      field: "food_booking_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Item Count",
      field: "total_item_qty",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "center",
    //   label: "Total Quantity",
    //   field: "total_qty_booked",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "center",
      label: "Total Amount",
      field: "final_price_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  foodItem_bkng_columns: [
    {
      align: "center",
      label: "S.No.",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Kitchen Name",
      field: "kitchen_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Kitchen Type",
      field: "kitchen_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Item name",
      field: "selected_food_item",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Item Quantity",
      field: "item_quantity",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price (for 1qty)",
      field: "item_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View Food Image",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  medicalPartner_bkng_rows: [],
  medical_partner_account_bkng_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "s_no",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Equipment Booking ID",
      field: "medical_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Invoice Number",
      field: "invoice_number",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price",
      field: "medical_charges",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Discount Price",
      field: "mh_offer_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Taxes (%)",
      field: "gst_percentage",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "CGST Price",
      field: "cgst_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "SGST Price",
      field: "sgst_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Net Amount",
      field: "final_price_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  medicalPartner_bkng_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "s_no",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Medical Booking ID",
      field: "medical_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Date of Booking",
      field: "eqp_booking_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Type",
      field: "eqp_booking_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Medical Item Count",
      field: "total_item_qty",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Amount",
      field: "final_price_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  medicalItem_bkng_columns: [
    {
      align: "center",
      label: "S.No.",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Medical Store",
      field: "medical_store",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Equipment Item name",
      field: "item_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Item Quantity",
      field: "item_quantity",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price (for 1qty)",
      field: "item_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View Equipment Image",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  travelPartner_bkng_rows: [],
  travel_partner_account_bkng_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "s_no",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Travel Booking ID",
      field: "travel_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Invoice Number",
      field: "invoice_number",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price",
      field: "travel_charges",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Discount Price",
      field: "mh_offer_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Taxes (%)",
      field: "gst_percentage",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "CGST Price",
      field: "cgst_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "SGST Price",
      field: "sgst_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Net Amount",
      field: "payable_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  travelPartner_bkng_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "s_no",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Travel Booking ID",
      field: "travel_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Date of Booking",
      field: "booked_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Origin",
      field: "booking_origin",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Destination",
      field: "booking_destination",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Time",
      field: "booking_time",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Amount",
      field: "payable_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  travelItem_bkng_columns: [
    {
      align: "center",
      label: "S.No.",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "vehicle Name",
      field: "vehicle_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Units",
      field: "units",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "No. of Seaters",
      field: "no_of_seaters",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price (for 1qty)",
      field: "price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View Transport Image",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  guest_food_items_book_columns: [
    {
      align: "center",
      label: "Sr.No.",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking ID",
      field: "food_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Kitchen Name",
      field: "kitchen_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Kitchen Type",
      field: "kitchen_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Item",
      field: "food_items_list",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Item Qty",
      field: "item_quantity",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Item Price",
      field: "item_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Image View",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  guest_equipment_items_book_columns: [
    {
      align: "center",
      label: "Sr.No.",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking ID",
      field: "medical_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Medical Store",
      field: "medical_store",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Equipment Item",
      field: "item_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Units",
      field: "units",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Item Qty",
      field: "item_quantity",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Item Price",
      field: "item_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Image View",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  guest_travel_items_book_columns: [
    {
      align: "center",
      label: "Sr.No.",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking ID",
      field: "travel_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Vehicle Name",
      field: "vehicle_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "No.of Seaters",
      field: "no_of_seaters",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Image View",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  admin_bookings_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
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
      sortable: true,
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

      align: "center",
      label: "Guest Name",

      field: row => {
        if (row.guestData && row.guestData.length > 0 && row.guestData[0].first_name) {
          return row.guestData[0].first_name;
        }
        return "";
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"property_city_name",
      align: "center",
      label: "City",
      sortable: true,
      field: "property_city_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
      {
      name:"near_hospital_name",
      align: "center",
      label: "Near Hospital",
      field: "near_hospital_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"

      },
      cellStyle: {
        wordWrap: "break-word",
        maxWidth: "150px",
      }
    },
    {
      name:"property_name",
      align: "center",
      label: "Hotel Name",
      sortable: true,
      field: "property_name",
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
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"formattedcheck_in",
      align: "center",
      label: "Check In",
      field: "formattedcheck_in",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"formattedcheck_out",
      align: "center",
      label: "Check Out",
      field: "formattedcheck_out",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
      {
        name:"no_of_days",
      align: "center",
      label: "Nights",
      field: "no_of_days",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
      {
        name:"room_booked_count",
      align: "center",
      label: "Rooms",
      sortable: true,
      field: "room_booked_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name:"roomNights_count",
      align: "center",
      label: "Room Nights",
      sortable: true,
      field: "roomNights_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
     {
      name:"guest_count",
      align: "center",
      label: "Guests",
      sortable: true,
      field: "guest_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name:"mh_commission",
      align: "center",
      label: "MH Commission",
      field: "mh_commission",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },


    {
      name:"partner_share",
      align: "center",
      label: "Partner Share",
      field: "partner_share",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },


    {
      name:"total_price",
      align: "center",
      label: "Amount",
      sortable: true,
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  admin_Travelbookings_columns:[
    {
      align: "center",
      label: "Sr.no",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   name: "actions",
    //   label: "View",
    //   field: "actions",
    //   headerClasses: "bg-indigo-10 text-white",
    //   align: "center",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "center",
      label: "Booking ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Guest Name",
      field: row => {
        if (row.guestData && row.guestData.length > 0 && row.guestData[0].first_name) {
          return row.guestData[0].first_name;
        }
        return "";
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "City",
      field: "property_city_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
      {
      align: "center",
      label: "Near Hospital",
      field: "near_hospital_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"

      },
      cellStyle: {
        wordWrap: "break-word",
        maxWidth: "150px",
      }
    },
    {
      align: "center",
      label: "Travel Name",
      field: "travel_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Origin",
      field: "booking_origin",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Destination",
      field: "booking_destination",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
   {
      align: "center",
      label: "Booked Date",
      field: "booked_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Check In",
      field: "check_in",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Check Out",
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    //   {
    //   align: "center",
    //   label: "Nights",
    //   field: "no_of_days",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    //   {
    //   align: "center",
    //   label: "Rooms",
    //   field: "room_booked_count",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
     {
      align: "center",
      label: "Guests",
      field: "guest_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Amount",
      field: "payable_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  guest_food_book_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Booking ID",
      field: "food_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Hotel Name",
      field: "hotel_property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Near Hospital",
      field: "near_hospital_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "City",
      field: "booking_city",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Mobile Number",
      field: "mobile_number",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Date",
      field: "food_booking_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "center",
    //   label: "Food Type",
    //   field: "food_booking_type",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "center",
      label: "Total Amount",
      field: "final_price_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  guest_equipment_book_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "medical_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Hotel Name",
      field: "hotel_property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Near Hospital",
      field: "near_hospital_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "City",
      field: "booking_city",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Mobile Number",
      field: "mobile_number",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Date",
      field: "eqp_booking_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Check Out",
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Amount",
      field: "final_price_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  guest_travel_book_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "travel_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Origin",
      field: "booking_origin",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Desination",
      field: "booking_destination",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Near Hospital",
      field: "near_hospital_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "City",
      field: "property_city_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Date",
      field: "booked_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Time",
      field: "booking_time",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Amount",
      field: "payable_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  foodPartner_bkng_accounts_rows: [],
  medicalPartner_bkng_account_rows: [],
  travelPartner_bkng_account_rows: [],
  partner_bookings_account_rows: [],
  travel_dashboard_booked_data: [],
  food_dashboard_booked_data:[],
  medical_dashboard_booked_data:[],
  dashboard_booking_data:[],
  dashboard_booking_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "sno",
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
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Hotel Name",
      field: "property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Hotel Type",
      field: "property_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Type",
      field: "room_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "City",
      field: "property_city_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Near Hospital",
      field: "near_hospital_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Check In",
      field: "check_in",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Check Out",
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "No of Nights",
      field: "no_of_days",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Amount",
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  acctravelbooking_rows:[],
  acctravelbooking_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "s_no",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Travel Booking ID",
      field: "travel_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Date of Booking",
      field: "booked_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Origin",
      field: "booking_origin",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Destination",
      field: "booking_destination",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Time",
      field: "booking_time",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Amount",
      field: "payable_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  acctravel_bkng_columns: [
    {
      align: "center",
      label: "S.No.",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "vehicle Name",
      field: "vehicle_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Units",
      field: "units",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "No. of Seaters",
      field: "no_of_seaters",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price (for 1qty)",
      field: "price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View Transport Image",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  accfoodbooking_rows:[],
  accfoodbooking_columns:[
      {
        align: "center",
        label: "Sr.no",
        field: "sno",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        name: "actions",
        label: "Actions",
        field: "actions",
        headerClasses: "bg-indigo-10 text-white",
        align: "center",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Food Booking ID",
        field: "food_booking_orderid",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Hotel Name",
        field: "hotel_property_name",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Near Hospital",
        field: "near_hospital_name",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "City",
        field: "booking_city",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Mobile Number",
        field: "mobile_number",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      {
        align: "center",
        label: "Booking Date",
        field: "food_booking_date",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      },
      // {
      //   align: "center",
      //   label: "Food Type",
      //   field: "food_booking_type",
      //   headerClasses: "bg-indigo-10 text-white",
      //   headerStyle: {
      //     fontWeight: "bold"
      //   }
      // },
      {
        align: "center",
        label: "Total Amount",
        field: "final_price_amount",
        headerClasses: "bg-indigo-10 text-white",
        headerStyle: {
          fontWeight: "bold"
        }
      }
  ],
  accmedicalbooking_rows:[],
  accmedicalbooking_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Medical Booking ID",
      field: "medical_booking_orderid",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Date of Booking",
      field: "eqp_booking_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Type",
      field: "eqp_booking_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Medical Item Count",
      field: "total_item_qty",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Amount",
      field: "final_price_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  food_Item_bkng_columns: [
    {
      align: "center",
      label: "S.No.",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Kitchen Name",
      field: "kitchen_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Kitchen Type",
      field: "kitchen_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Item name",
      field: "selected_food_item",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Item Quantity",
      field: "item_quantity",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price (for 1qty)",
      field: "item_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View Food Image",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  revenue_bookings_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Hotel Name",
      field: "property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Type",
      field: "room_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "City",
      field: "property_city_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Amount",
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  revenue_accounts_bookings_columns: [
    {
      align: "center",
      label: "Sr.no",
      field: "sno",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Booking Order ID",
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Charges",
      field: "room_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Discount (%)",
      field: "discount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Discount Price",
      field: "discount_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "MH offer Price",
      field: "mh_offer_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Taxes (%)",
      field: "gst_percentage",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "GST Amount",
      field: "gst_amount",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Net Amount",
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
   monthwise_partneraccbooking_columns: [
   {
     name: "month_name",
     align: "center",
     label: "Month Name",
     field: "month_name",
     headerClasses: "bg-primary text-white",
   },
   {
      align: "center",
      name: "total_bookings",
     label: "No. Of Bookings",
     field: "total_bookings",
     headerClasses: "bg-primary text-white",
   },
   {
      align: "center",
      name: "total_nights",
     align: "center",
     label: "Nights",
     field: "total_nights",
     headerClasses: "bg-primary text-white",
   },
   {
      align: "center",
      name: "total_guests",
     align: "center",
     label: "Occupants",
     field: "total_guests",
     headerClasses: "bg-primary text-white",
   },
   {
      align: "center",
      name: "total_rooms",
     align: "center",
     label: "Rooms",
     field: "total_rooms",
     headerClasses: "bg-primary text-white",
   },
   {
      align: "center",
      name: "booking_amount",
     align: "center",
     label: "Value",
     field: "booking_amount",
     headerClasses: "bg-primary text-white",
     format: (val) => `₹${val}`
   },
 ],
 monthwise_partneraccCancellation_columns: [
   {
     name: "partnercan_month_name",
     align: "center",
     label: "Month Name",
     field: "partnercan_month_name",
     headerClasses: "bg-primary text-white",
   },
   {
      align: "center",
      name: "partnercan_total_cancellations",
     label: "No. Of Cancellations",
     field: "partnercan_total_cancellations",
     headerClasses: "bg-primary text-white",
   },
   {
     align: "center",
     name: "partnercan_total_nights",
     label: "Nights",
     field: "partnercan_total_nights",
     headerClasses: "bg-primary text-white",
   },
   {
     name: "partnercan_total_booking_amount",
     align: "center",
     label: "Value",
     field: "partnercan_total_booking_amount",
     headerClasses: "bg-primary text-white",
     format: (val) => `₹${val}`
   },
   {
     name: "partnercan_total_refund_amount",
     align: "center",
     label: "Refun Value",
     field: "partnercan_total_refund_amount",
     headerClasses: "bg-primary text-white",
     format: (val) => `₹${val}`
   },
 ],
});
const getters = {
  searchDetails: state => state.searchDetails,
  hotelDetails: state => state.hotelDetails,
  mrs_hotel_info: state => state.mrs_hotel_info,
  hotelInfo_arr: state => state.hotelInfo_arr,
  hotel_arr_forcart: state => state.hotel_arr_forcart,
  accBooking_details: state => state.accBooking_details,
  mangohomzOffers_arr: state => state.mangohomzOffers_arr,
  acc_guest_booked_data: state => state.acc_guest_booked_data,
  food_guest_booked_data: state => state.food_guest_booked_data,
  travel_guest_booked_data: state => state.travel_guest_booked_data,
  eqp_guest_booked_data: state => state.eqp_guest_booked_data,
  partner_bookings_rows: state => state.partner_bookings_rows,
  revenue_bookings_rows:state => state.revenue_bookings_rows,
  foodPartner_bkng_rows: state => state.foodPartner_bkng_rows,
  medicalPartner_bkng_rows: state => state.medicalPartner_bkng_rows,
  travelPartner_bkng_rows: state => state.travelPartner_bkng_rows,
  city_bookings_rows: state => state.city_bookings_rows,
  staff_bookings_rows: state => state.staff_bookings_rows,
  booking_order_data: state => state.booking_order_data,
  bookingId_arr: state => state.bookingId_arr,
  admin_bookings_rows: state => state.admin_bookings_rows,
  food_print_val_arr: state => state.food_print_val_arr,
  mh_acc_booked_data: state => state.mh_acc_booked_data,
  mh_acc_data: state => state.mh_acc_data,
  mh_print_data: state => state.mh_print_data,
  food_cnfrm_booking_data: state => state.food_cnfrm_booking_data,
  foodPartner_bkng_accounts_rows: state => state.foodPartner_bkng_accounts_rows,
  medicalPartner_bkng_account_rows: state => state.medicalPartner_bkng_account_rows,
  travelPartner_bkng_account_rows: state => state.travelPartner_bkng_account_rows,
  partner_bookings_account_rows: state => state.partner_bookings_account_rows,
  accdetails_arr: state =>state.accdetails_arr,
  travel_dashboard_booked_data: state => state.travel_dashboard_booked_data,
  food_dashboard_booked_data:state => state.food_dashboard_booked_data,
  medical_dashboard_booked_data:state => state.medical_dashboard_booked_data,
  dashboard_booking_data:state =>state.dashboard_booking_data,
  acctravelbooking_rows:state =>state.acctravelbooking_rows,
  accmedicalbooking_rows:state => state.accmedicalbooking_rows,
  accfoodbooking_rows:state => state.accfoodbooking_rows,
  aarthilabs_data_rows: state => state.aarthilabs_data_rows,
};
const actions = {
  setSearchDetailsObj({ commit }, payload) {
    // localStorage.setItem("searchItem", JSON.stringify(payload));
    commit("set_search_obj", payload);
  },
  // async loadHotels({ commit }, payload) {
  //   let response = await api.post(`/hotelManagement/loadhotels`, payload);
  //   commit("set_hotel_details", response.data);
  // }
  async loadHotels({ commit, dispatch }, payload) {
// console.log("loadhotelpayload",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/hotelManagement/loadhotels/${payload.city.city_id}/${payload.hospital.latitude}/${payload.hospital.longitude}`
        )
        .then(response => {
          let rows = response.data;
          commit("set_hotel_details", rows);
          // console.log("sas33a",rows)


        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Hotels Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getFoodMangohomzOfferData({ commit, dispatch }) {
    let payload = "Food Partner";
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/bookingFoodManzohomzOffer/${payload}`)
        .then(response => {
          let rows = response.data;
          // console.log("row",rows)
          let data=[]
          rows.data.map((each)=>{
            data.push({selected:false,...each})
          })
          // console.log(data)
          commit("SET_MANGOHOMZ_OFFER", data);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Offers Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  async loadHotelInfo({ commit, dispatch }, payload) {
    //  console.log("housing",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      for (let i = 0; i < payload.length; i++) {
        api
          .get(
            `/hotelManagement/loadhotelsInfo/${payload[i].partner_id}/${payload[i].partner_sub_id}/${payload[i].txn_id}`
          )
          .then(response => {
            let rows = response.data;

            commit("set_hotelInfo_details", rows);
            // console.log("hotellist",rows)
          })
          .catch(error => {
            console.log(error);
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: "Error While Loading Hotels Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }
    }, 1500);
  },


  // async loadHotelInfoForCart({ commit, dispatch }, payload) {
  //   console.log("cartpayload",payload);
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     for (let i = 0; i < payload.length; i++) {
  //       api
  //         .get(
  //           `/hotelManagement/loadHotelInfoForCart/${payload[i].partner_id}/${payload[i].partner_sub_id}/${payload[i].txn_id}`
  //         )
  //         .then(response => {
  //           let rows = response.data;

  //           commit("set_hotelInfo_forcart_details", rows);
  //           console.log("hotelforcart",rows)
  //         })
  //         .catch(error => {
  //           console.log(error);
  //           dispatch(
  //             "alerts_loaders/showAlert",
  //             {
  //               msg: "Error While Loading Hotels Data",
  //               type: "negative"
  //             },
  //             { root: true }
  //           );
  //         });
  //     }
  //   }, 1500);
  // },
  saveFoodBookingDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/saveFoodBookingDetails", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {

            dispatch("getFoodBookingId", payload.mobile_number);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Food Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  saveFoodBookingLogsDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/saveFoodBookingLogsDetails", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          // setTimeout(() => {
          //   dispatch("getFoodBookingId", payload.mobile_number);
          // }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Food Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getFoodBookingId({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/gettingFoodbookingId/${payload}`)
        .then(response => {
          let rows = response.data;
          console.log("2938 getFoodBookingId",rows)
          let mobile_number = rows.data[0].mobile_number
          commit("SET_FOOD_BOOKING_ID", rows);
          this.$router.push({
            name: "Get Food Guest phone Number",
            params: { foodGuestNumber: mobile_number}
          });
          // dispatch ("getFoodBkngDetails" ,booking_order_id)
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Booking Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMHBookingData({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/getMHBookingData/${payload}`)
        .then(response => {
            let rows = response.data;
            console.log(rows)
            commit("SET_MH_BOOKING_DETAILS", rows);
            this.$router.push({
              name: "Food Number",
              // params: { FoodNo: rows }
              params: { FoodNo: rows.data[0].booking_order_id }
            });
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
  loadAllBookingDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/loadAllBookingDetails/${payload}`)
        .then(response => {
          if (response.data.data.length > 0) {
            let rows = response.data;
            commit("SET_ACCOMODATION_BOOKING_DETAILS", rows);
            // console.log("validation",rows)
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
  saveBookingData({ dispatch }, payload) {
  //  console.log("payloadmainbook",payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/saveBookingData", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getBookingId", { phone_no: payload.phone_no, razorpay_order_id: payload.razorpay_order_id, razorpay_signature: payload.razorpay_signature,
            razorpay_payment_id: payload.razorpay_payment_id });
        }, 1000);
          // setTimeout(() => {
          //   dispatch("getBookingId", payload.phone_no);
          // }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Booking Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMedicalMangohomzOfferData({ commit, dispatch }) {
    let payload = "Equipment Partner";
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/bookingMedicalManzohomzOffer/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_MANGOHOMZ_OFFER", rows.data);
        })

        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Offers Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMedicalBookingData({ commit, dispatch }, payload) {
    // console.log("medical",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/getMedicalBookingData/equipment/${payload}`)
        .then(response => {
            let rows = response.data;
            commit("SET_BOOKING_ORDER_DETAILS", rows);
            this.$router.push({
              name: "Equipment Number",

              params: { EquipmentNo: rows.data[0].booking_order_id },
              // params: { EquipmentNo: rows }
            });
        })

        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading MH booking Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  saveEquipmentBookingDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/saveEquipmentBookingDetails", payload)
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
  submittravelDetails({ dispatch }, payload) {
   // console.log("travelbooking",payload)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/submittravelDetails", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTravelBookingId", payload.mobile_number);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Travel Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTravelBookingId({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/gettingTravelbookingId/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVEL_BOOKING_ID", rows);
          this.$router.push({
            name: "Get Travel Guest phone Number",
            params: { travelGuestNumber: rows }
          });
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Booking Guests Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getBookingIdDetails({ commit, dispatch }, payload) {
    //  console.log("error",payload,typeof payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/getBookingIdDetails/${payload}`)
        .then(response => {
          let rows = response.data;
            commit("SET_BOOKING_ID", rows);
            // console.log(rows)
            this.$router.push({
              name: "Guest Number",
              // params: { GuestNo: JSON.stringify(rows) }
              params: { GuestNo: rows.data[0].booking_order_id },
            });
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Booking Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMangohomzOfferDataTravel({ commit, dispatch }) {
    let payload = "Travel Partner";

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/TravelManzohomzOffer/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_MANGOHOMZ_OFFER", rows.data);
          // console.log("rows",rows)
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Offers Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMangohomzOfferData({ commit, dispatch }) {
    let property = "Travel Partner";

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/bookingManzohomzOffer/${property}`)
        .then(response => {
          let rows = response.data;
          commit("SET_MANGOHOMZ_OFFER", rows.data);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Offers Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getBookingId({ commit, dispatch }, payload) {
    // console.log("getBookingId",payload)

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/gettingbookingId/${payload.phone_no}/${payload.razorpay_order_id}/${payload.razorpay_signature}/${payload.razorpay_payment_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_ACC_BOOKING_ID", rows);
          this.$router.push({
            name: "Get Guest phone Number",
            params: { guestNumber: rows }
          });
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
  saveEquipmentBookingDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/saveEquipmentBookingDetails", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getMedicalBookingId", payload.mobile_number);
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Equipment Booking Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMedicalBookingId({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/gettingEquipmentbookingId/${payload}`)
        .then(response => {
          let rows = response.data;
          let booking_order_id = rows.data[0].medical_booking_orderid
          commit("SET_EQUIPMENT_BOOKING_ID", rows);
          this.$router.push({
            name: "Get Equipment Guest phone Number",
            params: { equipmentGuestNumber: payload }
          });
          dispatch("getEquipmentBkngDetails", booking_order_id);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Booking Guests Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  saveGuestPrimaryDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/saveGuestPrimaryDetails", payload)
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
  guestBookingData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestBookingDataTable/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_GUEST_BOOKING_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Partner Booking Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  guestBookingDataForCity({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestBookingDataTableForCity/${user.zone}`)
        .then(response => {
          let rows = response.data;
          commit("SET_CITY_GUEST_BOOKING_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Partner Booking Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  guestBookingDataForStaff({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestBookingDataTableForStaff/${user.zone}`)
        .then(response => {
          let rows = response.data;
          commit("SET_STAFF_GUEST_BOOKING_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Partner Booking Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  guestBookingDataForAdminLogin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestBookingDataTableForAdmin`)
        .then(response => {
          let rows = response.data;
          commit("SET_ADMIN_GUEST_BOOKING_DATA", rows);
          console.log("3481 data",rows.data);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Partner Booking Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  guestFoodBookingData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestFoodBookingData/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_GUEST_FOOD_BOOKING_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Partner Booking Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  guestMedicalBookingData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestMedicalBookingData/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_GUEST_MEDICAL_BOOKING_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Equipment Medical Partner Booking Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  guestTravelBookingData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestTravelBookingData/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_GUEST_TRAVEL_BOOKING_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Travel Partner Booking Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  guestBookingAccountData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestBookingAccountData/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_GUEST_BOOKING_ACCOUNT_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Partner Booking Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  guestFoodBookingAccountData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestFoodBookingAccountData/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_GUEST_FOOD_BOOKING_ACCOUNT_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Partner Booking Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  guestMedicalBookingAccountData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestMedicalBookingAccountData/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_GUEST_MEDICAL_BOOKING_ACCOUNT_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Equipment Medical Partner Booking Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  guestTravelBookingAccountData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/booking/guestTravelBookingAccountData/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_GUEST_TRAVEL_BOOKING_ACCOUNT_DATA", rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg:
                "Error While Loading Travel Partner Booking Registration Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  cancellDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/cancellDetails", payload)
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
        .post("/booking/cancelledfoodbooking", payload)
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
        .post("/booking/cancelledtravelbooking", payload)
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
  cancellequipmentbooking({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/booking/cancelledequipmentbooking", payload)
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
              msg: "Failed To Cancel Booking",
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
        .put(
          `/booking/AccomodationStatus/${payload.booking_order_id}`,payload)
    }, 1500);
  },
  FoodStatus({ dispatch }, payload) {
   dispatch(`alerts_loaders/saveLoading`, "", { root: true });
   setTimeout(() => {
     dispatch("alerts_loaders/stopLoading", "", { root: true });
     api
       .put(
         `/booking/FoodStatus/${payload.food_booking_orderid}`,payload)
   }, 1500);
 },
 TravelStatus({ dispatch }, payload) {
 dispatch(`alerts_loaders/saveLoading`, "", { root: true });
 setTimeout(() => {
   dispatch("alerts_loaders/stopLoading", "", { root: true });
   api
     .put(
       `/booking/TravelStatus/${payload.travel_booking_orderid}`,payload)
 }, 1500);
},
equipmentStatus({ dispatch }, payload) {
 dispatch(`alerts_loaders/saveLoading`, "", { root: true });
 setTimeout(() => {
   dispatch("alerts_loaders/stopLoading", "", { root: true });
   api
     .put(
       `/booking/equipmentStatus/${payload.medical_booking_orderid}`,payload)
 }, 1500);
},
getFoodBkngDetails({ dispatch,commit }, payload) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/booking/customerFoodBkngDetails/${payload}`)
      .then(response => {
        if (response.data.data.length > 0) {
          let rows = response.data;
          console.log("getFoodBkngDetails",rows)
          commit("SET_CONFIRMATION_FOOD_DETAILS", rows);
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
            msg: "Error While Loading food booking details Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
getEquipmentBkngDetails({ dispatch,commit }, payload) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/booking/customerBkngDetails/${payload}`)
      .then(response => {
        if (response.data.data.length > 0) {
          let rows = response.data;
          commit("SET_PRINT_DETAILS", rows);
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
loadAccomodationDetails({ dispatch,commit }, payload) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/booking/loadAccomodationDetails/${payload}`)
      .then(response => {
        if (response.data.length > 0) {
          let rows = response.data;
          commit("SET_ACCOMODATION_DETAILS", rows);
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
            msg: `${payload} is not found. Please Check the MH Booking ID`,
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
createUserDetails({ dispatch }, payload) {
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  return api
    .post("/booking/createUserDetails", payload)
    .then(response => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      return response.data;
    })
    .catch(error => {
      console.log(error);
      dispatch(
        `alerts_loaders/showAlert`,
        { msg: "Failed To Save User Registration Data", type: "negative" },
        { root: true }
      );
    });
},
// createUserDetails({ dispatch }, payload) {
//   dispatch(`alerts_loaders/saveLoading`, "", { root: true });
//   setTimeout(() => {
//     dispatch("alerts_loaders/stopLoading", "", { root: true });
//     api
//       .post("/booking/createUserDetails", payload)
//       .then(response => {
//         dispatch(
//           "alerts_loaders/showAlert",
//           { msg: response.data.message, type: "positive" },
//           { root: true }
//         );
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch(
//           `alerts_loaders/showAlert`,
//           { msg: "Failed To Save User Registration Data", type: "negative" },
//           {
//             msg: "Failed To Save User Registration Data",
//             type: "negative"
//           },
//           { root: true }
//         );
//       });
//   }, 1500);
// },
getaccomodationdetails({ commit, dispatch }) {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/booking/getaccomodationdetails/acc/${user.account_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_ACCOMODATION_INFO", rows);

      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Travel Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
getTravelDashboardBookingData({ commit, dispatch }) {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/booking/getTravelDashboardBookingData/${user.account_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_TRAVELDASHBOARD_DETAILS", rows);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Travel Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
getFoodDashboardBookingData({ commit, dispatch }) {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/booking/getFoodDashboardBookingData/${user.account_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_FOODDASHBOARD_DETAILS", rows);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Travel Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
getMedicalDashboardBookingData({ commit, dispatch }) {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/booking/getMedicalDashboardBookingData/${user.account_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_MEDICALDASHBOARD_DETAILS", rows);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Travel Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
loadaccallbooking({ commit, dispatch },payload) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
    .get(
      `/booking/loadaccallbooking/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`
    )
      .then(response => {
        let rows = response.data;
        commit("SET_DASHBOARDBOOKING_DETAILS", rows);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Travel Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
loadaccfoodbooking({ commit, dispatch }, payload) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/booking/loadaccfoodbooking/${payload.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("ACCFOODBOOKING_PARTNER", rows);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Food Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
loadacctravelbooking({ commit, dispatch }, payload) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/booking/loadacctravelbooking/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("ACCTRAVELBOOKING_PARTNER", rows);
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
loadaccmedicalbooking({ commit, dispatch }, payload) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/booking/loadaccmedicalbooking/${payload.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("ACCMEDICALBOOKING_PARTNER", rows);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Medical Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
revenueBookingData({ commit, dispatch }) {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/booking/revenueBookingData/${user.account_id}`)
      .then(response => {
        let rows = response.data;
        commit("REVENUE_BOOKINGS", rows);
      })
      .catch(error => {
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg:
              "Error While Loading Partner Booking Registration Master Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},









bookingDataSavingBeforePay({ dispatch }, payload) {
 // console.log("before",payload);

  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/booking/saveBookingDataBeforePay", payload)
      // .then(response => {
      //   dispatch(
      //     "alerts_loaders/showAlert",
      //     { msg: response.data.message, type: "positive" },
      //     { root: true }
      //   );
      // })
      // .catch(error => {
      //   console.log(error);
      //   dispatch(
      //     `alerts_loaders/showAlert`,
      //     {
      //       msg: "Failed To Save ",
      //       type: "negative"
      //     },
      //     { root: true }
      //   );
      // });
  },);
},
getAarthilabDetails({ commit, dispatch }) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  dispatch("alerts_loaders/stopLoading", "", { root: true });

  api
    .get(`/booking/getAarthilabDetails`)
    .then(response => {
      let usermenus = response.data;
      // console.log(response.data);
      commit("SET_AARTHILABS_GETTING_DETAILS", usermenus);
      // console.log(usermenus);

    })
    .catch(error => {
      console.log(error);
      dispatch(
        "alerts_loaders/showAlert",
        {
          msg: "Error While Loading Aarthilabs Booking details",
          type: "negative"
        },
        { root: true }
      );
    });
},

arthilabsdetaisSaving({ dispatch }, payload) {
  // console.log("ooooo", payload);
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/booking/arthilabsdetaisSavingmethod", payload)
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
              msg: response.data && response.data.message || "Failed To Aarthi Labs Details Data",
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
            msg: "Failed To Aarthi Labs Details Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
async loadPropertyInfo({ commit, dispatch }, payload) {
  //  console.log("loadPropertyInfo",payload);
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(
            `/hotelManagement/loadPropertyInfo/${payload.city_seo_name}/${payload.hospital_seo_name}/${payload.subproperty_seo_name}`
          )
          .then(response => {
            let rows = response.data;
            commit("set_PropertyInfo_details", rows.data);
            //  console.log("PropertyInfo",rows.data)
          })
          .catch(error => {
            console.log(error);
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: "Error While Loading Property Info Details",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },
};
const mutations = {
  SET_MANGOHOMZ_OFFER(state, data) {
    state.mangohomzOffers_arr = data;
  },
  set_search_obj(state, data) {
    state.searchDetails = data;
  },
  set_hotel_details(state, data) {
    state.hotelDetails = data;
  },
  set_PropertyInfo_details(state, data) {
    state.mrs_hotel_info = data;
  },
  set_hotelInfo_details(state, data) {
    state.hotelInfo_arr = data.data;
  },
  set_hotelInfo_forcart_details(state, data) {
    state.hotel_arr_forcart = data.data;
  },
  SET_MANGOHOMZ_OFFER(state, data) {
    state.mangohomzOffers_arr = data;
  },
  SET_BOOKING_ID(state, data) {
    state.bookingId_arr = data.data;
  },
  SET_BOOKING_ORDER_DETAILS(state, data) {
    state.booking_order_data = data.data;
  },
  SET_MH_BOOKING_DETAILS(state, rows) {
    state.accBooking_details = rows.data;
  },
  SET_ACC_BOOKING_ID(state, data) {
    state.acc_guest_booked_data = data.data;
  },
  SET_GUEST_BOOKING_DATA(state, rows) {
    state.partner_bookings_rows = rows.data;
  },
  SET_GUEST_FOOD_BOOKING_DATA(state, rows) {
    state.foodPartner_bkng_rows = rows.data;
  },
  SET_GUEST_MEDICAL_BOOKING_DATA(state, rows) {
    state.medicalPartner_bkng_rows = rows.data;
  },
  SET_GUEST_TRAVEL_BOOKING_DATA(state, rows) {
    state.travelPartner_bkng_rows = rows.data;
  },
  SET_CITY_GUEST_BOOKING_DATA(state, rows) {
    state.city_bookings_rows = rows.data;
  },
  SET_STAFF_GUEST_BOOKING_DATA(state, rows) {
    state.staff_bookings_rows = rows.data;
  },
  SET_ADMIN_GUEST_BOOKING_DATA(state, rows) {
    state.admin_bookings_rows = rows.data;
  },
  SET_FOOD_PRINT_VAL(state, printVal) {
    state.food_print_val_arr = printVal;
  },
  SET_FOOD_BOOKING_ID(state, data) {
    state.food_guest_booked_data = data.data;
  },
  SET_TRAVEL_BOOKING_ID(state, data) {
    state.travel_guest_booked_data = data.data;
  },
  SET_EQUIPMENT_BOOKING_ID(state, data) {
    state.eqp_guest_booked_data = data.data;
  },
  SET_ACCOMODATION_BOOKING_DETAILS(state, data) {
    state.mh_acc_booked_data = data.data;
  },
  SET_GUEST_BOOKING_ACCOUNT_DATA(state, rows) {
    state.partner_bookings_account_rows = rows.data;
  },
  SET_GUEST_FOOD_BOOKING_ACCOUNT_DATA(state, rows) {
    state.foodPartner_bkng_accounts_rows = rows.data;
  },
  SET_GUEST_MEDICAL_BOOKING_ACCOUNT_DATA(state, rows) {
    state.medicalPartner_bkng_account_rows = rows.data;
  },
  SET_GUEST_TRAVEL_BOOKING_ACCOUNT_DATA(state, rows) {
    state.travelPartner_bkng_account_rows = rows.data;
  },
  SET_ACCOMODATION_DETAILS(state, data) {
    state.mh_acc_data = data.data;
  },
  SET_PRINT_DETAILS(state, data) {
    state.mh_print_data = data.data;
  },
 SET_CONFIRMATION_FOOD_DETAILS(state, data) {
    state.food_cnfrm_booking_data = data.data;
  },
  SET_ACCOMODATION_INFO(state, data) {
    state.accdetails_arr = data.data;
  },
  SET_TRAVELDASHBOARD_DETAILS(state, data) {
    state.travel_dashboard_booked_data = data.data;
  },
  SET_DASHBOARDBOOKING_DETAILS(state, data) {
    state.dashboard_booking_data = data.data;
  },
  SET_FOODDASHBOARD_DETAILS(state, data) {
    state.food_dashboard_booked_data = data.data;
  },
  SET_MEDICALDASHBOARD_DETAILS(state, data) {
    state.medical_dashboard_booked_data = data.data;
  },

  ACCTRAVELBOOKING_PARTNER(state, data) {
    state.acctravelbooking_rows = data.data;
  },
  ACCFOODBOOKING_PARTNER(state, data) {
  state.accfoodbooking_rows = data.data;
  },
  ACCMEDICALBOOKING_PARTNER(state, data) {
    state.accmedicalbooking_rows = data.data;
  },
  REVENUE_BOOKINGS(state, data){
    state.revenue_bookings_rows=data.data;
  },
  SET_AARTHILABS_GETTING_DETAILS(state, rows) {
    state.aarthilabs_data_rows = rows;
  },
};
export const booking = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
