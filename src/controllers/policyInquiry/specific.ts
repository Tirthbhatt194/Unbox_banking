// import { RequestHandler } from "express";
// import policyInquiryModel from "../../model/policyInquiryModel";
// import policyModel from "../../model/policiesModel";

// export const getSpecificUserPolicyDetail: RequestHandler = async (
//   req,
//   res,
//   next
// ) => {
//   let userId = req.params.id;
//   // find all data and join respective foreign key tables to it
//   const proj = await policyInquiryModel.findAll({
//     where: {
//       userId: userId,
//     },
//   });
//   let policyIds = [];
//   proj.forEach((p) => {
//     policyIds.push(p.dataValues.policyId);
//   });

//   const policies = await policyModel.findAll({
//     where: {
//       id: policyIds,
//     },
//   });

//   // If data exists send status with object
//   if (!proj) {
//     return res.status(404).send({
//       message: "Data Not Found!",
//     });
//   } else {
//     return res.status(200).send(policies);
//   }
// };

// *************************************************************************************

// import { RequestHandler } from "express";
// import policyInquiryModel from "../../model/policyInquiryModel";
// import policyModel from "../../model/policiesModel";

// export const getSpecificUserPolicyDetail: RequestHandler = async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     // find all data and join respective foreign key tables to it
//     const policyInquiries = await policyInquiryModel.findAll({
//       where: { userId },
//       attributes: ["policyId"],
//
//     });
//     const policyIds = policyInquiries.map((inquiry: any) => inquiry.policyId);

//     const policies = await policyModel.findAll({
//       where: { id: policyIds },
//
//     });

//     // If data exists send status with object
//     if (policies.length > 0) {
//       return res.status(200).send(policies);
//     } else {
//       return res.status(404).send({
//         message: "Data Not Found!",
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// *************************************************************************************

// import { RequestHandler } from "express";
// import policyInquiryModel from "../../model/policyInquiryModel";
// import policyModel from "../../model/policiesModel";

// export const getSpecificUserPolicyDetail: RequestHandler = async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     const policyInquiries = await policyInquiryModel.findAll({
//       where: { userId },
//       attributes: ["policyId"],
//     });

//     if (policyInquiries.length === 0) {
//       return res.status(404).send({ message: "Data Not Found!" });
//     }

//     const policyIds = policyInquiries.map((pi: any) => pi.policyId);
//     const policies = await policyModel.findAll({ where: { id: policyIds } });

//     return res.status(200).send(policies);
//   } catch (error) {
//     next(error);
//   }
// };

import { RequestHandler } from "express";
import policyInquiryModel from "../../model/policyInquiryModel";
import policyModel from "../../model/policiesModel";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";

export const getSpecificUserPolicyDetail: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Get all policy inquiry records for the user
    const policyInquiries = await policyInquiryModel.findAll({
      where: { userId },
      include: [
        {
          model: policyModel,
        },
        {
          model: insuranceCategoryModel,
          attributes: ["insuranceName"],
        },
      ],
    });

    // Get all policies associated with the policy inquiry records
    // const policyIds = policyInquiries.map((inquiry: any) => inquiry.policyId);
    // const policies = await policyModel.findAll({
    //   where: { id: policyIds },
    // });

    // If no policies found, return 404
    if (policyInquiries.length === 0) {
      return res.status(204).send("No policies found for this user");
    }

    return res.status(200).send(policyInquiries);
  } catch (err) {
    next(err);
  }
};
