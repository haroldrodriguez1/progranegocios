import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: 32 }}>
      <h1>Vite + React</h1>
      <p>¡Bienvenido a tu proyecto!</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Contador: {count}
      </button>
    </div>
  )
}

export default App