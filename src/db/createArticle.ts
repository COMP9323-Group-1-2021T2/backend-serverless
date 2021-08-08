import { Client } from "pg";
import { Article } from "../types";

//Creates 'article' record in database
export const createArticle = async (
  client: Client,
  categoryId: string,
  title: string,
  url: string,
  image: string,
  description: string
): Promise<Article> => {
  const sql = {
    text:
      "INSERT INTO article (category_id, title, url, image, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    values: [categoryId, title, url, image, description],
  };

  return (await client.query<Article>(sql)).rows[0];
};
