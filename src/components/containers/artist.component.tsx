import { Artist as ArtistContainerProps } from '@/types'
import { Card } from '@/components'

export const ArtistContainer = ({
  artistName,
  thumbUrl,
}: ArtistContainerProps) => (
  <Card>
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
  </Card>
)
