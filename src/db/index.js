import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "\nMongoDB connection established !! DB Host : " +
        `${connectionInstance.connection.host}`
    );
  } catch (e) {
    console.log("MongoDB connection FAILED", e);
    throw new Error(e);
  }
};

export default connectDB;
