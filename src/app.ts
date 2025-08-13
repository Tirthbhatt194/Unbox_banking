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

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "unbox-session",
    secret: "CookieSecretKey", // keep secret in env vars
    httpOnly: true,
  })
);

// Main API routes
app.use("/api", router);
app.use("/images", express.static("images"));

// 404 handler
app.use(() => {
  throw createHttpError(404, "Route not found");
});

// Cron job (will run once when function container is warm)
cron.schedule("0 0 * * *", isActivePolicyInquiry);

// Error handler
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

// Connect to database once when serverless function starts
(async () => {
  try {
    await db.authenticate();
    log.info("Connected to database");
  } catch (err) {
    log.error(err);
    throw createHttpError(501, "Unable to connect database");
  }
})();

// Export app for Vercel
export default app;
