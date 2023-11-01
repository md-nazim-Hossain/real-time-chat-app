import { NextRequest, NextResponse } from "next/server";
import toast from "react-hot-toast";
import { logger } from "./logger";

export const catchAsync = (fn: any) => {
  return async (req: NextRequest) => {
    try {
      return await fn(req);
    } catch (error: unknown) {
      const er = (error as any)?.response?.data
        ? (error as any)?.response?.data
        : error instanceof Error
        ? error?.message
        : "Something went wrong";

      logger.error(error);
      return NextResponse.json(er, {
        status: 500,
      });
    }
  };
};

export const catchAsyncFetch = (fn: any) => {
  return async (data?: any) => {
    try {
      return await fn(data);
    } catch (error: unknown) {
      const er = (error as any)?.response?.data
        ? (error as any)?.response?.data?.message
        : error instanceof Error
        ? error?.message
        : "Something went wrong";
      toast.error(er);
      logger.log(error);
      return [];
    }
  };
};
