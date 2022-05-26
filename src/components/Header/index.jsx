import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
	width: 100vw;
	height: 8vh;
	background-color: #0ACD86;
	text-align: center;
`

function Header () {
  return <StyledHeader>
		<h1>Gerenciador de Tarefas - Kanban</h1>
	</StyledHeader>
}

export default Header
