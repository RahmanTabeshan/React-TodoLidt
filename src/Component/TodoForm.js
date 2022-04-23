import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {

    const [input , setInput] = useState(props.edit ? props.edit.text : "") ;

    const inputR = useRef() ;
    useEffect(()=>{
        if(inputR.current){
            inputR.current.focus() ;
        }
    },[])

    const changeHandler = (e)=>{
        setInput(e.target.value) ;
    }

    const submitHandler = (e)=>{
        e.preventDefault() ;
        
        if(!input){
            alert("مقدار را وارد کنید") ;
            return ;
        }

        props.submitTodo(input) ;
        setInput("") ;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="formControl">
                <input 
                    ref={props.edit ? inputR : null}
                    type="text" 
                    value={input} 
                    onChange={changeHandler} 
                    placeholder={props.edit?"Update Todo ..." : "Add Todo ..."} 
                />
                <button className={`btn ${props.edit? "update" : "add" }`} type="submit">{props.edit? "Update" : "Add"}</button>
            </div>
        </form>
    );
}
 
export default TodoForm;