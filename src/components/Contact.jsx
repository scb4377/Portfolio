import { Box, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box color={'white'}
      sx={{ display: 'flex',
      justifyContent: 'center',
    paddingY: 5}}
    >
        <Typography variant="h4"
          sx={{textDecoration: '1px underline lightblue',
          textUnderlineOffset: '12px',
          paddingBottom: '35px',
          }}
        >
          CONTACT
        </Typography>
    </Box>
  )
}

export default Contact