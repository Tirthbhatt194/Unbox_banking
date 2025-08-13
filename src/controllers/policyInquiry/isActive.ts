import { RequestHandler } from "express";
import policyInquiryModel from "../../model/policyInquiryModel";
import policyModel from "../../model/policiesModel";

export const isActivePolicyInquiry: RequestHandler = async (req, res, next) => {
  // First get all the policy Inquiries
  const policies = await policyInquiryModel.findAll();

  policies.forEach(async (p) => {
    const add_years = (dt: Date, n: number) => {
      return new Date(dt.setFullYear(dt.getFullYear() + n));
    };
    const policy = await policyModel.findOne({
      where: {
        id: p.dataValues.policyId,
      },
    });
    let dt = new Date(p.dataValues.createdAt);
    let expDate = add_years(dt, policy.dataValues.totalPolicyTerm);
    if (new Date() > expDate) {
      let upd = await policyInquiryModel.update(
        { is_active: false },
        {
          where: {
            id: p.dataValues.id,
          },
        }
      );
    }
  });
};
