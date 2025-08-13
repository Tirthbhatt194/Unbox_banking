import { RequestHandler } from "express";
import loanTypeModel from "../../model/loanTypeModel";
import { upload1 } from "../../middleware/multer";

export const createLoanType: RequestHandler = async (req, res, next) => {
  let loanTypeImage = null;

  if (req.file) {
    loanTypeImage = req.file.filename;
  }
  console.log("IMAGE ", loanTypeImage);
  // insert data to faq and send status with object
  const loanType = {
    loanTypeName: req.body.loanTypeName as String,
    loanDescription: req.body.loanDescription as String,
    documents: req.body.documents as String,
    eligibilityCriteria: req.body.eligibilityCriteria as String,
    features: req.body.features as String,
    benifits: req.body.benifits as String,
    what: req.body.what as String,
    why: req.body.why as String,
    how: req.body.how as String,
    image: loanTypeImage as String,
    visibility: req.body.visibility as Boolean,
  };

  const LoanType = await loanTypeModel.create(loanType);

  // If insert success send data object with status
  if (!LoanType) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Loan Type Successfully Created!",
      data: LoanType,
    });
  }
};

export const loanTypeImage = upload1.single("image");
