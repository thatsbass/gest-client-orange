import mongoose from "mongoose";
import { ENV, MESSAGE } from "../helpers/constant";

export const connectDB = async () => {
  const mongoUri = ENV.MONGO_URI;
  try {
    await mongoose.connect(mongoUri);
    console.log(MESSAGE.DB_CONNECTED);
  } catch (error) {
    console.error(MESSAGE.DB_ERROR, error);
    process.exit(1);
  }
};
