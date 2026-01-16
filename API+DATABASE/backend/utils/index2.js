import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";

const sequelize2 = new Sequelize({
  dialect: PostgresDialect,
  database: "Admin-Panel",
  user: "postgres",
  password: "12345",
  host: "localhost",
  port: 5432,
  clientMinMessages: "notice",
});

export default sequelize2;
