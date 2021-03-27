
import './App.css';

import React, { Component } from 'react'
import Livecycle from "./Livecycle";
export default class App extends Component {

  constructor (props){
super(props)
this.state= {fullName:'Imèn',bio:"fundamental chemistry", mgSrc:<img className="photo" src= "/myphoto.jpg" alt="myphoto" />,profession:"Instructor",showme:'false'};
  }
 
  operation(){

    this.setState({
      showme:!this.state.showme
    })
  }
 
  render() {
    return (
      <div>
            <button className="But" onClick={()=>this.operation()}>this is my profile</button>
            {!this.state.showme?
              <div className="container">
                <div className="profile">
         <h1>My Name is {this.state.fullName}</h1>
         <h1>  I have a degree in {this.state.bio}</h1>
         <h1> I am an {this.state.profession}.</h1>
         </div>

         <div> {this.state.mgSrc} </div>
          
         </div>
:null
            }
       <Livecycle/>
     </div>
    )
  }
}

