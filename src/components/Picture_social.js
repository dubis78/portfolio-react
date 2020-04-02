import React from 'react';
import me from '../img/me.jpg';
import '../css/Picture_social.css';
import Social from './Social';


const Picture_social=()=>{
    return(
        <div id="profile" className="container">
        <div className="row">
            <div className="col-12">        
                 {/*-- V-CARD --*/}
                <div id="v-card" className="card">            
                     {/*-- PROFILE PICTURE --*/}
                    <div className="right">
                        <img alt="profile-image" className="m-4 mx-auto d-block profile-image" src={me}/>                                         
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
export default Picture_social;