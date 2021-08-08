import { Client } from "pg";

//Deletes 'question' record from database where id matches input id
export const deleteQuestion = async (
  client: Client,
  questionId: string
): Promise<void> => {
  const sql = {
    text: `
      DELETE FROM question
      WHERE id = $1
    `,
    values: [questionId],
  };

  await client.query(sql);

  return;
};
