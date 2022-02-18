import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import FooterFields from '../templates/FooterFields'

const lastRow = [
  'Maintained by Areeb Jamal & Team',
  `© ${new Date().getFullYear()} eventyay`,
  'Terms',
  'Contact',
  'Refund Policy',
  'Privacy',
]

export const Footer = (): JSX.Element => {
  return (
    <Box pt={6}>
      <Divider sx={{ bgcolor: '#323334' }} orientation="horizontal" flexItem />
      <Box
        component="footer"
        pt={2}
        sx={{ bgcolor: '#1b1c1d', color: 'common.white' }}
      >
        <FooterFields />
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ bgcolor: '#323334' }}
        />
        <Stack
          direction={{ md: 'column', lg: 'row' }}
          p={6}
          divider={
            <Divider
              sx={{ bgcolor: '#323334' }}
              orientation="vertical"
              flexItem
            />
          }
          spacing={1}
          justifyContent="center"
          alignContent="center"
        >
          {lastRow.map((val, index) => {
            return (
              <div key={index}>
                <Typography variant="body2">{val}</Typography>
              </div>
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}
