import { api } from "boot/axios";
//intial state
const state = () => ({
  food_restaurant_data_rows_admin: [],
  agent_pending_details: [],
  agent_pending_columns: [
    {
      align: "center",
      label: "Agent Id",
      field: "agent_id",
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
      headerStyle: {
        fontWeight: "bold"
      },
      align: "center"
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
  agent_partner_registration_status_count: [],
  agent_partner_registration_rows: [],
  agent_partner_registration_columns: [
    {
      align: "center",
      label: "Agent ID",
      field: "agent_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Take Action ",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
      align: "center"

    },
    {
      name: "status",
      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
      // headerClasses: "text-bold "
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
      label: "Agent Partner Count",
      field: "agent_count",
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

  ],
  hotelData_rows: [],
  hotelData_columns: [
    {
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "desc",
      required: true,
      name: "room_type",
      align: "center",
      label: "Types Of Room",
      field: "room_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Room Amenities",
      field: "facilities",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Special Offer / Day",
      field: "property_specialOffer",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "schedule",
      align: "center",
      label: "Scheduling",
      field: "schedule",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",
      align: "center",
      label: "Status",
      field: "status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  agent_registration_rows: [],
  agent_registration_columns: [
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
      align: "center",
      label: "Agent ID",
      field: "agent_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Agent Sub ID",
      field: "agent_sub_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Agent Name",
      field: row => row.agent_name,
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "left",
    //   label: "Agent Partner Sub Name",
    //   // field: row => row.agent_sub_name,
    //   // format: val => `${val}`,
    //   field: "agent_sub_name",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
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
      label: "Status",
      field: "status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  agent_data_rows: [],
  agent_data_columns: [
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
      field: row => row.agent_name,
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Agent Partner Sub Name",
      // field: row => row.agent_sub_name,
      // format: val => `${val}`,
      field: "agent_sub_name",
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
      label: "Latitude",
      field: "latitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Longitude",
      field: "longitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  medical_stores_rows: [],
  medical_stores_columns: [
    {
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      name: "actions",
      label: "Actions",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      align: "left",
      label: "Medical Store",
      field: "medical_store_name",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      align: "left",
      label: "Phone",
      field: "phone",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      align: "left",
      label: "Contact Person",
      field: "name_of_contact_person",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      align: "left",
      label: "Opening Time",
      field: "opening_time",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      align: "left",
      label: "Closing Time",
      field: "closing_time",
      headerClasses: "bg-indigo-10 text-white",
    }
  ],
  food_partner_registration_status_count: [],
  property_partner_registration_status_count: [],
  property_partner_registration_rows: [],
  property_partner_registration_columns: [
    {
      name: "index",
      align: "center",
      label: "S.no",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Take Action",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",
      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_name",
      align: "left",
      label: "Property Partner Name",
      field: "agent_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_sub_name",
      align: "left",
      label: "Sub Partner Name",
      field: "agent_sub_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "left",
    //   label: "No.of Properties",
    //   field: "property_count",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      name: "phone",
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "email_id",
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

  ],
  partners_data_forAdmin_rows: [],
  partners_data_forAdmin_columns: [
    {
      align: "center",
      label: "S.no",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Take Action",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",

      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "account_id",
      align: "center",
      label: "Account Id",
      field: "account_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "partner_id",
      align: "center",
      label: "Partner Id",
      field: "partner_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_name",
      align: "left",
      label: "Property Partner Name",
      field: "agent_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_sub_name",
      align: "left",
      label: "Sub Partner Name",
      field: "agent_sub_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "phone",
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "email_id",
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
  ],
  partners_approvals_data_rows: [],
  partners_approvals_data_columns: [
    {
      name: "index",

      align: "center",
      label: "S.no",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Take Action",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",
      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "account_id",
      align: "center",
      label: "Account Id",
      field: "account_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "partner_id",
      align: "center",
      label: "Partner Id",
      field: "partner_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_name",
      align: "left",
      label: "Property Partner Name",
      field: "agent_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_sub_name",
      align: "left",
      label: "Sub Partner Name",
      field: "agent_sub_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "phone",
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "email_id",
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

  ],
  property_data_rows: [],
  property_data_columns: [
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
      label: "Sub Property Name",
      field: "sub_property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Property Type",
      field: "property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Phone",
      field: "property_phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Email",
      field: "property_email",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Latitude",
      field: "property_latitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Longitude",
      field: "property_longitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  rooms_data_rows: [],
  rooms_data_columns: [
    {
      align: "index",
      label: "Sno",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "VIEW",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions1",
      label: "EDIT ",
      field: "actions1",
      headerClasses: "bg-indigo-10 text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Sub Property Name",
      field: "sub_property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Property Type",
      field: "property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "No Of Room Available",
      field: "no_of_avail_rooms",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Type of Room",
      field: "room_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Facilities",
      field: "facilities",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Price",
      field: "price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Units",
      field: "units",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  property_registration_rows: [],
  property_registration_columns: [
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
    // {
    //   align: "center",
    //   label: "Partner Id",
    //   field: "partner_id",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    // {
    //   align: "center",
    //   label: "Partner Sub Id",
    //   field: "partner_sub_id",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
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
      label: "Partner Sub Name",
      field: "agent_sub_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Property Type",
      field: "property_type",
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
      label: "Status",
      field: "status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  // food_partner_registration_status_count: [],
  food_partner_registration_rows: [],
  food_partner_registration_columns: [
    {
      name: "index",
      align: "center",
      label: "S.no",
      field: "index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",
      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_name",
      align: "left",
      label: "Food Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "food_count",
      align: "left",
      label: "Food Partner Count",
      field: "food_count",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_name",
      align: "left",
      label: "Food Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "phone",
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "email_id",
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

  ],
  food_registration_rows: [],
  food_registration_columns: [
    {
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "center",
    //   label: "Food Id",
    //   field: "agent_id",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    // {
    //   align: "center",
    //   label: "Food Sub Id",
    //   field: "agent_sub_id",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "left",
      label: "Food Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Food Sub Partner Name",
      field: "agent_sub_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  foodDetails_rows: [],
  food_sub_partner_arr: [],
  food_partner_arr: [],
  foodDetails_columns: [
    {
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "action",
      label: "Edit/update",
      field: "action",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "kitchen_name",
      align: "left",
      label: "Kitchen Name",
      field: "kitchen_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "kitchen_type",
      align: "left",
      label: "Kitchen Type",
      field: "kitchen_type",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "item_name",
      align: "left",
      label: "Food Item Name",
      field: "item_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "food_items_name",
      label: "Food Items List",
      align: "left",
      field: "food_items_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "units",
      label: "Units",
      align: "left",
      field: "units",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "price",
      label: "Price",
      align: "left",
      field: "price",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "food_image",
      label: "Upload Food Image",
      align: "left",
      field: "food_image",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  property_transport_registration_status_count: [],
  travel_partner_names_arr: [],
  food_partner_registration_rows_staff:[],
  sub_travel_partner_names_arr: [],
  transport_reg_rows: [],
  transport_reg_rows_staff:[],
  transport_reg_columns: [
    {
      name: "index",
      align: "center",
      label: "S.no",
      field: "index",
      headerClasses: "bg-primary text-white"
    },
  {
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",
      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-primary text-white"
    },
    // {
    //   name: "Transport ID",
    //   align: "center",
    //   label: "Transport ID",
    //   field: "agent_id",
    //   headerClasses: "bg-primary text-white"
    // },
    {
      name: "agent_name",
      align: "left",
      label: "Travel Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "transport_count",
      align: "left",
      label: "No.of Travellers",
      field: "transport_count",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "phone",
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "email_id",
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white"
    },

  ],
  equipment_partner_registration_status_count: [],
  equipment_partner_registration_rows: [],
  equipment_partner_registration_columns: [
    {
      name: "index",
      align: "center",
      label: "S.no",
      field: "index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View ",
      field: "actions",
      align: "center",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",
      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "agent_name",
      align: "left",
      label: "Equipment Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "equipment_count",
      align: "left",
      label: "Equipment Count",
      field: "equipment_count",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "phone",
      align: "left",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "email_id",
      align: "left",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

  ],
  transport_registration_ex_rows: [],
  transport_registration_ex_columns: [
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
    // {
    //   align: "center",
    //   label: "Transport ID",
    //   field: "agent_id",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    // {
    //   align: "center",
    //   label: "Transport Sub ID",
    //   field: "transport_sub_id",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "left",
      label: "Travel Partner Name",
      field: "agent_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Travel Sub Partner Name",
      field: "transport_sub_name",
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
      label: "Status",
      field: "status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  travel_item_rows: [],
  travel_item_columns: [
    {
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "action",
      label: "Edit",
      field: "action",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "vehicle_name",
      align: "left",
      label: "Vehicle Name",
      field: "vehicle_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "Day Price",
      align: "left",
      label: "Day Price",
      field: "day_price",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "Night Price",
      align: "left",
      label: "Night price",
      field: "night_price",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "No of seats",
      align: "left",
      label: "No of seats",
      field: "no_of_seaters",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "units",
      align: "left",
      label: "Units",
      field: "units",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "vehicle_image",
      label: "Upload Vehicle Image",
      align: "left",
      field: "vehicle_image",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    }
  ],
  food_restaurant_data_rows: [],
  food_restaurant_data_columns: [
    {
      align: "center",
      label: "Sno",
      field: "index",
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
      name:"partner_status",
      field:"partner_status",
      align: "center",
      label: "Status",
      // field: row=>{
      //   return(row.partner_status.charAt(0).toUpperCase() + row.partner_status.slice(1).toLowerCase())
      // },
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      align: "center",
      label: "Name Of Kitchen",
      field: "name_of_kitchen",
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
      label: "Total Menu's ( Approved / Pending )",
      field: row=>{
        return(`Total Menu's :  ${row.food_menu_count} => ${row.food_menu_approved_count} / ${row.food_menu_pending_count}`)
      },
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Phone",
      field: "restaurant_phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Email",
      field: "restaurant_email",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "left",
    //   label: "Latitude",
    //   field: "restaurant_latitude",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    // {
    //   align: "left",
    //   label: "Longitude",
    //   field: "restaurant_longitude",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
  ],
  transport_item_rows: [],
  transport_item_columns: [
    {
      align: "center",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "action",
      label: "View",
      field: "action",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "transport_company_name",
      align: "left",
      label: "Transport Company Name",
      field: "transport_company_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "transport_phone",
      align: "left",
      label: "Phone Number",
      field: "transport_phone",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "transport_email_id",
      align: "left",
      label: "Emai Id",
      field: "transport_email_id",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "transport_latitude",
      align: "left",
      label: "Latitude",
      field: "transport_latitude",
      headerClasses: "bg-primary text-white"
    },

    {
      name: "transport_longitude",
      align: "left",
      label: "Longitude",
      field: "transport_longitude",
      headerClasses: "bg-primary text-white"
    },
    // {
    //   name: "upload_image1",
    //   label: "Vehicle Image",
    //   align: "left",
    //   field: "upload_image1",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    // {
    //   name: "actions",
    //   label: "View ",
    //   field: "actions",
    //   headerClasses: "bg-primary text-white",
    //   align: "center"
    // }
  ],
  equipment_registration_rows: [],
  equipment_registration_columns: [
    {
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    // {
    //   align: "center",
    //   label: "Equipment Id",
    //   field: "equipment_id",
    //   headerClasses: "bg-primary text-white"
    // },
    // {
    //   align: "center",
    //   label: "Equipment Sub Id",
    //   field: "equipment_sub_id",
    //   headerClasses: "bg-primary text-white"
    // },
    {
      align: "left",
      label: "Equipment Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Equipment Partner Sub Name",
      field: "equipment_sub_name",
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
      label: "Status",
      field: "status",
      headerClasses: "bg-primary text-white"
    }
  ],
  equipment_item_rows: [],
  equipment_item_columns: [
    {
      align: "left",
      name: "index",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white"
    },

    {
      align: "left",
      name: "actions1",
      label: "EDIT ",
      field: "actions1",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Medical Store",
      field: "medical_store_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Item Name",
      field: "item_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Units",
      field: "units",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Price",
      field: "price",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Equipment Image",
      field: "equipment_image",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      name: "actions2",
      label: "View",
      field: "actions2",
      headerClasses: "bg-primary text-white"
    },
  ],
  // transport_registration_ex_rows: [],
  // transport_registration_ex_columns: [
  //   {
  //     name: "actions",
  //     label: "View ",
  //     field: "actions",
  //     headerClasses: "bg-indigo-10 text-white",
  //     align: "center",
  //     headerStyle: {
  //       fontWeight: "bold"
  //     }
  //   },
  //   {
  //     align: "center",
  //     label: "Transport ID",
  //     field: "agent_id",
  //     headerClasses: "bg-indigo-10 text-white",
  //     headerStyle: {
  //       fontWeight: "bold"
  //     }
  //   },
  //   {
  //     align: "center",
  //     label: "Transport Sub ID",
  //     field: "transport_sub_id",
  //     headerClasses: "bg-indigo-10 text-white",
  //     headerStyle: {
  //       fontWeight: "bold"
  //     }
  //   },
  //   {
  //     align: "left",
  //     label: "Travel Partner Name",
  //     field: "agent_name",
  //     headerClasses: "bg-indigo-10 text-white",
  //     headerStyle: {
  //       fontWeight: "bold"
  //     }
  //   },
  //   {
  //     align: "left",
  //     label: "Travel Sub Partner Name",
  //     field: "transport_sub_name",
  //     headerClasses: "bg-indigo-10 text-white",
  //     headerStyle: {
  //       fontWeight: "bold"
  //     }
  //   },
  //   {
  //     align: "left",
  //     label: "Contact No",
  //     field: "phone",
  //     headerClasses: "bg-indigo-10 text-white",
  //     headerStyle: {
  //       fontWeight: "bold"
  //     }
  //   },
  //   {
  //     align: "left",
  //     label: "Email ID",
  //     field: "email_id",
  //     headerClasses: "bg-indigo-10 text-white",
  //     headerStyle: {
  //       fontWeight: "bold"
  //     }
  //   },
  //   {
  //     align: "left",
  //     label: "Status",
  //     field: "status",
  //     headerClasses: "bg-indigo-10 text-white",
  //     headerStyle: {
  //       fontWeight: "bold"
  //     }
  //   }
  // ],
  property_reg_rows: [],
  property_reg_cols: [
    {
      align: "center",
      label: "Partner Id",
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
  ],
  equipment_partner_names_arr: [],
  sub_equipment_partner_names_arr: [],
  partners_arr: [],
  sub_partners_arr: [],
  properties_arr: [],
  partners_allDisplay_approvals_data_row: [],
});

///getters
const getters = {
  food_restaurant_data_rows_admin: state => state.food_restaurant_data_rows_admin,
  food_registration_rows: state => state.food_registration_rows,
  foodDetails_rows: state => state.foodDetails_rows,
  food_partner_arr: state => state.food_partner_arr,
  food_sub_partner_arr: state => state.food_sub_partner_arr,
  food_partner_registration_rows: state => state.food_partner_registration_rows,
  agent_partner_registration_rows: state =>
    state.agent_partner_registration_rows,
  property_partner_registration_rows: state =>
    state.property_partner_registration_rows,
  property_partner_registration_status_count: state =>
    state.property_partner_registration_status_count,
  property_transport_registration_status_count: state =>
    state.property_transport_registration_status_count,
  transport_reg_rows: state => state.transport_reg_rows,
  transport_reg_rows_staff: state => state.transport_reg_rows_staff,
  food_partner_registration_rows_staff:state=> state.food_partner_registration_rows_staff,
  transport_registration_ex_rows: state => state.transport_registration_ex_rows,
  property_reg_rows: state => state.property_reg_rows,
  agent_pending_details: state => state.agent_pending_details,
  // food_partner_reg_rows: state => state.food_partner_reg_rows,
  food_partner_registration_rows: state => state.food_partner_registration_rows,
  food_partner_registration_status_count: state =>
    state.food_partner_registration_status_count,
  equipment_partner_registration_rows: state =>
    state.equipment_partner_registration_rows,
  property_registration_rows: state => state.property_registration_rows,
  agent_registration_rows: state => state.agent_registration_rows,
  agent_data_rows: state => state.agent_data_rows,
  agent_partner_registration_status_count: state =>
    state.agent_partner_registration_status_count,
  equipment_partner_registration_status_count: state =>
    state.equipment_partner_registration_status_count,
  equipment_registration_rows: state => state.equipment_registration_rows,
  equipment_item_rows: state => state.equipment_item_rows,
  travel_item_rows: state => state.travel_item_rows,
  agent_partner_registration_status_count: state =>
    state.agent_partner_registration_status_count,
  equipment_partner_registration_status_count: state =>
    state.equipment_partner_registration_status_count,
  property_data_rows: state => state.property_data_rows,
  rooms_data_rows: state => state.rooms_data_rows,
  partners_data_forAdmin_rows: state => state.partners_data_forAdmin_rows,
  partners_approvals_data_rows: state => state.partners_approvals_data_rows,
  partners_allDisplay_approvals_data_row:state =>state.partners_allDisplay_approvals_data_row,
  partners_approvals_data_columns: state =>
    state.partners_approvals_data_columns,
    equipment_partner_names_arr: state => state.equipment_partner_names_arr,
  sub_equipment_partner_names_arr: state => state.sub_equipment_partner_names_arr,
  travel_partner_names_arr: state => state.travel_partner_names_arr,
  sub_travel_partner_names_arr: state => state.sub_travel_partner_names_arr,
  partners_arr: state => state.partners_arr,
  sub_partners_arr: state => state.sub_partners_arr,
  hotelData_rows: state => state.hotelData_rows,
  properties_arr: state => state.properties_arr,
  medical_stores_rows: state => state.medical_stores_rows,
  transport_item_rows: state => state.transport_item_rows,
  food_restaurant_data_rows: state => state.food_restaurant_data_rows,

};
//let user = JSON.parse(localStorage.getItem("user")) || [];
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
        .post("/staffAccPartnersData", formData, {
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
            dispatch("getPropertyRegistrationStatusCount");
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
  //  Property Details Saving
  propertyDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/staffAccPartnersData/savingPropertyDetails", formData, {
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
            dispatch("getPropertyDetails");
            dispatch("getPropertyRegistrationMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Property Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getPropertyDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/staffAccPartnersData/getPropertyData/${payload.partner_id}/${payload.partner_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ADD_PROPERTY_DATA", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  // Room Details Saving

  roomDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/staffAccPartnersData/savingRoomDetails", formData, {
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
            dispatch("getRoomsDetails");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Room Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getRoomsDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/staffAccPartnersData/getRoomsData/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ADD_ROOMS_DATA", rows);
          // console.log("rooomwithicon",rows)
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Rooms Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Property Registration Master for existing user*/
  propertyRegistrationMasterExistingUser({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/staffAccPartnersData/existingUserProperty/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_PROPERTY_REGISTRATION_EXISTING_USER", rows);
          setTimeout(() => {
            dispatch("getPropertyRegistrationStatusCount");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Property Sub User Data",
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
        .get("/staffAccPartnersData/getStaffPropertRegData")
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
  getAllPartnersData({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/staffAccPartnersData/getAllPartners/partnersData")
        .then(response => {
          let rows = response.data;
          commit("SET_ALL_PARTNERS_FOR_ADMIN", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Partners Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Property Registration Master get method based on status*/
  getPropertyRegistrationBasedOnStatus({ commit, dispatch }, payload) {
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/staffAccPartnersData/getPropertyDataOnStatus/${payload}`)
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

  getpropertyPartnerRegApprovalStatus({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/staffAccPartnersData/getPropertyPartnerRegApprovalStatus`)
        .then(response => {
          let rows = response.data;
          commit("SET_PARTNER_APPROVALS_DATA", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Approved Partners Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getPropertyDisplayCountOfAdmin({ commit, dispatch },payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/staffAccPartnersData/getPropertyDisplayCountOfAdmin/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_PARTNER_ALLDATADISPLAY_FOR_ADMIN", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Approved Partners Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
 /* Property Registration Master get method for Count of status*/
  getPropertyRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          "/staffAccPartnersData/staffAccPropertyRegistrationMasterStatusCount"
        )
        .then(response => {
          let rows = response.data;
          commit("SET_PROPERTY_REGISTRATION_STATUS_COUNT", rows);
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
  getTravelDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/staffTranspoterApi/travelItemDetails/${payload.agent_id}/${payload.transport_sub_id}/${payload.travel_status}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVEL_LOCATION_DETAILS", rows);
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
  loadTravelpartnerNames({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
        "/staffTranspoterApi/TravelpartnerNames/partnerNames"
        )
        .then(response => {
          commit("SET_TRAVEL_PARTNER_NAMES", response.data);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Transpoter Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadTravelSubpartnerNames({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
        `/staffTranspoterApi/SubTravelpartnerNames/${payload.agent_id}/${payload.travel_status}`
        )
        .then(response => {
          commit("SET_SUB_TRAVEL_PARTNER_NAMES", response.data);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Transpoter Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadTravelStatus({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/staffTranspoterApi/loadTravelStatus/${payload.agent_id}/${payload.transport_sub_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch("getTravelDetails", payload);
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
              msg: "Failed To Update Travel Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  ledgertravelDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/staffTranspoterApi/ledgertravelDetails", payload)
        .then(response => {
          dispatch("getTravelDetails", payload);
        })
    }, 1500);
  },

  //  Travel Details Saving
  travelDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/staffTranspoterApi/savingTravelDetails", formData, {
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
            dispatch("getTransportRegMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Travel Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  travelLocationUpdating({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/staffTranspoterApi/updatingTravelDetails/${payload.txn_id}/${payload.agent_id}/${payload.transport_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTravelDetails");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Update Travel Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTravelDetailsSaving({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/staffTranspoterApi/travelLocationDetails/${payload.agent_id}/${payload.transport_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVEL_LOCATION_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTransportRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/staffTranspoterApi/transportRegistrationMasterStatusCount")
        .then(response => {
          let rows = response.data;
          // console.log(rows);
          commit("SET_TRANSPORT_REGISTRATION_STATUS_COUNT", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Transport Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  transportRegistrationMasterExistingUser({ commit }, payload) {
    setTimeout(() => {
      api
        .get(`/staffTranspoterApi/transportExistingUser/${payload}`)
        .then(response => {
          let rows = response.data;
          // console.log(rows);
          commit("SET_TRANSPORT_REGISTRATION_EXISTING_USER", rows);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1500);
  },
  updatetransportPartnerForm({ dispatch }, formData) {
   // console.log("formdfml",formData)
       let user = JSON.parse(localStorage.getItem("user")) || [];
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(
            `/staffTranspoterApi/updatetransportPartnerForm/${formData.agent_id}/${formData.transport_sub_id}`,
            formData, {
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
              dispatch("getPropertyRegistrationBasedOnStatus");
            }, 1000);
          });
      }, 1000);
    },
    getTransportDetailsSaving({ commit, dispatch }, payload) {
     // console.log("payload",payload);
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(
            `/staffTranspoterApi/transportDetails/${payload.agent_id}/${payload.transport_sub_id}`
          )
          .then(response => {
            let rows = response.data;
            commit("SET_TRANSPORT_DETAILS", rows);
          })
          .catch(error => {
            console.log(error);
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: "Error While Loading Transport  Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },
    updatingTransportDetails({ dispatch }, payload) {
      dispatch(`alerts_loaders/saveLoading`, "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(
            `/staffTranspoterApi/editTransportDetails/${payload.agent_id}/${payload.transport_sub_id}/${payload.tnx_id}`,
            payload,{
              headers: {
                "Content-Type": "multipart/form-data"
              }

            })
          .then(response => {
            //  dispatch("getTravelfoodDetails", payload);
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
                msg: "Failed To Update Transport Details Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },
  /* Update Equipment Master*/
  updateEquipmentDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentMedicalPartner/${formData.user_id}/${formData.equipment_id}/${formData.equipment_sub_id}/${formData.agent_name}/${formData.equipment_sub_name}/${formData.status}`,
          formData
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getEquipmentRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },

  updateEquipmentPartnerForm({ dispatch }, formData) {
  //  console.log("formdfml",formData)
       let user = JSON.parse(localStorage.getItem("user")) || [];
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(
            `/equipmentMedicalPartner/updateEquipmentPartnerForm/${formData.equipment_id}/${formData.equipment_sub_id}`,
            formData, {
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
              dispatch("getPropertyRegistrationBasedOnStatus");
            }, 1000);
          });
      }, 1000);
    },

  // Update Food Partners Data
  updateFoodPartnerDetails({ dispatch }, formData) {
    // let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartnerAccomodation/${formData.user_id}/${formData.agent_id}/${formData.agent_sub_id}/${formData.agent_name}/${formData.agent_sub_name}/${formData.status}`,
          formData
        )
        .then(response => {
          // console.log("formDD", formData);
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getFoodRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },
  // Update Agent Data
  updateAgentDetails({ dispatch }, formData) {
    // console.log(formData);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/agentApi/${formData.user_id}/${formData.agent_id}/${formData.agent_sub_id}/${formData.agent_name}/${formData.agent_sub_name}`,
          formData
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getAgentPartnerRegDetails");
          }, 1000);
        });
    }, 1000);
  },

  updatePropertyPartnerForm({ dispatch }, formData) {
   // console.log("formdfml",formData)
       let user = JSON.parse(localStorage.getItem("user")) || [];
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(
            `/staffAccPartnersData/updatePropertyPartnerForm/${formData.partner_id}/${formData.partner_sub_id}/${formData.agent_name}/${formData.agent_sub_name}/${formData.status}`,
            formData, {
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
              dispatch("getPropertyRegistrationBasedOnStatus");
            }, 1000);
          });
      }, 1000);
    },


    updateFoodMasterForm({ dispatch }, formData) {
    //  console.log("formdfml",formData)
         let user = JSON.parse(localStorage.getItem("user")) || [];
        dispatch("alerts_loaders/startLoading", "", { root: true });
        setTimeout(() => {
          dispatch("alerts_loaders/stopLoading", "", { root: true });
          api
            .put(
              `/foodPartnerAccomodation/updateFoodPartnerMaster/${formData.agent_id}/${formData.agent_sub_id}/${formData.agent_name}/${formData.agent_sub_name}/${formData.status}`,
              formData, {
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
                dispatch("getFoodRegistrationMaster");
              }, 1000);
            });
        }, 1000);
      },

  // Update Accommodation Data
  updatePropertyPartnerDetails({ dispatch }, formData) {
 // console.log("formdfml",formData)
    // let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/staffAccPartnersData/${formData.account_id}/${formData.partner_id}/${formData.partner_sub_id}/${formData.agent_name}/${formData.agent_sub_name}/${formData.status}`,
          formData
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getPropertyRegistrationMaster");
            dispatch("getPropertyRegistrationBasedOnStatus");
          }, 1000);
        });
    }, 1000);
  },
  // Update Transport Partners Data
  updateTravelPartnerDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/staffTranspoterApi/${formData.user_id}/${formData.agent_id}/${formData.transport_sub_id}/${formData.prev_name}/${formData.prev_sub_name}/${formData.status}`,
          formData
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTransportRegMaster");
          }, 1000);
        });
    }, 1000);
  },
  getTransportRegistrationBasedOnStatus({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/staffTranspoterApi/getTransportDataOnStatus/${payload}`)
        .then(response => {
          let rows = response.data;
          // console.log(rows);
          commit("SET_TRANSPORT_REGISTRATION", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Transport Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getAgentRegStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/agentApi/agentRegMasterStatusCount")
        .then(response => {
          let rows = response.data;
          commit("SET_AGENT_REGISTRATION_STATUS_COUNT", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Agent Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  agentRegistrationMasterExistingUser({ commit }, payload) {
    // console.log("WELCOME",payload);
    setTimeout(() => {
      api
        .get(`/agentApi/existingUserProperty/${payload}`)
        .then(response => {
          let rows = response.data;
          // console.log(rows);
          commit("SET_AGENT_REGISTRATION_EXISTING_USER", rows);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1500);
  },
  getAgentRegBasedOnStatus({ commit, dispatch }, payload) {
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/agentApi/getAgentDataOnStatus/${payload}`)
        .then(response => {
          let rows = response.data;
          // console.log(rows);
          commit("SET_AGENT_REG_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Agent Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // transportRegistrationMasterExistingUser({commit}, payload) {
  //   setTimeout(() => {
  //     api
  //       .get(`/transpoterApi/transportExistingUser/${payload}`)
  //       .then(response => {
  //         let rows = response.data;
  //         console.log(rows);
  //         commit("SET_TRANSPORT_REGISTRATION_EXISTING_USER", rows);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, 1500);
  // },
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
              msg: "Failed To Save Agent Type Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  createAgentLocation({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/agentApi/agentLocation", formData, {
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
            dispatch("getAgentLocationDetails");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Agent Location Type Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getAgentLocationDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/agentApi/agentLocationDetails/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {
          // let result = [];
          let rows = response.data;
          commit("SET_AGENT_LOCATION_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Agent Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  /* Agent Registration Master get method*/
  getAgentPartnerRegDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/agentApi/agentAccomodation")
        .then(response => {
          // let result = [];
          let rows = response.data;
          // console.log(rows);
          commit("SET_AGENT_REG_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Agent Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // to get agentDetails by passing status
  getAgentDetailsByStatus({ commit, dispatch }, status) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/agentApi/${status}`)
        .then(response => {
          let rows = response.data;
          // console.log(rows);
          commit("SET_AGENT_PENDING_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Agent Details",
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
        .post("/staffTranspoterApi/post", payload)
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
              msg: "Failed To Save Transport Master Data",
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
        .get(`/staffTranspoterApi/getAdminTravelData`)
        .then(response => {
          let rows = response.data;

          commit("SET_TRANSPORT_REG_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Transport Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  createTravelLocRegDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transpoterApi/saveTravelLocationData", payload, {
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
            dispatch("getTransportRegMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Travel Location Data",
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
        .post("/staffAccPartnersData/savePropertyRegDetails", payload)
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
  loadPartners({ commit }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get("/staffAccPartnersData/loadPartnersNamesInStaff/partnerNames")
      .then(response => {
        let rows = response.data
        commit("SET_PARTNER_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadSubPartners({ commit }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(`/staffAccPartnersData/loadSubPartnersNames/${payload.partner_id}`)
      .then(response => {
        let rows = response.data
        commit("SET_SUB_PARTNER_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadProperties({ commit }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(`/staffAccPartnersData/loadPropertyNames/${payload.partner_name.partner_id}/${payload.partner_sub_name.partner_sub_id}`)
      .then(response => {
        let rows = response.data
        commit("SET_PROPERTY_NAMES", rows);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getHotelInfo({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/staffAccPartnersData/getHotelInfo/${payload.property_name.txn_id}/${payload.partner_name.partner_id}/${payload.partner_sub_name.partner_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_HOTEL_INFO", rows);
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
    }, 1500);
  },
  // getPropertyRegMaster({ commit, dispatch }) {
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .get("/staffAccPartnersData/getMultiplePropertyDetails")
  //       .then(response => {
  //         let rows = response.data;
  //         // console.log(rows);

  //         commit("SET_TRANSPORT_REG_DETAILS", rows);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           "alerts_loaders/showAlert",
  //           {
  //             msg: "Error While Loading Property Registration Master Data",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },
  getEquipmentRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/equipmentMedicalPartner/equipmentRegistrationMasterStatusCount")
        .then(response => {
          let rows = response.data;
          commit("SET_EQUIPMENT_REGISTRATION_STATUS_COUNT", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  updatingEquipmentDetailsForm({ dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .put(
        `/equipmentMedicalPartner/updatingEquipment/${formData.equipment_id}/${formData.equipment_sub_id}/${formData.medical_txn_id}/${formData.txn_id
        }`,
      formData,{
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
            dispatch("getEquipmentRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },
  getEquipmentRegistrationBasedOnStatus({ commit, dispatch }, payload) {
    // let user = JSON.parse(localStorage.getItem("user")) || [];
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentMedicalPartner/getEquipmentDataOnStatus/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_EQUIPMENT_REGISTRATION", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  equipmentRegistrationMasterExistingUser({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentMedicalPartner/existingUserProperty/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_EQUIPMENT_REGISTRATION_EXISTING_USER", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Sub Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  createEquipmentLocation({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentMedicalPartner/equipmentLocation", formData, {
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
            dispatch("getMedicalEqpData");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Equipment Location Type Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMedicalEqpdata({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentMedicalPartner/getMedicalEqpdata/${payload.equipment_id}/${payload.equipment_sub_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_EQUIPMENT_LOCATION_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Staff Equipment Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadEquipmentStatus({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentMedicalPartner/loadEquipmentStatus/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch("getMedicalEqpdata",payload);
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          // setTimeout(() => {
          //   dispatch("getMedicalEqpdata",payload);
          // }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Update staff Equipment Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  ledgerEquipmentDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentMedicalPartner/ledgerEquipmentDetails", payload)
        .then(response => {
          dispatch("getMedicalEqpData", payload);
          // dispatch(
          //   "alerts_loaders/showAlert",
          //   { msg: response.data.message, type: "positive" },
          //   { root: true }
          // );
          // setTimeout(() => {
          //   dispatch("getMedicalEqpdata");
          // }, 1000);
        })
        .catch(error => {
          console.log(error);
          // dispatch(
          //   `alerts_loaders/showAlert`,
          //   {
          //     msg: "Failed To Save Staff Equipment Details Data",
          //     type: "negative"
          //   },
          //   { root: true }
          // );
        });
    }, 1500);
  },

  getEquipmentLocationDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentMedicalPartner/equipmentLocationDetails/${payload.equipment_id}/${payload.equipment_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_EQUIPMENT_LOCATION_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getEquipmentRegistrationMaster({ commit, dispatch }) {
    // let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/equipmentMedicalPartner/equipmentAccomodation")
        .then(response => {
          let rows = response.data;
          commit("SET_EQUIPMENT_REGISTRATION", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  equipmentRegistrationMasterAdd({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentMedicalPartner", formData, {
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
            dispatch("getEquipmentRegistrationMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Equipment Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadEquipmentpartnerNames({ commit }) {

    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
        .get(
        `/equipmentMedicalPartner/equipmentpartnerNames/`
        )
        .then(response => {
          commit("SET_EQUIPMENT_PARTNER_NAMES", response.data);
        })
      .catch(error => {
      console.log(error);
    });
  },

  loadEquipmentSubpartnerNames({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
        `/equipmentMedicalPartner/SubequipmentpartnerNames/${payload.account_id}/${payload.equipment_id}`
        )
        .then(response => {
          commit("SET_SUB_EQUIPMENT_PARTNER_NAMES", response.data);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  /* Food Registration Master get method for Count of status*/

  getFoodRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/foodPartnerAccomodation/foodRegistrationMasterStatusCount")
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_REGISTRATION_STATUS_COUNT", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getFoodAllDisplayForStaff({ commit, dispatch },payload) {
    // console.log("ssss",payload)
    if(typeof payload == 'undefined'){
      payload = 'ALL'
     // console.log(payload)
    } else {
      payload = payload
     // console.log(payload)
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartnerAccomodation/getFoodAllDisplayForStaff/${payload}`)
        .then(response => {
          let usermenus = response.data;
          commit("SET_FOOD_REGISTRATION_DATA_FOR_STAFF", usermenus);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadFoodPartnerNames({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/foodPartnerAccomodation/loadPartnerNames")
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_PARTNER_NAME", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Partner Names",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadFoodSubPartnerNames({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartnerAccomodation/loadSubPartnerNames/${payload.agent_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_SUB_PARTNER_NAME", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Sub Partner Names",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  loadFoodStatus({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartnerAccomodation/loadFoodStatus/${payload.agent_id}/${payload.agent_sub_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch("getFoodData", payload);
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
              msg: "Failed To Update Food Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  ledgerFoodDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartnerAccomodation/ledgerFoodDetails", payload)
        .then(response => {
          dispatch("getFoodData", payload);
        })
        .catch(error => {
          console.log(error);
          // dispatch(
          //   `alerts_loaders/showAlert`,
          //   {
          //     msg: "Failed To Save Property Details Data",
          //     type: "negative"
          //   },
          //   { root: true }
          // );
        });
    }, 1500);
  },
  getFoodData({ commit, dispatch }, payload) {
    // let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartnerAccomodation/mainFoodPartnerDetails/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {

          let rows = response.data;

          commit("SET_FOOD_DETAILS", rows);

        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  //Get food details
  getfoodDetails({ commit, dispatch }, payload) {

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartnerAccomodation/foodDetails/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {
          let rows = response.data;

          commit("SET_FOOD_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  foodDetailsUpdating({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartnerAccomodation/updatingFoodDetails/${payload.txn_id}/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
        )
        .then(response => {
          dispatch("getFoodDetails", payload);
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
              msg: "Failed To Update Food Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  //Get food existing user

  getExistingUserFoodPartner({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartnerAccomodation/existingUserFoodPartner/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_PROPERTY_FOOD_EXISTING_USER", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  /* GET Food Data BasedOn Status */

  getFoodRegistrationBasedOnStatus({ commit, dispatch }, payload) {
    // let user = JSON.parse(localStorage.getItem("user")) || [];
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartnerAccomodation/getFoodDataOnStatus/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_REGISTRATION", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  /* Food Registration Master get method*/
  // getEquipmentRegistrationMaster({ commit, dispatch }) {
  //   console.log("in");
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .get("/equipmentMedicalPartner")
  //       .then(response => {
  //         let rows = response.data;
  //         commit("SET_EQUIPMENT_REGISTRATION", rows);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           "alerts_loaders/showAlert",
  //           {
  //             msg: "Error While Loading Equipment Registration Master Data",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },
  updatePropertyDetails({ dispatch }, formData) {
   // console.log("ddddddd",formData)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/staffAccPartnersData/updatePropertyData/${formData.txn_id}`,
          formData, {
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
            dispatch("getPropertyDetails");
          }, 1000);
        });
    }, 1000);
  },
  updateRoomsDetails({ dispatch }, formData) {
   // console.log("room",formData)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/staffAccPartnersData/updateRoomsData/${formData.txn_id}/${formData.partner_id}/${formData.partner_sub_id}/${formData.property_txn_id}`,
          formData, {
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
            dispatch("getRoomsDetails");
            // dispatch("getPropertyRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },
  /* Food Registration Master*/

  foodRegistrationMasterAdd({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartnerAccomodation", formData, {
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
            dispatch("getFoodRegistrationMaster");
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
  /* Food Registration Master get method*/
  getFoodRegistrationMaster({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/foodPartnerAccomodation/FoodPartnerDetails")
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_REGISTRATION", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Food Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  // saving Food Add Details

  foodDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartnerAccomodation/savingFoodDetails", formData, {
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
            dispatch("getFoodDetails");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Property Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMedicalStoresData({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentMedicalPartner/getMedicalStoresData/${payload.equipment_id}/${payload.equipment_sub_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_EQUIPMENT_MEDICAL_STORES", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Medical Stores Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // editmedicalStoreObj
  updatingMedicalStoreDetails({ dispatch }, formData) {
   // console.log("fffffff",formData)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentMedicalPartner/editMedicalStoreDetails/${formData.equipment_id}/${formData.equipment_sub_id}/${formData.txn_id}`,
          formData, {
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
            // dispatch("getPropertyRegistrationMaster");
            // dispatch("getPropertyDetails");
          }, 1000);
        });
    }, 1000);
  },
  // getFoodRestaurantDetails({ commit, dispatch }, payload) {
  // //  console.log("payload",payload);
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .get(
  //         `/foodPartnerAccomodation/getFoodRestaurantDetails/${payload.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
  //       )
  //       .then(response => {
  //         let rows = response.data;
  //         commit("SET_FOOD_RESTAURANRT_DATA", rows);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           "alerts_loaders/showAlert",
  //           {
  //             msg: "Error While Loading Restaurant Data",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },
  updateFoodRestaurant({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartnerAccomodation/updateFoodRestaurant/${formData.txn_id}`,
          formData
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getFoodRestaurantDetails");
          }, 1000);
        });
    }, 1000);
  },

  approvePartner({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/approvePartner", payload)
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          if (payload.table == "mh_property_master") {
            setTimeout(() => {
              dispatch("getPropertyRegistrationMaster");
            }, 1000);
          }
          if (payload.table == "mh_agent_master") {
            setTimeout(() => {
              dispatch("getAgentPartnerRegDetails");
            }, 1000);
          }
          if (payload.table == "mh_transport_master") {
            setTimeout(() => {
              dispatch("getTransportRegMaster");
            }, 1000);
          }
          if (payload.table == "mh_food_master") {
            setTimeout(() => {
              dispatch("getFoodRegistrationMaster");
            }, 1000);
          }
          if (payload.table == "mh_equipment_master") {
            setTimeout(() => {
              dispatch("getEquipmentRegistrationMaster");
            }, 1000);
          }
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
  getFoodRestaurantDetailsadmin({ commit, dispatch }, payload) {
    // console.log("ssss464",payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartner/getFoodRestaurantDetailsadmin/${payload.txn_id}/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_RESTAURANRT_DATA_ADMIN", rows);
          // console.log("SET_FOOD_RESTAURANRT_DATA_ADMIN",rows)
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Restaurant Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTransportAllDisplayForStaff({ commit, dispatch },payload) {
    // console.log("ssss",payload)
    if(typeof payload == 'undefined'){
      payload = 'ALL'
     // console.log(payload)
    } else {
      payload = payload
     // console.log(payload)
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/staffTranspoterApi/getTransportAllDisplayForStaff/${payload}`)
        .then(response => {
          let usermenus = response.data;
          //  console.log(response.data);
          commit("SET_TRANSPORT_DATA_FOR_STAFF", usermenus);
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
};

// mutations

const mutations = {
  SET_PROPERTY_TYPE(state, rows) {
    state.property_type_rows = rows.data;
  },
  SET_PROPERTY_REGISTRATION(state, rows) {
    state.property_partner_registration_rows = rows.data;
  },

  SET_PROPERTY_REGISTRATION_EXISTING_USER(state, rows) {
    state.property_registration_rows = rows.data;
  },
  SET_TRANSPORT_REGISTRATION_EXISTING_USER(state, rows) {
    state.transport_registration_ex_rows = rows.data;
  },
  SET_PROPERTY_REGISTRATION_STATUS_COUNT(state, rows) {
    state.property_partner_registration_status_count = rows.data;
  },
  SET_AGENT_REGISTRATION_STATUS_COUNT(state, rows) {
    state.agent_partner_registration_status_count = rows.data;
  },
  SET_AGENT_REGISTRATION_EXISTING_USER(state, rows) {
    state.agent_registration_rows = rows.data;
  },
  SET_TRANSPORT_REGISTRATION(state, rows) {
    state.transport_reg_rows = rows.data;
  },
  SET_TRANSPORT_REGISTRATION_STATUS_COUNT(state, rows) {
    state.property_transport_registration_status_count = rows.data;
  },
  SET_AGENT_REG_DETAILS(state, rows) {
    state.agent_partner_registration_rows = rows.data;
  },
  SET_AGENT_LOCATION_DETAILS(state, rows) {
    state.agent_data_rows = rows.data;
  },
  SET_TRANSPORT_REG_DETAILS(state, rows) {
    state.transport_reg_rows = rows.data;
  },
  SET_TRAVEL_LOCATION_DETAILS(state, rows) {
    state.travel_item_rows = rows.data;
  },
  SET_AGENT_PENDING_DETAILS(state, rows) {
    state.agent_pending_details = rows.data;
  },
  SET_EQUIPMENT_MEDICAL_STORES(state, rows) {
    state.medical_stores_rows = rows.data;
  },
  SET_EQUIPMENT_REGISTRATION_STATUS_COUNT(state, rows) {
    state.equipment_partner_registration_status_count = rows.data;
  },
  SET_EQUIPMENT_REGISTRATION_EXISTING_USER(state, rows) {
    state.equipment_registration_rows = rows.data;
  },
  SET_EQUIPMENT_LOCATION_DETAILS(state, rows) {
    state.equipment_item_rows = rows.data;
  },
  SET_EQUIPMENT_REGISTRATION(state, rows) {
    state.equipment_partner_registration_rows = rows.data;
  },
  SET_FOOD_REGISTRATION(state, rows) {
    state.food_partner_registration_rows = rows.data;
  },
  SET_FOOD_REGISTRATION_STATUS_COUNT(state, rows) {
    state.food_partner_registration_status_count = rows.data;
  },
  SET_ADD_PROPERTY_DATA(state, rows) {
    state.property_data_rows = rows.data;
  },
  SET_ADD_ROOMS_DATA(state, rows) {
    state.rooms_data_rows = rows.data;
  },
  SET_FOOD_DETAILS(state, rows) {
    state.foodDetails_rows = rows.data;
  },
  SET_FOOD_PARTNER_NAME(state, payload) {
    state.food_partner_arr = payload.data;
  },
  SET_FOOD_SUB_PARTNER_NAME(state, payload) {
    state.food_sub_partner_arr = payload.data;
  },
  SET_PROPERTY_FOOD_EXISTING_USER(state, rows) {
    state.food_registration_rows = rows.data;
  },
  SET_ALL_PARTNERS_FOR_ADMIN(state, rows) {
    state.partners_data_forAdmin_rows = rows.data;
  },
  SET_PARTNER_APPROVALS_DATA(state, rows) {
    state.partners_approvals_data_rows = rows.data;
  },
  SET_PARTNER_ALLDATADISPLAY_FOR_ADMIN(state, rows) {
    state.partners_allDisplay_approvals_data_row = rows.data;
  },
  SET_EQUIPMENT_PARTNER_NAMES(state, payload) {
    state.equipment_partner_names_arr = payload.data;
  },
  SET_SUB_EQUIPMENT_PARTNER_NAMES(state, payload) {
    state.sub_equipment_partner_names_arr = payload.data;

  },
  SET_TRAVEL_PARTNER_NAMES(state, payload) {
    state.travel_partner_names_arr = payload.data;
  },
  SET_SUB_TRAVEL_PARTNER_NAMES(state, payload){
    state.sub_travel_partner_names_arr = payload.data;
  },
  SET_PARTNER_NAMES(state, rows) {
    state.partners_arr = rows.data;
  },
  SET_SUB_PARTNER_NAMES(state, rows) {
    state.sub_partners_arr = rows.data;
  },
  SET_PROPERTY_NAMES(state, rows) {
    state.properties_arr = rows.data;
  },
  SET_HOTEL_INFO(state, rows) {
    state.hotelData_rows = rows.data;
  },
  SET_TRANSPORT_DETAILS(state, rows) {
    state.transport_item_rows = rows.data;
  },
  SET_FOOD_RESTAURANRT_DATA(state, rows) {
    state.food_restaurant_data_rows = rows.data;
  },
  SET_TRANSPORT_DATA_FOR_STAFF(state, rows) {
    state.transport_reg_rows_staff = rows;
  },
  SET_FOOD_REGISTRATION_DATA_FOR_STAFF(state, rows) {
    state.food_partner_registration_rows_staff = rows;
  },
  SET_FOOD_RESTAURANRT_DATA_ADMIN(state, rows) {
    state.food_restaurant_data_rows_admin = rows.data;
  },
};

export const dashboard = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
