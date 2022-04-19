import Todo from "./Todo";

const TodoList = ({todos , onComplete}) => {
    return (
        <div>
            {todos.length ? todos.map(item =>{
                return(
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        onComplete={()=>onComplete(item.id)} 
                    />
                )
            }) : "Add Some Todo"}
        </div>
    );
}
 
export default TodoList;