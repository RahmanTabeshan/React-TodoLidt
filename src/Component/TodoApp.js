import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    return (
        <div className="main">
            <TodoForm />
            <TodoList />
        </div>
    );
}
 
export default TodoApp;