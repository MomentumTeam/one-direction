var mysql = require("mysql");

var config = {
  host: "od-db.database.windows.net",
  user: "barak",
  password: "Aa123456789!",
  database: "OneDirection",

  //   port: 3306,
  //   ssl: true,
};

const conn = new mysql.createConnection(config);

conn.connect(function (err) {
  if (err) {
    console.log("!!! Cannot connect !!! Error:");
    console.log("err", err);
    throw err;
  } else {
    console.log("Connection established.");
    readData();
  }
});

function readData() {
  conn.query("SELECT * FROM Users", function (err, results, fields) {
    if (err) throw err;
    else console.log("Selected " + results.length + " row(s).");
    for (i = 0; i < results.length; i++) {
      console.log("Row: " + JSON.stringify(results[i]));
    }
    console.log("Done.");
  });
  conn.end(function (err) {
    if (err) throw err;
    else console.log("Closing connection.");
  });
}
