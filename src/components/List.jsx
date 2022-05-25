import React, {useState} from 'react';
import styled from 'styled-components'

import Task from './Task'

const StyledList = styled.div`
  width: 20vw;
	height: 50vh;
	border-radius: 20px;
	background: #FFFFFF;
`

const List = function (props) {
	return <StyledList className={props.className}>
		<h4 className='list-title'>{props.listTitle}</h4>
		<div>

		</div>
	</StyledList>
}

export default List;
