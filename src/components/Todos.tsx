
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import { TodoContext } from "../store/todos-context";
import { useContext } from "react";
// const Todos:React.FC<{items:Todo[]; onRemoveTodo:(id:string)=>void}>=(props)=>{
const Todos:React.FC=()=>{
  const todoCtx=useContext(TodoContext)
 
return(
  <ul className={classes.todos}>{todoCtx.items.map((item)=><TodoItem key={item.id} text={item.text}  onRemoveTodo={todoCtx.removeTodo.bind(null,item.id)}/>)}</ul>
)
}

export default Todos