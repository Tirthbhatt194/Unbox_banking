"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMail = (data) => {
    var readHTMLFile = (path, callback) => {
        fs_1.default.readFile(path, { encoding: "utf-8" }, function (err, html) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };
    let transporter = nodemailer_1.default.createTransport({
        host: "mail.redspark.a2hosted.com",
        port: 465,
        secure: true,
        auth: {
            user: "mail@redspark.a2hosted.com",
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
        var template = handlebars_1.default.compile(html);
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
            }
            else {
                console.log("Email sent: " + info.response);
            }
        });
    });
};
exports.sendMail = sendMail;
