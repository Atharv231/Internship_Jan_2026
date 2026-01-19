const { DataTypes } = require("@sequelize/core");
const sequelize2 = require("../utils/index2");

const Users = sequelize2.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = Users;
