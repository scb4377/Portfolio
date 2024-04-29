import { Card, CardActionArea, CardContent, CardMedia, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const CardLink = styled(Link)({
    textDecoration: 'none'
})

const ProjectCard = ({ data }) => {
    return (
        <CardLink>
            <Card
                sx={{
                    maxWidth: '400px',
                    width: '400px',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    backdropFilter: "blur(5px) saturate(100%)",
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Building"
                        height="200"
                        image={data.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component={'div'}>
                            {data.projectTitle}
                        </Typography>
                        <Typography variant="body2"
                            sx={{
                                textDecoration: '1px underline rgb(0, 119, 255)',
                                textUnderlineOffset: '5px',
                                paddingBottom: '15px'
                            }}
                        >
                            Show More
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </CardLink>

    )
}

export default ProjectCard