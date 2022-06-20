import {
  RemoveDailyRecord,
  createDailyRecord,
  getAllDailyRecords,
  getOneDailyRecordByFilter,
} from "../controllers/dailyRecord.controller.js";

import express from "express";

const router = express.Router();

router.get("/user/:userId", getAllDailyRecords);
router.post("/user/:userId/filter", getOneDailyRecordByFilter);
router.post("/user/:userId", createDailyRecord);
router.delete("/:dailyRecordId/user/:userId", RemoveDailyRecord);

export default router;
