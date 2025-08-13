import { RequestHandler } from "express";
import unboxPeopleModel from "../../model/unboxPeopleModel";

export const getOneUnboxPeople: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const unboxPeople = await unboxPeopleModel.findOne({
    where: {
      id: id,
    },
  });

  // If data exists send data object with status
  if (!unboxPeople) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send(unboxPeople);
  }
};
