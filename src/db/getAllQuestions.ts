import { Client } from 'pg';
import { Question } from '../types';

//Retrieves all 'question' records from database
export const getAllQuestions = async (client: Client): Promise<Question[]> => {
  const query = `
    SELECT *
    FROM question
    ORDER BY answered_at DESC;
  `

  return (await client.query<Question>(query)).rows
}
