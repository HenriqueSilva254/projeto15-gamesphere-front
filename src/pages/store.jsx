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
              <h2>Category</h2>
              Genero Genero Genero Genero Genero Genero Genero
            </GameListFilterContainer>
            <GameList>
              {/* MAP DOS JOGOS para componentes GameListItem */}
              <GameListItem />
              <GameListItem />
              <GameListItem />
            </GameList>
          </GameListContainer>
        </StorePageContent>
      </StorePageContainer>
    </StorePageBody>
  );
}

export default StorePage;

const StorePageContainer = styled.div`
  height: 100%;
  width: 60vw;
  min-width: 800px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StorePageContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StorePageBody = styled.section`
  overflow-x: hidden;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameListContainer = styled.div`
  width: 90%;
  height: 600px;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const GameList = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const GameListFilterContainer = styled.div`
  width: 150px;
  height: fit-content;
  padding: 12px 6px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;

  background-color: #d9d9d9;

  h2 {
    font-size: 22px;
    color: orange;
  }
`;

const StorePageBlur = styled.div`
  height: 100%;
  width: 60vw;
  min-width: 800px;
  backdrop-filter: blur(8px);
  position: fixed;
`;
