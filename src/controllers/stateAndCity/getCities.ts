import { RequestHandler } from "express";
import cityModel from "../../model/cityModel";
import stateModel from "../../model/stateModel";

export const getCitiesStateWise: RequestHandler = async (req, res) => {
  let id = req.params.name;

  let state = await stateModel.findOne({
    where: {
      name: id,
    },
  });

  let cities = await cityModel.findAll({
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
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "SuccessFully Got All Data!",
      data: cities,
    });
  }
};
