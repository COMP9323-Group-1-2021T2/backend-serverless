import { APIGatewayEvent } from "aws-lambda";
import { GetCategoryVideosResponse, Video } from "../types";
import { response200, response400 } from "../utils/responses";

export const handler = async ({ pathParameters }: APIGatewayEvent) => {
  const { parentId, subId } = pathParameters || {};

  if (!parentId || !subId) {
    return response400();
  }

  console.log(`ParentID: ${parentId}, SubID: ${subId}`);

  const mockVideos: Video[] = [
    {
      id: "1",
      category_id: subId,
      title: "UNSW Alumni Awards",
      url: "https://www.youtube.com/watch?v=8a1s7073KjY",
      image: "http://i3.ytimg.com/vi/8a1s7073KjY/maxresdefault.jpg",
      description: "Some description",
    },
    {
      id: "2",
      category_id: subId,
      title: "Welcome - UNSW School of Chemistry",
      url: "https://www.youtube.com/watch?v=1_VpT0NwV2s",
      image: "http://i3.ytimg.com/vi/1_VpT0NwV2s/maxresdefault.jpg",
      description: "Some description",
    },
  ];

  return response200<GetCategoryVideosResponse>({ data: mockVideos });
};
