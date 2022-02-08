import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import classes from './ToDoContainer.module.css';

const ToDoContainer = (props) => {
	const [task, setTask] = useState('');
    const [isValid, setIsValid]=useState(false);
	useEffect(() => {
		if (props.isEdit) {
			setTask(props.editTask.input);
		} else {
			setTask('');
		}
	}, [props.isEdit, props.editTask]);

	const onTaskInputChange = (event) => {
        if(event.target.value.trim()) {
            setTask(event.target.value);
            setIsValid(true);
        }
	};

	const addTaskHandler = (event) => {
		event.preventDefault();
		props.onAddInput(task);
		setTask('');
	};

	return (
		<Card className={classes.card}>
			<form onSubmit={addTaskHandler}>
				<input
					type="text"
					placeholder="Start Adding"
					onChange={onTaskInputChange}
					value={task}
				/>
				<button type="submit" disabled={!isValid}>{props.isEdit?'Update':'Add'}</button>
			</form>
		</Card>
	);
};

export default ToDoContainer;
