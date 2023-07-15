import React from "react";
import { styled } from "styled-components";

function GameListItem(props) {
  return (
    <GameItemContainer>
      <img src={props.image} alt="" />
      <InfoGamesContainer>
        <Title>
          <h3>{props.title}</h3>
        </Title>

        <GameCategory>
          <p>{props.category}</p>
        </GameCategory>
      </InfoGamesContainer>
      <GamePrice>
        R$ {props.price}
      </GamePrice>
    </GameItemContainer>
  );
}

export default GameListItem;

const GameItemContainer = styled.div`
  height: 80px;
  width: 100%;
  margin: 0px 8px 4px 8px;

  display: flex;
  flex-direction: row;
  align-items: end;

  background-color: #d9d9d9;
  img {
    object-fit: cover;
    min-width: 160px;
    height: 100%;
  }
`;

const InfoGamesContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  padding: 8px;
`;

const Title = styled.div`
  display: flex;
`;
const GameCategory = styled.div`
  display: flex;
`;
const GamePrice = styled.div`
  display: flex;
  bottom: 0px;
  right: 0px;
  font-size: 14px;
  white-space: nowrap;
`;
