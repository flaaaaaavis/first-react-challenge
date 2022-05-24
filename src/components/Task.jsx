import React from 'react'
import PropTypes from 'prop-types'

import binSymbol from '../media/delete_FILL0_wght400_GRAD0_opsz48.svg'
import editSymbol from '../media/edit_note_FILL0_wght400_GRAD0_opsz48.svg'

const Task = function task (props) {
  return <div className='task'>
    <h3 className='title'>{props.title}</h3>
    <h4 className='status'>{props.status}</h4>
    <p className='description'>{props.description}</p>
    <h4 className='due-date'>{props.dueDate}</h4>
    <div>
      <img src={binSymbol} alt="" onClick={props.discard()} />
      <img src={editSymbol} alt="" onClick={props.edit()} />
    </div>
  </div>
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  discard: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
}

export default Task
