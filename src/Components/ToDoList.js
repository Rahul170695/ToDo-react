import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import DoneIcon from '@mui/icons-material/Done';
import classes from './ToDoList.module.css';
import Button from '../UI/Button';

const ToDoList = (props) => {

    return(
        <>
        <div className={classes.card} > 
            {props.myLists.map((myList) => {
                return(
            <li className={classes.lists} key={myList.id}  >
                <div className={classes.list} >
                    {myList.input}
                </div> 
                <EditIcon  className={classes.editIcon} onClick={()=>props.onEditUser(myList.id)} />  
                <DeleteIcon className={classes.delete} onClick={()=>props.onDeleteUser(myList.id)} />                      
            </li> 
            )})}
            {props.myLists.length > 1 && 
            <div className={classes.clearCard} >
                <Button onClick ={()=>props.onClearLists()}/>
                </div>}            
        </div>
        </>
    );
}

export default ToDoList;