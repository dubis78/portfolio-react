import React from 'react';
import '../css/CV.css';
import CVimg from'../img/cv.png';

const CV=()=>{
    return(
        <div className='container' id='cv'> 
            <h4 className="text-uppercase text-center text-primary text-icon"><img src="http://icons.iconarchive.com/icons/inipagi/job-seeker/72/cv-icon.png" alt="demo"/><b>CV</b></h4>            
            <a className="img-link text-center m-3" href="https://dubis78.github.io/tienda-f/" target="black"><img src={CVimg} className="d-block w-50 CV" alt="CV"/></a>                
        </div>    
    );
}
export default CV;

