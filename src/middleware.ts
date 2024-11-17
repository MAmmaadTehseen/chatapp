import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const {
      nextUrl: { pathname },

      nextauth: { token },
    } = req;

    if (pathname.startsWith("/login") && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (["/", "/setting",'/profile','/call','/status'].includes(pathname) && !token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const {
          nextUrl: { pathname },
        } = req;
        return (!token && pathname.startsWith("/")) || !!token;
      },
    },
  }
);

export const config = { matcher: ['/','/setting','/profile','/status','/call'] }
