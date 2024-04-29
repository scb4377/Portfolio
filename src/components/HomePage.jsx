import { Box, Button, Container, Typography } from '@mui/material'
import hero from "../images/hero.jpg"

const HomePage = () => {
    return (
        <Container
            sx={{
                color: 'white', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', minHeight: '100vh'
            }}
        >
            <Box sx={{ height: '100%' }}>
                <Typography variant='h3'
                    sx={{
                        textDecoration: '1px underline lightblue',
                        textUnderlineOffset: '12px',
                        paddingBottom: '15px'
                    }}>
                    Stephen Blevins
                </Typography>
                <Typography variant='h6'>
                    SOFTWARE ENGINEER AND WEB DEVELOPER
                </Typography>
                <Button>
                    CONTACT
                </Button>
            </Box>
            <Box
                sx={{
                    maxWidth: '500px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '2px',
                    padding: '30px',
                    backdropFilter: "blur(5px) saturate(100%)",
                }}>
                <Typography variant='h6'
                    sx={{
                        textDecoration: '1px underline lightblue',
                        textUnderlineOffset: '12px',
                        paddingBottom: '15px'
                    }}>
                    ABOUT
                </Typography>
                <Typography variant='body1'>
                    &emsp; With over a decade in customer service and retail management,
                    coupled with a Bachelor of Science in Computer Information Systems specializing in software programming,
                    I bring a robust skill set to software development. Proficient in MERN stack, Java technologies,
                    and versed in various tools, I excel in understanding end-user perspectives and
                    translating them into user-friendly software solutions.
                    Eager for a role where I can further expand my knowledge and skills while contributing
                    effectively to innovative projects.
                </Typography>

            </Box>
        </Container>
    )
}

export default HomePage