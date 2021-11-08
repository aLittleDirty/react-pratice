// 编写footer组件，
// footer组件的功能是给数据树上的currentStatus赋值即可
import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions'

function Footer(props) {
  return (
    <div>
      <div onClick={props.filterAll}>All</div>
      <div onClick={props.filterUNDO}>UNDO</div>
      <div onClick={props.filterDONE}>DONE</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filterAll: actions.setAll,
  filterDONE: actions.setDONE,
  filterUNDO: actions.setUNDO
}, dispatch)

export default connect(null, mapDispatchToProps)(Footer);