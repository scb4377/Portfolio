import { Box } from '@mui/material'
import NavigationBar from "./NavigationBar"
import HomePage from './HomePage.jsx'
import hero from '../images/hero.jpg'
import SecondSection from './SecondSection.js'
import { Route, Routes } from 'react-router-dom'

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
                
                <HomePage />
                <SecondSection />
            </Box>
        </Box>
    )
}

export default Home