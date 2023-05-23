import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true, // Automatically increments the value on create
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync({ force: true }) // This will create the table if it doesn't exist (and drop any existing table of the same name)
  .then(() => {
    console.log("Table created successfully.");
  })
  .catch((err) => {
    console.error("Unable to create table:", err);
  });

export default User;
