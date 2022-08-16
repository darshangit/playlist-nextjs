import { NextResponse } from "next/server";

const signedInPages = ["/", "/playlists", "/library"];

export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const { cookies } = req;
    if (!cookies) {
      return NextResponse.redirect(`${req.nextUrl.origin}/signin`);
    }
  }
}
