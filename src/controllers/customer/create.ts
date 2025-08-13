import { upload1 } from "./../../middleware/multer";
import { RequestHandler } from "express";
import customerModel from "../../model/customerModel";

export const createCustomer: RequestHandler = async (req, res, next) => {
  // const blogImage = ((req.files as Array<Express.Multer.File>).map(file => { return file.filename }))

  let customerImage = "";
  if (req.hasOwnProperty("file") === true) {
    customerImage = req.file.filename;
  } else {
    customerImage = null;
  }

  const customer = {
    firstName: req.body.firstName as string,
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
  const Customer = await customerModel.create(customer);
  if (!Customer) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Customer Created SuccessFully!",
      data: Customer,
    });
  }
};

export const customerImage = upload1.single("customerImage");
