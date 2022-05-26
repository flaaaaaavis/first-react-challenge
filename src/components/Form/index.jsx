import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
	width: 85vw;
	height: 15vh;
	padding: 2.5vh 0;
	background: #F2F2F2;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	button {
		width: 20vw;
		height: 5vh;
		border-radius: 17px;
		font-size: 16px;
		font-weight: 400;
	}
	#title {
		width: 20vw;
		height: 5vh;
		background: #FFFFFF;
		border-radius: 17px;
	}
	#dueDate, #status {
		width: 10vw;
		height: 5vh;

		background: #FFFFFF;
		border-radius: 17px;
	}
	.submit {
		background: #0AAB6B;
		color: #FFFFFF;
	}
`

const Form = function (props) {
  	return <StyledForm>
		<input type="text" id='title' placeholder='Título'
			value={props.title}
			onChange={(event) => props.setTitle(event.target.value)}
		/>
		<input type="date" id='dueDate' placeholder='Data'
			value={props.dueDate}
			onChange={(event) => props.setDueDate(event.target.value)}
		/>
		<select name="status" id="status"
			onChange={event => props.setStatus(event.target.value)}
		>
			<option value="toDo">A fazer</option>
			<option value="doing">Fazendo</option>
			<option value="done">Feito</option>
		</select>
		<button type='button' className='submit' onClick={props.handleData}>Inserir Tarefa</button>
  	</StyledForm>
}

export default Form
