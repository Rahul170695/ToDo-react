import React, { useState } from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import ToDoList from './Components/ToDoList';

const App = () => {
	const [tasks, setTasks] = useState([]);
	//const [editUser, setEditUser] = useState([]);

	const [isEdit, setIsEdit] = useState(false);
	const [editTask, setEditTask] = useState(null);

	const addTaskHandler = (uInput) => {
		if (isEdit) {
			const editedTask = { ...editTask, input: uInput };
			setTasks((prevState) => {
				return prevState.map((item) =>
					item.id === editedTask.id ? editedTask : item
				);
			});
			setIsEdit(false);
			setEditTask(null);
		} else {
			setTasks((prevState) => {
				return [
					...prevState,
					{ input: uInput, id: Math.random().toString() },
				];
			});
		}
	};

	const deleteUserHandler = (id) => {
		const filtered = [...tasks].filter((tasks) => tasks.id !== id);
		setTasks(filtered);
	};

	const editHandler = (id) => {
		const taskToBeEdited = tasks.find((task) => task.id === id);
		setIsEdit(true);
		setEditTask(taskToBeEdited);
	};

	return (
		<div>
			<Header />
			<ToDoContainer
				onAddInput={addTaskHandler}
				isEdit={isEdit}
				editTask={editTask}
			/>
			<ToDoList
				tasks={tasks}
				onDeleteUser={deleteUserHandler}
				onEdit={editHandler}
			/>
		</div>
	);
};

export default App;
