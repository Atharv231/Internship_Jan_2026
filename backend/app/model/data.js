const { DataTypes } = require("@sequelize/core");
const sequelize = require("../utils/db").default;

const Todo = sequelize.define(
  "Todo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "todos",
    timestamps: true, // createdAt & updatedAt
  }
);

module.exports = Todo;
