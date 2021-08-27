import { Request, Response } from "express";

//importing class model
import Classes from "../model/classModel";
import Students from "../model/studentModel";

//async function to get all registered classes
export const studentDivision = async (req: Request, res: Response) => {
  console.log("get all classes", req.params.division_id);
  Classes.findOne({ division: req.params.division_id.toUpperCase() })
    .then((classes: any) => {
      console.log(typeof classes);
      console.log(classes);
      const classes_id = classes.id.toString();
      console.log("******", classes_id);
      Students.find({ class: classes_id }).then((data: any) => {
        res.status(200).send(data);
      });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const studentsInClass = async (req: Request, res: Response) => {
  console.log("get all classes", req.params);
  Classes.findOne({
    standard: req.params.standard_id,
    division: req.params.division_id,
  })
    .then((classes: any) => {
      console.log(typeof classes);
      console.log(classes);
      const classes_id = classes.id.toString();
      console.log("******", classes_id);
      Students.find({ class: classes_id }).then((data: any) => {
        res.status(200).send(data);
      });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};
