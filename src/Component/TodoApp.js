import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {

    const [todos , setTodos] = useState([]) ;

    const [filter , setFilter] = useState([]) ;

    const [select , setSelect] = useState("all") ;

    useEffect(()=>{
        filteredTodo(select) ;
    },[todos])

    const addTodo = (input)=>{
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

    const deleteTodo = (id) =>{
        const filteredItem = todos.filter(p => p.id !== id) ;
        setTodos(filteredItem) ;
    }

    const updatedTodo = (id , newValue)=>{
        const index = todos.findIndex(item => item.id === id ) ;
        const newTodo = {...todos[index]} ;
        newTodo.text = newValue ;
        newTodo.isCompleted = false ;

        const updatedTodos = [...todos ] ;
        updatedTodos[index] = newTodo ;

        setTodos(updatedTodos) ;
    }

    const filteredTodo = (select) =>{
        switch (select) {
            case "completed" :
                setFilter(todos.filter(t => t.isCompleted)) ;
                break ;
            case "unCompleted": 
                setFilter(todos.filter(t => !t.isCompleted));
                break ;
            default :
                setFilter(todos) ;
        }
    }

    return (
        <div className="main">
            <NavBar 
                filteredTodo={filteredTodo} 
                unCompleted={todos.filter(t => !t.isCompleted).length} 
                select={select}
                setSelect={setSelect}
            />
            <TodoForm submitTodo={addTodo} />
            <TodoList 
                todos={filter}
                onComplete={completeTodo}
                onDelete={deleteTodo}
                onUpdate={updatedTodo} 
            />
        </div>
    );
}
 
export default TodoApp;