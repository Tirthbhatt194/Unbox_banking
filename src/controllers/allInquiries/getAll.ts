import { RequestHandler } from "express";

import allInquiryModel from "../../model/allInquiriesModel";

export const getAllTheInquiry: RequestHandler = async (req, res) => {
  const inquiry = await allInquiryModel.findAll();
  if (!inquiry) {
    return res.status(404).send("NO DATA FOUND!");
  }
  const newInq = inquiry.map((i) => ({
    id: i.dataValues.id,
    type: i.dataValues.type,
    data: JSON.parse(i.dataValues.data),
    userContactNumber: i.dataValues.userContactNumber,
    userEmail: i.dataValues.userEmail,
    userId: i.dataValues.userId,
    createdAt: i.dataValues.createdAt,
  }));
  return res.status(200).send(newInq);
};
