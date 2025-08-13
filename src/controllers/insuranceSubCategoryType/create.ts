import { upload1 } from "./../../middleware/multer";
import { RequestHandler } from "express";
import insuranceTypeModel from "../../model/insuranceTypeModel";

export const createInsuranceType: RequestHandler = async (req, res, next) => {
  let insuranceCategoryTypeImage = "";

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    insuranceCategoryTypeImage = req.file.filename;
  } else {
    insuranceCategoryTypeImage = null;
  }

  // insert data to faq and send status with object
  const insuranceType = {
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

  const proj = await insuranceTypeModel.create(insuranceType);

  // If insert success send data object with status
  if (!proj) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed To Insert Data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Insurance SubCategory Type Created SuccessFully!",
      data: proj,
    });
  }
};

// use multer middleware to insert image to single column
export const insuranceCategoryTypeImage = upload1.single(
  "insuranceCategoryTypeImage"
);
