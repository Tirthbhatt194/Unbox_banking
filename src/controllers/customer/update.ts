import { RequestHandler } from "express";
import customerModel from "../../model/customerModel";
import fs from "fs";

export const updateCustomers: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await customerModel.findOne({
    where: {
      id: id,
    },
  });
  if (!upd)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  if (id === id) {
    let customerImage = "";
    if (req.hasOwnProperty("file")) {
      if (upd.getDataValue("customerImage") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("customerImage")}`);
        customerImage = req.file.filename;
      } else if (upd.getDataValue("customerImage") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("customerImage")}`);
        customerImage = req.file.filename;
      } else {
        customerImage = req.file.filename;
      }
    } else {
      customerImage = upd.getDataValue("customerImage");
    }

    const updateCustomer = {
      id: parseInt(id) as Number,
      firstName: req.params.firstName as string,
      lastName: req.body.lastName as string,
      dateOfBirth: req.body.dateOfBirth as Date,
      age: req.body.age as Number,
      contactNo: req.body.contactNo as String,
      email: req.body.email as string,
      country: req.body.country as string,
      state: req.body.state as string,
      district: req.body.district as string,
      taluka: req.body.taluka as string,
      address_1: req.body.address_1 as string,
      address_2: req.body.address_2 as string,
      zipcode: req.body.zipcode as Number,
      customerImage: customerImage as string,
      visibility: req.body.visibility as boolean,
    };

    const upda = await customerModel.update(updateCustomer, {
      where: {
        id: id,
      },
    });
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateCustomer,
    });
    return upda;
  }
};
