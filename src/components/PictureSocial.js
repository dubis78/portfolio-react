import React from 'react';
import me from '../img/me.jpg';
import '../css/PictureSocial.css';
import Social from './Social';


const PictureSocial=()=>{
    return(
        <div id="profile" className="container">
        <div className="row">
            <div className="col-12">        
                 {/*-- V-CARD --*/}
                <div id="v-card" className="card">            
                     {/*-- PROFILE PICTURE --*/}
                    <div className="right">
                        <img alt="Duebnis L." className="m-4 mx-auto d-block profileImage" src={me}/>                                         
                        <div className="card-content">        
                            {/*-- NAME & STATUS --*/}
                            <div className="info-headings">
                                <h4 className="text-uppercase text-center text-primary">Dubenis Andrea López</h4>
                                <h6 className="text-capitalize text-center text-primary">Mechatronical Engineer &amp; Frontend Dev</h6>
                            </div>            
                             {/*-- CONTACT INFO --*/}
                            <Social/>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}
export default PictureSocial;