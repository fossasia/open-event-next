import type { NextPage } from 'next'
// import { useRouter } from 'next/router'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import LocationOnIcon from '@mui/icons-material/LocationOn'

import styles from '../../styles/Event.module.css'
import Stack from '@mui/material/Stack'
import BasicTable from '../../components/EventPage/Table'
import LeftTable from '../../components/EventPage/LeftTable'
import JoinEvent from '../../components/EventPage/JoinEvent'

const banner = `https://api.eventyay.com/static/media/events/2865/large/WWtYUnptdk/7ff9fe22-1f34-47dc-826e-c95a478f4a40.jpg`

const logo = `https://api.eventyay.com/static/media/temp/images/d413899c-57a9-412b-813a-2abb9d629ba9/UGc5UnlqYX/4e85f457-2659-477d-9724-78b553e17a97.png`

const Event: NextPage = () => {
  //   const router = useRouter()
  //   const { id } = router.query

  return (
    <Box>
      <Box style={{ height: '60px' }}></Box>
      <Box>
        <BannerImage />
        <Box className={styles.banner_text_wrapper}>
          <Box display="flex" gap="2rem">
            <Box className={styles.logo_wrapper}>
              <img src={logo} alt="Logo" className={styles.logo_image} />
            </Box>
            <Box>
              <Typography color="white" variant="h5">
                Thursday, 10 March, 2022 5:00 PM (CET)
              </Typography>
              <Typography color="white" variant="h3" margin="3px 0">
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

                <Typography color="white" variant="h5">
                  Online Event
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display="flex" padding="0 0.4rem">
        <Box style={{ width: '18.75%', padding: '1rem' }}>
          <LeftTable />
        </Box>

        <Box style={{ width: '62.5%', padding: '1rem' }}>
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

          <BasicTable />
        </Box>

        <Box style={{ width: '18.75%', padding: '1rem' }}>
          <JoinEvent />
        </Box>
      </Box>
    </Box>
  )
}

const BannerImage = () => {
  return (
    <Box className={styles.banner_wrapper}>
      <Image
        src={banner}
        layout="fill"
        priority
        className={styles.banner_image}
      />
    </Box>
  )
}

export default Event
