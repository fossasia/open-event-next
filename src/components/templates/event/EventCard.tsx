import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import ShareIcon from '@mui/icons-material/Share'
import WifiIcon from '@mui/icons-material/Wifi'
import { Trans } from '@lingui/macro'
import { dayjs } from '../../../../store/date'

interface EventProps {
  props: EventAttrs
}

export default function EventCard(props: EventProps): JSX.Element {
  const { name, startsAt, endsAt, thumbnailImageUrl, timezone, online } =
    props.props
  const format = 'dddd, D MMMM, YYYY hh:mm A'

  return (
    <Card>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        src={thumbnailImageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {dayjs(startsAt).tz(timezone).format(format)} to{' '}
          {dayjs(endsAt)
            .tz(timezone)
            .format(format + ' (zzz)')}{' '}
        </Typography>
        {online && (
          <Typography variant="body1" color="text.secondary">
            <IconButton aria-label="online event">
              <WifiIcon />
            </IconButton>
            <Trans>Online Event</Trans>
          </Typography>
        )}
      </CardContent>
      <Divider light />
      <CardActions>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
