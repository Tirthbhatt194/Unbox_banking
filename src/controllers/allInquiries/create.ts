import { RequestHandler } from "express";
import handlebars from "handlebars";
import nodemailer from "nodemailer";
import fs from "fs";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import allInquiryModel from "../../model/allInquiriesModel";
import policyModel from "../../model/policiesModel";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import insuranceCategoryTypeModel from "../../model/insuranceTypeModel";
import loanModel from "../../model/loan";
import bankModel from "../../model/bankModel";
import loanTypeModel from "../../model/loanTypeModel";
import cardModel from "../../model/cardModel";
import { sendMail } from "../../middleware/email";

export const createAllPolicyInquiry: RequestHandler = async (
  req,
  res,
  next
) => {
  // insert data to Bank and send status with object

  const policy = req.body.policyId;
  const insuranceCategory = req.body.insuranceCategoryId;
  const insuranceSubCategory = req.body.insuranceSubCategoryId;
  const insuranceType = req.body.insuranceTypeId;

  const policyObj = await policyModel.findOne({
    where: {
      id: policy,
    },
  });

  const insuranceCategoryObj = await insuranceCategoryModel.findOne({
    where: {
      id: insuranceCategory,
    },
  });

  const insuranceSubCategoryObj = await insuranceSubCategoryModel.findOne({
    where: {
      id: insuranceSubCategory,
    },
  });
  const insuranceCategoryTypeObj = await insuranceCategoryTypeModel.findOne({
    where: {
      id: insuranceType,
    },
  });

  const data = {
    type: "policy",
    data: {
      policyName: policyObj.dataValues.policyName,
      policyFeatures: policyObj.dataValues.policyFeatures,
      lifeCover: policyObj.dataValues.lifeCover,
      claimSetteled: policyObj.dataValues.claimSetteled,
      maxAgeLimit: policyObj.dataValues.maxAgeLimit,
      coverTillAge: policyObj.dataValues.coverTillAge,
      cashlessHospital: policyObj.dataValues.cashlessHospital,
      cashlessGarages: policyObj.dataValues.cashlessGarages,
      IDV: policyObj.dataValues.IDV,
      covered: policyObj.dataValues.covered,
      notCovered: policyObj.dataValues.notCovered,
      premium: policyObj.dataValues.premium,
      lumpsumPayout: policyObj.dataValues.lumpsumPayout,
      medicalExpence: policyObj.dataValues.medicalExpence ,
      passportLoss:policyObj.dataValues.passportLoss,
      baggageLoss: policyObj.dataValues.baggageLoss ,
      returnOfPremium: policyObj.dataValues.returnOfPremium,
      totalPolicyTerm: policyObj.dataValues.totalPolicyTerm,
      policyImage: policyObj.dataValues.policyImage,
      insuranceCategory: insuranceCategoryObj.dataValues.insuranceName,
      insuranceImage: insuranceCategoryObj.dataValues.insuranceImage,
      insuranceSubCategory:
        insuranceSubCategoryObj.dataValues.insuranceSubCategoryName,
      insuranceSubCategoryImage:
        insuranceSubCategoryObj.dataValues.insuranceSubCategoryImage,
      insuranceCategoryType:
        insuranceCategoryTypeObj.dataValues.insuranceCategoryTypeName,
      insuranceCategoryTypeImage:
        insuranceCategoryTypeObj.dataValues.insuranceCategoryTypeImage,
      address: req.body.address,
      annualIncome: req.body.annualIncome,
      anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
      city: req.body.city,
      dateOfBirth: req.body.dateOfBirth,
      designation: req.body.designation,
      emailAddress: req.body.emailAddress,
      employmentStatus: req.body.employmentStatus,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      maritialStatus: req.body.maritialStatus,
      mobileNumber: req.body.mobileNumber,
      monthlyIncome: req.body.monthlyIncome,
      peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
      residentialStatus: req.body.residentialStatus,
      pincode: req.body.pincode,
      state: req.body.state,
    },
    userContactNumber: req.body.mobileNumber,
    userEmail: req.body.emailAddress,
    userId: null,
  };

  const userData = {
    postalAddress: req.body.address,
    annualIncome: req.body.annualIncome,
    anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
    city: req.body.city,
    dateOfBirth: req.body.dateOfBirth,
    designation: req.body.designation,
    email: req.body.emailAddress,
    employmentStatus: req.body.employmentStatus,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    maritialStatus: req.body.maritialStatus,
    contactNumber: req.body.mobileNumber,
    monthlyIncome: req.body.monthlyIncome,
    peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
    residentialStatus: req.body.residentialStatus,
    pincode: req.body.pincode,
    state: req.body.state,
  };

  const user = await unboxPeopleModel.findOne({
    where: {
      contactNumber: req.body.mobileNumber,
      email: userData.email,
    },
  });
  if (user) {
    await unboxPeopleModel.update(userData, {
      where: {
        contactNumber: userData.contactNumber,
      },
    });
  }
  const token = req.body.token as String;

  if (token === null) {
    data.userId = null;
  } else {
    data.userId = user.dataValues.id;
  }

  const inquiry = await allInquiryModel.create(data);

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
    "src/controllers/emailTemplates/policyInquiryTemplate.html",
    function (err, html) {
      if (err) {
        console.log("error reading file", err);
        return;
      }
      var template = handlebars.compile(html);
      var replacements = {
        first_name: req.body.firstName,
        policyName: policyObj.dataValues.policyName,
        insuranceSubCategoryName:
          insuranceSubCategoryObj.dataValues.insuranceSubCategoryName,
      };
      var htmlToSend = template(replacements);
      var mailOptions = {
        from: "mail@redspark.a2hosted.com",
        to: req.body.emailAddress,
        subject: `Got Inquiry For ${insuranceSubCategoryObj.dataValues.insuranceSubCategoryName} Policy! Unbox Banking`,
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
  if (!inquiry) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "inquiry Successfully Created!",
      data: inquiry,
    });
  }
};

export const createAllLoanInquiry: RequestHandler = async (req, res, next) => {
  // insert data to Bank and send status with object

  const loan = req.body.loanId;
  const bank = req.body.bankId;
  const loanType = req.body.loanTypeId;

  const loanObj = await loanModel.findOne({
    where: {
      id: loan,
    },
  });

  const bankObj = await bankModel.findOne({
    where: {
      id: bank,
    },
  });

  const loanTypeObj = await loanTypeModel.findOne({
    where: {
      id: loanType,
    },
  });

  const data = {
    type: "loan",
    data: {
      loanName: loanObj.dataValues.loanName,
      interestRate: loanObj.dataValues.interestRate,
      processingFee: loanObj.dataValues.processingFee,
      loanAmount: loanObj.dataValues.loanAmount,
      tenureAmount: loanObj.dataValues.tenureAmount,
      features: loanObj.dataValues.features,
      benifits: loanObj.dataValues.benifits,
      documents: loanObj.dataValues.documents,

      bankName: bankObj.dataValues.name,
      bankImage: bankObj.dataValues.bankImage,
      loanType: loanTypeObj.dataValues.loanTypeName,
      loanTypeImage: loanTypeObj.dataValues.image,
      address: req.body.address,
      annualIncome: req.body.annualIncome,
      anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
      city: req.body.city,
      dateOfBirth: req.body.dateOfBirth,
      designation: req.body.designation,
      emailAddress: req.body.emailAddress,
      employmentStatus: req.body.employmentStatus,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      maritialStatus: req.body.maritialStatus,
      mobileNumber: req.body.mobileNumber,
      monthlyIncome: req.body.monthlyIncome,
      peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
      residentialStatus: req.body.residentialStatus,
      pincode: req.body.pincode,
      state: req.body.state,
    },
    userContactNumber: req.body.mobileNumber,
    userEmail: req.body.emailAddress,
    userId: null,
  };

  const userData = {
    postalAddress: req.body.address,
    annualIncome: req.body.annualIncome,
    anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
    city: req.body.city,
    dateOfBirth: req.body.dateOfBirth,
    designation: req.body.designation,
    email: req.body.emailAddress,
    employmentStatus: req.body.employmentStatus,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    maritialStatus: req.body.maritialStatus,
    contactNumber: req.body.mobileNumber,
    monthlyIncome: req.body.monthlyIncome,
    peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
    residentialStatus: req.body.residentialStatus,
    pincode: req.body.pincode,
    state: req.body.state,
  };

  const user = await unboxPeopleModel.findOne({
    where: {
      contactNumber: req.body.mobileNumber,
      email: userData.email,
    },
  });
  if (user) {
    await unboxPeopleModel.update(userData, {
      where: {
        contactNumber: userData.contactNumber,
      },
    });
  }
  const token = req.body.token as String;

  if (token === null) {
    data.userId = null;
  } else {
    data.userId = user.dataValues.id;
  }

  const inquiry = await allInquiryModel.create(data);

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
        first_name: req.body.firstName,
        loanName: loanObj.dataValues.loanName,
        name: bankObj.dataValues.name,
      };
      var htmlToSend = template(replacements);

      var mailOptions = {
        from: "mail@redspark.a2hosted.com",
        to: req.body.emailAddress,
        subject: `Got inquiry for ${loanObj.dataValues.loanName}! Unbox Banking `,
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
  if (!inquiry) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "inquiry Successfully Created!",
      data: inquiry,
    });
  }
};

export const createAllCardInquiry: RequestHandler = async (req, res, next) => {
  // insert data to Bank and send status with object

  const card = req.body.cardId;
  const bank = req.body.bankId;

  const cardObj = await cardModel.findOne({
    where: {
      id: card,
    },
  });

  const bankObj = await bankModel.findOne({
    where: {
      id: bank,
    },
  });

  const data = {
    type: "card",
    data: {
      cardName: cardObj.dataValues.cardName,
      cardCategory: cardObj.dataValues.cardCategory,
      cardType: cardObj.dataValues.cardType,
      cardImage: cardObj.dataValues.cardImage,
      cardFeatures: cardObj.dataValues.cardFeatures,
      cardRewards: cardObj.dataValues.cardRewards,
      joiningFee: cardObj.dataValues.joiningFee,
      paymentNetwork: cardObj.dataValues.paymentNetwork,
      joiningPerks: cardObj.dataValues.joiningPerks,
      documents: cardObj.dataValues.documents,
      cashWithdrawalFee: cardObj.dataValues.cashWithdrawalFee,
      benifits: cardObj.dataValues.benifits,
      feeDetails: cardObj.dataValues.feeDetails,
      bankName: bankObj.dataValues.name,
      bankImage: bankObj.dataValues.bankImage,
      address: req.body.address,
      annualIncome: req.body.annualIncome,
      anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
      annualFee: cardObj.dataValues.annualFee,
      city: req.body.city,
      dateOfBirth: req.body.dateOfBirth,
      designation: req.body.designation,
      emailAddress: req.body.emailAddress,
      employmentStatus: req.body.employmentStatus,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      maritialStatus: req.body.maritialStatus,
      mobileNumber: req.body.mobileNumber,
      monthlyIncome: req.body.monthlyIncome,
      peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
      residentialStatus: req.body.residentialStatus,
      pincode: req.body.pincode,
      state: req.body.state,
    },
    userContactNumber: req.body.mobileNumber,
    userEmail: req.body.emailAddress,
    userId: null,
  };

  const userData = {
    postalAddress: req.body.address,
    annualIncome: req.body.annualIncome,
    anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
    city: req.body.city,
    dateOfBirth: req.body.dateOfBirth,
    designation: req.body.designation,
    email: req.body.emailAddress,
    employmentStatus: req.body.employmentStatus,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    maritialStatus: req.body.maritialStatus,
    contactNumber: req.body.mobileNumber,
    monthlyIncome: req.body.monthlyIncome,
    peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
    residentialStatus: req.body.residentialStatus,
    pincode: req.body.pincode,
    state: req.body.state,
  };

  const user = await unboxPeopleModel.findOne({
    where: {
      contactNumber: req.body.mobileNumber,
      email: userData.email,
    },
  });
  if (user) {
    await unboxPeopleModel.update(userData, {
      where: {
        contactNumber: userData.contactNumber,
      },
    });
  }
  const token = req.body.token as String;

  if (token === null) {
    data.userId = null;
  } else {
    data.userId = user.dataValues.id;
  }
  const inquiry = await allInquiryModel.create(data);

  let data1 = {
    to: req.body.emailAddress,
    cardName: cardObj.dataValues.cardName,
    first_name: req.body.firstName,
    name: bankObj.dataValues.name,
    path: "src/controllers/emailTemplates/cardInquiryTemplate.html",
  };

  sendMail(data1);

  // If insert success send data object with status
  if (!inquiry) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "inquiry Successfully Created!",
      data: inquiry,
    });
  }
};
