import React from 'react';
import styled from 'styled-components'

import Task from './Task'

const StyledList = styled.div`
  width: 20vw;
	height: 50vh;
	border-radius: 20px;
	background: #FFFFFF;
`

function List (props) {
	return <StyledList className={props.className}>
		<h4 className='list-title'>{props.listTitle}</h4>
		<div>
			{
				props.tasks.map(
					(task) => {
						if (task.status === props.status) {
							return <Task
								title={task.title}
								status={task.status}
								dueDate={task.dueDate}
								tasks={props.tasks}
								setTasks={props.setTasks}
								setDueDate={props.setDueDate}
								setTitle={props.setTitle}
								setStatus={props.setStatus}
							/>
						}
						return null
					}
				)
			}
		</div>
	</StyledList>
}

export default List
