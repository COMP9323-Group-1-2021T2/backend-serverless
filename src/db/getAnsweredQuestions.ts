import { Client } from 'pg';
import { Question } from '../types';

//Retrieves all 'question' records which have been answerd from database
export const getAnsweredQuestions = async (client: Client): Promise<Question[]> => {
  const query = `
    SELECT *
    FROM question
    WHERE answered_by IS NOT NULL
    ORDER BY created_at ASC
    ;
  `

  return (await client.query<Question>(query)).rows
}
