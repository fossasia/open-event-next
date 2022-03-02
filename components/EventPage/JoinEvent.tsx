import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { grey } from '@mui/material/colors'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Tooltip from '@mui/material/Tooltip'
import { CustomLink } from './CustomLink'

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

      <Button
        variant="contained"
        fullWidth
        size="large"
        startIcon={<EventAvailableIcon />}
        color="info"
        sx={{
          backgroundColor: grey[300],
          color: '#000',
          '&:hover': {
            backgroundColor: grey[300],
          },
        }}
      >
        Add to Calender
      </Button>

      <Stack direction="row" spacing={2} margin="20px 0">
        <CustomLink href="https://google.com" target="_blank">
          <TwitterIcon />
        </CustomLink>

        <CustomLink href="https://google.com" target="_blank">
          <LinkedInIcon />
        </CustomLink>

        <CustomLink href="https://google.com" target="_blank">
          <Tooltip
            arrow
            title={
              <Typography variant="body2" sx={{ padding: '3px 6px' }}>
                Website
              </Typography>
            }
          >
            <Typography>Website</Typography>
          </Tooltip>
        </CustomLink>
      </Stack>
    </Box>
  )
}

export default JoinEvent
