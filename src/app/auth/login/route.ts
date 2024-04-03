import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET() {
  const scopes = process.env.SPOTIFY_SCOPES?.replace(/;/g, ' ')
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI

  const state = Math.random().toString(36).substring(2)

  const cookieStore = cookies()
  cookieStore.set('state', state)

  const spotifyRedirect = [
    'https://accounts.spotify.com/authorize',
    '?response_type=code',
    `&client_id=${clientId}`,
    `&scope=${scopes}`,
    `&redirect_uri=${redirectUri}`,
    `&state=${state}`,
  ].join('')

  redirect(spotifyRedirect)
}
