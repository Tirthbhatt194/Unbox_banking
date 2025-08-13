import { RequestHandler } from "express";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import fs from "fs";

export const updateUnboxPeople: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await unboxPeopleModel.findOne({
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
    let unboxPeopleImage = "";

    // Image validation before update
    if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("unboxPeopleImage") !== null
    ) {
      if (upd.getDataValue("unboxPeopleImage") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("unboxPeopleImage")}`);
        unboxPeopleImage = req.file.filename;
      } else if (upd.getDataValue("unboxPeopleImage") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("unboxPeopleImage")}`);
        unboxPeopleImage = req.file.filename;
      } else {
        unboxPeopleImage = req.file.filename;
      }
    } else if (
      upd.getDataValue("unboxPeopleImage") === null &&
      req.hasOwnProperty("file")
    ) {
      unboxPeopleImage = req.file.filename;
    } else {
      unboxPeopleImage = upd.getDataValue("unboxPeopleImage");
    }

    //update data and image at particular id and update - send status with data object
    const unboxPeople = {
      id: parseInt(id) as Number,
      first_name: req.body.first_name as String,
      last_name: req.body.last_name as String,
      designation: req.body.designation as string,
      contactNumber: req.body.contactNumber as String,
      email: req.body.email as string,
      postalAddress: req.body.postalAddress as string,
      description: req.body.description as string,
      gender: req.body.gender as string,
      token: req.body.token as string,
      unboxPeopleImage: unboxPeopleImage as string,
      is_active: req.body.is_active as Boolean,
      annualIncome: req.body.annualIncome as Number,
      anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome as Number,
      city: req.body.city as String,
      dateOfBirth: req.body.dateOfBirth as Date,
      employmentStatus: req.body.employmentStatus as String,
      maritialStatus: req.body.maritialStatus as String,
      monthlyIncome: req.body.monthlyIncome as Number,
      peopleDependOnYouFinancially: req.body
        .peopleDependOnYouFinancially as Number,
      residentialStatus: req.body.residentialStatus as String,
      pincode: req.body.pincode as Number,
      state: req.body.state as String,
    };
    const upda = await unboxPeopleModel.update(unboxPeople, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: unboxPeople,
    });
    return upda;
  }
};
