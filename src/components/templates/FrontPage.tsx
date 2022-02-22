import { Grid, Typography } from '@mui/material'
import React from 'react'
import EventCard from './event/EventCard'
import GroupCard from './group/GroupCard'

export default function FrontPage({ name, data }): JSX.Element {
  return (
    <>
      <Typography
        variant="h5"
        p={2}
        pl={0}
        fontWeight="bold"
        color="primary.main"
        component="div"
      >
        {name}
      </Typography>
      <Grid container spacing={2}>
        {data.map((attrs, index) => {
          const props = attrs.attributes
          const type = attrs.type

          return (
            <Grid key={index} container item xs={12} sm={6} md={4} p={1}>
              {type === 'event' ? (
                <EventCard
                  name={props.name}
                  img={props['original-image-url']}
                  startsAt={props['starts-at']}
                  endsAt={props['ends-at']}
                  tz={props['timezone']}
                  online={props['online']}
                />
              ) : (
                <GroupCard
                  name={props.name}
                  img={props['thumbnail-image-url']}
                  about={props['about']}
                  followers={props['follower-count']}
                />
              )}
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
