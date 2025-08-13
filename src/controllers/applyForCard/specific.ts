// import { RequestHandler } from "express";
// import applyForCardModel from "../../model/applyForCardModel";
// import cardModel from "../../model/cardModel";

// export const getSpecificUserCardDetail: RequestHandler = async (req, res, next) => {
//   let userId = req.params.id;
//   // find all data and join respective foreign key tables to it
//   const proj = await applyForCardModel.findAll({
//     where: {
//       userId: userId,
//     },
//   });
//   let cardIds = [];
//   proj.forEach((p) => {
//     cardIds.push(p.dataValues.cardId);
//   });

//   const cards = await cardModel.findAll({
//     where: {
//       id: cardIds,
//     },
//   });

//   // If data exists send status with object
//   if (!proj) {
//     return res.status(404).send({
//       message: "Data Not Found!",
//     });
//   } else {
//     return res.status(200).send(cards);
//   }
// };

import { RequestHandler } from "express";
import applyForCardModel from "../../model/applyForCardModel";
import cardModel from "../../model/cardModel";

export const getSpecificUserCardDetail: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Get all applyForCard records for the user
    const applyForCards = await applyForCardModel.findAll({
      where: { userId },
      attributes: ["cardId"],
    });

    // Get all cards associated with the applyForCard records
    const cardIds = applyForCards.map((applyForCard: any) => applyForCard.cardId);
    const cards = await cardModel.findAll({
      where: { id: cardIds },
    });

    // If no cards found, return 204
    if (cards.length === 0) {
      return res.status(204).send("No cards found for this user");
    }

    return res.status(200).send(cards);
  } catch (err) {
    next(err);
  }
};
