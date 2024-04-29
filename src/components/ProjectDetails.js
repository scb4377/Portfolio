import { Box, Container } from '@mui/material';
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import hero from "../images/hero.jpg"

const ProjectDetails = () => {

    const location = useLocation();
    const { cardId } = useParams();
    const { card } = location.state;

    return (
        <Box
            sx={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                height: '100%',
                width: '100%',
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
                }}></Box>

        </Box>
    )
}

export default ProjectDetails