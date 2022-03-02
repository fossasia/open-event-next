import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { SelectChangeEvent } from '@mui/material/Select'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InfoIcon from '@mui/icons-material/Info'
import { TicketPart } from './TicketPart'

export default function TicketTable() {
  const [ticketQuantity, setTicketQuantity] = useState('1')

  const handleQuantity = (e: SelectChangeEvent) => {
    setTicketQuantity(e.target.value)
  }

  return (
    <Paper sx={{ border: '1px solid rgba(34,36,38,.15)' }}>
      <Typography variant="h5" fontWeight="500" padding="0.8em 1em">
        Tickets
      </Typography>
      <Divider />
      <TicketPart quantity={ticketQuantity} setQuantity={handleQuantity} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '1.3em',
          gap: '15px',
        }}
      >
        <Typography variant="h6" fontWeight="400">
          Grand Total: 0.00
        </Typography>
        <Button variant="contained">Order Now</Button>
        <Button variant="contained" startIcon={<InfoIcon />} color="success">
          Refund Policy
        </Button>
      </Box>
    </Paper>
  )
}
