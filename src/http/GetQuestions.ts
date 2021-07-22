import { GetQuestionsResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200 } from "../utils/responses";
import { getAnsweredQuestions } from "../db/getAnsweredQuestions";

export const handler = async () => {
  const client = getClient()
  await client.connect()

  const questions = await getAnsweredQuestions(client);

  await client.end()

  return response200<GetQuestionsResponse>({ data: questions });
};
