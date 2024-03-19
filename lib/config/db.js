import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGODBURI);
  console.log("Db connected!");
};
