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
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        liveLink: {
            type: DataTypes.STRING,
            allowNull: false
        },
        teacher: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categ: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        } 
    });
    Classes.associate = function(models) {
        Classes.belongsTo(models.User, {
        });
    };

    return Classes;
};