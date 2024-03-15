import mongoose from "mongoose";

export const CoonnectDB = async () => {
  await mongoose.connect();
};
