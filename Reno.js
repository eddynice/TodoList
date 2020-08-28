import React, { Component } from 'react';

import Lists from './Lists';
//import {library} from '@fortawesome/fontawesome-svg-core';
//import {faTrash} from '@fortawesome/fontawesome-svg-core';

//library.add(faTrash)
class Reno extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           items :[],
           currentItem :{
           text:'',
           key:'' 
            
         }
    } 
    //this.handleInput = this.handleInput.bind(this)
    //this.addItem = this.addItem.bind(this)
    
 }
  
    
     handleInput=(event)=>{
         this.setState({
             currentItem:{
                 text:event.target.value,
                 key:Date.now()
             }
         })
       }

     addItem=(event)=>{
         event.preventDefault();
         const {currentItem} = this.state
        // const newItem = this.state.currentItem;
        // console.log(newItem)
         if(currentItem.text !== ""){
             const newItems =[...this.state.items, currentItem];
             this.setState({
                 items:newItems,
                 currentItem:{
                     text:'',
                     key:''
                 }
             })
         }
     }

     setUpdate=(text, key)=>{  
        const items = this.state.items;
       //  const {items} = this.state......there are the same
        items.map((item) => 
           {
            if(item.key===key){
                item.text=text;
            }
        })
        this.setState({
            items:items
        })
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                
               
                    <form id="to-do-form" onSubmit={this.addItem}>
                    <input type="text" className="form-control"
                     aria-describedby="helpId"
                     value={this.state.currentItem.text}
                    onChange={this.handleInput}/>
                     <div className="btn-group" data-toggle="buttons">
                    <button className="btn btn-primary active"
                    type="submit"> Add</button>
                    </div>
                   
  
                      </form>

                      <Lists items = {this.state.items}
                      setUpdate={this.setUpdate }></Lists>
                
                
            </div>
            </div>
        )
    }
}

export default Reno