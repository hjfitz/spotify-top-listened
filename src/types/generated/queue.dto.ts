export interface QueueResponseDTO {
  currently_playing: CurrentlyPlaying
  queue: Queue[]
}

interface CurrentlyPlaying {
  album: Album
  artists: Artist2[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls4
  href: string
  id: string
  is_playable: boolean
  linked_from: LinkedFrom
  restrictions: Restrictions2
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

interface Album {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  restrictions: Restrictions
  type: string
  uri: string
  artists: Artist[]
}

interface ExternalUrls {
  spotify: string
}

interface Image {
  url: string
  height: number
  width: number
}

interface Restrictions {
  reason: string
}

interface Artist {
  external_urls: ExternalUrls2
  href: string
  id: string
  name: string
  type: string
  uri: string
}

interface ExternalUrls2 {
  spotify: string
}

interface Artist2 {
  external_urls: ExternalUrls3
  followers: Followers
  genres: string[]
  href: string
  id: string
  images: Image2[]
  name: string
  popularity: number
  type: string
  uri: string
}

interface ExternalUrls3 {
  spotify: string
}

interface Followers {
  href: string
  total: number
}

interface Image2 {
  url: string
  height: number
  width: number
}

interface ExternalIds {
  isrc: string
  ean: string
  upc: string
}

interface ExternalUrls4 {
  spotify: string
}

interface LinkedFrom {}

interface Restrictions2 {
  reason: string
}

interface Queue {
  album: Album2
  artists: Artist4[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds2
  external_urls: ExternalUrls8
  href: string
  id: string
  is_playable: boolean
  linked_from: LinkedFrom2
  restrictions: Restrictions4
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

interface Album2 {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: ExternalUrls5
  href: string
  id: string
  images: Image3[]
  name: string
  release_date: string
  release_date_precision: string
  restrictions: Restrictions3
  type: string
  uri: string
  artists: Artist3[]
}

interface ExternalUrls5 {
  spotify: string
}

interface Image3 {
  url: string
  height: number
  width: number
}

interface Restrictions3 {
  reason: string
}

interface Artist3 {
  external_urls: ExternalUrls6
  href: string
  id: string
  name: string
  type: string
  uri: string
}

interface ExternalUrls6 {
  spotify: string
}

interface Artist4 {
  external_urls: ExternalUrls7
  followers: Followers2
  genres: string[]
  href: string
  id: string
  images: Image4[]
  name: string
  popularity: number
  type: string
  uri: string
}

interface ExternalUrls7 {
  spotify: string
}

interface Followers2 {
  href: string
  total: number
}

interface Image4 {
  url: string
  height: number
  width: number
}

interface ExternalIds2 {
  isrc: string
  ean: string
  upc: string
}

interface ExternalUrls8 {
  spotify: string
}

interface LinkedFrom2 {}

interface Restrictions4 {
  reason: string
}
