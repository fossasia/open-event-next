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

interface EventProps {
  props: EventAttrs
}

export default function EventCard(props: EventProps): JSX.Element {
  const { name, startsAt, endsAt, thumbnailImageUrl, timezone, online } =
    props.props
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: timezone,
  }

  const startTime = new Intl.DateTimeFormat('en-US', options).format(
    new Date(startsAt)
  )
  const endTime = new Intl.DateTimeFormat('en-US', options).format(
    new Date(endsAt)
  )

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
          {startTime} to {endTime} ({timezone})
        </Typography>
        {online && (
          <Typography variant="body1" color="text.secondary">
            <IconButton aria-label="online event">
              <WifiIcon />
            </IconButton>
            Online Event
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
