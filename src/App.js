import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './Header.js';
import {Applicant} from './Applicant';
import {Company} from './Company';
import {Jobs} from './Jobs';
import Invites from './Invites';
import Education from './Education';
import Footer from './Footer.js';
import About from './About.js';
import Contactus from './Contactus.js';
import Privacy from './Privacy.js';
import { Body } from './Body';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

function App() {

  const [selectedMode, setSelectedMode] = useState('home')

 const st = 'donga';
  
  return (
    
    <BrowserRouter>
    <div className="App container">

      
    <div  class="container">
              <div class="row ">
                  <div class="col header-border row-border ">
                    <div >
                      <Header setSelectedMode={setSelectedMode}/>
                      
                    </div>
                  </div>
                  <div class="col row-border scroll-div">
                  {(() => {
                                                    
                              if (selectedMode==='home') {
                                return(
                                  <Body /> 
                                )
                              }

                              if(selectedMode === 'invite'){
                                return(
                                  <Invites />
                                )
                              }

                              if(selectedMode === 'donga'){
                                return(
                                  <Invites title={st}/>
                                )
                              }

                              if(selectedMode === 'dongaa'){
                                return(
                                  <Invites title="dongaa"/>
                                )
                              }

                              if(selectedMode === 'education'){
                                return(
                                  <Education/>
                                )
                              }

                              if(selectedMode === 'about'){
                                return(
                                  <About />
                                )
                              }

                              if(selectedMode === 'contactus'){
                                return(
                                  <Contactus />
                                )
                              }

                              if(selectedMode === 'privacy'){
                                return(
                                  <Privacy />
                                )
                              }


                             
                 })()} 
                    
                     
                  </div>
                  <div class="col foot-border">
                    <div>
                    <Footer setSelectedMode={setSelectedMode}/>
                    </div>
                      
                  </div>
              </div>
         </div>
      


       {/* <nav className="navbar avbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item-m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/applicant">
              Applicant
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/company">
              Company
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/jobs">
              Jobs
            </NavLink>
          </li>
        </ul>
      </nav>  */}

      
      <Switch>
        <Route path='/applicant' component={Applicant}/>
        <Route path='/company' component={Company}/>
        <Route path='/jobs' component={Jobs}/>
        <Route path='/header' component={Header}/>
        
        
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
