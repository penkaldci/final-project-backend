import jwt from "jsonwebtoken";
import "dotenv/config";

export function generateJwt(userId) {
  try {
    const payload = {
      id: userId,
    };

    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: "1h",
      algorithm: "HS256",
    });

    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Token generation failed");
  }
}

export function verifyJwt(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    return decoded;
  } catch (error) {
    console.error("Error verifying token:", error.message);
    throw new Error("Invalid token");
  }
}
