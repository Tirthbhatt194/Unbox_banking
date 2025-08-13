import { RequestHandler } from "express";
import loanInquiryModel from "../../model/loanInquiryModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import bankModel from "../../model/bankModel";
import loanModel from "../../model/loan";
import loanTypeModel from "../../model/loanTypeModel";

export const getOneLoanInquiryInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  let id = req.params.id;

  // find data at id and join respective foreign key tables to it
  const one = await loanInquiryModel.findOne({
    where: {
      id: id,
    },
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
      {
        model: loanTypeModel,
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
