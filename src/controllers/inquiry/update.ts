import { RequestHandler } from "express";
import inquiryModel from "../../model/inquiry";

export const updateInquiry: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await inquiryModel.findOne({
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
    const faq = {
      id: parseInt(id) as Number,
      gender: req.body.gender as String,
      name: req.body.name as String,
      dateOfBirth: req.body.dateOfBirth as Date,
      mobileNumber: req.body.mobileNumber as String,
      insuredPersonType: req.body.insuredPersonType as [],
      age: req.body.age as Number,
      cityNameOrPincode: req.body.cityNameOrPincode as String,
      medicalHistory: req.body.medicalHistory as String,
      vehicleNumber: req.body.vehicleNumber as Number,
      vehicleBrand: req.body.vehicleBrand as String,
      vehicleModel: req.body.vehicleModel as String,
      vehicleFuelType: req.body.vehicleFuelType as String,
      vehicleVarient: req.body.vehicleVarient as String,
      vehicleRegistrationYear: req.body.vehicleRegistrationYear as Number,
      email: req.body.email as String,
      existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
      madeClaim: req.body.madeClaim as boolean,
      coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
      RTOName: req.body.RTOName as String,
    };

    const upda = await inquiryModel.update(faq, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: faq,
    });
    return upda;
  }
};
