import { Box, Divider, ListItem, Stack } from '@mui/material'
import React from 'react'
import FooterFields from '../footerFields'

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
const lastRow = [
  'Maintained by Areeb Jamal & Team',
  `© ${new Date().getFullYear()} eventyay`,
  'Terms',
  'Contact',
  'Refund Policy',
  'Privacy',
]

export const Footer = () => {
  return (
    <Box>
      <Stack
        alignContent="center"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        direction={{ xs: 'column', md: 'row' }}
      >
        {footerLinks.map((linkArr) => {
          return <FooterFields arr={linkArr} />
        })}
      </Stack>
      <Divider orientation="horizontal" flexItem />
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        {lastRow.map((val) => {
          return <ListItem key={val}>{val}</ListItem>
        })}
      </Stack>
    </Box>
  )
}
