import { APIGatewayProxyEvent } from "aws-lambda";
import { HelloNameBody } from "../types";
import { response200 } from "../utils/responses";

export const handler = async ({
  body,
}: APIGatewayProxyEvent) => {
  const requestBody = JSON.parse(body || "") as HelloNameBody;
  const message = `Hello ${requestBody.name}`;

  return response200({ message: message });
};
