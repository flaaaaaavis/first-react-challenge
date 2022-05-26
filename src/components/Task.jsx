import React from 'react'
import styled from 'styled-components'

import binSymbol from '../media/delete_FILL0_wght400_GRAD0_opsz48.svg'
import editSymbol from '../media/edit_note_FILL0_wght400_GRAD0_opsz48.svg'

const StyledTask = styled.div`
	width: 95%;
	height: 15vh;
	margin-left: 2.5%;
	margin-top: 2.5%;
	border-radius: 10px;
	background: #DFFAE8;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	img {
		width: 20px;
	};
`

function Task (props) {
	function discard () {
        let newTask = props.tasks;
        newTask.splice(props.index, 1);
        props.setTasks(newTask);
    }
    function edit () {
        props.setTitle(props.title)
        props.setDueDate(props.dueDate)
        props.setStatus(props.status)

        discard();
    }
	return <StyledTask>
		<h4 className='title'>{props.title}</h4>
		<h5 className='due-date'>{props.dueDate}</h5>
		<div>
			<img src={binSymbol} alt="" onClick={discard} />
			<img src={editSymbol} alt="" onClick={edit} />
		</div>
	</StyledTask>
}

export default Task
