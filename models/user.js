var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

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
        uuid: {
            type: Sequelize.UUID,
            allowNull: false
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
