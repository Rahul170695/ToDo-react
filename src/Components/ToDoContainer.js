import React, {useState, useEffect} from 'react';

import Card from '../UI/Card';
import classes from './ToDoContainer.module.css';

const ToDoContainer = (props) => {
	const [inputAdd, setInputAdd] = useState("");
	const [isValid, setIsValid] = useState(false);
	
	useEffect(()=>{
		if(props.editTask !==null){
			setInputAdd(props.editTask.input);
		}else {
			setInputAdd("");
		}
	}, [props.editTask]);

    const InputAddHandler= (event)=>{
		if(event.target.value.trim()){
	setInputAdd(event.target.value);
	setIsValid(true);
        }
    }

    const ToDoAddHandler =(event)=> {
        // console.log(inputAdd);
		event.preventDefault();
        props.onAddInput(inputAdd);
        setInputAdd("");
        setIsValid(false);
      }

  return(
        <Card className={classes.card} >
        <form onSubmit={ToDoAddHandler} > 
            <input type="text" placeholder="Start Adding"
             onChange={InputAddHandler}
             value={inputAdd} 
             maxlength="60"/>
            <button type="submit" disabled={!isValid} >{props.editTask? "Update" : "Add"}</button>
        </form>
        </Card>  
    );  
};

export default ToDoContainer;