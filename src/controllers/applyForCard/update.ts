import { RequestHandler } from "express";
import applyForCardModel from "../../model/applyForCardModel";

export const updateApplyForCard: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await applyForCardModel.findOne({
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
    const applyForCardDetail = {
      id: parseInt(id) as Number,
      designation: req.body.designation as String,
      firstName: req.body.firstName as String,
      lastName: req.body.lastName as String,
      dateOfBirth: req.body.dateOfBirth as Date,
      maritialStatus: req.body.maritialStatus as String,
      residentialStatus: req.body.residentialStatus as String,
      address: req.body.address as String,
      yearsLivedAtaAddress: req.body.yearsLivedAtaAddress as String,
      employmentStatus: req.body.employmentStatus as String,
      annualIncomeBeforeTax: req.body.annualIncomeBeforeTax as Number,
      anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome as String,
      annualIncomeAfterTax: req.body.annualIncomeAfterTax as Number,
      monthlyIncome: req.body.monthlyIncome as String,
      peopleDependOnYouFinancially: req.body
        .peopleDependOnYouFinancially as String,
      immediateWithdrawl: req.body.immediateWithdrawl as String,
      emailNotification: req.body.emailNotification as Boolean,
      userId: req.body.userId as Number,
      cardId: req.body.cardId as Number,
      bankId: req.body.bankId as Number,
    };

    const upda = await applyForCardModel.update(applyForCardDetail, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Detail Updated SuccessFully!",
      data: applyForCardDetail,
    });
    return upda;
  }
};
