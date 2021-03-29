import './App.css';
import React, { Component } from 'react'
import Livecycle from './Livecycle';

class App extends Component {


state= {
  person:{fullName:'Imèn',bio:"fundamental chemistry", mgSrc:<img className="photo" src= "/myphoto.jpg" alt="myphoto" />,profession:"Instructor"},
  showme:'false',
 
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
                <Livecycle/>
         <h1>My Name is {this.state.person.fullName}</h1>
         <h1>  I have a degree in {this.state.person.bio}</h1>
         <h1> I am an {this.state.person.profession}.</h1>
         </div>
         <div> {this.state.person.mgSrc} </div>
        
         
         </div>

 :null }
     </div>
    )
  }
}

export default App;
