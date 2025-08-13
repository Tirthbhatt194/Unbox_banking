import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import bankModel from "../../model/bankModel";
import loanModel from "../../model/loan";
import loanInquiryModel from "../../model/loanInquiryModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import fs from "fs";
import handlebars from "handlebars";

export const createLoanInquiry: RequestHandler = async (req, res, next) => {
  // insert data to faq and send status with object
  const token =
    req.body.token || req.query.token || req.headers["authorization"];
  const check = await unboxPeopleModel.findOne({
    where: { user_token: token.substring(7) },
  });
  const loanInquiry = {
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
    loanId: req.body.loanId as Number,
    bankId: req.body.bankId as Number,
    loanTypeId: req.body.loanTypeId as Number,
  };

  const LoanInquiry = await loanInquiryModel.create(loanInquiry);
  console.log("id=====>", check);

  const userInfo = await unboxPeopleModel.findOne({
    where: {
      id: LoanInquiry.dataValues.userId,
    },
  });

  const Loan = await loanInquiryModel.findOne({
    where: {
      id: LoanInquiry.dataValues.id,
    },
    include: [
      {
        model: loanModel,
      },
      {
        model: bankModel,
      },
    ],
  });

  // let data = {
  //   first_name: userInfo.dataValues.first_name,
  //   loanName: Loan.dataValues.loan.loanName,
  //   name: Loan.dataValues.bank.name,
  //   to: userInfo.dataValues.email,
  //   path: "src/controllers/emailTemplates/loanInquiryTemplate.html",
  // };

  // sendMail(data);

  var readHTMLFile = (path, callback) => {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        callback(err);
      } else {
        callback(null, html);
      }
    });
  };

  let transporter = nodemailer.createTransport({
    host: "mail.redspark.a2hosted.com",
    port: 465,
    secure: true,
    auth: {
      user: "mail@redspark.a2hosted.com", // generated ethereal user
      pass: "Z8[Ju4xm}y*)", // generated ethereal password
    },
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  });

  readHTMLFile(
    "src/controllers/emailTemplates/loanInquiryTemplate.html",
    function (err, html) {
      if (err) {
        console.log("error reading file", err);
        return;
      }
      var template = handlebars.compile(html);
      var replacements = {
        first_name: userInfo.dataValues.first_name,
        loanName: Loan.dataValues.loan.loanName,
        name: Loan.dataValues.bank.name,
      };
      var htmlToSend = template(replacements);

      var mailOptions = {
        from: "mail@redspark.a2hosted.com",
        to: userInfo.dataValues.email,
        subject: `Got inquiry for ${Loan.dataValues.loan.loanName}! Unbox Banking `,
        html: htmlToSend,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  );
  // If insert success send data object with status
  if (!LoanInquiry) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Loan Inquiry Successfully Created!",
      data: LoanInquiry,
    });
  }
};
