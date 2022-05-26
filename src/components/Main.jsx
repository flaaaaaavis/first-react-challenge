import React, {useState} from 'react'
import styled from 'styled-components'

import Form from './Form'
import List from './List'

const StyledMain = styled.main`
	width: 100vw;
	min-height: 92vh;
	background: #E7E7E7;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	button, a, img, input {
		cursor: pointer;
	}
	input, select {
		padding: 0 10px;
	}
	#container-content {
		width: 85vw;
		min-height: 30vh;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`

function Main (props) {
	const [title, setTitle] = useState('')
	const [dueDate, setDueDate] = useState('')
  	const [status, setStatus] = useState('toDo')

	const [tasks, setTasks] = useState([
		{
			title: "Task 01",
			dueDate: "2022-05-25",
			status: "toDo"
		},
		{
			title: "Task 02",
			dueDate: "2022-05-15",
			status: "doing"
		},
		{
			title: "Task 03",
			dueDate: "2022-05-11",
			status: "done"
		}
	])

  	function cleanInput () {
		setTitle('')
		setDueDate('')
    	setStatus('toDo')
	}
	function handleData () {
		const newTask = {
			"title": title,
			"dueDate": dueDate,
      		"status": status
		}
		const allTasks = tasks
		allTasks.push(newTask)
		setTasks(allTasks)

		console.log(tasks)
		cleanInput()
	}

	return <StyledMain>
		<h2>Cadastrar uma Tarefa</h2>
		<Form
			title={title}
			setTitle={setTitle}
			dueDate={dueDate}
			setDueDate={setDueDate}
			status={status}
			setStatus={setStatus}
			handleData={handleData}
			cleanInput={cleanInput}
		/>
		<h2>Quadro de Tarefas</h2>
		<div id="container-content">
			<List
				className='to-do'
				status='toDo'
				listTitle='A fazer'
				tasks={tasks}
				setTasks={setTasks}
                setDueDate={setDueDate}
				setTitle={setTitle}
				setStatus={setStatus}
				handleData={handleData}
				cleanInput={cleanInput}
			/>
			<List
				className='doing'
				status='doing'
				listTitle='Fazendo'
				tasks={tasks}
				setTasks={setTasks}
                setDueDate={setDueDate}
				setTitle={setTitle}
				setStatus={setStatus}
				handleData={handleData}
				cleanInput={cleanInput}
			/>
			<List
				className='done'
				status='done'
				listTitle='Feito'
				tasks={tasks}
				setTasks={setTasks}
                setDueDate={setDueDate}
				setTitle={setTitle}
				setStatus={setStatus}
				handleData={handleData}
				cleanInput={cleanInput}
			/>
		</div>
	</StyledMain>
}

export default Main
