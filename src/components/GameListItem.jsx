import React from 'react'
import { styled } from 'styled-components'

function GameListItem() {
  return (
    <GameItemContainer></GameItemContainer>
  )
}

export default GameListItem

const GameItemContainer = styled.div`
  height: 80px;
  width: 100%;
  margin: 0px 8px 4px 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #d9d9d9;
`