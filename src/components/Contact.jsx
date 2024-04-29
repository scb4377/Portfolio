import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box color={'white'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingY: 5
      }}
    >
      <Typography variant="h4"
        sx={{
          textDecoration: '1px underline lightblue',
          textUnderlineOffset: '12px',
          paddingBottom: '35px',
        }}
      >
        CONTACT
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '400px',
          gap: 4,
          paddingY: '50px'
        }}
      >
        <TextField id="outlined-basic" label="NAME" variant="filled" sx={{ bgcolor: 'white'}} fullWidth={true} />
        <TextField id="outlined-basic" label="EMAIL ADDRESS" variant="filled" sx={{ bgcolor: 'white'}} fullWidth={true} />
        <TextField id="outlined-basic" label="MESSAGE" multiline variant="filled" sx={{ bgcolor: 'white'}} fullWidth={true} />
        <Button variant='contained'>SUBMIT</Button>
      </Box>
    </Box>
  )
}

export default Contact