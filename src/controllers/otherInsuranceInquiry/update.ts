import { RequestHandler } from "express";
import otherInsuranceInquiryModel from "../../model/otherInsuranceInquiryModel";

export const updateOtherInsInquiry: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await otherInsuranceInquiryModel.findOne({
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
    const inquiry = {
      id: parseInt(id) as Number,
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

    const upda = await otherInsuranceInquiryModel.update(inquiry, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: inquiry,
    });
    return upda;
  }
};
