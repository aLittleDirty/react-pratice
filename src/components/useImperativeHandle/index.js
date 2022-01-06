import React, { useImperativeHandle, useRef } from 'react'

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    foc: () => {
      inputRef.current.focus();
    }
  }))

  return <input ref={inputRef} type="text"></input>
})


const ImperativeHandle = props => {
  const fancyInputRef = useRef()

  return (
    <div>
      <FancyInput ref={fancyInputRef}></FancyInput>
      <button onClick={() => fancyInputRef.current.foc()}>父组件调用子组件focus</button>
    </div>
  )
}

export default ImperativeHandle;