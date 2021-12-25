import React, {useState} from 'react'

export const UseState = () => {
  const [count, setCount] = useState(0)
  console.log("Component Renderd")

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
    </div>
  )
}
