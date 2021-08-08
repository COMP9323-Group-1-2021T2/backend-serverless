import { Client } from "pg";

//Deletes 'category' record from database where id matches input id
export const deleteCategory = async (
  client: Client,
  id: string
): Promise<void> => {
  const sql = {
    text: "DELETE FROM category WHERE id = $1",
    values: [id],
  };

  await client.query(sql);
};
