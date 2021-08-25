//entry point for app
import dotenv from "dotenv";
import express from "express";

//importing routes
import routes from "./routes";

//initializing
dotenv.config();
const app = express();

//initializing port
const port = process.env.SERVER_PORT;

app.use("/api",routes)

app.listen(port, () => {
  console.log(`running at port ${port}`);
});
