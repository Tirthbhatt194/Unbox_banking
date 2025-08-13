import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
export const GetAllSubCategory: RequestHandler = async (req, res, next) => {
  // Find all data
  const proj = await insuranceSubCategoryModel.findAll({});
  let ids = [];
  proj.forEach((p) => {
    ids.push(p.dataValues.insuranceCategoryId);
  });
  let idss = [];

  for (let i = 0; i < ids.length; i++) {
    const pr = insuranceCategoryModel.findOne({
      where: {
        id: ids[i],
      },
    });
    idss.push((await pr).dataValues.insuranceName);
  }

  for (let j = 0; j < proj.length; j++) {
    proj[j].dataValues.insuranceCategoryName = idss[j];
  }

  const newSub = proj.map((i) => ({
    ...i.dataValues,
    features: JSON.parse(i.dataValues.features),
  }));

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
  // If data exists send status with object
};
