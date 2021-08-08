import { APIGatewayAuthorizerWithContextResult } from "aws-lambda";

//AWS Lambda Authorizer function
export function generatePolicy<T>(
  principalId: string,
  effect: string,
  resource: string,
  context: T
) {
  const authResponse: APIGatewayAuthorizerWithContextResult<any> = {
    principalId,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource,
        },
      ],
    },
    context,
  };

  return authResponse;
}
