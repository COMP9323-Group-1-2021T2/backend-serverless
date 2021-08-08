import { APIGatewayProxyEvent } from "aws-lambda";
import { updateVideo } from "../db/updateVideo";
import {
  UpdateCategoryVideoResponse,
  UpdateCategoryVideoRequest,
} from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

//Attempts to overwrite a specified 'video' record in the database with a valid category, using the fields provided
export const handler = async ({
  body,
  pathParameters,
}: APIGatewayProxyEvent) => {
  const { categoryId, videoId } = pathParameters || {};
  const { title, url, image, description } = JSON.parse(
    body || ""
  ) as UpdateCategoryVideoRequest;

  if (!categoryId || !videoId || !title || !url || !image || !description) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  const video = await updateVideo(
    client,
    videoId,
    title,
    url,
    image,
    description
  );

  await client.end();

  return response200<UpdateCategoryVideoResponse>({ data: video });
};
