import { Box, Typography } from "@mui/material"
import ProjectCard from "./ProjectCard"
import { useContext } from "react"
import { MyContext } from "./MyContext"
import data from "./ProjectData"


const Projects = () => {

    const { sectionRefs } = useContext(MyContext);

    return (
        <Box
            ref={sectionRefs[1]}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '100px',
            }}
        >
            <Typography variant="h4" color={'white'}
                sx={{
                    textDecoration: '1px underline rgb(0, 119, 255)',
                    textUnderlineOffset: '12px',
                    paddingBottom: '15px'
                }}
            >
                RECENT PROJECTS
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
                {data.map(p => (
                    <ProjectCard key={p.projectTitle} data={p} />
                ))}
            </Box>
        </Box>
    )
}

export default Projects