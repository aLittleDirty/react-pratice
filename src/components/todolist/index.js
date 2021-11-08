import React from 'react'
import TodoItem from './todoitem'
import Footer from './footer'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { bindActionCreators } from 'redux'


class TodoMVC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      allCompleted: false
    }
  }

  handleEnter(e) {
    if(e.key === 'Enter') {
      let text = e.target.value.trim()
      if(text.length) {
        this.props.onAddTodo(text)
        this.setState({
          inputValue: ''
        })
      }
    }
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  toggleAll() {
    let allCompleted = !this.state.allCompleted
    this.setState({
      allCompleted: allCompleted
    })
    this.props.onToggleAll(allCompleted)
  }

  render() {
    return (
      <div>
        <input checked={this.state.checked} type="checkbox" onChange={() =>{this.toggleAll()}}/>
        <input onKeyPress={(e)=> {this.handleEnter(e)}} onChange={(e) => this.handleChange(e)} value={this.state.inputValue}></input>
        <ol>
          {
            this.props.todolist.map((item, index) => {
              return (
                <TodoItem key={item.id} text={item.text} completed={item.completed} deleteItem={() => {this.props.onDeleteTodo(index)}} changeItemValue={(text) => {this.props.onEditTodo(text, item.id)}} changeComplete={() => {this.props.onToggleTodo(item.id)}}></TodoItem>
              )
            })
          }
        </ol>
        <Footer></Footer>
      </div>
    )
  }
}


// 输入，获取数据树上的数据，并通过props使用
const mapStateToProps = (state) => {
  return {
    todolist: state.todolist.filter((item) => {
      if(state.currentStatus === 'all') {
        return true
      }
      if(state.currentStatus === 'done') {
        return item.completed
      }
      if(state.currentStatus === 'undo') {
        return !item.completed
      }
    })
  }
}


// 把UI组件中使用的函数和action函数进行映射
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => {
      dispatch(actions.addTodo(text))
    },
    onDeleteTodo: (id) => {
      dispatch(actions.deleteTodo(id))
    },
    onEditTodo: (text, id) => {
      dispatch(actions.editTodo(text, id))
    },
    onToggleTodo: (id) => {
      dispatch(actions.toggleTodo(id))
    },
    onToggleAll: (completed) => {
      dispatch(actions.toggleAll(completed))
    }
  }
}

// mapDispatchToProps的另一种写法,直接改成映射关系
const mapDispatchToProps2 = (dispatch) => bindActionCreators({
  onAddTodo: actions.addTodo,
  onDeleteTodo: actions.deleteTodo
}, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )(TodoMVC);

// export default TodoMVC;