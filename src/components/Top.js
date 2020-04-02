import React from 'react';
import '../css/Top.css';

const Top=()=>{
    return(
        <nav className="navbar fixed-top navbar-dark">                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTarget">
                    <span className="navbar-toggler-icon icon.bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTarget">
                    <div className="navbar-nav">
                        <ul>
                            <li className="li-navbar"><a className="nav-item nav-link active" href="#profile">Profile</a></li>
                            <li className="li-navbar"><a className="nav-item nav-link active" href="#education">Education</a></li>
                            <li className="li-navbar"><a className="nav-item nav-link active" href="#Portfolio">Portfolio</a></li>                            
                        </ul>
                    </div>
                </div>
            </nav>
    );
}
export default Top;