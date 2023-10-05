import express from "express";
import healthCheckController from "../../controllers/healthCheckController";

const Healthcheck = express.Router();

Healthcheck.get("/", healthCheckController.get);

export default Healthcheck;
