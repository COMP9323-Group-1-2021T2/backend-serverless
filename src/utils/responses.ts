//List of responces to use for http routes

export const response200 = <T>(payload: T) => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  statusCode: 200,
  body: JSON.stringify(payload),
});

export const response201 = <T>(payload: T) => ({
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
    },
    statusCode: 201,
    body: JSON.stringify(payload),
});

export const response301 = (redirectUrl: string) => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Location": redirectUrl
  },
  statusCode: 301,
  body: null,
});

export const response403 = () => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  statusCode: 403,
  body: JSON.stringify({ error: "Forbidden" }),
});

export const response400 = () => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  statusCode: 403,
  body: JSON.stringify({ error: "Bad request" }),
});

export const response500 = (message: string) => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  statusCode: 500,
  body: JSON.stringify({ error: message }),
});

export const response404 = () => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  statusCode: 404,
  body: JSON.stringify({ error: "Not Found" }),
});
