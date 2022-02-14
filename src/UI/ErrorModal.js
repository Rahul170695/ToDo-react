import React from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onBackdropClick} >
    <Card className={classes.card} >
        <header>
            <h2>Clear ToDo</h2>
        </header>
        <div>
            <p>Do you want to Clear all ToDo tasks!</p>
        </div>
        <footer>
            <button onClick={props.onClearAll} >Confirm</button>
        </footer>
    </Card>
    </div>
    )}

export default ErrorModal;