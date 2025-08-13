import { RequestHandler } from "express";
import policyInquiryModel from "../../model/policyInquiryModel";

export const updatePolicyInquiry: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await policyInquiryModel.findOne({
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
    const policyInquiry = {
      id: parseInt(id) as Number,
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
      userId: req.body.userId as Number,
      insuranceCategoryId: req.body.insuranceCategoryId as Number,
      insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
      policyId: req.body.policyId as Number,
      insuranceTypeId: req.body.insuranceTypeId as Number,
    };

    const upda = await policyInquiryModel.update(policyInquiry, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: policyInquiry,
    });
    return upda;
  }
};
