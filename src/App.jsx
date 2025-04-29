import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>React Boilerplate</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase count</button>
      <button onClick={() => setCount(count - 1)}>
        Decrease count</button>
      <button
        onClick={() => setCount(0)}
        disabled={count === 0}
      >
        Reset
      </button>
      <button onClick={() => setCount(count * 2)}>
        Multiply</button>

      <p>Count: {count}</p>
      {count > 100 && <p>You hit 100!</p>}

    </>
  )
}
