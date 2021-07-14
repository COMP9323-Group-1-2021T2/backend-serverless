import { Client } from "pg";

export const deleteCategory = async (
  client: Client,
  id: string
): Promise<void> => {
  const sql = {
    text: "DELETE FROM category WHERE id = $1 CASCADE",
    values: [id],
  };

  await client.query(sql);
};
