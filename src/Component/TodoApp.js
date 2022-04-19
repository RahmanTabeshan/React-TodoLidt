import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {

    const [todos , setTodos] = useState([]) ;

    const addTodoHandler = (input)=>{
        const newTodo = {
            id:Math.floor(Math.random()*100000),
            text : input ,
            isCompleted : false ,
        }

        setTodos([...todos , newTodo]) ;

    }

    const completeTodo = (id)=>{
        const index = todos.findIndex(item => item.id === id ) ;
        const newTodo = {...todos[index]} ;
        newTodo.isCompleted = !newTodo.isCompleted ;

        const updatedTodos = [...todos ] ;
        updatedTodos[index] = newTodo ;

        setTodos(updatedTodos) ;
    }

    return (
        <div className="main">
            <TodoForm addTodoHandler={addTodoHandler} />
            <TodoList 
                todos={todos}
                onComplete={completeTodo} 
            />
        </div>
    );
}
 
export default TodoApp;