import { Client } from 'pg';
import { Question } from '../types';

export const getAllQuestions = async (client: Client): Promise<Question[]> => {
  const query = `
    SELECT *
    FROM question
    ORDER BY answered_at DESC;
  `

  return (await client.query<Question>(query)).rows
}
