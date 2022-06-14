import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: "accounts",
    required: true,
  },
  username: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Female", "Male"],
    default: "Male",
  },
  birthday: {
    type: Date,
    required: true,
    default: new Date(),
  },
  backgroundDiseases: {
    type: [String],
  },
  bodyCompositions: {
    type: [
      {
        recordDate: {
          type: Date,
          required: true,
          default: new Date(),
        },
        weight: {
          type: Number,
          required: true,
          default: 0,
        },
        height: {
          type: Number,
          required: true,
          default: 0,
        },
        percentBodyFat: {
          type: Number,
        },
        acitivity: {
          type: String,
          required: true,
          enum: ["Rarely", "Occasionally", "Sometimes", "Normally", "Always"],
          default: "Rarely",
        },
        BMI: {
          type: Number,
        },
        BMR: {
          type: Number,
        },
        TDEE: {
          type: Number,
        },
      },
    ],
  },
  goal: {
    type: {
      startDate: {
        type: Date,
        default: new Date(),
        required: true,
      },
      targetWeight: {
        type: Number,
      },
      targetHeight: {
        type: Number,
      },
      weightPerWeek: {
        type: Number,
      },
      targetEnergy: {
        type: Number,
      },
      targetCarbohydrate: {
        type: Number,
      },
      targetFat: {
        type: Number,
      },
      targetProtein: {
        type: Number,
      },
      dietId: {
        type: Schema.Types.ObjectId,
        ref: "sample_diets",
        required: true,
      },
    },
  },
  dailyRecordIds: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "dailyRecords",
      },
    ],
  },
});
export const AccountModel = mongoose.model("users", schema);
