import axios, { AxiosInstance } from "axios";
import type { Artist, TopArtistsDTO, TopTracksDTO, Track } from "@/types";

export class SpotifyService {
		private readonly axios: AxiosInstance;
		constructor(accessToken: string) {
				this.axios = axios.create({
						headers: {
								Authorization: `Bearer ${accessToken}`,
						},
						baseURL: "https://api.spotify.com/v1",
				})
		}

		public async getTopArtists(term: string): Promise<Artist[]> {
				const resp = await this.axios.get<TopArtistsDTO>(`/me/top/artists?time_range=${term}&limit=5`)
				return resp.data.items.map((item) => ({
						thumbUrl: item.images[0].url,
						artistName: item.name,
						artistUrl: item.external_urls.spotify,
				}))
		}

		public async getTopTracks(term: string): Promise<Track[]> {
				const resp = await this.axios.get<TopTracksDTO>(`/me/top/tracks?time_range=${term}&limit=5`)
				return resp.data.items.map((item) => ({
						trackTitle: item.name,
						artistName: item.artists.map((artist) => artist.name).join(', '),
						albumName: item.album.name,
						trackUrl: item.external_urls.spotify,
						previewUrl: item.preview_url,
						thumb: item.album.images[0].url,
				}))
		}

		public playTrack(id: string) {
		}

		public playArtist(id: string) {
		}
}
