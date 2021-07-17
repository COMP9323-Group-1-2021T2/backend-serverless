import { Client } from 'pg';
import { Video } from '../types';

export const getCategoryVideos = async (client: Client, categoryId: string): Promise<Video[]> => {
  const query = {
    text: `
      SELECT *
      FROM video
      WHERE category_id = $1
      ORDER BY created_at DESC
    `,
    values: [categoryId],
  }

  return (await client.query<Video>(query)).rows
}
