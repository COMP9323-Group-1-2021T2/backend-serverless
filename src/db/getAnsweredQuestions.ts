import { Client } from 'pg';
import { Question } from '../types';

export const getAnsweredQuestions = async (client: Client): Promise<Question[]> => {
  const query = `
    SELECT *
    FROM question
    WHERE answered_by IS NOT NULL
    ORDER BY answered_at DESC
    ;
  `

  return (await client.query<Question>(query)).rows
}
