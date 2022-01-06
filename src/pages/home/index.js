import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

function Home(props) {
  return (
    <div>
      <h1>主页面——导航</h1>
      <ul>
        <li><Link to="/context">context页</Link></li>
        <li><Link to="/tic-tac-toe">井字棋</Link></li>
        <li><Link to="/todolist">待办事项页</Link></li>
        <li><Link to="/memoText">重复渲染学习</Link></li>
        <li><Link to="/hookClosure">闭包陷阱</Link></li>
        <li><Link to="/useImperativeHandle">ref透传</Link></li>
      </ul>
      {/* 只接受数组进行渲染 */}
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default Home;