import React from 'react';
import '../css/Top.css';
import {Data} from '../utils/mocks/Data'

const Top=()=>{
    return(
        <nav className="navbar fixed-top navbar-dark">                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTarget">
                    <span className="navbar-toggler-icon icon.bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTarget">
                    <div className="navbar-nav">
                        <ul>
                            {Data.navbarData.map((etiq,index)=>{
                                return(
                                <li key={`label${index}`} className="li-navbar"><a className="nav-item nav-link active" href={etiq.url}>{etiq.element}</a></li>
                                );
                            })}                           
                        </ul>
                    </div>
                </div>
            </nav>
    );
}
export default Top;