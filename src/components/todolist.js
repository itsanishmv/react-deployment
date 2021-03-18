import React from 'react'
import Todo from './todo'
const TodoList = ({todos ,setTodos}) => {
    return (
        <div className ="todo-container">
            <ul className="todo-list ">
                {todos.map((todo) => (
                    <Todo text={todo.text} todo={todo} key={todo.id} setTodos={setTodos} todos={ todos}/>
                ))}
            </ul>
            
        </div>
    )
}
export default TodoList;