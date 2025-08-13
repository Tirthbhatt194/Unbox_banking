import { RequestHandler } from "express";
import faqModel from "../../model/faqModel";

export const createFaq: RequestHandler = async (req, res, next) => {
  // insert data to faq and send status with object
  const faq = {
    questions: req.body.questions as string,
    answers: req.body.answers as string,
    insuranceCategoryId: req.body.insuranceCategoryId as Number,
    insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
    visibility: req.body.visibility as Boolean,
  };

  const Faq = await faqModel.create(faq);

  // If insert success send data object with status
  if (!Faq) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "FAQ Successfully Created!",
      data: Faq,
    });
  }
};
