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
      divider={<Divider orientation="vertical" flexItem />}
      alignContent="center"
      justifyContent="center"
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
    >
      {footerLinks.map((arr) => {
        return (
          <Stack direction="column" key={Math.floor(Math.random() * 12)}>
            <Link
              sx={{ textDecoration: 'none', color: 'common.white' }}
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {arr.map((val) => {
                return (
                  <Typography key={val} p={1} sx={{ color: 'black' }}>
                    {val}
                  </Typography>
                )
              })}
            </Link>
          </Stack>
        )
      })}
    </Stack>
  )
}

export default FooterFields
