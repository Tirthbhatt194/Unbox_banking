import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import { RequestHandler } from "express";
import fs from "fs";

export const UpdateSubCategory: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await insuranceSubCategoryModel.findOne({
    where: {
      id: id,
    },
  });

  // If data dosent exist
  if (!upd)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data exist
  if (id === id) {
    let insuranceSubCategoryImage = "";

    // Image validation before update
    if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("insuranceSubCategoryImage") !== null
    ) {
      if (upd.getDataValue("insuranceSubCategoryImage") !== req.file.filename) {
        fs.unlinkSync(
          `./images/${upd.getDataValue("insuranceSubCategoryImage")}`
        );
        insuranceSubCategoryImage = req.file.filename;
      } else if (
        upd.getDataValue("insuranceSubCategoryImage") === req.file.filename
      ) {
        fs.unlinkSync(
          `./images/${upd.getDataValue("insuranceSubCategoryImage")}`
        );
        insuranceSubCategoryImage = req.file.filename;
      } else {
        insuranceSubCategoryImage = req.file.filename;
      }
    } else if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("insuranceSubCategoryImage") === null
    ) {
      insuranceSubCategoryImage = req.file.filename;
    } else {
      insuranceSubCategoryImage = upd.getDataValue("insuranceSubCategoryImage");
    }

    //update data and image at particular id and update - send status with data object
    const updateInsuranceSubCategory = {
      id: parseInt(id) as Number,
      insuranceSubCategoryName: req.body.insuranceSubCategoryName as string,
      insuranceSubCategoryDescription: req.body
        .insuranceSubCategoryDescription as string,
      insuranceSubCategoryDefinition: req.body
        .insuranceSubCategoryDefinition as string,
      what: req.body.what as string,
      why: req.body.why as string,
      how: req.body.how as string,
      visibility: req.body.visibility as Boolean,
      slug: req.body.slug as string,
      formTitle: req.body.formTitle as string,
      eligibilityCriteria: req.body.eligibilityCriteria as String,
      features: req.body.features as JSON,
      insuranceSubCategoryImage: insuranceSubCategoryImage as string,
      insuranceCategoryId: req.body.insuranceCategoryId as Number,
      insuranceCategoryTypeId: req.body.insuranceCategoryTypeId as Number,
    };

    const upda = await insuranceSubCategoryModel.update(
      updateInsuranceSubCategory,
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateInsuranceSubCategory,
    });
    return upda;
  }
};
