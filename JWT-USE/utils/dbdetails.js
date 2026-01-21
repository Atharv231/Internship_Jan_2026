const { Sequelize } = require("@sequelize/core");
const { PostgresDialect } = require("@sequelize/postgres");

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: "Admin-Panel",
  user: "postgres",
  password: "12345",
  host: "localhost",
  port: 5432,
  clientMinMessages: "notice",
});

module.exports = sequelize; // ✅ Sequelize INSTANCE

// const { Sequelize } = require("@sequelize/core");
// const { PostgresDialect } = require("@sequelize/postgres");

// const sequelize = new Sequelize({
//   dialect: PostgresDialect,
//   url: process.env.DATABASE_URL,
//   logging: false,
// });

// module.exports = sequelize;

// // export default sequelize2;
