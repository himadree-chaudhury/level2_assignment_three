import mongoose from "mongoose";
import config from "./config";
import app from "./app";

// *Server function to connect to the database and start the server
async function server() {
  try {
    await mongoose.connect(config.dbUrl as string);
      app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
      });
  } catch (error) {
    console.log(error);
  }
}

server();
