import { Client } from "pg";
import { Article } from "../types";

export const updateArticle = async (
  client: Client,
  id: string,
  title: string,
  url: string,
  image: string,
  description: string
): Promise<Article> => {
  const sql = {
    text: `
      UPDATE article
      SET title = $1, url = $2, image = $3, description = $4
      WHERE id = $5
      RETURNING *
    `,
    values: [title, url, image, description, id],
  };

  return (await client.query<Article>(sql)).rows[0];
};
