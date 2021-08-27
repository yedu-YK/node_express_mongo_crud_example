import { Request, Response } from "express";

//! Read the list of classes of a teacher.

//importing  model
import Teachers from "../model/teacherModel";
import Classes from "../model/classModel";

//async function to get all registered teacher
export const classesTeacher = async (req: Request, res: Response) => {
  Teachers.findById(req.params.teacher_id)
    .then((teacher: any) => {
      if (!teacher) {
        //validating data
        res.status(400).send({ message: "cannot find user by this id" });
      }
      const class_id: string = teacher.class.toString();
      //finding classes by using ids
      Classes.findById(class_id, {
        standard: 1,
        division: 1,
      }).then((classes: any) => {
        res.status(200).send(classes);
      });
    })
    .catch((err: any) => {
      //error handling
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};
