import { RequestHandler } from "express";
import loanModel from "../../model/loan";

export const createLoan: RequestHandler = async (req, res, next) => {
  // insert data to faq and send status with object
  const loan = {
    loanName: req.body.loanName as String,
    interestRate: req.body.interestRate as String,
    processingFee: req.body.processingFee as String,
    loanAmount: req.body.loanAmount as Number,
    tenureAmount: req.body.tenureAmount as Number,
    features: req.body.features as String,
    benifits: req.body.benifits as String,
    eligibilityCriteria: req.body.eligibilityCriteria as String,
    documents: req.body.documents as String,
    description: req.body.description as String,
    faq: req.body.faq as String,
    slug: req.body.slug as String,
    visibility: req.body.visibility as Boolean,
    riskFactors: req.body.riskFactors as String,
    bankId: req.body.bankId as Number,
    loanTypeId: req.body.loanTypeId as Number,
    details: req.body.details as JSON,
  };

  const Loan = await loanModel.create(loan);

  // If insert success send data object with status
  if (!Loan) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Loan Successfully Created!",
      data: Loan,
    });
  }
};
