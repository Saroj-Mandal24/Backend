import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_DB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("MONGODB_URI is missing in your .env file.");
    }

    const connectionInstance = await mongoose.connect(
      `${mongoURI}/${DB_NAME}`
    );

    console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error:", error.message || error);
    process.exit(1);
  }
};

export default connect_DB;