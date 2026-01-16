import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: "timepass",
  user: "postgres",
  password: "12345",
  host: "localhost",
  port: 5432,
  clientMinMessages: "notice",
});

export default sequelize;
