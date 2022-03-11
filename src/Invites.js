import React,{useEffect, useState} from 'react';
import Header from './Header.js';
import App from './App.js';
import './Invites.css';

function Invites(props){

    const [selectedMode, setSelectedMode] = useState('home')

    return(
        <div>
                  <div className='donga1'>
                      <Header setSelectedMode={setSelectedMode}/>
                  </div>

            <div className='card' >
                <h4>
                    Congratulations!!
                </h4>
                
            <div>
                Reference - #A2378J89
            </div>
            <div>
               You got an Invitation for the First round of interview from the <strong>Amazon</strong> For the Role of <strong>Jr Developer</strong> 
            </div>
           
            <div>
                
            <button>See Job Description</button>

            </div>
            </div>
           
            <div className='card' >
            <h4>
                    Congratulations!!
                </h4>
                
                    <div>
                        Reference - #A7398X98
                    </div>

                    <div>
                        You got an Invitation for the first round of interview from the <strong>Microsoft</strong> For the Role of <strong>Web Developer</strong>
                    </div>
            
                    <div>
                        <button>See Job Description</button>
                    </div>
            </div>
     
         <div>
            {(() => {                           
                        if(props.title === 'donga'){
                            return(
                                <div className='card' >
                                    <h4>
                    Congratulations!!
                </h4>
                                <div>
                                    Reference - #A0937J56
                                </div>
            
                                <div>
                                    You got an Invitation for the  round of interview from the <strong>Apple</strong> For the Role of <strong>Sr Developer</strong>
                                </div>
                        
                                <div>
                                    <button>See Job Description</button>
                                </div>
                        </div>
                            )
                        
                    }      
                    
                    if(props.title === 'dongaa'){
                        return(
                            <div>
                                <div className='card' >
                                    <h4>
                    Congratulations!!
                </h4>
                                <div>
                                    Reference - #A0937J56
                                </div>
            
                                <div>
                                    You got an Invitation for the  round of interview from the <strong>Apple</strong> For the Role of <strong>Sr Developer</strong>
                                </div>
                        
                                <div>
                                    <button>See Job Description</button>
                                </div>
                        </div>

                            <div className='card' >
                            <h4>
                    Congratulations!!
                </h4>
                            <div>
                                Reference - #A2378J89
                            </div>
        
                            <div>
                                You got an Invitation for the First round of interview from the <strong>Linkedin</strong> For the Role of <strong>Data Analyst</strong>
                            </div>
                    
                            <div>
                                <button>See Job Description</button>
                            </div>
                         </div>

                    </div>
                        )
                    
                }      
            })()} 
         </div>
                                          
    </div>

        
    )
}

export default Invites;