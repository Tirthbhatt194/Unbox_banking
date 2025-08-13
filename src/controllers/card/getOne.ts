import { RequestHandler } from "express";
import cardModel from "../../model/cardModel";

export const getOneCard: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const card = await cardModel.findOne({
    where: {
      id: id,
    },
  });

  let newCard = {
    ...card.dataValues,

    details: JSON.parse(card.dataValues.details),
  };

  // If data exists send data object with status
  if (!card) {
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
      data: newCard,
    });
  }
};
