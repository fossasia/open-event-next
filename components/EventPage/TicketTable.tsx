import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InfoIcon from '@mui/icons-material/Info'

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

const TicketPart = ({
  quantity,
  setQuantity,
}: {
  quantity: string
  setQuantity: (e: SelectChangeEvent) => void
}) => {
  return (
    <TableContainer sx={{ paddingLeft: '1em', paddingRight: '1em' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
              Registrierung
              <br />
              Sale ends on Thursday, 10 March, 2022 6:00 PM (CET)
            </TableCell>
            <TableCell align="center">Free</TableCell>
            <TableCell align="center">
              <Select value={quantity} onChange={setQuantity}>
                <MenuItem value={'0'}>0</MenuItem>
                <MenuItem value={'1'}>1</MenuItem>
              </Select>
            </TableCell>
            <TableCell align="right">Free</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
