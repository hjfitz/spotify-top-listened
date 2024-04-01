import { cookies } from "next/headers"
import { NextRequest } from "next/server"
import { SpotifyService } from "@/services/spotify.service"
import { ListenedTerm } from "@/types"

export async function GET(req: NextRequest) {
	const cookieStore = cookies()

	const token = cookieStore.get('token')

	if (!token) {
			return new Response('Unauthorized', { status: 401 })
	}

	const params = req.nextUrl.searchParams
    const incomingTerm = params.get('term')

	const term = parseTerm(incomingTerm)


	const spotify = new SpotifyService(token.value)

	const [topArtists, topTracks] = await Promise.all([
			spotify.getTopArtists(term),
			spotify.getTopTracks(term),
	])


	return Response.json({
			artists: topArtists,
			tracks: topTracks,
	})

}

function parseTerm(term?: string | null): ListenedTerm {
		switch (term) {
				case 'short': {
						return ListenedTerm.SHORT
				}
				case 'medium': {
						return ListenedTerm.MEDIUM
				}
				case 'long': {
						return ListenedTerm.LONG
				}
				default: {
						return ListenedTerm.MEDIUM
				}
		}
}
