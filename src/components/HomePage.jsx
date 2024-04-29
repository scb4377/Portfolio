import { Box, Button, Container, Typography } from '@mui/material'
import hero from "../images/hero.jpg"
import { useContext } from 'react';
import { MyContext } from './MyContext';

const HomePage = () => {

    const { sectionRefs, scrollTo } = useContext(MyContext);
    
    return (
        <Container
            ref={sectionRefs[0]}
            sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: { sm: 'center', lg: 'space-between'},
                minHeight: '100vh',
            }}
        >
            <Box sx={{ height: '100%', maxHeight: '100vh' }}>
                <Typography variant='h3'
                    sx={{
                        textDecoration: '1px underline rgb(0, 119, 255)',
                        textUnderlineOffset: '12px',
                        paddingBottom: '15px'
                    }}>
                    Stephen Blevins
                </Typography>
                <Typography variant='h6'>
                    SOFTWARE ENGINEER AND WEB DEVELOPER
                </Typography>
                <Button variant='contained'
                onClick={() => scrollTo(2)}
                    sx={{
                        marginY: 2,
                        bgcolor: '#272727',
                        '&:hover': {
                            bgcolor: '#ffffff',
                            color: 'rgb(0, 119, 255)'
                        }
                    }}
                >
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
                    display: { xs: 'none', sm: 'flex'},
                    flexDirection: 'column'
                }}>
                <Typography variant='h6'
                    sx={{
                        textDecoration: '1px underline rgb(0, 119, 255)',
                        textUnderlineOffset: '5px',
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