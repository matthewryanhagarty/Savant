var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }


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
        teacher: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        categ: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [2, 10]
            }
        },
        uuid: {
            type: Sequelize.UUID,
            allowNull: false
        } 
    });

Classes.sync();

module.exports = Classes;