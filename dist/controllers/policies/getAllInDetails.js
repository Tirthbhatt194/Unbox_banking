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
exports.GetAllInDetails = void 0;
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const insuranceProviderModel_1 = __importDefault(require("../../model/insuranceProviderModel"));
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const insuranceTypeModel_1 = __importDefault(require("../../model/insuranceTypeModel"));
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const GetAllInDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // find all data and join respective foreign key tables to it
    let insuranceProviderId = `[${req.query.insuranceProviderId}]`;
    let lifeCover = req.query.lifeCover;
    let claimSetteled = req.query.claimSetteled;
    if (lifeCover !== "" &&
        claimSetteled !== "" &&
        insuranceProviderId !== "[]" &&
        lifeCover !== undefined &&
        claimSetteled !== undefined &&
        insuranceProviderId !== "[undefined]") {
        console.log("1");
        const policy = yield policiesModel_1.default.findAll({
            where: {
                lifeCover: lifeCover,
                claimSetteled: claimSetteled,
                insuranceProviderId: JSON.parse(insuranceProviderId),
            },
            include: [
                {
                    model: insuranceCategoryModel_1.default,
                },
                {
                    model: insuranceProviderModel_1.default,
                },
                {
                    model: insuranceSubCategoryModel_1.default,
                },
                {
                    model: insuranceTypeModel_1.default,
                },
            ],
        });
        // If data exists send status with object
        if (!policy) {
            return res.status(404).send({
                statusCode: 404,
                status: false,
                message: "Data Not Found!",
            });
        }
        else {
            return res.status(200).send({
                statusCode: 200,
                status: true,
                message: "SuccessFully Got All Data!",
                data: policy,
            });
        }
    }
    else if (lifeCover !== undefined) {
        console.log("2");
        const policy = yield policiesModel_1.default.findAll({
            where: {
                lifeCover: lifeCover,
            },
            include: [
                {
                    model: insuranceCategoryModel_1.default,
                },
                {
                    model: insuranceProviderModel_1.default,
                },
                {
                    model: insuranceSubCategoryModel_1.default,
                },
                {
                    model: insuranceTypeModel_1.default,
                },
            ],
            // include: [
            //   {
            //     model: bankModel,
            //     attributes: ["name"],
            //   },
            // ],
        });
        // If data exists send status with object
        if (!policy) {
            return res.status(404).send({
                statusCode: 404,
                status: false,
                message: "Data Not Found!",
            });
        }
        else {
            return res.status(200).send({
                statusCode: 200,
                status: true,
                message: "SuccessFully Got All Data!",
                data: policy,
            });
        }
    }
    else if (claimSetteled !== undefined) {
        console.log("3");
        const policy = yield policiesModel_1.default.findAll({
            where: {
                claimSetteled: claimSetteled,
            },
            include: [
                {
                    model: insuranceCategoryModel_1.default,
                },
                {
                    model: insuranceProviderModel_1.default,
                },
                {
                    model: insuranceSubCategoryModel_1.default,
                },
                {
                    model: insuranceTypeModel_1.default,
                },
            ],
            // include: [
            //   {
            //     model: bankModel,
            //     attributes: ["name"],
            //   },
            // ],
        });
        // If data exists send status with object
        if (!policy) {
            return res.status(404).send({
                statusCode: 404,
                status: false,
                message: "Data Not Found!",
            });
        }
        else {
            return res.status(200).send({
                statusCode: 200,
                status: true,
                message: "SuccessFully Got All Data!",
                data: policy,
            });
        }
    }
    else if (insuranceProviderId !== "[undefined]") {
        console.log("4");
        const policy = yield policiesModel_1.default.findAll({
            where: {
                insuranceProviderId: JSON.parse(insuranceProviderId),
            },
            include: [
                {
                    model: insuranceCategoryModel_1.default,
                },
                {
                    model: insuranceProviderModel_1.default,
                },
                {
                    model: insuranceSubCategoryModel_1.default,
                },
                {
                    model: insuranceTypeModel_1.default,
                },
            ],
        });
        // If data exists send status with object
        if (!policy) {
            return res.status(404).send({
                statusCode: 404,
                status: false,
                message: "Data Not Found!",
            });
        }
        else {
            return res.status(200).send({
                statusCode: 200,
                status: true,
                message: "SuccessFully Got All Data!",
                data: policy,
            });
        }
    }
    else {
        console.log("4");
        const policy = yield policiesModel_1.default.findAll({
            include: [
                {
                    model: insuranceCategoryModel_1.default,
                },
                {
                    model: insuranceProviderModel_1.default,
                },
                {
                    model: insuranceSubCategoryModel_1.default,
                },
                {
                    model: insuranceTypeModel_1.default,
                },
            ],
        });
        // .then((data) => {
        //   const da = data.map(async (d) => {
        //     let bank = await bankModel
        //       .findOne({
        //         where: {
        //           id: d.dataValues.bankId,
        //         },
        //       })
        //       .then((ba) => {
        //         console.log("BA", ba.dataValues.name);
        //         return {
        //           ...d.dataValues,
        //           bankName: ba.dataValues.name,
        //         };
        //       });
        //     console.log("BANKKKK", bank);
        //     return bank;
        //     // console.log("dA", bank);
        //     // console.log("DATAAA", {
        //     //   ...d.dataValues,
        //     //   bankName: bank.dataValues.name,
        //     // });
        //   });
        // console.log("DAA", da);
        //   return data
        // }
        // .catch((e) => {
        //   console.log(e);
        //   return e;
        // });
        // If data exists send status with object
        if (!policy) {
            return res.status(404).send({
                statusCode: 404,
                status: false,
                message: "Data Not Found!",
            });
        }
        else {
            return res.status(200).send({
                statusCode: 200,
                status: true,
                message: "SuccessFully Got All Data!",
                data: policy,
            });
        }
    }
});
exports.GetAllInDetails = GetAllInDetails;
