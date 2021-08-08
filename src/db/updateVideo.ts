import { Client } from "pg";
import { Video } from "../types";

//Overwrites 'video' record with provided information
export const updateVideo = async (
  client: Client,
  id: string,
  title: string,
  url: string,
  image: string,
  description: string
): Promise<Video> => {
  const sql = {
    text: `
      UPDATE video
      SET title = $1, url = $2, image = $3, description = $4
      WHERE id = $5
      RETURNING *
    `,
    values: [title, url, image, description, id],
  };

  return (await client.query<Video>(sql)).rows[0];
};
