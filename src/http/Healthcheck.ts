import { response200 } from "../utils/responses";

export const handler = async () => {
  return response200({ message: "OK" })
};
