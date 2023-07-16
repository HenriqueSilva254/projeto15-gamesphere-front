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
      <h2>Category</h2>
      {Category.map((c) => (
       <Link to={`/CategoryGames/${c}`}><ButtonSlide href="" key={c}>{c}</ButtonSlide></Link>
      ))}
    </GameFilterContainer>
  );
}

export default GameFilterMenu;

const GameFilterContainer = styled.div`
  width: 150px;
  height: fit-content;
  padding: 12px 6px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;

  background-color: #d9d9d9;

  h2 {
    font-size: 18px;
    color: orange;
  }
`;


const ButtonSlide = styled.a`
  margin: 1rem;
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  color: #222;
  padding: 0.5em 1em;
  border: none;
  outline: none;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #F0A24B;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms ease-in-out;
  }

  &:hover:before,
  &:focus:before {
    transform: scaleX(1);
  }

  &:hover {
    color: white;
  }
`;
