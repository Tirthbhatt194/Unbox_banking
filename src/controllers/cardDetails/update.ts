import { RequestHandler } from "express";
import cardDetailsModel from "../../model/cardDetailsModel";

export const updateCardDetail: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await cardDetailsModel.findOne({
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
    const cd = {
      id: parseInt(id) as Number,
      cardId: req.body.cardId as number,
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

    const upda = await cardDetailsModel.update(cd, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: cd,
    });
    return upda;
  }
};
