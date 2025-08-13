import { RequestHandler } from "express";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import nodemailer from "nodemailer";
import fs from "fs";
import handlebars from "handlebars";

export const isActiveUnboxPeople: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await unboxPeopleModel.findOne({
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

  const unboxPeople = {
    is_active: req.body.is_active as Boolean,
  };
  const upda = await unboxPeopleModel.update(unboxPeople, {
    where: {
      id: id,
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

  if (unboxPeople.is_active === true) {
    let transporter = nodemailer.createTransport({
      host: "mail.redspark.a2hosted.com",
      port: 465,
      secure: true,
      auth: {
        user: "mail@redspark.a2hosted.com",
        pass: "Z8[Ju4xm}y*)",
      },
    });

    readHTMLFile(
      "src/controllers/emailTemplates/userActiveTemplate.html",
      function (err, html) {
        if (err) {
          console.log("error reading file", err);
          return;
        }
        var template = handlebars.compile(html);
        var replacements = {
          first_name: upd.dataValues.first_name,
        };
        var htmlToSend = template(replacements);

        var mailOptions = {
          from: "mail@redspark.a2hosted.com",
          to: upd.dataValues.email,
          subject: "Unbox Banking Profile Activated!",
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
  } else {
    let transporter = nodemailer.createTransport({
      host: "mail.redspark.a2hosted.com",
      port: 465,
      secure: true,
      auth: {
        user: "mail@redspark.a2hosted.com",
        pass: "Z8[Ju4xm}y*)",
      },
    });

    readHTMLFile(
      "src/controllers/emailTemplates/userDeactivatedTemplate.html",
      function (err, html) {
        if (err) {
          console.log("error reading file", err);
          return;
        }
        var template = handlebars.compile(html);
        var replacements = {
          first_name: upd.dataValues.first_name,
        };
        var htmlToSend = template(replacements);

        var mailOptions = {
          from: "mail@redspark.a2hosted.com",
          to: upd.dataValues.email,
          subject: "Unbox Banking Profile Deactivated!",
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
  }

  let obj = await unboxPeopleModel.findOne({
    where: {
      id: id,
    },
  });

  res.status(200).send({
    statusCode: 200,
    status: true,
    message: "Data Updated SuccessFully!",
    data: obj,
  });
  return upda;
};
