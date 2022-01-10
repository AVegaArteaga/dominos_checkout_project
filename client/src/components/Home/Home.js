import React, {useState} from 'react';
import Form  from '../Form/Form';

const Home = () => {

    const [currentId, setCurrentId] = useState(0);

    return (
        
       <Form  currentId={currentId} setCurrentId={setCurrentId}/> 
    
    )  
}

export default Home
