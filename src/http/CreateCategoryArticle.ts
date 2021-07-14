import { APIGatewayProxyEvent } from "aws-lambda";
import { createArticle } from "../db/createArticle";
import { CreateCategoryArticleResponse, CreateCategoryArticleRequest } from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

export const handler = async ({
  body,
  pathParameters,
}: APIGatewayProxyEvent) => {
  const { categoryId } = pathParameters || {};
  const { title, url, image, description } = JSON.parse(body || "") as CreateCategoryArticleRequest;

  if (!categoryId || !title || !url || !image || !description) {
    return response400();
  }

  const client = getClient();
  await client.connect();


  const article = await createArticle(client, categoryId, title, url, image, description);

  await client.end();

  return response200<CreateCategoryArticleResponse>({ data: article });
};
