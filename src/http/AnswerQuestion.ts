import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";
import { answerQuestion } from "../db/answerQuestion";
import { APIGatewayProxyEvent } from "aws-lambda";
import { AnswerQuestionRequest, AnswerQuestionResponse } from "../types";

//Retrieves answer to a question from an admin and attempts to write it to the database
export const handler = async ({
  requestContext,
  pathParameters,
  body,
}: APIGatewayProxyEvent) => {
  const { questionId } = pathParameters || {};
  if (!questionId) {
    return response400();
  }

  const { answer } = JSON.parse(
    body || ""
  ) as AnswerQuestionRequest;

  const context: { id?: string } = requestContext.authorizer || {};
  const userId = context.id || "";

  const client = getClient();
  await client.connect();

  const question = await answerQuestion(client, userId, questionId, answer);

  await client.end();

  return response200<AnswerQuestionResponse>({ data: question });
};
