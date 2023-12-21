import { api } from "boot/axios";
//intial state
const state = () => ({
  agent_pending_details: [],
  agent_pending_columns: [
    // {
    //   align: "center",
    //   label: "Agent Id",
    //   field: "agent_id",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-indigo-10 text-white",
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
  property_data_admin_rows: [],
  agent_partner_registration_columns: [
    {
      name: "actions",
      label: "Take Action",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "first_name",
      align: "left",
      label: "Agent Name",
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
      name: "nearest_hospital",
      align: "left",
      label: "Referal Name",
      field: "nearest_hospital",
      headerClasses: "bg-primary text-white",
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
      name: "city",
      align: "left",
      label: "Application Date",
      field: "created_datetime",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "status",
      required: true,
      label: "Status",
      align: "left",
      headerClasses: "bg-primary text-white",
      field: "agentstatus",
      sortable: true
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
  approved_agent_booking_rows: [],
  approved_agent_booking_columns: [
    {
      name: "index",
      align: "center",
      label: "Sl No",
      field: "index",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "first_name",
      align: "left",
      label: "Agent Name",
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
      name: "nearest_hospital",
      align: "left",
      label: "Referal Name",
      field: "nearest_hospital",
      headerClasses: "bg-primary text-white",
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
      name: "city",
      align: "left",
      label: "Created Date",
      field: "created_datetime",
      headerClasses: "bg-primary text-white",
      sortable: true
    },
    {
      name: "status",
      required: true,
      label: "Status",
      align: "left",
      headerClasses: "bg-primary text-white",
      field: "agentstatus",
      sortable: true
    }
  ],
  food_partner_registration_status_count: [],
  property_partner_registration_status_count: [],
  property_partnerAcc_status_count: [],
  property_partner_admin_status_count: [],
  property_partner_registration_rows: [],
  property_partner_registration_columns: [
    {
      name: "index",
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
      label: "Property Sub Partner Name",
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
      name: "index",
      label: "S.no",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      align: "left",
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
    },
    {
      align: "left",
      label: "Status",
      field: "property_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  property_partner_data_rows: [],
  property_partner_data_columns: [
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
      label: "Available Rooms",
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
  rooms_property_data_rows: [],
  rooms_property_data_columns: [
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
      label: "Available Rooms",
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
  rooms_data_admin_rows: [],
  rooms_data_admin_columns: [
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
      align: "center",
      label: "Sub Property Name",
      field: "sub_property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Property Type",
      field: "property_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "center",
    //   label: "Room No",
    //   field: "room_no",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      align: "center",
      label: "Type of Room",
      field: "room_type",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Facilities",
      field: "facilities",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Price",
      field: "price",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "center",
    //   label: "Units",
    //   field: "units",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
    {
      align: "left",
      label: "Status",
      field: "room_status",
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
  food_partner_registration_status_count: [],
  food_partner_registration_rows: [],
  food_partner_registration_columns: [
    {
      name: "index",
      label: "S.no ",
      field: "index",
      headerClasses: "bg-primary text-white",
      align: "center",
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
    },
    {
      align: "left",
      label: "Status",
      field: "status",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
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
      label: "Food Partner Sub Name",
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
    }
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
      label: "Food Partner Sub Name",
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
  food_partner_admin_rows: [],
  food_partner_admin_columns: [
    {
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
      label: "Take Action ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",
      align: "center",
      label: "Status",
      field: "status",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Agent ID",
      field: "agent_id",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Agent Sub ID",
      field: "agent_sub_id",
      headerClasses: "bg-primary text-white",
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
      align: "center",
      label: "Food Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Partner Sub Name",
      field: "agent_sub_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   align: "left",
    //   label: "Status",
    //   field: "status",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
  ],
  approved_food_partners_rows: [],
  approved_food_partners_columns: [
    {
      align: "center",
      label: "S.no",
      field:"index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Take Action",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "status",
      align: "center",
      label: "Status",
      field: "status",
      headerClasses: "bg-primary text-white",
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
      align: "center",
      label: "Food Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Food Partner Sub Name",
      field: "agent_sub_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Restaurants ( Approved / Pending )",
      field: row=>{
        return `Total Restaurants :  ${row.restaurant_count} => ${row.restaurant_approved_count} / ${row.restaurant_pending_count}`
      },
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Total Food Menu's ( Approved / Pending )",
      field: row=>{
        return `Total Food Menu's :  ${row.food_menu_count} => ${row.food_menu_approved_count} / ${row.food_menu_pending_count}`
      },
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Contact No",
      field: "phone",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Email ID",
      field: "email_id",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  food_sub_partner_arr: [],
  food_partner_arr: [],
  travelfoodDetails_rows: [],
  travel_food_sub_partner_arr:[],
  travelfoodDetails_columns: [
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
  travel_foodDetails_rows: [],
  travel_foodDetails_columns: [
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
  food_Details_rows: [],
  food_Details_columns: [
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

  foodDetails_rows: [],
  foodDetails_rows_partner:[],
  food_registration_sub_rows: [],
  food_items_add_count: [],
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
      name: "actions",
      label: "View",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "action",
      label: "Edit",
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
      name: "food_items_name",
      align: "left",
      label: "Food Item Name",
      field: "food_items_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "item_name",
      label: "Food Item Type",
      align: "left",
      field: "item_name",
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
    // {
    //   name: "actions",
    //   label: "View",
    //   field: "actions",
    //   headerClasses: "bg-primary text-white",
    //   align: "center",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
  ],
  food_Details_rows: [],
  food_Details_columns: [
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
  foodDetails_rows_admin: [],
  foodDetails_columns_admin: [
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
      name:"menu_partner_status",
      align: "center",
      label: "Status",
      field: "partner_status",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "kitchen_name",
      align: "center",
      label: "Kitchen Name",
      field: "kitchen_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "kitchen_type",
      align: "center",
      label: "Kitchen Type",
      field: "kitchen_type",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "food_items_name",
      align: "center",
      label: "Food Item Name",
      field: "food_items_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "item_name",
      label: "Food Item Type",
      align: "center",
      field: "item_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "units",
      label: "Units",
      align: "center",
      field: "units",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "price",
      label: "Price",
      align: "center",
      field: "price",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
    // {
    //   name: "actions",
    //   label: "View",
    //   field: "actions",
    //   headerClasses: "bg-primary text-white",
    //   align: "center",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
        // {
    //   name: "food_image",
    //   label: "Upload Food Image",
    //   align: "center",
    //   field: "food_image",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    // {
    //   name: "actions",
    //   label: "View",
    //   field: "actions",
    //   headerClasses: "bg-primary text-white",
    //   align: "center",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
  ],
  property_transport_registration_status_count: [],
  transport_reg_rows: [],
  transport_reg_admin_rows:[],
  travel_admin_count_rows:[],
  transport_reg_columns: [
    {
      name: "index",
      label: "S.no ",
      field: "index",
      headerClasses: "bg-primary text-white",
      align: "center"
    },
    {
      name: "actions",
      label: "Take Actions",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
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
    // {
    //   align: "left",
    //   label: "Status",
    //   field: "status",
    //   headerClasses: "bg-primary text-white"
    // }
  ],
  approved_travel_partners_rows: [],
  approved_travel_partners_columns: [
    {
      name: "index",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      align: "center"
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
    // {
    //   align: "left",
    //   label: "Status",
    //   field: "status",
    //   headerClasses: "bg-primary text-white"
    // }
  ],
  bookings_reg_rows: [],
  bookings_reg_columns: [
    {
      align: "center",
      label: "S.No ",
      field: "s_no",
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
      align: "left",
      label: "City",
      field: "property_city_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Near Hospitals",
      field: "near_hospital_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Check in time",
      field: "check_in",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Checkout Time",
      field: "check_out",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "No of Guest",
      field: "guest_type",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Nationality",
      field: "nationality",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Guest Address",
      field: "guest_address",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Mobile",
      field: "mobile_number",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Email Id",
      field: "email_id",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Price",
      field: "total_price",
      headerClasses: "bg-primary text-white"
    }
  ],
  equipment_partner_registration_status_count: [],
  equipment_partner_registration_rows: [],
  equipment_partner_registration_columns: [
    {
      align: "index",
      label: "S.no",
      field: "index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Take Action",
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
      label: "Equipment Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "equipment_sub_name",
      align: "left",
      label: "Equipment Sub Partner Name",
      field: "equipment_sub_name",
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
    // {
    //   align: "left",
    //   label: "Status",
    //   field: "status",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
  ],
  equipment_partnersData_forAdmin_rows: [],
  equipment_partnersData_forAdmin_columns: [
    // {
    //   align: "center",
    //   label: "Equipment Id",
    //   field: "equipment_id",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      name: "index",
      align: "left",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Take Action",
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
      label: "Equipment Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "equipment_sub_name",
      align: "left",
      label: "Equipment Sub Partner Name",
      field: "equipment_sub_name",
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
    // {
    //   align: "left",
    //   label: "Status",
    //   field: "status",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
  ],
  med_partners_approvals_data_rows: [],
  med_partners_approvals_data_columns: [
    // {
    //   align: "center",
    //   label: "Equipment Id",
    //   field: "equipment_id",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // },
    {
      name: "index",

      align: "left",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      label: "Take Action",
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
      label: "Equipment Partner Name",
      field: "agent_name",
      headerClasses: "bg-primary text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "equipment_sub_name",
      align: "left",
      label: "Equipment Sub Partner Name",
      field: "equipment_sub_name",
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
    // {
    //   align: "left",
    //   label: "Status",
    //   field: "status",
    //   headerClasses: "bg-primary text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
  ],
  othertravel_item_rows: [],

  othertravel_item_columns: [
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

  travel_item_rows: [],
  sub_travel_item_rows: [],
  sub_travel_cart_rows: [],
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
      name: "vehicle_type",
      align: "left",
      label: "Vehicle Type",
      field: "vehicle_type",
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
  travel_item_rows: [],
  travel_item_columns_admin: [
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
      name: "actions",
      label: "View",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    // {
    //   name: "Vehicle Type",
    //   align: "left",
    //   label: "Vehicle Type",
    //   field: "vehicle_type",
    //   headerClasses: "bg-primary text-white"
    // },
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
      name: "status",
      align: "left",
      label: "Status",
      field: "travel_status",
      headerClasses: "bg-primary text-white"
    },
    // {
    //   name: "actions",
    //   label: "View ",
    //   field: "actions",
    //   headerClasses: "bg-primary text-white",
    //   align: "center"
    // }
  ],
  equipment_registration_rows: [],
  equipment_all_count_for_admin:[],
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
  equipment_items_rows: [],
  medical_stores_rows: [],
  medical_stores_columns: [
    {
      name:"index",
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
      field: "actions1",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name:"medical_store_status",
      align: "left",
      label: "Status",
      field: "medical_store_status",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name:"medical_store_name",
      align: "left",
      label: "Medical Store",
      field: "medical_store_name",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name:"phone",
      align: "left",
      label: "Phone",
      field: "phone",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name:"name_of_contact_person",
      align: "left",
      label: "Contact Person",
      field: "name_of_contact_person",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name:"opening_time",
      align: "left",
      label: "Opening Time",
      field: "opening_time",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name:"closing_time",
      align: "left",
      label: "Closing Time",
      field: "closing_time",
      headerClasses: "bg-indigo-10 text-white",
    },
  ],
  medicalItems_rows: [],
  medical_addItems_rows: [],
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
      label: "Edit",
      field: "actions1",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Medical Store Name",
      field: "medical_store",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Medical Item Name",
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
  equipment_items_forAdmin_rows: [],
  equipment_items_forAdmin_columns: [
    {
      name: "index",
      align: "left",
      name: "index",
      label: "Sno",
      field: "index",
      headerClasses: "bg-primary text-white"
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
    },
    {
      name: "medical_store_status",

      align: "left",
      label: "Status",
      field: "medical_store_status",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "agent_name",
      align: "left",
      label: "Medical Store",
      field: "agent_name",
      headerClasses: "bg-primary text-white"
    },
    {
      name: "item_name",
      align: "left",
      label: "Item Name",
      field: "item_name",
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
      name: "price",
      align: "left",
      label: "Price",
      field: "price",
      headerClasses: "bg-primary text-white"
    },
    // {
    //   align: "left",
    //   label: "Equipment Image",
    //   field: "equipment_image",
    //   headerClasses: "bg-primary text-white"
    // },
    // {
    //   name: "actions",
    //   label: "View ",
    //   field: "actions",
    //   headerClasses: "bg-primary text-white",
    //   align: "center"
    // }
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
      required: true,
      align: "center",
      label: "Room Category",
      field: "room_category",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      required: true,
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
      label: "Special Offer(%)",
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
    // {
    //   name: "status",
    //   align: "center",
    //   label: "Status",
    //   field: "status",
    //   headerClasses: "bg-indigo-10 text-white",
    //   headerStyle: {
    //     fontWeight: "bold"
    //   }
    // }
  ],
  hotelNames_rows: [],
  offers_rows: [],
  travel_partner_names_arr: [],
  sub_travel_partner_names_arr: [],
  foodsub_travel_partner_names_arr: [],
  equipment_partner_names_arr: [],
  sub_equipment_partner_names_arr: [],
  sub_food_equipment_medical_arr:[],
  medical_store_arr:[],
  eqp_medical_store_arr:[],
  travel_medical_store_arr:[],
  allRoom_avail_details_arr: [],
  otherrooms_data_rows: [],
  travelequipment_item_rows: [],
  travelequipment_item_columns: [
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
      field: "medical_store",
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
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    }
  ],
  otherequipment_item_rows: [],
  otherequipment_item_columns: [
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
      field: "medical_store",
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
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    }
  ],
  foodproperty_data_rows: [],
  foodproperty_data_columns: [

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
  travelproperty_data_rows: [],
  travelproperty_data_columns: [
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
  otherrooms_data_columns: [
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
      label: "Available Rooms",
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
  travel_item_partner_rows:[],
  travel_item_partner_columns: [
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
  travelrooms_data_rows: [],
  travelrooms_data_columns: [
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
      label: "Available Rooms",
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
  acc_food_Details_rows: [],
  acc_food_Details_columns: [
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
  acc_travel_rows:[],
  acc_travel_columns: [
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
  equipment_acc_rows:[],
  equipment_acc_columns: [
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
      field: "medical_store",
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
      name: "actions",
      label: "View ",
      field: "actions",
      headerClasses: "bg-primary text-white",
      align: "center"
    }
  ],
  restaurant_data_rows: [],
  restaurant_data_columns: [
    {
      name: "index",
      align: "left",
      label: "S.no",
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
      align: "left",
      label: "Name Of Kitchen",
      field: "name_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Kitchen Type",
      field: "type_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Phone",
      field: "restaurant_phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Email",
      field: "restaurant_email",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Latitude",
      field: "restaurant_latitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Longitude",
      field: "restaurant_longitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
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
      align: "left",
      label: "Status",
      field: row=>{
        return(row.partner_status.charAt(0).toUpperCase() + row.partner_status.slice(1).toLowerCase())
      },
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      align: "left",
      label: "Name Of Kitchen",
      field: "name_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Kitchen Type",
      field: "type_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Phone",
      field: "restaurant_phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Email",
      field: "restaurant_email",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  travel_restaurant_data_rows: [],
  travel_restaurant_data_columns: [
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
      label: "Name Of Kitchen",
      field: "name_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Kitchen Type",
      field: "type_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Phone",
      field: "restaurant_phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Email",
      field: "restaurant_email",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Latitude",
      field: "restaurant_latitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Longitude",
      field: "restaurant_longitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],
  foodtransport_item_rows: [],
  foodtransport_item_columns: [
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
      name: "action",
      label: "View",
      field: "action",
      headerClasses: "bg-indigo-10 text-white",
      align: "center"
    },
    {
      name: "transport_company_name",
      align: "left",
      label: "Transport Company Name",
      field: "transport_company_name",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name: "transport_phone",
      align: "left",
      label: "Phone Number",
      field: "transport_phone",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name: "transport_email_id",
      align: "left",
      label: "Emai Id",
      field: "transport_email_id",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name: "transport_latitude",
      align: "left",
      label: "Latitude",
      field: "transport_latitude",
      headerClasses: "bg-indigo-10 text-white"
    },

    {
      name: "transport_longitude",
      align: "left",
      label: "Longitude",
      field: "transport_longitude",
      headerClasses: "bg-indigo-10 text-white"
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
  acctransport_item_rows: [],
  acctransport_item_columns: [
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
  partner_accomodation_status_count: [],
  transport_item_rows: [],
  transport_item_columns: [
    {
      name: "index",
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
    {
      name: "status",
      align: "left",
      label: "Status",
      field: "status",
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
  transport_item_admin_rows: [],
  transport_item_admin_columns: [
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
  medicaltransport_item_rows: [],
  medicaltransport_item_columns: [
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
      name: "action",
      label: "View",
      field: "action",
      headerClasses: "bg-indigo-10 text-white",
      align: "center"
    },
    {
      name: "transport_company_name",
      align: "left",
      label: "Transport Company Name",
      field: "transport_company_name",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name: "transport_phone",
      align: "left",
      label: "Phone Number",
      field: "transport_phone",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name: "transport_email_id",
      align: "left",
      label: "Emai Id",
      field: "transport_email_id",
      headerClasses: "bg-indigo-10 text-white"
    },
    {
      name: "transport_latitude",
      align: "left",
      label: "Latitude",
      field: "transport_latitude",
      headerClasses: "bg-indigo-10 text-white"
    },

    {
      name: "transport_longitude",
      align: "left",
      label: "Longitude",
      field: "transport_longitude",
      headerClasses: "bg-indigo-10 text-white"
    },
  ],
  eqp_restaurant_data_rows: [],
  eqp_restaurant_data_columns: [
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
      align: "left",
      label: "Name Of Kitchen",
      field: "name_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Kitchen Type",
      field: "type_of_kitchen",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Phone",
      field: "restaurant_phone",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Email",
      field: "restaurant_email",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Latitude",
      field: "restaurant_latitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "left",
      label: "Longitude",
      field: "restaurant_longitude",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    }
  ],

  accmedicalstore_item_rows: [],
  partners_allDisplay_approvals_data_row: [],
  accmedicalstore_item_columns: [
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
      align: "left",
      label: "Medical Store",
      field: "medical_store_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Phone",
      field: "phone",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Contact Person",
      field: "name_of_contact_person",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Opening Time",
      field: "opening_time",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Closing Time",
      field: "closing_time",
      headerClasses: "bg-primary text-white",
    }
  ],
  travelmedicalstore_item_rows: [],
  transportoperation_item_rows: [],
  acctransportoperation_item_rows: [],
  medicaltransportoperation_item_rows: [],
  foodtransportoperation_item_rows: [],
  travelmedicalstore_item_columns: [
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
      align: "left",
      label: "Medical Store",
      field: "medical_store_name",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Phone",
      field: "phone",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Contact Person",
      field: "name_of_contact_person",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Opening Time",
      field: "opening_time",
      headerClasses: "bg-primary text-white"
    },
    {
      align: "left",
      label: "Closing Time",
      field: "closing_time",
      headerClasses: "bg-primary text-white",
    }
  ],
  foodmedicalstore_item_rows: [],
  foodmedicalstore_item_columns: [
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
      name: "action",
      label: "View",
      field: "action",
      headerClasses: "bg-indigo-10 text-white",
      align: "center"
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
  agent_account_item_rows: [],
  transport_regAdmin_status_count: [],
  property_operation_roomupdate_row: [],
  propertyoperation_room_avlprice_row:[],
  accomadation_visit_data: [],
  accomadation_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      style: 'max-width: 5px;',
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
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
      label: "Update",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "visit_status",
      align: "center",
      label: "Status",
      field: "visit_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "user_id",
      align: "center",
      label: "User ID",
      field: "user_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "concatenated_name",
      align: "center",
      label: "Name - Username ",
      field: "concatenated_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "inserted_date_time",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      },
    },
{
      name: "updated_date_time",
      align: "center",
      label: "Updated Date Time ",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      },
    },


  ],

  travel_visit_data: [],
  travel_visit_columns: [
    {
      name:"sr.no",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable : true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      name: 'travel_agency_name',
      align: "center",
      label: "Travel Agency Name",
      field: "travel_agency_name",
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "actions",
      align: "center",
      label: "Update",
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
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name:"user_id",
      align: "center",
      label: "User ID",
      field: "user_id",
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
      name:"val",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      name: "updated_date_time",
      align: "center",
      label: "Updated Date Time ",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      },
    },


  ],


  food_visit_data: [],
  food_visit_columns: [
    {
      name:"index",
      align: "center",
      label: "Sr.no",
      field: "index",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      align: "center",
      label: "Restaurant Name",
      field: "restaurant_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      align: "center",
      label: "Update",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },



    {
      name:"visit_status",
      align: "center",
      label: "Visit Status",
      field:"visit_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold",
        textAlign:"center"
      }
    },
    {

      align: "center",
      label: "User ID",
      field: "user_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {

      align: "center",
      label: "Name - User Name",
      field: "concatenated_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      align: "center",
      label: "Inserted Date Time",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        // let formattedDate = `${dateObject.getDate()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getFullYear()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        let formattedDate =` ${dateObject.getFullYear()}/${dateObject.getMonth()+1}/${dateObject.getDate()}    ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      name: "updated_date_time",
      align: "center",
      label: "Updated Date Time ",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      },
    },




  ],


  equipment_visit_data: [],
  equipment_visit_columns: [
    {

      align: "center",
      label: "Sr.no",
      field: "index",
      sortable : true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      name: 'equipment_name',
      align: "center",
      label: "Equipment Name",
      field: "equipment_name",
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "actions",
      align: "center",
      label: "Update",
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
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name:"user_id",
      align: "center",
      label: "User ID",
      field: "user_id",
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
      name:"val",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },

  ],

  hospital_visit_data: [],
  hospital_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      style: 'max-width: 5px;',
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
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
      label: "Update",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "visit_status",
      align: "center",
      label: "Status",
      field: "visit_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "user_id",
      align: "center",
      label: "User ID",
      field: "user_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "concatenated_name",
      align: "center",
      label: "Name - Username ",
      field: "concatenated_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "inserted_date_time",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      name: "updated_date_time",
      align: "center",
      label: "Updated Date Time ",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      },
    },


  ],

  agent_visit_data: [],
  agent_visit_columns: [
    {
      name: "index",
      align: "center",
      label: "Sr.no",
      field: "index",
      sortable: true,
      style: 'max-width: 5px;',
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      name: "agent_name",
      align: "center",
      label: "Agent Name",
      field: "agent_name",
      sortable: true,
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "actions",
      align: "center",
      label: "Update",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "visit_status",
      align: "center",
      label: "Status",
      field: "visit_status",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "user_id",
      align: "center",
      label: "User ID",
      field: "user_id",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },
    {
      name: "concatenated_name",
      align: "center",
      label: "Name - Username ",
      field: "concatenated_name",
      headerClasses: "bg-indigo-10 text-white",
      headerStyle: {
        fontWeight: "bold"
      }
    },

    {
      name: "inserted_date_time",
      align: "center",
      label: "Inserted Date Time ",
      field: row => {
        let dateObject = new Date(row.inserted_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      },
    },
    {
      name: "updated_date_time",
      align: "center",
      label: "Updated Date Time ",
      field: row => {
        let dateObject = new Date(row.updated_date_time);
        let hours = dateObject.getHours() % 12 || 12;
        let amOrPm = dateObject.getHours() >= 12 ? 'PM' : 'AM';
        //console.log(dateObject)
        let formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(dateObject.getMinutes()).padStart(2, '0')} ${amOrPm}`;
        //console.log(formattedDate)
        //console.log(typeof(dateObject))
        return formattedDate
      },
      format: val => `${val}`,
      headerClasses: "bg-indigo-10 text-white",
      sortable: true,
      headerStyle: {
        fontWeight: "bold"
      },
    },


  ],



  agent_account_item_rows: [],
  transport_regAdmin_status_count: [],
  property_operation_roomupdate_row: [],
  propertyoperation_room_avlprice_row: [],

  roomCategoryRatesListRow: [],
  roomCategoryRatesListColumn: [
    {
      name: "sno",
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
    {
      name: "actions",
      headerClasses: "bg-indigo-10 text-white",
      label: "",
      field: "actions",
      align: "center",
      headerStyle: {
        fontWeight: "bold",
      },
    },


  ],

  keyPersonsDataRow: [],
  keyPersonsDataColumn: [
    {
      name: "sno",
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
      field: "key_type",
      headerStyle: {
        fontWeight: "bold",
      },
    },
    {
      align: "center",
      headerClasses: "bg-indigo-10 text-white",

      label: "Doctor Name",
      field: "doctor_name",
      headerStyle: {
        fontWeight: "bold",
      },
    },
    {

      headerClasses: "bg-indigo-10 text-white",
      label: "Speciality Name",
      align: "center",
      field: "speciality_name",
      headerStyle: {
        fontWeight: "bold",
      },
    },
    {
      name: "actions",
      headerClasses: "bg-indigo-10 text-white",
      label: "",
      field: "actions",
      align: "center",
      headerStyle: {
        fontWeight: "bold",
      },
    },


  ],



  // upcoming_bookingdata_partner_rows:[],
  // upcoming_bookings_partner_columns: [
  //   {
  //      align: "center",
  //      label: "Hotel Name",
  //      field: "property_name",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //    {
  //      align: "center",
  //      label: "Check In",
  //      field: "check_in",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //    {
  //      align: "center",
  //      label: "Check Out",
  //      field: "check_out",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //      {
  //      align: "center",
  //      label: "Nights",
  //      field: "no_of_days",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //     {
  //      align: "center",
  //      label: "Booked Date",
  //      field: "booked_date",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //      {
  //      align: "center",
  //      label: "Rooms",
  //      field: "room_booked_count",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //    {
  //      align: "center",
  //      label: "Room Nights",
  //      field: "room_nights",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      },
  //    },
  //     {
  //      align: "center",
  //      label: "Guests",
  //      field: "guest_count",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //    {
  //      align: "center",
  //      label: "Amount",
  //      field: "total_price",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },

  //    {
  //      align: "center",
  //      label: "City",
  //      field: "property_city_name",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //      {
  //      align: "center",
  //      label: "Near Hospital",
  //      field: "near_hospital_name",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"

  //      },
  //      cellStyle: {
  //        wordWrap: "break-word",
  //        maxWidth: "150px",
  //      }
  //    },


  //    {
  //      align: "center",
  //      label: "Booking ID",
  //      field: "booking_order_id",
  //      headerClasses: "bg-indigo-10 text-white",
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //    {
  //      align: "center",
  //      label: "Guest Name",
  //      field: "guests",
  //      headerClasses: "bg-indigo-10 text-white",
  //      style: 'max-width: 350px',
  //      headerStyle: {
  //        fontWeight: "bold"
  //      }
  //    },
  //  ],
});

///getters
const getters = {
  partner_accomodation_status_count: state => state.partner_accomodation_status_count,
  offers_rows: state => state.offers_rows,
  food_registration_rows: state => state.food_registration_rows,
  food_partner_arr: state => state.food_partner_arr,
  food_sub_partner_arr: state => state.food_sub_partner_arr,
  travel_food_sub_partner_arr: state => state.travel_food_sub_partner_arr,
  foodDetails_rows: state => state.foodDetails_rows,
  foodDetails_rows_partner: state => state.foodDetails_rows_partner,
  food_Details_rows: state => state.food_Details_rows,
  acc_food_Details_rows: state => state.acc_food_Details_rows,
  food_partner_registration_rows: state => state.food_partner_registration_rows,
  agent_partner_registration_rows: state =>
    state.agent_partner_registration_rows,
  property_partner_registration_rows: state =>
    state.property_partner_registration_rows,
  property_partner_registration_status_count: state =>
    state.property_partner_registration_status_count,
    property_partnerAcc_status_count: state =>state.property_partnerAcc_status_count,
    property_partner_admin_status_count: state => state.property_partner_admin_status_count,
  property_transport_registration_status_count: state =>
    state.property_transport_registration_status_count,
  transport_reg_rows: state => state.transport_reg_rows,
  transport_reg_admin_rows:state=>state.transport_reg_admin_rows,
  bookings_reg_rows: state => state.bookings_reg_rows,
  transport_registration_ex_rows: state => state.transport_registration_ex_rows,
  transport_regAdmin_status_count:state =>state.transport_regAdmin_status_count,
  travel_partner_names_arr: state => state.travel_partner_names_arr,
  sub_travel_partner_names_arr: state => state.sub_travel_partner_names_arr,
  foodsub_travel_partner_names_arr: state => state.foodsub_travel_partner_names_arr,
  property_reg_rows: state => state.property_reg_rows,
  agent_pending_details: state => state.agent_pending_details,
  // food_partner_reg_rows: state => state.food_partner_reg_rows,
  // food_partner_registration_rows: state => state.food_partner_registration_rows,
  food_partner_registration_status_count: state =>
    state.food_partner_registration_status_count,
  equipment_partner_registration_rows: state =>
    state.equipment_partner_registration_rows,
  property_registration_rows: state => state.property_registration_rows,
  agent_registration_rows: state => state.agent_registration_rows,
  agent_data_rows: state => state.agent_data_rows,
  approved_agent_booking_rows: state => state.approved_agent_booking_rows,
  agent_partner_registration_status_count: state =>
    state.agent_partner_registration_status_count,
  equipment_partner_registration_status_count: state =>
    state.equipment_partner_registration_status_count,
  equipment_partner_names_arr: state => state.equipment_partner_names_arr,
  sub_equipment_partner_names_arr: state =>
    state.sub_equipment_partner_names_arr,
    sub_food_equipment_medical_arr:state =>state.sub_food_equipment_medical_arr,
    medical_store_arr:state => state.medical_store_arr,
    eqp_medical_store_arr:state => state.eqp_medical_store_arr,
    travel_medical_store_arr:state =>state.travel_medical_store_arr,
  equipment_registration_rows: state => state.equipment_registration_rows,
  equipment_all_count_for_admin: state=>state.equipment_all_count_for_admin,
  equipment_item_rows: state => state.equipment_item_rows,
  equipment_acc_rows: state => state.equipment_acc_rows,
  equipment_items_rows: state => state.equipment_items_rows,
  medicalItems_rows: state => state.medicalItems_rows,
  medical_stores_rows: state => state.medical_stores_rows,
  medical_addItems_rows: state => state.medical_addItems_rows,
  travel_item_rows: state => state.travel_item_rows,
  sub_travel_item_rows: state => state.sub_travel_item_rows,
  sub_travel_cart_rows: state => state.sub_travel_cart_rows,
  agent_partner_registration_status_count: state =>
    state.agent_partner_registration_status_count,
  equipment_partner_registration_status_count: state =>
    state.equipment_partner_registration_status_count,
  property_data_rows: state => state.property_data_rows,
  property_data_admin_rows: state => state.property_data_admin_rows,
  property_partner_data_rows: state => state.property_partner_data_rows,
  rooms_property_data_rows: state => state.rooms_property_data_rows,
  rooms_data_rows: state => state.rooms_data_rows,
  travelrooms_data_rows: state => state.travelrooms_data_rows,
  hotelData_rows: state => state.hotelData_rows,
  hotelNames_rows: state => state.hotelNames_rows,
  foodDetails_rows_admin: state => state.foodDetails_rows_admin,
  food_registration_sub_rows: state => state.food_registration_sub_rows,
  food_items_add_count: state => state.food_items_add_count,
  approved_travel_partners_rows: state => state.approved_travel_partners_rows,
  equipment_partnersData_forAdmin_rows: state =>
    state.equipment_partnersData_forAdmin_rows,
  med_partners_approvals_data_rows: state =>
    state.med_partners_approvals_data_rows,
  equipment_items_forAdmin_rows: state => state.equipment_items_forAdmin_rows,
  rooms_data_admin_rows: state => state.rooms_data_admin_rows,
  food_partner_admin_rows: state => state.food_partner_admin_rows,
  approved_food_partners_rows: state => state.approved_food_partners_rows,
  allRoom_avail_details_arr: state => state.allRoom_avail_details_arr,
  otherrooms_data_rows: state => state.otherrooms_data_rows,
  foodproperty_data_rows: state => state.foodproperty_data_rows,
  travel_item_partner_rows: state => state.travel_item_partner_rows,
  travelproperty_data_rows: state => state.travelproperty_data_rows,
  otherequipment_item_rows: state => state.otherequipment_item_rows,
  othertravel_item_rows: state => state.othertravel_item_rows,
  travelequipment_item_rows: state => state.travelequipment_item_rows,
  travelfoodDetails_rows: state => state.travelfoodDetails_rows,
  acc_travel_rows:state => state.acc_travel_rows,
  restaurant_data_rows: state => state.restaurant_data_rows,
  food_restaurant_data_rows: state => state.food_restaurant_data_rows,
  travel_restaurant_data_rows: state => state.travel_restaurant_data_rows,
  transport_item_rows: state => state.transport_item_rows,
  acctransport_item_rows: state => state.acctransport_item_rows,
  foodtransport_item_rows: state => state.foodtransport_item_rows,
  medicaltransport_item_rows:state => state.medicaltransport_item_rows,
  eqp_restaurant_data_rows:state => state.eqp_restaurant_data_rows,
  accmedicalstore_item_rows: state => state.accmedicalstore_item_rows,
  partners_allDisplay_approvals_data_row: state =>state.partners_allDisplay_approvals_data_row,
  foodmedicalstore_item_rows: state => state.foodmedicalstore_item_rows,
  travelmedicalstore_item_rows: state => state.travelmedicalstore_item_rows,
  transportoperation_item_rows: state => state.transportoperation_item_rows,
  acctransportoperation_item_rows: state => state.acctransportoperation_item_rows,
  medicaltransportoperation_item_rows: state => state.medicaltransportoperation_item_rows,
  foodtransportoperation_item_rows: state => state.foodtransportoperation_item_rows,
  agent_account_item_rows: state => state.agent_account_item_rows,
  transport_item_admin_rows: state => state.transport_item_admin_rows,
  travel_admin_count_rows: state => state.travel_admin_count_rows,
  property_operation_roomupdate_row: state => state.property_operation_roomupdate_row,
  propertyoperation_room_avlprice_row: state => state.propertyoperation_room_avlprice_row,
  upcoming_bookingdata_partner_rows: state =>
  state.upcoming_bookingdata_partner_rows,
  accomadation_visit_data: state => state.accomadation_visit_data,
  travel_visit_data: state => state.travel_visit_data,
  food_visit_data: state => state.food_visit_data,
  equipment_visit_data: state => state.equipment_visit_data,
  roomCategoryRatesListRow: (state) => state.roomCategoryRatesListRow,
  hospital_visit_data: (state) => state.hospital_visit_data,
  keyPersonsDataRow: (state) => state.keyPersonsDataRow,
  agent_visit_data: (state) => state.agent_visit_data,

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
  getHotelsNames({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/propertyRegistrationMaster/getHotelsNames/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_HOTEL_NAMES", rows);
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
  loadFoodPartnerNames({ commit }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    api
      .get(`/foodPartner/loadPartnerNames/${user.account_id}`)

      .then(response => {
        commit("SET_FOOD_PARTNER_NAME", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  loadFoodStatus({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .put(
        `/foodPartner/loadFoodStatus/${payload.agent_id}/${payload.agent_sub_id}/${payload.txn_id}/${payload.item_txn_id}`,
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
        .post("/foodPartner/ledgerFoodDetails", payload)
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
   // console.log("sasa",payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .get(
        `/foodPartner/mainFoodPartnerDetails/${payload.account_id}/${payload.agent_id}/${payload.txn_id}`
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
  getBookingFoodTypes({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartner/getBookingFoodTypes/${payload.txn_id}/${payload.agent_id}/${payload.agent_sub_id}/${payload.account_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_DETAILS_SUB_DETAILS", rows);
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
      //  }
    }, 1500);
  },
  addFoodItemDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      // for(let i = 0; i < payload.length; i++) {
      api
        .get(
          `/foodPartner/addFoodItemDetails/${payload.agent_id}/${payload.agent_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_ITEM_COUNT_DETAILS", rows);
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
      //  }
    }, 1500);
  },
  getBookingFoodDetails({ commit, dispatch }, payload) {
    // let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartner/getBookingFoodDetails/bookingDetails/${payload}`)
        .then(response => {
          if (response.data.data.length > 0) {
            let rows = response.data;
            commit("SET_FOOD_DETAILS", rows);
          } else {
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: `Sorry! Currently, there are No Partners Available for this City`,
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
              msg: "Error While Loading Food Registration Master Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  loadFoodPartnerData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartner/loadFoodPartnerData/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_MAIN_DETAILS", rows);
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
  getHotelInfo({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getHotelInfo/${user.account_id}/${payload.property_name.txn_id}/${payload.partner_name.partner_id}/${payload.partner_sub_name.partner_sub_id}`
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
  getfoodHotelInfo({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .get(
        `/propertyRegistrationMaster/getfoodHotelInfo/${user.account_id}/${payload.property_name.txn_id}/${payload.partner_name.agent_id}/${payload.partner_sub_name.agent_sub_id}`
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
  gettravelHotelInfo({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/gettravelHotelInfo/${user.account_id}/${payload.property_name.txn_id}/${payload.property_name.partner_id}/${payload.property_name.partner_sub_id}`
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

  getmedicalHotelInfo({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getmedicalHotelInfo/${user.account_id}/${payload.property_name.txn_id}/${payload.property_name.partner_id}/${payload.property_name.partner_sub_id}`
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
  loadAvailabilityDates({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getDateAvailability/${user.account_id}/${payload.property_txn_id}/${payload.partner_id}/${payload.partner_sub_id}`
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
  //agent partner masterr

  /* Property Registration Master*/
  propertyRegistrationMasterAdd({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster", formData, {
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
  saveMedicalStoresData({ dispatch }, formData) {
   // console.log("hgfvg",formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentPartner/saveMedicalStores", formData, {
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
            // dispatch("getPropertyRegistrationStatusCount");
            // dispatch("getPropertyRegistrationMaster");
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
  //Sachin Saving Method for Acc Medical Store Data
  saveAccMedicalStoresData({ dispatch }, formData) {
   // console.log("formdata",formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentPartner/savingMedicalStoreDetails", formData, {
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
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Transport Details",
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
        .post("/propertyRegistrationMaster/savingPropertyDetails", formData, {
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
  otherroomDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartner/savingOtherRoomDetails", formData, {
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
  propertyPartnerDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentPartner/SavingPropertyPartnerDetails", formData, {
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
  updateOtherPropertyDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/updateOtherPropertyData/${formData.txn_id}`,
          formData
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            // dispatch("loadPropertyDetails");
          }, 1000);
        });
    }, 1000);
  },



  updateOtherRoomsDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/updateOtherRoomsData/${payload.txn_id}/${payload.partner_id}/${payload.partner_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("loadRoomsDetails");
          }, 1000);
        });
    }, 1000);
  },
  updatingOtherEquipmentDetailsForm({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/updatingOtherEquipment/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
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
  getPropertyDetails({ commit, dispatch }, payload) {
    // console.log("sasass",payload);
    let user = JSON.parse(localStorage.getItem("user")) || [];

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getPropertyData/${user.account_id}/${payload.partner_id}/${payload.partner_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ADD_PROPERTY_DATA", rows);
          // console.log("doc",rows);
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
  getPropertyPartnerDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getPropertyPartnerDetails/${payload.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ADD_PROPERTY_PARTNER_DATA", rows);
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
   // console.log("gggg",formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster/savingRoomDetails", formData, {
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
  propertyRoomDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentPartner/propertyRoomDetailsSaving", formData, {
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
  getRoomsDetailsForAdmin({ commit, dispatch }, payload) {
   // console.log("roomfor admin",payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getRoomsDataForAdmin/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ROOMS_DATA_FOR_ADMIN", rows);
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
  getRoomsDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getRoomsData/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ADD_ROOMS_DATA", rows);
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
  getRoomsPropertyDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getRoomsPropertyDetails/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ADD_ROOMS_PROPERTY_DATA", rows);

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
        .get(`/propertyRegistrationMaster/existingUserProperty/${payload}`)
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
  getHotelsData({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/propertyRegistrationMaster/gethotels/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_HOTEL_DATA", rows);
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
  /* Property Registration Master for existing user*/
  propertyRegistrationMasterExistingUser({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/propertyRegistrationMaster/existingUserProperty/${payload}`)
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
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/propertyRegistrationMaster/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_PROPERTY_REGISTRATION", rows);
         //console.log("rows rfyhgetday",rows);
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
  // Update Accommodation Partners Data
  updatePropertyPartnerDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/propertyRegistrationMaster/${formData.account_id}/${formData.partner_id}/${formData.partner_sub_id}/${formData.name}/${formData.partner_sub_name}`,
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
          }, 1000);
        });
    }, 1000);
  },
  updatePropertyDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .put(
        `/propertyRegistrationMaster/updatePropertyData/${formData.txn_id}`,
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
            dispatch("getPropertyDetails");
            dispatch("getPropertyRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },
  updatemedicalPropertyPartnerDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/updatePropertyPartnerDetails/${formData.txn_id}`,
          formData
        )
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
        });
    }, 1000);
  },
  updateRoomStatus({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/propertyRegistrationMaster/updateRoomStatus/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}/${payload.property_txn_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
        });
    }, 1000);
  },
  approvePartnerAccDetails({ dispatch }, payload) {

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/propertyRegistrationMaster/approveAccPartnersData/${payload.partner_id}/${payload.partner_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getPropertyRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },



  approvePropertyAccDetails({ dispatch }, payload) {
   console.log("propert Approved",payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/propertyRegistrationMaster/approveAccPropertyData/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getPropertyRegistrationMaster");
            dispatch("getAllPartnersData");

          }, 1000);
        });
    }, 1000);
  },

  approveRoomAccDetails({ dispatch }, payload) {
    //console.log("Room Approved",payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/propertyRegistrationMaster/approveAccRoomData/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getPropertyRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },

  rejectRoomAccDetails({ dispatch }, payload) {
   // console.log("Room Approved",payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/propertyRegistrationMaster/rejectAccRoomData/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getPropertyRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },
  updateRoomsDetails({ dispatch }, formData) {
    //console.log("update",payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .put(
        `/propertyRegistrationMaster/updateRoomsData/${formData.txn_id}/${formData.partner_id}/${formData.partner_sub_id}`,
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
          }, 1000);
        });
    }, 1000);
  },
  updateRoomsPropertyDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/updateRoomsPropertyDetails/${payload.txn_id}/${payload.partner_id}/${payload.partner_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getRoomsDetails");
          }, 1000);
        });
    }, 1000);
  },
  // Update Medical Partners Data
  updateEquipmentDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .put(
        `/equipmentPartner/${formData.user_id}/${formData.equipment_id}/${formData.equipment_sub_id}/${formData.name}/${formData.partner_sub_name}`,
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
  loadTravelpartnerNames({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/transporterApi/TravelpartnerNames/${user.account_id}`)
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
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/SubTravelpartnerNames/${user.account_id}/${payload.agent_id}`
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

  loadAccTravelSubpartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/loadAccTravelSubpartnerNames/${user.account_id}/${payload.partner_id}`
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
  loadFoodTravelSubpartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
            .get(
                `/transporterApi/loadFoodTravelSubpartnerNames/${user.account_id}/${payload.agent_id}`
            )
            .then(response => {
                commit("SET_FOODSUB_TRAVEL_PARTNER_NAMES", response.data);
            })
            .catch(error => {
                console.log(error);
                dispatch(
                    "alerts_loaders/showAlert", {
                        msg: "Error While Loading Transpoter Data",
                        type: "negative"
                    }, { root: true }
                );
            });
    }, 1500);
},
  loadEquipmentTravelSubpartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/loadEquipmentTravelSubpartnerNames/${user.account_id}/${payload.equipment_id}`
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
  travelLocationUpdating({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .put(
        `/transporterApi/updatingTravelDetails/${payload.txn_id}/${payload.agent_id}/${payload.transport_sub_id}`,
        payload,{

            headers: {
              "Content-Type": "multipart/form-data"
            }
        }
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

  travelPartnerUpdating({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/travelPartnerUpdating/${payload.txn_id}/${payload.agent_id}/${payload.transport_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("loadTravelDetails",payload);
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

  updatingEquipmentDetailsForm({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/updatingEquipment/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
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
  // updateRoomsDetails({ dispatch }, payload) {
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .put(
  //         `/propertyRegistrationMaster/updateRoomsData/${payload.txn_id}/${payload.partner_id}/${payload.partner_sub_id}`,
  //         payload
  //       )
  //       .then(response => {
  //         dispatch(
  //           "alerts_loaders/showAlert",
  //           { msg: response.data.message, type: "positive" },
  //           { root: true }
  //         );
  //         setTimeout(() => {
  //           dispatch("getRoomsDetails");
  //         }, 1000);
  //       });
  //   }, 1000);
  // },
  approveAgentRegDetails({ dispatch }, payload) {
    api
      .put(`/agentApi/approveAgentRegDetails/agent`,payload)
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        dispatch("getAgentPartnerRegDetails")
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Agent Approval Failed! Please try Again", type: "negative" },
          { root: true }
        );
      });
  },
  approveTravelRegDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/approveTravelRegDetails/${payload.agent_id}/${payload.transport_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTransportRegMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },

  rejectAgentRegDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/agentApi/rejectAgentRegDetails/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
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

  rejectPartnerAccDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/propertyRegistrationMaster/rejectAccPartnersData/${payload.partner_id}/${payload.partner_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
          }, 1000);
        });
    }, 1000);
  },

  rejectTravelRegDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/rejectTravelRegDetails/${payload.agent_id}/${payload.transport_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTransportRegMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  rejectFoodRegDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/rejectFoodRegDetails/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getFoodRegistrationMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  approveFoodRegDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/approveFoodRegDetails/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getFoodRegistrationMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  approveRestaurantDetails({ dispatch }, payload) {
    // console.log("approveRestaurantDetails",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/approveRestaurantDetails/${payload.txn_id}/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getFoodRegistrationMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  rejectRestaurantDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/rejectRestaurantDetails/${payload.txn_id}/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getFoodRestaurantDetailsadmin");
          }, 1000);
        });
    }, 1000);
  },
  approvefoodItemApprove({ dispatch }, payload) {
    // console.log("item_txn_id",payload.item_txn_id);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/approvefoodItemApprove/${payload.item_txn_id}/${payload.txn_id}/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getFoodRegistrationMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  rejectfoodItemReject({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/rejectfoodItemReject/${payload.item_txn_id}/${payload.txn_id}/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getFoodRegistrationMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  approveEquipmentRegDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/approveEquipmentRegDetails/${payload.equipment_id}/${payload.equipment_sub_id}`,
          payload
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

  rejectEquipmentRegDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/rejectEquipmentRegDetails/${payload.equipment_id}/${payload.equipment_sub_id}`,
          payload
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
  approveMedicalstoreDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/approveMedicalstoreDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
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
  rejectMedicalstoreDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/rejectMedicalstoreDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
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
  approveEquipmentDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/approveEquipmentDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
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
  rejectEquipmentDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/rejectEquipmentDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
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
  approveTrasnportDetails({ dispatch }, payload) {
    // console.log("approveTrasnportDetails",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/approveTrasnportDetails/${payload.	tnx_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTransportRegMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  rejectTransportDetails({ dispatch }, payload) {
    // console.log("rejectTransportDetails",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/rejectTransportDetails/${payload.tnx_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTransportRegMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  approveTravelDetails({ dispatch }, payload) {
    // console.log("approveTravelDetails",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/approveTravelDetails/${payload.agent_id}/${payload.transport_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTransportRegMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  rejectTravelDetails({ dispatch }, payload) {
    // console.log("rejectTravelDetails",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/rejectTravelDetails/${payload.agent_id}/${payload.transport_sub_id}`,
          payload
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTransportRegMasterInAdmin");
          }, 1000);
        });
    }, 1000);
  },
  // Update Medical Partners Data
  updateEquipmentDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/${formData.user_id}/${formData.equipment_id}/${formData.equipment_sub_id}/${formData.agent_name}/${formData.equipment_sub_name}`,
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
  updatingEquipmentDetailsForm({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/updatingEquipment/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
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
  // Update Food Partners Data
  updateFoodPartnerDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/${formData.user_id}/${formData.agent_id}/${formData.agent_sub_id}/${formData.name}/${formData.partner_sub_name}`,
          formData
        )
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

  // Update Transport Partners Data
  updateTravelPartnerDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/${formData.user_id}/${formData.agent_id}/${formData.transport_sub_id}/${formData.name}/${formData.partner_sub_name}`,
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
  /* Property Registration Master get method based on status*/
  getPropertyRegistrationBasedOnStatus({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getPropertyDataOnStatus/${payload}/${user.account_id}`
        )
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
  getPartnerAccomodationStatusCount({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getPartnerAccomodationStatusCount/${user.account_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_PROPERTY_PARTNERREGISTRATION_STATUS_COUNT", rows);
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

  /* Property Registration Master get method for Count of status*/
  getPropertyRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          "/propertyRegistrationMaster/propertyRegistrationMasterStatusCount"
        )
        .then(response => {
          let rows = response.data;
         // console.log("nnnn",response.data)
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
  //  Travel Details Saving
  travelDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/savingTravelDetails", formData, {
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
  addTravelDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentPartner/addTravelDetailsSaving", formData, {
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
  getTravelDetailsSaving({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/travelLocationDetails/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
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
  getTransportRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/transporterApi/transportRegistrationMasterStatusCount")
        .then(response => {
          let rows = response.data;
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
  getTransportAdminBasedOnStatus({ commit, dispatch }, payload) {
    // console.log("payload",payload);
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/getTransportAdminBasedOnStatus/${payload}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRANSPORT_ADMIN_STATUSCOUNT", rows);
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
        .get(`/transporterApi/transportExistingUser/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_TRANSPORT_REGISTRATION_EXISTING_USER", rows);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1500);
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
        .get(
          `/transporterApi/getTransportDataOnStatus/${payload}/${user.account_id}`
        )
        .then(response => {
          let rows = response.data;
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

  getTransportPartnerRegApprovalStatus({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/transporterApi/getTransportPartnerApproveData/approvedData`)
        .then(response => {
          let rows = response.data;
          commit("SET_APPROVED_PARTNERS_DATA", rows);
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
    setTimeout(() => {
      api
        .get(`/agentApi/existingUserProperty/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_AGENT_REGISTRATION_EXISTING_USER", rows);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1500);
  },
  getAgentRegBasedOnStatus({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/agentApi/getAgentDataOnStatus/${payload}/${user.account_id}`)
        .then(response => {
          let rows = response.data;
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

  getAgentRegApprovalStatus({ commit, dispatch }, payload) {
    if (payload == "") {
      payload = "Approved";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/agentApi/getAgentRegApprovalStatus/agent`)
        .then(response => {
          let rows = response.data;
          commit("SET_AGENT_REG_FOR_APPROVALS", rows);
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
  transportRegistrationMasterExistingUser({ commit }, payload) {
    setTimeout(() => {
      api
        .get(`/transporterApi/transportExistingUser/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_TRANSPORT_REGISTRATION_EXISTING_USER", rows);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1500);
  },
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
              msg: "Error While Loading Property Registration Master Data",
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
        .get(`/agentApi/agentRegApproval`)
        .then(response => {
          // let result = [];
          let rows = response.data;
          commit("SET_AGENT_REG_DETAILS", rows);
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
  // to get agentDetails by passing status
  getAgentDetailsByStatus({ commit, dispatch }, status) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/agentApi/${status}`)
        .then(response => {
          let rows = response.data;
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
        .post("/transporterApi", payload)
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
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/transporterApi/${user.account_id}`)
        .then(response => {
          let rows = response.data;
          commit("SET_TRANSPORT_REG_DETAILS", rows);
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
  getTransportPartnersInAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/transporterApi/getPartnersDataForAdmin/pendingPartners")
        .then(response => {
          let rows = response.data;
          commit("SET_TRANSPORT_REG_DETAILS", rows);
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
  // getTransportRegMaster({ commit, dispatch }) {
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .get("/transporterApi/getTransportRegData")
  //       .then(response => {
  //         let rows = response.data;
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
  createTravelLocRegDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/saveTravelLocationData", payload, {
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
        .post("/propertyRegistrationMaster/savePropertyRegDetails", payload)
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
  // saveRoomStatusCount({ dispatch }, payload) {
  //   dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .post(`/propertyRegistrationMaster/saveRoomStatusData`, payload)
  //       .then(response => {
  //         dispatch(
  //           "alerts_loaders/showAlert",
  //           { msg: response.data.message, type: "positive" },
  //           { root: true }
  //         );
  //         setTimeout(() => {
  //           dispatch("getPropertyRegistrationMaster");
  //         }, 1000);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           `alerts_loaders/showAlert`,
  //           {
  //             msg: "Failed To Save Room Status Data",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },
  getPropertyRegMaster({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/propertyRegistrationMaster/getMultiplePropertyDetails")
        .then(response => {
          let rows = response.data;

          commit("SET_TRANSPORT_REG_DETAILS", rows);
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
  getEquipmentRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/equipmentPartner/equipmentRegistrationMasterStatusCount")
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
  getEquipmentRegistrationBasedOnStatus({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getEquipmentDataOnStatus/${payload}/${user.account_id}`
        )
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

  getEquipmentPartnerRegApprovalStatus({ commit, dispatch }, payload) {
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentPartner/getEquipmentPartnerRegApprovalStatus/equipment`)
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

  getPropertyDetailsForAdmin({ commit, dispatch }, payload) {
  //  console.log("sasass",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/propertyRegistrationMaster/getPropertyDataForAdmin/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          // commit("SET_ADD_PROPERTY_DATA", rows);
          commit("SET_ADD_PROPERTY_DATA_ADMIN", rows);
          // console.log("sachin",rows)
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
  loadTravelStatus({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/loadTravelStatus/${payload.agent_id}/${payload.transport_sub_id}/${payload.txn_id}`,
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
        .post("/transporterApi/ledgertravelDetails", payload)
        .then(response => {
          dispatch("getTravelDetails", payload);
          // dispatch(
          //   "alerts_loaders/showAlert",
          //   { msg: response.data.message, type: "positive" },
          //   { root: true }
          // );
          // setTimeout(() => {
          //   dispatch("getTravelDetails");
          // }, 1000);
        })
        .catch(error => {
          console.log(error);
          // dispatch(
          //   `alerts_loaders/showAlert`,
          //   {
          //     msg: "Failed To Save Travel Details Data",
          //     type: "negative"
          //   },
          //   { root: true }
          // );
        });
    }, 1500);
  },
  getTravelDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/travelItemDetails/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVEL_LOCATION_DETAILS", rows);
          //console.log("rororor",rows);
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
  getTravelDetailsForAdmin({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/getTravelDetailsForAdmin/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVEL_DETAILS_FOR_ADMIN", rows);
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
  getTravelbookingDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/transporterApi/travelLocationbookingDetails/booking/${payload.time}/${payload.city_id}`)
        .then(response => {
          if (response.data.data.length > 0) {
            let rows = response.data;
            commit("SET_TRAVEL_LOCATION_DETAILS", rows);
          } else if (response.data.data.length == 0) {
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: "No Vehicles Avaiable",
                type: "negative",
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
              msg: "Error While Loading Travel Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTravelBookingData({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/travelLocationData/${payload.agent_id}/${payload.transport_sub_id}/${payload.time}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_SUB_TRAVEL_LOCATION_DETAILS", rows);
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
  getTravelBookingcart({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/travelLocationCartData/${payload.agent_id}/${payload.transport_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVEL_LOCATION_CART_DETAILS", rows);
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
  equipmentRegistrationMasterExistingUser({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentPartner/existingUserProperty/${payload}`)
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
        .post("/equipmentPartner/equipmentLocation", formData, {
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
            dispatch("getEquipmentLocationDetails");
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
  getMedicalEqpData({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getMedicalEqpData/${user.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
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
  getMedicalStoresData({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentPartner/getMedicalStoresData/${user.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`)
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
  getEquipmentLocationDetails({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/equipmentLocationDetails/${user.account_id}/${payload.partner_id}/${payload.partner_sub_id}`
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
  getEquipmentApprovalDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/approvedMedPartnersDataForAdmin/approvedPartners`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_MED_APPROVED_PARTNERS_FORADMIN", rows);
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
  getEquipmentItems({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getEquipmentItemsForAdmin/${payload.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_EQUIPMENT_ITEMS_FORADMIN", rows);
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
  getEquipmentBookingDetails({ commit, dispatch }, payload) {
   // console.log("payload",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getEquipmentBookingDetails/booking/${payload.city}`
        )
        .then(response => {
          if (response.data.data.length > 0) {
            let rows = response.data;
            commit("SET_EQUIPMENT_LOCATION_DETAILS", rows);
          } else {
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: `Sorry! Currently, there are No Partners Available for this City`,
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
              msg: "Error While Loading Equipment Booking Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getAllEquipmentDetailsForAdmin({ commit, dispatch },payload) {
    // ("getAllEquipmentDetailsForAdmin",payload);
     dispatch("alerts_loaders/startLoading", "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .get(`/equipmentPartner/getAllEquipmentDetailsForAdmin/${payload}`)
         .then(response => {
           let rows = response.data;
           commit("SET_EQUIPMENT_DETAILS_FOR_ADMIN", rows);
          //  console.log("SET_EQUIPMENT_DETAILS_FOR_ADMIN",rows);
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
   getMedicalDisplayCountOfPartner({ commit, dispatch },payload) {
    //  ("getMedicalDisplayCountOfPartner",payload);
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(`/equipmentPartner/getMedicalDisplayCountOfPartner/${payload}`)
          .then(response => {
            let rows = response.data;
            commit("SET_EQUIPMENT_DETAILS_FOR_PARTNER", rows);

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
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentPartner/${user.account_id}`)
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
  getMedicalPartnersForAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentPartner/MedicalPartnersForAdmin/pendingPartners`)
        .then(response => {
          let rows = response.data;
          commit("SET_MED_PARTNERS_FOR_ADMIN", rows);
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
        .post("/equipmentPartner", formData, {
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
  loadEquipmentpartnerNames({ commit, dispatch }) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/equipmentPartner/equipmentpartnerNames/${user.account_id}`)
        .then(response => {
          commit("SET_EQUIPMENT_PARTNER_NAMES", response.data);
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
  loadEquipmentSubpartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/SubequipmentpartnerNames/${user.account_id}/${payload.equipment_id}`
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

  loadAccEquipmentSubpartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadAccEquipmentSubpartnerNames/${user.account_id}/${payload.partner_id}`
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
  loadfoodEquipmentSubpartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadfoodEquipmentSubpartnerNames/${user.account_id}/${payload.agent_id}`
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
  loadTravelEquipmentSubpartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadTravelEquipmentSubpartnerNames/${user.account_id}/${payload.agent_id}`
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
  loadmedicalstoreDetails({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadmedicalstoreDetails/${user.account_id}/${payload.partner_id}/${payload.partner_sub_id}`
        )
        .then(response => {
          commit("SET_MEDICAL_STORE", response.data);
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

  loadmedicalDetails({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadmedicalDetails/${user.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
        )
        .then(response => {
          commit("SET_EQP_MEDICAL_STORE", response.data);
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
  loadEquipmentmedicalDetails({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadEquipmentmedicalDetails/${user.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
        )
        .then(response => {
          commit("SET_TRL_MEDICAL_STORE", response.data);
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
  loadfoodmedicalDetails({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadfoodmedicalDetails/${user.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {
          commit("SET_FOOD_EQUIPMENT_MEDICAL", response.data);
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
  loadEquipmentItems({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadEquipmentItems/${payload.equipment_item_id}`
        )
        .then(response => {
          commit("SET_EQUIPMENT_LOCATION_DETAILS", response.data);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment items",
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
          `/equipmentPartner/loadEquipmentStatus/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch("getMedicalEqpData", payload);
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
              msg: "Failed To Update Equipment Details Data",
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
        .post("/equipmentPartner/ledgerEquipmentDetails", payload)
        .then(response => {
          dispatch("getMedicalEqpData", payload);
        })
        .catch(error => {
          console.log(error);
          // dispatch(
          //   `alerts_loaders/showAlert`,
          //   {
          //     msg: "Failed To Save Equipment Details Data",
          //     type: "negative"
          //   },
          //   { root: true }
          // );
        });
    }, 1500);
  },
  /* Food Registration Master get method for Count of status*/

  getFoodRegistrationStatusCount({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/foodPartner/foodRegistrationMasterStatusCount")
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_REGISTRATION_STATUS_COUNT", rows);
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
  //Get food details
  getfoodDetails({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .get(
        `/foodPartner/foodDetails/${payload.agent_id}/${payload.agent_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          // console.log("thirupathi",response.data)
          let rows = response.data;
          commit("SET_FOOD_DETAILS_PARTNER", rows);
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

  foodDetailsUpdating({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/foodPartner/updatingFoodDetails/${formData.item_txn_id}/${formData.agent_id}/${formData.agent_sub_id}`,
          formData,{
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          // dispatch("getFoodDetails", payload);
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


  getfoodDetailsApproval({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartner/foodDetailsForAdmin/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_DETAILS_ADMIN", rows);
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
  //Get food existing user
  // getFoodItemDetails({ commit, dispatch }, payload) {
  //   let user = JSON.parse(localStorage.getItem("user")) || [];
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .get(
  //         `/foodPartner/foodItemDetails/${payload.agent_id}/${payload.agent_sub_id}/${payload.txn_id_id}`
  //       )
  //       .then(response => {
  //         let rows = response.data;
  //         commit("SET_FOOD_STATUS_DETAILS", rows);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           "alerts_loaders/showAlert",
  //           {
  //             msg: "Error While Loading Food Details",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },

  // loadFoodPartnerNames({ commit, dispatch }, payload) {
  //   let user = JSON.parse(localStorage.getItem("user")) || [];
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .get(`/foodPartner/loadPartnerNames/${user.account_id}`)
  //       .then(response => {
  //         let rows = response.data;
  //         commit("SET_FOOD_PARTNER_NAME", rows);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           "alerts_loaders/showAlert",
  //           {
  //             msg: "Error While Loading Food Partner Names",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },
  loadFoodSubPartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartner/loadSubPartnerNames/${user.account_id}/${payload.agent_id}`
        )
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

  loadEquipmentfoodSubpartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartner/loadEquipmentfoodSubpartnerNames/${user.account_id}/${payload.equipment_id}`
        )
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
  loadaccfoodSubPartnerNames({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartner/loadaccfoodSubPartnerNames/${user.account_id}/${payload.partner_id}`
        )
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
  getExistingUserFoodPartner({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartner/existingUserFoodPartner/${payload}`)
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
    let user = JSON.parse(localStorage.getItem("user")) || [];
    if (payload == "") {
      payload = "pending";
    }
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartner/getFoodDataOnStatus/${payload}/${user.account_id}`)
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

  getFoodPartnerRegApprovalStatus({ commit, dispatch },payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartner/getFoodPartnerRegApprovalStatus/adminApprovals/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_PARTNERS_APPROVALS", rows);
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
  //   dispatch("alerts_loaders/startLoading", "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .get("/equipmentPartner")
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
  /* Food Registration Master*/
  foodRegistrationMasterAdd({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartner", formData, {
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
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/foodPartner/${user.account_id}`)
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
  getFoodRegistrationMasterInAdmin({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/foodPartner/foodPartnersForAdmin/pendingPartners")
        .then(response => {
          let rows = response.data;
          commit("SET_FOOD_PARTNERS_FOR_ADMIN", rows);
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
  foodDetailsSaving({ dispatch }, formData) {
    // console.log(formData.food_image)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartner/savingFoodDetails", formData, {
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
  addFoodDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentPartner/addFoodDetailsSaving", formData, {
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
  saveMhOffers({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/MhOffers/saveMhOffers", payload)
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
              msg: "Failed To Save MH Bookings Data Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getBookingEquipmentTypes({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });

      api
        .get(
          `/equipmentPartner/getBookingEquipmentTypes/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.account_id}`
        )
        .then(response => {
          if (response.data.data.length > 0) {
            let rows = response.data;
            commit("SET_EQUIPMENT_MEDICAL_DETAILS", rows);
          } else {
            dispatch(
              "alerts_loaders/showAlert",
              {
                msg: `Sorry! Currently, the Items You have selected is not available`,
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
              msg: "Error While Loading Equipment booking Details",
              type: "negative"
            },
            { root: true }
          );
        });
      //  }
    }, 1500);
  },
  getMedicalItems({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });

      api
        .get(
          `/equipmentPartner/getMedicalItems/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          let rows = response.data;

          commit("SET_EQUIPMENT_MEDICAL_ITEMS", rows);
        })

        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Items Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getOfferDetails({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get("/MhOffers/getOfferDetails")
        .then(response => {
          let rows = response.data;
          commit("SET_OFFER_REGISTRATION", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Booking Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getMhBookingDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/bookings/getBookingsDetails/booking`)
        .then(response => {
          let rows = response.data;
          commit("SET_BOOKING_REGISTRATION", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Booking Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  saveRoomStatusCount({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post(`/propertyRegistrationMaster/saveRoomStatusData`, payload)
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
              msg: "Failed To Save Room Status Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  saveRoomsAvailData({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster/roomAvailability", payload)
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
              msg: "Failed To Save Room Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  otherpropertyDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/savingOtherPropertyDetails", formData, {
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

  otherMedicalSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/savingOtherMedical", formData, {
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
  otherFoodSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/savingOtherFood", formData, {
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
  propertyPartnerDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentPartner/SavingPropertyPartnerDetails", formData, {
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
  // otherroomDetailsSaving({ dispatch }, formData) {
  //   dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .post("/foodPartner/savingOtherRoomDetails", formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data"
  //         }
  //       })
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
  //           {
  //             msg: "Failed To Save Room Details",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },
  otherFoodpropertyDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartner/savingOtherFoodPropertyDetails", formData, {
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

  otherFoodMedicalSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartner/savingOtherFoodMedical", formData, {
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

  otherFoodTravelSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/foodPartner/savingOtherFoodPartner", formData, {
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
  loadPropertyDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/foodPartner/loadPropertyData/${payload.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ADD_FOODPROPERTY_DATA", rows);
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
  loadFoodDetails({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/loadfoodDetails/${user.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_LOAD_FOOD_DETAILS", rows);
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
  loadTravelDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentpartner/loadTravelDetails/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVEL_DETAILS_FOR_PARTNER", rows);
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
  addFoodDetailsUpdating({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/addFoodDetailsUpdating/${payload.item_txn_id}/${payload.agent_id}/${payload.agent_sub_id}`,
          payload
        )
        .then(response => {
          dispatch("loadfoodDetails", payload);
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
   loadMedicalEqpData({ commit, dispatch }, payload) {
     let user = JSON.parse(localStorage.getItem("user")) || [];
     dispatch("alerts_loaders/startLoading", "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .get(
           `/foodPartner/loadMedicalEqpData/${user.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
         )
         .then(response => {
           let rows = response.data;
           commit("SET_OTHEREQUIPMENT_LOCATION_DETAILS", rows);
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



   updatingOtherTravelDetailsForm({ dispatch }, payload) {
     dispatch(`alerts_loaders/saveLoading`, "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .put(
           `/foodPartner/updatingOtherTravelDetails/${payload.txn_id}/${payload.agent_id}/${payload.transport_sub_id}`,
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


   loadTravelDetailsSaving({ commit, dispatch }, payload) {
     dispatch("alerts_loaders/startLoading", "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
       .get(
        `/foodPartner/othertravelLocationDetails/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
      )
         .then(response => {
           let rows = response.data;
           commit("SET_OTHERTRAVEL_DETAILS_FOR_ADMIN", rows);
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

   loadRoomsDetails({ commit, dispatch }, payload) {
     dispatch("alerts_loaders/startLoading", "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .get(
           `/foodPartner/loadRoomsData/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`
         )
         .then(response => {
           let rows = response.data;
           commit("SET_ADD_OTHERROOMS_DATA", rows);
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
   updateTravelPropertyDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/updateTravelPropertyData/${formData.txn_id}`,
          formData
        )
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
        });
    }, 1000);
  },

  travelroomDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/savingTravelRoomDetails", formData, {
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
  updateTravelRoomsDetails({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/updateTravelRoomsData/${payload.txn_id}/${payload.partner_id}/${payload.partner_sub_id}`,
          payload
        )
        .then(response => {
          dispatch("loadTravelRoomsDetails", payload);
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("loadRoomsDetails");
          }, 1000);
        });
    }, 1000);
  },
  loadTravelMedicalEqpData({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/loadTravelMedicalEqpData/${user.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVELEQUIPMENT_LOCATION_DETAILS", rows);
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

  updatingTravelEquipmentDetailsForm({ dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/updatingTravelEquipment/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
          payload
        )
        .then(response => {
          dispatch("loadTravelMedicalEqpData", payload);
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

  getTravelfoodDetails({ commit, dispatch }, payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/travelfoodDetails/${user.account_id}/${payload.agent_id}/${payload.agent_sub_id}/${payload.txn_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVELFOOD_DETAILS", rows);
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
  loadTravelRoomsDetails({ commit, dispatch }, payload) {
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(
            `/transporterApi/loadTravelRoomsData/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}/${payload.txn_id}`
          )
          .then(response => {
            let rows = response.data;
            commit("SET_ADD_TRAVELROOMS_DATA", rows);
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



    updatingTravelFoodDetailsForm({ dispatch }, payload) {

     dispatch(`alerts_loaders/saveLoading`, "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .put(
           `/transporterApi/updatingTravelFoodDetails/${payload.item_txn_id}/${payload.agent_id}/${payload.agent_sub_id}`,
           payload
         )
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
               msg: "Failed To Update Food Details Data",
               type: "negative"
             },
             { root: true }
           );
         });
     }, 1500);
   },


   loadTravelPropertyDetails({ commit, dispatch }, payload) {
     dispatch("alerts_loaders/startLoading", "", { root: true });
     setTimeout(() => {
       dispatch("alerts_loaders/stopLoading", "", { root: true });
       api
         .get(
           `/transporterApi/othertravelPropertyDetails/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
         )
         .then(response => {
           let rows = response.data;
           commit("SET_OTHERTRAVEL_PROPERTY_DETAILS", rows);
         })
         .catch(error => {
           console.log(error);
           dispatch(
             "alerts_loaders/showAlert",
             {
               msg: "Error While Loading Travel Registration Master Data",
               type: "negative"
             },
             { root: true }
           );
         });
     }, 1500);
   },
   AccMedicalSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster/AccMedicalSaving", formData, {
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
  AccFoodSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster/accFoodsaving", formData, {
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
            // dispatch("getFoodDetails");
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

    getAccFoodDetails({ commit, dispatch }, payload) {
      let user = JSON.parse(localStorage.getItem("user")) || [];
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(
            `/propertyRegistrationMaster/getAccFoodDetails/${user.account_id}/${payload.agent_id}/${payload.agent_sub_id}/${payload.txn_id}`
          )
          .then(response => {
            let rows = response.data;
            commit("ACC_FOOD_MAIN_DETAILS", rows);
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

    travelAccSaving({ dispatch }, formData) {
      dispatch(`alerts_loaders/saveLoading`, "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .post("/propertyRegistrationMaster/savingTravelPartner", formData, {
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
              // dispatch("getTransportRegMaster");
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
    medicalAccSaving({ dispatch }, formData) {
      dispatch(`alerts_loaders/saveLoading`, "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .post("/propertyRegistrationMaster/medicalAccSaving", formData, {
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
              // dispatch("getEquipmentRegistrationMaster");
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
    accFoodUpdating({ dispatch }, payload) {
      dispatch(`alerts_loaders/saveLoading`, "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(`/propertyRegistrationMaster/accFoodUpdating/${payload.item_txn_id}/${payload.agent_id}/${payload.agent_sub_id}`,
            payload
          )
          .then(response => {
            // dispatch("getAccFoodDetails", payload);
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
    loadAccTravel({ commit, dispatch }, payload) {

      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(
            `/propertyRegistrationMaster/loadAccTravel/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
          )
          .then(response => {
            let rows = response.data;
            commit("ACC_TRAVEL_PARTNER", rows);
         //   console.log("ff",rows)
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

    accTravelUpdating({ dispatch }, payload) {
      dispatch(`alerts_loaders/saveLoading`, "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(
            `/propertyRegistrationMaster/accTravelUpdating/${payload.txn_id}/${payload.agent_id}/${payload.transport_sub_id}`,
            payload
          )
          .then(response => {
            dispatch(
              "alerts_loaders/showAlert",
              { msg: response.data.message, type: "positive" },
              { root: true }
            );
            setTimeout(() => {
              // dispatch("loadAccTravel",payload);
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
    getAccMedical({ commit, dispatch }, payload) {
      let user = JSON.parse(localStorage.getItem("user")) || [];
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(
            `/propertyRegistrationMaster/getAccMedical/${user.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
          )
          .then(response => {
            let rows = response.data;
            commit("SET_ACC_EQUIPMENT_DETAILS", rows);
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
    accUpdatingmedical({ dispatch }, payload) {
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(
            `/propertyRegistrationMaster/accUpdatingmedical/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
            payload
          )
          .then(response => {
            dispatch(
              "alerts_loaders/showAlert",
              { msg: response.data.message, type: "positive" },
              { root: true }
            );
            setTimeout(() => {
              dispatch("getAccMedical");
            }, 1000);
          });
      }, 1000);
    },
    restaurantDetailsSaving({ dispatch }, payload) {
    //  console.log("ooooo",payload)
      dispatch(`alerts_loaders/saveLoading`, "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .post("/propertyRegistrationMaster/savingRestaurantDetails", payload, {
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
              // dispatch("getPropertyDetails");
              // dispatch("getPropertyRegistrationMaster");
            }, 1000);
          })
          .catch(error => {
            console.log(error);
            dispatch(
              `alerts_loaders/showAlert`,
              {
                msg: "Failed To Save Restaurant Details Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },
    getRestaurantDetails({ commit, dispatch }, payload) {
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(
            `/propertyRegistrationMaster/getRestaurantDetails/${payload.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
          )
          .then(response => {
            let rows = response.data;
            commit("SET_ADD_RESTAURANRT_DATA", rows);
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
    updateRestaurantDetails({ dispatch }, formData) {
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(
            `/propertyRegistrationMaster/updateRestaurantDetails/${formData.txn_id}`,
            formData
          )
          .then(response => {
            dispatch(
              "alerts_loaders/showAlert",
              { msg: response.data.message, type: "positive" },
              { root: true }
            );
            setTimeout(() => {
              dispatch("getRestaurantDetails");
              // dispatch("getPropertyRegistrationMaster");
            }, 1000);
          });
      }, 1000);
    },
    foodRestaurantDetailsSaving({ dispatch }, payload) {
      dispatch(`alerts_loaders/saveLoading`, "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .post("/foodPartner/foodRestaurantDetailsSaving", payload, {
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
              // dispatch("getPropertyDetails");
              // dispatch("getPropertyRegistrationMaster");
            }, 1000);
          })
          .catch(error => {
            console.log(error);
            dispatch(
              `alerts_loaders/showAlert`,
              {
                msg: "Failed To Save Restaurant Details Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },
    getFoodRestaurantDetails({ commit, dispatch }, payload) {
      // console.log("error",payload.agent_id)
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .get(
            `/foodPartner/getFoodRestaurantDetails/${payload.agent_id}/${payload.agent_sub_id}`
          )
          .then(response => {
            let rows = response.data;
            commit("SET_FOOD_RESTAURANRT_DATA", rows);
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
    updateFoodRestaurant({ dispatch }, formData) {
      dispatch("alerts_loaders/startLoading", "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .put(
            `/foodPartner/updateFoodRestaurant/${formData.txn_id}`,
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
  transportDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/savingTransportDetails", formData, {
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
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Transport Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getTransportDetailsSaving({ commit, dispatch }, payload) {
    // console.log("transport",payload);
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/transportDetails/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
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
  getPropertyRegAdminBasedOnStatus({ commit, dispatch }) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          "/staffAccPartnersData/getPropertyRegAdminBasedOnStatus"
        )
        .then(response => {
          let rows = response.data;
          commit("SET_PROPERTY_ADMIN_REGISTRATION_STATUS_COUNT", rows);
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


  updatingTransportDetails({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/editTransportDetails/${formData.agent_id}/${formData.transport_sub_id}/${formData.tnx_id}`,
          formData,{
            headers: {
              "Content-Type": "multipart/form-data"
            }

          }
        )
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
  travelLocationdetailsUpdating({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/updatingTravellocationDetails/${payload.txn_id}/${payload.agent_id}/${payload.transport_sub_id}`,
          payload,{

              headers: {
                "Content-Type": "multipart/form-data"
              }
          }
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
           dispatch("getTravelDetailsSaving");
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
  acctransportDataSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/accomodationsavingTransportDetails", formData, {
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
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Transport Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getAccomodationTransportDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/accomodationtransportDetails/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_ACC_TRANSPORT_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Transport Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  updatingAccoTransportDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
      .put(
        `/transporterApi/editAccoTransportDetails/${payload.agent_id}/${payload.transport_sub_id}/${payload.tnx_id}`,
        payload
      )
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



  foodtransportDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/saveFoodTransportDetails", formData, {
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
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Transport Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  getFoodTransportDetailsSaving({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/foodtransportDetails/${payload.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_FOODTRANSPORT_DETAILS", rows);
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

  updatingFoodTransportDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/editFoodTransportDetails/${payload.agent_id}/${payload.transport_sub_id}/${payload.tnx_id}`,
          payload
        )
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

  medicaltransportDetailsSaving({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/saveMedicalTransportDetails", formData, {
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
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Transport Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },


  getMedicalTransportDetailsSaving({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/medicaltransportDetails/${payload.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_MEDICALTRANSPORT_DETAILS", rows);
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

  updatingMedicalTransportDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/editMedicalTransportDetails/${payload.agent_id}/${payload.transport_sub_id}/${payload.tnx_id}`,
          payload
        )
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
  getPropertyDisplayCountOfPartner({ commit, dispatch },payload) {
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/propertyRegistrationMaster/getPropertyDisplayCountOfPartner/${user.account_id}/${payload}`)
        .then(response => {
          let rows = response.data;
          commit("SET_PARTNER_ALLDATADISPLAY", rows);
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
  travelRestaurantSaving({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/transporterApi/savingTravelRestaurant", payload, {
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
            // dispatch("getPropertyDetails");
            // dispatch("getPropertyRegistrationMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Restaurant Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTravelRestaurantDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/transporterApi/getTravelRestaurantDetails/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("ADD_TRAVEL_RESTAURANRT_DATA", rows);
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
  updateTravelRestaurantDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/transporterApi/updateTravelRestaurantDetails/${formData.txn_id}`,
          formData
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getTravelRestaurantDetails");
            // dispatch("getPropertyRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },
  EqpRestaurantSaving({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/equipmentPartner/EqpRestaurantSaving", payload, {
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
            // dispatch("getEqpRestaurantDetails");
            // dispatch("getPropertyRegistrationMaster");
          }, 1000);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Restaurant Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getEqpRestaurantDetails({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
        `/equipmentPartner/getEqpRestaurantDetails/medical/${payload.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("ADD_EQP_RESTAURANRT_DATA", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Equipment Restaurant Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  updateEqpRestaurantDetails({ dispatch }, formData) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/updateEqpRestaurantDetails/${formData.txn_id}`,
          formData
        )
        .then(response => {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: response.data.message, type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("getRestaurantDetails");
            // dispatch("getPropertyRegistrationMaster");
          }, 1000);
        });
    }, 1000);
  },
  addagentRegistrationMaster({ dispatch }, formData) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/agentApi/agentRegistrationMaster", formData, {
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
        })
        .catch(error => {
          console.log(error);
          dispatch(
            `alerts_loaders/showAlert`,
            {
              msg: "Failed To Save Agent profile Details",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  // reachusActionTakeSaving({ dispatch }, formData) {
  //   dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  //   setTimeout(() => {
  //     dispatch("alerts_loaders/stopLoading", "", { root: true });
  //     api
  //       .post("/customerRegistration/savingActionTakeDetails", formData, {})
  //       .then(response => {
  //         dispatch(
  //           "alerts_loaders/showAlert",
  //           { msg: response.data.message, type: "positive" },
  //           { root: true }
  //         );
  //         setTimeout(() => {
  //           dispatch("getPropertyDetails");
  //           dispatch("getPropertyRegistrationMaster");
  //         }, 1000);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         dispatch(
  //           `alerts_loaders/showAlert`,
  //           {
  //             msg: "Failed To Save Reach Us Details Data",
  //             type: "negative"
  //           },
  //           { root: true }
  //         );
  //       });
  //   }, 1500);
  // },
   //Sachin Get Medical Store Details Data For Travel Booking Card End
   getAccMedicalStoreDetailsSaving({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getAccMedicalStoresData/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_MEDICALSTORE_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Medical  Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  updatingAccMedicalStoreDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/editAccMedicalStoreDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
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
              msg: "Failed To Update Medical Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getAccMedicalStoreDetailsSaving({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getAccMedicalStoresData/${payload.account_id}/${payload.partner_id}/${payload.partner_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_MEDICALSTORE_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Medical  Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  updatingAccMedicalStoreDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/editAccMedicalStoreDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
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
              msg: "Failed To Update Medical Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

//Sachin Saving Method for Food Medical Store Data
saveFoodMedicalStoresData({ dispatch }, formData) {
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/equipmentPartner/savingFoodMedicalStoreDetails", formData, {
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
      })
      .catch(error => {
        console.log(error);
        dispatch(
          `alerts_loaders/showAlert`,
          {
            msg: "Failed To Save Transport Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
getFoodMedicalStoreDetailsSaving({ commit, dispatch }, payload) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/equipmentPartner/getFoodMedicalStoresData/${payload.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_FOODMEDICALSTORE_DETAILS", rows);
      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading Medical  Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
updatingFoodMedicalStoreDetails({ dispatch }, payload) {
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/equipmentPartner/editFoodMedicalStoreDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
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
            msg: "Failed To Update Medical Details Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},

//Sachin Saving Method for Travel Medical Store Data
saveTravelMedicalStoresData({ dispatch }, formData) {
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/equipmentPartner/savingTravelMedicalStoreDetails", formData, {
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
      })
      .catch(error => {
        console.log(error);
        dispatch(
          `alerts_loaders/showAlert`,
          {
            msg: "Failed To Save Transport Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
  //Sachin Get Medical Store Details Data For Travel Booking Card End
  getTravelMedicalStoreDetailsSaving({ commit, dispatch }, payload) {
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(
          `/equipmentPartner/getTravelMedicalStoresData/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
        )
        .then(response => {
          let rows = response.data;
          commit("SET_TRAVEL_MEDICALSTORE_DETAILS", rows);
        })
        .catch(error => {
          console.log(error);
          dispatch(
            "alerts_loaders/showAlert",
            {
              msg: "Error While Loading Medical  Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  updatingTravelMedicalStoreDetails({ dispatch }, payload) {
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/editTravelMedicalStoreDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
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
              msg: "Failed To Update Medical Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },

  updatingMedicalStoreDetails({ dispatch }, payload) {

    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/equipmentPartner/editMedicalStoreDetails/${payload.equipment_id}/${payload.equipment_sub_id}/${payload.txn_id}`,
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
              msg: "Failed To Update Medical Details Data",
              type: "negative"
            },
            { root: true }
          );
        });
    }, 1500);
  },
  getTransportforOperationDetails({ commit, dispatch }, payload) {
    //console.log("ssasa", payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
            .get(
                `/transporterApi/transportOperationDetails/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
            )
            .then(response => {
                let rows = response.data;
               // console.log(response.data, "4")
                commit("SET_TRANSPORT_OPERATION_DETAILS", rows);
            })
            .catch(error => {
                console.log(error);
                dispatch(
                    "alerts_loaders/showAlert", {
                        msg: "Error While Loading Travel Data",
                        type: "negative"
                    }, { root: true }
                );
            });
    }, 1500);
},




getAccTransportforOperationDetails({ commit, dispatch }, payload) {
   // console.log("ssasa", payload)
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
            .get(
                `/transporterApi/AcctransportOperationDetails/${user.account_id}/${payload.partner_id}/${payload.partner_sub_id}`
            )
            .then(response => {
                let rows = response.data;
              //  console.log(response.data, "4")
                commit("SET_ACCTRANSPORT_OPERATION_DETAILS", rows);
            })
            .catch(error => {
                console.log(error);
                dispatch(
                    "alerts_loaders/showAlert", {
                        msg: "Error While Loading Travel Data",
                        type: "negative"
                    }, { root: true }
                );
            });
    }, 1500);
},

getFoodTransportforOperationDetails({ commit, dispatch }, payload) {
   // console.log("ssasa", payload)
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
            .get(
                `/transporterApi/FoodtransportOperationDetails/${user.account_id}/${payload.agent_id}/${payload.agent_sub_id}`
            )
            .then(response => {
                let rows = response.data;
               // console.log(response.data, "4")
                commit("SET_FOODTRANSPORT_OPERATION_DETAILS", rows);
            })
            .catch(error => {
                console.log(error);
                dispatch(
                    "alerts_loaders/showAlert", {
                        msg: "Error While Loading Travel Data",
                        type: "negative"
                    }, { root: true }
                );
            });
    }, 1500);
},
getTravelSubPartnerNames({ commit, dispatch }, payload) {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/foodPartner/getTravelSubPartnerNames/${user.account_id}/${payload.agent_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_TRAVEL_FOOD_SUB_PARTNER_NAME", rows);
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


getMedicalTransportforOperationDetails({ commit, dispatch }, payload) {
   // console.log("ssasa1", payload)
    let user = JSON.parse(localStorage.getItem("user")) || [];
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
            .get(
                `/transporterApi/MedicaltransportOperationDetails/${user.account_id}/${payload.equipment_id}/${payload.equipment_sub_id}`
            )
            .then(response => {
                let rows = response.data;
              //  console.log(response.data, "4")
                commit("SET_MEDICALTRANSPORT_OPERATION_DETAILS", rows);
            })
            .catch(error => {
                console.log(error);
                dispatch(
                    "alerts_loaders/showAlert", {
                        msg: "Error While Loading Travel Data",
                        type: "negative"
                    }, { root: true }
                );
            });
    }, 1500);
},
getgetAgentAccountData({ commit, dispatch }) {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
          .get(
              `/agentApi/getAgentAccountData/${user.account_id}`
          )
          .then(response => {
              let rows = response.data;
              commit("SET_AGENT_ACCOUNT_DETAILS", rows);
          })
          .catch(error => {
              console.log(error);
              dispatch(
                  "alerts_loaders/showAlert", {
                      msg: "Error While Loading Agent Data",
                      type: "negative"
                  }, { root: true }
              );
          });
  }, 1500);
},
getTransportDetailsForAdmin({ commit, dispatch }, payload) {

  // console.log("transport payload",payload);
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/transporterApi/getTransportDetailsForAdmin/${payload.account_id}/${payload.agent_id}/${payload.transport_sub_id}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_TRANSPORT_ADMIN_DETAILS", rows);
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
                                    //  TRANSPORT ADMIN GET METHODS:-
// TRANSPORT ADMIN STATUS COUNT
getTransportRegistrationStatusCount({ commit, dispatch }) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get("/staffTranspoterApi/transportRegistrationMasterStatusCount")
      .then(response => {
        let rows = response.data;
        commit("SET_TRANSPORT_REGISTRATION_STATUS_COUNT", rows);
        // console.log("SET_TRANSPORT_REGISTRATION_STATUS_COUNT",rows);
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
// TRANSPORT ADMIN VERIFIED METHOD
getTransportRegAdminMaster({ commit, dispatch }) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/transporterApi/getTransportRegAdminMaster`)
      .then(response => {
        let rows = response.data;
        commit("SET_TRANSPORT_REG_ADMIN_DETAILS", rows);
        // console.log("rows",rows);
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
getAllTravelDetailsForAdmin({ commit, dispatch },payload) {
  // console.log("pjhsdha",payload);
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/transporterApi/getAllTravelDetailsForAdmin/${payload}`)
      .then(response => {
        let rows = response.data;
        commit("SET_TRANSPORT_STATUS_FORALL_ADMIN", rows);
        // console.log("rows",rows);
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
healthSupportActionTakeSaving({ dispatch }, formData) {
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/customerRegistration/healthSupportActionTakeSaving", formData,{})
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
            msg: "Failed To Save Patient Disease Take Action Details Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
getTravelDisplayCountOfPartner({ commit, dispatch },payload) {
  // console.log("pjhsdha",payload);
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/transporterApi/getTravelDisplayCountOfPartner/${payload}`)
      .then(response => {
        let rows = response.data;
        commit("SET_TRANSPORT_STATUS_PARTNER", rows);
        // console.log("rows",rows);
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

updateRoomdataSaving({ dispatch }, payload) {
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/propertyRegistrationMaster/updateRoomdataSaving", payload)
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
            msg: "Failed To Save Room Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},
getupdateroomDetails({ commit, dispatch }, payload) {
  // console.log("rooms",payload);
  let user = JSON.parse(localStorage.getItem("user")) || [];

  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(
        `/propertyRegistrationMaster/getupdateroomDetails/${payload.property_name.txn_id

}`
      )
      .then(response => {
        let rows = response.data;
        commit("SET_PROPERTY_FOR_ROOM_UPDATE_OPERATION", rows);
        // console.log("doc",rows);
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
updatePropertyoperationroomDetails({ dispatch }, formData) {
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/updatePropertyoperationroomDetails/${formData.txn_id}`,
        formData
      )
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        setTimeout(() => {
          // dispatch("getupdateroomDetails");

        }, 1000);
      });
  }, 1000);
},
fooditemdetailsUpdating({ dispatch }, formData) {
  // console.log("formData",formData);
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/foodPartner/fooditemdetailsUpdating/${formData.item_txn_id}/${formData.agent_id}/${formData.agent_sub_id}`,
        formData,{
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      )
      .then(response => {
        // dispatch("getFoodDetails", formData);
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
getroomsavailabilitiespricestable({ commit, dispatch },payload) {
  // console.log("rompayload",payload);
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/propertyRegistrationMaster/getroomsavailabilitiespricestable/${payload}`)
      .then(response => {
        let rows = response.data;
        commit("GET_ROOM_AVL_PRICE", rows);
        // console.log("get room avl price",rows)
        return rows

      })
      .catch(error => {
        console.log(error);
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While Loading rooms availabilities prices table",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},

updateRoomPriceAndAvaliability({ dispatch }, payload) {
 // console.log("dsfsdf",payload);
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/updateRoomPriceAndAvaliability/${payload.room_id}`,
        payload
      )
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: response.data.message, type: "positive" },
          { root: true }
        );
        setTimeout(() => {
          // dispatch("getupdateroomDetails");

        }, 1000);
      });
  }, 1000);
},

accomadationPartnerVisitDetailsSaving({ dispatch }, formData) {
  //console.log(formData)
  //console.log(employee_name)
  //console.log(formData)
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/propertyRegistrationMaster/savingAccomadationDetails", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
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
        let errorMessage = "Failed To Save Accommodation Partner Details Data";

        if (error.response && error.response.data && error.response.data.message) {
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

travelPartnerVisitDetailsSaving({ dispatch }, formData) {
  // console.log(formData)
  //console.log(employee_name)
  //console.log(formData)
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/propertyRegistrationMaster/savingTravelVisitDetails", formData, {
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
      })
      .catch(error => {
        //console.log(error);
        dispatch(
          `alerts_loaders/showAlert`,
          {
            msg: "Failed To Save Travel Partner Details Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},

foodPartnerVisitDetailsSaving({ dispatch }, formData) {
  // console.log(formData)
  //console.log(employee_name)
  //console.log(formData)
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/propertyRegistrationMaster/savingFoodVisitDetails", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Data Saved Successfully..", type: "positive" },
          { root: true }
        );
      })
      .catch(error => {
        //console.log(error);
        dispatch(
          `alerts_loaders/showAlert`,
          {
            msg: "Failed To Save Travel Partner Details Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},

equipmentPartnerVisitDetailsSaving({ dispatch }, formData) {
  // console.log(formData)
  //console.log(employee_name)
  //console.log(formData)
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/propertyRegistrationMaster/savingEquipmentVisitDetails", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Data Saved Successfully..", type: "positive" },
          { root: true }
        );
      })
      .catch(error => {
        //console.log(error);
        dispatch(
          `alerts_loaders/showAlert`,
          {
            msg: "Failed To Save Travel Partner Details Data",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},

updatingFoodPriceForm({ dispatch }, payload) {
  // console.log("ooooo", payload);
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/propertyRegistrationMaster/updatingFoodPriceForm", payload)
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
              msg: response.data && response.data.message && "Failed To Food Update Details Data",
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
            msg: "Failed To Food Update Details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1500);
},




loadAccomadationpartnerData({ commit, dispatch }, payload) {
  //onsole.log(payload)
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/dropdown/loadAccomadationpartnerData/${payload.city}/${payload.userName}`)
      .then(response => {
        let rows = response.data;

        commit("GET_ACCOMODATION_VISIT_DATA", rows);
        //console.log("data",rows);
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

loadTravelPartnerData({ commit, dispatch }, payload) {
  //console.log(payload)
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/dropdown/loadTravelPartnerData/${payload}`)
      .then(response => {
        let rows = response.data;

        commit("GET_TRAVEL_VISIT_DATA", rows);
        // console.log("data", rows);
      })
      .catch(error => {
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While get Partner Visit Data details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1000);
},

loadFoodPartnerData({ commit, dispatch }, payload) {
  //console.log(payload)
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/propertyRegistrationMaster/loadFoodPartnerData/${payload}`)
      .then(response => {
        let rows = response.data;

        commit("GET_FOOD_VISIT_DATA", rows);
        // console.log("data", rows);
      })
      .catch(error => {
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While get Food Visit Data details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1000);
},

loadEquipmentPartnerData({ commit, dispatch }, payload) {
  //console.log(payload)
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/dropdown/loadEquipmentPartnerData/${payload}`)
      .then(response => {
        let rows = response.data;

        commit("GET_EQUIPMENT_VISIT_DATA", rows);
        console.log("data", rows);
      })
      .catch(error => {
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While get Equipment Visit Data details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1000);
},



updateAccomadationPartnerVisitDetailsSaving({ dispatch },formData) {
  //console.log("field_visit_id", field_visit_id)
  //const parsedData = JSON.parse(formData);
  //console.log('s-no',parsedData)
  //console.log(formData.fieldVisitId)

  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/updateAccomadationDetails`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      .then(response => {
        //console.log(response)
        if (response.status >= 200 && response.status < 300) {
          dispatch(
            "alerts_loaders/showAlert",
            { msg: "Data successfully saved!", type: "positive" },
            { root: true }
          );
          setTimeout(() => {
            dispatch("loadAccomadationpartnerData");

          }, 1000);
        }

      })
      .catch(error => {
        // Handle the error response from the server
        let errorMessage = "Failed To Update Accommodation Partner Details Data";

        if (error.response && error.response.data && error.response.data.message) {
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


verifyAccomadationPartnerVisitDetailsSaving({ dispatch }, payload) {
  //console.log("form", formData)
  //const parsedData = JSON.parse(formData);
  //console.log('s-no',payload)

  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/verifyAccomadationDetails/${payload.s_no}`,
         {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

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
        let errorMessage = "Failed To Save Accommodation Partner Details Data";

        if (error.response && error.response.data && error.response.data.message) {
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

updateTravelPartnerVisitDetailsSaving({ dispatch }, formData) {
  // console.log("form", formData)
  //const parsedData = JSON.parse(formData);
  //console.log('s-no',parsedData)

  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/updateTravelDetails`,
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
      });
  }, 1000);
},

updateFoodPartnerVisitDetailsSaving({ dispatch }, formData) {
  // console.log("form", formData)
  //const parsedData = JSON.parse(formData);
  //console.log('s-no',parsedData)

  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/updateFoodDetails`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Data Saved Successfully..", type: "positive" },
          { root: true }
        );
      });
  }, 1000);
},

updateEquipmentPartnerVisitDetailsSaving({ dispatch }, formData) {
  // console.log("form", formData)
  //const parsedData = JSON.parse(formData);
  //console.log('s-no',parsedData)

  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/updateEquipmentDetails`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Data Saved Successfully..", type: "positive" },
          { root: true }
        );
      });
  }, 1000);
},

// getBookingAllUpcomingForPartner({ commit, dispatch },payload) {
//   console.log("dsfsdf",payload);
//   dispatch("alerts_loaders/startLoading", "", { root: true });
//   setTimeout(() => {
//     dispatch("alerts_loaders/stopLoading", "", { root: true });
//     api
//       .get(`/propertyRegistrationMaster/getBookingUpcomingForPartner`)
//       .then(response => {
//         let usermenus = response.data;
//          console.log("123654", response.data);
//         commit("ALL_UPCOMING_BOOKING_PARTNER_TABLE", usermenus);
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch(
//           "alerts_loaders/showAlert",
//           {
//             msg: "Error While get Booking details",
//             type: "negative"
//           },
//           { root: true }
//         );
//       });
//   }, 1500);
// },
loadRoomCategoriesListTable({ commit }, payload) {
  let visitId = payload.fieldVisitId
  api
    .get(`/propertyRegistrationMaster/loadRoomCategoriesListTable/${visitId}`)

    .then(response => {
      commit("GET_ROOM_CATEGORIES_LIST", response.data.data);

      //console.log('rk',response.data)
    })
    .catch(error => {
      console.log(error);
    });
},

deleteParticularRowDetails({ commit }, payload) {
  // console.log(payload)

  api
    .delete(`/propertyRegistrationMaster/deleteParticularRowDetails/${payload.field_visit_id}/${payload.s_no}`)

    .then(response => {
      // console.log(response.data)
      //console.log('rk',response.data.result)
    })
    .catch(error => {
      console.log(error);
    });
},


//Ravi kiran Hospital Partner Details Saving Method
hospitalPartnerVisitDetailsSaving({ dispatch }, formData) {
  // console.log(formData)
  //console.log(payload)
  //console.log(employee_name)
  //console.log(formData)
  dispatch(`alerts_loaders/saveLoading`, "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .post("/propertyRegistrationMaster/savingHospitalDetails", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
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
        let errorMessage = "Failed To Save Hospital Partner Details Data";

        if (error.response && error.response.data && error.response.data.message) {
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

 //Ravi kiran Load Hospital Partner Details Data in Table

 loadHospitalpartnerData({ commit, dispatch }, payload) {
  // console.log(payload)
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .get(`/propertyRegistrationMaster/loadHospitalpartnerData/${payload.city}/${payload.userName}`,)
      .then(response => {
        let rows = response.data;
        // dispatch(
        //   "alerts_loaders/showAlert",
        //   commit("GET_HOSPITAL_VISIT_DATA", rows),
        //    { msg: response.data.message, type: "positive" },
        //   { root: true }
        // );

        commit("GET_HOSPITAL_VISIT_DATA", rows);
        //console.log("data",rows);
      })
      .catch(error => {
        dispatch(
          "alerts_loaders/showAlert",
          {
            msg: "Error While get Hospital Visit Data details",
            type: "negative"
          },
          { root: true }
        );
      });
  }, 1000);
},

//Ravi kiran Update Hospital Field Visit
updateHospitalPartnerVisitDetailsSaving({ dispatch },formData) {
  //console.log("field_visit_id", field_visit_id)
  //const parsedData = JSON.parse(formData);
  //console.log('s-no',parsedData)
  //console.log(formData.fieldVisitId)

  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/updateHospitalDetails`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

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
        let errorMessage = "Failed To Save Accommodation Partner Details Data";

        if (error.response && error.response.data && error.response.data.message) {
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

  //Ravi kiran Load Departments Table Data

  loadDepartmentsTable({ commit }, payload) {
    let visitId = payload.fieldVisitId
    api
      .get(`/propertyRegistrationMaster/loadDepartmentsTable/${visitId}`)

      .then(response => {
        commit("GET_DEPARTMENTS_LIST", response.data.data);

        // console.log('rk',response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },

  //Ravi kiran Query For Delete Hospital Table
  deleteParticularRowDetailsForHospital({ commit }, payload) {
    // console.log(payload)

    api
      .delete(`/propertyRegistrationMaster/deleteParticularRowDetailsForHospital/${payload.field_visit_id}/${payload.s_no}`)

      .then(response => {
        // console.log(response.data)
        //console.log('rk',response.data.result)
      })
      .catch(error => {
        console.log(error);
      });
  },

  //Ravi kiran Method for Verify Hospital FIeld Visit
  verifyHospitalFieldVisitDetails({ dispatch }, payload) {
    //console.log("form", formData)
    //const parsedData = JSON.parse(formData);
    // console.log('s-no',payload)

    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .put(
          `/propertyRegistrationMaster/verifyHospitalDetails/${payload.s_no}`,
           {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

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
          let errorMessage = "Failed To Save Accommodation Partner Details Data";

          if (error.response && error.response.data && error.response.data.message) {
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


  //Ravi kiran MEthod for Submit of Travel Field Visit

  travelPartnerVisitDetailsSaving({ dispatch }, formData) {
    //  console.log("partner",formData)
      //console.log(employee_name)
      //console.log(formData)
      dispatch(`alerts_loaders/saveLoading`, "", { root: true });
      setTimeout(() => {
        dispatch("alerts_loaders/stopLoading", "", { root: true });
        api
          .post("/propertyRegistrationMaster/savingTravelVisitDetails", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            dispatch(
              "alerts_loaders/showAlert",
              { msg: "Data Successfully Saved", type: "positive" },
              { root: true }
            );
          })
          .catch(error => {
            console.log(error);
            dispatch(
              `alerts_loaders/showAlert`,
              {
                msg: "Failed To Save Travel Partner Details Data",
                type: "negative"
              },
              { root: true }
            );
          });
      }, 1500);
    },


  updateTravelPartnerVisitDetailsSaving({ dispatch }, formData) {
    // console.log("form", formData)
  //const parsedData = JSON.parse(formData);
  //console.log('s-no',parsedData)

  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/updateTravelDetails`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Data Saved Successfully...", type: "positive" },
          { root: true }
        );
      });
  }, 1000);
},

VerifyTravelPartnerVisitDetailsSaving({dispatch}, formData) {
  // console.log("verifying", formData)
  let id = formData.s_no
  // console.log("partners",formData,id)
  // console.log(id)
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/verifyTravelDetails/${id}`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      .then(response => {
        dispatch(
          "alerts_loaders/showAlert",
          { msg: "Data Saved Successfully...", type: "positive" },
          { root: true }
        );

      });
  }, 1000);

},

VerifyEquipmentPartnerVisitDetailsSaving({dispatch}, formData) {
  // console.log("verifying", formData)
  let id = formData.s_no
  // console.log("partners",formData,id)
  // console.log(id)
  dispatch("alerts_loaders/startLoading", "", { root: true });
  setTimeout(() => {
    dispatch("alerts_loaders/stopLoading", "", { root: true });
    api
      .put(
        `/propertyRegistrationMaster/verifyEquipmentDetails/${id}`,
        formData, {
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


  //Ravi kiran Agent Partner Details Saving Method
  agentPartnerVisitDetailsSaving({ dispatch }, formData) {
    // console.log(formData)
    //console.log(payload)
    //console.log(employee_name)
    //console.log(formData)
    dispatch(`alerts_loaders/saveLoading`, "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .post("/propertyRegistrationMaster/savingAgentDetails", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
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
          let errorMessage = "Failed To Save Agent Partner Details Data";

          if (error.response && error.response.data && error.response.data.message) {
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


//Ravi kiran Load Agent  Partner Details Data in Table

loadAgentPartnerVisitDetails({ commit, dispatch }, payload) {
    //console.log(payload)
    dispatch("alerts_loaders/startLoading", "", { root: true });
    setTimeout(() => {
      dispatch("alerts_loaders/stopLoading", "", { root: true });
      api
        .get(`/propertyRegistrationMaster/loadAgentPartnerVisitDetails/${payload.city}/${payload.userName}`,)
        .then(response => {
          let rows = response.data;
          // dispatch(
          //   "alerts_loaders/showAlert",
          //   commit("GET_ACCOMODATION_VISIT_DATA", rows),
          //   // { msg: response.data.message, type: "positive" },
          //   { root: true }
          // );

          commit("GET_AGENT_VISIT_DATA", rows);
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



};




// mutations

const mutations = {
  SET_OFFER_REGISTRATION(state, rows) {
    state.offers_rows = rows.data;
  },
  SET_PROPERTY_GET_REGISTRATION(state, rows) {
    state.property_partner_registration_rows = rows.data;
  },
  SET_TRANSPORT_STATUS_FORALL_ADMIN(state, rows) {
    state.travel_admin_count_rows = rows.data;
  },
  SET_TRANSPORT_STATUS_PARTNER(state, rows) {
    state.transport_reg_rows = rows.data;
  },
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

  SET_TRANSPORT_ADMIN_STATUSCOUNT(state, rows) {
    state.transport_regAdmin_status_count = rows.data;
  },
  SET_PROPERTY_REGISTRATION_STATUS_COUNT(state, rows) {
    state.property_partner_registration_status_count = rows.data;
  },
  SET_PROPERTY_PARTNERREGISTRATION_STATUS_COUNT(state, rows) {
    state.property_partnerAcc_status_count = rows.data;
  },
  SET_PROPERTY_ADMIN_REGISTRATION_STATUS_COUNT(state, rows) {
    state.property_partner_admin_status_count = rows.data;
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
  SET_APPROVED_PARTNERS_DATA(state, rows) {
    state.approved_travel_partners_rows = rows.data;
  },
  SET_BOOKING_REGISTRATION(state, rows) {
    state.bookings_reg_rows = rows.data;
  },
  SET_TRANSPORT_REGISTRATION_STATUS_COUNT(state, rows) {
    state.property_transport_registration_status_count = rows.data;
  },
  SET_AGENT_REG_DETAILS(state, rows) {
    state.agent_partner_registration_rows = rows.data;
  },
  SET_AGENT_REG_FOR_APPROVALS(state, rows) {
    state.approved_agent_booking_rows = rows.data;
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
  SET_TRAVEL_DETAILS_FOR_ADMIN(state, rows) {
    state.travel_item_rows = rows.data;
  },
  SET_SUB_TRAVEL_LOCATION_DETAILS(state, rows) {
    state.sub_travel_item_rows = rows.data;
  },
  SET_TRAVEL_LOCATION_CART_DETAILS(state, rows) {
    state.sub_travel_cart_rows = rows.data;
  },
  SET_AGENT_PENDING_DETAILS(state, rows) {
    state.agent_pending_details = rows.data;
  },
  SET_EQUIPMENT_REGISTRATION_STATUS_COUNT(state, rows) {
    state.equipment_partner_registration_status_count = rows.data;
  },
  SET_EQUIPMENT_REGISTRATION_EXISTING_USER(state, rows) {
    state.equipment_registration_rows = rows.data;
  },
  SET_EQUIPMENT_DETAILS_FOR_ADMIN(state, rows) {
    state.equipment_all_count_for_admin = rows.data;
  },
  SET_EQUIPMENT_DETAILS_FOR_PARTNER(state, rows) {
    state.equipment_partner_registration_rows = rows.data;
  },

  SET_EQUIPMENT_LOCATION_DETAILS(state, rows) {
    state.equipment_item_rows = rows.data;
  },
  SET_EQUIPMENT_BOOKING_DETAILS(state, rows) {
    state.equipment_items_rows = rows.data;
  },
  SET_EQUIPMENT_MEDICAL_DETAILS(state, rows) {
    state.medicalItems_rows = rows.data;
  },
  SET_EQUIPMENT_MEDICAL_ITEMS(state, rows) {
    state.medical_addItems_rows = rows.data;
  },
  SET_EQUIPMENT_MEDICAL_STORES(state, rows) {
    state.medical_stores_rows = rows.data;
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
  SET_ADD_PROPERTY_DATA_ADMIN(state, rows) {
    state.property_data_admin_rows = rows.data;
  },
  SET_TRANSPORT_REG_ADMIN_DETAILS(state, rows) {
    state.transport_reg_admin_rows = rows.data;
  },
  SET_ADD_ROOMS_DATA(state, rows) {
    state.rooms_data_rows = rows.data;
  },
  SET_PROPERTY_FOOD_EXISTING_USER(state, rows) {
    state.food_registration_rows = rows.data;
  },
  SET_HOTEL_DATA(state, rows) {
    state.hotelData_rows = rows.data;
  },
  SET_HOTEL_INFO(state, rows) {
    state.hotelData_rows = rows.data;
  },
  SET_HOTEL_NAMES(state, rows) {
    state.hotelNames_rows = rows.data;
  },
  SET_FOOD_DETAILS_ADMIN(state, rows) {
    state.foodDetails_rows_admin = rows.data;
  },
  SET_FOOD_DETAILS(state, rows) {
    state.foodDetails_rows = rows.data;
  },
  SET_FOOD_DETAILS_PARTNER(state, rows) {
    state.foodDetails_rows_partner = rows.data;
  },
  SET_FOOD_PARTNER_NAME(state, payload) {
    state.food_partner_arr = payload.data;
  },
  SET_FOOD_SUB_PARTNER_NAME(state, payload) {
    state.food_sub_partner_arr = payload.data;
  },
  SET_FOOD_MAIN_DETAILS(state, rows) {
    state.food_details_rows = rows.data;
  },
  SET_PROPERTY_FOOD_EXISTING_USER(state, rows) {
    state.food_registration_rows = rows.data;
  },
  SET_FOOD_DETAILS_SUB_DETAILS(state, rows) {
    state.food_registration_sub_rows = rows.data;
  },
  SET_FOOD_ITEM_COUNT_DETAILS(state, rows) {
    state.food_items_add_count = rows.data;
  },
  SET_TRAVEL_PARTNER_NAMES(state, payload) {
    state.travel_partner_names_arr = payload.data;
  },
  SET_SUB_TRAVEL_PARTNER_NAMES(state, payload) {
    state.sub_travel_partner_names_arr = payload.data;
  },
  SET_FOODSUB_TRAVEL_PARTNER_NAMES(state, payload) {
    state.foodsub_travel_partner_names_arr = payload.data;
},
  SET_EQUIPMENT_PARTNER_NAMES(state, payload) {
    state.equipment_partner_names_arr = payload.data;
  },
  SET_SUB_EQUIPMENT_PARTNER_NAMES(state, payload) {
    state.sub_equipment_partner_names_arr = payload.data;
  },
  SET_FOOD_EQUIPMENT_MEDICAL(state, payload) {
    state.sub_food_equipment_medical_arr = payload.data;
  },
  SET_MEDICAL_STORE(state, payload) {
    state.medical_store_arr = payload.data;
  },
  SET_EQP_MEDICAL_STORE(state, payload) {
    state.eqp_medical_store_arr = payload.data;
  },
  SET_TRL_MEDICAL_STORE(state, payload) {
    state.travel_medical_store_arr = payload.data;
  },

  SET_MED_PARTNERS_FOR_ADMIN(state, payload) {
    state.equipment_partnersData_forAdmin_rows = payload.data;
  },
  SET_MED_APPROVED_PARTNERS_FORADMIN(state, payload) {
    state.med_partners_approvals_data_rows = payload.data;
  },
  SET_EQUIPMENT_ITEMS_FORADMIN(state, payload) {
    state.equipment_items_forAdmin_rows = payload.data;
  },
  SET_ROOMS_DATA_FOR_ADMIN(state, payload) {
    state.rooms_data_admin_rows = payload.data;
  },
  SET_FOOD_PARTNERS_FOR_ADMIN(state, payload) {
    state.food_partner_admin_rows = payload.data;
  },
  SET_FOOD_PARTNERS_APPROVALS(state, payload) {
    state.approved_food_partners_rows = payload.data;
  },
  SET_ROOM_AVAIL_DETAILS(state, payload) {
    state.allRoom_avail_details_arr = payload.data;
  },
  SET_ADD_OTHERROOMS_DATA(state, rows) {
    state.otherrooms_data_rows = rows.data;
  },
  SET_ADD_FOODPROPERTY_DATA(state, rows) {
    state.foodproperty_data_rows = rows.data;
  },
  SET_ADD_PROPERTY_PARTNER_DATA(state, rows) {
    state.property_partner_data_rows = rows.data;
  },
 SET_ADD_ROOMS_PROPERTY_DATA(state, rows) {
  state.rooms_property_data_rows = rows.data;
  },

  SET_LOAD_FOOD_DETAILS(state, rows) {
    state.food_Details_rows = rows.data;
  },
  SET_TRAVEL_DETAILS_FOR_PARTNER(state, rows) {
    state.travel_item_partner_rows = rows.data;
  },
  SET_OTHEREQUIPMENT_LOCATION_DETAILS(state, rows) {
    state.otherequipment_item_rows = rows.data;
  },
  SET_OTHERTRAVEL_DETAILS_FOR_ADMIN(state, rows) {
    state.othertravel_item_rows = rows.data;
  },
  ACC_FOOD_MAIN_DETAILS(state, rows) {
    state.acc_food_Details_rows = rows.data;
  },
  ACC_TRAVEL_PARTNER(state, rows) {
    state.acc_travel_rows = rows.data;
  },
  SET_ACC_EQUIPMENT_DETAILS(state, rows) {
    state.equipment_acc_rows = rows.data;
  },
  SET_ADD_OTHERROOMS_DATA(state, rows) {
    state.otherrooms_data_rows = rows.data;
  },

  SET_ADD_TRAVELROOMS_DATA(state, rows) {
    state.travelrooms_data_rows = rows.data;
  },
  SET_OTHERTRAVEL_PROPERTY_DETAILS(state, rows) {
    state.travelproperty_data_rows = rows.data;
  },
  SET_TRAVELEQUIPMENT_LOCATION_DETAILS(state, rows) {
    state.travelequipment_item_rows = rows.data;
  },
  SET_TRAVELFOOD_DETAILS(state, rows) {
    state.travel_foodDetails_rows = rows.data;
  },
  SET_ADD_RESTAURANRT_DATA(state, rows) {
    state.restaurant_data_rows = rows.data;
  },
  SET_FOOD_RESTAURANRT_DATA(state, rows) {
    state.food_restaurant_data_rows = rows.data;
  },
  SET_TRANSPORT_DETAILS(state, rows) {
    state.transport_item_rows = rows.data;
  },
  SET_ACC_TRANSPORT_DETAILS(state, rows) {
    state.acctransport_item_rows = rows.data;
  },
  SET_FOODTRANSPORT_DETAILS(state, rows) {
    state.foodtransport_item_rows = rows.data;
  },
  SET_MEDICALTRANSPORT_DETAILS(state, rows) {
    state.medicaltransport_item_rows = rows.data;
  },
  ADD_TRAVEL_RESTAURANRT_DATA(state, rows) {
    state.travel_restaurant_data_rows = rows.data;
  },
  ADD_EQP_RESTAURANRT_DATA(state, rows) {
    state.eqp_restaurant_data_rows = rows.data;
  },
  SET_PARTNER_ALLDATADISPLAY(state, rows) {
    state.partners_allDisplay_approvals_data_row = rows.data;
  },
  SET_MEDICALSTORE_DETAILS(state, rows) {
    state.accmedicalstore_item_rows = rows.data;
  },
  SET_FOODMEDICALSTORE_DETAILS(state, rows) {
    state.foodmedicalstore_item_rows = rows.data;
  },
  SET_TRAVEL_MEDICALSTORE_DETAILS(state, rows) {
    state.travelmedicalstore_item_rows = rows.data;
  },
  SET_TRANSPORT_OPERATION_DETAILS(state, rows) {
    state.transportoperation_item_rows = rows.data;
},
SET_ACCTRANSPORT_OPERATION_DETAILS(state, rows) {
    state.acctransportoperation_item_rows = rows.data;
},
SET_MEDICALTRANSPORT_OPERATION_DETAILS(state, rows) {
    state.medicaltransportoperation_item_rows = rows.data;
},
SET_FOODTRANSPORT_OPERATION_DETAILS(state, rows) {
    state.foodtransportoperation_item_rows = rows.data;
},
SET_AGENT_ACCOUNT_DETAILS(state, rows) {
  state.agent_account_item_rows = rows.data;
},
SET_TRANSPORT_ADMIN_DETAILS(state, rows) {
  state.transport_item_admin_rows = rows.data;
},
SET_TRAVEL_FOOD_SUB_PARTNER_NAME(state, payload) {
  state.travel_food_sub_partner_arr = payload.data;
},
SET_TRAVEL_FOOD_SUB_PARTNER_NAME(state, payload) {
  state.travel_food_sub_partner_arr = payload.data;
},
SET_PARTNER_ACCOMODATION_STATUS_COUNT(state, payload) {
  state.partner_accomodation_status_count = payload.data;
},

SET_PARTNER_ACCOMODATION_COUNT(state, payload) {
  state.partner_accomodation_status_count = payload.data;
},
SET_PROPERTY_FOR_ROOM_UPDATE_OPERATION(state, rows) {
  state.property_operation_roomupdate_row = rows.data;
},
GET_ROOM_AVL_PRICE(state, rows) {
  state.propertyoperation_room_avlprice_row = rows.data;
},

GET_ACCOMODATION_VISIT_DATA(state, rows) {
  state.accomadation_visit_data = rows.data;
},

  GET_TRAVEL_VISIT_DATA(state, rows) {
    state.travel_visit_data = rows.data;
  },
  GET_FOOD_VISIT_DATA(state, rows) {
    state.food_visit_data = rows.data;
  },
  GET_EQUIPMENT_VISIT_DATA(state, rows) {
    state.equipment_visit_data = rows.data;
  },
GET_ROOM_CATEGORIES_LIST(state,rows) {
  state.roomCategoryRatesListRow = rows;
},
  GET_HOSPITAL_VISIT_DATA(state, rows) {
    state.hospital_visit_data = rows.data;
  },
  GET_DEPARTMENTS_LIST(state,rows) {
    state.keyPersonsDataRow = rows;
  },
  GET_AGENT_VISIT_DATA(state, rows) {
    state.agent_visit_data = rows.data;
  },

// ALL_UPCOMING_BOOKING_PARTNER_TABLE(state, rows) {
//   state.upcoming_bookingdata_partner_rows = rows.data;
// },


};

export const partners = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
