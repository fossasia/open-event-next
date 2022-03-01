import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from '../Link'
import { Trans, t } from '@lingui/macro'

const info = [t`Use eventyay`, t`How it works`, t`Pricing`, t`Blog`]
const feats = [
  t`Plan Events`,
  t`Online Registration`,
  t`Sell Event Tickets`,
  t`Event Management Software`,
]
const explore = [
  t`Find Events`,
  t`Browse Events`,
  t`Attendee App`,
  t`Organizer App`,
]
const socialLinks = [
  t`Connect With Us`,
  t`Facebook`,
  t`Twitter`,
  t`GitHub`,
  t`YouTube`,
  t`Google Groups`,
  t`Gitter`,
  t`Telegram`,
  t`Weblate`,
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
          <Stack direction="column" key={index}>
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
                    <Trans>{val}</Trans>
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
