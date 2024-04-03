import { SpotifyService } from '@/services/spotify.service'
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const params = req.nextUrl.searchParams

  const id = params.get('id')

  if (!id) {
    return new NextResponse('Bad Request', { status: 400 })
  }

  const spotify = new SpotifyService(token)

  try {
    if (id.includes('artist')) {
      await spotify.playArtist(id)
    }
    if (id.includes('track')) {
      await spotify.playTrack(id)
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new NextResponse(
        JSON.stringify({
          data: error.response?.data,
          resource: id,
          error: 'Unable to play resource',
        }),
        { status: 500 },
      )
    }
    return new NextResponse('Internal Server Error', { status: 500 })
  }

  return new NextResponse(null, { status: 204 })
}
