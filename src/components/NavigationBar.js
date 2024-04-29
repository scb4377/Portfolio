import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'

const pages = ["HOME", "PROJECTS", "CONTACT"]

const NavigationBar = () => {
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
                            {pages.map(page => (
                                <Button
                                    key={page}
                                    sx={{ color: 'white' }}
                                >
                                    {page}
                                </Button>
                            ))}
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