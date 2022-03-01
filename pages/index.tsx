import {
  Button,
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import { Trans } from '@lingui/macro'
import FrontPage from '../src/components/templates/FrontPage'
import fetcher from '../utils/fetcher'
import toCamelCase from '../utils/camelCase'

interface Props {
  events: ServerData[]
  upcomingEvents: ServerData[]
  groups: ServerData[]
}

export default function Index(props: Props): JSX.Element {
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
            <Trans>
              The open source event solution for virtual and in-person events.
            </Trans>
          </Typography>
          <Button variant="contained">
            <Trans>Create Event</Trans>
          </Button>
        </Box>
      )}
      <Container maxWidth="lg">
        <FrontPage data={props.events} name="Featured Events" />
        <FrontPage data={props.upcomingEvents} name="Upcoming Events" />
        <FrontPage data={props.groups} name="Popular Groups" />
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
  const upcomingEventUrl = `https://api.eventyay.com/v1/events/upcoming?cache=true&page[size]=3&public=true&upcoming=true`
  const groupsUrl = `https://api.eventyay.com/v1/groups?cache=true&filter=[{"name":"is-promoted","op":"eq","val":true}]&include=user,follower&page[size]=3&public=true`

  const [event, eventErr] = await fetcher(eventUrl)
  if (eventErr) {
    console.error(eventErr)
  }
  const events = toCamelCase(event.data)

  const [upcomingEvent, upcomingEventErr] = await fetcher(upcomingEventUrl)
  if (upcomingEventErr) {
    console.error(upcomingEventErr)
  }
  const upcomingEvents = toCamelCase(upcomingEvent.data)

  const [group, groupErr] = await fetcher(groupsUrl)
  if (groupErr) {
    console.error(groupErr)
  }
  const groups = toCamelCase(group.data)

  return {
    props: { events, upcomingEvents, groups },
    revalidate: 60 * 60 * 1000,
  }
}
