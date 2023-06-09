import Sequelize from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "127.0.0.1",
    dialect: "mysql",
    port: "3306",
  }
);

export default sequelize;
