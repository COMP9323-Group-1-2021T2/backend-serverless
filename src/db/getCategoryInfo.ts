import { Client } from 'pg';
import { CategoryInfo } from '../types';

export const getCategoryInfo = async (client: Client, categoryId: string): Promise<CategoryInfo | null> => {
  const query = {
    text: 'SELECT * FROM category_info WHERE category_id = $1',
    values: [categoryId],
  }

  const rows = (await client.query<CategoryInfo>(query)).rows

  if (rows.length === 0) {
    return null;
  }

  return rows[0];
}
