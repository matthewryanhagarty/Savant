module.exports= function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 255]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "This is not a valid e-mail."
                }
            }
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        classes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 255]
            }
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }
    });
    User.associate = function(models) {
        User.associate = function(models) {
            User.hasMany(models.Classes, {
            });
        };
    };

    return User;
}