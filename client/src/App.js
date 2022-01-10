import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/** Container
 *  The container centers your content horizontally. 
 * It's the most basic layout element.
 */

/**
 * 
 * 
 */

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import DevolperInfo from './components/DevolperInfo/DevolperInfo';
// import Auth from './components/Auth/Auth';

const App = () => {

  
    //this is the whole page of the app
    return (

        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar />
                <Routes>
                    <Route exact path="/Home" element={<Home/>}/>
                    <Route exact path="/Dev"   element={<DevolperInfo/>}/> 
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;