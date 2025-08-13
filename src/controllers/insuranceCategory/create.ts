import { upload1 } from "./../../middleware/multer";
import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";

export const createInsuranceCategory: RequestHandler = async (
  req,
  res,
  next
) => {
  let insuranceImage = "";

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    insuranceImage = req.file.filename;
  } else {
    insuranceImage = null;
  }

  // insert data to faq and send status with object
  const insuranceCategory = {
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
  const proj = await insuranceCategoryModel.create(insuranceCategory);

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
      message: "Insurance Category Created SuccessFully!",
      data: proj,
    });
  }
};

// use multer middleware to insert image to single column
export const insuranceImage = upload1.single("insuranceImage");
