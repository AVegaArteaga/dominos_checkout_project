
import React, { useEffect} from 'react';
import { AppBar, Typography, Button } from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import useStyles from './styles';
import memories from '../../images/dominos-pizza-4-logo-png-transparent.png';



const Navbar = () => {
    const classes = useStyles()

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const location = useLocation(); //access to changes

    // const logout = () =>{
    //     dispatch({type: 'LOGOUT'});
    //     navigate("/");
    //     //setUser(null);
    // };

    useEffect(() => {
        //const token = user.token;
        //setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]); //JWT Location used to update on page.


    const WhiteTextTypography = withStyles({
        root: {
          color: "#0074ad"
        }
      })(Typography);

    return (
    
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <WhiteTextTypography className={classes.heading} variant="h2" align="center">Check Out</WhiteTextTypography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </div>
                <div>

                    <Button component={Link} to="/Home" variant="contained" className={classes.homeBox} >Home</Button>
              

                </div>
                <div>

                    <Button component={Link} to="/History" variant="contained" className={classes.historyBox} >History</Button>
              

                </div>
                <div>

                    <Button component={Link} to="/Home" variant="contained" className={classes.grahpBox} >Graph</Button>
              

                </div>
                <div>

                    <Button component={Link} to="/Dev" variant="contained" className={classes.devBox} >Dev info</Button>
              

                </div>
            </AppBar>

    );
};

export default Navbar;
