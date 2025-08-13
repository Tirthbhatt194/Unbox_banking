import { upload1 } from "./../../middleware/multer";
import { RequestHandler } from "express";
import unboxWorksModel from "../../model/unboxWorksModel";

export const createUnboxWorks: RequestHandler = async (req, res, next) => {
  let image = "";

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    image = req.file.filename;
  } else {
    image = null;
  }

  // insert data to faq and send status with object
  const unboxWorks = {
    title: req.body.title,
    text: req.body.text,
    image: image,
    visibility: req.body.visibility,
  };

  const UnboxWorks = await unboxWorksModel.create(unboxWorks);

  // If insert success send data object with status
  if (!UnboxWorks) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed To Insert Data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Data Created SuccessFully!",
      data: UnboxWorks,
    });
  }
};

// use multer middleware to insert image to single column
export const image = upload1.single("image");
