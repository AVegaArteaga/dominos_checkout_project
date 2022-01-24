// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import {Paper, Button , Grid, Typography, TextField, Container, Grow, Input} from '@material-ui/core';
// eslint-disable-next-line
//import { useDispatch, useSelector } from 'react-redux'; //selector recives redux states as arguments, return a value of number of something
import useStyles from './styles';
//import { createPost } from '../../actions/posts';
import axios from 'axios';

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// eslint-disable-next-line
const Form = ({ currentId, setCurrentId }) =>{
    
    const classes = useStyles();
    //change te bills into arrayOfBills  array
    const [postData, setPostData] = useState({ name: '', bill1: 0, bill5: 0, bill10: 0, bill20: 0, bill50: 0, bill100: 0, checkOutTotal: 0});
    const [outPostData, setOutPostData] = useState({ bill1: 0, bill5: 0, bill10: 0, bill20: 0, bill50: 0, bill100: 0, totalBefore: 0, totalAfter: 0 });
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);


    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClickSuccess = () => {
        setOpenSuccess(true);
    };
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {return;}
        setOpenSuccess(false);
    };
    //////////////////////////////////////////
    const handleClickFailure = () => {
        setOpenFailure(true);
    };
    const handleCloseFailure = (event, reason) => {
        if (reason === "clickaway") {return;}
        setOpenFailure(false);
    };


    const clear = () =>{ //not clearing
    
        setCurrentId(0);
        setPostData({}); // its clearing the useState, but not the text box
        console.log("::::::::");
        console.log(postData);
        
    };


    function calcTotal() {
        return parseInt(postData.bill1)  + parseInt(postData.bill5) * 5 + parseInt(postData.bill10) * 10
              + parseInt(postData.bill20) * 20 + parseInt(postData.bill50) * 50 + parseInt(postData.bill100) * 100;
    };
       

    const handleSubmit = () => {

        var varTotal = calcTotal();
        // postData.checkOutTotal
        var varTotalAfter = varTotal - postData.checkOutTotal;
        
        if(varTotal > postData.checkOutTotal) {

    
           
            setOutPostData({  bill1: postData.bill1, bill5: postData.bill5, bill10: postData.bill10, bill20: postData.bill20, bill50: postData.bill50, bill100: postData.bill100 , totalBefore: varTotal, totalAfter: varTotalAfter})
           
            console.log(postData);
        

            axios({method: "POST", url: 'http://localhost:5000/posts', data: postData,})
            .then((res)  => { 
                handleClickSuccess();


            }) //function goes good
            .catch((err) => {
                handleClickFailure();
            })// if goes bad
        }
        else{
            setOutPostData({bill1:0, bill5: 0, bill10: 0, bill20: 0, bill50: 0, bill100: 0, totalBefore: 0, totalAfter: varTotalAfter}); 
            console.log("No bills 0 all");
            handleClickFailure();
        }
        
    };

    const fontColorPos = {
        style: { color: "#0ab101" },
        fontSize: 50 
    }

    const fontColorRed = {
        style: { color: "#e61e29" },
        fontSize: 50 
    }

    return (
        <Grow in>
            <Container>
                    <Grid container justifyContent='center' alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper} >
                                <Typography  variant="h5" align='center'>Enter your tips</Typography>
                                  <TextField className={classes.textSpace} fullWidth variant="outlined" label="1x"    onBlur={(e) => {var data = postData; data.bill1   = e.target.value; setPostData(data)}} ></TextField>
                                  <TextField className={classes.textSpace} fullWidth variant="outlined" label="5x"    onBlur={(e) => {var data = postData; data.bill5   = e.target.value; setPostData(data)}} ></TextField>
                                  <TextField className={classes.textSpace} fullWidth variant="outlined" label="10x"   onBlur={(e) => {var data = postData; data.bill10  = e.target.value; setPostData(data)}} ></TextField>
                                  <TextField className={classes.textSpace} fullWidth variant="outlined" label="20x"   onBlur={(e) => {var data = postData; data.bill20  = e.target.value; setPostData(data)}} ></TextField>
                                  <TextField className={classes.textSpace} fullWidth variant="outlined" label="50x"   onBlur={(e) => {var data = postData; data.bill50  = e.target.value; setPostData(data)}} ></TextField>
                                  <TextField className={classes.textSpace} fullWidth variant="outlined" label="100x"  onBlur={(e) => {var data = postData; data.bill100 = e.target.value; setPostData(data)}} ></TextField>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper} >
                                <Typography variant="h5" align='center'>Money owe and name</Typography>
                                <TextField className={classes.textSpace} fullWidth variant="outlined" name="checkOutTotal" label="Money owed to store"  onBlur={(e) => setPostData({ ...postData, checkOutTotal: e.target.value})}></TextField>
                                <TextField className={classes.textSpace} fullWidth variant="outlined" name="name"          label="Name" onBlur={(e) => setPostData({ ...postData, name: e.target.value })}></TextField>
                                
                                <Button className={classes.buttonSubmit} onClick={handleSubmit} variant="contained" color="primary" size="large"  fullWidth>Submit</Button>
                                <Button className={classes.buttonClear}  onClick={clear} variant="contained" color="secondary" size="small"  fullWidth>Clear</Button>
                            
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper} >
                                <Typography variant="h5" align='center'>Tips</Typography>
                                <TextField disabled className={classes.textSpace} fullWidth variant="outlined" label="  1x" value={String(outPostData.bill1)}></TextField>
                                <TextField disabled className={classes.textSpace} fullWidth variant="outlined" label="  5x" value={String(outPostData.bill5)}></TextField>
                                <TextField disabled className={classes.textSpace} fullWidth variant="outlined" label=" 10x" value={String(outPostData.bill10)}></TextField>
                                <TextField disabled className={classes.textSpace} fullWidth variant="outlined" label=" 20x" value={String(outPostData.bill20)}></TextField>
                                <TextField disabled className={classes.textSpace} fullWidth variant="outlined" label=" 50x" value={String(outPostData.bill50)}></TextField>  
                                <TextField disabled className={classes.textSpace} fullWidth variant="outlined" label="100x" value={String(outPostData.bill100)}></TextField>
                                <TextField  className={classes.textSpace} fullWidth variant="outlined" label="Before Total Amount" value={String(outPostData.totalBefore)}></TextField>   
                                <TextField  inputProps={ outPostData.totalAfter >= 0 ? fontColorPos : fontColorRed } className={ classes.textSpace} fullWidth variant="outlined" label="After Total Amount"  value={String(outPostData.totalAfter)} ></TextField>   
                            </Paper>""
                        </Grid>
                    </Grid>
              
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Data Enter Success!
                </Alert>
            </Snackbar>
            <Snackbar open={openFailure} autoHideDuration={6000} onClose={handleCloseFailure}>
                <Alert onClose={handleCloseFailure} severity="error" sx={{ width: "100%" }}>
                    Data Failed To Entered! Not Enough To Cover The Check Out Total!
                </Alert>
            </Snackbar>
            </Container>
        </Grow>
    

    );



}

export default Form;