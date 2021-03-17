import React from 'react';

const Todo = ({text}) => {
    return (
        <div className ="todo-class">
            <div className="todo-item">{text} </div>
            <button className="button-check">
                <i className ="fas fa-check"></i>
            </button>
            <button className="trash button">
                <i className ="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo;