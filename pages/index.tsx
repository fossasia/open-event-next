// import Head from 'next/head'
// import { activateAndSetCookie } from '../utils/i18n'
// import { Trans } from '@lingui/macro'
// import dayjs from 'dayjs'
// import { useTimezone } from '../store/useTimezone'

import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import EventCard from '../src/components/templates/event/EventCard'

export default function Index(): JSX.Element {
  // const localTimezone = useTimezone((state) => state.localTimezone)
  // const defaultTimezone = useTimezone((state) => state.defaultTimezone)
  // const setTimezone = useTimezone((state) => state.setTimezone)
  // const handleTimeZone = (e: any) => {
  //   setTimezone(e.target.value)
  // }

  const [eventData, setEventData] = useState([])

  useEffect(() => {
    const getEventData = async () => {
      try {
        const resp = await fetch(`https://api.eventyay.com/v1/events?cache=true
      &filter=[{"and":[{"name":"state","op":"eq","val":"published"},{"name":"privacy","op":"eq","val":"public"},{"name":"is-featured","op":"eq","val":true}]},{"or":[{"name":"ends-at","op":"ge","val":"2022-02-17T06:47:30.094Z"}]}]
      &page[size]=6
      &public=true
      &sort=starts-at`)
        const data = await resp.json()

        setEventData((prevData) => data.data)
      } catch (err) {
        console.error(err)
      }
    }
    getEventData()
  }, [])

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        p={2}
        fontWeight="bold"
        color="primary.main"
        component="div"
      >
        Featured Events
      </Typography>
      <Grid container spacing={2}>
        {eventData.map((event, index) => {
          const attrs = event.attributes

          return (
            <Grid key={index} container item xs={12} sm={6} md={4} p={1}>
              <EventCard
                key={index}
                name={attrs.name}
                img={attrs['original-image-url']}
                startsAt={attrs['starts-at']}
                endsAt={attrs['ends-at']}
                tz={attrs['timezone']}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
