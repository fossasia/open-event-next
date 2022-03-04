import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from '../Link'
import FooterFields from '../templates/FooterFields'
import { Trans, t } from '@lingui/macro'
import TranslateButton from '../TranslateButton'

const lastRow = [
  t`Maintained by Areeb Jamal & Team`,
  t`© ${new Date().getFullYear()} eventyay`,
  t`Terms`,
  t`Contact`,
  t`Refund Policy`,
  t`Privacy`,
]

export const Footer = (): JSX.Element => {
  return (
    <Box sx={{ bgcolor: '#1b1c1d' }} component="footer" p={4}>
      <Container maxWidth="md">
        <FooterFields />
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ bgcolor: '#323334', marginTop: '10px' }}
        />
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          pt={2}
          mt={1}
          color="#bbbbbb"
          divider={
            <Divider
              sx={{ bgcolor: '#323334' }}
              orientation="vertical"
              flexItem
            />
          }
          justifyContent="space-between"
          alignContent="center"
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
                <Typography component="div" variant="body2">
                  <Trans>{val}</Trans>
                </Typography>
              </Link>
            )
          })}
          <TranslateButton />
        </Stack>
      </Container>
    </Box>
  )
}
