import { useState } from "react"

const Question = () => {
  const [answer, setAnswer] = useState("")
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>What's the capital of Sweden? </label>
      <input
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      />
      {showSummary && <p>Your answer: {answer}</p>}
    </form>
  )
}

export default Question