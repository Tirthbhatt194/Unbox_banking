"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const routes_1 = __importDefault(require("./routes/routes"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./logger"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const isActive_1 = require("./controllers/policyInquiry/isActive");
const node_cron_1 = __importDefault(require("node-cron"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use((0, cookie_session_1.default)({
    name: "unbox-session",
    secret: process.env.COOKIE_SECRET,
    httpOnly: true,
}));
// main api route
app.use("/api", routes_1.default);
app.use("/images", express_1.default.static("images"));
// handel errors
app.use(() => {
    throw (0, http_errors_1.default)(404, "Route not found");
});
node_cron_1.default.schedule("0 0 * * *", isActive_1.isActivePolicyInquiry);
const errorHandler = (err, req, res, next) => {
    logger_1.default.info(err.message, err.statusCode);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.statusCode || 500).json({
        message: err.message || "An Unknown Error",
    });
};
app.use(errorHandler);
// Connect to database and server
config_1.default.authenticate()
    .then(() => {
    logger_1.default.info("Connected to database");
    app.listen(port, () => {
        logger_1.default.info(`Server running at Port ${port}`);
    });
})
    .catch((err) => {
    logger_1.default.error(err);
    throw (0, http_errors_1.default)(501, "Unable to connect database");
});
