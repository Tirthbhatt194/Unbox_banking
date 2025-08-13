import { upload1 } from "../../middleware/multer";
import { RequestHandler } from "express";
import cardModel from "../../model/cardModel";

export const createCard: RequestHandler = async (req, res, next) => {
  let cardImage = "";

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    cardImage = req.file.filename;
  } else {
    cardImage = null;
  }

  // insert data to faq and send status with object
  const card = {
    cardName: req.body.cardName as string,
    cardFeatures: req.body.cardFeatures as string,
    cardReviews: req.body.cardReviews as number,
    cardCategory: req.body.cardCategory as string,
    cardType: req.body.cardType as string,
    cardRewards: req.body.cardRewards as string,
    joiningPerks: req.body.joiningPerks as string,
    feeDetails: req.body.feeDetails as string,
    documents: req.body.documents as string,
    eligibilityCriteria: req.body.eligibilityCriteria as string,
    cashWithdrawalFee: req.body.cashWithdrawalFee as string,
    cardFaq: req.body.cardFaq as string,
    cardDescription: req.body.cardDescription as string,
    joiningFee: req.body.joiningFee as number,
    annualFee: req.body.annualFee as number,
    keyHighlights: req.body.keyHighlights as string,
    benifits: req.body.benifits as string,
    bankId: req.body.bankId as number,
    riskFactors: req.body.riskFactors as String,
    paymentNetwork: req.body.paymentNetwork as string,
    cardImage: cardImage as string,
    visibility: req.body.visibility as Boolean,
    details: req.body.details,
  };
  const cred = await cardModel.create(card);

  // If insert success send data object with status
  if (!cred) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed To Insert Data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Card Created SuccessFully!",
      data: cred,
    });
  }
};

// use multer middleware to insert image to single column
export const cardImage = upload1.single("cardImage");
