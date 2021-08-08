import { generatePolicy } from "../utils/generatePolicy";
import { getEnv } from "../utils/getEnv";

//Validates API Routes with client secret method 
export const handler = async (event: any, _context: any, callback: any) => {
  if (!event.authorizationToken) {
    return callback("Unauthorized");
  }

  if (event.authorizationToken !== getEnv("SECRET")) {
    return callback("Unauthorized");
  }

  const policy = generatePolicy<{}>("", "Allow", "*", {});

  return callback(null, policy);
};
