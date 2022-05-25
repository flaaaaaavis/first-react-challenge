import React from 'react'

const Form = function (props) {
  	return <form>
		<input type="text" id='title' placeholder='Título'
			value={props.title}
			onChange={(event) => props.setTitle(event.target.value)}
		/>
		<input type="date" id='dueDate' placeholder='Data'
			value={props.dueDate}
			onChange={(event) => props.setDueDate(event.target.value)}
		/>
		<select name="status" id="status"
			onChange={(event) => props.setStatus(event.target.value)}
		>
			<option value="toDo">A fazer</option>
			<option value="doing">Fazendo</option>
			<option value="done">Feito</option>
		</select>
		<button type='button' className='submit' onClick={props.handleData}>Inserir Tarefa</button>
  	</form>
}

export default Form
