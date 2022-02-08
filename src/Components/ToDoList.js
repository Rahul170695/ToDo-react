import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classes from './ToDoList.module.css';

const ToDoList = (props) => {

    return(
        <div className={classes.card} > 
            {props.tasks.map((task) => {
                return(
            <li className={classes.lists} key={task.id}  >
                <div className={classes.list} >
                    {task.input}
                </div>
                <EditIcon  className={classes.editIcon} onClick={()=>props.onEdit(task.id)} />  
                <DeleteIcon className={classes.delete} onClick={()=>props.onDeleteUser(task.id)} />                      
            </li>           
            )})}
        </div>
    );
}

export default ToDoList;