import { RequestHandler } from "express";
import privacyPolicyModel from "../../model/privacyPolicyModel";

export const createPrivacyPolicy: RequestHandler = async (req, res, next) => {
  // insert data to faq and send status with object
  const privacyPolicy = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    text: req.body.text,
  };

  const PrivacyPolicy = await privacyPolicyModel.create(privacyPolicy);

  // If insert success send data object with status
  if (!PrivacyPolicy) {
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
      data: PrivacyPolicy,
    });
  }
};
