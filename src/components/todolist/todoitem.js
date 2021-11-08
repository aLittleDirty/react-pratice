import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editValue: '',
      canEdit: false,
      inputRef: null
    }
  }

  onEdit() {
    this.setState({
      canEdit: true,
      editValue: this.props.text
    })
  }

  editText(e) {
    this.setState({
      editValue: e.target.value
    })
  }
 
  onBlur(e) {
    if(e && e.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleSubmit() {
    let value = this.state.editValue.trim()
    if(value) {
      this.props.changeItemValue(this.state.editValue)
      this.setState({
        canEdit: false
      })
    } else {
      this.props.deleteItem()
    }
  }

  componentDidUpdate() {
    if(this.state.canEdit) {
      this.inputRef.focus()
    } else {
      this.inputRef.blur()
    }
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.completed} onChange={() => {this.props.changeComplete()}}/>
        <div onDoubleClick={() => {this.onEdit()}}>
          {this.props.text}
          <span onClick={() => {this.props.deleteItem()}}>X</span>
        </div>
        <input onChange={(e) => {this.editText(e)}} value={this.state.editValue}
         onKeyDown={(e) => {this.onBlur(e)}} ref={(node) => this.inputRef = node} onBlur={() => {this.handleSubmit()}}
        ></input>
      </li>
    )
  }
}

export default TodoItem;