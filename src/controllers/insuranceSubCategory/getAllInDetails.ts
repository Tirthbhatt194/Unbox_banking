import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceCategoryTypeModel from "../../model/insuranceTypeModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";

export const GetAllSubCategoryInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  // find all data and join respective foreign key tables to it
  const proj = await insuranceSubCategoryModel.findAll({
    include: [
      {
        model: insuranceCategoryModel,
      },
      {
        model: insuranceCategoryTypeModel,
      },
    ],
  });
  const newSub = proj.map((i) => ({
    ...i.dataValues,
    features: JSON.parse(i.dataValues.features),
  }));
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
      message: "Got All Data SuccessFully!",
      data: newSub,
    });
  }
};
