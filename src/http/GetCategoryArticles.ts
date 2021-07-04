import { APIGatewayEvent } from "aws-lambda";
import { Article, GetCategoryArticlesResponse } from "../types";
import { response200, response400 } from "../utils/responses";

export const handler = async ({ pathParameters }: APIGatewayEvent) => {
  const { parentId, subId } = pathParameters || {};

  if (!parentId || !subId) {
    return response400();
  }

  console.log(`ParentID: ${parentId}, SubID: ${subId}`);

  const mockArticles: Article[] = [
    {
      id: "1",
      category_id: subId,
      title: "Some Google Article",
      url: "https://google.com",
      image: "some-image",
      description: "Search engine",
    },
    {
      id: "2",
      category_id: subId,
      title: "Some FB Article",
      url: "https://facebook.com",
      image: "some-image",
      description: "Some social media description",
    },
  ];

  return response200<GetCategoryArticlesResponse>({ data: mockArticles });
};
