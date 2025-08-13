import { RequestHandler } from "express";
import insuranceProviderAddressModel from "../../model/insuranceProviderAddressModel";

export const createProviderAddress: RequestHandler = async (req, res, next) => {
  // insert data to faq and send status with object
  const providerAddress = {
    country: req.body.country as string,
    state: req.body.state as string,
    district: req.body.district as string,
    taluka: req.body.taluka as string,
    address_1: req.body.address_1 as string,
    address_2: req.body.address_2 as string,
    zipcode: req.body.zipcode as number,
    phone1: req.body.phone1 as String,
    phone2: req.body.phone2 as String,
    fax: req.body.fax as number,
    email: req.body.email as string,
    insuranceProviderId: req.body.insuranceProviderId as number,
  };

  const proj = await insuranceProviderAddressModel.create(providerAddress);

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
      message: "Insurance Provider Adress Created SuccessFully!",
      data: proj,
    });
  }
};
