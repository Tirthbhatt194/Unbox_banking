import insuranceTypeModel from "../../model/insuranceTypeModel";
import { RequestHandler } from "express";
import fs from "fs";

export const UpdateInsuranceType: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await insuranceTypeModel.findOne({
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
    let insuranceCategoryTypeImage = "";

    // Image validation before update
    if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("insuranceCategoryTypeImage") !== null
    ) {
      if (
        upd.getDataValue("insuranceCategoryTypeImage") !== req.file.filename
      ) {
        fs.unlinkSync(
          `./images/${upd.getDataValue("insuranceCategoryTypeImage")}`
        );
        insuranceCategoryTypeImage = req.file.filename;
      } else if (
        upd.getDataValue("insuranceCategoryTypeImage") === req.file.filename
      ) {
        fs.unlinkSync(
          `./images/${upd.getDataValue("insuranceCategoryTypeImage")}`
        );
        insuranceCategoryTypeImage = req.file.filename;
      } else {
        insuranceCategoryTypeImage = req.file.filename;
      }
    } else if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("insuranceCategoryTypeImage") === null
    ) {
      insuranceCategoryTypeImage = req.file.filename;
    } else {
      insuranceCategoryTypeImage = upd.getDataValue(
        "insuranceCategoryTypeImage"
      );
    }

    //update data and image at particular id and update - send status with data object
    const updateInsuranceType = {
      id: parseInt(id) as Number,
      insuranceCategoryTypeName: req.body.insuranceCategoryTypeName as string,
      insuranceCategoryTypeDescription: req.body
        .insuranceCategoryTypeDescription as string,
      insuranceCategoryTypeDefinition: req.body
        .insuranceCategoryTypeDefinition as string,
      what: req.body.what as string,
      why: req.body.why as string,
      how: req.body.how as string,
      formTitle: req.body.formTitle as string,
      path: req.body.path as string,
      visibility: req.body.visibility as Boolean,
      insuranceCategoryTypeImage: insuranceCategoryTypeImage as string,
    };

    const upda = await insuranceTypeModel.update(updateInsuranceType, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateInsuranceType,
    });
    return upda;
  }
};
