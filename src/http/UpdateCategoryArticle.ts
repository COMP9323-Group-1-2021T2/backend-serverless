import { APIGatewayProxyEvent } from "aws-lambda";
import { updateArticle } from "../db/updateArticle";
import {
  UpdateCategoryArticleResponse,
  UpdateCategoryArticleRequest,
} from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

//Attempts to overwrite a specified 'article' record in the database with a valid category, using the fields provided
export const handler = async ({
  body,
  pathParameters,
}: APIGatewayProxyEvent) => {
  const { categoryId, articleId } = pathParameters || {};
  const { title, url, image, description } = JSON.parse(
    body || ""
  ) as UpdateCategoryArticleRequest;

  if (!categoryId || !articleId || !title || !url || !image || !description) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  const article = await updateArticle(
    client,
    articleId,
    title,
    url,
    image,
    description
  );

  await client.end();

  return response200<UpdateCategoryArticleResponse>({ data: article });
};
