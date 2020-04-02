import React from 'react';
import '../css/Portfolio.css';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';

const Portfolio=()=>{
    return(
    <div className='container' id='Portfolio'> 
            <h4 className="text-uppercase text-center text-primary text-icon"><img src="http://icons.iconarchive.com/icons/dtafalonso/modern-xp/72/ModernXP-69-Window-icon.png" alt="demo"/><b>Portfolio</b></h4>
            <div className="carousel p-3" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Project1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Project2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Project3"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="Project4"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="d-block w-100" alt="Project5"/>
                    </div>
                        <div className="overlay">                        
                    </div>
                </div>
            </div> 
        </div>   
    );
}
export default Portfolio;