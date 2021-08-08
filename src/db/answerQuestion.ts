import { Client } from "pg";
import { Question } from "../types";

//Updates 'question' record in database
export const answerQuestion = async (
  client: Client,
  userId: string,
  questionId: string,
  answer: string,
): Promise<Question> => {
  const sql = {
    text: `
      UPDATE question
      SET answer = $1, answered_by = $2, answered_at = NOW()
      WHERE id = $3
      RETURNING *
    `,
    values: [answer, userId, questionId],
  };

  return (await client.query<Question>(sql)).rows[0];
};
