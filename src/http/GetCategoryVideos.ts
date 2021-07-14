import { APIGatewayEvent } from "aws-lambda";
import { getCategoryVideos } from "../db/getCategoryVideos";
import { GetCategoryVideosResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

export const handler = async ({ pathParameters }: APIGatewayEvent) => {
  const { categoryId } = pathParameters || {};

  if (!categoryId) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  const videos = await getCategoryVideos(client, categoryId);

  await client.end()

  return response200<GetCategoryVideosResponse>({ data: videos });
};
