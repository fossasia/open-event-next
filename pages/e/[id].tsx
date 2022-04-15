import type { NextPage } from 'next'
// import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import styles from '../../styles/Event.module.scss'
import TicketTable from '../../components/EventPage/TicketTable'
import Categories from '../../components/EventPage/Categories'
import JoinEvent from '../../components/EventPage/JoinEvent'

const banner = `https://api.eventyay.com/static/media/events/2865/large/WWtYUnptdk/7ff9fe22-1f34-47dc-826e-c95a478f4a40.jpg`

const logo = `https://api.eventyay.com/static/media/temp/images/d413899c-57a9-412b-813a-2abb9d629ba9/UGc5UnlqYX/4e85f457-2659-477d-9724-78b553e17a97.png`

const Event: NextPage = () => {
  //   const router = useRouter()
  //   const { id } = router.query

  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedCategory, setSelectedCategory] = useState('Info')

  return (
    <Box>
      <Box>
        <BannerImage />
        <Box className={styles.banner_text_wrapper} sx={{ padding: '0 20px' }}>
          <Box display="flex" gap="2rem">
            <Box className={styles.logo_wrapper}>
              <img src={logo} alt="Logo" className={styles.logo_image} />
            </Box>
            <Box>
              <Typography color="white" variant="h5" fontWeight="light">
                Thursday, 10 March, 2022 5:00 PM (CET)
              </Typography>
              <Typography
                color="white"
                variant="h3"
                margin="3px 0"
                fontWeight="light"
              >
                OSBA Members & Products
              </Typography>
              <Stack direction="row" alignItems="center">
                <LocationOnIcon
                  style={{
                    color: 'white',
                    height: '30px',
                    width: '30px',
                    marginRight: '0.5rem',
                  }}
                />

                <Typography color="white" variant="h5" fontWeight="light">
                  Online Event
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={isSmall ? 'column' : 'row'}
        padding="0 0.4rem 4rem 0"
      >
        <Box style={{ width: isSmall ? '100%' : '18.75%', padding: '1rem' }}>
          {isSmall ? (
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              fullWidth
            >
              <MenuItem value={'Info'}>Info</MenuItem>
              <MenuItem value={'Tickets'}>Tickets</MenuItem>
              <MenuItem value={'Schedule'}>Schedule</MenuItem>
              <MenuItem value={'Speakers'}>Speakers</MenuItem>
              <MenuItem value={'Getting Here'}>Getting Here</MenuItem>
            </Select>
          ) : (
            <Categories />
          )}
        </Box>

        {isSmall && (
          <Box style={{ width: isSmall ? '100%' : '18.75%', padding: '1rem' }}>
            <JoinEvent />
          </Box>
        )}

        <Box style={{ width: isSmall ? '100%' : '62.5%', padding: '1rem' }}>
          <Typography variant="h5">
            Die OSB Alliance-Mitglieder vernetzen sich!
          </Typography>
          <Typography marginTop="1rem" marginBottom="4rem" color="grey">
            Herzlich Willkommen zur Veranstaltungsreihe &quot;Members &
            Products&quot; der Open Source Business Alliance. Der Name ist
            Programm, auf der Veranstaltung stellen sich Mitglieder einem
            überregionalen Publikum aus potenziellen Kooperationspartnern und
            Kunden vor - Pitches über das eigene Unternehmen, Produkte,
            Kooperationsbedarfe oder Ähnliches. Der Ablauf ist einfach: 5
            Unternehmen – 5 Minuten Redezeit je Referent(in) Nach den Pitches
            besteht die Möglichkeit in einer 30-minütigen offenen Fragerunde die
            vorgestellten Unternehmen, Produkte oder Technologien besser kennen
            zulernen und gleichzeitig zu netzwerken.
          </Typography>

          <TicketTable />
        </Box>

        {!isSmall && (
          <Box style={{ width: isSmall ? '100%' : '18.75%', padding: '1rem' }}>
            <JoinEvent />
          </Box>
        )}
      </Box>
    </Box>
  )
}

const BannerImage = () => {
  return (
    <Box className={styles.banner_wrapper}>
      <img src={banner} className={styles.banner_image} alt="" />
    </Box>
  )
}

export default Event
