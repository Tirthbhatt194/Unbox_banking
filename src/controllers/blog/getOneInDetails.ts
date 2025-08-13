import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import blogModel from "../../model/blogModel";

export const getOneBlogInDetail: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // find data at id and join respective foreign key tables to it
  const one = await blogModel.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: insuranceCategoryModel,
      },
      {
        model: insuranceSubCategoryModel,
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
      message: "Got One Data SuccessFully!",
      data: one,
    });
  }
};
