import { Box, Container, Typography } from "@mui/material"
import ProjectCard from "./ProjectCard"


const Projects = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '50px',
            }}
        >
            <Typography variant="h4" color={'white'}
                sx={{
                    textDecoration: '1px underline lightblue',
                    textUnderlineOffset: '12px',
                    paddingBottom: '15px'
                }}
            >
                PROJECTS
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 10,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    paddingY: 5
                }}
            >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Box>
        </Box>
    )
}

export default Projects