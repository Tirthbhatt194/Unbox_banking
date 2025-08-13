import fs from "fs";
import handlebars from "handlebars";
import nodemailer from "nodemailer";

export const sendMail = (data) => {
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

  readHTMLFile(data.path, function (err, html) {
    if (err) {
      console.log("error reading file", err);
      return;
    }
    var template = handlebars.compile(html);
    var replacements;

    if (data.cardName) {
      replacements = {
        first_name: data.first_name,
        cardName: data.cardName,
        name: data.name,
      };
    }

    var htmlToSend = template(replacements);

    var mailOptions = {
      from: "mail@redspark.a2hosted.com",
      to: data.to,
      subject: `Got inquiry for ${data.cardName}! Unbox Banking `,
      html: htmlToSend,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
};
