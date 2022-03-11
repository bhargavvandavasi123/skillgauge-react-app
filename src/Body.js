import React,{Component} from 'react';
import { variables } from './Variables';
import './Body.css'


export class Body extends Component{

    constructor(props){
        super(props);
        this.sayHello = this.sayHello.bind(this);
        this.state={
            jobs:[],
            company:[],
            jobsposted:[],
        }
    }
    sayHello() {
        alert("You've applied for this job");       
      }
   

    refreshList(){
        fetch(variables.API_URL+'Jobs')
        .then(response => (response.json()))
        .then(data=>{
           if(Array.isArray(data))
            this.setState({jobs:data});
        else
        this.setState({jobs:[data]});
        });

        fetch(variables.API_URL+'Company')
        .then(response => (response.json()))
        .then(data=>{
           if(Array.isArray(data))
            this.setState({company:data});
        else
        this.setState({company:[data]});
        });

        fetch(variables.API_URL+'JobsPosted')
        .then(response => (response.json()))
        .then(data=>{
           if(Array.isArray(data))
            this.setState({jobsposted:data});
        else
        this.setState({jobsposted:[data]});
        });


    }

    componentDidMount(){
        this.refreshList();
    }

    render(){
        
        return(
            <div> { this.state.jobs.map( app => <div class="card"  >
         
            
            <div class="card-body">
                { 
                                             this.state.jobsposted.map(jobsp =>
                                            <div> 
                                                {this.state.company.map(comp =>
                                                
                                                <div> 
                                                   
                                                      
                                                    {(() => {
                                                      
                                                        if (jobsp.JobId === app.JobId) {
   
                                                            if(comp.CompanyId === jobsp.CompanyId)
                                                                {
                                                                    
                                                                    console.log(comp.CompanyName);
                                                                    console.log(comp.CompanyLogo);
                                                                    return (
                                                                       <div> 
                                                                            <h5 style={{color: "#155494",size:"30px" }}>
                                                                                {comp.CompanyName}
                                                                            </h5>
                                                                            <div className='job-content'>
                                                                                <img class="card-img-top" src= {comp.CompanyLogo}     alt=""/>
                                                                                <div><strong>Role:</strong> {app.JobRole}</div> 
                                                                                <div><strong>Location:</strong> {app.Location}</div>
                                                                                <div><strong>Experience:</strong> {app.ExperienceRequired} yrs</div>
                                                                                <div><strong>Salary:</strong> {app.Salary}</div>
                                                                            </div>
                                                                            <div class='card-text'><strong>Description:</strong> <br/> {app.JobDescription}</div>
                                                                        </div>
                                                                      
                                                                    )
                                                                }                                                          
                                                    }
                                                    })()} 
                                                </div>
                                                )}   
                                            </div>)}     
           </div>
          <div onClick={this.sayHello}> <a href="" class="btn btn-primary">Apply</a> </div>
       </div>)}
       </div>
          
          
        )

    };

}