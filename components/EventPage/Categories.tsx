import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const names = ['Info', 'Tickets', 'Schedule', 'Speakers', 'Getting Here']

export default function Categories() {
  return (
    <Box sx={{ border: '1.5px solid #c5c5c5', borderRadius: '4px' }}>
      {names.map((name) => (
        <CustomLink key={name} name={name} />
      ))}
    </Box>
  )
}

const CustomLink = ({ name }: { name: string }) => {
  return (
    <>
      <Box style={{ padding: '12px 20px', cursor: 'pointer' }}>
        <Typography>{name}</Typography>
      </Box>
      <Divider />
    </>
  )
}
