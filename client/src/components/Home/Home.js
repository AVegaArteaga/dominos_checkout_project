import React, {useState} from 'react';
import Form  from '../Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() =>{
        //dispatch(getPosts());
    }, [currentId,dispatch]);


    return (
        <div>
            <Form  currentId={currentId} setCurrentId={setCurrentId}/> 
        
        </div>
    )  
}

export default Home