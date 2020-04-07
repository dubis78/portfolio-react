import React from 'react';
import '../css/Education.css';

const Education=()=>{
    return(
        <div className="container" id="education">
        <h4 className="mb-5 text-uppercase text-center text-primary text-icon"><img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/72/book-icon.png" alt="demo"/><b>Education</b></h4>
        <div className="row">
            <div className="col-12">
                <div className="card-content mt-5">                            
                    <h6 className="timeline-title text-secondary">Middle School</h6>                            
                    <div className="timeline-info text-secondary">
                        <h6>
                            <small>San Juan Bosco</small>
                        </h6>
                        <h6>
                            <small>Jan 2005 - Nov 2009</small>
                        </h6>
                    </div>
                    <h6 className="timeline-title text-secondary">High School</h6>                            
                    <div className="timeline-info text-secondary">
                        <h6>
                            <small>Centro Formativo de Antioquia</small>
                        </h6>
                        <h6>
                            <small>Jan 2010 - Nov 2011</small>
                        </h6>
                    </div>
                    <h6 className="timeline-title text-secondary">Mechatronical Engineering</h6>                            
                    <div className="timeline-info text-secondary">
                        <h6>
                            <small>Instituto Tecnólogico Metropolitano</small>
                        </h6>
                        <h6>
                            <small>Feb 2012 - Sep 2017</small>
                        </h6>
                    </div>
                    <h6 className="timeline-title text-secondary">Frontend Dev</h6>                            
                    <div className="timeline-info text-secondary">
                        <h6>
                            <small>Academia Geek</small>
                        </h6>
                        <h6>
                            <small>Feb 2020 - </small>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Education;