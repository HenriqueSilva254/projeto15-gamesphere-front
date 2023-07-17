import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Jogos from "../ArrayGames/games";
import { useNavigate } from "react-router-dom";

function GamesHighlight() {
  const [index, setIndex] = useState(0);
  const jogoAtual = Jogos[index];
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Jogos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ComponenteDiv onClick={() => navigate(`/Game/${jogoAtual.title}`)}>
      <img src={jogoAtual.image} alt={jogoAtual.title} />
    </ComponenteDiv>
  );
}

const ComponenteDiv = styled.div`
  width: 651px;
  margin-top: 60px;
  cursor: pointer;

  img {
    width: 726px;
    height: 371px
  }
;
`
export default GamesHighlight;