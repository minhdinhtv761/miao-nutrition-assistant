import { createDailyRecord } from "../controllers/dailyRecord.controller.js";
import express from "express";

const router = express.Router();
  
  router.patch("/:id/:date", createDailyRecord);
  
  export default router;
  