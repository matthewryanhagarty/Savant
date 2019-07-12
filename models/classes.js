module.exports = function(sequelize, DataTypes) {
    var Classes = sequelize.define("Classes", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50]
            }
        },
        desc: {
            type:  DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        liveLink: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        teacher: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categ: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 10]
            }
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        } 
    });
    return Classes;
};