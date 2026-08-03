import { useEffect, useState } from 'react'

const CompletedToDo = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        const completedTodos = data.filter((todo) => todo.completed === true)
        setTodos(completedTodos)
      })
  }, [])

  return (
    <div>
      <h1>Completed Todos</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id}. {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompletedToDo
