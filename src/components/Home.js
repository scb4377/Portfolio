import { Box } from '@mui/material'
import React from 'react'
import NavigationBar from "./NavigationBar"
import HomePage from './HomePage.jsx'
import hero from '../images/hero.jpg'

const Home = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                }}>

                <NavigationBar />
                <HomePage />
            </Box>

        </Box>
    )
}

export default Home