import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import ShareIcon from '@mui/icons-material/Share'

export default function EventCard({
  name,
  img,
  startsAt,
  endsAt,
  tz,
}): JSX.Element {
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: tz,
  }

  startsAt = new Intl.DateTimeFormat('en-US', options).format(
    new Date(startsAt)
  )
  endsAt = new Intl.DateTimeFormat('en-US', options).format(new Date(endsAt))

  return (
    <Card>
      <CardMedia component="img" alt={name} height="200" src={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {startsAt} to {endsAt} ({tz})
        </Typography>
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
