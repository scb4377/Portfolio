import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import { useContext } from 'react'
import { MyContext } from './MyContext'
import { useLocation, useNavigate } from 'react-router-dom'


const pages = ["HOME", "PROJECTS", "CONTACT"]
const NavButton = styled(Button)({
    color: 'white',
    '&:hover': {
        color: 'rgb(0, 119, 255)'
    }
})

const NavigationBar = () => {

    const { sectionRefs, scrollTo } = useContext(MyContext);

    const navigate = useNavigate()
    const location = useLocation();
    const currentPath = location.pathname;

    const handleNavClick = (index) => {
        if (currentPath !== "/") {
            navigate("/");
            setTimeout(() => {
                scrollTo(index)
            }, 500);
        } else {
            scrollTo(index)
        }
    }

    return (
        <AppBar position='fixed'
            sx={{
                bgcolor: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: "blur(5px) saturate(100%)"
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography>
                            STEPHEN BLEVINS
                        </Typography>
                        <Box>
                            <NavButton onClick={() => handleNavClick(0)}>HOME</NavButton>
                            <NavButton onClick={() => handleNavClick(1)}>PROJECTS</NavButton>
                            <NavButton onClick={() => handleNavClick(2)}>CONTACT</NavButton>
                        </Box>

                    </Box>

                    {/* Mobile */}
                    {/* <Box>
                    <Menu open={true}>
                        {console.log(pages)}
                        {pages.map(page => (
                            <MenuItem key={page}>
                                <Typography textAlign='center'>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavigationBar