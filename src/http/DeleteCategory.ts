import { APIGatewayProxyEvent } from "aws-lambda";
import { deleteCategory } from "../db/deleteCategory";
import { DeleteCategoryResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

//Deletes a specified 'category' record from the database
export const handler = async ({ pathParameters }: APIGatewayProxyEvent) => {
  const { categoryId } = pathParameters || {};

  if (!categoryId) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  await deleteCategory(client, categoryId);

  await client.end();

  return response200<DeleteCategoryResponse>({ status: "OK" });
};
