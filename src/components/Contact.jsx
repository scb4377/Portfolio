import { Box, Typography } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import { MyContext } from './MyContext'
import emailjs from "@emailjs/browser"
import ContactForm from './ContactForm'
import Success from './Success'
import Failure from './Failure'

const Contact = () => {

  const { sectionRefs, success, setSuccess, error, setError } = useContext(MyContext);

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
          setSuccess(true);
        },
        (error) => {
          setError(true);
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
      {success ?
        <Success />
        : error ? <Failure />
          : <ContactForm handleFormData={handleFormData} handleSubmit={handleSubmit} form={form} />}
    </Box>
  )
}

export default Contact