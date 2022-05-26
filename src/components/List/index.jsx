import React from 'react';
import styled from 'styled-components'

import Task from '../Task'

const StyledList = styled.div`
  	width: 20vw;
	height: 50vh;
	border-radius: 20px;
	background: #FFFFFF;
	.list-title {
		width: 100%;
		height: 5vh;
		border-radius: 20px 20px 0 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #0ACD86;
	}
`

function List (props) {
	return <StyledList className={props.className}>
		<h4 className='list-title'>{props.listTitle}</h4>
		<div>
			{
				props.tasks.map(
					(task, index) => {
						if (task.status === props.status) {
							return <Task
								key={index}
								index={index}
								title={task.title}
								status={task.status}
								dueDate={task.dueDate}
								tasks={props.tasks}
								setTasks={props.setTasks}
								setDueDate={props.setDueDate}
								setTitle={props.setTitle}
								setStatus={props.setStatus}
								handleData={props.handleData}
								cleanInput={props.cleanInput}
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
