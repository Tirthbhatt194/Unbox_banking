import { RequestHandler } from "express";
import { upload1 } from "../../middleware/multer";
import insuranceProviderModel from "../../model/insuranceProviderModel";

export const createInsuranceProvider: RequestHandler = async (
  req,
  res,
  next
) => {
  let providerImage = "";

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    providerImage = req.file.filename;
  } else {
    providerImage = null;
  }

  // insert data to faq and send status with object
  const insuranceProvider = {
    providerName: req.body.providerName as string,
    visibility: req.body.visibility as boolean,
    providerImage: providerImage as string,
  };

  const proj = await insuranceProviderModel.create(insuranceProvider);

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
      message: "Insurance Provider Created SuccessFully!",
      data: proj,
    });
  }
};

// use multer middleware to insert image to single column
export const providerImage = upload1.single("providerImage");
