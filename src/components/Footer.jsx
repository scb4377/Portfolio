import { Box, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
        <Box display={'flex'} gap={2} alignItems={'center'}>
        <a href='https://github.com/sblevins-dev' target="_blank">
          <GitHubIcon fontSize='large'
            sx={{
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: 'rgb(0, 119, 255)'
              }
            }} />
        </a>
        <a href="https://www.linkedin.com/in/sblevins-dev/" target='_blank'>
          <LinkedInIcon fontSize='large'
            sx={{
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: 'rgb(0, 119, 255)'
              }
            }} />
        </a>
      </Box>
      <Typography variant={"subtitle2"} mt={2}>Built by Stephen Blevins</Typography>
    </>
  )
}

export default Footer