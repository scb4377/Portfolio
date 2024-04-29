import { Box, Container } from '@mui/material'
import building from '../images/building.jpg'
import Projects from './Projects'
import Contact from './Contact'

const SecondSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${building})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        minHeight: '100vh',
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
          overflowY: 'hidden'
        }}>
          <Projects />
          <Contact />
        </Box>
    </Box>
  )
}

export default SecondSection