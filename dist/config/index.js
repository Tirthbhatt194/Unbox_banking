"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
//database connection config - fetch variable from env
const database = process.env.db;
const username = process.env.USER;
const host = process.env.HOST;
const password = process.env.PASSWORD;
const dialect = process.env.DIALECT;
const port = process.env.DB_PORT;
const db = new sequelize_1.Sequelize({
    database: database,
    username: username,
    host: host,
    password: password,
    dialect: dialect,
    port: port,
});
db.sync();
exports.default = db;
