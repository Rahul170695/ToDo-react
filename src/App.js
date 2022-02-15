import React,{useState} from 'react';
import Header from './Components/Header';
import RefToDoContainer from './Components/RefToDoContainer';
import ToDoList from './Components/ToDoList'; 
import ErrorModal from './UI/ErrorModal';

import classes from './App.module.css';

const App = ()=>{
  const [AddToDo, setAddToDo] = useState([]);
  const [editTask, setEditTask] = useState(null); 
  const [clearAll, setClearAll] = useState(null); 
  

  const addToDoHandler = (uInput) => {
	  if(editTask !== null){
		  const newEditedTask = {...editTask, input : uInput};
		  setAddToDo((prevState)=> {
			  return prevState.map((task)=> 
				  task.id === newEditedTask.id ? newEditedTask : task
			  )
		  });
		}else{
			setAddToDo((prevState)=> {
				return[...prevState, {input:uInput, id: Math.random().toString()}];
			})};
			setEditTask(null);
  };

  const deleteUserHandler =(id)=> {
    const filtered = [...AddToDo].filter((myList) => myList.id !== id);
    setAddToDo(filtered);
  } 

  const onEditUserHandler = (id) => {
	  const editedTask = [...AddToDo].find((task)=> task.id === id );
	  setEditTask(editedTask);
  }

  const onClearLists = () => {
    setClearAll(true);
  }

  const onClearAllHandler = () => {
    setAddToDo([]);
    setClearAll(null);
  }

  const onBackdropClick= ()=> {
    setClearAll(null);
  }
  return (
    <div className={classes.content} > 
      <Header />
      <RefToDoContainer onAddInput={addToDoHandler} editTask={editTask} />
      <ToDoList myLists={AddToDo} onDeleteUser={deleteUserHandler} 
      onEditUser={onEditUserHandler} onClearLists={onClearLists}/> 
      {clearAll && <ErrorModal  onClearAll={onClearAllHandler} onBackdropClick={onBackdropClick}/>}
    </div >
  );
}

export default App;