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
exports.getCitiesStateWise = void 0;
const cityModel_1 = __importDefault(require("../../model/cityModel"));
const stateModel_1 = __importDefault(require("../../model/stateModel"));
const getCitiesStateWise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.name;
    let state = yield stateModel_1.default.findOne({
        where: {
            name: id,
        },
    });
    let cities = yield cityModel_1.default.findAll({
        where: {
            state_id: state.dataValues.id,
        },
    });
    if (!cities) {
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
            data: cities,
        });
    }
});
exports.getCitiesStateWise = getCitiesStateWise;
