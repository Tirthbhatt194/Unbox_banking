import { RequestHandler } from "express";
import loanModel from "../../model/loan";

export const updateLoan: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await loanModel.findOne({
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
    const loan = {
      id: parseInt(id) as Number,
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
      slug: req.body.slug as String,
      visibility: req.body.visibility as Boolean,
      riskFactors: req.body.riskFactors as String,
      bankId: req.body.bankId as Number,
      loanTypeId: req.body.loanTypeId as Number,
      details: req.body.details as JSON,
    };

    const upda = await loanModel.update(loan, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: loan,
    });
    return upda;
  }
};
