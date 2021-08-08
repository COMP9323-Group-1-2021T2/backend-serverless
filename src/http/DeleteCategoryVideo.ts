import { APIGatewayProxyEvent } from "aws-lambda";
import { deleteVideo } from "../db/deleteVideo";
import { DeleteCategoryVideoResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

//Deletes a specified 'video' record from the database
export const handler = async ({ pathParameters }: APIGatewayProxyEvent) => {
  const { categoryId, videoId } = pathParameters || {};

  if (!categoryId || !videoId) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  await deleteVideo(client, videoId);

  await client.end();

  return response200<DeleteCategoryVideoResponse>({ status: "OK" });
};
