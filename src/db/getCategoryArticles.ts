import { Client } from 'pg';
import { Article } from '../types';

export const getCategoryArticles = async (client: Client, categoryId: string): Promise<Article[]> => {
  const query = {
    text: `
      SELECT *
      FROM article
      WHERE category_id = $1
      ORDER BY created_at DESC
    `,
    values: [categoryId],
  }

  return (await client.query<Article>(query)).rows
}
