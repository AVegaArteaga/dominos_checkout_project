import React from 'react';
import { Slide } from "react-slideshow-image";
import "./Devolperinfo.css";
import 'react-slideshow-image/dist/styles.css'

import image1 from "../../images/DevInfoSlides/pic1.jpg";
import image2 from "../../images/DevInfoSlides/pic2.gif";
import image3 from "../../images/DevInfoSlides/pic3.jpg";


//data grids


const DevolperInfo = () => {
    
    
    const images = [
        image1,
        image3,
        image2,
    ];
    
    const fadeProperties = {
        duration: 10000,
        pauseOnHover: true,
        
    };
    
    return (
        <div>
            <h2>Fade Effect</h2>
            <div className="slide-container">
            <Slide arrows={false} {...fadeProperties}>
                <div className="each-fade">
                    <div>
                    <img src={images[0]} alt='11' />
                    </div>
                    <p>
                        My name is Abel Vega Arteaga. I graduated from Northern Illinois University<br></br>
                        with a Bachelors of Computer Science in fall 2021. 
                        <br></br><br></br>
                        The purpose of this project is to practice Mern Full-stack application. <br></br>
                    </p>
                </div>
                <div className="each-fade" >
                    <div>
                    <img src={images[1]} alt='12'/>
                    </div>
                    <p>
                        In this Project, We will take in all the bills the <br></br>drivers would collect throught the day;<br></br><br></br>
                        At the end of the night, the driver would need to pay back any cash orders, <br></br>the left overs would be theirs to keep.<br></br>
                        Drivers would see their pasts tips and keep what they owe. <br></br>

                    </p>
                </div>
                <div className="each-fade">
                    <div>
                    <img src={images[2]} alt='13'/>
                    </div>
                    <p>
                        For Social Media Stuff:<br></br><br></br>
                        SnapChat: abelvega1<br></br>
                        Steam: 105277970<br></br>
                        Email: abelvega102@gmail.com

                    </p>
                </div>
            </Slide>
        </div>

        <p className='fineprint'>
            I do not own the Dominos logo, just doing this for fun. Also im lazy when im counting
        </p>    
    </div>
    );
};

export default DevolperInfo
