import React from 'react'
import { Grid, CircularProgress, Paper, Card } from '@material-ui/core';
import { Typography } from '@mui/material';
import styles from './styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import moment from 'moment';
const Past = () => {    

    

    const classes = styles();   
   
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    


    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container justifyContent='flex-start' alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={3} md={3}>
                         <Paper className={classes.paper} >
                            <Typography sx={{ fontWeight: 'bold' ,  textAlign: 'center' }} variant='h6'  >{post.name} {moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
                            <Typography sx={{ fontWeight: '' ,  textAlign: 'left' }} variant='h6'  >1x {post.bill1}</Typography>
                            <Typography sx={{ fontWeight: '' ,  textAlign: 'left' }} variant='h6'  >5x {post.bill5}</Typography>
                            <Typography sx={{ fontWeight: '' ,  textAlign: 'left' }} variant='h6'  >10x {post.bill10}</Typography>
                            <Typography sx={{ fontWeight: '' ,  textAlign: 'left' }} variant='h6'  >20x {post.bill20}</Typography>
                            <Typography sx={{ fontWeight: '' ,  textAlign: 'left' }} variant='h6'  >50x {post.bill50}</Typography>
                            <Typography sx={{ fontWeight: '' ,  textAlign: 'left' }} variant='h6'  >100x {post.bill100}</Typography>
                            <Typography sx={{ fontWeight: '' ,  textAlign: 'center' }} variant='h6'  >----------------------------------</Typography>
                            <Typography sx={{ fontWeight: '' ,  textAlign: 'left' }} variant='h6'  >Owed to store: ${post.checkOutTotal}</Typography>




                         </Paper>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Past
 
