import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.well-known|_next|static|api/webhook).*)", // Protect all routes except for static assets and the /api/webhook route
  ],
};
