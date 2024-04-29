import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import bug from "../images/bug.png"

const ProjectCard = () => {
    return (
        <Card sx={{ maxWidth: '400px', width: '400px', bgcolor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Building"
                    height="200"
                    image={bug}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component={'div'}>
                        Bug Tracker
                    </Typography>
                    <Typography variant="body2"
                        sx={{ textDecoration: '1px underline lightblue',
                        textUnderlineOffset: '12px',
                        paddingBottom: '15px' }}
                    >
                        Show More
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProjectCard