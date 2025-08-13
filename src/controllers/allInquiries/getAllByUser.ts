import { RequestHandler } from "express";
import allInquiryModel from "../../model/allInquiriesModel";

export const getAllInquiryByUser: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const card = await allInquiryModel.findAll({
    where: {
      userId: id,
    },
  });

  const newInq = card.map(c => ({
    id: c.dataValues.id,
    type: c.dataValues.type,
    data: JSON.parse(c.dataValues.data),
    userContactNumber: c.dataValues.userContactNumber,
    userEmail: c.dataValues.userEmail,
    userId: c.dataValues.userId,
    createdAt: c.dataValues.createdAt,
  }));

  // If dacardta exists send data object with status
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
};
