import React,{useState} from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import ToDoList from './Components/ToDoList'; 

const App = ()=>{
  const [AddToDo, setAddToDo] = useState([]);
  const [editTask, setEditTask] = useState(null);  

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
	  console.log(editedTask);
	  setEditTask(editedTask);
  }

  return (
    <div > 
      <Header />
      <ToDoContainer onAddInput={addToDoHandler} editTask={editTask} />
      <ToDoList myLists={AddToDo} onDeleteUser={deleteUserHandler} onEditUser={onEditUserHandler}/> 

    </div >
  );
}

export default App;