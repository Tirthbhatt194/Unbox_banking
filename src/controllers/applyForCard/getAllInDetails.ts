import { RequestHandler } from "express";
import applyForCardModel from "../../model/applyForCardModel";
import bankModel from "../../model/bankModel";
import cardModel from "../../model/cardModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";
export const getAllApplyForCardInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  // find all data and join respective foreign key tables to it
  const proj = await applyForCardModel.findAll({
    include: [
      {
        model: unboxPeopleModel,
      },
      {
        model: cardModel,
      },
      {
        model: bankModel,
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
      message: "SuccessFully Got All Data!",
      data: proj,
    });
  }
};
