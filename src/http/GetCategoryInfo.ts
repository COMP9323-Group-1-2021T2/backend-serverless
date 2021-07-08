import { APIGatewayEvent } from "aws-lambda";
import { getCategoryInfo } from "../db/getCategoryInfo";
import { GetCategoryInfoResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400, response404 } from "../utils/responses";

export const handler = async ({ pathParameters }: APIGatewayEvent) => {
  const { categoryId } = pathParameters || {};

  if (!categoryId) {
    return response400();
  }

  const client = getClient()
  await client.connect()

  const categoryInfo = await getCategoryInfo(client, categoryId);

  if (categoryInfo === null) {
    return response404()
  }

  return response200<GetCategoryInfoResponse>({ data: categoryInfo });
};
