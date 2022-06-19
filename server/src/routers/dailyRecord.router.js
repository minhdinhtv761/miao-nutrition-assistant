import express from "express";
import {
  createDailyRecord,
  getAllDailyRecords,
  getOneDailyRecordByFilter,
} from "../controllers/dailyRecord.controller.js";

const router = express.Router();

router.get("/user/:userId", getAllDailyRecords);
router.post("/user/:userId/filter", getOneDailyRecordByFilter);
router.post("/user/:userId", createDailyRecord);

export default router;
