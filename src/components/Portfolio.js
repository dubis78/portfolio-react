import React from 'react';
import '../css/Portfolio.css';
import {Data} from '../utils/mocks/Data'
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';

const Portfolio=()=>{
    return(
        <div className='container' id='portfolio'> 
            <h4 className="text-uppercase text-center text-primary text-icon"><img src="http://icons.iconarchive.com/icons/dtafalonso/modern-xp/72/ModernXP-69-Window-icon.png" alt="demo"/><b>Portfolio</b></h4>
            <div className="carousel p-3" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a className="img-link" href="https://ecopay.netlify.app/prueba/"><img src={img1} className="d-block w-100" alt="Project1" target="black"/></a>
                    </div>                    
                    <div className="carousel-item">
                        <a className="img-link" href="https://dubis78.github.io/Tecnical/"><img src={img2} className="d-block w-100" alt="Project2" target="black"/></a>
                    </div>
                    <div className="carousel-item">
                        <a className="img-link" href="https://dubis78.github.io/Tribute-Page/Index.html"><img src={img3} className="d-block w-100" alt="Project3" target="black"/></a>
                    </div>
                    <div className="carousel-item">
                        <a className="img-link" href="https://dubis78.github.io/Reto-1/"><img src={img4} className="d-block w-100" alt="Project4" target="black"/></a>
                    </div>
                    <div className="carousel-item">
                        <a className="img-link" href="https://dubis78.github.io/tienda-f/"><img src={img5} className="d-block w-100" alt="Project5" target="black"/></a>
                    </div>
                    <div className="carousel-item">
                        <a className="img-link" href="https://dubenis-pokedex.netlify.app"><img src={img4} className="d-block w-100" alt="Project6" target="black"/></a>
                    </div>
                    <div className="carousel-item">
                        <a className="img-link" href="https://dubis78.github.io/formulario/Index.html"><img src={img5} className="d-block w-100" alt="Project7" target="black"/></a>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div> 
        </div>   
    );
}
export default Portfolio;