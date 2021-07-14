import { APIGatewayProxyEvent } from "aws-lambda";
import { createCategory } from "../db/createCategory";
import { CreateCategoryRequest, CreateCategoryResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

export const handler = async ({ body }: APIGatewayProxyEvent) => {
  const { id, name, info, parent_id } = JSON.parse(
    body || ""
  ) as CreateCategoryRequest;

  if (!id || !name || !info) {
    return response400();
  }


  const client = getClient();
  await client.connect();


  const category = await createCategory(client, id, name, info, parent_id);

  await client.end();

  return response200<CreateCategoryResponse>({ data: category });
};
