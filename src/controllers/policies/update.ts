import policiesModel from "../../model/policiesModel";
import { RequestHandler } from "express";
import fs from "fs";

export const UpdateDetails: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await policiesModel.findOne({
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
    let policyImage = "";

    // Image validation before update
    if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("policyImage") !== null
    ) {
      if (upd.getDataValue("policyImage") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("policyImage")}`);
        policyImage = req.file.filename;
      } else if (upd.getDataValue("policyImage") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("policyImage")}`);
        policyImage = req.file.filename;
      } else {
        policyImage = req.file.filename;
      }
    } else if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("policyImage") === null
    ) {
      policyImage = req.file.filename;
    } else {
      policyImage = upd.getDataValue("policyImage");
    }

    //update data and image at particular id and update - send status with data object
    const updatePolicies = {
      id: parseInt(id) as Number,
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

    const upda = await policiesModel.update(updatePolicies, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updatePolicies,
    });
    return upda;
  }
};
