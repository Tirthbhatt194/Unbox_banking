import { RequestHandler } from "express";
import loanInquiryModel from "../../model/loanInquiryModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import loanModel from "../../model/loan";
import bankModel from "../../model/bankModel";

export const getAllLoanInquiryInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  // find all data and join respective foreign key tables to it
  const proj = await loanInquiryModel.findAll({
    include: [
      {
        model: bankModel,
      },
      {
        model: unboxPeopleModel,
      },
      {
        model: loanModel,
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
