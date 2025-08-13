import { RequestHandler } from "express";
import cardDetailsModel from "../../model/cardDetailsModel";

export const createCardDetail: RequestHandler = async (req, res, next) => {
  // insert data to faq and send status with object
  const cd = {
    cardId: req.body.cardId as Number,
    firstYearFee: req.body.firstYearFee as string,
    rewards: req.body.rewards as string,
    joiningPerks: req.body.joiningPerks as string,
    feeDetails: req.body.feeDetails as string,
    documents: req.body.documents as string,
    specialFeatures: req.body.specialFeatures as string,
    keyHighlights: req.body.keyHighlights as string,
    lifeStyleBenifits: req.body.lifeStyleBenifits as string,
    featuresAndBenifits: req.body.featuresAndBenifits as string,
    documentsRequired: req.body.documentsRequired as string,
    eligibilityCriteria: req.body.eligibilityCriteria as string,
    cardFaq: req.body.cardFaq as string,
    interestRate: req.body.interestRate as string,
    cashWithdrawalFee: req.body.cashWithdrawalFee as string,
    rewardsRedemptionFee: req.body.rewardsRedemptionFee as string,
    duplicateStatementFee: req.body.duplicateStatementFee as string,
    unsuccessfullECSPayment: req.body.unsuccessfullECSPayment as string,
    cashWithdrawalFeeAtForeignATM: req.body
      .cashWithdrawalFeeAtForeignATM as string,
    overlimitFee: req.body.overlimitFee as string,
    latePaymentFee: req.body.latePaymentFee as string,
    salesSlipRetrievalFee: req.body.salesSlipRetrievalFee as string,
    outOfTownChequeProcessing: req.body.outOfTownChequeProcessing as string,
    creditCardReplacementFee: req.body.creditCardReplacementFee as string,
    currencyConversionFee: req.body.currencyConversionFee as string,
    cashPaymentAtBranch: req.body.cashPaymentAtBranch as string,
    copyOfCreditInformationReport: req.body
      .copyOfCreditInformationReport as string,
  };

  const CardD = await cardDetailsModel.create(cd);

  // If insert success send data object with status
  if (!CardD) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Card Details Successfully Created!",
      data: CardD,
    });
  }
};
