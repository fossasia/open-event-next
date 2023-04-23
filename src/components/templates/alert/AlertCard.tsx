import React from 'react'
import Alert from '@mui/material/Alert'

interface AlertProps {
  error: string | undefined
  success: string | undefined
}

const AlertCard = (props: AlertProps): JSX.Element => {
  return (
    <>
      {props.error ? (
        <Alert severity="error">{props.error}</Alert>
      ) : (
        <Alert severity="success">{props.success}</Alert>
      )}
    </>
  )
}

export default AlertCard
