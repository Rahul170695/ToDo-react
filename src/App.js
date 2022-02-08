import React,{useState} from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import ToDoList from './Components/ToDoList'; 
import ToDo from '../src/Components/ToDo';

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

  const onEditUserHandler= (uInput, uId) =>{
    const editUserInput = [...AddToDo].find((myList) => myList.id === uId);
    // const editUserId = [...AddToDo].find((myList) => myList.id = uId); 

  }

  // const onEdit = () => {
  //   return
  // }


  return (
    <div > 
      <Header />
      {/* <ToDo  /> */}
      <ToDoContainer onAddInput={addToDoHandler} onEdit={onEdit}  />
      <ToDoList myLists={AddToDo} onDeleteUser={deleteUserHandler} onEditUser={onEditUserHandler}/> 

    </div >
  );
}

export default App;