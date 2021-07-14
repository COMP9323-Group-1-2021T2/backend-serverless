import { getCategories } from "../db/getCategories";
import { GetCategoriesResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200 } from "../utils/responses";

export const handler = async () => {
  const client = getClient()
  await client.connect()

  const categories = await getCategories(client);

  await client.end()

  return response200<GetCategoriesResponse>({ data: categories });
};
