import { Response } from "https://deno.land/x/oak/mod.ts";

const HTTP_RESPONSE_OK = 200;
const HTTP_RESPONSE_CREATED = 201;
const HTTP_RESPONSE_BAD_REQUEST = 400;
const HTTP_RESPONSE_NOT_FOUND = 404;
const HTTP_RESPONSE_UNPROCESSABLE_ENTITY = 422;
const HTTP_RESPONSE_SERVER_ERROR = 500;

const createdResponse = (response: Response) => {
  response.status = HTTP_RESPONSE_CREATED;
  response.body = { success: true };
};

const successResponse = (response: Response, data: any = undefined) => {
  response.status = HTTP_RESPONSE_OK;
  response.body = {
    success: true,
    data,
  };
};

const unprocessableEntityResponse = (
  response: Response,
  message = "Unprocessable Entity",
) => {
  response.status = HTTP_RESPONSE_UNPROCESSABLE_ENTITY;
  response.body = {
    success: false,
    message,
  };
};

const badRequestResponse = (response: Response, message = "Bad Request") => {
  response.status = HTTP_RESPONSE_BAD_REQUEST;
  response.body = {
    success: false,
    message,
  };
};

const notFoundResponse = (response: Response, message = "Not found") => {
  response.status = HTTP_RESPONSE_NOT_FOUND;
  response.body = {
    success: false,
    message,
  };
};

const serverErrorResponse = (
  response: Response,
  message = "Internal Server Error",
) => {
  response.status = HTTP_RESPONSE_SERVER_ERROR;
  response.body = {
    success: false,
    message,
  };
};

export {
  successResponse,
  createdResponse,
  badRequestResponse,
  notFoundResponse,
  serverErrorResponse,
  unprocessableEntityResponse,
};
