module.exports = (sequelize, DataTypes) => {
  const tempUsers = sequelize.define('tempUsers', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
    },
    activationToken: {
      type: DataTypes.STRING,
      required: true,
    },
    activated: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    resetToken: {
      type: DataTypes.STRING,
      default: null,
    },
    resetExpire: {
      type: DataTypes.DATE,
      default: null,
    },
  });

  // eslint-disable-next-line no-unused-vars
  tempUsers.associate = function (models) {};
  return tempUsers;
};
