import jwt from "jsonwebtoken";
import { JwtClaims, RequestContext } from "../types";
import { generatePolicy } from "../utils/generatePolicy";
import { getEnv } from "../utils/getEnv";

export const handler = async (event: any, _context: any, callback: any) => {
  if (!event.authorizationToken) {
    return callback("Unauthorized");
  }

  try {
    const [bearer, token] = event.authorizationToken.split(" ");

    if (bearer.toLowerCase() != "bearer") {
      throw new Error("Bearer incorrect");
    }

    let claims: JwtClaims;

    claims = jwt.verify(token, getEnv("SECRET")) as JwtClaims;

    const { id } = claims;
    const policy = generatePolicy<RequestContext>(id, "Allow", "*", {
      id,
    });

    return callback(null, policy);
  } catch (err) {
    console.log(`Error: ${err}`);
    return callback("Unauthorized");
  }
};
