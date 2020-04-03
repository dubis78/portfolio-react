import React from 'react';
import '../css/Portfolio.css';
import {Data} from '../utils/mocks/Data'
import img1 from '../img/1.png';
/*import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';*/

const Portfolio=()=>{
    return(
        <div className='container' id='portfolio'> 
            <h4 className="text-uppercase text-center text-primary text-icon"><img src="http://icons.iconarchive.com/icons/dtafalonso/modern-xp/72/ModernXP-69-Window-icon.png" alt="demo"/><b>Portfolio</b></h4>
            <div className="carousel p-3" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <a className="img-link" href="https://dubis78.github.io/Tecnical/"><img src={img1} className="d-block w-100" alt="Project1" target="black"/></a>
                    </div>
                    {Data.portfolioData.map((data,index)=>{
                        return(
                            <div className="carousel-item">
                                <a className="img-link" href={data.url}><img src={data.img} className="d-block w-100" alt={`Project${index}`}/></a>
                            </div>
                        );
                    })}
                    {/*
                    <div className="carousel-item">
                    <a className="img-link" href="https://dubis78.github.io/tienda-f/"><img src={img2} className="d-block w-100" alt="Project2"/></a>
                    </div>
                    <div className="carousel-item">
                    <a className="img-link" href="https://dubis78.github.io/formulario/Index.html"><img src={img3} className="d-block w-100" alt="Project3"/></a>
                    </div>
                    <div className="carousel-item">
                    <a className="img-link" href="https://dubis78.github.io/Tribute-Page/Index.html"><img src={img4} className="d-block w-100" alt="Project4"/></a>
                    </div>
                    <div className="carousel-item">
                    <a className="img-link" href="https://dubis78.github.io/Reto-1/"><img src={img5} className="d-block w-100" alt="Project5"/></a>
                    </div>
                    */}
                    <div className="overlay">                        
                    </div>
                </div>
            </div> 
        </div>   
    );
}
export default Portfolio;