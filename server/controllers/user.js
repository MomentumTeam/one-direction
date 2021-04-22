const user1={
  Transfer_ID: 111111,
  Transfer_Date: "2000-07-05T00:00:00.0000000",
  New_User: "True",
  First_Name_HEB: "ברק",
  Last_Name_HEB: "שניצל",
  First_Name_ENG: "Barak",
  Last_Name_ENG: "Steindl",
  Display_Name: "מאבטח",
  Original_Domain_ID: 1,
  User_Type_ID: 1,
  Hierarchy: "מזאה/פינת/מאפו",
  User_Profile_ID: 0,
  Blue_ID: "Barak@gmail.com",
  UPN: "Barak@upn.kom",
  Mail: "Barak.WhatAnIdiotIm@India.com",
  Private_Number: 0,
  ID_Number: 1212121212,
  Phone_Number: -4444389,
  Rank_ID: 21,
  BIOPASS: "True",
  Computer_Name: "Viktorija",
  Computer_MAC: "EinGediWater",
  Computer_Site_ID: 2,
  Commander_Name: "Bet-El-Field",
  Commander_Mail: "BetEl@Field.com"
};


exports.getUser = (req, res, next) => {
  console.log('getUser server')
  try {
    if (req.isAuthenticated()) {
      return res.status(200).json(user1);
    } else {
      return res.redirect("/api/login?RelayState=" + encodeURIComponent(req.originalUrl.replace("&", "%26")));
    }
  } catch (e) {
    return res.status(500).send(e);
  }
};

exports.updateUser = (req, res, next) => {
  console.log('updateUser server')
  try {
    if (req.isAuthenticated()) {
      console.log('user '+req.body.First_Name_HEB+' updated succesfully')
      return res.status(200);
    } 
    else {
      return res.redirect("/api/login?RelayState=" + encodeURIComponent(req.originalUrl.replace("&", "%26")));
    }
  } catch (e) {
    return res.status(500).send(e);
  }


};
