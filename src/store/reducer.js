import { combineReducers } from "redux";

import { todolist, currentStatus } from '../components/todolist/store/reducer';

export default combineReducers({
  todolist,
  currentStatus
})