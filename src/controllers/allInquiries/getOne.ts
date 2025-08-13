import { RequestHandler } from "express";
import allInquiryModel from "../../model/allInquiriesModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";

export const getOneFromAllInquiry: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const card = await allInquiryModel.findOne({
    where: {
      id: id,
    },
  });

  const userImage = await unboxPeopleModel.findOne({
    where: {
      email: card.dataValues.userEmail,
    },
  });

  console.log("CARDOBJ ===> ", card.dataValues.userEmail);
  if (userImage) {
    const newInq = {
      id: card.dataValues.id,
      type: card.dataValues.type,
      data: JSON.parse(card.dataValues.data),
      userContactNumber: card.dataValues.userContactNumber,
      userEmail: card.dataValues.userEmail,
      userId: card.dataValues.userId,
      userImage: userImage.dataValues.unboxPeopleImage,
      createdAt: card.dataValues.createdAt,
    };
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
        data: newInq,
      });
    }
  } else {
    const newInq = {
      id: card.dataValues.id,
      type: card.dataValues.type,
      data: JSON.parse(card.dataValues.data),
      userContactNumber: card.dataValues.userContactNumber,
      userEmail: card.dataValues.userEmail,
      userId: card.dataValues.userId,
      createdAt: card.dataValues.createdAt,
    };
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
        data: newInq,
      });
    }
  }
  // If data exists send data object with status
};
