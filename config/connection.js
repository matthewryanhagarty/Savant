// var mysql = require("mysql");
var Sequelize = require("sequelize");

var sequelize = new Sequelize("savant_db", "root", "password", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;



// var connection;
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "password",
//         database: "savant_db"
//     });
// }

// connection.connect(function(err) {
//     if (err) {
//         console.log("error connect: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;