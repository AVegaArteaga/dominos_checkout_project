
import React, { useEffect} from 'react';

import {Link, useLocation} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { grey, red, blue, pink, white } from '@mui/material/colors';
import styles from './styles';

import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const ColorButtonRed = styled(Button)(({ theme }) => ({
    
    color: theme.palette.getContrastText(red[500]), //to maximize the contrast between the background and
    backgroundColor: red[500],

    '&:hover': {
      backgroundColor: red[700],
    },

}));

const ColorButtonGray = styled(Button)(({ theme }) => ({
    
    color: theme.palette.getContrastText(grey[900]), //to maximize the contrast between the background and
    backgroundColor: grey[500],


    '&:hover': {
      backgroundColor: grey[700],
    },

}));

const ColorButtonBlue = styled(Button)(({ theme }) => ({
    
    color: theme.palette.getContrastText(blue[500]), //to maximize the contrast between the background and
    backgroundColor: blue[500],

    '&:hover': {
      backgroundColor: blue[700],
    },

}));

const ColorButtonPink = styled(Button)(({ theme }) => ({
    
    color: theme.palette.getContrastText(pink[500]), //to maximize the contrast between the background and
    backgroundColor: pink[500],

    '&:hover': {
      backgroundColor: pink[700],
    },

}));


  

const Navbar = () => {
    
    const classes = styles();
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const location = useLocation(); //access to changes


    useEffect(() => {
        //const token = user.token;
        //setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]); //JWT Location used to update on page.

    return (
        
        <Box margin='60px' >
            <AppBar  sx={{ bgcolor: "#222222" }} position="fixed">
                <Toolbar variant="dense" >
                    
                    
                        <Typography variant="h8" sx={{ flexGrow: 1 }}>
                            Check Out
                            <LocalAtmIcon/>
                        </Typography>
                    
                   
                    <Stack spacing={.5} direction="row">

                        <ColorButtonRed   component={Link} to="/Home"    size="small" size="small" variant="contained" >Home</ColorButtonRed>
                    
                        <ColorButtonGray  component={Link} to="/Past" size="small" size="small" variant="contained" >Past </ColorButtonGray>
                    
                        <ColorButtonBlue  component={Link} to="/Graph"   size="small" size="small" variant="contained" >Graph</ColorButtonBlue>
                    
                        <ColorButtonPink  component={Link} to="/Dev"     size="small" size="small" variant="contained" >Dev</ColorButtonPink>
                    </Stack>
                    
                    
                </Toolbar>  
            </AppBar>
        </Box>
        

    );
};

export default Navbar;
