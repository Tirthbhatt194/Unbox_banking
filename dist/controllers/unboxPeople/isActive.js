"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isActiveUnboxPeople = void 0;
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const isActiveUnboxPeople = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield unboxPeopleModel_1.default.findOne({
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
        is_active: req.body.is_active,
    };
    const upda = yield unboxPeopleModel_1.default.update(unboxPeople, {
        where: {
            id: id,
        },
    });
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
    if (unboxPeople.is_active === true) {
        let transporter = nodemailer_1.default.createTransport({
            host: "mail.redspark.a2hosted.com",
            port: 465,
            secure: true,
            auth: {
                user: "mail@redspark.a2hosted.com",
                pass: "Z8[Ju4xm}y*)",
            },
        });
        readHTMLFile("src/controllers/emailTemplates/userActiveTemplate.html", function (err, html) {
            if (err) {
                console.log("error reading file", err);
                return;
            }
            var template = handlebars_1.default.compile(html);
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
                }
                else {
                    console.log("Email sent: " + info.response);
                }
            });
        });
    }
    else {
        let transporter = nodemailer_1.default.createTransport({
            host: "mail.redspark.a2hosted.com",
            port: 465,
            secure: true,
            auth: {
                user: "mail@redspark.a2hosted.com",
                pass: "Z8[Ju4xm}y*)",
            },
        });
        readHTMLFile("src/controllers/emailTemplates/userDeactivatedTemplate.html", function (err, html) {
            if (err) {
                console.log("error reading file", err);
                return;
            }
            var template = handlebars_1.default.compile(html);
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
                }
                else {
                    console.log("Email sent: " + info.response);
                }
            });
        });
    }
    let obj = yield unboxPeopleModel_1.default.findOne({
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
});
exports.isActiveUnboxPeople = isActiveUnboxPeople;
