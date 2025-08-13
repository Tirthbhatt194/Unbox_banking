import { RequestHandler } from "express";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import { upload1 } from "../../middleware/multer";

export const createInsuranceSubCategory: RequestHandler = async (
  req,
  res,
  next
) => {
  let insuranceSubCategoryImage = "";

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    insuranceSubCategoryImage = req.file.filename;
  } else {
    insuranceSubCategoryImage = null;
  }

  // insert data to faq and send status with object
  const insuranceSubCategory = {
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

  const proj = await insuranceSubCategoryModel.create(insuranceSubCategory);

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
      message: "Insurance SubCategory Created SuccessFully!",
      data: proj,
    });
  }
};

// Use multer middleware to insert image to single column
export const insuranceSubCategoryImage = upload1.single(
  "insuranceSubCategoryImage"
);
