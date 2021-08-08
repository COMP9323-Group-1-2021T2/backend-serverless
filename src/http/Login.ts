import { APIGatewayProxyEvent } from "aws-lambda";
import { LoginResponse, LoginRequest } from "../types";
import { response200, response400 } from "../utils/responses";
import { getUserFromEmailAndPassword } from "../db/getUserFromEmailAndPassword";
import { getClient } from "../utils/pgClient";
import { createAccessToken } from "../utils/auth";

//Attempts to login a user given their credentials
export const handler = async ({ body }: APIGatewayProxyEvent) => {
  const { email, password } = JSON.parse(body || "") as LoginRequest;

  if (!email || !password) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  try {
    const user = await getUserFromEmailAndPassword(client, email, password);
    const accessToken = createAccessToken(user);
    await client.end();

    return response200<LoginResponse>({ accessToken });
  } catch (e) {
    await client.end();
    console.error(e.message);
    return response400();
  }
};
