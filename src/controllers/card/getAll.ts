import { RequestHandler } from "express";
import cardModel from "../../model/cardModel";
import bankModel from "../../model/bankModel";

export const getAllCard: RequestHandler = async (req, res, next) => {
  let bankId = `[${req.query.bankId}]`;
  let category = req.query.category;

  // let myFunc = (num) => Number(num);
  // var intArr = Array.from(String(bankId), myFunc);
  console.log("BANKID===> ", typeof bankId);
  console.log("CATEGORY", typeof category);
  // Find all data

  if (
    category !== "" &&
    bankId !== "[]" &&
    category !== undefined &&
    bankId !== "[undefined]"
  ) {
    console.log("1");
    const card = await cardModel.findAll({
      where: {
        cardCategory: category !== undefined && (category as string).split(","),
        bankId: JSON.parse(bankId),
      },
      include: [
        {
          model: bankModel,
          attributes: ["name"],
        },
      ],
    });

    let newCard = card.map((c) => {
      return {
        ...c.dataValues,
        details: JSON.parse(c.dataValues.details),
      };
    });

    // If data exists send status with object
    if (!card) {
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
        data: newCard,
      });
    }
  } else if (category != "") {
    console.log("2");
    const card = await cardModel.findAll({
      where: {
        cardCategory: category !== undefined && (category as string).split(","),
      },
    });
    let newCard = card.map((c) => {
      return {
        ...c.dataValues,
        details: JSON.parse(c.dataValues.details),
      };
    });
    console.log("CARDDRDRRRRRDRRRRRD", card);
    // If data exists send status with object
    if (!card) {
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
        data: newCard,
      });
    }
  } else if (bankId != "[]") {
    console.log("3");
    const card = await cardModel.findAll({
      where: {
        bankId: JSON.parse(bankId),
      },
      include: [
        {
          model: bankModel,
          attributes: ["name"],
        },
      ],
    });
    let newCard = card.map((c) => {
      return {
        ...c.dataValues,
        details: JSON.parse(c.dataValues.details),
      };
    });
    // If data exists send status with object
    if (!card) {
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
        data: newCard,
      });
    }
  } else {
    console.log("4");
    const card = await cardModel.findAll({
      include: [
        {
          model: bankModel,
          attributes: ["name"],
        },
      ],
    });
    let newCard = card.map((c) => {
      return {
        ...c.dataValues,
        details: JSON.parse(c.dataValues.details),
      };
    });
    if (!card) {
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
        data: newCard,
      });
    }
  }
};
