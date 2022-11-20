import React from "react"
import { useRef ,useContext} from "react";
import { TodoContext } from "../store/todos-context";
import classes from './NewTodo.module.css'
// const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> =(props)=>{
const NewTodo:React.FC =()=>{
  const todoCtx= useContext(TodoContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event:React.FormEvent)=>{
    event.preventDefault();
    // ? try get value null or value, ! not null certin not null 
    const enteredText = todoTextInputRef.current!.value;
    if(enteredText.trim().length === 0){
      return;
    }
    // props.onAddTodo(enteredText);
    todoCtx.addTodo(enteredText)
   
  }
  return <form className={classes.form} onSubmit={submitHandler}> 
    <label htmlFor='text' >Todo text</label>
    <input type="text" ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}

export default NewTodo