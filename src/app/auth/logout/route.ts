import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
		const cookieStore = cookies()

		cookieStore.delete('token')

		return Response.redirect(new URL('/logged_out', request.nextUrl))
}
