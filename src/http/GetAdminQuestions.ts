import { GetAdminQuestionsResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200 } from "../utils/responses";
import { getAllQuestions } from "../db/getAllQuestions";

//Retrieves all 'question' records in the database including unapproved ones
export const handler = async () => {
  const client = getClient()
  await client.connect()

  const questions = await getAllQuestions(client);

  await client.end()

  return response200<GetAdminQuestionsResponse>({ data: questions });
};
