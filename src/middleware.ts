import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
		if (req.cookies.get('token') === undefined) {
				return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
		}
		return NextResponse.next();
}

export const config = {
		matcher: '/',
}
