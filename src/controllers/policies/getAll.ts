import { RequestHandler } from "express";
import policiesModel from "../../model/policiesModel";

export const GetAllDetails: RequestHandler = async (req, res, next) => {
  // Find all data
  let insuranceProviderId = `[${req.query.insuranceProviderId}]`;
  let lifeCover = req.query.lifeCover;
  let claimSetteled = req.query.claimSetteled;

  if (
    lifeCover !== "" &&
    claimSetteled !== "" &&
    insuranceProviderId !== "[]" &&
    lifeCover !== undefined &&
    claimSetteled !== undefined &&
    insuranceProviderId !== "[undefined]"
  ) {
    console.log("1");
    const policy = await policiesModel.findAll({
      where: {
        lifeCover: lifeCover,
        claimSetteled: claimSetteled,
        insuranceProviderId: JSON.parse(insuranceProviderId),
      },
    });

    // If data exists send status with object
    if (!policy) {
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
        data: policy,
      });
    }
  } else if (lifeCover !== undefined) {
    console.log("2");
    const policy = await policiesModel.findAll({
      where: {
        lifeCover: lifeCover,
      },
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
    } else {
      return res.status(200).send({
        statusCode: 200,
        status: true,
        message: "SuccessFully Got All Data!",
        data: policy,
      });
    }
  } else if (claimSetteled !== undefined) {
    console.log("3");
    const policy = await policiesModel.findAll({
      where: {
        claimSetteled: claimSetteled,
      },
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
    } else {
      return res.status(200).send({
        statusCode: 200,
        status: true,
        message: "SuccessFully Got All Data!",
        data: policy,
      });
    }
  } else if (insuranceProviderId !== "[undefined]") {
    console.log("4");
    const policy = await policiesModel.findAll({
      where: {
        insuranceProviderId: JSON.parse(insuranceProviderId),
      },
    });

    // If data exists send status with object
    if (!policy) {
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
        data: policy,
      });
    }
  } else {
    console.log("4");
    const policy = await policiesModel.findAll({});
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
    } else {
      return res.status(200).send({
        statusCode: 200,
        status: true,
        message: "SuccessFully Got All Data!",
        data: policy,
      });
    }
  }
};
