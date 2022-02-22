import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from '../Link'
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
    <Box sx={{ bgcolor: '#1b1c1d' }} component="footer" p={4}>
      <Container maxWidth="md">
        <FooterFields />
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ bgcolor: '#323334' }}
        />
        <Stack
          direction={{ md: 'column', lg: 'row' }}
          pt={2}
          mr={{ lg: 8 }}
          color="#bbbbbb"
          divider={
            <Divider
              sx={{ bgcolor: '#323334' }}
              orientation="vertical"
              flexItem
            />
          }
          justifyContent="center"
          spacing={1}
        >
          {lastRow.map((val, index) => {
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
                <Typography variant="body2">{val}</Typography>
              </Link>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}
