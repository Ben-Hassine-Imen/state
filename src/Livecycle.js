import React, { Component } from 'react'

 class Livecycle extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"believe"
         }
     }
     static getDerivedStateFromProps(props,state){
         console.log( 'Livecycle getDerivedStateFromProps')
         return null
     }

    componentDidMount(){
        console.log( 'Livecycle  componentDidMount')
        return null
    }
    render() 
    {console.log( 'Livecycle render')
        return (
            <div>
                
            </div>
        )
    }
}

export default  Livecycle;