import React from "react";
import { Redirect } from 'react-router-dom'
import Context from '../components/context/index'
import TicTacToe from  '../components/tic-tac-toe/index'
import TodoList from '../components/todolist/index'
import Home from '../pages/home/index'

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,//相当于switch的break,不会再向下匹配
        render: () => (
          <Redirect to={"/context"}></Redirect>
        )
      },
      {
        path: '/context',
        component: Context
      },
      {
        path: '/tic-tac-toe',
        component: TicTacToe
      },
      {
        path: '/todolist',
        component: TodoList
      }
    ]
  }
]