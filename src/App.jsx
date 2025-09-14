import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const addTodo = () => {
    if (inputValue.trim() === '') return; // prevent empty todos
    setTodos([...todos, { text: inputValue, completed: false}]) // add the new todo
    setInputValue('') // clear the input
  }

  const deleteTodo = (idToDelete) => {
    setTodos(todos.filter((_, index) => index !== idToDelete))
  }

  // Toggle complete
const toggleTodo = (index) => {
  const newTodos = [...todos]
  newTodos[index].completed = !newTodos[index].completed
  setTodos(newTodos)
}


  return (
    <>
      <div className="todo-container">
        <h1>Todo List</h1>
        <button 
          className="toggle-btn" 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Toggle Theme
        </button>
        <div className="controls">
          {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Toggle Theme
          </button> */}
        
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Type something..."
            onKeyDown={(event) => {
              if (event.key === "Enter" && inputValue.trim() !== "") {
                addTodo()
              }
            }}
          />
          <button onClick={addTodo}>
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              <span
                onClick={() => toggleTodo(index)}
                className={`todo-text ${todo.completed ? 'completed' : ''}`}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`container ${theme}`}></div>
    </>
  )
}

export default App
