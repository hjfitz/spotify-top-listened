import { Track } from '@/types'
import { Card } from '@/components'

export interface TrackContainerProps extends Track {
  onClick: () => void
}

export const TrackContainer = ({
  trackTitle,
  thumb,
  albumName,
  artistName,
  onClick,
}: TrackContainerProps) => (
  <Card onClick={onClick}>
    <img
      alt="Avatar"
      className="rounded-full aspect-square object-cover"
      height={40}
      src={thumb}
      width={40}
    />
    <div className="grid gap-1">
      <h3 className="font-semibold">
        {trackTitle} - {artistName}
      </h3>
      <small className="text-sm leading-none">{albumName}</small>
    </div>
  </Card>
)
