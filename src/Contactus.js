import React from 'react';
import './Contactus.css';

function Contactus(){
return(
    <div className='contactcontainer'>
        <div className='content'>
            <h1>We'd love to hear from you!</h1>
                <br/> <br/>
            <h3>SKILL GAUGE</h3>
            <br/>
            <h6>LONDON</h6>
            <br/>
            <h6 className='hh'>52 skillgauge stret</h6>
            <h6 className='hh'>Suite 500</h6>
            <h6 className='hh'>London, EA56 7NQ</h6>
            <br/><br/>
            <button className='contactbtn'>Contact the Help Team</button>
        </div>
    </div>
);

}

export default Contactus;