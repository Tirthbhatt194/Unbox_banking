import { RequestHandler } from "express";
import cardModel from "../../model/cardModel";
import cardDetailsModel from "../../model/cardDetailsModel";

export const GetAllDetailsInfo: RequestHandler = async (req, res, next) => {
  // find all data and join respective foreign key tables to it
  const proj = await cardDetailsModel.findAll({
    include: [
      {
        model: cardModel,
      },
    ],
  });

  // If data exists send status with object
  if (!proj) {
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
      data: proj,
    });
  }
};
