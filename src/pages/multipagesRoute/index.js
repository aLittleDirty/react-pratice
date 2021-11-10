import React from "react";
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

function MultiPages() {
  return (
    <div>
      <h1>主页面_导航</h1>
      <ul>
      {/* Link取代<a>元素 */}
        <li><Link to="/first">First</Link></li>
        <li><Link to="/second">Second</Link></li>
        <li><Link to="/third">Third</Link></li>
      </ul>
    </div>
  )
}

export default MultiPages;