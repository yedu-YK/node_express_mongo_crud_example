import { Request, Response } from "express";

//importing teachers model
import Teachers from "../model/teacherModel";

//async function to get all registered teacher
export const getAllTeachers = async (req: Request, res: Response) => {
  console.log("get all teachers");
  Teachers.find({})
    .then((teacher: any) => {
      res.status(200).send(teacher);
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

//async function to get a registered teacher
export const getATeacher = async (req: Request, res: Response) => {
  Teachers.findById(req.params.id)
    .then((teacher: any) => {
      if (!teacher) {
        //validating data
        res.status(400).send({ message: "cannot find user by this id" });
      }
      res.status(200).send(teacher);
    })
    .catch((err: any) => {
      //error handling
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const createTeacher = async (req: Request, res: Response) => {
  console.log("create teacher called", req.body);
  Teachers.create(req.body)
    .then(() => {
      res.status(200).send({ message: "success" });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const deleteTeacher = async (req: Request, res: Response) => {
  console.log("delete teacher called", req.body);
  Teachers.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ message: "teacher details deleted" });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const updateTeacher = async (req: Request, res: Response) => {
  if (!req.body) {
    //validating data
    return res.status(400).send({ message: "cannot be empty" });
  }
  //find teacher by id and updateing
  Teachers.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((teacher: any) => {
      if (!teacher) {
        return res.status(400).send({ message: "id does not exist" });
      }
      res.status(200).send({ message: "updated" });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};
