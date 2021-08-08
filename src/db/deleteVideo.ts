import { Client } from "pg";

//Deletes 'video' record from database where id matches input id
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
