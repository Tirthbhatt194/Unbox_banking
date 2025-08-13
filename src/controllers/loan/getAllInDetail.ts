import { RequestHandler } from "express";
import bankModel from "../../model/bankModel";
import loanModel from "../../model/loan";
import loanTypeModel from "../../model/loanTypeModel";

export const getAllLoanInDetail: RequestHandler = async (req, res, next) => {
  let bankId = `[${req.query.bankId}]`;

  if (bankId !== "[]" && bankId !== "[undefined]") {
    const proj = await loanModel.findAll({
      where: {
        bankId: JSON.parse(bankId),
      },
      include: [
        {
          model: bankModel,
        },
        {
          model: loanTypeModel,
        },
      ],
    });

    let newLoan = proj.map((l) => {
      return {
        ...l.dataValues,
        details: JSON.parse(l.dataValues.details),
      };
    });

    // If data exists send status with object
    if (!proj) {
      return res.status(404).send({
        statusCode: 404,
        status: false,
        message: "Data Not Found!",
      });
    } else {
      return res.status(200).send({
        statusCode: 200,
        status: true,
        message: "SuccessFully Got All Data!",
        data: newLoan,
      });
    }
  } else {
    const proj = await loanModel.findAll({
      include: [
        {
          model: bankModel,
        },
        {
          model: loanTypeModel,
        },
      ],
    });
    let newLoan = proj.map((l) => {
      return {
        ...l.dataValues,
        details: JSON.parse(l.dataValues.details),
      };
    });
    // If data exists send status with object
    if (!proj) {
      return res.status(404).send({
        statusCode: 404,
        status: false,
        message: "Data Not Found!",
      });
    } else {
      return res.status(200).send({
        statusCode: 200,
        status: true,
        message: "SuccessFully Got All Data!",
        data: newLoan,
      });
    }
  }

  // find all data and join respective foreign key tables to it
};
