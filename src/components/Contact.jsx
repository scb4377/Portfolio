import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import { MyContext } from './MyContext'
import emailjs from "@emailjs/browser"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

  const { sectionRefs } = useContext(MyContext);

  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, form.current, {
      publicKey: process.env.REACT_APP_EMAILJS_USER
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error)
        }
      )
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
          width: { xs: '100%', sm: '400px' },
          padding: '50px 10px'
        }}
      >
        <form onSubmit={handleSubmit}
          ref={form}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            width: "100%"
          }}>
          <TextField id="name" name="name" onChange={handleFormData} type="text" label="NAME" variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
          <TextField id="email" name="email" onChange={handleFormData} type="email" label="EMAIL ADDRESS" variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
          <TextField id="message" name="message" onChange={handleFormData} type="text" label="MESSAGE" multiline variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
          <Button variant='contained'
            type="submit"
            sx={{
              bgcolor: '#272727',
              '&:hover': {
                bgcolor: 'white',
                color: 'rgb(0, 119, 255)'
              }
            }}
          >SUBMIT</Button>
        </form>

      </Box>
      
      <Box display={'flex'} gap={2} alignItems={'center'}>
        <a href='https://github.com/sblevins-dev' target="_blank">
          <GitHubIcon fontSize='large'
            sx={{
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: 'rgb(0, 119, 255)'
              }
            }} />
        </a>
        <a href="https://www.linkedin.com/in/sblevins-dev/" target='_blank'>
          <LinkedInIcon fontSize='large'
            sx={{
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: 'rgb(0, 119, 255)'
              }
            }} />
        </a>
      </Box>
      <Typography variant={"subtitle2"} mt={2}>Built by Stephen Blevins</Typography>

    </Box>
  )
}

export default Contact