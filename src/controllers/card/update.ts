import { RequestHandler } from "express";
import cardModel from "../../model/cardModel";
import fs from "fs";
export const updateCard: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await cardModel.findOne({
    where: {
      id: id,
    },
  });
  // console.log("object", upd);
  // If data dosent exist
  if (!upd)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data exist
  if (id === id) {
    console.log("object", id);
    //update data and image at particular id and update - send status with data object

    let cardImage = "";

    if (req.hasOwnProperty("file") && upd.getDataValue("cardImage") !== null) {
      if (upd.getDataValue("cardImage") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("cardImage")}`);
        cardImage = req.file.filename;
      } else if (upd.getDataValue("cardImage") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("cardImage")}`);
        cardImage = req.file.filename;
      } else {
        cardImage = req.file.filename;
      }
    } else if (
      upd.getDataValue("cardImage") === null &&
      req.hasOwnProperty("file")
    ) {
      cardImage = req.file.filename;
    } else {
      cardImage = upd.getDataValue("cardImage");
    }
    console.log("object", cardImage);
    const card = {
      id: parseInt(id) as Number,
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
      riskFactors: req.body.riskFactors as String,
      bankId: req.body.bankId as number,
      paymentNetwork: req.body.paymentNetwork as string,
      cardImage: cardImage as string,
      visibility: req.body.visibility as Boolean,
      details: req.body.details as JSON,
    };

    const upda = await cardModel.update(card, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: card,
    });
    return upda;
  }
};
