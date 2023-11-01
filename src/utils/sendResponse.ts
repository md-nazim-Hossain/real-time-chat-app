import { IApiResponse } from "@type/index";
import { NextResponse } from "next/server";

export const sendApiResponse = <T>(data: IApiResponse<T>): NextResponse => {
  const { message, statusCode, success } = data;
  const responseData: IApiResponse<T> = {
    statusCode,
    success,
    message: message || null,
    meta: data?.meta || null,
    data: data?.data || null,
  };
  return NextResponse.json(responseData, {
    status: statusCode,
  });
};

export const sendResponse = <T>(data: IApiResponse<T>): IApiResponse<T> => {
  const { message, statusCode, success } = data;
  const responseData: IApiResponse<T> = {
    statusCode,
    success,
    message: message || null,
    meta: data?.meta || null,
    data: data?.data || null,
  };
  return responseData;
};
