import React, {useState} from 'react';
import PropTypes from 'prop-types'

import Task from './Task'

const List = function list (props) {
  const [tasks, setTasks] = useState([])
  return <div className={props.className}>
    {
      tasks.map(
        (task) => <Task
          title={task.title}
          status={task.status}
          dueDate={task.dueDate}
          description={task.description}
        />
      )
    }
  </div>
}

List.propTypes = {
  className: PropTypes.string.isRequired,
}

export default List;