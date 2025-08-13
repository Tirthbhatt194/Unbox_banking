import { RequestHandler } from "express";
import { upload1 } from "../../middleware/multer";
import bankModel from "../../model/bankModel";

export const createBank: RequestHandler = async (req, res, next) => {

  let bankImage;
  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    bankImage = req.file.filename;
  } else {
    bankImage = null;
  }


  // insert data to Bank and send status with object
  const bank = {
    name: req.body.name as string,
    description: req.body.description as string,
    bankImage: bankImage as string,
    visibility: req.body.visibility as Boolean,
  };

  const Bank = await bankModel.create(bank);

  // If insert success send data object with status
  if (!Bank) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Bank Successfully Created!",
      data: Bank,
    });
  }
};

// use multer middleware to insert image to single column
export const bankImage = upload1.single("bankImage");
