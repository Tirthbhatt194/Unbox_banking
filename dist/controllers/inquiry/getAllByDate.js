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
exports.AllInquiriesByDate = void 0;
const inquiry_1 = __importDefault(require("../../model/inquiry"));
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const AllInquiriesByDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const id = req.body.insuranceCategoryId;
    if (!startDate && !endDate && id === "All") {
        const inquiries = yield inquiry_1.default.findAll({
            include: [
                { model: insuranceCategoryModel_1.default, attributes: ["insuranceName"] },
                {
                    model: insuranceSubCategoryModel_1.default,
                    attributes: ["insuranceSubCategoryName"],
                },
            ],
        });
        // let datewiseInquiries = [];
        // // console.log("Create", inquiries[0].dataValues.createdAt);
        // let str = `${startDate}T00:00:00.000Z`;
        // let st = new Date(str);
        // let end2 = `${endDate}T23:59:59.000Z`;
        // let en = new Date(end2);
        // inquiries.forEach((i) => {
        //   let date1 = new Date(i.dataValues.createdAt);
        //   let date = date1.getDate();
        //   if (date1 > st && date1 < en) {
        //     const d = {
        //       ...i.dataValues,
        //       createdAt: i.dataValues.createdAt,
        //     };
        //     datewiseInquiries.push(d);
        //   }
        // });
        return res.status(200).send(inquiries);
    }
    else if (startDate && endDate && id === "All") {
        const inquiries = yield inquiry_1.default.findAll({
            include: [
                { model: insuranceCategoryModel_1.default, attributes: ["insuranceName"] },
                {
                    model: insuranceSubCategoryModel_1.default,
                    attributes: ["insuranceSubCategoryName"],
                },
            ],
        });
        let datewiseInquiries = [];
        // console.log("Create", inquiries[0].dataValues.createdAt);
        let str = `${startDate}T00:00:00.000Z`;
        let st = new Date(str);
        let end2 = `${endDate}T23:59:59.000Z`;
        let en = new Date(end2);
        inquiries.forEach((i) => {
            let date1 = new Date(i.dataValues.createdAt);
            let date = date1.getDate();
            if (date1 > st && date1 < en) {
                const d = Object.assign(Object.assign({}, i.dataValues), { createdAt: i.dataValues.createdAt });
                datewiseInquiries.push(d);
            }
        });
        return res.status(200).send(datewiseInquiries);
    }
    else if (!startDate && !endDate && id) {
        const inquiries = yield inquiry_1.default.findAll({
            where: {
                insuranceCategoryId: id
            },
            include: [
                { model: insuranceCategoryModel_1.default, attributes: ["insuranceName"] },
                {
                    model: insuranceSubCategoryModel_1.default,
                    attributes: ["insuranceSubCategoryName"],
                },
            ],
        });
        return res.status(200).send(inquiries);
    }
    else {
        const inquiries = yield inquiry_1.default.findAll({
            where: {
                insuranceCategoryId: id
            },
            include: [
                { model: insuranceCategoryModel_1.default, attributes: ["insuranceName"] },
                {
                    model: insuranceSubCategoryModel_1.default,
                    attributes: ["insuranceSubCategoryName"],
                },
            ],
        });
        let datewiseInquiries = [];
        // console.log("Create", inquiries[0].dataValues.createdAt);
        let str = `${startDate}T00:00:00.000Z`;
        let st = new Date(str);
        let end2 = `${endDate}T23:59:59.000Z`;
        let en = new Date(end2);
        inquiries.forEach((i) => {
            let date1 = new Date(i.dataValues.createdAt);
            let date = date1.getDate();
            if (date1 > st && date1 < en) {
                const d = Object.assign(Object.assign({}, i.dataValues), { createdAt: i.dataValues.createdAt });
                datewiseInquiries.push(d);
            }
        });
        return res.status(200).send(datewiseInquiries);
    }
});
exports.AllInquiriesByDate = AllInquiriesByDate;
