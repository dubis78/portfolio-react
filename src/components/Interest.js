import React from 'react';
import '../css/Interest.css';
import heart from '../img/heart.png';

const Interest = () => {
    return (
        <div className="container" id='interest'>                               
            <h4 className="text-uppercase text-center text-primary text-icon"><img className="heart" src={heart} alt="demo"/>Interest</h4>               
            <div id="interest-card" className="card" data-sr-id="30">
                {/*<!--INTEREST TEXT-->*/}
                <div className="timeline-title text-secondary m-3">
                    <p>
                        First of all I love music, country music is my favorite. Love watching
                        football, movies and playing games with my buddies. I spend quite a lot of time
                        in traveling and photography, these keeps me fresh for working environment.
                        I also spend time volunteering at the Red Cross in London, UK each month.
                    </p>
                </div>
                {/*<!--INTEREST ICONS-->*/}
                <div className="row no-gutters">
                    {/*<!--INTEREST ICON ONE-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6  box text-center">
                        <div className="interest-icon">
                            <i className="fa fa-music"></i>
                            <span>Music</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON TWO-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon-even">
                            <i className="fa fa-gamepad"></i>
                            <span>Gaming</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON THREE-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon">
                            <i className="fa fa-camera"></i>
                            <span>Photography</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON FOUR-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon-even">
                            <i className="fa fa-futbol-o"></i>
                            <span>Football</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON FIVE-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon">
                            <i className="fa fa-plane"></i>
                            <span>Traveling</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON SIX-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon-even">
                            <i className="fa fa-film"></i>
                            <span>Movies</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
export default Interest;