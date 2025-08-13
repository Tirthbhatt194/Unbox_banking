import { RequestHandler } from "express";
import applyForCardModel from "../../model/applyForCardModel";
import bankModel from "../../model/bankModel";
import cardModel from "../../model/cardModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";
export const getOneApplyForCardInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  let id = req.params.id;

  // find data at id and join respective foreign key tables to it
  const one = await applyForCardModel.findOne({
    where: {
      id: id,
    },
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

  // If data exists send data object with status
  if (!one) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "SuccessFully Got Data!",
      data: one,
    });
  }
};
