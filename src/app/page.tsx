'use client'

import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { PopularDTO, ViewRange } from '@/types'
import { ArtistContainer, Button, TrackContainer } from '@/components'

const Page = () => {
  const [url, setUrl] = useState('/api/spotify/top')
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR<PopularDTO>(url, fetcher)
  const [viewRange, setViewRange] = useState<ViewRange>(ViewRange.MEDIUM)

  const setShort = () => setViewRange(ViewRange.SHORT)
  const setMedium = () => setViewRange(ViewRange.MEDIUM)
  const setLong = () => setViewRange(ViewRange.LONG)

  useEffect(() => {
    setUrl(`/api/spotify/top?term=${viewRange}`)
  }, [viewRange])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-card"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 dark:text-red-400">Failed to load data</p>
      </div>
    )
  }
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 grid gap-6 md:gap-8 items-start mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Top Tracks on Spotify
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              View and listen to your favorite tracks on Spotify.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <p>View by:</p>
          <Button onClick={setShort}>Short</Button>
          <Button onClick={setMedium}>Medium</Button>
          <Button onClick={setLong}>Long</Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <header>
              <h2 className="text-lg font-semibold pb-4">Tracks</h2>
            </header>
            <div className="grid gap-6 md:gap-8">
              {data!.tracks.map((track) => (
                <TrackContainer
                  key={track.artistName + track.trackTitle}
                  {...track}
                />
              ))}
            </div>
          </div>
          <div>
            <header>
              <h2 className="text-lg font-semibold pb-4">Artists</h2>
            </header>
            <div className="grid gap-6 md:gap-8">
              {data!.artists.map((artist) => (
                <ArtistContainer key={artist.artistName} {...artist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MusicIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
)

export default Page
