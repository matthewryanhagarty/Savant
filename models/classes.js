var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Classes = sequelize.define("Classes", {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [2, 50]
            }
        },
        desc: {
            type:  Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        liveLink: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        categ: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [2, 10]
            }
        }
    });

Classes.sync();

module.exports = Classes;