// import { RequestHandler } from "express";
// import loanInquiryModel from "../../model/loanInquiryModel";
// import loanModel from "../../model/loan";
// import loanTypeModel from "../../model/loanTypeModel";

// export const getSpecificUserLoanDetail: RequestHandler = async (req, res, next) => {
//   let userId = req.params.id;
//   // find all data and join respective foreign key tables to it
//   const proj = await loanInquiryModel.findAll({
//     where: {
//       userId: userId,
//     },
//   });
//   let loanIds = [];
//   proj.forEach((p) => {
//     loanIds.push(p.dataValues.loanId);
//   });

//   const loans = await loanModel.findAll({
//     where: {
//       id: loanIds,
//     },
//     include: [
//       {
//         model: loanTypeModel,
//       },
//     ],
//   });

//   // If data exists send status with object
//   if (!proj) {
//     return res.status(404).send({
//       message: "Data Not Found!",
//     });
//   } else {
//     return res.status(200).send(loans);
//   }
// };

import { RequestHandler } from "express";
import loanInquiryModel from "../../model/loanInquiryModel";
import loanModel from "../../model/loan";
import loanTypeModel from "../../model/loanTypeModel";

export const getSpecificUserLoanDetail: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Get all loan inquiry records for the user
    const loanInquiries = await loanInquiryModel.findAll({
      where: { userId },
      attributes: ["loanId"],
    });

    // Get all loans associated with the loan inquiry records
    const loanIds = loanInquiries.map((inquiry: any) => inquiry.loanId);
    const loans = await loanModel.findAll({
      where: { id: loanIds },
      include: [
        {
          model: loanTypeModel,
        },
      ],
    });

    // If no loans found, return 404
    if (loans.length === 0) {
      return res.status(204).send("No loans found for this user");
    }

    return res.status(200).send(loans);
  } catch (err) {
    next(err);
  }
};
