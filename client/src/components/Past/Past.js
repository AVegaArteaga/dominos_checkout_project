import React from 'react'
import { Grid, CircularProgress, Paper, Card, Button } from '@material-ui/core';
import { ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import styles from './styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts,deletePost } from '../../actions/posts';
import { Box } from '@mui/system';
import { SwipeableDrawer } from '@mui/material';

import moment from 'moment';

import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Past = () => {

    const classes = styles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState({str: ''});

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);



    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? <CircularProgress /> : (


        <Grid container justifyContent='flex-start' alignItems="stretch" spacing={4}>
            {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={4} md={4}>
                         <Paper className={classes.paper} >

                             <Button onClick={() => dispatch(deletePost(post._id))}> <DeleteIcon/></Button>
                             <Button > Edit here</Button>



                             <Typography sx={{ fontWeight: 'bold',  textAlign: 'center' }} variant='h6'  >{moment(post.createdAt).format('MMM Do YYYY, h:mm a')}</Typography>
                             <Typography sx={{ fontWeight: 'bold',  textAlign: 'center' }} variant='h6'  >{post.name}</Typography>
                             <Typography sx={{ textAlign: 'left' }} variant='h6' >1x {post.bill1}</Typography>
                             <Typography sx={{ textAlign: 'left' }} variant='h6' >5x {post.bill5}</Typography>
                             <Typography sx={{ textAlign: 'left' }} variant='h6' >10x {post.bill10}</Typography>
                             <Typography sx={{ textAlign: 'left' }} variant='h6' >20x {post.bill20}</Typography>
                             <Typography sx={{ textAlign: 'left' }} variant='h6' >50x {post.bill50}</Typography>
                             <Typography sx={{ textAlign: 'left' }} variant='h6' >100x {post.bill100}</Typography>
                             <Typography sx={{ textAlign: 'center' }} variant='h6' >----------------------------------</Typography>
                             <Typography sx={{ textAlign: 'left' }}   variant='h6' >Owed to store: ${post.checkOutTotal}</Typography>




                      </Paper>
                 </Grid>
               ))}
            </Grid>
        )
    );
}

export default Past