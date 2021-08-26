import { Request, Response } from "express";

//importing class model
import {Classes} from "../model";

//async function to get all registered classes
export const getAllClasses = async (req: Request, res: Response) => {
  console.log("get all classes");
  Classes.find({})
    .then((classes: any) => {
      res.status(200).send(classes);
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

//async function to get a registered classes
export const getAClasses = async (req: Request, res: Response) => {
  Classes.findById(req.params.id)
    .then((data: any) => {
      if (!data) {
        //validating data
        res.status(400).send({ message: "cannot find user by this id" });
      }
      res.status(200).send(data);
    })
    .catch((err: any) => {
      //error handling
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const createClass = async (req: Request, res: Response) => {
  console.log("create class called", req.body);
  Classes.create(req.body)
    .then(() => {
      res.status(200).send({ message: "success" });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const deleteClasses = async (req: Request, res: Response) => {
  console.log("delete class called", req.body);
  Classes.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ message: "class details deleted" });
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};

export const updateClasses = async (req: Request, res: Response) => {
  if (!req.body) {
    //validating data
    return res.status(400).send({ message: "cannot be empty" });
  }
  //find classes by id and updateing
  Classes.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data: any) => {
      if (!data) {
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
