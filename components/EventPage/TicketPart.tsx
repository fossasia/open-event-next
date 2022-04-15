import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

interface TicketPartType {
  quantity: string
  setQuantity: (e: SelectChangeEvent) => void
}

export const TicketPart = ({ quantity, setQuantity }: TicketPartType) => {
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
