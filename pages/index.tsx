// import { activateAndSetCookie } from '../utils/i18n'
// import { Trans } from '@lingui/macro'
// import dayjs from 'dayjs'
// import { useTimezone } from '../store/useTimezone'

import {
  Button,
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import FrontPage from '../src/components/templates/FrontPage'
import fetcher from '../src/utils/fetcher'

export default function Index({ events, upcomingEvents }): JSX.Element {
  // const localTimezone = useTimezone((state) => state.localTimezone)
  // const defaultTimezone = useTimezone((state) => state.defaultTimezone)
  // const setTimezone = useTimezone((state) => state.setTimezone)
  // const handleTimeZone = (e: any) => {
  //   setTimezone(e.target.value)
  // }

  const theme = useTheme()
  const showCoverImg = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box pb={6}>
      {showCoverImg && (
        <Box className="coverImg" pb={2}>
          <Typography
            variant="h3"
            component="div"
            width="800px"
            height="128px"
            pb={2}
            sx={{ fontWeight: 'light' }}
          >
            The open source event solution for virtual and in-person events.
          </Typography>
          <Button variant="contained">Create Event</Button>
        </Box>
      )}
      <Container maxWidth="lg">
        <FrontPage data={events.data} name="Featured Events" />
        <FrontPage data={upcomingEvents.data} name="Upcoming Events" />
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  const date = new Date().toISOString()
  const eventUrl = `https://api.eventyay.com/v1/events?cache=true
  &filter=[{"and":[{"name":"state","op":"eq","val":"published"},{"name":"privacy","op":"eq","val":"public"},{"name":"is-featured","op":"eq","val":true}]},{"or":[{"name":"ends-at","op":"ge","val":"${date}"}]}]
  &page[size]=6
  &public=true
  &sort=starts-at`
  const upcomingEventUrl = `https://api.eventyay.com/v1/events/upcoming?cache=true&include=event-topic,event-sub-topic,event-type,speakers-call&page[size]=3&public=true&upcoming=true`

  const [events, eventsErr] = await fetcher(eventUrl)

  if (eventsErr) {
    console.error(eventsErr)
  }

  const [upcomingEvents, upcomingEventsErr] = await fetcher(upcomingEventUrl)

  if (upcomingEventsErr) {
    console.error(upcomingEventsErr)
  }

  return {
    props: { events, upcomingEvents },
    revalidate: 60 * 60 * 1000,
  }
}
