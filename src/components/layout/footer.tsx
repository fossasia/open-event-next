import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import FooterFields from '../templates/footerFields'

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
    <Box
      component="footer"
      pt={2}
      sx={{ bgcolor: 'common.white', color: 'black' }}
    >
      <FooterFields />
      <Divider orientation="horizontal" flexItem />
      <Stack
        direction={{ md: 'column', lg: 'row' }}
        p={2}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        justifyContent="center"
        alignContent="center"
      >
        {lastRow.map((val) => {
          return <div key={val}>{val}</div>
        })}
      </Stack>
    </Box>
  )
}
