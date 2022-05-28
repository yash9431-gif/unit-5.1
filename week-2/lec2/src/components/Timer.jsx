import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(100)
    
    useEffect(() => {
        const id = setInterval(() => {
            setTimer((prev)=>prev-1)
        }, 1000)
        return () => {
            clearInterval(id)
        }
    },[])

  return (
      <div>Count Down :{timer}</div>
  )
}

export default Timer