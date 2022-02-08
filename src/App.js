import React,{useState} from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import ToDoList from './Components/ToDoList'; 

const App = ()=>{
  const [AddToDo, setAddToDo] = useState([]);
  //const [editUser, setEditUser] = useState([]);

  const addToDoHandler = (uInput) => {
    setAddToDo((prevState)=> {
      return[...prevState, {input:uInput, id: Math.random().toString()}];
    });
  };

  const deleteUserHandler =(id)=> {
    const filtered = [...AddToDo].filter((myList) => myList.id !== id);
    setAddToDo(filtered);
  } 


  return (
    <div > 
      <Header />
      <ToDoContainer onAddInput={addToDoHandler} onEdit={onEdit}  />
      <ToDoList myLists={AddToDo} onDeleteUser={deleteUserHandler} onEditUser={onEditUserHandler}/> 

    </div >
  );
}

export default App;