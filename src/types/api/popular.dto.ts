import type { Artist, Track } from '../spotify'

export interface PopularDTO {
  artists: Artist[]
  tracks: Track[]
}
