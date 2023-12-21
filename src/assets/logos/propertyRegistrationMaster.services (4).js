const db = require("./db");
const helper = require("../helper");
const moment = require("moment")
moment.suppressDeprecationWarnings = true;

async function getMultiple(params) {
  //   const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT account_id, partner_id,partner_sub_id,agent_name, agent_sub_name,company_name,individual_name, phone, fax, email_id, agent_commission, description, building_no, street, land_mark, city, country, state, pin_code, pan, aadhar, gstin, bankAccountNo, bankName, branchName, ifsc, accept,pan_loc,addhaar_loc,gst_tin_loc,mh_agreement_loc,partner_pic_loc,mb_certificate_loc,property_tax_loc,fire_safety_loc,status,property_type,cancelled_cheque_doc, concat(building_no,",",street,"," ,state,"," ,city,"," ,country) as address,concat(state,"," ,city) as location,alternate_no FROM mh_property_master WHERE account_id = '${params}'`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  let index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index = index+1;
      var property_count = "";
      if(element.partner_id){
        property_count = await helper.getCountOfPartnerId(
          element.partner_id)
      };
      data.push({
        sno: index,
        property_count: property_count,
        ...element,
      });
    }
  }
  return {
    data,
  };
}
async function getHotelInfo(
  account_id,
  property_txn_id,
  partner_id,
  partner_sub_id
) {
  const rows = await db.query(
    `SELECT account_id,txn_id,property_txn_id,partner_id,partner_sub_id,sub_property_name,room_type,room_category, date_format(date_from,"%d-%m-%Y") as date_from, date_format(date_to,"%d-%m-%Y") as date_to,facilities, max_allow_adult,max_allow_kids,gst_per,	withac_withbreakfast_price,withac_withoutbreakfast_price,	withoutac_withbreakfast_price,withoutac_withoutbreakfast_price	,units,property_specialOffer,status,room_image_1,(SELECT COUNT(*) FROM mh_property_rooms_table WHERE partner_sub_id='${partner_sub_id}') AS chandu FROM mh_property_rooms_table WHERE account_id='${account_id}' && property_txn_id='${property_txn_id}' && partner_id='${partner_id}' && partner_sub_id='${partner_sub_id}';`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  let property_amenity_name = [];
  let test_1 = [];
  let test_2 = [];
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index = index + 1;

      const rows2 = await db.query(
        `SELECT amenity_name, amenity_icon FROM mh_property_details_table WHERE account_id='${account_id}' AND txn_id='${property_txn_id}' AND partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}';`
      );
      const result2 = helper.emptyOrRows(rows2);
      for (let i = 0; i < result2.length; i++) {
        var test_name = result2[i].amenity_name;
        var test_icon = result2[i].amenity_icon;
        var arr1 = new Array();
        var arr2 = new Array();
        arr1 = test_name.split(",");
        arr2 = test_icon.split(",");

        test_1 = arr1;
        test_2 = arr2;

        for (let j = 0; j < arr1.length; j++) {
          let amenityName = arr1[j];
          let amenityIcon = arr2[j];
          property_amenity_name.push({
            name: amenityName,
            icon: amenityIcon,
          });
        }
      }
      data.push({
        index: index,
        property_amenity_name: [...property_amenity_name],
        test_1: test_1,
        test_2: test_2,
        ...element,
      });
    }
  }
  return { data };
}
async function getfoodHotelInfo(
  account_id,
  property_txn_id,
  partner_id,
  partner_sub_id
) {
  const rows = await db.query(
    `SELECT account_id,txn_id,property_txn_id,partner_id,partner_sub_id,sub_property_name,room_type,room_category, date_format(date_from,"%d-%m-%Y") as date_from, date_format(date_to,"%d-%m-%Y") as date_to,facilities, units,property_specialOffer,status,room_image_1,(SELECT COUNT(*) FROM mh_property_rooms_table WHERE partner_sub_id='${partner_sub_id}') AS chandu FROM mh_property_rooms_table WHERE account_id='${account_id}' && property_txn_id='${property_txn_id}' && partner_id='${partner_id}' && partner_sub_id='${partner_sub_id}';`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  let property_amenity_name = [];
  let test_1 = [];
  let test_2 = [];
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index = index + 1;

      const rows2 = await db.query(
        `SELECT amenity_name, amenity_icon FROM mh_property_details_table WHERE account_id='${account_id}' AND txn_id='${property_txn_id}' AND partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}';`
      );
      const result2 = helper.emptyOrRows(rows2);
      for (let i = 0; i < result2.length; i++) {
        var test_name = result2[i].amenity_name;
        var test_icon = result2[i].amenity_icon;
        var arr1 = new Array();
        var arr2 = new Array();
        arr1 = test_name.split(",");
        arr2 = test_icon.split(",");

        test_1 = arr1;
        test_2 = arr2;

        for (let j = 0; j < arr1.length; j++) {
          let amenityName = arr1[j];
          let amenityIcon = arr2[j];
          property_amenity_name.push({
            name: amenityName,
            icon: amenityIcon,
          });
        }
      }
      data.push({
        index: index,
        property_amenity_name: [...property_amenity_name],
        test_1: test_1,
        test_2: test_2,
        ...element,
      });
    }
  }
  return { data };
}
async function gettravelHotelInfo(
  account_id,
  property_txn_id,
  partner_id,
  partner_sub_id
) {
  const rows = await db.query(
    `SELECT account_id,txn_id,property_txn_id,partner_id,partner_sub_id,sub_property_name,room_type,room_category, date_format(date_from,"%d-%m-%Y") as date_from, date_format(date_to,"%d-%m-%Y") as date_to,facilities, units,property_specialOffer,status,room_image_1,(SELECT COUNT(*) FROM mh_property_rooms_table WHERE partner_sub_id='${partner_sub_id}') AS chandu FROM mh_property_rooms_table WHERE account_id='${account_id}' && property_txn_id='${property_txn_id}' && partner_id='${partner_id}' && partner_sub_id='${partner_sub_id}';`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  let property_amenity_name = [];
  let test_1 = [];
  let test_2 = [];
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index = index + 1;

      const rows2 = await db.query(
        `SELECT amenity_name, amenity_icon FROM mh_property_details_table WHERE account_id='${account_id}' AND txn_id='${property_txn_id}' AND partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}';`
      );
      const result2 = helper.emptyOrRows(rows2);
      for (let i = 0; i < result2.length; i++) {
        var test_name = result2[i].amenity_name;
        var test_icon = result2[i].amenity_icon;
        var arr1 = new Array();
        var arr2 = new Array();
        arr1 = test_name.split(",");
        arr2 = test_icon.split(",");

        test_1 = arr1;
        test_2 = arr2;

        for (let j = 0; j < arr1.length; j++) {
          let amenityName = arr1[j];
          let amenityIcon = arr2[j];
          property_amenity_name.push({
            name: amenityName,
            icon: amenityIcon,
          });
        }
      }
      data.push({
        index: index,
        property_amenity_name: [...property_amenity_name],
        test_1: test_1,
        test_2: test_2,
        ...element,
      });
    }
  }
  return { data };
}
async function getmedicalHotelInfo(
  account_id,
  property_txn_id,
  partner_id,
  partner_sub_id
) {
  const rows = await db.query(
    `SELECT account_id,txn_id,property_txn_id,partner_id,partner_sub_id,sub_property_name,room_type,room_category, date_format(date_from,"%d-%m-%Y") as date_from, date_format(date_to,"%d-%m-%Y") as date_to,facilities, units,property_specialOffer,status,room_image_1,(SELECT COUNT(*) FROM mh_property_rooms_table WHERE partner_sub_id='${partner_sub_id}') AS chandu FROM mh_property_rooms_table WHERE account_id='${account_id}' && property_txn_id='${property_txn_id}' && partner_id='${partner_id}' && partner_sub_id='${partner_sub_id}';`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  let property_amenity_name = [];
  let test_1 = [];
  let test_2 = [];
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index = index + 1;

      const rows2 = await db.query(
        `SELECT amenity_name, amenity_icon FROM mh_property_details_table WHERE account_id='${account_id}' AND txn_id='${property_txn_id}' AND partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}';`
      );
      const result2 = helper.emptyOrRows(rows2);
      for (let i = 0; i < result2.length; i++) {
        var test_name = result2[i].amenity_name;
        var test_icon = result2[i].amenity_icon;
        var arr1 = new Array();
        var arr2 = new Array();
        arr1 = test_name.split(",");
        arr2 = test_icon.split(",");

        test_1 = arr1;
        test_2 = arr2;

        for (let j = 0; j < arr1.length; j++) {
          let amenityName = arr1[j];
          let amenityIcon = arr2[j];
          property_amenity_name.push({
            name: amenityName,
            icon: amenityIcon,
          });
        }
      }
      data.push({
        index: index,
        property_amenity_name: [...property_amenity_name],
        test_1: test_1,
        test_2: test_2,
        ...element,
      });
    }
  }
  return { data };
}

async function getDateAvailability(
  account_id,
  property_txn_id,
  partner_id,
  partner_sub_id
) {
  const rows = await db.query(
    `SELECT  date_from,date_to  FROM mh_property_rooms_table WHERE account_id='${account_id}' && property_txn_id='${property_txn_id}' && partner_id='${partner_id}' && partner_sub_id='${partner_sub_id}';`
  );
  const data = helper.emptyOrRows(rows);
  // let data = [];
  // var index = 0;
  // for (const key in result) {
  //   if (Object.hasOwnProperty.call(result, key)) {
  //     const element = result[key];

  //     index = index + 1;
  //     data.push({
  //       index: index,
  //       ...element,
  //     });
  //   }
  // }

  return { data };
}
async function getHotelsNames(account_id) {
  const rows = await db.query(
    `SELECT account_id,property_txn_id,partner_id,partner_sub_id,sub_property_name,room_type,room_category,date_from, date_to,facilities, units,property_specialOffer FROM mh_property_rooms_table WHERE account_id='${account_id}' GROUP BY sub_property_name;`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];

      index = index + 1;
      data.push({
        index: index,
        ...element,
      });
    }
  }
  return { data };
}
async function getpropertyReg() {
  const rows = await db.query(
    `SELECT  partner_id,partner_sub_id,account_id,property_id,property_name,property_type,agent_name,agent_sub_name,individual_name,phone,fax,alternate_no,email_id,agent_commission,description,building_no,street,land_mark,city,city_id,country,state,state_id,pin_code,pan,aadhar,gstin,bankAccountNo,bankName,branchName,ifsc,cancelled_cheque_doc,pan_loc,gst_tin_loc,addhaar_loc,mh_agreement_loc,partner_pic_loc,mb_certificate_loc,property_tax_loc,fire_safety_loc, accept, status, remarks,concat(building_no,",",street,"," ,state,"," ,city,"," ,country) as address,concat(state,"," ,city) as location,alternate_no FROM mh_property_master WHERE 1 GROUP BY partner_id`
  );
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
};

// async function getpropertyReg() {
//   //const offset = helper.getOffset(page, config.listPerPage);
//   const rows = await db.query(`SELECT * FROM mh_property_master WHERE 1`);

//   const sql = `SELECT * FROM mh_property_master WHERE 1`;

//   const data = helper.emptyOrRows(rows);
//   return {
//     data,
//   };
// }

async function existingUserProperty(params) {
  //   const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT account_id, partner_id,partner_sub_id,agent_name,agent_sub_name,company_name,individual_name, phone, fax, email_id, agent_commission, description, building_no, street, land_mark, city,city_id, country, state, pin_code, pan, aadhar, gstin, bankAccountNo, bankName, branchName, ifsc, accept,pan_loc,addhaar_loc,gst_tin_loc,mh_agreement_loc,partner_pic_loc,mb_certificate_loc,property_tax_loc,fire_safety_loc,status,property_type,cancelled_cheque_doc, concat(building_no,",",street,"," ,state,"," ,city,"," ,country) as address,concat(state,"," ,city) as location FROM mh_property_master WHERE partner_id='${params}'`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  let index = 0;

  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index = index+1;

      var property_count = "";
      if (element.partner_id) {
        property_count = await helper.getCountOfPartnerId(element.partner_id);
      };
      data.push({
        sno: index,
        property_count: property_count,
        ...element,
      });
    }
  }
  return {
    data,
  };
}
async function getPropertyDataOnStatus(params, params1) {
  const rows = await db.query(
    `SELECT partner_id,partner_sub_id,agent_name, agent_sub_name,company_name,individual_name, phone, fax, email_id, agent_commission, description, building_no, street, land_mark, city, country, state, pin_code, pan, aadhar, gstin, bankAccountNo, bankName, branchName, ifsc, accept,pan_loc,addhaar_loc,gst_tin_loc,mh_agreement_loc,partner_pic_loc,mb_certificate_loc,property_tax_loc,fire_safety_loc,status,property_type,cancelled_cheque_doc FROM mh_property_master WHERE status='${params}' AND account_id = '${params1}' GROUP BY partner_id`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  let index = 0;

  for (const key in result) { 
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index=index+1;

      var property_count = "";
      if (element.partner_id) {
        property_count = await helper.getCountOfPartnerId(element.partner_id);
      };
      data.push({
        sno: index,
        property_count: property_count,
        ...element,
      });
    }
  }
  return {
    data,
  };
}

async function getStatusCount() {
  const rows = await db.query(
    `SELECT (SELECT COUNT(*) FROM mh_property_master WHERE status='pending') AS pcount,(SELECT COUNT(*) FROM mh_property_master WHERE status='approved') AS acount, (SELECT COUNT(*) FROM mh_property_master WHERE status='rejected') AS rcount FROM mh_property_master GROUP BY status,partner_id ;`
  );
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
};
async function getPropertyData(accountId, partnerId, partnerSubId) {
  const rows = await db.query(
    `SELECT txn_id, account_id, partner_id, partner_sub_id, partner_name, sub_partner_name, partner_phone, property_name, sub_property_name, property_phone, property_email, property_description, property_latitude, property_longitude,building_no, street, land_mark, country, state_id, state_name, city_id, city_name, pin_code, checkIn_time,checkOut_time,Name_Of_Contact_Person,upload_image, upload_image1, upload_image2, upload_image3, upload_image4,property_status,remarks,bankAccountNo,bankName,branchName,ifsc,cancelled_cheque_doc,mh_agreement,mh_declaration,mh_bankmandate,mh_service_fee FROM mh_property_details_table WHERE account_id='${accountId}' AND partner_id='${partnerId}' AND partner_sub_id='${partnerSubId}'`
  );
  const result = helper.emptyOrRows(rows);
  let data=[];
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index = index + 1;

    
      data.push({
        index: index,      
        ...element,
      });
    }
  }


  return {
    data,
  };
};

async function getPropertyDataForAdmin(accountId, partnerId, partnerSubId) {
  const rows = await db.query(
    `SELECT txn_id, account_id, partner_id, partner_sub_id, partner_name, sub_partner_name, 
    partner_phone, property_name, sub_property_name, property_phone, property_email, property_description, property_latitude, property_longitude,building_no, street, land_mark, country, state_id, state_name, city_id, city_name, pin_code, checkIn_time, checkOut_time, upload_image, upload_image1, upload_image2, upload_image3, upload_image4,property_status,mh_service_fee FROM mh_property_details_table WHERE account_id='${accountId}' AND partner_id='${partnerId}' AND partner_sub_id='${partnerSubId}'`
  );
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
};

async function getRoomsData(accountId, partnerId, partnerSubId, txnId) {
  const rows = await db.query(
    `SELECT txn_id, property_txn_id, partner_id, partner_sub_id, partner_name, sub_partner_name, property_name, sub_property_name, facilities, icon_image, no_of_avail_rooms,room_category,room_type, price, units, room_image_1, room_image_2, room_image_3, room_image_4, room_image_5, date_from, date_to,select_offer, partner_specialOffer, property_specialOffer, enter_amount, mh_offer,other_amenities,room_status FROM mh_property_rooms_table WHERE account_id='${accountId}' && partner_id='${partnerId}' && partner_sub_id='${partnerSubId}' && property_txn_id='${txnId}'`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];

      
      index = index + 1;
      data.push({
        index: index,
        ...element,
      });
      // console.log("kkkk",data);
    }
  }

  return { data };
}

async function getRoomsDataForAdmin(accountId, partnerId, partnerSubId, txnId) {
  const rows = await db.query(
    `SELECT txn_id, property_txn_id, partner_id, partner_sub_id, partner_name, sub_partner_name, property_name, sub_property_name, facilities, no_of_avail_rooms,room_category, room_type, price, units, room_image_1, room_image_2, room_image_3, room_image_4, room_image_5, date_format(date_from,"%d-%m-%Y") as date_from,date_format(date_to,"%d-%m-%Y") as date_to,property_specialOffer,room_status FROM mh_property_rooms_table WHERE account_id='${accountId}' && partner_id=${partnerId} && partner_sub_id=${partnerSubId} && property_txn_id=${txnId};`
  );
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
}
async function getSingleParentTypeDetail(id) {
  const rows = await db.query(
    `SELECT  id,property_name,phone,email,registration_number FROM mht_hotels WHERE parent_type_id=?`,
    [id]
  );
  const data = helper.emptyOrRows(rows);
  return data;
}
async function create(fields, files, docs, ipAddress) {
  let data = JSON.parse(fields.propertyPartnerDetails);
  let partnerSubId = await helper.generatePartnerSUBID();
  const result = await db.query(
    `INSERT IGNORE INTO mh_property_master(account_id,partner_sub_id,agent_name,agent_sub_name,phone,fax,alternate_no, email_id, description, building_no, street, land_mark, city, country, state, pin_code, pan, aadhar, gstin, bankAccountNo, bankName, branchName, ifsc, accept,pan_loc,addhaar_loc,gst_tin_loc,mh_agreement_loc,mb_certificate_loc,property_tax_loc,fire_safety_loc,cancelled_cheque_doc,state_id,city_id, ip_address)VALUES
      (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      
      data.account_id !== null && data.account_id !==undefined ? data.account_id : "",
      partnerSubId !== null && partnerSubId !== undefined ? partnerSubId : "",
    
     // data.propertyType.property_id ?? "",
      // data.propertyType.property_name ?? "",
      data.name !== null && data.name !== undefined ? data.name : "",
      data.partner_sub_name !== null && data.partner_sub_name !== undefined ? data.partner_sub_name : "",
   
      // data.company_name ?? "",
      // data.individual_name ??"",
      data.phone !== null && data.phone !== undefined ? data.phone : "",
    
      data.fax == "" ? data.phone : data.fax,
      data.alternate_no !== null && data.alternate_no !== undefined ? data.alternate_no : "",
      data.email_id !== null && data.email_id !== undefined ? data.email_id : "",
      data.description !== null && data.description !== undefined ? data.description : "",
      data.building_no !== null && data.building_no !== undefined ? data.building_no : "",
      data.street !== null && data.street !== undefined ? data.street : "",
      data.land_mark !== null && data.land_mark !== undefined ? data.land_mark : "",
      // data.land_mark ?? "",
      data.city1 == ""?data.city.city : data.city1,
      data.country.name !== null && data.country.name !== undefined ? data.country.name : "",
      // data.country.name ?? "",
      data.state1 == "" ?data.state.state_name : data.state1,
      data.pin_code !== null && data.pin_code !== undefined ? data.pin_code: "",
      data.pan !== null && data.pan !== undefined ? data.pan: "",
      data.aadhar !== null && data.aadhar !== undefined ? data.aadhar: "",
      // data.pin_code ?? "",
      // data.pan ?? "",
      // data.aadhar ?? "",
      data.gstin == ""? data.gst_registration :data.gstin,
      data.bankAccountNo !== null && data.bankAccountNo !== undefined ? data.bankAccountNo: "",
      data.bankName !== null && data.bankName !== undefined ? data.bankName: "",
      data.branchName !== null && data.branchName !== undefined ? data.branchName: "",
      data.ifsc !== null && data.ifsc !== undefined ? data.ifsc: "",
      data.accept !== null && data.accept !== undefined ? data.accept: "",
      // data.bankAccountNo ?? "",
      // data.bankName ?? "",
      // data.branchName ?? "",
      // data.ifsc ?? "",
      // data.accept ?? "",
      docs.panCardName ?? "",
      docs.addhaarName ?? "",
      docs.gstInName ?? "",
      docs.mhAgreementName ?? "",
      docs.mbCertificateName ?? "",
      docs.propertyTaxName ?? "",
      docs.fireSafetyName ?? "",
      docs.cancelledChequeName ?? "",
      data.state.state_id !== null && data.state.state_id !== undefined ? data.state.state_id: "",
      data.city.city_id !== null && data.city.city_id !== undefined ? data.city.city_id: "",
      // data.state.state_id ?? "",
      // data.city.city_id ?? "",
      ipAddress
    ]
  );
  let message = "Error in Property Registration Master";
  if (result.affectedRows) {
    message = "Property Registration Master created successfully";
  }
  return { message };
}

async function exsistingUserCreate(fields, files, docs,ipAddress) {
  let data = JSON.parse(fields.propertyPartnerDetails);
  // let fileObj = JSON.parse(JSON.stringify(files));
  let partnerSubId = await helper.generatePartnerSUBID();
  const result = await db.query(
    `INSERT IGNORE INTO mh_property_master(account_id,partner_id,partner_sub_id,property_name,property_type,agent_name,agent_sub_name,individual_name, phone, fax, email_id, description, building_no, street, land_mark, city, country, state, pin_code, pan, aadhar, gstin, bankAccountNo, bankName, branchName, ifsc, accept,pan_loc,addhaar_loc,gst_tin_loc,mh_agreement_loc,mb_certificate_loc,property_tax_loc,fire_safety_loc,cancelled_cheque_doc,state_id,city_id,ip_address)VALUES
      (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      data.account_id !== null && data.account_id !== undefined ?data.account_id : "",
      data.partner_id !== null &&data. partner_id !== undefined ?data. partner_id : "",
      partnerSubId !== null && partnerSubId !== undefined ? partnerSubId : "",
      data.propertyType.property_id !== null &&data.propertyType.property_id!== undefined ?data.propertyType.property_id : "",
      data.propertyType.property_name !== null && data.propertyType.property_name !== undefined ?data.propertyType.property_name : "",
      data.partner_name !== null && data.partner_name !== undefined ?data.partner_name : "",
      data.name !== null && data.name !== undefined ?data.name : "",
      data.individual_name !== null && data.individual_name !== undefined ?data.individual_name : "",
      data.phone !== null && data.phone !== undefined ?data.phone : "",
      data.fax !== null && data.fax !== undefined ?data.fax : "",
      data.email_id !== null && data.email_id !== undefined ?data.email_id : "",
      data.description !== null && data.description !== undefined ?data.description : "",
      data.building_no !== null && data.building_no !== undefined ?data.building_no : "",
      data.street !== null && data.street !== undefined ?data.street : "",
      data.land_mark !== null && data.land_mark !== undefined ?data.land_mark : "",
      data.city.city  !== null && data.city.city  !== undefined ?data.city.city  : "",
      data.country!== null && data.country!== undefined ?data.country : "",
      data.state.state_name !== null && data.state.state_name !== undefined ?data.state.state_name  : "",
      data.pin_code!== null && data.pin_code!== undefined ?data.pin_code: "",
      data.pan!== null && data.pan!== undefined ?data.pan: "",
      data.aadhar!== null && data.aadhar!== undefined ?data.aadhar: "",
      data.gstin!== null && data.gstin!== undefined ?data.gstin: "",
      data.bankAccountNo!== null && data.bankAccountNo!== undefined ?data.bankAccountNo: "",
      data.bankName!== null && data.bankName!== undefined ?data.bankName: "",
      data.branchName!== null && data.branchName!== undefined ?data.branchName: "",
      data.ifsc!== null && data.ifsc!== undefined ?data.ifsc: "",
      data.accept!== null && data.accept!== undefined ?data.accept: "",
     
      // data.account_id ?? "",
      // data.partner_id ?? "",
      // partnerSubId ?? "",
      // data.propertyType.property_id ?? "",
      // data.propertyType.property_name ?? "",
      // data.partner_name ?? "",
      // data.name ?? "",
     // data.company_name ?? "",
      // data.individual_name??"",
      // data.phone ?? "",
      // data.fax ?? "",
      // data.email_id ?? "",
      // data.description ?? "",
      // data.building_no ?? "",
      // data.street ?? "",
      // data.land_mark ?? "",
      // data.city.city ?? "",
      // data.country ?? "",
      // data.state.state_name ?? "",
      // data.pin_code ?? "",
      // data.pan ?? "",
      // data.aadhar ?? "",
      // data.gstin ?? "",
      // data.bankAccountNo ?? "",
      // data.bankName ?? "",
      // data.branchName ?? "",
      // data.ifsc ?? "",
      // data.accept ?? "",
      docs.panCardName ?? "",
      docs.addhaarName ?? "",
      docs.gstInName ?? "",
      docs.mhAgreementName ?? "",
      docs.mbCertificateName ?? "",
      docs.propertyTaxName ?? "",
      docs.fireSafetyName ?? "",
      docs.cancelledChequeName ?? "",
      data.state.state_id !== null && data.state.state_id !== undefined ?data.state.state_id : "",
      data.city.city_id!== null && data.city.city_id!== undefined ?data.city.city_id: "",
      // data.state.state_id ?? "",
      // data.city.city_id ?? "",
      ipAddress
    ]
  );

  let message = "Error in Property Registration Master";

  if (result.affectedRows) {
    message = "Property Registration Master created successfully";
  }
  return { message };
}
async function updatePropertyData(txnID, data,docNames) {
  const result = await db.query(
    `UPDATE mh_property_details_table SET partner_id=?,partner_sub_id=?, partner_name=?, sub_partner_name=?,partner_phone=?, property_name=?, sub_property_name=?,property_phone=?, property_email=?, property_description=?,property_latitude=?, property_longitude=?, building_no=?,street=?, land_mark=?, country=?, state_id=?, state_name=?,city_id=?, city_name=?, pin_code=?, checkIn_time=?, checkOut_time=?,Name_Of_Contact_Person=?,upload_image=?, upload_image1=?, upload_image2=?, upload_image3=?, upload_image4=?,bankAccountNo=?,bankName=?,branchName=?,ifsc=?,mh_service_fee=? WHERE txn_id='${txnID}'`,
    [
      data.partner_id !== null && data.partner_id !== undefined ? data.partner_id : "",
      data.partner_sub_id !== null && data.partner_sub_id !== undefined ? data.partner_sub_id : "",
      data.partner_name !== null && data.partner_name !== undefined ? data.partner_name : "",
      data.sub_partner_name !== null && data.sub_partner_name !== undefined ? data.sub_partner_name : "",
      data.partner_phone !== null && data.partner_phone !== undefined ? data.partner_phone : "",
      data.property_name.property_name ?? data.property_name ?? "",
      data.sub_property_name !== null && data.sub_property_name !== undefined ? data.sub_property_name : "",
      data.property_phone !== null && data.property_phone !== undefined ? data.property_phone : "",
      data.property_email !== null && data.property_email !== undefined ? data.property_email : "",
      data.property_description !== null && data.property_description !== undefined ? data.property_description : "",
      data.property_latitude !== null && data.property_latitude !== undefined ? data.property_latitude : "",
      data.property_longitude !== null && data.property_longitude !== undefined ? data.property_longitude : "",
      data.building_no !== null && data.building_no !== undefined ? data.building_no : "",
      data.street !== null && data.street !== undefined ? data.street : "",
      data.land_mark !== null && data.land_mark !== undefined ? data.land_mark : "",
      data.country !== null && data.country !== undefined ? data.country : "",
      data.state_id !== null && data.state_id !== undefined ? data.state_id : "",
      data.state_name !== null && data.state_name !== undefined ? data.state_name : "",
      data.city_id !== null && data.city_id !== undefined ? data.city_id : "",
      data.city_name !== null && data.city_name !== undefined ? data.city_name : "",
      data.pin_code !== null && data.pin_code !== undefined ? data.pin_code : "",
      data.checkIn_time !== null && data.checkIn_time !== undefined ? data.checkIn_time : "",
      data.checkOut_time !== null && data.checkOut_time !== undefined ? data.checkOut_time : "",
      data.Name_Of_Contact_Person !== null && data.Name_Of_Contact_Person !== undefined ? data.Name_Of_Contact_Person : "",
      docNames.upload_image1_name ?? "",
      docNames.upload_image2_name ?? "",
      docNames.upload_image3_name ?? "",
      docNames.upload_image4_name ?? "",
      docNames.upload_image5_name ?? "",
      data.bankAccountNo !== null && data.bankAccountNo !== undefined ? data.bankAccountNo : "",
      data.bankName !== null && data.bankName !== undefined ? data.bankName : "",
      data.branchName !== null && data.branchName !== undefined ? data.branchName : "",
      data.ifsc !== null && data.ifsc !== undefined ? data.ifsc : "",
      data.mh_service_fee !== null && data.mh_service_fee !== undefined ? data.mh_service_fee : "",
    
    ]
  );
  let message = "Error in updating Property Data";

  if (result.affectedRows) {
    message = "Property Data  updated successfully";
  }

  return { message };
}
async function approveAccPartnersData(partner_id,partner_sub_id, update) {
  const result = await db.query(
    `UPDATE mh_property_master SET status=?, remarks=? WHERE partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}'`,
    [
      "approved", 
    update.remarks,
  ]
  );
  // var result2 = await db.query(
  //   `UPDATE mh_property_details_table SET property_status=? WHERE  partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}'`,
  //   ["approved"]
  // );
  let message = "Error in Approving partner Data";

  if (result.affectedRows ) {
    message = "Partner Data Updated Successfully";
  }

  return { message };
}





async function approveAccPropertyData(partner_id,partner_sub_id,txn_id, update) {
  // console.log(partner_id,partner_sub_id,update)
  const result = await db.query(
    `UPDATE mh_property_details_table SET property_status=?, remarks=?,mh_service_fee=? WHERE partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}' AND txn_id='${txn_id}'`,
    [
      "approved", 
    update.remarks,
    update.mh_service_fee,
  ]
  );
 
  let message = "Error in Approving partner Data";

  if (result.affectedRows ) {
    message = "partner data updated successfully";
  }

  return { message };
}

async function approveAccRoomData(partner_id,partner_sub_id,txn_id, update) {
 
  const result = await db.query(
    `UPDATE mh_property_rooms_table SET room_status=?, remarks=? WHERE partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}' AND property_txn_id='${txn_id}'`,
    [
      "approved", 
    update.remarks,
  ]
  );
 
  let message = "Error in Approving partner Data";

  if (result.affectedRows ) {
    message = "Room data updated successfully";
  }

  return { message };
}

async function rejectAccRoomData(partner_id,partner_sub_id,txn_id, update) {
  const result = await db.query(
    `UPDATE mh_property_rooms_table SET room_status=?, remarks=? WHERE partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}' AND property_txn_id='${txn_id}'`,
    [ 
      "rejected",
      update.remarks,
     ]
  );
  let message = "Error in rejecting Room Data";

  if (result.affectedRows) {
    message = "Room data Rejected successfully";
  }

  return { message };
}
async function updateRoomsData( txnID,
  partner_id,
  partner_sub_id,
  data,
  docNames) {
  let amenity_arr = [];
  let amenity_iconArr = [];
  let room_numbers =[];
  for (let i = 0; i < data.facilities.length; i++) {
    amenity_arr.push(data.facilities[i].amenity_name ?? data.facilities[i]);
    amenity_iconArr.push(data.facilities[i].icon_image);
  }
  let amenities = amenity_arr.toString();
  let amenityIcon = amenity_iconArr.toString();
//console.log("sssssss",data);
  // let roomNumber = data.room_numbers.toString();
  let fromDate = moment(data.from_date).format("DD-MM-YYYY")
  let toDate = moment(data.to_date).format("DD-MM-YYYY");
  const result = await db.query(
    `UPDATE mh_property_rooms_table SET  txn_id=?, partner_id=?,partner_sub_id=?, property_name=?, sub_property_name=?, facilities=?, icon_image=?, no_of_avail_rooms=?, room_type=?, price=?,other_amenities=?, units=?, date_from=?, date_to=?,room_category=? ,select_offer=?, partner_specialOffer=?, property_specialOffer=?, enter_amount=?,room_image_1=?,room_image_2=?,room_image_3=?,room_image_4=?,room_image_5=? WHERE txn_id='${txnID}' AND partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}'`,
    [
      data.txn_id !== null && data.txn_id !== undefined ? data.txn_id : "",
      data.partner_id !== null && data.partner_id !== undefined ? data.partner_id : "",
      data.partner_sub_id !== null && data.partner_sub_id !== undefined ? data.partner_sub_id : "",
      data.property_name !== null && data.property_name !== undefined ? data.property_name : "",
      data.sub_property_name !== null && data.sub_property_name !== undefined ? data.sub_property_name : "",
      data.amenities !== null && data.amenities !== undefined ? data.amenities : "",
      data.amenityIcon !== null && data.amenityIcon !== undefined ? data.amenityIcon : "",
      data.no_of_avail_rooms !== null && data.no_of_avail_rooms !== undefined ? data.no_of_avail_rooms : "",
      data.room_type !== null && data.room_type !== undefined ? data.room_type : "",
      data.price !== null && data.price !== undefined ? data.price : "",
      data.other_amenities !== null && data.other_amenities !== undefined ? data.other_amenities : "",
      data.units !== null && data.units !== undefined ? data.units : "",
      data.date_from ?? data.data_from_up ?? "",
      data.date_to ?? data.data_to_up ?? "",
      data.room_category !== null && data.room_category !== undefined ? data.room_category : "",
      data.select_offer !== null && data.select_offer !== undefined ? data.select_offer : "",
      data.partner_specialOffer !== null && data.partner_specialOffer !== undefined ? data.partner_specialOffer : "",
      data.property_specialOffer !== null && data.property_specialOffer !== undefined ? data.property_specialOffer : "",
      data.enter_amount !== null && data.enter_amount !== undefined ? data.enter_amount : "",
      // data.txn_id ??"",
      // data.partner_id ?? "",
      // data.partner_sub_id ?? "",
      // data.property_name ?? "",
      // data.sub_property_name ?? "",
      // amenities ?? "",
      // amenityIcon ?? "",
      // roomNumber ?? "",
      // data.no_of_avail_rooms ?? "",
      // data.room_type ?? "",
      // data.price ?? "",
      // data.other_amenities ?? "",
      // data.units ?? "",
     
      
      // data.room_category ?? "",
      // data.select_offer ?? "",
      // data.partner_specialOffer ?? "",
      // data.property_specialOffer ?? "",
      // data.enter_amount ??"",
      docNames.upload_room_image1_name ?? "",
      docNames.upload_room_image2_name ?? "",
      docNames.upload_room_image3_name ?? "",
      docNames.upload_room_image4_name ?? "",
      docNames.upload_room_image5_name ?? "",
    ]
  );

  let message = "Error in Updating Room Details";

  if (result.affectedRows) {
    message = "Room Details Updated successfully";
  }
  return { message };
}
async function updateRoomStatus(accountID, partnerID, partnerSubId, propertyID, roomID, data) {
  const result = await db.query(
    `UPDATE mh_property_rooms_table SET status=? WHERE account_id='${accountID}' AND partner_id='${partnerID}' AND partner_sub_id='${partnerSubId}' AND property_txn_id='${propertyID}' AND txn_id='${roomID}'`,
    [data.status == "yes" ? "no" : "yes"]
  );
  
  let message = "Error in Updating Room Status";

  if (result.affectedRows) {
    message = "Room Status Updated successfully";
  }
  return { message };
}
async function rejectAccPartnersData(partner_id,partner_sub_id, update) {
  const result = await db.query(
    `UPDATE mh_property_master SET status=?, remarks=? WHERE partner_id='${partner_id}' AND partner_sub_id='${partner_sub_id}'`,
    [ 
      "rejected",
      update.remarks,
     ]
  );
  let message = "Error in rejecting partner Data";

  if (result.affectedRows) {
    message = "partner data Rejected successfully";
  }

  return { message };
}
async function createPropertyDetails(fields, files, docs, ipAddress) {
  let data = JSON.parse(fields.property_details);
  // console.log("data",data);
  let amenity_nameArr = [];
  let amenity_iconArr = [];
  for (let i = 0; i < data.amenities.length; i++) {
    amenity_nameArr.push(data.amenities[i].amenity_name);
    amenity_iconArr.push(data.amenities[i].icon_image);
  }
  let amenityName = amenity_nameArr.toString();
  let amenityIcon = amenity_iconArr.toString();
  const result = await db.query(
    `INSERT IGNORE INTO mh_property_details_table( account_id, partner_id, partner_sub_id, partner_name,sub_partner_name, partner_phone,property_id, property_name, sub_property_name, property_phone,property_email,property_description, property_latitude,property_longitude,building_no,street,land_mark,country,state_id,state_name,city_id,city_name,pin_code, amenity_name, amenity_icon, checkIn_time, checkOut_time,Name_Of_Contact_Person,property_status, upload_image,upload_image1,upload_image2,upload_image3,upload_image4,ip_address,bankAccountNo, bankName, branchName, ifsc,cancelled_cheque_doc,mh_agreement,mh_declaration,mh_bankmandate,mh_gstin,mh_service_fee)VALUES
    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  [
    data.account_id !== null && data.account_id !== undefined ? data.account_id : "",
    data.partner_id !== null && data.partner_id !== undefined ? data.partner_id : "",
    data.partner_sub_id !== null && data.partner_sub_id !== undefined ? data.partner_sub_id : "",
    data.partner_name !== null && data.partner_name !== undefined ? data.partner_name : "",
    data.partner_sub_name !== null && data.partner_sub_name !== undefined ? data.partner_sub_name : "",
    data.partner_phone !== null && data.partner_phone !== undefined ? data.partner_phone : "",
    data.property_name.property_id  !== null && data.property_name.property_id  !== undefined ? data.property_name.property_id  : "",
    data.property_name.property_name !== null && data.property_name.property_name !== undefined ? data.property_name.property_name : "",
    data.sub_property_name!== null && data.sub_property_name!== undefined ? data.sub_property_name: "",
    data.property_phone!== null && data.property_phone!== undefined ? data.property_phone: "",
    data.property_email_id!== null && data.property_email_id!== undefined ? data.property_email_id: "",
    data.property_description!== null && data.property_description!== undefined ? data.property_description: "",
    data.property_latitude!== null && data.property_latitude!== undefined ? data.property_latitude: "",
    data.property_longitude!== null && data.property_longitude!== undefined ? data.property_longitude: "",
    data.building_no!== null && data.building_no!== undefined ? data.building_no: "",
    data.street!== null && data.street!== undefined ? data.street: "",
    data.land_mark!== null && data.land_mark!== undefined ? data.land_mark: "",
    data.country!== null && data.country!== undefined ? data.country: "",
    data.state.state_id!== null && data.state.state_id!== undefined ? data.state.state_id: "",
    data.city.city_id!== null && data.city.city_id!== undefined ? data.city.city_id: "",
    data.city.city!== null && data.city.city!== undefined ? data.city.city: "",
    data.pin_code!== null && data.pin_code!== undefined ? data.pin_code: "",
    data.amenityName!== null && data.amenityName!== undefined ? data.amenityName: "",
    data.amenityIcon!== null && data.amenityIcon!== undefined ? data.amenityIcon: "",
    data.checkIn_time!== null && data.checkIn_time!== undefined ? data.checkIn_time: "",
    data.checkOut_time!== null && data.checkOut_time!== undefined ? data.checkOut_time: "",
    data.Name_Of_Contact_Person!== null && data.Name_Of_Contact_Person!== undefined ? data.Name_Of_Contact_Person: "",
    data.property_status!== null && data.property_status!== undefined ? data.property_status: "",
    docs.upload_image1_name ?? "",
    docs.upload_image2_name ?? "",
    docs.upload_image3_name ?? "",
    docs.upload_image4_name ?? "",
    docs.upload_image5_name ?? "",
    ipAddress,
    data.bankAccountNo!== null && data.bankAccountNo!== undefined ? data.bankAccountNo: "",
    data.bankName!== null && data.bankName!== undefined ? data.bankName: "",
    data.branchName!== null && data.branchName!== undefined ? data.branchName: "",
    data.ifsc!== null && data.ifsc!== undefined ? data.ifsc: "",
    data.ifsc!== null && data.ifsc!== undefined ? data.ifsc: "",
    docs.cancelledChequeName ?? "",
    docs.cancelledChequeName ?? "",
    docs.declarationName ?? "",
    docs.mhagreementName ?? "",
    docs.gst_tinName ?? "",
    data.mh_service_fee !== null && data.mh_service_fee !== undefined ? data.mh_service_fee : "",
    // data.account_id ?? "",
    // data.partner_id ?? "",
    // data.partner_sub_id ?? "",
    // data.partner_name ?? "",
    // data.partner_sub_name ?? "",
    // data.partner_phone ?? "",
    // data.property_name.property_id ??"",
    // data.property_name.property_name ?? "",
    // data.sub_property_name ?? "",
    // data.property_phone ?? "",
    // data.property_email_id ?? "",
    // data.property_description ?? "",
    // data.property_latitude ?? "",
    // data.property_longitude ?? "",
    // data.building_no ?? "",
    // data.street ?? "",
    // data.land_mark ?? "",
    // data.country ?? "",
    // data.state.state_id ?? "",
    // data.state.state_name ?? "",
    // data.city.city_id ?? "",
    // data.city.city ?? "",
    // data.pin_code ?? "",
    // amenityName ?? "",
    // amenityIcon ?? "",
    // data.checkIn_time ?? "",
    // data.checkOut_time ?? "",
    // data.Name_Of_Contact_Person ?? "",
    // data.property_status ??"", 
  
    // data.bankAccountNo ?? "",
    // data.bankName ?? "",
    // data.branchName ?? "",
    // data.ifsc ?? "",
  
    // data.mh_service_fee ?? "",

    ]
  );
  const result2 = await db.query(
    `INSERT IGNORE INTO mh_search_city_master(city_id, city_name)VALUES(?,?)`,
    [
      data.city.city_id, 
      data.city.city,
    ]
  );
  let message = "Error in Saving Property Details";

  if (result.affectedRows) {
    message = "Property Details Master created successfully";
  }
  if (result2.affectedRows) {
    message = "Property Details Master created successfully";
  }
  return { message };
}
async function createRoomDetails(fields, files, docs, ipAddress) {
  let data = JSON.parse(fields.room_details);
  console.log("data89456",data);
  // console.log("docs",docs,files);


  let amenity_arr = [];
  let amenity_iconArr = [];
  for (let i = 0; i < data.facilities.length; i++) {
    amenity_arr.push(data.facilities[i].amenity_name);
    amenity_iconArr.push(data.facilities[i].icon_image);
  }
  let amenities = amenity_arr.toString();
  console.log("1",amenities)
  let amenityIcon = amenity_iconArr.toString();
  console.log("2",amenityIcon)
  // let roomNumber = data.room_numbers.toString();
  // console.log("3",roomNumber )
  const result = await db.query(
    `INSERT IGNORE INTO mh_property_rooms_table(txn_id,account_id,property_txn_id, partner_id, partner_name,partner_sub_id, sub_partner_name, property_name, sub_property_name, facilities, icon_image,other_amenities, no_of_avail_rooms, room_type, price,room_category, date_from,date_to,select_offer,	max_allow_adult,max_allow_kids,withac_withbreakfast_price,withac_withoutbreakfast_price,	withoutac_withbreakfast_price,withoutac_withoutbreakfast_price	,property_specialOffer,enter_amount,room_image_1,room_image_2,room_image_3,room_image_4,room_image_5,ip_address)VALUES
   (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
     
      data.txn_id ?? "",
      data.account_id ?? "",
      data.property_txn_id ?? "",
      data.partner_id ?? "",
      data.partner_name ?? "",
      data.partner_sub_id ?? "",
      data.sub_partner_name ?? "",
      data.property_name?? "",
      data.sub_property_name ?? "",
      amenities ?? "",
      amenityIcon ?? "",


      data.other_amenities ?? "",
      data.no_of_avail_rooms ?? "",
      data.room_type ?? "",
      // roomNumber ?? "",
      data.price ?? "",
     // data.units ?? "",
      data.room_category ?? "",
      data.date_from ?? "",
      data.date_to ?? "",
      data.select_offer ?? "",
      data.max_adult ?? "",
      data.max_kids ?? "",
      // data.gst_per.gst_value ?? "",
      data.withac_withbreakfast_price ?? "",
      data.withac_withoutbreakfast_price ?? "",
     data.withoutac_withbreakfast_price ?? "",
       data.withoutac_withoutbreakfast_price ?? "",
      data.property_specialOffer ?? "",
      data.enter_amount ?? "",
      docs.upload_room_image1_name ?? "",
      docs.upload_room_image2_name ?? "",
      docs.upload_room_image3_name ?? "",
      docs.upload_room_image4_name ?? "",
      docs.upload_room_image5_name ?? "",
     // data.status ?? "",
      ipAddress
    ]
  );
  var result1 = await db.query(`INSERT IGNORE INTO mh_room_operation(account_id,property_txn_id, partner_id, partner_name,partner_sub_id, sub_partner_name, property_name, sub_property_name,room_category, facilities, icon_image,other_amenities, room_type,max_allow_adult,max_allow_kids, gst_per,	withac_withbreakfast_price,withac_withoutbreakfast_price,	withoutac_withbreakfast_price,withoutac_withoutbreakfast_price,date_from,date_to,offer_nonac,offer_nonac_breakfast,offer_ac,offer_ac_breakfast,offer_date_from,offer_date_to,tendays_offer,twentydays_offer,thirtydays_offer,offerApplicableFromDate,offerApplicableToDate,maximum_capacity_adults,maximum_capacity_kids,rate_incress,ip_address) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  [
    
      data.account_id ?? "",
      data.property_txn_id ?? "",
      data.partner_id ?? "",
      data.partner_name ?? "",
      
      
      
      data.partner_sub_id ?? "",
      data.sub_partner_name ?? "",
      data.property_name?? "",
      data.sub_property_name ?? "",
      data.room_category?? "",

      amenities?? "",
      amenityIcon ?? "",
      data.other_amenities ?? "",
      data.room_type ?? "",
      data.max_allow_adult ?? "",
      data.max_allow_kids ?? "",
      data.gst_per ?? "",
      data.withac_withbreakfast_price ?? "",
      data.withac_withoutbreakfast_price ?? "",
      data.withoutac_withbreakfast_price ?? "",

      data.withoutac_withoutbreakfast_price ?? "",
      data.date_from ?? "",
      data.date_to ?? "",
      data.offer_nonac ?? "",
      data.offer_nonac_breakfast ?? "",
      data.offer_nonac?? "",
      data.offer_ac_breakfast ?? "",
      data.offer_date_from ?? "",
      data.offer_date_to ?? "",
      data.tendays_offer ?? "",
      data.twentydays_offer  ?? "",
      data.thirtydays_offer  ?? "",

      // data.twentydays_price ?? "",
      // data.thirtydays_price ?? "",
      data.offerApplicableFromDate ?? "",
      data.offerApplicableToDate ?? "",
      data.maximum_capacity_adults ?? "",
      data.maximum_capacity_kids ?? "",
      data.rate_incress ?? "",
      ipAddress
  ]
  );

  let message = "Error in Saving Room Details";

  if (result.affectedRows&& result1.affectedRows)
  console.log("result1",result1); {
    console.log("result1",result1);
    message = "Room Details created successfully";
  }
  return { message };
}

// async function createRoomDetails(fields, files, docs, ipAddress) {
//   let data = JSON.parse(fields.room_details);
//   // console.log("datasada",data);
//   // console.log("docs",docs,files);


//   let amenity_arr = [];
//   let amenity_iconArr = [];
//   for (let i = 0; i < data.facilities.length; i++) {
//     amenity_arr.push(data.facilities[i].amenity_name);
//     amenity_iconArr.push(data.facilities[i].icon_image);
//   }
//   let amenities = amenity_arr.toString();
//   console.log("1",amenities)
//   let amenityIcon = amenity_iconArr.toString();
//   console.log("2",amenityIcon)
//   let roomNumber = data.room_numbers.toString();
//   console.log("3",roomNumber )
//   const result = await db.query(
//     `INSERT IGNORE INTO mh_property_rooms_table(account_id,property_txn_id, partner_id, partner_name,partner_sub_id, sub_partner_name, property_name, sub_property_name, facilities, icon_image,other_amenities, no_of_avail_rooms, room_type,room_numbers, price,room_category, date_from,date_to,select_offer,	max_allow_adult,max_allow_kids,gst_per,withac_withbreakfast_price,withac_withoutbreakfast_price,	withoutac_withbreakfast_price,withoutac_withoutbreakfast_price	,property_specialOffer,enter_amount,room_image_1,room_image_2,room_image_3,room_image_4,room_image_5,ip_address)VALUES
//    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
//     [
     

//       data.account_id ?? "",
//       data.property_txn_id ?? "",
//       data.partner_id ?? "",
//       data.partner_name ?? "",
//       data.partner_sub_id ?? "",
//       data.sub_partner_name ?? "",
//       data.property_name?? "",
//       data.sub_property_name ?? "",
//       amenities ?? "",
//       amenityIcon ?? "",


//       data.other_amenities ?? "",
//       data.no_of_avail_rooms ?? "",
//       data.room_type ?? "",
//       roomNumber ?? "",
//       data.price ?? "",
//      // data.units ?? "",
//       data.room_category ?? "",
//       data.date_from ?? "",
//       data.date_to ?? "",
//       data.select_offer ?? "",
//       data.max_adult ?? "",
//       data.max_kids ?? "",
//       data.gst_per.gst_value ?? "",
//       data.withac_withbreakfast_price ?? "",
//       data.withac_withoutbreakfast_price ?? "",
//      data.withoutac_withbreakfast_price ?? "",
//        data.withoutac_withoutbreakfast_price ?? "",
//       data.property_specialOffer ?? "",
//       data.enter_amount ?? "",
//       docs.upload_room_image1_name ?? "",
//       docs.upload_room_image2_name ?? "",
//       docs.upload_room_image3_name ?? "",
//       docs.upload_room_image4_name ?? "",
//       docs.upload_room_image5_name ?? "",
//      // data.status ?? "",
//       ipAddress
//     ]
//   );
//   let message = "Error in Saving Room Details";

//   if (result.affectedRows) {
//     message = "Room Details created successfully";
//   }
//   return { message };
// }

async function update(
  accountId,
  partnerId,
  partnerSubId,
  agentName,
  agentSubName,
  data
) {
  let city="";
  if(data.city !=""){
    city = data.city.city;
  } else {
    city = data.city1
  }
  let state="";
  if(data.state !=""){
    state = data.state.state_name;
  } else {
    state = data.state1
  }
  // console.log("data",data)
  const result = await db.query(
    `UPDATE mh_property_master SET  account_id=?, partner_id=?, partner_sub_id=?,agent_name=?,agent_sub_name=?, phone=?, fax=?,alternate_no=?, email_id=?, description=?, building_no=?, street=?, land_mark=?, city=?, country=?, state=?, state_id=?, city_id=?, pin_code=?, accept=? WHERE account_id='${accountId}' AND partner_id='${partnerId}' AND partner_sub_id='${partnerSubId}'`,
    [
      data.account_id ?? "",
      data.partner_id ?? "",
      data.partner_sub_id ?? "",
      // data.propertyType ?? "",
      // data.propertyType ?? "",
      agentSubName ==agentSubName ? agentSubName : agentName,
      data.name ?? "",
      // data.company_name ?? "",
      // data.individual_name??"",
      data.phone ?? "",
      data.fax ?? "",
      data.alternate_no ??"",
      data.email_id ?? "",
      data.description ?? "",
      data.building_no ?? "",
      data.street ?? "",
      data.land_mark ?? "",
      data.prevcity == data.city ? data.city : city,
      data.country.name ?? data.country,
      data.prevstate == data.state ?data.state :state,
      data.state.state_id ?? 0,
      data.city.city_id ?? 0,
      data.pin_code ?? "",
      data.accept ?? "",
    ]
  );
  if(agentName == agentSubName) {
    const result2 = await db.query(
      `UPDATE mh_property_master SET agent_name=? WHERE partner_id='${partnerId}'`,
      [agentSubName == agentSubName ? data.partner_sub_name : agentName]
    );
    let message = "Error in updating Property Registration Master";
    if (result2.affectedRows) {
      message = "Property Registration Master updated successfully";
    }
    return { message };
  };

  let message = "Error in updating Property Registration Master";

  if (result.affectedRows) {
    message = "Property Registration Master updated successfully";
  }

  return { message };
}
async function remove(id) {
  const result = await db.query(
    `DELETE FROM mht_hotels WHERE parent_type_id=?`,
    [id]
  );

  let message = "Error in deleting Property Registration Master";

  if (result.affectedRows) {
    message = "Property Registration Master deleted successfully";
  }

  return { message };
}

async function createPropretyReg(data) {
  // var status_accept = data.accept == true ? "yes" : "no";

  let partnerSubId = await helper.generatePartnerSUBID();
  const result = await db.query(
    `INSERT IGNORE INTO mh_property_master(partner_id,partner_sub_id,property_type,property_name,agent_name,individual_name, phone, fax, email_id, description, building_no, street, land_mark, city, country, state, pin_code, pan, aadhar, gstin, bankAccountNo, bankName, branchName, ifsc, accept)VALUES
      (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      data.partner_id ?? "",
      partnerSubId ?? "",
      data.property.property_type ?? "",
      data.property_name ?? "",
      data.name ?? "",
     // data.company_name ?? "",
      data.individual_name?? "",
      data.phone ?? "",
      data.fax ?? "",
      data.email_id ?? "",
      data.description ?? "",
      data.building_no ?? "",
      data.street ?? "",
      data.land_mark ?? "",
      data.city ?? "",
      data.country ?? "",
      data.state ?? "",
      data.pin_code ?? "",
      data.pan ?? "",
      data.aadhar ?? "",
      data.gstin ?? "",
      data.bankAccountNo ?? "",
      data.bankName ?? "",
      data.branchName ?? "",
      data.ifsc ?? "",
      data.accept ?? "",
    ]
  );

  let message = "Error in Property Registration Master";

  if (result.affectedRows) {
    message = "Property Registration Master created successfully";
  }

  return { message };
}
async function gethotelData(account_id) {
  const rows = await db.query(
    `SELECT account_id,property_txn_id,partner_id,partner_sub_id,sub_property_name,room_type, room_category, date_format(date_from,"%d-%m-%Y") as date_from, date_format(date_to,"%d-%m-%Y") as date_to,facilities,max_allow_adult,max_allow_kids,withoutac_withoutbreakfast_price,withoutac_withbreakfast_price,withac_withbreakfast_price,gst_per, units,property_specialOffer FROM mh_property_rooms_table WHERE account_id='${account_id}'`
  );

  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];

      index = index + 1;
      data.push({
        index: index,
        ...element,
      });
    }
  }

  return { data };
}
async function getMultiplePropertyDetails() {
  //   const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT  partner_id,partner_sub_id,account_id,property_id,property_name,property_type,agent_name,agent_sub_name,phone,fax,alternate_no,email_id,agent_commission,description,building_no,street,land_mark,city,city_id,country,state,state_id,pin_code,pan,aadhar,gstin,bankAccountNo,bankName,branchName,ifsc,cancelled_cheque_doc,pan_loc,gst_tin_loc,addhaar_loc,mh_agreement_loc,partner_pic_loc,mb_certificate_loc,property_tax_loc,fire_safety_loc, accept, status, remarks,concat(building_no,",",street,"," ,state,"," ,city,"," ,country) as address,concat(state,"," ,city) as location,alternate_no FROM mh_property_master WHERE 1`
  );
  const data = helper.emptyOrRows(rows);
  //   const meta = { page };

  return {
    data,
  };
}

async function saveRoomAvailData(data) {
  let val = data.selected_date.split("/").reverse().join("-");
  let dateArr = val.split("-");
  let selDateValue = parseInt(dateArr[0]);
  let selMonthValue = parseInt(dateArr[1]);
  let selYearValue = parseInt(dateArr[2]);

  let dayColumn = `b${selDateValue}`;
  let availColumn = `a${selDateValue}`

  const rows1 = await db.query(
    `SELECT account_id, partner_id, partner_sub_id, property_id, room_id, year, month FROM mht_rooms_availabilities WHERE account_id='${data.account_id}' AND partner_id='${data.partner_id}' AND partner_sub_id='${data.partner_sub_id}' AND property_id='${data.property_txn_id}' AND room_id='${data.room_txn_id}' AND year='${selYearValue}'AND month='${selMonthValue}'`
  );
  let getRoomsAvailData = helper.emptyOrRows(rows1);
  if(getRoomsAvailData.length == 0) {
    const result = await db.query(
        `INSERT IGNORE INTO mht_rooms_availabilities(account_id, partner_id, partner_sub_id, property_id, room_id, year, month, ${dayColumn},${availColumn})VALUES
        (?,?,?,?,?,?,?,?,?)`,
        [
          data.account_id ?? "",
          data.partner_id ?? "",
          data.partner_sub_id ?? "",
          data.property_txn_id ?? "",
          data.room_txn_id ?? "",
          selYearValue ?? "",
          selMonthValue ?? "",
          selDateValue ?? "",
          data.availability_count ?? "",
        ]
      );
    
      let message = "Error in Saving Room availability dates";
    
      if (result.affectedRows) {
        message = "Room availability dates saved successfully";
      }
      return { message };
  } else {
    const result = await db.query(
      `UPDATE mht_rooms_availabilities SET ${dayColumn}=?, ${availColumn}=? WHERE account_id='${data.account_id}' AND partner_id='${data.partner_id}' AND partner_sub_id='${data.partner_sub_id}' AND property_id='${data.property_txn_id}' AND room_id='${data.room_txn_id}' AND year='${selYearValue}' AND month='${selMonthValue}'`,
      [
        selDateValue,
        data.availability_count,
      ]
    );
    let message = "Error in Updating Room availability dates";
    
    if (result.affectedRows) {
      message = "Room availability dates Updated successfully";
    }
    return { message };
  }
}
async function getAllRoomAvailCountDates(accountId, partnerId, partnerSubId,propertyTxnId, RoomId) {
  const rows = await db.query(
    `SELECT * FROM mht_rooms_availabilities WHERE account_id='${accountId}' &&  partner_id='${partnerId}' && partner_sub_id='${partnerSubId}' && property_id='${propertyTxnId}' && room_id='${RoomId}'`
  );
  const data = helper.emptyOrRows(rows);
  return { data };
}
//other partners saving
async function createTravelDetails(fields, files, docs, ipAddress) {
  //let transportSubId = await helper.generateTransportSUBID();
  let data = JSON.parse(fields.travelLocation);
  const result = await db.query(
    `INSERT IGNORE INTO mh_travel_location_table(agent_id,account_id,transport_sub_id,travel_name,no_of_seaters,transport_sub_name,address,city_id,city,location,vehicle_name,day_price,night_price,units,description,vehicle_image,travel_status,ip_address)
    VALUES
    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      data.agent_id ?? "",
      data.account_id ?? "",
      data.transport_sub_id ?? "",
      data.agent_name ?? "",
      data.no_of_seaters ?? "",
      data.transport_sub_name ?? "",
      data.address ?? "",
      data.city_id ?? "",
      data.city ?? "",
      data.location ?? "",
      data.vehicle_name ?? "",
      data.day_price ?? "",
      data.night_price ?? "",
      data.units ?? "",
      data.description ?? "",
      docs.vehicleImageName ?? "",
      data.travel_status ??"",
      ipAddress
    ]
  );
  let message = "Error in Travel Location  Registration";
 
  if (result.affectedRows) {
    message = "Travel Location  Registration created successfully";
  }
  return { message };
 }
 async function createAccFood(fields, files, docs, ipAddress) {
  let data = JSON.parse(fields.food_details);
  // console.log("data",data);
  // let food_items_list_arr = [];
  // for (let i = 0; i < data.foodItemsList.length; i++) {
  //   food_items_list_arr.push(data.foodItemsList[i].food_items_name);
  // }
  // let foodItemsList = food_items_list_arr.toString();
  const result = await db.query(
    `INSERT IGNORE INTO mh_foodpartner_details(account_id,agent_id, agent_sub_id,kitchen_name, kitchen_type,item_name,food_items_name,items_available_from,items_available_to,price,units,partner_status,food_image, ip_address)VALUES
      (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      // data.kitchen_txn_id ??"",
      data.account_id ?? "",
      data.agent_id ?? "",
      data.agent_sub_id ?? "",
      // data.foodPartner_name ?? "",
      // data.foodPartner_sub_name ?? "",
      // data.address ?? "",
      // data.location ?? "",
      // data.city ?? "",
      // data.city_id ?? "",
      // data.gstin ?? "",
      // data.fssai_no ?? "",
      data.kitchen_name ?? "",
      data.kitchen_type ?? "",
      data.foodtype ?? "",
      data.foodName ?? "",
      data.items_available_from ?? "",
      data.items_available_to?? "",
      data.price ?? "",
      data.units ?? "",
      data.partner_status ?? "",
      docs.foodImg_name ?? "",
      ipAddress
    ]
  );

  let message = "Error in Saving Food Details";
  if (result.affectedRows) {
    message = "Food Details Master created successfully";
  }
  return { message };
} 
async function createAccMedical(fields, files, docs, ipAddress) {
  let data = JSON.parse(fields.equipmentItemDetails);
  const result = await db.query(
    `INSERT IGNORE INTO mh_equipment_location_table(account_id, equipment_id, equipment_sub_id, agent_name, equipment_sub_name, item_name, item_id, price, units,units_id,medical_store,purchased_type,address,city,city_id,location,partner_status,equipment_image,ip_address)VALUES
    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      data.account_id ?? "",
      data.equipment_id ?? "",
      data.equipment_sub_id ?? "",
      data.agent_name ?? "",
      data.equipment_sub_name ?? "",
      data.item_name.item_name ?? "",
      data.item_name.item_id ?? "",
      data.price ?? "",
      data.units.units ?? "",
      data.units.unit_id ?? "",
      data.medical_store ?? "",
      data.purchased_type ?? "",
      data.address ?? "",
      data.city ?? "",
      data.city_id ?? "",
      data.location ?? "",
      data.partner_status ?? "",
      docs.equipmentImageName ?? "",
      ipAddress
    ]
  );
  let message = "Error in Equipment Registration Location Master";
 
  if (result.affectedRows) {
    message = "Equipment Registration Location Master created successfully";
  }
 
  return { message };
 }
 async function getAccFoodDetails(account_id, agent_id, agent_sub_id,txn_id) {
  const rows = await db.query(
    `SELECT account_id,item_txn_id,agent_id,agent_sub_id,kitchen_name, kitchen_type,item_name,items_available_from,items_available_to,food_type_id,food_items_name,price,units,food_image,status,date_format(updated_datetime,"%d-%m-%Y") as updated_datetime,partner_status FROM mh_foodpartner_details WHERE account_id = '${account_id}' AND agent_id=${agent_id} AND agent_sub_id=${agent_sub_id} AND txn_id='${txn_id}';`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];

      index = index + 1;
      data.push({
        index: index,
        ...element,
      });
    }
  }
  return {
    data,
  };
}
async function accFoodUpdate(txnID, agentId, agentSubId, data) {
  // let food_items_list_arr = [];
  // for (let i = 0; i < data.foodItemsList.length; i++) {
  //   food_items_list_arr.push(
  //     data.foodItemsList[i].food_items_name ?? data.foodItemsList[i]
  //   );
  // }

  // let foodItemsList = food_items_list_arr.toString();
  const result = await db.query(
    `UPDATE mh_foodpartner_details SET  account_id=?,agent_id=?, agent_sub_id=?,kitchen_name=?, kitchen_type=?,item_name=?,food_items_name=?,price=?,units=?,partner_status=?,food_image=? WHERE item_txn_id='${txnID}' AND agent_id='${agentId}' AND agent_sub_id='${agentSubId}'`,
    [
      data.account_id ?? "",
      data.agent_id ?? "",
      data.agent_sub_id ?? "",
      // data.foodPartner_name ?? "",
      // data.foodPartner_sub_name ?? "",
      // data.address ?? "",
      // data.location ?? "",
      // data.city ?? "",
      // data.city_id ?? "",
      // data.gstin ?? "",
      // data.fssai_no ?? "",
      data.kitchen_name ?? "",
      data.kitchen_type ?? "",
      data.foodtype ?? "",
      data.foodName ?? "",
      data.price ?? "",
      data.units ?? "",
      data.partner_status ?? "",
      data.food_image ?? "",
    ]
  );
  let message = "Error in updating Food Details Registration";

  if (result.affectedRows) {
    message = "Food Details Master updated successfully";
  }

  return { message };
}
async function loadAccTravel(account_id, agent_id, transport_sub_id) {
  //   const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT txn_id,agent_id,account_id, transport_sub_id,account_id, travel_name, transport_sub_name,city_id,city, 
    vehicle_name,day_price,night_price,no_of_seaters, units, description,special_offer,vehicle_image,travel_status FROM mh_travel_location_table WHERE   
    account_id='${account_id}' && agent_id='${agent_id}' && transport_sub_id='${transport_sub_id}'`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];

      index = index + 1;

      data.push({
        index: index,
        ...element,
      });
    }
  }

  return {
    data,
  };
}
async function accTravelUpdating(txnID, agentId, transportSubId, data) {
  const result = await db.query(
    `UPDATE mh_travel_location_table SET  account_id=?,agent_id=?, transport_sub_id=?,travel_name=?, transport_sub_name=?,city_id=?,city=?,vehicle_name=?,day_price=?,night_price=?,units=?,description=?,no_of_seaters=?,travel_status=? WHERE txn_id='${txnID}' AND agent_id='${agentId}' AND transport_sub_id='${transportSubId}'`,
    [
      data.account_id ?? "",
      data.agent_id ?? "",
      data.transport_sub_id ?? "",
      data.agent_name ?? "",
      data.transport_sub_name ?? "",
      data.city_id ?? "",
      data.city ?? "",
      data.vehicle_name ?? "",
      data.day_price ?? "",
      data.night_price ?? "",
      data.units ?? "",
      data.description ?? "",
      // data.special_offer ?? "",
      data.no_of_seaters ?? "",
      data.travel_status ??"",
    ]
  );
  let message = "Error in Travel Location  Registration";

  if (result.affectedRows) {
    message = "Travel Location  Registration updated successfully";
  }
  return { message };
}
async function getAccMedical(
  account_id,
  equipment_id,
  equipment_sub_id
) {
  //   const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT txn_id,equipment_id,account_id, equipment_sub_id, agent_name, equipment_sub_name, item_name, price, units, equipment_image,status,medical_store,address,location,city,city_id,special_offer,item_id,units_id,partner_status,purchased_type FROM mh_equipment_location_table WHERE account_id='${account_id}' && equipment_id='${equipment_id}' && equipment_sub_id='${equipment_sub_id}'`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];

      index = index + 1;

      data.push({
        index: index,
        ...element,
      });
    }
  }
  return {
    data,
  };
}
async function accUpdatingmedical(
  equipment_id,
  equipment_sub_id,
  txn_id,
  data
) {
  const result = await db.query(
    `UPDATE mh_equipment_location_table SET account_id=?, txn_id=?, equipment_id=?, equipment_sub_id=?,agent_name=?,equipment_sub_name=?, item_name=?,item_id=?, medical_store=?, price=?, units=?, units_id=?, partner_status=?, purchased_type=? WHERE equipment_id='${equipment_id}' AND equipment_sub_id='${equipment_sub_id}' AND txn_id='${txn_id}'`,
    [
      data.account_id ?? "",
      data.txn_id ?? "",
      data.equipment_id ?? "",
      data.equipment_sub_id ?? "",
      data.agent_name ?? "",
      data.equipment_sub_name ?? "",
      data.item_name.item_name ?? data.item_name,
      data.item_name.item_id ?? data.item_id,
      data.medical_store ?? "",
      data.price ?? "",
      data.units.units ?? data.units,
      data.units.unit_id ?? data.unit_id,
      // data.special_offer ?? "",
      data.partner_status ?? "",
      data.purchased_type ?? "",
    ]
  );

  let message = "Error in updating Equipment Registration Master";

  if (result.affectedRows) {
    message = "Equipment Details updated successfully";
  }
  return { message };
}
 async function getaccomodationdetails() {
  const rows = await db.query(
    `SELECT *  FROM mh_property_details_table`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  let index = 0;
  let partnerDetails = "";
  let roomdetails = "";
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      partnerDetails = await helper.getpartnerDetails(element.partner_id,element.partner_sub_id );
      roomdetails = await helper.getpartnerroomDetails(element.partner_id,element.partner_sub_id);
      // Gststate= await helper.getgststate();
      index = index + 1;
      data.push({
        s_no:index,
        partnerDetails: partnerDetails,
        roomdetails:roomdetails,
        // gststate:Gststate,
        ...element
      }); 
      
    }
  }
  return data ;
}
async function createRestaurantDetails(fields, docs, ipAddress) {
  // console.log("fgfgfgc",fields);
  // console.log("docs",docs);
  // console.log("ipAddress",ipAddress);
  let data = JSON.parse(fields.restaurant_details);

  // console.log("data",data);

  const result = await db.query(
    `INSERT IGNORE INTO mh_restaurant_details_table(txn_id,account_id, agent_id, agent_sub_id, food_partner_name, food_partner_sub_name, food_partner_phone, name_of_kitchen, type_of_kitchen, fssai_no,upload_fssai, special_offer,date_from,date_to, restaurant_description, restaurant_phone, restaurant_email, restaurant_latitude, restaurant_longitude, building_no, street, land_mark, country,state_id,state_name,city_id, city_name, pin_code, opening_time, closing_time, Name_Of_Contact_Person,partner_status, upload_image, upload_image1, upload_image2, ip_address)VALUES
    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  [
    data.txn_id ??"",
    data.account_id ?? "",
    data.agent_id ?? "",
    data.agent_sub_id ?? "",
    data.food_partner_name ?? "",
    data.food_partner_sub_name ?? "",
    data.food_partner_phone ?? "",
    data.name_of_kitchen ?? "",
    data.type_of_kitchen ?? "",
    data.fssai_no ?? "",
    docs.upload_fssai_name ??"",
    data.special_offer ?? "",
    data.date_from ?? "",
    data.date_to ?? "",
    data.restaurant_description ?? "",
    data.restaurant_phone ?? "",
    data.restaurant_email ?? "",
    data.restaurant_latitude ?? "",
    data.restaurant_longitude ?? "",
    data.building_no ?? "",
    data.street ?? "",
    data.land_mark ?? "",
    data.country ?? "",
    data.state.state_id ?? "",
    data.state.state_name ?? "",
    data.city.city_id ?? "",
    data.city.city ?? "",
    data.pin_code ?? "",
    data.opening_time ?? "",
    data.closing_time ?? "",
    data.Name_Of_Contact_Person ?? "",
    data.partner_status ?? "",
    docs.upload_image1_name ?? "",
    docs.upload_image2_name ?? "",
    docs.upload_image3_name ?? "",
    ipAddress
    ]
  );

  let message = "Error in Saving Restaurant Details";

  if (result.affectedRows) {
    message = "Restaurant Details Master created successfully";
  }
  
  return { message };
}
async function getRestaurantDetails(accountId, agentId, agentSubId) {
  // console.log("Mahendraaa");
  const rows = await db.query(
    `SELECT txn_id,account_id, agent_id, agent_sub_id, food_partner_name, food_partner_sub_name, food_partner_phone, name_of_kitchen, type_of_kitchen, fssai_no,upload_fssai, special_offer, date_from, date_to,restaurant_description, restaurant_phone, restaurant_email, restaurant_latitude, restaurant_longitude, building_no, street, land_mark, country, state_id, state_name, city_id, city_name, pin_code, opening_time, closing_time, Name_Of_Contact_Person, upload_image, upload_image1, upload_image2, ip_address FROM mh_restaurant_details_table WHERE account_id='${accountId}' AND agent_id='${agentId}' AND agent_sub_id='${agentSubId}'`
  );
  const result = helper.emptyOrRows(rows);
  let data = [];
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];

      index = index + 1;

      data.push({
        index: index,
        ...element,
      });
    }
  }
  return {
    data,
  };
};
async function updateRestaurantDetails(txnID, data) {
  const result = await db.query(
    `UPDATE mh_restaurant_details_table SET agent_id=?, agent_sub_id=?, food_partner_name=?, food_partner_sub_name=?, food_partner_phone=?, name_of_kitchen=?, type_of_kitchen=?, fssai_no=?, special_offer=?, date_from=?, date_to=?, restaurant_description=?, restaurant_phone=?, restaurant_email=?, restaurant_latitude=?, restaurant_longitude=?, building_no=?, street=?, land_mark=?, country=?,state_id=?,state_name=?,city_id=?, city_name=?, pin_code=?, opening_time=?, closing_time=?, Name_Of_Contact_Person=? WHERE txn_id='${txnID}'`,
    [
      
    data.agent_id ?? "",
    data.agent_sub_id ?? "",
    data.food_partner_name ?? "",
    data.food_partner_sub_name ?? "",
    data.food_partner_phone ?? "",
    data.name_of_kitchen ?? "",
    data.type_of_kitchen ?? "",
    data.fssai_no ?? "",
    data.special_offer ?? "",
    data.date_from ?? "",
    data.date_to ?? "",
    data.restaurant_description ?? "",
    data.restaurant_phone ?? "",
    data.restaurant_email ?? "",
    data.restaurant_latitude ?? "",
    data.restaurant_longitude ?? "",
    data.building_no ?? "",
    data.street ?? "",
    data.land_mark ?? "",
    data.country ?? "",
    data.state_id ?? "",
    data.state_name ?? "",
    data.city_id ?? "",
    data.city_name ?? "",
    data.pin_code ?? "",
    data.opening_time ?? "",
    data.closing_time ?? "",
    data.Name_Of_Contact_Person ?? "",
    
    ]
  );
  let message = "Error in updating Restaurant Data";

  if (result.affectedRows) {
    message = "Restaurant Data updated successfully";
  }

  return { message };
}
async function updateRoomdataSaving(fields,ipAddress) {
  let data = JSON.parse(fields.editedRoomItem);
  console.log("datasada123",data);
  // console.log("docs",docs,files);


  let amenity_arr = [];
  let amenity_iconArr = [];
  for (let i = 0; i < data.facilities.length; i++) {
    amenity_arr.push(data.facilities[i].amenity_name ?? data.facilities[i]);
    amenity_iconArr.push(data.facilities[i].icon_image);
  }
  let amenities = amenity_arr.toString();
  // console.log("1",amenities)
  let amenityIcon = amenity_iconArr.toString();
  // console.log("2",amenityIcon)
  // let roomNumber = data.room_numbers.toString();
  // console.log("3",roomNumber )
 
  const result = await db.query(
    `INSERT IGNORE INTO mh_room_operation(account_id,property_txn_id, partner_id, partner_name,partner_sub_id, sub_partner_name, property_name, sub_property_name, facilities, icon_image,other_amenities, room_type,max_allow_adult,max_allow_kids, gst_per,	withac_withbreakfast_price,withac_withoutbreakfast_price,	withoutac_withbreakfast_price,withoutac_withoutbreakfast_price,date_from,date_to,offer_nonac,offer_nonac_breakfast,offer_ac,offer_ac_breakfast,offer_date_from,offer_date_to,10days_offer,20days_offer,30days_offer,offerApplicableFromDate,offerApplicableToDate,maximum_capacity_adults,maximum_capacity_kids,rate_incress,no_of_avail_rooms,ip_address)VALUES
   (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
     

      data.account_id ?? "",
      data.property_txn_id ?? "",
      data.partner_id ?? "",
      data.partner_name ?? "",
      data.partner_sub_id ?? "",
      data.sub_partner_name ?? "",
      data.property_name?? "",
      data.sub_property_name ?? "",
      amenities ?? "",
      amenityIcon ?? "",


      data.other_amenities ?? "",
     
      data.room_type ?? "",
      // roomNumber ?? "",
      
     // data.units ?? "",
     data.max_allow_adult ?? "",
     data.max_allow_kids ?? "",
     data.gst_per ?? "",
     data.withac_withbreakfast_price ?? "",
     data.withac_withoutbreakfast_price ?? "",
    data.withoutac_withbreakfast_price ?? "",
      data.withoutac_withoutbreakfast_price ??"",
      data.date_from ?? "",
      data.date_to ?? "",
      data.noac_price_offer?? "",
      data.nonacwithbreackfast_price_offer?? "",
      data.ac_price_offer?? "",
      data.acwithbreackfast_price_offer?? "",
      data.date_from_offer?? "",
      data.date_to_offer?? "",
      data.tendays_price?? "",
      data.twentydays_price?? "",
      data.thirtydays_price?? "",
      data.offer_applicable_date_from?? "",
      data.offer_applicable_date_to?? "",
      data.maximum_capacity_adults?? "",
      data.maximum_capacity_kids?? "",
      data.rate_incress?? "",
      data.no_of_avail_rooms ?? "",
    
     // data.status ?? "",
      ipAddress
    ]
  );
  let message = "Error in Saving Room Details";

  if (result.affectedRows) {
    message = "Room Details created successfully";
  }
  return { message };
}
async function getupdateroomDetails(txn_id) {
  const rows = await db.query(
    `SELECT txn_id,account_id,property_txn_id, partner_id, partner_name,partner_sub_id, sub_partner_name, property_name, sub_property_name,room_category, facilities, icon_image,other_amenities, room_type,max_allow_adult,max_allow_kids, gst_per,	withac_withbreakfast_price,withac_withoutbreakfast_price,	withoutac_withbreakfast_price,withoutac_withoutbreakfast_price,date_format(date_from, '%d-%m-%Y') as date_from,date_format(date_to, '%d-%m-%Y') as date_to,offer_nonac,offer_nonac_breakfast,offer_ac,offer_ac_breakfast,date_format(offer_date_from,'%d-%m-%Y') as offer_date_from ,date_format(offer_date_to,'%d-%m-%Y') as offer_date_to,tendays_offer,twentydays_offer,thirtydays_offer,date_format(offerApplicableFromDate,'%d-%m-%Y') as offerApplicableFromDate ,date_format(offerApplicableToDate,'%d-%m-%Y') as offerApplicableToDate,maximum_capacity_adults,maximum_capacity_kids,rate_incress,no_of_avail_rooms FROM mh_room_operation WHERE property_txn_id='${txn_id}'`
  );
  const result = helper.emptyOrRows(rows);
  let data=[];
  
  var index = 0;
  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      index = index + 1;

    
      data.push({
        index: index,      
        ...element,
      });
    }
    console.log("getroomupdatadata",data);
  }
// console.log("getroomupdatadata",data);

  return {
    data,
  };
};
async function updatePropertyoperationroomDetails(txn_id, data) 
{
   let amenity_arr = [];
  let amenity_iconArr = [];
  for (let i = 0; i < data.facilities.length; i++) {
    amenity_arr.push(data.facilities[i].amenity_name);
    amenity_iconArr.push(data.facilities[i].icon_image);
  }
  let amenities = amenity_arr.toString();
  // console.log("1",amenities)
  let amenityIcon = amenity_iconArr.toString();

  console.log("updateroomoperations",data);
  const fromDate = moment(data.date_from, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
  const toDate = moment(data.date_to, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
  const offerfromDate = moment(data.offer_date_from, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
  const offertoDate = moment(data.offer_date_to, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
  const offerApplifromDate = moment(data.offerApplicableFromDate, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
  const offerApplitoDate = moment(data.offerApplicableToDate, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');



  const result = await db.query(
    `UPDATE mh_room_operation SET txn_id=?, account_id=?, partner_name=?, property_txn_id=?, partner_id=?,  partner_sub_id=?, sub_partner_name=?, property_name=?, sub_property_name=?,room_category=?, facilities=?, icon_image=?, other_amenities=?, room_type=?, max_allow_adult=?, max_allow_kids=?, gst_per=?, withac_withbreakfast_price=?, withac_withoutbreakfast_price=?, withoutac_withbreakfast_price=?, withoutac_withoutbreakfast_price=?, date_from=?, date_to=?, offer_nonac=?,offer_nonac_breakfast=?,offer_ac=?,offer_ac_breakfast=?,	offer_date_from=?,offer_date_to=?,tendays_offer=?,twentydays_offer=?,thirtydays_offer=?,offerApplicableFromDate =?,offerApplicableToDate=?,maximum_capacity_adults=?,maximum_capacity_kids=?,rate_incress=?,no_of_avail_rooms=? WHERE txn_id='${txn_id}'`,
    [
      data.txn_id ?? "",
      data.account_id ?? "",
      data.partner_name ?? "",
      data.property_txn_id ?? "",
      data.partner_id ?? "",
      
      data.partner_sub_id ?? "",
      data.sub_partner_name ?? "",
      data.property_name?? "",
      data.sub_property_name ?? "",
      data.room_category?? "",

      amenities?? "",
      amenityIcon ?? "",
      data.other_amenities ?? "",
      data.room_type ?? "",
      data.max_allow_adult ?? "",
      data.max_allow_kids ?? "",
      data.gst_per ?? "",
      data.withac_withbreakfast_price ?? "",
      data.withac_withoutbreakfast_price ?? "",
      data.withoutac_withbreakfast_price ?? "",

      data.withoutac_withoutbreakfast_price ?? "",
     
      fromDate ?? "",
      toDate ?? "",
      data.offer_nonac ?? "",
      data.offer_nonac_breakfast ?? "",
      data.offer_nonac?? "",
      data.offer_ac_breakfast ?? "",
      offerfromDate ?? "",
      offertoDate ?? "",
      data.tendays_offer ?? "",
      data.twentydays_offer  ?? "",
      data.thirtydays_offer  ?? "",

      // data.twentydays_price ?? "",
      // data.thirtydays_price ?? "",
      offerApplifromDate ?? "",
      offerApplitoDate ?? "",
      data.maximum_capacity_adults ?? "",
      data.maximum_capacity_kids ?? "",
      data.rate_incress ?? "",
      data.no_of_avail_rooms ?? "",

      
      
    ]
  );
  let message = "Error in updating Property Data";

  if (result.affectedRows) {
    message = "Property Data  updated successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  getSingleParentTypeDetail,
  create,
  update,
  remove,
  createPropretyReg,
  getMultiplePropertyDetails,
  getStatusCount,
  getPropertyDataOnStatus,
  getPropertyData,
  exsistingUserCreate,
  existingUserProperty,
  createRoomDetails,
  createPropertyDetails,
  getRoomsData,
  updatePropertyData,
  getpropertyReg,
  getPropertyDataForAdmin,
  approveAccPartnersData,
  approveAccPropertyData,
  rejectAccPartnersData,
  gethotelData,
  updateRoomsData,
  getHotelInfo,
  getHotelsNames,
  getDateAvailability,
  updateRoomStatus,
// saveRoomStatusData,
  saveRoomAvailData,
  getRoomsDataForAdmin,
  getAllRoomAvailCountDates,
  createTravelDetails,
  createAccFood,
  createAccMedical,
  getAccFoodDetails,
  accFoodUpdate,
  loadAccTravel,
  accTravelUpdating,
  getAccMedical,
  accUpdatingmedical,
  getaccomodationdetails,
  getfoodHotelInfo,
  gettravelHotelInfo,
  getmedicalHotelInfo,
  createRestaurantDetails,
  getRestaurantDetails,
  updateRestaurantDetails,
  approveAccRoomData,
  rejectAccRoomData,
  updateRoomdataSaving,
  getupdateroomDetails,
  updatePropertyoperationroomDetails,
};
