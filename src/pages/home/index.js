import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

function Home(props) {
  useEffect(() => {
    console.log('asdhg',props.route)
  })
  return (
    <div>
      <h1>主页面——导航</h1>
      <ul>
        <li><Link to="/context">context页</Link></li>
        <li><Link to="/tic-tac-toe">井字棋</Link></li>
        <li><Link to="/todolist">待办事项页</Link></li>
      </ul>
      {/* 只接受数组进行渲染 */}
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default Home;