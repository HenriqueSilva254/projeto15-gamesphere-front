import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import { UserContext } from "../contexts/userContext.jsx";
import Jogos from "../ArrayGames/games.js";

function GameListItem(props) {
  const navigate = useNavigate();
  const { userCart, setUserCart, updateCart } = useContext(UserContext);

  function handleAddItem() {
    const jogoCarrinho = Jogos.filter((j) => j.title.includes(props.title));
    const isItemInCart = userCart.some((item) => item.title === props.title);
    if (isItemInCart) {
      alert("Item já está no carrinho!");
    } else {
      const currentCart = Array.isArray(userCart)
        ? [...userCart, jogoCarrinho]
        : [jogoCarrinho];
      updateCart(currentCart);
      console.log(currentCart);
    }
  }

  return (
    <GameItemContainer>
      <img
        onClick={() => navigate(`/Game/${props.title}`)}
        src={props.image}
        alt=""
      />

      <InfoGamesContainer onClick={() => navigate(`/Game/${props.title}`)}>
        <Title>
          <h3>{props.title}</h3>
        </Title>

        <GameCategory>
          <p>{props.category}</p>
        </GameCategory>
      </InfoGamesContainer>

      <GamePriceContainer>
        <button onClick={handleAddItem}>
          <StyledIcon icon="material-symbols:add-shopping-cart-rounded" />{" "}
        </button>
        R$ {props.price}
      </GamePriceContainer>
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
    cursor: pointer;
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
    cursor: pointer;
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
