import React from 'react';

const ThemeContext = React.createContext(null)
const ThemeProvider = ThemeContext.Provider // 提供者
const ThemeConsumer = ThemeContext.Consumer // 订阅消费者


// 这种方式只适用于类组件，
// 指向需要获取的context,可以获取最近一层provider提供的contextValue值
class ClassConsumerDemo extends React.Component {
  render() {
    const { color, background } = this.context
    return (
      <div style={ {color, background} }>类组件消费者</div>
    )
  }
}

ClassConsumerDemo.contextType = ThemeConsumer

const ClassSon = () => <ClassConsumerDemo/>


// 函数组件 16.8版本， useContext方式

function FuncConsumerDemo() {
  const contextValue = React.useContext(ThemeContext)
  const { color, background } = contextValue
  return <div style={{color, background }}>函数式消费者</div>
}

const FuncSon = () => <FuncConsumerDemo></FuncConsumerDemo>

// 订阅者方式
function ConsumerDemo(props) {
  const { color, background } = props
  return <div style={{ color, background }}>订阅消费者</div>
}

// 用订阅者包裹渲染的目标组件，并将参数全部传进目标组件中
const ConsumerSon = () => {
  return (
    <ThemeConsumer>
    {
      (contextValue)=> <ConsumerDemo {...contextValue}></ConsumerDemo>
    }
  </ThemeConsumer>
  )
}


function ProviderDemo() {
  const [ contextValue, setConTextValue ] = React.useState({ color: 'red', background: 'pink' })
  return (
    <div>
      <ThemeProvider value={ contextValue }>
        {/* <ClassSon></ClassSon> */}
        <FuncSon></FuncSon>
        <ConsumerSon></ConsumerSon>
      </ThemeProvider>
      <button onClick={ ()=> setConTextValue({ color: '#fff', background: 'blue' })}>切换主题色</button>
    </div>
  )
}

export default ProviderDemo;