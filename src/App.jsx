import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    setTodos([...todos, inputValue ]) // add the new todo
    setInputValue('') // clear the input
  }

  const deleteTodo = (idToDelete) => {
    setTodos(todos.filter((_, index) => index !== idToDelete))
  }

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Type something..."
        />
        <button onClick={addTodo}>
          Add
        </button>
        
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}
              <button onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
