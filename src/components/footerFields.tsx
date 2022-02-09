import { Divider, ListItem, Stack } from '@mui/material'
import React from 'react'

const FooterFields = ({ arr }) => {
  return (
    <Stack
      divider={<Divider orientation="vertical" flexItem />}
      direction="column"
    >
      {arr.map((val) => {
        return <ListItem key={val}>{val}</ListItem>
      })}
    </Stack>
  )
}

export default FooterFields
