import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function server() {
  try {
    await mongoose.connect(config.dbUrl as string);
      console.log("Connected to Database");
      app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
      });
  } catch (error) {
    console.log(error);
  }
}
server();
