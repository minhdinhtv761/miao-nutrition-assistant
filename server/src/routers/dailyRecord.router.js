import express from "express";
import {
  createDailyRecord,
  getAllDailyRecords,
  getOneDailyRecordByFilter,
  RemoveDailyRecord,
} from "../controllers/dailyRecord.controller.js";

const router = express.Router();

router.get("/user/:userId", getAllDailyRecords);
router.post("/user/:userId/filter", getOneDailyRecordByFilter);
router.post("/user/:userId", createDailyRecord);
router.delete("/:dailyRecordId/user/:userId", RemoveDailyRecord);

export default router;
