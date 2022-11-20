
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';
import { Children } from 'react';


function App() {
  // const [todos,setTodos] = useState<Todo[]>([]);
  // // const todos=[
  // //   new Todo('learn react'),
  // //   new Todo('learn typescript')
  // // ]
  // const addTodoHandler = (todoText:string)=>{
  //   const newTodo = new Todo(todoText)
  //   setTodos ((prevTodos)=>{
  //     return prevTodos.concat(newTodo)
  //   })
  // }
  // const removeTodoHandler =(todoId :string)=>{
  //     setTodos((prevTodos)=>{
  //       return prevTodos.filter(todo => todo.id !== todoId)
  //     })
    
  // }
  return (
  
    <TodosContextProvider>
    <NewTodo />
    <Todos />
  </TodosContextProvider>

  );
}

export default App;
