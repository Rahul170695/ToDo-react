import React, {useState} from 'react';
import Card from '../UI/Card';

import classes from './ToDo.module.css';

const ToDo = (props) => {
    const [inputAdd, setInputAdd] = useState([]);

    const InputAddHandler = (event)=>{
        setInputAdd(event.target.value);
    }

    const ToDoAddHandler = (event, input) => {
        event.preventDefault(); 
        setInputAdd([]);
    }

    const AddComment = input => {  
        const [list, setList] = useState([]);
        console.log(inputAdd)
        }
 
    return(
        <Card className={classes.card} >
        <form onSubmit={ToDoAddHandler}> 
            <input type="text" placeholder="Start Adding"
             onChange={InputAddHandler}
             value={inputAdd} />
            <button type="submit" >Add</button>
        </form> 
        <AddComment userList ={AddComment}/>
        {/* <MyLists addTask={addTask}/> */}
       </Card>)
}

export default ToDo;


{/* <div className={classes.card} > 
{props.newList.map((myList) => {
    return(
<li className={classes.lists} key={myList.id}  >
    <div className={classes.list} >
        {myList.input}
    </div>
</li>           
)})}
</div> */}


// setInputAdd((prevState)=> {
//     return[...prevState, {input:input, id: Math.random().toString()}];
//   });