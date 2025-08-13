import { RequestHandler } from "express";
import allInquiryModel from "../../model/allInquiriesModel";

export const getAllInquiriesByDate: RequestHandler = async (req, res) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const inquiries = await allInquiryModel.findAll();

  let datewiseInquiries = [];

  // console.log("Create", inquiries[0].dataValues.createdAt);

  let str = `${startDate}T00:00:00.000Z`;
  let st = new Date(str);

  let end2 = `${endDate}T23:59:59.000Z`;
  let en = new Date(end2);

  inquiries.forEach((i) => {
    let date1 = new Date(i.dataValues.createdAt);
    let date = date1.getDate();

    if (date1 > st && date1 < en) {
      const d = {
        id: i.dataValues.id,
        type: i.dataValues.type,
        data: JSON.parse(i.dataValues.data),
        userContactNumber: i.dataValues.userContactNumber,
        userEmail: i.dataValues.userEmail,
        userId: i.dataValues.userId,
        createdAt: i.dataValues.createdAt,
      };
      datewiseInquiries.push(d);
    }
  });
  console.log(datewiseInquiries);
  return res.status(200).send(datewiseInquiries);
};
