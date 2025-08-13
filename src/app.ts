import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import router from "./routes/routes";
import db from "./config";
import log from "./logger";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieSession from "cookie-session";
import { isActivePolicyInquiry } from "./controllers/policyInquiry/isActive";
import cron from "node-cron";
dotenv.config();
const port = process.env.PORT as unknown as number;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cookieSession({
    name: "unbox-session",
    secret: process.env.COOKIE_SECRET, // should use as secret environment variable
    httpOnly: true,
  })
);
// main api route
app.use("/api", router);
app.use("/images", express.static("images"));

// handel errors
app.use(() => {
  throw createHttpError(404, "Route not found");
});

cron.schedule("0 0 * * *", isActivePolicyInquiry);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  log.info(err.message, err.statusCode);
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500).json({
    message: err.message || "An Unknown Error",
  });
};
app.use(errorHandler);

// Connect to database and server
db.authenticate()
  .then(() => {
    log.info("Connected to database");
    app.listen(port, () => {
      log.info(`Server running at Port ${port}`);
    });
  })
  .catch((err) => {
    log.error(err);
    throw createHttpError(501, "Unable to connect database");
  });
