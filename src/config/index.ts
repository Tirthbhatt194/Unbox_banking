import dotenv from "dotenv";
import { Dialect, Sequelize } from "sequelize";

dotenv.config();

//database connection config - fetch variable from env
const database = "defaultdb";
const username = "avnadmin";
const host = "29310e9a-redtirth.k.aivencloud.com";
const password = "AVNS_BJbN_ovubb-Evpaw5zT";
const dialect = "mysql";
const port = 10895;

const db = new Sequelize({
  database: database,
  username: username,
  host: host,
  password: password,
  dialect: dialect,
  port: port,
});

db.sync();

export default db;
