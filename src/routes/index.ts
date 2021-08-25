import express from "express";

const app = express();

//importing routes
import studentRoutes from "./studentRoutes";
import teacherRoutes from "./teacherRoutes";
import classRoutes from "./classRoutes";

app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);
app.use("/class", classRoutes);

export default app;
