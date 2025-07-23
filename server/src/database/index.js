import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGODB_URI } from "../utils/constant.js";
dotenv.config();

const URL =
  MONGODB_URI || "mongodb://localhost:27017/twitter-clone";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbConnection = mongoose
  .connect(URL, options)
  .then((result) => console.log("Database connection is success."))
  .catch((err) => console.log(err));

export default dbConnection;
