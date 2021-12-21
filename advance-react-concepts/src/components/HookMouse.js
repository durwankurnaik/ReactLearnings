import React, {useState, useEffect} from 'react'

function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    console.log("useEffect called")
    window.addEventListener("mouseover", logMousePosition)
  }, [])

  const logMousePosition = (event) => {
    setX(event.clientX)
    setY(event.clientY)
  }

  return (
    <div>
      <h2 className='text-3xl'>X: {x}, Y: {y}</h2>
    </div>
  )
}

export default HookMouse
