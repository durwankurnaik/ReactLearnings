import React, {useEffect, useRef, useState} from 'react'

function UsingRefs() {
  const inputRef = useRef(null)
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setTimeout(() => {
      setTimer(prevState => prevState + 1)
    }, 1000);

    return () => {
      clearInterval(intervalRef.current)
    }
  })

  return (
    <div>
      <label>Name</label>
      <input className='border-4' type="text" ref={inputRef} />
      <div>
        Timer - {timer}
      </div>
      <button onClick={() => clearInterval(intervalRef.current)}>stop timer</button>
    </div>
  )
}

export default UsingRefs
