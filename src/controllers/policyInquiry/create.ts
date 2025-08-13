import { RequestHandler } from "express";
import policyInquiryModel from "../../model/policyInquiryModel";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import nodemailer from "nodemailer";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import policyModel from "../../model/policiesModel";
import fs from "fs";
import handlebars from "handlebars";

export const createPolicyInquiry: RequestHandler = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];
  const check = await unboxPeopleModel.findOne({
    where: { user_token: token.substring(7) },
  });
  // insert data to faq and send status with object
  const policyInquiry = {
    fullName: req.body.fullName as String,
    emailAddress: req.body.emailAddress as String,
    annualIncome: req.body.annualIncome as Number,
    occupation: req.body.occupation as String,
    education: req.body.education as String,
    address: req.body.address as String,
    pinCode: req.body.pinCode as Number,
    city: req.body.city as String,
    state: req.body.state as String,
    nationality: req.body.nationality as String,
    gender: req.body.gender as String,
    dateOfBirth: req.body.dateOfBirth as Date,
    mobileNumber: req.body.mobileNumber as String,
    panCardNumber: req.body.panCardNumber as String,
    vehicleNumber: req.body.vehicleNumber as String,
    vehicleRegistrationDate: req.body.vehicleRegistrationDate as Date,
    vehicleType: req.body.vehicleType as String,
    nomineeName: req.body.nomineeName as String,
    nomineeRelation: req.body.nomineeRelation as String,
    destination: req.body.destination as String,
    numberOfTravellers: req.body.numberOfTravellers as Number,
    startDate: req.body.startDate as Date,
    endDate: req.body.endDate as Date,
    membersDetails: req.body.membersDetails as JSON,
    numberOfMembers: req.body.numberOfMembers as Number,
    valueOfBuilding: req.body.valueOfBuilding as String,
    carpetArea: req.body.carpetArea as String,
    constructionCostPerSqFt: req.body.constructionCostPerSqFt as String,
    valueOfHouseHoldItems: req.body.valueOfHouseHoldItems as String,
    is_active: req.body.is_active as Boolean,
    organizationName: req.body.organizationName as String,
    employeeStrength: req.body.employeeStrength as Number,
    userId: check.dataValues.id as Number,
    insuranceCategoryId: req.body.insuranceCategoryId as Number,
    insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
    policyId: req.body.policyId as Number,
    insuranceTypeId: req.body.insuranceTypeId as Number,
  };

  const PolicyInquiry = await policyInquiryModel.create(policyInquiry);

  const userInfo = await unboxPeopleModel.findOne({
    where: {
      id: PolicyInquiry.dataValues.userId,
    },
  });

  const policy = await policyInquiryModel.findOne({
    where: {
      id: PolicyInquiry.dataValues.id,
    },
    include: [
      {
        model: insuranceCategoryModel,
      },
      {
        model: insuranceSubCategoryModel,
      },
      {
        model: policyModel,
      },
    ],
  });

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
        first_name: userInfo.dataValues.first_name,
        policyName: policy.dataValues.policy.policyName,
        insuranceSubCategoryName:
          policy.dataValues.insuranceSubCategory.insuranceSubCategoryName,
      };
      var htmlToSend = template(replacements);
      var mailOptions = {
        from: "mail@redspark.a2hosted.com",
        to: userInfo.dataValues.email,
        subject: `Got Inquiry For ${policy.dataValues.insuranceSubCategory.insuranceSubCategoryName} Policy! Unbox Banking`,
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
  if (!PolicyInquiry) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Policy Inquiry Successfully Created!",
      data: PolicyInquiry,
    });
  }
};
