import React from 'react'
import './index.css'

function  Square(props) {
  return (
    <button className="square" onClick={props.onClick}>{props.value}</button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square onClick={() => this.props.onClick(i)} value={this.props.squares[i]}></Square>
    )
  }

  render() {
    return (
      <div className="board">
        <div className="line1">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="line2">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="line3">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

// 2.可以恢复历史记录
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      xIsNext:  true,
      step: 0,
      history : [
        {squares: Array(9).fill(null)}
      ]
    }
  }

  handleClick(i) {
    let history = this.state.history.slice(0, this.state.step + 1);
    let newSquares = history[history.length - 1].squares.slice()
    if(winnerCalculator(history)) return;
    let currentPlayer = this.state.xIsNext ? 'X' : 'O'
    newSquares[i] = currentPlayer
    let newHistory = history.concat([{ squares: newSquares }])
    this.setState({
      xIsNext: !this.state.xIsNext,
      step: this.state.step + 1,
      history: newHistory,
    })
  }

  jumpToStep(step) {
    this.setState({
      xIsNext: (step % 2) === 0,
      step: step,
      history: this.state.history.slice(0, step + 1)
    })
  }

  render() {
    const current = this.state.history[this.state.step]
    const winner = winnerCalculator(current.squares)
    const move = this.state.history.map((step, index) => {
      let description = ''
      if(index === 0) {
        description = 'Go to game start'
      } else {
        description = 'Go to move #' + index
      }
      return (
        <li key={index}>
          <button onClick={() => {this.jumpToStep(index)}}>{description}</button>
        </li>
      )
    } )
    let status = ''
    if(winner) {
      status = 'winner is' + winner;
    } else {
      status = 'next player:' + (this.state.xIsNext ? 'X' : 'O');
    }
    return(
      <div className="game">
        <Board squares={current.squares} onClick={i => {this.handleClick(i)}}></Board>
        <div className="game-info">
          <span>{status}</span>
          <ol>{move}</ol>
        </div>
      </div>
    )
  }

}

function winnerCalculator(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game;