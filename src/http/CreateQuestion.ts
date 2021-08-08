import { APIGatewayProxyEvent } from "aws-lambda";
import { createQuestion } from "../db/createQuestion";
import {
  CreateQuestionResponse,
  CreateQuestionRequest,
} from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

//Attempts to create a new 'question' record in the database
export const handler = async ({
  body,
}: APIGatewayProxyEvent) => {
  const { question } = JSON.parse(
    body || ""
  ) as CreateQuestionRequest;

  if (!question) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  const questionModel = await createQuestion(client, question);

  await client.end();

  return response200<CreateQuestionResponse>({ data: questionModel });
};
