var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var User = sequelize.define("User", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [5, 255]
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "This is not a valid e-mail."
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [6, 20]
                //encryption package or firebase?
            }
        },
        classes: {
            type: Sequelize.STRING,
            allowNull: true
        },
        contact: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [5, 255]
            }
        },
        avatar: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }
    });

User.sync();

module.exports = User;
