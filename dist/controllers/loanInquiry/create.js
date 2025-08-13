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
exports.createLoanInquiry = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const bankModel_1 = __importDefault(require("../../model/bankModel"));
const loan_1 = __importDefault(require("../../model/loan"));
const loanInquiryModel_1 = __importDefault(require("../../model/loanInquiryModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const createLoanInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const token = req.body.token || req.query.token || req.headers["authorization"];
    const check = yield unboxPeopleModel_1.default.findOne({
        where: { user_token: token.substring(7) },
    });
    const loanInquiry = {
        designation: req.body.designation,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        maritialStatus: req.body.maritialStatus,
        residentialStatus: req.body.residentialStatus,
        address: req.body.address,
        yearsLivedAtaAddress: req.body.yearsLivedAtaAddress,
        employmentStatus: req.body.employmentStatus,
        annualIncomeBeforeTax: req.body.annualIncomeBeforeTax,
        anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
        annualIncomeAfterTax: req.body.annualIncomeAfterTax,
        monthlyIncome: req.body.monthlyIncome,
        peopleDependOnYouFinancially: req.body
            .peopleDependOnYouFinancially,
        immediateWithdrawl: req.body.immediateWithdrawl,
        emailNotification: req.body.emailNotification,
        userId: check === null || check === void 0 ? void 0 : check.dataValues.id,
        loanId: req.body.loanId,
        bankId: req.body.bankId,
        loanTypeId: req.body.loanTypeId,
    };
    const LoanInquiry = yield loanInquiryModel_1.default.create(loanInquiry);
    console.log("id=====>", check);
    const userInfo = yield unboxPeopleModel_1.default.findOne({
        where: {
            id: LoanInquiry.dataValues.userId,
        },
    });
    const Loan = yield loanInquiryModel_1.default.findOne({
        where: {
            id: LoanInquiry.dataValues.id,
        },
        include: [
            {
                model: loan_1.default,
            },
            {
                model: bankModel_1.default,
            },
        ],
    });
    // let data = {
    //   first_name: userInfo.dataValues.first_name,
    //   loanName: Loan.dataValues.loan.loanName,
    //   name: Loan.dataValues.bank.name,
    //   to: userInfo.dataValues.email,
    //   path: "src/controllers/emailTemplates/loanInquiryTemplate.html",
    // };
    // sendMail(data);
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
    readHTMLFile("src/controllers/emailTemplates/loanInquiryTemplate.html", function (err, html) {
        if (err) {
            console.log("error reading file", err);
            return;
        }
        var template = handlebars_1.default.compile(html);
        var replacements = {
            first_name: userInfo.dataValues.first_name,
            loanName: Loan.dataValues.loan.loanName,
            name: Loan.dataValues.bank.name,
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: "mail@redspark.a2hosted.com",
            to: userInfo.dataValues.email,
            subject: `Got inquiry for ${Loan.dataValues.loan.loanName}! Unbox Banking `,
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
    // If insert success send data object with status
    if (!LoanInquiry) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed to insert data",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "Loan Inquiry Successfully Created!",
            data: LoanInquiry,
        });
    }
});
exports.createLoanInquiry = createLoanInquiry;
