const { DataTypes } = require("@sequelize/core");
const sequelize2 = require("../utils/index2").default;

const Users = sequelize2.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Users;
