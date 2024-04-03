import { NextRequest } from 'next/server'
import queryString from 'querystring'
import { cookies } from 'next/headers'
import axios from 'axios'
import { redirect } from 'next/navigation'

interface RequestSuccess {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
}

interface RequestFailure {
  error: string
  error_description: string
}

function isSuccessfulResponse(response: any): response is RequestSuccess {
  return 'access_token' in response
}

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams
  const code = params.get('code')
  const state = params.get('state')

  if (!code || !state) {
    return new Response('Unable to authenticate', { status: 500 })
  }

  const cookieStore = cookies()
  cookieStore.set('state', '')

  const initialState = req.cookies.get('state')?.value

  if (state !== initialState) {
    return new Response('Invalid state', { status: 500 })
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI!

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64',
  )

  const body = queryString.stringify({
    code,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
  })

  const { data } = await axios.post<RequestSuccess | RequestFailure>(
    'https://accounts.spotify.com/api/token',
    body,
    {
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Length': body.length,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )

  if (!isSuccessfulResponse(data)) {
    return new Response(`Unable to authenticate: ${data.error_description}`, {
      status: 500,
    })
  }

  cookieStore.set('token', data.access_token, {
    expires: new Date(Date.now() + data.expires_in * 1000),
  })

  redirect('/')
}
