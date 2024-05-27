import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import NewTodo from './NewTodo'

function App() {
  const [todos, setTodos] = useState([{id: 1, todo: "Eat shit"}]);

  const addTodos = (item) => {
    setTodos(prevTodos => {
      return [...prevTodos, item]
    })
  } 

  const deleteTodo = (value, id) => {
    setTodos(todos.filter(t => {
      if(t.index !== id){
        return value
      }
    }))
  }

  return (
    <div>
      <h1>TODOS</h1>
      <Todo todos={todos} deleteTodo={deleteTodo}/>
      <NewTodo addTodos={addTodos}/>
    </div>
  )
}

export default App
