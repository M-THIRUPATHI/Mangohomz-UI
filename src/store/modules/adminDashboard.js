import { api } from "boot/axios";
import { log } from "console";

//intial state
const state = () => ({
  //Admin DashBoard
  partner_registration_displayAll_rows: [],
  agent_registration_displayAll_rows: [],
  property_detailsAll_rows: [],
  property_room_displayAll_rows: [],
  booking_displayAll_rows: [],
  Travelbooking_displayAll_rows: [],
  property_master_displayAll_rows: [],
  agent_master_displayAll_rows: [],
  booking_all_rows: [],
  live_bookingdata_all_rows: [],
  upcoming_bookingdata_all_rows: [],
  feedback_data_rows: [],
  accommodation_cancellation_rows: [],
  admin_booking_status_count: [],
  admin_Travelbooking_status_count: [],
  center_accounts_bookings_rows: [],
  live_bookingdata_Staff_all_rows: [],
  upcoming_bookingdata_Staff_all_rows: [],

  property_data_rows: [],
  property_data_columns: [
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
      name: "sub_property_name",
      align: "left",
      label: "Property Name",
      field: "sub_property_name",
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
      name: "address",
      align: "left",
      label: "Address",
      field: "address",
      headerClasses: "bg-primary text-white",
      style: "max-width: 350px",
      sortable: true
    },
    {
      name: "partner_name",
      align: "left",
      label: "Contact Name",
      field: "partner_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "property_phone",
      align: "left",
      label: "Number",
      field: "property_phone",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "property_email",
      align: "left",
      label: "Email Id",
      field: "property_email",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "mh_service_fee",
      align: "left",
      label: "MH Share",
      field: "mh_service_fee",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "agent_fee_on_property",
      align: "left",
      label: "Agent Share",
      field: "agent_fee_on_property",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],
  hospital_data_rows: [],
  hospital_data_columns: [
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
      name: "near_hospital_name",
      align: "left",
      label: "Hospital Name",
      field: "near_hospital_name",
      headerClasses: "bg-primary text-white",
      style: "max-width: 100px"
    },
    {
      name: "city",
      align: "left",
      label: "City",
      field: "city",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "address",
      align: "left",
      label: "Address",
      field: "address",
      headerClasses: "bg-primary text-white",
      style: "max-width: 150px"
    },
    {
      name: "address",
      align: "left",
      label: "Latitude",
      field: "latitude",
      headerClasses: "bg-primary text-white",
      style: "max-width: 200px"
    },
    {
      name: "address",
      align: "left",
      label: "Longitude",
      field: "longitude",
      headerClasses: "bg-primary text-white",
      style: "max-width: 200px"
    }
  ],
  feedback_data_columns: [
    {
      name: "sno",
      align: "center",
      label: "Sno",
      field: "sno",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "actions",
      label: "View",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "mh_booking_id",
      align: "center",
      label: "Booking Id",
      field: "mh_booking_id",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "user_name",
      align: "center",
      label: "User Name",
      field: "user_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "property_name",
      align: "center",
      label: "Property Name",
      field: "property_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "mh_experience_rating",
      align: "center",
      label: "Experience Rating",
      field: "mh_experience_rating",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "hotel_rating",
      align: "center",
      label: "Hotel Rating",
      field: "hotel_rating",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "mh_recommend_value",
      align: "center",
      label: "Recommended Value",
      field: "mh_recommend_value",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "user_message",
      align: "left",
      label: "Message",
      field: "user_message",
      headerClasses: "bg-primary text-white"
    }
  ],
  monthwise_accbooking_rows: [],
  monthwise_accbooking_columns: [
    {
      name: "month_name",
      align: "center",
      label: "Month",
      field: "month_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "center",
      name: "total_bookings",
      label: "Bookings",
      field: "total_bookings",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "center",
      name: "total_nights",
      align: "center",
      label: "Nights",
      field: "total_nights",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "center",
      name: "total_guests",
      align: "center",
      label: "Occupants",
      field: "total_guests",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "center",
      name: "total_rooms",
      align: "center",
      label: "Rooms",
      field: "total_rooms",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "center",
      name: "booking_amount",
      align: "center",
      label: "Value",
      field: "booking_amount",
      headerClasses: "bg-primary text-white",
      format: val => `₹${val}`
    },

    {
      align: "center",
      name: "avg_booking_amount",
      align: "center",
      label: "AOV",
      field: "avg_booking_amount",
      headerClasses: "bg-primary text-white",
      format: val => `₹${val}`
    },

    {
      align: "center",
      name: "avg_booking_nightvalue",
      align: "center",
      label: "ARN",
      field: "avg_booking_nightvalue",
      headerClasses: "bg-primary text-white",
      format: val => `₹${val}`
    }
  ],
hospital_hub_wise_bookings_rows:[],
  hospital_hub_wise_bookings_colums: [
    {
      name: "index",
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "near_hospital_name",
      align: "left",
      label: "Hospital name",
      field: "near_hospital_name",
      headerClasses: "bg-primary text-white",
    },

    {
      align: "center",
      name: "property_city_name",
      label: "City",
      field: "property_city_name",
      headerClasses: "bg-primary text-white",
    },
    {
      align: "center",
      name: "cnt",
      label: "Count",
      field: "cnt",
      headerClasses: "bg-primary text-white",
    }
  ],
  monthwise_accCancellation_rows: [],
  monthwise_accCancellation_columns: [
    {
      name: "month_name",
      align: "center",
      label: "Month",
      field: "month_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "center",
      name: "total_cancellations",
      label: "Cancellations",
      field: "total_cancellations",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "total_nights",
      align: "center",
      label: "Nights",
      field: "total_nights",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "occupants",
      align: "center",
      label: "Occupants",
      field: "occupants",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "rooms",
      align: "center",
      label: "Rooms",
      field: "rooms",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "total_booking_amount",
      align: "center",
      label: "Value",
      field: "total_booking_amount",
      headerClasses: "bg-primary text-white",
      format: val => `₹${val}`
    },
    {
      name: "total_refund_amount",
      align: "center",
      label: "Refund Value",
      field: "total_refund_amount",
      headerClasses: "bg-primary text-white",
      format: val => `₹${val}`
    }
  ],
  propertyprice_log_rows: [],
  propertyprice_log_columns: [
    {
      name: "index",
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "sub_property_name",
      align: "center",
      label: "Property Name",
      field: "sub_property_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "room_type",
      align: "center",
      label: "Room Type",
      field: "room_type",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "previous_price",
      align: "center",
      label: "Previous Price",
      field: "previous_price",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "changed_price",
      align: "center",
      label: "Changed Price",
      field: "changed_price",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    // {
    //   name: "units",
    //   align: "center",
    //   label: "units",
    //   field: "units",
    //   headerClasses: "bg-primary text-white",
    //   sortable: true
    // },
    {
      name: "partner_specialOffer",
      align: "center",
      label: "Partner Offer(%)",
      field: "partner_specialOffer",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "previous_earlybird_offer",
      align: "center",
      label: "Previous EB Offer(%)",
      field: "previous_earlybird_offer",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "changed_earlybird_offer",
      align: "center",
      label: "Changed EB Offer(%)",
      field: "changed_earlybird_offer",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "customer_price",
      align: "center",
      label: "Customer Price",
      field: "customer_price",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "gst_per",
      align: "center",
      label: "GST(%)",
      field: "gst_per",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "gst_amount",
      align: "center",
      label: "GST Amount",
      field: "gst_amount",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "total_amount",
      align: "center",
      label: "Total With GST",
      field: "total_amount",
headerClasses: "bg-primary text-white",
      sortable: true
    },{
    name: "changed_by_user_name",
    align: "center",
    label: "Changed by username",
    field: "changed_by_user_name",
    headerClasses: "bg-primary text-white",
    sortable: true
  },{
  name: "changed_by_name",
  align: "center",
  label: "Changed by name",
  field: "changed_by_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "changed_date_time1",
      align: "center",
      label: "Changed DateTime",
      field: "changed_date_time1",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],
  property_room_displayAll_columns: [
    {
      name: "room_type",
      align: "center",
      label: "Room Type",
      field: "room_type",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "cnt",
      align: "center",
      label: "Availability Count",
      field: "cnt",
      headerClasses: "bg-primary text-white"
    }
  ],

  upcoming_bookings_columns: [
    {
      align: "center",
      label: "Hotel Name",
      field: "property_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Type",
      field: "room_type",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
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
      align: "center",
      label: "Check In",
      field: "check_in",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Check Out",
      sortable: true,
      field: "check_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
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
      align: "center",
      label: "Room Nights",
      field: "room_nights",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
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
      align: "center",
      label: "Amount",
      field: "total_price",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
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
        maxWidth: "150px"
      }
    },

    {
      align: "center",
      label: "Booking ID",
      sortable: true,
      field: "booking_order_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Guest Name",
      field: "guests",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      style: "max-width: 350px",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  live_bookings_columns: [
    {
      name: "property_name",
      align: "center",
      label: "Hotel Name",
      field: "property_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "room_type",
      align: "center",
      label: "Room Type",
      field: "room_type",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "booked_date",
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
      name: "check_in",
      align: "center",
      label: "Check In",
      field: "check_in",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "check_out",
      align: "center",
      label: "Check Out",
      field: "check_out",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "no_of_days",
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
      name: "room_booked_count",
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
      name: "room_nights",
      align: "center",
      label: "Room Nights",
      field: "room_nights",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "guest_count",
      align: "center",
      label: "Guests",
      field: "guest_count",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "total_price",
      align: "center",
      label: "Amount",
      field: "total_price",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "property_city_name",
      align: "center",
      label: "City",
      field: "property_city_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "near_hospital_name",
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
        maxWidth: "150px"
      }
    },

    {
      name: "booking_order_id",
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
      name: "guests",
      align: "center",
      label: "Guest Name",
      sortable: true,
      field: "guests",
      headerClasses: "bg-indigo-10 text-white",
      style: "max-width: 350px",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  financial_report_booking_rows: [],

  datewise_booking_rows: [],
  datewise_booking_columns: [
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
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "booking_order_id",
      sortable: true,
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
        if (
          row.guestData &&
          row.guestData.length > 0 &&
          row.guestData[0].first_name
        ) {
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
      name: "property_city_name",
      sortable: true,
      align: "center",
      label: "City",
      field: "property_city_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "near_hospital_name",
      sortable: true,
      align: "center",
      label: "Near Hospital",
      field: "near_hospital_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
      cellStyle: {
        wordWrap: "break-word",
        maxWidth: "150px"
      }
    },
    {
      name: "property_name",
      sortable: true,
      align: "center",
      label: "Hotel Name",
      field: "property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "booked_date",
      sortable: true,
      align: "center",
      label: "Booked Date",
      field: "booked_date",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "formattedcheck_in",
      sortable: true,
      align: "center",
      label: "Check In",
      field: "formattedcheck_in",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "formattedcheck_out",
      sortable: true,
      align: "center",
      label: "Check Out",
      field: "formattedcheck_out",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "no_of_days",
      sortable: true,
      align: "center",
      label: "Nights",
      field: "no_of_days",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "room_booked_count",
      sortable: true,
      align: "center",
      label: "Rooms",
      field: "room_booked_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "roomNights_count",
      sortable: true,
      align: "center",
      label: "Room Nights",
      field: "roomNights_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "guest_count",
      sortable: true,
      align: "center",
      label: "Guests",
      field: "guest_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "total_price",
      sortable: true,
      align: "center",
      label: "Amount",
      field: "total_price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      align: "center",
      label: "MH Commission",
      field: row => {
        //console.log(row)
        if (
          row.mh_service_fee &&
          row.mh_service_fee.length > 0 &&
          row.mh_service_fee[0].mh_service_fee
        ) {
          const mhServiceFeePercentage =
            row.mh_service_fee[0].mh_service_fee / 100;

          if (
            !row.dateOfCancellationData ||
            row.dateOfCancellationData.length === 0
          ) {
            const grossAmount = row.room_price || 0;
            // const discountPartner = row.discount_price || 0;
            // const gstPercentage = row.gst_percentage || 0;

            const mhCommission = grossAmount * mhServiceFeePercentage;
            return mhCommission.toFixed(0);
          }
          return "";
        }
        return "";
      },
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Partner Share",
      field: row => {
        if (
          !row.dateOfCancellationData ||
          row.dateOfCancellationData.length === 0
        ) {
          const grossAmount = row.room_price || 0;
          // const discountPartner = row.discount_price || 0;
          const tax = row.gst_amount || 0;
          const tds = grossAmount * 0.01;
          const gstTcs = grossAmount * 0.01;

          const grossPayable = grossAmount + tax - tds - gstTcs;

          if (
            row.mh_service_fee &&
            row.mh_service_fee.length > 0 &&
            row.mh_service_fee[0].mh_service_fee
          ) {
            const mhServiceFeePercentage =
              row.mh_service_fee[0].mh_service_fee / 100;
            const mhserviceonGrosspay = grossAmount * mhServiceFeePercentage;
            const eighteenpercentage = mhserviceonGrosspay * 0.18;
            const finalNetpayToPartner =
              grossPayable - mhserviceonGrosspay - eighteenpercentage;

            return finalNetpayToPartner.toFixed(0);
          }

          return "";
        }

        return "";
      },
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  upcoming_bookingdata_partner_rows: [],
  upcoming_bookings_partner_columns: [
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
      label: "Nights",
      field: "no_of_days",
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
      label: "Rooms",
      field: "room_booked_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Nights",
      field: "room_nights",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
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
      field: "total_price",
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
        maxWidth: "150px"
      }
    },

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
      field: "guests",
      headerClasses: "bg-indigo-10 text-white",
      style: "max-width: 350px",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  live_bookingdata_partner_rows: [],

  live_bookings_partner_columns: [
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
      label: "Nights",
      field: "no_of_days",
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
      label: "Rooms",
      field: "room_booked_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Nights",
      field: "room_nights",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
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
      field: "total_price",
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
        maxWidth: "150px"
      }
    },

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
      field: "guests",
      headerClasses: "bg-indigo-10 text-white",
      style: "max-width: 350px",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  medical_loanlist_rows: [],
  medical_loanlist_columns: [
    {
      name: "index",
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "patient_name",
      align: "center",
      label: "Patient Name",
      field: "patient_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "hospital_name",
      align: "center",
      label: "Hospital Name",
      field: "hospital_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "email_id",
      align: "center",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "country_code_mobile_number",
      align: "center",
      label: "Mobile Number",
      field: "country_code_mobile_number",
      headerClasses: "bg-primary text-white",
      format: (val, row) => `${row.country_code}${row.mobile_number}`
    },
    {
      name: "patient_location",
      align: "center",
      label: "Patient Location",
      field: "patient_location",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "salarized",
      align: "center",
      label: "salaried",
      field: "salarized",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "medical_loanfor",
      align: "center",
      label: "Medical Loan For",
      field: "medical_loanfor",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "message",
      align: "center",
      label: "Message",
      field: "message",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "created_datetime1",
      align: "center",
      label: "Created DateTime",
      field: "created_datetime1",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],
  travel_citywise_data_rows: [],
  travel_citywise_data_columns: [
    {
      name: "sno",
      align: "center",
      label: "Sno",
      field: "sno",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      align: "center",
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-primary text-white"
    },
    // {
    //    align: "center",
    //    name: "city_code",
    //   label: "City Id",
    //   field: "city_code",
    //   headerClasses: "bg-primary text-white",
    // },
    {
      name: "city_name",
      align: "center",
      label: "City Name",
      field: "city_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "point_type",
      align: "center",
      label: "Point Type",
      field: "point_type",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "point_name",
      align: "center",
      label: "Point Name",
      field: "point_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "latitude",
      align: "center",
      label: "Latitude",
      field: "latitude",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "longitude",
      align: "center",
      label: "Longitudes",
      field: "longitude",
      headerClasses: "bg-primary text-white"
    }
  ],
  mhgenie_patient_details_rows: [],
  mhgenie_patient_details_column: [
    {
      name: "index",
      align: "center",
      label: "Sno",
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
      name: "user_id",
      align: "center",
      label: "Genie UserId",
      field: "user_id",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "patient_name",
      align: "center",
      label: "Patient Name",
      field: "patient_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "phone_number",
      align: "center",
      label: "Phone Number",
      field: "phone_number",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "patient_location",
      align: "center",
      label: "Patient Location",
      field: "patient_location",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "problem",
      align: "center",
      label: "Problem",
      field: "problem",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "created_datetime1",
      align: "left",
      label: "DateTime",
      field: "created_datetime1",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],

  call_back_data_rows: [],
  call_back_data_column: [
    {
      name: "sno",
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "mobile_number",
      align: "center",
      label: "Mobile Number",
      field: "mobile_number",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "date_call",
      align: "center",
      label: "Sent Date & Time",
      field: "date_call",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "customer_name",
      align: "center",
      label: "Customer Name",
      field: "customer_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "hospital_name",
      align: "center",
      label: "Hospital Name",
      field: "hospital_name",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "hospital_location",
      align: "center",
      label: "Hospital Location",
      field: "hospital_location",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "customer_city",
      align: "center",
      label: "Customer City",
      field: "customer_city",
      headerClasses: "bg-primary text-white",
      sortable: true
    },

    {
      name: "	remark",
      align: "center",
      label: "Remark",
      field: "remark",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],
  call_back_allcity_rows: [],
  get_hospital_for_callback_rows: [],

  call_back_datewise_data_rows: [],
  call_back_datewise_data_column: [
    {
      name: "sno",
      align: "center",
      label: "Sno",
      field: "sno",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "mobile_number",
      align: "center",
      label: "Mobile Number",
      field: "mobile_number",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "date_call",
      align: "center",
      label: "Call Date",
      field: "date_call",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "customer_name",
      align: "center",
      label: "Customer Name",
      field: "customer_name",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "hospital_name",
      align: "center",
      label: "Hospital Name",
      field: "hospital_name",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "hospital_location",
      align: "center",
      label: "Hospital Location",
      field: "hospital_location",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "customer_city",
      align: "center",
      label: "Customer City",
      field: "customer_city",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "	remark",
      align: "center",
      label: "Remark",
      field: "remark",
      headerClasses: "bg-primary text-white"
    }
  ],

  mhsubscribers_data_rows: [],

  mhsubscribers_data_columns: [
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
      name: "datetime_for_subscription",
      align: "center",
      label: "Date and Time of Subscription",
      field: row => {
        let dateObject = new Date(row.datetime_for_subscription);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${String(dateObject.getFullYear()).padStart(
          2,
          "0"
        )}/${String(dateObject.getMonth() + 1).padStart(
          2,
          "0"
        )}/${dateObject.getDate()}   ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "subscriber_email",

      align: "center",
      label: "Email Subscriber",
      required: true,
      field: "subscriber_email",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],

  subscriber_date_wise_data_rows: [],
  subscriber_date_wise_data_columns: [
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
      name: "datetime_for_subscription",
      align: "center",
      label: "Date and Time of Subscription",
      field: row => {
        let dateObject = new Date(row.datetime_for_subscription);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${String(dateObject.getFullYear()).padStart(
          2,
          "0"
        )}/${String(dateObject.getMonth() + 1).padStart(
          2,
          "0"
        )}/${dateObject.getDate()}   ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "subscriber_email",

      align: "center",
      label: "Email Subscriber",
      required: true,
      field: "subscriber_email",
      headerClasses: "bg-primary text-white",
      sortable: true
    }
  ],

  upcoming_bookings_Staff_columns: [
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
      label: "Nights",
      field: "no_of_days",
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
      label: "Rooms",
      field: "room_booked_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Nights",
      field: "room_nights",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
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
      field: "total_price",
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
        maxWidth: "150px"
      }
    },

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
      field: "guests",
      headerClasses: "bg-indigo-10 text-white",
      style: "max-width: 350px",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  live_bookings_Staff_columns: [
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
      label: "Nights",
      field: "no_of_days",
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
      label: "Rooms",
      field: "room_booked_count",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Nights",
      field: "room_nights",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
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
      field: "total_price",
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
        maxWidth: "150px"
      }
    },

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
      field: "guests",
      headerClasses: "bg-indigo-10 text-white",
      style: "max-width: 350px",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],


  admin_accomadation_visit_data: [],
  admin_accomadation_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "property_name",
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
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "visit_status",
      align: "center",
      label: "Field Status",
      field: "visit_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "concatenated_name",
      align: "center",
      label: "Name - Username",
      field: "concatenated_name",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],


  admin_datewise_visit_data: [],
  admin_datewise_accomadation_columns: [
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
      name: "property_name",
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
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "visit_status",
      align: "center",
      label: "Field Status",
      field: "visit_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "concatenated_name",
      align: "center",
      label: "Name - Username",
      field: "concatenated_name",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  CityArr: [],

  admin_food_visit_data: [],
  admin_food_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "restaurant_name",
      align: "center",
      label: "Restaurant Name",
      field: "restaurant_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "visit_status",
      align: "center",
      label: "Visit Status",
      field: "visit_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    },
    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    },

    {
      name: "concatenated_name",
      align: "center",
      label: "Name - User Name",
      field: "concatenated_name",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  admin_datewise_food_data: [],
  admin_datewise_food_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "restaurant_name",
      align: "center",
      label: "Restaurant Name",
      field: "restaurant_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "visit_status",
      align: "center",
      label: "Visit Status",
      field: "visit_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    },
    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    },
    {
      name: "concatenated_name",
      align: "center",
      label: "Name - UserName",
      field: "concatenated_name",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],


  admin_travel_visit_data: [],
  admin_travel_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "travel_agency_name",
      align: "center",
      label: "Travel Agency Name",
      field: "travel_agency_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "visit_status",
      align: "center",
      label: "Visit Status",
      field: "visit_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "names",
      align: "center",
      label: "Name - User Name",
      field: "names",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  admin_travel_datewise_visit_data: [],
  admin_travel_datewise_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "travel_agency_name",
      align: "center",
      label: "Travel Agency Name",
      field: "travel_agency_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "visit_status",
      align: "center",
      label: "Visit Status",
      field: "visit_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "names",
      align: "center",
      label: "Name - User Name",
      field: "names",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  admin_equipment_visit_data: [],
  admin_equipment_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "equipment_name",
      align: "center",
      label: "Equipment Name",
      field: "equipment_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "visit_status",
      align: "center",
      label: "Visit Status",
      field: "visit_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "names",
      align: "center",
      label: "Name - User Name",
      field: "names",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  admin_equipment_datewise_visit_data: [],
  admin_equipment_datewise_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "equipment_name",
      align: "center",
      label: "Equipment Name",
      field: "equipment_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "visit_status",
      align: "center",
      label: "Visit Status",
      field: "visit_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "names",
      align: "center",
      label: "Name - User Name",
      field: "names",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  keyPersonsDataRowForAdmin: [],
  keyPersonsDataColumnForAdmin: [
    {
      name: "sno",
      label: "Sno",
      align: "center",
      headerClasses: "bg-indigo-10 text-white",
      field: "index",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      label: "Room Category",
      align: "center",
      headerClasses: "bg-indigo-10 text-white",
      field: "key_type",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      headerClasses: "bg-indigo-10 text-white",

      label: "Doctor Name",
      field: "doctor_name",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      headerClasses: "bg-indigo-10 text-white",
      label: "Speciality Name",
      align: "center",
      field: "speciality_name",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      headerClasses: "bg-indigo-10 text-white",
      label: "",
      field: "actions",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  admin_hospital_visit_data: [],
  admin_hospital_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "hospital_name",
      align: "center",
      label: "Hospital Name",
      field: "hospital_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "visit_status",
      align: "center",
      label: "Field Status",
      field: "visit_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "concatenated_name",
      align: "center",
      label: "Name - Username",
      field: "concatenated_name",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  admin_datewise_hospital_data: [],
  admin_datewise_hospital_columns: [
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
      name: "hospital_name",
      align: "center",
      label: "Hospital Name",
      field: "hospital_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "actions",
      align: "center",
      label: "View",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "visit_status",
      align: "center",
      label: "Field Status",
      field: "visit_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "admin_status",
      align: "center",
      label: "Admin Status",
      field: "admin_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "val1",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val1 => `${val1}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "val",
      align: "center",
      label: "Last Updated Date Time",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? "PM" : "AM";
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}/${String(dateObject.getDate()).padStart(
          2,
          "0"
        )}    ${String(hours).padStart(2, "0")}:${String(
          dateObject.getMinutes()
        ).padStart(2, "0")} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate;
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "concatenated_name",
      align: "center",
      label: "Name - Username",
      field: "concatenated_name",
      sortable: true,
      width: 20,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "employee_location",
      align: "center",
      label: "Employee Location",
      field: "employee_location",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],


  roomCategoryRatesListRowForAdmin: [],
  roomCategoryRatesListColumnForAdmin: [
    {      name: "sno",
      label: "Sno",
      align: "center",
      headerClasses: "bg-indigo-10 text-white",
      field: "index",
      headerStyle: {
        fontWeight: "bold",
      },
    },


    {

      label: "Room Category",
      align: "center",
      headerClasses: "bg-indigo-10 text-white",
      field: "room_category",
      headerStyle: {
        fontWeight: "bold",
      },
    },
    {
      align: "center",
      headerClasses: "bg-indigo-10 text-white",

      label: "AC / Non AC",
      field: "ac_type",
      headerStyle: {
        fontWeight: "bold",
      },
    },
    {

      headerClasses: "bg-indigo-10 text-white",
      label: "Sharing Types",
      align: "center",
      field: "sharing_type",
      headerStyle: {
        fontWeight: "bold",
      },
    },
    {

      headerClasses: "bg-indigo-10 text-white",
      label: "BreakFast Types",
      align: "center",
      field: "breakfast_type",
      headerStyle: {
        fontWeight: "bold",
      },
    },
    {

      headerClasses: "bg-indigo-10 text-white",
      label: "Rates",
      align: "center",
      field: "rate",
      headerStyle: {
        fontWeight: "bold",
      },
    },



  ],

});

///getters
const getters = {
  // mostRecent_search_HotelDetails: state => state.mostRecent_search_HotelDetails,
  //Admin DAshBoard
hospital_hub_wise_bookings_rows:state=>state.hospital_hub_wise_bookings_rows,
  partner_registration_displayAll_rows: state =>
    state.partner_registration_displayAll_rows,
  agent_registration_displayAll_rows: state =>
    state.agent_registration_displayAll_rows,
  property_detailsAll_rows: state => state.property_detailsAll_rows,
  property_room_displayAll_rows: state => state.property_room_displayAll_rows,
  booking_all_rows: state => state.booking_all_rows,
  live_bookingdata_all_rows: state => state.live_bookingdata_all_rows,
  upcoming_bookingdata_all_rows: state => state.upcoming_bookingdata_all_rows,

  property_master_displayAll_rows: state =>
    state.property_master_displayAll_rows,
  agent_master_displayAll_rows: state => state.agent_master_displayAll_rows,
  feedback_data_rows: state => state.feedback_data_rows,
  accommodation_cancellation_rows: state =>
    state.accommodation_cancellation_rows,
  admin_booking_status_count: state => state.admin_booking_status_count,
  admin_Travelbooking_status_count: state =>
    state.admin_Travelbooking_status_count,
  booking_displayAll_rows: state => state.booking_displayAll_rows,
  Travelbooking_displayAll_rows: state => state.Travelbooking_displayAll_rows,
  monthwise_accbooking_rows: state => state.monthwise_accbooking_rows,
  monthwise_accCancellation_rows: state => state.monthwise_accCancellation_rows,
  hospital_data_rows: state => state.hospital_data_rows,
  property_data_rows: state => state.property_data_rows,
  propertyprice_log_rows: state => state.propertyprice_log_rows,
  datewise_booking_rows: state => state.datewise_booking_rows,
  financial_report_booking_rows: state => state.financial_report_booking_rows,

  upcoming_bookingdata_partner_rows: state =>
    state.upcoming_bookingdata_partner_rows,
  live_bookingdata_partner_rows: state => state.live_bookingdata_partner_rows,
  medical_loanlist_rows: state => state.medical_loanlist_rows,
  travel_citywise_data_rows: state => state.travel_citywise_data_rows,
  mhgenie_patient_details_rows: state => state.mhgenie_patient_details_rows,
  mhgenie_datewise_patient_details_rows: state =>
    state.mhgenie_datewise_patient_details_rows,
  call_back_data_rows: state => state.call_back_data_rows,
  call_back_allcity_rows: state => state.call_back_allcity_rows,
  get_hospital_for_callback_rows: state => state.get_hospital_for_callback_rows,
  call_back_datewise_data_rows: state => state.call_back_datewise_data_rows,
  mhsubscribers_data_rows: state => state.mhsubscribers_data_rows,
  subscriber_date_wise_data_rows: state => state.subscriber_date_wise_data_rows,
  live_bookingdata_Staff_all_rows: state =>
    state.live_bookingdata_Staff_all_rows,
  upcoming_bookingdata_Staff_all_rows: state =>
    state.upcoming_bookingdata_Staff_all_rows,
  admin_accomadation_visit_data: state => state.admin_accomadation_visit_data,
  admin_datewise_visit_data: state => state.admin_datewise_visit_data,
  CityArr: state => state.CityArr,
  roomCategoryRatesListRowForAdmin: state =>
    state.roomCategoryRatesListRowForAdmin,
admin_hospital_visit_data: state => state.admin_hospital_visit_data,
  admin_datewise_hospital_data: state => state.admin_datewise_hospital_data,
  admin_food_visit_data: state => state.admin_food_visit_data,
  admin_datewise_food_data: state => state.admin_datewise_food_data,
  admin_travel_visit_data: state => state.admin_travel_visit_data,
  admin_equipment_visit_data: state => state.admin_equipment_visit_data,
  admin_travel_datewise_visit_data: state =>
    state.admin_travel_datewise_visit_data,
  admin_equipment_datewise_visit_data: state =>
    state.admin_equipment_datewise_visit_data,
  keyPersonsDataRowForAdmin: state => state.keyPersonsDataRowForAdmin
};

//actions
const actions = {
// get hospital wise booking details
  getHospitalWiseBookingDetailsForAdmin({commit,dispatch}) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getHospitalWiseBookingDetailsForAdmin/loadBooking`)
        .then(response => {
          let rows = response.data;
          commit("GET_HOSPITAL_WISE_BOOKING_DATA",rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Partner Registration",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // get Partner Registrtion All Data
  getPartnerRegistartionAllForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getPartnerRegistartionAllForAdmin`)
        .then(response => {
          let usermenus = response.data;
          //  console.log("123654",response.data);
          commit("GET_PARTNER_REGISTRATION", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Partner Registration",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // get Agent Registrtion All Data
  getAgentRegistartionAllForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getAgentRegistartionAllForAdmin`)
        .then(response => {
          let usermenus = response.data;
          // console.log("123654", response.data);
          commit("GET_AGENT_REGISTRATION", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Agent Registration",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // get Property details All Data
  getpropertyDetailsAllForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getpropertyDetailsAllForAdmin`)
        .then(response => {
          let usermenus = response.data;
          // console.log("123654", response.data);
          commit("GET_PROPERTY_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Property ROOM details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // get Property Room details All Data
  getpropertyroomtableAllForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getpropertyroomtableAllForAdmin`)
        .then(response => {
          let usermenus = response.data;
          // console.log("123654", response.data);
          commit("GET_PROPERTY_ROOM", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Property room details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // get Property partner master Details
  getpropertypartnerAllForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getpropertypartnerAllForAdmin`)
        .then(response => {
          let usermenus = response.data;
          // console.log("123654", response.data);
          commit("GET_PARTNER_REGISTER", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Property Partner Master details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // get agent master Details
  getagentmasterAllForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getagentmasterAllForAdmin`)
        .then(response => {
          let usermenus = response.data;
          // console.log("123654", response.data);
          commit("GET_AGENT_REGISTER", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get agent Master details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // get ALL Booking Details
  getBookingAllForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getBookingAllForAdmin`)
        .then(response => {
          let usermenus = response.data;
          //  console.log("123654", response.data);
          commit("ALL_BOOKING_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Booking details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getBookingAllLiveForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getBookingAllLiveForAdmin`)
        .then(response => {
          let usermenus = response.data;
          //  console.log("123654", response.data);
          commit("ALL_LIVE_BOOKING_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Booking details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getBookingAllUpcomingForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getBookingAllUpcomingForAdmin`)
        .then(response => {
          let usermenus = response.data;
          // console.log("123654", response.data);
          commit("ALL_UPCOMING_BOOKING_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Booking details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getFeedbackDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/feedbackdata`)
        .then(response => {
          let usermenus = response.data;

          commit("FEEDBACK_DATA", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Get Feedback Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getAccommodationCancellationForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getAccommodationCancellationForAdmin`)
        .then(response => {
          let usermenus = response.data;
          //  console.log("123654", response.data);
          commit("ACC_CANCEL_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Accommodation Cancellation Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },
  getMonthwiseAccBookings({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getMonthwiseAccBookings`)
        .then(response => {
          let usermenus = response.data;

          commit("ACCBOOKING_MONTHWISE_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Get ACC Monthwise Booking Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMonthwiseAccCancellations({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getMonthwiseAccCancellations`)
        .then(response => {
          let usermenus = response.data;

          commit("ACCCANCELLATION_MONTHWISE_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Get ACC Monthwise Cancellation Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getadminBookingStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/adminDashboard/getadminBookingStatusCount")
        .then(response => {
          let rows = response.data;
          commit("SET_ADMIN_BOOKING_STATUS_COUNT", rows);
          // console.log("rows",rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Booking Data For Count",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getadminTravelBookingStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/adminDashboard/getadminTravelBookingStatusCount")
        .then(response => {
          let rows = response.data;
          commit("SET_ADMIN_TRAVELBOOKING_STATUS_COUNT", rows);
          // console.log("rows",rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Booking Data For Count",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getBookingAllDisplayForAdmin({ commit, dispatch }, payload) {
    // console.log("ssss",payload)
    if (typeof payload == "undefined") {
      payload = "ALL";
      // console.log(payload)
    } else {
      payload = payload;
      // console.log(payload)
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getBookingAllDisplayForAdmin/${payload}`)
        .then(response => {
          let usermenus = response.data;
          //  console.log("Bank Details",response.data);
          commit("SET_BOOKING_ALLDISPLAY_FORADMIN", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading  Booking",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTravelBookingAllDisplayForAdmin({ commit, dispatch }, payload) {
    // console.log("ssss",payload)
    if (typeof payload == "undefined") {
      payload = "ALL";
      // console.log(payload)
    } else {
      payload = payload;
      // console.log(payload)
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getTravelBookingAllDisplayForAdmin/${payload}`)
        .then(response => {
          let usermenus = response.data;
          //  console.log(response.data);
          commit("SET_TRAVELBOOKING_ALLDISPLAY_FORADMIN", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Travel  Booking",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  paymentForPartnerSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/adminDashboard/paymentForPartnerSaving", formData, {})
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {}, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Payment  Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  sendSMSToUserRoutes({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/adminDashboard/sendSMSToUserRoutes`, payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {}, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Send SMS  Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  sendSMSToPartnerRoutes({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/adminDashboard/sendSMSToPartnerRoutes`, payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {}, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Send SMS  Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  sendEmailToUserRoutes({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/adminDashboard/sendEmailToUserRoutes`, payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {}, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Send Email  Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  sendEmailToPartnerRoutes({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/adminDashboard/sendEmailToPartnerRoutes`, payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {}, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Send Email  Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  gethospitalmasterDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    api
      .get(`/adminDashboard/gethospitalmasterDetails`)
      .then(response => {
        let usermenus = response.data;
        // console.log(response.data);
        commit("SET_HOSPITALMASTER_GETTING_DETAILS", usermenus);
        // console.log(usermenus);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Hospital Master details",
            type: "negative"
          },
          { root: true }
        );
      });
  },

  getpropertymasterDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    api
      .get(`/adminDashboard/getpropertymasterDetails`)
      .then(response => {
        let usermenus = response.data;
        // console.log(response.data);
        commit("SET_PROPERTYMASTER_GETTING_DETAILS", usermenus);
        // console.log(usermenus);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Hospital Master details",
            type: "negative"
          },
          { root: true }
        );
      });
  },

  updatepropertypriceDetails({ dispatch }, payload) {
    // console.log("update",payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/adminDashboard/updatepropertypriceDetails/${payload.txn_id}/${payload.partner_id}/${payload.room_category}/${payload.room_type}`,
          payload
        )
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
              msg: "Failed To Update Property Room Price Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getpropertypricelogdetails({ commit, dispatch }, payload) {
    //  console.log("table data",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/adminDashboard/getpropertypricelogdetails/${payload.property_txn_id}/${payload.partner_id}/${payload.room_category}/${payload.room_type}`
        )
        .then(response => {
          let rows = response.data;
          commit("PROPERTY_PRICE_LOG", rows);
          // console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Price Log Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getDateWiseBookingTableForAdmin({ commit, dispatch }, payload) {
    // console.log("ssss",payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/DateWiseBookingTable`, {
          params: {
            fromDate: payload.fromDate,
            toDate: payload.toDate,
            property_name: payload.property_name.sub_property_name
          }
        })
        .then(response => {
          let usermenus = response.data;
          commit("DATEWISE_ACC_BOOKING_DATA", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Datewise Booking",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  // //Financial Report Get Methods Start

  // getFinancialBookingTableForAdmin({ commit, dispatch },payload) {

  //    dispatch("alerts_loaders/startLoading", "", { root: true });
  //    setTimeout(() => {
  //      dispatch("alerts_loaders/stopLoading", "", { root: true });
  //      api
  //      .get(`/adminDashboard/FinancialBookingTable`, {
  //        params: {
  //          fromDate: payload.fromDate,
  //          toDate: payload.toDate
  //        }
  //      })
  //      .then(response => {
  //        let usermenus = response.data;
  //        commit("FINANCIAL_REPORT_ACC_BOOKING_DATA", usermenus);
  //        console.log("usermenus",usermenus);
  //      })
  //        .catch(error => {
  //          console.log(error);
  //          dispatch(
  //            "alerts_loaders/showAlert",
  //            {
  //              msg: "Error While Loading Financial Booking",
  //              type: "negative"
  //            },
  //            { root: true }
  //          );
  //        });
  //    }, 1500);
  //  },

  // //Financial Report Get Methods End

  getBookingLiveForPartner({ commit, dispatch }, payload) {
    //  console.log("dsfsdf",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getBookingLiveForPartner/${payload}`)
        .then(response => {
          let usermenus = response.data;
          //   console.log("123654", response.data);
          commit("ALL_LIVE_BOOKING_PARTNER_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Booking details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getBookingAllUpcomingForPartner({ commit, dispatch }, payload) {
    // console.log("dsfsdf",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getBookingUpcomingForPartner/${payload}`)
        .then(response => {
          let usermenus = response.data;
          //  console.log("123654", response.data);
          commit("ALL_UPCOMING_BOOKING_PARTNER_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Booking details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getMedicalLoanListDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getMedicalLoanListDetails`)
        .then(response => {
          let usermenus = response.data;
          commit("MEDICAL_LOAN_LISTDETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get medical loan list details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getDateWiseMedicalLoanListDetails({ commit, dispatch }, payload) {
    console.log(payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getDateWiseMedicalLoanListDetails`, {
          params: {
            fromDate: payload.fromDate,
            toDate: payload.toDate
          }
        })
        .then(response => {
          let usermenus = response.data;
          commit("MEDICAL_LOAN_DATEWISE_LISTDETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get medical loan list details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  async getTravelCitywiselocationForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    try {
      const response = await api.get(
        `/adminDashboard/getTravelCitywiselocationForAdmin`
      );
      let usermenus = response.data;
      // console.log("123654", response.data);
      commit("TRAVEL_CITYWISE_LOCATION", usermenus);
    } catch (error) {
      console.log(error);
      dispatch(
        "alerts_loaders/showAlert",
        {
          msg: "Error while getting Travel Location citywise details",
          type: "negative"
        },
        { root: true }
      );
    }
  },
  async savetravellocationdetails({ dispatch }, payload) {
    // console.log(payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    try {
      const response = await api.post(
        "/adminDashboard/savetravellocationdetails",
        payload
      );
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(
        `alerts_loaders/showAlert`,
        { msg: "Failed To Save Citywise Location  Data", type: "negative" },
        { root: true }
      );
    }
  },
  updatetravellocationdetails({ dispatch }, payload) {
    // console.log("update",payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/adminDashboard/updatetravellocationdetails/${payload.sno}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTravelCitywiselocationForAdmin");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Update Location Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getmhgeniepatientDetailsforadmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getmhgeniepatientDetailsforadmin`)
        .then(response => {
          let usermenus = response.data;
          commit("GET_PATIENT_DATA", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Get MH Genie Patient Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getAllCallBackmsgData({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getAllCallBackmsgData`)
        .then(response => {
          let usermenus = response.data;
          commit("GET_CALLBACK_DATA", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Get CallBack Message  Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  loadAllCitiesforCallBack({ commit }) {
    api
      .get(`/adminDashboard/getAllCityForCallBack`)
      .then(response => {
        let rows = response.data;

        commit("SET_ALL_CITIES_CALLBACK", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },

  loadAllHospitalForCall({ commit }, cities) {
    // console.log("cities",cities);
    api
      .get(`/adminDashboard/${cities.city_id}`)
      .then(response => {
        let rows = response.data;
        commit("SET_ALL_Hospital_For_CallBack", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  async callbackdataSaving({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    try {
      const response = await api.post(
        "/adminDashboard/callbackdataSaving",
        payload
      );
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(
        `alerts_loaders/showAlert`,
        { msg: "Failed To Save CallBack Message  Data", type: "negative" },
        { root: true }
      );
    }
  },

  //Get Date Wise call back messages Data
  getDateWiseAllCallBackMsgData({ commit, dispatch }, payload) {
    // console.log('kiran',payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getDateWiseAllCallBackMsgData`, {
          params: {
            fromDate: payload.fromDate,
            toDate: payload.toDate
          }
        })
        .then(response => {
          let usermenus = response.data;
          // console.log('usermenus',usermenus)
          commit("GET_DATEWISE_CALLBACK_DATA", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Get CallBack Message  Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getSubscriberDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/getSubscriberDetails/sss`)
        .then(response => {
          let usermenus = response.data;
          console.log("1236547", response.data);
          commit("SET_SUBSCRIBER_DETAILS", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Subscribers Emails",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  emailSubscribeSaving({ dispatch }, payload) {
    //const email = payload.subscriber_email_id;
    //console.log(email)
    console.log("ooooo", payload);
    console.log(payload);
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/adminDashboard/emailSubscribeSavingMethod", payload)
        .then(response => {
          if (response.data && response.data.message) {
            dispatch(
              `alerts_loaders/showAlert`,
              { msg: response.data.message, type: "positive" },
              { root: true }
            );
          } else {
            dispatch(
              `alerts_loaders/showAlert`,
              {
                //msg: response.data && response.data.message && "Failed To Travel Update Details Data",
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
              msg: "Failed To Travel Update Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getdatewiseSubscriberDetails({ commit, dispatch }, payload) {
    console.log("ravi", payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    api
      .get("/adminDashboard/getdatewiseSubscriberDetails/mmm", {
        params: {
          fromDate: payload.fromDate,
          toDate: payload.toDate
        }
      })
      .then(response => {
        let usermenus = response.data;
        //console.log(response.data);
        commit("SET_SUBSCRIBERS_DATE_WISE_GETTING_DETAILS", usermenus);
        console.log(usermenus);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Subscribers Email details",
            type: "negative"
          },
          { root: true }
        );
      });
  },

  getBookingAllStaffLiveForAdmin({ commit, dispatch }, payload) {
    // console.log("zonecondition", payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/adminDashboard/getBookingAllStaffLiveForAdmin/sss/${payload.zone}`
        )
        .then(response => {
          let usermenus = response.data;
          //  console.log("123654", response.data);
          commit("ALL_LIVE_STAFF_BOOKING_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Booking details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getBookingAllUpcomingStaffForAdmin({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/adminDashboard/getBookingAllUpcomingStaffForAdmin/sss/${payload.zone}`
        )
        .then(response => {
          let usermenus = response.data;
          // console.log("123654", response.data);
          commit("ALL_UPCOMING_STAFF_BOOKING_TABLE", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Booking details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  loadAccomadationPartnerDataForAdminReport({ commit, dispatch }) {
    //onsole.log(payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/adminDashboard//loadAccomadationPartnerDataForAdminReport/loadReport`
        )
        .then(response => {
          //console.log(response)
          let rows = response.data;

          commit("GET_ADMIN_ACCOMODATION_VISIT_DATA", rows);
          // console.log("data",rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Accomadation Visit Data details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  addRemaksMethodSaving({ dispatch }, payload) {
    // console.log(payload);
    //console.log(employee_name)
    //console.log(formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/adminDashboard/savingRemarksDetails", payload)
        .then(response => {
          //console.log(response)
          //if (response.status >= 200 && response.status < 300) {
            // dispatch(
            //   "alerts_loaders/showAlert",
            //   // { msg: "Data successfully saved!", type: "positive" },
            //   { root: true }
            // );
          //}
        })
        .catch(error => {
          // Handle the error response from the server
          let errorMessage =
            "Failed To Save Accommodation Partner Details Data";

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errorMessage = error.response.data.message;
          }

          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: errorMessage,
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getDateWiseAccomadationDetails({ commit, dispatch }, payload) {
    //console.log('ravi',payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    api
      .get(`/adminDashboard/getDateWiseAccomadationDetails/date`, {
        params: {
          fromDate: payload.fromDate,
          toDate: payload.toDate,
          city: payload.city.city
        }
      })
      .then(response => {
        let rows = response.data.result;
        //console.log(response);
        commit("GET_DATEWISE_ACCOMADATION_VISIT_DETAILS", rows);
        //console.log(rows);
        //console.log(this.admin_accomadation_visit_data)
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Accomadation Date Wise Visit details",
            type: "negative"
          },
          { root: true }
        );
      });
  },

loadCityArrForAdmin({ commit }) {
    api
      .get(`/adminDashboard/loadCityArrForAdmin/city`)
      .then(response => {
        commit("GET_CITY_ARR", response.data);
        //console.log(response.data)
        //console.log("Load Vehicle Type Data",response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  verifyAccomadationPartnerByAdmin({ dispatch }, payload) {
    //console.log('s-no',payload)

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/adminDashboard/verifyAccomadationPartnerByAdmin/${payload.s_no}`,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )

        .then(response => {
          //console.log(response)
          if (response.status >= 200 && response.status < 300) {
            dispatch(
              "alerts_loaders/showAlert",
              { msg: "Data successfully saved!", type: "positive" },
              { root: true }
            );
          }
        })
        .catch(error => {
          // Handle the error response from the server
          let errorMessage =
            "Failed To Save Accommodation Partner Details Data";

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errorMessage = error.response.data.message;
          }

          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: errorMessage,
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  //Ravi kiran Load Room Categories List Table For Admin
  loadRoomCategoriesListTableForAdmin({ commit }, payload) {
    let visitId = payload.fieldVisitId;
    //console.log('payload',payload)
    api
      .get(`/adminDashboard/loadRoomCategoriesListTableForAdmin/${visitId}`)

      .then(response => {
        commit("GET_ROOM_CATEGORIES_LIST_FOR_ADMIN", response.data);

        //console.log('rk',response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },

  //Ravi kiran Load Data hospital field visit for admin
  loadHospitalPartnerDataForAdminReport({ commit, dispatch }) {
    //onsole.log(payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/loadHospitalPartnerDataForAdminReport/loadReport`)
        .then(response => {
          //console.log(response)
          let rows = response.data;

          commit("GET_ADMIN_HOSPITLAL_VISIT_DATA", rows);
          // console.log("data",rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Accomadation Visit Data details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  //Ravi kiran Date Wise Load Data hospital field visit for admin
  getDateWiseHospitalDetails({ commit, dispatch }, payload) {
    // console.log('ravi',payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    api
      .get(`/adminDashboard/getDateWiseHospitalDetails/date`, {
        params: {
          fromDate: payload.fromDate,
          toDate: payload.toDate,
          city: payload.city.city
        }
      })
      .then(response => {
        let rows = response.data.result;
        //console.log(response);
        commit("GET_ADMIN_DATE_WISE_HOSPITLAL_VISIT_DATA", rows);
        // console.log('rows',rows);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Hospital Date Wise Visit details",
            type: "negative"
          },
          { root: true }
        );
      });
  },

  addRemaksMethodSavingForHosptial({ dispatch }, payload) {
    // console.log(payload);
    //console.log(employee_name)
    //console.log(formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/adminDashboard/addRemaksMethodSavingForHosptial", payload)
        .then(response => {
          // console.log(response);
          if (response.status >= 200 && response.status < 300) {
            dispatch(
              "alerts_loaders/showAlert",
              { msg: "Data successfully saved!", type: "positive" },
              { root: true }
            );
          }
        })
        .catch(error => {
          // Handle the error response from the server
          let errorMessage =
            "Failed To Save Accommodation Partner Details Data";

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errorMessage = error.response.data.message;
          }

          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: errorMessage,
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  verifyHospitalPartnerByAdmin({ dispatch }, payload) {
    // console.log("s-no", payload);

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/adminDashboard/verifyHospitalPartnerByAdmin/${payload.s_no}`, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

        .then(response => {
          //console.log(response)
          if (response.status >= 200 && response.status < 300) {
            // dispatch(
            //   "alerts_loaders/showAlert",
            //   { msg: "Data successfully saved!", type: "positive" },
            //   { root: true }
            // );
          }
        })
        .catch(error => {
          // Handle the error response from the server
          let errorMessage = "Failed To Verify Hospital Partner Details Data";

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errorMessage = error.response.data.message;
          }

          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: errorMessage,
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  //Ravi kiran Get Food Field Visit Data for Admin
  loadFoodPartnerDataForAdminReport({ commit, dispatch }) {
    //onsole.log(payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard/loadFoodPartnerDataForAdminReport/loadReport`)
        .then(response => {
          //console.log(response)
          let rows = response.data;

          commit("GET_ADMIN_FOOD_VISIT_DATA", rows);
          // console.log("data",rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Accomadation Visit Data details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  getDateWiseFoodDetails({ commit, dispatch }, payload) {
    // console.log('ravi')
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    api
      .get(`/adminDashboard/getDateWiseFoodDetails/date`, {
        params: {
          fromDate: payload.fromDate,
          toDate: payload.toDate,
          city: payload.city.city
        }
      })
      .then(response => {
        let rows = response.data.result;
        // console.log("finalData",response);
        commit("GET_DATEWISE_FOOD_DETAILS", rows);
        //  console.log("rowsData",rows);
        //console.log(this.admin_accomadation_visit_data)
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Accomadation Date Wise Visit details",
            type: "negative"
          },
          { root: true }
        );
      });
  },

  addFoodRemarksMethodSaving({ dispatch }, payload) {
    // console.log(payload);
    //console.log(employee_name)
    //console.log(formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/adminDashboard/savingFoodRemarksDetails", payload)
        .then(response => {
          //console.log(response)
          if (response.status >= 200 && response.status < 300) {
            // dispatch(
            //   "alerts_loaders/showAlert",
            //   { msg: "", type: "positive" },
            //   { root: true }
            // );
          }
        })

        .catch(error => {
          // Handle the error response from the server
          let errorMessage = "Failed To Save Food Partner Remark Details Data";

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errorMessage = error.response.data.message;
          }

          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: errorMessage,
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  verifyAdminFormDataSaving({ dispatch }, payload) {
    // console.log("viewStatus---.js", payload)
    //const parsedData = JSON.parse(formData);
    //console.log('s-no',parsedData)
    // console.log(payload.s_no);

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/adminDashboard/updateAdminFoodStatus/${payload.s_no}`, payload, {
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
        });
    }, 1000);
  },

  loadTravelPartnerDataForAdminReport({ commit, dispatch }) {
    //onsole.log(payload)
    // console.log("admin")
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/adminDashboard//loadTravelPartnerDataForAdminReport/loadReport`)
        .then(response => {
          // console.log(response)
          let rows = response.data;
          // console.log("sai",rows)

          commit("GET_ADMIN_TRAVEL_VISIT_DATA", rows);
          // console.log("datasai",rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Accomadation Visit Data details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  loadEquipmentPartnerDataForAdminReport({ commit, dispatch }) {
    //onsole.log(payload)
    // console.log("admin")
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/adminDashboard//loadEquipmentPartnerDataForAdminReport/loadReport`
        )
        .then(response => {
          // console.log(response)
          let rows = response.data;
          // console.log("sai",rows)

          commit("GET_ADMIN_EQUIPMENT_VISIT_DATA", rows);
          // console.log("datasai",rows);
        })
        .catch(error => {
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While get Accomadation Visit Data details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1000);
  },

  addTravelRemaksMethodSaving({ dispatch }, payload) {
    // console.log("travel", payload);
    //console.log(employee_name)
    //console.log(formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/adminDashboard/savingTravelRemarksDetails", payload)
        .then(response => {
          //console.log(response)
          if (response.status >= 200 && response.status < 300) {
            // dispatch(
            //   "alerts_loaders/showAlert",
            //   { msg: "Data successfully saved!", type: "positive" },
            //   { root: true }
            // );
          }
        })
        .catch(error => {
          // Handle the error response from the server
          let errorMessage = "Failed To Save Travel Partner Details Data";

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errorMessage = error.response.data.message;
          }

          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: errorMessage,
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  addEquipmentRemaksMethodSaving({ dispatch }, payload) {
    // console.log("equipment", payload);
    //console.log(employee_name)
    //console.log(formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/adminDashboard/savingEquipmentRemarksDetails", payload)
        .then(response => {
          //console.log(response)
          if (response.status >= 200 && response.status < 300) {
            // dispatch(
            //   "alerts_loaders/showAlert",
            //   { msg: "Data successfully saved!", type: "positive" },
            //   { root: true }
            // );
          }
        })
        .catch(error => {
          // Handle the error response from the server
          let errorMessage = "Failed To Save Travel Partner Details Data";

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errorMessage = error.response.data.message;
          }

          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: errorMessage,
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getDateWiseTravelDetails({ commit, dispatch }, payload) {
    //console.log('sai',payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    api
      .get(`/adminDashboard/getDateWiseTravelDetails/date`, {
        params: {
          fromDate: payload.fromDate,
          toDate: payload.toDate,
          city: payload.city.city
        }
      })
      .then(response => {
        let rows = response.data.result;

        //  console.log(response);
        commit("GET_DATEWISE_TRAVEL_VISIT_DETAILS", rows);
        //console.log(rows);
        //console.log(this.admin_accomadation_visit_data)
      })
      .catch(error => {
        console.log(error);
        // console.log("admin");
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Travel Date Wise Visit details",
            type: "negative"
          },
          { root: true }
        );
      });
  },

  getDateWiseEquipmentDetails({ commit, dispatch }, payload) {
    // console.log('sai',payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    dispatch("alerts_loaders/stopLoading", "", { root: true });

    api
      .get(`/adminDashboard/getDateWiseEquipmentDetails/date`, {
        params: {
          fromDate: payload.fromDate,
          toDate: payload.toDate,
          city: payload.city.city
        }
      })
      .then(response => {
        let rows = response.data.result;

        //  console.log(response);
        commit("GET_DATEWISE_EQUIPMENT_VISIT_DETAILS", rows);
        // console.log('rows',rows);
        //console.log(this.admin_accomadation_visit_data)
      })
      .catch(error => {
        console.log(error);
        // console.log("admin");
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Travel Date Wise Visit details",
            type: "negative"
          },
          { root: true }
        );
      });
  },

  VerifyViewTravelPartnerVisitDetailsSaving({ dispatch }, formData) {
    // console.log("verifying", formData);
    let id = formData.s_no;
    // console.log("id", id);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/adminDashboard/verifyViewTravelDetails/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: "Data Verified Successfully...", type: "positive" },
            { root: true }
          );
        });
    }, 1000);
  },

  VerifyViewEquipmentPartnerDetailsSaving({ dispatch }, formData) {
    // console.log("verifying", formData);
    let id = formData.s_no;
    // console.log("id", id);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(`/adminDashboard/verifyViewEquipmentDetails/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: "Data Verified Successfully...", type: "positive" },
            { root: true }
          );
        });
    }, 1000);
  },

  loadDepartmentsTableForAdmin({ commit }, payload) {
    let visitId = payload.fieldVisitId;
    api
      .get(`/adminDashboard/loadDepartmentsTableForAdmin/${visitId}`)

      .then(response => {
        commit("GET_DEPARTMENTS_LIST_FOR_ADMIN", response.data.data);

        // console.log('rk',response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },












};

// mutations

const mutations = {
  //Admin DAshBoard
GET_HOSPITAL_WISE_BOOKING_DATA(state,rows) {
    state.hospital_hub_wise_bookings_rows = rows.data
  },
  GET_PARTNER_REGISTRATION(state, rows) {
    state.partner_registration_displayAll_rows = rows.data;
  },
  GET_AGENT_REGISTRATION(state, rows) {
    state.agent_registration_displayAll_rows = rows.data;
  },
  GET_PROPERTY_DETAILS(state, rows) {
    state.property_detailsAll_rows = rows;
  },
  GET_PROPERTY_ROOM(state, rows) {
    state.property_room_displayAll_rows = rows.data;
  },
  GET_PARTNER_REGISTER(state, rows) {
    state.property_master_displayAll_rows = rows.data;
  },
  GET_AGENT_REGISTER(state, rows) {
    state.agent_master_displayAll_rows = rows.data;
  },
  ALL_BOOKING_TABLE(state, rows) {
    state.booking_all_rows = rows;
  },

  ALL_LIVE_BOOKING_TABLE(state, rows) {
    state.live_bookingdata_all_rows = rows.data;
  },

  ALL_UPCOMING_BOOKING_TABLE(state, rows) {
    state.upcoming_bookingdata_all_rows = rows.data;
  },

  FEEDBACK_DATA(state, rows) {
    state.feedback_data_rows = rows;
  },
  ACC_CANCEL_TABLE(state, rows) {
    state.accommodation_cancellation_rows = rows;
  },
  ACCBOOKING_MONTHWISE_TABLE(state, rows) {
    state.monthwise_accbooking_rows = rows;
  },
  ACCCANCELLATION_MONTHWISE_TABLE(state, rows) {
    state.monthwise_accCancellation_rows = rows;
  },
  SET_ADMIN_BOOKING_STATUS_COUNT(state, rows) {
    state.admin_booking_status_count = rows.data;
  },
  SET_ADMIN_TRAVELBOOKING_STATUS_COUNT(state, rows) {
    state.admin_Travelbooking_status_count = rows.data;
  },
  SET_BOOKING_ALLDISPLAY_FORADMIN(state, rows) {
    state.booking_displayAll_rows = rows;
  },
  SET_TRAVELBOOKING_ALLDISPLAY_FORADMIN(state, rows) {
    state.Travelbooking_displayAll_rows = rows;
  },
  SET_HOSPITALMASTER_GETTING_DETAILS(state, rows) {
    state.hospital_data_rows = rows;
  },
  SET_PROPERTYMASTER_GETTING_DETAILS(state, rows) {
    state.property_data_rows = rows;
  },
  PROPERTY_PRICE_LOG(state, rows) {
    state.propertyprice_log_rows = rows.data;
  },
  DATEWISE_ACC_BOOKING_DATA(state, rows) {
    state.datewise_booking_rows = rows.data;
  },
  FINANCIAL_REPORT_ACC_BOOKING_DATA(state, rows) {
    state.financial_report_booking_rows = rows.data;
  },

  ALL_UPCOMING_BOOKING_PARTNER_TABLE(state, rows) {
    state.upcoming_bookingdata_partner_rows = rows.data;
  },
  ALL_LIVE_BOOKING_PARTNER_TABLE(state, rows) {
    state.live_bookingdata_partner_rows = rows.data;
  },
  MEDICAL_LOAN_LISTDETAILS(state, rows) {
    state.medical_loanlist_rows = rows.data;
  },
  TRAVEL_CITYWISE_LOCATION(state, rows) {
    state.travel_citywise_data_rows = rows;
  },
  GET_PATIENT_DATA(state, rows) {
    state.mhgenie_patient_details_rows = rows.data;
  },

  GET_CALLBACK_DATA(state, rows) {
    state.call_back_data_rows = rows.data;
  },

  SET_ALL_CITIES_CALLBACK(state, rows) {
    state.call_back_allcity_rows = rows;
  },

  SET_ALL_Hospital_For_CallBack(state, rows) {
    state.get_hospital_for_callback_rows = rows;
  },
  GET_DATEWISE_CALLBACK_DATA(state, rows) {
    state.call_back_datewise_data_rows = rows.data;
  },
  SET_SUBSCRIBER_DETAILS(state, rows) {
    state.mhsubscribers_data_rows = rows.data;
  },

  SET_SUBSCRIBERS_DATE_WISE_GETTING_DETAILS(state, rows) {
    state.subscriber_date_wise_data_rows = rows.data;
  },

  ALL_UPCOMING_STAFF_BOOKING_TABLE(state, rows) {
    state.upcoming_bookingdata_Staff_all_rows = rows.data;
  },

  ALL_LIVE_STAFF_BOOKING_TABLE(state, rows) {
    state.live_bookingdata_Staff_all_rows = rows.data;
  },
  GET_ADMIN_ACCOMODATION_VISIT_DATA(state, rows) {
    state.admin_accomadation_visit_data = rows.data;
  },
  GET_DATEWISE_ACCOMADATION_VISIT_DETAILS(state, rows) {
    state.admin_datewise_visit_data = rows;
  },
  GET_CITY_ARR(state, rows) {
    state.CityArr = rows.data;
},
 GET_ROOM_CATEGORIES_LIST_FOR_ADMIN(state, rows) {
  state.roomCategoryRatesListRowForAdmin = rows.data;
},
  GET_ADMIN_HOSPITLAL_VISIT_DATA(state, rows) {
    state.admin_hospital_visit_data = rows.data;
  },
  GET_ADMIN_DATE_WISE_HOSPITLAL_VISIT_DATA(state, rows) {
    state.admin_datewise_hospital_data = rows;
  },
  GET_ADMIN_FOOD_VISIT_DATA(state, rows) {
    state.admin_food_visit_data = rows.data;
  },
  GET_DATEWISE_FOOD_DETAILS(state, rows) {
    state.admin_datewise_food_data = rows;
  },
  GET_ADMIN_TRAVEL_VISIT_DATA(state, rows) {
    state.admin_travel_visit_data = rows.data;
  },

  GET_ADMIN_EQUIPMENT_VISIT_DATA(state, rows) {
    state.admin_equipment_visit_data = rows.data;
  },
  GET_DATEWISE_TRAVEL_VISIT_DETAILS(state, rows) {
    state.admin_travel_datewise_visit_data = rows;
  },
  GET_DATEWISE_EQUIPMENT_VISIT_DETAILS(state, rows) {
    state.admin_equipment_datewise_visit_data = rows;
  },
  GET_DEPARTMENTS_LIST_FOR_ADMIN(state, rows) {
    state.keyPersonsDataRowForAdmin = rows;
  }
};

export const adminDashboard = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
