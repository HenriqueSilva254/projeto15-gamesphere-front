import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

function GameListItem(props) {
 
  return (
    <Link to={`/Game/${props.title}`}>
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
      <GamePriceContainer>
        <button>
          <StyledIcon icon="material-symbols:add-shopping-cart-rounded" />{" "}
        </button>
        R$ {props.price}
      </GamePriceContainer>
    </GameItemContainer>
    </Link>
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
const GamePriceContainer = styled.div`
  display: flex;
  margin: 0 8px 8px 0px;
  flex-direction: column;
  align-items: end;
  bottom: 0px;
  right: 0px;
  font-size: 14px;
  white-space: nowrap;

  button {
    transform: scale(0.6);
    transform-origin: right;
    width: 120px;
    display: flex;
    justify-content: center;
    color: #f0a24b;
    :hover {
      color: lightgray;
    }
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 24px;
  color: white;
`;
