'use client'

import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { PopularDTO, ViewRange } from '@/types'
import { ArtistContainer, Button, TrackContainer } from '@/components'
import axios from 'axios'

interface RadioButtonProps {
  onClick: () => void
  header: string
  description: string
  checked?: boolean
}

const RadioButton = ({
  onClick,
  header,
  description,
  checked,
}: RadioButtonProps) => {
  return (
    <>
      <input
        onClick={onClick}
        type="radio"
        id={header}
        name="hosting"
        value="hosting-small"
        className="hidden peer"
        checked={checked}
        required
      />
      <label
        htmlFor={header}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 h-full"
      >
        <div className="block">
          <div className="w-full text-lg font-semibold">{header}</div>
          <div className="w-full">{description}</div>
        </div>
      </label>
    </>
  )
}

const Page = () => {
  const [url, setUrl] = useState('/api/spotify/top')
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR<PopularDTO>(url, fetcher)
  const [viewRange, setViewRange] = useState<ViewRange>(ViewRange.MEDIUM)

  const setShort = () => setViewRange(ViewRange.SHORT)
  const setMedium = () => setViewRange(ViewRange.MEDIUM)
  const setLong = () => setViewRange(ViewRange.LONG)

  const playResource = (id: string) => async () => {
    await axios.put('/api/spotify/play?id=' + id)
  }

  useEffect(() => {
    setUrl(`/api/spotify/top?term=${viewRange}`)
  }, [viewRange])

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
        <div className="grid grid-cols-2 gap-4">
          <p className="col-span-1">View by:</p>
          <ul className="grid w-full gap-6 md:grid-cols-3 col-span-3">
            <li>
              <RadioButton
                onClick={setShort}
                header="Short"
                description="Tracks listened to in the last 4 weeks"
                checked={viewRange === ViewRange.SHORT}
              />
            </li>
            <li>
              <RadioButton
                onClick={setMedium}
                header="Medium"
                description="Tracks listened to in the last 6 months"
                checked={viewRange === ViewRange.MEDIUM}
              />
            </li>
            <li>
              <RadioButton
                onClick={setLong}
                header="Long"
                description="Tracks listened to over 6 months ago"
                checked={viewRange === ViewRange.LONG}
              />
            </li>
          </ul>
        </div>
        <div className="grid sm:grid-cols-2 gap-10">
          {isLoading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-card"></div>
            </div>
          ) : (
            <>
              <div>
                <header>
                  <h2 className="text-lg font-semibold pb-4">Tracks</h2>
                </header>
                <div className="grid gap-6 md:gap-8">
                  {data!.tracks.map((track) => (
                    <TrackContainer
                      key={track.artistName + track.trackTitle}
                      onClick={playResource(track.resourceId)}
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
                    <ArtistContainer
                      key={artist.artistName}
                      {...artist}
                      onClick={playResource(artist.resourceId)}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Page
