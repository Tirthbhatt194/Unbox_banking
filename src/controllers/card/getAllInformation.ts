import { RequestHandler } from "express";
import cardModel from "../../model/cardModel";
import bankModel from "../../model/bankModel";

export const GetAllCardDetails: RequestHandler = async (req, res, next) => {
  // find all data and join respective foreign key tables to it
  const proj = await cardModel.findAll({
    include: [
      {
        model: bankModel,
      },
    ],
  });
  let newCard = proj.map((c) => {
    return {
      ...c.dataValues,
      details: c.dataValues.details,
    };
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
      data: newCard,
    });
  }
};
