import dotenv from "dotenv"
import unboxPeopleModel from "../../model/unboxPeopleModel";

dotenv.config();

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];
  console.log("first", token)
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  } else {
    const check = await unboxPeopleModel.findOne({ where: { user_token: token.substring(7) } })
    console.log("check", check)
    if (check) { return next(); }
    else {
      return res.status(401).send("Invalid Token");
    }
  }

};

export default verifyToken;