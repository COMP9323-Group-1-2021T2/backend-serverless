import { APIGatewayProxyEvent } from "aws-lambda";
import { deleteArticle } from "../db/deleteArticle";
import { DeleteCategoryArticleResponse } from "../types";
import { getClient } from "../utils/pgClient";
import { response200, response400 } from "../utils/responses";

//Deletes a specified 'article' record from the database
export const handler = async ({ pathParameters }: APIGatewayProxyEvent) => {
  const { categoryId, articleId } = pathParameters || {};

  if (!categoryId || !articleId) {
    return response400();
  }

  const client = getClient();
  await client.connect();

  await deleteArticle(client, articleId);

  await client.end();

  return response200<DeleteCategoryArticleResponse>({ status: "OK" });
};
