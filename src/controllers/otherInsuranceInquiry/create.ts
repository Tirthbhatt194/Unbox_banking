import { RequestHandler } from "express";
import otherInsuranceInquiryModel from "../../model/otherInsuranceInquiryModel";

export const createOtherInsInquiry: RequestHandler = async (req, res, next) => {
  // insert data to faq and send status with object
  const inquiry = {
    fullName: req.body.fullName as String,
    mobileNumber: req.body.mobileNumber as String,
    email: req.body.email as String,
    city: req.body.city as String,
    ownerOrTenan: req.body.ownerOrTenan as String,
    valueOfBuilding: req.body.valueOfBuilding as Number,
    carpetArea: req.body.carpetArea as Number,
    constructionCostPerSqFt: req.body.constructionCostPerSqFt as Number,
    valueOfHouseHoldItems: req.body.valueOfHouseHoldItems as Number,
    organizationName: req.body.organizationName as String,
    destination: req.body.destination as String,
    startDate: req.body.startDate as Date,
    endDate: req.body.endDate as Date,
    numberOfTravellers: req.body.numberOfTravellers as Number,
    existingMedicalProblem: req.body.existingMedicalProblem as Boolean,
    insuranceCategoryId: req.body.insuranceCategoryId as Number,
    insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
  };

  const Inquiry = await otherInsuranceInquiryModel.create(inquiry);

  // If insert success send data object with status
  if (!Inquiry) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data",
    });
  }
  res.status(201).send({
    statusCode: 201,
    status: true,
    message: "Inquiry Successfully Created!",
    data: Inquiry,
  });
};
