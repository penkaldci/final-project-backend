
import jwt from "jsonwebtoken";
import 'dotenv/config'

export function generateJwt(userId) {
  const payload = {
    id: userId,
  };

  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });

  return token;
}

export function verifyJwt(token) {
  return jwt.verify(token, process.env.JWT_KEY);
}
