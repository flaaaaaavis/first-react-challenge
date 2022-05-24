import React, {useState} from 'react'

import Form from './Form'
import List from './List' 

function Main () {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [dueDate, setDueDate] = useState('')
  	const [status, setStatus] = useState('')

	const [tasks, setTasks] = useState([])

  	function clearInput () {
		setTitle('')
		setDescription('')
		setDueDate('')
    	setStatus('')
	}
	function handleData (event) {
		const newTask = {
			title: title,
			description: description,
			dueDate: dueDate,
      		status: status
		}
		const allTasks = tasks
		allTasks.push(newTask)
		setTasks(allTasks)

		clearInput()
	}
	function edit() {
		console.log('editar')
	}

	function discard() {
		console.log('deletar')
	}

	return <main>
		<h2>Cadastrar uma Tarefa</h2>
		<Form
			setTitle={setTitle}
			setDescription={setDescription}
			setDueDate={setDueDate}
			title={title}
			description={description}
			dueDate={dueDate}
			handleData={handleData}
			clearInput={clearInput}
		/>
		<h2>Quadro de Tarefas</h2>
		<div id="container-content">
			<List className={'toDo'} />
			<List className={'doing'} />
			<List className={'done'} />
		</div>
	</main>
}

export default Main
