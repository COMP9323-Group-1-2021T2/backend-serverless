import { Client } from 'pg';
import { Category } from '../types';

//Retrieves all 'category' records from database
export const getCategories = async (client: Client): Promise<Category[]> => {
  const query = `
    SELECT *
    FROM category;
  `

  return (await client.query<Category>(query)).rows
}