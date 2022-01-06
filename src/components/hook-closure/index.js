import React, { useEffect, useState } from 'react'

function HookClosure() {
  const [count, setCount] = useState(0)
  console.log('rerender', count)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('count', count)
      setCount(count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [count])
  return (
    <div>
      <span>{count}</span>
    </div>
  )
}

export default HookClosure;