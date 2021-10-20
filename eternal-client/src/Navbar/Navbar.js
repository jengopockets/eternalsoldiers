import { AppBar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import parchment from "../img/es_banner.png";
import eternal_logo from "../img/eternal_logo.png";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";

const NavBar = () => {
    return(
        <AppBar sx={{
            background: `url(${parchment})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
            color: 'black',
            height: '10em',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '4rem'
        }}>
            
            <IconButton 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2}}
            >
                <MenuIcon sx={{ fontSize: '4rem' }}/>
            </IconButton>
            <Box sx={{
                display:'flex',
                flexDirection:'row'
            }}>
                <Typography marginTop="3rem"  variant="h2" fontFamily="Sedgwick Ave Display">
                    Eternal
                </Typography>
                <img src={eternal_logo} alt='logo' max-width='100%' height='auto'/>
                <Typography marginTop="3rem" variant="h2" fontFamily="Sedgwick Ave Display">
                    Soldiers
                </Typography>
            </Box>
            <IconButton 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                border="dashed red"
                sx={{ mr: 2}}
            >
                <AccountCircleIcon sx={{ fontSize: '4rem' }}/>
            </IconButton>
            
        </AppBar>
    )
}

export default NavBar;