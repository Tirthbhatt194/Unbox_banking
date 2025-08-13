import { RequestHandler } from "express";
import insuranceProviderAddressModel from "../../model/insuranceProviderAddressModel";

export const UpdateProviderAddress: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  const isAddress = await insuranceProviderAddressModel.findOne({
    where: { id: id },
  });

  //update data at particular id and update - send status with data object
  if (isAddress) {
    const {
      country,
      state,
      district,
      taluka,
      address_1,
      address_2,
      zipcode,
      phone1,
      phone2,
      fax,
      email,
      policyProviderId,
    } = req?.body;

    const providerAddress = {
      country,
      state,
      district,
      taluka,
      address_1,
      address_2,
      zipcode,
      phone1,
      phone2,
      fax,
      email,
      policyProviderId,
    };

    const address = await insuranceProviderAddressModel.update(
      providerAddress,
      {
        where: {
          id: id,
        },
      }
    );

    if (!isAddress) {
      res.status(404).send({
        statusCode: 404,
        status: false,
        message: "Data Not Found!",
      });
    } else {
      res.status(200).send({
        statusCode: 200,
        status: true,
        message: "Data  Updated SuccessFully!",
        data: providerAddress,
      });
    }

    return address;
  }
};
