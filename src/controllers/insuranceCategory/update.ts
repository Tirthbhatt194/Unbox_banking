import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import fs from "fs";

export const UpdateCategory: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await insuranceCategoryModel.findOne({
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
    let insuranceImage = "";

    // Image validation before update
    if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("insuranceImage") !== null
    ) {
      if (upd.getDataValue("insuranceImage") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("insuranceImage")}`);
        insuranceImage = req.file.filename;
      } else if (upd.getDataValue("insuranceImage") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("insuranceImage")}`);
        insuranceImage = req.file.filename;
      } else {
        insuranceImage = req.file.filename;
      }
    } else if (
      upd.getDataValue("insuranceImage") === null &&
      req.hasOwnProperty("file")
    ) {
      insuranceImage = req.file.filename;
    } else {
      insuranceImage = upd.getDataValue("insuranceImage");
    }

    //update data and image at particular id and update - send status with data object
    const updateInsuranceCategory = {
      id: parseInt(id) as Number,
      insuranceName: req.body.insuranceName as string,
      insuranceDescription: req.body.insuranceDescription as string,
      insuranceDefinition: req.body.insuranceDefinition as string,
      what: req.body.what as string,
      why: req.body.why as string,
      how: req.body.how as string,
      eligibilityCriteria: req.body.eligibilityCriteria as String,
      visibility: req.body.visibility as Boolean,
      insuranceImage: insuranceImage as string,
      slug: req.body.slug as String,
    };

    const upda = await insuranceCategoryModel.update(updateInsuranceCategory, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateInsuranceCategory,
    });
    return upda;
  }
};
