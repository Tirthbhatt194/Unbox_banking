import { RequestHandler } from "express";
import aboutUsModel from "../../model/aboutUsModel";

export const createAboutUs: RequestHandler = async (req, res, next) => {
  let image = [];

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("files") === true) {
    image = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "image") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });
  } else {
    image[0] = null;
  }

  // insert data to faq and send status with object
  const aboutUs = {
    image: image[0],

    title: req.body.title,
    subTitle: req.body.subTitle,
    text: req.body.text,
  };

  const AboutUs = await aboutUsModel.create(aboutUs);

  // If insert success send data object with status
  if (!AboutUs) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed To Insert Data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "AboutUs Details Created SuccessFully!",
      data: AboutUs,
    });
  }
};
