import React, { useEffect, useRef, useState } from 'react';

import Card from '../UI/Card';
import classes from './ToDoContainer.module.css';

const ToDoContainer = (props) => {
	const taskInputRef = useRef();

	const [isValid, setIsValid] = useState(false);
	useEffect(() => {
		if (props.isEdit) {
			taskInputRef.current.value = props.editTask.input;
			setIsValid(true);
		} else {
			taskInputRef.current.value = '';
		}
	}, [props.isEdit, props.editTask]);

	const onTaskInputChange = (event) => {
		if (taskInputRef.current.value.trim()) {
			console.log('in if block');
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	};

	const addTaskHandler = (event) => {
		event.preventDefault();
		const task = taskInputRef.current.value;
		props.onAddInput(task);
		taskInputRef.current.value = '';
		setIsValid(false);
	};

	return (
		<Card className={classes.card}>
			<form onSubmit={addTaskHandler}>
				<input
					type="text"
					placeholder="Start Adding"
					onChange={onTaskInputChange}
					ref={taskInputRef}
				/>
				<button type="submit" disabled={!isValid}>
					{props.isEdit ? 'Update' : 'Add'}
				</button>
			</form>
		</Card>
	);
};

export default ToDoContainer;
