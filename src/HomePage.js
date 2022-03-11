import React,{Component} from 'react';
import {Helmet} from 'react-helmet';
import { variables } from './Variables';
import  './Home.css';
import prison from './prison.png';

export class HomePage extends Component{

    constructor(props){
        super(props);

        this.state={
            applicants:[],
        }
    }

    refreshList(){
        fetch(variables.API_URL+'Applicant')
        .then(response => (response.json()))
        .then(data=>{
           if(Array.isArray(data))
            this.setState({applicants:data});
        else
        this.setState({applicants:[data]});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    render(){
        return(
         

          <div  class="container">
              <div class="row">
                  <div class="col">
                        <img src={prison} alt="Profile Pic" class="img"/>;
                        <div>Bhargav Vandavasi</div>
                        <div>
                            <br/>
                            Home
                        </div>
                        <div>
                            <br/>
                            Invites
                        </div>
                  </div>
                  <div class="col-6">
                        
                        {this.state.applicants.map(app => <p>{app.ApplicantId}</p>)}
                  </div>
                  <div class="col">
                        three
                  </div>
              </div>
        
          
          

          


          
         </div>

      
        )
    }
}