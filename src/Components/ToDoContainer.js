import React, {useState} from 'react';

import Card from '../UI/Card';
import classes from './ToDoContainer.module.css';

const ToDoContainer = (props) => {
    const [inputAdd, setInputAdd] = useState([]);

    const InputAddHandler= (event)=>{
    setInputAdd(event.target.value);
    }

    const ToDoAddHandler =(event)=> {
        // console.log(inputAdd);
        event.preventDefault();
        props.onAddInput(inputAdd);
        setInputAdd([]);
      }

  return(
        <Card className={classes.card} >
        <form onSubmit={ToDoAddHandler} > 
            <input type="text" placeholder="Start Adding"
             onChange={InputAddHandler}
             value={inputAdd} />
            <button type="submit" >Add</button>
        </form>
        </Card>  
    );  
};

export default ToDoContainer;