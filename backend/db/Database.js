import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://techsunground:techsunground@cluster0.pjpjysl.mongodb.net/claiminsurance";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("db is conected");
  } catch (error) {
    console.log("db is not conected", error);
  }
};
