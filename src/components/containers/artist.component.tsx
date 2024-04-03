import { Artist } from '@/types'
import { Card } from '@/components'

interface ArtistContainerProps extends Artist {
  onClick: () => void
}

export const ArtistContainer = ({
  artistName,
  thumbUrl,
  onClick,
}: ArtistContainerProps) => (
  <Card onClick={onClick}>
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
