import { Client } from "pg";
import { Category } from "../types";

//Creates 'category' record in database
export const createCategory = async (
  client: Client,
  id: string,
  name: string,
  info: string,
  parentId?: string
): Promise<Category> => {
  const categoryInsertQuery = {
    text:
      "INSERT INTO category (id, name, parent_id) VALUES ($1, $2, $3) RETURNING *",
    values: [id, name, parentId],
  };

  const categoryInfoInsertQuery = {
    text: "INSERT INTO category_info (category_id, info) VALUES ($1, $2)",
    values: [id, info],
  };

  const category = (await client.query<Category>(categoryInsertQuery)).rows[0];
  await client.query(categoryInfoInsertQuery);

  return category;
};
