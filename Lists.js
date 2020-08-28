import React from 'react';
import './Lists.css';

//import flipmove from 'react-flip-move';



function Lists(props) {
    const items = props.items;
    const Lists = items.map((osaz) =>
        {
        return(
        <div className="list" key={osaz.key}>
            <p > <input type="text" id={osaz.key} value={osaz.text}
        onChange={
            (e)=>{
                props.setUpdate(e.target.value, osaz.key)
            }
        }
          
            />
       { 
       
          }   </p>
        </div>)

    })
   
    return (
        <div>
            <flipmove duration={500} easing=" ease-in-out">
            {Lists}
            </flipmove>
           
        </div>
    )
}

export default Lists
