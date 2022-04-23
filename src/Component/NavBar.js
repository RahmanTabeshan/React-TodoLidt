import { useState } from "react";

const NavBar = ({unCompleted , filteredTodo , select , setSelect}) => {

    const changeHandler =(e) =>{
        setSelect(e.target.value) ;
        filteredTodo(e.target.value) ;
    }

    if(!unCompleted) 
        return(
            <header>  
                <h3>add some todo</h3>
            </header>
        ) ;
    return (
        <header>
            <span>{unCompleted}</span>
            <h2>todo are not completed</h2>

            <select onChange={changeHandler} value={select} >
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="unCompleted">unCompleted</option>
            </select>

        </header>
    );
}
 
export default NavBar;