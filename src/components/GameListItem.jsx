import React from 'react'
import { styled } from 'styled-components'

function GameListItem(props) {

  return (
    <GameItemContainer>
      <img src={props.image} alt="" />
      <InfoGamesContainer>
        <Title>
          <p>{props.title}</p>
          <a>{props.category}</a>
        </Title>

        <p>{props.price}</p>
      </InfoGamesContainer>
    </GameItemContainer>
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
  img{
    width: 189px;
    height: 100%;
  }
  `
const InfoGamesContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0px 0px 8px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 8px;
`
const Price = styled.div`
  
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
`