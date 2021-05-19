require("dotenv").config({ path: "../oneDirection.env" });
const { Connection, Request } = require("tedious");
const os=require('os');

const config = {
  authentication: {
    options: {
      userName: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
    },
    type: "default",
  },
  server: process.env.SQL_HOST,
  options: {
    database: process.env.SQL_DB,
    encrypt: true,
    keepAlive: true,
  }
};


const connection = new Connection(config);
connection.connect();

connection.on("connect", err => {
  if (err) {
    console.error("err: " + err.message);
  } else {
    console.log("Connected Successfully");
  }
});

exports.getUserData = (userID) => {
  return new Promise((resolve, reject) => {
    getUserReq(userID, function (error, results) {
      if (error) {
        reject(error);
      }
      let user=results[0];
      user.Ui_Properties = JSON.parse(user.Ui_Properties);

      if (user.Shares === "") {   //empty string means no folders
        user.Shares = [];
      }
      else {
        user.Shares = user.Shares.split(',');
      }

      user["LocalComputerName"]=os.hostname();  //get my ComputerName

      resolve(user);
    });
  });
}



function getUserReq(userID, callback) {
  let results = [];

  const request = new Request(
    `SELECT Users3.*, Rank.Rank, Computer_Site.Computer_Site, User_Type.User_Type, User_Profile.Profile_Name_HEB,User_Profile.System_List, Original_Domain.Original_Domain, requestsStatus.Biopass_Taken FROM [dbo].[Users3]
    INNER JOIN [dbo].[Rank] AS Rank ON Rank.Rank_ID=Users3.Rank_ID
    INNER JOIN [dbo].[Computer_Site] AS Computer_Site ON Computer_Site.Computer_Site_ID=Users3.Computer_Site_ID
    INNER JOIN [dbo].[User_Type] AS User_Type ON User_Type.User_Type_ID=Users3.User_Type_ID
    INNER JOIN [dbo].[User_Profile] AS User_Profile ON User_Profile.User_Profile_ID=Users3.User_Profile_ID
    INNER JOIN [dbo].[Original_Domain] AS Original_Domain ON Original_Domain.Original_Domain_ID=Users3.Original_Domain_ID
	  INNER JOIN [dbo].[requestsStatus] AS requestsStatus ON requestsStatus.Transfer_ID=Users3.Transfer_ID
    WHERE Users3.Transfer_ID='${userID}'
    FOR JSON PATH;`,
    function (error) {
      if (error) {
        console.error("err: " + error.message);
        return callback(error, null);
      }
      callback(null, results);
    }
  );

  request.on("row", rowObject => {
    results.push(JSON.parse(rowObject[0].value)[0]);
  });
  connection.execSql(request);
}

exports.updateUserData = (userID, changes) => {
  return new Promise((resolve, reject) => {
    updateUserReq(userID, changes, function (error, result) {
      if (error) {
        resolve({ severity: 'error', message: error.message });
      }
      resolve(result);
    });
  });
}


function updateUserReq(userID, changes, callback) {
  let changesString = "";


  if (changes["Ui_Properties"]) {
    changes["Ui_Properties"] = JSON.stringify(changes["Ui_Properties"]);
  }

  Object.keys(changes).forEach(function (key, i) {
    changesString = changesString + `${key}='${changes[key]}' ${Object.keys(changes).length === i + 1 ? "" : ","} `;

  });
  console.log('changesString', changesString)
  const request = new Request(
    `UPDATE [dbo].[Users3]
    SET ${changesString}
    WHERE Transfer_ID='${userID}';`,

    function (error) {
      if (error) {
        console.error("err: " + error.message);
        return callback(error, null);
      }
      callback(null, { severity: 'success', message: "!הפרטים עודכנו בהצלחה" });
    }
  );

  connection.execSql(request);
}

