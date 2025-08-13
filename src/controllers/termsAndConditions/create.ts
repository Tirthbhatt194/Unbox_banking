import { RequestHandler } from "express";
import termsAndConditionsModel from "../../model/termsAndConditionsModel";

export const createTermsAndConditions: RequestHandler = async (
  req,
  res,
  next
) => {
  // insert data to faq and send status with object
  const termsAndConditions = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    text: req.body.text,
  };

  const TermsAndConditions = await termsAndConditionsModel.create(
    termsAndConditions
  );

  // If insert success send data object with status
  if (!TermsAndConditions) {
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
      data: TermsAndConditions,
    });
  }
};
