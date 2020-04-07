import React from 'react';
import '../css/CV.css';
import CVimg from'../img/cv.png';

const CV=()=>{
    return(
        <div className='container' id='cv'> 
            <h4 className="text-uppercase text-center text-primary text-icon"><img src="http://icons.iconarchive.com/icons/inipagi/job-seeker/72/cv-icon.png" alt="demo"/><b>CV</b></h4>            
            <a className="img-link text-center m-3" href="https://lh3.googleusercontent.com/1Bv88AfuOMlMKwHc3uUk0ixNaLAKm4Dlxvc1grU8NlB5eMQJBSvjhtpx1GTDGRfAmHEr3rMSJXCQNIS134AACi0UVhD0nMifnoDGaugl0tkMC3CDBPSrXfCCPmrRrkMnwcc97IKyb0lNAuosC6sLyH0bcmh5XOBmuKBRzW3_pde4mqD9WAEyEOzxPxaXhNUSyndDrUky9Kmixq1vdsMcd2nNdjtkyQ9UhRJsxswAupUTkKksXQ1vNnuXWGlmywdrbVdJUc4rZrHkLeEsS607_BWuqd7WOhTkNlXZnE2PjESvmY7BquMKu-tfQ4ydaIUTBFn2buITXNTySq2L74WIuKn_k7VS-Yxyd3d5FQossIMeBiH5sh75YeRw6OroQJME5RN7tOPXKfWpPawqy1VSrulHm1z4amUHbpDB9uA4JQkDGjCTYX2LoeDKO2KeZE94cMZqnSAAQkRHT9rlnHAY22jK2pLKN08-MDIBBk9kes9xQycSdqf3LZ-w84no3a7Pn9D2jkrzk7uqF7N1ZfGMcrxg-QuiNdAVBeypwHChv0E2-7-rTi4HFNb6CyHG2Q800wO3rMVDBbBKOaANj6ofb0Y_fBSLXKp0UlWOU5mtIOZpZkAwkmtKnkiun5uS_TwuQH9BfH2WS9MiIaTEOXALaUCs3RPzdUknDKgGNM2M0DWwAYshoIk6KmVOwaxPLaBDywrHi6G6Mluj7m7shbOAgWXH_52qnSWMr8vSVsqjUSAlDdDIuczyAS8b=w768-h993-no" target="black"><img src={CVimg} className="d-block w-50 CV" alt="CV"/></a>                
        </div>    
    );
}
export default CV;

