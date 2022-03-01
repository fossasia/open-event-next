import { Grid, Typography } from '@mui/material'
import React from 'react'
import EventCard from './event/EventCard'
import GroupCard from './group/GroupCard'

interface Props {
  name: string
  data: ServerData[]
}

export default function FrontPage({ name, data }: Props): JSX.Element {
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
        {data.map((obj: ServerData, index: number) => {
          return (
            <Grid key={index} container item xs={12} sm={6} md={4} p={1}>
              {obj.type === 'event' ? (
                <EventCard props={obj.attributes} />
              ) : (
                <GroupCard props={obj.attributes} />
              )}
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
