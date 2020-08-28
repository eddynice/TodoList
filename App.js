import React, {Component} from 'react';
import Reno from './component/Reno';
//import  Lang from './component/Lang';
import './App.css';
import Nav from './component/Nav';



class App extends Component {
  
    render() {
        return (
            
            <div className="App">

            <Nav/>
            < Reno/>

            </div>
             

               
           
            
        
        )
    }
}

export default App
