import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import blogModel from "../../model/blogModel";

export const getAllBlogInDetail: RequestHandler = async (req, res, next) => {
  // find all data and join respective foreign key tables to it
  const blog = await blogModel.findAll({
    include: [
      {
        model: insuranceCategoryModel,
      },
      {
        model: insuranceSubCategoryModel,
      },
    ],
  });

  // If data exists send status with object
  if (!blog) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got All Data SuccessFully!",
      data: blog,
    });
  }
};
