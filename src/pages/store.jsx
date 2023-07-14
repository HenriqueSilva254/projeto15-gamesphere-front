import React from "react";
import { styled } from "styled-components";
import Nav from "../components/nav.jsx";
import GameListItem from "../components/GameListItem";
import GamesHighlight from "../components/GamesHighlight";
import { Icon } from "@iconify/react";

function StorePage() {
  return (
    <StorePageBody>
      <StorePageBlur />
      <Nav />
      <StorePageContainer>
        <StorePageContent>
          <GamesHighlight />

          <GameListContainer>
            <GameListFilterContainer>
              <h2>Genero</h2>
              Genero Genero Genero Genero Genero Genero Genero
            </GameListFilterContainer>
            <GameList>{/* MAP DOS JOGOS */}</GameList>
          </GameListContainer>
        </StorePageContent>
      </StorePageContainer>
    </StorePageBody>
  );
}

export default StorePage;

const GameListContainer = styled.div`
  width: 90%;
  height: 1100px;
  display: flex;
  flex-direction: row;
  margin-top: 8px;

  background-color: green;
`;

const GameList = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: row;

  background-color: lightgray;
`;

const GameListFilterContainer = styled.div`
  width: 140px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  background-color: #d9d9d9;

  h2 {
    color: orange;
  }
`;

const StorePageContainer = styled.div`
  height: 100%;
  width: 60vw;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StorePageBlur = styled.div`
  height: 100%;
  width: 60vw;
  backdrop-filter: blur(8px);
  position: fixed;
`;

const StorePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StorePageBody = styled.section`
  overflow-x: hidden;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
