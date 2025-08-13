import { Console } from "console";
import { RequestHandler } from "express";
import inquiryModel from "../../model/inquiry";

export const createInquiry: RequestHandler = async (req, res, next) => {
  let key = req.params.key;
  // insert data to faq and send status with object

  if (key === "Term Insurance") {
    const inq = {
      // gender: req.body.gender as String,
      name: req.body.name as String,
      dateOfBirth: req.body.dateOfBirth as Date,
      mobileNumber: req.body.mobileNumber as String,
      // insuredPersonType: req.body.insuredPersonType as [],
      // age: req.body.age as Number,
      // cityNameOrPincode: req.body.cityNameOrPincode as String,
      // medicalHistory: req.body.medicalHistory as String,
      // vehicleNumber: req.body.vehicleNumber as Number,
      // vehicleBrand: req.body.vehicleBrand as String,
      // vehicleModel: req.body.vehicleModel as String,
      // vehicleFuelType: req.body.vehicleFuelType as String,
      // vehicleVarient: req.body.vehicleVarient as String,
      // vehicleRegistrationYear: req.body.vehicleRegistrationYear as Number,
      email: req.body.email as String,
      // existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
      // madeClaim: req.body.madeClaim as boolean,
      // coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
      // RTOName: req.body.RTOName as String,
      insuranceCategoryId: req.body.insuranceCategoryId as Number,
      insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
    };

    const Inq = await inquiryModel.create(inq);
    console.log("NUMBER ====>", typeof Inq.dataValues.mobileNumber);
    // If insert success send data object with status
    if (!Inq) {
      res.status(400).send({
        statusCode: 400,
        status: false,
        message: "Failed to insert data",
      });
    } else {
      res.status(201).send({
        statusCode: 201,
        status: true,
        message: "Inquiry Successfully Created!",
        data: Inq,
      });
    }
  } else if (key === "Investment Plan") {
    const inq = {
      // gender: req.body.gender as String,
      name: req.body.name as String,
      // dateOfBirth: req.body.dateOfBirth as Date,
      mobileNumber: req.body.mobileNumber as String,
      // insuredPersonType: req.body.insuredPersonType as [],
      // age: req.body.age as Number,
      // cityNameOrPincode: req.body.cityNameOrPincode as String,
      // medicalHistory: req.body.medicalHistory as String,
      // vehicleNumber: req.body.vehicleNumber as Number,
      // vehicleBrand: req.body.vehicleBrand as String,
      // vehicleModel: req.body.vehicleModel as String,
      // vehicleFuelType: req.body.vehicleFuelType as String,
      // vehicleVarient: req.body.vehicleVarient as String,
      // vehicleRegistrationYear: req.body.vehicleRegistrationYear as Number,
      // email: req.body.email as String,
      // existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
      // madeClaim: req.body.madeClaim as boolean,
      // coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
      // RTOName: req.body.RTOName as String,
      insuranceCategoryId: req.body.insuranceCategoryId as Number,
      insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
    };

    const Inq = await inquiryModel.create(inq);

    // If insert success send data object with status
    if (!Inq) {
      res.status(400).send({
        statusCode: 400,
        status: false,
        message: "Failed to insert data",
      });
    } else {
      res.status(201).send({
        statusCode: 201,
        status: true,
        message: "Inquiry Successfully Created!",
        data: Inq,
      });
    }
  } else if (key === "Health Insurance") {
    const inq = {
      gender: req.body.gender as String,
      name: req.body.name as String,
      // dateOfBirth: req.body.dateOfBirth as Date,
      mobileNumber: req.body.mobileNumber as String,
      insuredPersonType: req.body.insuredPersonType as [],
      age: req.body.age as Number,
      cityNameOrPincode: req.body.cityNameOrPincode as String,
      // medicalHistory: req.body.medicalHistory as String,
      // vehicleNumber: req.body.vehicleNumber as Number,
      // vehicleBrand: req.body.vehicleBrand as String,
      // vehicleModel: req.body.vehicleModel as String,
      // vehicleFuelType: req.body.vehicleFuelType as String,
      // vehicleVarient: req.body.vehicleVarient as String,
      // vehicleRegistrationYear: req.body.vehicleRegistrationYear as Number,
      // email: req.body.email as String,
      // existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
      // madeClaim: req.body.madeClaim as boolean,
      // coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
      // RTOName: req.body.RTOName as String,
      insuranceCategoryId: req.body.insuranceCategoryId as Number,
      insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
    };

    const Inq = await inquiryModel.create(inq);

    // If insert success send data object with status
    if (!Inq) {
      res.status(400).send({
        statusCode: 400,
        status: false,
        message: "Failed to insert data",
      });
    } else {
      res.status(201).send({
        statusCode: 201,
        status: true,
        message: "Inquiry Successfully Created!",
        data: Inq,
      });
    }
  } else if (key === "Motor Insurance") {
    const inq = {
      // gender: req.body.gender as String,
      name: req.body.name as String,
      // dateOfBirth: req.body.dateOfBirth as Date,
      mobileNumber: req.body.mobileNumber as String,
      // insuredPersonType: req.body.insuredPersonType as [],
      // age: req.body.age as Number,
      // cityNameOrPincode: req.body.cityNameOrPincode as String,
      // medicalHistory: req.body.medicalHistory as String,
      vehicleNumber: req.body.vehicleNumber as Number,
      vehicleBrand: req.body.vehicleBrand as String,
      vehicleModel: req.body.vehicleModel as String,
      vehicleFuelType: req.body.vehicleFuelType as String,
      vehicleVarient: req.body.vehicleVarient as String,
      vehicleRegistrationYear: req.body.vehicleRegistrationYear as Number,
      email: req.body.email as String,
      // existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
      // madeClaim: req.body.madeClaim as boolean,
      // coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
      RTOName: req.body.RTOName as String,
      insuranceCategoryId: req.body.insuranceCategoryId as Number,
      insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
    };

    const Inq = await inquiryModel.create(inq);

    // If insert success send data object with status
    if (!Inq) {
      res.status(400).send({
        statusCode: 400,
        status: false,
        message: "Failed to insert data",
      });
    } else {
      res.status(201).send({
        statusCode: 201,
        status: true,
        message: "Inquiry Successfully Created!",
        data: Inq,
      });
    }
  }
};
