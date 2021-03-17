import React from 'react'

const Form = ({setInputText , todos , setTodo,inputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodo([
            ...todos ,{text : inputText , completed : false , id: Math.random()*1000 }
        ])
    }
    return ( 
        <form>
            <input  onChange ={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} type="submit" className="submit" >
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    )
}
export default Form;