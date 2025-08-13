import dotenv from "dotenv";
import { Dialect, Sequelize } from "sequelize";

dotenv.config();

//database connection config - fetch variable from env
const database = process.env.db as string;
const username = process.env.USER as string;
const host = process.env.HOST as string;
const password = process.env.PASSWORD as string;
const dialect = process.env.DIALECT as Dialect;
const port = process.env.DB_PORT as unknown as number;

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
