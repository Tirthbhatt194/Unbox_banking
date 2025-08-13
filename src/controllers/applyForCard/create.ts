import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import applyForCardModel from "../../model/applyForCardModel";
import bankModel from "../../model/bankModel";
import cardModel from "../../model/cardModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import fs from "fs";
import handlebars from "handlebars";
import { sendMail } from "../../middleware/email";

export const createApplyForCardDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];
  const check = await unboxPeopleModel.findOne({
    where: { user_token: token.substring(7) },
  });
  // insert data to faq and send status with object
  const applyForCardDetails = {
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
    userId: check?.dataValues.id as Number,
    cardId: req.body.cardId as Number,
    bankId: req.body.bankId as Number,
  };

  const ApplyForCard = await applyForCardModel.create(applyForCardDetails);

  const userInfo = await unboxPeopleModel.findOne({
    where: {
      id: ApplyForCard.dataValues.userId,
    },
  });
  console.log("");
  const card = await applyForCardModel.findOne({
    where: {
      id: ApplyForCard.dataValues.id,
    },
    include: [
      {
        model: bankModel,
      },
      {
        model: cardModel,
      },
    ],
  });

  let data = {
    to: userInfo.dataValues.email,
    cardName: card.dataValues.card.cardName,
    first_name: userInfo.dataValues.first_name,
    name: card.dataValues.bank.name,
    path: "src/controllers/emailTemplates/cardInquiryTemplate.html",
  };

  sendMail(data);

  // If insert success send data object with status
  if (!ApplyForCard) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to Apply For Card",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "ApplyForCardDetail Successfully Created!",
      data: ApplyForCard,
    });
  }
};
