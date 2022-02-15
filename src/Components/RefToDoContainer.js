import React, {useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import classes from './ToDoContainer.module.css';

const RefToDoContainer = (props) => {
	// const [inputAdd, setInputAdd] = useState("");
    const [isValid, setIsValid] = useState(false);
    
    const inputUserRef = useRef();
	
	// useEffect(()=>{
	// 	if(props.editTask !==null){
	// 		setInputAdd(props.editTask.input);
	// 	}else {
	// 		setInputAdd("");
	// 	}
    // }, [props.editTask]);

    	useEffect(()=>{
		if(props.editTask !==null){
            inputUserRef.current.value = props.editTask.input;
            setIsValid(true);
		}else {
			inputUserRef.current.value="";
		}
    }, [props.editTask]);
    

    const InputAddHandler= (event)=>{
		if(inputUserRef.current.value.trim()){
    setIsValid(true);
        }else{
            setIsValid(false);            
        }
    }
    

    const ToDoAddHandler =(event)=> {
        // console.log(inputAdd);
        event.preventDefault();
        const enteredInput = inputUserRef.current.value;        
        props.onAddInput(enteredInput);        
        // setInputAdd("");
        inputUserRef.current.value=" ";
        setIsValid(false); 
      }

  return(
        <Card className={classes.card} >
        <form onSubmit={ToDoAddHandler} > 
            <input type="text" placeholder="Start Adding"             
             maxLength="60"
             onChange={InputAddHandler}
             ref={inputUserRef}/>
            <button type="submit" disabled={!isValid} >{props.editTask? "Update" : "Add"}</button>
        </form>
        </Card>  
    );  
};

export default RefToDoContainer;