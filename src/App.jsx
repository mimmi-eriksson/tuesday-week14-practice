import { useState } from "react"
import Question from "./components/Question"

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>React State</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
      <button onClick={() => setCount(count * 2)}>Multiply</button>
      {count >= 100 && <p>You hit 100!</p>}
      <Question />
    </>
  )
}
