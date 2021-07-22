import { Client } from "pg";
import { Question } from "../types";

export const createQuestion = async (
  client: Client,
  question: string
): Promise<Question> => {
  const sql = {
    text:
      "INSERT INTO question (question) VALUES ($1) RETURNING *",
    values: [question],
  };

  return (await client.query<Question>(sql)).rows[0];
};
