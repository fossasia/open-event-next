import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import { grey } from '@mui/material/colors'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import React from 'react'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[300]),
  backgroundColor: grey[300],
  '&:hover': {
    backgroundColor: grey[400],
  },
}))

const LinkButton = styled(Button)(() => ({
  width: 'fit-content',
  padding: '10px 0',
}))

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '2px solid #dadde9',
  },
}))

const CustomLink = styled('a')(({ theme }) => ({
  padding: '0.1rem 1.2rem',
  background: theme.palette.primary.main,
  textDecoration: 'none',
  color: theme.palette.common.white,
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const JoinEvent = () => {
  return (
    <Box>
      <Button
        variant="contained"
        fullWidth
        size="large"
        startIcon={<CalendarTodayIcon />}
      >
        Join Live Event
      </Button>

      <Box display="flex" margin="20px 0" gap="10px">
        <AccessTimeIcon sx={{ marginTop: '4px' }} />
        <Box>
          <Typography>Thursday, 10 March, 2022</Typography>
          <Typography>5:00 PM to 6:00 PM (CET)</Typography>
        </Box>
      </Box>

      <ColorButton
        variant="contained"
        fullWidth
        size="large"
        startIcon={<EventAvailableIcon />}
        color="info"
      >
        Add to Calender
      </ColorButton>

      <Stack direction="row" spacing={2} margin="20px 0">
        <CustomLink href="https://google.com" target="_blank">
          <TwitterIcon />
        </CustomLink>

        <CustomLink href="https://google.com" target="_blank">
          <LinkedInIcon />
        </CustomLink>

        <CustomTooltip
          title={
            <React.Fragment>
              <Typography color="inherit" sx={{ padding: '4px 10px' }}>
                Website
              </Typography>
            </React.Fragment>
          }
        >
          <LinkButton
            variant="contained"
            sx={{ paddingLeft: '10px', paddingRight: '10px' }}
          >
            Website
          </LinkButton>
        </CustomTooltip>
      </Stack>
    </Box>
  )
}

export default JoinEvent
