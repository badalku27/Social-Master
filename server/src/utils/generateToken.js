import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/constant.js";
const generateToken = (id) => {
  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

export default generateToken;
