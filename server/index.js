import "dotenv/config";

import * as routers from "./src/routers/index.js";

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const username = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const port = process.env.PORT;

const databaseURI = `mongodb+srv://${username}:${password}@miao.r1oin.mongodb.net/${database}?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/account", routers.account);
app.use("/sample-diet", routers.sampleDiet);
app.use("/sample-food", routers.sampleFood);
app.use("/user", routers.user);
// app.use("/dailyRecord", routers.dailyRecord);

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
    app.listen(port, host, () => {
      console.log(`Server is running on ${host}:${port}`);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
