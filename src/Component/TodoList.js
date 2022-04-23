import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({todos , onComplete , onDelete , onUpdate }) => {

    const [edit , setEdit] = useState({id : null , text : "" , isCompleted : false })

    const editTodo = (newValue)=>{
        onUpdate(edit.id , newValue) ;
        setEdit({id : null , text : "" , isCompleted : false })
    }

    const render = ()=>{

        if(todos.length === 0 ) return <h1>Add Some Todo </h1> ;

        return(
            todos.map(item =>{
                return(
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        onComplete={()=>onComplete(item.id)}
                        onDelete={()=>onDelete(item.id)} 
                        onEdit={()=>setEdit(item)} 
                    />
                )
            })
        )

    }

    return (
        <div>
            {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : render() } 
        </div>
    );
}
 
export default TodoList;