import unboxPeopleModel from "../../model/unboxPeopleModel";
import { RequestHandler } from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import fs from "fs";
import handlebars from "handlebars";

export const fireEmail: RequestHandler = async (req, res) => {
  let email1 = await req.body.email;

  // const user = await unboxPeopleModel.findOne({

  // },
  // {
  //     where: {
  //         email: email
  //     }
  // })
  console.log("EMAILLLLL+++++++>>>>>>", req.body.email);
  var email = await unboxPeopleModel.findOne({
    where: { email: email1 },
  });
  if (email == null) {
    /**
     * we don't want to tell attackers that an
     * email doesn't exist, because that will let
     * them use this form to find ones that do
     * exist.
     **/
    return res.json({ status: "ok" });
  }
  /**
   * Expire any tokens that were previously
   * set for this user. That prevents old tokens
   * from being used.
   **/
  await unboxPeopleModel.update(
    {
      used: true,
    },
    {
      where: {
        email: req.body.email,
      },
    }
  );

  //Create a random reset token
  var fpSalt = crypto.randomBytes(64).toString("base64");

  fpSalt = fpSalt.replace(/\//g, "-");

  //token expires after one hour
  // var expireDate = new Date(new Date().getTime() + 60 * 60 * 1000);
  // let currentTime = new Date().toLocaleString(undefined, {
  //   timeZone: "Asia/Kolkata",
  // });
  var expireDate = new Date(new Date().getTime() + 60 * 60 * 1000);
  // console.log("DATE======>", new Date(new Date().getTime() + 60 * 60 * 1000));
  //insert token data into DB
  await unboxPeopleModel.update(
    {
      expiration: expireDate,
      resetToken: fpSalt,
      used: false,
    },
    {
      where: {
        email: req.body.email,
      },
    }
  );

  const userInfo = await unboxPeopleModel.findOne({
    where: {
      email: req.body.email,
    },
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
    "src/controllers/emailTemplates/forgotPasswordTemplate.html",
    function (err, html) {
      if (err) {
        console.log("error reading file", err);
        return;
      }
      var template = handlebars.compile(html);
      var replacements = {
        first_name: userInfo.dataValues.first_name,
        resetToken: userInfo.dataValues.resetToken,
      };
      var htmlToSend = template(replacements);

      var mailOptions = {
        from: "mail@redspark.a2hosted.com",
        to: userInfo.dataValues.email,
        subject: "Reset Password Request Unbox Banking",
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
  //create email
  // const message = {
  //     from: process.env.SENDER_ADDRESS,
  //     to: req.body.email,
  //     replyTo: process.env.REPLYTO_ADDRESS,
  //     subject: process.env.FORGOT_PASS_SUBJECT_LINE,
  //     text: 'To reset your password, please click the link below.\n\nhttps://'+process.env.DOMAIN+'/user/reset-password?token='+encodeURIComponent(token)+'&email='+req.body.email
  // };

  // //send email
  // transport.sendMail(message, function (err, info) {
  //    if(err) { console.log(err)}
  //    else { console.log(info); }
  // });

  return res.json({ status: "ok" });
  // });
};

export const resetPassword: RequestHandler = async (req, res) => {
  let token = req.body.token;
  let password = req.body.password;
  let confirmPassword = req.body.confirmPassword;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);
  const data = {
    password: hashPassword,
    used: true,
  };

  const emailExist = await unboxPeopleModel.findOne({
    where: {
      resetToken: token,
    },
  });

  if (!emailExist) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "EMAIL NOT EXIST IN DATABASE!",
    });
  } else {
    if (password !== confirmPassword) {
      return res.status(404).send({
        statusCode: 404,
        status: false,
        message: "BOTH PASSWORDS NOT MATCHED!",
      });
    } else if (password === confirmPassword) {
      const passwordMatch = await unboxPeopleModel.update(data, {
        where: {
          resetToken: token,
        },
      });

      const userInfo = await unboxPeopleModel.findOne({
        where: {
          resetToken: token,
        },
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
        "src/controllers/emailTemplates/resetPasswordTemplate.html",
        function (err, html) {
          if (err) {
            console.log("error reading file", err);
            return;
          }
          var template = handlebars.compile(html);
          var replacements = {
            first_name: userInfo.dataValues.first_name,
          };
          var htmlToSend = template(replacements);

          var mailOptions = {
            from: "mail@redspark.a2hosted.com",
            to: userInfo.dataValues.email,
            subject: "Password Reset Successfully! Unbox Banking",
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
        statusCode: 200,
        status: true,
        message: "PASSWORD RESET SUCCESSFULLY!",
        data: passwordMatch,
      });
    } else {
      return res.send("SOMETHING WENT WRONG! PLEASE TRY AGAIN!");
    }
  }
};
