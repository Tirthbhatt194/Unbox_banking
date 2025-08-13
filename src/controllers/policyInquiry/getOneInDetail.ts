import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import policyModel from "../../model/policiesModel";
import insuranceCategoryTypeModel from "../../model/insuranceTypeModel";
import policyInquiryModel from "../../model/policyInquiryModel";

export const getOnePolicyInquiryInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  let id = req.params.id;

  // find data at id and join respective foreign key tables to it
  const one = await policyInquiryModel.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: unboxPeopleModel,
      },
      {
        model: insuranceCategoryModel,
      },
      {
        model: insuranceSubCategoryModel,
      },
      {
        model: policyModel,
      },
      {
        model: insuranceCategoryTypeModel,
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
