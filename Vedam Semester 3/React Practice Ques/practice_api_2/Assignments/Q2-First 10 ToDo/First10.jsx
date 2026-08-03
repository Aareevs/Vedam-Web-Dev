import React from 'react'
import { useEffect, useState } from 'react'

const First10 = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
      })
  }, [])

  return (
    <div>
      <h1>First 10 Todos</h1>

      <ul>
        {todos.slice(0, 10).map((todo) => (
          <li key={todo.id}>
            {todo.id}. {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default First10
