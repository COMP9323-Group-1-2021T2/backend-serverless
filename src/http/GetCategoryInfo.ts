import { APIGatewayEvent } from "aws-lambda";
import { CategoryInfo, GetCategoryInfoResponse } from "../types";
import { response200, response400 } from "../utils/responses";

export const handler = async ({ pathParameters }: APIGatewayEvent) => {
  const { parentId, subId } = pathParameters || {};

  if (!parentId || !subId) {
    return response400();
  }

  console.log(`ParentID: ${parentId}, SubID: ${subId}`);

  const mockCategoryInfo: CategoryInfo = {
    id: "1",
    category_id: subId,
    info: `Some placeholder information for sub category id: ${subId}`,
  };

  return response200<GetCategoryInfoResponse>({ data: mockCategoryInfo });
};
