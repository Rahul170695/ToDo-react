import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import DoneIcon from '@mui/icons-material/Done';
import classes from './ToDoList.module.css';

const ToDoList = (props) => {
    // const [editUser, setEditUser] = useState(null);

    return(
        <div className={classes.card} > 
            {props.myLists.map((myList) => {
                return(
            <li className={classes.lists} key={myList.id}  >
                <div className={classes.list} >
                    {myList.input}
                </div> 
                <EditIcon  className={classes.editIcon} 
                onClick={()=>props.onEditUser(myList.input, myList.id)} />  
                {/* <DoneIcon /> */}
                <DeleteIcon className={classes.delete} onClick={()=>props.onDeleteUser(myList.id)} />                      
            </li>           
            )})}
        </div>
    );
}

export default ToDoList;