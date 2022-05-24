import React from 'react'
import PropTypes from 'prop-types'

const BtnHeader = function button (props) {
  return <button className={props.className}>{props.content}</button>
}

BtnHeader.propTypes = {
  className: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired
}

export default BtnHeader
