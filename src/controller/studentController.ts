import { Request, Response } from "express";

//importing student model
import Student from "../model/studentModel";

//async function to get all registered students
export const getAllStudents = async (req: Request, res: Response) => {
  console.log("get all students");
  Student.find({})
    .then((students: any) => {
      res.status(200).send(students);
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

//async function to get a registered students
export const getAStudent = async (req: Request, res: Response) => {
  Student.findById(req.params.id)
    .then((student: any) => {
      if (!student) {
        //validating data
        res.status(400).send({ message: "cannot find user by this id" });
      }
      res.status(200).send(student);
    })
    .catch((err: any) => {
      //error handling
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const createStudent = async (req: Request, res: Response) => {
  console.log("create student called", req.body);
  Student.create(req.body)
    .then(() => {
      res.status(200).send({ message: "success" });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const deleteStudent = async (req: Request, res: Response) => {
  console.log("delete student called", req.body);
  Student.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ message: "student details deleted" });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const updateStudent = async (req: Request, res: Response) => {
  if (!req.body) {
    //validating data
    return res.status(400).send({ message: "cannot be empty" });
  }
  //find Student by id and updateing
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((student: any) => {
      if (!student) {
        return res.status(400).send({ message: "id doesnot exist" });
      }
      res.status(200).send({ message: "updated" });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};
