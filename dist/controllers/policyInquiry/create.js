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
exports.createPolicyInquiry = void 0;
const policyInquiryModel_1 = __importDefault(require("../../model/policyInquiryModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const createPolicyInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    const check = yield unboxPeopleModel_1.default.findOne({
        where: { user_token: token.substring(7) },
    });
    // insert data to faq and send status with object
    const policyInquiry = {
        fullName: req.body.fullName,
        emailAddress: req.body.emailAddress,
        annualIncome: req.body.annualIncome,
        occupation: req.body.occupation,
        education: req.body.education,
        address: req.body.address,
        pinCode: req.body.pinCode,
        city: req.body.city,
        state: req.body.state,
        nationality: req.body.nationality,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        mobileNumber: req.body.mobileNumber,
        panCardNumber: req.body.panCardNumber,
        vehicleNumber: req.body.vehicleNumber,
        vehicleRegistrationDate: req.body.vehicleRegistrationDate,
        vehicleType: req.body.vehicleType,
        nomineeName: req.body.nomineeName,
        nomineeRelation: req.body.nomineeRelation,
        destination: req.body.destination,
        numberOfTravellers: req.body.numberOfTravellers,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        membersDetails: req.body.membersDetails,
        numberOfMembers: req.body.numberOfMembers,
        valueOfBuilding: req.body.valueOfBuilding,
        carpetArea: req.body.carpetArea,
        constructionCostPerSqFt: req.body.constructionCostPerSqFt,
        valueOfHouseHoldItems: req.body.valueOfHouseHoldItems,
        is_active: req.body.is_active,
        organizationName: req.body.organizationName,
        employeeStrength: req.body.employeeStrength,
        userId: check.dataValues.id,
        insuranceCategoryId: req.body.insuranceCategoryId,
        insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        policyId: req.body.policyId,
        insuranceTypeId: req.body.insuranceTypeId,
    };
    const PolicyInquiry = yield policyInquiryModel_1.default.create(policyInquiry);
    const userInfo = yield unboxPeopleModel_1.default.findOne({
        where: {
            id: PolicyInquiry.dataValues.userId,
        },
    });
    const policy = yield policyInquiryModel_1.default.findOne({
        where: {
            id: PolicyInquiry.dataValues.id,
        },
        include: [
            {
                model: insuranceCategoryModel_1.default,
            },
            {
                model: insuranceSubCategoryModel_1.default,
            },
            {
                model: policiesModel_1.default,
            },
        ],
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
    readHTMLFile("src/controllers/emailTemplates/policyInquiryTemplate.html", function (err, html) {
        if (err) {
            console.log("error reading file", err);
            return;
        }
        var template = handlebars_1.default.compile(html);
        var replacements = {
            first_name: userInfo.dataValues.first_name,
            policyName: policy.dataValues.policy.policyName,
            insuranceSubCategoryName: policy.dataValues.insuranceSubCategory.insuranceSubCategoryName,
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: "mail@redspark.a2hosted.com",
            to: userInfo.dataValues.email,
            subject: `Got Inquiry For ${policy.dataValues.insuranceSubCategory.insuranceSubCategoryName} Policy! Unbox Banking`,
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
    if (!PolicyInquiry) {
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
            message: "Policy Inquiry Successfully Created!",
            data: PolicyInquiry,
        });
    }
});
exports.createPolicyInquiry = createPolicyInquiry;
