import { RequestHandler } from "express";
import applyForCardModel from "../../model/applyForCardModel";

export const getAllApplyForCard: RequestHandler = async (req, res, next) => {
  // Find all data
  const applyForCardDetail = await applyForCardModel.findAll({});

  // If data exists send status with object
  if (!applyForCardDetail) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "SuccessFully Got All Data!",
      data: applyForCardDetail,
    });
  }
};
