import { upload1 } from "./../../middleware/multer";
import { RequestHandler } from "express";
import policiesModel from "../../model/policiesModel";

export const createPolicies: RequestHandler = async (req, res, next) => {
  let policyImage = "";

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    policyImage = req.file.filename;
  } else {
    policyImage = null;
  }

  // insert data to faq and send status with object
  const policies = {
    policyName: req.body.policyName as string,
    policyFeatures: req.body.policyFeatures as string,
    lifeCover: req.body.lifeCover as Number,
    lumpsumPayout: req.body.lumpsumPayout as Number,
    returnOfPremium: req.body.returnOfPremium as String,
    claimSetteled: req.body.claimSetteled as String,
    payYearly: req.body.payYearly as Number,
    maxAgeLimit: req.body.maxAgeLimit as Number,
    coverTillAge: req.body.coverTillAge as Number,
    cashlessHospital: req.body.cashlessHospital as Number,
    cashlessGarages: req.body.cashlessGarages as Number,
    IDV: req.body.IDV as Number,
    covered: req.body.covered as string,
    notCovered: req.body.notCovered as string,
    what: req.body.what as string,
    why: req.body.why as string,
    how: req.body.how as string,
    premium: req.body.premium as Number,
    totalPolicyTerm: req.body.totalPolicyTerm as Number,
    about: req.body.about as string,
    policyBenifits: req.body.policyBenifits as String,
    visibility: req.body.visibility as Boolean,
    topPlan: req.body.topPlan as Boolean,
    policyImage: policyImage as string,
    medicalExpence: req.body.medicalExpence as Number,
    passportLoss: req.body.passportLoss as Number,
    baggageLoss: req.body.baggageLoss as Number,
    riskFactors: req.body.riskFactors as String,
    insuranceCategoryId: req.body.insuranceCategoryId as Number,
    insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
    insuranceProviderId: req.body.insuranceProviderId as Number,
    insuranceCategoryTypeId: req.body.insuranceCategoryTypeId as Number,
  };

  const proj = await policiesModel.create(policies);

  // If insert success send data object with status
  if (!proj) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed To Insert Data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Policy Created SuccessFully!",
      data: proj,
    });
  }
};

// use multer middleware to insert image to single column
export const policyImage = upload1.single("policyImage");
