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
exports.createAllCardInquiry = exports.createAllLoanInquiry = exports.createAllPolicyInquiry = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs_1 = __importDefault(require("fs"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const allInquiriesModel_1 = __importDefault(require("../../model/allInquiriesModel"));
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const insuranceTypeModel_1 = __importDefault(require("../../model/insuranceTypeModel"));
const loan_1 = __importDefault(require("../../model/loan"));
const bankModel_1 = __importDefault(require("../../model/bankModel"));
const loanTypeModel_1 = __importDefault(require("../../model/loanTypeModel"));
const cardModel_1 = __importDefault(require("../../model/cardModel"));
const email_1 = require("../../middleware/email");
const createAllPolicyInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to Bank and send status with object
    const policy = req.body.policyId;
    const insuranceCategory = req.body.insuranceCategoryId;
    const insuranceSubCategory = req.body.insuranceSubCategoryId;
    const insuranceType = req.body.insuranceTypeId;
    const policyObj = yield policiesModel_1.default.findOne({
        where: {
            id: policy,
        },
    });
    const insuranceCategoryObj = yield insuranceCategoryModel_1.default.findOne({
        where: {
            id: insuranceCategory,
        },
    });
    const insuranceSubCategoryObj = yield insuranceSubCategoryModel_1.default.findOne({
        where: {
            id: insuranceSubCategory,
        },
    });
    const insuranceCategoryTypeObj = yield insuranceTypeModel_1.default.findOne({
        where: {
            id: insuranceType,
        },
    });
    const data = {
        type: "policy",
        data: {
            policyName: policyObj.dataValues.policyName,
            policyFeatures: policyObj.dataValues.policyFeatures,
            lifeCover: policyObj.dataValues.lifeCover,
            claimSetteled: policyObj.dataValues.claimSetteled,
            maxAgeLimit: policyObj.dataValues.maxAgeLimit,
            coverTillAge: policyObj.dataValues.coverTillAge,
            cashlessHospital: policyObj.dataValues.cashlessHospital,
            cashlessGarages: policyObj.dataValues.cashlessGarages,
            IDV: policyObj.dataValues.IDV,
            covered: policyObj.dataValues.covered,
            notCovered: policyObj.dataValues.notCovered,
            premium: policyObj.dataValues.premium,
            lumpsumPayout: policyObj.dataValues.lumpsumPayout,
            medicalExpence: policyObj.dataValues.medicalExpence,
            passportLoss: policyObj.dataValues.passportLoss,
            baggageLoss: policyObj.dataValues.baggageLoss,
            returnOfPremium: policyObj.dataValues.returnOfPremium,
            totalPolicyTerm: policyObj.dataValues.totalPolicyTerm,
            policyImage: policyObj.dataValues.policyImage,
            insuranceCategory: insuranceCategoryObj.dataValues.insuranceName,
            insuranceImage: insuranceCategoryObj.dataValues.insuranceImage,
            insuranceSubCategory: insuranceSubCategoryObj.dataValues.insuranceSubCategoryName,
            insuranceSubCategoryImage: insuranceSubCategoryObj.dataValues.insuranceSubCategoryImage,
            insuranceCategoryType: insuranceCategoryTypeObj.dataValues.insuranceCategoryTypeName,
            insuranceCategoryTypeImage: insuranceCategoryTypeObj.dataValues.insuranceCategoryTypeImage,
            address: req.body.address,
            annualIncome: req.body.annualIncome,
            anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
            city: req.body.city,
            dateOfBirth: req.body.dateOfBirth,
            designation: req.body.designation,
            emailAddress: req.body.emailAddress,
            employmentStatus: req.body.employmentStatus,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            maritialStatus: req.body.maritialStatus,
            mobileNumber: req.body.mobileNumber,
            monthlyIncome: req.body.monthlyIncome,
            peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
            residentialStatus: req.body.residentialStatus,
            pincode: req.body.pincode,
            state: req.body.state,
        },
        userContactNumber: req.body.mobileNumber,
        userEmail: req.body.emailAddress,
        userId: null,
    };
    const userData = {
        postalAddress: req.body.address,
        annualIncome: req.body.annualIncome,
        anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
        city: req.body.city,
        dateOfBirth: req.body.dateOfBirth,
        designation: req.body.designation,
        email: req.body.emailAddress,
        employmentStatus: req.body.employmentStatus,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        maritialStatus: req.body.maritialStatus,
        contactNumber: req.body.mobileNumber,
        monthlyIncome: req.body.monthlyIncome,
        peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
        residentialStatus: req.body.residentialStatus,
        pincode: req.body.pincode,
        state: req.body.state,
    };
    const user = yield unboxPeopleModel_1.default.findOne({
        where: {
            contactNumber: req.body.mobileNumber,
            email: userData.email,
        },
    });
    if (user) {
        yield unboxPeopleModel_1.default.update(userData, {
            where: {
                contactNumber: userData.contactNumber,
            },
        });
    }
    const token = req.body.token;
    if (token === null) {
        data.userId = null;
    }
    else {
        data.userId = user.dataValues.id;
    }
    const inquiry = yield allInquiriesModel_1.default.create(data);
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
    readHTMLFile("src/controllers/emailTemplates/policyInquiryTemplate.html", function (err, html) {
        if (err) {
            console.log("error reading file", err);
            return;
        }
        var template = handlebars_1.default.compile(html);
        var replacements = {
            first_name: req.body.firstName,
            policyName: policyObj.dataValues.policyName,
            insuranceSubCategoryName: insuranceSubCategoryObj.dataValues.insuranceSubCategoryName,
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: "mail@redspark.a2hosted.com",
            to: req.body.emailAddress,
            subject: `Got Inquiry For ${insuranceSubCategoryObj.dataValues.insuranceSubCategoryName} Policy! Unbox Banking`,
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
    if (!inquiry) {
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
            message: "inquiry Successfully Created!",
            data: inquiry,
        });
    }
});
exports.createAllPolicyInquiry = createAllPolicyInquiry;
const createAllLoanInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to Bank and send status with object
    const loan = req.body.loanId;
    const bank = req.body.bankId;
    const loanType = req.body.loanTypeId;
    const loanObj = yield loan_1.default.findOne({
        where: {
            id: loan,
        },
    });
    const bankObj = yield bankModel_1.default.findOne({
        where: {
            id: bank,
        },
    });
    const loanTypeObj = yield loanTypeModel_1.default.findOne({
        where: {
            id: loanType,
        },
    });
    const data = {
        type: "loan",
        data: {
            loanName: loanObj.dataValues.loanName,
            interestRate: loanObj.dataValues.interestRate,
            processingFee: loanObj.dataValues.processingFee,
            loanAmount: loanObj.dataValues.loanAmount,
            tenureAmount: loanObj.dataValues.tenureAmount,
            features: loanObj.dataValues.features,
            benifits: loanObj.dataValues.benifits,
            documents: loanObj.dataValues.documents,
            bankName: bankObj.dataValues.name,
            bankImage: bankObj.dataValues.bankImage,
            loanType: loanTypeObj.dataValues.loanTypeName,
            loanTypeImage: loanTypeObj.dataValues.image,
            address: req.body.address,
            annualIncome: req.body.annualIncome,
            anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
            city: req.body.city,
            dateOfBirth: req.body.dateOfBirth,
            designation: req.body.designation,
            emailAddress: req.body.emailAddress,
            employmentStatus: req.body.employmentStatus,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            maritialStatus: req.body.maritialStatus,
            mobileNumber: req.body.mobileNumber,
            monthlyIncome: req.body.monthlyIncome,
            peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
            residentialStatus: req.body.residentialStatus,
            pincode: req.body.pincode,
            state: req.body.state,
        },
        userContactNumber: req.body.mobileNumber,
        userEmail: req.body.emailAddress,
        userId: null,
    };
    const userData = {
        postalAddress: req.body.address,
        annualIncome: req.body.annualIncome,
        anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
        city: req.body.city,
        dateOfBirth: req.body.dateOfBirth,
        designation: req.body.designation,
        email: req.body.emailAddress,
        employmentStatus: req.body.employmentStatus,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        maritialStatus: req.body.maritialStatus,
        contactNumber: req.body.mobileNumber,
        monthlyIncome: req.body.monthlyIncome,
        peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
        residentialStatus: req.body.residentialStatus,
        pincode: req.body.pincode,
        state: req.body.state,
    };
    const user = yield unboxPeopleModel_1.default.findOne({
        where: {
            contactNumber: req.body.mobileNumber,
            email: userData.email,
        },
    });
    if (user) {
        yield unboxPeopleModel_1.default.update(userData, {
            where: {
                contactNumber: userData.contactNumber,
            },
        });
    }
    const token = req.body.token;
    if (token === null) {
        data.userId = null;
    }
    else {
        data.userId = user.dataValues.id;
    }
    const inquiry = yield allInquiriesModel_1.default.create(data);
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
            first_name: req.body.firstName,
            loanName: loanObj.dataValues.loanName,
            name: bankObj.dataValues.name,
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: "mail@redspark.a2hosted.com",
            to: req.body.emailAddress,
            subject: `Got inquiry for ${loanObj.dataValues.loanName}! Unbox Banking `,
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
    if (!inquiry) {
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
            message: "inquiry Successfully Created!",
            data: inquiry,
        });
    }
});
exports.createAllLoanInquiry = createAllLoanInquiry;
const createAllCardInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to Bank and send status with object
    const card = req.body.cardId;
    const bank = req.body.bankId;
    const cardObj = yield cardModel_1.default.findOne({
        where: {
            id: card,
        },
    });
    const bankObj = yield bankModel_1.default.findOne({
        where: {
            id: bank,
        },
    });
    const data = {
        type: "card",
        data: {
            cardName: cardObj.dataValues.cardName,
            cardCategory: cardObj.dataValues.cardCategory,
            cardType: cardObj.dataValues.cardType,
            cardImage: cardObj.dataValues.cardImage,
            cardFeatures: cardObj.dataValues.cardFeatures,
            cardRewards: cardObj.dataValues.cardRewards,
            joiningFee: cardObj.dataValues.joiningFee,
            paymentNetwork: cardObj.dataValues.paymentNetwork,
            joiningPerks: cardObj.dataValues.joiningPerks,
            documents: cardObj.dataValues.documents,
            cashWithdrawalFee: cardObj.dataValues.cashWithdrawalFee,
            benifits: cardObj.dataValues.benifits,
            feeDetails: cardObj.dataValues.feeDetails,
            bankName: bankObj.dataValues.name,
            bankImage: bankObj.dataValues.bankImage,
            address: req.body.address,
            annualIncome: req.body.annualIncome,
            anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
            annualFee: cardObj.dataValues.annualFee,
            city: req.body.city,
            dateOfBirth: req.body.dateOfBirth,
            designation: req.body.designation,
            emailAddress: req.body.emailAddress,
            employmentStatus: req.body.employmentStatus,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            maritialStatus: req.body.maritialStatus,
            mobileNumber: req.body.mobileNumber,
            monthlyIncome: req.body.monthlyIncome,
            peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
            residentialStatus: req.body.residentialStatus,
            pincode: req.body.pincode,
            state: req.body.state,
        },
        userContactNumber: req.body.mobileNumber,
        userEmail: req.body.emailAddress,
        userId: null,
    };
    const userData = {
        postalAddress: req.body.address,
        annualIncome: req.body.annualIncome,
        anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
        city: req.body.city,
        dateOfBirth: req.body.dateOfBirth,
        designation: req.body.designation,
        email: req.body.emailAddress,
        employmentStatus: req.body.employmentStatus,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        maritialStatus: req.body.maritialStatus,
        contactNumber: req.body.mobileNumber,
        monthlyIncome: req.body.monthlyIncome,
        peopleDependOnYouFinancially: req.body.peopleDependOnYouFinancially,
        residentialStatus: req.body.residentialStatus,
        pincode: req.body.pincode,
        state: req.body.state,
    };
    const user = yield unboxPeopleModel_1.default.findOne({
        where: {
            contactNumber: req.body.mobileNumber,
            email: userData.email,
        },
    });
    if (user) {
        yield unboxPeopleModel_1.default.update(userData, {
            where: {
                contactNumber: userData.contactNumber,
            },
        });
    }
    const token = req.body.token;
    if (token === null) {
        data.userId = null;
    }
    else {
        data.userId = user.dataValues.id;
    }
    const inquiry = yield allInquiriesModel_1.default.create(data);
    let data1 = {
        to: req.body.emailAddress,
        cardName: cardObj.dataValues.cardName,
        first_name: req.body.firstName,
        name: bankObj.dataValues.name,
        path: "src/controllers/emailTemplates/cardInquiryTemplate.html",
    };
    (0, email_1.sendMail)(data1);
    // If insert success send data object with status
    if (!inquiry) {
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
            message: "inquiry Successfully Created!",
            data: inquiry,
        });
    }
});
exports.createAllCardInquiry = createAllCardInquiry;
