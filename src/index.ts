//entry point for app
import dotenv from "dotenv";
import express from "express";
import path from "path";
import bodyparser from "body-parser";

//importing routes
import routes from "./routes";

//connecting to db
const dbConnection = require("./model");

//initializing
dotenv.config();
const app = express();

//initializing port
const port = process.env.SERVER_PORT;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`running at port ${port}`);
});
