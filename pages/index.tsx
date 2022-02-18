// import { activateAndSetCookie } from '../utils/i18n'
// import { Trans } from '@lingui/macro'
// import dayjs from 'dayjs'
// import { useTimezone } from '../store/useTimezone'

import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from '@mui/material'
import useSWR from 'swr'
import React from 'react'
import EventCard from '../src/components/templates/event/EventCard'

export default function Index(): JSX.Element {
  // const localTimezone = useTimezone((state) => state.localTimezone)
  // const defaultTimezone = useTimezone((state) => state.defaultTimezone)
  // const setTimezone = useTimezone((state) => state.setTimezone)
  // const handleTimeZone = (e: any) => {
  //   setTimezone(e.target.value)
  // }

  const theme = useTheme()
  const showCoverImg = useMediaQuery(theme.breakpoints.up('md'))

  const url = `https://api.eventyay.com/v1/events?cache=true
  &filter=[{"and":[{"name":"state","op":"eq","val":"published"},{"name":"privacy","op":"eq","val":"public"},{"name":"is-featured","op":"eq","val":true}]},{"or":[{"name":"ends-at","op":"ge","val":"2022-02-17T06:47:30.094Z"}]}]
  &page[size]=6
  &public=true
  &sort=starts-at`
  const fetcher = async (url: string) =>
    await fetch(url).then((res) => res.json())
  const { data, error } = useSWR(url, fetcher)

  if (error) console.error(error)
  if (!data) return <CircularProgress />

  return (
    <>
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
          {data.data.map((event, index) => {
            const attrs = event.attributes

            return (
              <Grid key={index} container item xs={12} sm={6} md={4} p={1}>
                <EventCard
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
    </>
  )
}
