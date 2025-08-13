import { RequestHandler } from "express";
import unboxWorksModel from "../../model/unboxWorksModel";

export const getAllUnboxWorks: RequestHandler = async (req, res, next) => {
  // Find all data
  const unboxWorks = await unboxWorksModel.findAll({});

  // If data exists send status with object
  if (!unboxWorks) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got All Data SuccessFully!",
      data: unboxWorks,
    });
  }
};
