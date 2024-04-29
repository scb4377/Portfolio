import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'

const Contact = () => {

  const { sectionRefs } = useContext(MyContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Box color={'white'}
      ref={sectionRefs[2]}
      sx={{
        id: 'contact',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingY: 5,
      }}
    >
      <Typography variant="h4"
        sx={{
          textDecoration: '1px underline rgb(0, 119, 255)',
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
          width: { xs: '100%', sm: '400px'},
          gap: 4,
          padding: '50px 10px'
        }}
      >
        <TextField id="name" name="name" onChange={handleFormData} type="text" label="NAME" variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
        <TextField id="email" name="email" onChange={handleFormData} type="email" label="EMAIL ADDRESS" variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
        <TextField id="message" name="message" onChange={handleFormData} type="text" label="MESSAGE" multiline variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
        <Button variant='contained'
          sx={{
            bgcolor: '#272727',
            '&:hover': {
              bgcolor: 'white',
              color: 'rgb(0, 119, 255)'
            }
          }}
        >SUBMIT</Button>
      </Box>
    </Box>
  )
}

export default Contact