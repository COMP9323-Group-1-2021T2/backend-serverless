import { sign } from "jsonwebtoken";
import { JwtClaims, User } from "../types";
import { getEnv } from "./getEnv";

//Generates jwt using secret and user details
const secret = getEnv("SECRET");

export const createAccessToken = (user: User): string => {
  const claims: JwtClaims = { id: user.id, login_type: user.login_type };
  return sign(claims, secret, {});
};
