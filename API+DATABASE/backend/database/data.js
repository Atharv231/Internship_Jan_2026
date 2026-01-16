const { DataTypes } = require("@sequelize/core");
const sequelize = require("../utils/index").default;

const Task = sequelize.define(
  "Task",
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
  },
  {
    tableName: "tasks",
    timestamps: true, // createdAt & updatedAt
  }
);

module.exports = Task;
