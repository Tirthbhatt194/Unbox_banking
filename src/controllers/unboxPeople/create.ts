// import dotenv from "dotenv";
// import { upload1 } from "./../../middleware/multer";
// import { RequestHandler } from "express";
// import unboxPeopleModel from "../../model/unboxPeopleModel";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// dotenv.config();

// export const createUnboxPeople: RequestHandler = async (req, res, next) => {
//   let unboxPeopleImage = "";
//   const saltRounds = process.env.SALT_ROUNDS;

//   // Check if image is sent as set image as null
//   if (req.hasOwnProperty("file")) {
//     unboxPeopleImage = req.file.filename;
//   } else {
//     unboxPeopleImage = null;
//   }

//   let password = req.body.password;
//   // console.log("PASSWORD", saltRounds);

//   const salt = await bcrypt.genSalt(10);
//   const hashPassword = await bcrypt.hash(password, salt);
//   // console.log("HASH", hash);
//   //  await bcrypt.genSalt(saltRounds, async (err: any, salt: any) => {
//   //   await bcrypt.hash(password, salt, async (err: any, hash: String) => {
//   // insert data to faq and send status with object
//   const unboxPeople = {
//     first_name: req.body.first_name as String,
//     last_name: req.body.last_name as String,
//     designation: req.body.designation as String,
//     contactNumber: req.body.contactNumber as String,
//     email: req.body.email as String,
//     postalAddress: req.body.postalAddress as String,
//     description: req.body.description as String,
//     gender: req.body.gender as String,
//     user_token: req.body.user_token as String,
//     device_token: req.body.device_token as String,
//     password: hashPassword as String,
//     unboxPeopleImage: unboxPeopleImage as String,
//     visibility: req.body.visibility as Boolean,
//   };

//   // insert
//   const UnboxPeople: any = await unboxPeopleModel.create(unboxPeople);

//   // If insert success send data object with status
//   if (!UnboxPeople) {
//     res.status(400).send({
//       statusCode: 400,
//       status: false,
//       message: "Failed To Insert Data!",
//     });
//   } else {
//     const token = jwt.sign(
//       {
//         id: UnboxPeople.id,
//         email: UnboxPeople.email,
//       },
//       process.env.AUTH_SECRET
//     );

//     const updatedUnboxPeople = await unboxPeopleModel.update(
//       {
//         user_token: token,
//       },
//       {
//         where: {
//           id: UnboxPeople.id,
//         },
//       }
//     );

//     if (updatedUnboxPeople[0] == 1) {
//       UnboxPeople.dataValues.user_token = token;

//       res.status(201).send(UnboxPeople);
//     } else {
//       res.status(200).send({
//         statusCode: 400,
//         status: true,
//         message: "Failed to update token",
//       });
//     }
//   }
//   //   });
//   // });
// };

// // use multer middleware to insert image to single column
// export const unboxPeopleImage = upload1.single("unboxPeopleImage");

import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { RequestHandler } from "express";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import fs from "fs";
import handlebars from "handlebars";
import { upload1 } from "../../middleware/multer";
import allInquiryModel from "../../model/allInquiriesModel";
import { sendOTP } from "../../middleware/sendSms";

dotenv.config();

export const createUnboxPeople: RequestHandler = async (req, res, next) => {
  try {
    const saltRounds = parseInt(process.env.SALT_ROUNDS);

    const numberExists = await unboxPeopleModel.findOne({
      where: { contactNumber: req.body.mobileNumber },
    });

    if (numberExists) {
      return res.status(409).json({
        message: "Mobile Number already exists!",
      });
    }

    let unboxPeopleImage = null;

    // Check if image is sent and set image filename
    if (req.file) {
      unboxPeopleImage = req.file.filename;
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);
    const code = Math.floor(Math.random() * 899999 + 100000);

    const unboxPeople = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      designation: req.body.designation,
      contactNumber: req.body.mobileNumber,
      email: req.body.email,
      postalAddress: req.body.postalAddress,
      description: req.body.description,
      gender: req.body.gender,
      user_token: req.body.user_token,
      device_token: req.body.device_token,
      password: hashPassword,
      unboxPeopleImage,
      is_active: req.body.is_active,
      annualIncome: req.body.annualIncome,
      anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
      city: req.body.city,
      dateOfBirth: req.body.dateOfBirth,
      employmentStatus: req.body.employmentStatus,
      maritialStatus: req.body.maritialStatus,
      monthlyIncome: req.body.monthlyIncome,
      peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
      residentialStatus: req.body.residentialStatus,
      pincode: req.body.pincode,
      state: req.body.state,
      otp: code,
    };
    sendOTP(unboxPeople.contactNumber, code);
    const createdUnboxPeople: any = await unboxPeopleModel.create(unboxPeople);
    if (!createdUnboxPeople) {
      return res.status(400).send({
        statusCode: 400,
        status: false,
        message: "Failed to insert data!",
      });
    }

    // MAIL FOR REGISTRATION

    return res.status(201).send(createdUnboxPeople);
  } catch (err) {
    next(err);
  }
};

export const otpVerification: RequestHandler = async (req, res, next) => {
  let enteredOtp = req.body.otp as Number;
  let mobileNumber = req.body.mobileNumber as String;
  let date = new Date();

  let istDateStr = date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  let data = {
    verified: true,
    registered: true,

    lastLogin: istDateStr,
  };
  const createdUnboxPeople: any = await unboxPeopleModel.findOne({
    where: {
      contactNumber: mobileNumber,
    },
  });

  if (enteredOtp === createdUnboxPeople.otp) {
    const token = jwt.sign(
      {
        id: createdUnboxPeople.id,
        email: createdUnboxPeople.email,
      },
      process.env.AUTH_SECRET
    );

    const updatedUnboxPeople1 = await unboxPeopleModel.update(
      {
        user_token: token,
      },
      {
        where: {
          id: createdUnboxPeople.id,
        },
      }
    );

    if (updatedUnboxPeople1[0] !== 1) {
      return res.status(400).send({
        statusCode: 400,
        status: false,
        message: "Failed to update token",
      });
    }

    createdUnboxPeople.user_token = token;

    const updatedUnboxPeople = await unboxPeopleModel.update(data, {
      where: {
        contactNumber: mobileNumber,
      },
    });

    const policies = await allInquiryModel.findAll({
      where: {
        userContactNumber: mobileNumber,
      },
    });

    policies.forEach(async (p) => {
      await allInquiryModel.update(
        { userId: createdUnboxPeople.id },
        {
          where: {
            id: p.dataValues.id,
          },
        }
      );
    });

    var readHTMLFile = (path, callback) => {
      fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
        if (err) {
          callback(err);
        } else {
          callback(null, html);
        }
      });
    };

    let transporter = nodemailer.createTransport({
      host: "mail.redspark.a2hosted.com",
      port: 465,
      secure: true,
      auth: {
        user: "mail@redspark.a2hosted.com", // generated ethereal user
        pass: "Z8[Ju4xm}y*)", // generated ethereal password
      },
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    });
    readHTMLFile(
      "src/controllers/emailTemplates/registrationTemplate.html",
      function (err, html) {
        if (err) {
          console.log("error reading file", err);
          return;
        }
        var template = handlebars.compile(html);
        var replacements = {
          first_name: createdUnboxPeople.first_name,
        };
        var htmlToSend = template(replacements);

        var mailOptions = {
          from: "mail@redspark.a2hosted.com",
          to: createdUnboxPeople.email,
          subject: "Unbox Banking Registration Successfull!",
          html: htmlToSend,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }
    );
    return res.status(200).send({
      status: "success",
      massage: "OTP VERIFIED SUCCESSFULLY!",
      data: createdUnboxPeople,
    });
  } else {
    return res.status(404).send({
      message: "You have entered wrong otp",
    });
  }
};

// use multer middleware to insert image to single column
export const unboxPeopleImage = upload1.single("unboxPeopleImage");
