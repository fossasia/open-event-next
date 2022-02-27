import React from 'react'
import { Button, Divider } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns'

interface GroupProps {
  props: GroupAttrs
}

const GroupCard = (props: GroupProps): JSX.Element => {
  const { name, thumbnailImageUrl, about, followerCount } = props.props

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
        <Typography variant="body2" color="text.secondary">
          {typeof about !== 'undefined'
            ? about?.length > 100
              ? about?.slice(0, 50) + '...'
              : about
            : ''}
        </Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <Button
          variant="contained"
          startIcon={<FollowTheSignsIcon />}
          disabled
          sx={{ width: '100%' }}
        >
          Follow Group ({followerCount})
        </Button>
      </CardActions>
    </Card>
  )
}

export default GroupCard
