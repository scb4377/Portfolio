import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Failure = () => {
  return (
    <Box
      sx={{
        paddingTop: '50px',
        paddingX: '10px',
        minHeight: '360px'
      }}
    >
      <Container
        sx={{
          backgroundColor: 'red',
          padding: '50px',
          textAlign: 'center',
          borderRadius: '5px'
        }}
      >
        <Typography variant='h5'>Oops!</Typography>
        <Typography variant="body2">Something went wrong.</Typography>
        <Typography variant='body1'>Please, try to reach Stephen later on.</Typography>
      </Container>
    </Box>
  )
}

export default Failure