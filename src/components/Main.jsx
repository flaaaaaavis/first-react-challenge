import React, {useState} from 'react'

import Form from './Form'
import List from './List'
import Task from './Task'

function Main () {
	const [title, setTitle] = useState('')
	const [dueDate, setDueDate] = useState('')
  	const [status, setStatus] = useState('')

	const [tasks, setTasks] = useState([
		{"title": "Task 01", "dueDate": "2022-05-25", "status": "toDo"},
		{"title": "Task 02", "dueDate": "2022-05-15", "status": "doing"},
		{"title": "Task 03", "dueDate": "2022-05-11", "status": "toDo"},
		{"title": "Task 04", "dueDate": "2022-05-28", "status": "done"}
	])

  	function clearInput () {
		setTitle('')
		setDueDate('')
    	setStatus('')
	}
	function handleData (event) {
		const newTask = {
			"title": title,
			"dueDate": dueDate,
      		"status": status
		}
		if(newTask.status == 'toDo') {
			console.log('toDo')
		} else if(newTask.status == 'doing') {
			console.log('doing')
		} else {
			console.log('done')
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
			setDueDate={setDueDate}
			title={title}
			dueDate={dueDate}
			status={status}
			setStatus={setStatus}
			handleData={handleData}
			clearInput={clearInput}
		/>
		<h2>Quadro de Tarefas</h2>
		<div id="container-content">
			<List className='to-do' listTitle='A fazer'>{
				tasks.map(
					(task) => {
						if(task.status == 'toDo') {
							<Task
								title={task.title}
								status={task.status}
								dueDate={task.dueDate}
							/>
						}
					}
				)
			}</List>
			<List className='doing' listTitle='Fazendo'>{
				tasks.map(
					(task) => {
						if(task.status == 'doing') {
							<Task
								title={task.title}
								status={task.status}
								dueDate={task.dueDate}
							/>
						}
					}
				)
			}</List>
			<List className='done' listTitle='Feito'>{
				tasks.map(
					(task) => {
						if(task.status == 'done') {
							<Task
								title={task.title}
								status={task.status}
								dueDate={task.dueDate}
							/>
						}
					}
				)
			}</List>
		</div>
	</main>
}

export default Main
