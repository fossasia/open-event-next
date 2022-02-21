import { Grid, Typography } from '@mui/material'
import React from 'react'
import EventCard from './event/EventCard'

export default function FrontPage({ name, data }): JSX.Element {
  return (
    <>
      <Typography
        variant="h5"
        p={2}
        fontWeight="bold"
        color="primary.main"
        component="div"
      >
        {name}
      </Typography>
      <Grid container spacing={2}>
        {data.map((event, index) => {
          const attrs = event.attributes

          return (
            <Grid key={index} container item xs={12} sm={6} md={4} p={1}>
              <EventCard
                name={attrs.name}
                img={attrs['original-image-url']}
                startsAt={attrs['starts-at']}
                endsAt={attrs['ends-at']}
                tz={attrs['timezone']}
                online={attrs['online']}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
