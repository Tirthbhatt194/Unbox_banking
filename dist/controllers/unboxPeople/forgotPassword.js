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
exports.resetPassword = exports.fireEmail = void 0;
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const crypto_1 = __importDefault(require("crypto"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const fireEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let email1 = yield req.body.email;
    // const user = await unboxPeopleModel.findOne({
    // },
    // {
    //     where: {
    //         email: email
    //     }
    // })
    console.log("EMAILLLLL+++++++>>>>>>", req.body.email);
    var email = yield unboxPeopleModel_1.default.findOne({
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
    yield unboxPeopleModel_1.default.update({
        used: true,
    }, {
        where: {
            email: req.body.email,
        },
    });
    //Create a random reset token
    var fpSalt = crypto_1.default.randomBytes(64).toString("base64");
    fpSalt = fpSalt.replace(/\//g, "-");
    //token expires after one hour
    // var expireDate = new Date(new Date().getTime() + 60 * 60 * 1000);
    // let currentTime = new Date().toLocaleString(undefined, {
    //   timeZone: "Asia/Kolkata",
    // });
    var expireDate = new Date(new Date().getTime() + 60 * 60 * 1000);
    // console.log("DATE======>", new Date(new Date().getTime() + 60 * 60 * 1000));
    //insert token data into DB
    yield unboxPeopleModel_1.default.update({
        expiration: expireDate,
        resetToken: fpSalt,
        used: false,
    }, {
        where: {
            email: req.body.email,
        },
    });
    const userInfo = yield unboxPeopleModel_1.default.findOne({
        where: {
            email: req.body.email,
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
    readHTMLFile("src/controllers/emailTemplates/forgotPasswordTemplate.html", function (err, html) {
        if (err) {
            console.log("error reading file", err);
            return;
        }
        var template = handlebars_1.default.compile(html);
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
            }
            else {
                console.log("Email sent: " + info.response);
            }
        });
    });
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
});
exports.fireEmail = fireEmail;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.body.token;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const salt = yield bcrypt_1.default.genSalt(saltRounds);
    const hashPassword = yield bcrypt_1.default.hash(password, salt);
    const data = {
        password: hashPassword,
        used: true,
    };
    const emailExist = yield unboxPeopleModel_1.default.findOne({
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
    }
    else {
        if (password !== confirmPassword) {
            return res.status(404).send({
                statusCode: 404,
                status: false,
                message: "BOTH PASSWORDS NOT MATCHED!",
            });
        }
        else if (password === confirmPassword) {
            const passwordMatch = yield unboxPeopleModel_1.default.update(data, {
                where: {
                    resetToken: token,
                },
            });
            const userInfo = yield unboxPeopleModel_1.default.findOne({
                where: {
                    resetToken: token,
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
            readHTMLFile("src/controllers/emailTemplates/resetPasswordTemplate.html", function (err, html) {
                if (err) {
                    console.log("error reading file", err);
                    return;
                }
                var template = handlebars_1.default.compile(html);
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
                    }
                    else {
                        console.log("Email sent: " + info.response);
                    }
                });
            });
            return res.status(200).send({
                statusCode: 200,
                status: true,
                message: "PASSWORD RESET SUCCESSFULLY!",
                data: passwordMatch,
            });
        }
        else {
            return res.send("SOMETHING WENT WRONG! PLEASE TRY AGAIN!");
        }
    }
});
exports.resetPassword = resetPassword;
