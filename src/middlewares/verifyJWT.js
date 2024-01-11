import jwt from 'jsonwebtoken';
import { JWT_COOKIE_NAME } from '../constants/index.js';
export const verifyJWT = async (req, res, next) => {
  const token = req.header('Authorization') || req.cookies?.[JWT_COOKIE_NAME];
  console.log(token);
  if (!token) {
    //token not found
    req.user = null;
    return next();
  }
  try {
    var user = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (err) {
    req.user = null;
  }
  next();
};
