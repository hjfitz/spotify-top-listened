import { Artist as ArtistContainerProps } from "@/types";
import { Card, CardHeader } from "@/components";


export const ArtistContainer = ({artistName, thumbUrl}: ArtistContainerProps) => (
		<Card>
				<CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
						<img
								alt="Avatar"
								className="rounded-full aspect-square object-cover"
								height={40}
								src={thumbUrl}
								width={40}
						/>
						<div className="grid gap-1">
								<h3 className="font-semibold">{artistName}</h3>
						</div>
				</CardHeader>
		</Card>
				)
