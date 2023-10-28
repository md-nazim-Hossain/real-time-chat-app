import { NextRequest, NextResponse } from "next/server";
import { logger } from "./logger";

const catchAsync = (fn: any) => {
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

export default catchAsync;
