import { RequestHandler } from "express";
import faqModel from "../../model/faqModel";

export const updateFaq: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await faqModel.findOne({
    where: {
      id: id,
    },
  });

  // If data dosent exist
  if (!upd)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data exist
  if (id === id) {
    //update data and image at particular id and update - send status with data object
    const faq = {
      id: parseInt(id) as Number,
      questions: req.body.questions as string,
      answers: req.body.answers as string,
      insuranceCategoryId: req.body.insuranceCategoryId as Number,
      insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
      visibility: req.body.visibility as Boolean,
    };

    const upda = await faqModel.update(faq, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: faq,
    });
    return upda;
  }
};
