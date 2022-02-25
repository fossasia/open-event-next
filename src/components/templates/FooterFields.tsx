import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from '../Link'

const info = ['Use eventyay', 'How it works', 'Pricing', 'Blog']
const feats = [
  'Plan Events',
  'Online Registration',
  'Sell Event Tickets',
  'Event Management Software',
]
const explore = [
  'Find Events',
  'Browse Events',
  'Attendee App',
  'Organizer App',
]
const socialLinks = [
  'Connect With Us',
  'Facebook',
  'Twitter',
  'Github',
  'Youtube',
  'Google Groups',
  'Gitter',
  'Telegram',
  'Weblate',
]
const footerLinks = [info, feats, explore, socialLinks]

const FooterFields = (): JSX.Element => {
  return (
    <Stack
      divider={
        <Divider orientation="vertical" sx={{ bgcolor: '#323334' }} flexItem />
      }
      alignContent="center"
      justifyContent="space-around"
      spacing={1}
      direction={{ xs: 'column', sm: 'row' }}
    >
      {footerLinks.map((arr, index) => {
        return (
          <Stack direction="column" key={index} justifyContent="flex-start">
            {arr.map((val, index) => {
              return (
                <Link
                  key={index}
                  sx={{
                    textDecoration: 'none',
                    ':hover': {
                      color: 'common.white',
                    },
                  }}
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="#bbbbbb"
                >
                  <Typography variant="body2" p={1}>
                    {val}
                  </Typography>
                </Link>
              )
            })}
          </Stack>
        )
      })}
    </Stack>
  )
}

export default FooterFields
