import React, { useCallback, useMemo, useState } from 'react'

function Child (props) {
  const [childState, setChildState] = useState(0)

  console.log('child render', childState, props.childText)
  return (
    <div>
      <span>child {childState}</span>
      <span>father {props.childText}</span>
      <button onClick={() => setChildState(0)}>改变子组件state</button>

    </div>
  )
}


function OtherChild (props) {
  console.log('textChild render too')
  return (
    <div>
      <span>{props.childText}</span>
    </div>
  )
}

function ThirdChild (props) {
  const [thirdText, setThirdText] = useState('callback')
  console.log('callback render')
  return (
    <div>
      <button onClick={props.callback}>{thirdText}</button>
      <button onClick={() => {setThirdText('changedText')}}>changeText</button>
    </div>
  )
}


const MemoChild = React.memo(Child)
const MemoOtherChild = React.memo(OtherChild)
const MemoThirdChild = React.memo(ThirdChild)

function MemoText () {
  const [state, setState] = useState(0)
  const [childText, setChildText] = useState('twxt')

  console.log('state', state)

  const setSameState = () => {
    console.log('打基本功', state)
    setState(0)
  }

  const setOtherState = () => {
    console.log('赋值不同', state)
    setState(1)
  }

  const setOtherText = () => {
    console.log('设置另一个childText', childText)
    setChildText('tyui')
  }

  const callBack = useCallback(() => {
    console.log('i am the callback')
  }, [])

  const memoState = useMemo(() => {
    console.log('在修改state时才会触发该函数，并且是在渲染前调用，类似shouldComponentUpdate的时期')
    return state
  }, [state])

  return (
    <div>
      <span>我是memoText</span>
      <span>{memoState}</span>
      <button onClick={setSameState}>重复赋值</button>
      <button onClick={setOtherState}>改变第一个子组件赋值</button>
      <button onClick={setOtherText}>改变第二个子组件赋值</button>
      <MemoChild childText={state}></MemoChild>
      <MemoOtherChild childText={childText}></MemoOtherChild>
      <MemoThirdChild callback={callBack}></MemoThirdChild>
    </div>
  )
}

export default MemoText;