import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectToDB = async () => {
  // to prevent unnesary logs
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "promptxplorer",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
}