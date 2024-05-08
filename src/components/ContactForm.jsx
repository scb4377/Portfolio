import { Box, Button, TextField } from '@mui/material'


const ContactForm = ({ handleFormData, handleSubmit, form }) => {
    return (
        <Box
            sx={{
                width: { xs: '100%', sm: '400px' },
                paddingTop: '50px',
                paddingX: '10px',
                minHeight: '360px'
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
                <TextField id="name" name="name" required onChange={handleFormData} type="text" label="NAME" variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
                <TextField id="email" name="email" required onChange={handleFormData} type="email" label="EMAIL ADDRESS" variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
                <TextField id="message" name="message" required onChange={handleFormData} type="text" label="MESSAGE" multiline variant="filled" sx={{ bgcolor: 'white' }} fullWidth={true} />
                <Button variant='contained'
                    type="submit"
                    sx={{
                        bgcolor: '#272727',
                        '&:hover': {
                            bgcolor: 'white',
                            color: 'rgb(0, 119, 255)'
                        }
                    }}
                >
                    SUBMIT
                </Button>
            </form>

        </Box>
    )
}

export default ContactForm