import { APIGatewayProxyEvent } from "aws-lambda";
import { createVideo } from "../db/createVideo";
import {
  CreateCategoryVideoResponse,
  CreateCategoryVideoRequest,
} from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

export const handler = async ({
  body,
  pathParameters,
}: APIGatewayProxyEvent) => {
  const { categoryId } = pathParameters || {};
  const { title, url, image, description } = JSON.parse(
    body || ""
  ) as CreateCategoryVideoRequest;

  if (!categoryId || !title || !url || !image || !description) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  const article = await createVideo(
    client,
    categoryId,
    title,
    url,
    image,
    description
  );

  await client.end();

  return response200<CreateCategoryVideoResponse>({ data: article });
};
