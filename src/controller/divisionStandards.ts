import { Request, Response } from "express";

//importing class model
import Classes from "../model/classModel";


//async function to get all registered classes
export const divisionStandard = async (req: Request, res: Response) => {
  console.log("get all classes");
  Classes.find({standard:req.params.id},{division:1})
    .then((classes: any) => {
      res.status(200).send(classes);
    })
    .catch((err: any) => {
      res
        .status(400)
        .send({ message: err.message || "an error occurred to database" });
    });
};