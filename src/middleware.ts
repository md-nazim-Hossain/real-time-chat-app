import { logger } from "@utils/logger";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  logger.log("================== middleware ================== ");
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  const decode = JSON.parse(atob(token.split(".")[1]));
  if (decode?.exp * 1000 < Date.now()) {
    const response = NextResponse.redirect(new URL("/auth/login", req.url));
    response.cookies.delete("token");
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/tawk/:path*"],
};
