import React from 'react'
import styled from 'styled-components'

import binSymbol from '../media/delete_FILL0_wght400_GRAD0_opsz48.svg'
import editSymbol from '../media/edit_note_FILL0_wght400_GRAD0_opsz48.svg'

const StyledTask = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	img {
		width: 20px;
	};
`

function Task (props) {
  return <StyledTask>
    <h3 className='title'>{props.title}</h3>
    <h4 className='status'>{props.status}</h4>
    <h4 className='due-date'>{props.dueDate}</h4>
    <div>
      <img src={binSymbol} alt="" onClick={props.discard} />
      <img src={editSymbol} alt="" onClick={props.edit} />
    </div>
  </StyledTask>
}

export default Task
