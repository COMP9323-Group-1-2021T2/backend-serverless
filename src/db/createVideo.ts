import { Client } from "pg";
import { Video } from "../types";

//Creates 'video' record in database
export const createVideo = async (
  client: Client,
  categoryId: string,
  title: string,
  url: string,
  image: string,
  description: string
): Promise<Video> => {
  const sql = {
    text:
      "INSERT INTO video (category_id, title, url, image, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    values: [categoryId, title, url, image, description],
  };

  return (await client.query<Video>(sql)).rows[0];
};
