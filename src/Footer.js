import React,{Component} from 'react';
import './Footer.css'
import skillgauge from './skillgauge.png';

function Footer ({setSelectedMode})
{

    const onButtonClick=(mode)=>{
        setSelectedMode(mode)
        
    }
    
         return(

            <div className='container foot' >
                <div className='footer'>
                       <div className='design1'></div>
                       <div className='design2'></div>
                </div>

                
                <div className="logo-name">
                    SKILL GAUGE
                </div>

                <div className='format button '>
                <button onClick={()=> onButtonClick('about')}>ABOUT</button>
                </div>
                <div className='format button'>
                <button onClick={()=> onButtonClick('contactus')}>CONTACT US</button>
                </div >
                <div className='format button'>
                <button onClick={()=> onButtonClick('privacy')}>PRIVACY & TERMS</button>    
                </div>
                
                <div className='copyright'>
                    @COPYRIGHT
                </div>
            </div>
            


        );
    
}


export default Footer;