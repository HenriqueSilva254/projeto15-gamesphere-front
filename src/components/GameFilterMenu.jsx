import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function GameFilterMenu() {
  const Category = [
    "Ação",
    "Terror",
    "Tiro",
    "Corrida",
    "Aventura",
    "RPG",
    "Plataforma",
  ];
  return (
    <GameFilterContainer>
      <h2>Categorias</h2>
      {Category.map((c) => (
       <Link to={`/CategoryGames/${c}`}><a href="" key={c}>{c}</a></Link>
      ))}
    </GameFilterContainer>
  );
}

export default GameFilterMenu;

const GameFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 150px;
  padding: 12px 6px;

  background-color: #d9d9d9;

  h2 {
    font-size: 18px;
    color: orange;
  }
  a{
    :hover{
        color: darkgray;
    }
  }
`;

