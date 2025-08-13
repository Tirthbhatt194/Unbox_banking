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
exports.isActivePolicyInquiry = void 0;
const policyInquiryModel_1 = __importDefault(require("../../model/policyInquiryModel"));
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const isActivePolicyInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // First get all the policy Inquiries
    const policies = yield policyInquiryModel_1.default.findAll();
    policies.forEach((p) => __awaiter(void 0, void 0, void 0, function* () {
        const add_years = (dt, n) => {
            return new Date(dt.setFullYear(dt.getFullYear() + n));
        };
        const policy = yield policiesModel_1.default.findOne({
            where: {
                id: p.dataValues.policyId,
            },
        });
        let dt = new Date(p.dataValues.createdAt);
        let expDate = add_years(dt, policy.dataValues.totalPolicyTerm);
        if (new Date() > expDate) {
            let upd = yield policyInquiryModel_1.default.update({ is_active: false }, {
                where: {
                    id: p.dataValues.id,
                },
            });
        }
    }));
});
exports.isActivePolicyInquiry = isActivePolicyInquiry;
