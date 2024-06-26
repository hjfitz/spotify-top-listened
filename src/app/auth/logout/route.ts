import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export function GET() {
  const cookieStore = cookies()

  cookieStore.delete('token')

  redirect('/logged_out')
}
