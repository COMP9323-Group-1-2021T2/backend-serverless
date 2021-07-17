import { Client } from "pg";

export const deleteVideo = async (
  client: Client,
  id: string
): Promise<void> => {
  const sql = {
    text: "DELETE FROM video WHERE id = $1;",
    values: [id],
  };

  await client.query(sql);
};
