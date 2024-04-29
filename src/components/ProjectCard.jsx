import { Card, CardActionArea, CardContent, CardMedia, Typography, styled } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const ProjectCard = ({ data }) => {

    const navigate = useNavigate();

    const handleCardClick = (card) => {
        navigate(`/details/${card.id}`, { state: { card } });
    }


    return (
        <Card
            onClick={() => handleCardClick(data)}
            sx={{
                maxWidth: '400px',
                width: {xs: '100%', md: '400px'},
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

    )
}

export default ProjectCard