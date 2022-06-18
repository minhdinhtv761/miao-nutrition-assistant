import {
  createDailyRecord,
  getAllDailyRecords,
  getOneDailyRecordByFilter,
  updateDailyRecord
} from "../controllers/dailyRecord.controller.js";

import express from "express";

const router = express.Router();

router.get("/user/:userId", getAllDailyRecords);
router.post("/user/:userId/filter", getOneDailyRecordByFilter);
router.post("/:dailyRecordId/user/:userId", createDailyRecord);
router.post("/user/:userId", createDailyRecord);
router.patch("/:dailyRecordId/user/:userId", updateDailyRecord);

export default router;
