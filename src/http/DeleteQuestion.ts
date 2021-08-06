import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";
import { APIGatewayProxyEvent } from "aws-lambda";
import { deleteQuestion } from "../db/deleteQuestion";
import { DeleteQuestionResponse } from "../types";

export const handler = async ({
  pathParameters,
}: APIGatewayProxyEvent) => {
  const { questionId } = pathParameters || {};
  if (!questionId) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  await deleteQuestion(client, questionId);
  await client.end();

  return response200<DeleteQuestionResponse>({ status: "OK" });
};
