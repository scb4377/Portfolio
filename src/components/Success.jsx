import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Success = () => {
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
          backgroundColor: 'green',
          padding: '50px',
          textAlign: 'center',
          borderRadius: '5px'
        }}
      >
        <Typography variant='h5'>Success!</Typography>
        <Typography variant="body2">Your email was sent.</Typography>
        <Typography variant='body1'>Stephen will reach out to you as soon as possible!</Typography>
      </Container>
    </Box>
  )
}

export default Success