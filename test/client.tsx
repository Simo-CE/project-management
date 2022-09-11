import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

function Todo({ todo, onDelete }: { todo: any; onDelete: any }) {
  return (
    <div style={{ border: 'solid 1px' }}>
      {todo.content}

      <div style={{ float: 'right', background: 'salmon' }} onClick={onDelete}>
        Delete item
      </div>
    </div>
  )
}

function App() {
  let [todos, setTodos] = useState<any>([])

  useEffect(() => {
    fetch('http://localhost:3333/todos')
      .then((r) => r.json())
      .then((json) => setTodos(json))
  }, [])

  return (
    <main style={{ width: 400 }}>
      <h1>TODOs</h1>

      <div
        style={{ background: 'palegreen' }}
        onClick={async () => {
          await fetch('http://localhost:3333/todos/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{"content":"' + window.prompt('Content') + '"}',
          })

          let json = await (await fetch('http://localhost:3333/todos')).json()
          console.log('here')
          setTodos(json)
        }}
      >
        Create new item
      </div>

      {todos.map((todo: any) => (
        <Todo
          todo={todo}
          onDelete={async () => {
            if (window.confirm('Are you sure?')) {
              await fetch('http://localhost:3333/todos/delete/' + todo.id, {
                method: 'DELETE',
              })

              let json = await (
                await fetch('http://localhost:3333/todos')
              ).json()
              console.log('here')
              setTodos(json)
            }
          }}
        />
      ))}
    </main>
  )
}

let root = ReactDOM.createRoot(document.getElementById('root') as any)
root.render(<App />)