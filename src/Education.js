import React from 'react';
import Teesside from './Teesside.jpg';
import kssem from './kssem.jpg';
import edulogo from './edulogo.jpg'
import './Education.css';

function Education(){
    return(
        <div> 
            <br/>
            <div className='container1'>
                <img className='item-a' src={Teesside}/>
                <div className='item-b'>TEESSIDE UNIVERISTY  </div>
                <div className='item-c'>MASTER'S IN COMPUTING</div>
                <div className='item-d'>2020 - 2022</div>      
            </div>
            <br/>
            <div className='container1'>
                <img className='item-a' src={kssem}/>
                <div className='item-b'>K S SCHOOL OF ENGINEERING AND MANAGEMENT</div>
                <div className='item-c'>BACHELOR'S IN COMPUTING</div>
                <div className='item-d'>2013 - 2017</div>      
            </div>
            <br/>
            <div className='container1'>
                <img className='item-a' src={edulogo}/>
                <div className='item-b'>K S SCHOOL OF ENGINEERING AND MANAGEMENT</div>
                <div className='item-c'>BACHELOR'S IN COMPUTING</div>
                <div className='item-d'>2013 - 2017</div>      
            </div>

        </div>
    )
}

export default Education;